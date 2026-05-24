Us – Tech Stack PRD
Premium Styled Edition
Us – 4-Week Accelerated Development Plan
🚀 Compressed 4-Week Roadmap
Strategy: Parallel Development + MVP-First Approach
Key Changes:

Frontend & Backend teams work in parallel
Start with core emotional features (Thoughts, Miss You, Letters)
Defer advanced features (Doodle, Mood Analytics) to post-launch
Use rapid prototyping tools
Automated testing only for critical paths
Single developer can achieve this with focused 60-hour weeks
Week 1: Foundation Sprint (Days 1-7)
Day 1-2: Project Setup & Infrastructure ⚙️
Backend Setup (6 hours)
Bash

# Initialize Node.js + TypeScript project
npm init -y
npm install express typescript prisma @prisma/client socket.io redis ioredis
npm install jsonwebtoken bcrypt zod cors helmet express-rate-limit
npm install -D @types/node @types/express @types/jsonwebtoken tsx nodemon

# Initialize Prisma
npx prisma init

# Setup folder structure
backend/
├── src/
│   ├── index.ts
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middleware/
│   ├── utils/
│   └── types/
├── prisma/
│   └── schema.prisma
└── package.json
Deliverable:

✅ Express server running on localhost:3000
✅ PostgreSQL connected via Prisma
✅ Redis connected
✅ Basic health check endpoint: GET /health
Android Setup (6 hours)
Kotlin

// Create Android project with:
// - Minimum SDK 26 (Android 8.0)
// - Jetpack Compose
// - Kotlin 1.9+
// - Hilt enabled

// build.gradle.kts (app level)
plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("com.google.dagger.hilt.android")
    id("com.google.devtools.ksp")
}

dependencies {
    // Core
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.7.0")
    implementation("androidx.activity:activity-compose:1.8.2")

    // Compose
    implementation(platform("androidx.compose:compose-bom:2024.01.00"))
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.material3:material3")
    implementation("androidx.navigation:navigation-compose:2.7.6")

    // Hilt
    implementation("com.google.dagger:hilt-android:2.50")
    ksp("com.google.dagger:hilt-compiler:2.50")

    // Room
    implementation("androidx.room:room-runtime:2.6.1")
    implementation("androidx.room:room-ktx:2.6.1")
    ksp("androidx.room:room-compiler:2.6.1")

    // Retrofit
    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    implementation("com.squareup.okhttp3:okhttp:4.12.0")

    // Kotlinx Serialization
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.0")
    implementation("com.jakewharton.retrofit:retrofit2-kotlinx-serialization-converter:1.0.0")
}

// Setup module structure
app/src/main/java/com/us/app/
├── UsApplication.kt
├── di/
├── data/
│   ├── local/
│   ├── remote/
│   └── repository/
├── domain/
│   ├── model/
│   └── usecase/
└── ui/
    ├── theme/
    ├── navigation/
    └── screens/
Deliverable:

✅ Android project compiles
✅ Hilt DI configured
✅ Room database skeleton
✅ Retrofit API client skeleton
✅ Navigation scaffold
Day 3-4: Authentication System 🔐
Backend: Auth Endpoints (8 hours)
Prisma Schema (Core Models):

prisma

model User {
  id                String       @id @default(uuid())
  name              String       @db.VarChar(100)
  profilePictureUrl String?      @db.Text
  deviceTokens      Json?
  createdAt         DateTime     @default(now())
  updatedAt         DateTime     @updatedAt

  relationshipAsUser1 Relationship? @relation("User1")
  relationshipAsUser2 Relationship? @relation("User2")
  thoughts            Thought[]
  tasks               Task[]
  letters             Letter[]
  moods               Mood[]
}

model Relationship {
  id                    String   @id @default(uuid())
  connectionCode        String   @unique @db.Char(6)
  user1Id               String   @unique
  user2Id               String?  @unique
  relationshipStartDate DateTime @db.Date
  status                RelationshipStatus @default(PENDING)
  createdAt             DateTime @default(now())
  updatedAt             DateTime @updatedAt

  user1    User      @relation("User1", fields: [user1Id], references: [id], onDelete: Cascade)
  user2    User?     @relation("User2", fields: [user2Id], references: [id], onDelete: Cascade)
  thoughts Thought[]
  tasks    Task[]
  letters  Letter[]
  moods    Mood[]

  @@index([connectionCode])
}

enum RelationshipStatus {
  PENDING
  ACTIVE
  DISCONNECTED
}
API Endpoints:

TypeScript

// routes/auth.ts
router.post('/generate-code', generateConnectionCode);
router.post('/join', joinConnection);
router.post('/refresh', refreshToken);
router.post('/logout', authMiddleware, logout);

// Implement:
// 1. Generate 6-char code (crypto.randomBytes)
// 2. JWT signing (1h access, 30d refresh)
// 3. Rate limiting (5 attempts/15min)
Deliverable:

✅ POST /api/auth/generate-code → returns code
✅ POST /api/auth/join → validates code, creates user2, returns JWT
✅ JWT middleware working
✅ Prisma migrations applied
Android: Auth Flow (8 hours)
Kotlin

// UI Screens
@Composable
fun LoginScreen() {
    // Two buttons: "Create Connection" or "Join Connection"
}

@Composable
fun CreateConnectionScreen() {
    // Input: name, relationship start date
    // Calls: POST /api/auth/generate-code
    // Shows: 6-char code to share
}

@Composable
fun JoinConnectionScreen() {
    // Input: 6-char code, name
    // Calls: POST /api/auth/join
    // Navigates to Dashboard on success
}

// Data Layer
interface AuthApi {
    @POST("auth/generate-code")
    suspend fun generateCode(@Body request: GenerateCodeRequest): GenerateCodeResponse

    @POST("auth/join")
    suspend fun joinConnection(@Body request: JoinRequest): JoinResponse
}

// Repository
class AuthRepository @Inject constructor(
    private val api: AuthApi,
    private val prefs: EncryptedSharedPreferences
) {
    suspend fun createConnection(name: String, startDate: String): Result<String> {
        val response = api.generateCode(GenerateCodeRequest(name, startDate))
        prefs.saveToken(response.accessToken)
        return Result.success(response.connectionCode)
    }
}

// ViewModel
@HiltViewModel
class AuthViewModel @Inject constructor(
    private val authRepository: AuthRepository
) : ViewModel() {
    val connectionCode = MutableStateFlow<String?>(null)

    fun createConnection(name: String, startDate: String) {
        viewModelScope.launch {
            authRepository.createConnection(name, startDate).onSuccess {
                connectionCode.value = it
            }
        }
    }
}
Deliverable:

✅ Auth screens UI (basic, no styling yet)
✅ API integration working
✅ JWT stored in EncryptedSharedPreferences
✅ Navigation to Dashboard after auth
Day 5-7: Core Data Models + Dashboard 📊
Backend: Core Schemas (6 hours)
prisma

// Add to schema.prisma

model Thought {
  id             String   @id @default(uuid())
  relationshipId String
  authorId       String
  text           String   @db.Text
  moodEmoji      String?  @db.VarChar(10)
  edited         Boolean  @default(false)
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  relationship Relationship @relation(fields: [relationshipId], references: [id], onDelete: Cascade)
  author       User         @relation(fields: [authorId], references: [id])
  reactions    ThoughtReaction[]

  @@index([relationshipId, createdAt(sort: Desc)])
}

