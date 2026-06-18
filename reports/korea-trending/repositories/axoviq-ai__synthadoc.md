# axoviq-ai/synthadoc

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/axoviq-ai/synthadoc |
| local path | sources/axoviq-ai__synthadoc |
| HEAD | 1d99102 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T16:26:35Z |
| trendScore / priorityScore | 76 / 218 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | synthadoc/demos/ai-research/AGENTS.md, synthadoc/demos/history-of-computing/AGENTS.md, README.md |
| LLM wiki / memory / graph | 500 | synthadoc/demos/ai-research/AGENTS.md, synthadoc/demos/history-of-computing/AGENTS.md, hooks/README.md |
| RAG / retrieval | 189 | README.md, tests/test_coverage_boost.py, synthadoc/demos/ai-research/raw_sources/public-domain/llm-benchmarks-overview.txt |
| Spec / doc-driven workflow | 74 | synthadoc/demos/history-of-computing/AGENTS.md, hooks/README.md, README.md |
| Frontend / developer experience | 67 | web-ui/README.md, obsidian-plugin/package.json, pyproject.toml |
| Security / compliance | 61 | README.md, tests/test_coverage_boost.py, synthadoc/demos/ai-research/wiki/reinforcement-learning-from-human-feedback.md |
| Infra / observability | 26 | README.md, pyproject.toml, tests/test_coverage_boost.py |
| MCP / tool protocol | 22 | README.md, pyproject.toml, tests/integration/test_mcp_server.py |
| Local LLM / on-device inference | 7 | README.md, synthadoc/config.py |
| Korean language / Korea domain | 4 | README.md, tests/agents/test_ingest_agent.py, tests/agents/test_lint_agent.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, documentParsing, evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 337 |
| manifests | 15 |
| docs | 60 |
| tests | 100 |
| ci/ops | 1 |
| spec artifacts | 3 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Synthadoc |
| headings | Synthadoc / Table of Contents / Who Is It For? / Inspiration and Vision / Problems Addressed / 1. RAG conflates contradictions; Synthadoc surfaces them / 2. Knowledge fragments; Synthadoc links it / 3. Orphan knowledge has no address; Synthadoc finds it / 4. LLM-compiled content can be overconfident; Synthadoc audits it / Claim-Level Provenance |
| excerpt | Synthadoc ! CI https //github.com/axoviq ai/synthadoc/actions/workflows/ci.yml/badge.svg https //github.com/axoviq ai/synthadoc/actions/workflows/ci.yml ! Coverage https //img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Faxoviq ai%2Fsynthadoc%2Fbadges%2Fdocs%2Fbadges.json&query=%24.coverage&label=Coverage&suffix=%25&color=brightgreen https //github.com/axoviq ai/synthadoc/actions/workflows/ci.yml ! License https //img.shields.io/badge/License AGPL 3.0 blue.svg https //github.com/axoviq ai/synthadoc/blob/main/LICENSE ! Python https //img.shields.io/badge/Python 3.11%2B yellow.svg https //www.python.org/ ! Skills https //img.shields.io/badge/dynamic/json?url=http |


## 주요 파일

### Manifests

- synthadoc/demos/ai-research/AGENTS.md
- synthadoc/demos/history-of-computing/AGENTS.md
- hooks/README.md
- README.md
- synthadoc/demos/ai-research/README.md
- synthadoc/demos/history-of-computing/README.md
- web-ui/README.md
- obsidian-plugin/package.json
- obsidian-plugin/tsconfig.json
- pyproject.toml
- web-ui/package.json
- web-ui/tsconfig.json
- web-ui/vite.config.ts
- web-ui/tsconfig.app.json
- web-ui/tsconfig.node.json


### Spec / Docs / Prompt Artifacts

- synthadoc/demos/ai-research/AGENTS.md
- synthadoc/demos/history-of-computing/AGENTS.md
- docs/design.md


### Agent Instruction Files

- synthadoc/demos/ai-research/AGENTS.md
- synthadoc/demos/history-of-computing/AGENTS.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| synthadoc | 175 |
| tests | 98 |
| web-ui | 34 |
| obsidian-plugin | 13 |
| docs | 3 |
| hooks | 2 |
| scripts | 2 |
| .gitattributes | 1 |
| .github | 1 |
| .gitignore | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 196 |
| .md | 59 |
| .txt | 21 |
| .json | 13 |
| .ts | 13 |
| .tsx | 8 |
| .svg | 6 |
| [no-ext] | 5 |
| .css | 3 |
| .js | 3 |
| .html | 2 |
| .pptx | 2 |
| .xlsx | 2 |
| .mjs | 1 |
| .toml | 1 |
| .typed | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
