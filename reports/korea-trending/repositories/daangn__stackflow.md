# daangn/stackflow

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/daangn/stackflow |
| local path | sources/daangn__stackflow |
| HEAD | efa5a4e |
| stars/forks | 1017 / 115 |
| language | TypeScript |
| license | MIT |
| pushedAt | 2026-06-11T12:06:28Z |
| trendScore / priorityScore | 109 / 306 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 475 | AGENTS.md, core/README.md, README.md |
| Korean language / Korea domain | 134 | README.md, config/package.json, core/package.json |
| Infra / observability | 25 | extensions/plugin-sentry/README.md, extensions/plugin-sentry/package.json, docs/components/ChangelogContent.mdx |
| RAG / retrieval | 4 | docs/components/ChangelogContent.mdx |
| Spec / doc-driven workflow | 4 | AGENTS.md, extensions/plugin-lifecycle/tsconfig.json, docs/CHANGELOG.md |
| AI agent / tool use | 2 | AGENTS.md |
| LLM wiki / memory / graph | 2 | AGENTS.md, docs/pages/api-references/plugins/plugin-history-sync.en.mdx |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, rag, sdk-api, spec-driven |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 533 |
| manifests | 40 |
| docs | 160 |
| tests | 28 |
| ci/ops | 4 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Introduction / Getting Started / Integration Examples / Contributors / License |
| excerpt | <div align="center" <a href="https //stackflow.so/" target=" blank" <img alt="demo" src="./demo.png" width="320" </a ! logo ./logo light.svg gh light mode only ! logo ./logo dark.svg gh dark mode only ! https //img.shields.io/npm/v/@stackflow/core ! https //img.shields.io/npm/l/@stackflow/core ! https //img.shields.io/npm/dt/@stackflow/core ! https //img.shields.io/github/contributors/daangn/stackflow ! https //img.shields.io/github/last commit/daangn/stackflow </div Introduction View full documentation and demo on https //stackflow.so https //stackflow.so/ Stackflow is a project that implements Stack Navigation UX, which is mainly used in mobile devices iOS/Android, etc. in a JavaScript env |


## 주요 파일

### Manifests

- AGENTS.md
- demo/README.md
- .changeset/README.md
- core/README.md
- README.md
- extensions/compat-await-push/README.md
- extensions/link/README.md
- extensions/plugin-basic-ui/README.md
- extensions/plugin-devtools/README.md
- extensions/plugin-google-analytics-4/README.md
- extensions/plugin-history-sync/README.md
- extensions/plugin-lifecycle/README.md
- extensions/plugin-renderer-basic/README.md
- extensions/plugin-renderer-web/README.md
- extensions/plugin-sentry/README.md
- extensions/plugin-stack-depth-change/README.md
- extensions/react-ui-core/README.md
- integrations/react/README.md
- docs/next.config.mjs
- docs/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| extensions | 172 |
| docs | 97 |
| integrations | 70 |
| core | 66 |
| demo | 47 |
| .agents | 26 |
| config | 16 |
| .yarn | 12 |
| .github | 4 |
| packages | 3 |
| .changeset | 2 |
| .vscode | 2 |
| .coderabbit.yaml | 1 |
| .editorconfig | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 230 |
| .tsx | 73 |
| .md | 64 |
| .json | 59 |
| .mdx | 52 |
| .js | 24 |
| .yml | 6 |
| [no-ext] | 6 |
| .cjs | 4 |
| .css | 2 |
| .mjs | 2 |
| .patch | 2 |
| .svg | 2 |
| .graphql | 1 |
| .html | 1 |
| .jsonc | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
