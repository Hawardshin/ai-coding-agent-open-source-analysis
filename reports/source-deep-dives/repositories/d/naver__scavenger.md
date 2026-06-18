# naver/scavenger Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A runtime dead code analysis tool

## 요약

- 조사 단위: `sources/naver__scavenger` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 760 files, 299 directories, depth score 110, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=scavenger-frontend/src/main.js, scavenger-frontend/src/customer/main.js이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | naver/scavenger |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | korea |
| Language | Java |
| Stars | 465 |
| Forks | 48 |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__scavenger](../../../../sources/naver__scavenger) |
| Existing report | [reports/korea-trending/repositories/naver__scavenger.md](../../../korea-trending/repositories/naver__scavenger.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 760 / 299 |
| Max observed depth | 11 |
| Top directories | .github, doc, gradle, scavenger-agent-java, scavenger-agent-python, scavenger-api, scavenger-collector, scavenger-demo, scavenger-demo-extension, scavenger-entity, scavenger-frontend, scavenger-model, scavenger-old-agent-java, scavenger-old-model, scavenger-schema |
| Top extensions | .kt: 231, .java: 170, .class: 74, .py: 67, .jar: 43, .vue: 22, .yml: 15, .kts: 14, .png: 12, .sql: 11, .conf: 10, .js: 8 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| doc | documentation surface | 1 |
| gradle | top-level component | 1 |
| scavenger-agent-java | top-level component | 1 |
| scavenger-agent-python | top-level component | 1 |
| scavenger-api | source boundary | 1 |
| scavenger-collector | top-level component | 1 |
| scavenger-demo | top-level component | 1 |
| scavenger-demo-extension | top-level component | 1 |
| scavenger-entity | top-level component | 1 |
| scavenger-frontend | top-level component | 1 |
| scavenger-model | top-level component | 1 |
| scavenger-old-agent-java | top-level component | 1 |
| scavenger-old-model | top-level component | 1 |
| scavenger-schema | top-level component | 1 |


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
| entrypoints | [scavenger-frontend/src/main.js](../../../../sources/naver__scavenger/scavenger-frontend/src/main.js) | entrypoints signal |
| entrypoints | [scavenger-frontend/src/customer/main.js](../../../../sources/naver__scavenger/scavenger-frontend/src/customer/main.js) | entrypoints signal |
| config | [scavenger-frontend/package.json](../../../../sources/naver__scavenger/scavenger-frontend/package.json) | config signal |
| config | [scavenger-agent-python/poetry.lock](../../../../sources/naver__scavenger/scavenger-agent-python/poetry.lock) | config signal |
| config | [scavenger-agent-python/pyproject.toml](../../../../sources/naver__scavenger/scavenger-agent-python/pyproject.toml) | config signal |
| config | [scavenger-agent-python/tests/samples/flask_sample/requirements.txt](../../../../sources/naver__scavenger/scavenger-agent-python/tests/samples/flask_sample/requirements.txt) | config signal |
| ci | [.github/workflows/build-develop.yml](../../../../sources/naver__scavenger/.github/workflows/build-develop.yml) | ci signal |
| ci | [.github/workflows/build-main.yml](../../../../sources/naver__scavenger/.github/workflows/build-main.yml) | ci signal |
| ci | [.github/workflows/build-test-reports.yml](../../../../sources/naver__scavenger/.github/workflows/build-test-reports.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/naver__scavenger/.github/workflows/release.yml) | ci signal |
| eval | [scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.2.sql](../../../../sources/naver__scavenger/scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.2.sql) | eval support |
| eval | [scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.4.sql](../../../../sources/naver__scavenger/scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.4.sql) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [scavenger-frontend/src/main.js](../../../../sources/naver__scavenger/scavenger-frontend/src/main.js)<br>[scavenger-frontend/src/customer/main.js](../../../../sources/naver__scavenger/scavenger-frontend/src/customer/main.js) |
| agentRuntime | 1 | [scavenger-agent-python/scavenger/agent.py](../../../../sources/naver__scavenger/scavenger-agent-python/scavenger/agent.py) |
| mcp | 3 | [scavenger-api/src/test/kotlin/com/navercorp/scavenger/mcp/ApiKeyAuthInterceptorTest.kt](../../../../sources/naver__scavenger/scavenger-api/src/test/kotlin/com/navercorp/scavenger/mcp/ApiKeyAuthInterceptorTest.kt)<br>[scavenger-api/src/main/kotlin/com/navercorp/scavenger/mcp/ApiKeyAuthInterceptor.kt](../../../../sources/naver__scavenger/scavenger-api/src/main/kotlin/com/navercorp/scavenger/mcp/ApiKeyAuthInterceptor.kt)<br>[scavenger-api/src/main/kotlin/com/navercorp/scavenger/mcp/McpAuthContext.kt](../../../../sources/naver__scavenger/scavenger-api/src/main/kotlin/com/navercorp/scavenger/mcp/McpAuthContext.kt) |
| retrieval | 5 | [scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-core-9.0.54.jar](../../../../sources/naver__scavenger/scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-core-9.0.54.jar)<br>[scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-el-9.0.54.jar](../../../../sources/naver__scavenger/scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-el-9.0.54.jar)<br>[scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-websocket-9.0.54.jar](../../../../sources/naver__scavenger/scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-websocket-9.0.54.jar)<br>[scavenger-frontend/index.html](../../../../sources/naver__scavenger/scavenger-frontend/index.html)<br>[scavenger-agent-python/tests/samples/django_sample/polls/templates/polls/index.html](../../../../sources/naver__scavenger/scavenger-agent-python/tests/samples/django_sample/polls/templates/polls/index.html) |
| spec | 2 | [scavenger-agent-python/tests/samples/flask_sample/requirements.txt](../../../../sources/naver__scavenger/scavenger-agent-python/tests/samples/flask_sample/requirements.txt)<br>[scavenger-agent-python/tests/samples/django_sample/requirements.txt](../../../../sources/naver__scavenger/scavenger-agent-python/tests/samples/django_sample/requirements.txt) |
| eval | 287 | [scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.2.sql](../../../../sources/naver__scavenger/scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.2.sql)<br>[scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.4.sql](../../../../sources/naver__scavenger/scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.4.sql)<br>[scavenger-schema/src/main/resources/db/changelog/test-data-set.sql](../../../../sources/naver__scavenger/scavenger-schema/src/main/resources/db/changelog/test-data-set.sql)<br>[scavenger-old-model/src/test/resources/sample-publications/codebase-v4.ser](../../../../sources/naver__scavenger/scavenger-old-model/src/test/resources/sample-publications/codebase-v4.ser)<br>[scavenger-old-model/src/test/resources/sample-publications/invocations-v4.ser](../../../../sources/naver__scavenger/scavenger-old-model/src/test/resources/sample-publications/invocations-v4.ser)<br>[scavenger-old-model/src/test/java/io/codekvast/javaagent/model/model/v4/PublicationV4DeserializationTest.java](../../../../sources/naver__scavenger/scavenger-old-model/src/test/java/io/codekvast/javaagent/model/model/v4/PublicationV4DeserializationTest.java)<br>[scavenger-old-agent-java/src/test/resources/incomplete-agent-config.conf](../../../../sources/naver__scavenger/scavenger-old-agent-java/src/test/resources/incomplete-agent-config.conf)<br>[scavenger-old-agent-java/src/test/resources/logging.properties](../../../../sources/naver__scavenger/scavenger-old-agent-java/src/test/resources/logging.properties) |
| security | 0 | not obvious |
| ci | 5 | [.github/workflows/build-develop.yml](../../../../sources/naver__scavenger/.github/workflows/build-develop.yml)<br>[.github/workflows/build-main.yml](../../../../sources/naver__scavenger/.github/workflows/build-main.yml)<br>[.github/workflows/build-test-reports.yml](../../../../sources/naver__scavenger/.github/workflows/build-test-reports.yml)<br>[.github/workflows/release.yml](../../../../sources/naver__scavenger/.github/workflows/release.yml)<br>[.github/workflows/tag.yml](../../../../sources/naver__scavenger/.github/workflows/tag.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 12 | [README.md](../../../../sources/naver__scavenger/README.md)<br>[scavenger-agent-python/README.md](../../../../sources/naver__scavenger/scavenger-agent-python/README.md)<br>[doc/debugging.md](../../../../sources/naver__scavenger/doc/debugging.md)<br>[doc/installation.md](../../../../sources/naver__scavenger/doc/installation.md)<br>[doc/user-guide.md](../../../../sources/naver__scavenger/doc/user-guide.md)<br>[doc/image/analyze-snapshot.png](../../../../sources/naver__scavenger/doc/image/analyze-snapshot.png)<br>[doc/image/configuration-button.png](../../../../sources/naver__scavenger/doc/image/configuration-button.png)<br>[doc/image/create-configuration.png](../../../../sources/naver__scavenger/doc/image/create-configuration.png) |
| config | 7 | [scavenger-frontend/package.json](../../../../sources/naver__scavenger/scavenger-frontend/package.json)<br>[scavenger-agent-python/poetry.lock](../../../../sources/naver__scavenger/scavenger-agent-python/poetry.lock)<br>[scavenger-agent-python/pyproject.toml](../../../../sources/naver__scavenger/scavenger-agent-python/pyproject.toml)<br>[scavenger-agent-python/tests/samples/flask_sample/requirements.txt](../../../../sources/naver__scavenger/scavenger-agent-python/tests/samples/flask_sample/requirements.txt)<br>[scavenger-agent-python/tests/samples/django_sample/requirements.txt](../../../../sources/naver__scavenger/scavenger-agent-python/tests/samples/django_sample/requirements.txt)<br>[scavenger-agent-python/tests/samples/benchmark/poetry.lock](../../../../sources/naver__scavenger/scavenger-agent-python/tests/samples/benchmark/poetry.lock)<br>[scavenger-agent-python/tests/samples/benchmark/pyproject.toml](../../../../sources/naver__scavenger/scavenger-agent-python/tests/samples/benchmark/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 287 | [scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.2.sql](../../../../sources/naver__scavenger/scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.2.sql)<br>[scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.4.sql](../../../../sources/naver__scavenger/scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.4.sql)<br>[scavenger-schema/src/main/resources/db/changelog/test-data-set.sql](../../../../sources/naver__scavenger/scavenger-schema/src/main/resources/db/changelog/test-data-set.sql)<br>[scavenger-old-model/src/test/resources/sample-publications/codebase-v4.ser](../../../../sources/naver__scavenger/scavenger-old-model/src/test/resources/sample-publications/codebase-v4.ser)<br>[scavenger-old-model/src/test/resources/sample-publications/invocations-v4.ser](../../../../sources/naver__scavenger/scavenger-old-model/src/test/resources/sample-publications/invocations-v4.ser)<br>[scavenger-old-model/src/test/java/io/codekvast/javaagent/model/model/v4/PublicationV4DeserializationTest.java](../../../../sources/naver__scavenger/scavenger-old-model/src/test/java/io/codekvast/javaagent/model/model/v4/PublicationV4DeserializationTest.java) |
| CI workflows | 5 | [.github/workflows/build-develop.yml](../../../../sources/naver__scavenger/.github/workflows/build-develop.yml)<br>[.github/workflows/build-main.yml](../../../../sources/naver__scavenger/.github/workflows/build-main.yml)<br>[.github/workflows/build-test-reports.yml](../../../../sources/naver__scavenger/.github/workflows/build-test-reports.yml)<br>[.github/workflows/release.yml](../../../../sources/naver__scavenger/.github/workflows/release.yml)<br>[.github/workflows/tag.yml](../../../../sources/naver__scavenger/.github/workflows/tag.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `scavenger-frontend/src/main.js`, `scavenger-frontend/src/customer/main.js`, `scavenger-frontend/package.json`.
2. Trace execution through entrypoints: `scavenger-frontend/src/main.js`, `scavenger-frontend/src/customer/main.js`.
3. Map agent/tool runtime through: `scavenger-agent-python/scavenger/agent.py`.
4. Inspect retrieval/memory/indexing through: `scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-core-9.0.54.jar`, `scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-el-9.0.54.jar`, `scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-websocket-9.0.54.jar`.
5. Verify behavior through test/eval files: `scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.2.sql`, `scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.4.sql`, `scavenger-schema/src/main/resources/db/changelog/test-data-set.sql`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 A runtime dead code analysis tool. 핵심 구조 신호는 Java, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
