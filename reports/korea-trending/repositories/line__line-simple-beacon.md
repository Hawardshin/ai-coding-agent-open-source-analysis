# line/line-simple-beacon

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-simple-beacon |
| local path | sources/line__line-simple-beacon |
| HEAD | b6e0f78 |
| stars/forks | 116 / 56 |
| language | JavaScript |
| license |  |
| pushedAt | 2023-07-26T13:35:00Z |
| trendScore / priorityScore | 76 / 168 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 27 | README.md, README.en.md, README.ja.md |
| Korean language / Korea domain | 6 | README.md, README.en.md, README.ja.md |
| Security / compliance | 5 | README.md, README.en.md, README.ja.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, korea-signal, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 10 |
| manifests | 3 |
| docs | 4 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LINE Simple Beacon |
| headings | LINE Simple Beacon / Security limitations / Specification / Tools / 3rd Party Tools |
| excerpt | LINE Simple Beacon LINE Simple Beacon is a specification for beacon hardware for LINE Bot developers. Security limitations LINE Simple Beacon does not have a mechanism for preventing devices from being impersonated. Therefore, do not use bot services which automatically assumes that a beacon's ID is valid. Specification English README.en.md 日本語 README.ja.md Tools Sample Bluetooth Host application for LINE Simple Beacon written in Node.js.<br/ tools/line simplebeacon nodejs sample tools/line simplebeacon nodejs sample 3rd Party Tools Developing something relates to LINE Simple Beacon? Feel free to get in touch with us <mailto dl developer relations@linecorp.com to share it here. Link Descript |


## 주요 파일

### Manifests

- README.md
- tools/line-simplebeacon-nodejs-sample/README.md
- tools/line-simplebeacon-nodejs-sample/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| tools | 6 |
| .gitignore | 1 |
| README.en.md | 1 |
| README.ja.md | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 4 |
| .js | 3 |
| .json | 1 |
| .txt | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
