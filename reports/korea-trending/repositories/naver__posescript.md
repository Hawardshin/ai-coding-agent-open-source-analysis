# naver/posescript

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/posescript |
| local path | sources/naver__posescript |
| HEAD | 15c8958 |
| stars/forks | 203 / 17 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2025-02-13T12:19:03Z |
| trendScore / priorityScore | 77 / 219 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 147 | src/text2pose/retrieval_modifier/README.md, src/text2pose/retrieval/README.md, README.md |
| Korean language / Korea domain | 73 | src/text2pose/retrieval_modifier/demo_retrieval_modifier.py, src/text2pose/retrieval/demo_retrieval.py, src/text2pose/evaluate.py |
| LLM wiki / memory / graph | 49 | src/text2pose/posefix/README.md, src/text2pose/posescript/README.md, src/text2pose/demo.py |
| Spec / doc-driven workflow | 28 | README.md, src/text2pose/generative/script_generative.sh, src/text2pose/posefix/correcting.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 93 |
| manifests | 11 |
| docs | 11 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | 3D Human Poses from/with Natural Language. |
| headings | 3D Human Poses from/with Natural Language. / Setup / posescript vocab (needed to run the trained pose description generation model) / posefix vocab (needed to run the pose-based correctional text generation model) / posemix vocab / Explore datasets / Visualize results of trained models / Train & Evaluate models / Citation / License |
| excerpt | 3D Human Poses from/with Natural Language. This repository groups the official PyTorch implementations for the following papers "PoseScript 3D Human Poses from Natural Language" https //europe.naverlabs.com/research/computer vision/posescript/ , ECCV 2022 . See branch posescript for the previous original code version. "PoseFix Correcting 3D Human Poses with Natural Language" https //europe.naverlabs.com/research/computer vision/posefix/ , ICCV 2023 See branch posefix for the previous original code version of the automatic captioning pipelines. Improvements to the automatic captioning pipelines, proposed in PoseEmbroider towards a 3D, visual, semantic aware human pose representation https //e |


## 주요 파일

### Manifests

- src/text2pose/retrieval_modifier/README.md
- src/text2pose/retrieval/README.md
- README.md
- src/other_utils/README.md
- src/text2pose/generative_B/README.md
- src/text2pose/generative_caption/README.md
- src/text2pose/generative_modifier/README.md
- src/text2pose/generative/README.md
- src/text2pose/posefix/README.md
- src/text2pose/posescript/README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| src | 88 |
| LICENSE | 1 |
| pretrained_models.md | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| setup.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 71 |
| .md | 11 |
| .sh | 6 |
| .json | 2 |
| .txt | 2 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
