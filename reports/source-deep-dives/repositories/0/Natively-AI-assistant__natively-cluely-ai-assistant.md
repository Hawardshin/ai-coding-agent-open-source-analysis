# Natively-AI-assistant/natively-cluely-ai-assistant Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Natively — Free open-source AI meeting assistant, interview copilot, and note taker. The best alternative to Cluely, Otter, Granola, Final Round AI, Fireflies, and Interview Coder. Real-time transcription, AI meeting notes, lecture recording, local RAG, BYOK, and stealth mode. Runs locally. No subscriptions. No data breaches.

## 요약

- 조사 단위: `sources/Natively-AI-assistant__natively-cluely-ai-assistant` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,225 files, 129 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json이고, 의존성 단서는 openai, anthropic, react, electron, transformers, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | Natively-AI-assistant/natively-cluely-ai-assistant |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 1491 |
| Forks | 356 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/Natively-AI-assistant__natively-cluely-ai-assistant](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant) |
| Existing report | [reports/global-trending/repositories/Natively-AI-assistant__natively-cluely-ai-assistant.md](../../../global-trending/repositories/Natively-AI-assistant__natively-cluely-ai-assistant.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1225 / 129 |
| Max observed depth | 6 |
| Top directories | .github, assets, docs, electron, native-module, natively-api, natively-browser, premium, renderer, resources, scripts, src, tests, worker-script |
| Top extensions | .mjs: 430, .ts: 247, .md: 100, .woff2: 74, .tsx: 62, .png: 60, .otf: 38, .ttf: 38, .json: 37, .js: 18, .txt: 17, .mts: 15 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 62 |
| docs | documentation surface | 52 |
| src | source boundary | 10 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| electron | top-level component | 1 |
| native-module | top-level component | 1 |
| natively-api | source boundary | 1 |
| natively-browser | top-level component | 1 |
| premium | top-level component | 1 |
| renderer | top-level component | 1 |
| resources | top-level component | 1 |
| scripts | top-level component | 1 |
| worker-script | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | clean | rimraf dist dist-electron |
| serve-dev | package.json | dev | vite |
| serve-dev | package.json | build | npm run clean && tsc && vite build |
| build | package.json | build:electron | node scripts/build-electron.js |
| build | package.json | build:electron:tsc | tsc -p electron/tsconfig.json |
| quality | package.json | typecheck:electron | tsc -p electron/tsconfig.json --noEmit |
| serve-dev | package.json | preview | vite preview |
| build | package.json | postinstall | cross-env SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm rebuild sharp && node scripts/rebuild-native-electron.js && node scripts/download-models.js && node scripts/ensure-sqlite-vec.js && node scripts/patch-electron-plist.js && node |
| build | package.json | rebuild:native | node scripts/rebuild-native-electron.js && node scripts/verify-native-arch.js |
| serve-dev | package.json | electron:dev | npm run build:electron && cross-env NODE_ENV=development electron . |
| build | package.json | electron:build | npm run build:electron && cross-env NODE_ENV=production electron . |
| serve-dev | package.json | app:dev | concurrently "npm run dev -- --port 5180 --strictPort" "wait-on http://localhost:5180 && npm run electron:dev" |
| build | package.json | app:build | npm run build && npm run typecheck:electron && npm run build:electron && cross-env NATIVELY_BUILD_ALL_MAC_ARCHES=1 npm run build:native && node scripts/ensure-sharp-mac-deps.js && electron-builder |
| build | package.json | app:build:signed | npm run build && npm run typecheck:electron && npm run build:electron && cross-env NATIVELY_BUILD_ALL_MAC_ARCHES=1 npm run build:native && node scripts/ensure-sharp-mac-deps.js && electron-builder --config electron-build |
| serve-dev | package.json | watch | tsc -p electron/tsconfig.json --watch |
| serve-dev | package.json | start | npm run app:dev |
| build | package.json | dist | npm run app:build |
| build | package.json | dist:signed | npm run app:build:signed |
| build | package.json | build:native | node scripts/build-native.js |
| test | package.json | test | npm run build:electron && node --test 'electron/services/__tests__/**/*.test.mjs' 'electron/llm/__tests__/**/*.test.mjs' 'electron/llm/codeVerification/__tests__/**/*.test.mjs' 'electron/audio/__tests__/**/*.test.mjs' 'e |
| test | package.json | test:modes | npm run build:electron && node --test electron/services/__tests__/Mode*.test.mjs electron/services/__tests__/ProfileIntelligenceGate.test.mjs electron/services/__tests__/NativelyApiE2E.test.mjs |
| test | package.json | test:modes:no-build | node --test electron/services/__tests__/Mode*.test.mjs electron/services/__tests__/ProfileIntelligenceGate.test.mjs electron/services/__tests__/NativelyApiE2E.test.mjs |
| test | package.json | test:modes:collect-fixtures | RUN_INTERNET_FIXTURE_COLLECTION=1 node --test electron/services/__tests__/ModeFixtureIntegrity.test.mjs |
| test | package.json | test:modes:e2e | RUN_NATIVELY_API_E2E=1 npm run test:modes |
| test | package.json | test:modes:long | node --test electron/services/__tests__/ModeLongSession.test.mjs |
| test | package.json | test:e2e | npx playwright test |
| test | package.json | test:e2e:headed | npx playwright test --headed |
| test | package.json | test:e2e:parity | ELECTRON_E2E=1 ELECTRON_APP_PORT=${ELECTRON_APP_PORT:-5173} npx playwright test tests/e2e/parity-gaps-evidence.spec.ts |
| test | package.json | test:e2e:screen-understanding | npm run build:electron && node natively-api/tests/screen-understanding-live.e2e.mjs |
| build | package.json | bench:screen-understanding | npm run build:electron && node scripts/bench-screen-understanding.mjs |
| utility | package.json | benchmark:profile:dataset | node benchmarks/profile-intelligence/generate_dataset.ts |
| utility | package.json | benchmark:profile | cross-env NODE_NO_WARNINGS=1 node benchmarks/profile-intelligence/run_profile_intelligence_benchmark.ts |
| utility | package.json | benchmark:profile:300 | cross-env NODE_NO_WARNINGS=1 node benchmarks/profile-intelligence/run_profile_intelligence_benchmark.ts --questions=300 --concurrency=1 |
| utility | package.json | benchmark:profile:1000 | cross-env NODE_NO_WARNINGS=1 node benchmarks/profile-intelligence/run_profile_intelligence_benchmark.ts --questions=1000 --concurrency=1 |
| utility | package.json | benchmark:profile:score | cross-env NODE_NO_WARNINGS=1 node benchmarks/profile-intelligence/score_profile_benchmark.ts |
| build | package.json | benchmark:profile:build | npm run build:electron && npm run benchmark:profile && npm run benchmark:profile:score |
| utility | package.json | benchmark:wta | cross-env NODE_NO_WARNINGS=1 node benchmarks/profile-intelligence/run_what_to_answer_benchmark.ts |
| utility | package.json | benchmark:wta:75 | cross-env NODE_NO_WARNINGS=1 node benchmarks/profile-intelligence/run_what_to_answer_benchmark.ts --questions=75 |
| utility | package.json | benchmark:wta:100 | cross-env NODE_NO_WARNINGS=1 node benchmarks/profile-intelligence/run_what_to_answer_benchmark.ts --questions=100 |
| utility | package.json | benchmark:manual-regression | cross-env NODE_NO_WARNINGS=1 BENCHMARK_MODEL=gemini-3.1-flash-lite node benchmarks/profile-intelligence/run_manual_chat_regression.ts |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | react |
| developerSurface | electron |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/.mcp.json) | mcp signal |
| agentRuntime | [tests/intelligence/memory-context/dataset.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/intelligence/memory-context/dataset.mjs) | agentRuntime signal |
| agentRuntime | [tests/intelligence/memory-context/run-verification.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/intelligence/memory-context/run-verification.mjs) | agentRuntime signal |
| agentRuntime | [src/hooks/useResolvedTheme.ts](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/src/hooks/useResolvedTheme.ts) | agentRuntime signal |
| agentRuntime | [src/hooks/useShortcuts.ts](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/src/hooks/useShortcuts.ts) | agentRuntime signal |
| entrypoints | [src/App.tsx](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/src/App.tsx) | entrypoints signal |
| entrypoints | [src/index.css](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/src/index.css) | entrypoints signal |
| entrypoints | [src/main.tsx](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/src/main.tsx) | entrypoints signal |
| entrypoints | [renderer/src/App.css](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/renderer/src/App.css) | entrypoints signal |
| config | [package.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tsconfig.json) | config signal |
| config | [renderer/package.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/renderer/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [src/App.tsx](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/src/App.tsx)<br>[src/index.css](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/src/index.css)<br>[src/main.tsx](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/src/main.tsx)<br>[renderer/src/App.css](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/renderer/src/App.css)<br>[renderer/src/App.test.tsx](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/renderer/src/App.test.tsx)<br>[renderer/src/App.tsx](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/renderer/src/App.tsx)<br>[renderer/src/index.css](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/renderer/src/index.css)<br>[renderer/src/index.tsx](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/renderer/src/index.tsx) |
| agentRuntime | 14 | [tests/intelligence/memory-context/dataset.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/intelligence/memory-context/dataset.mjs)<br>[tests/intelligence/memory-context/run-verification.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/intelligence/memory-context/run-verification.mjs)<br>[src/hooks/useResolvedTheme.ts](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/src/hooks/useResolvedTheme.ts)<br>[src/hooks/useShortcuts.ts](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/src/hooks/useShortcuts.ts)<br>[src/hooks/useStreamBuffer.ts](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/src/hooks/useStreamBuffer.ts)<br>[electron/test/memory-leak-long-session.test.ts](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/electron/test/memory-leak-long-session.test.ts)<br>[electron/services/context/ContextPacket.ts](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/electron/services/context/ContextPacket.ts)<br>[electron/services/context/PromptAssembler.ts](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/electron/services/context/PromptAssembler.ts) |
| mcp | 1 | [.mcp.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/.mcp.json) |
| retrieval | 62 | [index.html](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/index.html)<br>[worker-script/node/index.js](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/worker-script/node/index.js)<br>[tests/intelligence/memory-context/dataset.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/intelligence/memory-context/dataset.mjs)<br>[tests/intelligence/memory-context/run-verification.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/intelligence/memory-context/run-verification.mjs)<br>[src/index.css](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/src/index.css)<br>[src/types/index.tsx](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/src/types/index.tsx)<br>[src/premium/index.tsx](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/src/premium/index.tsx)<br>[renderer/src/index.css](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/renderer/src/index.css) |
| spec | 14 | [ROADMAP.md](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/ROADMAP.md)<br>[tests/fixtures/modes/technical-interview/tech_system_design_notes.html](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/technical-interview/tech_system_design_notes.html)<br>[tests/fixtures/modes/team-meet/team_meet_design_spec.html](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/team-meet/team_meet_design_spec.html)<br>[tests/fixtures/modes/general/general_roadmap.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/general/general_roadmap.json)<br>[tests/fixtures/modes/custom/sales-demo/demo_roadmap.md](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/custom/sales-demo/demo_roadmap.md)<br>[tests/fixtures/modes/custom/code-review/debug_architecture_notes.md](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/custom/code-review/debug_architecture_notes.md)<br>[tests/e2e/basic-smoke.spec.ts](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/e2e/basic-smoke.spec.ts)<br>[tests/e2e/parity-gaps-evidence.spec.ts](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/e2e/parity-gaps-evidence.spec.ts) |
| eval | 494 | [tests/utils/createModeTestFixtures.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/utils/createModeTestFixtures.mjs)<br>[tests/utils/internetFixtureCollector.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/utils/internetFixtureCollector.mjs)<br>[tests/utils/profileIntelligenceSeeder.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/utils/profileIntelligenceSeeder.mjs)<br>[tests/utils/referenceFileFactory.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/utils/referenceFileFactory.mjs)<br>[tests/utils/scenarioRunner.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/utils/scenarioRunner.mjs)<br>[tests/intelligence-fixtures/fixture-set.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/intelligence-fixtures/fixture-set.mjs)<br>[tests/intelligence/memory-context/dataset.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/intelligence/memory-context/dataset.mjs)<br>[tests/intelligence/memory-context/run-verification.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/intelligence/memory-context/run-verification.mjs) |
| security | 19 | [SECURITY.md](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/SECURITY.md)<br>[tests/fixtures/modes/sales/sales_pricing_policy.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/sales/sales_pricing_policy.json)<br>[tests/fixtures/modes/sales/sales_security_faq.html](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/sales/sales_security_faq.html)<br>[tests/fixtures/modes/recruiting/recruiting_compensation_policy.txt](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/recruiting/recruiting_compensation_policy.txt)<br>[tests/fixtures/modes/recruiting/recruiting_hiring_policy.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/recruiting/recruiting_hiring_policy.json)<br>[tests/fixtures/modes/negotiation/neg_refund_policy.html](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/negotiation/neg_refund_policy.html)<br>[tests/fixtures/modes/negotiation/neg_saas_discount_policy.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/negotiation/neg_saas_discount_policy.json)<br>[tests/fixtures/modes/custom/support/support_refund_policy.xml](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/custom/support/support_refund_policy.xml) |
| ci | 3 | [.github/workflows/build-smoke.yml](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/.github/workflows/build-smoke.yml)<br>[.github/workflows/react-doctor.yml](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/.github/workflows/react-doctor.yml)<br>[.github/workflows/release-macos.yml](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/.github/workflows/release-macos.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 70 | [README.md](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/README.md)<br>[tests/intelligence/e2e/fixtures/README.md](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/intelligence/e2e/fixtures/README.md)<br>[natively-browser/README.md](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/natively-browser/README.md)<br>[docs/00-current-server-audit.md](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/docs/00-current-server-audit.md)<br>[docs/00b-pre-migration-review-findings.md](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/docs/00b-pre-migration-review-findings.md)<br>[docs/01-target-stt-relay-architecture.md](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/docs/01-target-stt-relay-architecture.md)<br>[docs/02-stt-core-extraction.md](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/docs/02-stt-core-extraction.md)<br>[docs/03-relay-session-token.md](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/docs/03-relay-session-token.md) |
| config | 10 | [package.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/package.json)<br>[tsconfig.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tsconfig.json)<br>[renderer/package.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/renderer/package.json)<br>[renderer/tsconfig.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/renderer/tsconfig.json)<br>[natively-browser/package.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/natively-browser/package.json)<br>[natively-browser/tsconfig.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/natively-browser/tsconfig.json)<br>[native-module/Cargo.lock](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/native-module/Cargo.lock)<br>[native-module/Cargo.toml](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/native-module/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 494 | [tests/utils/createModeTestFixtures.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/utils/createModeTestFixtures.mjs)<br>[tests/utils/internetFixtureCollector.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/utils/internetFixtureCollector.mjs)<br>[tests/utils/profileIntelligenceSeeder.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/utils/profileIntelligenceSeeder.mjs)<br>[tests/utils/referenceFileFactory.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/utils/referenceFileFactory.mjs)<br>[tests/utils/scenarioRunner.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/utils/scenarioRunner.mjs)<br>[tests/intelligence-fixtures/fixture-set.mjs](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/intelligence-fixtures/fixture-set.mjs) |
| CI workflows | 3 | [.github/workflows/build-smoke.yml](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/.github/workflows/build-smoke.yml)<br>[.github/workflows/react-doctor.yml](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/.github/workflows/react-doctor.yml)<br>[.github/workflows/release-macos.yml](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/.github/workflows/release-macos.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 19 | [SECURITY.md](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/SECURITY.md)<br>[tests/fixtures/modes/sales/sales_pricing_policy.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/sales/sales_pricing_policy.json)<br>[tests/fixtures/modes/sales/sales_security_faq.html](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/sales/sales_security_faq.html)<br>[tests/fixtures/modes/recruiting/recruiting_compensation_policy.txt](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/recruiting/recruiting_compensation_policy.txt)<br>[tests/fixtures/modes/recruiting/recruiting_hiring_policy.json](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/recruiting/recruiting_hiring_policy.json)<br>[tests/fixtures/modes/negotiation/neg_refund_policy.html](../../../../sources/Natively-AI-assistant__natively-cluely-ai-assistant/tests/fixtures/modes/negotiation/neg_refund_policy.html) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json`, `tests/intelligence/memory-context/dataset.mjs`, `tests/intelligence/memory-context/run-verification.mjs`.
2. Trace execution through entrypoints: `src/App.tsx`, `src/index.css`, `src/main.tsx`.
3. Map agent/tool runtime through: `tests/intelligence/memory-context/dataset.mjs`, `tests/intelligence/memory-context/run-verification.mjs`, `src/hooks/useResolvedTheme.ts`.
4. Inspect retrieval/memory/indexing through: `index.html`, `worker-script/node/index.js`, `tests/intelligence/memory-context/dataset.mjs`.
5. Verify behavior through test/eval files: `tests/utils/createModeTestFixtures.mjs`, `tests/utils/internetFixtureCollector.mjs`, `tests/utils/profileIntelligenceSeeder.mjs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Natively — Free open source AI meeting assistant, interview copilot, and note taker. The best alternative to Cluely, Ott. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, openai, anthropic이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
