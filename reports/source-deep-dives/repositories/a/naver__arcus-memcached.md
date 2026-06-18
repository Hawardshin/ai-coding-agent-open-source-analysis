# naver/arcus-memcached 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

ARCUS memory cache server

## 요약

- 조사 단위: `sources/naver__arcus-memcached` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 338 files, 25 directories, depth score 74, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 spec/docs-driven, eval/test harness, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 docs=README, README.md, scripts/README.damemtop이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | naver/arcus-memcached |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | C |
| Stars | 76 |
| Forks | 59 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__arcus-memcached](../../../../sources/naver__arcus-memcached) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__arcus-memcached.md](../../../korea-trending/repositories/naver__arcus-memcached.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 338 / 25 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, config, deps, devtools, doc, docs, engines, include, m4, rfc1321, scripts, t, win32 |
| 상위 확장자 | .t: 99, .h: 64, .c: 59, .md: 25, (none): 22, .pl: 20, .bt: 7, .sh: 5, .txt: 5, .in: 4, .xml: 4, .conf: 3 |
| 소스 패턴 | spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 21 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| deps | top-level component | 1 |
| devtools | top-level component | 1 |
| doc | documentation surface | 1 |
| engines | top-level component | 1 |
| include | top-level component | 1 |
| m4 | top-level component | 1 |
| rfc1321 | top-level component | 1 |
| scripts | top-level component | 1 |
| t | top-level component | 1 |
| win32 | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| docs | [README](../../../../sources/naver__arcus-memcached/README) | docs signal |
| docs | [README.md](../../../../sources/naver__arcus-memcached/README.md) | docs signal |
| docs | [scripts/README.damemtop](../../../../sources/naver__arcus-memcached/scripts/README.damemtop) | docs signal |
| docs | [docs/install.md](../../../../sources/naver__arcus-memcached/docs/install.md) | docs signal |
| eval | [memcached.spec.in](../../../../sources/naver__arcus-memcached/memcached.spec.in) | eval signal |
| eval | [run_test.pl](../../../../sources/naver__arcus-memcached/run_test.pl) | eval signal |
| eval | [trace.h](../../../../sources/naver__arcus-memcached/trace.h) | eval signal |
| eval | [t/arcus_ping_test.t](../../../../sources/naver__arcus-memcached/t/arcus_ping_test.t) | eval signal |
| ci | [.github/workflows/CI.yml](../../../../sources/naver__arcus-memcached/.github/workflows/CI.yml) | ci support |
| container | [Dockerfile](../../../../sources/naver__arcus-memcached/Dockerfile) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 1 | [memcached.spec.in](../../../../sources/naver__arcus-memcached/memcached.spec.in) |
| eval | 15 | [memcached.spec.in](../../../../sources/naver__arcus-memcached/memcached.spec.in)<br>[run_test.pl](../../../../sources/naver__arcus-memcached/run_test.pl)<br>[trace.h](../../../../sources/naver__arcus-memcached/trace.h)<br>[t/arcus_ping_test.t](../../../../sources/naver__arcus-memcached/t/arcus_ping_test.t)<br>[t/coll_bkeymismatch_test.t](../../../../sources/naver__arcus-memcached/t/coll_bkeymismatch_test.t)<br>[t/coll_bkeyoor_test.t](../../../../sources/naver__arcus-memcached/t/coll_bkeyoor_test.t)<br>[t/coll_bop_position_test.bt](../../../../sources/naver__arcus-memcached/t/coll_bop_position_test.bt)<br>[t/coll_bop_smget_trim_test.t](../../../../sources/naver__arcus-memcached/t/coll_bop_smget_trim_test.t) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/CI.yml](../../../../sources/naver__arcus-memcached/.github/workflows/CI.yml) |
| container | 1 | [Dockerfile](../../../../sources/naver__arcus-memcached/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 39 | [README](../../../../sources/naver__arcus-memcached/README)<br>[README.md](../../../../sources/naver__arcus-memcached/README.md)<br>[scripts/README.damemtop](../../../../sources/naver__arcus-memcached/scripts/README.damemtop)<br>[docs/install.md](../../../../sources/naver__arcus-memcached/docs/install.md)<br>[docs/ascii-protocol/ch01-arcus-basic-concept.md](../../../../sources/naver__arcus-memcached/docs/ascii-protocol/ch01-arcus-basic-concept.md)<br>[docs/ascii-protocol/ch02-collection-items.md](../../../../sources/naver__arcus-memcached/docs/ascii-protocol/ch02-collection-items.md)<br>[docs/ascii-protocol/ch03-item-attributes.md](../../../../sources/naver__arcus-memcached/docs/ascii-protocol/ch03-item-attributes.md)<br>[docs/ascii-protocol/ch04-command-key-value.md](../../../../sources/naver__arcus-memcached/docs/ascii-protocol/ch04-command-key-value.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 15 | [memcached.spec.in](../../../../sources/naver__arcus-memcached/memcached.spec.in)<br>[run_test.pl](../../../../sources/naver__arcus-memcached/run_test.pl)<br>[trace.h](../../../../sources/naver__arcus-memcached/trace.h)<br>[t/arcus_ping_test.t](../../../../sources/naver__arcus-memcached/t/arcus_ping_test.t)<br>[t/coll_bkeymismatch_test.t](../../../../sources/naver__arcus-memcached/t/coll_bkeymismatch_test.t)<br>[t/coll_bkeyoor_test.t](../../../../sources/naver__arcus-memcached/t/coll_bkeyoor_test.t) |
| CI workflow | 1 | [.github/workflows/CI.yml](../../../../sources/naver__arcus-memcached/.github/workflows/CI.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/naver__arcus-memcached/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `README`, `README.md`, `scripts/README.damemtop`.
2. test/eval 파일로 동작 검증: `memcached.spec.in`, `run_test.pl`, `trace.h`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 ARCUS memory cache server. 핵심 구조 신호는 C, Dockerfile, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
