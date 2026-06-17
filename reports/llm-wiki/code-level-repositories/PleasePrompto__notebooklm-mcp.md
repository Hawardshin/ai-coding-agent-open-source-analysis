# PleasePrompto/notebooklm-mcp 코드 레벨 분석

생성일: 2026-06-17T23:31:52.866Z

## 기본 판정

| 항목 | 값 |
| --- | --- |
| type | agent-memory/tooling |
| maturity | C focused implementation (53) |
| stars | 2810 |
| language | TypeScript |
| tags | knowledge-base, document-chat, agent-knowledge |
| files/code/source | 50/37/37 |
| tests/ci | 0/0 |
| local path | sources/PleasePrompto__notebooklm-mcp |

## 파이프라인 단계

| 단계 | 상태 | matched files | source files | evidence |
| --- | --- | --- | --- | --- |
| Ingestion/source intake | code | 7 | 4 | src/index.ts:63 sources, ingest sources, generate Audio Overviews). |
| Parsing/OCR/document extraction | doc-only | 2 | 0 | docs/tools.md:46 "answer": "[AI-GENERATED ...] The refresh token is rotated each ...\n\nSources:\n[1] auth-spec.pdf — ...", |
| Chunking/splitting | code | 1 | 1 | src/transport/http.ts:167 for await (const chunk of req) { |
| Embedding/vector index | absent | 0 | 0 |  |
| Retrieval/search/rerank | code | 7 | 6 | src/types.ts:36 * influenceable) documents, not a deterministic retrieval result. |
| Wiki/graph/entity model | doc-only | 1 | 0 | package-lock.json:477 "node_modules/@eslint-community/eslint-utils": { |
| Memory/update lifecycle | code | 21 | 13 | src/index.ts:167 // MCP-spec server instructions (clients merge into the system prompt). |
| Provenance/citation/evidence | code | 15 | 8 | src/types.ts:34 * Provenance envelope (issue #42). Tells the host agent that `answer` is |
| Evaluation/observability | absent | 0 | 0 |  |
| Agent/MCP/tool surface | code | 31 | 23 | src/config.ts:2 * Configuration for NotebookLM MCP Server |

## 의존성 신호

_없음_

## 주요 파일 후보

### Ingestion/source intake

- `src/index.ts`
- `src/notebooklm/selectors.ts`
- `src/notebooklm/sources.ts`
- `src/tools/definitions/sources.ts`
- `package.json`
- `CHANGELOG.md`
- `README.md`

### Parsing/OCR/document extraction

- `docs/tools.md`
- `docs/usage-guide.md`

### Chunking/splitting

- `src/transport/http.ts`

### Retrieval/search/rerank

- `src/types.ts`
- `src/library/notebook-library.ts`
- `src/notebooklm/selectors.ts`
- `src/utils/cleanup-manager.ts`
- `src/utils/disclaimer.ts`
- `src/tools/definitions/notebook-management.ts`
- `README.md`

### Wiki/graph/entity model

- `package-lock.json`

### Memory/update lifecycle

- `src/index.ts`
- `src/auth/auth-manager.ts`
- `src/notebooklm/chat.ts`
- `src/notebooklm/selectors.ts`
- `src/notebooklm/sources.ts`
- `src/session/browser-session.ts`
- `src/session/session-manager.ts`
- `src/tools/handlers.ts`
- `src/transport/http.ts`
- `src/utils/cleanup-manager.ts`
- `src/utils/page-utils.ts`
- `src/tools/definitions/notebook-management.ts`
- ... 6 more

### Provenance/citation/evidence

- `src/types.ts`
- `src/notebooklm/chat.ts`
- `src/notebooklm/citations.ts`
- `src/notebooklm/selectors.ts`
- `src/session/browser-session.ts`
- `src/tools/handlers.ts`
- `src/utils/disclaimer.ts`
- `src/tools/definitions/ask-question.ts`
- `package.json`
- `CHANGELOG.md`
- `README.md`
- `docs/configuration.md`
- ... 3 more

### Agent/MCP/tool surface

- `src/config.ts`
- `src/errors.ts`
- `src/index.ts`
- `src/types.ts`
- `src/library/notebook-library.ts`
- `src/library/types.ts`
- `src/notebooklm/audio.ts`
- `src/notebooklm/chat.ts`
- `src/resources/resource-handlers.ts`
- `src/tools/definitions.ts`
- `src/tools/handlers.ts`
- `src/tools/index.ts`
- ... 6 more

## Evidence lines

### Ingestion/source intake

| file | line | text |
| --- | --- | --- |
| src/index.ts | 63 | sources, ingest sources, generate Audio Overviews). |
| src/index.ts | 91 | ## Source ingestion (multi-source) |
| src/notebooklm/selectors.ts | 13 | * `link`, `upload`, `download`, …) — Google ships them as the literal |
| src/notebooklm/selectors.ts | 188 | 'button.drop-zone-icon-button:has(mat-icon:text-is("upload"))', |
| src/notebooklm/selectors.ts | 190 | 'button.drop-zone-icon-button:has-text("Upload sources")', |
| src/notebooklm/sources.ts | 2 | * NotebookLM source ingestion (issue #25). |
| src/notebooklm/sources.ts | 8 | * File-upload, YouTube and Google-Drive ingestion are intentionally out of |
| src/notebooklm/sources.ts | 129 | "Either NotebookLM is still crawling/indexing or the upload silently failed.", |

### Parsing/OCR/document extraction

| file | line | text |
| --- | --- | --- |
| docs/tools.md | 46 | "answer": "[AI-GENERATED ...] The refresh token is rotated each ...\n\nSources:\n[1] auth-spec.pdf — ...", |
| docs/tools.md | 63 | { "index": 1, "title": "auth-spec.pdf", "excerpt": "Refresh tokens MUST be rotated…" } |
| docs/usage-guide.md | 144 | "answer": "[AI-GENERATED ...] Refresh tokens are rotated on every refresh request [1]. The previous token is revoked server-side [2].\n\nSources:\n[1] auth-spec.pdf — \"Refresh tokens MUST be rotated…\"\n[2] auth-spec.pd |
| docs/usage-guide.md | 146 | { "index": 1, "title": "auth-spec.pdf", "excerpt": "Refresh tokens MUST be rotated…" }, |
| docs/usage-guide.md | 147 | { "index": 2, "title": "auth-spec.pdf", "excerpt": "On rotation, the previous token MUST be invalidated…" } |

### Chunking/splitting

| file | line | text |
| --- | --- | --- |
| src/transport/http.ts | 167 | for await (const chunk of req) { |
| src/transport/http.ts | 168 | chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)); |

