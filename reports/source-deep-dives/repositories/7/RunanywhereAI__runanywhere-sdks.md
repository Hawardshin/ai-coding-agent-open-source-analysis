# RunanywhereAI/runanywhere-sdks Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Production ready toolkit to run AI locally

## 요약

- 조사 단위: `sources/RunanywhereAI__runanywhere-sdks` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,939 files, 983 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=sdk/shared/proto-ts/src/index.ts, sdk/runanywhere-web/packages/onnx/src/index.ts, sdk/runanywhere-web/packages/llamacpp/src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | RunanywhereAI/runanywhere-sdks |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | C++ |
| Stars | 10329 |
| Forks | 359 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/RunanywhereAI__runanywhere-sdks](../../../../sources/RunanywhereAI__runanywhere-sdks) |
| Existing report | [reports/global-trending/repositories/RunanywhereAI__runanywhere-sdks.md](../../../global-trending/repositories/RunanywhereAI__runanywhere-sdks.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2939 / 983 |
| Max observed depth | 13 |
| Top directories | .github, cmake, dependencies, docs, engines, examples, idl, Playground, runtimes, scripts, sdk |
| Top extensions | .cpp: 382, .h: 375, .swift: 354, .ts: 330, .dart: 227, .kt: 222, .png: 200, .sh: 88, .json: 81, .md: 76, (none): 75, .hpp: 52 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| examples/flutter | examples workspace | 6 |
| examples/web | examples workspace | 6 |
| examples/react-native | examples workspace | 3 |
| .github | ci surface | 1 |
| cmake | top-level component | 1 |
| dependencies | ci surface | 1 |
| docs | documentation surface | 1 |
| engines | top-level component | 1 |
| examples | top-level component | 1 |
| examples/ios | examples workspace | 1 |
| idl | top-level component | 1 |
| Playground | top-level component | 1 |
| runtimes | top-level component | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [sdk/shared/proto-ts/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/src/index.ts) | entrypoints signal |
| entrypoints | [sdk/runanywhere-web/packages/onnx/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/onnx/src/index.ts) | entrypoints signal |
| entrypoints | [sdk/runanywhere-web/packages/llamacpp/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/llamacpp/src/index.ts) | entrypoints signal |
| entrypoints | [sdk/runanywhere-web/packages/core/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/src/index.ts) | entrypoints signal |
| container | [sdk/runanywhere-commons/tests/Dockerfile.linux-tests](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/tests/Dockerfile.linux-tests) | container signal |
| container | [Playground/openclaw-hybrid-assistant/Dockerfile](../../../../sources/RunanywhereAI__runanywhere-sdks/Playground/openclaw-hybrid-assistant/Dockerfile) | container signal |
| container | [Playground/linux-voice-assistant/Dockerfile](../../../../sources/RunanywhereAI__runanywhere-sdks/Playground/linux-voice-assistant/Dockerfile) | container signal |
| config | [package.json](../../../../sources/RunanywhereAI__runanywhere-sdks/package.json) | config signal |
| config | [sdk/shared/proto-ts/package.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/package.json) | config signal |
| config | [sdk/shared/proto-ts/tsconfig.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/tsconfig.json) | config signal |
| config | [sdk/runanywhere-web/package.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/package.json) | config signal |
| ci | [sdk/runanywhere-swift/.github/workflows/ci.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/.github/workflows/ci.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 12 | [sdk/shared/proto-ts/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/src/index.ts)<br>[sdk/runanywhere-web/packages/onnx/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/onnx/src/index.ts)<br>[sdk/runanywhere-web/packages/llamacpp/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/llamacpp/src/index.ts)<br>[sdk/runanywhere-web/packages/core/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/src/index.ts)<br>[sdk/runanywhere-react-native/packages/onnx/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-react-native/packages/onnx/src/index.ts)<br>[sdk/runanywhere-react-native/packages/llamacpp/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-react-native/packages/llamacpp/src/index.ts)<br>[sdk/runanywhere-react-native/packages/core/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-react-native/packages/core/src/index.ts)<br>[sdk/runanywhere-cli/src/main.cpp](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-cli/src/main.cpp) |
| agentRuntime | 113 | [AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/AGENTS.md)<br>[sdk/shared/proto-ts/src/tool_calling.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/src/tool_calling.ts)<br>[sdk/runanywhere-web/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/AGENTS.md)<br>[sdk/runanywhere-swift/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/AGENTS.md)<br>[sdk/runanywhere-swift/Sources/RunAnywhere/Generated/tool_calling.pb.swift](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/Sources/RunAnywhere/Generated/tool_calling.pb.swift)<br>[sdk/runanywhere-react-native/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-react-native/AGENTS.md)<br>[sdk/runanywhere-kotlin/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/AGENTS.md)<br>[sdk/runanywhere-flutter/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-flutter/AGENTS.md) |
| mcp | 0 | not obvious |
| retrieval | 85 | [sdk/shared/proto-ts/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/src/index.ts)<br>[sdk/shared/proto-ts/src/rag.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/src/rag.ts)<br>[sdk/shared/proto-ts/src/streams/rag_service_stream.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/src/streams/rag_service_stream.ts)<br>[sdk/shared/proto-ts/src/convenience/rag_convenience.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/src/convenience/rag_convenience.ts)<br>[sdk/runanywhere-web/packages/onnx/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/onnx/src/index.ts)<br>[sdk/runanywhere-web/packages/llamacpp/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/llamacpp/src/index.ts)<br>[sdk/runanywhere-web/packages/core/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/src/index.ts)<br>[sdk/runanywhere-web/packages/core/src/types/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/src/types/index.ts) |
| spec | 14 | [sdk/runanywhere-web/tests/browser/cross-cutting-e2e.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/cross-cutting-e2e.spec.ts)<br>[sdk/runanywhere-web/tests/browser/multi-wasm-init.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/multi-wasm-init.spec.ts)<br>[sdk/runanywhere-web/tests/browser/sdk-smoke.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/sdk-smoke.spec.ts)<br>[sdk/runanywhere-web/packages/core/docs/STREAM_DELIVERY_DESIGN.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/docs/STREAM_DELIVERY_DESIGN.md)<br>[sdk/runanywhere-swift/ARCHITECTURE.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/ARCHITECTURE.md)<br>[sdk/runanywhere-react-native/Docs/ARCHITECTURE.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-react-native/Docs/ARCHITECTURE.md)<br>[sdk/runanywhere-kotlin/docs/ARCHITECTURE.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/docs/ARCHITECTURE.md)<br>[sdk/runanywhere-flutter/docs/ARCHITECTURE.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-flutter/docs/ARCHITECTURE.md) |
| eval | 227 | [sdk/runanywhere-web/tests/browser/cross-cutting-e2e.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/cross-cutting-e2e.spec.ts)<br>[sdk/runanywhere-web/tests/browser/multi-wasm-init.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/multi-wasm-init.spec.ts)<br>[sdk/runanywhere-web/tests/browser/sdk-smoke.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/sdk-smoke.spec.ts)<br>[sdk/runanywhere-web/tests/browser/fixtures/silero_vad.onnx](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/fixtures/silero_vad.onnx)<br>[sdk/runanywhere-web/packages/core/tsconfig.test.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/tsconfig.test.json)<br>[sdk/runanywhere-web/packages/core/tests/unit/runtime/EmscriptenModule.test.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/tests/unit/runtime/EmscriptenModule.test.ts)<br>[sdk/runanywhere-web/packages/core/tests/unit/runtime/StreamWorker.test.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/tests/unit/runtime/StreamWorker.test.ts)<br>[sdk/runanywhere-web/packages/core/tests/unit/Public/Extensions/RunAnywhere+LoRA.test.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/tests/unit/Public/Extensions/RunAnywhere+LoRA.test.ts) |
| security | 13 | [SECURITY.md](../../../../sources/RunanywhereAI__runanywhere-sdks/SECURITY.md)<br>[sdk/runanywhere-swift/Sources/RunAnywhere/Foundation/Security/KeychainManager.swift](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/Sources/RunAnywhere/Foundation/Security/KeychainManager.swift)<br>[sdk/runanywhere-swift/Sources/RunAnywhere/CRACommons/include/rac_auth_manager.h](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/Sources/RunAnywhere/CRACommons/include/rac_auth_manager.h)<br>[sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidKeychainManager.kt](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidKeychainManager.kt)<br>[sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidPlatformContext.kt](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidPlatformContext.kt)<br>[sdk/runanywhere-flutter/packages/runanywhere/lib/public/hybrid/hybrid_routing_policy.dart](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-flutter/packages/runanywhere/lib/public/hybrid/hybrid_routing_policy.dart)<br>[sdk/runanywhere-flutter/packages/runanywhere/lib/native/dart_bridge_auth.dart](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-flutter/packages/runanywhere/lib/native/dart_bridge_auth.dart)<br>[sdk/runanywhere-commons/tests/test_auth_sdk_events.cpp](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/tests/test_auth_sdk_events.cpp) |
| ci | 12 | [sdk/runanywhere-swift/.github/workflows/ci.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/.github/workflows/ci.yml)<br>[sdk/runanywhere-commons/.github/workflows/build-commons.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/.github/workflows/build-commons.yml)<br>[sdk/runanywhere-commons/.github/workflows/release.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/.github/workflows/release.yml)<br>[sdk/runanywhere-commons/.github/workflows/size-check.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/.github/workflows/size-check.yml)<br>[.github/workflows/auto-tag.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/.github/workflows/auto-tag.yml)<br>[.github/workflows/check-no-pii-logging.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/.github/workflows/check-no-pii-logging.yml)<br>[.github/workflows/idl-drift-check.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/.github/workflows/idl-drift-check.yml)<br>[.github/workflows/legacy-files-blocklist.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/.github/workflows/legacy-files-blocklist.yml) |
| container | 3 | [sdk/runanywhere-commons/tests/Dockerfile.linux-tests](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/tests/Dockerfile.linux-tests)<br>[Playground/openclaw-hybrid-assistant/Dockerfile](../../../../sources/RunanywhereAI__runanywhere-sdks/Playground/openclaw-hybrid-assistant/Dockerfile)<br>[Playground/linux-voice-assistant/Dockerfile](../../../../sources/RunanywhereAI__runanywhere-sdks/Playground/linux-voice-assistant/Dockerfile) |
| instruction | 15 | [AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/AGENTS.md)<br>[CLAUDE.md](../../../../sources/RunanywhereAI__runanywhere-sdks/CLAUDE.md)<br>[sdk/runanywhere-web/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/AGENTS.md)<br>[sdk/runanywhere-swift/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/AGENTS.md)<br>[sdk/runanywhere-react-native/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-react-native/AGENTS.md)<br>[sdk/runanywhere-kotlin/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/AGENTS.md)<br>[sdk/runanywhere-flutter/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-flutter/AGENTS.md)<br>[sdk/runanywhere-commons/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/AGENTS.md) |
| docs | 52 | [README.md](../../../../sources/RunanywhereAI__runanywhere-sdks/README.md)<br>[sdk/runanywhere-web/README.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/README.md)<br>[sdk/runanywhere-web/packages/onnx/README.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/onnx/README.md)<br>[sdk/runanywhere-web/packages/llamacpp/README.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/llamacpp/README.md)<br>[sdk/runanywhere-web/packages/core/README.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/README.md)<br>[sdk/runanywhere-web/packages/core/docs/STREAM_DELIVERY_DESIGN.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/docs/STREAM_DELIVERY_DESIGN.md)<br>[sdk/runanywhere-swift/README.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/README.md)<br>[sdk/runanywhere-swift/Sources/ONNXRuntime/README.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/Sources/ONNXRuntime/README.md) |
| config | 23 | [package.json](../../../../sources/RunanywhereAI__runanywhere-sdks/package.json)<br>[sdk/shared/proto-ts/package.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/package.json)<br>[sdk/shared/proto-ts/tsconfig.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/tsconfig.json)<br>[sdk/runanywhere-web/package.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/package.json)<br>[sdk/runanywhere-web/packages/onnx/package.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/onnx/package.json)<br>[sdk/runanywhere-web/packages/onnx/tsconfig.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/onnx/tsconfig.json)<br>[sdk/runanywhere-web/packages/llamacpp/package.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/llamacpp/package.json)<br>[sdk/runanywhere-web/packages/llamacpp/tsconfig.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/llamacpp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 227 | [sdk/runanywhere-web/tests/browser/cross-cutting-e2e.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/cross-cutting-e2e.spec.ts)<br>[sdk/runanywhere-web/tests/browser/multi-wasm-init.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/multi-wasm-init.spec.ts)<br>[sdk/runanywhere-web/tests/browser/sdk-smoke.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/sdk-smoke.spec.ts)<br>[sdk/runanywhere-web/tests/browser/fixtures/silero_vad.onnx](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/fixtures/silero_vad.onnx)<br>[sdk/runanywhere-web/packages/core/tsconfig.test.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/tsconfig.test.json)<br>[sdk/runanywhere-web/packages/core/tests/unit/runtime/EmscriptenModule.test.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/tests/unit/runtime/EmscriptenModule.test.ts) |
| CI workflows | 12 | [sdk/runanywhere-swift/.github/workflows/ci.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/.github/workflows/ci.yml)<br>[sdk/runanywhere-commons/.github/workflows/build-commons.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/.github/workflows/build-commons.yml)<br>[sdk/runanywhere-commons/.github/workflows/release.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/.github/workflows/release.yml)<br>[sdk/runanywhere-commons/.github/workflows/size-check.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/.github/workflows/size-check.yml)<br>[.github/workflows/auto-tag.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/.github/workflows/auto-tag.yml)<br>[.github/workflows/check-no-pii-logging.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/.github/workflows/check-no-pii-logging.yml) |
| Containers / deploy | 3 | [sdk/runanywhere-commons/tests/Dockerfile.linux-tests](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/tests/Dockerfile.linux-tests)<br>[Playground/openclaw-hybrid-assistant/Dockerfile](../../../../sources/RunanywhereAI__runanywhere-sdks/Playground/openclaw-hybrid-assistant/Dockerfile)<br>[Playground/linux-voice-assistant/Dockerfile](../../../../sources/RunanywhereAI__runanywhere-sdks/Playground/linux-voice-assistant/Dockerfile) |
| Security / policy | 13 | [SECURITY.md](../../../../sources/RunanywhereAI__runanywhere-sdks/SECURITY.md)<br>[sdk/runanywhere-swift/Sources/RunAnywhere/Foundation/Security/KeychainManager.swift](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/Sources/RunAnywhere/Foundation/Security/KeychainManager.swift)<br>[sdk/runanywhere-swift/Sources/RunAnywhere/CRACommons/include/rac_auth_manager.h](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/Sources/RunAnywhere/CRACommons/include/rac_auth_manager.h)<br>[sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidKeychainManager.kt](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidKeychainManager.kt)<br>[sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidPlatformContext.kt](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidPlatformContext.kt)<br>[sdk/runanywhere-flutter/packages/runanywhere/lib/public/hybrid/hybrid_routing_policy.dart](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-flutter/packages/runanywhere/lib/public/hybrid/hybrid_routing_policy.dart) |
| Agent instructions | 15 | [AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/AGENTS.md)<br>[CLAUDE.md](../../../../sources/RunanywhereAI__runanywhere-sdks/CLAUDE.md)<br>[sdk/runanywhere-web/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/AGENTS.md)<br>[sdk/runanywhere-swift/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/AGENTS.md)<br>[sdk/runanywhere-react-native/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-react-native/AGENTS.md)<br>[sdk/runanywhere-kotlin/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `sdk/shared/proto-ts/src/index.ts`, `sdk/runanywhere-web/packages/onnx/src/index.ts`, `sdk/runanywhere-web/packages/llamacpp/src/index.ts`.
2. Trace execution through entrypoints: `sdk/shared/proto-ts/src/index.ts`, `sdk/runanywhere-web/packages/onnx/src/index.ts`, `sdk/runanywhere-web/packages/llamacpp/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `sdk/shared/proto-ts/src/tool_calling.ts`, `sdk/runanywhere-web/AGENTS.md`.
4. Inspect retrieval/memory/indexing through: `sdk/shared/proto-ts/src/index.ts`, `sdk/shared/proto-ts/src/rag.ts`, `sdk/shared/proto-ts/src/streams/rag_service_stream.ts`.
5. Verify behavior through test/eval files: `sdk/runanywhere-web/tests/browser/cross-cutting-e2e.spec.ts`, `sdk/runanywhere-web/tests/browser/multi-wasm-init.spec.ts`, `sdk/runanywhere-web/tests/browser/sdk-smoke.spec.ts`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Production ready toolkit to run AI locally. 핵심 구조 신호는 C++, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
