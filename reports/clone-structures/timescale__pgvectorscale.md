# timescale/pgvectorscale 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/timescale__pgvectorscale |
| remote | https://github.com/timescale/pgvectorscale |
| HEAD | 57c88b7 (2026-04-30) style: qualify pg_catalog schema references in extension SQL (#271) |
| branch | main |
| groups | adjacent-tech-50, previous-clone-inventory-107 |
| files | 96 |
| dirs | 25 |
| stack | Python, Rust |

## 구조 해석

- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `pgvectorscale`, `Installation`, `Using a pre-built Docker container`, `Installing from source`, `Enable pgvectorscale in a Timescale Cloud service`, `Get started with pgvectorscale`, `Filtered Vector Search`, `Label-based Filtering with diskann`, `Arbitrary WHERE Clause Filtering`, `Tuning`, `StreamingDiskANN index build-time parameters`, `Null Value Handling`, `ORDER BY vector distance`, `Index on an UNLOGGED table`, `Get involved`, `About Timescale`

> <p </p <div align=center pgvectorscale <h3 pgvectorscale builds on pgvector with higher performance embedding search and cost efficient storage for AI applications. </h3 </div pgvectorscale complements [pgvector][pgvector], the open source vector data extension for PostgreSQL, and introduces the following key innovations for pgvector data A new index type called StreamingDiskANN, inspired by the DiskANN algorithm, based on research from Microsoft. Statistical Binary Quantization developed by Timescale researchers, This compression method improves on standard Binary Quantization. Label based filtered vector search based on Microsoft's Filtered DiskANN research, this allows you to combine vector similarity search with label filtering for more precise and efficient results. On a benchmark dataset of 50 million Cohere embeddings with 768 dimensions each, PostgreSQL with pgvector and pgvector

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .cargo | dir |
| .dockerignore | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| Cargo.toml | file |
| CONTRIBUTING.md | file |
| DEVELOPMENT.md | file |
| LICENSE | file |
| Makefile | file |
| NOTICE | file |
| pgvectorscale | dir |
| README.md | file |
| scripts | dir |
| TESTING.md | file |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| pgvectorscale/ | 62 |
| .github/ | 14 |
| (root) | 11 |
| tests/ | 5 |
| scripts/ | 3 |
| .cargo/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| tests/ | 5 | preferred |
| scripts/ | 3 | preferred |
| pgvectorscale/ | 62 | large |
| pgvectorscale/src/ | 44 | large |
| pgvectorscale/src/access_method/ | 34 | large |
| .github/ | 14 | large |
| pgvectorscale/sql/ | 11 | large |
| pgvectorscale/src/util/ | 8 | large |
| .github/workflows/ | 5 | large |
| .github/actions/ | 4 | large |
| .github/ISSUE_TEMPLATE/ | 3 | large |
| pgvectorscale/benches/ | 2 | large |
| pgvectorscale/pgvectorscale_derive/ | 2 | large |
| .cargo/ | 1 | large |
| .github/actions/install-packages/ | 1 | large |
| .github/actions/install-pgrx/ | 1 | large |
| .github/actions/install-pgvector/ | 1 | large |
| .github/actions/install-postgres/ | 1 | large |
| pgvectorscale/pgvectorscale_derive/src/ | 1 | large |
| pgvectorscale/src/bin/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `pgvectorscale/Cargo.toml`
- `pgvectorscale/pgvectorscale_derive/Cargo.toml`
- `scripts/requirements.txt`
- `tests/requirements.txt`

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml |  | true | "pgvectorscale" |
| pgvectorscale/Cargo.toml | vectorscale | false |  |
| pgvectorscale/pgvectorscale_derive/Cargo.toml | pgvectorscale_derive | false |  |

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

- `tests/__init__.py`
- `tests/conftest.py`
- `tests/requirements.txt`
- `tests/test_basic_operations.py`
- `tests/test_concurrent_inserts.py`

### CI/Docker 후보

- `.github/workflows/code_checks.yml`
- `.github/workflows/deb-packager.yaml`
- `.github/workflows/pgrx_test.yaml`
- `.github/workflows/python_tests.yml`
- `.github/workflows/shellcheck.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .rs | 47 |
| .sql | 11 |
| .yml | 9 |
| .md | 5 |
| .py | 4 |
| .toml | 4 |
| .yaml | 4 |
| .gitignore | 2 |
| .sh | 2 |
| .txt | 2 |
| .control | 1 |
| .dockerignore | 1 |
| codeowners | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `pgvectorscale/ 내부 책임 분리`
- `pgvectorscale/src/ 내부 책임 분리`
- `pgvectorscale/src/access_method/ 내부 책임 분리`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `pgvectorscale/Cargo.toml 실행 스크립트와 패키지 경계`
- `pgvectorscale/pgvectorscale_derive/Cargo.toml 실행 스크립트와 패키지 경계`
- `scripts/requirements.txt 실행 스크립트와 패키지 경계`
- `tests/requirements.txt 실행 스크립트와 패키지 경계`

