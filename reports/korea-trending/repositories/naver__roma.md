# naver/roma

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/roma |
| local path | sources/naver__roma |
| HEAD | b146419 |
| stars/forks | 638 / 24 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2026-02-11T12:56:50Z |
| trendScore / priorityScore | 97 / 232 |


## 한줄 해석

- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 45 | README.md, examples/mapping_benchmark.py, examples/special_procrustes_benchmark.py |
| LLM wiki / memory / graph | 14 | NOTICE_DOCUMENTATION/README - RoMa Documentation - Robotoslab Fonts.txt, roma/mappings.py, roma/utils.py |
| Spec / doc-driven workflow | 6 | NOTICE_DOCUMENTATION/README - RoMa Documentation - html5shiv.txt, NOTICE_DOCUMENTATION/README - RoMa Documentation - Inconsolata Fonts.txt, NOTICE_DOCUMENTATION/README - RoMa Documentation - Lato Fonts.txt |
| Security / compliance | 3 | NOTICE_DOCUMENTATION/README - RoMa Documentation - html5shiv.txt, NOTICE_DOCUMENTATION/README - RoMa Documentation - Robotoslab Fonts.txt |
| Infra / observability | 1 | docsource/source/index.rst |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, evalObservability, example-rich, graphMemory, infra-observability, korea-signal, llm-wiki-memory, security-compliance, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 57 |
| manifests | 4 |
| docs | 2 |
| tests | 8 |
| ci/ops | 1 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | *RoMa*: A lightweight library to deal with 3D rotations in PyTorch. |
| headings | *RoMa*: A lightweight library to deal with 3D rotations in PyTorch. / Documentation / Arbitrary numbers of batch dimensions are supported, for convenience. / Conversion between rotation representations / Regression of a rotation from an arbitrary input: / Special Procrustes orthonormalization of a 3x3 matrix / Conversion from a 6D representation / From the 10 coefficients of a 4x4 symmetric matrix / Metrics on the rotation space / Operations on quaternions |
| excerpt | RoMa A lightweight library to deal with 3D rotations in PyTorch. ! Documentation https //img.shields.io/badge/Documentation 33cb56 https //naver.github.io/roma/ ! PyPI version https //badge.fury.io/py/roma.svg https //badge.fury.io/py/roma ! ArXiv https //img.shields.io/badge/arXiv 2103.16317 33cb56 https //arxiv.org/abs/2103.16317 ! Unit tests https //github.com/naver/roma/actions/workflows/main.yml/badge.svg https //github.com/naver/roma/actions/workflows/main.yml ! Downloads https //static.pepy.tech/badge/roma https //pepy.tech/project/roma RoMa which stands for Rotation Manipulation provides differentiable mappings between 3D rotation representations, mappings from Euclidean to rotation |


## 주요 파일

### Manifests

- README.md
- docsource/Makefile
- pyproject.toml
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| examples | 16 |
| NOTICE_DOCUMENTATION | 9 |
| test | 8 |
| docsource | 7 |
| roma | 6 |
| __init__.py | 1 |
| .github | 1 |
| .gitignore | 1 |
| build_and_push_doc.sh | 1 |
| build_doc.sh | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 33 |
| .txt | 10 |
| [no-ext] | 4 |
| .svg | 3 |
| .sh | 2 |
| .bat | 1 |
| .md | 1 |
| .rst | 1 |
| .toml | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
