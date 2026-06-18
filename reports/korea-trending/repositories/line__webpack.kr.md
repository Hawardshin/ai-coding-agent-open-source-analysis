# line/webpack.kr

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/webpack.kr |
| local path | sources/line__webpack.kr |
| HEAD | 808080d |
| stars/forks | 93 / 34 |
| language | MDX |
| license | CC-BY-4.0 |
| pushedAt | 2026-06-16T09:37:58Z |
| trendScore / priorityScore | 121 / 283 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 68 | examples/module-federation/app1/package.json, examples/module-federation/app2/package.json, package.json |
| LLM wiki / memory / graph | 13 | CODE_OF_CONDUCT.md, CONTRIBUTING_UNIVERSAL.md, glossary.json |
| RAG / retrieval | 5 | .github/CONTRIBUTING.md, glossary.json, .vale/proselint/GroupTerms.yml |
| Security / compliance | 5 | .vale/Speciesism/AnimalIdioms.yml, CODE_OF_CONDUCT.md, .vale/proselint/Needless.yml |
| Korean language / Korea domain | 4 | CODE_OF_CONDUCT.md, CONTRIBUTING_UNIVERSAL.md, PUBLIC_PULL_REQUEST_TEMPLATE.md |
| Spec / doc-driven workflow | 3 | .github/CONTRIBUTING.md, jest.config.mjs, cypress/e2e/offline.cy.js |
| AI agent / tool use | 1 | .github/CONTRIBUTING.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 443 |
| manifests | 11 |
| docs | 162 |
| tests | 56 |
| ci/ops | 5 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | History / Contributing / License |
| excerpt | <div align="center" <a href="https //github.com/line/webpack.kr" <img width="200" height="200" src="https //webpack.js.org/assets/icon square big.svg" alt="webpack logo" / </a <h1 webpack.kr</h1 Webpack의 가이드, 문서와 모든 것 </div History webpack.js.org https //github.com/webpack/webpack.js.org 를 한국어로 번역하였습니다. 원본 README는 README upstream.md README upstream.md 에서 확인하세요. Contributing 직접 번역이나 의견 제안을 포함한 모든 종류의 기여를 환영합니다. 기여 방법은 CONTRIBUTING UNIVERSAL.md CONTRIBUTING UNIVERSAL.md 을 참고하세요. License 모든 내용은 Creative Commons BY 4.0 license url 을 적용합니다. license url https //creativecommons.org/licenses/by/4.0/ |


## 주요 파일

### Manifests

- examples/getting-started/README.md
- examples/module-federation/README.md
- ground-rules/README.md
- README.md
- repositories/README.md
- .vale/proselint/README.md
- examples/getting-started/package.json
- examples/module-federation/app1/package.json
- examples/module-federation/app2/package.json
- examples/module-federation/package.json
- package.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 323 |
| .vale | 39 |
| examples | 21 |
| cypress | 15 |
| .github | 11 |
| .babelrc | 1 |
| .browserslistrc | 1 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .husky | 1 |
| .markdownlint.json | 1 |
| .markdownlintignore | 1 |
| .prettierignore | 1 |
| .vale.ini | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .mdx | 148 |
| .jsx | 57 |
| .js | 45 |
| .mjs | 45 |
| .yml | 44 |
| .svg | 30 |
| .snap | 18 |
| .md | 14 |
| .json | 13 |
| [no-ext] | 12 |
| .css | 8 |
| .html | 5 |
| .ini | 1 |
| .txt | 1 |
| .woff | 1 |
| .woff2 | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
