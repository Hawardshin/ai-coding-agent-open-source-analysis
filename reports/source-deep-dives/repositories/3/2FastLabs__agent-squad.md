# 2FastLabs/agent-squad 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Flexible and powerful framework for managing multiple AI agents and handling complex conversations

## 요약

- 조사 단위: `sources/2FastLabs__agent-squad` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 396 files, 129 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=typescript/tests/agents/Agents.test.ts, typescript/tests/agents/LambdaAgent.test.ts, typescript/tests/agents/OpenAi.test.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | 2FastLabs/agent-squad |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 7661 |
| Forks | 721 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/2FastLabs__agent-squad](../../../../sources/2FastLabs__agent-squad) |
| 기존 보고서 | [reports/global-trending/repositories/2FastLabs__agent-squad.md](../../../global-trending/repositories/2FastLabs__agent-squad.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 396 / 129 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, docs, examples, img, python, typescript |
| 상위 확장자 | .py: 95, .ts: 86, .md: 40, .mdx: 35, .json: 26, .png: 16, .jpg: 15, (none): 15, .yml: 14, .js: 9, .txt: 9, .css: 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 29 |
| examples/chat-demo-app | examples workspace | 17 |
| examples/ecommerce-support-simulator | examples workspace | 11 |
| examples/python | examples workspace | 9 |
| examples/fast-api-streaming | examples workspace | 4 |
| examples/langfuse-demo | examples workspace | 4 |
| examples/bedrock-flows | examples workspace | 3 |
| examples/chat-chainlit-app | examples workspace | 3 |
| examples/strands-agents-demo | examples workspace | 3 |
| examples/text-2-structured-output | examples workspace | 3 |
| examples/bedrock-inline-agents | examples workspace | 2 |
| examples/bedrock-prompt-routing | examples workspace | 2 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/local-demo | examples workspace | 1 |
| examples/python-demo | examples workspace | 1 |
| examples/supervisor-mode | examples workspace | 1 |
| img | top-level component | 1 |


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
| agentRuntime | [typescript/tests/agents/Agents.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/agents/Agents.test.ts) | agentRuntime signal |
| agentRuntime | [typescript/tests/agents/LambdaAgent.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/agents/LambdaAgent.test.ts) | agentRuntime signal |
| agentRuntime | [typescript/tests/agents/OpenAi.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/agents/OpenAi.test.ts) | agentRuntime signal |
| agentRuntime | [typescript/src/utils/tool.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/utils/tool.ts) | agentRuntime signal |
| entrypoints | [typescript/src/index.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [examples/supervisor-mode/main.py](../../../../sources/2FastLabs__agent-squad/examples/supervisor-mode/main.py) | entrypoints signal |
| entrypoints | [examples/strands-agents-demo/main.py](../../../../sources/2FastLabs__agent-squad/examples/strands-agents-demo/main.py) | entrypoints signal |
| entrypoints | [examples/python-demo/main.py](../../../../sources/2FastLabs__agent-squad/examples/python-demo/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/2FastLabs__agent-squad/CLAUDE.md) | instruction signal |
| config | [typescript/package.json](../../../../sources/2FastLabs__agent-squad/typescript/package.json) | config signal |
| config | [typescript/tsconfig.json](../../../../sources/2FastLabs__agent-squad/typescript/tsconfig.json) | config signal |
| config | [python/Makefile](../../../../sources/2FastLabs__agent-squad/python/Makefile) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 13 | [typescript/src/index.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/index.ts)<br>[examples/supervisor-mode/main.py](../../../../sources/2FastLabs__agent-squad/examples/supervisor-mode/main.py)<br>[examples/strands-agents-demo/main.py](../../../../sources/2FastLabs__agent-squad/examples/strands-agents-demo/main.py)<br>[examples/python-demo/main.py](../../../../sources/2FastLabs__agent-squad/examples/python-demo/main.py)<br>[examples/langfuse-demo/main.py](../../../../sources/2FastLabs__agent-squad/examples/langfuse-demo/main.py)<br>[examples/fast-api-streaming/main.py](../../../../sources/2FastLabs__agent-squad/examples/fast-api-streaming/main.py)<br>[examples/ecommerce-support-simulator/bin/ai-ecommerce-support-simulator.ts](../../../../sources/2FastLabs__agent-squad/examples/ecommerce-support-simulator/bin/ai-ecommerce-support-simulator.ts)<br>[examples/chat-demo-app/bin/chat-demo-app.ts](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/bin/chat-demo-app.ts) |
| agentRuntime | 94 | [typescript/tests/agents/Agents.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/agents/Agents.test.ts)<br>[typescript/tests/agents/LambdaAgent.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/agents/LambdaAgent.test.ts)<br>[typescript/tests/agents/OpenAi.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/agents/OpenAi.test.ts)<br>[typescript/src/utils/tool.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/utils/tool.ts)<br>[typescript/src/agents/agent.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/agents/agent.ts)<br>[typescript/src/agents/amazonBedrockAgent.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/agents/amazonBedrockAgent.ts)<br>[typescript/src/agents/anthropicAgent.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/agents/anthropicAgent.ts)<br>[typescript/src/agents/bedrockFlowsAgent.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/agents/bedrockFlowsAgent.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 15 | [typescript/src/index.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/index.ts)<br>[typescript/src/types/index.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/types/index.ts)<br>[python/src/tests/storage/test_in_memory_chat_storage.py](../../../../sources/2FastLabs__agent-squad/python/src/tests/storage/test_in_memory_chat_storage.py)<br>[python/src/agent_squad/storage/in_memory_chat_storage.py](../../../../sources/2FastLabs__agent-squad/python/src/agent_squad/storage/in_memory_chat_storage.py)<br>[examples/ecommerce-support-simulator/resources/ui/src/pages/index.astro](../../../../sources/2FastLabs__agent-squad/examples/ecommerce-support-simulator/resources/ui/src/pages/index.astro)<br>[examples/ecommerce-support-simulator/lambda/supportMessage/index.ts](../../../../sources/2FastLabs__agent-squad/examples/ecommerce-support-simulator/lambda/supportMessage/index.ts)<br>[examples/ecommerce-support-simulator/lambda/sendResponse/index.ts](../../../../sources/2FastLabs__agent-squad/examples/ecommerce-support-simulator/lambda/sendResponse/index.ts)<br>[examples/ecommerce-support-simulator/lambda/customerMessage/index.ts](../../../../sources/2FastLabs__agent-squad/examples/ecommerce-support-simulator/lambda/customerMessage/index.ts) |
| spec | 9 | [python/test_requirements.txt](../../../../sources/2FastLabs__agent-squad/python/test_requirements.txt)<br>[examples/text-2-structured-output/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/text-2-structured-output/requirements.txt)<br>[examples/strands-agents-demo/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/strands-agents-demo/requirements.txt)<br>[examples/python/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/python/requirements.txt)<br>[examples/python/travel-planner/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/python/travel-planner/requirements.txt)<br>[examples/python/movie-production/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/python/movie-production/requirements.txt)<br>[examples/langfuse-demo/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/langfuse-demo/requirements.txt)<br>[examples/fast-api-streaming/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/fast-api-streaming/requirements.txt) |
| eval | 48 | [typescript/tests/Orchestrator.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/Orchestrator.test.ts)<br>[typescript/tests/utils/Utils.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/utils/Utils.test.ts)<br>[typescript/tests/storage/ChatStorage.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/storage/ChatStorage.test.ts)<br>[typescript/tests/retrievers/Retriever.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/retrievers/Retriever.test.ts)<br>[typescript/tests/mock/mockAgent.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/mock/mockAgent.ts)<br>[typescript/tests/classifiers/AnthropicClassifier.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/classifiers/AnthropicClassifier.test.ts)<br>[typescript/tests/classifiers/BedrockClassifier.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/classifiers/BedrockClassifier.test.ts)<br>[typescript/tests/classifiers/Classifier.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/classifiers/Classifier.test.ts) |
| security | 5 | [examples/chat-demo-app/lib/CustomResourcesLambda/permission-validation.ts](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lib/CustomResourcesLambda/permission-validation.ts)<br>[examples/chat-demo-app/lambda/auth/index.mjs](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lambda/auth/index.mjs)<br>[examples/chat-demo-app/lambda/auth/package-lock.json](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lambda/auth/package-lock.json)<br>[examples/chat-demo-app/lambda/auth/package.json](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lambda/auth/package.json)<br>[.github/workflows/ts-run-security-checks.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/ts-run-security-checks.yml) |
| ci | 12 | [.github/workflows/claude-code-review.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/claude.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/npm-publish.yml)<br>[.github/workflows/on-docs-update.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/on-docs-update.yml)<br>[.github/workflows/on-issue-opened.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/on-issue-opened.yml)<br>[.github/workflows/on-push.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/on-push.yml)<br>[.github/workflows/pr-issue-link-checker.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/pr-issue-link-checker.yml)<br>[.github/workflows/py-run-tests.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/py-run-tests.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/2FastLabs__agent-squad/CLAUDE.md) |
| docs | 96 | [README.md](../../../../sources/2FastLabs__agent-squad/README.md)<br>[typescript/README.md](../../../../sources/2FastLabs__agent-squad/typescript/README.md)<br>[python/README.md](../../../../sources/2FastLabs__agent-squad/python/README.md)<br>[examples/text-2-structured-output/README.md](../../../../sources/2FastLabs__agent-squad/examples/text-2-structured-output/README.md)<br>[examples/python/readme.md](../../../../sources/2FastLabs__agent-squad/examples/python/readme.md)<br>[examples/python/travel-planner/readme.md](../../../../sources/2FastLabs__agent-squad/examples/python/travel-planner/readme.md)<br>[examples/python/movie-production/readme.md](../../../../sources/2FastLabs__agent-squad/examples/python/movie-production/readme.md)<br>[examples/langfuse-demo/readme.md](../../../../sources/2FastLabs__agent-squad/examples/langfuse-demo/readme.md) |
| config | 24 | [typescript/package.json](../../../../sources/2FastLabs__agent-squad/typescript/package.json)<br>[typescript/tsconfig.json](../../../../sources/2FastLabs__agent-squad/typescript/tsconfig.json)<br>[python/Makefile](../../../../sources/2FastLabs__agent-squad/python/Makefile)<br>[python/pyproject.toml](../../../../sources/2FastLabs__agent-squad/python/pyproject.toml)<br>[examples/text-2-structured-output/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/text-2-structured-output/requirements.txt)<br>[examples/strands-agents-demo/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/strands-agents-demo/requirements.txt)<br>[examples/python/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/python/requirements.txt)<br>[examples/python/travel-planner/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/python/travel-planner/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 48 | [typescript/tests/Orchestrator.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/Orchestrator.test.ts)<br>[typescript/tests/utils/Utils.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/utils/Utils.test.ts)<br>[typescript/tests/storage/ChatStorage.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/storage/ChatStorage.test.ts)<br>[typescript/tests/retrievers/Retriever.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/retrievers/Retriever.test.ts)<br>[typescript/tests/mock/mockAgent.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/mock/mockAgent.ts)<br>[typescript/tests/classifiers/AnthropicClassifier.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/classifiers/AnthropicClassifier.test.ts) |
| CI workflow | 12 | [.github/workflows/claude-code-review.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/claude.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/npm-publish.yml)<br>[.github/workflows/on-docs-update.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/on-docs-update.yml)<br>[.github/workflows/on-issue-opened.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/on-issue-opened.yml)<br>[.github/workflows/on-push.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/on-push.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 5 | [examples/chat-demo-app/lib/CustomResourcesLambda/permission-validation.ts](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lib/CustomResourcesLambda/permission-validation.ts)<br>[examples/chat-demo-app/lambda/auth/index.mjs](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lambda/auth/index.mjs)<br>[examples/chat-demo-app/lambda/auth/package-lock.json](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lambda/auth/package-lock.json)<br>[examples/chat-demo-app/lambda/auth/package.json](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lambda/auth/package.json)<br>[.github/workflows/ts-run-security-checks.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/ts-run-security-checks.yml) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/2FastLabs__agent-squad/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `typescript/tests/agents/Agents.test.ts`, `typescript/tests/agents/LambdaAgent.test.ts`, `typescript/tests/agents/OpenAi.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `typescript/src/index.ts`, `examples/supervisor-mode/main.py`, `examples/strands-agents-demo/main.py`.
3. agent/tool runtime 매핑: `typescript/tests/agents/Agents.test.ts`, `typescript/tests/agents/LambdaAgent.test.ts`, `typescript/tests/agents/OpenAi.test.ts`.
4. retrieval/memory/indexing 확인: `typescript/src/index.ts`, `typescript/src/types/index.ts`, `python/src/tests/storage/test_in_memory_chat_storage.py`.
5. test/eval 파일로 동작 검증: `typescript/tests/Orchestrator.test.ts`, `typescript/tests/utils/Utils.test.ts`, `typescript/tests/storage/ChatStorage.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Flexible and powerful framework for managing multiple AI agents and handling complex conversations. 핵심 구조 신호는 Python, README.md, CLAUDE.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
