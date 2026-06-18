# KalyanKS-NLP/rag-zero-to-hero-guide 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Comprehensive guide to learn RAG from basics to advanced.

## 요약

- 조사 단위: `sources/KalyanKS-NLP__rag-zero-to-hero-guide` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 32 files, 6 directories, depth score 56, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=RAG Evaluation/rag_eval_intro.md, RAG Evaluation/rag_generator_metrics.md, RAG Evaluation/rag_retriever_metrics.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | KalyanKS-NLP/rag-zero-to-hero-guide |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 1348 |
| Forks | 333 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/KalyanKS-NLP__rag-zero-to-hero-guide](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide) |
| 기존 보고서 | [reports/llm-wiki/repositories/KalyanKS-NLP__rag-zero-to-hero-guide.md](../../../llm-wiki/repositories/KalyanKS-NLP__rag-zero-to-hero-guide.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 32 / 6 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | RAG Basics, RAG Evaluation |
| 상위 확장자 | .gif: 12, .md: 11, .ipynb: 8, (none): 1 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| RAG Basics | top-level component | 1 |
| RAG Evaluation | top-level component | 1 |


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
| retrieval | [RAG Evaluation/rag_eval_intro.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_eval_intro.md) | retrieval signal |
| retrieval | [RAG Evaluation/rag_generator_metrics.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_generator_metrics.md) | retrieval signal |
| retrieval | [RAG Evaluation/rag_retriever_metrics.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_retriever_metrics.md) | retrieval signal |
| retrieval | [RAG Evaluation/notebooks/Hallucination_RAG.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/Hallucination_RAG.ipynb) | retrieval signal |
| docs | [README.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/README.md) | docs signal |
| eval | [RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb) | eval signal |
| eval | [RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb) | eval signal |
| eval | [RAG Evaluation/images/RAG_Evaluation_Metrics.gif](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/images/RAG_Evaluation_Metrics.gif) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 29 | [RAG Evaluation/rag_eval_intro.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_eval_intro.md)<br>[RAG Evaluation/rag_generator_metrics.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_generator_metrics.md)<br>[RAG Evaluation/rag_retriever_metrics.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_retriever_metrics.md)<br>[RAG Evaluation/notebooks/Hallucination_RAG.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/Hallucination_RAG.ipynb)<br>[RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb)<br>[RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb)<br>[RAG Evaluation/images/RAG_Evaluation_Metrics.gif](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/images/RAG_Evaluation_Metrics.gif)<br>[RAG Basics/How_does_RAG_work.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Basics/How_does_RAG_work.md) |
| spec | 2 | [RAG Basics/RAG_Roadmap.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Basics/RAG_Roadmap.md)<br>[RAG Basics/images/RAG_Roadmap.gif](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Basics/images/RAG_Roadmap.gif) |
| eval | 4 | [RAG Evaluation/rag_eval_intro.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_eval_intro.md)<br>[RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb)<br>[RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb)<br>[RAG Evaluation/images/RAG_Evaluation_Metrics.gif](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/images/RAG_Evaluation_Metrics.gif) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 4 | [RAG Evaluation/rag_eval_intro.md](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/rag_eval_intro.md)<br>[RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb)<br>[RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb)<br>[RAG Evaluation/images/RAG_Evaluation_Metrics.gif](../../../../sources/KalyanKS-NLP__rag-zero-to-hero-guide/RAG Evaluation/images/RAG_Evaluation_Metrics.gif) |
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

1. 핵심 참조에서 시작: `RAG Evaluation/rag_eval_intro.md`, `RAG Evaluation/rag_generator_metrics.md`, `RAG Evaluation/rag_retriever_metrics.md`.
2. retrieval/memory/indexing 확인: `RAG Evaluation/rag_eval_intro.md`, `RAG Evaluation/rag_generator_metrics.md`, `RAG Evaluation/rag_retriever_metrics.md`.
3. test/eval 파일로 동작 검증: `RAG Evaluation/rag_eval_intro.md`, `RAG Evaluation/notebooks/RAG_Evaluation_using_DeepEval.ipynb`, `RAG Evaluation/notebooks/RAG_Evaluation_using_RAGAS.ipynb`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Comprehensive guide to learn RAG from basics to advanced.. 핵심 구조 신호는 Jupyter Notebook, README.md, LICENSE, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
