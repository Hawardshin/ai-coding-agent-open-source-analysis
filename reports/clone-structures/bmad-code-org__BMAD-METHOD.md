# bmad-code-org/BMAD-METHOD 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/bmad-code-org__BMAD-METHOD |
| remote | https://github.com/bmad-code-org/BMAD-METHOD |
| HEAD | 2417f00 (2026-06-17) bmad-architecture: lean directives, breadth coverage, redesigned spine template (#2475) |
| branch | main |
| groups | spec-driven-20 |
| files | 570 |
| dirs | 158 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Why the BMad Method?`, `🚀 What's Next for BMad?`, `Quick Start`, `Modules`, `Web Bundles`, `Documentation`, `Community`, `Support BMad`, `Contributing`, `License`

> Build More Architect Dreams — An AI driven agile development module for the BMad Method Module Ecosystem, the best and most comprehensive Agile AI Driven Development framework that has true scale adaptive intelligence that adjusts from bug fixes to enterprise systems. 100% free and open source. No paywalls. No gated content. No gated Discord. We believe in empowering everyone, not just those who can pay for a gated community or courses. Why the BMad Method? Traditional AI tools do the thinking for you, producing average results. BMad agents and facilitated workflows act as expert collaborators who guide you through a structured process to bring out your best thinking in partnership with the AI. AI Intelligent Help — Invoke the bmad help skill anytime for guidance on what's next Scale Domain Adaptive — Automatically adjusts planning depth based on project complexity Structured Workflows —

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .augment | dir |
| .claude-plugin | dir |
| .coderabbit.yaml | file |
| .github | dir |
| .gitignore | file |
| .husky | dir |
| .markdownlint-cli2.yaml | file |
| .npmignore | file |
| .npmrc | file |
| .nvmrc | file |
| .prettierignore | file |
| .vscode | dir |
| AGENTS.md | file |
| banner-bmad-method.png | file |
| bmad-modules.yaml | file |
| CHANGELOG.md | file |
| CNAME | file |
| CONTRIBUTING.md | file |
| CONTRIBUTORS.md | file |
| docs | dir |
| eslint.config.mjs | file |
| evals | dir |
| LICENSE | file |
| package-lock.json | file |
| package.json | file |
| prettier.config.mjs | file |
| README_CN.md | file |
| README_VN.md | file |
| README.md | file |
| removals.txt | file |
| SECURITY.md | file |
| src | dir |
| test | dir |
| tools | dir |
| TRADEMARK.md | file |
| web-bundles | dir |
| website | dir |
| Wordmark.png | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| src/ | 227 |
| docs/ | 173 |
| tools/ | 54 |
| (root) | 26 |
| website/ | 25 |
| web-bundles/ | 18 |
| test/ | 17 |
| .github/ | 14 |
| evals/ | 12 |
| .augment/ | 1 |
| .claude-plugin/ | 1 |
| .husky/ | 1 |
| .vscode/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 227 | preferred |
| docs/ | 173 | preferred |
| test/ | 17 | preferred |
| tools/ | 54 | preferred |
| src/bmm-skills/ | 184 | large |
| src/bmm-skills/1-analysis/ | 62 | large |
| src/bmm-skills/4-implementation/ | 52 | large |
| tools/installer/ | 39 | large |
| src/core-skills/ | 38 | large |
| docs/fr/ | 37 | large |
| docs/vi-vn/ | 35 | large |
| src/bmm-skills/2-plan-workflows/ | 35 | large |
| docs/zh-cn/ | 34 | large |
| src/bmm-skills/3-solutioning/ | 33 | large |
| docs/cs/ | 30 | large |
| website/ | 25 | large |
| src/core-skills/bmad-brainstorming/ | 19 | large |
| web-bundles/ | 18 | large |
| .github/ | 14 | large |
| docs/explanation/ | 14 | large |
| docs/fr/explanation/ | 14 | large |
| website/src/ | 14 | large |
| docs/fr/how-to/ | 12 | large |
| docs/how-to/ | 12 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | bmad-method | bmad:install, bmad:uninstall, docs:build, docs:dev, docs:fix-links, docs:preview, docs:validate-links, docs:validate-sidebar, format:check, format:fix, format:fix:staged, install:bmad, lint, lint:fix, lint:md, prepare | @clack/core, @clack/prompts, @kayvan/markdown-tree-parser, chalk, commander, csv-parse, glob, ignore, js-yaml, picocolors, semver, xml2js, yaml |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `CONTRIBUTING.md`
- `README.md`
- `docs/404.md`
- `docs/_STYLE_GUIDE.md`
- `docs/cs/404.md`
- `docs/cs/_STYLE_GUIDE.md`
- `docs/cs/explanation/advanced-elicitation.md`
- `docs/cs/explanation/adversarial-review.md`
- `docs/cs/explanation/analysis-phase.md`
- `docs/cs/explanation/brainstorming.md`
- `docs/cs/explanation/established-projects-faq.md`
- `docs/cs/explanation/party-mode.md`
- `docs/cs/explanation/preventing-agent-conflicts.md`
- `docs/cs/explanation/project-context.md`
- `docs/cs/explanation/quick-dev.md`
- `docs/cs/explanation/why-solutioning-matters.md`
- `docs/cs/how-to/customize-bmad.md`
- `docs/cs/how-to/established-projects.md`
- `docs/cs/how-to/get-answers-about-bmad.md`
- `docs/cs/how-to/install-bmad.md`
- `docs/cs/how-to/non-interactive-installation.md`
- `docs/cs/how-to/project-context.md`
- `docs/cs/how-to/quick-fixes.md`
- `docs/cs/how-to/shard-large-documents.md`
- `docs/cs/how-to/upgrade-to-v6.md`
- `docs/cs/index.md`
- `docs/cs/reference/agents.md`
- `docs/cs/reference/commands.md`
- `docs/cs/reference/core-tools.md`
- `docs/cs/reference/modules.md`
- `docs/cs/reference/testing.md`
- `docs/cs/reference/workflow-map.md`
- `docs/cs/roadmap.mdx`
- `docs/cs/tutorials/getting-started.md`
- `docs/explanation/advanced-elicitation.md`
- `docs/explanation/adversarial-review.md`
- `docs/explanation/analysis-phase.md`
- `docs/explanation/brainstorming.md`
- `docs/explanation/checkpoint-preview.md`
- `docs/explanation/established-projects-faq.md`
- `docs/explanation/forensic-investigation.md`
- `docs/explanation/named-agents.md`
- `docs/explanation/party-mode.md`
- `docs/explanation/preventing-agent-conflicts.md`
- `docs/explanation/project-context.md`
- `docs/explanation/quick-dev.md`
- `docs/explanation/web-bundles.md`
- `docs/explanation/why-solutioning-matters.md`
- `docs/fr/404.md`
- `docs/fr/_STYLE_GUIDE.md`
- ... 30 more

### 에이전트 지침 후보

- `AGENTS.md`
- `docs/cs/reference/agents.md`
- `docs/fr/reference/agents.md`
- `docs/reference/agents.md`
- `docs/vi-vn/reference/agents.md`
- `docs/zh-cn/reference/agents.md`
- `evals/bmm-skills/bmad-product-brief/evals.json`
- `evals/bmm-skills/bmad-product-brief/files/branfield-memo.md`
- `evals/bmm-skills/bmad-product-brief/files/forkbird-brief/addendum.md`
- `evals/bmm-skills/bmad-product-brief/files/forkbird-brief/brief.md`
- `evals/bmm-skills/bmad-product-brief/files/forkbird-brief/decision-log.md`
- `evals/bmm-skills/bmad-product-brief/files/meridian-mobility-report.md`
- `evals/bmm-skills/bmad-product-brief/files/mossridge-brief/addendum.md`
- `evals/bmm-skills/bmad-product-brief/files/mossridge-brief/brief.md`
- `evals/bmm-skills/bmad-product-brief/files/mossridge-brief/decision-log.md`
- `evals/bmm-skills/bmad-product-brief/files/pantry-bridge-interviews.md`
- `evals/bmm-skills/bmad-product-brief/files/q2-brainstorm.md`
- `evals/bmm-skills/bmad-product-brief/triggers.json`
- `src/bmm-skills/1-analysis/bmad-agent-analyst/SKILL.md`
- `src/bmm-skills/1-analysis/bmad-agent-analyst/customize.toml`
- `src/bmm-skills/1-analysis/bmad-agent-tech-writer/SKILL.md`
- `src/bmm-skills/1-analysis/bmad-agent-tech-writer/customize.toml`
- `src/bmm-skills/1-analysis/bmad-agent-tech-writer/explain-concept.md`
- `src/bmm-skills/1-analysis/bmad-agent-tech-writer/mermaid-gen.md`
- `src/bmm-skills/1-analysis/bmad-agent-tech-writer/validate-doc.md`
- `src/bmm-skills/1-analysis/bmad-agent-tech-writer/write-document.md`
- `src/bmm-skills/1-analysis/bmad-document-project/SKILL.md`
- `src/bmm-skills/1-analysis/bmad-document-project/checklist.md`
- `src/bmm-skills/1-analysis/bmad-document-project/customize.toml`
- `src/bmm-skills/1-analysis/bmad-document-project/documentation-requirements.csv`
- `src/bmm-skills/1-analysis/bmad-document-project/instructions.md`
- `src/bmm-skills/1-analysis/bmad-document-project/templates/deep-dive-template.md`
- `src/bmm-skills/1-analysis/bmad-document-project/templates/index-template.md`
- `src/bmm-skills/1-analysis/bmad-document-project/templates/project-overview-template.md`
- `src/bmm-skills/1-analysis/bmad-document-project/templates/project-scan-report-schema.json`
- `src/bmm-skills/1-analysis/bmad-document-project/templates/source-tree-template.md`
- `src/bmm-skills/1-analysis/bmad-document-project/workflows/deep-dive-instructions.md`
- `src/bmm-skills/1-analysis/bmad-document-project/workflows/deep-dive-workflow.md`
- `src/bmm-skills/1-analysis/bmad-document-project/workflows/full-scan-instructions.md`
- `src/bmm-skills/1-analysis/bmad-document-project/workflows/full-scan-workflow.md`
- `src/bmm-skills/1-analysis/bmad-prfaq/SKILL.md`
- `src/bmm-skills/1-analysis/bmad-prfaq/agents/artifact-analyzer.md`
- `src/bmm-skills/1-analysis/bmad-prfaq/agents/web-researcher.md`
- `src/bmm-skills/1-analysis/bmad-prfaq/assets/prfaq-template.md`
- `src/bmm-skills/1-analysis/bmad-prfaq/bmad-manifest.json`
- `src/bmm-skills/1-analysis/bmad-prfaq/customize.toml`
- `src/bmm-skills/1-analysis/bmad-prfaq/references/customer-faq.md`
- `src/bmm-skills/1-analysis/bmad-prfaq/references/internal-faq.md`
- `src/bmm-skills/1-analysis/bmad-prfaq/references/press-release.md`
- `src/bmm-skills/1-analysis/bmad-prfaq/references/verdict.md`
- `src/bmm-skills/1-analysis/bmad-product-brief/SKILL.md`
- `src/bmm-skills/1-analysis/bmad-product-brief/assets/brief-template.md`
- `src/bmm-skills/1-analysis/bmad-product-brief/customize.toml`
- `src/bmm-skills/1-analysis/research/bmad-domain-research/SKILL.md`
- `src/bmm-skills/1-analysis/research/bmad-domain-research/customize.toml`
- `src/bmm-skills/1-analysis/research/bmad-domain-research/domain-steps/step-01-init.md`
- `src/bmm-skills/1-analysis/research/bmad-domain-research/domain-steps/step-02-domain-analysis.md`
- `src/bmm-skills/1-analysis/research/bmad-domain-research/domain-steps/step-03-competitive-landscape.md`
- `src/bmm-skills/1-analysis/research/bmad-domain-research/domain-steps/step-04-regulatory-focus.md`
- `src/bmm-skills/1-analysis/research/bmad-domain-research/domain-steps/step-05-technical-trends.md`
- `src/bmm-skills/1-analysis/research/bmad-domain-research/domain-steps/step-06-research-synthesis.md`
- `src/bmm-skills/1-analysis/research/bmad-domain-research/research.template.md`
- `src/bmm-skills/1-analysis/research/bmad-market-research/SKILL.md`
- `src/bmm-skills/1-analysis/research/bmad-market-research/customize.toml`
- `src/bmm-skills/1-analysis/research/bmad-market-research/research.template.md`
- `src/bmm-skills/1-analysis/research/bmad-market-research/steps/step-01-init.md`
- `src/bmm-skills/1-analysis/research/bmad-market-research/steps/step-02-customer-behavior.md`
- `src/bmm-skills/1-analysis/research/bmad-market-research/steps/step-03-customer-pain-points.md`
- `src/bmm-skills/1-analysis/research/bmad-market-research/steps/step-04-customer-decisions.md`
- `src/bmm-skills/1-analysis/research/bmad-market-research/steps/step-05-competitive-analysis.md`
- `src/bmm-skills/1-analysis/research/bmad-market-research/steps/step-06-research-completion.md`
- `src/bmm-skills/1-analysis/research/bmad-technical-research/SKILL.md`
- `src/bmm-skills/1-analysis/research/bmad-technical-research/customize.toml`
- `src/bmm-skills/1-analysis/research/bmad-technical-research/research.template.md`
- `src/bmm-skills/1-analysis/research/bmad-technical-research/technical-steps/step-01-init.md`
- `src/bmm-skills/1-analysis/research/bmad-technical-research/technical-steps/step-02-technical-overview.md`
- `src/bmm-skills/1-analysis/research/bmad-technical-research/technical-steps/step-03-integration-patterns.md`
- `src/bmm-skills/1-analysis/research/bmad-technical-research/technical-steps/step-04-architectural-patterns.md`
- `src/bmm-skills/1-analysis/research/bmad-technical-research/technical-steps/step-05-implementation-research.md`
- `src/bmm-skills/1-analysis/research/bmad-technical-research/technical-steps/step-06-research-synthesis.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `src/bmm-skills/1-analysis/bmad-document-project/templates/deep-dive-template.md`
- `src/bmm-skills/1-analysis/bmad-document-project/templates/index-template.md`
- `src/bmm-skills/1-analysis/bmad-document-project/templates/project-overview-template.md`
- `src/bmm-skills/1-analysis/bmad-document-project/templates/project-scan-report-schema.json`
- `src/bmm-skills/1-analysis/bmad-document-project/templates/source-tree-template.md`
- `src/bmm-skills/3-solutioning/bmad-check-implementation-readiness/templates/readiness-report-template.md`
- `src/bmm-skills/3-solutioning/bmad-create-epics-and-stories/templates/epics-template.md`
- `src/bmm-skills/4-implementation/bmad-quick-dev/spec-template.md`
- `src/core-skills/bmad-spec/assets/spec-template.md`
- `tools/installer/commands/install.js`
- `tools/installer/commands/status.js`
- `tools/installer/commands/uninstall.js`

## 테스트 / CI / 배포 표면

### 테스트 후보

- `src/bmm-skills/3-solutioning/bmad-architecture/scripts/tests/test_lint_spine.py`
- `src/core-skills/bmad-brainstorming/scripts/tests/test_brain.py`
- `src/core-skills/bmad-brainstorming/scripts/tests/test_memlog.py`
- `src/core-skills/bmad-customize/scripts/tests/test_list_customizable_skills.py`
- `src/scripts/tests/test_memlog.py`
- `src/scripts/tests/test_resolve_customization.py`
- `test/README.md`
- `test/adversarial-review-tests/README.md`
- `test/adversarial-review-tests/sample-content.md`
- `test/adversarial-review-tests/test-cases.yaml`
- `test/fixtures/file-refs-csv/invalid/all-empty-workflow.csv`
- `test/fixtures/file-refs-csv/invalid/empty-data.csv`
- `test/fixtures/file-refs-csv/invalid/no-workflow-column.csv`
- `test/fixtures/file-refs-csv/invalid/unresolvable-vars.csv`
- `test/fixtures/file-refs-csv/valid/bmm-style.csv`
- `test/fixtures/file-refs-csv/valid/core-style.csv`
- `test/fixtures/file-refs-csv/valid/minimal.csv`
- `test/test-file-refs-csv.js`
- `test/test-installation-components.js`
- `test/test-installer-channels.js`
- `test/test-parse-source-urls.js`
- `test/test-rehype-plugins.mjs`
- `test/test-workflow-path-regex.js`

### CI/Docker 후보

- `.github/workflows/coderabbit-review.yaml`
- `.github/workflows/discord.yaml`
- `.github/workflows/docs.yaml`
- `.github/workflows/publish.yaml`
- `.github/workflows/quality.yaml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 381 |
| .js | 51 |
| .toml | 35 |
| .yaml | 19 |
| .csv | 14 |
| .json | 13 |
| .py | 13 |
| .mjs | 7 |
| .png | 6 |
| .html | 5 |
| .mdx | 5 |
| .astro | 4 |
| .sh | 2 |
| .ts | 2 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `tools/ 내부 책임 분리`
- `src/bmm-skills/ 내부 책임 분리`
- `src/bmm-skills/1-analysis/bmad-document-project/templates/deep-dive-template.md 스펙/명령 의미`
- `src/bmm-skills/1-analysis/bmad-document-project/templates/index-template.md 스펙/명령 의미`
- `src/bmm-skills/1-analysis/bmad-document-project/templates/project-overview-template.md 스펙/명령 의미`
- `src/bmm-skills/1-analysis/bmad-document-project/templates/project-scan-report-schema.json 스펙/명령 의미`
- `src/bmm-skills/1-analysis/bmad-document-project/templates/source-tree-template.md 스펙/명령 의미`
- `package.json 실행 스크립트와 패키지 경계`

