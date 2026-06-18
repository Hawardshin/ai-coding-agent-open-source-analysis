# iikarus/Dragon-Brain 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Dragon Brain — persistent long-term memory for AI agents via MCP (Model Context Protocol). Knowledge graph (FalkorDB) + vector search (Qdrant) + CUDA GPU embeddings. Works with Claude, Gemini CLI, Cursor, Windsurf, VS Code Copilot. 30 tools, 1121 tests.

## 요약

- 조사 단위: `sources/iikarus__Dragon-Brain` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 352 files, 33 directories, depth score 121, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_config.example.json, mcp_config.json, scripts/mcp_smoke_test.py이고, 의존성 단서는 claude, mcp, fastapi, pydantic, transformers, qdrant, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | iikarus/Dragon-Brain |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 48 |
| Forks | 7 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/iikarus__Dragon-Brain](../../../../sources/iikarus__Dragon-Brain) |
| 기존 보고서 | [reports/llm-wiki/repositories/iikarus__Dragon-Brain.md](../../../llm-wiki/repositories/iikarus__Dragon-Brain.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 352 / 33 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, benchmarks, demos, docs, process, scripts, src, tests |
| 상위 확장자 | .py: 229, .md: 93, .ps1: 7, (none): 5, .txt: 4, .json: 3, .toml: 3, .bat: 2, .yml: 2, .ini: 1, .lock: 1, .png: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 57 |
| docs | documentation surface | 44 |
| src | source boundary | 30 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| demos | top-level component | 1 |
| process | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | dragon-brain | dragon-brain |
| utility | pyproject.toml | claude-memory | claude-memory |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | qdrant |
| modelRuntime | transformers |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [mcp_config.example.json](../../../../sources/iikarus__Dragon-Brain/mcp_config.example.json) | mcp signal |
| mcp | [mcp_config.json](../../../../sources/iikarus__Dragon-Brain/mcp_config.json) | mcp signal |
| mcp | [scripts/mcp_smoke_test.py](../../../../sources/iikarus__Dragon-Brain/scripts/mcp_smoke_test.py) | mcp signal |
| mcp | [scripts/run_mcp_server.ps1](../../../../sources/iikarus__Dragon-Brain/scripts/run_mcp_server.ps1) | mcp signal |
| agentRuntime | [src/claude_memory/context_manager.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/context_manager.py) | agentRuntime signal |
| agentRuntime | [src/claude_memory/tools_extra.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/tools_extra.py) | agentRuntime signal |
| agentRuntime | [src/claude_memory/tools.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/tools.py) | agentRuntime signal |
| agentRuntime | [scripts/hooks/branch_write_guard.py](../../../../sources/iikarus__Dragon-Brain/scripts/hooks/branch_write_guard.py) | agentRuntime signal |
| entrypoints | [src/claude_memory/server.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/iikarus__Dragon-Brain/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/iikarus__Dragon-Brain/pyproject.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/iikarus__Dragon-Brain/.github/workflows/ci.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/claude_memory/server.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/server.py) |
| agentRuntime | 6 | [src/claude_memory/context_manager.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/context_manager.py)<br>[src/claude_memory/tools_extra.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/tools_extra.py)<br>[src/claude_memory/tools.py](../../../../sources/iikarus__Dragon-Brain/src/claude_memory/tools.py)<br>[scripts/hooks/branch_write_guard.py](../../../../sources/iikarus__Dragon-Brain/scripts/hooks/branch_write_guard.py)<br>[scripts/hooks/inject_handoff_hash.py](../../../../sources/iikarus__Dragon-Brain/scripts/hooks/inject_handoff_hash.py)<br>[benchmarks/longmemeval/runner.py](../../../../sources/iikarus__Dragon-Brain/benchmarks/longmemeval/runner.py) |
| mcp | 7 | [mcp_config.example.json](../../../../sources/iikarus__Dragon-Brain/mcp_config.example.json)<br>[mcp_config.json](../../../../sources/iikarus__Dragon-Brain/mcp_config.json)<br>[scripts/mcp_smoke_test.py](../../../../sources/iikarus__Dragon-Brain/scripts/mcp_smoke_test.py)<br>[scripts/run_mcp_server.ps1](../../../../sources/iikarus__Dragon-Brain/scripts/run_mcp_server.ps1)<br>[scripts/verify_mcp_server.py](../../../../sources/iikarus__Dragon-Brain/scripts/verify_mcp_server.py)<br>[scripts/internal/verify_mcp_server.py](../../../../sources/iikarus__Dragon-Brain/scripts/internal/verify_mcp_server.py)<br>[docs/MCP_TOOL_REFERENCE.md](../../../../sources/iikarus__Dragon-Brain/docs/MCP_TOOL_REFERENCE.md) |
| retrieval | 66 | [tests/unit/test_analyze_graph.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_analyze_graph.py)<br>[tests/unit/test_archive_vector_cleanup.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_archive_vector_cleanup.py)<br>[tests/unit/test_diff_knowledge_state.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_diff_knowledge_state.py)<br>[tests/unit/test_embedding_client.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_embedding_client.py)<br>[tests/unit/test_embedding_coverage.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_embedding_coverage.py)<br>[tests/unit/test_embedding_filter.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_embedding_filter.py)<br>[tests/unit/test_embedding_retry.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_embedding_retry.py)<br>[tests/unit/test_embedding_server.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_embedding_server.py) |
| spec | 33 | [requirements.lock](../../../../sources/iikarus__Dragon-Brain/requirements.lock)<br>[tests/integration/test_spec_pr5.py](../../../../sources/iikarus__Dragon-Brain/tests/integration/test_spec_pr5.py)<br>[process/REMEDIATION_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/REMEDIATION_AUDIT_SPEC.md)<br>[process/REMEDIATION_BUILD_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/REMEDIATION_BUILD_SPEC.md)<br>[process/issues/14_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14_AUDIT_SPEC.md)<br>[process/issues/14_BUILD_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14_BUILD_SPEC.md)<br>[process/issues/14a_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14a_AUDIT_SPEC.md)<br>[process/issues/14a_BUILD_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14a_BUILD_SPEC.md) |
| eval | 144 | [tests/__init__.py](../../../../sources/iikarus__Dragon-Brain/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/iikarus__Dragon-Brain/tests/conftest.py)<br>[tests/e2e_functional.py](../../../../sources/iikarus__Dragon-Brain/tests/e2e_functional.py)<br>[tests/test_schema.py](../../../../sources/iikarus__Dragon-Brain/tests/test_schema.py)<br>[tests/unit/conftest.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/conftest.py)<br>[tests/unit/test_ablation.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_ablation.py)<br>[tests/unit/test_activation_radar.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_activation_radar.py)<br>[tests/unit/test_activation.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_activation.py) |
| security | 13 | [audit_hammer.txt](../../../../sources/iikarus__Dragon-Brain/audit_hammer.txt)<br>[audit_polish.txt](../../../../sources/iikarus__Dragon-Brain/audit_polish.txt)<br>[audit_pulse.txt](../../../../sources/iikarus__Dragon-Brain/audit_pulse.txt)<br>[scripts/hooks/branch_write_guard.py](../../../../sources/iikarus__Dragon-Brain/scripts/hooks/branch_write_guard.py)<br>[process/REMEDIATION_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/REMEDIATION_AUDIT_SPEC.md)<br>[process/issues/14_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14_AUDIT_SPEC.md)<br>[process/issues/14a_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14a_AUDIT_SPEC.md)<br>[process/issues/14b_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14b_AUDIT_SPEC.md) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/iikarus__Dragon-Brain/.github/workflows/ci.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/iikarus__Dragon-Brain/docker-compose.yml)<br>[Dockerfile](../../../../sources/iikarus__Dragon-Brain/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/iikarus__Dragon-Brain/CLAUDE.md) |
| docs | 60 | [README.de.md](../../../../sources/iikarus__Dragon-Brain/README.de.md)<br>[README.es.md](../../../../sources/iikarus__Dragon-Brain/README.es.md)<br>[README.fr.md](../../../../sources/iikarus__Dragon-Brain/README.fr.md)<br>[README.ja.md](../../../../sources/iikarus__Dragon-Brain/README.ja.md)<br>[README.ko.md](../../../../sources/iikarus__Dragon-Brain/README.ko.md)<br>[README.md](../../../../sources/iikarus__Dragon-Brain/README.md)<br>[README.pt-BR.md](../../../../sources/iikarus__Dragon-Brain/README.pt-BR.md)<br>[README.ru.md](../../../../sources/iikarus__Dragon-Brain/README.ru.md) |
| config | 1 | [pyproject.toml](../../../../sources/iikarus__Dragon-Brain/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 144 | [tests/__init__.py](../../../../sources/iikarus__Dragon-Brain/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/iikarus__Dragon-Brain/tests/conftest.py)<br>[tests/e2e_functional.py](../../../../sources/iikarus__Dragon-Brain/tests/e2e_functional.py)<br>[tests/test_schema.py](../../../../sources/iikarus__Dragon-Brain/tests/test_schema.py)<br>[tests/unit/conftest.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/conftest.py)<br>[tests/unit/test_ablation.py](../../../../sources/iikarus__Dragon-Brain/tests/unit/test_ablation.py) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/iikarus__Dragon-Brain/.github/workflows/ci.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/iikarus__Dragon-Brain/docker-compose.yml)<br>[Dockerfile](../../../../sources/iikarus__Dragon-Brain/Dockerfile) |
| 보안/정책 | 13 | [audit_hammer.txt](../../../../sources/iikarus__Dragon-Brain/audit_hammer.txt)<br>[audit_polish.txt](../../../../sources/iikarus__Dragon-Brain/audit_polish.txt)<br>[audit_pulse.txt](../../../../sources/iikarus__Dragon-Brain/audit_pulse.txt)<br>[scripts/hooks/branch_write_guard.py](../../../../sources/iikarus__Dragon-Brain/scripts/hooks/branch_write_guard.py)<br>[process/REMEDIATION_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/REMEDIATION_AUDIT_SPEC.md)<br>[process/issues/14_AUDIT_SPEC.md](../../../../sources/iikarus__Dragon-Brain/process/issues/14_AUDIT_SPEC.md) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/iikarus__Dragon-Brain/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp_config.example.json`, `mcp_config.json`, `scripts/mcp_smoke_test.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/claude_memory/server.py`.
3. agent/tool runtime 매핑: `src/claude_memory/context_manager.py`, `src/claude_memory/tools_extra.py`, `src/claude_memory/tools.py`.
4. retrieval/memory/indexing 확인: `tests/unit/test_analyze_graph.py`, `tests/unit/test_archive_vector_cleanup.py`, `tests/unit/test_diff_knowledge_state.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/e2e_functional.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Dragon Brain — persistent long term memory for AI agents via MCP Model Context Protocol . Knowledge graph FalkorDB + vec. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
