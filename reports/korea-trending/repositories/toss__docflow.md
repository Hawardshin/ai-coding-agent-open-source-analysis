# toss/docflow

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/docflow |
| local path | sources/toss__docflow |
| HEAD | f16ab5e |
| stars/forks | 106 / 13 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2026-04-11T05:24:15Z |
| trendScore / priorityScore | 86 / 238 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 224 | README.md, packages/cli/README.md, docs/package.json |
| Korean language / Korea domain | 40 | README.md, packages/cli/README.md, packages/cli/package.json |
| Spec / doc-driven workflow | 31 | packages/cli/tsconfig.json, docs/en/tutorial.md, .yarnrc.yml |
| AI agent / tool use | 3 | packages/cli/src/tests/core/parser/jsdoc/jsdoc-parser.spec.ts |
| RAG / retrieval | 1 | packages/cli/src/tests/utils/docflow-config.ts |
| Security / compliance | 1 | .github/workflows/release.yml |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, frontend-dx, graphMemory, korea-signal, llmFramework, localRuntime, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Graph/memory store, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 221 |
| manifests | 12 |
| docs | 84 |
| tests | 38 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Docflow &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/toss/docflow/blob/main/LICENSE) [![NPM badge](https://img.shields.io/npm/v/docflow?logo=npm)](https://www.npmjs.com/package/docflow) |
| headings | Docflow &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/toss/docflow/blob/main/LICENSE) [![NPM badge](https://img.shields.io/npm/v/docflow?logo=npm)](https://www.npmjs.com/package/docflow) / Examples / Contributing / License |
| excerpt | Docflow &middot; ! MIT License https //img.shields.io/badge/license MIT blue.svg https //github.com/toss/docflow/blob/main/LICENSE ! NPM badge https //img.shields.io/npm/v/docflow?logo=npm https //www.npmjs.com/package/docflow English 한국어 https //github.com/toss/docflow/blob/main/README ko kr.md Docflow is a TypeScript first documentation generator that automatically creates API documentation from JSDoc comments. Docflow automatically generates comprehensive documentation from JSDoc comments, supporting essential tags like @public , @category , and @example . Designed with AI integration in mind, Docflow can generate complete JSDoc comments https //docflow.slash.page/en/command/generate.html |


## 주요 파일

### Manifests

- docs/README.md
- .changeset/README.md
- README.md
- packages/cli/README.md
- docs/package.json
- package.json
- .yarn/sdks/eslint/package.json
- .yarn/sdks/prettier/package.json
- .yarn/sdks/typescript/package.json
- packages/cli/package.json
- packages/cli/tsconfig.json
- tsconfig.base.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 97 |
| docs | 78 |
| .yarn | 24 |
| .github | 3 |
| .changeset | 2 |
| .vscode | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| .nvmrc | 1 |
| .prettierignore | 1 |
| .prettierrc | 1 |
| .yarnrc.yml | 1 |
| CHANGELOG.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 99 |
| .md | 72 |
| .json | 13 |
| .js | 10 |
| [no-ext] | 9 |
| .mts | 7 |
| .yml | 5 |
| .cjs | 4 |
| .css | 1 |
| .mjs | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
