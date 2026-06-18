# naver-ai/RapFlow-TTS

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/RapFlow-TTS |
| local path | sources/naver-ai__RapFlow-TTS |
| HEAD | 899e0ea |
| stars/forks | 55 / 6 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2025-07-16T07:12:31Z |
| trendScore / priorityScore | 71 / 213 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Security / compliance | 50 | README.md, filelists/LJSpeech/test.txt, resources/filelists/LJSpeech/test.txt |
| AI agent / tool use | 33 | filelists/LJSpeech/test.txt, resources/filelists/LJSpeech/test.txt, filelists/LJSpeech/cleaned_valid.txt |
| Spec / doc-driven workflow | 30 | README.md, filelists/LJSpeech/test.txt, hifigan/denoiser.py |
| RAG / retrieval | 12 | model/text_encoder.py, model/transformer.py, model/tts.py |
| Korean language / Korea domain | 11 | README.md, test.py, model/flow_matching.py |
| Infra / observability | 5 | model/tts.py, train_multi_adv.py, train_multi.py |
| LLM wiki / memory / graph | 3 | filelists/LJSpeech/test.txt, model/transformer.py, resources/filelists/LJSpeech/test.txt |
| Local LLM / on-device inference | 2 | train_multi_adv.py, train_multi.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, evalObservability, graphMemory, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 96 |
| manifests | 2 |
| docs | 1 |
| tests | 2 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | <img src="./img/mike.png" width="35px" align="center">RapFlow-TTS: Rapid High-Fidelity Text-to-Speech with Improved Consistency Flow Matching (Interspeech 2025) |
| headings | <img src="./img/mike.png" width="35px" align="center">RapFlow-TTS: Rapid High-Fidelity Text-to-Speech with Improved Consistency Flow Matching (Interspeech 2025) / Requirements & Installation / you can specify other latest torch versions (we used torch==1.11.0 with cuda 11.3) / Prepare datasets / Preprocess / Training / Total Stage / stage 1 / stage 2 (improved) / stage 3 (improved) |
| excerpt | <img src="./img/mike.png" width="35px" align="center" RapFlow TTS Rapid High Fidelity Text to Speech with Improved Consistency Flow Matching Interspeech 2025 This repository is the official implementation of <img src="./img/mike.png" width="20px" align="center" RapFlow TTS Rapid High Fidelity Text to Speech with Improved Consistency Flow Matching https //www.arxiv.org/abs/2506.16741 . In this repository, we provide steps for running RapFlow TTS . 🙏 We recommend you visit our demo site https //tts demo.github.io/rap.github.io/ . 🙏 RapFlow TTS is an ODE based TTS that can synthesize high quality speech with fewer steps using improved consistency flow matching. The overall architecture of Rap |


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
| bigvgan | 16 |
| model | 13 |
| filelists | 12 |
| config | 10 |
| preprocess | 10 |
| hifigan | 6 |
| resources | 4 |
| src | 4 |
| text | 4 |
| .gitignore | 1 |
| argument.py | 1 |
| download_ljspeech.sh | 1 |
| download_vctk_dataset.sh | 1 |
| get_mel_stats.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 45 |
| .txt | 16 |
| [no-ext] | 16 |
| .yaml | 10 |
| .sh | 4 |
| .json | 2 |
| .md | 1 |
| .pyx | 1 |
| .wav | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