model ThoughtReaction {
  id        String   @id @default(uuid())
  thoughtId String
  userId    String
  emoji     String   @db.VarChar(10)
  createdAt DateTime @default(now())

  thought Thought @relation(fields: [thoughtId], references: [id], onDelete: Cascade)

  @@unique([thoughtId, userId])
}

model Task {
  id                  String     @id @default(uuid())
  relationshipId      String
  title               String     @db.VarChar(500)
  description         String?    @db.Text
  type                TaskType
  assigneeId          String?
  status              TaskStatus @default(PENDING)
  completedByUser1At  DateTime?
  completedByUser2At  DateTime?
  createdBy           String
  createdAt           DateTime   @default(now())
  updatedAt           DateTime   @updatedAt

  relationship Relationship @relation(fields: [relationshipId], references: [id], onDelete: Cascade)

  @@index([relationshipId, status])
}

enum TaskType {
  INDIVIDUAL
  SHARED
}

enum TaskStatus {
  PENDING
  COMPLETED_BY_ONE
  COMPLETED
}

model Letter {
  id              String       @id @default(uuid())
  relationshipId  String
  authorId        String
  recipientId     String
  title           String?      @db.VarChar(100)
  content         String       @db.Text
  theme           String       @default("minimal")
  openWhenTrigger String?      @db.VarChar(100)
  status          LetterStatus @default(DRAFT)
  sealedAt        DateTime?
  deliveredAt     DateTime?
  openedAt        DateTime?
  createdAt       DateTime     @default(now())

  relationship Relationship @relation(fields: [relationshipId], references: [id], onDelete: Cascade)

  @@index([relationshipId, status])
}

enum LetterStatus {
  DRAFT
  SEALED
  DELIVERED
  OPENED
}

model Mood {
  id             String   @id @default(uuid())
  relationshipId String
  userId         String
  date           DateTime @db.Date
  moodType       MoodType
  note           String?  @db.VarChar(100)
  createdAt      DateTime @default(now())

  relationship Relationship @relation(fields: [relationshipId], references: [id], onDelete: Cascade)

  @@unique([userId, date])
  @@index([relationshipId, date])
}

enum MoodType {
  HAPPY
  LOVING
  SAD
  ANXIOUS
  ANGRY
  TIRED
  EXCITED
}
Run migrations:

Bash

npx prisma migrate dev --name add_core_models
npx prisma generate
Deliverable:

✅ All core models in database
✅ Prisma client generated
Android: Room Database (6 hours)
Kotlin

// Local entities mirror API models

@Entity(tableName = "thoughts")
data class ThoughtEntity(
    @PrimaryKey val id: String,
    val relationshipId: String,
    val authorId: String,
    val text: String,
    val moodEmoji: String?,
    val createdAt: Long,
    val syncStatus: SyncStatus = SyncStatus.SYNCED
)

@Entity(tableName = "tasks")
data class TaskEntity(
    @PrimaryKey val id: String,
    val relationshipId: String,
    val title: String,
    val description: String?,
    val type: TaskType,
    val status: TaskStatus,
    val createdAt: Long,
    val syncStatus: SyncStatus
)

@Dao
interface ThoughtDao {
    @Query("SELECT * FROM thoughts WHERE relationshipId = :relationshipId ORDER BY createdAt DESC")
    fun observeThoughts(relationshipId: String): Flow<List<ThoughtEntity>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(thought: ThoughtEntity)

    @Query("DELETE FROM thoughts WHERE id = :id")
    suspend fun delete(id: String)
}

@Database(
    entities = [ThoughtEntity::class, TaskEntity::class, LetterEntity::class, MoodEntity::class],
    version = 1
)
abstract class UsDatabase : RoomDatabase() {
    abstract fun thoughtDao(): ThoughtDao
    abstract fun taskDao(): TaskDao
    abstract fun letterDao(): LetterDao
    abstract fun moodDao(): MoodDao
}
Deliverable:

✅ Room database with all entities
✅ DAOs for CRUD operations
✅ Database provides Flow<> for reactive UI
Dashboard UI (6 hours)
Kotlin

@Composable
fun DashboardScreen(
    viewModel: DashboardViewModel = hiltViewModel()
) {
    val state by viewModel.state.collectAsState()

    Column(modifier = Modifier.fillMaxSize().padding(20.dp)) {
        // Days together counter
        Text(
            text = "${state.daysTogether} days together",
            style = MaterialTheme.typography.headlineMedium
        )

        Spacer(modifier = Modifier.height(24.dp))

        // Quick stats
        Row(modifier = Modifier.fillMaxWidth()) {
            StatCard(
                title = "Tasks",
                count = state.pendingTasksCount,
                onClick = { /* Navigate to Tasks */ }
            )
            Spacer(modifier = Modifier.width(16.dp))
            StatCard(
                title = "Letters",
                count = state.unreadLettersCount,
                onClick = { /* Navigate to Letters */ }
            )
        }

        Spacer(modifier = Modifier.height(24.dp))

        // Recent thoughts
        Text("Recent Thoughts", style = MaterialTheme.typography.titleMedium)
        LazyColumn {
            items(state.recentThoughts) { thought ->
                ThoughtCard(thought)
            }
        }
    }
}

@HiltViewModel
class DashboardViewModel @Inject constructor(
    private val thoughtRepository: ThoughtRepository,
    private val taskRepository: TaskRepository
) : ViewModel() {
    val state = MutableStateFlow(DashboardState())

    init {
        viewModelScope.launch {
            combine(
                thoughtRepository.getRecentThoughts(limit = 5),
                taskRepository.getPendingTasksCount()
            ) { thoughts, taskCount ->
                DashboardState(
                    recentThoughts = thoughts,
                    pendingTasksCount = taskCount
                )
            }.collect { state.value = it }
        }
    }
}
Deliverable:

✅ Basic dashboard UI
✅ Shows days together, task/letter counts
✅ Recent thoughts list
✅ Navigation to other screens (placeholders)
Week 2: Core Features (Days 8-14)
Day 8-10: Thoughts Feed (Complete) 💭
Backend API (8 hours)
TypeScript

// routes/thoughts.ts
router.get('/', authMiddleware, getThoughts);
router.post('/', authMiddleware, createThought);
router.put('/:id', authMiddleware, updateThought);
router.delete('/:id', authMiddleware, deleteThought);
router.post('/:id/react', authMiddleware, reactToThought);

// controllers/thoughtController.ts
export async function createThought(req, res) {
  const { text, moodEmoji } = req.body;
  const { relationshipId, user } = req;

  const thought = await prisma.thought.create({
    data: {
      relationshipId,
      authorId: user.id,
      text,
      moodEmoji
    },
    include: { author: { select: { id: true, name: true } } }
  });

  // Emit WebSocket event to partner
  io.to(relationshipId).emit('new_thought', thought);

  // Send FCM push
  await sendPushNotification(req.partnerId, {
    type: 'new_thought',
    title: `${user.name} shared a thought`,
    body: text.substring(0, 100)
  });

  res.status(201).json({ thought });
}
Deliverable:

