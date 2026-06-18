# tetherto/qvac Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

QVAC - Local AI SDK and libraries for building private, cross-platform, peer-to-peer AI applications. Run LLMs, speech-to-text, translation, and more locally on Linux, macOS, Windows, Android, and iOS.

## 요약

- 조사 단위: `sources/tetherto__qvac` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4,009 files, 929 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=plugins/opencode/src/index.ts, packages/vla-ggml/sim/server/server.js, packages/tts-onnx/benchmarks/server/src/server.js이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | tetherto/qvac |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | TypeScript |
| Stars | 255 |
| Forks | 71 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/tetherto__qvac](../../../../sources/tetherto__qvac) |
| Existing report | [reports/global-trending/repositories/tetherto__qvac.md](../../../global-trending/repositories/tetherto__qvac.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4009 / 929 |
| Max observed depth | 8 |
| Top directories | .claude, .cursor, .github, docs, packages, plugins, scripts |
| Top extensions | .ts: 910, .js: 805, .md: 392, .cpp: 271, .hpp: 225, .yml: 212, .json: 176, (none): 149, .txt: 129, .py: 109, .cmake: 66, .mdx: 62 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 19 | [plugins/opencode/src/index.ts](../../../../sources/tetherto__qvac/plugins/opencode/src/index.ts)<br>[packages/vla-ggml/sim/server/server.js](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/server/server.js)<br>[packages/tts-onnx/benchmarks/server/src/server.js](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/server/src/server.js)<br>[packages/tts-onnx/benchmarks/python-server/main.py](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/python-server/main.py)<br>[packages/tts-onnx/benchmarks/python-server/src/server.py](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/python-server/src/server.py)<br>[packages/tts-onnx/benchmarks/client/src/tts/main.py](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/client/src/tts/main.py)<br>[packages/tts-onnx/addon/test/unit/src/main.cpp](../../../../sources/tetherto__qvac/packages/tts-onnx/addon/test/unit/src/main.cpp)<br>[packages/transcription-whispercpp/benchmarks/server/src/server.js](../../../../sources/tetherto__qvac/packages/transcription-whispercpp/benchmarks/server/src/server.js) |
| agentRuntime | 122 | [packages/sdk/utils/tool-helpers.ts](../../../../sources/tetherto__qvac/packages/sdk/utils/tool-helpers.ts)<br>[packages/sdk/test/unit/context-overflow.test.ts](../../../../sources/tetherto__qvac/packages/sdk/test/unit/context-overflow.test.ts)<br>[packages/sdk/test/unit/tool-parser.test.ts](../../../../sources/tetherto__qvac/packages/sdk/test/unit/tool-parser.test.ts)<br>[packages/sdk/server/utils/tool-integration.ts](../../../../sources/tetherto__qvac/packages/sdk/server/utils/tool-integration.ts)<br>[packages/sdk/server/utils/tools/dialect.ts](../../../../sources/tetherto__qvac/packages/sdk/server/utils/tools/dialect.ts)<br>[packages/sdk/server/utils/tools/index.ts](../../../../sources/tetherto__qvac/packages/sdk/server/utils/tools/index.ts)<br>[packages/sdk/server/utils/tools/parser.ts](../../../../sources/tetherto__qvac/packages/sdk/server/utils/tools/parser.ts)<br>[packages/sdk/server/utils/tools/shared.ts](../../../../sources/tetherto__qvac/packages/sdk/server/utils/tools/shared.ts) |
| mcp | 4 | [packages/sdk/utils/mcp-adapter.ts](../../../../sources/tetherto__qvac/packages/sdk/utils/mcp-adapter.ts)<br>[packages/sdk/schemas/mcp-adapter.ts](../../../../sources/tetherto__qvac/packages/sdk/schemas/mcp-adapter.ts)<br>[packages/sdk/examples/mcp-websearch.ts](../../../../sources/tetherto__qvac/packages/sdk/examples/mcp-websearch.ts)<br>[packages/ocr-onnx/.agent/mcp.json](../../../../sources/tetherto__qvac/packages/ocr-onnx/.agent/mcp.json) |
| retrieval | 377 | [plugins/opencode/src/index.ts](../../../../sources/tetherto__qvac/plugins/opencode/src/index.ts)<br>[packages/vla-ggml/index.d.ts](../../../../sources/tetherto__qvac/packages/vla-ggml/index.d.ts)<br>[packages/vla-ggml/index.js](../../../../sources/tetherto__qvac/packages/vla-ggml/index.js)<br>[packages/vla-ggml/test/unit/test_pi05_m3_4_vlm_embed.cpp](../../../../sources/tetherto__qvac/packages/vla-ggml/test/unit/test_pi05_m3_4_vlm_embed.cpp)<br>[packages/tts-onnx/index.d.ts](../../../../sources/tetherto__qvac/packages/tts-onnx/index.d.ts)<br>[packages/tts-onnx/index.js](../../../../sources/tetherto__qvac/packages/tts-onnx/index.js)<br>[packages/tts-onnx/examples/pcm-chunk-player.js](../../../../sources/tetherto__qvac/packages/tts-onnx/examples/pcm-chunk-player.js)<br>[packages/tts-onnx/benchmarks/server/index.js](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/server/index.js) |
| spec | 68 | [packages/vla-ggml/sim/requirements.txt](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/requirements.txt)<br>[packages/vla-ggml/scripts/requirements-pi05-oracle.txt](../../../../sources/tetherto__qvac/packages/vla-ggml/scripts/requirements-pi05-oracle.txt)<br>[packages/tts-onnx/docs/architecture.md](../../../../sources/tetherto__qvac/packages/tts-onnx/docs/architecture.md)<br>[packages/tts-onnx/benchmarks/python-server/requirements-chatterbox.txt](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/python-server/requirements-chatterbox.txt)<br>[packages/tts-onnx/benchmarks/python-server/requirements-supertonic.txt](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/python-server/requirements-supertonic.txt)<br>[packages/tts-onnx/benchmarks/client/requirements-roundtrip.txt](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/client/requirements-roundtrip.txt)<br>[packages/tts-onnx/benchmarks/client/requirements.txt](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/client/requirements.txt)<br>[packages/tts-ggml/scripts/requirements.txt](../../../../sources/tetherto__qvac/packages/tts-ggml/scripts/requirements.txt) |
| eval | 1166 | [scripts/test-utils/performance-reporter.js](../../../../sources/tetherto__qvac/scripts/test-utils/performance-reporter.js)<br>[scripts/test-utils/quality-metrics.js](../../../../sources/tetherto__qvac/scripts/test-utils/quality-metrics.js)<br>[scripts/test-utils/translation-quality.js](../../../../sources/tetherto__qvac/scripts/test-utils/translation-quality.js)<br>[scripts/perf-report/verify-quality.js](../../../../sources/tetherto__qvac/scripts/perf-report/verify-quality.js)<br>[scripts/perf-report/__tests__/backend-comparison.test.js](../../../../sources/tetherto__qvac/scripts/perf-report/__tests__/backend-comparison.test.js)<br>[scripts/perf-report/__tests__/comet-score-nmt.test.js](../../../../sources/tetherto__qvac/scripts/perf-report/__tests__/comet-score-nmt.test.js)<br>[scripts/perf-report/__tests__/exclude-filter.test.js](../../../../sources/tetherto__qvac/scripts/perf-report/__tests__/exclude-filter.test.js)<br>[plugins/opencode/tsconfig.test.json](../../../../sources/tetherto__qvac/plugins/opencode/tsconfig.test.json) |
| security | 18 | [SECURITY.md](../../../../sources/tetherto__qvac/SECURITY.md)<br>[packages/vla-ggml/sim/qvac_http_policy.py](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/qvac_http_policy.py)<br>[packages/sdk/test/unit/path-security.test.ts](../../../../sources/tetherto__qvac/packages/sdk/test/unit/path-security.test.ts)<br>[packages/sdk/test/bare/path-security.test.ts](../../../../sources/tetherto__qvac/packages/sdk/test/bare/path-security.test.ts)<br>[packages/sdk/server/utils/path-security.ts](../../../../sources/tetherto__qvac/packages/sdk/server/utils/path-security.ts)<br>[packages/sdk/scripts/run-security-tests.ts](../../../../sources/tetherto__qvac/packages/sdk/scripts/run-security-tests.ts)<br>[packages/ocr-onnx/.agent/agents/security-reviewer.md](../../../../sources/tetherto__qvac/packages/ocr-onnx/.agent/agents/security-reviewer.md)<br>[packages/diffusion-cpp/test/unit/test_stb_image_security.cpp](../../../../sources/tetherto__qvac/packages/diffusion-cpp/test/unit/test_stb_image_security.cpp) |
| ci | 184 | [packages/tts-onnx/ci/remove-brew-llvm.sh](../../../../sources/tetherto__qvac/packages/tts-onnx/ci/remove-brew-llvm.sh)<br>[packages/transcription-whispercpp/benchmarks/ci/convert-hf-to-ggml.py](../../../../sources/tetherto__qvac/packages/transcription-whispercpp/benchmarks/ci/convert-hf-to-ggml.py)<br>[packages/transcription-whispercpp/benchmarks/ci/requirements-conversion.txt](../../../../sources/tetherto__qvac/packages/transcription-whispercpp/benchmarks/ci/requirements-conversion.txt)<br>[packages/onnx/ci/remove-brew-llvm.sh](../../../../sources/tetherto__qvac/packages/onnx/ci/remove-brew-llvm.sh)<br>[packages/ocr-onnx/ci/integration-test.sh](../../../../sources/tetherto__qvac/packages/ocr-onnx/ci/integration-test.sh)<br>[packages/ocr-onnx/ci/remove-brew-llvm.sh](../../../../sources/tetherto__qvac/packages/ocr-onnx/ci/remove-brew-llvm.sh)<br>[docs/ci/LABELS.md](../../../../sources/tetherto__qvac/docs/ci/LABELS.md)<br>[docs/ci/SELF-HOSTED-RUNNERS.md](../../../../sources/tetherto__qvac/docs/ci/SELF-HOSTED-RUNNERS.md) |
| container | 0 | not obvious |
| instruction | 26 | [CLAUDE.md](../../../../sources/tetherto__qvac/CLAUDE.md)<br>[.cursor/rules/file-formatting.mdc](../../../../sources/tetherto__qvac/.cursor/rules/file-formatting.mdc)<br>[.cursor/rules/qip-triage.mdc](../../../../sources/tetherto__qvac/.cursor/rules/qip-triage.mdc)<br>[.cursor/rules/website/main.mdc](../../../../sources/tetherto__qvac/.cursor/rules/website/main.mdc)<br>[.cursor/rules/sdk/commit-and-pr-format.mdc](../../../../sources/tetherto__qvac/.cursor/rules/sdk/commit-and-pr-format.mdc)<br>[.cursor/rules/sdk/docs-freshness.mdc](../../../../sources/tetherto__qvac/.cursor/rules/sdk/docs-freshness.mdc)<br>[.cursor/rules/sdk/e2e.mdc](../../../../sources/tetherto__qvac/.cursor/rules/sdk/e2e.mdc)<br>[.cursor/rules/sdk/error-handling.mdc](../../../../sources/tetherto__qvac/.cursor/rules/sdk/error-handling.mdc) |
| docs | 369 | [README.md](../../../../sources/tetherto__qvac/README.md)<br>[plugins/opencode/README.md](../../../../sources/tetherto__qvac/plugins/opencode/README.md)<br>[packages/vla-ggml/README.md](../../../../sources/tetherto__qvac/packages/vla-ggml/README.md)<br>[packages/vla-ggml/test/mobile/README.md](../../../../sources/tetherto__qvac/packages/vla-ggml/test/mobile/README.md)<br>[packages/vla-ggml/sim/README.md](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/README.md)<br>[packages/vla-ggml/scripts/README-oracle.md](../../../../sources/tetherto__qvac/packages/vla-ggml/scripts/README-oracle.md)<br>[packages/vla-ggml/scripts/README-pi05-converter.md](../../../../sources/tetherto__qvac/packages/vla-ggml/scripts/README-pi05-converter.md)<br>[packages/tts-onnx/README.md](../../../../sources/tetherto__qvac/packages/tts-onnx/README.md) |
| config | 80 | [plugins/opencode/package.json](../../../../sources/tetherto__qvac/plugins/opencode/package.json)<br>[plugins/opencode/tsconfig.json](../../../../sources/tetherto__qvac/plugins/opencode/tsconfig.json)<br>[packages/vla-ggml/package.json](../../../../sources/tetherto__qvac/packages/vla-ggml/package.json)<br>[packages/vla-ggml/sim/requirements.txt](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/requirements.txt)<br>[packages/vla-ggml/sim/server/package.json](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/server/package.json)<br>[packages/vla-ggml/scripts/requirements-pi05-oracle.txt](../../../../sources/tetherto__qvac/packages/vla-ggml/scripts/requirements-pi05-oracle.txt)<br>[packages/tts-onnx/package.json](../../../../sources/tetherto__qvac/packages/tts-onnx/package.json)<br>[packages/tts-onnx/benchmarks/server/package.json](../../../../sources/tetherto__qvac/packages/tts-onnx/benchmarks/server/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1166 | [scripts/test-utils/performance-reporter.js](../../../../sources/tetherto__qvac/scripts/test-utils/performance-reporter.js)<br>[scripts/test-utils/quality-metrics.js](../../../../sources/tetherto__qvac/scripts/test-utils/quality-metrics.js)<br>[scripts/test-utils/translation-quality.js](../../../../sources/tetherto__qvac/scripts/test-utils/translation-quality.js)<br>[scripts/perf-report/verify-quality.js](../../../../sources/tetherto__qvac/scripts/perf-report/verify-quality.js)<br>[scripts/perf-report/__tests__/backend-comparison.test.js](../../../../sources/tetherto__qvac/scripts/perf-report/__tests__/backend-comparison.test.js)<br>[scripts/perf-report/__tests__/comet-score-nmt.test.js](../../../../sources/tetherto__qvac/scripts/perf-report/__tests__/comet-score-nmt.test.js) |
| CI workflows | 184 | [packages/tts-onnx/ci/remove-brew-llvm.sh](../../../../sources/tetherto__qvac/packages/tts-onnx/ci/remove-brew-llvm.sh)<br>[packages/transcription-whispercpp/benchmarks/ci/convert-hf-to-ggml.py](../../../../sources/tetherto__qvac/packages/transcription-whispercpp/benchmarks/ci/convert-hf-to-ggml.py)<br>[packages/transcription-whispercpp/benchmarks/ci/requirements-conversion.txt](../../../../sources/tetherto__qvac/packages/transcription-whispercpp/benchmarks/ci/requirements-conversion.txt)<br>[packages/onnx/ci/remove-brew-llvm.sh](../../../../sources/tetherto__qvac/packages/onnx/ci/remove-brew-llvm.sh)<br>[packages/ocr-onnx/ci/integration-test.sh](../../../../sources/tetherto__qvac/packages/ocr-onnx/ci/integration-test.sh)<br>[packages/ocr-onnx/ci/remove-brew-llvm.sh](../../../../sources/tetherto__qvac/packages/ocr-onnx/ci/remove-brew-llvm.sh) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 18 | [SECURITY.md](../../../../sources/tetherto__qvac/SECURITY.md)<br>[packages/vla-ggml/sim/qvac_http_policy.py](../../../../sources/tetherto__qvac/packages/vla-ggml/sim/qvac_http_policy.py)<br>[packages/sdk/test/unit/path-security.test.ts](../../../../sources/tetherto__qvac/packages/sdk/test/unit/path-security.test.ts)<br>[packages/sdk/test/bare/path-security.test.ts](../../../../sources/tetherto__qvac/packages/sdk/test/bare/path-security.test.ts)<br>[packages/sdk/server/utils/path-security.ts](../../../../sources/tetherto__qvac/packages/sdk/server/utils/path-security.ts)<br>[packages/sdk/scripts/run-security-tests.ts](../../../../sources/tetherto__qvac/packages/sdk/scripts/run-security-tests.ts) |
| Agent instructions | 26 | [CLAUDE.md](../../../../sources/tetherto__qvac/CLAUDE.md)<br>[.cursor/rules/file-formatting.mdc](../../../../sources/tetherto__qvac/.cursor/rules/file-formatting.mdc)<br>[.cursor/rules/qip-triage.mdc](../../../../sources/tetherto__qvac/.cursor/rules/qip-triage.mdc)<br>[.cursor/rules/website/main.mdc](../../../../sources/tetherto__qvac/.cursor/rules/website/main.mdc)<br>[.cursor/rules/sdk/commit-and-pr-format.mdc](../../../../sources/tetherto__qvac/.cursor/rules/sdk/commit-and-pr-format.mdc)<br>[.cursor/rules/sdk/docs-freshness.mdc](../../../../sources/tetherto__qvac/.cursor/rules/sdk/docs-freshness.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `plugins/opencode/src/index.ts`, `packages/vla-ggml/sim/server/server.js`, `packages/tts-onnx/benchmarks/server/src/server.js`.
2. Trace execution through entrypoints: `plugins/opencode/src/index.ts`, `packages/vla-ggml/sim/server/server.js`, `packages/tts-onnx/benchmarks/server/src/server.js`.
3. Map agent/tool runtime through: `packages/sdk/utils/tool-helpers.ts`, `packages/sdk/test/unit/context-overflow.test.ts`, `packages/sdk/test/unit/tool-parser.test.ts`.
4. Inspect retrieval/memory/indexing through: `plugins/opencode/src/index.ts`, `packages/vla-ggml/index.d.ts`, `packages/vla-ggml/index.js`.
5. Verify behavior through test/eval files: `scripts/test-utils/performance-reporter.js`, `scripts/test-utils/quality-metrics.js`, `scripts/test-utils/translation-quality.js`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 QVAC Local AI SDK and libraries for building private, cross platform, peer to peer AI applications. Run LLMs, speech to . 핵심 구조 신호는 TypeScript, README.md, CLAUDE.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
