# naver/sqlova

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/sqlova |
| local path | sources/naver__sqlova |
| HEAD | fc68af6 |
| stars/forks | 648 / 167 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2020-07-29T06:02:43Z |
| trendScore / priorityScore | 92 / 226 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 26 | README.md, sqlova/model/nl2sql/wikisql_models.py, sqlova/utils/utils_wikisql.py |
| Korean language / Korea domain | 17 | README.md, sqlova/model/nl2sql/wikisql_models.py, sqlova/utils/utils_wikisql.py |
| LLM wiki / memory / graph | 12 | bert/tokenization.py, LICENSE.md |
| Security / compliance | 5 | README.md, bert/convert_tf_checkpoint_to_pytorch.py, bert/modeling.py |
| Spec / doc-driven workflow | 4 | README.md, bert/README_bert.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 41 |
| manifests | 2 |
| docs | 4 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | SQLova |
| headings | SQLova / Authors / Abstract / The model in a nutshell / Results (Updated at Jan 12, 2019) / Source code / License |
| excerpt | SQLova SQLova is a neural semantic parser translating natural language utterance to SQL query. The name is originated from the name of our department S earch & QLova Search & Clova https //clova.ai/ko/research/publications.html . Authors Wonseok Hwang mailto wonseok.hwang@navercorp.com , Jinyeong Yim mailto jinyeong.yim@navercorp.com , Seunghyun Park mailto seung.park@navercorp.com , and Minjoon Seo https //seominjoon.github.io . Affiliation Clova AI Research, NAVER Corp., Seongnam, Korea. The updated version of manuscript is available from arXiv https //arxiv.org/abs/1902.01069 . The manuscript is significantly re written to improve readability. The detailed description of the model and hum |


## 주요 파일

### Manifests

- human_eval/README.md
- README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| sqlova | 8 |
| bert | 7 |
| wikisql | 7 |
| human_eval | 2 |
| sqlnet | 2 |
| .gitignore | 1 |
| add_csv.py | 1 |
| add_question.py | 1 |
| annotate_ws.py | 1 |
| evaluate_ws.py | 1 |
| LICENSE.md | 1 |
| NOTICE | 1 |
| predict.py | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 26 |
| [no-ext] | 5 |
| .md | 4 |
| .sh | 3 |
| .ipynb | 2 |
| .tsv | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
