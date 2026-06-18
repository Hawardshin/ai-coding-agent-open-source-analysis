# stacklok/toolhive-studio 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

ToolHive is an application that allows you to install, manage and run MCP servers and connect them to AI agents

## 요약

- 조사 단위: `sources/stacklok__toolhive-studio` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,040 files, 265 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=renderer/src/features/registry-servers/lib/form-schema-registry-mcp.ts, renderer/src/features/registry-servers/components/dialog-form-remote-registry-mcp.tsx, renderer/src/features/registry-servers/components/__tests__/dialog-form-remote-registry-mcp.test.tsx이고, 의존성 단서는 openai, anthropic, mcp, modelcontextprotocol, react, electron, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | stacklok/toolhive-studio |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 136 |
| Forks | 20 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/stacklok__toolhive-studio](../../../../sources/stacklok__toolhive-studio) |
| 기존 보고서 | [reports/global-trending/repositories/stacklok__toolhive-studio.md](../../../global-trending/repositories/stacklok__toolhive-studio.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1040 / 265 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | __mocks__, __tests__, .claude, .codex, .cursor, .devcontainer, .github, .husky, assets, common, docs, e2e-tests, examples, flatpak, icons, main, patches, preload, renderer, scripts |
| 상위 확장자 | .ts: 481, .tsx: 399, .md: 48, .png: 30, .yml: 28, .json: 9, .svg: 8, (none): 7, .sh: 6, .ttf: 4, .yaml: 4, .cjs: 2 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | react |
| developerSurface | electron |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 236 | [utils/forge-makers/__tests__/MakerFlatpakBuilder.test.ts](../../../../sources/stacklok__toolhive-studio/utils/forge-makers/__tests__/MakerFlatpakBuilder.test.ts)<br>[utils/__tests__/flatpak-client-paths.test.ts](../../../../sources/stacklok__toolhive-studio/utils/__tests__/flatpak-client-paths.test.ts)<br>[utils/__tests__/pre-release.test.ts](../../../../sources/stacklok__toolhive-studio/utils/__tests__/pre-release.test.ts)<br>[renderer/src/routes/root/guards/__tests__/check-health.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/check-health.test.ts)<br>[renderer/src/routes/root/guards/__tests__/check-update-in-progress.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/check-update-in-progress.test.ts)<br>[renderer/src/routes/root/guards/__tests__/ensure-toolhive-running.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/ensure-toolhive-running.test.ts) |
| CI workflow | 20 | [.github/workflows/_bug-fix-agent.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_bug-fix-agent.yml)<br>[.github/workflows/_build-matrix.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_build-matrix.yml)<br>[.github/workflows/_e2e.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_e2e.yml)<br>[.github/workflows/_security-checks.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_security-checks.yml)<br>[.github/workflows/_security-fix-agent.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_security-fix-agent.yml)<br>[.github/workflows/_static-checks.yml](../../../../sources/stacklok__toolhive-studio/.github/workflows/_static-checks.yml) |
| 컨테이너/배포 | 1 | [.devcontainer/Dockerfile](../../../../sources/stacklok__toolhive-studio/.devcontainer/Dockerfile) |
| 보안/정책 | 26 | [SECURITY.md](../../../../sources/stacklok__toolhive-studio/SECURITY.md)<br>[renderer/src/routes/root/guards/handle-registry-auth-redirect.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/handle-registry-auth-redirect.ts)<br>[renderer/src/routes/root/guards/setup-secret-provider.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/setup-secret-provider.ts)<br>[renderer/src/routes/root/guards/__tests__/handle-registry-auth-redirect.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/handle-registry-auth-redirect.test.ts)<br>[renderer/src/routes/root/guards/__tests__/setup-secret-provider.test.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/routes/root/guards/__tests__/setup-secret-provider.test.ts)<br>[renderer/src/features/secrets/hooks/use-mutation-create-secret.ts](../../../../sources/stacklok__toolhive-studio/renderer/src/features/secrets/hooks/use-mutation-create-secret.ts) |
| 에이전트 지시문 | 15 | [AGENTS.md](../../../../sources/stacklok__toolhive-studio/AGENTS.md)<br>[CLAUDE.md](../../../../sources/stacklok__toolhive-studio/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/stacklok__toolhive-studio/.github/copilot-instructions.md)<br>[.codex/skills/testing-with-api-mocks/SKILL.md](../../../../sources/stacklok__toolhive-studio/.codex/skills/testing-with-api-mocks/SKILL.md)<br>[.codex/skills/testing-api-overrides/SKILL.md](../../../../sources/stacklok__toolhive-studio/.codex/skills/testing-api-overrides/SKILL.md)<br>[.codex/skills/testing-api-assertions/SKILL.md](../../../../sources/stacklok__toolhive-studio/.codex/skills/testing-api-assertions/SKILL.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `renderer/src/features/registry-servers/lib/form-schema-registry-mcp.ts`, `renderer/src/features/registry-servers/components/dialog-form-remote-registry-mcp.tsx`, `renderer/src/features/registry-servers/components/__tests__/dialog-form-remote-registry-mcp.test.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `renderer/src/index.css`, `renderer/src/common/components/layout/main.tsx`, `main/src/main.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `renderer/src/routes/skills_.$namespace.$skillName.tsx`, `renderer/src/routes/skills_.builds.$tag.tsx`.
4. retrieval/memory/indexing 확인: `renderer/index.html`, `renderer/src/index.css`, `renderer/src/routes/index.tsx`.
5. test/eval 파일로 동작 검증: `utils/forge-makers/__tests__/MakerFlatpakBuilder.test.ts`, `utils/__tests__/flatpak-client-paths.test.ts`, `utils/__tests__/pre-release.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 ToolHive is an application that allows you to install, manage and run MCP servers and connect them to AI agents. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
