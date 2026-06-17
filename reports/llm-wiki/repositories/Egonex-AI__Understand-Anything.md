# Egonex-AI/Understand-Anything 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/Egonex-AI__Understand-Anything |
| remote | https://github.com/Egonex-AI/Understand-Anything |
| HEAD | ba9ba1f (2026-06-16) Merge pull request #364 from smjeong84/feat/add-kiro-platform-support |
| branch | main |
| groups | llm-wiki-100 |
| files | 419 |
| dirs | 70 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `✨ Features`, `Explore the structural graph`, `Understand business logic`, `Analyze knowledge bases`, `🚀 Quick Start`, `1. Install the plugin`, `2. Analyze your codebase`, `Generate Chinese content (知识图节点描述和 Dashboard UI)`, `Supported languages: en (default), zh, zh-TW, ja, ko, ru`, `3. Explore the dashboard`, `4. Keep learning`, `Ask anything about the codebase`, `Analyze impact of your current changes`, `Deep-dive into a specific file or function`, `Generate an onboarding guide for new team members`, `Extract business domain knowledge (domains, flows, steps)`, `Analyze a Karpathy-pattern LLM wiki knowledge base`, `Re-run anytime — incremental by default (only re-analyzes changed files)`

> <h1 align="center" Understand Anything</h1 <p align="center" <strong Turn any codebase, knowledge base, or docs into an interactive knowledge graph you can explore, search, and ask questions about.</strong <br / <em Works with Claude Code, Codex, Cursor, Copilot, Gemini CLI, and more.</em </p <p align="center" <strong Understand Anything. <a href="https //egonex.ai" Understand Anyone.</a </strong <br / <em AI should help people, not replace them.</em </p <p align="center" <a href="https //trendshift.io/repositories/23482" target=" blank" <img src="https //trendshift.io/api/badge/repositories/23482" alt="Understand Anything Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </p <p align="center" <a href="README.md" English</a <a href="READMEs/README.zh CN.md" 简体中文</a <a href="READMEs/README.zh TW.md" 繁體中文</a <a href="READMEs/README.ja JP.md" 日本語</a <a href="READMEs

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude-plugin | dir |
| .copilot-plugin | dir |
| .cursor-plugin | dir |
| .github | dir |
| .gitignore | file |
| .npmrc | file |
| assets | dir |
| CLAUDE.md | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| docs | dir |
| eslint.config.mjs | file |
| homepage | dir |
| install.ps1 | file |
| install.sh | file |
| LICENSE | file |
| package.json | file |
| pnpm-lock.yaml | file |
| pnpm-workspace.yaml | file |
| README.md | file |
| READMEs | dir |
| scripts | dir |
| SECURITY.md | file |
| tests | dir |
| tsconfig.json | file |
| understand-anything-plugin | dir |
| vitest.config.ts | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| understand-anything-plugin/ | 309 |
| docs/ | 34 |
| homepage/ | 30 |
| (root) | 16 |
| tests/ | 9 |
| .github/ | 7 |
| READMEs/ | 7 |
| .claude-plugin/ | 2 |
| assets/ | 2 |
| .copilot-plugin/ | 1 |
| .cursor-plugin/ | 1 |
| scripts/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 34 | preferred |
| tests/ | 9 | preferred |
| scripts/ | 1 | preferred |
| understand-anything-plugin/ | 309 | large |
| understand-anything-plugin/packages/ | 222 | large |
| understand-anything-plugin/packages/core/ | 142 | large |
| understand-anything-plugin/packages/dashboard/ | 77 | large |
| understand-anything-plugin/skills/ | 57 | large |
| understand-anything-plugin/skills/understand/ | 47 | large |
| docs/superpowers/ | 34 | large |
| homepage/ | 30 | large |
| docs/superpowers/plans/ | 20 | large |
| docs/superpowers/specs/ | 14 | large |
| understand-anything-plugin/src/ | 13 | large |
| homepage/public/ | 12 | large |
| homepage/src/ | 11 | large |
| tests/skill/ | 9 | large |
| tests/skill/understand/ | 9 | large |
| understand-anything-plugin/agents/ | 9 | large |
| homepage/src/components/ | 8 | large |
| .github/ | 7 | large |
| READMEs/ | 7 | large |
| understand-anything-plugin/src/__tests__/ | 7 | large |
| .github/ISSUE_TEMPLATE/ | 4 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `homepage/package.json`
- `homepage/tsconfig.json`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `tsconfig.json`
- `understand-anything-plugin/package.json`
- `understand-anything-plugin/packages/core/package.json`
- `understand-anything-plugin/packages/core/tsconfig.json`
- `understand-anything-plugin/packages/dashboard/package.json`
- `understand-anything-plugin/packages/dashboard/tsconfig.json`
- `understand-anything-plugin/packages/dashboard/vite.config.ts`
- `understand-anything-plugin/packages/tree-sitter-dart-wasm/package.json`
- `understand-anything-plugin/pnpm-lock.yaml`
- `understand-anything-plugin/pnpm-workspace.yaml`
- `understand-anything-plugin/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| homepage/package.json | homepage | dev, build, preview, astro | astro |
| package.json | understand-anything | prepare, build, test, dev:dashboard, lint |  |
| understand-anything-plugin/package.json | @understand-anything/skill | build, test | @understand-anything/core, graphology, graphology-communities-louvain |
| understand-anything-plugin/packages/core/package.json | @understand-anything/core | build, test | @tree-sitter-grammars/tree-sitter-kotlin, @understand-anything/tree-sitter-dart-wasm, fuse.js, ignore, tree-sitter-c-sharp, tree-sitter-cpp, tree-sitter-go, tree-sitter-java, tree-sitter-javascript, tree-sitter-php, tree-sitter-python, tree-sitter-ruby, tree-sitter-rust, tree-sitter-typescript |
| understand-anything-plugin/packages/dashboard/package.json | @understand-anything/dashboard | dev, build, build:demo, preview, test, test:watch | @dagrejs/dagre, @understand-anything/core, @xyflow/react, d3-force, devlop, elkjs, graphology, graphology-communities-louvain, graphology-types, hast-util-to-jsx-runtime, prism-react-renderer, react, react-dom, react-markdown |
| understand-anything-plugin/packages/tree-sitter-dart-wasm/package.json | @understand-anything/tree-sitter-dart-wasm |  |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/superpowers/plans/2026-03-14-phase1-implementation.md`
- `docs/superpowers/plans/2026-03-14-phase2-implementation.md`
- `docs/superpowers/plans/2026-03-14-phase3-implementation.md`
- `docs/superpowers/plans/2026-03-14-phase4-implementation.md`
- `docs/superpowers/plans/2026-03-15-homepage-implementation.md`
- `docs/superpowers/plans/2026-03-18-multi-platform-simple-implementation.md`
- `docs/superpowers/plans/2026-03-21-language-agnostic-plan.md`
- `docs/superpowers/plans/2026-03-25-dashboard-robustness-impl.md`
- `docs/superpowers/plans/2026-03-25-dashboard-robustness-plan.md`
- `docs/superpowers/plans/2026-03-26-theme-system-implementation.md`
- `docs/superpowers/plans/2026-03-27-token-reduction-impl.md`
- `docs/superpowers/plans/2026-03-28-understand-anything-extension-impl.md`
- `docs/superpowers/plans/2026-03-29-homepage-update-impl.md`
- `docs/superpowers/plans/2026-04-01-business-domain-knowledge-impl.md`
- `docs/superpowers/plans/2026-04-09-understand-knowledge.md`
- `docs/superpowers/plans/2026-04-10-understandignore-impl.md`
- `docs/superpowers/plans/2026-04-15-language-extractors-impl.md`
- `docs/superpowers/plans/2026-05-03-graph-layout-scaling.md`
- `docs/superpowers/plans/2026-05-24-semantic-batching-and-output-chunking-impl.md`
- `docs/superpowers/plans/2026-06-03-language-auto-detection.md`
- `docs/superpowers/specs/2026-03-14-understand-anything-design.md`
- `docs/superpowers/specs/2026-03-15-homepage-design.md`
- `docs/superpowers/specs/2026-03-18-multi-platform-simple-design.md`
- `docs/superpowers/specs/2026-03-21-language-agnostic-design.md`
- `docs/superpowers/specs/2026-03-26-theme-system-design.md`
- `docs/superpowers/specs/2026-03-27-token-reduction-design.md`
- `docs/superpowers/specs/2026-03-28-understand-anything-extension-design.md`
- `docs/superpowers/specs/2026-03-29-homepage-update-design.md`
- `docs/superpowers/specs/2026-04-01-business-domain-knowledge-design.md`
- `docs/superpowers/specs/2026-04-09-understand-knowledge-design.md`
- `docs/superpowers/specs/2026-04-10-understandignore-design.md`
- `docs/superpowers/specs/2026-05-03-graph-layout-scaling-design.md`
- `docs/superpowers/specs/2026-05-24-semantic-batching-and-output-chunking-design.md`
- `docs/superpowers/specs/2026-06-03-language-auto-detection-design.md`
- `homepage/README.md`

