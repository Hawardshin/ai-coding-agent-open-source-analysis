# GeminiLight/MindOS 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

MindOS is a Human-AI Collaborative Mind System, where human thinks and agents act. Globally sync your mind for all agents: transparent, controllable, and evolving symbiotically.

## 요약

- 조사 단위: `sources/GeminiLight__MindOS` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,534 files, 520 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=wiki/refs/acp-skills-mcp-workflow-integration-2026-03-31.md, wiki/refs/multi-agent-mcp-management-tools-survey.md, wiki/archive/task-spec-mcp-skill-gui.md이고, 의존성 단서는 react, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | GeminiLight/MindOS |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 628 |
| Forks | 55 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/GeminiLight__MindOS](../../../../sources/GeminiLight__MindOS) |
| 기존 보고서 | [reports/global-trending/repositories/GeminiLight__MindOS.md](../../../global-trending/repositories/GeminiLight__MindOS.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2534 / 520 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, assets, docs, packages, scripts, skills, templates, tests, wiki |
| 상위 확장자 | .ts: 1400, .tsx: 460, .md: 324, .js: 83, .json: 64, .svg: 49, .png: 39, .mjs: 29, (none): 11, .csv: 10, .sh: 9, .webp: 9 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 61 |
| packages/web | packages workspace | 51 |
| packages/mindos | packages workspace | 49 |
| packages/retrieval | packages workspace | 14 |
| packages/mindos-platforms | packages workspace | 8 |
| packages/mobile | packages workspace | 6 |
| packages/desktop-tauri | packages workspace | 3 |
| packages/browser-extension | packages workspace | 2 |
| packages/desktop | packages workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| docs | documentation surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| templates | top-level component | 1 |
| wiki | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | setup | node scripts/setup.js |
| serve-dev | package.json | dev | node packages/mindos/bin/cli.js dev |
| build | package.json | build | node packages/mindos/bin/cli.js build |
| serve-dev | package.json | start | node packages/mindos/bin/cli.js start |
| utility | package.json | mcp | node packages/mindos/bin/cli.js mcp |
| test | package.json | test | pnpm run test:contracts && pnpm run test:unit && turbo run test |
| test | package.json | test:quick | pnpm run test:contracts && pnpm run test:unit |
| test | package.json | test:release | pnpm run test:contracts && pnpm run test:unit && turbo run build && turbo run test && turbo run type-check |
| test | package.json | test:contracts | vitest run tests/*.test.ts |
| test | package.json | test:unit | vitest run tests/unit/*.test.ts |
| test | package.json | test:integration | vitest run --config tests/integration/vitest.config.ts |
| test | package.json | test:e2e | playwright test -c tests/e2e/playwright.config.ts |
| quality | package.json | lint | turbo run lint |
| quality | package.json | type-check | turbo run type-check |
| utility | package.json | verify:standalone | node scripts/verify-standalone.mjs |
| utility | package.json | clean:product-stage | node scripts/clean-product-stage.mjs --include-package-docs |
| build | package.json | release | bash scripts/release.sh |
| utility | package.json | clean | turbo run clean && node scripts/remove-node-modules.mjs |
| serve-dev | package.json | prepare | git config core.hooksPath scripts/hooks 2>/dev/null \|\| true |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [wiki/refs/acp-skills-mcp-workflow-integration-2026-03-31.md](../../../../sources/GeminiLight__MindOS/wiki/refs/acp-skills-mcp-workflow-integration-2026-03-31.md) | mcp signal |
| mcp | [wiki/refs/multi-agent-mcp-management-tools-survey.md](../../../../sources/GeminiLight__MindOS/wiki/refs/multi-agent-mcp-management-tools-survey.md) | mcp signal |
| mcp | [wiki/archive/task-spec-mcp-skill-gui.md](../../../../sources/GeminiLight__MindOS/wiki/archive/task-spec-mcp-skill-gui.md) | mcp signal |
| mcp | [tests/mcp-package-migration-contract.test.ts](../../../../sources/GeminiLight__MindOS/tests/mcp-package-migration-contract.test.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/GeminiLight__MindOS/AGENTS.md) | agentRuntime signal |
| agentRuntime | [wiki/refs/agent-communication-protocol-survey.md](../../../../sources/GeminiLight__MindOS/wiki/refs/agent-communication-protocol-survey.md) | agentRuntime signal |
| agentRuntime | [wiki/refs/agent-config-registry.md](../../../../sources/GeminiLight__MindOS/wiki/refs/agent-config-registry.md) | agentRuntime signal |
| agentRuntime | [wiki/refs/agent-dashboard-visualization-management-refs.md](../../../../sources/GeminiLight__MindOS/wiki/refs/agent-dashboard-visualization-management-refs.md) | agentRuntime signal |
| entrypoints | [packages/web/__tests__/fixtures/obsidian-plugin-packages/community-canary/main.js](../../../../sources/GeminiLight__MindOS/packages/web/__tests__/fixtures/obsidian-plugin-packages/community-canary/main.js) | entrypoints signal |
| entrypoints | [packages/retrieval/vector/src/index.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/vector/src/index.ts) | entrypoints signal |
| entrypoints | [packages/retrieval/search/src/index.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/search/src/index.ts) | entrypoints signal |
| entrypoints | [packages/retrieval/indexer/src/index.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/indexer/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 91 | [packages/web/__tests__/fixtures/obsidian-plugin-packages/community-canary/main.js](../../../../sources/GeminiLight__MindOS/packages/web/__tests__/fixtures/obsidian-plugin-packages/community-canary/main.js)<br>[packages/retrieval/vector/src/index.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/vector/src/index.ts)<br>[packages/retrieval/search/src/index.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/search/src/index.ts)<br>[packages/retrieval/indexer/src/index.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/indexer/src/index.ts)<br>[packages/retrieval/api/src/index.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/api/src/index.ts)<br>[packages/retrieval/api/src/server.test.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/api/src/server.test.ts)<br>[packages/retrieval/api/src/server.ts](../../../../sources/GeminiLight__MindOS/packages/retrieval/api/src/server.ts)<br>[packages/mindos/src/cli.d.ts](../../../../sources/GeminiLight__MindOS/packages/mindos/src/cli.d.ts) |
| agentRuntime | 503 | [AGENTS.md](../../../../sources/GeminiLight__MindOS/AGENTS.md)<br>[wiki/refs/agent-communication-protocol-survey.md](../../../../sources/GeminiLight__MindOS/wiki/refs/agent-communication-protocol-survey.md)<br>[wiki/refs/agent-config-registry.md](../../../../sources/GeminiLight__MindOS/wiki/refs/agent-config-registry.md)<br>[wiki/refs/agent-dashboard-visualization-management-refs.md](../../../../sources/GeminiLight__MindOS/wiki/refs/agent-dashboard-visualization-management-refs.md)<br>[wiki/refs/workflow-entry-points-summary.md](../../../../sources/GeminiLight__MindOS/wiki/refs/workflow-entry-points-summary.md)<br>[wiki/refs/workflow-ui-wireframes.md](../../../../sources/GeminiLight__MindOS/wiki/refs/workflow-ui-wireframes.md)<br>[wiki/refs/workflow-yaml-implementation.md](../../../../sources/GeminiLight__MindOS/wiki/refs/workflow-yaml-implementation.md)<br>[wiki/plugins/agent-inspector.md](../../../../sources/GeminiLight__MindOS/wiki/plugins/agent-inspector.md) |
| mcp | 53 | [wiki/refs/acp-skills-mcp-workflow-integration-2026-03-31.md](../../../../sources/GeminiLight__MindOS/wiki/refs/acp-skills-mcp-workflow-integration-2026-03-31.md)<br>[wiki/refs/multi-agent-mcp-management-tools-survey.md](../../../../sources/GeminiLight__MindOS/wiki/refs/multi-agent-mcp-management-tools-survey.md)<br>[wiki/archive/task-spec-mcp-skill-gui.md](../../../../sources/GeminiLight__MindOS/wiki/archive/task-spec-mcp-skill-gui.md)<br>[tests/mcp-package-migration-contract.test.ts](../../../../sources/GeminiLight__MindOS/tests/mcp-package-migration-contract.test.ts)<br>[tests/unit/cli-mcp-agents.test.ts](../../../../sources/GeminiLight__MindOS/tests/unit/cli-mcp-agents.test.ts)<br>[tests/unit/cli-mcp-install-toml.test.ts](../../../../sources/GeminiLight__MindOS/tests/unit/cli-mcp-install-toml.test.ts)<br>[tests/unit/cli-mcp-install-yaml.test.ts](../../../../sources/GeminiLight__MindOS/tests/unit/cli-mcp-install-yaml.test.ts)<br>[tests/unit/cli-mcp-install.test.ts](../../../../sources/GeminiLight__MindOS/tests/unit/cli-mcp-install.test.ts) |
| retrieval | 261 | [wiki/20-system-architecture.md](../../../../sources/GeminiLight__MindOS/wiki/20-system-architecture.md)<br>[wiki/21-design-principle.md](../../../../sources/GeminiLight__MindOS/wiki/21-design-principle.md)<br>[wiki/22-page-design.md](../../../../sources/GeminiLight__MindOS/wiki/22-page-design.md)<br>[wiki/23-mind-spaces.md](../../../../sources/GeminiLight__MindOS/wiki/23-mind-spaces.md)<br>[wiki/25-agent-architecture.md](../../../../sources/GeminiLight__MindOS/wiki/25-agent-architecture.md)<br>[wiki/30-api-reference.md](../../../../sources/GeminiLight__MindOS/wiki/30-api-reference.md)<br>[wiki/40-conventions.md](../../../../sources/GeminiLight__MindOS/wiki/40-conventions.md)<br>[wiki/41-dev-pitfall-patterns.md](../../../../sources/GeminiLight__MindOS/wiki/41-dev-pitfall-patterns.md) |
| spec | 27 | [wiki/20-system-architecture.md](../../../../sources/GeminiLight__MindOS/wiki/20-system-architecture.md)<br>[wiki/21-design-principle.md](../../../../sources/GeminiLight__MindOS/wiki/21-design-principle.md)<br>[wiki/22-page-design.md](../../../../sources/GeminiLight__MindOS/wiki/22-page-design.md)<br>[wiki/25-agent-architecture.md](../../../../sources/GeminiLight__MindOS/wiki/25-agent-architecture.md)<br>[wiki/61-plugin-architecture.md](../../../../sources/GeminiLight__MindOS/wiki/61-plugin-architecture.md)<br>[wiki/architecture-design-review.md](../../../../sources/GeminiLight__MindOS/wiki/architecture-design-review.md)<br>[wiki/architecture-diagrams.md](../../../../sources/GeminiLight__MindOS/wiki/architecture-diagrams.md)<br>[wiki/refs/opencode-desktop-architecture-and-size-research-2026-04-21.md](../../../../sources/GeminiLight__MindOS/wiki/refs/opencode-desktop-architecture-and-size-research-2026-04-21.md) |
| eval | 689 | [wiki/archive/task-spec-cli-ux.md](../../../../sources/GeminiLight__MindOS/wiki/archive/task-spec-cli-ux.md)<br>[wiki/archive/task-spec-mcp-skill-gui.md](../../../../sources/GeminiLight__MindOS/wiki/archive/task-spec-mcp-skill-gui.md)<br>[tests/acp-package-migration-contract.test.ts](../../../../sources/GeminiLight__MindOS/tests/acp-package-migration-contract.test.ts)<br>[tests/browser-extension-ai-conversation.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-ai-conversation.test.ts)<br>[tests/browser-extension-api.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-api.test.ts)<br>[tests/browser-extension-dir-picker.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-dir-picker.test.ts)<br>[tests/browser-extension-popup-safety.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-popup-safety.test.ts)<br>[tests/browser-extension-tab-extraction.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-tab-extraction.test.ts) |
| security | 47 | [wiki/wiki-code-audit-report-2026-04-04.md](../../../../sources/GeminiLight__MindOS/wiki/wiki-code-audit-report-2026-04-04.md)<br>[wiki/archive/wiki-audit-report-2026-03-22.md](../../../../sources/GeminiLight__MindOS/wiki/archive/wiki-audit-report-2026-03-22.md)<br>[tests/security-hardening.test.ts](../../../../sources/GeminiLight__MindOS/tests/security-hardening.test.ts)<br>[tests/unit/cli-auth-command.test.ts](../../../../sources/GeminiLight__MindOS/tests/unit/cli-auth-command.test.ts)<br>[scripts/migrate-agent-audit-log.js](../../../../sources/GeminiLight__MindOS/scripts/migrate-agent-audit-log.js)<br>[packages/web/lib/auth-session.ts](../../../../sources/GeminiLight__MindOS/packages/web/lib/auth-session.ts)<br>[packages/web/lib/runtime-auth-config.ts](../../../../sources/GeminiLight__MindOS/packages/web/lib/runtime-auth-config.ts)<br>[packages/web/lib/obsidian-compat/import-policy.ts](../../../../sources/GeminiLight__MindOS/packages/web/lib/obsidian-compat/import-policy.ts) |
| ci | 7 | [.github/workflows/build-desktop.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/build-desktop.yml)<br>[.github/workflows/build-mobile.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/build-mobile.yml)<br>[.github/workflows/build-tauri-desktop.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/build-tauri-desktop.yml)<br>[.github/workflows/publish-clipper.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/publish-clipper.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/publish-npm.yml)<br>[.github/workflows/publish-runtime.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/publish-runtime.yml)<br>[.github/workflows/test-channel-cross-platform.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/test-channel-cross-platform.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/GeminiLight__MindOS/AGENTS.md) |
| docs | 87 | [README_zh.md](../../../../sources/GeminiLight__MindOS/README_zh.md)<br>[README.md](../../../../sources/GeminiLight__MindOS/README.md)<br>[wiki/refs/coding-agent-harness-research/README.md](../../../../sources/GeminiLight__MindOS/wiki/refs/coding-agent-harness-research/README.md)<br>[wiki/plugins/README.md](../../../../sources/GeminiLight__MindOS/wiki/plugins/README.md)<br>[tests/integration/README.md](../../../../sources/GeminiLight__MindOS/tests/integration/README.md)<br>[tests/e2e/README.md](../../../../sources/GeminiLight__MindOS/tests/e2e/README.md)<br>[templates/README.md](../../../../sources/GeminiLight__MindOS/templates/README.md)<br>[templates/zh/README.md](../../../../sources/GeminiLight__MindOS/templates/zh/README.md) |
| config | 34 | [package.json](../../../../sources/GeminiLight__MindOS/package.json)<br>[pnpm-workspace.yaml](../../../../sources/GeminiLight__MindOS/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/GeminiLight__MindOS/tsconfig.json)<br>[turbo.json](../../../../sources/GeminiLight__MindOS/turbo.json)<br>[tests/integration/package.json](../../../../sources/GeminiLight__MindOS/tests/integration/package.json)<br>[packages/web/package.json](../../../../sources/GeminiLight__MindOS/packages/web/package.json)<br>[packages/web/tsconfig.json](../../../../sources/GeminiLight__MindOS/packages/web/tsconfig.json)<br>[packages/retrieval/vector/package.json](../../../../sources/GeminiLight__MindOS/packages/retrieval/vector/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 689 | [wiki/archive/task-spec-cli-ux.md](../../../../sources/GeminiLight__MindOS/wiki/archive/task-spec-cli-ux.md)<br>[wiki/archive/task-spec-mcp-skill-gui.md](../../../../sources/GeminiLight__MindOS/wiki/archive/task-spec-mcp-skill-gui.md)<br>[tests/acp-package-migration-contract.test.ts](../../../../sources/GeminiLight__MindOS/tests/acp-package-migration-contract.test.ts)<br>[tests/browser-extension-ai-conversation.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-ai-conversation.test.ts)<br>[tests/browser-extension-api.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-api.test.ts)<br>[tests/browser-extension-dir-picker.test.ts](../../../../sources/GeminiLight__MindOS/tests/browser-extension-dir-picker.test.ts) |
| CI workflow | 7 | [.github/workflows/build-desktop.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/build-desktop.yml)<br>[.github/workflows/build-mobile.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/build-mobile.yml)<br>[.github/workflows/build-tauri-desktop.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/build-tauri-desktop.yml)<br>[.github/workflows/publish-clipper.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/publish-clipper.yml)<br>[.github/workflows/publish-npm.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/publish-npm.yml)<br>[.github/workflows/publish-runtime.yml](../../../../sources/GeminiLight__MindOS/.github/workflows/publish-runtime.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 47 | [wiki/wiki-code-audit-report-2026-04-04.md](../../../../sources/GeminiLight__MindOS/wiki/wiki-code-audit-report-2026-04-04.md)<br>[wiki/archive/wiki-audit-report-2026-03-22.md](../../../../sources/GeminiLight__MindOS/wiki/archive/wiki-audit-report-2026-03-22.md)<br>[tests/security-hardening.test.ts](../../../../sources/GeminiLight__MindOS/tests/security-hardening.test.ts)<br>[tests/unit/cli-auth-command.test.ts](../../../../sources/GeminiLight__MindOS/tests/unit/cli-auth-command.test.ts)<br>[scripts/migrate-agent-audit-log.js](../../../../sources/GeminiLight__MindOS/scripts/migrate-agent-audit-log.js)<br>[packages/web/lib/auth-session.ts](../../../../sources/GeminiLight__MindOS/packages/web/lib/auth-session.ts) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/GeminiLight__MindOS/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `wiki/refs/acp-skills-mcp-workflow-integration-2026-03-31.md`, `wiki/refs/multi-agent-mcp-management-tools-survey.md`, `wiki/archive/task-spec-mcp-skill-gui.md`.
2. entrypoint를 따라 실행 흐름 확인: `packages/web/__tests__/fixtures/obsidian-plugin-packages/community-canary/main.js`, `packages/retrieval/vector/src/index.ts`, `packages/retrieval/search/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `wiki/refs/agent-communication-protocol-survey.md`, `wiki/refs/agent-config-registry.md`.
4. retrieval/memory/indexing 확인: `wiki/20-system-architecture.md`, `wiki/21-design-principle.md`, `wiki/22-page-design.md`.
5. test/eval 파일로 동작 검증: `wiki/archive/task-spec-cli-ux.md`, `wiki/archive/task-spec-mcp-skill-gui.md`, `tests/acp-package-migration-contract.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 MindOS is a Human AI Collaborative Mind System, where human thinks and agents act. Globally sync your mind for all agent. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, react이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
