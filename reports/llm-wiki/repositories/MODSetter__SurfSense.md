# MODSetter/SurfSense 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/MODSetter__SurfSense |
| remote | https://github.com/MODSetter/SurfSense |
| HEAD | 77688ac (2026-06-17) Merge pull request #1507 from AnishSarkar22/fix/documents-editor |
| branch | main |
| groups | llm-wiki-100 |
| files | 3520 |
| dirs | 786 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `SurfSense`, `Video Agent Sample`, `Podcast Agent Sample`, `How to Use SurfSense`, `Cloud`, `Self Hosted`, `Desktop App`, `How to Realtime Collaborate (Beta)`, `SurfSense vs Google NotebookLM`, `FEATURE REQUESTS AND FUTURE`, `Roadmap`, `Contribute`, `Star History`

> <a href="https //www.surfsense.com/" <img width="1584" height="396" alt="readme banner" src="https //github.com/user attachments/assets/9361ef58 1753 4b6e b275 5020d8847261" / </a <div align="center" <a href="https //discord.gg/ejRNvftDp9" <img src="https //img.shields.io/discord/1359368468260192417" alt="Discord" </a <a href="https //www.reddit.com/r/SurfSense/" <img src="https //img.shields.io/reddit/subreddit subscribers/SurfSense?style=social" alt="Reddit" </a </div <div align="center" English Español Português हिन्दी 简体中文 </div <div align="center" <a href="https //trendshift.io/repositories/13606" target=" blank" <img src="https //trendshift.io/api/badge/repositories/13606" alt="MODSetter%2FSurfSense Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </div SurfSense NotebookLM is one of the best and most useful AI platforms out there, but once you start using

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .cursor | dir |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .pre-commit-config.yaml | file |
| .recurseml.yaml | file |
| .rules | dir |
| .secrets.baseline | file |
| .vscode | dir |
| biome.json | file |
| CODE_OF_CONDUCT.md | file |
| CONTRIBUTING.md | file |
| docker | dir |
| docs | dir |
| LICENSE | file |
| manifest.json | file |
| package-lock.json | file |
| package.json | file |
| README.es.md | file |
| README.hi.md | file |
| README.md | file |
| README.pt-BR.md | file |
| README.zh-CN.md | file |
| scripts | dir |
| skills-lock.json | file |
| surfsense_backend | dir |
| surfsense_browser_extension | dir |
| surfsense_desktop | dir |
| surfsense_evals | dir |
| surfsense_obsidian | dir |
| surfsense_web | dir |
| VERSION | file |
| versions.json | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| surfsense_backend/ | 1805 |
| surfsense_web/ | 1175 |
| .cursor/ | 230 |
| surfsense_evals/ | 133 |
| surfsense_desktop/ | 55 |
| surfsense_browser_extension/ | 35 |
| surfsense_obsidian/ | 29 |
| (root) | 20 |
| .github/ | 15 |
| docker/ | 14 |
| .rules/ | 4 |
| .vscode/ | 2 |
| scripts/ | 2 |
| docs/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 1 | preferred |
| scripts/ | 2 | preferred |
| surfsense_backend/ | 1805 | large |
| surfsense_backend/app/ | 1240 | large |
| surfsense_web/ | 1175 | large |
| surfsense_backend/app/agents/ | 478 | large |
| surfsense_web/components/ | 465 | large |
| surfsense_backend/tests/ | 382 | large |
| surfsense_backend/tests/unit/ | 258 | large |
| .cursor/ | 230 | large |
| .cursor/skills/ | 230 | large |
| surfsense_backend/app/tasks/ | 179 | large |
| surfsense_backend/alembic/ | 164 | large |
| surfsense_backend/alembic/versions/ | 161 | large |
| surfsense_web/app/ | 160 | large |
| surfsense_evals/ | 133 | large |
| surfsense_web/public/ | 125 | large |
| surfsense_web/app/dashboard/ | 105 | large |
| surfsense_backend/app/services/ | 91 | large |
| surfsense_web/components/assistant-ui/ | 87 | large |
| surfsense_web/lib/ | 85 | large |
| surfsense_backend/app/automations/ | 80 | large |
| surfsense_evals/src/ | 79 | large |
| surfsense_evals/src/surfsense_evals/ | 79 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docker/docker-compose.yml`
- `package.json`
- `surfsense_backend/Dockerfile`
- `surfsense_backend/pyproject.toml`
- `surfsense_backend/scripts/whatsapp-bridge/Dockerfile`
- `surfsense_backend/scripts/whatsapp-bridge/package.json`
- `surfsense_backend/uv.lock`
- `surfsense_browser_extension/package.json`
- `surfsense_browser_extension/pnpm-lock.yaml`
- `surfsense_browser_extension/tsconfig.json`
- `surfsense_desktop/package.json`
- `surfsense_desktop/pnpm-lock.yaml`
- `surfsense_desktop/pnpm-workspace.yaml`
- `surfsense_desktop/tsconfig.json`
- `surfsense_evals/pyproject.toml`
- `surfsense_evals/uv.lock`
- `surfsense_obsidian/package.json`
- `surfsense_obsidian/tsconfig.json`
- `surfsense_web/Dockerfile`
- `surfsense_web/package.json`
- `surfsense_web/pnpm-lock.yaml`
- `surfsense_web/pnpm-workspace.yaml`
- `surfsense_web/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | surfsense |  |  |
| surfsense_backend/scripts/whatsapp-bridge/package.json | surfsense-whatsapp-bridge | start | @hapi/boom, @whiskeysockets/baileys, express, pino, qrcode-terminal |
| surfsense_browser_extension/package.json | surfsense_browser_extension | dev, build, package | @plasmohq/messaging, @plasmohq/storage, @radix-ui/react-dialog, @radix-ui/react-icons, @radix-ui/react-label, @radix-ui/react-popover, @radix-ui/react-slot, @radix-ui/react-toast, class-variance-authority, clsx, cmdk, dom-to-semantic-markdown, linkedom, lucide-react |
| surfsense_desktop/package.json | surfsense-desktop | dev, build, pack:dir, pack:dir:linux, dist, dist:mac, dist:win, dist:linux, typecheck, postinstall | bindings, chokidar, electron-store, electron-updater, get-port-please, node-mac-permissions, node-machine-id, posthog-node |
| surfsense_obsidian/package.json | surfsense-obsidian | dev, build, version, lint | obsidian |
| surfsense_web/package.json | surfsense_web | dev, dev:turbo, build, start, lint, format, debug, debug:browser, debug:server, postinstall, db:generate, db:migrate, db:push, db:studio, format:fix, test:e2e | @ai-sdk/react, @ariakit/react, @assistant-ui/react, @assistant-ui/react-markdown, @babel/standalone, @hookform/resolvers, @marsidev/react-turnstile, @microlink/react-json-view, @monaco-editor/react, @number-flow/react, @platejs/autoformat, @platejs/basic-nodes, @platejs/callout, @platejs/code-block |

