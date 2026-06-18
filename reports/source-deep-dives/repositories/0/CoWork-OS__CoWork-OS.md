# CoWork-OS/CoWork-OS 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local-first personal agentic OS and everything app for coding, knowledge work, web design, automations, and artifacts.

## 요약

- 조사 단위: `sources/CoWork-OS__CoWork-OS` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,992 files, 624 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/electron/mcp/settings.ts, src/electron/mcp/types.ts, src/electron/mcp/registry/MCPRegistryManager.ts이고, 의존성 단서는 openai, anthropic, react, electron, pydantic, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | CoWork-OS/CoWork-OS |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 360 |
| Forks | 54 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/CoWork-OS__CoWork-OS](../../../../sources/CoWork-OS__CoWork-OS) |
| 기존 보고서 | [reports/global-trending/repositories/CoWork-OS__CoWork-OS.md](../../../global-trending/repositories/CoWork-OS__CoWork-OS.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2992 / 624 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .codex, .githooks, .github, assets, bin, connectors, data, deploy, docs, mobile, native, registry, resources, screenshots, scripts, server, src, tests, tools |
| 상위 확장자 | .ts: 1464, .md: 576, .json: 415, .tsx: 230, .png: 56, .mjs: 48, (none): 38, .py: 21, .html: 17, .yml: 16, .webp: 14, .css: 12 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 160 |
| docs | documentation surface | 45 |
| tests | validation surface | 33 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| connectors | top-level component | 1 |
| data | top-level component | 1 |
| deploy | deployment surface | 1 |
| mobile | top-level component | 1 |
| native | top-level component | 1 |
| registry | top-level component | 1 |
| resources | top-level component | 1 |
| screenshots | top-level component | 1 |
| scripts | top-level component | 1 |
| server | source boundary | 1 |
| tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | postinstall | node scripts/codesign_electron_dev.mjs |
| utility | package.json | setup | node scripts/setup.mjs |
| utility | package.json | hooks:install | node scripts/install_git_hooks.mjs |
| utility | package.json | setup:native | node scripts/setup_native_driver.mjs |
| serve-dev | package.json | setup:server | npm install && npm rebuild --ignore-scripts=false better-sqlite3 |
| serve-dev | package.json | dev | node scripts/dev_with_logs.mjs |
| serve-dev | package.json | dev:start | node scripts/dev_start.mjs |
| serve-dev | package.json | dev:log | cross-env COWORK_DEV_LOG_CAPTURE=1 node scripts/dev_with_logs.mjs |
| serve-dev | package.json | dev:react | vite |
| build | package.json | build:healthkit-bridge | node scripts/build_healthkit_bridge.mjs |
| build | package.json | build:location-helper-macos | node scripts/build_location_helper_macos.mjs |
| build | package.json | build:location-helpers | node scripts/copy_location_helpers.mjs |
| serve-dev | package.json | dev:electron | tsc -p tsconfig.electron.json && cross-env ELECTRON_RUN_AS_NODE= NODE_ENV=development electron . |
| serve-dev | package.json | tunnel-relay:dev | npm run build:electron && node dist/electron/electron/tunnels/relay.js |
| test | package.json | tunnel-relay:test | npm run build:electron && node scripts/smoke-secure-mcp-tunnel.mjs |
| build | package.json | build | npm run build:react && npm run build:healthkit-bridge && npm run build:location-helper-macos && npm run build:location-helpers && concurrently -n electron,daemon,cli "npm run build:electron" "npm run build:daemon" "npm r |
| serve-dev | package.json | build:react | vite build |
| build | package.json | build:electron | tsc -p tsconfig.electron.json |
| build | package.json | build:daemon | tsc -p tsconfig.daemon.json |
| build | package.json | build:cli | tsc -p tsconfig.cli.json |
| build | package.json | build:connectors | concurrently -n salesforce,jira,hubspot,zendesk,servicenow,linear,asana,okta,resend,discord,google-workspace,figma,vercel,monday,finance-data,maps,rhino,blender,comfyui "tsc -p connectors/salesforce-mcp/tsconfig.json" "t |
| build | package.json | prepack | npm run build |
| build | package.json | release:smoke | npm run build && node scripts/release-smoke-install.mjs |
| utility | package.json | adoption:collect | node scripts/collect-public-adoption-stats.mjs |
| utility | package.json | adoption:render | node scripts/render-public-adoption-summary.mjs |
| utility | package.json | adoption:update | npm run adoption:collect && npm run adoption:render |
| build | package.json | package | npm run build && node scripts/run_electron_builder.mjs --publish never && node scripts/release-artifact-names.mjs && node scripts/release-artifact-names.mjs --check |
| build | package.json | package:win:x64 | node scripts/run_electron_builder.mjs --win --x64 --publish never && node scripts/release-artifact-names.mjs && node scripts/release-artifact-names.mjs --check |
| utility | package.json | package:mac | node scripts/package-mac-with-env.mjs |
| utility | package.json | package:mac:unsigned | cross-env COWORK_MAC_UNSIGNED=1 node scripts/package-mac-with-env.mjs |
| utility | package.json | package:desktop:smoke | node scripts/smoke-desktop-artifacts.mjs |
| utility | package.json | package:mac:smoke | node scripts/smoke-desktop-artifacts.mjs --platform=mac |
| utility | package.json | package:win:smoke | node scripts/smoke-desktop-artifacts.mjs --platform=win |
| serve-dev | package.json | package:linux:server | npm run build:daemon && npm run build:connectors && node scripts/package-linux-server.mjs |
| serve-dev | package.json | package:linux:server:smoke | node scripts/smoke-linux-server-package.mjs |
| quality | package.json | fmt | oxfmt --write src |
| quality | package.json | fmt:check | oxfmt --check src |
| quality | package.json | lint | oxlint src -c .oxlintrc.json --tsconfig tsconfig.json |
| quality | package.json | lint:eslint | eslint src --ext ts,tsx |
| utility | package.json | skills:validate-routing | node scripts/qa/validate-skills-routing.mjs |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | electron |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [src/electron/mcp/settings.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/mcp/settings.ts) | mcp signal |
| mcp | [src/electron/mcp/types.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/mcp/types.ts) | mcp signal |
| mcp | [src/electron/mcp/registry/MCPRegistryManager.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/mcp/registry/MCPRegistryManager.ts) | mcp signal |
| mcp | [src/electron/mcp/oauth/connector-oauth.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/mcp/oauth/connector-oauth.ts) | mcp signal |
| agentRuntime | [agent-policy.toml](../../../../sources/CoWork-OS__CoWork-OS/agent-policy.toml) | agentRuntime signal |
| agentRuntime | [tools/registry.ts](../../../../sources/CoWork-OS__CoWork-OS/tools/registry.ts) | agentRuntime signal |
| agentRuntime | [tests/tools/builtin-settings.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/tools/builtin-settings.test.ts) | agentRuntime signal |
| agentRuntime | [tests/tools/shell-tools.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/tools/shell-tools.test.ts) | agentRuntime signal |
| entrypoints | [src/renderer/main.tsx](../../../../sources/CoWork-OS__CoWork-OS/src/renderer/main.tsx) | entrypoints signal |
| entrypoints | [src/electron/main.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/main.ts) | entrypoints signal |
| entrypoints | [src/electron/hooks/server.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/hooks/server.ts) | entrypoints signal |
| entrypoints | [src/electron/hooks/__tests__/server.test.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/hooks/__tests__/server.test.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 33 | [src/renderer/main.tsx](../../../../sources/CoWork-OS__CoWork-OS/src/renderer/main.tsx)<br>[src/electron/main.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/main.ts)<br>[src/electron/hooks/server.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/hooks/server.ts)<br>[src/electron/hooks/__tests__/server.test.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/hooks/__tests__/server.test.ts)<br>[src/electron/control-plane/server.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/control-plane/server.ts)<br>[src/electron/control-plane/__tests__/server.test.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/control-plane/__tests__/server.test.ts)<br>[src/daemon/main.ts](../../../../sources/CoWork-OS__CoWork-OS/src/daemon/main.ts)<br>[src/cli/main.ts](../../../../sources/CoWork-OS__CoWork-OS/src/cli/main.ts) |
| agentRuntime | 1349 | [agent-policy.toml](../../../../sources/CoWork-OS__CoWork-OS/agent-policy.toml)<br>[tools/registry.ts](../../../../sources/CoWork-OS__CoWork-OS/tools/registry.ts)<br>[tests/tools/builtin-settings.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/tools/builtin-settings.test.ts)<br>[tests/tools/shell-tools.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/tools/shell-tools.test.ts)<br>[tests/tools/skills-content-validator.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/tools/skills-content-validator.test.ts)<br>[tests/tools/system-tools.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/tools/system-tools.test.ts)<br>[tests/security/sandbox-runner.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/security/sandbox-runner.test.ts)<br>[tests/security/tool-groups.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/security/tool-groups.test.ts) |
| mcp | 103 | [src/electron/mcp/settings.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/mcp/settings.ts)<br>[src/electron/mcp/types.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/mcp/types.ts)<br>[src/electron/mcp/registry/MCPRegistryManager.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/mcp/registry/MCPRegistryManager.ts)<br>[src/electron/mcp/oauth/connector-oauth.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/mcp/oauth/connector-oauth.ts)<br>[src/electron/mcp/oauth/__tests__/electron-runtime-optional.test.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/mcp/oauth/__tests__/electron-runtime-optional.test.ts)<br>[src/electron/mcp/host/CoWorkHostProvider.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/mcp/host/CoWorkHostProvider.ts)<br>[src/electron/mcp/host/MCPHostServer.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/mcp/host/MCPHostServer.ts)<br>[src/electron/mcp/host/ToolAdapter.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/mcp/host/ToolAdapter.ts) |
| retrieval | 144 | [src/shared/knowledge-graph-types.ts](../../../../sources/CoWork-OS__CoWork-OS/src/shared/knowledge-graph-types.ts)<br>[src/shared/llm-wiki-prompt-routing.ts](../../../../sources/CoWork-OS__CoWork-OS/src/shared/llm-wiki-prompt-routing.ts)<br>[src/shared/__tests__/llm-wiki-graph-report.test.ts](../../../../sources/CoWork-OS__CoWork-OS/src/shared/__tests__/llm-wiki-graph-report.test.ts)<br>[src/shared/__tests__/llm-wiki-prompt-routing.test.ts](../../../../sources/CoWork-OS__CoWork-OS/src/shared/__tests__/llm-wiki-prompt-routing.test.ts)<br>[src/shared/__tests__/llm-wiki-workbench.test.ts](../../../../sources/CoWork-OS__CoWork-OS/src/shared/__tests__/llm-wiki-workbench.test.ts)<br>[src/renderer/index.html](../../../../sources/CoWork-OS__CoWork-OS/src/renderer/index.html)<br>[src/renderer/styles/index.css](../../../../sources/CoWork-OS__CoWork-OS/src/renderer/styles/index.css)<br>[src/renderer/i18n/index.ts](../../../../sources/CoWork-OS__CoWork-OS/src/renderer/i18n/index.ts) |
| spec | 35 | [src/shared/rich-frame-design-language.ts](../../../../sources/CoWork-OS__CoWork-OS/src/shared/rich-frame-design-language.ts)<br>[src/shared/__tests__/rich-frame-design-language.test.ts](../../../../sources/CoWork-OS__CoWork-OS/src/shared/__tests__/rich-frame-design-language.test.ts)<br>[src/electron/context/design-system-template.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/context/design-system-template.ts)<br>[src/electron/agent/runtime/runtime-tool-scheduler-spec.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/agent/runtime/runtime-tool-scheduler-spec.ts)<br>[src/electron/agent/runtime/__tests__/runtime-tool-scheduler-spec.test.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/agent/runtime/__tests__/runtime-tool-scheduler-spec.test.ts)<br>[src/electron/agent/__tests__/executor-command-requirement.test.ts](../../../../sources/CoWork-OS__CoWork-OS/src/electron/agent/__tests__/executor-command-requirement.test.ts)<br>[resources/skills/architecture-design.json](../../../../sources/CoWork-OS__CoWork-OS/resources/skills/architecture-design.json)<br>[resources/skills/architecture-diagram.json](../../../../sources/CoWork-OS__CoWork-OS/resources/skills/architecture-diagram.json) |
| eval | 647 | [tests/codesign-electron-dev.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/codesign-electron-dev.test.ts)<br>[tests/dev-log-utils.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/dev-log-utils.test.ts)<br>[tests/profile-electron-task-switch.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/profile-electron-task-switch.test.ts)<br>[tests/tools/builtin-settings.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/tools/builtin-settings.test.ts)<br>[tests/tools/shell-tools.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/tools/shell-tools.test.ts)<br>[tests/tools/skills-content-validator.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/tools/skills-content-validator.test.ts)<br>[tests/tools/system-tools.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/tools/system-tools.test.ts)<br>[tests/security/concurrency.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/security/concurrency.test.ts) |
| security | 148 | [agent-policy.toml](../../../../sources/CoWork-OS__CoWork-OS/agent-policy.toml)<br>[SECURITY_COMPARISON.md](../../../../sources/CoWork-OS__CoWork-OS/SECURITY_COMPARISON.md)<br>[SECURITY_GUIDE.md](../../../../sources/CoWork-OS__CoWork-OS/SECURITY_GUIDE.md)<br>[SECURITY.md](../../../../sources/CoWork-OS__CoWork-OS/SECURITY.md)<br>[tests/security/concurrency.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/security/concurrency.test.ts)<br>[tests/security/gateway-security.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/security/gateway-security.test.ts)<br>[tests/security/policy-manager.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/security/policy-manager.test.ts)<br>[tests/security/sandbox-runner.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/security/sandbox-runner.test.ts) |
| ci | 9 | [.github/workflows/auto-response.yml](../../../../sources/CoWork-OS__CoWork-OS/.github/workflows/auto-response.yml)<br>[.github/workflows/ci.yml](../../../../sources/CoWork-OS__CoWork-OS/.github/workflows/ci.yml)<br>[.github/workflows/labeler.yml](../../../../sources/CoWork-OS__CoWork-OS/.github/workflows/labeler.yml)<br>[.github/workflows/macos-dmg-smoke.yml](../../../../sources/CoWork-OS__CoWork-OS/.github/workflows/macos-dmg-smoke.yml)<br>[.github/workflows/nightly-hardening.yml](../../../../sources/CoWork-OS__CoWork-OS/.github/workflows/nightly-hardening.yml)<br>[.github/workflows/notify-website-docs.yml](../../../../sources/CoWork-OS__CoWork-OS/.github/workflows/notify-website-docs.yml)<br>[.github/workflows/public-adoption-stats.yml](../../../../sources/CoWork-OS__CoWork-OS/.github/workflows/public-adoption-stats.yml)<br>[.github/workflows/release.yml](../../../../sources/CoWork-OS__CoWork-OS/.github/workflows/release.yml) |
| container | 12 | [docker-compose.yml](../../../../sources/CoWork-OS__CoWork-OS/docker-compose.yml)<br>[Dockerfile](../../../../sources/CoWork-OS__CoWork-OS/Dockerfile)<br>[Dockerfile.node](../../../../sources/CoWork-OS__CoWork-OS/Dockerfile.node)<br>[resources/skills/docker-compose-ops.json](../../../../sources/CoWork-OS__CoWork-OS/resources/skills/docker-compose-ops.json)<br>[resources/skills/docker-compose-ops/SKILL.md](../../../../sources/CoWork-OS__CoWork-OS/resources/skills/docker-compose-ops/SKILL.md)<br>[resources/skills/docker-compose-ops/scripts/.gitkeep](../../../../sources/CoWork-OS__CoWork-OS/resources/skills/docker-compose-ops/scripts/.gitkeep)<br>[resources/skills/docker-compose-ops/references/full-guidance.md](../../../../sources/CoWork-OS__CoWork-OS/resources/skills/docker-compose-ops/references/full-guidance.md)<br>[registry/skills/docker-compose-ops.json](../../../../sources/CoWork-OS__CoWork-OS/registry/skills/docker-compose-ops.json) |
| instruction | 4 | [resources/skills/react-native-skills/AGENTS.md](../../../../sources/CoWork-OS__CoWork-OS/resources/skills/react-native-skills/AGENTS.md)<br>[.codex/agents/connector-reviewer.toml](../../../../sources/CoWork-OS__CoWork-OS/.codex/agents/connector-reviewer.toml)<br>[.codex/agents/security-auditor.toml](../../../../sources/CoWork-OS__CoWork-OS/.codex/agents/security-auditor.toml)<br>[.codex/agents/tool-reviewer.toml](../../../../sources/CoWork-OS__CoWork-OS/.codex/agents/tool-reviewer.toml) |
| docs | 192 | [README.md](../../../../sources/CoWork-OS__CoWork-OS/README.md)<br>[scripts/qa/eval-cases/README.md](../../../../sources/CoWork-OS__CoWork-OS/scripts/qa/eval-cases/README.md)<br>[resources/skills/react-native-skills/README.md](../../../../sources/CoWork-OS__CoWork-OS/resources/skills/react-native-skills/README.md)<br>[resources/skills/react-best-practices/README.md](../../../../sources/CoWork-OS__CoWork-OS/resources/skills/react-best-practices/README.md)<br>[docs/acp-acpx-integration.md](../../../../sources/CoWork-OS__CoWork-OS/docs/acp-acpx-integration.md)<br>[docs/admin-policies.md](../../../../sources/CoWork-OS__CoWork-OS/docs/admin-policies.md)<br>[docs/agent-integrity-and-trap-defense-spec.md](../../../../sources/CoWork-OS__CoWork-OS/docs/agent-integrity-and-trap-defense-spec.md)<br>[docs/agent-teams-contract.md](../../../../sources/CoWork-OS__CoWork-OS/docs/agent-teams-contract.md) |
| config | 42 | [package.json](../../../../sources/CoWork-OS__CoWork-OS/package.json)<br>[tsconfig.json](../../../../sources/CoWork-OS__CoWork-OS/tsconfig.json)<br>[connectors/zendesk-mcp/package.json](../../../../sources/CoWork-OS__CoWork-OS/connectors/zendesk-mcp/package.json)<br>[connectors/zendesk-mcp/tsconfig.json](../../../../sources/CoWork-OS__CoWork-OS/connectors/zendesk-mcp/tsconfig.json)<br>[connectors/vercel-mcp/package.json](../../../../sources/CoWork-OS__CoWork-OS/connectors/vercel-mcp/package.json)<br>[connectors/vercel-mcp/tsconfig.json](../../../../sources/CoWork-OS__CoWork-OS/connectors/vercel-mcp/tsconfig.json)<br>[connectors/templates/mcp-connector/package.json](../../../../sources/CoWork-OS__CoWork-OS/connectors/templates/mcp-connector/package.json)<br>[connectors/templates/mcp-connector/tsconfig.json](../../../../sources/CoWork-OS__CoWork-OS/connectors/templates/mcp-connector/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 647 | [tests/codesign-electron-dev.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/codesign-electron-dev.test.ts)<br>[tests/dev-log-utils.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/dev-log-utils.test.ts)<br>[tests/profile-electron-task-switch.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/profile-electron-task-switch.test.ts)<br>[tests/tools/builtin-settings.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/tools/builtin-settings.test.ts)<br>[tests/tools/shell-tools.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/tools/shell-tools.test.ts)<br>[tests/tools/skills-content-validator.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/tools/skills-content-validator.test.ts) |
| CI workflow | 9 | [.github/workflows/auto-response.yml](../../../../sources/CoWork-OS__CoWork-OS/.github/workflows/auto-response.yml)<br>[.github/workflows/ci.yml](../../../../sources/CoWork-OS__CoWork-OS/.github/workflows/ci.yml)<br>[.github/workflows/labeler.yml](../../../../sources/CoWork-OS__CoWork-OS/.github/workflows/labeler.yml)<br>[.github/workflows/macos-dmg-smoke.yml](../../../../sources/CoWork-OS__CoWork-OS/.github/workflows/macos-dmg-smoke.yml)<br>[.github/workflows/nightly-hardening.yml](../../../../sources/CoWork-OS__CoWork-OS/.github/workflows/nightly-hardening.yml)<br>[.github/workflows/notify-website-docs.yml](../../../../sources/CoWork-OS__CoWork-OS/.github/workflows/notify-website-docs.yml) |
| 컨테이너/배포 | 12 | [docker-compose.yml](../../../../sources/CoWork-OS__CoWork-OS/docker-compose.yml)<br>[Dockerfile](../../../../sources/CoWork-OS__CoWork-OS/Dockerfile)<br>[Dockerfile.node](../../../../sources/CoWork-OS__CoWork-OS/Dockerfile.node)<br>[resources/skills/docker-compose-ops.json](../../../../sources/CoWork-OS__CoWork-OS/resources/skills/docker-compose-ops.json)<br>[resources/skills/docker-compose-ops/SKILL.md](../../../../sources/CoWork-OS__CoWork-OS/resources/skills/docker-compose-ops/SKILL.md)<br>[resources/skills/docker-compose-ops/scripts/.gitkeep](../../../../sources/CoWork-OS__CoWork-OS/resources/skills/docker-compose-ops/scripts/.gitkeep) |
| 보안/정책 | 148 | [agent-policy.toml](../../../../sources/CoWork-OS__CoWork-OS/agent-policy.toml)<br>[SECURITY_COMPARISON.md](../../../../sources/CoWork-OS__CoWork-OS/SECURITY_COMPARISON.md)<br>[SECURITY_GUIDE.md](../../../../sources/CoWork-OS__CoWork-OS/SECURITY_GUIDE.md)<br>[SECURITY.md](../../../../sources/CoWork-OS__CoWork-OS/SECURITY.md)<br>[tests/security/concurrency.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/security/concurrency.test.ts)<br>[tests/security/gateway-security.test.ts](../../../../sources/CoWork-OS__CoWork-OS/tests/security/gateway-security.test.ts) |
| 에이전트 지시문 | 4 | [resources/skills/react-native-skills/AGENTS.md](../../../../sources/CoWork-OS__CoWork-OS/resources/skills/react-native-skills/AGENTS.md)<br>[.codex/agents/connector-reviewer.toml](../../../../sources/CoWork-OS__CoWork-OS/.codex/agents/connector-reviewer.toml)<br>[.codex/agents/security-auditor.toml](../../../../sources/CoWork-OS__CoWork-OS/.codex/agents/security-auditor.toml)<br>[.codex/agents/tool-reviewer.toml](../../../../sources/CoWork-OS__CoWork-OS/.codex/agents/tool-reviewer.toml) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/electron/mcp/settings.ts`, `src/electron/mcp/types.ts`, `src/electron/mcp/registry/MCPRegistryManager.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/renderer/main.tsx`, `src/electron/main.ts`, `src/electron/hooks/server.ts`.
3. agent/tool runtime 매핑: `agent-policy.toml`, `tools/registry.ts`, `tests/tools/builtin-settings.test.ts`.
4. retrieval/memory/indexing 확인: `src/shared/knowledge-graph-types.ts`, `src/shared/llm-wiki-prompt-routing.ts`, `src/shared/__tests__/llm-wiki-graph-report.test.ts`.
5. test/eval 파일로 동작 검증: `tests/codesign-electron-dev.test.ts`, `tests/dev-log-utils.test.ts`, `tests/profile-electron-task-switch.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local first personal agentic OS and everything app for coding, knowledge work, web design, automations, and artifacts.. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
