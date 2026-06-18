# linkonai2026-kr/kochunk

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/linkonai2026-kr/kochunk |
| local path | sources/linkonai2026-kr__kochunk |
| HEAD | a09d618 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-06T17:32:01Z |
| trendScore / priorityScore | 70 / 111 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval | 314 | README.md, pyproject.toml, benchmarks/run.py |
| Korean language / Korea domain | 51 | README.md, pyproject.toml, benchmarks/run.py |
| Spec / doc-driven workflow | 18 | tests/test_structure.py, src/kochunk/quality.py, src/kochunk/tokens/registry.py |
| LLM wiki / memory / graph | 8 | CHANGELOG.md, src/kochunk/__init__.py, src/kochunk/chunkers/base.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | documentParsing, evalObservability, example-rich, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, spec-driven |
| stacks | Python |
| capabilities | LLM/app framework, Graph/memory store, Document parsing/OCR, Eval/observability |


## 구조 요약

| key | value |
| --- | --- |
| files | 56 |
| manifests | 2 |
| docs | 4 |
| tests | 14 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | kochunk |
| headings | kochunk / 목차 / 왜 kochunk인가 / 기존 도구와의 솔직한 비교 / 핵심 차별점 6가지 / 1. 정확한 한국어 문장 경계 (Kiwi) / → 소수점(3.14)·인용·번호목록을 문장 경계로 오인하지 않습니다. / 2. 목표 임베딩 토크나이저 기준 예산 (+ 한국어 프리셋) / bge-m3 토크나이저로 512토큰 이하 보장 / 3. 어절·음절 절대 보존 |
| excerpt | kochunk 한국어 문서를 임베딩하기 좋게 "의미 단위"로 쪼개고, 그 품질까지 채점해 주는 RAG 청킹 툴킷. Korean first text chunking for RAG — sentence correct, token budgeted, structure preserving, and self grading . ! License MIT https //img.shields.io/badge/License MIT yellow.svg LICENSE ! Python https //img.shields.io/badge/python 3.10%2B blue ! Type checked mypy https //img.shields.io/badge/mypy checked blue ! Lint ruff https //img.shields.io/badge/lint ruff orange 영어 기준 텍스트 분할기 LangChain RecursiveCharacterTextSplitter , Chonkie 등 는 한국어에 잘 맞지 않습니다. 형태소·띄어쓰기·문장 경계가 다르기 때문입니다. kochunk는 한국어를 1순위로 설계된 청킹 라이브러리이며, 단순히 자르는 데서 그치지 않고 잘랐는지 잘 잘랐는지를 진단 합니다. 목차 1. 왜 kochunk인가 왜 kochunk인가 2. 핵심 차별점 6가지 핵심 차별점 6가지 3. 설치 설치 4. 빠른 시작 빠른 시작 5. |


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
| src | 32 |
| tests | 14 |
| examples | 2 |
| .github | 1 |
| .gitignore | 1 |
| benchmarks | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 47 |
| .md | 4 |
| [no-ext] | 2 |
| .toml | 1 |
| .typed | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