✅ Full CRUD for thoughts
✅ WebSocket integration (Socket.io)
✅ FCM push notifications
Android UI (10 hours)
Kotlin

@Composable
fun ThoughtsScreen(
    viewModel: ThoughtsViewModel = hiltViewModel()
) {
    val thoughts by viewModel.thoughts.collectAsState()
    val inputText by viewModel.inputText.collectAsState()

    Scaffold(
        topBar = { TopAppBar(title = { Text("Thoughts") }) },
        floatingActionButton = {
            FloatingActionButton(onClick = { viewModel.postThought() }) {
                Icon(Icons.Default.Send, "Post")
            }
        }
    ) { padding ->
        Column(modifier = Modifier.padding(padding)) {
            // Input field
            OutlinedTextField(
                value = inputText,
                onValueChange = { viewModel.updateInputText(it) },
                modifier = Modifier.fillMaxWidth().padding(16.dp),
                placeholder = { Text("Share a thought...") },
                maxLines = 3
            )

            // Thoughts list
            LazyColumn {
                items(thoughts, key = { it.id }) { thought ->
                    ThoughtCard(
                        thought = thought,
                        isOwnThought = thought.authorId == viewModel.currentUserId,
                        onReact = { emoji -> viewModel.reactToThought(thought.id, emoji) }
                    )
                }
            }
        }
    }
}

@Composable
fun ThoughtCard(
    thought: Thought,
    isOwnThought: Boolean,
    onReact: (String) -> Unit
) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 8.dp),
        colors = CardDefaults.cardColors(
            containerColor = if (isOwnThought)
                Color(0xFFFFF5F0) // Clay tint for own thoughts
            else
                Color(0xFFF5F3EE) // Secondary paper for partner
        )
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = thought.text,
                style = MaterialTheme.typography.bodyLarge
            )

            Spacer(modifier = Modifier.height(8.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(
                    text = formatTimestamp(thought.createdAt),
                    style = MaterialTheme.typography.labelSmall,
                    color = Color.Gray
                )

                // Reaction row
                Row {
                    ReactionButton("❤️", thought.hasReaction("❤️"), onClick = { onReact("❤️") })
                    ReactionButton("😂", thought.hasReaction("😂"), onClick = { onReact("😂") })
                    ReactionButton("🥰", thought.hasReaction("🥰"), onClick = { onReact("🥰") })
                }
            }
        }
    }
}

@HiltViewModel
class ThoughtsViewModel @Inject constructor(
    private val thoughtRepository: ThoughtRepository,
    private val webSocketManager: WebSocketManager
) : ViewModel() {
    val thoughts = thoughtRepository.observeThoughts().stateIn(
        viewModelScope,
        SharingStarted.WhileSubscribed(5000),
        emptyList()
    )

    val inputText = MutableStateFlow("")

    fun postThought() {
        viewModelScope.launch {
            thoughtRepository.createThought(inputText.value)
            inputText.value = ""
        }
    }

    fun reactToThought(thoughtId: String, emoji: String) {
        viewModelScope.launch {
            thoughtRepository.addReaction(thoughtId, emoji)
        }
    }

    init {
        // Listen to WebSocket events
        viewModelScope.launch {
            webSocketManager.observeThoughts().collect { newThought ->
                thoughtRepository.insertLocal(newThought)
            }
        }
    }
}
Deliverable:

✅ Thoughts feed UI (Wabi-Sabi design with paper colors)
✅ Post thought input
✅ Reaction system
✅ Real-time updates via WebSocket
✅ Offline-first (optimistic UI)
Day 11-12: Tasks Feature ✅
Backend (4 hours)
TypeScript

// routes/tasks.ts
router.get('/', authMiddleware, getTasks);
router.post('/', authMiddleware, createTask);
router.patch('/:id/complete', authMiddleware, completeTask);

// controllers/taskController.ts
export async function completeTask(req, res) {
  const { id } = req.params;
  const { user, relationshipId, partnerId } = req;

  const task = await prisma.task.findUnique({ where: { id } });

  if (task.type === 'INDIVIDUAL') {
    await prisma.task.update({
      where: { id },
      data: { status: 'COMPLETED' }
    });

    io.to(relationshipId).emit('task_completed', { taskId: id, celebration: false });
    return res.json({ task, celebration: false });
  }

  // Shared task logic
  const isUser1 = task.relationshipId === relationshipId && user.id === task.user1Id;

  if (isUser1 && !task.completedByUser1At) {
    await prisma.task.update({
      where: { id },
      data: {
        completedByUser1At: new Date(),
        status: task.completedByUser2At ? 'COMPLETED' : 'COMPLETED_BY_ONE'
      }
    });
  } else if (!isUser1 && !task.completedByUser2At) {
    await prisma.task.update({
      where: { id },
      data: {
        completedByUser2At: new Date(),
        status: task.completedByUser1At ? 'COMPLETED' : 'COMPLETED_BY_ONE'
      }
    });
  }

  const updatedTask = await prisma.task.findUnique({ where: { id } });
  const celebration = updatedTask.status === 'COMPLETED';

  io.to(relationshipId).emit('task_completed', { task: updatedTask, celebration });

  if (celebration) {
    await sendPushNotification(partnerId, {
      type: 'celebration',
      title: '🎉 Task completed together!',
      body: task.title
    });
  }

  res.json({ task: updatedTask, celebration });
}
Deliverable:

✅ Task CRUD endpoints
✅ Shared task completion logic
✅ Celebration WebSocket event
Android UI (8 hours)
Kotlin

@Composable
fun TasksScreen(
    viewModel: TasksViewModel = hiltViewModel()
) {
    val tasks by viewModel.tasks.collectAsState()
    val showCelebration by viewModel.showCelebration.collectAsState()

    Scaffold(
        floatingActionButton = {
            FloatingActionButton(onClick = { viewModel.showAddTaskDialog() }) {
                Icon(Icons.Default.Add, "Add Task")
            }
        }
    ) { padding ->
        LazyColumn(modifier = Modifier.padding(padding)) {
            items(tasks, key = { it.id }) { task ->
                TaskCard(
                    task = task,
                    onComplete = { viewModel.completeTask(task.id) }
                )
            }
        }
    }

    // Celebration animation
    if (showCelebration) {
        ConfettiAnimation(onFinish = { viewModel.hideCelebration() })
    }
}

@Composable
fun TaskCard(task: Task, onComplete: () -> Unit) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
            .pointerInput(Unit) {
                detectHorizontalDragGestures { change, dragAmount ->
                    if (dragAmount > 100) onComplete() // Swipe right to complete
                }
            }
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Checkbox(
                checked = task.status == TaskStatus.COMPLETED,
                onCheckedChange = { onComplete() }
            )

            Column(modifier = Modifier.weight(1f).padding(start = 16.dp)) {
                Text(text = task.title, style = MaterialTheme.typography.bodyLarge)

                if (task.type == TaskType.SHARED) {
                    Text(
                        text = when (task.status) {
                            TaskStatus.PENDING -> "Both must complete"
                            TaskStatus.COMPLETED_BY_ONE -> "Waiting for partner"
                            TaskStatus.COMPLETED -> "✓ Completed together!"
                        },
                        style = MaterialTheme.typography.labelSmall,
                        color = Color.Gray
                    )
                }
            }

            if (task.type == TaskType.SHARED) {
                Icon(
                    imageVector = Icons.Default.People,
                    contentDescription = "Shared task",
                    tint = Color(0xFF7D8F69) // Bamboo
                )
            }
        }
    }
}

