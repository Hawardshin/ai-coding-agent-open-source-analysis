# kreuzberg-dev/kreuzberg 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/kreuzberg-dev__kreuzberg |
| remote | https://github.com/kreuzberg-dev/kreuzberg |
| HEAD | fa37ce6 (2026-06-17) chore(release): v5.0.0-rc.20 |
| branch | main |
| groups | llm-wiki-100 |
| files | 6472 |
| dirs | 745 |
| stack | Node/TypeScript/JavaScript, Python, Rust, Go |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Kreuzberg`, `Key Features`, `Installation`, `Platform Support`, `Mobile (iOS, Android)`, `Browsers / Edge (WebAssembly)`, `Embeddings Support (Optional)`, `Supported Formats`, `Office Documents`, `Images (OCR-Enabled)`, `Audio & Video`, `Web & Data`, `Email & Archives`, `Academic & Scientific`, `Code Intelligence (306 Languages)`, `Key Features`, `AI Coding Assistants`, `Documentation`

> Kreuzberg <div align="center" style="display flex; flex wrap wrap; gap 8px; justify content center; margin 20px 0;" <a href="https //github.com/kreuzberg dev/alef" <img src="https //img.shields.io/badge/Bindings alef%20%D7%90 007ec6" alt="Bindings" </a <! Language Bindings <a href="https //crates.io/crates/kreuzberg" <img src="https //img.shields.io/crates/v/kreuzberg?label=Rust&color=007ec6" alt="Rust" </a <a href="https //pypi.org/project/kreuzberg/" <img src="https //img.shields.io/pypi/v/kreuzberg?label=Python&color=007ec6" alt="Python" </a <a href="https //www.npmjs.com/package/@kreuzberg/node" <img src="https //img.shields.io/npm/v/@kreuzberg/node?label=Node.js&color=007ec6" alt="Node.js" </a <a href="https //www.npmjs.com/package/@kreuzberg/wasm" <img src="https //img.shields.io/npm/v/@kreuzberg/wasm?label=WASM&color=007ec6" alt="WASM" </a <a href="https //central.sonatype.com/art

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .ai-rulez | dir |
| .cargo | dir |
| .clang-format | file |
| .dockerignore | file |
| .editorconfig | file |
| .gh-actions-updater.toml | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .gitmodules | file |
| .golangci.yml | file |
| .lychee.toml | file |
| .npmrc | file |
| .oxfmtrc.json | file |
| .oxlintrc.json | file |
| .pre-commit-config.yaml | file |
| .rumdl.toml | file |
| .sdkmanrc | file |
| .shellcheckrc | file |
| .task | dir |
| .textlintrc.json | file |
| .typos.toml | file |
| alef.toml | file |
| ATTRIBUTIONS.md | file |
| audit-notes | dir |
| Cargo.lock | file |
| Cargo.toml | file |
| CHANGELOG.md | file |
| charts | dir |
| CODE_OF_CONDUCT.md | file |
| composer.json | file |
| composer.lock | file |
| config.m4 | file |
| CONTRIBUTING.md | file |
| crates | dir |
| csharp_e2e_output.txt | file |
| cycle-5-alef-queue.md | file |
| cycle4-blocker-investigation.md | file |
| deny.toml | file |
| docker | dir |
| docs | dir |
| e2e | dir |
| fix-go-bindings.sh | file |
| fixtures | dir |
| go.work | file |
| go.work.sum | file |
| kreuzberg.iml | file |
| LICENSE | file |
| package.json | file |
| Package.swift | file |
| packages | dir |
| pnpm-lock.yaml | file |
| pnpm-workspace.yaml | file |
| pyproject.toml | file |
| README.md | file |
| rust-toolchain.toml | file |
| rustfmt.toml | file |
| scripts | dir |
| SECURITY.md | file |
| server.json | file |
| Taskfile.yml | file |
| templates | dir |
| test_documents | dir |
| tools | dir |
| tsconfig.json | file |
| uv.lock | file |
| zensical.toml | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| docs/ | 2055 |
| tools/ | 1275 |
| packages/ | 1193 |
| crates/ | 1057 |
| e2e/ | 437 |
| scripts/ | 128 |
| fixtures/ | 116 |
| (root) | 51 |
| .github/ | 41 |
| .ai-rulez/ | 37 |
| .task/ | 24 |
| audit-notes/ | 24 |
| charts/ | 13 |
| templates/ | 12 |
| docker/ | 8 |
| .cargo/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 1193 | preferred |
| crates/ | 1057 | preferred |
| docs/ | 2055 | preferred |
| templates/ | 12 | preferred |
| tools/ | 1275 | preferred |
| scripts/ | 128 | preferred |
| docs/snippets/ | 1943 | large |
| tools/benchmark-harness/ | 1236 | large |
| crates/kreuzberg/ | 774 | large |
| tools/benchmark-harness/fixtures/ | 733 | large |
| crates/kreuzberg/src/ | 539 | large |
| e2e/ | 437 | large |
| tools/benchmark-harness/vendored/ | 409 | large |
| packages/java/ | 282 | large |
| packages/java/dev/ | 264 | large |
| packages/kotlin-android/ | 259 | large |
| packages/kotlin-android/src/ | 250 | large |
| packages/csharp/ | 247 | large |
| packages/csharp/src/ | 243 | large |
| packages/elixir/ | 235 | large |
| packages/elixir/lib/ | 226 | large |
| docs/snippets/csharp/ | 198 | large |
| docs/snippets/elixir/ | 165 | large |
| crates/kreuzberg/tests/ | 158 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `crates/kreuzberg-candle-ocr/Cargo.toml`
- `crates/kreuzberg-cli/Cargo.toml`
- `crates/kreuzberg-ffi/Cargo.toml`
- `crates/kreuzberg-jni/Cargo.toml`
- `crates/kreuzberg-libheif/Cargo.toml`
- `crates/kreuzberg-node/Cargo.toml`
- `crates/kreuzberg-node/npm/darwin-arm64/package.json`
- `crates/kreuzberg-node/npm/darwin-x64/package.json`
- `crates/kreuzberg-node/npm/linux-arm64-gnu/package.json`
- `crates/kreuzberg-node/npm/linux-arm64-musl/package.json`
- `crates/kreuzberg-node/npm/linux-x64-gnu/package.json`
- `crates/kreuzberg-node/npm/linux-x64-musl/package.json`
- `crates/kreuzberg-node/npm/win32-arm64-msvc/package.json`
- `crates/kreuzberg-node/npm/win32-x64-msvc/package.json`
- `crates/kreuzberg-node/package.json`
- `crates/kreuzberg-paddle-ocr/Cargo.toml`
- `crates/kreuzberg-pdfium-render/Cargo.toml`
- `crates/kreuzberg-php/Cargo.toml`
- `crates/kreuzberg-py/Cargo.toml`
- `crates/kreuzberg-py/src/pyproject.toml`
- `crates/kreuzberg-py/src/uv.lock`
- `crates/kreuzberg-tesseract/Cargo.toml`
- `crates/kreuzberg-wasm/Cargo.toml`
- `crates/kreuzberg-wasm/package.json`
- `crates/kreuzberg/Cargo.toml`
- `e2e/go/go.mod`
- `e2e/node/package.json`
- `e2e/node/tsconfig.json`
- `e2e/python/pyproject.toml`
- `e2e/python/uv.lock`
- `e2e/rust/Cargo.toml`
- `e2e/wasm/package.json`
- `e2e/wasm/pnpm-lock.yaml`
- `e2e/wasm/pnpm-workspace.yaml`
- `e2e/wasm/tsconfig.json`
- `package.json`
- `packages/dart/rust/Cargo.toml`
- `packages/elixir/native/kreuzberg_nif/Cargo.toml`
- `packages/go/go.mod`
- `packages/go/v5/go.mod`
- `packages/node/package.json`
- `packages/node/tsconfig.json`
- `packages/python/pyproject.toml`
- `packages/r/src/rust/Cargo.toml`
- `packages/ruby/ext/kreuzberg_rb/native/Cargo.toml`
- `packages/swift/rust/Cargo.toml`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `pyproject.toml`
- `tools/benchmark-harness/Cargo.toml`
- `tools/benchmark-harness/scripts/go.mod`
- `tools/generate_test_fixtures/pyproject.toml`
- `tools/snippet-runner/Cargo.toml`
- `tsconfig.json`
- `uv.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| crates/kreuzberg-node/npm/darwin-arm64/package.json | @kreuzberg/node-darwin-arm64 |  |  |
| crates/kreuzberg-node/npm/darwin-x64/package.json | @kreuzberg/node-darwin-x64 |  |  |
| crates/kreuzberg-node/npm/linux-arm64-gnu/package.json | @kreuzberg/node-linux-arm64-gnu |  |  |
| crates/kreuzberg-node/npm/linux-arm64-musl/package.json | @kreuzberg/node-linux-arm64-musl |  |  |
| crates/kreuzberg-node/npm/linux-x64-gnu/package.json | @kreuzberg/node-linux-x64-gnu |  |  |
| crates/kreuzberg-node/npm/linux-x64-musl/package.json | @kreuzberg/node-linux-x64-musl |  |  |
| crates/kreuzberg-node/npm/win32-arm64-msvc/package.json | @kreuzberg/node-win32-arm64-msvc |  |  |
| crates/kreuzberg-node/npm/win32-x64-msvc/package.json | @kreuzberg/node-win32-x64-msvc |  |  |
| crates/kreuzberg-node/package.json | @kreuzberg/node | build, artifacts, prepublishOnly |  |
| crates/kreuzberg-wasm/package.json | @kreuzberg/wasm | build, build:ci, build:wasm:web, build:wasm:bundler, build:wasm:nodejs, build:wasm:deno, build:all, test, test:watch, test:coverage, clean |  |
| e2e/node/package.json | @kreuzberg/node-e2e-typescript | test |  |
| e2e/wasm/package.json | @kreuzberg/wasm-e2e-wasm | test |  |
| package.json | kreuzberg-root | typecheck |  |
| packages/node/package.json | kreuzberg | build, build:debug, build:ts, test, format, format:check, lint, lint:fix |  |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| crates/kreuzberg-py/src/pyproject.toml | kreuzberg | false | false | true | false |
| e2e/python/pyproject.toml | kreuzberg-e2e | false | true | true | true |
| packages/python/pyproject.toml | kreuzberg | false | false | true | false |
| pyproject.toml |  | false | true | true | true |
| tools/generate_test_fixtures/pyproject.toml | generate-test-fixtures | false | false | true | true |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml |  | true |      "crates/kreuzberg",     "crates/kreuzberg-cli",     "crates/kreuzberg-ffi",     "crates/kreuzberg-jni",     "crates/kreuzberg-libheif",     "crates/kreuzberg-node",     "crate |
| crates/kreuzberg-candle-ocr/Cargo.toml | kreuzberg-candle-ocr | false |  |
| crates/kreuzberg-cli/Cargo.toml | kreuzberg-cli | false |  |
| crates/kreuzberg-ffi/Cargo.toml | kreuzberg-ffi | false |  |
| crates/kreuzberg-jni/Cargo.toml | kreuzberg-jni | false |  |
| crates/kreuzberg-libheif/Cargo.toml | kreuzberg-libheif | false |  |
| crates/kreuzberg-node/Cargo.toml | kreuzberg-node | false |  |
| crates/kreuzberg-paddle-ocr/Cargo.toml | kreuzberg-paddle-ocr | false |  |
| crates/kreuzberg-pdfium-render/Cargo.toml | kreuzberg-pdfium-render | false |  |
| crates/kreuzberg-php/Cargo.toml | kreuzberg-php | false |  |
| crates/kreuzberg-py/Cargo.toml | kreuzberg-py | false |  |
| crates/kreuzberg-tesseract/Cargo.toml | kreuzberg-tesseract | false |  |
| crates/kreuzberg-wasm/Cargo.toml | kreuzberg-wasm | false |  |
| crates/kreuzberg/Cargo.toml | kreuzberg | false |  |
| e2e/rust/Cargo.toml | kreuzberg-e2e-rust | true |  |
| packages/dart/rust/Cargo.toml | kreuzberg-dart | false |  |
| packages/elixir/native/kreuzberg_nif/Cargo.toml | kreuzberg_nif | true |  |
| packages/r/src/rust/Cargo.toml | kreuzberg-r | false |  |
| packages/ruby/ext/kreuzberg_rb/native/Cargo.toml | kreuzberg-rb | false |  |
| packages/swift/rust/Cargo.toml | kreuzberg-swift | false |  |
| tools/benchmark-harness/Cargo.toml | benchmark-harness | false |  |
| tools/snippet-runner/Cargo.toml | snippet-runner | false |  |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| e2e/go/go.mod | github.com/kreuzberg-dev/kreuzberg/v5/e2e | 1.26 |
| packages/go/go.mod | github.com/kreuzberg-dev/kreuzberg/v5 | 1.26 |
| packages/go/v5/go.mod | github.com/kreuzberg-dev/kreuzberg/v5 | 1.26 |
| tools/benchmark-harness/scripts/go.mod | github.com/kreuzberg-dev/kreuzberg/tools/benchmark-harness/scripts | 1.23 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.github/actions/setup-paddle-ocr-models/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `crates/kreuzberg-candle-ocr/README.md`
- `crates/kreuzberg-cli/README.md`
- `crates/kreuzberg-ffi/README.md`
- `crates/kreuzberg-libheif/README.md`
- `crates/kreuzberg-node/README.md`
- `crates/kreuzberg-paddle-ocr/README.md`
- `crates/kreuzberg-pdfium-render/README.md`
- `crates/kreuzberg-tesseract/README.md`
- `crates/kreuzberg-tesseract/patches/README.md`
- `crates/kreuzberg-wasm/README.md`
- `crates/kreuzberg/README.md`
- `crates/kreuzberg/src/extraction/doc/mod.rs`
- `docker/README.md`
- `docs/CHANGELOG.md`
- `docs/assets/Kreuzberg.svg`
- `docs/assets/docs_bottom_banner.svg`
- `docs/assets/docs_top_banner.svg`
- `docs/assets/favicon.ico`
- `docs/assets/feature-overview.png`
- `docs/assets/icons/chrevon-left.svg`
- `docs/assets/icons/close.svg`
- `docs/assets/icons/discord-white-bg.svg`
- `docs/assets/icons/file-copy-fill-2.svg`
- `docs/assets/icons/file-dark.svg`
- `docs/assets/icons/file-fill.svg`
- `docs/assets/icons/file-light.svg`
- `docs/assets/icons/flask-fill.svg`
- `docs/assets/icons/github-white-bg.svg`
- `docs/assets/icons/info-dark.svg`
- `docs/assets/icons/mobile-logo.svg`
- `docs/assets/icons/note-dark.svg`
- `docs/assets/icons/question-dark.svg`
- `docs/assets/icons/terminal-dark.svg`
- `docs/assets/icons/terminal-light.svg`
- `docs/assets/icons/tip-dark.svg`
- `docs/assets/icons/upload.svg`
- `docs/assets/icons/warning-dark.svg`
- `docs/assets/logo.svg`
- `docs/assets/og-image.png`
- `docs/cli/usage.md`
- `docs/comparisons/index.md`
- `docs/comparisons/kreuzberg-vs-docling.md`
- `docs/comparisons/kreuzberg-vs-markitdown.md`
- `docs/comparisons/kreuzberg-vs-mineru.md`
- `docs/comparisons/kreuzberg-vs-tika.md`
- `docs/comparisons/kreuzberg-vs-unstructured.md`
- `docs/concepts/architecture.md`
- ... 30 more

