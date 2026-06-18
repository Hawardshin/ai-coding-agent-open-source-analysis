# Samsung/TICO

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/Samsung/TICO |
| local path | sources/Samsung__TICO |
| HEAD | 5555056 |
| stars/forks | 15 / 29 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2026-06-16T08:32:48Z |
| trendScore / priorityScore | 83 / 261 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 77 | tico/quantization/examples/README.md, tico/quantization/algorithm/spinquant/README.md, tico/quantization/recipes/export/README.md |
| Spec / doc-driven workflow | 71 | README.md, test/performance/README.md, tico/quantization/examples/configs/README.md |
| Security / compliance | 66 | docs/design.md, docs/requirements.md, test/modules/op/embedding.py |
| Korean language / Korea domain | 59 | README.md, .github/workflows/check-pr.yaml, test/modules/op/embedding.py |
| LLM wiki / memory / graph | 8 | tico/quantization/algorithm/gptq/README.md, tico/quantization/recipes/data/README.md, docs/design.md |
| Infra / observability | 5 | tico/quantization/examples/README.md, tico/quantization/recipes/data/README.md, tico/quantization/recipes/debug/README.md |
| AI agent / tool use | 1 | tico/quantization/examples/configs/README.md |
| Local LLM / on-device inference | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, evalObservability, example-rich, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 889 |
| manifests | 40 |
| docs | 28 |
| tests | 394 |
| ci/ops | 4 |
| spec artifacts | 30 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | TICO |
| headings | TICO / Table of Contents / For Users / For Developers / For Users / Installation / Getting started / config.yaml / numpy.ndarray([2., 2., 2., 2.], dtype=float32) / Quantization |
| excerpt | TICO TICO Torch IR to Circle ONE https //github.com/Samsung/ONE is a python library for converting Pytorch modules into a circle model that is a lightweight and efficient representation in ONE designed for optimized on device neural network inference. Table of Contents For Users Installation installation Getting Started getting started From torch module from torch module From .pt2 from pt2 Running circle models directly in Python running circle models directly in python Quantization quantization For Developers Testing & Code Formatting testing code formatting Testing testing Code Formatting code formatting For Users Installation 0. Prerequisites Python 3.10 Optional one compiler 1.30.0 https |


## 주요 파일

### Manifests

- tico/quantization/evaluation/README.md
- tico/quantization/recipes/evaluation/README.md
- test/README.md
- README.md
- test/modules/net/README.md
- test/modules/op/README.md
- test/modules/README.md
- test/performance/README.md
- test/pt2_to_circle_test/README.md
- tico/quantization/examples/configs/README.md
- tico/quantization/examples/README.md
- tico/quantization/algorithm/cle/README.md
- tico/quantization/algorithm/gptq/README.md
- tico/quantization/algorithm/README.md
- tico/quantization/algorithm/smoothquant/README.md
- tico/quantization/algorithm/spinquant/README.md
- tico/quantization/README.md
- tico/quantization/recipes/adapters/README.md
- tico/quantization/recipes/data/README.md
- tico/quantization/recipes/debug/README.md


### Spec / Docs / Prompt Artifacts

- test/requirements.txt
- test/modules/model/Bert/requirements.txt
- test/modules/model/BitNet_b1_58/requirements.txt
- test/modules/model/DeepSeekR1DistillQwen1_5B/requirements.txt
- test/modules/model/EfficientFormerL1/requirements.txt
- test/modules/model/EfficientNetV2S/requirements.txt
- test/modules/model/Florence2/requirements.txt
- test/modules/model/Gemma3/requirements.txt
- test/modules/model/GPT2/requirements.txt
- test/modules/model/InceptionV3/requirements.txt
- test/modules/model/Llama/requirements.txt
- test/modules/model/LlamaAttentionWithKVCache/requirements.txt
- test/modules/model/LlamaDecoderLayerTRIV/requirements.txt
- test/modules/model/LlamaWithGQA/requirements.txt
- test/modules/model/LlamaWithKVCache/requirements.txt
- test/modules/model/Mamba/requirements.txt
- test/modules/model/MambaMixer/requirements.txt
- test/modules/model/MobileNetV2/requirements.txt
- test/modules/model/MobileNetV3S/requirements.txt
- test/modules/model/ResNet18/requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| tico | 457 |
| test | 393 |
| infra | 18 |
| .github | 7 |
| docs | 3 |
| .ahub | 1 |
| .coveragerc | 1 |
| .gitignore | 1 |
| .lintrunner.toml | 1 |
| .pylintrc | 1 |
| ccex | 1 |
| LICENSE | 1 |
| mypy.ini | 1 |
| pyproject.toml | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 785 |
| .txt | 35 |
| .md | 28 |
| .yaml | 19 |
| [no-ext] | 11 |
| .sh | 7 |
| .toml | 2 |
| .ini | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
