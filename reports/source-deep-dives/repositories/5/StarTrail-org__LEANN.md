# StarTrail-org/LEANN 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

[MLsys2026]: RAG on Everything with LEANN. Enjoy 97% storage savings while running a fast, accurate, and 100% private RAG application on your personal device.

## 요약

- 조사 단위: `sources/StarTrail-org__LEANN` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 277 files, 72 directories, depth score 116, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/wechat-exporter/main.py, packages/leann-core/src/leann/__main__.py, packages/leann-core/src/leann/server.py이고, 의존성 단서는 openai, llamaindex, llama-index, typer, torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | StarTrail-org/LEANN |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | korea |
| Language | Python |
| Stars | 12202 |
| Forks | 1094 |
| License | MIT |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/StarTrail-org__LEANN](../../../../sources/StarTrail-org__LEANN) |
| 기존 보고서 | [reports/global-trending/repositories/StarTrail-org__LEANN.md](../../../global-trending/repositories/StarTrail-org__LEANN.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 277 / 72 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .devcontainer, .github, apps, assets, benchmarks, data, docker, docs, examples, packages, scripts, skills, sky, tests, videos |
| 상위 확장자 | .py: 164, .md: 46, .png: 13, (none): 10, .toml: 8, .yml: 8, .sh: 5, .gif: 4, .txt: 4, .csv: 2, .json: 2, .pdf: 2 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | wechat-exporter | wechat-exporter |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | llamaindex, llama-index |
| vectorStores | faiss |
| modelRuntime | torch, transformers, ollama, llama |
| webRuntime | 없음 |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [packages/wechat-exporter/main.py](../../../../sources/StarTrail-org__LEANN/packages/wechat-exporter/main.py)<br>[packages/leann-core/src/leann/__main__.py](../../../../sources/StarTrail-org__LEANN/packages/leann-core/src/leann/__main__.py)<br>[packages/leann-core/src/leann/server.py](../../../../sources/StarTrail-org__LEANN/packages/leann-core/src/leann/server.py) |
| agentRuntime | 7 | [tests/openclaw/fixtures/MEMORY.md](../../../../sources/StarTrail-org__LEANN/tests/openclaw/fixtures/MEMORY.md)<br>[tests/openclaw/fixtures/memory/2026-02-15.md](../../../../sources/StarTrail-org__LEANN/tests/openclaw/fixtures/memory/2026-02-15.md)<br>[tests/openclaw/fixtures/memory/2026-02-20.md](../../../../sources/StarTrail-org__LEANN/tests/openclaw/fixtures/memory/2026-02-20.md)<br>[tests/openclaw/fixtures/memory/2026-02-25.md](../../../../sources/StarTrail-org__LEANN/tests/openclaw/fixtures/memory/2026-02-25.md)<br>[skills/leann-memory/claw.json](../../../../sources/StarTrail-org__LEANN/skills/leann-memory/claw.json)<br>[skills/leann-memory/instructions.md](../../../../sources/StarTrail-org__LEANN/skills/leann-memory/instructions.md)<br>[skills/leann-memory/README.md](../../../../sources/StarTrail-org__LEANN/skills/leann-memory/README.md) |
| mcp | 10 | [tests/test_mcp_integration.py](../../../../sources/StarTrail-org__LEANN/tests/test_mcp_integration.py)<br>[tests/test_mcp_standalone.py](../../../../sources/StarTrail-org__LEANN/tests/test_mcp_standalone.py)<br>[tests/openclaw/test_mcp_e2e.py](../../../../sources/StarTrail-org__LEANN/tests/openclaw/test_mcp_e2e.py)<br>[tests/openclaw/test_mcp_protocol.py](../../../../sources/StarTrail-org__LEANN/tests/openclaw/test_mcp_protocol.py)<br>[packages/leann-mcp/README.md](../../../../sources/StarTrail-org__LEANN/packages/leann-mcp/README.md)<br>[packages/leann-core/src/leann/mcp.py](../../../../sources/StarTrail-org__LEANN/packages/leann-core/src/leann/mcp.py)<br>[examples/mcp_integration_demo.py](../../../../sources/StarTrail-org__LEANN/examples/mcp_integration_demo.py)<br>[assets/mcp_leann.png](../../../../sources/StarTrail-org__LEANN/assets/mcp_leann.png) |
| retrieval | 49 | [tests/test_document_rag.py](../../../../sources/StarTrail-org__LEANN/tests/test_document_rag.py)<br>[tests/test_embedding_batch_size.py](../../../../sources/StarTrail-org__LEANN/tests/test_embedding_batch_size.py)<br>[tests/test_embedding_prompt_template.py](../../../../sources/StarTrail-org__LEANN/tests/test_embedding_prompt_template.py)<br>[tests/test_embedding_server_cli_flags.py](../../../../sources/StarTrail-org__LEANN/tests/test_embedding_server_cli_flags.py)<br>[tests/test_embedding_server_manager_e2e.py](../../../../sources/StarTrail-org__LEANN/tests/test_embedding_server_manager_e2e.py)<br>[tests/test_embedding_server_manager.py](../../../../sources/StarTrail-org__LEANN/tests/test_embedding_server_manager.py)<br>[tests/support/fake_embedding_server_module.py](../../../../sources/StarTrail-org__LEANN/tests/support/fake_embedding_server_module.py)<br>[tests/openclaw/fixtures/MEMORY.md](../../../../sources/StarTrail-org__LEANN/tests/openclaw/fixtures/MEMORY.md) |
| spec | 1 | [docs/roadmap.md](../../../../sources/StarTrail-org__LEANN/docs/roadmap.md) |
| eval | 61 | [tests/README.md](../../../../sources/StarTrail-org__LEANN/tests/README.md)<br>[tests/test_astchunk_integration.py](../../../../sources/StarTrail-org__LEANN/tests/test_astchunk_integration.py)<br>[tests/test_basic.py](../../../../sources/StarTrail-org__LEANN/tests/test_basic.py)<br>[tests/test_build_from_arrays.py](../../../../sources/StarTrail-org__LEANN/tests/test_build_from_arrays.py)<br>[tests/test_ci_minimal.py](../../../../sources/StarTrail-org__LEANN/tests/test_ci_minimal.py)<br>[tests/test_cli_ask.py](../../../../sources/StarTrail-org__LEANN/tests/test_cli_ask.py)<br>[tests/test_cli_daemon_workflow.py](../../../../sources/StarTrail-org__LEANN/tests/test_cli_daemon_workflow.py)<br>[tests/test_cli_prompt_template.py](../../../../sources/StarTrail-org__LEANN/tests/test_cli_prompt_template.py) |
| security | 0 | 명확하지 않음 |
| ci | 4 | [.github/workflows/build-and-publish.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/build-and-publish.yml)<br>[.github/workflows/build-reusable.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/build-reusable.yml)<br>[.github/workflows/link-check.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/link-check.yml)<br>[.github/workflows/release-manual.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/release-manual.yml) |
| container | 4 | [tests/openclaw/docker-compose.yml](../../../../sources/StarTrail-org__LEANN/tests/openclaw/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/StarTrail-org__LEANN/docker/Dockerfile)<br>[docker/Dockerfile.cpu](../../../../sources/StarTrail-org__LEANN/docker/Dockerfile.cpu)<br>[docker/Dockerfile.dev](../../../../sources/StarTrail-org__LEANN/docker/Dockerfile.dev) |
| instruction | 1 | [CLAUDE.md](../../../../sources/StarTrail-org__LEANN/CLAUDE.md) |
| docs | 45 | [README.md](../../../../sources/StarTrail-org__LEANN/README.md)<br>[tests/README.md](../../../../sources/StarTrail-org__LEANN/tests/README.md)<br>[skills/leann-memory/README.md](../../../../sources/StarTrail-org__LEANN/skills/leann-memory/README.md)<br>[packages/leann-mcp/README.md](../../../../sources/StarTrail-org__LEANN/packages/leann-mcp/README.md)<br>[packages/leann-core/README.md](../../../../sources/StarTrail-org__LEANN/packages/leann-core/README.md)<br>[packages/leann-backend-ivf/README.md](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-ivf/README.md)<br>[packages/leann-backend-flashlib-ivf/README.md](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-flashlib-ivf/README.md)<br>[packages/leann-backend-flashlib/README.md](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-flashlib/README.md) |
| config | 9 | [pyproject.toml](../../../../sources/StarTrail-org__LEANN/pyproject.toml)<br>[uv.lock](../../../../sources/StarTrail-org__LEANN/uv.lock)<br>[packages/leann-core/pyproject.toml](../../../../sources/StarTrail-org__LEANN/packages/leann-core/pyproject.toml)<br>[packages/leann-backend-ivf/pyproject.toml](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-ivf/pyproject.toml)<br>[packages/leann-backend-hnsw/pyproject.toml](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-hnsw/pyproject.toml)<br>[packages/leann-backend-flashlib-ivf/pyproject.toml](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-flashlib-ivf/pyproject.toml)<br>[packages/leann-backend-flashlib/pyproject.toml](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-flashlib/pyproject.toml)<br>[packages/leann-backend-diskann/pyproject.toml](../../../../sources/StarTrail-org__LEANN/packages/leann-backend-diskann/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 61 | [tests/README.md](../../../../sources/StarTrail-org__LEANN/tests/README.md)<br>[tests/test_astchunk_integration.py](../../../../sources/StarTrail-org__LEANN/tests/test_astchunk_integration.py)<br>[tests/test_basic.py](../../../../sources/StarTrail-org__LEANN/tests/test_basic.py)<br>[tests/test_build_from_arrays.py](../../../../sources/StarTrail-org__LEANN/tests/test_build_from_arrays.py)<br>[tests/test_ci_minimal.py](../../../../sources/StarTrail-org__LEANN/tests/test_ci_minimal.py)<br>[tests/test_cli_ask.py](../../../../sources/StarTrail-org__LEANN/tests/test_cli_ask.py) |
| CI workflow | 4 | [.github/workflows/build-and-publish.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/build-and-publish.yml)<br>[.github/workflows/build-reusable.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/build-reusable.yml)<br>[.github/workflows/link-check.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/link-check.yml)<br>[.github/workflows/release-manual.yml](../../../../sources/StarTrail-org__LEANN/.github/workflows/release-manual.yml) |
| 컨테이너/배포 | 4 | [tests/openclaw/docker-compose.yml](../../../../sources/StarTrail-org__LEANN/tests/openclaw/docker-compose.yml)<br>[docker/Dockerfile](../../../../sources/StarTrail-org__LEANN/docker/Dockerfile)<br>[docker/Dockerfile.cpu](../../../../sources/StarTrail-org__LEANN/docker/Dockerfile.cpu)<br>[docker/Dockerfile.dev](../../../../sources/StarTrail-org__LEANN/docker/Dockerfile.dev) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/StarTrail-org__LEANN/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/wechat-exporter/main.py`, `packages/leann-core/src/leann/__main__.py`, `packages/leann-core/src/leann/server.py`.
2. entrypoint를 따라 실행 흐름 확인: `packages/wechat-exporter/main.py`, `packages/leann-core/src/leann/__main__.py`, `packages/leann-core/src/leann/server.py`.
3. agent/tool runtime 매핑: `tests/openclaw/fixtures/MEMORY.md`, `tests/openclaw/fixtures/memory/2026-02-15.md`, `tests/openclaw/fixtures/memory/2026-02-20.md`.
4. retrieval/memory/indexing 확인: `tests/test_document_rag.py`, `tests/test_embedding_batch_size.py`, `tests/test_embedding_prompt_template.py`.
5. test/eval 파일로 동작 검증: `tests/README.md`, `tests/test_astchunk_integration.py`, `tests/test_basic.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 MLsys2026 RAG on Everything with LEANN. Enjoy 97% storage savings while running a fast, accurate, and 100% private RAG a. 핵심 구조 신호는 Python, pyproject.toml, README.md, CLAUDE.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
