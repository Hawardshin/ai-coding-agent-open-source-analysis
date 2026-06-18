# kakaobrain/bassl

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/bassl |
| local path | sources/kakaobrain__bassl |
| HEAD | 0651dd6 |
| stars/forks | 143 / 20 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2024-01-03T06:11:15Z |
| trendScore / priorityScore | 75 / 187 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 19 | bassl/model/crn/trn.py, bassl/pretrain/loss/pretext_task.py, bassl/pretrain/loss/pretrain_loss.py |
| Korean language / Korea domain | 2 | README.md |
| Spec / doc-driven workflow | 2 | README.md |
| LLM wiki / memory / graph | 1 | bassl/finetune/utils/main_utils.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 56 |
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
| title | BaSSL |
| headings | BaSSL / 1. Environmental Setup / (optional) following installation of pillow-simd sometimes brings faster data loading. / 2. Prepare Data / download movienet data / <path-to-root>/bassl/data / 3. Train (Pre-training and Fine-tuning) / 3.1. Pre-training / 3.2. Fine-tuning / for fine-tuning BaSSL (10 epoch) |
| excerpt | ! KakaoBrain https //img.shields.io/badge/kakao brain ffcd00.svg http //kakaobrain.com/ ! pytorch https //img.shields.io/badge/pytorch 1.7.1 %2523ee4c2c.svg https //pytorch.org/ ! pytorch lightning https //img.shields.io/badge/lightning 1.3.8 brightgreen https //www.pytorchlightning.ai/ BaSSL This is an official PyTorch Implementation of Boundary aware Self supervised Learning for Video Scene Segmentation BaSSL arxiv https //arxiv.org/abs/2201.05277 demo in modelscope https //modelscope.cn/models/damo/cv resnet50 bert video scene segmentation movienet/summary The method is a self supervised learning algorithm that learns a model to capture contextual transition across boundaries during the p |


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
| bassl | 45 |
| scripts | 8 |
| LICENSE | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 37 |
| .sh | 8 |
| .yaml | 7 |
| .json | 1 |
| .md | 1 |
| .txt | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
