# LLM 위키/RAG/지식베이스 소스 인사이트

생성 시각: 2026-06-18T15:43:43.893Z

수집, chunking, embedding, retrieval, memory, vector store

## 요약

- 조사 단위: LLM 위키/RAG/지식베이스 카테고리에 속한 172개 source-scanned 레포입니다.
- 포함 범위: trend-linked 122개, key source reference 1784개, median source depth 104입니다.
- 탐색 방식: 카테고리 인사이트를 먼저 보고, 상위 레포 비교의 소스 딥다이브 링크를 따라 구현 근거를 확인합니다.

## 총평

LLM 위키/RAG/지식베이스 카테고리는 172개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 71%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

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

- LLM 위키/RAG/지식베이스 카테고리는 172개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 71%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 eval/test harness (148), retrieval/vector path (143), spec/docs-driven (129)이고, 파일 근거 bucket은 docs (172), eval (148), retrieval (143), config (142) 순서로 강합니다.
- MCP/tool protocol 표면이 38%에서 보입니다. 단순 라이브러리보다 agent tool 연결/registry를 비교해야 합니다.
- RAG, memory, vector/index 경로가 83%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 75%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 86%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- container/deploy 경로가 46%에서 확인됩니다. 로컬 데모형보다 운영 배포형 레포 비중이 높습니다.
- AGENTS/CLAUDE/Codex/Cursor류 instruction 파일이 37%에서 보여 agent-native 개발 방식이 이미 레포 구조에 들어와 있습니다.

## 이 카테고리 비교 총평

| 항목 | 판단 |
| --- | --- |
| 읽는 목적 | 문서/코드 지식을 수집하고 검색하고 기억으로 유지하는 RAG/knowledge architecture 비교에 쓴다. |
| 강점 | test/eval coverage 86%; retrieval/memory 경로 83%; CLI 사용면이 강함 |
| 약점/검증 포인트 | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 |
| 대표 feature | tests-evals 86%, retrieval-memory 83%, spec-artifacts 75%, agent-runtime 69%, cli-first 62% |
| 대표 bucket | docs 100%, eval 86%, retrieval 83%, config 83%, spec 75% |
| 대표 언어 | Python 73, TypeScript 26, unknown 13 |
| 소스 근거 위치 | 소스 근거가 평균 이상, 레포당 핵심 참조 10.4개 |
| 결론 | 문서/코드 지식을 수집하고 검색하고 기억으로 유지하는 RAG/knowledge architecture 비교에 쓴다. 먼저 MervinPraison/PraisonAI를 구조 기준점으로 보고, 현재성은 MervinPraison/PraisonAI와 대조한다. |

## 트렌드/소스 지표

| 항목 | 값 |
| --- | --- |
| 레포 수 | 172 |
| 트렌드 연결 레포 | 122 |
| 글로벌 / 한국 트렌드 수 | 56 / 69 |
| 글로벌/한국 동시 포착 | 3 |
| 최대 / 중앙 트렌드 점수 | 203 / 87 |
| 전체 / 중앙 stars | 1098064 / 466 |
| 핵심 소스 참조 | 1784 |
| 중앙 파일 수 | 342 |

## 소스 feature 분포

### 주요 feature

| 신호 | 수 |
| --- | ---: |
| tests-evals | 148 |
| retrieval-memory | 143 |
| spec-artifacts | 129 |
| agent-runtime | 118 |
| cli-first | 107 |
| security-policy | 93 |
| api/server | 84 |
| container-deploy | 79 |
| mcp/protocol | 68 |
| agent-instructions | 56 |
| model-runtime | 37 |
| web-runtime | 22 |


### 구조 패턴

| 신호 | 수 |
| --- | ---: |
| eval/test harness | 148 |
| retrieval/vector path | 143 |
| spec/docs-driven | 129 |
| agent/tool runtime | 118 |
| cli-first | 107 |
| security/policy surface | 93 |
| api/server | 84 |
| containerized deploy | 66 |
| monorepo/workspace | 17 |
| ui/extension surface | 10 |
| general source tree | 4 |
| Python source tree | 2 |


### 근거 bucket coverage

| 신호 | 수 |
| --- | ---: |
| docs | 172 |
| eval | 148 |
| retrieval | 143 |
| config | 142 |
| spec | 129 |
| agentRuntime | 115 |
| ci | 114 |
| entrypoints | 114 |
| security | 93 |
| container | 79 |
| mcp | 65 |
| instruction | 63 |


### 의존성 그룹

