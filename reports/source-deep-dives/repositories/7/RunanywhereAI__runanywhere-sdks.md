# RunanywhereAI/runanywhere-sdks 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Production ready toolkit to run AI locally

## 요약

- 조사 단위: `sources/RunanywhereAI__runanywhere-sdks` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,939 files, 983 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=sdk/shared/proto-ts/src/index.ts, sdk/runanywhere-web/packages/onnx/src/index.ts, sdk/runanywhere-web/packages/llamacpp/src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | RunanywhereAI/runanywhere-sdks |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | C++ |
| Stars | 10329 |
| Forks | 359 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/RunanywhereAI__runanywhere-sdks](../../../../sources/RunanywhereAI__runanywhere-sdks) |
| 기존 보고서 | [reports/global-trending/repositories/RunanywhereAI__runanywhere-sdks.md](../../../global-trending/repositories/RunanywhereAI__runanywhere-sdks.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2939 / 983 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .github, cmake, dependencies, docs, engines, examples, idl, Playground, runtimes, scripts, sdk |
| 상위 확장자 | .cpp: 382, .h: 375, .swift: 354, .ts: 330, .dart: 227, .kt: 222, .png: 200, .sh: 88, .json: 81, .md: 76, (none): 75, .hpp: 52 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 12 | [sdk/shared/proto-ts/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/src/index.ts)<br>[sdk/runanywhere-web/packages/onnx/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/onnx/src/index.ts)<br>[sdk/runanywhere-web/packages/llamacpp/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/llamacpp/src/index.ts)<br>[sdk/runanywhere-web/packages/core/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/src/index.ts)<br>[sdk/runanywhere-react-native/packages/onnx/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-react-native/packages/onnx/src/index.ts)<br>[sdk/runanywhere-react-native/packages/llamacpp/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-react-native/packages/llamacpp/src/index.ts)<br>[sdk/runanywhere-react-native/packages/core/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-react-native/packages/core/src/index.ts)<br>[sdk/runanywhere-cli/src/main.cpp](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-cli/src/main.cpp) |
| agentRuntime | 113 | [AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/AGENTS.md)<br>[sdk/shared/proto-ts/src/tool_calling.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/src/tool_calling.ts)<br>[sdk/runanywhere-web/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/AGENTS.md)<br>[sdk/runanywhere-swift/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/AGENTS.md)<br>[sdk/runanywhere-swift/Sources/RunAnywhere/Generated/tool_calling.pb.swift](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/Sources/RunAnywhere/Generated/tool_calling.pb.swift)<br>[sdk/runanywhere-react-native/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-react-native/AGENTS.md)<br>[sdk/runanywhere-kotlin/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/AGENTS.md)<br>[sdk/runanywhere-flutter/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-flutter/AGENTS.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 85 | [sdk/shared/proto-ts/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/src/index.ts)<br>[sdk/shared/proto-ts/src/rag.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/src/rag.ts)<br>[sdk/shared/proto-ts/src/streams/rag_service_stream.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/src/streams/rag_service_stream.ts)<br>[sdk/shared/proto-ts/src/convenience/rag_convenience.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/src/convenience/rag_convenience.ts)<br>[sdk/runanywhere-web/packages/onnx/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/onnx/src/index.ts)<br>[sdk/runanywhere-web/packages/llamacpp/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/llamacpp/src/index.ts)<br>[sdk/runanywhere-web/packages/core/src/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/src/index.ts)<br>[sdk/runanywhere-web/packages/core/src/types/index.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/src/types/index.ts) |
| spec | 14 | [sdk/runanywhere-web/tests/browser/cross-cutting-e2e.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/cross-cutting-e2e.spec.ts)<br>[sdk/runanywhere-web/tests/browser/multi-wasm-init.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/multi-wasm-init.spec.ts)<br>[sdk/runanywhere-web/tests/browser/sdk-smoke.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/sdk-smoke.spec.ts)<br>[sdk/runanywhere-web/packages/core/docs/STREAM_DELIVERY_DESIGN.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/docs/STREAM_DELIVERY_DESIGN.md)<br>[sdk/runanywhere-swift/ARCHITECTURE.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/ARCHITECTURE.md)<br>[sdk/runanywhere-react-native/Docs/ARCHITECTURE.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-react-native/Docs/ARCHITECTURE.md)<br>[sdk/runanywhere-kotlin/docs/ARCHITECTURE.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/docs/ARCHITECTURE.md)<br>[sdk/runanywhere-flutter/docs/ARCHITECTURE.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-flutter/docs/ARCHITECTURE.md) |
| eval | 227 | [sdk/runanywhere-web/tests/browser/cross-cutting-e2e.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/cross-cutting-e2e.spec.ts)<br>[sdk/runanywhere-web/tests/browser/multi-wasm-init.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/multi-wasm-init.spec.ts)<br>[sdk/runanywhere-web/tests/browser/sdk-smoke.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/sdk-smoke.spec.ts)<br>[sdk/runanywhere-web/tests/browser/fixtures/silero_vad.onnx](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/fixtures/silero_vad.onnx)<br>[sdk/runanywhere-web/packages/core/tsconfig.test.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/tsconfig.test.json)<br>[sdk/runanywhere-web/packages/core/tests/unit/runtime/EmscriptenModule.test.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/tests/unit/runtime/EmscriptenModule.test.ts)<br>[sdk/runanywhere-web/packages/core/tests/unit/runtime/StreamWorker.test.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/tests/unit/runtime/StreamWorker.test.ts)<br>[sdk/runanywhere-web/packages/core/tests/unit/Public/Extensions/RunAnywhere+LoRA.test.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/tests/unit/Public/Extensions/RunAnywhere+LoRA.test.ts) |
| security | 13 | [SECURITY.md](../../../../sources/RunanywhereAI__runanywhere-sdks/SECURITY.md)<br>[sdk/runanywhere-swift/Sources/RunAnywhere/Foundation/Security/KeychainManager.swift](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/Sources/RunAnywhere/Foundation/Security/KeychainManager.swift)<br>[sdk/runanywhere-swift/Sources/RunAnywhere/CRACommons/include/rac_auth_manager.h](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/Sources/RunAnywhere/CRACommons/include/rac_auth_manager.h)<br>[sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidKeychainManager.kt](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidKeychainManager.kt)<br>[sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidPlatformContext.kt](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidPlatformContext.kt)<br>[sdk/runanywhere-flutter/packages/runanywhere/lib/public/hybrid/hybrid_routing_policy.dart](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-flutter/packages/runanywhere/lib/public/hybrid/hybrid_routing_policy.dart)<br>[sdk/runanywhere-flutter/packages/runanywhere/lib/native/dart_bridge_auth.dart](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-flutter/packages/runanywhere/lib/native/dart_bridge_auth.dart)<br>[sdk/runanywhere-commons/tests/test_auth_sdk_events.cpp](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/tests/test_auth_sdk_events.cpp) |
| ci | 12 | [sdk/runanywhere-swift/.github/workflows/ci.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/.github/workflows/ci.yml)<br>[sdk/runanywhere-commons/.github/workflows/build-commons.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/.github/workflows/build-commons.yml)<br>[sdk/runanywhere-commons/.github/workflows/release.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/.github/workflows/release.yml)<br>[sdk/runanywhere-commons/.github/workflows/size-check.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/.github/workflows/size-check.yml)<br>[.github/workflows/auto-tag.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/.github/workflows/auto-tag.yml)<br>[.github/workflows/check-no-pii-logging.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/.github/workflows/check-no-pii-logging.yml)<br>[.github/workflows/idl-drift-check.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/.github/workflows/idl-drift-check.yml)<br>[.github/workflows/legacy-files-blocklist.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/.github/workflows/legacy-files-blocklist.yml) |
| container | 3 | [sdk/runanywhere-commons/tests/Dockerfile.linux-tests](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/tests/Dockerfile.linux-tests)<br>[Playground/openclaw-hybrid-assistant/Dockerfile](../../../../sources/RunanywhereAI__runanywhere-sdks/Playground/openclaw-hybrid-assistant/Dockerfile)<br>[Playground/linux-voice-assistant/Dockerfile](../../../../sources/RunanywhereAI__runanywhere-sdks/Playground/linux-voice-assistant/Dockerfile) |
| instruction | 15 | [AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/AGENTS.md)<br>[CLAUDE.md](../../../../sources/RunanywhereAI__runanywhere-sdks/CLAUDE.md)<br>[sdk/runanywhere-web/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/AGENTS.md)<br>[sdk/runanywhere-swift/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/AGENTS.md)<br>[sdk/runanywhere-react-native/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-react-native/AGENTS.md)<br>[sdk/runanywhere-kotlin/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/AGENTS.md)<br>[sdk/runanywhere-flutter/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-flutter/AGENTS.md)<br>[sdk/runanywhere-commons/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/AGENTS.md) |
| docs | 52 | [README.md](../../../../sources/RunanywhereAI__runanywhere-sdks/README.md)<br>[sdk/runanywhere-web/README.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/README.md)<br>[sdk/runanywhere-web/packages/onnx/README.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/onnx/README.md)<br>[sdk/runanywhere-web/packages/llamacpp/README.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/llamacpp/README.md)<br>[sdk/runanywhere-web/packages/core/README.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/README.md)<br>[sdk/runanywhere-web/packages/core/docs/STREAM_DELIVERY_DESIGN.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/docs/STREAM_DELIVERY_DESIGN.md)<br>[sdk/runanywhere-swift/README.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/README.md)<br>[sdk/runanywhere-swift/Sources/ONNXRuntime/README.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/Sources/ONNXRuntime/README.md) |
| config | 23 | [package.json](../../../../sources/RunanywhereAI__runanywhere-sdks/package.json)<br>[sdk/shared/proto-ts/package.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/package.json)<br>[sdk/shared/proto-ts/tsconfig.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/shared/proto-ts/tsconfig.json)<br>[sdk/runanywhere-web/package.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/package.json)<br>[sdk/runanywhere-web/packages/onnx/package.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/onnx/package.json)<br>[sdk/runanywhere-web/packages/onnx/tsconfig.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/onnx/tsconfig.json)<br>[sdk/runanywhere-web/packages/llamacpp/package.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/llamacpp/package.json)<br>[sdk/runanywhere-web/packages/llamacpp/tsconfig.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/llamacpp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 227 | [sdk/runanywhere-web/tests/browser/cross-cutting-e2e.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/cross-cutting-e2e.spec.ts)<br>[sdk/runanywhere-web/tests/browser/multi-wasm-init.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/multi-wasm-init.spec.ts)<br>[sdk/runanywhere-web/tests/browser/sdk-smoke.spec.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/sdk-smoke.spec.ts)<br>[sdk/runanywhere-web/tests/browser/fixtures/silero_vad.onnx](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/tests/browser/fixtures/silero_vad.onnx)<br>[sdk/runanywhere-web/packages/core/tsconfig.test.json](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/tsconfig.test.json)<br>[sdk/runanywhere-web/packages/core/tests/unit/runtime/EmscriptenModule.test.ts](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/packages/core/tests/unit/runtime/EmscriptenModule.test.ts) |
| CI workflow | 12 | [sdk/runanywhere-swift/.github/workflows/ci.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/.github/workflows/ci.yml)<br>[sdk/runanywhere-commons/.github/workflows/build-commons.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/.github/workflows/build-commons.yml)<br>[sdk/runanywhere-commons/.github/workflows/release.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/.github/workflows/release.yml)<br>[sdk/runanywhere-commons/.github/workflows/size-check.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/.github/workflows/size-check.yml)<br>[.github/workflows/auto-tag.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/.github/workflows/auto-tag.yml)<br>[.github/workflows/check-no-pii-logging.yml](../../../../sources/RunanywhereAI__runanywhere-sdks/.github/workflows/check-no-pii-logging.yml) |
| 컨테이너/배포 | 3 | [sdk/runanywhere-commons/tests/Dockerfile.linux-tests](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-commons/tests/Dockerfile.linux-tests)<br>[Playground/openclaw-hybrid-assistant/Dockerfile](../../../../sources/RunanywhereAI__runanywhere-sdks/Playground/openclaw-hybrid-assistant/Dockerfile)<br>[Playground/linux-voice-assistant/Dockerfile](../../../../sources/RunanywhereAI__runanywhere-sdks/Playground/linux-voice-assistant/Dockerfile) |
| 보안/정책 | 13 | [SECURITY.md](../../../../sources/RunanywhereAI__runanywhere-sdks/SECURITY.md)<br>[sdk/runanywhere-swift/Sources/RunAnywhere/Foundation/Security/KeychainManager.swift](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/Sources/RunAnywhere/Foundation/Security/KeychainManager.swift)<br>[sdk/runanywhere-swift/Sources/RunAnywhere/CRACommons/include/rac_auth_manager.h](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/Sources/RunAnywhere/CRACommons/include/rac_auth_manager.h)<br>[sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidKeychainManager.kt](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidKeychainManager.kt)<br>[sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidPlatformContext.kt](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/src/main/kotlin/com/runanywhere/sdk/foundation/security/AndroidPlatformContext.kt)<br>[sdk/runanywhere-flutter/packages/runanywhere/lib/public/hybrid/hybrid_routing_policy.dart](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-flutter/packages/runanywhere/lib/public/hybrid/hybrid_routing_policy.dart) |
| 에이전트 지시문 | 15 | [AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/AGENTS.md)<br>[CLAUDE.md](../../../../sources/RunanywhereAI__runanywhere-sdks/CLAUDE.md)<br>[sdk/runanywhere-web/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-web/AGENTS.md)<br>[sdk/runanywhere-swift/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-swift/AGENTS.md)<br>[sdk/runanywhere-react-native/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-react-native/AGENTS.md)<br>[sdk/runanywhere-kotlin/AGENTS.md](../../../../sources/RunanywhereAI__runanywhere-sdks/sdk/runanywhere-kotlin/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `sdk/shared/proto-ts/src/index.ts`, `sdk/runanywhere-web/packages/onnx/src/index.ts`, `sdk/runanywhere-web/packages/llamacpp/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `sdk/shared/proto-ts/src/index.ts`, `sdk/runanywhere-web/packages/onnx/src/index.ts`, `sdk/runanywhere-web/packages/llamacpp/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `sdk/shared/proto-ts/src/tool_calling.ts`, `sdk/runanywhere-web/AGENTS.md`.
4. retrieval/memory/indexing 확인: `sdk/shared/proto-ts/src/index.ts`, `sdk/shared/proto-ts/src/rag.ts`, `sdk/shared/proto-ts/src/streams/rag_service_stream.ts`.
5. test/eval 파일로 동작 검증: `sdk/runanywhere-web/tests/browser/cross-cutting-e2e.spec.ts`, `sdk/runanywhere-web/tests/browser/multi-wasm-init.spec.ts`, `sdk/runanywhere-web/tests/browser/sdk-smoke.spec.ts`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Production ready toolkit to run AI locally. 핵심 구조 신호는 C++, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
