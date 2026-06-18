# naver-ai/calm Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

naver-ai/calm

## 요약

- 조사 단위: `sources/naver-ai__calm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 76 files, 17 directories, depth score 62, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver-ai/calm |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 90 |
| Forks | 6 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver-ai__calm](../../../../sources/naver-ai__calm) |
| Existing report | [reports/korea-trending/repositories/naver-ai__calm.md](../../../korea-trending/repositories/naver-ai__calm.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 76 / 17 |
| Max observed depth | 4 |
| Top directories | dataset, metadata, network, score_map_method |
| Top extensions | .txt: 39, .py: 22, (none): 6, .sh: 4, .png: 3, .json: 1, .md: 1 |
| Source patterns | cli-first, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| dataset | top-level component | 1 |
| metadata | top-level component | 1 |
| network | top-level component | 1 |
| score_map_method | top-level component | 1 |


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
| entrypoints | [main.py](../../../../sources/naver-ai__calm/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/naver-ai__calm/README.md) | docs signal |
| eval | [eval_cue_location.py](../../../../sources/naver-ai__calm/eval_cue_location.py) | eval signal |
| eval | [eval_remove_classify.py](../../../../sources/naver-ai__calm/eval_remove_classify.py) | eval signal |
| eval | [metadata/OpenImages/test/class_labels.txt](../../../../sources/naver-ai__calm/metadata/OpenImages/test/class_labels.txt) | eval signal |
| eval | [metadata/OpenImages/test/image_ids.txt](../../../../sources/naver-ai__calm/metadata/OpenImages/test/image_ids.txt) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [main.py](../../../../sources/naver-ai__calm/main.py) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [metadata/ILSVRC/helper/imagenet_class_index.json](../../../../sources/naver-ai__calm/metadata/ILSVRC/helper/imagenet_class_index.json) |
| spec | 0 | not obvious |
| eval | 15 | [eval_cue_location.py](../../../../sources/naver-ai__calm/eval_cue_location.py)<br>[eval_remove_classify.py](../../../../sources/naver-ai__calm/eval_remove_classify.py)<br>[metadata/OpenImages/test/class_labels.txt](../../../../sources/naver-ai__calm/metadata/OpenImages/test/class_labels.txt)<br>[metadata/OpenImages/test/image_ids.txt](../../../../sources/naver-ai__calm/metadata/OpenImages/test/image_ids.txt)<br>[metadata/OpenImages/test/image_sizes.txt](../../../../sources/naver-ai__calm/metadata/OpenImages/test/image_sizes.txt)<br>[metadata/OpenImages/test/localization.txt](../../../../sources/naver-ai__calm/metadata/OpenImages/test/localization.txt)<br>[metadata/ILSVRC/test/class_labels.txt](../../../../sources/naver-ai__calm/metadata/ILSVRC/test/class_labels.txt)<br>[metadata/ILSVRC/test/image_ids.txt](../../../../sources/naver-ai__calm/metadata/ILSVRC/test/image_ids.txt) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver-ai__calm/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 15 | [eval_cue_location.py](../../../../sources/naver-ai__calm/eval_cue_location.py)<br>[eval_remove_classify.py](../../../../sources/naver-ai__calm/eval_remove_classify.py)<br>[metadata/OpenImages/test/class_labels.txt](../../../../sources/naver-ai__calm/metadata/OpenImages/test/class_labels.txt)<br>[metadata/OpenImages/test/image_ids.txt](../../../../sources/naver-ai__calm/metadata/OpenImages/test/image_ids.txt)<br>[metadata/OpenImages/test/image_sizes.txt](../../../../sources/naver-ai__calm/metadata/OpenImages/test/image_sizes.txt)<br>[metadata/OpenImages/test/localization.txt](../../../../sources/naver-ai__calm/metadata/OpenImages/test/localization.txt) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `main.py`, `README.md`, `eval_cue_location.py`.
2. Trace execution through entrypoints: `main.py`.
3. Inspect retrieval/memory/indexing through: `metadata/ILSVRC/helper/imagenet_class_index.json`.
4. Verify behavior through test/eval files: `eval_cue_location.py`, `eval_remove_classify.py`, `metadata/OpenImages/test/class_labels.txt`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 Python, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
