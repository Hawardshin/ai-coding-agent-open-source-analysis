# line/rules_apple_line Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

LINE's Apple rules for Bazel

## 요약

- 조사 단위: `sources/line__rules_apple_line` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 108 files, 41 directories, depth score 66, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=Makefile이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/rules_apple_line |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Starlark |
| Stars | 209 |
| Forks | 16 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/line__rules_apple_line](../../../../sources/line__rules_apple_line) |
| Existing report | [reports/korea-trending/repositories/line__rules_apple_line.md](../../../korea-trending/repositories/line__rules_apple_line.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 108 / 41 |
| Max observed depth | 8 |
| Top directories | .github, apple, docs, examples, test, third_party, tools |
| Top extensions | .bzl: 24, (none): 23, .json: 15, .build: 13, .swift: 10, .md: 6, .plist: 4, .storyboard: 4, .h: 3, .m: 3, .patch: 1, .py: 1 |
| Source patterns | agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| apple | top-level component | 1 |
| examples | top-level component | 1 |
| examples/ios | examples workspace | 1 |
| test | validation surface | 1 |
| third_party | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | docs | make docs |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | buildifier | make buildifier |


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
| config | [Makefile](../../../../sources/line__rules_apple_line/Makefile) | config signal |
| docs | [README.md](../../../../sources/line__rules_apple_line/README.md) | docs signal |
| docs | [tools/plist_merger/README.md](../../../../sources/line__rules_apple_line/tools/plist_merger/README.md) | docs signal |
| docs | [examples/ios/App/README.md](../../../../sources/line__rules_apple_line/examples/ios/App/README.md) | docs signal |
| docs | [docs/BUILD](../../../../sources/line__rules_apple_line/docs/BUILD) | docs signal |
| eval | [test/BUILD](../../../../sources/line__rules_apple_line/test/BUILD) | eval signal |
| ci | [.github/workflows/build.yml](../../../../sources/line__rules_apple_line/.github/workflows/build.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 4 | [tools/plist_merger/BUILD](../../../../sources/line__rules_apple_line/tools/plist_merger/BUILD)<br>[tools/plist_merger/plist_merger.py](../../../../sources/line__rules_apple_line/tools/plist_merger/plist_merger.py)<br>[tools/plist_merger/README.md](../../../../sources/line__rules_apple_line/tools/plist_merger/README.md)<br>[tools/buildifier/BUILD](../../../../sources/line__rules_apple_line/tools/buildifier/BUILD) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 1 | [test/BUILD](../../../../sources/line__rules_apple_line/test/BUILD) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/build.yml](../../../../sources/line__rules_apple_line/.github/workflows/build.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 6 | [README.md](../../../../sources/line__rules_apple_line/README.md)<br>[tools/plist_merger/README.md](../../../../sources/line__rules_apple_line/tools/plist_merger/README.md)<br>[examples/ios/App/README.md](../../../../sources/line__rules_apple_line/examples/ios/App/README.md)<br>[docs/BUILD](../../../../sources/line__rules_apple_line/docs/BUILD)<br>[docs/doc_hub.bzl](../../../../sources/line__rules_apple_line/docs/doc_hub.bzl)<br>[docs/README.md](../../../../sources/line__rules_apple_line/docs/README.md) |
| config | 1 | [Makefile](../../../../sources/line__rules_apple_line/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [test/BUILD](../../../../sources/line__rules_apple_line/test/BUILD) |
| CI workflows | 1 | [.github/workflows/build.yml](../../../../sources/line__rules_apple_line/.github/workflows/build.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `Makefile`, `README.md`, `tools/plist_merger/README.md`.
2. Map agent/tool runtime through: `tools/plist_merger/BUILD`, `tools/plist_merger/plist_merger.py`, `tools/plist_merger/README.md`.
3. Verify behavior through test/eval files: `test/BUILD`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 LINE's Apple rules for Bazel. 핵심 구조 신호는 Starlark, Makefile, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
