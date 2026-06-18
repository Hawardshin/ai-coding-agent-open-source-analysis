# kakaobrain/brain-agent

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/brain-agent |
| local path | sources/kakaobrain__brain-agent |
| HEAD | bee5549 |
| stars/forks | 93 / 15 |
| language | Python |
| license | MIT |
| pushedAt | 2024-01-04T02:28:20Z |
| trendScore / priorityScore | 87 / 218 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 35 | brain_agent/core/actor_worker.py, brain_agent/core/learner_worker.py, brain_agent/core/models/transformer.py |
| AI agent / tool use | 27 | README.md, configs/lstm_baseline_eval.yaml, configs/trxl_baseline_eval.yaml |
| RAG / retrieval | 12 | README.md, brain_agent/core/algos/aux_future_predict.py, brain_agent/core/models/causal_transformer.py |
| LLM wiki / memory / graph | 6 | brain_agent/core/actor_worker.py, brain_agent/core/learner_worker.py, brain_agent/core/shared_buffer.py |
| Korean language / Korea domain | 3 | README.md, brain_agent/core/models/transformer.py |
| Spec / doc-driven workflow | 2 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, graphMemory, korea-signal, llm-wiki-memory, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 55 |
| manifests | 2 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Brain Agent |
| headings | Brain Agent / Features / How to Install / Description of Codes / How to Run / Training / Evaluation / Setting Hyperparameters / Results for DMLAB30 / Distributed RL System Overview |
| excerpt | Brain Agent Brain Agent is a distributed agent learning system for large scale and multi task reinforcement learning, developed by Kakao Brain https //www.kakaobrain.com/ . Brain Agent is based on the V trace actor critic framework IMPALA https //arxiv.org/abs/1802.01561 and modifies Sample Factory https //github.com/alex petrenko/sample factory to utilize multiple GPUs and CPUs for a much higher throughput rate during training. Features 1. First publicly available implementations of reproducing SOTA results on DMLAB30 https //github.com/deepmind/lab . 2. Scalable & massive throughput. BrainAgent can produce and train 20B frames/week, or 34K fps, with 16 V100 GPUs, by scaling up high through |


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
| brain_agent | 38 |
| configs | 10 |
| .gitignore | 1 |
| dist_launch.py | 1 |
| eval.py | 1 |
| LICENSE | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| train.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 41 |
| .yaml | 10 |
| [no-ext] | 2 |
| .md | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
