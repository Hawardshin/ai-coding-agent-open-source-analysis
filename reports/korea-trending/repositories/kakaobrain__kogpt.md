# kakaobrain/kogpt

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/kakaobrain/kogpt |
| local path | sources/kakaobrain__kogpt |
| HEAD | f49f59a |
| stars/forks | 1012 / 138 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2024-01-30T10:54:08Z |
| trendScore / priorityScore | 119 / 256 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 26 | README.md, huggingface/KoGPT6B-ryan1.5b/README.md, kogpt/__main__.py |
| LLM wiki / memory / graph | 4 | README.md, huggingface/KoGPT6B-ryan1.5b/README.md |
| Spec / doc-driven workflow | 3 | README.md, huggingface/KoGPT6B-ryan1.5b/README.md |
| RAG / retrieval | 2 | README.md, huggingface/KoGPT6B-ryan1.5b/README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 12 |
| manifests | 3 |
| docs | 3 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | KakaoBrain project KoGPT |
| headings | KakaoBrain project KoGPT / Model Descriptions / KoGPT6B-ryan1.5b / Hardware requirements / KoGPT6B-ryan1.5b / KoGPT6B-ryan1.5b-float16 / Usage / prompt / python / Experiments |
| excerpt | KakaoBrain project KoGPT ! KakaoBrain https //img.shields.io/badge/Kakao Brain ffcd00.svg http //kakaobrain.com/ ! Github kogpt https //img.shields.io/badge/Github kogpt 000000.svg https //github.com/kakaobrain/kogpt ! License Apache 2.0 https //img.shields.io/badge/License Apache 2.0 blue.svg https //opensource.org/licenses/Apache 2.0 ! huggingface KoGPT 6B https //img.shields.io/badge/huggingface KoGPT 6B ryan1.5b ffcd00.svg https //huggingface.co/kakaobrain/kogpt/tree/KoGPT6B ryan1.5b ! huggingface KoGPT 6B https //img.shields.io/badge/huggingface KoGPT 6B ryan1.5b float16 ffcd00.svg https //huggingface.co/kakaobrain/kogpt/tree/KoGPT6B ryan1.5b float16 ! License CC BY NC ND 4.0 https //im |


## 주요 파일

### Manifests

- README.md
- huggingface/KoGPT6B-ryan1.5b/README.md
- requirements.txt


### Spec / Docs / Prompt Artifacts

- requirements.txt


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| kogpt | 3 |
| .dev | 1 |
| .gitignore | 1 |
| CONTRIBUTING.md | 1 |
| huggingface | 1 |
| LICENSE | 1 |
| LICENSE.apache-2.0 | 1 |
| LICENSE.cc-by-nc-nd-4.0 | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .md | 3 |
| .py | 3 |
| [no-ext] | 3 |
| .0 | 2 |
| .txt | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
