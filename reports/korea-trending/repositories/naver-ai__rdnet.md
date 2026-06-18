# naver-ai/rdnet

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/rdnet |
| local path | sources/naver-ai__rdnet |
| HEAD | 6739093 |
| stars/forks | 155 / 8 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2024-08-08T05:21:14Z |
| trendScore / priorityScore | 73 / 186 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 50 | detection/README.md, README.md, segmentation/README.md |
| Security / compliance | 9 | README.md, train.py, detection/configs/_base_/schedules/schedule_1x.py |
| LLM wiki / memory / graph | 7 | benchmark.py, segmentation/test.py, train.py |
| RAG / retrieval | 5 | resources/hfhub_model_cards/rdnet_base.nv_in1k.md, resources/hfhub_model_cards/rdnet_large.nv_in1k_ft_in1k_384.md, resources/hfhub_model_cards/rdnet_large.nv_in1k.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, graphMemory, korea-signal, llm-wiki-memory, rag, security-compliance |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 43 |
| manifests | 4 |
| docs | 9 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title |  |
| headings | Key Highlights: / Easy to use / Updates / Coming Soon / RDNet for Image Classification / Model Zoo / Training / Acknowledgement / Citation / License |
| excerpt | <div align="center" <h3 🎉🎉 Our paper has been accepted at ECCV 2024! Stay tuned for more updates !! 🎉🎉 </h3 <h2 <a href="https //arxiv.org/abs/2403.19588" DenseNets Reloaded Paradigm Shift Beyond ResNets and ViTs</a </h2 Donghyun Kim https //scholar.google.co.kr/citations?hl=en&user=EBC8BMAAAAAJ <sup 1 </sup , Byeongho Heo https //sites.google.com/view/byeongho heo/home <sup 2</sup , Dongyoon Han https //dongyoonhan.github.io/ <sup 2 </sup <sup 1</sup <a href="https //www.ncloud.com/" NAVER Cloud AI</a , <sup 2</sup <a href="https //naver career.gitbook.io/en/teams/clova cic/ai lab" NAVER AI Lab</a </div <p align="center" <a href="https //arxiv.org/abs/2403.19588" alt="arXiv" <img src="h |


## 주요 파일

### Manifests

- detection/README.md
- README.md
- segmentation/README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| detection | 13 |
| segmentation | 12 |
| resources | 5 |
| rdnet | 2 |
| train_configs | 2 |
| .gitignore | 1 |
| benchmark.py | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |
| train.py | 1 |
| TRAINING.md | 1 |
| validate.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 28 |
| .md | 9 |
| [no-ext] | 3 |
| .yaml | 2 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
