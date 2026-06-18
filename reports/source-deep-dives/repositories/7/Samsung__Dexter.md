# Samsung/Dexter Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Dexter is a static analysis platform to find and remove defects efficiently and immediately during the coding-time.

## 요약

- 조사 단위: `sources/Samsung__Dexter` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,838 files, 577 directories, depth score 117, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=project/dexter-server/server.js, project/dexter-monitor/routes/server.js, project/dexter-cppcheck/test-cpp-project/src/main.cpp이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Samsung/Dexter |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | HTML |
| Stars | 57 |
| Forks | 29 |
| License | BSD-2-Clause |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/Samsung__Dexter](../../../../sources/Samsung__Dexter) |
| Existing report | [reports/korea-trending/repositories/Samsung__Dexter.md](../../../korea-trending/repositories/Samsung__Dexter.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2838 / 577 |
| Max observed depth | 12 |
| Top directories | doc, project, wiki |
| Top extensions | .html: 772, .js: 353, .java: 332, .cs: 235, (none): 144, .css: 142, .ttf: 138, .jar: 122, .eot: 44, .png: 43, .properties: 42, .xml: 40 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| doc | documentation surface | 1 |
| project | top-level component | 1 |
| wiki | top-level component | 1 |


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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [project/dexter-server/server.js](../../../../sources/Samsung__Dexter/project/dexter-server/server.js)<br>[project/dexter-monitor/routes/server.js](../../../../sources/Samsung__Dexter/project/dexter-monitor/routes/server.js)<br>[project/dexter-cppcheck/test-cpp-project/src/main.cpp](../../../../sources/Samsung__Dexter/project/dexter-cppcheck/test-cpp-project/src/main.cpp) |
| agentRuntime | 960 | [project/dexter-server/public/tool/NotFoundCheckerDescription/empty_checker_description.html](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/empty_checker_description.html)<br>[project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/jquery-2.0.3.min.js](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/jquery-2.0.3.min.js)<br>[project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/jquery.min.js](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/jquery.min.js)<br>[project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/prettify.js](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/prettify.js)<br>[project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_2d2816fe.eot](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_2d2816fe.eot)<br>[project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_aea8981c.eot](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_aea8981c.eot)<br>[project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_aea8981c.ttf](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_aea8981c.ttf)<br>[project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_aea8981c.woff](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/NotFoundCheckerDescription/asset/fonts/fontawesome-webfont_aea8981c.woff) |
| mcp | 0 | not obvious |
| retrieval | 31 | `wiki/images/Catch (Bug[] bugs).svg`<br>[wiki/images/DevelopedBySamsung.svg](../../../../sources/Samsung__Dexter/wiki/images/DevelopedBySamsung.svg)<br>[wiki/images/DexterDiagram.svg](../../../../sources/Samsung__Dexter/wiki/images/DexterDiagram.svg)<br>[wiki/images/DexterVsIDE.svg](../../../../sources/Samsung__Dexter/wiki/images/DexterVsIDE.svg)<br>[wiki/images/DexterYesOrNo.svg](../../../../sources/Samsung__Dexter/wiki/images/DexterYesOrNo.svg)<br>`wiki/images/overview (deprecated).png`<br>[wiki/images/logos/CLILogo.svg](../../../../sources/Samsung__Dexter/wiki/images/logos/CLILogo.svg)<br>[wiki/images/logos/EclipseLogo.svg](../../../../sources/Samsung__Dexter/wiki/images/logos/EclipseLogo.svg) |
| spec | 0 | not obvious |
| eval | 386 | [project/dexter-vs/dexter-vs-tests/packages.config](../../../../sources/Samsung__Dexter/project/dexter-vs/dexter-vs-tests/packages.config)<br>[project/dexter-vs/Dexter/Tests/app.config](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/app.config)<br>[project/dexter-vs/Dexter/Tests/Dexter.Tests.csproj](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/Dexter.Tests.csproj)<br>[project/dexter-vs/Dexter/Tests/packages.config](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/packages.config)<br>[project/dexter-vs/Dexter/Tests/TestData/dexter-result.xml](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/TestData/dexter-result.xml)<br>[project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject.sln](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject.sln)<br>[project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject/SampleClass.cpp](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject/SampleClass.cpp)<br>[project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject/SampleClass.h](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject/SampleClass.h) |
| security | 2 | [project/dexter-server/util/auth-util.js](../../../../sources/Samsung__Dexter/project/dexter-server/util/auth-util.js)<br>[project/dexter-server/public/tool/findbugs/JAVA/help/ML_SYNC_ON_FIELD_TO_GUARD_CHANGING_THAT_FIELD.html](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/findbugs/JAVA/help/ML_SYNC_ON_FIELD_TO_GUARD_CHANGING_THAT_FIELD.html) |
| ci | 8 | [Jenkinsfile](../../../../sources/Samsung__Dexter/Jenkinsfile)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/config.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/config.jelly)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/global.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/global.jelly)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterProjectAction/index.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterProjectAction/index.jelly)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterBuildAction/index.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterBuildAction/index.jelly)<br>[project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterBuildAction.java](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterBuildAction.java)<br>[project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterProjectAction.java](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterProjectAction.java)<br>[project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterPublisher.java](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterPublisher.java) |
| container | 1 | [project/dexter-server/Dockerfile](../../../../sources/Samsung__Dexter/project/dexter-server/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 8 | [README.md](../../../../sources/Samsung__Dexter/README.md)<br>[project/dexter-vs/README.md](../../../../sources/Samsung__Dexter/project/dexter-vs/README.md)<br>[project/dexter-server/README.md](../../../../sources/Samsung__Dexter/project/dexter-server/README.md)<br>[project/dexter-server/public/gq/tools/yui-compressor/README](../../../../sources/Samsung__Dexter/project/dexter-server/public/gq/tools/yui-compressor/README)<br>[project/dexter-server/public/gq/tools/closure-compiler/README](../../../../sources/Samsung__Dexter/project/dexter-server/public/gq/tools/closure-compiler/README)<br>[project/dexter-monitor/README.md](../../../../sources/Samsung__Dexter/project/dexter-monitor/README.md)<br>[project/dexter-daemon/src/resource/README](../../../../sources/Samsung__Dexter/project/dexter-daemon/src/resource/README)<br>[doc/Dexter_Build_Guide.pdf](../../../../sources/Samsung__Dexter/doc/Dexter_Build_Guide.pdf) |
| config | 2 | [project/dexter-server/package.json](../../../../sources/Samsung__Dexter/project/dexter-server/package.json)<br>[project/dexter-monitor/package.json](../../../../sources/Samsung__Dexter/project/dexter-monitor/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 386 | [project/dexter-vs/dexter-vs-tests/packages.config](../../../../sources/Samsung__Dexter/project/dexter-vs/dexter-vs-tests/packages.config)<br>[project/dexter-vs/Dexter/Tests/app.config](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/app.config)<br>[project/dexter-vs/Dexter/Tests/Dexter.Tests.csproj](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/Dexter.Tests.csproj)<br>[project/dexter-vs/Dexter/Tests/packages.config](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/packages.config)<br>[project/dexter-vs/Dexter/Tests/TestData/dexter-result.xml](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/TestData/dexter-result.xml)<br>[project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject.sln](../../../../sources/Samsung__Dexter/project/dexter-vs/Dexter/Tests/TestData/SampleCppProject/SampleCppProject.sln) |
| CI workflows | 8 | [Jenkinsfile](../../../../sources/Samsung__Dexter/Jenkinsfile)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/config.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/config.jelly)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/global.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterPublisher/global.jelly)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterProjectAction/index.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterProjectAction/index.jelly)<br>[project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterBuildAction/index.jelly](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/resources/io/jenkins/plugins/dexter/DexterBuildAction/index.jelly)<br>[project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterBuildAction.java](../../../../sources/Samsung__Dexter/project/dexter-jenkins/src/main/java/io/jenkins/plugins/dexter/DexterBuildAction.java) |
| Containers / deploy | 1 | [project/dexter-server/Dockerfile](../../../../sources/Samsung__Dexter/project/dexter-server/Dockerfile) |
| Security / policy | 2 | [project/dexter-server/util/auth-util.js](../../../../sources/Samsung__Dexter/project/dexter-server/util/auth-util.js)<br>[project/dexter-server/public/tool/findbugs/JAVA/help/ML_SYNC_ON_FIELD_TO_GUARD_CHANGING_THAT_FIELD.html](../../../../sources/Samsung__Dexter/project/dexter-server/public/tool/findbugs/JAVA/help/ML_SYNC_ON_FIELD_TO_GUARD_CHANGING_THAT_FIELD.html) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `project/dexter-server/server.js`, `project/dexter-monitor/routes/server.js`, `project/dexter-cppcheck/test-cpp-project/src/main.cpp`.
2. Trace execution through entrypoints: `project/dexter-server/server.js`, `project/dexter-monitor/routes/server.js`, `project/dexter-cppcheck/test-cpp-project/src/main.cpp`.
3. Map agent/tool runtime through: `project/dexter-server/public/tool/NotFoundCheckerDescription/empty_checker_description.html`, `project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/jquery-2.0.3.min.js`, `project/dexter-server/public/tool/NotFoundCheckerDescription/asset/js/jquery.min.js`.
4. Inspect retrieval/memory/indexing through: `wiki/images/Catch (Bug[] bugs).svg`, `wiki/images/DevelopedBySamsung.svg`, `wiki/images/DexterDiagram.svg`.
5. Verify behavior through test/eval files: `project/dexter-vs/dexter-vs-tests/packages.config`, `project/dexter-vs/Dexter/Tests/app.config`, `project/dexter-vs/Dexter/Tests/Dexter.Tests.csproj`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Dexter is a static analysis platform to find and remove defects efficiently and immediately during the coding time.. 핵심 구조 신호는 HTML, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
