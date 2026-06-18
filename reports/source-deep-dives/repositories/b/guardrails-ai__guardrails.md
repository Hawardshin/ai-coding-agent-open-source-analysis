# guardrails-ai/guardrails Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 552 files, 98 directories.

## 요약

- 조사 단위: `sources/guardrails-ai__guardrails` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 552 files, 98 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

보안/거버넌스/안전 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 security=SECURITY_ADVISORY.md, tests/unit_tests/test_async_guard.py, tests/unit_tests/test_guard_log.py이고, 의존성 단서는 openai, anthropic, langchain, llama-index, pydantic, click, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | guardrails-ai/guardrails |
| Topic | Security, Governance, and Safety / 보안/거버넌스/안전 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/guardrails-ai__guardrails](../../../../sources/guardrails-ai__guardrails) |
| Existing report | [reports/clone-structures/guardrails-ai__guardrails.md](../../../clone-structures/guardrails-ai__guardrails.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 552 / 98 |
| Max observed depth | 5 |
| Top directories | .github, docs, guardrails, server_ci, tests |
| Top extensions | .py: 351, .txt: 70, .ipynb: 37, .rail: 20, .md: 17, .json: 13, .yml: 11, .sh: 9, (none): 6, .svg: 4, .sql: 3, .png: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 49 |
| docs | documentation surface | 41 |
| .github | ci surface | 1 |
| guardrails | top-level component | 1 |
| server_ci | ci surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | autoformat | make autoformat |
| quality | Makefile | type | make type |
| quality | Makefile | lint | make lint |
| test | Makefile | test | make test |
| test | Makefile | test-basic | make test-basic |
| test | Makefile | test-cov | make test-cov |
| test | Makefile | view-test-cov | make view-test-cov |
| test | Makefile | view-test-cov-file | make view-test-cov-file |
| serve-dev | Makefile | dev | make dev |
| utility | Makefile | full | make full |
| utility | Makefile | install | make install |
| utility | Makefile | docs-gen | make docs-gen |
| utility | Makefile | self-install | make self-install |
| utility | Makefile | all | make all |
| utility | Makefile | precommit | make precommit |
| utility | Makefile | refresh | make refresh |
| utility | Makefile | update-lock | make update-lock |
| utility | pyproject.toml | guardrails | guardrails |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | none |
| agentFrameworks | langchain, llama-index |
| vectorStores | faiss |
| modelRuntime | torch, transformers, llama |
| webRuntime | none |
| developerSurface | click, typer |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| security | [SECURITY_ADVISORY.md](../../../../sources/guardrails-ai__guardrails/SECURITY_ADVISORY.md) | security signal |
| security | [tests/unit_tests/test_async_guard.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/test_async_guard.py) | security signal |
| security | [tests/unit_tests/test_guard_log.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/test_guard_log.py) | security signal |
| security | [tests/unit_tests/test_guard.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/test_guard.py) | security signal |
| ci | [.github/workflows/autoclose_stale_issues_and_prs.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/autoclose_stale_issues_and_prs.yml) | ci signal |
| ci | [.github/workflows/ci.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/cli-compatibility.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/cli-compatibility.yml) | ci signal |
| ci | [.github/workflows/examples_check.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/examples_check.yml) | ci signal |
| config | [Makefile](../../../../sources/guardrails-ai__guardrails/Makefile) | config signal |
| config | [poetry.lock](../../../../sources/guardrails-ai__guardrails/poetry.lock) | config signal |
| config | [pyproject.toml](../../../../sources/guardrails-ai__guardrails/pyproject.toml) | config signal |
| config | [server_ci/requirements.txt](../../../../sources/guardrails-ai__guardrails/server_ci/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 3 | [guardrails/telemetry/runner_tracing.py](../../../../sources/guardrails-ai__guardrails/guardrails/telemetry/runner_tracing.py)<br>[guardrails/stores/context.py](../../../../sources/guardrails-ai__guardrails/guardrails/stores/context.py)<br>[guardrails/run/runner.py](../../../../sources/guardrails-ai__guardrails/guardrails/run/runner.py) |
| mcp | 0 | not obvious |
| retrieval | 7 | [tests/integration_tests/test_embedding_openai.py](../../../../sources/guardrails-ai__guardrails/tests/integration_tests/test_embedding_openai.py)<br>[tests/integration_tests/integrations/llama_index/test_guardrails_chat_engine.py](../../../../sources/guardrails-ai__guardrails/tests/integration_tests/integrations/llama_index/test_guardrails_chat_engine.py)<br>[tests/integration_tests/integrations/llama_index/test_guardrails_query_engine.py](../../../../sources/guardrails-ai__guardrails/tests/integration_tests/integrations/llama_index/test_guardrails_query_engine.py)<br>[guardrails/embedding.py](../../../../sources/guardrails-ai__guardrails/guardrails/embedding.py)<br>[guardrails/integrations/llama_index/__init__.py](../../../../sources/guardrails-ai__guardrails/guardrails/integrations/llama_index/__init__.py)<br>[guardrails/integrations/llama_index/guardrails_chat_engine.py](../../../../sources/guardrails-ai__guardrails/guardrails/integrations/llama_index/guardrails_chat_engine.py)<br>[guardrails/integrations/llama_index/guardrails_query_engine.py](../../../../sources/guardrails-ai__guardrails/guardrails/integrations/llama_index/guardrails_query_engine.py) |
| spec | 2 | [test_spec.rail](../../../../sources/guardrails-ai__guardrails/test_spec.rail)<br>[server_ci/requirements.txt](../../../../sources/guardrails-ai__guardrails/server_ci/requirements.txt) |
| eval | 270 | [test_spec.rail](../../../../sources/guardrails-ai__guardrails/test_spec.rail)<br>[tests/__init__.py](../../../../sources/guardrails-ai__guardrails/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/guardrails-ai__guardrails/tests/conftest.py)<br>[tests/unit_tests/__init__.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/__init__.py)<br>[tests/unit_tests/test_api_client.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/test_api_client.py)<br>[tests/unit_tests/test_async_guard.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/test_async_guard.py)<br>[tests/unit_tests/test_datatypes.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/test_datatypes.py)<br>[tests/unit_tests/test_formatters.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/test_formatters.py) |
| security | 14 | [SECURITY_ADVISORY.md](../../../../sources/guardrails-ai__guardrails/SECURITY_ADVISORY.md)<br>[tests/unit_tests/test_async_guard.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/test_async_guard.py)<br>[tests/unit_tests/test_guard_log.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/test_guard_log.py)<br>[tests/unit_tests/test_guard.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/test_guard.py)<br>[tests/unit_tests/cli/server/test_auth.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/cli/server/test_auth.py)<br>[tests/integration_tests/test_guard.py](../../../../sources/guardrails-ai__guardrails/tests/integration_tests/test_guard.py)<br>[tests/integration_tests/integrations/langchain/test_guard_runnable.py](../../../../sources/guardrails-ai__guardrails/tests/integration_tests/integrations/langchain/test_guard_runnable.py)<br>[server_ci/guard-template.json](../../../../sources/guardrails-ai__guardrails/server_ci/guard-template.json) |
| ci | 10 | [.github/workflows/autoclose_stale_issues_and_prs.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/autoclose_stale_issues_and_prs.yml)<br>[.github/workflows/ci.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/ci.yml)<br>[.github/workflows/cli-compatibility.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/cli-compatibility.yml)<br>[.github/workflows/examples_check.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/examples_check.yml)<br>[.github/workflows/find_dead_links.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/find_dead_links.yml)<br>[.github/workflows/install_from_hub.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/install_from_hub.yml)<br>[.github/workflows/release_version.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/release_version.yml)<br>[.github/workflows/server_ci.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/server_ci.yml) |
| container | 1 | [server_ci/Dockerfile](../../../../sources/guardrails-ai__guardrails/server_ci/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 73 | [README.md](../../../../sources/guardrails-ai__guardrails/README.md)<br>[docs/pydocs/generate_pydocs.py](../../../../sources/guardrails-ai__guardrails/docs/pydocs/generate_pydocs.py)<br>[docs/pydocs/helpers.py](../../../../sources/guardrails-ai__guardrails/docs/pydocs/helpers.py)<br>[docs/pydocs/pydocs_markdown_impl.py](../../../../sources/guardrails-ai__guardrails/docs/pydocs/pydocs_markdown_impl.py)<br>[docs/pydocs/pydocs_to_md.py](../../../../sources/guardrails-ai__guardrails/docs/pydocs/pydocs_to_md.py)<br>[docs/pydocs/api_reference/actions.py](../../../../sources/guardrails-ai__guardrails/docs/pydocs/api_reference/actions.py)<br>[docs/pydocs/api_reference/errors.py](../../../../sources/guardrails-ai__guardrails/docs/pydocs/api_reference/errors.py)<br>[docs/pydocs/api_reference/formatters.py](../../../../sources/guardrails-ai__guardrails/docs/pydocs/api_reference/formatters.py) |
| config | 4 | [Makefile](../../../../sources/guardrails-ai__guardrails/Makefile)<br>[poetry.lock](../../../../sources/guardrails-ai__guardrails/poetry.lock)<br>[pyproject.toml](../../../../sources/guardrails-ai__guardrails/pyproject.toml)<br>[server_ci/requirements.txt](../../../../sources/guardrails-ai__guardrails/server_ci/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 270 | [test_spec.rail](../../../../sources/guardrails-ai__guardrails/test_spec.rail)<br>[tests/__init__.py](../../../../sources/guardrails-ai__guardrails/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/guardrails-ai__guardrails/tests/conftest.py)<br>[tests/unit_tests/__init__.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/__init__.py)<br>[tests/unit_tests/test_api_client.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/test_api_client.py)<br>[tests/unit_tests/test_async_guard.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/test_async_guard.py) |
| CI workflows | 10 | [.github/workflows/autoclose_stale_issues_and_prs.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/autoclose_stale_issues_and_prs.yml)<br>[.github/workflows/ci.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/ci.yml)<br>[.github/workflows/cli-compatibility.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/cli-compatibility.yml)<br>[.github/workflows/examples_check.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/examples_check.yml)<br>[.github/workflows/find_dead_links.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/find_dead_links.yml)<br>[.github/workflows/install_from_hub.yml](../../../../sources/guardrails-ai__guardrails/.github/workflows/install_from_hub.yml) |
| Containers / deploy | 1 | [server_ci/Dockerfile](../../../../sources/guardrails-ai__guardrails/server_ci/Dockerfile) |
| Security / policy | 14 | [SECURITY_ADVISORY.md](../../../../sources/guardrails-ai__guardrails/SECURITY_ADVISORY.md)<br>[tests/unit_tests/test_async_guard.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/test_async_guard.py)<br>[tests/unit_tests/test_guard_log.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/test_guard_log.py)<br>[tests/unit_tests/test_guard.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/test_guard.py)<br>[tests/unit_tests/cli/server/test_auth.py](../../../../sources/guardrails-ai__guardrails/tests/unit_tests/cli/server/test_auth.py)<br>[tests/integration_tests/test_guard.py](../../../../sources/guardrails-ai__guardrails/tests/integration_tests/test_guard.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `SECURITY_ADVISORY.md`, `tests/unit_tests/test_async_guard.py`, `tests/unit_tests/test_guard_log.py`.
2. Map agent/tool runtime through: `guardrails/telemetry/runner_tracing.py`, `guardrails/stores/context.py`, `guardrails/run/runner.py`.
3. Inspect retrieval/memory/indexing through: `tests/integration_tests/test_embedding_openai.py`, `tests/integration_tests/integrations/llama_index/test_guardrails_chat_engine.py`, `tests/integration_tests/integrations/llama_index/test_guardrails_query_engine.py`.
4. Verify behavior through test/eval files: `test_spec.rail`, `tests/__init__.py`, `tests/conftest.py`.

## Existing Repository Insight

보안/거버넌스/안전 관점에서 Local clone structure analysis 552 files, 98 directories.. 핵심 구조 신호는 pyproject.toml, Makefile, README.md, LICENSE, openai, anthropic이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 보안/거버넌스/안전 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
