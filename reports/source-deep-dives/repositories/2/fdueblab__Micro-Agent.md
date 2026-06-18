# fdueblab/Micro-Agent Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A lightweight AI agent framework for vertical domain applications | 面向垂域应用的轻量级 AI Agent 框架

## 요약

- 조사 단위: `sources/fdueblab__Micro-Agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 145 files, 44 directories, depth score 116, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=workspace/skills/mcp_protocol/SKILL.md, workspace/knowledge/service_packaging/mcp_spec.md, trace_evidence/scripts/http_mcp_smoke.py이고, 의존성 단서는 mcp, fastapi, react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | fdueblab/Micro-Agent |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 108 |
| Forks | 17 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/fdueblab__Micro-Agent](../../../../sources/fdueblab__Micro-Agent) |
| Existing report | [reports/global-trending/repositories/fdueblab__Micro-Agent.md](../../../global-trending/repositories/fdueblab__Micro-Agent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 145 / 44 |
| Max observed depth | 4 |
| Top directories | .github, api, config, deploy, docs, micro_agent, tasks, tests, trace_evidence, workspace |
| Top extensions | .py: 79, .md: 40, .j2: 8, .toml: 4, (none): 4, .json: 3, .yml: 3, .png: 2, .example: 1, .sh: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 10 |
| docs | documentation surface | 6 |
| api | source boundary | 2 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| deploy | deployment surface | 1 |
| micro_agent | top-level component | 1 |
| tasks | top-level component | 1 |
| trace_evidence | top-level component | 1 |
| workspace | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi, react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [workspace/skills/mcp_protocol/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/mcp_protocol/SKILL.md) | mcp signal |
| mcp | [workspace/knowledge/service_packaging/mcp_spec.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/mcp_spec.md) | mcp signal |
| mcp | [trace_evidence/scripts/http_mcp_smoke.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/scripts/http_mcp_smoke.py) | mcp signal |
| mcp | [tests/test_mcp.py](../../../../sources/fdueblab__Micro-Agent/tests/test_mcp.py) | mcp signal |
| agentRuntime | [workspace/skills/video_action_recognition/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/video_action_recognition/SKILL.md) | agentRuntime signal |
| agentRuntime | [workspace/skills/video_action_recognition/skill.toml](../../../../sources/fdueblab__Micro-Agent/workspace/skills/video_action_recognition/skill.toml) | agentRuntime signal |
| agentRuntime | [workspace/skills/domain_homeAI/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/domain_homeAI/SKILL.md) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/fdueblab__Micro-Agent/pyproject.toml) | config signal |
| ci | [.github/workflows/master.yml](../../../../sources/fdueblab__Micro-Agent/.github/workflows/master.yml) | ci support |
| ci | [.github/workflows/publish.yml](../../../../sources/fdueblab__Micro-Agent/.github/workflows/publish.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/fdueblab__Micro-Agent/docker-compose.yml) | container support |
| container | [Dockerfile](../../../../sources/fdueblab__Micro-Agent/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 34 | [workspace/skills/video_action_recognition/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/video_action_recognition/SKILL.md)<br>[workspace/skills/video_action_recognition/skill.toml](../../../../sources/fdueblab__Micro-Agent/workspace/skills/video_action_recognition/skill.toml)<br>[workspace/skills/mcp_protocol/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/mcp_protocol/SKILL.md)<br>[workspace/skills/domain_homeAI/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/domain_homeAI/SKILL.md)<br>[workspace/skills/domain_health/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/domain_health/SKILL.md)<br>[workspace/skills/domain_generic/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/domain_generic/SKILL.md)<br>[workspace/skills/domain_evtol/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/domain_evtol/SKILL.md)<br>[workspace/skills/domain_ecommerce/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/domain_ecommerce/SKILL.md) |
| mcp | 12 | [workspace/skills/mcp_protocol/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/mcp_protocol/SKILL.md)<br>[workspace/knowledge/service_packaging/mcp_spec.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/mcp_spec.md)<br>[trace_evidence/scripts/http_mcp_smoke.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/scripts/http_mcp_smoke.py)<br>[tests/test_mcp.py](../../../../sources/fdueblab__Micro-Agent/tests/test_mcp.py)<br>[tasks/templates/mcp_service_recommendation.md.j2](../../../../sources/fdueblab__Micro-Agent/tasks/templates/mcp_service_recommendation.md.j2)<br>[tasks/templates/mcp_test.md.j2](../../../../sources/fdueblab__Micro-Agent/tasks/templates/mcp_test.md.j2)<br>[micro_agent/tool/simulated_mcp.py](../../../../sources/fdueblab__Micro-Agent/micro_agent/tool/simulated_mcp.py)<br>[micro_agent/tool/mcp/__init__.py](../../../../sources/fdueblab__Micro-Agent/micro_agent/tool/mcp/__init__.py) |
| retrieval | 24 | [workspace/knowledge/service_packaging/common_errors.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/common_errors.md)<br>[workspace/knowledge/service_packaging/fastmcp_usage.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/fastmcp_usage.md)<br>[workspace/knowledge/service_packaging/ioeb_conventions.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/ioeb_conventions.md)<br>[workspace/knowledge/service_packaging/mcp_spec.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/mcp_spec.md)<br>[workspace/knowledge/service_packaging/packaging_case_cli.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/packaging_case_cli.md)<br>[workspace/knowledge/service_packaging/packaging_case_flask.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/packaging_case_flask.md)<br>[workspace/knowledge/aml_auto_generate/01_llm_foundations.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/aml_auto_generate/01_llm_foundations.md)<br>[workspace/knowledge/aml_auto_generate/02_multimodal.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/aml_auto_generate/02_multimodal.md) |
| spec | 3 | [workspace/knowledge/service_packaging/mcp_spec.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/mcp_spec.md)<br>[docs/architecture.png](../../../../sources/fdueblab__Micro-Agent/docs/architecture.png)<br>[docs/simulation-build-roadmap.md](../../../../sources/fdueblab__Micro-Agent/docs/simulation-build-roadmap.md) |
| eval | 43 | [workspace/knowledge/service_packaging/mcp_spec.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/mcp_spec.md)<br>[trace_evidence/__init__.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/__init__.py)<br>[trace_evidence/config_attachment.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/config_attachment.py)<br>[trace_evidence/evidence_card.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/evidence_card.py)<br>[trace_evidence/evidence_checker.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/evidence_checker.py)<br>[trace_evidence/HANDOFF.md](../../../../sources/fdueblab__Micro-Agent/trace_evidence/HANDOFF.md)<br>[trace_evidence/headless_run.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/headless_run.py)<br>[trace_evidence/infrastructure_v1_report.md](../../../../sources/fdueblab__Micro-Agent/trace_evidence/infrastructure_v1_report.md) |
| security | 1 | [micro_agent/simulation/sandbox_tool.py](../../../../sources/fdueblab__Micro-Agent/micro_agent/simulation/sandbox_tool.py) |
| ci | 2 | [.github/workflows/master.yml](../../../../sources/fdueblab__Micro-Agent/.github/workflows/master.yml)<br>[.github/workflows/publish.yml](../../../../sources/fdueblab__Micro-Agent/.github/workflows/publish.yml) |
| container | 4 | [docker-compose.yml](../../../../sources/fdueblab__Micro-Agent/docker-compose.yml)<br>[Dockerfile](../../../../sources/fdueblab__Micro-Agent/Dockerfile)<br>[deploy/Dockerfile](../../../../sources/fdueblab__Micro-Agent/deploy/Dockerfile)<br>[deploy/start.sh](../../../../sources/fdueblab__Micro-Agent/deploy/start.sh) |
| instruction | 0 | not obvious |
| docs | 6 | [README_en.md](../../../../sources/fdueblab__Micro-Agent/README_en.md)<br>[README.md](../../../../sources/fdueblab__Micro-Agent/README.md)<br>[trace_evidence/README.md](../../../../sources/fdueblab__Micro-Agent/trace_evidence/README.md)<br>[docs/architecture.png](../../../../sources/fdueblab__Micro-Agent/docs/architecture.png)<br>[docs/banner.png](../../../../sources/fdueblab__Micro-Agent/docs/banner.png)<br>[docs/simulation-build-roadmap.md](../../../../sources/fdueblab__Micro-Agent/docs/simulation-build-roadmap.md) |
| config | 1 | [pyproject.toml](../../../../sources/fdueblab__Micro-Agent/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 43 | [workspace/knowledge/service_packaging/mcp_spec.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/mcp_spec.md)<br>[trace_evidence/__init__.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/__init__.py)<br>[trace_evidence/config_attachment.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/config_attachment.py)<br>[trace_evidence/evidence_card.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/evidence_card.py)<br>[trace_evidence/evidence_checker.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/evidence_checker.py)<br>[trace_evidence/HANDOFF.md](../../../../sources/fdueblab__Micro-Agent/trace_evidence/HANDOFF.md) |
| CI workflows | 2 | [.github/workflows/master.yml](../../../../sources/fdueblab__Micro-Agent/.github/workflows/master.yml)<br>[.github/workflows/publish.yml](../../../../sources/fdueblab__Micro-Agent/.github/workflows/publish.yml) |
| Containers / deploy | 4 | [docker-compose.yml](../../../../sources/fdueblab__Micro-Agent/docker-compose.yml)<br>[Dockerfile](../../../../sources/fdueblab__Micro-Agent/Dockerfile)<br>[deploy/Dockerfile](../../../../sources/fdueblab__Micro-Agent/deploy/Dockerfile)<br>[deploy/start.sh](../../../../sources/fdueblab__Micro-Agent/deploy/start.sh) |
| Security / policy | 1 | [micro_agent/simulation/sandbox_tool.py](../../../../sources/fdueblab__Micro-Agent/micro_agent/simulation/sandbox_tool.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `workspace/skills/mcp_protocol/SKILL.md`, `workspace/knowledge/service_packaging/mcp_spec.md`, `trace_evidence/scripts/http_mcp_smoke.py`.
2. Map agent/tool runtime through: `workspace/skills/video_action_recognition/SKILL.md`, `workspace/skills/video_action_recognition/skill.toml`, `workspace/skills/mcp_protocol/SKILL.md`.
3. Inspect retrieval/memory/indexing through: `workspace/knowledge/service_packaging/common_errors.md`, `workspace/knowledge/service_packaging/fastmcp_usage.md`, `workspace/knowledge/service_packaging/ioeb_conventions.md`.
4. Verify behavior through test/eval files: `workspace/knowledge/service_packaging/mcp_spec.md`, `trace_evidence/__init__.py`, `trace_evidence/config_attachment.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 A lightweight AI agent framework for vertical domain applications 面向垂域应用的轻量级 AI Agent 框架. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
