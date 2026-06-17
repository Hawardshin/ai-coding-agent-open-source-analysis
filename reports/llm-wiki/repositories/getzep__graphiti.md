# getzep/graphiti 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/getzep__graphiti |
| remote | https://github.com/getzep/graphiti |
| HEAD | b82b80e (2026-06-16) @aasc77 has signed the CLA in getzep/graphiti#1590 |
| branch | main |
| groups | llm-wiki-100 |
| files | 352 |
| dirs | 72 |
| stack | Python |

## 구조 해석

- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `What is a Context Graph?`, `Graphiti and Zep`, `Zep vs Graphiti`, `When to choose which`, `Why Graphiti?`, `Graphiti vs. GraphRAG`, `Installation`, `Installing with FalkorDB Support`, `or with uv`, `or embedded version (requires Python 3.12+)`, `or with uv`, `Installing with Kuzu Support`, `or with uv`, `Installing with Amazon Neptune Support`, `or with uv`, `You can also install optional LLM providers as extras:`, `Install with Anthropic support`, `Install with Groq support`

> <p align="center" <a href="https //www.getzep.com/" <img src="https //github.com/user attachments/assets/119c5682 9654 4257 8922 56b7cb8ffd73" width="150" alt="Zep Logo" </a </p <h1 align="center" Graphiti </h1 <h2 align="center" Build Temporal Context Graphs for AI Agents</h2 <div align="center" </div <div align="center" <a href="https //trendshift.io/repositories/12986" target=" blank" <img src="https //trendshift.io/api/badge/repositories/12986" alt="getzep%2Fgraphiti Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </div [!NOTE] We're Hiring! Build context graphs that power reliable, personalized, fast production AI agents. Come build with us — we're hiring Engineers and Developer Relations folks. View open roles. ⭐ Help us reach more developers and grow the Graphiti community. Star this repo! &nbsp; [!TIP] Check out the new MCP server for Graphiti! Give Cla

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| AGENTS.md | file |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| conftest.py | file |
| CONTRIBUTING.md | file |
| depot.json | file |
| docker-compose.test.yml | file |
| docker-compose.yml | file |
| Dockerfile | file |
| ellipsis.yaml | file |
| examples | dir |
| graphiti_core | dir |
| images | dir |
| LICENSE | file |
| Makefile | file |
| mcp_server | dir |
| OTEL_TRACING.md | file |
| py.typed | file |
| pyproject.toml | file |
| pytest.ini | file |
| README.md | file |
| SECURITY.md | file |
| server | dir |
| signatures | dir |
| spec | dir |
| tests | dir |
| uv.lock | file |
| Zep-CLA.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| graphiti_core/ | 158 |
| mcp_server/ | 57 |
| tests/ | 43 |
| examples/ | 28 |
| (root) | 22 |
| .github/ | 21 |
| server/ | 17 |
| images/ | 4 |
| signatures/ | 1 |
| spec/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| server/ | 17 | preferred |
| examples/ | 28 | preferred |
| tests/ | 43 | preferred |
| graphiti_core/ | 158 | large |
| graphiti_core/driver/ | 76 | large |
| mcp_server/ | 57 | large |
| .github/ | 21 | large |
| mcp_server/tests/ | 19 | large |
| .github/workflows/ | 15 | large |
| graphiti_core/llm_client/ | 15 | large |
| mcp_server/src/ | 15 | large |
| graphiti_core/driver/kuzu/ | 14 | large |
| graphiti_core/utils/ | 14 | large |
| graphiti_core/driver/falkordb/ | 13 | large |
| graphiti_core/driver/neo4j/ | 13 | large |
| graphiti_core/driver/neptune/ | 13 | large |
| graphiti_core/driver/operations/ | 13 | large |
| graphiti_core/prompts/ | 13 | large |
| server/graph_service/ | 11 | large |
| mcp_server/docker/ | 10 | large |
| tests/llm_client/ | 10 | large |
| tests/utils/ | 10 | large |
| graphiti_core/utils/maintenance/ | 8 | large |
| graphiti_core/search/ | 7 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `docker-compose.yml`
- `examples/opentelemetry/pyproject.toml`
- `examples/opentelemetry/uv.lock`
- `examples/quickstart/requirements.txt`
- `mcp_server/docker/Dockerfile`
- `mcp_server/docker/docker-compose.yml`
- `mcp_server/pyproject.toml`
- `mcp_server/uv.lock`
- `pyproject.toml`
- `server/pyproject.toml`
- `server/uv.lock`
- `uv.lock`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| examples/opentelemetry/pyproject.toml | graphiti-otel-stdout-example | false | true | false | false |
| mcp_server/pyproject.toml | mcp-server | false | false | true | false |
| pyproject.toml | graphiti-core | false | false | true | true |
| server/pyproject.toml | graph-service | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `examples/azure-openai/README.md`
- `examples/gliner2/README.md`
- `examples/opentelemetry/README.md`
- `examples/quickstart/README.md`
- `mcp_server/README.md`
- `mcp_server/docker/README.md`
- `mcp_server/docs/cursor_rules.md`
- `mcp_server/tests/README.md`
- `server/README.md`
- `tests/evals/data/longmemeval_data/README.md`

