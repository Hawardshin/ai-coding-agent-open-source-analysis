# matevip/mateclaw 구조 분석

생성일: 2026-06-17T22:56:52.162Z

## 기본 정보

| 항목 | 값 |
| --- | --- |
| local path | sources/matevip__mateclaw |
| remote | https://github.com/matevip/mateclaw |
| HEAD | 8f8d43d (2026-06-18) fix(db): renumber webchat migrations to V151/V152 to avoid version collision |
| branch | dev |
| groups | llm-wiki-100 |
| files | 2899 |
| dirs | 705 |
| stack | Node/TypeScript/JavaScript |

## 구조 해석

- 문서 표면이 크므로 사용법, 설계 배경, 운영 절차가 코드와 함께 관리된다.
- 스펙/템플릿/명령/스킬 아티팩트가 있어 에이전트나 SDD 워크플로우가 저장소 구조의 일부다.
- AGENTS/CLAUDE/CODEX/MCP/skill 계열 파일이 있어 AI 도구가 읽는 지침 표면을 제공한다.
- 테스트 파일이 충분히 노출되어 기능 검증과 회귀 검증 흐름을 추적할 수 있다.
- CI/Docker/배포 설정이 포함되어 로컬 실행 외 운영 검증 경로도 확인 가능하다.

## README 신호

- 파일: `README.md`
- 주요 heading: `MateClaw`, `Three things that make it different`, `1 · Your AI doesn't die when a model does`, `2 · Knowledge that links itself`, `3 · One product, five surfaces`, `What's in the box`, `Digital employees, not chatbots`, `Knowledge & memory`, `Skills · MCP · ACP — three ways to extend capability`, `Business orchestration (1.3.0+)`, `You see what every employee is doing`, `Multimodal creation`, `Enterprise-ready`, `AI is becoming infrastructure`, `Why MateClaw`, `Quick start`, `Backend`, `Frontend`

> <div align="center" <p align="center" <img src="mateclaw ui/public/logo/mateclaw logo s.png" alt="MateClaw Logo" width="120" </p MateClaw <p align="center" <b Your second brain</b </p <p align="center" <sub <b Agent Harness · Spring Boot inside · One JAR to ship</b </sub </p [Website] [Live Demo] [Documentation] [中文] </div <p align="center" <img src="assets/images/preview.png" alt="MateClaw Preview" width="800" </p Other personal AI agents are built for one person. MateClaw is the one your IT department can actually sign off on. Multi user workspaces. Approval gated sensitive actions. Full audit trail. Spring Boot Actuator health monitoring. Per channel error isolation so one chat platform's outage doesn't take down the rest. One JAR on your own machine, zero data egress. And underneath, a real agent harness. ReAct + Plan and Execute on a StateGraph runtime — not a one shot RAG call dres

## 루트 엔트리

| 이름 | 타입 |
| --- | --- |
| .dockerignore | file |
| .env.example | file |
| .github | dir |
| .gitignore | file |
| assets | dir |
| docker | dir |
| docker-compose.yml | file |
| docs | dir |
| LICENSE | file |
| mateclaw-plugin-api | dir |
| mateclaw-plugin-sample | dir |
| mateclaw-server | dir |
| mateclaw-ui | dir |
| mateclaw-webchat | dir |
| pom.xml | file |
| README_zh.md | file |
| README.md | file |

## 큰 디렉터리

| 디렉터리 | 파일수 |
| --- | --- |
| mateclaw-server/ | 2543 |
| mateclaw-ui/ | 318 |
| (root) | 8 |
| mateclaw-plugin-api/ | 8 |
| mateclaw-webchat/ | 6 |
| .github/ | 5 |
| assets/ | 5 |
| mateclaw-plugin-sample/ | 3 |
| docker/ | 2 |
| docs/ | 1 |

## 핵심 디렉터리 후보

