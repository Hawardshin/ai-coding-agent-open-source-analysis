# semantica-agi/semantica 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/semantica-agi__semantica |
| remote | https://github.com/semantica-agi/semantica |
| HEAD | 0765cfe (2026-06-18) docs: add CLI demo gif (#649) |
| branch | main |
| groups | llm-wiki-100 |
| files | 904 |
| dirs | 137 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `The Context & Accountability Layer for AI Systems`, `See It in Action`, `Quick Start`, `Every agent decision becomes a queryable, auditable knowledge node`, `Ask "why did this happen?" and get a real, structured answer`, `Python 3.11.9         pass`, `semantica 0.5.0       pass`, `faiss vector store    pass`, `Config file           pass    ~/.semantica/config.yaml`, `Architecture`, `Why Semantica`, `How Semantica Compares`, `Context Graphs`, `Add nodes with typed properties`, `Add typed, weighted edges (extra kwargs become edge metadata)`, `BFS traversal - hop through the graph from any node`, `Point-in-time snapshot - the graph as it existed on any past date`, `AgentContext - high-level API for agent memory workflows`

> <div align="center" <img src="Semantica Logo.png" alt="Semantica" width="420"/ The Context & Accountability Layer for AI Systems Auditable &nbsp;·&nbsp; Governed &nbsp;·&nbsp; Explainable &nbsp;·&nbsp; Production Ready Website &nbsp;·&nbsp; Docs &nbsp;·&nbsp; Discord &nbsp;·&nbsp; Twitter/X &nbsp;·&nbsp; YouTube &nbsp;·&nbsp; PyPI &nbsp;·&nbsp; Changelog </div Most AI agents act without a trail. They store embeddings, not meaning. They make decisions that cannot be audited, recall context that cannot be explained, and produce outputs that cannot be traced back to a source. Regulators, auditors, and enterprise risk teams ask the same question can you prove what your AI did and why? Semantica is the Context and Accountability Layer that sits alongside your LLM, vector store, and agent framework. It complements your existing stack, not replaces it, adding structured intelligence, causal rea

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| ARCHITECTURE.md | file |
| CHANGELOG.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| CONTRIBUTORS.md | file |
| cookbook | dir |
| docker-compose.yml | file |
| Dockerfile | file |
| docs | dir |
| docs_check.py | file |
| examples | dir |
| explorer | dir |
| integrations | dir |
| LICENSE | file |
| MANIFEST.in | file |
| mcp | dir |
| plugins | dir |
| pyproject.toml | file |
| README.md | file |
| RELEASE_NOTES.md | file |
| SECURITY.md | file |
| semantica | dir |
| Semantica Logo.png | file |
| SUPPORT.md | file |
| tests | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| semantica/ | 361 |
| tests/ | 227 |
| explorer/ | 94 |
| docs/ | 63 |
| cookbook/ | 43 |
| plugins/ | 43 |
| .github/ | 23 |
| (root) | 19 |
| mcp/ | 14 |
| integrations/ | 10 |
| .claude/ | 4 |
| examples/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 63 | preferred |
| examples/ | 3 | preferred |
| tests/ | 227 | preferred |
| plugins/ | 43 | preferred |
| semantica/ | 361 | large |
| explorer/ | 94 | large |
| explorer/src/ | 80 | large |
| explorer/src/workspaces/ | 66 | large |
| cookbook/ | 43 | large |
| docs/reference/ | 27 | large |
| semantica/ingest/ | 27 | large |
| semantica/kg/ | 26 | large |
| tests/context/ | 26 | large |
| cookbook/introduction/ | 24 | large |
| .github/ | 23 | large |
| semantica/ontology/ | 23 | large |
| semantica/parse/ | 23 | large |
| semantica/explorer/ | 22 | large |
| tests/kg/ | 22 | large |
| semantica/semantic_extract/ | 20 | large |
| semantica/export/ | 19 | large |
| semantica/vector_store/ | 19 | large |
| plugins/skills/ | 17 | large |
| cookbook/advanced/ | 16 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `docker-compose.yml`
- `explorer/package.json`
- `explorer/tsconfig.json`
- `explorer/vite.config.ts`
- `pyproject.toml`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| explorer/package.json | semantica-knowledge-explorer | dev, build, lint, preview, test:graph-store, test:graph-workspace | @monaco-editor/react, @sigma/edge-curve, @sigma/node-border, @tanstack/react-query, @xyflow/react, graphology, graphology-communities-louvain, graphology-layout-forceatlas2, graphology-metrics, graphology-shortest-path, lucide-react, playwright, react, react-arborist |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | semantica | false | false | false | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/architecture.md`
- `docs/assets/custom.css`
- `docs/assets/img/diagrams/agent-context-flow.svg`
- `docs/assets/img/diagrams/architecture-overview.svg`
- `docs/assets/img/diagrams/extraction-pipeline.svg`
- `docs/assets/img/diagrams/graphrag-flow.svg`
- `docs/assets/img/diagrams/kg-structure.svg`
- `docs/assets/img/diagrams/pipeline-flow.svg`
- `docs/assets/img/diagrams/reasoning-chain.svg`
- `docs/assets/img/semantica-cli-demo.gif`
- `docs/assets/img/semantica-knowledge-explorer-demo.gif`
- `docs/assets/img/semantica-logo.png`
- `docs/citation.md`
- `docs/cli-setup.md`
- `docs/community-projects.md`
- `docs/community.md`
- `docs/concepts.md`
- `docs/contributing-guide.md`
- `docs/cookbook.md`
- `docs/docs.json`
- `docs/explorer-setup.md`
- `docs/faq.md`
- `docs/getting-started.md`
- `docs/glossary.md`
- `docs/governance.md`
- `docs/graph_stores/apache_age.md`
- `docs/index.md`
- `docs/installation.md`
- `docs/integrations/agno.md`
- `docs/integrations/docling.md`
- `docs/integrations/snowflake.md`
- `docs/learning-more.md`
- `docs/modules.md`
- `docs/project-license.md`
- `docs/quickstart.md`
- `docs/reference/change_management.md`
- `docs/reference/conflicts.md`
- `docs/reference/context.md`
- `docs/reference/core.md`
- `docs/reference/deduplication.md`
- `docs/reference/embeddings.md`
- `docs/reference/evals.md`
- `docs/reference/explorer.md`
- `docs/reference/export.md`
- `docs/reference/graph_store.md`
- `docs/reference/ingest.md`
- `docs/reference/kg.md`
- `docs/reference/llms.md`
- ... 24 more

### 에이전트 지침 후보

- `.claude/init`
- `.claude/skills/init`
- `.claude/skills/semantica/SKILL.md`
- `.claude/skills/semantica/init`
- `docs/reference/mcp_server.md`
- `integrations/openclaw/mcp_tool.py`
- `mcp/README.md`
- `mcp/__init__.py`
- `mcp/__main__.py`
- `mcp/resources/__init__.py`
- `mcp/resources/registry.py`
- `mcp/schemas.py`
- `mcp/server.py`
- `mcp/session.py`
- `mcp/tools/__init__.py`
- `mcp/tools/decisions.py`
- `mcp/tools/export.py`
- `mcp/tools/extraction.py`
- `mcp/tools/graph.py`
- `mcp/tools/reasoning.py`
- `plugins/skills/causal/SKILL.md`
- `plugins/skills/change/SKILL.md`
- `plugins/skills/decision/SKILL.md`
- `plugins/skills/deduplicate/SKILL.md`
- `plugins/skills/embed/SKILL.md`
- `plugins/skills/explain/SKILL.md`
- `plugins/skills/export/SKILL.md`
- `plugins/skills/extract/SKILL.md`
- `plugins/skills/ingest/SKILL.md`
- `plugins/skills/ontology/SKILL.md`
- `plugins/skills/policy/SKILL.md`
- `plugins/skills/provenance/SKILL.md`
- `plugins/skills/query/SKILL.md`
- `plugins/skills/reason/SKILL.md`
- `plugins/skills/temporal/SKILL.md`
- `plugins/skills/validate/SKILL.md`
- `plugins/skills/visualize/SKILL.md`
- `semantica/ingest/mcp_client.py`
- `semantica/ingest/mcp_ingestor.py`
- `semantica/mcp_server/__init__.py`
- `semantica/mcp_server/__main__.py`
- `semantica/parse/mcp_parser.py`

### 스펙/템플릿/명령/스킬 후보

- `.claude/skills/init`
- `.claude/skills/semantica/SKILL.md`
- `.claude/skills/semantica/init`
- `plugins/skills/causal/SKILL.md`
- `plugins/skills/change/SKILL.md`
- `plugins/skills/decision/SKILL.md`
- `plugins/skills/deduplicate/SKILL.md`
- `plugins/skills/embed/SKILL.md`
- `plugins/skills/explain/SKILL.md`
- `plugins/skills/export/SKILL.md`
- `plugins/skills/extract/SKILL.md`
- `plugins/skills/ingest/SKILL.md`
- `plugins/skills/ontology/SKILL.md`
- `plugins/skills/policy/SKILL.md`
- `plugins/skills/provenance/SKILL.md`
- `plugins/skills/query/SKILL.md`
- `plugins/skills/reason/SKILL.md`
- `plugins/skills/temporal/SKILL.md`
- `plugins/skills/validate/SKILL.md`
- `plugins/skills/visualize/SKILL.md`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `explorer/tests/graphSceneState.display.test.ts`
- `explorer/tests/graphStore.multi-edge.test.mjs`
- `tests/__init__.py`
- `tests/_smoke_review_fixes.py`
- `tests/change_management/test_audit_trail.py`
- `tests/change_management/test_change_log.py`
- `tests/change_management/test_integration_realworld.py`
- `tests/change_management/test_managers.py`
- `tests/change_management/test_performance.py`
- `tests/change_management/test_temporal_versioning.py`
- `tests/change_management/test_version_storage.py`
- `tests/conflicts/__init__.py`
- `tests/conflicts/test_conflicts.py`
- `tests/context/__init__.py`
- `tests/context/test_agent_context_decisions.py`
- `tests/context/test_agent_context_smoke.py`
- `tests/context/test_banking_context_graphs_e2e.py`
- `tests/context/test_causal_analyzer.py`
- `tests/context/test_context.py`
- `tests/context/test_context_explainability_regression.py`
- `tests/context/test_context_graph_decisions.py`
- `tests/context/test_context_graph_full_feature_e2e.py`
- `tests/context/test_context_graphs_examples.py`
- `tests/context/test_context_retriever_hybrid.py`
- `tests/context/test_context_retriever_precedents.py`
- `tests/context/test_cross_graph_navigation.py`
- `tests/context/test_decision_methods_trace.py`
- `tests/context/test_decision_models.py`
- `tests/context/test_decision_query.py`
- `tests/context/test_decision_query_fallback.py`
- `tests/context/test_decision_recorder.py`
- `tests/context/test_distance_intelligence.py`
- `tests/context/test_end_to_end_context_integration.py`
- `tests/context/test_graph_schema_logging.py`
- `tests/context/test_healthcare_context_graphs_e2e.py`
- `tests/context/test_policy_engine.py`
- `tests/context/test_policy_engine_fallback.py`
- `tests/context/test_query_result_unwrap.py`
- `tests/context/test_temporal_retriever.py`
- `tests/cookbook/test_disease_network_analysis.py`
- `tests/core/__init__.py`
- `tests/core/test_core.py`
- `tests/core/test_core_integration.py`
- `tests/deduplication/__init__.py`
- `tests/deduplication/test_deduplication.py`
- `tests/embeddings/test_model_switching.py`
- `tests/embeddings/test_text_embedder.py`
- `tests/explorer/__init__.py`
- `tests/explorer/test_explorer_api.py`
- `tests/explorer/test_ontology_subissue3.py`
- `tests/explorer/test_provenance_route.py`
- `tests/explorer/test_rdf_parser.py`
- `tests/explorer/test_vocabulary.py`
- `tests/export/__init__.py`
- `tests/export/test_owl_exporter.py`
- `tests/export/test_rdf_exporter.py`
- `tests/graph_store/__init__.py`
- `tests/graph_store/test_age_store.py`
- `tests/ingest/__init__.py`
- `tests/ingest/test_cookbook_integration.py`
- `tests/ingest/test_feed_ingestor.py`
- `tests/ingest/test_file_ingestor.py`
- `tests/ingest/test_ingest_from_csv().py`
- `tests/ingest/test_ingestors.py`
- `tests/ingest/test_notebook_02.py`
- `tests/ingest/test_notebook_06.py`
- `tests/ingest/test_ontology_ingestor.py`
- `tests/ingest/test_optional_imports.py`
- `tests/ingest/test_parquet_ingestor.py`
- `tests/ingest/test_public_api_ingestor.py`
- `tests/ingest/test_submodules.py`
- `tests/ingest/test_web_ingestor.py`
- `tests/ingest/test_xml_ingestor.py`
- `tests/integration/test_relations_groq.py`
- `tests/integrations/__init__.py`
- `tests/integrations/agno/__init__.py`
- `tests/integrations/agno/conftest.py`
- `tests/integrations/agno/test_context_store.py`
- `tests/integrations/agno/test_decision_kit.py`
- `tests/integrations/agno/test_kg_toolkit.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/benchmark.yml`
- `.github/workflows/ci.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/defender-for-devops.yml`
- `.github/workflows/docs.yml`
- `.github/workflows/release.yml`
- `.github/workflows/security-scan.yml`
- `.github/workflows/security.yml`
- `Dockerfile`
- `docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 592 |
| .md | 123 |
| .tsx | 42 |
| .ipynb | 37 |
| .ts | 33 |
| .json | 24 |
| .yml | 13 |
| .svg | 11 |
| .css | 4 |
| .png | 3 |
| .ttl | 3 |
| .yaml | 3 |
| init | 3 |
| .gif | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `plugins/ 내부 책임 분리`
- `semantica/ 내부 책임 분리`
- `.claude/skills/init 스펙/명령 의미`
- `.claude/skills/semantica/SKILL.md 스펙/명령 의미`
- `.claude/skills/semantica/init 스펙/명령 의미`
- `plugins/skills/causal/SKILL.md 스펙/명령 의미`
- `plugins/skills/change/SKILL.md 스펙/명령 의미`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `explorer/package.json 실행 스크립트와 패키지 경계`
- `explorer/tsconfig.json 실행 스크립트와 패키지 경계`
- `explorer/vite.config.ts 실행 스크립트와 패키지 경계`

