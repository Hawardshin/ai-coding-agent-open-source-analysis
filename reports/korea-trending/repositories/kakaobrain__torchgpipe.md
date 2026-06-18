# kakaobrain/torchgpipe

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/torchgpipe |
| local path | sources/kakaobrain__torchgpipe |
| HEAD | a1b4ee2 |
| stars/forks | 865 / 98 |
| language | Python |
| license | BSD-3-Clause |
| pushedAt | 2024-07-25T10:55:29Z |
| trendScore / priorityScore | 93 / 256 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 81 | benchmarks/amoebanetd-memory/README.md, benchmarks/resnet101-accuracy/README.md, benchmarks/unet-memory/README.md |
| Spec / doc-driven workflow | 18 | benchmarks/amoebanetd-memory/README.md, benchmarks/amoebanetd-speed/README.md, benchmarks/resnet101-accuracy/README.md |
| Security / compliance | 12 | tests/skip/test_inspect_skip_layout.py |
| Korean language / Korea domain | 11 | README.md, docs/conf.py, docs/gpipe.rst |
| RAG / retrieval | 8 | tests/test_deferred_batch_norm.py, tests/test_dependency.py, torchgpipe/microbatch.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, documentParsing, evalObservability, graphMemory, korea-signal, llm-wiki-memory, rag, sdk-api, security-compliance, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 154 |
| manifests | 17 |
| docs | 24 |
| tests | 24 |
| ci/ops | 0 |
| spec artifacts | 8 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | torchgpipe <img src="docs/_static/not-pipe.svg" height="20" /> |
| headings | torchgpipe <img src="docs/_static/not-pipe.svg" height="20" /> / What is GPipe? / Usage / Documentation / Benchmarking / ResNet-101 Accuracy Benchmark / U-Net (B, C) Memory Benchmark / U-Net (5, 64) Speed Benchmark / AmoebaNet-D (18, 256) Speed Benchmark / Notes |
| excerpt | torchgpipe <img src="docs/ static/not pipe.svg" height="20" / ! PyPI https //img.shields.io/pypi/v/torchgpipe.svg https //pypi.org/project/torchgpipe ! Build Status https //travis ci.org/kakaobrain/torchgpipe.svg?branch=master https //travis ci.org/kakaobrain/torchgpipe ! Coverage Status https //coveralls.io/repos/github/KakaoBrain/torchgpipe/badge.svg?branch=master https //coveralls.io/github/KakaoBrain/torchgpipe?branch=master ! Documentation Status https //readthedocs.org/projects/torchgpipe/badge/?version=latest https //torchgpipe.readthedocs.io/en/latest/?badge=latest ! Korean README https //img.shields.io/badge/readme korean blue.svg README.ko.md A GPipe https //arxiv.org/abs/1811.0696 |


## 주요 파일

### Manifests

- benchmarks/amoebanetd-memory/README.md
- benchmarks/amoebanetd-speed/README.md
- benchmarks/resnet101-accuracy/README.md
- benchmarks/resnet101-speed/README.md
- benchmarks/unet-memory/README.md
- benchmarks/unet-speed/README.md
- benchmarks/unet-timeline/README.md
- README.md
- docs/Makefile
- docs/requirements.txt
- benchmarks/amoebanetd-memory/requirements.txt
- benchmarks/amoebanetd-speed/requirements.txt
- benchmarks/resnet101-accuracy/requirements.txt
- benchmarks/resnet101-speed/requirements.txt
- benchmarks/unet-memory/requirements.txt
- benchmarks/unet-speed/requirements.txt
- benchmarks/unet-timeline/requirements.txt


### Spec / Docs / Prompt Artifacts

- docs/requirements.txt
- benchmarks/amoebanetd-memory/requirements.txt
- benchmarks/amoebanetd-speed/requirements.txt
- benchmarks/resnet101-accuracy/requirements.txt
- benchmarks/resnet101-speed/requirements.txt
- benchmarks/unet-memory/requirements.txt
- benchmarks/unet-speed/requirements.txt
- benchmarks/unet-timeline/requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| stubs | 51 |
| benchmarks | 31 |
| tests | 24 |
| torchgpipe | 23 |
| docs | 13 |
| .github | 1 |
| .gitignore | 1 |
| .readthedocs.yml | 1 |
| .travis.yml | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.ko.md | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 65 |
| .pyi | 51 |
| .md | 11 |
| .txt | 8 |
| .rst | 6 |
| [no-ext] | 4 |
| .svg | 3 |
| .typed | 2 |
| .yml | 2 |
| .bat | 1 |
| .cfg | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
