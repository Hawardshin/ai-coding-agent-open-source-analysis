# kakao/FunctionChat-Bench

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/FunctionChat-Bench |
| local path | sources/kakao__FunctionChat-Bench |
| HEAD | 5ddb0b5 |
| stars/forks | 118 / 15 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2026-02-25T02:23:32Z |
| trendScore / priorityScore | 83 / 226 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 15 | src/evaluation_handler.py, src/api_executor.py, src/gemini_utils.py |
| Korean language / Korea domain | 15 | README.md, CONTRIBUTING.md, data/rubric_call.txt |
| LLM wiki / memory / graph | 11 | NOTICE.md |
| Local LLM / on-device inference | 6 | README.md, src/local_inference.py |
| RAG / retrieval | 5 | src/evaluation_handler.py |
| Spec / doc-driven workflow | 3 | README.md |
| Frontend / developer experience | 2 | README.md, NOTICE.md |
| Security / compliance | 2 | README.md, NOTICE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 29 |
| manifests | 2 |
| docs | 3 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | FunctionChat-Bench: Comprehensive Evaluation of Language Model's Generative Capabilities in Korean Tool-use Dialogs |
| headings | FunctionChat-Bench: Comprehensive Evaluation of Language Model's Generative Capabilities in Korean Tool-use Dialogs / Introduction / Dataset Composition / Evaluation Method / **Installation** / **Config** / openai config format / openai azure config format / Evaluation / run dialog evaluation |
| excerpt | FunctionChat Bench Comprehensive Evaluation of Language Model's Generative Capabilities in Korean Tool use Dialogs Introduction The FunctionChat Bench is a benchmark dataset specifically designed to evaluate the Tool Use Function Calling capabilities of Language Models within conversational settings. This dataset is built on Korean dialogs data and is meticulously crafted to precisely assess various functionalities required in both single turn and multi turn situations. ! FunctionChat Bench img ./img/example img.png Dataset Composition The FunctionChat Bench consists of the following datasets SingleCall SingleCall evaluates how accurately the LM can select and call the necessary function amo |


## 주요 파일

### Manifests

- README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 13 |
| data | 8 |
| config | 1 |
| CONTRIBUTING.md | 1 |
| evaluate.py | 1 |
| LICENSE | 1 |
| NOTICE.md | 1 |
| output | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 14 |
| .txt | 6 |
| .jsonl | 3 |
| .md | 3 |
| [no-ext] | 2 |
| .cfg | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
