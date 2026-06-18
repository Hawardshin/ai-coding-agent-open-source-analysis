# LLM Wiki, RAG, and Knowledge Source Insights

Generated: 2026-06-18T15:12:59.248Z

ingestion, chunking, embedding, retrieval, memory, vector store

## 요약

- 조사 단위: LLM 위키/RAG/지식베이스 카테고리에 속한 172개 source-scanned 레포입니다.
- 포함 범위: trend-linked 122개, key source reference 1784개, median source depth 110입니다.
- 탐색 방식: Category Insights를 먼저 보고, Top Repository Comparison의 source deep dive 링크를 따라 구현 근거를 확인합니다.

## 총평

LLM 위키/RAG/지식베이스 카테고리는 172개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 71%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

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

- LLM 위키/RAG/지식베이스 카테고리는 172개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 71%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 eval/test harness (148), retrieval/vector path (143), spec/docs-driven (129)이고, 파일 근거 bucket은 docs (172), eval (148), retrieval (143), config (142) 순서로 강합니다.
- MCP/tool protocol 표면이 38%에서 보입니다. 단순 라이브러리보다 agent tool 연결/registry를 비교해야 합니다.
- RAG, memory, vector/index 경로가 83%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 75%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 86%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- container/deploy 경로가 46%에서 확인됩니다. 로컬 데모형보다 운영 배포형 레포 비중이 높습니다.
- AGENTS/CLAUDE/Codex/Cursor류 instruction 파일이 37%에서 보여 agent-native 개발 방식이 이미 레포 구조에 들어와 있습니다.

## Trend and Source Metrics

| Field | Value |
| --- | --- |
| Repositories | 172 |
| Trend-linked repositories | 122 |
| Global / Korea trend count | 56 / 69 |
| Both global and Korea | 3 |
| Max / median trend score | 203 / 87 |
| Total / median stars | 1098064 / 466 |
| Key source references | 1784 |
| Median file count | 342 |

## Source Feature Distribution

### Dominant Features

| Signal | Count |
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


### Architecture Patterns

| Signal | Count |
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


### Evidence Bucket Coverage

| Signal | Count |
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


### Dependency Groups

| Signal | Count |
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


### Command Surface

| Signal | Count |
| --- | ---: |
| utility | 64 |
| build | 49 |
| test | 44 |
| quality | 35 |
| serve-dev | 35 |
| entrypoint | 10 |
| container | 5 |


### Risk Categories

_No signals._


