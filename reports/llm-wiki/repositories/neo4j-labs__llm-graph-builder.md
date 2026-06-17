# neo4j-labs/llm-graph-builder 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/neo4j-labs__llm-graph-builder |
| remote | https://github.com/neo4j-labs/llm-graph-builder |
| HEAD | 4a412f4 (2026-06-10) Staging to main (#1534) |
| branch | main |
| groups | llm-wiki-100 |
| files | 354 |
| dirs | 65 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Knowledge Graph Builder`, `Getting Started`, `**Prerequisites**`, `Key Features`, `**Knowledge Graph Creation**`, `**Schema Support**`, `**Graph Visualization**`, `**Chat with Data**`, `**LLMs Supported**`, `**Token Usage Tracking**`, `**Embedding Model Selection**`, `Getting Started`, `**Prerequisites**`, `Deployment Options`, `**Local Deployment**`, `**Running Backend and Frontend Separately**`, `**Cloud Deployment**`, `For local llms (Ollama)`

> Knowledge Graph Builder Transform unstructured data (PDFs, DOCs, TXTs, YouTube videos, web pages, etc.) into a structured Knowledge Graph stored in Neo4j using the power of Large Language Models (LLMs) and the LangChain framework. This application allows you to upload files from various sources (local machine, GCS, S3 bucket, or web sources), choose your preferred LLM model, and generate a Knowledge Graph. Getting Started Prerequisites Python 3.12 or higher (for local/separate backend deployment) Neo4j Database 5.23 or later with APOC installed. Neo4j 5.23 is required because the backend uses the Cypher variable scope subquery syntax ( CALL (variable) { ... } ), which is not supported by earlier Neo4j 5.x releases such as 5.20. Neo4j Aura databases (including the free tier) are supported. If using Neo4j Desktop , you will need to deploy the backend and frontend separately (docker compose

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| backend | dir |
| cronjob | dir |
| data | dir |
| docker-compose.yml | file |
| docs | dir |
| experiments | dir |
| frontend | dir |
| LICENSE | file |
| POC_Documents | dir |
| POC_Experiments | dir |
| README.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| frontend/ | 210 |
| docs/ | 64 |
| backend/ | 38 |
| experiments/ | 20 |
| cronjob/ | 6 |
| POC_Documents/ | 5 |
| (root) | 4 |
| .github/ | 3 |
| data/ | 3 |
| POC_Experiments/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| frontend/ | 210 | preferred |
| backend/ | 38 | preferred |
| docs/ | 64 | preferred |
| frontend/src/ | 182 | large |
| frontend/src/components/ | 96 | large |
| docs/frontend/ | 61 | large |
| docs/frontend/images/ | 60 | large |
| frontend/src/assets/ | 29 | large |
| backend/src/ | 28 | large |
| frontend/src/services/ | 27 | large |
| experiments/ | 20 | large |
| frontend/src/utils/ | 8 | large |
| backend/src/document_sources/ | 6 | large |
| cronjob/ | 6 | large |
| frontend/public/ | 6 | large |
| POC_Documents/ | 5 | large |
| POC_Documents/V1/ | 5 | large |
| frontend/src/context/ | 5 | large |
| backend/src/shared/ | 4 | large |
| frontend/public/favicons/ | 4 | large |
| frontend/src/hooks/ | 4 | large |
| .github/ | 3 | large |
| backend/src/entities/ | 3 | large |
| cronjob/reset_daily_tokens/ | 3 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `backend/Dockerfile`
- `backend/requirements.txt`
- `cronjob/reset_daily_tokens/requirements.txt`
- `cronjob/reset_monthly_tokens/requirements.txt`
- `docker-compose.yml`
- `frontend/Dockerfile`
- `frontend/package.json`
- `frontend/tsconfig.json`
- `frontend/vite.config.ts`
- `frontend/yarn.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| frontend/package.json | neo4j-llm-graph-builder | dev, build, format, lint, preview, lint-staged, postinstall | @auth0/auth0-react, @emotion/styled, @mui/material, @mui/styled-engine, @neo4j-devtools/word-color, @neo4j-ndl/base, @neo4j-ndl/react, @neo4j-nvl/base, @neo4j-nvl/react, @react-oauth/google, @tanstack/react-table, @types/uuid, axios, clsx |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `backend/README.md`
- `data/README.md`
- `docs/backend/backend_docs.adoc`
- `docs/frontend/frontend_docs.adoc`
- `docs/frontend/images/AdditionalMetricEval.jpg`
- `docs/frontend/images/AllFilesGraph.jpg`
- `docs/frontend/images/AuraDBConnection.jpg`
- `docs/frontend/images/ChatBotModalView.jpg`
- `docs/frontend/images/ChatBotNewURL.jpg`
- `docs/frontend/images/ChatBotSideView.jpg`
- `docs/frontend/images/ChatModesDev.jpg`
- `docs/frontend/images/ChatModesProd.jpg`
- `docs/frontend/images/ChunksInfo.jpg`
- `docs/frontend/images/ClearChatHistory.jpg`
- `docs/frontend/images/CommunitiesGraph.jpg`
- `docs/frontend/images/CompletedReadyToReprocess.jpg`
- `docs/frontend/images/ConnectionModal.jpg`
- `docs/frontend/images/CopyFileData.jpg`
- `docs/frontend/images/DarkMode.jpg`
- `docs/frontend/images/DeleteFiles.jpg`
- `docs/frontend/images/DeleteOrphanNodes.jpg`
- `docs/frontend/images/DocChunkGraph.jpg`
- `docs/frontend/images/DownLoadConversation.jpg`
- `docs/frontend/images/Dropdown.jpg`
- `docs/frontend/images/EmbeddingModel.jpg`
- `docs/frontend/images/EmbeddingModelDropdown.jpg`
- `docs/frontend/images/EntitiesGraph.jpg`
- `docs/frontend/images/EntitiesInfo.jpg`
- `docs/frontend/images/EntityExtraction.jpg`
- `docs/frontend/images/ExistingSchema.jpg`
- `docs/frontend/images/FailedReadyToReprocess.jpg`
- `docs/frontend/images/FileNodes.jpg`
- `docs/frontend/images/FileRelationships.jpg`
- `docs/frontend/images/FileStatus.jpg`
- `docs/frontend/images/GCSbucketFiles.jpg`
- `docs/frontend/images/Gcloud_auth.jpg`
- `docs/frontend/images/GenerateGraph.jpg`
- `docs/frontend/images/GetDuplicateNodes.jpg`
- `docs/frontend/images/GitHubIssues.jpg`
- `docs/frontend/images/GraphActions.jpg`
- `docs/frontend/images/GraphDBConnection.jpg`
- `docs/frontend/images/GraphEnhancements.jpg`
- `docs/frontend/images/LLMGraphBuilderDocumentation.jpg`
- `docs/frontend/images/LightMode.jpg`
- `docs/frontend/images/MergeDuplicateEntities.jpg`
- `docs/frontend/images/MetricEval.jpg`
- `docs/frontend/images/NeighbourNodeDisconnected.jpg`
- `docs/frontend/images/NoConnection.jpg`
- `docs/frontend/images/PostProcessingDB.jpg`
- ... 19 more

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `backend/Dockerfile`
- `docker-compose.yml`
- `frontend/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .tsx | 110 |
| .jpg | 62 |
| .ts | 39 |
| .py | 36 |
| .svg | 23 |
| .ipynb | 14 |
| .json | 10 |
| .png | 10 |
| .md | 7 |
| .adoc | 3 |
| .css | 3 |
| .txt | 3 |
| .conf | 2 |
| .csv | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `frontend/ 내부 책임 분리`
- `backend/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `frontend/src/ 내부 책임 분리`
- `frontend/src/components/ 내부 책임 분리`
- `backend/Dockerfile 실행 스크립트와 패키지 경계`
- `backend/requirements.txt 실행 스크립트와 패키지 경계`
- `cronjob/reset_daily_tokens/requirements.txt 실행 스크립트와 패키지 경계`
- `cronjob/reset_monthly_tokens/requirements.txt 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`

