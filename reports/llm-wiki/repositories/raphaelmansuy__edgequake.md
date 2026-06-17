# raphaelmansuy/edgequake 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/raphaelmansuy__edgequake |
| remote | https://github.com/raphaelmansuy/edgequake |
| HEAD | 2882651 (2026-06-09) release: v0.12.11 — document notices and workspace-scoped dedup |
| branch | edgequake-main |
| groups | llm-wiki-100 |
| files | 5009 |
| dirs | 831 |
| stack | Node/TypeScript/JavaScript, Python, Rust, Go |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `EdgeQuake`, `Release & CD Cycle`, `1) Local release gates (must pass before tag)`, `2) CI validation (GitHub Actions)`, `3) Cut release (CD publish)`, `Example`, `4) Post-publish verification`, `Why EdgeQuake?`, `What Sets EdgeQuake Apart`, `Performance Benchmarks`, `Features`, `🚀 High Performance`, `💉 Knowledge Injection ✨ **NEW in 0.8.0** ([#131](https://github.com/raphaelmansuy/edgequake/issues/131))`, `🏷️ Custom Entity Configuration ✨ **NEW in 0.9.0** ([#85](https://github.com/raphaelmansuy/edgequake/issues/85))`, `Knowledge Graph`, `📄 PDF Processing (Production Ready in v0.4.0)`, `🔍 6 Query Modes`, `🌐 REST API`

