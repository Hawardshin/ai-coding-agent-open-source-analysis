# Spec-Driven and Requirements Source Insights

Generated: 2026-06-18T15:12:59.248Z

requirements, ADR, design docs, spec artifacts, acceptance/test trace

## 요약

- 조사 단위: 스펙 드리븐/요구사항 카테고리에 속한 5개 source-scanned 레포입니다.
- 포함 범위: trend-linked 0개, key source reference 38개, median source depth 84입니다.
- 탐색 방식: Category Insights를 먼저 보고, Top Repository Comparison의 source deep dive 링크를 따라 구현 근거를 확인합니다.

## 총평

스펙 드리븐/요구사항 카테고리는 5개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 0%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

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

- 스펙 드리븐/요구사항 카테고리는 5개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 0%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 agent/tool runtime (3), eval/test harness (3), spec/docs-driven (3)이고, 파일 근거 bucket은 docs (5), agentRuntime (3), eval (3), spec (3) 순서로 강합니다.
- RAG, memory, vector/index 경로가 40%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 60%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 60%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.

## Trend and Source Metrics

| Field | Value |
| --- | --- |
| Repositories | 5 |
| Trend-linked repositories | 0 |
| Global / Korea trend count | 0 / 0 |
| Both global and Korea | 0 |
| Max / median trend score | 0 / 0 |
| Total / median stars | 537 / 92 |
| Key source references | 38 |
| Median file count | 33 |

## Source Feature Distribution

### Dominant Features

| Signal | Count |
| --- | ---: |
| agent-runtime | 3 |
| spec-artifacts | 3 |
| tests-evals | 3 |
| retrieval-memory | 2 |
| agent-instructions | 1 |
| api/server | 1 |
| cli-first | 1 |
| security-policy | 1 |


### Architecture Patterns

| Signal | Count |
| --- | ---: |
| agent/tool runtime | 3 |
| eval/test harness | 3 |
| spec/docs-driven | 3 |
| retrieval/vector path | 2 |
| api/server | 1 |
| cli-first | 1 |
| general source tree | 1 |
| security/policy surface | 1 |
| Shell source tree | 1 |


### Evidence Bucket Coverage

| Signal | Count |
| --- | ---: |
| docs | 5 |
| agentRuntime | 3 |
| eval | 3 |
| spec | 3 |
| ci | 2 |
| config | 2 |
| retrieval | 2 |
| entrypoints | 1 |
| instruction | 1 |
| security | 1 |


### Dependency Groups

_No signals._


### Command Surface

| Signal | Count |
| --- | ---: |
| quality | 1 |
| utility | 1 |


### Risk Categories

_No signals._


