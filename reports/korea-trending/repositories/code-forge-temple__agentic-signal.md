# code-forge-temple/agentic-signal

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/code-forge-temple/agentic-signal |
| local path | sources/code-forge-temple__agentic-signal |
| HEAD | dea6dd0 |
| stars/forks | 0 / 0 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T09:14:40Z |
| trendScore / priorityScore | 66 / 159 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 215 | README.md, docs/docs/nodes/ai/rag.mdx, docs/docs/workflows/data/rag-eval.mdx |
| Frontend / developer experience | 99 | README.md, docs/package.json, client/package.json |
| Local LLM / on-device inference | 73 | README.md, client/package.json, docs/docs/nodes/ai/llm-process.mdx |
| Security / compliance | 64 | README.md, docs/static/workflows/rag-eval.json, docs/sidebars.ts |
| AI agent / tool use | 57 | README.md, package.json, docs/docs/nodes/ai/llm-process.mdx |
| Infra / observability | 11 | docs/static/workflows/rag-eval.json, docs/docs/getting-started/web-app/quick-start.mdx, docs/docs/nodes/data/stock-analysis.md |
| Spec / doc-driven workflow | 9 | docs/docs/getting-started/configuration.mdx, docs/docs/nodes/data/stock-analysis.md, docs/docs/nodes/output/reddit-post.mdx |
| LLM wiki / memory / graph | 8 | README.md, docs/docs/getting-started/reddit-oauth-client.md, docs/docs/nodes/data/async-data-aggregator.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, frontend, frontend-dx, graphMemory, infra-observability, llm-wiki-memory, llmFramework, local-llm, localRuntime, rag, sdk-api, security, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Rust |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 430 |
| manifests | 12 |
| docs | 97 |
| tests | 0 |
| ci/ops | 4 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | [<img src="docs/static/img/logo.svg" alt="Agentic Signal" width="32" height="32">](https://code-forge-temple.github.io/agentic-signal/) Agentic Signal |
| headings | [<img src="docs/static/img/logo.svg" alt="Agentic Signal" width="32" height="32">](https://code-forge-temple.github.io/agentic-signal/) Agentic Signal / 🎬 Demo Video / ✨ Features / 🎯 **Visual Workflow Builder** / 🧠 **Local AI Intelligence** / 🔗 **Rich Integrations** / 🚀 Quick Start / 🤝 Contributing / 📄 License / 🆘 Support |
| excerpt | <img src="docs/static/img/logo.svg" alt="Agentic Signal" width="32" height="32" https //code forge temple.github.io/agentic signal/ Agentic Signal Visual AI Workflow Automation Platform with Local Agent Intelligence ⭐️ Love this project? Please consider starring the repository https //github.com/code forge temple/agentic signal on GitHub and supporting development https //github.com/sponsors/code forge temple to help me continue building amazing features! ! License AGPL v3 & Commercial https //img.shields.io/badge/License AGPL%20v3%20%7C%20Commercial blue.svg LICENSE.md ! Docs https //img.shields.io/badge/docs live blueviolet https //code forge temple.github.io/agentic signal/ ! TypeScript h |


## 주요 파일

### Manifests

- docs/README.md
- README.md
- docs/package.json
- docs/tsconfig.json
- client/package.json
- client/tsconfig.json
- client/vite.config.ts
- package.json
- src-tauri/Cargo.toml
- tsconfig.json
- client/tsconfig.app.json
- client/tsconfig.node.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| client | 220 |
| docs | 95 |
| server | 64 |
| src-tauri | 18 |
| scripts | 11 |
| .github | 3 |
| shared | 3 |
| .code-workspace | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |
| bunfig.toml | 1 |
| deno.json | 1 |
| docker-build.bat | 1 |
| docker-build.sh | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 189 |
| .tsx | 80 |
| .mdx | 30 |
| .json | 28 |
| .md | 28 |
| .scss | 16 |
| [no-ext] | 15 |
| .mustache | 10 |
| .svg | 10 |
| .css | 6 |
| .rs | 6 |
| .yml | 3 |
| .html | 2 |
| .toml | 2 |
| .bat | 1 |
| .icns | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
