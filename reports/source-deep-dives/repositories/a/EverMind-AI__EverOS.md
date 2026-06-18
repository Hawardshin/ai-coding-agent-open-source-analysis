# EverMind-AI/EverOS Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Self-evolving memory across Agent and platform. The one portable memory layer for every agent they use - Claude Code, Codex, OpenClaw, Hermes, and more

## 요약

- 조사 단위: `sources/EverMind-AI__EverOS` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 655 files, 158 directories, depth score 130, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=use-cases/claude-code-plugin/mcp/server.js이고, 의존성 단서는 openai, claude, fastapi, pydantic, typer, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | EverMind-AI/EverOS |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 7691 |
| Forks | 740 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/EverMind-AI__EverOS](../../../../sources/EverMind-AI__EverOS) |
| Existing report | [reports/global-trending/repositories/EverMind-AI__EverOS.md](../../../global-trending/repositories/EverMind-AI__EverOS.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 655 / 158 |
| Max observed depth | 7 |
| Top directories | .claude, .github, data, docs, scripts, src, tests, use-cases |
| Top extensions | .py: 481, .md: 54, .json: 28, .ts: 18, .js: 17, (none): 12, .tsx: 9, .yml: 9, .sh: 5, .example: 4, .toml: 4, .html: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 81 |
| src | source boundary | 20 |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| data | top-level component | 1 |
| scripts | top-level component | 1 |
| use-cases | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install-deps | make install-deps |
| utility | Makefile | install | make install |
| quality | Makefile | lint | make lint |
| quality | Makefile | docs-check | make docs-check |
| quality | Makefile | check-commits | make check-commits |
| quality | Makefile | check-pr-title | make check-pr-title |
| quality | Makefile | check-assets | make check-assets |
| quality | Makefile | check-deprecated-names | make check-deprecated-names |
| quality | Makefile | check-cjk | make check-cjk |
| quality | Makefile | check-datetime | make check-datetime |
| utility | Makefile | openapi | make openapi |
| quality | Makefile | check-openapi | make check-openapi |
| quality | Makefile | format | make format |
| test | Makefile | test | make test |
| utility | Makefile | integration | make integration |
| utility | Makefile | package | make package |
| utility | Makefile | cov | make cov |
| utility | Makefile | ci | make ci |
| utility | pyproject.toml | everos | everos |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, claude |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [use-cases/claude-code-plugin/mcp/server.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/mcp/server.js) | mcp signal |
| agentRuntime | [use-cases/openher/integration/context_features.py](../../../../sources/EverMind-AI__EverOS/use-cases/openher/integration/context_features.py) | agentRuntime signal |
| agentRuntime | [use-cases/openher/integration/memory_types.py](../../../../sources/EverMind-AI__EverOS/use-cases/openher/integration/memory_types.py) | agentRuntime signal |
| agentRuntime | [use-cases/game-of-throne-demo/frontend/src/hooks/useChat.ts](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/hooks/useChat.ts) | agentRuntime signal |
| agentRuntime | [use-cases/game-of-throne-demo/frontend/src/hooks/useCompareChat.ts](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/hooks/useCompareChat.ts) | agentRuntime signal |
| entrypoints | [use-cases/game-of-throne-demo/frontend/src/App.css](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/App.css) | entrypoints signal |
| entrypoints | [use-cases/game-of-throne-demo/frontend/src/App.tsx](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [use-cases/game-of-throne-demo/frontend/src/main.tsx](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/main.tsx) | entrypoints signal |
| entrypoints | [use-cases/game-of-throne-demo/backend/src/server.ts](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/backend/src/server.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/EverMind-AI__EverOS/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/EverMind-AI__EverOS/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/EverMind-AI__EverOS/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [use-cases/game-of-throne-demo/frontend/src/App.css](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/App.css)<br>[use-cases/game-of-throne-demo/frontend/src/App.tsx](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/App.tsx)<br>[use-cases/game-of-throne-demo/frontend/src/main.tsx](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/main.tsx)<br>[use-cases/game-of-throne-demo/backend/src/server.ts](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/backend/src/server.ts)<br>[use-cases/claude-code-plugin/mcp/server.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/mcp/server.js)<br>[src/everos/entrypoints/cli/main.py](../../../../sources/EverMind-AI__EverOS/src/everos/entrypoints/cli/main.py)<br>[src/everos/entrypoints/cli/commands/server.py](../../../../sources/EverMind-AI__EverOS/src/everos/entrypoints/cli/commands/server.py) |
| agentRuntime | 111 | [use-cases/openher/integration/context_features.py](../../../../sources/EverMind-AI__EverOS/use-cases/openher/integration/context_features.py)<br>[use-cases/openher/integration/memory_types.py](../../../../sources/EverMind-AI__EverOS/use-cases/openher/integration/memory_types.py)<br>[use-cases/game-of-throne-demo/frontend/src/hooks/useChat.ts](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/hooks/useChat.ts)<br>[use-cases/game-of-throne-demo/frontend/src/hooks/useCompareChat.ts](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/hooks/useCompareChat.ts)<br>[use-cases/claude-code-plugin/skills/memory-tools.md](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/skills/memory-tools.md)<br>[use-cases/claude-code-plugin/hooks/hooks.json](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/hooks/hooks.json)<br>[use-cases/claude-code-plugin/hooks/scripts/inject-memories.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/hooks/scripts/inject-memories.js)<br>[use-cases/claude-code-plugin/hooks/scripts/session-context-wrapper.sh](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/hooks/scripts/session-context-wrapper.sh) |
| mcp | 1 | [use-cases/claude-code-plugin/mcp/server.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/mcp/server.js) |
| retrieval | 143 | [use-cases/openher/integration/memory_types.py](../../../../sources/EverMind-AI__EverOS/use-cases/openher/integration/memory_types.py)<br>[use-cases/game-of-throne-demo/frontend/index.html](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/index.html)<br>[use-cases/game-of-throne-demo/frontend/src/types/index.ts](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/src/types/index.ts)<br>[use-cases/claude-code-plugin/skills/memory-tools.md](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/skills/memory-tools.md)<br>[tests/unit/test_memory/__init__.py](../../../../sources/EverMind-AI__EverOS/tests/unit/test_memory/__init__.py)<br>[tests/unit/test_memory/test_events.py](../../../../sources/EverMind-AI__EverOS/tests/unit/test_memory/test_events.py)<br>[tests/unit/test_memory/test_models.py](../../../../sources/EverMind-AI__EverOS/tests/unit/test_memory/test_models.py)<br>[tests/unit/test_memory/test_strategies/__init__.py](../../../../sources/EverMind-AI__EverOS/tests/unit/test_memory/test_strategies/__init__.py) |
| spec | 2 | [docs/architecture.md](../../../../sources/EverMind-AI__EverOS/docs/architecture.md)<br>[.claude/rules/architecture.md](../../../../sources/EverMind-AI__EverOS/.claude/rules/architecture.md) |
| eval | 244 | [use-cases/claude-code-plugin/scripts/test-retrieve-memories.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/scripts/test-retrieve-memories.js)<br>[use-cases/claude-code-plugin/scripts/test-save-memories.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/scripts/test-save-memories.js)<br>[tests/__init__.py](../../../../sources/EverMind-AI__EverOS/tests/__init__.py)<br>[tests/_consistency_assertions.py](../../../../sources/EverMind-AI__EverOS/tests/_consistency_assertions.py)<br>[tests/conftest.py](../../../../sources/EverMind-AI__EverOS/tests/conftest.py)<br>[tests/run_locomo_10x3.sh](../../../../sources/EverMind-AI__EverOS/tests/run_locomo_10x3.sh)<br>[tests/run_locomo_batch.sh](../../../../sources/EverMind-AI__EverOS/tests/run_locomo_batch.sh)<br>[tests/test_locomo.py](../../../../sources/EverMind-AI__EverOS/tests/test_locomo.py) |
| security | 2 | [SECURITY.md](../../../../sources/EverMind-AI__EverOS/SECURITY.md)<br>[.claude/rules/language-policy.md](../../../../sources/EverMind-AI__EverOS/.claude/rules/language-policy.md) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/EverMind-AI__EverOS/.github/workflows/ci.yml)<br>[.github/workflows/commits.yml](../../../../sources/EverMind-AI__EverOS/.github/workflows/commits.yml)<br>[.github/workflows/docs.yml](../../../../sources/EverMind-AI__EverOS/.github/workflows/docs.yml) |
| container | 2 | [use-cases/game-of-throne-demo/frontend/Dockerfile](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/Dockerfile)<br>[use-cases/game-of-throne-demo/backend/Dockerfile](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/backend/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/EverMind-AI__EverOS/CLAUDE.md) |
| docs | 25 | [README.md](../../../../sources/EverMind-AI__EverOS/README.md)<br>[README.zh-CN.md](../../../../sources/EverMind-AI__EverOS/README.zh-CN.md)<br>[use-cases/README.md](../../../../sources/EverMind-AI__EverOS/use-cases/README.md)<br>[use-cases/openher/README.md](../../../../sources/EverMind-AI__EverOS/use-cases/openher/README.md)<br>[use-cases/game-of-throne-demo/README.md](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/README.md)<br>[use-cases/claude-code-plugin/README.md](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/README.md)<br>[tests/fixtures/README.md](../../../../sources/EverMind-AI__EverOS/tests/fixtures/README.md)<br>[src/everos/README.md](../../../../sources/EverMind-AI__EverOS/src/everos/README.md) |
| config | 9 | [Makefile](../../../../sources/EverMind-AI__EverOS/Makefile)<br>[pyproject.toml](../../../../sources/EverMind-AI__EverOS/pyproject.toml)<br>[uv.lock](../../../../sources/EverMind-AI__EverOS/uv.lock)<br>[use-cases/game-of-throne-demo/package.json](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/package.json)<br>[use-cases/game-of-throne-demo/frontend/package.json](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/package.json)<br>[use-cases/game-of-throne-demo/frontend/tsconfig.json](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/tsconfig.json)<br>[use-cases/game-of-throne-demo/backend/package.json](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/backend/package.json)<br>[use-cases/game-of-throne-demo/backend/tsconfig.json](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/backend/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 244 | [use-cases/claude-code-plugin/scripts/test-retrieve-memories.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/scripts/test-retrieve-memories.js)<br>[use-cases/claude-code-plugin/scripts/test-save-memories.js](../../../../sources/EverMind-AI__EverOS/use-cases/claude-code-plugin/scripts/test-save-memories.js)<br>[tests/__init__.py](../../../../sources/EverMind-AI__EverOS/tests/__init__.py)<br>[tests/_consistency_assertions.py](../../../../sources/EverMind-AI__EverOS/tests/_consistency_assertions.py)<br>[tests/conftest.py](../../../../sources/EverMind-AI__EverOS/tests/conftest.py)<br>[tests/run_locomo_10x3.sh](../../../../sources/EverMind-AI__EverOS/tests/run_locomo_10x3.sh) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/EverMind-AI__EverOS/.github/workflows/ci.yml)<br>[.github/workflows/commits.yml](../../../../sources/EverMind-AI__EverOS/.github/workflows/commits.yml)<br>[.github/workflows/docs.yml](../../../../sources/EverMind-AI__EverOS/.github/workflows/docs.yml) |
| Containers / deploy | 2 | [use-cases/game-of-throne-demo/frontend/Dockerfile](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/frontend/Dockerfile)<br>[use-cases/game-of-throne-demo/backend/Dockerfile](../../../../sources/EverMind-AI__EverOS/use-cases/game-of-throne-demo/backend/Dockerfile) |
| Security / policy | 2 | [SECURITY.md](../../../../sources/EverMind-AI__EverOS/SECURITY.md)<br>[.claude/rules/language-policy.md](../../../../sources/EverMind-AI__EverOS/.claude/rules/language-policy.md) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/EverMind-AI__EverOS/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `use-cases/claude-code-plugin/mcp/server.js`, `use-cases/openher/integration/context_features.py`, `use-cases/openher/integration/memory_types.py`.
2. Trace execution through entrypoints: `use-cases/game-of-throne-demo/frontend/src/App.css`, `use-cases/game-of-throne-demo/frontend/src/App.tsx`, `use-cases/game-of-throne-demo/frontend/src/main.tsx`.
3. Map agent/tool runtime through: `use-cases/openher/integration/context_features.py`, `use-cases/openher/integration/memory_types.py`, `use-cases/game-of-throne-demo/frontend/src/hooks/useChat.ts`.
4. Inspect retrieval/memory/indexing through: `use-cases/openher/integration/memory_types.py`, `use-cases/game-of-throne-demo/frontend/index.html`, `use-cases/game-of-throne-demo/frontend/src/types/index.ts`.
5. Verify behavior through test/eval files: `use-cases/claude-code-plugin/scripts/test-retrieve-memories.js`, `use-cases/claude-code-plugin/scripts/test-save-memories.js`, `tests/__init__.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Self evolving memory across Agent and platform. The one portable memory layer for every agent they use Claude Code, Code. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
