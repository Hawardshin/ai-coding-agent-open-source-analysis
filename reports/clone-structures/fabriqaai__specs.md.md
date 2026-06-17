# fabriqaai/specs.md 구조 분석

생성일: 2026-06-17T22:41:11.818Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/fabriqaai__specs.md |
| remote | https://github.com/fabriqaai/specs.md |
| HEAD | f4b6458 (2026-06-07) docs: set dashboard nav label |
| branch | main |
| groups | spec-driven-20 |
| files | 849 |
| dirs | 283 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `specs.md - by fabriqa`, `VS Code Extension`, `Three Flows, Every Use Case`, `Quick Start`, `Prerequisites`, `Installation`, `Dashboard Web`, `Install VS Code Extension (Optional)`, `Verify Installation`, `Check the manifest`, `List installed agents (adjust path for your flow)`, `Simple Flow`, `FIRE Flow`, `AI-DLC Flow`, `Why specs.md?`, `Three Flows for Every Use Case`, `Adaptive Checkpoints (FIRE)`, `First-Class Brownfield & Monorepo (FIRE)`

> specs.md by fabriqa <p align="center" <img src="images/specs md pixel logo.png" alt="specs.md logo" width="400" / </p AI native development framework with pluggable flows for every use case. Choose the flow that matches your project needs Simple for quick specs, FIRE for adaptive execution, or AI DLC for full methodology with DDD. <p align="center" <img src="docs.specs.md/images/quickstart.gif" alt="specs.md demo" width="800" / </p VS Code Extension Track your progress with our sidebar extension for VS Code and compatible IDEs. AI DLC Flow <p align="center" <img src="vs code extension/resources/extension preview.png" alt="AI DLC Flow Extension Preview" width="800" / </p FIRE Flow <p align="center" <img src="images/fire1.png" alt="FIRE Flow Intents View" width="400" / <img src="images/fire3.png" alt="FIRE Flow Runs View" width="400" / </p Note Works with any VS Code based IDE including Cu

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .claude | dir |
| .github | dir |
| .gitignore | file |
| .markdownlint.yaml | file |
| .specsmd | dir |
| .vscode | dir |
| CHANGELOG.md | file |
| dev_release_guide.md | file |
| docs.specs.md | dir |
| images | dir |
| LICENSE | file |
| memory-bank | dir |
| package.json | file |
| PRIVACY.md | file |
| README.md | file |
| resources | dir |
| scripts | dir |
| src | dir |
| todo.md | file |
| vs-code-extension | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| memory-bank/ | 300 |
| src/ | 252 |
| vs-code-extension/ | 169 |
| docs.specs.md/ | 81 |
| images/ | 10 |
| .claude/ | 9 |
| (root) | 9 |
| resources/ | 9 |
| .github/ | 6 |
| .vscode/ | 2 |
| scripts/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 252 | preferred |
| scripts/ | 2 | preferred |
| memory-bank/ | 300 | large |
| memory-bank/intents/ | 171 | large |
| vs-code-extension/ | 169 | large |
| src/flows/ | 148 | large |
| vs-code-extension/src/ | 131 | large |
| memory-bank/bolts/ | 86 | large |
| docs.specs.md/ | 81 | large |
| src/flows/aidlc/ | 66 | large |
| memory-bank/intents/011-vscode-extension/ | 58 | large |
| src/lib/ | 56 | large |
| vs-code-extension/src/webview/ | 50 | large |
| src/__tests__/ | 38 | large |
| src/flows/fire/ | 38 | large |
| src/lib/dashboard/ | 34 | large |
| src/__tests__/unit/ | 33 | large |
| src/flows/ideation/ | 31 | large |
| docs.specs.md/images/ | 28 | large |
| memory-bank/intents/012-vscode-extension-analytics/ | 28 | large |
| memory-bank/ideas/ | 24 | large |
| vs-code-extension/src/test/ | 23 | large |
| memory-bank/ideas/fire-specs/ | 20 | large |
| vs-code-extension/design-mockups/ | 18 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `package.json`
- `src/package.json`
- `src/tsconfig.json`
- `vs-code-extension/package.json`
- `vs-code-extension/tsconfig.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| package.json | specsmd | validate:all, lint:md:fix, deps:check, deps:check:minor |  |
| src/package.json | specsmd | test, test:watch, test:schema, lint:md, lint:md:fix, sync:webview-bundle, check:webview-bundle, prepack, validate:all | @inkjs/ui, chalk, chokidar, commander, figlet, fs-extra, gradient-string, ink, js-yaml, mixpanel, oh-my-logo, prompts, react, slice-ansi |
| vs-code-extension/package.json | specsmd | vscode:prepublish, compile, compile:ext, compile:webview, typecheck:webview, watch, watch:webview, pretest, compile:test, test, test:vscode, lint, package | @lit/context, js-yaml, lit, mixpanel, yaml |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs.specs.md/README.md`
- `memory-bank/ideas/fire-specs/README.md`
- `src/README.md`
- `src/flows/aidlc/README.md`
- `src/flows/aidlc/templates/inception/project/README.md`
- `src/flows/fire/README.md`
- `src/flows/ideation/README.md`
- `src/flows/simple/README.md`
- `vs-code-extension/README.md`

