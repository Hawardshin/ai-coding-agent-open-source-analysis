# generalaction/emdash 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Emdash is the Open-Source Agentic Development Environment (🧡 YC W26). Run multiple coding agents in parallel. Use any provider.

## 요약

- 조사 단위: `sources/generalaction__emdash` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,966 files, 301 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/core/src/agents/plugins/helpers/mcp.test.ts, packages/core/src/agents/plugins/helpers/mcp.ts, packages/core/src/agents/plugins/capabilities/mcp.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | generalaction/emdash |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 4902 |
| Forks | 508 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/generalaction__emdash](../../../../sources/generalaction__emdash) |
| 기존 보고서 | [reports/global-trending/repositories/generalaction__emdash.md](../../../global-trending/repositories/generalaction__emdash.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1966 / 301 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .claude, .github, agents, apps, packages, tooling |
| 상위 확장자 | .ts: 1250, .tsx: 418, .svg: 95, .png: 65, .json: 40, .md: 29, .sql: 16, .yml: 13, (none): 8, .css: 7, .db: 6, .sh: 4 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| apps/emdash-desktop | apps workspace | 120 |
| packages/plugins | packages workspace | 75 |
| packages/core | packages workspace | 32 |
| packages/ui | packages workspace | 6 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| apps | source boundary | 1 |
| packages | source boundary | 1 |
| tooling | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | pnpm -r run dev |
| build | package.json | build | pnpm -r run build |
| test | package.json | test | pnpm -r run test |
| quality | package.json | lint | pnpm -r run lint |
| quality | package.json | format | pnpm -r run format |
| quality | package.json | format:check | pnpm -r run format:check |
| quality | package.json | typecheck | pnpm -r run typecheck |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [packages/core/src/agents/plugins/helpers/mcp.test.ts](../../../../sources/generalaction__emdash/packages/core/src/agents/plugins/helpers/mcp.test.ts) | mcp signal |
| mcp | [packages/core/src/agents/plugins/helpers/mcp.ts](../../../../sources/generalaction__emdash/packages/core/src/agents/plugins/helpers/mcp.ts) | mcp signal |
| mcp | [packages/core/src/agents/plugins/capabilities/mcp.ts](../../../../sources/generalaction__emdash/packages/core/src/agents/plugins/capabilities/mcp.ts) | mcp signal |
| mcp | [apps/emdash-desktop/src/shared/core/mcp/catalog.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/core/mcp/catalog.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/generalaction__emdash/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/plugins/src/agents/registry.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/registry.ts) | agentRuntime signal |
| agentRuntime | [packages/plugins/src/agents/impl/.gitkeep](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/.gitkeep) | agentRuntime signal |
| agentRuntime | [packages/plugins/src/agents/impl/index.test.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/index.test.ts) | agentRuntime signal |
| entrypoints | [packages/ui/src/index.ts](../../../../sources/generalaction__emdash/packages/ui/src/index.ts) | entrypoints signal |
| entrypoints | [packages/ui/.storybook/main.ts](../../../../sources/generalaction__emdash/packages/ui/.storybook/main.ts) | entrypoints signal |
| entrypoints | [apps/emdash-desktop/src/types/env.d.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/types/env.d.ts) | entrypoints signal |
| entrypoints | [apps/emdash-desktop/src/types/webview.d.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/types/webview.d.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1613 | [packages/ui/src/index.ts](../../../../sources/generalaction__emdash/packages/ui/src/index.ts)<br>[packages/ui/.storybook/main.ts](../../../../sources/generalaction__emdash/packages/ui/.storybook/main.ts)<br>[apps/emdash-desktop/src/types/env.d.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/types/env.d.ts)<br>[apps/emdash-desktop/src/types/webview.d.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/types/webview.d.ts)<br>[apps/emdash-desktop/src/shared/app-identity.canary.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/app-identity.canary.ts)<br>[apps/emdash-desktop/src/shared/app-identity.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/app-identity.ts)<br>[apps/emdash-desktop/src/shared/browser.test.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/browser.test.ts)<br>[apps/emdash-desktop/src/shared/browser.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/browser.ts) |
| agentRuntime | 245 | [AGENTS.md](../../../../sources/generalaction__emdash/AGENTS.md)<br>[packages/plugins/src/agents/registry.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/registry.ts)<br>[packages/plugins/src/agents/impl/.gitkeep](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/.gitkeep)<br>[packages/plugins/src/agents/impl/index.test.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/index.test.ts)<br>[packages/plugins/src/agents/impl/rovo/icon.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/rovo/icon.ts)<br>[packages/plugins/src/agents/impl/rovo/index.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/rovo/index.ts)<br>[packages/plugins/src/agents/impl/qwen/hooks.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/qwen/hooks.ts)<br>[packages/plugins/src/agents/impl/qwen/icon.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/qwen/icon.ts) |
| mcp | 63 | [packages/core/src/agents/plugins/helpers/mcp.test.ts](../../../../sources/generalaction__emdash/packages/core/src/agents/plugins/helpers/mcp.test.ts)<br>[packages/core/src/agents/plugins/helpers/mcp.ts](../../../../sources/generalaction__emdash/packages/core/src/agents/plugins/helpers/mcp.ts)<br>[packages/core/src/agents/plugins/capabilities/mcp.ts](../../../../sources/generalaction__emdash/packages/core/src/agents/plugins/capabilities/mcp.ts)<br>[apps/emdash-desktop/src/shared/core/mcp/catalog.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/core/mcp/catalog.ts)<br>[apps/emdash-desktop/src/shared/core/mcp/types.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/core/mcp/types.ts)<br>[apps/emdash-desktop/src/renderer/utils/mcp-icon-data.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/utils/mcp-icon-data.ts)<br>[apps/emdash-desktop/src/renderer/features/mcp/mcp-view.tsx](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/features/mcp/mcp-view.tsx)<br>[apps/emdash-desktop/src/renderer/features/mcp/components/KeyValueSection.tsx](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/features/mcp/components/KeyValueSection.tsx) |
| retrieval | 54 | [packages/ui/src/index.ts](../../../../sources/generalaction__emdash/packages/ui/src/index.ts)<br>[packages/ui/src/components/index.ts](../../../../sources/generalaction__emdash/packages/ui/src/components/index.ts)<br>[packages/plugins/src/agents/impl/index.test.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/index.test.ts)<br>[packages/plugins/src/agents/impl/rovo/index.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/rovo/index.ts)<br>[packages/plugins/src/agents/impl/qwen/index.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/qwen/index.ts)<br>[packages/plugins/src/agents/impl/pi/index.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/pi/index.ts)<br>[packages/plugins/src/agents/impl/opencode/index.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/opencode/index.ts)<br>[packages/plugins/src/agents/impl/mistral/index.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/mistral/index.ts) |
| spec | 5 | [apps/emdash-desktop/src/shared/core/workspaces/workspace-setup-spec.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/shared/core/workspaces/workspace-setup-spec.ts)<br>[agents/architecture/main-process.md](../../../../sources/generalaction__emdash/agents/architecture/main-process.md)<br>[agents/architecture/overview.md](../../../../sources/generalaction__emdash/agents/architecture/overview.md)<br>[agents/architecture/renderer.md](../../../../sources/generalaction__emdash/agents/architecture/renderer.md)<br>[agents/architecture/shared.md](../../../../sources/generalaction__emdash/agents/architecture/shared.md) |
| eval | 301 | [packages/plugins/src/agents/impl/index.test.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/index.test.ts)<br>[packages/plugins/src/agents/impl/mistral/hooks.test.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/mistral/hooks.test.ts)<br>[packages/core/src/lib/deep-equal.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/deep-equal.test.ts)<br>[packages/core/src/lib/emitter.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/emitter.test.ts)<br>[packages/core/src/lib/keyed-mutex.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/keyed-mutex.test.ts)<br>[packages/core/src/lib/live-model.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/live-model.test.ts)<br>[packages/core/src/lib/resource-map.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/resource-map.test.ts)<br>[packages/core/src/host-dependencies/runtime/host-dependency-manager.test.ts](../../../../sources/generalaction__emdash/packages/core/src/host-dependencies/runtime/host-dependency-manager.test.ts) |
| security | 19 | [apps/emdash-desktop/src/renderer/lib/modal/use-close-guard.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/lib/modal/use-close-guard.ts)<br>[apps/emdash-desktop/src/renderer/features/tasks/task-config/sandbox-panel.tsx](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/features/tasks/task-config/sandbox-panel.tsx)<br>[apps/emdash-desktop/src/renderer/features/integrations/components/github-auth-disclaimer.tsx](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/features/integrations/components/github-auth-disclaimer.tsx)<br>[apps/emdash-desktop/src/main/core/ssh/connect/ssh-connect-auth.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/ssh/connect/ssh-connect-auth.ts)<br>[apps/emdash-desktop/src/main/core/shared/oauth-flow.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/shared/oauth-flow.ts)<br>[apps/emdash-desktop/src/main/core/github/services/github-api-auth-errors.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/github/services/github-api-auth-errors.ts)<br>[apps/emdash-desktop/src/main/core/github/services/github-api-auth-service-instance.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/github/services/github-api-auth-service-instance.ts)<br>[apps/emdash-desktop/src/main/core/github/services/github-api-auth-service.test.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/github/services/github-api-auth-service.test.ts) |
| ci | 5 | [.github/workflows/code-consistency-check.yml](../../../../sources/generalaction__emdash/.github/workflows/code-consistency-check.yml)<br>[.github/workflows/nix-build.yml](../../../../sources/generalaction__emdash/.github/workflows/nix-build.yml)<br>[.github/workflows/release-canary.yml](../../../../sources/generalaction__emdash/.github/workflows/release-canary.yml)<br>[.github/workflows/release-prod.yml](../../../../sources/generalaction__emdash/.github/workflows/release-prod.yml)<br>[.github/workflows/windows-beta-build.yml](../../../../sources/generalaction__emdash/.github/workflows/windows-beta-build.yml) |
| container | 3 | [apps/emdash-desktop/docker-compose.yaml](../../../../sources/generalaction__emdash/apps/emdash-desktop/docker-compose.yaml)<br>[apps/emdash-desktop/tooling/docker-ssh/dockerfile](../../../../sources/generalaction__emdash/apps/emdash-desktop/tooling/docker-ssh/dockerfile)<br>[apps/emdash-desktop/tooling/byoi/Dockerfile](../../../../sources/generalaction__emdash/apps/emdash-desktop/tooling/byoi/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/generalaction__emdash/AGENTS.md)<br>[CLAUDE.md](../../../../sources/generalaction__emdash/CLAUDE.md) |
| docs | 3 | [README.md](../../../../sources/generalaction__emdash/README.md)<br>[apps/emdash-desktop/tooling/byoi/README.md](../../../../sources/generalaction__emdash/apps/emdash-desktop/tooling/byoi/README.md)<br>[agents/README.md](../../../../sources/generalaction__emdash/agents/README.md) |
| config | 12 | [package.json](../../../../sources/generalaction__emdash/package.json)<br>[pnpm-workspace.yaml](../../../../sources/generalaction__emdash/pnpm-workspace.yaml)<br>[packages/ui/package.json](../../../../sources/generalaction__emdash/packages/ui/package.json)<br>[packages/ui/tsconfig.json](../../../../sources/generalaction__emdash/packages/ui/tsconfig.json)<br>[packages/plugins/package.json](../../../../sources/generalaction__emdash/packages/plugins/package.json)<br>[packages/plugins/tsconfig.json](../../../../sources/generalaction__emdash/packages/plugins/tsconfig.json)<br>[packages/core/package.json](../../../../sources/generalaction__emdash/packages/core/package.json)<br>[packages/core/tsconfig.json](../../../../sources/generalaction__emdash/packages/core/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 301 | [packages/plugins/src/agents/impl/index.test.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/index.test.ts)<br>[packages/plugins/src/agents/impl/mistral/hooks.test.ts](../../../../sources/generalaction__emdash/packages/plugins/src/agents/impl/mistral/hooks.test.ts)<br>[packages/core/src/lib/deep-equal.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/deep-equal.test.ts)<br>[packages/core/src/lib/emitter.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/emitter.test.ts)<br>[packages/core/src/lib/keyed-mutex.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/keyed-mutex.test.ts)<br>[packages/core/src/lib/live-model.test.ts](../../../../sources/generalaction__emdash/packages/core/src/lib/live-model.test.ts) |
| CI workflow | 5 | [.github/workflows/code-consistency-check.yml](../../../../sources/generalaction__emdash/.github/workflows/code-consistency-check.yml)<br>[.github/workflows/nix-build.yml](../../../../sources/generalaction__emdash/.github/workflows/nix-build.yml)<br>[.github/workflows/release-canary.yml](../../../../sources/generalaction__emdash/.github/workflows/release-canary.yml)<br>[.github/workflows/release-prod.yml](../../../../sources/generalaction__emdash/.github/workflows/release-prod.yml)<br>[.github/workflows/windows-beta-build.yml](../../../../sources/generalaction__emdash/.github/workflows/windows-beta-build.yml) |
| 컨테이너/배포 | 3 | [apps/emdash-desktop/docker-compose.yaml](../../../../sources/generalaction__emdash/apps/emdash-desktop/docker-compose.yaml)<br>[apps/emdash-desktop/tooling/docker-ssh/dockerfile](../../../../sources/generalaction__emdash/apps/emdash-desktop/tooling/docker-ssh/dockerfile)<br>[apps/emdash-desktop/tooling/byoi/Dockerfile](../../../../sources/generalaction__emdash/apps/emdash-desktop/tooling/byoi/Dockerfile) |
| 보안/정책 | 19 | [apps/emdash-desktop/src/renderer/lib/modal/use-close-guard.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/lib/modal/use-close-guard.ts)<br>[apps/emdash-desktop/src/renderer/features/tasks/task-config/sandbox-panel.tsx](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/features/tasks/task-config/sandbox-panel.tsx)<br>[apps/emdash-desktop/src/renderer/features/integrations/components/github-auth-disclaimer.tsx](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/renderer/features/integrations/components/github-auth-disclaimer.tsx)<br>[apps/emdash-desktop/src/main/core/ssh/connect/ssh-connect-auth.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/ssh/connect/ssh-connect-auth.ts)<br>[apps/emdash-desktop/src/main/core/shared/oauth-flow.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/shared/oauth-flow.ts)<br>[apps/emdash-desktop/src/main/core/github/services/github-api-auth-errors.ts](../../../../sources/generalaction__emdash/apps/emdash-desktop/src/main/core/github/services/github-api-auth-errors.ts) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/generalaction__emdash/AGENTS.md)<br>[CLAUDE.md](../../../../sources/generalaction__emdash/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/core/src/agents/plugins/helpers/mcp.test.ts`, `packages/core/src/agents/plugins/helpers/mcp.ts`, `packages/core/src/agents/plugins/capabilities/mcp.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/ui/src/index.ts`, `packages/ui/.storybook/main.ts`, `apps/emdash-desktop/src/types/env.d.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `packages/plugins/src/agents/registry.ts`, `packages/plugins/src/agents/impl/.gitkeep`.
4. retrieval/memory/indexing 확인: `packages/ui/src/index.ts`, `packages/ui/src/components/index.ts`, `packages/plugins/src/agents/impl/index.test.ts`.
5. test/eval 파일로 동작 검증: `packages/plugins/src/agents/impl/index.test.ts`, `packages/plugins/src/agents/impl/mistral/hooks.test.ts`, `packages/core/src/lib/deep-equal.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Emdash is the Open Source Agentic Development Environment 🧡 YC W26 . Run multiple coding agents in parallel. Use any pr. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
