# awslabs/run-model-context-protocol-servers-with-aws-lambda 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Run existing Model Context Protocol (MCP) stdio-based servers in AWS Lambda functions

## 요약

- 조사 단위: `sources/awslabs__run-model-context-protocol-servers-with-aws-lambda` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 208 files, 54 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=src/python/tests/minimal_mcp_server/echo_server.py, src/python/src/mcp_lambda/__init__.py, src/python/src/mcp_lambda/server_adapter/__init__.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | awslabs/run-model-context-protocol-servers-with-aws-lambda |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 373 |
| Forks | 46 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/awslabs__run-model-context-protocol-servers-with-aws-lambda](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda) |
| 기존 보고서 | [reports/global-trending/repositories/awslabs__run-model-context-protocol-servers-with-aws-lambda.md](../../../global-trending/repositories/awslabs__run-model-context-protocol-servers-with-aws-lambda.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 208 / 54 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, e2e_tests, examples, pipeline, scripts, src |
| 상위 확장자 | .json: 50, .py: 45, .ts: 42, .md: 20, .txt: 13, (none): 12, .yml: 11, .sh: 8, .toml: 2, .yaml: 2, .js: 1, .lock: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/servers | examples workspace | 72 |
| src | source boundary | 40 |
| examples/chatbots | examples workspace | 10 |
| .github | ci surface | 1 |
| e2e_tests | validation surface | 1 |
| examples | top-level component | 1 |
| pipeline | top-level component | 1 |
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
| mcp | [src/python/tests/minimal_mcp_server/echo_server.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/tests/minimal_mcp_server/echo_server.py) | mcp signal |
| mcp | [src/python/src/mcp_lambda/__init__.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/src/mcp_lambda/__init__.py) | mcp signal |
| mcp | [src/python/src/mcp_lambda/server_adapter/__init__.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/src/mcp_lambda/server_adapter/__init__.py) | mcp signal |
| mcp | [src/python/src/mcp_lambda/server_adapter/adapter.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/src/mcp_lambda/server_adapter/adapter.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/AGENTS.md) | agentRuntime signal |
| agentRuntime | [e2e_tests/python/tool_call_evaluator.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/e2e_tests/python/tool_call_evaluator.py) | agentRuntime signal |
| entrypoints | [src/typescript/src/index.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [examples/chatbots/typescript/src/main.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/chatbots/typescript/src/main.ts) | entrypoints signal |
| entrypoints | [examples/chatbots/python/main.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/chatbots/python/main.py) | entrypoints signal |
| entrypoints | [e2e_tests/typescript/src/main.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/e2e_tests/typescript/src/main.ts) | entrypoints signal |
| config | [src/typescript/package.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/package.json) | config signal |
| config | [src/typescript/tsconfig.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [src/typescript/src/index.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/src/index.ts)<br>[examples/chatbots/typescript/src/main.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/chatbots/typescript/src/main.ts)<br>[examples/chatbots/python/main.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/chatbots/python/main.py)<br>[e2e_tests/typescript/src/main.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/e2e_tests/typescript/src/main.ts)<br>[e2e_tests/python/main.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/e2e_tests/python/main.py) |
| agentRuntime | 2 | [AGENTS.md](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/AGENTS.md)<br>[e2e_tests/python/tool_call_evaluator.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/e2e_tests/python/tool_call_evaluator.py) |
| mcp | 28 | [src/python/tests/minimal_mcp_server/echo_server.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/tests/minimal_mcp_server/echo_server.py)<br>[src/python/src/mcp_lambda/__init__.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/src/mcp_lambda/__init__.py)<br>[src/python/src/mcp_lambda/server_adapter/__init__.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/src/mcp_lambda/server_adapter/__init__.py)<br>[src/python/src/mcp_lambda/server_adapter/adapter.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/src/mcp_lambda/server_adapter/adapter.py)<br>[src/python/src/mcp_lambda/server_adapter/stdio_server_adapter_request_handler.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/src/mcp_lambda/server_adapter/stdio_server_adapter_request_handler.py)<br>[src/python/src/mcp_lambda/handlers/__init__.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/src/mcp_lambda/handlers/__init__.py)<br>[src/python/src/mcp_lambda/handlers/api_gateway_proxy_event_handler.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/src/mcp_lambda/handlers/api_gateway_proxy_event_handler.py)<br>[src/python/src/mcp_lambda/handlers/api_gateway_proxy_event_v2_handler.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/src/mcp_lambda/handlers/api_gateway_proxy_event_v2_handler.py) |
| retrieval | 9 | [src/typescript/src/index.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/src/index.ts)<br>[src/typescript/src/server-adapter/index.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/src/server-adapter/index.ts)<br>[src/typescript/src/handlers/index.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/src/handlers/index.ts)<br>[src/typescript/src/client/index.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/src/client/index.ts)<br>[examples/servers/time/function/index.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/time/function/index.py)<br>[examples/servers/sns-sqs/function/index.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/sns-sqs/function/index.py)<br>[examples/servers/mcpdoc/function/index.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/mcpdoc/function/index.py)<br>[examples/servers/dad-jokes/function/index.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/dad-jokes/function/index.py) |
| spec | 13 | [examples/servers/zen/requirements.txt](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/zen/requirements.txt)<br>[examples/servers/time/requirements.txt](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/time/requirements.txt)<br>[examples/servers/time/function/requirements.txt](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/time/function/requirements.txt)<br>[examples/servers/sns-sqs/requirements.txt](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/sns-sqs/requirements.txt)<br>[examples/servers/sns-sqs/function/requirements.txt](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/sns-sqs/function/requirements.txt)<br>[examples/servers/mcpdoc/requirements.txt](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/mcpdoc/requirements.txt)<br>[examples/servers/mcpdoc/function/requirements.txt](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/mcpdoc/function/requirements.txt)<br>[examples/servers/dad-jokes/requirements.txt](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/dad-jokes/requirements.txt) |
| eval | 41 | [src/typescript/tsconfig.test.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/tsconfig.test.json)<br>[src/typescript/test-stdio-server/echoServer.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/test-stdio-server/echoServer.ts)<br>[src/typescript/src/server-adapter/stdioServerAdapter.test.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/src/server-adapter/stdioServerAdapter.test.ts)<br>[src/typescript/src/server-adapter/stdioServerAdapterRequestHandler.test.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/src/server-adapter/stdioServerAdapterRequestHandler.test.ts)<br>[src/typescript/src/handlers/handlers.test.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/src/handlers/handlers.test.ts)<br>[src/typescript/src/client/lambdaFunction.test.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/src/client/lambdaFunction.test.ts)<br>[src/typescript/src/client/streamableHttpWithSigV4.test.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/src/client/streamableHttpWithSigV4.test.ts)<br>[src/python/tests/test_clean_tool_schema.py](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/tests/test_clean_tool_schema.py) |
| security | 19 | [pipeline/codebuild-assume-role-policy.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/pipeline/codebuild-assume-role-policy.json)<br>[pipeline/codebuild-role-policy.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/pipeline/codebuild-role-policy.json)<br>[examples/servers/bedrock-agentcore-gateway-assume-role-policy.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/bedrock-agentcore-gateway-assume-role-policy.json)<br>[examples/servers/bedrock-agentcore-gateway-role-policy.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/bedrock-agentcore-gateway-role-policy.json)<br>[examples/servers/lambda-assume-role-policy.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/lambda-assume-role-policy.json)<br>[examples/servers/lambda-function-role-policy.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/lambda-function-role-policy.json)<br>[examples/servers/lambda-function-sns-sqs-policy.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/lambda-function-sns-sqs-policy.json)<br>[examples/servers/auth/package-lock.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/auth/package-lock.json) |
| ci | 9 | [.github/workflows/cdk-checks.yml](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/.github/workflows/cdk-checks.yml)<br>[.github/workflows/check-uv-lock.yml](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/.github/workflows/check-uv-lock.yml)<br>[.github/workflows/integ-tests.yml](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/.github/workflows/integ-tests.yml)<br>[.github/workflows/lint-pr.yml](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/.github/workflows/lint-pr.yml)<br>[.github/workflows/python-checks.yml](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/.github/workflows/python-checks.yml)<br>[.github/workflows/release.yml](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/.github/workflows/release.yml)<br>[.github/workflows/typescript-checks.yml](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/.github/workflows/typescript-checks.yml)<br>[.github/workflows/unit-tests.yml](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/.github/workflows/unit-tests.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/AGENTS.md) |
| docs | 14 | [README.md](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/README.md)<br>[src/python/README.md](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/README.md)<br>[pipeline/README.md](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/pipeline/README.md)<br>[examples/servers/zen/README.md](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/zen/README.md)<br>[examples/servers/weather-alerts/README.md](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/weather-alerts/README.md)<br>[examples/servers/time/README.md](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/time/README.md)<br>[examples/servers/sns-sqs/README.md](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/sns-sqs/README.md)<br>[examples/servers/mcpdoc/README.md](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/mcpdoc/README.md) |
| config | 33 | [src/typescript/package.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/package.json)<br>[src/typescript/tsconfig.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/tsconfig.json)<br>[src/python/pyproject.toml](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/pyproject.toml)<br>[src/python/uv.lock](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/python/uv.lock)<br>[pipeline/package.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/pipeline/package.json)<br>[pipeline/tsconfig.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/pipeline/tsconfig.json)<br>[examples/servers/zen/requirements.txt](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/zen/requirements.txt)<br>[examples/servers/weather-alerts/package.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/weather-alerts/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 41 | [src/typescript/tsconfig.test.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/tsconfig.test.json)<br>[src/typescript/test-stdio-server/echoServer.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/test-stdio-server/echoServer.ts)<br>[src/typescript/src/server-adapter/stdioServerAdapter.test.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/src/server-adapter/stdioServerAdapter.test.ts)<br>[src/typescript/src/server-adapter/stdioServerAdapterRequestHandler.test.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/src/server-adapter/stdioServerAdapterRequestHandler.test.ts)<br>[src/typescript/src/handlers/handlers.test.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/src/handlers/handlers.test.ts)<br>[src/typescript/src/client/lambdaFunction.test.ts](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/src/typescript/src/client/lambdaFunction.test.ts) |
| CI workflow | 9 | [.github/workflows/cdk-checks.yml](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/.github/workflows/cdk-checks.yml)<br>[.github/workflows/check-uv-lock.yml](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/.github/workflows/check-uv-lock.yml)<br>[.github/workflows/integ-tests.yml](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/.github/workflows/integ-tests.yml)<br>[.github/workflows/lint-pr.yml](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/.github/workflows/lint-pr.yml)<br>[.github/workflows/python-checks.yml](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/.github/workflows/python-checks.yml)<br>[.github/workflows/release.yml](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 19 | [pipeline/codebuild-assume-role-policy.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/pipeline/codebuild-assume-role-policy.json)<br>[pipeline/codebuild-role-policy.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/pipeline/codebuild-role-policy.json)<br>[examples/servers/bedrock-agentcore-gateway-assume-role-policy.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/bedrock-agentcore-gateway-assume-role-policy.json)<br>[examples/servers/bedrock-agentcore-gateway-role-policy.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/bedrock-agentcore-gateway-role-policy.json)<br>[examples/servers/lambda-assume-role-policy.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/lambda-assume-role-policy.json)<br>[examples/servers/lambda-function-role-policy.json](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/examples/servers/lambda-function-role-policy.json) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/awslabs__run-model-context-protocol-servers-with-aws-lambda/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/python/tests/minimal_mcp_server/echo_server.py`, `src/python/src/mcp_lambda/__init__.py`, `src/python/src/mcp_lambda/server_adapter/__init__.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/typescript/src/index.ts`, `examples/chatbots/typescript/src/main.ts`, `examples/chatbots/python/main.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `e2e_tests/python/tool_call_evaluator.py`.
4. retrieval/memory/indexing 확인: `src/typescript/src/index.ts`, `src/typescript/src/server-adapter/index.ts`, `src/typescript/src/handlers/index.ts`.
5. test/eval 파일로 동작 검증: `src/typescript/tsconfig.test.json`, `src/typescript/test-stdio-server/echoServer.ts`, `src/typescript/src/server-adapter/stdioServerAdapter.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Run existing Model Context Protocol MCP stdio based servers in AWS Lambda functions. 핵심 구조 신호는 Python, README.md, AGENTS.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
