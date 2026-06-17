# opendatalab/MinerU-Document-Explorer 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/opendatalab__MinerU-Document-Explorer |
| remote | https://github.com/opendatalab/MinerU-Document-Explorer |
| HEAD | a7e9c6c (2026-04-22) update docs |
| branch | main |
| groups | llm-wiki-100 |
| files | 191 |
| dirs | 33 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.

## README 신호

- 파일: `README.md`
- 주요 heading: `🤔 Why MinerU Document Explorer?`, `💡 What can you do with it?`, `🚀 Quick Start`, `📖 Document Deep Reading`, `View document structure`, `Read specific sections by address`, `Search within one document`, `🔌 MCP Server — 15 Tools for AI Agents`, `Start the HTTP daemon (recommended — models stay loaded across all requests)`, `Verify server is running`, `Stop the daemon`, `Client Configuration`, `Agent Skills`, `Install the skill (works with both npm and source installs)`, `Or from source repo`, `📊 How It Compares`, `⚙️ Requirements`, `📄 Document Processing Setup`

> <div align="center" <h1 align="center" <img src="assets/logo.png" alt="logo" height="28" style="vertical align middle; margin right 8px;" MinerU Document Explorer </h1 <h4 Agent native knowledge engine — search, deep read, and build knowledge bases<br from Markdown, PDF, DOCX, and PPTX.</h4 <p <a href="https //www.npmjs.com/package/mineru document explorer" <img src="https //img.shields.io/npm/v/mineru document explorer?style=flat square&color=cb3837" alt="npm"/ </a <a href="LICENSE" <img src="https //img.shields.io/badge/license MIT blue?style=flat square" alt="license"/ </a <a href="https //github.com/opendatalab/MinerU Document Explorer/actions" <img src="https //img.shields.io/github/actions/workflow/status/opendatalab/MinerU Document Explorer/ci.yml?style=flat square&label=CI" alt="CI"/ </a <a href="https //github.com/opendatalab/MinerU Document Explorer" <img src="https //img.shiel

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude-plugin | dir |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .pi | dir |
| assets | dir |
| bin | dir |
| bun.lock | file |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| CONTRIBUTING.md | file |
| demo | dir |
| docs | dir |
| example-index.yml | file |
| finetune | dir |
| flake.lock | file |
| flake.nix | file |
| LICENSE | file |
| migrate-schema.ts | file |
| package.json | file |
| README-zh.md | file |
| README.md | file |
| scripts | dir |
| skills | dir |
| src | dir |
| test | dir |
| tsconfig.build.json | file |
| tsconfig.json | file |
| vitest.config.ts | file |
| WIKI-PROGRESS.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 54 |
| finetune/ | 53 |
| test/ | 31 |
| (root) | 18 |
| demo/ | 9 |
| assets/ | 7 |
| docs/ | 7 |
| scripts/ | 5 |
| .github/ | 2 |
| skills/ | 2 |
| .claude-plugin/ | 1 |
| .pi/ | 1 |
| bin/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 54 | preferred |
| docs/ | 7 | preferred |
| test/ | 31 | preferred |
| skills/ | 2 | preferred |
| scripts/ | 5 | preferred |
| finetune/ | 53 | large |
| src/backends/ | 23 | large |
| finetune/experiments/ | 16 | large |
| finetune/data/ | 12 | large |
| src/backends/python/ | 12 | large |
| finetune/experiments/gepa/ | 11 | large |
| demo/ | 9 | large |
| src/mcp/ | 8 | large |
| assets/ | 7 | large |
| finetune/dataset/ | 5 | large |
| src/mcp/tools/ | 5 | large |
| finetune/configs/ | 3 | large |
| finetune/experiments/grpo/ | 3 | large |
| finetune/jobs/ | 3 | large |
| src/cli/ | 3 | large |
| src/wiki/ | 3 | large |
| .github/ | 2 | large |
| .github/ISSUE_TEMPLATE/ | 2 | large |
| finetune/evals/ | 2 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `bun.lock`
- `finetune/pyproject.toml`
- `finetune/uv.lock`
- `package.json`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | mineru-document-explorer | prepare, build, test, qmd, update, embed, search, vsearch, rerank, inspector, release | @modelcontextprotocol/sdk, better-sqlite3, fast-glob, node-llama-cpp, picomatch, sqlite-vec, yaml, zod |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| finetune/pyproject.toml | qmd-finetune | false | false | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `demo/README.md`
- `docs/SYNTAX.md`
- `docs/architecture.md`
- `docs/cli.md`
- `docs/mcp.md`
- `docs/quickstart.md`
- `docs/sdk.md`
- `docs/tutorial-zh.md`
- `finetune/README.md`
- `finetune/experiments/grpo/README.md`

### 에이전트 지침 후보

- `CLAUDE.md`
- `docs/mcp.md`
- `finetune/CLAUDE.md`
- `scripts/sync-embedded-skills.js`
- `skills/mineru-document-explorer/SKILL.md`
- `skills/mineru-document-explorer/references/mcp-setup.md`
- `src/embedded-skills.ts`
- `src/mcp/resources/index.ts`
- `src/mcp/server.ts`
- `src/mcp/server/utils.ts`
- `src/mcp/tools/core.ts`
- `src/mcp/tools/document.ts`
- `src/mcp/tools/index.ts`
- `src/mcp/tools/wiki.ts`
- `src/mcp/tools/writing.ts`
- `test/mcp-agent-ux.test.ts`
- `test/mcp.test.ts`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `test/Containerfile`
- `test/agent-experience.test.ts`
- `test/cli-ux-improvements.test.ts`
- `test/cli.test.ts`
- `test/collections-config.test.ts`
- `test/concurrency.test.ts`
- `test/docx-pptx-backend.test.ts`
- `test/eval-bm25.test.ts`
- `test/eval-harness.ts`
- `test/eval.test.ts`
- `test/formatter.test.ts`
- `test/intent.test.ts`
- `test/links.test.ts`
- `test/llm.test.ts`
- `test/mcp-agent-ux.test.ts`
- `test/mcp.test.ts`
- `test/multi-collection-filter.test.ts`
- `test/rrf-trace.test.ts`
- `test/sdk-agent-workflow.test.ts`
- `test/sdk.test.ts`
- `test/smoke-install.sh`
- `test/store-paths.test.ts`
- `test/store.helpers.unit.test.ts`
- `test/store.test.ts`
- `test/structured-search.test.ts`
- `test/tdd-deep.test.ts`
- `test/vec0-graceful.test.ts`
- `test/wiki-collection-type.test.ts`
- `test/wiki-index.test.ts`
- `test/wiki-lint.test.ts`
- `test/wiki-log.test.ts`

### CI/Docker 후보

_없음_

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 73 |
| .py | 32 |
| .md | 26 |
| .jsonl | 14 |
| .png | 7 |
| .json | 6 |
| .yaml | 6 |
| .sh | 5 |
| .gitignore | 3 |
| .lock | 3 |
| .txt | 3 |
| .yml | 3 |
| .gitattributes | 1 |
| .js | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `bun.lock 실행 스크립트와 패키지 경계`
- `finetune/pyproject.toml 실행 스크립트와 패키지 경계`
- `finetune/uv.lock 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`
- `tsconfig.json 실행 스크립트와 패키지 경계`

