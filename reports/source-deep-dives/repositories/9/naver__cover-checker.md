# naver/cover-checker Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Check your pull request code coverage

## 요약

- 조사 단위: `sources/naver__cover-checker` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 100 files, 140 directories, depth score 57, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README_ko.md, README.md, doc/example.png이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/cover-checker |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Java |
| Stars | 72 |
| Forks | 14 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__cover-checker](../../../../sources/naver__cover-checker) |
| Existing report | [reports/korea-trending/repositories/naver__cover-checker.md](../../../korea-trending/repositories/naver__cover-checker.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 100 / 140 |
| Max observed depth | 12 |
| Top directories | .github, .mvn, cover-checker-cobertura, cover-checker-console, cover-checker-core, cover-checker-github, cover-checker-jacoco, cover-checker-lcov, doc, gradle |
| Top extensions | .java: 59, .gradle: 8, .xml: 8, .diff: 4, .html: 4, .md: 4, (none): 3, .mockmaker: 2, .properties: 2, .yml: 2, .bat: 1, .info: 1 |
| Source patterns | eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| cover-checker-cobertura | top-level component | 1 |
| cover-checker-console | top-level component | 1 |
| cover-checker-core | top-level component | 1 |
| cover-checker-github | ci surface | 1 |
| cover-checker-jacoco | top-level component | 1 |
| cover-checker-lcov | top-level component | 1 |
| doc | documentation surface | 1 |
| gradle | top-level component | 1 |


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
| docs | [README_ko.md](../../../../sources/naver__cover-checker/README_ko.md) | docs signal |
| docs | [README.md](../../../../sources/naver__cover-checker/README.md) | docs signal |
| docs | [doc/example.png](../../../../sources/naver__cover-checker/doc/example.png) | docs signal |
| eval | [cover-checker-lcov/src/test/resources/sample.info](../../../../sources/naver__cover-checker/cover-checker-lcov/src/test/resources/sample.info) | eval signal |
| eval | [cover-checker-lcov/src/test/java/com/naver/nid/cover/lcov/LcovCoverageReportParserTest.java](../../../../sources/naver__cover-checker/cover-checker-lcov/src/test/java/com/naver/nid/cover/lcov/LcovCoverageReportParserTest.java) | eval signal |
| eval | [cover-checker-jacoco/src/test/resources/reports/jacoco.xml](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/jacoco.xml) | eval signal |
| eval | [cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.html](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.html) | eval signal |
| ci | [.github/workflows/gradle.yml](../../../../sources/naver__cover-checker/.github/workflows/gradle.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 35 | [cover-checker-lcov/src/test/resources/sample.info](../../../../sources/naver__cover-checker/cover-checker-lcov/src/test/resources/sample.info)<br>[cover-checker-lcov/src/test/java/com/naver/nid/cover/lcov/LcovCoverageReportParserTest.java](../../../../sources/naver__cover-checker/cover-checker-lcov/src/test/java/com/naver/nid/cover/lcov/LcovCoverageReportParserTest.java)<br>[cover-checker-jacoco/src/test/resources/reports/jacoco.xml](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/jacoco.xml)<br>[cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.html](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.html)<br>[cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.java.html](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.java.html)<br>[cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoHtmlReportParserTest.java](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoHtmlReportParserTest.java)<br>[cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoReportParserTest.java](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoReportParserTest.java)<br>[cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoXmlReportParserTest.java](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoXmlReportParserTest.java) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/gradle.yml](../../../../sources/naver__cover-checker/.github/workflows/gradle.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README_ko.md](../../../../sources/naver__cover-checker/README_ko.md)<br>[README.md](../../../../sources/naver__cover-checker/README.md)<br>[doc/example.png](../../../../sources/naver__cover-checker/doc/example.png) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 35 | [cover-checker-lcov/src/test/resources/sample.info](../../../../sources/naver__cover-checker/cover-checker-lcov/src/test/resources/sample.info)<br>[cover-checker-lcov/src/test/java/com/naver/nid/cover/lcov/LcovCoverageReportParserTest.java](../../../../sources/naver__cover-checker/cover-checker-lcov/src/test/java/com/naver/nid/cover/lcov/LcovCoverageReportParserTest.java)<br>[cover-checker-jacoco/src/test/resources/reports/jacoco.xml](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/jacoco.xml)<br>[cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.html](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.html)<br>[cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.java.html](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.java.html)<br>[cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoHtmlReportParserTest.java](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoHtmlReportParserTest.java) |
| CI workflows | 1 | [.github/workflows/gradle.yml](../../../../sources/naver__cover-checker/.github/workflows/gradle.yml) |
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

1. Start from key references: `README_ko.md`, `README.md`, `doc/example.png`.
2. Verify behavior through test/eval files: `cover-checker-lcov/src/test/resources/sample.info`, `cover-checker-lcov/src/test/java/com/naver/nid/cover/lcov/LcovCoverageReportParserTest.java`, `cover-checker-jacoco/src/test/resources/reports/jacoco.xml`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Check your pull request code coverage. 핵심 구조 신호는 Java, build.gradle, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
