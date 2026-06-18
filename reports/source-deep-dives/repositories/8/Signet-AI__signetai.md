# Signet-AI/signetai 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local-first identity, memory, and secrets for AI agents. Portable state across models and harnesses.

## 요약

- 조사 단위: `sources/Signet-AI__signetai` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,980 files, 330 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=surfaces/dashboard/src/lib/stores/marketplace-mcp.svelte.ts, surfaces/dashboard/src/lib/stores/mcp-analytics.svelte.ts, surfaces/cli/src/commands/mcp.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Signet-AI/signetai |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 198 |
| Forks | 36 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Signet-AI__signetai](../../../../sources/Signet-AI__signetai) |
| 기존 보고서 | [reports/global-trending/repositories/Signet-AI__signetai.md](../../../global-trending/repositories/Signet-AI__signetai.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1980 / 330 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .githooks, .github, deploy, docs, integrations, libs, memorybench, platform, plugins, public, scripts, skills, surfaces, tests, web |
| 상위 확장자 | .ts: 1002, .svelte: 205, .md: 147, .rs: 110, .json: 69, .sql: 65, .png: 62, .tsx: 45, .astro: 44, (none): 44, .js: 17, .mdx: 17 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| web | source boundary | 55 |
| docs | documentation surface | 20 |
| tests | validation surface | 12 |
| libs/sdk | libs workspace | 2 |
| .github | ci surface | 1 |
| deploy | deployment surface | 1 |
| integrations | top-level component | 1 |
| libs | source boundary | 1 |
| libs/connector-base | libs workspace | 1 |
| memorybench | validation surface | 1 |
| platform | top-level component | 1 |
| plugins | top-level component | 1 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| surfaces | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | bun run build:core && bun run build:connector-base && bun run build:opencode-plugin && bun run build:native && bun run build:oh-my-pi-extension && bun run build:connector-oh-my-pi && bun run build:pi-extension && bun run |
| build | package.json | build:native | bun scripts/build-native.ts |
| build | package.json | build:core | cd platform/core && bun run build |
| build | package.json | build:connector-base | cd libs/connector-base && bun run build |
| build | package.json | build:connector-oh-my-pi | cd integrations/oh-my-pi/connector && bun run build |
| build | package.json | build:opencode-plugin | cd integrations/opencode/plugin && bun run build |
| build | package.json | build:oh-my-pi-extension | cd integrations/oh-my-pi/extension && bun run build |
| build | package.json | build:pi-extension | cd integrations/pi/extension && bun run build |
| build | package.json | build:connector-pi | cd integrations/pi/connector && bun run build |
| build | package.json | build:deps | bun run --filter '@signet/sdk' build && bun run --filter '@signet/connector-claude-code' --filter '@signet/connector-codex' --filter '@signet/connector-gemini' --filter '@signet/connector-hermes-agent' --filter '@signet/ |
| build | package.json | build:signetai | cd dist/signetai && bun run build |
| build | package.json | build:native-bun | bun scripts/build-native-bun.ts |
| utility | package.json | native:manifest | bun scripts/generate-native-manifest.ts |
| build | package.json | build:publish | bun run build:dashboard |
| build | package.json | build:dashboard | cd surfaces/dashboard && bun install && bun run build |
| build | package.json | build:desktop | cd surfaces/desktop && bun run build:desktop |
| build | package.json | build:tray | cd surfaces/tray && bun run build |
| serve-dev | package.json | start | cd platform/daemon && bun run start |
| serve-dev | package.json | dev | bun run --filter '*' dev |
| test | package.json | test | bun run --filter '*' test |
| quality | package.json | lint | biome check . |
| quality | package.json | format | biome format --write . |
| quality | package.json | typecheck | bun run --filter '*' typecheck |
| utility | package.json | version:sync | bun scripts/version-sync.ts |
| serve-dev | package.json | dev:web | cd web/marketing && bun run dev |
| utility | package.json | deploy:web | cd web/marketing && bun run deploy |
| utility | package.json | changelog | bun scripts/changelog.ts |
| test | package.json | test:prompt:structural | SIGNET_OLLAMA_TEST_MODEL=nemotron-3-nano:4b bun test platform/daemon/src/pipeline/structural-dependency.test.ts |
| test | package.json | test:prompt:synthesis | SIGNET_OLLAMA_TEST_MODEL=nemotron-3-nano:4b bun test platform/daemon/src/pipeline/dependency-synthesis.test.ts |
| utility | package.json | probe:signet-mcp | bun scripts/probe-signet-mcp.ts |
| build | package.json | build:turbo | turbo run build |
| test | package.json | test:turbo | turbo run test |
| quality | package.json | typecheck:turbo | turbo run typecheck |
| quality | package.json | check:rust-parity | bun scripts/check-rust-daemon-parity.ts |
| utility | package.json | bench | bun scripts/bench-memory.ts |
| utility | package.json | bench:ingest | bun scripts/bench-memory.ts ingest |
| utility | package.json | bench:evaluate | bun scripts/bench-memory.ts --resume run --from-phase search |


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
| mcp | [surfaces/dashboard/src/lib/stores/marketplace-mcp.svelte.ts](../../../../sources/Signet-AI__signetai/surfaces/dashboard/src/lib/stores/marketplace-mcp.svelte.ts) | mcp signal |
| mcp | [surfaces/dashboard/src/lib/stores/mcp-analytics.svelte.ts](../../../../sources/Signet-AI__signetai/surfaces/dashboard/src/lib/stores/mcp-analytics.svelte.ts) | mcp signal |
| mcp | [surfaces/cli/src/commands/mcp.ts](../../../../sources/Signet-AI__signetai/surfaces/cli/src/commands/mcp.ts) | mcp signal |
| mcp | [scripts/build-signet-mcp.ts](../../../../sources/Signet-AI__signetai/scripts/build-signet-mcp.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/Signet-AI__signetai/AGENTS.md) | agentRuntime signal |
| agentRuntime | [web/marketing/public/memory-loop-blueprint.jpg](../../../../sources/Signet-AI__signetai/web/marketing/public/memory-loop-blueprint.jpg) | agentRuntime signal |
| agentRuntime | [web/marketing/public/skill.md](../../../../sources/Signet-AI__signetai/web/marketing/public/skill.md) | agentRuntime signal |
| agentRuntime | [surfaces/dashboard/src/lib/agent-presence.test.js](../../../../sources/Signet-AI__signetai/surfaces/dashboard/src/lib/agent-presence.test.js) | agentRuntime signal |
| entrypoints | [web/workers/reviews/src/index.ts](../../../../sources/Signet-AI__signetai/web/workers/reviews/src/index.ts) | entrypoints signal |
| entrypoints | [surfaces/tray/src/index.ts](../../../../sources/Signet-AI__signetai/surfaces/tray/src/index.ts) | entrypoints signal |
| entrypoints | [surfaces/desktop/src/main.ts](../../../../sources/Signet-AI__signetai/surfaces/desktop/src/main.ts) | entrypoints signal |
| entrypoints | [surfaces/dashboard/src/app.css](../../../../sources/Signet-AI__signetai/surfaces/dashboard/src/app.css) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 42 | [web/workers/reviews/src/index.ts](../../../../sources/Signet-AI__signetai/web/workers/reviews/src/index.ts)<br>[surfaces/tray/src/index.ts](../../../../sources/Signet-AI__signetai/surfaces/tray/src/index.ts)<br>[surfaces/desktop/src/main.ts](../../../../sources/Signet-AI__signetai/surfaces/desktop/src/main.ts)<br>[surfaces/dashboard/src/app.css](../../../../sources/Signet-AI__signetai/surfaces/dashboard/src/app.css)<br>[surfaces/dashboard/src/app.html](../../../../sources/Signet-AI__signetai/surfaces/dashboard/src/app.html)<br>[surfaces/cli/src/cli.ts](../../../../sources/Signet-AI__signetai/surfaces/cli/src/cli.ts)<br>[platform/daemon-rs/spike/src/main.rs](../../../../sources/Signet-AI__signetai/platform/daemon-rs/spike/src/main.rs)<br>[platform/daemon-rs/crates/signet-shadow/src/main.rs](../../../../sources/Signet-AI__signetai/platform/daemon-rs/crates/signet-shadow/src/main.rs) |
| agentRuntime | 159 | [AGENTS.md](../../../../sources/Signet-AI__signetai/AGENTS.md)<br>[web/marketing/public/memory-loop-blueprint.jpg](../../../../sources/Signet-AI__signetai/web/marketing/public/memory-loop-blueprint.jpg)<br>[web/marketing/public/skill.md](../../../../sources/Signet-AI__signetai/web/marketing/public/skill.md)<br>[surfaces/dashboard/src/lib/agent-presence.test.js](../../../../sources/Signet-AI__signetai/surfaces/dashboard/src/lib/agent-presence.test.js)<br>[surfaces/dashboard/src/lib/agent-presence.ts](../../../../sources/Signet-AI__signetai/surfaces/dashboard/src/lib/agent-presence.ts)<br>[surfaces/dashboard/src/lib/stores/memory.svelte.ts](../../../../sources/Signet-AI__signetai/surfaces/dashboard/src/lib/stores/memory.svelte.ts)<br>[surfaces/dashboard/src/lib/stores/skills.svelte.ts](../../../../sources/Signet-AI__signetai/surfaces/dashboard/src/lib/stores/skills.svelte.ts)<br>[surfaces/dashboard/src/lib/skills/risk-profile.ts](../../../../sources/Signet-AI__signetai/surfaces/dashboard/src/lib/skills/risk-profile.ts) |
| mcp | 26 | [surfaces/dashboard/src/lib/stores/marketplace-mcp.svelte.ts](../../../../sources/Signet-AI__signetai/surfaces/dashboard/src/lib/stores/marketplace-mcp.svelte.ts)<br>[surfaces/dashboard/src/lib/stores/mcp-analytics.svelte.ts](../../../../sources/Signet-AI__signetai/surfaces/dashboard/src/lib/stores/mcp-analytics.svelte.ts)<br>[surfaces/cli/src/commands/mcp.ts](../../../../sources/Signet-AI__signetai/surfaces/cli/src/commands/mcp.ts)<br>[scripts/build-signet-mcp.ts](../../../../sources/Signet-AI__signetai/scripts/build-signet-mcp.ts)<br>[scripts/probe-signet-mcp.ts](../../../../sources/Signet-AI__signetai/scripts/probe-signet-mcp.ts)<br>[scripts/signet-mcp-stdio-smoke.test.ts](../../../../sources/Signet-AI__signetai/scripts/signet-mcp-stdio-smoke.test.ts)<br>[platform/daemon-rs/crates/signet-mcp-stdio/Cargo.toml](../../../../sources/Signet-AI__signetai/platform/daemon-rs/crates/signet-mcp-stdio/Cargo.toml)<br>[platform/daemon-rs/crates/signet-mcp-stdio/src/main.rs](../../../../sources/Signet-AI__signetai/platform/daemon-rs/crates/signet-mcp-stdio/src/main.rs) |
| retrieval | 304 | [web/workers/reviews/src/index.ts](../../../../sources/Signet-AI__signetai/web/workers/reviews/src/index.ts)<br>[web/public/marketing/ads/ai-memory-suck-wojak-meme.png](../../../../sources/Signet-AI__signetai/web/public/marketing/ads/ai-memory-suck-wojak-meme.png)<br>[web/public/marketing/ads/free-ai-agent-permanent-memory.png](../../../../sources/Signet-AI__signetai/web/public/marketing/ads/free-ai-agent-permanent-memory.png)<br>[web/public/marketing/ads/signet-ai-memory-suck-setup-call-ad.png](../../../../sources/Signet-AI__signetai/web/public/marketing/ads/signet-ai-memory-suck-setup-call-ad.png)<br>[web/marketing/src/styles/graph.css](../../../../sources/Signet-AI__signetai/web/marketing/src/styles/graph.css)<br>[web/marketing/src/pages/index.astro](../../../../sources/Signet-AI__signetai/web/marketing/src/pages/index.astro)<br>[web/marketing/src/pages/docs/index.astro](../../../../sources/Signet-AI__signetai/web/marketing/src/pages/docs/index.astro)<br>[web/marketing/src/pages/blog/index.astro](../../../../sources/Signet-AI__signetai/web/marketing/src/pages/blog/index.astro) |
| spec | 23 | [ROADMAP.md](../../../../sources/Signet-AI__signetai/ROADMAP.md)<br>[web/marketing/src/styles/architecture.css](../../../../sources/Signet-AI__signetai/web/marketing/src/styles/architecture.css)<br>[web/marketing/src/content/blog/knowledge-architecture.mdx](../../../../sources/Signet-AI__signetai/web/marketing/src/content/blog/knowledge-architecture.mdx)<br>[web/marketing/src/components/architecture/ArchCta.astro](../../../../sources/Signet-AI__signetai/web/marketing/src/components/architecture/ArchCta.astro)<br>[web/marketing/src/components/architecture/ArchDataFlow.astro](../../../../sources/Signet-AI__signetai/web/marketing/src/components/architecture/ArchDataFlow.astro)<br>[web/marketing/src/components/architecture/ArchHarnesses.astro](../../../../sources/Signet-AI__signetai/web/marketing/src/components/architecture/ArchHarnesses.astro)<br>[web/marketing/src/components/architecture/ArchHero.astro](../../../../sources/Signet-AI__signetai/web/marketing/src/components/architecture/ArchHero.astro)<br>[web/marketing/src/components/architecture/ArchIdentity.astro](../../../../sources/Signet-AI__signetai/web/marketing/src/components/architecture/ArchIdentity.astro) |
| eval | 325 | [web/marketing/src/components/landing/Benchmark.astro](../../../../sources/Signet-AI__signetai/web/marketing/src/components/landing/Benchmark.astro)<br>[tests/README.md](../../../../sources/Signet-AI__signetai/tests/README.md)<br>[tests/integration/docker-build-regression.test.ts](../../../../sources/Signet-AI__signetai/tests/integration/docker-build-regression.test.ts)<br>[tests/integration/fd-stress-test.sh](../../../../sources/Signet-AI__signetai/tests/integration/fd-stress-test.sh)<br>[tests/integration/pipeline-llm.test.ts](../../../../sources/Signet-AI__signetai/tests/integration/pipeline-llm.test.ts)<br>[tests/integration/search-visibility-regression.test.ts](../../../../sources/Signet-AI__signetai/tests/integration/search-visibility-regression.test.ts)<br>[tests/integration/synthesis-stress-test.sh](../../../../sources/Signet-AI__signetai/tests/integration/synthesis-stress-test.sh)<br>[tests/integration/version-consistency-workflow.test.ts](../../../../sources/Signet-AI__signetai/tests/integration/version-consistency-workflow.test.ts) |
| security | 32 | [AI_POLICY.md](../../../../sources/Signet-AI__signetai/AI_POLICY.md)<br>[SECURITY.md](../../../../sources/Signet-AI__signetai/SECURITY.md)<br>[web/marketing/public/.well-known/security.txt](../../../../sources/Signet-AI__signetai/web/marketing/public/.well-known/security.txt)<br>[surfaces/dashboard/src/lib/components/audit/DatabaseSchemaPanel.svelte](../../../../sources/Signet-AI__signetai/surfaces/dashboard/src/lib/components/audit/DatabaseSchemaPanel.svelte)<br>[surfaces/cli/templates/memory/scripts/migrations/004_spec_compliance.sql](../../../../sources/Signet-AI__signetai/surfaces/cli/templates/memory/scripts/migrations/004_spec_compliance.sql)<br>[surfaces/cli/src/commands/secret.ts](../../../../sources/Signet-AI__signetai/surfaces/cli/src/commands/secret.ts)<br>[platform/daemon-rs/crates/signet-daemon/src/routes/auth.rs](../../../../sources/Signet-AI__signetai/platform/daemon-rs/crates/signet-daemon/src/routes/auth.rs)<br>[platform/daemon-rs/crates/signet-daemon/src/auth/middleware.rs](../../../../sources/Signet-AI__signetai/platform/daemon-rs/crates/signet-daemon/src/auth/middleware.rs) |
| ci | 12 | [.github/workflows/bugfix-regression-check.yml](../../../../sources/Signet-AI__signetai/.github/workflows/bugfix-regression-check.yml)<br>[.github/workflows/deploy-web.yml](../../../../sources/Signet-AI__signetai/.github/workflows/deploy-web.yml)<br>[.github/workflows/desktop-build.yml](../../../../sources/Signet-AI__signetai/.github/workflows/desktop-build.yml)<br>[.github/workflows/docker-image.yml](../../../../sources/Signet-AI__signetai/.github/workflows/docker-image.yml)<br>[.github/workflows/docker-smoke.yml](../../../../sources/Signet-AI__signetai/.github/workflows/docker-smoke.yml)<br>[.github/workflows/migration-guard.yml](../../../../sources/Signet-AI__signetai/.github/workflows/migration-guard.yml)<br>[.github/workflows/pr-readiness-check.yml](../../../../sources/Signet-AI__signetai/.github/workflows/pr-readiness-check.yml)<br>[.github/workflows/promote-release.yml](../../../../sources/Signet-AI__signetai/.github/workflows/promote-release.yml) |
| container | 14 | [deploy/docker/.env.example](../../../../sources/Signet-AI__signetai/deploy/docker/.env.example)<br>[deploy/docker/Caddyfile](../../../../sources/Signet-AI__signetai/deploy/docker/Caddyfile)<br>[deploy/docker/compose.yml](../../../../sources/Signet-AI__signetai/deploy/docker/compose.yml)<br>[deploy/docker/Dockerfile](../../../../sources/Signet-AI__signetai/deploy/docker/Dockerfile)<br>[deploy/docker/entrypoint.sh](../../../../sources/Signet-AI__signetai/deploy/docker/entrypoint.sh)<br>[deploy/docker/README.md](../../../../sources/Signet-AI__signetai/deploy/docker/README.md)<br>[deploy/docker/scripts/create-token.mjs](../../../../sources/Signet-AI__signetai/deploy/docker/scripts/create-token.mjs)<br>[deploy/docker/scripts/healthcheck.mjs](../../../../sources/Signet-AI__signetai/deploy/docker/scripts/healthcheck.mjs) |
| instruction | 2 | [AGENTS.md](../../../../sources/Signet-AI__signetai/AGENTS.md)<br>[surfaces/cli/templates/AGENTS.md.template](../../../../sources/Signet-AI__signetai/surfaces/cli/templates/AGENTS.md.template) |
| docs | 122 | [README.md](../../../../sources/Signet-AI__signetai/README.md)<br>`web/marketing/src/pages/docs/[...slug].astro`<br>[web/marketing/src/pages/docs/index.astro](../../../../sources/Signet-AI__signetai/web/marketing/src/pages/docs/index.astro)<br>[web/marketing/src/components/docs/DocSearch.tsx](../../../../sources/Signet-AI__signetai/web/marketing/src/components/docs/DocSearch.tsx)<br>[web/marketing/src/components/docs/DocsSidebar.tsx](../../../../sources/Signet-AI__signetai/web/marketing/src/components/docs/DocsSidebar.tsx)<br>[web/marketing/src/components/docs/Sidebar.astro](../../../../sources/Signet-AI__signetai/web/marketing/src/components/docs/Sidebar.astro)<br>[tests/README.md](../../../../sources/Signet-AI__signetai/tests/README.md)<br>[surfaces/dashboard/README.md](../../../../sources/Signet-AI__signetai/surfaces/dashboard/README.md) |
| config | 69 | [package.json](../../../../sources/Signet-AI__signetai/package.json)<br>[tsconfig.json](../../../../sources/Signet-AI__signetai/tsconfig.json)<br>[turbo.json](../../../../sources/Signet-AI__signetai/turbo.json)<br>[web/workers/reviews/package.json](../../../../sources/Signet-AI__signetai/web/workers/reviews/package.json)<br>[web/workers/reviews/tsconfig.json](../../../../sources/Signet-AI__signetai/web/workers/reviews/tsconfig.json)<br>[web/marketing/package.json](../../../../sources/Signet-AI__signetai/web/marketing/package.json)<br>[web/marketing/tsconfig.json](../../../../sources/Signet-AI__signetai/web/marketing/tsconfig.json)<br>[surfaces/tray/package.json](../../../../sources/Signet-AI__signetai/surfaces/tray/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 325 | [web/marketing/src/components/landing/Benchmark.astro](../../../../sources/Signet-AI__signetai/web/marketing/src/components/landing/Benchmark.astro)<br>[tests/README.md](../../../../sources/Signet-AI__signetai/tests/README.md)<br>[tests/integration/docker-build-regression.test.ts](../../../../sources/Signet-AI__signetai/tests/integration/docker-build-regression.test.ts)<br>[tests/integration/fd-stress-test.sh](../../../../sources/Signet-AI__signetai/tests/integration/fd-stress-test.sh)<br>[tests/integration/pipeline-llm.test.ts](../../../../sources/Signet-AI__signetai/tests/integration/pipeline-llm.test.ts)<br>[tests/integration/search-visibility-regression.test.ts](../../../../sources/Signet-AI__signetai/tests/integration/search-visibility-regression.test.ts) |
| CI workflow | 12 | [.github/workflows/bugfix-regression-check.yml](../../../../sources/Signet-AI__signetai/.github/workflows/bugfix-regression-check.yml)<br>[.github/workflows/deploy-web.yml](../../../../sources/Signet-AI__signetai/.github/workflows/deploy-web.yml)<br>[.github/workflows/desktop-build.yml](../../../../sources/Signet-AI__signetai/.github/workflows/desktop-build.yml)<br>[.github/workflows/docker-image.yml](../../../../sources/Signet-AI__signetai/.github/workflows/docker-image.yml)<br>[.github/workflows/docker-smoke.yml](../../../../sources/Signet-AI__signetai/.github/workflows/docker-smoke.yml)<br>[.github/workflows/migration-guard.yml](../../../../sources/Signet-AI__signetai/.github/workflows/migration-guard.yml) |
| 컨테이너/배포 | 14 | [deploy/docker/.env.example](../../../../sources/Signet-AI__signetai/deploy/docker/.env.example)<br>[deploy/docker/Caddyfile](../../../../sources/Signet-AI__signetai/deploy/docker/Caddyfile)<br>[deploy/docker/compose.yml](../../../../sources/Signet-AI__signetai/deploy/docker/compose.yml)<br>[deploy/docker/Dockerfile](../../../../sources/Signet-AI__signetai/deploy/docker/Dockerfile)<br>[deploy/docker/entrypoint.sh](../../../../sources/Signet-AI__signetai/deploy/docker/entrypoint.sh)<br>[deploy/docker/README.md](../../../../sources/Signet-AI__signetai/deploy/docker/README.md) |
| 보안/정책 | 32 | [AI_POLICY.md](../../../../sources/Signet-AI__signetai/AI_POLICY.md)<br>[SECURITY.md](../../../../sources/Signet-AI__signetai/SECURITY.md)<br>[web/marketing/public/.well-known/security.txt](../../../../sources/Signet-AI__signetai/web/marketing/public/.well-known/security.txt)<br>[surfaces/dashboard/src/lib/components/audit/DatabaseSchemaPanel.svelte](../../../../sources/Signet-AI__signetai/surfaces/dashboard/src/lib/components/audit/DatabaseSchemaPanel.svelte)<br>[surfaces/cli/templates/memory/scripts/migrations/004_spec_compliance.sql](../../../../sources/Signet-AI__signetai/surfaces/cli/templates/memory/scripts/migrations/004_spec_compliance.sql)<br>[surfaces/cli/src/commands/secret.ts](../../../../sources/Signet-AI__signetai/surfaces/cli/src/commands/secret.ts) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/Signet-AI__signetai/AGENTS.md)<br>[surfaces/cli/templates/AGENTS.md.template](../../../../sources/Signet-AI__signetai/surfaces/cli/templates/AGENTS.md.template) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `surfaces/dashboard/src/lib/stores/marketplace-mcp.svelte.ts`, `surfaces/dashboard/src/lib/stores/mcp-analytics.svelte.ts`, `surfaces/cli/src/commands/mcp.ts`.
2. entrypoint를 따라 실행 흐름 확인: `web/workers/reviews/src/index.ts`, `surfaces/tray/src/index.ts`, `surfaces/desktop/src/main.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `web/marketing/public/memory-loop-blueprint.jpg`, `web/marketing/public/skill.md`.
4. retrieval/memory/indexing 확인: `web/workers/reviews/src/index.ts`, `web/public/marketing/ads/ai-memory-suck-wojak-meme.png`, `web/public/marketing/ads/free-ai-agent-permanent-memory.png`.
5. test/eval 파일로 동작 검증: `web/marketing/src/components/landing/Benchmark.astro`, `tests/README.md`, `tests/integration/docker-build-regression.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local first identity, memory, and secrets for AI agents. Portable state across models and harnesses.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