### 에이전트 지침 후보

- `.github/workflows/mcp-server-tests.yml`
- `.github/workflows/release-mcp-server.yml`
- `AGENTS.md`
- `CLAUDE.md`
- `mcp_server/.env.example`
- `mcp_server/.python-version`
- `mcp_server/README.md`
- `mcp_server/config/config-docker-falkordb-combined.yaml`
- `mcp_server/config/config-docker-falkordb.yaml`
- `mcp_server/config/config-docker-neo4j.yaml`
- `mcp_server/config/config.yaml`
- `mcp_server/config/mcp_config_stdio_example.json`
- `mcp_server/docker/Dockerfile`
- `mcp_server/docker/Dockerfile.standalone`
- `mcp_server/docker/README-falkordb-combined.md`
- `mcp_server/docker/README.md`
- `mcp_server/docker/build-standalone.sh`
- `mcp_server/docker/build-with-version.sh`
- `mcp_server/docker/docker-compose-falkordb.yml`
- `mcp_server/docker/docker-compose-neo4j.yml`
- `mcp_server/docker/docker-compose.yml`
- `mcp_server/docker/github-actions-example.yml`
- `mcp_server/docs/cursor_rules.md`
- `mcp_server/main.py`
- `mcp_server/pyproject.toml`
- `mcp_server/pytest.ini`
- `mcp_server/src/__init__.py`
- `mcp_server/src/config/__init__.py`
- `mcp_server/src/config/schema.py`
- `mcp_server/src/graphiti_mcp_server.py`
- `mcp_server/src/models/__init__.py`
- `mcp_server/src/models/edge_types.py`
- `mcp_server/src/models/entity_types.py`
- `mcp_server/src/models/response_types.py`
- `mcp_server/src/services/__init__.py`
- `mcp_server/src/services/factories.py`
- `mcp_server/src/services/queue_service.py`
- `mcp_server/src/utils/__init__.py`
- `mcp_server/src/utils/formatting.py`
- `mcp_server/src/utils/type_config.py`
- `mcp_server/src/utils/utils.py`
- `mcp_server/tests/README.md`
- `mcp_server/tests/__init__.py`
- `mcp_server/tests/conftest.py`
- `mcp_server/tests/pytest.ini`
- `mcp_server/tests/run_tests.py`
- `mcp_server/tests/test_async_operations.py`
- `mcp_server/tests/test_comprehensive_integration.py`
- `mcp_server/tests/test_configuration.py`
- `mcp_server/tests/test_core_parity.py`
- `mcp_server/tests/test_factories.py`
- `mcp_server/tests/test_falkordb_integration.py`
- `mcp_server/tests/test_fixtures.py`
- `mcp_server/tests/test_http_integration.py`
- `mcp_server/tests/test_integration.py`
- `mcp_server/tests/test_live_falkordb_int.py`
- `mcp_server/tests/test_mcp_integration.py`
- `mcp_server/tests/test_mcp_transports.py`
- `mcp_server/tests/test_stdio_simple.py`
- `mcp_server/tests/test_stress_load.py`
- `mcp_server/uv.lock`

### 스펙/템플릿/명령/스킬 후보

