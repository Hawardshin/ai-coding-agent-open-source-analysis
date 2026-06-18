# pathwaycom/llm-app 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Ready-to-run cloud templates for RAG, AI pipelines, and enterprise search with live data. 🐳Docker-friendly.⚡Always in sync with Sharepoint, Google Drive, S3, Kafka, PostgreSQL, real-time data APIs, and more.

## 요약

- 조사 단위: `sources/pathwaycom__llm-app` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 135 files, 36 directories, depth score 92, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=templates/question_answering_rag/.env.example, templates/question_answering_rag/app.py, templates/question_answering_rag/app.yaml이고, 의존성 단서는 openai, 검증/운영 단서는 CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | pathwaycom/llm-app |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 59331 |
| Forks | 1430 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/pathwaycom__llm-app](../../../../sources/pathwaycom__llm-app) |
| 기존 보고서 | [reports/llm-wiki/repositories/pathwaycom__llm-app.md](../../../llm-wiki/repositories/pathwaycom__llm-app.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 135 / 36 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, assets, cookbooks, templates |
| 상위 확장자 | .pdf: 29, (none): 18, .py: 17, .md: 13, .txt: 10, .png: 9, .yml: 9, .yaml: 7, .example: 5, .gif: 4, .svg: 4, .toml: 3 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| cookbooks | top-level component | 1 |
| templates | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
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
| retrieval | [templates/question_answering_rag/.env.example](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/.env.example) | retrieval signal |
| retrieval | [templates/question_answering_rag/app.py](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/app.py) | retrieval signal |
| retrieval | [templates/question_answering_rag/app.yaml](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/app.yaml) | retrieval signal |
| retrieval | [templates/question_answering_rag/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/docker-compose.yml) | retrieval signal |
| entrypoints | [templates/unstructured_to_sql_on_the_fly/ui/server.py](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/ui/server.py) | entrypoints signal |
| entrypoints | [templates/drive_alert/ui/server.py](../../../../sources/pathwaycom__llm-app/templates/drive_alert/ui/server.py) | entrypoints signal |
| docs | [README.md](../../../../sources/pathwaycom__llm-app/README.md) | docs signal |
| docs | [templates/unstructured_to_sql_on_the_fly/README.md](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/README.md) | docs signal |
| docs | [templates/slides_ai_search/README.md](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/README.md) | docs signal |
| docs | [templates/question_answering_rag/README.md](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/README.md) | docs signal |
| config | [pyproject.toml](../../../../sources/pathwaycom__llm-app/pyproject.toml) | config signal |
| config | [templates/unstructured_to_sql_on_the_fly/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [templates/unstructured_to_sql_on_the_fly/ui/server.py](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/ui/server.py)<br>[templates/drive_alert/ui/server.py](../../../../sources/pathwaycom__llm-app/templates/drive_alert/ui/server.py) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 17 | [templates/document_store_mcp_server/__init__.py](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/__init__.py)<br>[templates/document_store_mcp_server/.env.example](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/.env.example)<br>[templates/document_store_mcp_server/app.py](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/app.py)<br>[templates/document_store_mcp_server/app.yaml](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/app.yaml)<br>[templates/document_store_mcp_server/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/docker-compose.yml)<br>[templates/document_store_mcp_server/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/Dockerfile)<br>[templates/document_store_mcp_server/README.md](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/README.md)<br>[templates/document_store_mcp_server/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/requirements.txt) |
| retrieval | 39 | [templates/question_answering_rag/.env.example](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/.env.example)<br>[templates/question_answering_rag/app.py](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/app.py)<br>[templates/question_answering_rag/app.yaml](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/app.yaml)<br>[templates/question_answering_rag/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/docker-compose.yml)<br>[templates/question_answering_rag/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/Dockerfile)<br>[templates/question_answering_rag/README.md](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/README.md)<br>[templates/question_answering_rag/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/requirements.txt)<br>[templates/question_answering_rag/ui/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/ui/Dockerfile) |
| spec | 10 | [templates/unstructured_to_sql_on_the_fly/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/requirements.txt)<br>[templates/slides_ai_search/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/requirements.txt)<br>[templates/slides_ai_search/ui/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/ui/requirements.txt)<br>[templates/question_answering_rag/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/requirements.txt)<br>[templates/question_answering_rag/ui/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/ui/requirements.txt)<br>[templates/private_rag/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/private_rag/requirements.txt)<br>[templates/multimodal_rag/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/multimodal_rag/requirements.txt)<br>[templates/document_store_mcp_server/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/requirements.txt) |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/python-lint.yml](../../../../sources/pathwaycom__llm-app/.github/workflows/python-lint.yml) |
| container | 20 | [templates/unstructured_to_sql_on_the_fly/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/docker-compose.yml)<br>[templates/unstructured_to_sql_on_the_fly/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/Dockerfile)<br>[templates/unstructured_to_sql_on_the_fly/ui/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/ui/Dockerfile)<br>[templates/slides_ai_search/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/docker-compose.yml)<br>[templates/slides_ai_search/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/Dockerfile)<br>[templates/slides_ai_search/ui/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/ui/Dockerfile)<br>[templates/slides_ai_search/nginx/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/nginx/Dockerfile)<br>[templates/question_answering_rag/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 10 | [README.md](../../../../sources/pathwaycom__llm-app/README.md)<br>[templates/unstructured_to_sql_on_the_fly/README.md](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/README.md)<br>[templates/slides_ai_search/README.md](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/README.md)<br>[templates/question_answering_rag/README.md](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/README.md)<br>[templates/private_rag/README.md](../../../../sources/pathwaycom__llm-app/templates/private_rag/README.md)<br>[templates/multimodal_rag/README.md](../../../../sources/pathwaycom__llm-app/templates/multimodal_rag/README.md)<br>[templates/drive_alert/README.md](../../../../sources/pathwaycom__llm-app/templates/drive_alert/README.md)<br>[templates/document_store_mcp_server/README.md](../../../../sources/pathwaycom__llm-app/templates/document_store_mcp_server/README.md) |
| config | 11 | [pyproject.toml](../../../../sources/pathwaycom__llm-app/pyproject.toml)<br>[templates/unstructured_to_sql_on_the_fly/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/requirements.txt)<br>[templates/slides_ai_search/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/requirements.txt)<br>[templates/slides_ai_search/ui/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/ui/requirements.txt)<br>[templates/question_answering_rag/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/requirements.txt)<br>[templates/question_answering_rag/ui/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/question_answering_rag/ui/requirements.txt)<br>[templates/private_rag/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/private_rag/requirements.txt)<br>[templates/multimodal_rag/requirements.txt](../../../../sources/pathwaycom__llm-app/templates/multimodal_rag/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 1 | [.github/workflows/python-lint.yml](../../../../sources/pathwaycom__llm-app/.github/workflows/python-lint.yml) |
| 컨테이너/배포 | 20 | [templates/unstructured_to_sql_on_the_fly/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/docker-compose.yml)<br>[templates/unstructured_to_sql_on_the_fly/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/Dockerfile)<br>[templates/unstructured_to_sql_on_the_fly/ui/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/unstructured_to_sql_on_the_fly/ui/Dockerfile)<br>[templates/slides_ai_search/docker-compose.yml](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/docker-compose.yml)<br>[templates/slides_ai_search/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/Dockerfile)<br>[templates/slides_ai_search/ui/Dockerfile](../../../../sources/pathwaycom__llm-app/templates/slides_ai_search/ui/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `templates/question_answering_rag/.env.example`, `templates/question_answering_rag/app.py`, `templates/question_answering_rag/app.yaml`.
2. entrypoint를 따라 실행 흐름 확인: `templates/unstructured_to_sql_on_the_fly/ui/server.py`, `templates/drive_alert/ui/server.py`.
3. retrieval/memory/indexing 확인: `templates/question_answering_rag/.env.example`, `templates/question_answering_rag/app.py`, `templates/question_answering_rag/app.yaml`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Ready to run cloud templates for RAG, AI pipelines, and enterprise search with live data. 🐳Docker friendly.⚡Always in s. 핵심 구조 신호는 Jupyter Notebook, pyproject.toml, README.md, LICENSE, openai, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
