# SpharxTeam/AgentOS 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Airymax AgentOS Transcend context limits. Achieve near-infinite memory.

## 요약

- 조사 단위: `sources/SpharxTeam__AgentOS` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,830 files, 537 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=ecosystem/examples/mcp-tool-server/config.yaml, ecosystem/examples/mcp-tool-server/README.md, ecosystem/examples/mcp-tool-server/tools/calculator.py이고, 의존성 단서는 click, transformers, faiss, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | SpharxTeam/AgentOS |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C |
| Stars | 1247 |
| Forks | 114 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/SpharxTeam__AgentOS](../../../../sources/SpharxTeam__AgentOS) |
| 기존 보고서 | [reports/global-trending/repositories/SpharxTeam__AgentOS.md](../../../global-trending/repositories/SpharxTeam__AgentOS.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1830 / 537 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, agentos, deploy, ecosystem, scripts, sdk, tests |
| 상위 확장자 | .c: 602, .h: 305, .py: 297, .md: 181, .yaml: 70, .txt: 65, .rs: 58, .sh: 43, .json: 41, .ts: 41, (none): 34, .go: 32 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 90 |
| .github | ci surface | 1 |
| agentos | top-level component | 1 |
| deploy | deployment surface | 1 |
| ecosystem | top-level component | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | agentos-init | agentos-init |
| utility | pyproject.toml | agentos-docs | agentos-docs |
| utility | pyproject.toml | agentos-benchmark | agentos-benchmark |
| utility | pyproject.toml | agentos-validate | agentos-validate |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | faiss |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | click |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [ecosystem/examples/mcp-tool-server/config.yaml](../../../../sources/SpharxTeam__AgentOS/ecosystem/examples/mcp-tool-server/config.yaml) | mcp signal |
| mcp | [ecosystem/examples/mcp-tool-server/README.md](../../../../sources/SpharxTeam__AgentOS/ecosystem/examples/mcp-tool-server/README.md) | mcp signal |
| mcp | [ecosystem/examples/mcp-tool-server/tools/calculator.py](../../../../sources/SpharxTeam__AgentOS/ecosystem/examples/mcp-tool-server/tools/calculator.py) | mcp signal |
| mcp | [ecosystem/examples/mcp-tool-server/tools/file_reader.py](../../../../sources/SpharxTeam__AgentOS/ecosystem/examples/mcp-tool-server/tools/file_reader.py) | mcp signal |
| agentRuntime | [tests/utils/fixtures/data/skills/sample_skills.json](../../../../sources/SpharxTeam__AgentOS/tests/utils/fixtures/data/skills/sample_skills.json) | agentRuntime signal |
| agentRuntime | [tests/unit/daemon/tool_d/test_cache.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/daemon/tool_d/test_cache.c) | agentRuntime signal |
| agentRuntime | [tests/unit/daemon/tool_d/test_executor.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/daemon/tool_d/test_executor.c) | agentRuntime signal |
| agentRuntime | [tests/unit/daemon/tool_d/test_registry.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/daemon/tool_d/test_registry.c) | agentRuntime signal |
| entrypoints | [sdk/typescript/src/index.ts](../../../../sources/SpharxTeam__AgentOS/sdk/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [sdk/tui/src/app.rs](../../../../sources/SpharxTeam__AgentOS/sdk/tui/src/app.rs) | entrypoints signal |
| entrypoints | [sdk/tui/src/main.rs](../../../../sources/SpharxTeam__AgentOS/sdk/tui/src/main.rs) | entrypoints signal |
| entrypoints | [sdk/cli/src/main.rs](../../../../sources/SpharxTeam__AgentOS/sdk/cli/src/main.rs) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 20 | [sdk/typescript/src/index.ts](../../../../sources/SpharxTeam__AgentOS/sdk/typescript/src/index.ts)<br>[sdk/tui/src/app.rs](../../../../sources/SpharxTeam__AgentOS/sdk/tui/src/app.rs)<br>[sdk/tui/src/main.rs](../../../../sources/SpharxTeam__AgentOS/sdk/tui/src/main.rs)<br>[sdk/cli/src/main.rs](../../../../sources/SpharxTeam__AgentOS/sdk/cli/src/main.rs)<br>[scripts/toolkit/src/cli.py](../../../../sources/SpharxTeam__AgentOS/scripts/toolkit/src/cli.py)<br>[ecosystem/openlab/app/videoedit/src/main.py](../../../../sources/SpharxTeam__AgentOS/ecosystem/openlab/app/videoedit/src/main.py)<br>[ecosystem/openlab/app/ecommerce/src/main.py](../../../../sources/SpharxTeam__AgentOS/ecosystem/openlab/app/ecommerce/src/main.py)<br>[ecosystem/openlab/app/docgen/src/main.py](../../../../sources/SpharxTeam__AgentOS/ecosystem/openlab/app/docgen/src/main.py) |
| agentRuntime | 243 | [tests/utils/fixtures/data/skills/sample_skills.json](../../../../sources/SpharxTeam__AgentOS/tests/utils/fixtures/data/skills/sample_skills.json)<br>[tests/unit/daemon/tool_d/test_cache.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/daemon/tool_d/test_cache.c)<br>[tests/unit/daemon/tool_d/test_executor.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/daemon/tool_d/test_executor.c)<br>[tests/unit/daemon/tool_d/test_registry.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/daemon/tool_d/test_registry.c)<br>[tests/unit/daemon/tool_d/test_service.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/daemon/tool_d/test_service.c)<br>[tests/unit/daemon/tool_d/test_tool_service.py](../../../../sources/SpharxTeam__AgentOS/tests/unit/daemon/tool_d/test_tool_service.py)<br>[tests/unit/daemon/tool_d/test_tool.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/daemon/tool_d/test_tool.c)<br>[tests/unit/daemon/tool_d/test_validator.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/daemon/tool_d/test_validator.c) |
| mcp | 13 | [ecosystem/examples/mcp-tool-server/config.yaml](../../../../sources/SpharxTeam__AgentOS/ecosystem/examples/mcp-tool-server/config.yaml)<br>[ecosystem/examples/mcp-tool-server/README.md](../../../../sources/SpharxTeam__AgentOS/ecosystem/examples/mcp-tool-server/README.md)<br>[ecosystem/examples/mcp-tool-server/tools/calculator.py](../../../../sources/SpharxTeam__AgentOS/ecosystem/examples/mcp-tool-server/tools/calculator.py)<br>[ecosystem/examples/mcp-tool-server/tools/file_reader.py](../../../../sources/SpharxTeam__AgentOS/ecosystem/examples/mcp-tool-server/tools/file_reader.py)<br>[ecosystem/examples/mcp-tool-server/server/tool_server.py](../../../../sources/SpharxTeam__AgentOS/ecosystem/examples/mcp-tool-server/server/tool_server.py)<br>[agentos/protocols/standards/mcp/src/mcp_transport.c](../../../../sources/SpharxTeam__AgentOS/agentos/protocols/standards/mcp/src/mcp_transport.c)<br>[agentos/protocols/standards/mcp/src/mcp_v1_adapter.c](../../../../sources/SpharxTeam__AgentOS/agentos/protocols/standards/mcp/src/mcp_v1_adapter.c)<br>[agentos/protocols/standards/mcp/include/mcp_transport.h](../../../../sources/SpharxTeam__AgentOS/agentos/protocols/standards/mcp/include/mcp_transport.h) |
| retrieval | 72 | [tests/unit/heapstore/test_heapstore_memory.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/heapstore/test_heapstore_memory.c)<br>[tests/unit/atoms/memory/test_memory_provider.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/atoms/memory/test_memory_provider.c)<br>[tests/unit/atoms/coreloopthree/test_memory.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/atoms/coreloopthree/test_memory.c)<br>[tests/integration/memoryrovol/test_retrieval.py](../../../../sources/SpharxTeam__AgentOS/tests/integration/memoryrovol/test_retrieval.py)<br>[tests/integration/coreloopthree/test_memory_evolution.py](../../../../sources/SpharxTeam__AgentOS/tests/integration/coreloopthree/test_memory_evolution.py)<br>[tests/integration/c/test_memoryrov_embedding.c](../../../../sources/SpharxTeam__AgentOS/tests/integration/c/test_memoryrov_embedding.c)<br>[tests/integration/c/test_memoryrov_graph.c](../../../../sources/SpharxTeam__AgentOS/tests/integration/c/test_memoryrov_graph.c)<br>[sdk/typescript/src/index.ts](../../../../sources/SpharxTeam__AgentOS/sdk/typescript/src/index.ts) |
| spec | 9 | [tests/requirements-dev.txt](../../../../sources/SpharxTeam__AgentOS/tests/requirements-dev.txt)<br>[tests/requirements.txt](../../../../sources/SpharxTeam__AgentOS/tests/requirements.txt)<br>[sdk/python/requirements.txt](../../../../sources/SpharxTeam__AgentOS/sdk/python/requirements.txt)<br>[scripts/ci/quality/requirements.txt](../../../../sources/SpharxTeam__AgentOS/scripts/ci/quality/requirements.txt)<br>[scripts/ci/pipeline/requirements-linux.txt](../../../../sources/SpharxTeam__AgentOS/scripts/ci/pipeline/requirements-linux.txt)<br>[scripts/ci/pipeline/requirements-macos.txt](../../../../sources/SpharxTeam__AgentOS/scripts/ci/pipeline/requirements-macos.txt)<br>[ecosystem/openlab/openlab/requirements.txt](../../../../sources/SpharxTeam__AgentOS/ecosystem/openlab/openlab/requirements.txt)<br>[ecosystem/openlab/app/videoedit/src/requirements.txt](../../../../sources/SpharxTeam__AgentOS/ecosystem/openlab/app/videoedit/src/requirements.txt) |
| eval | 517 | [tests/__init__.py](../../../../sources/SpharxTeam__AgentOS/tests/__init__.py)<br>[tests/.coveragerc](../../../../sources/SpharxTeam__AgentOS/tests/.coveragerc)<br>[tests/.editorconfig](../../../../sources/SpharxTeam__AgentOS/tests/.editorconfig)<br>[tests/.pre-commit-config.yaml](../../../../sources/SpharxTeam__AgentOS/tests/.pre-commit-config.yaml)<br>[tests/CMakeLists.txt](../../../../sources/SpharxTeam__AgentOS/tests/CMakeLists.txt)<br>[tests/codecov.yml](../../../../sources/SpharxTeam__AgentOS/tests/codecov.yml)<br>[tests/conftest.py](../../../../sources/SpharxTeam__AgentOS/tests/conftest.py)<br>[tests/Makefile](../../../../sources/SpharxTeam__AgentOS/tests/Makefile) |
| security | 120 | [SECURITY.md](../../../../sources/SpharxTeam__AgentOS/SECURITY.md)<br>[tests/utils/templates/python/test_template_security.py](../../../../sources/SpharxTeam__AgentOS/tests/utils/templates/python/test_template_security.py)<br>[tests/unit/manager/test_audit_log_validation.py](../../../../sources/SpharxTeam__AgentOS/tests/unit/manager/test_audit_log_validation.py)<br>[tests/unit/heapstore/test_security_path_traversal.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/heapstore/test_security_path_traversal.c)<br>[tests/unit/daemon/common/test_svc_auth.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/daemon/common/test_svc_auth.c)<br>[tests/unit/cupolas/unit/test_audit_overflow.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/cupolas/unit/test_audit_overflow.c)<br>[tests/unit/cupolas/unit/test_cupolas_security.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/cupolas/unit/test_cupolas_security.c)<br>[tests/unit/commons/unit/test_resource_guard.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/commons/unit/test_resource_guard.c) |
| ci | 37 | [scripts/ci/README.md](../../../../sources/SpharxTeam__AgentOS/scripts/ci/README.md)<br>[scripts/ci/verify/check_memcpy_dynamic.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/check_memcpy_dynamic.sh)<br>[scripts/ci/verify/forbidden_functions.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/forbidden_functions.sh)<br>[scripts/ci/verify/sec017_scan.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/sec017_scan.sh)<br>[scripts/ci/verify/test_build_modes.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/test_build_modes.sh)<br>[scripts/ci/verify/verify_sdks.ps1](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/verify_sdks.ps1)<br>[scripts/ci/verify/verify_sdks.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/verify_sdks.sh)<br>[scripts/ci/release/cleanup_builds.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ci/release/cleanup_builds.sh) |
| container | 54 | [scripts/ops/deploy/.env.example](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/.env.example)<br>[scripts/ops/deploy/.gitignore](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/.gitignore)<br>[scripts/ops/deploy/build.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/build.sh)<br>[scripts/ops/deploy/check_config.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/check_config.sh)<br>[scripts/ops/deploy/docker-compose.preview.yml](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/docker-compose.preview.yml)<br>[scripts/ops/deploy/docker-compose.prod.yml](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/docker-compose.prod.yml)<br>[scripts/ops/deploy/docker-compose.staging.yml](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/docker-compose.staging.yml)<br>[scripts/ops/deploy/docker-compose.yml](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 155 | [README_zh.md](../../../../sources/SpharxTeam__AgentOS/README_zh.md)<br>[README.md](../../../../sources/SpharxTeam__AgentOS/README.md)<br>[tests/README.md](../../../../sources/SpharxTeam__AgentOS/tests/README.md)<br>[tests/utils/README.md](../../../../sources/SpharxTeam__AgentOS/tests/utils/README.md)<br>[tests/unit/README.md](../../../../sources/SpharxTeam__AgentOS/tests/unit/README.md)<br>[tests/security/README.md](../../../../sources/SpharxTeam__AgentOS/tests/security/README.md)<br>[tests/integration/README.md](../../../../sources/SpharxTeam__AgentOS/tests/integration/README.md)<br>[tests/contract/README.md](../../../../sources/SpharxTeam__AgentOS/tests/contract/README.md) |
| config | 20 | [pyproject.toml](../../../../sources/SpharxTeam__AgentOS/pyproject.toml)<br>[tests/Makefile](../../../../sources/SpharxTeam__AgentOS/tests/Makefile)<br>[tests/requirements-dev.txt](../../../../sources/SpharxTeam__AgentOS/tests/requirements-dev.txt)<br>[tests/requirements.txt](../../../../sources/SpharxTeam__AgentOS/tests/requirements.txt)<br>[sdk/typescript/package.json](../../../../sources/SpharxTeam__AgentOS/sdk/typescript/package.json)<br>[sdk/typescript/tsconfig.json](../../../../sources/SpharxTeam__AgentOS/sdk/typescript/tsconfig.json)<br>[sdk/tui/Cargo.toml](../../../../sources/SpharxTeam__AgentOS/sdk/tui/Cargo.toml)<br>[sdk/rust/Cargo.toml](../../../../sources/SpharxTeam__AgentOS/sdk/rust/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 517 | [tests/__init__.py](../../../../sources/SpharxTeam__AgentOS/tests/__init__.py)<br>[tests/.coveragerc](../../../../sources/SpharxTeam__AgentOS/tests/.coveragerc)<br>[tests/.editorconfig](../../../../sources/SpharxTeam__AgentOS/tests/.editorconfig)<br>[tests/.pre-commit-config.yaml](../../../../sources/SpharxTeam__AgentOS/tests/.pre-commit-config.yaml)<br>[tests/CMakeLists.txt](../../../../sources/SpharxTeam__AgentOS/tests/CMakeLists.txt)<br>[tests/codecov.yml](../../../../sources/SpharxTeam__AgentOS/tests/codecov.yml) |
| CI workflow | 37 | [scripts/ci/README.md](../../../../sources/SpharxTeam__AgentOS/scripts/ci/README.md)<br>[scripts/ci/verify/check_memcpy_dynamic.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/check_memcpy_dynamic.sh)<br>[scripts/ci/verify/forbidden_functions.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/forbidden_functions.sh)<br>[scripts/ci/verify/sec017_scan.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/sec017_scan.sh)<br>[scripts/ci/verify/test_build_modes.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/test_build_modes.sh)<br>[scripts/ci/verify/verify_sdks.ps1](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/verify_sdks.ps1) |
| 컨테이너/배포 | 54 | [scripts/ops/deploy/.env.example](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/.env.example)<br>[scripts/ops/deploy/.gitignore](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/.gitignore)<br>[scripts/ops/deploy/build.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/build.sh)<br>[scripts/ops/deploy/check_config.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/check_config.sh)<br>[scripts/ops/deploy/docker-compose.preview.yml](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/docker-compose.preview.yml)<br>[scripts/ops/deploy/docker-compose.prod.yml](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/docker-compose.prod.yml) |
| 보안/정책 | 120 | [SECURITY.md](../../../../sources/SpharxTeam__AgentOS/SECURITY.md)<br>[tests/utils/templates/python/test_template_security.py](../../../../sources/SpharxTeam__AgentOS/tests/utils/templates/python/test_template_security.py)<br>[tests/unit/manager/test_audit_log_validation.py](../../../../sources/SpharxTeam__AgentOS/tests/unit/manager/test_audit_log_validation.py)<br>[tests/unit/heapstore/test_security_path_traversal.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/heapstore/test_security_path_traversal.c)<br>[tests/unit/daemon/common/test_svc_auth.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/daemon/common/test_svc_auth.c)<br>[tests/unit/cupolas/unit/test_audit_overflow.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/cupolas/unit/test_audit_overflow.c) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `ecosystem/examples/mcp-tool-server/config.yaml`, `ecosystem/examples/mcp-tool-server/README.md`, `ecosystem/examples/mcp-tool-server/tools/calculator.py`.
2. entrypoint를 따라 실행 흐름 확인: `sdk/typescript/src/index.ts`, `sdk/tui/src/app.rs`, `sdk/tui/src/main.rs`.
3. agent/tool runtime 매핑: `tests/utils/fixtures/data/skills/sample_skills.json`, `tests/unit/daemon/tool_d/test_cache.c`, `tests/unit/daemon/tool_d/test_executor.c`.
4. retrieval/memory/indexing 확인: `tests/unit/heapstore/test_heapstore_memory.c`, `tests/unit/atoms/memory/test_memory_provider.c`, `tests/unit/atoms/coreloopthree/test_memory.c`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/.coveragerc`, `tests/.editorconfig`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Airymax AgentOS Transcend context limits. Achieve near infinite memory.. 핵심 구조 신호는 C, pyproject.toml, README.md, LICENSE, transformers, faiss이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
