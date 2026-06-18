# zhayujie/CowAgent Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Open-source super AI assistant & Agent Harness. Plans tasks, runs tools and skills, self-evolves with memory and knowledge. Multi-model, multi-channel. Lightweight, extensible, one-line install. (formerly chatgpt-on-wechat)

## 요약

- 조사 단위: `sources/zhayujie__CowAgent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 613 files, 142 directories, depth score 127, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/zh/tools/mcp.mdx, docs/tools/mcp.mdx, docs/ja/tools/mcp.mdx이고, 의존성 단서는 click, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | zhayujie/CowAgent |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 45383 |
| Forks | 10206 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/zhayujie__CowAgent](../../../../sources/zhayujie__CowAgent) |
| Existing report | [reports/global-trending/repositories/zhayujie__CowAgent.md](../../../global-trending/repositories/zhayujie__CowAgent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 613 / 142 |
| Max observed depth | 5 |
| Top directories | .github, agent, bridge, channel, cli, common, docker, docs, models, plugins, scripts, skills, tests, translate, voice |
| Top extensions | .py: 284, .mdx: 240, .md: 26, .template: 13, .svg: 12, .yml: 7, .sh: 6, (none): 5, .json: 4, .jpg: 3, .ico: 2, .js: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 107 |
| tests | validation surface | 20 |
| .github | ci surface | 1 |
| agent | top-level component | 1 |
| bridge | top-level component | 1 |
| channel | top-level component | 1 |
| cli | top-level component | 1 |
| common | top-level component | 1 |
| docker | documentation surface | 1 |
| models | top-level component | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| translate | top-level component | 1 |
| voice | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | cow | cow |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | click |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [docs/zh/tools/mcp.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/tools/mcp.mdx) | mcp signal |
| mcp | [docs/tools/mcp.mdx](../../../../sources/zhayujie__CowAgent/docs/tools/mcp.mdx) | mcp signal |
| mcp | [docs/ja/tools/mcp.mdx](../../../../sources/zhayujie__CowAgent/docs/ja/tools/mcp.mdx) | mcp signal |
| mcp | [agent/tools/mcp/__init__.py](../../../../sources/zhayujie__CowAgent/agent/tools/mcp/__init__.py) | mcp signal |
| agentRuntime | [skills/README.md](../../../../sources/zhayujie__CowAgent/skills/README.md) | agentRuntime signal |
| agentRuntime | [skills/skill-creator/SKILL.md](../../../../sources/zhayujie__CowAgent/skills/skill-creator/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/skill-creator/scripts/init_skill.py](../../../../sources/zhayujie__CowAgent/skills/skill-creator/scripts/init_skill.py) | agentRuntime signal |
| agentRuntime | [skills/skill-creator/scripts/package_skill.py](../../../../sources/zhayujie__CowAgent/skills/skill-creator/scripts/package_skill.py) | agentRuntime signal |
| entrypoints | [cli/__main__.py](../../../../sources/zhayujie__CowAgent/cli/__main__.py) | entrypoints signal |
| instruction | [docs/zh/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/models/claude.mdx) | instruction signal |
| instruction | [docs/zh/models/gemini.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/models/gemini.mdx) | instruction signal |
| instruction | [docs/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/models/claude.mdx) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [cli/__main__.py](../../../../sources/zhayujie__CowAgent/cli/__main__.py) |
| agentRuntime | 191 | [skills/README.md](../../../../sources/zhayujie__CowAgent/skills/README.md)<br>[skills/skill-creator/SKILL.md](../../../../sources/zhayujie__CowAgent/skills/skill-creator/SKILL.md)<br>[skills/skill-creator/scripts/init_skill.py](../../../../sources/zhayujie__CowAgent/skills/skill-creator/scripts/init_skill.py)<br>[skills/skill-creator/scripts/package_skill.py](../../../../sources/zhayujie__CowAgent/skills/skill-creator/scripts/package_skill.py)<br>[skills/skill-creator/scripts/quick_validate.py](../../../../sources/zhayujie__CowAgent/skills/skill-creator/scripts/quick_validate.py)<br>[skills/knowledge-wiki/SKILL.md](../../../../sources/zhayujie__CowAgent/skills/knowledge-wiki/SKILL.md)<br>[skills/image-generation/SKILL.md](../../../../sources/zhayujie__CowAgent/skills/image-generation/SKILL.md)<br>[skills/image-generation/scripts/generate.py](../../../../sources/zhayujie__CowAgent/skills/image-generation/scripts/generate.py) |
| mcp | 6 | [docs/zh/tools/mcp.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/tools/mcp.mdx)<br>[docs/tools/mcp.mdx](../../../../sources/zhayujie__CowAgent/docs/tools/mcp.mdx)<br>[docs/ja/tools/mcp.mdx](../../../../sources/zhayujie__CowAgent/docs/ja/tools/mcp.mdx)<br>[agent/tools/mcp/__init__.py](../../../../sources/zhayujie__CowAgent/agent/tools/mcp/__init__.py)<br>[agent/tools/mcp/mcp_client.py](../../../../sources/zhayujie__CowAgent/agent/tools/mcp/mcp_client.py)<br>[agent/tools/mcp/mcp_tool.py](../../../../sources/zhayujie__CowAgent/agent/tools/mcp/mcp_tool.py) |
| retrieval | 65 | [tests/test_knowledge_service.py](../../../../sources/zhayujie__CowAgent/tests/test_knowledge_service.py)<br>[tests/test_knowledge_web.py](../../../../sources/zhayujie__CowAgent/tests/test_knowledge_web.py)<br>[skills/knowledge-wiki/SKILL.md](../../../../sources/zhayujie__CowAgent/skills/knowledge-wiki/SKILL.md)<br>[docs/zh/tools/index.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/tools/index.mdx)<br>[docs/zh/tools/memory.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/tools/memory.mdx)<br>[docs/zh/skills/index.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/skills/index.mdx)<br>[docs/zh/skills/knowledge-wiki.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/skills/knowledge-wiki.mdx)<br>[docs/zh/models/index.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/models/index.mdx) |
| spec | 5 | [requirements-optional.txt](../../../../sources/zhayujie__CowAgent/requirements-optional.txt)<br>[requirements.txt](../../../../sources/zhayujie__CowAgent/requirements.txt)<br>[docs/zh/intro/architecture.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/intro/architecture.mdx)<br>[docs/ja/intro/architecture.mdx](../../../../sources/zhayujie__CowAgent/docs/ja/intro/architecture.mdx)<br>[docs/intro/architecture.mdx](../../../../sources/zhayujie__CowAgent/docs/intro/architecture.mdx) |
| eval | 17 | [tests/test_bash_streaming.py](../../../../sources/zhayujie__CowAgent/tests/test_bash_streaming.py)<br>[tests/test_custom_provider_handlers.py](../../../../sources/zhayujie__CowAgent/tests/test_custom_provider_handlers.py)<br>[tests/test_custom_provider.py](../../../../sources/zhayujie__CowAgent/tests/test_custom_provider.py)<br>[tests/test_dashscope_provider.py](../../../../sources/zhayujie__CowAgent/tests/test_dashscope_provider.py)<br>[tests/test_evolution.py](../../../../sources/zhayujie__CowAgent/tests/test_evolution.py)<br>[tests/test_invariant_bash.py](../../../../sources/zhayujie__CowAgent/tests/test_invariant_bash.py)<br>[tests/test_knowledge_service.py](../../../../sources/zhayujie__CowAgent/tests/test_knowledge_service.py)<br>[tests/test_knowledge_web.py](../../../../sources/zhayujie__CowAgent/tests/test_knowledge_web.py) |
| security | 2 | [tests/test_security_ssrf_path_traversal.py](../../../../sources/zhayujie__CowAgent/tests/test_security_ssrf_path_traversal.py)<br>[tests/test_security_ssrf_web_fetch.py](../../../../sources/zhayujie__CowAgent/tests/test_security_ssrf_web_fetch.py) |
| ci | 3 | [.github/workflows/deploy-image-arm.yml](../../../../sources/zhayujie__CowAgent/.github/workflows/deploy-image-arm.yml)<br>[.github/workflows/deploy-image.yml](../../../../sources/zhayujie__CowAgent/.github/workflows/deploy-image.yml)<br>[.github/workflows/test-windows-bash.yml](../../../../sources/zhayujie__CowAgent/.github/workflows/test-windows-bash.yml) |
| container | 3 | [Dockerfile](../../../../sources/zhayujie__CowAgent/Dockerfile)<br>[docker/docker-compose.yml](../../../../sources/zhayujie__CowAgent/docker/docker-compose.yml)<br>[docker/Dockerfile.latest](../../../../sources/zhayujie__CowAgent/docker/Dockerfile.latest) |
| instruction | 6 | [docs/zh/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/models/claude.mdx)<br>[docs/zh/models/gemini.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/models/gemini.mdx)<br>[docs/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/models/claude.mdx)<br>[docs/models/gemini.mdx](../../../../sources/zhayujie__CowAgent/docs/models/gemini.mdx)<br>[docs/ja/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/ja/models/claude.mdx)<br>[docs/ja/models/gemini.mdx](../../../../sources/zhayujie__CowAgent/docs/ja/models/gemini.mdx) |
| docs | 265 | [README.md](../../../../sources/zhayujie__CowAgent/README.md)<br>[voice/baidu/README.md](../../../../sources/zhayujie__CowAgent/voice/baidu/README.md)<br>[skills/README.md](../../../../sources/zhayujie__CowAgent/skills/README.md)<br>[plugins/README.md](../../../../sources/zhayujie__CowAgent/plugins/README.md)<br>[plugins/tool/README.md](../../../../sources/zhayujie__CowAgent/plugins/tool/README.md)<br>[plugins/role/README.md](../../../../sources/zhayujie__CowAgent/plugins/role/README.md)<br>[plugins/linkai/README.md](../../../../sources/zhayujie__CowAgent/plugins/linkai/README.md)<br>[plugins/keyword/README.md](../../../../sources/zhayujie__CowAgent/plugins/keyword/README.md) |
| config | 3 | [pyproject.toml](../../../../sources/zhayujie__CowAgent/pyproject.toml)<br>[requirements-optional.txt](../../../../sources/zhayujie__CowAgent/requirements-optional.txt)<br>[requirements.txt](../../../../sources/zhayujie__CowAgent/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 17 | [tests/test_bash_streaming.py](../../../../sources/zhayujie__CowAgent/tests/test_bash_streaming.py)<br>[tests/test_custom_provider_handlers.py](../../../../sources/zhayujie__CowAgent/tests/test_custom_provider_handlers.py)<br>[tests/test_custom_provider.py](../../../../sources/zhayujie__CowAgent/tests/test_custom_provider.py)<br>[tests/test_dashscope_provider.py](../../../../sources/zhayujie__CowAgent/tests/test_dashscope_provider.py)<br>[tests/test_evolution.py](../../../../sources/zhayujie__CowAgent/tests/test_evolution.py)<br>[tests/test_invariant_bash.py](../../../../sources/zhayujie__CowAgent/tests/test_invariant_bash.py) |
| CI workflows | 3 | [.github/workflows/deploy-image-arm.yml](../../../../sources/zhayujie__CowAgent/.github/workflows/deploy-image-arm.yml)<br>[.github/workflows/deploy-image.yml](../../../../sources/zhayujie__CowAgent/.github/workflows/deploy-image.yml)<br>[.github/workflows/test-windows-bash.yml](../../../../sources/zhayujie__CowAgent/.github/workflows/test-windows-bash.yml) |
| Containers / deploy | 3 | [Dockerfile](../../../../sources/zhayujie__CowAgent/Dockerfile)<br>[docker/docker-compose.yml](../../../../sources/zhayujie__CowAgent/docker/docker-compose.yml)<br>[docker/Dockerfile.latest](../../../../sources/zhayujie__CowAgent/docker/Dockerfile.latest) |
| Security / policy | 2 | [tests/test_security_ssrf_path_traversal.py](../../../../sources/zhayujie__CowAgent/tests/test_security_ssrf_path_traversal.py)<br>[tests/test_security_ssrf_web_fetch.py](../../../../sources/zhayujie__CowAgent/tests/test_security_ssrf_web_fetch.py) |
| Agent instructions | 6 | [docs/zh/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/models/claude.mdx)<br>[docs/zh/models/gemini.mdx](../../../../sources/zhayujie__CowAgent/docs/zh/models/gemini.mdx)<br>[docs/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/models/claude.mdx)<br>[docs/models/gemini.mdx](../../../../sources/zhayujie__CowAgent/docs/models/gemini.mdx)<br>[docs/ja/models/claude.mdx](../../../../sources/zhayujie__CowAgent/docs/ja/models/claude.mdx)<br>[docs/ja/models/gemini.mdx](../../../../sources/zhayujie__CowAgent/docs/ja/models/gemini.mdx) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `docs/zh/tools/mcp.mdx`, `docs/tools/mcp.mdx`, `docs/ja/tools/mcp.mdx`.
2. Trace execution through entrypoints: `cli/__main__.py`.
3. Map agent/tool runtime through: `skills/README.md`, `skills/skill-creator/SKILL.md`, `skills/skill-creator/scripts/init_skill.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_knowledge_service.py`, `tests/test_knowledge_web.py`, `skills/knowledge-wiki/SKILL.md`.
5. Verify behavior through test/eval files: `tests/test_bash_streaming.py`, `tests/test_custom_provider_handlers.py`, `tests/test_custom_provider.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Open source super AI assistant & Agent Harness. Plans tasks, runs tools and skills, self evolves with memory and knowled. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, README.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
