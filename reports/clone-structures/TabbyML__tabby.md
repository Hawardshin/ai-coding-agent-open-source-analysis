# TabbyML/tabby 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/TabbyML__tabby |
| remote | https://github.com/TabbyML/tabby |
| HEAD | e8608d6 (2026-03-02) feat: add Avian as a model provider (#4448) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 2093 |
| dirs | 485 |
| stack | Node/TypeScript/JavaScript, Python, Rust |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `🐾 Tabby`, `🔥 What's New`, `👋 Getting Started`, `Run Tabby in 1 Minute`, `🤝 Contributing`, `Get the Code`, `Build`, `For MacOS`, `For Ubuntu / Debian`, `For Ubuntu`, `Start Hacking!`, `🌍 Community`, `🔆 Activity`, `🌟 Star History`

> <div align="center" 🐾 Tabby 📚 Docs • 💬 Slack • 🗺️ Roadmap English 简体中文 日本語 </div Tabby is a self hosted AI coding assistant, offering an open source and on premises alternative to GitHub Copilot. It boasts several key features Self contained, with no need for a DBMS or cloud service. OpenAPI interface, easy to integrate with existing infrastructure (e.g Cloud IDE). Supports consumer grade GPUs. <p align="center" <a target=" blank" href="https //tabby.tabbyml.com" <img alt="Open Live Demo" src="https //img.shields.io/badge/OPEN LIVE DEMO blue?logo=xcode&style=for the badge&logoColor=green" </a </p <p align="center" <img alt="Demo" src="https //user images.githubusercontent.com/388154/230440226 9bc01d05 9f57 478b b04d 81184eba14ca.gif" </p 🔥 What's New 12/12/2025 Get your GitHub issues implemented by connecting them to Pochi tasks and create PRs directly from the sidebar with a breakd

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .changes | dir |
| .changie.yaml | file |
| .dockerignore | file |
| .env | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .gitmodules | file |
| .rustfmt.toml | file |
| .tmuxinator | dir |
| Cargo.lock | file |
| Cargo.toml | file |
| CHANGELOG.md | file |
| ci | dir |
| clients | dir |
| CODE_OF_CONDUCT.md | file |
| codecov.yml | file |
| CONTRIBUTING.md | file |
| crates | dir |
| docker | dir |
| ee | dir |
| experimental | dir |
| LICENSE | file |
| Makefile | file |
| MODEL_SPEC.md | file |
| package.json | file |
| pnpm-lock.yaml | file |
| pnpm-workspace.yaml | file |
| python | dir |
| README-ja.md | file |
| README-zh.md | file |
| README.md | file |
| rules | dir |
| sgconfig.yml | file |
| target | dir |
| turbo.json | file |
| website | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| ee/ | 946 |
| clients/ | 558 |
| website/ | 231 |
| crates/ | 175 |
| experimental/ | 55 |
| python/ | 40 |
| .changes/ | 34 |
| (root) | 24 |
| .github/ | 18 |
| rules/ | 6 |
| ci/ | 3 |
| docker/ | 2 |
| .tmuxinator/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| crates/ | 175 | preferred |
| ee/ | 946 | large |
| clients/ | 558 | large |
| ee/tabby-ui/ | 407 | large |
| ee/tabby-webserver/ | 355 | large |
| ee/tabby-webserver/ui/ | 267 | large |
| website/ | 231 | large |
| ee/tabby-ui/app/ | 205 | large |
| clients/tabby-agent/ | 149 | large |
| website/docs/ | 136 | large |
| ee/tabby-db/ | 132 | large |
| clients/eclipse/ | 130 | large |
| clients/tabby-agent/src/ | 125 | large |
| clients/eclipse/plugin/ | 118 | large |
| ee/tabby-ui/components/ | 118 | large |
| clients/intellij/ | 114 | large |
| clients/intellij/src/ | 100 | large |
| ee/tabby-db/migrations/ | 98 | large |
| clients/vscode/ | 94 | large |
| ee/tabby-webserver/src/ | 79 | large |
| website/blog/ | 70 | large |
| ee/tabby-ui/lib/ | 60 | large |
| website/docs/administration/ | 57 | large |
| clients/vscode/src/ | 55 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Cargo.toml`
- `clients/eclipse/package.json`
- `clients/intellij/package.json`
- `clients/tabby-agent/package.json`
- `clients/tabby-agent/tsconfig.json`
- `clients/tabby-chat-panel/package.json`
- `clients/tabby-chat-panel/tsconfig.json`
- `clients/tabby-openapi/package.json`
- `clients/tabby-threads/package.json`
- `clients/tabby-threads/tsconfig.json`
- `clients/vscode/package.json`
- `clients/vscode/tsconfig.json`
- `crates/aim-downloader/Cargo.toml`
- `crates/hash-ids/Cargo.toml`
- `crates/http-api-bindings/Cargo.toml`
- `crates/llama-cpp-server/Cargo.toml`
- `crates/ollama-api-bindings/Cargo.toml`
- `crates/sqlx-migrate-validate/Cargo.toml`
- `crates/tabby-common/Cargo.toml`
- `crates/tabby-crawler/Cargo.toml`
- `crates/tabby-download/Cargo.toml`
- `crates/tabby-git/Cargo.toml`
- `crates/tabby-index-cli/Cargo.toml`
- `crates/tabby-index/Cargo.toml`
- `crates/tabby-inference/Cargo.toml`
- `crates/tabby/Cargo.toml`
- `ee/tabby-db-macros/Cargo.toml`
- `ee/tabby-db/Cargo.toml`
- `ee/tabby-email/package.json`
- `ee/tabby-schema/Cargo.toml`
- `ee/tabby-ui/next.config.js`
- `ee/tabby-ui/package.json`
- `ee/tabby-ui/tsconfig.json`
- `ee/tabby-webserver/Cargo.toml`
- `experimental/eval/tabby-python-client/pyproject.toml`
- `experimental/prompt-rewrite-eval/requirements.txt`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `python/tabby-eval/modal/tabby_python_client/pyproject.toml`
- `turbo.json`
- `website/blog/2024-03-26-tabby-with-replicas-behind-reverse-proxy/docker-compose.yml`
- `website/package.json`
- `website/yarn.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| clients/eclipse/package.json | tabby4eclipse | build |  |
| clients/intellij/package.json | intellij-tabby |  |  |
| clients/tabby-agent/package.json | tabby-agent | build, watch, vscode:dev, openapi-codegen, test, lint, lint:fix |  |
| clients/tabby-chat-panel/package.json | tabby-chat-panel | build, build:unbuild, build:rollup, dev, lint, lint:fix, prepack, preview, release, start, test, test:watch, typecheck | react, semver, tabby-threads |
| clients/tabby-openapi/package.json | tabby-openapi | codegen, codegen:fetch |  |
| clients/tabby-threads/package.json | tabby-threads | build | @quilted/events, @quilted/signals |
| clients/vscode/package.json | vscode-tabby | build, watch, vscode:dev, dev:vscode, dev:browser, lint, lint:fix, vscode:prepackage, vscode:package, vscode:prepublish, vscode:publish, vscode:publish-prerelease, ovsx:publish, ovsx:publish-prerelease, package, publish |  |
| ee/tabby-email/package.json | emails | build, dev |  |
| ee/tabby-ui/package.json | tabby-ui | dev, dev:next, dev:codegen, build, prebuild, start, lint, lint:fix, test, preview, type-check, format:write, format:check, codegen, codegen:watch | @codemirror/language, @codemirror/search, @codemirror/state, @codemirror/theme-one-dark, @codemirror/view, @curvenote/ansi-to-react, @hookform/resolvers, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu |
| package.json |  | build, vscode:dev, lint, lint:fix, test |  |
| website/package.json | docs | docusaurus, start, prebuild, build, swizzle, deploy, clear, serve, write-translations, write-heading-ids | @docusaurus/core, @docusaurus/plugin-client-redirects, @docusaurus/preset-classic, @mdx-js/react, @monaco-editor/react, autoprefixer, axios, clsx, docusaurus-preset-openapi, postcss, posthog-docusaurus, prism-react-renderer, raw-loader, react |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| experimental/eval/tabby-python-client/pyproject.toml |  | false | false | false | false |
| python/tabby-eval/modal/tabby_python_client/pyproject.toml |  | false | false | false | false |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| Cargo.toml |  | true |      "crates/tabby",     "crates/tabby-common",     "crates/tabby-download",     "crates/tabby-git",     "crates/tabby-inference",     "crates/tabby-index",     "crates/tabby-crawl |
| crates/aim-downloader/Cargo.toml | aim-downloader | false |  |
| crates/hash-ids/Cargo.toml | hash-ids | false |  |
| crates/http-api-bindings/Cargo.toml | http-api-bindings | false |  |
| crates/llama-cpp-server/Cargo.toml | llama-cpp-server | false |  |
| crates/ollama-api-bindings/Cargo.toml | ollama-api-bindings | false |  |
| crates/sqlx-migrate-validate/Cargo.toml | sqlx-migrate-validate | false |  |
| crates/tabby-common/Cargo.toml | tabby-common | false |  |
| crates/tabby-crawler/Cargo.toml | tabby-crawler | false |  |
| crates/tabby-download/Cargo.toml | tabby-download | false |  |
| crates/tabby-git/Cargo.toml | tabby-git | false |  |
| crates/tabby-index-cli/Cargo.toml | tabby-index-cli | false |  |
| crates/tabby-index/Cargo.toml | tabby-index | false |  |
| crates/tabby-inference/Cargo.toml | tabby-inference | false |  |
| crates/tabby/Cargo.toml | tabby | false |  |
| ee/tabby-db-macros/Cargo.toml | tabby-db-macros | false |  |
| ee/tabby-db/Cargo.toml | tabby-db | false |  |
| ee/tabby-schema/Cargo.toml | tabby-schema | false |  |
| ee/tabby-webserver/Cargo.toml | tabby-webserver | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `clients/eclipse/README.md`
- `clients/eclipse/docs/eclipse-export-archive-select-features.jpg`
- `clients/eclipse/docs/eclipse-export-archive-select-wizard.jpg`
- `clients/eclipse/docs/eclipse-import-project-select-project.jpg`
- `clients/eclipse/docs/eclipse-import-project-select-wizard.jpg`
- `clients/eclipse/docs/eclipse-launch-application.jpg`
- `clients/example-vscode-lsp/README.md`
- `clients/intellij/README.md`
- `clients/tabby-agent/README.md`
- `clients/tabby-chat-panel/README.md`
- `clients/tabby-threads/README.md`
- `clients/vim/README.md`
- `clients/vim/doc/tabby.txt`
- `clients/vscode/CONTRIBUTING.md`
- `clients/vscode/README.md`
- `crates/aim-downloader/README.md`
- `crates/hash-ids/src/README.md`
- `crates/sqlx-migrate-validate/README.md`
- `crates/tabby-index-cli/README.md`
- `crates/tabby-index/README.md`
- `ee/tabby-db/docs/sqlx.md`
- `ee/tabby-email/README.md`
- `ee/tabby-ui/README.md`
- `ee/tabby-ui/app/(dashboard)/settings/(integrations)/providers/doc/components/create-custom-doc.tsx`
- `ee/tabby-ui/app/(dashboard)/settings/(integrations)/providers/doc/components/custom-doc.tsx`
- `ee/tabby-ui/app/(dashboard)/settings/(integrations)/providers/doc/components/preset-doc.tsx`
- `ee/tabby-ui/app/(dashboard)/settings/(integrations)/providers/doc/new/page.tsx`
- `ee/tabby-ui/app/(dashboard)/settings/(integrations)/providers/doc/page.tsx`
- `ee/tabby-webserver/docs/api_spec.md`
- `ee/tabby-webserver/ui/_next/static/chunks/app/(dashboard)/settings/(integrations)/providers/doc/new/page-b558042910b63bae.js`
- `ee/tabby-webserver/ui/_next/static/chunks/app/(dashboard)/settings/(integrations)/providers/doc/page-95cb24a09802216c.js`
- `ee/tabby-webserver/ui/settings/providers/doc/new.html`
- `ee/tabby-webserver/ui/settings/providers/doc/new.txt`
- `experimental/copy-to-modelscope/README.md`
- `experimental/eval/tabby-python-client/README.md`
- `experimental/prompt-rewrite-eval/README.md`
- `python/tabby-eval/modal/tabby_python_client/README.md`
- `python/tabby-loadtest/README.md`
- `website/docs/administration/_category_.yml`
- `website/docs/administration/answer-engine/answer_engine.png`
- `website/docs/administration/answer-engine/doc_thinking_process.png`
- `website/docs/administration/answer-engine/index.mdx`
- `website/docs/administration/answer-engine/mention_documentation.png`
- `website/docs/administration/answer-engine/recent_activities.png`
- `website/docs/administration/answer-engine/repository_select.png`
- `website/docs/administration/answer-engine/repository_thinking_process.png`
- `website/docs/administration/answer-engine/share_link_button.png`
- `website/docs/administration/answer-engine/web_search.png`
- ... 30 more

### 에이전트 지침 후보

_없음_

### 스펙/템플릿/명령/스킬 후보

- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/OpenPreferences.java`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/chat/AddFileToChat.java`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/chat/AddSelectionToChat.java`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/chat/Explain.java`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/chat/Fix.java`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/chat/GenerateDocs.java`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/chat/GenerateTests.java`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/chat/OpenChatView.java`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/chat/ToggleChatView.java`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/inlineCompletion/Accept.java`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/inlineCompletion/AcceptNextLine.java`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/inlineCompletion/AcceptNextWord.java`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/inlineCompletion/Dismiss.java`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/inlineCompletion/Next.java`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/inlineCompletion/Previous.java`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/inlineCompletion/Trigger.java`
- `clients/vscode/src/commands/branchQuickPick.ts`
- `clients/vscode/src/commands/commandPalette.ts`
- `clients/vscode/src/commands/connectToServer.ts`
- `clients/vscode/src/commands/index.ts`
- `crates/tabby-index-cli/src/commands/bench.rs`
- `crates/tabby-index-cli/src/commands/head.rs`
- `crates/tabby-index-cli/src/commands/inspect.rs`
- `crates/tabby-index-cli/src/commands/mod.rs`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `clients/tabby-agent/src/codeCompletion/postprocess/dropDuplicated.test.ts`
- `clients/tabby-agent/src/codeCompletion/postprocess/dropMinimum.test.ts`
- `clients/tabby-agent/src/codeCompletion/postprocess/formatIndentation.test.ts`
- `clients/tabby-agent/src/codeCompletion/postprocess/limitScopeByIndentation.test.ts`
- `clients/tabby-agent/src/codeCompletion/postprocess/normalizeIndentation.test.ts`
- `clients/tabby-agent/src/codeCompletion/postprocess/postprocess.test.ts`
- `clients/tabby-agent/src/codeCompletion/postprocess/removeDuplicateSuffixLines.test.ts`
- `clients/tabby-agent/src/codeCompletion/postprocess/removeDuplicatedBlockClosingLine.test.ts`
- `clients/tabby-agent/src/codeCompletion/postprocess/removeLineEndsWithRepetition.test.ts`
- `clients/tabby-agent/src/codeCompletion/postprocess/removeRepetitiveBlocks.test.ts`
- `clients/tabby-agent/src/codeCompletion/postprocess/removeRepetitiveLines.test.ts`
- `clients/tabby-agent/src/codeCompletion/postprocess/trimMultiLineInSingleLineMode.test.ts`
- `clients/tabby-agent/src/codeCompletion/postprocess/trimSpace.test.ts`
- `clients/tabby-agent/src/config/default.test.ts`
- `clients/tabby-chat-panel/test/index.test.ts`
- `clients/vscode/src/inline-edit/util.test.ts`
- `crates/sqlx-migrate-validate/tests/migrations-1/20230312133715_create_table.sql`
- `crates/sqlx-migrate-validate/tests/migrations-2/20230312133715_create_table.sql`
- `crates/sqlx-migrate-validate/tests/migrations-2/20230312141719_add_other_table.sql`
- `crates/sqlx-migrate-validate/tests/migrations-3/20230312141719_add_other_table.sql`
- `crates/sqlx-migrate-validate/tests/migrations-4/20230312133715_create_table.sql`
- `crates/sqlx-migrate-validate/tests/validate.rs`
- `crates/tabby/tests/goldentests.rs`
- `crates/tabby/tests/goldentests_chat.rs`
- `crates/tabby/tests/snapshots/goldentests__run_golden_tests-2.snap`
- `crates/tabby/tests/snapshots/goldentests__run_golden_tests.snap`
- `crates/tabby/tests/snapshots/goldentests__run_golden_tests_cpu-2.snap`
- `crates/tabby/tests/snapshots/goldentests__run_golden_tests_cpu.snap`
- `crates/tabby/tests/snapshots/goldentests_chat__run_chat_golden_tests-2.snap`
- `crates/tabby/tests/snapshots/goldentests_chat__run_chat_golden_tests.snap`
- `crates/tabby/tests/snapshots/goldentests_chat__run_chat_golden_tests_cpu.snap`
- `ee/tabby-ui/test/components/chat/form-editor/helper.test.ts`
- `ee/tabby-ui/test/index.test.ts`
- `ee/tabby-ui/test/utils/markdown.test.ts`
- `ee/tabby-ui/test/utils/remark-codeblock-to-placeholder.test.ts`
- `ee/tabby-ui/test/utils/remark-placeholder-parser.test.ts`

### CI/Docker 후보

- `.github/workflows/ast-grep-lint.yml`
- `.github/workflows/autofix-pnpm.yml`
- `.github/workflows/autofix-python.yml`
- `.github/workflows/autofix-rust.yml`
- `.github/workflows/bloat.yml`
- `.github/workflows/docker.yml`
- `.github/workflows/gh-pages.yml`
- `.github/workflows/gpt-translate.yml`
- `.github/workflows/nightly.yml`
- `.github/workflows/release-intellij.yml`
- `.github/workflows/release-vim.yml`
- `.github/workflows/release-vscode.yml`
- `.github/workflows/release.yml`
- `.github/workflows/test-intellij.yml`
- `.github/workflows/test-pnpm.yml`
- `.github/workflows/test-rust.yml`
- `experimental/deploy/docker-compose.yaml`
- `website/blog/2024-03-26-tabby-with-replicas-behind-reverse-proxy/docker-compose.yml`
- `website/docs/quick-start/installation/docker-compose.mdx`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .tsx | 299 |
| .rs | 272 |
| .ts | 265 |
| .js | 173 |
| .png | 145 |
| .md | 135 |
| .sql | 105 |
| .java | 93 |
| .kt | 91 |
| .py | 70 |
| .html | 51 |
| .toml | 50 |
| .txt | 47 |
| .yml | 34 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `crates/ 내부 책임 분리`
- `ee/ 내부 책임 분리`
- `clients/ 내부 책임 분리`
- `ee/tabby-ui/ 내부 책임 분리`
- `ee/tabby-webserver/ 내부 책임 분리`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/OpenPreferences.java 스펙/명령 의미`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/chat/AddFileToChat.java 스펙/명령 의미`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/chat/AddSelectionToChat.java 스펙/명령 의미`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/chat/Explain.java 스펙/명령 의미`
- `clients/eclipse/plugin/src/com/tabbyml/tabby4eclipse/commands/chat/Fix.java 스펙/명령 의미`
- `Cargo.toml 실행 스크립트와 패키지 경계`
- `clients/eclipse/package.json 실행 스크립트와 패키지 경계`
- `clients/intellij/package.json 실행 스크립트와 패키지 경계`
- `clients/tabby-agent/package.json 실행 스크립트와 패키지 경계`
- `clients/tabby-agent/tsconfig.json 실행 스크립트와 패키지 경계`

