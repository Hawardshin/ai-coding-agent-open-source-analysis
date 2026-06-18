# johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

AI Bank Statement Document Automation By LLM model and Personal Finanical Analysis

## 요약

- 조사 단위: `sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 42 files, 20 directories, depth score 63, key references 4개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 config=requirements.txt, backend/requirements.txt이고, 의존성 단서는 openai, langchain, langgraph, express, transformers, vllm, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Jupyter Notebook |
| Stars | 584 |
| Forks | 115 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction) |
| 기존 보고서 | [reports/global-trending/repositories/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction.md](../../../global-trending/repositories/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 42 / 20 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | backend, data, frontend, notebooks, scripts, yolo-base-layout-analysis |
| 상위 확장자 | .ipynb: 7, .sh: 7, .docx: 5, .md: 5, .pdf: 4, .py: 4, (none): 4, .xlsx: 3, .txt: 2, .jpg: 1 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| backend | top-level component | 1 |
| data | top-level component | 1 |
| frontend | top-level component | 1 |
| notebooks | top-level component | 1 |
| scripts | top-level component | 1 |
| yolo-base-layout-analysis | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | langchain, langgraph |
| vectorStores | chroma, faiss |
| modelRuntime | transformers, vllm, ollama, llama |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| config | [requirements.txt](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/requirements.txt) | config signal |
| config | [backend/requirements.txt](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/requirements.txt) | config signal |
| eval | [yolo-base-layout-analysis/test-document/Attention.pdf](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/test-document/Attention.pdf) | eval support |
| eval | [yolo-base-layout-analysis/test-document/yolo.pdf](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/test-document/yolo.pdf) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 5 | [backend/app/skills/crewai_skills_loader.py](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/app/skills/crewai_skills_loader.py)<br>[backend/app/skills/rag-query-handling/SKILL.md](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/app/skills/rag-query-handling/SKILL.md)<br>[backend/app/skills/pii-handling/SKILL.md](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/app/skills/pii-handling/SKILL.md)<br>[backend/app/skills/financial-analysis/SKILL.md](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/app/skills/financial-analysis/SKILL.md)<br>[backend/app/skills/bank-statement-parsing/SKILL.md](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/app/skills/bank-statement-parsing/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [notebooks/multimodal-rag-test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/notebooks/multimodal-rag-test.ipynb)<br>[notebooks/RAG_algorthm_test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/notebooks/RAG_algorthm_test.ipynb)<br>[backend/app/skills/rag-query-handling/SKILL.md](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/app/skills/rag-query-handling/SKILL.md) |
| spec | 3 | [requirements.txt](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/requirements.txt)<br>[scripts/install-requirement.sh](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/scripts/install-requirement.sh)<br>[backend/requirements.txt](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/requirements.txt) |
| eval | 5 | [yolo-base-layout-analysis/test-document/Attention.pdf](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/test-document/Attention.pdf)<br>[yolo-base-layout-analysis/test-document/yolo.pdf](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/test-document/yolo.pdf)<br>[yolo-base-layout-analysis/dev/yolo_test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/dev/yolo_test.ipynb)<br>[notebooks/multimodal-rag-test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/notebooks/multimodal-rag-test.ipynb)<br>[notebooks/RAG_algorthm_test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/notebooks/RAG_algorthm_test.ipynb) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/README.md) |
| config | 2 | [requirements.txt](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/requirements.txt)<br>[backend/requirements.txt](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/backend/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 5 | [yolo-base-layout-analysis/test-document/Attention.pdf](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/test-document/Attention.pdf)<br>[yolo-base-layout-analysis/test-document/yolo.pdf](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/test-document/yolo.pdf)<br>[yolo-base-layout-analysis/dev/yolo_test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/yolo-base-layout-analysis/dev/yolo_test.ipynb)<br>[notebooks/multimodal-rag-test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/notebooks/multimodal-rag-test.ipynb)<br>[notebooks/RAG_algorthm_test.ipynb](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction/notebooks/RAG_algorthm_test.ipynb) |
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
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `requirements.txt`, `backend/requirements.txt`, `yolo-base-layout-analysis/test-document/Attention.pdf`.
2. agent/tool runtime 매핑: `backend/app/skills/crewai_skills_loader.py`, `backend/app/skills/rag-query-handling/SKILL.md`, `backend/app/skills/pii-handling/SKILL.md`.
3. retrieval/memory/indexing 확인: `notebooks/multimodal-rag-test.ipynb`, `notebooks/RAG_algorthm_test.ipynb`, `backend/app/skills/rag-query-handling/SKILL.md`.
4. test/eval 파일로 동작 검증: `yolo-base-layout-analysis/test-document/Attention.pdf`, `yolo-base-layout-analysis/test-document/yolo.pdf`, `yolo-base-layout-analysis/dev/yolo_test.ipynb`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 AI Bank Statement Document Automation By LLM model and Personal Finanical Analysis. 핵심 구조 신호는 Jupyter Notebook, requirements.txt, README.md, LICENSE, openai, langchain이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