@Composable
fun ConfettiAnimation(onFinish: () -> Unit) {
    // Use Lottie or custom Canvas animation
    LottieAnimation(
        composition = rememberLottieComposition(LottieCompositionSpec.RawRes(R.raw.confetti)),
        iterations = 1,
        modifier = Modifier.fillMaxSize()
    )
    LaunchedEffect(Unit) {
        delay(2000)
        onFinish()
    }
}
Deliverable:

✅ Task list with swipe-to-complete
✅ Shared task status indicators
✅ Confetti celebration on joint completion
✅ Add task dialog
Day 13-14: Miss You Pings ❤️
Backend (2 hours)
TypeScript

// routes/pings.ts
router.post('/', authMiddleware, sendPing);
router.get('/today', authMiddleware, getTodayPings);

export async function sendPing(req, res) {
  const { pingType } = req.body; // "MISS_YOU", "HUG", etc.
  const { relationshipId, user, partnerId } = req;

  const ping = await prisma.ping.create({
    data: { relationshipId, senderId: user.id, pingType }
  });

  // Real-time WebSocket
  io.to(relationshipId).emit('miss_you_ping', { pingType, senderName: user.name });

  // High-priority FCM push
  await sendPushNotification(partnerId, {
    type: 'miss_you',
    title: `${user.name} misses you ❤️`,
    priority: 'high'
  });

  res.json({ ping });
}
Deliverable:

✅ Ping API endpoints
✅ WebSocket + FCM integration
Android UI (6 hours)
Kotlin

@Composable
fun MissYouScreen(
    viewModel: MissYouViewModel = hiltViewModel()
) {
    val todayCount by viewModel.todayCount.collectAsState()

    Column(
        modifier = Modifier.fillMaxSize().padding(20.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Counter
        Text(
            text = "$todayCount",
            style = MaterialTheme.typography.displayLarge,
            color = Color(0xFFE77A5E) // Persimmon
        )
        Text("pings today", style = MaterialTheme.typography.bodyMedium)

        Spacer(modifier = Modifier.height(48.dp))

        // Ping buttons grid
        val pings = listOf(
            PingType.MISS_YOU to "❤️ Miss You",
            PingType.HUG to "🤗 Hug",
            PingType.KISS to "😘 Kiss",
            PingType.THINKING_OF_YOU to "💭 Thinking of You",
            PingType.LOVE_YOU to "💕 Love You"
        )

        pings.chunked(2).forEach { row ->
            Row(modifier = Modifier.fillMaxWidth()) {
                row.forEach { (type, label) ->
                    PingButton(
                        label = label,
                        modifier = Modifier.weight(1f).padding(8.dp),
                        onClick = { viewModel.sendPing(type) }
                    )
                }
            }
        }
    }
}

@Composable
fun PingButton(label: String, modifier: Modifier, onClick: () -> Unit) {
    var isPressed by remember { mutableStateOf(false) }
    var showPulse by remember { mutableStateOf(false) }

    Box(modifier = modifier) {
        Button(
            onClick = {
                onClick()
                showPulse = true
            },
            modifier = Modifier
                .fillMaxWidth()
                .height(100.dp),
            colors = ButtonDefaults.buttonColors(
                containerColor = Color(0xFFFFE5DE) // Persimmon tint
            )
        ) {
            Text(label, fontSize = 18.sp)
        }

        // Pulse animation on tap
        if (showPulse) {
            PulseRingAnimation(onFinish = { showPulse = false })
        }
    }
}

@Composable
fun PulseRingAnimation(onFinish: () -> Unit) {
    val infiniteTransition = rememberInfiniteTransition()
    val scale by infiniteTransition.animateFloat(
        initialValue = 1f,
        targetValue = 1.8f,
        animationSpec = infiniteRepeatable(
            animation = tween(1000),
            repeatMode = RepeatMode.Restart,
            iterations = 3
        )
    )

    Canvas(modifier = Modifier.fillMaxSize()) {
        drawCircle(
            color = Color(0xFFE77A5E).copy(alpha = 0.3f),
            radius = size.minDimension / 2 * scale,
            style = Stroke(width = 4.dp.toPx())
        )
    }

    LaunchedEffect(Unit) {
        delay(3000)
        onFinish()
    }
}

@HiltViewModel
class MissYouViewModel @Inject constructor(
    private val pingRepository: PingRepository
) : ViewModel() {
    val todayCount = pingRepository.observeTodayCount().stateIn(
        viewModelScope,
        SharingStarted.WhileSubscribed(),
        0
    )

    fun sendPing(type: PingType) {
        viewModelScope.launch {
            pingRepository.sendPing(type)
            // Trigger haptic feedback
            // Trigger local animation
        }
    }
}
Deliverable:

✅ Miss You screen with 5 ping buttons
✅ Pulse ring animation on tap
✅ Real-time counter updates
✅ Haptic feedback on send
Week 3: Emotional Features (Days 15-21)
Day 15-17: Love Letters (Complete) 💌
Backend (6 hours)
TypeScript

// Add BullMQ for scheduled delivery
import { Queue, Worker } from 'bullmq';

const letterQueue = new Queue('letters', {
  connection: { host: 'localhost', port: 6379 }
});

// routes/letters.ts
router.post('/', authMiddleware, createLetter);
router.post('/:id/seal', authMiddleware, sealLetter);
router.patch('/:id/open', authMiddleware, openLetter);

export async function sealLetter(req, res) {
  const { id } = req.params;
  const { scheduledFor, openWhenTrigger } = req.body;

  const letter = await prisma.letter.update({
    where: { id },
    data: {
      status: 'SEALED',
      sealedAt: new Date(),
      scheduledFor: scheduledFor ? new Date(scheduledFor) : null,
      openWhenTrigger
    }
  });

  if (scheduledFor) {
    // Schedule delivery job
    await letterQueue.add(
      'deliver_letter',
      { letterId: id },
      { delay: new Date(scheduledFor).getTime() - Date.now() }
    );
  } else {
    // Deliver immediately
    await deliverLetter(id);
  }

  res.json({ letter });
}

async function deliverLetter(letterId: string) {
  const letter = await prisma.letter.update({
    where: { id: letterId },
    data: { status: 'DELIVERED', deliveredAt: new Date() }
  });

  io.to(letter.relationshipId).emit('letter_received', { letterId });

  await sendPushNotification(letter.recipientId, {
    type: 'letter',
    title: '💌 You have a new letter',
    body: letter.openWhenTrigger || 'Open when you're ready'
  });
}

// Worker
const worker = new Worker('letters', async (job) => {
  await deliverLetter(job.data.letterId);
});
Deliverable:

✅ Letter CRUD + seal/open endpoints
✅ BullMQ scheduled delivery
✅ WebSocket + FCM notifications
Android UI (12 hours)
Kotlin

@Composable
fun LettersScreen(viewModel: LettersViewModel = hiltViewModel()) {
    val letters by viewModel.letters.collectAsState()

    Column {
        // Tabs: Inbox, Sent, Drafts
        TabRow(selectedTabIndex = viewModel.selectedTab) {
            Tab(selected = true, onClick = {}, text = { Text("Inbox") })
            Tab(selected = false, onClick = {}, text = { Text("Sent") })
        }

        LazyColumn {
            items(letters) { letter ->
                if (letter.status == LetterStatus.SEALED) {
                    SealedLetterCard(
                        letter = letter,
                        onClick = { viewModel.openLetter(letter.id) }
                    )
                } else {
                    OpenedLetterCard(letter = letter)
                }
            }
        }
    }
}

@Composable
fun SealedLetterCard(letter: Letter, onClick: () -> Unit) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp)
            .graphicsLayer { rotationZ = Random.nextFloat() * 2f - 1f }, // Slight rotation
        onClick = onClick,
        colors = CardDefaults.cardColors(containerColor = Color(0xFFFFF5F0)) // Clay 50
    ) {
        Column(modifier = Modifier.padding(20.dp)) {
            // Envelope illustration
            Icon(
                painter = painterResource(R.drawable.ic_envelope),
                contentDescription = null,
                modifier = Modifier.size(64.dp).align(Alignment.CenterHorizontally),
                tint = Color(0xFFE77A5E) // Persimmon
            )

            Spacer(modifier = Modifier.height(16.dp))

            Text(
                text = letter.title ?: "Untitled",
                style = MaterialTheme.typography.titleMedium,
                textAlign = TextAlign.Center,
                modifier = Modifier.fillMaxWidth()
            )

            if (letter.openWhenTrigger != null) {
                Text(
                    text = "Open when: ${letter.openWhenTrigger}",
                    style = MaterialTheme.typography.bodySmall,
                    color = Color.Gray,
                    fontStyle = FontStyle.Italic,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.fillMaxWidth()
                )
            }
        }
    }
}

