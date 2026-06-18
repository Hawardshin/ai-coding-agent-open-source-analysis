# kakaobrain/fast-autoaugment

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/fast-autoaugment |
| local path | sources/kakaobrain__fast-autoaugment |
| HEAD | 2424224 |
| stars/forks | 1604 / 197 |
| language | Python |
| license | MIT |
| pushedAt | 2021-06-16T17:01:28Z |
| trendScore / priorityScore | 97 / 214 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 5 | README.md, FastAutoAugment/data.py, FastAutoAugment/safe_shell_exec.py |
| LLM wiki / memory / graph | 3 | FastAutoAugment/networks/efficientnet_pytorch/condconv.py, FastAutoAugment/networks/efficientnet_pytorch/model.py |
| Spec / doc-driven workflow | 1 |  |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, documentParsing, evalObservability, graphMemory, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 51 |
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
| title | Fast AutoAugment **(Accepted at NeurIPS 2019)** |
| headings | Fast AutoAugment **(Accepted at NeurIPS 2019)** / Results / CIFAR-10 / 100 / ImageNet / SVHN Test / Run / Search a augmentation policy / Train a model with found policies / Citation / Contact for Issues |
| excerpt | Fast AutoAugment Accepted at NeurIPS 2019 Official Fast AutoAugment https //arxiv.org/abs/1905.00397 implementation in PyTorch. Fast AutoAugment learns augmentation policies using a more efficient search strategy based on density matching. Fast AutoAugment speeds up the search time by orders of magnitude while maintaining the comparable performances. <p align="center" <img src="etc/search.jpg" height=350 </p Results CIFAR 10 / 100 Search 3.5 GPU Hours 1428x faster than AutoAugment , WResNet 40x2 on Reduced CIFAR 10 Model CIFAR 10 Baseline Cutout AutoAugment Fast AutoAugment<br/ transfer/direct Wide ResNet 40 2 5.3 4.1 3.7 3.6 / 3.7 Download https //arena.kakaocdn.net/brainrepo/fast autoaugme |


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
| FastAutoAugment | 29 |
| confs | 16 |
| __init__.py | 1 |
| .gitignore | 1 |
| archive.py | 1 |
| LICENSE | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 31 |
| .yaml | 16 |
| [no-ext] | 2 |
| .md | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
