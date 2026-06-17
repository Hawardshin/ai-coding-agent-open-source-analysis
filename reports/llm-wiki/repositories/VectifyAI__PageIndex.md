# VectifyAI/PageIndex 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/VectifyAI__PageIndex |
| remote | https://github.com/VectifyAI/PageIndex |
| HEAD | 5a18553 (2026-06-06) update readme |
| branch | main |
| groups | llm-wiki-100 |
| files | 53 |
| dirs | 14 |
| stack | Python |

## 구조 해석

- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `PageIndex: Vectorless, Reasoning-based RAG`, `📑 Introduction to PageIndex`, `🎯 Core Features`, `📍 Explore PageIndex`, `🛠️ Deployment Options`, `🧪 Quick Hands-on`, `🌲 PageIndex Tree Structure`, `⚙️ Package Usage`, `1. Install dependencies`, `2. Set your LLM API key`, `3. Generate PageIndex structure for your PDF`, `Agentic Vectorless RAG: An Example`, `Install optional dependency`, `Run the demo`, `☁️ Improved Tree Generation with PageIndex OCR`, `📈 Case Study: PageIndex Leads Finance QA Benchmark`, `🧭 Resources`, `⭐ Support Us`

> <div align="center" <a href="https //vectify.ai/pageindex" target=" blank" <img src="https //github.com/user attachments/assets/46201e72 675b 43bc bfbd 081cc6b65a1d" alt="PageIndex Banner" / </a <br/ <br/ <p align="center" <a href="https //trendshift.io/repositories/14736" target=" blank" <img src="https //trendshift.io/api/badge/repositories/14736" alt="VectifyAI%2FPageIndex Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </p PageIndex Vectorless, Reasoning based RAG <p align="center" <b Reasoning based RAG&nbsp; ◦ &nbsp;No Vector DB, No Chunking&nbsp; ◦ &nbsp;Context Aware Retrieval&nbsp; ◦ &nbsp;Human like</b </p <h4 align="center" <a href="https //vectify.ai" 🌐 Website</a &nbsp; • &nbsp; <a href="https //chat.pageindex.ai" 🖥️ Chat Platform</a &nbsp; • &nbsp; <a href="https //pageindex.ai/developer" 🔌 MCP & API</a &nbsp; • &nbsp; <a href="https //docs.pag

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| cookbook | dir |
| examples | dir |
| LICENSE | file |
| pageindex | dir |
| README.md | file |
| requirements.txt | file |
| run_pageindex.py | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| examples/ | 25 |
| .github/ | 9 |
| pageindex/ | 7 |
| (root) | 6 |
| cookbook/ | 5 |
| .claude/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| examples/ | 25 | preferred |
| examples/documents/ | 17 | large |
| .github/ | 9 | large |
| examples/documents/results/ | 8 | large |
| pageindex/ | 7 | large |
| .github/workflows/ | 6 | large |
| cookbook/ | 5 | large |
| examples/tutorials/ | 5 | large |
| examples/tutorials/doc-search/ | 4 | large |
| .github/scripts/ | 2 | large |
| examples/workspace/ | 2 | large |
| .claude/ | 1 | large |
| .claude/commands/ | 1 | large |
| examples/tutorials/tree-search/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `requirements.txt`

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `cookbook/README.md`
- `examples/tutorials/doc-search/README.md`
- `examples/tutorials/tree-search/README.md`

### 에이전트 지침 후보

- `.claude/commands/dedupe.md`

### 스펙/템플릿/명령/스킬 후보

- `.claude/commands/dedupe.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `.github/workflows/autoclose-labeled-issues.yml`
- `.github/workflows/backfill-dedupe.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/dependency-review.yml`
- `.github/workflows/issue-dedupe.yml`
- `.github/workflows/remove-autoclose-label.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .json | 10 |
| .pdf | 9 |
| .md | 8 |
| .py | 8 |
| .yml | 7 |
| .ipynb | 4 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .js | 1 |
| .sh | 1 |
| .txt | 1 |
| .yaml | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `examples/ 내부 책임 분리`
- `examples/documents/ 내부 책임 분리`
- `.github/ 내부 책임 분리`
- `examples/documents/results/ 내부 책임 분리`
- `pageindex/ 내부 책임 분리`
- `.claude/commands/dedupe.md 스펙/명령 의미`
- `requirements.txt 실행 스크립트와 패키지 경계`