@Composable
fun LetterOpeningAnimation(
    letter: Letter,
    onFinish: () -> Unit
) {
    var animationPhase by remember { mutableStateOf(0) }

    LaunchedEffect(Unit) {
        // Phase 0: Unseal (800ms)
        delay(800)
        animationPhase = 1

        // Phase 1: Unfold (600ms)
        delay(600)
        animationPhase = 2

        // Phase 2: Reveal content
        delay(400)
        onFinish()
    }

    Box(modifier = Modifier.fillMaxSize()) {
        when (animationPhase) {
            0 -> UnsealAnimation()
            1 -> UnfoldAnimation()
            2 -> FadeInContent(letter)
        }
    }
}

@Composable
fun WriteLetterScreen(viewModel: WriteLetterViewModel = hiltViewModel()) {
    val content by viewModel.content.collectAsState()
    val title by viewModel.title.collectAsState()

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Write Letter") },
                actions = {
                    TextButton(onClick = { viewModel.saveDraft() }) {
                        Text("Save Draft")
                    }
                }
            )
        },
        floatingActionButton = {
            FloatingActionButton(onClick = { viewModel.showSealDialog() }) {
                Icon(Icons.Default.Send, "Seal & Send")
            }
        }
    ) { padding ->
        Column(modifier = Modifier.padding(padding).padding(20.dp)) {
            OutlinedTextField(
                value = title,
                onValueChange = { viewModel.updateTitle(it) },
                label = { Text("Title (optional)") },
                modifier = Modifier.fillMaxWidth()
            )

            Spacer(modifier = Modifier.height(16.dp))

            // Letter content (serif font for warmth)
            OutlinedTextField(
                value = content,
                onValueChange = { viewModel.updateContent(it) },
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(1f),
                textStyle = TextStyle(
                    fontFamily = FontFamily.Serif,
                    fontSize = 18.sp,
                    lineHeight = 28.sp
                ),
                placeholder = { Text("Write from the heart...") }
            )
        }
    }

    // Seal dialog
    if (viewModel.showingSealDialog) {
        SealLetterDialog(
            onConfirm = { scheduledFor, openWhen ->
                viewModel.sealAndSend(scheduledFor, openWhen)
            },
            onDismiss = { viewModel.dismissSealDialog() }
        )
    }
}
Deliverable:

✅ Letter list (inbox/sent/drafts)
✅ Sealed letter cards with envelope design
✅ Write letter screen (serif font)
✅ Seal dialog (schedule + open when)
✅ Opening animation (multi-phase)
✅ Full-screen letter reading view
Day 18-19: Mood Jar 🌈
Backend (3 hours)
TypeScript

// routes/moods.ts
router.post('/', authMiddleware, logMood); // Upsert (one per day)
router.get('/', authMiddleware, getMoods); // Query by date range

export async function logMood(req, res) {
  const { date, moodType, note } = req.body;
  const { relationshipId, user, partnerId } = req;

  const mood = await prisma.mood.upsert({
    where: {
      userId_date: { userId: user.id, date: new Date(date) }
    },
    update: { moodType, note },
    create: {
      relationshipId,
      userId: user.id,
      date: new Date(date),
      moodType,
      note
    }
  });

  io.to(relationshipId).emit('mood_logged', { mood });

  await sendPushNotification(partnerId, {
    type: 'mood',
    title: `${user.name} logged their mood`,
    body: `Feeling ${moodType.toLowerCase()} today`
  });

  res.json({ mood });
}
Deliverable:

✅ Mood upsert endpoint
✅ Query moods by date range
✅ WebSocket notification
Android UI (9 hours)
Kotlin

@Composable
fun MoodJarScreen(viewModel: MoodJarViewModel = hiltViewModel()) {
    val moods by viewModel.moods.collectAsState()
    val selectedView by viewModel.selectedView.collectAsState() // WEEK, MONTH, YEAR

    Column(modifier = Modifier.fillMaxSize()) {
        // Mood jar visualization
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(300.dp)
                .padding(32.dp)
        ) {
            MoodJarVisualization(
                moods = moods,
                view = selectedView
            )
        }

        // View toggle
        SegmentedControl(
            items = listOf("Week", "Month", "Year"),
            selectedIndex = when (selectedView) {
                MoodView.WEEK -> 0
                MoodView.MONTH -> 1
                MoodView.YEAR -> 2
            },
            onItemSelected = { index ->
                viewModel.setView(
                    when (index) {
                        0 -> MoodView.WEEK
                        1 -> MoodView.MONTH
                        else -> MoodView.YEAR
                    }
                )
            }
        )

        Spacer(modifier = Modifier.height(24.dp))

        // Log today's mood
        if (viewModel.todayMood == null) {
            MoodSelector(onMoodSelected = { type, note ->
                viewModel.logMood(type, note)
            })
        } else {
            Text("Today's mood: ${viewModel.todayMood.type}")
        }
    }
}

