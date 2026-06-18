# OpenOSINT/OpenOSINT Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AI-powered OSINT agent with interactive REPL, MCP server, and CLI. 16 tools. Works with Claude, GPT-4, or local models. For authorized security research only.

## 요약

- 조사 단위: `sources/OpenOSINT__OpenOSINT` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 182 files, 29 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_cloud_mcp.py, openosint/mcp_server.py, media/tapes/mcp-showcase.tape이고, 의존성 단서는 openai, anthropic, claude, mcp, fastapi, ollama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | OpenOSINT/OpenOSINT |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 688 |
| Forks | 111 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/OpenOSINT__OpenOSINT](../../../../sources/OpenOSINT__OpenOSINT) |
| Existing report | [reports/global-trending/repositories/OpenOSINT__OpenOSINT.md](../../../global-trending/repositories/OpenOSINT__OpenOSINT.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 182 / 29 |
| Max observed depth | 3 |
| Top directories | .do, .github, .mcp, assets, cloud, db, docs, legal, media, openosint, scripts, tests |
| Top extensions | .py: 70, .html: 35, .md: 16, .png: 9, .yml: 8, .tape: 7, .txt: 6, (none): 6, .gif: 5, .sh: 5, .json: 3, .mp4: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 51 |
| tests | validation surface | 17 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| cloud | top-level component | 1 |
| db | top-level component | 1 |
| legal | top-level component | 1 |
| media | top-level component | 1 |
| openosint | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | openosint | openosint |
| utility | pyproject.toml | openosint-mcp | openosint-mcp |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/test_cloud_mcp.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cloud_mcp.py) | mcp signal |
| mcp | [openosint/mcp_server.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/mcp_server.py) | mcp signal |
| mcp | [media/tapes/mcp-showcase.tape](../../../../sources/OpenOSINT__OpenOSINT/media/tapes/mcp-showcase.tape) | mcp signal |
| mcp | [docs/blog/mcp-protocol-explained.html](../../../../sources/OpenOSINT__OpenOSINT/docs/blog/mcp-protocol-explained.html) | mcp signal |
| agentRuntime | [openosint/agent.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/agent.py) | agentRuntime signal |
| agentRuntime | [openosint/tools/__init__.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [openosint/tools/exceptions.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/exceptions.py) | agentRuntime signal |
| agentRuntime | [openosint/tools/generate_dorks.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/generate_dorks.py) | agentRuntime signal |
| entrypoints | [cloud/main.py](../../../../sources/OpenOSINT__OpenOSINT/cloud/main.py) | entrypoints signal |
| entrypoints | [.mcp/server.json](../../../../sources/OpenOSINT__OpenOSINT/.mcp/server.json) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/OpenOSINT__OpenOSINT/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/OpenOSINT__OpenOSINT/uv.lock) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [cloud/main.py](../../../../sources/OpenOSINT__OpenOSINT/cloud/main.py)<br>[.mcp/server.json](../../../../sources/OpenOSINT__OpenOSINT/.mcp/server.json) |
| agentRuntime | 23 | [openosint/agent.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/agent.py)<br>[openosint/tools/__init__.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/__init__.py)<br>[openosint/tools/exceptions.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/exceptions.py)<br>[openosint/tools/generate_dorks.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/generate_dorks.py)<br>[openosint/tools/scrape_url.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/scrape_url.py)<br>[openosint/tools/search_abuseipdb.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/search_abuseipdb.py)<br>[openosint/tools/search_breach.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/search_breach.py)<br>[openosint/tools/search_censys.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/tools/search_censys.py) |
| mcp | 8 | [tests/test_cloud_mcp.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cloud_mcp.py)<br>[openosint/mcp_server.py](../../../../sources/OpenOSINT__OpenOSINT/openosint/mcp_server.py)<br>[media/tapes/mcp-showcase.tape](../../../../sources/OpenOSINT__OpenOSINT/media/tapes/mcp-showcase.tape)<br>[docs/blog/mcp-protocol-explained.html](../../../../sources/OpenOSINT__OpenOSINT/docs/blog/mcp-protocol-explained.html)<br>[docs/blog/osint-with-mcp.html](../../../../sources/OpenOSINT__OpenOSINT/docs/blog/osint-with-mcp.html)<br>[cloud/routes/mcp_gateway.py](../../../../sources/OpenOSINT__OpenOSINT/cloud/routes/mcp_gateway.py)<br>[.mcp/server.json](../../../../sources/OpenOSINT__OpenOSINT/.mcp/server.json)<br>[.github/workflows/publish-mcp-registry.yml](../../../../sources/OpenOSINT__OpenOSINT/.github/workflows/publish-mcp-registry.yml) |
| retrieval | 12 | [openosint/index.html.txt](../../../../sources/OpenOSINT__OpenOSINT/openosint/index.html.txt)<br>[openosint/web/index.html](../../../../sources/OpenOSINT__OpenOSINT/openosint/web/index.html)<br>[docs/index.html](../../../../sources/OpenOSINT__OpenOSINT/docs/index.html)<br>[docs/tools/index.html](../../../../sources/OpenOSINT__OpenOSINT/docs/tools/index.html)<br>[docs/terms/index.html](../../../../sources/OpenOSINT__OpenOSINT/docs/terms/index.html)<br>[docs/subprocessors/index.html](../../../../sources/OpenOSINT__OpenOSINT/docs/subprocessors/index.html)<br>[docs/privacy/index.html](../../../../sources/OpenOSINT__OpenOSINT/docs/privacy/index.html)<br>[docs/learn/index.html](../../../../sources/OpenOSINT__OpenOSINT/docs/learn/index.html) |
| spec | 0 | not obvious |
| eval | 16 | [tests/__init__.py](../../../../sources/OpenOSINT__OpenOSINT/tests/__init__.py)<br>[tests/test_brightdata.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_brightdata.py)<br>[tests/test_cli_openai.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cli_openai.py)<br>[tests/test_cloud_mcp.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cloud_mcp.py)<br>[tests/test_cloud.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cloud.py)<br>[tests/test_dns.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_dns.py)<br>[tests/test_json_export.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_json_export.py)<br>[tests/test_openai_agent.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_openai_agent.py) |
| security | 3 | [legal/ACCEPTABLE_USE_POLICY.md](../../../../sources/OpenOSINT__OpenOSINT/legal/ACCEPTABLE_USE_POLICY.md)<br>[legal/PRIVACY_POLICY.md](../../../../sources/OpenOSINT__OpenOSINT/legal/PRIVACY_POLICY.md)<br>[cloud/auth.py](../../../../sources/OpenOSINT__OpenOSINT/cloud/auth.py) |
| ci | 2 | [.github/workflows/publish-mcp-registry.yml](../../../../sources/OpenOSINT__OpenOSINT/.github/workflows/publish-mcp-registry.yml)<br>[.github/workflows/release.yml](../../../../sources/OpenOSINT__OpenOSINT/.github/workflows/release.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/OpenOSINT__OpenOSINT/docker-compose.yml)<br>[Dockerfile](../../../../sources/OpenOSINT__OpenOSINT/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 45 | [README.md](../../../../sources/OpenOSINT__OpenOSINT/README.md)<br>[media/README.md](../../../../sources/OpenOSINT__OpenOSINT/media/README.md)<br>[media/screenshots/README.md](../../../../sources/OpenOSINT__OpenOSINT/media/screenshots/README.md)<br>[docs/CNAME](../../../../sources/OpenOSINT__OpenOSINT/docs/CNAME)<br>[docs/commercial-license.md](../../../../sources/OpenOSINT__OpenOSINT/docs/commercial-license.md)<br>[docs/index.html](../../../../sources/OpenOSINT__OpenOSINT/docs/index.html)<br>[docs/logo.svg](../../../../sources/OpenOSINT__OpenOSINT/docs/logo.svg)<br>[docs/robots.txt](../../../../sources/OpenOSINT__OpenOSINT/docs/robots.txt) |
| config | 2 | [pyproject.toml](../../../../sources/OpenOSINT__OpenOSINT/pyproject.toml)<br>[uv.lock](../../../../sources/OpenOSINT__OpenOSINT/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 16 | [tests/__init__.py](../../../../sources/OpenOSINT__OpenOSINT/tests/__init__.py)<br>[tests/test_brightdata.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_brightdata.py)<br>[tests/test_cli_openai.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cli_openai.py)<br>[tests/test_cloud_mcp.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cloud_mcp.py)<br>[tests/test_cloud.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_cloud.py)<br>[tests/test_dns.py](../../../../sources/OpenOSINT__OpenOSINT/tests/test_dns.py) |
| CI workflows | 2 | [.github/workflows/publish-mcp-registry.yml](../../../../sources/OpenOSINT__OpenOSINT/.github/workflows/publish-mcp-registry.yml)<br>[.github/workflows/release.yml](../../../../sources/OpenOSINT__OpenOSINT/.github/workflows/release.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/OpenOSINT__OpenOSINT/docker-compose.yml)<br>[Dockerfile](../../../../sources/OpenOSINT__OpenOSINT/Dockerfile) |
| Security / policy | 3 | [legal/ACCEPTABLE_USE_POLICY.md](../../../../sources/OpenOSINT__OpenOSINT/legal/ACCEPTABLE_USE_POLICY.md)<br>[legal/PRIVACY_POLICY.md](../../../../sources/OpenOSINT__OpenOSINT/legal/PRIVACY_POLICY.md)<br>[cloud/auth.py](../../../../sources/OpenOSINT__OpenOSINT/cloud/auth.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_cloud_mcp.py`, `openosint/mcp_server.py`, `media/tapes/mcp-showcase.tape`.
2. Trace execution through entrypoints: `cloud/main.py`, `.mcp/server.json`.
3. Map agent/tool runtime through: `openosint/agent.py`, `openosint/tools/__init__.py`, `openosint/tools/exceptions.py`.
4. Inspect retrieval/memory/indexing through: `openosint/index.html.txt`, `openosint/web/index.html`, `docs/index.html`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/test_brightdata.py`, `tests/test_cli_openai.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AI powered OSINT agent with interactive REPL, MCP server, and CLI. 16 tools. Works with Claude, GPT 4, or local models. . 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
