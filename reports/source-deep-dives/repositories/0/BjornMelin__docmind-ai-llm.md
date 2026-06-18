# BjornMelin/docmind-ai-llm Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

DocMind AI is a powerful, open-source Streamlit application leveraging LlamaIndex, LangGraph, and local Large Language Models (LLMs) via Ollama, LMStudio, llama.cpp, or vLLM for advanced document analysis. Analyze, summarize, and extract insights from a wide array of file formats, securely and privately, all offline.

## 요약

- 조사 단위: `sources/BjornMelin__docmind-ai-llm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 692 files, 104 directories, depth score 127, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/app.py이고, 의존성 단서는 openai, langchain, langgraph, llamaindex, llama-index, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | BjornMelin/docmind-ai-llm |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 132 |
| Forks | 24 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/BjornMelin__docmind-ai-llm](../../../../sources/BjornMelin__docmind-ai-llm) |
| Existing report | [reports/global-trending/repositories/BjornMelin__docmind-ai-llm.md](../../../global-trending/repositories/BjornMelin__docmind-ai-llm.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 692 / 104 |
| Max observed depth | 6 |
| Top directories | .github, data, docs, examples, schemas, scripts, src, templates, tests, tools |
| Top extensions | .py: 482, .md: 179, .json: 9, .yml: 7, .yaml: 5, (none): 5, .toml: 2, .example: 1, .lock: 1, .sh: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 128 |
| docs | documentation surface | 82 |
| src | source boundary | 5 |
| .github | ci surface | 1 |
| data | top-level component | 1 |
| examples | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |
| templates | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | langchain, langgraph, llamaindex, llama-index |
| vectorStores | qdrant |
| modelRuntime | torch, transformers, vllm, ollama, llama |
| webRuntime | none |
| developerSurface | typer |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src/app.py](../../../../sources/BjornMelin__docmind-ai-llm/src/app.py) | entrypoints signal |
| container | [docker-compose.prod.yml](../../../../sources/BjornMelin__docmind-ai-llm/docker-compose.prod.yml) | container signal |
| container | [docker-compose.yml](../../../../sources/BjornMelin__docmind-ai-llm/docker-compose.yml) | container signal |
| container | [Dockerfile](../../../../sources/BjornMelin__docmind-ai-llm/Dockerfile) | container signal |
| config | [pyproject.toml](../../../../sources/BjornMelin__docmind-ai-llm/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/BjornMelin__docmind-ai-llm/uv.lock) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/docs-ci.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/docs-ci.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/release.yml) | ci signal |
| ci | [.github/workflows/semantic-pull-request.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/semantic-pull-request.yml) | ci signal |
| eval | [tools/eval/run_beir.py](../../../../sources/BjornMelin__docmind-ai-llm/tools/eval/run_beir.py) | eval support |
| eval | [tools/eval/run_ragas.py](../../../../sources/BjornMelin__docmind-ai-llm/tools/eval/run_ragas.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/app.py](../../../../sources/BjornMelin__docmind-ai-llm/src/app.py) |
| agentRuntime | 59 | [AGENTS.md](../../../../sources/BjornMelin__docmind-ai-llm/AGENTS.md)<br>[tools/models/pull.py](../../../../sources/BjornMelin__docmind-ai-llm/tools/models/pull.py)<br>[tools/eval/run_beir.py](../../../../sources/BjornMelin__docmind-ai-llm/tools/eval/run_beir.py)<br>[tools/eval/run_ragas.py](../../../../sources/BjornMelin__docmind-ai-llm/tools/eval/run_ragas.py)<br>[tests/unit/agents/__init__.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/agents/__init__.py)<br>[tests/unit/agents/test_async_communication.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/agents/test_async_communication.py)<br>[tests/unit/agents/test_coordinator_additional_coverage.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/agents/test_coordinator_additional_coverage.py)<br>[tests/unit/agents/test_coordinator_metrics_posthook.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/agents/test_coordinator_metrics_posthook.py) |
| mcp | 3 | [tests/unit/agents/test_tool_registry_retrieval_tool.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/agents/test_tool_registry_retrieval_tool.py)<br>[tests/unit/agents/tools/test_tool_registry.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/agents/tools/test_tool_registry.py)<br>[src/agents/registry/tool_registry.py](../../../../sources/BjornMelin__docmind-ai-llm/src/agents/registry/tool_registry.py) |
| retrieval | 124 | [tests/unit/test_settings_retrieval_timeouts_env.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/test_settings_retrieval_timeouts_env.py)<br>[tests/unit/utils/storage/test_storage_create_vector_store_calls_ensure.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/utils/storage/test_storage_create_vector_store_calls_ensure.py)<br>[tests/unit/ui/test_ingest_adapter_return_shape.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/ui/test_ingest_adapter_return_shape.py)<br>[tests/unit/retrieval/conftest.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/retrieval/conftest.py)<br>[tests/unit/retrieval/test_adapter_registry.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/retrieval/test_adapter_registry.py)<br>[tests/unit/retrieval/test_graph_helpers.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/retrieval/test_graph_helpers.py)<br>[tests/unit/retrieval/test_graph_rag_factory.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/retrieval/test_graph_rag_factory.py)<br>[tests/unit/retrieval/test_hybrid_dedup_and_fusion.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/retrieval/test_hybrid_dedup_and_fusion.py) |
| spec | 110 | [docs/PRD.md](../../../../sources/BjornMelin__docmind-ai-llm/docs/PRD.md)<br>[docs/specs/requirements.md](../../../../sources/BjornMelin__docmind-ai-llm/docs/specs/requirements.md)<br>[docs/specs/spec-001-llm-runtime.md](../../../../sources/BjornMelin__docmind-ai-llm/docs/specs/spec-001-llm-runtime.md)<br>[docs/specs/spec-002-ingestion-pipeline.md](../../../../sources/BjornMelin__docmind-ai-llm/docs/specs/spec-002-ingestion-pipeline.md)<br>[docs/specs/spec-003-embeddings.md](../../../../sources/BjornMelin__docmind-ai-llm/docs/specs/spec-003-embeddings.md)<br>[docs/specs/spec-004-hybrid-retrieval.md](../../../../sources/BjornMelin__docmind-ai-llm/docs/specs/spec-004-hybrid-retrieval.md)<br>[docs/specs/spec-005-reranking.md](../../../../sources/BjornMelin__docmind-ai-llm/docs/specs/spec-005-reranking.md)<br>[docs/specs/spec-006-graphrag.md](../../../../sources/BjornMelin__docmind-ai-llm/docs/specs/spec-006-graphrag.md) |
| eval | 401 | [tools/eval/run_beir.py](../../../../sources/BjornMelin__docmind-ai-llm/tools/eval/run_beir.py)<br>[tools/eval/run_ragas.py](../../../../sources/BjornMelin__docmind-ai-llm/tools/eval/run_ragas.py)<br>[tests/__init__.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/conftest.py)<br>[tests/README.md](../../../../sources/BjornMelin__docmind-ai-llm/tests/README.md)<br>[tests/shared_fixtures.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/shared_fixtures.py)<br>[tests/TEST_FRAMEWORK.md](../../../../sources/BjornMelin__docmind-ai-llm/tests/TEST_FRAMEWORK.md)<br>[tests/test_infrastructure_validation.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/test_infrastructure_validation.py) |
| security | 16 | [tests/unit/utils/security/test_encrypt_file.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/utils/security/test_encrypt_file.py)<br>[tests/unit/utils/security/test_security_crypto_paths.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/utils/security/test_security_crypto_paths.py)<br>[tests/unit/utils/security/test_security_misc.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/utils/security/test_security_misc.py)<br>[tests/unit/utils/security/test_security.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/utils/security/test_security.py)<br>[tests/unit/security/test_export_path_validation.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/security/test_export_path_validation.py)<br>[tests/unit/retrieval/test_seed_policy.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/retrieval/test_seed_policy.py)<br>[tests/unit/retrieval/reranking/infra/test_colpali_policy_flags_extra.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/retrieval/reranking/infra/test_colpali_policy_flags_extra.py)<br>[tests/unit/retrieval/reranking/infra/test_colpali_policy_visual_fraction.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/retrieval/reranking/infra/test_colpali_policy_visual_fraction.py) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/ci.yml)<br>[.github/workflows/docs-ci.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/docs-ci.yml)<br>[.github/workflows/release.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/release.yml)<br>[.github/workflows/semantic-pull-request.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/semantic-pull-request.yml) |
| container | 3 | [docker-compose.prod.yml](../../../../sources/BjornMelin__docmind-ai-llm/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/BjornMelin__docmind-ai-llm/docker-compose.yml)<br>[Dockerfile](../../../../sources/BjornMelin__docmind-ai-llm/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/BjornMelin__docmind-ai-llm/AGENTS.md) |
| docs | 176 | [README.md](../../../../sources/BjornMelin__docmind-ai-llm/README.md)<br>[tests/README.md](../../../../sources/BjornMelin__docmind-ai-llm/tests/README.md)<br>[tests/integration/README.md](../../../../sources/BjornMelin__docmind-ai-llm/tests/integration/README.md)<br>[scripts/README.md](../../../../sources/BjornMelin__docmind-ai-llm/scripts/README.md)<br>[docs/overview.md](../../../../sources/BjornMelin__docmind-ai-llm/docs/overview.md)<br>[docs/PRD.md](../../../../sources/BjornMelin__docmind-ai-llm/docs/PRD.md)<br>[docs/user/configuration.md](../../../../sources/BjornMelin__docmind-ai-llm/docs/user/configuration.md)<br>[docs/user/getting-started.md](../../../../sources/BjornMelin__docmind-ai-llm/docs/user/getting-started.md) |
| config | 2 | [pyproject.toml](../../../../sources/BjornMelin__docmind-ai-llm/pyproject.toml)<br>[uv.lock](../../../../sources/BjornMelin__docmind-ai-llm/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 401 | [tools/eval/run_beir.py](../../../../sources/BjornMelin__docmind-ai-llm/tools/eval/run_beir.py)<br>[tools/eval/run_ragas.py](../../../../sources/BjornMelin__docmind-ai-llm/tools/eval/run_ragas.py)<br>[tests/__init__.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/conftest.py)<br>[tests/README.md](../../../../sources/BjornMelin__docmind-ai-llm/tests/README.md)<br>[tests/shared_fixtures.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/shared_fixtures.py) |
| CI workflows | 4 | [.github/workflows/ci.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/ci.yml)<br>[.github/workflows/docs-ci.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/docs-ci.yml)<br>[.github/workflows/release.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/release.yml)<br>[.github/workflows/semantic-pull-request.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/semantic-pull-request.yml) |
| Containers / deploy | 3 | [docker-compose.prod.yml](../../../../sources/BjornMelin__docmind-ai-llm/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/BjornMelin__docmind-ai-llm/docker-compose.yml)<br>[Dockerfile](../../../../sources/BjornMelin__docmind-ai-llm/Dockerfile) |
| Security / policy | 16 | [tests/unit/utils/security/test_encrypt_file.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/utils/security/test_encrypt_file.py)<br>[tests/unit/utils/security/test_security_crypto_paths.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/utils/security/test_security_crypto_paths.py)<br>[tests/unit/utils/security/test_security_misc.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/utils/security/test_security_misc.py)<br>[tests/unit/utils/security/test_security.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/utils/security/test_security.py)<br>[tests/unit/security/test_export_path_validation.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/security/test_export_path_validation.py)<br>[tests/unit/retrieval/test_seed_policy.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/retrieval/test_seed_policy.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/BjornMelin__docmind-ai-llm/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/app.py`, `docker-compose.prod.yml`, `docker-compose.yml`.
2. Trace execution through entrypoints: `src/app.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/models/pull.py`, `tools/eval/run_beir.py`.
4. Inspect retrieval/memory/indexing through: `tests/unit/test_settings_retrieval_timeouts_env.py`, `tests/unit/utils/storage/test_storage_create_vector_store_calls_ensure.py`, `tests/unit/ui/test_ingest_adapter_return_shape.py`.
5. Verify behavior through test/eval files: `tools/eval/run_beir.py`, `tools/eval/run_ragas.py`, `tests/__init__.py`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 DocMind AI is a powerful, open source Streamlit application leveraging LlamaIndex, LangGraph, and local Large Language M. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, AGENTS.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
