# thClaws/thClaws

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/thClaws/thClaws |
| local path | sources/thClaws__thClaws |
| HEAD | 195a25e |
| stars/forks | 0 / 0 |
| language | Rust |
| license |  |
| pushedAt | 2026-06-17T09:50:07Z |
| trendScore / priorityScore | 67 / 226 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | thclaws-technical-manual/README.md, crates/core/assets/gui-shells/chatbot/AGENTS.md, frontend/README.md |
| MCP / tool protocol | 351 | thclaws-technical-manual/README.md, README.md, thclaws-technical-manual/agent-endpoint.md |
| Security / compliance | 313 | thclaws-technical-manual/README.md, README.md, crates/core/Cargo.toml |
| Frontend / developer experience | 304 | thclaws-technical-manual/README.md, crates/core/assets/gui-shells/chatbot/AGENTS.md, frontend/README.md |
| LLM wiki / memory / graph | 264 | thclaws-technical-manual/README.md, README.md, paperclip-adapter/src/server/agent-mutex.test.ts |
| Local LLM / on-device inference | 123 | README.md, .github/workflows/release.yml, thclaws-technical-manual/agent-team.md |
| RAG / retrieval | 96 | thclaws-technical-manual/README.md, README.md, crates/core/Cargo.toml |
| Spec / doc-driven workflow | 78 | thclaws-technical-manual/README.md, crates/core/assets/gui-shells/chatbot/AGENTS.md, paperclip-adapter/README.md |
| Infra / observability | 9 | docker-compose.yml, thclaws-technical-manual/built-in-tools.md, thclaws-technical-manual/docker.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, example-rich, frontend-dx, graphMemory, infra-observability, llm-wiki, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Rust |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 537 |
| manifests | 23 |
| docs | 151 |
| tests | 4 |
| ci/ops | 5 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | thClaws 🦞 |
| headings | thClaws 🦞 / See it work / New in v0.61.0 / 🎨 Media Studio — generate images & video, built in / 🧠 OpenRouter Fusion — many models, one answer / Hacking in public / Four surfaces, one engine / Features / Contribute / Quick start for contributors |
| excerpt | <div align="center" thClaws 🦞 The open source agent harness, in your terminal and on your desktop. A native Rust AI agent workspace that codes, automates, remembers, and coordinates — running on your own machine. One binary. Sovereign by design. Built by a small team hacking in public. ! GitHub stars https //img.shields.io/github/stars/thClaws/thClaws?style=social https //github.com/thClaws/thClaws/stargazers ! Contributors https //img.shields.io/github/contributors/thClaws/thClaws.svg https //github.com/thClaws/thClaws/graphs/contributors ! Discussions https //img.shields.io/github/discussions/thClaws/thClaws https //github.com/thClaws/thClaws/discussions ! Release https //img.shields.io/g |


## 주요 파일

### Manifests

- thclaws-technical-manual/README.md
- crates/core/assets/gui-shells/chatbot/AGENTS.md
- frontend/README.md
- paperclip-adapter/README.md
- README.md
- crates/core/assets/shell-templates/chat-enhanced/README.md
- crates/core/assets/shell-templates/dashboard/README.md
- crates/core/assets/shell-templates/document/README.md
- crates/core/assets/shell-templates/form/README.md
- crates/core/assets/shell-templates/grid/README.md
- crates/core/assets/shell-templates/kanban/README.md
- crates/core/assets/shell-templates/report/README.md
- Cargo.toml
- docker-compose.yml
- Dockerfile
- frontend/package.json
- frontend/tsconfig.json
- frontend/vite.config.ts
- paperclip-adapter/package.json
- paperclip-adapter/tsconfig.json


### Spec / Docs / Prompt Artifacts

- crates/core/assets/gui-shells/chatbot/AGENTS.md
- .claude/INCUBATED_BY


### Agent Instruction Files

- crates/core/assets/gui-shells/chatbot/AGENTS.md
- .claude/INCUBATED_BY


## 상위 디렉터리

| dir | count |
| --- | --- |
| crates | 301 |
| frontend | 61 |
| thclaws-technical-manual | 51 |
| user-manual | 30 |
| user-manual-th | 30 |
| paperclip-adapter | 24 |
| charts | 12 |
| .github | 8 |
| scripts | 2 |
| .claude | 1 |
| .dockerignore | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| banner.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .rs | 219 |
| .md | 151 |
| .tsx | 44 |
| .json | 25 |
| .ts | 24 |
| .html | 12 |
| .yaml | 12 |
| [no-ext] | 11 |
| .ttf | 10 |
| .js | 5 |
| .yml | 5 |
| .css | 4 |
| .svg | 4 |
| .txt | 3 |
| .toml | 2 |
| .fst | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
