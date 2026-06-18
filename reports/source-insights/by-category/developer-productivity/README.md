# Developer Productivity and DevTools Source Insights

Generated: 2026-06-18T15:12:59.248Z

CLI/devtool entrypoints, SDK shape, CI/build scripts, automation

## 요약

- 조사 단위: 개발 생산성/DevTools 카테고리에 속한 49개 source-scanned 레포입니다.
- 포함 범위: trend-linked 48개, key source reference 446개, median source depth 95입니다.
- 탐색 방식: Category Insights를 먼저 보고, Top Repository Comparison의 source deep dive 링크를 따라 구현 근거를 확인합니다.

## 총평

개발 생산성/DevTools 카테고리는 49개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 98%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

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

- 개발 생산성/DevTools 카테고리는 49개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 98%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 eval/test harness (40), retrieval/vector path (33), security/policy surface (33)이고, 파일 근거 bucket은 docs (49), eval (40), ci (35), config (33) 순서로 강합니다.
- MCP/tool protocol 표면이 39%에서 보입니다. 단순 라이브러리보다 agent tool 연결/registry를 비교해야 합니다.
- RAG, memory, vector/index 경로가 67%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 39%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 82%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- AGENTS/CLAUDE/Codex/Cursor류 instruction 파일이 31%에서 보여 agent-native 개발 방식이 이미 레포 구조에 들어와 있습니다.

## Trend and Source Metrics

| Field | Value |
| --- | --- |
| Repositories | 49 |
| Trend-linked repositories | 48 |
| Global / Korea trend count | 17 / 31 |
| Both global and Korea | 0 |
| Max / median trend score | 183 / 102 |
| Total / median stars | 522367 / 419 |
| Key source references | 446 |
| Median file count | 412 |

## Source Feature Distribution

### Dominant Features

| Signal | Count |
| --- | ---: |
| tests-evals | 41 |
| retrieval-memory | 33 |
| security-policy | 33 |
| agent-runtime | 31 |
| cli-first | 26 |
| api/server | 19 |
| mcp/protocol | 19 |
| spec-artifacts | 19 |
| agent-instructions | 15 |
| container-deploy | 12 |
| monorepo | 4 |
| web-runtime | 2 |


### Architecture Patterns

| Signal | Count |
| --- | ---: |
| eval/test harness | 40 |
| retrieval/vector path | 33 |
| security/policy surface | 33 |
| agent/tool runtime | 31 |
| cli-first | 26 |
| api/server | 19 |
| spec/docs-driven | 19 |
| containerized deploy | 12 |
| monorepo/workspace | 4 |
| general source tree | 1 |
| Objective-C source tree | 1 |
| Shell source tree | 1 |


### Evidence Bucket Coverage

| Signal | Count |
| --- | ---: |
| docs | 49 |
| eval | 40 |
| ci | 35 |
| config | 33 |
| retrieval | 33 |
| security | 33 |
| agentRuntime | 30 |
| entrypoints | 30 |
| mcp | 19 |
| spec | 19 |
| instruction | 15 |
| container | 12 |


### Dependency Groups

| Signal | Count |
| --- | ---: |
| agentProtocols | 12 |
| developerSurface | 9 |
| llmProviders | 4 |
| webRuntime | 4 |
| modelRuntime | 3 |
| observability | 2 |
| vectorStores | 2 |
| browserAutomation | 1 |


### Command Surface

| Signal | Count |
| --- | ---: |
| build | 15 |
| test | 14 |
| quality | 12 |
| utility | 12 |
| serve-dev | 10 |
| entrypoint | 6 |
| container | 2 |


### Risk Categories

_No signals._


