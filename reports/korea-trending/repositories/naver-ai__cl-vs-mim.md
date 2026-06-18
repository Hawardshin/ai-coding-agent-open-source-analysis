# naver-ai/cl-vs-mim

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/cl-vs-mim |
| local path | sources/naver-ai__cl-vs-mim |
| HEAD | eafe516 |
| stars/forks | 116 / 9 |
| language | Jupyter Notebook |
| license | NOASSERTION |
| pushedAt | 2024-03-13T06:22:41Z |
| trendScore / priorityScore | 71 / 182 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 7 | models/moco.py, models/simmim.py, models/vit.py |
| Korean language / Korea domain | 5 | README.md |
| LLM wiki / memory / graph | 2 | models/simmim_config.py |
| Spec / doc-driven workflow | 2 | README.md |
| Security / compliance | 1 | models/simmim_config.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 12 |
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
| title | What Do Self-Supervised Vision Transformers Learn? |
| headings | What Do Self-Supervised Vision Transformers Learn? / How Do Self-Attentions Behave? / How Are Representations Transformed? / Which Components Play an Important Role? / Getting Started / Self-Attention Analysis / Representation Analysis / Citation / License |
| excerpt | What Do Self Supervised Vision Transformers Learn? arXiv https //arxiv.org/abs/2305.00729 , poster https //github.com/xxxnell/cl vs mim storage/blob/main/resources/cl vs mim iclr2023 poster.pdf , slide https //github.com/xxxnell/cl vs mim storage/blob/main/resources/cl vs mim talk.pdf Namuk Park https //www.namukpark.com/ <sup 1 </sup , Wonjae Kim https //wonjae.kim/ <sup 2</sup , Byeongho Heo https //sites.google.com/view/byeongho heo/home <sup 2</sup , Taekyung Kim https //scholar.google.es/citations?user=u 9bdkwAAAAJ <sup 2</sup , Sangdoo Yun https //sangdooyun.github.io/ <sup 2</sup <sup 1</sup <sub Prescient Design, Genentech</sub <sup 2</sup <sub NAVER AI LAB</sub <sup </sup <sub Works |


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
| models | 4 |
| configs | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| README.md | 1 |
| representation_analysis.ipynb | 1 |
| requirements.txt | 1 |
| self_attention_analysis.ipynb | 1 |
| utils.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 5 |
| .ipynb | 2 |
| [no-ext] | 2 |
| .md | 1 |
| .txt | 1 |
| .yaml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
