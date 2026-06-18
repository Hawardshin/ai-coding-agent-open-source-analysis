# OSU-NLP-Group/HippoRAG 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

[NeurIPS'24] HippoRAG is a novel RAG framework inspired by human long-term memory that enables LLMs to continuously integrate knowledge across external documents. RAG + Knowledge Graphs + Personalized PageRank.

## 요약

- 조사 단위: `sources/OSU-NLP-Group__HippoRAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 86 files, 15 directories, depth score 79, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/hipporag/embedding_store.py, src/hipporag/utils/embed_utils.py, src/hipporag/prompts/templates/rag_qa_musique.py이고, 의존성 단서는 openai, pydantic, torch, transformers, vllm, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | OSU-NLP-Group/HippoRAG |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | Python |
| Stars | 3631 |
| Forks | 382 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/OSU-NLP-Group__HippoRAG](../../../../sources/OSU-NLP-Group__HippoRAG) |
| 기존 보고서 | [reports/llm-wiki/repositories/OSU-NLP-Group__HippoRAG.md](../../../llm-wiki/repositories/OSU-NLP-Group__HippoRAG.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 86 / 15 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | images, outputs, reproduce, src |
| 상위 확장자 | .py: 62, .json: 11, .md: 5, .png: 5, (none): 2, .txt: 1 |
| 소스 패턴 | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 22 |
| images | top-level component | 1 |
| outputs | top-level component | 1 |
| reproduce | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers, vllm |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [src/hipporag/embedding_store.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/embedding_store.py) | retrieval signal |
| retrieval | [src/hipporag/utils/embed_utils.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/utils/embed_utils.py) | retrieval signal |
| retrieval | [src/hipporag/prompts/templates/rag_qa_musique.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/prompts/templates/rag_qa_musique.py) | retrieval signal |
| retrieval | [src/hipporag/evaluation/retrieval_eval.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/retrieval_eval.py) | retrieval signal |
| entrypoints | [main.py](../../../../sources/OSU-NLP-Group__HippoRAG/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/OSU-NLP-Group__HippoRAG/README.md) | docs signal |
| docs | [src/hipporag/prompts/templates/README.md](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/prompts/templates/README.md) | docs signal |
| docs | [src/hipporag/evaluation/README.md](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/README.md) | docs signal |
| docs | [reproduce/README.md](../../../../sources/OSU-NLP-Group__HippoRAG/reproduce/README.md) | docs signal |
| eval | [test_transformers.py](../../../../sources/OSU-NLP-Group__HippoRAG/test_transformers.py) | eval signal |
| eval | [tests_azure.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_azure.py) | eval signal |
| eval | [tests_local.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_local.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [main.py](../../../../sources/OSU-NLP-Group__HippoRAG/main.py) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 13 | [src/hipporag/embedding_store.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/embedding_store.py)<br>[src/hipporag/utils/embed_utils.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/utils/embed_utils.py)<br>[src/hipporag/prompts/templates/rag_qa_musique.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/prompts/templates/rag_qa_musique.py)<br>[src/hipporag/evaluation/retrieval_eval.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/retrieval_eval.py)<br>[src/hipporag/embedding_model/__init__.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/embedding_model/__init__.py)<br>[src/hipporag/embedding_model/base.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/embedding_model/base.py)<br>[src/hipporag/embedding_model/Cohere.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/embedding_model/Cohere.py)<br>[src/hipporag/embedding_model/Contriever.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/embedding_model/Contriever.py) |
| spec | 1 | [requirements.txt](../../../../sources/OSU-NLP-Group__HippoRAG/requirements.txt) |
| eval | 10 | [test_transformers.py](../../../../sources/OSU-NLP-Group__HippoRAG/test_transformers.py)<br>[tests_azure.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_azure.py)<br>[tests_local.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_local.py)<br>[tests_openai.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_openai.py)<br>[src/hipporag/utils/eval_utils.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/utils/eval_utils.py)<br>[src/hipporag/evaluation/__init__.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/__init__.py)<br>[src/hipporag/evaluation/base.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/base.py)<br>[src/hipporag/evaluation/qa_eval.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/qa_eval.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 4 | [README.md](../../../../sources/OSU-NLP-Group__HippoRAG/README.md)<br>[src/hipporag/prompts/templates/README.md](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/prompts/templates/README.md)<br>[src/hipporag/evaluation/README.md](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/README.md)<br>[reproduce/README.md](../../../../sources/OSU-NLP-Group__HippoRAG/reproduce/README.md) |
| config | 1 | [requirements.txt](../../../../sources/OSU-NLP-Group__HippoRAG/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 10 | [test_transformers.py](../../../../sources/OSU-NLP-Group__HippoRAG/test_transformers.py)<br>[tests_azure.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_azure.py)<br>[tests_local.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_local.py)<br>[tests_openai.py](../../../../sources/OSU-NLP-Group__HippoRAG/tests_openai.py)<br>[src/hipporag/utils/eval_utils.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/utils/eval_utils.py)<br>[src/hipporag/evaluation/__init__.py](../../../../sources/OSU-NLP-Group__HippoRAG/src/hipporag/evaluation/__init__.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/hipporag/embedding_store.py`, `src/hipporag/utils/embed_utils.py`, `src/hipporag/prompts/templates/rag_qa_musique.py`.
2. entrypoint를 따라 실행 흐름 확인: `main.py`.
3. retrieval/memory/indexing 확인: `src/hipporag/embedding_store.py`, `src/hipporag/utils/embed_utils.py`, `src/hipporag/prompts/templates/rag_qa_musique.py`.
4. test/eval 파일로 동작 검증: `test_transformers.py`, `tests_azure.py`, `tests_local.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 NeurIPS'24 HippoRAG is a novel RAG framework inspired by human long term memory that enables LLMs to continuously integr. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, openai, pydantic이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
