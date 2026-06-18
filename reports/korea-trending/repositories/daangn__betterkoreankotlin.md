# daangn/betterkoreankotlin

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/daangn/betterkoreankotlin |
| local path | sources/daangn__betterkoreankotlin |
| HEAD | dfaba15 |
| stars/forks | 56 / 4 |
| language | Kotlin |
| license | Apache-2.0 |
| pushedAt | 2021-10-01T06:07:23Z |
| trendScore / priorityScore | 88 / 168 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 18 | README.md, app/build.gradle, app/src/main/java/com/daangn/www/betterkoreankotlinsample/MainActivity.kt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | korea-signal |
| stacks | Java/Kotlin |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 37 |
| manifests | 4 |
| docs | 1 |
| tests | 2 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings |  |
| excerpt | betterkoreankotlin ================== ! betterkoreankotlin https //raw.githubusercontent.com/n42corp/betterkorean/master/hm.jpg betterkoreankotlin 은 android Java 버전 https //github.com/n42corp/betterkorean 을 Kotlin 버전으로 포팅한 라이브러리 입니다. 특정단어에 대한 조사를 자연스럽게 연결해주는 역할을 하고 있어요. 특정 단어를 서버에서 받아오거나 유저의 입력을 받는 경우 이 단어에 대한 조사를 미리 정하지 못하기 때문에 "은 는 " 이런식으로 보기 안좋게 개발을 해야하는 문제를 해결하고 싶어서 포팅을 하게 됐습니다. 예 사과 가 맜있다, 아버지 가 바나나 를 드신다. 은는 이가 을를 와과 으로 로 아야 등의 조사를 지원합니다. Kotlin 의 string extension 을 이용해서 라이브러리 install 후에 그냥 일반 스트링에 2가지 추가된 메소드만 사용하면 됩니다. 사용법 ====== "아파트".getJosa JosaType.Type 와과 == "와" 리턴 "아파트".appendJosa JosaType.Type 와과 == "아파트와" 리턴 예제보기 https //github.com/n42corp/betterkoreankotlin/blob/master/app/s |


## 주요 파일

### Manifests

- README.md
- betterkoreankotlin/build.gradle
- app/build.gradle
- build.gradle


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| app | 10 |
| betterkoreankotlin | 9 |
| .idea | 8 |
| gradle | 2 |
| .gitignore | 1 |
| build.gradle | 1 |
| gradle.properties | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| LICENSE | 1 |
| README.md | 1 |
| settings.gradle | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .xml | 14 |
| [no-ext] | 5 |
| .gradle | 4 |
| .kt | 4 |
| .java | 2 |
| .pro | 2 |
| .properties | 2 |
| .bat | 1 |
| .jar | 1 |
| .md | 1 |
| .ser | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
