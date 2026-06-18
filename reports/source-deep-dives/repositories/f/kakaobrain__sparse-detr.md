# kakaobrain/sparse-detr Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

PyTorch Implementation of Sparse DETR

## 요약

- 조사 단위: `sources/kakaobrain__sparse-detr` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 66 files, 15 directories, depth score 74, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, agent/tool runtime, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kakaobrain/sparse-detr |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 175 |
| Forks | 17 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/kakaobrain__sparse-detr](../../../../sources/kakaobrain__sparse-detr) |
| Existing report | [reports/korea-trending/repositories/kakaobrain__sparse-detr.md](../../../korea-trending/repositories/kakaobrain__sparse-detr.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 66 / 15 |
| Max observed depth | 5 |
| Top directories | configs, datasets, figs, models, tools, util |
| Top extensions | .py: 36, .sh: 12, .yaml: 5, .h: 3, .cpp: 2, .png: 2, (none): 2, .cu: 1, .cuh: 1, .md: 1, .txt: 1 |
| Source patterns | cli-first, agent/tool runtime, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| configs | top-level component | 1 |
| datasets | top-level component | 1 |
| figs | top-level component | 1 |
| models | top-level component | 1 |
| tools | top-level component | 1 |
| util | top-level component | 1 |


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
| entrypoints | [main.py](../../../../sources/kakaobrain__sparse-detr/main.py) | entrypoints signal |
| config | [requirements.txt](../../../../sources/kakaobrain__sparse-detr/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/kakaobrain__sparse-detr/README.md) | docs signal |
| eval | [util/benchmark.py](../../../../sources/kakaobrain__sparse-detr/util/benchmark.py) | eval signal |
| eval | [models/ops/test.py](../../../../sources/kakaobrain__sparse-detr/models/ops/test.py) | eval signal |
| eval | [datasets/coco_eval.py](../../../../sources/kakaobrain__sparse-detr/datasets/coco_eval.py) | eval signal |
| eval | [datasets/panoptic_eval.py](../../../../sources/kakaobrain__sparse-detr/datasets/panoptic_eval.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [main.py](../../../../sources/kakaobrain__sparse-detr/main.py) |
| agentRuntime | 2 | [tools/launch.py](../../../../sources/kakaobrain__sparse-detr/tools/launch.py)<br>[tools/run_dist_launch.sh](../../../../sources/kakaobrain__sparse-detr/tools/run_dist_launch.sh) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 2 | [requirements.txt](../../../../sources/kakaobrain__sparse-detr/requirements.txt)<br>[figs/architecture.png](../../../../sources/kakaobrain__sparse-detr/figs/architecture.png) |
| eval | 4 | [util/benchmark.py](../../../../sources/kakaobrain__sparse-detr/util/benchmark.py)<br>[models/ops/test.py](../../../../sources/kakaobrain__sparse-detr/models/ops/test.py)<br>[datasets/coco_eval.py](../../../../sources/kakaobrain__sparse-detr/datasets/coco_eval.py)<br>[datasets/panoptic_eval.py](../../../../sources/kakaobrain__sparse-detr/datasets/panoptic_eval.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/kakaobrain__sparse-detr/README.md) |
| config | 1 | [requirements.txt](../../../../sources/kakaobrain__sparse-detr/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [util/benchmark.py](../../../../sources/kakaobrain__sparse-detr/util/benchmark.py)<br>[models/ops/test.py](../../../../sources/kakaobrain__sparse-detr/models/ops/test.py)<br>[datasets/coco_eval.py](../../../../sources/kakaobrain__sparse-detr/datasets/coco_eval.py)<br>[datasets/panoptic_eval.py](../../../../sources/kakaobrain__sparse-detr/datasets/panoptic_eval.py) |
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

1. Start from key references: `main.py`, `requirements.txt`, `README.md`.
2. Trace execution through entrypoints: `main.py`.
3. Map agent/tool runtime through: `tools/launch.py`, `tools/run_dist_launch.sh`.
4. Verify behavior through test/eval files: `util/benchmark.py`, `models/ops/test.py`, `datasets/coco_eval.py`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 PyTorch Implementation of Sparse DETR. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, docs, spec-artifacts이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
