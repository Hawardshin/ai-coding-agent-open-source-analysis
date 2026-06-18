# kakao/kakao_flutter_sdk

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/kakao_flutter_sdk |
| local path | sources/kakao__kakao_flutter_sdk |
| HEAD | a88d025 |
| stars/forks | 195 / 74 |
| language | Dart |
| license | Apache-2.0 |
| pushedAt | 2026-06-04T00:37:17Z |
| trendScore / priorityScore | 101 / 264 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 185 | README.md, example/android/app/build.gradle.kts, packages/kakao_flutter_sdk_auth/android/build.gradle |
| Frontend / developer experience | 124 | README.md, example/android/app/build.gradle.kts, packages/kakao_flutter_sdk_auth/android/build.gradle |
| LLM wiki / memory / graph | 15 | README.md, .github/pull_request_template.md, NOTICE.md |
| RAG / retrieval | 13 | CHANGELOG.md, example/android/app/src/main/kotlin/com/kakao/sdk/sample/flutter/MainActivity.kt, packages/kakao_flutter_sdk_auth/android/src/main/kotlin/com/kakao/sdk/flutter/auth/KakaoFlutterSdkAuthPlugin.kt |
| Security / compliance | 8 | README.md, CHANGELOG.md, NOTICE.md |
| Spec / doc-driven workflow | 2 | README.md, CHANGELOG.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, sdk-api, security-compliance, spec-driven |
| stacks | Java/Kotlin, Swift, C/C++ |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 426 |
| manifests | 9 |
| docs | 7 |
| tests | 60 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | kakao_flutter_sdk |
| headings | kakao_flutter_sdk / Requirements / How to develop / How to Contribute / License |
| excerpt | kakao flutter sdk This document introduces how to use the Kakao SDK for Flutter Flutter SDK . The Flutter SDK supports Android and iOS platforms as of now, and will support web platform in the near future. Requirements Here are what you need to use the Flutter SDK Dart 3.9.0 or higher Flutter 3.38.0 or higher Target Android API level 21 or higher Android 5.0 Lollipop or higher iOS Deployment Target 13.0 or higher Web browser support https //developers.kakao.com/docs/latest/flutter/getting started before you begin supported browser How to develop To integrate the Kakao APIs with the Flutter SDK, read the following documentation Getting started https //developers.kakao.com/docs/latest/flutter/ |


## 주요 파일

### Manifests

- example/README.md
- example/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md
- README.md
- example/android/app/build.gradle.kts
- example/android/build.gradle.kts
- packages/kakao_flutter_sdk_auth/android/build.gradle
- packages/kakao_flutter_sdk_common/android/build.gradle
- packages/kakao_flutter_sdk_auth/ios/kakao_flutter_sdk_auth/Package.swift
- packages/kakao_flutter_sdk_common/ios/kakao_flutter_sdk_common/Package.swift


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 334 |
| example | 72 |
| .github | 6 |
| scripts | 6 |
| .gitignore | 1 |
| analysis_options.yaml | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| NOTICE.md | 1 |
| pubspec.yaml | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .dart | 288 |
| [no-ext] | 31 |
| .yaml | 25 |
| .kt | 15 |
| .swift | 11 |
| .xml | 11 |
| .md | 7 |
| .gradle | 4 |
| .plist | 4 |
| .json | 3 |
| .kts | 3 |
| .svg | 3 |
| .yml | 3 |
| .podspec | 2 |
| .properties | 2 |
| .storyboard | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
