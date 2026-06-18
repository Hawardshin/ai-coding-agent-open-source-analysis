# paperboytm/spool Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Your local AI session library. Browse, pin, and ⌘K-search every Claude Code, Codex, Gemini & OpenCode session — and let the built-in scanner catch leaked secrets. Local-first, nothing leaves your machine.

## 요약

- 조사 단위: `sources/paperboytm__spool` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 672 files, 151 directories, depth score 122, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, skills-lock.json, skills/spool/SKILL.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | paperboytm/spool |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 561 |
| Forks | 38 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/paperboytm__spool](../../../../sources/paperboytm__spool) |
| Existing report | [reports/global-trending/repositories/paperboytm__spool.md](../../../global-trending/repositories/paperboytm__spool.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 672 / 151 |
| Max observed depth | 10 |
| Top directories | .agents, .claude, .github, docs, packages, plans, scripts, skills, videos, workers |
| Top extensions | .ts: 438, .tsx: 91, .json: 36, .md: 31, .mjs: 11, .css: 10, .png: 10, .jsonl: 8, .sh: 7, (none): 6, .html: 5, .yml: 5 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/app | packages workspace | 66 |
| packages/share-backend | packages workspace | 41 |
| packages/core | packages workspace | 28 |
| packages/landing | packages workspace | 18 |
| packages/share-web | packages workspace | 17 |
| packages/share-kit | packages workspace | 15 |
| packages/redact | packages workspace | 8 |
| packages/cli | packages workspace | 7 |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| plans | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| videos | top-level component | 1 |
| workers | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | turbo build |
| serve-dev | package.json | dev | turbo dev |
| test | package.json | test | turbo test |
| test | package.json | test:core | pnpm --filter @spool-lab/core test |
| test | package.json | test:e2e | pnpm --filter @spool/app test:e2e |
| test | package.json | test:share-backend | pnpm --filter @spool/share-backend test |
| build | package.json | rebuild:native:node | pnpm --filter @spool-lab/core run rebuild:native:node |
| build | package.json | rebuild:native:electron | pnpm --filter @spool/app run rebuild:native:electron |
| quality | package.json | lint | eslint . |
| utility | package.json | clean | turbo clean |
| quality | package.json | check:phantom-independence | scripts/phantom-independence-check.sh |
| serve-dev | package.json | dev:install:mac | scripts/dev-install-mac.sh |
| utility | package.json | spool | node packages/cli/bin/spool.js |


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
| agentRuntime | [AGENTS.md](../../../../sources/paperboytm__spool/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills-lock.json](../../../../sources/paperboytm__spool/skills-lock.json) | agentRuntime signal |
| agentRuntime | [skills/spool/SKILL.md](../../../../sources/paperboytm__spool/skills/spool/SKILL.md) | agentRuntime signal |
| agentRuntime | [packages/landing/pages/docs/guides/agent-integration.md](../../../../sources/paperboytm__spool/packages/landing/pages/docs/guides/agent-integration.md) | agentRuntime signal |
| entrypoints | [packages/share-web/src/App.tsx](../../../../sources/paperboytm__spool/packages/share-web/src/App.tsx) | entrypoints signal |
| entrypoints | [packages/share-web/src/main.tsx](../../../../sources/paperboytm__spool/packages/share-web/src/main.tsx) | entrypoints signal |
| entrypoints | [packages/share-kit/src/index.ts](../../../../sources/paperboytm__spool/packages/share-kit/src/index.ts) | entrypoints signal |
| entrypoints | [packages/redact/src/index.ts](../../../../sources/paperboytm__spool/packages/redact/src/index.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/paperboytm__spool/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/paperboytm__spool/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/paperboytm__spool/pnpm-workspace.yaml) | config signal |
| config | [turbo.json](../../../../sources/paperboytm__spool/turbo.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [packages/share-web/src/App.tsx](../../../../sources/paperboytm__spool/packages/share-web/src/App.tsx)<br>[packages/share-web/src/main.tsx](../../../../sources/paperboytm__spool/packages/share-web/src/main.tsx)<br>[packages/share-kit/src/index.ts](../../../../sources/paperboytm__spool/packages/share-kit/src/index.ts)<br>[packages/redact/src/index.ts](../../../../sources/paperboytm__spool/packages/redact/src/index.ts)<br>[packages/core/src/index.ts](../../../../sources/paperboytm__spool/packages/core/src/index.ts)<br>[packages/cli/src/cli.test.ts](../../../../sources/paperboytm__spool/packages/cli/src/cli.test.ts)<br>[packages/cli/src/index.ts](../../../../sources/paperboytm__spool/packages/cli/src/index.ts)<br>[packages/cli/bin/spool.js](../../../../sources/paperboytm__spool/packages/cli/bin/spool.js) |
| agentRuntime | 32 | [AGENTS.md](../../../../sources/paperboytm__spool/AGENTS.md)<br>[skills-lock.json](../../../../sources/paperboytm__spool/skills-lock.json)<br>[skills/spool/SKILL.md](../../../../sources/paperboytm__spool/skills/spool/SKILL.md)<br>[packages/landing/pages/docs/guides/agent-integration.md](../../../../sources/paperboytm__spool/packages/landing/pages/docs/guides/agent-integration.md)<br>[packages/core/src/migrations/agent-search-cleanup.test.ts](../../../../sources/paperboytm__spool/packages/core/src/migrations/agent-search-cleanup.test.ts)<br>[packages/core/src/migrations/agent-search-cleanup.ts](../../../../sources/paperboytm__spool/packages/core/src/migrations/agent-search-cleanup.ts)<br>[packages/core/src/doctor/runner.ts](../../../../sources/paperboytm__spool/packages/core/src/doctor/runner.ts)<br>[packages/app/src/renderer/hooks/useFocusTrap.ts](../../../../sources/paperboytm__spool/packages/app/src/renderer/hooks/useFocusTrap.ts) |
| mcp | 0 | not obvious |
| retrieval | 27 | [videos/spool-v0.5.0/index.html](../../../../sources/paperboytm__spool/videos/spool-v0.5.0/index.html)<br>[videos/launch-template/index.html](../../../../sources/paperboytm__spool/videos/launch-template/index.html)<br>[packages/share-web/index.html](../../../../sources/paperboytm__spool/packages/share-web/index.html)<br>[packages/share-kit/src/index.ts](../../../../sources/paperboytm__spool/packages/share-kit/src/index.ts)<br>[packages/share-kit/src/templates/index.tsx](../../../../sources/paperboytm__spool/packages/share-kit/src/templates/index.tsx)<br>[packages/share-kit/src/lib/parsers/index.ts](../../../../sources/paperboytm__spool/packages/share-kit/src/lib/parsers/index.ts)<br>[packages/share-kit/src/lib/export/index.ts](../../../../sources/paperboytm__spool/packages/share-kit/src/lib/export/index.ts)<br>[packages/share-backend/functions/api/me/index.ts](../../../../sources/paperboytm__spool/packages/share-backend/functions/api/me/index.ts) |
| spec | 51 | [DESIGN.md](../../../../sources/paperboytm__spool/DESIGN.md)<br>[packages/app/e2e/agent-search.spec.ts](../../../../sources/paperboytm__spool/packages/app/e2e/agent-search.spec.ts)<br>[packages/app/e2e/copy-resume-command.spec.ts](../../../../sources/paperboytm__spool/packages/app/e2e/copy-resume-command.spec.ts)<br>[packages/app/e2e/dark-mode-root-bg.spec.ts](../../../../sources/paperboytm__spool/packages/app/e2e/dark-mode-root-bg.spec.ts)<br>[packages/app/e2e/dev-db-isolation.spec.ts](../../../../sources/paperboytm__spool/packages/app/e2e/dev-db-isolation.spec.ts)<br>[packages/app/e2e/fast-search.spec.ts](../../../../sources/paperboytm__spool/packages/app/e2e/fast-search.spec.ts)<br>[packages/app/e2e/home-preview.spec.ts](../../../../sources/paperboytm__spool/packages/app/e2e/home-preview.spec.ts)<br>[packages/app/e2e/markdown-table.spec.ts](../../../../sources/paperboytm__spool/packages/app/e2e/markdown-table.spec.ts) |
| eval | 196 | [packages/share-web/tests/safety.test.ts](../../../../sources/paperboytm__spool/packages/share-web/tests/safety.test.ts)<br>[packages/share-web/src/pages/Me.load.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/pages/Me.load.test.ts)<br>[packages/share-web/src/lib/api-cache.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/api-cache.test.ts)<br>[packages/share-web/src/lib/api.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/api.test.ts)<br>[packages/share-web/src/lib/dates.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/dates.test.ts)<br>[packages/share-web/src/lib/mailto.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/mailto.test.ts)<br>[packages/share-web/src/lib/me-cache.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/me-cache.test.ts)<br>[packages/share-web/src/lib/og-meta.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/og-meta.test.ts) |
| security | 103 | [packages/share-web/src/lib/auth-cache.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/auth-cache.ts)<br>[packages/share-backend/tests/auth.test.ts](../../../../sources/paperboytm__spool/packages/share-backend/tests/auth.test.ts)<br>[packages/share-backend/tests/security.test.ts](../../../../sources/paperboytm__spool/packages/share-backend/tests/security.test.ts)<br>[packages/share-backend/src/audit.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/audit.ts)<br>[packages/share-backend/src/security/cache-control.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/security/cache-control.ts)<br>[packages/share-backend/src/security/csp.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/security/csp.ts)<br>[packages/share-backend/src/auth/cookie.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/auth/cookie.ts)<br>[packages/share-backend/src/auth/jwks.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/auth/jwks.ts) |
| ci | 3 | [.github/workflows/deploy-landing.yml](../../../../sources/paperboytm__spool/.github/workflows/deploy-landing.yml)<br>[.github/workflows/e2e.yml](../../../../sources/paperboytm__spool/.github/workflows/e2e.yml)<br>[.github/workflows/release.yml](../../../../sources/paperboytm__spool/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/paperboytm__spool/AGENTS.md)<br>[CLAUDE.md](../../../../sources/paperboytm__spool/CLAUDE.md) |
| docs | 18 | [README.md](../../../../sources/paperboytm__spool/README.md)<br>[videos/README.md](../../../../sources/paperboytm__spool/videos/README.md)<br>[videos/spool-v0.5.0/README.md](../../../../sources/paperboytm__spool/videos/spool-v0.5.0/README.md)<br>[videos/launch-template/README.md](../../../../sources/paperboytm__spool/videos/launch-template/README.md)<br>[packages/share-kit/README.md](../../../../sources/paperboytm__spool/packages/share-kit/README.md)<br>[packages/share-backend/README.md](../../../../sources/paperboytm__spool/packages/share-backend/README.md)<br>[packages/landing/pages/docs/installation.md](../../../../sources/paperboytm__spool/packages/landing/pages/docs/installation.md)<br>[packages/landing/pages/docs/layout.island.tsx](../../../../sources/paperboytm__spool/packages/landing/pages/docs/layout.island.tsx) |
| config | 23 | [package.json](../../../../sources/paperboytm__spool/package.json)<br>[pnpm-workspace.yaml](../../../../sources/paperboytm__spool/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/paperboytm__spool/turbo.json)<br>[workers/spool-pro-router/package.json](../../../../sources/paperboytm__spool/workers/spool-pro-router/package.json)<br>[workers/spool-pro-router/tsconfig.json](../../../../sources/paperboytm__spool/workers/spool-pro-router/tsconfig.json)<br>[videos/spool-v0.5.0/package.json](../../../../sources/paperboytm__spool/videos/spool-v0.5.0/package.json)<br>[videos/launch-template/package.json](../../../../sources/paperboytm__spool/videos/launch-template/package.json)<br>[packages/share-web/package.json](../../../../sources/paperboytm__spool/packages/share-web/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 196 | [packages/share-web/tests/safety.test.ts](../../../../sources/paperboytm__spool/packages/share-web/tests/safety.test.ts)<br>[packages/share-web/src/pages/Me.load.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/pages/Me.load.test.ts)<br>[packages/share-web/src/lib/api-cache.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/api-cache.test.ts)<br>[packages/share-web/src/lib/api.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/api.test.ts)<br>[packages/share-web/src/lib/dates.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/dates.test.ts)<br>[packages/share-web/src/lib/mailto.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/mailto.test.ts) |
| CI workflows | 3 | [.github/workflows/deploy-landing.yml](../../../../sources/paperboytm__spool/.github/workflows/deploy-landing.yml)<br>[.github/workflows/e2e.yml](../../../../sources/paperboytm__spool/.github/workflows/e2e.yml)<br>[.github/workflows/release.yml](../../../../sources/paperboytm__spool/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 103 | [packages/share-web/src/lib/auth-cache.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/auth-cache.ts)<br>[packages/share-backend/tests/auth.test.ts](../../../../sources/paperboytm__spool/packages/share-backend/tests/auth.test.ts)<br>[packages/share-backend/tests/security.test.ts](../../../../sources/paperboytm__spool/packages/share-backend/tests/security.test.ts)<br>[packages/share-backend/src/audit.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/audit.ts)<br>[packages/share-backend/src/security/cache-control.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/security/cache-control.ts)<br>[packages/share-backend/src/security/csp.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/security/csp.ts) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/paperboytm__spool/AGENTS.md)<br>[CLAUDE.md](../../../../sources/paperboytm__spool/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `AGENTS.md`, `skills-lock.json`, `skills/spool/SKILL.md`.
2. Trace execution through entrypoints: `packages/share-web/src/App.tsx`, `packages/share-web/src/main.tsx`, `packages/share-kit/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills-lock.json`, `skills/spool/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `videos/spool-v0.5.0/index.html`, `videos/launch-template/index.html`, `packages/share-web/index.html`.
5. Verify behavior through test/eval files: `packages/share-web/tests/safety.test.ts`, `packages/share-web/src/pages/Me.load.test.ts`, `packages/share-web/src/lib/api-cache.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Your local AI session library. Browse, pin, and ⌘K search every Claude Code, Codex, Gemini & OpenCode session — and let . 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
