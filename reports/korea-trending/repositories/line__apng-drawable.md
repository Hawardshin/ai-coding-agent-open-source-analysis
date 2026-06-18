# line/apng-drawable

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/apng-drawable |
| local path | sources/line__apng-drawable |
| HEAD | da13784 |
| stars/forks | 253 / 31 |
| language | Kotlin |
| license | Apache-2.0 |
| pushedAt | 2025-08-05T08:51:39Z |
| trendScore / priorityScore | 86 / 195 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 44 | README.md, sample-app/build.gradle.kts, apng-drawable/build.gradle.kts |
| Security / compliance | 9 | README.md, apng-drawable/src/test/kotlin/com/linecorp/apng/ApngDrawableTest.kt, sample-app/src/main/kotlin/com/linecorp/apngsample/MainActivity.kt |
| LLM wiki / memory / graph | 7 | CODE_OF_CONDUCT.md, sample-app/src/main/kotlin/com/linecorp/apngsample/MainActivity.kt, apng-drawable/src/main/kotlin/com/linecorp/apng/ApngDrawable.kt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, korea-signal, llm-wiki-memory, security-compliance |
| stacks | Java/Kotlin, C/C++ |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 57 |
| manifests | 4 |
| docs | 3 |
| tests | 2 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | ApngDrawable |
| headings | ApngDrawable / How to use / Getting started / How to build / How to contribute to ApngDrawable / License |
| excerpt | ApngDrawable ! Maven Central https //img.shields.io/maven central/v/com.linecorp/apng https //search.maven.org/artifact/com.linecorp/apng ApngDrawable is fast and light weight Animated Portable Network Graphics APNG image decoder library for Android platform. ApngDrawable is written in Kotlin and C++. How to use Use Gradle to build the library. Download it from Maven Central https //search.maven.org/artifact/com.linecorp/apng and add configurations in the build.gradle file as follows. If using Kotlin Gradle DSL, add configurations in the build.gradle.kts file as follows. Getting started You can decode from a lot of source types, e.g. File, InputStream and Resources. You can find a more advan |


## 주요 파일

### Manifests

- README.md
- sample-app/build.gradle.kts
- apng-drawable/build.gradle.kts
- build.gradle.kts


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| apng-drawable | 23 |
| sample-app | 13 |
| gradle | 3 |
| .github | 2 |
| .editorconfig | 1 |
| .gitignore | 1 |
| build.gradle.kts | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| Dangerfile | 1 |
| download_libpng_and_apply_apng_patch.sh | 1 |
| Gemfile | 1 |
| gradle.properties | 1 |
| gradlew | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .xml | 10 |
| [no-ext] | 10 |
| .kt | 8 |
| .h | 6 |
| .cpp | 5 |
| .kts | 4 |
| .md | 3 |
| .pro | 2 |
| .properties | 2 |
| .yml | 2 |
| .bat | 1 |
| .jar | 1 |
| .sh | 1 |
| .toml | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