### 에이전트 지침 후보

- `.claude/FIRE_FLOW_DESIGN.md`
- `.claude/claude.md`
- `.claude/commands/compare-specs.md`
- `.claude/commands/specsmd-agent.md`
- `.claude/commands/specsmd-construction-agent.md`
- `.claude/commands/specsmd-inception-agent.md`
- `.claude/commands/specsmd-master-agent.md`
- `.claude/commands/specsmd-operations-agent.md`
- `.claude/skills/frontend-design/SKILL.md`
- `docs.specs.md/CLAUDE.md`
- `memory-bank/ideas/fire-specs/intents/fire-flow/work-items/design-doc-generate-skill.md`
- `memory-bank/ideas/fire-specs/intents/fire-flow/work-items/intent-capture-skill.md`
- `memory-bank/ideas/fire-specs/intents/fire-flow/work-items/report-bug-skill.md`
- `memory-bank/ideas/fire-specs/intents/fire-flow/work-items/run-execute-skill.md`
- `memory-bank/ideas/fire-specs/intents/fire-flow/work-items/standards-init-skill.md`
- `memory-bank/ideas/fire-specs/intents/fire-flow/work-items/walkthrough-generate-skill.md`
- `memory-bank/ideas/fire-specs/intents/fire-flow/work-items/work-item-decompose-skill.md`
- `memory-bank/ideas/fire-specs/intents/fire-flow/work-items/workspace-detect-skill.md`
- `memory-bank/standards/skill-template.md`
- `resources/brainstorming/LandD_skillfluence-creativity_-handbook.pdf`
- `src/__tests__/schemas/skill.schema.yaml`
- `src/flows/aidlc/skills/construction/bolt-list.md`
- `src/flows/aidlc/skills/construction/bolt-replan.md`
- `src/flows/aidlc/skills/construction/bolt-start.md`
- `src/flows/aidlc/skills/construction/bolt-status.md`
- `src/flows/aidlc/skills/construction/navigator.md`
- `src/flows/aidlc/skills/construction/prototype-apply.md`
- `src/flows/aidlc/skills/inception/bolt-plan.md`
- `src/flows/aidlc/skills/inception/context.md`
- `src/flows/aidlc/skills/inception/intent-create.md`
- `src/flows/aidlc/skills/inception/intent-list.md`
- `src/flows/aidlc/skills/inception/navigator.md`
- `src/flows/aidlc/skills/inception/requirements.md`
- `src/flows/aidlc/skills/inception/review.md`
- `src/flows/aidlc/skills/inception/story-create.md`
- `src/flows/aidlc/skills/inception/units.md`
- `src/flows/aidlc/skills/inception/vibe-to-spec.md`
- `src/flows/aidlc/skills/master/analyze-context.md`
- `src/flows/aidlc/skills/master/answer-question.md`
- `src/flows/aidlc/skills/master/explain-flow.md`
- `src/flows/aidlc/skills/master/project-init.md`
- `src/flows/aidlc/skills/master/route-request.md`
- `src/flows/aidlc/skills/operations/build.md`
- `src/flows/aidlc/skills/operations/deploy.md`
- `src/flows/aidlc/skills/operations/monitor.md`
- `src/flows/aidlc/skills/operations/navigator.md`
- `src/flows/aidlc/skills/operations/verify.md`
- `src/flows/fire/agents/builder/skills/code-review/SKILL.md`
- `src/flows/fire/agents/builder/skills/code-review/references/auto-fix-rules.md`
- `src/flows/fire/agents/builder/skills/code-review/references/review-categories.md`
- `src/flows/fire/agents/builder/skills/code-review/templates/review-report.md.hbs`
- `src/flows/fire/agents/builder/skills/run-execute/SKILL.md`
- `src/flows/fire/agents/builder/skills/run-execute/scripts/complete-run.cjs`
- `src/flows/fire/agents/builder/skills/run-execute/scripts/init-run.cjs`
- `src/flows/fire/agents/builder/skills/run-execute/scripts/update-checkpoint.cjs`
- `src/flows/fire/agents/builder/skills/run-execute/scripts/update-phase.cjs`
- `src/flows/fire/agents/builder/skills/run-execute/templates/plan.md.hbs`
- `src/flows/fire/agents/builder/skills/run-execute/templates/test-report.md.hbs`
- `src/flows/fire/agents/builder/skills/run-plan/SKILL.md`
- `src/flows/fire/agents/builder/skills/run-status/SKILL.md`
- `src/flows/fire/agents/builder/skills/walkthrough-generate/SKILL.md`
- `src/flows/fire/agents/builder/skills/walkthrough-generate/templates/walkthrough.md.hbs`
- `src/flows/fire/agents/orchestrator/skills/project-init/SKILL.md`
- `src/flows/fire/agents/orchestrator/skills/project-init/templates/coding-standards.md.hbs`
- `src/flows/fire/agents/orchestrator/skills/project-init/templates/constitution.md.hbs`
- `src/flows/fire/agents/orchestrator/skills/project-init/templates/system-architecture.md.hbs`
- `src/flows/fire/agents/orchestrator/skills/project-init/templates/tech-stack.md.hbs`
- `src/flows/fire/agents/orchestrator/skills/project-init/templates/testing-standards.md.hbs`
- `src/flows/fire/agents/orchestrator/skills/route/SKILL.md`
- `src/flows/fire/agents/orchestrator/skills/status/SKILL.md`
- `src/flows/fire/agents/planner/skills/design-doc-generate/SKILL.md`
- `src/flows/fire/agents/planner/skills/design-doc-generate/templates/design.md.hbs`
- `src/flows/fire/agents/planner/skills/intent-capture/SKILL.md`
- `src/flows/fire/agents/planner/skills/intent-capture/templates/brief.md.hbs`
- `src/flows/fire/agents/planner/skills/work-item-decompose/SKILL.md`
- `src/flows/fire/agents/planner/skills/work-item-decompose/templates/work-item.md.hbs`
- `src/flows/ideation/agents/orchestrator/skills/flame/SKILL.md`
- `src/flows/ideation/agents/orchestrator/skills/flame/references/evaluation-criteria.md`
- `src/flows/ideation/agents/orchestrator/skills/flame/references/six-hats-method.md`
- `src/flows/ideation/agents/orchestrator/skills/flame/templates/flame-report.md.hbs`
- ... 19 more

