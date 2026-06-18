# line/line-login-starter

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-login-starter |
| local path | sources/line__line-login-starter |
| HEAD | 35e2714 |
| stars/forks | 151 / 157 |
| language | Java |
| license | Apache-2.0 |
| pushedAt | 2023-10-02T00:45:35Z |
| trendScore / priorityScore | 80 / 188 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 40 | README.md, pom.xml, src/main/java/com/linecorp/sample/login/Application.java |
| Security / compliance | 38 | README.md, pom.xml, app.json |
| LLM wiki / memory / graph | 11 | LICENSE.txt |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, graphMemory, korea-signal, llm-wiki-memory, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Java/Kotlin |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 24 |
| manifests | 2 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LINE Login Starter Application |
| headings | LINE Login Starter Application / Requirements / Deploy the app on Heroku / Configure your app in the console / Run the app in a browser / Try out other features of the starter app / View logs / Download and make changes to the starter app / Other resources |
| excerpt | LINE Login Starter Application ! Build Status https //travis ci.org/line/line login starter.svg?branch=master https //travis ci.org/line/line login starter This is a starter application to help you get started on integrating LINE Login https //developers.line.me/en/docs/line login/overview/ into a web app or website. This sample Java application demonstrates how you can use LINE Login to let users log in to your app with their LINE accounts and to get user information. The following instructions describe how to deploy the app on Heroku, view logs, and modify the app for yourself. Requirements A LINE Login channel with the "WEB" app type. To create a channel, go to Creating a Channel https // |


## 주요 파일

### Manifests

- README.md
- pom.xml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 17 |
| .gitignore | 1 |
| .travis.yml | 1 |
| app.json | 1 |
| LICENSE.txt | 1 |
| pom.xml | 1 |
| Procfile | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .java | 10 |
| .html | 4 |
| .yml | 2 |
| [no-ext] | 2 |
| .css | 1 |
| .js | 1 |
| .json | 1 |
| .md | 1 |
| .txt | 1 |
| .xml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
