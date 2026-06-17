# phonghhd/EvoNet-AI-Core 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/phonghhd__EvoNet-AI-Core |
| remote | https://github.com/phonghhd/EvoNet-AI-Core |
| HEAD | 3e3c71e (2026-06-17) Auto-update: CVE + PoC + Patch data |
| branch | main |
| groups | llm-wiki-100 |
| files | 79 |
| dirs | 18 |
| stack | Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Features`, `Multi-Tier AI Routing (4-Layer Failover)`, `Graph RAG (Knowledge Graph + Vector Retrieval)`, `MITRE ATT&CK Integration`, `EPSS Scoring`, `Reinforcement Learning Defense Agent`, `Federated Learning`, `Proactive Defense`, `Production Infrastructure`, `CI/CD & Interactivity`, `Quick Start`, `Docker (Recommended)`, `Edit .env with your API keys`, `Local Development`, `CLI`, `Telegram Commands`, `Architecture`, `Project Structure`

> <div align="center" <img src="https //capsule render.vercel.app/api?type=rect&color=0 000000,100 002200&height=200&section=header&text=EVONET%20CORE&fontSize=60&fontColor=00ff00&desc=Autonomous%20AI%20Security%20Agent&descSize=20&descAlignY=70" alt="EvoNet Banner" EvoNet Core Autonomous AI Security Agent Self Learning Security System with Multi Tier LLM Routing, Graph RAG, RL Defense, and MITRE ATT&CK Integration </div EvoNet Core is an autonomous AI security agent that continuously harvests CVE data, analyzes vulnerabilities, and generates defensive code. It combines 4 tier AI failover , Knowledge Graph + Vector RAG , Reinforcement Learning defense optimization , MITRE ATT&CK mapping , EPSS scoring , and human in the loop approval into a unified security platform. Features Multi Tier AI Routing (4 Layer Failover) NVIDIA NIM → Groq → Cloudflare AI → Local Ollama — zero downtime during ra

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| .vscode | dir |
| api_server.py | file |
| app | dir |
| data | dir |
| docker-compose.yml | file |
| Dockerfile.optimized | file |
| docs | dir |
| LICENSE.md | file |
| models | dir |
| pyrightconfig.json | file |
| README.md | file |
| requirements.txt | file |
| start_complete_system.py | file |
| tests | dir |
| workspace | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| app/ | 55 |
| (root) | 10 |
| workspace/ | 4 |
| docs/ | 3 |
| .github/ | 2 |
| tests/ | 2 |
| .vscode/ | 1 |
| data/ | 1 |
| models/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| app/ | 55 | preferred |
| docs/ | 3 | preferred |
| tests/ | 2 | preferred |
| app/scripts/ | 40 | large |
| workspace/ | 4 | large |
| app/federated_learning/ | 3 | large |
| app/scripts/brain/ | 3 | large |
| .github/ | 2 | large |
| .github/workflows/ | 2 | large |
| app/rl_environment/ | 2 | large |
| app/scripts/utils/ | 2 | large |
| .vscode/ | 1 | large |
| app/templates/ | 1 | large |
| app/web/ | 1 | large |
| app/web/templates/ | 1 | large |
| data/ | 1 | large |
| models/ | 1 | large |
| workspace/test/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docker-compose.yml`
- `requirements.txt`

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/API.md`
- `docs/ARCHITECTURE.md`
- `docs/DEPLOYMENT.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

- `app/templates/dashboard.html`
- `app/web/templates/dashboard.html`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/test_core.py`
- `workspace/test/vulnerable_app.py`

### CI/Docker 후보

- `.github/workflows/cve_crawler.yml`
- `.github/workflows/knowledge_builder.yml`
- `docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 61 |
| .md | 5 |
| .json | 4 |
| .yml | 3 |
| .html | 2 |
| .example | 1 |
| .gitignore | 1 |
| .optimized | 1 |
| .txt | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `app/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `app/scripts/ 내부 책임 분리`
- `workspace/ 내부 책임 분리`
- `app/templates/dashboard.html 스펙/명령 의미`
- `app/web/templates/dashboard.html 스펙/명령 의미`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `requirements.txt 실행 스크립트와 패키지 경계`

