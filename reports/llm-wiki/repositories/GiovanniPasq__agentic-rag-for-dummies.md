# GiovanniPasq/agentic-rag-for-dummies 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/GiovanniPasq__agentic-rag-for-dummies |
| remote | https://github.com/GiovanniPasq/agentic-rag-for-dummies |
| HEAD | a1411be (2026-06-10) docs: add uv installation instructions |
| branch | main |
| groups | llm-wiki-100 |
| files | 39 |
| dirs | 9 |
| stack | Python |

## 구조 해석

- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Overview`, `What's inside`, `🎯 Two Ways to Use This Repo`, `How It Works`, `Document Preparation: Hierarchical Indexing`, `Query Processing: Four-Stage Intelligent Workflow`, `LLM Provider Configuration`, `Ollama (Local)`, `Install Ollama from https://ollama.com`, `Cloud Providers`, `Implementation`, `Step 1: Initial Setup and Configuration`, `Step 2: Configure Vector Database`, `Step 3: PDFs to Markdown`, `Step 4: Hierarchical Document Indexing`, `Step 5: Define Agent Tools`, `Step 6: Define System Prompts`, `Research Context Summary`

> <p align="center" <img alt="Agentic RAG for Dummies Logo" src="assets/logo.png" width="350px" </p <h1 align="center" Agentic RAG for Dummies</h1 <p align="center" <strong Build a modular Agentic RAG system with LangGraph, conversation memory, and human in the loop query clarification</strong </p <p align="center" <a href=" overview" Overview</a • <a href=" how it works" How It Works</a • <a href=" llm provider configuration" LLM Providers</a • <a href=" implementation" Implementation</a • <a href=" installation usage" Installation & Usage</a • <a href=" troubleshooting" Troubleshooting</a </p <p align="center" <img src="https //img.shields.io/github/stars/GiovanniPasq/agentic rag for dummies?style=social" alt="GitHub Stars"/ <img src="https //img.shields.io/github/forks/GiovanniPasq/agentic rag for dummies?style=social" alt="GitHub Forks"/ <img src="https //img.shields.io/badge/license M

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitignore | file |
| assets | dir |
| LICENSE | file |
| notebooks | dir |
| project | dir |
| README.md | file |
| requirements.txt | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| project/ | 27 |
| notebooks/ | 5 |
| (root) | 4 |
| assets/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| project/ | 27 | large |
| project/rag_agent/ | 8 | large |
| notebooks/ | 5 | large |
| project/core/ | 5 | large |
| assets/ | 3 | large |
| project/db/ | 3 | large |
| project/ui/ | 3 | large |
| notebooks/data/ | 1 | large |
| project/assets/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `project/Dockerfile`
- `requirements.txt`

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `project/README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `project/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 23 |
| .ipynb | 4 |
| .png | 3 |
| .md | 2 |
| .example | 1 |
| .gif | 1 |
| .gitignore | 1 |
| .json | 1 |
| .txt | 1 |
| dockerfile | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `project/ 내부 책임 분리`
- `project/rag_agent/ 내부 책임 분리`
- `notebooks/ 내부 책임 분리`
- `project/core/ 내부 책임 분리`
- `assets/ 내부 책임 분리`
- `project/Dockerfile 실행 스크립트와 패키지 경계`
- `requirements.txt 실행 스크립트와 패키지 경계`

