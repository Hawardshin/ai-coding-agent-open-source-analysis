# line/gradle-multi-project-support

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/gradle-multi-project-support |
| local path | sources/line__gradle-multi-project-support |
| HEAD | 81ad9da |
| stars/forks | 88 / 15 |
| language | Kotlin |
| license | Apache-2.0 |
| pushedAt | 2023-05-13T07:58:57Z |
| trendScore / priorityScore | 70 / 176 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 91 | build-recipe-plugin/README.md, README.md, recursive-git-log-plugin/README.md |
| Security / compliance | 24 | README.md, build-recipe-plugin/build.gradle.kts, build-recipe-plugin/src/test/resources/groovy-dsl/build.gradle |
| LLM wiki / memory / graph | 1 | CODE_OF_CONDUCT.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | korea-signal, llm-wiki-memory, sdk-api, security-compliance |
| stacks | Java/Kotlin |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 50 |
| manifests | 8 |
| docs | 7 |
| tests | 19 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Multi-Project-Support |
| headings | Multi-Project-Support / Plugins / How to chat with us / How to contribute |
| excerpt | Multi Project Support A collection of Gradle plugins to maintain the multi project or multi application in the mono repo. We are focusing on the way to create or manage large scale multi projects including applications, so called microservice ! Plugins build recipe plugin ./build recipe plugin A Gradle plugin for the reusable build script. recursive git log plugin ./recursive git log plugin A Gradle plugin for extracting the list of affected modified modules. How to chat with us Join our Slack workspace. https //join.slack.com/t/gradlemultipr uuk7347/shared invite/zt cwm6ycch aswbpyHQS8 UfPakO1wkDA How to contribute See CONTRIBUTING.md CONTRIBUTING.md . If you believe you have discovered a v |


## 주요 파일

### Manifests

- build-recipe-plugin/README.md
- README.md
- recursive-git-log-plugin/README.md
- build-recipe-plugin/build.gradle.kts
- build-recipe-plugin/src/test/resources/groovy-dsl/build.gradle
- build-recipe-plugin/src/test/resources/kotlin-dsl/build.gradle.kts
- build.gradle.kts
- recursive-git-log-plugin/build.gradle.kts


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| build-recipe-plugin | 23 |
| recursive-git-log-plugin | 9 |
| .github | 4 |
| gradle | 2 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .travis.yml | 1 |
| build.gradle.kts | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| gradle.properties | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |
| LICENSE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .kt | 12 |
| .properties | 10 |
| .md | 7 |
| .kts | 6 |
| [no-ext] | 5 |
| .log | 3 |
| .yml | 3 |
| .gradle | 2 |
| .bat | 1 |
| .jar | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
