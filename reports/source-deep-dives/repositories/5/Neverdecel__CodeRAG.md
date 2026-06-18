# Neverdecel/CodeRAG 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local-first, zero-key semantic code search for large and custom codebases — hybrid vector + keyword retrieval with symbol-aware chunking. Usable as a CLI, Python library, REST API, or web UI.

## 요약

- 조사 단위: `sources/Neverdecel__CodeRAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 137 files, 27 directories, depth score 113, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_retrieval.py, fuzz/fuzz_chunk_file.py, docs/research/code-retrieval-strategy.md이고, 의존성 단서는 openai, anthropic, claude, codex, mcp, fastapi, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Neverdecel/CodeRAG |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 214 |
| Forks | 35 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Neverdecel__CodeRAG](../../../../sources/Neverdecel__CodeRAG) |
| 기존 보고서 | [reports/global-trending/repositories/Neverdecel__CodeRAG.md](../../../global-trending/repositories/Neverdecel__CodeRAG.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 137 / 27 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .clusterfuzzlite, .github, assets, coderag, deploy, docs, fuzz, scripts, tests |
| 상위 확장자 | .py: 55, .yaml: 19, .png: 13, .md: 10, .yml: 10, .html: 8, (none): 6, .jsonl: 3, .ico: 2, .json: 2, .txt: 2, .css: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 18 |
| docs | documentation surface | 6 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| coderag | top-level component | 1 |
| deploy | deployment surface | 1 |
| fuzz | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | coderag | coderag |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp, codex |
| agentFrameworks | 없음 |
| vectorStores | faiss |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [tests/test_retrieval.py](../../../../sources/Neverdecel__CodeRAG/tests/test_retrieval.py) | retrieval signal |
| retrieval | [fuzz/fuzz_chunk_file.py](../../../../sources/Neverdecel__CodeRAG/fuzz/fuzz_chunk_file.py) | retrieval signal |
| retrieval | [docs/research/code-retrieval-strategy.md](../../../../sources/Neverdecel__CodeRAG/docs/research/code-retrieval-strategy.md) | retrieval signal |
| retrieval | [deploy/helm/coderag/templates/index-job.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/templates/index-job.yaml) | retrieval signal |
| docs | [README.md](../../../../sources/Neverdecel__CodeRAG/README.md) | docs signal |
| docs | [docs/eval.md](../../../../sources/Neverdecel__CodeRAG/docs/eval.md) | docs signal |
| docs | [docs/research/external-validation.md](../../../../sources/Neverdecel__CodeRAG/docs/research/external-validation.md) | docs signal |
| eval | [tests/conftest.py](../../../../sources/Neverdecel__CodeRAG/tests/conftest.py) | eval signal |
| eval | [tests/test_chunking.py](../../../../sources/Neverdecel__CodeRAG/tests/test_chunking.py) | eval signal |
| eval | [tests/test_config_and_providers.py](../../../../sources/Neverdecel__CodeRAG/tests/test_config_and_providers.py) | eval signal |
| eval | [tests/test_eval.py](../../../../sources/Neverdecel__CodeRAG/tests/test_eval.py) | eval signal |
| config | [pyproject.toml](../../../../sources/Neverdecel__CodeRAG/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [AGENTS.md](../../../../sources/Neverdecel__CodeRAG/AGENTS.md) |
| mcp | 2 | [tests/test_mcp.py](../../../../sources/Neverdecel__CodeRAG/tests/test_mcp.py)<br>[coderag/surfaces/mcp_server.py](../../../../sources/Neverdecel__CodeRAG/coderag/surfaces/mcp_server.py) |
| retrieval | 11 | [tests/test_retrieval.py](../../../../sources/Neverdecel__CodeRAG/tests/test_retrieval.py)<br>[fuzz/fuzz_chunk_file.py](../../../../sources/Neverdecel__CodeRAG/fuzz/fuzz_chunk_file.py)<br>[docs/research/code-retrieval-strategy.md](../../../../sources/Neverdecel__CodeRAG/docs/research/code-retrieval-strategy.md)<br>[deploy/helm/coderag/templates/index-job.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/templates/index-job.yaml)<br>[coderag/surfaces/templates/index.html](../../../../sources/Neverdecel__CodeRAG/coderag/surfaces/templates/index.html)<br>[coderag/store/vector_index.py](../../../../sources/Neverdecel__CodeRAG/coderag/store/vector_index.py)<br>[coderag/retrieval/__init__.py](../../../../sources/Neverdecel__CodeRAG/coderag/retrieval/__init__.py)<br>[coderag/retrieval/fusion.py](../../../../sources/Neverdecel__CodeRAG/coderag/retrieval/fusion.py) |
| spec | 1 | [requirements.txt](../../../../sources/Neverdecel__CodeRAG/requirements.txt) |
| eval | 29 | [tests/conftest.py](../../../../sources/Neverdecel__CodeRAG/tests/conftest.py)<br>[tests/test_chunking.py](../../../../sources/Neverdecel__CodeRAG/tests/test_chunking.py)<br>[tests/test_config_and_providers.py](../../../../sources/Neverdecel__CodeRAG/tests/test_config_and_providers.py)<br>[tests/test_eval.py](../../../../sources/Neverdecel__CodeRAG/tests/test_eval.py)<br>[tests/test_indexer.py](../../../../sources/Neverdecel__CodeRAG/tests/test_indexer.py)<br>[tests/test_llm_providers.py](../../../../sources/Neverdecel__CodeRAG/tests/test_llm_providers.py)<br>[tests/test_mcp.py](../../../../sources/Neverdecel__CodeRAG/tests/test_mcp.py)<br>[tests/test_models_registry.py](../../../../sources/Neverdecel__CodeRAG/tests/test_models_registry.py) |
| security | 3 | [SECURITY.md](../../../../sources/Neverdecel__CodeRAG/SECURITY.md)<br>[deploy/helm/coderag/templates/secret.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/templates/secret.yaml)<br>[.github/workflows/security.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/security.yml) |
| ci | 11 | [deploy/helm/coderag/ci/default-values.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/ci/default-values.yaml)<br>[deploy/helm/coderag/ci/full-values.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/ci/full-values.yaml)<br>[.github/workflows/ci-tests.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/ci-tests.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/codeql.yml)<br>[.github/workflows/docker-beta.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/docker-beta.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/fuzz.yml)<br>[.github/workflows/helm.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/helm.yml)<br>[.github/workflows/integration.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/integration.yml) |
| container | 25 | [Dockerfile](../../../../sources/Neverdecel__CodeRAG/Dockerfile)<br>[deploy/README.md](../../../../sources/Neverdecel__CodeRAG/deploy/README.md)<br>[deploy/helm/coderag/.helmignore](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/.helmignore)<br>[deploy/helm/coderag/Chart.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/Chart.yaml)<br>[deploy/helm/coderag/values.schema.json](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/values.schema.json)<br>[deploy/helm/coderag/values.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/values.yaml)<br>[deploy/helm/coderag/templates/_helpers.tpl](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/templates/_helpers.tpl)<br>[deploy/helm/coderag/templates/configmap.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/templates/configmap.yaml) |
| instruction | 1 | [AGENTS.md](../../../../sources/Neverdecel__CodeRAG/AGENTS.md) |
| docs | 5 | [README.md](../../../../sources/Neverdecel__CodeRAG/README.md)<br>[docs/eval.md](../../../../sources/Neverdecel__CodeRAG/docs/eval.md)<br>[docs/research/code-retrieval-strategy.md](../../../../sources/Neverdecel__CodeRAG/docs/research/code-retrieval-strategy.md)<br>[docs/research/external-validation.md](../../../../sources/Neverdecel__CodeRAG/docs/research/external-validation.md)<br>[deploy/README.md](../../../../sources/Neverdecel__CodeRAG/deploy/README.md) |
| config | 3 | [pyproject.toml](../../../../sources/Neverdecel__CodeRAG/pyproject.toml)<br>[requirements.txt](../../../../sources/Neverdecel__CodeRAG/requirements.txt)<br>[uv.lock](../../../../sources/Neverdecel__CodeRAG/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 29 | [tests/conftest.py](../../../../sources/Neverdecel__CodeRAG/tests/conftest.py)<br>[tests/test_chunking.py](../../../../sources/Neverdecel__CodeRAG/tests/test_chunking.py)<br>[tests/test_config_and_providers.py](../../../../sources/Neverdecel__CodeRAG/tests/test_config_and_providers.py)<br>[tests/test_eval.py](../../../../sources/Neverdecel__CodeRAG/tests/test_eval.py)<br>[tests/test_indexer.py](../../../../sources/Neverdecel__CodeRAG/tests/test_indexer.py)<br>[tests/test_llm_providers.py](../../../../sources/Neverdecel__CodeRAG/tests/test_llm_providers.py) |
| CI workflow | 11 | [deploy/helm/coderag/ci/default-values.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/ci/default-values.yaml)<br>[deploy/helm/coderag/ci/full-values.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/ci/full-values.yaml)<br>[.github/workflows/ci-tests.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/ci-tests.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/codeql.yml)<br>[.github/workflows/docker-beta.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/docker-beta.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/fuzz.yml) |
| 컨테이너/배포 | 25 | [Dockerfile](../../../../sources/Neverdecel__CodeRAG/Dockerfile)<br>[deploy/README.md](../../../../sources/Neverdecel__CodeRAG/deploy/README.md)<br>[deploy/helm/coderag/.helmignore](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/.helmignore)<br>[deploy/helm/coderag/Chart.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/Chart.yaml)<br>[deploy/helm/coderag/values.schema.json](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/values.schema.json)<br>[deploy/helm/coderag/values.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/values.yaml) |
| 보안/정책 | 3 | [SECURITY.md](../../../../sources/Neverdecel__CodeRAG/SECURITY.md)<br>[deploy/helm/coderag/templates/secret.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/templates/secret.yaml)<br>[.github/workflows/security.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/security.yml) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/Neverdecel__CodeRAG/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_retrieval.py`, `fuzz/fuzz_chunk_file.py`, `docs/research/code-retrieval-strategy.md`.
2. agent/tool runtime 매핑: `AGENTS.md`.
3. retrieval/memory/indexing 확인: `tests/test_retrieval.py`, `fuzz/fuzz_chunk_file.py`, `docs/research/code-retrieval-strategy.md`.
4. test/eval 파일로 동작 검증: `tests/conftest.py`, `tests/test_chunking.py`, `tests/test_config_and_providers.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Local first, zero key semantic code search for large and custom codebases — hybrid vector + keyword retrieval with symbo. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