| 디렉터리 | 파일수 | 근거 |
| --- | --- | --- |
| docs/ | 1 | preferred |
| mateclaw-server/ | 2543 | large |
| mateclaw-server/src/ | 2540 | large |
| mateclaw-server/src/main/ | 2062 | large |
| mateclaw-server/src/test/ | 478 | large |
| mateclaw-ui/ | 318 | large |
| mateclaw-ui/src/ | 267 | large |
| mateclaw-ui/src/views/ | 122 | large |
| mateclaw-ui/src/components/ | 59 | large |
| mateclaw-ui/public/ | 40 | large |
| mateclaw-ui/src/composables/ | 38 | large |
| mateclaw-ui/public/icons/ | 37 | large |
| mateclaw-ui/src/assets/ | 17 | large |
| mateclaw-ui/src/utils/ | 12 | large |
| mateclaw-plugin-api/ | 8 | large |
| mateclaw-ui/src/stores/ | 8 | large |
| mateclaw-plugin-api/src/ | 7 | large |
| mateclaw-plugin-api/src/main/ | 7 | large |
| mateclaw-webchat/ | 6 | large |
| .github/ | 5 | large |
| .github/ISSUE_TEMPLATE/ | 5 | large |
| assets/ | 5 | large |
| mateclaw-plugin-sample/ | 3 | large |
| mateclaw-ui/public/logo/ | 3 | large |

## Manifest / 런타임 표면

### Manifest 파일

- `docker-compose.yml`
- `docker/searxng/Dockerfile`
- `mateclaw-server/Dockerfile`
- `mateclaw-ui/package.json`
- `mateclaw-ui/pnpm-lock.yaml`
- `mateclaw-ui/tsconfig.json`
- `mateclaw-ui/vite.config.ts`
- `mateclaw-ui/yarn.lock`
- `mateclaw-webchat/package.json`
- `mateclaw-webchat/pnpm-lock.yaml`
- `mateclaw-webchat/tsconfig.json`
- `mateclaw-webchat/vite.config.ts`

### package.json

| 경로 | 이름 | scripts | deps |
| --- | --- | --- | --- |
| mateclaw-ui/package.json | mateclaw-ui | dev, build, preview, lint, lint:precision, test, test:watch | @element-plus/icons-vue, @google/model-viewer, @guolao/vue-monaco-editor, @intlify/core-base, @vue-flow/background, @vue-flow/controls, @vue-flow/core, @vue-flow/minimap, axios, cytoscape, cytoscape-cose-bilkent, dagre, dayjs, dompurify |
| mateclaw-webchat/package.json | @mateclaw/webchat | dev, build, preview |  |

## 문서 / 에이전트 / 스펙 아티팩트

### 문서 후보

