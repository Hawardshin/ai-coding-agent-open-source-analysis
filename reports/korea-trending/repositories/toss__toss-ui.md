# toss/toss-ui

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/toss-ui |
| local path | sources/toss__toss-ui |
| HEAD | fdeee4e |
| stars/forks | 102 / 12 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2021-11-24T08:46:06Z |
| trendScore / priorityScore | 71 / 215 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 225 | package.json, .yarn/sdks/eslint/package.json, .yarn/sdks/prettier/package.json |
| Korean language / Korea domain | 30 | README.md, packages/eslint-config/README.md, packages/styled/README.md |
| Spec / doc-driven workflow | 14 | .yarnrc.yml, packages/styled/tsconfig.spec.json, packages/uikit/tsconfig.spec.json |
| AI agent / tool use | 4 | .yarn/plugins/@yarnpkg/plugin-typescript.cjs |
| Security / compliance | 2 | .yarn/sdks/typescript/lib/tsserver.js, .yarn/sdks/typescript/lib/tsserverlibrary.js |
| LLM wiki / memory / graph | 1 | packages/eslint-config/src/index.js |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 118 |
| manifests | 21 |
| docs | 21 |
| tests | 5 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | toss-ui |
| headings | toss-ui |
| excerpt | toss ui |


## 주요 파일

### Manifests

- README.md
- packages/eslint-config/README.md
- packages/styled/README.md
- packages/uikit/README.md
- packages/utils/README.md
- package.json
- tsconfig.json
- .yarn/sdks/eslint/package.json
- .yarn/sdks/prettier/package.json
- .yarn/sdks/typescript/package.json
- packages/eslint-config/package.json
- packages/styled/package.json
- packages/styled/tsconfig.json
- packages/uikit/package.json
- packages/uikit/tsconfig.json
- packages/utils/package.json
- packages/styled/tsconfig.spec.json
- packages/uikit/tsconfig.spec.json
- tsconfig.eslint.json
- packages/styled/tsconfig.lib.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 85 |
| .yarn | 15 |
| .vscode | 2 |
| shared-configs | 2 |
| .editorconfig | 1 |
| .eslintignore | 1 |
| .eslintrc.js | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .husky | 1 |
| .prettierignore | 1 |
| .prettierrc | 1 |
| .yarnrc.yml | 1 |
| LICENCE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 44 |
| .json | 18 |
| .js | 16 |
| .tsx | 12 |
| [no-ext] | 10 |
| .mdx | 9 |
| .md | 5 |
| .cjs | 2 |
| .yml | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
