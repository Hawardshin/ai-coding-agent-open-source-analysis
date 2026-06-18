# 데이터/벡터 플랫폼 소스 인사이트

생성 시각: 2026-06-18T15:31:47.340Z

저장소, index, embedding/vector 경로, query engine, persistence

## 요약

- 조사 단위: 데이터/벡터 플랫폼 카테고리에 속한 7개 source-scanned 레포입니다.
- 포함 범위: trend-linked 5개, key source reference 81개, median source depth 118입니다.
- 탐색 방식: 카테고리 인사이트를 먼저 보고, 상위 레포 비교의 소스 딥다이브 링크를 따라 구현 근거를 확인합니다.

## 총평

데이터/벡터 플랫폼 카테고리는 7개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 71%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

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

- 데이터/벡터 플랫폼 카테고리는 7개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 71%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 eval/test harness (7), retrieval/vector path (7), cli-first (6)이고, 파일 근거 bucket은 config (7), docs (7), eval (7), retrieval (7) 순서로 강합니다.
- RAG, memory, vector/index 경로가 100%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 86%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 100%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- container/deploy 경로가 71%에서 확인됩니다. 로컬 데모형보다 운영 배포형 레포 비중이 높습니다.
- AGENTS/CLAUDE/Codex/Cursor류 instruction 파일이 29%에서 보여 agent-native 개발 방식이 이미 레포 구조에 들어와 있습니다.

## 트렌드/소스 지표

| 항목 | 값 |
| --- | --- |
| 레포 수 | 7 |
| 트렌드 연결 레포 | 5 |
| 글로벌 / 한국 트렌드 수 | 3 / 2 |
| 글로벌/한국 동시 포착 | 0 |
| 최대 / 중앙 트렌드 점수 | 209 / 101 |
| 전체 / 중앙 stars | 79015 / 220 |
| 핵심 소스 참조 | 81 |
| 중앙 파일 수 | 1294 |

## 소스 feature 분포

### 주요 feature

| 신호 | 수 |
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


### 구조 패턴

| 신호 | 수 |
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


### 근거 bucket coverage

| 신호 | 수 |
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


### 의존성 그룹

| 신호 | 수 |
| --- | ---: |
| vectorStores | 3 |
| observability | 2 |
| webRuntime | 2 |
| agentProtocols | 1 |
| developerSurface | 1 |


### 명령 표면

| 신호 | 수 |
| --- | ---: |
| utility | 5 |
| quality | 4 |
| build | 3 |
| test | 2 |
| container | 1 |
| serve-dev | 1 |


### 위험 카테고리

_감지된 신호가 없습니다._


## 상위 트렌드 레포

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 데이터/벡터 플랫폼 | 552 | 209 | 44821 | Go | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/milvus-io__milvus.md) / [보고서](../../../global-trending/repositories/milvus-io__milvus.md) / [소스](../../../../sources/milvus-io__milvus) |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 데이터/벡터 플랫폼 | 520 | 193 | 32410 | Rust | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, web-runtime, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/qdrant__qdrant.md) / [보고서](../../../global-trending/repositories/qdrant__qdrant.md) / [소스](../../../../sources/qdrant__qdrant) |
| [Ontos-AI/knowhere](https://github.com/Ontos-AI/knowhere) | 데이터/벡터 플랫폼 | 454 | 155 | 1502 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/Ontos-AI__knowhere.md) / [보고서](../../../global-trending/repositories/Ontos-AI__knowhere.md) / [소스](../../../../sources/Ontos-AI__knowhere) |
| [kakao/actionbase](https://github.com/kakao/actionbase) | 데이터/벡터 플랫폼 | 350 | 101 | 220 | Kotlin | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/kakao__actionbase.md) / [보고서](../../../korea-trending/repositories/kakao__actionbase.md) / [소스](../../../../sources/kakao__actionbase) |
| [Samsung/CAS](https://github.com/Samsung/CAS) | 데이터/벡터 플랫폼 | 288 | 73 | 62 | C++ | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/Samsung__CAS.md) / [보고서](../../../korea-trending/repositories/Samsung__CAS.md) / [소스](../../../../sources/Samsung__CAS) |


## 상위 레포 비교

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 데이터/벡터 플랫폼 | 552 | 209 | 44821 | Go | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/milvus-io__milvus.md) / [보고서](../../../global-trending/repositories/milvus-io__milvus.md) / [소스](../../../../sources/milvus-io__milvus) |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 데이터/벡터 플랫폼 | 520 | 193 | 32410 | Rust | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, web-runtime, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/qdrant__qdrant.md) / [보고서](../../../global-trending/repositories/qdrant__qdrant.md) / [소스](../../../../sources/qdrant__qdrant) |
| [Ontos-AI/knowhere](https://github.com/Ontos-AI/knowhere) | 데이터/벡터 플랫폼 | 454 | 155 | 1502 | Python | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/Ontos-AI__knowhere.md) / [보고서](../../../global-trending/repositories/Ontos-AI__knowhere.md) / [소스](../../../../sources/Ontos-AI__knowhere) |
| [kakao/actionbase](https://github.com/kakao/actionbase) | 데이터/벡터 플랫폼 | 350 | 101 | 220 | Kotlin | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/kakao__actionbase.md) / [보고서](../../../korea-trending/repositories/kakao__actionbase.md) / [소스](../../../../sources/kakao__actionbase) |
| [Samsung/CAS](https://github.com/Samsung/CAS) | 데이터/벡터 플랫폼 | 288 | 73 | 62 | C++ | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/Samsung__CAS.md) / [보고서](../../../korea-trending/repositories/Samsung__CAS.md) / [소스](../../../../sources/Samsung__CAS) |
| [timescale/pgvectorscale](https://github.com/timescale/pgvectorscale) | 데이터/벡터 플랫폼 | 120 | 0 | 0 | unknown | cli-first, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/timescale__pgvectorscale.md) / [보고서](../../../clone-structures/timescale__pgvectorscale.md) / [소스](../../../../sources/timescale__pgvectorscale) |
| [pgvector/pgvector](https://github.com/pgvector/pgvector) | 데이터/벡터 플랫폼 | 97 | 0 | 0 | unknown | retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/e/pgvector__pgvector.md) / [보고서](../../../clone-structures/pgvector__pgvector.md) / [소스](../../../../sources/pgvector__pgvector) |


## 위험 신호 Watchlist

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [Samsung/CAS](https://github.com/Samsung/CAS) | 데이터/벡터 플랫폼 | 288 | 73 | 62 | C++ | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/Samsung__CAS.md) / [보고서](../../../korea-trending/repositories/Samsung__CAS.md) / [소스](../../../../sources/Samsung__CAS) |
| [pgvector/pgvector](https://github.com/pgvector/pgvector) | 데이터/벡터 플랫폼 | 97 | 0 | 0 | unknown | retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/e/pgvector__pgvector.md) / [보고서](../../../clone-structures/pgvector__pgvector.md) / [소스](../../../../sources/pgvector__pgvector) |