## Top Trend Repositories

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [https-deeplearning-ai/sc-spec-driven-development-files](https://github.com/https-deeplearning-ai/sc-spec-driven-development-files) | 스펙 드리븐/요구사항 | 188 | 0 | 213 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/https-deeplearning-ai__sc-spec-driven-development-files.md) / [report](../../../clone-structures/https-deeplearning-ai__sc-spec-driven-development-files.md) / [source](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files) |
| [tesslio/spec-driven-development-tile](https://github.com/tesslio/spec-driven-development-tile) | 스펙 드리븐/요구사항 | 164 | 0 | 40 | Shell | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/tesslio__spec-driven-development-tile.md) / [report](../../../clone-structures/tesslio__spec-driven-development-tile.md) / [source](../../../../sources/tesslio__spec-driven-development-tile) |
| [FredAntB/Spec-Driven-Development](https://github.com/FredAntB/Spec-Driven-Development) | 스펙 드리븐/요구사항 | 152 | 0 | 92 | Python | agent-runtime, spec-artifacts, tests-evals, agent-instructions | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/FredAntB__Spec-Driven-Development.md) / [report](../../../clone-structures/FredAntB__Spec-Driven-Development.md) / [source](../../../../sources/FredAntB__Spec-Driven-Development) |
| [Engineering4AI/awesome-spec-driven-development](https://github.com/Engineering4AI/awesome-spec-driven-development) | 스펙 드리븐/요구사항 | 55 | 0 | 182 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/0/Engineering4AI__awesome-spec-driven-development.md) / [report](../../../clone-structures/Engineering4AI__awesome-spec-driven-development.md) / [source](../../../../sources/Engineering4AI__awesome-spec-driven-development) |
| [mreferre/ralph-loop-kiro-specs](https://github.com/mreferre/ralph-loop-kiro-specs) | 스펙 드리븐/요구사항 | 40 | 0 | 10 | Shell |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/mreferre__ralph-loop-kiro-specs.md) / [report](../../../clone-structures/mreferre__ralph-loop-kiro-specs.md) / [source](../../../../sources/mreferre__ralph-loop-kiro-specs) |


## Top Repository Comparison

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [https-deeplearning-ai/sc-spec-driven-development-files](https://github.com/https-deeplearning-ai/sc-spec-driven-development-files) | 스펙 드리븐/요구사항 | 188 | 0 | 213 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/https-deeplearning-ai__sc-spec-driven-development-files.md) / [report](../../../clone-structures/https-deeplearning-ai__sc-spec-driven-development-files.md) / [source](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files) |
| [tesslio/spec-driven-development-tile](https://github.com/tesslio/spec-driven-development-tile) | 스펙 드리븐/요구사항 | 164 | 0 | 40 | Shell | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/tesslio__spec-driven-development-tile.md) / [report](../../../clone-structures/tesslio__spec-driven-development-tile.md) / [source](../../../../sources/tesslio__spec-driven-development-tile) |
| [FredAntB/Spec-Driven-Development](https://github.com/FredAntB/Spec-Driven-Development) | 스펙 드리븐/요구사항 | 152 | 0 | 92 | Python | agent-runtime, spec-artifacts, tests-evals, agent-instructions | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/FredAntB__Spec-Driven-Development.md) / [report](../../../clone-structures/FredAntB__Spec-Driven-Development.md) / [source](../../../../sources/FredAntB__Spec-Driven-Development) |
| [Engineering4AI/awesome-spec-driven-development](https://github.com/Engineering4AI/awesome-spec-driven-development) | 스펙 드리븐/요구사항 | 55 | 0 | 182 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/0/Engineering4AI__awesome-spec-driven-development.md) / [report](../../../clone-structures/Engineering4AI__awesome-spec-driven-development.md) / [source](../../../../sources/Engineering4AI__awesome-spec-driven-development) |
| [mreferre/ralph-loop-kiro-specs](https://github.com/mreferre/ralph-loop-kiro-specs) | 스펙 드리븐/요구사항 | 40 | 0 | 10 | Shell |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/mreferre__ralph-loop-kiro-specs.md) / [report](../../../clone-structures/mreferre__ralph-loop-kiro-specs.md) / [source](../../../../sources/mreferre__ralph-loop-kiro-specs) |


## Risk Watchlist

| Repository | Category | Compare score | Trend score | Stars | Language | Features | Standout | Risks | Links |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [https-deeplearning-ai/sc-spec-driven-development-files](https://github.com/https-deeplearning-ai/sc-spec-driven-development-files) | 스펙 드리븐/요구사항 | 188 | 0 | 213 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/a/https-deeplearning-ai__sc-spec-driven-development-files.md) / [report](../../../clone-structures/https-deeplearning-ai__sc-spec-driven-development-files.md) / [source](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files) |
| [tesslio/spec-driven-development-tile](https://github.com/tesslio/spec-driven-development-tile) | 스펙 드리븐/요구사항 | 164 | 0 | 40 | Shell | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/tesslio__spec-driven-development-tile.md) / [report](../../../clone-structures/tesslio__spec-driven-development-tile.md) / [source](../../../../sources/tesslio__spec-driven-development-tile) |
| [FredAntB/Spec-Driven-Development](https://github.com/FredAntB/Spec-Driven-Development) | 스펙 드리븐/요구사항 | 152 | 0 | 92 | Python | agent-runtime, spec-artifacts, tests-evals, agent-instructions | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint path not obvious | [source deep dive](../../../source-deep-dives/repositories/c/FredAntB__Spec-Driven-Development.md) / [report](../../../clone-structures/FredAntB__Spec-Driven-Development.md) / [source](../../../../sources/FredAntB__Spec-Driven-Development) |
| [Engineering4AI/awesome-spec-driven-development](https://github.com/Engineering4AI/awesome-spec-driven-development) | 스펙 드리븐/요구사항 | 55 | 0 | 182 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/0/Engineering4AI__awesome-spec-driven-development.md) / [report](../../../clone-structures/Engineering4AI__awesome-spec-driven-development.md) / [source](../../../../sources/Engineering4AI__awesome-spec-driven-development) |
| [mreferre/ralph-loop-kiro-specs](https://github.com/mreferre/ralph-loop-kiro-specs) | 스펙 드리븐/요구사항 | 40 | 0 | 10 | Shell |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint path not obvious, test/eval path not obvious, ci path not obvious | [source deep dive](../../../source-deep-dives/repositories/3/mreferre__ralph-loop-kiro-specs.md) / [report](../../../clone-structures/mreferre__ralph-loop-kiro-specs.md) / [source](../../../../sources/mreferre__ralph-loop-kiro-specs) |
