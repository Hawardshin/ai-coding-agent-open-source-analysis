# nashsu/llm_wiki 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/nashsu__llm_wiki |
| remote | https://github.com/nashsu/llm_wiki |
| HEAD | d0437e8 (2026-06-16) release: v0.4.24 |
| branch | main |
| groups | llm-wiki-100 |
| files | 374 |
| dirs | 39 |
| stack | Node/TypeScript/JavaScript, Rust |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `LLM Wiki`, `Features`, `What is this?`, `Credits`, `What We Kept from the Original`, `What We Changed & Added`, `1. From CLI to Desktop Application`, `2. Purpose.md — The Wiki's Soul`, `3. Two-Step Chain-of-Thought Ingest`, `4. Knowledge Graph with Relevance Model`, `5. Louvain Community Detection`, `6. Graph Insights — Surprising Connections & Knowledge Gaps`, `7. Optimized Query Retrieval Pipeline`, `8. Multi-Conversation Chat with Persistence`, `9. Thinking / Reasoning Display`, `10. KaTeX Math Rendering`, `11. Review System (Async Human-in-the-Loop)`, `12. Deep Research`

> LLM Wiki <p align="center" <img src="logo.jpg" width="128" height="128" style="border radius 22%;" alt="LLM Wiki Logo" </p <p align="center" <strong A personal knowledge base that builds itself.</strong <br LLM reads your documents, builds a structured wiki, and keeps it current. </p <p align="center" <a href=" what is this" What is this?</a • <a href=" what we changed added" Features</a • <a href=" tech stack" Tech Stack</a • <a href=" installation" Installation</a • <a href=" credits" Credits</a • <a href=" license" License</a </p <p align="center" English <a href="README CN.md" 中文</a <a href="README JA.md" 日本語</a <a href="README KO.md" 한국어</a </p <p align="center" <img src="assets/overview.jpg" width="100%" alt="Overview" </p Features Two Step Chain of Thought Ingest — LLM analyzes first, then generates wiki pages with source traceability and incremental cache Multimodal Image Ingesti

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| assets | dir |
| components.json | file |
| extension | dir |
| index.html | file |
| LICENSE | file |
| llm-wiki.md | file |
| logo.jpg | file |
| mcp-server | dir |
| package-lock.json | file |
| package.json | file |
| plans | dir |
| README_CN.md | file |
| README_JA.md | file |
| README_KO.md | file |
| README.md | file |
| scripts | dir |
| src | dir |
| src-tauri | dir |
| tsconfig.app.json | file |
| tsconfig.json | file |
| tsconfig.node.json | file |
| vite.config.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 290 |
| src-tauri/ | 38 |
| (root) | 16 |
| assets/ | 9 |
| mcp-server/ | 9 |
| extension/ | 8 |
| .github/ | 2 |
| plans/ | 1 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 290 | preferred |
| scripts/ | 1 | preferred |
| src/lib/ | 186 | large |
| src/components/ | 65 | large |
| src-tauri/ | 38 | large |
| src/components/settings/ | 22 | large |
| src-tauri/src/ | 19 | large |
| src/components/layout/ | 14 | large |
| src/stores/ | 14 | large |
| src/test-helpers/ | 12 | large |
| src-tauri/src/commands/ | 10 | large |
| assets/ | 9 | large |
| mcp-server/ | 9 | large |
| extension/ | 8 | large |
| src/components/ui/ | 8 | large |
| src/test-helpers/scenarios/ | 7 | large |
| src-tauri/icons/ | 6 | large |
| src-tauri/pdfium/ | 4 | large |
| src/components/editor/ | 4 | large |
| src/components/project/ | 4 | large |
| src/i18n/ | 4 | large |
| mcp-server/src/ | 3 | large |
| src/commands/ | 3 | large |
| src/components/chat/ | 3 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `mcp-server/package.json`
- `mcp-server/tsconfig.json`
- `package.json`
- `src-tauri/Cargo.toml`
- `tsconfig.json`
- `vite.config.ts`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| mcp-server/package.json | llm-wiki-mcp-server | build, typecheck, start, test | @modelcontextprotocol/sdk |
| package.json | llm-wiki | dev, typecheck, build, preview, test, test:mocks, test:llm, mcp:build, mcp:test, tauri | @base-ui/react, @fontsource-variable/geist, @milkdown/kit, @milkdown/plugin-math, @milkdown/react, @milkdown/theme-nord, @react-sigma/core, @tailwindcss/vite, @tauri-apps/api, @tauri-apps/plugin-autostart, @tauri-apps/plugin-dialog, @tauri-apps/plugin-http, @tauri-apps/plugin-opener, @tauri-apps/plugin-store |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| src-tauri/Cargo.toml | llm-wiki | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `mcp-server/README.md`

### 에이전트 지침 후보

- `mcp-server/README.md`
- `mcp-server/package-lock.json`
- `mcp-server/package.json`
- `mcp-server/src/api-client.ts`
- `mcp-server/src/index.ts`
- `mcp-server/src/version.ts`
- `mcp-server/test/api-client.test.ts`
- `mcp-server/test/version.test.ts`
- `mcp-server/tsconfig.json`

### 스펙/템플릿/명령/스킬 후보

