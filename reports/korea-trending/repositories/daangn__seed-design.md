# daangn/seed-design

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/daangn/seed-design |
| local path | sources/daangn__seed-design |
| HEAD | 979aeb8 |
| stars/forks | 889 / 56 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T12:23:18Z |
| trendScore / priorityScore | 106 / 322 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 297 | docs/AGENTS.md, docs/examples/react/AGENTS.md, docs/registry/react/ui/AGENTS.md |
| MCP / tool protocol | 66 | docs/AGENTS.md, packages/docs-mcp/README.md, packages/mcp/README.md |
| Spec / doc-driven workflow | 65 | docs/AGENTS.md, docs/app/_llms/AGENTS.md, AGENTS.md |
| AI agent / tool use | 52 | docs/AGENTS.md, docs/app/_llms/AGENTS.md, AGENTS.md |
| Korean language / Korea domain | 9 | packages/archive/icon/README.md, packages/design-token/README.md, CLAUDE.md |
| LLM wiki / memory / graph | 7 | packages/figma/AGENTS.md, packages/archive/design-token/README.md, packages/design-token/README.md |
| Security / compliance | 1 | packages/lynx-qvism-preset/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, frontend-dx, korea-signal, llm-wiki-memory, mcp, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | Vector/search store |


## 구조 요약

| key | value |
| --- | --- |
| files | 5441 |
| manifests | 40 |
| docs | 1358 |
| tests | 103 |
| ci/ops | 18 |
| spec artifacts | 46 |
| agent instruction files | 40 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings |  |
| excerpt | ! cover ./cover.png Definitions @seed design/rootage ./packages/rootage @seed design/qvism preset ./packages/qvism preset Base Libraries @seed design/css ./packages/css React Libraries @seed design/react headless ./packages/react headless @seed design/react ./packages/react @seed design/stackflow ./packages/stackflow Integrations @seed design/figma ./packages/figma @seed design/mcp ./packages/mcp Ecosystem @seed design/ecosystem/rootage ./ecosystem/rootage @seed design/ecosystem/qvism ./ecosystem/qvism @seed design/ecosystem/figma extractor ./ecosystem/figma extractor Documentation @seed design/docs ./docs |


## 주요 파일

### Manifests

- docs/AGENTS.md
- docs/examples/react/AGENTS.md
- docs/app/_llms/AGENTS.md
- docs/registry/react/ui/AGENTS.md
- docs/README.md
- packages/docs-mcp/README.md
- packages/mcp/README.md
- tools/figma-mcp/README.md
- AGENTS.md
- ecosystem/AGENTS.md
- examples/lynx-spa/AGENTS.md
- examples/stackflow-spa/AGENTS.md
- packages/AGENTS.md
- skills/AGENTS.md
- tools/AGENTS.md
- packages/cli/AGENTS.md
- packages/cli/src/AGENTS.md
- packages/css/AGENTS.md
- packages/docs-mcp/AGENTS.md
- packages/figma/AGENTS.md


### Spec / Docs / Prompt Artifacts

- docs/AGENTS.md
- docs/examples/react/AGENTS.md
- docs/app/_llms/AGENTS.md
- docs/registry/react/ui/AGENTS.md
- AGENTS.md
- ecosystem/AGENTS.md
- examples/lynx-spa/AGENTS.md
- examples/stackflow-spa/AGENTS.md
- packages/AGENTS.md
- skills/AGENTS.md
- tools/AGENTS.md
- packages/cli/AGENTS.md
- packages/cli/src/AGENTS.md
- packages/css/AGENTS.md
- packages/docs-mcp/AGENTS.md
- packages/figma/AGENTS.md
- packages/lynx-css/AGENTS.md
- packages/lynx-qvism-preset/AGENTS.md
- packages/lynx-react/AGENTS.md
- packages/mcp/AGENTS.md


### Agent Instruction Files

- docs/AGENTS.md
- docs/examples/react/AGENTS.md
- docs/app/_llms/AGENTS.md
- docs/registry/react/ui/AGENTS.md
- AGENTS.md
- ecosystem/AGENTS.md
- examples/lynx-spa/AGENTS.md
- examples/stackflow-spa/AGENTS.md
- packages/AGENTS.md
- skills/AGENTS.md
- tools/AGENTS.md
- packages/cli/AGENTS.md
- packages/cli/src/AGENTS.md
- packages/css/AGENTS.md
- packages/docs-mcp/AGENTS.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 2676 |
| docs | 1178 |
| tools | 1157 |
| examples | 202 |
| ecosystem | 121 |
| skills | 34 |
| .github | 20 |
| .claude | 17 |
| scripts | 6 |
| .vscode | 3 |
| patches | 3 |
| .changeset | 2 |
| .coderabbit.yaml | 1 |
| .cursorignore | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 2036 |
| .mjs | 1137 |
| .tsx | 1089 |
| .json | 373 |
| .mdx | 213 |
| .css | 193 |
| .md | 187 |
| .yaml | 91 |
| [no-ext] | 55 |
| .yml | 19 |
| .mts | 10 |
| .js | 9 |
| .html | 6 |
| .example | 5 |
| .sh | 4 |
| .svg | 4 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
