# naver-ai/sommelier

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/sommelier |
| local path | sources/naver-ai__sommelier |
| HEAD | 4d94098 |
| stars/forks | 51 / 8 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2026-04-01T08:29:51Z |
| trendScore / priorityScore | 80 / 206 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 31 | podcast-pipeline/run_test_all.sh, podcast-pipeline/utils/audio_preprocessing.py, podcast-pipeline/utils/diarization.py |
| Korean language / Korea domain | 20 | README.md, podcast-pipeline/run_test_all.sh, podcast-pipeline/run_frontend.py |
| Spec / doc-driven workflow | 5 | README.md |
| Local LLM / on-device inference | 4 | podcast-pipeline/models/silero_vad.py, podcast-pipeline/utils/music_processing.py, podcast-pipeline/utils/separation.py |
| Infra / observability | 2 | podcast-pipeline/requirements.txt, podcast-pipeline/run_frontend.py |
| LLM wiki / memory / graph | 2 | podcast-pipeline/run_frontend.py |
| Frontend / developer experience | 1 | podcast-pipeline/requirements.txt |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, frontend-dx, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, rag, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 24 |
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
| title | Sommelier |
| headings | Sommelier / Features / Environment Setup / 1. Create a Conda Environment / 2. Install ffmpeg / 3. Install Python Dependencies / Step 1: Install PyTorch first / Step 2: Install all dependencies / Step 3: nemo-toolkit[all] may override the torch version. / Reinstall the correct versions after requirements.txt: |
| excerpt | Sommelier A comprehensive audio processing pipeline for speaker diarization, automatic speech recognition, background music removal, and more. Paper https //arxiv.org/pdf/2603.25750 Demo https //kyudan1.github.io/sommelier.github.io/ ! Sommelier Pipeline img/pipeline.png Features Speaker Diarization Speaker separation using NeMo Sortformer Automatic Speech Recognition ASR Speech recognition based on Whisper ASR MoE Mixture of Experts Ensemble of Whisper, Parakeet, and Canary models using ROVER voting Background Music Removal Music detection with PANNs and vocal extraction with Demucs Word level Timestamps Precise word level time alignment using WhisperX Environment Setup 1. Create a Conda En |


## 주요 파일

### Manifests

- README.md
- podcast-pipeline/requirements.txt


### Spec / Docs / Prompt Artifacts

- podcast-pipeline/requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| podcast-pipeline | 20 |
| LICENSE | 1 |
| LICENSE.CC-BY-4.0 | 1 |
| NOTICE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 17 |
| [no-ext] | 2 |
| .0 | 1 |
| .json | 1 |
| .md | 1 |
| .sh | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
