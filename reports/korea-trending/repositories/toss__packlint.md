# toss/packlint

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/packlint |
| local path | sources/toss__packlint |
| HEAD | 2bf98e0 |
| stars/forks | 35 / 5 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2026-02-17T12:57:47Z |
| trendScore / priorityScore | 71 / 178 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 78 | package.json, .yarn/sdks/eslint/package.json, .yarn/sdks/prettier/package.json |
| Korean language / Korea domain | 38 | packages/cli/package.json, CHANGELOG.md, packages/cli/CHANGELOG.md |
| Security / compliance | 2 | .yarn/sdks/typescript/lib/tsserver.js, .yarn/sdks/typescript/lib/tsserverlibrary.js |
| Spec / doc-driven workflow | 2 |  |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, frontend-dx, korea-signal, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 93 |
| manifests | 16 |
| docs | 9 |
| tests | 2 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | packlint |
| headings | packlint / Install / Usage / Configuration / Configuration Object / In Package.json |
| excerpt | packlint Organize package.json in a large monorepo. Install or with yarn Usage Packlint has two main features now. Sort package.json in custom order or recommended order by default . Add or modify fields by applying merge rule. ex if you want to change build script of all packages in your large monorepo Configuration The Packlint configuration file is named packlint.config.mjs . It should be placed in the root directory of your project and default export configuration object. For example Configuration Object files An array of glob patterns indicating package.json that the configuration object should apply to. If not specified, default to './package.json' . ignores An array of glob patterns i |


## 주요 파일

### Manifests

- .changeset/README.md
- README.md
- packages/cli/README.md
- packages/command/README.md
- packages/core/README.md
- package.json
- tsconfig.json
- .yarn/sdks/eslint/package.json
- .yarn/sdks/prettier/package.json
- .yarn/sdks/typescript/package.json
- packages/cli/package.json
- packages/cli/tsconfig.json
- packages/command/package.json
- packages/command/tsconfig.json
- packages/core/package.json
- packages/core/tsconfig.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 48 |
| .yarn | 23 |
| .github | 3 |
| .changeset | 2 |
| .vscode | 2 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .nvmrc | 1 |
| .prettierrc | 1 |
| .yarnrc.yml | 1 |
| CHANGELOG.md | 1 |
| eslint.config.mjs | 1 |
| LICENSE | 1 |
| mise.toml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 39 |
| .json | 15 |
| .js | 10 |
| .md | 9 |
| [no-ext] | 8 |
| .mjs | 4 |
| .yml | 4 |
| .cjs | 3 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
