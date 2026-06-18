# jgravelle/jcodemunch-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

The leading, most token-efficient MCP server for GitHub source code exploration via tree-sitter AST parsing

## 요약

- 조사 단위: `sources/jgravelle__jcodemunch-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 597 files, 67 directories, depth score 124, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/jcodemunch_mcp/__init__.py, src/jcodemunch_mcp/__main__.py, src/jcodemunch_mcp/agent_selector.py이고, 의존성 단서는 openai, anthropic, claude, gemini, mcp, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | jgravelle/jcodemunch-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1924 |
| Forks | 295 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/jgravelle__jcodemunch-mcp](../../../../sources/jgravelle__jcodemunch-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/jgravelle__jcodemunch-mcp.md](../../../global-trending/repositories/jgravelle__jcodemunch-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 597 / 67 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, benchmarks, cli, clients, examples, munch-bench, packaging, scripts, speedreview, src, tests, vscode-extension |
| 상위 확장자 | .py: 466, .md: 42, .json: 17, .yaml: 15, .astro: 10, (none): 8, .yml: 7, .ts: 4, .cshtml: 2, .php: 2, .al: 1, .c: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 99 |
| tests | validation surface | 50 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| cli | top-level component | 1 |
| clients | source boundary | 1 |
| examples | top-level component | 1 |
| examples/otel-collector | examples workspace | 1 |
| munch-bench | validation surface | 1 |
| packaging | top-level component | 1 |
| scripts | top-level component | 1 |
| speedreview | top-level component | 1 |
| vscode-extension | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | jcodemunch-mcp | jcodemunch-mcp |
| utility | pyproject.toml | gcm | gcm |
| utility | pyproject.toml | munch-bench | munch-bench |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude, gemini |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [src/jcodemunch_mcp/__init__.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/__init__.py) | mcp signal |
| mcp | [src/jcodemunch_mcp/__main__.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/__main__.py) | mcp signal |
| mcp | [src/jcodemunch_mcp/agent_selector.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/agent_selector.py) | mcp signal |
| mcp | [src/jcodemunch_mcp/config.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/config.py) | mcp signal |
| agentRuntime | [AGENT_HINTS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENT_HINTS.md) | agentRuntime signal |
| agentRuntime | [AGENT_HOOKS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENT_HOOKS.md) | agentRuntime signal |
| agentRuntime | [AGENT_INSTALL_UNIVERSAL.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENT_INSTALL_UNIVERSAL.md) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENTS.md) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/jgravelle__jcodemunch-mcp/server.json) | entrypoints signal |
| entrypoints | [src/jcodemunch_mcp/server.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/jgravelle__jcodemunch-mcp/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/jgravelle__jcodemunch-mcp/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [server.json](../../../../sources/jgravelle__jcodemunch-mcp/server.json)<br>[src/jcodemunch_mcp/__main__.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/__main__.py)<br>[src/jcodemunch_mcp/server.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/server.py) |
| agentRuntime | 118 | [AGENT_HINTS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENT_HINTS.md)<br>[AGENT_HOOKS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENT_HOOKS.md)<br>[AGENT_INSTALL_UNIVERSAL.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENT_INSTALL_UNIVERSAL.md)<br>[AGENTS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENTS.md)<br>[CONTEXT_PROVIDERS.md](../../../../sources/jgravelle__jcodemunch-mcp/CONTEXT_PROVIDERS.md)<br>[src/jcodemunch_mcp/agent_selector.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/agent_selector.py)<br>[src/jcodemunch_mcp/hook_event.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/hook_event.py)<br>[src/jcodemunch_mcp/tools/__init__.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/tools/__init__.py) |
| mcp | 215 | [src/jcodemunch_mcp/__init__.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/__init__.py)<br>[src/jcodemunch_mcp/__main__.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/__main__.py)<br>[src/jcodemunch_mcp/agent_selector.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/agent_selector.py)<br>[src/jcodemunch_mcp/config.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/config.py)<br>[src/jcodemunch_mcp/credentials.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/credentials.py)<br>[src/jcodemunch_mcp/hook_event.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/hook_event.py)<br>[src/jcodemunch_mcp/path_map.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/path_map.py)<br>[src/jcodemunch_mcp/progress.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/progress.py) |
| retrieval | 32 | [tests/test_call_graph_ast.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_call_graph_ast.py)<br>[tests/test_delete_index_cli.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_delete_index_cli.py)<br>[tests/test_dependency_graph_imports_alias.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_dependency_graph_imports_alias.py)<br>[tests/test_embed_drift.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_embed_drift.py)<br>[tests/test_index_file.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_index_file.py)<br>[tests/test_retrieval_tools.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_retrieval_tools.py)<br>[tests/test_watcher_memory_cache.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_watcher_memory_cache.py)<br>[src/jcodemunch_mcp/tools/_call_graph.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/tools/_call_graph.py) |
| spec | 5 | [ARCHITECTURE.md](../../../../sources/jgravelle__jcodemunch-mcp/ARCHITECTURE.md)<br>[SPEC_MUNCH.md](../../../../sources/jgravelle__jcodemunch-mcp/SPEC_MUNCH.md)<br>[SPEC.md](../../../../sources/jgravelle__jcodemunch-mcp/SPEC.md)<br>[tests/test_architecture_tools.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_architecture_tools.py)<br>[benchmarks/requirements-rag-bench.txt](../../../../sources/jgravelle__jcodemunch-mcp/benchmarks/requirements-rag-bench.txt) |
| eval | 298 | [SPEC_MUNCH.md](../../../../sources/jgravelle__jcodemunch-mcp/SPEC_MUNCH.md)<br>[SPEC.md](../../../../sources/jgravelle__jcodemunch-mcp/SPEC.md)<br>[tests/__init__.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/__init__.py)<br>[tests/conftest_helpers.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/conftest_helpers.py)<br>[tests/conftest.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/conftest.py)<br>[tests/test_adaptive_languages.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_adaptive_languages.py)<br>[tests/test_agent_selector.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_agent_selector.py)<br>[tests/test_al.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_al.py) |
| security | 7 | [SECURITY.md](../../../../sources/jgravelle__jcodemunch-mcp/SECURITY.md)<br>[tests/test_audit_agent_config.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_audit_agent_config.py)<br>[tests/test_claude_md_policy.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_claude_md_policy.py)<br>[tests/test_security.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_security.py)<br>[src/jcodemunch_mcp/security.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/security.py)<br>[src/jcodemunch_mcp/tools/audit_agent_config.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/tools/audit_agent_config.py)<br>[benchmarks/ab-test-naming-audit-2026-03-18.md](../../../../sources/jgravelle__jcodemunch-mcp/benchmarks/ab-test-naming-audit-2026-03-18.md) |
| ci | 4 | [.github/workflows/health-radar-comment.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/health-radar-comment.yml)<br>[.github/workflows/health-radar.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/health-radar.yml)<br>[.github/workflows/sign-release.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/sign-release.yml)<br>[.github/workflows/test.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/test.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/jgravelle__jcodemunch-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/jgravelle__jcodemunch-mcp/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/jgravelle__jcodemunch-mcp/CLAUDE.md) |
| docs | 9 | [README.md](../../../../sources/jgravelle__jcodemunch-mcp/README.md)<br>[vscode-extension/README.md](../../../../sources/jgravelle__jcodemunch-mcp/vscode-extension/README.md)<br>[speedreview/README.md](../../../../sources/jgravelle__jcodemunch-mcp/speedreview/README.md)<br>[examples/otel-collector/README.md](../../../../sources/jgravelle__jcodemunch-mcp/examples/otel-collector/README.md)<br>[clients/ts/README.md](../../../../sources/jgravelle__jcodemunch-mcp/clients/ts/README.md)<br>[cli/README.md](../../../../sources/jgravelle__jcodemunch-mcp/cli/README.md)<br>[benchmarks/README.md](../../../../sources/jgravelle__jcodemunch-mcp/benchmarks/README.md)<br>[benchmarks/token_baselines/README.md](../../../../sources/jgravelle__jcodemunch-mcp/benchmarks/token_baselines/README.md) |
| config | 5 | [pyproject.toml](../../../../sources/jgravelle__jcodemunch-mcp/pyproject.toml)<br>[uv.lock](../../../../sources/jgravelle__jcodemunch-mcp/uv.lock)<br>[vscode-extension/package.json](../../../../sources/jgravelle__jcodemunch-mcp/vscode-extension/package.json)<br>[vscode-extension/tsconfig.json](../../../../sources/jgravelle__jcodemunch-mcp/vscode-extension/tsconfig.json)<br>[benchmarks/requirements-rag-bench.txt](../../../../sources/jgravelle__jcodemunch-mcp/benchmarks/requirements-rag-bench.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 298 | [SPEC_MUNCH.md](../../../../sources/jgravelle__jcodemunch-mcp/SPEC_MUNCH.md)<br>[SPEC.md](../../../../sources/jgravelle__jcodemunch-mcp/SPEC.md)<br>[tests/__init__.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/__init__.py)<br>[tests/conftest_helpers.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/conftest_helpers.py)<br>[tests/conftest.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/conftest.py)<br>[tests/test_adaptive_languages.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_adaptive_languages.py) |
| CI workflow | 4 | [.github/workflows/health-radar-comment.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/health-radar-comment.yml)<br>[.github/workflows/health-radar.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/health-radar.yml)<br>[.github/workflows/sign-release.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/sign-release.yml)<br>[.github/workflows/test.yml](../../../../sources/jgravelle__jcodemunch-mcp/.github/workflows/test.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/jgravelle__jcodemunch-mcp/docker-compose.yml)<br>[Dockerfile](../../../../sources/jgravelle__jcodemunch-mcp/Dockerfile) |
| 보안/정책 | 7 | [SECURITY.md](../../../../sources/jgravelle__jcodemunch-mcp/SECURITY.md)<br>[tests/test_audit_agent_config.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_audit_agent_config.py)<br>[tests/test_claude_md_policy.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_claude_md_policy.py)<br>[tests/test_security.py](../../../../sources/jgravelle__jcodemunch-mcp/tests/test_security.py)<br>[src/jcodemunch_mcp/security.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/security.py)<br>[src/jcodemunch_mcp/tools/audit_agent_config.py](../../../../sources/jgravelle__jcodemunch-mcp/src/jcodemunch_mcp/tools/audit_agent_config.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/jgravelle__jcodemunch-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/jgravelle__jcodemunch-mcp/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/jcodemunch_mcp/__init__.py`, `src/jcodemunch_mcp/__main__.py`, `src/jcodemunch_mcp/agent_selector.py`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `src/jcodemunch_mcp/__main__.py`, `src/jcodemunch_mcp/server.py`.
3. agent/tool runtime 매핑: `AGENT_HINTS.md`, `AGENT_HOOKS.md`, `AGENT_INSTALL_UNIVERSAL.md`.
4. retrieval/memory/indexing 확인: `tests/test_call_graph_ast.py`, `tests/test_delete_index_cli.py`, `tests/test_dependency_graph_imports_alias.py`.
5. test/eval 파일로 동작 검증: `SPEC_MUNCH.md`, `SPEC.md`, `tests/__init__.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The leading, most token efficient MCP server for GitHub source code exploration via tree sitter AST parsing. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
