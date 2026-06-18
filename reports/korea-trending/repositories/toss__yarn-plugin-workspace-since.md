# toss/yarn-plugin-workspace-since

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/yarn-plugin-workspace-since |
| local path | sources/toss__yarn-plugin-workspace-since |
| HEAD | 81eb4a0 |
| stars/forks | 189 / 14 |
| language | TypeScript |
| license |  |
| pushedAt | 2024-12-02T12:12:39Z |
| trendScore / priorityScore | 76 / 187 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 42 | package.json, .yarn/sdks/typescript/package.json, .vscode/settings.json |
| RAG / retrieval | 4 | .pnp.loader.mjs |
| Korean language / Korea domain | 2 | README.md |
| Security / compliance | 2 | .yarn/sdks/typescript/lib/tsserver.js, .yarn/sdks/typescript/lib/tsserverlibrary.js |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, korea-signal, rag, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 52 |
| manifests | 4 |
| docs | 1 |
| tests | 9 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | yarn-plugin-workspace-since |
| headings | yarn-plugin-workspace-since / Installation / Yarn 버전 4를 사용하는 경우 / Yarn 버전 2, 3을 사용하는 경우 / Usage / `run` |
| excerpt | yarn plugin workspace since since는 yarn berry https //github.com/yarnpkg/berry workspace 플러그인입니다. Installation Yarn 버전 4를 사용하는 경우 Yarn 버전 2, 3을 사용하는 경우 since는 @yarn/plugin workspace tools https //github.com/yarnpkg/berry/tree/master/packages/plugin workspace tools 에 의존합니다. 따라서 먼저 workspace tools를 설치해야 합니다. Usage run 주어진 두 git revision 사이에 변경점이 있는 workspace에 대해서 주어진 명령어를 실행합니다. 변경점은 파생됩니다. "A" workspace에 의존성을 가진 "B" workspace가 있을때 "A", "B" 모두에 대해서 run 이 실행됩니다. 변경된 workspace가 없다면 아무것도 실행하지 않습니다. Arguments command 실행할 명령어를 지정합니다. command 를 test 로 지정한다면, 각 workspace 디렉토리에서 yarn test 를 실행합니다. package.json 의 scripts 에 지정되지 않은 명령어도 실행합니다. 지정한 명령어가 존재하지 않는 경우, 무시합니다. from 시작 리비전입니다. to 끝 리비전입니다. 지정하 |


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
| sources | 28 |
| .yarn | 10 |
| testing | 3 |
| .vscode | 2 |
| .gitignore | 1 |
| .pnp.cjs | 1 |
| .pnp.loader.mjs | 1 |
| .prettierrc | 1 |
| .yarnrc.yml | 1 |
| jest.config.js | 1 |
| package.json | 1 |
| README.md | 1 |
| tsconfig.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 31 |
| .js | 5 |
| .json | 5 |
| [no-ext] | 4 |
| .cjs | 3 |
| .yml | 2 |
| .md | 1 |
| .mjs | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
