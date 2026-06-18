# Samsung/Dexter 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Dexter is a static analysis platform to find and remove defects efficiently and immediately during the coding-time.

## 요약

- 조사 단위: `sources/Samsung__Dexter` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,838 files, 577 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=project/dexter-server/server.js, project/dexter-monitor/routes/server.js, project/dexter-cppcheck/test-cpp-project/src/main.cpp이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Samsung/Dexter |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | HTML |
| Stars | 57 |
| Forks | 29 |
| License | BSD-2-Clause |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Samsung__Dexter](../../../../sources/Samsung__Dexter) |
| 기존 보고서 | [reports/korea-trending/repositories/Samsung__Dexter.md](../../../korea-trending/repositories/Samsung__Dexter.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2838 / 577 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | doc, project, wiki |
| 상위 확장자 | .html: 772, .js: 353, .java: 332, .cs: 235, (none): 144, .css: 142, .ttf: 138, .jar: 122, .eot: 44, .png: 43, .properties: 42, .xml: 40 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| doc | documentation surface | 1 |
| project | top-level component | 1 |
| wiki | top-level component | 1 |


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
| entrypoints | [project/dexter-server/server.js](../../../../sources/Samsung__Dexter/project/dexter-server/server.js) | entrypoints signal |
| entrypoints | [project/dexter-monitor/routes/server.js](../../../../sources/Samsung__Dexter/project/dexter-monitor/routes/server.js) | entrypoints signal |
| entrypoints | [project/dexter-cppcheck/test-cpp-project/src/main.cpp](../../../../sources/Samsung__Dexter/project/dexter-cppcheck/test-cpp-project/src/main.cpp) | entrypoints signal |
| config | [project/dexter-server/package.json](../../../../sources/Samsung__Dexter/project/dexter-server/package.json) | config signal |
| config | [project/dexter-monitor/package.json](../../../../sources/Samsung__Dexter/project/dexter-monitor/package.json) | config signal |
| docs | [README.md](../../../../sources/Samsung__Dexter/README.md) | docs signal |
| docs | [project/dexter-vs/README.md](../../../../sources/Samsung__Dexter/project/dexter-vs/README.md) | docs signal |
| docs | [project/dexter-server/README.md](../../../../sources/Samsung__Dexter/project/dexter-server/README.md) | docs signal |
| docs | [project/dexter-server/public/gq/tools/yui-compressor/README](../../../../sources/Samsung__Dexter/project/dexter-server/public/gq/tools/yui-compressor/README) | docs signal |
| eval | [project/dexter-vs/dexter-vs-tests/packages.config](../../../../sources/Samsung__Dexter/project/dexter-vs/dexter-vs-tests/packages.config) | eval signal |
| eval | [project/dexter-vs/Dexter/Tests/app.config](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/app.config) | eval signal |
| eval | [project/dexter-vs/Dexter/Tests/Dexter.Tests.csproj](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/Dexter.Tests.csproj) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [project/dexter-server/server.js](../../../../sources/Samsung__Dexter/project/dexter-server/server.js)<br>[project/dexter-monitor/routes/server.js](../../../../sources/Samsung__Dexter/project/dexter-monitor/routes/server.js)<br>[project/dexter-cppcheck/test-cpp-project/src/main.cpp](../../../../sources/Samsung__Dexter/project/dexter-cppcheck/test-cpp-project/src/main.cpp) |
| agentRuntime | 960 | [project/dexter-server/public/tool/NotFoundCheckerDescription/empty_checker_description.html](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/empty_checker_description.html)<br>[project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/jquery-2.0.3.min.js](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/jquery-2.0.3.min.js)<br>[project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/jquery.min.js](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/jquery.min.js)<br>[project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/prettify.js](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/prettify.js)<br>[project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_2d2816fe.eot](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_2d2816fe.eot)<br>[project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_aea8981c.eot](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_aea8981c.eot)<br>[project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_aea8981c.ttf](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_aea8981c.ttf)<br>[project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_aea8981c.woff](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_aea8981c.woff) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 31 | `wiki/images/Catch (Bug[] bugs).svg`<br>[wiki/images/DevelopedBySamsung.svg](../../../../sources/Samsung__Dexter/wiki/images/DevelopedBySamsung.svg)<br>[wiki/images/DexterDiagram.svg](../../../../sources/Samsung__Dexter/wiki/images/DexterDiagram.svg)<br>[wiki/images/DexterVsIDE.svg](../../../../sources/Samsung__Dexter/wiki/images/DexterVsIDE.svg)<br>[wiki/images/DexterYesOrNo.svg](../../../../sources/Samsung__Dexter/wiki/images/DexterYesOrNo.svg)<br>`wiki/images/overview (deprecated).png`<br>[wiki/images/logos/CLILogo.svg](../../../../sources/Samsung__Dexter/wiki/images/logos/CLILogo.svg)<br>[wiki/images/logos/EclipseLogo.svg](../../../../sources/Samsung__Dexter/wiki/images/logos/EclipseLogo.svg) |
| spec | 0 | 명확하지 않음 |
| eval | 386 | [project/dexter-vs/dexter-vs-tests/packages.config](../../../../sources/Samsung__Dexter/project/dexter-vs/dexter-vs-tests/packages.config)<br>[project/dexter-vs/Dexter/Tests/app.config](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/app.config)<br>[project/dexter-vs/Dexter/Tests/Dexter.Tests.csproj](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/Dexter.Tests.csproj)<br>[project/dexter-vs/Dexter/Tests/packages.config](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/packages.config)<br>[project/dexter-vs/Dexter/Tests/TestData/dexter-result.xml](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/TestData/dexter-result.xml)<br>[project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject.sln](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject.sln)<br>[project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject/SampleClass.cpp](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject/SampleClass.cpp)<br>[project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject/SampleClass.h](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject/SampleClass.h) |
| security | 2 | [project/dexter-server/util/auth-util.js](../../../../sources/Samsung__Dexter/project/dexter-server/util/auth-util.js)<br>[project/dexter-server/public/tool/findbugs/JAVA/help/ML_SYNC_ON_FIELD_TO_GUARD_CHANGING_THAT_FIELD.html](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/findbugs/JAVA/help/ML_SYNC_ON_FIELD_TO_GUARD_CHANGING_THAT_FIELD.html) |
| ci | 8 | [Jenkinsfile](../../../../sources/Samsung__Dexter/Jenkinsfile)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/config.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/config.jelly)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/global.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/global.jelly)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterProjectAction/index.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterProjectAction/index.jelly)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterBuildAction/index.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterBuildAction/index.jelly)<br>[project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterBuildAction.java](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterBuildAction.java)<br>[project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterProjectAction.java](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterProjectAction.java)<br>[project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterPublisher.java](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterPublisher.java) |
| container | 1 | [project/dexter-server/Dockerfile](../../../../sources/Samsung__Dexter/project/dexter-server/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 8 | [README.md](../../../../sources/Samsung__Dexter/README.md)<br>[project/dexter-vs/README.md](../../../../sources/Samsung__Dexter/project/dexter-vs/README.md)<br>[project/dexter-server/README.md](../../../../sources/Samsung__Dexter/project/dexter-server/README.md)<br>[project/dexter-server/public/gq/tools/yui-compressor/README](../../../../sources/Samsung__Dexter/project/dexter-server/public/gq/tools/yui-compressor/README)<br>[project/dexter-server/public/gq/tools/closure-compiler/README](../../../../sources/Samsung__Dexter/project/dexter-server/public/gq/tools/closure-compiler/README)<br>[project/dexter-monitor/README.md](../../../../sources/Samsung__Dexter/project/dexter-monitor/README.md)<br>[project/dexter-daemon/src/resource/README](../../../../sources/Samsung__Dexter/project/dexter-daemon/src/resource/README)<br>[doc/Dexter_Build_Guide.pdf](../../../../sources/Samsung__Dexter/doc/Dexter_Build_Guide.pdf) |
| config | 2 | [project/dexter-server/package.json](../../../../sources/Samsung__Dexter/project/dexter-server/package.json)<br>[project/dexter-monitor/package.json](../../../../sources/Samsung__Dexter/project/dexter-monitor/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 386 | [project/dexter-vs/dexter-vs-tests/packages.config](../../../../sources/Samsung__Dexter/project/dexter-vs/dexter-vs-tests/packages.config)<br>[project/dexter-vs/Dexter/Tests/app.config](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/app.config)<br>[project/dexter-vs/Dexter/Tests/Dexter.Tests.csproj](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/Dexter.Tests.csproj)<br>[project/dexter-vs/Dexter/Tests/packages.config](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/packages.config)<br>[project/dexter-vs/Dexter/Tests/TestData/dexter-result.xml](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/TestData/dexter-result.xml)<br>[project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject.sln](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject.sln) |
| CI workflow | 8 | [Jenkinsfile](../../../../sources/Samsung__Dexter/Jenkinsfile)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/config.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/config.jelly)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/global.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/global.jelly)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterProjectAction/index.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterProjectAction/index.jelly)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterBuildAction/index.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterBuildAction/index.jelly)<br>[project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterBuildAction.java](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterBuildAction.java) |
| 컨테이너/배포 | 1 | [project/dexter-server/Dockerfile](../../../../sources/Samsung__Dexter/project/dexter-server/Dockerfile) |
| 보안/정책 | 2 | [project/dexter-server/util/auth-util.js](../../../../sources/Samsung__Dexter/project/dexter-server/util/auth-util.js)<br>[project/dexter-server/public/tool/findbugs/JAVA/help/ML_SYNC_ON_FIELD_TO_GUARD_CHANGING_THAT_FIELD.html](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/findbugs/JAVA/help/ML_SYNC_ON_FIELD_TO_GUARD_CHANGING_THAT_FIELD.html) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `project/dexter-server/server.js`, `project/dexter-monitor/routes/server.js`, `project/dexter-cppcheck/test-cpp-project/src/main.cpp`.
2. entrypoint를 따라 실행 흐름 확인: `project/dexter-server/server.js`, `project/dexter-monitor/routes/server.js`, `project/dexter-cppcheck/test-cpp-project/src/main.cpp`.
3. agent/tool runtime 매핑: `project/dexter-server/public/tool/NotFoundCheckerDescription/empty_checker_description.html`, `project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/jquery-2.0.3.min.js`, `project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/jquery.min.js`.
4. retrieval/memory/indexing 확인: `wiki/images/Catch (Bug[] bugs).svg`, `wiki/images/DevelopedBySamsung.svg`, `wiki/images/DexterDiagram.svg`.
5. test/eval 파일로 동작 검증: `project/dexter-vs/dexter-vs-tests/packages.config`, `project/dexter-vs/Dexter/Tests/app.config`, `project/dexter-vs/Dexter/Tests/Dexter.Tests.csproj`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Dexter is a static analysis platform to find and remove defects efficiently and immediately during the coding time.. 핵심 구조 신호는 HTML, README.md, LICENSE, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
