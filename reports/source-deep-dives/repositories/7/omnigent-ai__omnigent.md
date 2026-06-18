# omnigent-ai/omnigent Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Omnigent is an open-source AI agent framework and meta-harness: orchestrate Claude Code, Codex, Cursor, Pi, and custom agents — swap harnesses without rewriting, enforce policies and sandboxing, and collaborate in real time from any device.

## 요약

- 조사 단위: `sources/omnigent-ai__omnigent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,183 files, 299 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/tools/test_mcp_stdio_e2e.py, tests/tools/test_mcp.py, tests/tools/fixtures/echo_stdio_mcp_server.py이고, 의존성 단서는 openai, claude, codex, mcp, fastapi, express, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | omnigent-ai/omnigent |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 3500 |
| Forks | 388 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/omnigent-ai__omnigent](../../../../sources/omnigent-ai__omnigent) |
| Existing report | [reports/global-trending/repositories/omnigent-ai__omnigent.md](../../../global-trending/repositories/omnigent-ai__omnigent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2183 / 299 |
| Max observed depth | 8 |
| Top directories | .claude, .github, ap-web, deploy, designs, dev, docs, examples, omnigent, scripts, sdks, tests |
| Top extensions | .py: 1333, .tsx: 274, .ts: 182, .yaml: 106, .json: 97, .md: 70, .yml: 37, .sh: 16, (none): 14, .js: 9, .toml: 8, .svg: 7 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 154 |
| docs | documentation surface | 10 |
| .github | ci surface | 1 |
| ap-web | source boundary | 1 |
| deploy | deployment surface | 1 |
| designs | top-level component | 1 |
| dev | top-level component | 1 |
| examples | top-level component | 1 |
| omnigent | top-level component | 1 |
| scripts | top-level component | 1 |
| sdks | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | omnigent | omnigent |
| utility | pyproject.toml | omni | omni |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, claude |
| agentProtocols | mcp, codex |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | fastapi, express, react |
| developerSurface | click |
| observability | opentelemetry |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/tools/test_mcp_stdio_e2e.py](../../../../sources/omnigent-ai__omnigent/tests/tools/test_mcp_stdio_e2e.py) | mcp signal |
| mcp | [tests/tools/test_mcp.py](../../../../sources/omnigent-ai__omnigent/tests/tools/test_mcp.py) | mcp signal |
| mcp | [tests/tools/fixtures/echo_stdio_mcp_server.py](../../../../sources/omnigent-ai__omnigent/tests/tools/fixtures/echo_stdio_mcp_server.py) | mcp signal |
| mcp | [tests/tools/fixtures/env_probe_stdio_mcp_server.py](../../../../sources/omnigent-ai__omnigent/tests/tools/fixtures/env_probe_stdio_mcp_server.py) | mcp signal |
| agentRuntime | [tests/tools/__init__.py](../../../../sources/omnigent-ai__omnigent/tests/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tests/tools/conftest.py](../../../../sources/omnigent-ai__omnigent/tests/tools/conftest.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_base.py](../../../../sources/omnigent-ai__omnigent/tests/tools/test_base.py) | agentRuntime signal |
| agentRuntime | [tests/tools/test_decorator.py](../../../../sources/omnigent-ai__omnigent/tests/tools/test_decorator.py) | agentRuntime signal |
| entrypoints | [omnigent/__main__.py](../../../../sources/omnigent-ai__omnigent/omnigent/__main__.py) | entrypoints signal |
| entrypoints | [deploy/daytona/src/index.js](../../../../sources/omnigent-ai__omnigent/deploy/daytona/src/index.js) | entrypoints signal |
| entrypoints | [ap-web/src/App.tsx](../../../../sources/omnigent-ai__omnigent/ap-web/src/App.tsx) | entrypoints signal |
| entrypoints | [ap-web/src/index.css](../../../../sources/omnigent-ai__omnigent/ap-web/src/index.css) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [omnigent/__main__.py](../../../../sources/omnigent-ai__omnigent/omnigent/__main__.py)<br>[deploy/daytona/src/index.js](../../../../sources/omnigent-ai__omnigent/deploy/daytona/src/index.js)<br>[ap-web/src/App.tsx](../../../../sources/omnigent-ai__omnigent/ap-web/src/App.tsx)<br>[ap-web/src/index.css](../../../../sources/omnigent-ai__omnigent/ap-web/src/index.css)<br>[ap-web/src/index.css.test.ts](../../../../sources/omnigent-ai__omnigent/ap-web/src/index.css.test.ts)<br>[ap-web/src/main.tsx](../../../../sources/omnigent-ai__omnigent/ap-web/src/main.tsx)<br>[ap-web/electron/src/main.js](../../../../sources/omnigent-ai__omnigent/ap-web/electron/src/main.js) |
| agentRuntime | 373 | [tests/tools/__init__.py](../../../../sources/omnigent-ai__omnigent/tests/tools/__init__.py)<br>[tests/tools/conftest.py](../../../../sources/omnigent-ai__omnigent/tests/tools/conftest.py)<br>[tests/tools/test_base.py](../../../../sources/omnigent-ai__omnigent/tests/tools/test_base.py)<br>[tests/tools/test_decorator.py](../../../../sources/omnigent-ai__omnigent/tests/tools/test_decorator.py)<br>[tests/tools/test_docstring.py](../../../../sources/omnigent-ai__omnigent/tests/tools/test_docstring.py)<br>[tests/tools/test_local_callable.py](../../../../sources/omnigent-ai__omnigent/tests/tools/test_local_callable.py)<br>[tests/tools/test_local.py](../../../../sources/omnigent-ai__omnigent/tests/tools/test_local.py)<br>[tests/tools/test_manager.py](../../../../sources/omnigent-ai__omnigent/tests/tools/test_manager.py) |
| mcp | 18 | [tests/tools/test_mcp_stdio_e2e.py](../../../../sources/omnigent-ai__omnigent/tests/tools/test_mcp_stdio_e2e.py)<br>[tests/tools/test_mcp.py](../../../../sources/omnigent-ai__omnigent/tests/tools/test_mcp.py)<br>[tests/tools/fixtures/echo_stdio_mcp_server.py](../../../../sources/omnigent-ai__omnigent/tests/tools/fixtures/echo_stdio_mcp_server.py)<br>[tests/tools/fixtures/env_probe_stdio_mcp_server.py](../../../../sources/omnigent-ai__omnigent/tests/tools/fixtures/env_probe_stdio_mcp_server.py)<br>[tests/server/test_mcp_pool.py](../../../../sources/omnigent-ai__omnigent/tests/server/test_mcp_pool.py)<br>[tests/server/routes/test_sessions_mcp_proxy_policy_retry.py](../../../../sources/omnigent-ai__omnigent/tests/server/routes/test_sessions_mcp_proxy_policy_retry.py)<br>[tests/server/routes/test_sessions_mcp_proxy.py](../../../../sources/omnigent-ai__omnigent/tests/server/routes/test_sessions_mcp_proxy.py)<br>[tests/server/integration/test_mcp_proxy.py](../../../../sources/omnigent-ai__omnigent/tests/server/integration/test_mcp_proxy.py) |
| retrieval | 10 | [omnigent/onboarding/providers/model_catalog/fireworks_ai-embedding-models.json](../../../../sources/omnigent-ai__omnigent/omnigent/onboarding/providers/model_catalog/fireworks_ai-embedding-models.json)<br>[omnigent/onboarding/agent/skills/omnigent-knowledge/SKILL.md](../../../../sources/omnigent-ai__omnigent/omnigent/onboarding/agent/skills/omnigent-knowledge/SKILL.md)<br>[deploy/daytona/src/index.js](../../../../sources/omnigent-ai__omnigent/deploy/daytona/src/index.js)<br>[ap-web/index.html](../../../../sources/omnigent-ai__omnigent/ap-web/index.html)<br>[ap-web/vite.embed.config.ts](../../../../sources/omnigent-ai__omnigent/ap-web/vite.embed.config.ts)<br>[ap-web/src/embed.tsx](../../../../sources/omnigent-ai__omnigent/ap-web/src/embed.tsx)<br>[ap-web/src/index.css](../../../../sources/omnigent-ai__omnigent/ap-web/src/index.css)<br>[ap-web/src/index.css.test.ts](../../../../sources/omnigent-ai__omnigent/ap-web/src/index.css.test.ts) |
| spec | 25 | [tests/spec/__init__.py](../../../../sources/omnigent-ai__omnigent/tests/spec/__init__.py)<br>[tests/spec/test_load.py](../../../../sources/omnigent-ai__omnigent/tests/spec/test_load.py)<br>[tests/spec/test_omnigent_adapter.py](../../../../sources/omnigent-ai__omnigent/tests/spec/test_omnigent_adapter.py)<br>[tests/spec/test_omnigent_legacy_shim.py](../../../../sources/omnigent-ai__omnigent/tests/spec/test_omnigent_legacy_shim.py)<br>[tests/spec/test_omnigent_roundtrip.py](../../../../sources/omnigent-ai__omnigent/tests/spec/test_omnigent_roundtrip.py)<br>[tests/spec/test_omnigent_translator.py](../../../../sources/omnigent-ai__omnigent/tests/spec/test_omnigent_translator.py)<br>[tests/spec/test_parser.py](../../../../sources/omnigent-ai__omnigent/tests/spec/test_parser.py)<br>[tests/spec/test_policy_parser.py](../../../../sources/omnigent-ai__omnigent/tests/spec/test_policy_parser.py) |
| eval | 1171 | [tests/__init__.py](../../../../sources/omnigent-ai__omnigent/tests/__init__.py)<br>[tests/_model_pools.py](../../../../sources/omnigent-ai__omnigent/tests/_model_pools.py)<br>[tests/_token_usage.py](../../../../sources/omnigent-ai__omnigent/tests/_token_usage.py)<br>[tests/conftest.py](../../../../sources/omnigent-ai__omnigent/tests/conftest.py)<br>[tests/known_failures.yaml](../../../../sources/omnigent-ai__omnigent/tests/known_failures.yaml)<br>[tests/test_claude_native_bridge.py](../../../../sources/omnigent-ai__omnigent/tests/test_claude_native_bridge.py)<br>[tests/test_claude_native_daemon.py](../../../../sources/omnigent-ai__omnigent/tests/test_claude_native_daemon.py)<br>[tests/test_claude_native_forwarder.py](../../../../sources/omnigent-ai__omnigent/tests/test_claude_native_forwarder.py) |
| security | 106 | [SECURITY.md](../../../../sources/omnigent-ai__omnigent/SECURITY.md)<br>[tests/test_native_policy_hook.py](../../../../sources/omnigent-ai__omnigent/tests/test_native_policy_hook.py)<br>[tests/tools/builtins/test_policy.py](../../../../sources/omnigent-ai__omnigent/tests/tools/builtins/test_policy.py)<br>[tests/stores/test_permission_store.py](../../../../sources/omnigent-ai__omnigent/tests/stores/test_permission_store.py)<br>[tests/stores/test_session_policy_store.py](../../../../sources/omnigent-ai__omnigent/tests/stores/test_session_policy_store.py)<br>[tests/spec/test_policy_parser.py](../../../../sources/omnigent-ai__omnigent/tests/spec/test_policy_parser.py)<br>[tests/spec/test_policy_validator.py](../../../../sources/omnigent-ai__omnigent/tests/spec/test_policy_validator.py)<br>[tests/server/routes/test_accounts_auth_helpers.py](../../../../sources/omnigent-ai__omnigent/tests/server/routes/test_accounts_auth_helpers.py) |
| ci | 37 | [.github/workflows/ap-web-tests.yml](../../../../sources/omnigent-ai__omnigent/.github/workflows/ap-web-tests.yml)<br>[.github/workflows/auto-assign-reviewer-test.yml](../../../../sources/omnigent-ai__omnigent/.github/workflows/auto-assign-reviewer-test.yml)<br>[.github/workflows/auto-assign-reviewer.js](../../../../sources/omnigent-ai__omnigent/.github/workflows/auto-assign-reviewer.js)<br>[.github/workflows/auto-assign-reviewer.test.js](../../../../sources/omnigent-ai__omnigent/.github/workflows/auto-assign-reviewer.test.js)<br>[.github/workflows/auto-assign-reviewer.yml](../../../../sources/omnigent-ai__omnigent/.github/workflows/auto-assign-reviewer.yml)<br>[.github/workflows/autoformat-pr.yml](../../../../sources/omnigent-ai__omnigent/.github/workflows/autoformat-pr.yml)<br>[.github/workflows/ci.yml](../../../../sources/omnigent-ai__omnigent/.github/workflows/ci.yml)<br>[.github/workflows/code-coverage.yml](../../../../sources/omnigent-ai__omnigent/.github/workflows/code-coverage.yml) |
| container | 58 | [tests/e2e/integrations/deploy/e2b/e2b_smoke_test.py](../../../../sources/omnigent-ai__omnigent/tests/e2e/integrations/deploy/e2b/e2b_smoke_test.py)<br>[tests/e2e/integrations/deploy/cwsandbox/e2e_managed.py](../../../../sources/omnigent-ai__omnigent/tests/e2e/integrations/deploy/cwsandbox/e2e_managed.py)<br>[tests/e2e/integrations/deploy/cwsandbox/smoke_test.py](../../../../sources/omnigent-ai__omnigent/tests/e2e/integrations/deploy/cwsandbox/smoke_test.py)<br>[tests/deploy/__init__.py](../../../../sources/omnigent-ai__omnigent/tests/deploy/__init__.py)<br>[tests/deploy/test_docker_entrypoint_import.py](../../../../sources/omnigent-ai__omnigent/tests/deploy/test_docker_entrypoint_import.py)<br>[deploy/README.md](../../../../sources/omnigent-ai__omnigent/deploy/README.md)<br>[deploy/render/README.md](../../../../sources/omnigent-ai__omnigent/deploy/render/README.md)<br>[deploy/railway/README.md](../../../../sources/omnigent-ai__omnigent/deploy/railway/README.md) |
| instruction | 4 | [tests/integration/AGENTS.md](../../../../sources/omnigent-ai__omnigent/tests/integration/AGENTS.md)<br>[tests/e2e/AGENTS.md](../../../../sources/omnigent-ai__omnigent/tests/e2e/AGENTS.md)<br>[omnigent/onboarding/agent/AGENTS.md](../../../../sources/omnigent-ai__omnigent/omnigent/onboarding/agent/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/omnigent-ai__omnigent/.github/copilot-instructions.md) |
| docs | 30 | [README.md](../../../../sources/omnigent-ai__omnigent/README.md)<br>[sdks/README.md](../../../../sources/omnigent-ai__omnigent/sdks/README.md)<br>[sdks/ui/README.md](../../../../sources/omnigent-ai__omnigent/sdks/ui/README.md)<br>[sdks/python-client/README.md](../../../../sources/omnigent-ai__omnigent/sdks/python-client/README.md)<br>[omnigent/spec/README.md](../../../../sources/omnigent-ai__omnigent/omnigent/spec/README.md)<br>[omnigent/server/README.md](../../../../sources/omnigent-ai__omnigent/omnigent/server/README.md)<br>[omnigent/runtime/README.md](../../../../sources/omnigent-ai__omnigent/omnigent/runtime/README.md)<br>[docs/AGENT_YAML_SPEC.md](../../../../sources/omnigent-ai__omnigent/docs/AGENT_YAML_SPEC.md) |
| config | 8 | [pyproject.toml](../../../../sources/omnigent-ai__omnigent/pyproject.toml)<br>[uv.lock](../../../../sources/omnigent-ai__omnigent/uv.lock)<br>[sdks/ui/pyproject.toml](../../../../sources/omnigent-ai__omnigent/sdks/ui/pyproject.toml)<br>[sdks/python-client/pyproject.toml](../../../../sources/omnigent-ai__omnigent/sdks/python-client/pyproject.toml)<br>[ap-web/package.json](../../../../sources/omnigent-ai__omnigent/ap-web/package.json)<br>[ap-web/tsconfig.json](../../../../sources/omnigent-ai__omnigent/ap-web/tsconfig.json)<br>[ap-web/electron/package.json](../../../../sources/omnigent-ai__omnigent/ap-web/electron/package.json)<br>[.github/ci-deps/package.json](../../../../sources/omnigent-ai__omnigent/.github/ci-deps/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1171 | [tests/__init__.py](../../../../sources/omnigent-ai__omnigent/tests/__init__.py)<br>[tests/_model_pools.py](../../../../sources/omnigent-ai__omnigent/tests/_model_pools.py)<br>[tests/_token_usage.py](../../../../sources/omnigent-ai__omnigent/tests/_token_usage.py)<br>[tests/conftest.py](../../../../sources/omnigent-ai__omnigent/tests/conftest.py)<br>[tests/known_failures.yaml](../../../../sources/omnigent-ai__omnigent/tests/known_failures.yaml)<br>[tests/test_claude_native_bridge.py](../../../../sources/omnigent-ai__omnigent/tests/test_claude_native_bridge.py) |
| CI workflows | 37 | [.github/workflows/ap-web-tests.yml](../../../../sources/omnigent-ai__omnigent/.github/workflows/ap-web-tests.yml)<br>[.github/workflows/auto-assign-reviewer-test.yml](../../../../sources/omnigent-ai__omnigent/.github/workflows/auto-assign-reviewer-test.yml)<br>[.github/workflows/auto-assign-reviewer.js](../../../../sources/omnigent-ai__omnigent/.github/workflows/auto-assign-reviewer.js)<br>[.github/workflows/auto-assign-reviewer.test.js](../../../../sources/omnigent-ai__omnigent/.github/workflows/auto-assign-reviewer.test.js)<br>[.github/workflows/auto-assign-reviewer.yml](../../../../sources/omnigent-ai__omnigent/.github/workflows/auto-assign-reviewer.yml)<br>[.github/workflows/autoformat-pr.yml](../../../../sources/omnigent-ai__omnigent/.github/workflows/autoformat-pr.yml) |
| Containers / deploy | 58 | [tests/e2e/integrations/deploy/e2b/e2b_smoke_test.py](../../../../sources/omnigent-ai__omnigent/tests/e2e/integrations/deploy/e2b/e2b_smoke_test.py)<br>[tests/e2e/integrations/deploy/cwsandbox/e2e_managed.py](../../../../sources/omnigent-ai__omnigent/tests/e2e/integrations/deploy/cwsandbox/e2e_managed.py)<br>[tests/e2e/integrations/deploy/cwsandbox/smoke_test.py](../../../../sources/omnigent-ai__omnigent/tests/e2e/integrations/deploy/cwsandbox/smoke_test.py)<br>[tests/deploy/__init__.py](../../../../sources/omnigent-ai__omnigent/tests/deploy/__init__.py)<br>[tests/deploy/test_docker_entrypoint_import.py](../../../../sources/omnigent-ai__omnigent/tests/deploy/test_docker_entrypoint_import.py)<br>[deploy/README.md](../../../../sources/omnigent-ai__omnigent/deploy/README.md) |
| Security / policy | 106 | [SECURITY.md](../../../../sources/omnigent-ai__omnigent/SECURITY.md)<br>[tests/test_native_policy_hook.py](../../../../sources/omnigent-ai__omnigent/tests/test_native_policy_hook.py)<br>[tests/tools/builtins/test_policy.py](../../../../sources/omnigent-ai__omnigent/tests/tools/builtins/test_policy.py)<br>[tests/stores/test_permission_store.py](../../../../sources/omnigent-ai__omnigent/tests/stores/test_permission_store.py)<br>[tests/stores/test_session_policy_store.py](../../../../sources/omnigent-ai__omnigent/tests/stores/test_session_policy_store.py)<br>[tests/spec/test_policy_parser.py](../../../../sources/omnigent-ai__omnigent/tests/spec/test_policy_parser.py) |
| Agent instructions | 4 | [tests/integration/AGENTS.md](../../../../sources/omnigent-ai__omnigent/tests/integration/AGENTS.md)<br>[tests/e2e/AGENTS.md](../../../../sources/omnigent-ai__omnigent/tests/e2e/AGENTS.md)<br>[omnigent/onboarding/agent/AGENTS.md](../../../../sources/omnigent-ai__omnigent/omnigent/onboarding/agent/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/omnigent-ai__omnigent/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/tools/test_mcp_stdio_e2e.py`, `tests/tools/test_mcp.py`, `tests/tools/fixtures/echo_stdio_mcp_server.py`.
2. Trace execution through entrypoints: `omnigent/__main__.py`, `deploy/daytona/src/index.js`, `ap-web/src/App.tsx`.
3. Map agent/tool runtime through: `tests/tools/__init__.py`, `tests/tools/conftest.py`, `tests/tools/test_base.py`.
4. Inspect retrieval/memory/indexing through: `omnigent/onboarding/providers/model_catalog/fireworks_ai-embedding-models.json`, `omnigent/onboarding/agent/skills/omnigent-knowledge/SKILL.md`, `deploy/daytona/src/index.js`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/_model_pools.py`, `tests/_token_usage.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Omnigent is an open source AI agent framework and meta harness orchestrate Claude Code, Codex, Cursor, Pi, and custom ag. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, mcp이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
