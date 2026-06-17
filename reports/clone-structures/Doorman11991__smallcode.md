# doorman11991/smallcode 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/Doorman11991__smallcode |
| remote | https://github.com/Doorman11991/smallcode.git |
| HEAD | c3fc7ba (2026-05-30) chore(release): v1.6.0 — hybrid code search (#67) + TUI visual refresh (#72) |
| branch | master |
| groups | previous-clone-inventory-107 |
| files | 290 |
| dirs | 55 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `SmallCode`, `Why SmallCode?`, `Quick Start`, `Install globally via npm`, `Or run directly with npx`, `Start in your project directory`, `Or use the packaged command alias:`, `Prebuilt Binaries (no Node.js needed)`, `Fresh GitHub checkout quick start`, `Start your local model server first (LM Studio, llama.cpp, Ollama, etc.)`, `RAG harness quick run`, `or, after install:`, `Requirements`, `Configuration`, `Required`, `Optional: escalation (auto-fallback to cloud on hard fail)`, `ANTHROPIC_API_KEY=sk-ant-...`, `OPENAI_API_KEY=sk-...`

> SmallCode 简体中文 English AI coding agent optimized for small LLMs (8B 35B parameters) SmallCode is a terminal native coding agent designed from the ground up to extract useful work from local models (8B 35B) running on consumer hardware. While tools like OpenCode assume frontier models with 128k+ context and perfect tool calling, SmallCode compensates for the limitations of small models through intelligent architecture. Recommended model size 8B 35B parameters. Smaller models (≤4B) struggle with multi step tool use and lose context across turns. Larger models ( 35B) don't need SmallCode's adaptations and are better served by tools designed for frontier models. Why SmallCode? OpenCode SmallCode Target Frontier models (Claude, GPT 5) 8B 35B local models Context Dumps everything Budget managed, summarized Tool calling Assumes reliable JSON Forgiving multi format parser Planning Single shot TO

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .env.example | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .npmignore | file |
| .smallcode | dir |
| ARCHITECTURE.md | file |
| bench | dir |
| bin | dir |
| build.js | file |
| CHANGELOG.md | file |
| COMPARISON.md | file |
| docs | dir |
| extensions | dir |
| install.ps1 | file |
| install.sh | file |
| knowledge | dir |
| LICENSE | file |
| marrow | dir |
| mcp.json | file |
| package-lock.json | file |
| package.json | file |
| profiles | dir |
| README_zh-CN.md | file |
| README.md | file |
| scripts | dir |
| SECURITY.md | file |
| skills | dir |
| smallcode.toml | file |
| src | dir |
| test | dir |
| tmpsmallcode-artifactslinux | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 108 |
| marrow/ | 74 |
| test/ | 25 |
| bin/ | 24 |
| (root) | 18 |
| .smallcode/ | 11 |
| skills/ | 8 |
| extensions/ | 6 |
| bench/ | 5 |
| knowledge/ | 4 |
| profiles/ | 3 |
| .github/ | 1 |
| docs/ | 1 |
| scripts/ | 1 |
| tmpsmallcode-artifactslinux/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 108 | preferred |
| docs/ | 1 | preferred |
| test/ | 25 | preferred |
| skills/ | 8 | preferred |
| scripts/ | 1 | preferred |
| extensions/ | 6 | preferred |
| marrow/ | 74 | large |
| marrow/src/ | 67 | large |
| src/compiled/ | 48 | large |
| bin/ | 24 | large |
| src/session/ | 23 | large |
| marrow/src/tools/ | 20 | large |
| src/compiled/cognition/ | 18 | large |
| src/tools/ | 13 | large |
| src/compiled/providers/ | 12 | large |
| .smallcode/ | 11 | large |
| .smallcode/plugins/ | 11 | large |
| marrow/src/core/ | 11 | large |
| marrow/src/tui/ | 8 | large |
| .smallcode/plugins/anthropic-provider/ | 7 | large |
| src/model/ | 7 | large |
| src/compiled/features/ | 6 | large |
| bench/ | 5 | large |
| marrow/src/governor/ | 5 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `src/compiled/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | smallcode | build, start, dev, eval, mcp, bench, bench:smoke, bench:polyglot, bench:tools, bench:list, bench:diff, test, test:e2e, test:e2e:offline, rag:index | bonescript-compiler, chalk, cli-highlight, express, marked, marked-terminal |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `bench/README.md`
- `docs/rag-harness.md`
- `knowledge/README.md`
- `skills/README.md`

### 에이전트 지침 후보

- `bin/mcp_bridge.js`
- `marrow/src/core/mcp_server.ms`
- `marrow/src/tools/mcp_client.ms`
- `mcp.json`
- `skills/README.md`
- `skills/benchmark-driven-development.md`
- `skills/brainstorming.md`
- `skills/debugging.md`
- `skills/external-guard.md`
- `skills/iterative-retrieval.md`
- `skills/learn.md`
- `skills/tdd.md`
- `src/plugins/skills.js`
- `src/tools/mcp_client.js`
- `test/skills.test.js`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `test/bench_diff.test.js`
- `test/config_normalize.test.js`
- `test/contract.test.js`
- `test/dedup_idempotent.test.js`
- `test/e2e_offline.js`
- `test/e2e_smoke.js`
- `test/hybrid_search.test.js`
- `test/liquid_tool_parser.test.js`
- `test/message_normalizer.test.js`
- `test/model_routing.test.js`
- `test/provider_compat.test.js`
- `test/provider_wizard.test.js`
- `test/quality_monitor.test.js`
- `test/rag.test.js`
- `test/read_guard.test.js`
- `test/run_tests.test.js`
- `test/shell_session.test.js`
- `test/skills.test.js`
- `test/ssrf_guard.test.js`
- `test/tdd_governor.test.js`
- `test/tdd_harness.test.js`
- `test/tdd_state.test.js`
- `test/terminal_lifecycle.test.js`
- `test/tui_layout.test.js`
- `test/web_prompt.test.js`

### CI/Docker 후보

- `.github/workflows/build.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .js | 146 |
| .ms | 67 |
| .ts | 26 |
| .md | 21 |
| .json | 8 |
| .marrow | 7 |
| .toml | 4 |
| .gitignore | 2 |
| .example | 1 |
| .gitattributes | 1 |
| .gz | 1 |
| .npmignore | 1 |
| .ps1 | 1 |
| .py | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `package.json 실행 스크립트와 패키지 경계`
- `src/compiled/tsconfig.json 실행 스크립트와 패키지 경계`

