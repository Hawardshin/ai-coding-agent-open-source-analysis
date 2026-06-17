# ultraworkers/claw-code 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/ultraworkers__claw-code |
| remote | https://github.com/ultraworkers/claw-code |
| HEAD | d229a9b (2026-06-08) Merge pull request #3227 from TheArchitectit/worktree-wizard-entry-points |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 386 |
| dirs | 99 |
| stack | Rust |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Claw Code`, `Current repository shape`, `Quick start`, `1. Clone and build`, `2. Set your API key (Anthropic API key — not a Claude subscription)`, `3. Verify everything is wired correctly`, `4. Run a prompt`, `5. Start an interactive session`, `Windows setup`, `Post-build: locate the binary and verify`, `Binary location`, `Verify the build succeeded`, `macOS/Linux (debug build)`, `Windows PowerShell (debug build)`, `Optional: Add to PATH`, `From the claw-code/rust/ directory`, `Then from anywhere`, `Troubleshooting`

> Claw Code <p align="center" <a href="https //github.com/code yeongyu/lazycodex" <img src="https //img.shields.io/badge/LazyCodex codex%20for%20no brainers 111111?style=for the badge&logo=github&logoColor=white" alt="LazyCodex banner" / </a <a href="https //github.com/Yeachan Heo/gajae code" <img src="https //img.shields.io/badge/Gajae Code red claw%20agent%20harness B22222?style=for the badge&logo=github&logoColor=white" alt="Gajae Code banner" / </a </p <p align="center" <a href="https //github.com/code yeongyu/lazycodex" <img src="https //opengraph.githubassets.com/lazycodex card/code yeongyu/lazycodex" alt="LazyCodex GitHub card" width="280" / </a <a href="https //github.com/Yeachan Heo/gajae code" <img src="https //opengraph.githubassets.com/gajae code card/Yeachan Heo/gajae code" alt="Gajae Code GitHub card" width="280" / </a </p <h3 align="center" start with the real crab powered h

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .claude.json | file |
| .claw.json | file |
| .dockerignore | file |
| .github | dir |
| .gitignore | file |
| .omx | dir |
| .port_sessions | dir |
| assets | dir |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| concept.md | file |
| Containerfile | file |
| CONTRIBUTING.md | file |
| docker-compose.yml | file |
| docs | dir |
| how_to_run.md | file |
| install.sh | file |
| LICENSE | file |
| PARITY.md | file |
| PHILOSOPHY.md | file |
| prd.json | file |
| progress.txt | file |
| README.md | file |
| ROADMAP.md | file |
| rust | dir |
| scripts | dir |
| SECURITY.md | file |
| src | dir |
| SUPPORT.md | file |
| tests | dir |
| USAGE.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| rust/ | 175 |
| src/ | 100 |
| docs/ | 26 |
| (root) | 22 |
| .omx/ | 18 |
| .claude/ | 12 |
| .github/ | 9 |
| scripts/ | 8 |
| assets/ | 7 |
| tests/ | 5 |
| .port_sessions/ | 4 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 100 | preferred |
| docs/ | 26 | preferred |
| tests/ | 5 | preferred |
| scripts/ | 8 | preferred |
| rust/ | 175 | large |
| rust/crates/ | 125 | large |
| rust/crates/runtime/ | 52 | large |
| src/reference_data/ | 33 | large |
| src/reference_data/subsystems/ | 29 | large |
| rust/.claude/ | 28 | large |
| rust/.claude/sessions/ | 28 | large |
| .omx/ | 18 | large |
| rust/crates/api/ | 16 | large |
| rust/crates/rusty-claude-cli/ | 14 | large |
| .claude/ | 12 | large |
| .claude/sessions/ | 12 | large |
| .omx/ultragoal/ | 12 | large |
| rust/crates/claw-rag-service/ | 11 | large |
| rust/crates/plugins/ | 10 | large |
| .github/ | 9 | large |
| assets/ | 7 | large |
| rust/crates/tools/ | 7 | large |
| .omx/cc2/ | 6 | large |
| rust/crates/claw-analog/ | 6 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docker-compose.yml`
- `rust/Cargo.toml`
- `rust/crates/api/Cargo.toml`
- `rust/crates/claw-analog/Cargo.toml`
- `rust/crates/claw-rag-service/Cargo.toml`
- `rust/crates/claw-rag-service/Dockerfile`
- `rust/crates/commands/Cargo.toml`
- `rust/crates/compat-harness/Cargo.toml`
- `rust/crates/mock-anthropic-service/Cargo.toml`
- `rust/crates/plugins/Cargo.toml`
- `rust/crates/runtime/Cargo.toml`
- `rust/crates/rusty-claude-cli/Cargo.toml`
- `rust/crates/telemetry/Cargo.toml`
- `rust/crates/tools/Cargo.toml`

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| rust/Cargo.toml |  | true | "crates/*" |
| rust/crates/api/Cargo.toml | api | false |  |
| rust/crates/claw-analog/Cargo.toml | claw-analog | false |  |
| rust/crates/claw-rag-service/Cargo.toml | claw-rag-service | false |  |
| rust/crates/commands/Cargo.toml | commands | false |  |
| rust/crates/compat-harness/Cargo.toml | compat-harness | false |  |
| rust/crates/mock-anthropic-service/Cargo.toml | mock-anthropic-service | false |  |
| rust/crates/plugins/Cargo.toml | plugins | false |  |
| rust/crates/runtime/Cargo.toml | runtime | false |  |
| rust/crates/rusty-claude-cli/Cargo.toml | rusty-claude-cli | false |  |
| rust/crates/telemetry/Cargo.toml | telemetry | false |  |
| rust/crates/tools/Cargo.toml | tools | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/MODEL_COMPATIBILITY.md`
- `docs/anti-slop-triage.md`
- `docs/container.md`
- `docs/g002-security-verification-map.md`
- `docs/g003-boot-session-verification-map.md`
- `docs/g004-events-reports-contract.md`
- `docs/g004-events-reports-verification-map.md`
- `docs/g005-branch-recovery-verification-map.md`
- `docs/g006-task-policy-board-verification-map.md`
- `docs/g007-mcp-lifecycle-mapping.md`
- `docs/g007-plugin-mcp-verification-map.md`
- `docs/g009-windows-docs-release-verification-map.md`
- `docs/g010-clone-disambiguation-metadata.md`
- `docs/g010-session-hygiene-verification-map.md`
- `docs/g011-acp-json-rpc-status-contract.md`
- `docs/g011-ecosystem-ops-ux-verification-map.md`
- `docs/g012-final-release-readiness-report.md`
- `docs/g013-roadmap-pinpoints-693-695-verification-map.md`
- `docs/local-openai-compatible-providers.md`
- `docs/navigation-file-context.md`
- `docs/personal-assistant-roadmap.md`
- `docs/pr-issue-resolution-gate.md`
- `docs/pr-triage-g012-final-gate.json`
- `docs/rag-web-ui.md`
- `docs/roadmap-pr-goals.md`
- `docs/windows-install-release.md`
- `rust/README.md`
- `rust/crates/runtime/tests/fixtures/report_schema_v1/README.md`

### 에이전트 지침 후보

- `.claude/sessions/session-1774998936453.json`
- `.claude/sessions/session-1774998994373.json`
- `.claude/sessions/session-1775007533836.json`
- `.claude/sessions/session-1775007622154.json`
- `.claude/sessions/session-1775007632904.json`
- `.claude/sessions/session-1775007846522.json`
- `.claude/sessions/session-1775009126105.json`
- `.claude/sessions/session-1775009583240.json`
- `.claude/sessions/session-1775009651284.json`
- `.claude/sessions/session-1775010002596.json`
- `.claude/sessions/session-1775010229294.json`
- `.claude/sessions/session-1775010237519.json`
- `CLAUDE.md`
- `docs/g007-mcp-lifecycle-mapping.md`
- `docs/g007-plugin-mcp-verification-map.md`
- `rust/.claude/sessions/session-1775007453382.json`
- `rust/.claude/sessions/session-1775007484031.json`
- `rust/.claude/sessions/session-1775007490104.json`
- `rust/.claude/sessions/session-1775007981374.json`
- `rust/.claude/sessions/session-1775008007069.json`
- `rust/.claude/sessions/session-1775008071886.json`
- `rust/.claude/sessions/session-1775008137143.json`
- `rust/.claude/sessions/session-1775008161929.json`
- `rust/.claude/sessions/session-1775008308936.json`
- `rust/.claude/sessions/session-1775008427969.json`
- `rust/.claude/sessions/session-1775008464519.json`
- `rust/.claude/sessions/session-1775008997307.json`
- `rust/.claude/sessions/session-1775009119214.json`
- `rust/.claude/sessions/session-1775009126336.json`
- `rust/.claude/sessions/session-1775009145469.json`
- `rust/.claude/sessions/session-1775009431231.json`
- `rust/.claude/sessions/session-1775009769569.json`
- `rust/.claude/sessions/session-1775009841982.json`
- `rust/.claude/sessions/session-1775009869734.json`
- `rust/.claude/sessions/session-1775010047738.json`
- `rust/.claude/sessions/session-1775010333630.json`
- `rust/.claude/sessions/session-1775010384918.json`
- `rust/.claude/sessions/session-1775010909274.json`
- `rust/.claude/sessions/session-1775011146355.json`
- `rust/.claude/sessions/session-1775011562247.json`
- `rust/.claude/sessions/session-1775012674485.json`
- `rust/.claude/sessions/session-1775012687059.json`
- `rust/.claude/sessions/session-1775013221875.json`
- `rust/CLAUDE.md`
- `rust/crates/runtime/src/mcp.rs`
- `rust/crates/runtime/src/mcp_client.rs`
- `rust/crates/runtime/src/mcp_lifecycle_hardened.rs`
- `rust/crates/runtime/src/mcp_server.rs`
- `rust/crates/runtime/src/mcp_stdio.rs`
- `rust/crates/runtime/src/mcp_tool_bridge.rs`
- `src/reference_data/subsystems/skills.json`
- `src/skills/__init__.py`

### 스펙/템플릿/명령/스킬 후보

- `rust/crates/commands/Cargo.toml`
- `rust/crates/commands/src/lib.rs`
- `src/skills/__init__.py`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `rust/crates/api/tests/client_integration.rs`
- `rust/crates/api/tests/openai_compat_integration.rs`
- `rust/crates/api/tests/provider_client_integration.rs`
- `rust/crates/api/tests/proxy_integration.rs`
- `rust/crates/runtime/tests/fixtures/g004_contract_bundle.valid.json`
- `rust/crates/runtime/tests/fixtures/report_schema_v1/README.md`
- `rust/crates/runtime/tests/g004_conformance.rs`
- `rust/crates/runtime/tests/integration_tests.rs`
- `rust/crates/rusty-claude-cli/tests/cli_flags_and_config_defaults.rs`
- `rust/crates/rusty-claude-cli/tests/compact_output.rs`
- `rust/crates/rusty-claude-cli/tests/compact_repl_panic.rs`
- `rust/crates/rusty-claude-cli/tests/mock_parity_harness.rs`
- `rust/crates/rusty-claude-cli/tests/output_format_contract.rs`
- `rust/crates/rusty-claude-cli/tests/resume_slash_commands.rs`
- `rust/crates/tools/tests/path_scope_enforcement.rs`
- `tests/__init__.py`
- `tests/test_porting_workspace.py`
- `tests/test_pre_push_hook_contract.py`
- `tests/test_roadmap_helpers.py`
- `tests/test_security_scope.py`

### CI/Docker 후보

- `.github/workflows/release.yml`
- `.github/workflows/rust-ci.yml`
- `.github/workflows/rust.yml`
- `docker-compose.yml`
- `rust/crates/claw-rag-service/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .rs | 101 |
| .json | 96 |
| .py | 82 |
| .md | 49 |
| .toml | 13 |
| .sh | 11 |
| .jsonl | 6 |
| .png | 6 |
| .yml | 6 |
| .gitignore | 3 |
| .log | 3 |
| .dockerignore | 2 |
| .html | 1 |
| .jpeg | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `rust/ 내부 책임 분리`
- `rust/crates/commands/Cargo.toml 스펙/명령 의미`
- `rust/crates/commands/src/lib.rs 스펙/명령 의미`
- `src/skills/__init__.py 스펙/명령 의미`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `rust/Cargo.toml 실행 스크립트와 패키지 경계`
- `rust/crates/api/Cargo.toml 실행 스크립트와 패키지 경계`
- `rust/crates/claw-analog/Cargo.toml 실행 스크립트와 패키지 경계`
- `rust/crates/claw-rag-service/Cargo.toml 실행 스크립트와 패키지 경계`

