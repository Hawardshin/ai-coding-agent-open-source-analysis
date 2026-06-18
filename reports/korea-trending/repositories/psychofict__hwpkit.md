# psychofict/hwpkit

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/psychofict/hwpkit |
| local path | sources/psychofict__hwpkit |
| HEAD | a3a5725 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-15T01:42:40Z |
| trendScore / priorityScore | 74 / 138 |


## 한줄 해석

- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.
- 프런트엔드/DX 신호가 있어 실사용 개발자 경험 또는 SDK 문서화 수준을 확인할 가치가 있다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| Korean language / Korea domain | 75 | README.md, CLAUDE.md, pyproject.toml |
| RAG / retrieval | 71 | README.md, pyproject.toml, docs/blog/posts/hwp-python-korean.md |
| Spec / doc-driven workflow | 16 | CLAUDE.md, docs/OBJECT_MODEL.md, docs/RECORD_FORMAT.md |
| AI agent / tool use | 2 | docs/robots.txt, hwpkit/picture.py |
| LLM wiki / memory / graph | 2 | hwpkit/hwp.py, hwpkit/hwpx.py |
| Security / compliance | 2 | CLAUDE.md, .github/workflows/publish.yml |
| Frontend / developer experience | 1 | README.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, documentParsing, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, rag, sdk-api, security-compliance, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store, Document parsing/OCR |


## 구조 요약

| key | value |
| --- | --- |
| files | 48 |
| manifests | 5 |
| docs | 20 |
| tests | 9 |
| ci/ops | 3 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | from the shell — works on both formats |
| headings | Why hwpkit / Install / Quickstart / from the shell — works on both formats / Built for Korean RAG & LLM pipelines / Who uses this / hwpkit vs the alternatives / How it works (for the curious) / Contributing / License |
| excerpt | <p align="center" <img src="https //raw.githubusercontent.com/psychofict/hwpkit/main/assets/logo.jpeg" alt="hwpkit — read, edit & extract Korean HWP / HWPX documents in pure Python" width="320" </p <h1 align="center" hwpkit</h1 <p align="center" <b The pure Python toolkit for Korean HWP &amp; HWPX Hancom Office documents.</b <br Read it, edit it, extract its text — <i no Hancom, no Windows, no COM automation.</i </p <p align="center" <a href="https //pypi.org/project/hwpkit/" <img src="https //img.shields.io/pypi/v/hwpkit.svg" alt="PyPI" </a <a href="https //pypi.org/project/hwpkit/" <img src="https //img.shields.io/pypi/pyversions/hwpkit.svg" alt="Python versions" </a <a href="https //githu |


## 주요 파일

### Manifests

- README.md
- tests/fixtures/README.md
- CLAUDE.md
- docs/requirements.txt
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- docs/requirements.txt


### Agent Instruction Files

- CLAUDE.md


## 상위 디렉터리

| dir | count |
| --- | --- |
| docs | 16 |
| hwpkit | 11 |
| tests | 9 |
| .github | 3 |
| examples | 2 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| LICENSE | 1 |
| mkdocs.yml | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 20 |
| .md | 16 |
| .yml | 5 |
| [no-ext] | 3 |
| .txt | 2 |
| .json | 1 |
| .toml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
