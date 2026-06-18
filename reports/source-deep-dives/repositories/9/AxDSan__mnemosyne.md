# AxDSan/mnemosyne 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The Zero-Dependency, Sub-Millisecond AI Memory System for Hermes Agents and Everyone Else!

## 요약

- 조사 단위: `sources/AxDSan__mnemosyne` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 327 files, 43 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_mcp_server.py, tests/test_s1_mcp_sse_auth.py, mnemosyne/mcp_server.py이고, 의존성 단서는 claude, codex, mcp, transformers, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | AxDSan/mnemosyne |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1170 |
| Forks | 109 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/AxDSan__mnemosyne](../../../../sources/AxDSan__mnemosyne) |
| 기존 보고서 | [reports/global-trending/repositories/AxDSan__mnemosyne.md](../../../global-trending/repositories/AxDSan__mnemosyne.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 327 / 43 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .agents, .claude, .githooks, .github, assets, deploy, docs, examples, hermes_memory_provider, integrations, mnemosyne, scripts, skills, tests, tools |
| 상위 확장자 | .py: 229, .md: 55, (none): 9, .json: 6, .yml: 6, .ts: 5, .sh: 4, .toml: 3, .yaml: 3, .mdx: 2, .in: 1, .jpg: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 49 |
| tests | validation surface | 49 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| deploy | deployment surface | 1 |
| examples | top-level component | 1 |
| examples/embedding_server.py | examples workspace | 1 |
| hermes_memory_provider | top-level component | 1 |
| integrations | top-level component | 1 |
| mnemosyne | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | mnemosyne-install | mnemosyne-install |
| utility | pyproject.toml | mnemosyne-uninstall | mnemosyne-uninstall |
| utility | pyproject.toml | mnemosyne | mnemosyne |
| utility | pyproject.toml | mnemosyne-browser | mnemosyne-browser |
| utility | pyproject.toml | mnemosyne-auto-save | mnemosyne-auto-save |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp, codex |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/test_mcp_server.py](../../../../sources/AxDSan__mnemosyne/tests/test_mcp_server.py) | mcp signal |
| mcp | [tests/test_s1_mcp_sse_auth.py](../../../../sources/AxDSan__mnemosyne/tests/test_s1_mcp_sse_auth.py) | mcp signal |
| mcp | [mnemosyne/mcp_server.py](../../../../sources/AxDSan__mnemosyne/mnemosyne/mcp_server.py) | mcp signal |
| mcp | [mnemosyne/mcp_tools.py](../../../../sources/AxDSan__mnemosyne/mnemosyne/mcp_tools.py) | mcp signal |
| agentRuntime | [tools/beam_phase3_test.py](../../../../sources/AxDSan__mnemosyne/tools/beam_phase3_test.py) | agentRuntime signal |
| agentRuntime | [tools/bench_100k_fast.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_fast.py) | agentRuntime signal |
| agentRuntime | [tools/bench_100k_gemma.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_gemma.py) | agentRuntime signal |
| agentRuntime | [tools/bench_audit_log.py](../../../../sources/AxDSan__mnemosyne/tools/bench_audit_log.py) | agentRuntime signal |
| entrypoints | [integrations/obsidian-mnemosyne/main.ts](../../../../sources/AxDSan__mnemosyne/integrations/obsidian-mnemosyne/main.ts) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/AxDSan__mnemosyne/pyproject.toml) | config signal |
| config | [requirements-benchmark.txt](../../../../sources/AxDSan__mnemosyne/requirements-benchmark.txt) | config signal |
| config | [uv.lock](../../../../sources/AxDSan__mnemosyne/uv.lock) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [integrations/obsidian-mnemosyne/main.ts](../../../../sources/AxDSan__mnemosyne/integrations/obsidian-mnemosyne/main.ts) |
| agentRuntime | 23 | [tools/beam_phase3_test.py](../../../../sources/AxDSan__mnemosyne/tools/beam_phase3_test.py)<br>[tools/bench_100k_fast.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_fast.py)<br>[tools/bench_100k_gemma.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_gemma.py)<br>[tools/bench_audit_log.py](../../../../sources/AxDSan__mnemosyne/tools/bench_audit_log.py)<br>[tools/bench_nai0.py](../../../../sources/AxDSan__mnemosyne/tools/bench_nai0.py)<br>[tools/bench_nai1.py](../../../../sources/AxDSan__mnemosyne/tools/bench_nai1.py)<br>[tools/bench_nai2.py](../../../../sources/AxDSan__mnemosyne/tools/bench_nai2.py)<br>[tools/bench_rerank.py](../../../../sources/AxDSan__mnemosyne/tools/bench_rerank.py) |
| mcp | 9 | [tests/test_mcp_server.py](../../../../sources/AxDSan__mnemosyne/tests/test_mcp_server.py)<br>[tests/test_s1_mcp_sse_auth.py](../../../../sources/AxDSan__mnemosyne/tests/test_s1_mcp_sse_auth.py)<br>[mnemosyne/mcp_server.py](../../../../sources/AxDSan__mnemosyne/mnemosyne/mcp_server.py)<br>[mnemosyne/mcp_tools.py](../../../../sources/AxDSan__mnemosyne/mnemosyne/mcp_tools.py)<br>[docs/integrations/claude-code-mcp.md](../../../../sources/AxDSan__mnemosyne/docs/integrations/claude-code-mcp.md)<br>[docs/integrations/codex-mcp.md](../../../../sources/AxDSan__mnemosyne/docs/integrations/codex-mcp.md)<br>[docs/integrations/cursor-mcp.md](../../../../sources/AxDSan__mnemosyne/docs/integrations/cursor-mcp.md)<br>[docs/integrations/hermes-mcp.md](../../../../sources/AxDSan__mnemosyne/docs/integrations/hermes-mcp.md) |
| retrieval | 30 | [tests/benchmark_beam_working_memory.py](../../../../sources/AxDSan__mnemosyne/tests/benchmark_beam_working_memory.py)<br>[tests/test_degrade_vector.py](../../../../sources/AxDSan__mnemosyne/tests/test_degrade_vector.py)<br>[tests/test_e5a_vector_voice_dense_rewire.py](../../../../sources/AxDSan__mnemosyne/tests/test_e5a_vector_voice_dense_rewire.py)<br>[tests/test_episodic_stats_vector_fallback.py](../../../../sources/AxDSan__mnemosyne/tests/test_episodic_stats_vector_fallback.py)<br>[tests/test_graph_tools.py](../../../../sources/AxDSan__mnemosyne/tests/test_graph_tools.py)<br>[tests/test_hermes_memory_provider_audit.py](../../../../sources/AxDSan__mnemosyne/tests/test_hermes_memory_provider_audit.py)<br>[tests/test_hermes_memory_provider_diagnose_active_db.py](../../../../sources/AxDSan__mnemosyne/tests/test_hermes_memory_provider_diagnose_active_db.py)<br>[tests/test_hermes_memory_provider_shared_crud.py](../../../../sources/AxDSan__mnemosyne/tests/test_hermes_memory_provider_shared_crud.py) |
| spec | 2 | [requirements-benchmark.txt](../../../../sources/AxDSan__mnemosyne/requirements-benchmark.txt)<br>[docs/architecture.md](../../../../sources/AxDSan__mnemosyne/docs/architecture.md) |
| eval | 136 | [requirements-benchmark.txt](../../../../sources/AxDSan__mnemosyne/requirements-benchmark.txt)<br>[run_beam_bench.sh](../../../../sources/AxDSan__mnemosyne/run_beam_bench.sh)<br>[tools/beam_phase3_test.py](../../../../sources/AxDSan__mnemosyne/tools/beam_phase3_test.py)<br>[tools/bench_100k_fast.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_fast.py)<br>[tools/bench_100k_gemma.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_gemma.py)<br>[tools/bench_audit_log.py](../../../../sources/AxDSan__mnemosyne/tools/bench_audit_log.py)<br>[tools/bench_nai0.py](../../../../sources/AxDSan__mnemosyne/tools/bench_nai0.py)<br>[tools/bench_nai1.py](../../../../sources/AxDSan__mnemosyne/tools/bench_nai1.py) |
| security | 13 | [SECURITY.md](../../../../sources/AxDSan__mnemosyne/SECURITY.md)<br>[tools/bench_audit_log.py](../../../../sources/AxDSan__mnemosyne/tools/bench_audit_log.py)<br>[tests/test_hermes_memory_provider_audit.py](../../../../sources/AxDSan__mnemosyne/tests/test_hermes_memory_provider_audit.py)<br>[tests/test_s1_mcp_sse_auth.py](../../../../sources/AxDSan__mnemosyne/tests/test_s1_mcp_sse_auth.py)<br>[tests/test_vec_dim_guard.py](../../../../sources/AxDSan__mnemosyne/tests/test_vec_dim_guard.py)<br>[scripts/memoria_audit.py](../../../../sources/AxDSan__mnemosyne/scripts/memoria_audit.py)<br>[integrations/hermes/src/mnemosyne_hermes/audit.py](../../../../sources/AxDSan__mnemosyne/integrations/hermes/src/mnemosyne_hermes/audit.py)<br>[hermes_memory_provider/audit.py](../../../../sources/AxDSan__mnemosyne/hermes_memory_provider/audit.py) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/AxDSan__mnemosyne/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/AxDSan__mnemosyne/.github/workflows/release.yml) |
| container | 6 | [docker-compose.yml](../../../../sources/AxDSan__mnemosyne/docker-compose.yml)<br>[Dockerfile](../../../../sources/AxDSan__mnemosyne/Dockerfile)<br>[deploy/sync/Caddyfile](../../../../sources/AxDSan__mnemosyne/deploy/sync/Caddyfile)<br>[deploy/sync/docker-compose.yml](../../../../sources/AxDSan__mnemosyne/deploy/sync/docker-compose.yml)<br>[deploy/sync/fly.toml](../../../../sources/AxDSan__mnemosyne/deploy/sync/fly.toml)<br>[deploy/sync/README.md](../../../../sources/AxDSan__mnemosyne/deploy/sync/README.md) |
| instruction | 0 | 명확하지 않음 |
| docs | 43 | [README.md](../../../../sources/AxDSan__mnemosyne/README.md)<br>[integrations/vscode-mnemosyne/README.md](../../../../sources/AxDSan__mnemosyne/integrations/vscode-mnemosyne/README.md)<br>[integrations/obsidian-mnemosyne/README.md](../../../../sources/AxDSan__mnemosyne/integrations/obsidian-mnemosyne/README.md)<br>[integrations/hermes/README.md](../../../../sources/AxDSan__mnemosyne/integrations/hermes/README.md)<br>[hermes_memory_provider/README.md](../../../../sources/AxDSan__mnemosyne/hermes_memory_provider/README.md)<br>[docs/api-reference.md](../../../../sources/AxDSan__mnemosyne/docs/api-reference.md)<br>[docs/architecture.md](../../../../sources/AxDSan__mnemosyne/docs/architecture.md)<br>[docs/audit-report-2026-05-11.md](../../../../sources/AxDSan__mnemosyne/docs/audit-report-2026-05-11.md) |
| config | 7 | [pyproject.toml](../../../../sources/AxDSan__mnemosyne/pyproject.toml)<br>[requirements-benchmark.txt](../../../../sources/AxDSan__mnemosyne/requirements-benchmark.txt)<br>[uv.lock](../../../../sources/AxDSan__mnemosyne/uv.lock)<br>[integrations/vscode-mnemosyne/package.json](../../../../sources/AxDSan__mnemosyne/integrations/vscode-mnemosyne/package.json)<br>[integrations/vscode-mnemosyne/tsconfig.json](../../../../sources/AxDSan__mnemosyne/integrations/vscode-mnemosyne/tsconfig.json)<br>[integrations/obsidian-mnemosyne/package.json](../../../../sources/AxDSan__mnemosyne/integrations/obsidian-mnemosyne/package.json)<br>[integrations/hermes/pyproject.toml](../../../../sources/AxDSan__mnemosyne/integrations/hermes/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 136 | [requirements-benchmark.txt](../../../../sources/AxDSan__mnemosyne/requirements-benchmark.txt)<br>[run_beam_bench.sh](../../../../sources/AxDSan__mnemosyne/run_beam_bench.sh)<br>[tools/beam_phase3_test.py](../../../../sources/AxDSan__mnemosyne/tools/beam_phase3_test.py)<br>[tools/bench_100k_fast.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_fast.py)<br>[tools/bench_100k_gemma.py](../../../../sources/AxDSan__mnemosyne/tools/bench_100k_gemma.py)<br>[tools/bench_audit_log.py](../../../../sources/AxDSan__mnemosyne/tools/bench_audit_log.py) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/AxDSan__mnemosyne/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/AxDSan__mnemosyne/.github/workflows/release.yml) |
| 컨테이너/배포 | 6 | [docker-compose.yml](../../../../sources/AxDSan__mnemosyne/docker-compose.yml)<br>[Dockerfile](../../../../sources/AxDSan__mnemosyne/Dockerfile)<br>[deploy/sync/Caddyfile](../../../../sources/AxDSan__mnemosyne/deploy/sync/Caddyfile)<br>[deploy/sync/docker-compose.yml](../../../../sources/AxDSan__mnemosyne/deploy/sync/docker-compose.yml)<br>[deploy/sync/fly.toml](../../../../sources/AxDSan__mnemosyne/deploy/sync/fly.toml)<br>[deploy/sync/README.md](../../../../sources/AxDSan__mnemosyne/deploy/sync/README.md) |
| 보안/정책 | 13 | [SECURITY.md](../../../../sources/AxDSan__mnemosyne/SECURITY.md)<br>[tools/bench_audit_log.py](../../../../sources/AxDSan__mnemosyne/tools/bench_audit_log.py)<br>[tests/test_hermes_memory_provider_audit.py](../../../../sources/AxDSan__mnemosyne/tests/test_hermes_memory_provider_audit.py)<br>[tests/test_s1_mcp_sse_auth.py](../../../../sources/AxDSan__mnemosyne/tests/test_s1_mcp_sse_auth.py)<br>[tests/test_vec_dim_guard.py](../../../../sources/AxDSan__mnemosyne/tests/test_vec_dim_guard.py)<br>[scripts/memoria_audit.py](../../../../sources/AxDSan__mnemosyne/scripts/memoria_audit.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_mcp_server.py`, `tests/test_s1_mcp_sse_auth.py`, `mnemosyne/mcp_server.py`.
2. entrypoint를 따라 실행 흐름 확인: `integrations/obsidian-mnemosyne/main.ts`.
3. agent/tool runtime 매핑: `tools/beam_phase3_test.py`, `tools/bench_100k_fast.py`, `tools/bench_100k_gemma.py`.
4. retrieval/memory/indexing 확인: `tests/benchmark_beam_working_memory.py`, `tests/test_degrade_vector.py`, `tests/test_e5a_vector_voice_dense_rewire.py`.
5. test/eval 파일로 동작 검증: `requirements-benchmark.txt`, `run_beam_bench.sh`, `tools/beam_phase3_test.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The Zero Dependency, Sub Millisecond AI Memory System for Hermes Agents and Everyone Else!. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
