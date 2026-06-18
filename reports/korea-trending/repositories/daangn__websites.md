# daangn/websites

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/daangn/websites |
| local path | sources/daangn__websites |
| HEAD | 0cc78d7 |
| stars/forks | 676 / 62 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T10:17:51Z |
| trendScore / priorityScore | 114 / 281 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 264 | _template/package.json, _template/tsconfig.json, about.daangn.com/package.json |
| Korean language / Korea domain | 67 | README.md, _packages/@karrotmarket/gatsby-theme-seed-design/README.md, _workers/websites-integration/README.md |
| Security / compliance | 8 | _workers/greenhouse-proxy-worker/README.md, about.daangn.com/gatsby-config.ts, biome.json |
| RAG / retrieval | 2 | _workers/websites-integration/README.md, .github/workflows/about_daangn_com-build.yml |
| LLM wiki / memory / graph | 1 | _packages/@karrotmarket/gatsby-transformer-job-post/package.json |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, frontend-dx, korea-signal, llm-wiki-memory, rag, security-compliance |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 397 |
| manifests | 35 |
| docs | 12 |
| tests | 1 |
| ci/ops | 4 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | websites |
| headings | websites / Introduction / Maintainers / Contribution / LICENSE |
| excerpt | websites Daangn on the WWW Introduction 당근에서 공통으로 관리되는 웹사이트 소스코드 저장소입니다. 점점 빈번해지는 웹사이트 개발과 관리를 효율화 하고 모두가 기여할 수 있도록 맥락을 보존하는 모노레포입니다. Maintainers @webmasters https //github.com/orgs/daangn/teams/webmasters at daangn https //github.com/daangn Contribution !IMPORTANT 현재 본 저장소에서는 당근마켓 외부자의 기여를 받고 있지 않습니다. 제안해주실 내용이 있는 경우 Issue를 등록 https //github.com/daangn/websites/issues 해주시거나, <webmaster@daangn.com mailto webmaster@daangn.com 로 연락 바랍니다. LICENSE See LICENSE ./LICENSE and NOTICE ./NOTICE |


## 주요 파일

### Manifests

- _workers/README.md
- README.md
- _packages/@karrotmarket/gatsby-theme-seed-design/README.md
- _workers/greenhouse-proxy-worker/README.md
- _workers/websites-integration/README.md
- _template/package.json
- _template/tsconfig.json
- about.daangn.com/package.json
- about.daangn.com/tsconfig.json
- careers.ca.karrotmarket.com/package.json
- careers.ca.karrotmarket.com/tsconfig.json
- careers.jp.karrotmarket.com/package.json
- careers.jp.karrotmarket.com/tsconfig.json
- package.json
- tsconfig.json
- _packages/@karrotmarket/gatsby-theme-post/package.json
- _packages/@karrotmarket/gatsby-theme-post/tsconfig.json
- _packages/@karrotmarket/gatsby-theme-prismic/package.json
- _packages/@karrotmarket/gatsby-theme-prismic/tsconfig.json
- _packages/@karrotmarket/gatsby-theme-seed-design/package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| _packages | 179 |
| about.daangn.com | 115 |
| careers.ca.karrotmarket.com | 22 |
| careers.jp.karrotmarket.com | 22 |
| _workers | 21 |
| _template | 8 |
| _docs | 6 |
| .github | 4 |
| .vscode | 2 |
| .yarn | 2 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .nvmrc | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .tsx | 157 |
| .ts | 86 |
| .svg | 42 |
| .json | 40 |
| .mjs | 17 |
| [no-ext] | 17 |
| .md | 12 |
| .js | 10 |
| .yml | 6 |
| .example | 3 |
| .jsonc | 2 |
| .cjs | 1 |
| .html | 1 |
| .patch | 1 |
| .toml | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
