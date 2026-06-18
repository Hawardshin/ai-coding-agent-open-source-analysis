# alibaizhanov/mengram Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Human-like memory for AI agents — semantic, episodic & procedural. Experience-driven procedures that learn from failures. Free API, Python & JS SDKs, LangChain, CrewAI & OpenClaw integrations.

## 요약

- 조사 단위: `sources/alibaizhanov__mengram` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 154 files, 38 directories, depth score 109, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=integrations/claude-code-plugin/.mcp.json, api/cloud_mcp_server.py, api/mcp_server.py이고, 의존성 단서는 openai, anthropic, claude, mcp, langchain, fastapi, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | alibaizhanov/mengram |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 178 |
| Forks | 27 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/alibaizhanov__mengram](../../../../sources/alibaizhanov__mengram) |
| Existing report | [reports/global-trending/repositories/alibaizhanov__mengram.md](../../../global-trending/repositories/alibaizhanov__mengram.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 154 / 38 |
| Max observed depth | 5 |
| Top directories | .claude-plugin, .github, api, benchmarks, blog, cloud, engine, examples, integrations, obsidian-plugin, sdk, tests, vscode-mengram |
| Top extensions | .py: 51, .md: 19, .json: 15, .ts: 13, .html: 12, (none): 10, .sh: 8, .txt: 5, .js: 4, .css: 3, .example: 3, .yml: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 5 |
| examples/customer-support-agent | examples workspace | 4 |
| examples/devops-agent | examples workspace | 4 |
| examples/personal-assistant | examples workspace | 4 |
| api | source boundary | 3 |
| examples/n8n | examples workspace | 2 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| blog | top-level component | 1 |
| cloud | top-level component | 1 |
| engine | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| integrations | top-level component | 1 |
| obsidian-plugin | top-level component | 1 |
| sdk | top-level component | 1 |
| vscode-mengram | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | mengram | mengram |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [integrations/claude-code-plugin/.mcp.json](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/.mcp.json) | mcp signal |
| mcp | [api/cloud_mcp_server.py](../../../../sources/alibaizhanov__mengram/api/cloud_mcp_server.py) | mcp signal |
| mcp | [api/mcp_server.py](../../../../sources/alibaizhanov__mengram/api/mcp_server.py) | mcp signal |
| agentRuntime | [integrations/openclaw/SKILL.md](../../../../sources/alibaizhanov__mengram/integrations/openclaw/SKILL.md) | agentRuntime signal |
| agentRuntime | [integrations/claude-code-plugin/skills/memory/SKILL.md](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/skills/memory/SKILL.md) | agentRuntime signal |
| agentRuntime | [integrations/claude-code-plugin/hooks/hooks.json](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/hooks/hooks.json) | agentRuntime signal |
| agentRuntime | [integrations/claude-code-plugin/hooks/scripts/load-profile.sh](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/hooks/scripts/load-profile.sh) | agentRuntime signal |
| entrypoints | [vscode-mengram/media/main.js](../../../../sources/alibaizhanov__mengram/vscode-mengram/media/main.js) | entrypoints signal |
| entrypoints | [obsidian-plugin/src/main.ts](../../../../sources/alibaizhanov__mengram/obsidian-plugin/src/main.ts) | entrypoints signal |
| entrypoints | [examples/personal-assistant/main.py](../../../../sources/alibaizhanov__mengram/examples/personal-assistant/main.py) | entrypoints signal |
| entrypoints | [examples/devops-agent/main.py](../../../../sources/alibaizhanov__mengram/examples/devops-agent/main.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/alibaizhanov__mengram/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [vscode-mengram/media/main.js](../../../../sources/alibaizhanov__mengram/vscode-mengram/media/main.js)<br>[obsidian-plugin/src/main.ts](../../../../sources/alibaizhanov__mengram/obsidian-plugin/src/main.ts)<br>[examples/personal-assistant/main.py](../../../../sources/alibaizhanov__mengram/examples/personal-assistant/main.py)<br>[examples/devops-agent/main.py](../../../../sources/alibaizhanov__mengram/examples/devops-agent/main.py)<br>[examples/customer-support-agent/main.py](../../../../sources/alibaizhanov__mengram/examples/customer-support-agent/main.py) |
| agentRuntime | 6 | [integrations/openclaw/SKILL.md](../../../../sources/alibaizhanov__mengram/integrations/openclaw/SKILL.md)<br>[integrations/claude-code-plugin/skills/memory/SKILL.md](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/skills/memory/SKILL.md)<br>[integrations/claude-code-plugin/hooks/hooks.json](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/hooks/hooks.json)<br>[integrations/claude-code-plugin/hooks/scripts/load-profile.sh](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/hooks/scripts/load-profile.sh)<br>[integrations/claude-code-plugin/hooks/scripts/save-conversation.sh](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/hooks/scripts/save-conversation.sh)<br>[cloud/agent-install.txt](../../../../sources/alibaizhanov__mengram/cloud/agent-install.txt) |
| mcp | 3 | [integrations/claude-code-plugin/.mcp.json](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/.mcp.json)<br>[api/cloud_mcp_server.py](../../../../sources/alibaizhanov__mengram/api/cloud_mcp_server.py)<br>[api/mcp_server.py](../../../../sources/alibaizhanov__mengram/api/mcp_server.py) |
| retrieval | 16 | [sdk/js/index.d.ts](../../../../sources/alibaizhanov__mengram/sdk/js/index.d.ts)<br>[sdk/js/index.js](../../../../sources/alibaizhanov__mengram/sdk/js/index.js)<br>[sdk/js/index.test.js](../../../../sources/alibaizhanov__mengram/sdk/js/index.test.js)<br>[integrations/crewai_memory.py](../../../../sources/alibaizhanov__mengram/integrations/crewai_memory.py)<br>[integrations/claude-code-plugin/skills/memory/SKILL.md](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/skills/memory/SKILL.md)<br>[examples/n8n/mengram-memory-agent.json](../../../../sources/alibaizhanov__mengram/examples/n8n/mengram-memory-agent.json)<br>[engine/vector/__init__.py](../../../../sources/alibaizhanov__mengram/engine/vector/__init__.py)<br>[engine/vector/embedder.py](../../../../sources/alibaizhanov__mengram/engine/vector/embedder.py) |
| spec | 5 | [ARCHITECTURE.md](../../../../sources/alibaizhanov__mengram/ARCHITECTURE.md)<br>[requirements.txt](../../../../sources/alibaizhanov__mengram/requirements.txt)<br>[examples/personal-assistant/requirements.txt](../../../../sources/alibaizhanov__mengram/examples/personal-assistant/requirements.txt)<br>[examples/devops-agent/requirements.txt](../../../../sources/alibaizhanov__mengram/examples/devops-agent/requirements.txt)<br>[examples/customer-support-agent/requirements.txt](../../../../sources/alibaizhanov__mengram/examples/customer-support-agent/requirements.txt) |
| eval | 6 | [tests/__init__.py](../../../../sources/alibaizhanov__mengram/tests/__init__.py)<br>[tests/test_client.py](../../../../sources/alibaizhanov__mengram/tests/test_client.py)<br>[tests/test_importer.py](../../../../sources/alibaizhanov__mengram/tests/test_importer.py)<br>[tests/test_parser.py](../../../../sources/alibaizhanov__mengram/tests/test_parser.py)<br>[sdk/js/index.test.js](../../../../sources/alibaizhanov__mengram/sdk/js/index.test.js)<br>[benchmarks/locomo_bench.py](../../../../sources/alibaizhanov__mengram/benchmarks/locomo_bench.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 4 | [docker-compose.yml](../../../../sources/alibaizhanov__mengram/docker-compose.yml)<br>[Dockerfile.selfhost](../../../../sources/alibaizhanov__mengram/Dockerfile.selfhost)<br>[cloud/docker-compose.yml](../../../../sources/alibaizhanov__mengram/cloud/docker-compose.yml)<br>[cloud/Dockerfile](../../../../sources/alibaizhanov__mengram/cloud/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 12 | [README.md](../../../../sources/alibaizhanov__mengram/README.md)<br>[vscode-mengram/README.md](../../../../sources/alibaizhanov__mengram/vscode-mengram/README.md)<br>[sdk/langchain-mengram/README.md](../../../../sources/alibaizhanov__mengram/sdk/langchain-mengram/README.md)<br>[sdk/js/README.md](../../../../sources/alibaizhanov__mengram/sdk/js/README.md)<br>[obsidian-plugin/README.md](../../../../sources/alibaizhanov__mengram/obsidian-plugin/README.md)<br>[integrations/openclaw/README.md](../../../../sources/alibaizhanov__mengram/integrations/openclaw/README.md)<br>[integrations/claude-code-plugin/README.md](../../../../sources/alibaizhanov__mengram/integrations/claude-code-plugin/README.md)<br>[examples/README.md](../../../../sources/alibaizhanov__mengram/examples/README.md) |
| config | 11 | [pyproject.toml](../../../../sources/alibaizhanov__mengram/pyproject.toml)<br>[requirements.txt](../../../../sources/alibaizhanov__mengram/requirements.txt)<br>[vscode-mengram/package.json](../../../../sources/alibaizhanov__mengram/vscode-mengram/package.json)<br>[vscode-mengram/tsconfig.json](../../../../sources/alibaizhanov__mengram/vscode-mengram/tsconfig.json)<br>[sdk/langchain-mengram/pyproject.toml](../../../../sources/alibaizhanov__mengram/sdk/langchain-mengram/pyproject.toml)<br>[sdk/js/package.json](../../../../sources/alibaizhanov__mengram/sdk/js/package.json)<br>[obsidian-plugin/package.json](../../../../sources/alibaizhanov__mengram/obsidian-plugin/package.json)<br>[obsidian-plugin/tsconfig.json](../../../../sources/alibaizhanov__mengram/obsidian-plugin/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 6 | [tests/__init__.py](../../../../sources/alibaizhanov__mengram/tests/__init__.py)<br>[tests/test_client.py](../../../../sources/alibaizhanov__mengram/tests/test_client.py)<br>[tests/test_importer.py](../../../../sources/alibaizhanov__mengram/tests/test_importer.py)<br>[tests/test_parser.py](../../../../sources/alibaizhanov__mengram/tests/test_parser.py)<br>[sdk/js/index.test.js](../../../../sources/alibaizhanov__mengram/sdk/js/index.test.js)<br>[benchmarks/locomo_bench.py](../../../../sources/alibaizhanov__mengram/benchmarks/locomo_bench.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 4 | [docker-compose.yml](../../../../sources/alibaizhanov__mengram/docker-compose.yml)<br>[Dockerfile.selfhost](../../../../sources/alibaizhanov__mengram/Dockerfile.selfhost)<br>[cloud/docker-compose.yml](../../../../sources/alibaizhanov__mengram/cloud/docker-compose.yml)<br>[cloud/Dockerfile](../../../../sources/alibaizhanov__mengram/cloud/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `integrations/claude-code-plugin/.mcp.json`, `api/cloud_mcp_server.py`, `api/mcp_server.py`.
2. Trace execution through entrypoints: `vscode-mengram/media/main.js`, `obsidian-plugin/src/main.ts`, `examples/personal-assistant/main.py`.
3. Map agent/tool runtime through: `integrations/openclaw/SKILL.md`, `integrations/claude-code-plugin/skills/memory/SKILL.md`, `integrations/claude-code-plugin/hooks/hooks.json`.
4. Inspect retrieval/memory/indexing through: `sdk/js/index.d.ts`, `sdk/js/index.js`, `sdk/js/index.test.js`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_client.py`, `tests/test_importer.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Human like memory for AI agents — semantic, episodic & procedural. Experience driven procedures that learn from failures. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, docker-compose.yml, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
