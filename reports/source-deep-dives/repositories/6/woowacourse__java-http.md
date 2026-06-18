# woowacourse/java-http 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

woowacourse/java-http

## 요약

- 조사 단위: `sources/woowacourse__java-http` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 67 files, 60 directories, depth score 54, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | woowacourse/java-http |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | CSS |
| Stars | 23 |
| Forks | 385 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/woowacourse__java-http](../../../../sources/woowacourse__java-http) |
| 기존 보고서 | [reports/korea-trending/repositories/woowacourse__java-http.md](../../../korea-trending/repositories/woowacourse__java-http.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 67 / 60 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, gradle, study, tomcat |
| 상위 확장자 | .java: 35, .html: 8, .yml: 6, .js: 5, .gradle: 3, (none): 3, .bat: 1, .css: 1, .jar: 1, .md: 1, .properties: 1, .svg: 1 |
| 소스 패턴 | retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| gradle | top-level component | 1 |
| study | top-level component | 1 |
| tomcat | top-level component | 1 |


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
| docs | [README.md](../../../../sources/woowacourse__java-http/README.md) | docs signal |
| eval | [tomcat/src/test/java/support/StubSocket.java](../../../../sources/woowacourse__java-http/tomcat/src/test/java/support/StubSocket.java) | eval signal |
| eval | [tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java](../../../../sources/woowacourse__java-http/tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java) | eval signal |
| eval | [study/src/test/resources/nextstep.txt](../../../../sources/woowacourse__java-http/study/src/test/resources/nextstep.txt) | eval signal |
| eval | [study/src/test/java/thread/stage2/AppTest.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage2/AppTest.java) | eval signal |
| ci | [.github/workflows/code-quality-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/code-quality-review.yml) | ci support |
| ci | [.github/workflows/step1-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step1-code-review.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [tomcat/src/main/resources/static/index.html](../../../../sources/woowacourse__java-http/tomcat/src/main/resources/static/index.html)<br>[study/src/main/resources/templates/index.html](../../../../sources/woowacourse__java-http/study/src/main/resources/templates/index.html)<br>[study/src/main/resources/static/js/index.js](../../../../sources/woowacourse__java-http/study/src/main/resources/static/js/index.js) |
| spec | 0 | 명확하지 않음 |
| eval | 16 | [tomcat/src/test/java/support/StubSocket.java](../../../../sources/woowacourse__java-http/tomcat/src/test/java/support/StubSocket.java)<br>[tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java](../../../../sources/woowacourse__java-http/tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java)<br>[study/src/test/resources/nextstep.txt](../../../../sources/woowacourse__java-http/study/src/test/resources/nextstep.txt)<br>[study/src/test/java/thread/stage2/AppTest.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage2/AppTest.java)<br>[study/src/test/java/thread/stage2/TestHttpUtils.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage2/TestHttpUtils.java)<br>[study/src/test/java/thread/stage1/ConcurrencyTest.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage1/ConcurrencyTest.java)<br>[study/src/test/java/thread/stage1/HttpProcessor.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage1/HttpProcessor.java)<br>[study/src/test/java/thread/stage1/User.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage1/User.java) |
| security | 0 | 명확하지 않음 |
| ci | 5 | [.github/workflows/code-quality-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/code-quality-review.yml)<br>[.github/workflows/step1-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step1-code-review.yml)<br>[.github/workflows/step2-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step2-code-review.yml)<br>[.github/workflows/step3-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step3-code-review.yml)<br>[.github/workflows/step4-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step4-code-review.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/woowacourse__java-http/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 16 | [tomcat/src/test/java/support/StubSocket.java](../../../../sources/woowacourse__java-http/tomcat/src/test/java/support/StubSocket.java)<br>[tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java](../../../../sources/woowacourse__java-http/tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java)<br>[study/src/test/resources/nextstep.txt](../../../../sources/woowacourse__java-http/study/src/test/resources/nextstep.txt)<br>[study/src/test/java/thread/stage2/AppTest.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage2/AppTest.java)<br>[study/src/test/java/thread/stage2/TestHttpUtils.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage2/TestHttpUtils.java)<br>[study/src/test/java/thread/stage1/ConcurrencyTest.java](../../../../sources/woowacourse__java-http/study/src/test/java/thread/stage1/ConcurrencyTest.java) |
| CI workflow | 5 | [.github/workflows/code-quality-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/code-quality-review.yml)<br>[.github/workflows/step1-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step1-code-review.yml)<br>[.github/workflows/step2-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step2-code-review.yml)<br>[.github/workflows/step3-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step3-code-review.yml)<br>[.github/workflows/step4-code-review.yml](../../../../sources/woowacourse__java-http/.github/workflows/step4-code-review.yml) |
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

1. 핵심 참조에서 시작: `README.md`, `tomcat/src/test/java/support/StubSocket.java`, `tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java`.
2. retrieval/memory/indexing 확인: `tomcat/src/main/resources/static/index.html`, `study/src/main/resources/templates/index.html`, `study/src/main/resources/static/js/index.js`.
3. test/eval 파일로 동작 검증: `tomcat/src/test/java/support/StubSocket.java`, `tomcat/src/test/java/org/apache/coyote/http11/Http11ProcessorTest.java`, `study/src/test/resources/nextstep.txt`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 CSS, README.md, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
