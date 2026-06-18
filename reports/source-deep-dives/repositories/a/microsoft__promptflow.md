# microsoft/promptflow Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 4036 files, 952 directories.

## 요약

- 조사 단위: `sources/microsoft__promptflow` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 4,036 files, 952 directories, depth score 130, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/promptflow-tracing/promptflow/tracing/contracts/context_manager_proxy.py, src/promptflow-tools/promptflow/tools/__init__.py, src/promptflow-tools/promptflow/tools/aoai_gpt4v.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | microsoft/promptflow |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/microsoft__promptflow](../../../../sources/microsoft__promptflow) |
| Existing report | [reports/clone-structures/microsoft__promptflow.md](../../../clone-structures/microsoft__promptflow.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 4036 / 952 |
| Max observed depth | 10 |
| Top directories | .devcontainer, .github, benchmark, docs, examples, migration-guide, scripts, src |
| Top extensions | .py: 1637, .yaml: 565, .png: 276, .md: 273, .jsonl: 245, .jinja2: 224, .yml: 179, .json: 169, .txt: 146, (none): 45, .example: 44, .prompty: 43 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 225 |
| examples/tutorials | examples workspace | 8 |
| examples/flows | examples workspace | 3 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| benchmark | validation surface | 1 |
| docs | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/requirements.txt | examples workspace | 1 |
| migration-guide | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [src/promptflow-tracing/promptflow/tracing/contracts/context_manager_proxy.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/promptflow/tracing/contracts/context_manager_proxy.py) | agentRuntime signal |
| agentRuntime | [src/promptflow-tools/promptflow/tools/__init__.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [src/promptflow-tools/promptflow/tools/aoai_gpt4v.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/aoai_gpt4v.py) | agentRuntime signal |
| agentRuntime | [src/promptflow-tools/promptflow/tools/aoai.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/aoai.py) | agentRuntime signal |
| entrypoints | [src/promptflow-devkit/promptflow/_sdk/data/executable/main.py](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_sdk/data/executable/main.py) | entrypoints signal |
| entrypoints | [src/promptflow/tests/test_configs/flows/script_with_import/dummy_utils/main.py](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/script_with_import/dummy_utils/main.py) | entrypoints signal |
| entrypoints | [scripts/dev-setup/main.py](../../../../sources/microsoft__promptflow/scripts/dev-setup/main.py) | entrypoints signal |
| entrypoints | [examples/flows/standard/gen-docstring/main.py](../../../../sources/microsoft__promptflow/examples/flows/standard/gen-docstring/main.py) | entrypoints signal |
| config | [src/promptflow-tracing/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-tracing/pyproject.toml) | config signal |
| config | [src/promptflow-tools/requirements.txt](../../../../sources/microsoft__promptflow/src/promptflow-tools/requirements.txt) | config signal |
| config | [src/promptflow-recording/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-recording/pyproject.toml) | config signal |
| config | [src/promptflow-rag/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-rag/pyproject.toml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [src/promptflow-devkit/promptflow/_sdk/data/executable/main.py](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_sdk/data/executable/main.py)<br>[src/promptflow/tests/test_configs/flows/script_with_import/dummy_utils/main.py](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/script_with_import/dummy_utils/main.py)<br>[scripts/dev-setup/main.py](../../../../sources/microsoft__promptflow/scripts/dev-setup/main.py)<br>[examples/flows/standard/gen-docstring/main.py](../../../../sources/microsoft__promptflow/examples/flows/standard/gen-docstring/main.py)<br>[examples/flows/chat/chat-with-pdf-maf/chat_with_pdf/main.py](../../../../sources/microsoft__promptflow/examples/flows/chat/chat-with-pdf-maf/chat_with_pdf/main.py)<br>[examples/flows/chat/chat-with-pdf/chat_with_pdf/main.py](../../../../sources/microsoft__promptflow/examples/flows/chat/chat-with-pdf/chat_with_pdf/main.py)<br>[benchmark/promptflow-serve/mock_api/main.py](../../../../sources/microsoft__promptflow/benchmark/promptflow-serve/mock_api/main.py) |
| agentRuntime | 430 | [src/promptflow-tracing/promptflow/tracing/contracts/context_manager_proxy.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/promptflow/tracing/contracts/context_manager_proxy.py)<br>[src/promptflow-tools/promptflow/tools/__init__.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/__init__.py)<br>[src/promptflow-tools/promptflow/tools/aoai_gpt4v.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/aoai_gpt4v.py)<br>[src/promptflow-tools/promptflow/tools/aoai.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/aoai.py)<br>[src/promptflow-tools/promptflow/tools/azure_content_safety.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/azure_content_safety.py)<br>[src/promptflow-tools/promptflow/tools/common.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/common.py)<br>[src/promptflow-tools/promptflow/tools/embedding.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/embedding.py)<br>[src/promptflow-tools/promptflow/tools/exception.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/exception.py) |
| mcp | 0 | not obvious |
| retrieval | 131 | [src/promptflow-tools/tests/test_embedding.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/tests/test_embedding.py)<br>[src/promptflow-tools/promptflow/tools/embedding.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/embedding.py)<br>[src/promptflow-tools/promptflow/tools/yamls/embedding.yaml](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/yamls/embedding.yaml)<br>[src/promptflow-rag/CHANGELOG.md](../../../../sources/microsoft__promptflow/src/promptflow-rag/CHANGELOG.md)<br>[src/promptflow-rag/MANIFEST.in](../../../../sources/microsoft__promptflow/src/promptflow-rag/MANIFEST.in)<br>[src/promptflow-rag/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-rag/pyproject.toml)<br>[src/promptflow-rag/README.md](../../../../sources/microsoft__promptflow/src/promptflow-rag/README.md)<br>[src/promptflow-rag/requirements.txt](../../../../sources/microsoft__promptflow/src/promptflow-rag/requirements.txt) |
| spec | 149 | [src/promptflow-tools/requirements.txt](../../../../sources/microsoft__promptflow/src/promptflow-tools/requirements.txt)<br>[src/promptflow-recording/recordings/azure/test_connection_operations_TestConnectionOperations_test_list_connection_spec.yaml](../../../../sources/microsoft__promptflow/src/promptflow-recording/recordings/azure/test_connection_operations_TestConnectionOperations_test_list_connection_spec.yaml)<br>[src/promptflow-recording/recordings/azure/test_run_operations_TestFlowRun_test_auto_resolve_requirements.yaml](../../../../sources/microsoft__promptflow/src/promptflow-recording/recordings/azure/test_run_operations_TestFlowRun_test_auto_resolve_requirements.yaml)<br>[src/promptflow-recording/recordings/azure/test_run_operations_TestFlowRun_test_requirements_in_additional_includes.yaml](../../../../sources/microsoft__promptflow/src/promptflow-recording/recordings/azure/test_run_operations_TestFlowRun_test_requirements_in_additional_includes.yaml)<br>[src/promptflow-rag/requirements.txt](../../../../sources/microsoft__promptflow/src/promptflow-rag/requirements.txt)<br>[src/promptflow-devkit/promptflow/_sdk/data/executable/app.spec.jinja2](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_sdk/data/executable/app.spec.jinja2)<br>[src/promptflow-devkit/promptflow/_sdk/data/executable/requirements.txt](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_sdk/data/executable/requirements.txt)<br>[src/promptflow-devkit/promptflow/_cli/data/entry_flow/requirements_txt](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_cli/data/entry_flow/requirements_txt) |
| eval | 2263 | [src/promptflow-tracing/CHANGELOG.md](../../../../sources/microsoft__promptflow/src/promptflow-tracing/CHANGELOG.md)<br>[src/promptflow-tracing/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-tracing/pyproject.toml)<br>[src/promptflow-tracing/README.md](../../../../sources/microsoft__promptflow/src/promptflow-tracing/README.md)<br>[src/promptflow-tracing/tests/__init__.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/__init__.py)<br>[src/promptflow-tracing/tests/conftest.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/conftest.py)<br>[src/promptflow-tracing/tests/utils.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/utils.py)<br>[src/promptflow-tracing/tests/unittests/test_context_utils.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/unittests/test_context_utils.py)<br>[src/promptflow-tracing/tests/unittests/test_iterator_proxy.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/unittests/test_iterator_proxy.py) |
| security | 11 | [SECURITY.md](../../../../sources/microsoft__promptflow/SECURITY.md)<br>[src/promptflow-core/promptflow/_utils/anti_ssrf/anti_ssrf_policy.py](../../../../sources/microsoft__promptflow/src/promptflow-core/promptflow/_utils/anti_ssrf/anti_ssrf_policy.py)<br>[src/promptflow/tests/test_configs/flows/print_secret_flow/flow.dag.yaml](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/print_secret_flow/flow.dag.yaml)<br>[src/promptflow/tests/test_configs/flows/print_secret_flow/print_secret.py](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/print_secret_flow/print_secret.py)<br>[scripts/tool/utils/secret_manager.py](../../../../sources/microsoft__promptflow/scripts/tool/utils/secret_manager.py)<br>[scripts/tool/exceptions/secret_exceptions.py](../../../../sources/microsoft__promptflow/scripts/tool/exceptions/secret_exceptions.py)<br>[scripts/compliance-check/Check-PolicheckScan.ps1](../../../../sources/microsoft__promptflow/scripts/compliance-check/Check-PolicheckScan.ps1)<br>[scripts/compliance-check/user_exclusion.xml](../../../../sources/microsoft__promptflow/scripts/compliance-check/user_exclusion.xml) |
| ci | 120 | [.github/workflows/build_doc_ci.yml](../../../../sources/microsoft__promptflow/.github/workflows/build_doc_ci.yml)<br>[.github/workflows/build_msi_installer.yml](../../../../sources/microsoft__promptflow/.github/workflows/build_msi_installer.yml)<br>[.github/workflows/check_enforcer.yml](../../../../sources/microsoft__promptflow/.github/workflows/check_enforcer.yml)<br>[.github/workflows/create_promptflow_release_branch.yml](../../../../sources/microsoft__promptflow/.github/workflows/create_promptflow_release_branch.yml)<br>[.github/workflows/create_promptflow_release_tag.yml](../../../../sources/microsoft__promptflow/.github/workflows/create_promptflow_release_tag.yml)<br>[.github/workflows/flake8.yml](../../../../sources/microsoft__promptflow/.github/workflows/flake8.yml)<br>[.github/workflows/flowdag_schema_check.yml](../../../../sources/microsoft__promptflow/.github/workflows/flowdag_schema_check.yml)<br>[.github/workflows/labeler.yml](../../../../sources/microsoft__promptflow/.github/workflows/labeler.yml) |
| container | 10 | [src/promptflow-devkit/promptflow/_sdk/data/docker_csharp/Dockerfile.jinja2](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_sdk/data/docker_csharp/Dockerfile.jinja2)<br>[src/promptflow-devkit/promptflow/_sdk/data/docker/Dockerfile.jinja2](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_sdk/data/docker/Dockerfile.jinja2)<br>[src/promptflow/tests/test_configs/flows/export/linux/Dockerfile](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/export/linux/Dockerfile)<br>[src/promptflow/tests/test_configs/flows/export/flex_flow_build/Dockerfile](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/export/flex_flow_build/Dockerfile)<br>[scripts/runtime_mgmt/runtime-env/context/Dockerfile](../../../../sources/microsoft__promptflow/scripts/runtime_mgmt/runtime-env/context/Dockerfile)<br>[examples/tutorials/flow-deploy/kubernetes/deployment.yaml](../../../../sources/microsoft__promptflow/examples/tutorials/flow-deploy/kubernetes/deployment.yaml)<br>[examples/tutorials/flow-deploy/kubernetes/README.md](../../../../sources/microsoft__promptflow/examples/tutorials/flow-deploy/kubernetes/README.md)<br>[benchmark/promptflow-serve/test_runner/docker-compose.yml](../../../../sources/microsoft__promptflow/benchmark/promptflow-serve/test_runner/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 444 | [README.md](../../../../sources/microsoft__promptflow/README.md)<br>[src/promptflow-tracing/README.md](../../../../sources/microsoft__promptflow/src/promptflow-tracing/README.md)<br>[src/promptflow-tools/README.dev.md](../../../../sources/microsoft__promptflow/src/promptflow-tools/README.dev.md)<br>[src/promptflow-tools/README.md](../../../../sources/microsoft__promptflow/src/promptflow-tools/README.md)<br>[src/promptflow-recording/README.md](../../../../sources/microsoft__promptflow/src/promptflow-recording/README.md)<br>[src/promptflow-rag/README.md](../../../../sources/microsoft__promptflow/src/promptflow-rag/README.md)<br>[src/promptflow-parallel/README.md](../../../../sources/microsoft__promptflow/src/promptflow-parallel/README.md)<br>[src/promptflow-evals/README.md](../../../../sources/microsoft__promptflow/src/promptflow-evals/README.md) |
| config | 140 | [src/promptflow-tracing/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-tracing/pyproject.toml)<br>[src/promptflow-tools/requirements.txt](../../../../sources/microsoft__promptflow/src/promptflow-tools/requirements.txt)<br>[src/promptflow-recording/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-recording/pyproject.toml)<br>[src/promptflow-rag/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-rag/pyproject.toml)<br>[src/promptflow-rag/requirements.txt](../../../../sources/microsoft__promptflow/src/promptflow-rag/requirements.txt)<br>[src/promptflow-parallel/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-parallel/pyproject.toml)<br>[src/promptflow-evals/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-evals/pyproject.toml)<br>[src/promptflow-devkit/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-devkit/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2263 | [src/promptflow-tracing/CHANGELOG.md](../../../../sources/microsoft__promptflow/src/promptflow-tracing/CHANGELOG.md)<br>[src/promptflow-tracing/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-tracing/pyproject.toml)<br>[src/promptflow-tracing/README.md](../../../../sources/microsoft__promptflow/src/promptflow-tracing/README.md)<br>[src/promptflow-tracing/tests/__init__.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/__init__.py)<br>[src/promptflow-tracing/tests/conftest.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/conftest.py)<br>[src/promptflow-tracing/tests/utils.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/utils.py) |
| CI workflows | 120 | [.github/workflows/build_doc_ci.yml](../../../../sources/microsoft__promptflow/.github/workflows/build_doc_ci.yml)<br>[.github/workflows/build_msi_installer.yml](../../../../sources/microsoft__promptflow/.github/workflows/build_msi_installer.yml)<br>[.github/workflows/check_enforcer.yml](../../../../sources/microsoft__promptflow/.github/workflows/check_enforcer.yml)<br>[.github/workflows/create_promptflow_release_branch.yml](../../../../sources/microsoft__promptflow/.github/workflows/create_promptflow_release_branch.yml)<br>[.github/workflows/create_promptflow_release_tag.yml](../../../../sources/microsoft__promptflow/.github/workflows/create_promptflow_release_tag.yml)<br>[.github/workflows/flake8.yml](../../../../sources/microsoft__promptflow/.github/workflows/flake8.yml) |
| Containers / deploy | 10 | [src/promptflow-devkit/promptflow/_sdk/data/docker_csharp/Dockerfile.jinja2](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_sdk/data/docker_csharp/Dockerfile.jinja2)<br>[src/promptflow-devkit/promptflow/_sdk/data/docker/Dockerfile.jinja2](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_sdk/data/docker/Dockerfile.jinja2)<br>[src/promptflow/tests/test_configs/flows/export/linux/Dockerfile](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/export/linux/Dockerfile)<br>[src/promptflow/tests/test_configs/flows/export/flex_flow_build/Dockerfile](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/export/flex_flow_build/Dockerfile)<br>[scripts/runtime_mgmt/runtime-env/context/Dockerfile](../../../../sources/microsoft__promptflow/scripts/runtime_mgmt/runtime-env/context/Dockerfile)<br>[examples/tutorials/flow-deploy/kubernetes/deployment.yaml](../../../../sources/microsoft__promptflow/examples/tutorials/flow-deploy/kubernetes/deployment.yaml) |
| Security / policy | 11 | [SECURITY.md](../../../../sources/microsoft__promptflow/SECURITY.md)<br>[src/promptflow-core/promptflow/_utils/anti_ssrf/anti_ssrf_policy.py](../../../../sources/microsoft__promptflow/src/promptflow-core/promptflow/_utils/anti_ssrf/anti_ssrf_policy.py)<br>[src/promptflow/tests/test_configs/flows/print_secret_flow/flow.dag.yaml](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/print_secret_flow/flow.dag.yaml)<br>[src/promptflow/tests/test_configs/flows/print_secret_flow/print_secret.py](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/print_secret_flow/print_secret.py)<br>[scripts/tool/utils/secret_manager.py](../../../../sources/microsoft__promptflow/scripts/tool/utils/secret_manager.py)<br>[scripts/tool/exceptions/secret_exceptions.py](../../../../sources/microsoft__promptflow/scripts/tool/exceptions/secret_exceptions.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/promptflow-tracing/promptflow/tracing/contracts/context_manager_proxy.py`, `src/promptflow-tools/promptflow/tools/__init__.py`, `src/promptflow-tools/promptflow/tools/aoai_gpt4v.py`.
2. Trace execution through entrypoints: `src/promptflow-devkit/promptflow/_sdk/data/executable/main.py`, `src/promptflow/tests/test_configs/flows/script_with_import/dummy_utils/main.py`, `scripts/dev-setup/main.py`.
3. Map agent/tool runtime through: `src/promptflow-tracing/promptflow/tracing/contracts/context_manager_proxy.py`, `src/promptflow-tools/promptflow/tools/__init__.py`, `src/promptflow-tools/promptflow/tools/aoai_gpt4v.py`.
4. Inspect retrieval/memory/indexing through: `src/promptflow-tools/tests/test_embedding.py`, `src/promptflow-tools/promptflow/tools/embedding.py`, `src/promptflow-tools/promptflow/tools/yamls/embedding.yaml`.
5. Verify behavior through test/eval files: `src/promptflow-tracing/CHANGELOG.md`, `src/promptflow-tracing/pyproject.toml`, `src/promptflow-tracing/README.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 4036 files, 952 directories.. 핵심 구조 신호는 README.md, LICENSE, tests, ci, docs, agent-instructions이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
