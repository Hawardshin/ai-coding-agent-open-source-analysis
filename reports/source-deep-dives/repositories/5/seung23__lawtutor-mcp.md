# seung23/lawtutor-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Korean Administrative Law & Constitutional Law RAG MCP Server for 7급 공무원시험

## 요약

- 조사 단위: `sources/seung23__lawtutor-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 97 files, 26 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_retrieval/__init__.py, tests/test_retrieval/test_formatter.py, src/lawtutor/vector_store/__init__.py이고, 의존성 단서는 mcp, fastapi, pydantic, qdrant, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | seung23/lawtutor-mcp |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/seung23__lawtutor-mcp](../../../../sources/seung23__lawtutor-mcp) |
| 기존 보고서 | [reports/korea-trending/repositories/seung23__lawtutor-mcp.md](../../../korea-trending/repositories/seung23__lawtutor-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 97 / 26 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude, data, docs, logs, scripts, src, tests |
| 상위 확장자 | .py: 65, .json: 8, .md: 8, (none): 8, .jsonl: 3, .yml: 2, .example: 1, .lock: 1, .toml: 1 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 22 |
| src | source boundary | 20 |
| docs | documentation surface | 10 |
| data | top-level component | 1 |
| logs | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | qdrant |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [tests/test_retrieval/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/__init__.py) | retrieval signal |
| retrieval | [tests/test_retrieval/test_formatter.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/test_formatter.py) | retrieval signal |
| retrieval | [src/lawtutor/vector_store/__init__.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/vector_store/__init__.py) | retrieval signal |
| retrieval | [src/lawtutor/vector_store/client.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/vector_store/client.py) | retrieval signal |
| entrypoints | [src/lawtutor/mcp_server/server.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/server.py) | entrypoints signal |
| docs | [README.md](../../../../sources/seung23__lawtutor-mcp/README.md) | docs signal |
| docs | [docs/ARCHITECTURE.md](../../../../sources/seung23__lawtutor-mcp/docs/ARCHITECTURE.md) | docs signal |
| docs | [docs/DEPLOYMENT.md](../../../../sources/seung23__lawtutor-mcp/docs/DEPLOYMENT.md) | docs signal |
| docs | [docs/EVALUATION.md](../../../../sources/seung23__lawtutor-mcp/docs/EVALUATION.md) | docs signal |
| eval | [tests/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/__init__.py) | eval signal |
| eval | [tests/conftest.py](../../../../sources/seung23__lawtutor-mcp/tests/conftest.py) | eval signal |
| config | [pyproject.toml](../../../../sources/seung23__lawtutor-mcp/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/lawtutor/mcp_server/server.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/server.py) |
| agentRuntime | 1 | [src/lawtutor/mcp_server/tools/__init__.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/tools/__init__.py) |
| mcp | 7 | [tests/test_mcp_server/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_mcp_server/__init__.py)<br>[tests/test_mcp_server/test_auth.py](../../../../sources/seung23__lawtutor-mcp/tests/test_mcp_server/test_auth.py)<br>[src/lawtutor/mcp_server/__init__.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/__init__.py)<br>[src/lawtutor/mcp_server/auth.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/auth.py)<br>[src/lawtutor/mcp_server/http_app.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/http_app.py)<br>[src/lawtutor/mcp_server/server.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/server.py)<br>[src/lawtutor/mcp_server/tools/__init__.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/tools/__init__.py) |
| retrieval | 11 | [tests/test_retrieval/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/__init__.py)<br>[tests/test_retrieval/test_formatter.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/test_formatter.py)<br>[src/lawtutor/vector_store/__init__.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/vector_store/__init__.py)<br>[src/lawtutor/vector_store/client.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/vector_store/client.py)<br>[src/lawtutor/vector_store/schemas.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/vector_store/schemas.py)<br>[src/lawtutor/retrieval/__init__.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/retrieval/__init__.py)<br>[src/lawtutor/retrieval/api_fallback.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/retrieval/api_fallback.py)<br>[src/lawtutor/retrieval/formatter.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/retrieval/formatter.py) |
| spec | 2 | [docs/ARCHITECTURE.md](../../../../sources/seung23__lawtutor-mcp/docs/ARCHITECTURE.md)<br>[docs/PRD.md](../../../../sources/seung23__lawtutor-mcp/docs/PRD.md) |
| eval | 30 | [tests/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/seung23__lawtutor-mcp/tests/conftest.py)<br>[tests/test_retrieval/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/__init__.py)<br>[tests/test_retrieval/test_formatter.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/test_formatter.py)<br>[tests/test_parsers/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_parsers/__init__.py)<br>[tests/test_parsers/test_law_parser.py](../../../../sources/seung23__lawtutor-mcp/tests/test_parsers/test_law_parser.py)<br>[tests/test_mcp_server/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_mcp_server/__init__.py)<br>[tests/test_mcp_server/test_auth.py](../../../../sources/seung23__lawtutor-mcp/tests/test_mcp_server/test_auth.py) |
| security | 2 | [tests/test_mcp_server/test_auth.py](../../../../sources/seung23__lawtutor-mcp/tests/test_mcp_server/test_auth.py)<br>[src/lawtutor/mcp_server/auth.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/auth.py) |
| ci | 0 | 명확하지 않음 |
| container | 3 | [docker-compose.override.yml](../../../../sources/seung23__lawtutor-mcp/docker-compose.override.yml)<br>[docker-compose.yml](../../../../sources/seung23__lawtutor-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/seung23__lawtutor-mcp/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/seung23__lawtutor-mcp/CLAUDE.md) |
| docs | 7 | [README.md](../../../../sources/seung23__lawtutor-mcp/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/seung23__lawtutor-mcp/docs/ARCHITECTURE.md)<br>[docs/DEPLOYMENT.md](../../../../sources/seung23__lawtutor-mcp/docs/DEPLOYMENT.md)<br>[docs/EVALUATION.md](../../../../sources/seung23__lawtutor-mcp/docs/EVALUATION.md)<br>[docs/MILESTONES.md](../../../../sources/seung23__lawtutor-mcp/docs/MILESTONES.md)<br>[docs/PRD.md](../../../../sources/seung23__lawtutor-mcp/docs/PRD.md)<br>[docs/PROMPTING.md](../../../../sources/seung23__lawtutor-mcp/docs/PROMPTING.md) |
| config | 2 | [pyproject.toml](../../../../sources/seung23__lawtutor-mcp/pyproject.toml)<br>[uv.lock](../../../../sources/seung23__lawtutor-mcp/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 30 | [tests/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/seung23__lawtutor-mcp/tests/conftest.py)<br>[tests/test_retrieval/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/__init__.py)<br>[tests/test_retrieval/test_formatter.py](../../../../sources/seung23__lawtutor-mcp/tests/test_retrieval/test_formatter.py)<br>[tests/test_parsers/__init__.py](../../../../sources/seung23__lawtutor-mcp/tests/test_parsers/__init__.py)<br>[tests/test_parsers/test_law_parser.py](../../../../sources/seung23__lawtutor-mcp/tests/test_parsers/test_law_parser.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 3 | [docker-compose.override.yml](../../../../sources/seung23__lawtutor-mcp/docker-compose.override.yml)<br>[docker-compose.yml](../../../../sources/seung23__lawtutor-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/seung23__lawtutor-mcp/Dockerfile) |
| 보안/정책 | 2 | [tests/test_mcp_server/test_auth.py](../../../../sources/seung23__lawtutor-mcp/tests/test_mcp_server/test_auth.py)<br>[src/lawtutor/mcp_server/auth.py](../../../../sources/seung23__lawtutor-mcp/src/lawtutor/mcp_server/auth.py) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/seung23__lawtutor-mcp/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_retrieval/__init__.py`, `tests/test_retrieval/test_formatter.py`, `src/lawtutor/vector_store/__init__.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/lawtutor/mcp_server/server.py`.
3. agent/tool runtime 매핑: `src/lawtutor/mcp_server/tools/__init__.py`.
4. retrieval/memory/indexing 확인: `tests/test_retrieval/__init__.py`, `tests/test_retrieval/test_formatter.py`, `src/lawtutor/vector_store/__init__.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_retrieval/__init__.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Korean Administrative Law & Constitutional Law RAG MCP Server for 7급 공무원시험. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
