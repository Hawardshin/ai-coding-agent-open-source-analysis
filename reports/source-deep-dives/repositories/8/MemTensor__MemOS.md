# MemTensor/MemOS 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Self-evolving memory OS for LLM & AI Agents: ultra-persistent memory, hybrid-retrieval, and cross-task skill reuse, with 35.24% token savings

## 요약

- 조사 단위: `sources/MemTensor__MemOS` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,794 files, 394 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/api/test_mcp_serve.py, src/memos/api/mcp_serve.py, examples/mem_mcp/simple_fastmcp_client.py이고, 의존성 단서는 openai, mcp, langchain, langgraph, fastapi, torch, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | MemTensor/MemOS |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 9913 |
| Forks | 904 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/MemTensor__MemOS](../../../../sources/MemTensor__MemOS) |
| 기존 보고서 | [reports/llm-wiki/repositories/MemTensor__MemOS.md](../../../llm-wiki/repositories/MemTensor__MemOS.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1794 / 394 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .claude, .codex, .github, apps, deploy, docker, docs, evaluation, examples, packages, scripts, src, tests |
| 상위 확장자 | .ts: 643, .py: 596, .md: 226, .tsx: 84, (none): 58, .json: 38, .svg: 22, .yaml: 20, .sh: 17, .html: 13, .sql: 12, .cjs: 10 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| apps/openwork-memos-integration | apps workspace | 64 |
| src | source boundary | 63 |
| tests | validation surface | 50 |
| docs | documentation surface | 45 |
| packages/memos-core | packages workspace | 16 |
| apps/memos-local-plugin | apps workspace | 11 |
| apps/memos-local-openclaw | apps workspace | 5 |
| examples/mem_mcp | examples workspace | 2 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| apps/MemOS-Cloud-OpenClaw-Plugin | apps workspace | 1 |
| deploy | deployment surface | 1 |
| docker | documentation surface | 1 |
| evaluation | top-level component | 1 |
| examples | top-level component | 1 |
| examples/data | examples workspace | 1 |
| examples/mem_cube | examples workspace | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | clean | make clean |
| test | Makefile | test | make test |
| test | Makefile | test-report | make test-report |
| test | Makefile | test-cov | make test-cov |
| quality | Makefile | format | make format |
| utility | Makefile | pre_commit | make pre_commit |
| serve-dev | Makefile | serve | make serve |
| utility | Makefile | openapi | make openapi |
| utility | pyproject.toml | memos | memos |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | langchain, langgraph |
| vectorStores | qdrant, milvus |
| modelRuntime | torch, transformers, ollama, llama |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/api/test_mcp_serve.py](../../../../sources/MemTensor__MemOS/tests/api/test_mcp_serve.py) | mcp signal |
| mcp | [src/memos/api/mcp_serve.py](../../../../sources/MemTensor__MemOS/src/memos/api/mcp_serve.py) | mcp signal |
| mcp | [examples/mem_mcp/simple_fastmcp_client.py](../../../../sources/MemTensor__MemOS/examples/mem_mcp/simple_fastmcp_client.py) | mcp signal |
| mcp | [examples/mem_mcp/simple_fastmcp_serve.py](../../../../sources/MemTensor__MemOS/examples/mem_mcp/simple_fastmcp_serve.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/MemTensor__MemOS/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/memos/templates/skill_mem_prompt.py](../../../../sources/MemTensor__MemOS/src/memos/templates/skill_mem_prompt.py) | agentRuntime signal |
| agentRuntime | [src/memos/templates/tool_mem_prompts.py](../../../../sources/MemTensor__MemOS/src/memos/templates/tool_mem_prompts.py) | agentRuntime signal |
| agentRuntime | [src/memos/plugins/hook_defs.py](../../../../sources/MemTensor__MemOS/src/memos/plugins/hook_defs.py) | agentRuntime signal |
| entrypoints | [src/memos/mem_os/main.py](../../../../sources/MemTensor__MemOS/src/memos/mem_os/main.py) | entrypoints signal |
| entrypoints | [packages/memos-schema/src/index.ts](../../../../sources/MemTensor__MemOS/packages/memos-schema/src/index.ts) | entrypoints signal |
| entrypoints | [packages/memos-core/src/index.ts](../../../../sources/MemTensor__MemOS/packages/memos-core/src/index.ts) | entrypoints signal |
| entrypoints | [packages/memos-core/src/viewer/server.ts](../../../../sources/MemTensor__MemOS/packages/memos-core/src/viewer/server.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 137 | [src/memos/mem_os/main.py](../../../../sources/MemTensor__MemOS/src/memos/mem_os/main.py)<br>[packages/memos-schema/src/index.ts](../../../../sources/MemTensor__MemOS/packages/memos-schema/src/index.ts)<br>[packages/memos-core/src/index.ts](../../../../sources/MemTensor__MemOS/packages/memos-core/src/index.ts)<br>[packages/memos-core/src/viewer/server.ts](../../../../sources/MemTensor__MemOS/packages/memos-core/src/viewer/server.ts)<br>[packages/memos-core/src/hub/server.ts](../../../../sources/MemTensor__MemOS/packages/memos-core/src/hub/server.ts)<br>[packages/adapter-base/src/index.ts](../../../../sources/MemTensor__MemOS/packages/adapter-base/src/index.ts)<br>[apps/openwork-memos-integration/packages/shared/src/index.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/packages/shared/src/index.ts)<br>[apps/openwork-memos-integration/apps/desktop/src/vite-env.d.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/apps/desktop/src/vite-env.d.ts) |
| agentRuntime | 197 | [AGENTS.md](../../../../sources/MemTensor__MemOS/AGENTS.md)<br>[src/memos/templates/skill_mem_prompt.py](../../../../sources/MemTensor__MemOS/src/memos/templates/skill_mem_prompt.py)<br>[src/memos/templates/tool_mem_prompts.py](../../../../sources/MemTensor__MemOS/src/memos/templates/tool_mem_prompts.py)<br>[src/memos/plugins/hook_defs.py](../../../../sources/MemTensor__MemOS/src/memos/plugins/hook_defs.py)<br>[src/memos/plugins/hooks.py](../../../../sources/MemTensor__MemOS/src/memos/plugins/hooks.py)<br>[src/memos/mem_scheduler/task_schedule_modules/context.py](../../../../sources/MemTensor__MemOS/src/memos/mem_scheduler/task_schedule_modules/context.py)<br>[src/memos/mem_scheduler/task_schedule_modules/handlers/memory_update_handler.py](../../../../sources/MemTensor__MemOS/src/memos/mem_scheduler/task_schedule_modules/handlers/memory_update_handler.py)<br>[src/memos/mem_scheduler/memory_manage_modules/__init__.py](../../../../sources/MemTensor__MemOS/src/memos/mem_scheduler/memory_manage_modules/__init__.py) |
| mcp | 8 | [tests/api/test_mcp_serve.py](../../../../sources/MemTensor__MemOS/tests/api/test_mcp_serve.py)<br>[src/memos/api/mcp_serve.py](../../../../sources/MemTensor__MemOS/src/memos/api/mcp_serve.py)<br>[examples/mem_mcp/simple_fastmcp_client.py](../../../../sources/MemTensor__MemOS/examples/mem_mcp/simple_fastmcp_client.py)<br>[examples/mem_mcp/simple_fastmcp_serve.py](../../../../sources/MemTensor__MemOS/examples/mem_mcp/simple_fastmcp_serve.py)<br>[docs/en/open_source/modules/mos/memos_mcp.md](../../../../sources/MemTensor__MemOS/docs/en/open_source/modules/mos/memos_mcp.md)<br>[docs/en/open_source/best_practice/mcp_for_cozespace_and_tools.md](../../../../sources/MemTensor__MemOS/docs/en/open_source/best_practice/mcp_for_cozespace_and_tools.md)<br>[docs/cn/open_source/modules/mos/memos_mcp.md](../../../../sources/MemTensor__MemOS/docs/cn/open_source/modules/mos/memos_mcp.md)<br>[docs/cn/open_source/best_practice/mcp_for_cozespace_and_tools.md](../../../../sources/MemTensor__MemOS/docs/cn/open_source/best_practice/mcp_for_cozespace_and_tools.md) |
| retrieval | 325 | [tests/mem_reader/test_coarse_memory_type.py](../../../../sources/MemTensor__MemOS/tests/mem_reader/test_coarse_memory_type.py)<br>[tests/mem_reader/test_memory.py](../../../../sources/MemTensor__MemOS/tests/mem_reader/test_memory.py)<br>[tests/graph_dbs/__init__.py](../../../../sources/MemTensor__MemOS/tests/graph_dbs/__init__.py)<br>[tests/graph_dbs/graph_dbs.py](../../../../sources/MemTensor__MemOS/tests/graph_dbs/graph_dbs.py)<br>[tests/graph_dbs/test_neo4j_vector_search.py](../../../../sources/MemTensor__MemOS/tests/graph_dbs/test_neo4j_vector_search.py)<br>[tests/graph_dbs/test_search_return_fields.py](../../../../sources/MemTensor__MemOS/tests/graph_dbs/test_search_return_fields.py)<br>[tests/configs/test_memory.py](../../../../sources/MemTensor__MemOS/tests/configs/test_memory.py)<br>[tests/api/test_memory_handler_delete.py](../../../../sources/MemTensor__MemOS/tests/api/test_memory_handler_delete.py) |
| spec | 15 | [docs/en/open_source/home/architecture.md](../../../../sources/MemTensor__MemOS/docs/en/open_source/home/architecture.md)<br>[docs/en/open_source/best_practice/memory_structure_design.md](../../../../sources/MemTensor__MemOS/docs/en/open_source/best_practice/memory_structure_design.md)<br>[docs/cn/open_source/home/architecture.md](../../../../sources/MemTensor__MemOS/docs/cn/open_source/home/architecture.md)<br>[docs/cn/open_source/best_practice/memory_structure_design.md](../../../../sources/MemTensor__MemOS/docs/cn/open_source/best_practice/memory_structure_design.md)<br>[docker/requirements-full.txt](../../../../sources/MemTensor__MemOS/docker/requirements-full.txt)<br>[docker/requirements.txt](../../../../sources/MemTensor__MemOS/docker/requirements.txt)<br>[apps/openwork-memos-integration/apps/desktop/e2e/specs/execution.spec.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/apps/desktop/e2e/specs/execution.spec.ts)<br>[apps/openwork-memos-integration/apps/desktop/e2e/specs/home.spec.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/apps/desktop/e2e/specs/home.spec.ts) |
| eval | 421 | [tests/__init__.py](../../../../sources/MemTensor__MemOS/tests/__init__.py)<br>[tests/test_add_stage_logging.py](../../../../sources/MemTensor__MemOS/tests/test_add_stage_logging.py)<br>[tests/test_cli.py](../../../../sources/MemTensor__MemOS/tests/test_cli.py)<br>[tests/test_deprecation.py](../../../../sources/MemTensor__MemOS/tests/test_deprecation.py)<br>[tests/test_hello_world.py](../../../../sources/MemTensor__MemOS/tests/test_hello_world.py)<br>[tests/test_log.py](../../../../sources/MemTensor__MemOS/tests/test_log.py)<br>[tests/test_settings.py](../../../../sources/MemTensor__MemOS/tests/test_settings.py)<br>[tests/test_utils_timing.py](../../../../sources/MemTensor__MemOS/tests/test_utils_timing.py) |
| security | 22 | [src/memos/api/middleware/auth.py](../../../../sources/MemTensor__MemOS/src/memos/api/middleware/auth.py)<br>[packages/memos-core/src/hub/auth.ts](../../../../sources/MemTensor__MemOS/packages/memos-core/src/hub/auth.ts)<br>[apps/openwork-memos-integration/SECURITY.md](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/SECURITY.md)<br>[apps/openwork-memos-integration/packages/shared/src/types/auth.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/packages/shared/src/types/auth.ts)<br>[apps/openwork-memos-integration/packages/shared/src/types/permission.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/packages/shared/src/types/permission.ts)<br>[apps/openwork-memos-integration/apps/desktop/src/main/permission-api.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/apps/desktop/src/main/permission-api.ts)<br>[apps/openwork-memos-integration/apps/desktop/skills/file-permission/package.json](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/apps/desktop/skills/file-permission/package.json)<br>[apps/openwork-memos-integration/apps/desktop/skills/file-permission/tsconfig.json](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/apps/desktop/skills/file-permission/tsconfig.json) |
| ci | 5 | [.github/workflows/memos-local-plugin-publish.yml](../../../../sources/MemTensor__MemOS/.github/workflows/memos-local-plugin-publish.yml)<br>[.github/workflows/openclaw-plugin-publish.yml](../../../../sources/MemTensor__MemOS/.github/workflows/openclaw-plugin-publish.yml)<br>[.github/workflows/python-release.yml](../../../../sources/MemTensor__MemOS/.github/workflows/python-release.yml)<br>[.github/workflows/python-tests.yml](../../../../sources/MemTensor__MemOS/.github/workflows/python-tests.yml)<br>[.github/workflows/stale.yml](../../../../sources/MemTensor__MemOS/.github/workflows/stale.yml) |
| container | 16 | [Dockerfile](../../../../sources/MemTensor__MemOS/Dockerfile)<br>[docker/docker-compose.yml](../../../../sources/MemTensor__MemOS/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/MemTensor__MemOS/docker/Dockerfile)<br>[docker/Dockerfile.krolik](../../../../sources/MemTensor__MemOS/docker/Dockerfile.krolik)<br>[deploy/helm/Chart.yaml](../../../../sources/MemTensor__MemOS/deploy/helm/Chart.yaml)<br>[deploy/helm/README.md](../../../../sources/MemTensor__MemOS/deploy/helm/README.md)<br>[deploy/helm/values-example.yaml](../../../../sources/MemTensor__MemOS/deploy/helm/values-example.yaml)<br>[deploy/helm/values.yaml](../../../../sources/MemTensor__MemOS/deploy/helm/values.yaml) |
| instruction | 8 | [AGENTS.md](../../../../sources/MemTensor__MemOS/AGENTS.md)<br>[CLAUDE.md](../../../../sources/MemTensor__MemOS/CLAUDE.md)<br>[apps/openwork-memos-integration/CLAUDE.md](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/CLAUDE.md)<br>[.codex/agents/backend-dev.toml](../../../../sources/MemTensor__MemOS/.codex/agents/backend-dev.toml)<br>[.codex/agents/code-reviewer.toml](../../../../sources/MemTensor__MemOS/.codex/agents/code-reviewer.toml)<br>[.codex/agents/design-reviewer.toml](../../../../sources/MemTensor__MemOS/.codex/agents/design-reviewer.toml)<br>[.codex/agents/explorer.toml](../../../../sources/MemTensor__MemOS/.codex/agents/explorer.toml)<br>[.codex/agents/integration-tester.toml](../../../../sources/MemTensor__MemOS/.codex/agents/integration-tester.toml) |
| docs | 200 | [README.md](../../../../sources/MemTensor__MemOS/README.md)<br>[examples/README.md](../../../../sources/MemTensor__MemOS/examples/README.md)<br>[examples/mem_cube/_deprecated/README.md](../../../../sources/MemTensor__MemOS/examples/mem_cube/_deprecated/README.md)<br>[examples/data/mem_cube_2/README.md](../../../../sources/MemTensor__MemOS/examples/data/mem_cube_2/README.md)<br>[docs/en/openclaw/changes.md](../../../../sources/MemTensor__MemOS/docs/en/openclaw/changes.md)<br>[docs/en/openclaw/guide.md](../../../../sources/MemTensor__MemOS/docs/en/openclaw/guide.md)<br>[docs/en/openclaw/hermes_local_plugin.md](../../../../sources/MemTensor__MemOS/docs/en/openclaw/hermes_local_plugin.md)<br>[docs/en/openclaw/local_plugin.md](../../../../sources/MemTensor__MemOS/docs/en/openclaw/local_plugin.md) |
| config | 23 | [Makefile](../../../../sources/MemTensor__MemOS/Makefile)<br>[poetry.lock](../../../../sources/MemTensor__MemOS/poetry.lock)<br>[pyproject.toml](../../../../sources/MemTensor__MemOS/pyproject.toml)<br>[uv.lock](../../../../sources/MemTensor__MemOS/uv.lock)<br>[docker/requirements-full.txt](../../../../sources/MemTensor__MemOS/docker/requirements-full.txt)<br>[docker/requirements.txt](../../../../sources/MemTensor__MemOS/docker/requirements.txt)<br>[apps/openwork-memos-integration/package.json](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/package.json)<br>[apps/openwork-memos-integration/pnpm-workspace.yaml](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/pnpm-workspace.yaml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 421 | [tests/__init__.py](../../../../sources/MemTensor__MemOS/tests/__init__.py)<br>[tests/test_add_stage_logging.py](../../../../sources/MemTensor__MemOS/tests/test_add_stage_logging.py)<br>[tests/test_cli.py](../../../../sources/MemTensor__MemOS/tests/test_cli.py)<br>[tests/test_deprecation.py](../../../../sources/MemTensor__MemOS/tests/test_deprecation.py)<br>[tests/test_hello_world.py](../../../../sources/MemTensor__MemOS/tests/test_hello_world.py)<br>[tests/test_log.py](../../../../sources/MemTensor__MemOS/tests/test_log.py) |
| CI workflow | 5 | [.github/workflows/memos-local-plugin-publish.yml](../../../../sources/MemTensor__MemOS/.github/workflows/memos-local-plugin-publish.yml)<br>[.github/workflows/openclaw-plugin-publish.yml](../../../../sources/MemTensor__MemOS/.github/workflows/openclaw-plugin-publish.yml)<br>[.github/workflows/python-release.yml](../../../../sources/MemTensor__MemOS/.github/workflows/python-release.yml)<br>[.github/workflows/python-tests.yml](../../../../sources/MemTensor__MemOS/.github/workflows/python-tests.yml)<br>[.github/workflows/stale.yml](../../../../sources/MemTensor__MemOS/.github/workflows/stale.yml) |
| 컨테이너/배포 | 16 | [Dockerfile](../../../../sources/MemTensor__MemOS/Dockerfile)<br>[docker/docker-compose.yml](../../../../sources/MemTensor__MemOS/docker/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/MemTensor__MemOS/docker/Dockerfile)<br>[docker/Dockerfile.krolik](../../../../sources/MemTensor__MemOS/docker/Dockerfile.krolik)<br>[deploy/helm/Chart.yaml](../../../../sources/MemTensor__MemOS/deploy/helm/Chart.yaml)<br>[deploy/helm/README.md](../../../../sources/MemTensor__MemOS/deploy/helm/README.md) |
| 보안/정책 | 22 | [src/memos/api/middleware/auth.py](../../../../sources/MemTensor__MemOS/src/memos/api/middleware/auth.py)<br>[packages/memos-core/src/hub/auth.ts](../../../../sources/MemTensor__MemOS/packages/memos-core/src/hub/auth.ts)<br>[apps/openwork-memos-integration/SECURITY.md](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/SECURITY.md)<br>[apps/openwork-memos-integration/packages/shared/src/types/auth.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/packages/shared/src/types/auth.ts)<br>[apps/openwork-memos-integration/packages/shared/src/types/permission.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/packages/shared/src/types/permission.ts)<br>[apps/openwork-memos-integration/apps/desktop/src/main/permission-api.ts](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/apps/desktop/src/main/permission-api.ts) |
| 에이전트 지시문 | 8 | [AGENTS.md](../../../../sources/MemTensor__MemOS/AGENTS.md)<br>[CLAUDE.md](../../../../sources/MemTensor__MemOS/CLAUDE.md)<br>[apps/openwork-memos-integration/CLAUDE.md](../../../../sources/MemTensor__MemOS/apps/openwork-memos-integration/CLAUDE.md)<br>[.codex/agents/backend-dev.toml](../../../../sources/MemTensor__MemOS/.codex/agents/backend-dev.toml)<br>[.codex/agents/code-reviewer.toml](../../../../sources/MemTensor__MemOS/.codex/agents/code-reviewer.toml)<br>[.codex/agents/design-reviewer.toml](../../../../sources/MemTensor__MemOS/.codex/agents/design-reviewer.toml) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/api/test_mcp_serve.py`, `src/memos/api/mcp_serve.py`, `examples/mem_mcp/simple_fastmcp_client.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/memos/mem_os/main.py`, `packages/memos-schema/src/index.ts`, `packages/memos-core/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `src/memos/templates/skill_mem_prompt.py`, `src/memos/templates/tool_mem_prompts.py`.
4. retrieval/memory/indexing 확인: `tests/mem_reader/test_coarse_memory_type.py`, `tests/mem_reader/test_memory.py`, `tests/graph_dbs/__init__.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/test_add_stage_logging.py`, `tests/test_cli.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Self evolving memory OS for LLM & AI Agents ultra persistent memory, hybrid retrieval, and cross task skill reuse, with . 핵심 구조 신호는 TypeScript, pyproject.toml, Dockerfile, Makefile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
