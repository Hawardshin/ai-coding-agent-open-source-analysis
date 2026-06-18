# line/promptttspp

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/line/promptttspp |
| local path | sources/line__promptttspp |
| HEAD | a78fe65 |
| stars/forks | 86 / 7 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2024-10-11T15:54:24Z |
| trendScore / priorityScore | 68 / 195 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 74 | egs/proposed/bin/conf/model/prompttts_mdn_v2_wo_erg_final_demo.yaml, egs/proposed/bin/conf/model/prompttts_mdn_v2_wo_erg_final.yaml, promptttspp/layers/__init__.py |
| Security / compliance | 48 | data_prep/add_style_prompt_tags.py, egs/proposed/bin/filter_eval.py, promptttspp/datasets/all_with_spk_prompt_norm.py |
| LLM wiki / memory / graph | 24 | promptttspp/modules/esp/transformer/decoder_layer.py, promptttspp/modules/esp/transformer/decoder.py, CODE_OF_CONDUCT.md |
| Spec / doc-driven workflow | 11 | promptttspp/modules/nnsvs/denoiser.py, promptttspp/modules/style_encoder.py, promptttspp/transforms/mel.py |
| Korean language / Korea domain | 3 | README.md, CODE_OF_CONDUCT.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | context-engineering, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 131 |
| manifests | 6 |
| docs | 5 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | PromptTTS++: Controlling Speaker Identity in Prompt-Based Text-to-Speech Using Natural Language Descriptions |
| headings | PromptTTS++: Controlling Speaker Identity in Prompt-Based Text-to-Speech Using Natural Language Descriptions / Installation / Conda / Pytorch / Directory structure / Demo / Training a model from scratch / Preprocess / Train / Note |
| excerpt | PromptTTS++ Controlling Speaker Identity in Prompt Based Text to Speech Using Natural Language Descriptions You can check the paper https //arxiv.org/abs/2309.08140 and huggingface demo https //huggingface.co/spaces/line corporation/promptttspp . Installation Conda Pytorch Once the conda env and pytorch is ready, you can install the rest of prompttts depenendices by Directory structure data prep Data preparation scripts metadata Metadata egs Code for experiments promptttspp PromptTTS++ Python packages Demo We provide pre trained models and demo on Hugging Face https //huggingface.co/spaces/line corporation/promptttspp . If you want to run the models locally, please follow the instructions be |


## 주요 파일

### Manifests

- promptttspp/modules/esp/README.md
- data_prep/README.md
- README.md
- data_prep/external/README.md
- pyproject.toml
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| promptttspp | 79 |
| data_prep | 20 |
| egs | 20 |
| metadata | 4 |
| .gitignore | 1 |
| app.py | 1 |
| CODE_OF_CONDUCT.md | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| setup.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 92 |
| .yaml | 14 |
| .txt | 9 |
| .md | 5 |
| .csv | 3 |
| .sh | 3 |
| [no-ext] | 3 |
| .toml | 1 |
| .tsv | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
