# AI Infrastructure and Serving Source Insights

Generated: 2026-06-18T15:12:59.248Z

model serving, API server, deployment, Docker/Kubernetes, runtime adapters

## 요약

- 조사 단위: AI 인프라/서빙 카테고리에 속한 75개 source-scanned 레포입니다.
- 포함 범위: trend-linked 69개, key source reference 774개, median source depth 117입니다.
- 탐색 방식: Category Insights를 먼저 보고, Top Repository Comparison의 source deep dive 링크를 따라 구현 근거를 확인합니다.

## 총평

AI 인프라/서빙 카테고리는 75개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 92%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

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

- AI 인프라/서빙 카테고리는 75개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 92%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 eval/test harness (72), retrieval/vector path (71), agent/tool runtime (68)이고, 파일 근거 bucket은 docs (75), eval (72), retrieval (71), agentRuntime (68) 순서로 강합니다.
- MCP/tool protocol 표면이 44%에서 보입니다. 단순 라이브러리보다 agent tool 연결/registry를 비교해야 합니다.
- RAG, memory, vector/index 경로가 95%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 79%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 96%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- container/deploy 경로가 64%에서 확인됩니다. 로컬 데모형보다 운영 배포형 레포 비중이 높습니다.
- AGENTS/CLAUDE/Codex/Cursor류 instruction 파일이 49%에서 보여 agent-native 개발 방식이 이미 레포 구조에 들어와 있습니다.

## Trend and Source Metrics

| Field | Value |
| --- | --- |
| Repositories | 75 |
| Trend-linked repositories | 69 |
| Global / Korea trend count | 59 / 12 |
| Both global and Korea | 2 |
| Max / median trend score | 242 / 140 |
| Total / median stars | 604742 / 1070 |
| Key source references | 774 |
| Median file count | 692 |

## Source Feature Distribution

### Dominant Features

| Signal | Count |
| --- | ---: |
| tests-evals | 72 |
| retrieval-memory | 71 |
| agent-runtime | 68 |
| spec-artifacts | 59 |
| cli-first | 57 |
| api/server | 48 |
| container-deploy | 48 |
| security-policy | 48 |
| mcp/protocol | 35 |
| agent-instructions | 33 |
| model-runtime | 22 |
| web-runtime | 13 |


### Architecture Patterns

| Signal | Count |
| --- | ---: |
| eval/test harness | 72 |
| retrieval/vector path | 71 |
| agent/tool runtime | 68 |
| spec/docs-driven | 59 |
| cli-first | 57 |
| api/server | 48 |
| security/policy surface | 48 |
| containerized deploy | 42 |
| monorepo/workspace | 10 |
| ui/extension surface | 4 |


### Evidence Bucket Coverage

| Signal | Count |
| --- | ---: |
| docs | 75 |
| eval | 72 |
| retrieval | 71 |
| agentRuntime | 68 |
| config | 68 |
| ci | 65 |
| spec | 59 |
| entrypoints | 58 |
| container | 48 |
| security | 48 |
| instruction | 37 |
| mcp | 33 |


### Dependency Groups

| Signal | Count |
| --- | ---: |
| modelRuntime | 27 |
| llmProviders | 20 |
| webRuntime | 20 |
| agentProtocols | 14 |
| observability | 12 |
| developerSurface | 11 |
| agentFrameworks | 10 |
| vectorStores | 8 |
| browserAutomation | 3 |


### Command Surface

| Signal | Count |
| --- | ---: |
| utility | 33 |
| test | 23 |
| build | 21 |
| quality | 21 |
| serve-dev | 16 |
| entrypoint | 2 |
| container | 1 |


### Risk Categories

_No signals._


