# Coding Agent and IDE Source Insights

Generated: 2026-06-18T15:12:59.248Z

CLI/IDE 실행면, 코드 수정 루프, 샌드박스, 에이전트 지시문

## 요약

- 조사 단위: 코딩 에이전트/IDE 카테고리에 속한 9개 source-scanned 레포입니다.
- 포함 범위: trend-linked 9개, key source reference 106개, median source depth 125입니다.
- 탐색 방식: Category Insights를 먼저 보고, Top Repository Comparison의 source deep dive 링크를 따라 구현 근거를 확인합니다.

## 총평

코딩 에이전트/IDE 카테고리는 9개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 100%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Source Deep Dives](../../../source-deep-dives/README.md) | Source-path evidence and per-repository deep dives. |
| [Source Repository Deep Dives](../../../source-deep-dives/repositories/README.md) | One Markdown deep dive per cloned repository. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-level assessment and role pages. |
| [Source Trend Insights](../../README.md) | Category trend insights and repository feature comparison. |
| [Source Insights by Category](../README.md) | Category-first source insight pages. |
| [Report Tables](../../../tables/README.md) | CSV and table-first navigation. |


## Category Insights

- 코딩 에이전트/IDE 카테고리는 9개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 100%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 agent/tool runtime (9), cli-first (9), eval/test harness (9)이고, 파일 근거 bucket은 agentRuntime (9), docs (9), entrypoints (9), eval (9) 순서로 강합니다.
- MCP/tool protocol 표면이 67%에서 보입니다. 단순 라이브러리보다 agent tool 연결/registry를 비교해야 합니다.
- RAG, memory, vector/index 경로가 89%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 89%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 100%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- container/deploy 경로가 44%에서 확인됩니다. 로컬 데모형보다 운영 배포형 레포 비중이 높습니다.
- AGENTS/CLAUDE/Codex/Cursor류 instruction 파일이 89%에서 보여 agent-native 개발 방식이 이미 레포 구조에 들어와 있습니다.

## Trend and Source Metrics

| Field | Value |
| --- | --- |
| Repositories | 9 |
| Trend-linked repositories | 9 |
| Global / Korea trend count | 9 / 0 |
| Both global and Korea | 0 |
| Max / median trend score | 175 / 153 |
| Total / median stars | 56702 / 1411 |
| Key source references | 106 |
| Median file count | 2498 |

## Source Feature Distribution

### Dominant Features

| Signal | Count |
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


### Architecture Patterns

| Signal | Count |
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


### Evidence Bucket Coverage

| Signal | Count |
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


### Dependency Groups

| Signal | Count |
| --- | ---: |
| webRuntime | 4 |
| browserAutomation | 3 |
| developerSurface | 3 |
| llmProviders | 3 |
| observability | 2 |
| agentProtocols | 1 |
| vectorStores | 1 |


### Command Surface

| Signal | Count |
| --- | ---: |
| test | 7 |
| utility | 7 |
| build | 6 |
| quality | 5 |
| container | 2 |
| entrypoint | 2 |
| serve-dev | 2 |


### Risk Categories

_No signals._


