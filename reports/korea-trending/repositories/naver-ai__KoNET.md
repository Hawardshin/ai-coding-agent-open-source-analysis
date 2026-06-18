# naver-ai/KoNET

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver-ai/KoNET |
| local path | sources/naver-ai__KoNET |
| HEAD | 23df8c6 |
| stars/forks | 26 / 1 |
| language | Python |
| license | AGPL-3.0 |
| pushedAt | 2025-05-15T00:56:01Z |
| trendScore / priorityScore | 80 / 188 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 9 | README.md, src/evaluator.py, src/generator.py |
| RAG / retrieval | 2 | src/generator.py |
| Spec / doc-driven workflow | 2 | README.md |
| AI agent / tool use | 1 | src/generator.py |
| LLM wiki / memory / graph | 1 | src/generator.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, documentParsing, evalObservability, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 15 |
| manifests | 2 |
| docs | 1 |
| tests | 1 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | KoNET: Korean National Education Test |
| headings | KoNET: Korean National Education Test / Introduction / Software Installation / KoNET Generation Guide / KoNET Evaluation Guide / How to Cite / License |
| excerpt | <div align="center" KoNET Korean National Education Test ! Paper https //img.shields.io/badge/Paper arxiv.2502.15422 orange https //arxiv.org/abs/2502.15422 ! Conference https //img.shields.io/badge/NAACL 2025 red Official Implementation of KoNET Paper https //arxiv.org/abs/2502.15422 Poster https //drive.google.com/file/d/1OhLqHHkotRZ sX7m Q0xnSuezvRSw S3/view?usp=drive link Slide https //drive.google.com/file/d/1JL4K90b5hJoOX3VmiP8c1A7k6gtXAC X/view?usp=drive link </div Introduction KoNET , Ko rean N ational E ducation T est, a new benchmark designed to evaluate Multimodal Generative AI Systems using Korean national educational tests. KoNET consists of four levels of exams, corresponding t |


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
| src | 9 |
| .gitignore | 1 |
| COPYING | 1 |
| Notebook.ipynb | 1 |
| NOTICE | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .json | 7 |
| [no-ext] | 3 |
| .py | 2 |
| .ipynb | 1 |
| .md | 1 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
