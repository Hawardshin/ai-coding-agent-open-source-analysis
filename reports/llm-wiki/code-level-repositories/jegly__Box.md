# jegly/Box 코드 레벨 분석

생성일: 2026-06-17T23:31:56.484Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | agent-memory/tooling |
| maturity | B production-leaning (70) |
| stars | 595 |
| language | Kotlin |
| tags | rag, agent-knowledge, korea-signal |
| files/code/source | 473/211/211 |
| tests/ci | 0/0 |
| local path | sources/jegly__Box |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | doc-only | 1 | 0 | README.md:131 \| v1.0.12 \| **Gemini Nano Vision — visual overlays (main)** \| Pose detection now draws a **skeleton overlay** and Face Mesh a **468-point mesh** directly on the camera preview and still images (previously text-only). Add |
| Parsing/OCR/document extraction | doc-only | 1 | 0 | README.md:154 \| v1.0.10 \| **Document attachment in Nano** \| Proofread and Rewrite now accept attached documents (PDF, TXT, MD) — content is read and passed to Gemini Nano as context. \| |
| Chunking/splitting | code | 6 | 5 | Android/src/whisper/src/main/java/com/google/ai/edge/gallery/whisper/WhisperEngine.kt:64 val chunk = ShortArray(bufferSize / 2) |
| Embedding/vector index | code | 20 | 19 | Android/src/app/src/main/java/com/google/ai/edge/gallery/common/Types.kt:20 import androidx.compose.ui.graphics.vector.ImageVector |
| Retrieval/search/rerank | code | 12 | 8 | Android/src/app/src/main/assets/tinygarden/main-K5DSW5YL.js:19 `);return r>=0?n.slice(0,r):n}function xa(e,t){return e?t?`${e} ${t}`:e:t\|\|""}var Tm=U({__forward_ref__:U});function hi(e){return e.__forward_ref__=hi,e.toString=function(){return ct(this())},e}function De(e){return Na(e |
| Wiki/graph/entity model | code | 27 | 10 | Android/src/app/src/main/java/com/google/ai/edge/gallery/data/local/BoxChatDatabase.kt:11 import com.google.ai.edge.gallery.data.local.entities.Conversation |
| Memory/update lifecycle | code | 97 | 90 | Android/src/app/build.gradle.kts:74 implementation(libs.androidx.lifecycle.runtime.ktx) |
| Provenance/citation/evidence | code | 4 | 4 | Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AddSkillFromFeaturedListBottomSheet.kt:294 // Attribution |
| Evaluation/observability | code | 17 | 16 | Android/src/app/src/main/assets/tinygarden/main-K5DSW5YL.js:19 `);return r>=0?n.slice(0,r):n}function xa(e,t){return e?t?`${e} ${t}`:e:t\|\|""}var Tm=U({__forward_ref__:U});function hi(e){return e.__forward_ref__=hi,e.toString=function(){return ct(this())},e}function De(e){return Na(e |
| Agent/MCP/tool surface | code | 20 | 15 | skills/featured/restaurant-roulette/scripts/index.js:36 console.warn('GEMINI_API_KEY is missing. Calls to Gemini API will likely fail.'); |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `README.md`

### Parsing/OCR/document extraction

- `README.md`

### Chunking/splitting

- `Android/src/whisper/src/main/java/com/google/ai/edge/gallery/whisper/WhisperEngine.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/Utils.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/whisper/WhisperViewModel.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/chat/AudioPlaybackPanel.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/chat/ChatMessage.kt`
- `README.md`

### Embedding/vector index

- `Android/src/app/src/main/java/com/google/ai/edge/gallery/common/Types.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/data/Tasks.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AgentChatScreen.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/SkillManagerBottomSheet.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/mobileactions/Actions.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/mobileactions/MobileActionsScreen.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/ClickableLink.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/EmptyState.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/ModelPageAppBar.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/ModelPicker.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/TaskIcon.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/home/HomeScreen.kt`
- ... 6 more

### Retrieval/search/rerank

- `Android/src/app/src/main/assets/tinygarden/main-K5DSW5YL.js`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/data/DownloadRepository.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricHelper.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AddSkillFromFeaturedListBottomSheet.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/SkillManagerBottomSheet.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/home/ChatHistoryScreen.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/chat/LogsViewer.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/examplecustomtask/ExampleCustomTaskScreen.kt`
- `README.md`
- `skills/README.md`
- `skills/built-in/query-wikipedia/SKILL.md`
- `Android/src/app/src/main/assets/skills/query-wikipedia/SKILL.md`

### Wiki/graph/entity model

- `Android/src/app/src/main/java/com/google/ai/edge/gallery/data/local/BoxChatDatabase.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/data/local/ChatRepository.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/home/ChatHistoryScreen.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/home/ChatHistoryViewModel.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/home/HomeScreen.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/llmchat/LlmChatViewModel.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/data/local/dao/ConversationDao.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/data/local/dao/MessageDao.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/data/local/entities/Conversation.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/data/local/entities/Message.kt`
- `model_allowlist.json`
- `.github/FUNDING.yml`
- ... 6 more

### Memory/update lifecycle

- `Android/src/app/build.gradle.kts`
- `Android/src/app/src/main/assets/tinygarden/main-K5DSW5YL.js`
- `Android/src/app/src/main/java/com/box/gallery/MainActivity.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/common/Utils.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/data/Model.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/engine/LlamaCppEngine.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/security/AppLockManager.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/security/SecurityUtils.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/worker/DownloadWorker.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AddOrEditSkillBottomSheet.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AddSkillFromFeaturedListBottomSheet.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AddSkillFromLocalImportDialog.kt`
- ... 6 more

### Provenance/citation/evidence

- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AddSkillFromFeaturedListBottomSheet.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AgentChatScreen.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/tinygarden/TinyGardenScreen.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/GalleryWebView.kt`

### Evaluation/observability

- `Android/src/app/src/main/assets/tinygarden/main-K5DSW5YL.js`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/data/Config.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/data/Model.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/benchmark/BenchmarkModelPicker.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/benchmark/BenchmarkResultsViewer.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/benchmark/BenchmarkScreen.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/benchmark/BenchmarkValueSeriesViewer.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/benchmark/BenchmarkViewModel.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/navigation/GalleryNavGraph.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/chat/BenchmarkConfigDialog.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/chat/ChatMessage.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/chat/ChatPanel.kt`
- ... 5 more

### Agent/MCP/tool surface

- `skills/featured/restaurant-roulette/scripts/index.js`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/data/Consts.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/data/Tasks.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AgentChatScreen.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AgentChatTaskModule.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/tinygarden/ConversationHistoryPanel.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/tinygarden/TinyGardenScreen.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/home/ChatHistoryViewModel.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/llmchat/LlmChatViewModel.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/chat/ChatMessage.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/chat/ChatPanel.kt`
- `Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/chat/ChatView.kt`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| README.md | 131 | \| v1.0.12 \| **Gemini Nano Vision — visual overlays (main)** \| Pose detection now draws a **skeleton overlay** and Face Mesh a **468-point mesh** directly on the camera preview and still images (previously text-only). Add |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| README.md | 154 | \| v1.0.10 \| **Document attachment in Nano** \| Proofread and Rewrite now accept attached documents (PDF, TXT, MD) — content is read and passed to Gemini Nano as context. \| |
| README.md | 608 | as Unicode, display equations as images. Attach text, PDF, image, or audio |
| README.md | 634 | Attach a PDF, Markdown file, source file, or plain text and Box chunks, embeds, |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| Android/src/whisper/src/main/java/com/google/ai/edge/gallery/whisper/WhisperEngine.kt | 64 | val chunk = ShortArray(bufferSize / 2) |
| Android/src/whisper/src/main/java/com/google/ai/edge/gallery/whisper/WhisperEngine.kt | 69 | val read = recorder.read(chunk, 0, chunk.size) |
| Android/src/whisper/src/main/java/com/google/ai/edge/gallery/whisper/WhisperEngine.kt | 71 | for (i in 0 until read) pcmBuffer.add(chunk[i]) |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/Utils.kt | 245 | * text) and making transparent any parts that overlap with the opaque (non-transparent) regions of |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/whisper/WhisperViewModel.kt | 63 | val chunk = ShortArray(bufferSize / 2) |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/whisper/WhisperViewModel.kt | 67 | val read = recorder.read(chunk, 0, chunk.size) |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/whisper/WhisperViewModel.kt | 70 | for (i in 0 until read) pcmBuffer.add(chunk[i]) |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/chat/AudioPlaybackPanel.kt | 318 | // 2. Determine the size of each chunk |

### Embedding/vector index

| file | line | text |
| --- | --- | --- |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/common/Types.kt | 20 | import androidx.compose.ui.graphics.vector.ImageVector |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/data/Tasks.kt | 22 | import androidx.compose.ui.graphics.vector.ImageVector |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/data/Tasks.kt | 55 | /** Vector resource id for the icon. This precedes the icon if both are set. */ |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AgentChatScreen.kt | 62 | import androidx.compose.ui.graphics.vector.ImageVector |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/SkillManagerBottomSheet.kt | 97 | import androidx.compose.ui.graphics.vector.ImageVector |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/mobileactions/Actions.kt | 33 | import androidx.compose.ui.graphics.vector.ImageVector |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/mobileactions/MobileActionsScreen.kt | 107 | import androidx.compose.ui.graphics.vector.ImageVector |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/ClickableLink.kt | 30 | import androidx.compose.ui.graphics.vector.ImageVector |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| Android/src/app/src/main/assets/tinygarden/main-K5DSW5YL.js | 19 | `);return r>=0?n.slice(0,r):n}function xa(e,t){return e?t?`${e} ${t}`:e:t\|\|""}var Tm=U({__forward_ref__:U});function hi(e){return e.__forward_ref__=hi,e.toString=function(){return ct(this())},e}function De(e){return Na(e |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/data/DownloadRepository.kt | 78 | * progress, and retrieve information about enqueued or running download tasks. It utilizes |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/security/BiometricHelper.kt | 39 | * Generate or retrieve the biometric-bound AES key from Keystore. |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AddSkillFromFeaturedListBottomSheet.kt | 38 | import androidx.compose.material.icons.rounded.Search |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AddSkillFromFeaturedListBottomSheet.kt | 89 | // Filter the featured skills based on the search query. |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AddSkillFromFeaturedListBottomSheet.kt | 94 | // Clear errors when search query is empty. |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AddSkillFromFeaturedListBottomSheet.kt | 196 | // Search bar for filtering skills. |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AddSkillFromFeaturedListBottomSheet.kt | 203 | leadingIcon = { Icon(Icons.Rounded.Search, contentDescription = null) }, |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/data/local/BoxChatDatabase.kt | 11 | import com.google.ai.edge.gallery.data.local.entities.Conversation |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/data/local/BoxChatDatabase.kt | 12 | import com.google.ai.edge.gallery.data.local.entities.Message |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/data/local/BoxChatDatabase.kt | 21 | entities = [Conversation::class, Message::class], |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/data/local/ChatRepository.kt | 5 | import com.google.ai.edge.gallery.data.local.entities.Conversation |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/data/local/ChatRepository.kt | 6 | import com.google.ai.edge.gallery.data.local.entities.Message |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/home/ChatHistoryScreen.kt | 63 | import com.google.ai.edge.gallery.data.local.entities.Conversation |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/home/ChatHistoryScreen.kt | 64 | import com.google.ai.edge.gallery.data.local.entities.Message |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/home/ChatHistoryViewModel.kt | 11 | import com.google.ai.edge.gallery.data.local.entities.Conversation |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| Android/src/app/build.gradle.kts | 74 | implementation(libs.androidx.lifecycle.runtime.ktx) |
| Android/src/app/build.gradle.kts | 88 | implementation(libs.androidx.lifecycle.process) |
| Android/src/app/build.gradle.kts | 99 | implementation(libs.camerax.lifecycle) |
| Android/src/app/src/main/assets/tinygarden/main-K5DSW5YL.js | 19 | `);return r>=0?n.slice(0,r):n}function xa(e,t){return e?t?`${e} ${t}`:e:t\|\|""}var Tm=U({__forward_ref__:U});function hi(e){return e.__forward_ref__=hi,e.toString=function(){return ct(this())},e}function De(e){return Na(e |
| Android/src/app/src/main/java/com/box/gallery/MainActivity.kt | 57 | import androidx.compose.runtime.remember |
| Android/src/app/src/main/java/com/box/gallery/MainActivity.kt | 66 | import androidx.lifecycle.lifecycleScope |
| Android/src/app/src/main/java/com/box/gallery/MainActivity.kt | 227 | var error by remember { mutableStateOf<String?>(null) } |
| Android/src/app/src/main/java/com/box/gallery/MainActivity.kt | 228 | var isPrompting by remember { mutableStateOf(false) } |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AddSkillFromFeaturedListBottomSheet.kt | 294 | // Attribution |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AgentChatScreen.kt | 310 | source = curConsoleMessage.sourceId(), |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AgentChatScreen.kt | 321 | "-- From line ${curConsoleMessage.lineNumber()} of ${curConsoleMessage.sourceId()}", |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/tinygarden/TinyGardenScreen.kt | 585 | "${consoleMessage?.message()} -- From line ${consoleMessage?.lineNumber()} of ${consoleMessage?.sourceId()}", |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/common/GalleryWebView.kt | 172 | "${consoleMessage?.message()} -- From line ${consoleMessage?.lineNumber()} of ${consoleMessage?.sourceId()}", |

### Evaluation/observability

| file | line | text |
| --- | --- | --- |
| Android/src/app/src/main/assets/tinygarden/main-K5DSW5YL.js | 19 | `);return r>=0?n.slice(0,r):n}function xa(e,t){return e?t?`${e} ${t}`:e:t\|\|""}var Tm=U({__forward_ref__:U});function hi(e){return e.__forward_ref__=hi,e.toString=function(){return ct(this())},e}function De(e){return Na(e |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/data/Config.kt | 68 | val BENCHMARK_ITERATIONS = ConfigKey("benchmark_iterations", "Benchmark iterations") |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/data/Model.kt | 225 | /** Whether to show the "benchmark" button in the UI. */ |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/benchmark/BenchmarkModelPicker.kt | 17 | package com.google.ai.edge.gallery.ui.benchmark |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/benchmark/BenchmarkResultsViewer.kt | 17 | package com.google.ai.edge.gallery.ui.benchmark |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/benchmark/BenchmarkResultsViewer.kt | 156 | // Show "benchmark comparison help" bottom sheet when there are multiple results available. |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/benchmark/BenchmarkResultsViewer.kt | 638 | ClipData.newPlainText("benchmark results for ${modelName}", csv) |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/ui/benchmark/BenchmarkScreen.kt | 17 | package com.google.ai.edge.gallery.ui.benchmark |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| skills/featured/restaurant-roulette/scripts/index.js | 36 | console.warn('GEMINI_API_KEY is missing. Calls to Gemini API will likely fail.'); |
| skills/featured/restaurant-roulette/scripts/index.js | 44 | `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${ |
| skills/featured/restaurant-roulette/scripts/index.js | 55 | // THIS IS THE MAGIC FIX: Forces Gemini to return pure JSON |
| skills/featured/restaurant-roulette/scripts/index.js | 80 | console.warn('Gemini API failed.', apiError); |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/data/Consts.kt | 54 | // Max number of skills recommended in a "agent skills" session. |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/data/Tasks.kt | 119 | /** Placeholder text for the name of the agent shown above chat messages. */ |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AgentChatScreen.kt | 158 | side = ChatSide.AGENT, |
| Android/src/app/src/main/java/com/google/ai/edge/gallery/customtasks/agentchat/AgentChatScreen.kt | 383 | append(".\n\nTry tapping a sample prompt below to see Agent Skills in action!") |

## Gap

- tests
- ci
