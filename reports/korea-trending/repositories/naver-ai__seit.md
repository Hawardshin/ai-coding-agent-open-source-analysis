# naver-ai/seit

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/seit |
| local path | sources/naver-ai__seit |
| HEAD | 39b7a4a |
| stars/forks | 56 / 6 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2024-08-12T08:38:13Z |
| trendScore / priorityScore | 81 / 199 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 24 | engine_mtm.py, layers.py, main_mtm_finetune.py |
| Korean language / Korea domain | 22 | README.md, evaluate_on_images.py, datasets.py |
| LLM wiki / memory / graph | 8 | evaluate_on_images.py, main_mtm_finetune.py, main_mtm_pretrain.py |
| Spec / doc-driven workflow | 5 | README_seit.md, README_seit++.md |
| Frontend / developer experience | 2 | util/pos_embed.py |
| Security / compliance | 1 | README_seit.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, documentParsing, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 29 |
| manifests | 2 |
| docs | 3 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Storage-efficient Vision Training |
| headings | Storage-efficient Vision Training / Citation / License |
| excerpt | Storage efficient Vision Training This repository contains PyTorch training code and pretrained models for the following papers SeiT ./README seit.md Storage efficient Vision Training, ICCV 2023. SeiT++ ./README seit++.md Masked Token Modeling Improves Storage efficient Training, ECCV 2024. If you find this repository useful, please consider giving a star ⭐ and cite the relevant papers. Citation License |


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
| util | 6 |
| .gitignore | 1 |
| datasets.py | 1 |
| engine_mtm.py | 1 |
| engine_seit.py | 1 |
| evaluate_on_images.py | 1 |
| hubconf.py | 1 |
| imagenet1k-class-to-id.json | 1 |
| layers.py | 1 |
| LICENSE | 1 |
| losses.py | 1 |
| main_mtm_finetune.py | 1 |
| main_mtm_pretrain.py | 1 |
| main_seit.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 20 |
| .md | 3 |
| [no-ext] | 3 |
| .ini | 1 |
| .json | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
