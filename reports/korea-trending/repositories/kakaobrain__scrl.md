# kakaobrain/scrl

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/scrl |
| local path | sources/kakaobrain__scrl |
| HEAD | 62730fb |
| stars/forks | 108 / 12 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2024-01-03T05:41:30Z |
| trendScore / priorityScore | 71 / 193 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Spec / doc-driven workflow | 5 | README.md, optim/optim.py |
| Korean language / Korea domain | 2 | README.md |
| RAG / retrieval | 2 | trainer/base.py |
| Infra / observability | 1 | README.md |
| LLM wiki / memory / graph | 1 | utils/parser.py |
| Local LLM / on-device inference | 1 | distributed/comm.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, documentParsing, evalObservability, graphMemory, infra-observability, korea-signal, llm-wiki-memory, local-llm, rag, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 47 |
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
| title | Spatially Consistent Representation Learning (CVPR'21) |
| headings | Spatially Consistent Representation Learning (CVPR'21) / Abstract / Requirements / Configuration / Model / Dataset / (option 1) set field `dataset.root` in the YAML configuration file. / (option 2) pass `--dataset/root` as an argument of the shell command. / How to Run / Overview |
| excerpt | ! KakaoBrain https //img.shields.io/badge/kakao brain ffcd00.svg http //kakaobrain.com/ ! pytorch https //img.shields.io/badge/pytorch 1.6.0 %2523ee4c2c.svg https //pytorch.org/ ! pytorch https //img.shields.io/badge/pytorch 1.7.1 %2523ee4c2c.svg https //pytorch.org/ Spatially Consistent Representation Learning CVPR'21 Official PyTorch implementation of Spatially Consistent Representation Learning https //arxiv.org/abs/2103.06122 SCRL . This repository also includes implementation of Bootstrap Your Own Latent Bhttps //arxiv.org/abs/2006.07733YOL BYOL , one of our baselines. Abstract SCRL is a self supervised learning method that allows you to obtain a spatially consistent dense representatio |


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
| utils | 10 |
| trainer | 6 |
| augment | 5 |
| config | 4 |
| data | 4 |
| distributed | 4 |
| models | 4 |
| optim | 4 |
| .gitignore | 1 |
| LICENSE | 1 |
| main.py | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 38 |
| .yaml | 4 |
| [no-ext] | 3 |
| .md | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
