# naver-ai/pcme

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/pcme |
| local path | sources/naver-ai__pcme |
| HEAD | 4947684 |
| stars/forks | 141 / 19 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2024-03-01T12:15:43Z |
| trendScore / priorityScore | 91 / 221 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 39 | README.md, engine/eval_coco.py, engine/retrieval_coco.py |
| RAG / retrieval | 37 | README.md, engine/eval_coco.py, engine/eval_cub.py |
| Spec / doc-driven workflow | 2 | README.md |
| AI agent / tool use | 1 | README.md |
| LLM wiki / memory / graph | 1 | datasets/_transforms.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, evalObservability, graphMemory, korea-signal, llm-wiki-memory, localRuntime, rag, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Eval/observability, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 55 |
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
| title | Probabilistic Cross-Modal Embedding (PCME) CVPR 2021 |
| headings | Probabilistic Cross-Modal Embedding (PCME) CVPR 2021 / Updates / Installation / Dockerfile / Configuration / Dataset preparation / COCO Caption / CUB Caption / Evaluate pretrained models / COCO Caption |
| excerpt | Probabilistic Cross Modal Embedding PCME CVPR 2021 Official Pytorch implementation of PCME Paper https //arxiv.org/abs/2101.05068 Sanghyuk Chun https //sanghyukchun.github.io/home/ <sup 1</sup Seong Joon Oh https //seongjoonoh.com/ <sup 1</sup Rafael Sampaio de Rezende<sup 2</sup Yannis Kalantidis https //www.skamalas.com/ <sup 2</sup Diane Larlus<sup 2</sup <sup 1</sup <sub NAVER AI LAB https //naver career.gitbook.io/en/teams/clova cic </sub <br <sup 2</sup <sub NAVER LABS Europe https //europe.naverlabs.com/ </sub <a href="https //www.youtube.com/watch?v=J DaqSLEcVk" <img src="http //img.youtube.com/vi/J DaqSLEcVk/0.jpg" alt="VIDEO" width="700" border="10" / </a Updates Jan 2024 PCME++ ht |


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
| datasets | 20 |
| engine | 6 |
| models | 6 |
| config | 5 |
| utils | 3 |
| criterions | 2 |
| .gitignore | 1 |
| evaluate_cub.py | 1 |
| evaluate_pmrp_coco.py | 1 |
| evaluate_recall_coco.py | 1 |
| extract_rankings_coco.py | 1 |
| LICENSE | 1 |
| logger.py | 1 |
| NOTICE | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 35 |
| .txt | 10 |
| .npy | 4 |
| [no-ext] | 3 |
| .yaml | 2 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
