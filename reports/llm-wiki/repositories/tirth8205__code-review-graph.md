# tirth8205/code-review-graph 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/tirth8205__code-review-graph |
| remote | https://github.com/tirth8205/code-review-graph |
| HEAD | b72413c (2026-06-10) docs: fix daemon logs flag names in cli docstring |
| branch | main |
| groups | llm-wiki-100 |
| files | 287 |
| dirs | 41 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Quick Start`, `How It Works`, `Blast-radius analysis`, `Incremental updates in < 2 seconds`, `The monorepo problem, solved`, `Broad language coverage + Jupyter notebooks`, `Add your own language (no fork needed)`, `Risk-scored PR reviews in CI (GitHub Action)`, `.github/workflows/code-review-graph.yml`, `Benchmarks`, `Limitations and known weaknesses`, `Features`, `Usage`, `1. Register the repos you want to watch`, `2. Start the daemon (runs in the background)`, `3. That's it — graphs stay up to date automatically`, `Environment Variables`, `optional:`

> <h1 align="center" code review graph</h1 <p align="center" <strong Stop burning tokens. Start reviewing smarter.</strong </p <p align="center" <a href="README.md" English</a <a href="README.zh CN.md" 简体中文</a <a href="README.ja JP.md" 日本語</a <a href="README.ko KR.md" 한국어</a <a href="README.hi IN.md" हिन्दी</a </p <p align="center" <a href="https //pypi.org/project/code review graph/" <img src="https //img.shields.io/pypi/v/code review graph?style=flat square&color=blue" alt="PyPI" </a <a href="https //pepy.tech/project/code review graph" <img src="https //img.shields.io/pepy/dt/code review graph?style=flat square" alt="Downloads" </a <a href="https //github.com/tirth8205/code review graph/stargazers" <img src="https //img.shields.io/github/stars/tirth8205/code review graph?style=flat square" alt="Stars" </a <a href="https //opensource.org/licenses/MIT" <img src="https //img.shields.io/bad

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .beads | dir |
| .github | dir |
| .gitignore | file |
| .mcp.json | file |
| .serena | dir |
| action.yml | file |
| AGENTS.md | file |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| code_review_graph | dir |
| code-review-graph-vscode | dir |
| CONTRIBUTING.md | file |
| diagrams | dir |
| docs | dir |
| evaluate | dir |
| GEMINI.md | file |
| hooks | dir |
| LICENSE | file |
| pyproject.toml | file |
| README.hi-IN.md | file |
| README.ja-JP.md | file |
| README.ko-KR.md | file |
| README.md | file |
| README.zh-CN.md | file |
| scripts | dir |
| SECURITY.md | file |
| skills | dir |
| tests | dir |
| uv.lock | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 91 |
| code_review_graph/ | 68 |
| code-review-graph-vscode/ | 32 |
| (root) | 18 |
| evaluate/ | 18 |
| docs/ | 14 |
| .github/ | 12 |
| diagrams/ | 12 |
| .beads/ | 9 |
| skills/ | 7 |
| .serena/ | 2 |
| hooks/ | 2 |
| scripts/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 14 | preferred |
| tests/ | 91 | preferred |
| skills/ | 7 | preferred |
| scripts/ | 2 | preferred |
| code_review_graph/ | 68 | large |
| tests/fixtures/ | 56 | large |
| code-review-graph-vscode/ | 32 | large |
| code_review_graph/eval/ | 19 | large |
| evaluate/ | 18 | large |
| evaluate/results/ | 18 | large |
| code-review-graph-vscode/src/ | 17 | large |
| .github/ | 12 | large |
| code_review_graph/tools/ | 12 | large |
| diagrams/ | 12 | large |
| .beads/ | 9 | large |
| code_review_graph/eval/benchmarks/ | 8 | large |
| code-review-graph-vscode/src/features/ | 6 | large |
| code_review_graph/eval/configs/ | 6 | large |
| .beads/hooks/ | 5 | large |
| code-review-graph-vscode/media/ | 5 | large |
| .github/ISSUE_TEMPLATE/ | 4 | large |
| .github/workflows/ | 4 | large |
| code-review-graph-vscode/src/views/ | 4 | large |
| code-review-graph-vscode/media/walkthrough/ | 3 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `code-review-graph-vscode/package.json`
- `code-review-graph-vscode/tsconfig.json`
- `pyproject.toml`
- `tests/fixtures/tsconfig.json`
- `uv.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| code-review-graph-vscode/package.json | code-review-graph | compile, watch, package, lint, test | better-sqlite3, d3 |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | code-review-graph | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.beads/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `code-review-graph-vscode/README.md`
- `docs/COMMANDS.md`
- `docs/CUSTOM_LANGUAGES.md`
- `docs/FAQ.md`
- `docs/FEATURES.md`
- `docs/GITHUB_ACTION.md`
- `docs/INDEX.md`
- `docs/LEGAL.md`
- `docs/LLM-OPTIMIZED-REFERENCE.md`
- `docs/REPRODUCING.md`
- `docs/ROADMAP.md`
- `docs/TROUBLESHOOTING.md`
- `docs/USAGE.md`
- `docs/architecture.md`
- `docs/schema.md`

### 에이전트 지침 후보

- `.github/copilot-instructions.md`
- `.mcp.json`
- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `code_review_graph/skills.py`
- `diagrams/diagram7_mcp_integration_flow.png`
- `skills/build-graph/SKILL.md`
- `skills/debug-issue/SKILL.md`
- `skills/explore-codebase/SKILL.md`
- `skills/refactor-safely/SKILL.md`
- `skills/review-changes/SKILL.md`
- `skills/review-delta/SKILL.md`
- `skills/review-pr/SKILL.md`
- `tests/test_skills.py`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `code-review-graph-vscode/test/sqlite.test.ts`
- `tests/__init__.py`
- `tests/fixtures/KafkaPatterns.java`
- `tests/fixtures/MarkdownMsg.tsx`
- `tests/fixtures/Sample.cs`
- `tests/fixtures/SampleJava.java`
- `tests/fixtures/SpringDI.java`
- `tests/fixtures/TemporalWorkflow.java`
- `tests/fixtures/__tests__/UserService.ts`
- `tests/fixtures/alias_importer.ts`
- `tests/fixtures/caller_example.py`
- `tests/fixtures/detect_changes_sample.json`
- `tests/fixtures/multi_call_example.py`
- `tests/fixtures/sample.R`
- `tests/fixtures/sample.c`
- `tests/fixtures/sample.cpp`
- `tests/fixtures/sample.dart`
- `tests/fixtures/sample.ex`
- `tests/fixtures/sample.gd`
- `tests/fixtures/sample.hh`
- `tests/fixtures/sample.jl`
- `tests/fixtures/sample.kt`
- `tests/fixtures/sample.lua`
- `tests/fixtures/sample.luau`
- `tests/fixtures/sample.m`
- `tests/fixtures/sample.nix`
- `tests/fixtures/sample.php`
- `tests/fixtures/sample.pl`
- `tests/fixtures/sample.rb`
- `tests/fixtures/sample.res`
- `tests/fixtures/sample.resi`
- `tests/fixtures/sample.scala`
- `tests/fixtures/sample.sh`
- `tests/fixtures/sample.sol`
- `tests/fixtures/sample.sql`
- `tests/fixtures/sample.sv`
- `tests/fixtures/sample.swift`
- `tests/fixtures/sample.xs`
- `tests/fixtures/sample_bun.test.ts`
- `tests/fixtures/sample_callback_refs.py`
- `tests/fixtures/sample_databricks_export.py`
- `tests/fixtures/sample_databricks_notebook.ipynb`
- `tests/fixtures/sample_go.go`
- `tests/fixtures/sample_lib.sh`
- `tests/fixtures/sample_map_dispatch.py`
- `tests/fixtures/sample_map_dispatch.ts`
- `tests/fixtures/sample_mocha.test.ts`
- `tests/fixtures/sample_module.nix`
- `tests/fixtures/sample_notebook.ipynb`
- `tests/fixtures/sample_python.py`
- `tests/fixtures/sample_rust.rs`
- `tests/fixtures/sample_typescript.ts`
- `tests/fixtures/sample_vitest.test.ts`
- `tests/fixtures/sample_vue.vue`
- `tests/fixtures/src/lib/utils.ts`
- `tests/fixtures/test_sample.R`
- `tests/fixtures/test_sample.py`
- `tests/fixtures/tsconfig.json`
- `tests/test_action_render.py`
- `tests/test_changes.py`
- `tests/test_cli.py`
- `tests/test_cli_install.py`
- `tests/test_communities.py`
- `tests/test_context_savings.py`
- `tests/test_custom_languages.py`
- `tests/test_daemon.py`
- `tests/test_embeddings.py`
- `tests/test_enrich.py`
- `tests/test_eval.py`
- `tests/test_flows.py`
- `tests/test_fts_sync.py`
- `tests/test_graph.py`
- `tests/test_hints.py`
- `tests/test_incremental.py`
- `tests/test_integration_git.py`
- `tests/test_integration_v2.py`
- `tests/test_main.py`
- `tests/test_migrations.py`
- `tests/test_multilang.py`
- `tests/test_notebook.py`
- ... 12 more

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/eval.yml`
- `.github/workflows/pr-review.yml`
- `.github/workflows/publish.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 107 |
| .md | 42 |
| .ts | 26 |
| .csv | 18 |
| .yml | 11 |
| .png | 10 |
| .json | 8 |
| .yaml | 7 |
| .gitignore | 4 |
| .java | 4 |
| .sh | 3 |
| .ipynb | 2 |
| .nix | 2 |
| .r | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `code_review_graph/ 내부 책임 분리`
- `code-review-graph-vscode/package.json 실행 스크립트와 패키지 경계`
- `code-review-graph-vscode/tsconfig.json 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `tests/fixtures/tsconfig.json 실행 스크립트와 패키지 경계`
- `uv.lock 실행 스크립트와 패키지 경계`

