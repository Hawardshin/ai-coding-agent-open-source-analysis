# neomjs/neo 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/neomjs__neo |
| remote | https://github.com/neomjs/neo |
| HEAD | 2032eb22 (2026-06-17) chore(data): Hourly data sync pipeline update [skip ci] |
| branch | dev |
| groups | llm-wiki-100 |
| files | 19492 |
| dirs | 4308 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- Monorepo/workspace 구조가 보이며 여러 패키지나 crate를 한 저장소에서 관리한다.
- 핵심 구현은 `src/`, `lib/`, `core/` 계열 디렉터리에 집중되어 있다.
- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `Neo.mjs`, `Deploy a Cross-Model AI Engineering Team on Your Own Codebase`, `The Two Hemispheres`, `🧠 The Brain — The Agent OS`, `🤖 The Body — The Application Engine`, `Quickstart`, `Who This Is For`, `Architecture`, `The Runtime`, `The Toolchain (Agent OS)`, `A Platform at Scale`, `Read Next`, `Community`, `Contributing`

> <p align="center" <img height="100"src="https //raw.githubusercontent.com/neomjs/pages/main/resources pub/images/logo/neo logo text primary.svg" alt="Neo.mjs Logo" </p </br <p align="center" <a href="https //npmcharts.com/compare/neo.mjs?minimal=true" <img src="https //img.shields.io/npm/dm/neo.mjs.svg?label=Downloads" alt="Downloads" </a <a href="https //www.npmjs.com/package/neo.mjs" <img src="https //img.shields.io/npm/v/neo.mjs.svg?logo=npm" alt="Version" </a <a href="https //www.npmjs.com/package/neo.mjs" <img src="https //img.shields.io/npm/l/neo.mjs.svg?label=License" alt="License" </a <a href="https //join.slack.com/t/neomjs/shared invite/zt 6c50ueeu 3E1~M4T9xkNnb~M prEEOA" <img src="https //img.shields.io/badge/Slack Neo.mjs brightgreen.svg?logo=slack" alt="Join the Slack channel" </a <a href="https //discord.gg/6p8paPq" <img src="https //img.shields.io/discord/65662053751416424

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .agents | dir |
| .claude | dir |
| .codex | dir |
| .gemini | dir |
| .github | dir |
| .gitignore | file |
| .husky | dir |
| .neo-ai-data | dir |
| .npmignore | file |
| AGENTS_STARTUP.md | file |
| AGENTS.md | file |
| ai | dir |
| apps | dir |
| BACKERS.md | file |
| buildScripts | dir |
| CONTRIBUTING.md | file |
| docs | dir |
| examples | dir |
| learn | dir |
| LICENSE | file |
| package-lock.json | file |
| package.json | file |
| README.md | file |
| resources | dir |
| ROADMAP.md | file |
| ServiceWorker.mjs | file |
| src | dir |
| test | dir |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| resources/ | 15358 |
| apps/ | 1558 |
| examples/ | 667 |
| test/ | 587 |
| src/ | 443 |
| ai/ | 394 |
| learn/ | 231 |
| .agents/ | 108 |
| buildScripts/ | 58 |
| .github/ | 32 |
| docs/ | 31 |
| (root) | 12 |
| .codex/ | 5 |
| .claude/ | 2 |
| .gemini/ | 2 |
| .husky/ | 2 |
| .neo-ai-data/ | 2 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| src/ | 443 | preferred |
| apps/ | 1558 | preferred |
| docs/ | 31 | preferred |
| examples/ | 667 | preferred |
| test/ | 587 | preferred |
| resources/ | 15358 | large |
| resources/content/ | 13525 | large |
| resources/content/archive/ | 12627 | large |
| apps/portal/ | 1235 | large |
| apps/portal/resources/ | 1130 | large |
| resources/examples/ | 998 | large |
| resources/examples/ai_images/ | 989 | large |
| resources/scss/ | 621 | large |
| test/playwright/ | 587 | large |
| test/playwright/unit/ | 463 | large |
| ai/ | 394 | large |
| resources/content/issues/ | 382 | large |
| resources/scss/src/ | 247 | large |
| learn/ | 231 | large |
| resources/content/pulls/ | 201 | large |
| resources/data/ | 197 | large |
| resources/data/deck/ | 195 | large |
| resources/content/release-notes/ | 168 | large |
| examples/component/ | 162 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `ai/deploy/Dockerfile`
- `ai/deploy/docker-compose.yml`
- `ai/examples/cloud-deployment/minimal-external-workspace/package.json`
- `package.json`
- `test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-custom-source/package.json`
- `test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-es5-workspace/package.json`
- `test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-neo-workspace/package.json`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| ai/examples/cloud-deployment/minimal-external-workspace/package.json | minimal-external-workspace |  | neo.mjs |
| package.json | neo.mjs | add-config, add-reactive-tags, ai:agent, ai:analyze-nl-telemetry, ai:audit-discussion-lifecycle, ai:audit-integrity, ai:backup, ai:benchmark-gemma4, ai:benchmark-setup-class, ai:bootstrap-codex-sandbox, ai:check-identity-facts, ai:check-retired-primitives, ai:check-substrate-size, ai:compact-graphlog, ai:restore, ai:build-kb-faqs |  |
| test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-custom-source/package.json | mini-custom-source |  |  |
| test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-es5-workspace/package.json | mini-es5-workspace |  |  |
| test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-neo-workspace/package.json | mini-neo-workspace |  | neo.mjs |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `.agents/skills/ideation-sandbox/graduated-records/README.md`
- `CONTRIBUTING.md`
- `README.md`
- `ai/docs/wake-prompt-landing-matrix.md`
- `ai/examples/cloud-deployment/README.md`
- `ai/examples/cloud-deployment/minimal-external-workspace/README.md`
- `ai/examples/harnessEndurance/README.md`
- `apps/colors/README.md`
- `apps/realworld2/README.md`
- `buildScripts/README.md`
- `buildScripts/docs/index/discussions.mjs`
- `buildScripts/docs/index/labels.mjs`
- `buildScripts/docs/index/pulls.mjs`
- `buildScripts/docs/index/release.mjs`
- `buildScripts/docs/index/tickets.mjs`
- `buildScripts/docs/jsdoc-x/README.md`
- `buildScripts/docs/jsdoc-x/index.mjs`
- `buildScripts/docs/jsdoc-x/runner.mjs`
- `buildScripts/docs/jsdoc-x/sorter.mjs`
- `buildScripts/docs/jsdoc-x/transformer.mjs`
- `buildScripts/docs/jsdoc-x/utils.mjs`
- `buildScripts/docs/jsdocx.mjs`
- `buildScripts/docs/rebuildContentIndexesAndSeo.mjs`
- `buildScripts/docs/seo/copy.mjs`
- `buildScripts/docs/seo/generate.mjs`
- `docs/app.mjs`
- `docs/app/model/Api.mjs`
- `docs/app/model/Example.mjs`
- `docs/app/store/Api.mjs`
- `docs/app/store/Examples.mjs`
- `docs/app/view/ApiTreeList.mjs`
- `docs/app/view/ContentTabContainer.mjs`
- `docs/app/view/ExamplesTreeList.mjs`
- `docs/app/view/HeaderContainer.mjs`
- `docs/app/view/MainContainer.mjs`
- `docs/app/view/MainContainerController.mjs`
- `docs/app/view/classdetails/HeaderComponent.mjs`
- `docs/app/view/classdetails/HierarchyTreeList.mjs`
- `docs/app/view/classdetails/MainContainer.mjs`
- `docs/app/view/classdetails/MainContainerController.mjs`
- `docs/app/view/classdetails/MembersList.mjs`
- `docs/app/view/classdetails/SourceViewComponent.mjs`
- `docs/app/view/classdetails/TutorialComponent.mjs`
- `docs/examples.json`
- `docs/index.html`
- `docs/neo-config.json`
- `docs/resources/images/tutorials/create-app-choose-name.png`
- `docs/resources/images/tutorials/create-app-choose-theme.png`
- `docs/resources/images/tutorials/create-app-files.png`
- `docs/resources/images/tutorials/todolist-v1-files.png`
- ... 30 more

