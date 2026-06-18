# line/line-sdk-unity

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-sdk-unity |
| local path | sources/line__line-sdk-unity |
| HEAD | b7925f2 |
| stars/forks | 125 / 26 |
| language | C# |
| license | Apache-2.0 |
| pushedAt | 2025-06-19T04:23:01Z |
| trendScore / priorityScore | 80 / 211 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 276 | README.md, linesdk-android-unity-wrapper/build.gradle, .github/ISSUE_TEMPLATE.md |
| Frontend / developer experience | 66 | README.md, linesdk-android-unity-wrapper/build.gradle, .github/ISSUE_TEMPLATE.md |
| Security / compliance | 7 | README.md, .github/ISSUE_TEMPLATE.md, CHANGELOG.md |
| Spec / doc-driven workflow | 6 | README.md, CHANGELOG.md, LINE_SDK_Unity/Assets/Plugins/iOS/LineSDK/vendor/LineSDKObjC.xcframework/ios-arm64_x86_64-simulator/LineSDKObjC.framework/Modules/LineSDKObjC.swiftmodule/arm64-apple-ios-simulator.abi.json |
| RAG / retrieval | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend-dx, korea-signal, rag, sdk-api, security-compliance, spec-driven |
| stacks | Java/Kotlin, C/C++, .NET |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 235 |
| manifests | 2 |
| docs | 4 |
| tests | 12 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LINE SDK for Unity |
| headings | LINE SDK for Unity / Overview / Features / User authentication / Utilizing user data with OpenID support / Using the SDK / Prerequisites / Trying the starter app / Contributing |
| excerpt | LINE SDK for Unity Overview This repo contains the LINE SDK for Unity. It allows you to use LINE Login and LINE API in your Unity games easier. Features The LINE SDK for Unity provides the following features. User authentication This feature allows users to log in to your service with their LINE accounts. With the help of the LINE SDK for Unity, it has never been easier to integrate LINE Login into your app. Your users will automatically log in to your app without entering their LINE credentials if they are already logged in to LINE on their iOS/Android devices. This offers a great way for users to get started with your app without having to go through a registration process. Utilizing user |


## 주요 파일

### Manifests

- README.md
- linesdk-android-unity-wrapper/build.gradle


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| LINE_SDK_Unity | 200 |
| linesdk-android-unity-wrapper | 24 |
| .gitattributes | 1 |
| .github | 1 |
| .gitignore | 1 |
| .ruby-version | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |
| Doxyfile | 1 |
| Gemfile | 1 |
| LICENSE | 1 |
| Rakefile | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .meta | 59 |
| .strings | 40 |
| .cs | 26 |
| .asset | 22 |
| [no-ext] | 17 |
| .kt | 11 |
| .h | 7 |
| .json | 6 |
| .swiftinterface | 6 |
| .md | 4 |
| .xml | 4 |
| .m | 3 |
| .plist | 3 |
| .properties | 3 |
| .swiftdoc | 3 |
| .car | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