### 에이전트 지침 후보

- `.ai-rulez/skills/api-server-mcp/SKILL.md`
- `.ai-rulez/skills/chunking-embeddings/SKILL.md`
- `.ai-rulez/skills/extraction-pipeline-patterns/SKILL.md`
- `.ai-rulez/skills/format-specific-extraction/SKILL.md`
- `.ai-rulez/skills/plugin-architecture-patterns/SKILL.md`
- `crates/kreuzberg/src/mcp/errors.rs`
- `crates/kreuzberg/src/mcp/format.rs`
- `crates/kreuzberg/src/mcp/mod.rs`
- `crates/kreuzberg/src/mcp/params.rs`
- `crates/kreuzberg/src/mcp/server.rs`
- `crates/kreuzberg/tests/contract_mcp.rs`
- `crates/kreuzberg/tests/mcp_integration.rs`
- `docs/guides/agent-skills.md`
- `docs/guides/mcp-integration.md`
- `docs/snippets/c/mcp/mcp_custom_client.md`
- `docs/snippets/c/mcp/mcp_server_start.md`
- `docs/snippets/cli/mcp_go.md`
- `docs/snippets/cli/mcp_java.md`
- `docs/snippets/cli/mcp_python.md`
- `docs/snippets/cli/mcp_rust.md`
- `docs/snippets/cli/mcp_typescript.md`
- `docs/snippets/csharp/mcp/client.cs`
- `docs/snippets/csharp/mcp/mcp_custom_client.md`
- `docs/snippets/csharp/mcp/mcp_server_start.md`
- `docs/snippets/csharp/mcp/server.cs`
- `docs/snippets/csharp/mcp_custom_client.md`
- `docs/snippets/csharp/mcp_server_start.md`
- `docs/snippets/dart/mcp/mcp_custom_client.md`
- `docs/snippets/dart/mcp/mcp_server_start.md`
- `docs/snippets/docker/mcp_basic.md`
- `docs/snippets/elixir/mcp/mcp_custom_client.exs`
- `docs/snippets/elixir/mcp/mcp_server_start.exs`
- `docs/snippets/go/mcp/mcp_custom_client.md`
- `docs/snippets/go/mcp/mcp_server_start.md`
- `docs/snippets/java/mcp/mcp_client.md`
- `docs/snippets/java/mcp/mcp_custom_client.md`
- `docs/snippets/java/mcp/mcp_server_start.md`
- `docs/snippets/kotlin/mcp/mcp_custom_client.md`
- `docs/snippets/kotlin/mcp/mcp_server_start.md`
- `docs/snippets/php/mcp/mcp_custom_client.md`
- `docs/snippets/php/mcp/mcp_http_client.md`
- `docs/snippets/php/mcp/mcp_laravel_integration.md`
- `docs/snippets/php/mcp/mcp_server_start.md`
- `docs/snippets/python/mcp/mcp_custom_client.md`
- `docs/snippets/python/mcp/mcp_langchain_integration.md`
- `docs/snippets/python/mcp/mcp_server_start.md`
- `docs/snippets/r/mcp/mcp_custom_client.md`
- `docs/snippets/r/mcp/mcp_server_start.md`
- `docs/snippets/ruby/mcp/mcp_custom_client.md`
- `docs/snippets/ruby/mcp/mcp_server_start.md`
- `docs/snippets/rust/mcp/mcp_custom_client.md`
- `docs/snippets/rust/mcp/mcp_server_start.md`
- `docs/snippets/swift/mcp/mcp_custom_client.md`
- `docs/snippets/swift/mcp/mcp_server_start.md`
- `docs/snippets/typescript/mcp/client.md`
- `docs/snippets/typescript/mcp/mcp_custom_client.md`
- `docs/snippets/typescript/mcp/mcp_server_start.md`
- `docs/snippets/typescript/mcp/server.md`
- `docs/snippets/wasm/mcp/mcp_custom_client.md`
- `docs/snippets/wasm/mcp/mcp_server_start.md`
- `docs/snippets/zig/mcp/mcp_custom_client.md`
- `docs/snippets/zig/mcp/mcp_server_start.md`

