# chroma-core/chroma 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 2029 files, 449 directories.

## 요약

- 조사 단위: `sources/chroma-core__chroma` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,028 files, 448 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/mintlify/integrations/frameworks/anthropic-mcp.mdx, docs/mintlify/images/mcp-developer.png, docs/mintlify/images/mcp-hammer.png이고, 의존성 단서는 fastapi, pydantic, typer, chroma, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | chroma-core/chroma |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 28464 |
| Forks | 2326 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/chroma-core__chroma](../../../../sources/chroma-core__chroma) |
| 기존 보고서 | [reports/global-trending/repositories/chroma-core__chroma.md](../../../global-trending/repositories/chroma-core__chroma.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2028 / 448 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .config, .github, bin, chromadb, clients, deployments, docs, examples, go, idl, k8s, rust, sample_apps, schemas |
| 상위 확장자 | .rs: 653, .py: 240, .ts: 230, .mdx: 125, .json: 121, .go: 98, .sql: 95, .md: 79, .yaml: 77, .png: 57, .toml: 46, (none): 36 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 21 |
| examples/basic_functionality | examples workspace | 4 |
| examples/deployments | examples workspace | 4 |
| examples/chat_with_your_documents | examples workspace | 3 |
| examples/gemini | examples workspace | 3 |
| examples/xai | examples workspace | 3 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| chromadb | top-level component | 1 |
| clients | source boundary | 1 |
| deployments | deployment surface | 1 |
| examples | top-level component | 1 |
| examples/observability | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| go | top-level component | 1 |
| idl | top-level component | 1 |
| k8s | deployment surface | 1 |
| rust | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | chroma | chroma |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | chroma |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [docs/mintlify/integrations/frameworks/anthropic-mcp.mdx](../../../../sources/chroma-core__chroma/docs/mintlify/integrations/frameworks/anthropic-mcp.mdx) | mcp signal |
| mcp | [docs/mintlify/images/mcp-developer.png](../../../../sources/chroma-core__chroma/docs/mintlify/images/mcp-developer.png) | mcp signal |
| mcp | [docs/mintlify/images/mcp-hammer.png](../../../../sources/chroma-core__chroma/docs/mintlify/images/mcp-hammer.png) | mcp signal |
| mcp | [docs/mintlify/images/mcp-instructions.png](../../../../sources/chroma-core__chroma/docs/mintlify/images/mcp-instructions.png) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/chroma-core__chroma/AGENTS.md) | agentRuntime signal |
| agentRuntime | [rust/system/src/executor.rs](../../../../sources/chroma-core__chroma/rust/system/src/executor.rs) | agentRuntime signal |
| agentRuntime | [rust/spanner-migrations/src/runner.rs](../../../../sources/chroma-core__chroma/rust/spanner-migrations/src/runner.rs) | agentRuntime signal |
| agentRuntime | [rust/frontend/src/executor/config.rs](../../../../sources/chroma-core__chroma/rust/frontend/src/executor/config.rs) | agentRuntime signal |
| entrypoints | [rust/worker/src/server.rs](../../../../sources/chroma-core__chroma/rust/worker/src/server.rs) | entrypoints signal |
| entrypoints | [rust/worker/src/work_queue/server.rs](../../../../sources/chroma-core__chroma/rust/worker/src/work_queue/server.rs) | entrypoints signal |
| entrypoints | [rust/worker/src/fn_consumer/server.rs](../../../../sources/chroma-core__chroma/rust/worker/src/fn_consumer/server.rs) | entrypoints signal |
| entrypoints | [rust/worker/src/bin/compaction_client.rs](../../../../sources/chroma-core__chroma/rust/worker/src/bin/compaction_client.rs) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 108 | [rust/worker/src/server.rs](../../../../sources/chroma-core__chroma/rust/worker/src/server.rs)<br>[rust/worker/src/work_queue/server.rs](../../../../sources/chroma-core__chroma/rust/worker/src/work_queue/server.rs)<br>[rust/worker/src/fn_consumer/server.rs](../../../../sources/chroma-core__chroma/rust/worker/src/fn_consumer/server.rs)<br>[rust/worker/src/bin/compaction_client.rs](../../../../sources/chroma-core__chroma/rust/worker/src/bin/compaction_client.rs)<br>[rust/worker/src/bin/compaction_service.rs](../../../../sources/chroma-core__chroma/rust/worker/src/bin/compaction_service.rs)<br>[rust/worker/src/bin/fn_consumer.rs](../../../../sources/chroma-core__chroma/rust/worker/src/bin/fn_consumer.rs)<br>[rust/worker/src/bin/query_service.rs](../../../../sources/chroma-core__chroma/rust/worker/src/bin/query_service.rs)<br>[rust/worker/src/bin/work_queue_cli.rs](../../../../sources/chroma-core__chroma/rust/worker/src/bin/work_queue_cli.rs) |
| agentRuntime | 15 | [AGENTS.md](../../../../sources/chroma-core__chroma/AGENTS.md)<br>[rust/system/src/executor.rs](../../../../sources/chroma-core__chroma/rust/system/src/executor.rs)<br>[rust/spanner-migrations/src/runner.rs](../../../../sources/chroma-core__chroma/rust/spanner-migrations/src/runner.rs)<br>[rust/frontend/src/executor/config.rs](../../../../sources/chroma-core__chroma/rust/frontend/src/executor/config.rs)<br>[rust/frontend/src/executor/distributed.rs](../../../../sources/chroma-core__chroma/rust/frontend/src/executor/distributed.rs)<br>[rust/frontend/src/executor/local.rs](../../../../sources/chroma-core__chroma/rust/frontend/src/executor/local.rs)<br>[rust/frontend/src/executor/mod.rs](../../../../sources/chroma-core__chroma/rust/frontend/src/executor/mod.rs)<br>[rust/blockstore/src/memory/mod.rs](../../../../sources/chroma-core__chroma/rust/blockstore/src/memory/mod.rs) |
| mcp | 9 | [docs/mintlify/integrations/frameworks/anthropic-mcp.mdx](../../../../sources/chroma-core__chroma/docs/mintlify/integrations/frameworks/anthropic-mcp.mdx)<br>[docs/mintlify/images/mcp-developer.png](../../../../sources/chroma-core__chroma/docs/mintlify/images/mcp-developer.png)<br>[docs/mintlify/images/mcp-hammer.png](../../../../sources/chroma-core__chroma/docs/mintlify/images/mcp-hammer.png)<br>[docs/mintlify/images/mcp-instructions.png](../../../../sources/chroma-core__chroma/docs/mintlify/images/mcp-instructions.png)<br>[docs/mintlify/images/mcp-search.png](../../../../sources/chroma-core__chroma/docs/mintlify/images/mcp-search.png)<br>[docs/mintlify/images/mcp-settings.png](../../../../sources/chroma-core__chroma/docs/mintlify/images/mcp-settings.png)<br>[docs/mintlify/images/mcp-store.png](../../../../sources/chroma-core__chroma/docs/mintlify/images/mcp-store.png)<br>[docs/mintlify/images/mcp-tools.png](../../../../sources/chroma-core__chroma/docs/mintlify/images/mcp-tools.png) |
| retrieval | 258 | [schemas/embedding_functions/amazon_bedrock.json](../../../../sources/chroma-core__chroma/schemas/embedding_functions/amazon_bedrock.json)<br>[schemas/embedding_functions/base_schema.json](../../../../sources/chroma-core__chroma/schemas/embedding_functions/base_schema.json)<br>[schemas/embedding_functions/baseten.json](../../../../sources/chroma-core__chroma/schemas/embedding_functions/baseten.json)<br>[schemas/embedding_functions/bm25.json](../../../../sources/chroma-core__chroma/schemas/embedding_functions/bm25.json)<br>[schemas/embedding_functions/chroma_bm25.json](../../../../sources/chroma-core__chroma/schemas/embedding_functions/chroma_bm25.json)<br>[schemas/embedding_functions/chroma_langchain.json](../../../../sources/chroma-core__chroma/schemas/embedding_functions/chroma_langchain.json)<br>[schemas/embedding_functions/chroma-cloud-qwen.json](../../../../sources/chroma-core__chroma/schemas/embedding_functions/chroma-cloud-qwen.json)<br>[schemas/embedding_functions/chroma-cloud-splade.json](../../../../sources/chroma-core__chroma/schemas/embedding_functions/chroma-cloud-splade.json) |
| spec | 11 | [requirements_dev.txt](../../../../sources/chroma-core__chroma/requirements_dev.txt)<br>[requirements.txt](../../../../sources/chroma-core__chroma/requirements.txt)<br>[sample_apps/generative_benchmarking/requirements.txt](../../../../sources/chroma-core__chroma/sample_apps/generative_benchmarking/requirements.txt)<br>[examples/xai/requirements.txt](../../../../sources/chroma-core__chroma/examples/xai/requirements.txt)<br>[examples/gemini/requirements.txt](../../../../sources/chroma-core__chroma/examples/gemini/requirements.txt)<br>[examples/chat_with_your_documents/requirements.txt](../../../../sources/chroma-core__chroma/examples/chat_with_your_documents/requirements.txt)<br>[examples/basic_functionality/assets/auth-architecture.png](../../../../sources/chroma-core__chroma/examples/basic_functionality/assets/auth-architecture.png)<br>[docs/mintlify/reference/architecture/distributed.mdx](../../../../sources/chroma-core__chroma/docs/mintlify/reference/architecture/distributed.mdx) |
| eval | 375 | [docker-compose.test-auth.yml](../../../../sources/chroma-core__chroma/docker-compose.test-auth.yml)<br>[docker-compose.test.yml](../../../../sources/chroma-core__chroma/docker-compose.test.yml)<br>[sample_apps/generative_benchmarking/generate_benchmark.ipynb](../../../../sources/chroma-core__chroma/sample_apps/generative_benchmarking/generate_benchmark.ipynb)<br>[rust/worker/tests/config_from_default_path.rs](../../../../sources/chroma-core__chroma/rust/worker/tests/config_from_default_path.rs)<br>[rust/worker/tests/config_from_specific_path.rs](../../../../sources/chroma-core__chroma/rust/worker/tests/config_from_specific_path.rs)<br>[rust/worker/tests/config_missing_default_field.rs](../../../../sources/chroma-core__chroma/rust/worker/tests/config_missing_default_field.rs)<br>[rust/worker/tests/config_with_env_override.rs](../../../../sources/chroma-core__chroma/rust/worker/tests/config_with_env_override.rs)<br>[rust/worker/tests/config_without_cache_directive.rs](../../../../sources/chroma-core__chroma/rust/worker/tests/config_without_cache_directive.rs) |
| security | 21 | [docker-compose.test-auth.yml](../../../../sources/chroma-core__chroma/docker-compose.test-auth.yml)<br>[rust/worker/src/compactor/scheduler_policy.rs](../../../../sources/chroma-core__chroma/rust/worker/src/compactor/scheduler_policy.rs)<br>[rust/system/src/utils/guard.rs](../../../../sources/chroma-core__chroma/rust/system/src/utils/guard.rs)<br>[rust/frontend-core/src/auth.rs](../../../../sources/chroma-core__chroma/rust/frontend-core/src/auth.rs)<br>[rust/config/src/assignment/assignment_policy.rs](../../../../sources/chroma-core__chroma/rust/config/src/assignment/assignment_policy.rs)<br>[examples/basic_functionality/auth.ipynb](../../../../sources/chroma-core__chroma/examples/basic_functionality/auth.ipynb)<br>[examples/basic_functionality/assets/auth-architecture.png](../../../../sources/chroma-core__chroma/examples/basic_functionality/assets/auth-architecture.png)<br>[docs/mintlify/images/sync/github_secret_key.png](../../../../sources/chroma-core__chroma/docs/mintlify/images/sync/github_secret_key.png) |
| ci | 30 | [bin/ci/determine-tests-to-run.sh](../../../../sources/chroma-core__chroma/bin/ci/determine-tests-to-run.sh)<br>[bin/ci/gha-runtime-prometheus.sh](../../../../sources/chroma-core__chroma/bin/ci/gha-runtime-prometheus.sh)<br>[bin/ci/gha-runtime-report.sh](../../../../sources/chroma-core__chroma/bin/ci/gha-runtime-report.sh)<br>[bin/ci/merge_python_test_inventory.py](../../../../sources/chroma-core__chroma/bin/ci/merge_python_test_inventory.py)<br>[bin/ci/preload_default_onnx_model.py](../../../../sources/chroma-core__chroma/bin/ci/preload_default_onnx_model.py)<br>[bin/ci/pytest-shard.py](../../../../sources/chroma-core__chroma/bin/ci/pytest-shard.py)<br>[bin/ci/test-gha-runtime-report.sh](../../../../sources/chroma-core__chroma/bin/ci/test-gha-runtime-report.sh)<br>[bin/ci/fixtures/gha-runtime-jobs.json](../../../../sources/chroma-core__chroma/bin/ci/fixtures/gha-runtime-jobs.json) |
| container | 66 | [docker-compose.server.example.yml](../../../../sources/chroma-core__chroma/docker-compose.server.example.yml)<br>[docker-compose.test-auth.yml](../../../../sources/chroma-core__chroma/docker-compose.test-auth.yml)<br>[docker-compose.test.yml](../../../../sources/chroma-core__chroma/docker-compose.test.yml)<br>[docker-compose.yml](../../../../sources/chroma-core__chroma/docker-compose.yml)<br>[Dockerfile](../../../../sources/chroma-core__chroma/Dockerfile)<br>[Dockerfile.windows](../../../../sources/chroma-core__chroma/Dockerfile.windows)<br>[rust/Dockerfile](../../../../sources/chroma-core__chroma/rust/Dockerfile)<br>[k8s/WARNING.md](../../../../sources/chroma-core__chroma/k8s/WARNING.md) |
| instruction | 3 | [AGENTS.md](../../../../sources/chroma-core__chroma/AGENTS.md)<br>[CLAUDE.md](../../../../sources/chroma-core__chroma/CLAUDE.md)<br>[docs/mintlify/AGENTS.md](../../../../sources/chroma-core__chroma/docs/mintlify/AGENTS.md) |
| docs | 257 | [README.md](../../../../sources/chroma-core__chroma/README.md)<br>[schemas/embedding_functions/README.md](../../../../sources/chroma-core__chroma/schemas/embedding_functions/README.md)<br>[sample_apps/movies/README.md](../../../../sources/chroma-core__chroma/sample_apps/movies/README.md)<br>[sample_apps/generative_benchmarking/README.md](../../../../sources/chroma-core__chroma/sample_apps/generative_benchmarking/README.md)<br>[rust/worker/README.md](../../../../sources/chroma-core__chroma/rust/worker/README.md)<br>[rust/wal3/README.md](../../../../sources/chroma-core__chroma/rust/wal3/README.md)<br>[rust/types/README_OPERATORS.md](../../../../sources/chroma-core__chroma/rust/types/README_OPERATORS.md)<br>[rust/spanner-migrations/README.md](../../../../sources/chroma-core__chroma/rust/spanner-migrations/README.md) |
| config | 120 | [Cargo.lock](../../../../sources/chroma-core__chroma/Cargo.lock)<br>[Cargo.toml](../../../../sources/chroma-core__chroma/Cargo.toml)<br>[pyproject.toml](../../../../sources/chroma-core__chroma/pyproject.toml)<br>[requirements_dev.txt](../../../../sources/chroma-core__chroma/requirements_dev.txt)<br>[requirements.txt](../../../../sources/chroma-core__chroma/requirements.txt)<br>[sample_apps/movies/package.json](../../../../sources/chroma-core__chroma/sample_apps/movies/package.json)<br>[sample_apps/movies/tsconfig.json](../../../../sources/chroma-core__chroma/sample_apps/movies/tsconfig.json)<br>[sample_apps/generative_benchmarking/pyproject.toml](../../../../sources/chroma-core__chroma/sample_apps/generative_benchmarking/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 375 | [docker-compose.test-auth.yml](../../../../sources/chroma-core__chroma/docker-compose.test-auth.yml)<br>[docker-compose.test.yml](../../../../sources/chroma-core__chroma/docker-compose.test.yml)<br>[sample_apps/generative_benchmarking/generate_benchmark.ipynb](../../../../sources/chroma-core__chroma/sample_apps/generative_benchmarking/generate_benchmark.ipynb)<br>[rust/worker/tests/config_from_default_path.rs](../../../../sources/chroma-core__chroma/rust/worker/tests/config_from_default_path.rs)<br>[rust/worker/tests/config_from_specific_path.rs](../../../../sources/chroma-core__chroma/rust/worker/tests/config_from_specific_path.rs)<br>[rust/worker/tests/config_missing_default_field.rs](../../../../sources/chroma-core__chroma/rust/worker/tests/config_missing_default_field.rs) |
| CI workflow | 30 | [bin/ci/determine-tests-to-run.sh](../../../../sources/chroma-core__chroma/bin/ci/determine-tests-to-run.sh)<br>[bin/ci/gha-runtime-prometheus.sh](../../../../sources/chroma-core__chroma/bin/ci/gha-runtime-prometheus.sh)<br>[bin/ci/gha-runtime-report.sh](../../../../sources/chroma-core__chroma/bin/ci/gha-runtime-report.sh)<br>[bin/ci/merge_python_test_inventory.py](../../../../sources/chroma-core__chroma/bin/ci/merge_python_test_inventory.py)<br>[bin/ci/preload_default_onnx_model.py](../../../../sources/chroma-core__chroma/bin/ci/preload_default_onnx_model.py)<br>[bin/ci/pytest-shard.py](../../../../sources/chroma-core__chroma/bin/ci/pytest-shard.py) |
| 컨테이너/배포 | 66 | [docker-compose.server.example.yml](../../../../sources/chroma-core__chroma/docker-compose.server.example.yml)<br>[docker-compose.test-auth.yml](../../../../sources/chroma-core__chroma/docker-compose.test-auth.yml)<br>[docker-compose.test.yml](../../../../sources/chroma-core__chroma/docker-compose.test.yml)<br>[docker-compose.yml](../../../../sources/chroma-core__chroma/docker-compose.yml)<br>[Dockerfile](../../../../sources/chroma-core__chroma/Dockerfile)<br>[Dockerfile.windows](../../../../sources/chroma-core__chroma/Dockerfile.windows) |
| 보안/정책 | 21 | [docker-compose.test-auth.yml](../../../../sources/chroma-core__chroma/docker-compose.test-auth.yml)<br>[rust/worker/src/compactor/scheduler_policy.rs](../../../../sources/chroma-core__chroma/rust/worker/src/compactor/scheduler_policy.rs)<br>[rust/system/src/utils/guard.rs](../../../../sources/chroma-core__chroma/rust/system/src/utils/guard.rs)<br>[rust/frontend-core/src/auth.rs](../../../../sources/chroma-core__chroma/rust/frontend-core/src/auth.rs)<br>[rust/config/src/assignment/assignment_policy.rs](../../../../sources/chroma-core__chroma/rust/config/src/assignment/assignment_policy.rs)<br>[examples/basic_functionality/auth.ipynb](../../../../sources/chroma-core__chroma/examples/basic_functionality/auth.ipynb) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/chroma-core__chroma/AGENTS.md)<br>[CLAUDE.md](../../../../sources/chroma-core__chroma/CLAUDE.md)<br>[docs/mintlify/AGENTS.md](../../../../sources/chroma-core__chroma/docs/mintlify/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/mintlify/integrations/frameworks/anthropic-mcp.mdx`, `docs/mintlify/images/mcp-developer.png`, `docs/mintlify/images/mcp-hammer.png`.
2. entrypoint를 따라 실행 흐름 확인: `rust/worker/src/server.rs`, `rust/worker/src/work_queue/server.rs`, `rust/worker/src/fn_consumer/server.rs`.
3. agent/tool runtime 매핑: `AGENTS.md`, `rust/system/src/executor.rs`, `rust/spanner-migrations/src/runner.rs`.
4. retrieval/memory/indexing 확인: `schemas/embedding_functions/amazon_bedrock.json`, `schemas/embedding_functions/base_schema.json`, `schemas/embedding_functions/baseten.json`.
5. test/eval 파일로 동작 검증: `docker-compose.test-auth.yml`, `docker-compose.test.yml`, `sample_apps/generative_benchmarking/generate_benchmark.ipynb`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2029 files, 449 directories.. 핵심 구조 신호는 Rust, pyproject.toml, requirements.txt, Cargo.toml, Dockerfile, docker-compose.yml이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
