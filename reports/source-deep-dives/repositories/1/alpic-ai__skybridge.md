# alpic-ai/skybridge Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Skybridge is a full-stack TypeScript framework for MCP Apps and ChatGPT Apps. Type-safe. React-powered. Platform-agnostic.

## 요약

- 조사 단위: `sources/alpic-ai__skybridge` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 813 files, 165 directories, depth score 131, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=skills/mcp-app-builder/SKILL.md, packages/devtools/src/lib/mcp/browser-oauth-provider.ts, packages/devtools/src/lib/mcp/client.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | alpic-ai/skybridge |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 1754 |
| Forks | 102 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/alpic-ai__skybridge](../../../../sources/alpic-ai__skybridge) |
| Existing report | [reports/global-trending/repositories/alpic-ai__skybridge.md](../../../global-trending/repositories/alpic-ai__skybridge.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 813 / 165 |
| Max observed depth | 9 |
| Top directories | .claude, .github, docs, examples, infrastructure, landing, packages, scripts, skills |
| Top extensions | .ts: 260, .tsx: 124, .json: 98, .mdx: 68, .webp: 64, .png: 45, .md: 44, .svg: 26, .css: 21, (none): 21, .example: 7, .jpg: 6 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/core | packages workspace | 56 |
| packages/devtools | packages workspace | 47 |
| docs | documentation surface | 28 |
| packages/create-skybridge | packages workspace | 22 |
| examples/auth-stytch | examples workspace | 19 |
| examples/auth-workos | examples workspace | 19 |
| examples/capitals | examples workspace | 7 |
| examples/everything | examples workspace | 7 |
| examples/investigation-game | examples workspace | 7 |
| examples/chess | examples workspace | 6 |
| examples/ecom-carousel | examples workspace | 6 |
| examples/generative-ui | examples workspace | 6 |
| examples/manifest-ui | examples workspace | 6 |
| examples/productivity | examples workspace | 6 |
| examples/supabase-triplog | examples workspace | 6 |
| examples/times-up | examples workspace | 6 |
| examples/flight-booking | examples workspace | 5 |
| examples/auth-auth0 | examples workspace | 2 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | pnpm --filter "./packages/*" build |
| test | package.json | test | pnpm -r --if-present test |
| quality | package.json | format | pnpm -r --if-present format |
| test | package.json | test:unit | pnpm -r --if-present test:unit |
| test | package.json | test:format | pnpm -r --if-present test:format |
| serve-dev | package.json | docs:dev | pnpm --filter @skybridge/docs dev |
| utility | package.json | bump | node scripts/bump.js && pnpm i |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [skills/mcp-app-builder/SKILL.md](../../../../sources/alpic-ai__skybridge/skills/mcp-app-builder/SKILL.md) | mcp signal |
| mcp | [packages/devtools/src/lib/mcp/browser-oauth-provider.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/browser-oauth-provider.ts) | mcp signal |
| mcp | [packages/devtools/src/lib/mcp/client.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/client.ts) | mcp signal |
| mcp | [packages/devtools/src/lib/mcp/index.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/index.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/alpic-ai__skybridge/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/skybridge/SKILL.md](../../../../sources/alpic-ai__skybridge/skills/skybridge/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/chatgpt-app-builder/SKILL.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/SKILL.md) | agentRuntime signal |
| entrypoints | [packages/devtools/src/App.tsx](../../../../sources/alpic-ai__skybridge/packages/devtools/src/App.tsx) | entrypoints signal |
| entrypoints | [packages/devtools/src/index.css](../../../../sources/alpic-ai__skybridge/packages/devtools/src/index.css) | entrypoints signal |
| entrypoints | [packages/devtools/src/index.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/index.ts) | entrypoints signal |
| entrypoints | [packages/devtools/src/main.tsx](../../../../sources/alpic-ai__skybridge/packages/devtools/src/main.tsx) | entrypoints signal |
| instruction | [packages/create-skybridge/templates/demo/AGENTS.md](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/AGENTS.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 47 | [packages/devtools/src/App.tsx](../../../../sources/alpic-ai__skybridge/packages/devtools/src/App.tsx)<br>[packages/devtools/src/index.css](../../../../sources/alpic-ai__skybridge/packages/devtools/src/index.css)<br>[packages/devtools/src/index.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/index.ts)<br>[packages/devtools/src/main.tsx](../../../../sources/alpic-ai__skybridge/packages/devtools/src/main.tsx)<br>[packages/devtools/e2e/fixtures/server.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/fixtures/server.ts)<br>[packages/create-skybridge/templates/demo/src/index.css](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/src/index.css)<br>[packages/create-skybridge/templates/demo/src/server.ts](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/src/server.ts)<br>[packages/create-skybridge/templates/blank/src/server.ts](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/blank/src/server.ts) |
| agentRuntime | 96 | [AGENTS.md](../../../../sources/alpic-ai__skybridge/AGENTS.md)<br>[skills/skybridge/SKILL.md](../../../../sources/alpic-ai__skybridge/skills/skybridge/SKILL.md)<br>[skills/mcp-app-builder/SKILL.md](../../../../sources/alpic-ai__skybridge/skills/mcp-app-builder/SKILL.md)<br>[skills/chatgpt-app-builder/SKILL.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/SKILL.md)<br>[skills/chatgpt-app-builder/references/architecture.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/references/architecture.md)<br>[skills/chatgpt-app-builder/references/copy-template.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/references/copy-template.md)<br>[skills/chatgpt-app-builder/references/csp.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/references/csp.md)<br>[skills/chatgpt-app-builder/references/deploy.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/references/deploy.md) |
| mcp | 16 | [skills/mcp-app-builder/SKILL.md](../../../../sources/alpic-ai__skybridge/skills/mcp-app-builder/SKILL.md)<br>[packages/devtools/src/lib/mcp/browser-oauth-provider.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/browser-oauth-provider.ts)<br>[packages/devtools/src/lib/mcp/client.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/client.ts)<br>[packages/devtools/src/lib/mcp/index.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/index.ts)<br>[packages/devtools/src/lib/mcp/webmcp.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/webmcp.ts)<br>[packages/core/src/web/bridges/mcp-app/adaptor.ts](../../../../sources/alpic-ai__skybridge/packages/core/src/web/bridges/mcp-app/adaptor.ts)<br>[packages/core/src/web/bridges/mcp-app/bridge.ts](../../../../sources/alpic-ai__skybridge/packages/core/src/web/bridges/mcp-app/bridge.ts)<br>[packages/core/src/web/bridges/mcp-app/index.ts](../../../../sources/alpic-ai__skybridge/packages/core/src/web/bridges/mcp-app/index.ts) |
| retrieval | 39 | [packages/devtools/index.html](../../../../sources/alpic-ai__skybridge/packages/devtools/index.html)<br>[packages/devtools/src/index.css](../../../../sources/alpic-ai__skybridge/packages/devtools/src/index.css)<br>[packages/devtools/src/index.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/index.ts)<br>[packages/devtools/src/lib/mcp/index.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/index.ts)<br>[packages/devtools/src/components/layout/tools-list/index.tsx](../../../../sources/alpic-ai__skybridge/packages/devtools/src/components/layout/tools-list/index.tsx)<br>[packages/devtools/src/components/layout/tools-list/form/index.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/components/layout/tools-list/form/index.ts)<br>[packages/devtools/src/components/layout/tool-panel/index.tsx](../../../../sources/alpic-ai__skybridge/packages/devtools/src/components/layout/tool-panel/index.tsx)<br>[packages/devtools/src/components/layout/tool-panel/view/index.tsx](../../../../sources/alpic-ai__skybridge/packages/devtools/src/components/layout/tool-panel/view/index.tsx) |
| spec | 6 | [skills/chatgpt-app-builder/references/architecture.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/references/architecture.md)<br>[skills/chatgpt-app-builder/evals/architecture.json](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/evals/architecture.json)<br>[packages/devtools/e2e/tests/auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/auth.spec.ts)<br>[packages/devtools/e2e/tests/every-input-type.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/every-input-type.spec.ts)<br>[packages/devtools/e2e/tests/mixed-auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/mixed-auth.spec.ts)<br>[packages/devtools/e2e/tests/smoke.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/smoke.spec.ts) |
| eval | 51 | [packages/devtools/e2e/tests/auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/auth.spec.ts)<br>[packages/devtools/e2e/tests/every-input-type.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/every-input-type.spec.ts)<br>[packages/devtools/e2e/tests/mixed-auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/mixed-auth.spec.ts)<br>[packages/devtools/e2e/tests/smoke.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/smoke.spec.ts)<br>[packages/create-skybridge/src/index.test.ts](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/src/index.test.ts)<br>[packages/core/src/web/create-store.test.ts](../../../../sources/alpic-ai__skybridge/packages/core/src/web/create-store.test.ts)<br>[packages/core/src/web/data-llm.test.tsx](../../../../sources/alpic-ai__skybridge/packages/core/src/web/data-llm.test.tsx)<br>[packages/core/src/web/generate-helpers.test-d.ts](../../../../sources/alpic-ai__skybridge/packages/core/src/web/generate-helpers.test-d.ts) |
| security | 72 | [SECURITY.md](../../../../sources/alpic-ai__skybridge/SECURITY.md)<br>[skills/chatgpt-app-builder/references/oauth.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/references/oauth.md)<br>[packages/devtools/src/lib/auth-store.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/auth-store.ts)<br>[packages/devtools/src/lib/mcp/browser-oauth-provider.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/browser-oauth-provider.ts)<br>[packages/devtools/e2e/tests/auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/auth.spec.ts)<br>[packages/devtools/e2e/tests/mixed-auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/mixed-auth.spec.ts)<br>[packages/devtools/e2e/fixtures/mock-auth-server.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/fixtures/mock-auth-server.ts)<br>[packages/devtools/e2e/fixtures/seed-auth.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/fixtures/seed-auth.ts) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/ci.yml)<br>[.github/workflows/deploy-infra.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/deploy-infra.yml)<br>[.github/workflows/deploy-landing.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/deploy-landing.yml)<br>[.github/workflows/publish.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/publish.yml) |
| container | 2 | [packages/create-skybridge/templates/demo/Dockerfile](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/Dockerfile)<br>[packages/create-skybridge/templates/blank/Dockerfile](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/blank/Dockerfile) |
| instruction | 5 | [AGENTS.md](../../../../sources/alpic-ai__skybridge/AGENTS.md)<br>[packages/create-skybridge/templates/demo/AGENTS.md](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/AGENTS.md)<br>[packages/create-skybridge/templates/blank/AGENTS.md](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/blank/AGENTS.md)<br>[landing/CLAUDE.md](../../../../sources/alpic-ai__skybridge/landing/CLAUDE.md)<br>[examples/investigation-game/AGENTS.md](../../../../sources/alpic-ai__skybridge/examples/investigation-game/AGENTS.md) |
| docs | 136 | [README.md](../../../../sources/alpic-ai__skybridge/README.md)<br>[skills/chatgpt-app-builder/evals/README.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/evals/README.md)<br>[packages/create-skybridge/templates/demo/README.md](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/README.md)<br>[packages/create-skybridge/templates/blank/README.md](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/blank/README.md)<br>[examples/times-up/README.md](../../../../sources/alpic-ai__skybridge/examples/times-up/README.md)<br>[examples/supabase-triplog/README.md](../../../../sources/alpic-ai__skybridge/examples/supabase-triplog/README.md)<br>[examples/productivity/README.md](../../../../sources/alpic-ai__skybridge/examples/productivity/README.md)<br>[examples/manifest-ui/README.md](../../../../sources/alpic-ai__skybridge/examples/manifest-ui/README.md) |
| config | 48 | [package.json](../../../../sources/alpic-ai__skybridge/package.json)<br>[pnpm-workspace.yaml](../../../../sources/alpic-ai__skybridge/pnpm-workspace.yaml)<br>[packages/devtools/package.json](../../../../sources/alpic-ai__skybridge/packages/devtools/package.json)<br>[packages/devtools/tsconfig.json](../../../../sources/alpic-ai__skybridge/packages/devtools/tsconfig.json)<br>[packages/devtools/e2e/tsconfig.json](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tsconfig.json)<br>[packages/create-skybridge/package.json](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/package.json)<br>[packages/create-skybridge/tsconfig.json](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/tsconfig.json)<br>[packages/create-skybridge/templates/demo/package.json](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 51 | [packages/devtools/e2e/tests/auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/auth.spec.ts)<br>[packages/devtools/e2e/tests/every-input-type.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/every-input-type.spec.ts)<br>[packages/devtools/e2e/tests/mixed-auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/mixed-auth.spec.ts)<br>[packages/devtools/e2e/tests/smoke.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/smoke.spec.ts)<br>[packages/create-skybridge/src/index.test.ts](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/src/index.test.ts)<br>[packages/core/src/web/create-store.test.ts](../../../../sources/alpic-ai__skybridge/packages/core/src/web/create-store.test.ts) |
| CI workflows | 4 | [.github/workflows/ci.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/ci.yml)<br>[.github/workflows/deploy-infra.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/deploy-infra.yml)<br>[.github/workflows/deploy-landing.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/deploy-landing.yml)<br>[.github/workflows/publish.yml](../../../../sources/alpic-ai__skybridge/.github/workflows/publish.yml) |
| Containers / deploy | 2 | [packages/create-skybridge/templates/demo/Dockerfile](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/Dockerfile)<br>[packages/create-skybridge/templates/blank/Dockerfile](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/blank/Dockerfile) |
| Security / policy | 72 | [SECURITY.md](../../../../sources/alpic-ai__skybridge/SECURITY.md)<br>[skills/chatgpt-app-builder/references/oauth.md](../../../../sources/alpic-ai__skybridge/skills/chatgpt-app-builder/references/oauth.md)<br>[packages/devtools/src/lib/auth-store.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/auth-store.ts)<br>[packages/devtools/src/lib/mcp/browser-oauth-provider.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/src/lib/mcp/browser-oauth-provider.ts)<br>[packages/devtools/e2e/tests/auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/auth.spec.ts)<br>[packages/devtools/e2e/tests/mixed-auth.spec.ts](../../../../sources/alpic-ai__skybridge/packages/devtools/e2e/tests/mixed-auth.spec.ts) |
| Agent instructions | 5 | [AGENTS.md](../../../../sources/alpic-ai__skybridge/AGENTS.md)<br>[packages/create-skybridge/templates/demo/AGENTS.md](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/demo/AGENTS.md)<br>[packages/create-skybridge/templates/blank/AGENTS.md](../../../../sources/alpic-ai__skybridge/packages/create-skybridge/templates/blank/AGENTS.md)<br>[landing/CLAUDE.md](../../../../sources/alpic-ai__skybridge/landing/CLAUDE.md)<br>[examples/investigation-game/AGENTS.md](../../../../sources/alpic-ai__skybridge/examples/investigation-game/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `skills/mcp-app-builder/SKILL.md`, `packages/devtools/src/lib/mcp/browser-oauth-provider.ts`, `packages/devtools/src/lib/mcp/client.ts`.
2. Trace execution through entrypoints: `packages/devtools/src/App.tsx`, `packages/devtools/src/index.css`, `packages/devtools/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills/skybridge/SKILL.md`, `skills/mcp-app-builder/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `packages/devtools/index.html`, `packages/devtools/src/index.css`, `packages/devtools/src/index.ts`.
5. Verify behavior through test/eval files: `packages/devtools/e2e/tests/auth.spec.ts`, `packages/devtools/e2e/tests/every-input-type.spec.ts`, `packages/devtools/e2e/tests/mixed-auth.spec.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Skybridge is a full stack TypeScript framework for MCP Apps and ChatGPT Apps. Type safe. React powered. Platform agnosti. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
