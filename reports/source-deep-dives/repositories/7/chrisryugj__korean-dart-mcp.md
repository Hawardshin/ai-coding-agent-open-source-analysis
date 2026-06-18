# chrisryugj/korean-dart-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

OpenDART 전자공시MCP | 83개 API → 15 MCP 도구. 공시·재무·지분·XBRL + 버핏급 애널리스트 프레임(내부자 시그널·회계 리스크·퀄리티 체크리스트) + HWP/PDF 첨부 마크다운화 | 83 Korean DART disclosure APIs → 15 MCP tools with Buffett-grade analyst frames

## 요약

- 조사 단위: `sources/chrisryugj__korean-dart-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 49 files, 7 directories, depth score 85, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/cli.ts, src/index.ts이고, 의존성 단서는 modelcontextprotocol, commander, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | chrisryugj/korean-dart-mcp |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/chrisryugj__korean-dart-mcp](../../../../sources/chrisryugj__korean-dart-mcp) |
| Existing report | [reports/korea-trending/repositories/chrisryugj__korean-dart-mcp.md](../../../korea-trending/repositories/chrisryugj__korean-dart-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 49 / 7 |
| Max observed depth | 3 |
| Top directories | .claude-plugin, scripts, src |
| Top extensions | .ts: 27, .mjs: 10, .json: 5, .md: 4, (none): 2, .example: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 24 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | watch | tsc --watch |
| serve-dev | package.json | start | node build/index.js |
| build | package.json | cli | node build/cli.js |
| build | package.json | prepublishOnly | npm run build |
| entrypoint | package.json bin | index.js | build/index.js |
| entrypoint | package.json bin | cli.js | build/cli.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src/cli.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/chrisryugj__korean-dart-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/chrisryugj__korean-dart-mcp/tsconfig.json) | config signal |
| docs | [README-EN.md](../../../../sources/chrisryugj__korean-dart-mcp/README-EN.md) | docs signal |
| docs | [README.md](../../../../sources/chrisryugj__korean-dart-mcp/README.md) | docs signal |
| eval | [src/tools/buffett-quality-snapshot.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/tools/buffett-quality-snapshot.ts) | eval support |
| eval | [scripts/bench-concurrency.mjs](../../../../sources/chrisryugj__korean-dart-mcp/scripts/bench-concurrency.mjs) | eval support |
| instruction | [CLAUDE.md](../../../../sources/chrisryugj__korean-dart-mcp/CLAUDE.md) | instruction support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [src/cli.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/cli.ts)<br>[src/index.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/index.ts) |
| agentRuntime | 17 | [src/tools/_helpers.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/tools/_helpers.ts)<br>[src/tools/buffett-quality-snapshot.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/tools/buffett-quality-snapshot.ts)<br>[src/tools/disclosure-anomaly.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/tools/disclosure-anomaly.ts)<br>[src/tools/download-document.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/tools/download-document.ts)<br>[src/tools/get-attachments.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/tools/get-attachments.ts)<br>[src/tools/get-company.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/tools/get-company.ts)<br>[src/tools/get-corporate-event.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/tools/get-corporate-event.ts)<br>[src/tools/get-executive-compensation.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/tools/get-executive-compensation.ts) |
| mcp | 1 | [src/server/mcp-server.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/server/mcp-server.ts) |
| retrieval | 2 | [src/index.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/index.ts)<br>[src/tools/index.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/tools/index.ts) |
| spec | 0 | not obvious |
| eval | 5 | [src/tools/buffett-quality-snapshot.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/tools/buffett-quality-snapshot.ts)<br>[scripts/bench-concurrency.mjs](../../../../sources/chrisryugj__korean-dart-mcp/scripts/bench-concurrency.mjs)<br>[scripts/field-test-v0_8.mjs](../../../../sources/chrisryugj__korean-dart-mcp/scripts/field-test-v0_8.mjs)<br>[scripts/field-test-v0_9.mjs](../../../../sources/chrisryugj__korean-dart-mcp/scripts/field-test-v0_9.mjs)<br>[scripts/test-xbrl-markdown.mjs](../../../../sources/chrisryugj__korean-dart-mcp/scripts/test-xbrl-markdown.mjs) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/chrisryugj__korean-dart-mcp/CLAUDE.md) |
| docs | 2 | [README-EN.md](../../../../sources/chrisryugj__korean-dart-mcp/README-EN.md)<br>[README.md](../../../../sources/chrisryugj__korean-dart-mcp/README.md) |
| config | 2 | [package.json](../../../../sources/chrisryugj__korean-dart-mcp/package.json)<br>[tsconfig.json](../../../../sources/chrisryugj__korean-dart-mcp/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 5 | [src/tools/buffett-quality-snapshot.ts](../../../../sources/chrisryugj__korean-dart-mcp/src/tools/buffett-quality-snapshot.ts)<br>[scripts/bench-concurrency.mjs](../../../../sources/chrisryugj__korean-dart-mcp/scripts/bench-concurrency.mjs)<br>[scripts/field-test-v0_8.mjs](../../../../sources/chrisryugj__korean-dart-mcp/scripts/field-test-v0_8.mjs)<br>[scripts/field-test-v0_9.mjs](../../../../sources/chrisryugj__korean-dart-mcp/scripts/field-test-v0_9.mjs)<br>[scripts/test-xbrl-markdown.mjs](../../../../sources/chrisryugj__korean-dart-mcp/scripts/test-xbrl-markdown.mjs) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/chrisryugj__korean-dart-mcp/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/cli.ts`, `src/index.ts`, `package.json`.
2. Trace execution through entrypoints: `src/cli.ts`, `src/index.ts`.
3. Map agent/tool runtime through: `src/tools/_helpers.ts`, `src/tools/buffett-quality-snapshot.ts`, `src/tools/disclosure-anomaly.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/tools/index.ts`.
5. Verify behavior through test/eval files: `src/tools/buffett-quality-snapshot.ts`, `scripts/bench-concurrency.mjs`, `scripts/field-test-v0_8.mjs`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 OpenDART 전자공시MCP 83개 API → 15 MCP 도구. 공시·재무·지분·XBRL + 버핏급 애널리스트 프레임 내부자 시그널·회계 리스크·퀄리티 체크리스트 + HWP/PDF 첨부 마크다운화 83 Korea. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
