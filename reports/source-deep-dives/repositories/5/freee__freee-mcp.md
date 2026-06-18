# freee/freee-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Model Context Protocol (MCP) server for freee API integration

## 요약

- 조사 단위: `sources/freee__freee-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 310 files, 40 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, mcp.json, src/types/mcp-overrides.d.ts이고, 의존성 단서는 modelcontextprotocol, express, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | freee/freee-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 459 |
| Forks | 53 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/freee__freee-mcp](../../../../sources/freee__freee-mcp) |
| Existing report | [reports/global-trending/repositories/freee__freee-mcp.md](../../../global-trending/repositories/freee__freee-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 310 / 40 |
| Max observed depth | 4 |
| Top directories | .agents, .changeset, .claude, .claude-plugin, .codex, .codex-plugin, .github, bin, docs, openapi, scripts, skills, src |
| Top extensions | .ts: 138, .md: 117, .json: 28, (none): 10, .yml: 6, .yaml: 5, .png: 2, .cjs: 1, .js: 1, .lock: 1, .sign: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 93 |
| docs | documentation surface | 3 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| openapi | source boundary | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | clean | rm -rf dist bin/freee-mcp.js bin/freee-remote-mcp.js bin/freee-sign-mcp.js bin/freee-sign-remote-mcp.js |
| build | package.json | build | bun run build.ts |
| build | package.json | prepare | bun run build |
| serve-dev | package.json | start | bun run src/index.ts |
| serve-dev | package.json | dev | bun --watch run src/index.ts |
| serve-dev | package.json | dev:remote | bun --watch run src/entry-remote.ts |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | lint | biome lint src/ |
| quality | package.json | lint:fix | biome lint --write src/ |
| utility | package.json | knip | knip |
| quality | package.json | format | biome format --write src/ |
| quality | package.json | check | biome check src/ |
| test | package.json | inspector | mcp-inspector bun run src/index.ts |
| test | package.json | test | vitest |
| test | package.json | test:run | vitest run |
| test | package.json | test:coverage | vitest run --coverage |
| test | package.json | test:ui | vitest --ui |
| utility | package.json | generate:references | bun run scripts/generate-references.ts |
| utility | package.json | fetch:schemas | bun run scripts/fetch-schemas.ts |
| utility | package.json | changeset | changeset |
| utility | package.json | version | changeset version |
| build | package.json | release | bun run build && changeset publish |
| utility | Makefile | .PHONY | make .PHONY |
| entrypoint | package.json bin | freee-mcp.js | ./bin/freee-mcp.js |
| entrypoint | package.json bin | freee-remote-mcp.js | ./bin/freee-remote-mcp.js |
| entrypoint | package.json bin | freee-sign-mcp.js | ./bin/freee-sign-mcp.js |
| entrypoint | package.json bin | freee-sign-remote-mcp.js | ./bin/freee-sign-remote-mcp.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/freee__freee-mcp/.mcp.json) | mcp signal |
| mcp | [mcp.json](../../../../sources/freee__freee-mcp/mcp.json) | mcp signal |
| mcp | [src/types/mcp-overrides.d.ts](../../../../sources/freee__freee-mcp/src/types/mcp-overrides.d.ts) | mcp signal |
| mcp | [src/mcp/file-upload-tool.test.ts](../../../../sources/freee__freee-mcp/src/mcp/file-upload-tool.test.ts) | mcp signal |
| agentRuntime | [src/telemetry/tool-tracer.test.ts](../../../../sources/freee__freee-mcp/src/telemetry/tool-tracer.test.ts) | agentRuntime signal |
| agentRuntime | [src/telemetry/tool-tracer.ts](../../../../sources/freee__freee-mcp/src/telemetry/tool-tracer.ts) | agentRuntime signal |
| agentRuntime | [src/storage/context.test.ts](../../../../sources/freee__freee-mcp/src/storage/context.test.ts) | agentRuntime signal |
| agentRuntime | [src/storage/context.ts](../../../../sources/freee__freee-mcp/src/storage/context.ts) | agentRuntime signal |
| entrypoints | [src/cli.ts](../../../../sources/freee__freee-mcp/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.test.ts](../../../../sources/freee__freee-mcp/src/index.test.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/freee__freee-mcp/src/index.ts) | entrypoints signal |
| entrypoints | [src/auth/server.test.ts](../../../../sources/freee__freee-mcp/src/auth/server.test.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 6 | [src/cli.ts](../../../../sources/freee__freee-mcp/src/cli.ts)<br>[src/index.test.ts](../../../../sources/freee__freee-mcp/src/index.test.ts)<br>[src/index.ts](../../../../sources/freee__freee-mcp/src/index.ts)<br>[src/auth/server.test.ts](../../../../sources/freee__freee-mcp/src/auth/server.test.ts)<br>[src/auth/server.ts](../../../../sources/freee__freee-mcp/src/auth/server.ts)<br>[bin/.keep](../../../../sources/freee__freee-mcp/bin/.keep) |
| agentRuntime | 117 | [src/telemetry/tool-tracer.test.ts](../../../../sources/freee__freee-mcp/src/telemetry/tool-tracer.test.ts)<br>[src/telemetry/tool-tracer.ts](../../../../sources/freee__freee-mcp/src/telemetry/tool-tracer.ts)<br>[src/storage/context.test.ts](../../../../sources/freee__freee-mcp/src/storage/context.test.ts)<br>[src/storage/context.ts](../../../../sources/freee__freee-mcp/src/storage/context.ts)<br>[src/sign/tools.ts](../../../../sources/freee__freee-mcp/src/sign/tools.ts)<br>[src/mcp/tools.test.ts](../../../../sources/freee__freee-mcp/src/mcp/tools.test.ts)<br>[src/mcp/tools.ts](../../../../sources/freee__freee-mcp/src/mcp/tools.ts)<br>[skills/freee-api-skill/apm.yml](../../../../sources/freee__freee-mcp/skills/freee-api-skill/apm.yml) |
| mcp | 13 | [.mcp.json](../../../../sources/freee__freee-mcp/.mcp.json)<br>[mcp.json](../../../../sources/freee__freee-mcp/mcp.json)<br>[src/types/mcp-overrides.d.ts](../../../../sources/freee__freee-mcp/src/types/mcp-overrides.d.ts)<br>[src/mcp/file-upload-tool.test.ts](../../../../sources/freee__freee-mcp/src/mcp/file-upload-tool.test.ts)<br>[src/mcp/file-upload-tool.ts](../../../../sources/freee__freee-mcp/src/mcp/file-upload-tool.ts)<br>[src/mcp/handlers.test.ts](../../../../sources/freee__freee-mcp/src/mcp/handlers.test.ts)<br>[src/mcp/handlers.ts](../../../../sources/freee__freee-mcp/src/mcp/handlers.ts)<br>[src/mcp/tools.test.ts](../../../../sources/freee__freee-mcp/src/mcp/tools.test.ts) |
| retrieval | 5 | [src/index.test.ts](../../../../sources/freee__freee-mcp/src/index.test.ts)<br>[src/index.ts](../../../../sources/freee__freee-mcp/src/index.ts)<br>[src/sign/index.ts](../../../../sources/freee__freee-mcp/src/sign/index.ts)<br>[src/sign/cli/index.ts](../../../../sources/freee__freee-mcp/src/sign/cli/index.ts)<br>[src/cli/index.ts](../../../../sources/freee__freee-mcp/src/cli/index.ts) |
| spec | 0 | not obvious |
| eval | 63 | [src/config-remote.test.ts](../../../../sources/freee__freee-mcp/src/config-remote.test.ts)<br>[src/config.test.ts](../../../../sources/freee__freee-mcp/src/config.test.ts)<br>[src/index.test.ts](../../../../sources/freee__freee-mcp/src/index.test.ts)<br>[src/utils/error.test.ts](../../../../sources/freee__freee-mcp/src/utils/error.test.ts)<br>[src/utils/format-company.test.ts](../../../../sources/freee__freee-mcp/src/utils/format-company.test.ts)<br>[src/test-utils/setup.ts](../../../../sources/freee__freee-mcp/src/test-utils/setup.ts)<br>[src/test-utils/temp-dir.ts](../../../../sources/freee__freee-mcp/src/test-utils/temp-dir.ts)<br>[src/telemetry/fetch-patch.test.ts](../../../../sources/freee__freee-mcp/src/telemetry/fetch-patch.test.ts) |
| security | 26 | [src/sign/oauth.test.ts](../../../../sources/freee__freee-mcp/src/sign/oauth.test.ts)<br>[src/sign/oauth.ts](../../../../sources/freee__freee-mcp/src/sign/oauth.ts)<br>[src/sign/server/sign-auth-basic.integration.test.ts](../../../../sources/freee__freee-mcp/src/sign/server/sign-auth-basic.integration.test.ts)<br>[src/sign/server/sign-oauth-provider.ts](../../../../sources/freee__freee-mcp/src/sign/server/sign-oauth-provider.ts)<br>[src/server/auth-basic.integration.test.ts](../../../../sources/freee__freee-mcp/src/server/auth-basic.integration.test.ts)<br>[src/server/client-auth-basic.test.ts](../../../../sources/freee__freee-mcp/src/server/client-auth-basic.test.ts)<br>[src/server/client-auth-basic.ts](../../../../sources/freee__freee-mcp/src/server/client-auth-basic.ts)<br>[src/server/oauth-metadata-override.test.ts](../../../../sources/freee__freee-mcp/src/server/oauth-metadata-override.test.ts) |
| ci | 4 | [.github/workflows/claude.yml](../../../../sources/freee__freee-mcp/.github/workflows/claude.yml)<br>[.github/workflows/close-issue-by-label.yml](../../../../sources/freee__freee-mcp/.github/workflows/close-issue-by-label.yml)<br>[.github/workflows/publish.yml](../../../../sources/freee__freee-mcp/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/freee__freee-mcp/.github/workflows/test.yml) |
| container | 3 | [compose.yaml](../../../../sources/freee__freee-mcp/compose.yaml)<br>[Dockerfile](../../../../sources/freee__freee-mcp/Dockerfile)<br>[Dockerfile.sign](../../../../sources/freee__freee-mcp/Dockerfile.sign) |
| instruction | 2 | [CLAUDE.md](../../../../sources/freee__freee-mcp/CLAUDE.md)<br>[.github/CLAUDE.md](../../../../sources/freee__freee-mcp/.github/CLAUDE.md) |
| docs | 4 | [README.md](../../../../sources/freee__freee-mcp/README.md)<br>[docs/images/claude-desktop-custom-connector.png](../../../../sources/freee__freee-mcp/docs/images/claude-desktop-custom-connector.png)<br>[docs/images/claude-desktop-skill-upload.png](../../../../sources/freee__freee-mcp/docs/images/claude-desktop-skill-upload.png)<br>[.changeset/README.md](../../../../sources/freee__freee-mcp/.changeset/README.md) |
| config | 3 | [Makefile](../../../../sources/freee__freee-mcp/Makefile)<br>[package.json](../../../../sources/freee__freee-mcp/package.json)<br>[tsconfig.json](../../../../sources/freee__freee-mcp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 63 | [src/config-remote.test.ts](../../../../sources/freee__freee-mcp/src/config-remote.test.ts)<br>[src/config.test.ts](../../../../sources/freee__freee-mcp/src/config.test.ts)<br>[src/index.test.ts](../../../../sources/freee__freee-mcp/src/index.test.ts)<br>[src/utils/error.test.ts](../../../../sources/freee__freee-mcp/src/utils/error.test.ts)<br>[src/utils/format-company.test.ts](../../../../sources/freee__freee-mcp/src/utils/format-company.test.ts)<br>[src/test-utils/setup.ts](../../../../sources/freee__freee-mcp/src/test-utils/setup.ts) |
| CI workflows | 4 | [.github/workflows/claude.yml](../../../../sources/freee__freee-mcp/.github/workflows/claude.yml)<br>[.github/workflows/close-issue-by-label.yml](../../../../sources/freee__freee-mcp/.github/workflows/close-issue-by-label.yml)<br>[.github/workflows/publish.yml](../../../../sources/freee__freee-mcp/.github/workflows/publish.yml)<br>[.github/workflows/test.yml](../../../../sources/freee__freee-mcp/.github/workflows/test.yml) |
| Containers / deploy | 3 | [compose.yaml](../../../../sources/freee__freee-mcp/compose.yaml)<br>[Dockerfile](../../../../sources/freee__freee-mcp/Dockerfile)<br>[Dockerfile.sign](../../../../sources/freee__freee-mcp/Dockerfile.sign) |
| Security / policy | 26 | [src/sign/oauth.test.ts](../../../../sources/freee__freee-mcp/src/sign/oauth.test.ts)<br>[src/sign/oauth.ts](../../../../sources/freee__freee-mcp/src/sign/oauth.ts)<br>[src/sign/server/sign-auth-basic.integration.test.ts](../../../../sources/freee__freee-mcp/src/sign/server/sign-auth-basic.integration.test.ts)<br>[src/sign/server/sign-oauth-provider.ts](../../../../sources/freee__freee-mcp/src/sign/server/sign-oauth-provider.ts)<br>[src/server/auth-basic.integration.test.ts](../../../../sources/freee__freee-mcp/src/server/auth-basic.integration.test.ts)<br>[src/server/client-auth-basic.test.ts](../../../../sources/freee__freee-mcp/src/server/client-auth-basic.test.ts) |
| Agent instructions | 2 | [CLAUDE.md](../../../../sources/freee__freee-mcp/CLAUDE.md)<br>[.github/CLAUDE.md](../../../../sources/freee__freee-mcp/.github/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json`, `mcp.json`, `src/types/mcp-overrides.d.ts`.
2. Trace execution through entrypoints: `src/cli.ts`, `src/index.test.ts`, `src/index.ts`.
3. Map agent/tool runtime through: `src/telemetry/tool-tracer.test.ts`, `src/telemetry/tool-tracer.ts`, `src/storage/context.test.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.test.ts`, `src/index.ts`, `src/sign/index.ts`.
5. Verify behavior through test/eval files: `src/config-remote.test.ts`, `src/config.test.ts`, `src/index.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Model Context Protocol MCP server for freee API integration. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, Makefile, README.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
