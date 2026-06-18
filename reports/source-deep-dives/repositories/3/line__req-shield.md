# line/req-shield Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The Req-Shield is a lib that regulates the cache-based requests an application receives in terms of request-collapsing

## 요약

- 조사 단위: `sources/line__req-shield` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 143 files, 319 directories, depth score 81, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, eval/test harness, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | line/req-shield |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Kotlin |
| Stars | 20 |
| Forks | 5 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/line__req-shield](../../../../sources/line__req-shield) |
| Existing report | [reports/korea-trending/repositories/line__req-shield.md](../../../korea-trending/repositories/line__req-shield.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 143 / 319 |
| Max observed depth | 13 |
| Top directories | .github, core, core-kotlin-coroutine, core-reactor, core-spring, core-spring-webflux, core-spring-webflux-kotlin-coroutine, docker, gradle, req-shield-spring-boot3-example, req-shield-spring-boot3-webflux-example, req-shield-spring-boot3-webflux-kotlin-coroutine-example, req-shield-spring-example, req-shield-spring-webflux-example, req-shield-spring-webflux-kotlin-coroutine-example, support |
| Top extensions | .kt: 91, .kts: 15, .yml: 15, .md: 5, (none): 4, .factories: 3, .imports: 3, .properties: 2, .bat: 1, .jar: 1, .toml: 1, .xml: 1 |
| Source patterns | agent/tool runtime, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [AGENTS.md](../../../../sources/line__req-shield/AGENTS.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 31 | [support/src/test/resources/logback-test.xml](../../../../sources/line__req-shield/support/src/test/resources/logback-test.xml)<br>[support/src/test/kotlin/com/linecorp/cse/reqshield/utils/support/CommonUtilsTest.kt](../../../../sources/line__req-shield/support/src/test/kotlin/com/linecorp/cse/reqshield/utils/support/CommonUtilsTest.kt)<br>[req-shield-spring-webflux-kotlin-coroutine-example/src/test/resources/application.yml](../../../../sources/line__req-shield/req-shield-spring-webflux-kotlin-coroutine-example/src/test/resources/application.yml)<br>[req-shield-spring-webflux-example/src/test/resources/application.yml](../../../../sources/line__req-shield/req-shield-spring-webflux-example/src/test/resources/application.yml)<br>[req-shield-spring-webflux-example/src/test/kotlin/com/linecorp/cse/reqshield/spring/webflux/example/service/CacheAnnotationTest.kt](../../../../sources/line__req-shield/req-shield-spring-webflux-example/src/test/kotlin/com/linecorp/cse/reqshield/spring/webflux/example/service/CacheAnnotationTest.kt)<br>[req-shield-spring-example/src/test/resources/application.yml](../../../../sources/line__req-shield/req-shield-spring-example/src/test/resources/application.yml)<br>[req-shield-spring-example/src/test/kotlin/com/linecorp/cse/reqshield/spring/service/CacheAnnotationTest.kt](../../../../sources/line__req-shield/req-shield-spring-example/src/test/kotlin/com/linecorp/cse/reqshield/spring/service/CacheAnnotationTest.kt)<br>[req-shield-spring-example/src/main/resources/application-performance-test.yml](../../../../sources/line__req-shield/req-shield-spring-example/src/main/resources/application-performance-test.yml) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/actionlint.yaml](../../../../sources/line__req-shield/.github/workflows/actionlint.yaml)<br>[.github/workflows/lint.yml](../../../../sources/line__req-shield/.github/workflows/lint.yml)<br>[.github/workflows/pull_request_event.yml](../../../../sources/line__req-shield/.github/workflows/pull_request_event.yml) |
| container | 1 | [docker/docker-compose.yml](../../../../sources/line__req-shield/docker/docker-compose.yml) |
| instruction | 2 | [AGENTS.md](../../../../sources/line__req-shield/AGENTS.md)<br>[CLAUDE.md](../../../../sources/line__req-shield/CLAUDE.md) |
| docs | 1 | [README.md](../../../../sources/line__req-shield/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 31 | [support/src/test/resources/logback-test.xml](../../../../sources/line__req-shield/support/src/test/resources/logback-test.xml)<br>[support/src/test/kotlin/com/linecorp/cse/reqshield/utils/support/CommonUtilsTest.kt](../../../../sources/line__req-shield/support/src/test/kotlin/com/linecorp/cse/reqshield/utils/support/CommonUtilsTest.kt)<br>[req-shield-spring-webflux-kotlin-coroutine-example/src/test/resources/application.yml](../../../../sources/line__req-shield/req-shield-spring-webflux-kotlin-coroutine-example/src/test/resources/application.yml)<br>[req-shield-spring-webflux-example/src/test/resources/application.yml](../../../../sources/line__req-shield/req-shield-spring-webflux-example/src/test/resources/application.yml)<br>[req-shield-spring-webflux-example/src/test/kotlin/com/linecorp/cse/reqshield/spring/webflux/example/service/CacheAnnotationTest.kt](../../../../sources/line__req-shield/req-shield-spring-webflux-example/src/test/kotlin/com/linecorp/cse/reqshield/spring/webflux/example/service/CacheAnnotationTest.kt)<br>[req-shield-spring-example/src/test/resources/application.yml](../../../../sources/line__req-shield/req-shield-spring-example/src/test/resources/application.yml) |
| CI workflows | 3 | [.github/workflows/actionlint.yaml](../../../../sources/line__req-shield/.github/workflows/actionlint.yaml)<br>[.github/workflows/lint.yml](../../../../sources/line__req-shield/.github/workflows/lint.yml)<br>[.github/workflows/pull_request_event.yml](../../../../sources/line__req-shield/.github/workflows/pull_request_event.yml) |
| Containers / deploy | 1 | [docker/docker-compose.yml](../../../../sources/line__req-shield/docker/docker-compose.yml) |
| Security / policy | 0 | not obvious |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/line__req-shield/AGENTS.md)<br>[CLAUDE.md](../../../../sources/line__req-shield/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `support/src/test/resources/logback-test.xml`, `support/src/test/kotlin/com/linecorp/cse/reqshield/utils/support/CommonUtilsTest.kt`.
2. Map agent/tool runtime through: `AGENTS.md`.
3. Verify behavior through test/eval files: `support/src/test/resources/logback-test.xml`, `support/src/test/kotlin/com/linecorp/cse/reqshield/utils/support/CommonUtilsTest.kt`, `req-shield-spring-webflux-kotlin-coroutine-example/src/test/resources/application.yml`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 The Req Shield is a lib that regulates the cache based requests an application receives in terms of request collapsing. 핵심 구조 신호는 Kotlin, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
