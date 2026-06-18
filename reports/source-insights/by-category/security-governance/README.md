# Security, Governance, and Safety Source Insights

Generated: 2026-06-18T15:12:59.248Z

sandbox, permission, policy, auth, guardrail, secret handling

## 요약

- 조사 단위: 보안/거버넌스/안전 카테고리에 속한 10개 source-scanned 레포입니다.
- 포함 범위: trend-linked 9개, key source reference 68개, median source depth 81입니다.
- 탐색 방식: Category Insights를 먼저 보고, Top Repository Comparison의 source deep dive 링크를 따라 구현 근거를 확인합니다.

## 총평

보안/거버넌스/안전 카테고리는 10개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 90%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

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

- 보안/거버넌스/안전 카테고리는 10개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 90%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 eval/test harness (9), agent/tool runtime (6), retrieval/vector path (6)이고, 파일 근거 bucket은 docs (10), eval (9), ci (8), config (8) 순서로 강합니다.
- RAG, memory, vector/index 경로가 60%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 60%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 90%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.

## Trend and Source Metrics

| Field | Value |
| --- | --- |
| Repositories | 10 |
| Trend-linked repositories | 9 |
| Global / Korea trend count | 1 / 8 |
| Both global and Korea | 0 |
| Max / median trend score | 177 / 82 |
| Total / median stars | 6459 / 148 |
| Key source references | 68 |
| Median file count | 159 |

## Source Feature Distribution

### Dominant Features

| Signal | Count |
| --- | ---: |
| tests-evals | 10 |
| agent-runtime | 6 |
| retrieval-memory | 6 |
| spec-artifacts | 6 |
| security-policy | 5 |
| cli-first | 4 |
| container-deploy | 2 |
| model-runtime | 2 |
| monorepo | 2 |
| agent-instructions | 1 |
| mcp/protocol | 1 |
| observability | 1 |


### Architecture Patterns

| Signal | Count |
| --- | ---: |
| eval/test harness | 9 |
| agent/tool runtime | 6 |
| retrieval/vector path | 6 |
| spec/docs-driven | 6 |
| security/policy surface | 5 |
| cli-first | 4 |
| containerized deploy | 2 |
| monorepo/workspace | 2 |
| ui/extension surface | 1 |


### Evidence Bucket Coverage

| Signal | Count |
| --- | ---: |
| docs | 10 |
| eval | 9 |
| ci | 8 |
| config | 8 |
| agentRuntime | 6 |
| retrieval | 6 |
| spec | 6 |
| security | 5 |
| entrypoints | 4 |
| container | 2 |
| instruction | 1 |
| mcp | 1 |


### Dependency Groups

| Signal | Count |
| --- | ---: |
| developerSurface | 2 |
| modelRuntime | 2 |
| agentFrameworks | 1 |
| llmProviders | 1 |
| observability | 1 |
| vectorStores | 1 |
| webRuntime | 1 |


### Command Surface

| Signal | Count |
| --- | ---: |
| utility | 6 |
| test | 4 |
| build | 2 |
| quality | 2 |
| serve-dev | 1 |


### Risk Categories

_No signals._


