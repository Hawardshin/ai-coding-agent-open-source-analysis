# minsung2da/stock-wiki 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Claude-Powered Korean Market Knowledge Base — Obsidian vault + Postgres/pgvector hybrid search + MCP server for Claude Code

## 요약

- 조사 단위: `sources/minsung2da__stock-wiki` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 397 files, 70 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md, .planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md, .planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md이고, 의존성 단서는 claude, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | minsung2da/stock-wiki |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/minsung2da__stock-wiki](../../../../sources/minsung2da__stock-wiki) |
| 기존 보고서 | [reports/korea-trending/repositories/minsung2da__stock-wiki.md](../../../korea-trending/repositories/minsung2da__stock-wiki.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 397 / 70 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude, .github, .obsidian, .planning, docs, fixtures, scripts, src, tests |
| 상위 확장자 | .md: 230, .py: 118, .json: 17, .html: 8, .yaml: 6, (none): 4, .xml: 3, .ini: 2, .yml: 2, .example: 1, .lock: 1, .mako: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 42 |
| docs | documentation surface | 3 |
| src | source boundary | 2 |
| .github | ci surface | 1 |
| fixtures | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | stock | stock |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md) | mcp signal |
| mcp | [.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md) | mcp signal |
| mcp | [.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md) | mcp signal |
| mcp | [.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-SUMMARY.md) | mcp signal |
| agentRuntime | [.planning/phases/01-collector-db-cutover/CONTEXT.md](../../../../sources/minsung2da__stock-wiki/.planning/phases/01-collector-db-cutover/CONTEXT.md) | agentRuntime signal |
| agentRuntime | [.claude/routines/enrich/SKILL.md](../../../../sources/minsung2da__stock-wiki/.claude/routines/enrich/SKILL.md) | agentRuntime signal |
| entrypoints | [src/cli/__main__.py](../../../../sources/minsung2da__stock-wiki/src/cli/__main__.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/minsung2da__stock-wiki/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/minsung2da__stock-wiki/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/minsung2da__stock-wiki/uv.lock) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/minsung2da__stock-wiki/.github/workflows/ci.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/minsung2da__stock-wiki/docker-compose.yml) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/cli/__main__.py](../../../../sources/minsung2da__stock-wiki/src/cli/__main__.py) |
| agentRuntime | 2 | [.planning/phases/01-collector-db-cutover/CONTEXT.md](../../../../sources/minsung2da__stock-wiki/.planning/phases/01-collector-db-cutover/CONTEXT.md)<br>[.claude/routines/enrich/SKILL.md](../../../../sources/minsung2da__stock-wiki/.claude/routines/enrich/SKILL.md) |
| mcp | 33 | [.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-SUMMARY.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-03-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-03-PLAN.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-03-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-03-SUMMARY.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-HUMAN-UAT.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-HUMAN-UAT.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-VERIFICATION.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-VERIFICATION.md) |
| retrieval | 29 | [.planning/quick/260426-mic-preserve-injection-flags-in-ingest-state/260426-mic-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/quick/260426-mic-preserve-injection-flags-in-ingest-state/260426-mic-PLAN.md)<br>[.planning/quick/260426-mic-preserve-injection-flags-in-ingest-state/260426-mic-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/quick/260426-mic-preserve-injection-flags-in-ingest-state/260426-mic-SUMMARY.md)<br>[.planning/quick/260418-bwv-fix-d-1-ingest-worker-seeds-entities-fro/260418-bwv-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/quick/260418-bwv-fix-d-1-ingest-worker-seeds-entities-fro/260418-bwv-SUMMARY.md)<br>[.planning/phases/01-collector-db-cutover/PLAN-INDEX.md](../../../../sources/minsung2da__stock-wiki/.planning/phases/01-collector-db-cutover/PLAN-INDEX.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md)<br>[.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-SUMMARY.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-SUMMARY.md) |
| spec | 4 | [.planning/REQUIREMENTS.md](../../../../sources/minsung2da__stock-wiki/.planning/REQUIREMENTS.md)<br>[.planning/ROADMAP.md](../../../../sources/minsung2da__stock-wiki/.planning/ROADMAP.md)<br>[.planning/research/ARCHITECTURE.md](../../../../sources/minsung2da__stock-wiki/.planning/research/ARCHITECTURE.md)<br>[.planning/archive/v1.0-phases/06-full-mcp-tool-surface/06-UI-SPEC.md](../../../../sources/minsung2da__stock-wiki/.planning/archive/v1.0-phases/06-full-mcp-tool-surface/06-UI-SPEC.md) |
| eval | 83 | [tests/__init__.py](../../../../sources/minsung2da__stock-wiki/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/minsung2da__stock-wiki/tests/conftest.py)<br>[tests/fixtures_loader.py](../../../../sources/minsung2da__stock-wiki/tests/fixtures_loader.py)<br>[tests/test_api_probes.py](../../../../sources/minsung2da__stock-wiki/tests/test_api_probes.py)<br>[tests/test_cli_collect_all.py](../../../../sources/minsung2da__stock-wiki/tests/test_cli_collect_all.py)<br>[tests/test_content_hash.py](../../../../sources/minsung2da__stock-wiki/tests/test_content_hash.py)<br>[tests/test_dart_fetcher_retry.py](../../../../sources/minsung2da__stock-wiki/tests/test_dart_fetcher_retry.py)<br>[tests/test_dart_financials.py](../../../../sources/minsung2da__stock-wiki/tests/test_dart_financials.py) |
| security | 1 | [tests/test_import_guard.py](../../../../sources/minsung2da__stock-wiki/tests/test_import_guard.py) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/minsung2da__stock-wiki/.github/workflows/ci.yml) |
| container | 1 | [docker-compose.yml](../../../../sources/minsung2da__stock-wiki/docker-compose.yml) |
| instruction | 1 | [CLAUDE.md](../../../../sources/minsung2da__stock-wiki/CLAUDE.md) |
| docs | 4 | [README.md](../../../../sources/minsung2da__stock-wiki/README.md)<br>[docs/kind-robots-snapshot.txt](../../../../sources/minsung2da__stock-wiki/docs/kind-robots-snapshot.txt)<br>[docs/local-sync.md](../../../../sources/minsung2da__stock-wiki/docs/local-sync.md)<br>[.claude/routines/enrich/README.md](../../../../sources/minsung2da__stock-wiki/.claude/routines/enrich/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/minsung2da__stock-wiki/pyproject.toml)<br>[uv.lock](../../../../sources/minsung2da__stock-wiki/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 83 | [tests/__init__.py](../../../../sources/minsung2da__stock-wiki/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/minsung2da__stock-wiki/tests/conftest.py)<br>[tests/fixtures_loader.py](../../../../sources/minsung2da__stock-wiki/tests/fixtures_loader.py)<br>[tests/test_api_probes.py](../../../../sources/minsung2da__stock-wiki/tests/test_api_probes.py)<br>[tests/test_cli_collect_all.py](../../../../sources/minsung2da__stock-wiki/tests/test_cli_collect_all.py)<br>[tests/test_content_hash.py](../../../../sources/minsung2da__stock-wiki/tests/test_content_hash.py) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/minsung2da__stock-wiki/.github/workflows/ci.yml) |
| 컨테이너/배포 | 1 | [docker-compose.yml](../../../../sources/minsung2da__stock-wiki/docker-compose.yml) |
| 보안/정책 | 1 | [tests/test_import_guard.py](../../../../sources/minsung2da__stock-wiki/tests/test_import_guard.py) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/minsung2da__stock-wiki/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-PLAN.md`, `.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-01-SUMMARY.md`, `.planning/archive/v1.0-phases/07.1-sql-driven-graph-and-mcp-acceleration/07.1-02-PLAN.md`.
2. entrypoint를 따라 실행 흐름 확인: `src/cli/__main__.py`.
3. agent/tool runtime 매핑: `.planning/phases/01-collector-db-cutover/CONTEXT.md`, `.claude/routines/enrich/SKILL.md`.
4. retrieval/memory/indexing 확인: `.planning/quick/260426-mic-preserve-injection-flags-in-ingest-state/260426-mic-PLAN.md`, `.planning/quick/260426-mic-preserve-injection-flags-in-ingest-state/260426-mic-SUMMARY.md`, `.planning/quick/260418-bwv-fix-d-1-ingest-worker-seeds-entities-fro/260418-bwv-SUMMARY.md`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/fixtures_loader.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Claude Powered Korean Market Knowledge Base — Obsidian vault + Postgres/pgvector hybrid search + MCP server for Claude C. 핵심 구조 신호는 Python, pyproject.toml, docker-compose.yml, README.md, CLAUDE.md, pydantic이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