- `spec/driver-operations-redesign.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `mcp_server/tests/README.md`
- `mcp_server/tests/__init__.py`
- `mcp_server/tests/conftest.py`
- `mcp_server/tests/pytest.ini`
- `mcp_server/tests/run_tests.py`
- `mcp_server/tests/test_async_operations.py`
- `mcp_server/tests/test_comprehensive_integration.py`
- `mcp_server/tests/test_configuration.py`
- `mcp_server/tests/test_core_parity.py`
- `mcp_server/tests/test_factories.py`
- `mcp_server/tests/test_falkordb_integration.py`
- `mcp_server/tests/test_fixtures.py`
- `mcp_server/tests/test_http_integration.py`
- `mcp_server/tests/test_integration.py`
- `mcp_server/tests/test_live_falkordb_int.py`
- `mcp_server/tests/test_mcp_integration.py`
- `mcp_server/tests/test_mcp_transports.py`
- `mcp_server/tests/test_stdio_simple.py`
- `mcp_server/tests/test_stress_load.py`
- `server/tests/test_live_falkordb_int.py`
- `tests/cross_encoder/test_bge_reranker_client_int.py`
- `tests/cross_encoder/test_gemini_reranker_client.py`
- `tests/driver/__init__.py`
- `tests/driver/test_falkordb_driver.py`
- `tests/embedder/embedder_fixtures.py`
- `tests/embedder/test_gemini.py`
- `tests/embedder/test_openai.py`
- `tests/embedder/test_voyage.py`
- `tests/evals/data/longmemeval_data/README.md`
- `tests/evals/data/longmemeval_data/longmemeval_oracle.json`
- `tests/evals/eval_cli.py`
- `tests/evals/eval_e2e_graph_building.py`
- `tests/evals/pytest.ini`
- `tests/evals/utils.py`
- `tests/helpers_test.py`
- `tests/llm_client/test_anthropic_client.py`
- `tests/llm_client/test_anthropic_client_int.py`
- `tests/llm_client/test_azure_openai_client.py`
- `tests/llm_client/test_cache.py`
- `tests/llm_client/test_client.py`
- `tests/llm_client/test_errors.py`
- `tests/llm_client/test_gemini_client.py`
- `tests/llm_client/test_openai_client.py`
- `tests/llm_client/test_openai_generic_client.py`
- `tests/llm_client/test_token_tracker.py`
- `tests/test_add_triplet.py`
- `tests/test_edge_int.py`
- `tests/test_entity_exclusion_int.py`
- `tests/test_graphiti_int.py`
- `tests/test_graphiti_mock.py`
- `tests/test_node_int.py`
- `tests/test_node_label_security.py`
- `tests/test_text_utils.py`
- `tests/utils/maintenance/test_attribute_utils.py`
- `tests/utils/maintenance/test_bulk_utils.py`
- `tests/utils/maintenance/test_edge_operations.py`
- `tests/utils/maintenance/test_entity_extraction.py`
- `tests/utils/maintenance/test_node_operations.py`
- `tests/utils/search/search_utils_test.py`
- `tests/utils/search/test_search_security.py`
- `tests/utils/search/test_search_tracing.py`
- `tests/utils/test_concatenate_episodes.py`
- `tests/utils/test_content_chunking.py`

### CI/Docker 후보

- `.github/workflows/ai-moderator.yml`
- `.github/workflows/cla.yml`
- `.github/workflows/claude-code-review-manual.yml`
- `.github/workflows/claude-code-review.yml`
- `.github/workflows/claude.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/lint.yml`
- `.github/workflows/mcp-server-tests.yml`
- `.github/workflows/pr-triage.yml`
- `.github/workflows/release-graphiti-core.yml`
- `.github/workflows/release-mcp-server.yml`
- `.github/workflows/release-server-container.yml`
- `.github/workflows/server-tests.yml`
- `.github/workflows/typecheck.yml`
- `.github/workflows/unit_tests.yml`
- `Dockerfile`
- `docker-compose.test.yml`
- `docker-compose.yml`
- `mcp_server/docker/Dockerfile`
- `mcp_server/docker/docker-compose-falkordb.yml`
- `mcp_server/docker/docker-compose-neo4j.yml`
- `mcp_server/docker/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 255 |
| .md | 23 |
| .yml | 23 |
| .example | 6 |
| .json | 5 |
| .yaml | 5 |
| .ini | 4 |
| .lock | 4 |
| .toml | 4 |
| .sh | 3 |
| .txt | 3 |
| .gif | 2 |
| .ipynb | 2 |
| .png | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `server/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `graphiti_core/ 내부 책임 분리`
- `graphiti_core/driver/ 내부 책임 분리`
- `spec/driver-operations-redesign.md 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `examples/opentelemetry/pyproject.toml 실행 스크립트와 패키지 경계`
- `examples/opentelemetry/uv.lock 실행 스크립트와 패키지 경계`
- `examples/quickstart/requirements.txt 실행 스크립트와 패키지 경계`