### 스펙/템플릿/명령/스킬 후보

- `.claude/FIRE_FLOW_DESIGN.md`
- `.claude/commands/compare-specs.md`
- `.claude/commands/specsmd-agent.md`
- `.claude/commands/specsmd-construction-agent.md`
- `.claude/commands/specsmd-inception-agent.md`
- `.claude/commands/specsmd-master-agent.md`
- `.claude/commands/specsmd-operations-agent.md`
- `.claude/skills/frontend-design/SKILL.md`
- `memory-bank/intents/001-multi-agent-orchestration/requirements.md`
- `memory-bank/intents/002-agentic-coding-tool-integration/requirements.md`
- `memory-bank/intents/003-memory-bank-system/requirements.md`
- `memory-bank/intents/004-standards-system/requirements.md`
- `memory-bank/intents/005-testing-strategy/requirements.md`
- `memory-bank/intents/006-brownfield-support/requirements.md`
- `memory-bank/intents/007-installer-analytics/requirements.md`
- `memory-bank/intents/008-terminal-dashboard/requirements.md`
- `memory-bank/intents/009-versioning-strategy/requirements.md`
- `memory-bank/intents/010-smart-unit-decomposition/requirements.md`
- `memory-bank/intents/011-vscode-extension/requirements.md`
- `memory-bank/intents/012-vscode-extension-analytics/requirements.md`
- `memory-bank/intents/013-vscode-enhanced-logs/requirements.md`
- `memory-bank/intents/014-dashboard-web/requirements.md`
- `src/flows/aidlc/commands/construction-agent.md`
- `src/flows/aidlc/commands/inception-agent.md`
- `src/flows/aidlc/commands/master-agent.md`
- `src/flows/aidlc/commands/operations-agent.md`
- `src/flows/aidlc/skills/construction/bolt-list.md`
- `src/flows/aidlc/skills/construction/bolt-replan.md`
- `src/flows/aidlc/skills/construction/bolt-start.md`
- `src/flows/aidlc/skills/construction/bolt-status.md`
- `src/flows/aidlc/skills/construction/navigator.md`
- `src/flows/aidlc/skills/construction/prototype-apply.md`
- `src/flows/aidlc/skills/inception/bolt-plan.md`
- `src/flows/aidlc/skills/inception/context.md`
- `src/flows/aidlc/skills/inception/intent-create.md`
- `src/flows/aidlc/skills/inception/intent-list.md`
- `src/flows/aidlc/skills/inception/navigator.md`
- `src/flows/aidlc/skills/inception/requirements.md`
- `src/flows/aidlc/skills/inception/review.md`
- `src/flows/aidlc/skills/inception/story-create.md`
- `src/flows/aidlc/skills/inception/units.md`
- `src/flows/aidlc/skills/inception/vibe-to-spec.md`
- `src/flows/aidlc/skills/master/analyze-context.md`
- `src/flows/aidlc/skills/master/answer-question.md`
- `src/flows/aidlc/skills/master/explain-flow.md`
- `src/flows/aidlc/skills/master/project-init.md`
- `src/flows/aidlc/skills/master/route-request.md`
- `src/flows/aidlc/skills/operations/build.md`
- `src/flows/aidlc/skills/operations/deploy.md`
- `src/flows/aidlc/skills/operations/monitor.md`
- `src/flows/aidlc/skills/operations/navigator.md`
- `src/flows/aidlc/skills/operations/verify.md`
- `src/flows/aidlc/templates/construction/bolt-template.md`
- `src/flows/aidlc/templates/construction/bolt-types/ddd-construction-bolt.md`
- `src/flows/aidlc/templates/construction/bolt-types/ddd-construction-bolt/adr-template.md`
- `src/flows/aidlc/templates/construction/bolt-types/ddd-construction-bolt/ddd-01-domain-model-template.md`
- `src/flows/aidlc/templates/construction/bolt-types/ddd-construction-bolt/ddd-02-technical-design-template.md`
- `src/flows/aidlc/templates/construction/bolt-types/ddd-construction-bolt/ddd-03-test-report-template.md`
- `src/flows/aidlc/templates/construction/bolt-types/simple-construction-bolt.md`
- `src/flows/aidlc/templates/construction/bolt-types/spike-bolt.md`
- `src/flows/aidlc/templates/construction/construction-log-template.md`
- `src/flows/aidlc/templates/construction/standards/coding-standards.md`
- `src/flows/aidlc/templates/construction/standards/system-architecture.md`
- `src/flows/aidlc/templates/construction/standards/tech-stack.md`
- `src/flows/aidlc/templates/inception/inception-log-template.md`
- `src/flows/aidlc/templates/inception/project/README.md`
- `src/flows/aidlc/templates/inception/requirements-template.md`
- `src/flows/aidlc/templates/inception/stories-template.md`
- `src/flows/aidlc/templates/inception/story-template.md`
- `src/flows/aidlc/templates/inception/system-context-template.md`
- `src/flows/aidlc/templates/inception/unit-brief-template.md`
- `src/flows/aidlc/templates/inception/units-template.md`
- `src/flows/aidlc/templates/standards/catalog.yaml`
- `src/flows/aidlc/templates/standards/coding-standards.guide.md`
- `src/flows/aidlc/templates/standards/data-stack.guide.md`
- `src/flows/aidlc/templates/standards/decision-index-template.md`
- `src/flows/aidlc/templates/standards/tech-stack.guide.md`
- `src/flows/fire/agents/builder/skills/code-review/SKILL.md`
- `src/flows/fire/agents/builder/skills/code-review/references/auto-fix-rules.md`
- `src/flows/fire/agents/builder/skills/code-review/references/review-categories.md`
- `src/flows/fire/agents/builder/skills/code-review/templates/review-report.md.hbs`
- `src/flows/fire/agents/builder/skills/run-execute/SKILL.md`
- `src/flows/fire/agents/builder/skills/run-execute/scripts/complete-run.cjs`
- `src/flows/fire/agents/builder/skills/run-execute/scripts/init-run.cjs`
- `src/flows/fire/agents/builder/skills/run-execute/scripts/update-checkpoint.cjs`
- `src/flows/fire/agents/builder/skills/run-execute/scripts/update-phase.cjs`
- `src/flows/fire/agents/builder/skills/run-execute/templates/plan.md.hbs`
- `src/flows/fire/agents/builder/skills/run-execute/templates/test-report.md.hbs`
- `src/flows/fire/agents/builder/skills/run-plan/SKILL.md`
- `src/flows/fire/agents/builder/skills/run-status/SKILL.md`
- `src/flows/fire/agents/builder/skills/walkthrough-generate/SKILL.md`
- `src/flows/fire/agents/builder/skills/walkthrough-generate/templates/walkthrough.md.hbs`
- `src/flows/fire/agents/orchestrator/skills/project-init/SKILL.md`
- `src/flows/fire/agents/orchestrator/skills/project-init/templates/coding-standards.md.hbs`
- `src/flows/fire/agents/orchestrator/skills/project-init/templates/constitution.md.hbs`
- `src/flows/fire/agents/orchestrator/skills/project-init/templates/system-architecture.md.hbs`
- `src/flows/fire/agents/orchestrator/skills/project-init/templates/tech-stack.md.hbs`
- `src/flows/fire/agents/orchestrator/skills/project-init/templates/testing-standards.md.hbs`
- `src/flows/fire/agents/orchestrator/skills/route/SKILL.md`
- `src/flows/fire/agents/orchestrator/skills/status/SKILL.md`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `src/__tests__/unit/analytics/analytics.test.ts`
- `src/__tests__/unit/architecture/bolt-type-agnostic.test.ts`
- `src/__tests__/unit/dashboard/cli-commands.test.ts`
- `src/__tests__/unit/dashboard/dashboard-aidlc-parser.test.ts`
- `src/__tests__/unit/dashboard/dashboard-approval-gate.test.ts`
- `src/__tests__/unit/dashboard/dashboard-index.test.ts`
- `src/__tests__/unit/dashboard/dashboard-simple-parser.test.ts`
- `src/__tests__/unit/dashboard/dashboard-web-server.test.ts`
- `src/__tests__/unit/dashboard/dashboard-web-snapshot.test.ts`
- `src/__tests__/unit/dashboard/git-changes.test.ts`
- `src/__tests__/unit/dashboard/tui-flow-builders.test.ts`
- `src/__tests__/unit/dashboard/tui-git-builders.test.ts`
- `src/__tests__/unit/dashboard/tui-helpers.test.ts`
- `src/__tests__/unit/dashboard/tui-overlays.test.ts`
- `src/__tests__/unit/dashboard/tui-preview.test.ts`
- `src/__tests__/unit/dashboard/tui-row-builders.test.ts`
- `src/__tests__/unit/dashboard/tui-sections.test.ts`
- `src/__tests__/unit/dashboard/worktrees.test.ts`
- `src/__tests__/unit/fire/complete-run.test.ts`
- `src/__tests__/unit/fire/dashboard-detect.test.ts`
- `src/__tests__/unit/fire/dashboard-parser.test.ts`
- `src/__tests__/unit/fire/dashboard-render.test.ts`
- `src/__tests__/unit/fire/dashboard-runtime.test.ts`
- `src/__tests__/unit/fire/init-run.test.ts`
- `src/__tests__/unit/fire/update-checkpoint.test.ts`
- `src/__tests__/unit/flow-consistency/code-examples.test.ts`
- `src/__tests__/unit/flow-consistency/placeholder-consistency.test.ts`
- `src/__tests__/unit/flow-consistency/reference-integrity.test.ts`
- `src/__tests__/unit/flow-consistency/simple-flow-consistency.test.ts`
- `src/__tests__/unit/flow-consistency/terminology-consistency.test.ts`
- `src/__tests__/unit/schema-validation/markdown-schema.test.ts`
- `src/__tests__/unit/schema-validation/yaml-config-schema.test.ts`
- `vs-code-extension/src/test/analytics/engagementEvents.test.ts`
- `vs-code-extension/src/test/analytics/ideDetection.test.ts`
- `vs-code-extension/src/test/analytics/lifecycleEvents.test.ts`
- `vs-code-extension/src/test/analytics/machineId.test.ts`
- `vs-code-extension/src/test/analytics/privacyControls.test.ts`
- `vs-code-extension/src/test/analytics/projectMetricsEvents.test.ts`
- `vs-code-extension/src/test/analytics/tracker.test.ts`
- `vs-code-extension/src/test/parser/activityFeed.test.ts`
- `vs-code-extension/src/test/parser/artifactParser.test.ts`
- `vs-code-extension/src/test/parser/dependencyComputation.test.ts`
- `vs-code-extension/src/test/parser/frontmatterParser.test.ts`
- `vs-code-extension/src/test/parser/memoryBankSchema.test.ts`
- `vs-code-extension/src/test/parser/projectDetection.test.ts`
- `vs-code-extension/src/test/runTest.ts`
- `vs-code-extension/src/test/sidebar/treeBuilder.test.ts`
- `vs-code-extension/src/test/sidebar/types.test.ts`
- `vs-code-extension/src/test/sidebar/webviewContent.test.ts`
- `vs-code-extension/src/test/sidebar/webviewMessaging.test.ts`
- `vs-code-extension/src/test/sidebar/webviewProvider.test.ts`
- `vs-code-extension/src/test/state/selectors.test.ts`
- `vs-code-extension/src/test/state/stateStore.test.ts`
- `vs-code-extension/src/test/watcher/debounce.test.ts`
- `vs-code-extension/src/test/watcher/fileWatcher.test.ts`

