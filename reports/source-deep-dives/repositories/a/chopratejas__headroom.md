# chopratejas/headroom 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 60-95% fewer tokens, same answers. Library, proxy, MCP server.

## 요약

- 조사 단위: `sources/chopratejas__headroom` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,614 files, 221 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=wiki/mcp.md, tests/test_ccr_mcp_server.py, tests/test_proxy/test_mcp_stats_aggregation.py이고, 의존성 단서는 openai, anthropic, claude, codex, mcp, langchain, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | chopratejas/headroom |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 31580 |
| Forks | 2133 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/chopratejas__headroom](../../../../sources/chopratejas__headroom) |
| 기존 보고서 | [reports/global-trending/repositories/chopratejas__headroom.md](../../../global-trending/repositories/chopratejas__headroom.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1614 / 221 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .claude-plugin, .devcontainer, .github, benchmarks, crates, docker, docs, e2e, examples, headroom, plugins, REALIGNMENT, scripts, sdk, sql, tests, wiki |
| 상위 확장자 | .py: 877, .json: 206, .rs: 176, .md: 112, .ts: 83, .mdx: 38, .yml: 27, (none): 19, .tsx: 15, .sh: 12, .toml: 10, .png: 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 67 |
| docs | documentation surface | 59 |
| crates/headroom-core | crates workspace | 6 |
| examples/deployment | examples workspace | 6 |
| examples/mcp_demo | examples workspace | 5 |
| crates/headroom-proxy | crates workspace | 4 |
| crates/headroom-parity | crates workspace | 3 |
| crates/headroom-py | crates workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| crates | source boundary | 1 |
| docker | documentation surface | 1 |
| e2e | validation surface | 1 |
| examples | top-level component | 1 |
| examples/langchain_demo | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| examples/strands_mcp_dispatch_test.py | examples workspace | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| test | Makefile | test | make test |
| test | Makefile | test-parity | make test-parity |
| utility | Makefile | bench | make bench |
| build | Makefile | build-proxy | make build-proxy |
| build | Makefile | build-wheel | make build-wheel |
| utility | Makefile | verify-rust-core | make verify-rust-core |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | fmt-check | make fmt-check |
| utility | Makefile | clean | make clean |
| quality | Makefile | ci-precheck | make ci-precheck |
| quality | Makefile | ci-precheck-rust | make ci-precheck-rust |
| quality | Makefile | ci-precheck-python | make ci-precheck-python |
| quality | Makefile | ci-precheck-commitlint | make ci-precheck-commitlint |
| utility | Makefile | install-git-hooks | make install-git-hooks |
| utility | pyproject.toml | headroom | headroom |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp, codex |
| agentFrameworks | langchain |
| vectorStores | qdrant |
| modelRuntime | torch, transformers, ollama, llama |
| webRuntime | fastapi |
| developerSurface | click |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [wiki/mcp.md](../../../../sources/chopratejas__headroom/wiki/mcp.md) | mcp signal |
| mcp | [tests/test_ccr_mcp_server.py](../../../../sources/chopratejas__headroom/tests/test_ccr_mcp_server.py) | mcp signal |
| mcp | [tests/test_proxy/test_mcp_stats_aggregation.py](../../../../sources/chopratejas__headroom/tests/test_proxy/test_mcp_stats_aggregation.py) | mcp signal |
| mcp | [tests/test_memory/test_mcp_server.py](../../../../sources/chopratejas__headroom/tests/test_memory/test_mcp_server.py) | mcp signal |
| agentRuntime | [wiki/memory.md](../../../../sources/chopratejas__headroom/wiki/memory.md) | agentRuntime signal |
| agentRuntime | [tests/fixtures/memory_tool_definitions/anthropic.json](../../../../sources/chopratejas__headroom/tests/fixtures/memory_tool_definitions/anthropic.json) | agentRuntime signal |
| agentRuntime | [tests/fixtures/memory_tool_definitions/openai.json](../../../../sources/chopratejas__headroom/tests/fixtures/memory_tool_definitions/openai.json) | agentRuntime signal |
| agentRuntime | [sdk/typescript/test/hooks.test.ts](../../../../sources/chopratejas__headroom/sdk/typescript/test/hooks.test.ts) | agentRuntime signal |
| entrypoints | [sdk/typescript/src/index.ts](../../../../sources/chopratejas__headroom/sdk/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [plugins/openclaw/src/index.ts](../../../../sources/chopratejas__headroom/plugins/openclaw/src/index.ts) | entrypoints signal |
| entrypoints | [headroom/proxy/server.py](../../../../sources/chopratejas__headroom/headroom/proxy/server.py) | entrypoints signal |
| entrypoints | [headroom/integrations/mcp/server.py](../../../../sources/chopratejas__headroom/headroom/integrations/mcp/server.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 13 | [sdk/typescript/src/index.ts](../../../../sources/chopratejas__headroom/sdk/typescript/src/index.ts)<br>[plugins/openclaw/src/index.ts](../../../../sources/chopratejas__headroom/plugins/openclaw/src/index.ts)<br>[headroom/proxy/server.py](../../../../sources/chopratejas__headroom/headroom/proxy/server.py)<br>[headroom/integrations/mcp/server.py](../../../../sources/chopratejas__headroom/headroom/integrations/mcp/server.py)<br>[headroom/evals/__main__.py](../../../../sources/chopratejas__headroom/headroom/evals/__main__.py)<br>[headroom/cli/__main__.py](../../../../sources/chopratejas__headroom/headroom/cli/__main__.py)<br>[headroom/cli/main.py](../../../../sources/chopratejas__headroom/headroom/cli/main.py)<br>[crates/headroom-py/src/lib.rs](../../../../sources/chopratejas__headroom/crates/headroom-py/src/lib.rs) |
| agentRuntime | 92 | [wiki/memory.md](../../../../sources/chopratejas__headroom/wiki/memory.md)<br>[tests/fixtures/memory_tool_definitions/anthropic.json](../../../../sources/chopratejas__headroom/tests/fixtures/memory_tool_definitions/anthropic.json)<br>[tests/fixtures/memory_tool_definitions/openai.json](../../../../sources/chopratejas__headroom/tests/fixtures/memory_tool_definitions/openai.json)<br>[sdk/typescript/test/hooks.test.ts](../../../../sources/chopratejas__headroom/sdk/typescript/test/hooks.test.ts)<br>[sdk/typescript/src/hooks.ts](../../../../sources/chopratejas__headroom/sdk/typescript/src/hooks.ts)<br>[sdk/typescript/examples/hooks-custom-compression.ts](../../../../sources/chopratejas__headroom/sdk/typescript/examples/hooks-custom-compression.ts)<br>[sdk/typescript/examples/tool-calling-agent.ts](../../../../sources/chopratejas__headroom/sdk/typescript/examples/tool-calling-agent.ts)<br>[plugins/openclaw/src/tools/headroom-retrieve.ts](../../../../sources/chopratejas__headroom/plugins/openclaw/src/tools/headroom-retrieve.ts) |
| mcp | 32 | [wiki/mcp.md](../../../../sources/chopratejas__headroom/wiki/mcp.md)<br>[tests/test_ccr_mcp_server.py](../../../../sources/chopratejas__headroom/tests/test_ccr_mcp_server.py)<br>[tests/test_proxy/test_mcp_stats_aggregation.py](../../../../sources/chopratejas__headroom/tests/test_proxy/test_mcp_stats_aggregation.py)<br>[tests/test_memory/test_mcp_server.py](../../../../sources/chopratejas__headroom/tests/test_memory/test_mcp_server.py)<br>[tests/test_mcp_registry/__init__.py](../../../../sources/chopratejas__headroom/tests/test_mcp_registry/__init__.py)<br>[tests/test_mcp_registry/test_claude_registrar.py](../../../../sources/chopratejas__headroom/tests/test_mcp_registry/test_claude_registrar.py)<br>[tests/test_mcp_registry/test_codex_registrar.py](../../../../sources/chopratejas__headroom/tests/test_mcp_registry/test_codex_registrar.py)<br>[tests/test_mcp_registry/test_display.py](../../../../sources/chopratejas__headroom/tests/test_mcp_registry/test_display.py) |
| retrieval | 163 | [wiki/agno.md](../../../../sources/chopratejas__headroom/wiki/agno.md)<br>[wiki/api.md](../../../../sources/chopratejas__headroom/wiki/api.md)<br>[wiki/ARCHITECTURE.md](../../../../sources/chopratejas__headroom/wiki/ARCHITECTURE.md)<br>[wiki/benchmarks.md](../../../../sources/chopratejas__headroom/wiki/benchmarks.md)<br>[wiki/ccr.md](../../../../sources/chopratejas__headroom/wiki/ccr.md)<br>[wiki/cli.md](../../../../sources/chopratejas__headroom/wiki/cli.md)<br>[wiki/compression.md](../../../../sources/chopratejas__headroom/wiki/compression.md)<br>[wiki/configuration.md](../../../../sources/chopratejas__headroom/wiki/configuration.md) |
| spec | 30 | [wiki/ARCHITECTURE.md](../../../../sources/chopratejas__headroom/wiki/ARCHITECTURE.md)<br>[wiki/plans/2026-04-11-persistent-installs-design.md](../../../../sources/chopratejas__headroom/wiki/plans/2026-04-11-persistent-installs-design.md)<br>[tests/test_acceptance.py](../../../../sources/chopratejas__headroom/tests/test_acceptance.py)<br>[REALIGNMENT/02-architecture.md](../../../../sources/chopratejas__headroom/REALIGNMENT/02-architecture.md)<br>[plugins/headroom-oauth2/SPEC.md](../../../../sources/chopratejas__headroom/plugins/headroom-oauth2/SPEC.md)<br>[docs/rtk-architecture.md](../../../../sources/chopratejas__headroom/docs/rtk-architecture.md)<br>[docs/spec/001-vision.md](../../../../sources/chopratejas__headroom/docs/spec/001-vision.md)<br>[docs/spec/002-architecture.md](../../../../sources/chopratejas__headroom/docs/spec/002-architecture.md) |
| eval | 738 | [tests/__init__.py](../../../../sources/chopratejas__headroom/tests/__init__.py)<br>[tests/_dotenv.py](../../../../sources/chopratejas__headroom/tests/_dotenv.py)<br>[tests/conftest.py](../../../../sources/chopratejas__headroom/tests/conftest.py)<br>[tests/e2e_real_compression.py](../../../../sources/chopratejas__headroom/tests/e2e_real_compression.py)<br>[tests/e2e_ws_codex_usage_headers.py](../../../../sources/chopratejas__headroom/tests/e2e_ws_codex_usage_headers.py)<br>[tests/e2e_ws_responses_compression.py](../../../../sources/chopratejas__headroom/tests/e2e_ws_responses_compression.py)<br>[tests/repro_unsendable_panic.py](../../../../sources/chopratejas__headroom/tests/repro_unsendable_panic.py)<br>[tests/test_acceptance.py](../../../../sources/chopratejas__headroom/tests/test_acceptance.py) |
| security | 33 | [SECURITY.md](../../../../sources/chopratejas__headroom/SECURITY.md)<br>[tests/test_audit_codex.py](../../../../sources/chopratejas__headroom/tests/test_audit_codex.py)<br>[tests/test_audit_reads.py](../../../../sources/chopratejas__headroom/tests/test_audit_reads.py)<br>[tests/test_auth_mode.py](../../../../sources/chopratejas__headroom/tests/test_auth_mode.py)<br>[tests/test_compression_policy_toin_gate.py](../../../../sources/chopratejas__headroom/tests/test_compression_policy_toin_gate.py)<br>[tests/test_compression_policy.py](../../../../sources/chopratejas__headroom/tests/test_compression_policy.py)<br>[tests/test_copilot_auth.py](../../../../sources/chopratejas__headroom/tests/test_copilot_auth.py)<br>[tests/test_copilot_linux_secret.py](../../../../sources/chopratejas__headroom/tests/test_copilot_linux_secret.py) |
| ci | 17 | [.github/workflows/ci.yml](../../../../sources/chopratejas__headroom/.github/workflows/ci.yml)<br>[.github/workflows/devcontainers.yml](../../../../sources/chopratejas__headroom/.github/workflows/devcontainers.yml)<br>[.github/workflows/docker.yml](../../../../sources/chopratejas__headroom/.github/workflows/docker.yml)<br>[.github/workflows/docs.yml](../../../../sources/chopratejas__headroom/.github/workflows/docs.yml)<br>[.github/workflows/eval.yml](../../../../sources/chopratejas__headroom/.github/workflows/eval.yml)<br>[.github/workflows/init-e2e.yml](../../../../sources/chopratejas__headroom/.github/workflows/init-e2e.yml)<br>[.github/workflows/init-native-e2e.yml](../../../../sources/chopratejas__headroom/.github/workflows/init-native-e2e.yml)<br>[.github/workflows/install-native-e2e.yml](../../../../sources/chopratejas__headroom/.github/workflows/install-native-e2e.yml) |
| container | 14 | [docker-compose.yml](../../../../sources/chopratejas__headroom/docker-compose.yml)<br>[Dockerfile](../../../../sources/chopratejas__headroom/Dockerfile)<br>[examples/deployment/macos-launchagent/com.headroom.proxy.plist.template](../../../../sources/chopratejas__headroom/examples/deployment/macos-launchagent/com.headroom.proxy.plist.template)<br>[examples/deployment/macos-launchagent/install.sh](../../../../sources/chopratejas__headroom/examples/deployment/macos-launchagent/install.sh)<br>[examples/deployment/macos-launchagent/README.md](../../../../sources/chopratejas__headroom/examples/deployment/macos-launchagent/README.md)<br>[examples/deployment/macos-launchagent/shell-integration.sh](../../../../sources/chopratejas__headroom/examples/deployment/macos-launchagent/shell-integration.sh)<br>[examples/deployment/macos-launchagent/uninstall.sh](../../../../sources/chopratejas__headroom/examples/deployment/macos-launchagent/uninstall.sh)<br>[e2e/wrap/Dockerfile](../../../../sources/chopratejas__headroom/e2e/wrap/Dockerfile) |
| instruction | 1 | [.github/copilot-instructions.md](../../../../sources/chopratejas__headroom/.github/copilot-instructions.md) |
| docs | 122 | [mkdocs.yml](../../../../sources/chopratejas__headroom/mkdocs.yml)<br>[README.md](../../../../sources/chopratejas__headroom/README.md)<br>[sdk/typescript/README.md](../../../../sources/chopratejas__headroom/sdk/typescript/README.md)<br>[sdk/typescript/examples/README.md](../../../../sources/chopratejas__headroom/sdk/typescript/examples/README.md)<br>[scripts/README.md](../../../../sources/chopratejas__headroom/scripts/README.md)<br>[plugins/openclaw/README.md](../../../../sources/chopratejas__headroom/plugins/openclaw/README.md)<br>[plugins/hermes/README.md](../../../../sources/chopratejas__headroom/plugins/hermes/README.md)<br>[plugins/headroom-oauth2/README.md](../../../../sources/chopratejas__headroom/plugins/headroom-oauth2/README.md) |
| config | 16 | [Cargo.lock](../../../../sources/chopratejas__headroom/Cargo.lock)<br>[Cargo.toml](../../../../sources/chopratejas__headroom/Cargo.toml)<br>[Makefile](../../../../sources/chopratejas__headroom/Makefile)<br>[pyproject.toml](../../../../sources/chopratejas__headroom/pyproject.toml)<br>[uv.lock](../../../../sources/chopratejas__headroom/uv.lock)<br>[sdk/typescript/package.json](../../../../sources/chopratejas__headroom/sdk/typescript/package.json)<br>[sdk/typescript/tsconfig.json](../../../../sources/chopratejas__headroom/sdk/typescript/tsconfig.json)<br>[plugins/openclaw/package.json](../../../../sources/chopratejas__headroom/plugins/openclaw/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 738 | [tests/__init__.py](../../../../sources/chopratejas__headroom/tests/__init__.py)<br>[tests/_dotenv.py](../../../../sources/chopratejas__headroom/tests/_dotenv.py)<br>[tests/conftest.py](../../../../sources/chopratejas__headroom/tests/conftest.py)<br>[tests/e2e_real_compression.py](../../../../sources/chopratejas__headroom/tests/e2e_real_compression.py)<br>[tests/e2e_ws_codex_usage_headers.py](../../../../sources/chopratejas__headroom/tests/e2e_ws_codex_usage_headers.py)<br>[tests/e2e_ws_responses_compression.py](../../../../sources/chopratejas__headroom/tests/e2e_ws_responses_compression.py) |
| CI workflow | 17 | [.github/workflows/ci.yml](../../../../sources/chopratejas__headroom/.github/workflows/ci.yml)<br>[.github/workflows/devcontainers.yml](../../../../sources/chopratejas__headroom/.github/workflows/devcontainers.yml)<br>[.github/workflows/docker.yml](../../../../sources/chopratejas__headroom/.github/workflows/docker.yml)<br>[.github/workflows/docs.yml](../../../../sources/chopratejas__headroom/.github/workflows/docs.yml)<br>[.github/workflows/eval.yml](../../../../sources/chopratejas__headroom/.github/workflows/eval.yml)<br>[.github/workflows/init-e2e.yml](../../../../sources/chopratejas__headroom/.github/workflows/init-e2e.yml) |
| 컨테이너/배포 | 14 | [docker-compose.yml](../../../../sources/chopratejas__headroom/docker-compose.yml)<br>[Dockerfile](../../../../sources/chopratejas__headroom/Dockerfile)<br>[examples/deployment/macos-launchagent/com.headroom.proxy.plist.template](../../../../sources/chopratejas__headroom/examples/deployment/macos-launchagent/com.headroom.proxy.plist.template)<br>[examples/deployment/macos-launchagent/install.sh](../../../../sources/chopratejas__headroom/examples/deployment/macos-launchagent/install.sh)<br>[examples/deployment/macos-launchagent/README.md](../../../../sources/chopratejas__headroom/examples/deployment/macos-launchagent/README.md)<br>[examples/deployment/macos-launchagent/shell-integration.sh](../../../../sources/chopratejas__headroom/examples/deployment/macos-launchagent/shell-integration.sh) |
| 보안/정책 | 33 | [SECURITY.md](../../../../sources/chopratejas__headroom/SECURITY.md)<br>[tests/test_audit_codex.py](../../../../sources/chopratejas__headroom/tests/test_audit_codex.py)<br>[tests/test_audit_reads.py](../../../../sources/chopratejas__headroom/tests/test_audit_reads.py)<br>[tests/test_auth_mode.py](../../../../sources/chopratejas__headroom/tests/test_auth_mode.py)<br>[tests/test_compression_policy_toin_gate.py](../../../../sources/chopratejas__headroom/tests/test_compression_policy_toin_gate.py)<br>[tests/test_compression_policy.py](../../../../sources/chopratejas__headroom/tests/test_compression_policy.py) |
| 에이전트 지시문 | 1 | [.github/copilot-instructions.md](../../../../sources/chopratejas__headroom/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `wiki/mcp.md`, `tests/test_ccr_mcp_server.py`, `tests/test_proxy/test_mcp_stats_aggregation.py`.
2. entrypoint를 따라 실행 흐름 확인: `sdk/typescript/src/index.ts`, `plugins/openclaw/src/index.ts`, `headroom/proxy/server.py`.
3. agent/tool runtime 매핑: `wiki/memory.md`, `tests/fixtures/memory_tool_definitions/anthropic.json`, `tests/fixtures/memory_tool_definitions/openai.json`.
4. retrieval/memory/indexing 확인: `wiki/agno.md`, `wiki/api.md`, `wiki/ARCHITECTURE.md`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/_dotenv.py`, `tests/conftest.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 60 95% fewer tokens, same answers. Library. 핵심 구조 신호는 Python, pyproject.toml, Cargo.toml, Dockerfile, docker-compose.yml, Makefile이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
