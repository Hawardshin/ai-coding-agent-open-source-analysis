# joungminsung/OpenDocuments 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/joungminsung__OpenDocuments |
| remote | https://github.com/joungminsung/OpenDocuments |
| HEAD | cec84ab (2026-05-27) docs: add Korean architecture overview |
| branch | main |
| groups | llm-wiki-100 |
| files | 454 |
| dirs | 172 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `What is OpenDocuments?`, `Why OpenDocuments?`, `How OpenDocuments Answers Questions`, `Key Features`, `OpenDocuments vs Alternatives`, `Recent Improvements`, `Real-World Use Cases`, `For Engineering Teams`, `Index your repo and API docs`, `For Operations & HR Teams`, `Cross-lingual search finds both Korean and English documents`, `For Product Managers`, `For AI-Assisted Development (MCP)`, `For Self-Hosted Knowledge Bases`, `Everything runs locally: LLM, embeddings, vector search, web UI`, `Quick Start`, `1. Install`, `2. Initialize`

> <p align="center" <h1 align="center" OpenDocuments</h1 <p align="center" <strong Self hosted RAG platform for AI document search across GitHub, Notion, Google Drive, Confluence, S3, local files, and web sources</strong </p </p <p align="center" <a href="https //github.com/joungminsung/OpenDocuments/actions" <img src="https //github.com/joungminsung/OpenDocuments/actions/workflows/ci.yml/badge.svg" alt="CI" </a <a href="LICENSE" <img src="https //img.shields.io/badge/License MIT blue.svg" alt="License" </a <a href="https //nodejs.org" <img src="https //img.shields.io/badge/Node.js 20%2B green.svg" alt="Node.js" </a <a href="https //www.typescriptlang.org" <img src="https //img.shields.io/badge/TypeScript 5.5%2B blue.svg" alt="TypeScript" </a <a href="https //www.npmjs.com/package/opendocuments" <img src="https //img.shields.io/npm/v/opendocuments.svg" alt="npm" </a <a href="https //www.np

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .changeset | dir |
| .github | dir |
| .gitignore | file |
| assets | dir |
| CHANGELOG.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| docker-compose.yml | file |
| Dockerfile | file |
| docs | dir |
| docs-site | dir |
| LICENSE | file |
| package-lock.json | file |
| package.json | file |
| packages | dir |
| plugins | dir |
| README.ko.md | file |
| README.md | file |
| SECURITY.md | file |
| templates | dir |
| tsconfig.base.json | file |
| turbo.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| packages/ | 234 |
| plugins/ | 166 |
| docs-site/ | 28 |
| (root) | 14 |
| .github/ | 6 |
| assets/ | 2 |
| docs/ | 2 |
| .changeset/ | 1 |
| templates/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| packages/ | 234 | preferred |
| docs/ | 2 | preferred |
| templates/ | 1 | preferred |
| plugins/ | 166 | preferred |
| packages/core/ | 130 | large |
| packages/core/src/ | 76 | large |
| packages/core/tests/ | 50 | large |
| packages/web/ | 36 | large |
| packages/server/ | 33 | large |
| packages/cli/ | 30 | large |
| packages/web/src/ | 29 | large |
| docs-site/ | 28 | large |
| packages/cli/src/ | 22 | large |
| packages/server/src/ | 20 | large |
| packages/server/tests/ | 9 | large |
| docs-site/guide/ | 8 | large |
| docs-site/public/ | 8 | large |
| plugins/model-grok/ | 7 | large |
| .github/ | 6 | large |
| docs-site/public/icons/ | 6 | large |
| plugins/connector-confluence/ | 6 | large |
| plugins/connector-discord/ | 6 | large |
| plugins/connector-gdrive/ | 6 | large |
| plugins/connector-github/ | 6 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `docker-compose.yml`
- `docs-site/package.json`
- `package.json`
- `packages/cli/package.json`
- `packages/cli/tsconfig.json`
- `packages/client/package.json`
- `packages/client/tsconfig.json`
- `packages/core/package.json`
- `packages/core/tsconfig.json`
- `packages/server/package.json`
- `packages/server/tsconfig.json`
- `packages/web/package.json`
- `packages/web/tsconfig.json`
- `packages/web/vite.config.ts`
- `plugins/connector-confluence/package.json`
- `plugins/connector-confluence/tsconfig.json`
- `plugins/connector-discord/package.json`
- `plugins/connector-discord/tsconfig.json`
- `plugins/connector-gdrive/package.json`
- `plugins/connector-gdrive/tsconfig.json`
- `plugins/connector-github/package.json`
- `plugins/connector-github/tsconfig.json`
- `plugins/connector-jira/package.json`
- `plugins/connector-jira/tsconfig.json`
- `plugins/connector-linear/package.json`
- `plugins/connector-linear/tsconfig.json`
- `plugins/connector-notion/package.json`
- `plugins/connector-notion/tsconfig.json`
- `plugins/connector-s3/package.json`
- `plugins/connector-s3/tsconfig.json`
- `plugins/connector-slack/package.json`
- `plugins/connector-slack/tsconfig.json`
- `plugins/connector-swagger/package.json`
- `plugins/connector-swagger/tsconfig.json`
- `plugins/connector-web-crawler/package.json`
- `plugins/connector-web-crawler/tsconfig.json`
- `plugins/connector-web-search/package.json`
- `plugins/connector-web-search/tsconfig.json`
- `plugins/model-anthropic/package.json`
- `plugins/model-anthropic/tsconfig.json`
- `plugins/model-deepseek/package.json`
- `plugins/model-deepseek/tsconfig.json`
- `plugins/model-google/package.json`
- `plugins/model-google/tsconfig.json`
- `plugins/model-grok/package.json`
- `plugins/model-grok/tsconfig.json`
- `plugins/model-mistral/package.json`
- `plugins/model-mistral/tsconfig.json`
- `plugins/model-ollama/package.json`
- `plugins/model-ollama/tsconfig.json`
- `plugins/model-openai-compatible/package.json`
- `plugins/model-openai-compatible/tsconfig.json`
- `plugins/model-openai/package.json`
- `plugins/model-openai/tsconfig.json`
- `plugins/parser-code/package.json`
- `plugins/parser-code/tsconfig.json`
- `plugins/parser-docx/package.json`
- `plugins/parser-docx/tsconfig.json`
- `plugins/parser-email/package.json`
- `plugins/parser-email/tsconfig.json`
- `plugins/parser-html/package.json`
- `plugins/parser-html/tsconfig.json`
- `plugins/parser-jupyter/package.json`
- `plugins/parser-jupyter/tsconfig.json`
- `plugins/parser-pdf/package.json`
- `plugins/parser-pdf/tsconfig.json`
- `plugins/parser-pptx/package.json`
- `plugins/parser-pptx/tsconfig.json`
- `plugins/parser-xlsx/package.json`
- `plugins/parser-xlsx/tsconfig.json`
- `turbo.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| docs-site/package.json | @opendocuments/docs | dev, build, preview |  |
| package.json | opendocuments-monorepo | setup, build, test, lint, typecheck, dev, clean |  |
| packages/cli/package.json | opendocuments | build, test, typecheck, clean, dev | @hono/node-server, @inquirer/prompts, chalk, commander, opendocuments-core, opendocuments-server, opendocuments-model-ollama |
| packages/client/package.json | @opendocuments/client | build, test, typecheck, clean |  |
| packages/core/package.json | opendocuments-core | build, copy-sql, test, test:watch, typecheck, clean, dev | @lancedb/lancedb, better-sqlite3, chalk, eventemitter3, jiti, js-tiktoken, semver, zod |
| packages/server/package.json | opendocuments-server | build, test, test:watch, typecheck, clean, dev | hono, @hono/node-server, @modelcontextprotocol/sdk, opendocuments-core |
| packages/web/package.json | @opendocuments/web | dev, build, preview, typecheck | react, react-dom, react-markdown, rehype-highlight, zustand |
| plugins/connector-confluence/package.json | @opendocuments/connector-confluence | build, test, typecheck, clean | opendocuments-core |
| plugins/connector-discord/package.json | @opendocuments/connector-discord | build, test, typecheck, clean | opendocuments-core |
| plugins/connector-gdrive/package.json | @opendocuments/connector-gdrive | build, test, typecheck, clean | opendocuments-core |
| plugins/connector-github/package.json | @opendocuments/connector-github | build, test, typecheck, clean | opendocuments-core |
| plugins/connector-jira/package.json | @opendocuments/connector-jira | build, test, typecheck, clean | opendocuments-core |
| plugins/connector-linear/package.json | @opendocuments/connector-linear | build, test, typecheck, clean | opendocuments-core |
| plugins/connector-notion/package.json | @opendocuments/connector-notion | build, test, typecheck, clean | opendocuments-core |
| plugins/connector-s3/package.json | @opendocuments/connector-s3 | build, test, typecheck, clean | opendocuments-core |
| plugins/connector-slack/package.json | @opendocuments/connector-slack | build, test, typecheck | opendocuments-core |
| plugins/connector-swagger/package.json | @opendocuments/connector-swagger | build, test, typecheck, clean | opendocuments-core |
| plugins/connector-web-crawler/package.json | @opendocuments/connector-web-crawler | build, test, typecheck, clean | opendocuments-core, cheerio |
| plugins/connector-web-search/package.json | @opendocuments/connector-web-search | build, test, typecheck, clean | opendocuments-core |
| plugins/model-anthropic/package.json | opendocuments-model-anthropic | build, test, typecheck, clean | opendocuments-core |
| plugins/model-deepseek/package.json | opendocuments-model-deepseek | build, test, typecheck, clean | opendocuments-core |
| plugins/model-google/package.json | opendocuments-model-google | build, test, typecheck, clean | opendocuments-core |
| plugins/model-grok/package.json | opendocuments-model-grok | build, test, typecheck, clean | opendocuments-core |
| plugins/model-mistral/package.json | opendocuments-model-mistral | build, test, typecheck, clean | opendocuments-core |
| plugins/model-ollama/package.json | opendocuments-model-ollama | build, test, typecheck, clean | opendocuments-core |
| plugins/model-openai-compatible/package.json | opendocuments-model-openai-compatible | build, test, typecheck, clean | opendocuments-core |
| plugins/model-openai/package.json | opendocuments-model-openai | build, test, typecheck, clean | opendocuments-core |
| plugins/parser-code/package.json | opendocuments-parser-code | build, test, typecheck, clean | opendocuments-core |
| plugins/parser-docx/package.json | opendocuments-parser-docx | build, test, typecheck, clean | opendocuments-core, mammoth |
| plugins/parser-email/package.json | opendocuments-parser-email | build, test, typecheck, clean | opendocuments-core |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/architecture.ko.md`
- `docs/architecture.md`
- `packages/cli/README.md`
- `templates/README.md`

