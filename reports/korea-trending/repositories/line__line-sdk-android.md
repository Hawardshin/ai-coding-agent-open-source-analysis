# line/line-sdk-android

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-sdk-android |
| local path | sources/line__line-sdk-android |
| HEAD | f18f8e2 |
| stars/forks | 150 / 53 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2026-06-15T06:18:43Z |
| trendScore / priorityScore | 102 / 273 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 500 | README.md, app/build.gradle.kts, line-sdk/build.gradle |
| Frontend / developer experience | 180 | README.md, line-sdk/build.gradle, .github/workflows/ossrh.yml |
| Security / compliance | 15 | README.md, .github/ISSUE_TEMPLATE.md, line-sdk/src/test/java/com/linecorp/linesdk/auth/internal/LineAuthenticationControllerTest.java |
| LLM wiki / memory / graph | 7 | app/src/main/java/com/linecorp/linesdk/sample/ApiListActivity.kt, app/src/main/java/com/linecorp/linesdk/sample/MainActivity.kt, line-sdk/src/main/java/com/linecorp/linesdk/dialog/internal/GetTargetUserTask.java |
| AI agent / tool use | 5 | line-sdk/src/main/java/com/linecorp/linesdk/internal/nwclient/core/UserAgentGenerator.java, line-sdk/src/test/java/com/linecorp/linesdk/internal/nwclient/core/ChannelServiceHttpClientTest.java |
| RAG / retrieval | 3 | README.md, .github/workflows/ossrh.yml, line-sdk/src/main/java/com/linecorp/linesdk/auth/LineLoginApi.java |
| Spec / doc-driven workflow | 3 | README.md, line-sdk/src/main/java/com/linecorp/linesdk/auth/internal/LineAuthenticationStatus.java |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Java/Kotlin, .NET |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 331 |
| manifests | 5 |
| docs | 3 |
| tests | 48 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Overview # |
| headings | Overview # / Features # / User authentication ## / Utilizing user data with OpenID support ### / Setup # / Pre-request / Gradle / Quickstart / Add login buton to layout xml / Use it in code |
| excerpt | <img src="sdklogo.png" width="355" height="97" ! Maven Central https //img.shields.io/maven central/v/com.linecorp.linesdk/linesdk.svg?label=Maven%20Central https //search.maven.org/search?q=g %22com.linecorp.linesdk%22%20AND%20a %22linesdk%22 Overview The LINE SDK for Android provides a modern way of implementing LINE APIs. The features included in this SDK will help you develop an Android app with engaging and personalized user experience. Features The LINE SDK for Android provides the following features. User authentication This feature allows users to log in to your service with their LINE accounts. With the help of the LINE SDK for Android, it has never been easier to integrate LINE Log |


## 주요 파일

### Manifests

- README.md
- app/build.gradle.kts
- build.gradle
- line-sdk/build.gradle
- templates/package.cs


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| line-sdk | 238 |
| templates | 47 |
| app | 29 |
| .github | 3 |
| gradle | 2 |
| .gitignore | 1 |
| .travis.yml | 1 |
| build.gradle | 1 |
| CONTRIBUTING.md | 1 |
| dependencyVersion.gradle | 1 |
| gradle.properties | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 175 |
| .xml | 51 |
| .kt | 34 |
| .cs | 31 |
| [no-ext] | 6 |
| .js | 5 |
| .css | 4 |
| .gradle | 4 |
| .md | 3 |
| .pro | 3 |
| .yml | 3 |
| .eot | 2 |
| .properties | 2 |
| .ttf | 2 |
| .woff | 2 |
| .bat | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
