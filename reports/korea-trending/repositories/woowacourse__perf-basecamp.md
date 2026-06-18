# woowacourse/perf-basecamp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/woowacourse/perf-basecamp |
| local path | sources/woowacourse__perf-basecamp |
| HEAD | d76b13d |
| stars/forks | 44 / 204 |
| language | TypeScript |
| license |  |
| pushedAt | 2025-09-12T10:52:32Z |
| trendScore / priorityScore | 78 / 155 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 42 | README.md, package.json, tsconfig.json |
| Security / compliance | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, korea-signal, localRuntime, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 52 |
| manifests | 3 |
| docs | 2 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | 🚀 프론트엔드 성능 베이스캠프 |
| headings | 🚀 프론트엔드 성능 베이스캠프 / 성능 오답노트 : memegle 프로젝트 성능 개선하기 / 📕 미션 소개 / ✅ 미션을 시작하기 전에... / 📅 **진행 방식** / **🎯 요구사항** / 개선 목표 / 작업 목록 / ✍️ PR에 포함해야 할 내용 / 👀 코드 리뷰 체크 리스트 |
| excerpt | 🚀 프론트엔드 성능 베이스캠프 성능 오답노트 memegle 프로젝트 성능 개선하기 📕 미션 소개 프론트엔드 성능 베이스캠프에 오신 여러분 환영합니다! 🤗 이번 미션에서는 예제로 구성한 짤 검색 사이트, 'Memegle' 프로젝트의 성능을 개선해볼거에요. <img width=400 src="https //user images.githubusercontent.com/81607552/129674696 2fe7251b 90fe 4dec 8bc5 5d47bcc9159c.png" <img width=370 src="https //user images.githubusercontent.com/81607552/129674723 03d93732 1aba 42ca a7cf d2abe1005847.png" Memegle 프로젝트는 곳곳에 성능을 저하시키는 요소들로 가득한데요. 여기저기 구멍난 곳들을 고쳐서, 기본적인 수준으로 쓰는 데에 불편함이 없는 버전 1.0.0을 만들어주세요. ✅ 미션을 시작하기 전에... 몇 가지 계정 생성이 필요합니다. gif 검색을 위해 GIPHY API 를 사용하고 있습니다. GIPHY API 키 발급을 위해 GIPHY https //developers.giphy.com/ 에서 가입 후 앱 생성 API 키 발급이 필요합니다. 발급한 키는 루트 경로에 .env 파일을 만들어 GIPHY API KEY 값으로 설정해주세요 미션 |


## 주요 파일

### Manifests

- README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 41 |
| .eslintrc.json | 1 |
| .github | 1 |
| .gitignore | 1 |
| .prettierrc | 1 |
| .vscode | 1 |
| index.html | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.md | 1 |
| tsconfig.json | 1 |
| webpack.config.js | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .tsx | 19 |
| .css | 14 |
| .ts | 8 |
| .json | 5 |
| .md | 2 |
| [no-ext] | 2 |
| .html | 1 |
| .js | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
