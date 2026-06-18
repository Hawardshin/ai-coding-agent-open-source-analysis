# cisco-ai-defense/mcp-scanner 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Scan MCP servers for potential threats & security findings.

## 요약

- 조사 단위: `sources/cisco-ai-defense__mcp-scanner` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 408 files, 67 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_scanner_entry.py, mcp-scanner.spec, tests/test_custom_variable_mcp.py이고, 의존성 단서는 openai, mcp, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | cisco-ai-defense/mcp-scanner |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 965 |
| Forks | 116 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/cisco-ai-defense__mcp-scanner](../../../../sources/cisco-ai-defense__mcp-scanner) |
| 기존 보고서 | [reports/global-trending/repositories/cisco-ai-defense__mcp-scanner.md](../../../global-trending/repositories/cisco-ai-defense__mcp-scanner.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 408 / 67 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, claude-code-plugin, docs, evals, examples, images, mcpscanner, tests |
| 상위 확장자 | .py: 325, .md: 40, .json: 10, .yara: 10, .txt: 4, .yml: 4, .rego: 3, .sh: 3, (none): 3, .example: 1, .gif: 1, .lock: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 51 |
| docs | documentation surface | 18 |
| examples/example-malicious-servers | examples workspace | 3 |
| examples/example-oauth-server-clients | examples workspace | 2 |
| .github | ci surface | 1 |
| claude-code-plugin | top-level component | 1 |
| evals | top-level component | 1 |
| examples | top-level component | 1 |
| examples/explicit_auth_example.py | examples workspace | 1 |
| examples/mcp_complete_server.py | examples workspace | 1 |
| examples/mcp_docstring_analyzer.py | examples workspace | 1 |
| examples/oauth_example.py | examples workspace | 1 |
| examples/readiness | examples workspace | 1 |
| images | top-level component | 1 |
| mcpscanner | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | mcp-scanner | mcp-scanner |
| utility | pyproject.toml | mcp-scanner-api | mcp-scanner-api |


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
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [mcp_scanner_entry.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcp_scanner_entry.py) | mcp signal |
| mcp | [mcp-scanner.spec](../../../../sources/cisco-ai-defense__mcp-scanner/mcp-scanner.spec) | mcp signal |
| mcp | [tests/test_custom_variable_mcp.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_custom_variable_mcp.py) | mcp signal |
| mcp | [tests/threat_files/malicious_mcp_server.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/threat_files/malicious_mcp_server.py) | mcp signal |
| agentRuntime | [tests/readiness/fixtures/tool_overloaded_scope.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_overloaded_scope.json) | agentRuntime signal |
| agentRuntime | [tests/readiness/fixtures/tool_self_referencing.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_self_referencing.json) | agentRuntime signal |
| agentRuntime | [tests/readiness/fixtures/tool_with_long_timeout.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_with_long_timeout.json) | agentRuntime signal |
| agentRuntime | [tests/readiness/fixtures/tool_with_resources.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_with_resources.json) | agentRuntime signal |
| entrypoints | [tests/threat_files/cross_file_malicious/server.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/threat_files/cross_file_malicious/server.py) | entrypoints signal |
| entrypoints | [mcpscanner/server.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/server.py) | entrypoints signal |
| entrypoints | [examples/example-malicious-servers/server.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/example-malicious-servers/server.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/cisco-ai-defense__mcp-scanner/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [tests/threat_files/cross_file_malicious/server.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/threat_files/cross_file_malicious/server.py)<br>[mcpscanner/server.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/server.py)<br>[examples/example-malicious-servers/server.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/example-malicious-servers/server.py) |
| agentRuntime | 20 | [tests/readiness/fixtures/tool_overloaded_scope.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_overloaded_scope.json)<br>[tests/readiness/fixtures/tool_self_referencing.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_self_referencing.json)<br>[tests/readiness/fixtures/tool_with_long_timeout.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_with_long_timeout.json)<br>[tests/readiness/fixtures/tool_with_resources.json](../../../../sources/cisco-ai-defense__mcp-scanner/tests/readiness/fixtures/tool_with_resources.json)<br>[mcpscanner/data/yara_rules/tool_poisoning.yara](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/data/yara_rules/tool_poisoning.yara)<br>[mcpscanner/core/static_analysis/context_extractor.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/core/static_analysis/context_extractor.py)<br>[evals/behavioral-analysis/data/tool-poisoning/api_key_harvesting_environment.py](../../../../sources/cisco-ai-defense__mcp-scanner/evals/behavioral-analysis/data/tool-poisoning/api_key_harvesting_environment.py)<br>[evals/behavioral-analysis/data/tool-poisoning/conditional_behavior_privileged_users.py](../../../../sources/cisco-ai-defense__mcp-scanner/evals/behavioral-analysis/data/tool-poisoning/conditional_behavior_privileged_users.py) |
| mcp | 11 | [mcp_scanner_entry.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcp_scanner_entry.py)<br>[mcp-scanner.spec](../../../../sources/cisco-ai-defense__mcp-scanner/mcp-scanner.spec)<br>[tests/test_custom_variable_mcp.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_custom_variable_mcp.py)<br>[tests/threat_files/malicious_mcp_server.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/threat_files/malicious_mcp_server.py)<br>[mcpscanner/core/mcp_models.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/core/mcp_models.py)<br>[images/mcp_scanner.gif](../../../../sources/cisco-ai-defense__mcp-scanner/images/mcp_scanner.gif)<br>[examples/mcp_complete_server.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/mcp_complete_server.py)<br>[examples/mcp_docstring_analyzer.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/mcp_docstring_analyzer.py) |
| retrieval | 3 | [mcpscanner/core/static_analysis/interprocedural/call_graph_analyzer.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/core/static_analysis/interprocedural/call_graph_analyzer.py)<br>[mcpscanner/core/static_analysis/interprocedural/treesitter_call_graph.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/core/static_analysis/interprocedural/treesitter_call_graph.py)<br>[evals/behavioral-analysis/data/resource-exhaustion/memory_exhaustion_attack.py](../../../../sources/cisco-ai-defense__mcp-scanner/evals/behavioral-analysis/data/resource-exhaustion/memory_exhaustion_attack.py) |
| spec | 1 | [docs/architecture.md](../../../../sources/cisco-ai-defense__mcp-scanner/docs/architecture.md) |
| eval | 74 | [tests/test_api_analyzer.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_api_analyzer.py)<br>[tests/test_auth.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_auth.py)<br>[tests/test_base.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_base.py)<br>[tests/test_bedrock_integration.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_bedrock_integration.py)<br>[tests/test_cli.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_cli.py)<br>[tests/test_config_parser.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_config_parser.py)<br>[tests/test_config.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_config.py)<br>[tests/test_custom_variable_mcp.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_custom_variable_mcp.py) |
| security | 15 | [SECURITY.md](../../../../sources/cisco-ai-defense__mcp-scanner/SECURITY.md)<br>[tests/test_auth.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_auth.py)<br>[mcpscanner/core/auth.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/core/auth.py)<br>[examples/explicit_auth_example.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/explicit_auth_example.py)<br>[examples/oauth_example.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/oauth_example.py)<br>[examples/readiness/combined_security_readiness_example.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/readiness/combined_security_readiness_example.py)<br>[examples/example-oauth-server-clients/oauth_sse_server.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/example-oauth-server-clients/oauth_sse_server.py)<br>[examples/example-oauth-server-clients/oauth_test_scan.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/example-oauth-server-clients/oauth_test_scan.py) |
| ci | 4 | [.github/workflows/build-macos.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/build-macos.yml)<br>[.github/workflows/ci-cd-run.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/ci-cd-run.yml)<br>[.github/workflows/python-tests.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/python-tests.yml)<br>[.github/workflows/release.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 21 | [README.md](../../../../sources/cisco-ai-defense__mcp-scanner/README.md)<br>[tests/static_analysis/README.md](../../../../sources/cisco-ai-defense__mcp-scanner/tests/static_analysis/README.md)<br>[tests/behavioral/README.md](../../../../sources/cisco-ai-defense__mcp-scanner/tests/behavioral/README.md)<br>[examples/example-malicious-servers/README.md](../../../../sources/cisco-ai-defense__mcp-scanner/examples/example-malicious-servers/README.md)<br>[evals/README.md](../../../../sources/cisco-ai-defense__mcp-scanner/evals/README.md)<br>[docs/api-reference.md](../../../../sources/cisco-ai-defense__mcp-scanner/docs/api-reference.md)<br>[docs/architecture.md](../../../../sources/cisco-ai-defense__mcp-scanner/docs/architecture.md)<br>[docs/authentication.md](../../../../sources/cisco-ai-defense__mcp-scanner/docs/authentication.md) |
| config | 2 | [pyproject.toml](../../../../sources/cisco-ai-defense__mcp-scanner/pyproject.toml)<br>[uv.lock](../../../../sources/cisco-ai-defense__mcp-scanner/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 74 | [tests/test_api_analyzer.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_api_analyzer.py)<br>[tests/test_auth.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_auth.py)<br>[tests/test_base.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_base.py)<br>[tests/test_bedrock_integration.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_bedrock_integration.py)<br>[tests/test_cli.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_cli.py)<br>[tests/test_config_parser.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_config_parser.py) |
| CI workflow | 4 | [.github/workflows/build-macos.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/build-macos.yml)<br>[.github/workflows/ci-cd-run.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/ci-cd-run.yml)<br>[.github/workflows/python-tests.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/python-tests.yml)<br>[.github/workflows/release.yml](../../../../sources/cisco-ai-defense__mcp-scanner/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 15 | [SECURITY.md](../../../../sources/cisco-ai-defense__mcp-scanner/SECURITY.md)<br>[tests/test_auth.py](../../../../sources/cisco-ai-defense__mcp-scanner/tests/test_auth.py)<br>[mcpscanner/core/auth.py](../../../../sources/cisco-ai-defense__mcp-scanner/mcpscanner/core/auth.py)<br>[examples/explicit_auth_example.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/explicit_auth_example.py)<br>[examples/oauth_example.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/oauth_example.py)<br>[examples/readiness/combined_security_readiness_example.py](../../../../sources/cisco-ai-defense__mcp-scanner/examples/readiness/combined_security_readiness_example.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp_scanner_entry.py`, `mcp-scanner.spec`, `tests/test_custom_variable_mcp.py`.
2. entrypoint를 따라 실행 흐름 확인: `tests/threat_files/cross_file_malicious/server.py`, `mcpscanner/server.py`, `examples/example-malicious-servers/server.py`.
3. agent/tool runtime 매핑: `tests/readiness/fixtures/tool_overloaded_scope.json`, `tests/readiness/fixtures/tool_self_referencing.json`, `tests/readiness/fixtures/tool_with_long_timeout.json`.
4. retrieval/memory/indexing 확인: `mcpscanner/core/static_analysis/interprocedural/call_graph_analyzer.py`, `mcpscanner/core/static_analysis/interprocedural/treesitter_call_graph.py`, `evals/behavioral-analysis/data/resource-exhaustion/memory_exhaustion_attack.py`.
5. test/eval 파일로 동작 검증: `tests/test_api_analyzer.py`, `tests/test_auth.py`, `tests/test_base.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Scan MCP servers for potential threats & security findings.. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, mcp이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
