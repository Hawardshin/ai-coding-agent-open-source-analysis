# bartolli/codanna 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/bartolli__codanna |
| remote | https://github.com/bartolli/codanna.git |
| HEAD | cb2c095 (2026-05-19) release: v0.9.22 |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 822 |
| dirs | 201 |
| stack | Node/TypeScript/JavaScript, Rust, Go |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Quick Start`, `Install (macOS, Linux, WSL)`, `Or via Homebrew`, `Or via Nix`, `Windows (PowerShell)`, `Initialize and index`, `Search code`, `Search documentation (RAG)`, `What It Does`, `Features`, `Integration`, `Requirements`, `Contributing`, `License`

> <div align="center" <h1 align="center" Codanna</h1 <p align="center" <a href="https //docs.codanna.sh/" target=" blank" Documentation</a · <a href="https //github.com/bartolli/codanna/issues" Report Bug</a · <a href="https //github.com/bartolli/codanna/discussions" Discussions</a </p <h2 </h2 X ray vision for your agent. Give your code assistant the ability to see through your codebase—understanding functions, tracing relationships, and finding implementations with surgical precision. Context first coding. No grep and hope loops. No endless back and forth. Just smarter engineering in fewer keystrokes. Built for rapid R&D and pair programming—instant answers when LSP is too slow. Learn more </div <h3 align="left" </h3 Quick Start Install (macOS, Linux, WSL) Or via Homebrew Or via Nix Windows (PowerShell) See Installation Guide for Cargo and other options. Initialize and index Search code 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .codannaignore | file |
| .github | dir |
| .gitignore | file |
| .markdownlint.json | file |
| .mcp_stdio.json | file |
| benches | dir |
| Cargo.lock | file |
| Cargo.toml | file |
| CHANGELOG.md | file |
| CLAUDE.md.example | file |
| clippy.toml | file |
| codanna-navigator.png | file |
| context7.json | file |
| contributing | dir |
| CONTRIBUTING.md | file |
| examples | dir |
| flake.lock | file |
| flake.nix | file |
| LICENSE | file |
| markdownlint.toml | file |
| NOTICE | file |
| README.md | file |
| scripts | dir |
| src | dir |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| examples/ | 282 |
| src/ | 259 |
| tests/ | 169 |
| contributing/ | 83 |
| (root) | 18 |
| .github/ | 6 |
| benches/ | 3 |
| scripts/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 259 | preferred |
| examples/ | 282 | preferred |
| tests/ | 169 | preferred |
| scripts/ | 2 | preferred |
| examples/typescript/ | 153 | large |
| examples/typescript/react/ | 135 | large |
| src/parsing/ | 104 | large |
| contributing/ | 83 | large |
| tests/parsers/ | 68 | large |
| contributing/parsers/ | 64 | large |
| examples/javascript/ | 37 | large |
| tests/fixtures/ | 35 | large |
| src/indexing/ | 22 | large |
| tests/integration/ | 21 | large |
| examples/rust/ | 19 | large |
| src/profiles/ | 19 | large |
| tests/exploration/ | 19 | large |
| src/project_resolver/ | 17 | large |
| tests/exploration/abi15_grammar_audit/ | 17 | large |
| src/indexing/pipeline/ | 16 | large |
| tests/fixtures/go/ | 16 | large |
| src/cli/ | 14 | large |
| tests/parsers/kotlin/ | 14 | large |
| examples/javascript/react/ | 13 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `examples/go/app/go.mod`
- `examples/typescript/packages/web/tsconfig.json`
- `examples/typescript/react/package.json`
- `examples/typescript/react/pnpm-lock.yaml`
- `examples/typescript/react/tsconfig.json`
- `examples/typescript/tsconfig.json`
- `tests/fixtures/go/go.mod`
- `tests/fixtures/go/module_project/go.mod`
- `tests/fixtures/go/vendor_project/go.mod`
- `tests/fixtures/typescript_alias_test/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| examples/typescript/react/package.json | my-theme-app | dev, build, start, lint | @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-icons, @radix-ui/react-label, @radix-ui/react-popover, @radix-ui/react-radio-group, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-separator, @radix-ui/react-slider, @radix-ui/react-slot, @radix-ui/react-switch |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml | codanna | false |  |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| examples/go/app/go.mod | app | 1.21 |
| tests/fixtures/go/go.mod | github.com/codanna/testproject | 1.21 |
| tests/fixtures/go/module_project/go.mod | example.com/myproject | 1.21 |
| tests/fixtures/go/vendor_project/go.mod | vendor-example.com/project | 1.21 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `contributing/README.md`
- `contributing/development/README.md`
- `contributing/tree-sitter/README.md`
- `examples/typescript/react/README.md`
- `tests/parsers/README.md`

