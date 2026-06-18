# naver/arcus-java-client Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

ARCUS Java client

## 요약

- 조사 단위: `sources/naver__arcus-java-client` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 603 files, 66 directories, depth score 81, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, eval/test harness, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 docs=README.md, docs/arcus-java-client-getting-started.md, docs/user-guide/01-arcus-cloud-basics.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/arcus-java-client |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Java |
| Stars | 55 |
| Forks | 49 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__arcus-java-client](../../../../sources/naver__arcus-java-client) |
| Existing report | [reports/korea-trending/repositories/naver__arcus-java-client.md](../../../korea-trending/repositories/naver__arcus-java-client.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 603 / 66 |
| Max observed depth | 10 |
| Top directories | .github, devtools, docs, etc, src, xdocs |
| Top extensions | .java: 555, .md: 20, .html: 12, (none): 6, .xml: 5, .graffle: 1, .png: 1, .sh: 1, .txt-spymemcached: 1, .yml: 1 |
| Source patterns | retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 48 |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| devtools | top-level component | 1 |
| etc | top-level component | 1 |
| xdocs | documentation surface | 1 |


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
| docs | [README.md](../../../../sources/naver__arcus-java-client/README.md) | docs signal |
| docs | [docs/arcus-java-client-getting-started.md](../../../../sources/naver__arcus-java-client/docs/arcus-java-client-getting-started.md) | docs signal |
| docs | [docs/user-guide/01-arcus-cloud-basics.md](../../../../sources/naver__arcus-java-client/docs/user-guide/01-arcus-cloud-basics.md) | docs signal |
| docs | [docs/user-guide/02-arcus-java-client.md](../../../../sources/naver__arcus-java-client/docs/user-guide/02-arcus-java-client.md) | docs signal |
| eval | [src/test/resources/log4j2.xml](../../../../sources/naver__arcus-java-client/src/test/resources/log4j2.xml) | eval signal |
| eval | [src/test/manual/net/spy/memcached/ArcusClientConnectTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientConnectTest.java) | eval signal |
| eval | [src/test/manual/net/spy/memcached/ArcusClientCreateTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientCreateTest.java) | eval signal |
| eval | [src/test/manual/net/spy/memcached/ArcusClientFrontCacheTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientFrontCacheTest.java) | eval signal |
| ci | [.github/workflows/ci.yml](../../../../sources/naver__arcus-java-client/.github/workflows/ci.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 1 | [xdocs/index.xml](../../../../sources/naver__arcus-java-client/xdocs/index.xml) |
| spec | 0 | not obvious |
| eval | 216 | [src/test/resources/log4j2.xml](../../../../sources/naver__arcus-java-client/src/test/resources/log4j2.xml)<br>[src/test/manual/net/spy/memcached/ArcusClientConnectTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientConnectTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientCreateTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientCreateTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientFrontCacheTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientFrontCacheTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientNotExistsServiceCodeTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientNotExistsServiceCodeTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientPoolCreateTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientPoolCreateTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientPoolReconnectTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientPoolReconnectTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientPoolShutdownTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientPoolShutdownTest.java) |
| security | 7 | [src/main/java/net/spy/memcached/auth/AuthDescriptor.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/AuthDescriptor.java)<br>[src/main/java/net/spy/memcached/auth/AuthException.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/AuthException.java)<br>[src/main/java/net/spy/memcached/auth/package.html](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/package.html)<br>[src/main/java/net/spy/memcached/auth/PlainCallbackHandler.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/PlainCallbackHandler.java)<br>[src/main/java/net/spy/memcached/auth/ScramMechanism.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/ScramMechanism.java)<br>[src/main/java/net/spy/memcached/auth/ScramSaslClient.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/ScramSaslClient.java)<br>[src/main/java/net/spy/memcached/auth/ScramSaslClientProvider.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/ScramSaslClientProvider.java) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/naver__arcus-java-client/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 18 | [README.md](../../../../sources/naver__arcus-java-client/README.md)<br>[docs/arcus-java-client-getting-started.md](../../../../sources/naver__arcus-java-client/docs/arcus-java-client-getting-started.md)<br>[docs/user-guide/01-arcus-cloud-basics.md](../../../../sources/naver__arcus-java-client/docs/user-guide/01-arcus-cloud-basics.md)<br>[docs/user-guide/02-arcus-java-client.md](../../../../sources/naver__arcus-java-client/docs/user-guide/02-arcus-java-client.md)<br>[docs/user-guide/03-key-value-API.md](../../../../sources/naver__arcus-java-client/docs/user-guide/03-key-value-API.md)<br>[docs/user-guide/04-list-API.md](../../../../sources/naver__arcus-java-client/docs/user-guide/04-list-API.md)<br>[docs/user-guide/05-set-API.md](../../../../sources/naver__arcus-java-client/docs/user-guide/05-set-API.md)<br>[docs/user-guide/06-map-API.md](../../../../sources/naver__arcus-java-client/docs/user-guide/06-map-API.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 216 | [src/test/resources/log4j2.xml](../../../../sources/naver__arcus-java-client/src/test/resources/log4j2.xml)<br>[src/test/manual/net/spy/memcached/ArcusClientConnectTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientConnectTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientCreateTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientCreateTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientFrontCacheTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientFrontCacheTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientNotExistsServiceCodeTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientNotExistsServiceCodeTest.java)<br>[src/test/manual/net/spy/memcached/ArcusClientPoolCreateTest.java](../../../../sources/naver__arcus-java-client/src/test/manual/net/spy/memcached/ArcusClientPoolCreateTest.java) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/naver__arcus-java-client/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 7 | [src/main/java/net/spy/memcached/auth/AuthDescriptor.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/AuthDescriptor.java)<br>[src/main/java/net/spy/memcached/auth/AuthException.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/AuthException.java)<br>[src/main/java/net/spy/memcached/auth/package.html](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/package.html)<br>[src/main/java/net/spy/memcached/auth/PlainCallbackHandler.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/PlainCallbackHandler.java)<br>[src/main/java/net/spy/memcached/auth/ScramMechanism.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/ScramMechanism.java)<br>[src/main/java/net/spy/memcached/auth/ScramSaslClient.java](../../../../sources/naver__arcus-java-client/src/main/java/net/spy/memcached/auth/ScramSaslClient.java) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `docs/arcus-java-client-getting-started.md`, `docs/user-guide/01-arcus-cloud-basics.md`.
2. Inspect retrieval/memory/indexing through: `xdocs/index.xml`.
3. Verify behavior through test/eval files: `src/test/resources/log4j2.xml`, `src/test/manual/net/spy/memcached/ArcusClientConnectTest.java`, `src/test/manual/net/spy/memcached/ArcusClientCreateTest.java`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 ARCUS Java client. 핵심 구조 신호는 Java, pom.xml, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
