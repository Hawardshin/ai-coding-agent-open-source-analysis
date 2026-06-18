# PlateerLab/document-adapter

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/PlateerLab/document-adapter |
| local path | sources/PlateerLab__document-adapter |
| HEAD | 2d2d36b |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-02T05:35:46Z |
| trendScore / priorityScore | 71 / 146 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 로컬 LLM/온디바이스 실행 신호가 있어 비용/보안/오프라인 요구와 연결된다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 39 | README.md, pyproject.toml, document_adapter/mcp_server.py |
| Local LLM / on-device inference | 30 | examples/eval_run.py, tests/test_eval_harness.py, document_adapter/eval/harness.py |
| AI agent / tool use | 15 | README.md, pyproject.toml, examples/eval_run.py |
| RAG / retrieval | 6 | scripts/hwpx_regression.py, scripts/docx_regression.py, scripts/pptx_regression.py |
| LLM wiki / memory / graph | 5 | tests/test_scenarios.py |
| Frontend / developer experience | 4 | README.md, document_adapter/eval/harness.py, examples/ollama_example.py |
| Infra / observability | 2 | scripts/demo_docx_merged_only.py |
| Korean language / Korea domain | 1 | pyproject.toml |
| Spec / doc-driven workflow | 1 | CHANGELOG.md |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, documentParsing, example-rich, frontend-dx, infra-observability, korea-signal, llm-wiki-memory, llmFramework, local-llm, localRuntime, mcp, rag, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Document parsing/OCR, Local runtime |


## 구조 요약

| key | value |
| --- | --- |
| files | 52 |
| manifests | 3 |
| docs | 2 |
| tests | 3 |
| ci/ops | 1 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | document-adapter |
| headings | document-adapter / 지원 포맷 / 라이선스 (상용 사용 가능) / 설치 / 빠른 시작 — 파이썬 API / 1. 구조 파악 / 2. 템플릿 렌더 / 3. 기존 양식 파일의 표 셀 수정 / 빈 셀 값 교체 / 라벨이 있는 셀 ("성 명")에 값 추가 → "성 명  홍길동" |
| excerpt | document adapter ! PyPI version https //img.shields.io/pypi/v/document adapter.svg https //pypi.org/project/document adapter/ ! Python versions https //img.shields.io/pypi/pyversions/document adapter.svg https //pypi.org/project/document adapter/ ! License https //img.shields.io/pypi/l/document adapter.svg https //github.com/PlateerLab/document adapter/blob/main/LICENSE ! MCP https //img.shields.io/badge/MCP compatible blue.svg https //modelcontextprotocol.io LLM이 DOCX / PPTX / HWPX 문서를 직접 편집할 수 있게 해주는 통합 어댑터 + MCP 서버. 세 가지 오피스 포맷을 하나의 파이썬 인터페이스로 추상화하고, Claude Desktop / Claude Code / Anthropic API Tool Use에서 바로 호출할 수 있는 MCP 도구로 노출합니다. 양식 문서의 빈 셀을 자동으로 채우거나, 템플릿의 {{key}} 를 치환하거나, 기존 표의 내용을 수정 |


## 주요 파일

### Manifests

- README.md
- pyproject.toml
- document_adapter/hwpx_core/package.py


### Spec / Docs / Prompt Artifacts

_없음_


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| scripts | 21 |
| document_adapter | 18 |
| examples | 3 |
| tests | 3 |
| .github | 1 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 45 |
| [no-ext] | 3 |
| .md | 2 |
| .toml | 1 |
| .yml | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
