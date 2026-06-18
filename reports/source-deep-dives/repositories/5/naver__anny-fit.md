# naver/anny-fit Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

naver/anny-fit

## 요약

- 조사 단위: `sources/naver__anny-fit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 54 files, 22 directories, depth score 51, key references 3개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=requirements.txt이고, 의존성 단서는 torch, transformers, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/anny-fit |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 50 |
| Forks | 2 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__anny-fit](../../../../sources/naver__anny-fit) |
| Existing report | [reports/korea-trending/repositories/naver__anny-fit.md](../../../korea-trending/repositories/naver__anny-fit.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 54 / 22 |
| Max observed depth | 4 |
| Top directories | annyfit, assets, demo, estimate, preprocess, scripts, submodules, visualize |
| Top extensions | .py: 36, .sh: 5, .npz: 3, .txt: 3, .md: 2, (none): 2, .jpg: 1, .webp: 1, .yaml: 1 |
| Source patterns | spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| annyfit | top-level component | 1 |
| assets | top-level component | 1 |
| demo | top-level component | 1 |
| estimate | top-level component | 1 |
| preprocess | top-level component | 1 |
| scripts | top-level component | 1 |
| submodules | top-level component | 1 |
| visualize | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch, transformers |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [requirements.txt](../../../../sources/naver__anny-fit/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/naver__anny-fit/README.md) | docs signal |
| eval | [preprocess/build_test_dataset.py](../../../../sources/naver__anny-fit/preprocess/build_test_dataset.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [requirements.txt](../../../../sources/naver__anny-fit/requirements.txt) |
| eval | 1 | [preprocess/build_test_dataset.py](../../../../sources/naver__anny-fit/preprocess/build_test_dataset.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver__anny-fit/README.md) |
| config | 1 | [requirements.txt](../../../../sources/naver__anny-fit/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [preprocess/build_test_dataset.py](../../../../sources/naver__anny-fit/preprocess/build_test_dataset.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `requirements.txt`, `README.md`, `preprocess/build_test_dataset.py`.
2. Verify behavior through test/eval files: `preprocess/build_test_dataset.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 Python, requirements.txt, README.md, torch, transformers, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
