# shinpr/mcp-local-rag Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local-first RAG server for developers. Semantic + keyword search for code and technical docs. Works with MCP or CLI. Fully private, zero setup.

## 요약

- 조사 단위: `sources/shinpr__mcp-local-rag` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 140 files, 35 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=skills/mcp-local-rag/SKILL.md, skills/mcp-local-rag/references/cli-reference.md, skills/mcp-local-rag/references/html-ingestion.md이고, 의존성 단서는 modelcontextprotocol, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | shinpr/mcp-local-rag |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 317 |
| Forks | 57 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/shinpr__mcp-local-rag](../../../../sources/shinpr__mcp-local-rag) |
| Existing report | [reports/global-trending/repositories/shinpr__mcp-local-rag.md](../../../global-trending/repositories/shinpr__mcp-local-rag.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 140 / 35 |
| Max observed depth | 4 |
| Top directories | .github, .husky, assets, scripts, skills, src, tests |
| Top extensions | .ts: 111, .md: 7, .json: 6, (none): 6, .mjs: 4, .yaml: 2, .docx: 1, .jpg: 1, .sh: 1, .yml: 1 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 75 |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | dev | tsx src/index.ts |
| serve-dev | package.json | watch | tsx watch src/index.ts |
| quality | package.json | type-check | tsc --noEmit |
| test | package.json | type-check:test | tsc -p tsconfig.test.json |
| test | package.json | test | node scripts/run-vitest-with-device.mjs cpu run --exclude 'src/__tests__/e2e/visual-ingest-e2e.test.ts' |
| test | package.json | test:webgpu | pnpm run test:webgpu:main-path |
| test | package.json | test:webgpu:main-path | node scripts/run-vitest-with-device.mjs webgpu run src/server/__tests__/rag-server.embedding.integration.test.ts src/server/__tests__/rag-server.ingest.integration.test.ts src/server/__tests__/rag-server.search.integrati |
| test | package.json | test:webgpu:full | node scripts/run-vitest-with-device.mjs webgpu run --exclude 'src/__tests__/e2e/visual-ingest-e2e.test.ts' |
| test | package.json | test:watch | vitest |
| test | package.json | test:e2e | RUN_E2E=1 vitest run src/__tests__/e2e/visual-ingest-e2e.test.ts |
| quality | package.json | format | biome format --write src |
| quality | package.json | format:check | biome format src |
| quality | package.json | lint | biome lint src |
| quality | package.json | lint:fix | biome lint --write src |
| quality | package.json | check | biome check src |
| quality | package.json | check:fix | biome check --write src |
| quality | package.json | check:unused | knip --include exports |
| test | package.json | check:deps | dpdm --no-tree --no-warning --exit-code circular:1 -T --tsconfig ./tsconfig.json --exclude "(node_modules\|__tests__\|\.test\.ts$\|\.spec\.ts$)" "src/**/*.ts" |
| test | package.json | check:all | pnpm run check && pnpm run lint && pnpm run format:check && pnpm run check:unused && pnpm run check:deps && pnpm run build && pnpm run type-check:test && pnpm run test |
| test | package.json | cleanup:processes | bash ./scripts/cleanup-test-processes.sh |
| test | package.json | test:safe | pnpm test && pnpm run cleanup:processes |
| utility | package.json | prepare | husky |
| entrypoint | package.json bin | index.js | dist/index.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [skills/mcp-local-rag/SKILL.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/SKILL.md) | mcp signal |
| mcp | [skills/mcp-local-rag/references/cli-reference.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/cli-reference.md) | mcp signal |
| mcp | [skills/mcp-local-rag/references/html-ingestion.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/html-ingestion.md) | mcp signal |
| mcp | [skills/mcp-local-rag/references/query-optimization.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/query-optimization.md) | mcp signal |
| agentRuntime | [src/server/tool-definitions.ts](../../../../sources/shinpr__mcp-local-rag/src/server/tool-definitions.ts) | agentRuntime signal |
| agentRuntime | [src/server/tool-input.ts](../../../../sources/shinpr__mcp-local-rag/src/server/tool-input.ts) | agentRuntime signal |
| agentRuntime | [src/server/__tests__/tool-input.test.ts](../../../../sources/shinpr__mcp-local-rag/src/server/__tests__/tool-input.test.ts) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/shinpr__mcp-local-rag/server.json) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/shinpr__mcp-local-rag/src/index.ts) | entrypoints signal |
| entrypoints | [src/bin/install-skills.ts](../../../../sources/shinpr__mcp-local-rag/src/bin/install-skills.ts) | entrypoints signal |
| config | [package.json](../../../../sources/shinpr__mcp-local-rag/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/shinpr__mcp-local-rag/pnpm-workspace.yaml) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [server.json](../../../../sources/shinpr__mcp-local-rag/server.json)<br>[src/index.ts](../../../../sources/shinpr__mcp-local-rag/src/index.ts)<br>[src/bin/install-skills.ts](../../../../sources/shinpr__mcp-local-rag/src/bin/install-skills.ts) |
| agentRuntime | 8 | [src/server/tool-definitions.ts](../../../../sources/shinpr__mcp-local-rag/src/server/tool-definitions.ts)<br>[src/server/tool-input.ts](../../../../sources/shinpr__mcp-local-rag/src/server/tool-input.ts)<br>[src/server/__tests__/tool-input.test.ts](../../../../sources/shinpr__mcp-local-rag/src/server/__tests__/tool-input.test.ts)<br>[skills/mcp-local-rag/SKILL.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/SKILL.md)<br>[skills/mcp-local-rag/references/cli-reference.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/cli-reference.md)<br>[skills/mcp-local-rag/references/html-ingestion.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/html-ingestion.md)<br>[skills/mcp-local-rag/references/query-optimization.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/query-optimization.md)<br>[skills/mcp-local-rag/references/result-refinement.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/result-refinement.md) |
| mcp | 5 | [skills/mcp-local-rag/SKILL.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/SKILL.md)<br>[skills/mcp-local-rag/references/cli-reference.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/cli-reference.md)<br>[skills/mcp-local-rag/references/html-ingestion.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/html-ingestion.md)<br>[skills/mcp-local-rag/references/query-optimization.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/query-optimization.md)<br>[skills/mcp-local-rag/references/result-refinement.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/result-refinement.md) |
| retrieval | 35 | [src/index.ts](../../../../sources/shinpr__mcp-local-rag/src/index.ts)<br>[src/vectordb/index.ts](../../../../sources/shinpr__mcp-local-rag/src/vectordb/index.ts)<br>[src/server/index.ts](../../../../sources/shinpr__mcp-local-rag/src/server/index.ts)<br>[src/server/__tests__/ingest-rollback.test.ts](../../../../sources/shinpr__mcp-local-rag/src/server/__tests__/ingest-rollback.test.ts)<br>[src/server/__tests__/rag-server.config.test.ts](../../../../sources/shinpr__mcp-local-rag/src/server/__tests__/rag-server.config.test.ts)<br>[src/server/__tests__/rag-server.delete.integration.test.ts](../../../../sources/shinpr__mcp-local-rag/src/server/__tests__/rag-server.delete.integration.test.ts)<br>[src/server/__tests__/rag-server.dispatcher-mapping.test.ts](../../../../sources/shinpr__mcp-local-rag/src/server/__tests__/rag-server.dispatcher-mapping.test.ts)<br>[src/server/__tests__/rag-server.dtype-pdf-regression.test.ts](../../../../sources/shinpr__mcp-local-rag/src/server/__tests__/rag-server.dtype-pdf-regression.test.ts) |
| spec | 0 | not obvious |
| eval | 68 | [tsconfig.test.json](../../../../sources/shinpr__mcp-local-rag/tsconfig.test.json)<br>[tests/fixtures/sample-e2e.docx](../../../../sources/shinpr__mcp-local-rag/tests/fixtures/sample-e2e.docx)<br>[src/vectordb/__tests__/search-filters.test.ts](../../../../sources/shinpr__mcp-local-rag/src/vectordb/__tests__/search-filters.test.ts)<br>[src/vectordb/__tests__/vectordb.test.ts](../../../../sources/shinpr__mcp-local-rag/src/vectordb/__tests__/vectordb.test.ts)<br>[src/utils/__tests__/base-dirs-resolver.test.ts](../../../../sources/shinpr__mcp-local-rag/src/utils/__tests__/base-dirs-resolver.test.ts)<br>[src/utils/__tests__/base-dirs.test.ts](../../../../sources/shinpr__mcp-local-rag/src/utils/__tests__/base-dirs.test.ts)<br>[src/utils/__tests__/errors.test.ts](../../../../sources/shinpr__mcp-local-rag/src/utils/__tests__/errors.test.ts)<br>[src/utils/__tests__/sensitive-path.test.ts](../../../../sources/shinpr__mcp-local-rag/src/utils/__tests__/sensitive-path.test.ts) |
| security | 1 | [src/__tests__/security/security.test.ts](../../../../sources/shinpr__mcp-local-rag/src/__tests__/security/security.test.ts) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/shinpr__mcp-local-rag/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/shinpr__mcp-local-rag/README.md) |
| config | 3 | [package.json](../../../../sources/shinpr__mcp-local-rag/package.json)<br>[pnpm-workspace.yaml](../../../../sources/shinpr__mcp-local-rag/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/shinpr__mcp-local-rag/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 68 | [tsconfig.test.json](../../../../sources/shinpr__mcp-local-rag/tsconfig.test.json)<br>[tests/fixtures/sample-e2e.docx](../../../../sources/shinpr__mcp-local-rag/tests/fixtures/sample-e2e.docx)<br>[src/vectordb/__tests__/search-filters.test.ts](../../../../sources/shinpr__mcp-local-rag/src/vectordb/__tests__/search-filters.test.ts)<br>[src/vectordb/__tests__/vectordb.test.ts](../../../../sources/shinpr__mcp-local-rag/src/vectordb/__tests__/vectordb.test.ts)<br>[src/utils/__tests__/base-dirs-resolver.test.ts](../../../../sources/shinpr__mcp-local-rag/src/utils/__tests__/base-dirs-resolver.test.ts)<br>[src/utils/__tests__/base-dirs.test.ts](../../../../sources/shinpr__mcp-local-rag/src/utils/__tests__/base-dirs.test.ts) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/shinpr__mcp-local-rag/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [src/__tests__/security/security.test.ts](../../../../sources/shinpr__mcp-local-rag/src/__tests__/security/security.test.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `skills/mcp-local-rag/SKILL.md`, `skills/mcp-local-rag/references/cli-reference.md`, `skills/mcp-local-rag/references/html-ingestion.md`.
2. Trace execution through entrypoints: `server.json`, `src/index.ts`, `src/bin/install-skills.ts`.
3. Map agent/tool runtime through: `src/server/tool-definitions.ts`, `src/server/tool-input.ts`, `src/server/__tests__/tool-input.test.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/vectordb/index.ts`, `src/server/index.ts`.
5. Verify behavior through test/eval files: `tsconfig.test.json`, `tests/fixtures/sample-e2e.docx`, `src/vectordb/__tests__/search-filters.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local first RAG server for developers. Semantic + keyword search for code and technical docs. Works with MCP or CLI. Ful. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, transformers이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
