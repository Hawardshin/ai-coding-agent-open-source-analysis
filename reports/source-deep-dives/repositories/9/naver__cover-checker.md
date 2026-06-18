# naver/cover-checker 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Check your pull request code coverage

## 요약

- 조사 단위: `sources/naver__cover-checker` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 100 files, 140 directories, depth score 51, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README_ko.md, README.md, doc/example.png이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/cover-checker |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Java |
| Stars | 72 |
| Forks | 14 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__cover-checker](../../../../sources/naver__cover-checker) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__cover-checker.md](../../../korea-trending/repositories/naver__cover-checker.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 100 / 140 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .github, .mvn, cover-checker-cobertura, cover-checker-console, cover-checker-core, cover-checker-github, cover-checker-jacoco, cover-checker-lcov, doc, gradle |
| 상위 확장자 | .java: 59, .gradle: 8, .xml: 8, .diff: 4, .html: 4, .md: 4, (none): 3, .mockmaker: 2, .properties: 2, .yml: 2, .bat: 1, .info: 1 |
| 소스 패턴 | eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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
| docs | [README_ko.md](../../../../sources/naver__cover-checker/README_ko.md) | docs signal |
| docs | [README.md](../../../../sources/naver__cover-checker/README.md) | docs signal |
| docs | [doc/example.png](../../../../sources/naver__cover-checker/doc/example.png) | docs signal |
| eval | [cover-checker-lcov/src/test/resources/sample.info](../../../../sources/naver__cover-checker/cover-checker-lcov/src/test/resources/sample.info) | eval signal |
| eval | [cover-checker-lcov/src/test/java/com/naver/nid/cover/lcov/LcovCoverageReportParserTest.java](../../../../sources/naver__cover-checker/cover-checker-lcov/src/test/java/com/naver/nid/cover/lcov/LcovCoverageReportParserTest.java) | eval signal |
| eval | [cover-checker-jacoco/src/test/resources/reports/jacoco.xml](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/jacoco.xml) | eval signal |
| eval | [cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.html](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.html) | eval signal |
| ci | [.github/workflows/gradle.yml](../../../../sources/naver__cover-checker/.github/workflows/gradle.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 35 | [cover-checker-lcov/src/test/resources/sample.info](../../../../sources/naver__cover-checker/cover-checker-lcov/src/test/resources/sample.info)<br>[cover-checker-lcov/src/test/java/com/naver/nid/cover/lcov/LcovCoverageReportParserTest.java](../../../../sources/naver__cover-checker/cover-checker-lcov/src/test/java/com/naver/nid/cover/lcov/LcovCoverageReportParserTest.java)<br>[cover-checker-jacoco/src/test/resources/reports/jacoco.xml](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/jacoco.xml)<br>[cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.html](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.html)<br>[cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.java.html](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.java.html)<br>[cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoHtmlReportParserTest.java](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoHtmlReportParserTest.java)<br>[cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoReportParserTest.java](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoReportParserTest.java)<br>[cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoXmlReportParserTest.java](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoXmlReportParserTest.java) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/gradle.yml](../../../../sources/naver__cover-checker/.github/workflows/gradle.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README_ko.md](../../../../sources/naver__cover-checker/README_ko.md)<br>[README.md](../../../../sources/naver__cover-checker/README.md)<br>[doc/example.png](../../../../sources/naver__cover-checker/doc/example.png) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 35 | [cover-checker-lcov/src/test/resources/sample.info](../../../../sources/naver__cover-checker/cover-checker-lcov/src/test/resources/sample.info)<br>[cover-checker-lcov/src/test/java/com/naver/nid/cover/lcov/LcovCoverageReportParserTest.java](../../../../sources/naver__cover-checker/cover-checker-lcov/src/test/java/com/naver/nid/cover/lcov/LcovCoverageReportParserTest.java)<br>[cover-checker-jacoco/src/test/resources/reports/jacoco.xml](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/jacoco.xml)<br>[cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.html](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.html)<br>[cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.java.html](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/resources/reports/html/com.naver.nid.cover.github/GithubCommentManager.java.html)<br>[cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoHtmlReportParserTest.java](../../../../sources/naver__cover-checker/cover-checker-jacoco/src/test/java/com/naver/nid/cover/jacoco/JacocoHtmlReportParserTest.java) |
| CI workflow | 1 | [.github/workflows/gradle.yml](../../../../sources/naver__cover-checker/.github/workflows/gradle.yml) |
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

1. 핵심 참조에서 시작: `README_ko.md`, `README.md`, `doc/example.png`.
2. test/eval 파일로 동작 검증: `cover-checker-lcov/src/test/resources/sample.info`, `cover-checker-lcov/src/test/java/com/naver/nid/cover/lcov/LcovCoverageReportParserTest.java`, `cover-checker-jacoco/src/test/resources/reports/jacoco.xml`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Check your pull request code coverage. 핵심 구조 신호는 Java, build.gradle, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
