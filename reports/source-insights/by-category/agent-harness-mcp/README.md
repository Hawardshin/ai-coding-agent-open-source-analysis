# 에이전트 하네스/MCP 소스 인사이트

생성 시각: 2026-06-18T15:47:35.104Z

MCP, 도구 등록부, 워크플로 오케스트레이션, hooks/skills

## 요약

- 조사 단위: 에이전트 하네스/MCP 카테고리에 속한 514개 source-scanned 레포입니다.
- 포함 범위: trend-linked 427개, key source reference 5524개, median source depth 114입니다.
- 탐색 방식: 카테고리 인사이트를 먼저 보고, 상위 레포 비교의 소스 딥다이브 링크를 따라 구현 근거를 확인합니다.

## 총평

에이전트 하네스/MCP 카테고리는 514개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 83%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [소스 딥다이브](../../../source-deep-dives/README.md) | 소스 경로 근거와 레포별 딥다이브. |
| [레포별 소스 딥다이브](../../../source-deep-dives/repositories/README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 역할군 페이지. |
| [소스 트렌드 인사이트](../../README.md) | 카테고리별 트렌드와 레포별 특징 비교. |
| [상세 비교 리포트](../../comparative-report.md) | 카테고리 간 차이와 대표 레포 판단표. |
| [카테고리별 소스 인사이트](../README.md) | 카테고리 기준의 소스 인사이트 페이지. |
| [표/CSV 목차](../../../tables/README.md) | CSV와 표 중심 탐색. |


## 카테고리 인사이트

- 에이전트 하네스/MCP 카테고리는 514개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 83%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 agent/tool runtime (482), eval/test harness (464), retrieval/vector path (434)이고, 파일 근거 bucket은 docs (512), config (473), eval (464), agentRuntime (456) 순서로 강합니다.
- MCP/tool protocol 표면이 76%에서 보입니다. 단순 라이브러리보다 agent tool 연결/registry를 비교해야 합니다.
- RAG, memory, vector/index 경로가 84%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 74%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 90%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- container/deploy 경로가 57%에서 확인됩니다. 로컬 데모형보다 운영 배포형 레포 비중이 높습니다.
- AGENTS/CLAUDE/Codex/Cursor류 instruction 파일이 64%에서 보여 agent-native 개발 방식이 이미 레포 구조에 들어와 있습니다.

## 이 카테고리 비교 총평

| 항목 | 판단 |
| --- | --- |
| 읽는 목적 | MCP, 도구 등록부, 워크플로 오케스트레이션, hooks/skills를 실제 제품 구조에 넣을 때 기준 카테고리로 본다. |
| 강점 | test/eval coverage 90%; MCP/tool 경로 76%; retrieval/memory 경로 84% |
| 약점/검증 포인트 | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 |
| 대표 feature | agent-runtime 94%, tests-evals 91%, retrieval-memory 84%, mcp/protocol 80%, security-policy 79% |
| 대표 bucket | docs 100%, config 92%, eval 90%, agentRuntime 89%, retrieval 84% |
| 대표 언어 | Python 175, TypeScript 133, unknown 59 |
| 소스 근거 위치 | 소스 근거가 평균 이상, 레포당 핵심 참조 10.7개 |
| 결론 | MCP, 도구 등록부, 워크플로 오케스트레이션, hooks/skills를 실제 제품 구조에 넣을 때 기준 카테고리로 본다. 먼저 mem0ai/mem0를 구조 기준점으로 보고, 현재성은 mem0ai/mem0와 대조한다. |

## 트렌드/소스 지표

| 항목 | 값 |
| --- | --- |
| 레포 수 | 514 |
| 트렌드 연결 레포 | 427 |
| 글로벌 / 한국 트렌드 수 | 340 / 110 |
| 글로벌/한국 동시 포착 | 23 |
| 최대 / 중앙 트렌드 점수 | 250 / 143 |
| 전체 / 중앙 stars | 4912595 / 347 |
| 핵심 소스 참조 | 5524 |
| 중앙 파일 수 | 557 |

## 소스 feature 분포

### 주요 feature

| 신호 | 수 |
| --- | ---: |
| agent-runtime | 482 |
| tests-evals | 467 |
| retrieval-memory | 434 |
| mcp/protocol | 412 |
| security-policy | 406 |
| cli-first | 391 |
| spec-artifacts | 381 |
| api/server | 351 |
| container-deploy | 293 |
| agent-instructions | 259 |
| monorepo | 124 |
| web-runtime | 56 |


### 구조 패턴

| 신호 | 수 |
| --- | ---: |
| agent/tool runtime | 482 |
| eval/test harness | 464 |
| retrieval/vector path | 434 |
| security/policy surface | 406 |
| cli-first | 391 |
| spec/docs-driven | 381 |
| api/server | 351 |
| containerized deploy | 217 |
| monorepo/workspace | 124 |
| ui/extension surface | 24 |
| general source tree | 7 |
| Python source tree | 2 |


### 근거 bucket coverage

| 신호 | 수 |
| --- | ---: |
| docs | 512 |
| config | 473 |
| eval | 464 |
| agentRuntime | 456 |
| retrieval | 433 |
| entrypoints | 420 |
| ci | 419 |
| security | 406 |
| mcp | 390 |
| spec | 381 |
| instruction | 327 |
| container | 293 |


### 의존성 그룹

| 신호 | 수 |
| --- | ---: |
| agentProtocols | 210 |
| llmProviders | 152 |
| webRuntime | 129 |
| developerSurface | 102 |
| modelRuntime | 87 |
| observability | 60 |
| browserAutomation | 54 |
| vectorStores | 47 |
| agentFrameworks | 42 |


### 명령 표면

| 신호 | 수 |
| --- | ---: |
| utility | 290 |
| test | 206 |
| quality | 199 |
| build | 194 |
| serve-dev | 183 |
| entrypoint | 82 |
| container | 20 |


### 위험 카테고리

_감지된 신호가 없습니다._


## 상위 트렌드 레포

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 에이전트 하네스/MCP | 616 | 250 | 58803 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/mem0ai__mem0.md) / [보고서](../../../global-trending/repositories/mem0ai__mem0.md) / [소스](../../../../sources/mem0ai__mem0) |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 에이전트 하네스/MCP | 600 | 238 | 139576 | Python | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/langchain-ai__langchain.md) / [보고서](../../../global-trending/repositories/langchain-ai__langchain.md) / [소스](../../../../sources/langchain-ai__langchain) |
| [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 에이전트 하네스/MCP | 598 | 249 | 25594 | MDX | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/deepset-ai__haystack.md) / [보고서](../../../global-trending/repositories/deepset-ai__haystack.md) / [소스](../../../../sources/deepset-ai__haystack) |
| [langgenius/dify](https://github.com/langgenius/dify) | 에이전트 하네스/MCP | 595 | 230 | 145630 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/langgenius__dify.md) / [보고서](../../../global-trending/repositories/langgenius__dify.md) / [소스](../../../../sources/langgenius__dify) |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 에이전트 하네스/MCP | 584 | 230 | 50200 | Python | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/run-llama__llama_index.md) / [보고서](../../../global-trending/repositories/run-llama__llama_index.md) / [소스](../../../../sources/run-llama__llama_index) |
| [mudler/LocalAI](https://github.com/mudler/LocalAI) | 에이전트 하네스/MCP | 575 | 222 | 46944 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/mudler__LocalAI.md) / [보고서](../../../global-trending/repositories/mudler__LocalAI.md) / [소스](../../../../sources/mudler__LocalAI) |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | 에이전트 하네스/MCP | 568 | 210 | 175712 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/anomalyco__opencode.md) / [보고서](../../../global-trending/repositories/anomalyco__opencode.md) / [소스](../../../../sources/anomalyco__opencode) |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 에이전트 하네스/MCP | 567 | 215 | 59994 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/ruvnet__ruflo.md) / [보고서](../../../global-trending/repositories/ruvnet__ruflo.md) / [소스](../../../../sources/ruvnet__ruflo) |
| [mastra-ai/mastra](https://github.com/mastra-ai/mastra) | 에이전트 하네스/MCP | 563 | 217 | 25182 | TypeScript | monorepo, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/mastra-ai__mastra.md) / [보고서](../../../global-trending/repositories/mastra-ai__mastra.md) / [소스](../../../../sources/mastra-ai__mastra) |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 에이전트 하네스/MCP | 557 | 221 | 7691 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/EverMind-AI__EverOS.md) / [보고서](../../../global-trending/repositories/EverMind-AI__EverOS.md) / [소스](../../../../sources/EverMind-AI__EverOS) |
| [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | 에이전트 하네스/MCP | 556 | 208 | 53827 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/crewAIInc__crewAI.md) / [보고서](../../../global-trending/repositories/crewAIInc__crewAI.md) / [소스](../../../../sources/crewAIInc__crewAI) |
| [google/adk-python](https://github.com/google/adk-python) | 에이전트 하네스/MCP | 551 | 210 | 20158 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/google__adk-python.md) / [보고서](../../../global-trending/repositories/google__adk-python.md) / [소스](../../../../sources/google__adk-python) |
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | 에이전트 하네스/MCP | 550 | 211 | 87393 | TypeScript | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/modelcontextprotocol__servers.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__servers.md) / [소스](../../../../sources/modelcontextprotocol__servers) |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 에이전트 하네스/MCP | 550 | 202 | 71423 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/bytedance__deer-flow.md) / [보고서](../../../global-trending/repositories/bytedance__deer-flow.md) / [소스](../../../../sources/bytedance__deer-flow) |
| [github/github-mcp-server](https://github.com/github/github-mcp-server) | 에이전트 하네스/MCP | 543 | 211 | 30770 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/github__github-mcp-server.md) / [보고서](../../../global-trending/repositories/github__github-mcp-server.md) / [소스](../../../../sources/github__github-mcp-server) |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 에이전트 하네스/MCP | 539 | 210 | 3866 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/rocketride-org__rocketride-server.md) / [보고서](../../../global-trending/repositories/rocketride-org__rocketride-server.md) / [소스](../../../../sources/rocketride-org__rocketride-server) |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 에이전트 하네스/MCP | 532 | 227 | 12359 | Java | agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/e/langchain4j__langchain4j.md) / [보고서](../../../global-trending/repositories/langchain4j__langchain4j.md) / [소스](../../../../sources/langchain4j__langchain4j) |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 에이전트 하네스/MCP | 530 | 207 | 5246 | C | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/DeusData__codebase-memory-mcp.md) / [보고서](../../../global-trending/repositories/DeusData__codebase-memory-mcp.md) / [소스](../../../../sources/DeusData__codebase-memory-mcp) |
| [GLips/Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP) | 에이전트 하네스/MCP | 528 | 207 | 15139 | TypeScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/GLips__Figma-Context-MCP.md) / [보고서](../../../global-trending/repositories/GLips__Figma-Context-MCP.md) / [소스](../../../../sources/GLips__Figma-Context-MCP) |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | 에이전트 하네스/MCP | 519 | 210 | 133037 | Python | agent-runtime, mcp/protocol, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/anthropics__claude-code.md) / [보고서](../../../global-trending/repositories/anthropics__claude-code.md) / [소스](../../../../sources/anthropics__claude-code) |


## 대표 레포 판단표

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 언어 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 위험/확인 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- | --- | --- |
| 1 | [mem0ai/mem0](https://github.com/mem0ai/mem0) | 616 | 250 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/mem0ai__mem0.md) / [보고서](../../../global-trending/repositories/mem0ai__mem0.md) / [소스](../../../../sources/mem0ai__mem0) |
| 2 | [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 600 | 238 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/langchain-ai__langchain.md) / [보고서](../../../global-trending/repositories/langchain-ai__langchain.md) / [소스](../../../../sources/langchain-ai__langchain) |
| 3 | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 598 | 249 | MDX | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/deepset-ai__haystack.md) / [보고서](../../../global-trending/repositories/deepset-ai__haystack.md) / [소스](../../../../sources/deepset-ai__haystack) |
| 4 | [langgenius/dify](https://github.com/langgenius/dify) | 595 | 230 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/langgenius__dify.md) / [보고서](../../../global-trending/repositories/langgenius__dify.md) / [소스](../../../../sources/langgenius__dify) |
| 5 | [run-llama/llama_index](https://github.com/run-llama/llama_index) | 584 | 230 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/run-llama__llama_index.md) / [보고서](../../../global-trending/repositories/run-llama__llama_index.md) / [소스](../../../../sources/run-llama__llama_index) |
| 6 | [mudler/LocalAI](https://github.com/mudler/LocalAI) | 575 | 222 | Go | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/mudler__LocalAI.md) / [보고서](../../../global-trending/repositories/mudler__LocalAI.md) / [소스](../../../../sources/mudler__LocalAI) |
| 7 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | 568 | 210 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/anomalyco__opencode.md) / [보고서](../../../global-trending/repositories/anomalyco__opencode.md) / [소스](../../../../sources/anomalyco__opencode) |
| 8 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 567 | 215 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/ruvnet__ruflo.md) / [보고서](../../../global-trending/repositories/ruvnet__ruflo.md) / [소스](../../../../sources/ruvnet__ruflo) |
| 9 | [mastra-ai/mastra](https://github.com/mastra-ai/mastra) | 563 | 217 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/mastra-ai__mastra.md) / [보고서](../../../global-trending/repositories/mastra-ai__mastra.md) / [소스](../../../../sources/mastra-ai__mastra) |
| 10 | [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 557 | 221 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/EverMind-AI__EverOS.md) / [보고서](../../../global-trending/repositories/EverMind-AI__EverOS.md) / [소스](../../../../sources/EverMind-AI__EverOS) |
| 11 | [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | 556 | 208 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/crewAIInc__crewAI.md) / [보고서](../../../global-trending/repositories/crewAIInc__crewAI.md) / [소스](../../../../sources/crewAIInc__crewAI) |
| 12 | [google/adk-python](https://github.com/google/adk-python) | 551 | 210 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/google__adk-python.md) / [보고서](../../../global-trending/repositories/google__adk-python.md) / [소스](../../../../sources/google__adk-python) |
| 13 | [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | 550 | 211 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/modelcontextprotocol__servers.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__servers.md) / [소스](../../../../sources/modelcontextprotocol__servers) |
| 14 | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 550 | 202 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/bytedance__deer-flow.md) / [보고서](../../../global-trending/repositories/bytedance__deer-flow.md) / [소스](../../../../sources/bytedance__deer-flow) |
| 15 | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 550 | 200 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/google-gemini__gemini-cli.md) / [보고서](../../../global-trending/repositories/google-gemini__gemini-cli.md) / [소스](../../../../sources/google-gemini__gemini-cli) |
| 16 | [openai/codex](https://github.com/openai/codex) | 549 | 200 | Rust | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/openai__codex.md) / [보고서](../../../global-trending/repositories/openai__codex.md) / [소스](../../../../sources/openai__codex) |
| 17 | [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 546 | 202 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/danny-avila__LibreChat.md) / [보고서](../../../global-trending/repositories/danny-avila__LibreChat.md) / [소스](../../../../sources/danny-avila__LibreChat) |
| 18 | [aaif-goose/goose](https://github.com/aaif-goose/goose) | 545 | 200 | Rust | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/aaif-goose__goose.md) / [보고서](../../../global-trending/repositories/aaif-goose__goose.md) / [소스](../../../../sources/aaif-goose__goose) |


## 상위 레포 비교

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 에이전트 하네스/MCP | 616 | 250 | 58803 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/mem0ai__mem0.md) / [보고서](../../../global-trending/repositories/mem0ai__mem0.md) / [소스](../../../../sources/mem0ai__mem0) |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 에이전트 하네스/MCP | 600 | 238 | 139576 | Python | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/langchain-ai__langchain.md) / [보고서](../../../global-trending/repositories/langchain-ai__langchain.md) / [소스](../../../../sources/langchain-ai__langchain) |
| [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | 에이전트 하네스/MCP | 598 | 249 | 25594 | MDX | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/deepset-ai__haystack.md) / [보고서](../../../global-trending/repositories/deepset-ai__haystack.md) / [소스](../../../../sources/deepset-ai__haystack) |
| [langgenius/dify](https://github.com/langgenius/dify) | 에이전트 하네스/MCP | 595 | 230 | 145630 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/langgenius__dify.md) / [보고서](../../../global-trending/repositories/langgenius__dify.md) / [소스](../../../../sources/langgenius__dify) |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 에이전트 하네스/MCP | 584 | 230 | 50200 | Python | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/run-llama__llama_index.md) / [보고서](../../../global-trending/repositories/run-llama__llama_index.md) / [소스](../../../../sources/run-llama__llama_index) |
| [mudler/LocalAI](https://github.com/mudler/LocalAI) | 에이전트 하네스/MCP | 575 | 222 | 46944 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/mudler__LocalAI.md) / [보고서](../../../global-trending/repositories/mudler__LocalAI.md) / [소스](../../../../sources/mudler__LocalAI) |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | 에이전트 하네스/MCP | 568 | 210 | 175712 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/anomalyco__opencode.md) / [보고서](../../../global-trending/repositories/anomalyco__opencode.md) / [소스](../../../../sources/anomalyco__opencode) |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 에이전트 하네스/MCP | 567 | 215 | 59994 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/ruvnet__ruflo.md) / [보고서](../../../global-trending/repositories/ruvnet__ruflo.md) / [소스](../../../../sources/ruvnet__ruflo) |
| [mastra-ai/mastra](https://github.com/mastra-ai/mastra) | 에이전트 하네스/MCP | 563 | 217 | 25182 | TypeScript | monorepo, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/mastra-ai__mastra.md) / [보고서](../../../global-trending/repositories/mastra-ai__mastra.md) / [소스](../../../../sources/mastra-ai__mastra) |
| [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) | 에이전트 하네스/MCP | 557 | 221 | 7691 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/EverMind-AI__EverOS.md) / [보고서](../../../global-trending/repositories/EverMind-AI__EverOS.md) / [소스](../../../../sources/EverMind-AI__EverOS) |
| [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | 에이전트 하네스/MCP | 556 | 208 | 53827 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/crewAIInc__crewAI.md) / [보고서](../../../global-trending/repositories/crewAIInc__crewAI.md) / [소스](../../../../sources/crewAIInc__crewAI) |
| [google/adk-python](https://github.com/google/adk-python) | 에이전트 하네스/MCP | 551 | 210 | 20158 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/google__adk-python.md) / [보고서](../../../global-trending/repositories/google__adk-python.md) / [소스](../../../../sources/google__adk-python) |
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | 에이전트 하네스/MCP | 550 | 211 | 87393 | TypeScript | api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/modelcontextprotocol__servers.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__servers.md) / [소스](../../../../sources/modelcontextprotocol__servers) |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 에이전트 하네스/MCP | 550 | 202 | 71423 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/bytedance__deer-flow.md) / [보고서](../../../global-trending/repositories/bytedance__deer-flow.md) / [소스](../../../../sources/bytedance__deer-flow) |
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 에이전트 하네스/MCP | 550 | 200 | 105365 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/google-gemini__gemini-cli.md) / [보고서](../../../global-trending/repositories/google-gemini__gemini-cli.md) / [소스](../../../../sources/google-gemini__gemini-cli) |
| [openai/codex](https://github.com/openai/codex) | 에이전트 하네스/MCP | 549 | 200 | 91749 | Rust | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/openai__codex.md) / [보고서](../../../global-trending/repositories/openai__codex.md) / [소스](../../../../sources/openai__codex) |
| [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | 에이전트 하네스/MCP | 546 | 202 | 39364 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/danny-avila__LibreChat.md) / [보고서](../../../global-trending/repositories/danny-avila__LibreChat.md) / [소스](../../../../sources/danny-avila__LibreChat) |
| [aaif-goose/goose](https://github.com/aaif-goose/goose) | 에이전트 하네스/MCP | 545 | 200 | 49691 | Rust | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/aaif-goose__goose.md) / [보고서](../../../global-trending/repositories/aaif-goose__goose.md) / [소스](../../../../sources/aaif-goose__goose) |
| [github/github-mcp-server](https://github.com/github/github-mcp-server) | 에이전트 하네스/MCP | 543 | 211 | 30770 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/github__github-mcp-server.md) / [보고서](../../../global-trending/repositories/github__github-mcp-server.md) / [소스](../../../../sources/github__github-mcp-server) |
| [cline/cline](https://github.com/cline/cline) | 에이전트 하네스/MCP | 542 | 200 | 63454 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/cline__cline.md) / [보고서](../../../global-trending/repositories/cline__cline.md) / [소스](../../../../sources/cline__cline) |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 에이전트 하네스/MCP | 542 | 195 | 83034 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/infiniflow__ragflow.md) / [보고서](../../../global-trending/repositories/infiniflow__ragflow.md) / [소스](../../../../sources/infiniflow__ragflow) |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 에이전트 하네스/MCP | 540 | 194 | 83195 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/vllm-project__vllm.md) / [보고서](../../../global-trending/repositories/vllm-project__vllm.md) / [소스](../../../../sources/vllm-project__vllm) |
| [rocketride-org/rocketride-server](https://github.com/rocketride-org/rocketride-server) | 에이전트 하네스/MCP | 539 | 210 | 3866 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/rocketride-org__rocketride-server.md) / [보고서](../../../global-trending/repositories/rocketride-org__rocketride-server.md) / [소스](../../../../sources/rocketride-org__rocketride-server) |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 에이전트 하네스/MCP | 534 | 195 | 53689 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/FlowiseAI__Flowise.md) / [보고서](../../../global-trending/repositories/FlowiseAI__Flowise.md) / [소스](../../../../sources/FlowiseAI__Flowise) |
| [chopratejas/headroom](https://github.com/chopratejas/headroom) | 에이전트 하네스/MCP | 533 | 194 | 31580 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/chopratejas__headroom.md) / [보고서](../../../global-trending/repositories/chopratejas__headroom.md) / [소스](../../../../sources/chopratejas__headroom) |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 에이전트 하네스/MCP | 532 | 227 | 12359 | Java | agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/e/langchain4j__langchain4j.md) / [보고서](../../../global-trending/repositories/langchain4j__langchain4j.md) / [소스](../../../../sources/langchain4j__langchain4j) |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 에이전트 하네스/MCP | 531 | 187 | 217294 | JavaScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/affaan-m__ECC.md) / [보고서](../../../global-trending/repositories/affaan-m__ECC.md) / [소스](../../../../sources/affaan-m__ECC) |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 에이전트 하네스/MCP | 530 | 207 | 5246 | C | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/DeusData__codebase-memory-mcp.md) / [보고서](../../../global-trending/repositories/DeusData__codebase-memory-mcp.md) / [소스](../../../../sources/DeusData__codebase-memory-mcp) |
| [GLips/Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP) | 에이전트 하네스/MCP | 528 | 207 | 15139 | TypeScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/GLips__Figma-Context-MCP.md) / [보고서](../../../global-trending/repositories/GLips__Figma-Context-MCP.md) / [소스](../../../../sources/GLips__Figma-Context-MCP) |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 에이전트 하네스/MCP | 526 | 193 | 35062 | Python | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/langchain-ai__langgraph.md) / [보고서](../../../global-trending/repositories/langchain-ai__langgraph.md) / [소스](../../../../sources/langchain-ai__langgraph) |


## 위험 신호 Watchlist

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [NirDiamant/GenAI_Agents](https://github.com/NirDiamant/GenAI_Agents) | 에이전트 하네스/MCP | 455 | 195 | 22690 | Jupyter Notebook | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/NirDiamant__GenAI_Agents.md) / [보고서](../../../global-trending/repositories/NirDiamant__GenAI_Agents.md) / [소스](../../../../sources/NirDiamant__GenAI_Agents) |
| [Denis2054/Context-Engineering-for-Multi-Agent-Systems](https://github.com/Denis2054/Context-Engineering-for-Multi-Agent-Systems) | 에이전트 하네스/MCP | 346 | 160 | 247 | Jupyter Notebook | agent-runtime, mcp/protocol, retrieval-memory, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/Denis2054__Context-Engineering-for-Multi-Agent-Systems.md) / [보고서](../../../global-trending/repositories/Denis2054__Context-Engineering-for-Multi-Agent-Systems.md) / [소스](../../../../sources/Denis2054__Context-Engineering-for-Multi-Agent-Systems) |
| [ai-boost/awesome-harness-engineering](https://github.com/ai-boost/awesome-harness-engineering) | 에이전트 하네스/MCP | 313 | 160 | 1905 | Python | agent-runtime, agent-instructions | agent-runtime, agent-instructions | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/ai-boost__awesome-harness-engineering.md) / [보고서](../../../global-trending/repositories/ai-boost__awesome-harness-engineering.md) / [소스](../../../../sources/ai-boost__awesome-harness-engineering) |
| [MosslandOpenDevs/alpha](https://github.com/MosslandOpenDevs/alpha) | 에이전트 하네스/MCP | 245 | 99 | 0 | TypeScript | monorepo, agent-runtime, mcp/protocol, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/MosslandOpenDevs__alpha.md) / [보고서](../../../korea-trending/repositories/MosslandOpenDevs__alpha.md) / [소스](../../../../sources/MosslandOpenDevs__alpha) |
| [SheikhSheave/Claude-Code-CLI-Reference](https://github.com/SheikhSheave/Claude-Code-CLI-Reference) | 에이전트 하네스/MCP | 234 | 139 | 211 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음, 신뢰도 높은 소스 참조 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/SheikhSheave__Claude-Code-CLI-Reference.md) / [보고서](../../../global-trending/repositories/SheikhSheave__Claude-Code-CLI-Reference.md) / [소스](../../../../sources/SheikhSheave__Claude-Code-CLI-Reference) |
| [naver/egjs](https://github.com/naver/egjs) | 에이전트 하네스/MCP | 220 | 109 | 945 | JavaScript |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/naver__egjs.md) / [보고서](../../../korea-trending/repositories/naver__egjs.md) / [소스](../../../../sources/naver__egjs) |
| [johnisanerd/Apify-Naver-Search-API](https://github.com/johnisanerd/Apify-Naver-Search-API) | 에이전트 하네스/MCP | 148 | 92 | 0 | Python |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/johnisanerd__Apify-Naver-Search-API.md) / [보고서](../../../korea-trending/repositories/johnisanerd__Apify-Naver-Search-API.md) / [소스](../../../../sources/johnisanerd__Apify-Naver-Search-API) |
| [johnisanerd/Apify-Naver-AI-Overview-API](https://github.com/johnisanerd/Apify-Naver-AI-Overview-API) | 에이전트 하네스/MCP | 147 | 92 | 0 | Python |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/johnisanerd__Apify-Naver-AI-Overview-API.md) / [보고서](../../../korea-trending/repositories/johnisanerd__Apify-Naver-AI-Overview-API.md) / [소스](../../../../sources/johnisanerd__Apify-Naver-AI-Overview-API) |
| [sodam-ai/Langent-MCP_One-Click_Kit](https://github.com/sodam-ai/Langent-MCP_One-Click_Kit) | 에이전트 하네스/MCP | 135 | 93 | 0 | Batchfile |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음, 신뢰도 높은 소스 참조 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/sodam-ai__Langent-MCP_One-Click_Kit.md) / [보고서](../../../korea-trending/repositories/sodam-ai__Langent-MCP_One-Click_Kit.md) / [소스](../../../../sources/sodam-ai__Langent-MCP_One-Click_Kit) |
| [mcpads/create-retro-game-kr-patch](https://github.com/mcpads/create-retro-game-kr-patch) | 에이전트 하네스/MCP | 134 | 71 | 0 | unknown | agent-runtime | agent-runtime | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/e/mcpads__create-retro-game-kr-patch.md) / [보고서](../../../korea-trending/repositories/mcpads__create-retro-game-kr-patch.md) / [소스](../../../../sources/mcpads__create-retro-game-kr-patch) |
| [latemonk/agent-store-skills](https://github.com/latemonk/agent-store-skills) | 에이전트 하네스/MCP | 132 | 73 | 0 | unknown | agent-runtime | agent-runtime | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/latemonk__agent-store-skills.md) / [보고서](../../../korea-trending/repositories/latemonk__agent-store-skills.md) / [소스](../../../../sources/latemonk__agent-store-skills) |
| [rhkswnd0118-crypto/korean-rag-chatbot-boilerplate](https://github.com/rhkswnd0118-crypto/korean-rag-chatbot-boilerplate) | 에이전트 하네스/MCP | 128 | 66 | 0 | JavaScript | retrieval-memory, spec-artifacts | retrieval-memory, spec-artifacts | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/rhkswnd0118-crypto__korean-rag-chatbot-boilerplate.md) / [보고서](../../../korea-trending/repositories/rhkswnd0118-crypto__korean-rag-chatbot-boilerplate.md) / [소스](../../../../sources/rhkswnd0118-crypto__korean-rag-chatbot-boilerplate) |
| [dongdorrong/korean-law-mcp-lab](https://github.com/dongdorrong/korean-law-mcp-lab) | 에이전트 하네스/MCP | 126 | 72 | 0 | Shell | agent-runtime, mcp/protocol | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/dongdorrong__korean-law-mcp-lab.md) / [보고서](../../../korea-trending/repositories/dongdorrong__korean-law-mcp-lab.md) / [소스](../../../../sources/dongdorrong__korean-law-mcp-lab) |
| [hwan96-ai/genai-case-study-showcase](https://github.com/hwan96-ai/genai-case-study-showcase) | 에이전트 하네스/MCP | 117 | 75 | 0 | HTML | retrieval-memory | retrieval-memory | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음, 신뢰도 높은 소스 참조 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/hwan96-ai__genai-case-study-showcase.md) / [보고서](../../../korea-trending/repositories/hwan96-ai__genai-case-study-showcase.md) / [소스](../../../../sources/hwan96-ai__genai-case-study-showcase) |
| [ajgarciaj/NaViL](https://github.com/ajgarciaj/NaViL) | 에이전트 하네스/MCP | 98 | 69 | 0 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음, 신뢰도 높은 소스 참조 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/ajgarciaj__NaViL.md) / [보고서](../../../korea-trending/repositories/ajgarciaj__NaViL.md) / [소스](../../../../sources/ajgarciaj__NaViL) |
| [gracebereblue-cpu/-mcp](https://github.com/gracebereblue-cpu/-mcp) | 에이전트 하네스/MCP | 97 | 76 | 0 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음, 신뢰도 높은 소스 참조 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/gracebereblue-cpu__-mcp.md) / [보고서](../../../korea-trending/repositories/gracebereblue-cpu__-mcp.md) / [소스](../../../../sources/gracebereblue-cpu__-mcp) |
| [everynation/kimchisushi-mcp](https://github.com/everynation/kimchisushi-mcp) | 에이전트 하네스/MCP | 97 | 73 | 0 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음, 신뢰도 높은 소스 참조 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/everynation__kimchisushi-mcp.md) / [보고서](../../../korea-trending/repositories/everynation__kimchisushi-mcp.md) / [소스](../../../../sources/everynation__kimchisushi-mcp) |
| [dream8837z/hwp-hwpx-proposal-mcp](https://github.com/dream8837z/hwp-hwpx-proposal-mcp) | 에이전트 하네스/MCP | 95 | 69 | 0 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음, 신뢰도 높은 소스 참조 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/dream8837z__hwp-hwpx-proposal-mcp.md) / [보고서](../../../korea-trending/repositories/dream8837z__hwp-hwpx-proposal-mcp.md) / [소스](../../../../sources/dream8837z__hwp-hwpx-proposal-mcp) |
| [alice840126-ship-it/korean-law-mcp-setup](https://github.com/alice840126-ship-it/korean-law-mcp-setup) | 에이전트 하네스/MCP | 95 | 68 | 0 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음, 신뢰도 높은 소스 참조 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/alice840126-ship-it__korean-law-mcp-setup.md) / [보고서](../../../korea-trending/repositories/alice840126-ship-it__korean-law-mcp-setup.md) / [소스](../../../../sources/alice840126-ship-it__korean-law-mcp-setup) |
| [WangRongsheng/awesome-LLM-resources](https://github.com/WangRongsheng/awesome-LLM-resources) | 에이전트 하네스/MCP | 79 | 0 | 8550 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음, 신뢰도 높은 소스 참조 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/WangRongsheng__awesome-LLM-resources.md) / [보고서](../../../llm-wiki/repositories/WangRongsheng__awesome-LLM-resources.md) / [소스](../../../../sources/WangRongsheng__awesome-LLM-resources) |
