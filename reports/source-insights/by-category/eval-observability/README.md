# Evals, Observability, and Quality Source Insights

Generated: 2026-06-18T15:12:59.248Z

eval suites, benchmark harness, tracing, observability, quality gates

## 요약

- 조사 단위: 평가/관측/품질 카테고리에 속한 27개 source-scanned 레포입니다.
- 포함 범위: trend-linked 20개, key source reference 255개, median source depth 104입니다.
- 탐색 방식: Category Insights를 먼저 보고, Top Repository Comparison의 source deep dive 링크를 따라 구현 근거를 확인합니다.

## 총평

평가/관측/품질 카테고리는 27개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 74%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

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

- 평가/관측/품질 카테고리는 27개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 74%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 eval/test harness (27), retrieval/vector path (20), spec/docs-driven (20)이고, 파일 근거 bucket은 docs (27), eval (27), config (24), retrieval (20) 순서로 강합니다.
- MCP/tool protocol 표면이 37%에서 보입니다. 단순 라이브러리보다 agent tool 연결/registry를 비교해야 합니다.
- RAG, memory, vector/index 경로가 74%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 74%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 100%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- container/deploy 경로가 37%에서 확인됩니다. 로컬 데모형보다 운영 배포형 레포 비중이 높습니다.
- AGENTS/CLAUDE/Codex/Cursor류 instruction 파일이 44%에서 보여 agent-native 개발 방식이 이미 레포 구조에 들어와 있습니다.

## Trend and Source Metrics

| Field | Value |
| --- | --- |
| Repositories | 27 |
| Trend-linked repositories | 20 |
| Global / Korea trend count | 6 / 14 |
| Both global and Korea | 0 |
| Max / median trend score | 160 / 85 |
| Total / median stars | 15875 / 151 |
| Key source references | 255 |
| Median file count | 524 |

## Source Feature Distribution

### Dominant Features

| Signal | Count |
| --- | ---: |
| tests-evals | 27 |
| retrieval-memory | 20 |
| spec-artifacts | 20 |
| agent-runtime | 19 |
| security-policy | 17 |
| api/server | 14 |
| cli-first | 14 |
| agent-instructions | 12 |
| container-deploy | 10 |
| mcp/protocol | 10 |
| model-runtime | 3 |
| monorepo | 2 |


### Architecture Patterns

| Signal | Count |
| --- | ---: |
| eval/test harness | 27 |
| retrieval/vector path | 20 |
| spec/docs-driven | 20 |
| agent/tool runtime | 19 |
| security/policy surface | 17 |
| api/server | 14 |
| cli-first | 14 |
| containerized deploy | 10 |
| monorepo/workspace | 2 |


### Evidence Bucket Coverage

| Signal | Count |
| --- | ---: |
| docs | 27 |
| eval | 27 |
| config | 24 |
| retrieval | 20 |
| spec | 20 |
| agentRuntime | 19 |
| ci | 18 |
| security | 17 |
| entrypoints | 15 |
| instruction | 12 |
| container | 10 |
| mcp | 10 |


### Dependency Groups

| Signal | Count |
| --- | ---: |
| llmProviders | 8 |
| agentProtocols | 6 |
| modelRuntime | 5 |
| observability | 5 |
| webRuntime | 4 |
| agentFrameworks | 3 |
| developerSurface | 3 |
| vectorStores | 3 |


### Command Surface

| Signal | Count |
| --- | ---: |
| utility | 11 |
| test | 7 |
| build | 6 |
| quality | 6 |
| serve-dev | 4 |
| container | 1 |


### Risk Categories

_No signals._


