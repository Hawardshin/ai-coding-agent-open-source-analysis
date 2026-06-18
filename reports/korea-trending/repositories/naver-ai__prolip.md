# naver-ai/prolip

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/prolip |
| local path | sources/naver-ai__prolip |
| HEAD | 59f6324 |
| stars/forks | 57 / 5 |
| language | Jupyter Notebook |
| license | NOASSERTION |
| pushedAt | 2025-08-16T01:16:51Z |
| trendScore / priorityScore | 70 / 184 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 52 | README.md, src/analysis/README.md, src/prolip_train/zero_shot_unc.py |
| Korean language / Korea domain | 16 | README.md, src/analysis/eval_hcaps.py, src/analysis/unc_zeroshot_prompts.py |
| Spec / doc-driven workflow | 6 | setup.py |
| LLM wiki / memory / graph | 5 | src/prolip_train/train.py, src/prolip/clip_model.py, src/prolip/model.py |
| Frontend / developer experience | 2 | src/prolip/pos_embed.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 48 |
| manifests | 3 |
| docs | 2 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Probabilistic Language-Image Pre-Training (ProLIP) ICLR 2025 |
| headings | Probabilistic Language-Image Pre-Training (ProLIP) ICLR 2025 / Updates / Quick start / image: PIL.Image / texts: list of strings / How to cite / License |
| excerpt | Probabilistic Language Image Pre Training ProLIP ICLR 2025 ! arXiv https //img.shields.io/badge/ProLIP arXiv 2410.18857 b31b1b.svg https //arxiv.org/abs/2410.18857 ! arXiv 2 https //img.shields.io/badge/LongProLIP arXiv 2503.08048 b31b1b.svg https //arxiv.org/abs/2503.08048 ! model hub https //img.shields.io/badge/HuggingFace Hub blue.svg https //huggingface.co/collections/SanghyukChun/prolip 6712595dfc87fd8597350291 Official Python implementation of ProLIP Paper https //arxiv.org/abs/2410.18857 LongProLIP Paper https //arxiv.org/abs/2503.08048 Huggingface models https //huggingface.co/collections/SanghyukChun/prolip 6712595dfc87fd8597350291 Sanghyuk Chun https //sanghyukchun.github.io/home/ |


## 주요 파일

### Manifests

- README.md
- src/analysis/README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 39 |
| scripts | 3 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements-training.txt | 1 |
| requirements.txt | 1 |
| setup.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 32 |
| .json | 5 |
| .sh | 3 |
| [no-ext] | 3 |
| .md | 2 |
| .txt | 2 |
| .ipynb | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