- `README.md`
- `docs/fix-duplicate-raws.sql`
- `mateclaw-server/src/main/java/vip/mate/doc/DocController.java`
- `mateclaw-server/src/main/resources/docs/en/acp.md`
- `mateclaw-server/src/main/resources/docs/en/agents.md`
- `mateclaw-server/src/main/resources/docs/en/ambient-ai.md`
- `mateclaw-server/src/main/resources/docs/en/api.md`
- `mateclaw-server/src/main/resources/docs/en/architecture.md`
- `mateclaw-server/src/main/resources/docs/en/backstage.md`
- `mateclaw-server/src/main/resources/docs/en/channels.md`
- `mateclaw-server/src/main/resources/docs/en/chat.md`
- `mateclaw-server/src/main/resources/docs/en/config.md`
- `mateclaw-server/src/main/resources/docs/en/console.md`
- `mateclaw-server/src/main/resources/docs/en/contributing.md`
- `mateclaw-server/src/main/resources/docs/en/desktop.md`
- `mateclaw-server/src/main/resources/docs/en/docker-deploy.md`
- `mateclaw-server/src/main/resources/docs/en/doctor.md`
- `mateclaw-server/src/main/resources/docs/en/faq.md`
- `mateclaw-server/src/main/resources/docs/en/goals.md`
- `mateclaw-server/src/main/resources/docs/en/index.md`
- `mateclaw-server/src/main/resources/docs/en/intro.md`
- `mateclaw-server/src/main/resources/docs/en/mcp.md`
- `mateclaw-server/src/main/resources/docs/en/memory.md`
- `mateclaw-server/src/main/resources/docs/en/model3d.md`
- `mateclaw-server/src/main/resources/docs/en/models.md`
- `mateclaw-server/src/main/resources/docs/en/multimodal.md`
- `mateclaw-server/src/main/resources/docs/en/quickstart.md`
- `mateclaw-server/src/main/resources/docs/en/releases.md`
- `mateclaw-server/src/main/resources/docs/en/roadmap.md`
- `mateclaw-server/src/main/resources/docs/en/security.md`
- `mateclaw-server/src/main/resources/docs/en/skills.md`
- `mateclaw-server/src/main/resources/docs/en/tools.md`
- `mateclaw-server/src/main/resources/docs/en/triggers.md`
- `mateclaw-server/src/main/resources/docs/en/user-guide.md`
- `mateclaw-server/src/main/resources/docs/en/wecom-tuning.md`
- `mateclaw-server/src/main/resources/docs/en/wiki.md`
- `mateclaw-server/src/main/resources/docs/en/workflow.md`
- `mateclaw-server/src/main/resources/docs/en/workspaces.md`
- `mateclaw-server/src/main/resources/docs/zh/acp.md`
- `mateclaw-server/src/main/resources/docs/zh/agents.md`
- `mateclaw-server/src/main/resources/docs/zh/ambient-ai.md`
- `mateclaw-server/src/main/resources/docs/zh/api.md`
- `mateclaw-server/src/main/resources/docs/zh/architecture.md`
- `mateclaw-server/src/main/resources/docs/zh/backstage.md`
- `mateclaw-server/src/main/resources/docs/zh/channels.md`
- `mateclaw-server/src/main/resources/docs/zh/chat.md`
- `mateclaw-server/src/main/resources/docs/zh/config.md`
- `mateclaw-server/src/main/resources/docs/zh/console.md`
- `mateclaw-server/src/main/resources/docs/zh/contributing.md`
- `mateclaw-server/src/main/resources/docs/zh/desktop-ui-hot-update.md`
- ... 30 more

### 에이전트 지침 후보

