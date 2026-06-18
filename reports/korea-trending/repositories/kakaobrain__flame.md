# kakaobrain/flame

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/flame |
| local path | sources/kakaobrain__flame |
| HEAD | e36da3e |
| stars/forks | 118 / 7 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2024-01-03T06:08:40Z |
| trendScore / priorityScore | 71 / 182 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 24 | src/utils/eval_util.py, src/models/components/mclip.py, src/models/components/nn.py |
| Korean language / Korea domain | 3 | README.md, src/utils/eval_util.py |
| LLM wiki / memory / graph | 3 | configs/debug/default.yaml, src/models/components/text2motion_model.py, src/models/components/unet.py |
| Spec / doc-driven workflow | 2 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 72 |
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
| title | FLAME: Free-form Language-based Motion Synthesis & Editing |
| headings | FLAME: Free-form Language-based Motion Synthesis & Editing / Generated Samples / Environment / Prerequisites / Packages / Dataset / SMPL & DMPL Models / External Sources / Installation / Preprocessing |
| excerpt | FLAME Free form Language based Motion Synthesis & Editing Project Page https //kakaobrain.github.io/flame/ Paper https //arxiv.org/abs/2209.00349 Video https //youtu.be/LbPNGv0zrto Official Implementation of the paper FLAME Free form Language based Motion Synthesis & Editing AAAI'23 Generated Samples <img src="https //user images.githubusercontent.com/10102721/204811388 748bbe11 bb0f 489b a532 c668023c22b4.gif" width="640" height="360"/ Environment This project is tested on the following environment. Please install them on your running environment. Python 3.8 PyTorch https //pytorch.org/ 1.11 PyTorch3D https //pytorch3d.org/ =0.7.0 Prerequisites Packages You may need following packages to ru |


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
| src | 33 |
| configs | 24 |
| reference_motion_sample | 3 |
| scripts | 3 |
| .gitignore | 1 |
| edit_motion.py | 1 |
| LICENSE | 1 |
| prepare_reference_motion.py | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| t2m_sample.py | 1 |
| test.py | 1 |
| train.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 40 |
| .yaml | 24 |
| .json | 3 |
| [no-ext] | 2 |
| .md | 1 |
| .sh | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
