# yusufkaraaslan/Skill_Seekers Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Convert documentation websites, GitHub repositories, and PDFs into Claude AI skills with automatic conflict detection

## 요약

- 조사 단위: `sources/yusufkaraaslan__Skill_Seekers` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,984 files, 155 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, example-mcp-config.json, render-mcp.yaml이고, 의존성 단서는 openai, anthropic, claude, gemini, mcp, langchain, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | yusufkaraaslan/Skill_Seekers |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 14134 |
| Forks | 1453 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/yusufkaraaslan__Skill_Seekers](../../../../sources/yusufkaraaslan__Skill_Seekers) |
| Existing report | [reports/llm-wiki/repositories/yusufkaraaslan__Skill_Seekers.md](../../../llm-wiki/repositories/yusufkaraaslan__Skill_Seekers.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2984 / 155 |
| Max observed depth | 7 |
| Top directories | .claude, .codex-plugin, .github, api, configs, distribution, docs, examples, helm, scripts, skills, src, templates, tests |
| Top extensions | .html: 1992, .py: 459, .md: 304, .yaml: 83, .png: 31, .json: 22, .svg: 21, .txt: 17, .yml: 13, .sh: 9, (none): 6, .js: 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 108 |
| src | source boundary | 64 |
| docs | documentation surface | 30 |
| examples/cursor-react-skill | examples workspace | 8 |
| api | source boundary | 4 |
| examples/chroma-example | examples workspace | 3 |
| examples/cline-django-assistant | examples workspace | 3 |
| examples/continue-dev-universal | examples workspace | 3 |
| examples/faiss-example | examples workspace | 3 |
| examples/haystack-pipeline | examples workspace | 3 |
| examples/langchain-rag-pipeline | examples workspace | 3 |
| examples/llama-index-query-engine | examples workspace | 3 |
| examples/pinecone-upsert | examples workspace | 3 |
| examples/qdrant-example | examples workspace | 3 |
| examples/weaviate-example | examples workspace | 3 |
| examples/windsurf-fastapi-context | examples workspace | 3 |
| .github | ci surface | 1 |
| configs | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | skill-seekers | skill-seekers |
| utility | pyproject.toml | skill-seekers-create | skill-seekers-create |
| utility | pyproject.toml | skill-seekers-enhance | skill-seekers-enhance |
| utility | pyproject.toml | skill-seekers-enhance-status | skill-seekers-enhance-status |
| utility | pyproject.toml | skill-seekers-package | skill-seekers-package |
| utility | pyproject.toml | skill-seekers-upload | skill-seekers-upload |
| utility | pyproject.toml | skill-seekers-install | skill-seekers-install |
| utility | pyproject.toml | skill-seekers-install-agent | skill-seekers-install-agent |
| utility | pyproject.toml | skill-seekers-estimate | skill-seekers-estimate |
| utility | pyproject.toml | skill-seekers-patterns | skill-seekers-patterns |
| utility | pyproject.toml | skill-seekers-how-to-guides | skill-seekers-how-to-guides |
| utility | pyproject.toml | skill-seekers-quality | skill-seekers-quality |
| utility | pyproject.toml | skill-seekers-workflows | skill-seekers-workflows |
| utility | pyproject.toml | skill-seekers-config | skill-seekers-config |
| utility | pyproject.toml | skill-seekers-doctor | skill-seekers-doctor |
| utility | pyproject.toml | skill-seekers-setup | skill-seekers-setup |
| utility | pyproject.toml | skill-seekers-resume | skill-seekers-resume |
| utility | pyproject.toml | skill-seekers-sync-config | skill-seekers-sync-config |
| utility | pyproject.toml | skill-seekers-cloud | skill-seekers-cloud |
| utility | pyproject.toml | skill-seekers-embed | skill-seekers-embed |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude, gemini |
| agentProtocols | mcp |
| agentFrameworks | langchain, llama-index |
| vectorStores | chroma, weaviate |
| modelRuntime | torch, transformers, llama |
| webRuntime | fastapi |
| developerSurface | click |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/yusufkaraaslan__Skill_Seekers/.mcp.json) | mcp signal |
| mcp | [example-mcp-config.json](../../../../sources/yusufkaraaslan__Skill_Seekers/example-mcp-config.json) | mcp signal |
| mcp | [render-mcp.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/render-mcp.yaml) | mcp signal |
| mcp | [setup_mcp.sh](../../../../sources/yusufkaraaslan__Skill_Seekers/setup_mcp.sh) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/yusufkaraaslan__Skill_Seekers/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/golden/phase2/word/SKILL.md](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/golden/phase2/word/SKILL.md) | agentRuntime signal |
| agentRuntime | [tests/golden/phase2/rss_empty/SKILL.md](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/golden/phase2/rss_empty/SKILL.md) | agentRuntime signal |
| agentRuntime | [tests/golden/phase2/rss/SKILL.md](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/golden/phase2/rss/SKILL.md) | agentRuntime signal |
| entrypoints | [src/skill_seekers/mcp/server.py](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/mcp/server.py) | entrypoints signal |
| entrypoints | [src/skill_seekers/embedding/server.py](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/embedding/server.py) | entrypoints signal |
| entrypoints | [src/skill_seekers/cli/main.py](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/cli/main.py) | entrypoints signal |
| entrypoints | [examples/cursor-react-skill/example-project/src/App.tsx](../../../../sources/yusufkaraaslan__Skill_Seekers/examples/cursor-react-skill/example-project/src/App.tsx) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [src/skill_seekers/mcp/server.py](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/mcp/server.py)<br>[src/skill_seekers/embedding/server.py](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/embedding/server.py)<br>[src/skill_seekers/cli/main.py](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/cli/main.py)<br>[examples/cursor-react-skill/example-project/src/App.tsx](../../../../sources/yusufkaraaslan__Skill_Seekers/examples/cursor-react-skill/example-project/src/App.tsx)<br>[examples/cursor-react-skill/example-project/src/index.tsx](../../../../sources/yusufkaraaslan__Skill_Seekers/examples/cursor-react-skill/example-project/src/index.tsx)<br>[api/main.py](../../../../sources/yusufkaraaslan__Skill_Seekers/api/main.py) |
| agentRuntime | 380 | [AGENTS.md](../../../../sources/yusufkaraaslan__Skill_Seekers/AGENTS.md)<br>[tests/golden/phase2/word/SKILL.md](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/golden/phase2/word/SKILL.md)<br>[tests/golden/phase2/rss_empty/SKILL.md](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/golden/phase2/rss_empty/SKILL.md)<br>[tests/golden/phase2/rss/SKILL.md](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/golden/phase2/rss/SKILL.md)<br>[tests/golden/phase2/pptx_kw/SKILL.md](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/golden/phase2/pptx_kw/SKILL.md)<br>[tests/golden/phase2/pptx/SKILL.md](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/golden/phase2/pptx/SKILL.md)<br>[tests/golden/phase2/pdf_kw/SKILL.md](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/golden/phase2/pdf_kw/SKILL.md)<br>[tests/golden/phase2/pdf_chapters/SKILL.md](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/golden/phase2/pdf_chapters/SKILL.md) |
| mcp | 51 | [.mcp.json](../../../../sources/yusufkaraaslan__Skill_Seekers/.mcp.json)<br>[example-mcp-config.json](../../../../sources/yusufkaraaslan__Skill_Seekers/example-mcp-config.json)<br>[render-mcp.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/render-mcp.yaml)<br>[setup_mcp.sh](../../../../sources/yusufkaraaslan__Skill_Seekers/setup_mcp.sh)<br>[tests/mcp_integration_test.md](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/mcp_integration_test.md)<br>[tests/test_mcp_fastmcp.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_mcp_fastmcp.py)<br>[tests/test_mcp_git_sources.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_mcp_git_sources.py)<br>[tests/test_mcp_inprocess_tools.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_mcp_inprocess_tools.py) |
| retrieval | 2082 | [tests/test_embedding_pipeline.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_embedding_pipeline.py)<br>[tests/test_embedding_server.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_embedding_server.py)<br>[tests/test_embedding.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_embedding.py)<br>[tests/test_mcp_vector_dbs.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_mcp_vector_dbs.py)<br>[tests/test_rag_chunker.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_rag_chunker.py)<br>[tests/test_adaptors/test_llama_index_adaptor.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_adaptors/test_llama_index_adaptor.py)<br>[tests/golden/phase2/word/references/index.md](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/golden/phase2/word/references/index.md)<br>[tests/golden/phase2/rss_empty/references/index.md](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/golden/phase2/rss_empty/references/index.md) |
| spec | 35 | [requirements.txt](../../../../sources/yusufkaraaslan__Skill_Seekers/requirements.txt)<br>[ROADMAP.md](../../../../sources/yusufkaraaslan__Skill_Seekers/ROADMAP.md)<br>[tests/test_architecture_scenarios.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_architecture_scenarios.py)<br>[src/skill_seekers/workflows/architecture-comprehensive.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/workflows/architecture-comprehensive.yaml)<br>[src/skill_seekers/workflows/design-system.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/workflows/design-system.yaml)<br>[src/skill_seekers/workflows/responsive-design.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/workflows/responsive-design.yaml)<br>[src/skill_seekers/workflows/rest-api-design.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/workflows/rest-api-design.yaml)<br>[src/skill_seekers/workflows/serverless-architecture.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/workflows/serverless-architecture.yaml) |
| eval | 318 | [tests/__init__.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/conftest.py)<br>[tests/docker-compose.test.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/docker-compose.test.yml)<br>[tests/mcp_integration_test.md](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/mcp_integration_test.md)<br>[tests/phase2_golden_utils.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/phase2_golden_utils.py)<br>[tests/test_adaptor_benchmarks.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_adaptor_benchmarks.py)<br>[tests/test_agent_client.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_agent_client.py)<br>[tests/test_api_reference_builder.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_api_reference_builder.py) |
| security | 7 | [DOCUMENTATION_AUDIT_REPORT_2026-05-30.md](../../../../sources/yusufkaraaslan__Skill_Seekers/DOCUMENTATION_AUDIT_REPORT_2026-05-30.md)<br>[tests/test_estimate_url_guard.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_estimate_url_guard.py)<br>[src/skill_seekers/workflows/auth-strategies.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/workflows/auth-strategies.yaml)<br>[src/skill_seekers/workflows/compliance-gdpr.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/workflows/compliance-gdpr.yaml)<br>[src/skill_seekers/workflows/security-focus.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/workflows/security-focus.yaml)<br>[helm/skill-seekers/templates/secret.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/helm/skill-seekers/templates/secret.yaml)<br>[docs/BUG_AUDIT.md](../../../../sources/yusufkaraaslan__Skill_Seekers/docs/BUG_AUDIT.md) |
| ci | 7 | [.github/workflows/docker-publish.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/.github/workflows/docker-publish.yml)<br>[.github/workflows/quality-metrics.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/.github/workflows/quality-metrics.yml)<br>[.github/workflows/release.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/.github/workflows/release.yml)<br>[.github/workflows/scheduled-updates.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/.github/workflows/scheduled-updates.yml)<br>[.github/workflows/test-vector-dbs.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/.github/workflows/test-vector-dbs.yml)<br>[.github/workflows/tests.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/.github/workflows/tests.yml)<br>[.github/workflows/vector-db-export.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/.github/workflows/vector-db-export.yml) |
| container | 19 | [docker-compose.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/docker-compose.yml)<br>[Dockerfile](../../../../sources/yusufkaraaslan__Skill_Seekers/Dockerfile)<br>[Dockerfile.mcp](../../../../sources/yusufkaraaslan__Skill_Seekers/Dockerfile.mcp)<br>[tests/docker-compose.test.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/docker-compose.test.yml)<br>[helm/skill-seekers/Chart.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/helm/skill-seekers/Chart.yaml)<br>[helm/skill-seekers/values.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/helm/skill-seekers/values.yaml)<br>[helm/skill-seekers/templates/_helpers.tpl](../../../../sources/yusufkaraaslan__Skill_Seekers/helm/skill-seekers/templates/_helpers.tpl)<br>[helm/skill-seekers/templates/chroma-deployment.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/helm/skill-seekers/templates/chroma-deployment.yaml) |
| instruction | 2 | [AGENTS.md](../../../../sources/yusufkaraaslan__Skill_Seekers/AGENTS.md)<br>[CLAUDE.md](../../../../sources/yusufkaraaslan__Skill_Seekers/CLAUDE.md) |
| docs | 2232 | [README.ar.md](../../../../sources/yusufkaraaslan__Skill_Seekers/README.ar.md)<br>[README.de.md](../../../../sources/yusufkaraaslan__Skill_Seekers/README.de.md)<br>[README.es.md](../../../../sources/yusufkaraaslan__Skill_Seekers/README.es.md)<br>[README.fr.md](../../../../sources/yusufkaraaslan__Skill_Seekers/README.fr.md)<br>[README.hi.md](../../../../sources/yusufkaraaslan__Skill_Seekers/README.hi.md)<br>[README.ja.md](../../../../sources/yusufkaraaslan__Skill_Seekers/README.ja.md)<br>[README.ko.md](../../../../sources/yusufkaraaslan__Skill_Seekers/README.ko.md)<br>[README.md](../../../../sources/yusufkaraaslan__Skill_Seekers/README.md) |
| config | 19 | [pyproject.toml](../../../../sources/yusufkaraaslan__Skill_Seekers/pyproject.toml)<br>[requirements.txt](../../../../sources/yusufkaraaslan__Skill_Seekers/requirements.txt)<br>[uv.lock](../../../../sources/yusufkaraaslan__Skill_Seekers/uv.lock)<br>[src/skill_seekers/mcp/requirements.txt](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/mcp/requirements.txt)<br>[examples/windsurf-fastapi-context/requirements.txt](../../../../sources/yusufkaraaslan__Skill_Seekers/examples/windsurf-fastapi-context/requirements.txt)<br>[examples/weaviate-example/requirements.txt](../../../../sources/yusufkaraaslan__Skill_Seekers/examples/weaviate-example/requirements.txt)<br>[examples/qdrant-example/requirements.txt](../../../../sources/yusufkaraaslan__Skill_Seekers/examples/qdrant-example/requirements.txt)<br>[examples/pinecone-upsert/requirements.txt](../../../../sources/yusufkaraaslan__Skill_Seekers/examples/pinecone-upsert/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 318 | [tests/__init__.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/conftest.py)<br>[tests/docker-compose.test.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/docker-compose.test.yml)<br>[tests/mcp_integration_test.md](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/mcp_integration_test.md)<br>[tests/phase2_golden_utils.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/phase2_golden_utils.py)<br>[tests/test_adaptor_benchmarks.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_adaptor_benchmarks.py) |
| CI workflows | 7 | [.github/workflows/docker-publish.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/.github/workflows/docker-publish.yml)<br>[.github/workflows/quality-metrics.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/.github/workflows/quality-metrics.yml)<br>[.github/workflows/release.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/.github/workflows/release.yml)<br>[.github/workflows/scheduled-updates.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/.github/workflows/scheduled-updates.yml)<br>[.github/workflows/test-vector-dbs.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/.github/workflows/test-vector-dbs.yml)<br>[.github/workflows/tests.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/.github/workflows/tests.yml) |
| Containers / deploy | 19 | [docker-compose.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/docker-compose.yml)<br>[Dockerfile](../../../../sources/yusufkaraaslan__Skill_Seekers/Dockerfile)<br>[Dockerfile.mcp](../../../../sources/yusufkaraaslan__Skill_Seekers/Dockerfile.mcp)<br>[tests/docker-compose.test.yml](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/docker-compose.test.yml)<br>[helm/skill-seekers/Chart.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/helm/skill-seekers/Chart.yaml)<br>[helm/skill-seekers/values.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/helm/skill-seekers/values.yaml) |
| Security / policy | 7 | [DOCUMENTATION_AUDIT_REPORT_2026-05-30.md](../../../../sources/yusufkaraaslan__Skill_Seekers/DOCUMENTATION_AUDIT_REPORT_2026-05-30.md)<br>[tests/test_estimate_url_guard.py](../../../../sources/yusufkaraaslan__Skill_Seekers/tests/test_estimate_url_guard.py)<br>[src/skill_seekers/workflows/auth-strategies.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/workflows/auth-strategies.yaml)<br>[src/skill_seekers/workflows/compliance-gdpr.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/workflows/compliance-gdpr.yaml)<br>[src/skill_seekers/workflows/security-focus.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/src/skill_seekers/workflows/security-focus.yaml)<br>[helm/skill-seekers/templates/secret.yaml](../../../../sources/yusufkaraaslan__Skill_Seekers/helm/skill-seekers/templates/secret.yaml) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/yusufkaraaslan__Skill_Seekers/AGENTS.md)<br>[CLAUDE.md](../../../../sources/yusufkaraaslan__Skill_Seekers/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json`, `example-mcp-config.json`, `render-mcp.yaml`.
2. Trace execution through entrypoints: `src/skill_seekers/mcp/server.py`, `src/skill_seekers/embedding/server.py`, `src/skill_seekers/cli/main.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `tests/golden/phase2/word/SKILL.md`, `tests/golden/phase2/rss_empty/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `tests/test_embedding_pipeline.py`, `tests/test_embedding_server.py`, `tests/test_embedding.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/docker-compose.test.yml`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Convert documentation websites, GitHub repositories, and PDFs into Claude AI skills with automatic conflict detection. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, docker-compose.yml, README.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
