# tetherto/qvac 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

QVAC - Local AI SDK and libraries for building private, cross-platform, peer-to-peer AI applications. Run LLMs, speech-to-text, translation, and more locally on Linux, macOS, Windows, Android, and iOS.

## 요약

- 조사 단위: `sources/tetherto__qvac` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,009 files, 929 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=plugins/opencode/src/index.ts, packages/vla-ggml/sim/server/server.js, packages/tts-onnx/benchmarks/server/src/server.js이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | tetherto/qvac |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | TypeScript |
| Stars | 255 |
| Forks | 71 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/tetherto__qvac](../../../../sources/tetherto__qvac) |
| 기존 보고서 | [reports/global-trending/repositories/tetherto__qvac.md](../../../global-trending/repositories/tetherto__qvac.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4009 / 929 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .claude, .cursor, .github, docs, packages, plugins, scripts |
| 상위 확장자 | .ts: 910, .js: 805, .md: 392, .cpp: 271, .hpp: 225, .yml: 212, .json: 176, (none): 149, .txt: 129, .py: 109, .cmake: 66, .mdx: 62 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/sdk | packages workspace | 54 |
| packages/vla-ggml | packages workspace | 45 |
| packages/tts-onnx | packages workspace | 31 |
| packages/ocr-onnx | packages workspace | 23 |
| packages/transcription-whispercpp | packages workspace | 21 |
| packages/translation-nmtcpp | packages workspace | 21 |
| packages/registry-server | packages workspace | 16 |
| packages/transcription-parakeet | packages workspace | 15 |
| packages/tts-ggml | packages workspace | 9 |
| docs | documentation surface | 5 |
| packages/embed-llamacpp | packages workspace | 4 |
| packages/llm-llamacpp | packages workspace | 4 |
| packages/cli | packages workspace | 3 |
| packages/diffusion-cpp | packages workspace | 3 |
| packages/ocr-ggml | packages workspace | 2 |
| packages/onnx | packages workspace | 2 |
| packages/qvac-ci | packages workspace | 2 |
| packages/rag | packages workspace | 2 |


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
| entrypoints | [plugins/opencode/src/index.ts](../../../../sources/tetherto__qvac/plugins/opencode/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vla-ggml/sim/server/server.js](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/server/server.js) | entrypoints signal |
| entrypoints | [packages/tts-onnx/benchmarks/server/src/server.js](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/server/src/server.js) | entrypoints signal |
| entrypoints | [packages/tts-onnx/benchmarks/python-server/main.py](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/python-server/main.py) | entrypoints signal |
| config | [plugins/opencode/package.json](../../../../sources/tetherto__qvac/plugins/opencode/package.json) | config signal |
| config | [plugins/opencode/tsconfig.json](../../../../sources/tetherto__qvac/plugins/opencode/tsconfig.json) | config signal |
| config | [packages/vla-ggml/package.json](../../../../sources/tetherto__qvac/packages/vla-ggml/package.json) | config signal |
| config | [packages/vla-ggml/sim/requirements.txt](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/requirements.txt) | config signal |
| ci | [packages/tts-onnx/ci/remove-brew-llvm.sh](../../../../sources/tetherto__qvac/packages/tts-onnx/ci/remove-brew-llvm.sh) | ci signal |
| ci | [packages/transcription-whispercpp/benchmarks/ci/convert-hf-to-ggml.py](../../../../sources/tetherto__qvac/packages/transcription-whispercpp/benchmarks/ci/convert-hf-to-ggml.py) | ci signal |
| ci | [packages/transcription-whispercpp/benchmarks/ci/requirements-conversion.txt](../../../../sources/tetherto__qvac/packages/transcription-whispercpp/benchmarks/ci/requirements-conversion.txt) | ci signal |
| ci | [packages/onnx/ci/remove-brew-llvm.sh](../../../../sources/tetherto__qvac/packages/onnx/ci/remove-brew-llvm.sh) | ci signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 19 | [plugins/opencode/src/index.ts](../../../../sources/tetherto__qvac/plugins/opencode/src/index.ts)<br>[packages/vla-ggml/sim/server/server.js](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/server/server.js)<br>[packages/tts-onnx/benchmarks/server/src/server.js](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/server/src/server.js)<br>[packages/tts-onnx/benchmarks/python-server/main.py](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/python-server/main.py)<br>[packages/tts-onnx/benchmarks/python-server/src/server.py](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/python-server/src/server.py)<br>[packages/tts-onnx/benchmarks/client/src/tts/main.py](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/client/src/tts/main.py)<br>[packages/tts-onnx/addon/test/unit/src/main.cpp](../../../../sources/tetherto__qvac/packages/tts-onnx/addon/test/unit/src/main.cpp)<br>[packages/transcription-whispercpp/benchmarks/server/src/server.js](../../../../sources/tetherto__qvac/packages/transcription-whispercpp/benchmarks/server/src/server.js) |
| agentRuntime | 122 | [packages/sdk/utils/tool-helpers.ts](../../../../sources/tetherto__qvac/packages/sdk/utils/tool-helpers.ts)<br>[packages/sdk/test/unit/context-overflow.test.ts](../../../../sources/tetherto__qvac/packages/sdk/test/unit/context-overflow.test.ts)<br>[packages/sdk/test/unit/tool-parser.test.ts](../../../../sources/tetherto__qvac/packages/sdk/test/unit/tool-parser.test.ts)<br>[packages/sdk/server/utils/tool-integration.ts](../../../../sources/tetherto__qvac/packages/sdk/server/utils/tool-integration.ts)<br>[packages/sdk/server/utils/tools/dialect.ts](../../../../sources/tetherto__qvac/packages/sdk/server/utils/tools/dialect.ts)<br>[packages/sdk/server/utils/tools/index.ts](../../../../sources/tetherto__qvac/packages/sdk/server/utils/tools/index.ts)<br>[packages/sdk/server/utils/tools/parser.ts](../../../../sources/tetherto__qvac/packages/sdk/server/utils/tools/parser.ts)<br>[packages/sdk/server/utils/tools/shared.ts](../../../../sources/tetherto__qvac/packages/sdk/server/utils/tools/shared.ts) |
| mcp | 4 | [packages/sdk/utils/mcp-adapter.ts](../../../../sources/tetherto__qvac/packages/sdk/utils/mcp-adapter.ts)<br>[packages/sdk/schemas/mcp-adapter.ts](../../../../sources/tetherto__qvac/packages/sdk/schemas/mcp-adapter.ts)<br>[packages/sdk/examples/mcp-websearch.ts](../../../../sources/tetherto__qvac/packages/sdk/examples/mcp-websearch.ts)<br>[packages/ocr-onnx/.agent/mcp.json](../../../../sources/tetherto__qvac/packages/ocr-onnx/.agent/mcp.json) |
| retrieval | 377 | [plugins/opencode/src/index.ts](../../../../sources/tetherto__qvac/plugins/opencode/src/index.ts)<br>[packages/vla-ggml/index.d.ts](../../../../sources/tetherto__qvac/packages/vla-ggml/index.d.ts)<br>[packages/vla-ggml/index.js](../../../../sources/tetherto__qvac/packages/vla-ggml/index.js)<br>[packages/vla-ggml/test/unit/test_pi05_m3_4_vlm_embed.cpp](../../../../sources/tetherto__qvac/packages/vla-ggml/test/unit/test_pi05_m3_4_vlm_embed.cpp)<br>[packages/tts-onnx/index.d.ts](../../../../sources/tetherto__qvac/packages/tts-onnx/index.d.ts)<br>[packages/tts-onnx/index.js](../../../../sources/tetherto__qvac/packages/tts-onnx/index.js)<br>[packages/tts-onnx/examples/pcm-chunk-player.js](../../../../sources/tetherto__qvac/packages/tts-onnx/examples/pcm-chunk-player.js)<br>[packages/tts-onnx/benchmarks/server/index.js](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/server/index.js) |
| spec | 68 | [packages/vla-ggml/sim/requirements.txt](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/requirements.txt)<br>[packages/vla-ggml/scripts/requirements-pi05-oracle.txt](../../../../sources/tetherto__qvac/packages/vla-ggml/scripts/requirements-pi05-oracle.txt)<br>[packages/tts-onnx/docs/architecture.md](../../../../sources/tetherto__qvac/packages/tts-onnx/docs/architecture.md)<br>[packages/tts-onnx/benchmarks/python-server/requirements-chatterbox.txt](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/python-server/requirements-chatterbox.txt)<br>[packages/tts-onnx/benchmarks/python-server/requirements-supertonic.txt](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/python-server/requirements-supertonic.txt)<br>[packages/tts-onnx/benchmarks/client/requirements-roundtrip.txt](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/client/requirements-roundtrip.txt)<br>[packages/tts-onnx/benchmarks/client/requirements.txt](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/client/requirements.txt)<br>[packages/tts-ggml/scripts/requirements.txt](../../../../sources/tetherto__qvac/packages/tts-ggml/scripts/requirements.txt) |
| eval | 1166 | [scripts/test-utils/performance-reporter.js](../../../../sources/tetherto__qvac/scripts/test-utils/performance-reporter.js)<br>[scripts/test-utils/quality-metrics.js](../../../../sources/tetherto__qvac/scripts/test-utils/quality-metrics.js)<br>[scripts/test-utils/translation-quality.js](../../../../sources/tetherto__qvac/scripts/test-utils/translation-quality.js)<br>[scripts/perf-report/verify-quality.js](../../../../sources/tetherto__qvac/scripts/perf-report/verify-quality.js)<br>[scripts/perf-report/__tests__/backend-comparison.test.js](../../../../sources/tetherto__qvac/scripts/perf-report/__tests__/backend-comparison.test.js)<br>[scripts/perf-report/__tests__/comet-score-nmt.test.js](../../../../sources/tetherto__qvac/scripts/perf-report/__tests__/comet-score-nmt.test.js)<br>[scripts/perf-report/__tests__/exclude-filter.test.js](../../../../sources/tetherto__qvac/scripts/perf-report/__tests__/exclude-filter.test.js)<br>[plugins/opencode/tsconfig.test.json](../../../../sources/tetherto__qvac/plugins/opencode/tsconfig.test.json) |
| security | 18 | [SECURITY.md](../../../../sources/tetherto__qvac/SECURITY.md)<br>[packages/vla-ggml/sim/qvac_http_policy.py](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/qvac_http_policy.py)<br>[packages/sdk/test/unit/path-security.test.ts](../../../../sources/tetherto__qvac/packages/sdk/test/unit/path-security.test.ts)<br>[packages/sdk/test/bare/path-security.test.ts](../../../../sources/tetherto__qvac/packages/sdk/test/bare/path-security.test.ts)<br>[packages/sdk/server/utils/path-security.ts](../../../../sources/tetherto__qvac/packages/sdk/server/utils/path-security.ts)<br>[packages/sdk/scripts/run-security-tests.ts](../../../../sources/tetherto__qvac/packages/sdk/scripts/run-security-tests.ts)<br>[packages/ocr-onnx/.agent/agents/security-reviewer.md](../../../../sources/tetherto__qvac/packages/ocr-onnx/.agent/agents/security-reviewer.md)<br>[packages/diffusion-cpp/test/unit/test_stb_image_security.cpp](../../../../sources/tetherto__qvac/packages/diffusion-cpp/test/unit/test_stb_image_security.cpp) |
| ci | 184 | [packages/tts-onnx/ci/remove-brew-llvm.sh](../../../../sources/tetherto__qvac/packages/tts-onnx/ci/remove-brew-llvm.sh)<br>[packages/transcription-whispercpp/benchmarks/ci/convert-hf-to-ggml.py](../../../../sources/tetherto__qvac/packages/transcription-whispercpp/benchmarks/ci/convert-hf-to-ggml.py)<br>[packages/transcription-whispercpp/benchmarks/ci/requirements-conversion.txt](../../../../sources/tetherto__qvac/packages/transcription-whispercpp/benchmarks/ci/requirements-conversion.txt)<br>[packages/onnx/ci/remove-brew-llvm.sh](../../../../sources/tetherto__qvac/packages/onnx/ci/remove-brew-llvm.sh)<br>[packages/ocr-onnx/ci/integration-test.sh](../../../../sources/tetherto__qvac/packages/ocr-onnx/ci/integration-test.sh)<br>[packages/ocr-onnx/ci/remove-brew-llvm.sh](../../../../sources/tetherto__qvac/packages/ocr-onnx/ci/remove-brew-llvm.sh)<br>[docs/ci/LABELS.md](../../../../sources/tetherto__qvac/docs/ci/LABELS.md)<br>[docs/ci/SELF-HOSTED-RUNNERS.md](../../../../sources/tetherto__qvac/docs/ci/SELF-HOSTED-RUNNERS.md) |
| container | 0 | 명확하지 않음 |
| instruction | 26 | [CLAUDE.md](../../../../sources/tetherto__qvac/CLAUDE.md)<br>[.cursor/rules/file-formatting.mdc](../../../../sources/tetherto__qvac/.cursor/rules/file-formatting.mdc)<br>[.cursor/rules/qip-triage.mdc](../../../../sources/tetherto__qvac/.cursor/rules/qip-triage.mdc)<br>[.cursor/rules/website/main.mdc](../../../../sources/tetherto__qvac/.cursor/rules/website/main.mdc)<br>[.cursor/rules/sdk/commit-and-pr-format.mdc](../../../../sources/tetherto__qvac/.cursor/rules/sdk/commit-and-pr-format.mdc)<br>[.cursor/rules/sdk/docs-freshness.mdc](../../../../sources/tetherto__qvac/.cursor/rules/sdk/docs-freshness.mdc)<br>[.cursor/rules/sdk/e2e.mdc](../../../../sources/tetherto__qvac/.cursor/rules/sdk/e2e.mdc)<br>[.cursor/rules/sdk/error-handling.mdc](../../../../sources/tetherto__qvac/.cursor/rules/sdk/error-handling.mdc) |
| docs | 369 | [README.md](../../../../sources/tetherto__qvac/README.md)<br>[plugins/opencode/README.md](../../../../sources/tetherto__qvac/plugins/opencode/README.md)<br>[packages/vla-ggml/README.md](../../../../sources/tetherto__qvac/packages/vla-ggml/README.md)<br>[packages/vla-ggml/test/mobile/README.md](../../../../sources/tetherto__qvac/packages/vla-ggml/test/mobile/README.md)<br>[packages/vla-ggml/sim/README.md](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/README.md)<br>[packages/vla-ggml/scripts/README-oracle.md](../../../../sources/tetherto__qvac/packages/vla-ggml/scripts/README-oracle.md)<br>[packages/vla-ggml/scripts/README-pi05-converter.md](../../../../sources/tetherto__qvac/packages/vla-ggml/scripts/README-pi05-converter.md)<br>[packages/tts-onnx/README.md](../../../../sources/tetherto__qvac/packages/tts-onnx/README.md) |
| config | 80 | [plugins/opencode/package.json](../../../../sources/tetherto__qvac/plugins/opencode/package.json)<br>[plugins/opencode/tsconfig.json](../../../../sources/tetherto__qvac/plugins/opencode/tsconfig.json)<br>[packages/vla-ggml/package.json](../../../../sources/tetherto__qvac/packages/vla-ggml/package.json)<br>[packages/vla-ggml/sim/requirements.txt](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/requirements.txt)<br>[packages/vla-ggml/sim/server/package.json](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/server/package.json)<br>[packages/vla-ggml/scripts/requirements-pi05-oracle.txt](../../../../sources/tetherto__qvac/packages/vla-ggml/scripts/requirements-pi05-oracle.txt)<br>[packages/tts-onnx/package.json](../../../../sources/tetherto__qvac/packages/tts-onnx/package.json)<br>[packages/tts-onnx/benchmarks/server/package.json](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/server/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1166 | [scripts/test-utils/performance-reporter.js](../../../../sources/tetherto__qvac/scripts/test-utils/performance-reporter.js)<br>[scripts/test-utils/quality-metrics.js](../../../../sources/tetherto__qvac/scripts/test-utils/quality-metrics.js)<br>[scripts/test-utils/translation-quality.js](../../../../sources/tetherto__qvac/scripts/test-utils/translation-quality.js)<br>[scripts/perf-report/verify-quality.js](../../../../sources/tetherto__qvac/scripts/perf-report/verify-quality.js)<br>[scripts/perf-report/__tests__/backend-comparison.test.js](../../../../sources/tetherto__qvac/scripts/perf-report/__tests__/backend-comparison.test.js)<br>[scripts/perf-report/__tests__/comet-score-nmt.test.js](../../../../sources/tetherto__qvac/scripts/perf-report/__tests__/comet-score-nmt.test.js) |
| CI workflow | 184 | [packages/tts-onnx/ci/remove-brew-llvm.sh](../../../../sources/tetherto__qvac/packages/tts-onnx/ci/remove-brew-llvm.sh)<br>[packages/transcription-whispercpp/benchmarks/ci/convert-hf-to-ggml.py](../../../../sources/tetherto__qvac/packages/transcription-whispercpp/benchmarks/ci/convert-hf-to-ggml.py)<br>[packages/transcription-whispercpp/benchmarks/ci/requirements-conversion.txt](../../../../sources/tetherto__qvac/packages/transcription-whispercpp/benchmarks/ci/requirements-conversion.txt)<br>[packages/onnx/ci/remove-brew-llvm.sh](../../../../sources/tetherto__qvac/packages/onnx/ci/remove-brew-llvm.sh)<br>[packages/ocr-onnx/ci/integration-test.sh](../../../../sources/tetherto__qvac/packages/ocr-onnx/ci/integration-test.sh)<br>[packages/ocr-onnx/ci/remove-brew-llvm.sh](../../../../sources/tetherto__qvac/packages/ocr-onnx/ci/remove-brew-llvm.sh) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 18 | [SECURITY.md](../../../../sources/tetherto__qvac/SECURITY.md)<br>[packages/vla-ggml/sim/qvac_http_policy.py](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/qvac_http_policy.py)<br>[packages/sdk/test/unit/path-security.test.ts](../../../../sources/tetherto__qvac/packages/sdk/test/unit/path-security.test.ts)<br>[packages/sdk/test/bare/path-security.test.ts](../../../../sources/tetherto__qvac/packages/sdk/test/bare/path-security.test.ts)<br>[packages/sdk/server/utils/path-security.ts](../../../../sources/tetherto__qvac/packages/sdk/server/utils/path-security.ts)<br>[packages/sdk/scripts/run-security-tests.ts](../../../../sources/tetherto__qvac/packages/sdk/scripts/run-security-tests.ts) |
| 에이전트 지시문 | 26 | [CLAUDE.md](../../../../sources/tetherto__qvac/CLAUDE.md)<br>[.cursor/rules/file-formatting.mdc](../../../../sources/tetherto__qvac/.cursor/rules/file-formatting.mdc)<br>[.cursor/rules/qip-triage.mdc](../../../../sources/tetherto__qvac/.cursor/rules/qip-triage.mdc)<br>[.cursor/rules/website/main.mdc](../../../../sources/tetherto__qvac/.cursor/rules/website/main.mdc)<br>[.cursor/rules/sdk/commit-and-pr-format.mdc](../../../../sources/tetherto__qvac/.cursor/rules/sdk/commit-and-pr-format.mdc)<br>[.cursor/rules/sdk/docs-freshness.mdc](../../../../sources/tetherto__qvac/.cursor/rules/sdk/docs-freshness.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `plugins/opencode/src/index.ts`, `packages/vla-ggml/sim/server/server.js`, `packages/tts-onnx/benchmarks/server/src/server.js`.
2. entrypoint를 따라 실행 흐름 확인: `plugins/opencode/src/index.ts`, `packages/vla-ggml/sim/server/server.js`, `packages/tts-onnx/benchmarks/server/src/server.js`.
3. agent/tool runtime 매핑: `packages/sdk/utils/tool-helpers.ts`, `packages/sdk/test/unit/context-overflow.test.ts`, `packages/sdk/test/unit/tool-parser.test.ts`.
4. retrieval/memory/indexing 확인: `plugins/opencode/src/index.ts`, `packages/vla-ggml/index.d.ts`, `packages/vla-ggml/index.js`.
5. test/eval 파일로 동작 검증: `scripts/test-utils/performance-reporter.js`, `scripts/test-utils/quality-metrics.js`, `scripts/test-utils/translation-quality.js`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 QVAC Local AI SDK and libraries for building private, cross platform, peer to peer AI applications. Run LLMs, speech to . 핵심 구조 신호는 TypeScript, README.md, CLAUDE.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
