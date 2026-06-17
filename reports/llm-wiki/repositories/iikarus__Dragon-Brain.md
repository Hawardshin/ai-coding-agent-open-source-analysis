# iikarus/Dragon-Brain 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/iikarus__Dragon-Brain |
| remote | https://github.com/iikarus/Dragon-Brain |
| HEAD | 7410096 (2026-05-28) docs(process): 22a round-1 audit fixes — outer-mock type logic, marker check scope, harness tightening |
| branch | master |
| groups | llm-wiki-100 |
| files | 352 |
| dirs | 33 |
| stack | Python |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Dragon Brain`, `Quick Start`, `1. Start the Services`, `2. Connect Your AI Agent`, `3. Start Remembering`, `What It Does`, `How It Compares`, `Benchmark`, `Per-Category Breakdown`, `Reproduce It`, `🔥 Use Cases — See It In Action`, `⚖️ [Legal Discovery](demos/legal-discovery/)`, `🔬 [Research Lab](demos/research-lab/)`, `🚀 [Startup CTO](demos/startup-cto/)`, `🔍 [Investigative Journalist](demos/investigative-journalist/)`, `🎲 [Game Master](demos/game-master/)`, `🧠 [Personal Knowledge](demos/personal-knowledge/)`, `🛡️ [Cybersecurity SOC](demos/cybersecurity-soc/)`

> Dragon Brain English 中文 日本語 Español Русский 한국어 Português Deutsch Français Memory infrastructure for AI agents — that fails loud, by design. [ ]() [ ]() [ ]() [ blue)]() [ ]() 100% LongMemEval R@5 · 34 MCP tools · sub 200ms hybrid search · CI gated fail loud contracts · No LLM required An open source MCP server that gives any LLM long term memory using a knowledge graph + vector search hybrid. Store entities, observations, and relationships — then recall them semantically across sessions. Works with any MCP client Claude Code, Claude Desktop, Cursor, Windsurf, Cline, Gemini CLI, VS Code Copilot, or any LLM that speaks Model Context Protocol. Unlike flat chat history or simple RAG, Dragon Brain understands relationships between memories — not just similarity. An autonomous agent ("The Librarian") periodically clusters and synthesizes memories into higher order concepts. And it tells you w

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| audit_hammer.txt | file |
| audit_polish.txt | file |
| audit_pulse.txt | file |
| benchmarks | dir |
| CHANGELOG.md | file |
| CLAUDE.md | file |
| CONTRIBUTING.md | file |
| coverage_report.txt | file |
| demos | dir |
| docker-compose.yml | file |
| Dockerfile | file |
| docs | dir |
| LICENSE | file |
| mcp_config.example.json | file |
| mcp_config.json | file |
| ontology.json | file |
| process | dir |
| pyproject.toml | file |
| README.de.md | file |
| README.es.md | file |
| README.fr.md | file |
| README.ja.md | file |
| README.ko.md | file |
| README.md | file |
| README.pt-BR.md | file |
| README.ru.md | file |
| README.zh-CN.md | file |
| release_notes.md | file |
| requirements.lock | file |
| scripts | dir |
| src | dir |
| tests | dir |
| tox.ini | file |
| VERSION | file |
| vulture_whitelist.py | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| tests/ | 112 |
| scripts/ | 75 |
| src/ | 43 |
| docs/ | 34 |
| process/ | 32 |
| (root) | 31 |
| demos/ | 14 |
| benchmarks/ | 10 |
| .github/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 43 | preferred |
| docs/ | 34 | preferred |
| tests/ | 112 | preferred |
| scripts/ | 75 | preferred |
| tests/unit/ | 95 | large |
| src/claude_memory/ | 40 | large |
| process/ | 32 | large |
| scripts/internal/ | 28 | large |
| process/issues/ | 18 | large |
| demos/ | 14 | large |
| benchmarks/ | 10 | large |
| tests/gauntlet/ | 10 | large |
| benchmarks/longmemeval/ | 9 | large |
| docs/adr/ | 7 | large |
| docs/project_history/ | 4 | large |
| src/dashboard/ | 3 | large |
| tests/integration/ | 3 | large |
| scripts/hooks/ | 2 | large |
| .github/ | 1 | large |
| .github/workflows/ | 1 | large |
| demos/cybersecurity-soc/ | 1 | large |
| demos/engineering-rnd/ | 1 | large |
| demos/game-master/ | 1 | large |
| demos/investigative-journalist/ | 1 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `Dockerfile`
- `docker-compose.yml`
- `pyproject.toml`

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | dragon-brain | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `benchmarks/longmemeval/README.md`
- `demos/README.md`
- `demos/cybersecurity-soc/README.md`
- `demos/engineering-rnd/README.md`
- `demos/game-master/README.md`
- `demos/investigative-journalist/README.md`
- `demos/legal-discovery/README.md`
- `demos/medical-practice/README.md`
- `demos/open-source-maintainer/README.md`
- `demos/personal-knowledge/README.md`
- `demos/portfolio-manager/README.md`
- `demos/research-lab/README.md`
- `demos/startup-cto/README.md`
- `demos/teacher/README.md`
- `demos/university-student/README.md`
- `docs/ARCHITECTURE.md`
- `docs/CHANGELOG.md`
- `docs/CODE_INVENTORY.md`
- `docs/DOCS_INDEX.md`
- `docs/DRAGON_BRAIN_GAUNTLET.md`
- `docs/ENHANCEMENT_SPEC.md`
- `docs/GAUNTLET_RESULTS.md`
- `docs/GOTCHAS.md`
- `docs/MAINTENANCE_MANUAL.md`
- `docs/MCP_TOOL_REFERENCE.md`
- `docs/POST_BUILD_FINDINGS.md`
- `docs/REHYDRATION_DOCUMENT.md`
- `docs/RUNBOOK.md`
- `docs/SETUP.md`
- `docs/SPEC-drift-detection-architectural-invariants.md`
- `docs/SPEC-drift-detection-distribution-monitors.md`
- `docs/SPEC-drift-detection-golden-queries.md`
- `docs/SPEC-hybrid-search-unification.md`
- `docs/UPGRADE_LOG.md`
- `docs/USER_MANUAL.md`
- `docs/adr/001-hybrid-storage.md`
- `docs/adr/002-service-repository.md`
- `docs/adr/003-python-graph-algos.md`
- `docs/adr/004-observation-vectorization.md`
- `docs/adr/005-associative-search.md`
- `docs/adr/006-gold-stack.md`
- `docs/adr/007-hybrid-search-unification.md`
- `docs/dashboard.png`
- `docs/project_history/dependency_analysis.md`
- `docs/project_history/implementation_plan.md`
- `docs/project_history/task.md`
- `docs/project_history/walkthrough.md`
- `docs/structural-analysis-feature-a.md`
- ... 3 more

### 에이전트 지침 후보

- `CLAUDE.md`
- `mcp_config.example.json`
- `mcp_config.json`
- `scripts/internal/verify_mcp_server.py`
- `scripts/mcp_smoke_test.py`
- `scripts/run_mcp_server.ps1`
- `scripts/verify_mcp_server.py`

### 스펙/템플릿/명령/스킬 후보

_없음_

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/__init__.py`
- `tests/conftest.py`
- `tests/e2e_functional.py`
- `tests/gauntlet/__init__.py`
- `tests/gauntlet/test_concurrent.py`
- `tests/gauntlet/test_contracts.py`
- `tests/gauntlet/test_fuzz_blitz.py`
- `tests/gauntlet/test_golden_queries.py`
- `tests/gauntlet/test_hypothesis_merge.py`
- `tests/gauntlet/test_hypothesis_router.py`
- `tests/gauntlet/test_hypothesis_schema.py`
- `tests/gauntlet/test_invariants.py`
- `tests/gauntlet/test_performance.py`
- `tests/integration/test_db_kill_scenarios.py`
- `tests/integration/test_point_in_time.py`
- `tests/integration/test_spec_pr5.py`
- `tests/test_schema.py`
- `tests/unit/conftest.py`
- `tests/unit/test_ablation.py`
- `tests/unit/test_activation.py`
- `tests/unit/test_activation_radar.py`
- `tests/unit/test_analysis_radar.py`
- `tests/unit/test_analyze_graph.py`
- `tests/unit/test_archive_vector_cleanup.py`
- `tests/unit/test_backfill_temporal.py`
- `tests/unit/test_backup_restore.py`
- `tests/unit/test_batch2_contracts.py`
- `tests/unit/test_batch3_contracts.py`
- `tests/unit/test_batch4_contracts.py`
- `tests/unit/test_batch5_contracts.py`
- `tests/unit/test_channel_degradation.py`
- `tests/unit/test_clustering.py`
- `tests/unit/test_code_review_fixes.py`
- `tests/unit/test_consolidate_errors.py`
- `tests/unit/test_context.py`
- `tests/unit/test_contract_scanner.py`
- `tests/unit/test_coverage_gaps.py`
- `tests/unit/test_crud_split_brain.py`
- `tests/unit/test_dashboard.py`
- `tests/unit/test_dashboard_app.py`
- `tests/unit/test_date_parser.py`
- `tests/unit/test_diff_knowledge_state.py`
- `tests/unit/test_dynamic_validation.py`
- `tests/unit/test_edge_cases.py`
- `tests/unit/test_embedding_client.py`
- `tests/unit/test_embedding_coverage.py`
- `tests/unit/test_embedding_filter.py`
- `tests/unit/test_embedding_retry.py`
- `tests/unit/test_embedding_server.py`
- `tests/unit/test_embedding_text.py`
- `tests/unit/test_energy_valves.py`
- `tests/unit/test_entity_channel.py`
- `tests/unit/test_entity_extraction.py`
- `tests/unit/test_entity_lifecycle.py`
- `tests/unit/test_fts_store.py`
- `tests/unit/test_full_workflow.py`
- `tests/unit/test_graph_traversal.py`
- `tests/unit/test_hologram.py`
- `tests/unit/test_hybrid_search.py`
- `tests/unit/test_inject_handoff_hash.py`
- `tests/unit/test_interfaces.py`
- `tests/unit/test_librarian.py`
- `tests/unit/test_librarian_repro.py`
- `tests/unit/test_list_orphans.py`
- `tests/unit/test_lock_fallback.py`
- `tests/unit/test_locking.py`
- `tests/unit/test_logging_config.py`
- `tests/unit/test_longmemeval_metrics.py`
- `tests/unit/test_memory_service.py`
- `tests/unit/test_merge.py`
- `tests/unit/test_mutant_clustering.py`
- `tests/unit/test_mutant_config_defaults.py`
- `tests/unit/test_mutant_default_params.py`
- `tests/unit/test_mutant_dict_crud.py`
- `tests/unit/test_mutant_dict_services.py`
- `tests/unit/test_mutant_graph_algorithms.py`
- `tests/unit/test_mutant_lock_manager.py`
- `tests/unit/test_mutant_ontology.py`
- `tests/unit/test_mutant_pydantic_defaults.py`
- `tests/unit/test_mutant_router.py`
- ... 32 more

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `Dockerfile`
- `docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 229 |
| .md | 93 |
| .ps1 | 7 |
| .txt | 4 |
| .json | 3 |
| .toml | 3 |
| .bat | 2 |
| .yml | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .ini | 1 |
| .lock | 1 |
| .png | 1 |
| .yaml | 1 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `tests/unit/ 내부 책임 분리`
- `Dockerfile 실행 스크립트와 패키지 경계`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`

