# daangn/codepocket

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/daangn/codepocket |
| local path | sources/daangn__codepocket |
| HEAD | 8fcb5e8 |
| stars/forks | 94 / 5 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2023-01-02T07:59:07Z |
| trendScore / priorityScore | 68 / 205 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 171 | client/package.json, client/tsconfig.json, client/vite.config.ts |
| Korean language / Korea domain | 19 | README.md, cli/package.json, schema/package.json |
| AI agent / tool use | 4 | .yarn/plugins/@yarnpkg/plugin-typescript.cjs |
| Security / compliance | 4 | .yarn/sdks/typescript/lib/tsserver.js, .yarn/sdks/typescript/lib/tsserverlibrary.js, cli/lib/utils.ts |
| Infra / observability | 2 | CONTRIBUTING.md |
| Spec / doc-driven workflow | 1 | .yarnrc.yml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, frontend-dx, graphMemory, infra-observability, korea-signal, llmFramework, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 282 |
| manifests | 22 |
| docs | 9 |
| tests | 5 |
| ci/ops | 6 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Codepocket (Deprecated) |
| headings | Codepocket (Deprecated) / Introduction / Getting Started / Contribution Guide / Packages / License |
| excerpt | Codepocket Deprecated codepocket 외부 공개용 https //codepocket.pages.dev/ codepocket daangn 내부용 https //codepocket daangn.pages.dev/ Introduction 함께 다양한 코드를 모으고 기여해서 중복 노력이 없는 개발 환경을 만들어요 Codepocket은 중복 노력을 줄이기 위해서 만들어진 오픈소스 소프트웨어예요. 코드들을 모아놓는 레지스트리로 아래와 같은 필요에 의해 만들어졌어요 ❗️ 현재는 js , jsx , ts , tsx 확장자의 파일만 지원합니다. ❗️ 자주 쓰는 코드를 올리고 필요할 때 가져다 사용해요 다른 사람이 올린 자주 쓰는 코드를 구경하고 필요하다면 가져다 사용해요 Codepocket에 올라온 코드에 스토리를 만들어서 코드의 다양한 사용법을 공유해요 Getting Started 현재는 cli를 통해서만 Codepocket에 코드를 올리고 내려받을 수 있어요. 자세한 cli 사용법 https //github.com/daangn/codepocket/blob/main/cli/README.md Contribution Guide 기여하기 https //github.com/daangn/codepocket/blob/main/CONTRIBUTING.md Packages Codepocket monorepo packages @codepock |


## 주요 파일

### Manifests

- cli/README.md
- client/README.md
- README.md
- schema/README.md
- server/README.md
- core/server/README.md
- cli/package.json
- cli/tsconfig.json
- client/package.json
- client/tsconfig.json
- client/vite.config.ts
- docker-compose.yml
- package.json
- schema/package.json
- schema/tsconfig.json
- server/package.json
- server/tsconfig.json
- .yarn/sdks/eslint/package.json
- .yarn/sdks/typescript/package.json
- core/server/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| client | 134 |
| schema | 43 |
| core | 29 |
| cli | 24 |
| server | 17 |
| .yarn | 13 |
| .github | 4 |
| .vscode | 2 |
| .deploy | 1 |
| .env.ci.example | 1 |
| .env.example | 1 |
| .eslintrc.json | 1 |
| .gitignore | 1 |
| .prettierrc.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 130 |
| .json | 57 |
| .tsx | 51 |
| .js | 11 |
| .md | 9 |
| [no-ext] | 8 |
| .yml | 6 |
| .cjs | 2 |
| .example | 2 |
| .html | 2 |
| .compose | 1 |
| .kontrol | 1 |
| .res | 1 |
| .yaml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
