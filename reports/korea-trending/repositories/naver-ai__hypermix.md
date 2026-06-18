# naver-ai/hypermix

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/hypermix |
| local path | sources/naver-ai__hypermix |
| HEAD | b36fa71 |
| stars/forks | 62 / 2 |
| language | Python |
| license | MIT |
| pushedAt | 2021-12-20T04:25:21Z |
| trendScore / priorityScore | 79 / 182 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 6 | models/tmix.py |
| Spec / doc-driven workflow | 3 | README.md, main.py |
| Korean language / Korea domain | 1 | README.md |
| LLM wiki / memory / graph | 1 | dataset.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework |


## 구조 요약

| key | value |
| --- | --- |
| files | 17 |
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
| title | HyperMix |
| headings | HyperMix / Getting Started / Installing Packages / Usage / Managing Seeds / OpenAI Key / Other Notes / Citation / License |
| excerpt | HyperMix Code for our paper GPT3Mix https //arxiv.org/abs/2104.08826 and conducting classification experiments using GPT 3 prompt based data augmentation. Getting Started Installing Packages The main depedencies can be installed via pip install r requirements.txt . Usage The main code is run through main.py . Check out help for full list of commands. python main.py help The code will automatically use the first GPU device, if detected. A typical command to run BERT base 10 times on the 1% subsample set of the SST 2 dataset and computing the average of all run is as follows. python main.py datasets sst2 \ train subsample 0.01f \ classifier transformers \ model name bert base uncased \ num tri |


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
| models | 4 |
| utils | 3 |
| openai_utils | 2 |
| .gitignore | 1 |
| augment.py | 1 |
| dataset.py | 1 |
| LICENSE | 1 |
| main.py | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 12 |
| [no-ext] | 3 |
| .md | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
