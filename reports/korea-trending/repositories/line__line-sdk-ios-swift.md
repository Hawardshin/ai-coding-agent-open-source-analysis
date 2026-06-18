# line/line-sdk-ios-swift

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-sdk-ios-swift |
| local path | sources/line__line-sdk-ios-swift |
| HEAD | 642f38e |
| stars/forks | 876 / 98 |
| language | Swift |
| license | Apache-2.0 |
| pushedAt | 2026-04-30T01:28:26Z |
| trendScore / priorityScore | 108 / 294 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 500 | README.md, .github/workflows/coverage.yaml, .github/workflows/login-test.yaml |
| Frontend / developer experience | 187 | README.md, .github/workflows/coverage.yaml, .github/workflows/login-test.yaml |
| Security / compliance | 44 | README.md, .github/ISSUE_TEMPLATE.md, CHANGELOG.md |
| RAG / retrieval | 3 | README.md, CHANGELOG.md |
| Spec / doc-driven workflow | 3 | README.md, CHANGELOG.md |
| LLM wiki / memory / graph | 2 | CHANGELOG.md, LineSDK/LineSDKTests/Login/LoginManagerTests.swift |
| AI agent / tool use | 1 | LineSDK/LineSDKTests/Networking/AdapterTests.swift |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, localRuntime, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Swift, Ruby |
| capabilities | Graph/memory store, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 489 |
| manifests | 3 |
| docs | 6 |
| tests | 0 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LINE SDK for iOS Swift |
| headings | LINE SDK for iOS Swift / Overview / Features / User authentication / Utilizing user data with OpenID support / Using the SDK / Prerequisites / Trying the starter app / Contributing |
| excerpt | <img src="https //raw.githubusercontent.com/line/line sdk ios swift/assets/assets/sdklogo.png" width="355" height="97" ! LINE SDK CI https //github.com/line/line sdk ios swift/actions/workflows/ci.yaml/badge.svg?branch=master https //github.com/line/line sdk ios swift/actions/workflows/ci.yaml ! Coverage https //img.shields.io/endpoint?url=https //gist.githubusercontent.com/onevcat/49ddb455d585b4c0599186552cfb0249/raw/line sdk ios coverage.json https //line.github.io/line sdk ios swift/ ! CocoaPods Compatible https //img.shields.io/cocoapods/v/LineSDKSwift.svg https //cocoapods.org/pods/LineSDKSwift ! Swift Package Manager Compatible https //img.shields.io/badge/SPM supported DE5C43.svg?styl |


## 주요 파일

### Manifests

- fastlane/README.md
- README.md
- Package.swift


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| LineSDK | 359 |
| LineSDKSample | 63 |
| jazzy-templates | 19 |
| LineSDKSample-SwiftUI | 18 |
| script | 5 |
| .github | 4 |
| fastlane | 4 |
| LineSDK.xcworkspace | 4 |
| .gitignore | 1 |
| .jazzy-internal.yaml | 1 |
| .jazzy.yaml | 1 |
| .ruby-version | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .swift | 336 |
| .strings | 38 |
| .json | 26 |
| .plist | 13 |
| [no-ext] | 9 |
| .mustache | 7 |
| .md | 6 |
| .xcscheme | 6 |
| .yaml | 5 |
| .m | 4 |
| .sh | 4 |
| .js | 3 |
| .pbxproj | 3 |
| .pem | 3 |
| .scss | 3 |
| .xcworkspacedata | 3 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
