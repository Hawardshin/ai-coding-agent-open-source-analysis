# otomata-tech/memento-core Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Memento — structured, sourced, living knowledge substrate for AI agents, via MCP. Typed blocks, propose-validate loop. Apache-2.0. Hosted at mento.cc

## 요약

- 조사 단위: `sources/otomata-tech__memento-core` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 141 files, 24 directories, depth score 109, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=supabase/functions/mcp/index.ts, docs/connect-mcp.md, app/functions/mcp.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | otomata-tech/memento-core |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/otomata-tech__memento-core](../../../../sources/otomata-tech__memento-core) |
| Existing report | [reports/llm-wiki/repositories/otomata-tech__memento-core.md](../../../llm-wiki/repositories/otomata-tech__memento-core.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 141 / 24 |
| Max observed depth | 4 |
| Top directories | .github, app, docs, server, supabase |
| Top extensions | .ts: 52, .vue: 20, .sql: 19, .json: 17, .md: 6, .png: 6, (none): 6, .webp: 5, .css: 2, .example: 2, .html: 1, .ico: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 7 |
| server | source boundary | 5 |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| supabase | top-level component | 1 |


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
| mcp | [supabase/functions/mcp/index.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/mcp/index.ts) | mcp signal |
| mcp | [docs/connect-mcp.md](../../../../sources/otomata-tech__memento-core/docs/connect-mcp.md) | mcp signal |
| mcp | [app/functions/mcp.ts](../../../../sources/otomata-tech__memento-core/app/functions/mcp.ts) | mcp signal |
| agentRuntime | [supabase/functions/_shared/context.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/_shared/context.ts) | agentRuntime signal |
| entrypoints | [app/src/App.vue](../../../../sources/otomata-tech__memento-core/app/src/App.vue) | entrypoints signal |
| entrypoints | [app/src/main.ts](../../../../sources/otomata-tech__memento-core/app/src/main.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/otomata-tech__memento-core/CLAUDE.md) | instruction signal |
| config | [server/package.json](../../../../sources/otomata-tech__memento-core/server/package.json) | config signal |
| config | [server/tsconfig.json](../../../../sources/otomata-tech__memento-core/server/tsconfig.json) | config signal |
| config | [app/package.json](../../../../sources/otomata-tech__memento-core/app/package.json) | config signal |
| config | [app/tsconfig.json](../../../../sources/otomata-tech__memento-core/app/tsconfig.json) | config signal |
| ci | [.github/workflows/test.yml](../../../../sources/otomata-tech__memento-core/.github/workflows/test.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [app/src/App.vue](../../../../sources/otomata-tech__memento-core/app/src/App.vue)<br>[app/src/main.ts](../../../../sources/otomata-tech__memento-core/app/src/main.ts) |
| agentRuntime | 1 | [supabase/functions/_shared/context.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/_shared/context.ts) |
| mcp | 3 | [supabase/functions/mcp/index.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/mcp/index.ts)<br>[docs/connect-mcp.md](../../../../sources/otomata-tech__memento-core/docs/connect-mcp.md)<br>[app/functions/mcp.ts](../../../../sources/otomata-tech__memento-core/app/functions/mcp.ts) |
| retrieval | 6 | [supabase/functions/mcp/index.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/mcp/index.ts)<br>[supabase/functions/api/index.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/api/index.ts)<br>[supabase/functions/_shared/graph.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/_shared/graph.ts)<br>[server/drizzle/0001_search_vector.sql](../../../../sources/otomata-tech__memento-core/server/drizzle/0001_search_vector.sql)<br>[docs/specs/knowledge-base.md](../../../../sources/otomata-tech__memento-core/docs/specs/knowledge-base.md)<br>[app/index.html](../../../../sources/otomata-tech__memento-core/app/index.html) |
| spec | 0 | not obvious |
| eval | 2 | [supabase/functions/_shared/onboarding.test.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/_shared/onboarding.test.ts)<br>[.github/workflows/test.yml](../../../../sources/otomata-tech__memento-core/.github/workflows/test.yml) |
| security | 3 | [supabase/functions/_shared/auth.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/_shared/auth.ts)<br>[server/src/seed-auth-local.ts](../../../../sources/otomata-tech__memento-core/server/src/seed-auth-local.ts)<br>[app/src/auth.ts](../../../../sources/otomata-tech__memento-core/app/src/auth.ts) |
| ci | 1 | [.github/workflows/test.yml](../../../../sources/otomata-tech__memento-core/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/otomata-tech__memento-core/CLAUDE.md) |
| docs | 5 | [README.md](../../../../sources/otomata-tech__memento-core/README.md)<br>[docs/access-control.md](../../../../sources/otomata-tech__memento-core/docs/access-control.md)<br>[docs/connect-mcp.md](../../../../sources/otomata-tech__memento-core/docs/connect-mcp.md)<br>[docs/principles.md](../../../../sources/otomata-tech__memento-core/docs/principles.md)<br>[docs/specs/knowledge-base.md](../../../../sources/otomata-tech__memento-core/docs/specs/knowledge-base.md) |
| config | 4 | [server/package.json](../../../../sources/otomata-tech__memento-core/server/package.json)<br>[server/tsconfig.json](../../../../sources/otomata-tech__memento-core/server/tsconfig.json)<br>[app/package.json](../../../../sources/otomata-tech__memento-core/app/package.json)<br>[app/tsconfig.json](../../../../sources/otomata-tech__memento-core/app/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [supabase/functions/_shared/onboarding.test.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/_shared/onboarding.test.ts)<br>[.github/workflows/test.yml](../../../../sources/otomata-tech__memento-core/.github/workflows/test.yml) |
| CI workflows | 1 | [.github/workflows/test.yml](../../../../sources/otomata-tech__memento-core/.github/workflows/test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 3 | [supabase/functions/_shared/auth.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/_shared/auth.ts)<br>[server/src/seed-auth-local.ts](../../../../sources/otomata-tech__memento-core/server/src/seed-auth-local.ts)<br>[app/src/auth.ts](../../../../sources/otomata-tech__memento-core/app/src/auth.ts) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/otomata-tech__memento-core/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `supabase/functions/mcp/index.ts`, `docs/connect-mcp.md`, `app/functions/mcp.ts`.
2. Trace execution through entrypoints: `app/src/App.vue`, `app/src/main.ts`.
3. Map agent/tool runtime through: `supabase/functions/_shared/context.ts`.
4. Inspect retrieval/memory/indexing through: `supabase/functions/mcp/index.ts`, `supabase/functions/api/index.ts`, `supabase/functions/_shared/graph.ts`.
5. Verify behavior through test/eval files: `supabase/functions/_shared/onboarding.test.ts`, `.github/workflows/test.yml`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Memento — structured, sourced, living knowledge substrate for AI agents, via MCP. Typed blocks, propose validate loop. A. 핵심 구조 신호는 TypeScript, README.md, CLAUDE.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
