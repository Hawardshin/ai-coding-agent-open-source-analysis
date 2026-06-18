# kakaobrain/jejueo

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/jejueo |
| local path | sources/kakaobrain__jejueo |
| HEAD | 0ab5333 |
| stars/forks | 82 / 12 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2020-02-19T00:24:52Z |
| trendScore / priorityScore | 93 / 193 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 14 | README.md, translation/README.md, speech/data_load.py |
| RAG / retrieval | 3 | speech/hyperparams.py, speech/modules.py |
| Spec / doc-driven workflow | 2 | speech/README.md, translation/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | data-ml, korea-signal, rag, spec-driven |
| stacks | Python |
| capabilities |  |


## 구조 요약

| key | value |
| --- | --- |
| files | 17 |
| manifests | 3 |
| docs | 3 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | Jejueo |
| headings | Jejueo / Abstract / Datasets / Jejueo-Korean Machine Translation / Jejueo Speech Synthesis / Authors / Citation |
| excerpt | Jejueo This is the official repo for Jejueo Datasets for Machine Translation and Speech Synthesis https //arxiv.org/abs/1911.12071 . Abstract Jejueo was classified as critically endangered by UNESCO in 2010. Although diverse efforts to revitalize it have been made, there have been few computational approaches. Motivated by this, we construct two new Jejueo datasets Jejueo Interview Transcripts JIT and Jejueo Single Speaker Speech JSS . The JIT dataset is a parallel corpus containing 170k+ Jejueo Korean sentences, and the JSS dataset consists of 10k high quality audio files recorded by a native Jejueo speaker and a transcript file. Subsequently, we build neural systems of machine translation |


## 주요 파일

### Manifests

- README.md
- speech/README.md
- translation/README.md


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| speech | 11 |
| translation | 4 |
| LICENSE | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 10 |
| [no-ext] | 4 |
| .md | 3 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
