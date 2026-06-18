# Data and Vector Platforms Source Insights

Generated: 2026-06-18T15:12:59.248Z

storage, index, embedding/vector path, query engine, persistence

## 요약

- 조사 단위: 데이터/벡터 플랫폼 카테고리에 속한 7개 source-scanned 레포입니다.
- 포함 범위: trend-linked 5개, key source reference 81개, median source depth 124입니다.
- 탐색 방식: Category Insights를 먼저 보고, Top Repository Comparison의 source deep dive 링크를 따라 구현 근거를 확인합니다.

## 총평

데이터/벡터 플랫폼 카테고리는 7개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 71%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

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

- 데이터/벡터 플랫폼 카테고리는 7개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 71%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 eval/test harness (7), retrieval/vector path (7), cli-first (6)이고, 파일 근거 bucket은 config (7), docs (7), eval (7), retrieval (7) 순서로 강합니다.
- RAG, memory, vector/index 경로가 100%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 86%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 100%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- container/deploy 경로가 71%에서 확인됩니다. 로컬 데모형보다 운영 배포형 레포 비중이 높습니다.
- AGENTS/CLAUDE/Codex/Cursor류 instruction 파일이 29%에서 보여 agent-native 개발 방식이 이미 레포 구조에 들어와 있습니다.

## Trend and Source Metrics

| Field | Value |
| --- | --- |
| Repositories | 7 |
| Trend-linked repositories | 5 |
| Global / Korea trend count | 3 / 2 |
| Both global and Korea | 0 |
| Max / median trend score | 209 / 101 |
| Total / median stars | 79015 / 220 |
| Key source references | 81 |
| Median file count | 1294 |

## Source Feature Distribution

### Dominant Features

| Signal | Count |
| --- | ---: |
| retrieval-memory | 7 |
| tests-evals | 7 |
| cli-first | 6 |
| spec-artifacts | 6 |
| agent-runtime | 5 |
| container-deploy | 5 |
| api/server | 4 |
| security-policy | 4 |
| mcp/protocol | 2 |
| monorepo | 2 |
| observability | 2 |
| web-runtime | 2 |


### Architecture Patterns

| Signal | Count |
| --- | ---: |
| eval/test harness | 7 |
| retrieval/vector path | 7 |
| cli-first | 6 |
| spec/docs-driven | 6 |
| agent/tool runtime | 5 |
| api/server | 4 |
| containerized deploy | 4 |
| security/policy surface | 4 |
| monorepo/workspace | 2 |
| ui/extension surface | 1 |


### Evidence Bucket Coverage

| Signal | Count |
| --- | ---: |
| config | 7 |
| docs | 7 |
| eval | 7 |
| retrieval | 7 |
| ci | 6 |
| entrypoints | 6 |
| spec | 6 |
| agentRuntime | 5 |
| container | 5 |
| security | 4 |
| instruction | 2 |
| mcp | 2 |


### Dependency Groups

| Signal | Count |
| --- | ---: |
| vectorStores | 3 |
| observability | 2 |
| webRuntime | 2 |
| agentProtocols | 1 |
| developerSurface | 1 |


### Command Surface

| Signal | Count |
| --- | ---: |
| utility | 5 |
| quality | 4 |
| build | 3 |
| test | 2 |
| container | 1 |
| serve-dev | 1 |


### Risk Categories

_No signals._


## Top Trend Repositories

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 데이터/벡터 플랫폼 | 564 | 209 | 44821 | Go | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/6/milvus-io__milvus.md) / [report](../../../global-trending/repositories/milvus-io__milvus.md) / [source](../../../../sources/milvus-io__milvus) |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 데이터/벡터 플랫폼 | 532 | 193 | 32410 | Rust | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, web-runtime, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/qdrant__qdrant.md) / [report](../../../global-trending/repositories/qdrant__qdrant.md) / [source](../../../../sources/qdrant__qdrant) |
| [Ontos-AI/knowhere](https://github.com/Ontos-AI/knowhere) | 데이터/벡터 플랫폼 | 460 | 155 | 1502 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/Ontos-AI__knowhere.md) / [report](../../../global-trending/repositories/Ontos-AI__knowhere.md) / [source](../../../../sources/Ontos-AI__knowhere) |
| [kakao/actionbase](https://github.com/kakao/actionbase) | 데이터/벡터 플랫폼 | 356 | 101 | 220 | Kotlin | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/c/kakao__actionbase.md) / [report](../../../korea-trending/repositories/kakao__actionbase.md) / [source](../../../../sources/kakao__actionbase) |
| [Samsung/CAS](https://github.com/Samsung/CAS) | 데이터/벡터 플랫폼 | 294 | 73 | 62 | C++ | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/Samsung__CAS.md) / [report](../../../korea-trending/repositories/Samsung__CAS.md) / [source](../../../../sources/Samsung__CAS) |


## Top Repository Comparison

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 데이터/벡터 플랫폼 | 564 | 209 | 44821 | Go | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/6/milvus-io__milvus.md) / [report](../../../global-trending/repositories/milvus-io__milvus.md) / [source](../../../../sources/milvus-io__milvus) |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 데이터/벡터 플랫폼 | 532 | 193 | 32410 | Rust | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, web-runtime, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/qdrant__qdrant.md) / [report](../../../global-trending/repositories/qdrant__qdrant.md) / [source](../../../../sources/qdrant__qdrant) |
| [Ontos-AI/knowhere](https://github.com/Ontos-AI/knowhere) | 데이터/벡터 플랫폼 | 460 | 155 | 1502 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/Ontos-AI__knowhere.md) / [report](../../../global-trending/repositories/Ontos-AI__knowhere.md) / [source](../../../../sources/Ontos-AI__knowhere) |
| [kakao/actionbase](https://github.com/kakao/actionbase) | 데이터/벡터 플랫폼 | 356 | 101 | 220 | Kotlin | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/c/kakao__actionbase.md) / [report](../../../korea-trending/repositories/kakao__actionbase.md) / [source](../../../../sources/kakao__actionbase) |
| [Samsung/CAS](https://github.com/Samsung/CAS) | 데이터/벡터 플랫폼 | 294 | 73 | 62 | C++ | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/Samsung__CAS.md) / [report](../../../korea-trending/repositories/Samsung__CAS.md) / [source](../../../../sources/Samsung__CAS) |
| [timescale/pgvectorscale](https://github.com/timescale/pgvectorscale) | 데이터/벡터 플랫폼 | 132 | 0 | 0 | unknown | cli-first, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/1/timescale__pgvectorscale.md) / [report](../../../clone-structures/timescale__pgvectorscale.md) / [source](../../../../sources/timescale__pgvectorscale) |
| [pgvector/pgvector](https://github.com/pgvector/pgvector) | 데이터/벡터 플랫폼 | 109 | 0 | 0 | unknown | retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/e/pgvector__pgvector.md) / [report](../../../clone-structures/pgvector__pgvector.md) / [source](../../../../sources/pgvector__pgvector) |


## Risk Watchlist

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [Samsung/CAS](https://github.com/Samsung/CAS) | 데이터/벡터 플랫폼 | 294 | 73 | 62 | C++ | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/Samsung__CAS.md) / [report](../../../korea-trending/repositories/Samsung__CAS.md) / [source](../../../../sources/Samsung__CAS) |
| [pgvector/pgvector](https://github.com/pgvector/pgvector) | 데이터/벡터 플랫폼 | 109 | 0 | 0 | unknown | retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/e/pgvector__pgvector.md) / [report](../../../clone-structures/pgvector__pgvector.md) / [source](../../../../sources/pgvector__pgvector) |
