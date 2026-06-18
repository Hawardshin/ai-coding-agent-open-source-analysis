# line/line-openapi Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

OpenAPI spec of the LINE's Public APIs

## 요약

- 조사 단위: `sources/line__line-openapi` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 38 files, 6 directories, depth score 78, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=.github/actions/post-comment-action/main.js이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/line-openapi |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | JavaScript |
| Stars | 201 |
| Forks | 39 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__line-openapi](../../../../sources/line__line-openapi) |
| Existing report | [reports/korea-trending/repositories/line__line-openapi.md](../../../korea-trending/repositories/line__line-openapi.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 38 / 6 |
| Max observed depth | 4 |
| Top directories | .github, tools |
| Top extensions | .yml: 16, .mjs: 8, .md: 5, .json: 4, (none): 2, .js: 1, .json5: 1, .yaml: 1 |
| Source patterns | cli-first, agent/tool runtime, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| tools | top-level component | 1 |


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
| entrypoints | [.github/actions/post-comment-action/main.js](../../../../sources/line__line-openapi/.github/actions/post-comment-action/main.js) | entrypoints signal |
| config | [package.json](../../../../sources/line__line-openapi/package.json) | config signal |
| config | [.github/actions/post-comment-action/package.json](../../../../sources/line__line-openapi/.github/actions/post-comment-action/package.json) | config signal |
| docs | [README.md](../../../../sources/line__line-openapi/README.md) | docs signal |
| eval | [tools/generate-test.mjs](../../../../sources/line__line-openapi/tools/generate-test.mjs) | eval signal |
| ci | [.github/workflows/ci.yml](../../../../sources/line__line-openapi/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/close-issue.yml](../../../../sources/line__line-openapi/.github/workflows/close-issue.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/line__line-openapi/docker-compose.yml) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [.github/actions/post-comment-action/main.js](../../../../sources/line__line-openapi/.github/actions/post-comment-action/main.js) |
| agentRuntime | 8 | [tools/determine-change-type.mjs](../../../../sources/line__line-openapi/tools/determine-change-type.mjs)<br>[tools/generate-test.mjs](../../../../sources/line__line-openapi/tools/generate-test.mjs)<br>[tools/get-pr-info.mjs](../../../../sources/line__line-openapi/tools/get-pr-info.mjs)<br>[tools/reformat.mjs](../../../../sources/line__line-openapi/tools/reformat.mjs)<br>[tools/validate-all.mjs](../../../../sources/line__line-openapi/tools/validate-all.mjs)<br>[tools/validate-inheritance.mjs](../../../../sources/line__line-openapi/tools/validate-inheritance.mjs)<br>[tools/validate-property-camelcase.mjs](../../../../sources/line__line-openapi/tools/validate-property-camelcase.mjs)<br>[tools/validate-request-suffix.mjs](../../../../sources/line__line-openapi/tools/validate-request-suffix.mjs) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 1 | [tools/generate-test.mjs](../../../../sources/line__line-openapi/tools/generate-test.mjs) |
| security | 0 | not obvious |
| ci | 5 | [.github/workflows/ci.yml](../../../../sources/line__line-openapi/.github/workflows/ci.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-openapi/.github/workflows/close-issue.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-openapi/.github/workflows/label-issue.yml)<br>[.github/workflows/sdk-testing.yml](../../../../sources/line__line-openapi/.github/workflows/sdk-testing.yml)<br>[.github/workflows/warn-pr-from-forked-repository.yml](../../../../sources/line__line-openapi/.github/workflows/warn-pr-from-forked-repository.yml) |
| container | 1 | [docker-compose.yml](../../../../sources/line__line-openapi/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/line__line-openapi/README.md) |
| config | 2 | [package.json](../../../../sources/line__line-openapi/package.json)<br>[.github/actions/post-comment-action/package.json](../../../../sources/line__line-openapi/.github/actions/post-comment-action/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [tools/generate-test.mjs](../../../../sources/line__line-openapi/tools/generate-test.mjs) |
| CI workflows | 5 | [.github/workflows/ci.yml](../../../../sources/line__line-openapi/.github/workflows/ci.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-openapi/.github/workflows/close-issue.yml)<br>[.github/workflows/label-issue.yml](../../../../sources/line__line-openapi/.github/workflows/label-issue.yml)<br>[.github/workflows/sdk-testing.yml](../../../../sources/line__line-openapi/.github/workflows/sdk-testing.yml)<br>[.github/workflows/warn-pr-from-forked-repository.yml](../../../../sources/line__line-openapi/.github/workflows/warn-pr-from-forked-repository.yml) |
| Containers / deploy | 1 | [docker-compose.yml](../../../../sources/line__line-openapi/docker-compose.yml) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.github/actions/post-comment-action/main.js`, `package.json`, `.github/actions/post-comment-action/package.json`.
2. Trace execution through entrypoints: `.github/actions/post-comment-action/main.js`.
3. Map agent/tool runtime through: `tools/determine-change-type.mjs`, `tools/generate-test.mjs`, `tools/get-pr-info.mjs`.
4. Verify behavior through test/eval files: `tools/generate-test.mjs`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 OpenAPI spec of the LINE's Public APIs. 핵심 구조 신호는 JavaScript, package.json, docker-compose.yml, README.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