- `mateclaw-server/src/main/java/vip/mate/skill/acp/AcpSkillBridge.java`
- `mateclaw-server/src/main/java/vip/mate/skill/controller/SkillController.java`
- `mateclaw-server/src/main/java/vip/mate/skill/controller/SkillInstallController.java`
- `mateclaw-server/src/main/java/vip/mate/skill/event/SkillRemovedEvent.java`
- `mateclaw-server/src/main/java/vip/mate/skill/installer/BuiltinSkillSeedService.java`
- `mateclaw-server/src/main/java/vip/mate/skill/installer/BundleResolver.java`
- `mateclaw-server/src/main/java/vip/mate/skill/installer/GitSkillFetcher.java`
- `mateclaw-server/src/main/java/vip/mate/skill/installer/SkillHubClient.java`
- `mateclaw-server/src/main/java/vip/mate/skill/installer/SkillHubProperties.java`
- `mateclaw-server/src/main/java/vip/mate/skill/installer/SkillInstaller.java`
- `mateclaw-server/src/main/java/vip/mate/skill/installer/ZipSkillFetcher.java`
- `mateclaw-server/src/main/java/vip/mate/skill/installer/model/HubSkillInfo.java`
- `mateclaw-server/src/main/java/vip/mate/skill/installer/model/InstallRequest.java`
- `mateclaw-server/src/main/java/vip/mate/skill/installer/model/InstallResult.java`
- `mateclaw-server/src/main/java/vip/mate/skill/installer/model/InstallTask.java`
- `mateclaw-server/src/main/java/vip/mate/skill/installer/model/SkillBundle.java`
- `mateclaw-server/src/main/java/vip/mate/skill/installer/model/UpdateCheckResult.java`
- `mateclaw-server/src/main/java/vip/mate/skill/knowledge/AcpSkillWrapperToolFactory.java`
- `mateclaw-server/src/main/java/vip/mate/skill/knowledge/SkillScopedToolCallback.java`
- `mateclaw-server/src/main/java/vip/mate/skill/knowledge/WikiSkillWrapperToolFactory.java`
- `mateclaw-server/src/main/java/vip/mate/skill/lessons/SkillLessonsService.java`
- `mateclaw-server/src/main/java/vip/mate/skill/lessons/SkillLessonsTool.java`
- `mateclaw-server/src/main/java/vip/mate/skill/lessons/event/SkillLessonWrittenEvent.java`
- `mateclaw-server/src/main/java/vip/mate/skill/lifecycle/BlockedByBindingRow.java`
- `mateclaw-server/src/main/java/vip/mate/skill/lifecycle/ConfirmRequiredException.java`
- `mateclaw-server/src/main/java/vip/mate/skill/lifecycle/CuratorRunNotifier.java`
- `mateclaw-server/src/main/java/vip/mate/skill/lifecycle/LifecycleTransition.java`
- `mateclaw-server/src/main/java/vip/mate/skill/lifecycle/SkillCuratorJob.java`
- `mateclaw-server/src/main/java/vip/mate/skill/lifecycle/SkillCuratorReport.java`
- `mateclaw-server/src/main/java/vip/mate/skill/lifecycle/SkillCuratorReportStore.java`
- `mateclaw-server/src/main/java/vip/mate/skill/lifecycle/SkillCuratorRunCompletedEvent.java`
- `mateclaw-server/src/main/java/vip/mate/skill/lifecycle/SkillLifecycleAutoConfiguration.java`
- `mateclaw-server/src/main/java/vip/mate/skill/lifecycle/SkillLifecycleProperties.java`
- `mateclaw-server/src/main/java/vip/mate/skill/lifecycle/SkillLifecycleService.java`
- `mateclaw-server/src/main/java/vip/mate/skill/manifest/SkillManifest.java`
- `mateclaw-server/src/main/java/vip/mate/skill/manifest/SkillManifestParser.java`
- `mateclaw-server/src/main/java/vip/mate/skill/mcp/McpSkillBridge.java`
- `mateclaw-server/src/main/java/vip/mate/skill/model/SkillEntity.java`
- `mateclaw-server/src/main/java/vip/mate/skill/model/SkillFileEntity.java`
- `mateclaw-server/src/main/java/vip/mate/skill/repository/SkillFileMapper.java`
- `mateclaw-server/src/main/java/vip/mate/skill/repository/SkillMapper.java`
- `mateclaw-server/src/main/java/vip/mate/skill/repository/SkillSecretMapper.java`
- `mateclaw-server/src/main/java/vip/mate/skill/repository/SkillUsageStatMapper.java`
- `mateclaw-server/src/main/java/vip/mate/skill/runtime/ScriptSkillWrapperToolFactory.java`
- `mateclaw-server/src/main/java/vip/mate/skill/runtime/SkillCatalogRenderer.java`
- `mateclaw-server/src/main/java/vip/mate/skill/runtime/SkillCatalogSort.java`
- `mateclaw-server/src/main/java/vip/mate/skill/runtime/SkillCatalogSorter.java`
- `mateclaw-server/src/main/java/vip/mate/skill/runtime/SkillDependencyChecker.java`
- `mateclaw-server/src/main/java/vip/mate/skill/runtime/SkillDirectoryScanner.java`
- `mateclaw-server/src/main/java/vip/mate/skill/runtime/SkillFileAccessPolicy.java`
- `mateclaw-server/src/main/java/vip/mate/skill/runtime/SkillFrontmatterParser.java`
- `mateclaw-server/src/main/java/vip/mate/skill/runtime/SkillPackageResolver.java`
- `mateclaw-server/src/main/java/vip/mate/skill/runtime/SkillRuntimePolicy.java`
- `mateclaw-server/src/main/java/vip/mate/skill/runtime/SkillRuntimeService.java`
- `mateclaw-server/src/main/java/vip/mate/skill/runtime/SkillScriptExecutionService.java`
- `mateclaw-server/src/main/java/vip/mate/skill/runtime/SkillSecurityService.java`
- `mateclaw-server/src/main/java/vip/mate/skill/runtime/SkillValidationResult.java`
- `mateclaw-server/src/main/java/vip/mate/skill/runtime/model/ResolvedSkill.java`
- `mateclaw-server/src/main/java/vip/mate/skill/secret/SkillSecretController.java`
- `mateclaw-server/src/main/java/vip/mate/skill/secret/SkillSecretEntity.java`
- `mateclaw-server/src/main/java/vip/mate/skill/secret/SkillSecretService.java`
- `mateclaw-server/src/main/java/vip/mate/skill/service/SkillFileService.java`
- `mateclaw-server/src/main/java/vip/mate/skill/service/SkillService.java`
- `mateclaw-server/src/main/java/vip/mate/skill/synthesis/SkillSynthesisAutoConfiguration.java`
- `mateclaw-server/src/main/java/vip/mate/skill/synthesis/SkillSynthesisProperties.java`
- `mateclaw-server/src/main/java/vip/mate/skill/synthesis/SkillSynthesisService.java`
- `mateclaw-server/src/main/java/vip/mate/skill/synthesis/SkillSynthesisSuggestor.java`
- `mateclaw-server/src/main/java/vip/mate/skill/template/SkillTemplate.java`
- `mateclaw-server/src/main/java/vip/mate/skill/template/SkillTemplateController.java`
- `mateclaw-server/src/main/java/vip/mate/skill/template/SkillTemplateRegistry.java`
- `mateclaw-server/src/main/java/vip/mate/skill/template/SkillTemplateService.java`
- `mateclaw-server/src/main/java/vip/mate/skill/usage/SkillUsageService.java`
- `mateclaw-server/src/main/java/vip/mate/skill/usage/SkillUsageStatEntity.java`
- `mateclaw-server/src/main/java/vip/mate/skill/workspace/BundledSkillSyncer.java`
- `mateclaw-server/src/main/java/vip/mate/skill/workspace/SkillFileSyncer.java`
- `mateclaw-server/src/main/java/vip/mate/skill/workspace/SkillWorkspaceAutoConfiguration.java`
- `mateclaw-server/src/main/java/vip/mate/skill/workspace/SkillWorkspaceBootstrapRunner.java`
- `mateclaw-server/src/main/java/vip/mate/skill/workspace/SkillWorkspaceEvent.java`
- `mateclaw-server/src/main/java/vip/mate/skill/workspace/SkillWorkspaceManager.java`
- `mateclaw-server/src/main/java/vip/mate/skill/workspace/SkillWorkspaceProperties.java`
- ... 20 more

