# BjornMelin/docmind-ai-llm 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

DocMind AI is a powerful, open-source Streamlit application leveraging LlamaIndex, LangGraph, and local Large Language Models (LLMs) via Ollama, LMStudio, llama.cpp, or vLLM for advanced document analysis. Analyze, summarize, and extract insights from a wide array of file formats, securely and privately, all offline.

## 요약

- 조사 단위: `sources/BjornMelin__docmind-ai-llm` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 692 files, 104 directories, depth score 121, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/app.py이고, 의존성 단서는 openai, langchain, langgraph, llamaindex, llama-index, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | BjornMelin/docmind-ai-llm |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 132 |
| Forks | 24 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/BjornMelin__docmind-ai-llm](../../../../sources/BjornMelin__docmind-ai-llm) |
| 기존 보고서 | [reports/global-trending/repositories/BjornMelin__docmind-ai-llm.md](../../../global-trending/repositories/BjornMelin__docmind-ai-llm.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 692 / 104 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, data, docs, examples, schemas, scripts, src, templates, tests, tools |
| 상위 확장자 | .py: 482, .md: 179, .json: 9, .yml: 7, .yaml: 5, (none): 5, .toml: 2, .example: 1, .lock: 1, .sh: 1 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | langchain, langgraph, llamaindex, llama-index |
| vectorStores | qdrant |
| modelRuntime | torch, transformers, vllm, ollama, llama |
| webRuntime | 없음 |
| developerSurface | typer |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 401 | [tools/eval/run_beir.py](../../../../sources/BjornMelin__docmind-ai-llm/tools/eval/run_beir.py)<br>[tools/eval/run_ragas.py](../../../../sources/BjornMelin__docmind-ai-llm/tools/eval/run_ragas.py)<br>[tests/__init__.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/conftest.py)<br>[tests/README.md](../../../../sources/BjornMelin__docmind-ai-llm/tests/README.md)<br>[tests/shared_fixtures.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/shared_fixtures.py) |
| CI workflow | 4 | [.github/workflows/ci.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/ci.yml)<br>[.github/workflows/docs-ci.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/docs-ci.yml)<br>[.github/workflows/release.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/release.yml)<br>[.github/workflows/semantic-pull-request.yml](../../../../sources/BjornMelin__docmind-ai-llm/.github/workflows/semantic-pull-request.yml) |
| 컨테이너/배포 | 3 | [docker-compose.prod.yml](../../../../sources/BjornMelin__docmind-ai-llm/docker-compose.prod.yml)<br>[docker-compose.yml](../../../../sources/BjornMelin__docmind-ai-llm/docker-compose.yml)<br>[Dockerfile](../../../../sources/BjornMelin__docmind-ai-llm/Dockerfile) |
| 보안/정책 | 16 | [tests/unit/utils/security/test_encrypt_file.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/utils/security/test_encrypt_file.py)<br>[tests/unit/utils/security/test_security_crypto_paths.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/utils/security/test_security_crypto_paths.py)<br>[tests/unit/utils/security/test_security_misc.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/utils/security/test_security_misc.py)<br>[tests/unit/utils/security/test_security.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/utils/security/test_security.py)<br>[tests/unit/security/test_export_path_validation.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/security/test_export_path_validation.py)<br>[tests/unit/retrieval/test_seed_policy.py](../../../../sources/BjornMelin__docmind-ai-llm/tests/unit/retrieval/test_seed_policy.py) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/BjornMelin__docmind-ai-llm/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/app.py`, `docker-compose.prod.yml`, `docker-compose.yml`.
2. entrypoint를 따라 실행 흐름 확인: `src/app.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/models/pull.py`, `tools/eval/run_beir.py`.
4. retrieval/memory/indexing 확인: `tests/unit/test_settings_retrieval_timeouts_env.py`, `tests/unit/utils/storage/test_storage_create_vector_store_calls_ensure.py`, `tests/unit/ui/test_ingest_adapter_return_shape.py`.
5. test/eval 파일로 동작 검증: `tools/eval/run_beir.py`, `tools/eval/run_ragas.py`, `tests/__init__.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 DocMind AI is a powerful, open source Streamlit application leveraging LlamaIndex, LangGraph, and local Large Language M. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
