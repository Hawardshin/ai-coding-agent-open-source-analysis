# 2FastLabs/agent-squad Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Flexible and powerful framework for managing multiple AI agents and handling complex conversations

## 요약

- 조사 단위: `sources/2FastLabs__agent-squad` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 396 files, 129 directories, depth score 117, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=typescript/tests/agents/Agents.test.ts, typescript/tests/agents/LambdaAgent.test.ts, typescript/tests/agents/OpenAi.test.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | 2FastLabs/agent-squad |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 7661 |
| Forks | 721 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/2FastLabs__agent-squad](../../../../sources/2FastLabs__agent-squad) |
| Existing report | [reports/global-trending/repositories/2FastLabs__agent-squad.md](../../../global-trending/repositories/2FastLabs__agent-squad.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 396 / 129 |
| Max observed depth | 7 |
| Top directories | .github, docs, examples, img, python, typescript |
| Top extensions | .py: 95, .ts: 86, .md: 40, .mdx: 35, .json: 26, .png: 16, .jpg: 15, (none): 15, .yml: 14, .js: 9, .txt: 9, .css: 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 13 | [typescript/src/index.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/index.ts)<br>[examples/supervisor-mode/main.py](../../../../sources/2FastLabs__agent-squad/examples/supervisor-mode/main.py)<br>[examples/strands-agents-demo/main.py](../../../../sources/2FastLabs__agent-squad/examples/strands-agents-demo/main.py)<br>[examples/python-demo/main.py](../../../../sources/2FastLabs__agent-squad/examples/python-demo/main.py)<br>[examples/langfuse-demo/main.py](../../../../sources/2FastLabs__agent-squad/examples/langfuse-demo/main.py)<br>[examples/fast-api-streaming/main.py](../../../../sources/2FastLabs__agent-squad/examples/fast-api-streaming/main.py)<br>[examples/ecommerce-support-simulator/bin/ai-ecommerce-support-simulator.ts](../../../../sources/2FastLabs__agent-squad/examples/ecommerce-support-simulator/bin/ai-ecommerce-support-simulator.ts)<br>[examples/chat-demo-app/bin/chat-demo-app.ts](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/bin/chat-demo-app.ts) |
| agentRuntime | 94 | [typescript/tests/agents/Agents.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/agents/Agents.test.ts)<br>[typescript/tests/agents/LambdaAgent.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/agents/LambdaAgent.test.ts)<br>[typescript/tests/agents/OpenAi.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/agents/OpenAi.test.ts)<br>[typescript/src/utils/tool.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/utils/tool.ts)<br>[typescript/src/agents/agent.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/agents/agent.ts)<br>[typescript/src/agents/amazonBedrockAgent.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/agents/amazonBedrockAgent.ts)<br>[typescript/src/agents/anthropicAgent.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/agents/anthropicAgent.ts)<br>[typescript/src/agents/bedrockFlowsAgent.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/agents/bedrockFlowsAgent.ts) |
| mcp | 0 | not obvious |
| retrieval | 15 | [typescript/src/index.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/index.ts)<br>[typescript/src/types/index.ts](../../../../sources/2FastLabs__agent-squad/typescript/src/types/index.ts)<br>[python/src/tests/storage/test_in_memory_chat_storage.py](../../../../sources/2FastLabs__agent-squad/python/src/tests/storage/test_in_memory_chat_storage.py)<br>[python/src/agent_squad/storage/in_memory_chat_storage.py](../../../../sources/2FastLabs__agent-squad/python/src/agent_squad/storage/in_memory_chat_storage.py)<br>[examples/ecommerce-support-simulator/resources/ui/src/pages/index.astro](../../../../sources/2FastLabs__agent-squad/examples/ecommerce-support-simulator/resources/ui/src/pages/index.astro)<br>[examples/ecommerce-support-simulator/lambda/supportMessage/index.ts](../../../../sources/2FastLabs__agent-squad/examples/ecommerce-support-simulator/lambda/supportMessage/index.ts)<br>[examples/ecommerce-support-simulator/lambda/sendResponse/index.ts](../../../../sources/2FastLabs__agent-squad/examples/ecommerce-support-simulator/lambda/sendResponse/index.ts)<br>[examples/ecommerce-support-simulator/lambda/customerMessage/index.ts](../../../../sources/2FastLabs__agent-squad/examples/ecommerce-support-simulator/lambda/customerMessage/index.ts) |
| spec | 9 | [python/test_requirements.txt](../../../../sources/2FastLabs__agent-squad/python/test_requirements.txt)<br>[examples/text-2-structured-output/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/text-2-structured-output/requirements.txt)<br>[examples/strands-agents-demo/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/strands-agents-demo/requirements.txt)<br>[examples/python/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/python/requirements.txt)<br>[examples/python/travel-planner/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/python/travel-planner/requirements.txt)<br>[examples/python/movie-production/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/python/movie-production/requirements.txt)<br>[examples/langfuse-demo/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/langfuse-demo/requirements.txt)<br>[examples/fast-api-streaming/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/fast-api-streaming/requirements.txt) |
| eval | 48 | [typescript/tests/Orchestrator.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/Orchestrator.test.ts)<br>[typescript/tests/utils/Utils.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/utils/Utils.test.ts)<br>[typescript/tests/storage/ChatStorage.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/storage/ChatStorage.test.ts)<br>[typescript/tests/retrievers/Retriever.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/retrievers/Retriever.test.ts)<br>[typescript/tests/mock/mockAgent.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/mock/mockAgent.ts)<br>[typescript/tests/classifiers/AnthropicClassifier.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/classifiers/AnthropicClassifier.test.ts)<br>[typescript/tests/classifiers/BedrockClassifier.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/classifiers/BedrockClassifier.test.ts)<br>[typescript/tests/classifiers/Classifier.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/classifiers/Classifier.test.ts) |
| security | 5 | [examples/chat-demo-app/lib/CustomResourcesLambda/permission-validation.ts](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lib/CustomResourcesLambda/permission-validation.ts)<br>[examples/chat-demo-app/lambda/auth/index.mjs](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lambda/auth/index.mjs)<br>[examples/chat-demo-app/lambda/auth/package-lock.json](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lambda/auth/package-lock.json)<br>[examples/chat-demo-app/lambda/auth/package.json](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lambda/auth/package.json)<br>[.github/workflows/ts-run-security-checks.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/ts-run-security-checks.yml) |
| ci | 12 | [.github/workflows/claude-code-review.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/claude.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/npm-publish.yml)<br>[.github/workflows/on-docs-update.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/on-docs-update.yml)<br>[.github/workflows/on-issue-opened.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/on-issue-opened.yml)<br>[.github/workflows/on-push.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/on-push.yml)<br>[.github/workflows/pr-issue-link-checker.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/pr-issue-link-checker.yml)<br>[.github/workflows/py-run-tests.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/py-run-tests.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/2FastLabs__agent-squad/CLAUDE.md) |
| docs | 96 | [README.md](../../../../sources/2FastLabs__agent-squad/README.md)<br>[typescript/README.md](../../../../sources/2FastLabs__agent-squad/typescript/README.md)<br>[python/README.md](../../../../sources/2FastLabs__agent-squad/python/README.md)<br>[examples/text-2-structured-output/README.md](../../../../sources/2FastLabs__agent-squad/examples/text-2-structured-output/README.md)<br>[examples/python/readme.md](../../../../sources/2FastLabs__agent-squad/examples/python/readme.md)<br>[examples/python/travel-planner/readme.md](../../../../sources/2FastLabs__agent-squad/examples/python/travel-planner/readme.md)<br>[examples/python/movie-production/readme.md](../../../../sources/2FastLabs__agent-squad/examples/python/movie-production/readme.md)<br>[examples/langfuse-demo/readme.md](../../../../sources/2FastLabs__agent-squad/examples/langfuse-demo/readme.md) |
| config | 24 | [typescript/package.json](../../../../sources/2FastLabs__agent-squad/typescript/package.json)<br>[typescript/tsconfig.json](../../../../sources/2FastLabs__agent-squad/typescript/tsconfig.json)<br>[python/Makefile](../../../../sources/2FastLabs__agent-squad/python/Makefile)<br>[python/pyproject.toml](../../../../sources/2FastLabs__agent-squad/python/pyproject.toml)<br>[examples/text-2-structured-output/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/text-2-structured-output/requirements.txt)<br>[examples/strands-agents-demo/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/strands-agents-demo/requirements.txt)<br>[examples/python/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/python/requirements.txt)<br>[examples/python/travel-planner/requirements.txt](../../../../sources/2FastLabs__agent-squad/examples/python/travel-planner/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 48 | [typescript/tests/Orchestrator.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/Orchestrator.test.ts)<br>[typescript/tests/utils/Utils.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/utils/Utils.test.ts)<br>[typescript/tests/storage/ChatStorage.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/storage/ChatStorage.test.ts)<br>[typescript/tests/retrievers/Retriever.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/retrievers/Retriever.test.ts)<br>[typescript/tests/mock/mockAgent.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/mock/mockAgent.ts)<br>[typescript/tests/classifiers/AnthropicClassifier.test.ts](../../../../sources/2FastLabs__agent-squad/typescript/tests/classifiers/AnthropicClassifier.test.ts) |
| CI workflows | 12 | [.github/workflows/claude-code-review.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/claude.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/npm-publish.yml)<br>[.github/workflows/on-docs-update.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/on-docs-update.yml)<br>[.github/workflows/on-issue-opened.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/on-issue-opened.yml)<br>[.github/workflows/on-push.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/on-push.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 5 | [examples/chat-demo-app/lib/CustomResourcesLambda/permission-validation.ts](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lib/CustomResourcesLambda/permission-validation.ts)<br>[examples/chat-demo-app/lambda/auth/index.mjs](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lambda/auth/index.mjs)<br>[examples/chat-demo-app/lambda/auth/package-lock.json](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lambda/auth/package-lock.json)<br>[examples/chat-demo-app/lambda/auth/package.json](../../../../sources/2FastLabs__agent-squad/examples/chat-demo-app/lambda/auth/package.json)<br>[.github/workflows/ts-run-security-checks.yml](../../../../sources/2FastLabs__agent-squad/.github/workflows/ts-run-security-checks.yml) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/2FastLabs__agent-squad/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `typescript/tests/agents/Agents.test.ts`, `typescript/tests/agents/LambdaAgent.test.ts`, `typescript/tests/agents/OpenAi.test.ts`.
2. Trace execution through entrypoints: `typescript/src/index.ts`, `examples/supervisor-mode/main.py`, `examples/strands-agents-demo/main.py`.
3. Map agent/tool runtime through: `typescript/tests/agents/Agents.test.ts`, `typescript/tests/agents/LambdaAgent.test.ts`, `typescript/tests/agents/OpenAi.test.ts`.
4. Inspect retrieval/memory/indexing through: `typescript/src/index.ts`, `typescript/src/types/index.ts`, `python/src/tests/storage/test_in_memory_chat_storage.py`.
5. Verify behavior through test/eval files: `typescript/tests/Orchestrator.test.ts`, `typescript/tests/utils/Utils.test.ts`, `typescript/tests/storage/ChatStorage.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Flexible and powerful framework for managing multiple AI agents and handling complex conversations. 핵심 구조 신호는 Python, README.md, CLAUDE.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
