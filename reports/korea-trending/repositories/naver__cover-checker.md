# naver/cover-checker

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/cover-checker |
| local path | sources/naver__cover-checker |
| HEAD | 8e32012 |
| stars/forks | 72 / 14 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2025-12-14T15:34:38Z |
| trendScore / priorityScore | 91 / 211 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 375 | README.md, build.gradle, cover-checker-console/build.gradle |
| Security / compliance | 47 | README.md, cover-checker-cobertura/src/main/java/com/naver/nid/cover/cobertura/CoberturaCoverageReportHandler.java, cover-checker-core/src/main/java/com/naver/nid/cover/checker/model/NewCoverageCheckReport.java |
| LLM wiki / memory / graph | 2 | cover-checker-core/src/main/java/com/naver/nid/cover/parser/coverage/XmlCoverageReportParser.java |


## 분류와 스택

| key | value |
| --- | --- |
| categories | korea-signal, llm-wiki-memory, localRuntime, rag, security-compliance |
| stacks | Java/Kotlin |
| capabilities | Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 106 |
| manifests | 8 |
| docs | 4 |
| tests | 35 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Coverage Checker [![Build Status](https://travis-ci.org/naver/cover-checker.svg?branch=master)](https://travis-ci.org/naver/cover-checker) |
| headings | Coverage Checker [![Build Status](https://travis-ci.org/naver/cover-checker.svg?branch=master)](https://travis-ci.org/naver/cover-checker) / CoverChecker do... / Run with jenkins / How to build / Create access token / Execute with parameter / Parameter / License |
| excerpt | Coverage Checker ! Build Status https //travis ci.org/naver/cover checker.svg?branch=master https //travis ci.org/naver/cover checker CoverChecker provides a test coverage for new added lines of code. If you create new pull request, CoverChecker would give feedback regarding how much of the new lines your test code has covered. Good Test code makes people find bug more efficiently before service release and prevents service from being disabled. To check the test code quality, most of developers refer the code coverage status as an important index. This is why most of them spend their resources to update their test code to achieve more code coverage whenever they add new lines of code. Howeve |


## 주요 파일

### Manifests

- README.md
- build.gradle
- cover-checker-cobertura/build.gradle
- cover-checker-console/build.gradle
- cover-checker-core/build.gradle
- cover-checker-github/build.gradle
- cover-checker-jacoco/build.gradle
- cover-checker-lcov/build.gradle


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| cover-checker-core | 40 |
| cover-checker-console | 17 |
| cover-checker-github | 16 |
| cover-checker-jacoco | 10 |
| cover-checker-lcov | 5 |
| cover-checker-cobertura | 4 |
| .mvn | 2 |
| gradle | 2 |
| .github | 1 |
| .gitignore | 1 |
| .travis.yml | 1 |
| build.gradle | 1 |
| gradlew | 1 |
| gradlew.bat | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 66 |
| .gradle | 8 |
| .xml | 8 |
| .diff | 4 |
| .html | 4 |
| .md | 4 |
| [no-ext] | 3 |
| .mockmaker | 2 |
| .properties | 2 |
| .yml | 2 |
| .bat | 1 |
| .info | 1 |
| .jar | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
