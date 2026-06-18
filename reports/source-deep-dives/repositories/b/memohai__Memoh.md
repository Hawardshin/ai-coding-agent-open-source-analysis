# memohai/Memoh Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

✨ The open-source multi-agent platform. Every agent gets its own computer, desktop, network, and long-term memory.

## 요약

- 조사 단위: `sources/memohai__Memoh` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,601 files, 374 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/mcp/connections_test.go, internal/mcp/connections.go, internal/mcp/http_tools_test.go이고, 의존성 단서는 modelcontextprotocol, cobra, chroma, qdrant, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | memohai/Memoh |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 1910 |
| Forks | 181 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/memohai__Memoh](../../../../sources/memohai__Memoh) |
| Existing report | [reports/global-trending/repositories/memohai__Memoh.md](../../../global-trending/repositories/memohai__Memoh.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2601 / 374 |
| Max observed depth | 8 |
| Top directories | .agents, .claude, .github, .husky, .zed, apps, assets, cmd, conf, crates, db, devenv, docker, docs, internal, packages, scripts, spec |
| Top extensions | .go: 1016, .vue: 611, .sql: 322, .ts: 289, .svg: 102, .md: 49, .yaml: 36, .json: 33, (none): 29, .yml: 27, .sh: 19, .toml: 16 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/ui | packages workspace | 66 |
| apps/web | apps workspace | 23 |
| apps/desktop | apps workspace | 5 |
| packages/config | packages workspace | 4 |
| packages/sdk | packages workspace | 4 |
| packages/icons | packages workspace | 3 |
| cmd/bridge | cmd workspace | 2 |
| crates/a11y-cli | crates workspace | 2 |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| assets | top-level component | 1 |
| cmd | source boundary | 1 |
| cmd/agent | cmd workspace | 1 |
| cmd/gen-bridge-mtls | cmd workspace | 1 |
| cmd/memoh | cmd workspace | 1 |
| cmd/synccaps | cmd workspace | 1 |
| conf | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | web:dev | pnpm --filter @memohai/web dev |
| build | package.json | web:build | pnpm --filter @memohai/web build |
| serve-dev | package.json | web:start | pnpm --filter @memohai/web start |
| build | package.json | release | bumpp |
| build | package.json | release:patch | bumpp patch --yes |
| build | package.json | release:minor | bumpp minor --yes |
| build | package.json | release:major | bumpp major --yes |
| utility | package.json | publish:npm | node scripts/publish-packages.mjs |
| utility | package.json | generate-sdk | openapi-ts |
| quality | package.json | lint | eslint . |
| quality | package.json | lint:fix | eslint . --fix |
| test | package.json | test | vitest |
| utility | package.json | prepare | husky |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | chroma, qdrant |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [internal/mcp/connections_test.go](../../../../sources/memohai__Memoh/internal/mcp/connections_test.go) | mcp signal |
| mcp | [internal/mcp/connections.go](../../../../sources/memohai__Memoh/internal/mcp/connections.go) | mcp signal |
| mcp | [internal/mcp/http_tools_test.go](../../../../sources/memohai__Memoh/internal/mcp/http_tools_test.go) | mcp signal |
| mcp | [internal/mcp/http_tools.go](../../../../sources/memohai__Memoh/internal/mcp/http_tools.go) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/memohai__Memoh/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills-lock.json](../../../../sources/memohai__Memoh/skills-lock.json) | agentRuntime signal |
| agentRuntime | [packages/ui/AGENTS.md](../../../../sources/memohai__Memoh/packages/ui/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/ui/src/components/hover-card/context.ts](../../../../sources/memohai__Memoh/packages/ui/src/components/hover-card/context.ts) | agentRuntime signal |
| entrypoints | [packages/ui/src/index.ts](../../../../sources/memohai__Memoh/packages/ui/src/index.ts) | entrypoints signal |
| entrypoints | [packages/ui/.storybook/main.ts](../../../../sources/memohai__Memoh/packages/ui/.storybook/main.ts) | entrypoints signal |
| entrypoints | [packages/sdk/src/index.ts](../../../../sources/memohai__Memoh/packages/sdk/src/index.ts) | entrypoints signal |
| entrypoints | [packages/icons/src/index.ts](../../../../sources/memohai__Memoh/packages/icons/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 500 | [packages/ui/src/index.ts](../../../../sources/memohai__Memoh/packages/ui/src/index.ts)<br>[packages/ui/.storybook/main.ts](../../../../sources/memohai__Memoh/packages/ui/.storybook/main.ts)<br>[packages/sdk/src/index.ts](../../../../sources/memohai__Memoh/packages/sdk/src/index.ts)<br>[packages/icons/src/index.ts](../../../../sources/memohai__Memoh/packages/icons/src/index.ts)<br>[packages/config/src/index.ts](../../../../sources/memohai__Memoh/packages/config/src/index.ts)<br>[internal/workspace/bridgesvc/server.go](../../../../sources/memohai__Memoh/internal/workspace/bridgesvc/server.go)<br>[internal/server/server.go](../../../../sources/memohai__Memoh/internal/server/server.go)<br>[internal/memory/sparse/service/main.py](../../../../sources/memohai__Memoh/internal/memory/sparse/service/main.py) |
| agentRuntime | 259 | [AGENTS.md](../../../../sources/memohai__Memoh/AGENTS.md)<br>[skills-lock.json](../../../../sources/memohai__Memoh/skills-lock.json)<br>[packages/ui/AGENTS.md](../../../../sources/memohai__Memoh/packages/ui/AGENTS.md)<br>[packages/ui/src/components/hover-card/context.ts](../../../../sources/memohai__Memoh/packages/ui/src/components/hover-card/context.ts)<br>[packages/ui/src/components/field/context.ts](../../../../sources/memohai__Memoh/packages/ui/src/components/field/context.ts)<br>[packages/ui/src/components/context-menu/ContextMenu.vue](../../../../sources/memohai__Memoh/packages/ui/src/components/context-menu/ContextMenu.vue)<br>[packages/ui/src/components/context-menu/ContextMenuCheckboxItem.vue](../../../../sources/memohai__Memoh/packages/ui/src/components/context-menu/ContextMenuCheckboxItem.vue)<br>[packages/ui/src/components/context-menu/ContextMenuContent.vue](../../../../sources/memohai__Memoh/packages/ui/src/components/context-menu/ContextMenuContent.vue) |
| mcp | 45 | [internal/mcp/connections_test.go](../../../../sources/memohai__Memoh/internal/mcp/connections_test.go)<br>[internal/mcp/connections.go](../../../../sources/memohai__Memoh/internal/mcp/connections.go)<br>[internal/mcp/http_tools_test.go](../../../../sources/memohai__Memoh/internal/mcp/http_tools_test.go)<br>[internal/mcp/http_tools.go](../../../../sources/memohai__Memoh/internal/mcp/http_tools.go)<br>[internal/mcp/jsonrpc.go](../../../../sources/memohai__Memoh/internal/mcp/jsonrpc.go)<br>[internal/mcp/oauth_test.go](../../../../sources/memohai__Memoh/internal/mcp/oauth_test.go)<br>[internal/mcp/oauth.go](../../../../sources/memohai__Memoh/internal/mcp/oauth.go)<br>[internal/mcp/service.go](../../../../sources/memohai__Memoh/internal/mcp/service.go) |
| retrieval | 190 | [scripts/embed.go](../../../../sources/memohai__Memoh/scripts/embed.go)<br>[packages/ui/src/index.ts](../../../../sources/memohai__Memoh/packages/ui/src/index.ts)<br>[packages/ui/src/components/tooltip/index.ts](../../../../sources/memohai__Memoh/packages/ui/src/components/tooltip/index.ts)<br>[packages/ui/src/components/toggle/index.ts](../../../../sources/memohai__Memoh/packages/ui/src/components/toggle/index.ts)<br>[packages/ui/src/components/time-input/index.ts](../../../../sources/memohai__Memoh/packages/ui/src/components/time-input/index.ts)<br>[packages/ui/src/components/textarea/index.ts](../../../../sources/memohai__Memoh/packages/ui/src/components/textarea/index.ts)<br>[packages/ui/src/components/text-generate-effect/index.ts](../../../../sources/memohai__Memoh/packages/ui/src/components/text-generate-effect/index.ts)<br>[packages/ui/src/components/text-button/index.ts](../../../../sources/memohai__Memoh/packages/ui/src/components/text-button/index.ts) |
| spec | 6 | [spec/docs.go](../../../../sources/memohai__Memoh/spec/docs.go)<br>[spec/swagger.json](../../../../sources/memohai__Memoh/spec/swagger.json)<br>[spec/swagger.yaml](../../../../sources/memohai__Memoh/spec/swagger.yaml)<br>[packages/ui/DESIGN.md](../../../../sources/memohai__Memoh/packages/ui/DESIGN.md)<br>[internal/network/overlay/internal/sidecar/spec.go](../../../../sources/memohai__Memoh/internal/network/overlay/internal/sidecar/spec.go)<br>[internal/memory/sparse/service/requirements.txt](../../../../sources/memohai__Memoh/internal/memory/sparse/service/requirements.txt) |
| eval | 381 | [spec/docs.go](../../../../sources/memohai__Memoh/spec/docs.go)<br>[spec/swagger.json](../../../../sources/memohai__Memoh/spec/swagger.json)<br>[spec/swagger.yaml](../../../../sources/memohai__Memoh/spec/swagger.yaml)<br>[scripts/test-install-root-guard.sh](../../../../sources/memohai__Memoh/scripts/test-install-root-guard.sh)<br>[internal/workspace/bridge_tls_test.go](../../../../sources/memohai__Memoh/internal/workspace/bridge_tls_test.go)<br>[internal/workspace/gpu_labels_test.go](../../../../sources/memohai__Memoh/internal/workspace/gpu_labels_test.go)<br>[internal/workspace/identity_test.go](../../../../sources/memohai__Memoh/internal/workspace/identity_test.go)<br>[internal/workspace/image_preference_test.go](../../../../sources/memohai__Memoh/internal/workspace/image_preference_test.go) |
| security | 63 | [scripts/audit-kata-github-verification.sh](../../../../sources/memohai__Memoh/scripts/audit-kata-github-verification.sh)<br>[scripts/test-install-root-guard.sh](../../../../sources/memohai__Memoh/scripts/test-install-root-guard.sh)<br>[packages/sdk/src/core/auth.gen.ts](../../../../sources/memohai__Memoh/packages/sdk/src/core/auth.gen.ts)<br>[internal/tui/local/auth.go](../../../../sources/memohai__Memoh/internal/tui/local/auth.go)<br>[internal/toolapproval/policy_test.go](../../../../sources/memohai__Memoh/internal/toolapproval/policy_test.go)<br>[internal/toolapproval/policy.go](../../../../sources/memohai__Memoh/internal/toolapproval/policy.go)<br>[internal/providers/oauth.go](../../../../sources/memohai__Memoh/internal/providers/oauth.go)<br>[internal/policy/service.go](../../../../sources/memohai__Memoh/internal/policy/service.go) |
| ci | 10 | [.github/workflows/agents-md-updater.yml](../../../../sources/memohai__Memoh/.github/workflows/agents-md-updater.yml)<br>[.github/workflows/docker.yml](../../../../sources/memohai__Memoh/.github/workflows/docker.yml)<br>[.github/workflows/electron-ci.yml](../../../../sources/memohai__Memoh/.github/workflows/electron-ci.yml)<br>[.github/workflows/eslint.yml](../../../../sources/memohai__Memoh/.github/workflows/eslint.yml)<br>[.github/workflows/go-ci.yml](../../../../sources/memohai__Memoh/.github/workflows/go-ci.yml)<br>[.github/workflows/kata-runtime.yml](../../../../sources/memohai__Memoh/.github/workflows/kata-runtime.yml)<br>[.github/workflows/migrations.yml](../../../../sources/memohai__Memoh/.github/workflows/migrations.yml)<br>[.github/workflows/release.yml](../../../../sources/memohai__Memoh/.github/workflows/release.yml) |
| container | 19 | [docker-compose.kata.yml](../../../../sources/memohai__Memoh/docker-compose.kata.yml)<br>[docker-compose.sqlite.yml](../../../../sources/memohai__Memoh/docker-compose.sqlite.yml)<br>[docker-compose.yml](../../../../sources/memohai__Memoh/docker-compose.yml)<br>[docker/docker-compose.cn.yml](../../../../sources/memohai__Memoh/docker/docker-compose.cn.yml)<br>[docker/docker-compose.sqlite.cn.yml](../../../../sources/memohai__Memoh/docker/docker-compose.sqlite.cn.yml)<br>[docker/docker-compose.yml](../../../../sources/memohai__Memoh/docker/docker-compose.yml)<br>[docker/Dockerfile.server](../../../../sources/memohai__Memoh/docker/Dockerfile.server)<br>[docker/Dockerfile.sparse](../../../../sources/memohai__Memoh/docker/Dockerfile.sparse) |
| instruction | 6 | [AGENTS.md](../../../../sources/memohai__Memoh/AGENTS.md)<br>[packages/ui/AGENTS.md](../../../../sources/memohai__Memoh/packages/ui/AGENTS.md)<br>[internal/workspace/templates/AGENTS.md](../../../../sources/memohai__Memoh/internal/workspace/templates/AGENTS.md)<br>[cmd/bridge/template/AGENTS.md](../../../../sources/memohai__Memoh/cmd/bridge/template/AGENTS.md)<br>[apps/web/AGENTS.md](../../../../sources/memohai__Memoh/apps/web/AGENTS.md)<br>[apps/desktop/AGENTS.md](../../../../sources/memohai__Memoh/apps/desktop/AGENTS.md) |
| docs | 13 | [README_CN.md](../../../../sources/memohai__Memoh/README_CN.md)<br>[README_JA.md](../../../../sources/memohai__Memoh/README_JA.md)<br>[README.md](../../../../sources/memohai__Memoh/README.md)<br>[packages/ui/README.md](../../../../sources/memohai__Memoh/packages/ui/README.md)<br>[packages/sdk/README.md](../../../../sources/memohai__Memoh/packages/sdk/README.md)<br>[packages/config/README.md](../../../../sources/memohai__Memoh/packages/config/README.md)<br>[internal/db/sqlite/sqlc/README.md](../../../../sources/memohai__Memoh/internal/db/sqlite/sqlc/README.md)<br>[docs/kata-containerd.md](../../../../sources/memohai__Memoh/docs/kata-containerd.md) |
| config | 21 | [Cargo.lock](../../../../sources/memohai__Memoh/Cargo.lock)<br>[Cargo.toml](../../../../sources/memohai__Memoh/Cargo.toml)<br>[go.mod](../../../../sources/memohai__Memoh/go.mod)<br>[package.json](../../../../sources/memohai__Memoh/package.json)<br>[pnpm-workspace.yaml](../../../../sources/memohai__Memoh/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/memohai__Memoh/tsconfig.json)<br>[packages/ui/package.json](../../../../sources/memohai__Memoh/packages/ui/package.json)<br>[packages/ui/tsconfig.json](../../../../sources/memohai__Memoh/packages/ui/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 381 | [spec/docs.go](../../../../sources/memohai__Memoh/spec/docs.go)<br>[spec/swagger.json](../../../../sources/memohai__Memoh/spec/swagger.json)<br>[spec/swagger.yaml](../../../../sources/memohai__Memoh/spec/swagger.yaml)<br>[scripts/test-install-root-guard.sh](../../../../sources/memohai__Memoh/scripts/test-install-root-guard.sh)<br>[internal/workspace/bridge_tls_test.go](../../../../sources/memohai__Memoh/internal/workspace/bridge_tls_test.go)<br>[internal/workspace/gpu_labels_test.go](../../../../sources/memohai__Memoh/internal/workspace/gpu_labels_test.go) |
| CI workflows | 10 | [.github/workflows/agents-md-updater.yml](../../../../sources/memohai__Memoh/.github/workflows/agents-md-updater.yml)<br>[.github/workflows/docker.yml](../../../../sources/memohai__Memoh/.github/workflows/docker.yml)<br>[.github/workflows/electron-ci.yml](../../../../sources/memohai__Memoh/.github/workflows/electron-ci.yml)<br>[.github/workflows/eslint.yml](../../../../sources/memohai__Memoh/.github/workflows/eslint.yml)<br>[.github/workflows/go-ci.yml](../../../../sources/memohai__Memoh/.github/workflows/go-ci.yml)<br>[.github/workflows/kata-runtime.yml](../../../../sources/memohai__Memoh/.github/workflows/kata-runtime.yml) |
| Containers / deploy | 19 | [docker-compose.kata.yml](../../../../sources/memohai__Memoh/docker-compose.kata.yml)<br>[docker-compose.sqlite.yml](../../../../sources/memohai__Memoh/docker-compose.sqlite.yml)<br>[docker-compose.yml](../../../../sources/memohai__Memoh/docker-compose.yml)<br>[docker/docker-compose.cn.yml](../../../../sources/memohai__Memoh/docker/docker-compose.cn.yml)<br>[docker/docker-compose.sqlite.cn.yml](../../../../sources/memohai__Memoh/docker/docker-compose.sqlite.cn.yml)<br>[docker/docker-compose.yml](../../../../sources/memohai__Memoh/docker/docker-compose.yml) |
| Security / policy | 63 | [scripts/audit-kata-github-verification.sh](../../../../sources/memohai__Memoh/scripts/audit-kata-github-verification.sh)<br>[scripts/test-install-root-guard.sh](../../../../sources/memohai__Memoh/scripts/test-install-root-guard.sh)<br>[packages/sdk/src/core/auth.gen.ts](../../../../sources/memohai__Memoh/packages/sdk/src/core/auth.gen.ts)<br>[internal/tui/local/auth.go](../../../../sources/memohai__Memoh/internal/tui/local/auth.go)<br>[internal/toolapproval/policy_test.go](../../../../sources/memohai__Memoh/internal/toolapproval/policy_test.go)<br>[internal/toolapproval/policy.go](../../../../sources/memohai__Memoh/internal/toolapproval/policy.go) |
| Agent instructions | 6 | [AGENTS.md](../../../../sources/memohai__Memoh/AGENTS.md)<br>[packages/ui/AGENTS.md](../../../../sources/memohai__Memoh/packages/ui/AGENTS.md)<br>[internal/workspace/templates/AGENTS.md](../../../../sources/memohai__Memoh/internal/workspace/templates/AGENTS.md)<br>[cmd/bridge/template/AGENTS.md](../../../../sources/memohai__Memoh/cmd/bridge/template/AGENTS.md)<br>[apps/web/AGENTS.md](../../../../sources/memohai__Memoh/apps/web/AGENTS.md)<br>[apps/desktop/AGENTS.md](../../../../sources/memohai__Memoh/apps/desktop/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `internal/mcp/connections_test.go`, `internal/mcp/connections.go`, `internal/mcp/http_tools_test.go`.
2. Trace execution through entrypoints: `packages/ui/src/index.ts`, `packages/ui/.storybook/main.ts`, `packages/sdk/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills-lock.json`, `packages/ui/AGENTS.md`.
4. Inspect retrieval/memory/indexing through: `scripts/embed.go`, `packages/ui/src/index.ts`, `packages/ui/src/components/tooltip/index.ts`.
5. Verify behavior through test/eval files: `spec/docs.go`, `spec/swagger.json`, `spec/swagger.yaml`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 ✨ The open source multi agent platform. Every agent gets its own computer, desktop, network, and long term memory.. 핵심 구조 신호는 Go, package.json, Cargo.toml, go.mod, docker-compose.yml, README.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
