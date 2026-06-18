# SpharxTeam/AgentOS Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Airymax AgentOS Transcend context limits. Achieve near-infinite memory.

## 요약

- 조사 단위: `sources/SpharxTeam__AgentOS` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,830 files, 537 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=ecosystem/examples/mcp-tool-server/config.yaml, ecosystem/examples/mcp-tool-server/README.md, ecosystem/examples/mcp-tool-server/tools/calculator.py이고, 의존성 단서는 click, transformers, faiss, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | SpharxTeam/AgentOS |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C |
| Stars | 1247 |
| Forks | 114 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/SpharxTeam__AgentOS](../../../../sources/SpharxTeam__AgentOS) |
| Existing report | [reports/global-trending/repositories/SpharxTeam__AgentOS.md](../../../global-trending/repositories/SpharxTeam__AgentOS.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1830 / 537 |
| Max observed depth | 7 |
| Top directories | .github, agentos, deploy, ecosystem, scripts, sdk, tests |
| Top extensions | .c: 602, .h: 305, .py: 297, .md: 181, .yaml: 70, .txt: 65, .rs: 58, .sh: 43, .json: 41, .ts: 41, (none): 34, .go: 32 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 90 |
| .github | ci surface | 1 |
| agentos | top-level component | 1 |
| deploy | deployment surface | 1 |
| ecosystem | top-level component | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | agentos-init | agentos-init |
| utility | pyproject.toml | agentos-docs | agentos-docs |
| utility | pyproject.toml | agentos-benchmark | agentos-benchmark |
| utility | pyproject.toml | agentos-validate | agentos-validate |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | faiss |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | click |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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
| instruction | 0 | not obvious |
| docs | 155 | [README_zh.md](../../../../sources/SpharxTeam__AgentOS/README_zh.md)<br>[README.md](../../../../sources/SpharxTeam__AgentOS/README.md)<br>[tests/README.md](../../../../sources/SpharxTeam__AgentOS/tests/README.md)<br>[tests/utils/README.md](../../../../sources/SpharxTeam__AgentOS/tests/utils/README.md)<br>[tests/unit/README.md](../../../../sources/SpharxTeam__AgentOS/tests/unit/README.md)<br>[tests/security/README.md](../../../../sources/SpharxTeam__AgentOS/tests/security/README.md)<br>[tests/integration/README.md](../../../../sources/SpharxTeam__AgentOS/tests/integration/README.md)<br>[tests/contract/README.md](../../../../sources/SpharxTeam__AgentOS/tests/contract/README.md) |
| config | 20 | [pyproject.toml](../../../../sources/SpharxTeam__AgentOS/pyproject.toml)<br>[tests/Makefile](../../../../sources/SpharxTeam__AgentOS/tests/Makefile)<br>[tests/requirements-dev.txt](../../../../sources/SpharxTeam__AgentOS/tests/requirements-dev.txt)<br>[tests/requirements.txt](../../../../sources/SpharxTeam__AgentOS/tests/requirements.txt)<br>[sdk/typescript/package.json](../../../../sources/SpharxTeam__AgentOS/sdk/typescript/package.json)<br>[sdk/typescript/tsconfig.json](../../../../sources/SpharxTeam__AgentOS/sdk/typescript/tsconfig.json)<br>[sdk/tui/Cargo.toml](../../../../sources/SpharxTeam__AgentOS/sdk/tui/Cargo.toml)<br>[sdk/rust/Cargo.toml](../../../../sources/SpharxTeam__AgentOS/sdk/rust/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 517 | [tests/__init__.py](../../../../sources/SpharxTeam__AgentOS/tests/__init__.py)<br>[tests/.coveragerc](../../../../sources/SpharxTeam__AgentOS/tests/.coveragerc)<br>[tests/.editorconfig](../../../../sources/SpharxTeam__AgentOS/tests/.editorconfig)<br>[tests/.pre-commit-config.yaml](../../../../sources/SpharxTeam__AgentOS/tests/.pre-commit-config.yaml)<br>[tests/CMakeLists.txt](../../../../sources/SpharxTeam__AgentOS/tests/CMakeLists.txt)<br>[tests/codecov.yml](../../../../sources/SpharxTeam__AgentOS/tests/codecov.yml) |
| CI workflows | 37 | [scripts/ci/README.md](../../../../sources/SpharxTeam__AgentOS/scripts/ci/README.md)<br>[scripts/ci/verify/check_memcpy_dynamic.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/check_memcpy_dynamic.sh)<br>[scripts/ci/verify/forbidden_functions.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/forbidden_functions.sh)<br>[scripts/ci/verify/sec017_scan.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/sec017_scan.sh)<br>[scripts/ci/verify/test_build_modes.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/test_build_modes.sh)<br>[scripts/ci/verify/verify_sdks.ps1](../../../../sources/SpharxTeam__AgentOS/scripts/ci/verify/verify_sdks.ps1) |
| Containers / deploy | 54 | [scripts/ops/deploy/.env.example](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/.env.example)<br>[scripts/ops/deploy/.gitignore](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/.gitignore)<br>[scripts/ops/deploy/build.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/build.sh)<br>[scripts/ops/deploy/check_config.sh](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/check_config.sh)<br>[scripts/ops/deploy/docker-compose.preview.yml](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/docker-compose.preview.yml)<br>[scripts/ops/deploy/docker-compose.prod.yml](../../../../sources/SpharxTeam__AgentOS/scripts/ops/deploy/docker-compose.prod.yml) |
| Security / policy | 120 | [SECURITY.md](../../../../sources/SpharxTeam__AgentOS/SECURITY.md)<br>[tests/utils/templates/python/test_template_security.py](../../../../sources/SpharxTeam__AgentOS/tests/utils/templates/python/test_template_security.py)<br>[tests/unit/manager/test_audit_log_validation.py](../../../../sources/SpharxTeam__AgentOS/tests/unit/manager/test_audit_log_validation.py)<br>[tests/unit/heapstore/test_security_path_traversal.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/heapstore/test_security_path_traversal.c)<br>[tests/unit/daemon/common/test_svc_auth.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/daemon/common/test_svc_auth.c)<br>[tests/unit/cupolas/unit/test_audit_overflow.c](../../../../sources/SpharxTeam__AgentOS/tests/unit/cupolas/unit/test_audit_overflow.c) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `ecosystem/examples/mcp-tool-server/config.yaml`, `ecosystem/examples/mcp-tool-server/README.md`, `ecosystem/examples/mcp-tool-server/tools/calculator.py`.
2. Trace execution through entrypoints: `sdk/typescript/src/index.ts`, `sdk/tui/src/app.rs`, `sdk/tui/src/main.rs`.
3. Map agent/tool runtime through: `tests/utils/fixtures/data/skills/sample_skills.json`, `tests/unit/daemon/tool_d/test_cache.c`, `tests/unit/daemon/tool_d/test_executor.c`.
4. Inspect retrieval/memory/indexing through: `tests/unit/heapstore/test_heapstore_memory.c`, `tests/unit/atoms/memory/test_memory_provider.c`, `tests/unit/atoms/coreloopthree/test_memory.c`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/.coveragerc`, `tests/.editorconfig`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Airymax AgentOS Transcend context limits. Achieve near infinite memory.. 핵심 구조 신호는 C, pyproject.toml, README.md, LICENSE, transformers, faiss이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
