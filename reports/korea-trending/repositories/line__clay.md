# line/clay

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/clay |
| local path | sources/line__clay |
| HEAD | 6867c1a |
| stars/forks | 118 / 21 |
| language | Kotlin |
| license | Apache-2.0 |
| pushedAt | 2023-04-06T06:37:45Z |
| trendScore / priorityScore | 73 / 194 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 127 | README.md, app/build.gradle, app/src/androidTest/java/com/linecorp/clay/ExampleNameTest.java |
| Security / compliance | 38 | README.md, app/src/main/java/com/linecorp/clay/example/Constants.kt, app/src/main/java/com/linecorp/clay/example/Extensions.kt |
| LLM wiki / memory / graph | 18 | CODE_OF_CONDUCT.md, LICENSE.txt, NOTICE.txt |
| Frontend / developer experience | 8 | .travis.yml, NOTICE.txt, clayview/src/main/java/com/linecorp/clay/graphic/ImageProcessUtils.kt |
| Spec / doc-driven workflow | 1 | NOTICE.txt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, security-compliance, spec-driven |
| stacks | Java/Kotlin |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 68 |
| manifests | 4 |
| docs | 3 |
| tests | 1 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Clay |
| headings | Clay / How to build / Getting started / How to contribute to Clay / License |
| excerpt | Clay ! API https //img.shields.io/badge/API 16%2B brightgreen.svg?style=flat https //android arsenal.com/api?level=16 ! build status https //travis ci.org/line/clay.svg?branch=master Clay is an Android library project that provides image trimming. Fully written in Kotlin, Clay is originally a UI component of LINE Creators Studio https //creator.line.me/en/studio/ , a LINE app for creating LINE stickers. You can use Clay with any Android application to trim the outline of an image and create your own custom shape. Produce a trimmed image Zoom in/out an image Undo previous trimming actions ! https //github.com/line/clay/blob/master/screenshot/screenshot.png Click here https //github.com/line/c |


## 주요 파일

### Manifests

- README.md
- app/build.gradle
- build.gradle
- clayview/build.gradle


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| clayview | 35 |
| app | 18 |
| gradle | 2 |
| .gitignore | 1 |
| .travis.yml | 1 |
| build.gradle | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| deploy.gradle | 1 |
| gradle.properties | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| LICENSE.txt | 1 |
| NOTICE.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .kt | 34 |
| .xml | 9 |
| .gradle | 5 |
| [no-ext] | 4 |
| .java | 3 |
| .md | 3 |
| .properties | 3 |
| .pro | 2 |
| .txt | 2 |
| .bat | 1 |
| .jar | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
