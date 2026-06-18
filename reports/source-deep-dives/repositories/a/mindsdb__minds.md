# mindsdb/minds Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

General-purpose AI designed for knowledge workers — creators, strategists, and operators — and individuals seeking AI systems they can truly control to help them get work done, with full flexibility to extend and deploy anywhere (VPC, on-prem, or cloud).

## 요약

- 조사 단위: `sources/mindsdb__minds` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 34 files, 14 directories, depth score 68, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 retrieval/vector path, security/policy surface, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 instruction=CLAUDE.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | mindsdb/minds |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Makefile |
| Stars | 39316 |
| Forks | 6207 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/mindsdb__minds](../../../../sources/mindsdb__minds) |
| Existing report | [reports/global-trending/repositories/mindsdb__minds.md](../../../global-trending/repositories/mindsdb__minds.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 34 / 14 |
| Max observed depth | 4 |
| Top directories | .devcontainer, .github, assets, backend, docker, docs, frontend |
| Top extensions | .md: 8, (none): 5, .html: 4, .yaml: 4, .yml: 4, .json: 3, .png: 3, .dockerfile: 2, .conf: 1 |
| Source patterns | retrieval/vector path, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 10 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| backend | top-level component | 1 |
| docker | documentation surface | 1 |
| frontend | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | setup | make setup |
| serve-dev | Makefile | dev | make dev |
| serve-dev | Makefile | dev-web | make dev-web |
| build | Makefile | build | make build |
| build | Makefile | dist-mac | make dist-mac |
| build | Makefile | dist-win | make dist-win |
| build | Makefile | docker-build | make docker-build |
| container | Makefile | docker-up | make docker-up |
| container | Makefile | docker-down | make docker-down |
| utility | Makefile | flush | make flush |


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
| instruction | [CLAUDE.md](../../../../sources/mindsdb__minds/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/mindsdb__minds/Makefile) | config signal |
| ci | [.github/workflows/codeql.yml](../../../../sources/mindsdb__minds/.github/workflows/codeql.yml) | ci support |
| ci | [.github/workflows/deploy_docs.yml](../../../../sources/mindsdb__minds/.github/workflows/deploy_docs.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/mindsdb__minds/docker-compose.yml) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [docs/index.html](../../../../sources/mindsdb__minds/docs/index.html) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 1 | [SECURITY.md](../../../../sources/mindsdb__minds/SECURITY.md) |
| ci | 2 | [.github/workflows/codeql.yml](../../../../sources/mindsdb__minds/.github/workflows/codeql.yml)<br>[.github/workflows/deploy_docs.yml](../../../../sources/mindsdb__minds/.github/workflows/deploy_docs.yml) |
| container | 1 | [docker-compose.yml](../../../../sources/mindsdb__minds/docker-compose.yml) |
| instruction | 1 | [CLAUDE.md](../../../../sources/mindsdb__minds/CLAUDE.md) |
| docs | 9 | [README.md](../../../../sources/mindsdb__minds/README.md)<br>[docs/api.html](../../../../sources/mindsdb__minds/docs/api.html)<br>[docs/docs.json](../../../../sources/mindsdb__minds/docs/docs.json)<br>[docs/favicon_old.png](../../../../sources/mindsdb__minds/docs/favicon_old.png)<br>[docs/favicon-dark.png](../../../../sources/mindsdb__minds/docs/favicon-dark.png)<br>[docs/favicon.png](../../../../sources/mindsdb__minds/docs/favicon.png)<br>[docs/index.html](../../../../sources/mindsdb__minds/docs/index.html)<br>[docs/setup.html](../../../../sources/mindsdb__minds/docs/setup.html) |
| config | 1 | [Makefile](../../../../sources/mindsdb__minds/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 2 | [.github/workflows/codeql.yml](../../../../sources/mindsdb__minds/.github/workflows/codeql.yml)<br>[.github/workflows/deploy_docs.yml](../../../../sources/mindsdb__minds/.github/workflows/deploy_docs.yml) |
| Containers / deploy | 1 | [docker-compose.yml](../../../../sources/mindsdb__minds/docker-compose.yml) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/mindsdb__minds/SECURITY.md) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/mindsdb__minds/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | test/eval path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `CLAUDE.md`, `Makefile`, `.github/workflows/codeql.yml`.
2. Inspect retrieval/memory/indexing through: `docs/index.html`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 General purpose AI designed for knowledge workers — creators, strategists, and operators — and individuals seeking AI sy. 핵심 구조 신호는 Makefile, docker-compose.yml, README.md, CLAUDE.md, LICENSE, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