@Composable
fun MoodJarVisualization(moods: List<Mood>, view: MoodView) {
    Canvas(modifier = Modifier.fillMaxSize()) {
        val jarWidth = size.width * 0.8f
        val jarHeight = size.height * 0.9f
        val jarLeft = (size.width - jarWidth) / 2
        val jarTop = size.height * 0.1f

        // Draw glass jar outline
        drawPath(
            path = Path().apply {
                // Jar body
                moveTo(jarLeft, jarTop)
                lineTo(jarLeft, jarTop + jarHeight)
                lineTo(jarLeft + jarWidth, jarTop + jarHeight)
                lineTo(jarLeft + jarWidth, jarTop)

                // Jar neck
                val neckWidth = jarWidth * 0.6f
                val neckLeft = jarLeft + (jarWidth - neckWidth) / 2
                moveTo(neckLeft, jarTop)
                lineTo(neckLeft, jarTop - 30f)
                lineTo(neckLeft + neckWidth, jarTop - 30f)
                lineTo(neckLeft + neckWidth, jarTop)
            },
            color = Color.LightGray,
            style = Stroke(width = 2.dp.toPx())
        )

        // Draw mood orbs
        val orbRadius = 12.dp.toPx()
        val orbsPerRow = (jarWidth / (orbRadius * 2.5)).toInt()

        moods.forEachIndexed { index, mood ->
            val row = index / orbsPerRow
            val col = index % orbsPerRow

            val x = jarLeft + (col + 0.5f) * (jarWidth / orbsPerRow)
            val y = jarTop + jarHeight - (row + 0.5f) * (orbRadius * 2.5f)

            drawCircle(
                color = getMoodColor(mood.type),
                radius = orbRadius,
                center = Offset(x, y)
            )
        }
    }
}

fun getMoodColor(type: MoodType): Color = when (type) {
    MoodType.HAPPY -> Color(0xFFFFD93D)
    MoodType.LOVING -> Color(0xFFFF6B8A)
    MoodType.SAD -> Color(0xFF7C9FFC)
    MoodType.ANXIOUS -> Color(0xFFB088F9)
    MoodType.ANGRY -> Color(0xFFFF5252)
    MoodType.TIRED -> Color(0xFFC9D1D9)
    MoodType.EXCITED -> Color(0xFFFF9A56)
}

@Composable
fun MoodSelector(onMoodSelected: (MoodType, String) -> Unit) {
    var selectedMood by remember { mutableStateOf<MoodType?>(null) }
    var note by remember { mutableStateOf("") }

    Column {
        Text("How are you feeling today?", style = MaterialTheme.typography.titleMedium)

        Spacer(modifier = Modifier.height(16.dp))

        // Mood buttons grid
        FlowRow {
            MoodType.values().forEach { mood ->
                MoodButton(
                    mood = mood,
                    isSelected = mood == selectedMood,
                    onClick = { selectedMood = mood }
                )
            }
        }

        if (selectedMood != null) {
            OutlinedTextField(
                value = note,
                onValueChange = { note = it },
                label = { Text("Optional note") },
                modifier = Modifier.fillMaxWidth()
            )

            Button(
                onClick = { onMoodSelected(selectedMood!!, note) },
                modifier = Modifier.fillMaxWidth()
            ) {
                Text("Log Mood")
            }
        }
    }
}
Deliverable:

✅ Mood jar SVG visualization
✅ Weekly/Monthly/Yearly views
✅ Mood selector UI
✅ Tap orb to see date + notes
✅ Real-time mood updates
Day 20-21: Memories (Basic Upload) 📸
Backend (4 hours)
TypeScript

// Use Multer for multipart uploads
import multer from 'multer';
import sharp from 'sharp'; // Image compression

const upload = multer({ dest: '/tmp/uploads' });

router.post('/', authMiddleware, upload.array('images', 20), uploadMemories);

export async function uploadMemories(req, res) {
  const files = req.files as Express.Multer.File[];
  const { relationshipId, user } = req;

  const memories = await Promise.all(
    files.map(async (file) => {
      // Compress image
      const compressed = await sharp(file.path)
        .resize(2048, 2048, { fit: 'inside' })
        .jpeg({ quality: 85 })
        .toBuffer();

      // Upload to MinIO/S3
      const imageUrl = await uploadToStorage(compressed, relationshipId);

      // Generate thumbnail
      const thumbnail = await sharp(file.path)
        .resize(400, 400, { fit: 'cover' })
        .jpeg({ quality: 80 })
        .toBuffer();

      const thumbnailUrl = await uploadToStorage(thumbnail, relationshipId, 'thumb');

      // Save to database
      return prisma.memory.create({
        data: {
          relationshipId,
          uploadedBy: user.id,
          imageUrl,
          thumbnailUrl,
          memoryDate: new Date()
        }
      });
    })
  );

  io.to(relationshipId).emit('memories_added', { count: memories.length });

  res.json({ memories });
}
Deliverable:

✅ Multi-file upload endpoint
✅ Image compression (Sharp)
✅ MinIO/S3 integration
✅ Thumbnail generation
Android UI (8 hours)
Kotlin

@Composable
fun MemoriesScreen(viewModel: MemoriesViewModel = hiltViewModel()) {
    val memories by viewModel.memories.collectAsState()

    Scaffold(
        floatingActionButton = {
            FloatingActionButton(onClick = { viewModel.showImagePicker() }) {
                Icon(Icons.Default.Add, "Add Memory")
            }
        }
    ) { padding ->
        LazyVerticalGrid(
            columns = GridCells.Fixed(3),
            modifier = Modifier.padding(padding)
        ) {
            items(memories) { memory ->
                MemoryThumbnail(
                    memory = memory,
                    onClick = { viewModel.openMemory(memory.id) }
                )
            }
        }
    }
}

@Composable
fun MemoryThumbnail(memory: Memory, onClick: () -> Unit) {
    Box(
        modifier = Modifier
            .aspectRatio(1f)
            .padding(2.dp)
            .clickable(onClick = onClick)
    ) {
        AsyncImage(
            model = ImageRequest.Builder(LocalContext.current)
                .data(memory.thumbnailUrl)
                .crossfade(true)
                .build(),
            contentDescription = null,
            modifier = Modifier.fillMaxSize(),
            contentScale = ContentScale.Crop
        )

        // Favorite indicator
        if (memory.isFavorited) {
            Icon(
                imageVector = Icons.Default.Favorite,
                contentDescription = "Favorited",
                tint = Color(0xFFE77A5E),
                modifier = Modifier.align(Alignment.TopEnd).padding(4.dp)
            )
        }
    }
}

@HiltViewModel
class MemoriesViewModel @Inject constructor(
    private val memoryRepository: MemoryRepository,
    private val imageCompressor: ImageCompressor
) : ViewModel() {
    val memories = memoryRepository.observeMemories().stateIn(
        viewModelScope,
        SharingStarted.WhileSubscribed(),
        emptyList()
    )

    fun showImagePicker() {
        // Launch Android image picker (multi-select)
        // On result, compress and upload
    }

    fun uploadMemories(uris: List<Uri>) {
        viewModelScope.launch {
            uris.forEach { uri ->
                val compressed = imageCompressor.compress(uri)
                memoryRepository.uploadMemory(compressed)
            }
        }
    }
}
Deliverable:

✅ Grid view of memory thumbnails
✅ Image picker (multi-select)
✅ Upload progress indicator
✅ Favorite indicator
✅ Full-screen memory view (basic)
Week 4: Polish & Launch (Days 22-28)
Day 22-23: UI/UX Polish (Wabi-Sabi Design) 🎨
Apply full design system:

Kotlin

