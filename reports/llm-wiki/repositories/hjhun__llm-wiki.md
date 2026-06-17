# hjhun/llm-wiki 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/hjhun__llm-wiki |
| remote | https://github.com/hjhun/llm-wiki |
| HEAD | 5b4817e (2026-06-17) Bump webapp version to v1.0.4 |
| branch | main |
| groups | llm-wiki-100 |
| files | 349 |
| dirs | 157 |
| stack | Node/TypeScript/JavaScript, Rust |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `The idea`, `What you actually get`, `Why developers might care`, `How it works`, `Quick start`, `Your first wiki in five minutes`, `Core workflows`, `Code Wiki`, `Command-line interface`, `Web UI`, `Adding your own sources`, `Documentation`, `Supported agent CLIs`, `custom dir, skip graphify, custom port, then start`, `update an existing install without touching raw/ or wiki/`, `pin a specific release`, `Development`, `Project status`

> <p align="center" <img src="docs/svg/clio.svg" alt="CLIO" width="120" </p <h1 align="center" CLIO</h1 <p align="center" <strong A local first LLM Wiki workbench.</strong <br Drop sources in <code raw/</code , let a coding agent compile them into a durable, interlinked Markdown wiki you own — readable, searchable, graphable, and version controlled. </p <p align="center" <a href="LICENSE" <img alt="License Apache 2.0" src="https //img.shields.io/badge/License Apache 2.0 blue.svg" </a <img alt="Version" src="https //img.shields.io/badge/version 1.0.1 informational" <img alt="Node" src="https //img.shields.io/badge/node %3E%3D20 success" <img alt="Local first" src="https //img.shields.io/badge/local first yes brightgreen" </p The idea Most "chat with your documents" tools are RAG you upload files, and the LLM rediscovers the relevant chunks from scratch on every question . Nothing accumulate

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .github | dir |
| .gitignore | file |
| AGENTS.md | file |
| CLAUDE.md | file |
| cli-rs | dir |
| clio-skill | dir |
| config | dir |
| docs | dir |
| examples | dir |
| LICENSE | file |
| llm-wiki.md | file |
| plans | dir |
| raw | dir |
| README.md | file |
| scripts | dir |
| setup.sh | file |
| systemd | dir |
| tools | dir |
| webapp | dir |
| wiki | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| webapp/ | 251 |
| cli-rs/ | 18 |
| examples/ | 16 |
| .agents/ | 14 |
| scripts/ | 11 |
| clio-skill/ | 10 |
| wiki/ | 8 |
| (root) | 7 |
| .github/ | 3 |
| docs/ | 3 |
| raw/ | 2 |
| systemd/ | 2 |
| tools/ | 2 |
| config/ | 1 |
| plans/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 3 | preferred |
| examples/ | 16 | preferred |
| tools/ | 2 | preferred |
| scripts/ | 11 | preferred |
| webapp/ | 251 | large |
| webapp/lib/ | 124 | large |
| webapp/app/ | 70 | large |
| webapp/app/api/ | 54 | large |
| webapp/components/ | 43 | large |
| cli-rs/ | 18 | large |
| webapp/lib/ingest/ | 18 | large |
| webapp/lib/telegram/ | 18 | large |
| examples/mini-wiki/ | 15 | large |
| webapp/lib/automation/ | 15 | large |
| .agents/ | 14 | large |
| .agents/skills/ | 14 | large |
| cli-rs/src/ | 12 | large |
| webapp/components/chat/ | 11 | large |
| clio-skill/ | 10 | large |
| examples/mini-wiki/wiki/ | 10 | large |
| clio-skill/clio/ | 8 | large |
| wiki/ | 8 | large |
| cli-rs/src/commands/ | 7 | large |
| webapp/app/(protected)/ | 7 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `cli-rs/Cargo.toml`
- `webapp/package.json`
- `webapp/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| webapp/package.json | clio | dev, dev:lan, build, start, start:lan, lint, typecheck, test, test:watch, wiki:sources-index, wiki:sources-index:check, wiki:mini-lint, wiki:mini-lint:check | bcryptjs, chokidar, cytoscape, jose, lottie-react, lucide-react, mermaid, next, react, react-dom, react-markdown, rehype-highlight, remark-gfm, zod |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| cli-rs/Cargo.toml | clio-cli | false |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `cli-rs/README.md`
- `clio-skill/README.md`
- `docs/GUIDE.md`
- `docs/GUIDE_ko.md`
- `docs/svg/clio.svg`
- `examples/mini-wiki/README.md`
- `tools/README.md`
- `webapp/README.md`

### 에이전트 지침 후보

- `.agents/skills/browser-capture/SKILL.md`
- `.agents/skills/code-architecture/SKILL.md`
- `.agents/skills/code-debug/SKILL.md`
- `.agents/skills/code-documentation/SKILL.md`
- `.agents/skills/code-testing/SKILL.md`
- `.agents/skills/skill-maintenance/SKILL.md`
- `.agents/skills/wiki-graphify/SKILL.md`
- `.agents/skills/wiki-images/SKILL.md`
- `.agents/skills/wiki-ingest/SKILL.md`
- `.agents/skills/wiki-lint/SKILL.md`
- `.agents/skills/wiki-marp/SKILL.md`
- `.agents/skills/wiki-preprocess/SKILL.md`
- `.agents/skills/wiki-query/SKILL.md`
- `.agents/skills/wiki-search-qmd/SKILL.md`
- `AGENTS.md`
- `CLAUDE.md`
- `clio-skill/README.md`
- `clio-skill/clio/SKILL.md`
- `clio-skill/clio/evals/evals.json`
- `clio-skill/clio/references/paths.md`
- `clio-skill/clio/references/safety.md`
- `clio-skill/clio/references/workflow.md`
- `clio-skill/clio/scripts/find-clio-root.sh`
- `clio-skill/clio/scripts/inspect-index.sh`
- `clio-skill/clio/scripts/search-wiki.sh`
- `clio-skill/skills.sh`

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/browser-capture/SKILL.md`
- `.agents/skills/code-architecture/SKILL.md`
- `.agents/skills/code-debug/SKILL.md`
- `.agents/skills/code-documentation/SKILL.md`
- `.agents/skills/code-testing/SKILL.md`
- `.agents/skills/skill-maintenance/SKILL.md`
- `.agents/skills/wiki-graphify/SKILL.md`
- `.agents/skills/wiki-images/SKILL.md`
- `.agents/skills/wiki-ingest/SKILL.md`
- `.agents/skills/wiki-lint/SKILL.md`
- `.agents/skills/wiki-marp/SKILL.md`
- `.agents/skills/wiki-preprocess/SKILL.md`
- `.agents/skills/wiki-query/SKILL.md`
- `.agents/skills/wiki-search-qmd/SKILL.md`
- `cli-rs/src/commands/ingest.rs`
- `cli-rs/src/commands/lint.rs`
- `cli-rs/src/commands/mod.rs`
- `cli-rs/src/commands/query.rs`
- `cli-rs/src/commands/raw.rs`
- `cli-rs/src/commands/server.rs`
- `cli-rs/src/commands/status.rs`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `cli-rs/tests/http_cli.rs`
- `cli-rs/tests/raw_cli.rs`
- `cli-rs/tests/server_cli.rs`
- `webapp/app/api/telegram/test/route.ts`
- `webapp/lib/agent-roles.test.ts`
- `webapp/lib/answer-secret-sweep.test.ts`
- `webapp/lib/answer-sources.test.ts`
- `webapp/lib/automation/cron.test.ts`
- `webapp/lib/automation/manager.test.ts`
- `webapp/lib/automation/schedule-format.test.ts`
- `webapp/lib/chat/send-helpers.test.ts`
- `webapp/lib/cli-cline-task.test.ts`
- `webapp/lib/cli-codex-json.test.ts`
- `webapp/lib/cli-session.test.ts`
- `webapp/lib/cli-stream-json.test.ts`
- `webapp/lib/dashboard.test.ts`
- `webapp/lib/files.test.ts`
- `webapp/lib/graph-view.test.ts`
- `webapp/lib/i18n.test.ts`
- `webapp/lib/ingest/bootstrap.test.ts`
- `webapp/lib/ingest/cli-retry.test.ts`
- `webapp/lib/ingest/graphify-decision.test.ts`
- `webapp/lib/ingest/leaf-classify.test.ts`
- `webapp/lib/ingest/loop-decision.test.ts`
- `webapp/lib/ingest/merge-drain.test.ts`
- `webapp/lib/ingest/scope.test.ts`
- `webapp/lib/ingest/state.test.ts`
- `webapp/lib/markdown-callout.test.ts`
- `webapp/lib/markdown-headings.test.ts`
- `webapp/lib/multi-agent/partition.test.ts`
- `webapp/lib/multi-agent/util.test.ts`
- `webapp/lib/paths.test.ts`
- `webapp/lib/public-access.test.ts`
- `webapp/lib/public-query.test.ts`
- `webapp/lib/public-session-log.test.ts`
- `webapp/lib/search.test.ts`
- `webapp/lib/secret-scan.test.ts`
- `webapp/lib/telegram/router.test.ts`
- `webapp/lib/telegram/runtime-state.test.ts`
- `webapp/lib/telegram/session-log.test.ts`
- `webapp/lib/telegram/splitter.test.ts`
- `webapp/lib/telegram/throttle.test.ts`
- `webapp/lib/wikilink.test.ts`
- `webapp/test/stubs/server-only.ts`

### CI/Docker 후보

- `.github/workflows/cli.yml`
- `.github/workflows/release.yml`
- `.github/workflows/webapp.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 194 |
| .tsx | 49 |
| .md | 48 |
| .rs | 15 |
| .mjs | 11 |
| .sh | 10 |
| .json | 7 |
| .gitkeep | 3 |
| .yml | 3 |
| .svg | 2 |
| .css | 1 |
| .gitignore | 1 |
| .lock | 1 |
| .service | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `webapp/ 내부 책임 분리`
- `.agents/skills/browser-capture/SKILL.md 스펙/명령 의미`
- `.agents/skills/code-architecture/SKILL.md 스펙/명령 의미`
- `.agents/skills/code-debug/SKILL.md 스펙/명령 의미`
- `.agents/skills/code-documentation/SKILL.md 스펙/명령 의미`
- `.agents/skills/code-testing/SKILL.md 스펙/명령 의미`
- `cli-rs/Cargo.toml 실행 스크립트와 패키지 경계`
- `webapp/package.json 실행 스크립트와 패키지 경계`
- `webapp/tsconfig.json 실행 스크립트와 패키지 경계`

