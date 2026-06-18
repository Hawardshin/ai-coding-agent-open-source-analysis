# mcp-use/mcp-use Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Servers for AI Agents.

## 요약

- 조사 단위: `sources/mcp-use__mcp-use` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,662 files, 355 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, skills/openapi-to-mcp/LICENSE.txt, skills/openapi-to-mcp/SKILL.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | mcp-use/mcp-use |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 10115 |
| Forks | 1336 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/mcp-use__mcp-use](../../../../sources/mcp-use__mcp-use) |
| Existing report | [reports/global-trending/repositories/mcp-use__mcp-use.md](../../../global-trending/repositories/mcp-use__mcp-use.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1662 / 355 |
| Max observed depth | 13 |
| Top directories | .claude-plugin, .github, docs, examples, libraries, skills, static |
| Top extensions | .ts: 508, .mdx: 239, .py: 225, .tsx: 170, .md: 150, .json: 103, .png: 80, .svg: 37, (none): 26, .yml: 24, .js: 17, .sh: 11 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 7 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| libraries | source boundary | 1 |
| skills | top-level component | 1 |
| static | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| mcp | [.mcp.json](../../../../sources/mcp-use__mcp-use/.mcp.json) | mcp signal |
| mcp | [skills/openapi-to-mcp/LICENSE.txt](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/LICENSE.txt) | mcp signal |
| mcp | [skills/openapi-to-mcp/SKILL.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/SKILL.md) | mcp signal |
| mcp | [skills/openapi-to-mcp/references/auth.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/auth.md) | mcp signal |
| agentRuntime | [skills/openapi-to-mcp/references/code-templates.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/code-templates.md) | agentRuntime signal |
| entrypoints | [libraries/typescript/packages/mcp-use/examples/server/oauth/workos/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/workos/src/server.ts) | entrypoints signal |
| entrypoints | [libraries/typescript/packages/mcp-use/examples/server/oauth/supabase/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/supabase/src/server.ts) | entrypoints signal |
| entrypoints | [libraries/typescript/packages/mcp-use/examples/server/oauth/keycloak/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/keycloak/src/server.ts) | entrypoints signal |
| entrypoints | [libraries/typescript/packages/mcp-use/examples/server/oauth/clerk/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/clerk/src/server.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/mcp-use__mcp-use/CLAUDE.md) | instruction signal |
| instruction | [libraries/typescript/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/CLAUDE.md) | instruction signal |
| instruction | [libraries/typescript/packages/cli/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/cli/CLAUDE.md) | instruction signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 28 | [libraries/typescript/packages/mcp-use/examples/server/oauth/workos/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/workos/src/server.ts)<br>[libraries/typescript/packages/mcp-use/examples/server/oauth/supabase/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/supabase/src/server.ts)<br>[libraries/typescript/packages/mcp-use/examples/server/oauth/keycloak/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/keycloak/src/server.ts)<br>[libraries/typescript/packages/mcp-use/examples/server/oauth/clerk/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/clerk/src/server.ts)<br>[libraries/typescript/packages/mcp-use/examples/server/oauth/better-auth/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/better-auth/src/server.ts)<br>[libraries/typescript/packages/mcp-use/examples/server/oauth/auth0-proxy/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/auth0-proxy/src/server.ts)<br>[libraries/typescript/packages/mcp-use/examples/server/oauth/auth0/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/oauth/auth0/src/server.ts)<br>[libraries/typescript/packages/mcp-use/examples/server/features/session-management/src/server.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/features/session-management/src/server.ts) |
| agentRuntime | 262 | [skills/openapi-to-mcp/LICENSE.txt](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/LICENSE.txt)<br>[skills/openapi-to-mcp/SKILL.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/SKILL.md)<br>[skills/openapi-to-mcp/references/auth.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/auth.md)<br>[skills/openapi-to-mcp/references/code-templates.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/code-templates.md)<br>[skills/openapi-to-mcp/references/deploy.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/deploy.md)<br>[skills/openapi-to-mcp/references/mapping-rules.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/mapping-rules.md)<br>[skills/openapi-to-mcp/references/testing.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/testing.md)<br>[skills/mcp-builder/LICENSE.txt](../../../../sources/mcp-use__mcp-use/skills/mcp-builder/LICENSE.txt) |
| mcp | 882 | [.mcp.json](../../../../sources/mcp-use__mcp-use/.mcp.json)<br>[skills/openapi-to-mcp/LICENSE.txt](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/LICENSE.txt)<br>[skills/openapi-to-mcp/SKILL.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/SKILL.md)<br>[skills/openapi-to-mcp/references/auth.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/auth.md)<br>[skills/openapi-to-mcp/references/code-templates.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/code-templates.md)<br>[skills/openapi-to-mcp/references/deploy.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/deploy.md)<br>[skills/openapi-to-mcp/references/mapping-rules.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/mapping-rules.md)<br>[skills/openapi-to-mcp/references/testing.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/testing.md) |
| retrieval | 82 | [libraries/typescript/packages/mcp-use/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/index.ts)<br>[libraries/typescript/packages/mcp-use/tests/agents/memory_tool_outputs.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/agents/memory_tool_outputs.test.ts)<br>[libraries/typescript/packages/mcp-use/src/utils/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/src/utils/index.ts)<br>[libraries/typescript/packages/mcp-use/src/utils/json-schema-to-zod/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/src/utils/json-schema-to-zod/index.ts)<br>[libraries/typescript/packages/mcp-use/src/telemetry/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/src/telemetry/index.ts)<br>[libraries/typescript/packages/mcp-use/src/server/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/src/server/index.ts)<br>[libraries/typescript/packages/mcp-use/src/server/widgets/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/src/server/widgets/index.ts)<br>[libraries/typescript/packages/mcp-use/src/server/widgets/adapters/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/src/server/widgets/adapters/index.ts) |
| spec | 7 | [skills/mcp-builder/references/foundations/architecture.md](../../../../sources/mcp-use__mcp-use/skills/mcp-builder/references/foundations/architecture.md)<br>[skills/mcp-builder/evals/architecture.json](../../../../sources/mcp-use__mcp-use/skills/mcp-builder/evals/architecture.json)<br>[skills/mcp-apps-builder/references/foundations/architecture.md](../../../../sources/mcp-use__mcp-use/skills/mcp-apps-builder/references/foundations/architecture.md)<br>[skills/chatgpt-app-builder/references/foundations/architecture.md](../../../../sources/mcp-use__mcp-use/skills/chatgpt-app-builder/references/foundations/architecture.md)<br>[skills/chatgpt-app-builder/evals/architecture.json](../../../../sources/mcp-use__mcp-use/skills/chatgpt-app-builder/evals/architecture.json)<br>[libraries/typescript/packages/mcp-use/src/server/sessions/ARCHITECTURE.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/src/server/sessions/ARCHITECTURE.md)<br>[libraries/python/ROADMAP.md](../../../../sources/mcp-use__mcp-use/libraries/python/ROADMAP.md) |
| eval | 215 | [libraries/typescript/packages/mcp-use/tests/ai_sdk_compatibility.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/ai_sdk_compatibility.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/browser-react-no-node-deps.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/browser-react-no-node-deps.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/commonjs-compatibility.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/commonjs-compatibility.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/inspector-no-langchain.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/inspector-no-langchain.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/stream_events_simple.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/stream_events_simple.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/stream_events.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/stream_events.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/unit/telemetry/agent-telemetry.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/unit/telemetry/agent-telemetry.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/unit/telemetry/client-telemetry.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/unit/telemetry/client-telemetry.test.ts) |
| security | 139 | [SECURITY.md](../../../../sources/mcp-use__mcp-use/SECURITY.md)<br>[skills/openapi-to-mcp/references/auth.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/auth.md)<br>[skills/mcp-builder/references/authentication/better-auth.md](../../../../sources/mcp-use__mcp-use/skills/mcp-builder/references/authentication/better-auth.md)<br>[skills/mcp-apps-builder/references/authentication/better-auth.md](../../../../sources/mcp-use__mcp-use/skills/mcp-apps-builder/references/authentication/better-auth.md)<br>[skills/chatgpt-app-builder/references/authentication/better-auth.md](../../../../sources/mcp-use__mcp-use/skills/chatgpt-app-builder/references/authentication/better-auth.md)<br>[libraries/typescript/packages/mcp-use/tests/unit/server/oauth-supabase-provider.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/unit/server/oauth-supabase-provider.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/unit/server/oauth-well-known.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/unit/server/oauth-well-known.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/unit/client/close-session-slot-guard.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/unit/client/close-session-slot-guard.test.ts) |
| ci | 24 | [.github/workflows/approve-fork-pr.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/approve-fork-pr.yml)<br>[.github/workflows/auto-label.json5](../../../../sources/mcp-use__mcp-use/.github/workflows/auto-label.json5)<br>[.github/workflows/auto-label.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/auto-label.yml)<br>[.github/workflows/bump-mcp-use-reusable.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/bump-mcp-use-reusable.yml)<br>[.github/workflows/ci.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/claude.yml)<br>[.github/workflows/conformance-comment.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/conformance-comment.yml)<br>[.github/workflows/conformance.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/conformance.yml) |
| container | 9 | [libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/config.toml](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/config.toml)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/deploy.sh](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/deploy.sh)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/README.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/README.md)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/deno.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/deno.json)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/index.ts)<br>[libraries/typescript/packages/inspector/Dockerfile](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/inspector/Dockerfile)<br>[docs/typescript/server/deployment/google.mdx](../../../../sources/mcp-use__mcp-use/docs/typescript/server/deployment/google.mdx)<br>[docs/typescript/server/deployment/mcp-use.mdx](../../../../sources/mcp-use__mcp-use/docs/typescript/server/deployment/mcp-use.mdx) |
| instruction | 5 | [CLAUDE.md](../../../../sources/mcp-use__mcp-use/CLAUDE.md)<br>[libraries/typescript/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/CLAUDE.md)<br>[libraries/typescript/packages/cli/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/cli/CLAUDE.md)<br>[libraries/python/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/python/CLAUDE.md)<br>[docs/CLAUDE.md](../../../../sources/mcp-use__mcp-use/docs/CLAUDE.md) |
| docs | 380 | [README.md](../../../../sources/mcp-use__mcp-use/README.md)<br>[skills/mcp-builder/evals/README.md](../../../../sources/mcp-use__mcp-use/skills/mcp-builder/evals/README.md)<br>[skills/chatgpt-app-builder/evals/README.md](../../../../sources/mcp-use__mcp-use/skills/chatgpt-app-builder/evals/README.md)<br>[libraries/typescript/README.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/README.md)<br>[libraries/typescript/packages/mcp-use/README.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/README.md)<br>[libraries/typescript/packages/mcp-use/tests/integration/agent/README.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/integration/agent/README.md)<br>[libraries/typescript/packages/mcp-use/tests/docs/agent-quick-start.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/docs/agent-quick-start.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/docs/prompts-example.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/docs/prompts-example.test.ts) |
| config | 77 | [libraries/typescript/package.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/package.json)<br>[libraries/typescript/pnpm-workspace.yaml](../../../../sources/mcp-use__mcp-use/libraries/typescript/pnpm-workspace.yaml)<br>[libraries/typescript/tsconfig.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/tsconfig.json)<br>[libraries/typescript/packages/mcp-use/package.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/package.json)<br>[libraries/typescript/packages/mcp-use/tsconfig.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tsconfig.json)<br>[libraries/typescript/packages/mcp-use/examples/server/ui/model-context/package.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/ui/model-context/package.json)<br>[libraries/typescript/packages/mcp-use/examples/server/ui/model-context/tsconfig.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/ui/model-context/tsconfig.json)<br>[libraries/typescript/packages/mcp-use/examples/server/ui/mcp-ui/package.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/ui/mcp-ui/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 215 | [libraries/typescript/packages/mcp-use/tests/ai_sdk_compatibility.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/ai_sdk_compatibility.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/browser-react-no-node-deps.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/browser-react-no-node-deps.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/commonjs-compatibility.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/commonjs-compatibility.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/inspector-no-langchain.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/inspector-no-langchain.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/stream_events_simple.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/stream_events_simple.test.ts)<br>[libraries/typescript/packages/mcp-use/tests/stream_events.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/stream_events.test.ts) |
| CI workflows | 24 | [.github/workflows/approve-fork-pr.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/approve-fork-pr.yml)<br>[.github/workflows/auto-label.json5](../../../../sources/mcp-use__mcp-use/.github/workflows/auto-label.json5)<br>[.github/workflows/auto-label.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/auto-label.yml)<br>[.github/workflows/bump-mcp-use-reusable.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/bump-mcp-use-reusable.yml)<br>[.github/workflows/ci.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/mcp-use__mcp-use/.github/workflows/claude.yml) |
| Containers / deploy | 9 | [libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/config.toml](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/config.toml)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/deploy.sh](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/deploy.sh)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/README.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/README.md)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/deno.json](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/deno.json)<br>[libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/index.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/examples/server/deployment/supabase/functions/mcp-server/index.ts)<br>[libraries/typescript/packages/inspector/Dockerfile](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/inspector/Dockerfile) |
| Security / policy | 139 | [SECURITY.md](../../../../sources/mcp-use__mcp-use/SECURITY.md)<br>[skills/openapi-to-mcp/references/auth.md](../../../../sources/mcp-use__mcp-use/skills/openapi-to-mcp/references/auth.md)<br>[skills/mcp-builder/references/authentication/better-auth.md](../../../../sources/mcp-use__mcp-use/skills/mcp-builder/references/authentication/better-auth.md)<br>[skills/mcp-apps-builder/references/authentication/better-auth.md](../../../../sources/mcp-use__mcp-use/skills/mcp-apps-builder/references/authentication/better-auth.md)<br>[skills/chatgpt-app-builder/references/authentication/better-auth.md](../../../../sources/mcp-use__mcp-use/skills/chatgpt-app-builder/references/authentication/better-auth.md)<br>[libraries/typescript/packages/mcp-use/tests/unit/server/oauth-supabase-provider.test.ts](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/mcp-use/tests/unit/server/oauth-supabase-provider.test.ts) |
| Agent instructions | 5 | [CLAUDE.md](../../../../sources/mcp-use__mcp-use/CLAUDE.md)<br>[libraries/typescript/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/CLAUDE.md)<br>[libraries/typescript/packages/cli/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/typescript/packages/cli/CLAUDE.md)<br>[libraries/python/CLAUDE.md](../../../../sources/mcp-use__mcp-use/libraries/python/CLAUDE.md)<br>[docs/CLAUDE.md](../../../../sources/mcp-use__mcp-use/docs/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.mcp.json`, `skills/openapi-to-mcp/LICENSE.txt`, `skills/openapi-to-mcp/SKILL.md`.
2. Trace execution through entrypoints: `libraries/typescript/packages/mcp-use/examples/server/oauth/workos/src/server.ts`, `libraries/typescript/packages/mcp-use/examples/server/oauth/supabase/src/server.ts`, `libraries/typescript/packages/mcp-use/examples/server/oauth/keycloak/src/server.ts`.
3. Map agent/tool runtime through: `skills/openapi-to-mcp/LICENSE.txt`, `skills/openapi-to-mcp/SKILL.md`, `skills/openapi-to-mcp/references/auth.md`.
4. Inspect retrieval/memory/indexing through: `libraries/typescript/packages/mcp-use/index.ts`, `libraries/typescript/packages/mcp-use/tests/agents/memory_tool_outputs.test.ts`, `libraries/typescript/packages/mcp-use/src/utils/index.ts`.
5. Verify behavior through test/eval files: `libraries/typescript/packages/mcp-use/tests/ai_sdk_compatibility.test.ts`, `libraries/typescript/packages/mcp-use/tests/browser-react-no-node-deps.test.ts`, `libraries/typescript/packages/mcp-use/tests/commonjs-compatibility.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude & MCP Servers for AI Agents.. 핵심 구조 신호는 TypeScript, README.md, CLAUDE.md, LICENSE, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
