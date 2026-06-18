# your-papa/obsidian-Smart2Brain 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

An Obsidian plugin to interact with your privacy focused AI-Assistant making your second brain even smarter!

## 요약

- 조사 단위: `sources/your-papa__obsidian-Smart2Brain` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 371 files, 67 directories, depth score 103, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/main.ts이고, 의존성 단서는 openai, anthropic, mcp, langchain, langgraph, next, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | your-papa/obsidian-Smart2Brain |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | TypeScript |
| Stars | 1130 |
| Forks | 96 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/your-papa__obsidian-Smart2Brain](../../../../sources/your-papa__obsidian-Smart2Brain) |
| 기존 보고서 | [reports/global-trending/repositories/your-papa__obsidian-Smart2Brain.md](../../../global-trending/repositories/your-papa__obsidian-Smart2Brain.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 371 / 67 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, docs, integration, src, test |
| 상위 확장자 | .ts: 212, .svelte: 107, .md: 22, .json: 13, .yml: 5, .css: 3, (none): 3, .js: 2, .lock: 2, .jsonc: 1, .nix: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 53 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| integration | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | vite build --mode development --watch |
| serve-dev | package.json | build | vite build --mode production |
| quality | package.json | check | svelte-check --tsconfig ./tsconfig.json |
| quality | package.json | format | biome format --write ./src |
| quality | package.json | lint | biome lint --write --unsafe ./src |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| test | package.json | test:integration | vitest run --config vitest.integration.config.ts |
| test | package.json | setup-vault | mkdir -p 'integration/Smart2Brain Test Vault/.obsidian/plugins/smart-second-brain' && cd 'integration/Smart2Brain Test Vault/.obsidian/plugins/smart-second-brain' && ln -sf ../../../../../build/smart-second-brain/main.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain, langgraph |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | next |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [src/main.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/your-papa__obsidian-Smart2Brain/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/your-papa__obsidian-Smart2Brain/tsconfig.json) | config signal |
| ci | [.github/workflows/logs.yml](../../../../sources/your-papa__obsidian-Smart2Brain/.github/workflows/logs.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/your-papa__obsidian-Smart2Brain/.github/workflows/release.yml) | ci signal |
| eval | [test/setup.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/setup.test.ts) | eval support |
| eval | [test/setup.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/setup.ts) | eval support |
| instruction | [AGENTS.md](../../../../sources/your-papa__obsidian-Smart2Brain/AGENTS.md) | instruction support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/main.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/main.ts) |
| agentRuntime | 53 | [AGENTS.md](../../../../sources/your-papa__obsidian-Smart2Brain/AGENTS.md)<br>[test/agent/Agent.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/agent/Agent.test.ts)<br>[test/agent/AgentManager.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/agent/AgentManager.test.ts)<br>[test/agent/editNote.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/agent/editNote.test.ts)<br>[test/agent/executeJavaScript.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/agent/executeJavaScript.test.ts)<br>[test/agent/listDirectory.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/agent/listDirectory.test.ts)<br>[test/agent/manageNotes.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/agent/manageNotes.test.ts)<br>[test/agent/ObsidianChatManager.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/agent/ObsidianChatManager.test.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 21 | [src/views/smart-graph/graphCache.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/views/smart-graph/graphCache.ts)<br>[src/views/smart-graph/graphDataBuilder.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/views/smart-graph/graphDataBuilder.ts)<br>[src/views/smart-graph/SmartGraphView.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/views/smart-graph/SmartGraphView.ts)<br>[src/views/embed-model-management/EmbedModelManagement.svelte](../../../../sources/your-papa__obsidian-Smart2Brain/src/views/embed-model-management/EmbedModelManagement.svelte)<br>[src/views/embed-model-management/EmbedModelManagement.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/views/embed-model-management/EmbedModelManagement.ts)<br>[src/vectorstore/index.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/vectorstore/index.ts)<br>[src/types/graph.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/types/graph.ts)<br>[src/types/provider/index.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/types/provider/index.ts) |
| spec | 1 | [docs/architecture-overview.md](../../../../sources/your-papa__obsidian-Smart2Brain/docs/architecture-overview.md) |
| eval | 59 | [test/setup.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/setup.test.ts)<br>[test/setup.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/setup.ts)<br>[test/views/graphDataBuilder.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/views/graphDataBuilder.test.ts)<br>[test/vectorstore/MiniSearchService.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/vectorstore/MiniSearchService.test.ts)<br>[test/vectorstore/VectorStoreService.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/vectorstore/VectorStoreService.test.ts)<br>[test/utils/clustering.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/utils/clustering.test.ts)<br>[test/utils/noteIcons.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/utils/noteIcons.test.ts)<br>[test/utils/obsidianDrag.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/utils/obsidianDrag.test.ts) |
| security | 3 | [test/providers/auth-fields.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/providers/auth-fields.test.ts)<br>[test/providers/auth-state.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/providers/auth-state.test.ts)<br>[src/types/provider/auth.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/types/provider/auth.ts) |
| ci | 2 | [.github/workflows/logs.yml](../../../../sources/your-papa__obsidian-Smart2Brain/.github/workflows/logs.yml)<br>[.github/workflows/release.yml](../../../../sources/your-papa__obsidian-Smart2Brain/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/your-papa__obsidian-Smart2Brain/AGENTS.md) |
| docs | 3 | [README.md](../../../../sources/your-papa__obsidian-Smart2Brain/README.md)<br>[integration/README.md](../../../../sources/your-papa__obsidian-Smart2Brain/integration/README.md)<br>[docs/architecture-overview.md](../../../../sources/your-papa__obsidian-Smart2Brain/docs/architecture-overview.md) |
| config | 2 | [package.json](../../../../sources/your-papa__obsidian-Smart2Brain/package.json)<br>[tsconfig.json](../../../../sources/your-papa__obsidian-Smart2Brain/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 59 | [test/setup.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/setup.test.ts)<br>[test/setup.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/setup.ts)<br>[test/views/graphDataBuilder.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/views/graphDataBuilder.test.ts)<br>[test/vectorstore/MiniSearchService.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/vectorstore/MiniSearchService.test.ts)<br>[test/vectorstore/VectorStoreService.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/vectorstore/VectorStoreService.test.ts)<br>[test/utils/clustering.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/utils/clustering.test.ts) |
| CI workflow | 2 | [.github/workflows/logs.yml](../../../../sources/your-papa__obsidian-Smart2Brain/.github/workflows/logs.yml)<br>[.github/workflows/release.yml](../../../../sources/your-papa__obsidian-Smart2Brain/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 3 | [test/providers/auth-fields.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/providers/auth-fields.test.ts)<br>[test/providers/auth-state.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/providers/auth-state.test.ts)<br>[src/types/provider/auth.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/types/provider/auth.ts) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/your-papa__obsidian-Smart2Brain/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/main.ts`, `package.json`, `tsconfig.json`.
2. entrypoint를 따라 실행 흐름 확인: `src/main.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `test/agent/Agent.test.ts`, `test/agent/AgentManager.test.ts`.
4. retrieval/memory/indexing 확인: `src/views/smart-graph/graphCache.ts`, `src/views/smart-graph/graphDataBuilder.ts`, `src/views/smart-graph/SmartGraphView.ts`.
5. test/eval 파일로 동작 검증: `test/setup.test.ts`, `test/setup.ts`, `test/views/graphDataBuilder.test.ts`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 An Obsidian plugin to interact with your privacy focused AI Assistant making your second brain even smarter!. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
