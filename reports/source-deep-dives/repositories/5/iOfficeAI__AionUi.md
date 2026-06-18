# iOfficeAI/AionUi 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Free, local, open-source 24/7 Cowork app for OpenClaw, Hermes Agent, Claude Code, Codex, OpenCode, Gemini CLI and 20+ more CLI | Customize your assistants | Star if you like it!

## 요약

- 조사 단위: `sources/iOfficeAI__AionUi` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,759 files, 386 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/e2e/specs/ext-mcp.e2e.ts, scripts/build-mcp-servers.js, packages/desktop/src/renderer/services/i18n/locales/zh-TW/mcp.json이고, 의존성 단서는 openai, anthropic, modelcontextprotocol, express, next, react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | iOfficeAI/AionUi |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 28443 |
| Forks | 2798 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/iOfficeAI__AionUi](../../../../sources/iOfficeAI__AionUi) |
| 기존 보고서 | [reports/global-trending/repositories/iOfficeAI__AionUi.md](../../../global-trending/repositories/iOfficeAI__AionUi.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1759 / 386 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .aionui, .claude, .gemini, .github, .specify, docs, examples, homebrew, mobile, packages, patches, public, resources, scripts, tests |
| 상위 확장자 | .ts: 753, .tsx: 365, .json: 240, .md: 122, (none): 47, .svg: 44, .css: 40, .png: 40, .js: 30, .yml: 23, .gif: 19, .sh: 11 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 91 |
| packages/desktop | packages workspace | 75 |
| packages/web-host | packages workspace | 9 |
| docs | documentation surface | 8 |
| packages/web-cli | packages workspace | 5 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/ext-wecom-bot | examples workspace | 1 |
| examples/hello-world-extension | examples workspace | 1 |
| homebrew | top-level component | 1 |
| mobile | top-level component | 1 |
| packages | source boundary | 1 |
| packages/shared-scripts | packages workspace | 1 |
| patches | top-level component | 1 |
| public | top-level component | 1 |
| resources | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | electron-vite dev --config packages/desktop/electron.vite.config.ts |
| serve-dev | package.json | start | electron-vite dev --config packages/desktop/electron.vite.config.ts |
| serve-dev | package.json | start:multi | cross-env AIONUI_MULTI_INSTANCE=1 electron-vite dev --config packages/desktop/electron.vite.config.ts |
| serve-dev | package.json | cli | electron-vite dev --config packages/desktop/electron.vite.config.ts |
| utility | package.json | webui | tsx scripts/webui.ts |
| utility | package.json | webui:remote | tsx scripts/webui.ts --remote |
| utility | package.json | webui:prod | cross-env NODE_ENV=production tsx scripts/webui.ts |
| utility | package.json | webui:prod:remote | cross-env NODE_ENV=production tsx scripts/webui.ts --remote |
| utility | package.json | resetpass | tsx scripts/resetpass.ts |
| serve-dev | package.json | package | electron-vite build --config packages/desktop/electron.vite.config.ts |
| serve-dev | package.json | make | electron-vite build --config packages/desktop/electron.vite.config.ts |
| build | package.json | dist | node scripts/build-with-builder.js |
| build | package.json | dist:mac | node scripts/build-with-builder.js auto --mac |
| build | package.json | dist:win | node scripts/build-with-builder.js auto --win |
| build | package.json | dist:linux | node scripts/build-with-builder.js auto --linux |
| build | package.json | build-mac | node scripts/build-with-builder.js auto --mac --arm64 --x64 |
| build | package.json | build-win | node scripts/build-with-builder.js auto --win |
| build | package.json | build-deb | node scripts/build-with-builder.js auto --linux |
| build | package.json | build-mac:arm64 | node scripts/build-with-builder.js arm64 --mac --arm64 |
| build | package.json | build-mac:x64 | node scripts/build-with-builder.js x64 --mac --x64 |
| build | package.json | build-win:arm64 | node scripts/build-with-builder.js arm64 --win --arm64 |
| build | package.json | build-win:x64 | node scripts/build-with-builder.js x64 --win --x64 |
| build | package.json | build | node scripts/build-with-builder.js auto --mac --arm64 --x64 |
| quality | package.json | lint | oxlint |
| quality | package.json | lint:fix | oxlint --fix |
| quality | package.json | format | oxfmt |
| quality | package.json | format:check | oxfmt --check |
| quality | package.json | i18n:types | node scripts/generate-i18n-types.js |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| test | package.json | test:contract | vitest run tests/contract --passWithNoTests |
| test | package.json | test:integration | vitest run tests/integration |
| test | package.json | test:packaged:i18n | vitest run tests/integration/i18n-packaged.test.ts |
| test | package.json | bench | vitest bench |
| test | package.json | bench:db | bun test ./tests/bench/database.bench.bun.ts |
| utility | package.json | bench:report | bunx tsx scripts/run-benchmarks.ts |
| serve-dev | package.json | bench:startup | bunx tsx scripts/benchmark-startup.ts |
| serve-dev | package.json | bench:full | bunx tsx scripts/run-benchmarks.ts --startup |
| serve-dev | package.json | debug:perf | cross-env ACP_PERF=1 PERF_MONITOR=1 bun start |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express, next, react |
| developerSurface | vscode, electron |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/e2e/specs/ext-mcp.e2e.ts](../../../../sources/iOfficeAI__AionUi/tests/e2e/specs/ext-mcp.e2e.ts) | mcp signal |
| mcp | [scripts/build-mcp-servers.js](../../../../sources/iOfficeAI__AionUi/scripts/build-mcp-servers.js) | mcp signal |
| mcp | [packages/desktop/src/renderer/services/i18n/locales/zh-TW/mcp.json](../../../../sources/iOfficeAI__AionUi/packages/desktop/src/renderer/services/i18n/locales/zh-TW/mcp.json) | mcp signal |
| mcp | [packages/desktop/src/renderer/services/i18n/locales/zh-CN/mcp.json](../../../../sources/iOfficeAI__AionUi/packages/desktop/src/renderer/services/i18n/locales/zh-CN/mcp.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/iOfficeAI__AionUi/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/unit/skills/SkillsHubSettings.dom.test.tsx](../../../../sources/iOfficeAI__AionUi/tests/unit/skills/SkillsHubSettings.dom.test.tsx) | agentRuntime signal |
| agentRuntime | [tests/unit/skills/skillSuggestParser.test.ts](../../../../sources/iOfficeAI__AionUi/tests/unit/skills/skillSuggestParser.test.ts) | agentRuntime signal |
| agentRuntime | [tests/unit/skills/useAssistantSkillsIntegration.dom.test.ts](../../../../sources/iOfficeAI__AionUi/tests/unit/skills/useAssistantSkillsIntegration.dom.test.ts) | agentRuntime signal |
| entrypoints | [packages/web-host/tests/fixtures/renderer/assets/main.js](../../../../sources/iOfficeAI__AionUi/packages/web-host/tests/fixtures/renderer/assets/main.js) | entrypoints signal |
| entrypoints | [packages/web-host/src/index.ts](../../../../sources/iOfficeAI__AionUi/packages/web-host/src/index.ts) | entrypoints signal |
| entrypoints | [packages/web-cli/src/index.ts](../../../../sources/iOfficeAI__AionUi/packages/web-cli/src/index.ts) | entrypoints signal |
| entrypoints | [packages/web-cli/bin/aionui-web.js](../../../../sources/iOfficeAI__AionUi/packages/web-cli/bin/aionui-web.js) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [packages/web-host/tests/fixtures/renderer/assets/main.js](../../../../sources/iOfficeAI__AionUi/packages/web-host/tests/fixtures/renderer/assets/main.js)<br>[packages/web-host/src/index.ts](../../../../sources/iOfficeAI__AionUi/packages/web-host/src/index.ts)<br>[packages/web-cli/src/index.ts](../../../../sources/iOfficeAI__AionUi/packages/web-cli/src/index.ts)<br>[packages/web-cli/bin/aionui-web.js](../../../../sources/iOfficeAI__AionUi/packages/web-cli/bin/aionui-web.js)<br>[packages/desktop/src/index.ts](../../../../sources/iOfficeAI__AionUi/packages/desktop/src/index.ts)<br>[packages/desktop/src/renderer/main.tsx](../../../../sources/iOfficeAI__AionUi/packages/desktop/src/renderer/main.tsx)<br>[packages/desktop/src/preload/main.ts](../../../../sources/iOfficeAI__AionUi/packages/desktop/src/preload/main.ts)<br>[packages/desktop/src/common/adapter/main.ts](../../../../sources/iOfficeAI__AionUi/packages/desktop/src/common/adapter/main.ts) |
| agentRuntime | 226 | [AGENTS.md](../../../../sources/iOfficeAI__AionUi/AGENTS.md)<br>[tests/unit/skills/SkillsHubSettings.dom.test.tsx](../../../../sources/iOfficeAI__AionUi/tests/unit/skills/SkillsHubSettings.dom.test.tsx)<br>[tests/unit/skills/skillSuggestParser.test.ts](../../../../sources/iOfficeAI__AionUi/tests/unit/skills/skillSuggestParser.test.ts)<br>[tests/unit/skills/useAssistantSkillsIntegration.dom.test.ts](../../../../sources/iOfficeAI__AionUi/tests/unit/skills/useAssistantSkillsIntegration.dom.test.ts)<br>[tests/unit/renderer/hooks/teamCreateModal.dom.test.tsx](../../../../sources/iOfficeAI__AionUi/tests/unit/renderer/hooks/teamCreateModal.dom.test.tsx)<br>[tests/unit/renderer/hooks/useManagedAgents.dom.test.ts](../../../../sources/iOfficeAI__AionUi/tests/unit/renderer/hooks/useManagedAgents.dom.test.ts)<br>[tests/e2e/specs/agent-settings-detection.e2e.ts](../../../../sources/iOfficeAI__AionUi/tests/e2e/specs/agent-settings-detection.e2e.ts)<br>[tests/e2e/features/settings/skills/.gitkeep](../../../../sources/iOfficeAI__AionUi/tests/e2e/features/settings/skills/.gitkeep) |
| mcp | 20 | [tests/e2e/specs/ext-mcp.e2e.ts](../../../../sources/iOfficeAI__AionUi/tests/e2e/specs/ext-mcp.e2e.ts)<br>[scripts/build-mcp-servers.js](../../../../sources/iOfficeAI__AionUi/scripts/build-mcp-servers.js)<br>[packages/desktop/src/renderer/services/i18n/locales/zh-TW/mcp.json](../../../../sources/iOfficeAI__AionUi/packages/desktop/src/renderer/services/i18n/locales/zh-TW/mcp.json)<br>[packages/desktop/src/renderer/services/i18n/locales/zh-CN/mcp.json](../../../../sources/iOfficeAI__AionUi/packages/desktop/src/renderer/services/i18n/locales/zh-CN/mcp.json)<br>[packages/desktop/src/renderer/services/i18n/locales/uk-UA/mcp.json](../../../../sources/iOfficeAI__AionUi/packages/desktop/src/renderer/services/i18n/locales/uk-UA/mcp.json)<br>[packages/desktop/src/renderer/services/i18n/locales/tr-TR/mcp.json](../../../../sources/iOfficeAI__AionUi/packages/desktop/src/renderer/services/i18n/locales/tr-TR/mcp.json)<br>[packages/desktop/src/renderer/services/i18n/locales/ru-RU/mcp.json](../../../../sources/iOfficeAI__AionUi/packages/desktop/src/renderer/services/i18n/locales/ru-RU/mcp.json)<br>[packages/desktop/src/renderer/services/i18n/locales/pt-BR/mcp.json](../../../../sources/iOfficeAI__AionUi/packages/desktop/src/renderer/services/i18n/locales/pt-BR/mcp.json) |
| retrieval | 76 | [tests/fixtures/fake-acp-cli/index.js](../../../../sources/iOfficeAI__AionUi/tests/fixtures/fake-acp-cli/index.js)<br>[tests/e2e/helpers/index.ts](../../../../sources/iOfficeAI__AionUi/tests/e2e/helpers/index.ts)<br>[tests/e2e/helpers/bridge/index.ts](../../../../sources/iOfficeAI__AionUi/tests/e2e/helpers/bridge/index.ts)<br>[packages/web-host/tests/fixtures/renderer/index.html](../../../../sources/iOfficeAI__AionUi/packages/web-host/tests/fixtures/renderer/index.html)<br>[packages/web-host/src/index.ts](../../../../sources/iOfficeAI__AionUi/packages/web-host/src/index.ts)<br>[packages/web-cli/src/index.ts](../../../../sources/iOfficeAI__AionUi/packages/web-cli/src/index.ts)<br>[packages/desktop/src/index.ts](../../../../sources/iOfficeAI__AionUi/packages/desktop/src/index.ts)<br>[packages/desktop/src/renderer/index.html](../../../../sources/iOfficeAI__AionUi/packages/desktop/src/renderer/index.html) |
| spec | 8 | [tests/e2e/docs/skills-hub/requirements.zh.md](../../../../sources/iOfficeAI__AionUi/tests/e2e/docs/skills-hub/requirements.zh.md)<br>[tests/e2e/docs/chat-aionrs/requirements.zh.md](../../../../sources/iOfficeAI__AionUi/tests/e2e/docs/chat-aionrs/requirements.zh.md)<br>[tests/e2e/docs/assistants/requirements.zh.md](../../../../sources/iOfficeAI__AionUi/tests/e2e/docs/assistants/requirements.zh.md)<br>[.specify/templates/spec-template.md](../../../../sources/iOfficeAI__AionUi/.specify/templates/spec-template.md)<br>[.claude/skills/architecture/SKILL.md](../../../../sources/iOfficeAI__AionUi/.claude/skills/architecture/SKILL.md)<br>[.claude/skills/architecture/references/process.md](../../../../sources/iOfficeAI__AionUi/.claude/skills/architecture/references/process.md)<br>[.claude/skills/architecture/references/project-layout.md](../../../../sources/iOfficeAI__AionUi/.claude/skills/architecture/references/project-layout.md)<br>[.claude/skills/architecture/references/renderer.md](../../../../sources/iOfficeAI__AionUi/.claude/skills/architecture/references/renderer.md) |
| eval | 406 | [tests/vitest.dom.setup.ts](../../../../sources/iOfficeAI__AionUi/tests/vitest.dom.setup.ts)<br>[tests/vitest.setup.ts](../../../../sources/iOfficeAI__AionUi/tests/vitest.setup.ts)<br>[tests/unit/acpConfigOptions.test.ts](../../../../sources/iOfficeAI__AionUi/tests/unit/acpConfigOptions.test.ts)<br>[tests/unit/gpuRecovery.test.ts](../../../../sources/iOfficeAI__AionUi/tests/unit/gpuRecovery.test.ts)<br>[tests/unit/messageFiles.test.ts](../../../../sources/iOfficeAI__AionUi/tests/unit/messageFiles.test.ts)<br>[tests/unit/persistOnQuit.test.ts](../../../../sources/iOfficeAI__AionUi/tests/unit/persistOnQuit.test.ts)<br>[tests/unit/sentry.test.ts](../../../../sources/iOfficeAI__AionUi/tests/unit/sentry.test.ts)<br>[tests/unit/updateBridgeCdnRewrite.test.ts](../../../../sources/iOfficeAI__AionUi/tests/unit/updateBridgeCdnRewrite.test.ts) |
| security | 1 | [tests/e2e/features/conversations/aionrs/permission-modes.e2e.ts](../../../../sources/iOfficeAI__AionUi/tests/e2e/features/conversations/aionrs/permission-modes.e2e.ts) |
| ci | 13 | [.github/workflows/_build-reusable.yml](../../../../sources/iOfficeAI__AionUi/.github/workflows/_build-reusable.yml)<br>[.github/workflows/build-and-release.yml](../../../../sources/iOfficeAI__AionUi/.github/workflows/build-and-release.yml)<br>[.github/workflows/build-manual.yml](../../../../sources/iOfficeAI__AionUi/.github/workflows/build-manual.yml)<br>[.github/workflows/bump-homebrew.yml](../../../../sources/iOfficeAI__AionUi/.github/workflows/bump-homebrew.yml)<br>[.github/workflows/gpt-pr-assessment.yml](../../../../sources/iOfficeAI__AionUi/.github/workflows/gpt-pr-assessment.yml)<br>[.github/workflows/gpt-review.yml](../../../../sources/iOfficeAI__AionUi/.github/workflows/gpt-review.yml)<br>[.github/workflows/pack-web-cli.yml](../../../../sources/iOfficeAI__AionUi/.github/workflows/pack-web-cli.yml)<br>[.github/workflows/pr-checks-docs.yml](../../../../sources/iOfficeAI__AionUi/.github/workflows/pr-checks-docs.yml) |
| container | 1 | [Dockerfile](../../../../sources/iOfficeAI__AionUi/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/iOfficeAI__AionUi/AGENTS.md)<br>[CLAUDE.md](../../../../sources/iOfficeAI__AionUi/CLAUDE.md) |
| docs | 89 | [readme.md](../../../../sources/iOfficeAI__AionUi/readme.md)<br>[tests/e2e/README.md](../../../../sources/iOfficeAI__AionUi/tests/e2e/README.md)<br>[tests/e2e/specs/README.md](../../../../sources/iOfficeAI__AionUi/tests/e2e/specs/README.md)<br>[tests/e2e/docs/parallel-feasibility.md](../../../../sources/iOfficeAI__AionUi/tests/e2e/docs/parallel-feasibility.md)<br>[tests/e2e/docs/skills-hub/discussion-log.zh.md](../../../../sources/iOfficeAI__AionUi/tests/e2e/docs/skills-hub/discussion-log.zh.md)<br>[tests/e2e/docs/skills-hub/engineer-preliminary-notes.md](../../../../sources/iOfficeAI__AionUi/tests/e2e/docs/skills-hub/engineer-preliminary-notes.md)<br>[tests/e2e/docs/skills-hub/engineer-review-testcases-v1.md](../../../../sources/iOfficeAI__AionUi/tests/e2e/docs/skills-hub/engineer-review-testcases-v1.md)<br>[tests/e2e/docs/skills-hub/implementation-mapping.zh.md](../../../../sources/iOfficeAI__AionUi/tests/e2e/docs/skills-hub/implementation-mapping.zh.md) |
| config | 11 | [Makefile](../../../../sources/iOfficeAI__AionUi/Makefile)<br>[package.json](../../../../sources/iOfficeAI__AionUi/package.json)<br>[tsconfig.json](../../../../sources/iOfficeAI__AionUi/tsconfig.json)<br>[packages/web-host/package.json](../../../../sources/iOfficeAI__AionUi/packages/web-host/package.json)<br>[packages/web-host/tsconfig.json](../../../../sources/iOfficeAI__AionUi/packages/web-host/tsconfig.json)<br>[packages/web-cli/package.json](../../../../sources/iOfficeAI__AionUi/packages/web-cli/package.json)<br>[packages/web-cli/tsconfig.json](../../../../sources/iOfficeAI__AionUi/packages/web-cli/tsconfig.json)<br>[packages/shared-scripts/package.json](../../../../sources/iOfficeAI__AionUi/packages/shared-scripts/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 406 | [tests/vitest.dom.setup.ts](../../../../sources/iOfficeAI__AionUi/tests/vitest.dom.setup.ts)<br>[tests/vitest.setup.ts](../../../../sources/iOfficeAI__AionUi/tests/vitest.setup.ts)<br>[tests/unit/acpConfigOptions.test.ts](../../../../sources/iOfficeAI__AionUi/tests/unit/acpConfigOptions.test.ts)<br>[tests/unit/gpuRecovery.test.ts](../../../../sources/iOfficeAI__AionUi/tests/unit/gpuRecovery.test.ts)<br>[tests/unit/messageFiles.test.ts](../../../../sources/iOfficeAI__AionUi/tests/unit/messageFiles.test.ts)<br>[tests/unit/persistOnQuit.test.ts](../../../../sources/iOfficeAI__AionUi/tests/unit/persistOnQuit.test.ts) |
| CI workflow | 13 | [.github/workflows/_build-reusable.yml](../../../../sources/iOfficeAI__AionUi/.github/workflows/_build-reusable.yml)<br>[.github/workflows/build-and-release.yml](../../../../sources/iOfficeAI__AionUi/.github/workflows/build-and-release.yml)<br>[.github/workflows/build-manual.yml](../../../../sources/iOfficeAI__AionUi/.github/workflows/build-manual.yml)<br>[.github/workflows/bump-homebrew.yml](../../../../sources/iOfficeAI__AionUi/.github/workflows/bump-homebrew.yml)<br>[.github/workflows/gpt-pr-assessment.yml](../../../../sources/iOfficeAI__AionUi/.github/workflows/gpt-pr-assessment.yml)<br>[.github/workflows/gpt-review.yml](../../../../sources/iOfficeAI__AionUi/.github/workflows/gpt-review.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/iOfficeAI__AionUi/Dockerfile) |
| 보안/정책 | 1 | [tests/e2e/features/conversations/aionrs/permission-modes.e2e.ts](../../../../sources/iOfficeAI__AionUi/tests/e2e/features/conversations/aionrs/permission-modes.e2e.ts) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/iOfficeAI__AionUi/AGENTS.md)<br>[CLAUDE.md](../../../../sources/iOfficeAI__AionUi/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/e2e/specs/ext-mcp.e2e.ts`, `scripts/build-mcp-servers.js`, `packages/desktop/src/renderer/services/i18n/locales/zh-TW/mcp.json`.
2. entrypoint를 따라 실행 흐름 확인: `packages/web-host/tests/fixtures/renderer/assets/main.js`, `packages/web-host/src/index.ts`, `packages/web-cli/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/unit/skills/SkillsHubSettings.dom.test.tsx`, `tests/unit/skills/skillSuggestParser.test.ts`.
4. retrieval/memory/indexing 확인: `tests/fixtures/fake-acp-cli/index.js`, `tests/e2e/helpers/index.ts`, `tests/e2e/helpers/bridge/index.ts`.
5. test/eval 파일로 동작 검증: `tests/vitest.dom.setup.ts`, `tests/vitest.setup.ts`, `tests/unit/acpConfigOptions.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Free, local, open source 24/7 Cowork app for OpenClaw, Hermes Agent, Claude Code, Codex, OpenCode, Gemini CLI and 20+ mo. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, Makefile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
