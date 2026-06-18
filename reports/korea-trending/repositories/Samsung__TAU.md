# Samsung/TAU

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/TAU |
| local path | sources/Samsung__TAU |
| HEAD | 633273f |
| stars/forks | 50 / 40 |
| language | JavaScript |
| license | NOASSERTION |
| pushedAt | 2022-12-26T03:33:20Z |
| trendScore / priorityScore | 68 / 202 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 31 | README.md, src/js/core/event/gesture/Drag.js, tests/tau2device.sh |
| Security / compliance | 4 | src/js/core/event/gesture/Drag.js, CONTRIBUTING.md, examples/mobile/ScheduleApp/js/DayOfWeekPicker.js |
| Spec / doc-driven workflow | 3 | README.md, libs/globalize/README.md |
| LLM wiki / memory / graph | 2 | tools/ninepatch/README.txt, libs/globalize/package.json |
| Local LLM / on-device inference | 2 | tests/tau2device.sh |
| RAG / retrieval | 1 | libs/globalize/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, evalObservability, example-rich, korea-signal, llm-wiki-memory, local-llm, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, .NET, PHP |
| capabilities | Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 4956 |
| manifests | 12 |
| docs | 18 |
| tests | 2170 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | TAU |
| headings | TAU / Getting Started / Prerequisites / Installing / Running tests using PhantomJS / all / single / Running tests using Karma / all / single |
| excerpt | TAU The TAU library contains components which allows you to create Web Application UI. Each components represents UI element, such as a button or slider, which gives you interaction and manipulation features. Getting Started Clone a copy of the master branch in the TAU Git repository git clone git@github.com Samsung/TAU.git Change to the tau directory cd TAU Check out the latest stable version of TAU git checkout master Prerequisites To build a TAU library, ensure that you have both Git and Node.js 6.16.0 installed. Example of node install using nvm https //github.com/creationix/nvm Installing Install the build module by npm npm install Build TAU by running the following command in the tau d |


## 주요 파일

### Manifests

- README.md
- libs/globalize/README.md
- examples/Android/ScheduleApp/app/build.gradle
- examples/Android/ScheduleApp/build.gradle
- examples/Android/UIComponents/app/build.gradle
- examples/Android/UIComponents/build.gradle
- examples/mobile/HomeAppServer/package.json
- package.json
- libs/globalize/package.json
- tools/converter/package.json
- tools/karma-plugins/console-reporter/package.json
- tools/ninepatch/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| tests | 2157 |
| examples | 1175 |
| src | 777 |
| libs | 573 |
| tools | 243 |
| config | 2 |
| license | 2 |
| _config.yml | 1 |
| .eslintignore | 1 |
| .eslintrc.js | 1 |
| .gitattributes | 1 |
| .github | 1 |
| .gitignore | 1 |
| .gitmessage | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .js | 1747 |
| .html | 1735 |
| .json | 527 |
| .svg | 328 |
| .less | 195 |
| .jar | 103 |
| .css | 73 |
| [no-ext] | 69 |
| .xml | 65 |
| .ttf | 17 |
| .md | 12 |
| .mustache | 9 |
| .p12 | 7 |
| .py | 7 |
| .gradle | 6 |
| .kt | 6 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
