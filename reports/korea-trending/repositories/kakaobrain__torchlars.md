# kakaobrain/torchlars

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/torchlars |
| local path | sources/kakaobrain__torchlars |
| HEAD | 3b3d7e9 |
| stars/forks | 353 / 29 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2020-02-21T16:30:27Z |
| trendScore / priorityScore | 83 / 181 |


## 한줄 해석

- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 3 | README.md, setup.py |
| Spec / doc-driven workflow | 2 | torchlars/lars.py |
| Security / compliance | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, korea-signal, security-compliance, spec-driven |
| stacks | Python, C/C++ |
| capabilities | Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 14 |
| manifests | 1 |
| docs | 1 |
| tests | 3 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | torchlars |
| headings | torchlars / What is LARS? / Usage / Benchmarking / ResNet-50 on ImageNet classification / Authors and Licensing / Citation |
| excerpt | torchlars ! PyPI https //img.shields.io/pypi/v/torchlars.svg https //pypi.org/project/torchlars ! Build Status https //travis ci.org/kakaobrain/torchlars.svg?branch=master https //travis ci.org/kakaobrain/torchlars A LARS https //arxiv.org/abs/1708.03888 implementation in PyTorch. What is LARS? LARS Layer wise Adaptive Rate Scaling is an optimization algorithm designed for large batch training published by You, Gitman, and Ginsburg, which calculates the local learning rate per layer at each optimization step. According to the paper, when training ResNet 50 on ImageNet ILSVRC 2016 classification task with LARS, the learning curve and the best top 1 accuracy stay similar to that of the baselin |


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
| torchlars | 5 |
| tests | 3 |
| .travis.yml | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| setup.cfg | 1 |
| setup.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 7 |
| [no-ext] | 2 |
| .cc | 1 |
| .cfg | 1 |
| .cu | 1 |
| .md | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
