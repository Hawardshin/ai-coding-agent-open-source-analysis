# 평가/관측/품질 소스 인사이트

생성 시각: 2026-06-18T15:38:52.828Z

평가 suite, benchmark harness, tracing, observability, quality gate

## 요약

- 조사 단위: 평가/관측/품질 카테고리에 속한 27개 source-scanned 레포입니다.
- 포함 범위: trend-linked 20개, key source reference 255개, median source depth 98입니다.
- 탐색 방식: 카테고리 인사이트를 먼저 보고, 상위 레포 비교의 소스 딥다이브 링크를 따라 구현 근거를 확인합니다.

## 총평

평가/관측/품질 카테고리는 27개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 74%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

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

- 평가/관측/품질 카테고리는 27개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 74%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 eval/test harness (27), retrieval/vector path (20), spec/docs-driven (20)이고, 파일 근거 bucket은 docs (27), eval (27), config (24), retrieval (20) 순서로 강합니다.
- MCP/tool protocol 표면이 37%에서 보입니다. 단순 라이브러리보다 agent tool 연결/registry를 비교해야 합니다.
- RAG, memory, vector/index 경로가 74%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 74%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 100%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- container/deploy 경로가 37%에서 확인됩니다. 로컬 데모형보다 운영 배포형 레포 비중이 높습니다.
- AGENTS/CLAUDE/Codex/Cursor류 instruction 파일이 44%에서 보여 agent-native 개발 방식이 이미 레포 구조에 들어와 있습니다.

## 이 카테고리 비교 총평

| 항목 | 판단 |
| --- | --- |
| 읽는 목적 | agent/RAG 품질을 운영 중에 측정하고 회귀를 막는 평가/관측성 구조 비교에 쓴다. |
| 강점 | test/eval coverage 100%; retrieval/memory 경로 74% |
| 약점/검증 포인트 | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 |
| 대표 feature | tests-evals 100%, retrieval-memory 74%, spec-artifacts 74%, agent-runtime 70%, security-policy 63% |
| 대표 bucket | docs 100%, eval 100%, config 89%, retrieval 74%, spec 74% |
| 대표 언어 | Python 8, unknown 8, TypeScript 4 |
| 소스 근거 위치 | 소스 근거가 평균보다 얕음, 레포당 핵심 참조 9.4개 |
| 결론 | agent/RAG 품질을 운영 중에 측정하고 회귀를 막는 평가/관측성 구조 비교에 쓴다. 먼저 mock-server/mockserver-monorepo를 구조 기준점으로 보고, 현재성은 mock-server/mockserver-monorepo와 대조한다. |

## 트렌드/소스 지표

| 항목 | 값 |
| --- | --- |
| 레포 수 | 27 |
| 트렌드 연결 레포 | 20 |
| 글로벌 / 한국 트렌드 수 | 6 / 14 |
| 글로벌/한국 동시 포착 | 0 |
| 최대 / 중앙 트렌드 점수 | 160 / 85 |
| 전체 / 중앙 stars | 15875 / 151 |
| 핵심 소스 참조 | 255 |
| 중앙 파일 수 | 524 |

## 소스 feature 분포

### 주요 feature

| 신호 | 수 |
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


### 구조 패턴

| 신호 | 수 |
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


### 근거 bucket coverage

| 신호 | 수 |
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


### 의존성 그룹

| 신호 | 수 |
| --- | ---: |
| llmProviders | 8 |
| agentProtocols | 6 |
| modelRuntime | 5 |
| observability | 5 |
| webRuntime | 4 |
| agentFrameworks | 3 |
| developerSurface | 3 |
| vectorStores | 3 |


### 명령 표면

| 신호 | 수 |
| --- | ---: |
| utility | 11 |
| test | 7 |
| build | 6 |
| quality | 6 |
| serve-dev | 4 |
| container | 1 |


### 위험 카테고리

_감지된 신호가 없습니다._


