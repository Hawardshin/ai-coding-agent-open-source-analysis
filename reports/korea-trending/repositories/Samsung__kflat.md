# Samsung/kflat

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/kflat |
| local path | sources/Samsung__kflat |
| HEAD | 8651be4 |
| stars/forks | 32 / 6 |
| language | C |
| license | NOASSERTION |
| pushedAt | 2026-01-20T09:59:28Z |
| trendScore / priorityScore | 70 / 199 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 110 | recipes/memory_map/README.md, tests/README.md, lib/README.md |
| Korean language / Korea domain | 8 | README.md, utils/README.md, utils/ksyzrecip/README.md |
| Security / compliance | 5 | README.md, doc/Startup_Linux.md, LICENSE.txt |
| RAG / retrieval | 4 | lib/Unflatten.md |
| Spec / doc-driven workflow | 3 | README.md, doc/Image.md, LICENSE.txt |
| Infra / observability | 1 | utils/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | context-engineering, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python, Go, C/C++ |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 173 |
| manifests | 13 |
| docs | 19 |
| tests | 70 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Kflat: Kernel memory flattening module |
| headings | Kflat: Kernel memory flattening module / Quick start guides / Building / x86_64: / to build all / or to build only a specific target (e.g. executor) / ARM64: / to build all / or to build only a specific target (e.g. executor) / Testing |
| excerpt | Kflat Kernel memory flattening module Kflat is a Linux kernel implementation of the library for fast serialization of C structures. It works by making a copy of the kernel memory for indicated variables and structures. Such copy can be used to recreate the layout of kernel memory in userspace process, for instance in Auto off Target https //github.com/Samsung/auto off target project. Uflat is a userspace port of Kflat code, compiled as shared library and intended to be used as a fast serialization engine for Linux applications. Currently supported architectures are x86 64 and ARM64. Quick start guides If you'd like to start using KFLAT, check out quick start guides available for Linux x86 64 |


## 주요 파일

### Manifests

- recipes/memory_map/README.md
- tests/README.md
- lib/README.md
- README.md
- recipes/README.md
- tools/README.md
- utils/README.md
- recipes/do_init_module/README.md
- recipes/drm_framebuffer/README.md
- recipes/task_current/README.md
- recipes/userspace_flattening/README.md
- utils/ksyzrecip/README.md
- utils/ksyzrecip/go.sum


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| tests | 70 |
| recipes | 27 |
| lib | 18 |
| core | 11 |
| include | 11 |
| utils | 11 |
| tools | 8 |
| cmake | 7 |
| doc | 4 |
| .gitignore | 1 |
| CMakeLists.txt | 1 |
| CREDITS | 1 |
| LICENSE | 1 |
| LICENSE.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .c | 85 |
| .h | 21 |
| .md | 19 |
| .txt | 16 |
| .cpp | 7 |
| [no-ext] | 5 |
| .go | 3 |
| .hpp | 3 |
| .in | 3 |
| .cmake | 2 |
| .s | 2 |
| .cfg | 1 |
| .external_recipes_root | 1 |
| .py | 1 |
| .recipe_template | 1 |
| .sh | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
