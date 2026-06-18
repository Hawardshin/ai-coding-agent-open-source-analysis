# pgvector/pgvector 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 150 files, 11 directories.

## 요약

- 조사 단위: `sources/pgvector__pgvector` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 150 files, 11 directories, depth score 73, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

데이터/벡터 플랫폼 관점에서 retrieval/vector path, eval/test harness, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 retrieval=vector.control, test/t/003_ivfflat_vector_build_recall.pl, test/t/004_ivfflat_vector_insert_recall.pl이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | pgvector/pgvector |
| 주제 | 데이터/벡터 플랫폼 / 데이터/벡터 플랫폼 |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/pgvector__pgvector](../../../../sources/pgvector__pgvector) |
| 기존 보고서 | [reports/clone-structures/pgvector__pgvector.md](../../../clone-structures/pgvector__pgvector.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 150 / 11 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, sql, src, test |
| 상위 확장자 | .sql: 51, .pl: 45, .c: 19, .out: 14, .h: 8, (none): 5, .md: 2, .pm: 2, .control: 1, .json: 1, .win: 1, .yml: 1 |
| 소스 패턴 | retrieval/vector path, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| sql | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | all | make all |
| quality | Makefile | prove_installcheck | make prove_installcheck |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | dist | make dist |
| utility | Makefile | .PHONY | make .PHONY |
| container | Makefile | docker | make docker |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | docker-release | make docker-release |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | docker-release-trixie | make docker-release-trixie |


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
| retrieval | [vector.control](../../../../sources/pgvector__pgvector/vector.control) | retrieval signal |
| retrieval | [test/t/003_ivfflat_vector_build_recall.pl](../../../../sources/pgvector__pgvector/test/t/003_ivfflat_vector_build_recall.pl) | retrieval signal |
| retrieval | [test/t/004_ivfflat_vector_insert_recall.pl](../../../../sources/pgvector__pgvector/test/t/004_ivfflat_vector_insert_recall.pl) | retrieval signal |
| retrieval | [test/t/012_hnsw_vector_build_recall.pl](../../../../sources/pgvector__pgvector/test/t/012_hnsw_vector_build_recall.pl) | retrieval signal |
| container | [Dockerfile](../../../../sources/pgvector__pgvector/Dockerfile) | container signal |
| config | [Makefile](../../../../sources/pgvector__pgvector/Makefile) | config signal |
| ci | [.github/workflows/build.yml](../../../../sources/pgvector__pgvector/.github/workflows/build.yml) | ci support |
| eval | [test/t/001_ivfflat_wal.pl](../../../../sources/pgvector__pgvector/test/t/001_ivfflat_wal.pl) | eval support |
| eval | [test/t/002_ivfflat_vacuum.pl](../../../../sources/pgvector__pgvector/test/t/002_ivfflat_vacuum.pl) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 53 | [vector.control](../../../../sources/pgvector__pgvector/vector.control)<br>[test/t/003_ivfflat_vector_build_recall.pl](../../../../sources/pgvector__pgvector/test/t/003_ivfflat_vector_build_recall.pl)<br>[test/t/004_ivfflat_vector_insert_recall.pl](../../../../sources/pgvector__pgvector/test/t/004_ivfflat_vector_insert_recall.pl)<br>[test/t/012_hnsw_vector_build_recall.pl](../../../../sources/pgvector__pgvector/test/t/012_hnsw_vector_build_recall.pl)<br>[test/t/013_hnsw_vector_insert_recall.pl](../../../../sources/pgvector__pgvector/test/t/013_hnsw_vector_insert_recall.pl)<br>[test/t/014_hnsw_vector_vacuum_recall.pl](../../../../sources/pgvector__pgvector/test/t/014_hnsw_vector_vacuum_recall.pl)<br>[test/t/015_hnsw_vector_duplicates.pl](../../../../sources/pgvector__pgvector/test/t/015_hnsw_vector_duplicates.pl)<br>[test/t/045_hnsw_low_memory_build.pl](../../../../sources/pgvector__pgvector/test/t/045_hnsw_low_memory_build.pl) |
| spec | 0 | 명확하지 않음 |
| eval | 75 | [test/t/001_ivfflat_wal.pl](../../../../sources/pgvector__pgvector/test/t/001_ivfflat_wal.pl)<br>[test/t/002_ivfflat_vacuum.pl](../../../../sources/pgvector__pgvector/test/t/002_ivfflat_vacuum.pl)<br>[test/t/003_ivfflat_vector_build_recall.pl](../../../../sources/pgvector__pgvector/test/t/003_ivfflat_vector_build_recall.pl)<br>[test/t/004_ivfflat_vector_insert_recall.pl](../../../../sources/pgvector__pgvector/test/t/004_ivfflat_vector_insert_recall.pl)<br>[test/t/005_ivfflat_query_recall.pl](../../../../sources/pgvector__pgvector/test/t/005_ivfflat_query_recall.pl)<br>[test/t/006_ivfflat_lists.pl](../../../../sources/pgvector__pgvector/test/t/006_ivfflat_lists.pl)<br>[test/t/007_ivfflat_inserts.pl](../../../../sources/pgvector__pgvector/test/t/007_ivfflat_inserts.pl)<br>[test/t/008_ivfflat_centers.pl](../../../../sources/pgvector__pgvector/test/t/008_ivfflat_centers.pl) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/build.yml](../../../../sources/pgvector__pgvector/.github/workflows/build.yml) |
| container | 1 | [Dockerfile](../../../../sources/pgvector__pgvector/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/pgvector__pgvector/README.md) |
| config | 1 | [Makefile](../../../../sources/pgvector__pgvector/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 75 | [test/t/001_ivfflat_wal.pl](../../../../sources/pgvector__pgvector/test/t/001_ivfflat_wal.pl)<br>[test/t/002_ivfflat_vacuum.pl](../../../../sources/pgvector__pgvector/test/t/002_ivfflat_vacuum.pl)<br>[test/t/003_ivfflat_vector_build_recall.pl](../../../../sources/pgvector__pgvector/test/t/003_ivfflat_vector_build_recall.pl)<br>[test/t/004_ivfflat_vector_insert_recall.pl](../../../../sources/pgvector__pgvector/test/t/004_ivfflat_vector_insert_recall.pl)<br>[test/t/005_ivfflat_query_recall.pl](../../../../sources/pgvector__pgvector/test/t/005_ivfflat_query_recall.pl)<br>[test/t/006_ivfflat_lists.pl](../../../../sources/pgvector__pgvector/test/t/006_ivfflat_lists.pl) |
| CI workflow | 1 | [.github/workflows/build.yml](../../../../sources/pgvector__pgvector/.github/workflows/build.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/pgvector__pgvector/Dockerfile) |
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

1. 핵심 참조에서 시작: `vector.control`, `test/t/003_ivfflat_vector_build_recall.pl`, `test/t/004_ivfflat_vector_insert_recall.pl`.
2. retrieval/memory/indexing 확인: `vector.control`, `test/t/003_ivfflat_vector_build_recall.pl`, `test/t/004_ivfflat_vector_insert_recall.pl`.
3. test/eval 파일로 동작 검증: `test/t/001_ivfflat_wal.pl`, `test/t/002_ivfflat_vacuum.pl`, `test/t/003_ivfflat_vector_build_recall.pl`.

## 기존 레포 인사이트

데이터/벡터 플랫폼 관점에서 Local clone structure analysis 150 files, 11 directories.. 핵심 구조 신호는 Dockerfile, Makefile, README.md, LICENSE, tests, ci이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 데이터/벡터 플랫폼 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
