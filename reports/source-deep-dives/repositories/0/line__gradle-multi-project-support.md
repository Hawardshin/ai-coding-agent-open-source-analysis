# line/gradle-multi-project-support 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

A collection of Gradle plugins to maintain the multi-project or multi-application in the mono-repo.

## 요약

- 조사 단위: `sources/line__gradle-multi-project-support` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 50 files, 69 directories, depth score 50, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, recursive-git-log-plugin/README.md, build-recipe-plugin/README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/gradle-multi-project-support |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Kotlin |
| Stars | 88 |
| Forks | 15 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__gradle-multi-project-support](../../../../sources/line__gradle-multi-project-support) |
| 기존 보고서 | [reports/korea-trending/repositories/line__gradle-multi-project-support.md](../../../korea-trending/repositories/line__gradle-multi-project-support.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 50 / 69 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .github, build-recipe-plugin, gradle, recursive-git-log-plugin |
| 상위 확장자 | .kt: 12, .properties: 10, .md: 7, .kts: 6, (none): 5, .log: 3, .yml: 3, .gradle: 2, .bat: 1, .jar: 1 |
| 소스 패턴 | eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| build-recipe-plugin | ci surface | 1 |
| gradle | top-level component | 1 |
| recursive-git-log-plugin | top-level component | 1 |


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
| docs | [README.md](../../../../sources/line__gradle-multi-project-support/README.md) | docs signal |
| docs | [recursive-git-log-plugin/README.md](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/README.md) | docs signal |
| docs | [build-recipe-plugin/README.md](../../../../sources/line__gradle-multi-project-support/build-recipe-plugin/README.md) | docs signal |
| eval | [recursive-git-log-plugin/src/test/resources/.gitKeep](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/.gitKeep) | eval signal |
| eval | [recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.2.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.2.log) | eval signal |
| eval | [recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.3.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.3.log) | eval signal |
| eval | [recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.2_v0.0.3.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.2_v0.0.3.log) | eval signal |
| ci | [.github/workflows/publish.yml](../../../../sources/line__gradle-multi-project-support/.github/workflows/publish.yml) | ci support |
| ci | [.github/workflows/pull-request.yml](../../../../sources/line__gradle-multi-project-support/.github/workflows/pull-request.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 19 | [recursive-git-log-plugin/src/test/resources/.gitKeep](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/.gitKeep)<br>[recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.2.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.2.log)<br>[recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.3.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.3.log)<br>[recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.2_v0.0.3.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.2_v0.0.3.log)<br>[recursive-git-log-plugin/src/test/kotlin/com/linecorp/support/project/multi/log/git/recursive/FunctionalTest.kt](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/kotlin/com/linecorp/support/project/multi/log/git/recursive/FunctionalTest.kt)<br>[build-recipe-plugin/src/test/resources/kotlin-dsl/build.gradle.kts](../../../../sources/line__gradle-multi-project-support/build-recipe-plugin/src/test/resources/kotlin-dsl/build.gradle.kts)<br>[build-recipe-plugin/src/test/resources/kotlin-dsl/settings.gradle.kts](../../../../sources/line__gradle-multi-project-support/build-recipe-plugin/src/test/resources/kotlin-dsl/settings.gradle.kts)<br>[build-recipe-plugin/src/test/resources/juice/api/server/gradle.properties](../../../../sources/line__gradle-multi-project-support/build-recipe-plugin/src/test/resources/juice/api/server/gradle.properties) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/publish.yml](../../../../sources/line__gradle-multi-project-support/.github/workflows/publish.yml)<br>[.github/workflows/pull-request.yml](../../../../sources/line__gradle-multi-project-support/.github/workflows/pull-request.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/line__gradle-multi-project-support/README.md)<br>[recursive-git-log-plugin/README.md](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/README.md)<br>[build-recipe-plugin/README.md](../../../../sources/line__gradle-multi-project-support/build-recipe-plugin/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 19 | [recursive-git-log-plugin/src/test/resources/.gitKeep](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/.gitKeep)<br>[recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.2.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.2.log)<br>[recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.3.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.3.log)<br>[recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.2_v0.0.3.log](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.2_v0.0.3.log)<br>[recursive-git-log-plugin/src/test/kotlin/com/linecorp/support/project/multi/log/git/recursive/FunctionalTest.kt](../../../../sources/line__gradle-multi-project-support/recursive-git-log-plugin/src/test/kotlin/com/linecorp/support/project/multi/log/git/recursive/FunctionalTest.kt)<br>[build-recipe-plugin/src/test/resources/kotlin-dsl/build.gradle.kts](../../../../sources/line__gradle-multi-project-support/build-recipe-plugin/src/test/resources/kotlin-dsl/build.gradle.kts) |
| CI workflow | 2 | [.github/workflows/publish.yml](../../../../sources/line__gradle-multi-project-support/.github/workflows/publish.yml)<br>[.github/workflows/pull-request.yml](../../../../sources/line__gradle-multi-project-support/.github/workflows/pull-request.yml) |
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

1. 핵심 참조에서 시작: `README.md`, `recursive-git-log-plugin/README.md`, `build-recipe-plugin/README.md`.
2. test/eval 파일로 동작 검증: `recursive-git-log-plugin/src/test/resources/.gitKeep`, `recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.2.log`, `recursive-git-log-plugin/src/test/resources/assertion/change_log_v0.0.1_v0.0.3.log`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A collection of Gradle plugins to maintain the multi project or multi application in the mono repo.. 핵심 구조 신호는 Kotlin, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
