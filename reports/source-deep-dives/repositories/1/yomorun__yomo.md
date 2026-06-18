# yomorun/yomo Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

🦖 Serverless AI Agent Framework with Geo-distributed Edge AI Infra.

## 요약

- 조사 단위: `sources/yomorun__yomo` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 69 files, 14 directories, depth score 91, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=agent.template.yaml, src/agent_loop.rs, src/tool_api.rs이고, 의존성 단서는 opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | yomorun/yomo |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 1908 |
| Forks | 143 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/yomorun__yomo](../../../../sources/yomorun__yomo) |
| Existing report | [reports/global-trending/repositories/yomorun__yomo.md](../../../global-trending/repositories/yomorun__yomo.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 69 / 14 |
| Max observed depth | 4 |
| Top directories | .github, certs, serverless, src |
| Top extensions | .rs: 53, .pem: 3, .go: 2, .json: 2, .ts: 2, .md: 1, .mod: 1, .sum: 1, .toml: 1, .yaml: 1, .yml: 1, (none): 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 9 |
| .github | ci surface | 1 |
| certs | top-level component | 1 |
| serverless | source boundary | 1 |


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
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [agent.template.yaml](../../../../sources/yomorun__yomo/agent.template.yaml) | agentRuntime signal |
| agentRuntime | [src/agent_loop.rs](../../../../sources/yomorun__yomo/src/agent_loop.rs) | agentRuntime signal |
| agentRuntime | [src/tool_api.rs](../../../../sources/yomorun__yomo/src/tool_api.rs) | agentRuntime signal |
| agentRuntime | [src/tool_invoker.rs](../../../../sources/yomorun__yomo/src/tool_invoker.rs) | agentRuntime signal |
| entrypoints | [src/bin/yomo.rs](../../../../sources/yomorun__yomo/src/bin/yomo.rs) | entrypoints signal |
| entrypoints | [serverless/node/main.ts](../../../../sources/yomorun__yomo/serverless/node/main.ts) | entrypoints signal |
| entrypoints | [serverless/node/src/app.ts](../../../../sources/yomorun__yomo/serverless/node/src/app.ts) | entrypoints signal |
| entrypoints | [serverless/go/main.go](../../../../sources/yomorun__yomo/serverless/go/main.go) | entrypoints signal |
| config | [Cargo.toml](../../../../sources/yomorun__yomo/Cargo.toml) | config signal |
| config | [serverless/node/package.json](../../../../sources/yomorun__yomo/serverless/node/package.json) | config signal |
| config | [serverless/node/tsconfig.json](../../../../sources/yomorun__yomo/serverless/node/tsconfig.json) | config signal |
| config | [serverless/go/go.mod](../../../../sources/yomorun__yomo/serverless/go/go.mod) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [src/bin/yomo.rs](../../../../sources/yomorun__yomo/src/bin/yomo.rs)<br>[serverless/node/main.ts](../../../../sources/yomorun__yomo/serverless/node/main.ts)<br>[serverless/node/src/app.ts](../../../../sources/yomorun__yomo/serverless/node/src/app.ts)<br>[serverless/go/main.go](../../../../sources/yomorun__yomo/serverless/go/main.go)<br>[certs/server.pem](../../../../sources/yomorun__yomo/certs/server.pem) |
| agentRuntime | 5 | [agent.template.yaml](../../../../sources/yomorun__yomo/agent.template.yaml)<br>[src/agent_loop.rs](../../../../sources/yomorun__yomo/src/agent_loop.rs)<br>[src/tool_api.rs](../../../../sources/yomorun__yomo/src/tool_api.rs)<br>[src/tool_invoker.rs](../../../../sources/yomorun__yomo/src/tool_invoker.rs)<br>[src/tool_mgr.rs](../../../../sources/yomorun__yomo/src/tool_mgr.rs) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 1 | [src/trace.rs](../../../../sources/yomorun__yomo/src/trace.rs) |
| security | 2 | [src/auth.rs](../../../../sources/yomorun__yomo/src/auth.rs)<br>[src/http_auth.rs](../../../../sources/yomorun__yomo/src/http_auth.rs) |
| ci | 1 | [.github/workflows/release.yml](../../../../sources/yomorun__yomo/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/yomorun__yomo/README.md) |
| config | 4 | [Cargo.toml](../../../../sources/yomorun__yomo/Cargo.toml)<br>[serverless/node/package.json](../../../../sources/yomorun__yomo/serverless/node/package.json)<br>[serverless/node/tsconfig.json](../../../../sources/yomorun__yomo/serverless/node/tsconfig.json)<br>[serverless/go/go.mod](../../../../sources/yomorun__yomo/serverless/go/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [src/trace.rs](../../../../sources/yomorun__yomo/src/trace.rs) |
| CI workflows | 1 | [.github/workflows/release.yml](../../../../sources/yomorun__yomo/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [src/auth.rs](../../../../sources/yomorun__yomo/src/auth.rs)<br>[src/http_auth.rs](../../../../sources/yomorun__yomo/src/http_auth.rs) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `agent.template.yaml`, `src/agent_loop.rs`, `src/tool_api.rs`.
2. Trace execution through entrypoints: `src/bin/yomo.rs`, `serverless/node/main.ts`, `serverless/node/src/app.ts`.
3. Map agent/tool runtime through: `agent.template.yaml`, `src/agent_loop.rs`, `src/tool_api.rs`.
4. Verify behavior through test/eval files: `src/trace.rs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 🦖 Serverless AI Agent Framework with Geo distributed Edge AI Infra.. 핵심 구조 신호는 Rust, Cargo.toml, README.md, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
