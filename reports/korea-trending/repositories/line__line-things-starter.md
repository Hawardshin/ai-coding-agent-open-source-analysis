# line/line-things-starter

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/line-things-starter |
| local path | sources/line__line-things-starter |
| HEAD | 6b4b6af |
| stars/forks | 92 / 403 |
| language | C++ |
| license | CC0-1.0 |
| pushedAt | 2019-08-22T17:29:15Z |
| trendScore / priorityScore | 79 / 190 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 26 | bot/README.md, README.md, requirements.txt |
| Spec / doc-driven workflow | 9 | esp32/README.md, line-things-dev-board/README.md, m5stack/README.md |
| Security / compliance | 7 | obniz/sample.html, app.json, bot/app.py |
| Frontend / developer experience | 5 | microbit/README.md, README.md, requirements.txt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend-dx, graphMemory, korea-signal, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 39 |
| manifests | 12 |
| docs | 22 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LINE Things Starter |
| headings | LINE Things Starter / Getting Started / Installing the Firmware / Enable LINE Things / Developer Trial / Product registration and creating LIFF app / Automatic communication / References / Community based starters / License |
| excerpt | LINE Things Starter This repository contains sample codes for LINE Things Developer Trial. LINE Things compatible device example firmware, LIFF app code and LINE bot code are included. English 日本語 README.ja.md Getting Started LINE Things https //developers.line.biz/en/docs/line things/ is a platform that connects Bots and Web services together with IoT devices that are Bluetooth LE enabled. To start developing for LINE Things using the example code and the sample firmware, the following steps are necessary. Installing the Firmware To start development using the example firmwares, you will need a compatible Bluetooth LE enabled development board. Currently LINE Things Starter firmwares suppor |


## 주요 파일

### Manifests

- bot/README.md
- esp32/README.md
- liff-app/README.md
- line-things-dev-board/README.md
- m5stack/README.md
- m5stick-c/README.md
- microbit/README.md
- nrf52/README.md
- obniz/README.md
- puckjs/README.md
- README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| liff-app | 5 |
| bot | 3 |
| esp32 | 3 |
| line-things-dev-board | 3 |
| m5stack | 3 |
| m5stick-c | 3 |
| microbit | 3 |
| nrf52 | 3 |
| obniz | 3 |
| puckjs | 2 |
| .gitignore | 1 |
| app.json | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 22 |
| .ino | 6 |
| .html | 2 |
| .js | 2 |
| .txt | 2 |
| [no-ext] | 2 |
| .css | 1 |
| .json | 1 |
| .py | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
