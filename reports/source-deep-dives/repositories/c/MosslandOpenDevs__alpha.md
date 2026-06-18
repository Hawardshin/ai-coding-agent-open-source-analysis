# MosslandOpenDevs/alpha Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Korean crypto × AI vertical media + community — alpha.moss.land. Channel stance, AI briefs, RAG, 8 AI personas with track records, 12-tool MCP server.

## 요약

- 조사 단위: `sources/MosslandOpenDevs__alpha` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 125 files, 58 directories, depth score 83, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, agent/tool runtime, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 mcp=lib/mcp-server.ts, app/mcp/page.tsx, app/api/mcp/route.ts이고, 의존성 단서는 next, react, 검증/운영 단서는 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | MosslandOpenDevs/alpha |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/MosslandOpenDevs__alpha](../../../../sources/MosslandOpenDevs__alpha) |
| Existing report | [reports/korea-trending/repositories/MosslandOpenDevs__alpha.md](../../../korea-trending/repositories/MosslandOpenDevs__alpha.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 125 / 58 |
| Max observed depth | 6 |
| Top directories | app, components, docs, lib, public, scripts |
| Top extensions | .ts: 63, .tsx: 40, .json: 6, .md: 4, (none): 3, .yaml: 2, .cjs: 1, .css: 1, .example: 1, .html: 1, .ico: 1, .mjs: 1 |
| Source patterns | monorepo/workspace, agent/tool runtime, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 11 |
| lib | source boundary | 3 |
| app | top-level component | 1 |
| components | top-level component | 1 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | next dev -p 6900 |
| build | package.json | build | next build |
| serve-dev | package.json | start | next start -p 6900 |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next, react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [lib/mcp-server.ts](../../../../sources/MosslandOpenDevs__alpha/lib/mcp-server.ts) | mcp signal |
| mcp | [app/mcp/page.tsx](../../../../sources/MosslandOpenDevs__alpha/app/mcp/page.tsx) | mcp signal |
| mcp | [app/api/mcp/route.ts](../../../../sources/MosslandOpenDevs__alpha/app/api/mcp/route.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/MosslandOpenDevs__alpha/AGENTS.md) | agentRuntime signal |
| agentRuntime | [lib/agents.ts](../../../../sources/MosslandOpenDevs__alpha/lib/agents.ts) | agentRuntime signal |
| agentRuntime | [app/agents/page.tsx](../../../../sources/MosslandOpenDevs__alpha/app/agents/page.tsx) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/MosslandOpenDevs__alpha/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/MosslandOpenDevs__alpha/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/MosslandOpenDevs__alpha/pnpm-workspace.yaml) | config signal |
| config | [tsconfig.json](../../../../sources/MosslandOpenDevs__alpha/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 4 | [AGENTS.md](../../../../sources/MosslandOpenDevs__alpha/AGENTS.md)<br>[lib/agents.ts](../../../../sources/MosslandOpenDevs__alpha/lib/agents.ts)<br>[app/agents/page.tsx](../../../../sources/MosslandOpenDevs__alpha/app/agents/page.tsx)<br>`app/agents/[handle]/page.tsx` |
| mcp | 3 | [lib/mcp-server.ts](../../../../sources/MosslandOpenDevs__alpha/lib/mcp-server.ts)<br>[app/mcp/page.tsx](../../../../sources/MosslandOpenDevs__alpha/app/mcp/page.tsx)<br>[app/api/mcp/route.ts](../../../../sources/MosslandOpenDevs__alpha/app/api/mcp/route.ts) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 7 | [scripts/audit-auto.ts](../../../../sources/MosslandOpenDevs__alpha/scripts/audit-auto.ts)<br>[scripts/audit-baseline.ts](../../../../sources/MosslandOpenDevs__alpha/scripts/audit-baseline.ts)<br>[docs/audit-queries.md](../../../../sources/MosslandOpenDevs__alpha/docs/audit-queries.md)<br>[docs/audit-results/2026-05-06-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-06-auto.json)<br>[docs/audit-results/2026-05-06.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-06.json)<br>[docs/audit-results/2026-05-11-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-11-auto.json)<br>[docs/audit-results/2026-05-18-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-18-auto.json) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/MosslandOpenDevs__alpha/AGENTS.md)<br>[CLAUDE.md](../../../../sources/MosslandOpenDevs__alpha/CLAUDE.md) |
| docs | 6 | [README.md](../../../../sources/MosslandOpenDevs__alpha/README.md)<br>[docs/audit-queries.md](../../../../sources/MosslandOpenDevs__alpha/docs/audit-queries.md)<br>[docs/audit-results/2026-05-06-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-06-auto.json)<br>[docs/audit-results/2026-05-06.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-06.json)<br>[docs/audit-results/2026-05-11-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-11-auto.json)<br>[docs/audit-results/2026-05-18-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-18-auto.json) |
| config | 3 | [package.json](../../../../sources/MosslandOpenDevs__alpha/package.json)<br>[pnpm-workspace.yaml](../../../../sources/MosslandOpenDevs__alpha/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/MosslandOpenDevs__alpha/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 7 | [scripts/audit-auto.ts](../../../../sources/MosslandOpenDevs__alpha/scripts/audit-auto.ts)<br>[scripts/audit-baseline.ts](../../../../sources/MosslandOpenDevs__alpha/scripts/audit-baseline.ts)<br>[docs/audit-queries.md](../../../../sources/MosslandOpenDevs__alpha/docs/audit-queries.md)<br>[docs/audit-results/2026-05-06-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-06-auto.json)<br>[docs/audit-results/2026-05-06.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-06.json)<br>[docs/audit-results/2026-05-11-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-11-auto.json) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/MosslandOpenDevs__alpha/AGENTS.md)<br>[CLAUDE.md](../../../../sources/MosslandOpenDevs__alpha/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `lib/mcp-server.ts`, `app/mcp/page.tsx`, `app/api/mcp/route.ts`.
2. Map agent/tool runtime through: `AGENTS.md`, `lib/agents.ts`, `app/agents/page.tsx`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Korean crypto × AI vertical media + community — alpha.moss.land. Channel stance, AI briefs, RAG, 8 AI personas with trac. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
