# line/abc-kmm-shared-storage

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/abc-kmm-shared-storage |
| local path | sources/line__abc-kmm-shared-storage |
| HEAD | 3e700b8 |
| stars/forks | 29 / 6 |
| language | Kotlin |
| license |  |
| pushedAt | 2023-03-20T22:41:56Z |
| trendScore / priorityScore | 76 / 185 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 42 | README.md, build.gradle.kts, sample/androidApp/build.gradle.kts |
| Security / compliance | 6 | shared-storage/build.gradle.kts, shared-storage/src/androidMain/kotlin/com/linecorp/abc/sharedstorage/SharedStorage.kt, CODE_OF_CONDUCT.md |
| Frontend / developer experience | 1 | shared-storage/src/androidTest/kotlin/com/linecorp/abc/sharedstorage/SharedStorageTest.kt |
| LLM wiki / memory / graph | 1 | CODE_OF_CONDUCT.md |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, rag, security-compliance, spec-driven |
| stacks | Java/Kotlin, Swift, C/C++ |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 67 |
| manifests | 7 |
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
| headings | Features / Usage / To store general value / To get general value / To store secure value / To get secure value / Advanced / To Use Annotations for Code Generating (Android only) / Integration with @propertyWrapper on iOS / Installation |
| excerpt | ! shared storage kmm A local storage management library for Kotlin Multiplatform Mobile iOS and android images/cover.png ! Kotlin https //img.shields.io/badge/kotlin 1.5.21 blue.svg?logo=kotlin http //kotlinlang.org ! KMM https //img.shields.io/badge/KMM 0.2.7 lightgreen.svg?logo=KMM https //plugins.jetbrains.com/plugin/14936 kotlin multiplatform mobile ! AGP https //img.shields.io/badge/AGP 7.0.1 green.svg?logo=AGP https //developer.android.com/studio/releases/gradle plugin ! Gradle https //img.shields.io/badge/Gradle 7.0.2 blue.svg?logo=Gradle https //gradle.org ! Platform https //img.shields.io/badge/platform ios,android lightgray.svg?style=flat https //img.shields.io/badge/platform ios l |


## 주요 파일

### Manifests

- README.md
- shared-storage-annotations/build.gradle.kts
- shared-storage/build.gradle.kts
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
| sample | 35 |
| shared-storage | 13 |
| shared-storage-annotations | 7 |
| gradle | 2 |
| .gitignore | 1 |
| build.gradle.kts | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| gradle.properties | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| LICENSE | 1 |
| README.md | 1 |
| settings.gradle.kts | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .kt | 12 |
| .kts | 8 |
| .xml | 6 |
| .properties | 5 |
| .swift | 5 |
| [no-ext] | 5 |
| .plist | 4 |
| .jar | 3 |
| .md | 3 |
| .bat | 2 |
| .h | 2 |
| .json | 2 |
| .storyboard | 2 |
| .a | 1 |
| .def | 1 |
| .pbxproj | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
