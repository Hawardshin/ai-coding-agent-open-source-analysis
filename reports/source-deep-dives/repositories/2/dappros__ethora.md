# dappros/ethora Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

SDK monorepo for Ethora chat / messaging platform. (1) Pick an SDK for your frontend stack. (2) Integrate manually or using ethora-setup. (3) Optionally configure app settings, deploy AI agents etc. Server: ethora.com cloud [free]. Dedicated server + SLA option for enterprise customers.

## 요약

- 조사 단위: `sources/dappros__ethora` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 29 files, 21 directories, depth score 53, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 retrieval/vector path, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 config=features/scripts/package.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | dappros/ethora |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 537 |
| Forks | 110 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/dappros__ethora](../../../../sources/dappros__ethora) |
| Existing report | [reports/global-trending/repositories/dappros__ethora.md](../../../global-trending/repositories/dappros__ethora.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 29 / 21 |
| Max observed depth | 3 |
| Top directories | .github, api, app-reactjs, backend-integration, bots, features, mcp-cli, playground, rag-demos, sample-android, sample-swift, sdk-android, sdk-reactjs, sdk-reactnative, sdk-swift, sdk-wordpress, setup |
| Top extensions | .md: 14, .js: 4, (none): 4, .yml: 3, .json: 1, .mjs: 1, .xml: 1, .yaml: 1 |
| Source patterns | retrieval/vector path, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| api | source boundary | 3 |
| .github | ci surface | 1 |
| app-reactjs | top-level component | 1 |
| backend-integration | top-level component | 1 |
| bots | top-level component | 1 |
| features | top-level component | 1 |
| mcp-cli | top-level component | 1 |
| playground | top-level component | 1 |
| rag-demos | top-level component | 1 |
| sample-android | top-level component | 1 |
| sample-swift | top-level component | 1 |
| sdk-android | top-level component | 1 |
| sdk-reactjs | top-level component | 1 |
| sdk-reactnative | top-level component | 1 |
| sdk-swift | top-level component | 1 |
| sdk-wordpress | top-level component | 1 |
| setup | top-level component | 1 |


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
| config | [features/scripts/package.json](../../../../sources/dappros__ethora/features/scripts/package.json) | config signal |
| ci | [.github/workflows/bump-submodules.yml](../../../../sources/dappros__ethora/.github/workflows/bump-submodules.yml) | ci support |
| ci | [.github/workflows/monthly-release.yml](../../../../sources/dappros__ethora/.github/workflows/monthly-release.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [api/index.js](../../../../sources/dappros__ethora/api/index.js) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 1 | [SECURITY.md](../../../../sources/dappros__ethora/SECURITY.md) |
| ci | 3 | [.github/workflows/bump-submodules.yml](../../../../sources/dappros__ethora/.github/workflows/bump-submodules.yml)<br>[.github/workflows/monthly-release.yml](../../../../sources/dappros__ethora/.github/workflows/monthly-release.yml)<br>[.github/workflows/pushClientWebToDockerHub.yml](../../../../sources/dappros__ethora/.github/workflows/pushClientWebToDockerHub.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/dappros__ethora/README.md)<br>[features/README.md](../../../../sources/dappros__ethora/features/README.md)<br>[api/README.md](../../../../sources/dappros__ethora/api/README.md) |
| config | 1 | [features/scripts/package.json](../../../../sources/dappros__ethora/features/scripts/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 3 | [.github/workflows/bump-submodules.yml](../../../../sources/dappros__ethora/.github/workflows/bump-submodules.yml)<br>[.github/workflows/monthly-release.yml](../../../../sources/dappros__ethora/.github/workflows/monthly-release.yml)<br>[.github/workflows/pushClientWebToDockerHub.yml](../../../../sources/dappros__ethora/.github/workflows/pushClientWebToDockerHub.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/dappros__ethora/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `features/scripts/package.json`, `.github/workflows/bump-submodules.yml`, `.github/workflows/monthly-release.yml`.
2. Inspect retrieval/memory/indexing through: `api/index.js`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 SDK monorepo for Ethora chat / messaging platform. 1 Pick an SDK for your frontend stack. 2 Integrate manually or using . 핵심 구조 신호는 JavaScript, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