> EdgeQuake <a href="https //trendshift.io/repositories/20893" target=" blank" <img src="https //trendshift.io/api/badge/repositories/20893" alt="raphaelmansuy%2Fedgequake Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a High Performance Graph RAG Framework in Rust Transform documents into intelligent knowledge graphs for superior retrieval and generation v0.12.11 — Document status notices + workspace scoped duplicate detection. See CHANGELOG. Release & CD Cycle Use this sequence to cut a release with a deterministic quality gate and publish pipeline. 1) Local release gates (must pass before tag) 2) CI validation (GitHub Actions) Release Gates workflow must be green (or tag push runs preflight in release docker.yml ). SPEC 013 PR Proof , CI , Test Quality Gates , and integration tests must be green. Ignore unrelated external automation failures (for example Depend

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .dockerignore | file |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| .metals | dir |
| .vscode | dir |
| AGENTS.md | file |
| articles | dir |
| audit_ui | dir |
| benches | dir |
| CHANGELOG.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| crates | dir |
| docker | dir |
| DOCKER_DEPLOYMENT_SUMMARY.md | file |
| DOCKER_QUICK_START.md | file |
| DOCKER_SETUP_IMPLEMENTATION.md | file |
| DOCKER_VERIFICATION.md | file |
| docker-compose.quickstart.yml | file |
| docs | dir |
| edgequake | dir |
| edgequake_webui | dir |
| edgequake-website | dir |
| edgequake.code-workspace | file |
| examples | dir |
| ISSUE_RESOLUTION_SUMMARY.md | file |
| legacy | dir |
| LICENSE | file |
| logs | dir |
| Makefile | file |
| mcp | dir |
| migrations | dir |
| mission | dir |
| mobile-snapshot.md | file |
| qa | dir |
| quickstart.sh | file |
| README.md | file |
| scripts | dir |
| sdks | dir |
| SECURITY.md | file |
| specifications | dir |
| specs | dir |
| test_docker_e2e.py | file |
| tests | dir |
| verify_docker.sh | file |
| VERSION | file |
| wiki | dir |
| zz-reference | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| sdks/ | 2093 |
| edgequake/ | 714 |
| edgequake_webui/ | 685 |
| legacy/ | 486 |
| specs/ | 257 |
| audit_ui/ | 184 |
| articles/ | 134 |
| docs/ | 88 |
| .github/ | 76 |
| specifications/ | 59 |
| scripts/ | 45 |
| zz-reference/ | 39 |
| edgequake-website/ | 34 |
| mcp/ | 30 |
| .metals/ | 28 |
| (root) | 23 |
| crates/ | 9 |
| logs/ | 5 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| crates/ | 9 | preferred |
| docs/ | 88 | preferred |
| examples/ | 1 | preferred |
| tests/ | 1 | preferred |
| scripts/ | 45 | preferred |
| specs/ | 257 | preferred |
| sdks/ | 2093 | large |
| sdks/php/ | 1761 | large |
| sdks/php/vendor/ | 1744 | large |
| edgequake/ | 714 | large |
| edgequake_webui/ | 685 | large |
| edgequake/crates/ | 600 | large |
| legacy/ | 486 | large |
| legacy/edgequake-pdf/ | 486 | large |
| edgequake_webui/src/ | 448 | large |
| legacy/edgequake-pdf/test-data/ | 360 | large |
| edgequake/crates/edgequake-api/ | 265 | large |
| edgequake_webui/src/components/ | 251 | large |
| audit_ui/ | 184 | large |
| audit_ui/screenshots/ | 184 | large |
| edgequake_webui/e2e/ | 169 | large |
| articles/ | 134 | large |
| specs/017-dry-and-solid-audit/ | 110 | large |
| sdks/typescript/ | 99 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.github/skills/doc-traceability-validator/scripts/requirements.txt`
- `.github/skills/mcp-builder/templates/rust/Cargo.toml`
- `.github/skills/mcp-builder/templates/ts/package.json`
- `.github/skills/pdf-markdown-validator/scripts/requirements.txt`
- `edgequake-website/package.json`
- `edgequake-website/pnpm-lock.yaml`
- `edgequake-website/tsconfig.json`
- `edgequake/Cargo.toml`
- `edgequake/crates/edgequake-api/Cargo.toml`
- `edgequake/crates/edgequake-audit/Cargo.toml`
- `edgequake/crates/edgequake-auth/Cargo.toml`
- `edgequake/crates/edgequake-core/Cargo.toml`
- `edgequake/crates/edgequake-observability/Cargo.toml`
- `edgequake/crates/edgequake-pdf/Cargo.toml`
- `edgequake/crates/edgequake-pipeline/Cargo.toml`
- `edgequake/crates/edgequake-query/Cargo.toml`
- `edgequake/crates/edgequake-rate-limiter/Cargo.toml`
- `edgequake/crates/edgequake-storage/Cargo.toml`
- `edgequake/crates/edgequake-tasks/Cargo.toml`
- `edgequake/docker/Dockerfile`
- `edgequake/docker/docker-compose.yml`
- `edgequake_webui/Dockerfile`
- `edgequake_webui/package.json`
- `edgequake_webui/pnpm-lock.yaml`
- `edgequake_webui/tsconfig.json`
- `legacy/edgequake-pdf/Cargo.toml`
- `mcp/package.json`
- `mcp/tsconfig.json`
- `sdks/go/go.mod`
- `sdks/python/pyproject.toml`
- `sdks/python/uv.lock`
- `sdks/rust/Cargo.toml`
- `sdks/typescript/package.json`
- `sdks/typescript/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| .github/skills/mcp-builder/templates/ts/package.json | mcp-server | start |  |
| edgequake-website/package.json | edgequake-website | dev, build, preview, check, lint | @astrojs/check, @astrojs/react, @astrojs/sitemap, @astrojs/starlight, @astrojs/starlight-tailwind, astro, lucide-react, react, react-dom |
| edgequake_webui/package.json | edgequake_webui | dev, build, build:safe, build:check, start, lint, typecheck, test, test:watch, test:e2e, test:e2e:ui, test:e2e:headed | @radix-ui/react-alert-dialog, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-context-menu, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-label, @radix-ui/react-popover, @radix-ui/react-progress, @radix-ui/react-radio-group, @radix-ui/react-scroll-area, @radix-ui/react-select |
| mcp/package.json | @edgequake/mcp-server | build, dev, start, test, test:watch, test:e2e, lint, clean, prepublishOnly | @modelcontextprotocol/sdk, edgequake-sdk, postcss, zod |
| sdks/typescript/package.json | edgequake-sdk | build, dev, test, test:watch, test:coverage, lint, clean, prepublishOnly |  |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| sdks/python/pyproject.toml | edgequake-sdk | false | false | true | true |

### Cargo.toml

