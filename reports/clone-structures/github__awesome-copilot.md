# github/awesome-copilot 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/github__awesome-copilot |
| remote | https://github.com/github/awesome-copilot.git |
| HEAD | 0aca2d9 (2026-06-17) chore: publish from staged |
| branch | main |
| groups | previous-clone-inventory-107 |
| files | 2566 |
| dirs | 1133 |
| stack | Node/TypeScript/JavaScript, Python |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `🤖 Awesome GitHub Copilot`, `📖 Learning Hub`, `What's in this repo`, `🛠️ Tools`, `Install a Plugin`, `Contributing`, `Contributors ✨`, `📚 Additional Resources`, `™️ Trademarks`

> 🤖 Awesome GitHub Copilot A community created collection of custom agents, instructions, skills, hooks, workflows, and plugins to supercharge your GitHub Copilot experience. [!TIP] Explore the full collection on the website → awesome copilot.github.com The website offers full text search and filtering across hundreds of resources, plus the Tools section for MCP servers and developer tooling, and the Learning Hub for guides and tutorials. Using this collection in an AI agent? A machine readable llms.txt is available with structured listings of all agents, instructions, and skills. 📖 Learning Hub New to GitHub Copilot customization? The Learning Hub on the website offers curated articles, walkthroughs, and reference material — covering everything from core concepts like agents, skills, and instructions to hands on guides for hooks, agentic workflows, MCP servers, and the Copilot coding ag

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .all-contributorsrc | file |
| .codespellrc | file |
| .editorconfig | file |
| .gitattributes | file |
| .github | dir |
| .gitignore | file |
| .schemas | dir |
| .vscode | dir |
| agents | dir |
| AGENTS.md | file |
| CODE_OF_CONDUCT.md | file |
| CODEOWNERS | file |
| context7.json | file |
| CONTRIBUTING.md | file |
| cookbook | dir |
| docs | dir |
| eng | dir |
| extensions | dir |
| hooks | dir |
| instructions | dir |
| LICENSE | file |
| package-lock.json | file |
| package.json | file |
| plugins | dir |
| README.md | file |
| SECURITY.md | file |
| skills | dir |
| SUPPORT.md | file |
| website | dir |
| workflows | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| skills/ | 1001 |
| plugins/ | 577 |
| agents/ | 217 |
| instructions/ | 189 |
| extensions/ | 181 |
| website/ | 174 |
| cookbook/ | 90 |
| .github/ | 50 |
| eng/ | 27 |
| hooks/ | 22 |
| (root) | 16 |
| workflows/ | 8 |
| docs/ | 7 |
| .vscode/ | 4 |
| .schemas/ | 3 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 7 | preferred |
| skills/ | 1001 | preferred |
| agents/ | 217 | preferred |
| extensions/ | 181 | preferred |
| plugins/ | 577 | preferred |
| instructions/ | 189 | large |
| website/ | 174 | large |
| extensions/arcade-canvas/ | 126 | large |
| extensions/arcade-canvas/assets/ | 110 | large |
| cookbook/ | 90 | large |
| cookbook/copilot-sdk/ | 88 | large |
| website/public/ | 88 | large |
| website/public/images/ | 86 | large |
| website/src/ | 80 | large |
| plugins/phoenix/ | 72 | large |
| plugins/phoenix/skills/ | 70 | large |
| .github/ | 50 | large |
| .github/workflows/ | 41 | large |
| skills/phoenix-evals/ | 35 | large |
| skills/phoenix-evals/references/ | 34 | large |
| plugins/react18-upgrade/ | 32 | large |
| skills/phoenix-tracing/ | 32 | large |
| skills/quality-playbook/ | 31 | large |
| skills/phoenix-tracing/references/ | 30 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `.github/extensions/external-plugins-board/package.json`
- `cookbook/copilot-sdk/nodejs/recipe/package.json`
- `cookbook/copilot-sdk/python/recipe/requirements.txt`
- `extensions/accessibility-kanban/package.json`
- `extensions/arcade-canvas/package.json`
- `extensions/backlog-swipe-triage/package.json`
- `extensions/chromium-control-canvas/package.json`
- `extensions/color-orb/package.json`
- `extensions/diagram-viewer/package.json`
- `extensions/feedback-themes/package.json`
- `extensions/gesture-review/package.json`
- `extensions/release-notes-showcase/package.json`
- `extensions/where-was-i/package.json`
- `package.json`
- `plugins/project-documenter/skills/drawio/scripts/package.json`
- `plugins/project-documenter/skills/md-to-docx/scripts/package.json`
- `skills/drawio/scripts/package.json`
- `skills/md-to-docx/scripts/package.json`
- `website/package.json`
- `website/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| .github/extensions/external-plugins-board/package.json | external-plugins-board |  | marked |
| cookbook/copilot-sdk/nodejs/recipe/package.json | copilot-sdk-cookbook-recipes | error-handling, multiple-sessions, managing-local-files, pr-visualization, persisting-sessions, accessibility-report | @github/copilot-sdk |
| extensions/accessibility-kanban/package.json | accessibility-kanban |  | @github/copilot-sdk |
| extensions/arcade-canvas/package.json | arcade-canvas |  | @github/copilot-sdk |
| extensions/backlog-swipe-triage/package.json | backlog-swipe-triage |  | @github/copilot-sdk |
| extensions/chromium-control-canvas/package.json | chromium-control-canvas |  | @github/copilot-sdk, playwright |
| extensions/color-orb/package.json | color-orb |  | @github/copilot-sdk |
| extensions/diagram-viewer/package.json | diagram-viewer |  | @github/copilot-sdk |
| extensions/feedback-themes/package.json | feedback-themes |  | @github/copilot-sdk |
| extensions/gesture-review/package.json | gesture-review |  | @github/copilot-sdk |
| extensions/release-notes-showcase/package.json | release-notes-showcase |  | @github/copilot-sdk |
| extensions/where-was-i/package.json | where-was-i |  | @github/copilot-sdk |
| package.json | awesome-copilot | start, build, contributors:add, contributors:report, contributors:generate, contributors:check, plugin:validate, plugin:create, skill:validate, skill:create, plugin:clean, plugin:generate-marketplace, website:data, website:dev, website:build, website:preview | js-yaml, vfile, vfile-matter |
| plugins/project-documenter/skills/drawio/scripts/package.json |  |  | puppeteer-core |
| plugins/project-documenter/skills/md-to-docx/scripts/package.json |  |  | docx, marked |
| skills/drawio/scripts/package.json |  |  | puppeteer-core |
| skills/md-to-docx/scripts/package.json |  |  | docx, marked |
| website/package.json | awesome-copilot-website | dev, build, preview, astro | @astrojs/sitemap, @astrojs/starlight, astro, choices.js, front-matter, gray-matter, jszip, marked, shiki |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `cookbook/README.md`
- `cookbook/copilot-sdk/README.md`
- `cookbook/copilot-sdk/dotnet/README.md`
- `cookbook/copilot-sdk/dotnet/recipe/README.md`
- `cookbook/copilot-sdk/go/README.md`
- `cookbook/copilot-sdk/go/recipe/README.md`
- `cookbook/copilot-sdk/java/README.md`
- `cookbook/copilot-sdk/java/recipe/README.md`
- `cookbook/copilot-sdk/nodejs/README.md`
- `cookbook/copilot-sdk/nodejs/recipe/README.md`
- `cookbook/copilot-sdk/python/README.md`
- `cookbook/copilot-sdk/python/recipe/README.md`
- `docs/.gitkeep`
- `docs/README.agents.md`
- `docs/README.hooks.md`
- `docs/README.instructions.md`
- `docs/README.plugins.md`
- `docs/README.skills.md`
- `docs/README.workflows.md`
- `eng/README.md`
- `extensions/arcade-canvas/README.md`
- `extensions/backlog-swipe-triage/README.md`
- `extensions/chromium-control-canvas/README.md`
- `extensions/release-notes-showcase/README.md`
- `hooks/dependency-license-checker/README.md`
- `hooks/governance-audit/README.md`
- `hooks/secrets-scanner/README.md`
- `hooks/session-auto-commit/README.md`
- `hooks/session-logger/README.md`
- `hooks/tool-guardian/README.md`
- `plugins/acreadiness-cockpit/README.md`
- `plugins/ai-team-orchestration/README.md`
- `plugins/arize-ax/README.md`
- `plugins/automate-this/README.md`
- `plugins/awesome-copilot/README.md`
- `plugins/aws-cloud-development/README.md`
- `plugins/azure-cloud-development/README.md`
- `plugins/cast-imaging/README.md`
- `plugins/clojure-interactive-programming/README.md`
- `plugins/cms-development/README.md`
- `plugins/context-engineering/README.md`
- `plugins/context-matic/README.md`
- `plugins/copilot-sdk/README.md`
- `plugins/csharp-dotnet-development/README.md`
- `plugins/database-data-management/README.md`
- `plugins/dataverse-sdk-for-python/README.md`
- `plugins/devops-oncall/README.md`
- `plugins/doublecheck/README.md`
- ... 30 more

### 에이전트 지침 후보

- `.github/copilot-instructions.md`
- `.github/workflows/skill-check-comment.yml`
- `.github/workflows/skill-check.yml`
- `.github/workflows/skill-quality-report.yml`
- `.vscode/mcp.json`
- `AGENTS.md`
- `agents/csharp-mcp-expert.agent.md`
- `agents/gem-skill-creator.agent.md`
- `agents/go-mcp-expert.agent.md`
- `agents/java-mcp-expert.agent.md`
- `agents/kotlin-mcp-expert.agent.md`
- `agents/mcp-m365-agent-expert.agent.md`
- `agents/octopus-deploy-release-notes-mcp.agent.md`
- `agents/php-mcp-expert.agent.md`
- `agents/power-platform-mcp-integration-expert.agent.md`
- `agents/python-mcp-expert.agent.md`
- `agents/ruby-mcp-expert.agent.md`
- `agents/rust-mcp-expert.agent.md`
- `agents/swift-mcp-expert.agent.md`
- `agents/typescript-mcp-expert.agent.md`
- `docs/README.skills.md`
- `eng/create-skill.mjs`
- `eng/validate-skills.mjs`
- `instructions/agent-skills.instructions.md`
- `instructions/csharp-mcp-server.instructions.md`
- `instructions/go-mcp-server.instructions.md`
- `instructions/java-mcp-server.instructions.md`
- `instructions/kotlin-mcp-server.instructions.md`
- `instructions/mcp-m365-copilot.instructions.md`
- `instructions/php-mcp-server.instructions.md`
- `instructions/power-platform-mcp-development.instructions.md`
- `instructions/python-mcp-server.instructions.md`
- `instructions/quarkus-mcp-server-sse.instructions.md`
- `instructions/ruby-mcp-server.instructions.md`
- `instructions/rust-mcp-server.instructions.md`
- `instructions/swift-mcp-server.instructions.md`
- `instructions/typescript-mcp-server.instructions.md`
- `plugins/acreadiness-cockpit/skills/acreadiness-assess/SKILL.md`
- `plugins/acreadiness-cockpit/skills/acreadiness-assess/report-template.html`
- `plugins/acreadiness-cockpit/skills/acreadiness-generate-instructions/SKILL.md`
- `plugins/acreadiness-cockpit/skills/acreadiness-policy/SKILL.md`
- `plugins/ai-team-orchestration/skills/ai-team-orchestration/SKILL.md`
- `plugins/ai-team-orchestration/skills/ai-team-orchestration/references/anti-patterns.md`
- `plugins/ai-team-orchestration/skills/ai-team-orchestration/references/brainstorm-format.md`
- `plugins/ai-team-orchestration/skills/ai-team-orchestration/references/project-brief-template.md`
- `plugins/ai-team-orchestration/skills/ai-team-orchestration/references/sprint-plan-template.md`
- `plugins/arize-ax/skills/arize-ai-provider-integration/SKILL.md`
- `plugins/arize-ax/skills/arize-ai-provider-integration/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-ai-provider-integration/references/ax-setup.md`
- `plugins/arize-ax/skills/arize-annotation/SKILL.md`
- `plugins/arize-ax/skills/arize-annotation/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-annotation/references/ax-setup.md`
- `plugins/arize-ax/skills/arize-dataset/SKILL.md`
- `plugins/arize-ax/skills/arize-dataset/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-dataset/references/ax-setup.md`
- `plugins/arize-ax/skills/arize-evaluator/SKILL.md`
- `plugins/arize-ax/skills/arize-evaluator/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-evaluator/references/ax-setup.md`
- `plugins/arize-ax/skills/arize-experiment/SKILL.md`
- `plugins/arize-ax/skills/arize-experiment/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-experiment/references/ax-setup.md`
- `plugins/arize-ax/skills/arize-instrumentation/SKILL.md`
- `plugins/arize-ax/skills/arize-instrumentation/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-link/SKILL.md`
- `plugins/arize-ax/skills/arize-link/references/EXAMPLES.md`
- `plugins/arize-ax/skills/arize-prompt-optimization/SKILL.md`
- `plugins/arize-ax/skills/arize-prompt-optimization/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-prompt-optimization/references/ax-setup.md`
- `plugins/arize-ax/skills/arize-trace/SKILL.md`
- `plugins/arize-ax/skills/arize-trace/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-trace/references/ax-setup.md`
- `plugins/automate-this/skills/automate-this/SKILL.md`
- `plugins/awesome-copilot/skills/suggest-awesome-github-copilot-agents/SKILL.md`
- `plugins/awesome-copilot/skills/suggest-awesome-github-copilot-instructions/SKILL.md`
- `plugins/awesome-copilot/skills/suggest-awesome-github-copilot-skills/SKILL.md`
- `plugins/aws-cloud-development/skills/aws-cost-optimize/SKILL.md`
- `plugins/aws-cloud-development/skills/aws-resource-health-diagnose/SKILL.md`
- `plugins/aws-cloud-development/skills/aws-resource-query/SKILL.md`
- `plugins/aws-cloud-development/skills/aws-well-architected-review/SKILL.md`
- `plugins/azure-cloud-development/skills/az-cost-optimize/SKILL.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `plugins/acreadiness-cockpit/skills/acreadiness-assess/SKILL.md`
- `plugins/acreadiness-cockpit/skills/acreadiness-assess/report-template.html`
- `plugins/acreadiness-cockpit/skills/acreadiness-generate-instructions/SKILL.md`
- `plugins/acreadiness-cockpit/skills/acreadiness-policy/SKILL.md`
- `plugins/ai-team-orchestration/skills/ai-team-orchestration/SKILL.md`
- `plugins/ai-team-orchestration/skills/ai-team-orchestration/references/anti-patterns.md`
- `plugins/ai-team-orchestration/skills/ai-team-orchestration/references/brainstorm-format.md`
- `plugins/ai-team-orchestration/skills/ai-team-orchestration/references/project-brief-template.md`
- `plugins/ai-team-orchestration/skills/ai-team-orchestration/references/sprint-plan-template.md`
- `plugins/arize-ax/skills/arize-ai-provider-integration/SKILL.md`
- `plugins/arize-ax/skills/arize-ai-provider-integration/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-ai-provider-integration/references/ax-setup.md`
- `plugins/arize-ax/skills/arize-annotation/SKILL.md`
- `plugins/arize-ax/skills/arize-annotation/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-annotation/references/ax-setup.md`
- `plugins/arize-ax/skills/arize-dataset/SKILL.md`
- `plugins/arize-ax/skills/arize-dataset/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-dataset/references/ax-setup.md`
- `plugins/arize-ax/skills/arize-evaluator/SKILL.md`
- `plugins/arize-ax/skills/arize-evaluator/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-evaluator/references/ax-setup.md`
- `plugins/arize-ax/skills/arize-experiment/SKILL.md`
- `plugins/arize-ax/skills/arize-experiment/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-experiment/references/ax-setup.md`
- `plugins/arize-ax/skills/arize-instrumentation/SKILL.md`
- `plugins/arize-ax/skills/arize-instrumentation/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-link/SKILL.md`
- `plugins/arize-ax/skills/arize-link/references/EXAMPLES.md`
- `plugins/arize-ax/skills/arize-prompt-optimization/SKILL.md`
- `plugins/arize-ax/skills/arize-prompt-optimization/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-prompt-optimization/references/ax-setup.md`
- `plugins/arize-ax/skills/arize-trace/SKILL.md`
- `plugins/arize-ax/skills/arize-trace/references/ax-profiles.md`
- `plugins/arize-ax/skills/arize-trace/references/ax-setup.md`
- `plugins/automate-this/skills/automate-this/SKILL.md`
- `plugins/awesome-copilot/skills/suggest-awesome-github-copilot-agents/SKILL.md`
- `plugins/awesome-copilot/skills/suggest-awesome-github-copilot-instructions/SKILL.md`
- `plugins/awesome-copilot/skills/suggest-awesome-github-copilot-skills/SKILL.md`
- `plugins/aws-cloud-development/skills/aws-cost-optimize/SKILL.md`
- `plugins/aws-cloud-development/skills/aws-resource-health-diagnose/SKILL.md`
- `plugins/aws-cloud-development/skills/aws-resource-query/SKILL.md`
- `plugins/aws-cloud-development/skills/aws-well-architected-review/SKILL.md`
- `plugins/azure-cloud-development/skills/az-cost-optimize/SKILL.md`
- `plugins/azure-cloud-development/skills/azure-pricing/SKILL.md`
- `plugins/azure-cloud-development/skills/azure-pricing/references/COPILOT-STUDIO-RATES.md`
- `plugins/azure-cloud-development/skills/azure-pricing/references/COST-ESTIMATOR.md`
- `plugins/azure-cloud-development/skills/azure-pricing/references/REGIONS.md`
- `plugins/azure-cloud-development/skills/azure-pricing/references/SERVICE-NAMES.md`
- `plugins/azure-cloud-development/skills/azure-resource-health-diagnose/SKILL.md`
- `plugins/azure-cloud-development/skills/import-infrastructure-as-code/SKILL.md`
- `plugins/clojure-interactive-programming/skills/remember-interactive-programming/SKILL.md`
- `plugins/cms-development/skills/content-management-systems/SKILL.md`
- `plugins/cms-development/skills/content-management-systems/references/cms-platform-workflows.md`
- `plugins/cms-development/skills/markdown-to-html/SKILL.md`
- `plugins/cms-development/skills/markdown-to-html/references/basic-markdown-to-html.md`
- `plugins/cms-development/skills/markdown-to-html/references/basic-markdown.md`
- `plugins/cms-development/skills/markdown-to-html/references/code-blocks-to-html.md`
- `plugins/cms-development/skills/markdown-to-html/references/code-blocks.md`
- `plugins/cms-development/skills/markdown-to-html/references/collapsed-sections-to-html.md`
- `plugins/cms-development/skills/markdown-to-html/references/collapsed-sections.md`
- `plugins/cms-development/skills/markdown-to-html/references/gomarkdown.md`
- `plugins/cms-development/skills/markdown-to-html/references/hugo.md`
- `plugins/cms-development/skills/markdown-to-html/references/jekyll.md`
- `plugins/cms-development/skills/markdown-to-html/references/marked.md`
- `plugins/cms-development/skills/markdown-to-html/references/pandoc.md`
- `plugins/cms-development/skills/markdown-to-html/references/tables-to-html.md`
- `plugins/cms-development/skills/markdown-to-html/references/tables.md`
- `plugins/cms-development/skills/markdown-to-html/references/writing-mathematical-expressions-to-html.md`
- `plugins/cms-development/skills/markdown-to-html/references/writing-mathematical-expressions.md`
- `plugins/cms-development/skills/quasi-coder/SKILL.md`
- `plugins/context-engineering/skills/context-map/SKILL.md`
- `plugins/context-engineering/skills/refactor-plan/SKILL.md`
- `plugins/context-engineering/skills/what-context-needed/SKILL.md`
- `plugins/context-matic/skills/integrate-context-matic/SKILL.md`
- `plugins/context-matic/skills/onboard-context-matic/SKILL.md`
- `plugins/copilot-sdk/skills/copilot-sdk/SKILL.md`
- `plugins/csharp-dotnet-development/skills/aspnet-minimal-api-openapi/SKILL.md`
- `plugins/csharp-dotnet-development/skills/csharp-async/SKILL.md`
- `plugins/csharp-dotnet-development/skills/csharp-mstest/SKILL.md`
- `plugins/csharp-dotnet-development/skills/csharp-nunit/SKILL.md`
- `plugins/csharp-dotnet-development/skills/csharp-tunit/SKILL.md`
- `plugins/csharp-dotnet-development/skills/csharp-xunit/SKILL.md`
- `plugins/csharp-dotnet-development/skills/dotnet-best-practices/SKILL.md`
- `plugins/csharp-dotnet-development/skills/dotnet-upgrade/SKILL.md`
- `plugins/database-data-management/skills/postgresql-code-review/SKILL.md`
- `plugins/database-data-management/skills/postgresql-optimization/SKILL.md`
- `plugins/database-data-management/skills/sql-code-review/SKILL.md`
- `plugins/database-data-management/skills/sql-optimization/SKILL.md`
- `plugins/dataverse-sdk-for-python/skills/dataverse-python-advanced-patterns/SKILL.md`
- `plugins/dataverse-sdk-for-python/skills/dataverse-python-production-code/SKILL.md`
- `plugins/dataverse-sdk-for-python/skills/dataverse-python-quickstart/SKILL.md`
- `plugins/dataverse-sdk-for-python/skills/dataverse-python-usecase-builder/SKILL.md`
- `plugins/devops-oncall/skills/azure-resource-health-diagnose/SKILL.md`
- `plugins/devops-oncall/skills/multi-stage-dockerfile/SKILL.md`
- `plugins/doublecheck/skills/doublecheck/SKILL.md`
- `plugins/doublecheck/skills/doublecheck/assets/verification-report-template.md`
- `plugins/ember/skills/from-the-other-side-anitta/SKILL.md`
- `plugins/ember/skills/from-the-other-side-quinn/SKILL.md`
- `plugins/ember/skills/from-the-other-side-vega/SKILL.md`
- `plugins/ember/skills/from-the-other-side-wiggins/SKILL.md`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

