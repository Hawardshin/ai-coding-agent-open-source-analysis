# rocketride-org/rocketride-server

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/rocketride-org/rocketride-server |
| local path | sources/rocketride-org__rocketride-server |
| HEAD | bc36b63 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T23:07:54Z |
| trendScore / priorityScore | 75 / 242 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | nodes/src/nodes/prompt/README.md, nodes/src/nodes/agent_crewai/crewai_agent/README.md, nodes/src/nodes/agent_crewai/crewai_manager/README.md |
| RAG / retrieval | 347 | nodes/src/nodes/prompt/README.md, docs/stubs/AGENTS.md, nodes/src/nodes/agent_llamaindex/README.md |
| LLM wiki / memory / graph | 183 | nodes/src/nodes/agent_rocketride/README.md, nodes/src/nodes/embedding_image/README.md, nodes/src/nodes/embedding_video/README.md |
| Frontend / developer experience | 141 | docs/stubs/AGENTS.md, docs/README.md, nodes/src/nodes/agent_crewai/README.md |
| Security / compliance | 62 | nodes/src/nodes/llm_bedrock/README.md, nodes/src/nodes/llm_mistral/README.md, nodes/src/nodes/llm_ollama/README.md |
| Spec / doc-driven workflow | 61 | docs/stubs/AGENTS.md, nodes/src/nodes/agent_langchain/README.md, nodes/src/nodes/llm_minimax/README.md |
| Infra / observability | 52 | nodes/src/nodes/agent_crewai/README.md, nodes/src/nodes/agent_deepagent/README.md, deploy/helm/examples/README.md |
| Local LLM / on-device inference | 52 | nodes/src/nodes/llm_deepseek/README.md, nodes/src/nodes/llm_minimax/README.md, nodes/src/nodes/llm_ollama/README.md |
| MCP / tool protocol | 47 | docs/README.md, nodes/src/nodes/tool_mcp_client/README.md, AGENTS.md |
| Korean language / Korea domain | 7 | nodes/src/nodes/anonymize/README.md, nodes/src/nodes/ocr/README.md, nodes/src/nodes/qdrant/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, documentParsing, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 3472 |
| manifests | 40 |
| docs | 240 |
| tests | 389 |
| ci/ops | 45 |
| spec artifacts | 50 |
| agent instruction files | 11 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Features / Quick Start / Building Your First Pipe / Observability / Contributors |
| excerpt | <div align="center" <a href="https //rocketride.org" <img src="https //raw.githubusercontent.com/rocketride org/rocketride server/develop/images/banner root.png" alt="RocketRide" width="100%" </a <p <strong RocketRide is the open source AIDE the AI Development Environment.</strong <br/ Build, deploy and harness production ready AI solutions at light speed, all within your IDE or using the CLI in your terminal. </p <p <img src="https //raw.githubusercontent.com/rocketride org/rocketride server/develop/images/icon cpp.png" alt="C++" / &nbsp;&nbsp; <img src="https //raw.githubusercontent.com/rocketride org/rocketride server/develop/images/icon python.png" alt="Python" / &nbsp;&nbsp; <img src="h |


## 주요 파일

### Manifests

- nodes/src/nodes/prompt/README.md
- docs/stubs/AGENTS.md
- docs/README.md
- nodes/src/nodes/agent_crewai/crewai_agent/README.md
- nodes/src/nodes/agent_crewai/crewai_manager/README.md
- nodes/src/nodes/agent_crewai/crewai_subagent/README.md
- nodes/src/nodes/agent_crewai/README.md
- nodes/src/nodes/agent_deepagent/deepagent_agent/README.md
- nodes/src/nodes/agent_deepagent/deepagent_subagent/README.md
- nodes/src/nodes/agent_deepagent/README.md
- nodes/src/nodes/agent_langchain/README.md
- nodes/src/nodes/agent_llamaindex/README.md
- nodes/src/nodes/agent_rocketride/README.md
- nodes/src/nodes/embedding_image/README.md
- nodes/src/nodes/embedding_openai/README.md
- nodes/src/nodes/embedding_transformer/README.md
- nodes/src/nodes/embedding_video/README.md
- nodes/src/nodes/llm_anthropic/README.md
- nodes/src/nodes/llm_baidu_qianfan/README.md
- nodes/src/nodes/llm_bedrock/README.md


### Spec / Docs / Prompt Artifacts

- nodes/src/nodes/prompt/README.md
- docs/stubs/AGENTS.md
- AGENTS.md
- docs/stubs/CLAUDE.md
- .claude/CLAUDE.md
- docs/stubs/copilot-instructions.md
- nodes/src/nodes/agent_crewai/requirements.txt
- nodes/src/nodes/agent_deepagent/requirements.txt
- nodes/src/nodes/agent_langchain/requirements.txt
- nodes/src/nodes/agent_llamaindex/requirements.txt
- nodes/src/nodes/agent_rocketride/requirements.txt
- nodes/src/nodes/embedding_image/requirements.txt
- nodes/src/nodes/embedding_openai/requirements.txt
- nodes/src/nodes/embedding_transformer/requirements.txt
- nodes/src/nodes/embedding_video/requirements.txt
- nodes/src/nodes/llm_anthropic/requirements.txt
- nodes/src/nodes/llm_baidu_qianfan/requirements.txt
- nodes/src/nodes/llm_bedrock/requirements.txt
- nodes/src/nodes/llm_deepseek/requirements.txt
- nodes/src/nodes/llm_gemini/requirements.txt


### Agent Instruction Files

- nodes/src/nodes/prompt/README.md
- docs/stubs/AGENTS.md
- AGENTS.md
- docs/stubs/CLAUDE.md
- .claude/CLAUDE.md
- docs/stubs/copilot-instructions.md
- nodes/src/nodes/prompt/__init__.py
- nodes/src/nodes/prompt/IGlobal.py
- nodes/src/nodes/prompt/IInstance.py
- nodes/src/nodes/prompt/prompt.svg
- nodes/src/nodes/prompt/services.json


## 상위 디렉터리

| dir | count |
| --- | --- |
| packages | 1845 |
| nodes | 1043 |
| apps | 319 |
| tools | 52 |
| scripts | 38 |
| testdata | 30 |
| .github | 29 |
| docs | 27 |
| deploy | 21 |
| examples | 12 |
| docker | 8 |
| .vscode | 4 |
| test | 4 |
| pipelines | 3 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 949 |
| .hpp | 451 |
| .cpp | 334 |
| .tsx | 287 |
| .ts | 239 |
| .json | 214 |
| .md | 209 |
| .h | 180 |
| .txt | 154 |
| .svg | 141 |
| .js | 65 |
| [no-ext] | 34 |
| .yaml | 27 |
| .java | 26 |
| .yml | 20 |
| .cmake | 19 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