### 에이전트 지침 후보

- `.agents/skills/architecture-pre-flight/SKILL.md`
- `.agents/skills/architecture-pre-flight/references/architecture-pre-flight-workflow.md`
- `.agents/skills/blocked-task-state/SKILL.md`
- `.agents/skills/blocked-task-state/references/blocked-task-state-workflow.md`
- `.agents/skills/context-recovery/SKILL.md`
- `.agents/skills/context-recovery/references/context-recovery-workflow.md`
- `.agents/skills/create-skill/SKILL.md`
- `.agents/skills/create-skill/references/skill-authoring-guide.md`
- `.agents/skills/debugging-antigravity/SKILL.md`
- `.agents/skills/debugging-antigravity/references/debugging-guide.md`
- `.agents/skills/epic-create/SKILL.md`
- `.agents/skills/epic-create/references/epic-create-workflow.md`
- `.agents/skills/epic-resolution/SKILL.md`
- `.agents/skills/epic-resolution/references/epic-resolution-workflow.md`
- `.agents/skills/epic-review/SKILL.md`
- `.agents/skills/epic-review/assets/epic-review-comment-template.md`
- `.agents/skills/epic-review/references/epic-review-workflow.md`
- `.agents/skills/hostile-content-quarantine/SKILL.md`
- `.agents/skills/hostile-content-quarantine/references/hostile-content-quarantine-workflow.md`
- `.agents/skills/ideation-sandbox/SKILL.md`
- `.agents/skills/ideation-sandbox/audits/consensus-mandate.md`
- `.agents/skills/ideation-sandbox/audits/discussion-lifecycle-closure.md`
- `.agents/skills/ideation-sandbox/audits/double-diamond-divergence-guard.md`
- `.agents/skills/ideation-sandbox/audits/pre-authoring-adjacency-sweep.md`
- `.agents/skills/ideation-sandbox/audits/tier-2-revalidation.md`
- `.agents/skills/ideation-sandbox/graduated-records/README.md`
- `.agents/skills/ideation-sandbox/graduated-records/discussion_11171_update.md`
- `.agents/skills/ideation-sandbox/references/ideation-sandbox-workflow.md`
- `.agents/skills/identity-firewall/SKILL.md`
- `.agents/skills/identity-firewall/audits/channel-separation.md`
- `.agents/skills/industry-friction-radar/SKILL.md`
- `.agents/skills/industry-friction-radar/references/industry-friction-radar-workflow.md`
- `.agents/skills/lane-intent/SKILL.md`
- `.agents/skills/lane-intent/references/lane-intent-protocol.md`
- `.agents/skills/lead-role/SKILL.md`
- `.agents/skills/lead-role/references/lead-role-mode.md`
- `.agents/skills/memory-mining/SKILL.md`
- `.agents/skills/memory-mining/references/memory-mining-protocol.md`
- `.agents/skills/neo-identity-update/SKILL.md`
- `.agents/skills/neo-identity-update/references/affected-areas-map.md`
- `.agents/skills/neo-identity-update/references/cta-governance.md`
- `.agents/skills/neo-identity-update/references/facts-ledger.md`
- `.agents/skills/neo-identity-update/references/framing-governance.md`
- `.agents/skills/neo-identity-update/references/update-protocol.md`
- `.agents/skills/neural-link/SKILL.md`
- `.agents/skills/neural-link/references/operational-handbook.md`
- `.agents/skills/peer-naming/SKILL.md`
- `.agents/skills/peer-naming/references/peer-naming-workflow.md`
- `.agents/skills/peer-role/SKILL.md`
- `.agents/skills/peer-role/references/peer-role-mode.md`
- `.agents/skills/post-review-pickup/SKILL.md`
- `.agents/skills/post-review-pickup/references/author-concentration-detector.md`
- `.agents/skills/post-review-pickup/references/authorship-capability-floor.md`
- `.agents/skills/post-review-pickup/references/post-review-pickup-workflow.md`
- `.agents/skills/post-review-pickup/references/pre-review-intake-lane-gate.md`
- `.agents/skills/pr-review/SKILL.md`
- `.agents/skills/pr-review/assets/pr-review-followup-template.md`
- `.agents/skills/pr-review/assets/pr-review-template.md`
- `.agents/skills/pr-review/audits/ci-security-audit.md`
- `.agents/skills/pr-review/audits/cycle-1-premise-preflight.md`
- `.agents/skills/pr-review/audits/review-cost-circuit-breaker.md`
- `.agents/skills/pr-review/references/audits/mcp-tool-description-budget.md`
- `.agents/skills/pr-review/references/close-target-remediation.md`
- `.agents/skills/pr-review/references/measurement-methodology.md`
- `.agents/skills/pr-review/references/pr-review-guide.md`
- `.agents/skills/pr-review/references/typed-calibration-loop.md`
- `.agents/skills/pull-request/SKILL.md`
- `.agents/skills/pull-request/assets/review-response-template.md`
- `.agents/skills/pull-request/audits/branch-discipline-check.md`
- `.agents/skills/pull-request/audits/consensus-gate-mirror.md`
- `.agents/skills/pull-request/references/ci-green-review-routing.md`
- `.agents/skills/pull-request/references/corrective-authorship-rotation.md`
- `.agents/skills/pull-request/references/env-var-rename-rule.md`
- `.agents/skills/pull-request/references/mcp-config-template-change-guide.md`
- `.agents/skills/pull-request/references/post-review-followup-surfacing.md`
- `.agents/skills/pull-request/references/pull-request-workflow.md`
- `.agents/skills/pull-request/references/review-response-protocol.md`
- `.agents/skills/pull-request/references/sync-all-constraints.md`
- `.agents/skills/self-repair/SKILL.md`
- `.agents/skills/self-repair/references/self-repair-protocol.md`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `.agents/skills/architecture-pre-flight/SKILL.md`
- `.agents/skills/architecture-pre-flight/references/architecture-pre-flight-workflow.md`
- `.agents/skills/blocked-task-state/SKILL.md`
- `.agents/skills/blocked-task-state/references/blocked-task-state-workflow.md`
- `.agents/skills/context-recovery/SKILL.md`
- `.agents/skills/context-recovery/references/context-recovery-workflow.md`
- `.agents/skills/create-skill/SKILL.md`
- `.agents/skills/create-skill/references/skill-authoring-guide.md`
- `.agents/skills/debugging-antigravity/SKILL.md`
- `.agents/skills/debugging-antigravity/references/debugging-guide.md`
- `.agents/skills/epic-create/SKILL.md`
- `.agents/skills/epic-create/references/epic-create-workflow.md`
- `.agents/skills/epic-resolution/SKILL.md`
- `.agents/skills/epic-resolution/references/epic-resolution-workflow.md`
- `.agents/skills/epic-review/SKILL.md`
- `.agents/skills/epic-review/assets/epic-review-comment-template.md`
- `.agents/skills/epic-review/references/epic-review-workflow.md`
- `.agents/skills/hostile-content-quarantine/SKILL.md`
- `.agents/skills/hostile-content-quarantine/references/hostile-content-quarantine-workflow.md`
- `.agents/skills/ideation-sandbox/SKILL.md`
- `.agents/skills/ideation-sandbox/audits/consensus-mandate.md`
- `.agents/skills/ideation-sandbox/audits/discussion-lifecycle-closure.md`
- `.agents/skills/ideation-sandbox/audits/double-diamond-divergence-guard.md`
- `.agents/skills/ideation-sandbox/audits/pre-authoring-adjacency-sweep.md`
- `.agents/skills/ideation-sandbox/audits/tier-2-revalidation.md`
- `.agents/skills/ideation-sandbox/graduated-records/README.md`
- `.agents/skills/ideation-sandbox/graduated-records/discussion_11171_update.md`
- `.agents/skills/ideation-sandbox/references/ideation-sandbox-workflow.md`
- `.agents/skills/identity-firewall/SKILL.md`
- `.agents/skills/identity-firewall/audits/channel-separation.md`
- `.agents/skills/industry-friction-radar/SKILL.md`
- `.agents/skills/industry-friction-radar/references/industry-friction-radar-workflow.md`
- `.agents/skills/lane-intent/SKILL.md`
- `.agents/skills/lane-intent/references/lane-intent-protocol.md`
- `.agents/skills/lead-role/SKILL.md`
- `.agents/skills/lead-role/references/lead-role-mode.md`
- `.agents/skills/memory-mining/SKILL.md`
- `.agents/skills/memory-mining/references/memory-mining-protocol.md`
- `.agents/skills/neo-identity-update/SKILL.md`
- `.agents/skills/neo-identity-update/references/affected-areas-map.md`
- `.agents/skills/neo-identity-update/references/cta-governance.md`
- `.agents/skills/neo-identity-update/references/facts-ledger.md`
- `.agents/skills/neo-identity-update/references/framing-governance.md`
- `.agents/skills/neo-identity-update/references/update-protocol.md`
- `.agents/skills/neural-link/SKILL.md`
- `.agents/skills/neural-link/references/operational-handbook.md`
- `.agents/skills/peer-naming/SKILL.md`
- `.agents/skills/peer-naming/references/peer-naming-workflow.md`
- `.agents/skills/peer-role/SKILL.md`
- `.agents/skills/peer-role/references/peer-role-mode.md`
- `.agents/skills/post-review-pickup/SKILL.md`
- `.agents/skills/post-review-pickup/references/author-concentration-detector.md`
- `.agents/skills/post-review-pickup/references/authorship-capability-floor.md`
- `.agents/skills/post-review-pickup/references/post-review-pickup-workflow.md`
- `.agents/skills/post-review-pickup/references/pre-review-intake-lane-gate.md`
- `.agents/skills/pr-review/SKILL.md`
- `.agents/skills/pr-review/assets/pr-review-followup-template.md`
- `.agents/skills/pr-review/assets/pr-review-template.md`
- `.agents/skills/pr-review/audits/ci-security-audit.md`
- `.agents/skills/pr-review/audits/cycle-1-premise-preflight.md`
- `.agents/skills/pr-review/audits/review-cost-circuit-breaker.md`
- `.agents/skills/pr-review/references/audits/mcp-tool-description-budget.md`
- `.agents/skills/pr-review/references/close-target-remediation.md`
- `.agents/skills/pr-review/references/measurement-methodology.md`
- `.agents/skills/pr-review/references/pr-review-guide.md`
- `.agents/skills/pr-review/references/typed-calibration-loop.md`
- `.agents/skills/pull-request/SKILL.md`
- `.agents/skills/pull-request/assets/review-response-template.md`
- `.agents/skills/pull-request/audits/branch-discipline-check.md`
- `.agents/skills/pull-request/audits/consensus-gate-mirror.md`
- `.agents/skills/pull-request/references/ci-green-review-routing.md`
- `.agents/skills/pull-request/references/corrective-authorship-rotation.md`
- `.agents/skills/pull-request/references/env-var-rename-rule.md`
- `.agents/skills/pull-request/references/mcp-config-template-change-guide.md`
- `.agents/skills/pull-request/references/post-review-followup-surfacing.md`
- `.agents/skills/pull-request/references/pull-request-workflow.md`
- `.agents/skills/pull-request/references/review-response-protocol.md`
- `.agents/skills/pull-request/references/sync-all-constraints.md`
- `.agents/skills/self-repair/SKILL.md`
- `.agents/skills/self-repair/references/self-repair-protocol.md`
- `.agents/skills/session-sunset/SKILL.md`
- `.agents/skills/session-sunset/references/session-sunset-workflow.md`
- `.agents/skills/skills.manifest.json`
- `.agents/skills/skills.manifest.schema.json`
- `.agents/skills/structural-pre-flight/SKILL.md`
- `.agents/skills/structural-pre-flight/references/structural-pre-flight-workflow.md`
- `.agents/skills/tech-debt-radar/SKILL.md`
- `.agents/skills/tech-debt-radar/references/tech-debt-radar-guide.md`
- `.agents/skills/ticket-create/SKILL.md`
- `.agents/skills/ticket-create/references/ticket-create-workflow.md`
- `.agents/skills/ticket-intake/SKILL.md`
- `.agents/skills/ticket-intake/references/adr-successor-risk-audit.md`
- `.agents/skills/ticket-intake/references/substrate-sufficiency-audit.md`
- `.agents/skills/ticket-intake/references/successor-risk-audit.md`
- `.agents/skills/ticket-intake/references/ticket-intake-workflow.md`
- `.agents/skills/ticket-triage/SKILL.md`
- `.agents/skills/ticket-triage/references/ticket-triage-workflow.md`
- `.agents/skills/turn-memory-pre-flight/SKILL.md`
- `.agents/skills/turn-memory-pre-flight/references/turn-memory-pre-flight-workflow.md`
- `.agents/skills/unit-test/SKILL.md`
- ... 5 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `test/playwright/ai/neural-link.spec.mjs`
- `test/playwright/component/apps/empty-viewport/app.mjs`
- `test/playwright/component/apps/empty-viewport/index.html`
- `test/playwright/component/apps/empty-viewport/neo-config.json`
- `test/playwright/component/button/Base.spec.mjs`
- `test/playwright/component/component/Base.spec.mjs`
- `test/playwright/component/component/DateSelector.spec.mjs`
- `test/playwright/component/component/Image.spec.mjs`
- `test/playwright/component/container/AtomicMoves.spec.mjs`
- `test/playwright/component/container/Fragment.spec.mjs`
- `test/playwright/component/container/FragmentDeltaUpdates.spec.mjs`
- `test/playwright/component/container/FragmentLifecycle.spec.mjs`
- `test/playwright/component/form/field/ComboBox.spec.mjs`
- `test/playwright/component/form/field/Number.spec.mjs`
- `test/playwright/component/form/field/Text.spec.mjs`
- `test/playwright/component/form/field/TextArea.spec.mjs`
- `test/playwright/component/list/Chip.spec.mjs`
- `test/playwright/component/testing/Fixtures.spec.mjs`
- `test/playwright/e2e/AgentOSCockpit.spec.mjs`
- `test/playwright/e2e/ButtonBaseNL.spec.mjs`
- `test/playwright/e2e/DeltaCoherenceRegistryNL.spec.mjs`
- `test/playwright/e2e/FirstWidgetChatIntake.spec.mjs`
- `test/playwright/e2e/FirstWidgetEditGrammar.spec.mjs`
- `test/playwright/e2e/FirstWidgetEvidenceNeuralLink.spec.mjs`
- `test/playwright/e2e/FirstWidgetEvidencePane.spec.mjs`
- `test/playwright/e2e/GridBigDataMultiBodyNL.spec.mjs`
- `test/playwright/e2e/GridBigDataNL.spec.mjs`
- `test/playwright/e2e/GridColumnCrossBodyDnD.spec.mjs`
- `test/playwright/e2e/GridColumnOverdragScroll.spec.mjs`
- `test/playwright/e2e/GridHeaderCellRectSync.spec.mjs`
- `test/playwright/e2e/GridLockedCellHorizontalStability.spec.mjs`
- `test/playwright/e2e/GridLockedDnDDuplication.spec.mjs`
- `test/playwright/e2e/GridLockedRegionRowRender.spec.mjs`
- `test/playwright/e2e/GridProfile.spec.mjs`
- `test/playwright/e2e/GridRowPinning.spec.mjs`
- `test/playwright/e2e/GridScrollBenchmark.spec.mjs`
- `test/playwright/e2e/GridSelectionMultiBody.spec.mjs`
- `test/playwright/e2e/GridThumbDrag.spec.mjs`
- `test/playwright/e2e/GridThumbDragDevIndex.spec.mjs`
- `test/playwright/e2e/GridThumbDragPause.spec.mjs`
- `test/playwright/e2e/GridTree.spec.mjs`
- `test/playwright/e2e/GridTreeBigData.spec.mjs`
- `test/playwright/e2e/HarnessEnduranceBenchmark.spec.mjs`
- `test/playwright/e2e/LivePreviewMultiWindow.spec.mjs`
- `test/playwright/e2e/MarkdownStreamingCoherenceNL.spec.mjs`
- `test/playwright/e2e/NeuralLink.spec.mjs`
- `test/playwright/e2e/NeuralLinkChildappConnect.spec.mjs`
- `test/playwright/e2e/NeuralLinkCreateComponent.spec.mjs`
- `test/playwright/e2e/NeuralLinkCreateComponentMultiWindow.spec.mjs`
- `test/playwright/e2e/NeuralLinkCreateGrid.spec.mjs`
- `test/playwright/e2e/NeuralLinkCreateInstance.spec.mjs`
- `test/playwright/e2e/NeuralLinkFixture.spec.mjs`
- `test/playwright/e2e/NeuralLinkRedo.spec.mjs`
- `test/playwright/e2e/NeuralLinkRemoveComponent.spec.mjs`
- `test/playwright/e2e/WriteGuardDisconnectReleaseNL.spec.mjs`
- `test/playwright/e2e/WriteGuardMultiWriterNL.spec.mjs`
- `test/playwright/e2e/custom-reporter.js`
- `test/playwright/e2e/utils/browser-test-helpers.mjs`
- `test/playwright/fixtures.mjs`
- `test/playwright/fixtures/aiConfigDefaults.mjs`
- `test/playwright/fixtures/knowledgeBaseConfigDefaults.mjs`
- `test/playwright/integration/AdoptionLadderJourney.integration.spec.mjs`
- `test/playwright/integration/AuthRejection.integration.spec.mjs`
- `test/playwright/integration/BackupRestoreWipe.integration.spec.mjs`
- `test/playwright/integration/CloudProviderReadiness.integration.spec.mjs`
- `test/playwright/integration/CrossTenantIsolation.integration.spec.mjs`
- `test/playwright/integration/HeartbeatPropagation.integration.spec.mjs`
- `test/playwright/integration/KBAuthRejection.integration.spec.mjs`
- `test/playwright/integration/KBBackupRestoreWipe.integration.spec.mjs`
- `test/playwright/integration/KBCrossTenantIsolation.integration.spec.mjs`
- `test/playwright/integration/KBHeartbeatPropagation.integration.spec.mjs`
- `test/playwright/integration/KBOidcAuth.integration.spec.mjs`
- `test/playwright/integration/KBRemoteMcpTransport.integration.spec.mjs`
- `test/playwright/integration/KBTeamPrivateRetrieval.integration.spec.mjs`
- `test/playwright/integration/OidcAuth.integration.spec.mjs`
- `test/playwright/integration/RemoteMcpTransport.integration.spec.mjs`
- `test/playwright/integration/TeamPrivateRetrieval.integration.spec.mjs`
- `test/playwright/integration/ai/daemons/workspaceSafety.spec.mjs`
- `test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-cpp-workspace/CMakeLists.txt`
- `test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-cpp-workspace/README.md`
- ... 40 more

