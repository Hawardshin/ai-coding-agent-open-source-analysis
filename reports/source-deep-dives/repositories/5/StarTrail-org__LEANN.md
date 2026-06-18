# StarTrail-org/LEANN Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

[MLsys2026]: RAG on Everything with LEANN. Enjoy 97% storage savings while running a fast, accurate, and 100% private RAG application on your personal device.

## 요약

- 조사 단위: `sources/StarTrail-org__LEANN` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 277 files, 72 directories, depth score 122, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/wechat-exporter/main.py, packages/leann-core/src/leann/__main__.py, packages/leann-core/src/leann/server.py이고, 의존성 단서는 openai, llamaindex, llama-index, typer, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | StarTrail-org/LEANN |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | korea |
| Language | Python |
| Stars | 12202 |
| Forks | 1094 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/StarTrail-org__LEANN](../../../../sources/StarTrail-org__LEANN) |
| Existing report | [reports/global-trending/repositories/StarTrail-org__LEANN.md](../../../global-trending/repositories/StarTrail-org__LEANN.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 277 / 72 |
| Max observed depth | 5 |
| Top directories | .devcontainer, .github, apps, assets, benchmarks, data, docker, docs, examples, packages, scripts, skills, sky, tests, videos |
| Top extensions | .py: 164, .md: 46, .png: 13, (none): 10, .toml: 8, .yml: 8, .sh: 5, .gif: 4, .txt: 4, .csv: 2, .json: 2, .pdf: 2 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 62 |
| docs | documentation surface | 29 |
| packages/leann-core | packages workspace | 7 |
| packages/leann-backend-diskann | packages workspace | 6 |
| packages/leann | packages workspace | 2 |
| packages/leann-backend-flashlib | packages workspace | 2 |
| packages/leann-backend-flashlib-ivf | packages workspace | 2 |
| packages/leann-backend-hnsw | packages workspace | 2 |
| packages/leann-backend-ivf | packages workspace | 2 |
| packages/leann-mcp | packages workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| apps/base_rag_example.py | apps workspace | 1 |
| apps/browser_rag.py | apps workspace | 1 |
| apps/chatgpt_rag.py | apps workspace | 1 |
| apps/claude_rag.py | apps workspace | 1 |
| apps/code_rag.py | apps workspace | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | wechat-exporter | wechat-exporter |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | llamaindex, llama-index |
| vectorStores | faiss |
| modelRuntime | torch, transformers, ollama, llama |
| webRuntime | none |
| developerSurface | typer |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [packages/wechat-exporter/main.py](../../../../sources/StarTrail-org__LEANN/packages/wechat-exporter/main.py) | entrypoints signal |
| entrypoints | [packages/leann-core/src/leann/__main__.py](../../../../sources/StarTrail-org__LEANN/packages/leann-core/src/leann/__main__.py) | entrypoints signal |
| entrypoints | [packages/leann-core/src/leann/server.py](../../../../sources/StarTrail-org__LEANN/packages/leann-core/src/leann/server.py) | entrypoints signal |
| container | [tests/openclaw/docker-compose.yml](../../../../sources/StarTrail-org__LEANN/tests/openclaw/docker-compose.yml) | container signal |
| container | [docker/Dockerfile](../../../../sources/StarTrail-org__LEANN/docker/Dockerfile) | container signal |
| container | [docker/Dockerfile.cpu](../../../../sources/StarTrail-org__LEANN/docker/Dockerfile.cpu) | container signal |
| container | [docker/Dockerfile.dev](../../../../sources/StarTrail-org__LEANN/docker/Dockerfile.dev) | container signal |
| config | [pyproject.toml](../../../../sources/StarTrail-org__LEANN/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/StarTrail-org__LEANN/uv.lock) | config signal |
| config | [packages/leann-core/pyproject.toml](../../../../sources/StarTrail-org__LEANN/packages/leann-core/pyproject.toml) | config signal |
| config | [packages/leann-backend-ivf/pyproject.toml](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-ivf/pyproject.toml) | config signal |
| ci | [.github/workflows/build-and-publish.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/build-and-publish.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [packages/wechat-exporter/main.py](../../../../sources/StarTrail-org__LEANN/packages/wechat-exporter/main.py)<br>[packages/leann-core/src/leann/__main__.py](../../../../sources/StarTrail-org__LEANN/packages/leann-core/src/leann/__main__.py)<br>[packages/leann-core/src/leann/server.py](../../../../sources/StarTrail-org__LEANN/packages/leann-core/src/leann/server.py) |
| agentRuntime | 7 | [tests/openclaw/fixtures/MEMORY.md](../../../../sources/StarTrail-org__LEANN/tests/openclaw/fixtures/MEMORY.md)<br>[tests/openclaw/fixtures/memory/2026-02-15.md](../../../../sources/StarTrail-org__LEANN/tests/openclaw/fixtures/memory/2026-02-15.md)<br>[tests/openclaw/fixtures/memory/2026-02-20.md](../../../../sources/StarTrail-org__LEANN/tests/openclaw/fixtures/memory/2026-02-20.md)<br>[tests/openclaw/fixtures/memory/2026-02-25.md](../../../../sources/StarTrail-org__LEANN/tests/openclaw/fixtures/memory/2026-02-25.md)<br>[skills/leann-memory/claw.json](../../../../sources/StarTrail-org__LEANN/skills/leann-memory/claw.json)<br>[skills/leann-memory/instructions.md](../../../../sources/StarTrail-org__LEANN/skills/leann-memory/instructions.md)<br>[skills/leann-memory/README.md](../../../../sources/StarTrail-org__LEANN/skills/leann-memory/README.md) |
| mcp | 10 | [tests/test_mcp_integration.py](../../../../sources/StarTrail-org__LEANN/tests/test_mcp_integration.py)<br>[tests/test_mcp_standalone.py](../../../../sources/StarTrail-org__LEANN/tests/test_mcp_standalone.py)<br>[tests/openclaw/test_mcp_e2e.py](../../../../sources/StarTrail-org__LEANN/tests/openclaw/test_mcp_e2e.py)<br>[tests/openclaw/test_mcp_protocol.py](../../../../sources/StarTrail-org__LEANN/tests/openclaw/test_mcp_protocol.py)<br>[packages/leann-mcp/README.md](../../../../sources/StarTrail-org__LEANN/packages/leann-mcp/README.md)<br>[packages/leann-core/src/leann/mcp.py](../../../../sources/StarTrail-org__LEANN/packages/leann-core/src/leann/mcp.py)<br>[examples/mcp_integration_demo.py](../../../../sources/StarTrail-org__LEANN/examples/mcp_integration_demo.py)<br>[assets/mcp_leann.png](../../../../sources/StarTrail-org__LEANN/assets/mcp_leann.png) |
| retrieval | 49 | [tests/test_document_rag.py](../../../../sources/StarTrail-org__LEANN/tests/test_document_rag.py)<br>[tests/test_embedding_batch_size.py](../../../../sources/StarTrail-org__LEANN/tests/test_embedding_batch_size.py)<br>[tests/test_embedding_prompt_template.py](../../../../sources/StarTrail-org__LEANN/tests/test_embedding_prompt_template.py)<br>[tests/test_embedding_server_cli_flags.py](../../../../sources/StarTrail-org__LEANN/tests/test_embedding_server_cli_flags.py)<br>[tests/test_embedding_server_manager_e2e.py](../../../../sources/StarTrail-org__LEANN/tests/test_embedding_server_manager_e2e.py)<br>[tests/test_embedding_server_manager.py](../../../../sources/StarTrail-org__LEANN/tests/test_embedding_server_manager.py)<br>[tests/support/fake_embedding_server_module.py](../../../../sources/StarTrail-org__LEANN/tests/support/fake_embedding_server_module.py)<br>[tests/openclaw/fixtures/MEMORY.md](../../../../sources/StarTrail-org__LEANN/tests/openclaw/fixtures/MEMORY.md) |
| spec | 1 | [docs/roadmap.md](../../../../sources/StarTrail-org__LEANN/docs/roadmap.md) |
| eval | 61 | [tests/README.md](../../../../sources/StarTrail-org__LEANN/tests/README.md)<br>[tests/test_astchunk_integration.py](../../../../sources/StarTrail-org__LEANN/tests/test_astchunk_integration.py)<br>[tests/test_basic.py](../../../../sources/StarTrail-org__LEANN/tests/test_basic.py)<br>[tests/test_build_from_arrays.py](../../../../sources/StarTrail-org__LEANN/tests/test_build_from_arrays.py)<br>[tests/test_ci_minimal.py](../../../../sources/StarTrail-org__LEANN/tests/test_ci_minimal.py)<br>[tests/test_cli_ask.py](../../../../sources/StarTrail-org__LEANN/tests/test_cli_ask.py)<br>[tests/test_cli_daemon_workflow.py](../../../../sources/StarTrail-org__LEANN/tests/test_cli_daemon_workflow.py)<br>[tests/test_cli_prompt_template.py](../../../../sources/StarTrail-org__LEANN/tests/test_cli_prompt_template.py) |
| security | 0 | not obvious |
| ci | 4 | [.github/workflows/build-and-publish.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/build-and-publish.yml)<br>[.github/workflows/build-reusable.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/build-reusable.yml)<br>[.github/workflows/link-check.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/link-check.yml)<br>[.github/workflows/release-manual.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/release-manual.yml) |
| container | 4 | [tests/openclaw/docker-compose.yml](../../../../sources/StarTrail-org__LEANN/tests/openclaw/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/StarTrail-org__LEANN/docker/Dockerfile)<br>[docker/Dockerfile.cpu](../../../../sources/StarTrail-org__LEANN/docker/Dockerfile.cpu)<br>[docker/Dockerfile.dev](../../../../sources/StarTrail-org__LEANN/docker/Dockerfile.dev) |
| instruction | 1 | [CLAUDE.md](../../../../sources/StarTrail-org__LEANN/CLAUDE.md) |
| docs | 45 | [README.md](../../../../sources/StarTrail-org__LEANN/README.md)<br>[tests/README.md](../../../../sources/StarTrail-org__LEANN/tests/README.md)<br>[skills/leann-memory/README.md](../../../../sources/StarTrail-org__LEANN/skills/leann-memory/README.md)<br>[packages/leann-mcp/README.md](../../../../sources/StarTrail-org__LEANN/packages/leann-mcp/README.md)<br>[packages/leann-core/README.md](../../../../sources/StarTrail-org__LEANN/packages/leann-core/README.md)<br>[packages/leann-backend-ivf/README.md](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-ivf/README.md)<br>[packages/leann-backend-flashlib-ivf/README.md](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-flashlib-ivf/README.md)<br>[packages/leann-backend-flashlib/README.md](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-flashlib/README.md) |
| config | 9 | [pyproject.toml](../../../../sources/StarTrail-org__LEANN/pyproject.toml)<br>[uv.lock](../../../../sources/StarTrail-org__LEANN/uv.lock)<br>[packages/leann-core/pyproject.toml](../../../../sources/StarTrail-org__LEANN/packages/leann-core/pyproject.toml)<br>[packages/leann-backend-ivf/pyproject.toml](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-ivf/pyproject.toml)<br>[packages/leann-backend-hnsw/pyproject.toml](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-hnsw/pyproject.toml)<br>[packages/leann-backend-flashlib-ivf/pyproject.toml](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-flashlib-ivf/pyproject.toml)<br>[packages/leann-backend-flashlib/pyproject.toml](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-flashlib/pyproject.toml)<br>[packages/leann-backend-diskann/pyproject.toml](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-diskann/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 61 | [tests/README.md](../../../../sources/StarTrail-org__LEANN/tests/README.md)<br>[tests/test_astchunk_integration.py](../../../../sources/StarTrail-org__LEANN/tests/test_astchunk_integration.py)<br>[tests/test_basic.py](../../../../sources/StarTrail-org__LEANN/tests/test_basic.py)<br>[tests/test_build_from_arrays.py](../../../../sources/StarTrail-org__LEANN/tests/test_build_from_arrays.py)<br>[tests/test_ci_minimal.py](../../../../sources/StarTrail-org__LEANN/tests/test_ci_minimal.py)<br>[tests/test_cli_ask.py](../../../../sources/StarTrail-org__LEANN/tests/test_cli_ask.py) |
| CI workflows | 4 | [.github/workflows/build-and-publish.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/build-and-publish.yml)<br>[.github/workflows/build-reusable.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/build-reusable.yml)<br>[.github/workflows/link-check.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/link-check.yml)<br>[.github/workflows/release-manual.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/release-manual.yml) |
| Containers / deploy | 4 | [tests/openclaw/docker-compose.yml](../../../../sources/StarTrail-org__LEANN/tests/openclaw/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/StarTrail-org__LEANN/docker/Dockerfile)<br>[docker/Dockerfile.cpu](../../../../sources/StarTrail-org__LEANN/docker/Dockerfile.cpu)<br>[docker/Dockerfile.dev](../../../../sources/StarTrail-org__LEANN/docker/Dockerfile.dev) |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/StarTrail-org__LEANN/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `packages/wechat-exporter/main.py`, `packages/leann-core/src/leann/__main__.py`, `packages/leann-core/src/leann/server.py`.
2. Trace execution through entrypoints: `packages/wechat-exporter/main.py`, `packages/leann-core/src/leann/__main__.py`, `packages/leann-core/src/leann/server.py`.
3. Map agent/tool runtime through: `tests/openclaw/fixtures/MEMORY.md`, `tests/openclaw/fixtures/memory/2026-02-15.md`, `tests/openclaw/fixtures/memory/2026-02-20.md`.
4. Inspect retrieval/memory/indexing through: `tests/test_document_rag.py`, `tests/test_embedding_batch_size.py`, `tests/test_embedding_prompt_template.py`.
5. Verify behavior through test/eval files: `tests/README.md`, `tests/test_astchunk_integration.py`, `tests/test_basic.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 MLsys2026 RAG on Everything with LEANN. Enjoy 97% storage savings while running a fast, accurate, and 100% private RAG a. 핵심 구조 신호는 Python, pyproject.toml, README.md, CLAUDE.md, LICENSE, openai이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
