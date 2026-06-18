# naver/d-day-labeler

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/d-day-labeler |
| local path | sources/naver__d-day-labeler |
| HEAD | 0bb221f |
| stars/forks | 48 / 5 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2025-08-07T23:24:16Z |
| trendScore / priorityScore | 69 / 151 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 10 | README.md, README.en.md, src/api.ts |
| Frontend / developer experience | 3 | package.json |
| Security / compliance | 2 | README.md, README.en.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, korea-signal, sdk-api, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 18 |
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
| title | d-day-labeler |
| headings | d-day-labeler / D-n 룰이란? / Usage / Inputs / `token` / `skipDraft` / License |
| excerpt | d day labeler 🌏 한국어 English README.en.md D n 규칙에 따라 자동으로 Label 을 업데이트하는 Github Actions D n 룰이란? 코드 리뷰가 완료되어야 하는 시점을 D n 형식의 Label 을 PR 에 추가해 표현하는 방식입니다. 이를 통해 리뷰어는 리뷰 우선순위를 쉽게 판단하고 효율적으로 작업할 수 있습니다. 3일 이내에 리뷰가 완료되어야 한다면 PR 에 D 3 Label 을 추가합니다. 긴급한 수정 사항이 발생한다면 D 0 Label 을 사용하여 빠르게 리뷰를 수행하도록 합니다. 이 Label 은 매일 갱신되어야 합니다. 이를 자동화하기 위해 해당 Github Action을 사용할 수 있습니다. Usage 1. 아래와 같이 .github/workflows/d day labeler.yml 파일을 작성합니다 2. 원하는 PR에 D n 예 D 5, D 3 등 형식의 Label 을 추가합니다. 3. GitHub Actions가 매일 자동으로 해당 Label 을 업데이트합니다. Inputs token Required GitHub에서 제공하는 토큰 skipDraft Optional Draft PR을 라벨 업데이트에서 제외할지 여부를 결정합니다. 기본값 false License |


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
| src | 6 |
| .eslintrc | 1 |
| .gitignore | 1 |
| .prettierignore | 1 |
| .prettierrc | 1 |
| action.yml | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| package-lock.json | 1 |
| package.json | 1 |
| README.en.md | 1 |
| README.md | 1 |
| tsconfig.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 6 |
| [no-ext] | 6 |
| .json | 3 |
| .md | 2 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
