# opendatalab/MinerU-Document-Explorer Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Agent-native knowledge engine with MCP tools for document indexing, wiki organization, fast retrieval and deep reading across PDF/DOCX/PPTX/Markdown

## 요약

- 조사 단위: `sources/opendatalab__MinerU-Document-Explorer` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 191 files, 33 directories, depth score 107, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=test/mcp-agent-ux.test.ts, test/mcp.test.ts, src/mcp/server.ts이고, 의존성 단서는 modelcontextprotocol, llama, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | opendatalab/MinerU-Document-Explorer |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 586 |
| Forks | 64 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/opendatalab__MinerU-Document-Explorer](../../../../sources/opendatalab__MinerU-Document-Explorer) |
| Existing report | [reports/llm-wiki/repositories/opendatalab__MinerU-Document-Explorer.md](../../../llm-wiki/repositories/opendatalab__MinerU-Document-Explorer.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 191 / 33 |
| Max observed depth | 5 |
| Top directories | .claude-plugin, .github, .pi, assets, bin, demo, docs, finetune, scripts, skills, src, test |
| Top extensions | .ts: 73, .py: 32, .md: 26, .jsonl: 14, (none): 10, .png: 7, .json: 6, .yaml: 6, .sh: 5, .lock: 3, .txt: 3, .yml: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 27 |
| docs | documentation surface | 10 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| demo | top-level component | 1 |
| finetune | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | prepare | [ -d .git ] && ./scripts/install-hooks.sh \|\| true |
| build | package.json | build | node scripts/sync-embedded-skills.js && tsc -p tsconfig.build.json && rm -rf dist/backends/python && cp -r src/backends/python dist/backends/python && printf '#!/usr/bin/env node ' \| cat - dist/cli/qmd.js > dist/cli/qmd. |
| test | package.json | test | vitest run --reporter=verbose test/ |
| utility | package.json | qmd | tsx src/cli/qmd.ts |
| utility | package.json | update | tsx src/cli/qmd.ts update |
| utility | package.json | embed | tsx src/cli/qmd.ts embed |
| utility | package.json | search | tsx src/cli/qmd.ts search |
| utility | package.json | vsearch | tsx src/cli/qmd.ts vsearch |
| utility | package.json | rerank | tsx src/cli/qmd.ts rerank |
| test | package.json | inspector | npx @modelcontextprotocol/inspector tsx src/cli/qmd.ts mcp |
| build | package.json | release | ./scripts/release.sh |
| entrypoint | package.json bin | qmd | bin/qmd |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [test/mcp-agent-ux.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/mcp-agent-ux.test.ts) | mcp signal |
| mcp | [test/mcp.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/mcp.test.ts) | mcp signal |
| mcp | [src/mcp/server.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/server.ts) | mcp signal |
| mcp | [src/mcp/tools/core.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/core.ts) | mcp signal |
| agentRuntime | [test/agent-experience.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/agent-experience.test.ts) | agentRuntime signal |
| agentRuntime | [src/mcp/tools/document.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/document.ts) | agentRuntime signal |
| agentRuntime | [src/mcp/tools/index.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/index.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/index.ts) | entrypoints signal |
| entrypoints | [bin/qmd](../../../../sources/opendatalab__MinerU-Document-Explorer/bin/qmd) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/opendatalab__MinerU-Document-Explorer/CLAUDE.md) | instruction signal |
| instruction | [finetune/CLAUDE.md](../../../../sources/opendatalab__MinerU-Document-Explorer/finetune/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/opendatalab__MinerU-Document-Explorer/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [src/index.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/index.ts)<br>[src/mcp/server.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/server.ts)<br>[bin/qmd](../../../../sources/opendatalab__MinerU-Document-Explorer/bin/qmd) |
| agentRuntime | 10 | [test/agent-experience.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/agent-experience.test.ts)<br>[src/mcp/tools/core.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/core.ts)<br>[src/mcp/tools/document.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/document.ts)<br>[src/mcp/tools/index.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/index.ts)<br>[src/mcp/tools/wiki.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/wiki.ts)<br>[src/mcp/tools/writing.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/writing.ts)<br>[skills/mineru-document-explorer/SKILL.md](../../../../sources/opendatalab__MinerU-Document-Explorer/skills/mineru-document-explorer/SKILL.md)<br>[skills/mineru-document-explorer/references/mcp-setup.md](../../../../sources/opendatalab__MinerU-Document-Explorer/skills/mineru-document-explorer/references/mcp-setup.md) |
| mcp | 12 | [test/mcp-agent-ux.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/mcp-agent-ux.test.ts)<br>[test/mcp.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/mcp.test.ts)<br>[src/mcp/server.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/server.ts)<br>[src/mcp/tools/core.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/core.ts)<br>[src/mcp/tools/document.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/document.ts)<br>[src/mcp/tools/index.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/index.ts)<br>[src/mcp/tools/wiki.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/wiki.ts)<br>[src/mcp/tools/writing.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/mcp/tools/writing.ts) |
| retrieval | 15 | [example-index.yml](../../../../sources/opendatalab__MinerU-Document-Explorer/example-index.yml)<br>[WIKI-PROGRESS.md](../../../../sources/opendatalab__MinerU-Document-Explorer/WIKI-PROGRESS.md)<br>[test/wiki-collection-type.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/wiki-collection-type.test.ts)<br>[test/wiki-index.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/wiki-index.test.ts)<br>[test/wiki-lint.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/wiki-lint.test.ts)<br>[test/wiki-log.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/wiki-log.test.ts)<br>[src/index.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/index.ts)<br>[src/wiki/index-gen.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/src/wiki/index-gen.ts) |
| spec | 2 | [docs/architecture.md](../../../../sources/opendatalab__MinerU-Document-Explorer/docs/architecture.md)<br>[assets/qmd-architecture.png](../../../../sources/opendatalab__MinerU-Document-Explorer/assets/qmd-architecture.png) |
| eval | 36 | [test/agent-experience.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/agent-experience.test.ts)<br>[test/cli-ux-improvements.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/cli-ux-improvements.test.ts)<br>[test/cli.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/cli.test.ts)<br>[test/collections-config.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/collections-config.test.ts)<br>[test/concurrency.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/concurrency.test.ts)<br>[test/Containerfile](../../../../sources/opendatalab__MinerU-Document-Explorer/test/Containerfile)<br>[test/docx-pptx-backend.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/docx-pptx-backend.test.ts)<br>[test/eval-bm25.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/eval-bm25.test.ts) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 2 | [CLAUDE.md](../../../../sources/opendatalab__MinerU-Document-Explorer/CLAUDE.md)<br>[finetune/CLAUDE.md](../../../../sources/opendatalab__MinerU-Document-Explorer/finetune/CLAUDE.md) |
| docs | 13 | [README-zh.md](../../../../sources/opendatalab__MinerU-Document-Explorer/README-zh.md)<br>[README.md](../../../../sources/opendatalab__MinerU-Document-Explorer/README.md)<br>[finetune/README.md](../../../../sources/opendatalab__MinerU-Document-Explorer/finetune/README.md)<br>[finetune/experiments/grpo/README.md](../../../../sources/opendatalab__MinerU-Document-Explorer/finetune/experiments/grpo/README.md)<br>[docs/architecture.md](../../../../sources/opendatalab__MinerU-Document-Explorer/docs/architecture.md)<br>[docs/cli.md](../../../../sources/opendatalab__MinerU-Document-Explorer/docs/cli.md)<br>[docs/mcp.md](../../../../sources/opendatalab__MinerU-Document-Explorer/docs/mcp.md)<br>[docs/quickstart.md](../../../../sources/opendatalab__MinerU-Document-Explorer/docs/quickstart.md) |
| config | 4 | [package.json](../../../../sources/opendatalab__MinerU-Document-Explorer/package.json)<br>[tsconfig.json](../../../../sources/opendatalab__MinerU-Document-Explorer/tsconfig.json)<br>[finetune/pyproject.toml](../../../../sources/opendatalab__MinerU-Document-Explorer/finetune/pyproject.toml)<br>[finetune/uv.lock](../../../../sources/opendatalab__MinerU-Document-Explorer/finetune/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 36 | [test/agent-experience.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/agent-experience.test.ts)<br>[test/cli-ux-improvements.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/cli-ux-improvements.test.ts)<br>[test/cli.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/cli.test.ts)<br>[test/collections-config.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/collections-config.test.ts)<br>[test/concurrency.test.ts](../../../../sources/opendatalab__MinerU-Document-Explorer/test/concurrency.test.ts)<br>[test/Containerfile](../../../../sources/opendatalab__MinerU-Document-Explorer/test/Containerfile) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 2 | [CLAUDE.md](../../../../sources/opendatalab__MinerU-Document-Explorer/CLAUDE.md)<br>[finetune/CLAUDE.md](../../../../sources/opendatalab__MinerU-Document-Explorer/finetune/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/mcp-agent-ux.test.ts`, `test/mcp.test.ts`, `src/mcp/server.ts`.
2. Trace execution through entrypoints: `src/index.ts`, `src/mcp/server.ts`, `bin/qmd`.
3. Map agent/tool runtime through: `test/agent-experience.test.ts`, `src/mcp/tools/core.ts`, `src/mcp/tools/document.ts`.
4. Inspect retrieval/memory/indexing through: `example-index.yml`, `WIKI-PROGRESS.md`, `test/wiki-collection-type.test.ts`.
5. Verify behavior through test/eval files: `test/agent-experience.test.ts`, `test/cli-ux-improvements.test.ts`, `test/cli.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Agent native knowledge engine with MCP tools for document indexing, wiki organization, fast retrieval and deep reading a. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
