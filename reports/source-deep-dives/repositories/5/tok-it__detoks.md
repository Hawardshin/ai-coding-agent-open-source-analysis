# tok-it/detoks 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

detoks는 LLM 사용 방식을 재설계하여 토큰과 컨텍스트를 최적화하는 CLI 시스템입니다.

## 요약

- 조사 단위: `sources/tok-it__detoks` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 484 files, 98 directories, depth score 105, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/ts/unit/scripts/benchmark-memory-effects.test.ts, tests/ts/unit/core/task-graph/DAGValidator.test.ts, tests/ts/unit/core/task-graph/dataTest_Compact.test.ts이고, 의존성 단서는 llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | tok-it/detoks |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/tok-it__detoks](../../../../sources/tok-it__detoks) |
| 기존 보고서 | [reports/korea-trending/repositories/tok-it__detoks.md](../../../korea-trending/repositories/tok-it__detoks.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 484 / 98 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, .trace, bin, datasets, docs, scripts, src, tests, tmp, video-demo |
| 상위 확장자 | .ts: 299, .json: 85, .md: 59, (none): 26, .mjs: 3, .yml: 3, .js: 2, .sh: 2, .cjs: 1, .example: 1, .jsonl: 1, .lock: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 73 |
| docs | documentation surface | 43 |
| src | source boundary | 28 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| datasets | top-level component | 1 |
| scripts | top-level component | 1 |
| tmp | top-level component | 1 |
| video-demo | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | npx --no-install tsc -p tsconfig.json |
| utility | package.json | postinstall | node scripts/fix-node-pty-perms.cjs |
| build | package.json | prepare | npm run build |
| build | package.json | prepack | npm run build |
| utility | package.json | cli | tsx src/cli/index.ts |
| quality | package.json | typecheck | tsc --noEmit -p tsconfig.json |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:slide20 | vitest run slide20-generation/slide20-generator.test.ts |
| test | package.json | test:slide20:report | tsx slide20-generation/test-runner.ts |
| test | package.json | test:slide20:all | npm run test:slide20 && npm run test:slide20:report |
| utility | package.json | verify:role1 | tsx scripts/verify-role1.ts |
| test | package.json | verify:role1:rows | tsx scripts/verify-role1.ts --file tests/data/row_data.json |
| utility | package.json | benchmark | tsx scripts/benchmark-pipeline.ts |
| utility | package.json | benchmark:memory-effects | tsx scripts/benchmark-memory-effects.ts |
| utility | package.json | benchmark:translate-report | tsx scripts/translate-model-benchmark-report.ts |
| entrypoint | package.json bin | detoks.js | bin/detoks.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [tests/ts/unit/scripts/benchmark-memory-effects.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/scripts/benchmark-memory-effects.test.ts) | retrieval signal |
| retrieval | [tests/ts/unit/core/task-graph/DAGValidator.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/task-graph/DAGValidator.test.ts) | retrieval signal |
| retrieval | [tests/ts/unit/core/task-graph/dataTest_Compact.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/task-graph/dataTest_Compact.test.ts) | retrieval signal |
| retrieval | [tests/ts/unit/core/task-graph/DependencyResolver.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/task-graph/DependencyResolver.test.ts) | retrieval signal |
| entrypoints | [bin/detoks.js](../../../../sources/tok-it__detoks/bin/detoks.js) | entrypoints signal |
| docs | [README.en.md](../../../../sources/tok-it__detoks/README.en.md) | docs signal |
| docs | [README.ko.md](../../../../sources/tok-it__detoks/README.ko.md) | docs signal |
| docs | [README.md](../../../../sources/tok-it__detoks/README.md) | docs signal |
| docs | [video-demo/book-rental-service/README.md](../../../../sources/tok-it__detoks/video-demo/book-rental-service/README.md) | docs signal |
| eval | [test-replace.js](../../../../sources/tok-it__detoks/test-replace.js) | eval signal |
| eval | [tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-deepseek-r1-0528-qwen3-8b.json](../../../../sources/tok-it__detoks/tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-deepseek-r1-0528-qwen3-8b.json) | eval signal |
| eval | [tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-qwen3.5-2b.json](../../../../sources/tok-it__detoks/tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-qwen3.5-2b.json) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [bin/detoks.js](../../../../sources/tok-it__detoks/bin/detoks.js) |
| agentRuntime | 18 | [tests/ts/unit/integrations/subprocess/runner.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/integrations/subprocess/runner.test.ts)<br>[tests/ts/unit/core/rag/workflow-generalizer.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/rag/workflow-generalizer.test.ts)<br>[tests/ts/unit/core/rag/workflow-template-builder.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/rag/workflow-template-builder.test.ts)<br>[tests/ts/unit/core/executor/execute.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/executor/execute.test.ts)<br>[tests/ts/unit/core/context/ContextBudgetCalculator.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/context/ContextBudgetCalculator.test.ts)<br>[src/types/context.ts](../../../../sources/tok-it__detoks/src/types/context.ts)<br>[src/integrations/subprocess/runner.ts](../../../../sources/tok-it__detoks/src/integrations/subprocess/runner.ts)<br>[src/core/rag/workflow-generalizer.ts](../../../../sources/tok-it__detoks/src/core/rag/workflow-generalizer.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 74 | [tests/ts/unit/scripts/benchmark-memory-effects.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/scripts/benchmark-memory-effects.test.ts)<br>[tests/ts/unit/core/task-graph/DAGValidator.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/task-graph/DAGValidator.test.ts)<br>[tests/ts/unit/core/task-graph/dataTest_Compact.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/task-graph/dataTest_Compact.test.ts)<br>[tests/ts/unit/core/task-graph/DependencyResolver.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/task-graph/DependencyResolver.test.ts)<br>[tests/ts/unit/core/task-graph/ParallelClassifier.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/task-graph/ParallelClassifier.test.ts)<br>[tests/ts/unit/core/task-graph/TaskCandidateExtractor.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/task-graph/TaskCandidateExtractor.test.ts)<br>[tests/ts/unit/core/task-graph/TaskGraphProcessor.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/task-graph/TaskGraphProcessor.test.ts)<br>[tests/ts/unit/core/task-graph/TaskSentenceSplitter.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/task-graph/TaskSentenceSplitter.test.ts) |
| spec | 8 | [tests/ts/unit/cli/tui/design/tokens.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/cli/tui/design/tokens.test.ts)<br>[src/cli/tui/design/tokens.ts](../../../../sources/tok-it__detoks/src/cli/tui/design/tokens.ts)<br>[docs/API_SPEC.md](../../../../sources/tok-it__detoks/docs/API_SPEC.md)<br>[docs/ARCHITECTURE.md](../../../../sources/tok-it__detoks/docs/ARCHITECTURE.md)<br>[docs/LLAMA_CPP_SERVER_SPEC.md](../../../../sources/tok-it__detoks/docs/LLAMA_CPP_SERVER_SPEC.md)<br>[docs/ROLE1_PIPELINE_IMPROVEMENT_REQUIREMENTS.md](../../../../sources/tok-it__detoks/docs/ROLE1_PIPELINE_IMPROVEMENT_REQUIREMENTS.md)<br>[docs/related-token/TOKEN_EFFICIENCY_ARCHITECTURE.md](../../../../sources/tok-it__detoks/docs/related-token/TOKEN_EFFICIENCY_ARCHITECTURE.md)<br>[docs/01-architecture/INDEX.md](../../../../sources/tok-it__detoks/docs/01-architecture/INDEX.md) |
| eval | 207 | [test-replace.js](../../../../sources/tok-it__detoks/test-replace.js)<br>[tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-deepseek-r1-0528-qwen3-8b.json](../../../../sources/tok-it__detoks/tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-deepseek-r1-0528-qwen3-8b.json)<br>[tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-qwen3.5-2b.json](../../../../sources/tok-it__detoks/tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-qwen3.5-2b.json)<br>[tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-qwen3.5-4b.json](../../../../sources/tok-it__detoks/tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-qwen3.5-4b.json)<br>[tmp/translate-model-benchmark/2026-05-17T05-35-15-321Z-qwen3.5-2b.json](../../../../sources/tok-it__detoks/tmp/translate-model-benchmark/2026-05-17T05-35-15-321Z-qwen3.5-2b.json)<br>[tests/ts/unit/.gitkeep](../../../../sources/tok-it__detoks/tests/ts/unit/.gitkeep)<br>[tests/ts/unit/smoke.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/smoke.test.ts)<br>[tests/ts/unit/state-context.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/state-context.test.ts) |
| security | 4 | [tests/ts/unit/core/state/session-state-manager-security.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/state/session-state-manager-security.test.ts)<br>[tests/ts/unit/cli/repl-adapter-auth.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/cli/repl-adapter-auth.test.ts)<br>[src/cli/cache/cache-policy.ts](../../../../sources/tok-it__detoks/src/cli/cache/cache-policy.ts)<br>[docs/DOCUMENTATION_POLICY.md](../../../../sources/tok-it__detoks/docs/DOCUMENTATION_POLICY.md) |
| ci | 3 | [.github/workflows/auto-release.yml](../../../../sources/tok-it__detoks/.github/workflows/auto-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/tok-it__detoks/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/tok-it__detoks/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 57 | [README.en.md](../../../../sources/tok-it__detoks/README.en.md)<br>[README.ko.md](../../../../sources/tok-it__detoks/README.ko.md)<br>[README.md](../../../../sources/tok-it__detoks/README.md)<br>[video-demo/book-rental-service/README.md](../../../../sources/tok-it__detoks/video-demo/book-rental-service/README.md)<br>[src/types/README.md](../../../../sources/tok-it__detoks/src/types/README.md)<br>[docs/API_SPEC.md](../../../../sources/tok-it__detoks/docs/API_SPEC.md)<br>[docs/ARCHITECTURE.md](../../../../sources/tok-it__detoks/docs/ARCHITECTURE.md)<br>[docs/CLAUDE_CODE_ADAPTER_PLAN.md](../../../../sources/tok-it__detoks/docs/CLAUDE_CODE_ADAPTER_PLAN.md) |
| config | 3 | [package.json](../../../../sources/tok-it__detoks/package.json)<br>[tsconfig.json](../../../../sources/tok-it__detoks/tsconfig.json)<br>[uv.lock](../../../../sources/tok-it__detoks/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 207 | [test-replace.js](../../../../sources/tok-it__detoks/test-replace.js)<br>[tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-deepseek-r1-0528-qwen3-8b.json](../../../../sources/tok-it__detoks/tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-deepseek-r1-0528-qwen3-8b.json)<br>[tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-qwen3.5-2b.json](../../../../sources/tok-it__detoks/tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-qwen3.5-2b.json)<br>[tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-qwen3.5-4b.json](../../../../sources/tok-it__detoks/tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-qwen3.5-4b.json)<br>[tmp/translate-model-benchmark/2026-05-17T05-35-15-321Z-qwen3.5-2b.json](../../../../sources/tok-it__detoks/tmp/translate-model-benchmark/2026-05-17T05-35-15-321Z-qwen3.5-2b.json)<br>[tests/ts/unit/.gitkeep](../../../../sources/tok-it__detoks/tests/ts/unit/.gitkeep) |
| CI workflow | 3 | [.github/workflows/auto-release.yml](../../../../sources/tok-it__detoks/.github/workflows/auto-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/tok-it__detoks/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/tok-it__detoks/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 4 | [tests/ts/unit/core/state/session-state-manager-security.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/core/state/session-state-manager-security.test.ts)<br>[tests/ts/unit/cli/repl-adapter-auth.test.ts](../../../../sources/tok-it__detoks/tests/ts/unit/cli/repl-adapter-auth.test.ts)<br>[src/cli/cache/cache-policy.ts](../../../../sources/tok-it__detoks/src/cli/cache/cache-policy.ts)<br>[docs/DOCUMENTATION_POLICY.md](../../../../sources/tok-it__detoks/docs/DOCUMENTATION_POLICY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/ts/unit/scripts/benchmark-memory-effects.test.ts`, `tests/ts/unit/core/task-graph/DAGValidator.test.ts`, `tests/ts/unit/core/task-graph/dataTest_Compact.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `bin/detoks.js`.
3. agent/tool runtime 매핑: `tests/ts/unit/integrations/subprocess/runner.test.ts`, `tests/ts/unit/core/rag/workflow-generalizer.test.ts`, `tests/ts/unit/core/rag/workflow-template-builder.test.ts`.
4. retrieval/memory/indexing 확인: `tests/ts/unit/scripts/benchmark-memory-effects.test.ts`, `tests/ts/unit/core/task-graph/DAGValidator.test.ts`, `tests/ts/unit/core/task-graph/dataTest_Compact.test.ts`.
5. test/eval 파일로 동작 검증: `test-replace.js`, `tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-deepseek-r1-0528-qwen3-8b.json`, `tmp/translate-model-benchmark/2026-05-16T06-45-43-237Z-qwen3.5-2b.json`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 detoks는 LLM 사용 방식을 재설계하여 토큰과 컨텍스트를 최적화하는 CLI 시스템입니다.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
