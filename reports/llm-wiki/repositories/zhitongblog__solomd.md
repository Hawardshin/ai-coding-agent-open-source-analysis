# zhitongblog/solomd 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/zhitongblog__solomd |
| remote | https://github.com/zhitongblog/solomd |
| HEAD | 65f2b77 (2026-06-17) chore(web): bump download VERSION 4.6.3 → 4.6.4 (4.6.4 released) |
| branch | main |
| groups | llm-wiki-100 |
| files | 903 |
| dirs | 149 |
| stack | Node/TypeScript/JavaScript, Rust |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `SoloMD`, `New in 4.6 — the knowledge-graph layer`, `Three halves of one product`, `Use it`, `Print the MCP config snippet for your AI client.`, `Install`, `macOS — universal dmg (Apple Silicon + Intel, signed + notarized)`, `Windows — x64`, `Linux — x86_64 + aarch64`, `iPad`, `Marketplaces & integrations`, `Compared`, `Privacy & security`, `Build from source`, `Contributing`, `Contact / 联系`, `License & credits`

> SoloMD The editor where agents live. 🌐 中文 · 日本語 · 한국어 · Deutsch · Français · Español · Português · Italiano · Polski · Nederlands · Türkçe · Svenska · Українська · 🪞 Gitee mirror → (faster downloads from China) Download v4.6.1 · Launch post · How we built it · Website · Security Your notes live in a folder. SoloMD is the editor on top — with a first class agent surface inside the editor, and the MCP endpoint Claude Code / Cursor can drive from outside. Same .md files. Chat with your vault. Schedule recipes that run when you're not at the keyboard. Hand the same vault to any MCP client. Built on Tauri 2 + Vue 3 + CodeMirror 6. Universal macOS dmg ~32 MB. Free, MIT, no subscription, no SoloMD hosted servers. Your notes, AI keys, embeddings index, and git history all stay on your machine. New in 4.6 — the knowledge graph layer The structural half Obsidian and Tolaria had and SoloMD didn't

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .github | dir |
| .gitignore | file |
| app | dir |
| app-store | dir |
| aur-solomd-bin | dir |
| brand | dir |
| dev-mcp | dir |
| distribution | dir |
| docs | dir |
| fdroid | dir |
| ios-shortcuts | dir |
| LICENSE | file |
| marketing | dir |
| marketing-zh | dir |
| marketplace | dir |
| mcp-server | dir |
| README.de.md | file |
| README.es.md | file |
| README.fr.md | file |
| README.it.md | file |
| README.ja.md | file |
| README.ko.md | file |
| README.md | file |
| README.nl.md | file |
| README.pl.md | file |
| README.pt.md | file |
| README.sv.md | file |
| README.tr.md | file |
| README.uk.md | file |
| README.zh.md | file |
| scripts | dir |
| smithery.yaml | file |
| web | dir |
| web-clipper | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| app/ | 381 |
| app-store/ | 149 |
| web/ | 144 |
| marketplace/ | 34 |
| brand/ | 31 |
| web-clipper/ | 30 |
| marketing-zh/ | 23 |
| scripts/ | 21 |
| marketing/ | 18 |
| (root) | 17 |
| distribution/ | 16 |
| mcp-server/ | 12 |
| docs/ | 7 |
| .agents/ | 5 |
| dev-mcp/ | 5 |
| .github/ | 3 |
| aur-solomd-bin/ | 3 |
| fdroid/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| app/ | 381 | preferred |
| web/ | 144 | preferred |
| docs/ | 7 | preferred |
| scripts/ | 21 | preferred |
| app/src/ | 226 | large |
| app-store/ | 149 | large |
| app/src-tauri/ | 142 | large |
| web/src/ | 103 | large |
| web/src/pages/ | 85 | large |
| app-store/ios/ | 82 | large |
| app/src/components/ | 82 | large |
| app-store/macos/ | 59 | large |
| app/src-tauri/icons/ | 55 | large |
| app/src/lib/ | 54 | large |
| app-store/macos/metadata/ | 39 | large |
| app/src-tauri/src/ | 36 | large |
| marketplace/ | 34 | large |
| brand/ | 31 | large |
| web-clipper/ | 30 | large |
| web/public/ | 27 | large |
| marketing-zh/ | 23 | large |
| app/src/stores/ | 22 | large |
| app/src/composables/ | 20 | large |
| marketing/ | 18 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `app/package.json`
- `app/pnpm-lock.yaml`
- `app/src-tauri/Cargo.toml`
- `app/tsconfig.json`
- `app/vite.config.ts`
- `dev-mcp/Cargo.toml`
- `marketplace/smithery/Dockerfile`
- `mcp-server/Cargo.toml`
- `web-clipper/package.json`
- `web-clipper/pnpm-lock.yaml`
- `web-clipper/tsconfig.json`
- `web/package.json`
- `web/pnpm-lock.yaml`
- `web/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| app/package.json | solomd | dev, build, preview, tauri | @codemirror/autocomplete, @codemirror/commands, @codemirror/lang-cpp, @codemirror/lang-css, @codemirror/lang-go, @codemirror/lang-html, @codemirror/lang-java, @codemirror/lang-javascript, @codemirror/lang-json, @codemirror/lang-markdown, @codemirror/lang-python, @codemirror/lang-rust, @codemirror/lang-sql, @codemirror/lang-xml |
| web-clipper/package.json | solomd-web-clipper | build, build:chrome, build:firefox, sign:firefox, package, smoke, test:markdown, typecheck, clean | @mozilla/readability, turndown, webextension-polyfill |
| web/package.json | solomd-web | dev, build, preview, astro | @astrojs/sitemap, astro |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| app/src-tauri/Cargo.toml | solomd | false |  |
| dev-mcp/Cargo.toml | solomd-dev-mcp | false |  |
| mcp-server/Cargo.toml | solomd-mcp | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `app-store/README.md`
- `app-store/ios/screenshots/README.md`
- `app-store/macos/screenshots/README.md`
- `app/README.md`
- `app/src-tauri/binaries/README.md`
- `app/src-tauri/sample-recipes/README.md`
- `dev-mcp/README.md`
- `docs/MARKETING.md`
- `docs/agents.md`
- `docs/github-stats-pattern.md`
- `docs/roadmap.md`
- `docs/v2.0-plan.md`
- `docs/v4.6-plan.md`
- `docs/v4.6.1-plan.md`
- `ios-shortcuts/README.md`
- `marketplace/README.md`
- `marketplace/awesome-mcp/README.md`
- `marketplace/claude-code-skill/README.md`
- `marketplace/client-docs/README.md`
- `marketplace/smithery/README.md`
- `mcp-server/README.md`
- `scripts/README.md`
- `web-clipper/README.md`
- `web/README.md`
- `web/public/demo/README.md`
- `web/src/pages/docs/cli.astro`
- `web/src/pages/docs/export.astro`
- `web/src/pages/docs/index.astro`
- `web/src/pages/docs/markdown-syntax.astro`
- `web/src/pages/docs/mcp.astro`
- `web/src/pages/docs/shortcuts.astro`
- `web/src/pages/zh/docs/cli.astro`
- `web/src/pages/zh/docs/index.astro`
- `web/src/pages/zh/docs/mcp.astro`

### 에이전트 지침 후보

- `.agents/skills/competitor-feedback/.last-scan`
- `.agents/skills/competitor-feedback/SKILL.md`
- `.agents/skills/competitor-feedback/competitors.json`
- `.agents/skills/competitor-feedback/scan.sh`
- `.agents/skills/competitor-feedback/unzoo.sh`
- `app/src-tauri/src/mcp_profiles.rs`
- `app/src/stores/mcpProfiles.ts`
- `dev-mcp/Cargo.lock`
- `dev-mcp/Cargo.toml`
- `dev-mcp/README.md`
- `dev-mcp/src/main.rs`
- `dev-mcp/src/tools.rs`
- `docs/agents.md`
- `marketplace/awesome-mcp/README.md`
- `marketplace/awesome-mcp/entry-appcypher.md`
- `marketplace/awesome-mcp/entry-punkpeye.md`
- `marketplace/awesome-mcp/entry-wong2.md`
- `marketplace/awesome-mcp/pr-body.md`
- `marketplace/claude-code-skill/README.md`
- `marketplace/claude-code-skill/solomd/SKILL.md`
- `marketplace/claude-code-skill/solomd/install.sh`
- `marketplace/claude-code-skill/solomd/recipes/01-weekly-review.yml`
- `marketplace/claude-code-skill/solomd/recipes/02-todo-extract.yml`
- `marketplace/claude-code-skill/solomd/recipes/03-translate-zh-to-en.yml`
- `marketplace/claude-code-skill/solomd/recipes/04-cjk-proofread.yml`
- `marketplace/claude-code-skill/solomd/recipes/05-citation-cleanup.yml`
- `marketplace/claude-code-skill/solomd/recipes/06-meeting-notes-summary.yml`
- `marketplace/claude-code-skill/solomd/recipes/07-link-suggester.yml`
- `marketplace/claude-code-skill/solomd/recipes/08-daily-summary.yml`
- `marketplace/claude-code-skill/solomd/recipes/09-orphan-notes.yml`
- `marketplace/claude-code-skill/solomd/recipes/10-on-commit-changelog.yml`
- `marketplace/claude-code-skill/solomd/recipes/11-tag-classifier.yml`
- `marketplace/client-docs/cursor.md`
- `mcp-server/.gitignore`
- `mcp-server/Cargo.lock`
- `mcp-server/Cargo.toml`
- `mcp-server/README.md`
- `mcp-server/build.rs`
- `mcp-server/src/main.rs`
- `mcp-server/src/safety.rs`
- `mcp-server/src/tools.rs`
- `mcp-server/src/trace_reader.rs`
- `mcp-server/src/workspace.rs`
- `mcp-server/tests/export_test.rs`
- `mcp-server/tests/multi_workspace.rs`
- `scripts/build-mcp-sidecar.sh`
- `scripts/build-skill-pack.sh`
- `scripts/install-mcp.sh`
- `scripts/publish-mcp-crate.sh`
- `web/src/pages/blog/v2-2-mcp-autogit-and-14-ai-providers.astro`
- `web/src/pages/docs/mcp.astro`
- `web/src/pages/zh/blog/v2-2-mcp-autogit-and-14-ai-providers.astro`
- `web/src/pages/zh/docs/mcp.astro`

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/competitor-feedback/.last-scan`
- `.agents/skills/competitor-feedback/SKILL.md`
- `.agents/skills/competitor-feedback/competitors.json`
- `.agents/skills/competitor-feedback/scan.sh`
- `.agents/skills/competitor-feedback/unzoo.sh`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `app/src-tauri/tests/agent_tools_e2e_test.rs`
- `app/src-tauri/tests/agent_trace_e2e_test.rs`
- `app/src-tauri/tests/capture_e2e_test.rs`
- `app/src-tauri/tests/cjk_proofread_test.rs`
- `app/src-tauri/tests/copy_file_test.rs`
- `app/src-tauri/tests/fixtures/trace_sample/trace.jsonl`
- `app/src-tauri/tests/frontmatter_edit_test.rs`
- `app/src-tauri/tests/git_history_e2e_test.rs`
- `app/src-tauri/tests/github_sync_e2e_test.rs`
- `app/src-tauri/tests/github_sync_e2ee_test.rs`
- `app/src-tauri/tests/rag_e2e_test.rs`
- `app/src-tauri/tests/read_file_test.rs`
- `app/src-tauri/tests/recipes_e2e_test.rs`
- `app/src-tauri/tests/search_test.rs`
- `app/src/lib/relationships.test.ts`
- `app/src/lib/tldraw-markdown.test.ts`
- `mcp-server/tests/export_test.rs`
- `mcp-server/tests/multi_workspace.rs`
- `web-clipper/test/fixtures/article.html`
- `web-clipper/test/live-driver-entry.ts`