### 에이전트 지침 후보

- `docs-site/guide/mcp-knowledge-base.md`
- `packages/server/src/mcp/server.ts`
- `packages/server/tests/mcp/server.test.ts`

### 스펙/템플릿/명령/스킬 후보

- `packages/cli/src/commands/ask.ts`
- `packages/cli/src/commands/auth.ts`
- `packages/cli/src/commands/backup.ts`
- `packages/cli/src/commands/completion.ts`
- `packages/cli/src/commands/config-cmd.ts`
- `packages/cli/src/commands/connector.ts`
- `packages/cli/src/commands/doctor.ts`
- `packages/cli/src/commands/document.ts`
- `packages/cli/src/commands/export-cmd.ts`
- `packages/cli/src/commands/import-cmd.ts`
- `packages/cli/src/commands/index-cmd.ts`
- `packages/cli/src/commands/init.ts`
- `packages/cli/src/commands/model.ts`
- `packages/cli/src/commands/plugin.ts`
- `packages/cli/src/commands/search.ts`
- `packages/cli/src/commands/start.ts`
- `packages/cli/src/commands/stop.ts`
- `packages/cli/src/commands/upgrade.ts`
- `packages/cli/src/commands/workspace.ts`
- `packages/cli/tests/commands/ask.test.ts`
- `packages/cli/tests/commands/doctor.test.ts`
- `packages/cli/tests/commands/model.test.ts`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `packages/cli/tests/commands/ask.test.ts`
- `packages/cli/tests/commands/doctor.test.ts`
- `packages/cli/tests/commands/model.test.ts`
- `packages/client/tests/client.test.ts`
- `packages/core/tests/_fixtures/gold-dataset.json`
- `packages/core/tests/_fixtures/mock-models.ts`
- `packages/core/tests/_fixtures/run-eval.ts`
- `packages/core/tests/auth/api-key.test.ts`
- `packages/core/tests/auth/oauth.test.ts`
- `packages/core/tests/config/env-loader.test.ts`
- `packages/core/tests/config/loader.test.ts`
- `packages/core/tests/connector/manager.test.ts`
- `packages/core/tests/document/managers.test.ts`
- `packages/core/tests/events/bus.test.ts`
- `packages/core/tests/events/webhook-dispatcher.test.ts`
- `packages/core/tests/ingest/chunk-strategies.test.ts`
- `packages/core/tests/ingest/chunker.test.ts`
- `packages/core/tests/ingest/document-store.test.ts`
- `packages/core/tests/ingest/pipeline.test.ts`
- `packages/core/tests/parsers/markdown.test.ts`
- `packages/core/tests/plugin/capability.test.ts`
- `packages/core/tests/plugin/loader.test.ts`
- `packages/core/tests/plugin/registry.test.ts`
- `packages/core/tests/plugin/sandbox.test.ts`
- `packages/core/tests/rag/cache.test.ts`
- `packages/core/tests/rag/confidence.test.ts`
- `packages/core/tests/rag/context-window.test.ts`
- `packages/core/tests/rag/contextual.test.ts`
- `packages/core/tests/rag/cross-encoder.test.ts`
- `packages/core/tests/rag/cross-lingual.test.ts`
- `packages/core/tests/rag/decomposer.test.ts`
- `packages/core/tests/rag/engine.test.ts`
- `packages/core/tests/rag/eval.test.ts`
- `packages/core/tests/rag/generator.test.ts`
- `packages/core/tests/rag/grounding.test.ts`
- `packages/core/tests/rag/hyde.test.ts`
- `packages/core/tests/rag/intent.test.ts`
- `packages/core/tests/rag/multi-query.test.ts`
- `packages/core/tests/rag/parent-doc.test.ts`
- `packages/core/tests/rag/profiles.test.ts`
- `packages/core/tests/rag/prompt-compressor.test.ts`
- `packages/core/tests/rag/propositions.test.ts`
- `packages/core/tests/rag/reranker.test.ts`
- `packages/core/tests/rag/retriever.test.ts`
- `packages/core/tests/security/alerts.test.ts`
- `packages/core/tests/security/audit.test.ts`
- `packages/core/tests/security/redactor.test.ts`
- `packages/core/tests/storage/lancedb.test.ts`
- `packages/core/tests/storage/migrations.test.ts`
- `packages/core/tests/storage/sqlite.test.ts`
- `packages/core/tests/utils/hardware.test.ts`
- `packages/core/tests/utils/ollama.test.ts`
- `packages/core/tests/utils/tokenizer.test.ts`
- `packages/core/tests/workspace/manager.test.ts`
- `packages/server/tests/bootstrap.test.ts`
- `packages/server/tests/http/admin.test.ts`
- `packages/server/tests/http/auth.test.ts`
- `packages/server/tests/http/chat.test.ts`
- `packages/server/tests/http/documents.test.ts`
- `packages/server/tests/http/health.test.ts`
- `packages/server/tests/http/plugins.test.ts`
- `packages/server/tests/http/workspace.test.ts`
- `packages/server/tests/mcp/server.test.ts`
- `plugins/connector-confluence/tests/confluence.test.ts`
- `plugins/connector-discord/tests/index.test.ts`
- `plugins/connector-gdrive/tests/gdrive.test.ts`
- `plugins/connector-github/tests/github.test.ts`
- `plugins/connector-jira/tests/index.test.ts`
- `plugins/connector-linear/tests/index.test.ts`
- `plugins/connector-notion/tests/notion.test.ts`
- `plugins/connector-s3/tests/s3.test.ts`
- `plugins/connector-slack/tests/index.test.ts`
- `plugins/connector-swagger/tests/swagger.test.ts`
- `plugins/connector-web-crawler/tests/web-crawler.test.ts`
- `plugins/connector-web-search/tests/web-search.test.ts`
- `plugins/model-anthropic/tests/anthropic.test.ts`
- `plugins/model-deepseek/tests/deepseek.test.ts`
- `plugins/model-google/tests/google.test.ts`
- `plugins/model-grok/tests/grok.test.ts`
- `plugins/model-mistral/tests/mistral.test.ts`
- ... 11 more

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/docs.yml`
- `Dockerfile`
- `docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 274 |
| .json | 74 |
| .md | 54 |
| .tsx | 21 |
| .sql | 6 |
| .svg | 6 |
| .yml | 6 |
| .css | 2 |
| .txt | 2 |
| .gif | 1 |
| .gitignore | 1 |
| .html | 1 |
| .js | 1 |
| .mjs | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `packages/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `templates/ 내부 책임 분리`
- `plugins/ 내부 책임 분리`
- `packages/core/ 내부 책임 분리`
- `packages/cli/src/commands/ask.ts 스펙/명령 의미`
- `packages/cli/src/commands/auth.ts 스펙/명령 의미`
- `packages/cli/src/commands/backup.ts 스펙/명령 의미`
- `packages/cli/src/commands/completion.ts 스펙/명령 의미`
- `packages/cli/src/commands/config-cmd.ts 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `docs-site/package.json 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`
- `packages/cli/package.json 실행 스크립트와 패키지 경계`

