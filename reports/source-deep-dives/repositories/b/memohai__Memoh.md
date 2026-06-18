# memohai/Memoh 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

✨ The open-source multi-agent platform. Every agent gets its own computer, desktop, network, and long-term memory.

## 요약

- 조사 단위: `sources/memohai__Memoh` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,601 files, 374 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/mcp/connections_test.go, internal/mcp/connections.go, internal/mcp/http_tools_test.go이고, 의존성 단서는 modelcontextprotocol, cobra, chroma, qdrant, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | memohai/Memoh |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 1910 |
| Forks | 181 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/memohai__Memoh](../../../../sources/memohai__Memoh) |
| 기존 보고서 | [reports/global-trending/repositories/memohai__Memoh.md](../../../global-trending/repositories/memohai__Memoh.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2601 / 374 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .agents, .claude, .github, .husky, .zed, apps, assets, cmd, conf, crates, db, devenv, docker, docs, internal, packages, scripts, spec |
| 상위 확장자 | .go: 1016, .vue: 611, .sql: 322, .ts: 289, .svg: 102, .md: 49, .yaml: 36, .json: 33, (none): 29, .yml: 27, .sh: 19, .toml: 16 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | chroma, qdrant |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | cobra |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 381 | [spec/docs.go](../../../../sources/memohai__Memoh/spec/docs.go)<br>[spec/swagger.json](../../../../sources/memohai__Memoh/spec/swagger.json)<br>[spec/swagger.yaml](../../../../sources/memohai__Memoh/spec/swagger.yaml)<br>[scripts/test-install-root-guard.sh](../../../../sources/memohai__Memoh/scripts/test-install-root-guard.sh)<br>[internal/workspace/bridge_tls_test.go](../../../../sources/memohai__Memoh/internal/workspace/bridge_tls_test.go)<br>[internal/workspace/gpu_labels_test.go](../../../../sources/memohai__Memoh/internal/workspace/gpu_labels_test.go) |
| CI workflow | 10 | [.github/workflows/agents-md-updater.yml](../../../../sources/memohai__Memoh/.github/workflows/agents-md-updater.yml)<br>[.github/workflows/docker.yml](../../../../sources/memohai__Memoh/.github/workflows/docker.yml)<br>[.github/workflows/electron-ci.yml](../../../../sources/memohai__Memoh/.github/workflows/electron-ci.yml)<br>[.github/workflows/eslint.yml](../../../../sources/memohai__Memoh/.github/workflows/eslint.yml)<br>[.github/workflows/go-ci.yml](../../../../sources/memohai__Memoh/.github/workflows/go-ci.yml)<br>[.github/workflows/kata-runtime.yml](../../../../sources/memohai__Memoh/.github/workflows/kata-runtime.yml) |
| 컨테이너/배포 | 19 | [docker-compose.kata.yml](../../../../sources/memohai__Memoh/docker-compose.kata.yml)<br>[docker-compose.sqlite.yml](../../../../sources/memohai__Memoh/docker-compose.sqlite.yml)<br>[docker-compose.yml](../../../../sources/memohai__Memoh/docker-compose.yml)<br>[docker/docker-compose.cn.yml](../../../../sources/memohai__Memoh/docker/docker-compose.cn.yml)<br>[docker/docker-compose.sqlite.cn.yml](../../../../sources/memohai__Memoh/docker/docker-compose.sqlite.cn.yml)<br>[docker/docker-compose.yml](../../../../sources/memohai__Memoh/docker/docker-compose.yml) |
| 보안/정책 | 63 | [scripts/audit-kata-github-verification.sh](../../../../sources/memohai__Memoh/scripts/audit-kata-github-verification.sh)<br>[scripts/test-install-root-guard.sh](../../../../sources/memohai__Memoh/scripts/test-install-root-guard.sh)<br>[packages/sdk/src/core/auth.gen.ts](../../../../sources/memohai__Memoh/packages/sdk/src/core/auth.gen.ts)<br>[internal/tui/local/auth.go](../../../../sources/memohai__Memoh/internal/tui/local/auth.go)<br>[internal/toolapproval/policy_test.go](../../../../sources/memohai__Memoh/internal/toolapproval/policy_test.go)<br>[internal/toolapproval/policy.go](../../../../sources/memohai__Memoh/internal/toolapproval/policy.go) |
| 에이전트 지시문 | 6 | [AGENTS.md](../../../../sources/memohai__Memoh/AGENTS.md)<br>[packages/ui/AGENTS.md](../../../../sources/memohai__Memoh/packages/ui/AGENTS.md)<br>[internal/workspace/templates/AGENTS.md](../../../../sources/memohai__Memoh/internal/workspace/templates/AGENTS.md)<br>[cmd/bridge/template/AGENTS.md](../../../../sources/memohai__Memoh/cmd/bridge/template/AGENTS.md)<br>[apps/web/AGENTS.md](../../../../sources/memohai__Memoh/apps/web/AGENTS.md)<br>[apps/desktop/AGENTS.md](../../../../sources/memohai__Memoh/apps/desktop/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `internal/mcp/connections_test.go`, `internal/mcp/connections.go`, `internal/mcp/http_tools_test.go`.
2. entrypoint를 따라 실행 흐름 확인: `packages/ui/src/index.ts`, `packages/ui/.storybook/main.ts`, `packages/sdk/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills-lock.json`, `packages/ui/AGENTS.md`.
4. retrieval/memory/indexing 확인: `scripts/embed.go`, `packages/ui/src/index.ts`, `packages/ui/src/components/tooltip/index.ts`.
5. test/eval 파일로 동작 검증: `spec/docs.go`, `spec/swagger.json`, `spec/swagger.yaml`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 ✨ The open source multi agent platform. Every agent gets its own computer, desktop, network, and long term memory.. 핵심 구조 신호는 Go, package.json, Cargo.toml, go.mod, docker-compose.yml, README.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
