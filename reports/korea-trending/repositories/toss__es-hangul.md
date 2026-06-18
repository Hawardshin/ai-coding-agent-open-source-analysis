# toss/es-hangul

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/es-hangul |
| local path | sources/toss__es-hangul |
| HEAD | 738c8c7 |
| stars/forks | 1829 / 137 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2025-10-23T08:21:00Z |
| trendScore / priorityScore | 126 / 297 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 500 | README.md, docs/package.json, benchmarks/package.json |
| Frontend / developer experience | 134 | docs/next.config.js, docs/package.json, package.json |
| Spec / doc-driven workflow | 9 | docs/src/pages/docs/api/number/numberToHangul.en.mdx, docs/src/pages/docs/api/number/numberToHangulMixed.en.mdx, .scripts/check-peer.sh |
| LLM wiki / memory / graph | 1 | .github/CODE_OF_CONDUCT.md |
| Security / compliance | 1 | CHANGELOG.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, evalObservability, frontend-dx, korea-signal, llm-wiki-memory, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 257 |
| manifests | 8 |
| docs | 114 |
| tests | 36 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | es-hangul &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/toss/slash/blob/main/LICENSE)  [![NPM badge](https://img.shields.io/npm/v/es-hangul?logo=npm)](https://www.npmjs.com/package/es-hangul)  [![Discord Badge](https://discord.com/api/guilds/1281071127052943361/widget.png?style=shield)](https://discord.gg/vGXbVjP2nY) |
| headings | es-hangul &middot; [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/toss/slash/blob/main/LICENSE)  [![NPM badge](https://img.shields.io/npm/v/es-hangul?logo=npm)](https://www.npmjs.com/package/es-hangul)  [![Discord Badge](https://discord.com/api/guilds/1281071127052943361/widget.png?style=shield)](https://discord.gg/vGXbVjP2nY) / 사용 예시 / 기여하기 / Thanks to / 라이선스 |
| excerpt | ! es hangul 로고 https //github.com/toss/es hangul/assets/69495129/433ddc8c b32d 4c4c 8b60 5cc9cbe315d3 es hangul &middot; ! MIT License https //img.shields.io/badge/license MIT blue.svg https //github.com/toss/slash/blob/main/LICENSE ! NPM badge https //img.shields.io/npm/v/es hangul?logo=npm https //www.npmjs.com/package/es hangul ! Discord Badge https //discord.com/api/guilds/1281071127052943361/widget.png?style=shield https //discord.gg/vGXbVjP2nY 한국어 English https //github.com/toss/es hangul/blob/main/README en us.md es hangul 은 쉽게 한글을 다룰 수 있도록 돕는 JavaScript 라이브러리입니다. 편리하게 사용할 수 있는 모던한 라이브러리 API를 제공합니다. ECMAScript Modules을 사용하기 때문에, 사용자가 브라우저 환경에서 최소한의 코드를 내려받도록 할 수 있습니다. 사용 예시 문자열 초성화, 조 |


## 주요 파일

### Manifests

- .changeset/README.md
- README.md
- docs/next.config.js
- docs/package.json
- docs/tsconfig.json
- benchmarks/package.json
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 115 |
| docs | 105 |
| .github | 9 |
| benchmarks | 3 |
| .changeset | 2 |
| .vscode | 2 |
| .circleci | 1 |
| .eslintrc.js | 1 |
| .gitignore | 1 |
| .nvmrc | 1 |
| .prettierrc | 1 |
| .scripts | 1 |
| .yarnrc.yml | 1 |
| CHANGELOG.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 122 |
| .mdx | 64 |
| .json | 22 |
| .tsx | 13 |
| .md | 10 |
| .yml | 8 |
| [no-ext] | 6 |
| .js | 3 |
| .svg | 2 |
| .toml | 2 |
| .css | 1 |
| .mjs | 1 |
| .mp4 | 1 |
| .mts | 1 |
| .sh | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
