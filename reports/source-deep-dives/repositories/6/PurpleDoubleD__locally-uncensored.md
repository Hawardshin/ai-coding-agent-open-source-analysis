# PurpleDoubleD/locally-uncensored Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local AI desktop app — chat, agent mode, image gen, video gen. Supports Ollama, Gemma 4, Llama, Qwen, OpenAI, Anthropic. Single .exe, no Docker.

## 요약

- 조사 단위: `sources/PurpleDoubleD__locally-uncensored` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 549 files, 56 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src-tauri/src/main.rs, src/App.tsx, src/index.css이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | PurpleDoubleD/locally-uncensored |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | TypeScript |
| Stars | 720 |
| Forks | 101 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/PurpleDoubleD__locally-uncensored](../../../../sources/PurpleDoubleD__locally-uncensored) |
| Existing report | [reports/global-trending/repositories/PurpleDoubleD__locally-uncensored.md](../../../global-trending/repositories/PurpleDoubleD__locally-uncensored.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 549 / 56 |
| Max observed depth | 5 |
| Top directories | .github, docs, logos, public, scripts, src, src-tauri |
| Top extensions | .ts: 294, .tsx: 97, .png: 34, .html: 31, .rs: 23, .json: 12, .md: 7, .yml: 7, .mjs: 6, .svg: 6, .txt: 5, (none): 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 105 |
| docs | documentation surface | 45 |
| .github | ci surface | 1 |
| logos | top-level component | 1 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |
| src-tauri | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | vite |
| serve-dev | package.json | build | vite build |
| quality | package.json | lint | eslint . |
| serve-dev | package.json | preview | vite preview |
| utility | package.json | tauri | tauri |
| serve-dev | package.json | tauri:dev | tauri dev |
| build | package.json | tauri:build | tauri build |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src-tauri/src/main.rs](../../../../sources/PurpleDoubleD__locally-uncensored/src-tauri/src/main.rs) | entrypoints signal |
| entrypoints | [src/App.tsx](../../../../sources/PurpleDoubleD__locally-uncensored/src/App.tsx) | entrypoints signal |
| entrypoints | [src/index.css](../../../../sources/PurpleDoubleD__locally-uncensored/src/index.css) | entrypoints signal |
| entrypoints | [src/main.tsx](../../../../sources/PurpleDoubleD__locally-uncensored/src/main.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/PurpleDoubleD__locally-uncensored/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/PurpleDoubleD__locally-uncensored/tsconfig.json) | config signal |
| config | [src-tauri/Cargo.lock](../../../../sources/PurpleDoubleD__locally-uncensored/src-tauri/Cargo.lock) | config signal |
| config | [src-tauri/Cargo.toml](../../../../sources/PurpleDoubleD__locally-uncensored/src-tauri/Cargo.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/discord-announce.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/discord-announce.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/release.yml) | ci signal |
| eval | [src/types/__tests__/message-types.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/__tests__/message-types.test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [src-tauri/src/main.rs](../../../../sources/PurpleDoubleD__locally-uncensored/src-tauri/src/main.rs)<br>[src/App.tsx](../../../../sources/PurpleDoubleD__locally-uncensored/src/App.tsx)<br>[src/index.css](../../../../sources/PurpleDoubleD__locally-uncensored/src/index.css)<br>[src/main.tsx](../../../../sources/PurpleDoubleD__locally-uncensored/src/main.tsx) |
| agentRuntime | 107 | [src-tauri/src/commands/agent.rs](../../../../sources/PurpleDoubleD__locally-uncensored/src-tauri/src/commands/agent.rs)<br>[src/types/agent-mode.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/agent-mode.ts)<br>[src/types/agent-workflows.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/agent-workflows.ts)<br>[src/types/agent-workspace.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/agent-workspace.ts)<br>[src/types/agents.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/agents.ts)<br>[src/stores/__tests__/memory-tool-result-filter.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/memory-tool-result-filter.test.ts)<br>[src/lib/agent-commands.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/lib/agent-commands.ts)<br>[src/lib/agent-strategy.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/lib/agent-strategy.ts) |
| mcp | 8 | [src/api/tool-registry.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/tool-registry.ts)<br>[src/api/mcp/builtin-tools.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/mcp/builtin-tools.ts)<br>[src/api/mcp/external-client.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/mcp/external-client.ts)<br>[src/api/mcp/index.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/mcp/index.ts)<br>[src/api/mcp/tool-registry.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/mcp/tool-registry.ts)<br>[src/api/mcp/types.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/mcp/types.ts)<br>[src/api/mcp/__tests__/tool-registry-external.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/mcp/__tests__/tool-registry-external.test.ts)<br>[src/api/__tests__/tool-registry.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/api/__tests__/tool-registry.test.ts) |
| retrieval | 20 | [index.html](../../../../sources/PurpleDoubleD__locally-uncensored/index.html)<br>[src/index.css](../../../../sources/PurpleDoubleD__locally-uncensored/src/index.css)<br>[src/types/rag.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/rag.ts)<br>[src/stores/__tests__/memory-tool-result-filter.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/memory-tool-result-filter.test.ts)<br>[src/lib/memory-extraction.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/lib/memory-extraction.ts)<br>[src/lib/memory-retrieval.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/lib/memory-retrieval.ts)<br>[src/lib/__tests__/memory-e2e.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/lib/__tests__/memory-e2e.test.ts)<br>[src/lib/__tests__/memory-extraction.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/lib/__tests__/memory-extraction.test.ts) |
| spec | 0 | not obvious |
| eval | 147 | [src/types/__tests__/message-types.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/__tests__/message-types.test.ts)<br>[src/stores/__tests__/agentStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/agentStore.test.ts)<br>[src/stores/__tests__/agentWorkflowStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/agentWorkflowStore.test.ts)<br>[src/stores/__tests__/benchmarkStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/benchmarkStore.test.ts)<br>[src/stores/__tests__/chatStore-migration.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/chatStore-migration.test.ts)<br>[src/stores/__tests__/chatStore-operations.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/chatStore-operations.test.ts)<br>[src/stores/__tests__/cloudTeaserStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/cloudTeaserStore.test.ts)<br>[src/stores/__tests__/compareStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/compareStore.test.ts) |
| security | 1 | [SECURITY.md](../../../../sources/PurpleDoubleD__locally-uncensored/SECURITY.md) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/ci.yml)<br>[.github/workflows/discord-announce.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/discord-announce.yml)<br>[.github/workflows/release.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 62 | [README.md](../../../../sources/PurpleDoubleD__locally-uncensored/README.md)<br>[docs/404.html](../../../../sources/PurpleDoubleD__locally-uncensored/docs/404.html)<br>[docs/64c8084e74dd0e16c6152f82363537ad.txt](../../../../sources/PurpleDoubleD__locally-uncensored/docs/64c8084e74dd0e16c6152f82363537ad.txt)<br>[docs/CNAME](../../../../sources/PurpleDoubleD__locally-uncensored/docs/CNAME)<br>[docs/demo.gif](../../../../sources/PurpleDoubleD__locally-uncensored/docs/demo.gif)<br>[docs/favicon.png](../../../../sources/PurpleDoubleD__locally-uncensored/docs/favicon.png)<br>[docs/favicon.svg](../../../../sources/PurpleDoubleD__locally-uncensored/docs/favicon.svg)<br>[docs/index.html](../../../../sources/PurpleDoubleD__locally-uncensored/docs/index.html) |
| config | 4 | [package.json](../../../../sources/PurpleDoubleD__locally-uncensored/package.json)<br>[tsconfig.json](../../../../sources/PurpleDoubleD__locally-uncensored/tsconfig.json)<br>[src-tauri/Cargo.lock](../../../../sources/PurpleDoubleD__locally-uncensored/src-tauri/Cargo.lock)<br>[src-tauri/Cargo.toml](../../../../sources/PurpleDoubleD__locally-uncensored/src-tauri/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 147 | [src/types/__tests__/message-types.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/types/__tests__/message-types.test.ts)<br>[src/stores/__tests__/agentStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/agentStore.test.ts)<br>[src/stores/__tests__/agentWorkflowStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/agentWorkflowStore.test.ts)<br>[src/stores/__tests__/benchmarkStore.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/benchmarkStore.test.ts)<br>[src/stores/__tests__/chatStore-migration.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/chatStore-migration.test.ts)<br>[src/stores/__tests__/chatStore-operations.test.ts](../../../../sources/PurpleDoubleD__locally-uncensored/src/stores/__tests__/chatStore-operations.test.ts) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/ci.yml)<br>[.github/workflows/discord-announce.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/discord-announce.yml)<br>[.github/workflows/release.yml](../../../../sources/PurpleDoubleD__locally-uncensored/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/PurpleDoubleD__locally-uncensored/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src-tauri/src/main.rs`, `src/App.tsx`, `src/index.css`.
2. Trace execution through entrypoints: `src-tauri/src/main.rs`, `src/App.tsx`, `src/index.css`.
3. Map agent/tool runtime through: `src-tauri/src/commands/agent.rs`, `src/types/agent-mode.ts`, `src/types/agent-workflows.ts`.
4. Inspect retrieval/memory/indexing through: `index.html`, `src/index.css`, `src/types/rag.ts`.
5. Verify behavior through test/eval files: `src/types/__tests__/message-types.test.ts`, `src/stores/__tests__/agentStore.test.ts`, `src/stores/__tests__/agentWorkflowStore.test.ts`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Local AI desktop app — chat, agent mode, image gen, video gen. Supports Ollama, Gemma 4, Llama, Qwen, OpenAI, Anthropic.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