### 스펙/템플릿/명령/스킬 후보

- `mateclaw-server/src/main/resources/skills/apple-notes/SKILL.md`
- `mateclaw-server/src/main/resources/skills/architecture-diagram/SKILL.md`
- `mateclaw-server/src/main/resources/skills/architecture-diagram/templates/template.html`
- `mateclaw-server/src/main/resources/skills/arxiv/SKILL.md`
- `mateclaw-server/src/main/resources/skills/ascii-art/SKILL.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/PORT_NOTES.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/SKILL.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/analysis-framework.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/art-styles/chalk.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/art-styles/ink-brush.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/art-styles/ligne-claire.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/art-styles/manga.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/art-styles/minimalist.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/art-styles/realistic.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/auto-selection.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/base-prompt.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/character-template.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/layouts/cinematic.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/layouts/dense.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/layouts/four-panel.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/layouts/mixed.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/layouts/splash.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/layouts/standard.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/layouts/webtoon.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/ohmsha-guide.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/partial-workflows.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/presets/concept-story.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/presets/four-panel.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/presets/ohmsha.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/presets/shoujo.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/presets/wuxia.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/storyboard-template.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/tones/action.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/tones/dramatic.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/tones/energetic.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/tones/neutral.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/tones/romantic.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/tones/vintage.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/tones/warm.md`
- `mateclaw-server/src/main/resources/skills/baoyu-comic/references/workflow.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/PORT_NOTES.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/SKILL.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/analysis-framework.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/base-prompt.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/bento-grid.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/binary-comparison.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/bridge.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/circular-flow.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/comic-strip.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/comparison-matrix.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/dashboard.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/dense-modules.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/funnel.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/hierarchical-layers.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/hub-spoke.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/iceberg.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/isometric-map.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/jigsaw.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/linear-progression.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/periodic-table.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/story-mountain.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/structural-breakdown.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/tree-branching.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/venn-diagram.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/layouts/winding-roadmap.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/structured-content-template.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/aged-academia.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/bold-graphic.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/chalkboard.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/claymation.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/corporate-memphis.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/craft-handmade.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/cyberpunk-neon.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/hand-drawn-edu.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/ikea-manual.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/kawaii.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/knolling.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/lego-brick.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/morandi-journal.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/origami.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/pixel-art.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/pop-laboratory.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/retro-pop-grid.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/storybook-watercolor.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/subway-map.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/technical-schematic.md`
- `mateclaw-server/src/main/resources/skills/baoyu-infographic/references/styles/ui-wireframe.md`
- `mateclaw-server/src/main/resources/skills/blogwatcher/SKILL.md`
- `mateclaw-server/src/main/resources/skills/browser_cdp/SKILL.md`
- `mateclaw-server/src/main/resources/skills/browser_visible/SKILL.md`
- `mateclaw-server/src/main/resources/skills/channel_message/SKILL.md`
- `mateclaw-server/src/main/resources/skills/chat_with_agent/SKILL.md`
- `mateclaw-server/src/main/resources/skills/ckjia-shopping/SKILL.md`
- `mateclaw-server/src/main/resources/skills/ckjia-shopping/assets/ckjia_app_icon.png`
- `mateclaw-server/src/main/resources/skills/ckjia-shopping/assets/ckjia_logo.png`
- `mateclaw-server/src/main/resources/skills/ckjia-shopping/assets/ckjia_logo_dark.png`
- `mateclaw-server/src/main/resources/skills/ckjia-shopping/assets/ckjia_logo_new.png`
- `mateclaw-server/src/main/resources/skills/claude-design/SKILL.md`
- `mateclaw-server/src/main/resources/skills/cron/SKILL.md`
- `mateclaw-server/src/main/resources/skills/design-md/SKILL.md`
- ... 40 more

