# woowacourse/java-http Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

woowacourse/java-http

## 요약

- 조사 단위: `sources/woowacourse__java-http` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 67 files, 60 directories, depth score 60, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | woowacourse/java-http |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | CSS |
| Stars | 23 |
| Forks | 385 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/woowacourse__java-http](../../../../sources/woowacourse__java-http) |
| Existing report | [reports/korea-trending/repositories/woowacourse__java-http.md](../../../korea-trending/repositories/woowacourse__java-http.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 67 / 60 |
| Max observed depth | 9 |
| Top directories | .github, gradle, study, tomcat |
| Top extensions | .java: 35, .html: 8, .yml: 6, .js: 5, .gradle: 3, (none): 3, .bat: 1, .css: 1, .jar: 1, .md: 1, .properties: 1, .svg: 1 |
| Source patterns | retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| gradle | top-level component | 1 |
| study | top-level component | 1 |
| tomcat | top-level component | 1 |


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
| docs | [README.md](../../../../sources/woowacourse__java-http/README.md) | docs signal |
| eval | [tomcat/src/test/java/support/StubSocket.java](../../../../sources/woowacourse__java-http/tomcat/src/test/java/support/StubSocket.java) | eval signal |
| eval | [tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java](../../../../sources/woowacourse__java-http/tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java) | eval signal |
| eval | [study/src/test/resources/nextstep.txt](../../../../sources/woowacourse__java-http/study/src/test/resources/nextstep.txt) | eval signal |
| eval | [study/src/test/java/thread/stage2/AppTest.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage2/AppTest.java) | eval signal |
| ci | [.github/workflows/code-quality-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/code-quality-review.yml) | ci support |
| ci | [.github/workflows/step1-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step1-code-review.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 3 | [tomcat/src/main/resources/static/index.html](../../../../sources/woowacourse__java-http/tomcat/src/main/resources/static/index.html)<br>[study/src/main/resources/templates/index.html](../../../../sources/woowacourse__java-http/study/src/main/resources/templates/index.html)<br>[study/src/main/resources/static/js/index.js](../../../../sources/woowacourse__java-http/study/src/main/resources/static/js/index.js) |
| spec | 0 | not obvious |
| eval | 16 | [tomcat/src/test/java/support/StubSocket.java](../../../../sources/woowacourse__java-http/tomcat/src/test/java/support/StubSocket.java)<br>[tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java](../../../../sources/woowacourse__java-http/tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java)<br>[study/src/test/resources/nextstep.txt](../../../../sources/woowacourse__java-http/study/src/test/resources/nextstep.txt)<br>[study/src/test/java/thread/stage2/AppTest.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage2/AppTest.java)<br>[study/src/test/java/thread/stage2/TestHttpUtils.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage2/TestHttpUtils.java)<br>[study/src/test/java/thread/stage1/ConcurrencyTest.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage1/ConcurrencyTest.java)<br>[study/src/test/java/thread/stage1/HttpProcessor.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage1/HttpProcessor.java)<br>[study/src/test/java/thread/stage1/User.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage1/User.java) |
| security | 0 | not obvious |
| ci | 5 | [.github/workflows/code-quality-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/code-quality-review.yml)<br>[.github/workflows/step1-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step1-code-review.yml)<br>[.github/workflows/step2-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step2-code-review.yml)<br>[.github/workflows/step3-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step3-code-review.yml)<br>[.github/workflows/step4-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step4-code-review.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/woowacourse__java-http/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 16 | [tomcat/src/test/java/support/StubSocket.java](../../../../sources/woowacourse__java-http/tomcat/src/test/java/support/StubSocket.java)<br>[tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java](../../../../sources/woowacourse__java-http/tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java)<br>[study/src/test/resources/nextstep.txt](../../../../sources/woowacourse__java-http/study/src/test/resources/nextstep.txt)<br>[study/src/test/java/thread/stage2/AppTest.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage2/AppTest.java)<br>[study/src/test/java/thread/stage2/TestHttpUtils.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage2/TestHttpUtils.java)<br>[study/src/test/java/thread/stage1/ConcurrencyTest.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage1/ConcurrencyTest.java) |
| CI workflows | 5 | [.github/workflows/code-quality-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/code-quality-review.yml)<br>[.github/workflows/step1-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step1-code-review.yml)<br>[.github/workflows/step2-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step2-code-review.yml)<br>[.github/workflows/step3-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step3-code-review.yml)<br>[.github/workflows/step4-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step4-code-review.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `tomcat/src/test/java/support/StubSocket.java`, `tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java`.
2. Inspect retrieval/memory/indexing through: `tomcat/src/main/resources/static/index.html`, `study/src/main/resources/templates/index.html`, `study/src/main/resources/static/js/index.js`.
3. Verify behavior through test/eval files: `tomcat/src/test/java/support/StubSocket.java`, `tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java`, `study/src/test/resources/nextstep.txt`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 CSS, README.md, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
