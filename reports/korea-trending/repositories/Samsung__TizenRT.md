# Samsung/TizenRT

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/TizenRT |
| local path | sources/Samsung__TizenRT |
| HEAD | 97cef2f8 |
| stars/forks | 642 / 633 |
| language | C |
| license | Apache-2.0 |
| pushedAt | 2026-06-16T09:32:12Z |
| trendScore / priorityScore | 119 / 312 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 84 | README.md, apps/shell/README.md, external/iotjs/deps/libtuv/README.md |
| Security / compliance | 80 | apps/examples/aws/README.md, tools/rng_test/README.md, external/grpc/src/core/tsi/README.md |
| LLM wiki / memory / graph | 51 | external/iotjs/docs/README.md, README.md, external/iotjs/deps/jerry/README.md |
| Spec / doc-driven workflow | 17 | apps/examples/ble_tester/README.md, tools/uart_hw_test/README.md, tools/uart_loopback_test/README.md |
| Frontend / developer experience | 6 | docs/API_Reference/README.md, apps/examples/aws/README.md |
| Local LLM / on-device inference | 3 | apps/examples/aws/README.md, framework/src/aifw/readme.md |
| RAG / retrieval | 2 | apps/examples/webserver_test/readme.md |
| AI agent / tool use | 1 | external/protobuf/src/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, local-llm, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, C/C++, Ruby, PHP |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 40 |
| docs | 164 |
| tests | 580 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | TizenRT |
| headings | TizenRT / Contents / Environment Setup / 1. Install Docker / 2. Get TizenRT source code / How to build / Use an interactive tool / Use specific build options / Supported Board / Emulator |
| excerpt | TizenRT ! License https //img.shields.io/badge/licence Apache%202.0 brightgreen.svg?style=flat LICENSE ! Build Status https //travis ci.org/Samsung/TizenRT.svg?branch=master https //travis ci.org/Samsung/TizenRT TizenRT is lightweight RTOS based platform to support low end IoT devices. Please find project details at Wiki https //github.com/Samsung/TizenRT/wiki especially documentations page https //github.com/Samsung/TizenRT/wiki/Documentations . Contents Environment Setup environment setup How to Build how to build Supported Board / Emulator supported board emulator Environment Setup TizenRT provides the easiest way to build with the use of Docker https //www.docker.com/ . There is no need |


## 주요 파일

### Manifests

- docs/API_Reference/README.md
- external/iotjs/docs/README.md
- apps/examples/aws/README.md
- apps/examples/ble_tester/README.md
- apps/README.md
- README.md
- tools/rng_test/README.md
- tools/uart_hw_test/README.md
- tools/uart_loopback_test/README.md
- apps/appgen/README.md
- apps/builtin/README.md
- apps/shell/README.md
- external/gmock/README.md
- external/grpc/src/core/ext/README.md
- external/grpc/src/core/lib/channel/README.md
- external/grpc/src/core/lib/gpr/README.md
- external/grpc/src/core/lib/gpr++/README.md
- external/grpc/src/core/lib/iomgr/README.md
- external/grpc/src/core/lib/README.md
- external/grpc/src/core/lib/surface/README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| external | 4064 |
| os | 1575 |
| apps | 900 |
| framework | 655 |
| lib | 576 |
| tools | 149 |
| docs | 43 |
| loadable_apps | 24 |
| resource | 6 |
| .circleci | 1 |
| .clang-format | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| .vscode | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .h | 2730 |
| .c | 2473 |
| .cc | 653 |
| [no-ext] | 487 |
| .js | 386 |
| .defs | 242 |
| .cpp | 219 |
| .md | 159 |
| .txt | 82 |
| .proto | 74 |
| .py | 69 |
| .cxx | 44 |
| .cmake | 43 |
| .sh | 36 |
| .java | 28 |
| .cmd | 18 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
