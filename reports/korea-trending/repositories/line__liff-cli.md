# line/liff-cli

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/liff-cli |
| local path | sources/line__liff-cli |
| HEAD | e01a502 |
| stars/forks | 32 / 5 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2025-11-17T02:33:54Z |
| trendScore / priorityScore | 66 / 172 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 56 | README.md, CODE_OF_CONDUCT.md, src/app/commands/create.test.ts |
| AI agent / tool use | 24 | src/api/agent.ts, src/api/auth.ts, src/api/liff.ts |
| Frontend / developer experience | 6 | package.json, .eslintrc.json |
| LLM wiki / memory / graph | 1 | CODE_OF_CONDUCT.md |
| Spec / doc-driven workflow | 1 | tsconfig.build.json |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, frontend-dx, korea-signal, llm-wiki-memory, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 75 |
| manifests | 4 |
| docs | 4 |
| tests | 22 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LIFF CLI |
| headings | LIFF CLI / Getting Started / Usage / Channel Commands / App Commands / Init Command / Scaffold Command / Serve Commands / Development / Building |
| excerpt | LIFF CLI Getting Started Usage Channel Commands The channel command is used to manage LIFF channels. You can add or set the current channel with the following subcommands Add a Channel To add a channel, use the add subcommand with the channel ID and channel secret. You will be prompted to enter the channel secret. Set the Current Channel To set the current channel, use the use subcommand with the channel ID. App Commands The app command is used to manage LIFF apps. You can create, list, or delete LIFF apps with the following subcommands Create a LIFF App To create a new LIFF app, use the create subcommand with the required options channel ID optional , name, endpoint URL, and view type. Upda |


## 주요 파일

### Manifests

- README.md
- package.json
- tsconfig.json
- tsconfig.build.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 51 |
| .github | 4 |
| .eslintrc.json | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| .nvmrc | 1 |
| .prettierignore | 1 |
| .prettierrc | 1 |
| changelog.config.ts | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| dev.js | 1 |
| index.js | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 54 |
| [no-ext] | 7 |
| .json | 5 |
| .md | 4 |
| .yml | 3 |
| .js | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
