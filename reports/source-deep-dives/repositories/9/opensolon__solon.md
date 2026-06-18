# opensolon/solon 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

🔥 Java enterprise application development framework for full scenario: Restrained, Efficient, Open, Ecologicalll!!! 700% higher concurrency 50% memory savings Startup is 10 times faster. Packing 90% smaller; Compatible with java8 ~ java25; Supports LTS. (Replaceable spring)

## 요약

- 조사 단위: `sources/opensolon__solon` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,286 files, 2,714 directories, depth score 74, key references 6개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/SolonMavenUtil.java, solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/StringUtils.java, solon-projects/solon-tool/solon-gradle-plugin/src/main/java/org/noear/solon/gradle/tools/MainClassFinder.java이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | opensolon/solon |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Java |
| Stars | 2749 |
| Forks | 261 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/opensolon__solon](../../../../sources/opensolon__solon) |
| 기존 보고서 | [reports/global-trending/repositories/opensolon__solon.md](../../../global-trending/repositories/opensolon__solon.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3286 / 2714 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | __hatch, __release, __test, .gitee, .github, solon, solon-parent, solon-projects, solon-shortcuts, style |
| 상위 확장자 | .java: 2539, .xml: 159, (none): 141, .yml: 109, .properties: 106, .md: 90, .json: 32, .jks: 16, .htm: 10, .cfg: 8, .crt: 8, .html: 8 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| __hatch | top-level component | 1 |
| __release | top-level component | 1 |
| __test | validation surface | 1 |
| .github | ci surface | 1 |
| solon | top-level component | 1 |
| solon-parent | top-level component | 1 |
| solon-projects | top-level component | 1 |
| solon-shortcuts | top-level component | 1 |
| style | top-level component | 1 |


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
| agentRuntime | [solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/SolonMavenUtil.java](../../../../sources/opensolon__solon/solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/SolonMavenUtil.java) | agentRuntime signal |
| agentRuntime | [solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/StringUtils.java](../../../../sources/opensolon__solon/solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/StringUtils.java) | agentRuntime signal |
| agentRuntime | [solon-projects/solon-tool/solon-gradle-plugin/src/main/java/org/noear/solon/gradle/tools/MainClassFinder.java](../../../../sources/opensolon__solon/solon-projects/solon-tool/solon-gradle-plugin/src/main/java/org/noear/solon/gradle/tools/MainClassFinder.java) | agentRuntime signal |
| agentRuntime | [solon-projects/nami/nami/src/main/java/org/noear/nami/Context.java](../../../../sources/opensolon__solon/solon-projects/nami/nami/src/main/java/org/noear/nami/Context.java) | agentRuntime signal |
| eval | [solon-projects/solon-web/solon-web-webservices/src/test/resources/app.properties](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/resources/app.properties) | eval support |
| eval | [solon-projects/solon-web/solon-web-webservices/src/test/java/demo/server/ServerTest.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/java/demo/server/ServerTest.java) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 7 | [solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/SolonMavenUtil.java](../../../../sources/opensolon__solon/solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/SolonMavenUtil.java)<br>[solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/StringUtils.java](../../../../sources/opensolon__solon/solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/StringUtils.java)<br>[solon-projects/solon-tool/solon-gradle-plugin/src/main/java/org/noear/solon/gradle/tools/MainClassFinder.java](../../../../sources/opensolon__solon/solon-projects/solon-tool/solon-gradle-plugin/src/main/java/org/noear/solon/gradle/tools/MainClassFinder.java)<br>[solon-projects/nami/nami/src/main/java/org/noear/nami/Context.java](../../../../sources/opensolon__solon/solon-projects/nami/nami/src/main/java/org/noear/nami/Context.java)<br>[solon/src/main/java/org/noear/solon/core/handle/Context.java](../../../../sources/opensolon__solon/solon/src/main/java/org/noear/solon/core/handle/Context.java)<br>[__test/src/test/java/features/tool/BindPropsProcessorTest.java](../../../../sources/opensolon__solon/__test/src/test/java/features/tool/BindPropsProcessorTest.java)<br>[__test/src/test/java/features/tool/ComplexBindPropsProcessorTest.java](../../../../sources/opensolon__solon/__test/src/test/java/features/tool/ComplexBindPropsProcessorTest.java) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [__test/src/main/resources/static/test/index.html](../../../../sources/opensolon__solon/__test/src/main/resources/static/test/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 1482 | [solon-projects/solon-web/solon-web-webservices/src/test/resources/app.properties](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/resources/app.properties)<br>[solon-projects/solon-web/solon-web-webservices/src/test/java/demo/server/ServerTest.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/java/demo/server/ServerTest.java)<br>[solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client2/ClientTest2.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client2/ClientTest2.java)<br>[solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client/ClientTest.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client/ClientTest.java)<br>[solon-projects/solon-web/solon-web-webdav/src/test/java/org/noear/solon/web/webdav/test/Demo.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webdav/src/test/java/org/noear/solon/web/webdav/test/Demo.java)<br>[solon-projects/solon-web/solon-web-staticfiles/src/test/resources/app.yml](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-staticfiles/src/test/resources/app.yml)<br>[solon-projects/solon-web/solon-web-staticfiles/src/test/resources/META-INF/resources/doc.html](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-staticfiles/src/test/resources/META-INF/resources/doc.html)<br>[solon-projects/solon-web/solon-web-staticfiles/src/test/resources/META-INF/resources/webjars/hello.html](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-staticfiles/src/test/resources/META-INF/resources/webjars/hello.html) |
| security | 165 | [solon-projects/solon-security/solon-security-web/NOTICE](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/NOTICE)<br>[solon-projects/solon-security/solon-security-web/pom.xml](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/pom.xml)<br>[solon-projects/solon-security/solon-security-web/README.md](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/README.md)<br>[solon-projects/solon-security/solon-security-web/src/test/java/demo/security/web/DemoFilter.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/test/java/demo/security/web/DemoFilter.java)<br>[solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/SecurityFilter.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/SecurityFilter.java)<br>[solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/CacheControlHeadersHandler.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/CacheControlHeadersHandler.java)<br>[solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/HstsHeaderHandler.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/HstsHeaderHandler.java)<br>[solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/XContentTypeOptionsHeaderHandler.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/XContentTypeOptionsHeaderHandler.java) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 121 | [README_CN.md](../../../../sources/opensolon__solon/README_CN.md)<br>[README_EN.md](../../../../sources/opensolon__solon/README_EN.md)<br>[README_JP.md](../../../../sources/opensolon__solon/README_JP.md)<br>[README_RU.md](../../../../sources/opensolon__solon/README_RU.md)<br>[README.md](../../../../sources/opensolon__solon/README.md)<br>[solon-projects/README.md](../../../../sources/opensolon__solon/solon-projects/README.md)<br>[solon-projects/solon-web/solon-web-webservices/README.md](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/README.md)<br>[solon-projects/solon-web/solon-web-webdav/README.md](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webdav/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1482 | [solon-projects/solon-web/solon-web-webservices/src/test/resources/app.properties](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/resources/app.properties)<br>[solon-projects/solon-web/solon-web-webservices/src/test/java/demo/server/ServerTest.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/java/demo/server/ServerTest.java)<br>[solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client2/ClientTest2.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client2/ClientTest2.java)<br>[solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client/ClientTest.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client/ClientTest.java)<br>[solon-projects/solon-web/solon-web-webdav/src/test/java/org/noear/solon/web/webdav/test/Demo.java](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-webdav/src/test/java/org/noear/solon/web/webdav/test/Demo.java)<br>[solon-projects/solon-web/solon-web-staticfiles/src/test/resources/app.yml](../../../../sources/opensolon__solon/solon-projects/solon-web/solon-web-staticfiles/src/test/resources/app.yml) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 165 | [solon-projects/solon-security/solon-security-web/NOTICE](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/NOTICE)<br>[solon-projects/solon-security/solon-security-web/pom.xml](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/pom.xml)<br>[solon-projects/solon-security/solon-security-web/README.md](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/README.md)<br>[solon-projects/solon-security/solon-security-web/src/test/java/demo/security/web/DemoFilter.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/test/java/demo/security/web/DemoFilter.java)<br>[solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/SecurityFilter.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/SecurityFilter.java)<br>[solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/CacheControlHeadersHandler.java](../../../../sources/opensolon__solon/solon-projects/solon-security/solon-security-web/src/main/java/org/noear/solon/security/web/header/CacheControlHeadersHandler.java) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/SolonMavenUtil.java`, `solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/StringUtils.java`, `solon-projects/solon-tool/solon-gradle-plugin/src/main/java/org/noear/solon/gradle/tools/MainClassFinder.java`.
2. agent/tool runtime 매핑: `solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/SolonMavenUtil.java`, `solon-projects/solon-tool/solon-maven-plugin/src/main/java/org/noear/solon/maven/plugin/tools/StringUtils.java`, `solon-projects/solon-tool/solon-gradle-plugin/src/main/java/org/noear/solon/gradle/tools/MainClassFinder.java`.
3. retrieval/memory/indexing 확인: `__test/src/main/resources/static/test/index.html`.
4. test/eval 파일로 동작 검증: `solon-projects/solon-web/solon-web-webservices/src/test/resources/app.properties`, `solon-projects/solon-web/solon-web-webservices/src/test/java/demo/server/ServerTest.java`, `solon-projects/solon-web/solon-web-webservices/src/test/java/demo/client2/ClientTest2.java`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 🔥 Java enterprise application development framework for full scenario Restrained, Efficient, Open, Ecologicalll!!! 700%. 핵심 구조 신호는 Java, pom.xml, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
