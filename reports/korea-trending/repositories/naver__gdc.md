# naver/gdc

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/gdc |
| local path | sources/naver__gdc |
| HEAD | a59c5b7 |
| stars/forks | 118 / 20 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2022-12-07T17:29:32Z |
| trendScore / priorityScore | 73 / 224 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 171 | dpg/README.md, cdpg/run.py, dpg/examples/run-distributional.py |
| Korean language / Korea domain | 38 | dpg/README.md, dpg/examples/run-distributional.py, dpg/examples/run.py |
| LLM wiki / memory / graph | 25 | LICENSE-APACHE-2.0.txt, LICENSE-CC-BY-NC-SA-4.0.md, dpg/gdc/gdc.py |
| Spec / doc-driven workflow | 12 | cdpg/README.md, dpg/README.md, cdpg/requirements.txt |
| RAG / retrieval | 6 | dpg/gdc/gdc/gpt2tunediscrim.py, dpg/gdc/gpt2tunediscrim.py, rm_vs_dm/gdc/gdc/gpt2tunediscrim.py |
| Infra / observability | 2 | cdpg/README.md, cdpg/requirements.txt |
| Frontend / developer experience | 1 | cdpg/requirements.txt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, example-rich, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 157 |
| manifests | 7 |
| docs | 5 |
| tests | 2 |
| ci/ops | 0 |
| spec artifacts | 3 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Generative Distributional Control |
| headings | Generative Distributional Control |
| excerpt | Generative Distributional Control <img src="https //i.imgur.com/U3KV0RI.png" Generative Distributional Control GDC is a general framework for imposing constraints on samples of pretrained language models. The constraints can be either pointwise e.g. all samples must be non offensive or distributional e.g. a specified percentage of samples must mention females . This repo contains code accompanying the following three papers /dpg /dpg A Distributional Approach to Controlled Text Generation https //arxiv.org/abs/2012.11635 ICLR 2021 /cdpg /cdpg Controlling Conditional Language Models without Catastrophic Forgetting https //arxiv.org/abs/2112.00791 ICML 2022 /rm vs dm /rm vs dm On Reinforcement |


## 주요 파일

### Manifests

- cdpg/README.md
- dpg/README.md
- README.md
- rm_vs_dm/README.md
- cdpg/requirements.txt
- dpg/requirements.txt
- rm_vs_dm/requirements.txt


### Spec / Docs / Prompt Artifacts

- cdpg/requirements.txt
- dpg/requirements.txt
- rm_vs_dm/requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| dpg | 80 |
| rm_vs_dm | 49 |
| cdpg | 23 |
| LICENSE | 1 |
| LICENSE-APACHE-2.0.txt | 1 |
| LICENSE-CC-BY-NC-SA-4.0.md | 1 |
| NOTICE.txt | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 50 |
| .txt | 47 |
| .json | 38 |
| .pt | 9 |
| .md | 5 |
| .csv | 4 |
| [no-ext] | 4 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