// theme/Color.kt
object WabiSabiColors {
    val PaperPrimary = Color(0xFFFAF9F6)
    val PaperSecondary = Color(0xFFF5F3EE)
    val PaperPressed = Color(0xFFEBE8DF)

    val InkPrimary = Color(0xFF1C1816)
    val InkSecondary = Color(0xFF2D2926)
    val InkBody = Color(0xFF3E3A35)
    val InkHint = Color(0xFF6B6B6B)

    val Clay500 = Color(0xFFC17767)
    val Clay100 = Color(0xFFFFEAE0)

    val Bamboo500 = Color(0xFF7D8F69)

    val Persimmon500 = Color(0xFFE77A5E)
}

// theme/Typography.kt
val WabiSabiTypography = Typography(
    displayLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Bold,
        fontSize = 32.sp,
        lineHeight = 40.sp
    ),
    bodyLarge = TextStyle(
        fontFamily = FontFamily.Serif, // Noto Serif for letters
        fontSize = 18.sp,
        lineHeight = 28.sp
    ),
    // ... (rest from design doc)
)

// Apply paper texture to backgrounds
@Composable
fun PaperBackground(content: @Composable () -> Unit) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(
                brush = Brush.linearGradient(
                    colors = listOf(
                        WabiSabiColors.PaperPrimary,
                        WabiSabiColors.PaperSecondary
                    )
                )
            )
            .drawWithContent {
                drawContent()
                // Overlay subtle noise texture
                drawImage(paperNoiseTexture, alpha = 0.03f)
            }
    ) {
        content()
    }
}

// Custom button with press animation
@Composable
fun WabiSabiButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    var isPressed by remember { mutableStateOf(false) }
    val scale by animateFloatAsState(
        targetValue = if (isPressed) 0.95f else 1f,
        animationSpec = spring(
            dampingRatio = Spring.DampingRatioMediumBouncy,
            stiffness = Spring.StiffnessMedium
        )
    )

    Button(
        onClick = {
            // Haptic feedback
            onClick()
        },
        modifier = modifier
            .scale(scale)
            .pointerInput(Unit) {
                detectTapGestures(
                    onPress = {
                        isPressed = true
                        tryAwaitRelease()
                        isPressed = false
                    }
                )
            },
        colors = ButtonDefaults.buttonColors(
            containerColor = WabiSabiColors.Clay500
        ),
        shape = RoundedCornerShape(12.dp)
    ) {
        Text(
            text = text,
            color = WabiSabiColors.InkPrimary,
            style = MaterialTheme.typography.labelLarge
        )
    }
}
Tasks (16 hours):

✅ Apply Wabi-Sabi color palette to all screens
✅ Add paper texture to backgrounds
✅ Implement custom button animations
✅ Add card shadow system (warm shadows)
✅ Implement haptic feedback on all interactions
✅ Add folded paper corner detail to cards
✅ Refine typography (serif for emotional content)
✅ Polish all animations (spring scales, pulse rings)
Day 24: WebSocket Real-Time Sync 🔄
Complete WebSocket integration:

Kotlin

// WebSocketManager.kt
@Singleton
class WebSocketManager @Inject constructor(
    private val okHttpClient: OkHttpClient,
    @ApplicationScope private val scope: CoroutineScope
) {
    private var webSocket: WebSocket? = null
    private val _events = MutableSharedFlow<WebSocketEvent>()
    val events: SharedFlow<WebSocketEvent> = _events.asSharedFlow()

    fun connect(relationshipId: String, token: String) {
        val request = Request.Builder()
            .url("wss://api.us-app.com/ws?relationshipId=$relationshipId&token=$token")
            .build()

        webSocket = okHttpClient.newWebSocket(request, object : WebSocketListener() {
            override fun onMessage(webSocket: WebSocket, text: String) {
                handleMessage(text)
            }

            override fun onFailure(webSocket: WebSocket, t: Throwable, response: Response?) {
                // Auto-reconnect with exponential backoff
                scheduleReconnect()
            }
        })
    }

    private fun handleMessage(json: String) {
        scope.launch {
            val event = Json.decodeFromString<WebSocketEvent>(json)
            _events.emit(event)
        }
    }

    fun send(event: WebSocketEvent) {
        val json = Json.encodeToString(event)
        webSocket?.send(json)
    }
}

// In repositories, listen to events
class ThoughtRepository @Inject constructor(
    private val webSocketManager: WebSocketManager,
    private val thoughtDao: ThoughtDao
) {
    init {
        scope.launch {
            webSocketManager.events.collect { event ->
                when (event) {
                    is WebSocketEvent.NewThought -> {
                        thoughtDao.insert(event.thought.toEntity())
                    }
                    is WebSocketEvent.ThoughtReacted -> {
                        thoughtDao.updateReactions(event.thoughtId, event.reactions)
                    }
                }
            }
        }
    }
}
Deliverable:

✅ WebSocket connection lifecycle management
✅ Auto-reconnect logic
✅ Event handling for all features
✅ Offline queue integration
Day 25: Testing & Bug Fixes 🐛
Focus areas (12 hours):

Critical path testing:

Auth flow (create + join connection)
Post thought + receive real-time update
Complete shared task + see celebration
Send Miss You ping + receive notification
Seal letter + scheduled delivery
Upload memory + see in grid
Offline testing:

Post thought offline → sync when online
Complete task offline → sync correctly
Queue multiple actions → drain FIFO
Edge cases:

Connection code expiry
JWT token refresh
WebSocket reconnection
Large image uploads (50MB)
Slow network conditions
UI testing:

All animations smooth (60fps)
No UI jank on scroll
Haptic feedback working
Proper error messages
Deliverable:

✅ Critical bugs fixed
✅ Offline sync verified
✅ Performance optimized
Day 26: Firebase Integration (FCM + Crashlytics) 🔥
Kotlin

// Add Firebase to project
// google-services.json in app/

// FCM Service
class UsFCMService : FirebaseMessagingService() {
    override fun onMessageReceived(message: RemoteMessage) {
        val type = message.data["type"]

        when (type) {
            "new_thought" -> showThoughtNotification(message.data)
            "miss_you" -> showMissYouNotification(message.data)
            "letter" -> showLetterNotification(message.data)
            "task_completed" -> {
                if (message.data["celebration"] == "true") {
                    showCelebrationNotification(message.data)
                } else {
                    showTaskNotification(message.data)
                }
            }
        }
    }

    override fun onNewToken(token: String) {
        // Send token to backend
        viewModelScope.launch {
            apiService.updateDeviceToken(token)
        }
    }
}

// Crashlytics
Firebase.crashlytics.setCrashlyticsCollectionEnabled(true)
Firebase.crashlytics.setUserId(userId)
Backend FCM integration:

TypeScript

import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export async function sendPushNotification(userId: string, payload: {
  type: string;
  title: string;
  body: string;
  priority?: 'normal' | 'high';
}) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  const tokens = user.deviceTokens as string[];

  await admin.messaging().sendMulticast({
    tokens,
    notification: {
      title: payload.title,
      body: payload.body
    },
    data: {
      type: payload.type
    },
    android: {
      priority: payload.priority === 'high' ? 'high' : 'normal'
    }
  });
}
Deliverable:

