# Neverdecel/CodeRAG Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local-first, zero-key semantic code search for large and custom codebases — hybrid vector + keyword retrieval with symbol-aware chunking. Usable as a CLI, Python library, REST API, or web UI.

## 요약

- 조사 단위: `sources/Neverdecel__CodeRAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 137 files, 27 directories, depth score 119, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/test_retrieval.py, fuzz/fuzz_chunk_file.py, docs/research/code-retrieval-strategy.md이고, 의존성 단서는 openai, anthropic, claude, codex, mcp, fastapi, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Neverdecel/CodeRAG |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 214 |
| Forks | 35 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Neverdecel__CodeRAG](../../../../sources/Neverdecel__CodeRAG) |
| Existing report | [reports/global-trending/repositories/Neverdecel__CodeRAG.md](../../../global-trending/repositories/Neverdecel__CodeRAG.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 137 / 27 |
| Max observed depth | 6 |
| Top directories | .clusterfuzzlite, .github, assets, coderag, deploy, docs, fuzz, scripts, tests |
| Top extensions | .py: 55, .yaml: 19, .png: 13, .md: 10, .yml: 10, .html: 8, (none): 6, .jsonl: 3, .ico: 2, .json: 2, .txt: 2, .css: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 18 |
| docs | documentation surface | 6 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| coderag | top-level component | 1 |
| deploy | deployment surface | 1 |
| fuzz | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | coderag | coderag |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp, codex |
| agentFrameworks | none |
| vectorStores | faiss |
| modelRuntime | none |
| webRuntime | fastapi |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 29 | [tests/conftest.py](../../../../sources/Neverdecel__CodeRAG/tests/conftest.py)<br>[tests/test_chunking.py](../../../../sources/Neverdecel__CodeRAG/tests/test_chunking.py)<br>[tests/test_config_and_providers.py](../../../../sources/Neverdecel__CodeRAG/tests/test_config_and_providers.py)<br>[tests/test_eval.py](../../../../sources/Neverdecel__CodeRAG/tests/test_eval.py)<br>[tests/test_indexer.py](../../../../sources/Neverdecel__CodeRAG/tests/test_indexer.py)<br>[tests/test_llm_providers.py](../../../../sources/Neverdecel__CodeRAG/tests/test_llm_providers.py) |
| CI workflows | 11 | [deploy/helm/coderag/ci/default-values.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/ci/default-values.yaml)<br>[deploy/helm/coderag/ci/full-values.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/ci/full-values.yaml)<br>[.github/workflows/ci-tests.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/ci-tests.yml)<br>[.github/workflows/codeql.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/codeql.yml)<br>[.github/workflows/docker-beta.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/docker-beta.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/fuzz.yml) |
| Containers / deploy | 25 | [Dockerfile](../../../../sources/Neverdecel__CodeRAG/Dockerfile)<br>[deploy/README.md](../../../../sources/Neverdecel__CodeRAG/deploy/README.md)<br>[deploy/helm/coderag/.helmignore](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/.helmignore)<br>[deploy/helm/coderag/Chart.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/Chart.yaml)<br>[deploy/helm/coderag/values.schema.json](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/values.schema.json)<br>[deploy/helm/coderag/values.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/values.yaml) |
| Security / policy | 3 | [SECURITY.md](../../../../sources/Neverdecel__CodeRAG/SECURITY.md)<br>[deploy/helm/coderag/templates/secret.yaml](../../../../sources/Neverdecel__CodeRAG/deploy/helm/coderag/templates/secret.yaml)<br>[.github/workflows/security.yml](../../../../sources/Neverdecel__CodeRAG/.github/workflows/security.yml) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/Neverdecel__CodeRAG/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `tests/test_retrieval.py`, `fuzz/fuzz_chunk_file.py`, `docs/research/code-retrieval-strategy.md`.
2. Map agent/tool runtime through: `AGENTS.md`.
3. Inspect retrieval/memory/indexing through: `tests/test_retrieval.py`, `fuzz/fuzz_chunk_file.py`, `docs/research/code-retrieval-strategy.md`.
4. Verify behavior through test/eval files: `tests/conftest.py`, `tests/test_chunking.py`, `tests/test_config_and_providers.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Local first, zero key semantic code search for large and custom codebases — hybrid vector + keyword retrieval with symbo. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, README.md, AGENTS.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
