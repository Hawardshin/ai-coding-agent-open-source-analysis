# tornikebolokadze1-cyber/awesome-ai-pulse-georgia Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A curated collection of cutting-edge AI agent frameworks, developer tools, and automation resources — by AI Pulse Georgia

## 요약

- 조사 단위: `sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 25 files, 8 directories, depth score 80, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp/.gitignore, mcp/LICENSE, mcp/package-lock.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | tornikebolokadze1-cyber/awesome-ai-pulse-georgia |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 123 |
| Forks | 8 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia) |
| Existing report | [reports/global-trending/repositories/tornikebolokadze1-cyber__awesome-ai-pulse-georgia.md](../../../global-trending/repositories/tornikebolokadze1-cyber__awesome-ai-pulse-georgia.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 25 / 8 |
| Max observed depth | 3 |
| Top directories | .github, assets, docs, mcp |
| Top extensions | .ts: 7, .json: 5, (none): 4, .md: 3, .yml: 3, .html: 1, .svg: 1, .yaml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| mcp | top-level component | 1 |


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
| mcp | [mcp/.gitignore](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/.gitignore) | mcp signal |
| mcp | [mcp/LICENSE](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/LICENSE) | mcp signal |
| mcp | [mcp/package-lock.json](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/package-lock.json) | mcp signal |
| mcp | [mcp/package.json](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/package.json) | mcp signal |
| entrypoints | [mcp/src/cli.ts](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/src/cli.ts) | entrypoints signal |
| entrypoints | [mcp/src/index.ts](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/src/index.ts) | entrypoints signal |
| config | [mcp/tsconfig.json](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/tsconfig.json) | config signal |
| ci | [.github/workflows/mcp-data-sync.yml](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/.github/workflows/mcp-data-sync.yml) | ci support |
| ci | [.github/workflows/mcp-publish.yml](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/.github/workflows/mcp-publish.yml) | ci support |
| eval | [mcp/scripts/smoke-test.ts](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/scripts/smoke-test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [mcp/src/cli.ts](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/src/cli.ts)<br>[mcp/src/index.ts](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/src/index.ts) |
| agentRuntime | 0 | not obvious |
| mcp | 20 | [mcp/.gitignore](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/.gitignore)<br>[mcp/LICENSE](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/LICENSE)<br>[mcp/package-lock.json](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/package-lock.json)<br>[mcp/package.json](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/package.json)<br>[mcp/PUBLISHING.md](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/PUBLISHING.md)<br>[mcp/README.md](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/README.md)<br>[mcp/smithery.yaml](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/smithery.yaml)<br>[mcp/tsconfig.json](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/tsconfig.json) |
| retrieval | 2 | [mcp/src/index.ts](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/src/index.ts)<br>[docs/index.html](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/docs/index.html) |
| spec | 0 | not obvious |
| eval | 1 | [mcp/scripts/smoke-test.ts](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/scripts/smoke-test.ts) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/mcp-data-sync.yml](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/.github/workflows/mcp-data-sync.yml)<br>[.github/workflows/mcp-publish.yml](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/.github/workflows/mcp-publish.yml)<br>[.github/workflows/mcp-star-refresh.yml](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/.github/workflows/mcp-star-refresh.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/README.md)<br>[mcp/README.md](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/README.md)<br>[docs/index.html](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/docs/index.html) |
| config | 2 | [mcp/package.json](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/package.json)<br>[mcp/tsconfig.json](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [mcp/scripts/smoke-test.ts](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/mcp/scripts/smoke-test.ts) |
| CI workflows | 3 | [.github/workflows/mcp-data-sync.yml](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/.github/workflows/mcp-data-sync.yml)<br>[.github/workflows/mcp-publish.yml](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/.github/workflows/mcp-publish.yml)<br>[.github/workflows/mcp-star-refresh.yml](../../../../sources/tornikebolokadze1-cyber__awesome-ai-pulse-georgia/.github/workflows/mcp-star-refresh.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `mcp/.gitignore`, `mcp/LICENSE`, `mcp/package-lock.json`.
2. Trace execution through entrypoints: `mcp/src/cli.ts`, `mcp/src/index.ts`.
3. Inspect retrieval/memory/indexing through: `mcp/src/index.ts`, `docs/index.html`.
4. Verify behavior through test/eval files: `mcp/scripts/smoke-test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A curated collection of cutting edge AI agent frameworks, developer tools, and automation resources — by AI Pulse Georgi. 핵심 구조 신호는 TypeScript, README.md, LICENSE, ci, docs, spec-artifacts이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