## 테스트 / CI / 배포 표면

### 테스트 후보

- `mateclaw-server/src/test/java/vip/mate/acp/client/AcpStdioClientTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/AgentAuthoringToolTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/AgentGraphBuilderBasePathResolutionTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/AgentGraphBuilderIT.java`
- `mateclaw-server/src/test/java/vip/mate/agent/AgentGraphBuilderIdentityBlockTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/AgentGraphBuilderPreferenceTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/AgentServiceUniquenessTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/AgentToolSetTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/BaseAgentApprovalSanitizationTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/BaseAgentCarryRecentImageTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/BaseAgentCronIsolationTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/BaseAgentDirectToolHistoryScrubTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/BaseAgentHeadOrphanRepairTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/BaseAgentImageCaptionPersistTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/BaseAgentMultimodalSkipNoticeTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/BaseAgentToolCallReplayTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/GraphEventPublisherIterationTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/binding/AgentBindingServiceTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/binding/AgentBindingServiceValidationTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/binding/AgentBindingSkillRemovalListenerTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/binding/service/AgentBindingServiceCuratorTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/context/ChatOriginSenderFieldsTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/context/ChatOriginTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/context/CompactAgedToolResponsesTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/context/ConversationWindowManagerAnchorTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/context/ConversationWindowManagerPairSafeBoundaryTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/context/ConversationWindowManagerPtlTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/context/ConversationWindowManagerSpillMarkerPreservationTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/context/ConversationWindowManagerSummaryBudgetTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/context/ConversationWindowManagerToolPruningTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/context/LoopMessageBudgeterTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/context/RuntimeContextInjectorModelTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/context/RuntimeContextInjectorSenderTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/context/StructuredTruncatorTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/context/TokenEstimatorToolsTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/context/ToolPairSanitizerTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/delegation/SubagentControllerTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/delegation/SubagentHeartbeatTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/delegation/SubagentRegistryTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/ContentRepetitionGuardTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/ErrorClassificationTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/LaneDPerformanceFixesTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/MessageNormalizerTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/NodeStreamingChatHelperFailoverTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/NodeStreamingChatHelperFallbackChainTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/NodeStreamingChatHelperNormalizerWiringTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/NodeStreamingChatHelperPoolTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/NodeStreamingChatHelperThinkingCapTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/NodeStreamingChatHelperToolCallArgsTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/ReturnDirectEndToEndTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/StateGraphReActAgentStreamedContentDeltaTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/StripThinkingBoundaryTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/edge/GoalEvaluationDispatcherTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/edge/ObservationDispatcherTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/edge/ReasoningDispatcherLlmCallCountTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/edge/ReasoningDispatcherTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/executor/LaneDExecutorAndConfigTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/executor/ToolExecutionExecutorCapToolCallsTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/executor/ToolExecutionExecutorNameNormalizationTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/executor/ToolExecutionExecutorNonInteractiveApprovalTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/executor/ToolExecutionExecutorProductCardDirectiveTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/executor/ToolExecutionExecutorReturnDirectTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/executor/ToolExecutionExecutorSkillAutoRedirectTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/executor/ToolExecutionExecutorSkillHintTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/executor/ToolResultStorageRetentionTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/node/ActionNodeLoadSkillTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/node/FinalAnswerNodeTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/node/GoalEvaluationNodeContinuationTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/node/LimitExceededNodeFallbackTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/node/ObservationNodeDuplicateTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/node/ObservationNodeRefundTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/node/ReasoningNodeContinuationIntentTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/node/ReasoningNodeEmptyCompletionTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/node/ReasoningNodeOutputTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/node/ReasoningNodePtlPromptTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/plan/edge/StepProgressDispatcherTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/plan/node/PlanGenerationAutoGoalTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/plan/node/PlanGenerationEvidenceGateTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/plan/node/StepExecutionReplanContextTest.java`
- `mateclaw-server/src/test/java/vip/mate/agent/graph/plan/node/StepProgressTrackerTest.java`
- ... 40 more

