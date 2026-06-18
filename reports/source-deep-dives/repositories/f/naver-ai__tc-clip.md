# naver-ai/tc-clip Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

[ECCV 2024] Official PyTorch implementation of TC-CLIP "Leveraging Temporal Contextualization for Video Action Recognition"

## 요약

- 조사 단위: `sources/naver-ai__tc-clip` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 180 files, 38 directories, depth score 85, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.py이고, 의존성 단서는 torch, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver-ai/tc-clip |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 101 |
| Forks | 12 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver-ai__tc-clip](../../../../sources/naver-ai__tc-clip) |
| Existing report | [reports/korea-trending/repositories/naver-ai__tc-clip.md](../../../korea-trending/repositories/naver-ai__tc-clip.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 180 / 38 |
| Max observed depth | 4 |
| Top directories | clip, configs, datasets, datasets_splits, docs, labels, scripts, tome, trainers, utils |
| Top extensions | .txt: 62, .py: 31, .yaml: 28, .csv: 20, .sh: 14, .json: 13, .md: 5, .png: 2, (none): 2, .gz: 1, .ipynb: 1, .pdf: 1 |
| Source patterns | cli-first, agent/tool runtime, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 9 |
| clip | top-level component | 1 |
| configs | top-level component | 1 |
| datasets | top-level component | 1 |
| datasets_splits | top-level component | 1 |
| labels | top-level component | 1 |
| scripts | top-level component | 1 |
| tome | top-level component | 1 |
| trainers | top-level component | 1 |
| utils | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | torch |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [main.py](../../../../sources/naver-ai__tc-clip/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/naver-ai__tc-clip/README.md) | docs signal |
| docs | [docs/CONFIG.md](../../../../sources/naver-ai__tc-clip/docs/CONFIG.md) | docs signal |
| docs | [docs/DATASETS.md](../../../../sources/naver-ai__tc-clip/docs/DATASETS.md) | docs signal |
| docs | [docs/INSTALL.md](../../../../sources/naver-ai__tc-clip/docs/INSTALL.md) | docs signal |
| eval | [scripts/eval/eval_tc_clip_base2novel.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_base2novel.sh) | eval signal |
| eval | [scripts/eval/eval_tc_clip_few_shot.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_few_shot.sh) | eval signal |
| eval | [scripts/eval/eval_tc_clip_fully_supervised.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_fully_supervised.sh) | eval signal |
| eval | [scripts/eval/eval_tc_clip_zero_shot_wise_ft.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_zero_shot_wise_ft.sh) | eval signal |
| config | [requirements.txt](../../../../sources/naver-ai__tc-clip/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [main.py](../../../../sources/naver-ai__tc-clip/main.py) |
| agentRuntime | 1 | [utils/tools.py](../../../../sources/naver-ai__tc-clip/utils/tools.py) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [requirements.txt](../../../../sources/naver-ai__tc-clip/requirements.txt) |
| eval | 9 | [scripts/eval/eval_tc_clip_base2novel.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_base2novel.sh)<br>[scripts/eval/eval_tc_clip_few_shot.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_few_shot.sh)<br>[scripts/eval/eval_tc_clip_fully_supervised.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_fully_supervised.sh)<br>[scripts/eval/eval_tc_clip_zero_shot_wise_ft.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_zero_shot_wise_ft.sh)<br>[scripts/eval/eval_tc_clip_zero_shot.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_zero_shot.sh)<br>[docs/TRAIN_EVAL.md](../../../../sources/naver-ai__tc-clip/docs/TRAIN_EVAL.md)<br>[datasets_splits/k600_splits/ZS_split1_K600_eval.txt](../../../../sources/naver-ai__tc-clip/datasets_splits/k600_splits/ZS_split1_K600_eval.txt)<br>[datasets_splits/k600_splits/ZS_split2_K600_eval.txt](../../../../sources/naver-ai__tc-clip/datasets_splits/k600_splits/ZS_split2_K600_eval.txt) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 8 | [README.md](../../../../sources/naver-ai__tc-clip/README.md)<br>[docs/CONFIG.md](../../../../sources/naver-ai__tc-clip/docs/CONFIG.md)<br>[docs/DATASETS.md](../../../../sources/naver-ai__tc-clip/docs/DATASETS.md)<br>[docs/INSTALL.md](../../../../sources/naver-ai__tc-clip/docs/INSTALL.md)<br>[docs/tc_clip_poster_eccv2024.pdf](../../../../sources/naver-ai__tc-clip/docs/tc_clip_poster_eccv2024.pdf)<br>[docs/teaser_attention.png](../../../../sources/naver-ai__tc-clip/docs/teaser_attention.png)<br>[docs/temporal_modeling_comparison.png](../../../../sources/naver-ai__tc-clip/docs/temporal_modeling_comparison.png)<br>[docs/TRAIN_EVAL.md](../../../../sources/naver-ai__tc-clip/docs/TRAIN_EVAL.md) |
| config | 1 | [requirements.txt](../../../../sources/naver-ai__tc-clip/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 9 | [scripts/eval/eval_tc_clip_base2novel.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_base2novel.sh)<br>[scripts/eval/eval_tc_clip_few_shot.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_few_shot.sh)<br>[scripts/eval/eval_tc_clip_fully_supervised.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_fully_supervised.sh)<br>[scripts/eval/eval_tc_clip_zero_shot_wise_ft.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_zero_shot_wise_ft.sh)<br>[scripts/eval/eval_tc_clip_zero_shot.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_zero_shot.sh)<br>[docs/TRAIN_EVAL.md](../../../../sources/naver-ai__tc-clip/docs/TRAIN_EVAL.md) |
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
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `main.py`, `README.md`, `docs/CONFIG.md`.
2. Trace execution through entrypoints: `main.py`.
3. Map agent/tool runtime through: `utils/tools.py`.
4. Verify behavior through test/eval files: `scripts/eval/eval_tc_clip_base2novel.sh`, `scripts/eval/eval_tc_clip_few_shot.sh`, `scripts/eval/eval_tc_clip_fully_supervised.sh`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 ECCV 2024 Official PyTorch implementation of TC CLIP "Leveraging Temporal Contextualization for Video Action Recognition. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, torch, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
