# pydantic/pydantic-ai Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 2095 files, 167 directories.

## 요약

- 조사 단위: `sources/pydantic__pydantic-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,095 files, 167 directories, depth score 134, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/mcp_server.py, tests/test_mcp_toolset.py, tests/test_mcp.py이고, 의존성 단서는 openai, anthropic, mcp, langchain, next, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | pydantic/pydantic-ai |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 17819 |
| Forks | 2224 |
| License | none |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/pydantic__pydantic-ai](../../../../sources/pydantic__pydantic-ai) |
| Existing report | [reports/global-trending/repositories/pydantic__pydantic-ai.md](../../../global-trending/repositories/pydantic__pydantic-ai.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2095 / 167 |
| Max observed depth | 7 |
| Top directories | .agents, .claude, .gemini, .github, agent_docs, clai, docs, docs-site, examples, pydantic_ai_slim, pydantic_evals, pydantic_graph, scripts, tests |
| Top extensions | .yaml: 1146, .py: 611, .md: 240, .yml: 27, .png: 15, (none): 10, .json: 8, .toml: 7, .sh: 6, .svg: 4, .typed: 4, .html: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 115 |
| docs | documentation surface | 45 |
| examples/pydantic_ai_examples | examples workspace | 5 |
| .github | ci surface | 1 |
| agent_docs | documentation surface | 1 |
| clai | top-level component | 1 |
| docs-site | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/pyproject.toml | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| pydantic_ai_slim | top-level component | 1 |
| pydantic_evals | top-level component | 1 |
| pydantic_graph | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .uv | make .uv |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .pre-commit | make .pre-commit |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install-all-python | make install-all-python |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | sync | make sync |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | format | make format |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | lint | make lint |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | typecheck-pyright | make typecheck-pyright |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | typecheck-mypy | make typecheck-mypy |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | typecheck | make typecheck |
| utility | pyproject.toml | pai | pai |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | transformers, vllm, llama |
| webRuntime | next |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [tests/mcp_server.py](../../../../sources/pydantic__pydantic-ai/tests/mcp_server.py) | mcp signal |
| mcp | [tests/test_mcp_toolset.py](../../../../sources/pydantic__pydantic-ai/tests/test_mcp_toolset.py) | mcp signal |
| mcp | [tests/test_mcp.py](../../../../sources/pydantic__pydantic-ai/tests/test_mcp.py) | mcp signal |
| mcp | [tests/models/test_mcp_sampling.py](../../../../sources/pydantic__pydantic-ai/tests/models/test_mcp_sampling.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/pydantic__pydantic-ai/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/AGENTS.md](../../../../sources/pydantic__pydantic-ai/tests/AGENTS.md) | agentRuntime signal |
| agentRuntime | [pydantic_evals/pydantic_evals/evaluators/context.py](../../../../sources/pydantic__pydantic-ai/pydantic_evals/pydantic_evals/evaluators/context.py) | agentRuntime signal |
| agentRuntime | [pydantic_ai_slim/pydantic_ai/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/AGENTS.md) | agentRuntime signal |
| entrypoints | [pydantic_ai_slim/pydantic_ai/__main__.py](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/__main__.py) | entrypoints signal |
| entrypoints | [examples/pydantic_ai_examples/__main__.py](../../../../sources/pydantic__pydantic-ai/examples/pydantic_ai_examples/__main__.py) | entrypoints signal |
| entrypoints | [examples/pydantic_ai_examples/ag_ui/__main__.py](../../../../sources/pydantic__pydantic-ai/examples/pydantic_ai_examples/ag_ui/__main__.py) | entrypoints signal |
| entrypoints | [docs-site/src/index.ts](../../../../sources/pydantic__pydantic-ai/docs-site/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [pydantic_ai_slim/pydantic_ai/__main__.py](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/__main__.py)<br>[examples/pydantic_ai_examples/__main__.py](../../../../sources/pydantic__pydantic-ai/examples/pydantic_ai_examples/__main__.py)<br>[examples/pydantic_ai_examples/ag_ui/__main__.py](../../../../sources/pydantic__pydantic-ai/examples/pydantic_ai_examples/ag_ui/__main__.py)<br>[docs-site/src/index.ts](../../../../sources/pydantic__pydantic-ai/docs-site/src/index.ts)<br>[docs/mcp/server.md](../../../../sources/pydantic__pydantic-ai/docs/mcp/server.md)<br>[docs/.hooks/main.py](../../../../sources/pydantic__pydantic-ai/docs/.hooks/main.py)<br>[clai/clai/__main__.py](../../../../sources/pydantic__pydantic-ai/clai/clai/__main__.py)<br>[.github/scripts/pydantic_ai_gh_aw_shim/__main__.py](../../../../sources/pydantic__pydantic-ai/.github/scripts/pydantic_ai_gh_aw_shim/__main__.py) |
| agentRuntime | 53 | [AGENTS.md](../../../../sources/pydantic__pydantic-ai/AGENTS.md)<br>[tests/AGENTS.md](../../../../sources/pydantic__pydantic-ai/tests/AGENTS.md)<br>[pydantic_evals/pydantic_evals/evaluators/context.py](../../../../sources/pydantic__pydantic-ai/pydantic_evals/pydantic_evals/evaluators/context.py)<br>[pydantic_ai_slim/pydantic_ai/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/tool_manager.py](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/tool_manager.py)<br>[pydantic_ai_slim/pydantic_ai/tools.py](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/tools.py)<br>[pydantic_ai_slim/pydantic_ai/ui/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/ui/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md) |
| mcp | 50 | [tests/mcp_server.py](../../../../sources/pydantic__pydantic-ai/tests/mcp_server.py)<br>[tests/test_mcp_toolset.py](../../../../sources/pydantic__pydantic-ai/tests/test_mcp_toolset.py)<br>[tests/test_mcp.py](../../../../sources/pydantic__pydantic-ai/tests/test_mcp.py)<br>[tests/models/test_mcp_sampling.py](../../../../sources/pydantic__pydantic-ai/tests/models/test_mcp_sampling.py)<br>[tests/models/cassettes/test_xai/test_xai_builtin_mcp_server_tool_stream.xai.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_xai/test_xai_builtin_mcp_server_tool_stream.xai.yaml)<br>[tests/models/cassettes/test_xai/test_xai_builtin_mcp_server_tool.xai.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_xai/test_xai_builtin_mcp_server_tool.xai.yaml)<br>[tests/models/cassettes/test_openai_responses/test_openai_responses_model_mcp_server_tool_stream.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_openai_responses/test_openai_responses_model_mcp_server_tool_stream.yaml)<br>[tests/models/cassettes/test_openai_responses/test_openai_responses_model_mcp_server_tool_with_connector.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_openai_responses/test_openai_responses_model_mcp_server_tool_with_connector.yaml) |
| retrieval | 97 | [tests/typed_graph.py](../../../../sources/pydantic__pydantic-ai/tests/typed_graph.py)<br>[tests/models/cassettes/test_anthropic/test_anthropic_count_tokens_keeps_memory_tool.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_anthropic/test_anthropic_count_tokens_keeps_memory_tool.yaml)<br>[tests/models/cassettes/test_anthropic/test_anthropic_memory_tool.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_anthropic/test_anthropic_memory_tool.yaml)<br>[tests/graph/__init__.py](../../../../sources/pydantic__pydantic-ai/tests/graph/__init__.py)<br>[tests/graph/test_file_persistence.py](../../../../sources/pydantic__pydantic-ai/tests/graph/test_file_persistence.py)<br>[tests/graph/test_graph.py](../../../../sources/pydantic__pydantic-ai/tests/graph/test_graph.py)<br>[tests/graph/test_mermaid.py](../../../../sources/pydantic__pydantic-ai/tests/graph/test_mermaid.py)<br>[tests/graph/test_persistence.py](../../../../sources/pydantic__pydantic-ai/tests/graph/test_persistence.py) |
| spec | 8 | [tests/test_spec.py](../../../../sources/pydantic__pydantic-ai/tests/test_spec.py)<br>[tests/evals/test_evaluator_spec.py](../../../../sources/pydantic__pydantic-ai/tests/evals/test_evaluator_spec.py)<br>[pydantic_evals/pydantic_evals/evaluators/spec.py](../../../../sources/pydantic__pydantic-ai/pydantic_evals/pydantic_evals/evaluators/spec.py)<br>[pydantic_ai_slim/pydantic_ai/_spec.py](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/_spec.py)<br>[pydantic_ai_slim/pydantic_ai/agent/spec.py](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/agent/spec.py)<br>[pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/ARCHITECTURE.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/ARCHITECTURE.md)<br>[docs/agent-spec.md](../../../../sources/pydantic__pydantic-ai/docs/agent-spec.md)<br>[agent_docs/api-design.md](../../../../sources/pydantic__pydantic-ai/agent_docs/api-design.md) |
| eval | 1384 | [tests/__init__.py](../../../../sources/pydantic__pydantic-ai/tests/__init__.py)<br>[tests/_inline_snapshot.py](../../../../sources/pydantic__pydantic-ai/tests/_inline_snapshot.py)<br>[tests/AGENTS.md](../../../../sources/pydantic__pydantic-ai/tests/AGENTS.md)<br>[tests/cassette_utils.py](../../../../sources/pydantic__pydantic-ai/tests/cassette_utils.py)<br>[tests/conftest.py](../../../../sources/pydantic__pydantic-ai/tests/conftest.py)<br>[tests/import_examples.py](../../../../sources/pydantic__pydantic-ai/tests/import_examples.py)<br>[tests/json_body_serializer.py](../../../../sources/pydantic__pydantic-ai/tests/json_body_serializer.py)<br>[tests/mcp_server.py](../../../../sources/pydantic__pydantic-ai/tests/mcp_server.py) |
| security | 7 | [tests/models/cassettes/test_bedrock/test_bedrock_model_guardrail_config.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_bedrock/test_bedrock_model_guardrail_config.yaml)<br>[docs/version-policy.md](../../../../sources/pydantic__pydantic-ai/docs/version-policy.md)<br>[.github/workflows/pr-guard.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/pr-guard.yml)<br>[.github/workflows/pydantic-ai-ui-security-review.lock.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/pydantic-ai-ui-security-review.lock.yml)<br>[.github/workflows/pydantic-ai-ui-security-review.md](../../../../sources/pydantic__pydantic-ai/.github/workflows/pydantic-ai-ui-security-review.md)<br>[.github/workflows/shared/prompts/pydantic-ai-ui-security-review.md](../../../../sources/pydantic__pydantic-ai/.github/workflows/shared/prompts/pydantic-ai-ui-security-review.md)<br>[.github/scripts/install-sandbox-tools.sh](../../../../sources/pydantic__pydantic-ai/.github/scripts/install-sandbox-tools.sh) |
| ci | 51 | [.github/workflows/after-ci.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/after-ci.yml)<br>[.github/workflows/agentics-maintenance.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/agentics-maintenance.yml)<br>[.github/workflows/at-claude.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/at-claude.yml)<br>[.github/workflows/bots.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/bots.yml)<br>[.github/workflows/ci.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/ci.yml)<br>[.github/workflows/docs-preview.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/docs-preview.yml)<br>[.github/workflows/gateway-model-health.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/gateway-model-health.yml)<br>[.github/workflows/harness-compat.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/harness-compat.yml) |
| container | 0 | not obvious |
| instruction | 13 | [AGENTS.md](../../../../sources/pydantic__pydantic-ai/AGENTS.md)<br>[tests/AGENTS.md](../../../../sources/pydantic__pydantic-ai/tests/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/ui/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/ui/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/providers/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/providers/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/profiles/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/profiles/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/native_tools/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/native_tools/AGENTS.md) |
| docs | 208 | [mkdocs.yml](../../../../sources/pydantic__pydantic-ai/mkdocs.yml)<br>[README.md](../../../../sources/pydantic__pydantic-ai/README.md)<br>[tests/example_modules/README.md](../../../../sources/pydantic__pydantic-ai/tests/example_modules/README.md)<br>[pydantic_graph/README.md](../../../../sources/pydantic__pydantic-ai/pydantic_graph/README.md)<br>[pydantic_evals/README.md](../../../../sources/pydantic__pydantic-ai/pydantic_evals/README.md)<br>[pydantic_ai_slim/README.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/README.md)<br>[examples/README.md](../../../../sources/pydantic__pydantic-ai/examples/README.md)<br>[docs-site/README.md](../../../../sources/pydantic__pydantic-ai/docs-site/README.md) |
| config | 10 | [Makefile](../../../../sources/pydantic__pydantic-ai/Makefile)<br>[pyproject.toml](../../../../sources/pydantic__pydantic-ai/pyproject.toml)<br>[uv.lock](../../../../sources/pydantic__pydantic-ai/uv.lock)<br>[pydantic_graph/pyproject.toml](../../../../sources/pydantic__pydantic-ai/pydantic_graph/pyproject.toml)<br>[pydantic_evals/pyproject.toml](../../../../sources/pydantic__pydantic-ai/pydantic_evals/pyproject.toml)<br>[pydantic_ai_slim/pyproject.toml](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pyproject.toml)<br>[examples/pyproject.toml](../../../../sources/pydantic__pydantic-ai/examples/pyproject.toml)<br>[docs-site/package.json](../../../../sources/pydantic__pydantic-ai/docs-site/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1384 | [tests/__init__.py](../../../../sources/pydantic__pydantic-ai/tests/__init__.py)<br>[tests/_inline_snapshot.py](../../../../sources/pydantic__pydantic-ai/tests/_inline_snapshot.py)<br>[tests/AGENTS.md](../../../../sources/pydantic__pydantic-ai/tests/AGENTS.md)<br>[tests/cassette_utils.py](../../../../sources/pydantic__pydantic-ai/tests/cassette_utils.py)<br>[tests/conftest.py](../../../../sources/pydantic__pydantic-ai/tests/conftest.py)<br>[tests/import_examples.py](../../../../sources/pydantic__pydantic-ai/tests/import_examples.py) |
| CI workflows | 51 | [.github/workflows/after-ci.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/after-ci.yml)<br>[.github/workflows/agentics-maintenance.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/agentics-maintenance.yml)<br>[.github/workflows/at-claude.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/at-claude.yml)<br>[.github/workflows/bots.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/bots.yml)<br>[.github/workflows/ci.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/ci.yml)<br>[.github/workflows/docs-preview.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/docs-preview.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 7 | [tests/models/cassettes/test_bedrock/test_bedrock_model_guardrail_config.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_bedrock/test_bedrock_model_guardrail_config.yaml)<br>[docs/version-policy.md](../../../../sources/pydantic__pydantic-ai/docs/version-policy.md)<br>[.github/workflows/pr-guard.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/pr-guard.yml)<br>[.github/workflows/pydantic-ai-ui-security-review.lock.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/pydantic-ai-ui-security-review.lock.yml)<br>[.github/workflows/pydantic-ai-ui-security-review.md](../../../../sources/pydantic__pydantic-ai/.github/workflows/pydantic-ai-ui-security-review.md)<br>[.github/workflows/shared/prompts/pydantic-ai-ui-security-review.md](../../../../sources/pydantic__pydantic-ai/.github/workflows/shared/prompts/pydantic-ai-ui-security-review.md) |
| Agent instructions | 13 | [AGENTS.md](../../../../sources/pydantic__pydantic-ai/AGENTS.md)<br>[tests/AGENTS.md](../../../../sources/pydantic__pydantic-ai/tests/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/ui/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/ui/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/providers/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/providers/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/mcp_server.py`, `tests/test_mcp_toolset.py`, `tests/test_mcp.py`.
2. Trace execution through entrypoints: `pydantic_ai_slim/pydantic_ai/__main__.py`, `examples/pydantic_ai_examples/__main__.py`, `examples/pydantic_ai_examples/ag_ui/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/AGENTS.md`, `pydantic_evals/pydantic_evals/evaluators/context.py`.
4. Inspect retrieval/memory/indexing through: `tests/typed_graph.py`, `tests/models/cassettes/test_anthropic/test_anthropic_count_tokens_keeps_memory_tool.yaml`, `tests/models/cassettes/test_anthropic/test_anthropic_memory_tool.yaml`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/_inline_snapshot.py`, `tests/AGENTS.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2095 files, 167 directories.. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, AGENTS.md, LICENSE이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
