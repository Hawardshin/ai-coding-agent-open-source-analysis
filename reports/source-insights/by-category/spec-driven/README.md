# 스펙 드리븐/요구사항 소스 인사이트

생성 시각: 2026-06-18T15:38:52.828Z

요구사항, ADR, 설계 문서, 스펙 산출물, acceptance/test trace

## 요약

- 조사 단위: 스펙 드리븐/요구사항 카테고리에 속한 5개 source-scanned 레포입니다.
- 포함 범위: trend-linked 0개, key source reference 38개, median source depth 72입니다.
- 탐색 방식: 카테고리 인사이트를 먼저 보고, 상위 레포 비교의 소스 딥다이브 링크를 따라 구현 근거를 확인합니다.

## 총평

스펙 드리븐/요구사항 카테고리는 5개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 0%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

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

- 스펙 드리븐/요구사항 카테고리는 5개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 0%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 agent/tool runtime (3), eval/test harness (3), spec/docs-driven (3)이고, 파일 근거 bucket은 docs (5), agentRuntime (3), eval (3), spec (3) 순서로 강합니다.
- RAG, memory, vector/index 경로가 40%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 60%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 60%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.

## 이 카테고리 비교 총평

| 항목 | 판단 |
| --- | --- |
| 읽는 목적 | 요구사항, 설계 문서, acceptance/test trace를 장기 기억으로 남기는 방식 비교에 쓴다. |
| 강점 | agent-runtime 60%, spec-artifacts 60%가 주요 강점 |
| 약점/검증 포인트 | 트렌드 연결률 0%라 현재성 검증 필요; security/policy 경로 20%; CI 경로 40% |
| 대표 feature | agent-runtime 60%, spec-artifacts 60%, tests-evals 60%, retrieval-memory 40%, agent-instructions 20% |
| 대표 bucket | docs 100%, agentRuntime 60%, eval 60%, spec 60%, ci 40% |
| 대표 언어 | Shell 2, Python 1, TypeScript 1 |
| 소스 근거 위치 | 소스 근거가 평균보다 얕음, 레포당 핵심 참조 7.6개 |
| 결론 | 요구사항, 설계 문서, acceptance/test trace를 장기 기억으로 남기는 방식 비교에 쓴다. 먼저 https-deeplearning-ai/sc-spec-driven-development-files를 구조 기준점으로 보고, 현재성은 https-deeplearning-ai/sc-spec-driven-development-files와 대조한다. |

## 트렌드/소스 지표

| 항목 | 값 |
| --- | --- |
| 레포 수 | 5 |
| 트렌드 연결 레포 | 0 |
| 글로벌 / 한국 트렌드 수 | 0 / 0 |
| 글로벌/한국 동시 포착 | 0 |
| 최대 / 중앙 트렌드 점수 | 0 / 0 |
| 전체 / 중앙 stars | 537 / 92 |
| 핵심 소스 참조 | 38 |
| 중앙 파일 수 | 33 |

## 소스 feature 분포

### 주요 feature

| 신호 | 수 |
| --- | ---: |
| agent-runtime | 3 |
| spec-artifacts | 3 |
| tests-evals | 3 |
| retrieval-memory | 2 |
| agent-instructions | 1 |
| api/server | 1 |
| cli-first | 1 |
| security-policy | 1 |


### 구조 패턴

| 신호 | 수 |
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


### 근거 bucket coverage

| 신호 | 수 |
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


### 의존성 그룹

_감지된 신호가 없습니다._


### 명령 표면

| 신호 | 수 |
| --- | ---: |
| quality | 1 |
| utility | 1 |


### 위험 카테고리

_감지된 신호가 없습니다._


