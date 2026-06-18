# line/kotlin-jdsl 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Kotlin library that makes it easy to build and execute queries without generated metamodel

## 요약

- 조사 단위: `sources/line__kotlin-jdsl` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 982 files, 929 directories, depth score 78, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=package.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/kotlin-jdsl |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Kotlin |
| Stars | 821 |
| Forks | 104 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__kotlin-jdsl](../../../../sources/line__kotlin-jdsl) |
| 기존 보고서 | [reports/korea-trending/repositories/line__kotlin-jdsl.md](../../../korea-trending/repositories/line__kotlin-jdsl.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 982 / 929 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .githook, .github, benchmark, docs, dsl, example, gradle, query-model, render, src, support |
| 상위 확장자 | .kt: 820, .md: 54, .kts: 39, .xml: 9, (none): 9, .yml: 7, .factories: 6, .imports: 6, .properties: 6, .bat: 5, .jar: 5, .sh: 3 |
| 소스 패턴 | spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 20 |
| src | source boundary | 5 |
| .github | ci surface | 1 |
| benchmark | validation surface | 1 |
| dsl | top-level component | 1 |
| example | top-level component | 1 |
| gradle | top-level component | 1 |
| query-model | top-level component | 1 |
| render | top-level component | 1 |
| support | top-level component | 1 |


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
| config | [package.json](../../../../sources/line__kotlin-jdsl/package.json) | config signal |
| docs | [README.md](../../../../sources/line__kotlin-jdsl/README.md) | docs signal |
| docs | [render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/Book.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/Book.kt) | docs signal |
| docs | [render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthor.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthor.kt) | docs signal |
| docs | [render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthorType.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthorType.kt) | docs signal |
| eval | [support/spring-data-jpa-boot4/src/test/kotlin/org/springframework/data/jpa/repository/query/QueryEnhancerFactoryAdaptorTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa-boot4/src/test/kotlin/org/springframework/data/jpa/repository/query/QueryEnhancerFactoryAdaptorTest.kt) | eval signal |
| eval | [support/spring-data-jpa-boot4/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa-boot4/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt) | eval signal |
| eval | [support/spring-data-jpa/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt) | eval signal |
| eval | [support/spring-batch6/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-batch6/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt) | eval signal |
| ci | [.github/workflows/lint.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/lint.yaml) | ci support |
| ci | [.github/workflows/publish.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/publish.yaml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 2 | [docs/ko/kotlin-jdsl-roadmap.md](../../../../sources/line__kotlin-jdsl/docs/ko/kotlin-jdsl-roadmap.md)<br>[docs/en/kotlin-jdsl-roadmap.md](../../../../sources/line__kotlin-jdsl/docs/en/kotlin-jdsl-roadmap.md) |
| eval | 305 | [support/spring-data-jpa-boot4/src/test/kotlin/org/springframework/data/jpa/repository/query/QueryEnhancerFactoryAdaptorTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa-boot4/src/test/kotlin/org/springframework/data/jpa/repository/query/QueryEnhancerFactoryAdaptorTest.kt)<br>[support/spring-data-jpa-boot4/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa-boot4/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-data-jpa/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-batch6/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-batch6/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-batch-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/javax/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-batch-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/javax/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-batch/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-batch/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt)<br>[support/hibernate-reactive-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/hibernate/reactive/JpqlMutinySessionUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/hibernate-reactive-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/hibernate/reactive/JpqlMutinySessionUtilsTest.kt)<br>[support/hibernate-reactive-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/hibernate/reactive/JpqlMutinyStatelessSessionUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/hibernate-reactive-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/hibernate/reactive/JpqlMutinyStatelessSessionUtilsTest.kt) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/lint.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/lint.yaml)<br>[.github/workflows/publish.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/publish.yaml)<br>[.github/workflows/test.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/test.yaml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 77 | [README.md](../../../../sources/line__kotlin-jdsl/README.md)<br>[render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/Book.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/Book.kt)<br>[render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthor.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthor.kt)<br>[render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthorType.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookAuthorType.kt)<br>[render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookPublisher.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookPublisher.kt)<br>[render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookStatus.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/BookStatus.kt)<br>[render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/Isbn.kt](../../../../sources/line__kotlin-jdsl/render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/Isbn.kt)<br>[query-model/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/querymodel/jpql/entity/book/Book.kt](../../../../sources/line__kotlin-jdsl/query-model/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/querymodel/jpql/entity/book/Book.kt) |
| config | 1 | [package.json](../../../../sources/line__kotlin-jdsl/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 305 | [support/spring-data-jpa-boot4/src/test/kotlin/org/springframework/data/jpa/repository/query/QueryEnhancerFactoryAdaptorTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa-boot4/src/test/kotlin/org/springframework/data/jpa/repository/query/QueryEnhancerFactoryAdaptorTest.kt)<br>[support/spring-data-jpa-boot4/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa-boot4/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-data-jpa/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-data-jpa/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-batch6/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-batch6/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-batch-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/javax/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-batch-javax/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/javax/JpqlEntityManagerUtilsTest.kt)<br>[support/spring-batch/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt](../../../../sources/line__kotlin-jdsl/support/spring-batch/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/batch/JpqlEntityManagerUtilsTest.kt) |
| CI workflow | 3 | [.github/workflows/lint.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/lint.yaml)<br>[.github/workflows/publish.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/publish.yaml)<br>[.github/workflows/test.yaml](../../../../sources/line__kotlin-jdsl/.github/workflows/test.yaml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `package.json`, `README.md`, `render/jpql/src/testFixtures/kotlin/com/linecorp/kotlinjdsl/render/jpql/entity/book/Book.kt`.
2. test/eval 파일로 동작 검증: `support/spring-data-jpa-boot4/src/test/kotlin/org/springframework/data/jpa/repository/query/QueryEnhancerFactoryAdaptorTest.kt`, `support/spring-data-jpa-boot4/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt`, `support/spring-data-jpa/src/test/kotlin/com/linecorp/kotlinjdsl/support/spring/data/jpa/JpqlEntityManagerUtilsTest.kt`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Kotlin library that makes it easy to build and execute queries without generated metamodel. 핵심 구조 신호는 Kotlin, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
