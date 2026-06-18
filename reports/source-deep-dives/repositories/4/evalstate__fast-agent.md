# evalstate/fast-agent 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Code, Build and Evaluate agents - excellent Model and Skills/MCP/ACP Support

## 요약

- 조사 단위: `sources/evalstate__fast-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,007 files, 368 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=2026-06-03-main-merge-mcp-registry-handover.md, tests/unit/fast_agent/test_config_mcp_target_shorthand.py, tests/unit/fast_agent/test_mcp_aggregator_acp_defaults.py이고, 의존성 단서는 openai, anthropic, mcp, fastapi, pydantic, typer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | evalstate/fast-agent |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 3826 |
| Forks | 405 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/evalstate__fast-agent](../../../../sources/evalstate__fast-agent) |
| 기존 보고서 | [reports/global-trending/repositories/evalstate__fast-agent.md](../../../global-trending/repositories/evalstate__fast-agent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2007 / 368 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, docs, docs-internal, examples, plan, publish, resources, scripts, skills-repo, src, tests |
| 상위 확장자 | .py: 1339, .md: 225, .png: 117, .txt: 93, .yaml: 64, .json: 44, .jsonl: 33, (none): 16, .svg: 10, .sh: 9, .toml: 9, .yml: 9 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 140 |
| docs | documentation surface | 42 |
| src | source boundary | 21 |
| examples/tensorzero | examples workspace | 5 |
| examples/rag | examples workspace | 4 |
| examples/fastapi | examples workspace | 2 |
| .github | ci surface | 1 |
| docs-internal | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/a2a | examples workspace | 1 |
| examples/card-packs | examples workspace | 1 |
| examples/openapi | examples workspace | 1 |
| examples/otel | examples workspace | 1 |
| plan | top-level component | 1 |
| publish | top-level component | 1 |
| resources | top-level component | 1 |
| scripts | top-level component | 1 |
| skills-repo | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | fast-agent | fast-agent |
| utility | pyproject.toml | apply_patch | apply_patch |
| utility | pyproject.toml | fast-agent-mcp | fast-agent-mcp |
| utility | pyproject.toml | fast-agent-acp | fast-agent-acp |
| utility | pyproject.toml | fast-agent-hf | fast-agent-hf |
| serve-dev | pyproject.toml | prompt-server | prompt-server |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [2026-06-03-main-merge-mcp-registry-handover.md](../../../../sources/evalstate__fast-agent/2026-06-03-main-merge-mcp-registry-handover.md) | mcp signal |
| mcp | [tests/unit/fast_agent/test_config_mcp_target_shorthand.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/test_config_mcp_target_shorthand.py) | mcp signal |
| mcp | [tests/unit/fast_agent/test_mcp_aggregator_acp_defaults.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/test_mcp_aggregator_acp_defaults.py) | mcp signal |
| mcp | [tests/unit/fast_agent/test_mcp_server_transport_inference.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/test_mcp_server_transport_inference.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/evalstate__fast-agent/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/unit/fast_agent/tools/test_apply_patch_tool.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/tools/test_apply_patch_tool.py) | agentRuntime signal |
| agentRuntime | [tests/unit/fast_agent/tools/test_composite_filesystem_runtime.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/tools/test_composite_filesystem_runtime.py) | agentRuntime signal |
| agentRuntime | [tests/unit/fast_agent/tools/test_edit_file_engine.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/tools/test_edit_file_engine.py) | agentRuntime signal |
| entrypoints | [src/fast_agent/mcp/prompts/__main__.py](../../../../sources/evalstate__fast-agent/src/fast_agent/mcp/prompts/__main__.py) | entrypoints signal |
| entrypoints | [src/fast_agent/cli/__main__.py](../../../../sources/evalstate__fast-agent/src/fast_agent/cli/__main__.py) | entrypoints signal |
| entrypoints | [src/fast_agent/cli/main.py](../../../../sources/evalstate__fast-agent/src/fast_agent/cli/main.py) | entrypoints signal |
| entrypoints | [examples/a2a/server.py](../../../../sources/evalstate__fast-agent/examples/a2a/server.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [src/fast_agent/mcp/prompts/__main__.py](../../../../sources/evalstate__fast-agent/src/fast_agent/mcp/prompts/__main__.py)<br>[src/fast_agent/cli/__main__.py](../../../../sources/evalstate__fast-agent/src/fast_agent/cli/__main__.py)<br>[src/fast_agent/cli/main.py](../../../../sources/evalstate__fast-agent/src/fast_agent/cli/main.py)<br>[examples/a2a/server.py](../../../../sources/evalstate__fast-agent/examples/a2a/server.py) |
| agentRuntime | 328 | [AGENTS.md](../../../../sources/evalstate__fast-agent/AGENTS.md)<br>[tests/unit/fast_agent/tools/test_apply_patch_tool.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/tools/test_apply_patch_tool.py)<br>[tests/unit/fast_agent/tools/test_composite_filesystem_runtime.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/tools/test_composite_filesystem_runtime.py)<br>[tests/unit/fast_agent/tools/test_edit_file_engine.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/tools/test_edit_file_engine.py)<br>[tests/unit/fast_agent/tools/test_edit_file_tool_runtime.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/tools/test_edit_file_tool_runtime.py)<br>[tests/unit/fast_agent/tools/test_elicitation.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/tools/test_elicitation.py)<br>[tests/unit/fast_agent/tools/test_filesystem_tool_args.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/tools/test_filesystem_tool_args.py)<br>[tests/unit/fast_agent/tools/test_function_tool_config.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/tools/test_function_tool_config.py) |
| mcp | 253 | [2026-06-03-main-merge-mcp-registry-handover.md](../../../../sources/evalstate__fast-agent/2026-06-03-main-merge-mcp-registry-handover.md)<br>[tests/unit/fast_agent/test_config_mcp_target_shorthand.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/test_config_mcp_target_shorthand.py)<br>[tests/unit/fast_agent/test_mcp_aggregator_acp_defaults.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/test_mcp_aggregator_acp_defaults.py)<br>[tests/unit/fast_agent/test_mcp_server_transport_inference.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/test_mcp_server_transport_inference.py)<br>[tests/unit/fast_agent/ui/test_mcp_display.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/ui/test_mcp_display.py)<br>[tests/unit/fast_agent/ui/test_mcp_ui_utils.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/ui/test_mcp_ui_utils.py)<br>[tests/unit/fast_agent/ui/test_parse_mcp_commands.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/ui/test_parse_mcp_commands.py)<br>[tests/unit/fast_agent/skills/test_mcp_registry.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/skills/test_mcp_registry.py) |
| retrieval | 18 | [tests/unit/fast_agent/test_reasoning_chunk_join.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/test_reasoning_chunk_join.py)<br>[tests/fixtures/patch/scenarios/016_pure_addition_update_chunk/patch.txt](../../../../sources/evalstate__fast-agent/tests/fixtures/patch/scenarios/016_pure_addition_update_chunk/patch.txt)<br>[tests/fixtures/patch/scenarios/016_pure_addition_update_chunk/input/input.txt](../../../../sources/evalstate__fast-agent/tests/fixtures/patch/scenarios/016_pure_addition_update_chunk/input/input.txt)<br>[tests/fixtures/patch/scenarios/016_pure_addition_update_chunk/expected/input.txt](../../../../sources/evalstate__fast-agent/tests/fixtures/patch/scenarios/016_pure_addition_update_chunk/expected/input.txt)<br>[tests/e2e/smoke/base/index.js.TEST_ONLY](../../../../sources/evalstate__fast-agent/tests/e2e/smoke/base/index.js.TEST_ONLY)<br>[src/fast_agent/utils/reasoning_chunk_join.py](../../../../sources/evalstate__fast-agent/src/fast_agent/utils/reasoning_chunk_join.py)<br>[src/fast_agent/llm/memory.py](../../../../sources/evalstate__fast-agent/src/fast_agent/llm/memory.py)<br>[examples/rag/fastagent.secrets.yaml](../../../../sources/evalstate__fast-agent/examples/rag/fastagent.secrets.yaml) |
| spec | 3 | [tests/integration/history-architecture/test_history_architecture.py](../../../../sources/evalstate__fast-agent/tests/integration/history-architecture/test_history_architecture.py)<br>[plan/plugin-spec.md](../../../../sources/evalstate__fast-agent/plan/plugin-spec.md)<br>[docs-internal/ACP_SLASH_COMMANDS_DESIGN.md](../../../../sources/evalstate__fast-agent/docs-internal/ACP_SLASH_COMMANDS_DESIGN.md) |
| eval | 868 | [tests/__init__.py](../../../../sources/evalstate__fast-agent/tests/__init__.py)<br>[tests/unit/conftest.py](../../../../sources/evalstate__fast-agent/tests/unit/conftest.py)<br>[tests/unit/test_generate_reference_docs.py](../../../../sources/evalstate__fast-agent/tests/unit/test_generate_reference_docs.py)<br>[tests/unit/test_hatch_build.py](../../../../sources/evalstate__fast-agent/tests/unit/test_hatch_build.py)<br>[tests/unit/test_pytest_collection_hygiene.py](../../../../sources/evalstate__fast-agent/tests/unit/test_pytest_collection_hygiene.py)<br>[tests/unit/scripts/test_check_internal_resources.py](../../../../sources/evalstate__fast-agent/tests/unit/scripts/test_check_internal_resources.py)<br>[tests/unit/scripts/test_event_replay.py](../../../../sources/evalstate__fast-agent/tests/unit/scripts/test_event_replay.py)<br>[tests/unit/scripts/test_session_usage_bounce.py](../../../../sources/evalstate__fast-agent/tests/unit/scripts/test_session_usage_bounce.py) |
| security | 34 | [tests/unit/fast_agent/mcp/test_agent_server_auth_passthrough.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/mcp/test_agent_server_auth_passthrough.py)<br>[tests/unit/fast_agent/mcp/test_auth_middleware.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/mcp/test_auth_middleware.py)<br>[tests/unit/fast_agent/mcp/test_hf_auth.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/mcp/test_hf_auth.py)<br>[tests/unit/fast_agent/mcp/test_oauth_provider_urls.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/mcp/test_oauth_provider_urls.py)<br>[tests/unit/fast_agent/llm/providers/test_codex_oauth.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/llm/providers/test_codex_oauth.py)<br>[tests/unit/fast_agent/commands/test_auth_command.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/commands/test_auth_command.py)<br>[tests/unit/fast_agent/commands/test_shell_cwd_policy.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/commands/test_shell_cwd_policy.py)<br>[tests/unit/fast_agent/commands/test_url_parser_hf_auth.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/commands/test_url_parser_hf_auth.py) |
| ci | 6 | [.github/workflows/checks.yml](../../../../sources/evalstate__fast-agent/.github/workflows/checks.yml)<br>[.github/workflows/create-tag.yml](../../../../sources/evalstate__fast-agent/.github/workflows/create-tag.yml)<br>[.github/workflows/main-checks.yml](../../../../sources/evalstate__fast-agent/.github/workflows/main-checks.yml)<br>[.github/workflows/pr-checks.yml](../../../../sources/evalstate__fast-agent/.github/workflows/pr-checks.yml)<br>[.github/workflows/publish-pypi.yml](../../../../sources/evalstate__fast-agent/.github/workflows/publish-pypi.yml)<br>[.github/workflows/release-drafter.yml](../../../../sources/evalstate__fast-agent/.github/workflows/release-drafter.yml) |
| container | 3 | [examples/tensorzero/docker-compose.yml](../../../../sources/evalstate__fast-agent/examples/tensorzero/docker-compose.yml)<br>[examples/tensorzero/mcp_server/Dockerfile](../../../../sources/evalstate__fast-agent/examples/tensorzero/mcp_server/Dockerfile)<br>[examples/otel/docker-compose.yaml](../../../../sources/evalstate__fast-agent/examples/otel/docker-compose.yaml) |
| instruction | 1 | [AGENTS.md](../../../../sources/evalstate__fast-agent/AGENTS.md) |
| docs | 250 | [README.md](../../../../sources/evalstate__fast-agent/README.md)<br>[tests/fixtures/patch/scenarios/README.md](../../../../sources/evalstate__fast-agent/tests/fixtures/patch/scenarios/README.md)<br>[tests/fixtures/llm_traces/README.md](../../../../sources/evalstate__fast-agent/tests/fixtures/llm_traces/README.md)<br>[src/fast_agent/llm/provider/anthropic/README_anth_multipart.md](../../../../sources/evalstate__fast-agent/src/fast_agent/llm/provider/anthropic/README_anth_multipart.md)<br>[src/fast_agent/cli/commands/README.md](../../../../sources/evalstate__fast-agent/src/fast_agent/cli/commands/README.md)<br>[publish/hf-inference-acp/README.md](../../../../sources/evalstate__fast-agent/publish/hf-inference-acp/README.md)<br>[publish/fast-agent-acp/README.md](../../../../sources/evalstate__fast-agent/publish/fast-agent-acp/README.md)<br>[examples/tensorzero/README.md](../../../../sources/evalstate__fast-agent/examples/tensorzero/README.md) |
| config | 9 | [pyproject.toml](../../../../sources/evalstate__fast-agent/pyproject.toml)<br>[uv.lock](../../../../sources/evalstate__fast-agent/uv.lock)<br>[publish/hf-inference-acp/pyproject.toml](../../../../sources/evalstate__fast-agent/publish/hf-inference-acp/pyproject.toml)<br>[publish/fast-agent-acp/pyproject.toml](../../../../sources/evalstate__fast-agent/publish/fast-agent-acp/pyproject.toml)<br>[examples/tensorzero/Makefile](../../../../sources/evalstate__fast-agent/examples/tensorzero/Makefile)<br>[examples/tensorzero/mcp_server/pyproject.toml](../../../../sources/evalstate__fast-agent/examples/tensorzero/mcp_server/pyproject.toml)<br>[examples/rag/pyproject.toml](../../../../sources/evalstate__fast-agent/examples/rag/pyproject.toml)<br>[examples/openapi/pyproject.toml](../../../../sources/evalstate__fast-agent/examples/openapi/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 868 | [tests/__init__.py](../../../../sources/evalstate__fast-agent/tests/__init__.py)<br>[tests/unit/conftest.py](../../../../sources/evalstate__fast-agent/tests/unit/conftest.py)<br>[tests/unit/test_generate_reference_docs.py](../../../../sources/evalstate__fast-agent/tests/unit/test_generate_reference_docs.py)<br>[tests/unit/test_hatch_build.py](../../../../sources/evalstate__fast-agent/tests/unit/test_hatch_build.py)<br>[tests/unit/test_pytest_collection_hygiene.py](../../../../sources/evalstate__fast-agent/tests/unit/test_pytest_collection_hygiene.py)<br>[tests/unit/scripts/test_check_internal_resources.py](../../../../sources/evalstate__fast-agent/tests/unit/scripts/test_check_internal_resources.py) |
| CI workflow | 6 | [.github/workflows/checks.yml](../../../../sources/evalstate__fast-agent/.github/workflows/checks.yml)<br>[.github/workflows/create-tag.yml](../../../../sources/evalstate__fast-agent/.github/workflows/create-tag.yml)<br>[.github/workflows/main-checks.yml](../../../../sources/evalstate__fast-agent/.github/workflows/main-checks.yml)<br>[.github/workflows/pr-checks.yml](../../../../sources/evalstate__fast-agent/.github/workflows/pr-checks.yml)<br>[.github/workflows/publish-pypi.yml](../../../../sources/evalstate__fast-agent/.github/workflows/publish-pypi.yml)<br>[.github/workflows/release-drafter.yml](../../../../sources/evalstate__fast-agent/.github/workflows/release-drafter.yml) |
| 컨테이너/배포 | 3 | [examples/tensorzero/docker-compose.yml](../../../../sources/evalstate__fast-agent/examples/tensorzero/docker-compose.yml)<br>[examples/tensorzero/mcp_server/Dockerfile](../../../../sources/evalstate__fast-agent/examples/tensorzero/mcp_server/Dockerfile)<br>[examples/otel/docker-compose.yaml](../../../../sources/evalstate__fast-agent/examples/otel/docker-compose.yaml) |
| 보안/정책 | 34 | [tests/unit/fast_agent/mcp/test_agent_server_auth_passthrough.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/mcp/test_agent_server_auth_passthrough.py)<br>[tests/unit/fast_agent/mcp/test_auth_middleware.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/mcp/test_auth_middleware.py)<br>[tests/unit/fast_agent/mcp/test_hf_auth.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/mcp/test_hf_auth.py)<br>[tests/unit/fast_agent/mcp/test_oauth_provider_urls.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/mcp/test_oauth_provider_urls.py)<br>[tests/unit/fast_agent/llm/providers/test_codex_oauth.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/llm/providers/test_codex_oauth.py)<br>[tests/unit/fast_agent/commands/test_auth_command.py](../../../../sources/evalstate__fast-agent/tests/unit/fast_agent/commands/test_auth_command.py) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/evalstate__fast-agent/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `2026-06-03-main-merge-mcp-registry-handover.md`, `tests/unit/fast_agent/test_config_mcp_target_shorthand.py`, `tests/unit/fast_agent/test_mcp_aggregator_acp_defaults.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/fast_agent/mcp/prompts/__main__.py`, `src/fast_agent/cli/__main__.py`, `src/fast_agent/cli/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/unit/fast_agent/tools/test_apply_patch_tool.py`, `tests/unit/fast_agent/tools/test_composite_filesystem_runtime.py`.
4. retrieval/memory/indexing 확인: `tests/unit/fast_agent/test_reasoning_chunk_join.py`, `tests/fixtures/patch/scenarios/016_pure_addition_update_chunk/patch.txt`, `tests/fixtures/patch/scenarios/016_pure_addition_update_chunk/input/input.txt`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/unit/conftest.py`, `tests/unit/test_generate_reference_docs.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Code, Build and Evaluate agents excellent Model and Skills/MCP/ACP Support. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
