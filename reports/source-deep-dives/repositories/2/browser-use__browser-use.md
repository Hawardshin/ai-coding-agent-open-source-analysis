# browser-use/browser-use Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 496 files, 100 directories.

## 요약

- 조사 단위: `sources/browser-use__browser-use` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 496 files, 100 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/ci/security/test_mcp_allowed_domains.py, browser_use/mcp/__init__.py, browser_use/mcp/__main__.py이고, 의존성 단서는 openai, anthropic, claude, mcp, langchain, fastapi, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | browser-use/browser-use |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/browser-use__browser-use](../../../../sources/browser-use__browser-use) |
| Existing report | [reports/clone-structures/browser-use__browser-use.md](../../../clone-structures/browser-use__browser-use.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 496 / 100 |
| Max observed depth | 5 |
| Top directories | .github, bin, browser_use, docker, examples, skills, static, tests |
| Top extensions | .py: 385, .md: 57, .yml: 13, (none): 11, .png: 7, .sh: 6, .yaml: 5, .html: 3, .example: 2, .json: 2, .disabled: 1, .fast: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 95 |
| examples/sandbox | examples workspace | 4 |
| examples/apps | examples workspace | 3 |
| examples/integrations | examples workspace | 2 |
| examples/models | examples workspace | 2 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| browser_use | top-level component | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/cloud | examples workspace | 1 |
| examples/ui | examples workspace | 1 |
| skills | top-level component | 1 |
| static | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | browser-use | browser-use |
| utility | pyproject.toml | browseruse | browseruse |
| utility | pyproject.toml | bu | bu |
| utility | pyproject.toml | browser | browser |
| utility | pyproject.toml | browser-use-tui | browser-use-tui |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | torch, ollama, llama |
| webRuntime | fastapi |
| developerSurface | click |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/ci/security/test_mcp_allowed_domains.py](../../../../sources/browser-use__browser-use/tests/ci/security/test_mcp_allowed_domains.py) | mcp signal |
| mcp | [browser_use/mcp/__init__.py](../../../../sources/browser-use__browser-use/browser_use/mcp/__init__.py) | mcp signal |
| mcp | [browser_use/mcp/__main__.py](../../../../sources/browser-use__browser-use/browser_use/mcp/__main__.py) | mcp signal |
| mcp | [browser_use/mcp/.dxtignore](../../../../sources/browser-use__browser-use/browser_use/mcp/.dxtignore) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/browser-use__browser-use/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/agent_tasks/amazon_laptop.yaml](../../../../sources/browser-use__browser-use/tests/agent_tasks/amazon_laptop.yaml) | agentRuntime signal |
| agentRuntime | [tests/agent_tasks/browser_use_pip.yaml](../../../../sources/browser-use__browser-use/tests/agent_tasks/browser_use_pip.yaml) | agentRuntime signal |
| agentRuntime | [tests/agent_tasks/README.md](../../../../sources/browser-use__browser-use/tests/agent_tasks/README.md) | agentRuntime signal |
| entrypoints | [browser_use/skill_cli/__main__.py](../../../../sources/browser-use__browser-use/browser_use/skill_cli/__main__.py) | entrypoints signal |
| entrypoints | [browser_use/skill_cli/main.py](../../../../sources/browser-use__browser-use/browser_use/skill_cli/main.py) | entrypoints signal |
| entrypoints | [browser_use/mcp/server.py](../../../../sources/browser-use__browser-use/browser_use/mcp/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/browser-use__browser-use/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [browser_use/skill_cli/__main__.py](../../../../sources/browser-use__browser-use/browser_use/skill_cli/__main__.py)<br>[browser_use/skill_cli/main.py](../../../../sources/browser-use__browser-use/browser_use/skill_cli/main.py)<br>[browser_use/mcp/__main__.py](../../../../sources/browser-use__browser-use/browser_use/mcp/__main__.py)<br>[browser_use/mcp/server.py](../../../../sources/browser-use__browser-use/browser_use/mcp/server.py)<br>[bin/lint.sh](../../../../sources/browser-use__browser-use/bin/lint.sh)<br>[bin/setup.sh](../../../../sources/browser-use__browser-use/bin/setup.sh)<br>[bin/test.sh](../../../../sources/browser-use__browser-use/bin/test.sh) |
| agentRuntime | 91 | [AGENTS.md](../../../../sources/browser-use__browser-use/AGENTS.md)<br>[tests/agent_tasks/amazon_laptop.yaml](../../../../sources/browser-use__browser-use/tests/agent_tasks/amazon_laptop.yaml)<br>[tests/agent_tasks/browser_use_pip.yaml](../../../../sources/browser-use__browser-use/tests/agent_tasks/browser_use_pip.yaml)<br>[tests/agent_tasks/README.md](../../../../sources/browser-use__browser-use/tests/agent_tasks/README.md)<br>[skills/x402/SKILL.md](../../../../sources/browser-use__browser-use/skills/x402/SKILL.md)<br>[skills/remote-browser/SKILL.md](../../../../sources/browser-use__browser-use/skills/remote-browser/SKILL.md)<br>[skills/open-source/SKILL.md](../../../../sources/browser-use__browser-use/skills/open-source/SKILL.md)<br>[skills/open-source/references/actor.md](../../../../sources/browser-use__browser-use/skills/open-source/references/actor.md) |
| mcp | 8 | [tests/ci/security/test_mcp_allowed_domains.py](../../../../sources/browser-use__browser-use/tests/ci/security/test_mcp_allowed_domains.py)<br>[browser_use/mcp/__init__.py](../../../../sources/browser-use__browser-use/browser_use/mcp/__init__.py)<br>[browser_use/mcp/__main__.py](../../../../sources/browser-use__browser-use/browser_use/mcp/__main__.py)<br>[browser_use/mcp/.dxtignore](../../../../sources/browser-use__browser-use/browser_use/mcp/.dxtignore)<br>[browser_use/mcp/client.py](../../../../sources/browser-use__browser-use/browser_use/mcp/client.py)<br>[browser_use/mcp/controller.py](../../../../sources/browser-use__browser-use/browser_use/mcp/controller.py)<br>[browser_use/mcp/manifest.json](../../../../sources/browser-use__browser-use/browser_use/mcp/manifest.json)<br>[browser_use/mcp/server.py](../../../../sources/browser-use__browser-use/browser_use/mcp/server.py) |
| retrieval | 0 | not obvious |
| spec | 1 | [browser_use/skill_cli/requirements-cli.txt](../../../../sources/browser-use__browser-use/browser_use/skill_cli/requirements-cli.txt) |
| eval | 114 | [tests/scripts/debug_iframe_scrolling.py](../../../../sources/browser-use__browser-use/tests/scripts/debug_iframe_scrolling.py)<br>[tests/scripts/test_frame_hierarchy.py](../../../../sources/browser-use__browser-use/tests/scripts/test_frame_hierarchy.py)<br>[tests/mind2web_data/processed.json](../../../../sources/browser-use__browser-use/tests/mind2web_data/processed.json)<br>[tests/ci/conftest.py](../../../../sources/browser-use__browser-use/tests/ci/conftest.py)<br>[tests/ci/evaluate_tasks.py](../../../../sources/browser-use__browser-use/tests/ci/evaluate_tasks.py)<br>[tests/ci/test_action_blank_page.py](../../../../sources/browser-use__browser-use/tests/ci/test_action_blank_page.py)<br>[tests/ci/test_action_loop_detection.py](../../../../sources/browser-use__browser-use/tests/ci/test_action_loop_detection.py)<br>[tests/ci/test_action_record.py](../../../../sources/browser-use__browser-use/tests/ci/test_action_record.py) |
| security | 17 | [tests/ci/test_sandbox_structured_output.py](../../../../sources/browser-use__browser-use/tests/ci/test_sandbox_structured_output.py)<br>[tests/ci/security/test_daemon_socket_perms.py](../../../../sources/browser-use__browser-use/tests/ci/security/test_daemon_socket_perms.py)<br>[tests/ci/security/test_domain_filtering.py](../../../../sources/browser-use__browser-use/tests/ci/security/test_domain_filtering.py)<br>[tests/ci/security/test_download_filename_sanitization.py](../../../../sources/browser-use__browser-use/tests/ci/security/test_download_filename_sanitization.py)<br>[tests/ci/security/test_ip_blocking.py](../../../../sources/browser-use__browser-use/tests/ci/security/test_ip_blocking.py)<br>[tests/ci/security/test_mcp_allowed_domains.py](../../../../sources/browser-use__browser-use/tests/ci/security/test_mcp_allowed_domains.py)<br>[tests/ci/security/test_security_flags.py](../../../../sources/browser-use__browser-use/tests/ci/security/test_security_flags.py)<br>[tests/ci/security/test_sensitive_data.py](../../../../sources/browser-use__browser-use/tests/ci/security/test_sensitive_data.py) |
| ci | 104 | [tests/ci/conftest.py](../../../../sources/browser-use__browser-use/tests/ci/conftest.py)<br>[tests/ci/evaluate_tasks.py](../../../../sources/browser-use__browser-use/tests/ci/evaluate_tasks.py)<br>[tests/ci/test_action_blank_page.py](../../../../sources/browser-use__browser-use/tests/ci/test_action_blank_page.py)<br>[tests/ci/test_action_loop_detection.py](../../../../sources/browser-use__browser-use/tests/ci/test_action_loop_detection.py)<br>[tests/ci/test_action_record.py](../../../../sources/browser-use__browser-use/tests/ci/test_action_record.py)<br>[tests/ci/test_action_save_as_pdf.py](../../../../sources/browser-use__browser-use/tests/ci/test_action_save_as_pdf.py)<br>[tests/ci/test_action_timeout.py](../../../../sources/browser-use__browser-use/tests/ci/test_action_timeout.py)<br>[tests/ci/test_agent_planning.py](../../../../sources/browser-use__browser-use/tests/ci/test_agent_planning.py) |
| container | 5 | [Dockerfile](../../../../sources/browser-use__browser-use/Dockerfile)<br>[Dockerfile.fast](../../../../sources/browser-use__browser-use/Dockerfile.fast)<br>[docker/base-images/system/Dockerfile](../../../../sources/browser-use__browser-use/docker/base-images/system/Dockerfile)<br>[docker/base-images/python-deps/Dockerfile](../../../../sources/browser-use__browser-use/docker/base-images/python-deps/Dockerfile)<br>[docker/base-images/chromium/Dockerfile](../../../../sources/browser-use__browser-use/docker/base-images/chromium/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/browser-use__browser-use/AGENTS.md)<br>[CLAUDE.md](../../../../sources/browser-use__browser-use/CLAUDE.md) |
| docs | 17 | [README.md](../../../../sources/browser-use__browser-use/README.md)<br>[tests/agent_tasks/README.md](../../../../sources/browser-use__browser-use/tests/agent_tasks/README.md)<br>[examples/ui/README.md](../../../../sources/browser-use__browser-use/examples/ui/README.md)<br>[examples/models/langchain/README.md](../../../../sources/browser-use__browser-use/examples/models/langchain/README.md)<br>[examples/integrations/README.md](../../../../sources/browser-use__browser-use/examples/integrations/README.md)<br>[examples/integrations/slack/README.md](../../../../sources/browser-use__browser-use/examples/integrations/slack/README.md)<br>[examples/cloud/README.md](../../../../sources/browser-use__browser-use/examples/cloud/README.md)<br>[examples/apps/news-use/README.md](../../../../sources/browser-use__browser-use/examples/apps/news-use/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/browser-use__browser-use/pyproject.toml)<br>[browser_use/skill_cli/requirements-cli.txt](../../../../sources/browser-use__browser-use/browser_use/skill_cli/requirements-cli.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 114 | [tests/scripts/debug_iframe_scrolling.py](../../../../sources/browser-use__browser-use/tests/scripts/debug_iframe_scrolling.py)<br>[tests/scripts/test_frame_hierarchy.py](../../../../sources/browser-use__browser-use/tests/scripts/test_frame_hierarchy.py)<br>[tests/mind2web_data/processed.json](../../../../sources/browser-use__browser-use/tests/mind2web_data/processed.json)<br>[tests/ci/conftest.py](../../../../sources/browser-use__browser-use/tests/ci/conftest.py)<br>[tests/ci/evaluate_tasks.py](../../../../sources/browser-use__browser-use/tests/ci/evaluate_tasks.py)<br>[tests/ci/test_action_blank_page.py](../../../../sources/browser-use__browser-use/tests/ci/test_action_blank_page.py) |
| CI workflows | 104 | [tests/ci/conftest.py](../../../../sources/browser-use__browser-use/tests/ci/conftest.py)<br>[tests/ci/evaluate_tasks.py](../../../../sources/browser-use__browser-use/tests/ci/evaluate_tasks.py)<br>[tests/ci/test_action_blank_page.py](../../../../sources/browser-use__browser-use/tests/ci/test_action_blank_page.py)<br>[tests/ci/test_action_loop_detection.py](../../../../sources/browser-use__browser-use/tests/ci/test_action_loop_detection.py)<br>[tests/ci/test_action_record.py](../../../../sources/browser-use__browser-use/tests/ci/test_action_record.py)<br>[tests/ci/test_action_save_as_pdf.py](../../../../sources/browser-use__browser-use/tests/ci/test_action_save_as_pdf.py) |
| Containers / deploy | 5 | [Dockerfile](../../../../sources/browser-use__browser-use/Dockerfile)<br>[Dockerfile.fast](../../../../sources/browser-use__browser-use/Dockerfile.fast)<br>[docker/base-images/system/Dockerfile](../../../../sources/browser-use__browser-use/docker/base-images/system/Dockerfile)<br>[docker/base-images/python-deps/Dockerfile](../../../../sources/browser-use__browser-use/docker/base-images/python-deps/Dockerfile)<br>[docker/base-images/chromium/Dockerfile](../../../../sources/browser-use__browser-use/docker/base-images/chromium/Dockerfile) |
| Security / policy | 17 | [tests/ci/test_sandbox_structured_output.py](../../../../sources/browser-use__browser-use/tests/ci/test_sandbox_structured_output.py)<br>[tests/ci/security/test_daemon_socket_perms.py](../../../../sources/browser-use__browser-use/tests/ci/security/test_daemon_socket_perms.py)<br>[tests/ci/security/test_domain_filtering.py](../../../../sources/browser-use__browser-use/tests/ci/security/test_domain_filtering.py)<br>[tests/ci/security/test_download_filename_sanitization.py](../../../../sources/browser-use__browser-use/tests/ci/security/test_download_filename_sanitization.py)<br>[tests/ci/security/test_ip_blocking.py](../../../../sources/browser-use__browser-use/tests/ci/security/test_ip_blocking.py)<br>[tests/ci/security/test_mcp_allowed_domains.py](../../../../sources/browser-use__browser-use/tests/ci/security/test_mcp_allowed_domains.py) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/browser-use__browser-use/AGENTS.md)<br>[CLAUDE.md](../../../../sources/browser-use__browser-use/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/ci/security/test_mcp_allowed_domains.py`, `browser_use/mcp/__init__.py`, `browser_use/mcp/__main__.py`.
2. Trace execution through entrypoints: `browser_use/skill_cli/__main__.py`, `browser_use/skill_cli/main.py`, `browser_use/mcp/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/agent_tasks/amazon_laptop.yaml`, `tests/agent_tasks/browser_use_pip.yaml`.
4. Verify behavior through test/eval files: `tests/scripts/debug_iframe_scrolling.py`, `tests/scripts/test_frame_hierarchy.py`, `tests/mind2web_data/processed.json`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 496 files, 100 directories.. 핵심 구조 신호는 pyproject.toml, Dockerfile, README.md, AGENTS.md, CLAUDE.md, openai이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
