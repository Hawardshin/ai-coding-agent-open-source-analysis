# Samsung/UTopia

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/UTopia |
| local path | sources/Samsung__UTopia |
| HEAD | 4c0cdac |
| stars/forks | 168 / 26 |
| language | C++ |
| license | Apache-2.0 |
| pushedAt | 2025-04-16T21:42:51Z |
| trendScore / priorityScore | 77 / 213 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 8 | helper/make.py |
| Security / compliance | 4 | Trophy.md |
| AI agent / tool use | 3 | docker/Dockerfile, helper/make.yml |
| LLM wiki / memory / graph | 2 | Trophy.md |
| Korean language / Korea domain | 1 | docker/Dockerfile |
| Spec / doc-driven workflow | 1 | helper/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, localRuntime, rag, sdk-api, security-compliance, spec-driven |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 414 |
| manifests | 3 |
| docs | 3 |
| tests | 126 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Introduction |
| headings | Introduction / Trophy / Docker / Build / Run / target_analyzer / builddb_path / extern_path / api_json_path / Report |
| excerpt | <p align="center" <img src="res/UTopia.png" </p Introduction UTopia is a tool for automatically generating fuzz drivers from unit tests. UTopia will let developers perform fuzz testing without special knowledge about writing fuzzers. Even developers familiar with fuzzing can save significant time by generating fuzz drivers automatically. UTopia supports C/C++ libraries which have unit tests with GoogleTest, Boost.Test or Tizen TCT. Trophy To see bugs found by UTopia , visit Trophy Trophy.md page. You can also see some UTopia based fuzzers there. Docker For easy set up, we provide docker image for running UTopia . You can build UTopia and generate/run fuzzers inside docker container. Build do |


## 주요 파일

### Manifests

- helper/README.md
- README.md
- docker/Dockerfile


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| lib | 126 |
| tests | 126 |
| include | 124 |
| helper | 13 |
| tools | 7 |
| external | 6 |
| .clang-format | 1 |
| .clang-tidy | 1 |
| .github | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| cmake | 1 |
| CMakeLists.txt | 1 |
| docker | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .cpp | 175 |
| .h | 132 |
| .txt | 28 |
| .proto | 19 |
| .cc | 15 |
| .c | 10 |
| .json | 8 |
| .py | 8 |
| [no-ext] | 8 |
| .hpp | 5 |
| .md | 3 |
| .yml | 2 |
| .cmake | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
