# naver-ai/eccv-caption

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/eccv-caption |
| local path | sources/naver-ai__eccv-caption |
| HEAD | 65ec1c4 |
| stars/forks | 56 / 2 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2024-03-01T12:15:03Z |
| trendScore / priorityScore | 78 / 182 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 20 | README.md, examples/clip_example_run.py, data_tools/coco_func.py |
| RAG / retrieval | 5 | README.md, eccv_caption/_metrics.py |
| Spec / doc-driven workflow | 2 | README.md |
| LLM wiki / memory / graph | 1 | data_tools/plausible_matching_func.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, example-rich, graphMemory, korea-signal, llm-wiki-memory, rag, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 24 |
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
| title | Extended COCO Validation (ECCV) Caption dataset (ECCV 2022) |
| headings | Extended COCO Validation (ECCV) Caption dataset (ECCV 2022) / Abstract / Dataset statistics / Updates / Getting Started / Installation / Requirements / Usage / Get i2t, t2i retrived items from your own model / i2t = {query_image_id: [sorted_caption_id_by_similarity]} |
| excerpt | Extended COCO Validation ECCV Caption dataset ECCV 2022 Official Python implementation of ECCV Caption Paper https //arxiv.org/abs/2204.03359 Sanghyuk Chun https //sanghyukchun.github.io/home/ , Wonjae Kim https //wonjae.kim/ , Song Park https //8uos.github.io/ , Minsuk Chang https //minsukchang.com/ , Seong Joon Oh https //coallaoh.github.io/ NAVER AI Lab https //naver career.gitbook.io/en/teams/clova cic ECCV Caption contains x8.47 positive images and x3.58 positive captions compared to the original COCO Caption. The positives are verified by machines five state of the art image text matching models and humans. This library provides an unified interface to measure various COCO Caption retr |


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
| eccv_caption | 10 |
| data_tools | 6 |
| .gitignore | 1 |
| examples | 1 |
| LICENSE | 1 |
| MANIFEST.in | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| setup.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 11 |
| .json | 6 |
| [no-ext] | 3 |
| .in | 1 |
| .md | 1 |
| .npy | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
