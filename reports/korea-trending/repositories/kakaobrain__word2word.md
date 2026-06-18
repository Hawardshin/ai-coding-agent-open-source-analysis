# kakaobrain/word2word

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/word2word |
| local path | sources/kakaobrain__word2word |
| HEAD | 7aa4809 |
| stars/forks | 370 / 55 |
| language | Python |
| license | Apache-2.0 |
| pushedAt | 2021-01-08T03:43:08Z |
| trendScore / priorityScore | 85 / 193 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 7 | README.md, word2word/methods.py, word2word/word2word.py |
| Korean language / Korea domain | 1 | google_grader.py |
| Spec / doc-driven workflow | 1 |  |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, korea-signal, rag, spec-driven |
| stacks | Python |
| capabilities | Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 14 |
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
| title | word2word |
| headings | word2word / Summary / Usage / out: ['pomme', 'pommes', 'pommier', 'tartes', 'fleurs'] / Supported Languages / Methodology / Building a Bilingual Lexicon on a Custom Parallel Corpus / custom parallel data: data/pubmed.en-fr.en, data/pubmed.en-fr.fr / ...building... / out: ['mitochondriale', 'mitochondriales', 'mitochondrial', |
| excerpt | ! image https //img.shields.io/pypi/v/word2word.svg https //pypi.org/project/word2word/ ! image https //img.shields.io/pypi/l/word2word.svg https //pypi.org/project/word2word/ ! image https //img.shields.io/pypi/pyversions/word2word.svg https //pypi.org/project/word2word/ ! image https //img.shields.io/badge/Say%20Thanks ! 1EAEDB.svg https //saythanks.io/to/kimdwkimdw word2word Easy to use word translations for 3,564 language pairs. This is the official code accompanying our LREC 2020 paper https //arxiv.org/abs/1911.12019 . Summary A large collection of freely & publicly available bilingual lexicons for 3,564 language pairs across 62 unique languages. Easy to use Python interface for access |


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
| word2word | 6 |
| .gitignore | 1 |
| google_grader.py | 1 |
| LICENSE | 1 |
| make.py | 1 |
| MANIFEST.in | 1 |
| README.md | 1 |
| requirements.txt | 1 |
| setup.py | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 8 |
| .txt | 2 |
| [no-ext] | 2 |
| .in | 1 |
| .md | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