### CI/Docker 후보

- `.github/workflows/claude.yml`
- `.github/workflows/npm-package-ci.yml`
- `.github/workflows/npm-package-dev.yml`
- `.github/workflows/npm-package-release.yml`
- `.github/workflows/tweet-changelog.yml`
- `.github/workflows/vscode-publish.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 439 |
| .ts | 167 |
| .js | 53 |
| .mdx | 50 |
| .png | 33 |
| .html | 18 |
| .yaml | 17 |
| .hbs | 15 |
| .json | 13 |
| .cjs | 9 |
| .svg | 7 |
| .pdf | 6 |
| .yml | 6 |
| .jpeg | 3 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `scripts/ 내부 책임 분리`
- `memory-bank/ 내부 책임 분리`
- `memory-bank/intents/ 내부 책임 분리`
- `vs-code-extension/ 내부 책임 분리`
- `.claude/FIRE_FLOW_DESIGN.md 스펙/명령 의미`
- `.claude/commands/compare-specs.md 스펙/명령 의미`
- `.claude/commands/specsmd-agent.md 스펙/명령 의미`
- `.claude/commands/specsmd-construction-agent.md 스펙/명령 의미`
- `.claude/commands/specsmd-inception-agent.md 스펙/명령 의미`
- `package.json 실행 스크립트와 패키지 경계`
- `src/package.json 실행 스크립트와 패키지 경계`
- `src/tsconfig.json 실행 스크립트와 패키지 경계`
- `vs-code-extension/package.json 실행 스크립트와 패키지 경계`
- `vs-code-extension/tsconfig.json 실행 스크립트와 패키지 경계`

