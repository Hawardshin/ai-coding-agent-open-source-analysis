# civilian7/korean-people-persona

생성일: 2026-06-18T00:02:16.992Z

## 기본 정보

| key | value |
| --- | --- |
| GitHub | https://github.com/civilian7/korean-people-persona |
| local path | sources/civilian7__korean-people-persona |
| HEAD | 9012d29 |
| stars/forks | 0 / 0 |
| language | Python |
| license |  |
| pushedAt | 2026-06-11T14:28:34Z |
| trendScore / priorityScore | 73 / 142 |


## 한줄 해석

- MCP 서버/도구 표면이 있어 Claude Code/Codex류 에이전트와 직접 연결하기 좋다.
- 검색/임베딩/RAG 신호가 있어 문서 기반 지식베이스 또는 업무 검색 흐름과 맞닿아 있다.
- 위키/메모리/그래프 신호가 있어 장기 컨텍스트 축적 방식 비교 대상으로 유효하다.
- 한국어/한국 도메인 또는 한국 기업 오픈소스 신호가 있어 국내 적용 가능성을 보기 좋다.
- 스펙/문서 주도 산출물이 있어 요구사항-설계-작업 분해 방식 분석 후보이다.


## 감지된 트렌드 신호

| signal | matches | evidence |
| --- | --- | --- |
| MCP / tool protocol | 114 | README.md, examples/requirements.txt, docs/superpowers/specs/2026-06-11-llm-agent-use-cases-design.md |
| Korean language / Korea domain | 60 | README.md, docs/superpowers/specs/2026-06-11-llm-agent-use-cases-design.md, docs/superpowers/plans/2026-06-11-persona-demo-samples.md |
| Spec / doc-driven workflow | 18 | README.md, examples/requirements.txt, docs/superpowers/specs/2026-06-11-llm-agent-use-cases-design.md |
| RAG / retrieval | 4 | README.md, docs/use-cases.md, src/mcp_server/tools.py |
| Frontend / developer experience | 3 | README.md, docs/superpowers/specs/2026-06-11-llm-agent-use-cases-design.md, docs/superpowers/plans/2026-06-11-persona-demo-samples.md |
| AI agent / tool use | 2 | docs/superpowers/specs/2026-06-11-persona-demo-samples-design.md |
| LLM wiki / memory / graph | 2 | README.md, src/convert/__main__.py |


## 분류와 스택

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, example-rich, frontend-dx, graphMemory, korea-signal, llm-wiki-memory, llmFramework, mcp, rag, spec-driven, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Graph/memory store |


## 구조 요약

| key | value |
| --- | --- |
| files | 28 |
| manifests | 3 |
| docs | 6 |
| tests | 3 |
| ci/ops | 0 |
| spec artifacts | 4 |
| agent instruction files | 0 |


## README 신호

| key | value |
| --- | --- |
| file | README.md |
| title | korean-people-persona |
| headings | korean-people-persona / 개요 / 데이터 출처 / 폴더 구조 / 데이터셋 다운로드 / 1) 변환 스크립트 옵션 (권장) / 2) huggingface-cli 직접 사용 / 3) git lfs 클론 / 메인 테이블 `persona` / 인덱스 |
| excerpt | korean people persona HuggingFace nvidia/Nemotron Personas Korea https //huggingface.co/datasets/nvidia/Nemotron Personas Korea 데이터셋 약 100만 행, 9개 parquet 파일 을 SQLite로 변환·검색하기 위한 도구 모음. 개요 출처 NVIDIA, Nemotron Personas Korea — https //huggingface.co/datasets/nvidia/Nemotron Personas Korea 라이선스 원 데이터셋 페이지의 라이선스 조항을 따름 DB 파일 database/persona.db 원본 parquet data/train of .parquet 테이블 persona 메인 + persona fts FTS5 외부 콘텐츠 인덱스 타깃 SQLite 3.37+ FTS5, STRICT 테이블, JSON1 사용 Python 3.10 이상 3.11+ 권장 의존성 pyarrow = 15.0 , huggingface hub = 0.24 requirements.txt 참조 디스크 여유 약 13 GB parquet ~2GB + DB 실측 ~10.7GB 변경 이력은 CHANGELOG.md CHANGELOG.md 참조. 데이터 출처 항목 값 저장소 nvidia/Nemotron Personas Korea https //huggingface |


## 주요 파일

### Manifests

- README.md
- examples/requirements.txt
- requirements.txt


### Spec / Docs / Prompt Artifacts

- examples/requirements.txt
- docs/superpowers/specs/2026-06-11-llm-agent-use-cases-design.md
- requirements.txt
- docs/superpowers/specs/2026-06-11-persona-demo-samples-design.md


### Agent Instruction Files

_없음_


## 상위 디렉터리

| dir | count |
| --- | --- |
| examples | 8 |
| src | 8 |
| docs | 4 |
| .gitignore | 1 |
| .mcp.json | 1 |
| build.bat | 1 |
| build.ps1 | 1 |
| build.sh | 1 |
| CHANGELOG.md | 1 |
| README.md | 1 |
| requirements.txt | 1 |


## 확장자 분포

| ext | count |
| --- | --- |
| .py | 15 |
| .md | 6 |
| .txt | 2 |
| .bat | 1 |
| .json | 1 |
| .ps1 | 1 |
| .sh | 1 |
| [no-ext] | 1 |


## 다음 심층 분석 포인트

- README와 manifest에서 실제 실행 경로를 확인한다.
- 감지된 evidence 파일을 기준으로 MCP/RAG/agent 흐름의 엔트리포인트를 추적한다.
- 스펙/문서 산출물이 있으면 요구사항-설계-작업 분해가 코드 변경과 어떻게 연결되는지 확인한다.
