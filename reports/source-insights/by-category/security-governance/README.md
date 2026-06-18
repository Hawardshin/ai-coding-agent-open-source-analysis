# 보안/거버넌스/안전 소스 인사이트

생성 시각: 2026-06-18T15:31:47.340Z

sandbox, permission, policy, auth, guardrail, secret handling

## 요약

- 조사 단위: 보안/거버넌스/안전 카테고리에 속한 10개 source-scanned 레포입니다.
- 포함 범위: trend-linked 9개, key source reference 68개, median source depth 75입니다.
- 탐색 방식: 카테고리 인사이트를 먼저 보고, 상위 레포 비교의 소스 딥다이브 링크를 따라 구현 근거를 확인합니다.

## 총평

보안/거버넌스/안전 카테고리는 10개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 90%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

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

- 보안/거버넌스/안전 카테고리는 10개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 90%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 eval/test harness (9), agent/tool runtime (6), retrieval/vector path (6)이고, 파일 근거 bucket은 docs (10), eval (9), ci (8), config (8) 순서로 강합니다.
- RAG, memory, vector/index 경로가 60%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 60%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 90%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.

## 트렌드/소스 지표

| 항목 | 값 |
| --- | --- |
| 레포 수 | 10 |
| 트렌드 연결 레포 | 9 |
| 글로벌 / 한국 트렌드 수 | 1 / 8 |
| 글로벌/한국 동시 포착 | 0 |
| 최대 / 중앙 트렌드 점수 | 177 / 82 |
| 전체 / 중앙 stars | 6459 / 148 |
| 핵심 소스 참조 | 68 |
| 중앙 파일 수 | 159 |

## 소스 feature 분포

### 주요 feature

| 신호 | 수 |
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


### 구조 패턴

| 신호 | 수 |
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


### 근거 bucket coverage

| 신호 | 수 |
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


### 의존성 그룹

| 신호 | 수 |
| --- | ---: |
| developerSurface | 2 |
| modelRuntime | 2 |
| agentFrameworks | 1 |
| llmProviders | 1 |
| observability | 1 |
| vectorStores | 1 |
| webRuntime | 1 |


### 명령 표면

| 신호 | 수 |
| --- | ---: |
| utility | 6 |
| test | 4 |
| build | 2 |
| quality | 2 |
| serve-dev | 1 |


### 위험 카테고리

_감지된 신호가 없습니다._


