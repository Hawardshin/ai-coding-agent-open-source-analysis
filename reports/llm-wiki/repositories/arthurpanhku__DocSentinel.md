# arthurpanhku/DocSentinel 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/arthurpanhku__DocSentinel |
| remote | https://github.com/arthurpanhku/DocSentinel |
| HEAD | ce2fde4 (2026-06-10) docs: add secure development guidance |
| branch | main |
| groups | llm-wiki-100 |
| files | 136 |
| dirs | 28 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `What is DocSentinel?`, `Why DocSentinel?`, `Architecture`, `Core Capabilities`, `SSDLC Full Lifecycle Coverage`, `Automated Security Assessment`, `Intelligent Agent Orchestration (LangGraph)`, `RAG-Powered Knowledge Base`, `LangGraph Agent Orchestration`, `API-First & MCP Ready`, `Agent Integration (MCP)`, `What can it do?`, `Configuration Guide`, `Quick Start`, `Option A: One-Click Deployment (Recommended)`, `Option B: Manual Setup`, `React Console`, `Example: Submit an SSDLC assessment`

> <div align="center" English 简体中文 日本語 한국어 Français Deutsch Русский </div <p align="center" <img src="docs/images/docsentinel mascot.png" width="200" alt="DocSentinel mascot"/ </p <p align="center" <strong DocSentinel</strong <br/ <em AI powered SSDLC platform — Secure your software from requirements to operations</em </p <p align="center" <a href="https //github.com/arthurpanhku/DocSentinel/releases" <img src="https //img.shields.io/github/v/release/arthurpanhku/DocSentinel?include prereleases" alt="Latest release"/ </a <a href="https //github.com/arthurpanhku/DocSentinel/blob/main/LICENSE" <img src="https //img.shields.io/badge/License MIT yellow.svg" alt="License MIT"/ </a <a href="https //www.python.org/downloads/" <img src="https //img.shields.io/badge/python 3.10+ blue.svg" alt="Python 3.10+"/ </a <a href="https //github.com/arthurpanhku/DocSentinel" <img src="https //img.shields.io/

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| app | dir |
| ARCHITECTURE.md | file |
| CHANGELOG.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING_WITH_AI.md | file |
| CONTRIBUTING.md | file |
| deploy.sh | file |
| docker-compose.ollama.yml | file |
| docker-compose.yml | file |
| Dockerfile | file |
| docs | dir |
| docsentinel_architecture.png | file |
| examples | dir |
| frontend | dir |
| glama.json | file |
| LICENSE | file |
| Makefile | file |
| pyproject.toml | file |
| README_de.md | file |
| README_fr.md | file |
| README_ja.md | file |
| README_ko.md | file |
| README_ru.md | file |
| README_zh.md | file |
| README.md | file |
| requirements-dev.txt | file |
| requirements.txt | file |
| scripts | dir |
| SECURITY.md | file |
| SPEC.md | file |
| test_integration.sh | file |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| app/ | 32 |
| (root) | 30 |
| docs/ | 22 |
| frontend/ | 22 |
| tests/ | 12 |
| examples/ | 8 |
| .github/ | 6 |
| scripts/ | 4 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| app/ | 32 | preferred |
| frontend/ | 22 | preferred |
| docs/ | 22 | preferred |
| examples/ | 8 | preferred |
| tests/ | 12 | preferred |
| scripts/ | 4 | preferred |
| frontend/src/ | 14 | large |
| .github/ | 6 | large |
| app/core/ | 6 | large |
| app/models/ | 6 | large |
| docs/images/ | 6 | large |
| app/api/ | 5 | large |
| frontend/src/pages/ | 5 | large |
| app/agent/ | 4 | large |
| .github/ISSUE_TEMPLATE/ | 3 | large |
| app/kb/ | 3 | large |
| examples/templates/ | 3 | large |
| frontend/src/components/ | 3 | large |
| app/llm/ | 2 | large |
| app/parser/ | 2 | large |
| frontend/src/lib/ | 2 | large |
| .github/workflows/ | 1 | large |
| app/integrations/ | 1 | large |
| docs/blog/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `docker-compose.yml`
- `frontend/package.json`
- `frontend/tsconfig.json`
- `frontend/vite.config.ts`
- `pyproject.toml`
- `requirements.txt`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| frontend/package.json | docsentinel-console | dev, build, preview | clsx, lucide-react, react, react-dom, react-router-dom |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | docsentinel | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/01-architecture-and-tech-stack.md`
- `docs/02-api-specification.yaml`
- `docs/03-assessment-report-and-skill-contract.md`
- `docs/04-integration-guide.md`
- `docs/05-deployment-runbook.md`
- `docs/06-agent-integration.md`
- `docs/AWESOME-LIST-SUBMISSIONS.md`
- `docs/DEMO-RECORD.md`
- `docs/LAUNCH-CHECKLIST.md`
- `docs/MARKETING-CHECKLIST.md`
- `docs/README.md`
- `docs/RELEASE-v0.1.0.md`
- `docs/blog/README.md`
- `docs/demo.html`
- `docs/images/architecture-overview.png`
- `docs/images/demo-assessment.gif`
- `docs/images/docsentinel-architect.png`
- `docs/images/docsentinel-mascot.png`
- `docs/images/react-console-dashboard.png`
- `docs/images/social-preview.png`
- `docs/review-console.html`
- `docs/schemas/assessment-report.json`
- `examples/README.md`

### 에이전트 지침 후보

- `.github/ISSUE_TEMPLATE/new_skill_template.md`
- `app/agent/skills_registry.py`
- `app/agent/skills_service.py`
- `app/api/skills.py`
- `app/mcp_server.py`
- `app/models/skill.py`
- `docs/03-assessment-report-and-skill-contract.md`
- `examples/templates/architecture_review/skill.json`
- `examples/templates/soc2_type2/skill.json`
- `examples/templates/supplier_review/skill.json`
- `tests/test_mcp_server.py`
- `tests/test_skills_api.py`

### 스펙/템플릿/명령/스킬 후보

- `examples/templates/architecture_review/skill.json`
- `examples/templates/soc2_type2/skill.json`
- `examples/templates/supplier_review/skill.json`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/conftest.py`
- `tests/test_assessments_api.py`
- `tests/test_document_access.py`
- `tests/test_graph_rag.py`
- `tests/test_health.py`
- `tests/test_kb_history.py`
- `tests/test_mcp_server.py`
- `tests/test_orchestrator.py`
- `tests/test_parser.py`
- `tests/test_parser_docling.py`
- `tests/test_skills_api.py`

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `Dockerfile`
- `docker-compose.ollama.yml`
- `docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 47 |
| .md | 32 |
| .tsx | 10 |
| .json | 9 |
| .png | 6 |
| .ts | 5 |
| .txt | 4 |
| .html | 3 |
| .sh | 3 |
| .yml | 3 |
| .pdf | 2 |
| .yaml | 2 |
| .css | 1 |
| .dockerignore | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `app/ 내부 책임 분리`
- `frontend/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `examples/templates/architecture_review/skill.json 스펙/명령 의미`
- `examples/templates/soc2_type2/skill.json 스펙/명령 의미`
- `examples/templates/supplier_review/skill.json 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `frontend/package.json 실행 스크립트와 패키지 경계`
- `frontend/tsconfig.json 실행 스크립트와 패키지 경계`
- `frontend/vite.config.ts 실행 스크립트와 패키지 경계`

