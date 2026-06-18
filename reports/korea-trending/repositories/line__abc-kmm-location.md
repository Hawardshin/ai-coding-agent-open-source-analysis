# line/abc-kmm-location

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/abc-kmm-location |
| local path | sources/line__abc-kmm-location |
| HEAD | 5637d4e |
| stars/forks | 122 / 9 |
| language | Kotlin |
| license | Apache-2.0 |
| pushedAt | 2023-03-20T22:41:19Z |
| trendScore / priorityScore | 72 / 195 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 81 | README.md, build.gradle.kts, sample/androidApp/build.gradle.kts |
| Security / compliance | 3 | CODE_OF_CONDUCT.md, sample/iosApp/iosApp/ViewController.swift |
| RAG / retrieval | 2 | sample/androidApp/src/main/java/com/linecorp/abc/location/android/MainActivity.kt, src/androidMain/kotlin/com/linecorp/abc/location/LocationManager.kt |
| LLM wiki / memory / graph | 1 | CODE_OF_CONDUCT.md |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, graphMemory, korea-signal, llm-wiki-memory, rag, security-compliance, spec-driven |
| stacks | Java/Kotlin, Swift |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 73 |
| manifests | 5 |
| docs | 3 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Features / Usage / Register handlers for permissions / To get current location just once / To get current location whenever location changes / To stop location updating / Installation / Gradle Settings / Project Settings / Requirements |
| excerpt | ! abc kmm location Location Service Manager for Kotlin Multiplatform Mobile iOS and android images/cover.png ! Kotlin https //img.shields.io/badge/kotlin 1.5.21 blue.svg?logo=kotlin http //kotlinlang.org ! KMM https //img.shields.io/badge/KMM 0.2.7 lightgreen.svg?logo=KMM https //plugins.jetbrains.com/plugin/14936 kotlin multiplatform mobile ! AGP https //img.shields.io/badge/AGP 7.0.1 green.svg?logo=AGP https //developer.android.com/studio/releases/gradle plugin ! Gradle https //img.shields.io/badge/Gradle 7.0.2 blue.svg?logo=Gradle https //gradle.org ! Platform https //img.shields.io/badge/platform ios,android lightgray.svg?style=flat https //img.shields.io/badge/platform ios lightgray.svg |


## 주요 파일

### Manifests

- README.md
- sample/build.gradle.kts
- build.gradle.kts
- sample/androidApp/build.gradle.kts
- sample/shared/build.gradle.kts


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| sample | 39 |
| src | 21 |
| gradle | 2 |
| .gitignore | 1 |
| build.gradle.kts | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| gradle.properties | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| kmm_location.podspec | 1 |
| LICENSE | 1 |
| README.md | 1 |
| settings.gradle.kts | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .kt | 22 |
| .kts | 6 |
| .swift | 6 |
| .xml | 6 |
| .plist | 5 |
| [no-ext] | 5 |
| .properties | 4 |
| .json | 3 |
| .md | 3 |
| .bat | 2 |
| .jar | 2 |
| .podspec | 2 |
| .storyboard | 2 |
| .xcworkspacedata | 2 |
| .pbxproj | 1 |
| .xcscheme | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
