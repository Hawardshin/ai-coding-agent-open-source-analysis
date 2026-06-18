# agent0ai/agent-zero Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Agent Zero AI framework

## 요약

- 조사 단위: `sources/agent0ai__agent-zero` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,635 files, 551 directories, depth score 122, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=webui/public/mcp_client.svg, webui/public/mcp_server.svg, webui/components/settings/mcp/mcp_client.html이고, 의존성 단서는 openai, mcp, langchain, pydantic, transformers, faiss, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | agent0ai/agent-zero |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 18111 |
| Forks | 3662 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/agent0ai__agent-zero](../../../../sources/agent0ai__agent-zero) |
| Existing report | [reports/global-trending/repositories/agent0ai__agent-zero.md](../../../global-trending/repositories/agent0ai__agent-zero.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1635 / 551 |
| Max observed depth | 12 |
| Top directories | .github, agents, api, conf, docker, docs, extensions, helpers, knowledge, lib, logs, plugins, prompts, scripts, skills, tests, tmp, tools, usr, webui |
| Top extensions | .py: 614, .md: 278, .html: 167, .png: 164, .js: 129, (none): 63, .svg: 56, .yaml: 54, .jpg: 28, .sh: 24, .css: 17, .json: 6 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 53 |
| docs | documentation surface | 25 |
| api | source boundary | 6 |
| lib | source boundary | 2 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| conf | top-level component | 1 |
| docker | documentation surface | 1 |
| extensions | top-level component | 1 |
| helpers | top-level component | 1 |
| knowledge | top-level component | 1 |
| logs | top-level component | 1 |
| plugins | top-level component | 1 |
| prompts | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| tmp | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | faiss |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [webui/public/mcp_client.svg](../../../../sources/agent0ai__agent-zero/webui/public/mcp_client.svg) | mcp signal |
| mcp | [webui/public/mcp_server.svg](../../../../sources/agent0ai__agent-zero/webui/public/mcp_server.svg) | mcp signal |
| mcp | [webui/components/settings/mcp/mcp_client.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/mcp_client.html) | mcp signal |
| mcp | [webui/components/settings/mcp/mcp_server.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/mcp_server.html) | mcp signal |
| agentRuntime | [agent.py](../../../../sources/agent0ai__agent-zero/agent.py) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/agent0ai__agent-zero/AGENTS.md) | agentRuntime signal |
| agentRuntime | [webui/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/AGENTS.md) | agentRuntime signal |
| agentRuntime | [webui/public/agent.svg](../../../../sources/agent0ai__agent-zero/webui/public/agent.svg) | agentRuntime signal |
| instruction | [webui/js/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/js/AGENTS.md) | instruction signal |
| instruction | [webui/css/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/css/AGENTS.md) | instruction signal |
| config | [requirements.dev.txt](../../../../sources/agent0ai__agent-zero/requirements.dev.txt) | config signal |
| config | [requirements.txt](../../../../sources/agent0ai__agent-zero/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 260 | [agent.py](../../../../sources/agent0ai__agent-zero/agent.py)<br>[AGENTS.md](../../../../sources/agent0ai__agent-zero/AGENTS.md)<br>[webui/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/AGENTS.md)<br>[webui/public/agent.svg](../../../../sources/agent0ai__agent-zero/webui/public/agent.svg)<br>[webui/public/memory.svg](../../../../sources/agent0ai__agent-zero/webui/public/memory.svg)<br>[webui/public/skills_add.svg](../../../../sources/agent0ai__agent-zero/webui/public/skills_add.svg)<br>[webui/public/skills.svg](../../../../sources/agent0ai__agent-zero/webui/public/skills.svg)<br>[webui/js/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/js/AGENTS.md) |
| mcp | 24 | [webui/public/mcp_client.svg](../../../../sources/agent0ai__agent-zero/webui/public/mcp_client.svg)<br>[webui/public/mcp_server.svg](../../../../sources/agent0ai__agent-zero/webui/public/mcp_server.svg)<br>[webui/components/settings/mcp/mcp_client.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/mcp_client.html)<br>[webui/components/settings/mcp/mcp_server.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/mcp_server.html)<br>[webui/components/settings/mcp/mcp-settings.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/mcp-settings.html)<br>[webui/components/settings/mcp/server/example.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/server/example.html)<br>[webui/components/settings/mcp/client/example.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/client/example.html)<br>[webui/components/settings/mcp/client/mcp-server-tools.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/mcp/client/mcp-server-tools.html) |
| retrieval | 91 | [webui/index.css](../../../../sources/agent0ai__agent-zero/webui/index.css)<br>[webui/index.html](../../../../sources/agent0ai__agent-zero/webui/index.html)<br>[webui/index.js](../../../../sources/agent0ai__agent-zero/webui/index.js)<br>[webui/public/embed_model.svg](../../../../sources/agent0ai__agent-zero/webui/public/embed_model.svg)<br>[webui/public/memory.svg](../../../../sources/agent0ai__agent-zero/webui/public/memory.svg)<br>[usr/knowledge/.gitkeep](../../../../sources/agent0ai__agent-zero/usr/knowledge/.gitkeep)<br>[usr/knowledge/solutions/.gitkeep](../../../../sources/agent0ai__agent-zero/usr/knowledge/solutions/.gitkeep)<br>[usr/knowledge/main/.gitkeep](../../../../sources/agent0ai__agent-zero/usr/knowledge/main/.gitkeep) |
| spec | 5 | [requirements.dev.txt](../../../../sources/agent0ai__agent-zero/requirements.dev.txt)<br>[requirements.txt](../../../../sources/agent0ai__agent-zero/requirements.txt)<br>[plugins/_telegram_integration/requirements.txt](../../../../sources/agent0ai__agent-zero/plugins/_telegram_integration/requirements.txt)<br>[knowledge/main/about/architecture.md](../../../../sources/agent0ai__agent-zero/knowledge/main/about/architecture.md)<br>[docs/developer/architecture.md](../../../../sources/agent0ai__agent-zero/docs/developer/architecture.md) |
| eval | 92 | [webui/components/settings/developer/websocket-test-store.js](../../../../sources/agent0ai__agent-zero/webui/components/settings/developer/websocket-test-store.js)<br>[webui/components/settings/agent/workdir-file-structure-test.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/agent/workdir-file-structure-test.html)<br>[webui/components/projects/project-file-structure-test.html](../../../../sources/agent0ai__agent-zero/webui/components/projects/project-file-structure-test.html)<br>[tests/AGENTS.md](../../../../sources/agent0ai__agent-zero/tests/AGENTS.md)<br>[tests/chunk_parser_test.py](../../../../sources/agent0ai__agent-zero/tests/chunk_parser_test.py)<br>[tests/email_parser_test.py](../../../../sources/agent0ai__agent-zero/tests/email_parser_test.py)<br>[tests/rate_limiter_test.py](../../../../sources/agent0ai__agent-zero/tests/rate_limiter_test.py)<br>[tests/test_a0_connector_computer_use_metadata.py](../../../../sources/agent0ai__agent-zero/tests/test_a0_connector_computer_use_metadata.py) |
| security | 48 | [webui/public/auth.svg](../../../../sources/agent0ai__agent-zero/webui/public/auth.svg)<br>[webui/components/settings/external/auth.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/external/auth.html)<br>[tests/test_fastmcp_openapi_security.py](../../../../sources/agent0ai__agent-zero/tests/test_fastmcp_openapi_security.py)<br>[tests/test_http_auth_csrf.py](../../../../sources/agent0ai__agent-zero/tests/test_http_auth_csrf.py)<br>[tests/test_image_get_security.py](../../../../sources/agent0ai__agent-zero/tests/test_image_get_security.py)<br>[tests/test_oauth_codex.py](../../../../sources/agent0ai__agent-zero/tests/test_oauth_codex.py)<br>[tests/test_oauth_gemini_api.py](../../../../sources/agent0ai__agent-zero/tests/test_oauth_gemini_api.py)<br>[tests/test_oauth_github_copilot.py](../../../../sources/agent0ai__agent-zero/tests/test_oauth_github_copilot.py) |
| ci | 2 | [.github/workflows/close-inactive.yml](../../../../sources/agent0ai__agent-zero/.github/workflows/close-inactive.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/agent0ai__agent-zero/.github/workflows/docker-publish.yml) |
| container | 4 | [DockerfileLocal](../../../../sources/agent0ai__agent-zero/DockerfileLocal)<br>[docker/run/docker-compose.yml](../../../../sources/agent0ai__agent-zero/docker/run/docker-compose.yml)<br>[docker/run/Dockerfile](../../../../sources/agent0ai__agent-zero/docker/run/Dockerfile)<br>[docker/base/Dockerfile](../../../../sources/agent0ai__agent-zero/docker/base/Dockerfile) |
| instruction | 24 | [AGENTS.md](../../../../sources/agent0ai__agent-zero/AGENTS.md)<br>[webui/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/AGENTS.md)<br>[webui/js/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/js/AGENTS.md)<br>[webui/css/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/css/AGENTS.md)<br>[webui/components/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/components/AGENTS.md)<br>[tools/AGENTS.md](../../../../sources/agent0ai__agent-zero/tools/AGENTS.md)<br>[tests/AGENTS.md](../../../../sources/agent0ai__agent-zero/tests/AGENTS.md)<br>[skills/AGENTS.md](../../../../sources/agent0ai__agent-zero/skills/AGENTS.md) |
| docs | 224 | [README.md](../../../../sources/agent0ai__agent-zero/README.md)<br>[plugins/README.md](../../../../sources/agent0ai__agent-zero/plugins/README.md)<br>[plugins/_whisper_stt/README.md](../../../../sources/agent0ai__agent-zero/plugins/_whisper_stt/README.md)<br>[plugins/_whatsapp_integration/README.md](../../../../sources/agent0ai__agent-zero/plugins/_whatsapp_integration/README.md)<br>[plugins/_text_editor/README.md](../../../../sources/agent0ai__agent-zero/plugins/_text_editor/README.md)<br>[plugins/_telegram_integration/README.md](../../../../sources/agent0ai__agent-zero/plugins/_telegram_integration/README.md)<br>[plugins/_skills/README.md](../../../../sources/agent0ai__agent-zero/plugins/_skills/README.md)<br>[plugins/_promptinclude/README.md](../../../../sources/agent0ai__agent-zero/plugins/_promptinclude/README.md) |
| config | 5 | [requirements.dev.txt](../../../../sources/agent0ai__agent-zero/requirements.dev.txt)<br>[requirements.txt](../../../../sources/agent0ai__agent-zero/requirements.txt)<br>[requirements2.txt](../../../../sources/agent0ai__agent-zero/requirements2.txt)<br>[plugins/_whatsapp_integration/whatsapp-bridge/package.json](../../../../sources/agent0ai__agent-zero/plugins/_whatsapp_integration/whatsapp-bridge/package.json)<br>[plugins/_telegram_integration/requirements.txt](../../../../sources/agent0ai__agent-zero/plugins/_telegram_integration/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 92 | [webui/components/settings/developer/websocket-test-store.js](../../../../sources/agent0ai__agent-zero/webui/components/settings/developer/websocket-test-store.js)<br>[webui/components/settings/agent/workdir-file-structure-test.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/agent/workdir-file-structure-test.html)<br>[webui/components/projects/project-file-structure-test.html](../../../../sources/agent0ai__agent-zero/webui/components/projects/project-file-structure-test.html)<br>[tests/AGENTS.md](../../../../sources/agent0ai__agent-zero/tests/AGENTS.md)<br>[tests/chunk_parser_test.py](../../../../sources/agent0ai__agent-zero/tests/chunk_parser_test.py)<br>[tests/email_parser_test.py](../../../../sources/agent0ai__agent-zero/tests/email_parser_test.py) |
| CI workflows | 2 | [.github/workflows/close-inactive.yml](../../../../sources/agent0ai__agent-zero/.github/workflows/close-inactive.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/agent0ai__agent-zero/.github/workflows/docker-publish.yml) |
| Containers / deploy | 4 | [DockerfileLocal](../../../../sources/agent0ai__agent-zero/DockerfileLocal)<br>[docker/run/docker-compose.yml](../../../../sources/agent0ai__agent-zero/docker/run/docker-compose.yml)<br>[docker/run/Dockerfile](../../../../sources/agent0ai__agent-zero/docker/run/Dockerfile)<br>[docker/base/Dockerfile](../../../../sources/agent0ai__agent-zero/docker/base/Dockerfile) |
| Security / policy | 48 | [webui/public/auth.svg](../../../../sources/agent0ai__agent-zero/webui/public/auth.svg)<br>[webui/components/settings/external/auth.html](../../../../sources/agent0ai__agent-zero/webui/components/settings/external/auth.html)<br>[tests/test_fastmcp_openapi_security.py](../../../../sources/agent0ai__agent-zero/tests/test_fastmcp_openapi_security.py)<br>[tests/test_http_auth_csrf.py](../../../../sources/agent0ai__agent-zero/tests/test_http_auth_csrf.py)<br>[tests/test_image_get_security.py](../../../../sources/agent0ai__agent-zero/tests/test_image_get_security.py)<br>[tests/test_oauth_codex.py](../../../../sources/agent0ai__agent-zero/tests/test_oauth_codex.py) |
| Agent instructions | 24 | [AGENTS.md](../../../../sources/agent0ai__agent-zero/AGENTS.md)<br>[webui/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/AGENTS.md)<br>[webui/js/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/js/AGENTS.md)<br>[webui/css/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/css/AGENTS.md)<br>[webui/components/AGENTS.md](../../../../sources/agent0ai__agent-zero/webui/components/AGENTS.md)<br>[tools/AGENTS.md](../../../../sources/agent0ai__agent-zero/tools/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review; primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `webui/public/mcp_client.svg`, `webui/public/mcp_server.svg`, `webui/components/settings/mcp/mcp_client.html`.
2. Map agent/tool runtime through: `agent.py`, `AGENTS.md`, `webui/AGENTS.md`.
3. Inspect retrieval/memory/indexing through: `webui/index.css`, `webui/index.html`, `webui/index.js`.
4. Verify behavior through test/eval files: `webui/components/settings/developer/websocket-test-store.js`, `webui/components/settings/agent/workdir-file-structure-test.html`, `webui/components/projects/project-file-structure-test.html`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Agent Zero AI framework. 핵심 구조 신호는 Python, requirements.txt, README.md, AGENTS.md, LICENSE, openai이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
