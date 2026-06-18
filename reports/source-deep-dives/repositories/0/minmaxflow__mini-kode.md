# minmaxflow/mini-kode Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 150 files, 20 directories.

## 요약

- 조사 단위: `sources/minmaxflow__mini-kode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 150 files, 20 directories, depth score 119, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=src/mcp/client.test.ts, src/mcp/client.ts, src/mcp/index.ts이고, 의존성 단서는 openai, modelcontextprotocol, react, commander, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | minmaxflow/mini-kode |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/minmaxflow__mini-kode](../../../../sources/minmaxflow__mini-kode) |
| Existing report | [reports/clone-structures/minmaxflow__mini-kode.md](../../../clone-structures/minmaxflow__mini-kode.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 150 / 20 |
| Max observed depth | 5 |
| Top directories | docs, src |
| Top extensions | .ts: 102, .tsx: 32, .md: 10, .json: 2, (none): 2, .png: 1, .yaml: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 87 |
| docs | documentation surface | 10 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | DEV=true bun --watch run src/index.ts |
| build | package.json | build | bun build src/index.ts --outfile dist/index.mjs --target=node --minify |
| test | package.json | test | vitest run |
| quality | package.json | lint | tsc --noEmit |
| quality | package.json | format | prettier --write "**/*.{ts,tsx,md}" |
| test | package.json | prepublishOnly | pnpm run build && pnpm run test |
| utility | package.json | postpublish | git tag v$(npm pkg get version \| tr -d '"') && git push origin v$(npm pkg get version \| tr -d '"') |
| entrypoint | package.json bin | index.mjs | dist/index.mjs |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [src/mcp/client.test.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/client.test.ts) | mcp signal |
| mcp | [src/mcp/client.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/client.ts) | mcp signal |
| mcp | [src/mcp/index.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/index.ts) | mcp signal |
| mcp | [src/mcp/tools.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/tools.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/minmaxflow__mini-kode/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/ui/hooks/useAppState.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useAppState.ts) | agentRuntime signal |
| agentRuntime | [src/ui/hooks/useDoubleKeyPress.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useDoubleKeyPress.ts) | agentRuntime signal |
| agentRuntime | [src/ui/hooks/useFileCompletion.test.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useFileCompletion.test.ts) | agentRuntime signal |
| entrypoints | [src/cli.ts](../../../../sources/minmaxflow__mini-kode/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/minmaxflow__mini-kode/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/minmaxflow__mini-kode/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/minmaxflow__mini-kode/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/cli.ts](../../../../sources/minmaxflow__mini-kode/src/cli.ts)<br>[src/index.ts](../../../../sources/minmaxflow__mini-kode/src/index.ts) |
| agentRuntime | 63 | [AGENTS.md](../../../../sources/minmaxflow__mini-kode/AGENTS.md)<br>[src/ui/hooks/useAppState.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useAppState.ts)<br>[src/ui/hooks/useDoubleKeyPress.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useDoubleKeyPress.ts)<br>[src/ui/hooks/useFileCompletion.test.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useFileCompletion.test.ts)<br>[src/ui/hooks/useFileCompletion.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useFileCompletion.ts)<br>[src/ui/hooks/useTerminalWidth.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useTerminalWidth.ts)<br>[src/ui/components/tool-views/ArchitectResultView.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/tool-views/ArchitectResultView.tsx)<br>[src/ui/components/tool-views/BashResultView.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/tool-views/BashResultView.tsx) |
| mcp | 5 | [src/mcp/client.test.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/client.test.ts)<br>[src/mcp/client.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/client.ts)<br>[src/mcp/index.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/index.ts)<br>[src/mcp/tools.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/tools.ts)<br>[src/mcp/types.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/types.ts) |
| retrieval | 7 | [src/index.ts](../../../../sources/minmaxflow__mini-kode/src/index.ts)<br>[src/ui/components/tool-views/index.ts](../../../../sources/minmaxflow__mini-kode/src/ui/components/tool-views/index.ts)<br>[src/ui/commands/index.ts](../../../../sources/minmaxflow__mini-kode/src/ui/commands/index.ts)<br>[src/tools/index.ts](../../../../sources/minmaxflow__mini-kode/src/tools/index.ts)<br>[src/permissions/index.ts](../../../../sources/minmaxflow__mini-kode/src/permissions/index.ts)<br>[src/mcp/index.ts](../../../../sources/minmaxflow__mini-kode/src/mcp/index.ts)<br>[src/config/index.ts](../../../../sources/minmaxflow__mini-kode/src/config/index.ts) |
| spec | 1 | [docs/architecture.md](../../../../sources/minmaxflow__mini-kode/docs/architecture.md) |
| eval | 32 | [src/utils/file-type.test.ts](../../../../sources/minmaxflow__mini-kode/src/utils/file-type.test.ts)<br>[src/ui/hooks/useFileCompletion.test.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useFileCompletion.test.ts)<br>[src/ui/components/MessageFeed.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/MessageFeed.test.tsx)<br>[src/ui/components/PromptInput.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/PromptInput.test.tsx)<br>[src/ui/components/ToolCall.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/ToolCall.test.tsx)<br>[src/ui/components/tool-views/FetchResultView.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/tool-views/FetchResultView.test.tsx)<br>[src/tools/architect.test.ts](../../../../sources/minmaxflow__mini-kode/src/tools/architect.test.ts)<br>[src/tools/bash.test.ts](../../../../sources/minmaxflow__mini-kode/src/tools/bash.test.ts) |
| security | 2 | [src/permissions/permission.test.ts](../../../../sources/minmaxflow__mini-kode/src/permissions/permission.test.ts)<br>[docs/permission.md](../../../../sources/minmaxflow__mini-kode/docs/permission.md) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/minmaxflow__mini-kode/AGENTS.md) |
| docs | 8 | [README.md](../../../../sources/minmaxflow__mini-kode/README.md)<br>[docs/architecture.md](../../../../sources/minmaxflow__mini-kode/docs/architecture.md)<br>[docs/config.md](../../../../sources/minmaxflow__mini-kode/docs/config.md)<br>[docs/llm-tool-integration.md](../../../../sources/minmaxflow__mini-kode/docs/llm-tool-integration.md)<br>[docs/permission.md](../../../../sources/minmaxflow__mini-kode/docs/permission.md)<br>[docs/README.md](../../../../sources/minmaxflow__mini-kode/docs/README.md)<br>[docs/tools.md](../../../../sources/minmaxflow__mini-kode/docs/tools.md)<br>[docs/ui.md](../../../../sources/minmaxflow__mini-kode/docs/ui.md) |
| config | 2 | [package.json](../../../../sources/minmaxflow__mini-kode/package.json)<br>[tsconfig.json](../../../../sources/minmaxflow__mini-kode/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 32 | [src/utils/file-type.test.ts](../../../../sources/minmaxflow__mini-kode/src/utils/file-type.test.ts)<br>[src/ui/hooks/useFileCompletion.test.ts](../../../../sources/minmaxflow__mini-kode/src/ui/hooks/useFileCompletion.test.ts)<br>[src/ui/components/MessageFeed.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/MessageFeed.test.tsx)<br>[src/ui/components/PromptInput.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/PromptInput.test.tsx)<br>[src/ui/components/ToolCall.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/ToolCall.test.tsx)<br>[src/ui/components/tool-views/FetchResultView.test.tsx](../../../../sources/minmaxflow__mini-kode/src/ui/components/tool-views/FetchResultView.test.tsx) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [src/permissions/permission.test.ts](../../../../sources/minmaxflow__mini-kode/src/permissions/permission.test.ts)<br>[docs/permission.md](../../../../sources/minmaxflow__mini-kode/docs/permission.md) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/minmaxflow__mini-kode/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/mcp/client.test.ts`, `src/mcp/client.ts`, `src/mcp/index.ts`.
2. Trace execution through entrypoints: `src/cli.ts`, `src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `src/ui/hooks/useAppState.ts`, `src/ui/hooks/useDoubleKeyPress.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/ui/components/tool-views/index.ts`, `src/ui/commands/index.ts`.
5. Verify behavior through test/eval files: `src/utils/file-type.test.ts`, `src/ui/hooks/useFileCompletion.test.ts`, `src/ui/components/MessageFeed.test.tsx`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 150 files, 20 directories.. 핵심 구조 신호는 package.json, README.md, AGENTS.md, LICENSE, openai, modelcontextprotocol이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 ci signal not obvious, license metadata missing입니다.
