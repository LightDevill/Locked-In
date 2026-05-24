import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { prisma } from './config/db';
import redis from './config/redis';
import authRoutes from './routes/auth.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// ── Middleware ────────────────────────────────────────────────
app.use(helmet());
app.use(cors());
app.use(express.json());

// ── Health Check ─────────────────────────────────────────────
app.get('/health', async (_req: Request, res: Response) => {
  let dbStatus = 'ok';
  let redisStatus = 'ok';

  try {
    await prisma.$queryRaw`SELECT 1`;
  } catch {
    dbStatus = 'unreachable';
  }

  try {
    await redis.ping();
  } catch {
    redisStatus = 'unreachable';
  }

  res.status(200).json({
    status: 'ok',
    message: 'Us backend is running.',
    services: { db: dbStatus, redis: redisStatus },
  });
});

// ── Routes ───────────────────────────────────────────────────
app.use('/api/auth', authRoutes);

// ── Boot ─────────────────────────────────────────────────────
app.listen(port, () => {
  console.log(`[server]: Running at http://localhost:${port}`);
});
