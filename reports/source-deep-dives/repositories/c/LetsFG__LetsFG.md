# LetsFG/LetsFG Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Agent-native flight search & booking. Saved $116 across 5 routes vs Google Flights (verified). 400+ airlines in 5 seconds. Join the community - Star and spread the word

## 요약

- 조사 단위: `sources/LetsFG__LetsFG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 125 files, 28 directories, depth score 123, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, mcp-config.json, skills/flight-search/references/mcp-setup.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | LetsFG/LetsFG |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1175 |
| Forks | 60 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/LetsFG__LetsFG](../../../../sources/LetsFG__LetsFG) |
| Existing report | [reports/global-trending/repositories/LetsFG__LetsFG.md](../../../global-trending/repositories/LetsFG__LetsFG.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 125 / 28 |
| Max observed depth | 8 |
| Top directories | .github, agent-skills-contribution, assets, docs, models, sdk, skills |
| Top extensions | .py: 39, .md: 35, .json: 15, .ts: 8, (none): 7, .png: 5, .yml: 5, .css: 2, .js: 2, .yaml: 2, .gif: 1, .mp4: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 31 |
| .github | ci surface | 1 |
| agent-skills-contribution | top-level component | 1 |
| assets | top-level component | 1 |
| models | top-level component | 1 |
| sdk | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
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
| mcp | [.mcp.json](../../../../sources/LetsFG__LetsFG/.mcp.json) | mcp signal |
| mcp | [mcp-config.json](../../../../sources/LetsFG__LetsFG/mcp-config.json) | mcp signal |
| mcp | [skills/flight-search/references/mcp-setup.md](../../../../sources/LetsFG__LetsFG/skills/flight-search/references/mcp-setup.md) | mcp signal |
| mcp | [sdk/mcp/package-lock.json](../../../../sources/LetsFG__LetsFG/sdk/mcp/package-lock.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/LetsFG__LetsFG/AGENTS.md) | agentRuntime signal |
| agentRuntime | [SKILL.md](../../../../sources/LetsFG__LetsFG/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/flight-search/SKILL.md](../../../../sources/LetsFG__LetsFG/skills/flight-search/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/flight-search/references/api-reference.md](../../../../sources/LetsFG__LetsFG/skills/flight-search/references/api-reference.md) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/LetsFG__LetsFG/server.json) | entrypoints signal |
| entrypoints | [sdk/python/letsfg/__main__.py](../../../../sources/LetsFG__LetsFG/sdk/python/letsfg/__main__.py) | entrypoints signal |
| entrypoints | [sdk/mcp/src/index.test.ts](../../../../sources/LetsFG__LetsFG/sdk/mcp/src/index.test.ts) | entrypoints signal |
| entrypoints | [sdk/mcp/src/index.ts](../../../../sources/LetsFG__LetsFG/sdk/mcp/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [server.json](../../../../sources/LetsFG__LetsFG/server.json)<br>[sdk/python/letsfg/__main__.py](../../../../sources/LetsFG__LetsFG/sdk/python/letsfg/__main__.py)<br>[sdk/mcp/src/index.test.ts](../../../../sources/LetsFG__LetsFG/sdk/mcp/src/index.test.ts)<br>[sdk/mcp/src/index.ts](../../../../sources/LetsFG__LetsFG/sdk/mcp/src/index.ts)<br>[sdk/js/src/cli.ts](../../../../sources/LetsFG__LetsFG/sdk/js/src/cli.ts)<br>[sdk/js/src/index.test.ts](../../../../sources/LetsFG__LetsFG/sdk/js/src/index.test.ts)<br>[sdk/js/src/index.ts](../../../../sources/LetsFG__LetsFG/sdk/js/src/index.ts) |
| agentRuntime | 9 | [AGENTS.md](../../../../sources/LetsFG__LetsFG/AGENTS.md)<br>[SKILL.md](../../../../sources/LetsFG__LetsFG/SKILL.md)<br>[skills/flight-search/SKILL.md](../../../../sources/LetsFG__LetsFG/skills/flight-search/SKILL.md)<br>[skills/flight-search/references/api-reference.md](../../../../sources/LetsFG__LetsFG/skills/flight-search/references/api-reference.md)<br>[skills/flight-search/references/mcp-setup.md](../../../../sources/LetsFG__LetsFG/skills/flight-search/references/mcp-setup.md)<br>[docs/agent-guide.md](../../../../sources/LetsFG__LetsFG/docs/agent-guide.md)<br>`agent-skills-contribution/packages/skills-catalog/skills/(tooling)/letsfg/SKILL.md`<br>`agent-skills-contribution/packages/skills-catalog/skills/(tooling)/letsfg/references/api-reference.md` |
| mcp | 10 | [.mcp.json](../../../../sources/LetsFG__LetsFG/.mcp.json)<br>[mcp-config.json](../../../../sources/LetsFG__LetsFG/mcp-config.json)<br>[skills/flight-search/references/mcp-setup.md](../../../../sources/LetsFG__LetsFG/skills/flight-search/references/mcp-setup.md)<br>[sdk/mcp/package-lock.json](../../../../sources/LetsFG__LetsFG/sdk/mcp/package-lock.json)<br>[sdk/mcp/package.json](../../../../sources/LetsFG__LetsFG/sdk/mcp/package.json)<br>[sdk/mcp/README.md](../../../../sources/LetsFG__LetsFG/sdk/mcp/README.md)<br>[sdk/mcp/tsconfig.json](../../../../sources/LetsFG__LetsFG/sdk/mcp/tsconfig.json)<br>[sdk/mcp/src/index.test.ts](../../../../sources/LetsFG__LetsFG/sdk/mcp/src/index.test.ts) |
| retrieval | 5 | [sdk/mcp/src/index.test.ts](../../../../sources/LetsFG__LetsFG/sdk/mcp/src/index.test.ts)<br>[sdk/mcp/src/index.ts](../../../../sources/LetsFG__LetsFG/sdk/mcp/src/index.ts)<br>[sdk/js/src/index.test.ts](../../../../sources/LetsFG__LetsFG/sdk/js/src/index.test.ts)<br>[sdk/js/src/index.ts](../../../../sources/LetsFG__LetsFG/sdk/js/src/index.ts)<br>[docs/index.md](../../../../sources/LetsFG__LetsFG/docs/index.md) |
| spec | 1 | [docs/architecture-guide.md](../../../../sources/LetsFG__LetsFG/docs/architecture-guide.md) |
| eval | 26 | [sdk/python/tests/__init__.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/__init__.py)<br>[sdk/python/tests/test_ancillary_connector_parsing.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_ancillary_connector_parsing.py)<br>[sdk/python/tests/test_booking_holdings_booking_urls.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_booking_holdings_booking_urls.py)<br>[sdk/python/tests/test_checkout_engine_configs.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_checkout_engine_configs.py)<br>[sdk/python/tests/test_connector_parsing.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_connector_parsing.py)<br>[sdk/python/tests/test_country_filter_completeness.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_country_filter_completeness.py)<br>[sdk/python/tests/test_currency_rates.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_currency_rates.py)<br>[sdk/python/tests/test_emirates_connector.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_emirates_connector.py) |
| security | 3 | [SECURITY.md](../../../../sources/LetsFG__LetsFG/SECURITY.md)<br>[sdk/python/letsfg/connectors/auth.py](../../../../sources/LetsFG__LetsFG/sdk/python/letsfg/connectors/auth.py)<br>[docs/api-sandbox.md](../../../../sources/LetsFG__LetsFG/docs/api-sandbox.md) |
| ci | 3 | [.github/workflows/docs.yml](../../../../sources/LetsFG__LetsFG/.github/workflows/docs.yml)<br>[.github/workflows/sdk-tests.yml](../../../../sources/LetsFG__LetsFG/.github/workflows/sdk-tests.yml)<br>[.github/workflows/test.yml](../../../../sources/LetsFG__LetsFG/.github/workflows/test.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/LetsFG__LetsFG/docker-compose.yml)<br>[Dockerfile](../../../../sources/LetsFG__LetsFG/Dockerfile)<br>[Dockerfile.python](../../../../sources/LetsFG__LetsFG/Dockerfile.python) |
| instruction | 2 | [AGENTS.md](../../../../sources/LetsFG__LetsFG/AGENTS.md)<br>[CLAUDE.md](../../../../sources/LetsFG__LetsFG/CLAUDE.md) |
| docs | 31 | [mkdocs.yml](../../../../sources/LetsFG__LetsFG/mkdocs.yml)<br>[README.md](../../../../sources/LetsFG__LetsFG/README.md)<br>[sdk/python/README.md](../../../../sources/LetsFG__LetsFG/sdk/python/README.md)<br>[sdk/mcp/README.md](../../../../sources/LetsFG__LetsFG/sdk/mcp/README.md)<br>[sdk/js/README.md](../../../../sources/LetsFG__LetsFG/sdk/js/README.md)<br>[docs/agent-guide.md](../../../../sources/LetsFG__LetsFG/docs/agent-guide.md)<br>[docs/api-errors.md](../../../../sources/LetsFG__LetsFG/docs/api-errors.md)<br>[docs/api-guide.md](../../../../sources/LetsFG__LetsFG/docs/api-guide.md) |
| config | 5 | [sdk/python/pyproject.toml](../../../../sources/LetsFG__LetsFG/sdk/python/pyproject.toml)<br>[sdk/mcp/package.json](../../../../sources/LetsFG__LetsFG/sdk/mcp/package.json)<br>[sdk/mcp/tsconfig.json](../../../../sources/LetsFG__LetsFG/sdk/mcp/tsconfig.json)<br>[sdk/js/package.json](../../../../sources/LetsFG__LetsFG/sdk/js/package.json)<br>[sdk/js/tsconfig.json](../../../../sources/LetsFG__LetsFG/sdk/js/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 26 | [sdk/python/tests/__init__.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/__init__.py)<br>[sdk/python/tests/test_ancillary_connector_parsing.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_ancillary_connector_parsing.py)<br>[sdk/python/tests/test_booking_holdings_booking_urls.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_booking_holdings_booking_urls.py)<br>[sdk/python/tests/test_checkout_engine_configs.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_checkout_engine_configs.py)<br>[sdk/python/tests/test_connector_parsing.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_connector_parsing.py)<br>[sdk/python/tests/test_country_filter_completeness.py](../../../../sources/LetsFG__LetsFG/sdk/python/tests/test_country_filter_completeness.py) |
| CI workflows | 3 | [.github/workflows/docs.yml](../../../../sources/LetsFG__LetsFG/.github/workflows/docs.yml)<br>[.github/workflows/sdk-tests.yml](../../../../sources/LetsFG__LetsFG/.github/workflows/sdk-tests.yml)<br>[.github/workflows/test.yml](../../../../sources/LetsFG__LetsFG/.github/workflows/test.yml) |
| Containers / deploy | 3 | [docker-compose.yml](../../../../sources/LetsFG__LetsFG/docker-compose.yml)<br>[Dockerfile](../../../../sources/LetsFG__LetsFG/Dockerfile)<br>[Dockerfile.python](../../../../sources/LetsFG__LetsFG/Dockerfile.python) |
| Security / policy | 3 | [SECURITY.md](../../../../sources/LetsFG__LetsFG/SECURITY.md)<br>[sdk/python/letsfg/connectors/auth.py](../../../../sources/LetsFG__LetsFG/sdk/python/letsfg/connectors/auth.py)<br>[docs/api-sandbox.md](../../../../sources/LetsFG__LetsFG/docs/api-sandbox.md) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/LetsFG__LetsFG/AGENTS.md)<br>[CLAUDE.md](../../../../sources/LetsFG__LetsFG/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.mcp.json`, `mcp-config.json`, `skills/flight-search/references/mcp-setup.md`.
2. Trace execution through entrypoints: `server.json`, `sdk/python/letsfg/__main__.py`, `sdk/mcp/src/index.test.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `SKILL.md`, `skills/flight-search/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `sdk/mcp/src/index.test.ts`, `sdk/mcp/src/index.ts`, `sdk/js/src/index.test.ts`.
5. Verify behavior through test/eval files: `sdk/python/tests/__init__.py`, `sdk/python/tests/test_ancillary_connector_parsing.py`, `sdk/python/tests/test_booking_holdings_booking_urls.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Agent native flight search & booking. Saved $116 across 5 routes vs Google Flights verified . 400+ airlines in 5 seconds. 핵심 구조 신호는 Python, Dockerfile, docker-compose.yml, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