## Top Trend Repositories

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [gastownhall/beads](https://github.com/gastownhall/beads) | 코딩 에이전트/IDE | 503 | 175 | 24595 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, observability | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/gastownhall__beads.md) / [report](../../../global-trending/repositories/gastownhall__beads.md) / [source](../../../../sources/gastownhall__beads) |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 코딩 에이전트/IDE | 474 | 153 | 22309 | Swift | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/d/manaflow-ai__cmux.md) / [report](../../../global-trending/repositories/manaflow-ai__cmux.md) / [source](../../../../sources/manaflow-ai__cmux) |
| [stablyai/orca](https://github.com/stablyai/orca) | 코딩 에이전트/IDE | 469 | 157 | 5221 | TypeScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/stablyai__orca.md) / [report](../../../global-trending/repositories/stablyai__orca.md) / [source](../../../../sources/stablyai__orca) |
| [boshu2/agentops](https://github.com/boshu2/agentops) | 코딩 에이전트/IDE | 448 | 154 | 392 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/boshu2__agentops.md) / [report](../../../global-trending/repositories/boshu2__agentops.md) / [source](../../../../sources/boshu2__agentops) |
| [open-mercato/open-mercato](https://github.com/open-mercato/open-mercato) | 코딩 에이전트/IDE | 444 | 144 | 1411 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/f/open-mercato__open-mercato.md) / [report](../../../global-trending/repositories/open-mercato__open-mercato.md) / [source](../../../../sources/open-mercato__open-mercato) |
| [liaohch3/claude-tap](https://github.com/liaohch3/claude-tap) | 코딩 에이전트/IDE | 422 | 139 | 1824 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/liaohch3__claude-tap.md) / [report](../../../global-trending/repositories/liaohch3__claude-tap.md) / [source](../../../../sources/liaohch3__claude-tap) |
| [kelos-dev/kelos](https://github.com/kelos-dev/kelos) | 코딩 에이전트/IDE | 420 | 152 | 222 | Go | cli-first, api/server, agent-runtime, mcp/protocol, tests-evals, security-policy, container-deploy, agent-instructions, observability | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/8/kelos-dev__kelos.md) / [report](../../../global-trending/repositories/kelos-dev__kelos.md) / [source](../../../../sources/kelos-dev__kelos) |
| [fujibee/agmsg](https://github.com/fujibee/agmsg) | 코딩 에이전트/IDE | 404 | 161 | 654 | Shell | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/fujibee__agmsg.md) / [report](../../../global-trending/repositories/fujibee__agmsg.md) / [source](../../../../sources/fujibee__agmsg) |
| [agentlas-ai/Hephaestus](https://github.com/agentlas-ai/Hephaestus) | 코딩 에이전트/IDE | 401 | 151 | 74 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/agentlas-ai__Hephaestus.md) / [report](../../../global-trending/repositories/agentlas-ai__Hephaestus.md) / [source](../../../../sources/agentlas-ai__Hephaestus) |


## Top Repository Comparison

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [gastownhall/beads](https://github.com/gastownhall/beads) | 코딩 에이전트/IDE | 503 | 175 | 24595 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, observability | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/gastownhall__beads.md) / [report](../../../global-trending/repositories/gastownhall__beads.md) / [source](../../../../sources/gastownhall__beads) |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | 코딩 에이전트/IDE | 474 | 153 | 22309 | Swift | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/d/manaflow-ai__cmux.md) / [report](../../../global-trending/repositories/manaflow-ai__cmux.md) / [source](../../../../sources/manaflow-ai__cmux) |
| [stablyai/orca](https://github.com/stablyai/orca) | 코딩 에이전트/IDE | 469 | 157 | 5221 | TypeScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/stablyai__orca.md) / [report](../../../global-trending/repositories/stablyai__orca.md) / [source](../../../../sources/stablyai__orca) |
| [boshu2/agentops](https://github.com/boshu2/agentops) | 코딩 에이전트/IDE | 448 | 154 | 392 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/boshu2__agentops.md) / [report](../../../global-trending/repositories/boshu2__agentops.md) / [source](../../../../sources/boshu2__agentops) |
| [open-mercato/open-mercato](https://github.com/open-mercato/open-mercato) | 코딩 에이전트/IDE | 444 | 144 | 1411 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/f/open-mercato__open-mercato.md) / [report](../../../global-trending/repositories/open-mercato__open-mercato.md) / [source](../../../../sources/open-mercato__open-mercato) |
| [liaohch3/claude-tap](https://github.com/liaohch3/claude-tap) | 코딩 에이전트/IDE | 422 | 139 | 1824 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/liaohch3__claude-tap.md) / [report](../../../global-trending/repositories/liaohch3__claude-tap.md) / [source](../../../../sources/liaohch3__claude-tap) |
| [kelos-dev/kelos](https://github.com/kelos-dev/kelos) | 코딩 에이전트/IDE | 420 | 152 | 222 | Go | cli-first, api/server, agent-runtime, mcp/protocol, tests-evals, security-policy, container-deploy, agent-instructions, observability | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/8/kelos-dev__kelos.md) / [report](../../../global-trending/repositories/kelos-dev__kelos.md) / [source](../../../../sources/kelos-dev__kelos) |
| [fujibee/agmsg](https://github.com/fujibee/agmsg) | 코딩 에이전트/IDE | 404 | 161 | 654 | Shell | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/fujibee__agmsg.md) / [report](../../../global-trending/repositories/fujibee__agmsg.md) / [source](../../../../sources/fujibee__agmsg) |
| [agentlas-ai/Hephaestus](https://github.com/agentlas-ai/Hephaestus) | 코딩 에이전트/IDE | 401 | 151 | 74 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/agentlas-ai__Hephaestus.md) / [report](../../../global-trending/repositories/agentlas-ai__Hephaestus.md) / [source](../../../../sources/agentlas-ai__Hephaestus) |


## Risk Watchlist

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [agentlas-ai/Hephaestus](https://github.com/agentlas-ai/Hephaestus) | 코딩 에이전트/IDE | 401 | 151 | 74 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/agentlas-ai__Hephaestus.md) / [report](../../../global-trending/repositories/agentlas-ai__Hephaestus.md) / [source](../../../../sources/agentlas-ai__Hephaestus) |
