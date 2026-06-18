# MarcoPorcellato/matryca-plumber

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/MarcoPorcellato/matryca-plumber |
| local path | sources/MarcoPorcellato__matryca-plumber |
| HEAD | 5f2d75a |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T08:22:35Z |
| trendScore / priorityScore | 72 / 236 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | docs/openspec/README.md, README.md, docs/openspec/agent-ax-robustness.md |
| MCP / tool protocol | 317 | docs/openspec/README.md, README.md, docs/openspec/agent-ax-robustness.md |
| LLM wiki / memory / graph | 292 | docs/openspec/README.md, README.md, docs/openspec/agent-dx.md |
| Security / compliance | 170 | docs/openspec/README.md, README.md, docs/openspec/agent-ax-robustness.md |
| Frontend / developer experience | 155 | docs/openspec/README.md, frontend/README.md, README.md |
| RAG / retrieval | 151 | docs/openspec/README.md, README.md, docs/openspec/agent-dx.md |
| Spec / doc-driven workflow | 54 | README.md, docs/openspec/agent-dx.md, docs/openspec/agent-onboarding.md |
| Local LLM / on-device inference | 44 | README.md, docs/openspec/agent-ax-robustness.md, docs/openspec/llm-performance.md |
| Infra / observability | 2 | docs/resilience-llm-json-triz.md, src/agent/page_prompt_session.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, documentParsing, frontend-dx, graphMemory, infra-observability, llm-wiki, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 364 |
| manifests | 10 |
| docs | 58 |
| tests | 97 |
| ci/ops | 4 |
| spec artifacts | 12 |
| agent instruction files | 10 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Matryca Plumber |
| headings | Matryca Plumber / What it does for you / How it compares / ⚠️ Important: Clone Your Graph First / 🚀 Quick Install & Getting Started / 1. Try it instantly (Zero-install) / 2. Global Installation (Recommended) / 3. Open the control room (recommended first step) / same as: matryca-plumber status / Plumber commands — UI vs daemon |
| excerpt | Matryca Plumber ! CI https //github.com/MarcoPorcellato/matryca plumber/actions/workflows/ci.yml/badge.svg https //github.com/MarcoPorcellato/matryca plumber/actions/workflows/ci.yml ! PyPI https //img.shields.io/pypi/v/matryca plumber.svg https //pypi.org/project/matryca plumber/ ! PyPI Downloads https //img.shields.io/pypi/dm/matryca plumber.svg https //pypi.org/project/matryca plumber/ ! GitHub release https //img.shields.io/github/v/release/MarcoPorcellato/matryca plumber?display name=tag https //github.com/MarcoPorcellato/matryca plumber/releases ! Python https //img.shields.io/badge/python %3E%3D3.12 blue?logo=python&logoColor=white https //github.com/MarcoPorcellato/matryca plumber/bl |


## 주요 파일

### Manifests

- docs/openspec/README.md
- frontend/README.md
- README.md
- frontend/package.json
- frontend/tsconfig.json
- frontend/vite.config.ts
- Makefile
- pyproject.toml
- frontend/tsconfig.app.json
- frontend/tsconfig.node.json


### Spec / Docs / Prompt Artifacts

- .cursor/rules/00-karpathy-agent-behavior.mdc
- .cursor/rules/07-env-example.mdc
- docs/ARCHITECTURE.md
- .cursor/rules/01-core-paradigm.mdc
- .cursor/rules/02-python-standards.mdc
- .cursor/rules/03-logseq-api.mdc
- .cursor/rules/04-spatial-parser.mdc
- .cursor/rules/05-release-preparation.mdc
- .cursor/rules/06-auto-changelog.mdc
- .cursor/rules/08-github-workflow-standards.mdc
- .cursor/rules/09-github-identity-marco-porcellato.mdc
- ROADMAP.md


### Agent Instruction Files

- .cursor/rules/00-karpathy-agent-behavior.mdc
- .cursor/rules/07-env-example.mdc
- .cursor/rules/01-core-paradigm.mdc
- .cursor/rules/02-python-standards.mdc
- .cursor/rules/03-logseq-api.mdc
- .cursor/rules/04-spatial-parser.mdc
- .cursor/rules/05-release-preparation.mdc
- .cursor/rules/06-auto-changelog.mdc
- .cursor/rules/08-github-workflow-standards.mdc
- .cursor/rules/09-github-identity-marco-porcellato.mdc


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 126 |
| tests | 96 |
| frontend | 42 |
| docs | 41 |
| scripts | 15 |
| .github | 11 |
| .cursor | 10 |
| .cursorignore | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .python-version | 1 |
| .repomixignore | 1 |
| .well-known | 1 |
| CHANGELOG.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 228 |
| .md | 58 |
| .tsx | 13 |
| .ts | 12 |
| .yml | 12 |
| .mdc | 10 |
| [no-ext] | 8 |
| .json | 7 |
| .svg | 4 |
| .js | 3 |
| .sh | 2 |
| .txt | 2 |
| .css | 1 |
| .example | 1 |
| .html | 1 |
| .in | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
