# confident-ai/deepeval Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 2022 files, 438 directories.

## 요약

- 조사 단위: `sources/confident-ai__deepeval` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,021 files, 437 directories, depth score 131, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 eval=test_agentcore_agent.py, test_pydantic_agent.py, typescript/test/test-integrations/utils.ts이고, 의존성 단서는 openai, anthropic, langchain, langgraph, llama-index, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 quality and evaluation comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | confident-ai/deepeval |
| Topic | Evals, Observability, and Quality / 평가/관측/품질 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/confident-ai__deepeval](../../../../sources/confident-ai__deepeval) |
| Existing report | [reports/clone-structures/confident-ai__deepeval.md](../../../clone-structures/confident-ai__deepeval.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2021 / 437 |
| Max observed depth | 6 |
| Top directories | .claude-plugin, .cursor-plugin, .github, .scripts, assets, deepeval, demo_trace_scope, docs, examples, scripts, skills, tests, typescript |
| Top extensions | .py: 923, .json: 328, .mdx: 206, .ts: 175, .tsx: 104, .svg: 63, .txt: 60, .scss: 46, .md: 33, .png: 29, .mjs: 10, .yml: 10 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 61 |
| docs | documentation surface | 49 |
| examples/mcp_evaluation | examples workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| deepeval | top-level component | 1 |
| demo_trace_scope | top-level component | 1 |
| examples | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| typescript | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | deepeval | deepeval |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | none |
| agentFrameworks | langchain, langgraph, llama-index |
| vectorStores | chroma |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | click, typer |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| eval | [test_agentcore_agent.py](../../../../sources/confident-ai__deepeval/test_agentcore_agent.py) | eval signal |
| eval | [test_pydantic_agent.py](../../../../sources/confident-ai__deepeval/test_pydantic_agent.py) | eval signal |
| eval | [typescript/test/test-integrations/utils.ts](../../../../sources/confident-ai__deepeval/typescript/test/test-integrations/utils.ts) | eval signal |
| eval | [typescript/test/test-integrations/test-openai-agents/openai-agents.test.ts](../../../../sources/confident-ai__deepeval/typescript/test/test-integrations/test-openai-agents/openai-agents.test.ts) | eval signal |
| entrypoints | [typescript/src/index.ts](../../../../sources/confident-ai__deepeval/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [tests/test_integrations/test_langgraph/apps/main.py](../../../../sources/confident-ai__deepeval/tests/test_integrations/test_langgraph/apps/main.py) | entrypoints signal |
| entrypoints | [deepeval/inspect/__main__.py](../../../../sources/confident-ai__deepeval/deepeval/inspect/__main__.py) | entrypoints signal |
| entrypoints | [deepeval/cli/main.py](../../../../sources/confident-ai__deepeval/deepeval/cli/main.py) | entrypoints signal |
| config | [poetry.lock](../../../../sources/confident-ai__deepeval/poetry.lock) | config signal |
| config | [pyproject.toml](../../../../sources/confident-ai__deepeval/pyproject.toml) | config signal |
| config | [typescript/package.json](../../../../sources/confident-ai__deepeval/typescript/package.json) | config signal |
| config | [typescript/tsconfig.json](../../../../sources/confident-ai__deepeval/typescript/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [typescript/src/index.ts](../../../../sources/confident-ai__deepeval/typescript/src/index.ts)<br>[tests/test_integrations/test_langgraph/apps/main.py](../../../../sources/confident-ai__deepeval/tests/test_integrations/test_langgraph/apps/main.py)<br>[deepeval/inspect/__main__.py](../../../../sources/confident-ai__deepeval/deepeval/inspect/__main__.py)<br>[deepeval/cli/main.py](../../../../sources/confident-ai__deepeval/deepeval/cli/main.py)<br>[deepeval/cli/server.py](../../../../sources/confident-ai__deepeval/deepeval/cli/server.py) |
| agentRuntime | 73 | [typescript/examples/integrations/langgraph/agent.ts](../../../../sources/confident-ai__deepeval/typescript/examples/integrations/langgraph/agent.ts)<br>[tests/test_integrations/test_openai_agents/apps/tool_agent.py](../../../../sources/confident-ai__deepeval/tests/test_integrations/test_openai_agents/apps/tool_agent.py)<br>[tests/test_integrations/test_llamaindex/apps/agent_app.py](../../../../sources/confident-ai__deepeval/tests/test_integrations/test_llamaindex/apps/agent_app.py)<br>[tests/test_integrations/test_crewai/apps/tool_usage_app.py](../../../../sources/confident-ai__deepeval/tests/test_integrations/test_crewai/apps/tool_usage_app.py)<br>[tests/test_core/test_tracing/schemas/span_types/agent_custom_name_schema.json](../../../../sources/confident-ai__deepeval/tests/test_core/test_tracing/schemas/span_types/agent_custom_name_schema.json)<br>[tests/test_core/test_tracing/schemas/span_types/agent_full_attributes_schema.json](../../../../sources/confident-ai__deepeval/tests/test_core/test_tracing/schemas/span_types/agent_full_attributes_schema.json)<br>[tests/test_core/test_tracing/schemas/span_types/agent_minimal_schema.json](../../../../sources/confident-ai__deepeval/tests/test_core/test_tracing/schemas/span_types/agent_minimal_schema.json)<br>[tests/test_core/test_tracing/schemas/span_types/agent_multiple_handoffs_schema.json](../../../../sources/confident-ai__deepeval/tests/test_core/test_tracing/schemas/span_types/agent_multiple_handoffs_schema.json) |
| mcp | 21 | [tests/test_metrics/test_mcp_task_completetion_metric.py](../../../../sources/confident-ai__deepeval/tests/test_metrics/test_mcp_task_completetion_metric.py)<br>[tests/test_metrics/test_mcp_use_metric.py](../../../../sources/confident-ai__deepeval/tests/test_metrics/test_mcp_use_metric.py)<br>[tests/test_metrics/test_multi_turn_mcp_use_metric.py](../../../../sources/confident-ai__deepeval/tests/test_metrics/test_multi_turn_mcp_use_metric.py)<br>[examples/mcp_evaluation/mcp_eval_multi_turn.py](../../../../sources/confident-ai__deepeval/examples/mcp_evaluation/mcp_eval_multi_turn.py)<br>[examples/mcp_evaluation/mcp_eval_single_turn.py](../../../../sources/confident-ai__deepeval/examples/mcp_evaluation/mcp_eval_single_turn.py)<br>`docs/content/docs/(use-cases)/getting-started-mcp.mdx`<br>`docs/content/docs/(mcp)/metrics-mcp-task-completion.mdx`<br>`docs/content/docs/(mcp)/metrics-mcp-use.mdx` |
| retrieval | 137 | [typescript/src/index.ts](../../../../sources/confident-ai__deepeval/typescript/src/index.ts)<br>[typescript/src/tracing/index.ts](../../../../sources/confident-ai__deepeval/typescript/src/tracing/index.ts)<br>[typescript/src/tracing/offline-evals/index.ts](../../../../sources/confident-ai__deepeval/typescript/src/tracing/offline-evals/index.ts)<br>[typescript/src/test-case/index.ts](../../../../sources/confident-ai__deepeval/typescript/src/test-case/index.ts)<br>[typescript/src/simulate/index.ts](../../../../sources/confident-ai__deepeval/typescript/src/simulate/index.ts)<br>[typescript/src/prompt/index.ts](../../../../sources/confident-ai__deepeval/typescript/src/prompt/index.ts)<br>[typescript/src/openai/index.ts](../../../../sources/confident-ai__deepeval/typescript/src/openai/index.ts)<br>[typescript/src/models/index.ts](../../../../sources/confident-ai__deepeval/typescript/src/models/index.ts) |
| spec | 2 | [docs/content/docs/introduction-design-philosophy.mdx](../../../../sources/confident-ai__deepeval/docs/content/docs/introduction-design-philosophy.mdx)<br>[assets/confident-mcp-architecture.png](../../../../sources/confident-ai__deepeval/assets/confident-mcp-architecture.png) |
| eval | 923 | [test_agentcore_agent.py](../../../../sources/confident-ai__deepeval/test_agentcore_agent.py)<br>[test_pydantic_agent.py](../../../../sources/confident-ai__deepeval/test_pydantic_agent.py)<br>[typescript/test/test-integrations/utils.ts](../../../../sources/confident-ai__deepeval/typescript/test/test-integrations/utils.ts)<br>[typescript/test/test-integrations/test-openai-agents/openai-agents.test.ts](../../../../sources/confident-ai__deepeval/typescript/test/test-integrations/test-openai-agents/openai-agents.test.ts)<br>[typescript/test/test-integrations/test-openai-agents/fixtures/openai_agents_evals_app_schema.json](../../../../sources/confident-ai__deepeval/typescript/test/test-integrations/test-openai-agents/fixtures/openai_agents_evals_app_schema.json)<br>[typescript/test/test-integrations/test-openai-agents/fixtures/openai_agents_handoff_schema.json](../../../../sources/confident-ai__deepeval/typescript/test/test-integrations/test-openai-agents/fixtures/openai_agents_handoff_schema.json)<br>[typescript/test/test-integrations/test-openai-agents/fixtures/openai_agents_simple_schema.json](../../../../sources/confident-ai__deepeval/typescript/test/test-integrations/test-openai-agents/fixtures/openai_agents_simple_schema.json)<br>[typescript/test/test-integrations/test-openai-agents/fixtures/openai_agents_streaming_schema.json](../../../../sources/confident-ai__deepeval/typescript/test/test-integrations/test-openai-agents/fixtures/openai_agents_streaming_schema.json) |
| security | 3 | [tests/test_core/test_retry_policy.py](../../../../sources/confident-ai__deepeval/tests/test_core/test_retry_policy.py)<br>[tests/test_core/test_models/test_openai_retry_policy.py](../../../../sources/confident-ai__deepeval/tests/test_core/test_models/test_openai_retry_policy.py)<br>[deepeval/models/retry_policy.py](../../../../sources/confident-ai__deepeval/deepeval/models/retry_policy.py) |
| ci | 14 | [docs/public/icons/integrations/azure-pipelines.svg](../../../../sources/confident-ai__deepeval/docs/public/icons/integrations/azure-pipelines.svg)<br>[docs/public/icons/integrations/buildkite.svg](../../../../sources/confident-ai__deepeval/docs/public/icons/integrations/buildkite.svg)<br>[docs/public/icons/integrations/circleci.svg](../../../../sources/confident-ai__deepeval/docs/public/icons/integrations/circleci.svg)<br>[docs/public/icons/integrations/jenkins.svg](../../../../sources/confident-ai__deepeval/docs/public/icons/integrations/jenkins.svg)<br>[.github/workflows/black.yml](../../../../sources/confident-ai__deepeval/.github/workflows/black.yml)<br>[.github/workflows/changelog.yml](../../../../sources/confident-ai__deepeval/.github/workflows/changelog.yml)<br>[.github/workflows/full_test_core_for_pr.yml](../../../../sources/confident-ai__deepeval/.github/workflows/full_test_core_for_pr.yml)<br>[.github/workflows/release.yml](../../../../sources/confident-ai__deepeval/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [docs/content/integrations/models/gemini.mdx](../../../../sources/confident-ai__deepeval/docs/content/integrations/models/gemini.mdx) |
| docs | 541 | [README.md](../../../../sources/confident-ai__deepeval/README.md)<br>[typescript/README.md](../../../../sources/confident-ai__deepeval/typescript/README.md)<br>[tests/test_integrations/test_strands/schemas/README.md](../../../../sources/confident-ai__deepeval/tests/test_integrations/test_strands/schemas/README.md)<br>[tests/test_integrations/test_googleadk/schemas/README.md](../../../../sources/confident-ai__deepeval/tests/test_integrations/test_googleadk/schemas/README.md)<br>[skills/README.md](../../../../sources/confident-ai__deepeval/skills/README.md)<br>[docs/.gitignore](../../../../sources/confident-ai__deepeval/docs/.gitignore)<br>[docs/next.config.mjs](../../../../sources/confident-ai__deepeval/docs/next.config.mjs)<br>[docs/package.json](../../../../sources/confident-ai__deepeval/docs/package.json) |
| config | 6 | [poetry.lock](../../../../sources/confident-ai__deepeval/poetry.lock)<br>[pyproject.toml](../../../../sources/confident-ai__deepeval/pyproject.toml)<br>[typescript/package.json](../../../../sources/confident-ai__deepeval/typescript/package.json)<br>[typescript/tsconfig.json](../../../../sources/confident-ai__deepeval/typescript/tsconfig.json)<br>[docs/package.json](../../../../sources/confident-ai__deepeval/docs/package.json)<br>[docs/tsconfig.json](../../../../sources/confident-ai__deepeval/docs/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 923 | [test_agentcore_agent.py](../../../../sources/confident-ai__deepeval/test_agentcore_agent.py)<br>[test_pydantic_agent.py](../../../../sources/confident-ai__deepeval/test_pydantic_agent.py)<br>[typescript/test/test-integrations/utils.ts](../../../../sources/confident-ai__deepeval/typescript/test/test-integrations/utils.ts)<br>[typescript/test/test-integrations/test-openai-agents/openai-agents.test.ts](../../../../sources/confident-ai__deepeval/typescript/test/test-integrations/test-openai-agents/openai-agents.test.ts)<br>[typescript/test/test-integrations/test-openai-agents/fixtures/openai_agents_evals_app_schema.json](../../../../sources/confident-ai__deepeval/typescript/test/test-integrations/test-openai-agents/fixtures/openai_agents_evals_app_schema.json)<br>[typescript/test/test-integrations/test-openai-agents/fixtures/openai_agents_handoff_schema.json](../../../../sources/confident-ai__deepeval/typescript/test/test-integrations/test-openai-agents/fixtures/openai_agents_handoff_schema.json) |
| CI workflows | 14 | [docs/public/icons/integrations/azure-pipelines.svg](../../../../sources/confident-ai__deepeval/docs/public/icons/integrations/azure-pipelines.svg)<br>[docs/public/icons/integrations/buildkite.svg](../../../../sources/confident-ai__deepeval/docs/public/icons/integrations/buildkite.svg)<br>[docs/public/icons/integrations/circleci.svg](../../../../sources/confident-ai__deepeval/docs/public/icons/integrations/circleci.svg)<br>[docs/public/icons/integrations/jenkins.svg](../../../../sources/confident-ai__deepeval/docs/public/icons/integrations/jenkins.svg)<br>[.github/workflows/black.yml](../../../../sources/confident-ai__deepeval/.github/workflows/black.yml)<br>[.github/workflows/changelog.yml](../../../../sources/confident-ai__deepeval/.github/workflows/changelog.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 3 | [tests/test_core/test_retry_policy.py](../../../../sources/confident-ai__deepeval/tests/test_core/test_retry_policy.py)<br>[tests/test_core/test_models/test_openai_retry_policy.py](../../../../sources/confident-ai__deepeval/tests/test_core/test_models/test_openai_retry_policy.py)<br>[deepeval/models/retry_policy.py](../../../../sources/confident-ai__deepeval/deepeval/models/retry_policy.py) |
| Agent instructions | 1 | [docs/content/integrations/models/gemini.mdx](../../../../sources/confident-ai__deepeval/docs/content/integrations/models/gemini.mdx) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test_agentcore_agent.py`, `test_pydantic_agent.py`, `typescript/test/test-integrations/utils.ts`.
2. Trace execution through entrypoints: `typescript/src/index.ts`, `tests/test_integrations/test_langgraph/apps/main.py`, `deepeval/inspect/__main__.py`.
3. Map agent/tool runtime through: `typescript/examples/integrations/langgraph/agent.ts`, `tests/test_integrations/test_openai_agents/apps/tool_agent.py`, `tests/test_integrations/test_llamaindex/apps/agent_app.py`.
4. Inspect retrieval/memory/indexing through: `typescript/src/index.ts`, `typescript/src/tracing/index.ts`, `typescript/src/tracing/offline-evals/index.ts`.
5. Verify behavior through test/eval files: `test_agentcore_agent.py`, `test_pydantic_agent.py`, `typescript/test/test-integrations/utils.ts`.

## Existing Repository Insight

평가/관측/품질 관점에서 Local clone structure analysis 2022 files, 438 directories.. 핵심 구조 신호는 pyproject.toml, README.md, openai, anthropic, langchain, llama-index이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 평가/관측/품질 레포입니다. 활용 관점은 quality and evaluation comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
