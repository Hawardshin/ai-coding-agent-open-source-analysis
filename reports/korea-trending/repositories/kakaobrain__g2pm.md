# kakaobrain/g2pm

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/g2pm |
| local path | sources/kakaobrain__g2pm |
| HEAD | 170526e |
| stars/forks | 365 / 73 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2021-12-24T14:52:55Z |
| trendScore / priorityScore | 85 / 181 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 4 | README.md, g2pM/g2pM.py |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, korea-signal, rag, spec-driven |
| stacks | Python |
| capabilities | Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 17 |
| manifests | 1 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | g2pM |
| headings | g2pM / Install / The CPP Dataset / Requirements / Usage / Model Size / Evaluation Result / Reference |
| excerpt | g2pM ! Release https //img.shields.io/badge/release v0.1.2.5 green https //pypi.org/project/g2pM/ ! Downloads https //pepy.tech/badge/g2pm https //pepy.tech/project/g2pm ! license https //img.shields.io/badge/license Apache%202.0 red https //github.com/kakaobrain/g2pM/blob/master/LICENSE This is the official repository of our paper A Neural Grapheme to Phoneme Conversion Package for MandarinChinese Based on a New Open Benchmark Dataset https //arxiv.org/abs/2004.03136 Interspeech 2020 . Install The CPP Dataset In data folder, there are train/dev/test .sent files and train/dev/test .lb files. In .sent file, each lines corresponds to one sentence and a special symbol ▁ U+2581 is added to the l |


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
| data | 6 |
| g2pM | 6 |
| .gitignore | 1 |
| LICENSE | 1 |
| MANIFEST.in | 1 |
| README.md | 1 |
| setup.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .pkl | 4 |
| .lb | 3 |
| .py | 3 |
| .sent | 3 |
| [no-ext] | 2 |
| .in | 1 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
