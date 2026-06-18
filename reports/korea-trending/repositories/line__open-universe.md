# line/open-universe

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/open-universe |
| local path | sources/line__open-universe |
| HEAD | 939dd3c |
| stars/forks | 115 / 15 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2024-08-29T01:05:40Z |
| trendScore / priorityScore | 72 / 204 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 51 | open_universe/bin/eval_metrics.py, open_universe/metrics/eval.py, CODE_OF_CONDUCT.md |
| Spec / doc-driven workflow | 40 | open_universe/metrics/plcmos/README.md, pyproject.toml, open_universe/layers/dyn_range_comp.py |
| LLM wiki / memory / graph | 16 | CODE_OF_CONDUCT.md, NOTICE.md, open_universe/metrics/lsd.py |
| RAG / retrieval | 7 | open_universe/lora/utils.py, open_universe/losses/phoneme_loss.py, open_universe/metrics/lps.py |
| Korean language / Korea domain | 4 | CODE_OF_CONDUCT.md, CONTRIBUTING.md |
| Infra / observability | 2 | open_universe/networks/enhancement/base.py, open_universe/networks/universe/universe.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 93 |
| manifests | 5 |
| docs | 6 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | open-universe |
| headings | open-universe / Quick Start / Show me how to enhance some files! / use GPU if available / load some speech file for enhancement / load enhancement model (from checkpoint file or HF repo) / we can check the sampling frequency / I want to train a model / (optional) prepare the data / train the model (UNIVERSE++, Voicebank-DEMAND, 16 kHz) |
| excerpt | open universe This repository contains the code for the UNIVERSE https //arxiv.org/abs/2206.03065 and UNIVERSE++ https //arxiv.org/abs/2406.12194 universal speech enhancement models. Audio samples of the models on various test sets are available here https //fakufaku.github.io/interspeech2024 universepp samples/ . Quick Start Setup the environment with conda. Show me how to enhance some files! That should be easy. Here's how to do it This will pull the model from huggingface and enhance all the wav files in input/folder . The API can be called from Python as follows. I want to train a model You can easily train a toy model on Voicebank DEMAND https //datashare.ed.ac.uk/handle/10283/2791 as f |


## 주요 파일

### Manifests

- README.md
- open_universe/metrics/dnsmos/README.md
- open_universe/metrics/plcmos/README.md
- pyproject.toml
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| open_universe | 67 |
| config | 13 |
| .flake8 | 1 |
| .gitignore | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| data | 1 |
| environment.yaml | 1 |
| LICENSE | 1 |
| NOTICE.md | 1 |
| pyproject.toml | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| setup.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 57 |
| .yaml | 14 |
| .onnx | 9 |
| .md | 6 |
| [no-ext] | 4 |
| .sh | 1 |
| .toml | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
