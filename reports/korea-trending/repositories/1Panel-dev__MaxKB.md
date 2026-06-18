# 1Panel-dev/MaxKB

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/1Panel-dev/MaxKB |
| local path | sources/1Panel-dev__MaxKB |
| HEAD | a4c526e |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T09:05:38Z |
| trendScore / priorityScore | 67 / 162 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 256 | README.md, installer/Dockerfile, apps/application/long_term_memory/__init__.py |
| Frontend / developer experience | 73 | README.md, ui/README.md, pyproject.toml |
| Security / compliance | 58 | README.md, apps/models_provider/impl/aws_bedrock_model_provider/credential/embedding.py, apps/models_provider/impl/aws_bedrock_model_provider/credential/llm.py |
| MCP / tool protocol | 24 | README.md, pyproject.toml, apps/application/flow/step_node/mcp_node/i_mcp_node.py |
| AI agent / tool use | 5 | README.md, pyproject.toml, apps/models_provider/impl/wenxin_model_provider/model/llm.py |
| LLM wiki / memory / graph | 5 | .github/workflows/build-and-push.yml, apps/application/long_term_memory/__init__.py |
| Local LLM / on-device inference | 4 | pyproject.toml, apps/models_provider/impl/ollama_model_provider/model/embedding.py, apps/models_provider/impl/vllm_model_provider/vllm_model_provider.py |
| Spec / doc-driven workflow | 1 | apps/application/flow/step_node/intent_node/impl/prompt_template.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, context-engineering, documentParsing, example-rich, frontend-dx, graphMemory, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 2093 |
| manifests | 9 |
| docs | 13 |
| tests | 1 |
| ci/ops | 11 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Quick start / Screenshots / Technical stack / Star History / License |
| excerpt | <p align="center" <img src= "https //github.com/1Panel dev/maxkb/assets/52996290/c0694996 0eed 40d8 b369 322bf2a380bf" alt="MaxKB" width="300" / </p <h3 align="center" Open source platform for building enterprise grade agents</h3 <h3 align="center" 强大易用的企业级智能体平台</h3 <p align="center" <a href="https //trendshift.io/repositories/9113" target=" blank" <img src="https //trendshift.io/api/badge/repositories/9113" alt="1Panel dev%2FMaxKB Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </p <p align="center" <a href="https //www.gnu.org/licenses/gpl 3.0.html license text" <img src="https //img.shields.io/github/license/1Panel dev/maxkb?color=%231890FF" alt="License GPL v3" |


## 주요 파일

### Manifests

- README.md
- ui/README.md
- installer/Dockerfile
- pyproject.toml
- ui/package.json
- ui/tsconfig.json
- ui/vite.config.ts
- ui/tsconfig.app.json
- ui/tsconfig.node.json


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| apps | 1103 |
| ui | 955 |
| .github | 12 |
| installer | 11 |
| .dockerignore | 1 |
| .editorconfig | 1 |
| .gitignore | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| main.py | 1 |
| pyproject.toml | 1 |
| README_CN.md | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 1023 |
| .vue | 504 |
| .ts | 327 |
| .svg | 91 |
| .sql | 55 |
| .md | 13 |
| .yml | 11 |
| [no-ext] | 11 |
| .scss | 10 |
| .json | 9 |
| .csv | 6 |
| .xlsx | 6 |
| .html | 5 |
| .mp3 | 5 |
| .sh | 4 |
| .po | 3 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
