# naver-ai/muco

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/muco |
| local path | sources/naver-ai__muco |
| HEAD | 604da53 |
| stars/forks | 13 / 1 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2026-04-16T12:26:53Z |
| trendScore / priorityScore | 81 / 183 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 23 | README.md, eval_mmeb.py, src/data/eval_dataset/__init__.py |
| Korean language / Korea domain | 15 | README.md, src/arguments.py, src/loader.py |
| Security / compliance | 7 | README.md, src/model/vlm_backbone/qwen2_vl/__init__.py, src/model/vlm_backbone/qwen2_vl/configuration_qwen2_vl.py |
| LLM wiki / memory / graph | 5 | eval_configs/image.yaml, src/data/image.yaml, src/model/vlm_backbone/qwen2_vl/tokenization_qwen2.py |
| Spec / doc-driven workflow | 2 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 65 |
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
| title |  |
| headings | MuCo: Multi-turn Contrastive Learning for Multimodal Embedding Model (CVPR 2026) / 🚀 News / 📚 M3T dataset / 📂 MuCo Models / 🛠️ Installation / 🗂️ Dataset Preparation / 🔥 Training / 💯 Evaluation / Citation / License |
| excerpt | MuCo Multi turn Contrastive Learning for Multimodal Embedding Model CVPR 2026 ! arXiv https //img.shields.io/badge/arXiv%20papr 2602.06393 b31b1b.svg https //arxiv.org/abs/2602.06393 Welcom to the official Pytorch implementation of MuCo! Authors Geonmo Gu https //geonm.github.io/ <sup 1,3</sup , Byeongho Heo https //sites.google.com/view/byeongho heo/home <sup 1</sup , Jaemyung Yu https //sites.google.com/view/jaemyungyu <sup 1</sup , Jaehui Hwang https //j h hwang.github.io/ <sup 1</sup , Taekyung Kim https //scholar.google.co.kr/citations?user=u 9bdkwAAAAJ&hl=en <sup 1</sup , Sangmin Lee https //sites.google.com/view/pixel lab ai <sup 3</sup , HeeJae Jun<sup 2</sup , Yoohoon Kang<sup 2</su |


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
| src | 57 |
| ds_config.json | 1 |
| eval_configs | 1 |
| eval_mmeb.py | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| train.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 58 |
| .yaml | 2 |
| [no-ext] | 2 |
| .json | 1 |
| .md | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
