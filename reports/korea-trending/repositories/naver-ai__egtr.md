# naver-ai/egtr

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/egtr |
| local path | sources/naver-ai__egtr |
| HEAD | 7f87450 |
| stars/forks | 148 / 23 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2024-06-25T07:28:41Z |
| trendScore / priorityScore | 75 / 198 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 17 | README.md, lib/evaluation/sg_eval.py, data/open_image.py |
| RAG / retrieval | 6 | model/egtr.py |
| Korean language / Korea domain | 5 | README.md, evaluate_egtr.py, model/egtr.py |
| Security / compliance | 4 | README.md, lib/evaluation/ap_eval_rel.py, model/egtr.py |
| Spec / doc-driven workflow | 3 | README.md, model/egtr.py |
| Infra / observability | 1 | util/misc.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 40 |
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
| title | EGTR: Extracting Graph from Transformer for Scene Graph Generation [CVPR 2024 Best paper award candidate] |
| headings | EGTR: Extracting Graph from Transformer for Scene Graph Generation [CVPR 2024 Best paper award candidate] / Architecture / Abstract / Updates / Usage / Install dependencies / Download dataset / Prepare pre-trained object detector / Pre-train DETR (using 8 V100 gpus) / Model train |
| excerpt | <div align="center" EGTR Extracting Graph from Transformer for Scene Graph Generation CVPR 2024 Best paper award candidate ! Paper https //img.shields.io/badge/Paper arxiv.2404.02072 green https //arxiv.org/abs/2404.02072 ! CVPR https //img.shields.io/badge/CVPR 2024 steelblue https //openaccess.thecvf.com/content/CVPR2024/html/Im EGTR Extracting Graph from Transformer for Scene Graph Generation CVPR 2024 paper.html ! Poster https //img.shields.io/badge/Poster Image blue https //cvpr.thecvf.com/media/PosterPDFs/CVPR%202024/31166.png?t=1719244488.0932813 ! Oral https //img.shields.io/badge/Oral Slides orange https //cvpr.thecvf.com/media/cvpr 2024/Slides/32054 UhZdVUe.pdf ! Youtube https //im |


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
| model | 14 |
| lib | 12 |
| data | 3 |
| util | 3 |
| .gitignore | 1 |
| evaluate_egtr.py | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| pretrain_detr.py | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| train_egtr.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 24 |
| .h | 3 |
| [no-ext] | 3 |
| .cpp | 2 |
| .cuh | 2 |
| .c | 1 |
| .cu | 1 |
| .md | 1 |
| .pyx | 1 |
| .sh | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
