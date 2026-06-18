# naver/notify-pr-review

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/notify-pr-review |
| local path | sources/naver__notify-pr-review |
| HEAD | 02cceb8 |
| stars/forks | 53 / 10 |
| language | JavaScript |
| license | Apache-2.0 |
| pushedAt | 2025-07-11T01:05:28Z |
| trendScore / priorityScore | 71 / 156 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 7 | package-lock.json |
| Security / compliance | 6 | README.md, README.en.md |
| Korean language / Korea domain | 5 | README.md, index.js, README.en.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, korea-signal, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 8 |
| manifests | 2 |
| docs | 2 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | notify-pr-review |
| headings | notify-pr-review / Usage / Inputs / `token` / `slackBotToken` / License |
| excerpt | notify pr review 🌏 한국어 English README.en.md PR 리뷰 요청을 받으면 Slack으로 알리는 Github Actions <img src="https //user images.githubusercontent.com/13075245/279234262 cbe5c159 e103 49eb bf1f b50116f98984.png" width="500" alt="intro" Usage 1. 메시지 전달을 위해 SLACK BOT TOKEN 이름의 secret을 세팅하세요. 세팅할 Repo Settings Secrets New repository secret 이때, Value는 슬랙에서 제공하는 xoxb 형태의 토큰이어야 합니다. 2. .github/workflow/notify pr review.yml 파일을 만드세요 Inputs token Required GitHub에서 제공하는 토큰 slackBotToken Required Slack bot을 통해 메시지를 보내기 위한 토큰 e.g. xoxb 798572638592 435243279588 9aCaWNnzVYelK9NzMMqa1yxz License |


## 주요 파일

### Manifests

- README.md
- package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| .gitignore | 1 |
| action.yml | 1 |
| index.js | 1 |
| LICENSE | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.en.md | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .json | 2 |
| .md | 2 |
| [no-ext] | 2 |
| .js | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
