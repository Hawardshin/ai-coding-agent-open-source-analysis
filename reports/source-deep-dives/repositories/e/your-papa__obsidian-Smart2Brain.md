# your-papa/obsidian-Smart2Brain Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

An Obsidian plugin to interact with your privacy focused AI-Assistant making your second brain even smarter!

## 요약

- 조사 단위: `sources/your-papa__obsidian-Smart2Brain` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 371 files, 67 directories, depth score 109, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/main.ts이고, 의존성 단서는 openai, anthropic, mcp, langchain, langgraph, next, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | your-papa/obsidian-Smart2Brain |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | TypeScript |
| Stars | 1130 |
| Forks | 96 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/your-papa__obsidian-Smart2Brain](../../../../sources/your-papa__obsidian-Smart2Brain) |
| Existing report | [reports/global-trending/repositories/your-papa__obsidian-Smart2Brain.md](../../../global-trending/repositories/your-papa__obsidian-Smart2Brain.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 371 / 67 |
| Max observed depth | 6 |
| Top directories | .github, docs, integration, src, test |
| Top extensions | .ts: 212, .svelte: 107, .md: 22, .json: 13, .yml: 5, .css: 3, (none): 3, .js: 2, .lock: 2, .jsonc: 1, .nix: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 53 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| integration | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
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


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain, langgraph |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | next |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src/main.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/your-papa__obsidian-Smart2Brain/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/your-papa__obsidian-Smart2Brain/tsconfig.json) | config signal |
| ci | [.github/workflows/logs.yml](../../../../sources/your-papa__obsidian-Smart2Brain/.github/workflows/logs.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/your-papa__obsidian-Smart2Brain/.github/workflows/release.yml) | ci signal |
| eval | [test/setup.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/setup.test.ts) | eval support |
| eval | [test/setup.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/setup.ts) | eval support |
| instruction | [AGENTS.md](../../../../sources/your-papa__obsidian-Smart2Brain/AGENTS.md) | instruction support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/main.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/main.ts) |
| agentRuntime | 53 | [AGENTS.md](../../../../sources/your-papa__obsidian-Smart2Brain/AGENTS.md)<br>[test/agent/Agent.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/agent/Agent.test.ts)<br>[test/agent/AgentManager.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/agent/AgentManager.test.ts)<br>[test/agent/editNote.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/agent/editNote.test.ts)<br>[test/agent/executeJavaScript.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/agent/executeJavaScript.test.ts)<br>[test/agent/listDirectory.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/agent/listDirectory.test.ts)<br>[test/agent/manageNotes.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/agent/manageNotes.test.ts)<br>[test/agent/ObsidianChatManager.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/agent/ObsidianChatManager.test.ts) |
| mcp | 0 | not obvious |
| retrieval | 21 | [src/views/smart-graph/graphCache.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/views/smart-graph/graphCache.ts)<br>[src/views/smart-graph/graphDataBuilder.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/views/smart-graph/graphDataBuilder.ts)<br>[src/views/smart-graph/SmartGraphView.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/views/smart-graph/SmartGraphView.ts)<br>[src/views/embed-model-management/EmbedModelManagement.svelte](../../../../sources/your-papa__obsidian-Smart2Brain/src/views/embed-model-management/EmbedModelManagement.svelte)<br>[src/views/embed-model-management/EmbedModelManagement.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/views/embed-model-management/EmbedModelManagement.ts)<br>[src/vectorstore/index.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/vectorstore/index.ts)<br>[src/types/graph.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/types/graph.ts)<br>[src/types/provider/index.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/types/provider/index.ts) |
| spec | 1 | [docs/architecture-overview.md](../../../../sources/your-papa__obsidian-Smart2Brain/docs/architecture-overview.md) |
| eval | 59 | [test/setup.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/setup.test.ts)<br>[test/setup.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/setup.ts)<br>[test/views/graphDataBuilder.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/views/graphDataBuilder.test.ts)<br>[test/vectorstore/MiniSearchService.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/vectorstore/MiniSearchService.test.ts)<br>[test/vectorstore/VectorStoreService.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/vectorstore/VectorStoreService.test.ts)<br>[test/utils/clustering.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/utils/clustering.test.ts)<br>[test/utils/noteIcons.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/utils/noteIcons.test.ts)<br>[test/utils/obsidianDrag.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/utils/obsidianDrag.test.ts) |
| security | 3 | [test/providers/auth-fields.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/providers/auth-fields.test.ts)<br>[test/providers/auth-state.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/providers/auth-state.test.ts)<br>[src/types/provider/auth.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/types/provider/auth.ts) |
| ci | 2 | [.github/workflows/logs.yml](../../../../sources/your-papa__obsidian-Smart2Brain/.github/workflows/logs.yml)<br>[.github/workflows/release.yml](../../../../sources/your-papa__obsidian-Smart2Brain/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/your-papa__obsidian-Smart2Brain/AGENTS.md) |
| docs | 3 | [README.md](../../../../sources/your-papa__obsidian-Smart2Brain/README.md)<br>[integration/README.md](../../../../sources/your-papa__obsidian-Smart2Brain/integration/README.md)<br>[docs/architecture-overview.md](../../../../sources/your-papa__obsidian-Smart2Brain/docs/architecture-overview.md) |
| config | 2 | [package.json](../../../../sources/your-papa__obsidian-Smart2Brain/package.json)<br>[tsconfig.json](../../../../sources/your-papa__obsidian-Smart2Brain/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 59 | [test/setup.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/setup.test.ts)<br>[test/setup.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/setup.ts)<br>[test/views/graphDataBuilder.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/views/graphDataBuilder.test.ts)<br>[test/vectorstore/MiniSearchService.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/vectorstore/MiniSearchService.test.ts)<br>[test/vectorstore/VectorStoreService.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/vectorstore/VectorStoreService.test.ts)<br>[test/utils/clustering.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/utils/clustering.test.ts) |
| CI workflows | 2 | [.github/workflows/logs.yml](../../../../sources/your-papa__obsidian-Smart2Brain/.github/workflows/logs.yml)<br>[.github/workflows/release.yml](../../../../sources/your-papa__obsidian-Smart2Brain/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 3 | [test/providers/auth-fields.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/providers/auth-fields.test.ts)<br>[test/providers/auth-state.test.ts](../../../../sources/your-papa__obsidian-Smart2Brain/test/providers/auth-state.test.ts)<br>[src/types/provider/auth.ts](../../../../sources/your-papa__obsidian-Smart2Brain/src/types/provider/auth.ts) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/your-papa__obsidian-Smart2Brain/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/main.ts`, `package.json`, `tsconfig.json`.
2. Trace execution through entrypoints: `src/main.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `test/agent/Agent.test.ts`, `test/agent/AgentManager.test.ts`.
4. Inspect retrieval/memory/indexing through: `src/views/smart-graph/graphCache.ts`, `src/views/smart-graph/graphDataBuilder.ts`, `src/views/smart-graph/SmartGraphView.ts`.
5. Verify behavior through test/eval files: `test/setup.test.ts`, `test/setup.ts`, `test/views/graphDataBuilder.test.ts`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 An Obsidian plugin to interact with your privacy focused AI Assistant making your second brain even smarter!. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, openai이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
