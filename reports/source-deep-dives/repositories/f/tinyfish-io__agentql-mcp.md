# tinyfish-io/agentql-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Model Context Protocol server that integrates AgentQL's data extraction capabilities.

## 요약

- 조사 단위: `sources/tinyfish-io__agentql-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 23 files, 4 directories, depth score 67, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, retrieval/vector path, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | tinyfish-io/agentql-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 174 |
| Forks | 40 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/tinyfish-io__agentql-mcp](../../../../sources/tinyfish-io__agentql-mcp) |
| Existing report | [reports/global-trending/repositories/tinyfish-io__agentql-mcp.md](../../../global-trending/repositories/tinyfish-io__agentql-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 23 / 4 |
| Max observed depth | 3 |
| Top directories | .github, src |
| Top extensions | (none): 7, .json: 6, .yml: 4, .yaml: 3, .js: 1, .md: 1, .ts: 1 |
| Source patterns | cli-first, retrieval/vector path, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 3 |
| .github | ci surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc && node -e "require('fs').chmodSync('dist/index.js', '755')" |
| build | package.json | prepare | npm run build |
| serve-dev | package.json | watch | tsc --watch |
| test | package.json | inspector | npx @modelcontextprotocol/inspector dist/index.js |
| quality | package.json | lint | eslint src |
| quality | package.json | lint:fix | npm run lint -- --fix |
| quality | package.json | format | prettier --write src |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | check-trufflehog | make check-trufflehog |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | setup-pre-commit | make setup-pre-commit |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | init | make init |
| entrypoint | package.json bin | index.js | dist/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
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
| entrypoints | [src/index.ts](../../../../sources/tinyfish-io__agentql-mcp/src/index.ts) | entrypoints signal |
| config | [Makefile](../../../../sources/tinyfish-io__agentql-mcp/Makefile) | config signal |
| config | [package.json](../../../../sources/tinyfish-io__agentql-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/tinyfish-io__agentql-mcp/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/tinyfish-io__agentql-mcp/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/publish.yml](../../../../sources/tinyfish-io__agentql-mcp/.github/workflows/publish.yml) | ci support |
| container | [Dockerfile](../../../../sources/tinyfish-io__agentql-mcp/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/tinyfish-io__agentql-mcp/src/index.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [src/index.ts](../../../../sources/tinyfish-io__agentql-mcp/src/index.ts) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/tinyfish-io__agentql-mcp/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/tinyfish-io__agentql-mcp/.github/workflows/publish.yml)<br>[.github/workflows/secrets-scanner.yml](../../../../sources/tinyfish-io__agentql-mcp/.github/workflows/secrets-scanner.yml)<br>[.github/workflows/vuln-scanner-pr.yml](../../../../sources/tinyfish-io__agentql-mcp/.github/workflows/vuln-scanner-pr.yml) |
| container | 1 | [Dockerfile](../../../../sources/tinyfish-io__agentql-mcp/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/tinyfish-io__agentql-mcp/README.md) |
| config | 3 | [Makefile](../../../../sources/tinyfish-io__agentql-mcp/Makefile)<br>[package.json](../../../../sources/tinyfish-io__agentql-mcp/package.json)<br>[tsconfig.json](../../../../sources/tinyfish-io__agentql-mcp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 4 | [.github/workflows/ci.yml](../../../../sources/tinyfish-io__agentql-mcp/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/tinyfish-io__agentql-mcp/.github/workflows/publish.yml)<br>[.github/workflows/secrets-scanner.yml](../../../../sources/tinyfish-io__agentql-mcp/.github/workflows/secrets-scanner.yml)<br>[.github/workflows/vuln-scanner-pr.yml](../../../../sources/tinyfish-io__agentql-mcp/.github/workflows/vuln-scanner-pr.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/tinyfish-io__agentql-mcp/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | test/eval path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/index.ts`, `Makefile`, `package.json`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Inspect retrieval/memory/indexing through: `src/index.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Model Context Protocol server that integrates AgentQL's data extraction capabilities.. 핵심 구조 신호는 JavaScript, package.json, Dockerfile, Makefile, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