| 신호 | 수 |
| --- | ---: |
| modelRuntime | 42 |
| agentProtocols | 37 |
| webRuntime | 36 |
| llmProviders | 35 |
| vectorStores | 26 |
| developerSurface | 20 |
| observability | 17 |
| agentFrameworks | 12 |
| browserAutomation | 7 |


### 명령 표면

| 신호 | 수 |
| --- | ---: |
| utility | 64 |
| build | 49 |
| test | 44 |
| quality | 35 |
| serve-dev | 35 |
| entrypoint | 10 |
| container | 5 |


### 위험 카테고리

_감지된 신호가 없습니다._


## 상위 트렌드 레포

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [MervinPraison/PraisonAI](https://github.com/MervinPraison/PraisonAI) | LLM 위키/RAG/지식베이스 | 535 | 203 | 8173 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/MervinPraison__PraisonAI.md) / [보고서](../../../global-trending/repositories/MervinPraison__PraisonAI.md) / [소스](../../../../sources/MervinPraison__PraisonAI) |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | LLM 위키/RAG/지식베이스 | 528 | 195 | 25770 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/volcengine__OpenViking.md) / [보고서](../../../global-trending/repositories/volcengine__OpenViking.md) / [소스](../../../../sources/volcengine__OpenViking) |
| [gptme/gptme](https://github.com/gptme/gptme) | LLM 위키/RAG/지식베이스 | 518 | 195 | 4332 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/gptme__gptme.md) / [보고서](../../../global-trending/repositories/gptme__gptme.md) / [소스](../../../../sources/gptme__gptme) |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | LLM 위키/RAG/지식베이스 | 514 | 175 | 82994 | JavaScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/e/thedotmack__claude-mem.md) / [보고서](../../../global-trending/repositories/thedotmack__claude-mem.md) / [소스](../../../../sources/thedotmack__claude-mem) |
| [plastic-labs/honcho](https://github.com/plastic-labs/honcho) | LLM 위키/RAG/지식베이스 | 512 | 190 | 5239 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/plastic-labs__honcho.md) / [보고서](../../../global-trending/repositories/plastic-labs__honcho.md) / [소스](../../../../sources/plastic-labs__honcho) |
| [CaviraOSS/OpenMemory](https://github.com/CaviraOSS/OpenMemory) | LLM 위키/RAG/지식베이스 | 511 | 196 | 4243 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/CaviraOSS__OpenMemory.md) / [보고서](../../../global-trending/repositories/CaviraOSS__OpenMemory.md) / [소스](../../../../sources/CaviraOSS__OpenMemory) |
| [pingcap/tidb](https://github.com/pingcap/tidb) | LLM 위키/RAG/지식베이스 | 511 | 180 | 40171 | Go | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/pingcap__tidb.md) / [보고서](../../../global-trending/repositories/pingcap__tidb.md) / [소스](../../../../sources/pingcap__tidb) |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | LLM 위키/RAG/지식베이스 | 495 | 170 | 17885 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/topoteretes__cognee.md) / [보고서](../../../global-trending/repositories/topoteretes__cognee.md) / [소스](../../../../sources/topoteretes__cognee) |
| [Marker-Inc-Korea/AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) | LLM 위키/RAG/지식베이스 | 481 | 180 | 4832 | Python | cli-first, api/server, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/Marker-Inc-Korea__AutoRAG.md) / [보고서](../../../korea-trending/repositories/Marker-Inc-Korea__AutoRAG.md) / [소스](../../../../sources/Marker-Inc-Korea__AutoRAG) |
| [oracle-devrel/oracle-ai-developer-hub](https://github.com/oracle-devrel/oracle-ai-developer-hub) | LLM 위키/RAG/지식베이스 | 479 | 167 | 4191 | Jupyter Notebook | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/oracle-devrel__oracle-ai-developer-hub.md) / [보고서](../../../global-trending/repositories/oracle-devrel__oracle-ai-developer-hub.md) / [소스](../../../../sources/oracle-devrel__oracle-ai-developer-hub) |
| [matrixorigin/matrixone](https://github.com/matrixorigin/matrixone) | LLM 위키/RAG/지식베이스 | 477 | 173 | 1847 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/matrixorigin__matrixone.md) / [보고서](../../../global-trending/repositories/matrixorigin__matrixone.md) / [소스](../../../../sources/matrixorigin__matrixone) |
| [moorcheh-ai/memanto](https://github.com/moorcheh-ai/memanto) | LLM 위키/RAG/지식베이스 | 473 | 175 | 946 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/moorcheh-ai__memanto.md) / [보고서](../../../global-trending/repositories/moorcheh-ai__memanto.md) / [소스](../../../../sources/moorcheh-ai__memanto) |
| [kenn-io/agentsview](https://github.com/kenn-io/agentsview) | LLM 위키/RAG/지식베이스 | 473 | 168 | 2796 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/kenn-io__agentsview.md) / [보고서](../../../global-trending/repositories/kenn-io__agentsview.md) / [소스](../../../../sources/kenn-io__agentsview) |
| [cbcoutinho/nextcloud-mcp-server](https://github.com/cbcoutinho/nextcloud-mcp-server) | LLM 위키/RAG/지식베이스 | 453 | 170 | 272 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/cbcoutinho__nextcloud-mcp-server.md) / [보고서](../../../global-trending/repositories/cbcoutinho__nextcloud-mcp-server.md) / [소스](../../../../sources/cbcoutinho__nextcloud-mcp-server) |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | LLM 위키/RAG/지식베이스 | 450 | 165 | 5871 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, security-policy, container-deploy, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/TencentCloud__TencentDB-Agent-Memory.md) / [보고서](../../../global-trending/repositories/TencentCloud__TencentDB-Agent-Memory.md) / [소스](../../../../sources/TencentCloud__TencentDB-Agent-Memory) |
| [axoviq-ai/synthadoc](https://github.com/axoviq-ai/synthadoc) | LLM 위키/RAG/지식베이스 | 448 | 165 | 465 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/axoviq-ai__synthadoc.md) / [보고서](../../../global-trending/repositories/axoviq-ai__synthadoc.md) / [소스](../../../../sources/axoviq-ai__synthadoc) |
| [facebookresearch/faiss](https://github.com/facebookresearch/faiss) | LLM 위키/RAG/지식베이스 | 446 | 176 | 40322 | C++ | retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/facebookresearch__faiss.md) / [보고서](../../../global-trending/repositories/facebookresearch__faiss.md) / [소스](../../../../sources/facebookresearch__faiss) |
| [alibaba/zvec](https://github.com/alibaba/zvec) | LLM 위키/RAG/지식베이스 | 445 | 164 | 10812 | C++ | agent-runtime, retrieval-memory, tests-evals, security-policy, container-deploy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/alibaba__zvec.md) / [보고서](../../../global-trending/repositories/alibaba__zvec.md) / [소스](../../../../sources/alibaba__zvec) |
| [Eric-Terminal/ETOS-LLM-Studio](https://github.com/Eric-Terminal/ETOS-LLM-Studio) | LLM 위키/RAG/지식베이스 | 441 | 172 | 139 | Swift | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/Eric-Terminal__ETOS-LLM-Studio.md) / [보고서](../../../global-trending/repositories/Eric-Terminal__ETOS-LLM-Studio.md) / [소스](../../../../sources/Eric-Terminal__ETOS-LLM-Studio) |
| [utensils/mcp-nixos](https://github.com/utensils/mcp-nixos) | LLM 위키/RAG/지식베이스 | 418 | 162 | 697 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/utensils__mcp-nixos.md) / [보고서](../../../global-trending/repositories/utensils__mcp-nixos.md) / [소스](../../../../sources/utensils__mcp-nixos) |


## 대표 레포 판단표

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 언어 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 위험/확인 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- | --- | --- |
| 1 | [MervinPraison/PraisonAI](https://github.com/MervinPraison/PraisonAI) | 535 | 203 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/MervinPraison__PraisonAI.md) / [보고서](../../../global-trending/repositories/MervinPraison__PraisonAI.md) / [소스](../../../../sources/MervinPraison__PraisonAI) |
| 2 | [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | 528 | 195 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/volcengine__OpenViking.md) / [보고서](../../../global-trending/repositories/volcengine__OpenViking.md) / [소스](../../../../sources/volcengine__OpenViking) |
| 3 | [gptme/gptme](https://github.com/gptme/gptme) | 518 | 195 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/gptme__gptme.md) / [보고서](../../../global-trending/repositories/gptme__gptme.md) / [소스](../../../../sources/gptme__gptme) |
| 4 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 514 | 175 | JavaScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/e/thedotmack__claude-mem.md) / [보고서](../../../global-trending/repositories/thedotmack__claude-mem.md) / [소스](../../../../sources/thedotmack__claude-mem) |
| 5 | [plastic-labs/honcho](https://github.com/plastic-labs/honcho) | 512 | 190 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/plastic-labs__honcho.md) / [보고서](../../../global-trending/repositories/plastic-labs__honcho.md) / [소스](../../../../sources/plastic-labs__honcho) |
| 6 | [CaviraOSS/OpenMemory](https://github.com/CaviraOSS/OpenMemory) | 511 | 196 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/CaviraOSS__OpenMemory.md) / [보고서](../../../global-trending/repositories/CaviraOSS__OpenMemory.md) / [소스](../../../../sources/CaviraOSS__OpenMemory) |
| 7 | [pingcap/tidb](https://github.com/pingcap/tidb) | 511 | 180 | Go | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/pingcap__tidb.md) / [보고서](../../../global-trending/repositories/pingcap__tidb.md) / [소스](../../../../sources/pingcap__tidb) |
| 8 | [topoteretes/cognee](https://github.com/topoteretes/cognee) | 495 | 170 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/topoteretes__cognee.md) / [보고서](../../../global-trending/repositories/topoteretes__cognee.md) / [소스](../../../../sources/topoteretes__cognee) |
| 9 | [Marker-Inc-Korea/AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) | 481 | 180 | Python | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/Marker-Inc-Korea__AutoRAG.md) / [보고서](../../../korea-trending/repositories/Marker-Inc-Korea__AutoRAG.md) / [소스](../../../../sources/Marker-Inc-Korea__AutoRAG) |
| 10 | [oracle-devrel/oracle-ai-developer-hub](https://github.com/oracle-devrel/oracle-ai-developer-hub) | 479 | 167 | Jupyter Notebook | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/oracle-devrel__oracle-ai-developer-hub.md) / [보고서](../../../global-trending/repositories/oracle-devrel__oracle-ai-developer-hub.md) / [소스](../../../../sources/oracle-devrel__oracle-ai-developer-hub) |
| 11 | [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | 479 | 159 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/vectorize-io__hindsight.md) / [보고서](../../../global-trending/repositories/vectorize-io__hindsight.md) / [소스](../../../../sources/vectorize-io__hindsight) |
| 12 | [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | 479 | 151 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/toeverything__AFFiNE.md) / [보고서](../../../global-trending/repositories/toeverything__AFFiNE.md) / [소스](../../../../sources/toeverything__AFFiNE) |
| 13 | [matrixorigin/matrixone](https://github.com/matrixorigin/matrixone) | 477 | 173 | Go | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/matrixorigin__matrixone.md) / [보고서](../../../global-trending/repositories/matrixorigin__matrixone.md) / [소스](../../../../sources/matrixorigin__matrixone) |
| 14 | [moorcheh-ai/memanto](https://github.com/moorcheh-ai/memanto) | 473 | 175 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/moorcheh-ai__memanto.md) / [보고서](../../../global-trending/repositories/moorcheh-ai__memanto.md) / [소스](../../../../sources/moorcheh-ai__memanto) |
| 15 | [kenn-io/agentsview](https://github.com/kenn-io/agentsview) | 473 | 168 | Go | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/kenn-io__agentsview.md) / [보고서](../../../global-trending/repositories/kenn-io__agentsview.md) / [소스](../../../../sources/kenn-io__agentsview) |
| 16 | [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) | 471 | 152 | TypeScript | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/Egonex-AI__Understand-Anything.md) / [보고서](../../../global-trending/repositories/Egonex-AI__Understand-Anything.md) / [소스](../../../../sources/Egonex-AI__Understand-Anything) |
| 17 | [memgraph/memgraph](https://github.com/memgraph/memgraph) | 457 | 161 | C++ | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/memgraph__memgraph.md) / [보고서](../../../global-trending/repositories/memgraph__memgraph.md) / [소스](../../../../sources/memgraph__memgraph) |
| 18 | [apify/crawlee](https://github.com/apify/crawlee) | 456 | 154 | TypeScript | retrieval/memory 구조, 검증 표면, 배포 구조, agent-native 개발 지시문 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/apify__crawlee.md) / [보고서](../../../global-trending/repositories/apify__crawlee.md) / [소스](../../../../sources/apify__crawlee) |


## 상위 레포 비교

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [MervinPraison/PraisonAI](https://github.com/MervinPraison/PraisonAI) | LLM 위키/RAG/지식베이스 | 535 | 203 | 8173 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/MervinPraison__PraisonAI.md) / [보고서](../../../global-trending/repositories/MervinPraison__PraisonAI.md) / [소스](../../../../sources/MervinPraison__PraisonAI) |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | LLM 위키/RAG/지식베이스 | 528 | 195 | 25770 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/volcengine__OpenViking.md) / [보고서](../../../global-trending/repositories/volcengine__OpenViking.md) / [소스](../../../../sources/volcengine__OpenViking) |
| [gptme/gptme](https://github.com/gptme/gptme) | LLM 위키/RAG/지식베이스 | 518 | 195 | 4332 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/gptme__gptme.md) / [보고서](../../../global-trending/repositories/gptme__gptme.md) / [소스](../../../../sources/gptme__gptme) |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | LLM 위키/RAG/지식베이스 | 514 | 175 | 82994 | JavaScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/e/thedotmack__claude-mem.md) / [보고서](../../../global-trending/repositories/thedotmack__claude-mem.md) / [소스](../../../../sources/thedotmack__claude-mem) |
| [plastic-labs/honcho](https://github.com/plastic-labs/honcho) | LLM 위키/RAG/지식베이스 | 512 | 190 | 5239 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/plastic-labs__honcho.md) / [보고서](../../../global-trending/repositories/plastic-labs__honcho.md) / [소스](../../../../sources/plastic-labs__honcho) |
| [CaviraOSS/OpenMemory](https://github.com/CaviraOSS/OpenMemory) | LLM 위키/RAG/지식베이스 | 511 | 196 | 4243 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/CaviraOSS__OpenMemory.md) / [보고서](../../../global-trending/repositories/CaviraOSS__OpenMemory.md) / [소스](../../../../sources/CaviraOSS__OpenMemory) |
| [pingcap/tidb](https://github.com/pingcap/tidb) | LLM 위키/RAG/지식베이스 | 511 | 180 | 40171 | Go | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/pingcap__tidb.md) / [보고서](../../../global-trending/repositories/pingcap__tidb.md) / [소스](../../../../sources/pingcap__tidb) |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | LLM 위키/RAG/지식베이스 | 495 | 170 | 17885 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/topoteretes__cognee.md) / [보고서](../../../global-trending/repositories/topoteretes__cognee.md) / [소스](../../../../sources/topoteretes__cognee) |
| [Marker-Inc-Korea/AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) | LLM 위키/RAG/지식베이스 | 481 | 180 | 4832 | Python | cli-first, api/server, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/Marker-Inc-Korea__AutoRAG.md) / [보고서](../../../korea-trending/repositories/Marker-Inc-Korea__AutoRAG.md) / [소스](../../../../sources/Marker-Inc-Korea__AutoRAG) |
| [oracle-devrel/oracle-ai-developer-hub](https://github.com/oracle-devrel/oracle-ai-developer-hub) | LLM 위키/RAG/지식베이스 | 479 | 167 | 4191 | Jupyter Notebook | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/oracle-devrel__oracle-ai-developer-hub.md) / [보고서](../../../global-trending/repositories/oracle-devrel__oracle-ai-developer-hub.md) / [소스](../../../../sources/oracle-devrel__oracle-ai-developer-hub) |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | LLM 위키/RAG/지식베이스 | 479 | 159 | 16520 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/vectorize-io__hindsight.md) / [보고서](../../../global-trending/repositories/vectorize-io__hindsight.md) / [소스](../../../../sources/vectorize-io__hindsight) |
| [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | LLM 위키/RAG/지식베이스 | 479 | 151 | 69499 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/toeverything__AFFiNE.md) / [보고서](../../../global-trending/repositories/toeverything__AFFiNE.md) / [소스](../../../../sources/toeverything__AFFiNE) |
| [matrixorigin/matrixone](https://github.com/matrixorigin/matrixone) | LLM 위키/RAG/지식베이스 | 477 | 173 | 1847 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/matrixorigin__matrixone.md) / [보고서](../../../global-trending/repositories/matrixorigin__matrixone.md) / [소스](../../../../sources/matrixorigin__matrixone) |
| [moorcheh-ai/memanto](https://github.com/moorcheh-ai/memanto) | LLM 위키/RAG/지식베이스 | 473 | 175 | 946 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/moorcheh-ai__memanto.md) / [보고서](../../../global-trending/repositories/moorcheh-ai__memanto.md) / [소스](../../../../sources/moorcheh-ai__memanto) |
| [kenn-io/agentsview](https://github.com/kenn-io/agentsview) | LLM 위키/RAG/지식베이스 | 473 | 168 | 2796 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/kenn-io__agentsview.md) / [보고서](../../../global-trending/repositories/kenn-io__agentsview.md) / [소스](../../../../sources/kenn-io__agentsview) |
| [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) | LLM 위키/RAG/지식베이스 | 471 | 152 | 62771 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/Egonex-AI__Understand-Anything.md) / [보고서](../../../global-trending/repositories/Egonex-AI__Understand-Anything.md) / [소스](../../../../sources/Egonex-AI__Understand-Anything) |
| [memgraph/memgraph](https://github.com/memgraph/memgraph) | LLM 위키/RAG/지식베이스 | 457 | 161 | 4163 | C++ | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/memgraph__memgraph.md) / [보고서](../../../global-trending/repositories/memgraph__memgraph.md) / [소스](../../../../sources/memgraph__memgraph) |
| [apify/crawlee](https://github.com/apify/crawlee) | LLM 위키/RAG/지식베이스 | 456 | 154 | 23804 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, container-deploy, agent-instructions, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/apify__crawlee.md) / [보고서](../../../global-trending/repositories/apify__crawlee.md) / [소스](../../../../sources/apify__crawlee) |
| [cbcoutinho/nextcloud-mcp-server](https://github.com/cbcoutinho/nextcloud-mcp-server) | LLM 위키/RAG/지식베이스 | 453 | 170 | 272 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/cbcoutinho__nextcloud-mcp-server.md) / [보고서](../../../global-trending/repositories/cbcoutinho__nextcloud-mcp-server.md) / [소스](../../../../sources/cbcoutinho__nextcloud-mcp-server) |
| [redis/redis](https://github.com/redis/redis) | LLM 위키/RAG/지식베이스 | 452 | 149 | 74920 | C | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/redis__redis.md) / [보고서](../../../global-trending/repositories/redis__redis.md) / [소스](../../../../sources/redis__redis) |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | LLM 위키/RAG/지식베이스 | 450 | 165 | 5871 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, security-policy, container-deploy, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/TencentCloud__TencentDB-Agent-Memory.md) / [보고서](../../../global-trending/repositories/TencentCloud__TencentDB-Agent-Memory.md) / [소스](../../../../sources/TencentCloud__TencentDB-Agent-Memory) |
| [axoviq-ai/synthadoc](https://github.com/axoviq-ai/synthadoc) | LLM 위키/RAG/지식베이스 | 448 | 165 | 465 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/axoviq-ai__synthadoc.md) / [보고서](../../../global-trending/repositories/axoviq-ai__synthadoc.md) / [소스](../../../../sources/axoviq-ai__synthadoc) |
| [infiniflow/infinity](https://github.com/infiniflow/infinity) | LLM 위키/RAG/지식베이스 | 447 | 160 | 4571 | C++ | cli-first, agent-runtime, retrieval-memory, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/infiniflow__infinity.md) / [보고서](../../../global-trending/repositories/infiniflow__infinity.md) / [소스](../../../../sources/infiniflow__infinity) |
| [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | LLM 위키/RAG/지식베이스 | 447 | 154 | 1225 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/semantica-agi__semantica.md) / [보고서](../../../global-trending/repositories/semantica-agi__semantica.md) / [소스](../../../../sources/semantica-agi__semantica) |
| [facebookresearch/faiss](https://github.com/facebookresearch/faiss) | LLM 위키/RAG/지식베이스 | 446 | 176 | 40322 | C++ | retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/facebookresearch__faiss.md) / [보고서](../../../global-trending/repositories/facebookresearch__faiss.md) / [소스](../../../../sources/facebookresearch__faiss) |
| [giancarloerra/SocratiCode](https://github.com/giancarloerra/SocratiCode) | LLM 위키/RAG/지식베이스 | 446 | 156 | 3002 | TypeScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/giancarloerra__SocratiCode.md) / [보고서](../../../global-trending/repositories/giancarloerra__SocratiCode.md) / [소스](../../../../sources/giancarloerra__SocratiCode) |
| [alibaba/zvec](https://github.com/alibaba/zvec) | LLM 위키/RAG/지식베이스 | 445 | 164 | 10812 | C++ | agent-runtime, retrieval-memory, tests-evals, security-policy, container-deploy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/alibaba__zvec.md) / [보고서](../../../global-trending/repositories/alibaba__zvec.md) / [소스](../../../../sources/alibaba__zvec) |
| [Eric-Terminal/ETOS-LLM-Studio](https://github.com/Eric-Terminal/ETOS-LLM-Studio) | LLM 위키/RAG/지식베이스 | 441 | 172 | 139 | Swift | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/Eric-Terminal__ETOS-LLM-Studio.md) / [보고서](../../../global-trending/repositories/Eric-Terminal__ETOS-LLM-Studio.md) / [소스](../../../../sources/Eric-Terminal__ETOS-LLM-Studio) |
| [nex-crm/wuphf](https://github.com/nex-crm/wuphf) | LLM 위키/RAG/지식베이스 | 441 | 147 | 1190 | Go | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/nex-crm__wuphf.md) / [보고서](../../../global-trending/repositories/nex-crm__wuphf.md) / [소스](../../../../sources/nex-crm__wuphf) |
| [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki) | LLM 위키/RAG/지식베이스 | 437 | 149 | 11795 | TypeScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/nashsu__llm_wiki.md) / [보고서](../../../global-trending/repositories/nashsu__llm_wiki.md) / [소스](../../../../sources/nashsu__llm_wiki) |


## 위험 신호 Watchlist

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [vespa-engine/vespa](https://github.com/vespa-engine/vespa) | LLM 위키/RAG/지식베이스 | 413 | 141 | 6962 | Java | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 15000개 파일에서 스캔이 잘림, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/vespa-engine__vespa.md) / [보고서](../../../global-trending/repositories/vespa-engine__vespa.md) / [소스](../../../../sources/vespa-engine__vespa) |
| [Azure/GPT-RAG](https://github.com/Azure/GPT-RAG) | LLM 위키/RAG/지식베이스 | 352 | 136 | 1161 | Python | agent-runtime, retrieval-memory, spec-artifacts, security-policy, agent-instructions | agent-runtime, retrieval-memory, spec-artifacts, security-policy | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/e/Azure__GPT-RAG.md) / [보고서](../../../global-trending/repositories/Azure__GPT-RAG.md) / [소스](../../../../sources/Azure__GPT-RAG) |
| [naver/arcus](https://github.com/naver/arcus) | LLM 위키/RAG/지식베이스 | 336 | 144 | 316 | Shell | spec-artifacts, tests-evals, container-deploy | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/naver__arcus.md) / [보고서](../../../korea-trending/repositories/naver__arcus.md) / [소스](../../../../sources/naver__arcus) |
| [naver/bergen](https://github.com/naver/bergen) | LLM 위키/RAG/지식베이스 | 315 | 107 | 274 | Jupyter Notebook | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/naver__bergen.md) / [보고서](../../../korea-trending/repositories/naver__bergen.md) / [소스](../../../../sources/naver__bergen) |
| [naver/splade](https://github.com/naver/splade) | LLM 위키/RAG/지식베이스 | 296 | 110 | 994 | Python | retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/naver__splade.md) / [보고서](../../../korea-trending/repositories/naver__splade.md) / [소스](../../../../sources/naver__splade) |
| [woowacourse/woowacourse-docs](https://github.com/woowacourse/woowacourse-docs) | LLM 위키/RAG/지식베이스 | 284 | 115 | 420 | unknown | agent-runtime, retrieval-memory, spec-artifacts, security-policy | agent-runtime, retrieval-memory, spec-artifacts, security-policy | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/woowacourse__woowacourse-docs.md) / [보고서](../../../korea-trending/repositories/woowacourse__woowacourse-docs.md) / [소스](../../../../sources/woowacourse__woowacourse-docs) |
| [naver-ai/seit](https://github.com/naver-ai/seit) | LLM 위키/RAG/지식베이스 | 199 | 81 | 56 | Python | retrieval-memory, spec-artifacts | retrieval-memory, spec-artifacts | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/naver-ai__seit.md) / [보고서](../../../korea-trending/repositories/naver-ai__seit.md) / [소스](../../../../sources/naver-ai__seit) |
| [naver/artemis](https://github.com/naver/artemis) | LLM 위키/RAG/지식베이스 | 178 | 80 | 52 | Python | spec-artifacts, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/naver__artemis.md) / [보고서](../../../korea-trending/repositories/naver__artemis.md) / [소스](../../../../sources/naver__artemis) |
| [GSL-R/arona-soul-agent-memory](https://github.com/GSL-R/arona-soul-agent-memory) | LLM 위키/RAG/지식베이스 | 172 | 71 | 0 | unknown | agent-runtime, retrieval-memory, security-policy | agent-runtime, retrieval-memory, security-policy | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/GSL-R__arona-soul-agent-memory.md) / [보고서](../../../korea-trending/repositories/GSL-R__arona-soul-agent-memory.md) / [소스](../../../../sources/GSL-R__arona-soul-agent-memory) |
| [naver/tldr](https://github.com/naver/tldr) | LLM 위키/RAG/지식베이스 | 170 | 86 | 127 | Python |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/naver__tldr.md) / [보고서](../../../korea-trending/repositories/naver__tldr.md) / [소스](../../../../sources/naver__tldr) |
| [woowacourse/react-payments](https://github.com/woowacourse/react-payments) | LLM 위키/RAG/지식베이스 | 163 | 91 | 38 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/woowacourse__react-payments.md) / [보고서](../../../korea-trending/repositories/woowacourse__react-payments.md) / [소스](../../../../sources/woowacourse__react-payments) |
| [SamurAIGPT/llm-wiki-agent](https://github.com/SamurAIGPT/llm-wiki-agent) | LLM 위키/RAG/지식베이스 | 156 | 0 | 2959 | Python | agent-runtime, retrieval-memory, spec-artifacts, agent-instructions | agent-runtime, retrieval-memory, spec-artifacts, agent-instructions | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/SamurAIGPT__llm-wiki-agent.md) / [보고서](../../../llm-wiki/repositories/SamurAIGPT__llm-wiki-agent.md) / [소스](../../../../sources/SamurAIGPT__llm-wiki-agent) |
| [naver-ai/carecall-corpus](https://github.com/naver-ai/carecall-corpus) | LLM 위키/RAG/지식베이스 | 154 | 79 | 62 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/naver-ai__carecall-corpus.md) / [보고서](../../../korea-trending/repositories/naver-ai__carecall-corpus.md) / [소스](../../../../sources/naver-ai__carecall-corpus) |
| [line/LibriTTS-P](https://github.com/line/LibriTTS-P) | LLM 위키/RAG/지식베이스 | 151 | 71 | 161 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/line__LibriTTS-P.md) / [보고서](../../../korea-trending/repositories/line__LibriTTS-P.md) / [소스](../../../../sources/line__LibriTTS-P) |
| [simonsez9510/oh-my-wiki](https://github.com/simonsez9510/oh-my-wiki) | LLM 위키/RAG/지식베이스 | 129 | 69 | 0 | PowerShell | agent-runtime | agent-runtime | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/simonsez9510__oh-my-wiki.md) / [보고서](../../../korea-trending/repositories/simonsez9510__oh-my-wiki.md) / [소스](../../../../sources/simonsez9510__oh-my-wiki) |
| [daangn/search-ko-dic](https://github.com/daangn/search-ko-dic) | LLM 위키/RAG/지식베이스 | 117 | 68 | 5 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/daangn__search-ko-dic.md) / [보고서](../../../korea-trending/repositories/daangn__search-ko-dic.md) / [소스](../../../../sources/daangn__search-ko-dic) |
| [DEEP-PolyU/Awesome-GraphRAG](https://github.com/DEEP-PolyU/Awesome-GraphRAG) | LLM 위키/RAG/지식베이스 | 86 | 0 | 2474 | unknown | retrieval-memory | retrieval-memory | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/DEEP-PolyU__Awesome-GraphRAG.md) / [보고서](../../../llm-wiki/repositories/DEEP-PolyU__Awesome-GraphRAG.md) / [소스](../../../../sources/DEEP-PolyU__Awesome-GraphRAG) |
| [IAAR-Shanghai/Awesome-AI-Memory](https://github.com/IAAR-Shanghai/Awesome-AI-Memory) | LLM 위키/RAG/지식베이스 | 80 | 0 | 996 | Python | agent-instructions | agent-instructions | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/IAAR-Shanghai__Awesome-AI-Memory.md) / [보고서](../../../llm-wiki/repositories/IAAR-Shanghai__Awesome-AI-Memory.md) / [소스](../../../../sources/IAAR-Shanghai__Awesome-AI-Memory) |
| [onlybooks/llm](https://github.com/onlybooks/llm) | LLM 위키/RAG/지식베이스 | 56 | 0 | 200 | Jupyter Notebook |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/onlybooks__llm.md) / [보고서](../../../llm-wiki/repositories/onlybooks__llm.md) / [소스](../../../../sources/onlybooks__llm) |
| [ohbryt/bb-wiki](https://github.com/ohbryt/bb-wiki) | LLM 위키/RAG/지식베이스 | 35 | 0 | 0 | Python | retrieval-memory | retrieval-memory | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/ohbryt__bb-wiki.md) / [보고서](../../../llm-wiki/repositories/ohbryt__bb-wiki.md) / [소스](../../../../sources/ohbryt__bb-wiki) |