### Retrieval/search/rerank

| file | line | text |
| --- | --- | --- |
| src/types.ts | 36 | * influenceable) documents, not a deterministic retrieval result. |
| src/library/notebook-library.ts | 329 | * Search notebooks by query (searches name, description, topics) |
| src/notebooklm/selectors.ts | 54 | * has the stable class `.submit-button`. The sources web-search overlay |
| src/utils/cleanup-manager.ts | 208 | // Search Methods for Different File Types |
| src/utils/cleanup-manager.ts | 225 | // Search for notebooklm-mcp in npx cache |
| src/utils/cleanup-manager.ts | 249 | // Search for notebooklm MCP logs |
| src/utils/cleanup-manager.ts | 279 | // Search for notebooklm-mcp projects |
| src/utils/cleanup-manager.ts | 297 | // Search for notebooklm backup directories in temp |

### Wiki/graph/entity model

| file | line | text |
| --- | --- | --- |
| package-lock.json | 477 | "node_modules/@eslint-community/eslint-utils": { |
| package-lock.json | 479 | "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz", |
| package-lock.json | 496 | "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": { |
| package-lock.json | 509 | "node_modules/@eslint-community/regexpp": { |
| package-lock.json | 511 | "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz", |
| package-lock.json | 779 | "@eslint-community/regexpp": "^4.12.2", |
| package-lock.json | 957 | "@eslint-community/eslint-utils": "^4.9.1", |
| package-lock.json | 1387 | "@eslint-community/eslint-utils": "^4.8.0", |

### Memory/update lifecycle

| file | line | text |
| --- | --- | --- |
| src/index.ts | 167 | // MCP-spec server instructions (clients merge into the system prompt). |
| src/auth/auth-manager.ts | 1000 | * - Chrome profile directory (browser fingerprint, cache, etc.) |
| src/auth/auth-manager.ts | 1009 | // 1. Delete all state files in browser_state_dir |
| src/auth/auth-manager.ts | 1020 | log.warning(` ⚠️ Could not delete state files: ${error}`); |
| src/auth/auth-manager.ts | 1023 | // 2. Delete Chrome profile (THE KEY for account switching!) |
| src/auth/auth-manager.ts | 1024 | // This removes ALL browser data: cookies, cache, fingerprint, etc. |
| src/auth/auth-manager.ts | 1033 | log.warning(` ⚠️ Could not delete Chrome profile: ${error}`); |
| src/auth/auth-manager.ts | 1069 | * HARD RESET: Completely delete ALL authentication state |

### Provenance/citation/evidence

| file | line | text |
| --- | --- | --- |
| src/types.ts | 34 | * Provenance envelope (issue #42). Tells the host agent that `answer` is |
| src/types.ts | 46 | * Structured citations extracted from the answer (issue #20). Populated when |
| src/notebooklm/chat.ts | 325 | * citation markers that NotebookLM occasionally leaks into `innerText`. |
| src/notebooklm/chat.ts | 343 | // (typical citation-marker leak: ["1", "more_vert"]). |
| src/notebooklm/citations.ts | 2 | * Citation extraction for NotebookLM answers (issue #20). |
| src/notebooklm/citations.ts | 4 | * NotebookLM renders citation markers like `[1]`, `[2]` inside the answer and |
| src/notebooklm/citations.ts | 7 | * unreliable. v2 reads the citations directly from the DOM after the answer |
| src/notebooklm/citations.ts | 11 | * 1. Read all `button.citation-marker` inside the *latest* answer container |

### Agent/MCP/tool surface

| file | line | text |
| --- | --- | --- |
| src/config.ts | 2 | * Configuration for NotebookLM MCP Server |
| src/config.ts | 7 | * 3. Tool Parameters (passed by Claude at runtime) |
| src/config.ts | 17 | // Linux: ~/.local/share/notebooklm-mcp/ |
| src/config.ts | 18 | // macOS: ~/Library/Application Support/notebooklm-mcp/ |
| src/config.ts | 19 | // Windows: %APPDATA%\notebooklm-mcp\ |
| src/config.ts | 21 | const paths = envPaths("notebooklm-mcp", { suffix: "" }); |
| src/errors.ts | 2 | * Custom Error Types for NotebookLM MCP Server |
| src/errors.ts | 32 | * Especially useful when upgrading from old installation (notebooklm-mcp-nodejs). |

## Gap

- Evaluation/observability
- tests
- ci
