# naver/arcus-java-client 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

ARCUS Java client

## 요약

- 조사 단위: `sources/naver__arcus-java-client` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 603 files, 66 directories, depth score 75, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, eval/test harness, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, docs/arcus-java-client-getting-started.md, docs/user-guide/01-arcus-cloud-basics.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/arcus-java-client |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 55 |
| Forks | 49 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__arcus-java-client](../../../../sources/naver__arcus-java-client) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__arcus-java-client.md](../../../korea-trending/repositories/naver__arcus-java-client.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 603 / 66 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, devtools, docs, etc, src, xdocs |
| 상위 확장자 | .java: 555, .md: 20, .html: 12, (none): 6, .xml: 5, .graffle: 1, .png: 1, .sh: 1, .txt-spymemcached: 1, .yml: 1 |
| 소스 패턴 | retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 48 |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| devtools | top-level component | 1 |
| etc | top-level component | 1 |
| xdocs | documentation surface | 1 |


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
| docs | [README.md](../../../../sources/naver__arcus-java-client/README.md) | docs signal |
| docs | [docs/arcus-java-client-getting-started.md](../../../../sources/naver__arcus-java-client/docs/arcus-java-client-getting-started.md) | docs signal |
| docs | [docs/user-guide/01-arcus-cloud-basics.md](../../../../sources/naver__arcus-java-client/docs/user-guide/01-arcus-cloud-basics.md) | docs signal |
| docs | [docs/user-guide/02-arcus-java-client.md](../../../../sources/naver__arcus-java-client/docs/user-guide/02-arcus-java-client.md) | docs signal |
| eval | [src/test/resources/log4j2.xml](../../../../sources/naver__arcus-java-client/src/test/resources/log4j2.xml) | eval signal |
| eval | [src/test/manual/net/spy/memcached/ArcusClientConnectTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientConnectTest.java) | eval signal |
| eval | [src/test/manual/net/spy/memcached/ArcusClientCreateTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientCreateTest.java) | eval signal |
| eval | [src/test/manual/net/spy/memcached/ArcusClientFrontCacheTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientFrontCacheTest.java) | eval signal |
| ci | [.github/workflows/ci.yml](../../../../sources/naver__arcus-java-client/.github/workflows/ci.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [xdocs/index.xml](../../../../sources/naver__arcus-java-client/xdocs/index.xml) |
| spec | 0 | 명확하지 않음 |
| eval | 216 | [src/test/resources/log4j2.xml](../../../../sources/naver__arcus-java-client/src/test/resources/log4j2.xml)<br>[src/test/manual/net/spy/memcached/ArcusClientConnectTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientConnectTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientCreateTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientCreateTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientFrontCacheTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientFrontCacheTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientNotExistsServiceCodeTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientNotExistsServiceCodeTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientPoolCreateTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientPoolCreateTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientPoolReconnectTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientPoolReconnectTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientPoolShutdownTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientPoolShutdownTest.java) |
| security | 7 | [src/main/java/net/spy/memcached/auth/AuthDescriptor.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/AuthDescriptor.java)<br>[src/main/java/net/spy/memcached/auth/AuthException.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/AuthException.java)<br>[src/main/java/net/spy/memcached/auth/package.html](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/package.html)<br>[src/main/java/net/spy/memcached/auth/PlainCallbackHandler.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/PlainCallbackHandler.java)<br>[src/main/java/net/spy/memcached/auth/ScramMechanism.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/ScramMechanism.java)<br>[src/main/java/net/spy/memcached/auth/ScramSaslClient.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/ScramSaslClient.java)<br>[src/main/java/net/spy/memcached/auth/ScramSaslClientProvider.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/ScramSaslClientProvider.java) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/naver__arcus-java-client/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 18 | [README.md](../../../../sources/naver__arcus-java-client/README.md)<br>[docs/arcus-java-client-getting-started.md](../../../../sources/naver__arcus-java-client/docs/arcus-java-client-getting-started.md)<br>[docs/user-guide/01-arcus-cloud-basics.md](../../../../sources/naver__arcus-java-client/docs/user-guide/01-arcus-cloud-basics.md)<br>[docs/user-guide/02-arcus-java-client.md](../../../../sources/naver__arcus-java-client/docs/user-guide/02-arcus-java-client.md)<br>[docs/user-guide/03-key-value-API.md](../../../../sources/naver__arcus-java-client/docs/user-guide/03-key-value-API.md)<br>[docs/user-guide/04-list-API.md](../../../../sources/naver__arcus-java-client/docs/user-guide/04-list-API.md)<br>[docs/user-guide/05-set-API.md](../../../../sources/naver__arcus-java-client/docs/user-guide/05-set-API.md)<br>[docs/user-guide/06-map-API.md](../../../../sources/naver__arcus-java-client/docs/user-guide/06-map-API.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 216 | [src/test/resources/log4j2.xml](../../../../sources/naver__arcus-java-client/src/test/resources/log4j2.xml)<br>[src/test/manual/net/spy/memcached/ArcusClientConnectTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientConnectTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientCreateTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientCreateTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientFrontCacheTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientFrontCacheTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientNotExistsServiceCodeTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientNotExistsServiceCodeTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientPoolCreateTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientPoolCreateTest.java) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/naver__arcus-java-client/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 7 | [src/main/java/net/spy/memcached/auth/AuthDescriptor.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/AuthDescriptor.java)<br>[src/main/java/net/spy/memcached/auth/AuthException.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/AuthException.java)<br>[src/main/java/net/spy/memcached/auth/package.html](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/package.html)<br>[src/main/java/net/spy/memcached/auth/PlainCallbackHandler.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/PlainCallbackHandler.java)<br>[src/main/java/net/spy/memcached/auth/ScramMechanism.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/ScramMechanism.java)<br>[src/main/java/net/spy/memcached/auth/ScramSaslClient.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/ScramSaslClient.java) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `README.md`, `docs/arcus-java-client-getting-started.md`, `docs/user-guide/01-arcus-cloud-basics.md`.
2. retrieval/memory/indexing 확인: `xdocs/index.xml`.
3. test/eval 파일로 동작 검증: `src/test/resources/log4j2.xml`, `src/test/manual/net/spy/memcached/ArcusClientConnectTest.java`, `src/test/manual/net/spy/memcached/ArcusClientCreateTest.java`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 ARCUS Java client. 핵심 구조 신호는 Java, pom.xml, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
