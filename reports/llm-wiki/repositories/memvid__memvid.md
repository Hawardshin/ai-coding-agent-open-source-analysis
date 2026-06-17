# memvid/memvid 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/memvid__memvid |
| remote | https://github.com/memvid/memvid |
| HEAD | fa9efe5 (2026-05-27) test: make commit_per_put_survives_wal_growth Windows-safe and deterministic |
| branch | main |
| groups | llm-wiki-100 |
| files | 217 |
| dirs | 30 |
| stack | Rust |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Benchmark Highlights`, `What is Memvid?`, `What are Smart Frames?`, `Core Concepts`, `Use Cases`, `SDKs & CLI`, `Installation (Rust)`, `Requirements`, `Add to Your Project`, `Feature Flags`, `Quick Start`, `Build`, `Run Tests`, `Examples`, `Basic Usage`, `PDF Ingestion`, `CLIP Visual Search`, `Whisper Transcription`

> <! HEADER START <img width="2000" height="524" alt="Social Cover (9)" src="https //github.com/user attachments/assets/cf66f045 c8be 494b b696 b8d7e4fb709c" / <! HEADER END <div style="height 16px;" </div <p align="center" <a href="https //trendshift.io/repositories/17293" target=" blank" <img src="https //trendshift.io/api/badge/repositories/17293" alt="memvid%2Fmemvid Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </p <! BADGES END <p align="center" <strong Memvid is a single file memory layer for AI agents with instant retrieval and long term memory.</strong <br/ Persistent, versioned, and portable memory, without databases. </p <! NAV START <p align="center" <a href="https //www.memvid.com" Website</a · <a href="https //sandbox.memvid.com" Try Sandbox</a · <a href="https //docs.memvid.com" Docs</a · <a href="https //github.com/memvid/memvid/discussions" Dis

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .editorconfig | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| benches | dir |
| Cargo.lock | file |
| Cargo.toml | file |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| data | dir |
| docker | dir |
| docs | dir |
| examples | dir |
| install | dir |
| LICENSE | file |
| Makefile | file |
| MV2_SPEC.md | file |
| README.md | file |
| rust-toolchain.toml | file |
| SECURITY.md | file |
| src | dir |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 137 |
| (root) | 16 |
| docs/ | 15 |
| docker/ | 12 |
| tests/ | 12 |
| examples/ | 10 |
| .github/ | 8 |
| install/ | 3 |
| benches/ | 2 |
| data/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 137 | preferred |
| docs/ | 15 | preferred |
| examples/ | 10 | preferred |
| tests/ | 12 | preferred |
| src/memvid/ | 29 | large |
| src/types/ | 25 | large |
| docs/i18n/ | 15 | large |
| docker/ | 12 | large |
| src/reader/ | 10 | large |
| src/search/ | 9 | large |
| .github/ | 8 | large |
| src/encryption/ | 7 | large |
| src/memvid/search/ | 7 | large |
| src/search/tantivy/ | 7 | large |
| docker/core/ | 6 | large |
| src/io/ | 6 | large |
| src/table/ | 6 | large |
| docker/cli/ | 5 | large |
| src/analysis/ | 5 | large |
| .github/ISSUE_TEMPLATE/ | 3 | large |
| install/ | 3 | large |
| src/enrich/ | 3 | large |
| src/replay/ | 3 | large |
| src/structure/ | 3 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `docker/cli/Dockerfile`
- `docker/core/Dockerfile`
- `docker/core/docker-compose.yml`

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml | memvid-core | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docker/README.md`
- `docker/cli/README.md`
- `docker/core/README.md`
- `docs/i18n/CONTRIBUTING_TRANSLATIONS.md`
- `docs/i18n/README.ar.md`
- `docs/i18n/README.bn.md`
- `docs/i18n/README.cs.md`
- `docs/i18n/README.es.md`
- `docs/i18n/README.fr.md`
- `docs/i18n/README.hi.md`
- `docs/i18n/README.ja.md`
- `docs/i18n/README.ko.md`
- `docs/i18n/README.md`
- `docs/i18n/README.nl.md`
- `docs/i18n/README.so.md`
- `docs/i18n/README.zh-CN.md`
- `docs/i18n/scripts/auto-add-flags.js`
- `docs/i18n/scripts/update-localized-readmes.js`
- `install/README.md`

### 에이전트 지침 후보

- `CLAUDE.md`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/crash_recovery.rs`
- `tests/doctor_recovery.rs`
- `tests/encryption_capsule.rs`
- `tests/fixtures/legacy_test.mv2e`
- `tests/lifecycle.rs`
- `tests/model_consistency.rs`
- `tests/mutation.rs`
- `tests/replay_integrity.rs`
- `tests/search.rs`
- `tests/single_file.rs`
- `tests/test_implicit_and.rs`
- `tests/xlsx_structured.rs`

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/docker-release.yml`
- `docker/cli/Dockerfile`
- `docker/core/Dockerfile`
- `docker/core/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .rs | 158 |
| .md | 29 |
| .yml | 5 |
| .bytes | 2 |
| .dockerignore | 2 |
| .js | 2 |
| .sh | 2 |
| .toml | 2 |
| .txt | 2 |
| dockerfile | 2 |
| .dev | 1 |
| .disable | 1 |
| .editorconfig | 1 |
| .gitattributes | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `src/memvid/ 내부 책임 분리`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `docker/cli/Dockerfile 실행 스크립트와 패키지 경계`
- `docker/core/Dockerfile 실행 스크립트와 패키지 경계`
- `docker/core/docker-compose.yml 실행 스크립트와 패키지 경계`

