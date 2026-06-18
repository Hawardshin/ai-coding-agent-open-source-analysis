# semantica-agi/semantica Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Semantica 🧠 • Build AI systems that can explain, trace, and justify every decision. Knowledge graphs, context graphs, reasoning engines, provenance, and governance for production AI.

## 요약

- 조사 단위: `sources/semantica-agi__semantica` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 904 files, 137 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_030_context_graph_realworld_extended.py, tests/test_embedding_providers.py, tests/test_graph_store_methods.py이고, 의존성 단서는 openai, anthropic, gemini, mcp, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | semantica-agi/semantica |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 1225 |
| Forks | 185 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/semantica-agi__semantica](../../../../sources/semantica-agi__semantica) |
| Existing report | [reports/global-trending/repositories/semantica-agi__semantica.md](../../../global-trending/repositories/semantica-agi__semantica.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 904 / 137 |
| Max observed depth | 6 |
| Top directories | .claude, .github, cookbook, docs, examples, explorer, integrations, mcp, plugins, semantica, tests |
| Top extensions | .py: 592, .md: 123, .tsx: 42, .ipynb: 37, .ts: 33, .json: 24, .yml: 13, .svg: 11, (none): 8, .css: 4, .png: 3, .ttl: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 110 |
| docs | documentation surface | 34 |
| .github | ci surface | 1 |
| cookbook | top-level component | 1 |
| examples | top-level component | 1 |
| explorer | top-level component | 1 |
| integrations | top-level component | 1 |
| mcp | top-level component | 1 |
| plugins | top-level component | 1 |
| semantica | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | semantica | semantica |
| serve-dev | pyproject.toml | semantica-server | semantica-server |
| utility | pyproject.toml | semantica-worker | semantica-worker |
| utility | pyproject.toml | semantica-explorer | semantica-explorer |
| utility | pyproject.toml | semantica-mcp | semantica-mcp |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, gemini |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | qdrant, milvus, weaviate, pgvector, faiss |
| modelRuntime | torch, transformers, ollama, llama |
| webRuntime | fastapi |
| developerSurface | click |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [tests/test_030_context_graph_realworld_extended.py](../../../../sources/semantica-agi__semantica/tests/test_030_context_graph_realworld_extended.py) | retrieval signal |
| retrieval | [tests/test_embedding_providers.py](../../../../sources/semantica-agi__semantica/tests/test_embedding_providers.py) | retrieval signal |
| retrieval | [tests/test_graph_store_methods.py](../../../../sources/semantica-agi__semantica/tests/test_graph_store_methods.py) | retrieval signal |
| retrieval | [tests/test_graph_store.py](../../../../sources/semantica-agi__semantica/tests/test_graph_store.py) | retrieval signal |
| entrypoints | [semantica/server.py](../../../../sources/semantica-agi__semantica/semantica/server.py) | entrypoints signal |
| entrypoints | [semantica/mcp_server/__main__.py](../../../../sources/semantica-agi__semantica/semantica/mcp_server/__main__.py) | entrypoints signal |
| entrypoints | [semantica/explorer/__main__.py](../../../../sources/semantica-agi__semantica/semantica/explorer/__main__.py) | entrypoints signal |
| entrypoints | [mcp/__main__.py](../../../../sources/semantica-agi__semantica/mcp/__main__.py) | entrypoints signal |
| docs | [README.md](../../../../sources/semantica-agi__semantica/README.md) | docs signal |
| docs | [plugins/.windsurf-plugin/README.md](../../../../sources/semantica-agi__semantica/plugins/.windsurf-plugin/README.md) | docs signal |
| docs | [plugins/.vscode-plugin/README.md](../../../../sources/semantica-agi__semantica/plugins/.vscode-plugin/README.md) | docs signal |
| docs | [plugins/.openclaw-plugin/README.md](../../../../sources/semantica-agi__semantica/plugins/.openclaw-plugin/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [semantica/server.py](../../../../sources/semantica-agi__semantica/semantica/server.py)<br>[semantica/mcp_server/__main__.py](../../../../sources/semantica-agi__semantica/semantica/mcp_server/__main__.py)<br>[semantica/explorer/__main__.py](../../../../sources/semantica-agi__semantica/semantica/explorer/__main__.py)<br>[mcp/__main__.py](../../../../sources/semantica-agi__semantica/mcp/__main__.py)<br>[mcp/server.py](../../../../sources/semantica-agi__semantica/mcp/server.py)<br>[explorer/src/App.css](../../../../sources/semantica-agi__semantica/explorer/src/App.css)<br>[explorer/src/App.tsx](../../../../sources/semantica-agi__semantica/explorer/src/App.tsx)<br>[explorer/src/index.css](../../../../sources/semantica-agi__semantica/explorer/src/index.css) |
| agentRuntime | 75 | [tests/context/__init__.py](../../../../sources/semantica-agi__semantica/tests/context/__init__.py)<br>[tests/context/test_agent_context_decisions.py](../../../../sources/semantica-agi__semantica/tests/context/test_agent_context_decisions.py)<br>[tests/context/test_agent_context_smoke.py](../../../../sources/semantica-agi__semantica/tests/context/test_agent_context_smoke.py)<br>[tests/context/test_banking_context_graphs_e2e.py](../../../../sources/semantica-agi__semantica/tests/context/test_banking_context_graphs_e2e.py)<br>[tests/context/test_causal_analyzer.py](../../../../sources/semantica-agi__semantica/tests/context/test_causal_analyzer.py)<br>[tests/context/test_context_explainability_regression.py](../../../../sources/semantica-agi__semantica/tests/context/test_context_explainability_regression.py)<br>[tests/context/test_context_graph_decisions.py](../../../../sources/semantica-agi__semantica/tests/context/test_context_graph_decisions.py)<br>[tests/context/test_context_graph_full_feature_e2e.py](../../../../sources/semantica-agi__semantica/tests/context/test_context_graph_full_feature_e2e.py) |
| mcp | 21 | [semantica/parse/mcp_parser.py](../../../../sources/semantica-agi__semantica/semantica/parse/mcp_parser.py)<br>[semantica/mcp_server/__init__.py](../../../../sources/semantica-agi__semantica/semantica/mcp_server/__init__.py)<br>[semantica/mcp_server/__main__.py](../../../../sources/semantica-agi__semantica/semantica/mcp_server/__main__.py)<br>[semantica/ingest/mcp_client.py](../../../../sources/semantica-agi__semantica/semantica/ingest/mcp_client.py)<br>[semantica/ingest/mcp_ingestor.py](../../../../sources/semantica-agi__semantica/semantica/ingest/mcp_ingestor.py)<br>[mcp/__init__.py](../../../../sources/semantica-agi__semantica/mcp/__init__.py)<br>[mcp/__main__.py](../../../../sources/semantica-agi__semantica/mcp/__main__.py)<br>[mcp/README.md](../../../../sources/semantica-agi__semantica/mcp/README.md) |
| retrieval | 142 | [tests/test_030_context_graph_realworld_extended.py](../../../../sources/semantica-agi__semantica/tests/test_030_context_graph_realworld_extended.py)<br>[tests/test_embedding_providers.py](../../../../sources/semantica-agi__semantica/tests/test_embedding_providers.py)<br>[tests/test_graph_store_methods.py](../../../../sources/semantica-agi__semantica/tests/test_graph_store_methods.py)<br>[tests/test_graph_store.py](../../../../sources/semantica-agi__semantica/tests/test_graph_store.py)<br>[tests/visualization/test_kg_visualizer_normalize_graph.py](../../../../sources/semantica-agi__semantica/tests/visualization/test_kg_visualizer_normalize_graph.py)<br>[tests/vector_store/test_backward_compatibility.py](../../../../sources/semantica-agi__semantica/tests/vector_store/test_backward_compatibility.py)<br>[tests/vector_store/test_decision_embedding_pipeline.py](../../../../sources/semantica-agi__semantica/tests/vector_store/test_decision_embedding_pipeline.py)<br>[tests/vector_store/test_end_to_end_decision_tracking.py](../../../../sources/semantica-agi__semantica/tests/vector_store/test_end_to_end_decision_tracking.py) |
| spec | 4 | [ARCHITECTURE.md](../../../../sources/semantica-agi__semantica/ARCHITECTURE.md)<br>[semantica/ontology/requirements_spec.py](../../../../sources/semantica-agi__semantica/semantica/ontology/requirements_spec.py)<br>[docs/architecture.md](../../../../sources/semantica-agi__semantica/docs/architecture.md)<br>[docs/assets/img/diagrams/architecture-overview.svg](../../../../sources/semantica-agi__semantica/docs/assets/img/diagrams/architecture-overview.svg) |
| eval | 231 | [tests/__init__.py](../../../../sources/semantica-agi__semantica/tests/__init__.py)<br>[tests/_smoke_review_fixes.py](../../../../sources/semantica-agi__semantica/tests/_smoke_review_fixes.py)<br>[tests/reproduce_issue_176.py](../../../../sources/semantica-agi__semantica/tests/reproduce_issue_176.py)<br>[tests/test_030_context_graph_realworld_extended.py](../../../../sources/semantica-agi__semantica/tests/test_030_context_graph_realworld_extended.py)<br>[tests/test_030_realworld_comprehensive.py](../../../../sources/semantica-agi__semantica/tests/test_030_realworld_comprehensive.py)<br>[tests/test_395_temporal_semantics_comprehensive.py](../../../../sources/semantica-agi__semantica/tests/test_395_temporal_semantics_comprehensive.py)<br>[tests/test_401_temporal_provenance_export.py](../../../../sources/semantica-agi__semantica/tests/test_401_temporal_provenance_export.py)<br>[tests/test_all_features.py](../../../../sources/semantica-agi__semantica/tests/test_all_features.py) |
| security | 8 | [SECURITY.md](../../../../sources/semantica-agi__semantica/SECURITY.md)<br>[tests/context/test_policy_engine_fallback.py](../../../../sources/semantica-agi__semantica/tests/context/test_policy_engine_fallback.py)<br>[tests/context/test_policy_engine.py](../../../../sources/semantica-agi__semantica/tests/context/test_policy_engine.py)<br>[tests/change_management/test_audit_trail.py](../../../../sources/semantica-agi__semantica/tests/change_management/test_audit_trail.py)<br>[semantica/context/policy_engine.py](../../../../sources/semantica-agi__semantica/semantica/context/policy_engine.py)<br>[plugins/skills/policy/SKILL.md](../../../../sources/semantica-agi__semantica/plugins/skills/policy/SKILL.md)<br>[.github/workflows/security-scan.yml](../../../../sources/semantica-agi__semantica/.github/workflows/security-scan.yml)<br>[.github/workflows/security.yml](../../../../sources/semantica-agi__semantica/.github/workflows/security.yml) |
| ci | 8 | [.github/workflows/benchmark.yml](../../../../sources/semantica-agi__semantica/.github/workflows/benchmark.yml)<br>[.github/workflows/ci.yml](../../../../sources/semantica-agi__semantica/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/semantica-agi__semantica/.github/workflows/codeql.yml)<br>[.github/workflows/defender-for-devops.yml](../../../../sources/semantica-agi__semantica/.github/workflows/defender-for-devops.yml)<br>[.github/workflows/docs.yml](../../../../sources/semantica-agi__semantica/.github/workflows/docs.yml)<br>[.github/workflows/release.yml](../../../../sources/semantica-agi__semantica/.github/workflows/release.yml)<br>[.github/workflows/security-scan.yml](../../../../sources/semantica-agi__semantica/.github/workflows/security-scan.yml)<br>[.github/workflows/security.yml](../../../../sources/semantica-agi__semantica/.github/workflows/security.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/semantica-agi__semantica/docker-compose.yml)<br>[Dockerfile](../../../../sources/semantica-agi__semantica/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 73 | [README.md](../../../../sources/semantica-agi__semantica/README.md)<br>[plugins/.windsurf-plugin/README.md](../../../../sources/semantica-agi__semantica/plugins/.windsurf-plugin/README.md)<br>[plugins/.vscode-plugin/README.md](../../../../sources/semantica-agi__semantica/plugins/.vscode-plugin/README.md)<br>[plugins/.openclaw-plugin/README.md](../../../../sources/semantica-agi__semantica/plugins/.openclaw-plugin/README.md)<br>[plugins/.continue-plugin/README.md](../../../../sources/semantica-agi__semantica/plugins/.continue-plugin/README.md)<br>[plugins/.cline-plugin/README.md](../../../../sources/semantica-agi__semantica/plugins/.cline-plugin/README.md)<br>[plugins/.claude-plugin/README.md](../../../../sources/semantica-agi__semantica/plugins/.claude-plugin/README.md)<br>[mcp/README.md](../../../../sources/semantica-agi__semantica/mcp/README.md) |
| config | 3 | [pyproject.toml](../../../../sources/semantica-agi__semantica/pyproject.toml)<br>[explorer/package.json](../../../../sources/semantica-agi__semantica/explorer/package.json)<br>[explorer/tsconfig.json](../../../../sources/semantica-agi__semantica/explorer/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 231 | [tests/__init__.py](../../../../sources/semantica-agi__semantica/tests/__init__.py)<br>[tests/_smoke_review_fixes.py](../../../../sources/semantica-agi__semantica/tests/_smoke_review_fixes.py)<br>[tests/reproduce_issue_176.py](../../../../sources/semantica-agi__semantica/tests/reproduce_issue_176.py)<br>[tests/test_030_context_graph_realworld_extended.py](../../../../sources/semantica-agi__semantica/tests/test_030_context_graph_realworld_extended.py)<br>[tests/test_030_realworld_comprehensive.py](../../../../sources/semantica-agi__semantica/tests/test_030_realworld_comprehensive.py)<br>[tests/test_395_temporal_semantics_comprehensive.py](../../../../sources/semantica-agi__semantica/tests/test_395_temporal_semantics_comprehensive.py) |
| CI workflows | 8 | [.github/workflows/benchmark.yml](../../../../sources/semantica-agi__semantica/.github/workflows/benchmark.yml)<br>[.github/workflows/ci.yml](../../../../sources/semantica-agi__semantica/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/semantica-agi__semantica/.github/workflows/codeql.yml)<br>[.github/workflows/defender-for-devops.yml](../../../../sources/semantica-agi__semantica/.github/workflows/defender-for-devops.yml)<br>[.github/workflows/docs.yml](../../../../sources/semantica-agi__semantica/.github/workflows/docs.yml)<br>[.github/workflows/release.yml](../../../../sources/semantica-agi__semantica/.github/workflows/release.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/semantica-agi__semantica/docker-compose.yml)<br>[Dockerfile](../../../../sources/semantica-agi__semantica/Dockerfile) |
| Security / policy | 8 | [SECURITY.md](../../../../sources/semantica-agi__semantica/SECURITY.md)<br>[tests/context/test_policy_engine_fallback.py](../../../../sources/semantica-agi__semantica/tests/context/test_policy_engine_fallback.py)<br>[tests/context/test_policy_engine.py](../../../../sources/semantica-agi__semantica/tests/context/test_policy_engine.py)<br>[tests/change_management/test_audit_trail.py](../../../../sources/semantica-agi__semantica/tests/change_management/test_audit_trail.py)<br>[semantica/context/policy_engine.py](../../../../sources/semantica-agi__semantica/semantica/context/policy_engine.py)<br>[plugins/skills/policy/SKILL.md](../../../../sources/semantica-agi__semantica/plugins/skills/policy/SKILL.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_030_context_graph_realworld_extended.py`, `tests/test_embedding_providers.py`, `tests/test_graph_store_methods.py`.
2. Trace execution through entrypoints: `semantica/server.py`, `semantica/mcp_server/__main__.py`, `semantica/explorer/__main__.py`.
3. Map agent/tool runtime through: `tests/context/__init__.py`, `tests/context/test_agent_context_decisions.py`, `tests/context/test_agent_context_smoke.py`.
4. Inspect retrieval/memory/indexing through: `tests/test_030_context_graph_realworld_extended.py`, `tests/test_embedding_providers.py`, `tests/test_graph_store_methods.py`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/_smoke_review_fixes.py`, `tests/reproduce_issue_176.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Semantica 🧠 • Build AI systems that can explain, trace, and justify every decision. Knowledge graphs, context graphs, r. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
