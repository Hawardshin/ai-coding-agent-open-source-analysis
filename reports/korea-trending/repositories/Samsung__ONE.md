# Samsung/ONE

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/ONE |
| local path | sources/Samsung__ONE |
| HEAD | de7f4736 |
| stars/forks | 571 / 183 |
| language | C++ |
| license | NOASSERTION |
| pushedAt | 2026-06-14T20:06:48Z |
| trendScore / priorityScore | 105 / 275 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 31 | circle-mlir/README.md, compiler/circle-execution-plan/README.md, compiler/kuma/README.md |
| Korean language / Korea domain | 13 | circle-mlir/README.md, compiler/pota-quantization-value-test/README.md, README.md |
| RAG / retrieval | 4 | compiler/circle-inspect/README.md, compiler/tfl-inspect/README.md, compiler/circle-operator/README.md |
| Spec / doc-driven workflow | 4 | compiler/dredd-rule-lib/README.md, compiler/locomotiv/README.md, compiler/onecc-docker/README.md |
| Local LLM / on-device inference | 3 | README.md |
| Frontend / developer experience | 2 | compiler/dredd-rule-lib/README.md, compiler/onnx-tools/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, local-llm, rag, sdk-api, spec-driven |
| stacks | Python, C/C++ |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 40 |
| docs | 306 |
| tests | 1649 |
| ci/ops | 24 |
| spec artifacts | 6 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | **ONE** (On-device Neural Engine) |
| headings | **ONE** (On-device Neural Engine) / Goal / Overview / Getting started / Feature Request / How to Contact |
| excerpt | ! GitHub release latest SemVer https //img.shields.io/github/v/release/Samsung/ONE https //github.com/Samsung/ONE/releases ! Documentation Status https //readthedocs.org/projects/nnfw/badge/?version=latest https //nnfw.readthedocs.io/en/latest/?badge=latest ! GitHub commit activity https //img.shields.io/github/commit activity/w/Samsung/ONE?color=light%20green ! Gitter https //img.shields.io/gitter/room/Samsung/ONE?color=orange https //gitter.im/Samsung/ONE ONE On device Neural Engine <img src='docs/images/logo original samsungblue cropped.png' alt='ONE Logo' width='400' / A high performance, on device neural network inference framework. Goal This project ONE aims at providing a high perform |


## 주요 파일

### Manifests

- compiler/circle-eval-diff/README.md
- circle-mlir/circle-mlir/tools-test/onnx2circle-rewrite-test/README.md
- circle-mlir/README.md
- compiler/_deprecated/moco-value-pbtxt-test/README.md
- compiler/_deprecated/tf2circle-conversion-test/README.md
- compiler/_deprecated/tf2circle-dredd-pb-test/README.md
- compiler/_deprecated/tf2circle-value-pbtxt-remote-test/README.md
- compiler/_deprecated/tf2tflite-dredd-pbtxt-test/README.md
- compiler/circle-inspect/README.md
- compiler/circle-interpreter-cffi-test/README.md
- compiler/circle-interpreter-test/README.md
- compiler/circle-operator-test/README.md
- compiler/circle-part-value-py-test/README.md
- compiler/circle-part-value-test/README.md
- compiler/circle-partitioner-test/README.md
- compiler/circle-quantizer-dredd-recipe-test/README.md
- compiler/circle-resizer-dredd-recipe-test/README.md
- compiler/circle2circle-dredd-recipe-test/README.md
- compiler/embedded-import-value-test/README.md
- compiler/fm-equalize-value-py-test/README.md


### Spec / Docs / Prompt Artifacts

- docs/requirements.txt
- nnpackage/spec/00_requirement.md
- nnpackage/spec/10_packaging_and_manifest.md
- nnpackage/spec/20_model_and_operators.md
- nnpackage/spec/30_custom_op.md
- docs/overview/roadmap.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| compiler | 6220 |
| onert-micro | 959 |
| circle-mlir | 492 |
| docs | 147 |
| runtime | 112 |
| nnpackage | 28 |
| .github | 21 |
| logo | 6 |
| .ahub | 3 |
| .clang-format | 1 |
| .ctags | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .mailmap | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .cpp | 3273 |
| .h | 2224 |
| .txt | 534 |
| .json | 334 |
| .py | 324 |
| .test | 259 |
| .md | 252 |
| .cmake | 110 |
| .cfg | 99 |
| [no-ext] | 85 |
| .mlir | 77 |
| .part | 76 |
| .lst | 54 |
| .rst | 50 |
| .sh | 44 |
| .me | 37 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
