# Samsung/microbit

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/microbit |
| local path | sources/Samsung__microbit |
| HEAD | 36892bf |
| stars/forks | 54 / 33 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2023-04-07T10:23:08Z |
| trendScore / priorityScore | 69 / 170 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 19 | app/build.gradle, app/src/main/java/com/samsung/microbit/data/model/NameValuePair.java, app/src/main/java/com/samsung/microbit/utils/MemoryUnits.java |
| Frontend / developer experience | 2 | README.md |
| LLM wiki / memory / graph | 1 | app/src/main/java/com/samsung/microbit/utils/MemoryUnits.java |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, graphMemory, korea-signal, llm-wiki-memory |
| stacks | Node/TypeScript/JavaScript, Java/Kotlin |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 5547 |
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
| headings | Libraries |
| excerpt | micro bit Android application ============================= Build instructions Install needed tools to build the project Android SDK http //developer.android.com/sdk/index.html Gradle https //gradle.org/gradle download/ Minimum version 2.14.1+ https //developer.android.com/studio/releases/gradle plugin.html updating gradle Go to root directory and run gradle build . After build is finished, apk file can be found under ~/app/build/outputs/apk/app debug.apk Or run gradle installDebug to build and install app on plugged android device Libraries Android DFU Library https //github.com/NordicSemiconductor/Android DFU Library android gif drawable https //github.com/koral /android gif drawable |


## 주요 파일

### Manifests

- README.md
- android-gif-drawable-1.1.13/build.gradle
- app/build.gradle
- build.gradle
- dfuLibrary/build.gradle


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| app | 5328 |
| dfuLibrary | 164 |
| .idea | 28 |
| .gradle | 11 |
| android-gif-drawable-1.1.13 | 3 |
| gradle | 2 |
| Authors.md | 1 |
| build.gradle | 1 |
| gradle.properties | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| LICENSE | 1 |
| local.properties | 1 |
| microbit.iml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .flat | 2052 |
| .class | 1511 |
| .dex | 700 |
| .xml | 442 |
| .json | 323 |
| .jar | 196 |
| .java | 133 |
| [no-ext] | 83 |
| .txt | 28 |
| .apk | 13 |
| .bin | 9 |
| .properties | 9 |
| .mp3 | 7 |
| .otf | 6 |
| .gradle | 5 |
| .gson | 4 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
