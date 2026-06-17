# tobi/qmd 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/tobi__qmd |
| remote | https://github.com/tobi/qmd |
| HEAD | 62b3a67 (2026-06-17) fix(llm): guard ensureLlama against concurrent init (#740) |
| branch | main |
| groups | llm-wiki-100 |
| files | 154 |
| dirs | 32 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `QMD - Query Markup Documents`, `Quick Start`, `Install globally (Node or Bun)`, `or`, `Or run directly`, `Create collections for your notes, docs, and meeting transcripts`, `Add context to help with search results, each piece of context will be returned when matching sub documents are returned. This works as a tree. This is the key feature of QMD as it allows LLMs to make much better contextual choices when selecting documents. Don't sleep on it!`, `Generate embeddings for semantic search`, `Search across everything`, `Get a specific document`, `Get a document by docid (shown in search results)`, `Get multiple documents by glob pattern`, `Search within a specific collection`, `Export all matches for an agent`, `Using with AI Agents`, `Get structured results for an LLM`, `List all relevant files above a threshold`, `Retrieve full document content`

> QMD Query Markup Documents An on device search engine for everything you need to remember. Index your markdown notes, meeting transcripts, documentation, and knowledge bases. Search with keywords or natural language. Ideal for your agentic flows. QMD combines BM25 full text search, vector semantic search, and LLM re ranking—all running locally via node llama cpp with GGUF models. You can read more about QMD's progress in the CHANGELOG. Quick Start Using with AI Agents QMD's json and files output formats are designed for agentic workflows MCP Server Although the tool works perfectly fine when you just tell your agent to use it on the command line, it also exposes an MCP (Model Context Protocol) server for tighter integration. Tools exposed query — Search with typed sub queries ( lex / vec / hyde ), combined via RRF + reranking get — Retrieve a document by path or docid (with fuzzy matchin

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
| docs | dir |
| example-index.yml | file |
| finetune | dir |
| flake.lock | file |
| flake.nix | file |
| LICENSE | file |
| migrate-schema.ts | file |
| package.json | file |
| pnpm-lock.yaml | file |
| README.md | file |
| scripts | dir |
| skills | dir |
| src | dir |
| test | dir |
| tsconfig.build.json | file |
| tsconfig.json | file |
| vitest.config.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| finetune/ | 62 |
| test/ | 37 |
| src/ | 18 |
| (root) | 16 |
| scripts/ | 9 |
| skills/ | 4 |
| .github/ | 3 |
| .claude-plugin/ | 1 |
| .pi/ | 1 |
| assets/ | 1 |
| bin/ | 1 |
| docs/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 18 | preferred |
| docs/ | 1 | preferred |
| test/ | 37 | preferred |
| skills/ | 4 | preferred |
| scripts/ | 9 | preferred |
| finetune/ | 62 | large |
| finetune/experiments/ | 16 | large |
| finetune/data/ | 14 | large |
| finetune/experiments/gepa/ | 11 | large |
| finetune/dataset/ | 6 | large |
| test/eval-docs/ | 6 | large |
| finetune/configs/ | 4 | large |
| src/bench/ | 4 | large |
| .github/ | 3 | large |
| .github/workflows/ | 3 | large |
| finetune/experiments/grpo/ | 3 | large |
| finetune/jobs/ | 3 | large |
| finetune/evals/ | 2 | large |
| finetune/experiments/lfm2/ | 2 | large |
| skills/qmd/ | 2 | large |
| skills/release/ | 2 | large |
| src/cli/ | 2 | large |
| .claude-plugin/ | 1 | large |
| .pi/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `bun.lock`
- `finetune/pyproject.toml`
- `finetune/uv.lock`
- `package.json`
- `pnpm-lock.yaml`
- `tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | @tobilu/qmd | prepare, build, test, test:types, test:node, test:bun, test:unit, test:package, qmd, index, vector, search, vsearch, rerank, inspector, release | @modelcontextprotocol/sdk, better-sqlite3, fast-glob, node-llama-cpp, picomatch, sqlite-vec, tree-sitter-go, tree-sitter-python, tree-sitter-rust, tree-sitter-typescript, web-tree-sitter, yaml, zod |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| finetune/pyproject.toml | qmd-finetune | false | true | false | false |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/SYNTAX.md`
- `finetune/README.md`
- `finetune/experiments/grpo/README.md`

### 에이전트 지침 후보

- `CLAUDE.md`
- `finetune/CLAUDE.md`
- `skills/qmd/SKILL.md`
- `skills/qmd/references/mcp-setup.md`
- `skills/release/SKILL.md`
- `skills/release/scripts/install-hooks.sh`
- `src/mcp/server.ts`
- `test/mcp.test.ts`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `test/Containerfile`
- `test/ast-chunking.test.ts`
- `test/ast.test.ts`
- `test/bench-score.test.ts`
- `test/bin-wrapper.test.ts`
- `test/cli-exit-lifecycle.test.ts`
- `test/cli-lazy-llm-import.test.ts`
- `test/cli.test.ts`
- `test/collections-config.test.ts`
- `test/esm-ambiguous-module.test.ts`
- `test/eval-bm25.test.ts`
- `test/eval-deep-research.jsonl`
- `test/eval-deep-research.ts`
- `test/eval-docs/api-design-principles.md`
- `test/eval-docs/distributed-systems-overview.md`
- `test/eval-docs/machine-learning-primer.md`
- `test/eval-docs/product-launch-retrospective.md`
- `test/eval-docs/remote-work-policy.md`
- `test/eval-docs/startup-fundraising-memo.md`
- `test/eval-harness.ts`
- `test/eval.test.ts`
- `test/formatter.test.ts`
- `test/intent.test.ts`
- `test/launcher-detection.test.sh`
- `test/llm.test.ts`
- `test/local-config.test.ts`
- `test/mcp.test.ts`
- `test/multi-collection-filter.test.ts`
- `test/package.test.ts`
- `test/path-fidelity.test.ts`
- `test/rrf-trace.test.ts`
- `test/sdk.test.ts`
- `test/smoke-install.sh`
- `test/store-paths.test.ts`
- `test/store.helpers.unit.test.ts`
- `test/store.test.ts`
- `test/structured-search.test.ts`

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/nix.yml`
- `.github/workflows/publish.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 46 |
| .py | 25 |
| .md | 17 |
| .jsonl | 15 |
| .json | 9 |
| .yaml | 7 |
| .sh | 6 |
| .mjs | 5 |
| .yml | 4 |
| .gitignore | 3 |
| .lock | 3 |
| .txt | 3 |
| .gitattributes | 1 |
| .log | 1 |

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
- `pnpm-lock.yaml 실행 스크립트와 패키지 경계`

