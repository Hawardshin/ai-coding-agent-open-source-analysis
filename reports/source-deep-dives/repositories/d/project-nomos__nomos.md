# project-nomos/nomos Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Your AI digital clone — learns who you are, acts on your behalf, remembers everything. Persistent vector memory, multi-agent teams, 60+ skills, smart model routing. Self-hosted, encrypted, multi-provider (Claude/Ollama/OpenRouter). Deploy to Slack, Discord, Telegram, WhatsApp & more in minutes.

## 요약

- 조사 단위: `sources/project-nomos__nomos` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 584 files, 157 directories, depth score 130, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=src/sdk/discord-mcp.ts, src/sdk/google-mcp.test.ts, src/sdk/google-mcp.ts이고, 의존성 단서는 anthropic, claude, react, commander, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | project-nomos/nomos |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 22 |
| Forks | 4 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/project-nomos__nomos](../../../../sources/project-nomos__nomos) |
| Existing report | [reports/global-trending/repositories/project-nomos__nomos.md](../../../global-trending/repositories/project-nomos__nomos.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 584 / 157 |
| Max observed depth | 8 |
| Top directories | .claude, .github, .husky, autonomous, docs, eval, Formula, images, proto, scripts, settings, skills, src |
| Top extensions | .ts: 405, .md: 71, .tsx: 67, .json: 6, .yml: 6, (none): 6, .yaml: 4, .example: 3, .mjs: 3, .sh: 3, .png: 2, .svg: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 158 |
| docs | documentation surface | 31 |
| .github | ci surface | 1 |
| autonomous | top-level component | 1 |
| eval | top-level component | 1 |
| Formula | top-level component | 1 |
| images | top-level component | 1 |
| proto | top-level component | 1 |
| scripts | top-level component | 1 |
| settings | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | postinstall | bash scripts/fetch-anthropic-skills.sh && bash scripts/fetch-plugins.sh && playwright install chromium && (which uvx >/dev/null 2>&1 \|\| (echo 'Installing uv (Python package runner)...' && curl -LsSf https://astral.sh/uv/ |
| build | package.json | build | node scripts/sync-inline-schema.mjs && tsdown |
| utility | package.json | sync-schema | node scripts/sync-inline-schema.mjs |
| utility | package.json | codegen | buf generate |
| utility | package.json | eval:recall | tsx scripts/recall-eval.ts |
| utility | package.json | eval:agent | tsx eval/agent-eval.ts |
| utility | package.json | eval:audit | tsx eval/agent-eval.ts --audit |
| serve-dev | package.json | dev | tsx src/index.ts |
| serve-dev | package.json | start | node dist/index.js |
| quality | package.json | check | pnpm format:check && pnpm typecheck && pnpm lint |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | lint | oxlint |
| quality | package.json | lint:fix | oxlint --fix && pnpm format |
| quality | package.json | format | oxfmt --write |
| quality | package.json | format:check | oxfmt --check |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| serve-dev | package.json | daemon:dev | tsx src/daemon/index.ts |
| serve-dev | package.json | daemon:start | node dist/index.js daemon start |
| utility | package.json | prepare | husky |
| quality | package.json | check:isolation | tsx scripts/isolation-check.ts |
| entrypoint | package.json bin | index.js | dist/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic, claude |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | commander |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/sdk/discord-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/discord-mcp.ts) | mcp signal |
| mcp | [src/sdk/google-mcp.test.ts](../../../../sources/project-nomos__nomos/src/sdk/google-mcp.test.ts) | mcp signal |
| mcp | [src/sdk/google-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/google-mcp.ts) | mcp signal |
| mcp | [src/sdk/google-rest-mcp.test.ts](../../../../sources/project-nomos__nomos/src/sdk/google-rest-mcp.test.ts) | mcp signal |
| agentRuntime | [src/ui/hooks/use-alternate-buffer.ts](../../../../sources/project-nomos__nomos/src/ui/hooks/use-alternate-buffer.ts) | agentRuntime signal |
| agentRuntime | [src/ui/components/agent-progress-line.tsx](../../../../sources/project-nomos__nomos/src/ui/components/agent-progress-line.tsx) | agentRuntime signal |
| agentRuntime | [src/ui/components/tool-block.tsx](../../../../sources/project-nomos__nomos/src/ui/components/tool-block.tsx) | agentRuntime signal |
| agentRuntime | [src/skills/frontmatter.test.ts](../../../../sources/project-nomos__nomos/src/skills/frontmatter.test.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/project-nomos__nomos/src/index.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/project-nomos__nomos/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/project-nomos__nomos/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/project-nomos__nomos/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/project-nomos__nomos/src/index.ts) |
| agentRuntime | 114 | [src/ui/hooks/use-alternate-buffer.ts](../../../../sources/project-nomos__nomos/src/ui/hooks/use-alternate-buffer.ts)<br>[src/ui/components/agent-progress-line.tsx](../../../../sources/project-nomos__nomos/src/ui/components/agent-progress-line.tsx)<br>[src/ui/components/tool-block.tsx](../../../../sources/project-nomos__nomos/src/ui/components/tool-block.tsx)<br>[src/skills/frontmatter.test.ts](../../../../sources/project-nomos__nomos/src/skills/frontmatter.test.ts)<br>[src/skills/frontmatter.ts](../../../../sources/project-nomos__nomos/src/skills/frontmatter.ts)<br>[src/skills/installer.ts](../../../../sources/project-nomos__nomos/src/skills/installer.ts)<br>[src/skills/loader.test.ts](../../../../sources/project-nomos__nomos/src/skills/loader.test.ts)<br>[src/skills/loader.ts](../../../../sources/project-nomos__nomos/src/skills/loader.ts) |
| mcp | 16 | [src/sdk/discord-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/discord-mcp.ts)<br>[src/sdk/google-mcp.test.ts](../../../../sources/project-nomos__nomos/src/sdk/google-mcp.test.ts)<br>[src/sdk/google-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/google-mcp.ts)<br>[src/sdk/google-rest-mcp.test.ts](../../../../sources/project-nomos__nomos/src/sdk/google-rest-mcp.test.ts)<br>[src/sdk/google-rest-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/google-rest-mcp.ts)<br>[src/sdk/google-workspace-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/google-workspace-mcp.ts)<br>[src/sdk/loop-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/loop-mcp.ts)<br>[src/sdk/nomos-slack-mcp.ts](../../../../sources/project-nomos__nomos/src/sdk/nomos-slack-mcp.ts) |
| retrieval | 85 | [src/index.ts](../../../../sources/project-nomos__nomos/src/index.ts)<br>[src/sessions/index.ts](../../../../sources/project-nomos__nomos/src/sessions/index.ts)<br>[src/security/index.ts](../../../../sources/project-nomos__nomos/src/security/index.ts)<br>[src/routing/index.ts](../../../../sources/project-nomos__nomos/src/routing/index.ts)<br>[src/proactive/index.ts](../../../../sources/project-nomos__nomos/src/proactive/index.ts)<br>[src/memory/auto-dream.ts](../../../../sources/project-nomos__nomos/src/memory/auto-dream.ts)<br>[src/memory/brain.ts](../../../../sources/project-nomos__nomos/src/memory/brain.ts)<br>[src/memory/calibration.ts](../../../../sources/project-nomos__nomos/src/memory/calibration.ts) |
| spec | 1 | [docs/system-design.md](../../../../sources/project-nomos__nomos/docs/system-design.md) |
| eval | 91 | [src/ui/bootstrap.test.ts](../../../../sources/project-nomos__nomos/src/ui/bootstrap.test.ts)<br>[src/studio/assets.test.ts](../../../../sources/project-nomos__nomos/src/studio/assets.test.ts)<br>[src/studio/consent.test.ts](../../../../sources/project-nomos__nomos/src/studio/consent.test.ts)<br>[src/studio/engine.test.ts](../../../../sources/project-nomos__nomos/src/studio/engine.test.ts)<br>[src/studio/face-embedder.test.ts](../../../../sources/project-nomos__nomos/src/studio/face-embedder.test.ts)<br>[src/studio/gc.test.ts](../../../../sources/project-nomos__nomos/src/studio/gc.test.ts)<br>[src/studio/identity-gate.test.ts](../../../../sources/project-nomos__nomos/src/studio/identity-gate.test.ts)<br>[src/studio/learn.test.ts](../../../../sources/project-nomos__nomos/src/studio/learn.test.ts) |
| security | 27 | [SECURITY.md](../../../../sources/project-nomos__nomos/SECURITY.md)<br>[src/ui/components/permission-prompt.tsx](../../../../sources/project-nomos__nomos/src/ui/components/permission-prompt.tsx)<br>[src/security/allowlist.ts](../../../../sources/project-nomos__nomos/src/security/allowlist.ts)<br>[src/security/full-disk-access.test.ts](../../../../sources/project-nomos__nomos/src/security/full-disk-access.test.ts)<br>[src/security/full-disk-access.ts](../../../../sources/project-nomos__nomos/src/security/full-disk-access.ts)<br>[src/security/index.ts](../../../../sources/project-nomos__nomos/src/security/index.ts)<br>[src/security/pairing.ts](../../../../sources/project-nomos__nomos/src/security/pairing.ts)<br>[src/security/tool-approval.test.ts](../../../../sources/project-nomos__nomos/src/security/tool-approval.test.ts) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/project-nomos__nomos/.github/workflows/ci.yml)<br>[.github/workflows/docker.yml](../../../../sources/project-nomos__nomos/.github/workflows/docker.yml)<br>[.github/workflows/release.yml](../../../../sources/project-nomos__nomos/.github/workflows/release.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/project-nomos__nomos/docker-compose.yml)<br>[Dockerfile](../../../../sources/project-nomos__nomos/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/project-nomos__nomos/CLAUDE.md) |
| docs | 31 | [README.md](../../../../sources/project-nomos__nomos/README.md)<br>[eval/README.md](../../../../sources/project-nomos__nomos/eval/README.md)<br>[docs/advanced-features.md](../../../../sources/project-nomos__nomos/docs/advanced-features.md)<br>[docs/agent-presence-and-continuity.md](../../../../sources/project-nomos__nomos/docs/agent-presence-and-continuity.md)<br>[docs/autonomous-loops.md](../../../../sources/project-nomos__nomos/docs/autonomous-loops.md)<br>[docs/cate-protocol.md](../../../../sources/project-nomos__nomos/docs/cate-protocol.md)<br>[docs/channels.md](../../../../sources/project-nomos__nomos/docs/channels.md)<br>[docs/contacts.md](../../../../sources/project-nomos__nomos/docs/contacts.md) |
| config | 4 | [package.json](../../../../sources/project-nomos__nomos/package.json)<br>[tsconfig.json](../../../../sources/project-nomos__nomos/tsconfig.json)<br>[settings/package.json](../../../../sources/project-nomos__nomos/settings/package.json)<br>[settings/tsconfig.json](../../../../sources/project-nomos__nomos/settings/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 91 | [src/ui/bootstrap.test.ts](../../../../sources/project-nomos__nomos/src/ui/bootstrap.test.ts)<br>[src/studio/assets.test.ts](../../../../sources/project-nomos__nomos/src/studio/assets.test.ts)<br>[src/studio/consent.test.ts](../../../../sources/project-nomos__nomos/src/studio/consent.test.ts)<br>[src/studio/engine.test.ts](../../../../sources/project-nomos__nomos/src/studio/engine.test.ts)<br>[src/studio/face-embedder.test.ts](../../../../sources/project-nomos__nomos/src/studio/face-embedder.test.ts)<br>[src/studio/gc.test.ts](../../../../sources/project-nomos__nomos/src/studio/gc.test.ts) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/project-nomos__nomos/.github/workflows/ci.yml)<br>[.github/workflows/docker.yml](../../../../sources/project-nomos__nomos/.github/workflows/docker.yml)<br>[.github/workflows/release.yml](../../../../sources/project-nomos__nomos/.github/workflows/release.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/project-nomos__nomos/docker-compose.yml)<br>[Dockerfile](../../../../sources/project-nomos__nomos/Dockerfile) |
| Security / policy | 27 | [SECURITY.md](../../../../sources/project-nomos__nomos/SECURITY.md)<br>[src/ui/components/permission-prompt.tsx](../../../../sources/project-nomos__nomos/src/ui/components/permission-prompt.tsx)<br>[src/security/allowlist.ts](../../../../sources/project-nomos__nomos/src/security/allowlist.ts)<br>[src/security/full-disk-access.test.ts](../../../../sources/project-nomos__nomos/src/security/full-disk-access.test.ts)<br>[src/security/full-disk-access.ts](../../../../sources/project-nomos__nomos/src/security/full-disk-access.ts)<br>[src/security/index.ts](../../../../sources/project-nomos__nomos/src/security/index.ts) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/project-nomos__nomos/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/sdk/discord-mcp.ts`, `src/sdk/google-mcp.test.ts`, `src/sdk/google-mcp.ts`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Map agent/tool runtime through: `src/ui/hooks/use-alternate-buffer.ts`, `src/ui/components/agent-progress-line.tsx`, `src/ui/components/tool-block.tsx`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/sessions/index.ts`, `src/security/index.ts`.
5. Verify behavior through test/eval files: `src/ui/bootstrap.test.ts`, `src/studio/assets.test.ts`, `src/studio/consent.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Your AI digital clone — learns who you are, acts on your behalf, remembers everything. Persistent vector memory, multi a. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, CLAUDE.md이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
