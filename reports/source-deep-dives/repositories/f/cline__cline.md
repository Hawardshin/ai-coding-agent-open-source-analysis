# cline/cline 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 3383 files, 687 directories.

## 요약

- 조사 단위: `sources/cline__cline` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,366 files, 683 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=sdk/packages/core/src/extensions/mcp/client.ts, sdk/packages/core/src/extensions/mcp/config-loader.test.ts, sdk/packages/core/src/extensions/mcp/config-loader.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | cline/cline |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 63454 |
| Forks | 6712 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/cline__cline](../../../../sources/cline__cline) |
| 기존 보고서 | [reports/global-trending/repositories/cline__cline.md](../../../global-trending/repositories/cline__cline.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3366 / 683 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .agents, .changeset, .claude, .cline, .clinerules, .codex, .github, .greptile, .husky, .kanban, apps, assets, docs, evals, sdk |
| 상위 확장자 | .ts: 1957, .tsx: 574, .md: 160, .json: 156, .png: 122, .mdx: 109, .snap: 57, (none): 55, .mjs: 21, .proto: 21, .sh: 16, .py: 15 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| apps/vscode | apps workspace | 82 |
| docs | documentation surface | 28 |
| apps/examples | apps workspace | 11 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| assets | top-level component | 1 |
| evals | top-level component | 1 |
| sdk | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | prepare | husky |
| build | package.json | build | bun run clean && bun install && bun run build:sdk && bun -F @cline/cli build |
| build | package.json | build:sdk | bun --production -F './sdk/packages/*' build |
| build | package.json | build:apps | bun -F './apps/**' --production build |
| build | package.json | build:models | bun -F @cline/llms generate:models && bun format --write |
| serve-dev | package.json | dev | bun --conditions=development run build:sdk && bun run cli && bun run cli hub stop |
| serve-dev | package.json | cli | bun --conditions=development --cwd apps/cli dev |
| serve-dev | package.json | code | bun --conditions=development -F @cline/code dev |
| utility | package.json | clean | bun run sdk/scripts/clean.ts |
| quality | package.json | types | bun --parallel -F '*' typecheck |
| test | package.json | test | bun --parallel -F './sdk/packages/**' -F @cline/cli test |
| test | package.json | test:unit | bash -lc 'set -euo pipefail; bun -F @cline/agents test & p1=$!; bun -F @cline/llms test & p2=$!; bun -F @cline/core test:unit & p3=$!; bun -F @cline/cli test:unit & p4=$!; wait $p1; wait $p2; wait $p3; wait $p4' |
| test | package.json | test:e2e | bun -F @cline/core test:e2e && bun -F @cline/cli test:e2e |
| test | package.json | test:e2e:interactive | bun -F @cline/cli test:e2e:interactive |
| test | package.json | verify:routines | zsh -lc 'cd sdk/packages/core && bunx vitest run src/cron/schedule-service.test.ts --config vitest.config.ts' |
| serve-dev | package.json | verify:workos-device-auth | bun sdk/scripts/verify-workos-device-auth.ts |
| utility | package.json | biome | bunx --bun @biomejs/biome |
| quality | package.json | format | bun biome format sdk/ apps/cli/ apps/cline-hub/ apps/examples/ |
| quality | package.json | lint | bun biome lint sdk/ apps/cli/ apps/cline-hub/ apps/examples/ |
| quality | package.json | fix | bun biome check --write --unsafe --diagnostic-level=error sdk/ apps/cli/ apps/cline-hub/ apps/examples/ |
| build | package.json | check | bun biome check --diagnostic-level=error sdk/ apps/cli/ apps/cline-hub/ apps/examples/ && bun run build:sdk && bun run -F @cline/cli build && bun --parallel -F './sdk/packages/**' -F @cline/cli typecheck && bun sdk/scrip |
| quality | package.json | version | bun run types && bun sdk/scripts/version.ts |
| build | package.json | release | bun sdk/scripts/release.ts |


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
| mcp | [sdk/packages/core/src/extensions/mcp/client.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/client.ts) | mcp signal |
| mcp | [sdk/packages/core/src/extensions/mcp/config-loader.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/config-loader.test.ts) | mcp signal |
| mcp | [sdk/packages/core/src/extensions/mcp/config-loader.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/config-loader.ts) | mcp signal |
| mcp | [sdk/packages/core/src/extensions/mcp/index.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/index.ts) | mcp signal |
| agentRuntime | [sdk/AGENTS.md](../../../../sources/cline__cline/sdk/AGENTS.md) | agentRuntime signal |
| agentRuntime | [sdk/packages/shared/src/agent.ts](../../../../sources/cline__cline/sdk/packages/shared/src/agent.ts) | agentRuntime signal |
| agentRuntime | [sdk/packages/shared/src/tools/create.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/tools/create.test.ts) | agentRuntime signal |
| agentRuntime | [sdk/packages/shared/src/tools/create.ts](../../../../sources/cline__cline/sdk/packages/shared/src/tools/create.ts) | agentRuntime signal |
| entrypoints | [sdk/packages/shared/src/index.browser.ts](../../../../sources/cline__cline/sdk/packages/shared/src/index.browser.ts) | entrypoints signal |
| entrypoints | [sdk/packages/shared/src/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/index.ts) | entrypoints signal |
| entrypoints | [sdk/packages/sdk/src/index.ts](../../../../sources/cline__cline/sdk/packages/sdk/src/index.ts) | entrypoints signal |
| entrypoints | [sdk/packages/llms/src/index.browser.ts](../../../../sources/cline__cline/sdk/packages/llms/src/index.browser.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1596 | [sdk/packages/shared/src/index.browser.ts](../../../../sources/cline__cline/sdk/packages/shared/src/index.browser.ts)<br>[sdk/packages/shared/src/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/index.ts)<br>[sdk/packages/sdk/src/index.ts](../../../../sources/cline__cline/sdk/packages/sdk/src/index.ts)<br>[sdk/packages/llms/src/index.browser.ts](../../../../sources/cline__cline/sdk/packages/llms/src/index.browser.ts)<br>[sdk/packages/llms/src/index.ts](../../../../sources/cline__cline/sdk/packages/llms/src/index.ts)<br>[sdk/packages/core/src/index.ts](../../../../sources/cline__cline/sdk/packages/core/src/index.ts)<br>[sdk/packages/core/src/auth/server.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/auth/server.test.ts)<br>[sdk/packages/core/src/auth/server.ts](../../../../sources/cline__cline/sdk/packages/core/src/auth/server.ts) |
| agentRuntime | 464 | [sdk/AGENTS.md](../../../../sources/cline__cline/sdk/AGENTS.md)<br>[sdk/packages/shared/src/agent.ts](../../../../sources/cline__cline/sdk/packages/shared/src/agent.ts)<br>[sdk/packages/shared/src/tools/create.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/tools/create.test.ts)<br>[sdk/packages/shared/src/tools/create.ts](../../../../sources/cline__cline/sdk/packages/shared/src/tools/create.ts)<br>[sdk/packages/shared/src/session/hook-context.ts](../../../../sources/cline__cline/sdk/packages/shared/src/session/hook-context.ts)<br>[sdk/packages/shared/src/llms/tools.ts](../../../../sources/cline__cline/sdk/packages/shared/src/llms/tools.ts)<br>[sdk/packages/shared/src/hooks/contracts.ts](../../../../sources/cline__cline/sdk/packages/shared/src/hooks/contracts.ts)<br>[sdk/packages/shared/src/hooks/events.ts](../../../../sources/cline__cline/sdk/packages/shared/src/hooks/events.ts) |
| mcp | 89 | [sdk/packages/core/src/extensions/mcp/client.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/client.ts)<br>[sdk/packages/core/src/extensions/mcp/config-loader.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/config-loader.test.ts)<br>[sdk/packages/core/src/extensions/mcp/config-loader.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/config-loader.ts)<br>[sdk/packages/core/src/extensions/mcp/index.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/index.ts)<br>[sdk/packages/core/src/extensions/mcp/manager.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/manager.test.ts)<br>[sdk/packages/core/src/extensions/mcp/manager.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/manager.ts)<br>[sdk/packages/core/src/extensions/mcp/name-transform.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/name-transform.ts)<br>[sdk/packages/core/src/extensions/mcp/oauth.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/mcp/oauth.test.ts) |
| retrieval | 130 | [sdk/packages/shared/src/index.browser.ts](../../../../sources/cline__cline/sdk/packages/shared/src/index.browser.ts)<br>[sdk/packages/shared/src/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/index.ts)<br>[sdk/packages/shared/src/types/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/types/index.ts)<br>[sdk/packages/shared/src/team/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/team/index.ts)<br>[sdk/packages/shared/src/storage/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/storage/index.ts)<br>[sdk/packages/shared/src/session/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/session/index.ts)<br>[sdk/packages/shared/src/rpc/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/rpc/index.ts)<br>[sdk/packages/shared/src/remote-config/index.ts](../../../../sources/cline__cline/sdk/packages/shared/src/remote-config/index.ts) |
| spec | 18 | [sdk/ARCHITECTURE.md](../../../../sources/cline__cline/sdk/ARCHITECTURE.md)<br>[sdk/packages/shared/src/cron/cron-spec-types.ts](../../../../sources/cline__cline/sdk/packages/shared/src/cron/cron-spec-types.ts)<br>[sdk/packages/core/src/cron/specs/cron-spec-parser.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/cron/specs/cron-spec-parser.test.ts)<br>[sdk/packages/core/src/cron/specs/cron-spec-parser.ts](../../../../sources/cline__cline/sdk/packages/core/src/cron/specs/cron-spec-parser.ts)<br>[sdk/examples/plugins/agents-squad/skills/api-design.md](../../../../sources/cline__cline/sdk/examples/plugins/agents-squad/skills/api-design.md)<br>[evals/ARCHITECTURE.md](../../../../sources/cline__cline/evals/ARCHITECTURE.md)<br>[docs/sdk/architecture/hub-spoke.mdx](../../../../sources/cline__cline/docs/sdk/architecture/hub-spoke.mdx)<br>[docs/sdk/architecture/overview.mdx](../../../../sources/cline__cline/docs/sdk/architecture/overview.mdx) |
| eval | 671 | [sdk/packages/shared/src/vcr.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/vcr.test.ts)<br>[sdk/packages/shared/src/tools/create.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/tools/create.test.ts)<br>[sdk/packages/shared/src/storage/path-resolution.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/storage/path-resolution.test.ts)<br>[sdk/packages/shared/src/storage/paths.home-dir.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/storage/paths.home-dir.test.ts)<br>[sdk/packages/shared/src/storage/paths.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/storage/paths.test.ts)<br>[sdk/packages/shared/src/services/telemetry.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/services/telemetry.test.ts)<br>[sdk/packages/shared/src/runtime/build-env.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/runtime/build-env.test.ts)<br>[sdk/packages/shared/src/runtime/cline-environment.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/runtime/cline-environment.test.ts) |
| security | 56 | [SECURITY.md](../../../../sources/cline__cline/SECURITY.md)<br>[sdk/packages/shared/src/types/auth.ts](../../../../sources/cline__cline/sdk/packages/shared/src/types/auth.ts)<br>[sdk/packages/core/src/runtime/tools/subprocess-sandbox.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/tools/subprocess-sandbox.test.ts)<br>[sdk/packages/core/src/runtime/tools/subprocess-sandbox.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/tools/subprocess-sandbox.ts)<br>[sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.test.ts)<br>[sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.ts)<br>[sdk/packages/core/src/extensions/plugin/plugin-sandbox-bootstrap.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/plugin/plugin-sandbox-bootstrap.ts)<br>[sdk/packages/core/src/extensions/plugin/plugin-sandbox.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/extensions/plugin/plugin-sandbox.test.ts) |
| ci | 10 | [.github/workflows/cli-publish.yml](../../../../sources/cline__cline/.github/workflows/cli-publish.yml)<br>[.github/workflows/ext-jb-test-integration.yml](../../../../sources/cline__cline/.github/workflows/ext-jb-test-integration.yml)<br>[.github/workflows/ext-vscode-publish-nightly.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-publish-nightly.yml)<br>[.github/workflows/ext-vscode-publish-stable.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-publish-stable.yml)<br>[.github/workflows/ext-vscode-test-e2e.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-test-e2e.yml)<br>[.github/workflows/ext-vscode-test.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-test.yml)<br>[.github/workflows/repo-label-issues.yml](../../../../sources/cline__cline/.github/workflows/repo-label-issues.yml)<br>[.github/workflows/repo-stale-issues.yml](../../../../sources/cline__cline/.github/workflows/repo-stale-issues.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 5 | [CLAUDE.md](../../../../sources/cline__cline/CLAUDE.md)<br>[sdk/AGENTS.md](../../../../sources/cline__cline/sdk/AGENTS.md)<br>[sdk/packages/llms/AGENTS.md](../../../../sources/cline__cline/sdk/packages/llms/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/cline__cline/.github/copilot-instructions.md)<br>[.codex/environments/environment.toml](../../../../sources/cline__cline/.codex/environments/environment.toml) |
| docs | 180 | [README.md](../../../../sources/cline__cline/README.md)<br>[sdk/README.md](../../../../sources/cline__cline/sdk/README.md)<br>[sdk/packages/README.md](../../../../sources/cline__cline/sdk/packages/README.md)<br>[sdk/packages/shared/README.md](../../../../sources/cline__cline/sdk/packages/shared/README.md)<br>[sdk/packages/llms/README.md](../../../../sources/cline__cline/sdk/packages/llms/README.md)<br>[sdk/packages/llms/src/tests/provider-vcr/README.md](../../../../sources/cline__cline/sdk/packages/llms/src/tests/provider-vcr/README.md)<br>[sdk/packages/llms/src/catalog/README.md](../../../../sources/cline__cline/sdk/packages/llms/src/catalog/README.md)<br>[sdk/packages/core/README.md](../../../../sources/cline__cline/sdk/packages/core/README.md) |
| config | 60 | [package.json](../../../../sources/cline__cline/package.json)<br>[sdk/tsconfig.json](../../../../sources/cline__cline/sdk/tsconfig.json)<br>[sdk/packages/shared/package.json](../../../../sources/cline__cline/sdk/packages/shared/package.json)<br>[sdk/packages/shared/tsconfig.json](../../../../sources/cline__cline/sdk/packages/shared/tsconfig.json)<br>[sdk/packages/sdk/package.json](../../../../sources/cline__cline/sdk/packages/sdk/package.json)<br>[sdk/packages/sdk/tsconfig.json](../../../../sources/cline__cline/sdk/packages/sdk/tsconfig.json)<br>[sdk/packages/llms/package.json](../../../../sources/cline__cline/sdk/packages/llms/package.json)<br>[sdk/packages/llms/tsconfig.json](../../../../sources/cline__cline/sdk/packages/llms/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 671 | [sdk/packages/shared/src/vcr.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/vcr.test.ts)<br>[sdk/packages/shared/src/tools/create.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/tools/create.test.ts)<br>[sdk/packages/shared/src/storage/path-resolution.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/storage/path-resolution.test.ts)<br>[sdk/packages/shared/src/storage/paths.home-dir.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/storage/paths.home-dir.test.ts)<br>[sdk/packages/shared/src/storage/paths.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/storage/paths.test.ts)<br>[sdk/packages/shared/src/services/telemetry.test.ts](../../../../sources/cline__cline/sdk/packages/shared/src/services/telemetry.test.ts) |
| CI workflow | 10 | [.github/workflows/cli-publish.yml](../../../../sources/cline__cline/.github/workflows/cli-publish.yml)<br>[.github/workflows/ext-jb-test-integration.yml](../../../../sources/cline__cline/.github/workflows/ext-jb-test-integration.yml)<br>[.github/workflows/ext-vscode-publish-nightly.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-publish-nightly.yml)<br>[.github/workflows/ext-vscode-publish-stable.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-publish-stable.yml)<br>[.github/workflows/ext-vscode-test-e2e.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-test-e2e.yml)<br>[.github/workflows/ext-vscode-test.yml](../../../../sources/cline__cline/.github/workflows/ext-vscode-test.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 56 | [SECURITY.md](../../../../sources/cline__cline/SECURITY.md)<br>[sdk/packages/shared/src/types/auth.ts](../../../../sources/cline__cline/sdk/packages/shared/src/types/auth.ts)<br>[sdk/packages/core/src/runtime/tools/subprocess-sandbox.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/tools/subprocess-sandbox.test.ts)<br>[sdk/packages/core/src/runtime/tools/subprocess-sandbox.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/tools/subprocess-sandbox.ts)<br>[sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.test.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.test.ts)<br>[sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.ts](../../../../sources/cline__cline/sdk/packages/core/src/runtime/orchestration/runtime-oauth-token-manager.ts) |
| 에이전트 지시문 | 5 | [CLAUDE.md](../../../../sources/cline__cline/CLAUDE.md)<br>[sdk/AGENTS.md](../../../../sources/cline__cline/sdk/AGENTS.md)<br>[sdk/packages/llms/AGENTS.md](../../../../sources/cline__cline/sdk/packages/llms/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/cline__cline/.github/copilot-instructions.md)<br>[.codex/environments/environment.toml](../../../../sources/cline__cline/.codex/environments/environment.toml) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `sdk/packages/core/src/extensions/mcp/client.ts`, `sdk/packages/core/src/extensions/mcp/config-loader.test.ts`, `sdk/packages/core/src/extensions/mcp/config-loader.ts`.
2. entrypoint를 따라 실행 흐름 확인: `sdk/packages/shared/src/index.browser.ts`, `sdk/packages/shared/src/index.ts`, `sdk/packages/sdk/src/index.ts`.
3. agent/tool runtime 매핑: `sdk/AGENTS.md`, `sdk/packages/shared/src/agent.ts`, `sdk/packages/shared/src/tools/create.test.ts`.
4. retrieval/memory/indexing 확인: `sdk/packages/shared/src/index.browser.ts`, `sdk/packages/shared/src/index.ts`, `sdk/packages/shared/src/types/index.ts`.
5. test/eval 파일로 동작 검증: `sdk/packages/shared/src/vcr.test.ts`, `sdk/packages/shared/src/tools/create.test.ts`, `sdk/packages/shared/src/storage/path-resolution.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 3383 files, 687 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, tests이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
