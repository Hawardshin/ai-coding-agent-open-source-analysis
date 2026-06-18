# naver/splade Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

SPLADE: sparse neural search (SIGIR21, SIGIR22)

## 요약

- 조사 단위: `sources/naver__splade` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 177 files, 46 directories, depth score 70, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=splade/index.py, splade/utils/index_figure.py, splade/indexing/inverted_index.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/splade |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 994 |
| Forks | 96 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__splade](../../../../sources/naver__splade) |
| Existing report | [reports/korea-trending/repositories/naver__splade.md](../../../korea-trending/repositories/naver__splade.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 177 / 46 |
| Max observed depth | 4 |
| Top directories | benchmarking_sigir23, conf, data, efficient_splade_pisa, images, main_config, pruning, splade |
| Top extensions | .yaml: 90, .py: 55, .sh: 10, .md: 8, .tsv: 5, (none): 3, .json: 2, .gz: 1, .ipynb: 1, .png: 1, .yml: 1 |
| Source patterns | retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| benchmarking_sigir23 | validation surface | 1 |
| conf | top-level component | 1 |
| data | top-level component | 1 |
| efficient_splade_pisa | ci surface | 1 |
| images | top-level component | 1 |
| main_config | top-level component | 1 |
| pruning | top-level component | 1 |
| splade | top-level component | 1 |


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
| retrieval | [splade/index.py](../../../../sources/naver__splade/splade/index.py) | retrieval signal |
| retrieval | [splade/utils/index_figure.py](../../../../sources/naver__splade/splade/utils/index_figure.py) | retrieval signal |
| retrieval | [splade/indexing/inverted_index.py](../../../../sources/naver__splade/splade/indexing/inverted_index.py) | retrieval signal |
| retrieval | [pruning/index_all.sh](../../../../sources/naver__splade/pruning/index_all.sh) | retrieval signal |
| docs | [README.md](../../../../sources/naver__splade/README.md) | docs signal |
| docs | [splade/hf/README.md](../../../../sources/naver__splade/splade/hf/README.md) | docs signal |
| docs | [pruning/README.md](../../../../sources/naver__splade/pruning/README.md) | docs signal |
| docs | [main_config/two_msmarco/README.md](../../../../sources/naver__splade/main_config/two_msmarco/README.md) | docs signal |
| eval | [splade/beir_eval.py](../../../../sources/naver__splade/splade/beir_eval.py) | eval signal |
| eval | [splade/utils/processing_trec_eval.py](../../../../sources/naver__splade/splade/utils/processing_trec_eval.py) | eval signal |
| eval | [splade/evaluation/__init__.py](../../../../sources/naver__splade/splade/evaluation/__init__.py) | eval signal |
| eval | [splade/evaluation/eval.py](../../../../sources/naver__splade/splade/evaluation/eval.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 11 | [splade/index.py](../../../../sources/naver__splade/splade/index.py)<br>[splade/utils/index_figure.py](../../../../sources/naver__splade/splade/utils/index_figure.py)<br>[splade/indexing/inverted_index.py](../../../../sources/naver__splade/splade/indexing/inverted_index.py)<br>[pruning/index_all.sh](../../../../sources/naver__splade/pruning/index_all.sh)<br>[pruning/index.sh](../../../../sources/naver__splade/pruning/index.sh)<br>[pruning/prune_doc_index_all.sh](../../../../sources/naver__splade/pruning/prune_doc_index_all.sh)<br>[pruning/prune_doc_index.py](../../../../sources/naver__splade/pruning/prune_doc_index.py)<br>[pruning/prune_doc_index.sh](../../../../sources/naver__splade/pruning/prune_doc_index.sh) |
| spec | 0 | not obvious |
| eval | 4 | [splade/beir_eval.py](../../../../sources/naver__splade/splade/beir_eval.py)<br>[splade/utils/processing_trec_eval.py](../../../../sources/naver__splade/splade/utils/processing_trec_eval.py)<br>[splade/evaluation/__init__.py](../../../../sources/naver__splade/splade/evaluation/__init__.py)<br>[splade/evaluation/eval.py](../../../../sources/naver__splade/splade/evaluation/eval.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 8 | [README.md](../../../../sources/naver__splade/README.md)<br>[splade/hf/README.md](../../../../sources/naver__splade/splade/hf/README.md)<br>[pruning/README.md](../../../../sources/naver__splade/pruning/README.md)<br>[main_config/two_msmarco/README.md](../../../../sources/naver__splade/main_config/two_msmarco/README.md)<br>[efficient_splade_pisa/README.md](../../../../sources/naver__splade/efficient_splade_pisa/README.md)<br>[conf/README.md](../../../../sources/naver__splade/conf/README.md)<br>[conf/efficient_splade/README.md](../../../../sources/naver__splade/conf/efficient_splade/README.md)<br>[benchmarking_sigir23/README.md](../../../../sources/naver__splade/benchmarking_sigir23/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 4 | [splade/beir_eval.py](../../../../sources/naver__splade/splade/beir_eval.py)<br>[splade/utils/processing_trec_eval.py](../../../../sources/naver__splade/splade/utils/processing_trec_eval.py)<br>[splade/evaluation/__init__.py](../../../../sources/naver__splade/splade/evaluation/__init__.py)<br>[splade/evaluation/eval.py](../../../../sources/naver__splade/splade/evaluation/eval.py) |
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

1. Start from key references: `splade/index.py`, `splade/utils/index_figure.py`, `splade/indexing/inverted_index.py`.
2. Inspect retrieval/memory/indexing through: `splade/index.py`, `splade/utils/index_figure.py`, `splade/indexing/inverted_index.py`.
3. Verify behavior through test/eval files: `splade/beir_eval.py`, `splade/utils/processing_trec_eval.py`, `splade/evaluation/__init__.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 SPLADE sparse neural search SIGIR21, SIGIR22. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
