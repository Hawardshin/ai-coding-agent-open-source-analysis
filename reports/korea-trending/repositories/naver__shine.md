# naver/shine

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/shine |
| local path | sources/naver__shine |
| HEAD | 825a6f7 |
| stars/forks | 101 / 9 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2024-07-24T19:04:30Z |
| trendScore / priorityScore | 70 / 193 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 11 | shine/build_inat_fsod_aggr_w_llm_hrchy.py, shine/build_miss_inat_fsod_aggr_w_llm_hrchy.py, shine/coco_llm_answers/raw_coco_gpt_hrchy_l1.json |
| Korean language / Korea domain | 5 | README.md, shine/coco_llm_answers/raw_coco_gpt_hrchy_l1.json |
| AI agent / tool use | 1 | shine/coco_llm_answers/raw_coco_gpt_hrchy_l1.json |
| LLM wiki / memory / graph | 1 | README.md |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 665 |
| manifests | 1 |
| docs | 2 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Clone this project repository under your workspace folder |
| headings | Installation / Clone this project repository under your workspace folder / Create conda environment and install the dependencies / Activate the working environment / Install Detectron2 under your workspace folder / (Please follow Detectron2 official instructions) / OvOD Models Preparation / Datasets Preparation / Run SHiNe on OvOD / Vanilla OvOD (baseline) |
| excerpt | <! PROJECT LOGO <p align="center" <h1 align="center" <img src="materials/teaser.png" width="256" </h1 <h1 align="center" SHiNe Semantic Hierarchy Nexus for Open vocabulary Object Detection</h1 <p align="center" <a href="https //oatmealliu.github.io/" <strong Mingxuan Liu</strong </a · <a href="https //tyler hayes.github.io/" <strong Tyler L. Hayes</strong </a · <a href="https //scholar.google.ca/citations?user=xf1T870AAAAJ&hl=en" <strong Elisa Ricci</strong </a · <a href="https //scholar.google.fr/citations?user=PXm1lPAAAAAJ&hl=fr" <strong Gabriela Csurka</strong </a · <a href="https //ricvolpi.github.io/" <strong Riccardo Volpi</strong </a </p <h2 align="center" CVPR 2024 ✨Highlight✨</h2 <h |


## 주요 파일

### Manifests

- README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| scripts_slurm | 121 |
| scripts_local | 113 |
| nexus | 86 |
| shine | 73 |
| codet | 42 |
| detic | 41 |
| vldet | 40 |
| shine_cls | 39 |
| configs_detic | 38 |
| scripts_build_nexus | 20 |
| datasets | 11 |
| scripts_plant_hrchy | 10 |
| configs_codet | 9 |
| configs_vldet | 8 |


## 확장자 분포

| ext | count |
| --- | --- |
| .sh | 269 |
| .py | 156 |
| .json | 96 |
| .npy | 68 |
| .yaml | 55 |
| .txt | 12 |
| [no-ext] | 3 |
| .md | 2 |
| .pth | 2 |
| .csv | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