### 에이전트 지침 후보

- `CLAUDE.md`
- `tests/skill/understand/fixtures/scan-result-3-cliques.json`
- `tests/skill/understand/fixtures/scan-result-large-community.json`
- `tests/skill/understand/fixtures/scan-result-merge-respects-non-mergeable.json`
- `tests/skill/understand/fixtures/scan-result-non-code.json`
- `tests/skill/understand/fixtures/scan-result-singletons.json`
- `tests/skill/understand/test_compute_batches.test.mjs`
- `tests/skill/understand/test_extract_import_map.test.mjs`
- `tests/skill/understand/test_merge_batch_graphs.py`
- `tests/skill/understand/test_scan_project.test.mjs`
- `understand-anything-plugin/skills/understand-chat/SKILL.md`
- `understand-anything-plugin/skills/understand-dashboard/SKILL.md`
- `understand-anything-plugin/skills/understand-diff/SKILL.md`
- `understand-anything-plugin/skills/understand-domain/SKILL.md`
- `understand-anything-plugin/skills/understand-domain/extract-domain-context.py`
- `understand-anything-plugin/skills/understand-explain/SKILL.md`
- `understand-anything-plugin/skills/understand-knowledge/SKILL.md`
- `understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py`
- `understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py`
- `understand-anything-plugin/skills/understand-onboard/SKILL.md`
- `understand-anything-plugin/skills/understand/SKILL.md`
- `understand-anything-plugin/skills/understand/build-fingerprints.mjs`
- `understand-anything-plugin/skills/understand/compute-batches.mjs`
- `understand-anything-plugin/skills/understand/extract-import-map.mjs`
- `understand-anything-plugin/skills/understand/extract-structure.mjs`
- `understand-anything-plugin/skills/understand/frameworks/django.md`
- `understand-anything-plugin/skills/understand/frameworks/express.md`
- `understand-anything-plugin/skills/understand/frameworks/fastapi.md`
- `understand-anything-plugin/skills/understand/frameworks/flask.md`
- `understand-anything-plugin/skills/understand/frameworks/gin.md`
- `understand-anything-plugin/skills/understand/frameworks/nextjs.md`
- `understand-anything-plugin/skills/understand/frameworks/rails.md`
- `understand-anything-plugin/skills/understand/frameworks/react.md`
- `understand-anything-plugin/skills/understand/frameworks/spring.md`
- `understand-anything-plugin/skills/understand/frameworks/vue.md`
- `understand-anything-plugin/skills/understand/languages/cpp.md`
- `understand-anything-plugin/skills/understand/languages/csharp.md`
- `understand-anything-plugin/skills/understand/languages/css.md`
- `understand-anything-plugin/skills/understand/languages/dockerfile.md`
- `understand-anything-plugin/skills/understand/languages/go.md`
- `understand-anything-plugin/skills/understand/languages/graphql.md`
- `understand-anything-plugin/skills/understand/languages/html.md`
- `understand-anything-plugin/skills/understand/languages/java.md`
- `understand-anything-plugin/skills/understand/languages/javascript.md`
- `understand-anything-plugin/skills/understand/languages/json.md`
- `understand-anything-plugin/skills/understand/languages/kotlin.md`
- `understand-anything-plugin/skills/understand/languages/markdown.md`
- `understand-anything-plugin/skills/understand/languages/php.md`
- `understand-anything-plugin/skills/understand/languages/protobuf.md`
- `understand-anything-plugin/skills/understand/languages/python.md`
- `understand-anything-plugin/skills/understand/languages/ruby.md`
- `understand-anything-plugin/skills/understand/languages/rust.md`
- `understand-anything-plugin/skills/understand/languages/shell.md`
- `understand-anything-plugin/skills/understand/languages/sql.md`
- `understand-anything-plugin/skills/understand/languages/swift.md`
- `understand-anything-plugin/skills/understand/languages/terraform.md`
- `understand-anything-plugin/skills/understand/languages/typescript.md`
- `understand-anything-plugin/skills/understand/languages/yaml.md`
- `understand-anything-plugin/skills/understand/locales/en.md`
- `understand-anything-plugin/skills/understand/locales/ja.md`
- `understand-anything-plugin/skills/understand/locales/ko.md`
- `understand-anything-plugin/skills/understand/locales/ru.md`
- `understand-anything-plugin/skills/understand/locales/zh-TW.md`
- `understand-anything-plugin/skills/understand/locales/zh.md`
- `understand-anything-plugin/skills/understand/merge-batch-graphs.py`
- `understand-anything-plugin/skills/understand/merge-subdomain-graphs.py`
- `understand-anything-plugin/skills/understand/scan-project.mjs`

