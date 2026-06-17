# tontinton/maki 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/tontinton__maki |
| remote | https://github.com/tontinton/maki.git |
| HEAD | c397d7a (2026-06-16) providers: use adaptive thinking for Opus 4.7+ budgets |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 410 |
| dirs | 93 |
| stack | Rust |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Features`, `Context efficiency`, `User experience`, `Supported providers`, `Installation`, `Recommended`, `Download and read the script first (don't blindly trust shell scripts).`, `Then run.`, `One-liner`, `Living on the edge (main branch)`, `With Nix`, `ACP`, `Documentation`, `Extending with Lua`, `Example config`

> <img src="./banner.png" An AI coding agent optimized for minimal use of context tokens, while providing a great user experience. Features Context efficiency index tool uses tree sitter to parse supported programming languages to produce a high level skeleton of a file, with exact start end lines of each item (e.g. a function's implementation is in lines 150 165). Encouraged to be used before reads. For my usage it adds 59 tok/turn but saves 224 tok/turn on read calls, saving 165 tok/turn. code execution tool uses monty to run an interpreter that has all other tools available as async functions. Maki uses it to filter / summarize / transform / pipe data to other tools as input, without it ever reaching and polluting the context window. Sandbox limited by time & memory. task tool when delegating work to subagents, the AI chooses whether to run weak / medium / strong model of used provider.

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .config | dir |
| .envrc | file |
| .github | dir |
| .gitignore | file |
| .stylua.toml | file |
| AGENTS.md | file |
| banner.png | file |
| Cargo.lock | file |
| Cargo.toml | file |
| CONTRIBUTING.md | file |
| flake.lock | file |
| flake.nix | file |
| install.sh | file |
| justfile | file |
| LICENSE | file |
| maki-acp | dir |
| maki-agent | dir |
| maki-config | dir |
| maki-config-macro | dir |
| maki-docgen | dir |
| maki-highlight | dir |
| maki-interpreter | dir |
| maki-lua | dir |
| maki-markdown | dir |
| maki-providers | dir |
| maki-storage | dir |
| maki-tool-macro | dir |
| maki-ui | dir |
| plugins | dir |
| README.md | file |
| scripts | dir |
| site | dir |
| src | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| maki-ui/ | 92 |
| plugins/ | 85 |
| maki-agent/ | 59 |
| maki-lua/ | 37 |
| maki-providers/ | 30 |
| site/ | 28 |
| (root) | 14 |
| maki-storage/ | 13 |
| src/ | 11 |
| maki-docgen/ | 8 |
| maki-acp/ | 6 |
| scripts/ | 6 |
| maki-interpreter/ | 5 |
| .github/ | 3 |
| maki-config/ | 3 |
| maki-markdown/ | 3 |
| maki-config-macro/ | 2 |
| maki-highlight/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 11 | preferred |
| scripts/ | 6 | preferred |
| plugins/ | 85 | preferred |
| maki-ui/ | 92 | large |
| maki-ui/src/ | 90 | large |
| maki-agent/ | 59 | large |
| maki-agent/src/ | 58 | large |
| plugins/index/ | 57 | large |
| maki-lua/ | 37 | large |
| maki-lua/src/ | 33 | large |
| maki-ui/src/components/ | 33 | large |
| plugins/index/lang/ | 31 | large |
| maki-providers/ | 30 | large |
| maki-providers/src/ | 29 | large |
| site/ | 28 | large |
| maki-lua/src/api/ | 27 | large |
| maki-ui/src/themes/ | 25 | large |
| plugins/index/tests/ | 24 | large |
| maki-providers/src/providers/ | 22 | large |
| maki-agent/src/tools/ | 21 | large |
| site/docs/ | 16 | large |
| maki-agent/src/mcp/ | 13 | large |
| maki-storage/ | 13 | large |
| maki-storage/src/ | 12 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `maki-acp/Cargo.toml`
- `maki-agent/Cargo.toml`
- `maki-config-macro/Cargo.toml`
- `maki-config/Cargo.toml`
- `maki-docgen/Cargo.toml`
- `maki-highlight/Cargo.toml`
- `maki-interpreter/Cargo.toml`
- `maki-lua/Cargo.toml`
- `maki-markdown/Cargo.toml`
- `maki-providers/Cargo.toml`
- `maki-storage/Cargo.toml`
- `maki-tool-macro/Cargo.toml`
- `maki-ui/Cargo.toml`

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml | maki | true |    "maki-acp",   "maki-agent",   "maki-config",   "maki-docgen",   "maki-highlight",   "maki-interpreter",   "maki-lua",   "maki-markdown",   "maki-providers",   "maki-storage",    |
| maki-acp/Cargo.toml | maki-acp | false |  |
| maki-agent/Cargo.toml | maki-agent | false |  |
| maki-config-macro/Cargo.toml | maki-config-macro | false |  |
| maki-config/Cargo.toml | maki-config | false |  |
| maki-docgen/Cargo.toml | maki-docgen | false |  |
| maki-highlight/Cargo.toml | maki-highlight | false |  |
| maki-interpreter/Cargo.toml | maki-interpreter | false |  |
| maki-lua/Cargo.toml | maki-lua | false |  |
| maki-markdown/Cargo.toml | maki-markdown | false |  |
| maki-providers/Cargo.toml | maki-providers | false |  |
| maki-storage/Cargo.toml | maki-storage | false |  |
| maki-tool-macro/Cargo.toml | maki-tool-macro | false |  |
| maki-ui/Cargo.toml | maki-ui | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `plugins/index/lang/bazel/README.md`
- `site/docs/config.toml`
- `site/docs/content/_index.md`
- `site/docs/content/acp/_index.md`
- `site/docs/content/commands/_index.md`
- `site/docs/content/configuration/_index.md`
- `site/docs/content/headless/_index.md`
- `site/docs/content/keybindings/_index.md`
- `site/docs/content/mcp/_index.md`
- `site/docs/content/permissions/_index.md`
- `site/docs/content/providers/_index.md`
- `site/docs/content/quick-start/_index.md`
- `site/docs/content/tools/_index.md`
- `site/docs/templates/base.html`
- `site/docs/templates/index.html`
- `site/docs/templates/page.html`
- `site/docs/templates/section.html`

### 에이전트 지침 후보

- `AGENTS.md`
- `maki-agent/src/mcp/config.rs`
- `maki-agent/src/mcp/error.rs`
- `maki-agent/src/mcp/http.rs`
- `maki-agent/src/mcp/mod.rs`
- `maki-agent/src/mcp/oauth/callback.rs`
- `maki-agent/src/mcp/oauth/discovery.rs`
- `maki-agent/src/mcp/oauth/mod.rs`
- `maki-agent/src/mcp/oauth/pkce.rs`
- `maki-agent/src/mcp/oauth/registration.rs`
- `maki-agent/src/mcp/oauth/token.rs`
- `maki-agent/src/mcp/protocol.rs`
- `maki-agent/src/mcp/stdio.rs`
- `maki-agent/src/mcp/transport.rs`
- `maki-lua/src/api/AGENTS.md`
- `maki-ui/src/components/mcp_picker.rs`
- `plugins/skill/init.lua`
- `plugins/skill/skill_helpers.lua`
- `plugins/skill/tests/spec.lua`
- `site/docs/content/mcp/_index.md`

### 스펙/템플릿/명령/스킬 후보

- `site/docs/content/commands/_index.md`
- `site/docs/templates/base.html`
- `site/docs/templates/index.html`
- `site/docs/templates/page.html`
- `site/docs/templates/section.html`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `maki-lua/tests/plugin_host.rs`
- `maki-lua/tests/spec.rs`
- `maki-lua/tests/treesitter_compat.rs`
- `plugins/index/tests/helpers.lua`
- `plugins/index/tests/lang/bash.lua`
- `plugins/index/tests/lang/bazel.lua`
- `plugins/index/tests/lang/c.lua`
- `plugins/index/tests/lang/c_sharp.lua`
- `plugins/index/tests/lang/cpp.lua`
- `plugins/index/tests/lang/elixir.lua`
- `plugins/index/tests/lang/gleam.lua`
- `plugins/index/tests/lang/go.lua`
- `plugins/index/tests/lang/html.lua`
- `plugins/index/tests/lang/java.lua`
- `plugins/index/tests/lang/kotlin.lua`
- `plugins/index/tests/lang/lua_lang.lua`
- `plugins/index/tests/lang/markdown.lua`
- `plugins/index/tests/lang/nix.lua`
- `plugins/index/tests/lang/php.lua`
- `plugins/index/tests/lang/python.lua`
- `plugins/index/tests/lang/ruby.lua`
- `plugins/index/tests/lang/rust.lua`
- `plugins/index/tests/lang/scala.lua`
- `plugins/index/tests/lang/swift.lua`
- `plugins/index/tests/lang/typescript.lua`
- `plugins/index/tests/lang/zig.lua`
- `plugins/index/tests/spec.lua`
- `plugins/lib/tests/spec.lua`
- `plugins/memory/tests/spec.lua`
- `plugins/question/tests/spec.lua`
- `plugins/read/tests/spec.lua`
- `plugins/skill/tests/spec.lua`
- `plugins/webfetch/tests/spec.lua`
- `plugins/websearch/tests/spec.lua`

### CI/Docker 후보

- `.github/workflows/python.yml`
- `.github/workflows/release.yml`
- `.github/workflows/rust.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .rs | 218 |
| .lua | 84 |
| .toml | 42 |
| .md | 30 |
| .png | 6 |
| .html | 5 |
| .py | 5 |
| .yml | 3 |
| .lock | 2 |
| .sh | 2 |
| .txt | 2 |
| .cast | 1 |
| .css | 1 |
| .envrc | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `plugins/ 내부 책임 분리`
- `maki-ui/ 내부 책임 분리`
- `maki-ui/src/ 내부 책임 분리`
- `site/docs/content/commands/_index.md 스펙/명령 의미`
- `site/docs/templates/base.html 스펙/명령 의미`
- `site/docs/templates/index.html 스펙/명령 의미`
- `site/docs/templates/page.html 스펙/명령 의미`
- `site/docs/templates/section.html 스펙/명령 의미`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `maki-acp/Cargo.toml 실행 스크립트와 패키지 경계`
- `maki-agent/Cargo.toml 실행 스크립트와 패키지 경계`
- `maki-config-macro/Cargo.toml 실행 스크립트와 패키지 경계`
- `maki-config/Cargo.toml 실행 스크립트와 패키지 경계`

