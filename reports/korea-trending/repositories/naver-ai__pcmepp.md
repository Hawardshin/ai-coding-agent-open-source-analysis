# naver-ai/pcmepp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/pcmepp |
| local path | sources/naver-ai__pcmepp |
| HEAD | 8829c0d |
| stars/forks | 63 / 2 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2024-05-26T02:40:38Z |
| trendScore / priorityScore | 79 / 187 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 32 | README.md, hf_models/hf_clip.py, hf_models/transformer.py |
| Korean language / Korea domain | 23 | README.md, pcmepp/evaluation.py, hf_example.py |
| LLM wiki / memory / graph | 7 | hf_models/hf_clip.py, hf_models/transformer.py, configs/others/vse_infty.yaml |
| Spec / doc-driven workflow | 2 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 42 |
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
| title | Improved Probabilistic Image-Text Representations (PCME++) (ICLR 2024) |
| headings | Improved Probabilistic Image-Text Representations (PCME++) (ICLR 2024) / Updates / Installation / Dataset preparation / Quick start / PCME++ ViT-B/32 backbone / PCME++ ViT-B/16 backbone / PCME++ ViT-L/14 backbone / PCME++ ViT-B/32 backbone with noise ratio 20% / PCME++ ViT-B/32 backbone with noise ratio 50% |
| excerpt | Improved Probabilistic Image Text Representations PCME++ ICLR 2024 Official Python implementation of PCME++ Paper https //arxiv.org/abs/2305.18171 Project page https //naver ai.github.io/pcmepp/ Sanghyuk Chun https //sanghyukchun.github.io/home/ This codebase is built upon the following repositories https //github.com/woodfrog/vse infty https //github.com/naver ai/pcme https //github.com/openai/CLIP Updates 08 Apr, 2024 HuggingFace model for ImageNet zero shot is released. See hf example.py https //github.com/naver ai/pcmepp/blob/main/hf example.py for more details 07 Aug, 2023 Code is released! Installation Please check the library version before you run the code Or, simply run pip install |


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
| pcmepp | 25 |
| configs | 5 |
| hf_models | 4 |
| config.py | 1 |
| hf_example.py | 1 |
| LICENSE | 1 |
| logger.py | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| train.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 33 |
| .yaml | 5 |
| [no-ext] | 2 |
| .md | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
