# line/req-shield

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/req-shield |
| local path | sources/line__req-shield |
| HEAD | 2e254ef |
| stars/forks | 20 / 5 |
| language | Kotlin |
| license | Apache-2.0 |
| pushedAt | 2025-12-31T14:29:49Z |
| trendScore / priorityScore | 66 / 206 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 473 | AGENTS.md, README.md, CLAUDE.md |
| Security / compliance | 89 | req-shield-spring-example/build.gradle.kts, req-shield-spring-webflux-example/build.gradle.kts, req-shield-spring-webflux-kotlin-coroutine-example/build.gradle.kts |
| LLM wiki / memory / graph | 10 | README.md, CODE_OF_CONDUCT.md, CONTRIBUTING.md |
| Spec / doc-driven workflow | 8 | README.md, CLAUDE.md, CONTRIBUTING.md |
| Infra / observability | 5 | core/src/test/kotlin/com/linecorp/cse/reqshield/KeyLocalLockShutdownTest.kt, core-kotlin-coroutine/src/main/kotlin/com/linecorp/cse/reqshield/kotlin/coroutine/KeyLocalLock.kt, core-reactor/src/main/kotlin/com/linecorp/cse/reqshield/reactor/KeyLocalLock.kt |
| AI agent / tool use | 1 |  |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, graphMemory, infra-observability, korea-signal, llm-wiki-memory, security-compliance, spec-driven, vectorSearch |
| stacks | Java/Kotlin |
| capabilities | Vector/search store, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 169 |
| manifests | 18 |
| docs | 5 |
| tests | 35 |
| ci/ops | 4 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Req-Shield |
| headings | Req-Shield / Requirements / Usage / Testing & Integration Tips / Integration tests with Redis (Testcontainers) / WebFlux null handling / Global lock guidance / Reactor Scheduler tuning / Kotlin Coroutine Parallelism Configuration / Contributing |
| excerpt | req shield has not yet been published to the maven repository, please be patient. Visit the github wiki https //github.com/line/req shield/wiki/What is Req Shield for more information. Req Shield A lib that regulates the cache based requests an application receives in terms of request collapsing. Requirements Java 8 or later if you are a user. Kotlin 1.8 or later if you are a user. If link this lib with Spring Spring Boot 2.7 Spring Framework 5.3 or later if you are a user. Usage Choose from the following based on your platform There is a detailed explanation in the wiki. implementation "com.linecorp.cse.reqshield core {version}" <br implementation "com.linecorp.cse.reqshield core reactor {v |


## 주요 파일

### Manifests

- AGENTS.md
- README.md
- CLAUDE.md
- req-shield-spring-boot3-example/build.gradle.kts
- req-shield-spring-boot3-webflux-example/build.gradle.kts
- req-shield-spring-boot3-webflux-kotlin-coroutine-example/build.gradle.kts
- req-shield-spring-example/build.gradle.kts
- req-shield-spring-webflux-example/build.gradle.kts
- req-shield-spring-webflux-kotlin-coroutine-example/build.gradle.kts
- build.gradle.kts
- core-kotlin-coroutine/build.gradle.kts
- core-reactor/build.gradle.kts
- core-spring-webflux-kotlin-coroutine/build.gradle.kts
- core-spring-webflux/build.gradle.kts
- core-spring/build.gradle.kts
- core/build.gradle.kts
- docker/docker-compose.yml
- support/build.gradle.kts


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| support | 15 |
| req-shield-spring-boot3-example | 14 |
| req-shield-spring-example | 14 |
| core-spring-webflux-kotlin-coroutine | 13 |
| core-spring-webflux | 12 |
| req-shield-spring-boot3-webflux-example | 12 |
| core | 11 |
| req-shield-spring-webflux-example | 11 |
| req-shield-spring-boot3-webflux-kotlin-coroutine-example | 10 |
| req-shield-spring-webflux-kotlin-coroutine-example | 10 |
| core-kotlin-coroutine | 9 |
| core-reactor | 9 |
| core-spring | 9 |
| .github | 3 |


## 확장자 분포

| ext | count |
| --- | --- |
| .kt | 117 |
| .kts | 15 |
| .yml | 15 |
| .md | 5 |
| [no-ext] | 4 |
| .factories | 3 |
| .imports | 3 |
| .properties | 2 |
| .bat | 1 |
| .jar | 1 |
| .toml | 1 |
| .xml | 1 |
| .yaml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