- `src-tauri/src/commands/claude_cli.rs`
- `src-tauri/src/commands/cli_resolver.rs`
- `src-tauri/src/commands/codex_cli.rs`
- `src-tauri/src/commands/extract_images.rs`
- `src-tauri/src/commands/file_sync.rs`
- `src-tauri/src/commands/fs.rs`
- `src-tauri/src/commands/mod.rs`
- `src-tauri/src/commands/project.rs`
- `src-tauri/src/commands/search.rs`
- `src-tauri/src/commands/vectorstore.rs`
- `src/commands/file-sync.ts`
- `src/commands/fs.test.ts`
- `src/commands/fs.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `mcp-server/test/api-client.test.ts`
- `mcp-server/test/version.test.ts`
- `src/commands/fs.test.ts`
- `src/components/layout/app-layout-visibility.test.ts`
- `src/components/layout/research-panel-nav.test.ts`
- `src/components/lint/lint-view.test.ts`
- `src/components/mermaid-diagram.test.tsx`
- `src/components/project/create-project-dialog.test.ts`
- `src/components/settings/preset-resolver.test.ts`
- `src/components/settings/sections/api-server-section.test.ts`
- `src/i18n/i18n-parity.test.ts`
- `src/lib/__tests__/claude-cli-transport.test.ts`
- `src/lib/__tests__/dedup_embedding.test.ts`
- `src/lib/__tests__/llm-providers.test.ts`
- `src/lib/anytxt-search.test.ts`
- `src/lib/api-server.real-llm.test.ts`
- `src/lib/api-token.test.ts`
- `src/lib/auto-save.test.ts`
- `src/lib/azure-openai.test.ts`
- `src/lib/codex-cli-transport.test.ts`
- `src/lib/connection-tests.test.ts`
- `src/lib/context-budget.test.ts`
- `src/lib/dedup-queue.test.ts`
- `src/lib/dedup-runner.test.ts`
- `src/lib/dedup.test.ts`
- `src/lib/deep-research.test.ts`
- `src/lib/detect-language.property.test.ts`
- `src/lib/detect-language.test.ts`
- `src/lib/embedding.real-llm.test.ts`
- `src/lib/embedding.test.ts`
- `src/lib/endpoint-normalizer.test.ts`
- `src/lib/enrich-wikilinks.real-llm.test.ts`
- `src/lib/enrich-wikilinks.scenarios.test.ts`
- `src/lib/enrich-wikilinks.test.ts`
- `src/lib/extract-source-images.test.ts`
- `src/lib/file-types.test.ts`
- `src/lib/frontmatter.test.ts`
- `src/lib/graph-filters.test.ts`
- `src/lib/graph-search.test.ts`
- `src/lib/graph-visibility.test.ts`
- `src/lib/greeting-detector.test.ts`
- `src/lib/has-usable-llm.test.ts`
- `src/lib/image-caption-pipeline.test.ts`
- `src/lib/ingest-cache.test.ts`
- `src/lib/ingest-parse.test.ts`
- `src/lib/ingest-queue.integration.test.ts`
- `src/lib/ingest-queue.test.ts`
- `src/lib/ingest-sanitize.test.ts`
- `src/lib/ingest-source-path-collision.test.ts`
- `src/lib/ingest.prompt.test.ts`
- `src/lib/ingest.real-llm.test.ts`
- `src/lib/ingest.scenarios.test.ts`
- `src/lib/keyboard-utils.test.ts`
- `src/lib/language-metadata.test.ts`
- `src/lib/lint-fixes.test.ts`
- `src/lib/lint.real-llm.test.ts`
- `src/lib/lint.scenarios.test.ts`
- `src/lib/lint.test.ts`
- `src/lib/llm-client.real-llm.test.ts`
- `src/lib/llm-client.test.ts`
- `src/lib/llm-providers.test.ts`
- `src/lib/markdown-image-resolver.test.ts`
- `src/lib/mineru.test.ts`
- `src/lib/optimize-research-topic.test.ts`
- `src/lib/output-language.test.ts`
- `src/lib/page-merge.test.ts`
- `src/lib/path-utils.property.test.ts`
- `src/lib/path-utils.test.ts`
- `src/lib/persist.integration.test.ts`
- `src/lib/project-file-sync.test.ts`
- `src/lib/project-mutex.test.ts`
- `src/lib/project-store.test.ts`
- `src/lib/proxy-config.test.ts`
- `src/lib/raw-source-resolver.test.ts`
- `src/lib/reasoning-detector.test.ts`
- `src/lib/reset-project-state.test.ts`
- `src/lib/review-utils.property.test.ts`
- `src/lib/review-utils.test.ts`
- `src/lib/scheduled-import.test.ts`
- `src/lib/search-rrf.test.ts`
- ... 34 more

### CI/Docker 후보

- `.github/workflows/build.yml`
- `.github/workflows/ci.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 236 |
| .tsx | 55 |
| .rs | 20 |
| .json | 18 |
| .jpg | 11 |
| .md | 7 |
| .png | 7 |
| .js | 3 |
| .html | 2 |
| .so | 2 |
| .yml | 2 |
| .css | 1 |
| .dll | 1 |
| .dylib | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `src/lib/ 내부 책임 분리`
- `src/components/ 내부 책임 분리`
- `src-tauri/ 내부 책임 분리`
- `src-tauri/src/commands/claude_cli.rs 스펙/명령 의미`
- `src-tauri/src/commands/cli_resolver.rs 스펙/명령 의미`
- `src-tauri/src/commands/codex_cli.rs 스펙/명령 의미`
- `src-tauri/src/commands/extract_images.rs 스펙/명령 의미`
- `src-tauri/src/commands/file_sync.rs 스펙/명령 의미`
- `mcp-server/package.json 실행 스크립트와 패키지 경계`
- `mcp-server/tsconfig.json 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`
- `src-tauri/Cargo.toml 실행 스크립트와 패키지 경계`
- `tsconfig.json 실행 스크립트와 패키지 경계`

