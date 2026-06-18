# toss/yarn-plugin-catalogs

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/yarn-plugin-catalogs |
| local path | sources/toss__yarn-plugin-catalogs |
| HEAD | 455a5fe |
| stars/forks | 68 / 8 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2026-04-22T05:13:31Z |
| trendScore / priorityScore | 82 / 193 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 304 | README.md, package.json, .yarn/sdks/typescript/package.json |
| Korean language / Korea domain | 2 | README.md |
| Security / compliance | 2 | .yarn/sdks/typescript/lib/tsserver.js, .yarn/sdks/typescript/lib/tsserverlibrary.js |
| Spec / doc-driven workflow | 2 | README.md, sources/configuration/schema.json |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, korea-signal, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 43 |
| manifests | 4 |
| docs | 1 |
| tests | 8 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | yarn-plugin-catalogs |
| headings | yarn-plugin-catalogs / Why use this plugin? / Requirements / Installation / Usage / 1. Create `catalogs.yml` in your project root / catalogs.yml / 2. (Optional) Configure schema validation in VSCode / 3. Apply catalogs to `.yarnrc.yml` / .yarnrc.yml (generated - do not edit catalogs here) |
| excerpt | yarn plugin catalogs A Yarn plugin that manages catalog definitions in catalogs.yml and delegates to Yarn's native Catalogs support available since Yarn 4.10.0 . Highly inspired by pnpm Catalogs https //pnpm.io/catalogs . Why use this plugin? Since Yarn 4.10.0, Yarn natively supports catalogs for managing dependency versions across your workspace. This plugin extends Yarn's native support by Managing catalogs in a separate catalogs.yml file for better organization Supporting hierarchical catalog inheritance e.g., stable/canary inherits from stable Providing validation to ensure consistent catalog usage across workspaces Auto applying default catalogs when adding dependencies Requirements Yar |


## 주요 파일

### Manifests

- README.md
- package.json
- tsconfig.json
- .yarn/sdks/typescript/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| sources | 20 |
| .yarn | 9 |
| .vscode | 2 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .github | 1 |
| .gitignore | 1 |
| .yarnrc.yml | 1 |
| biome.json | 1 |
| bundles | 1 |
| LICENSE | 1 |
| package.json | 1 |
| README.md | 1 |
| tsconfig.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 20 |
| .json | 7 |
| [no-ext] | 6 |
| .js | 5 |
| .yml | 3 |
| .cjs | 1 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
