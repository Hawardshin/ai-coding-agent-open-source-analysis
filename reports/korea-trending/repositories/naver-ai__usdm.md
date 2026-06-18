# naver-ai/usdm

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/usdm |
| local path | sources/naver-ai__usdm |
| HEAD | 71f0911 |
| stars/forks | 95 / 4 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2024-12-03T03:56:14Z |
| trendScore / priorityScore | 68 / 208 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 49 | README.md, src/README.md, preprocess/fine-tuning/README.md |
| AI agent / tool use | 18 | src/inference_vllm.py, src/streamlit_demo.py, src/inference.py |
| Local LLM / on-device inference | 10 | README.md, src/inference_vllm.py, src/streamlit_demo.py |
| Spec / doc-driven workflow | 10 | src/decoder/voicebox/vocoder/README.md, src/decoder/voicebox/vocoder/meldataset.py |
| RAG / retrieval | 5 | src/model.py, src/decoder/scripts/train.py, src/decoder/voicebox/model/networks.py |
| LLM wiki / memory / graph | 3 | preprocess/pre-training/utils/multipack_sampler.py, src/model.py |
| Security / compliance | 2 | README.md, src/model.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, example-rich, graphMemory, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 56 |
| manifests | 6 |
| docs | 6 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Step 1: Create and activate a new conda environment |
| headings | Paralinguistics-Aware Speech-Empowered Large Language Models for Natural Conversation / Abstract / Overview / Checkpoints in 🤗 Hugging Face Hub / Demo and Inference / Step 1: Create and activate a new conda environment / Step 2: Install common dependencies / transformers-based (model.generate()) / vLLM-based / transformers-based (model.generate()) |
| excerpt | Paralinguistics Aware Speech Empowered Large Language Models for Natural Conversation NeurIPS 2024 Paper https //openreview.net/forum?id=NjewXJUDYq Code https //github.com/naver ai/usdm Project Page https //unifiedsdm.github.io/ 🤗 Hugging Face Hub https //huggingface.co/collections/naver ai/usdm 67219a13bb48ef6a2c2bbecb <br <br Authors &emsp;&emsp; Heeseung Kim https //gmltmd789.github.io <sup 1</sup , Soonshin Seo https //scholar.google.co.kr/citations?user=ZKeGcP8AAAAJ <sup 2</sup , Kyeongseok Jeong https //scholar.google.com/citations?user=9LtiWbwAAAAJ <sup 2</sup , Ohsung Kwon https //www.linkedin.com/in/ohsung kwon 78b091164 <sup 2</sup , Soyoon Kim https //www.linkedin.com/in/soyoon k |


## 주요 파일

### Manifests

- README.md
- src/README.md
- preprocess/fine-tuning/README.md
- preprocess/pre-training/README.md
- src/decoder/README.md
- src/decoder/voicebox/vocoder/README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 38 |
| preprocess | 8 |
| samples | 4 |
| .gitignore | 1 |
| configs | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| setup.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 35 |
| [no-ext] | 9 |
| .md | 6 |
| .wav | 4 |
| .json | 2 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
