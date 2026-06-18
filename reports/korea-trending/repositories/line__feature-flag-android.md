# line/feature-flag-android

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/feature-flag-android |
| local path | sources/line__feature-flag-android |
| HEAD | db3dc4c |
| stars/forks | 114 / 9 |
| language | Kotlin |
| license | Apache-2.0 |
| pushedAt | 2026-01-07T01:39:21Z |
| trendScore / priorityScore | 81 / 209 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 298 | README.md, feature-flag/build.gradle.kts, intellij-plugin/build.gradle.kts |
| Security / compliance | 69 | README.md, intellij-plugin/build.gradle.kts, feature-flag/src/test/kotlin/com/linecorp/android/featureflag/loader/FeatureFlagSelectorEvaluatorTest.kt |
| LLM wiki / memory / graph | 23 | CODE_OF_CONDUCT.md, NOTICE.md |
| Spec / doc-driven workflow | 9 | feature-flag/src/test/kotlin/com/linecorp/android/featureflag/loader/FeatureFlagSelectorEvaluatorTest.kt, feature-flag/src/test/kotlin/com/linecorp/android/featureflag/FeatureFlagExtensionTest.kt, feature-flag/src/test/kotlin/com/linecorp/android/featureflag/FeatureFlagPluginTest.kt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | Java/Kotlin |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 171 |
| manifests | 5 |
| docs | 6 |
| tests | 40 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | feature-flag-android |
| headings | feature-flag-android / Overview / Getting started / Add library dependencies / Add configuration / How to use / Create property files / Simple property / Property with options / Property combination |
| excerpt | feature flag android ! Gradle Plugin Portal https //img.shields.io/maven metadata/v/https/plugins.gradle.org/m2/com/linecorp/android/feature flag/com.linecorp.android.feature flag.gradle.plugin/maven metadata.xml.svg?colorB=007ec6&label=Gradle%20Plugin%20Portal https //plugins.gradle.org/plugin/com.linecorp.android.feature flag A Gradle plugin to achieve feature flag based development for Android applications. Overview This plugin generates feature flags from a property file to achieve feature flag based development. The flag values are visible as boolean values in source code, and useful to enable or disable features. You can specify which feature is enabled by build variant https //develop |


## 주요 파일

### Manifests

- intellij-plugin/README.md
- README.md
- build.gradle.kts
- feature-flag/build.gradle.kts
- intellij-plugin/build.gradle.kts


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| intellij-plugin | 91 |
| feature-flag | 60 |
| .github | 3 |
| gradle | 3 |
| .editorconfig | 1 |
| .gitignore | 1 |
| build.gradle.kts | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| Dangerfile | 1 |
| Gemfile | 1 |
| gradle.properties | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .kt | 64 |
| [no-ext] | 34 |
| .svg | 24 |
| .java | 14 |
| .md | 6 |
| .kts | 5 |
| .properties | 5 |
| .xml | 4 |
| .yml | 4 |
| .bat | 2 |
| .jar | 2 |
| .toml | 2 |
| .bnf | 1 |
| .feature_flag | 1 |
| .flex | 1 |
| .json | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