## Top Trend Repositories

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [mock-server/mockserver-monorepo](https://github.com/mock-server/mockserver-monorepo) | 평가/관측/품질 | 476 | 160 | 4893 | Java | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/mock-server__mockserver-monorepo.md) / [report](../../../global-trending/repositories/mock-server__mockserver-monorepo.md) / [source](../../../../sources/mock-server__mockserver-monorepo) |
| [MCPJam/inspector](https://github.com/MCPJam/inspector) | 평가/관측/품질 | 454 | 149 | 2016 | TypeScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/8/MCPJam__inspector.md) / [report](../../../global-trending/repositories/MCPJam__inspector.md) / [source](../../../../sources/MCPJam__inspector) |
| [getsentry/sentry-mcp](https://github.com/getsentry/sentry-mcp) | 평가/관측/품질 | 429 | 140 | 730 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/getsentry__sentry-mcp.md) / [report](../../../global-trending/repositories/getsentry__sentry-mcp.md) / [source](../../../../sources/getsentry__sentry-mcp) |
| [responsibleai/ASSERT](https://github.com/responsibleai/ASSERT) | 평가/관측/품질 | 412 | 135 | 151 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/d/responsibleai__ASSERT.md) / [report](../../../global-trending/repositories/responsibleai__ASSERT.md) / [source](../../../../sources/responsibleai__ASSERT) |
| [hexo-ai/sia](https://github.com/hexo-ai/sia) | 평가/관측/품질 | 405 | 145 | 1765 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/hexo-ai__sia.md) / [report](../../../global-trending/repositories/hexo-ai__sia.md) / [source](../../../../sources/hexo-ai__sia) |
| [line/promgen](https://github.com/line/promgen) | 평가/관측/품질 | 381 | 120 | 1124 | JavaScript | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/line__promgen.md) / [report](../../../korea-trending/repositories/line__promgen.md) / [source](../../../../sources/line__promgen) |
| [microsoft/RAMPART](https://github.com/microsoft/RAMPART) | 평가/관측/품질 | 380 | 139 | 360 | Python | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/microsoft__RAMPART.md) / [report](../../../global-trending/repositories/microsoft__RAMPART.md) / [source](../../../../sources/microsoft__RAMPART) |
| [toss/frontend-fundamentals](https://github.com/toss/frontend-fundamentals) | 평가/관측/품질 | 376 | 107 | 1964 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/toss__frontend-fundamentals.md) / [report](../../../korea-trending/repositories/toss__frontend-fundamentals.md) / [source](../../../../sources/toss__frontend-fundamentals) |
| [naver/fixture-monkey](https://github.com/naver/fixture-monkey) | 평가/관측/품질 | 344 | 112 | 696 | Java | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/e/naver__fixture-monkey.md) / [report](../../../korea-trending/repositories/naver__fixture-monkey.md) / [source](../../../../sources/naver__fixture-monkey) |
| [naver/lispe](https://github.com/naver/lispe) | 평가/관측/품질 | 333 | 100 | 594 | C | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/naver__lispe.md) / [report](../../../korea-trending/repositories/naver__lispe.md) / [source](../../../../sources/naver__lispe) |
| [Samsung/qaboard](https://github.com/Samsung/qaboard) | 평가/관측/품질 | 288 | 77 | 55 | JavaScript | cli-first, api/server, retrieval-memory, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/6/Samsung__qaboard.md) / [report](../../../korea-trending/repositories/Samsung__qaboard.md) / [source](../../../../sources/Samsung__qaboard) |
| [Samsung/cotopaxi](https://github.com/Samsung/cotopaxi) | 평가/관측/품질 | 265 | 85 | 362 | Python | agent-runtime, spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/2/Samsung__cotopaxi.md) / [report](../../../korea-trending/repositories/Samsung__cotopaxi.md) / [source](../../../../sources/Samsung__cotopaxi) |
| [Samsung/ADBI](https://github.com/Samsung/ADBI) | 평가/관측/품질 | 249 | 85 | 317 | C | spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/d/Samsung__ADBI.md) / [report](../../../korea-trending/repositories/Samsung__ADBI.md) / [source](../../../../sources/Samsung__ADBI) |
| [line/liff-mock](https://github.com/line/liff-mock) | 평가/관측/품질 | 244 | 69 | 45 | TypeScript | retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/line__liff-mock.md) / [report](../../../korea-trending/repositories/line__liff-mock.md) / [source](../../../../sources/line__liff-mock) |
| [lumatic2/korean-tax-accounting-ax-benchmark](https://github.com/lumatic2/korean-tax-accounting-ax-benchmark) | 평가/관측/품질 | 233 | 90 | 0 | Python | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/4/lumatic2__korean-tax-accounting-ax-benchmark.md) / [report](../../../korea-trending/repositories/lumatic2__korean-tax-accounting-ax-benchmark.md) / [source](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark) |
| [kakaobrain/kor-nlu-datasets](https://github.com/kakaobrain/kor-nlu-datasets) | 평가/관측/품질 | 227 | 107 | 312 | unknown | tests-evals | tests-evals | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/kakaobrain__kor-nlu-datasets.md) / [report](../../../korea-trending/repositories/kakaobrain__kor-nlu-datasets.md) / [source](../../../../sources/kakaobrain__kor-nlu-datasets) |
| [kakaobrain/g2pm](https://github.com/kakaobrain/g2pm) | 평가/관측/품질 | 199 | 85 | 365 | Python | tests-evals | tests-evals | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/2/kakaobrain__g2pm.md) / [report](../../../korea-trending/repositories/kakaobrain__g2pm.md) / [source](../../../../sources/kakaobrain__g2pm) |
| [cykim05/heard](https://github.com/cykim05/heard) | 평가/관측/품질 | 187 | 74 | 0 | Python | agent-runtime, spec-artifacts, tests-evals, model-runtime | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/cykim05__heard.md) / [report](../../../korea-trending/repositories/cykim05__heard.md) / [source](../../../../sources/cykim05__heard) |
| [Samsung/360tools](https://github.com/Samsung/360tools) | 평가/관측/품질 | 178 | 75 | 117 | C | tests-evals | tests-evals | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/Samsung__360tools.md) / [report](../../../korea-trending/repositories/Samsung__360tools.md) / [source](../../../../sources/Samsung__360tools) |
| [naver-ai/MM-JudgeBias](https://github.com/naver-ai/MM-JudgeBias) | 평가/관측/품질 | 175 | 72 | 9 | Python | spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/7/naver-ai__MM-JudgeBias.md) / [report](../../../korea-trending/repositories/naver-ai__MM-JudgeBias.md) / [source](../../../../sources/naver-ai__MM-JudgeBias) |


## Top Repository Comparison

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [mock-server/mockserver-monorepo](https://github.com/mock-server/mockserver-monorepo) | 평가/관측/품질 | 476 | 160 | 4893 | Java | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/4/mock-server__mockserver-monorepo.md) / [report](../../../global-trending/repositories/mock-server__mockserver-monorepo.md) / [source](../../../../sources/mock-server__mockserver-monorepo) |
| [MCPJam/inspector](https://github.com/MCPJam/inspector) | 평가/관측/품질 | 454 | 149 | 2016 | TypeScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/8/MCPJam__inspector.md) / [report](../../../global-trending/repositories/MCPJam__inspector.md) / [source](../../../../sources/MCPJam__inspector) |
| [getsentry/sentry-mcp](https://github.com/getsentry/sentry-mcp) | 평가/관측/품질 | 429 | 140 | 730 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/getsentry__sentry-mcp.md) / [report](../../../global-trending/repositories/getsentry__sentry-mcp.md) / [source](../../../../sources/getsentry__sentry-mcp) |
| [responsibleai/ASSERT](https://github.com/responsibleai/ASSERT) | 평가/관측/품질 | 412 | 135 | 151 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/d/responsibleai__ASSERT.md) / [report](../../../global-trending/repositories/responsibleai__ASSERT.md) / [source](../../../../sources/responsibleai__ASSERT) |
| [hexo-ai/sia](https://github.com/hexo-ai/sia) | 평가/관측/품질 | 405 | 145 | 1765 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/a/hexo-ai__sia.md) / [report](../../../global-trending/repositories/hexo-ai__sia.md) / [source](../../../../sources/hexo-ai__sia) |
| [line/promgen](https://github.com/line/promgen) | 평가/관측/품질 | 381 | 120 | 1124 | JavaScript | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/line__promgen.md) / [report](../../../korea-trending/repositories/line__promgen.md) / [source](../../../../sources/line__promgen) |
| [microsoft/RAMPART](https://github.com/microsoft/RAMPART) | 평가/관측/품질 | 380 | 139 | 360 | Python | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/microsoft__RAMPART.md) / [report](../../../global-trending/repositories/microsoft__RAMPART.md) / [source](../../../../sources/microsoft__RAMPART) |
| [toss/frontend-fundamentals](https://github.com/toss/frontend-fundamentals) | 평가/관측/품질 | 376 | 107 | 1964 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/toss__frontend-fundamentals.md) / [report](../../../korea-trending/repositories/toss__frontend-fundamentals.md) / [source](../../../../sources/toss__frontend-fundamentals) |
| [naver/fixture-monkey](https://github.com/naver/fixture-monkey) | 평가/관측/품질 | 344 | 112 | 696 | Java | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/e/naver__fixture-monkey.md) / [report](../../../korea-trending/repositories/naver__fixture-monkey.md) / [source](../../../../sources/naver__fixture-monkey) |
| [naver/lispe](https://github.com/naver/lispe) | 평가/관측/품질 | 333 | 100 | 594 | C | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/naver__lispe.md) / [report](../../../korea-trending/repositories/naver__lispe.md) / [source](../../../../sources/naver__lispe) |
| [Samsung/qaboard](https://github.com/Samsung/qaboard) | 평가/관측/품질 | 288 | 77 | 55 | JavaScript | cli-first, api/server, retrieval-memory, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/6/Samsung__qaboard.md) / [report](../../../korea-trending/repositories/Samsung__qaboard.md) / [source](../../../../sources/Samsung__qaboard) |
| [Samsung/cotopaxi](https://github.com/Samsung/cotopaxi) | 평가/관측/품질 | 265 | 85 | 362 | Python | agent-runtime, spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/2/Samsung__cotopaxi.md) / [report](../../../korea-trending/repositories/Samsung__cotopaxi.md) / [source](../../../../sources/Samsung__cotopaxi) |
| [Samsung/ADBI](https://github.com/Samsung/ADBI) | 평가/관측/품질 | 249 | 85 | 317 | C | spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/d/Samsung__ADBI.md) / [report](../../../korea-trending/repositories/Samsung__ADBI.md) / [source](../../../../sources/Samsung__ADBI) |
| [line/liff-mock](https://github.com/line/liff-mock) | 평가/관측/품질 | 244 | 69 | 45 | TypeScript | retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/3/line__liff-mock.md) / [report](../../../korea-trending/repositories/line__liff-mock.md) / [source](../../../../sources/line__liff-mock) |
| [lumatic2/korean-tax-accounting-ax-benchmark](https://github.com/lumatic2/korean-tax-accounting-ax-benchmark) | 평가/관측/품질 | 233 | 90 | 0 | Python | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/4/lumatic2__korean-tax-accounting-ax-benchmark.md) / [report](../../../korea-trending/repositories/lumatic2__korean-tax-accounting-ax-benchmark.md) / [source](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark) |
| [kakaobrain/kor-nlu-datasets](https://github.com/kakaobrain/kor-nlu-datasets) | 평가/관측/품질 | 227 | 107 | 312 | unknown | tests-evals | tests-evals | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/kakaobrain__kor-nlu-datasets.md) / [report](../../../korea-trending/repositories/kakaobrain__kor-nlu-datasets.md) / [source](../../../../sources/kakaobrain__kor-nlu-datasets) |
| [kakaobrain/g2pm](https://github.com/kakaobrain/g2pm) | 평가/관측/품질 | 199 | 85 | 365 | Python | tests-evals | tests-evals | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/2/kakaobrain__g2pm.md) / [report](../../../korea-trending/repositories/kakaobrain__g2pm.md) / [source](../../../../sources/kakaobrain__g2pm) |
| [NVIDIA/TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) | 평가/관측/품질 | 192 | 0 | 0 | unknown | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/NVIDIA__TensorRT-LLM.md) / [report](../../../clone-structures/NVIDIA__TensorRT-LLM.md) / [source](../../../../sources/NVIDIA__TensorRT-LLM) |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | 평가/관측/품질 | 192 | 0 | 0 | unknown | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/0/weaviate__weaviate.md) / [report](../../../clone-structures/weaviate__weaviate.md) / [source](../../../../sources/weaviate__weaviate) |
| [cykim05/heard](https://github.com/cykim05/heard) | 평가/관측/품질 | 187 | 74 | 0 | Python | agent-runtime, spec-artifacts, tests-evals, model-runtime | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/cykim05__heard.md) / [report](../../../korea-trending/repositories/cykim05__heard.md) / [source](../../../../sources/cykim05__heard) |
| [confident-ai/deepeval](https://github.com/confident-ai/deepeval) | 평가/관측/품질 | 185 | 0 | 0 | unknown | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/confident-ai__deepeval.md) / [report](../../../clone-structures/confident-ai__deepeval.md) / [source](../../../../sources/confident-ai__deepeval) |
| [madappgang/claudish](https://github.com/MadAppGang/claudish.git) | 평가/관측/품질 | 183 | 0 | 0 | unknown | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/5/MadAppGang__claudish.md) / [report](../../../clone-structures/madappgang__claudish.md) / [source](../../../../sources/MadAppGang__claudish) |
| [bartolli/codanna](https://github.com/bartolli/codanna.git) | 평가/관측/품질 | 181 | 0 | 0 | unknown | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/7/bartolli__codanna.md) / [report](../../../clone-structures/bartolli__codanna.md) / [source](../../../../sources/bartolli__codanna) |
| [Samsung/360tools](https://github.com/Samsung/360tools) | 평가/관측/품질 | 178 | 75 | 117 | C | tests-evals | tests-evals | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/Samsung__360tools.md) / [report](../../../korea-trending/repositories/Samsung__360tools.md) / [source](../../../../sources/Samsung__360tools) |
| [naver-ai/MM-JudgeBias](https://github.com/naver-ai/MM-JudgeBias) | 평가/관측/품질 | 175 | 72 | 9 | Python | spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/7/naver-ai__MM-JudgeBias.md) / [report](../../../korea-trending/repositories/naver-ai__MM-JudgeBias.md) / [source](../../../../sources/naver-ai__MM-JudgeBias) |
| [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | 평가/관측/품질 | 170 | 0 | 0 | unknown | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | none | [source deep dive](../../../source-deep-dives/repositories/2/stanfordnlp__dspy.md) / [report](../../../clone-structures/stanfordnlp__dspy.md) / [source](../../../../sources/stanfordnlp__dspy) |
| [lm-sys/FastChat](https://github.com/lm-sys/FastChat) | 평가/관측/품질 | 118 | 0 | 0 | unknown | api/server, retrieval-memory, tests-evals, container-deploy, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/lm-sys__FastChat.md) / [report](../../../clone-structures/lm-sys__FastChat.md) / [source](../../../../sources/lm-sys__FastChat) |


## Risk Watchlist

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [line/promgen](https://github.com/line/promgen) | 평가/관측/품질 | 381 | 120 | 1124 | JavaScript | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/line__promgen.md) / [report](../../../korea-trending/repositories/line__promgen.md) / [source](../../../../sources/line__promgen) |
| [microsoft/RAMPART](https://github.com/microsoft/RAMPART) | 평가/관측/품질 | 380 | 139 | 360 | Python | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/9/microsoft__RAMPART.md) / [report](../../../global-trending/repositories/microsoft__RAMPART.md) / [source](../../../../sources/microsoft__RAMPART) |
| [naver/fixture-monkey](https://github.com/naver/fixture-monkey) | 평가/관측/품질 | 344 | 112 | 696 | Java | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/e/naver__fixture-monkey.md) / [report](../../../korea-trending/repositories/naver__fixture-monkey.md) / [source](../../../../sources/naver__fixture-monkey) |
| [naver/lispe](https://github.com/naver/lispe) | 평가/관측/품질 | 333 | 100 | 594 | C | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/naver__lispe.md) / [report](../../../korea-trending/repositories/naver__lispe.md) / [source](../../../../sources/naver__lispe) |
| [Samsung/cotopaxi](https://github.com/Samsung/cotopaxi) | 평가/관측/품질 | 265 | 85 | 362 | Python | agent-runtime, spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/2/Samsung__cotopaxi.md) / [report](../../../korea-trending/repositories/Samsung__cotopaxi.md) / [source](../../../../sources/Samsung__cotopaxi) |
| [Samsung/ADBI](https://github.com/Samsung/ADBI) | 평가/관측/품질 | 249 | 85 | 317 | C | spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/d/Samsung__ADBI.md) / [report](../../../korea-trending/repositories/Samsung__ADBI.md) / [source](../../../../sources/Samsung__ADBI) |
| [lumatic2/korean-tax-accounting-ax-benchmark](https://github.com/lumatic2/korean-tax-accounting-ax-benchmark) | 평가/관측/품질 | 233 | 90 | 0 | Python | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/4/lumatic2__korean-tax-accounting-ax-benchmark.md) / [report](../../../korea-trending/repositories/lumatic2__korean-tax-accounting-ax-benchmark.md) / [source](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark) |
| [kakaobrain/kor-nlu-datasets](https://github.com/kakaobrain/kor-nlu-datasets) | 평가/관측/품질 | 227 | 107 | 312 | unknown | tests-evals | tests-evals | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/kakaobrain__kor-nlu-datasets.md) / [report](../../../korea-trending/repositories/kakaobrain__kor-nlu-datasets.md) / [source](../../../../sources/kakaobrain__kor-nlu-datasets) |
| [kakaobrain/g2pm](https://github.com/kakaobrain/g2pm) | 평가/관측/품질 | 199 | 85 | 365 | Python | tests-evals | tests-evals | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/2/kakaobrain__g2pm.md) / [report](../../../korea-trending/repositories/kakaobrain__g2pm.md) / [source](../../../../sources/kakaobrain__g2pm) |
| [cykim05/heard](https://github.com/cykim05/heard) | 평가/관측/품질 | 187 | 74 | 0 | Python | agent-runtime, spec-artifacts, tests-evals, model-runtime | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/f/cykim05__heard.md) / [report](../../../korea-trending/repositories/cykim05__heard.md) / [source](../../../../sources/cykim05__heard) |
| [Samsung/360tools](https://github.com/Samsung/360tools) | 평가/관측/품질 | 178 | 75 | 117 | C | tests-evals | tests-evals | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/Samsung__360tools.md) / [report](../../../korea-trending/repositories/Samsung__360tools.md) / [source](../../../../sources/Samsung__360tools) |
| [naver-ai/MM-JudgeBias](https://github.com/naver-ai/MM-JudgeBias) | 평가/관측/품질 | 175 | 72 | 9 | Python | spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/7/naver-ai__MM-JudgeBias.md) / [report](../../../korea-trending/repositories/naver-ai__MM-JudgeBias.md) / [source](../../../../sources/naver-ai__MM-JudgeBias) |
| [lm-sys/FastChat](https://github.com/lm-sys/FastChat) | 평가/관측/품질 | 118 | 0 | 0 | unknown | api/server, retrieval-memory, tests-evals, container-deploy, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/lm-sys__FastChat.md) / [report](../../../clone-structures/lm-sys__FastChat.md) / [source](../../../../sources/lm-sys__FastChat) |
