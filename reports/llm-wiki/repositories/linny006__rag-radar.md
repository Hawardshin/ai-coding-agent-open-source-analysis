# linny006/rag-radar 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/linny006__rag-radar |
| remote | https://github.com/linny006/rag-radar |
| HEAD | a3e06c8 (2026-06-17) feat: +23 added, -23 removed (2026-06-17 22:45) |
| branch | master |
| groups | llm-wiki-100 |
| files | 10 |
| dirs | 3 |
| stack | Python |

## 구조 해석

- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `RAG Radar`, `💡 What is this?`, `📋 Current Items`, `🔍 How it works`, `🤝 Contributing`, `🔗 Related live trackers`, `📜 License`

> <! SEO rag radar <div align="center" RAG Radar Live tracker of new RAG implementations, tools, and patterns — updated every 15 minutes ⭐ Star this repo to bookmark — fresh data every 15 minutes English · 中文 · 日本語 · 한국어 · Español · Português </div 💡 What is this? RAG Radar continuously monitors GitHub for newly published retrieval augmented generation projects, libraries, and production patterns. It scores and categorizes discoveries by component type (chunking, embedding, retrieval, generation) and outputs a structured feed developers can subscribe to or browse. Powered by GitHub Actions and the GitHub Search API. This list is auto updated every 15 minutes by a GitHub Actions cron. Each commit reflects a real change in the upstream data source — new items added, expired items removed — so you can rely on what you see being current. 📋 Current Items ⏰ Last updated 2026 06 17 22 45 UTC Da

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| data | dir |
| README_CN.md | file |
| README_ES.md | file |
| README_JA.md | file |
| README_KO.md | file |
| README_PT.md | file |
| README.md | file |
| requirements.txt | file |
| tracker.py | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| (root) | 8 |
| .github/ | 1 |
| data/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| .github/ | 1 | large |
| .github/workflows/ | 1 | large |
| data/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

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

- `.github/workflows/update.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 6 |
| .json | 1 |
| .py | 1 |
| .txt | 1 |
| .yml | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `.github/ 내부 책임 분리`
- `.github/workflows/ 내부 책임 분리`
- `data/ 내부 책임 분리`
- `requirements.txt 실행 스크립트와 패키지 경계`

