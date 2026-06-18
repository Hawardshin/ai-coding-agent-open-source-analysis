# naver/scavenger 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A runtime dead code analysis tool

## 요약

- 조사 단위: `sources/naver__scavenger` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 760 files, 299 directories, depth score 104, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=scavenger-frontend/src/main.js, scavenger-frontend/src/customer/main.js이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/scavenger |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | korea |
| Language | Java |
| Stars | 465 |
| Forks | 48 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__scavenger](../../../../sources/naver__scavenger) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__scavenger.md](../../../korea-trending/repositories/naver__scavenger.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 760 / 299 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .github, doc, gradle, scavenger-agent-java, scavenger-agent-python, scavenger-api, scavenger-collector, scavenger-demo, scavenger-demo-extension, scavenger-entity, scavenger-frontend, scavenger-model, scavenger-old-agent-java, scavenger-old-model, scavenger-schema |
| 상위 확장자 | .kt: 231, .java: 170, .class: 74, .py: 67, .jar: 43, .vue: 22, .yml: 15, .kts: 14, .png: 12, .sql: 11, .conf: 10, .js: 8 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [scavenger-frontend/src/main.js](../../../../sources/naver__scavenger/scavenger-frontend/src/main.js)<br>[scavenger-frontend/src/customer/main.js](../../../../sources/naver__scavenger/scavenger-frontend/src/customer/main.js) |
| agentRuntime | 1 | [scavenger-agent-python/scavenger/agent.py](../../../../sources/naver__scavenger/scavenger-agent-python/scavenger/agent.py) |
| mcp | 3 | [scavenger-api/src/test/kotlin/com/navercorp/scavenger/mcp/ApiKeyAuthInterceptorTest.kt](../../../../sources/naver__scavenger/scavenger-api/src/test/kotlin/com/navercorp/scavenger/mcp/ApiKeyAuthInterceptorTest.kt)<br>[scavenger-api/src/main/kotlin/com/navercorp/scavenger/mcp/ApiKeyAuthInterceptor.kt](../../../../sources/naver__scavenger/scavenger-api/src/main/kotlin/com/navercorp/scavenger/mcp/ApiKeyAuthInterceptor.kt)<br>[scavenger-api/src/main/kotlin/com/navercorp/scavenger/mcp/McpAuthContext.kt](../../../../sources/naver__scavenger/scavenger-api/src/main/kotlin/com/navercorp/scavenger/mcp/McpAuthContext.kt) |
| retrieval | 5 | [scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-core-9.0.54.jar](../../../../sources/naver__scavenger/scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-core-9.0.54.jar)<br>[scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-el-9.0.54.jar](../../../../sources/naver__scavenger/scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-el-9.0.54.jar)<br>[scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-websocket-9.0.54.jar](../../../../sources/naver__scavenger/scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-websocket-9.0.54.jar)<br>[scavenger-frontend/index.html](../../../../sources/naver__scavenger/scavenger-frontend/index.html)<br>[scavenger-agent-python/tests/samples/django_sample/polls/templates/polls/index.html](../../../../sources/naver__scavenger/scavenger-agent-python/tests/samples/django_sample/polls/templates/polls/index.html) |
| spec | 2 | [scavenger-agent-python/tests/samples/flask_sample/requirements.txt](../../../../sources/naver__scavenger/scavenger-agent-python/tests/samples/flask_sample/requirements.txt)<br>[scavenger-agent-python/tests/samples/django_sample/requirements.txt](../../../../sources/naver__scavenger/scavenger-agent-python/tests/samples/django_sample/requirements.txt) |
| eval | 287 | [scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.2.sql](../../../../sources/naver__scavenger/scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.2.sql)<br>[scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.4.sql](../../../../sources/naver__scavenger/scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.4.sql)<br>[scavenger-schema/src/main/resources/db/changelog/test-data-set.sql](../../../../sources/naver__scavenger/scavenger-schema/src/main/resources/db/changelog/test-data-set.sql)<br>[scavenger-old-model/src/test/resources/sample-publications/codebase-v4.ser](../../../../sources/naver__scavenger/scavenger-old-model/src/test/resources/sample-publications/codebase-v4.ser)<br>[scavenger-old-model/src/test/resources/sample-publications/invocations-v4.ser](../../../../sources/naver__scavenger/scavenger-old-model/src/test/resources/sample-publications/invocations-v4.ser)<br>[scavenger-old-model/src/test/java/io/codekvast/javaagent/model/model/v4/PublicationV4DeserializationTest.java](../../../../sources/naver__scavenger/scavenger-old-model/src/test/java/io/codekvast/javaagent/model/model/v4/PublicationV4DeserializationTest.java)<br>[scavenger-old-agent-java/src/test/resources/incomplete-agent-config.conf](../../../../sources/naver__scavenger/scavenger-old-agent-java/src/test/resources/incomplete-agent-config.conf)<br>[scavenger-old-agent-java/src/test/resources/logging.properties](../../../../sources/naver__scavenger/scavenger-old-agent-java/src/test/resources/logging.properties) |
| security | 0 | 명확하지 않음 |
| ci | 5 | [.github/workflows/build-develop.yml](../../../../sources/naver__scavenger/.github/workflows/build-develop.yml)<br>[.github/workflows/build-main.yml](../../../../sources/naver__scavenger/.github/workflows/build-main.yml)<br>[.github/workflows/build-test-reports.yml](../../../../sources/naver__scavenger/.github/workflows/build-test-reports.yml)<br>[.github/workflows/release.yml](../../../../sources/naver__scavenger/.github/workflows/release.yml)<br>[.github/workflows/tag.yml](../../../../sources/naver__scavenger/.github/workflows/tag.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 12 | [README.md](../../../../sources/naver__scavenger/README.md)<br>[scavenger-agent-python/README.md](../../../../sources/naver__scavenger/scavenger-agent-python/README.md)<br>[doc/debugging.md](../../../../sources/naver__scavenger/doc/debugging.md)<br>[doc/installation.md](../../../../sources/naver__scavenger/doc/installation.md)<br>[doc/user-guide.md](../../../../sources/naver__scavenger/doc/user-guide.md)<br>[doc/image/analyze-snapshot.png](../../../../sources/naver__scavenger/doc/image/analyze-snapshot.png)<br>[doc/image/configuration-button.png](../../../../sources/naver__scavenger/doc/image/configuration-button.png)<br>[doc/image/create-configuration.png](../../../../sources/naver__scavenger/doc/image/create-configuration.png) |
| config | 7 | [scavenger-frontend/package.json](../../../../sources/naver__scavenger/scavenger-frontend/package.json)<br>[scavenger-agent-python/poetry.lock](../../../../sources/naver__scavenger/scavenger-agent-python/poetry.lock)<br>[scavenger-agent-python/pyproject.toml](../../../../sources/naver__scavenger/scavenger-agent-python/pyproject.toml)<br>[scavenger-agent-python/tests/samples/flask_sample/requirements.txt](../../../../sources/naver__scavenger/scavenger-agent-python/tests/samples/flask_sample/requirements.txt)<br>[scavenger-agent-python/tests/samples/django_sample/requirements.txt](../../../../sources/naver__scavenger/scavenger-agent-python/tests/samples/django_sample/requirements.txt)<br>[scavenger-agent-python/tests/samples/benchmark/poetry.lock](../../../../sources/naver__scavenger/scavenger-agent-python/tests/samples/benchmark/poetry.lock)<br>[scavenger-agent-python/tests/samples/benchmark/pyproject.toml](../../../../sources/naver__scavenger/scavenger-agent-python/tests/samples/benchmark/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 287 | [scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.2.sql](../../../../sources/naver__scavenger/scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.2.sql)<br>[scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.4.sql](../../../../sources/naver__scavenger/scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.4.sql)<br>[scavenger-schema/src/main/resources/db/changelog/test-data-set.sql](../../../../sources/naver__scavenger/scavenger-schema/src/main/resources/db/changelog/test-data-set.sql)<br>[scavenger-old-model/src/test/resources/sample-publications/codebase-v4.ser](../../../../sources/naver__scavenger/scavenger-old-model/src/test/resources/sample-publications/codebase-v4.ser)<br>[scavenger-old-model/src/test/resources/sample-publications/invocations-v4.ser](../../../../sources/naver__scavenger/scavenger-old-model/src/test/resources/sample-publications/invocations-v4.ser)<br>[scavenger-old-model/src/test/java/io/codekvast/javaagent/model/model/v4/PublicationV4DeserializationTest.java](../../../../sources/naver__scavenger/scavenger-old-model/src/test/java/io/codekvast/javaagent/model/model/v4/PublicationV4DeserializationTest.java) |
| CI workflow | 5 | [.github/workflows/build-develop.yml](../../../../sources/naver__scavenger/.github/workflows/build-develop.yml)<br>[.github/workflows/build-main.yml](../../../../sources/naver__scavenger/.github/workflows/build-main.yml)<br>[.github/workflows/build-test-reports.yml](../../../../sources/naver__scavenger/.github/workflows/build-test-reports.yml)<br>[.github/workflows/release.yml](../../../../sources/naver__scavenger/.github/workflows/release.yml)<br>[.github/workflows/tag.yml](../../../../sources/naver__scavenger/.github/workflows/tag.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `scavenger-frontend/src/main.js`, `scavenger-frontend/src/customer/main.js`, `scavenger-frontend/package.json`.
2. entrypoint를 따라 실행 흐름 확인: `scavenger-frontend/src/main.js`, `scavenger-frontend/src/customer/main.js`.
3. agent/tool runtime 매핑: `scavenger-agent-python/scavenger/agent.py`.
4. retrieval/memory/indexing 확인: `scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-core-9.0.54.jar`, `scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-el-9.0.54.jar`, `scavenger-old-agent-java/src/test/resources/sample-boot-extract/BOOT-INF/lib/tomcat-embed-websocket-9.0.54.jar`.
5. test/eval 파일로 동작 검증: `scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.2.sql`, `scavenger-schema/src/main/resources/db/changelog/test-data-set-1.1.4.sql`, `scavenger-schema/src/main/resources/db/changelog/test-data-set.sql`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 A runtime dead code analysis tool. 핵심 구조 신호는 Java, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
