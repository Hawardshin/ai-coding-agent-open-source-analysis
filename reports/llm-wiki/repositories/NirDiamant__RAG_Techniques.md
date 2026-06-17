# NirDiamant/RAG_Techniques 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/NirDiamant__RAG_Techniques |
| remote | https://github.com/NirDiamant/RAG_Techniques |
| HEAD | 991e16c (2026-06-17) Point course CTA at the /courses info page instead of the waitlist |
| branch | main |
| groups | llm-wiki-100 |
| files | 122 |
| dirs | 8 |
| stack | unknown/mixed |

## 구조 해석

- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Advanced RAG Techniques 🚀`, `Elevating Your Retrieval-Augmented Generation Systems`, `Sponsors ❤️`, `📫 Stay Updated!`, `Introduction`, `📖 Go deeper: the book`, `Related Projects`, `Join the community`, `Key Features`, `Advanced Techniques`, `🌱 Foundational RAG Techniques`, `🔍 Query Enhancement`, `📚 Context and Content Enrichment`, `🚀 Advanced Retrieval Methods`, `🔁 Iterative and Adaptive Techniques`, `📊 Evaluation`, `🧠 Memory-Augmented Retrieval`, `🔬 Explainability and Transparency`

> <div align="center" Advanced RAG Techniques 🚀 Elevating Your Retrieval Augmented Generation Systems A community driven hub of 42+ runnable notebooks covering RAG techniques from foundational to cutting edge the intuition, the code, and the references to build more accurate, context rich retrieval systems. </div Sponsors ❤️ We gratefully acknowledge the organizations and individuals who have made significant contributions to this project. Company Sponsors <div align="center" <table style="border none; border collapse collapse; width 100%; max width 840px; margin 0 auto; background transparent; table layout fixed;" <tr <td style="border none; text align center; padding 16px 24px; width 33.33%; vertical align top;" <a href="https //app.contextual.ai?utm campaign=rag techniques&utm source=diamantai&utm medium=github&utm content=notebook" target=" blank" style="text decoration none; display 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| all_rag_techniques | dir |
| all_rag_techniques_runnable_scripts | dir |
| CONTRIBUTING.md | file |
| data | dir |
| evaluation | dir |
| helper_functions.py | file |
| images | dir |
| LICENSE | file |
| README.md | file |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| images/ | 43 |
| all_rag_techniques/ | 37 |
| all_rag_techniques_runnable_scripts/ | 19 |
| data/ | 7 |
| evaluation/ | 6 |
| (root) | 5 |
| .github/ | 3 |
| tests/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| tests/ | 2 | preferred |
| images/ | 43 | large |
| all_rag_techniques/ | 37 | large |
| all_rag_techniques_runnable_scripts/ | 19 | large |
| data/ | 7 | large |
| evaluation/ | 6 | large |
| .github/ | 3 | large |
| .github/workflows/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

_없음_

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/conftest.py`
- `tests/test_imports.py`

### CI/Docker 후보

- `.github/workflows/github-test.yml`
- `.github/workflows/local-test.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ipynb | 42 |
| .svg | 29 |
| .py | 23 |
| .png | 14 |
| .json | 3 |
| .yml | 3 |
| .csv | 2 |
| .md | 2 |
| .gitignore | 1 |
| .pdf | 1 |
| .txt | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `tests/ 내부 책임 분리`
- `images/ 내부 책임 분리`
- `all_rag_techniques/ 내부 책임 분리`
- `all_rag_techniques_runnable_scripts/ 내부 책임 분리`
- `data/ 내부 책임 분리`

