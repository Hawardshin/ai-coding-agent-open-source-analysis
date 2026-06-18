# NirDiamant/RAG_Techniques 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

This repository showcases various advanced techniques for Retrieval-Augmented Generation (RAG) systems. Each technique has a detailed notebook tutorial.

## 요약

- 조사 단위: `sources/NirDiamant__RAG_Techniques` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 122 files, 8 directories, depth score 64, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | NirDiamant/RAG_Techniques |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 28014 |
| Forks | 3389 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/NirDiamant__RAG_Techniques](../../../../sources/NirDiamant__RAG_Techniques) |
| 기존 보고서 | [reports/global-trending/repositories/NirDiamant__RAG_Techniques.md](../../../global-trending/repositories/NirDiamant__RAG_Techniques.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 122 / 8 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, all_rag_techniques, all_rag_techniques_runnable_scripts, data, evaluation, images, tests |
| 상위 확장자 | .ipynb: 42, .svg: 29, .py: 23, .png: 14, .json: 3, .yml: 3, .csv: 2, .md: 2, (none): 2, .pdf: 1, .txt: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 3 |
| .github | ci surface | 1 |
| all_rag_techniques | top-level component | 1 |
| all_rag_techniques_runnable_scripts | top-level component | 1 |
| data | top-level component | 1 |
| evaluation | top-level component | 1 |
| images | top-level component | 1 |


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
| docs | [README.md](../../../../sources/NirDiamant__RAG_Techniques/README.md) | docs signal |
| eval | [tests/conftest.py](../../../../sources/NirDiamant__RAG_Techniques/tests/conftest.py) | eval signal |
| eval | [tests/test_imports.py](../../../../sources/NirDiamant__RAG_Techniques/tests/test_imports.py) | eval signal |
| eval | [evaluation/define_evaluation_metrics.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/define_evaluation_metrics.ipynb) | eval signal |
| eval | [evaluation/end-2-end_rag_evaluation.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/end-2-end_rag_evaluation.ipynb) | eval signal |
| ci | [.github/workflows/github-test.yml](../../../../sources/NirDiamant__RAG_Techniques/.github/workflows/github-test.yml) | ci support |
| ci | [.github/workflows/local-test.yml](../../../../sources/NirDiamant__RAG_Techniques/.github/workflows/local-test.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 4 | [images/context_enrichment_window.svg](../../../../sources/NirDiamant__RAG_Techniques/images/context_enrichment_window.svg)<br>[all_rag_techniques_runnable_scripts/context_enrichment_window_around_chunk.py](../../../../sources/NirDiamant__RAG_Techniques/all_rag_techniques_runnable_scripts/context_enrichment_window_around_chunk.py)<br>[all_rag_techniques/context_enrichment_window_around_chunk_with_llamaindex.ipynb](../../../../sources/NirDiamant__RAG_Techniques/all_rag_techniques/context_enrichment_window_around_chunk_with_llamaindex.ipynb)<br>[all_rag_techniques/context_enrichment_window_around_chunk.ipynb](../../../../sources/NirDiamant__RAG_Techniques/all_rag_techniques/context_enrichment_window_around_chunk.ipynb) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 73 | [images/adaptive_retrieval.svg](../../../../sources/NirDiamant__RAG_Techniques/images/adaptive_retrieval.svg)<br>[images/contextual_chunk_headers.svg](../../../../sources/NirDiamant__RAG_Techniques/images/contextual_chunk_headers.svg)<br>[images/fusion_retrieval.svg](../../../../sources/NirDiamant__RAG_Techniques/images/fusion_retrieval.svg)<br>[images/graph_rag_with_milvus_1.png](../../../../sources/NirDiamant__RAG_Techniques/images/graph_rag_with_milvus_1.png)<br>[images/graph_rag_with_milvus_2.png](../../../../sources/NirDiamant__RAG_Techniques/images/graph_rag_with_milvus_2.png)<br>[images/graph_rag.svg](../../../../sources/NirDiamant__RAG_Techniques/images/graph_rag.svg)<br>[images/Microsoft_GraphRag.svg](../../../../sources/NirDiamant__RAG_Techniques/images/Microsoft_GraphRag.svg)<br>[images/multi_model_rag_with_captioning.svg](../../../../sources/NirDiamant__RAG_Techniques/images/multi_model_rag_with_captioning.svg) |
| spec | 0 | 명확하지 않음 |
| eval | 10 | [tests/conftest.py](../../../../sources/NirDiamant__RAG_Techniques/tests/conftest.py)<br>[tests/test_imports.py](../../../../sources/NirDiamant__RAG_Techniques/tests/test_imports.py)<br>[evaluation/define_evaluation_metrics.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/define_evaluation_metrics.ipynb)<br>[evaluation/end-2-end_rag_evaluation.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/end-2-end_rag_evaluation.ipynb)<br>[evaluation/evaluation_deep_eval.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/evaluation_deep_eval.ipynb)<br>[evaluation/evaluation_grouse.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/evaluation_grouse.ipynb)<br>[evaluation/evalute_rag.py](../../../../sources/NirDiamant__RAG_Techniques/evaluation/evalute_rag.py)<br>[evaluation/open-rag-eval-example.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/open-rag-eval-example.ipynb) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/github-test.yml](../../../../sources/NirDiamant__RAG_Techniques/.github/workflows/github-test.yml)<br>[.github/workflows/local-test.yml](../../../../sources/NirDiamant__RAG_Techniques/.github/workflows/local-test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/NirDiamant__RAG_Techniques/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 10 | [tests/conftest.py](../../../../sources/NirDiamant__RAG_Techniques/tests/conftest.py)<br>[tests/test_imports.py](../../../../sources/NirDiamant__RAG_Techniques/tests/test_imports.py)<br>[evaluation/define_evaluation_metrics.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/define_evaluation_metrics.ipynb)<br>[evaluation/end-2-end_rag_evaluation.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/end-2-end_rag_evaluation.ipynb)<br>[evaluation/evaluation_deep_eval.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/evaluation_deep_eval.ipynb)<br>[evaluation/evaluation_grouse.ipynb](../../../../sources/NirDiamant__RAG_Techniques/evaluation/evaluation_grouse.ipynb) |
| CI workflow | 2 | [.github/workflows/github-test.yml](../../../../sources/NirDiamant__RAG_Techniques/.github/workflows/github-test.yml)<br>[.github/workflows/local-test.yml](../../../../sources/NirDiamant__RAG_Techniques/.github/workflows/local-test.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `README.md`, `tests/conftest.py`, `tests/test_imports.py`.
2. agent/tool runtime 매핑: `images/context_enrichment_window.svg`, `all_rag_techniques_runnable_scripts/context_enrichment_window_around_chunk.py`, `all_rag_techniques/context_enrichment_window_around_chunk_with_llamaindex.ipynb`.
3. retrieval/memory/indexing 확인: `images/adaptive_retrieval.svg`, `images/contextual_chunk_headers.svg`, `images/fusion_retrieval.svg`.
4. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/test_imports.py`, `evaluation/define_evaluation_metrics.ipynb`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 This repository showcases various advanced techniques for Retrieval Augmented Generation RAG systems. Each technique has. 핵심 구조 신호는 Jupyter Notebook, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
