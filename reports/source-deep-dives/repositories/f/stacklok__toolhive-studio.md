# stacklok/toolhive-studio Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

ToolHive is an application that allows you to install, manage and run MCP servers and connect them to AI agents

## 요약

- 조사 단위: `sources/stacklok__toolhive-studio` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,040 files, 265 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=renderer/src/features/registry-servers/lib/form-schema-registry-mcp.ts, renderer/src/features/registry-servers/components/dialog-form-remote-registry-mcp.tsx, renderer/src/features/registry-servers/components/__tests__/dialog-form-remote-registry-mcp.test.tsx이고, 의존성 단서는 openai, anthropic, mcp, modelcontextprotocol, react, electron, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | stacklok/toolhive-studio |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 136 |
| Forks | 20 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/stacklok__toolhive-studio](../../../../sources/stacklok__toolhive-studio) |
| Existing report | [reports/global-trending/repositories/stacklok__toolhive-studio.md](../../../global-trending/repositories/stacklok__toolhive-studio.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1040 / 265 |
| Max observed depth | 9 |
| Top directories | __mocks__, __tests__, .claude, .codex, .cursor, .devcontainer, .github, .husky, assets, common, docs, e2e-tests, examples, flatpak, icons, main, patches, preload, renderer, scripts |
| Top extensions | .ts: 481, .tsx: 399, .md: 48, .png: 30, .yml: 28, .json: 9, .svg: 8, (none): 7, .sh: 6, .ttf: 4, .yaml: 4, .cjs: 2 |
| Source patterns | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 17 |
| __mocks__ | top-level component | 1 |
| __tests__ | validation surface | 1 |
| .codex | top-level component | 1 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| common | top-level component | 1 |
| e2e-tests | validation surface | 1 |
| examples | top-level component | 1 |
| flatpak | top-level component | 1 |
| icons | top-level component | 1 |
| main | top-level component | 1 |
| patches | top-level component | 1 |
| preload | top-level component | 1 |
| renderer | top-level component | 1 |
| scripts | top-level component | 1 |
| utils | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | start | electron-forge start |
| test | package.json | start:inspect | tsx scripts/start-inspect.ts |
| build | package.json | rebuild | electron-rebuild -f -w better-sqlite3 |
| build | package.json | postinstall | pnpm run rebuild |
| utility | package.json | e2e | pnpm package && pnpm e2e:prebuilt |
| test | package.json | e2e:prebuilt | playwright test |
| quality | package.json | package | tsc -b --clean && tsc -b && electron-forge package |
| quality | package.json | make | tsc -b --clean && tsc -b && electron-forge make |
| quality | package.json | prettier | prettier . --check |
| quality | package.json | format | prettier . --write |
| quality | package.json | lint | eslint . |
| utility | package.json | publish | electron-forge publish |
| quality | package.json | type-check | tsc --noEmit -p ./tsconfig.app.json && tsc --noEmit -p ./tsconfig.node.json |
| utility | package.json | prepare | husky install |
| utility | package.json | thv | rimraf bin/ && tsx ./utils/fetch-thv.ts --run |
| test | package.json | vitest:electron | ELECTRON_RUN_AS_NODE=1 electron ./node_modules/vitest/vitest.mjs |
| test | package.json | test | pnpm run vitest:electron |
| test | package.json | test:nonInteractive | pnpm run vitest:electron run |
| test | package.json | test:coverage | pnpm run vitest:electron run --coverage |
| utility | package.json | update-api | tsx scripts/update-api.ts |
| utility | package.json | generate-client | pnpm run update-api && cd common/api && openapi-ts |
| utility | package.json | generate-client:nofetch | cd common/api && openapi-ts |
| utility | package.json | generate-icons | tsx scripts/generate-icons.ts |
| utility | package.json | knip | knip |
| test | package.json | deeplink:registerTestLinuxProtocolHandler | bash scripts/install-deep-link-handler.sh |
| serve-dev | package.json | devContainer:dev | bash scripts/devcontainer-dev.sh |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | react |
| developerSurface | electron |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [renderer/src/features/registry-servers/lib/form-schema-registry-mcp.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/features/registry-servers/lib/form-schema-registry-mcp.ts) | mcp signal |
| mcp | [renderer/src/features/registry-servers/components/dialog-form-remote-registry-mcp.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/features/registry-servers/components/dialog-form-remote-registry-mcp.tsx) | mcp signal |
| mcp | [renderer/src/features/registry-servers/components/__tests__/dialog-form-remote-registry-mcp.test.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/features/registry-servers/components/__tests__/dialog-form-remote-registry-mcp.test.tsx) | mcp signal |
| mcp | [renderer/src/features/mcp-servers/types/tool-override.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/features/mcp-servers/types/tool-override.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/stacklok__toolhive-studio/AGENTS.md) | agentRuntime signal |
| agentRuntime | [renderer/src/routes/skills_.$namespace.$skillName.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/skills_.$namespace.$skillName.tsx) | agentRuntime signal |
| agentRuntime | [renderer/src/routes/skills_.builds.$tag.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/skills_.builds.$tag.tsx) | agentRuntime signal |
| agentRuntime | [renderer/src/routes/skills.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/skills.tsx) | agentRuntime signal |
| entrypoints | [renderer/src/index.css](../../../../sources/stacklok__toolhive-studio/renderer/src/index.css) | entrypoints signal |
| entrypoints | [renderer/src/common/components/layout/main.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/common/components/layout/main.tsx) | entrypoints signal |
| entrypoints | [main/src/main.ts](../../../../sources/stacklok__toolhive-studio/main/src/main.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/stacklok__toolhive-studio/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [renderer/src/index.css](../../../../sources/stacklok__toolhive-studio/renderer/src/index.css)<br>[renderer/src/common/components/layout/main.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/common/components/layout/main.tsx)<br>[main/src/main.ts](../../../../sources/stacklok__toolhive-studio/main/src/main.ts) |
| agentRuntime | 228 | [AGENTS.md](../../../../sources/stacklok__toolhive-studio/AGENTS.md)<br>[renderer/src/routes/skills_.$namespace.$skillName.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/skills_.$namespace.$skillName.tsx)<br>[renderer/src/routes/skills_.builds.$tag.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/skills_.builds.$tag.tsx)<br>[renderer/src/routes/skills.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/skills.tsx)<br>[renderer/src/routes/root/hooks/use-registry-error-toast.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/hooks/use-registry-error-toast.ts)<br>[renderer/src/features/skills/lib/build-reference.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/features/skills/lib/build-reference.ts)<br>[renderer/src/features/skills/lib/get-display-repo-label.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/features/skills/lib/get-display-repo-label.ts)<br>[renderer/src/features/skills/lib/registry-pagination.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/features/skills/lib/registry-pagination.ts) |
| mcp | 116 | [renderer/src/features/registry-servers/lib/form-schema-registry-mcp.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/features/registry-servers/lib/form-schema-registry-mcp.ts)<br>[renderer/src/features/registry-servers/components/dialog-form-remote-registry-mcp.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/features/registry-servers/components/dialog-form-remote-registry-mcp.tsx)<br>[renderer/src/features/registry-servers/components/__tests__/dialog-form-remote-registry-mcp.test.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/features/registry-servers/components/__tests__/dialog-form-remote-registry-mcp.test.tsx)<br>[renderer/src/features/mcp-servers/types/tool-override.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/features/mcp-servers/types/tool-override.ts)<br>[renderer/src/features/mcp-servers/sub-pages/logs-page/index.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/features/mcp-servers/sub-pages/logs-page/index.tsx)<br>[renderer/src/features/mcp-servers/sub-pages/logs-page/search.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/features/mcp-servers/sub-pages/logs-page/search.tsx)<br>[renderer/src/features/mcp-servers/sub-pages/logs-page/tests/search.test.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/features/mcp-servers/sub-pages/logs-page/tests/search.test.tsx)<br>[renderer/src/features/mcp-servers/sub-pages/logs-page/__tests__/index.test.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/features/mcp-servers/sub-pages/logs-page/__tests__/index.test.tsx) |
| retrieval | 36 | [renderer/index.html](../../../../sources/stacklok__toolhive-studio/renderer/index.html)<br>[renderer/src/index.css](../../../../sources/stacklok__toolhive-studio/renderer/src/index.css)<br>[renderer/src/routes/index.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/index.tsx)<br>[renderer/src/routes/playground.index.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/playground.index.tsx)<br>[renderer/src/routes/__tests__/index.groups.test.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/__tests__/index.groups.test.tsx)<br>[renderer/src/routes/__tests__/index.redirect.test.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/__tests__/index.redirect.test.tsx)<br>[renderer/src/routes/__tests__/playground.index.test.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/__tests__/playground.index.test.tsx)<br>[renderer/src/features/registry-servers/components/form-run-from-registry/index.tsx](../../../../sources/stacklok__toolhive-studio/renderer/src/features/registry-servers/components/form-run-from-registry/index.tsx) |
| spec | 11 | [renderer/src/common/lib/os-design.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/common/lib/os-design.ts)<br>[e2e-tests/mcp-optimizer-startup-cleanup.spec.ts](../../../../sources/stacklok__toolhive-studio/e2e-tests/mcp-optimizer-startup-cleanup.spec.ts)<br>[e2e-tests/playground.spec.ts](../../../../sources/stacklok__toolhive-studio/e2e-tests/playground.spec.ts)<br>[e2e-tests/registry.spec.ts](../../../../sources/stacklok__toolhive-studio/e2e-tests/registry.spec.ts)<br>[e2e-tests/remote-server-edit.spec.ts](../../../../sources/stacklok__toolhive-studio/e2e-tests/remote-server-edit.spec.ts)<br>[e2e-tests/secrets.spec.ts](../../../../sources/stacklok__toolhive-studio/e2e-tests/secrets.spec.ts)<br>[e2e-tests/settings.spec.ts](../../../../sources/stacklok__toolhive-studio/e2e-tests/settings.spec.ts)<br>[e2e-tests/skills.spec.ts](../../../../sources/stacklok__toolhive-studio/e2e-tests/skills.spec.ts) |
| eval | 236 | [utils/forge-makers/__tests__/MakerFlatpakBuilder.test.ts](../../../../sources/stacklok__toolhive-studio/utils/forge-makers/__tests__/MakerFlatpakBuilder.test.ts)<br>[utils/__tests__/flatpak-client-paths.test.ts](../../../../sources/stacklok__toolhive-studio/utils/__tests__/flatpak-client-paths.test.ts)<br>[utils/__tests__/pre-release.test.ts](../../../../sources/stacklok__toolhive-studio/utils/__tests__/pre-release.test.ts)<br>[renderer/src/routes/root/guards/__tests__/check-health.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/check-health.test.ts)<br>[renderer/src/routes/root/guards/__tests__/check-update-in-progress.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/check-update-in-progress.test.ts)<br>[renderer/src/routes/root/guards/__tests__/ensure-toolhive-running.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/ensure-toolhive-running.test.ts)<br>[renderer/src/routes/root/guards/__tests__/handle-registry-auth-redirect.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/handle-registry-auth-redirect.test.ts)<br>[renderer/src/routes/root/guards/__tests__/setup-secret-provider.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/setup-secret-provider.test.ts) |
| security | 26 | [SECURITY.md](../../../../sources/stacklok__toolhive-studio/SECURITY.md)<br>[renderer/src/routes/root/guards/handle-registry-auth-redirect.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/handle-registry-auth-redirect.ts)<br>[renderer/src/routes/root/guards/setup-secret-provider.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/setup-secret-provider.ts)<br>[renderer/src/routes/root/guards/__tests__/handle-registry-auth-redirect.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/handle-registry-auth-redirect.test.ts)<br>[renderer/src/routes/root/guards/__tests__/setup-secret-provider.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/setup-secret-provider.test.ts)<br>[renderer/src/features/secrets/hooks/use-mutation-create-secret.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/features/secrets/hooks/use-mutation-create-secret.ts)<br>[renderer/src/features/secrets/hooks/use-mutation-delete-secret.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/features/secrets/hooks/use-mutation-delete-secret.ts)<br>[renderer/src/features/secrets/hooks/use-mutation-update-secret.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/features/secrets/hooks/use-mutation-update-secret.ts) |
| ci | 20 | [.github/workflows/_bug-fix-agent.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_bug-fix-agent.yml)<br>[.github/workflows/_build-matrix.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_build-matrix.yml)<br>[.github/workflows/_e2e.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_e2e.yml)<br>[.github/workflows/_security-checks.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_security-checks.yml)<br>[.github/workflows/_security-fix-agent.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_security-fix-agent.yml)<br>[.github/workflows/_static-checks.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_static-checks.yml)<br>[.github/workflows/_unit-tests.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_unit-tests.yml)<br>[.github/workflows/bug-fix-on-label.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/bug-fix-on-label.yml) |
| container | 1 | [.devcontainer/Dockerfile](../../../../sources/stacklok__toolhive-studio/.devcontainer/Dockerfile) |
| instruction | 15 | [AGENTS.md](../../../../sources/stacklok__toolhive-studio/AGENTS.md)<br>[CLAUDE.md](../../../../sources/stacklok__toolhive-studio/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/stacklok__toolhive-studio/.github/copilot-instructions.md)<br>[.codex/skills/testing-with-api-mocks/SKILL.md](../../../../sources/stacklok__toolhive-studio/.codex/skills/testing-with-api-mocks/SKILL.md)<br>[.codex/skills/testing-api-overrides/SKILL.md](../../../../sources/stacklok__toolhive-studio/.codex/skills/testing-api-overrides/SKILL.md)<br>[.codex/skills/testing-api-assertions/SKILL.md](../../../../sources/stacklok__toolhive-studio/.codex/skills/testing-api-assertions/SKILL.md)<br>[.codex/skills/skill-editor/SKILL.md](../../../../sources/stacklok__toolhive-studio/.codex/skills/skill-editor/SKILL.md)<br>[.codex/skills/skill-creator/SKILL.md](../../../../sources/stacklok__toolhive-studio/.codex/skills/skill-creator/SKILL.md) |
| docs | 17 | [README.md](../../../../sources/stacklok__toolhive-studio/README.md)<br>[docs/e2e-testing.md](../../../../sources/stacklok__toolhive-studio/docs/e2e-testing.md)<br>[docs/icons.md](../../../../sources/stacklok__toolhive-studio/docs/icons.md)<br>[docs/mocks.md](../../../../sources/stacklok__toolhive-studio/docs/mocks.md)<br>[docs/README.md](../../../../sources/stacklok__toolhive-studio/docs/README.md)<br>[docs/images/calc.png](../../../../sources/stacklok__toolhive-studio/docs/images/calc.png)<br>[docs/images/cve.png](../../../../sources/stacklok__toolhive-studio/docs/images/cve.png)<br>[docs/images/fork.png](../../../../sources/stacklok__toolhive-studio/docs/images/fork.png) |
| config | 3 | [package.json](../../../../sources/stacklok__toolhive-studio/package.json)<br>[pnpm-workspace.yaml](../../../../sources/stacklok__toolhive-studio/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/stacklok__toolhive-studio/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 236 | [utils/forge-makers/__tests__/MakerFlatpakBuilder.test.ts](../../../../sources/stacklok__toolhive-studio/utils/forge-makers/__tests__/MakerFlatpakBuilder.test.ts)<br>[utils/__tests__/flatpak-client-paths.test.ts](../../../../sources/stacklok__toolhive-studio/utils/__tests__/flatpak-client-paths.test.ts)<br>[utils/__tests__/pre-release.test.ts](../../../../sources/stacklok__toolhive-studio/utils/__tests__/pre-release.test.ts)<br>[renderer/src/routes/root/guards/__tests__/check-health.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/check-health.test.ts)<br>[renderer/src/routes/root/guards/__tests__/check-update-in-progress.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/check-update-in-progress.test.ts)<br>[renderer/src/routes/root/guards/__tests__/ensure-toolhive-running.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/ensure-toolhive-running.test.ts) |
| CI workflows | 20 | [.github/workflows/_bug-fix-agent.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_bug-fix-agent.yml)<br>[.github/workflows/_build-matrix.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_build-matrix.yml)<br>[.github/workflows/_e2e.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_e2e.yml)<br>[.github/workflows/_security-checks.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_security-checks.yml)<br>[.github/workflows/_security-fix-agent.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_security-fix-agent.yml)<br>[.github/workflows/_static-checks.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_static-checks.yml) |
| Containers / deploy | 1 | [.devcontainer/Dockerfile](../../../../sources/stacklok__toolhive-studio/.devcontainer/Dockerfile) |
| Security / policy | 26 | [SECURITY.md](../../../../sources/stacklok__toolhive-studio/SECURITY.md)<br>[renderer/src/routes/root/guards/handle-registry-auth-redirect.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/handle-registry-auth-redirect.ts)<br>[renderer/src/routes/root/guards/setup-secret-provider.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/setup-secret-provider.ts)<br>[renderer/src/routes/root/guards/__tests__/handle-registry-auth-redirect.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/handle-registry-auth-redirect.test.ts)<br>[renderer/src/routes/root/guards/__tests__/setup-secret-provider.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/setup-secret-provider.test.ts)<br>[renderer/src/features/secrets/hooks/use-mutation-create-secret.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/features/secrets/hooks/use-mutation-create-secret.ts) |
| Agent instructions | 15 | [AGENTS.md](../../../../sources/stacklok__toolhive-studio/AGENTS.md)<br>[CLAUDE.md](../../../../sources/stacklok__toolhive-studio/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/stacklok__toolhive-studio/.github/copilot-instructions.md)<br>[.codex/skills/testing-with-api-mocks/SKILL.md](../../../../sources/stacklok__toolhive-studio/.codex/skills/testing-with-api-mocks/SKILL.md)<br>[.codex/skills/testing-api-overrides/SKILL.md](../../../../sources/stacklok__toolhive-studio/.codex/skills/testing-api-overrides/SKILL.md)<br>[.codex/skills/testing-api-assertions/SKILL.md](../../../../sources/stacklok__toolhive-studio/.codex/skills/testing-api-assertions/SKILL.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `renderer/src/features/registry-servers/lib/form-schema-registry-mcp.ts`, `renderer/src/features/registry-servers/components/dialog-form-remote-registry-mcp.tsx`, `renderer/src/features/registry-servers/components/__tests__/dialog-form-remote-registry-mcp.test.tsx`.
2. Trace execution through entrypoints: `renderer/src/index.css`, `renderer/src/common/components/layout/main.tsx`, `main/src/main.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `renderer/src/routes/skills_.$namespace.$skillName.tsx`, `renderer/src/routes/skills_.builds.$tag.tsx`.
4. Inspect retrieval/memory/indexing through: `renderer/index.html`, `renderer/src/index.css`, `renderer/src/routes/index.tsx`.
5. Verify behavior through test/eval files: `utils/forge-makers/__tests__/MakerFlatpakBuilder.test.ts`, `utils/__tests__/flatpak-client-paths.test.ts`, `utils/__tests__/pre-release.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 ToolHive is an application that allows you to install, manage and run MCP servers and connect them to AI agents. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