| 경로 | 이름 | workspace | members |
| --- | --- | --- | --- |
| .github/skills/mcp-builder/templates/rust/Cargo.toml | mcp-server | false |  |
| edgequake/Cargo.toml | edgequake | true |      "crates/edgequake-api",     "crates/edgequake-audit",     "crates/edgequake-auth",     "crates/edgequake-core",     "crates/edgequake-observability",     "crates/edgequake-pdf |
| edgequake/crates/edgequake-api/Cargo.toml | edgequake-api | false |  |
| edgequake/crates/edgequake-audit/Cargo.toml | edgequake-audit | false |  |
| edgequake/crates/edgequake-auth/Cargo.toml | edgequake-auth | false |  |
| edgequake/crates/edgequake-core/Cargo.toml | edgequake-core | false |  |
| edgequake/crates/edgequake-observability/Cargo.toml | edgequake-observability | false |  |
| edgequake/crates/edgequake-pdf/Cargo.toml | edgequake-pdf | false |  |
| edgequake/crates/edgequake-pipeline/Cargo.toml | edgequake-pipeline | false |  |
| edgequake/crates/edgequake-query/Cargo.toml | edgequake-query | false |  |
| edgequake/crates/edgequake-rate-limiter/Cargo.toml | edgequake-rate-limiter | false |  |
| edgequake/crates/edgequake-storage/Cargo.toml | edgequake-storage | false |  |
| edgequake/crates/edgequake-tasks/Cargo.toml | edgequake-tasks | false |  |
| legacy/edgequake-pdf/Cargo.toml | edgequake-pdf | false |  |
| sdks/rust/Cargo.toml | edgequake-sdk | false |  |

### go.mod

| 경로 | module | go |
| --- | --- | --- |
| sdks/go/go.mod | github.com/edgequake/edgequake-go | 1.21 |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.github/skills/copilotkit-nextjs-integration/README.md`
- `.github/skills/copilotkit-nextjs-integration/examples/README.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/README.md`
- `.github/skills/e2e-test-service-management/README.md`
- `.github/skills/mcp-builder/README.md`
- `.github/skills/mcp-builder/templates/README.md`
- `.github/skills/pdf-markdown-validator/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `articles/016-llm-vision/README.md`
- `articles/016-mcp/README.md`
- `docs/CHANGELOG.md`
- `docs/OBSERVABILITY.md`
- `docs/README.md`
- `docs/api-reference/document-upload-quick-reference.md`
- `docs/api-reference/extended-api.md`
- `docs/api-reference/index.md`
- `docs/api-reference/lineage-endpoints.md`
- `docs/api-reference/rest-api.md`
- `docs/architecture/crates/README.md`
- `docs/architecture/crates/index.md`
- `docs/architecture/data-flow.md`
- `docs/architecture/index.md`
- `docs/architecture/lineage-tracking.md`
- `docs/architecture/overview.md`
- `docs/assets/01-screenshot.png`
- `docs/comparisons/edgequake-vs-lightrag-superiority-analysis.md`
- `docs/comparisons/index.md`
- `docs/comparisons/vs-graphrag.md`
- `docs/comparisons/vs-lightrag-python.md`
- `docs/comparisons/vs-traditional-rag.md`
- `docs/concepts/entity-extraction.md`
- `docs/concepts/graph-rag.md`
- `docs/concepts/hybrid-retrieval.md`
- `docs/concepts/index.md`
- `docs/concepts/knowledge-graph.md`
- `docs/cookbook.md`
- `docs/deep-dives/chunking-strategies.md`
- `docs/deep-dives/community-detection.md`
- `docs/deep-dives/cost-tracking.md`
- `docs/deep-dives/embedding-models.md`
- `docs/deep-dives/entity-extraction.md`
- `docs/deep-dives/entity-normalization.md`
- `docs/deep-dives/gleaning.md`
- `docs/deep-dives/graph-storage.md`
- `docs/deep-dives/index.md`
- `docs/deep-dives/lightrag-algorithm.md`
- `docs/deep-dives/pdf-processing.md`
- `docs/deep-dives/pipeline-progress.md`
- `docs/deep-dives/query-modes.md`
- ... 30 more

### 에이전트 지침 후보

