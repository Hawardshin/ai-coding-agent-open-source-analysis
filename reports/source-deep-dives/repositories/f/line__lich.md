# line/lich 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A library collection that enhances the development of Android apps.

## 요약

- 조사 단위: `sources/line__lich` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 330 files, 422 directories, depth score 67, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, viewmodel/README.md, thrift/README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/lich |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Kotlin |
| Stars | 202 |
| Forks | 20 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__lich](../../../../sources/line__lich) |
| 기존 보고서 | [reports/korea-trending/repositories/line__lich.md](../../../korea-trending/repositories/line__lich.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 330 / 422 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .github, component, component-compose, component-debug, component-test, component-test-mockitokotlin, component-test-mockk, gradle, lifecycle, okhttp, publishing, sample_thrift, sample-app, savedstate, savedstate-compiler, static-analysis, thrift, thrift-logging, viewmodel, viewmodel-compose |
| 상위 확장자 | .kt: 175, .xml: 47, .gradle: 31, (none): 31, .md: 12, .java: 5, .webp: 5, .componentprovider: 3, .pro: 3, .properties: 3, .lichviewmodelprovider: 2, .yml: 2 |
| 소스 패턴 | retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| component | top-level component | 1 |
| component-compose | top-level component | 1 |
| component-debug | top-level component | 1 |
| component-test | validation surface | 1 |
| component-test-mockitokotlin | validation surface | 1 |
| component-test-mockk | validation surface | 1 |
| gradle | top-level component | 1 |
| lifecycle | top-level component | 1 |
| okhttp | top-level component | 1 |
| publishing | top-level component | 1 |
| sample_thrift | top-level component | 1 |
| sample-app | top-level component | 1 |
| savedstate | top-level component | 1 |
| savedstate-compiler | top-level component | 1 |
| static-analysis | top-level component | 1 |
| thrift | top-level component | 1 |
| thrift-logging | top-level component | 1 |


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
| docs | [README.md](../../../../sources/line__lich/README.md) | docs signal |
| docs | [viewmodel/README.md](../../../../sources/line__lich/viewmodel/README.md) | docs signal |
| docs | [thrift/README.md](../../../../sources/line__lich/thrift/README.md) | docs signal |
| docs | [savedstate/README.md](../../../../sources/line__lich/savedstate/README.md) | docs signal |
| eval | [viewmodel-test-mockk/.gitignore](../../../../sources/line__lich/viewmodel-test-mockk/.gitignore) | eval signal |
| eval | [viewmodel-test-mockk/build.gradle](../../../../sources/line__lich/viewmodel-test-mockk/build.gradle) | eval signal |
| eval | [viewmodel-test-mockk/src/main/AndroidManifest.xml](../../../../sources/line__lich/viewmodel-test-mockk/src/main/AndroidManifest.xml) | eval signal |
| eval | [viewmodel-test-mockk/src/main/java/com/linecorp/lich/viewmodel/test/mockk/Mocking.kt](../../../../sources/line__lich/viewmodel-test-mockk/src/main/java/com/linecorp/lich/viewmodel/test/mockk/Mocking.kt) | eval signal |
| ci | [.github/workflows/ci.yml](../../../../sources/line__lich/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/ossrh.yml](../../../../sources/line__lich/.github/workflows/ossrh.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 5 | [sample-app/app/src/main/res/navigation/child_nav_graph.xml](../../../../sources/line__lich/sample-app/app/src/main/res/navigation/child_nav_graph.xml)<br>[sample-app/app/src/main/res/navigation/main_nav_graph.xml](../../../../sources/line__lich/sample-app/app/src/main/res/navigation/main_nav_graph.xml)<br>[sample-app/app/src/main/res/layout/nav_graph_first_fragment.xml](../../../../sources/line__lich/sample-app/app/src/main/res/layout/nav_graph_first_fragment.xml)<br>[sample-app/app/src/main/res/layout/nav_graph_second_fragment.xml](../../../../sources/line__lich/sample-app/app/src/main/res/layout/nav_graph_second_fragment.xml)<br>[sample-app/app/src/main/res/layout/nav_graph_third_fragment.xml](../../../../sources/line__lich/sample-app/app/src/main/res/layout/nav_graph_third_fragment.xml) |
| spec | 0 | 명확하지 않음 |
| eval | 106 | [viewmodel-test-mockk/.gitignore](../../../../sources/line__lich/viewmodel-test-mockk/.gitignore)<br>[viewmodel-test-mockk/build.gradle](../../../../sources/line__lich/viewmodel-test-mockk/build.gradle)<br>[viewmodel-test-mockk/src/main/AndroidManifest.xml](../../../../sources/line__lich/viewmodel-test-mockk/src/main/AndroidManifest.xml)<br>[viewmodel-test-mockk/src/main/java/com/linecorp/lich/viewmodel/test/mockk/Mocking.kt](../../../../sources/line__lich/viewmodel-test-mockk/src/main/java/com/linecorp/lich/viewmodel/test/mockk/Mocking.kt)<br>[viewmodel-test-mockk/src/androidTest/AndroidManifest.xml](../../../../sources/line__lich/viewmodel-test-mockk/src/androidTest/AndroidManifest.xml)<br>[viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/BarViewModel.kt](../../../../sources/line__lich/viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/BarViewModel.kt)<br>[viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/FooViewModel.kt](../../../../sources/line__lich/viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/FooViewModel.kt)<br>[viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/MockingTest.kt](../../../../sources/line__lich/viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/MockingTest.kt) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/line__lich/.github/workflows/ci.yml)<br>[.github/workflows/ossrh.yml](../../../../sources/line__lich/.github/workflows/ossrh.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 10 | [README.md](../../../../sources/line__lich/README.md)<br>[viewmodel/README.md](../../../../sources/line__lich/viewmodel/README.md)<br>[thrift/README.md](../../../../sources/line__lich/thrift/README.md)<br>[savedstate/README.md](../../../../sources/line__lich/savedstate/README.md)<br>[sample-app/README.md](../../../../sources/line__lich/sample-app/README.md)<br>[sample_thrift/README.md](../../../../sources/line__lich/sample_thrift/README.md)<br>[publishing/README.md](../../../../sources/line__lich/publishing/README.md)<br>[okhttp/README.md](../../../../sources/line__lich/okhttp/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 106 | [viewmodel-test-mockk/.gitignore](../../../../sources/line__lich/viewmodel-test-mockk/.gitignore)<br>[viewmodel-test-mockk/build.gradle](../../../../sources/line__lich/viewmodel-test-mockk/build.gradle)<br>[viewmodel-test-mockk/src/main/AndroidManifest.xml](../../../../sources/line__lich/viewmodel-test-mockk/src/main/AndroidManifest.xml)<br>[viewmodel-test-mockk/src/main/java/com/linecorp/lich/viewmodel/test/mockk/Mocking.kt](../../../../sources/line__lich/viewmodel-test-mockk/src/main/java/com/linecorp/lich/viewmodel/test/mockk/Mocking.kt)<br>[viewmodel-test-mockk/src/androidTest/AndroidManifest.xml](../../../../sources/line__lich/viewmodel-test-mockk/src/androidTest/AndroidManifest.xml)<br>[viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/BarViewModel.kt](../../../../sources/line__lich/viewmodel-test-mockk/src/androidTest/java/com/linecorp/lich/viewmodel/test/mockk/BarViewModel.kt) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/line__lich/.github/workflows/ci.yml)<br>[.github/workflows/ossrh.yml](../../../../sources/line__lich/.github/workflows/ossrh.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요; path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `README.md`, `viewmodel/README.md`, `thrift/README.md`.
2. retrieval/memory/indexing 확인: `sample-app/app/src/main/res/navigation/child_nav_graph.xml`, `sample-app/app/src/main/res/navigation/main_nav_graph.xml`, `sample-app/app/src/main/res/layout/nav_graph_first_fragment.xml`.
3. test/eval 파일로 동작 검증: `viewmodel-test-mockk/.gitignore`, `viewmodel-test-mockk/build.gradle`, `viewmodel-test-mockk/src/main/AndroidManifest.xml`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A library collection that enhances the development of Android apps.. 핵심 구조 신호는 Kotlin, build.gradle, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
