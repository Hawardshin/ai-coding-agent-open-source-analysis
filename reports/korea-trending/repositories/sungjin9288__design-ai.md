# sungjin9288/design-ai

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/sungjin9288/design-ai |
| local path | sources/sungjin9288__design-ai |
| HEAD | ca6915f |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T04:53:46Z |
| trendScore / priorityScore | 67 / 234 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | agents/README.md, AGENTS.md, examples/README.md |
| Korean language / Korea domain | 500 | docs/announcements/README.md, AGENTS.md, examples/README.md |
| MCP / tool protocol | 500 | AGENTS.md, examples/README.md, commands/README.md |
| Spec / doc-driven workflow | 500 | AGENTS.md, examples/README.md, commands/README.md |
| Frontend / developer experience | 219 | AGENTS.md, examples/README.md, commands/README.md |
| Security / compliance | 128 | AGENTS.md, examples/README.md, README.md |
| RAG / retrieval | 65 | AGENTS.md, README.md, CLAUDE.md |
| LLM wiki / memory / graph | 15 | README.md, CLAUDE.md, docs/AGENT-DEVELOPMENT.md |
| Infra / observability | 11 | docs/AGENT-DEVELOPMENT.md, docs/WEBSITE-IMPROVEMENT.ko.md, docs/website-console/app.js |
| Local LLM / on-device inference | 1 | knowledge/i18n/korean-payments.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, context-engineering, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Ruby |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 598 |
| manifests | 19 |
| docs | 456 |
| tests | 31 |
| ci/ops | 4 |
| spec artifacts | 5 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Design AI |
| headings | Design AI / Coverage at a glance / Install (Claude Code) / Option A: NPM (one command, recommended) / Option B: Homebrew / Option C: Git clone (for contributors) / Install (other agents) / What you get / First-time tour (5 minutes) / Korean market focus |
| excerpt | Design AI ! Audit https //img.shields.io/badge/audit passing brightgreen https //github.com/sungjin9288/design ai/actions/workflows/audit.yml ! Docs https //img.shields.io/badge/docs mkdocs indigo https //sungjin9288.github.io/design ai/ ! Knowledge files https //img.shields.io/badge/knowledge 92 blue knowledge/PRINCIPLES.md ! Examples https //img.shields.io/badge/examples 223 blue examples/README.md ! Skills https //img.shields.io/badge/skills 20 blue skills/README.md 🇺🇸 English / 🇰🇷 한국어 https //sungjin9288.github.io/design ai/ko/ A model agnostic design knowledge base + skill system. Drop it in front of any AI coding agent Claude Code, Codex CLI, Cursor, Aider and it becomes a senior p |


## 주요 파일

### Manifests

- agents/README.md
- docs/announcements/README.md
- AGENTS.md
- examples/README.md
- commands/README.md
- Formula/README.md
- README.md
- skills/README.md
- vscode-extension/README.md
- vscode-extension/test/README.md
- tools/figma-plugin/README.md
- tools/preview/README.md
- CLAUDE.md
- docs/requirements.txt
- package.json
- vscode-extension/package.json
- vscode-extension/test/integration/tsconfig.json
- vscode-extension/tsconfig.json
- tools/extractors/ts-ast/package.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- docs/requirements.txt
- docs/ARCHITECTURE.md
- docs/ROADMAP.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| examples | 224 |
| knowledge | 93 |
| cli | 66 |
| docs | 62 |
| tools | 47 |
| skills | 44 |
| vscode-extension | 20 |
| commands | 18 |
| agents | 5 |
| .github | 4 |
| Formula | 2 |
| .claude-plugin | 1 |
| .gitignore | 1 |
| .npmignore | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 448 |
| .mjs | 68 |
| .py | 33 |
| .json | 11 |
| .ts | 9 |
| [no-ext] | 6 |
| .yml | 5 |
| .sh | 4 |
| .html | 3 |
| .svg | 3 |
| .tsx | 3 |
| .css | 2 |
| .js | 1 |
| .rb | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