✅ FCM notifications working
✅ High-priority for Miss You
✅ Crashlytics error tracking
✅ Device token management
Day 27: Deployment & Infrastructure 🚀
Backend Deployment (DigitalOcean)
Bash

# Create Droplet (4 vCPU, 8GB RAM, Ubuntu 22.04)
# SSH into server

# Install dependencies
sudo apt update
sudo apt install -y nodejs npm postgresql redis-server nginx

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Setup PostgreSQL
sudo -u postgres createuser us_app
sudo -u postgres createdb us_production
sudo -u postgres psql -c "ALTER USER us_app PASSWORD 'strong_password';"

# Setup project
git clone https://github.com/yourusername/us-backend.git
cd us-backend
npm install
npx prisma migrate deploy
npm run build

# Setup PM2 (process manager)
npm install -g pm2
pm2 start dist/index.js --name us-api
pm2 startup
pm2 save

# Nginx reverse proxy
sudo nano /etc/nginx/sites-available/us-api

# Nginx config:
server {
    listen 80;
    server_name api.us-app.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

sudo ln -s /etc/nginx/sites-available/us-api /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# SSL with Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d api.us-app.com
Environment variables:

Bash

# .env.production
DATABASE_URL="postgresql://us_app:password@localhost:5432/us_production"
REDIS_URL="redis://localhost:6379"
JWT_SECRET="generate_with_openssl_rand_hex_64"
REFRESH_SECRET="generate_with_openssl_rand_hex_64"
PORT=3000
NODE_ENV=production
Deliverable:

✅ Backend deployed and running
✅ SSL certificate installed
✅ PM2 process manager configured
✅ Nginx reverse proxy
✅ Database migrations applied
MinIO Setup (File Storage)
Bash

# Install MinIO
wget https://dl.min.io/server/minio/release/linux-amd64/minio
chmod +x minio
sudo mv minio /usr/local/bin/

# Create data directory
sudo mkdir -p /data/minio
sudo chown -R $USER:$USER /data/minio

# Create systemd service
sudo nano /etc/systemd/system/minio.service

# Service file:
[Unit]
Description=MinIO
After=network.target

[Service]
User=$USER
ExecStart=/usr/local/bin/minio server /data/minio --console-address ":9001"
Restart=always

[Install]
WantedBy=multi-user.target

sudo systemctl enable minio
sudo systemctl start minio

# Access MinIO console at http://your-ip:9001
# Create bucket: us-uploads
# Generate access key and secret key
Backend MinIO integration:

TypeScript

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  endpoint: 'http://localhost:9000',
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.MINIO_ACCESS_KEY!,
    secretAccessKey: process.env.MINIO_SECRET_KEY!
  },
  forcePathStyle: true
});

export async function uploadToStorage(
  buffer: Buffer,
  relationshipId: string,
  type: 'image' | 'thumb' = 'image'
): Promise<string> {
  const key = `${relationshipId}/${type}/${Date.now()}.jpg`;

  await s3Client.send(new PutObjectCommand({
    Bucket: 'us-uploads',
    Key: key,
    Body: buffer,
    ContentType: 'image/jpeg'
  }));

  return `https://cdn.us-app.com/${key}`;
}
Deliverable:

✅ MinIO running
✅ Bucket created
✅ Upload/download working
✅ CDN integration (Cloudflare)
Day 28: Beta Testing & Final Polish ✨
Morning (4 hours): Android APK Build

Bash

# Generate release keystore
keytool -genkey -v -keystore us-release.keystore -alias us -keyalg RSA -keysize 2048 -validity 10000

# Add to app/build.gradle.kts
android {
    signingConfigs {
        create("release") {
            storeFile = file("../us-release.keystore")
            storePassword = System.getenv("KEYSTORE_PASSWORD")
            keyAlias = "us"
            keyPassword = System.getenv("KEY_PASSWORD")
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = true
            isShrinkResources = true
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
            signingConfig = signingConfigs.getByName("release")
        }
    }
}

# Build APK
./gradlew assembleRelease

# APK location: app/build/outputs/apk/release/app-release.apk
Deliverable:

✅ Signed release APK
✅ ProGuard enabled
✅ APK size <50MB
Afternoon (4 hours): Beta Testing Setup

Recruit 5-10 beta couples:

Friends, family, colleagues
Mix of local and long-distance
Create beta testing docs:

Installation guide
Feature walkthrough
Feedback form (Google Forms)
Setup monitoring:

Sentry error tracking
Firebase Crashlytics
Basic Prometheus metrics
Final checklist:

 All core features working
 Real-time sync functional
 Offline mode works
 Notifications delivering
 Animations smooth
 No critical bugs
 Performance acceptable (<2s API latency)
Evening (4 hours): Launch Preparation

Create landing page:

Simple HTML page explaining "Us"
APK download link
Privacy policy
Contact email
Setup analytics:

Firebase Analytics (opt-in)
Basic event tracking
Soft launch:

Send APK to beta testers
Monitor for first 2 hours
Fix any critical issues
Deliverable:

✅ 10 beta couples onboarded
✅ Monitoring in place
✅ Landing page live
✅ App stable
Post-Launch (Week 5+)
Immediate Priorities:
Monitor & Fix (Days 29-35):

Daily error log review
Address beta tester feedback
Performance optimization
Critical bug fixes
Missing Features (Weeks 5-6):

Doodle Canvas (real-time collaboration)
Advanced Mood Analytics
Memory slideshow
Settings screen (notifications, appearance)
Polish & Scale (Weeks 7-8):

UI/UX improvements based on feedback
Database optimization (indexes, queries)
API performance tuning
Expand to 100 couples
4-Week Timeline Summary
Week	Focus	Deliverables
Week 1	Foundation	Auth system, database schema, basic UI, dashboard
Week 2	Core Features	Thoughts, Tasks, Miss You (complete + polished)
Week 3	Emotional Features	Love Letters, Mood Jar, Memories (upload only)
Week 4	Polish & Launch	Wabi-Sabi design, testing, deployment, beta launch
Feasibility Assessment
What's Achievable in 4 Weeks:
✅ Core emotional features (Thoughts, Tasks, Miss You, Letters, Mood Jar)
✅ Basic Memories (upload, grid view)
✅ Real-time sync (WebSocket)
✅ Offline-first architecture
✅ Push notifications
✅ Wabi-Sabi UI design
✅ Production deployment
✅ Beta testing with 10 couples

What's Deferred Post-Launch:
⏳ Doodle Canvas (complex real-time collaboration)
⏳ Advanced memory features (albums, slideshow, map view)
⏳ Mood analytics (charts, patterns)
⏳ Settings screen (full customization)
⏳ iOS version

Required Intensity:
Solo developer: 60-70 hours/week (intense but doable)
Two developers: 40-50 hours/week each (comfortable)
Critical: No scope creep, ruthless prioritization, reuse libraries
Success Criteria (End of Week 4)
✅ Functional: All core features working (auth, thoughts, tasks, pings, letters, moods, memories)
✅ Performance: <2s API latency (p95), <0.5% crash rate
✅ Design: Wabi-Sabi aesthetic applied throughout
✅ Deployed: Backend on DigitalOcean.
✅ Stable: 10 couples using app without critical bugs