- `.claude/SKILLS.md`
- `.github/skills/FORMALIZATION_SUMMARY.md`
- `.github/skills/copilotkit-nextjs-integration/README.md`
- `.github/skills/copilotkit-nextjs-integration/SKILL.md`
- `.github/skills/copilotkit-nextjs-integration/examples/README.md`
- `.github/skills/copilotkit-nextjs-integration/metadata.yml`
- `.github/skills/copilotkit-nextjs-integration/overview.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/README.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/instructions.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/patterns/actions-tools.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/patterns/basic-setup.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/patterns/custom-adapters.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/patterns/production-security.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/patterns/state-sharing.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/skill.md`
- `.github/skills/doc-traceability-validator/SKILL.md`
- `.github/skills/doc-traceability-validator/scripts/check_namespace.py`
- `.github/skills/doc-traceability-validator/scripts/generate_index.py`
- `.github/skills/doc-traceability-validator/scripts/generate_registry.py`
- `.github/skills/doc-traceability-validator/scripts/requirements.txt`
- `.github/skills/doc-traceability-validator/scripts/validate_features.py`
- `.github/skills/doc-traceability-validator/scripts/validate_traceability.py`
- `.github/skills/e2e-test-service-management/README.md`
- `.github/skills/e2e-test-service-management/SKILL.md`
- `.github/skills/e2e-test-service-management/test-services.sh`
- `.github/skills/makefile-dev-workflow/SKILL.md`
- `.github/skills/mcp-builder/README.md`
- `.github/skills/mcp-builder/SKILL.md`
- `.github/skills/mcp-builder/index.md`
- `.github/skills/mcp-builder/scripts/create-mcp-project.sh`
- `.github/skills/mcp-builder/scripts/validate_mcp.py`
- `.github/skills/mcp-builder/scripts/validate_mcp.sh`
- `.github/skills/mcp-builder/templates/README.md`
- `.github/skills/mcp-builder/templates/python/__init__.py`
- `.github/skills/mcp-builder/templates/rust/Cargo.toml`
- `.github/skills/mcp-builder/templates/rust/main.rs`
- `.github/skills/mcp-builder/templates/ts/index.ts`
- `.github/skills/mcp-builder/templates/ts/package.json`
- `.github/skills/pdf-markdown-validator/IMPLEMENTATION_SUMMARY.md`
- `.github/skills/pdf-markdown-validator/README.md`
- `.github/skills/pdf-markdown-validator/SKILL.md`
- `.github/skills/pdf-markdown-validator/TESTING.md`
- `.github/skills/pdf-markdown-validator/examples/example.gold.md`
- `.github/skills/pdf-markdown-validator/scripts/analyze_failures.py`
- `.github/skills/pdf-markdown-validator/scripts/batch_drift.py`
- `.github/skills/pdf-markdown-validator/scripts/compare_runs.py`
- `.github/skills/pdf-markdown-validator/scripts/diff_analysis.py`
- `.github/skills/pdf-markdown-validator/scripts/requirements.txt`
- `.github/skills/pdf-markdown-validator/scripts/validate.py`
- `.github/skills/playwright-ux-ui-capture/SKILL.md`
- `.github/skills/playwright-ux-ui-capture/scripts/derive_routes.mjs`
- `.github/skills/reverse-documentation/SKILL.md`
- `.github/skills/ux-ui-analyze-single-page/SKILL.md`
- `.github/skills/ux-ui-map-page-by-page/SKILL.md`
- `.github/skills/ux-ui-map-page-by-page/assets/page-template.md`
- `.github/skills/ux-ui-map-page-by-page/assets/request-template.json`
- `.github/skills/ux-ui-map-page-by-page/scripts/page_artifacts.mjs`
- `.metals/mcp.json`
- `.vscode/mcp.json`
- `AGENTS.md`
- `articles/016-mcp/ANNOUNCEMENT.md`
- `articles/016-mcp/README.md`
- `mcp/.env.example`
- `mcp/.gitignore`
- `mcp/LICENSE`
- `mcp/README.md`
- `mcp/docs/SPEC.md`
- `mcp/package-lock.json`
- `mcp/package.json`
- `mcp/src/client.ts`
- `mcp/src/config.ts`
- `mcp/src/errors.ts`
- `mcp/src/index.ts`
- `mcp/src/prompts/rag.ts`
- `mcp/src/resources/workspace.ts`
- `mcp/src/server.ts`
- `mcp/src/tools/document.ts`
- `mcp/src/tools/graph.ts`
- `mcp/src/tools/health.ts`
- `mcp/src/tools/query.ts`
- ... 12 more

