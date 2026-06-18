# kakao/OrchestrationBench

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakao/OrchestrationBench |
| local path | sources/kakao__OrchestrationBench |
| HEAD | f3596da |
| stars/forks | 47 / 10 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2026-04-17T04:24:28Z |
| trendScore / priorityScore | 80 / 245 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / tool use | 500 | README.md, pyproject.toml, docs/result_format.md |
| Local LLM / on-device inference | 80 | README.md, pyproject.toml, config/opensource_vllm.yaml |
| Korean language / Korea domain | 53 | README.md, config/base_config/eval_config.yaml, data/EN/multiagent_cards/entertainment_agent.json |
| Security / compliance | 19 | README.md, src/evaluation.py, data/EN/multiagent_cards/finance_agent.json |
| LLM wiki / memory / graph | 17 | README.md, integration/vllm.py, NOTICE.md |
| RAG / retrieval | 17 | README.md, config/base_config/multiagent_config.yaml, data/EN/multiagent_cards/entertainment_agent.json |
| Spec / doc-driven workflow | 4 | README.md, src/step_history_generator.py, data/EN/scenario_data/132.yaml |
| Frontend / developer experience | 3 | NOTICE.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 532 |
| manifests | 2 |
| docs | 5 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | OrchestrationBench |
| headings | OrchestrationBench / 🎯 Overview / 📁 Project Structure / Evaluation result / 🚀 Quick Start / Prerequisites / Installation / or with pip: pip install -e . / Note: scipy is required for workflow evaluation / Edit .env with your API keys |
| excerpt | OrchestrationBench A comprehensive bilingual Korean/English benchmark framework for evaluating Large Language Model LLM orchestration capabilities in multi domain scenarios. This benchmark evaluates how well LLMs can plan complex workflows and execute tools under realistic constraints across 17 representative domains with nearly 100 realistic virtual tools. 🎯 Overview The OrchestrationBench tests the ability of language models to Workflow based Planning Structure multi step processes and coordinate across multiple domains using DAG based evaluation Constraint aware Tool Execution Generate correct function calls with appropriate arguments while handling business constraints and rejection cas |


## 주요 파일

### Manifests

- README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- config/claude.yaml
- config/gemini.yaml


### Agent Instruction Files

- config/claude.yaml
- config/gemini.yaml


## 상위 디렉터리

| dir | count |
| --- | --- |
| data | 475 |
| src | 29 |
| config | 12 |
| integration | 6 |
| docs | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| .python-version | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| NOTICE.md | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .yaml | 452 |
| .py | 36 |
| .json | 35 |
| .md | 4 |
| [no-ext] | 3 |
| .example | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
