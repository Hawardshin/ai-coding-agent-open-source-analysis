# jayjodev/vivory-mcp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/jayjodev/vivory-mcp |
| local path | sources/jayjodev__vivory-mcp |
| HEAD | 23372b7 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-05T04:25:08Z |
| trendScore / priorityScore | 69 / 158 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 500 | packages/mcp-server-verification/examples/README.md, packages/mcp-server-korea/README.md, packages/mcp-server-kosis/README.md |
| Korean language / Korea domain | 227 | packages/mcp-server-korea/README.md, packages/mcp-server-kosis/README.md, packages/mcp-server-verification/README.md |
| AI agent / tool use | 61 | packages/mcp-server-verification/examples/README.md, packages/mcp-server-verification/README.md, README.md |
| LLM wiki / memory / graph | 12 | packages/mcp-server-verification/examples/claude-code-verify-before-publish.md, packages/mcp-server-verification/examples/langgraph-verification-node.py, packages/mcp-server-verification/examples/quickstart.md |
| Security / compliance | 11 | .github/workflows/publish-mcp-korea.yml, .github/workflows/publish-mcp-kosis.yml, .github/workflows/publish-mcp-verification.yml |
| Spec / doc-driven workflow | 8 | packages/mcp-server-verification/tests/test_tools.py, packages/mcp-server-verification/src/vivory_mcp_verification/tools/law.py |
| RAG / retrieval | 1 | packages/mcp-server-verification/src/vivory_mcp_verification/server.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, example-rich, graphMemory, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 42 |
| manifests | 8 |
| docs | 11 |
| tests | 3 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Vivory MCP Servers |
| headings | Vivory MCP Servers / Why / Packages / Recommended: / Quick install (Claude Desktop) / Example prompts / Architecture / Self-hosting / License / Contributing |
| excerpt | Vivory MCP Servers Korean public data MCP servers for AI agents — KOSIS Statistics Korea live , BoK ECOS · NEIS · LOCALDATA planned . Built and maintained by Vivory https //vivory.app . Backend powered by the Vivory Korea Data Gateway https //api.vivory.app . ! PyPI Version https //img.shields.io/pypi/v/vivory mcp kosis.svg https //pypi.org/project/vivory mcp kosis/ ! License MIT https //img.shields.io/badge/License MIT yellow.svg LICENSE Why Korean public statistics population, GDP, CPI, employment, trade, etc. are published by official agencies via Korean only APIs that require local accounts and return JS literal responses with mixed taxonomies. This repo packages them as Model Context Pr |


## 주요 파일

### Manifests

- packages/mcp-server-verification/examples/README.md
- packages/mcp-server-korea/README.md
- packages/mcp-server-kosis/README.md
- packages/mcp-server-verification/README.md
- README.md
- packages/mcp-server-korea/pyproject.toml
- packages/mcp-server-kosis/pyproject.toml
- packages/mcp-server-verification/pyproject.toml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 37 |
| .github | 3 |
| .gitignore | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 19 |
| .md | 11 |
| [no-ext] | 4 |
| .toml | 3 |
| .yml | 3 |
| .json | 1 |
| .mdc | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
