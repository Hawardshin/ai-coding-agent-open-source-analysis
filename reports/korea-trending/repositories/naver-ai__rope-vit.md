# naver-ai/rope-vit

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/rope-vit |
| local path | sources/naver-ai__rope-vit |
| HEAD | 48d8df5 |
| stars/forks | 466 / 14 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2025-10-29T07:32:21Z |
| trendScore / priorityScore | 105 / 256 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 55 | deit/README.md, README.md, SwinTransformer/README.md |
| Korean language / Korea domain | 35 | README.md, deit/main.py, models/swin_transformer_rope.py |
| LLM wiki / memory / graph | 18 | deit/main.py, deit/utils.py, SwinTransformer/config.py |
| Frontend / developer experience | 3 | SwinTransformer/utils_simmim.py |
| Security / compliance | 3 | README.md, deit/main.py, SwinTransformer/config.py |
| Spec / doc-driven workflow | 2 | SwinTransformer/get_started.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 133 |
| manifests | 5 |
| docs | 5 |
| tests | 1 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Rotary Position Embedding for Vision Transformer |
| headings | Rotary Position Embedding for Vision Transformer / Abstract / Updates / Getting Started / Performances / DeiT-III / Swin Transformer / Pre-trained weights / DeiT-III (400 epochs) / Swin Transformer (300 epochs) |
| excerpt | <div align="center" Rotary Position Embedding for Vision Transformer Byeongho Heo https //sites.google.com/view/byeongho heo/home , Song Park https //8uos.github.io/ , Dongyoon Han https //sites.google.com/site/dyhan0920/ , Sangdoo Yun https //sangdooyun.github.io/ <br NAVER AI LAB https //naver career.gitbook.io/en/teams/clova cic/ai lab ! Paper https //img.shields.io/badge/Paper arxiv green https //arxiv.org/abs/2403.13298 ! Paper https //img.shields.io/badge/Paper ECCV 2024 blue https //www.ecva.net/papers/eccv 2024/papers ECCV/html/1584 ECCV 2024 paper.php ! Paper https //img.shields.io/badge/Weights HuggingFace red https //huggingface.co/collections/naver ai/rope vit 670e367fa2d547b7053 |


## 주요 파일

### Manifests

- deit/README.md
- logs/README.md
- README.md
- SwinTransformer/README.md
- deit/requirements.txt


### Spec / Docs / Prompt Artifacts

- deit/requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| SwinTransformer | 84 |
| logs | 25 |
| deit | 16 |
| models | 2 |
| .gitignore | 1 |
| LICENSE_llama | 1 |
| LICENSE_rope-vit | 1 |
| NOTICE | 1 |
| README.md | 1 |
| self-attn | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .yaml | 52 |
| .py | 44 |
| .txt | 26 |
| .md | 5 |
| [no-ext] | 4 |
| .cpp | 1 |
| .cu | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
