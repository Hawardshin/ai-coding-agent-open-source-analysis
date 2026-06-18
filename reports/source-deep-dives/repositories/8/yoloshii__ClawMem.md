# yoloshii/ClawMem Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

On-device memory layer for AI agents. Claude Code, Hermes and OpenClaw. Hooks + MCP server + hybrid RAG search.

## 요약

- 조사 단위: `sources/yoloshii__ClawMem` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 186 files, 20 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/mcp.ts, docs/reference/mcp-tools.md, docs/guides/setup-mcp.md이고, 의존성 단서는 modelcontextprotocol, llama, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | yoloshii/ClawMem |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 185 |
| Forks | 27 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/yoloshii__ClawMem](../../../../sources/yoloshii__ClawMem) |
| Existing report | [reports/global-trending/repositories/yoloshii__ClawMem.md](../../../global-trending/repositories/yoloshii__ClawMem.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 186 / 20 |
| Max observed depth | 3 |
| Top directories | .github, agents, bin, docs, scripts, src, tests |
| Top extensions | .ts: 134, .md: 33, .json: 4, .yml: 3, (none): 3, .jpg: 2, .example: 1, .excalidraw: 1, .html: 1, .lock: 1, .png: 1, .py: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 57 |
| docs | documentation surface | 36 |
| src | source boundary | 21 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| bin | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | bun test |
| serve-dev | package.json | dev | bun src/clawmem.ts |
| test | package.json | inspector | npx @modelcontextprotocol/inspector bun src/clawmem.ts mcp |
| entrypoint | package.json bin | clawmem | ./bin/clawmem |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/mcp.ts](../../../../sources/yoloshii__ClawMem/src/mcp.ts) | mcp signal |
| mcp | [docs/reference/mcp-tools.md](../../../../sources/yoloshii__ClawMem/docs/reference/mcp-tools.md) | mcp signal |
| mcp | [docs/guides/setup-mcp.md](../../../../sources/yoloshii__ClawMem/docs/guides/setup-mcp.md) | mcp signal |
| mcp | [docs/concepts/hooks-vs-mcp.md](../../../../sources/yoloshii__ClawMem/docs/concepts/hooks-vs-mcp.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/yoloshii__ClawMem/AGENTS.md) | agentRuntime signal |
| agentRuntime | [SKILL.md](../../../../sources/yoloshii__ClawMem/SKILL.md) | agentRuntime signal |
| agentRuntime | [tests/unit/context-surfacing-6a.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/context-surfacing-6a.test.ts) | agentRuntime signal |
| agentRuntime | [tests/unit/context-surfacing-6b.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/context-surfacing-6b.test.ts) | agentRuntime signal |
| entrypoints | [tests/unit/server.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/server.test.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/yoloshii__ClawMem/src/server.ts) | entrypoints signal |
| entrypoints | [bin/clawmem](../../../../sources/yoloshii__ClawMem/bin/clawmem) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/yoloshii__ClawMem/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [tests/unit/server.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/server.test.ts)<br>[src/server.ts](../../../../sources/yoloshii__ClawMem/src/server.ts)<br>[bin/clawmem](../../../../sources/yoloshii__ClawMem/bin/clawmem) |
| agentRuntime | 27 | [AGENTS.md](../../../../sources/yoloshii__ClawMem/AGENTS.md)<br>[SKILL.md](../../../../sources/yoloshii__ClawMem/SKILL.md)<br>[tests/unit/context-surfacing-6a.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/context-surfacing-6a.test.ts)<br>[tests/unit/context-surfacing-6b.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/context-surfacing-6b.test.ts)<br>[tests/unit/hooks-io.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/hooks-io.test.ts)<br>[tests/unit/memory.scoring.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/memory.scoring.test.ts)<br>[tests/unit/memory.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/memory.test.ts)<br>[tests/integration/context-surfacing-multiturn.integration.test.ts](../../../../sources/yoloshii__ClawMem/tests/integration/context-surfacing-multiturn.integration.test.ts) |
| mcp | 4 | [src/mcp.ts](../../../../sources/yoloshii__ClawMem/src/mcp.ts)<br>[docs/reference/mcp-tools.md](../../../../sources/yoloshii__ClawMem/docs/reference/mcp-tools.md)<br>[docs/guides/setup-mcp.md](../../../../sources/yoloshii__ClawMem/docs/guides/setup-mcp.md)<br>[docs/concepts/hooks-vs-mcp.md](../../../../sources/yoloshii__ClawMem/docs/concepts/hooks-vs-mcp.md) |
| retrieval | 10 | [tests/unit/deductive-and-embed-state.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/deductive-and-embed-state.test.ts)<br>[tests/unit/memory.scoring.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/memory.scoring.test.ts)<br>[tests/unit/memory.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/memory.test.ts)<br>[tests/e2e/index-search-score.test.ts](../../../../sources/yoloshii__ClawMem/tests/e2e/index-search-score.test.ts)<br>[src/graph-traversal.ts](../../../../sources/yoloshii__ClawMem/src/graph-traversal.ts)<br>[src/memory.ts](../../../../sources/yoloshii__ClawMem/src/memory.ts)<br>[src/retrieval-gate.ts](../../../../sources/yoloshii__ClawMem/src/retrieval-gate.ts)<br>[src/openclaw/index.ts](../../../../sources/yoloshii__ClawMem/src/openclaw/index.ts) |
| spec | 3 | [docs/clawmem-architecture.excalidraw](../../../../sources/yoloshii__ClawMem/docs/clawmem-architecture.excalidraw)<br>[docs/clawmem-architecture.png](../../../../sources/yoloshii__ClawMem/docs/clawmem-architecture.png)<br>[docs/concepts/architecture.md](../../../../sources/yoloshii__ClawMem/docs/concepts/architecture.md) |
| eval | 76 | [tests/smoke.test.ts](../../../../sources/yoloshii__ClawMem/tests/smoke.test.ts)<br>[tests/unit/amem.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/amem.test.ts)<br>[tests/unit/config.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/config.test.ts)<br>[tests/unit/consolidation-lease.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/consolidation-lease.test.ts)<br>[tests/unit/context-surfacing-6a.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/context-surfacing-6a.test.ts)<br>[tests/unit/context-surfacing-6b.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/context-surfacing-6b.test.ts)<br>[tests/unit/contradict-taxonomy.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/contradict-taxonomy.test.ts)<br>[tests/unit/conversation-synthesis.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/conversation-synthesis.test.ts) |
| security | 2 | [SECURITY.md](../../../../sources/yoloshii__ClawMem/SECURITY.md)<br>[tests/integration/consolidation-name-guard.integration.test.ts](../../../../sources/yoloshii__ClawMem/tests/integration/consolidation-name-guard.integration.test.ts) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/yoloshii__ClawMem/AGENTS.md)<br>[CLAUDE.md](../../../../sources/yoloshii__ClawMem/CLAUDE.md) |
| docs | 27 | [README.md](../../../../sources/yoloshii__ClawMem/README.md)<br>[docs/clawmem_hero.jpg](../../../../sources/yoloshii__ClawMem/docs/clawmem_hero.jpg)<br>[docs/clawmem-architecture.excalidraw](../../../../sources/yoloshii__ClawMem/docs/clawmem-architecture.excalidraw)<br>[docs/clawmem-architecture.png](../../../../sources/yoloshii__ClawMem/docs/clawmem-architecture.png)<br>[docs/contributing.md](../../../../sources/yoloshii__ClawMem/docs/contributing.md)<br>[docs/introduction.md](../../../../sources/yoloshii__ClawMem/docs/introduction.md)<br>[docs/quickstart.md](../../../../sources/yoloshii__ClawMem/docs/quickstart.md)<br>[docs/troubleshooting.md](../../../../sources/yoloshii__ClawMem/docs/troubleshooting.md) |
| config | 3 | [package.json](../../../../sources/yoloshii__ClawMem/package.json)<br>[tsconfig.json](../../../../sources/yoloshii__ClawMem/tsconfig.json)<br>[src/openclaw/package.json](../../../../sources/yoloshii__ClawMem/src/openclaw/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 76 | [tests/smoke.test.ts](../../../../sources/yoloshii__ClawMem/tests/smoke.test.ts)<br>[tests/unit/amem.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/amem.test.ts)<br>[tests/unit/config.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/config.test.ts)<br>[tests/unit/consolidation-lease.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/consolidation-lease.test.ts)<br>[tests/unit/context-surfacing-6a.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/context-surfacing-6a.test.ts)<br>[tests/unit/context-surfacing-6b.test.ts](../../../../sources/yoloshii__ClawMem/tests/unit/context-surfacing-6b.test.ts) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [SECURITY.md](../../../../sources/yoloshii__ClawMem/SECURITY.md)<br>[tests/integration/consolidation-name-guard.integration.test.ts](../../../../sources/yoloshii__ClawMem/tests/integration/consolidation-name-guard.integration.test.ts) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/yoloshii__ClawMem/AGENTS.md)<br>[CLAUDE.md](../../../../sources/yoloshii__ClawMem/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/mcp.ts`, `docs/reference/mcp-tools.md`, `docs/guides/setup-mcp.md`.
2. Trace execution through entrypoints: `tests/unit/server.test.ts`, `src/server.ts`, `bin/clawmem`.
3. Map agent/tool runtime through: `AGENTS.md`, `SKILL.md`, `tests/unit/context-surfacing-6a.test.ts`.
4. Inspect retrieval/memory/indexing through: `tests/unit/deductive-and-embed-state.test.ts`, `tests/unit/memory.scoring.test.ts`, `tests/unit/memory.test.ts`.
5. Verify behavior through test/eval files: `tests/smoke.test.ts`, `tests/unit/amem.test.ts`, `tests/unit/config.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 On device memory layer for AI agents. Claude Code, Hermes and OpenClaw. Hooks + MCP server + hybrid RAG search.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
