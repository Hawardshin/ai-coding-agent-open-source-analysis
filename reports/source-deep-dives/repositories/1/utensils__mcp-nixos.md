# utensils/mcp-nixos Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

MCP-NixOS - Model Context Protocol Server for NixOS resources

## 요약

- 조사 단위: `sources/utensils__mcp-nixos` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 95 files, 18 directories, depth score 101, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=website/index.md, website/.vitepress/theme/index.ts, mcp_nixos/sources/wiki.py이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | utensils/mcp-nixos |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 697 |
| Forks | 37 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/utensils__mcp-nixos](../../../../sources/utensils__mcp-nixos) |
| Existing report | [reports/global-trending/repositories/utensils__mcp-nixos.md](../../../global-trending/repositories/utensils__mcp-nixos.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 95 / 18 |
| Max observed depth | 5 |
| Top directories | .claude, .github, .pi, mcp_nixos, nix, tests, website |
| Top extensions | .py: 28, .md: 15, .png: 11, .json: 7, .yml: 7, (none): 5, .nix: 3, .ts: 3, .vue: 3, .toml: 2, .css: 1, .ico: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 10 |
| .github | ci surface | 1 |
| mcp_nixos | top-level component | 1 |
| nix | top-level component | 1 |
| website | documentation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | mcp-nixos | mcp-nixos |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [website/index.md](../../../../sources/utensils__mcp-nixos/website/index.md) | retrieval signal |
| retrieval | [website/.vitepress/theme/index.ts](../../../../sources/utensils__mcp-nixos/website/.vitepress/theme/index.ts) | retrieval signal |
| retrieval | [mcp_nixos/sources/wiki.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/sources/wiki.py) | retrieval signal |
| entrypoints | [mcp_nixos/server.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/server.py) | entrypoints signal |
| docs | [README.md](../../../../sources/utensils__mcp-nixos/README.md) | docs signal |
| docs | [website/.gitignore](../../../../sources/utensils__mcp-nixos/website/.gitignore) | docs signal |
| docs | [website/about.md](../../../../sources/utensils__mcp-nixos/website/about.md) | docs signal |
| eval | [tests/__init__.py](../../../../sources/utensils__mcp-nixos/tests/__init__.py) | eval signal |
| eval | [tests/conftest.py](../../../../sources/utensils__mcp-nixos/tests/conftest.py) | eval signal |
| eval | [tests/test_env_file_safety.py](../../../../sources/utensils__mcp-nixos/tests/test_env_file_safety.py) | eval signal |
| eval | [tests/test_flake_inputs.py](../../../../sources/utensils__mcp-nixos/tests/test_flake_inputs.py) | eval signal |
| config | [pyproject.toml](../../../../sources/utensils__mcp-nixos/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [mcp_nixos/server.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/server.py) |
| agentRuntime | 3 | [.claude/agents/mcp-server-architect.md](../../../../sources/utensils__mcp-nixos/.claude/agents/mcp-server-architect.md)<br>[.claude/agents/nix-expert.md](../../../../sources/utensils__mcp-nixos/.claude/agents/nix-expert.md)<br>[.claude/agents/python-expert.md](../../../../sources/utensils__mcp-nixos/.claude/agents/python-expert.md) |
| mcp | 23 | [.mcp.json](../../../../sources/utensils__mcp-nixos/.mcp.json)<br>[website/public/images/mcp-nixos.png](../../../../sources/utensils__mcp-nixos/website/public/images/mcp-nixos.png)<br>[mcp_nixos/__init__.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/__init__.py)<br>[mcp_nixos/caches.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/caches.py)<br>[mcp_nixos/config.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/config.py)<br>[mcp_nixos/server.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/server.py)<br>[mcp_nixos/utils.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/utils.py)<br>[mcp_nixos/sources/__init__.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/sources/__init__.py) |
| retrieval | 3 | [website/index.md](../../../../sources/utensils__mcp-nixos/website/index.md)<br>[website/.vitepress/theme/index.ts](../../../../sources/utensils__mcp-nixos/website/.vitepress/theme/index.ts)<br>[mcp_nixos/sources/wiki.py](../../../../sources/utensils__mcp-nixos/mcp_nixos/sources/wiki.py) |
| spec | 0 | not obvious |
| eval | 10 | [tests/__init__.py](../../../../sources/utensils__mcp-nixos/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/utensils__mcp-nixos/tests/conftest.py)<br>[tests/test_env_file_safety.py](../../../../sources/utensils__mcp-nixos/tests/test_env_file_safety.py)<br>[tests/test_flake_inputs.py](../../../../sources/utensils__mcp-nixos/tests/test_flake_inputs.py)<br>[tests/test_integration.py](../../../../sources/utensils__mcp-nixos/tests/test_integration.py)<br>[tests/test_main.py](../../../../sources/utensils__mcp-nixos/tests/test_main.py)<br>[tests/test_server.py](../../../../sources/utensils__mcp-nixos/tests/test_server.py)<br>[tests/test_store.py](../../../../sources/utensils__mcp-nixos/tests/test_store.py) |
| security | 0 | not obvious |
| ci | 6 | [.github/workflows/ci.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/ci.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/claude.yml)<br>[.github/workflows/deploy-flakehub.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/deploy-flakehub.yml)<br>[.github/workflows/deploy-website.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/deploy-website.yml)<br>[.github/workflows/publish.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 2 | [CLAUDE.md](../../../../sources/utensils__mcp-nixos/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/utensils__mcp-nixos/.github/copilot-instructions.md) |
| docs | 37 | [README.md](../../../../sources/utensils__mcp-nixos/README.md)<br>[website/.gitignore](../../../../sources/utensils__mcp-nixos/website/.gitignore)<br>[website/about.md](../../../../sources/utensils__mcp-nixos/website/about.md)<br>[website/index.md](../../../../sources/utensils__mcp-nixos/website/index.md)<br>[website/netlify.toml](../../../../sources/utensils__mcp-nixos/website/netlify.toml)<br>[website/package-lock.json](../../../../sources/utensils__mcp-nixos/website/package-lock.json)<br>[website/package.json](../../../../sources/utensils__mcp-nixos/website/package.json)<br>[website/README.md](../../../../sources/utensils__mcp-nixos/website/README.md) |
| config | 5 | [pyproject.toml](../../../../sources/utensils__mcp-nixos/pyproject.toml)<br>[website/package.json](../../../../sources/utensils__mcp-nixos/website/package.json)<br>[website/tsconfig.json](../../../../sources/utensils__mcp-nixos/website/tsconfig.json)<br>[.pi/package.json](../../../../sources/utensils__mcp-nixos/.pi/package.json)<br>[.pi/tsconfig.json](../../../../sources/utensils__mcp-nixos/.pi/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 10 | [tests/__init__.py](../../../../sources/utensils__mcp-nixos/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/utensils__mcp-nixos/tests/conftest.py)<br>[tests/test_env_file_safety.py](../../../../sources/utensils__mcp-nixos/tests/test_env_file_safety.py)<br>[tests/test_flake_inputs.py](../../../../sources/utensils__mcp-nixos/tests/test_flake_inputs.py)<br>[tests/test_integration.py](../../../../sources/utensils__mcp-nixos/tests/test_integration.py)<br>[tests/test_main.py](../../../../sources/utensils__mcp-nixos/tests/test_main.py) |
| CI workflows | 6 | [.github/workflows/ci.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/ci.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/claude.yml)<br>[.github/workflows/deploy-flakehub.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/deploy-flakehub.yml)<br>[.github/workflows/deploy-website.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/deploy-website.yml)<br>[.github/workflows/publish.yml](../../../../sources/utensils__mcp-nixos/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 2 | [CLAUDE.md](../../../../sources/utensils__mcp-nixos/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/utensils__mcp-nixos/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `website/index.md`, `website/.vitepress/theme/index.ts`, `mcp_nixos/sources/wiki.py`.
2. Trace execution through entrypoints: `mcp_nixos/server.py`.
3. Map agent/tool runtime through: `.claude/agents/mcp-server-architect.md`, `.claude/agents/nix-expert.md`, `.claude/agents/python-expert.md`.
4. Inspect retrieval/memory/indexing through: `website/index.md`, `website/.vitepress/theme/index.ts`, `mcp_nixos/sources/wiki.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/test_env_file_safety.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 MCP NixOS Model Context Protocol Server for NixOS resources. 핵심 구조 신호는 Python, pyproject.toml, README.md, CLAUDE.md, LICENSE, mcp이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
