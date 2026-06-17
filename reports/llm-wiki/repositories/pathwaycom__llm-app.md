# pathwaycom/llm-app 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/pathwaycom__llm-app |
| remote | https://github.com/pathwaycom/llm-app |
| HEAD | b8879cc (2026-06-10) Rebranding public repo (#10390) |
| branch | main |
| groups | llm-wiki-100 |
| files | 136 |
| dirs | 37 |
| stack | Python |

## 구조 해석

- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Pathway Live Data Framework AI Pipelines`, `Application Templates`, `How do these AI Pipelines work?`, `Getting started`, `Some visual highlights`, `Do-it-Yourself Videos`, `Troubleshooting`, `Contributing`, `Supported and maintained by`

> <div align="center" Pathway Live Data Framework AI Pipelines <a href="https //trendshift.io/repositories/4400" target=" blank" <img src="https //trendshift.io/api/badge/repositories/4400" alt="pathwaycom%2Fllm app Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </div The Pathway Live Data Framework's AI Pipelines allow you to quickly put in production AI applications that offer high accuracy RAG and AI enterprise search at scale using the most up to date knowledge available in your data sources. It provides you ready to deploy LLM (Large Language Model) App Templates . You can test them on your own machine and deploy on cloud (GCP, AWS, Azure, Render,...) or on premises. The apps connect and sync (all new data additions, deletions, updates) with data sources on your file system, Google Drive, Sharepoint, S3, Kafka, PostgreSQL, real time data APIs . They come wi

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .vscode | dir |
| assets | dir |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| cookbooks | dir |
| LICENSE | file |
| pyproject.toml | file |
| README.md | file |
| setup.cfg | file |
| templates | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| templates/ | 115 |
| .github/ | 7 |
| (root) | 7 |
| assets/ | 4 |
| cookbooks/ | 2 |
| .vscode/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| templates/ | 115 | preferred |
| templates/slides_ai_search/ | 20 | large |
| templates/unstructured_to_sql_on_the_fly/ | 18 | large |
| templates/document_store_mcp_server/ | 17 | large |
| templates/document_indexing/ | 15 | large |
| templates/question_answering_rag/ | 14 | large |
| templates/document_indexing/files-for-indexing/ | 9 | large |
| templates/document_store_mcp_server/files-for-indexing/ | 9 | large |
| templates/multimodal_rag/ | 9 | large |
| templates/drive_alert/ | 8 | large |
| .github/ | 7 | large |
| templates/adaptive_rag/ | 7 | large |
| templates/private_rag/ | 7 | large |
| templates/slides_ai_search/ui/ | 7 | large |
| templates/unstructured_to_sql_on_the_fly/data/ | 7 | large |
| templates/question_answering_rag/ui/ | 6 | large |
| assets/ | 4 | large |
| .github/assets/ | 3 | large |
| .github/ISSUE_TEMPLATE/ | 2 | large |
| cookbooks/ | 2 | large |
| cookbooks/self-rag-agents/ | 2 | large |
| templates/drive_alert/ui/ | 2 | large |
| templates/slides_ai_search/nginx/ | 2 | large |
| templates/unstructured_to_sql_on_the_fly/ui/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `pyproject.toml`
- `templates/adaptive_rag/Dockerfile`
- `templates/adaptive_rag/requirements.txt`
- `templates/document_indexing/Dockerfile`
- `templates/document_indexing/docker-compose.yml`
- `templates/document_indexing/requirements.txt`
- `templates/document_store_mcp_server/Dockerfile`
- `templates/document_store_mcp_server/docker-compose.yml`
- `templates/document_store_mcp_server/requirements.txt`
- `templates/drive_alert/Dockerfile`
- `templates/drive_alert/docker-compose.yml`
- `templates/drive_alert/ui/Dockerfile`
- `templates/multimodal_rag/Dockerfile`
- `templates/multimodal_rag/requirements.txt`
- `templates/private_rag/Dockerfile`
- `templates/private_rag/requirements.txt`
- `templates/question_answering_rag/Dockerfile`
- `templates/question_answering_rag/docker-compose.yml`
- `templates/question_answering_rag/requirements.txt`
- `templates/question_answering_rag/ui/Dockerfile`
- `templates/question_answering_rag/ui/requirements.txt`
- `templates/slides_ai_search/Dockerfile`
- `templates/slides_ai_search/docker-compose.yml`
- `templates/slides_ai_search/nginx/Dockerfile`
- `templates/slides_ai_search/requirements.txt`
- `templates/slides_ai_search/ui/Dockerfile`
- `templates/slides_ai_search/ui/requirements.txt`
- `templates/unstructured_to_sql_on_the_fly/Dockerfile`
- `templates/unstructured_to_sql_on_the_fly/docker-compose.yml`
- `templates/unstructured_to_sql_on_the_fly/requirements.txt`
- `templates/unstructured_to_sql_on_the_fly/ui/Dockerfile`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | llm-app | true | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `templates/adaptive_rag/README.md`
- `templates/document_indexing/README.md`
- `templates/document_store_mcp_server/README.md`
- `templates/drive_alert/README.md`
- `templates/multimodal_rag/README.md`
- `templates/private_rag/README.md`
- `templates/question_answering_rag/README.md`
- `templates/slides_ai_search/README.md`
- `templates/unstructured_to_sql_on_the_fly/README.md`

### 에이전트 지침 후보

- `templates/document_store_mcp_server/.env.example`
- `templates/document_store_mcp_server/Dockerfile`
- `templates/document_store_mcp_server/README.md`
- `templates/document_store_mcp_server/__init__.py`
- `templates/document_store_mcp_server/app.py`
- `templates/document_store_mcp_server/app.yaml`
- `templates/document_store_mcp_server/docker-compose.yml`
- `templates/document_store_mcp_server/files-for-indexing/2023q2-alphabet-earnings-release.pdf`
- `templates/document_store_mcp_server/files-for-indexing/Always up-to-date Vector Data Indexing pipeline _ Pathway.pdf`
- `templates/document_store_mcp_server/files-for-indexing/Build an LLM App _ Pathway.pdf`
- `templates/document_store_mcp_server/files-for-indexing/Launching Pathway + LlamaIndex.pdf`
- `templates/document_store_mcp_server/files-for-indexing/Realtime Classification with Nearest Neighbors (1_2) _ Pathway.pdf`
- `templates/document_store_mcp_server/files-for-indexing/Realtime Twitter Analysis App _ Pathway.pdf`
- `templates/document_store_mcp_server/files-for-indexing/Use LLMs to Ingest Raw Text into DB _ Pathway.pdf`
- `templates/document_store_mcp_server/files-for-indexing/arxiv 2307.13116.pdf`
- `templates/document_store_mcp_server/files-for-indexing/pw.io.http _ Pathway.pdf`
- `templates/document_store_mcp_server/requirements.txt`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `.github/workflows/python-lint.yml`
- `templates/adaptive_rag/Dockerfile`
- `templates/document_indexing/Dockerfile`
- `templates/document_indexing/docker-compose.yml`
- `templates/document_store_mcp_server/Dockerfile`
- `templates/document_store_mcp_server/docker-compose.yml`
- `templates/drive_alert/Dockerfile`
- `templates/drive_alert/docker-compose.yml`
- `templates/drive_alert/ui/Dockerfile`
- `templates/multimodal_rag/Dockerfile`
- `templates/private_rag/Dockerfile`
- `templates/question_answering_rag/Dockerfile`
- `templates/question_answering_rag/docker-compose.yml`
- `templates/question_answering_rag/ui/Dockerfile`
- `templates/slides_ai_search/Dockerfile`
- `templates/slides_ai_search/docker-compose.yml`
- `templates/slides_ai_search/nginx/Dockerfile`
- `templates/slides_ai_search/ui/Dockerfile`
- `templates/unstructured_to_sql_on_the_fly/Dockerfile`
- `templates/unstructured_to_sql_on_the_fly/docker-compose.yml`
- `templates/unstructured_to_sql_on_the_fly/ui/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .pdf | 29 |
| .py | 17 |
| dockerfile | 14 |
| .md | 13 |
| .txt | 10 |
| .png | 9 |
| .yml | 9 |
| .yaml | 7 |
| .example | 5 |
| .gif | 4 |
| .svg | 4 |
| .toml | 3 |
| .gitignore | 2 |
| .ico | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `templates/ 내부 책임 분리`
- `templates/slides_ai_search/ 내부 책임 분리`
- `templates/unstructured_to_sql_on_the_fly/ 내부 책임 분리`
- `templates/document_store_mcp_server/ 내부 책임 분리`
- `templates/document_indexing/ 내부 책임 분리`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `templates/adaptive_rag/Dockerfile 실행 스크립트와 패키지 경계`
- `templates/adaptive_rag/requirements.txt 실행 스크립트와 패키지 경계`
- `templates/document_indexing/Dockerfile 실행 스크립트와 패키지 경계`
- `templates/document_indexing/docker-compose.yml 실행 스크립트와 패키지 경계`