### CI/Docker 후보

- `.github/workflows/agent-pr-body-lint.yml`
- `.github/workflows/agent-pr-review-body-lint.yml`
- `.github/workflows/aiconfig-test-mutation-lint.yml`
- `.github/workflows/check-examples-body-only.yml`
- `.github/workflows/check-retired-primitives.yml`
- `.github/workflows/close-inactive-issues.yml`
- `.github/workflows/codeql-analysis.yml`
- `.github/workflows/config-template-ssot-lint.yml`
- `.github/workflows/data-sync-pipeline.yml`
- `.github/workflows/discussion-lifecycle-audit.yml`
- `.github/workflows/jsdoc-type-lint.yml`
- `.github/workflows/mcp-test-location-lint.yml`
- `.github/workflows/npm-publish.yml`
- `.github/workflows/pr-base-guard.yml`
- `.github/workflows/prevent-reopen.yml`
- `.github/workflows/skill-manifest-lint.yml`
- `.github/workflows/substrate-size-guard.yml`
- `.github/workflows/test.yml`
- `.github/workflows/tree-json-lint.yml`
- `ai/deploy/Dockerfile`
- `ai/deploy/docker-compose.dev.yml`
- `ai/deploy/docker-compose.test.yml`
- `ai/deploy/docker-compose.yml`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .md | 14104 |
| .mjs | 2173 |
| .json | 1341 |
| .jpg | 990 |
| .scss | 621 |
| .html | 154 |
| .yml | 23 |
| .svg | 15 |
| .png | 11 |
| .yaml | 10 |
| .jsonl | 9 |
| .js | 7 |
| .css | 4 |
| .proto | 4 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `src/ 내부 책임 분리`
- `apps/ 내부 책임 분리`
- `docs/ 내부 책임 분리`
- `examples/ 내부 책임 분리`
- `test/ 내부 책임 분리`
- `.agents/skills/architecture-pre-flight/SKILL.md 스펙/명령 의미`
- `.agents/skills/architecture-pre-flight/references/architecture-pre-flight-workflow.md 스펙/명령 의미`
- `.agents/skills/blocked-task-state/SKILL.md 스펙/명령 의미`
- `.agents/skills/blocked-task-state/references/blocked-task-state-workflow.md 스펙/명령 의미`
- `.agents/skills/context-recovery/SKILL.md 스펙/명령 의미`
- `ai/deploy/Dockerfile 실행 스크립트와 패키지 경계`
- `ai/deploy/docker-compose.yml 실행 스크립트와 패키지 경계`
- `ai/examples/cloud-deployment/minimal-external-workspace/package.json 실행 스크립트와 패키지 경계`
- `package.json 실행 스크립트와 패키지 경계`
- `test/playwright/integration/ai/kb-ingestion/fixtures/external-workspaces/mini-custom-source/package.json 실행 스크립트와 패키지 경계`

