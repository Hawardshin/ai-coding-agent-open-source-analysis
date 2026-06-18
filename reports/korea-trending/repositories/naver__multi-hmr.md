# naver/multi-hmr

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/multi-hmr |
| local path | sources/naver__multi-hmr |
| HEAD | 651fb41 |
| stars/forks | 412 / 34 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2026-03-03T17:22:15Z |
| trendScore / priorityScore | 94 / 236 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 38 | README.md, demo.py, app.py |
| RAG / retrieval | 19 | blocks/cross_attn_transformer.py, datasets/bedlam.py, model.py |
| LLM wiki / memory / graph | 4 | LICENSE.txt, loss.py |
| Spec / doc-driven workflow | 2 | README.md |
| AI agent / tool use | 1 | LICENSE.txt |
| Security / compliance | 1 | app.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, documentParsing, graphMemory, korea-signal, llm-wiki-memory, rag, security-compliance, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 32 |
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
| title | Can be slow |
| headings | News / Installation / Run Multi-HMR on images / Pre-trained models / Training Multi-HMR / Preprocessing BEDLAM / Checking annotations / (Optional) Creating jpg files to fast data-loading / Can be slow / Or parallelize |
| excerpt | <p align="center" <h1 align="center" Multi HMR Multi Person Whole Body Human Mesh Recovery in a Single Shot</h1 <p align="center" <a href="https //fabienbaradel.github.io/" Fabien Baradel </a , <a href="https //europe.naverlabs.com/people user naverlabs/matthieu armando/" Matthieu Armando</a , <a href="https //salmag98.github.io/" Salma Galaaoui</a , <a href="https //europe.naverlabs.com/people user naverlabs/Romain Br%C3%A9gier/" Romain Brégier</a , <br <a href=" ./ https //europe.naverlabs.com/people user naverlabs/Philippe Weinzaepfel/?asp highlight=Philippe+Weinzaepfel&p asid=9 " Philippe Weinzaepfel</a , <a href="https //europe.naverlabs.com/people user naverlabs/Gregory Rogez/" Grégory |


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
| utils | 9 |
| blocks | 5 |
| multi_hmr_anny | 4 |
| datasets | 3 |
| .gitignore | 1 |
| app.py | 1 |
| conda.yaml | 1 |
| demo.py | 1 |
| LICENSE.txt | 1 |
| loss.py | 1 |
| model.py | 1 |
| NOTICE.txt | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 26 |
| .txt | 3 |
| .md | 1 |
| .yaml | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
