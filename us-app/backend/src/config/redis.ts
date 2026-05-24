import Redis from 'ioredis';

// ─────────────────────────────────────────────────────────────
// Redis Client (ioredis)
// Basic singleton connection for caching and real-time ops.
// ─────────────────────────────────────────────────────────────

const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD || undefined,
  maxRetriesPerRequest: 3,
  lazyConnect: true,
});

redis.on('connect', () => {
  console.log('[redis]: Connected successfully.');
});

redis.on('error', (err) => {
  console.error('[redis]: Connection error —', err.message);
});

export default redis;