## Top Trend Repositories

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [nilbuild/developer-roadmap](https://github.com/nilbuild/developer-roadmap) | 개발 생산성/DevTools | 490 | 151 | 357571 | TypeScript | monorepo, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/nilbuild__developer-roadmap.md) / [report](../../../global-trending/repositories/nilbuild__developer-roadmap.md) / [source](../../../../sources/nilbuild__developer-roadmap) |
| [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) | 개발 생산성/DevTools | 487 | 166 | 23356 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/modelcontextprotocol__python-sdk.md) / [report](../../../global-trending/repositories/modelcontextprotocol__python-sdk.md) / [source](../../../../sources/modelcontextprotocol__python-sdk) |
| [awslabs/mcp](https://github.com/awslabs/mcp) | 개발 생산성/DevTools | 487 | 164 | 9289 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/awslabs__mcp.md) / [report](../../../global-trending/repositories/awslabs__mcp.md) / [source](../../../../sources/awslabs__mcp) |
| [zed-industries/zed](https://github.com/zed-industries/zed) | 개발 생산성/DevTools | 486 | 151 | 85449 | Rust | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/zed-industries__zed.md) / [report](../../../global-trending/repositories/zed-industries__zed.md) / [source](../../../../sources/zed-industries__zed) |
| [modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) | 개발 생산성/DevTools | 483 | 164 | 12685 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/8/modelcontextprotocol__typescript-sdk.md) / [report](../../../global-trending/repositories/modelcontextprotocol__typescript-sdk.md) / [source](../../../../sources/modelcontextprotocol__typescript-sdk) |
| [modelcontextprotocol/csharp-sdk](https://github.com/modelcontextprotocol/csharp-sdk) | 개발 생산성/DevTools | 478 | 183 | 4335 | C# | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/modelcontextprotocol__csharp-sdk.md) / [report](../../../global-trending/repositories/modelcontextprotocol__csharp-sdk.md) / [source](../../../../sources/modelcontextprotocol__csharp-sdk) |
| [modelcontextprotocol/go-sdk](https://github.com/modelcontextprotocol/go-sdk) | 개발 생산성/DevTools | 455 | 157 | 4698 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/modelcontextprotocol__go-sdk.md) / [report](../../../global-trending/repositories/modelcontextprotocol__go-sdk.md) / [source](../../../../sources/modelcontextprotocol__go-sdk) |
| [av/harbor](https://github.com/av/harbor) | 개발 생산성/DevTools | 450 | 144 | 3084 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/av__harbor.md) / [report](../../../global-trending/repositories/av__harbor.md) / [source](../../../../sources/av__harbor) |
| [modelcontextprotocol/rust-sdk](https://github.com/modelcontextprotocol/rust-sdk) | 개발 생산성/DevTools | 445 | 156 | 3526 | Rust | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/modelcontextprotocol__rust-sdk.md) / [report](../../../global-trending/repositories/modelcontextprotocol__rust-sdk.md) / [source](../../../../sources/modelcontextprotocol__rust-sdk) |
| [ChiR24/Unreal_mcp](https://github.com/ChiR24/Unreal_mcp) | 개발 생산성/DevTools | 434 | 140 | 729 | C++ | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/f/ChiR24__Unreal_mcp.md) / [report](../../../global-trending/repositories/ChiR24__Unreal_mcp.md) / [source](../../../../sources/ChiR24__Unreal_mcp) |
| [genomoncology/biomcp](https://github.com/genomoncology/biomcp) | 개발 생산성/DevTools | 421 | 137 | 527 | Rust | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/d/genomoncology__biomcp.md) / [report](../../../global-trending/repositories/genomoncology__biomcp.md) / [source](../../../../sources/genomoncology__biomcp) |
| [modelcontextprotocol/kotlin-sdk](https://github.com/modelcontextprotocol/kotlin-sdk) | 개발 생산성/DevTools | 417 | 146 | 1390 | Kotlin | api/server, agent-runtime, mcp/protocol, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/modelcontextprotocol__kotlin-sdk.md) / [report](../../../global-trending/repositories/modelcontextprotocol__kotlin-sdk.md) / [source](../../../../sources/modelcontextprotocol__kotlin-sdk) |
| [modelcontextprotocol/quickstart-resources](https://github.com/modelcontextprotocol/quickstart-resources) | 개발 생산성/DevTools | 404 | 147 | 1119 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/modelcontextprotocol__quickstart-resources.md) / [report](../../../global-trending/repositories/modelcontextprotocol__quickstart-resources.md) / [source](../../../../sources/modelcontextprotocol__quickstart-resources) |
| [modelcontextprotocol/ruby-sdk](https://github.com/modelcontextprotocol/ruby-sdk) | 개발 생산성/DevTools | 404 | 141 | 852 | Ruby | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/modelcontextprotocol__ruby-sdk.md) / [report](../../../global-trending/repositories/modelcontextprotocol__ruby-sdk.md) / [source](../../../../sources/modelcontextprotocol__ruby-sdk) |
| [speakeasy-api/speakeasy](https://github.com/speakeasy-api/speakeasy) | 개발 생산성/DevTools | 404 | 133 | 419 | JavaScript | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/speakeasy-api__speakeasy.md) / [report](../../../global-trending/repositories/speakeasy-api__speakeasy.md) / [source](../../../../sources/speakeasy-api__speakeasy) |
| [line/line-bot-sdk-python](https://github.com/line/line-bot-sdk-python) | 개발 생산성/DevTools | 392 | 123 | 2117 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/line__line-bot-sdk-python.md) / [report](../../../korea-trending/repositories/line__line-bot-sdk-python.md) / [source](../../../../sources/line__line-bot-sdk-python) |
| [WordPress/mcp-adapter](https://github.com/WordPress/mcp-adapter) | 개발 생산성/DevTools | 388 | 145 | 1292 | PHP | agent-runtime, mcp/protocol, spec-artifacts, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/WordPress__mcp-adapter.md) / [report](../../../global-trending/repositories/WordPress__mcp-adapter.md) / [source](../../../../sources/WordPress__mcp-adapter) |
| [line/line-bot-sdk-nodejs](https://github.com/line/line-bot-sdk-nodejs) | 개발 생산성/DevTools | 375 | 122 | 1067 | TypeScript | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/line__line-bot-sdk-nodejs.md) / [report](../../../korea-trending/repositories/line__line-bot-sdk-nodejs.md) / [source](../../../../sources/line__line-bot-sdk-nodejs) |
| [line/line-bot-sdk-go](https://github.com/line/line-bot-sdk-go) | 개발 생산성/DevTools | 361 | 120 | 951 | Go | cli-first, api/server, agent-runtime, tests-evals, security-policy | cli-first, api/server, agent-runtime, tests-evals | none | [source deep dive](../../../source-deep-dives/repositories/b/line__line-bot-sdk-go.md) / [report](../../../korea-trending/repositories/line__line-bot-sdk-go.md) / [source](../../../../sources/line__line-bot-sdk-go) |
| [theJayTea/WritingTools](https://github.com/theJayTea/WritingTools) | 개발 생산성/DevTools | 323 | 134 | 2307 | Swift | cli-first, spec-artifacts | cli-first, spec-artifacts | test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/theJayTea__WritingTools.md) / [report](../../../global-trending/repositories/theJayTea__WritingTools.md) / [source](../../../../sources/theJayTea__WritingTools) |


## Top Repository Comparison

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [nilbuild/developer-roadmap](https://github.com/nilbuild/developer-roadmap) | 개발 생산성/DevTools | 490 | 151 | 357571 | TypeScript | monorepo, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/nilbuild__developer-roadmap.md) / [report](../../../global-trending/repositories/nilbuild__developer-roadmap.md) / [source](../../../../sources/nilbuild__developer-roadmap) |
| [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) | 개발 생산성/DevTools | 487 | 166 | 23356 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/modelcontextprotocol__python-sdk.md) / [report](../../../global-trending/repositories/modelcontextprotocol__python-sdk.md) / [source](../../../../sources/modelcontextprotocol__python-sdk) |
| [awslabs/mcp](https://github.com/awslabs/mcp) | 개발 생산성/DevTools | 487 | 164 | 9289 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/awslabs__mcp.md) / [report](../../../global-trending/repositories/awslabs__mcp.md) / [source](../../../../sources/awslabs__mcp) |
| [zed-industries/zed](https://github.com/zed-industries/zed) | 개발 생산성/DevTools | 486 | 151 | 85449 | Rust | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/zed-industries__zed.md) / [report](../../../global-trending/repositories/zed-industries__zed.md) / [source](../../../../sources/zed-industries__zed) |
| [modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) | 개발 생산성/DevTools | 483 | 164 | 12685 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/8/modelcontextprotocol__typescript-sdk.md) / [report](../../../global-trending/repositories/modelcontextprotocol__typescript-sdk.md) / [source](../../../../sources/modelcontextprotocol__typescript-sdk) |
| [modelcontextprotocol/csharp-sdk](https://github.com/modelcontextprotocol/csharp-sdk) | 개발 생산성/DevTools | 478 | 183 | 4335 | C# | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/modelcontextprotocol__csharp-sdk.md) / [report](../../../global-trending/repositories/modelcontextprotocol__csharp-sdk.md) / [source](../../../../sources/modelcontextprotocol__csharp-sdk) |
| [modelcontextprotocol/go-sdk](https://github.com/modelcontextprotocol/go-sdk) | 개발 생산성/DevTools | 455 | 157 | 4698 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/modelcontextprotocol__go-sdk.md) / [report](../../../global-trending/repositories/modelcontextprotocol__go-sdk.md) / [source](../../../../sources/modelcontextprotocol__go-sdk) |
| [av/harbor](https://github.com/av/harbor) | 개발 생산성/DevTools | 450 | 144 | 3084 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/av__harbor.md) / [report](../../../global-trending/repositories/av__harbor.md) / [source](../../../../sources/av__harbor) |
| [modelcontextprotocol/rust-sdk](https://github.com/modelcontextprotocol/rust-sdk) | 개발 생산성/DevTools | 445 | 156 | 3526 | Rust | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/modelcontextprotocol__rust-sdk.md) / [report](../../../global-trending/repositories/modelcontextprotocol__rust-sdk.md) / [source](../../../../sources/modelcontextprotocol__rust-sdk) |
| [ChiR24/Unreal_mcp](https://github.com/ChiR24/Unreal_mcp) | 개발 생산성/DevTools | 434 | 140 | 729 | C++ | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/f/ChiR24__Unreal_mcp.md) / [report](../../../global-trending/repositories/ChiR24__Unreal_mcp.md) / [source](../../../../sources/ChiR24__Unreal_mcp) |
| [genomoncology/biomcp](https://github.com/genomoncology/biomcp) | 개발 생산성/DevTools | 421 | 137 | 527 | Rust | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/d/genomoncology__biomcp.md) / [report](../../../global-trending/repositories/genomoncology__biomcp.md) / [source](../../../../sources/genomoncology__biomcp) |
| [modelcontextprotocol/kotlin-sdk](https://github.com/modelcontextprotocol/kotlin-sdk) | 개발 생산성/DevTools | 417 | 146 | 1390 | Kotlin | api/server, agent-runtime, mcp/protocol, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/modelcontextprotocol__kotlin-sdk.md) / [report](../../../global-trending/repositories/modelcontextprotocol__kotlin-sdk.md) / [source](../../../../sources/modelcontextprotocol__kotlin-sdk) |
| [modelcontextprotocol/quickstart-resources](https://github.com/modelcontextprotocol/quickstart-resources) | 개발 생산성/DevTools | 404 | 147 | 1119 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/modelcontextprotocol__quickstart-resources.md) / [report](../../../global-trending/repositories/modelcontextprotocol__quickstart-resources.md) / [source](../../../../sources/modelcontextprotocol__quickstart-resources) |
| [modelcontextprotocol/ruby-sdk](https://github.com/modelcontextprotocol/ruby-sdk) | 개발 생산성/DevTools | 404 | 141 | 852 | Ruby | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/modelcontextprotocol__ruby-sdk.md) / [report](../../../global-trending/repositories/modelcontextprotocol__ruby-sdk.md) / [source](../../../../sources/modelcontextprotocol__ruby-sdk) |
| [speakeasy-api/speakeasy](https://github.com/speakeasy-api/speakeasy) | 개발 생산성/DevTools | 404 | 133 | 419 | JavaScript | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/speakeasy-api__speakeasy.md) / [report](../../../global-trending/repositories/speakeasy-api__speakeasy.md) / [source](../../../../sources/speakeasy-api__speakeasy) |
| [line/line-bot-sdk-python](https://github.com/line/line-bot-sdk-python) | 개발 생산성/DevTools | 392 | 123 | 2117 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/line__line-bot-sdk-python.md) / [report](../../../korea-trending/repositories/line__line-bot-sdk-python.md) / [source](../../../../sources/line__line-bot-sdk-python) |
| [WordPress/mcp-adapter](https://github.com/WordPress/mcp-adapter) | 개발 생산성/DevTools | 388 | 145 | 1292 | PHP | agent-runtime, mcp/protocol, spec-artifacts, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/WordPress__mcp-adapter.md) / [report](../../../global-trending/repositories/WordPress__mcp-adapter.md) / [source](../../../../sources/WordPress__mcp-adapter) |
| [line/line-bot-sdk-nodejs](https://github.com/line/line-bot-sdk-nodejs) | 개발 생산성/DevTools | 375 | 122 | 1067 | TypeScript | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/line__line-bot-sdk-nodejs.md) / [report](../../../korea-trending/repositories/line__line-bot-sdk-nodejs.md) / [source](../../../../sources/line__line-bot-sdk-nodejs) |
| [line/line-bot-sdk-go](https://github.com/line/line-bot-sdk-go) | 개발 생산성/DevTools | 361 | 120 | 951 | Go | cli-first, api/server, agent-runtime, tests-evals, security-policy | cli-first, api/server, agent-runtime, tests-evals | none | [source deep dive](../../../source-deep-dives/repositories/b/line__line-bot-sdk-go.md) / [report](../../../korea-trending/repositories/line__line-bot-sdk-go.md) / [source](../../../../sources/line__line-bot-sdk-go) |
| [line/line-bot-sdk-php](https://github.com/line/line-bot-sdk-php) | 개발 생산성/DevTools | 331 | 120 | 733 | PHP | agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/8/line__line-bot-sdk-php.md) / [report](../../../korea-trending/repositories/line__line-bot-sdk-php.md) / [source](../../../../sources/line__line-bot-sdk-php) |
| [line/line-bot-sdk-java](https://github.com/line/line-bot-sdk-java) | 개발 생산성/DevTools | 327 | 119 | 641 | Java | retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/line__line-bot-sdk-java.md) / [report](../../../korea-trending/repositories/line__line-bot-sdk-java.md) / [source](../../../../sources/line__line-bot-sdk-java) |
| [theJayTea/WritingTools](https://github.com/theJayTea/WritingTools) | 개발 생산성/DevTools | 323 | 134 | 2307 | Swift | cli-first, spec-artifacts | cli-first, spec-artifacts | test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/theJayTea__WritingTools.md) / [report](../../../global-trending/repositories/theJayTea__WritingTools.md) / [source](../../../../sources/theJayTea__WritingTools) |
| [line/line-bot-sdk-ruby](https://github.com/line/line-bot-sdk-ruby) | 개발 생산성/DevTools | 317 | 113 | 491 | Ruby | spec-artifacts, tests-evals, security-policy | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/7/line__line-bot-sdk-ruby.md) / [report](../../../korea-trending/repositories/line__line-bot-sdk-ruby.md) / [source](../../../../sources/line__line-bot-sdk-ruby) |
| [Samsung/netcoredbg](https://github.com/Samsung/netcoredbg) | 개발 생산성/DevTools | 309 | 102 | 1288 | C# | cli-first, agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/1/Samsung__netcoredbg.md) / [report](../../../korea-trending/repositories/Samsung__netcoredbg.md) / [source](../../../../sources/Samsung__netcoredbg) |
| [kakao/kakao_flutter_sdk](https://github.com/kakao/kakao_flutter_sdk) | 개발 생산성/DevTools | 295 | 101 | 195 | Dart | monorepo, agent-runtime, retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/kakao__kakao_flutter_sdk.md) / [report](../../../korea-trending/repositories/kakao__kakao_flutter_sdk.md) / [source](../../../../sources/kakao__kakao_flutter_sdk) |
| [line/line-sdk-ios-swift](https://github.com/line/line-sdk-ios-swift) | 개발 생산성/DevTools | 290 | 108 | 876 | Swift | retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/b/line__line-sdk-ios-swift.md) / [report](../../../korea-trending/repositories/line__line-sdk-ios-swift.md) / [source](../../../../sources/line__line-sdk-ios-swift) |
| [Samsung/Universum](https://github.com/Samsung/Universum) | 개발 생산성/DevTools | 278 | 83 | 20 | Python | cli-first, agent-runtime, retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/Samsung__Universum.md) / [report](../../../korea-trending/repositories/Samsung__Universum.md) / [source](../../../../sources/Samsung__Universum) |
| [line/flutter_line_sdk](https://github.com/line/flutter_line_sdk) | 개발 생산성/DevTools | 276 | 96 | 228 | Dart | api/server, agent-runtime, tests-evals, security-policy | api/server, agent-runtime, tests-evals, security-policy | none | [source deep dive](../../../source-deep-dives/repositories/d/line__flutter_line_sdk.md) / [report](../../../korea-trending/repositories/line__flutter_line_sdk.md) / [source](../../../../sources/line__flutter_line_sdk) |
| [daangn/metabridge](https://github.com/daangn/metabridge) | 개발 생산성/DevTools | 274 | 69 | 65 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/4/daangn__metabridge.md) / [report](../../../korea-trending/repositories/daangn__metabridge.md) / [source](../../../../sources/daangn__metabridge) |
| [toss/apps-in-toss-unity-sdk](https://github.com/toss/apps-in-toss-unity-sdk) | 개발 생산성/DevTools | 271 | 74 | 9 | C# | monorepo, cli-first, retrieval-memory, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/toss__apps-in-toss-unity-sdk.md) / [report](../../../korea-trending/repositories/toss__apps-in-toss-unity-sdk.md) / [source](../../../../sources/toss__apps-in-toss-unity-sdk) |


## Risk Watchlist

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [nilbuild/developer-roadmap](https://github.com/nilbuild/developer-roadmap) | 개발 생산성/DevTools | 490 | 151 | 357571 | TypeScript | monorepo, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/nilbuild__developer-roadmap.md) / [report](../../../global-trending/repositories/nilbuild__developer-roadmap.md) / [source](../../../../sources/nilbuild__developer-roadmap) |
| [modelcontextprotocol/csharp-sdk](https://github.com/modelcontextprotocol/csharp-sdk) | 개발 생산성/DevTools | 478 | 183 | 4335 | C# | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/modelcontextprotocol__csharp-sdk.md) / [report](../../../global-trending/repositories/modelcontextprotocol__csharp-sdk.md) / [source](../../../../sources/modelcontextprotocol__csharp-sdk) |
| [WordPress/mcp-adapter](https://github.com/WordPress/mcp-adapter) | 개발 생산성/DevTools | 388 | 145 | 1292 | PHP | agent-runtime, mcp/protocol, spec-artifacts, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/WordPress__mcp-adapter.md) / [report](../../../global-trending/repositories/WordPress__mcp-adapter.md) / [source](../../../../sources/WordPress__mcp-adapter) |
| [line/line-bot-sdk-nodejs](https://github.com/line/line-bot-sdk-nodejs) | 개발 생산성/DevTools | 375 | 122 | 1067 | TypeScript | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/line__line-bot-sdk-nodejs.md) / [report](../../../korea-trending/repositories/line__line-bot-sdk-nodejs.md) / [source](../../../../sources/line__line-bot-sdk-nodejs) |
| [line/line-bot-sdk-php](https://github.com/line/line-bot-sdk-php) | 개발 생산성/DevTools | 331 | 120 | 733 | PHP | agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/8/line__line-bot-sdk-php.md) / [report](../../../korea-trending/repositories/line__line-bot-sdk-php.md) / [source](../../../../sources/line__line-bot-sdk-php) |
| [line/line-bot-sdk-java](https://github.com/line/line-bot-sdk-java) | 개발 생산성/DevTools | 327 | 119 | 641 | Java | retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/line__line-bot-sdk-java.md) / [report](../../../korea-trending/repositories/line__line-bot-sdk-java.md) / [source](../../../../sources/line__line-bot-sdk-java) |
| [theJayTea/WritingTools](https://github.com/theJayTea/WritingTools) | 개발 생산성/DevTools | 323 | 134 | 2307 | Swift | cli-first, spec-artifacts | cli-first, spec-artifacts | test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/theJayTea__WritingTools.md) / [report](../../../global-trending/repositories/theJayTea__WritingTools.md) / [source](../../../../sources/theJayTea__WritingTools) |
| [line/line-bot-sdk-ruby](https://github.com/line/line-bot-sdk-ruby) | 개발 생산성/DevTools | 317 | 113 | 491 | Ruby | spec-artifacts, tests-evals, security-policy | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/7/line__line-bot-sdk-ruby.md) / [report](../../../korea-trending/repositories/line__line-bot-sdk-ruby.md) / [source](../../../../sources/line__line-bot-sdk-ruby) |
| [Samsung/netcoredbg](https://github.com/Samsung/netcoredbg) | 개발 생산성/DevTools | 309 | 102 | 1288 | C# | cli-first, agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/1/Samsung__netcoredbg.md) / [report](../../../korea-trending/repositories/Samsung__netcoredbg.md) / [source](../../../../sources/Samsung__netcoredbg) |
| [kakao/kakao_flutter_sdk](https://github.com/kakao/kakao_flutter_sdk) | 개발 생산성/DevTools | 295 | 101 | 195 | Dart | monorepo, agent-runtime, retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/kakao__kakao_flutter_sdk.md) / [report](../../../korea-trending/repositories/kakao__kakao_flutter_sdk.md) / [source](../../../../sources/kakao__kakao_flutter_sdk) |
| [kakao/kakao-ios-sdk](https://github.com/kakao/kakao-ios-sdk) | 개발 생산성/DevTools | 202 | 88 | 39 | Swift | security-policy | security-policy | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/8/kakao__kakao-ios-sdk.md) / [report](../../../korea-trending/repositories/kakao__kakao-ios-sdk.md) / [source](../../../../sources/kakao__kakao-ios-sdk) |
| [line/line-sdk-unity](https://github.com/line/line-sdk-unity) | 개발 생산성/DevTools | 198 | 80 | 125 | C# | tests-evals | tests-evals | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/6/line__line-sdk-unity.md) / [report](../../../korea-trending/repositories/line__line-sdk-unity.md) / [source](../../../../sources/line__line-sdk-unity) |
| [naver/naveridlogin-sdk-android](https://github.com/naver/naveridlogin-sdk-android) | 개발 생산성/DevTools | 193 | 85 | 124 | Kotlin | security-policy | security-policy | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/0/naver__naveridlogin-sdk-android.md) / [report](../../../korea-trending/repositories/naver__naveridlogin-sdk-android.md) / [source](../../../../sources/naver__naveridlogin-sdk-android) |
| [naver/nam-sdk-android](https://github.com/naver/nam-sdk-android) | 개발 생산성/DevTools | 193 | 74 | 16 | Java | security-policy | security-policy | entrypoint path not obvious, test/eval path not obvious | [source deep dive](../../../source-deep-dives/repositories/e/naver__nam-sdk-android.md) / [report](../../../korea-trending/repositories/naver__nam-sdk-android.md) / [source](../../../../sources/naver__nam-sdk-android) |
| [naver/d-day-labeler](https://github.com/naver/d-day-labeler) | 개발 생산성/DevTools | 182 | 69 | 48 | TypeScript | retrieval-memory | retrieval-memory | test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/5/naver__d-day-labeler.md) / [report](../../../korea-trending/repositories/naver__d-day-labeler.md) / [source](../../../../sources/naver__d-day-labeler) |
| [naver/nam-sdk-ios](https://github.com/naver/nam-sdk-ios) | 개발 생산성/DevTools | 179 | 71 | 6 | C++ | tests-evals | tests-evals | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/naver__nam-sdk-ios.md) / [report](../../../korea-trending/repositories/naver__nam-sdk-ios.md) / [source](../../../../sources/naver__nam-sdk-ios) |
| [naver/notify-pr-review](https://github.com/naver/notify-pr-review) | 개발 생산성/DevTools | 174 | 71 | 53 | JavaScript | retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/naver__notify-pr-review.md) / [report](../../../korea-trending/repositories/naver__notify-pr-review.md) / [source](../../../../sources/naver__notify-pr-review) |
| [naver/naveridlogin-sdk-ios](https://github.com/naver/naveridlogin-sdk-ios) | 개발 생산성/DevTools | 156 | 70 | 60 | Objective-C |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/5/naver__naveridlogin-sdk-ios.md) / [report](../../../korea-trending/repositories/naver__naveridlogin-sdk-ios.md) / [source](../../../../sources/naver__naveridlogin-sdk-ios) |
| [kakao/olive-cli](https://github.com/kakao/olive-cli) | 개발 생산성/DevTools | 149 | 78 | 26 | Shell |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/kakao__olive-cli.md) / [report](../../../korea-trending/repositories/kakao__olive-cli.md) / [source](../../../../sources/kakao__olive-cli) |
| [seoulstart/awesome-build-for-korea](https://github.com/seoulstart/awesome-build-for-korea) | 개발 생산성/DevTools | 120 | 76 | 0 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/d/seoulstart__awesome-build-for-korea.md) / [report](../../../korea-trending/repositories/seoulstart__awesome-build-for-korea.md) / [source](../../../../sources/seoulstart__awesome-build-for-korea) |
