# naver/splade 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

SPLADE: sparse neural search (SIGIR21, SIGIR22)

## 요약

- 조사 단위: `sources/naver__splade` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 177 files, 46 directories, depth score 64, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=splade/index.py, splade/utils/index_figure.py, splade/indexing/inverted_index.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | naver/splade |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 994 |
| Forks | 96 |
| License | NOASSERTION |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__splade](../../../../sources/naver__splade) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__splade.md](../../../korea-trending/repositories/naver__splade.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 177 / 46 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | benchmarking_sigir23, conf, data, efficient_splade_pisa, images, main_config, pruning, splade |
| 상위 확장자 | .yaml: 90, .py: 55, .sh: 10, .md: 8, .tsv: 5, (none): 3, .json: 2, .gz: 1, .ipynb: 1, .png: 1, .yml: 1 |
| 소스 패턴 | retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| benchmarking_sigir23 | validation surface | 1 |
| conf | top-level component | 1 |
| data | top-level component | 1 |
| efficient_splade_pisa | ci surface | 1 |
| images | top-level component | 1 |
| main_config | top-level component | 1 |
| pruning | top-level component | 1 |
| splade | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 11 | [splade/index.py](../../../../sources/naver__splade/splade/index.py)<br>[splade/utils/index_figure.py](../../../../sources/naver__splade/splade/utils/index_figure.py)<br>[splade/indexing/inverted_index.py](../../../../sources/naver__splade/splade/indexing/inverted_index.py)<br>[pruning/index_all.sh](../../../../sources/naver__splade/pruning/index_all.sh)<br>[pruning/index.sh](../../../../sources/naver__splade/pruning/index.sh)<br>[pruning/prune_doc_index_all.sh](../../../../sources/naver__splade/pruning/prune_doc_index_all.sh)<br>[pruning/prune_doc_index.py](../../../../sources/naver__splade/pruning/prune_doc_index.py)<br>[pruning/prune_doc_index.sh](../../../../sources/naver__splade/pruning/prune_doc_index.sh) |
| spec | 0 | 명확하지 않음 |
| eval | 4 | [splade/beir_eval.py](../../../../sources/naver__splade/splade/beir_eval.py)<br>[splade/utils/processing_trec_eval.py](../../../../sources/naver__splade/splade/utils/processing_trec_eval.py)<br>[splade/evaluation/__init__.py](../../../../sources/naver__splade/splade/evaluation/__init__.py)<br>[splade/evaluation/eval.py](../../../../sources/naver__splade/splade/evaluation/eval.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 8 | [README.md](../../../../sources/naver__splade/README.md)<br>[splade/hf/README.md](../../../../sources/naver__splade/splade/hf/README.md)<br>[pruning/README.md](../../../../sources/naver__splade/pruning/README.md)<br>[main_config/two_msmarco/README.md](../../../../sources/naver__splade/main_config/two_msmarco/README.md)<br>[efficient_splade_pisa/README.md](../../../../sources/naver__splade/efficient_splade_pisa/README.md)<br>[conf/README.md](../../../../sources/naver__splade/conf/README.md)<br>[conf/efficient_splade/README.md](../../../../sources/naver__splade/conf/efficient_splade/README.md)<br>[benchmarking_sigir23/README.md](../../../../sources/naver__splade/benchmarking_sigir23/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 4 | [splade/beir_eval.py](../../../../sources/naver__splade/splade/beir_eval.py)<br>[splade/utils/processing_trec_eval.py](../../../../sources/naver__splade/splade/utils/processing_trec_eval.py)<br>[splade/evaluation/__init__.py](../../../../sources/naver__splade/splade/evaluation/__init__.py)<br>[splade/evaluation/eval.py](../../../../sources/naver__splade/splade/evaluation/eval.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `splade/index.py`, `splade/utils/index_figure.py`, `splade/indexing/inverted_index.py`.
2. retrieval/memory/indexing 확인: `splade/index.py`, `splade/utils/index_figure.py`, `splade/indexing/inverted_index.py`.
3. test/eval 파일로 동작 검증: `splade/beir_eval.py`, `splade/utils/processing_trec_eval.py`, `splade/evaluation/__init__.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 SPLADE sparse neural search SIGIR21, SIGIR22. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