### 스펙/템플릿/명령/스킬 후보

- `docs/superpowers/specs/2026-03-14-understand-anything-design.md`
- `docs/superpowers/specs/2026-03-15-homepage-design.md`
- `docs/superpowers/specs/2026-03-18-multi-platform-simple-design.md`
- `docs/superpowers/specs/2026-03-21-language-agnostic-design.md`
- `docs/superpowers/specs/2026-03-26-theme-system-design.md`
- `docs/superpowers/specs/2026-03-27-token-reduction-design.md`
- `docs/superpowers/specs/2026-03-28-understand-anything-extension-design.md`
- `docs/superpowers/specs/2026-03-29-homepage-update-design.md`
- `docs/superpowers/specs/2026-04-01-business-domain-knowledge-design.md`
- `docs/superpowers/specs/2026-04-09-understand-knowledge-design.md`
- `docs/superpowers/specs/2026-04-10-understandignore-design.md`
- `docs/superpowers/specs/2026-05-03-graph-layout-scaling-design.md`
- `docs/superpowers/specs/2026-05-24-semantic-batching-and-output-chunking-design.md`
- `docs/superpowers/specs/2026-06-03-language-auto-detection-design.md`
- `understand-anything-plugin/skills/understand-chat/SKILL.md`
- `understand-anything-plugin/skills/understand-dashboard/SKILL.md`
- `understand-anything-plugin/skills/understand-diff/SKILL.md`
- `understand-anything-plugin/skills/understand-domain/SKILL.md`
- `understand-anything-plugin/skills/understand-domain/extract-domain-context.py`
- `understand-anything-plugin/skills/understand-explain/SKILL.md`
- `understand-anything-plugin/skills/understand-knowledge/SKILL.md`
- `understand-anything-plugin/skills/understand-knowledge/merge-knowledge-graph.py`
- `understand-anything-plugin/skills/understand-knowledge/parse-knowledge-base.py`
- `understand-anything-plugin/skills/understand-onboard/SKILL.md`
- `understand-anything-plugin/skills/understand/SKILL.md`
- `understand-anything-plugin/skills/understand/build-fingerprints.mjs`
- `understand-anything-plugin/skills/understand/compute-batches.mjs`
- `understand-anything-plugin/skills/understand/extract-import-map.mjs`
- `understand-anything-plugin/skills/understand/extract-structure.mjs`
- `understand-anything-plugin/skills/understand/frameworks/django.md`
- `understand-anything-plugin/skills/understand/frameworks/express.md`
- `understand-anything-plugin/skills/understand/frameworks/fastapi.md`
- `understand-anything-plugin/skills/understand/frameworks/flask.md`
- `understand-anything-plugin/skills/understand/frameworks/gin.md`
- `understand-anything-plugin/skills/understand/frameworks/nextjs.md`
- `understand-anything-plugin/skills/understand/frameworks/rails.md`
- `understand-anything-plugin/skills/understand/frameworks/react.md`
- `understand-anything-plugin/skills/understand/frameworks/spring.md`
- `understand-anything-plugin/skills/understand/frameworks/vue.md`
- `understand-anything-plugin/skills/understand/languages/cpp.md`
- `understand-anything-plugin/skills/understand/languages/csharp.md`
- `understand-anything-plugin/skills/understand/languages/css.md`
- `understand-anything-plugin/skills/understand/languages/dockerfile.md`
- `understand-anything-plugin/skills/understand/languages/go.md`
- `understand-anything-plugin/skills/understand/languages/graphql.md`
- `understand-anything-plugin/skills/understand/languages/html.md`
- `understand-anything-plugin/skills/understand/languages/java.md`
- `understand-anything-plugin/skills/understand/languages/javascript.md`
- `understand-anything-plugin/skills/understand/languages/json.md`
- `understand-anything-plugin/skills/understand/languages/kotlin.md`
- `understand-anything-plugin/skills/understand/languages/markdown.md`
- `understand-anything-plugin/skills/understand/languages/php.md`
- `understand-anything-plugin/skills/understand/languages/protobuf.md`
- `understand-anything-plugin/skills/understand/languages/python.md`
- `understand-anything-plugin/skills/understand/languages/ruby.md`
- `understand-anything-plugin/skills/understand/languages/rust.md`
- `understand-anything-plugin/skills/understand/languages/shell.md`
- `understand-anything-plugin/skills/understand/languages/sql.md`
- `understand-anything-plugin/skills/understand/languages/swift.md`
- `understand-anything-plugin/skills/understand/languages/terraform.md`
- `understand-anything-plugin/skills/understand/languages/typescript.md`
- `understand-anything-plugin/skills/understand/languages/yaml.md`
- `understand-anything-plugin/skills/understand/locales/en.md`
- `understand-anything-plugin/skills/understand/locales/ja.md`
- `understand-anything-plugin/skills/understand/locales/ko.md`
- `understand-anything-plugin/skills/understand/locales/ru.md`
- `understand-anything-plugin/skills/understand/locales/zh-TW.md`
- `understand-anything-plugin/skills/understand/locales/zh.md`
- `understand-anything-plugin/skills/understand/merge-batch-graphs.py`
- `understand-anything-plugin/skills/understand/merge-subdomain-graphs.py`
- `understand-anything-plugin/skills/understand/scan-project.mjs`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `tests/skill/understand/fixtures/scan-result-3-cliques.json`
- `tests/skill/understand/fixtures/scan-result-large-community.json`
- `tests/skill/understand/fixtures/scan-result-merge-respects-non-mergeable.json`
- `tests/skill/understand/fixtures/scan-result-non-code.json`
- `tests/skill/understand/fixtures/scan-result-singletons.json`
- `tests/skill/understand/test_compute_batches.test.mjs`
- `tests/skill/understand/test_extract_import_map.test.mjs`
- `tests/skill/understand/test_merge_batch_graphs.py`
- `tests/skill/understand/test_scan_project.test.mjs`
- `understand-anything-plugin/packages/core/src/__tests__/change-classifier.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/domain-normalize.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/domain-persistence.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/domain-types.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/embedding-search.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/fingerprint.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/framework-registry.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/ignore-filter.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/ignore-generator.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/language-lesson.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/language-registry.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/layer-detector.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/normalize-graph.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/parsers.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/plugin-discovery.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/plugin-registry.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/schema.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/search.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/staleness.test.ts`
- `understand-anything-plugin/packages/core/src/__tests__/tour-generator.test.ts`
- `understand-anything-plugin/packages/core/src/analyzer/graph-builder.test.ts`
- `understand-anything-plugin/packages/core/src/analyzer/llm-analyzer.test.ts`
- `understand-anything-plugin/packages/core/src/persistence/persistence.test.ts`
- `understand-anything-plugin/packages/core/src/plugins/extractors/__tests__/cpp-extractor.test.ts`
- `understand-anything-plugin/packages/core/src/plugins/extractors/__tests__/csharp-extractor.test.ts`
- `understand-anything-plugin/packages/core/src/plugins/extractors/__tests__/dart-extractor.test.ts`
- `understand-anything-plugin/packages/core/src/plugins/extractors/__tests__/go-extractor.test.ts`
- `understand-anything-plugin/packages/core/src/plugins/extractors/__tests__/java-extractor.test.ts`
- `understand-anything-plugin/packages/core/src/plugins/extractors/__tests__/kotlin-extractor.test.ts`
- `understand-anything-plugin/packages/core/src/plugins/extractors/__tests__/php-extractor.test.ts`
- `understand-anything-plugin/packages/core/src/plugins/extractors/__tests__/python-extractor.test.ts`
- `understand-anything-plugin/packages/core/src/plugins/extractors/__tests__/ruby-extractor.test.ts`
- `understand-anything-plugin/packages/core/src/plugins/extractors/__tests__/rust-extractor.test.ts`
- `understand-anything-plugin/packages/core/src/plugins/tree-sitter-plugin.test.ts`
- `understand-anything-plugin/packages/core/src/types.test.ts`
- `understand-anything-plugin/packages/dashboard/src/utils/__tests__/containers.test.ts`
- `understand-anything-plugin/packages/dashboard/src/utils/__tests__/edgeAggregation.test.ts`
- `understand-anything-plugin/packages/dashboard/src/utils/__tests__/elk-layout.test.ts`
- `understand-anything-plugin/packages/dashboard/src/utils/__tests__/filters.test.ts`
- `understand-anything-plugin/packages/dashboard/src/utils/__tests__/layerStats.test.ts`
- `understand-anything-plugin/packages/dashboard/src/utils/__tests__/smoke.test.ts`
- `understand-anything-plugin/src/__tests__/context-builder.test.ts`
- `understand-anything-plugin/src/__tests__/diff-analyzer.test.ts`
- `understand-anything-plugin/src/__tests__/explain-builder.test.ts`
- `understand-anything-plugin/src/__tests__/onboard-builder.test.ts`

