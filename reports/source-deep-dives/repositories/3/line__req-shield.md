# line/req-shield 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The Req-Shield is a lib that regulates the cache-based requests an application receives in terms of request-collapsing

## 요약

- 조사 단위: `sources/line__req-shield` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 143 files, 319 directories, depth score 75, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, eval/test harness, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/req-shield |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Kotlin |
| Stars | 20 |
| Forks | 5 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__req-shield](../../../../sources/line__req-shield) |
| 기존 보고서 | [reports/korea-trending/repositories/line__req-shield.md](../../../korea-trending/repositories/line__req-shield.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 143 / 319 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .github, core, core-kotlin-coroutine, core-reactor, core-spring, core-spring-webflux, core-spring-webflux-kotlin-coroutine, docker, gradle, req-shield-spring-boot3-example, req-shield-spring-boot3-webflux-example, req-shield-spring-boot3-webflux-kotlin-coroutine-example, req-shield-spring-example, req-shield-spring-webflux-example, req-shield-spring-webflux-kotlin-coroutine-example, support |
| 상위 확장자 | .kt: 91, .kts: 15, .yml: 15, .md: 5, (none): 4, .factories: 3, .imports: 3, .properties: 2, .bat: 1, .jar: 1, .toml: 1, .xml: 1 |
| 소스 패턴 | agent/tool runtime, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| core | top-level component | 1 |
| core-kotlin-coroutine | top-level component | 1 |
| core-reactor | top-level component | 1 |
| core-spring | top-level component | 1 |
| core-spring-webflux | source boundary | 1 |
| core-spring-webflux-kotlin-coroutine | source boundary | 1 |
| docker | documentation surface | 1 |
| gradle | top-level component | 1 |
| req-shield-spring-boot3-example | top-level component | 1 |
| req-shield-spring-boot3-webflux-example | source boundary | 1 |
| req-shield-spring-boot3-webflux-kotlin-coroutine-example | source boundary | 1 |
| req-shield-spring-example | top-level component | 1 |
| req-shield-spring-webflux-example | source boundary | 1 |
| req-shield-spring-webflux-kotlin-coroutine-example | source boundary | 1 |
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
| docs | [README.md](../../../../sources/line__req-shield/README.md) | docs signal |
| eval | [support/src/test/resources/logback-test.xml](../../../../sources/line__req-shield/support/src/test/resources/logback-test.xml) | eval signal |
| eval | [support/src/test/kotlin/com/linecorp/cse/reqshield/utils/support/CommonUtilsTest.kt](../../../../sources/line__req-shield/support/src/test/kotlin/com/linecorp/cse/reqshield/utils/support/CommonUtilsTest.kt) | eval signal |
| eval | [req-shield-spring-webflux-kotlin-coroutine-example/src/test/resources/application.yml](../../../../sources/line__req-shield/req-shield-spring-webflux-kotlin-coroutine-example/src/test/resources/application.yml) | eval signal |
| eval | [req-shield-spring-webflux-example/src/test/resources/application.yml](../../../../sources/line__req-shield/req-shield-spring-webflux-example/src/test/resources/application.yml) | eval signal |
| ci | [.github/workflows/actionlint.yaml](../../../../sources/line__req-shield/.github/workflows/actionlint.yaml) | ci support |
| ci | [.github/workflows/lint.yml](../../../../sources/line__req-shield/.github/workflows/lint.yml) | ci support |
| container | [docker/docker-compose.yml](../../../../sources/line__req-shield/docker/docker-compose.yml) | container support |
| instruction | [AGENTS.md](../../../../sources/line__req-shield/AGENTS.md) | instruction support |
| instruction | [CLAUDE.md](../../../../sources/line__req-shield/CLAUDE.md) | instruction support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [AGENTS.md](../../../../sources/line__req-shield/AGENTS.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 31 | [support/src/test/resources/logback-test.xml](../../../../sources/line__req-shield/support/src/test/resources/logback-test.xml)<br>[support/src/test/kotlin/com/linecorp/cse/reqshield/utils/support/CommonUtilsTest.kt](../../../../sources/line__req-shield/support/src/test/kotlin/com/linecorp/cse/reqshield/utils/support/CommonUtilsTest.kt)<br>[req-shield-spring-webflux-kotlin-coroutine-example/src/test/resources/application.yml](../../../../sources/line__req-shield/req-shield-spring-webflux-kotlin-coroutine-example/src/test/resources/application.yml)<br>[req-shield-spring-webflux-example/src/test/resources/application.yml](../../../../sources/line__req-shield/req-shield-spring-webflux-example/src/test/resources/application.yml)<br>[req-shield-spring-webflux-example/src/test/kotlin/com/linecorp/cse/reqshield/spring/webflux/example/service/CacheAnnotationTest.kt](../../../../sources/line__req-shield/req-shield-spring-webflux-example/src/test/kotlin/com/linecorp/cse/reqshield/spring/webflux/example/service/CacheAnnotationTest.kt)<br>[req-shield-spring-example/src/test/resources/application.yml](../../../../sources/line__req-shield/req-shield-spring-example/src/test/resources/application.yml)<br>[req-shield-spring-example/src/test/kotlin/com/linecorp/cse/reqshield/spring/service/CacheAnnotationTest.kt](../../../../sources/line__req-shield/req-shield-spring-example/src/test/kotlin/com/linecorp/cse/reqshield/spring/service/CacheAnnotationTest.kt)<br>[req-shield-spring-example/src/main/resources/application-performance-test.yml](../../../../sources/line__req-shield/req-shield-spring-example/src/main/resources/application-performance-test.yml) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/actionlint.yaml](../../../../sources/line__req-shield/.github/workflows/actionlint.yaml)<br>[.github/workflows/lint.yml](../../../../sources/line__req-shield/.github/workflows/lint.yml)<br>[.github/workflows/pull_request_event.yml](../../../../sources/line__req-shield/.github/workflows/pull_request_event.yml) |
| container | 1 | [docker/docker-compose.yml](../../../../sources/line__req-shield/docker/docker-compose.yml) |
| instruction | 2 | [AGENTS.md](../../../../sources/line__req-shield/AGENTS.md)<br>[CLAUDE.md](../../../../sources/line__req-shield/CLAUDE.md) |
| docs | 1 | [README.md](../../../../sources/line__req-shield/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 31 | [support/src/test/resources/logback-test.xml](../../../../sources/line__req-shield/support/src/test/resources/logback-test.xml)<br>[support/src/test/kotlin/com/linecorp/cse/reqshield/utils/support/CommonUtilsTest.kt](../../../../sources/line__req-shield/support/src/test/kotlin/com/linecorp/cse/reqshield/utils/support/CommonUtilsTest.kt)<br>[req-shield-spring-webflux-kotlin-coroutine-example/src/test/resources/application.yml](../../../../sources/line__req-shield/req-shield-spring-webflux-kotlin-coroutine-example/src/test/resources/application.yml)<br>[req-shield-spring-webflux-example/src/test/resources/application.yml](../../../../sources/line__req-shield/req-shield-spring-webflux-example/src/test/resources/application.yml)<br>[req-shield-spring-webflux-example/src/test/kotlin/com/linecorp/cse/reqshield/spring/webflux/example/service/CacheAnnotationTest.kt](../../../../sources/line__req-shield/req-shield-spring-webflux-example/src/test/kotlin/com/linecorp/cse/reqshield/spring/webflux/example/service/CacheAnnotationTest.kt)<br>[req-shield-spring-example/src/test/resources/application.yml](../../../../sources/line__req-shield/req-shield-spring-example/src/test/resources/application.yml) |
| CI workflow | 3 | [.github/workflows/actionlint.yaml](../../../../sources/line__req-shield/.github/workflows/actionlint.yaml)<br>[.github/workflows/lint.yml](../../../../sources/line__req-shield/.github/workflows/lint.yml)<br>[.github/workflows/pull_request_event.yml](../../../../sources/line__req-shield/.github/workflows/pull_request_event.yml) |
| 컨테이너/배포 | 1 | [docker/docker-compose.yml](../../../../sources/line__req-shield/docker/docker-compose.yml) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/line__req-shield/AGENTS.md)<br>[CLAUDE.md](../../../../sources/line__req-shield/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `README.md`, `support/src/test/resources/logback-test.xml`, `support/src/test/kotlin/com/linecorp/cse/reqshield/utils/support/CommonUtilsTest.kt`.
2. agent/tool runtime 매핑: `AGENTS.md`.
3. test/eval 파일로 동작 검증: `support/src/test/resources/logback-test.xml`, `support/src/test/kotlin/com/linecorp/cse/reqshield/utils/support/CommonUtilsTest.kt`, `req-shield-spring-webflux-kotlin-coroutine-example/src/test/resources/application.yml`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 The Req Shield is a lib that regulates the cache based requests an application receives in terms of request collapsing. 핵심 구조 신호는 Kotlin, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