## 상위 트렌드 레포

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [perplexityai/bumblebee](https://github.com/perplexityai/bumblebee) | 보안/거버넌스/안전 | 417 | 177 | 4485 | Go | cli-first, agent-runtime, mcp/protocol, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/perplexityai__bumblebee.md) / [보고서](../../../global-trending/repositories/perplexityai__bumblebee.md) / [소스](../../../../sources/perplexityai__bumblebee) |
| [Samsung/CredSweeper](https://github.com/Samsung/CredSweeper) | 보안/거버넌스/안전 | 336 | 104 | 204 | Python | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/Samsung__CredSweeper.md) / [보고서](../../../korea-trending/repositories/Samsung__CredSweeper.md) / [소스](../../../../sources/Samsung__CredSweeper) |
| [toss/use-funnel](https://github.com/toss/use-funnel) | 보안/거버넌스/안전 | 317 | 103 | 567 | TypeScript | monorepo, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/toss__use-funnel.md) / [보고서](../../../korea-trending/repositories/toss__use-funnel.md) / [소스](../../../../sources/toss__use-funnel) |
| [line/line-fido2-server](https://github.com/line/line-fido2-server) | 보안/거버넌스/안전 | 293 | 105 | 580 | Java | retrieval-memory, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/line__line-fido2-server.md) / [보고서](../../../korea-trending/repositories/line__line-fido2-server.md) / [소스](../../../../sources/line__line-fido2-server) |
| [daangn/graplix](https://github.com/daangn/graplix) | 보안/거버넌스/안전 | 281 | 84 | 92 | TypeScript | monorepo, cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/daangn__graplix.md) / [보고서](../../../korea-trending/repositories/daangn__graplix.md) / [소스](../../../../sources/daangn__graplix) |
| [line/garr](https://github.com/line/garr) | 보안/거버넌스/안전 | 212 | 80 | 371 | Go | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/line__garr.md) / [보고서](../../../korea-trending/repositories/line__garr.md) / [소스](../../../../sources/line__garr) |
| [naver/disco](https://github.com/naver/disco) | 보안/거버넌스/안전 | 205 | 72 | 75 | Python | agent-runtime, spec-artifacts, tests-evals, model-runtime | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/naver__disco.md) / [보고서](../../../korea-trending/repositories/naver__disco.md) / [소스](../../../../sources/naver__disco) |
| [line/seed](https://github.com/line/seed) | 보안/거버넌스/안전 | 205 | 70 | 61 | Makefile | retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 15000개 파일에서 스캔이 잘림, entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/line__seed.md) / [보고서](../../../korea-trending/repositories/line__seed.md) / [소스](../../../../sources/line__seed) |
| [line/webauthn-kotlin](https://github.com/line/webauthn-kotlin) | 보안/거버넌스/안전 | 168 | 69 | 24 | Kotlin | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/line__webauthn-kotlin.md) / [보고서](../../../korea-trending/repositories/line__webauthn-kotlin.md) / [소스](../../../../sources/line__webauthn-kotlin) |


## 상위 레포 비교

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [perplexityai/bumblebee](https://github.com/perplexityai/bumblebee) | 보안/거버넌스/안전 | 417 | 177 | 4485 | Go | cli-first, agent-runtime, mcp/protocol, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/perplexityai__bumblebee.md) / [보고서](../../../global-trending/repositories/perplexityai__bumblebee.md) / [소스](../../../../sources/perplexityai__bumblebee) |
| [Samsung/CredSweeper](https://github.com/Samsung/CredSweeper) | 보안/거버넌스/안전 | 336 | 104 | 204 | Python | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/Samsung__CredSweeper.md) / [보고서](../../../korea-trending/repositories/Samsung__CredSweeper.md) / [소스](../../../../sources/Samsung__CredSweeper) |
| [toss/use-funnel](https://github.com/toss/use-funnel) | 보안/거버넌스/안전 | 317 | 103 | 567 | TypeScript | monorepo, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/toss__use-funnel.md) / [보고서](../../../korea-trending/repositories/toss__use-funnel.md) / [소스](../../../../sources/toss__use-funnel) |
| [line/line-fido2-server](https://github.com/line/line-fido2-server) | 보안/거버넌스/안전 | 293 | 105 | 580 | Java | retrieval-memory, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/line__line-fido2-server.md) / [보고서](../../../korea-trending/repositories/line__line-fido2-server.md) / [소스](../../../../sources/line__line-fido2-server) |
| [daangn/graplix](https://github.com/daangn/graplix) | 보안/거버넌스/안전 | 281 | 84 | 92 | TypeScript | monorepo, cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/daangn__graplix.md) / [보고서](../../../korea-trending/repositories/daangn__graplix.md) / [소스](../../../../sources/daangn__graplix) |
| [line/garr](https://github.com/line/garr) | 보안/거버넌스/안전 | 212 | 80 | 371 | Go | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/line__garr.md) / [보고서](../../../korea-trending/repositories/line__garr.md) / [소스](../../../../sources/line__garr) |
| [naver/disco](https://github.com/naver/disco) | 보안/거버넌스/안전 | 205 | 72 | 75 | Python | agent-runtime, spec-artifacts, tests-evals, model-runtime | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/naver__disco.md) / [보고서](../../../korea-trending/repositories/naver__disco.md) / [소스](../../../../sources/naver__disco) |
| [line/seed](https://github.com/line/seed) | 보안/거버넌스/안전 | 205 | 70 | 61 | Makefile | retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 15000개 파일에서 스캔이 잘림, entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/line__seed.md) / [보고서](../../../korea-trending/repositories/line__seed.md) / [소스](../../../../sources/line__seed) |
| [line/webauthn-kotlin](https://github.com/line/webauthn-kotlin) | 보안/거버넌스/안전 | 168 | 69 | 24 | Kotlin | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/line__webauthn-kotlin.md) / [보고서](../../../korea-trending/repositories/line__webauthn-kotlin.md) / [소스](../../../../sources/line__webauthn-kotlin) |
| [guardrails-ai/guardrails](https://github.com/guardrails-ai/guardrails) | 보안/거버넌스/안전 | 156 | 0 | 0 | unknown | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/guardrails-ai__guardrails.md) / [보고서](../../../clone-structures/guardrails-ai__guardrails.md) / [소스](../../../../sources/guardrails-ai__guardrails) |


## 위험 신호 Watchlist

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [line/line-fido2-server](https://github.com/line/line-fido2-server) | 보안/거버넌스/안전 | 293 | 105 | 580 | Java | retrieval-memory, tests-evals, security-policy, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/line__line-fido2-server.md) / [보고서](../../../korea-trending/repositories/line__line-fido2-server.md) / [소스](../../../../sources/line__line-fido2-server) |
| [line/garr](https://github.com/line/garr) | 보안/거버넌스/안전 | 212 | 80 | 371 | Go | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/line__garr.md) / [보고서](../../../korea-trending/repositories/line__garr.md) / [소스](../../../../sources/line__garr) |
| [naver/disco](https://github.com/naver/disco) | 보안/거버넌스/안전 | 205 | 72 | 75 | Python | agent-runtime, spec-artifacts, tests-evals, model-runtime | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/naver__disco.md) / [보고서](../../../korea-trending/repositories/naver__disco.md) / [소스](../../../../sources/naver__disco) |
| [line/seed](https://github.com/line/seed) | 보안/거버넌스/안전 | 205 | 70 | 61 | Makefile | retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 15000개 파일에서 스캔이 잘림, entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/line__seed.md) / [보고서](../../../korea-trending/repositories/line__seed.md) / [소스](../../../../sources/line__seed) |
| [line/webauthn-kotlin](https://github.com/line/webauthn-kotlin) | 보안/거버넌스/안전 | 168 | 69 | 24 | Kotlin | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/line__webauthn-kotlin.md) / [보고서](../../../korea-trending/repositories/line__webauthn-kotlin.md) / [소스](../../../../sources/line__webauthn-kotlin) |
| [guardrails-ai/guardrails](https://github.com/guardrails-ai/guardrails) | 보안/거버넌스/안전 | 156 | 0 | 0 | unknown | cli-first, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, model-runtime, observability | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/guardrails-ai__guardrails.md) / [보고서](../../../clone-structures/guardrails-ai__guardrails.md) / [소스](../../../../sources/guardrails-ai__guardrails) |