### pyproject.toml

| 경로 | 이름 | poetry | uv | ruff | pytest |
| --- | --- | --- | --- | --- | --- |
| surfsense_backend/pyproject.toml | surf-new-backend | false | true | true | true |
| surfsense_evals/pyproject.toml | surfsense-evals | false | false | true | true |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.cursor/skills/vercel-react-best-practices/README.md`
- `.github/ISSUE_TEMPLATE/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `docs/chinese-llm-setup.md`
- `surfsense_backend/alembic/README`
- `surfsense_backend/tests/README.md`
- `surfsense_backend/tests/e2e/README.md`
- `surfsense_browser_extension/README.md`
- `surfsense_desktop/README.md`
- `surfsense_evals/README.md`
- `surfsense_obsidian/README.md`
- `surfsense_web/app/docs/[[...slug]]/loading.tsx`
- `surfsense_web/app/docs/[[...slug]]/page.tsx`
- `surfsense_web/app/docs/layout.tsx`
- `surfsense_web/app/docs/sidebar-separator.tsx`
- `surfsense_web/content/docs/code-of-conduct.mdx`
- `surfsense_web/content/docs/connectors/airtable.mdx`
- `surfsense_web/content/docs/connectors/baidu-search.mdx`
- `surfsense_web/content/docs/connectors/bookstack.mdx`
- `surfsense_web/content/docs/connectors/circleback.mdx`
- `surfsense_web/content/docs/connectors/clickup.mdx`
- `surfsense_web/content/docs/connectors/confluence.mdx`
- `surfsense_web/content/docs/connectors/discord.mdx`
- `surfsense_web/content/docs/connectors/dropbox.mdx`
- `surfsense_web/content/docs/connectors/elasticsearch.mdx`
- `surfsense_web/content/docs/connectors/github.mdx`
- `surfsense_web/content/docs/connectors/gmail.mdx`
- `surfsense_web/content/docs/connectors/google-calendar.mdx`
- `surfsense_web/content/docs/connectors/google-drive.mdx`
- `surfsense_web/content/docs/connectors/index.mdx`
- `surfsense_web/content/docs/connectors/jira.mdx`
- `surfsense_web/content/docs/connectors/linear.mdx`
- `surfsense_web/content/docs/connectors/luma.mdx`
- `surfsense_web/content/docs/connectors/meta.json`
- `surfsense_web/content/docs/connectors/microsoft-onedrive.mdx`
- `surfsense_web/content/docs/connectors/microsoft-teams.mdx`
- `surfsense_web/content/docs/connectors/notion.mdx`
- `surfsense_web/content/docs/connectors/obsidian.mdx`
- `surfsense_web/content/docs/connectors/slack.mdx`
- `surfsense_web/content/docs/connectors/web-crawler.mdx`
- `surfsense_web/content/docs/docker-installation/dev-compose.mdx`
- `surfsense_web/content/docs/docker-installation/docker-compose.mdx`
- `surfsense_web/content/docs/docker-installation/index.mdx`
- `surfsense_web/content/docs/docker-installation/install-script.mdx`
- `surfsense_web/content/docs/docker-installation/meta.json`
- `surfsense_web/content/docs/docker-installation/migrate-from-allinone.mdx`
- `surfsense_web/content/docs/docker-installation/updating.mdx`
- `surfsense_web/content/docs/how-to/index.mdx`
- `surfsense_web/content/docs/how-to/meta.json`
- ... 30 more