### 스펙/템플릿/명령/스킬 후보

- `.github/skills/FORMALIZATION_SUMMARY.md`
- `.github/skills/copilotkit-nextjs-integration/README.md`
- `.github/skills/copilotkit-nextjs-integration/SKILL.md`
- `.github/skills/copilotkit-nextjs-integration/examples/README.md`
- `.github/skills/copilotkit-nextjs-integration/metadata.yml`
- `.github/skills/copilotkit-nextjs-integration/overview.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/README.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/instructions.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/patterns/actions-tools.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/patterns/basic-setup.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/patterns/custom-adapters.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/patterns/production-security.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/patterns/state-sharing.md`
- `.github/skills/copilotkit-nextjs-integration/typescript/skill.md`
- `.github/skills/doc-traceability-validator/SKILL.md`
- `.github/skills/doc-traceability-validator/scripts/check_namespace.py`
- `.github/skills/doc-traceability-validator/scripts/generate_index.py`
- `.github/skills/doc-traceability-validator/scripts/generate_registry.py`
- `.github/skills/doc-traceability-validator/scripts/requirements.txt`
- `.github/skills/doc-traceability-validator/scripts/validate_features.py`
- `.github/skills/doc-traceability-validator/scripts/validate_traceability.py`
- `.github/skills/e2e-test-service-management/README.md`
- `.github/skills/e2e-test-service-management/SKILL.md`
- `.github/skills/e2e-test-service-management/test-services.sh`
- `.github/skills/makefile-dev-workflow/SKILL.md`
- `.github/skills/mcp-builder/README.md`
- `.github/skills/mcp-builder/SKILL.md`
- `.github/skills/mcp-builder/index.md`
- `.github/skills/mcp-builder/scripts/create-mcp-project.sh`
- `.github/skills/mcp-builder/scripts/validate_mcp.py`
- `.github/skills/mcp-builder/scripts/validate_mcp.sh`
- `.github/skills/mcp-builder/templates/README.md`
- `.github/skills/mcp-builder/templates/python/__init__.py`
- `.github/skills/mcp-builder/templates/rust/Cargo.toml`
- `.github/skills/mcp-builder/templates/rust/main.rs`
- `.github/skills/mcp-builder/templates/ts/index.ts`
- `.github/skills/mcp-builder/templates/ts/package.json`
- `.github/skills/pdf-markdown-validator/IMPLEMENTATION_SUMMARY.md`
- `.github/skills/pdf-markdown-validator/README.md`
- `.github/skills/pdf-markdown-validator/SKILL.md`
- `.github/skills/pdf-markdown-validator/TESTING.md`
- `.github/skills/pdf-markdown-validator/examples/example.gold.md`
- `.github/skills/pdf-markdown-validator/scripts/analyze_failures.py`
- `.github/skills/pdf-markdown-validator/scripts/batch_drift.py`
- `.github/skills/pdf-markdown-validator/scripts/compare_runs.py`
- `.github/skills/pdf-markdown-validator/scripts/diff_analysis.py`
- `.github/skills/pdf-markdown-validator/scripts/requirements.txt`
- `.github/skills/pdf-markdown-validator/scripts/validate.py`
- `.github/skills/playwright-ux-ui-capture/SKILL.md`
- `.github/skills/playwright-ux-ui-capture/scripts/derive_routes.mjs`
- `.github/skills/reverse-documentation/SKILL.md`
- `.github/skills/ux-ui-analyze-single-page/SKILL.md`
- `.github/skills/ux-ui-map-page-by-page/SKILL.md`
- `.github/skills/ux-ui-map-page-by-page/assets/page-template.md`
- `.github/skills/ux-ui-map-page-by-page/assets/request-template.json`
- `.github/skills/ux-ui-map-page-by-page/scripts/page_artifacts.mjs`
- `edgequake_webui/specs/audit.md`
- `legacy/edgequake-pdf/specs/iteration_11/decide.md`
- `legacy/edgequake-pdf/specs/iteration_11/observe.md`
- `legacy/edgequake-pdf/specs/iteration_11/orient.md`
- `legacy/edgequake-pdf/specs/iteration_12/act.md`
- `legacy/edgequake-pdf/specs/iteration_12/decide.md`
- `legacy/edgequake-pdf/specs/iteration_12/observe.md`
- `legacy/edgequake-pdf/specs/iteration_12/orient.md`
- `sdks/php/vendor/phpunit/phpunit/src/Framework/MockObject/Generator/templates/deprecation.tpl`
- `sdks/php/vendor/phpunit/phpunit/src/Framework/MockObject/Generator/templates/doubled_method.tpl`
- `sdks/php/vendor/phpunit/phpunit/src/Framework/MockObject/Generator/templates/doubled_static_method.tpl`
- `sdks/php/vendor/phpunit/phpunit/src/Framework/MockObject/Generator/templates/intersection.tpl`
- `sdks/php/vendor/phpunit/phpunit/src/Framework/MockObject/Generator/templates/proxied_method.tpl`
- `sdks/php/vendor/phpunit/phpunit/src/Framework/MockObject/Generator/templates/test_double_class.tpl`
- `sdks/php/vendor/phpunit/phpunit/src/Framework/MockObject/Generator/templates/trait_class.tpl`
- `sdks/php/vendor/phpunit/phpunit/src/Framework/MockObject/Generator/templates/wsdl_class.tpl`
- `sdks/php/vendor/phpunit/phpunit/src/Framework/MockObject/Generator/templates/wsdl_method.tpl`
- `sdks/php/vendor/phpunit/phpunit/src/Framework/TestRunner/templates/class.tpl`
- `sdks/php/vendor/phpunit/phpunit/src/Framework/TestRunner/templates/method.tpl`
- `sdks/php/vendor/phpunit/phpunit/src/Runner/PHPT/templates/phpt.tpl`
- `specs/002-multi-llm-providers-improvements.md`
- `specs/005-filter.md`
- `specs/009-skd-update/API-CANON.md`
- `specs/009-skd-update/IMPLEMENTATION-PROOF.md`
- `specs/009-skd-update/OODA-100-REGISTRY.md`
- `specs/009-skd-update/OODA-LOG.md`
- `specs/009-skd-update/README.md`
- `specs/009-skd-update/RUST-SDK-GAP.md`
- `specs/009-skd-update/SDK-API-COVERAGE.md`
- `specs/009-skd-update/SDK-PRE-ASSESSMENT.md`
- `specs/009-skd-update/SDK-QUALITY-ASSESSMENT.md`
- `specs/009-skd-update/node-js/GAP.md`
- `specs/009-skd-update/python-skd/GAP.md`
- `specs/01-fix-195/e2e_verification_proof.md`
- `specs/01-fix-195/fix_specification.md`
- `specs/01-fix-195/prevention_playbook.md`
- `specs/01-fix-195/root_cause_analysis.md`
- `specs/010-ingestion-reliability/fix_specification.md`
- `specs/010-ingestion-reliability/mitigation_strategies.md`
- `specs/010-ingestion-reliability/root_cause_analysis.md`
- `specs/010-ingestion-reliability/timeout_configuration.md`
- `specs/012-performance/ITERATION_01_AUDIT.md`
- `specs/012-performance/ITERATION_01_PROOF.md`
- `specs/012-performance/data/queryedgeQuake.csv`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `edgequake/crates/edgequake-api/tests/common/mod.rs`
- `edgequake/crates/edgequake-api/tests/common/spec013_postgres.rs`
- `edgequake/crates/edgequake-api/tests/e2e_api_comprehensive.rs`
- `edgequake/crates/edgequake-api/tests/e2e_auth.rs`
- `edgequake/crates/edgequake-api/tests/e2e_chat_workspace_provider.rs`
- `edgequake/crates/edgequake-api/tests/e2e_clean_tenant.rs`
- `edgequake/crates/edgequake-api/tests/e2e_complete_provider_switch.rs`
- `edgequake/crates/edgequake-api/tests/e2e_costs.rs`
- `edgequake/crates/edgequake-api/tests/e2e_dashboard_stats_issue81.rs`
- `edgequake/crates/edgequake-api/tests/e2e_data_model.rs`
- `edgequake/crates/edgequake-api/tests/e2e_dimension_logging.rs`
- `edgequake/crates/edgequake-api/tests/e2e_document_deletion.rs`
- `edgequake/crates/edgequake-api/tests/e2e_document_deletion_postgres.rs`
- `edgequake/crates/edgequake-api/tests/e2e_document_lineage.rs`
- `edgequake/crates/edgequake-api/tests/e2e_document_processing_pipeline.rs`
- `edgequake/crates/edgequake-api/tests/e2e_document_processing_providers.rs`
- `edgequake/crates/edgequake-api/tests/e2e_document_workspace_provider.rs`
- `edgequake/crates/edgequake-api/tests/e2e_documents.rs`
- `edgequake/crates/edgequake-api/tests/e2e_edge_cases.rs`
- `edgequake/crates/edgequake-api/tests/e2e_embedding_provider_workspace.rs`
- `edgequake/crates/edgequake-api/tests/e2e_entities.rs`
- `edgequake/crates/edgequake-api/tests/e2e_error_handling.rs`
- `edgequake/crates/edgequake-api/tests/e2e_file_upload.rs`
- `edgequake/crates/edgequake-api/tests/e2e_graph.rs`
- `edgequake/crates/edgequake-api/tests/e2e_injection.rs`
- `edgequake/crates/edgequake-api/tests/e2e_metrics_history.rs`
- `edgequake/crates/edgequake-api/tests/e2e_ollama_integration.rs`
- `edgequake/crates/edgequake-api/tests/e2e_pipeline_comprehensive.rs`
- `edgequake/crates/edgequake-api/tests/e2e_pipeline_resume.rs`
- `edgequake/crates/edgequake-api/tests/e2e_pipeline_robustness.rs`
- `edgequake/crates/edgequake-api/tests/e2e_postgres_dimension_validation.rs`
- `edgequake/crates/edgequake-api/tests/e2e_postgres_provider_switching.rs`
- `edgequake/crates/edgequake-api/tests/e2e_postgres_rebuild.rs`
- `edgequake/crates/edgequake-api/tests/e2e_postgres_rls.rs`
- `edgequake/crates/edgequake-api/tests/e2e_postgres_workspace.rs`
- `edgequake/crates/edgequake-api/tests/e2e_provider_integration.rs`
- `edgequake/crates/edgequake-api/tests/e2e_provider_lineage.rs`
- `edgequake/crates/edgequake-api/tests/e2e_provider_status.rs`
- `edgequake/crates/edgequake-api/tests/e2e_provider_switching.rs`
- `edgequake/crates/edgequake-api/tests/e2e_provider_tracking_stats.rs`
- `edgequake/crates/edgequake-api/tests/e2e_query.rs`
- `edgequake/crates/edgequake-api/tests/e2e_query_engine.rs`
- `edgequake/crates/edgequake-api/tests/e2e_query_http_workspace.rs`
- `edgequake/crates/edgequake-api/tests/e2e_query_routing_parity.rs`
- `edgequake/crates/edgequake-api/tests/e2e_query_workspace_provider.rs`
- `edgequake/crates/edgequake-api/tests/e2e_rebuild_lineage.rs`
- `edgequake/crates/edgequake-api/tests/e2e_rebuild_provider_switching.rs`
- `edgequake/crates/edgequake-api/tests/e2e_reindexing.rs`
- `edgequake/crates/edgequake-api/tests/e2e_relationships.rs`
- `edgequake/crates/edgequake-api/tests/e2e_safety_limits.rs`
- `edgequake/crates/edgequake-api/tests/e2e_spec013_github_issues.rs`
- `edgequake/crates/edgequake-api/tests/e2e_spec013_mistral_live.rs`
- `edgequake/crates/edgequake-api/tests/e2e_spec013_mistral_pdf_query.rs`
- `edgequake/crates/edgequake-api/tests/e2e_spec014_multi_upload.rs`
- `edgequake/crates/edgequake-api/tests/e2e_storage_performance_spec011.rs`
- `edgequake/crates/edgequake-api/tests/e2e_tasks.rs`
- `edgequake/crates/edgequake-api/tests/e2e_tenant_isolation.rs`
- `edgequake/crates/edgequake-api/tests/e2e_timeout_config.rs`
- `edgequake/crates/edgequake-api/tests/e2e_timeout_enforcement.rs`
- `edgequake/crates/edgequake-api/tests/e2e_upload_performance.rs`
- `edgequake/crates/edgequake-api/tests/e2e_vector_storage_dimension.rs`
- `edgequake/crates/edgequake-api/tests/e2e_websocket.rs`
- `edgequake/crates/edgequake-api/tests/e2e_workspace_pipeline_integration.rs`
- `edgequake/crates/edgequake-api/tests/e2e_workspace_provider_ingestion.rs`
- `edgequake/crates/edgequake-api/tests/e2e_workspace_provider_rebuild.rs`
- `edgequake/crates/edgequake-api/tests/e2e_workspace_vector_isolation.rs`
- `edgequake/crates/edgequake-api/tests/graph_optimization_tests.rs`
- `edgequake/crates/edgequake-api/tests/integration_invariants.rs`
- `edgequake/crates/edgequake-api/tests/integration_tests.rs`
- `edgequake/crates/edgequake-api/tests/migration_bootstrap_proof.rs`
- `edgequake/crates/edgequake-api/tests/migration_readiness_proof.rs`
- `edgequake/crates/edgequake-api/tests/observability_proof.rs`
- `edgequake/crates/edgequake-api/tests/resource_safety_proof.rs`
- `edgequake/crates/edgequake-api/tests/spec017_api_contract.rs`
- `edgequake/crates/edgequake-api/tests/spec017_conversation_http_contract.rs`
- `edgequake/crates/edgequake-api/tests/spec017_query_production_path_contract.rs`
- `edgequake/crates/edgequake-api/tests/workspace_document_scope.rs`
- `edgequake/crates/edgequake-core/tests/e2e_advanced_features.rs`
- `edgequake/crates/edgequake-core/tests/e2e_advanced_retrieval.rs`
- `edgequake/crates/edgequake-core/tests/e2e_graph_performance.rs`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/coverage.yml`
- `.github/workflows/deploy-website.yml`
- `.github/workflows/doc-traceability.yml`
- `.github/workflows/e2e-quality-gates.yml`
- `.github/workflows/migration-guard.yml`
- `.github/workflows/postgres-integration.yml`
- `.github/workflows/publish-java-sdk.yml`
- `.github/workflows/release-docker.yml`
- `.github/workflows/release-gates.yml`
- `.github/workflows/spec013-proof-pr.yml`
- `.github/workflows/spec013-proof.yml`
- `.github/workflows/test-quality-gates.yml`
- `docker-compose.quickstart.yml`
- `edgequake/docker/Dockerfile`
- `edgequake/docker/docker-compose.api-only.yml`
- `edgequake/docker/docker-compose.observability.yml`
- `edgequake/docker/docker-compose.prebuilt.yml`
- `edgequake/docker/docker-compose.test.yml`
- `edgequake/docker/docker-compose.yml`
- `edgequake_webui/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .php | 1549 |
| .md | 950 |
| .rs | 725 |
| .ts | 428 |
| .png | 336 |
| .tsx | 255 |
| .json | 106 |
| .py | 106 |
| .pdf | 62 |
| .sh | 53 |
| .sql | 50 |
| .java | 36 |
| .yml | 36 |
| license | 32 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `crates/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `.github/skills/FORMALIZATION_SUMMARY.md 스펙/명령 의미`
- `.github/skills/copilotkit-nextjs-integration/README.md 스펙/명령 의미`
- `.github/skills/copilotkit-nextjs-integration/SKILL.md 스펙/명령 의미`
- `.github/skills/copilotkit-nextjs-integration/examples/README.md 스펙/명령 의미`
- `.github/skills/copilotkit-nextjs-integration/metadata.yml 스펙/명령 의미`
- `.github/skills/doc-traceability-validator/scripts/requirements.txt 실행 스크립트와 패키지 경계`
- `.github/skills/mcp-builder/templates/rust/Cargo.toml 실행 스크립트와 패키지 경계`
- `.github/skills/mcp-builder/templates/ts/package.json 실행 스크립트와 패키지 경계`
- `.github/skills/pdf-markdown-validator/scripts/requirements.txt 실행 스크립트와 패키지 경계`
- `edgequake-website/package.json 실행 스크립트와 패키지 경계`