## Top Trend Repositories

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [MervinPraison/PraisonAI](https://github.com/MervinPraison/PraisonAI) | LLM 위키/RAG/지식베이스 | 541 | 203 | 8173 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/MervinPraison__PraisonAI.md) / [report](../../../global-trending/repositories/MervinPraison__PraisonAI.md) / [source](../../../../sources/MervinPraison__PraisonAI) |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | LLM 위키/RAG/지식베이스 | 534 | 195 | 25770 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/c/volcengine__OpenViking.md) / [report](../../../global-trending/repositories/volcengine__OpenViking.md) / [source](../../../../sources/volcengine__OpenViking) |
| [gptme/gptme](https://github.com/gptme/gptme) | LLM 위키/RAG/지식베이스 | 524 | 195 | 4332 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/6/gptme__gptme.md) / [report](../../../global-trending/repositories/gptme__gptme.md) / [source](../../../../sources/gptme__gptme) |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | LLM 위키/RAG/지식베이스 | 520 | 175 | 82994 | JavaScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/e/thedotmack__claude-mem.md) / [report](../../../global-trending/repositories/thedotmack__claude-mem.md) / [source](../../../../sources/thedotmack__claude-mem) |
| [plastic-labs/honcho](https://github.com/plastic-labs/honcho) | LLM 위키/RAG/지식베이스 | 518 | 190 | 5239 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/plastic-labs__honcho.md) / [report](../../../global-trending/repositories/plastic-labs__honcho.md) / [source](../../../../sources/plastic-labs__honcho) |
| [CaviraOSS/OpenMemory](https://github.com/CaviraOSS/OpenMemory) | LLM 위키/RAG/지식베이스 | 517 | 196 | 4243 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/CaviraOSS__OpenMemory.md) / [report](../../../global-trending/repositories/CaviraOSS__OpenMemory.md) / [source](../../../../sources/CaviraOSS__OpenMemory) |
| [pingcap/tidb](https://github.com/pingcap/tidb) | LLM 위키/RAG/지식베이스 | 517 | 180 | 40171 | Go | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/pingcap__tidb.md) / [report](../../../global-trending/repositories/pingcap__tidb.md) / [source](../../../../sources/pingcap__tidb) |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | LLM 위키/RAG/지식베이스 | 501 | 170 | 17885 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/topoteretes__cognee.md) / [report](../../../global-trending/repositories/topoteretes__cognee.md) / [source](../../../../sources/topoteretes__cognee) |
| [Marker-Inc-Korea/AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) | LLM 위키/RAG/지식베이스 | 487 | 180 | 4832 | Python | cli-first, api/server, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/5/Marker-Inc-Korea__AutoRAG.md) / [report](../../../korea-trending/repositories/Marker-Inc-Korea__AutoRAG.md) / [source](../../../../sources/Marker-Inc-Korea__AutoRAG) |
| [oracle-devrel/oracle-ai-developer-hub](https://github.com/oracle-devrel/oracle-ai-developer-hub) | LLM 위키/RAG/지식베이스 | 485 | 167 | 4191 | Jupyter Notebook | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/oracle-devrel__oracle-ai-developer-hub.md) / [report](../../../global-trending/repositories/oracle-devrel__oracle-ai-developer-hub.md) / [source](../../../../sources/oracle-devrel__oracle-ai-developer-hub) |
| [matrixorigin/matrixone](https://github.com/matrixorigin/matrixone) | LLM 위키/RAG/지식베이스 | 483 | 173 | 1847 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/matrixorigin__matrixone.md) / [report](../../../global-trending/repositories/matrixorigin__matrixone.md) / [source](../../../../sources/matrixorigin__matrixone) |
| [moorcheh-ai/memanto](https://github.com/moorcheh-ai/memanto) | LLM 위키/RAG/지식베이스 | 479 | 175 | 946 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/moorcheh-ai__memanto.md) / [report](../../../global-trending/repositories/moorcheh-ai__memanto.md) / [source](../../../../sources/moorcheh-ai__memanto) |
| [kenn-io/agentsview](https://github.com/kenn-io/agentsview) | LLM 위키/RAG/지식베이스 | 479 | 168 | 2796 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/kenn-io__agentsview.md) / [report](../../../global-trending/repositories/kenn-io__agentsview.md) / [source](../../../../sources/kenn-io__agentsview) |
| [cbcoutinho/nextcloud-mcp-server](https://github.com/cbcoutinho/nextcloud-mcp-server) | LLM 위키/RAG/지식베이스 | 459 | 170 | 272 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/8/cbcoutinho__nextcloud-mcp-server.md) / [report](../../../global-trending/repositories/cbcoutinho__nextcloud-mcp-server.md) / [source](../../../../sources/cbcoutinho__nextcloud-mcp-server) |
| [facebookresearch/faiss](https://github.com/facebookresearch/faiss) | LLM 위키/RAG/지식베이스 | 458 | 176 | 40322 | C++ | retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/4/facebookresearch__faiss.md) / [report](../../../global-trending/repositories/facebookresearch__faiss.md) / [source](../../../../sources/facebookresearch__faiss) |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | LLM 위키/RAG/지식베이스 | 456 | 165 | 5871 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, security-policy, container-deploy, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/9/TencentCloud__TencentDB-Agent-Memory.md) / [report](../../../global-trending/repositories/TencentCloud__TencentDB-Agent-Memory.md) / [source](../../../../sources/TencentCloud__TencentDB-Agent-Memory) |
| [axoviq-ai/synthadoc](https://github.com/axoviq-ai/synthadoc) | LLM 위키/RAG/지식베이스 | 454 | 165 | 465 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/axoviq-ai__synthadoc.md) / [report](../../../global-trending/repositories/axoviq-ai__synthadoc.md) / [source](../../../../sources/axoviq-ai__synthadoc) |
| [alibaba/zvec](https://github.com/alibaba/zvec) | LLM 위키/RAG/지식베이스 | 451 | 164 | 10812 | C++ | agent-runtime, retrieval-memory, tests-evals, security-policy, container-deploy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/0/alibaba__zvec.md) / [report](../../../global-trending/repositories/alibaba__zvec.md) / [source](../../../../sources/alibaba__zvec) |
| [Eric-Terminal/ETOS-LLM-Studio](https://github.com/Eric-Terminal/ETOS-LLM-Studio) | LLM 위키/RAG/지식베이스 | 447 | 172 | 139 | Swift | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/Eric-Terminal__ETOS-LLM-Studio.md) / [report](../../../global-trending/repositories/Eric-Terminal__ETOS-LLM-Studio.md) / [source](../../../../sources/Eric-Terminal__ETOS-LLM-Studio) |
| [utensils/mcp-nixos](https://github.com/utensils/mcp-nixos) | LLM 위키/RAG/지식베이스 | 424 | 162 | 697 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/utensils__mcp-nixos.md) / [report](../../../global-trending/repositories/utensils__mcp-nixos.md) / [source](../../../../sources/utensils__mcp-nixos) |


## Top Repository Comparison

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [MervinPraison/PraisonAI](https://github.com/MervinPraison/PraisonAI) | LLM 위키/RAG/지식베이스 | 541 | 203 | 8173 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/MervinPraison__PraisonAI.md) / [report](../../../global-trending/repositories/MervinPraison__PraisonAI.md) / [source](../../../../sources/MervinPraison__PraisonAI) |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | LLM 위키/RAG/지식베이스 | 534 | 195 | 25770 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/c/volcengine__OpenViking.md) / [report](../../../global-trending/repositories/volcengine__OpenViking.md) / [source](../../../../sources/volcengine__OpenViking) |
| [gptme/gptme](https://github.com/gptme/gptme) | LLM 위키/RAG/지식베이스 | 524 | 195 | 4332 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/6/gptme__gptme.md) / [report](../../../global-trending/repositories/gptme__gptme.md) / [source](../../../../sources/gptme__gptme) |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | LLM 위키/RAG/지식베이스 | 520 | 175 | 82994 | JavaScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/e/thedotmack__claude-mem.md) / [report](../../../global-trending/repositories/thedotmack__claude-mem.md) / [source](../../../../sources/thedotmack__claude-mem) |
| [plastic-labs/honcho](https://github.com/plastic-labs/honcho) | LLM 위키/RAG/지식베이스 | 518 | 190 | 5239 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/plastic-labs__honcho.md) / [report](../../../global-trending/repositories/plastic-labs__honcho.md) / [source](../../../../sources/plastic-labs__honcho) |
| [CaviraOSS/OpenMemory](https://github.com/CaviraOSS/OpenMemory) | LLM 위키/RAG/지식베이스 | 517 | 196 | 4243 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/CaviraOSS__OpenMemory.md) / [report](../../../global-trending/repositories/CaviraOSS__OpenMemory.md) / [source](../../../../sources/CaviraOSS__OpenMemory) |
| [pingcap/tidb](https://github.com/pingcap/tidb) | LLM 위키/RAG/지식베이스 | 517 | 180 | 40171 | Go | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/pingcap__tidb.md) / [report](../../../global-trending/repositories/pingcap__tidb.md) / [source](../../../../sources/pingcap__tidb) |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | LLM 위키/RAG/지식베이스 | 501 | 170 | 17885 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/topoteretes__cognee.md) / [report](../../../global-trending/repositories/topoteretes__cognee.md) / [source](../../../../sources/topoteretes__cognee) |
| [Marker-Inc-Korea/AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG) | LLM 위키/RAG/지식베이스 | 487 | 180 | 4832 | Python | cli-first, api/server, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/5/Marker-Inc-Korea__AutoRAG.md) / [report](../../../korea-trending/repositories/Marker-Inc-Korea__AutoRAG.md) / [source](../../../../sources/Marker-Inc-Korea__AutoRAG) |
| [oracle-devrel/oracle-ai-developer-hub](https://github.com/oracle-devrel/oracle-ai-developer-hub) | LLM 위키/RAG/지식베이스 | 485 | 167 | 4191 | Jupyter Notebook | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/oracle-devrel__oracle-ai-developer-hub.md) / [report](../../../global-trending/repositories/oracle-devrel__oracle-ai-developer-hub.md) / [source](../../../../sources/oracle-devrel__oracle-ai-developer-hub) |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | LLM 위키/RAG/지식베이스 | 485 | 159 | 16520 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/vectorize-io__hindsight.md) / [report](../../../global-trending/repositories/vectorize-io__hindsight.md) / [source](../../../../sources/vectorize-io__hindsight) |
| [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | LLM 위키/RAG/지식베이스 | 485 | 151 | 69499 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/toeverything__AFFiNE.md) / [report](../../../global-trending/repositories/toeverything__AFFiNE.md) / [source](../../../../sources/toeverything__AFFiNE) |
| [matrixorigin/matrixone](https://github.com/matrixorigin/matrixone) | LLM 위키/RAG/지식베이스 | 483 | 173 | 1847 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/matrixorigin__matrixone.md) / [report](../../../global-trending/repositories/matrixorigin__matrixone.md) / [source](../../../../sources/matrixorigin__matrixone) |
| [moorcheh-ai/memanto](https://github.com/moorcheh-ai/memanto) | LLM 위키/RAG/지식베이스 | 479 | 175 | 946 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/moorcheh-ai__memanto.md) / [report](../../../global-trending/repositories/moorcheh-ai__memanto.md) / [source](../../../../sources/moorcheh-ai__memanto) |
| [kenn-io/agentsview](https://github.com/kenn-io/agentsview) | LLM 위키/RAG/지식베이스 | 479 | 168 | 2796 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/kenn-io__agentsview.md) / [report](../../../global-trending/repositories/kenn-io__agentsview.md) / [source](../../../../sources/kenn-io__agentsview) |
| [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) | LLM 위키/RAG/지식베이스 | 477 | 152 | 62771 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/b/Egonex-AI__Understand-Anything.md) / [report](../../../global-trending/repositories/Egonex-AI__Understand-Anything.md) / [source](../../../../sources/Egonex-AI__Understand-Anything) |
| [memgraph/memgraph](https://github.com/memgraph/memgraph) | LLM 위키/RAG/지식베이스 | 463 | 161 | 4163 | C++ | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/memgraph__memgraph.md) / [report](../../../global-trending/repositories/memgraph__memgraph.md) / [source](../../../../sources/memgraph__memgraph) |
| [apify/crawlee](https://github.com/apify/crawlee) | LLM 위키/RAG/지식베이스 | 462 | 154 | 23804 | TypeScript | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, container-deploy, agent-instructions, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/apify__crawlee.md) / [report](../../../global-trending/repositories/apify__crawlee.md) / [source](../../../../sources/apify__crawlee) |
| [cbcoutinho/nextcloud-mcp-server](https://github.com/cbcoutinho/nextcloud-mcp-server) | LLM 위키/RAG/지식베이스 | 459 | 170 | 272 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/8/cbcoutinho__nextcloud-mcp-server.md) / [report](../../../global-trending/repositories/cbcoutinho__nextcloud-mcp-server.md) / [source](../../../../sources/cbcoutinho__nextcloud-mcp-server) |
| [facebookresearch/faiss](https://github.com/facebookresearch/faiss) | LLM 위키/RAG/지식베이스 | 458 | 176 | 40322 | C++ | retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/4/facebookresearch__faiss.md) / [report](../../../global-trending/repositories/facebookresearch__faiss.md) / [source](../../../../sources/facebookresearch__faiss) |
| [redis/redis](https://github.com/redis/redis) | LLM 위키/RAG/지식베이스 | 458 | 149 | 74920 | C | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/redis__redis.md) / [report](../../../global-trending/repositories/redis__redis.md) / [source](../../../../sources/redis__redis) |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | LLM 위키/RAG/지식베이스 | 456 | 165 | 5871 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, security-policy, container-deploy, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/9/TencentCloud__TencentDB-Agent-Memory.md) / [report](../../../global-trending/repositories/TencentCloud__TencentDB-Agent-Memory.md) / [source](../../../../sources/TencentCloud__TencentDB-Agent-Memory) |
| [axoviq-ai/synthadoc](https://github.com/axoviq-ai/synthadoc) | LLM 위키/RAG/지식베이스 | 454 | 165 | 465 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/axoviq-ai__synthadoc.md) / [report](../../../global-trending/repositories/axoviq-ai__synthadoc.md) / [source](../../../../sources/axoviq-ai__synthadoc) |
| [infiniflow/infinity](https://github.com/infiniflow/infinity) | LLM 위키/RAG/지식베이스 | 453 | 160 | 4571 | C++ | cli-first, agent-runtime, retrieval-memory, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/infiniflow__infinity.md) / [report](../../../global-trending/repositories/infiniflow__infinity.md) / [source](../../../../sources/infiniflow__infinity) |
| [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | LLM 위키/RAG/지식베이스 | 453 | 154 | 1225 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/semantica-agi__semantica.md) / [report](../../../global-trending/repositories/semantica-agi__semantica.md) / [source](../../../../sources/semantica-agi__semantica) |
| [giancarloerra/SocratiCode](https://github.com/giancarloerra/SocratiCode) | LLM 위키/RAG/지식베이스 | 452 | 156 | 3002 | TypeScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/6/giancarloerra__SocratiCode.md) / [report](../../../global-trending/repositories/giancarloerra__SocratiCode.md) / [source](../../../../sources/giancarloerra__SocratiCode) |
| [alibaba/zvec](https://github.com/alibaba/zvec) | LLM 위키/RAG/지식베이스 | 451 | 164 | 10812 | C++ | agent-runtime, retrieval-memory, tests-evals, security-policy, container-deploy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/0/alibaba__zvec.md) / [report](../../../global-trending/repositories/alibaba__zvec.md) / [source](../../../../sources/alibaba__zvec) |
| [Eric-Terminal/ETOS-LLM-Studio](https://github.com/Eric-Terminal/ETOS-LLM-Studio) | LLM 위키/RAG/지식베이스 | 447 | 172 | 139 | Swift | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/Eric-Terminal__ETOS-LLM-Studio.md) / [report](../../../global-trending/repositories/Eric-Terminal__ETOS-LLM-Studio.md) / [source](../../../../sources/Eric-Terminal__ETOS-LLM-Studio) |
| [nex-crm/wuphf](https://github.com/nex-crm/wuphf) | LLM 위키/RAG/지식베이스 | 447 | 147 | 1190 | Go | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/nex-crm__wuphf.md) / [report](../../../global-trending/repositories/nex-crm__wuphf.md) / [source](../../../../sources/nex-crm__wuphf) |
| [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki) | LLM 위키/RAG/지식베이스 | 443 | 149 | 11795 | TypeScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/b/nashsu__llm_wiki.md) / [report](../../../global-trending/repositories/nashsu__llm_wiki.md) / [source](../../../../sources/nashsu__llm_wiki) |


## Risk Watchlist

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [vespa-engine/vespa](https://github.com/vespa-engine/vespa) | LLM 위키/RAG/지식베이스 | 419 | 141 | 6962 | Java | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | scan truncated at 15000 files, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/vespa-engine__vespa.md) / [report](../../../global-trending/repositories/vespa-engine__vespa.md) / [source](../../../../sources/vespa-engine__vespa) |
| [Azure/GPT-RAG](https://github.com/Azure/GPT-RAG) | LLM 위키/RAG/지식베이스 | 358 | 136 | 1161 | Python | agent-runtime, retrieval-memory, spec-artifacts, security-policy, agent-instructions | agent-runtime, retrieval-memory, spec-artifacts, security-policy | entrypoint path not obvious, test/eval path not obvious | [source deep dive](../../../source-deep-dives/repositories/e/Azure__GPT-RAG.md) / [report](../../../global-trending/repositories/Azure__GPT-RAG.md) / [source](../../../../sources/Azure__GPT-RAG) |
| [naver/arcus](https://github.com/naver/arcus) | LLM 위키/RAG/지식베이스 | 342 | 144 | 316 | Shell | spec-artifacts, tests-evals, container-deploy | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/naver__arcus.md) / [report](../../../korea-trending/repositories/naver__arcus.md) / [source](../../../../sources/naver__arcus) |
| [naver/bergen](https://github.com/naver/bergen) | LLM 위키/RAG/지식베이스 | 321 | 107 | 274 | Jupyter Notebook | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/5/naver__bergen.md) / [report](../../../korea-trending/repositories/naver__bergen.md) / [source](../../../../sources/naver__bergen) |
| [naver/splade](https://github.com/naver/splade) | LLM 위키/RAG/지식베이스 | 302 | 110 | 994 | Python | retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/4/naver__splade.md) / [report](../../../korea-trending/repositories/naver__splade.md) / [source](../../../../sources/naver__splade) |
| [woowacourse/woowacourse-docs](https://github.com/woowacourse/woowacourse-docs) | LLM 위키/RAG/지식베이스 | 290 | 115 | 420 | unknown | agent-runtime, retrieval-memory, spec-artifacts, security-policy | agent-runtime, retrieval-memory, spec-artifacts, security-policy | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/woowacourse__woowacourse-docs.md) / [report](../../../korea-trending/repositories/woowacourse__woowacourse-docs.md) / [source](../../../../sources/woowacourse__woowacourse-docs) |
| [naver-ai/seit](https://github.com/naver-ai/seit) | LLM 위키/RAG/지식베이스 | 205 | 81 | 56 | Python | retrieval-memory, spec-artifacts | retrieval-memory, spec-artifacts | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/6/naver-ai__seit.md) / [report](../../../korea-trending/repositories/naver-ai__seit.md) / [source](../../../../sources/naver-ai__seit) |
| [naver/artemis](https://github.com/naver/artemis) | LLM 위키/RAG/지식베이스 | 184 | 80 | 52 | Python | spec-artifacts, model-runtime | 모델 런타임/서빙 의존성이 직접 잡히는 인프라형 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/b/naver__artemis.md) / [report](../../../korea-trending/repositories/naver__artemis.md) / [source](../../../../sources/naver__artemis) |
| [GSL-R/arona-soul-agent-memory](https://github.com/GSL-R/arona-soul-agent-memory) | LLM 위키/RAG/지식베이스 | 178 | 71 | 0 | unknown | agent-runtime, retrieval-memory, security-policy | agent-runtime, retrieval-memory, security-policy | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/7/GSL-R__arona-soul-agent-memory.md) / [report](../../../korea-trending/repositories/GSL-R__arona-soul-agent-memory.md) / [source](../../../../sources/GSL-R__arona-soul-agent-memory) |
| [naver/tldr](https://github.com/naver/tldr) | LLM 위키/RAG/지식베이스 | 176 | 86 | 127 | Python |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/4/naver__tldr.md) / [report](../../../korea-trending/repositories/naver__tldr.md) / [source](../../../../sources/naver__tldr) |
| [woowacourse/react-payments](https://github.com/woowacourse/react-payments) | LLM 위키/RAG/지식베이스 | 169 | 91 | 38 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/1/woowacourse__react-payments.md) / [report](../../../korea-trending/repositories/woowacourse__react-payments.md) / [source](../../../../sources/woowacourse__react-payments) |
| [SamurAIGPT/llm-wiki-agent](https://github.com/SamurAIGPT/llm-wiki-agent) | LLM 위키/RAG/지식베이스 | 162 | 0 | 2959 | Python | agent-runtime, retrieval-memory, spec-artifacts, agent-instructions | agent-runtime, retrieval-memory, spec-artifacts, agent-instructions | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/d/SamurAIGPT__llm-wiki-agent.md) / [report](../../../llm-wiki/repositories/SamurAIGPT__llm-wiki-agent.md) / [source](../../../../sources/SamurAIGPT__llm-wiki-agent) |
| [naver-ai/carecall-corpus](https://github.com/naver-ai/carecall-corpus) | LLM 위키/RAG/지식베이스 | 160 | 79 | 62 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/naver-ai__carecall-corpus.md) / [report](../../../korea-trending/repositories/naver-ai__carecall-corpus.md) / [source](../../../../sources/naver-ai__carecall-corpus) |
| [line/LibriTTS-P](https://github.com/line/LibriTTS-P) | LLM 위키/RAG/지식베이스 | 157 | 71 | 161 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/7/line__LibriTTS-P.md) / [report](../../../korea-trending/repositories/line__LibriTTS-P.md) / [source](../../../../sources/line__LibriTTS-P) |
| [simonsez9510/oh-my-wiki](https://github.com/simonsez9510/oh-my-wiki) | LLM 위키/RAG/지식베이스 | 135 | 69 | 0 | PowerShell | agent-runtime | agent-runtime | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/simonsez9510__oh-my-wiki.md) / [report](../../../korea-trending/repositories/simonsez9510__oh-my-wiki.md) / [source](../../../../sources/simonsez9510__oh-my-wiki) |
| [daangn/search-ko-dic](https://github.com/daangn/search-ko-dic) | LLM 위키/RAG/지식베이스 | 123 | 68 | 5 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/daangn__search-ko-dic.md) / [report](../../../korea-trending/repositories/daangn__search-ko-dic.md) / [source](../../../../sources/daangn__search-ko-dic) |
| [DEEP-PolyU/Awesome-GraphRAG](https://github.com/DEEP-PolyU/Awesome-GraphRAG) | LLM 위키/RAG/지식베이스 | 92 | 0 | 2474 | unknown | retrieval-memory | retrieval-memory | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/5/DEEP-PolyU__Awesome-GraphRAG.md) / [report](../../../llm-wiki/repositories/DEEP-PolyU__Awesome-GraphRAG.md) / [source](../../../../sources/DEEP-PolyU__Awesome-GraphRAG) |
| [IAAR-Shanghai/Awesome-AI-Memory](https://github.com/IAAR-Shanghai/Awesome-AI-Memory) | LLM 위키/RAG/지식베이스 | 86 | 0 | 996 | Python | agent-instructions | agent-instructions | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/IAAR-Shanghai__Awesome-AI-Memory.md) / [report](../../../llm-wiki/repositories/IAAR-Shanghai__Awesome-AI-Memory.md) / [source](../../../../sources/IAAR-Shanghai__Awesome-AI-Memory) |
| [onlybooks/llm](https://github.com/onlybooks/llm) | LLM 위키/RAG/지식베이스 | 62 | 0 | 200 | Jupyter Notebook |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/1/onlybooks__llm.md) / [report](../../../llm-wiki/repositories/onlybooks__llm.md) / [source](../../../../sources/onlybooks__llm) |
| [ohbryt/bb-wiki](https://github.com/ohbryt/bb-wiki) | LLM 위키/RAG/지식베이스 | 41 | 0 | 0 | Python | retrieval-memory | retrieval-memory | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/ohbryt__bb-wiki.md) / [report](../../../llm-wiki/repositories/ohbryt__bb-wiki.md) / [source](../../../../sources/ohbryt__bb-wiki) |