## 상위 트렌드 레포

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [https-deeplearning-ai/sc-spec-driven-development-files](https://github.com/https-deeplearning-ai/sc-spec-driven-development-files) | 스펙 드리븐/요구사항 | 176 | 0 | 213 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/https-deeplearning-ai__sc-spec-driven-development-files.md) / [보고서](../../../clone-structures/https-deeplearning-ai__sc-spec-driven-development-files.md) / [소스](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files) |
| [tesslio/spec-driven-development-tile](https://github.com/tesslio/spec-driven-development-tile) | 스펙 드리븐/요구사항 | 152 | 0 | 40 | Shell | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/tesslio__spec-driven-development-tile.md) / [보고서](../../../clone-structures/tesslio__spec-driven-development-tile.md) / [소스](../../../../sources/tesslio__spec-driven-development-tile) |
| [FredAntB/Spec-Driven-Development](https://github.com/FredAntB/Spec-Driven-Development) | 스펙 드리븐/요구사항 | 140 | 0 | 92 | Python | agent-runtime, spec-artifacts, tests-evals, agent-instructions | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/FredAntB__Spec-Driven-Development.md) / [보고서](../../../clone-structures/FredAntB__Spec-Driven-Development.md) / [소스](../../../../sources/FredAntB__Spec-Driven-Development) |
| [Engineering4AI/awesome-spec-driven-development](https://github.com/Engineering4AI/awesome-spec-driven-development) | 스펙 드리븐/요구사항 | 43 | 0 | 182 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/Engineering4AI__awesome-spec-driven-development.md) / [보고서](../../../clone-structures/Engineering4AI__awesome-spec-driven-development.md) / [소스](../../../../sources/Engineering4AI__awesome-spec-driven-development) |
| [mreferre/ralph-loop-kiro-specs](https://github.com/mreferre/ralph-loop-kiro-specs) | 스펙 드리븐/요구사항 | 28 | 0 | 10 | Shell |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/mreferre__ralph-loop-kiro-specs.md) / [보고서](../../../clone-structures/mreferre__ralph-loop-kiro-specs.md) / [소스](../../../../sources/mreferre__ralph-loop-kiro-specs) |


## 대표 레포 판단표

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 언어 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 위험/확인 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- | --- | --- |
| 1 | [https-deeplearning-ai/sc-spec-driven-development-files](https://github.com/https-deeplearning-ai/sc-spec-driven-development-files) | 176 | 0 | TypeScript | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 소스 깊이 우위; 핵심 파일 참조 충분; 대표 feature 일치: agent-runtime, retrieval-memory, spec-artifacts | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/https-deeplearning-ai__sc-spec-driven-development-files.md) / [보고서](../../../clone-structures/https-deeplearning-ai__sc-spec-driven-development-files.md) / [소스](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files) |
| 2 | [tesslio/spec-driven-development-tile](https://github.com/tesslio/spec-driven-development-tile) | 152 | 0 | Shell | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 소스 깊이 우위; 핵심 파일 참조 충분; 대표 feature 일치: agent-runtime, retrieval-memory, spec-artifacts | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/tesslio__spec-driven-development-tile.md) / [보고서](../../../clone-structures/tesslio__spec-driven-development-tile.md) / [소스](../../../../sources/tesslio__spec-driven-development-tile) |
| 3 | [FredAntB/Spec-Driven-Development](https://github.com/FredAntB/Spec-Driven-Development) | 140 | 0 | Python | spec/요구사항 산출물, 검증 표면, agent-native 개발 지시문 | 카테고리 중앙값보다 비교 점수 높음; 소스 깊이 우위; 핵심 파일 참조 충분; 대표 feature 일치: agent-runtime, spec-artifacts, tests-evals | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/FredAntB__Spec-Driven-Development.md) / [보고서](../../../clone-structures/FredAntB__Spec-Driven-Development.md) / [소스](../../../../sources/FredAntB__Spec-Driven-Development) |
| 4 | [Engineering4AI/awesome-spec-driven-development](https://github.com/Engineering4AI/awesome-spec-driven-development) | 43 | 0 | unknown | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | 확인 필요: entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/Engineering4AI__awesome-spec-driven-development.md) / [보고서](../../../clone-structures/Engineering4AI__awesome-spec-driven-development.md) / [소스](../../../../sources/Engineering4AI__awesome-spec-driven-development) |
| 5 | [mreferre/ralph-loop-kiro-specs](https://github.com/mreferre/ralph-loop-kiro-specs) | 28 | 0 | Shell | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | 확인 필요: entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/mreferre__ralph-loop-kiro-specs.md) / [보고서](../../../clone-structures/mreferre__ralph-loop-kiro-specs.md) / [소스](../../../../sources/mreferre__ralph-loop-kiro-specs) |


## 상위 레포 비교

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [https-deeplearning-ai/sc-spec-driven-development-files](https://github.com/https-deeplearning-ai/sc-spec-driven-development-files) | 스펙 드리븐/요구사항 | 176 | 0 | 213 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/https-deeplearning-ai__sc-spec-driven-development-files.md) / [보고서](../../../clone-structures/https-deeplearning-ai__sc-spec-driven-development-files.md) / [소스](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files) |
| [tesslio/spec-driven-development-tile](https://github.com/tesslio/spec-driven-development-tile) | 스펙 드리븐/요구사항 | 152 | 0 | 40 | Shell | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/tesslio__spec-driven-development-tile.md) / [보고서](../../../clone-structures/tesslio__spec-driven-development-tile.md) / [소스](../../../../sources/tesslio__spec-driven-development-tile) |
| [FredAntB/Spec-Driven-Development](https://github.com/FredAntB/Spec-Driven-Development) | 스펙 드리븐/요구사항 | 140 | 0 | 92 | Python | agent-runtime, spec-artifacts, tests-evals, agent-instructions | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/FredAntB__Spec-Driven-Development.md) / [보고서](../../../clone-structures/FredAntB__Spec-Driven-Development.md) / [소스](../../../../sources/FredAntB__Spec-Driven-Development) |
| [Engineering4AI/awesome-spec-driven-development](https://github.com/Engineering4AI/awesome-spec-driven-development) | 스펙 드리븐/요구사항 | 43 | 0 | 182 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/Engineering4AI__awesome-spec-driven-development.md) / [보고서](../../../clone-structures/Engineering4AI__awesome-spec-driven-development.md) / [소스](../../../../sources/Engineering4AI__awesome-spec-driven-development) |
| [mreferre/ralph-loop-kiro-specs](https://github.com/mreferre/ralph-loop-kiro-specs) | 스펙 드리븐/요구사항 | 28 | 0 | 10 | Shell |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/mreferre__ralph-loop-kiro-specs.md) / [보고서](../../../clone-structures/mreferre__ralph-loop-kiro-specs.md) / [소스](../../../../sources/mreferre__ralph-loop-kiro-specs) |


## 위험 신호 Watchlist

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [https-deeplearning-ai/sc-spec-driven-development-files](https://github.com/https-deeplearning-ai/sc-spec-driven-development-files) | 스펙 드리븐/요구사항 | 176 | 0 | 213 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/https-deeplearning-ai__sc-spec-driven-development-files.md) / [보고서](../../../clone-structures/https-deeplearning-ai__sc-spec-driven-development-files.md) / [소스](../../../../sources/https-deeplearning-ai__sc-spec-driven-development-files) |
| [tesslio/spec-driven-development-tile](https://github.com/tesslio/spec-driven-development-tile) | 스펙 드리븐/요구사항 | 152 | 0 | 40 | Shell | agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/tesslio__spec-driven-development-tile.md) / [보고서](../../../clone-structures/tesslio__spec-driven-development-tile.md) / [소스](../../../../sources/tesslio__spec-driven-development-tile) |
| [FredAntB/Spec-Driven-Development](https://github.com/FredAntB/Spec-Driven-Development) | 스펙 드리븐/요구사항 | 140 | 0 | 92 | Python | agent-runtime, spec-artifacts, tests-evals, agent-instructions | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/FredAntB__Spec-Driven-Development.md) / [보고서](../../../clone-structures/FredAntB__Spec-Driven-Development.md) / [소스](../../../../sources/FredAntB__Spec-Driven-Development) |
| [Engineering4AI/awesome-spec-driven-development](https://github.com/Engineering4AI/awesome-spec-driven-development) | 스펙 드리븐/요구사항 | 43 | 0 | 182 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/Engineering4AI__awesome-spec-driven-development.md) / [보고서](../../../clone-structures/Engineering4AI__awesome-spec-driven-development.md) / [소스](../../../../sources/Engineering4AI__awesome-spec-driven-development) |
| [mreferre/ralph-loop-kiro-specs](https://github.com/mreferre/ralph-loop-kiro-specs) | 스펙 드리븐/요구사항 | 28 | 0 | 10 | Shell |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/mreferre__ralph-loop-kiro-specs.md) / [보고서](../../../clone-structures/mreferre__ralph-loop-kiro-specs.md) / [소스](../../../../sources/mreferre__ralph-loop-kiro-specs) |
