# line/flutter_line_sdk

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/flutter_line_sdk |
| local path | sources/line__flutter_line_sdk |
| HEAD | 8be122c |
| stars/forks | 228 / 55 |
| language | Dart |
| license | Apache-2.0 |
| pushedAt | 2026-04-09T01:19:26Z |
| trendScore / priorityScore | 96 / 250 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 138 | example/README.md, README.md, android/build.gradle |
| Frontend / developer experience | 42 | example/README.md, README.md, example/pubspec.yaml |
| RAG / retrieval | 5 | example/android/app/src/main/kotlin/com/linecorp/linesdk/flutter_line_sdk_example/MainActivity.kt, example/android/app/src/main/kotlin/com/linecorp/linesdk/sample/MainActivity.kt, android/src/main/kotlin/com/linecorp/flutter_line_sdk/FlutterLineSdkPlugin.kt |
| Security / compliance | 5 | README.md, .github/ISSUE_TEMPLATE.md |
| Spec / doc-driven workflow | 3 | CHANGELOG.md |
| LLM wiki / memory / graph | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend-dx, korea-signal, llm-wiki-memory, rag, sdk-api, security-compliance, spec-driven |
| stacks | Java/Kotlin, Swift, C/C++ |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 99 |
| manifests | 10 |
| docs | 7 |
| tests | 1 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | flutter_line_sdk |
| headings | flutter_line_sdk / Prerequisites / iOS app settings / Android app settings / Installation / Adding flutter_line_sdk package / Set up LINE SDK / Importing and using / Error handling / Contributing |
| excerpt | flutter line sdk ! build https //github.com/line/flutter line sdk/actions/workflows/build.yml/badge.svg https //github.com/line/flutter line sdk/actions/workflows/build.yml A Flutter plugin that lets developers access LINE's native SDKs in Flutter apps with Dart . The plugin helps you integrate LINE Login features in your app. You can redirect users to LINE or a web page where they log in with their LINE credentials. Example For more examples, see the example app https //github.com/line/flutter line sdk/tree/master/example and API definitions . Prerequisites From version 2.0, flutter line sdk supports null safety https //dart.dev/null safety . If you are still seeking a legacy version withou |


## 주요 파일

### Manifests

- example/README.md
- example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md
- README.md
- android/build.gradle
- example/android/app/build.gradle
- example/android/build.gradle
- example/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/swiftpm/Package.resolved
- example/ios/Runner.xcworkspace/xcshareddata/swiftpm/Package.resolved
- ios/flutter_line_sdk/Package.resolved
- ios/flutter_line_sdk/Package.swift


### Spec / Docs / Prompt Artifacts

- .claude/skills/release/SKILL.md


### Agent Instruction Files

- .claude/skills/release/SKILL.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| example | 49 |
| android | 21 |
| lib | 9 |
| ios | 5 |
| .github | 2 |
| .claude | 1 |
| .gitignore | 1 |
| .metadata | 1 |
| .ruby-version | 1 |
| analysis_options.yaml | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |
| flutter_line_sdk.iml | 1 |
| Gemfile | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .dart | 16 |
| .kt | 13 |
| [no-ext] | 12 |
| .xml | 8 |
| .md | 7 |
| .gradle | 5 |
| .plist | 4 |
| .properties | 4 |
| .swift | 4 |
| .resolved | 3 |
| .yaml | 3 |
| .json | 2 |
| .pro | 2 |
| .storyboard | 2 |
| .xcconfig | 2 |
| .xcsettings | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
