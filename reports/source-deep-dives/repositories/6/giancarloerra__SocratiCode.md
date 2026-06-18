# giancarloerra/SocratiCode 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Enterprise-grade (40m+ LOC) codebase intelligence, zero-setup, local & private Plugin/Skill/Extension or MCP: hybrid semantic search, polyglot dependency graphs, symbol-level impact analysis & call-flow, interactive HTML viewer, cross-project & branch-aware search, DB/API/infra knowledge. 61% less tokens, 84% fewer calls, 37x faster. Cloud in beta.

## 요약

- 조사 단위: `sources/giancarloerra__SocratiCode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 173 files, 28 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/unit/code-graph-progress.test.ts, tests/unit/embedding-batch-size.test.ts, tests/unit/embedding-config.test.ts이고, 의존성 단서는 openai, modelcontextprotocol, ollama, llama, qdrant, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | giancarloerra/SocratiCode |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | TypeScript |
| Stars | 3002 |
| Forks | 389 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/giancarloerra__SocratiCode](../../../../sources/giancarloerra__SocratiCode) |
| 기존 보고서 | [reports/global-trending/repositories/giancarloerra__SocratiCode.md](../../../global-trending/repositories/giancarloerra__SocratiCode.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 173 / 28 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .claude-plugin, .codex-plugin, .cursor-plugin, .github, agents, extension, hooks, scripts, skills, src, tests |
| 상위 확장자 | .ts: 103, .md: 21, .json: 20, (none): 8, .yml: 7, .js: 4, .mjs: 3, .png: 3, .example: 2, .css: 1, .html: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 66 |
| src | source boundary | 28 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| extension | top-level component | 1 |
| hooks | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc && node scripts/copy-assets.mjs |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | dev | tsx src/index.ts |
| test | package.json | lint | biome check src/ tests/ |
| test | package.json | lint:fix | biome check --write src/ tests/ |
| build | package.json | release | release-it |
| quality | package.json | prepublishOnly | tsc && node scripts/copy-assets.mjs |
| build | package.json | release:dry | release-it --dry-run |
| test | package.json | test | vitest run |
| test | package.json | test:unit | vitest run tests/unit/ |
| test | package.json | test:integration | vitest run tests/integration/ |
| test | package.json | test:e2e | vitest run tests/e2e/ |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| entrypoint | package.json bin | index.js | dist/index.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | qdrant |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [tests/unit/code-graph-progress.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/code-graph-progress.test.ts) | retrieval signal |
| retrieval | [tests/unit/embedding-batch-size.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/embedding-batch-size.test.ts) | retrieval signal |
| retrieval | [tests/unit/embedding-config.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/embedding-config.test.ts) | retrieval signal |
| retrieval | [tests/unit/embedding-provider.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/embedding-provider.test.ts) | retrieval signal |
| entrypoints | [server.json](../../../../sources/giancarloerra__SocratiCode/server.json) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/giancarloerra__SocratiCode/src/index.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/giancarloerra__SocratiCode/README.md) | docs signal |
| docs | [extension/README.md](../../../../sources/giancarloerra__SocratiCode/extension/README.md) | docs signal |
| eval | [tests/unit/config.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/config.test.ts) | eval signal |
| eval | [tests/unit/constants.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/constants.test.ts) | eval signal |
| eval | [tests/unit/context-artifacts-checkpoint.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-artifacts-checkpoint.test.ts) | eval signal |
| config | [package.json](../../../../sources/giancarloerra__SocratiCode/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [server.json](../../../../sources/giancarloerra__SocratiCode/server.json)<br>[src/index.ts](../../../../sources/giancarloerra__SocratiCode/src/index.ts) |
| agentRuntime | 18 | [AGENTS.md](../../../../sources/giancarloerra__SocratiCode/AGENTS.md)<br>[tests/unit/context-artifacts-checkpoint.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-artifacts-checkpoint.test.ts)<br>[tests/unit/context-artifacts.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-artifacts.test.ts)<br>[tests/unit/context-tools.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-tools.test.ts)<br>[tests/integration/context-artifacts.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/integration/context-artifacts.test.ts)<br>[tests/integration/tools.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/integration/tools.test.ts)<br>[src/tools/context-tools.ts](../../../../sources/giancarloerra__SocratiCode/src/tools/context-tools.ts)<br>[src/tools/graph-tools.ts](../../../../sources/giancarloerra__SocratiCode/src/tools/graph-tools.ts) |
| mcp | 2 | [.mcp.json](../../../../sources/giancarloerra__SocratiCode/.mcp.json)<br>[mcp.json](../../../../sources/giancarloerra__SocratiCode/mcp.json) |
| retrieval | 42 | [tests/unit/code-graph-progress.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/code-graph-progress.test.ts)<br>[tests/unit/embedding-batch-size.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/embedding-batch-size.test.ts)<br>[tests/unit/embedding-config.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/embedding-config.test.ts)<br>[tests/unit/embedding-provider.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/embedding-provider.test.ts)<br>[tests/unit/graph-aliases.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/graph-aliases.test.ts)<br>[tests/unit/graph-analysis.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/graph-analysis.test.ts)<br>[tests/unit/graph-discovery.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/graph-discovery.test.ts)<br>[tests/unit/graph-entrypoints.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/graph-entrypoints.test.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 52 | [tests/unit/code-graph-progress.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/code-graph-progress.test.ts)<br>[tests/unit/config.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/config.test.ts)<br>[tests/unit/constants.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/constants.test.ts)<br>[tests/unit/context-artifacts-checkpoint.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-artifacts-checkpoint.test.ts)<br>[tests/unit/context-artifacts.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-artifacts.test.ts)<br>[tests/unit/context-tools.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-tools.test.ts)<br>[tests/unit/docker.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/docker.test.ts)<br>[tests/unit/dynamic-language-loader.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/dynamic-language-loader.test.ts) |
| security | 1 | [SECURITY.md](../../../../sources/giancarloerra__SocratiCode/SECURITY.md) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/giancarloerra__SocratiCode/.github/workflows/ci.yml)<br>[.github/workflows/extension-ci.yml](../../../../sources/giancarloerra__SocratiCode/.github/workflows/extension-ci.yml)<br>[.github/workflows/extension-release.yml](../../../../sources/giancarloerra__SocratiCode/.github/workflows/extension-release.yml) |
| container | 1 | [docker-compose.yml](../../../../sources/giancarloerra__SocratiCode/docker-compose.yml) |
| instruction | 3 | [AGENTS.md](../../../../sources/giancarloerra__SocratiCode/AGENTS.md)<br>[CLAUDE.md](../../../../sources/giancarloerra__SocratiCode/CLAUDE.md)<br>[GEMINI.md](../../../../sources/giancarloerra__SocratiCode/GEMINI.md) |
| docs | 2 | [README.md](../../../../sources/giancarloerra__SocratiCode/README.md)<br>[extension/README.md](../../../../sources/giancarloerra__SocratiCode/extension/README.md) |
| config | 4 | [package.json](../../../../sources/giancarloerra__SocratiCode/package.json)<br>[tsconfig.json](../../../../sources/giancarloerra__SocratiCode/tsconfig.json)<br>[extension/package.json](../../../../sources/giancarloerra__SocratiCode/extension/package.json)<br>[extension/tsconfig.json](../../../../sources/giancarloerra__SocratiCode/extension/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 52 | [tests/unit/code-graph-progress.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/code-graph-progress.test.ts)<br>[tests/unit/config.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/config.test.ts)<br>[tests/unit/constants.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/constants.test.ts)<br>[tests/unit/context-artifacts-checkpoint.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-artifacts-checkpoint.test.ts)<br>[tests/unit/context-artifacts.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-artifacts.test.ts)<br>[tests/unit/context-tools.test.ts](../../../../sources/giancarloerra__SocratiCode/tests/unit/context-tools.test.ts) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/giancarloerra__SocratiCode/.github/workflows/ci.yml)<br>[.github/workflows/extension-ci.yml](../../../../sources/giancarloerra__SocratiCode/.github/workflows/extension-ci.yml)<br>[.github/workflows/extension-release.yml](../../../../sources/giancarloerra__SocratiCode/.github/workflows/extension-release.yml) |
| 컨테이너/배포 | 1 | [docker-compose.yml](../../../../sources/giancarloerra__SocratiCode/docker-compose.yml) |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/giancarloerra__SocratiCode/SECURITY.md) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/giancarloerra__SocratiCode/AGENTS.md)<br>[CLAUDE.md](../../../../sources/giancarloerra__SocratiCode/CLAUDE.md)<br>[GEMINI.md](../../../../sources/giancarloerra__SocratiCode/GEMINI.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/unit/code-graph-progress.test.ts`, `tests/unit/embedding-batch-size.test.ts`, `tests/unit/embedding-config.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/unit/context-artifacts-checkpoint.test.ts`, `tests/unit/context-artifacts.test.ts`.
4. retrieval/memory/indexing 확인: `tests/unit/code-graph-progress.test.ts`, `tests/unit/embedding-batch-size.test.ts`, `tests/unit/embedding-config.test.ts`.
5. test/eval 파일로 동작 검증: `tests/unit/code-graph-progress.test.ts`, `tests/unit/config.test.ts`, `tests/unit/constants.test.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Enterprise grade 40m+ LOC codebase intelligence, zero setup, local & private Plugin/Skill/Extension or MCP hybrid semant. 핵심 구조 신호는 TypeScript, package.json, docker-compose.yml, README.md, AGENTS.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
