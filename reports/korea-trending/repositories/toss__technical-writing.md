# toss/technical-writing

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/toss/technical-writing |
| local path | sources/toss__technical-writing |
| HEAD | 68ba335 |
| stars/forks | 1055 / 48 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-02-04T12:58:58Z |
| trendScore / priorityScore | 103 / 246 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 157 | package.json, tsconfig.json, docs/tutorial/review-prompt.mdx |
| Korean language / Korea domain | 5 | rspress.config.ts |
| Infra / observability | 1 | docs/sentence/consistency.mdx |
| LLM wiki / memory / graph | 1 | docs/sentence/compactness.mdx |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 57 |
| manifests | 3 |
| docs | 41 |
| tests | 0 |
| ci/ops | 1 |
| spec artifacts | 7 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | 테크니컬 라이팅 가이드 |
| headings | 테크니컬 라이팅 가이드 / 🚀 바로 시작하기 / ✏️ 문서를 어떻게 작성하고, 개선하는지 알고 싶을 때 / ⚡️ 문서를 빠르게 만들고 싶을 때 / 🧱 문서 구조를 짜고 싶을 때 / License |
| excerpt | 테크니컬 라이팅 가이드 테크니컬 라이팅 Technical Writing 은 기술적인 내용을 정확하고 효과적으로 전달하는 글쓰기를 뜻해요. 중요한 점은 독자가 문제를 해결하고 목표를 이루도록 돕는 것이에요. 일반적인 글쓰기는 감정이나 아이디어, 상상력을 표현해서 독자에게 감동을 주거나 새로운 관점을 제공하는 것을 목표로 하지만, 테크니컬 라이팅은 정보를 빠르고 정확하게 전달하는 데 집중해요. 이 가이드에서는 현대 소프트웨어 개발에서 사용하는 테크니컬 라이팅 중 문서 작성 기본기를 다뤄요. 🚀 바로 시작하기 ✏️ 문서를 어떻게 작성하고, 개선하는지 알고 싶을 때 기본 문서 작성하기 https //technical writing.dev/tutorial/basic documents.html 에서 문서를 개선하는 가장 기본적인 방법을 알아보세요. ⚡️ 문서를 빠르게 만들고 싶을 때 AI와 함께 쓰기 https //technical writing.dev/tutorial/review prompt.html 에서 프롬프트 사용법을 보고 빠르게 문서를 작성해 보세요. 🧱 문서 구조를 짜고 싶을 때 여러 페이지로 만들어진 문서를 만들어야 한다면 문서 구조 만들기 https //technical writing.dev/tutorial/structure.html 를 보고 전체적인 문서 구조를 먼저 짜보세요. License Copyright c 2024 V |


## 주요 파일

### Manifests

- README.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- docs/architecture/background.mdx
- docs/architecture/heading.mdx
- docs/architecture/index.md
- docs/architecture/one-thing-per-one-page.mdx
- docs/architecture/overview.mdx
- docs/architecture/predictability.mdx
- docs/architecture/value-first-cost-later.mdx


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| docs | 39 |
| styles | 3 |
| .github | 2 |
| components | 2 |
| .gitignore | 1 |
| .nvmrc | 1 |
| .prettierrc | 1 |
| .yarnrc.yml | 1 |
| .zshrc | 1 |
| nginx.conf | 1 |
| package.json | 1 |
| README.md | 1 |
| rspress.config.ts | 1 |
| tsconfig.json | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .mdx | 19 |
| .ts | 12 |
| .md | 7 |
| .css | 5 |
| .tsx | 4 |
| [no-ext] | 4 |
| .json | 3 |
| .yml | 2 |
| .conf | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
