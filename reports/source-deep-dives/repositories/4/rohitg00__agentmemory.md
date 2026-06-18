# rohitg00/agentmemory Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 615 files, 92 directories.

## 요약

- 조사 단위: `sources/rohitg00__agentmemory` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 615 files, 92 directories, depth score 136, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=test/mcp-env-placeholder.test.ts, test/mcp-prompts.test.ts, test/mcp-resources.test.ts이고, 의존성 단서는 anthropic, claude, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | rohitg00/agentmemory |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/rohitg00__agentmemory](../../../../sources/rohitg00__agentmemory) |
| Existing report | [reports/clone-structures/rohitg00__agentmemory.md](../../../clone-structures/rohitg00__agentmemory.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 615 / 92 |
| Max observed depth | 4 |
| Top directories | .claude-plugin, .codex-plugin, .github, assets, benchmark, deploy, docs, eval, examples, integrations, packages, plugin, READMEs, scripts, src, test, website |
| Top extensions | .ts: 331, .md: 82, .svg: 66, .json: 28, .tsx: 23, .mjs: 20, .css: 19, (none): 9, .png: 8, .sh: 6, .yml: 6, .yaml: 5 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 59 |
| packages/mcp | packages workspace | 5 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmark | validation surface | 1 |
| deploy | deployment surface | 1 |
| docs | documentation surface | 1 |
| eval | top-level component | 1 |
| examples | top-level component | 1 |
| integrations | top-level component | 1 |
| packages | source boundary | 1 |
| plugin | top-level component | 1 |
| READMEs | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |
| website | documentation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | build | tsdown && (cp iii-config.yaml dist/ 2>/dev/null \|\| true) && (cp iii-config.docker.yaml dist/ 2>/dev/null \|\| true) && (cp docker-compose.yml dist/ 2>/dev/null \|\| true) && (cp .env.example dist/ 2>/dev/null \|\| true) && mkd |
| serve-dev | package.json | dev | tsx src/index.ts |
| serve-dev | package.json | start | node dist/cli.mjs |
| build | package.json | migrate | node dist/functions/migrate.js |
| test | package.json | test | vitest run --exclude test/integration.test.ts |
| test | package.json | test:watch | vitest --exclude test/integration.test.ts |
| test | package.json | test:integration | vitest run test/integration.test.ts |
| test | package.json | test:all | vitest run |
| utility | package.json | skills:gen | tsx scripts/skills/generate.ts |
| quality | package.json | skills:check | tsx scripts/skills/generate.ts --check && tsx scripts/skills/check.ts |
| utility | package.json | bench:load | node --import tsx benchmark/load-100k.ts |
| utility | package.json | eval:longmemeval | tsx eval/runner/longmemeval.ts |
| utility | package.json | eval:coding-life | tsx eval/runner/coding-life.ts |
| entrypoint | package.json bin | cli.mjs | dist/cli.mjs |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | anthropic, claude |
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
| mcp | [test/mcp-env-placeholder.test.ts](../../../../sources/rohitg00__agentmemory/test/mcp-env-placeholder.test.ts) | mcp signal |
| mcp | [test/mcp-prompts.test.ts](../../../../sources/rohitg00__agentmemory/test/mcp-prompts.test.ts) | mcp signal |
| mcp | [test/mcp-resources.test.ts](../../../../sources/rohitg00__agentmemory/test/mcp-resources.test.ts) | mcp signal |
| mcp | [test/mcp-standalone-proxy.test.ts](../../../../sources/rohitg00__agentmemory/test/mcp-standalone-proxy.test.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/rohitg00__agentmemory/AGENTS.md) | agentRuntime signal |
| agentRuntime | [website/components/Agents.module.css](../../../../sources/rohitg00__agentmemory/website/components/Agents.module.css) | agentRuntime signal |
| agentRuntime | [website/components/Agents.tsx](../../../../sources/rohitg00__agentmemory/website/components/Agents.tsx) | agentRuntime signal |
| agentRuntime | [test/agent-id-scope.test.ts](../../../../sources/rohitg00__agentmemory/test/agent-id-scope.test.ts) | agentRuntime signal |
| entrypoints | [src/cli.ts](../../../../sources/rohitg00__agentmemory/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/rohitg00__agentmemory/src/index.ts) | entrypoints signal |
| entrypoints | [src/viewer/server.ts](../../../../sources/rohitg00__agentmemory/src/viewer/server.ts) | entrypoints signal |
| entrypoints | [src/mcp/server.ts](../../../../sources/rohitg00__agentmemory/src/mcp/server.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [src/cli.ts](../../../../sources/rohitg00__agentmemory/src/cli.ts)<br>[src/index.ts](../../../../sources/rohitg00__agentmemory/src/index.ts)<br>[src/viewer/server.ts](../../../../sources/rohitg00__agentmemory/src/viewer/server.ts)<br>[src/mcp/server.ts](../../../../sources/rohitg00__agentmemory/src/mcp/server.ts) |
| agentRuntime | 77 | [AGENTS.md](../../../../sources/rohitg00__agentmemory/AGENTS.md)<br>[website/components/Agents.module.css](../../../../sources/rohitg00__agentmemory/website/components/Agents.module.css)<br>[website/components/Agents.tsx](../../../../sources/rohitg00__agentmemory/website/components/Agents.tsx)<br>[test/agent-id-scope.test.ts](../../../../sources/rohitg00__agentmemory/test/agent-id-scope.test.ts)<br>[test/agent-isolation-search.test.ts](../../../../sources/rohitg00__agentmemory/test/agent-isolation-search.test.ts)<br>[test/agent-sdk-provider.test.ts](../../../../sources/rohitg00__agentmemory/test/agent-sdk-provider.test.ts)<br>[test/context-injection.test.ts](../../../../sources/rohitg00__agentmemory/test/context-injection.test.ts)<br>[test/context-lessons.test.ts](../../../../sources/rohitg00__agentmemory/test/context-lessons.test.ts) |
| mcp | 26 | [test/mcp-env-placeholder.test.ts](../../../../sources/rohitg00__agentmemory/test/mcp-env-placeholder.test.ts)<br>[test/mcp-prompts.test.ts](../../../../sources/rohitg00__agentmemory/test/mcp-prompts.test.ts)<br>[test/mcp-resources.test.ts](../../../../sources/rohitg00__agentmemory/test/mcp-resources.test.ts)<br>[test/mcp-standalone-proxy.test.ts](../../../../sources/rohitg00__agentmemory/test/mcp-standalone-proxy.test.ts)<br>[test/mcp-standalone.test.ts](../../../../sources/rohitg00__agentmemory/test/mcp-standalone.test.ts)<br>[test/mcp-surface-default.test.ts](../../../../sources/rohitg00__agentmemory/test/mcp-surface-default.test.ts)<br>[test/mcp-transport.test.ts](../../../../sources/rohitg00__agentmemory/test/mcp-transport.test.ts)<br>[src/mcp/in-memory-kv.ts](../../../../sources/rohitg00__agentmemory/src/mcp/in-memory-kv.ts) |
| retrieval | 40 | [test/embedding-provider.test.ts](../../../../sources/rohitg00__agentmemory/test/embedding-provider.test.ts)<br>[test/graph-retrieval.test.ts](../../../../sources/rohitg00__agentmemory/test/graph-retrieval.test.ts)<br>[test/graph.test.ts](../../../../sources/rohitg00__agentmemory/test/graph.test.ts)<br>[test/index-persistence.test.ts](../../../../sources/rohitg00__agentmemory/test/index-persistence.test.ts)<br>[test/infer-memory-projects.test.ts](../../../../sources/rohitg00__agentmemory/test/infer-memory-projects.test.ts)<br>[test/remember-bm25-index.test.ts](../../../../sources/rohitg00__agentmemory/test/remember-bm25-index.test.ts)<br>[test/search-index.test.ts](../../../../sources/rohitg00__agentmemory/test/search-index.test.ts)<br>[test/session-end-triggers-graph.test.ts](../../../../sources/rohitg00__agentmemory/test/session-end-triggers-graph.test.ts) |
| spec | 5 | [DESIGN.md](../../../../sources/rohitg00__agentmemory/DESIGN.md)<br>[ROADMAP.md](../../../../sources/rohitg00__agentmemory/ROADMAP.md)<br>[plugin/skills/agentmemory-architecture/SKILL.md](../../../../sources/rohitg00__agentmemory/plugin/skills/agentmemory-architecture/SKILL.md)<br>[assets/tags/section-architecture.svg](../../../../sources/rohitg00__agentmemory/assets/tags/section-architecture.svg)<br>[assets/tags/light/section-architecture.svg](../../../../sources/rohitg00__agentmemory/assets/tags/light/section-architecture.svg) |
| eval | 170 | [test/access-tracker.test.ts](../../../../sources/rohitg00__agentmemory/test/access-tracker.test.ts)<br>[test/actions.test.ts](../../../../sources/rohitg00__agentmemory/test/actions.test.ts)<br>[test/agent-id-scope.test.ts](../../../../sources/rohitg00__agentmemory/test/agent-id-scope.test.ts)<br>[test/agent-isolation-search.test.ts](../../../../sources/rohitg00__agentmemory/test/agent-isolation-search.test.ts)<br>[test/agent-sdk-provider.test.ts](../../../../sources/rohitg00__agentmemory/test/agent-sdk-provider.test.ts)<br>[test/audit.test.ts](../../../../sources/rohitg00__agentmemory/test/audit.test.ts)<br>[test/auto-compress.test.ts](../../../../sources/rohitg00__agentmemory/test/auto-compress.test.ts)<br>[test/auto-forget.test.ts](../../../../sources/rohitg00__agentmemory/test/auto-forget.test.ts) |
| security | 16 | [SECURITY.md](../../../../sources/rohitg00__agentmemory/SECURITY.md)<br>[test/audit.test.ts](../../../../sources/rohitg00__agentmemory/test/audit.test.ts)<br>[test/remember-forget-audit.test.ts](../../../../sources/rohitg00__agentmemory/test/remember-forget-audit.test.ts)<br>[test/stop-hook-recursion-guard.test.ts](../../../../sources/rohitg00__agentmemory/test/stop-hook-recursion-guard.test.ts)<br>[test/viewer-security.test.ts](../../../../sources/rohitg00__agentmemory/test/viewer-security.test.ts)<br>[src/auth.ts](../../../../sources/rohitg00__agentmemory/src/auth.ts)<br>[src/hooks/sdk-guard.ts](../../../../sources/rohitg00__agentmemory/src/hooks/sdk-guard.ts)<br>[src/functions/audit.ts](../../../../sources/rohitg00__agentmemory/src/functions/audit.ts) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/rohitg00__agentmemory/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/rohitg00__agentmemory/.github/workflows/publish.yml) |
| container | 18 | [docker-compose.yml](../../../../sources/rohitg00__agentmemory/docker-compose.yml)<br>[deploy/README.md](../../../../sources/rohitg00__agentmemory/deploy/README.md)<br>[deploy/render/Dockerfile](../../../../sources/rohitg00__agentmemory/deploy/render/Dockerfile)<br>[deploy/render/entrypoint.sh](../../../../sources/rohitg00__agentmemory/deploy/render/entrypoint.sh)<br>[deploy/render/README.md](../../../../sources/rohitg00__agentmemory/deploy/render/README.md)<br>[deploy/render/render.yaml](../../../../sources/rohitg00__agentmemory/deploy/render/render.yaml)<br>[deploy/railway/Dockerfile](../../../../sources/rohitg00__agentmemory/deploy/railway/Dockerfile)<br>[deploy/railway/entrypoint.sh](../../../../sources/rohitg00__agentmemory/deploy/railway/entrypoint.sh) |
| instruction | 1 | [AGENTS.md](../../../../sources/rohitg00__agentmemory/AGENTS.md) |
| docs | 90 | [README.md](../../../../sources/rohitg00__agentmemory/README.md)<br>[website/.gitignore](../../../../sources/rohitg00__agentmemory/website/.gitignore)<br>[website/next-env.d.ts](../../../../sources/rohitg00__agentmemory/website/next-env.d.ts)<br>[website/next.config.ts](../../../../sources/rohitg00__agentmemory/website/next.config.ts)<br>[website/package.json](../../../../sources/rohitg00__agentmemory/website/package.json)<br>[website/README.md](../../../../sources/rohitg00__agentmemory/website/README.md)<br>[website/tsconfig.json](../../../../sources/rohitg00__agentmemory/website/tsconfig.json)<br>[website/vercel.json](../../../../sources/rohitg00__agentmemory/website/vercel.json) |
| config | 8 | [package.json](../../../../sources/rohitg00__agentmemory/package.json)<br>[tsconfig.json](../../../../sources/rohitg00__agentmemory/tsconfig.json)<br>[website/package.json](../../../../sources/rohitg00__agentmemory/website/package.json)<br>[website/tsconfig.json](../../../../sources/rohitg00__agentmemory/website/tsconfig.json)<br>[packages/mcp/package.json](../../../../sources/rohitg00__agentmemory/packages/mcp/package.json)<br>[integrations/pi/package.json](../../../../sources/rohitg00__agentmemory/integrations/pi/package.json)<br>[integrations/openclaw/package.json](../../../../sources/rohitg00__agentmemory/integrations/openclaw/package.json)<br>[integrations/filesystem-watcher/package.json](../../../../sources/rohitg00__agentmemory/integrations/filesystem-watcher/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 170 | [test/access-tracker.test.ts](../../../../sources/rohitg00__agentmemory/test/access-tracker.test.ts)<br>[test/actions.test.ts](../../../../sources/rohitg00__agentmemory/test/actions.test.ts)<br>[test/agent-id-scope.test.ts](../../../../sources/rohitg00__agentmemory/test/agent-id-scope.test.ts)<br>[test/agent-isolation-search.test.ts](../../../../sources/rohitg00__agentmemory/test/agent-isolation-search.test.ts)<br>[test/agent-sdk-provider.test.ts](../../../../sources/rohitg00__agentmemory/test/agent-sdk-provider.test.ts)<br>[test/audit.test.ts](../../../../sources/rohitg00__agentmemory/test/audit.test.ts) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/rohitg00__agentmemory/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/rohitg00__agentmemory/.github/workflows/publish.yml) |
| Containers / deploy | 18 | [docker-compose.yml](../../../../sources/rohitg00__agentmemory/docker-compose.yml)<br>[deploy/README.md](../../../../sources/rohitg00__agentmemory/deploy/README.md)<br>[deploy/render/Dockerfile](../../../../sources/rohitg00__agentmemory/deploy/render/Dockerfile)<br>[deploy/render/entrypoint.sh](../../../../sources/rohitg00__agentmemory/deploy/render/entrypoint.sh)<br>[deploy/render/README.md](../../../../sources/rohitg00__agentmemory/deploy/render/README.md)<br>[deploy/render/render.yaml](../../../../sources/rohitg00__agentmemory/deploy/render/render.yaml) |
| Security / policy | 16 | [SECURITY.md](../../../../sources/rohitg00__agentmemory/SECURITY.md)<br>[test/audit.test.ts](../../../../sources/rohitg00__agentmemory/test/audit.test.ts)<br>[test/remember-forget-audit.test.ts](../../../../sources/rohitg00__agentmemory/test/remember-forget-audit.test.ts)<br>[test/stop-hook-recursion-guard.test.ts](../../../../sources/rohitg00__agentmemory/test/stop-hook-recursion-guard.test.ts)<br>[test/viewer-security.test.ts](../../../../sources/rohitg00__agentmemory/test/viewer-security.test.ts)<br>[src/auth.ts](../../../../sources/rohitg00__agentmemory/src/auth.ts) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/rohitg00__agentmemory/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/mcp-env-placeholder.test.ts`, `test/mcp-prompts.test.ts`, `test/mcp-resources.test.ts`.
2. Trace execution through entrypoints: `src/cli.ts`, `src/index.ts`, `src/viewer/server.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `website/components/Agents.module.css`, `website/components/Agents.tsx`.
4. Inspect retrieval/memory/indexing through: `test/embedding-provider.test.ts`, `test/graph-retrieval.test.ts`, `test/graph.test.ts`.
5. Verify behavior through test/eval files: `test/access-tracker.test.ts`, `test/actions.test.ts`, `test/agent-id-scope.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 615 files, 92 directories.. 핵심 구조 신호는 package.json, docker-compose.yml, README.md, AGENTS.md, LICENSE, anthropic이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
