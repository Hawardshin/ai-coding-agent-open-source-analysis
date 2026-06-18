# safishamsi/graphify 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

AI coding assistant skill (Claude Code, Codex, OpenCode, Cursor, Gemini CLI, and more). Turn any folder of code, SQL schemas, R scripts, shell scripts, docs, papers, images, or videos into a queryable knowledge graph. App code + database schema + infrastructure in one graph.

## 요약

- 조사 단위: `sources/safishamsi__graphify` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 582 files, 68 directories, depth score 124, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp_ingest.py, tests/fixtures/sample.mcp.json, graphify/mcp_ingest.py이고, 의존성 단서는 openai, anthropic, claude, codex, gemini, mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | safishamsi/graphify |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 68714 |
| Forks | 6935 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/safishamsi__graphify](../../../../sources/safishamsi__graphify) |
| 기존 보고서 | [reports/global-trending/repositories/safishamsi__graphify.md](../../../global-trending/repositories/safishamsi__graphify.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 582 / 68 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, docs, graphify, tests, tools, worked |
| 상위 확장자 | .md: 340, .py: 150, .json: 14, .ts: 7, (none): 7, .php: 5, .toml: 4, .rs: 3, .sql: 3, .swift: 3, .yml: 3, .f90: 2 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 37 |
| tests | validation surface | 37 |
| .github | ci surface | 1 |
| graphify | top-level component | 1 |
| tools | top-level component | 1 |
| worked | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | graphify | graphify |
| utility | pyproject.toml | graphify-mcp | graphify-mcp |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude, gemini |
| agentProtocols | mcp, codex |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | vscode |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/test_mcp_ingest.py](../../../../sources/safishamsi__graphify/tests/test_mcp_ingest.py) | mcp signal |
| mcp | [tests/fixtures/sample.mcp.json](../../../../sources/safishamsi__graphify/tests/fixtures/sample.mcp.json) | mcp signal |
| mcp | [graphify/mcp_ingest.py](../../../../sources/safishamsi__graphify/graphify/mcp_ingest.py) | mcp signal |
| mcp | [docs/docker-mcp-sqlite.md](../../../../sources/safishamsi__graphify/docs/docker-mcp-sqlite.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/safishamsi__graphify/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/__init__.py](../../../../sources/safishamsi__graphify/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [tools/skillgen/__init__.py](../../../../sources/safishamsi__graphify/tools/skillgen/__init__.py) | agentRuntime signal |
| agentRuntime | [tools/skillgen/__main__.py](../../../../sources/safishamsi__graphify/tools/skillgen/__main__.py) | agentRuntime signal |
| entrypoints | [graphify/__main__.py](../../../../sources/safishamsi__graphify/graphify/__main__.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/safishamsi__graphify/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/safishamsi__graphify/uv.lock) | config signal |
| config | [tests/fixtures/crate_b/Cargo.toml](../../../../sources/safishamsi__graphify/tests/fixtures/crate_b/Cargo.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [tools/skillgen/__main__.py](../../../../sources/safishamsi__graphify/tools/skillgen/__main__.py)<br>[graphify/__main__.py](../../../../sources/safishamsi__graphify/graphify/__main__.py) |
| agentRuntime | 285 | [AGENTS.md](../../../../sources/safishamsi__graphify/AGENTS.md)<br>[tools/__init__.py](../../../../sources/safishamsi__graphify/tools/__init__.py)<br>[tools/skillgen/__init__.py](../../../../sources/safishamsi__graphify/tools/skillgen/__init__.py)<br>[tools/skillgen/__main__.py](../../../../sources/safishamsi__graphify/tools/skillgen/__main__.py)<br>[tools/skillgen/gen.py](../../../../sources/safishamsi__graphify/tools/skillgen/gen.py)<br>[tools/skillgen/platforms.toml](../../../../sources/safishamsi__graphify/tools/skillgen/platforms.toml)<br>[tools/skillgen/fragments/shell/posix.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/shell/posix.md)<br>[tools/skillgen/fragments/shell/powershell.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/shell/powershell.md) |
| mcp | 4 | [tests/test_mcp_ingest.py](../../../../sources/safishamsi__graphify/tests/test_mcp_ingest.py)<br>[tests/fixtures/sample.mcp.json](../../../../sources/safishamsi__graphify/tests/fixtures/sample.mcp.json)<br>[graphify/mcp_ingest.py](../../../../sources/safishamsi__graphify/graphify/mcp_ingest.py)<br>[docs/docker-mcp-sqlite.md](../../../../sources/safishamsi__graphify/docs/docker-mcp-sqlite.md) |
| retrieval | 20 | [worked/rsl-siege-manager/GRAPH_REPORT.md](../../../../sources/safishamsi__graphify/worked/rsl-siege-manager/GRAPH_REPORT.md)<br>[worked/rsl-siege-manager/graph.html](../../../../sources/safishamsi__graphify/worked/rsl-siege-manager/graph.html)<br>[worked/rsl-siege-manager/graph.json](../../../../sources/safishamsi__graphify/worked/rsl-siege-manager/graph.json)<br>[worked/mixed-corpus/GRAPH_REPORT.md](../../../../sources/safishamsi__graphify/worked/mixed-corpus/GRAPH_REPORT.md)<br>[worked/mixed-corpus/graph.json](../../../../sources/safishamsi__graphify/worked/mixed-corpus/graph.json)<br>[worked/karpathy-repos/GRAPH_REPORT.md](../../../../sources/safishamsi__graphify/worked/karpathy-repos/GRAPH_REPORT.md)<br>[worked/karpathy-repos/graph.json](../../../../sources/safishamsi__graphify/worked/karpathy-repos/graph.json)<br>[worked/httpx/GRAPH_REPORT.md](../../../../sources/safishamsi__graphify/worked/httpx/GRAPH_REPORT.md) |
| spec | 32 | [ARCHITECTURE.md](../../../../sources/safishamsi__graphify/ARCHITECTURE.md)<br>[worked/example/raw/architecture.md](../../../../sources/safishamsi__graphify/worked/example/raw/architecture.md)<br>[tools/skillgen/fragments/references/shared/extraction-spec-compact.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/references/shared/extraction-spec-compact.md)<br>[tools/skillgen/fragments/references/shared/extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/references/shared/extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__amp__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__amp__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__claude__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__claude__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__claw__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__claw__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__codex__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__codex__references__extraction-spec.md) |
| eval | 195 | [tools/skillgen/fragments/references/shared/extraction-spec-compact.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/references/shared/extraction-spec-compact.md)<br>[tools/skillgen/fragments/references/shared/extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/references/shared/extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__amp__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__amp__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__claude__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__claude__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__claw__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__claw__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__codex__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__codex__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__copilot__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__copilot__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__droid__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__droid__references__extraction-spec.md) |
| security | 4 | [SECURITY.md](../../../../sources/safishamsi__graphify/SECURITY.md)<br>[worked/httpx/raw/auth.py](../../../../sources/safishamsi__graphify/worked/httpx/raw/auth.py)<br>[tests/test_security.py](../../../../sources/safishamsi__graphify/tests/test_security.py)<br>[graphify/security.py](../../../../sources/safishamsi__graphify/graphify/security.py) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/safishamsi__graphify/.github/workflows/ci.yml)<br>[.github/workflows/release-graph.yml](../../../../sources/safishamsi__graphify/.github/workflows/release-graph.yml) |
| container | 1 | [Dockerfile](../../../../sources/safishamsi__graphify/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/safishamsi__graphify/AGENTS.md) |
| docs | 43 | [README.md](../../../../sources/safishamsi__graphify/README.md)<br>[worked/rsl-siege-manager/README.md](../../../../sources/safishamsi__graphify/worked/rsl-siege-manager/README.md)<br>[worked/mixed-corpus/README.md](../../../../sources/safishamsi__graphify/worked/mixed-corpus/README.md)<br>[worked/karpathy-repos/README.md](../../../../sources/safishamsi__graphify/worked/karpathy-repos/README.md)<br>[worked/httpx/README.md](../../../../sources/safishamsi__graphify/worked/httpx/README.md)<br>[worked/example/README.md](../../../../sources/safishamsi__graphify/worked/example/README.md)<br>[docs/docker-mcp-sqlite.md](../../../../sources/safishamsi__graphify/docs/docker-mcp-sqlite.md)<br>[docs/how-it-works.md](../../../../sources/safishamsi__graphify/docs/how-it-works.md) |
| config | 4 | [pyproject.toml](../../../../sources/safishamsi__graphify/pyproject.toml)<br>[uv.lock](../../../../sources/safishamsi__graphify/uv.lock)<br>[tests/fixtures/crate_b/Cargo.toml](../../../../sources/safishamsi__graphify/tests/fixtures/crate_b/Cargo.toml)<br>[tests/fixtures/crate_a/Cargo.toml](../../../../sources/safishamsi__graphify/tests/fixtures/crate_a/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 195 | [tools/skillgen/fragments/references/shared/extraction-spec-compact.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/references/shared/extraction-spec-compact.md)<br>[tools/skillgen/fragments/references/shared/extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/fragments/references/shared/extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__amp__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__amp__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__claude__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__claude__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__claw__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__claw__references__extraction-spec.md)<br>[tools/skillgen/expected/graphify__skills__codex__references__extraction-spec.md](../../../../sources/safishamsi__graphify/tools/skillgen/expected/graphify__skills__codex__references__extraction-spec.md) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/safishamsi__graphify/.github/workflows/ci.yml)<br>[.github/workflows/release-graph.yml](../../../../sources/safishamsi__graphify/.github/workflows/release-graph.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/safishamsi__graphify/Dockerfile) |
| 보안/정책 | 4 | [SECURITY.md](../../../../sources/safishamsi__graphify/SECURITY.md)<br>[worked/httpx/raw/auth.py](../../../../sources/safishamsi__graphify/worked/httpx/raw/auth.py)<br>[tests/test_security.py](../../../../sources/safishamsi__graphify/tests/test_security.py)<br>[graphify/security.py](../../../../sources/safishamsi__graphify/graphify/security.py) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/safishamsi__graphify/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_mcp_ingest.py`, `tests/fixtures/sample.mcp.json`, `graphify/mcp_ingest.py`.
2. entrypoint를 따라 실행 흐름 확인: `tools/skillgen/__main__.py`, `graphify/__main__.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/__init__.py`, `tools/skillgen/__init__.py`.
4. retrieval/memory/indexing 확인: `worked/rsl-siege-manager/GRAPH_REPORT.md`, `worked/rsl-siege-manager/graph.html`, `worked/rsl-siege-manager/graph.json`.
5. test/eval 파일로 동작 검증: `tools/skillgen/fragments/references/shared/extraction-spec-compact.md`, `tools/skillgen/fragments/references/shared/extraction-spec.md`, `tools/skillgen/expected/graphify__skills__amp__references__extraction-spec.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI coding assistant skill Claude Code, Codex, OpenCode, Cursor, Gemini CLI, and more . Turn any folder of code, SQL sche. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
