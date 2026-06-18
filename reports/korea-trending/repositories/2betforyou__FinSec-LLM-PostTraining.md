# 2betforyou/FinSec-LLM-PostTraining

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/2betforyou/FinSec-LLM-PostTraining |
| local path | sources/2betforyou__FinSec-LLM-PostTraining |
| HEAD | a8c9234 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-13T07:01:11Z |
| trendScore / priorityScore | 74 / 125 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 280 | src/graph_retrieval/README.md, README.md, requirements.txt |
| Security / compliance | 65 | README.md, docs/data_card.md, docs/experiment_notes.md |
| Korean language / Korea domain | 23 | README.md, docs/data_card.md, docs/experiment_notes.md |
| LLM wiki / memory / graph | 15 | README.md, src/graph_retrieval/build_graph.py, src/graph_retrieval/graph_build_crosslaw.py |
| Spec / doc-driven workflow | 6 | README.md, .github/pull_request_template.md, CONTRIBUTING.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, example-rich, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 42 |
| manifests | 3 |
| docs | 13 |
| tests | 1 |
| ci/ops | 0 |
| spec artifacts | 2 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | FinSec-LLM-PostTraining |
| headings | FinSec-LLM-PostTraining / Project Status / 1. Goal: What Problem Are We Tackling? / 2. Existing Works: How Do Recent Prior Works Tackle This? / 3. Main Challenge: What Do Recent Works Still Fail To Solve? / 4. Our Method: How Do We Solve The Main Challenge? / Why This Method Targets The Challenge / 5. Experimental Results: What Was Actually Built? / Repository Map / Quick Start |
| excerpt | FinSec LLM PostTraining RAG and QLoRA based supervised post training for Korean financial security and regulatory QA. Project Status This is an early stage open source research and engineering project. The public baseline includes reproducible scripts, small examples, documentation, an MIT license, contribution guidance, a security policy, and lightweight smoke tests. License MIT LICENSE Contribution guide CONTRIBUTING.md CONTRIBUTING.md Roadmap ROADMAP.md ROADMAP.md Security policy SECURITY.md SECURITY.md This repository is a research/portfolio project for Korean financial security QA. It focuses on a practical question How can we make an open source Korean LLM answer financial security and |


## 주요 파일

### Manifests

- src/graph_retrieval/README.md
- README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt
- ROADMAP.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 22 |
| .github | 4 |
| docs | 4 |
| configs | 2 |
| examples | 2 |
| .gitignore | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| ROADMAP.md | 1 |
| SECURITY.md | 1 |
| tests | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 22 |
| .md | 13 |
| .yaml | 2 |
| [no-ext] | 2 |
| .csv | 1 |
| .jsonl | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
