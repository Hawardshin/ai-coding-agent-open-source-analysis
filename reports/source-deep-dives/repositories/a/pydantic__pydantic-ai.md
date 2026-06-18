# pydantic/pydantic-ai 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 2095 files, 167 directories.

## 요약

- 조사 단위: `sources/pydantic__pydantic-ai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,095 files, 167 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/mcp_server.py, tests/test_mcp_toolset.py, tests/test_mcp.py이고, 의존성 단서는 openai, anthropic, mcp, langchain, next, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | pydantic/pydantic-ai |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 17819 |
| Forks | 2224 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/pydantic__pydantic-ai](../../../../sources/pydantic__pydantic-ai) |
| 기존 보고서 | [reports/global-trending/repositories/pydantic__pydantic-ai.md](../../../global-trending/repositories/pydantic__pydantic-ai.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2095 / 167 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .agents, .claude, .gemini, .github, agent_docs, clai, docs, docs-site, examples, pydantic_ai_slim, pydantic_evals, pydantic_graph, scripts, tests |
| 상위 확장자 | .yaml: 1146, .py: 611, .md: 240, .yml: 27, .png: 15, (none): 10, .json: 8, .toml: 7, .sh: 6, .svg: 4, .typed: 4, .html: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | 없음 |
| modelRuntime | transformers, vllm, llama |
| webRuntime | next |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [pydantic_ai_slim/pydantic_ai/__main__.py](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/__main__.py)<br>[examples/pydantic_ai_examples/__main__.py](../../../../sources/pydantic__pydantic-ai/examples/pydantic_ai_examples/__main__.py)<br>[examples/pydantic_ai_examples/ag_ui/__main__.py](../../../../sources/pydantic__pydantic-ai/examples/pydantic_ai_examples/ag_ui/__main__.py)<br>[docs-site/src/index.ts](../../../../sources/pydantic__pydantic-ai/docs-site/src/index.ts)<br>[docs/mcp/server.md](../../../../sources/pydantic__pydantic-ai/docs/mcp/server.md)<br>[docs/.hooks/main.py](../../../../sources/pydantic__pydantic-ai/docs/.hooks/main.py)<br>[clai/clai/__main__.py](../../../../sources/pydantic__pydantic-ai/clai/clai/__main__.py)<br>[.github/scripts/pydantic_ai_gh_aw_shim/__main__.py](../../../../sources/pydantic__pydantic-ai/.github/scripts/pydantic_ai_gh_aw_shim/__main__.py) |
| agentRuntime | 53 | [AGENTS.md](../../../../sources/pydantic__pydantic-ai/AGENTS.md)<br>[tests/AGENTS.md](../../../../sources/pydantic__pydantic-ai/tests/AGENTS.md)<br>[pydantic_evals/pydantic_evals/evaluators/context.py](../../../../sources/pydantic__pydantic-ai/pydantic_evals/pydantic_evals/evaluators/context.py)<br>[pydantic_ai_slim/pydantic_ai/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/tool_manager.py](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/tool_manager.py)<br>[pydantic_ai_slim/pydantic_ai/tools.py](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/tools.py)<br>[pydantic_ai_slim/pydantic_ai/ui/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/ui/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md) |
| mcp | 50 | [tests/mcp_server.py](../../../../sources/pydantic__pydantic-ai/tests/mcp_server.py)<br>[tests/test_mcp_toolset.py](../../../../sources/pydantic__pydantic-ai/tests/test_mcp_toolset.py)<br>[tests/test_mcp.py](../../../../sources/pydantic__pydantic-ai/tests/test_mcp.py)<br>[tests/models/test_mcp_sampling.py](../../../../sources/pydantic__pydantic-ai/tests/models/test_mcp_sampling.py)<br>[tests/models/cassettes/test_xai/test_xai_builtin_mcp_server_tool_stream.xai.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_xai/test_xai_builtin_mcp_server_tool_stream.xai.yaml)<br>[tests/models/cassettes/test_xai/test_xai_builtin_mcp_server_tool.xai.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_xai/test_xai_builtin_mcp_server_tool.xai.yaml)<br>[tests/models/cassettes/test_openai_responses/test_openai_responses_model_mcp_server_tool_stream.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_openai_responses/test_openai_responses_model_mcp_server_tool_stream.yaml)<br>[tests/models/cassettes/test_openai_responses/test_openai_responses_model_mcp_server_tool_with_connector.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_openai_responses/test_openai_responses_model_mcp_server_tool_with_connector.yaml) |
| retrieval | 97 | [tests/typed_graph.py](../../../../sources/pydantic__pydantic-ai/tests/typed_graph.py)<br>[tests/models/cassettes/test_anthropic/test_anthropic_count_tokens_keeps_memory_tool.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_anthropic/test_anthropic_count_tokens_keeps_memory_tool.yaml)<br>[tests/models/cassettes/test_anthropic/test_anthropic_memory_tool.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_anthropic/test_anthropic_memory_tool.yaml)<br>[tests/graph/__init__.py](../../../../sources/pydantic__pydantic-ai/tests/graph/__init__.py)<br>[tests/graph/test_file_persistence.py](../../../../sources/pydantic__pydantic-ai/tests/graph/test_file_persistence.py)<br>[tests/graph/test_graph.py](../../../../sources/pydantic__pydantic-ai/tests/graph/test_graph.py)<br>[tests/graph/test_mermaid.py](../../../../sources/pydantic__pydantic-ai/tests/graph/test_mermaid.py)<br>[tests/graph/test_persistence.py](../../../../sources/pydantic__pydantic-ai/tests/graph/test_persistence.py) |
| spec | 8 | [tests/test_spec.py](../../../../sources/pydantic__pydantic-ai/tests/test_spec.py)<br>[tests/evals/test_evaluator_spec.py](../../../../sources/pydantic__pydantic-ai/tests/evals/test_evaluator_spec.py)<br>[pydantic_evals/pydantic_evals/evaluators/spec.py](../../../../sources/pydantic__pydantic-ai/pydantic_evals/pydantic_evals/evaluators/spec.py)<br>[pydantic_ai_slim/pydantic_ai/_spec.py](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/_spec.py)<br>[pydantic_ai_slim/pydantic_ai/agent/spec.py](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/agent/spec.py)<br>[pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/ARCHITECTURE.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/.agents/skills/building-pydantic-ai-agents/references/ARCHITECTURE.md)<br>[docs/agent-spec.md](../../../../sources/pydantic__pydantic-ai/docs/agent-spec.md)<br>[agent_docs/api-design.md](../../../../sources/pydantic__pydantic-ai/agent_docs/api-design.md) |
| eval | 1384 | [tests/__init__.py](../../../../sources/pydantic__pydantic-ai/tests/__init__.py)<br>[tests/_inline_snapshot.py](../../../../sources/pydantic__pydantic-ai/tests/_inline_snapshot.py)<br>[tests/AGENTS.md](../../../../sources/pydantic__pydantic-ai/tests/AGENTS.md)<br>[tests/cassette_utils.py](../../../../sources/pydantic__pydantic-ai/tests/cassette_utils.py)<br>[tests/conftest.py](../../../../sources/pydantic__pydantic-ai/tests/conftest.py)<br>[tests/import_examples.py](../../../../sources/pydantic__pydantic-ai/tests/import_examples.py)<br>[tests/json_body_serializer.py](../../../../sources/pydantic__pydantic-ai/tests/json_body_serializer.py)<br>[tests/mcp_server.py](../../../../sources/pydantic__pydantic-ai/tests/mcp_server.py) |
| security | 7 | [tests/models/cassettes/test_bedrock/test_bedrock_model_guardrail_config.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_bedrock/test_bedrock_model_guardrail_config.yaml)<br>[docs/version-policy.md](../../../../sources/pydantic__pydantic-ai/docs/version-policy.md)<br>[.github/workflows/pr-guard.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/pr-guard.yml)<br>[.github/workflows/pydantic-ai-ui-security-review.lock.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/pydantic-ai-ui-security-review.lock.yml)<br>[.github/workflows/pydantic-ai-ui-security-review.md](../../../../sources/pydantic__pydantic-ai/.github/workflows/pydantic-ai-ui-security-review.md)<br>[.github/workflows/shared/prompts/pydantic-ai-ui-security-review.md](../../../../sources/pydantic__pydantic-ai/.github/workflows/shared/prompts/pydantic-ai-ui-security-review.md)<br>[.github/scripts/install-sandbox-tools.sh](../../../../sources/pydantic__pydantic-ai/.github/scripts/install-sandbox-tools.sh) |
| ci | 51 | [.github/workflows/after-ci.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/after-ci.yml)<br>[.github/workflows/agentics-maintenance.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/agentics-maintenance.yml)<br>[.github/workflows/at-claude.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/at-claude.yml)<br>[.github/workflows/bots.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/bots.yml)<br>[.github/workflows/ci.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/ci.yml)<br>[.github/workflows/docs-preview.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/docs-preview.yml)<br>[.github/workflows/gateway-model-health.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/gateway-model-health.yml)<br>[.github/workflows/harness-compat.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/harness-compat.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 13 | [AGENTS.md](../../../../sources/pydantic__pydantic-ai/AGENTS.md)<br>[tests/AGENTS.md](../../../../sources/pydantic__pydantic-ai/tests/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/ui/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/ui/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/providers/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/providers/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/profiles/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/profiles/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/native_tools/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/native_tools/AGENTS.md) |
| docs | 208 | [mkdocs.yml](../../../../sources/pydantic__pydantic-ai/mkdocs.yml)<br>[README.md](../../../../sources/pydantic__pydantic-ai/README.md)<br>[tests/example_modules/README.md](../../../../sources/pydantic__pydantic-ai/tests/example_modules/README.md)<br>[pydantic_graph/README.md](../../../../sources/pydantic__pydantic-ai/pydantic_graph/README.md)<br>[pydantic_evals/README.md](../../../../sources/pydantic__pydantic-ai/pydantic_evals/README.md)<br>[pydantic_ai_slim/README.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/README.md)<br>[examples/README.md](../../../../sources/pydantic__pydantic-ai/examples/README.md)<br>[docs-site/README.md](../../../../sources/pydantic__pydantic-ai/docs-site/README.md) |
| config | 10 | [Makefile](../../../../sources/pydantic__pydantic-ai/Makefile)<br>[pyproject.toml](../../../../sources/pydantic__pydantic-ai/pyproject.toml)<br>[uv.lock](../../../../sources/pydantic__pydantic-ai/uv.lock)<br>[pydantic_graph/pyproject.toml](../../../../sources/pydantic__pydantic-ai/pydantic_graph/pyproject.toml)<br>[pydantic_evals/pyproject.toml](../../../../sources/pydantic__pydantic-ai/pydantic_evals/pyproject.toml)<br>[pydantic_ai_slim/pyproject.toml](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pyproject.toml)<br>[examples/pyproject.toml](../../../../sources/pydantic__pydantic-ai/examples/pyproject.toml)<br>[docs-site/package.json](../../../../sources/pydantic__pydantic-ai/docs-site/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1384 | [tests/__init__.py](../../../../sources/pydantic__pydantic-ai/tests/__init__.py)<br>[tests/_inline_snapshot.py](../../../../sources/pydantic__pydantic-ai/tests/_inline_snapshot.py)<br>[tests/AGENTS.md](../../../../sources/pydantic__pydantic-ai/tests/AGENTS.md)<br>[tests/cassette_utils.py](../../../../sources/pydantic__pydantic-ai/tests/cassette_utils.py)<br>[tests/conftest.py](../../../../sources/pydantic__pydantic-ai/tests/conftest.py)<br>[tests/import_examples.py](../../../../sources/pydantic__pydantic-ai/tests/import_examples.py) |
| CI workflow | 51 | [.github/workflows/after-ci.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/after-ci.yml)<br>[.github/workflows/agentics-maintenance.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/agentics-maintenance.yml)<br>[.github/workflows/at-claude.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/at-claude.yml)<br>[.github/workflows/bots.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/bots.yml)<br>[.github/workflows/ci.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/ci.yml)<br>[.github/workflows/docs-preview.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/docs-preview.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 7 | [tests/models/cassettes/test_bedrock/test_bedrock_model_guardrail_config.yaml](../../../../sources/pydantic__pydantic-ai/tests/models/cassettes/test_bedrock/test_bedrock_model_guardrail_config.yaml)<br>[docs/version-policy.md](../../../../sources/pydantic__pydantic-ai/docs/version-policy.md)<br>[.github/workflows/pr-guard.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/pr-guard.yml)<br>[.github/workflows/pydantic-ai-ui-security-review.lock.yml](../../../../sources/pydantic__pydantic-ai/.github/workflows/pydantic-ai-ui-security-review.lock.yml)<br>[.github/workflows/pydantic-ai-ui-security-review.md](../../../../sources/pydantic__pydantic-ai/.github/workflows/pydantic-ai-ui-security-review.md)<br>[.github/workflows/shared/prompts/pydantic-ai-ui-security-review.md](../../../../sources/pydantic__pydantic-ai/.github/workflows/shared/prompts/pydantic-ai-ui-security-review.md) |
| 에이전트 지시문 | 13 | [AGENTS.md](../../../../sources/pydantic__pydantic-ai/AGENTS.md)<br>[tests/AGENTS.md](../../../../sources/pydantic__pydantic-ai/tests/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/ui/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/ui/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/toolsets/AGENTS.md)<br>[pydantic_ai_slim/pydantic_ai/providers/AGENTS.md](../../../../sources/pydantic__pydantic-ai/pydantic_ai_slim/pydantic_ai/providers/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/mcp_server.py`, `tests/test_mcp_toolset.py`, `tests/test_mcp.py`.
2. entrypoint를 따라 실행 흐름 확인: `pydantic_ai_slim/pydantic_ai/__main__.py`, `examples/pydantic_ai_examples/__main__.py`, `examples/pydantic_ai_examples/ag_ui/__main__.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/AGENTS.md`, `pydantic_evals/pydantic_evals/evaluators/context.py`.
4. retrieval/memory/indexing 확인: `tests/typed_graph.py`, `tests/models/cassettes/test_anthropic/test_anthropic_count_tokens_keeps_memory_tool.yaml`, `tests/models/cassettes/test_anthropic/test_anthropic_memory_tool.yaml`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/_inline_snapshot.py`, `tests/AGENTS.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2095 files, 167 directories.. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, AGENTS.md, LICENSE이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