_없음_

### CI/Docker 후보

- `.github/workflows/build-website.yml`
- `.github/workflows/check-line-endings.yml`
- `.github/workflows/check-plugin-structure.yml`
- `.github/workflows/check-pr-target.yml`
- `.github/workflows/cli-for-beginners-sync.lock.yml`
- `.github/workflows/cli-for-beginners-sync.md`
- `.github/workflows/codeowner-update.lock.yml`
- `.github/workflows/codeowner-update.md`
- `.github/workflows/codespell.yml`
- `.github/workflows/contributor-check.yml`
- `.github/workflows/contributors.yml`
- `.github/workflows/copilot-setup-steps.yml`
- `.github/workflows/deploy-website.yml`
- `.github/workflows/duplicate-resource-detector.lock.yml`
- `.github/workflows/duplicate-resource-detector.md`
- `.github/workflows/external-plugin-approval-command.yml`
- `.github/workflows/external-plugin-command-router.yml`
- `.github/workflows/external-plugin-intake.yml`
- `.github/workflows/external-plugin-pr-quality-gates.yml`
- `.github/workflows/external-plugin-quality-gates.yml`
- `.github/workflows/external-plugin-rereview-command.yml`
- `.github/workflows/external-plugin-rereview.yml`
- `.github/workflows/label-pr-intent.yml`
- `.github/workflows/learning-hub-updater.lock.yml`
- `.github/workflows/learning-hub-updater.md`
- `.github/workflows/pr-duplicate-check.lock.yml`
- `.github/workflows/pr-duplicate-check.md`
- `.github/workflows/pr-risk-scan-comment.yml`
- `.github/workflows/pr-risk-scan.yml`
- `.github/workflows/publish.yml`
- `.github/workflows/resource-staleness-report.lock.yml`
- `.github/workflows/resource-staleness-report.md`
- `.github/workflows/setup-labels.yml`
- `.github/workflows/skill-check-comment.yml`
- `.github/workflows/skill-check.yml`
- `.github/workflows/skill-quality-report.yml`
- `.github/workflows/traffic-reporting.yml`
- `.github/workflows/validate-agentic-workflows-pr.yml`
- `.github/workflows/validate-canvas-extensions.yml`
- `.github/workflows/validate-readme.yml`
- `.github/workflows/webhook-caller.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 1903 |
| .json | 138 |
| .png | 122 |
| .py | 45 |
| .mjs | 43 |
| .m4a | 40 |
| .yml | 38 |
| .ts | 37 |
| .astro | 21 |
| .sh | 19 |
| .gif | 17 |
| .svg | 13 |
| .wav | 13 |
| .html | 12 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `skills/ 내부 책임 분리`
- `agents/ 내부 책임 분리`
- `extensions/ 내부 책임 분리`
- `plugins/ 내부 책임 분리`
- `plugins/acreadiness-cockpit/skills/acreadiness-assess/SKILL.md 스펙/명령 의미`
- `plugins/acreadiness-cockpit/skills/acreadiness-assess/report-template.html 스펙/명령 의미`
- `plugins/acreadiness-cockpit/skills/acreadiness-generate-instructions/SKILL.md 스펙/명령 의미`
- `plugins/acreadiness-cockpit/skills/acreadiness-policy/SKILL.md 스펙/명령 의미`
- `plugins/ai-team-orchestration/skills/ai-team-orchestration/SKILL.md 스펙/명령 의미`
- `.github/extensions/external-plugins-board/package.json 실행 스크립트와 패키지 경계`
- `cookbook/copilot-sdk/nodejs/recipe/package.json 실행 스크립트와 패키지 경계`
- `cookbook/copilot-sdk/python/recipe/requirements.txt 실행 스크립트와 패키지 경계`
- `extensions/accessibility-kanban/package.json 실행 스크립트와 패키지 경계`
- `extensions/arcade-canvas/package.json 실행 스크립트와 패키지 경계`

