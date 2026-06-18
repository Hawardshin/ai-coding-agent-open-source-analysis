# apocas/restai Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

RESTai is an AIaaS (AI as a Service) open-source platform. Supports many public and local LLM suported by Ollama/vLLM/etc. Precise embeddings usage, tuning, analytics etc. Built-in image/audio generation with dynamic loading generators. Live chat deployment. Built-in block based graphical language. Prompt versioning and much more...

## 요약

- 조사 단위: `sources/apocas__restai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 843 files, 150 directories, depth score 131, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.py, restai/main.py, integrations/widget_test/server.js이고, 의존성 단서는 openai, anthropic, claude, gemini, mcp, langchain, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | apocas/restai |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 510 |
| Forks | 103 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/apocas__restai](../../../../sources/apocas__restai) |
| Existing report | [reports/global-trending/repositories/apocas__restai.md](../../../global-trending/repositories/apocas__restai.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 843 / 150 |
| Max observed depth | 10 |
| Top directories | .github, apps, chart, crons, docker, docs, embeddings, examples, frontend, integrations, migrations, modules, readme, restai, tests, userland, worker_envs |
| Top extensions | .py: 410, .jsx: 178, .js: 49, .png: 46, .php: 25, .json: 17, (none): 16, .jpg: 12, .sh: 12, .yaml: 11, .md: 9, .html: 7 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 52 |
| examples/python | examples workspace | 5 |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| chart | top-level component | 1 |
| crons | top-level component | 1 |
| docker | documentation surface | 1 |
| embeddings | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| examples/widget | examples workspace | 1 |
| frontend | top-level component | 1 |
| integrations | top-level component | 1 |
| migrations | top-level component | 1 |
| modules | top-level component | 1 |
| readme | top-level component | 1 |
| restai | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | start | make start |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | database | make database |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | frontend | make frontend |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | dev | make dev |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | systemd | make systemd |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | installgpu | make installgpu |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | envs | make envs |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | migrate | make migrate |
| utility | pyproject.toml | restai | restai |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude, gemini |
| agentProtocols | mcp |
| agentFrameworks | langchain, llama-index |
| vectorStores | chroma, weaviate, pgvector |
| modelRuntime | torch, transformers, vllm, ollama, llama |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [main.py](../../../../sources/apocas__restai/main.py) | entrypoints signal |
| entrypoints | [restai/main.py](../../../../sources/apocas__restai/restai/main.py) | entrypoints signal |
| entrypoints | [integrations/widget_test/server.js](../../../../sources/apocas__restai/integrations/widget_test/server.js) | entrypoints signal |
| entrypoints | [frontend/src/index.jsx](../../../../sources/apocas__restai/frontend/src/index.jsx) | entrypoints signal |
| container | [docker-compose.yml](../../../../sources/apocas__restai/docker-compose.yml) | container signal |
| container | [Dockerfile](../../../../sources/apocas__restai/Dockerfile) | container signal |
| container | [integrations/wordpress/docker-compose.yml](../../../../sources/apocas__restai/integrations/wordpress/docker-compose.yml) | container signal |
| container | [docker/app-runtime/Dockerfile](../../../../sources/apocas__restai/docker/app-runtime/Dockerfile) | container signal |
| config | [Makefile](../../../../sources/apocas__restai/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/apocas__restai/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/apocas__restai/uv.lock) | config signal |
| config | [integrations/widget_test/package.json](../../../../sources/apocas__restai/integrations/widget_test/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [main.py](../../../../sources/apocas__restai/main.py)<br>[restai/main.py](../../../../sources/apocas__restai/restai/main.py)<br>[integrations/widget_test/server.js](../../../../sources/apocas__restai/integrations/widget_test/server.js)<br>[frontend/src/index.jsx](../../../../sources/apocas__restai/frontend/src/index.jsx)<br>[examples/python/image_categorization/main.py](../../../../sources/apocas__restai/examples/python/image_categorization/main.py)<br>[examples/python/describe_video/main.py](../../../../sources/apocas__restai/examples/python/describe_video/main.py) |
| agentRuntime | 66 | [userland/tools/__init__.py](../../../../sources/apocas__restai/userland/tools/__init__.py)<br>[userland/tools/.gitkeep](../../../../sources/apocas__restai/userland/tools/.gitkeep)<br>[restai/tools.py](../../../../sources/apocas__restai/restai/tools.py)<br>[restai/vectordb/tools.py](../../../../sources/apocas__restai/restai/vectordb/tools.py)<br>[restai/routers/tools.py](../../../../sources/apocas__restai/restai/routers/tools.py)<br>[restai/routers/projects/memory.py](../../../../sources/apocas__restai/restai/routers/projects/memory.py)<br>[restai/routers/projects/tools.py](../../../../sources/apocas__restai/restai/routers/projects/tools.py)<br>[restai/projects/agent_shared.py](../../../../sources/apocas__restai/restai/projects/agent_shared.py) |
| mcp | 6 | [tests/test_agent2_mcp_validation.py](../../../../sources/apocas__restai/tests/test_agent2_mcp_validation.py)<br>[tests/test_mcp_probe_rce.py](../../../../sources/apocas__restai/tests/test_mcp_probe_rce.py)<br>[tests/test_mcp_ssrf.py](../../../../sources/apocas__restai/tests/test_mcp_ssrf.py)<br>[tests/test_mcp.py](../../../../sources/apocas__restai/tests/test_mcp.py)<br>[restai/integrations/mcp.py](../../../../sources/apocas__restai/restai/integrations/mcp.py)<br>[restai/agent2/mcp_client.py](../../../../sources/apocas__restai/restai/agent2/mcp_client.py) |
| retrieval | 46 | [tests/test_agent2_memory.py](../../../../sources/apocas__restai/tests/test_agent2_memory.py)<br>[tests/test_bulk_ingest.py](../../../../sources/apocas__restai/tests/test_bulk_ingest.py)<br>[tests/test_knowledge_graph.py](../../../../sources/apocas__restai/tests/test_knowledge_graph.py)<br>[restai/embedding.py](../../../../sources/apocas__restai/restai/embedding.py)<br>[restai/routers/bulk_ingest.py](../../../../sources/apocas__restai/restai/routers/bulk_ingest.py)<br>[restai/routers/projects/memory.py](../../../../sources/apocas__restai/restai/routers/projects/memory.py)<br>[restai/projects/rag.py](../../../../sources/apocas__restai/restai/projects/rag.py)<br>[restai/memory/__init__.py](../../../../sources/apocas__restai/restai/memory/__init__.py) |
| spec | 1 | [examples/python/requirements.txt](../../../../sources/apocas__restai/examples/python/requirements.txt) |
| eval | 103 | [tests/__init__.py](../../../../sources/apocas__restai/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/apocas__restai/tests/conftest.py)<br>[tests/test_admin_endpoints.py](../../../../sources/apocas__restai/tests/test_admin_endpoints.py)<br>[tests/test_agent2_compression.py](../../../../sources/apocas__restai/tests/test_agent2_compression.py)<br>[tests/test_agent2_mcp_validation.py](../../../../sources/apocas__restai/tests/test_agent2_mcp_validation.py)<br>[tests/test_agent2_memory.py](../../../../sources/apocas__restai/tests/test_agent2_memory.py)<br>[tests/test_agent2_providers.py](../../../../sources/apocas__restai/tests/test_agent2_providers.py)<br>[tests/test_agent2_react_prompt.py](../../../../sources/apocas__restai/tests/test_agent2_react_prompt.py) |
| security | 19 | [SECURITY.md](../../../../sources/apocas__restai/SECURITY.md)<br>[tests/test_audit.py](../../../../sources/apocas__restai/tests/test_audit.py)<br>[tests/test_auth.py](../../../../sources/apocas__restai/tests/test_auth.py)<br>[tests/test_helper_security.py](../../../../sources/apocas__restai/tests/test_helper_security.py)<br>[tests/test_security.py](../../../../sources/apocas__restai/tests/test_security.py)<br>[restai/auth.py](../../../../sources/apocas__restai/restai/auth.py)<br>[restai/routers/auth.py](../../../../sources/apocas__restai/restai/routers/auth.py)<br>[restai/observability/audit.py](../../../../sources/apocas__restai/restai/observability/audit.py) |
| ci | 3 | [.github/workflows/docker-publish.yml](../../../../sources/apocas__restai/.github/workflows/docker-publish.yml)<br>[.github/workflows/publish.yml](../../../../sources/apocas__restai/.github/workflows/publish.yml)<br>[.github/workflows/tests.yml](../../../../sources/apocas__restai/.github/workflows/tests.yml) |
| container | 4 | [docker-compose.yml](../../../../sources/apocas__restai/docker-compose.yml)<br>[Dockerfile](../../../../sources/apocas__restai/Dockerfile)<br>[integrations/wordpress/docker-compose.yml](../../../../sources/apocas__restai/integrations/wordpress/docker-compose.yml)<br>[docker/app-runtime/Dockerfile](../../../../sources/apocas__restai/docker/app-runtime/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/apocas__restai/CLAUDE.md) |
| docs | 66 | [README.md](../../../../sources/apocas__restai/README.md)<br>[readme/assets/agent.png](../../../../sources/apocas__restai/readme/assets/agent.png)<br>[readme/assets/analytics.png](../../../../sources/apocas__restai/readme/assets/analytics.png)<br>[readme/assets/audit.png](../../../../sources/apocas__restai/readme/assets/audit.png)<br>[readme/assets/authentication.png](../../../../sources/apocas__restai/readme/assets/authentication.png)<br>[readme/assets/block.png](../../../../sources/apocas__restai/readme/assets/block.png)<br>[readme/assets/branding.png](../../../../sources/apocas__restai/readme/assets/branding.png)<br>[readme/assets/classifier.png](../../../../sources/apocas__restai/readme/assets/classifier.png) |
| config | 6 | [Makefile](../../../../sources/apocas__restai/Makefile)<br>[pyproject.toml](../../../../sources/apocas__restai/pyproject.toml)<br>[uv.lock](../../../../sources/apocas__restai/uv.lock)<br>[integrations/widget_test/package.json](../../../../sources/apocas__restai/integrations/widget_test/package.json)<br>[frontend/package.json](../../../../sources/apocas__restai/frontend/package.json)<br>[examples/python/requirements.txt](../../../../sources/apocas__restai/examples/python/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 103 | [tests/__init__.py](../../../../sources/apocas__restai/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/apocas__restai/tests/conftest.py)<br>[tests/test_admin_endpoints.py](../../../../sources/apocas__restai/tests/test_admin_endpoints.py)<br>[tests/test_agent2_compression.py](../../../../sources/apocas__restai/tests/test_agent2_compression.py)<br>[tests/test_agent2_mcp_validation.py](../../../../sources/apocas__restai/tests/test_agent2_mcp_validation.py)<br>[tests/test_agent2_memory.py](../../../../sources/apocas__restai/tests/test_agent2_memory.py) |
| CI workflows | 3 | [.github/workflows/docker-publish.yml](../../../../sources/apocas__restai/.github/workflows/docker-publish.yml)<br>[.github/workflows/publish.yml](../../../../sources/apocas__restai/.github/workflows/publish.yml)<br>[.github/workflows/tests.yml](../../../../sources/apocas__restai/.github/workflows/tests.yml) |
| Containers / deploy | 4 | [docker-compose.yml](../../../../sources/apocas__restai/docker-compose.yml)<br>[Dockerfile](../../../../sources/apocas__restai/Dockerfile)<br>[integrations/wordpress/docker-compose.yml](../../../../sources/apocas__restai/integrations/wordpress/docker-compose.yml)<br>[docker/app-runtime/Dockerfile](../../../../sources/apocas__restai/docker/app-runtime/Dockerfile) |
| Security / policy | 19 | [SECURITY.md](../../../../sources/apocas__restai/SECURITY.md)<br>[tests/test_audit.py](../../../../sources/apocas__restai/tests/test_audit.py)<br>[tests/test_auth.py](../../../../sources/apocas__restai/tests/test_auth.py)<br>[tests/test_helper_security.py](../../../../sources/apocas__restai/tests/test_helper_security.py)<br>[tests/test_security.py](../../../../sources/apocas__restai/tests/test_security.py)<br>[restai/auth.py](../../../../sources/apocas__restai/restai/auth.py) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/apocas__restai/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `main.py`, `restai/main.py`, `integrations/widget_test/server.js`.
2. Trace execution through entrypoints: `main.py`, `restai/main.py`, `integrations/widget_test/server.js`.
3. Map agent/tool runtime through: `userland/tools/__init__.py`, `userland/tools/.gitkeep`, `restai/tools.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_agent2_memory.py`, `tests/test_bulk_ingest.py`, `tests/test_knowledge_graph.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/test_admin_endpoints.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 RESTai is an AIaaS AI as a Service open source platform. Supports many public and local LLM suported by Ollama/vLLM/etc.. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, Makefile, README.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
