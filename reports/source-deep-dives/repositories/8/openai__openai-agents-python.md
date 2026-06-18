# openai/openai-agents-python 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

A lightweight, powerful framework for multi-agent workflows

## 요약

- 조사 단위: `sources/openai__openai-agents-python` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,324 files, 226 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp_tool_metadata.py, tests/mcp/__init__.py, tests/mcp/helpers.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | openai/openai-agents-python |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 27214 |
| Forks | 4196 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/openai__openai-agents-python](../../../../sources/openai__openai-agents-python) |
| 기존 보고서 | [reports/global-trending/repositories/openai__openai-agents-python.md](../../../global-trending/repositories/openai__openai-agents-python.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1324 / 226 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .agents, .codex, .github, docs, examples, src, tests |
| 상위 확장자 | .py: 778, .md: 467, .txt: 13, .json: 11, .yaml: 9, .yml: 8, .sh: 7, (none): 6, .png: 4, .js: 3, .pdf: 3, .jpg: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 156 |
| examples/mcp | examples workspace | 39 |
| src | source boundary | 32 |
| examples/sandbox | examples workspace | 27 |
| examples/realtime | examples workspace | 10 |
| docs | documentation surface | 6 |
| examples/voice | examples workspace | 4 |
| examples/financial_research_agent | examples workspace | 2 |
| examples/research_bot | examples workspace | 2 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/customer_service | examples workspace | 1 |
| examples/model_providers | examples workspace | 1 |
| examples/reasoning_content | examples workspace | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | sync | make sync |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | format | make format |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | format-check | make format-check |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | lint | make lint |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | mypy | make mypy |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | pyright | make pyright |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | typecheck | make typecheck |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | tests | make tests |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | tests-asyncio-stability | make tests-asyncio-stability |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | tests-parallel | make tests-parallel |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/test_mcp_tool_metadata.py](../../../../sources/openai__openai-agents-python/tests/test_mcp_tool_metadata.py) | mcp signal |
| mcp | [tests/mcp/__init__.py](../../../../sources/openai__openai-agents-python/tests/mcp/__init__.py) | mcp signal |
| mcp | [tests/mcp/helpers.py](../../../../sources/openai__openai-agents-python/tests/mcp/helpers.py) | mcp signal |
| mcp | [tests/mcp/test_caching.py](../../../../sources/openai__openai-agents-python/tests/mcp/test_caching.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/openai__openai-agents-python/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/sandbox/__init__.py](../../../../sources/openai__openai-agents-python/tests/sandbox/__init__.py) | agentRuntime signal |
| agentRuntime | [tests/sandbox/_apply_patch_test_session.py](../../../../sources/openai__openai-agents-python/tests/sandbox/_apply_patch_test_session.py) | agentRuntime signal |
| agentRuntime | [tests/sandbox/test_apply_patch.py](../../../../sources/openai__openai-agents-python/tests/sandbox/test_apply_patch.py) | agentRuntime signal |
| entrypoints | [src/agents/mcp/server.py](../../../../sources/openai__openai-agents-python/src/agents/mcp/server.py) | entrypoints signal |
| entrypoints | [examples/voice/streamed/main.py](../../../../sources/openai__openai-agents-python/examples/voice/streamed/main.py) | entrypoints signal |
| entrypoints | [examples/voice/static/main.py](../../../../sources/openai__openai-agents-python/examples/voice/static/main.py) | entrypoints signal |
| entrypoints | [examples/sandbox/tutorials/vision_website_clone/main.py](../../../../sources/openai__openai-agents-python/examples/sandbox/tutorials/vision_website_clone/main.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 31 | [src/agents/mcp/server.py](../../../../sources/openai__openai-agents-python/src/agents/mcp/server.py)<br>[examples/voice/streamed/main.py](../../../../sources/openai__openai-agents-python/examples/voice/streamed/main.py)<br>[examples/voice/static/main.py](../../../../sources/openai__openai-agents-python/examples/voice/static/main.py)<br>[examples/sandbox/tutorials/vision_website_clone/main.py](../../../../sources/openai__openai-agents-python/examples/sandbox/tutorials/vision_website_clone/main.py)<br>[examples/sandbox/tutorials/sandbox_resume/main.py](../../../../sources/openai__openai-agents-python/examples/sandbox/tutorials/sandbox_resume/main.py)<br>[examples/sandbox/tutorials/repo_code_review/main.py](../../../../sources/openai__openai-agents-python/examples/sandbox/tutorials/repo_code_review/main.py)<br>[examples/sandbox/tutorials/dataroom_qa/main.py](../../../../sources/openai__openai-agents-python/examples/sandbox/tutorials/dataroom_qa/main.py)<br>[examples/sandbox/tutorials/dataroom_metric_extract/main.py](../../../../sources/openai__openai-agents-python/examples/sandbox/tutorials/dataroom_metric_extract/main.py) |
| agentRuntime | 729 | [AGENTS.md](../../../../sources/openai__openai-agents-python/AGENTS.md)<br>[tests/sandbox/__init__.py](../../../../sources/openai__openai-agents-python/tests/sandbox/__init__.py)<br>[tests/sandbox/_apply_patch_test_session.py](../../../../sources/openai__openai-agents-python/tests/sandbox/_apply_patch_test_session.py)<br>[tests/sandbox/test_apply_patch.py](../../../../sources/openai__openai-agents-python/tests/sandbox/test_apply_patch.py)<br>[tests/sandbox/test_client_options.py](../../../../sources/openai__openai-agents-python/tests/sandbox/test_client_options.py)<br>[tests/sandbox/test_compaction.py](../../../../sources/openai__openai-agents-python/tests/sandbox/test_compaction.py)<br>[tests/sandbox/test_compatibility_guards.py](../../../../sources/openai__openai-agents-python/tests/sandbox/test_compatibility_guards.py)<br>[tests/sandbox/test_dependencies.py](../../../../sources/openai__openai-agents-python/tests/sandbox/test_dependencies.py) |
| mcp | 74 | [tests/test_mcp_tool_metadata.py](../../../../sources/openai__openai-agents-python/tests/test_mcp_tool_metadata.py)<br>[tests/mcp/__init__.py](../../../../sources/openai__openai-agents-python/tests/mcp/__init__.py)<br>[tests/mcp/helpers.py](../../../../sources/openai__openai-agents-python/tests/mcp/helpers.py)<br>[tests/mcp/test_caching.py](../../../../sources/openai__openai-agents-python/tests/mcp/test_caching.py)<br>[tests/mcp/test_client_session_retries.py](../../../../sources/openai__openai-agents-python/tests/mcp/test_client_session_retries.py)<br>[tests/mcp/test_connect_disconnect.py](../../../../sources/openai__openai-agents-python/tests/mcp/test_connect_disconnect.py)<br>[tests/mcp/test_mcp_approval.py](../../../../sources/openai__openai-agents-python/tests/mcp/test_mcp_approval.py)<br>[tests/mcp/test_mcp_auth_params.py](../../../../sources/openai__openai-agents-python/tests/mcp/test_mcp_auth_params.py) |
| retrieval | 107 | [tests/test_agent_memory_leak.py](../../../../sources/openai__openai-agents-python/tests/test_agent_memory_leak.py)<br>[tests/sandbox/test_memory.py](../../../../sources/openai__openai-agents-python/tests/sandbox/test_memory.py)<br>[tests/memory/test_openai_conversations_session.py](../../../../sources/openai__openai-agents-python/tests/memory/test_openai_conversations_session.py)<br>[tests/memory/test_openai_responses_compaction_session.py](../../../../sources/openai__openai-agents-python/tests/memory/test_openai_responses_compaction_session.py)<br>[tests/memory/test_session_limit.py](../../../../sources/openai__openai-agents-python/tests/memory/test_session_limit.py)<br>[tests/memory/test_session_persistence_sanitize.py](../../../../sources/openai__openai-agents-python/tests/memory/test_session_persistence_sanitize.py)<br>[tests/memory/test_session.py](../../../../sources/openai__openai-agents-python/tests/memory/test_session.py)<br>[tests/extensions/memory/test_advanced_sqlite_session.py](../../../../sources/openai__openai-agents-python/tests/extensions/memory/test_advanced_sqlite_session.py) |
| spec | 3 | [examples/sandbox/healthcare_support/policies/outbound_fax_packet_requirements.md](../../../../sources/openai__openai-agents-python/examples/sandbox/healthcare_support/policies/outbound_fax_packet_requirements.md)<br>[examples/realtime/twilio_sip/requirements.txt](../../../../sources/openai__openai-agents-python/examples/realtime/twilio_sip/requirements.txt)<br>[examples/realtime/twilio/requirements.txt](../../../../sources/openai__openai-agents-python/examples/realtime/twilio/requirements.txt) |
| eval | 331 | [tests/__init__.py](../../../../sources/openai__openai-agents-python/tests/__init__.py)<br>[tests/_fake_workspace_paths.py](../../../../sources/openai__openai-agents-python/tests/_fake_workspace_paths.py)<br>[tests/conftest.py](../../../../sources/openai__openai-agents-python/tests/conftest.py)<br>[tests/fake_model.py](../../../../sources/openai__openai-agents-python/tests/fake_model.py)<br>[tests/README.md](../../../../sources/openai__openai-agents-python/tests/README.md)<br>[tests/test_agent_as_tool.py](../../../../sources/openai__openai-agents-python/tests/test_agent_as_tool.py)<br>[tests/test_agent_clone_shallow_copy.py](../../../../sources/openai__openai-agents-python/tests/test_agent_clone_shallow_copy.py)<br>[tests/test_agent_config.py](../../../../sources/openai__openai-agents-python/tests/test_agent_config.py) |
| security | 398 | [SECURITY.md](../../../../sources/openai__openai-agents-python/SECURITY.md)<br>[tests/test_output_guardrail_cancellation.py](../../../../sources/openai__openai-agents-python/tests/test_output_guardrail_cancellation.py)<br>[tests/test_runner_guardrail_resume.py](../../../../sources/openai__openai-agents-python/tests/test_runner_guardrail_resume.py)<br>[tests/test_stream_input_guardrail_timing.py](../../../../sources/openai__openai-agents-python/tests/test_stream_input_guardrail_timing.py)<br>[tests/sandbox/__init__.py](../../../../sources/openai__openai-agents-python/tests/sandbox/__init__.py)<br>[tests/sandbox/_apply_patch_test_session.py](../../../../sources/openai__openai-agents-python/tests/sandbox/_apply_patch_test_session.py)<br>[tests/sandbox/test_apply_patch.py](../../../../sources/openai__openai-agents-python/tests/sandbox/test_apply_patch.py)<br>[tests/sandbox/test_client_options.py](../../../../sources/openai__openai-agents-python/tests/sandbox/test_client_options.py) |
| ci | 6 | [.github/workflows/docs.yml](../../../../sources/openai__openai-agents-python/.github/workflows/docs.yml)<br>[.github/workflows/issues.yml](../../../../sources/openai__openai-agents-python/.github/workflows/issues.yml)<br>[.github/workflows/publish.yml](../../../../sources/openai__openai-agents-python/.github/workflows/publish.yml)<br>[.github/workflows/release-pr.yml](../../../../sources/openai__openai-agents-python/.github/workflows/release-pr.yml)<br>[.github/workflows/release-tag.yml](../../../../sources/openai__openai-agents-python/.github/workflows/release-tag.yml)<br>[.github/workflows/tests.yml](../../../../sources/openai__openai-agents-python/.github/workflows/tests.yml) |
| container | 2 | [examples/sandbox/tutorials/Dockerfile](../../../../sources/openai__openai-agents-python/examples/sandbox/tutorials/Dockerfile)<br>[examples/sandbox/docker/Dockerfile.mount](../../../../sources/openai__openai-agents-python/examples/sandbox/docker/Dockerfile.mount) |
| instruction | 8 | [AGENTS.md](../../../../sources/openai__openai-agents-python/AGENTS.md)<br>[docs/agents.md](../../../../sources/openai__openai-agents-python/docs/agents.md)<br>[docs/zh/agents.md](../../../../sources/openai__openai-agents-python/docs/zh/agents.md)<br>[docs/ko/agents.md](../../../../sources/openai__openai-agents-python/docs/ko/agents.md)<br>[docs/ja/agents.md](../../../../sources/openai__openai-agents-python/docs/ja/agents.md)<br>[.codex/config.toml](../../../../sources/openai__openai-agents-python/.codex/config.toml)<br>[.codex/hooks.json](../../../../sources/openai__openai-agents-python/.codex/hooks.json)<br>[.codex/hooks/stop_repo_tidy.py](../../../../sources/openai__openai-agents-python/.codex/hooks/stop_repo_tidy.py) |
| docs | 433 | [mkdocs.yml](../../../../sources/openai__openai-agents-python/mkdocs.yml)<br>[README.md](../../../../sources/openai__openai-agents-python/README.md)<br>[tests/README.md](../../../../sources/openai__openai-agents-python/tests/README.md)<br>[src/agents/realtime/README.md](../../../../sources/openai__openai-agents-python/src/agents/realtime/README.md)<br>[examples/voice/streamed/README.md](../../../../sources/openai__openai-agents-python/examples/voice/streamed/README.md)<br>[examples/voice/static/README.md](../../../../sources/openai__openai-agents-python/examples/voice/static/README.md)<br>[examples/sandbox/README.md](../../../../sources/openai__openai-agents-python/examples/sandbox/README.md)<br>[examples/sandbox/tutorials/vision_website_clone/README.md](../../../../sources/openai__openai-agents-python/examples/sandbox/tutorials/vision_website_clone/README.md) |
| config | 5 | [Makefile](../../../../sources/openai__openai-agents-python/Makefile)<br>[pyproject.toml](../../../../sources/openai__openai-agents-python/pyproject.toml)<br>[uv.lock](../../../../sources/openai__openai-agents-python/uv.lock)<br>[examples/realtime/twilio_sip/requirements.txt](../../../../sources/openai__openai-agents-python/examples/realtime/twilio_sip/requirements.txt)<br>[examples/realtime/twilio/requirements.txt](../../../../sources/openai__openai-agents-python/examples/realtime/twilio/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 331 | [tests/__init__.py](../../../../sources/openai__openai-agents-python/tests/__init__.py)<br>[tests/_fake_workspace_paths.py](../../../../sources/openai__openai-agents-python/tests/_fake_workspace_paths.py)<br>[tests/conftest.py](../../../../sources/openai__openai-agents-python/tests/conftest.py)<br>[tests/fake_model.py](../../../../sources/openai__openai-agents-python/tests/fake_model.py)<br>[tests/README.md](../../../../sources/openai__openai-agents-python/tests/README.md)<br>[tests/test_agent_as_tool.py](../../../../sources/openai__openai-agents-python/tests/test_agent_as_tool.py) |
| CI workflow | 6 | [.github/workflows/docs.yml](../../../../sources/openai__openai-agents-python/.github/workflows/docs.yml)<br>[.github/workflows/issues.yml](../../../../sources/openai__openai-agents-python/.github/workflows/issues.yml)<br>[.github/workflows/publish.yml](../../../../sources/openai__openai-agents-python/.github/workflows/publish.yml)<br>[.github/workflows/release-pr.yml](../../../../sources/openai__openai-agents-python/.github/workflows/release-pr.yml)<br>[.github/workflows/release-tag.yml](../../../../sources/openai__openai-agents-python/.github/workflows/release-tag.yml)<br>[.github/workflows/tests.yml](../../../../sources/openai__openai-agents-python/.github/workflows/tests.yml) |
| 컨테이너/배포 | 2 | [examples/sandbox/tutorials/Dockerfile](../../../../sources/openai__openai-agents-python/examples/sandbox/tutorials/Dockerfile)<br>[examples/sandbox/docker/Dockerfile.mount](../../../../sources/openai__openai-agents-python/examples/sandbox/docker/Dockerfile.mount) |
| 보안/정책 | 398 | [SECURITY.md](../../../../sources/openai__openai-agents-python/SECURITY.md)<br>[tests/test_output_guardrail_cancellation.py](../../../../sources/openai__openai-agents-python/tests/test_output_guardrail_cancellation.py)<br>[tests/test_runner_guardrail_resume.py](../../../../sources/openai__openai-agents-python/tests/test_runner_guardrail_resume.py)<br>[tests/test_stream_input_guardrail_timing.py](../../../../sources/openai__openai-agents-python/tests/test_stream_input_guardrail_timing.py)<br>[tests/sandbox/__init__.py](../../../../sources/openai__openai-agents-python/tests/sandbox/__init__.py)<br>[tests/sandbox/_apply_patch_test_session.py](../../../../sources/openai__openai-agents-python/tests/sandbox/_apply_patch_test_session.py) |
| 에이전트 지시문 | 8 | [AGENTS.md](../../../../sources/openai__openai-agents-python/AGENTS.md)<br>[docs/agents.md](../../../../sources/openai__openai-agents-python/docs/agents.md)<br>[docs/zh/agents.md](../../../../sources/openai__openai-agents-python/docs/zh/agents.md)<br>[docs/ko/agents.md](../../../../sources/openai__openai-agents-python/docs/ko/agents.md)<br>[docs/ja/agents.md](../../../../sources/openai__openai-agents-python/docs/ja/agents.md)<br>[.codex/config.toml](../../../../sources/openai__openai-agents-python/.codex/config.toml) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_mcp_tool_metadata.py`, `tests/mcp/__init__.py`, `tests/mcp/helpers.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/agents/mcp/server.py`, `examples/voice/streamed/main.py`, `examples/voice/static/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/sandbox/__init__.py`, `tests/sandbox/_apply_patch_test_session.py`.
4. retrieval/memory/indexing 확인: `tests/test_agent_memory_leak.py`, `tests/sandbox/test_memory.py`, `tests/memory/test_openai_conversations_session.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/_fake_workspace_paths.py`, `tests/conftest.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A lightweight, powerful framework for multi agent workflows. 핵심 구조 신호는 Python, pyproject.toml, Makefile, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
