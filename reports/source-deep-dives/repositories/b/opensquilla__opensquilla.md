# opensquilla/opensquilla 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

OpenSquilla — Token-Efficient AI Agent with same budget, higher intelligence density

## 요약

- 조사 단위: `sources/opensquilla__opensquilla` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,709 files, 305 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp_server/test_bridge.py, tests/test_mcp_server/test_cli.py, tests/test_mcp_server/test_fastmcp_app.py이고, 의존성 단서는 claude, codex, mcp, pydantic, typer, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | opensquilla/opensquilla |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 4296 |
| Forks | 335 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/opensquilla__opensquilla](../../../../sources/opensquilla__opensquilla) |
| 기존 보고서 | [reports/global-trending/repositories/opensquilla__opensquilla.md](../../../global-trending/repositories/opensquilla__opensquilla.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1709 / 305 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, assets, docs, Formula, migrations, scripts, service-units, src, tests |
| 상위 확장자 | .py: 1271, .md: 179, .json: 130, .js: 24, .css: 19, .yml: 12, .txt: 11, .sh: 9, (none): 5, .j2: 4, .ps1: 4, .pkl: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 118 |
| src | source boundary | 75 |
| docs | documentation surface | 37 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| Formula | top-level component | 1 |
| migrations | top-level component | 1 |
| scripts | top-level component | 1 |
| service-units | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | opensquilla | opensquilla |
| utility | pyproject.toml | gateway | gateway |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp, codex |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/test_mcp_server/test_bridge.py](../../../../sources/opensquilla__opensquilla/tests/test_mcp_server/test_bridge.py) | mcp signal |
| mcp | [tests/test_mcp_server/test_cli.py](../../../../sources/opensquilla__opensquilla/tests/test_mcp_server/test_cli.py) | mcp signal |
| mcp | [tests/test_mcp_server/test_fastmcp_app.py](../../../../sources/opensquilla__opensquilla/tests/test_mcp_server/test_fastmcp_app.py) | mcp signal |
| mcp | [tests/test_mcp_server/test_gateway_client.py](../../../../sources/opensquilla__opensquilla/tests/test_mcp_server/test_gateway_client.py) | mcp signal |
| agentRuntime | [tests/fixtures/meta_skill_inputs/skill_creator/request.txt](../../../../sources/opensquilla__opensquilla/tests/fixtures/meta_skill_inputs/skill_creator/request.txt) | agentRuntime signal |
| agentRuntime | [tests/fixtures/meta_skill_inputs/lifestyle_experience/personal_finance_radar/context.md](../../../../sources/opensquilla__opensquilla/tests/fixtures/meta_skill_inputs/lifestyle_experience/personal_finance_radar/context.md) | agentRuntime signal |
| agentRuntime | [tests/fixtures/agent_chains/synthetic_cases/delegated_research.json](../../../../sources/opensquilla__opensquilla/tests/fixtures/agent_chains/synthetic_cases/delegated_research.json) | agentRuntime signal |
| agentRuntime | [tests/fixtures/agent_chains/synthetic_cases/local_diagnosis.json](../../../../sources/opensquilla__opensquilla/tests/fixtures/agent_chains/synthetic_cases/local_diagnosis.json) | agentRuntime signal |
| entrypoints | [tests/fixtures/meta_skill_inputs/migration_assistant/cjs-to-esm-package/src/index.cjs](../../../../sources/opensquilla__opensquilla/tests/fixtures/meta_skill_inputs/migration_assistant/cjs-to-esm-package/src/index.cjs) | entrypoints signal |
| entrypoints | [tests/fixtures/meta_skill_inputs/code_review_dirty_repo/src/app.py](../../../../sources/opensquilla__opensquilla/tests/fixtures/meta_skill_inputs/code_review_dirty_repo/src/app.py) | entrypoints signal |
| entrypoints | [src/opensquilla/mcp_server/server.py](../../../../sources/opensquilla__opensquilla/src/opensquilla/mcp_server/server.py) | entrypoints signal |
| entrypoints | [src/opensquilla/cli/main.py](../../../../sources/opensquilla__opensquilla/src/opensquilla/cli/main.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [tests/fixtures/meta_skill_inputs/migration_assistant/cjs-to-esm-package/src/index.cjs](../../../../sources/opensquilla__opensquilla/tests/fixtures/meta_skill_inputs/migration_assistant/cjs-to-esm-package/src/index.cjs)<br>[tests/fixtures/meta_skill_inputs/code_review_dirty_repo/src/app.py](../../../../sources/opensquilla__opensquilla/tests/fixtures/meta_skill_inputs/code_review_dirty_repo/src/app.py)<br>[src/opensquilla/mcp_server/server.py](../../../../sources/opensquilla__opensquilla/src/opensquilla/mcp_server/server.py)<br>[src/opensquilla/cli/main.py](../../../../sources/opensquilla__opensquilla/src/opensquilla/cli/main.py) |
| agentRuntime | 358 | [tests/fixtures/meta_skill_inputs/skill_creator/request.txt](../../../../sources/opensquilla__opensquilla/tests/fixtures/meta_skill_inputs/skill_creator/request.txt)<br>[tests/fixtures/meta_skill_inputs/lifestyle_experience/personal_finance_radar/context.md](../../../../sources/opensquilla__opensquilla/tests/fixtures/meta_skill_inputs/lifestyle_experience/personal_finance_radar/context.md)<br>[tests/fixtures/agent_chains/synthetic_cases/delegated_research.json](../../../../sources/opensquilla__opensquilla/tests/fixtures/agent_chains/synthetic_cases/delegated_research.json)<br>[tests/fixtures/agent_chains/synthetic_cases/local_diagnosis.json](../../../../sources/opensquilla__opensquilla/tests/fixtures/agent_chains/synthetic_cases/local_diagnosis.json)<br>[tests/fixtures/agent_chains/synthetic_cases/tool_recovery.json](../../../../sources/opensquilla__opensquilla/tests/fixtures/agent_chains/synthetic_cases/tool_recovery.json)<br>[src/opensquilla/context_budget.py](../../../../sources/opensquilla__opensquilla/src/opensquilla/context_budget.py)<br>[src/opensquilla/tool_boundary.py](../../../../sources/opensquilla__opensquilla/src/opensquilla/tool_boundary.py)<br>[src/opensquilla/tools/__init__.py](../../../../sources/opensquilla__opensquilla/src/opensquilla/tools/__init__.py) |
| mcp | 18 | [tests/test_mcp_server/test_bridge.py](../../../../sources/opensquilla__opensquilla/tests/test_mcp_server/test_bridge.py)<br>[tests/test_mcp_server/test_cli.py](../../../../sources/opensquilla__opensquilla/tests/test_mcp_server/test_cli.py)<br>[tests/test_mcp_server/test_fastmcp_app.py](../../../../sources/opensquilla__opensquilla/tests/test_mcp_server/test_fastmcp_app.py)<br>[tests/test_mcp_server/test_gateway_client.py](../../../../sources/opensquilla__opensquilla/tests/test_mcp_server/test_gateway_client.py)<br>[tests/test_mcp_server/test_protocol_smoke.py](../../../../sources/opensquilla__opensquilla/tests/test_mcp_server/test_protocol_smoke.py)<br>[tests/test_mcp/test_discovery_lifecycle.py](../../../../sources/opensquilla__opensquilla/tests/test_mcp/test_discovery_lifecycle.py)<br>[tests/test_mcp/test_stdio_client.py](../../../../sources/opensquilla__opensquilla/tests/test_mcp/test_stdio_client.py)<br>[src/opensquilla/mcp_server/__init__.py](../../../../sources/opensquilla__opensquilla/src/opensquilla/mcp_server/__init__.py) |
| retrieval | 82 | [tests/test_memory_archive.py](../../../../sources/opensquilla__opensquilla/tests/test_memory_archive.py)<br>[tests/test_memory_checkpoint.py](../../../../sources/opensquilla__opensquilla/tests/test_memory_checkpoint.py)<br>[tests/test_memory_dream_apply.py](../../../../sources/opensquilla__opensquilla/tests/test_memory_dream_apply.py)<br>[tests/test_memory_dream_evidence.py](../../../../sources/opensquilla__opensquilla/tests/test_memory_dream_evidence.py)<br>[tests/test_memory_dream_factory.py](../../../../sources/opensquilla__opensquilla/tests/test_memory_dream_factory.py)<br>[tests/test_memory_dream_paths.py](../../../../sources/opensquilla__opensquilla/tests/test_memory_dream_paths.py)<br>[tests/test_memory_dream_ranking.py](../../../../sources/opensquilla__opensquilla/tests/test_memory_dream_ranking.py)<br>[tests/test_memory_dream_runner.py](../../../../sources/opensquilla__opensquilla/tests/test_memory_dream_runner.py) |
| spec | 5 | [tests/test_memory_sync_manager_architecture.py](../../../../sources/opensquilla__opensquilla/tests/test_memory_sync_manager_architecture.py)<br>[tests/test_engine/test_prompt_design_stage1.py](../../../../sources/opensquilla__opensquilla/tests/test_engine/test_prompt_design_stage1.py)<br>[tests/test_ci/test_architecture_import_contracts.py](../../../../sources/opensquilla__opensquilla/tests/test_ci/test_architecture_import_contracts.py)<br>[src/opensquilla/skills/meta/architecture.drawio](../../../../sources/opensquilla__opensquilla/src/opensquilla/skills/meta/architecture.drawio)<br>[src/opensquilla/skills/meta/architecture.puml](../../../../sources/opensquilla__opensquilla/src/opensquilla/skills/meta/architecture.puml) |
| eval | 663 | [tests/conftest.py](../../../../sources/opensquilla__opensquilla/tests/conftest.py)<br>[tests/test_agent_cmd_no_key.py](../../../../sources/opensquilla__opensquilla/tests/test_agent_cmd_no_key.py)<br>[tests/test_artifacts.py](../../../../sources/opensquilla__opensquilla/tests/test_artifacts.py)<br>[tests/test_bundled_voice_skills.py](../../../../sources/opensquilla__opensquilla/tests/test_bundled_voice_skills.py)<br>[tests/test_compose_yaml_shape.py](../../../../sources/opensquilla__opensquilla/tests/test_compose_yaml_shape.py)<br>[tests/test_context_budget_governor.py](../../../../sources/opensquilla__opensquilla/tests/test_context_budget_governor.py)<br>[tests/test_core_lightweight_contracts.py](../../../../sources/opensquilla__opensquilla/tests/test_core_lightweight_contracts.py)<br>[tests/test_execution_status_contract.py](../../../../sources/opensquilla__opensquilla/tests/test_execution_status_contract.py) |
| security | 67 | [SECURITY.md](../../../../sources/opensquilla__opensquilla/SECURITY.md)<br>[tests/test_skills_hub_installer_security.py](../../../../sources/opensquilla__opensquilla/tests/test_skills_hub_installer_security.py)<br>[tests/unit/cli/repl/test_slash_policy.py](../../../../sources/opensquilla__opensquilla/tests/unit/cli/repl/test_slash_policy.py)<br>[tests/test_tools/test_git_workdir_policy.py](../../../../sources/opensquilla__opensquilla/tests/test_tools/test_git_workdir_policy.py)<br>[tests/test_tools/test_path_policy.py](../../../../sources/opensquilla__opensquilla/tests/test_tools/test_path_policy.py)<br>[tests/test_tools/test_policy_agents.py](../../../../sources/opensquilla__opensquilla/tests/test_tools/test_policy_agents.py)<br>[tests/test_tools/test_policy_config_boundary.py](../../../../sources/opensquilla__opensquilla/tests/test_tools/test_policy_config_boundary.py)<br>[tests/test_tools/test_policy_runtime_boundary.py](../../../../sources/opensquilla__opensquilla/tests/test_tools/test_policy_runtime_boundary.py) |
| ci | 8 | [.github/workflows/ci.yml](../../../../sources/opensquilla__opensquilla/.github/workflows/ci.yml)<br>[.github/workflows/issue-link-sync.yml](../../../../sources/opensquilla__opensquilla/.github/workflows/issue-link-sync.yml)<br>[.github/workflows/live-release-e2e.yml](../../../../sources/opensquilla__opensquilla/.github/workflows/live-release-e2e.yml)<br>[.github/workflows/llm-e2e.yml](../../../../sources/opensquilla__opensquilla/.github/workflows/llm-e2e.yml)<br>[.github/workflows/pr-body-lint.yml](../../../../sources/opensquilla__opensquilla/.github/workflows/pr-body-lint.yml)<br>[.github/workflows/pr-target-branch.yml](../../../../sources/opensquilla__opensquilla/.github/workflows/pr-target-branch.yml)<br>[.github/workflows/webui-browser-smoke.yml](../../../../sources/opensquilla__opensquilla/.github/workflows/webui-browser-smoke.yml)<br>[.github/workflows/wheelhouse-release.yml](../../../../sources/opensquilla__opensquilla/.github/workflows/wheelhouse-release.yml) |
| container | 3 | [compose.yaml](../../../../sources/opensquilla__opensquilla/compose.yaml)<br>[Dockerfile](../../../../sources/opensquilla__opensquilla/Dockerfile)<br>[src/opensquilla/plugins/tokenjuice/rules/devops/docker-compose.json](../../../../sources/opensquilla__opensquilla/src/opensquilla/plugins/tokenjuice/rules/devops/docker-compose.json) |
| instruction | 2 | [src/opensquilla/identity/templates/bootstrap/AGENTS.md](../../../../sources/opensquilla__opensquilla/src/opensquilla/identity/templates/bootstrap/AGENTS.md)<br>[docs/agents.md](../../../../sources/opensquilla__opensquilla/docs/agents.md) |
| docs | 43 | [README.md](../../../../sources/opensquilla__opensquilla/README.md)<br>[README.product.md](../../../../sources/opensquilla__opensquilla/README.product.md)<br>[README.release.md](../../../../sources/opensquilla__opensquilla/README.release.md)<br>[tests/fixtures/meta_skill_inputs/README.md](../../../../sources/opensquilla__opensquilla/tests/fixtures/meta_skill_inputs/README.md)<br>[tests/fixtures/meta_skill_inputs/lifestyle_experience/README.md](../../../../sources/opensquilla__opensquilla/tests/fixtures/meta_skill_inputs/lifestyle_experience/README.md)<br>[tests/fixtures/meta_skill_inputs/code_review_dirty_repo/README.md](../../../../sources/opensquilla__opensquilla/tests/fixtures/meta_skill_inputs/code_review_dirty_repo/README.md)<br>[docs/agents.md](../../../../sources/opensquilla__opensquilla/docs/agents.md)<br>[docs/approvals-and-permissions.md](../../../../sources/opensquilla__opensquilla/docs/approvals-and-permissions.md) |
| config | 3 | [pyproject.toml](../../../../sources/opensquilla__opensquilla/pyproject.toml)<br>[uv.lock](../../../../sources/opensquilla__opensquilla/uv.lock)<br>[tests/fixtures/meta_skill_inputs/migration_assistant/cjs-to-esm-package/package.json](../../../../sources/opensquilla__opensquilla/tests/fixtures/meta_skill_inputs/migration_assistant/cjs-to-esm-package/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 663 | [tests/conftest.py](../../../../sources/opensquilla__opensquilla/tests/conftest.py)<br>[tests/test_agent_cmd_no_key.py](../../../../sources/opensquilla__opensquilla/tests/test_agent_cmd_no_key.py)<br>[tests/test_artifacts.py](../../../../sources/opensquilla__opensquilla/tests/test_artifacts.py)<br>[tests/test_bundled_voice_skills.py](../../../../sources/opensquilla__opensquilla/tests/test_bundled_voice_skills.py)<br>[tests/test_compose_yaml_shape.py](../../../../sources/opensquilla__opensquilla/tests/test_compose_yaml_shape.py)<br>[tests/test_context_budget_governor.py](../../../../sources/opensquilla__opensquilla/tests/test_context_budget_governor.py) |
| CI workflow | 8 | [.github/workflows/ci.yml](../../../../sources/opensquilla__opensquilla/.github/workflows/ci.yml)<br>[.github/workflows/issue-link-sync.yml](../../../../sources/opensquilla__opensquilla/.github/workflows/issue-link-sync.yml)<br>[.github/workflows/live-release-e2e.yml](../../../../sources/opensquilla__opensquilla/.github/workflows/live-release-e2e.yml)<br>[.github/workflows/llm-e2e.yml](../../../../sources/opensquilla__opensquilla/.github/workflows/llm-e2e.yml)<br>[.github/workflows/pr-body-lint.yml](../../../../sources/opensquilla__opensquilla/.github/workflows/pr-body-lint.yml)<br>[.github/workflows/pr-target-branch.yml](../../../../sources/opensquilla__opensquilla/.github/workflows/pr-target-branch.yml) |
| 컨테이너/배포 | 3 | [compose.yaml](../../../../sources/opensquilla__opensquilla/compose.yaml)<br>[Dockerfile](../../../../sources/opensquilla__opensquilla/Dockerfile)<br>[src/opensquilla/plugins/tokenjuice/rules/devops/docker-compose.json](../../../../sources/opensquilla__opensquilla/src/opensquilla/plugins/tokenjuice/rules/devops/docker-compose.json) |
| 보안/정책 | 67 | [SECURITY.md](../../../../sources/opensquilla__opensquilla/SECURITY.md)<br>[tests/test_skills_hub_installer_security.py](../../../../sources/opensquilla__opensquilla/tests/test_skills_hub_installer_security.py)<br>[tests/unit/cli/repl/test_slash_policy.py](../../../../sources/opensquilla__opensquilla/tests/unit/cli/repl/test_slash_policy.py)<br>[tests/test_tools/test_git_workdir_policy.py](../../../../sources/opensquilla__opensquilla/tests/test_tools/test_git_workdir_policy.py)<br>[tests/test_tools/test_path_policy.py](../../../../sources/opensquilla__opensquilla/tests/test_tools/test_path_policy.py)<br>[tests/test_tools/test_policy_agents.py](../../../../sources/opensquilla__opensquilla/tests/test_tools/test_policy_agents.py) |
| 에이전트 지시문 | 2 | [src/opensquilla/identity/templates/bootstrap/AGENTS.md](../../../../sources/opensquilla__opensquilla/src/opensquilla/identity/templates/bootstrap/AGENTS.md)<br>[docs/agents.md](../../../../sources/opensquilla__opensquilla/docs/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_mcp_server/test_bridge.py`, `tests/test_mcp_server/test_cli.py`, `tests/test_mcp_server/test_fastmcp_app.py`.
2. entrypoint를 따라 실행 흐름 확인: `tests/fixtures/meta_skill_inputs/migration_assistant/cjs-to-esm-package/src/index.cjs`, `tests/fixtures/meta_skill_inputs/code_review_dirty_repo/src/app.py`, `src/opensquilla/mcp_server/server.py`.
3. agent/tool runtime 매핑: `tests/fixtures/meta_skill_inputs/skill_creator/request.txt`, `tests/fixtures/meta_skill_inputs/lifestyle_experience/personal_finance_radar/context.md`, `tests/fixtures/agent_chains/synthetic_cases/delegated_research.json`.
4. retrieval/memory/indexing 확인: `tests/test_memory_archive.py`, `tests/test_memory_checkpoint.py`, `tests/test_memory_dream_apply.py`.
5. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/test_agent_cmd_no_key.py`, `tests/test_artifacts.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 OpenSquilla — Token Efficient AI Agent with same budget, higher intelligence density. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, LICENSE, mcp이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
