# Samsung/Wits

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/Wits |
| local path | sources/Samsung__Wits |
| HEAD | b59d7e6 |
| stars/forks | 122 / 26 |
| language | JavaScript |
| license | Apache-2.0 |
| pushedAt | 2026-05-12T02:09:02Z |
| trendScore / priorityScore | 89 / 227 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 64 | README.md, package.json, doc/README_zh_HANS.md |
| LLM wiki / memory / graph | 23 | README.md, doc/README_zh_HANS.md, doc/README_zh_HANT.md |
| Security / compliance | 15 | README.md, tests/configValidation.test.js, CHANGELOG.md |
| RAG / retrieval | 3 | container/js/base.js |
| Spec / doc-driven workflow | 2 | README.md, CHANGELOG.md |
| Frontend / developer experience | 1 | README.md |
| Local LLM / on-device inference | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, graphMemory, korea-signal, llm-wiki-memory, local-llm, rag, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 41 |
| manifests | 3 |
| docs | 5 |
| tests | 7 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | WITs |
| headings | WITs / Supported WITs guide in other languages / Installing and Configuring WITs / For developers using npm / For developers using Git repository / **System Requirements** / WITs details / The Project Structure for using WITs / WITs CLI / Run wits --start |
| excerpt | WITs WITs is a useful development tool for helping to run and develop your Tizen web application easily on your 2017+ Samsung TV . It is the fastest way to get your local code running on the TV device during development. Saving you from having to build, package, and reinstall your application every time you want to see how it will run on device. We call it a LIVE RELOAD . WITs is helpful to continue your developing context. <img src="https //user images.githubusercontent.com/11974693/73414912 a2267f80 4353 11ea 9685 fefb09d8e6b5.jpg" width="100%" title="Wits" Supported WITs guide in other languages 简体中文 doc/README zh HANS.md 正體中文 doc/README zh HANT.md Always welcome, if you contribute WITs g |


## 주요 파일

### Manifests

- tests/README.md
- README.md
- package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| lib | 12 |
| container | 8 |
| tests | 7 |
| command | 4 |
| doc | 2 |
| .githooks | 1 |
| .gitignore | 1 |
| .npmignore | 1 |
| CHANGELOG.md | 1 |
| index.js | 1 |
| LICENSE | 1 |
| package.json | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .js | 25 |
| .md | 5 |
| [no-ext] | 5 |
| .css | 3 |
| .html | 2 |
| .json | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
