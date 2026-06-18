# naver/multilingual-distilwhisper

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/multilingual-distilwhisper |
| local path | sources/naver__multilingual-distilwhisper |
| HEAD | 1e68c61 |
| stars/forks | 34 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-04-22T16:08:37Z |
| trendScore / priorityScore | 71 / 187 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| LLM wiki / memory / graph | 13 | DistilWhisper License.txt, model/DistilWhisper.py, model/train_utils.py |
| Security / compliance | 10 | model/lang_batch_sampler.py, DistilWhisper License.txt |
| RAG / retrieval | 9 | model/DistilWhisper.py, model/train_distilwhisper.py, model/train_lora.py |
| Korean language / Korea domain | 6 | README.md, model/inference_example.py, DistilWhisper License.txt |
| Spec / doc-driven workflow | 3 | README.md |
| Frontend / developer experience | 1 | lora_requirements.txt |
| Local LLM / on-device inference | 1 | model/DistillationTrainer.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, local-llm, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 26 |
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
| title | Multilingual DistilWhisper: Efficient Distillation of Multi-task Speech Models via Language-Specific Experts |
| headings | Multilingual DistilWhisper: Efficient Distillation of Multi-task Speech Models via Language-Specific Experts / Requirements / How to run training / How to run evaluation / Interative inference example / 1. load model and processor / 2. load language experts / 3. load streaming dataset and read first audio sample / 4. generate token ids and decode it into text / ["Els esports més coneguts són el futbol, el bàsquet, el voleibol, el waterpolo, l'esgrima, el rucbi, el ciclisme, hoquei sobre gel, hoquei sobre patins i l'automobilisme de Fórmula U."] |
| excerpt | Multilingual DistilWhisper Efficient Distillation of Multi task Speech Models via Language Specific Experts Multilingual Distilwhisper allows for better ASR performance in target languages by adding lightweight CLSR modules on top of whisper small. The pre trained weights for the paper https //arxiv.org/abs/2311.01070 experiments are available here https //huggingface.co/collections/naver/multilingual distilwhisper 6576ecae8d209fc6a767d9e7 . Requirements For training DistilWhisper, please install the requirements listed in full requirements.yaml For training the LoRA baseline, please install the requirements listed in lora requirements.yaml How to run training Scripts are available at Distil |


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
| model | 9 |
| train | 8 |
| data | 5 |
| DistilWhisper License.txt | 1 |
| full_requirements.yml | 1 |
| lora_requirements.txt | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 11 |
| .sh | 8 |
| .json | 3 |
| .txt | 2 |
| .md | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
