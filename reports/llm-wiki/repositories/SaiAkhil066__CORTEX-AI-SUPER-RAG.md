# SaiAkhil066/CORTEX-AI-SUPER-RAG 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/SaiAkhil066__CORTEX-AI-SUPER-RAG |
| remote | https://github.com/SaiAkhil066/CORTEX-AI-SUPER-RAG |
| HEAD | fba31cb (2026-06-17) feat: Cortex RAG — full 2026 Advanced RAG stack + Neural Observatory UI |
| branch | main |
| groups | llm-wiki-100 |
| files | 18 |
| dirs | 3 |
| stack | Python |

## 구조 해석

- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`

> <p align="center" <img src="assets/banner.svg" alt="Cortex RAG — Agentic Retrieval Engine 2026" width="100%"/ </p <br/ <p align="center" <img src="assets/demo.svg" alt="Cortex RAG in action" width="92%"/ </p <p align="center" <sub ↑ &nbsp; what actually happens every time you send a message</sub </p <br/ <p align="center" <img src="https //img.shields.io/badge/Python 3.10+ 3776ab?style=flat square&logo=python&logoColor=white"/ &nbsp; <img src="https //img.shields.io/badge/Streamlit 1.30 ff4b4b?style=flat square&logo=streamlit&logoColor=white"/ &nbsp; <img src="https //img.shields.io/badge/Ollama local LLM ffb347?style=flat square"/ &nbsp; <img src="https //img.shields.io/badge/RAG 9 techniques 8b7bff?style=flat square"/ &nbsp; <img src="https //img.shields.io/badge/zero cloud 2dd4bf?style=flat square"/ &nbsp; <img src="https //img.shields.io/github/stars/SaiAkhil066/DeepSeek RAG Chatbot?

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .env | file |
| .gitignore | file |
| .streamlit | dir |
| app.py | file |
| assets | dir |
| docker-compose.yml | file |
| Dockerfile | file |
| install.sh | file |
| LICENSE | file |
| README.md | file |
| requirements.txt | file |
| utils | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| (root) | 9 |
| assets/ | 4 |
| utils/ | 4 |
| .streamlit/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| assets/ | 4 | large |
| utils/ | 4 | large |
| .streamlit/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `docker-compose.yml`
- `requirements.txt`

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `Dockerfile`
- `docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 5 |
| .svg | 4 |
| .env | 1 |
| .gitignore | 1 |
| .md | 1 |
| .sh | 1 |
| .toml | 1 |
| .txt | 1 |
| .yml | 1 |
| dockerfile | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `assets/ 내부 책임 분리`
- `utils/ 내부 책임 분리`
- `.streamlit/ 내부 책임 분리`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `requirements.txt 실행 스크립트와 패키지 경계`

