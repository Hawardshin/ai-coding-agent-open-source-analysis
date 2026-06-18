# Samsung/CAS

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/CAS |
| local path | sources/Samsung__CAS |
| HEAD | 4448ff8 |
| stars/forks | 62 / 11 |
| language | C++ |
| license | NOASSERTION |
| pushedAt | 2025-08-01T18:55:56Z |
| trendScore / priorityScore | 73 / 237 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / developer experience | 71 | vscode-extensions/packages/webview/README.md, vscode-extensions/package.json, vscode-extensions/extensions/cas/package.json |
| Infra / observability | 70 | bas/README.md, client/README.md, README.md |
| Korean language / Korea domain | 36 | README.md, rust/README.md, vscode-extensions/README.md |
| MCP / tool protocol | 36 | requirements.txt, cas_mcp.py, client/mcp/bas.py |
| Security / compliance | 22 | README.md, vscode-extensions/README.md, tools/virtual_environment/README.md |
| LLM wiki / memory / graph | 17 | client/README.md, README.md, tracer/README.md |
| Spec / doc-driven workflow | 13 | client/README.md, README.md, vscode-extensions/README.md |
| RAG / retrieval | 2 | bas/exec_worker.py, client/mod_dbops.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 552 |
| manifests | 40 |
| docs | 29 |
| tests | 27 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | This will configure to build with standard system compiler 'cc' |
| headings | Code Aware Services / Introduction / Details / How to build / This will configure to build with standard system compiler 'cc' / Use this if you want to use clang explicitly / How to use / Run the COMMAND and save tracing log file (.nfsdb) in the current directory / Run the COMMAND and save tracing log file (.nfsdb) in the WORK_DIR directory / Run the COMMAND and save tracing log file (.nfsdb) in the current directory (also keep kernel log file along the way) |
| excerpt | Code Aware Services Code Aware Services CAS is a set of tools for extracting information from a especially large source code trees. It consists of Build Awareness Service BAS and Function/Type database FTDB . BAS is a tool for extracting information how particular S/W image is created from ongoing builds. FTDB transforms predefined source code information like information about functions and types into easily accessible format like JSON which can be used by a number of applications. Introduction Imagine you need to fix a S/W issue in a large S/W product like Mobile Phone . This kind of project usually consists of a large number of S/W modules like kernel, modem, system libraries and applicat |


## 주요 파일

### Manifests

- bas/README.md
- clang-proc/README.md
- client/README.md
- README.md
- rust/README.md
- tracer/README.md
- vscode-extensions/README.md
- tools/virtual_environment/README.md
- vscode-extensions/extensions/cas/README.md
- vscode-extensions/extensions/p4/README.md
- vscode-extensions/packages/webview/README.md
- docs/Makefile
- Cargo.toml
- pyproject.toml
- requirements.txt
- rust/examples/db-hash/Cargo.toml
- rust/examples/find-globals/Cargo.toml
- rust/examples/ftdb-info/Cargo.toml
- rust/tests/001-hello-world/Makefile
- rust/tests/template/Makefile


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| vscode-extensions | 239 |
| rust | 68 |
| clang-proc | 58 |
| ftdb | 48 |
| client | 46 |
| bas | 25 |
| tracer | 19 |
| examples | 11 |
| docs | 6 |
| tools | 4 |
| tests | 3 |
| cmake | 2 |
| typings | 2 |
| .gitignore | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .ts | 109 |
| [no-ext] | 56 |
| .c | 53 |
| .rs | 49 |
| .py | 48 |
| .cpp | 41 |
| .json | 39 |
| .svelte | 32 |
| .md | 23 |
| .h | 21 |
| .js | 12 |
| .txt | 12 |
| .sh | 9 |
| .html | 8 |
| .toml | 7 |
| .patch | 6 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
