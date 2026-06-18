# naver/shine Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

[CVPR'24 Highlight] SHiNe: Semantic Hierarchy Nexus for Open-vocabulary Object Detection

## 요약

- 조사 단위: `sources/naver__shine` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 669 files, 226 directories, depth score 62, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/shine |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 101 |
| Forks | 9 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__shine](../../../../sources/naver__shine) |
| Existing report | [reports/korea-trending/repositories/naver__shine.md](../../../korea-trending/repositories/naver__shine.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 669 / 226 |
| Max observed depth | 6 |
| Top directories | codet, configs_codet, configs_detic, configs_vldet, datasets, detic, materials, models, nexus, scripts_build_nexus, scripts_local, scripts_plant_hrchy, scripts_slurm, shine, shine_cls, slurm-output, third_party, vldet |
| Top extensions | .sh: 269, .py: 156, .json: 96, .npy: 68, .yaml: 55, .txt: 12, (none): 3, .jpg: 2, .md: 2, .png: 2, .pth: 2, .csv: 1 |
| Source patterns | agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| codet | top-level component | 1 |
| configs_codet | top-level component | 1 |
| configs_detic | top-level component | 1 |
| configs_vldet | top-level component | 1 |
| datasets | top-level component | 1 |
| detic | top-level component | 1 |
| materials | top-level component | 1 |
| models | top-level component | 1 |
| nexus | top-level component | 1 |
| scripts_build_nexus | top-level component | 1 |
| scripts_local | top-level component | 1 |
| scripts_plant_hrchy | top-level component | 1 |
| scripts_slurm | top-level component | 1 |
| shine | top-level component | 1 |
| shine_cls | top-level component | 1 |
| slurm-output | top-level component | 1 |
| third_party | top-level component | 1 |
| vldet | top-level component | 1 |


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
| docs | [README.md](../../../../sources/naver__shine/README.md) | docs signal |
| eval | [vldet/evaluation/custom_coco_eval.py](../../../../sources/naver__shine/vldet/evaluation/custom_coco_eval.py) | eval signal |
| eval | [vldet/evaluation/fsodeval.py](../../../../sources/naver__shine/vldet/evaluation/fsodeval.py) | eval signal |
| eval | [vldet/evaluation/inateval.py](../../../../sources/naver__shine/vldet/evaluation/inateval.py) | eval signal |
| eval | [vldet/evaluation/oideval.py](../../../../sources/naver__shine/vldet/evaluation/oideval.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 5 | [shine/tools/__init__.py](../../../../sources/naver__shine/shine/tools/__init__.py)<br>[shine/tools/composer.py](../../../../sources/naver__shine/shine/tools/composer.py)<br>[shine/tools/fileios.py](../../../../sources/naver__shine/shine/tools/fileios.py)<br>[shine/tools/llm_controllers.py](../../../../sources/naver__shine/shine/tools/llm_controllers.py)<br>[shine/tools/themer.py](../../../../sources/naver__shine/shine/tools/themer.py) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 14 | [vldet/evaluation/custom_coco_eval.py](../../../../sources/naver__shine/vldet/evaluation/custom_coco_eval.py)<br>[vldet/evaluation/fsodeval.py](../../../../sources/naver__shine/vldet/evaluation/fsodeval.py)<br>[vldet/evaluation/inateval.py](../../../../sources/naver__shine/vldet/evaluation/inateval.py)<br>[vldet/evaluation/oideval.py](../../../../sources/naver__shine/vldet/evaluation/oideval.py)<br>[detic/evaluation/custom_coco_eval.py](../../../../sources/naver__shine/detic/evaluation/custom_coco_eval.py)<br>[detic/evaluation/fsodeval.py](../../../../sources/naver__shine/detic/evaluation/fsodeval.py)<br>[detic/evaluation/inateval.py](../../../../sources/naver__shine/detic/evaluation/inateval.py)<br>[detic/evaluation/oideval.py](../../../../sources/naver__shine/detic/evaluation/oideval.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver__shine/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 14 | [vldet/evaluation/custom_coco_eval.py](../../../../sources/naver__shine/vldet/evaluation/custom_coco_eval.py)<br>[vldet/evaluation/fsodeval.py](../../../../sources/naver__shine/vldet/evaluation/fsodeval.py)<br>[vldet/evaluation/inateval.py](../../../../sources/naver__shine/vldet/evaluation/inateval.py)<br>[vldet/evaluation/oideval.py](../../../../sources/naver__shine/vldet/evaluation/oideval.py)<br>[detic/evaluation/custom_coco_eval.py](../../../../sources/naver__shine/detic/evaluation/custom_coco_eval.py)<br>[detic/evaluation/fsodeval.py](../../../../sources/naver__shine/detic/evaluation/fsodeval.py) |
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

1. Start from key references: `README.md`, `vldet/evaluation/custom_coco_eval.py`, `vldet/evaluation/fsodeval.py`.
2. Map agent/tool runtime through: `shine/tools/__init__.py`, `shine/tools/composer.py`, `shine/tools/fileios.py`.
3. Verify behavior through test/eval files: `vldet/evaluation/custom_coco_eval.py`, `vldet/evaluation/fsodeval.py`, `vldet/evaluation/inateval.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 CVPR'24 Highlight SHiNe Semantic Hierarchy Nexus for Open vocabulary Object Detection. 핵심 구조 신호는 Python, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