### CI/Docker 후보

- `.github/workflows/indexnow.yml`
- `.github/workflows/mirror-gitee.yml`
- `.github/workflows/release.yml`
- `marketplace/smithery/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 216 |
| .ts | 128 |
| .png | 126 |
| .astro | 100 |
| .vue | 95 |
| .rs | 62 |
| .sh | 26 |
| .yml | 26 |
| .json | 18 |
| .mjs | 12 |
| .css | 10 |
| .yaml | 9 |
| .txt | 8 |
| .gitignore | 7 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `app/ 내부 책임 분리`
- `web/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `app/src/ 내부 책임 분리`
- `.agents/skills/competitor-feedback/.last-scan 스펙/명령 의미`
- `.agents/skills/competitor-feedback/SKILL.md 스펙/명령 의미`
- `.agents/skills/competitor-feedback/competitors.json 스펙/명령 의미`
- `.agents/skills/competitor-feedback/scan.sh 스펙/명령 의미`
- `.agents/skills/competitor-feedback/unzoo.sh 스펙/명령 의미`
- `app/package.json 실행 스크립트와 패키지 경계`
- `app/pnpm-lock.yaml 실행 스크립트와 패키지 경계`
- `app/src-tauri/Cargo.toml 실행 스크립트와 패키지 경계`
- `app/tsconfig.json 실행 스크립트와 패키지 경계`
- `app/vite.config.ts 실행 스크립트와 패키지 경계`

