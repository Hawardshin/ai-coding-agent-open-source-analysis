# naver-ai/pcme Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Official Pytorch implementation of "Probabilistic Cross-Modal Embedding" (CVPR 2021)

## 요약

- 조사 단위: `sources/naver-ai__pcme` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 57 files, 12 directories, depth score 67, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=engine/retrieval_coco.py이고, 의존성 단서는 torch, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver-ai/pcme |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 141 |
| Forks | 19 |
| License | NOASSERTION |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver-ai__pcme](../../../../sources/naver-ai__pcme) |
| Existing report | [reports/korea-trending/repositories/naver-ai__pcme.md](../../../korea-trending/repositories/naver-ai__pcme.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 57 / 12 |
| Max observed depth | 4 |
| Top directories | config, criterions, datasets, engine, models, optimizers, utils |
| Top extensions | .py: 35, .txt: 10, .npy: 4, (none): 3, .pkl: 2, .yaml: 2, .md: 1 |
| Source patterns | retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| config | top-level component | 1 |
| criterions | top-level component | 1 |
| datasets | top-level component | 1 |
| engine | top-level component | 1 |
| models | top-level component | 1 |
| optimizers | top-level component | 1 |
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
| retrieval | [engine/retrieval_coco.py](../../../../sources/naver-ai__pcme/engine/retrieval_coco.py) | retrieval signal |
| docs | [README.md](../../../../sources/naver-ai__pcme/README.md) | docs signal |
| eval | [engine/eval_coco.py](../../../../sources/naver-ai__pcme/engine/eval_coco.py) | eval signal |
| eval | [engine/eval_cub.py](../../../../sources/naver-ai__pcme/engine/eval_cub.py) | eval signal |
| eval | [datasets/annotations/coco_test_ids.npy](../../../../sources/naver-ai__pcme/datasets/annotations/coco_test_ids.npy) | eval signal |
| eval | [datasets/annotations/cub/seen_test_images.txt](../../../../sources/naver-ai__pcme/datasets/annotations/cub/seen_test_images.txt) | eval signal |
| config | [requirements.txt](../../../../sources/naver-ai__pcme/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [engine/retrieval_coco.py](../../../../sources/naver-ai__pcme/engine/retrieval_coco.py) |
| spec | 1 | [requirements.txt](../../../../sources/naver-ai__pcme/requirements.txt) |
| eval | 4 | [engine/eval_coco.py](../../../../sources/naver-ai__pcme/engine/eval_coco.py)<br>[engine/eval_cub.py](../../../../sources/naver-ai__pcme/engine/eval_cub.py)<br>[datasets/annotations/coco_test_ids.npy](../../../../sources/naver-ai__pcme/datasets/annotations/coco_test_ids.npy)<br>[datasets/annotations/cub/seen_test_images.txt](../../../../sources/naver-ai__pcme/datasets/annotations/cub/seen_test_images.txt) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver-ai__pcme/README.md) |
| config | 1 | [requirements.txt](../../../../sources/naver-ai__pcme/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [engine/eval_coco.py](../../../../sources/naver-ai__pcme/engine/eval_coco.py)<br>[engine/eval_cub.py](../../../../sources/naver-ai__pcme/engine/eval_cub.py)<br>[datasets/annotations/coco_test_ids.npy](../../../../sources/naver-ai__pcme/datasets/annotations/coco_test_ids.npy)<br>[datasets/annotations/cub/seen_test_images.txt](../../../../sources/naver-ai__pcme/datasets/annotations/cub/seen_test_images.txt) |
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

1. Start from key references: `engine/retrieval_coco.py`, `README.md`, `engine/eval_coco.py`.
2. Inspect retrieval/memory/indexing through: `engine/retrieval_coco.py`.
3. Verify behavior through test/eval files: `engine/eval_coco.py`, `engine/eval_cub.py`, `datasets/annotations/coco_test_ids.npy`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Official Pytorch implementation of "Probabilistic Cross Modal Embedding" CVPR 2021. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, torch, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
