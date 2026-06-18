# 코딩 에이전트/IDE 소스 인사이트

생성 시각: 2026-06-18T15:31:47.340Z

CLI/IDE 실행면, 코드 수정 루프, 샌드박스, 에이전트 지시문

## 요약

- 조사 단위: 코딩 에이전트/IDE 카테고리에 속한 9개 source-scanned 레포입니다.
- 포함 범위: trend-linked 9개, key source reference 106개, median source depth 119입니다.
- 탐색 방식: 카테고리 인사이트를 먼저 보고, 상위 레포 비교의 소스 딥다이브 링크를 따라 구현 근거를 확인합니다.

## 총평

코딩 에이전트/IDE 카테고리는 9개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 100%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [소스 딥다이브](../../../source-deep-dives/README.md) | 소스 경로 근거와 레포별 딥다이브. |
| [레포별 소스 딥다이브](../../../source-deep-dives/repositories/README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 역할군 페이지. |
| [소스 트렌드 인사이트](../../README.md) | 카테고리별 트렌드와 레포별 특징 비교. |
| [카테고리별 소스 인사이트](../README.md) | 카테고리 기준의 소스 인사이트 페이지. |
| [표/CSV 목차](../../../tables/README.md) | CSV와 표 중심 탐색. |


## 카테고리 인사이트

- 코딩 에이전트/IDE 카테고리는 9개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 100%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 agent/tool runtime (9), cli-first (9), eval/test harness (9)이고, 파일 근거 bucket은 agentRuntime (9), docs (9), entrypoints (9), eval (9) 순서로 강합니다.
- MCP/tool protocol 표면이 67%에서 보입니다. 단순 라이브러리보다 agent tool 연결/registry를 비교해야 합니다.
- RAG, memory, vector/index 경로가 89%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 89%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 100%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- container/deploy 경로가 44%에서 확인됩니다. 로컬 데모형보다 운영 배포형 레포 비중이 높습니다.
- AGENTS/CLAUDE/Codex/Cursor류 instruction 파일이 89%에서 보여 agent-native 개발 방식이 이미 레포 구조에 들어와 있습니다.

## 트렌드/소스 지표

| 항목 | 값 |
| --- | --- |
| 레포 수 | 9 |
| 트렌드 연결 레포 | 9 |
| 글로벌 / 한국 트렌드 수 | 9 / 0 |
| 글로벌/한국 동시 포착 | 0 |
| 최대 / 중앙 트렌드 점수 | 175 / 153 |
| 전체 / 중앙 stars | 56702 / 1411 |
| 핵심 소스 참조 | 106 |
| 중앙 파일 수 | 2498 |

## 소스 feature 분포

### 주요 feature

| 신호 | 수 |
| --- | ---: |
| agent-runtime | 9 |
| cli-first | 9 |
| tests-evals | 9 |
| retrieval-memory | 8 |
| security-policy | 8 |
| spec-artifacts | 8 |
| agent-instructions | 7 |
| mcp/protocol | 7 |
| api/server | 6 |
| container-deploy | 4 |
| monorepo | 2 |
| observability | 2 |


### 구조 패턴

| 신호 | 수 |
| --- | ---: |
| agent/tool runtime | 9 |
| cli-first | 9 |
| eval/test harness | 9 |
| retrieval/vector path | 8 |
| security/policy surface | 8 |
| spec/docs-driven | 8 |
| api/server | 6 |
| containerized deploy | 2 |
| monorepo/workspace | 2 |
| ui/extension surface | 2 |


### 근거 bucket coverage

| 신호 | 수 |
| --- | ---: |
| agentRuntime | 9 |
| docs | 9 |
| entrypoints | 9 |
| eval | 9 |
| ci | 8 |
| config | 8 |
| instruction | 8 |
| retrieval | 8 |
| security | 8 |
| spec | 8 |
| mcp | 6 |
| container | 4 |


### 의존성 그룹

| 신호 | 수 |
| --- | ---: |
| webRuntime | 4 |
| browserAutomation | 3 |
| developerSurface | 3 |
| llmProviders | 3 |
| observability | 2 |
| agentProtocols | 1 |
| vectorStores | 1 |


### 명령 표면

| 신호 | 수 |
| --- | ---: |
| test | 7 |
| utility | 7 |
| build | 6 |
| quality | 5 |
| container | 2 |
| entrypoint | 2 |
| serve-dev | 2 |


### 위험 카테고리

_감지된 신호가 없습니다._


## 상위 트렌드 레포

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [gastownhall/beads](https://github.com/gastownhall/beads) | 코딩 에이전트/IDE | 497 | 175 | 24595 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, observability | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/gastownhall__beads.md) / [보고서](../../../global-trending/repositories/gastownhall__beads.md) / [소스](../../../../sources/gastownhall__beads) |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 코딩 에이전트/IDE | 468 | 153 | 22309 | Swift | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/manaflow-ai__cmux.md) / [보고서](../../../global-trending/repositories/manaflow-ai__cmux.md) / [소스](../../../../sources/manaflow-ai__cmux) |
| [stablyai/orca](https://github.com/stablyai/orca) | 코딩 에이전트/IDE | 463 | 157 | 5221 | TypeScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/stablyai__orca.md) / [보고서](../../../global-trending/repositories/stablyai__orca.md) / [소스](../../../../sources/stablyai__orca) |
| [boshu2/agentops](https://github.com/boshu2/agentops) | 코딩 에이전트/IDE | 442 | 154 | 392 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/boshu2__agentops.md) / [보고서](../../../global-trending/repositories/boshu2__agentops.md) / [소스](../../../../sources/boshu2__agentops) |
| [open-mercato/open-mercato](https://github.com/open-mercato/open-mercato) | 코딩 에이전트/IDE | 438 | 144 | 1411 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/open-mercato__open-mercato.md) / [보고서](../../../global-trending/repositories/open-mercato__open-mercato.md) / [소스](../../../../sources/open-mercato__open-mercato) |
| [liaohch3/claude-tap](https://github.com/liaohch3/claude-tap) | 코딩 에이전트/IDE | 416 | 139 | 1824 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/liaohch3__claude-tap.md) / [보고서](../../../global-trending/repositories/liaohch3__claude-tap.md) / [소스](../../../../sources/liaohch3__claude-tap) |
| [kelos-dev/kelos](https://github.com/kelos-dev/kelos) | 코딩 에이전트/IDE | 414 | 152 | 222 | Go | cli-first, api/server, agent-runtime, mcp/protocol, tests-evals, security-policy, container-deploy, agent-instructions, observability | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/kelos-dev__kelos.md) / [보고서](../../../global-trending/repositories/kelos-dev__kelos.md) / [소스](../../../../sources/kelos-dev__kelos) |
| [fujibee/agmsg](https://github.com/fujibee/agmsg) | 코딩 에이전트/IDE | 398 | 161 | 654 | Shell | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/fujibee__agmsg.md) / [보고서](../../../global-trending/repositories/fujibee__agmsg.md) / [소스](../../../../sources/fujibee__agmsg) |
| [agentlas-ai/Hephaestus](https://github.com/agentlas-ai/Hephaestus) | 코딩 에이전트/IDE | 395 | 151 | 74 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/agentlas-ai__Hephaestus.md) / [보고서](../../../global-trending/repositories/agentlas-ai__Hephaestus.md) / [소스](../../../../sources/agentlas-ai__Hephaestus) |


## 상위 레포 비교

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [gastownhall/beads](https://github.com/gastownhall/beads) | 코딩 에이전트/IDE | 497 | 175 | 24595 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, observability | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/gastownhall__beads.md) / [보고서](../../../global-trending/repositories/gastownhall__beads.md) / [소스](../../../../sources/gastownhall__beads) |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 코딩 에이전트/IDE | 468 | 153 | 22309 | Swift | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/manaflow-ai__cmux.md) / [보고서](../../../global-trending/repositories/manaflow-ai__cmux.md) / [소스](../../../../sources/manaflow-ai__cmux) |
| [stablyai/orca](https://github.com/stablyai/orca) | 코딩 에이전트/IDE | 463 | 157 | 5221 | TypeScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/stablyai__orca.md) / [보고서](../../../global-trending/repositories/stablyai__orca.md) / [소스](../../../../sources/stablyai__orca) |
| [boshu2/agentops](https://github.com/boshu2/agentops) | 코딩 에이전트/IDE | 442 | 154 | 392 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/boshu2__agentops.md) / [보고서](../../../global-trending/repositories/boshu2__agentops.md) / [소스](../../../../sources/boshu2__agentops) |
| [open-mercato/open-mercato](https://github.com/open-mercato/open-mercato) | 코딩 에이전트/IDE | 438 | 144 | 1411 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/open-mercato__open-mercato.md) / [보고서](../../../global-trending/repositories/open-mercato__open-mercato.md) / [소스](../../../../sources/open-mercato__open-mercato) |
| [liaohch3/claude-tap](https://github.com/liaohch3/claude-tap) | 코딩 에이전트/IDE | 416 | 139 | 1824 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/liaohch3__claude-tap.md) / [보고서](../../../global-trending/repositories/liaohch3__claude-tap.md) / [소스](../../../../sources/liaohch3__claude-tap) |
| [kelos-dev/kelos](https://github.com/kelos-dev/kelos) | 코딩 에이전트/IDE | 414 | 152 | 222 | Go | cli-first, api/server, agent-runtime, mcp/protocol, tests-evals, security-policy, container-deploy, agent-instructions, observability | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/kelos-dev__kelos.md) / [보고서](../../../global-trending/repositories/kelos-dev__kelos.md) / [소스](../../../../sources/kelos-dev__kelos) |
| [fujibee/agmsg](https://github.com/fujibee/agmsg) | 코딩 에이전트/IDE | 398 | 161 | 654 | Shell | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/fujibee__agmsg.md) / [보고서](../../../global-trending/repositories/fujibee__agmsg.md) / [소스](../../../../sources/fujibee__agmsg) |
| [agentlas-ai/Hephaestus](https://github.com/agentlas-ai/Hephaestus) | 코딩 에이전트/IDE | 395 | 151 | 74 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/agentlas-ai__Hephaestus.md) / [보고서](../../../global-trending/repositories/agentlas-ai__Hephaestus.md) / [소스](../../../../sources/agentlas-ai__Hephaestus) |


## 위험 신호 Watchlist

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [agentlas-ai/Hephaestus](https://github.com/agentlas-ai/Hephaestus) | 코딩 에이전트/IDE | 395 | 151 | 74 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/agentlas-ai__Hephaestus.md) / [보고서](../../../global-trending/repositories/agentlas-ai__Hephaestus.md) / [소스](../../../../sources/agentlas-ai__Hephaestus) |