### 에이전트 지침 후보

- `.cursor/skills/alert-manager/SKILL.md`
- `.cursor/skills/alert-manager/references/alert-configuration-templates.md`
- `.cursor/skills/alert-manager/references/alert-threshold-guide.md`
- `.cursor/skills/backlink-analyzer/SKILL.md`
- `.cursor/skills/backlink-analyzer/references/analysis-templates.md`
- `.cursor/skills/backlink-analyzer/references/link-quality-rubric.md`
- `.cursor/skills/backlink-analyzer/references/outreach-templates.md`
- `.cursor/skills/competitor-analysis/SKILL.md`
- `.cursor/skills/competitor-analysis/references/analysis-templates.md`
- `.cursor/skills/competitor-analysis/references/battlecard-template.md`
- `.cursor/skills/competitor-analysis/references/example-report.md`
- `.cursor/skills/competitor-analysis/references/positioning-frameworks.md`
- `.cursor/skills/content-gap-analysis/SKILL.md`
- `.cursor/skills/content-gap-analysis/references/analysis-templates.md`
- `.cursor/skills/content-gap-analysis/references/example-report.md`
- `.cursor/skills/content-gap-analysis/references/gap-analysis-frameworks.md`
- `.cursor/skills/content-quality-auditor/SKILL.md`
- `.cursor/skills/content-quality-auditor/references/item-reference.md`
- `.cursor/skills/content-refresher/SKILL.md`
- `.cursor/skills/content-refresher/references/content-decay-signals.md`
- `.cursor/skills/content-refresher/references/refresh-example.md`
- `.cursor/skills/content-refresher/references/refresh-templates.md`
- `.cursor/skills/domain-authority-auditor/SKILL.md`
- `.cursor/skills/domain-authority-auditor/references/example-report.md`
- `.cursor/skills/entity-optimizer/SKILL.md`
- `.cursor/skills/entity-optimizer/references/entity-signal-checklist.md`
- `.cursor/skills/entity-optimizer/references/entity-type-reference.md`
- `.cursor/skills/entity-optimizer/references/example-audit-report.md`
- `.cursor/skills/entity-optimizer/references/knowledge-graph-guide.md`
- `.cursor/skills/entity-optimizer/references/knowledge-panel-wikidata-guide.md`
- `.cursor/skills/geo-content-optimizer/SKILL.md`
- `.cursor/skills/geo-content-optimizer/references/ai-citation-patterns.md`
- `.cursor/skills/geo-content-optimizer/references/geo-optimization-techniques.md`
- `.cursor/skills/geo-content-optimizer/references/quotable-content-examples.md`
- `.cursor/skills/improve-codebase-architecture/DEEPENING.md`
- `.cursor/skills/improve-codebase-architecture/INTERFACE-DESIGN.md`
- `.cursor/skills/improve-codebase-architecture/LANGUAGE.md`
- `.cursor/skills/improve-codebase-architecture/SKILL.md`
- `.cursor/skills/internal-linking-optimizer/SKILL.md`
- `.cursor/skills/internal-linking-optimizer/references/link-architecture-patterns.md`
- `.cursor/skills/internal-linking-optimizer/references/linking-example.md`
- `.cursor/skills/internal-linking-optimizer/references/linking-templates.md`
- `.cursor/skills/keyword-research/SKILL.md`
- `.cursor/skills/keyword-research/references/example-report.md`
- `.cursor/skills/keyword-research/references/keyword-intent-taxonomy.md`
- `.cursor/skills/keyword-research/references/keyword-prioritization-framework.md`
- `.cursor/skills/keyword-research/references/topic-cluster-templates.md`
- `.cursor/skills/memory-management/SKILL.md`
- `.cursor/skills/memory-management/references/examples.md`
- `.cursor/skills/memory-management/references/glossary-template.md`
- `.cursor/skills/memory-management/references/hot-cache-template.md`
- `.cursor/skills/memory-management/references/promotion-demotion-rules.md`
- `.cursor/skills/memory-management/references/update-triggers-integration.md`
- `.cursor/skills/meta-tags-optimizer/SKILL.md`
- `.cursor/skills/meta-tags-optimizer/references/ctr-and-social-reference.md`
- `.cursor/skills/meta-tags-optimizer/references/meta-tag-code-templates.md`
- `.cursor/skills/meta-tags-optimizer/references/meta-tag-formulas.md`
- `.cursor/skills/on-page-seo-auditor/SKILL.md`
- `.cursor/skills/on-page-seo-auditor/references/audit-example.md`
- `.cursor/skills/on-page-seo-auditor/references/audit-templates.md`
- `.cursor/skills/on-page-seo-auditor/references/scoring-rubric.md`
- `.cursor/skills/performance-reporter/SKILL.md`
- `.cursor/skills/performance-reporter/references/kpi-definitions.md`
- `.cursor/skills/performance-reporter/references/report-output-templates.md`
- `.cursor/skills/performance-reporter/references/report-templates.md`
- `.cursor/skills/playwright-testing/SKILL.md`
- `.cursor/skills/playwright-testing/advanced/authentication-flows.md`
- `.cursor/skills/playwright-testing/advanced/authentication.md`
- `.cursor/skills/playwright-testing/advanced/clock-mocking.md`
- `.cursor/skills/playwright-testing/advanced/mobile-testing.md`
- `.cursor/skills/playwright-testing/advanced/multi-context.md`
- `.cursor/skills/playwright-testing/advanced/multi-user.md`
- `.cursor/skills/playwright-testing/advanced/network-advanced.md`
- `.cursor/skills/playwright-testing/advanced/third-party.md`
- `.cursor/skills/playwright-testing/architecture/pom-vs-fixtures.md`
- `.cursor/skills/playwright-testing/architecture/test-architecture.md`
- `.cursor/skills/playwright-testing/architecture/when-to-mock.md`
- `.cursor/skills/playwright-testing/browser-apis/browser-apis.md`
- `.cursor/skills/playwright-testing/browser-apis/iframes.md`
- `.cursor/skills/playwright-testing/browser-apis/service-workers.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.cursor/skills/alert-manager/SKILL.md`
- `.cursor/skills/alert-manager/references/alert-configuration-templates.md`
- `.cursor/skills/alert-manager/references/alert-threshold-guide.md`
- `.cursor/skills/backlink-analyzer/SKILL.md`
- `.cursor/skills/backlink-analyzer/references/analysis-templates.md`
- `.cursor/skills/backlink-analyzer/references/link-quality-rubric.md`
- `.cursor/skills/backlink-analyzer/references/outreach-templates.md`
- `.cursor/skills/competitor-analysis/SKILL.md`
- `.cursor/skills/competitor-analysis/references/analysis-templates.md`
- `.cursor/skills/competitor-analysis/references/battlecard-template.md`
- `.cursor/skills/competitor-analysis/references/example-report.md`
- `.cursor/skills/competitor-analysis/references/positioning-frameworks.md`
- `.cursor/skills/content-gap-analysis/SKILL.md`
- `.cursor/skills/content-gap-analysis/references/analysis-templates.md`
- `.cursor/skills/content-gap-analysis/references/example-report.md`
- `.cursor/skills/content-gap-analysis/references/gap-analysis-frameworks.md`
- `.cursor/skills/content-quality-auditor/SKILL.md`
- `.cursor/skills/content-quality-auditor/references/item-reference.md`
- `.cursor/skills/content-refresher/SKILL.md`
- `.cursor/skills/content-refresher/references/content-decay-signals.md`
- `.cursor/skills/content-refresher/references/refresh-example.md`
- `.cursor/skills/content-refresher/references/refresh-templates.md`
- `.cursor/skills/domain-authority-auditor/SKILL.md`
- `.cursor/skills/domain-authority-auditor/references/example-report.md`
- `.cursor/skills/entity-optimizer/SKILL.md`
- `.cursor/skills/entity-optimizer/references/entity-signal-checklist.md`
- `.cursor/skills/entity-optimizer/references/entity-type-reference.md`
- `.cursor/skills/entity-optimizer/references/example-audit-report.md`
- `.cursor/skills/entity-optimizer/references/knowledge-graph-guide.md`
- `.cursor/skills/entity-optimizer/references/knowledge-panel-wikidata-guide.md`
- `.cursor/skills/geo-content-optimizer/SKILL.md`
- `.cursor/skills/geo-content-optimizer/references/ai-citation-patterns.md`
- `.cursor/skills/geo-content-optimizer/references/geo-optimization-techniques.md`
- `.cursor/skills/geo-content-optimizer/references/quotable-content-examples.md`
- `.cursor/skills/improve-codebase-architecture/DEEPENING.md`
- `.cursor/skills/improve-codebase-architecture/INTERFACE-DESIGN.md`
- `.cursor/skills/improve-codebase-architecture/LANGUAGE.md`
- `.cursor/skills/improve-codebase-architecture/SKILL.md`
- `.cursor/skills/internal-linking-optimizer/SKILL.md`
- `.cursor/skills/internal-linking-optimizer/references/link-architecture-patterns.md`
- `.cursor/skills/internal-linking-optimizer/references/linking-example.md`
- `.cursor/skills/internal-linking-optimizer/references/linking-templates.md`
- `.cursor/skills/keyword-research/SKILL.md`
- `.cursor/skills/keyword-research/references/example-report.md`
- `.cursor/skills/keyword-research/references/keyword-intent-taxonomy.md`
- `.cursor/skills/keyword-research/references/keyword-prioritization-framework.md`
- `.cursor/skills/keyword-research/references/topic-cluster-templates.md`
- `.cursor/skills/memory-management/SKILL.md`
- `.cursor/skills/memory-management/references/examples.md`
- `.cursor/skills/memory-management/references/glossary-template.md`
- `.cursor/skills/memory-management/references/hot-cache-template.md`
- `.cursor/skills/memory-management/references/promotion-demotion-rules.md`
- `.cursor/skills/memory-management/references/update-triggers-integration.md`
- `.cursor/skills/meta-tags-optimizer/SKILL.md`
- `.cursor/skills/meta-tags-optimizer/references/ctr-and-social-reference.md`
- `.cursor/skills/meta-tags-optimizer/references/meta-tag-code-templates.md`
- `.cursor/skills/meta-tags-optimizer/references/meta-tag-formulas.md`
- `.cursor/skills/on-page-seo-auditor/SKILL.md`
- `.cursor/skills/on-page-seo-auditor/references/audit-example.md`
- `.cursor/skills/on-page-seo-auditor/references/audit-templates.md`
- `.cursor/skills/on-page-seo-auditor/references/scoring-rubric.md`
- `.cursor/skills/performance-reporter/SKILL.md`
- `.cursor/skills/performance-reporter/references/kpi-definitions.md`
- `.cursor/skills/performance-reporter/references/report-output-templates.md`
- `.cursor/skills/performance-reporter/references/report-templates.md`
- `.cursor/skills/playwright-testing/SKILL.md`
- `.cursor/skills/playwright-testing/advanced/authentication-flows.md`
- `.cursor/skills/playwright-testing/advanced/authentication.md`
- `.cursor/skills/playwright-testing/advanced/clock-mocking.md`
- `.cursor/skills/playwright-testing/advanced/mobile-testing.md`
- `.cursor/skills/playwright-testing/advanced/multi-context.md`
- `.cursor/skills/playwright-testing/advanced/multi-user.md`
- `.cursor/skills/playwright-testing/advanced/network-advanced.md`
- `.cursor/skills/playwright-testing/advanced/third-party.md`
- `.cursor/skills/playwright-testing/architecture/pom-vs-fixtures.md`
- `.cursor/skills/playwright-testing/architecture/test-architecture.md`
- `.cursor/skills/playwright-testing/architecture/when-to-mock.md`
- `.cursor/skills/playwright-testing/browser-apis/browser-apis.md`
- `.cursor/skills/playwright-testing/browser-apis/iframes.md`
- `.cursor/skills/playwright-testing/browser-apis/service-workers.md`
- `.cursor/skills/playwright-testing/browser-apis/websockets.md`
- `.cursor/skills/playwright-testing/core/annotations.md`
- `.cursor/skills/playwright-testing/core/assertions-waiting.md`
- `.cursor/skills/playwright-testing/core/configuration.md`
- `.cursor/skills/playwright-testing/core/fixtures-hooks.md`
- `.cursor/skills/playwright-testing/core/global-setup.md`
- `.cursor/skills/playwright-testing/core/locators.md`
- `.cursor/skills/playwright-testing/core/page-object-model.md`
- `.cursor/skills/playwright-testing/core/projects-dependencies.md`
- `.cursor/skills/playwright-testing/core/test-data.md`
- `.cursor/skills/playwright-testing/core/test-suite-structure.md`
- `.cursor/skills/playwright-testing/core/test-tags.md`
- `.cursor/skills/playwright-testing/debugging/console-errors.md`
- `.cursor/skills/playwright-testing/debugging/debugging.md`
- `.cursor/skills/playwright-testing/debugging/error-testing.md`
- `.cursor/skills/playwright-testing/debugging/flaky-tests.md`
- `.cursor/skills/playwright-testing/frameworks/nextjs.md`
- `.cursor/skills/playwright-testing/frameworks/react.md`
- `.cursor/skills/playwright-testing/infrastructure-ci-cd/ci-cd.md`
- `.cursor/skills/playwright-testing/infrastructure-ci-cd/docker.md`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `surfsense_backend/tests/README.md`
- `surfsense_backend/tests/__init__.py`
- `surfsense_backend/tests/conftest.py`
- `surfsense_backend/tests/e2e/README.md`
- `surfsense_backend/tests/e2e/__init__.py`
- `surfsense_backend/tests/e2e/auth_mint.py`
- `surfsense_backend/tests/e2e/fakes/__init__.py`
- `surfsense_backend/tests/e2e/fakes/binary_loader.py`
- `surfsense_backend/tests/e2e/fakes/chat_llm.py`
- `surfsense_backend/tests/e2e/fakes/clickup_module.py`
- `surfsense_backend/tests/e2e/fakes/composio_module.py`
- `surfsense_backend/tests/e2e/fakes/confluence_indexer.py`
- `surfsense_backend/tests/e2e/fakes/confluence_oauth.py`
- `surfsense_backend/tests/e2e/fakes/docling_service.py`
- `surfsense_backend/tests/e2e/fakes/dropbox_api.py`
- `surfsense_backend/tests/e2e/fakes/embeddings.py`
- `surfsense_backend/tests/e2e/fakes/fixtures/binary/composio-drive-canary.pdf`
- `surfsense_backend/tests/e2e/fakes/fixtures/binary/drive-canary.pdf`
- `surfsense_backend/tests/e2e/fakes/fixtures/binary/dropbox-canary.pdf`
- `surfsense_backend/tests/e2e/fakes/fixtures/binary/generate_canary_pdfs.py`
- `surfsense_backend/tests/e2e/fakes/fixtures/binary/onedrive-canary.pdf`
- `surfsense_backend/tests/e2e/fakes/fixtures/calendar_events.json`
- `surfsense_backend/tests/e2e/fakes/fixtures/clickup_tasks.json`
- `surfsense_backend/tests/e2e/fakes/fixtures/confluence_pages.json`
- `surfsense_backend/tests/e2e/fakes/fixtures/drive_files.json`
- `surfsense_backend/tests/e2e/fakes/fixtures/dropbox_files.json`
- `surfsense_backend/tests/e2e/fakes/fixtures/gmail_messages.json`
- `surfsense_backend/tests/e2e/fakes/fixtures/jira_issues.json`
- `surfsense_backend/tests/e2e/fakes/fixtures/linear_issues.json`
- `surfsense_backend/tests/e2e/fakes/fixtures/notion_pages.json`
- `surfsense_backend/tests/e2e/fakes/fixtures/onedrive_files.json`
- `surfsense_backend/tests/e2e/fakes/fixtures/slack_messages.json`
- `surfsense_backend/tests/e2e/fakes/jira_module.py`
- `surfsense_backend/tests/e2e/fakes/linear_module.py`
- `surfsense_backend/tests/e2e/fakes/llm.py`
- `surfsense_backend/tests/e2e/fakes/mcp_oauth_runtime.py`
- `surfsense_backend/tests/e2e/fakes/mcp_runtime.py`
- `surfsense_backend/tests/e2e/fakes/native_google.py`
- `surfsense_backend/tests/e2e/fakes/notion_module.py`
- `surfsense_backend/tests/e2e/fakes/onedrive_graph.py`
- `surfsense_backend/tests/e2e/fakes/slack_module.py`
- `surfsense_backend/tests/e2e/fixtures/global_llm_config.yaml`
- `surfsense_backend/tests/e2e/middleware/__init__.py`
- `surfsense_backend/tests/e2e/middleware/scenario.py`
- `surfsense_backend/tests/e2e/run_backend.py`
- `surfsense_backend/tests/e2e/run_celery.py`
- `surfsense_backend/tests/fixtures/empty.pdf`
- `surfsense_backend/tests/fixtures/sample.md`
- `surfsense_backend/tests/fixtures/sample.pdf`
- `surfsense_backend/tests/fixtures/sample.txt`
- `surfsense_backend/tests/integration/__init__.py`
- `surfsense_backend/tests/integration/agents/multi_agent_chat/test_agent_turn.py`
- `surfsense_backend/tests/integration/agents/multi_agent_chat/test_kb_filesystem_cloud.py`
- `surfsense_backend/tests/integration/agents/multi_agent_chat/test_kb_filesystem_desktop.py`
- `surfsense_backend/tests/integration/chat/__init__.py`
- `surfsense_backend/tests/integration/chat/test_append_message_recovery.py`
- `surfsense_backend/tests/integration/chat/test_message_id_sse.py`
- `surfsense_backend/tests/integration/chat/test_persistence.py`
- `surfsense_backend/tests/integration/chat/test_thread_visibility.py`
- `surfsense_backend/tests/integration/composio/__init__.py`
- `surfsense_backend/tests/integration/composio/conftest.py`
- `surfsense_backend/tests/integration/composio/test_drive_folders_route.py`
- `surfsense_backend/tests/integration/composio/test_oauth_callback.py`
- `surfsense_backend/tests/integration/conftest.py`
- `surfsense_backend/tests/integration/document_upload/__init__.py`
- `surfsense_backend/tests/integration/document_upload/conftest.py`
- `surfsense_backend/tests/integration/document_upload/test_document_upload.py`
- `surfsense_backend/tests/integration/document_upload/test_etl_credits.py`
- `surfsense_backend/tests/integration/document_upload/test_stripe_credit_purchases.py`
- `surfsense_backend/tests/integration/document_upload/test_upload_limits.py`
- `surfsense_backend/tests/integration/google_unification/__init__.py`
- `surfsense_backend/tests/integration/google_unification/conftest.py`
- `surfsense_backend/tests/integration/google_unification/test_browse_includes_legacy_docs.py`
- `surfsense_backend/tests/integration/google_unification/test_calendar_indexer_credentials.py`
- `surfsense_backend/tests/integration/google_unification/test_drive_indexer_credentials.py`
- `surfsense_backend/tests/integration/google_unification/test_gmail_indexer_credentials.py`
- `surfsense_backend/tests/integration/google_unification/test_hybrid_search_type_filtering.py`
- `surfsense_backend/tests/integration/google_unification/test_search_includes_legacy_docs.py`
- `surfsense_backend/tests/integration/harness/__init__.py`
- `surfsense_backend/tests/integration/harness/test_scripted_harness.py`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/backend-tests.yml`
- `.github/workflows/code-quality.yml`
- `.github/workflows/desktop-release.yml`
- `.github/workflows/docker-build.yml`
- `.github/workflows/e2e-tests.yml`
- `.github/workflows/notary-status.yml`
- `.github/workflows/obsidian-plugin-lint.yml`
- `.github/workflows/release-obsidian-plugin.yml`
- `docker/docker-compose.deps-only.yml`
- `docker/docker-compose.dev.yml`
- `docker/docker-compose.e2e.yml`
- `docker/docker-compose.gpu.yml`
- `docker/docker-compose.yml`
- `surfsense_backend/Dockerfile`
- `surfsense_backend/scripts/whatsapp-bridge/Dockerfile`
- `surfsense_web/Dockerfile`
- `surfsense_web/content/docs/docker-installation/docker-compose.mdx`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .py | 1755 |
| .tsx | 554 |
| .ts | 424 |
| .md | 376 |
| .png | 76 |
| .mdx | 65 |
| .svg | 62 |
| .json | 54 |
| .gif | 20 |
| .yml | 18 |
| .mp4 | 15 |
| .yaml | 10 |
| .gitignore | 9 |
| .mjs | 7 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `surfsense_backend/ 내부 책임 분리`
- `surfsense_backend/app/ 내부 책임 분리`
- `surfsense_web/ 내부 책임 분리`
- `.cursor/skills/alert-manager/SKILL.md 스펙/명령 의미`
- `.cursor/skills/alert-manager/references/alert-configuration-templates.md 스펙/명령 의미`
- `.cursor/skills/alert-manager/references/alert-threshold-guide.md 스펙/명령 의미`
- `.cursor/skills/backlink-analyzer/SKILL.md 스펙/명령 의미`
- `.cursor/skills/backlink-analyzer/references/analysis-templates.md 스펙/명령 의미`
- `docker/docker-compose.yml 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`
- `surfsense_backend/Dockerfile 실행 스크립트와 패키지 경계`
- `surfsense_backend/pyproject.toml 실행 스크립트와 패키지 경계`
- `surfsense_backend/scripts/whatsapp-bridge/Dockerfile 실행 스크립트와 패키지 경계`

