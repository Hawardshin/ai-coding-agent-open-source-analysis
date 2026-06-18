# naver/naver-openapi-guide

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/naver-openapi-guide |
| local path | sources/naver__naver-openapi-guide |
| HEAD | 64d4ea8 |
| stars/forks | 152 / 90 |
| language | CSS |
| license |  |
| pushedAt | 2026-06-01T09:22:01Z |
| trendScore / priorityScore | 99 / 248 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 500 | ko/papago-apis/README.md, ko/service-apis/search/doc/doc.md, ko/apicall.md |
| Security / compliance | 298 | ko/service-apis/search/doc/doc.md, ko/apiterms.md, ko/appregister.md |
| Spec / doc-driven workflow | 4 | ko/naver-openapi-swagger.json, ko/naver-openapi-swagger.yaml, naver-openapi-swagger.json |
| Frontend / developer experience | 2 | ko/README.md |
| AI agent / tool use | 1 | ko/service-apis/search/doc/doc.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, frontend-dx, graphMemory, korea-signal, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, .NET, PHP |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 270 |
| manifests | 3 |
| docs | 115 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | ko/README.md |
| title | API 공통 가이드 |
| headings | API 공통 가이드 / API 공통 가이드 개요 / API 공통 가이드 구성 |
| excerpt | API 공통 가이드 네이버 오픈API는 네이버 플랫폼의 기능을 외부 개발자가 쉽게 이용할 수 있게 웹 또는 SDK 형태로 공개한 기술들입니다. 네이버 오픈API로 활용할 수 있는 기술에는 네이버 로그인과 지도, 검색이 있으며, Clova의 음성 인식 기술과 음성 합성 기술, 얼굴 인식 기술, Papago의 기계 번역 기술 등이 있습니다. API 공통 가이드 개요 API 공통 가이드는 네이버 오픈API를 사용해 클라이언트 애플리케이션을 개발할 때 미리 알아 두어야 하는 내용을 설명합니다. 최종 수정일 2021년 8월 27일</li 이 문서의 내용은 언제든지 변경될 수 있습니다. API 공통 가이드 구성 API 공통 가이드의 내용은 다음과 같습니다. 네이버 오픈API 종류 apilist.md 로그인 방식 오픈 API apilist.md 로그인 방식 오픈 api 비로그인 방식 오픈 API apilist.md 비로그인 방식 오픈 api 사전 준비 사항 appregister.md 애플리케이션 등록 appregister.md 애플리케이션 등록 애플리케이션 등록 세부 정보 appregister.md 애플리케이션 등록 세부 정보 애플리케이션 등록 확인 appregister.md 애플리케이션 등록 확인 클라이언트 아이디와 클라이언트 시크릿 확인 appregister.md 클라이언트 아이디와 클라이언트 시크릿 확인 내 애플리케이션 관리 appconf. |


## 주요 파일

### Manifests

- ko/README.md
- ko/papago-apis/README.md
- ko/service-apis/README.md


### Spec / Docs / Prompt Artifacts

- ko/products/intro/plan/plan.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| ko | 145 |
| sample | 123 |
| naver-openapi-swagger.json | 1 |
| naver-openapi-swagger.yaml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 115 |
| .php | 26 |
| .js | 25 |
| .java | 24 |
| .cs | 23 |
| .py | 23 |
| .css | 11 |
| .json | 8 |
| .svg | 8 |
| .aspx | 2 |
| .html | 2 |
| .yaml | 2 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
