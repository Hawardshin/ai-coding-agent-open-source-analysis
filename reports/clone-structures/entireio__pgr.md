# entireio/pgr 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/entireio__pgr |
| remote | https://github.com/entireio/pgr.git |
| HEAD | 2e702e6 (2026-05-06) Merge pull request #4 from entireio/codex/clarify-pgr-research-artifact |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 425 |
| dirs | 30 |
| stack | Rust |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.

## README 신호

- 파일: `README.md`
- 주요 heading: `pgr`, `Quick Start`, `1. Install pgr`, `2. Add it to your MCP client`, `3. Point it at the repo to search`, `4. Ask your agent to search`, `What pgr gives agents`, `Build from source`, `Requirements`, `Why we built it`, `Usage Documentation`, `Public benchmarks and data`, `What is in this repo`, `Repository scope`, `Contributing`

> pgr pgr is an experimental, stateless MCP server for code search, built as part of research into how coding agents search repositories. It is a working prototype and public research artifact, not a polished product. It wraps local code search with ranking and output shaping designed for agent workflows surfacing likely implementation files earlier, de prioritizing tests and low value matches, and formatting results so a model can decide what to read next with less thrashing. This repository also includes the public datasets, benchmark packages, and saved results used in the accompanying writeup on agentic code search. Quick Start Usage Documentation Public Benchmarks and Data Contributing guide Security policy License Quick Start 1. Install pgr Install pgr from this repository 2. Add it to your MCP client Then add it to any MCP client that can launch a stdio server 3. Point it at the rep

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitattributes | file |
| .gitignore | file |
| assets | dir |
| Cargo.lock | file |
| Cargo.toml | file |
| CONTRIBUTING.md | file |
| docs | dir |
| eval | dir |
| LICENSE | file |
| public_release | dir |
| README.md | file |
| SECURITY.md | file |
| src | dir |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| public_release/ | 403 |
| (root) | 8 |
| eval/ | 6 |
| src/ | 5 |
| assets/ | 1 |
| docs/ | 1 |
| tests/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 5 | preferred |
| docs/ | 1 | preferred |
| tests/ | 1 | preferred |
| public_release/ | 403 | large |
| public_release/benchmarks/ | 398 | large |
| public_release/benchmarks/entireio_cli_ranking_public60/ | 265 | large |
| public_release/benchmarks/entireio_cli_fff_vs_baseline_public60/ | 127 | large |
| eval/ | 6 | large |
| eval/v2/ | 6 | large |
| public_release/benchmarks/entireio_cli_offline_ir_public60/ | 6 | large |
| eval/v2/backends/ | 4 | large |
| public_release/data/ | 3 | large |
| public_release/data/entireio_cli_checkpoints_2026_04_15/ | 3 | large |
| assets/ | 1 | large |
| public_release/analysis/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml | pgr | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/usage.md`
- `public_release/README.md`
- `public_release/benchmarks/entireio_cli_fff_vs_baseline_public60/README.md`
- `public_release/benchmarks/entireio_cli_offline_ir_public60/README.md`
- `public_release/benchmarks/entireio_cli_ranking_public60/README.md`
- `public_release/data/entireio_cli_checkpoints_2026_04_15/README.md`

### 에이전트 지침 후보

- `tests/mcp_integration.rs`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/mcp_integration.rs`

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .json | 387 |
| .md | 15 |
| .py | 10 |
| .rs | 6 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .gz | 1 |
| .lock | 1 |
| .png | 1 |
| .toml | 1 |
| license | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `public_release/ 내부 책임 분리`
- `public_release/benchmarks/ 내부 책임 분리`
- `Cargo.toml 실행 스크립트와 패키지 경계`

