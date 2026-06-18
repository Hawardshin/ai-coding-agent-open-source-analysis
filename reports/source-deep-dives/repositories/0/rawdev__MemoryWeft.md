# rawdev/MemoryWeft 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

rawdev/MemoryWeft

## 요약

- 조사 단위: `sources/rawdev__MemoryWeft` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 206 files, 45 directories, depth score 105, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/k2g/web/static/index.html, src/k2g/ui_project/static/index.html, src/k2g/reader/graph_query.py이고, 의존성 단서는 mcp, fastapi, pydantic, torch, transformers, pgvector, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | rawdev/MemoryWeft |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 9 |
| Forks | 3 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/rawdev__MemoryWeft](../../../../sources/rawdev__MemoryWeft) |
| 기존 보고서 | [reports/korea-trending/repositories/rawdev__MemoryWeft.md](../../../korea-trending/repositories/rawdev__MemoryWeft.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 206 / 45 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, asset, docs, packaging, scripts, src |
| 상위 확장자 | .py: 171, .md: 8, .json: 4, .png: 4, (none): 4, .yml: 3, .bat: 2, .command: 2, .html: 2, .js: 2, .txt: 2, .toml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 65 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| asset | top-level component | 1 |
| packaging | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | k2g-mcp | k2g-mcp |
| utility | pyproject.toml | mweft-app | mweft-app |
| utility | pyproject.toml | mweft-init | mweft-init |
| utility | pyproject.toml | k2g-ingest-manifest | k2g-ingest-manifest |
| quality | pyproject.toml | k2g-manifest-check | k2g-manifest-check |
| utility | pyproject.toml | k2g-manifest-assemble | k2g-manifest-assemble |
| utility | pyproject.toml | mweft-export | mweft-export |
| utility | pyproject.toml | mweft-import | mweft-import |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | pgvector |
| modelRuntime | torch, transformers |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [src/k2g/web/static/index.html](../../../../sources/rawdev__MemoryWeft/src/k2g/web/static/index.html) | retrieval signal |
| retrieval | [src/k2g/ui_project/static/index.html](../../../../sources/rawdev__MemoryWeft/src/k2g/ui_project/static/index.html) | retrieval signal |
| retrieval | [src/k2g/reader/graph_query.py](../../../../sources/rawdev__MemoryWeft/src/k2g/reader/graph_query.py) | retrieval signal |
| retrieval | [src/k2g/portable/vector_codec.py](../../../../sources/rawdev__MemoryWeft/src/k2g/portable/vector_codec.py) | retrieval signal |
| entrypoints | [src/k2g/mcp/__main__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/__main__.py) | entrypoints signal |
| entrypoints | [src/k2g/mcp/server.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/server.py) | entrypoints signal |
| entrypoints | [src/k2g/desktop/__main__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/desktop/__main__.py) | entrypoints signal |
| docs | [README.KR.md](../../../../sources/rawdev__MemoryWeft/README.KR.md) | docs signal |
| docs | [README.md](../../../../sources/rawdev__MemoryWeft/README.md) | docs signal |
| docs | [packaging/portable/readme_kr.txt](../../../../sources/rawdev__MemoryWeft/packaging/portable/readme_kr.txt) | docs signal |
| docs | [packaging/portable/README.txt](../../../../sources/rawdev__MemoryWeft/packaging/portable/README.txt) | docs signal |
| eval | [src/k2g/observability/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/__init__.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [src/k2g/mcp/__main__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/__main__.py)<br>[src/k2g/mcp/server.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/server.py)<br>[src/k2g/desktop/__main__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/desktop/__main__.py) |
| agentRuntime | 6 | [src/k2g/ui/templates/skill_manifest_ingestion.md](../../../../sources/rawdev__MemoryWeft/src/k2g/ui/templates/skill_manifest_ingestion.md)<br>[src/k2g/memory/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/memory/__init__.py)<br>[src/k2g/memory/save_context.py](../../../../sources/rawdev__MemoryWeft/src/k2g/memory/save_context.py)<br>[src/k2g/memory/source_axis.py](../../../../sources/rawdev__MemoryWeft/src/k2g/memory/source_axis.py)<br>[src/k2g/mcp/memory_tools.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/memory_tools.py)<br>[src/k2g/mcp/tools.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/tools.py) |
| mcp | 22 | [src/k2g/ui/templates/mcp.json](../../../../sources/rawdev__MemoryWeft/src/k2g/ui/templates/mcp.json)<br>[src/k2g/observability/mcp_telemetry.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/mcp_telemetry.py)<br>[src/k2g/mcp/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/__init__.py)<br>[src/k2g/mcp/__main__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/__main__.py)<br>[src/k2g/mcp/community_tools.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/community_tools.py)<br>[src/k2g/mcp/factory.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/factory.py)<br>[src/k2g/mcp/hint.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/hint.py)<br>[src/k2g/mcp/memory_tools.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/memory_tools.py) |
| retrieval | 22 | [src/k2g/web/static/index.html](../../../../sources/rawdev__MemoryWeft/src/k2g/web/static/index.html)<br>[src/k2g/ui_project/static/index.html](../../../../sources/rawdev__MemoryWeft/src/k2g/ui_project/static/index.html)<br>[src/k2g/reader/graph_query.py](../../../../sources/rawdev__MemoryWeft/src/k2g/reader/graph_query.py)<br>[src/k2g/portable/vector_codec.py](../../../../sources/rawdev__MemoryWeft/src/k2g/portable/vector_codec.py)<br>[src/k2g/memory/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/memory/__init__.py)<br>[src/k2g/memory/save_context.py](../../../../sources/rawdev__MemoryWeft/src/k2g/memory/save_context.py)<br>[src/k2g/memory/source_axis.py](../../../../sources/rawdev__MemoryWeft/src/k2g/memory/source_axis.py)<br>[src/k2g/mcp/memory_tools.py](../../../../sources/rawdev__MemoryWeft/src/k2g/mcp/memory_tools.py) |
| spec | 0 | 명확하지 않음 |
| eval | 5 | [src/k2g/observability/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/__init__.py)<br>[src/k2g/observability/log_context.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/log_context.py)<br>[src/k2g/observability/logging_config.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/logging_config.py)<br>[src/k2g/observability/mcp_telemetry.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/mcp_telemetry.py)<br>[.github/workflows/test.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/test.yml) |
| security | 6 | [src/k2g/security/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/__init__.py)<br>[src/k2g/security/data_owner.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/data_owner.py)<br>[src/k2g/security/session_context.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/session_context.py)<br>[src/k2g/security/share_store.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/share_store.py)<br>[src/k2g/security/sql_safety.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/sql_safety.py)<br>[src/k2g/db_store/embedding_guard.py](../../../../sources/rawdev__MemoryWeft/src/k2g/db_store/embedding_guard.py) |
| ci | 3 | [.github/workflows/claude.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/claude.yml)<br>[.github/workflows/release.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [src/k2g/ui/templates/CLAUDE.md](../../../../sources/rawdev__MemoryWeft/src/k2g/ui/templates/CLAUDE.md) |
| docs | 6 | [README.KR.md](../../../../sources/rawdev__MemoryWeft/README.KR.md)<br>[README.md](../../../../sources/rawdev__MemoryWeft/README.md)<br>[packaging/portable/readme_kr.txt](../../../../sources/rawdev__MemoryWeft/packaging/portable/readme_kr.txt)<br>[packaging/portable/README.txt](../../../../sources/rawdev__MemoryWeft/packaging/portable/README.txt)<br>[docs/install.md](../../../../sources/rawdev__MemoryWeft/docs/install.md)<br>[docs/prompt_guide.md](../../../../sources/rawdev__MemoryWeft/docs/prompt_guide.md) |
| config | 1 | [pyproject.toml](../../../../sources/rawdev__MemoryWeft/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 5 | [src/k2g/observability/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/__init__.py)<br>[src/k2g/observability/log_context.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/log_context.py)<br>[src/k2g/observability/logging_config.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/logging_config.py)<br>[src/k2g/observability/mcp_telemetry.py](../../../../sources/rawdev__MemoryWeft/src/k2g/observability/mcp_telemetry.py)<br>[.github/workflows/test.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/test.yml) |
| CI workflow | 3 | [.github/workflows/claude.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/claude.yml)<br>[.github/workflows/release.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/rawdev__MemoryWeft/.github/workflows/test.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 6 | [src/k2g/security/__init__.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/__init__.py)<br>[src/k2g/security/data_owner.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/data_owner.py)<br>[src/k2g/security/session_context.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/session_context.py)<br>[src/k2g/security/share_store.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/share_store.py)<br>[src/k2g/security/sql_safety.py](../../../../sources/rawdev__MemoryWeft/src/k2g/security/sql_safety.py)<br>[src/k2g/db_store/embedding_guard.py](../../../../sources/rawdev__MemoryWeft/src/k2g/db_store/embedding_guard.py) |
| 에이전트 지시문 | 1 | [src/k2g/ui/templates/CLAUDE.md](../../../../sources/rawdev__MemoryWeft/src/k2g/ui/templates/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/k2g/web/static/index.html`, `src/k2g/ui_project/static/index.html`, `src/k2g/reader/graph_query.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/k2g/mcp/__main__.py`, `src/k2g/mcp/server.py`, `src/k2g/desktop/__main__.py`.
3. agent/tool runtime 매핑: `src/k2g/ui/templates/skill_manifest_ingestion.md`, `src/k2g/memory/__init__.py`, `src/k2g/memory/save_context.py`.
4. retrieval/memory/indexing 확인: `src/k2g/web/static/index.html`, `src/k2g/ui_project/static/index.html`, `src/k2g/reader/graph_query.py`.
5. test/eval 파일로 동작 검증: `src/k2g/observability/__init__.py`, `src/k2g/observability/log_context.py`, `src/k2g/observability/logging_config.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, fastapi이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