## 상위 트렌드 레포

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [mock-server/mockserver-monorepo](https://github.com/mock-server/mockserver-monorepo) | 평가/관측/품질 | 470 | 160 | 4893 | Java | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/mock-server__mockserver-monorepo.md) / [보고서](../../../global-trending/repositories/mock-server__mockserver-monorepo.md) / [소스](../../../../sources/mock-server__mockserver-monorepo) |
| [MCPJam/inspector](https://github.com/MCPJam/inspector) | 평가/관측/품질 | 448 | 149 | 2016 | TypeScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/MCPJam__inspector.md) / [보고서](../../../global-trending/repositories/MCPJam__inspector.md) / [소스](../../../../sources/MCPJam__inspector) |
| [getsentry/sentry-mcp](https://github.com/getsentry/sentry-mcp) | 평가/관측/품질 | 423 | 140 | 730 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/getsentry__sentry-mcp.md) / [보고서](../../../global-trending/repositories/getsentry__sentry-mcp.md) / [소스](../../../../sources/getsentry__sentry-mcp) |
| [responsibleai/ASSERT](https://github.com/responsibleai/ASSERT) | 평가/관측/품질 | 406 | 135 | 151 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/responsibleai__ASSERT.md) / [보고서](../../../global-trending/repositories/responsibleai__ASSERT.md) / [소스](../../../../sources/responsibleai__ASSERT) |
| [hexo-ai/sia](https://github.com/hexo-ai/sia) | 평가/관측/품질 | 399 | 145 | 1765 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/hexo-ai__sia.md) / [보고서](../../../global-trending/repositories/hexo-ai__sia.md) / [소스](../../../../sources/hexo-ai__sia) |
| [line/promgen](https://github.com/line/promgen) | 평가/관측/품질 | 375 | 120 | 1124 | JavaScript | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/line__promgen.md) / [보고서](../../../korea-trending/repositories/line__promgen.md) / [소스](../../../../sources/line__promgen) |
| [microsoft/RAMPART](https://github.com/microsoft/RAMPART) | 평가/관측/품질 | 374 | 139 | 360 | Python | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/microsoft__RAMPART.md) / [보고서](../../../global-trending/repositories/microsoft__RAMPART.md) / [소스](../../../../sources/microsoft__RAMPART) |
| [toss/frontend-fundamentals](https://github.com/toss/frontend-fundamentals) | 평가/관측/품질 | 370 | 107 | 1964 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/toss__frontend-fundamentals.md) / [보고서](../../../korea-trending/repositories/toss__frontend-fundamentals.md) / [소스](../../../../sources/toss__frontend-fundamentals) |
| [naver/fixture-monkey](https://github.com/naver/fixture-monkey) | 평가/관측/품질 | 338 | 112 | 696 | Java | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/e/naver__fixture-monkey.md) / [보고서](../../../korea-trending/repositories/naver__fixture-monkey.md) / [소스](../../../../sources/naver__fixture-monkey) |
| [naver/lispe](https://github.com/naver/lispe) | 평가/관측/품질 | 327 | 100 | 594 | C | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/naver__lispe.md) / [보고서](../../../korea-trending/repositories/naver__lispe.md) / [소스](../../../../sources/naver__lispe) |
| [Samsung/qaboard](https://github.com/Samsung/qaboard) | 평가/관측/품질 | 282 | 77 | 55 | JavaScript | cli-first, api/server, retrieval-memory, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/Samsung__qaboard.md) / [보고서](../../../korea-trending/repositories/Samsung__qaboard.md) / [소스](../../../../sources/Samsung__qaboard) |
| [Samsung/cotopaxi](https://github.com/Samsung/cotopaxi) | 평가/관측/품질 | 259 | 85 | 362 | Python | agent-runtime, spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/Samsung__cotopaxi.md) / [보고서](../../../korea-trending/repositories/Samsung__cotopaxi.md) / [소스](../../../../sources/Samsung__cotopaxi) |
| [Samsung/ADBI](https://github.com/Samsung/ADBI) | 평가/관측/품질 | 243 | 85 | 317 | C | spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/Samsung__ADBI.md) / [보고서](../../../korea-trending/repositories/Samsung__ADBI.md) / [소스](../../../../sources/Samsung__ADBI) |
| [line/liff-mock](https://github.com/line/liff-mock) | 평가/관측/품질 | 238 | 69 | 45 | TypeScript | retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/line__liff-mock.md) / [보고서](../../../korea-trending/repositories/line__liff-mock.md) / [소스](../../../../sources/line__liff-mock) |
| [lumatic2/korean-tax-accounting-ax-benchmark](https://github.com/lumatic2/korean-tax-accounting-ax-benchmark) | 평가/관측/품질 | 227 | 90 | 0 | Python | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/lumatic2__korean-tax-accounting-ax-benchmark.md) / [보고서](../../../korea-trending/repositories/lumatic2__korean-tax-accounting-ax-benchmark.md) / [소스](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark) |
| [kakaobrain/kor-nlu-datasets](https://github.com/kakaobrain/kor-nlu-datasets) | 평가/관측/품질 | 221 | 107 | 312 | unknown | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/kakaobrain__kor-nlu-datasets.md) / [보고서](../../../korea-trending/repositories/kakaobrain__kor-nlu-datasets.md) / [소스](../../../../sources/kakaobrain__kor-nlu-datasets) |
| [kakaobrain/g2pm](https://github.com/kakaobrain/g2pm) | 평가/관측/품질 | 193 | 85 | 365 | Python | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/kakaobrain__g2pm.md) / [보고서](../../../korea-trending/repositories/kakaobrain__g2pm.md) / [소스](../../../../sources/kakaobrain__g2pm) |
| [cykim05/heard](https://github.com/cykim05/heard) | 평가/관측/품질 | 181 | 74 | 0 | Python | agent-runtime, spec-artifacts, tests-evals, model-runtime | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/cykim05__heard.md) / [보고서](../../../korea-trending/repositories/cykim05__heard.md) / [소스](../../../../sources/cykim05__heard) |
| [Samsung/360tools](https://github.com/Samsung/360tools) | 평가/관측/품질 | 172 | 75 | 117 | C | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/Samsung__360tools.md) / [보고서](../../../korea-trending/repositories/Samsung__360tools.md) / [소스](../../../../sources/Samsung__360tools) |
| [naver-ai/MM-JudgeBias](https://github.com/naver-ai/MM-JudgeBias) | 평가/관측/품질 | 169 | 72 | 9 | Python | spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/naver-ai__MM-JudgeBias.md) / [보고서](../../../korea-trending/repositories/naver-ai__MM-JudgeBias.md) / [소스](../../../../sources/naver-ai__MM-JudgeBias) |


## 대표 레포 판단표

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 언어 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 위험/확인 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- | --- | --- |
| 1 | [mock-server/mockserver-monorepo](https://github.com/mock-server/mockserver-monorepo) | 470 | 160 | Java | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/mock-server__mockserver-monorepo.md) / [보고서](../../../global-trending/repositories/mock-server__mockserver-monorepo.md) / [소스](../../../../sources/mock-server__mockserver-monorepo) |
| 2 | [MCPJam/inspector](https://github.com/MCPJam/inspector) | 448 | 149 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/MCPJam__inspector.md) / [보고서](../../../global-trending/repositories/MCPJam__inspector.md) / [소스](../../../../sources/MCPJam__inspector) |
| 3 | [getsentry/sentry-mcp](https://github.com/getsentry/sentry-mcp) | 423 | 140 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/getsentry__sentry-mcp.md) / [보고서](../../../global-trending/repositories/getsentry__sentry-mcp.md) / [소스](../../../../sources/getsentry__sentry-mcp) |
| 4 | [responsibleai/ASSERT](https://github.com/responsibleai/ASSERT) | 406 | 135 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/responsibleai__ASSERT.md) / [보고서](../../../global-trending/repositories/responsibleai__ASSERT.md) / [소스](../../../../sources/responsibleai__ASSERT) |
| 5 | [hexo-ai/sia](https://github.com/hexo-ai/sia) | 399 | 145 | Python | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 대표 feature 일치: agent-runtime, retrieval-memory, spec-artifacts | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/hexo-ai__sia.md) / [보고서](../../../global-trending/repositories/hexo-ai__sia.md) / [소스](../../../../sources/hexo-ai__sia) |
| 6 | [line/promgen](https://github.com/line/promgen) | 375 | 120 | JavaScript | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/line__promgen.md) / [보고서](../../../korea-trending/repositories/line__promgen.md) / [소스](../../../../sources/line__promgen) |
| 7 | [microsoft/RAMPART](https://github.com/microsoft/RAMPART) | 374 | 139 | Python | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 대표 feature 일치: agent-runtime, retrieval-memory, spec-artifacts; 확인 필요: entrypoint 경로가 명확하지 않음 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/microsoft__RAMPART.md) / [보고서](../../../global-trending/repositories/microsoft__RAMPART.md) / [소스](../../../../sources/microsoft__RAMPART) |
| 8 | [toss/frontend-fundamentals](https://github.com/toss/frontend-fundamentals) | 370 | 107 | TypeScript | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/toss__frontend-fundamentals.md) / [보고서](../../../korea-trending/repositories/toss__frontend-fundamentals.md) / [소스](../../../../sources/toss__frontend-fundamentals) |
| 9 | [naver/fixture-monkey](https://github.com/naver/fixture-monkey) | 338 | 112 | Java | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, agent-native 개발 지시문 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 대표 feature 일치: agent-runtime, retrieval-memory, spec-artifacts; 확인 필요: entrypoint 경로가 명확하지 않음 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/e/naver__fixture-monkey.md) / [보고서](../../../korea-trending/repositories/naver__fixture-monkey.md) / [소스](../../../../sources/naver__fixture-monkey) |
| 10 | [naver/lispe](https://github.com/naver/lispe) | 327 | 100 | C | retrieval/memory 구조, 검증 표면, 배포 구조 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/naver__lispe.md) / [보고서](../../../korea-trending/repositories/naver__lispe.md) / [소스](../../../../sources/naver__lispe) |
| 11 | [Samsung/qaboard](https://github.com/Samsung/qaboard) | 282 | 77 | JavaScript | retrieval/memory 구조, 검증 표면, 보안/정책 표면, 배포 구조 | 카테고리 중앙값보다 비교 점수 높음; 소스 깊이 우위; 핵심 파일 참조 충분; 대표 feature 일치: retrieval-memory, tests-evals | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/Samsung__qaboard.md) / [보고서](../../../korea-trending/repositories/Samsung__qaboard.md) / [소스](../../../../sources/Samsung__qaboard) |
| 12 | [Samsung/cotopaxi](https://github.com/Samsung/cotopaxi) | 259 | 85 | Python | spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 대표 feature 일치: agent-runtime, spec-artifacts, tests-evals; 확인 필요: entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/Samsung__cotopaxi.md) / [보고서](../../../korea-trending/repositories/Samsung__cotopaxi.md) / [소스](../../../../sources/Samsung__cotopaxi) |
| 13 | [Samsung/ADBI](https://github.com/Samsung/ADBI) | 243 | 85 | C | spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 대표 feature 일치: spec-artifacts, tests-evals; 확인 필요: entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/Samsung__ADBI.md) / [보고서](../../../korea-trending/repositories/Samsung__ADBI.md) / [소스](../../../../sources/Samsung__ADBI) |
| 14 | [line/liff-mock](https://github.com/line/liff-mock) | 238 | 69 | TypeScript | retrieval/memory 구조, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 대표 feature 일치: retrieval-memory, tests-evals | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/line__liff-mock.md) / [보고서](../../../korea-trending/repositories/line__liff-mock.md) / [소스](../../../../sources/line__liff-mock) |
| 15 | [lumatic2/korean-tax-accounting-ax-benchmark](https://github.com/lumatic2/korean-tax-accounting-ax-benchmark) | 227 | 90 | Python | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 트렌드 점수 우위; 대표 feature 일치: agent-runtime, retrieval-memory, spec-artifacts; 확인 필요: entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/lumatic2__korean-tax-accounting-ax-benchmark.md) / [보고서](../../../korea-trending/repositories/lumatic2__korean-tax-accounting-ax-benchmark.md) / [소스](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark) |
| 16 | [kakaobrain/kor-nlu-datasets](https://github.com/kakaobrain/kor-nlu-datasets) | 221 | 107 | unknown | 검증 표면 | 트렌드 점수 우위; 확인 필요: entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/kakaobrain__kor-nlu-datasets.md) / [보고서](../../../korea-trending/repositories/kakaobrain__kor-nlu-datasets.md) / [소스](../../../../sources/kakaobrain__kor-nlu-datasets) |
| 17 | [kakaobrain/g2pm](https://github.com/kakaobrain/g2pm) | 193 | 85 | Python | 검증 표면 | 트렌드 점수 우위; 확인 필요: entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/kakaobrain__g2pm.md) / [보고서](../../../korea-trending/repositories/kakaobrain__g2pm.md) / [소스](../../../../sources/kakaobrain__g2pm) |
| 18 | [cykim05/heard](https://github.com/cykim05/heard) | 181 | 74 | Python | spec/요구사항 산출물, 검증 표면 | 대표 feature 일치: agent-runtime, spec-artifacts, tests-evals; 확인 필요: entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/cykim05__heard.md) / [보고서](../../../korea-trending/repositories/cykim05__heard.md) / [소스](../../../../sources/cykim05__heard) |


## 상위 레포 비교

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [mock-server/mockserver-monorepo](https://github.com/mock-server/mockserver-monorepo) | 평가/관측/품질 | 470 | 160 | 4893 | Java | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/mock-server__mockserver-monorepo.md) / [보고서](../../../global-trending/repositories/mock-server__mockserver-monorepo.md) / [소스](../../../../sources/mock-server__mockserver-monorepo) |
| [MCPJam/inspector](https://github.com/MCPJam/inspector) | 평가/관측/품질 | 448 | 149 | 2016 | TypeScript | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/MCPJam__inspector.md) / [보고서](../../../global-trending/repositories/MCPJam__inspector.md) / [소스](../../../../sources/MCPJam__inspector) |
| [getsentry/sentry-mcp](https://github.com/getsentry/sentry-mcp) | 평가/관측/품질 | 423 | 140 | 730 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/getsentry__sentry-mcp.md) / [보고서](../../../global-trending/repositories/getsentry__sentry-mcp.md) / [소스](../../../../sources/getsentry__sentry-mcp) |
| [responsibleai/ASSERT](https://github.com/responsibleai/ASSERT) | 평가/관측/품질 | 406 | 135 | 151 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/responsibleai__ASSERT.md) / [보고서](../../../global-trending/repositories/responsibleai__ASSERT.md) / [소스](../../../../sources/responsibleai__ASSERT) |
| [hexo-ai/sia](https://github.com/hexo-ai/sia) | 평가/관측/품질 | 399 | 145 | 1765 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/hexo-ai__sia.md) / [보고서](../../../global-trending/repositories/hexo-ai__sia.md) / [소스](../../../../sources/hexo-ai__sia) |
| [line/promgen](https://github.com/line/promgen) | 평가/관측/품질 | 375 | 120 | 1124 | JavaScript | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/line__promgen.md) / [보고서](../../../korea-trending/repositories/line__promgen.md) / [소스](../../../../sources/line__promgen) |
| [microsoft/RAMPART](https://github.com/microsoft/RAMPART) | 평가/관측/품질 | 374 | 139 | 360 | Python | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/microsoft__RAMPART.md) / [보고서](../../../global-trending/repositories/microsoft__RAMPART.md) / [소스](../../../../sources/microsoft__RAMPART) |
| [toss/frontend-fundamentals](https://github.com/toss/frontend-fundamentals) | 평가/관측/품질 | 370 | 107 | 1964 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/toss__frontend-fundamentals.md) / [보고서](../../../korea-trending/repositories/toss__frontend-fundamentals.md) / [소스](../../../../sources/toss__frontend-fundamentals) |
| [naver/fixture-monkey](https://github.com/naver/fixture-monkey) | 평가/관측/품질 | 338 | 112 | 696 | Java | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/e/naver__fixture-monkey.md) / [보고서](../../../korea-trending/repositories/naver__fixture-monkey.md) / [소스](../../../../sources/naver__fixture-monkey) |
| [naver/lispe](https://github.com/naver/lispe) | 평가/관측/품질 | 327 | 100 | 594 | C | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/naver__lispe.md) / [보고서](../../../korea-trending/repositories/naver__lispe.md) / [소스](../../../../sources/naver__lispe) |
| [Samsung/qaboard](https://github.com/Samsung/qaboard) | 평가/관측/품질 | 282 | 77 | 55 | JavaScript | cli-first, api/server, retrieval-memory, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/Samsung__qaboard.md) / [보고서](../../../korea-trending/repositories/Samsung__qaboard.md) / [소스](../../../../sources/Samsung__qaboard) |
| [Samsung/cotopaxi](https://github.com/Samsung/cotopaxi) | 평가/관측/품질 | 259 | 85 | 362 | Python | agent-runtime, spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/Samsung__cotopaxi.md) / [보고서](../../../korea-trending/repositories/Samsung__cotopaxi.md) / [소스](../../../../sources/Samsung__cotopaxi) |
| [Samsung/ADBI](https://github.com/Samsung/ADBI) | 평가/관측/품질 | 243 | 85 | 317 | C | spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/Samsung__ADBI.md) / [보고서](../../../korea-trending/repositories/Samsung__ADBI.md) / [소스](../../../../sources/Samsung__ADBI) |
| [line/liff-mock](https://github.com/line/liff-mock) | 평가/관측/품질 | 238 | 69 | 45 | TypeScript | retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/line__liff-mock.md) / [보고서](../../../korea-trending/repositories/line__liff-mock.md) / [소스](../../../../sources/line__liff-mock) |
| [lumatic2/korean-tax-accounting-ax-benchmark](https://github.com/lumatic2/korean-tax-accounting-ax-benchmark) | 평가/관측/품질 | 227 | 90 | 0 | Python | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/lumatic2__korean-tax-accounting-ax-benchmark.md) / [보고서](../../../korea-trending/repositories/lumatic2__korean-tax-accounting-ax-benchmark.md) / [소스](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark) |
| [kakaobrain/kor-nlu-datasets](https://github.com/kakaobrain/kor-nlu-datasets) | 평가/관측/품질 | 221 | 107 | 312 | unknown | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/kakaobrain__kor-nlu-datasets.md) / [보고서](../../../korea-trending/repositories/kakaobrain__kor-nlu-datasets.md) / [소스](../../../../sources/kakaobrain__kor-nlu-datasets) |
| [kakaobrain/g2pm](https://github.com/kakaobrain/g2pm) | 평가/관측/품질 | 193 | 85 | 365 | Python | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/kakaobrain__g2pm.md) / [보고서](../../../korea-trending/repositories/kakaobrain__g2pm.md) / [소스](../../../../sources/kakaobrain__g2pm) |
| [cykim05/heard](https://github.com/cykim05/heard) | 평가/관측/품질 | 181 | 74 | 0 | Python | agent-runtime, spec-artifacts, tests-evals, model-runtime | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/cykim05__heard.md) / [보고서](../../../korea-trending/repositories/cykim05__heard.md) / [소스](../../../../sources/cykim05__heard) |
| [NVIDIA/TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) | 평가/관측/품질 | 180 | 0 | 0 | unknown | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/NVIDIA__TensorRT-LLM.md) / [보고서](../../../clone-structures/NVIDIA__TensorRT-LLM.md) / [소스](../../../../sources/NVIDIA__TensorRT-LLM) |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | 평가/관측/품질 | 180 | 0 | 0 | unknown | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/weaviate__weaviate.md) / [보고서](../../../clone-structures/weaviate__weaviate.md) / [소스](../../../../sources/weaviate__weaviate) |
| [confident-ai/deepeval](https://github.com/confident-ai/deepeval) | 평가/관측/품질 | 173 | 0 | 0 | unknown | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/confident-ai__deepeval.md) / [보고서](../../../clone-structures/confident-ai__deepeval.md) / [소스](../../../../sources/confident-ai__deepeval) |
| [Samsung/360tools](https://github.com/Samsung/360tools) | 평가/관측/품질 | 172 | 75 | 117 | C | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/Samsung__360tools.md) / [보고서](../../../korea-trending/repositories/Samsung__360tools.md) / [소스](../../../../sources/Samsung__360tools) |
| [madappgang/claudish](https://github.com/MadAppGang/claudish.git) | 평가/관측/품질 | 171 | 0 | 0 | unknown | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/MadAppGang__claudish.md) / [보고서](../../../clone-structures/madappgang__claudish.md) / [소스](../../../../sources/MadAppGang__claudish) |
| [naver-ai/MM-JudgeBias](https://github.com/naver-ai/MM-JudgeBias) | 평가/관측/품질 | 169 | 72 | 9 | Python | spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/naver-ai__MM-JudgeBias.md) / [보고서](../../../korea-trending/repositories/naver-ai__MM-JudgeBias.md) / [소스](../../../../sources/naver-ai__MM-JudgeBias) |
| [bartolli/codanna](https://github.com/bartolli/codanna.git) | 평가/관측/품질 | 169 | 0 | 0 | unknown | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/bartolli__codanna.md) / [보고서](../../../clone-structures/bartolli__codanna.md) / [소스](../../../../sources/bartolli__codanna) |
| [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | 평가/관측/품질 | 158 | 0 | 0 | unknown | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/stanfordnlp__dspy.md) / [보고서](../../../clone-structures/stanfordnlp__dspy.md) / [소스](../../../../sources/stanfordnlp__dspy) |
| [lm-sys/FastChat](https://github.com/lm-sys/FastChat) | 평가/관측/품질 | 106 | 0 | 0 | unknown | api/server, retrieval-memory, tests-evals, container-deploy, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/lm-sys__FastChat.md) / [보고서](../../../clone-structures/lm-sys__FastChat.md) / [소스](../../../../sources/lm-sys__FastChat) |


## 위험 신호 Watchlist

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [line/promgen](https://github.com/line/promgen) | 평가/관측/품질 | 375 | 120 | 1124 | JavaScript | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/line__promgen.md) / [보고서](../../../korea-trending/repositories/line__promgen.md) / [소스](../../../../sources/line__promgen) |
| [microsoft/RAMPART](https://github.com/microsoft/RAMPART) | 평가/관측/품질 | 374 | 139 | 360 | Python | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/microsoft__RAMPART.md) / [보고서](../../../global-trending/repositories/microsoft__RAMPART.md) / [소스](../../../../sources/microsoft__RAMPART) |
| [naver/fixture-monkey](https://github.com/naver/fixture-monkey) | 평가/관측/품질 | 338 | 112 | 696 | Java | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/e/naver__fixture-monkey.md) / [보고서](../../../korea-trending/repositories/naver__fixture-monkey.md) / [소스](../../../../sources/naver__fixture-monkey) |
| [naver/lispe](https://github.com/naver/lispe) | 평가/관측/품질 | 327 | 100 | 594 | C | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/naver__lispe.md) / [보고서](../../../korea-trending/repositories/naver__lispe.md) / [소스](../../../../sources/naver__lispe) |
| [Samsung/cotopaxi](https://github.com/Samsung/cotopaxi) | 평가/관측/품질 | 259 | 85 | 362 | Python | agent-runtime, spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/Samsung__cotopaxi.md) / [보고서](../../../korea-trending/repositories/Samsung__cotopaxi.md) / [소스](../../../../sources/Samsung__cotopaxi) |
| [Samsung/ADBI](https://github.com/Samsung/ADBI) | 평가/관측/품질 | 243 | 85 | 317 | C | spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/Samsung__ADBI.md) / [보고서](../../../korea-trending/repositories/Samsung__ADBI.md) / [소스](../../../../sources/Samsung__ADBI) |
| [lumatic2/korean-tax-accounting-ax-benchmark](https://github.com/lumatic2/korean-tax-accounting-ax-benchmark) | 평가/관측/품질 | 227 | 90 | 0 | Python | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/lumatic2__korean-tax-accounting-ax-benchmark.md) / [보고서](../../../korea-trending/repositories/lumatic2__korean-tax-accounting-ax-benchmark.md) / [소스](../../../../sources/lumatic2__korean-tax-accounting-ax-benchmark) |
| [kakaobrain/kor-nlu-datasets](https://github.com/kakaobrain/kor-nlu-datasets) | 평가/관측/품질 | 221 | 107 | 312 | unknown | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/kakaobrain__kor-nlu-datasets.md) / [보고서](../../../korea-trending/repositories/kakaobrain__kor-nlu-datasets.md) / [소스](../../../../sources/kakaobrain__kor-nlu-datasets) |
| [kakaobrain/g2pm](https://github.com/kakaobrain/g2pm) | 평가/관측/품질 | 193 | 85 | 365 | Python | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/kakaobrain__g2pm.md) / [보고서](../../../korea-trending/repositories/kakaobrain__g2pm.md) / [소스](../../../../sources/kakaobrain__g2pm) |
| [cykim05/heard](https://github.com/cykim05/heard) | 평가/관측/품질 | 181 | 74 | 0 | Python | agent-runtime, spec-artifacts, tests-evals, model-runtime | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/cykim05__heard.md) / [보고서](../../../korea-trending/repositories/cykim05__heard.md) / [소스](../../../../sources/cykim05__heard) |
| [Samsung/360tools](https://github.com/Samsung/360tools) | 평가/관측/품질 | 172 | 75 | 117 | C | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/Samsung__360tools.md) / [보고서](../../../korea-trending/repositories/Samsung__360tools.md) / [소스](../../../../sources/Samsung__360tools) |
| [naver-ai/MM-JudgeBias](https://github.com/naver-ai/MM-JudgeBias) | 평가/관측/품질 | 169 | 72 | 9 | Python | spec-artifacts, tests-evals | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/naver-ai__MM-JudgeBias.md) / [보고서](../../../korea-trending/repositories/naver-ai__MM-JudgeBias.md) / [소스](../../../../sources/naver-ai__MM-JudgeBias) |
| [lm-sys/FastChat](https://github.com/lm-sys/FastChat) | 평가/관측/품질 | 106 | 0 | 0 | unknown | api/server, retrieval-memory, tests-evals, container-deploy, model-runtime, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/lm-sys__FastChat.md) / [보고서](../../../clone-structures/lm-sys__FastChat.md) / [소스](../../../../sources/lm-sys__FastChat) |
