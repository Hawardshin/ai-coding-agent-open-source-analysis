# langchain-ai/langgraph 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/langchain-ai__langgraph |
| remote | https://github.com/langchain-ai/langgraph |
| HEAD | d57a74f (2026-06-09) fix: updateState bug for deltaChannel on empty thread (#8011) |
| branch | main |
| groups | core-agent-30, previous-clone-inventory-107 |
| files | 666 |
| dirs | 158 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Why use LangGraph?`, `LangGraph ecosystem`, `Documentation`, `Additional resources`, `Acknowledgements`

> <div align="center" <a href="https //www.langchain.com/langgraph" <picture <source media="(prefers color scheme dark)" srcset=".github/images/logo dark.svg" <source media="(prefers color scheme light)" srcset=".github/images/logo light.svg" <img alt="LangGraph Logo" src=".github/images/logo dark.svg" width="50%" </picture </a </div <div align="center" <h3 Low level orchestration framework for building stateful agents.</h3 </div <div align="center" <a href="https //opensource.org/licenses/MIT" target=" blank" <img src="https //img.shields.io/pypi/l/langgraph" alt="PyPI License" </a <a href="https //pypistats.org/packages/langgraph" target=" blank" <img src="https //img.shields.io/pepy/dt/langgraph" alt="PyPI Downloads" </a <a href="https //pypi.org/project/langgraph/" target=" blank" <img src="https //img.shields.io/pypi/v/langgraph.svg?label=%20" alt="Version" </a <a href="https //x.com/

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .github | dir |
| .gitignore | file |
| .markdownlint.json | file |
| AGENTS.md | file |
| CLAUDE.md | file |
| docs | dir |
| examples | dir |
| libs | dir |
| LICENSE | file |
| Makefile | file |
| README.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| libs/ | 590 |
| examples/ | 37 |
| .github/ | 28 |
| (root) | 7 |
| docs/ | 4 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 4 | preferred |
| examples/ | 37 | preferred |
| libs/ | 590 | large |
| libs/langgraph/ | 162 | large |
| libs/cli/ | 148 | large |
| libs/sdk-py/ | 139 | large |
| libs/langgraph/langgraph/ | 79 | large |
| libs/langgraph/tests/ | 68 | large |
| libs/sdk-py/tests/ | 65 | large |
| libs/sdk-py/langgraph_sdk/ | 46 | large |
| libs/checkpoint/ | 36 | large |
| libs/cli/examples/ | 35 | large |
| libs/prebuilt/ | 35 | large |
| .github/ | 28 | large |
| libs/cli/tests/ | 25 | large |
| libs/checkpoint-postgres/ | 24 | large |
| libs/checkpoint-sqlite/ | 23 | large |
| libs/checkpoint/langgraph/ | 23 | large |
| libs/checkpoint-conformance/ | 22 | large |
| libs/prebuilt/tests/ | 21 | large |
| libs/sdk-py/integration/ | 21 | large |
| libs/cli/langgraph_cli/ | 20 | large |
| .github/workflows/ | 17 | large |
| libs/checkpoint-conformance/langgraph/ | 17 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `libs/checkpoint-conformance/pyproject.toml`
- `libs/checkpoint-conformance/uv.lock`
- `libs/checkpoint-postgres/pyproject.toml`
- `libs/checkpoint-postgres/uv.lock`
- `libs/checkpoint-sqlite/pyproject.toml`
- `libs/checkpoint-sqlite/uv.lock`
- `libs/checkpoint/pyproject.toml`
- `libs/checkpoint/uv.lock`
- `libs/cli/examples/graph_prerelease_reqs/deps/additional_deps/pyproject.toml`
- `libs/cli/examples/graph_prerelease_reqs/deps/zuper_deps/pyproject.toml`
- `libs/cli/examples/graph_prerelease_reqs/pyproject.toml`
- `libs/cli/examples/graph_prerelease_reqs_fail/pyproject.toml`
- `libs/cli/examples/graphs_reqs_a/requirements.txt`
- `libs/cli/examples/graphs_reqs_b/requirements.txt`
- `libs/cli/examples/poetry.lock`
- `libs/cli/examples/pyproject.toml`
- `libs/cli/js-examples/package.json`
- `libs/cli/js-examples/tsconfig.json`
- `libs/cli/js-examples/yarn.lock`
- `libs/cli/js-monorepo-example/apps/agent/package.json`
- `libs/cli/js-monorepo-example/apps/agent/tsconfig.json`
- `libs/cli/js-monorepo-example/libs/shared/package.json`
- `libs/cli/js-monorepo-example/libs/shared/tsconfig.json`
- `libs/cli/js-monorepo-example/package.json`
- `libs/cli/js-monorepo-example/tsconfig.json`
- `libs/cli/js-monorepo-example/turbo.json`
- `libs/cli/js-monorepo-example/yarn.lock`
- `libs/cli/pyproject.toml`
- `libs/cli/python-monorepo-example/apps/agent/pyproject.toml`
- `libs/cli/python-monorepo-example/libs/shared/pyproject.toml`
- `libs/cli/python-monorepo-example/pyproject.toml`
- `libs/cli/tests/unit_tests/cli/pyproject.toml`
- `libs/cli/uv-examples/monorepo/apps/agent/pyproject.toml`
- `libs/cli/uv-examples/monorepo/libs/shared/pyproject.toml`
- `libs/cli/uv-examples/monorepo/pyproject.toml`
- `libs/cli/uv-examples/monorepo/uv.lock`
- `libs/cli/uv-examples/simple/pyproject.toml`
- `libs/cli/uv-examples/simple/uv.lock`
- `libs/cli/uv.lock`
- `libs/langgraph/pyproject.toml`
- `libs/langgraph/tests/example_app/requirements.txt`
- `libs/langgraph/uv.lock`
- `libs/prebuilt/pyproject.toml`
- `libs/prebuilt/uv.lock`
- `libs/sdk-py/integration/Dockerfile`
- `libs/sdk-py/integration/docker-compose.yml`
- `libs/sdk-py/pyproject.toml`
- `libs/sdk-py/uv.lock`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| libs/cli/js-examples/package.json | example-graph | build, clean, test, test:int, format, lint, format:check, lint:langgraph-json, lint:all, test:all | @langchain/core, @langchain/langgraph |
| libs/cli/js-monorepo-example/apps/agent/package.json | @js-monorepo-example/agent | build, clean | @js-monorepo-example/shared, @langchain/core, @langchain/langgraph |
| libs/cli/js-monorepo-example/libs/shared/package.json | @js-monorepo-example/shared | build, clean |  |
| libs/cli/js-monorepo-example/package.json | js-monorepo-example | build, clean, test, format, lint |  |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| libs/checkpoint-conformance/pyproject.toml | langgraph-checkpoint-conformance | false | true | true | true |
| libs/checkpoint-postgres/pyproject.toml | langgraph-checkpoint-postgres | false | true | true | true |
| libs/checkpoint-sqlite/pyproject.toml | langgraph-checkpoint-sqlite | false | true | true | true |
| libs/checkpoint/pyproject.toml | langgraph-checkpoint | false | false | true | true |
| libs/cli/examples/graph_prerelease_reqs/deps/additional_deps/pyproject.toml | graph-prerelease-reqs-additional-deps | false | false | false | false |
| libs/cli/examples/graph_prerelease_reqs/deps/zuper_deps/pyproject.toml | graph-prerelease-reqs-zuper-deps | false | false | false | false |
| libs/cli/examples/graph_prerelease_reqs/pyproject.toml | graph-prerelease-reqs | false | true | false | false |
| libs/cli/examples/graph_prerelease_reqs_fail/pyproject.toml | graph-prerelease-reqs | false | false | false | false |
| libs/cli/examples/pyproject.toml | langgraph-examples | false | true | false | false |
| libs/cli/pyproject.toml | langgraph-cli | false | true | true | true |
| libs/cli/python-monorepo-example/apps/agent/pyproject.toml | agent | false | false | false | false |
| libs/cli/python-monorepo-example/libs/shared/pyproject.toml | shared | false | false | false | false |
| libs/cli/python-monorepo-example/pyproject.toml | python-monorepo-example | false | true | true | false |
| libs/cli/tests/unit_tests/cli/pyproject.toml |  | false | false | false | false |
| libs/cli/uv-examples/monorepo/apps/agent/pyproject.toml | agent | false | false | false | false |
| libs/cli/uv-examples/monorepo/libs/shared/pyproject.toml | shared | false | false | false | false |
| libs/cli/uv-examples/monorepo/pyproject.toml | uv-monorepo-example | false | true | false | false |
| libs/cli/uv-examples/simple/pyproject.toml | simple-uv-agent | false | false | false | false |
| libs/langgraph/pyproject.toml | langgraph | false | true | true | true |
| libs/prebuilt/pyproject.toml | langgraph-prebuilt | false | true | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/.gitignore`
- `docs/generate_redirects.py`
- `docs/llms.txt`
- `docs/redirects.json`
- `examples/README.md`
- `libs/checkpoint-conformance/README.md`
- `libs/checkpoint-postgres/README.md`
- `libs/checkpoint-sqlite/README.md`
- `libs/checkpoint/README.md`
- `libs/cli/README.md`
- `libs/cli/js-examples/README.md`
- `libs/langgraph/README.md`
- `libs/prebuilt/README.md`
- `libs/sdk-js/README.md`
- `libs/sdk-py/README.md`

### 에이전트 지침 후보

- `AGENTS.md`
- `CLAUDE.md`
- `libs/prebuilt/.claude/settings.local.json`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `libs/checkpoint-conformance/tests/test_validate_memory.py`
- `libs/checkpoint-postgres/tests/__init__.py`
- `libs/checkpoint-postgres/tests/compose-postgres.yml`
- `libs/checkpoint-postgres/tests/conftest.py`
- `libs/checkpoint-postgres/tests/embed_test_utils.py`
- `libs/checkpoint-postgres/tests/test_async.py`
- `libs/checkpoint-postgres/tests/test_async_store.py`
- `libs/checkpoint-postgres/tests/test_store.py`
- `libs/checkpoint-postgres/tests/test_sync.py`
- `libs/checkpoint-sqlite/tests/__init__.py`
- `libs/checkpoint-sqlite/tests/test_aiosqlite.py`
- `libs/checkpoint-sqlite/tests/test_async_store.py`
- `libs/checkpoint-sqlite/tests/test_conformance_delta.py`
- `libs/checkpoint-sqlite/tests/test_delta_channel_migration.py`
- `libs/checkpoint-sqlite/tests/test_get_delta_channel_history.py`
- `libs/checkpoint-sqlite/tests/test_sqlite.py`
- `libs/checkpoint-sqlite/tests/test_store.py`
- `libs/checkpoint-sqlite/tests/test_ttl.py`
- `libs/checkpoint/tests/__init__.py`
- `libs/checkpoint/tests/embed_test_utils.py`
- `libs/checkpoint/tests/test_conformance_delta.py`
- `libs/checkpoint/tests/test_encrypted.py`
- `libs/checkpoint/tests/test_jsonplus.py`
- `libs/checkpoint/tests/test_memory.py`
- `libs/checkpoint/tests/test_redis_cache.py`
- `libs/checkpoint/tests/test_store.py`
- `libs/cli/js-examples/tests/agent.test.ts`
- `libs/cli/js-examples/tests/graph.int.test.ts`
- `libs/cli/tests/__init__.py`
- `libs/cli/tests/integration_tests/__init__.py`
- `libs/cli/tests/integration_tests/test_cli.py`
- `libs/cli/tests/unit_tests/__init__.py`
- `libs/cli/tests/unit_tests/agent.py`
- `libs/cli/tests/unit_tests/cli/__init__.py`
- `libs/cli/tests/unit_tests/cli/langgraph.json`
- `libs/cli/tests/unit_tests/cli/pyproject.toml`
- `libs/cli/tests/unit_tests/cli/test_cli.py`
- `libs/cli/tests/unit_tests/cli/test_templates.py`
- `libs/cli/tests/unit_tests/conftest.py`
- `libs/cli/tests/unit_tests/graphs/agent.py`
- `libs/cli/tests/unit_tests/helpers.py`
- `libs/cli/tests/unit_tests/multiplatform/js.mts`
- `libs/cli/tests/unit_tests/multiplatform/python.py`
- `libs/cli/tests/unit_tests/pipconfig.txt`
- `libs/cli/tests/unit_tests/test_archive.py`
- `libs/cli/tests/unit_tests/test_config.json`
- `libs/cli/tests/unit_tests/test_config.py`
- `libs/cli/tests/unit_tests/test_dependency_tracking.py`
- `libs/cli/tests/unit_tests/test_deploy_helpers.py`
- `libs/cli/tests/unit_tests/test_docker.py`
- `libs/cli/tests/unit_tests/test_host_backend.py`
- `libs/cli/tests/unit_tests/test_logs_helpers.py`
- `libs/cli/tests/unit_tests/test_util.py`
- `libs/langgraph/tests/__init__.py`
- `libs/langgraph/tests/__snapshots__/test_large_cases.ambr`
- `libs/langgraph/tests/__snapshots__/test_pregel.ambr`
- `libs/langgraph/tests/__snapshots__/test_pregel_async.ambr`
- `libs/langgraph/tests/agents.py`
- `libs/langgraph/tests/any_int.py`
- `libs/langgraph/tests/any_str.py`
- `libs/langgraph/tests/compose-postgres.yml`
- `libs/langgraph/tests/compose-redis.yml`
- `libs/langgraph/tests/conftest.py`
- `libs/langgraph/tests/conftest_checkpointer.py`
- `libs/langgraph/tests/conftest_store.py`
- `libs/langgraph/tests/example_app/example_graph.py`
- `libs/langgraph/tests/example_app/langgraph.json`
- `libs/langgraph/tests/example_app/requirements.txt`
- `libs/langgraph/tests/fake_chat.py`
- `libs/langgraph/tests/fake_tracer.py`
- `libs/langgraph/tests/memory_assert.py`
- `libs/langgraph/tests/messages.py`
- `libs/langgraph/tests/test_algo.py`
- `libs/langgraph/tests/test_channels.py`
- `libs/langgraph/tests/test_checkpoint_migration.py`
- `libs/langgraph/tests/test_config_async.py`
- `libs/langgraph/tests/test_delta_channel_benchmark.py`
- `libs/langgraph/tests/test_delta_channel_exit_mode.py`
- `libs/langgraph/tests/test_delta_channel_id_stability.py`
- `libs/langgraph/tests/test_delta_channel_migration.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/_integration_test.yml`
- `.github/workflows/_lint.yml`
- `.github/workflows/_sdk_integration_test.yml`
- `.github/workflows/_test.yml`
- `.github/workflows/_test_langgraph.yml`
- `.github/workflows/_test_release.yml`
- `.github/workflows/baseline.yml`
- `.github/workflows/bench.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/deploy-redirects.yml`
- `.github/workflows/pr_lint.yml`
- `.github/workflows/release.yml`
- `.github/workflows/reopen_on_assignment.yml`
- `.github/workflows/require_issue_link.yml`
- `.github/workflows/tag-external-issues.yml`
- `.github/workflows/tag-external-prs.yml`
- `.github/workflows/uv_lock_ugprade.yml`
- `libs/sdk-py/integration/Dockerfile`
- `libs/sdk-py/integration/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 446 |
| .ipynb | 35 |
| .json | 30 |
| .yml | 28 |
| .toml | 21 |
| .md | 18 |
| .lock | 13 |
| .typed | 13 |
| .txt | 11 |
| makefile | 10 |
| license | 9 |
| .ts | 7 |
| .gitignore | 6 |
| .example | 5 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `libs/ 내부 책임 분리`
- `libs/langgraph/ 내부 책임 분리`
- `libs/cli/ 내부 책임 분리`
- `libs/checkpoint-conformance/pyproject.toml 실행 스크립트와 패키지 경계`
- `libs/checkpoint-conformance/uv.lock 실행 스크립트와 패키지 경계`
- `libs/checkpoint-postgres/pyproject.toml 실행 스크립트와 패키지 경계`
- `libs/checkpoint-postgres/uv.lock 실행 스크립트와 패키지 경계`
- `libs/checkpoint-sqlite/pyproject.toml 실행 스크립트와 패키지 경계`