### 에이전트 지침 후보

- `.mcp_stdio.json`
- `src/cli/commands/mcp.rs`
- `src/mcp/client.rs`
- `src/mcp/http_server.rs`
- `src/mcp/https_server.rs`
- `src/mcp/mod.rs`
- `src/mcp/notifications.rs`
- `tests/cli/test_mcp_index_info_remote_status.rs`
- `tests/integration/test_gdscript_mcp.rs`
- `tests/integration/test_mcp_schema.rs`

### 스펙/템플릿/명령/스킬 후보

- `src/cli/commands/benchmark.rs`
- `src/cli/commands/directories.rs`
- `src/cli/commands/documents.rs`
- `src/cli/commands/index.rs`
- `src/cli/commands/init.rs`
- `src/cli/commands/mcp.rs`
- `src/cli/commands/mod.rs`
- `src/cli/commands/parse.rs`
- `src/cli/commands/plugin.rs`
- `src/cli/commands/profile.rs`
- `src/cli/commands/retrieve.rs`
- `src/cli/commands/serve.rs`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/cli/test_clean_json.sh`
- `tests/cli/test_describe_relationships.sh`
- `tests/cli/test_dual_format_all.sh`
- `tests/cli/test_mcp_index_info_remote_status.rs`
- `tests/cli/test_pipes.sh`
- `tests/cli/test_plugin_commands.rs`
- `tests/cli_tests.rs`
- `tests/common/mod.rs`
- `tests/exploration/abi15_exploration.rs`
- `tests/exploration/abi15_exploration_common.rs`
- `tests/exploration/abi15_grammar_audit/c.rs`
- `tests/exploration/abi15_grammar_audit/clojure.rs`
- `tests/exploration/abi15_grammar_audit/cpp.rs`
- `tests/exploration/abi15_grammar_audit/csharp.rs`
- `tests/exploration/abi15_grammar_audit/gdscript.rs`
- `tests/exploration/abi15_grammar_audit/go.rs`
- `tests/exploration/abi15_grammar_audit/helpers.rs`
- `tests/exploration/abi15_grammar_audit/java.rs`
- `tests/exploration/abi15_grammar_audit/javascript.rs`
- `tests/exploration/abi15_grammar_audit/kotlin.rs`
- `tests/exploration/abi15_grammar_audit/lua.rs`
- `tests/exploration/abi15_grammar_audit/mod.rs`
- `tests/exploration/abi15_grammar_audit/php.rs`
- `tests/exploration/abi15_grammar_audit/python.rs`
- `tests/exploration/abi15_grammar_audit/rust_lang.rs`
- `tests/exploration/abi15_grammar_audit/swift.rs`
- `tests/exploration/abi15_grammar_audit/typescript.rs`
- `tests/exploration_tests.rs`
- `tests/fixtures/calls.rs`
- `tests/fixtures/clojure/basic.clj`
- `tests/fixtures/documented.rs`
- `tests/fixtures/gdscript/effects/heal_effect.gd`
- `tests/fixtures/gdscript/enemies/enemy.gd`
- `tests/fixtures/gdscript/player.gd`
- `tests/fixtures/go/basic.go`
- `tests/fixtures/go/complex.go`
- `tests/fixtures/go/generics.go`
- `tests/fixtures/go/go.mod`
- `tests/fixtures/go/imports.go`
- `tests/fixtures/go/interfaces.go`
- `tests/fixtures/go/module_project/go.mod`
- `tests/fixtures/go/module_project/internal/config/config.go`
- `tests/fixtures/go/module_project/main.go`
- `tests/fixtures/go/module_project/pkg/utils/utils.go`
- `tests/fixtures/go/qualified_names_test.go`
- `tests/fixtures/go/scoping.go`
- `tests/fixtures/go/structs.go`
- `tests/fixtures/go/vendor_project/go.mod`
- `tests/fixtures/go/vendor_project/main.go`
- `tests/fixtures/go/vendor_project/vendor/github.com/external/library/library.go`
- `tests/fixtures/lua/basic.lua`
- `tests/fixtures/lua/comments.lua`
- `tests/fixtures/lua/methods.lua`
- `tests/fixtures/lua/modules.lua`
- `tests/fixtures/lua/oop.lua`
- `tests/fixtures/sample_code/analyzer.rs`
- `tests/fixtures/sample_code/parser.rs`
- `tests/fixtures/sample_code/transformer.rs`
- `tests/fixtures/simple.rs`
- `tests/fixtures/types.rs`
- `tests/fixtures/typescript_alias_test/src/app.ts`
- `tests/fixtures/typescript_alias_test/src/components/Button.ts`
- `tests/fixtures/typescript_alias_test/tsconfig.json`
- `tests/integration/embedding_model_comparison.rs`
- `tests/integration/reranking_comparison.rs`
- `tests/integration/test_config_path_resolution.rs`
- `tests/integration/test_cross_module_resolution.rs`
- `tests/integration/test_external_import_resolution.rs`
- `tests/integration/test_gdscript_mcp.rs`
- `tests/integration/test_init_module.rs`
- `tests/integration/test_kotlin_semantic_search.rs`
- `tests/integration/test_mcp_schema.rs`
- `tests/integration/test_parse_command.rs`
- `tests/integration/test_pipeline_parse_stage.rs`
- `tests/integration/test_project_registry.rs`
- `tests/integration/test_provider_initialization.rs`
- `tests/integration/test_python_cross_module_resolution.rs`
- `tests/integration/test_resolution_persistence.rs`
- `tests/integration/test_resolve_kind_filter.rs`
- `tests/integration/test_resolve_param_type_inference.rs`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/autofix.yml`
- `.github/workflows/brew-update.yml`
- `.github/workflows/full-test.yml`
- `.github/workflows/pr-comment.yml`
- `.github/workflows/quick-check.yml`
- `.github/workflows/release.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .rs | 420 |
| .tsx | 96 |
| .ts | 49 |
| .md | 48 |
| .json | 28 |
| .js | 27 |
| .go | 22 |
| .sh | 17 |
| .txt | 15 |
| .py | 12 |
| .kt | 9 |
| .php | 9 |
| .gd | 8 |
| .lua | 8 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `examples/typescript/ 내부 책임 분리`
- `src/cli/commands/benchmark.rs 스펙/명령 의미`
- `src/cli/commands/directories.rs 스펙/명령 의미`
- `src/cli/commands/documents.rs 스펙/명령 의미`
- `src/cli/commands/index.rs 스펙/명령 의미`
- `src/cli/commands/init.rs 스펙/명령 의미`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `examples/go/app/go.mod 실행 스크립트와 패키지 경계`
- `examples/typescript/packages/web/tsconfig.json 실행 스크립트와 패키지 경계`
- `examples/typescript/react/package.json 실행 스크립트와 패키지 경계`
- `examples/typescript/react/pnpm-lock.yaml 실행 스크립트와 패키지 경계`

