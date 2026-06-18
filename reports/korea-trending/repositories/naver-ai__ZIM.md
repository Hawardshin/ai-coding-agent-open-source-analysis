# naver-ai/ZIM

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/ZIM |
| local path | sources/naver-ai__ZIM |
| HEAD | 392e613 |
| stars/forks | 417 / 29 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2025-08-28T04:48:53Z |
| trendScore / priorityScore | 90 / 214 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 39 | README.md, eval/eval_loader.py, eval/evaluator.py |
| RAG / retrieval | 10 | zim_anything/automatic_mask_generator.py, zim_anything/predictor.py, zim_anything/modeling/zim.py |
| LLM wiki / memory / graph | 3 | zim_anything/automatic_mask_generator.py, zim_anything/utils/amg.py |
| Spec / doc-driven workflow | 2 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, example-rich, graphMemory, korea-signal, llm-wiki-memory, rag, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 30 |
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
| title | ZIM: Zero-Shot Image Matting for Anything |
| headings | ZIM: Zero-Shot Image Matting for Anything / Introduction / Updates / Installation / Demo / Getting Started / Dataset Preparation / 1) MicroMat-3K Dataset / Evaluation / How To Cite |
| excerpt | ZIM Zero Shot Image Matting for Anything Beomyoung Kim https //beomyoung kim.github.io/ , Chanyong Shin, Joonhyun Jeong https //bestdeveloper691.github.io/ , Hyungsik Jung, Se Yun Lee, Sewhan Chun, Dong Hyun Hwang https //hwangdonghyun.github.io/ , Joonsang Yu<br <sub NAVER Cloud, ImageVision</sub <br / ! Paper https //img.shields.io/badge/Paper arxiv red https //arxiv.org/pdf/2411.00626 ! Page https //img.shields.io/badge/Project page blue https //naver ai.github.io/ZIM ! 🤗 demo https //img.shields.io/badge/Hugging%20Face Demo FFD21E?logo=huggingface&logo https //huggingface.co/spaces/naver iv/ZIM Zero Shot Image Matting ! 🤗 Dataset https //img.shields.io/badge/Hugging%20Face%20Dataset FF |


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
| zim_anything | 13 |
| eval | 4 |
| script | 4 |
| demo | 2 |
| zim_config | 2 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| setup.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 24 |
| .sh | 2 |
| [no-ext] | 2 |
| .md | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