### CI/Docker 후보

- `.github/workflows/ci.yml`
- `.github/workflows/deploy-homepage.yml`
- `understand-anything-plugin/packages/core/src/languages/configs/docker-compose.ts`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .ts | 183 |
| .md | 106 |
| .tsx | 36 |
| .json | 26 |
| .mjs | 16 |
| .astro | 10 |
| .py | 6 |
| .yml | 6 |
| .woff2 | 4 |
| .yaml | 4 |
| .png | 3 |
| .css | 2 |
| .gif | 2 |
| .gitignore | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `tests/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `understand-anything-plugin/ 내부 책임 분리`
- `understand-anything-plugin/packages/ 내부 책임 분리`
- `docs/superpowers/specs/2026-03-14-understand-anything-design.md 스펙/명령 의미`
- `docs/superpowers/specs/2026-03-15-homepage-design.md 스펙/명령 의미`
- `docs/superpowers/specs/2026-03-18-multi-platform-simple-design.md 스펙/명령 의미`
- `docs/superpowers/specs/2026-03-21-language-agnostic-design.md 스펙/명령 의미`
- `docs/superpowers/specs/2026-03-26-theme-system-design.md 스펙/명령 의미`
- `homepage/package.json 실행 스크립트와 패키지 경계`
- `homepage/tsconfig.json 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`
- `pnpm-lock.yaml 실행 스크립트와 패키지 경계`
- `pnpm-workspace.yaml 실행 스크립트와 패키지 경계`

