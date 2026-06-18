# naver/nam-sdk-android

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/nam-sdk-android |
| local path | sources/naver__nam-sdk-android |
| HEAD | acde280 |
| stars/forks | 16 / 0 |
| language | Java |
| license | NOASSERTION |
| pushedAt | 2026-06-16T05:34:11Z |
| trendScore / priorityScore | 74 / 214 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 500 | README.md, mediation/applovin/README.md, mediation/aps/README.md |
| Frontend / developer experience | 451 | README.md, mediation/applovin/README.md, mediation/aps/README.md |
| Security / compliance | 21 | mediation/applovin/README.md, mediation/bidmachine/README.md, mediation/dt/README.md |
| LLM wiki / memory / graph | 5 | docs/ad-formats/in_stream.md, CHANGELOG.md |
| Infra / observability | 3 | .github/ISSUE_TEMPLATE/feature_request.yml |
| AI agent / tool use | 1 | docs/targeting.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, security-compliance |
| stacks | Java/Kotlin |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 109 |
| manifests | 20 |
| docs | 28 |
| tests | 0 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Naver Ad Manager SDK for Android |
| headings | Naver Ad Manager SDK for Android / Before you begin / App prerequisites / Configure your app / 1. In your project-level `build.gradle` file, include [Google's Maven repository](https://maven.google.com/web/index.html) and [Maven central repository](https://search.maven.org/artifact) in both your buildscript and allprojects sections: / 2. Set the compile options to `java 8`, in your module's app-level Gradle file, normally `app/build.gradle`: / 3. Add the dependencies for the Naver Ad Manager SDK to your module's app-level Gradle file, normally `app/build.gradle`: / 4. Add your Publisher Code to your app's `AndroidManifest.xml` file. / 5. Select an ad format / 6. Select mediation you want to integrate |
| excerpt | Naver Ad Manager SDK for Android ! Maven Central https //img.shields.io/maven central/v/com.naver.gfpsdk/nam core ! latest build https //github.com/naver/nam sdk android/actions/workflows/android.yml/badge.svg Integrating the Naver Ad Manager NAM SDK into an app is the first step toward displaying ads and earning revenue. Once you've integrated the SDK, you can choose an ad format such as banner or native or rewarded or interstitial and follow the steps to implement it. Before you begin To prepare your app, complete the steps in the following sections. App prerequisites Use Android Studio 3.2 or higher Make sure that your app's build file uses the following values A minSdkVersion of 23 or hi |


## 주요 파일

### Manifests

- README.md
- mediation/applovin/README.md
- mediation/aps/README.md
- mediation/bidmachine/README.md
- mediation/chartboost/README.md
- mediation/dfp/README.md
- mediation/dt/README.md
- mediation/fan/README.md
- mediation/inmobi/README.md
- mediation/ironsource/README.md
- mediation/lan/README.md
- mediation/moloco/README.md
- mediation/nda/README.md
- mediation/pangle/README.md
- mediation/teads/README.md
- mediation/unity/README.md
- mediation/vungle/README.md
- java-sample/build.gradle
- kotlin-sample/build.gradle.kts
- build.gradle.kts


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| kotlin-sample | 33 |
| java-sample | 31 |
| mediation | 16 |
| docs | 9 |
| .github | 8 |
| gradle | 2 |
| .gitignore | 1 |
| build.gradle.kts | 1 |
| CHANGELOG.md | 1 |
| gradle.properties | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| NAVER-COPYING | 1 |
| NOTICE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .xml | 39 |
| .md | 28 |
| .kt | 10 |
| .java | 9 |
| [no-ext] | 7 |
| .yml | 6 |
| .kts | 3 |
| .pro | 2 |
| .properties | 2 |
| .bat | 1 |
| .gradle | 1 |
| .jar | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
