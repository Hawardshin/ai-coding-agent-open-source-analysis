# naver/lispe

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/lispe |
| local path | sources/naver__lispe |
| HEAD | 1db2766 |
| stars/forks | 594 / 19 |
| language | C |
| license | NOASSERTION |
| pushedAt | 2026-06-17T12:23:35Z |
| trendScore / priorityScore | 100 / 317 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 433 | editor/README.md, lispegguf/examples/README.md, lispegguf/README.md |
| Local LLM / on-device inference | 221 | examples/ollama/README.md, lispegguf/examples/README.md, lispegguf/README.md |
| Korean language / Korea domain | 129 | editor/README.md, lispegguf/README.md, lispemlx/README.md |
| RAG / retrieval | 120 | lispemlx/README.md, lispetorch/README.md, lispegguf/docs/GGUF_SUPPORT.md |
| Infra / observability | 8 | lispetorch/docs/lora_guide.md, lispetorch/docs/performance_guide.md, lispetorch/docs/plaquette_lispe_torch.md |
| Spec / doc-driven workflow | 8 | lispegguf/README.md, lispemlx/README.md, lispemlx/Makefile |
| Security / compliance | 7 | lispemlx/README.md, lispetorch/docs/portable_installation.md, wasm/webassembly_implementation.md |
| Frontend / developer experience | 5 | lispetorch/docs/README_LINUX_INSTALLATION.md, lispetorch/docs/TECHNICAL_SUMMARY.md, lispemlx/LISPE_SYNTAX_REFERENCE.md |
| AI agent / tool use | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, rag, sdk-api, security-compliance, spec-driven |
| stacks | Node/TypeScript/JavaScript, Python, C/C++ |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 558 |
| manifests | 31 |
| docs | 51 |
| tests | 1 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | LispE: Lisp Elémentaire |
| headings | LispE: Lisp Elémentaire / TEST LispE in your browser / CHECK binaries / A Lisp with all the bells and whistles / You can easily run threads / Modern Functional Properties / But also array language capabilities / Play with it / License |
| excerpt | LispE Lisp Elémentaire To test LispE in your browser click HERE https //naver.github.io/lispe Welcome to Lisp Elémentaire , a version of Lisp that is both compact and offers a large variety of functional and array language features. The code also comes with a small internal editor from another NAVER's project TAMGU https //github.com/naver/tamgu . The main goal of LispE is to provide a multi platform language that can harness the power of functional languages with array languages. The real strength of the Lisp language, of which LispE is a dialect, is its very simple but pretty versatile formalism that helps combining all these programming trends together in one single language. I based a la |


## 주요 파일

### Manifests

- docs/README.md
- blas/README.md
- editor/README.md
- examples/AdventOfCode2021/README.md
- examples/ollama/README.md
- lispegguf/examples/README.md
- lispegguf/README.md
- lispemlx/README.md
- lispetiktoken/README.md
- lispetorch/README.md
- Pythonic/README.md
- README.md
- wasm/README.md
- binaries/wasm/README.md
- async/Makefile
- blas/Makefile
- curl/Makefile
- docker/Dockerfile
- editor/Makefile
- gui/Makefile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| examples | 111 |
| xml | 56 |
| lispetorch | 52 |
| Xcode | 39 |
| editor | 37 |
| src | 31 |
| curl | 30 |
| include | 25 |
| pythonlispe | 21 |
| transducer | 19 |
| gui | 15 |
| lispegguf | 13 |
| wasm | 13 |
| blas | 12 |


## 확장자 분포

| ext | count |
| --- | --- |
| .lisp | 148 |
| .h | 135 |
| .cxx | 76 |
| .md | 44 |
| [no-ext] | 26 |
| .vcxproj | 13 |
| .js | 9 |
| .m | 9 |
| .user | 9 |
| .json | 8 |
| .py | 8 |
| .sh | 8 |
| .txt | 7 |
| .plist | 6 |
| .html | 5 |
| .pyc | 5 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
