# naver/r2d2 Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

naver/r2d2

## 요약

- 조사 단위: `sources/naver__r2d2` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 40 files, 6 directories, depth score 44, key references 2개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 2개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/r2d2 |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 519 |
| Forks | 92 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__r2d2](../../../../sources/naver__r2d2) |
| Existing report | [reports/korea-trending/repositories/naver__r2d2.md](../../../korea-trending/repositories/naver__r2d2.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 40 / 6 |
| Max observed depth | 2 |
| Top directories | datasets, imgs, models, nets, results, tools |
| Top extensions | .py: 22, .npy: 5, .pt: 5, .png: 4, (none): 2, .md: 1, .sh: 1 |
| Source patterns | agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| datasets | top-level component | 1 |
| imgs | top-level component | 1 |
| models | top-level component | 1 |
| nets | top-level component | 1 |
| results | top-level component | 1 |
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
| docs | [README.md](../../../../sources/naver__r2d2/README.md) | docs signal |
| eval | [imgs/test.png](../../../../sources/naver__r2d2/imgs/test.png) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 6 | [tools/common.py](../../../../sources/naver__r2d2/tools/common.py)<br>[tools/dataloader.py](../../../../sources/naver__r2d2/tools/dataloader.py)<br>[tools/trainer.py](../../../../sources/naver__r2d2/tools/trainer.py)<br>[tools/transforms_tools.py](../../../../sources/naver__r2d2/tools/transforms_tools.py)<br>[tools/transforms.py](../../../../sources/naver__r2d2/tools/transforms.py)<br>[tools/viz.py](../../../../sources/naver__r2d2/tools/viz.py) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 1 | [imgs/test.png](../../../../sources/naver__r2d2/imgs/test.png) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver__r2d2/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [imgs/test.png](../../../../sources/naver__r2d2/imgs/test.png) |
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
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `imgs/test.png`.
2. Map agent/tool runtime through: `tools/common.py`, `tools/dataloader.py`, `tools/trainer.py`.
3. Verify behavior through test/eval files: `imgs/test.png`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 Python, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
