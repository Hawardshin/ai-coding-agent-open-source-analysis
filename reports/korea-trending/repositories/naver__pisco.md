# naver/pisco

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/naver/pisco |
| local path | sources/naver__pisco |
| HEAD | e1250cc |
| stars/forks | 8 / 2 |
| language | Python |
| license | NOASSERTION |
| pushedAt | 2026-06-03T14:13:12Z |
| trendScore / priorityScore | 68 / 166 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 50 | README.md, pisco/example.py, pisco/collator_utils.py |
| Korean language / Korea domain | 16 | README.md, pisco/example.py, PISCO-LICENSE.txt |
| LLM wiki / memory / graph | 5 | README.md, PISCO-LICENSE.txt, pisco/model.py |
| AI agent / tool use | 2 | PISCO-LICENSE.txt, pisco/collator.py |
| Spec / doc-driven workflow | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 13 |
| manifests | 2 |
| docs | 1 |
| tests | 0 |
| ci/ops | 0 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | PISCO/OSCAR Soft Compression Methods |
| headings | PISCO/OSCAR Soft Compression Methods / Compress a document: / Generate from (document + query) / Training / Data-preprocessing and collation / Implementing your own collator / Comments about previous model releases / Dependencies / Cite / PISCO |
| excerpt | ! arXiv PISCO https //img.shields.io/badge/arXiv PISCO b31b1b.svg https //arxiv.org/abs/2501.16075 ! ACL 2025 Findings https //img.shields.io/badge/ACL%202025 Findings 1f77b4.svg https //aclanthology.org/2025.findings acl.800/ ! arXiv OSCAR https //img.shields.io/badge/arXiv OSCAR b31b1b.svg https //arxiv.org/abs/2504.07109 ! ICLR 2026 Poster https //img.shields.io/badge/ICLR%202026 Poster 4b44ce.svg https //openreview.net/forum?id=ideKAUWvFE ! NAVER LABS Europe https //img.shields.io/badge/NAVER%20LABS Europe 03C75A.svg https //europe.naverlabs.com/ PISCO/OSCAR Soft Compression Methods PISCO https //arxiv.org/abs/2501.16075 is a model designed for faster RAG inference. Given some RAG collec |


## 주요 파일

### Manifests

- README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| pisco | 9 |
| .gitignore | 1 |
| PISCO-LICENSE.txt | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 7 |
| .yaml | 2 |
| .md | 1 |
| .toml | 1 |
| .txt | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