### 스펙/템플릿/명령/스킬 후보

- `.ai-rulez/skills/api-server-mcp/SKILL.md`
- `.ai-rulez/skills/chunking-embeddings/SKILL.md`
- `.ai-rulez/skills/extraction-pipeline-patterns/SKILL.md`
- `.ai-rulez/skills/format-specific-extraction/SKILL.md`
- `.ai-rulez/skills/plugin-architecture-patterns/SKILL.md`
- `charts/kreuzberg/templates/_helpers.tpl`
- `charts/kreuzberg/templates/deployment.yaml`
- `charts/kreuzberg/templates/hpa.yaml`
- `charts/kreuzberg/templates/ingress.yaml`
- `charts/kreuzberg/templates/pdb.yaml`
- `charts/kreuzberg/templates/pvc.yaml`
- `charts/kreuzberg/templates/service.yaml`
- `charts/kreuzberg/templates/serviceaccount.yaml`
- `charts/kreuzberg/templates/tests/test-connection.yaml`
- `crates/kreuzberg-cli/src/commands/cache.rs`
- `crates/kreuzberg-cli/src/commands/chunk.rs`
- `crates/kreuzberg-cli/src/commands/config.rs`
- `crates/kreuzberg-cli/src/commands/embed.rs`
- `crates/kreuzberg-cli/src/commands/extract.rs`
- `crates/kreuzberg-cli/src/commands/extract_structured.rs`
- `crates/kreuzberg-cli/src/commands/mod.rs`
- `crates/kreuzberg-cli/src/commands/ner.rs`
- `crates/kreuzberg-cli/src/commands/overrides.rs`
- `crates/kreuzberg-cli/src/commands/server.rs`
- `crates/kreuzberg-cli/src/commands/tree_sitter.rs`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `charts/kreuzberg/templates/tests/test-connection.yaml`
- `crates/kreuzberg-candle-ocr/tests/deepseek_ocr_integration.rs`
- `crates/kreuzberg-candle-ocr/tests/glm_ocr_integration.rs`
- `crates/kreuzberg-candle-ocr/tests/glm_ocr_paired_pipeline.rs`
- `crates/kreuzberg-candle-ocr/tests/hunyuan_ocr_integration.rs`
- `crates/kreuzberg-candle-ocr/tests/paddleocr_vl_15_integration.rs`
- `crates/kreuzberg-candle-ocr/tests/paddleocr_vl_integration.rs`
- `crates/kreuzberg-candle-ocr/tests/trocr_integration.rs`
- `crates/kreuzberg-cli/tests/commands_test.rs`
- `crates/kreuzberg-cli/tests/config_discovery_test.rs`
- `crates/kreuzberg-cli/tests/config_env_overrides_test.rs`
- `crates/kreuzberg-cli/tests/config_tests.rs`
- `crates/kreuzberg-cli/tests/contract_cli.rs`
- `crates/kreuzberg-cli/tests/e2e_config_test.rs`
- `crates/kreuzberg-cli/tests/extract_envelope.rs`
- `crates/kreuzberg-cli/tests/server_test.rs`
- `crates/kreuzberg-ffi/tests/email_attachment_data_len.rs`
- `crates/kreuzberg-ffi/tests/vtable_bytes_len.rs`
- `crates/kreuzberg-libheif/tests/decode_smoke.rs`
- `crates/kreuzberg-paddle-ocr/tests/diagnostic.rs`
- `crates/kreuzberg-tesseract/tests/integration_test.rs`
- `crates/kreuzberg-wasm/typescript/ocr/enabler.spec.ts`
- `crates/kreuzberg/src/core/server_config/tests/basic_tests.rs`
- `crates/kreuzberg/src/core/server_config/tests/env_tests.rs`
- `crates/kreuzberg/src/core/server_config/tests/file_loading_tests.rs`
- `crates/kreuzberg/src/core/server_config/tests/mod.rs`
- `crates/kreuzberg/tests/api_chunk.rs`
- `crates/kreuzberg/tests/api_consistency.rs`
- `crates/kreuzberg/tests/api_embed.rs`
- `crates/kreuzberg/tests/api_extract_multipart.rs`
- `crates/kreuzberg/tests/api_large_pdf_extraction.rs`
- `crates/kreuzberg/tests/api_large_pdf_extraction_diagnostics.rs`
- `crates/kreuzberg/tests/api_logging.rs`
- `crates/kreuzberg/tests/api_openweb.rs`
- `crates/kreuzberg/tests/api_rerank.rs`
- `crates/kreuzberg/tests/api_tests.rs`
- `crates/kreuzberg/tests/archive_integration.rs`
- `crates/kreuzberg/tests/batch_orchestration.rs`
- `crates/kreuzberg/tests/batch_pooling_benchmark.rs`
- `crates/kreuzberg/tests/batch_processing.rs`
- `crates/kreuzberg/tests/bibtex_parity_test.rs`
- `crates/kreuzberg/tests/candle_backends.rs`
- `crates/kreuzberg/tests/captioning_api.rs`
- `crates/kreuzberg/tests/captioning_smoke.rs`
- `crates/kreuzberg/tests/classification.rs`
- `crates/kreuzberg/tests/concurrency_stress.rs`
- `crates/kreuzberg/tests/config_behavioral.rs`
- `crates/kreuzberg/tests/config_features.rs`
- `crates/kreuzberg/tests/config_integration_test.rs`
- `crates/kreuzberg/tests/config_loading_tests.rs`
- `crates/kreuzberg/tests/contract_mcp.rs`
- `crates/kreuzberg/tests/core_integration.rs`
- `crates/kreuzberg/tests/cross_format_parity.rs`
- `crates/kreuzberg/tests/csv_embedding_quality.rs`
- `crates/kreuzberg/tests/csv_integration.rs`
- `crates/kreuzberg/tests/data/hierarchy_ground_truth.json`
- `crates/kreuzberg/tests/docbook_extractor_tests.rs`
- `crates/kreuzberg/tests/docx_formatting_test.rs`
- `crates/kreuzberg/tests/docx_metadata_extraction_test.rs`
- `crates/kreuzberg/tests/docx_mime_detection_test.rs`
- `crates/kreuzberg/tests/docx_ocr_integration_test.rs`
- `crates/kreuzberg/tests/email_integration.rs`
- `crates/kreuzberg/tests/embedding_preset_stubs.rs`
- `crates/kreuzberg/tests/enrich.rs`
- `crates/kreuzberg/tests/epub_markdown_headings_tests.rs`
- `crates/kreuzberg/tests/epub_native_extractor_tests.rs`
- `crates/kreuzberg/tests/epub_spine_semantics_tests.rs`
- `crates/kreuzberg/tests/error_handling.rs`
- `crates/kreuzberg/tests/extraction_timeout_tests.rs`
- `crates/kreuzberg/tests/fictionbook_extractor_tests.rs`
- `crates/kreuzberg/tests/fixtures/preset_live/query_doc_pairs.json`
- `crates/kreuzberg/tests/format_integration.rs`
- `crates/kreuzberg/tests/generated_fixtures.rs`
- `crates/kreuzberg/tests/glm_ocr_backend.rs`
- `crates/kreuzberg/tests/gpu_acceleration.rs`
- `crates/kreuzberg/tests/heic_integration.rs`
- `crates/kreuzberg/tests/helpers/mod.rs`
- `crates/kreuzberg/tests/html_output_quality.rs`
- `crates/kreuzberg/tests/html_table_test.rs`
- `crates/kreuzberg/tests/image_classification.rs`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/benchmarks.yaml`
- `.github/workflows/ci-docker.yaml`
- `.github/workflows/ci-docs.yaml`
- `.github/workflows/ci-e2e.yaml`
- `.github/workflows/ci-gpu.yaml`
- `.github/workflows/ci-lint.yaml`
- `.github/workflows/ci-mobile.yaml`
- `.github/workflows/ci-rust.yaml`
- `.github/workflows/dart.yml`
- `.github/workflows/gleam.yml`
- `.github/workflows/kotlin.yml`
- `.github/workflows/profiling.yaml`
- `.github/workflows/publish-docker.yaml`
- `.github/workflows/publish-helm.yaml`
- `.github/workflows/publish-pubdev.yaml`
- `.github/workflows/publish.yaml`
- `.github/workflows/swift.yml`
- `.github/workflows/validate-issues.yml`
- `.github/workflows/validate-pr.yml`
- `.github/workflows/zig.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 2048 |
| .rs | 1024 |
| .json | 945 |
| .cs | 332 |
| .java | 308 |
| .kt | 274 |
| .ex | 227 |
| .ms | 203 |
| .sh | 114 |
| .ts | 112 |
| .exs | 108 |
| .php | 100 |
| .py | 80 |
| .yml | 52 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `crates/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `templates/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `.ai-rulez/skills/api-server-mcp/SKILL.md 스펙/명령 의미`
- `.ai-rulez/skills/chunking-embeddings/SKILL.md 스펙/명령 의미`
- `.ai-rulez/skills/extraction-pipeline-patterns/SKILL.md 스펙/명령 의미`
- `.ai-rulez/skills/format-specific-extraction/SKILL.md 스펙/명령 의미`
- `.ai-rulez/skills/plugin-architecture-patterns/SKILL.md 스펙/명령 의미`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `crates/kreuzberg-candle-ocr/Cargo.toml 실행 스크립트와 패키지 경계`
- `crates/kreuzberg-cli/Cargo.toml 실행 스크립트와 패키지 경계`
- `crates/kreuzberg-ffi/Cargo.toml 실행 스크립트와 패키지 경계`
- `crates/kreuzberg-jni/Cargo.toml 실행 스크립트와 패키지 경계`