### CI/Docker 후보

- `docker-compose.yml`
- `docker/searxng/Dockerfile`
- `mateclaw-server/Dockerfile`

## 확장자 분포

| 확장자 | 파일수 |
| --- | --- |
| .java | 1660 |
| .sql | 447 |
| .md | 310 |
| .vue | 164 |
| .ts | 90 |
| .txt | 59 |
| .svg | 54 |
| .json | 26 |
| .sty | 13 |
| .tex | 11 |
| .yml | 11 |
| .png | 9 |
| .xml | 7 |
| .html | 6 |

## 다음 심층 분석 포인트

- `README.md의 workflow/usage 섹션`
- `docs/ 내부 책임 분리`
- `mateclaw-server/ 내부 책임 분리`
- `mateclaw-server/src/ 내부 책임 분리`
- `mateclaw-server/src/main/ 내부 책임 분리`
- `mateclaw-server/src/test/ 내부 책임 분리`
- `mateclaw-server/src/main/resources/skills/apple-notes/SKILL.md 스펙/명령 의미`
- `mateclaw-server/src/main/resources/skills/architecture-diagram/SKILL.md 스펙/명령 의미`
- `mateclaw-server/src/main/resources/skills/architecture-diagram/templates/template.html 스펙/명령 의미`
- `mateclaw-server/src/main/resources/skills/arxiv/SKILL.md 스펙/명령 의미`
- `mateclaw-server/src/main/resources/skills/ascii-art/SKILL.md 스펙/명령 의미`
- `docker-compose.yml 실행 스크립트와 패키지 경계`
- `docker/searxng/Dockerfile 실행 스크립트와 패키지 경계`
- `mateclaw-server/Dockerfile 실행 스크립트와 패키지 경계`
- `mateclaw-ui/package.json 실행 스크립트와 패키지 경계`
- `mateclaw-ui/pnpm-lock.yaml 실행 스크립트와 패키지 경계`