## Top Trend Repositories

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | AI 인프라/서빙 | 594 | 242 | 61740 | JavaScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/Mintplex-Labs__anything-llm.md) / [report](../../../global-trending/repositories/Mintplex-Labs__anything-llm.md) / [source](../../../../sources/Mintplex-Labs__anything-llm) |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | AI 인프라/서빙 | 553 | 199 | 142039 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/open-webui__open-webui.md) / [report](../../../global-trending/repositories/open-webui__open-webui.md) / [source](../../../../sources/open-webui__open-webui) |
| [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense) | AI 인프라/서빙 | 508 | 176 | 14921 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/d/MODSetter__SurfSense.md) / [report](../../../global-trending/repositories/MODSetter__SurfSense.md) / [source](../../../../sources/MODSetter__SurfSense) |
| [stacklok/toolhive](https://github.com/stacklok/toolhive) | AI 인프라/서빙 | 503 | 184 | 1889 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/8/stacklok__toolhive.md) / [report](../../../global-trending/repositories/stacklok__toolhive.md) / [source](../../../../sources/stacklok__toolhive) |
| [pipeshub-ai/pipeshub-ai](https://github.com/pipeshub-ai/pipeshub-ai) | AI 인프라/서빙 | 495 | 176 | 2989 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/f/pipeshub-ai__pipeshub-ai.md) / [report](../../../global-trending/repositories/pipeshub-ai__pipeshub-ai.md) / [source](../../../../sources/pipeshub-ai__pipeshub-ai) |
| [raullenchai/Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) | AI 인프라/서빙 | 484 | 177 | 2902 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, model-runtime, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/raullenchai__Rapid-MLX.md) / [report](../../../global-trending/repositories/raullenchai__Rapid-MLX.md) / [source](../../../../sources/raullenchai__Rapid-MLX) |
| [LearningCircuit/local-deep-research](https://github.com/LearningCircuit/local-deep-research) | AI 인프라/서빙 | 480 | 162 | 8493 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/LearningCircuit__local-deep-research.md) / [report](../../../global-trending/repositories/LearningCircuit__local-deep-research.md) / [source](../../../../sources/LearningCircuit__local-deep-research) |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | AI 인프라/서빙 | 475 | 161 | 12202 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/StarTrail-org__LEANN.md) / [report](../../../global-trending/repositories/StarTrail-org__LEANN.md) / [source](../../../../sources/StarTrail-org__LEANN) |
| [crmne/ruby_llm](https://github.com/crmne/ruby_llm) | AI 인프라/서빙 | 473 | 181 | 4028 | Ruby | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/b/crmne__ruby_llm.md) / [report](../../../global-trending/repositories/crmne__ruby_llm.md) / [source](../../../../sources/crmne__ruby_llm) |
| [containers/ramalama](https://github.com/containers/ramalama) | AI 인프라/서빙 | 472 | 171 | 2902 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/f/containers__ramalama.md) / [report](../../../global-trending/repositories/containers__ramalama.md) / [source](../../../../sources/containers__ramalama) |
| [apocas/restai](https://github.com/apocas/restai) | AI 인프라/서빙 | 461 | 162 | 510 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/c/apocas__restai.md) / [report](../../../global-trending/repositories/apocas__restai.md) / [source](../../../../sources/apocas__restai) |
| [mozilla-ai/llamafile](https://github.com/mozilla-ai/llamafile) | AI 인프라/서빙 | 456 | 167 | 24999 | C++ | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/mozilla-ai__llamafile.md) / [report](../../../global-trending/repositories/mozilla-ai__llamafile.md) / [source](../../../../sources/mozilla-ai__llamafile) |
| [hexabot-ai/Hexabot](https://github.com/hexabot-ai/Hexabot) | AI 인프라/서빙 | 455 | 154 | 974 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/hexabot-ai__Hexabot.md) / [report](../../../global-trending/repositories/hexabot-ai__Hexabot.md) / [source](../../../../sources/hexabot-ai__Hexabot) |
| [Light-Heart-Labs/DreamServer](https://github.com/Light-Heart-Labs/DreamServer) | AI 인프라/서빙 | 454 | 154 | 2079 | Shell | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/Light-Heart-Labs__DreamServer.md) / [report](../../../global-trending/repositories/Light-Heart-Labs__DreamServer.md) / [source](../../../../sources/Light-Heart-Labs__DreamServer) |
| [superlinked/sie](https://github.com/superlinked/sie) | AI 인프라/서빙 | 445 | 153 | 2053 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/b/superlinked__sie.md) / [report](../../../global-trending/repositories/superlinked__sie.md) / [source](../../../../sources/superlinked__sie) |
| [askalf/dario](https://github.com/askalf/dario) | AI 인프라/서빙 | 444 | 164 | 278 | JavaScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/9/askalf__dario.md) / [report](../../../global-trending/repositories/askalf__dario.md) / [source](../../../../sources/askalf__dario) |
| [schmitech/orbit](https://github.com/schmitech/orbit) | AI 인프라/서빙 | 439 | 154 | 282 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/schmitech__orbit.md) / [report](../../../global-trending/repositories/schmitech__orbit.md) / [source](../../../../sources/schmitech__orbit) |
| [agents-flex/agents-flex](https://github.com/agents-flex/agents-flex) | AI 인프라/서빙 | 399 | 173 | 1005 | Java | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/agents-flex__agents-flex.md) / [report](../../../global-trending/repositories/agents-flex__agents-flex.md) / [source](../../../../sources/agents-flex__agents-flex) |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | AI 인프라/서빙 | 392 | 162 | 4923 | Python | cli-first, agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/0/Andyyyy64__whichllm.md) / [report](../../../global-trending/repositories/Andyyyy64__whichllm.md) / [source](../../../../sources/Andyyyy64__whichllm) |
| [johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction](https://github.com/johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction) | AI 인프라/서빙 | 366 | 160 | 584 | Jupyter Notebook | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/5/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction.md) / [report](../../../global-trending/repositories/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction.md) / [source](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction) |


## Top Repository Comparison

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | AI 인프라/서빙 | 594 | 242 | 61740 | JavaScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/Mintplex-Labs__anything-llm.md) / [report](../../../global-trending/repositories/Mintplex-Labs__anything-llm.md) / [source](../../../../sources/Mintplex-Labs__anything-llm) |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | AI 인프라/서빙 | 553 | 199 | 142039 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/open-webui__open-webui.md) / [report](../../../global-trending/repositories/open-webui__open-webui.md) / [source](../../../../sources/open-webui__open-webui) |
| [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense) | AI 인프라/서빙 | 508 | 176 | 14921 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/d/MODSetter__SurfSense.md) / [report](../../../global-trending/repositories/MODSetter__SurfSense.md) / [source](../../../../sources/MODSetter__SurfSense) |
| [stacklok/toolhive](https://github.com/stacklok/toolhive) | AI 인프라/서빙 | 503 | 184 | 1889 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/8/stacklok__toolhive.md) / [report](../../../global-trending/repositories/stacklok__toolhive.md) / [source](../../../../sources/stacklok__toolhive) |
| [pipeshub-ai/pipeshub-ai](https://github.com/pipeshub-ai/pipeshub-ai) | AI 인프라/서빙 | 495 | 176 | 2989 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/f/pipeshub-ai__pipeshub-ai.md) / [report](../../../global-trending/repositories/pipeshub-ai__pipeshub-ai.md) / [source](../../../../sources/pipeshub-ai__pipeshub-ai) |
| [raullenchai/Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) | AI 인프라/서빙 | 484 | 177 | 2902 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, model-runtime, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/raullenchai__Rapid-MLX.md) / [report](../../../global-trending/repositories/raullenchai__Rapid-MLX.md) / [source](../../../../sources/raullenchai__Rapid-MLX) |
| [LearningCircuit/local-deep-research](https://github.com/LearningCircuit/local-deep-research) | AI 인프라/서빙 | 480 | 162 | 8493 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/LearningCircuit__local-deep-research.md) / [report](../../../global-trending/repositories/LearningCircuit__local-deep-research.md) / [source](../../../../sources/LearningCircuit__local-deep-research) |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | AI 인프라/서빙 | 475 | 161 | 12202 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/StarTrail-org__LEANN.md) / [report](../../../global-trending/repositories/StarTrail-org__LEANN.md) / [source](../../../../sources/StarTrail-org__LEANN) |
| [crmne/ruby_llm](https://github.com/crmne/ruby_llm) | AI 인프라/서빙 | 473 | 181 | 4028 | Ruby | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/b/crmne__ruby_llm.md) / [report](../../../global-trending/repositories/crmne__ruby_llm.md) / [source](../../../../sources/crmne__ruby_llm) |
| [containers/ramalama](https://github.com/containers/ramalama) | AI 인프라/서빙 | 472 | 171 | 2902 | Python | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/f/containers__ramalama.md) / [report](../../../global-trending/repositories/containers__ramalama.md) / [source](../../../../sources/containers__ramalama) |
| [dyad-sh/dyad](https://github.com/dyad-sh/dyad) | AI 인프라/서빙 | 470 | 150 | 20657 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/b/dyad-sh__dyad.md) / [report](../../../global-trending/repositories/dyad-sh__dyad.md) / [source](../../../../sources/dyad-sh__dyad) |
| [sgl-project/sglang](https://github.com/sgl-project/sglang) | AI 인프라/서빙 | 463 | 136 | 29137 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/sgl-project__sglang.md) / [report](../../../global-trending/repositories/sgl-project__sglang.md) / [source](../../../../sources/sgl-project__sglang) |
| [apocas/restai](https://github.com/apocas/restai) | AI 인프라/서빙 | 461 | 162 | 510 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/c/apocas__restai.md) / [report](../../../global-trending/repositories/apocas__restai.md) / [source](../../../../sources/apocas__restai) |
| [xorbitsai/inference](https://github.com/xorbitsai/inference) | AI 인프라/서빙 | 461 | 146 | 9359 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/xorbitsai__inference.md) / [report](../../../global-trending/repositories/xorbitsai__inference.md) / [source](../../../../sources/xorbitsai__inference) |
| [LMCache/LMCache](https://github.com/LMCache/LMCache) | AI 인프라/서빙 | 459 | 147 | 9269 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/8/LMCache__LMCache.md) / [report](../../../global-trending/repositories/LMCache__LMCache.md) / [source](../../../../sources/LMCache__LMCache) |
| [mozilla-ai/llamafile](https://github.com/mozilla-ai/llamafile) | AI 인프라/서빙 | 456 | 167 | 24999 | C++ | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/mozilla-ai__llamafile.md) / [report](../../../global-trending/repositories/mozilla-ai__llamafile.md) / [source](../../../../sources/mozilla-ai__llamafile) |
| [RunanywhereAI/runanywhere-sdks](https://github.com/RunanywhereAI/runanywhere-sdks) | AI 인프라/서빙 | 456 | 144 | 10329 | C++ | monorepo, cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/RunanywhereAI__runanywhere-sdks.md) / [report](../../../global-trending/repositories/RunanywhereAI__runanywhere-sdks.md) / [source](../../../../sources/RunanywhereAI__runanywhere-sdks) |
| [hexabot-ai/Hexabot](https://github.com/hexabot-ai/Hexabot) | AI 인프라/서빙 | 455 | 154 | 974 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/hexabot-ai__Hexabot.md) / [report](../../../global-trending/repositories/hexabot-ai__Hexabot.md) / [source](../../../../sources/hexabot-ai__Hexabot) |
| [Light-Heart-Labs/DreamServer](https://github.com/Light-Heart-Labs/DreamServer) | AI 인프라/서빙 | 454 | 154 | 2079 | Shell | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/Light-Heart-Labs__DreamServer.md) / [report](../../../global-trending/repositories/Light-Heart-Labs__DreamServer.md) / [source](../../../../sources/Light-Heart-Labs__DreamServer) |
| [lemonade-sdk/lemonade](https://github.com/lemonade-sdk/lemonade) | AI 인프라/서빙 | 446 | 148 | 4507 | C++ | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/lemonade-sdk__lemonade.md) / [report](../../../global-trending/repositories/lemonade-sdk__lemonade.md) / [source](../../../../sources/lemonade-sdk__lemonade) |
| [superlinked/sie](https://github.com/superlinked/sie) | AI 인프라/서빙 | 445 | 153 | 2053 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/b/superlinked__sie.md) / [report](../../../global-trending/repositories/superlinked__sie.md) / [source](../../../../sources/superlinked__sie) |
| [helixml/helix](https://github.com/helixml/helix) | AI 인프라/서빙 | 445 | 148 | 781 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/c/helixml__helix.md) / [report](../../../global-trending/repositories/helixml__helix.md) / [source](../../../../sources/helixml__helix) |
| [askalf/dario](https://github.com/askalf/dario) | AI 인프라/서빙 | 444 | 164 | 278 | JavaScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/9/askalf__dario.md) / [report](../../../global-trending/repositories/askalf__dario.md) / [source](../../../../sources/askalf__dario) |
| [containers/kubernetes-mcp-server](https://github.com/containers/kubernetes-mcp-server) | AI 인프라/서빙 | 444 | 149 | 1699 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, container-deploy, agent-instructions, observability | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/containers__kubernetes-mcp-server.md) / [report](../../../global-trending/repositories/containers__kubernetes-mcp-server.md) / [source](../../../../sources/containers__kubernetes-mcp-server) |
| [gpustack/gpustack](https://github.com/gpustack/gpustack) | AI 인프라/서빙 | 444 | 142 | 5175 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/gpustack__gpustack.md) / [report](../../../global-trending/repositories/gpustack__gpustack.md) / [source](../../../../sources/gpustack__gpustack) |
| [PaddlePaddle/FastDeploy](https://github.com/PaddlePaddle/FastDeploy) | AI 인프라/서빙 | 442 | 140 | 3698 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/PaddlePaddle__FastDeploy.md) / [report](../../../global-trending/repositories/PaddlePaddle__FastDeploy.md) / [source](../../../../sources/PaddlePaddle__FastDeploy) |
| [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | AI 인프라/서빙 | 440 | 137 | 2944 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/NVIDIA__Model-Optimizer.md) / [report](../../../global-trending/repositories/NVIDIA__Model-Optimizer.md) / [source](../../../../sources/NVIDIA__Model-Optimizer) |
| [schmitech/orbit](https://github.com/schmitech/orbit) | AI 인프라/서빙 | 439 | 154 | 282 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/schmitech__orbit.md) / [report](../../../global-trending/repositories/schmitech__orbit.md) / [source](../../../../sources/schmitech__orbit) |
| [kvcache-ai/ktransformers](https://github.com/kvcache-ai/ktransformers) | AI 인프라/서빙 | 439 | 134 | 17302 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/b/kvcache-ai__ktransformers.md) / [report](../../../global-trending/repositories/kvcache-ai__ktransformers.md) / [source](../../../../sources/kvcache-ai__ktransformers) |
| [oumi-ai/oumi](https://github.com/oumi-ai/oumi) | AI 인프라/서빙 | 438 | 132 | 9317 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/oumi-ai__oumi.md) / [report](../../../global-trending/repositories/oumi-ai__oumi.md) / [source](../../../../sources/oumi-ai__oumi) |


## Risk Watchlist

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [superlinked/sie](https://github.com/superlinked/sie) | AI 인프라/서빙 | 445 | 153 | 2053 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/b/superlinked__sie.md) / [report](../../../global-trending/repositories/superlinked__sie.md) / [source](../../../../sources/superlinked__sie) |
| [schmitech/orbit](https://github.com/schmitech/orbit) | AI 인프라/서빙 | 439 | 154 | 282 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/schmitech__orbit.md) / [report](../../../global-trending/repositories/schmitech__orbit.md) / [source](../../../../sources/schmitech__orbit) |
| [spiceai/spiceai](https://github.com/spiceai/spiceai) | AI 인프라/서빙 | 436 | 141 | 2960 | Rust | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | scan truncated at 15000 files, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/7/spiceai__spiceai.md) / [report](../../../global-trending/repositories/spiceai__spiceai.md) / [source](../../../../sources/spiceai__spiceai) |
| [vllm-project/vllm-ascend](https://github.com/vllm-project/vllm-ascend) | AI 인프라/서빙 | 424 | 137 | 2258 | C++ | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/2/vllm-project__vllm-ascend.md) / [report](../../../global-trending/repositories/vllm-project__vllm-ascend.md) / [source](../../../../sources/vllm-project__vllm-ascend) |
| [agents-flex/agents-flex](https://github.com/agents-flex/agents-flex) | AI 인프라/서빙 | 399 | 173 | 1005 | Java | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/agents-flex__agents-flex.md) / [report](../../../global-trending/repositories/agents-flex__agents-flex.md) / [source](../../../../sources/agents-flex__agents-flex) |
| [Andyyyy64/whichllm](https://github.com/Andyyyy64/whichllm) | AI 인프라/서빙 | 392 | 162 | 4923 | Python | cli-first, agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/0/Andyyyy64__whichllm.md) / [report](../../../global-trending/repositories/Andyyyy64__whichllm.md) / [source](../../../../sources/Andyyyy64__whichllm) |
| [SyntheticAutonomicMind/CLIO](https://github.com/SyntheticAutonomicMind/CLIO) | AI 인프라/서빙 | 379 | 136 | 173 | Perl | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/d/SyntheticAutonomicMind__CLIO.md) / [report](../../../global-trending/repositories/SyntheticAutonomicMind__CLIO.md) / [source](../../../../sources/SyntheticAutonomicMind__CLIO) |
| [memex-lab/memex](https://github.com/memex-lab/memex) | AI 인프라/서빙 | 372 | 139 | 487 | Dart | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/1/memex-lab__memex.md) / [report](../../../global-trending/repositories/memex-lab__memex.md) / [source](../../../../sources/memex-lab__memex) |
| [johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction](https://github.com/johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction) | AI 인프라/서빙 | 366 | 160 | 584 | Jupyter Notebook | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/5/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction.md) / [report](../../../global-trending/repositories/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction.md) / [source](../../../../sources/johnsonhk88__AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction) |
| [Samsung/ONE](https://github.com/Samsung/ONE) | AI 인프라/서빙 | 349 | 105 | 571 | C++ | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | scan truncated at 15000 files, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/b/Samsung__ONE.md) / [report](../../../korea-trending/repositories/Samsung__ONE.md) / [source](../../../../sources/Samsung__ONE) |
| [ThomasVitale/llm-apps-java-spring-ai](https://github.com/ThomasVitale/llm-apps-java-spring-ai) | AI 인프라/서빙 | 342 | 139 | 753 | Java | agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/0/ThomasVitale__llm-apps-java-spring-ai.md) / [report](../../../global-trending/repositories/ThomasVitale__llm-apps-java-spring-ai.md) / [source](../../../../sources/ThomasVitale__llm-apps-java-spring-ai) |
| [Palm1r/QodeAssist](https://github.com/Palm1r/QodeAssist) | AI 인프라/서빙 | 321 | 138 | 410 | C++ | agent-runtime, mcp/protocol, tests-evals | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/0/Palm1r__QodeAssist.md) / [report](../../../global-trending/repositories/Palm1r__QodeAssist.md) / [source](../../../../sources/Palm1r__QodeAssist) |
| [cheahjs/free-llm-api-resources](https://github.com/cheahjs/free-llm-api-resources) | AI 인프라/서빙 | 312 | 135 | 23594 | Python | spec-artifacts | spec-artifacts | entrypoint path not obvious, test/eval path not obvious | [source deep dive](../../../source-deep-dives/repositories/b/cheahjs__free-llm-api-resources.md) / [report](../../../global-trending/repositories/cheahjs__free-llm-api-resources.md) / [source](../../../../sources/cheahjs__free-llm-api-resources) |
| [hwdsl2/self-hosted-ai-stack](https://github.com/hwdsl2/self-hosted-ai-stack) | AI 인프라/서빙 | 287 | 140 | 91 | Shell | retrieval-memory, container-deploy | retrieval-memory, container-deploy | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/hwdsl2__self-hosted-ai-stack.md) / [report](../../../global-trending/repositories/hwdsl2__self-hosted-ai-stack.md) / [source](../../../../sources/hwdsl2__self-hosted-ai-stack) |
| [Samsung/TICO](https://github.com/Samsung/TICO) | AI 인프라/서빙 | 277 | 83 | 15 | Python | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/Samsung__TICO.md) / [report](../../../korea-trending/repositories/Samsung__TICO.md) / [source](../../../../sources/Samsung__TICO) |
| [Samsung/walrus](https://github.com/Samsung/walrus) | AI 인프라/서빙 | 276 | 93 | 74 | WebAssembly | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/Samsung__walrus.md) / [report](../../../korea-trending/repositories/Samsung__walrus.md) / [source](../../../../sources/Samsung__walrus) |
| [MUSE-CODE-SPACE/SLMAgent](https://github.com/MUSE-CODE-SPACE/SLMAgent) | AI 인프라/서빙 | 251 | 98 | 0 | Python | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/MUSE-CODE-SPACE__SLMAgent.md) / [report](../../../korea-trending/repositories/MUSE-CODE-SPACE__SLMAgent.md) / [source](../../../../sources/MUSE-CODE-SPACE__SLMAgent) |
| [AD-Styles/MIND-CARE-Conversational-ChatBot](https://github.com/AD-Styles/MIND-CARE-Conversational-ChatBot) | AI 인프라/서빙 | 210 | 74 | 0 | Python | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/0/AD-Styles__MIND-CARE-Conversational-ChatBot.md) / [report](../../../korea-trending/repositories/AD-Styles__MIND-CARE-Conversational-ChatBot.md) / [source](../../../../sources/AD-Styles__MIND-CARE-Conversational-ChatBot) |
| [line/kubectl-kustomize](https://github.com/line/kubectl-kustomize) | AI 인프라/서빙 | 160 | 70 | 36 | Dockerfile | container-deploy | container-deploy | entrypoint path not obvious, test/eval path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/line__kubectl-kustomize.md) / [report](../../../korea-trending/repositories/line__kubectl-kustomize.md) / [source](../../../../sources/line__kubectl-kustomize) |
| [microsoft/BitNet](https://github.com/microsoft/BitNet) | AI 인프라/서빙 | 92 | 0 | 0 | unknown | retrieval-memory, spec-artifacts, tests-evals, security-policy, model-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/microsoft__BitNet.md) / [report](../../../clone-structures/microsoft__BitNet.md) / [source](../../../../sources/microsoft__BitNet) |
