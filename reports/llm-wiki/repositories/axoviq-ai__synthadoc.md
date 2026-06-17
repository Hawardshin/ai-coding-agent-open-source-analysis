# axoviq-ai/synthadoc 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/axoviq-ai__synthadoc |
| remote | https://github.com/axoviq-ai/synthadoc |
| HEAD | 1d99102 (2026-06-17) fix(ingest): use getattr in _backfill_okf_fields to handle pre-v0.9.0 pages (#152) |
| branch | main |
| groups | llm-wiki-100 |
| files | 378 |
| dirs | 66 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Synthadoc`, `Table of Contents`, `Who Is It For?`, `Inspiration and Vision`, `Problems Addressed`, `1. RAG conflates contradictions; Synthadoc surfaces them`, `2. Knowledge fragments; Synthadoc links it`, `3. Orphan knowledge has no address; Synthadoc finds it`, `4. LLM-compiled content can be overconfident; Synthadoc audits it`, `Claim-Level Provenance`, `5-State Lifecycle Machine`, `5. Re-synthesis is expensive; Synthadoc caches it`, `6. Knowledge is locked in tools; Synthadoc escapes it`, `7. Wiki structure decays as content grows; Synthadoc regenerates it`, `Business values`, `Why Synthadoc?`, `Competitive advantages`, `Key differentiators vs. RAG`

> Synthadoc Document version v0.8.0 Engineered for solo users and enterprises alike, providing a domain specific knowledge base that scales seamlessly while maintaining accuracy through autonomous self optimization. Built for individuals, small teams, and large organizations who need a knowledge base that stays accurate as documents accumulate. Synthadoc reads your raw source documents — PDFs, spreadsheets, PPTs, web pages, images, videos, Word files, TXTs — and uses an LLM to synthesize them into a persistent, structured wiki. Cross references are built automatically, contradictions are detected and surfaced, orphan pages are flagged, and every answer cites its sources. Outputs are stored as local Markdown files, ensuring seamless integration and autonomous management within Obsidian or any wiki compliant ecosystem. ▶ Watch the demo on YouTube Table of Contents Who Is It For? Inspiration 

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| docs | dir |
| hooks | dir |
| LICENSE | file |
| obsidian-plugin | dir |
| pyproject.toml | file |
| README.md | file |
| scripts | dir |
| synthadoc | dir |
| tests | dir |
| VERSION | file |
| web-ui | dir |
| wiki | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| synthadoc/ | 180 |
| tests/ | 98 |
| docs/ | 41 |
| web-ui/ | 32 |
| obsidian-plugin/ | 13 |
| (root) | 8 |
| hooks/ | 2 |
| scripts/ | 2 |
| .github/ | 1 |
| wiki/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 41 | preferred |
| tests/ | 98 | preferred |
| scripts/ | 2 | preferred |
| synthadoc/ | 180 | large |
| synthadoc/demos/ | 67 | large |
| docs/png/ | 38 | large |
| synthadoc/demos/history-of-computing/ | 34 | large |
| synthadoc/skills/ | 33 | large |
| synthadoc/demos/ai-research/ | 32 | large |
| web-ui/ | 32 | large |
| synthadoc/cli/ | 27 | large |
| tests/cli/ | 22 | large |
| web-ui/src/ | 20 | large |
| synthadoc/agents/ | 16 | large |
| tests/agents/ | 15 | large |
| obsidian-plugin/ | 13 | large |
| tests/core/ | 11 | large |
| synthadoc/core/ | 9 | large |
| tests/skills/ | 8 | large |
| synthadoc/knowledge/ | 7 | large |
| synthadoc/providers/ | 7 | large |
| tests/integration/ | 7 | large |
| tests/providers/ | 6 | large |
| web-ui/src/components/ | 6 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `obsidian-plugin/package.json`
- `obsidian-plugin/tsconfig.json`
- `pyproject.toml`
- `web-ui/package.json`
- `web-ui/tsconfig.json`
- `web-ui/vite.config.ts`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| obsidian-plugin/package.json | synthadoc-obsidian | build, dev, test, coverage |  |
| web-ui/package.json | web-ui | dev, build, lint, preview | react, react-dom, react-markdown, remark-gfm |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| pyproject.toml | synthadoc | false | false | false | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/badges.json`
- `docs/design.md`
- `docs/png/architecture.png`
- `docs/png/audit-citation.png`
- `docs/png/audit-queries.png`
- `docs/png/cache-perf/cache-read-latency.png`
- `docs/png/cache-perf/cache-vs-nocache-qps.png`
- `docs/png/cache-perf/concurrent-readers.png`
- `docs/png/cache-perf/hit-vs-miss-latency.png`
- `docs/png/claim-level-citation.png`
- `docs/png/cli-gap-detection.png`
- `docs/png/job-list-terminal.png`
- `docs/png/lint-report-adversarial.png`
- `docs/png/page-provenance-line-range.png`
- `docs/png/synthadoc-audit-cost.png`
- `docs/png/synthadoc-audit-events.png`
- `docs/png/synthadoc-audit-history.png`
- `docs/png/synthadoc-batch-ingest-raw-sources.png`
- `docs/png/synthadoc-candidates.png`
- `docs/png/synthadoc-export-kg.png`
- `docs/png/synthadoc-export-wiki.png`
- `docs/png/synthadoc-graph-after.png`
- `docs/png/synthadoc-graph-view.png`
- `docs/png/synthadoc-jobs-list.png`
- `docs/png/synthadoc-jobs-modal.png`
- `docs/png/synthadoc-lifecycle-audit.png`
- `docs/png/synthadoc-lifecycle-mgmt.png`
- `docs/png/synthadoc-lint-run.png`
- `docs/png/synthadoc-query-agent-web-UI.png`
- `docs/png/synthadoc-query-result.png`
- `docs/png/synthadoc-ribbon-icon.png`
- `docs/png/synthadoc-routing-init.png`
- `docs/png/synthadoc-routing.png`
- `docs/png/synthadoc-search-live-view.png`
- `docs/png/synthadoc-serve.png`
- `docs/png/synthadoc-switch-provider.png`
- `docs/png/synthadoc-vault-demo.png`
- `docs/png/synthadoc-wiki-conflict.png`
- `docs/png/synthadoc-wiki-graph.png`
- `docs/png/ui-gap-detection.png`
- `docs/user-quick-start-guide.md`
- `hooks/README.md`
- `synthadoc/demos/ai-research/README.md`
- `synthadoc/demos/history-of-computing/README.md`
- `web-ui/README.md`

### 에이전트 지침 후보

- `synthadoc/agents/skill_agent.py`
- `synthadoc/demos/ai-research/AGENTS.md`
- `synthadoc/demos/history-of-computing/AGENTS.md`
- `synthadoc/integration/mcp_server.py`
- `synthadoc/skills/__init__.py`
- `synthadoc/skills/base.py`
- `synthadoc/skills/docx/SKILL.md`
- `synthadoc/skills/docx/scripts/__init__.py`
- `synthadoc/skills/docx/scripts/main.py`
- `synthadoc/skills/image/SKILL.md`
- `synthadoc/skills/image/scripts/__init__.py`
- `synthadoc/skills/image/scripts/main.py`
- `synthadoc/skills/markdown/SKILL.md`
- `synthadoc/skills/markdown/scripts/__init__.py`
- `synthadoc/skills/markdown/scripts/main.py`
- `synthadoc/skills/pdf/SKILL.md`
- `synthadoc/skills/pdf/references/cjk-notes.md`
- `synthadoc/skills/pdf/scripts/__init__.py`
- `synthadoc/skills/pdf/scripts/main.py`
- `synthadoc/skills/pptx/SKILL.md`
- `synthadoc/skills/pptx/scripts/__init__.py`
- `synthadoc/skills/pptx/scripts/main.py`
- `synthadoc/skills/registry.py`
- `synthadoc/skills/url/SKILL.md`
- `synthadoc/skills/url/scripts/__init__.py`
- `synthadoc/skills/url/scripts/main.py`
- `synthadoc/skills/web_search/SKILL.md`
- `synthadoc/skills/web_search/assets/search-providers.json`
- `synthadoc/skills/web_search/scripts/__init__.py`
- `synthadoc/skills/web_search/scripts/fetcher.py`
- `synthadoc/skills/web_search/scripts/main.py`
- `synthadoc/skills/xlsx/SKILL.md`
- `synthadoc/skills/xlsx/scripts/__init__.py`
- `synthadoc/skills/xlsx/scripts/main.py`
- `synthadoc/skills/youtube/SKILL.md`
- `synthadoc/skills/youtube/scripts/__init__.py`
- `synthadoc/skills/youtube/scripts/main.py`
- `tests/integration/test_mcp_server.py`
- `tests/skills/__init__.py`
- `tests/skills/test_image_skill.py`
- `tests/skills/test_pdf_skill.py`
- `tests/skills/test_registry.py`
- `tests/skills/test_skill_agent.py`
- `tests/skills/test_skills.py`
- `tests/skills/test_web_search.py`
- `tests/skills/test_youtube_skill.py`

### 스펙/템플릿/명령/스킬 후보

- `docs/design.md`
- `synthadoc/skills/__init__.py`
- `synthadoc/skills/base.py`
- `synthadoc/skills/docx/SKILL.md`
- `synthadoc/skills/docx/scripts/__init__.py`
- `synthadoc/skills/docx/scripts/main.py`
- `synthadoc/skills/image/SKILL.md`
- `synthadoc/skills/image/scripts/__init__.py`
- `synthadoc/skills/image/scripts/main.py`
- `synthadoc/skills/markdown/SKILL.md`
- `synthadoc/skills/markdown/scripts/__init__.py`
- `synthadoc/skills/markdown/scripts/main.py`
- `synthadoc/skills/pdf/SKILL.md`
- `synthadoc/skills/pdf/references/cjk-notes.md`
- `synthadoc/skills/pdf/scripts/__init__.py`
- `synthadoc/skills/pdf/scripts/main.py`
- `synthadoc/skills/pptx/SKILL.md`
- `synthadoc/skills/pptx/scripts/__init__.py`
- `synthadoc/skills/pptx/scripts/main.py`
- `synthadoc/skills/registry.py`
- `synthadoc/skills/url/SKILL.md`
- `synthadoc/skills/url/scripts/__init__.py`
- `synthadoc/skills/url/scripts/main.py`
- `synthadoc/skills/web_search/SKILL.md`
- `synthadoc/skills/web_search/assets/search-providers.json`
- `synthadoc/skills/web_search/scripts/__init__.py`
- `synthadoc/skills/web_search/scripts/fetcher.py`
- `synthadoc/skills/web_search/scripts/main.py`
- `synthadoc/skills/xlsx/SKILL.md`
- `synthadoc/skills/xlsx/scripts/__init__.py`
- `synthadoc/skills/xlsx/scripts/main.py`
- `synthadoc/skills/youtube/SKILL.md`
- `synthadoc/skills/youtube/scripts/__init__.py`
- `synthadoc/skills/youtube/scripts/main.py`
- `tests/skills/__init__.py`
- `tests/skills/test_image_skill.py`
- `tests/skills/test_pdf_skill.py`
- `tests/skills/test_registry.py`
- `tests/skills/test_skill_agent.py`
- `tests/skills/test_skills.py`
- `tests/skills/test_web_search.py`
- `tests/skills/test_youtube_skill.py`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `obsidian-plugin/src/api.test.ts`
- `obsidian-plugin/src/main.test.ts`
- `tests/__init__.py`
- `tests/agents/__init__.py`
- `tests/agents/test_action_agent.py`
- `tests/agents/test_agent_utils.py`
- `tests/agents/test_context_agent.py`
- `tests/agents/test_hint_engine.py`
- `tests/agents/test_ingest_agent.py`
- `tests/agents/test_ingest_web_search_decomposition.py`
- `tests/agents/test_lint_agent.py`
- `tests/agents/test_query_agent.py`
- `tests/agents/test_query_stream.py`
- `tests/agents/test_rewrite_agent.py`
- `tests/agents/test_routing.py`
- `tests/agents/test_scaffold_agent.py`
- `tests/agents/test_search_decompose_agent.py`
- `tests/agents/test_summarize_agent.py`
- `tests/cli/__init__.py`
- `tests/cli/test_audit_cli.py`
- `tests/cli/test_candidates_cli.py`
- `tests/cli/test_cli.py`
- `tests/cli/test_cli_commands.py`
- `tests/cli/test_context_cli.py`
- `tests/cli/test_demo_sync.py`
- `tests/cli/test_export_cli.py`
- `tests/cli/test_http_helpers.py`
- `tests/cli/test_init.py`
- `tests/cli/test_install_port.py`
- `tests/cli/test_jobs_cli.py`
- `tests/cli/test_lint_cli.py`
- `tests/cli/test_logo.py`
- `tests/cli/test_plugin_cli.py`
- `tests/cli/test_query_cli.py`
- `tests/cli/test_routing_cli.py`
- `tests/cli/test_scaffold_cli.py`
- `tests/cli/test_schedule_cli.py`
- `tests/cli/test_serve.py`
- `tests/cli/test_web_cli.py`
- `tests/cli/test_wiki_resolution.py`
- `tests/conftest.py`
- `tests/core/__init__.py`
- `tests/core/test_cache.py`
- `tests/core/test_candidates.py`
- `tests/core/test_cost_guard.py`
- `tests/core/test_hooks.py`
- `tests/core/test_logging_config.py`
- `tests/core/test_orchestrator.py`
- `tests/core/test_orchestrator_cost.py`
- `tests/core/test_queue.py`
- `tests/core/test_routing.py`
- `tests/core/test_scheduler.py`
- `tests/integration/__init__.py`
- `tests/integration/okf_consumer_agent.py`
- `tests/integration/test_http_api.py`
- `tests/integration/test_http_server.py`
- `tests/integration/test_mcp_server.py`
- `tests/integration/test_routing_endpoints.py`
- `tests/integration/test_sse_endpoint.py`
- `tests/performance/__init__.py`
- `tests/performance/test_citation_perf.py`
- `tests/performance/test_performance.py`
- `tests/performance/test_query_cache_perf.py`
- `tests/performance/test_routing_benchmark.py`
- `tests/providers/__init__.py`
- `tests/providers/test_coding_tool_integration.py`
- `tests/providers/test_coding_tool_providers.py`
- `tests/providers/test_pricing.py`
- `tests/providers/test_providers.py`
- `tests/providers/test_streaming.py`
- `tests/security/__init__.py`
- `tests/security/test_security.py`
- `tests/skills/__init__.py`
- `tests/skills/test_image_skill.py`
- `tests/skills/test_pdf_skill.py`
- `tests/skills/test_registry.py`
- `tests/skills/test_skill_agent.py`
- `tests/skills/test_skills.py`
- `tests/skills/test_web_search.py`
- `tests/skills/test_youtube_skill.py`
- ... 20 more

### CI/Docker 후보

- `.github/workflows/ci.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 196 |
| .md | 59 |
| .png | 43 |
| .txt | 21 |
| .json | 13 |
| .ts | 13 |
| .tsx | 8 |
| .svg | 4 |
| .pdf | 3 |
| .css | 2 |
| .gitignore | 2 |
| .js | 2 |
| .pptx | 2 |
| .xlsx | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `synthadoc/ 내부 책임 분리`
- `synthadoc/demos/ 내부 책임 분리`
- `docs/design.md 스펙/명령 의미`
- `synthadoc/skills/__init__.py 스펙/명령 의미`
- `synthadoc/skills/base.py 스펙/명령 의미`
- `synthadoc/skills/docx/SKILL.md 스펙/명령 의미`
- `synthadoc/skills/docx/scripts/__init__.py 스펙/명령 의미`
- `obsidian-plugin/package.json 실행 스크립트와 패키지 경계`
- `obsidian-plugin/tsconfig.json 실행 스크립트와 패키지 경계`
- `pyproject.toml 실행 스크립트와 패키지 경계`
- `web-ui/package.json 실행 스크립트와 패키지 경계`
- `web-ui/tsconfig.json 실행 스크립트와 패키지 경계`

