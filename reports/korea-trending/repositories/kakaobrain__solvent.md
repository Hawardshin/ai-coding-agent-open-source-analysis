# kakaobrain/solvent

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/solvent |
| local path | sources/kakaobrain__solvent |
| HEAD | 7ff81c4 |
| stars/forks | 74 / 10 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2024-03-07T00:56:37Z |
| trendScore / priorityScore | 68 / 192 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 78 | solvent/layers/msa.py, solvent/layers/outer_product_mean.py, solvent/layers/pair_transition.py |
| Security / compliance | 65 | solvent/evaluation/antibody_evaluation.py, solvent/evaluation/evaluator.py, solvent/evaluation/protein_evaluation.py |
| Korean language / Korea domain | 49 | README.md, solvent/evaluation/antibody_evaluation.py, solvent/evaluation/protein_evaluation.py |
| LLM wiki / memory / graph | 35 | README.md, solvent/data/common.py, solvent/data/mmcif_parsing.py |
| Spec / doc-driven workflow | 1 | INSTALL.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, example-rich, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven, vectorSearch |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 157 |
| manifests | 3 |
| docs | 4 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Solvent |
| headings | Solvent / Installation / Data preparation / Download pretrained language models / Use cases / initial training / finetuning from initially trained model / e.g. 16 batch with 2 machines(8GPU) / (machine 0) / (machine 1) |
| excerpt | Solvent Solvent is a library that provides protein folding algorithms. It supports single sequence based protein folding including ESMFold, OmegaFold, and IgFold. Researchers can train and evaluate each model with same conditions and design new model variant by combining modules. <div align="center" <figure <img alt="" src="./assets/meta arch.png" width=900 </figure </div Installation See installation instructions INSTALL.md Data preparation See data preparation datasets/README.md Download pretrained language models See download pretrained PLMs pretrained model/README.md Use cases Training ESMFold on single GPU Training models using DDP Evaluation on trained model Inference from fasta Refere |


## 주요 파일

### Manifests

- datasets/README.md
- pretrained_model/README.md
- README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| solvent | 92 |
| configs | 37 |
| datasets | 9 |
| tools | 8 |
| demo | 2 |
| .gitignore | 1 |
| environment.yml | 1 |
| INSTALL.md | 1 |
| LICENCE | 1 |
| NOTICE | 1 |
| pretrained_model | 1 |
| README.md | 1 |
| setup.py | 1 |
| train_net.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 102 |
| .yaml | 37 |
| .md | 4 |
| .txt | 4 |
| [no-ext] | 3 |
| .cpp | 2 |
| .sh | 2 |
| .cu | 1 |
| .h | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