## Top Trend Repositories

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [perplexityai/bumblebee](https://github.com/perplexityai/bumblebee) | 보안/거버넌스/안전 | 423 | 177 | 4485 | Go | cli-first, agent-runtime, mcp/protocol, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/8/perplexityai__bumblebee.md) / [report](../../../global-trending/repositories/perplexityai__bumblebee.md) / [source](../../../../sources/perplexityai__bumblebee) |
| [Samsung/CredSweeper](https://github.com/Samsung/CredSweeper) | 보안/거버넌스/안전 | 342 | 104 | 204 | Python | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/Samsung__CredSweeper.md) / [report](../../../korea-trending/repositories/Samsung__CredSweeper.md) / [source](../../../../sources/Samsung__CredSweeper) |
| [toss/use-funnel](https://github.com/toss/use-funnel) | 보안/거버넌스/안전 | 323 | 103 | 567 | TypeScript | monorepo, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/6/toss__use-funnel.md) / [report](../../../korea-trending/repositories/toss__use-funnel.md) / [source](../../../../sources/toss__use-funnel) |
| [line/line-fido2-server](https://github.com/line/line-fido2-server) | 보안/거버넌스/안전 | 299 | 105 | 580 | Java | retrieval-memory, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/d/line__line-fido2-server.md) / [report](../../../korea-trending/repositories/line__line-fido2-server.md) / [source](../../../../sources/line__line-fido2-server) |
| [daangn/graplix](https://github.com/daangn/graplix) | 보안/거버넌스/안전 | 287 | 84 | 92 | TypeScript | monorepo, cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/daangn__graplix.md) / [report](../../../korea-trending/repositories/daangn__graplix.md) / [source](../../../../sources/daangn__graplix) |
| [line/garr](https://github.com/line/garr) | 보안/거버넌스/안전 | 218 | 80 | 371 | Go | tests-evals | tests-evals | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/line__garr.md) / [report](../../../korea-trending/repositories/line__garr.md) / [source](../../../../sources/line__garr) |
| [naver/disco](https://github.com/naver/disco) | 보안/거버넌스/안전 | 211 | 72 | 75 | Python | agent-runtime, spec-artifacts, tests-evals, model-runtime | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/naver__disco.md) / [report](../../../korea-trending/repositories/naver__disco.md) / [source](../../../../sources/naver__disco) |
| [line/seed](https://github.com/line/seed) | 보안/거버넌스/안전 | 211 | 70 | 61 | Makefile | retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | scan truncated at 15000 files, entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/2/line__seed.md) / [report](../../../korea-trending/repositories/line__seed.md) / [source](../../../../sources/line__seed) |
| [line/webauthn-kotlin](https://github.com/line/webauthn-kotlin) | 보안/거버넌스/안전 | 174 | 69 | 24 | Kotlin | tests-evals | tests-evals | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/6/line__webauthn-kotlin.md) / [report](../../../korea-trending/repositories/line__webauthn-kotlin.md) / [source](../../../../sources/line__webauthn-kotlin) |


## Top Repository Comparison

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [perplexityai/bumblebee](https://github.com/perplexityai/bumblebee) | 보안/거버넌스/안전 | 423 | 177 | 4485 | Go | cli-first, agent-runtime, mcp/protocol, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/8/perplexityai__bumblebee.md) / [report](../../../global-trending/repositories/perplexityai__bumblebee.md) / [source](../../../../sources/perplexityai__bumblebee) |
| [Samsung/CredSweeper](https://github.com/Samsung/CredSweeper) | 보안/거버넌스/안전 | 342 | 104 | 204 | Python | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/Samsung__CredSweeper.md) / [report](../../../korea-trending/repositories/Samsung__CredSweeper.md) / [source](../../../../sources/Samsung__CredSweeper) |
| [toss/use-funnel](https://github.com/toss/use-funnel) | 보안/거버넌스/안전 | 323 | 103 | 567 | TypeScript | monorepo, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/6/toss__use-funnel.md) / [report](../../../korea-trending/repositories/toss__use-funnel.md) / [source](../../../../sources/toss__use-funnel) |
| [line/line-fido2-server](https://github.com/line/line-fido2-server) | 보안/거버넌스/안전 | 299 | 105 | 580 | Java | retrieval-memory, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/d/line__line-fido2-server.md) / [report](../../../korea-trending/repositories/line__line-fido2-server.md) / [source](../../../../sources/line__line-fido2-server) |
| [daangn/graplix](https://github.com/daangn/graplix) | 보안/거버넌스/안전 | 287 | 84 | 92 | TypeScript | monorepo, cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/daangn__graplix.md) / [report](../../../korea-trending/repositories/daangn__graplix.md) / [source](../../../../sources/daangn__graplix) |
| [line/garr](https://github.com/line/garr) | 보안/거버넌스/안전 | 218 | 80 | 371 | Go | tests-evals | tests-evals | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/line__garr.md) / [report](../../../korea-trending/repositories/line__garr.md) / [source](../../../../sources/line__garr) |
| [naver/disco](https://github.com/naver/disco) | 보안/거버넌스/안전 | 211 | 72 | 75 | Python | agent-runtime, spec-artifacts, tests-evals, model-runtime | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/naver__disco.md) / [report](../../../korea-trending/repositories/naver__disco.md) / [source](../../../../sources/naver__disco) |
| [line/seed](https://github.com/line/seed) | 보안/거버넌스/안전 | 211 | 70 | 61 | Makefile | retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | scan truncated at 15000 files, entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/2/line__seed.md) / [report](../../../korea-trending/repositories/line__seed.md) / [source](../../../../sources/line__seed) |
| [line/webauthn-kotlin](https://github.com/line/webauthn-kotlin) | 보안/거버넌스/안전 | 174 | 69 | 24 | Kotlin | tests-evals | tests-evals | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/6/line__webauthn-kotlin.md) / [report](../../../korea-trending/repositories/line__webauthn-kotlin.md) / [source](../../../../sources/line__webauthn-kotlin) |
| [guardrails-ai/guardrails](https://github.com/guardrails-ai/guardrails) | 보안/거버넌스/안전 | 168 | 0 | 0 | unknown | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/b/guardrails-ai__guardrails.md) / [report](../../../clone-structures/guardrails-ai__guardrails.md) / [source](../../../../sources/guardrails-ai__guardrails) |


## Risk Watchlist

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [line/line-fido2-server](https://github.com/line/line-fido2-server) | 보안/거버넌스/안전 | 299 | 105 | 580 | Java | retrieval-memory, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/d/line__line-fido2-server.md) / [report](../../../korea-trending/repositories/line__line-fido2-server.md) / [source](../../../../sources/line__line-fido2-server) |
| [line/garr](https://github.com/line/garr) | 보안/거버넌스/안전 | 218 | 80 | 371 | Go | tests-evals | tests-evals | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/line__garr.md) / [report](../../../korea-trending/repositories/line__garr.md) / [source](../../../../sources/line__garr) |
| [naver/disco](https://github.com/naver/disco) | 보안/거버넌스/안전 | 211 | 72 | 75 | Python | agent-runtime, spec-artifacts, tests-evals, model-runtime | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/naver__disco.md) / [report](../../../korea-trending/repositories/naver__disco.md) / [source](../../../../sources/naver__disco) |
| [line/seed](https://github.com/line/seed) | 보안/거버넌스/안전 | 211 | 70 | 61 | Makefile | retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | scan truncated at 15000 files, entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/2/line__seed.md) / [report](../../../korea-trending/repositories/line__seed.md) / [source](../../../../sources/line__seed) |
| [line/webauthn-kotlin](https://github.com/line/webauthn-kotlin) | 보안/거버넌스/안전 | 174 | 69 | 24 | Kotlin | tests-evals | tests-evals | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/6/line__webauthn-kotlin.md) / [report](../../../korea-trending/repositories/line__webauthn-kotlin.md) / [source](../../../../sources/line__webauthn-kotlin) |
| [guardrails-ai/guardrails](https://github.com/guardrails-ai/guardrails) | 보안/거버넌스/안전 | 168 | 0 | 0 | unknown | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/b/guardrails-ai__guardrails.md) / [report](../../../clone-structures/guardrails-ai__guardrails.md) / [source](../../../../sources/guardrails-ai__guardrails) |
