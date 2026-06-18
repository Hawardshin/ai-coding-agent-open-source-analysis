# microsoft/promptflow 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 4036 files, 952 directories.

## 요약

- 조사 단위: `sources/microsoft__promptflow` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,036 files, 952 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/promptflow-tracing/promptflow/tracing/contracts/context_manager_proxy.py, src/promptflow-tools/promptflow/tools/__init__.py, src/promptflow-tools/promptflow/tools/aoai_gpt4v.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | microsoft/promptflow |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/microsoft__promptflow](../../../../sources/microsoft__promptflow) |
| 기존 보고서 | [reports/clone-structures/microsoft__promptflow.md](../../../clone-structures/microsoft__promptflow.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4036 / 952 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .devcontainer, .github, benchmark, docs, examples, migration-guide, scripts, src |
| 상위 확장자 | .py: 1637, .yaml: 565, .png: 276, .md: 273, .jsonl: 245, .jinja2: 224, .yml: 179, .json: 169, .txt: 146, (none): 45, .example: 44, .prompty: 43 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [src/promptflow-devkit/promptflow/_sdk/data/executable/main.py](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_sdk/data/executable/main.py)<br>[src/promptflow/tests/test_configs/flows/script_with_import/dummy_utils/main.py](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/script_with_import/dummy_utils/main.py)<br>[scripts/dev-setup/main.py](../../../../sources/microsoft__promptflow/scripts/dev-setup/main.py)<br>[examples/flows/standard/gen-docstring/main.py](../../../../sources/microsoft__promptflow/examples/flows/standard/gen-docstring/main.py)<br>[examples/flows/chat/chat-with-pdf-maf/chat_with_pdf/main.py](../../../../sources/microsoft__promptflow/examples/flows/chat/chat-with-pdf-maf/chat_with_pdf/main.py)<br>[examples/flows/chat/chat-with-pdf/chat_with_pdf/main.py](../../../../sources/microsoft__promptflow/examples/flows/chat/chat-with-pdf/chat_with_pdf/main.py)<br>[benchmark/promptflow-serve/mock_api/main.py](../../../../sources/microsoft__promptflow/benchmark/promptflow-serve/mock_api/main.py) |
| agentRuntime | 430 | [src/promptflow-tracing/promptflow/tracing/contracts/context_manager_proxy.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/promptflow/tracing/contracts/context_manager_proxy.py)<br>[src/promptflow-tools/promptflow/tools/__init__.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/__init__.py)<br>[src/promptflow-tools/promptflow/tools/aoai_gpt4v.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/aoai_gpt4v.py)<br>[src/promptflow-tools/promptflow/tools/aoai.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/aoai.py)<br>[src/promptflow-tools/promptflow/tools/azure_content_safety.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/azure_content_safety.py)<br>[src/promptflow-tools/promptflow/tools/common.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/common.py)<br>[src/promptflow-tools/promptflow/tools/embedding.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/embedding.py)<br>[src/promptflow-tools/promptflow/tools/exception.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/exception.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 131 | [src/promptflow-tools/tests/test_embedding.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/tests/test_embedding.py)<br>[src/promptflow-tools/promptflow/tools/embedding.py](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/embedding.py)<br>[src/promptflow-tools/promptflow/tools/yamls/embedding.yaml](../../../../sources/microsoft__promptflow/src/promptflow-tools/promptflow/tools/yamls/embedding.yaml)<br>[src/promptflow-rag/CHANGELOG.md](../../../../sources/microsoft__promptflow/src/promptflow-rag/CHANGELOG.md)<br>[src/promptflow-rag/MANIFEST.in](../../../../sources/microsoft__promptflow/src/promptflow-rag/MANIFEST.in)<br>[src/promptflow-rag/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-rag/pyproject.toml)<br>[src/promptflow-rag/README.md](../../../../sources/microsoft__promptflow/src/promptflow-rag/README.md)<br>[src/promptflow-rag/requirements.txt](../../../../sources/microsoft__promptflow/src/promptflow-rag/requirements.txt) |
| spec | 149 | [src/promptflow-tools/requirements.txt](../../../../sources/microsoft__promptflow/src/promptflow-tools/requirements.txt)<br>[src/promptflow-recording/recordings/azure/test_connection_operations_TestConnectionOperations_test_list_connection_spec.yaml](../../../../sources/microsoft__promptflow/src/promptflow-recording/recordings/azure/test_connection_operations_TestConnectionOperations_test_list_connection_spec.yaml)<br>[src/promptflow-recording/recordings/azure/test_run_operations_TestFlowRun_test_auto_resolve_requirements.yaml](../../../../sources/microsoft__promptflow/src/promptflow-recording/recordings/azure/test_run_operations_TestFlowRun_test_auto_resolve_requirements.yaml)<br>[src/promptflow-recording/recordings/azure/test_run_operations_TestFlowRun_test_requirements_in_additional_includes.yaml](../../../../sources/microsoft__promptflow/src/promptflow-recording/recordings/azure/test_run_operations_TestFlowRun_test_requirements_in_additional_includes.yaml)<br>[src/promptflow-rag/requirements.txt](../../../../sources/microsoft__promptflow/src/promptflow-rag/requirements.txt)<br>[src/promptflow-devkit/promptflow/_sdk/data/executable/app.spec.jinja2](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_sdk/data/executable/app.spec.jinja2)<br>[src/promptflow-devkit/promptflow/_sdk/data/executable/requirements.txt](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_sdk/data/executable/requirements.txt)<br>[src/promptflow-devkit/promptflow/_cli/data/entry_flow/requirements_txt](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_cli/data/entry_flow/requirements_txt) |
| eval | 2263 | [src/promptflow-tracing/CHANGELOG.md](../../../../sources/microsoft__promptflow/src/promptflow-tracing/CHANGELOG.md)<br>[src/promptflow-tracing/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-tracing/pyproject.toml)<br>[src/promptflow-tracing/README.md](../../../../sources/microsoft__promptflow/src/promptflow-tracing/README.md)<br>[src/promptflow-tracing/tests/__init__.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/__init__.py)<br>[src/promptflow-tracing/tests/conftest.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/conftest.py)<br>[src/promptflow-tracing/tests/utils.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/utils.py)<br>[src/promptflow-tracing/tests/unittests/test_context_utils.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/unittests/test_context_utils.py)<br>[src/promptflow-tracing/tests/unittests/test_iterator_proxy.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/unittests/test_iterator_proxy.py) |
| security | 11 | [SECURITY.md](../../../../sources/microsoft__promptflow/SECURITY.md)<br>[src/promptflow-core/promptflow/_utils/anti_ssrf/anti_ssrf_policy.py](../../../../sources/microsoft__promptflow/src/promptflow-core/promptflow/_utils/anti_ssrf/anti_ssrf_policy.py)<br>[src/promptflow/tests/test_configs/flows/print_secret_flow/flow.dag.yaml](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/print_secret_flow/flow.dag.yaml)<br>[src/promptflow/tests/test_configs/flows/print_secret_flow/print_secret.py](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/print_secret_flow/print_secret.py)<br>[scripts/tool/utils/secret_manager.py](../../../../sources/microsoft__promptflow/scripts/tool/utils/secret_manager.py)<br>[scripts/tool/exceptions/secret_exceptions.py](../../../../sources/microsoft__promptflow/scripts/tool/exceptions/secret_exceptions.py)<br>[scripts/compliance-check/Check-PolicheckScan.ps1](../../../../sources/microsoft__promptflow/scripts/compliance-check/Check-PolicheckScan.ps1)<br>[scripts/compliance-check/user_exclusion.xml](../../../../sources/microsoft__promptflow/scripts/compliance-check/user_exclusion.xml) |
| ci | 120 | [.github/workflows/build_doc_ci.yml](../../../../sources/microsoft__promptflow/.github/workflows/build_doc_ci.yml)<br>[.github/workflows/build_msi_installer.yml](../../../../sources/microsoft__promptflow/.github/workflows/build_msi_installer.yml)<br>[.github/workflows/check_enforcer.yml](../../../../sources/microsoft__promptflow/.github/workflows/check_enforcer.yml)<br>[.github/workflows/create_promptflow_release_branch.yml](../../../../sources/microsoft__promptflow/.github/workflows/create_promptflow_release_branch.yml)<br>[.github/workflows/create_promptflow_release_tag.yml](../../../../sources/microsoft__promptflow/.github/workflows/create_promptflow_release_tag.yml)<br>[.github/workflows/flake8.yml](../../../../sources/microsoft__promptflow/.github/workflows/flake8.yml)<br>[.github/workflows/flowdag_schema_check.yml](../../../../sources/microsoft__promptflow/.github/workflows/flowdag_schema_check.yml)<br>[.github/workflows/labeler.yml](../../../../sources/microsoft__promptflow/.github/workflows/labeler.yml) |
| container | 10 | [src/promptflow-devkit/promptflow/_sdk/data/docker_csharp/Dockerfile.jinja2](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_sdk/data/docker_csharp/Dockerfile.jinja2)<br>[src/promptflow-devkit/promptflow/_sdk/data/docker/Dockerfile.jinja2](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_sdk/data/docker/Dockerfile.jinja2)<br>[src/promptflow/tests/test_configs/flows/export/linux/Dockerfile](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/export/linux/Dockerfile)<br>[src/promptflow/tests/test_configs/flows/export/flex_flow_build/Dockerfile](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/export/flex_flow_build/Dockerfile)<br>[scripts/runtime_mgmt/runtime-env/context/Dockerfile](../../../../sources/microsoft__promptflow/scripts/runtime_mgmt/runtime-env/context/Dockerfile)<br>[examples/tutorials/flow-deploy/kubernetes/deployment.yaml](../../../../sources/microsoft__promptflow/examples/tutorials/flow-deploy/kubernetes/deployment.yaml)<br>[examples/tutorials/flow-deploy/kubernetes/README.md](../../../../sources/microsoft__promptflow/examples/tutorials/flow-deploy/kubernetes/README.md)<br>[benchmark/promptflow-serve/test_runner/docker-compose.yml](../../../../sources/microsoft__promptflow/benchmark/promptflow-serve/test_runner/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 444 | [README.md](../../../../sources/microsoft__promptflow/README.md)<br>[src/promptflow-tracing/README.md](../../../../sources/microsoft__promptflow/src/promptflow-tracing/README.md)<br>[src/promptflow-tools/README.dev.md](../../../../sources/microsoft__promptflow/src/promptflow-tools/README.dev.md)<br>[src/promptflow-tools/README.md](../../../../sources/microsoft__promptflow/src/promptflow-tools/README.md)<br>[src/promptflow-recording/README.md](../../../../sources/microsoft__promptflow/src/promptflow-recording/README.md)<br>[src/promptflow-rag/README.md](../../../../sources/microsoft__promptflow/src/promptflow-rag/README.md)<br>[src/promptflow-parallel/README.md](../../../../sources/microsoft__promptflow/src/promptflow-parallel/README.md)<br>[src/promptflow-evals/README.md](../../../../sources/microsoft__promptflow/src/promptflow-evals/README.md) |
| config | 140 | [src/promptflow-tracing/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-tracing/pyproject.toml)<br>[src/promptflow-tools/requirements.txt](../../../../sources/microsoft__promptflow/src/promptflow-tools/requirements.txt)<br>[src/promptflow-recording/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-recording/pyproject.toml)<br>[src/promptflow-rag/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-rag/pyproject.toml)<br>[src/promptflow-rag/requirements.txt](../../../../sources/microsoft__promptflow/src/promptflow-rag/requirements.txt)<br>[src/promptflow-parallel/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-parallel/pyproject.toml)<br>[src/promptflow-evals/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-evals/pyproject.toml)<br>[src/promptflow-devkit/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-devkit/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2263 | [src/promptflow-tracing/CHANGELOG.md](../../../../sources/microsoft__promptflow/src/promptflow-tracing/CHANGELOG.md)<br>[src/promptflow-tracing/pyproject.toml](../../../../sources/microsoft__promptflow/src/promptflow-tracing/pyproject.toml)<br>[src/promptflow-tracing/README.md](../../../../sources/microsoft__promptflow/src/promptflow-tracing/README.md)<br>[src/promptflow-tracing/tests/__init__.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/__init__.py)<br>[src/promptflow-tracing/tests/conftest.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/conftest.py)<br>[src/promptflow-tracing/tests/utils.py](../../../../sources/microsoft__promptflow/src/promptflow-tracing/tests/utils.py) |
| CI workflow | 120 | [.github/workflows/build_doc_ci.yml](../../../../sources/microsoft__promptflow/.github/workflows/build_doc_ci.yml)<br>[.github/workflows/build_msi_installer.yml](../../../../sources/microsoft__promptflow/.github/workflows/build_msi_installer.yml)<br>[.github/workflows/check_enforcer.yml](../../../../sources/microsoft__promptflow/.github/workflows/check_enforcer.yml)<br>[.github/workflows/create_promptflow_release_branch.yml](../../../../sources/microsoft__promptflow/.github/workflows/create_promptflow_release_branch.yml)<br>[.github/workflows/create_promptflow_release_tag.yml](../../../../sources/microsoft__promptflow/.github/workflows/create_promptflow_release_tag.yml)<br>[.github/workflows/flake8.yml](../../../../sources/microsoft__promptflow/.github/workflows/flake8.yml) |
| 컨테이너/배포 | 10 | [src/promptflow-devkit/promptflow/_sdk/data/docker_csharp/Dockerfile.jinja2](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_sdk/data/docker_csharp/Dockerfile.jinja2)<br>[src/promptflow-devkit/promptflow/_sdk/data/docker/Dockerfile.jinja2](../../../../sources/microsoft__promptflow/src/promptflow-devkit/promptflow/_sdk/data/docker/Dockerfile.jinja2)<br>[src/promptflow/tests/test_configs/flows/export/linux/Dockerfile](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/export/linux/Dockerfile)<br>[src/promptflow/tests/test_configs/flows/export/flex_flow_build/Dockerfile](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/export/flex_flow_build/Dockerfile)<br>[scripts/runtime_mgmt/runtime-env/context/Dockerfile](../../../../sources/microsoft__promptflow/scripts/runtime_mgmt/runtime-env/context/Dockerfile)<br>[examples/tutorials/flow-deploy/kubernetes/deployment.yaml](../../../../sources/microsoft__promptflow/examples/tutorials/flow-deploy/kubernetes/deployment.yaml) |
| 보안/정책 | 11 | [SECURITY.md](../../../../sources/microsoft__promptflow/SECURITY.md)<br>[src/promptflow-core/promptflow/_utils/anti_ssrf/anti_ssrf_policy.py](../../../../sources/microsoft__promptflow/src/promptflow-core/promptflow/_utils/anti_ssrf/anti_ssrf_policy.py)<br>[src/promptflow/tests/test_configs/flows/print_secret_flow/flow.dag.yaml](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/print_secret_flow/flow.dag.yaml)<br>[src/promptflow/tests/test_configs/flows/print_secret_flow/print_secret.py](../../../../sources/microsoft__promptflow/src/promptflow/tests/test_configs/flows/print_secret_flow/print_secret.py)<br>[scripts/tool/utils/secret_manager.py](../../../../sources/microsoft__promptflow/scripts/tool/utils/secret_manager.py)<br>[scripts/tool/exceptions/secret_exceptions.py](../../../../sources/microsoft__promptflow/scripts/tool/exceptions/secret_exceptions.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/promptflow-tracing/promptflow/tracing/contracts/context_manager_proxy.py`, `src/promptflow-tools/promptflow/tools/__init__.py`, `src/promptflow-tools/promptflow/tools/aoai_gpt4v.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/promptflow-devkit/promptflow/_sdk/data/executable/main.py`, `src/promptflow/tests/test_configs/flows/script_with_import/dummy_utils/main.py`, `scripts/dev-setup/main.py`.
3. agent/tool runtime 매핑: `src/promptflow-tracing/promptflow/tracing/contracts/context_manager_proxy.py`, `src/promptflow-tools/promptflow/tools/__init__.py`, `src/promptflow-tools/promptflow/tools/aoai_gpt4v.py`.
4. retrieval/memory/indexing 확인: `src/promptflow-tools/tests/test_embedding.py`, `src/promptflow-tools/promptflow/tools/embedding.py`, `src/promptflow-tools/promptflow/tools/yamls/embedding.yaml`.
5. test/eval 파일로 동작 검증: `src/promptflow-tracing/CHANGELOG.md`, `src/promptflow-tracing/pyproject.toml`, `src/promptflow-tracing/README.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 4036 files, 952 directories.. 핵심 구조 신호는 README.md, LICENSE, tests, ci, docs, agent-instructions이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
