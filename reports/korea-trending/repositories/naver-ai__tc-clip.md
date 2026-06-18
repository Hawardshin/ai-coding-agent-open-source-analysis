# naver-ai/tc-clip

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/tc-clip |
| local path | sources/naver-ai__tc-clip |
| HEAD | 8728fe4 |
| stars/forks | 101 / 12 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2025-02-25T01:47:27Z |
| trendScore / priorityScore | 87 / 221 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 40 | docs/DATASETS.md, trainers/tc_clip_prompt_learner.py, clip/model.py |
| Korean language / Korea domain | 16 | README.md, trainers/tc_clip_prompt_learner.py, labels/labels_froster/kinetics_400_base_llm_labels.json |
| Spec / doc-driven workflow | 4 | docs/INSTALL.md |
| LLM wiki / memory / graph | 3 | utils/logger.py, utils/print_utils.py |
| AI agent / tool use | 2 | labels/labels_froster/kinetics_400_base_llm_labels.json, labels/labels_froster/kinetics_400_llm_labels.json |
| Security / compliance | 1 | datasets/rand_augment.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 176 |
| manifests | 2 |
| docs | 5 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Basic usage: |
| headings | Leveraging Temporal Contextualization for Video Action Recognition / Abstract / Updates / :rocket: Highlights / :exclamation: Motivation: insufficient token interactions in recent temporal modeling approaches / :sparkles: Temporally Contextualized CLIP (TC-CLIP) / :file_folder: Models / :hammer: Environments / Installation / Data preparation |
| excerpt | Leveraging Temporal Contextualization for Video Action Recognition ECCV 2024 Leveraging Temporal Contextualization for Video Action Recognition https //arxiv.org/abs/2404.09490 \ Minji Kim&dagger; https //byminji.github.io , Dongyoon Han https //sites.google.com/site/dyhan0920/ , Taekyung Kim https //scholar.google.co.kr/citations?user=u 9bdkwAAAAJ&hl=en , Bohyung Han https //cv.snu.ac.kr/index.php/~bhhan/ <br <sub &dagger;Work done during an internship at NAVER AI Lab, corresponding authors <br NAVER AI LAB https //naver career.gitbook.io/en/teams/clova cic/ai lab ! PWC https //img.shields.io/endpoint.svg?url=https //paperswithcode.com/badge/leveraging temporal contextualization for/zero sh |


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
| datasets_splits | 61 |
| labels | 33 |
| configs | 28 |
| scripts | 15 |
| clip | 10 |
| datasets | 6 |
| trainers | 5 |
| utils | 5 |
| docs | 4 |
| tome | 2 |
| engine.py | 1 |
| LICENSE | 1 |
| main.py | 1 |
| NOTICE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .txt | 62 |
| .py | 31 |
| .yaml | 28 |
| .csv | 20 |
| .sh | 14 |
| .json | 13 |
| .md | 5 |
| [no-ext] | 2 |
| .ipynb | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
