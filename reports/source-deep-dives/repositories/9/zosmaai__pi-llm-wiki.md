# zosmaai/pi-llm-wiki Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Self-maintaining, Obsidian-compatible knowledge base for pi — turn raw sources into an interlinked wiki that compounds over time. Follows Karpathy's LLM Wiki pattern.

## 요약

- 조사 단위: `sources/zosmaai__pi-llm-wiki` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 110 files, 18 directories, depth score 98, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=test/ingest-tool.test.ts, test/ingest-worker.test.ts, test/personal-wiki-paths.test.ts이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | zosmaai/pi-llm-wiki |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 154 |
| Forks | 12 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/zosmaai__pi-llm-wiki](../../../../sources/zosmaai__pi-llm-wiki) |
| Existing report | [reports/llm-wiki/repositories/zosmaai__pi-llm-wiki.md](../../../llm-wiki/repositories/zosmaai__pi-llm-wiki.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 110 / 18 |
| Max observed depth | 5 |
| Top directories | .github, assets, docs, extensions, mcp, plans, prompts, scripts, skills, test |
| Top extensions | .ts: 47, .md: 43, .yml: 5, .json: 4, .png: 3, .js: 2, .mmd: 2, .yaml: 2, (none): 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 8 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| extensions | top-level component | 1 |
| mcp | top-level component | 1 |
| plans | top-level component | 1 |
| prompts | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | lint | biome check . |
| quality | package.json | lint:fix | biome check --apply . |
| build | package.json | release:patch | node scripts/release.js patch |
| build | package.json | release:minor | node scripts/release.js minor |
| build | package.json | release:major | node scripts/release.js major |
| build | package.json | release:push | git push origin main --tags |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
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
| retrieval | [test/ingest-tool.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/ingest-tool.test.ts) | retrieval signal |
| retrieval | [test/ingest-worker.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/ingest-worker.test.ts) | retrieval signal |
| retrieval | [test/personal-wiki-paths.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/personal-wiki-paths.test.ts) | retrieval signal |
| retrieval | [test/wiki-structure.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/wiki-structure.test.ts) | retrieval signal |
| docs | [README.de.md](../../../../sources/zosmaai__pi-llm-wiki/README.de.md) | docs signal |
| docs | [README.es.md](../../../../sources/zosmaai__pi-llm-wiki/README.es.md) | docs signal |
| docs | [README.fr.md](../../../../sources/zosmaai__pi-llm-wiki/README.fr.md) | docs signal |
| docs | [README.hi.md](../../../../sources/zosmaai__pi-llm-wiki/README.hi.md) | docs signal |
| eval | [test/background-tools.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/background-tools.test.ts) | eval signal |
| eval | [test/e2e-binary-detection.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-binary-detection.test.ts) | eval signal |
| eval | [test/e2e-docx.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-docx.test.ts) | eval signal |
| eval | [test/e2e-guardrails.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-guardrails.test.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 12 | [AGENTS.md](../../../../sources/zosmaai__pi-llm-wiki/AGENTS.md)<br>[skills/llm-wiki/SKILL.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/SKILL.md)<br>[skills/llm-wiki/templates/config.yaml](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/config.yaml)<br>[skills/llm-wiki/templates/DASHBOARD.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/DASHBOARD.md)<br>[skills/llm-wiki/templates/INDEX.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/INDEX.md)<br>[skills/llm-wiki/templates/LOG.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/LOG.md)<br>[skills/llm-wiki/templates/pages/analysis.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/pages/analysis.md)<br>[skills/llm-wiki/templates/pages/concept.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/pages/concept.md) |
| mcp | 1 | [mcp/index.ts](../../../../sources/zosmaai__pi-llm-wiki/mcp/index.ts) |
| retrieval | 52 | [test/ingest-tool.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/ingest-tool.test.ts)<br>[test/ingest-worker.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/ingest-worker.test.ts)<br>[test/personal-wiki-paths.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/personal-wiki-paths.test.ts)<br>[test/wiki-structure.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/wiki-structure.test.ts)<br>[test/wiki-watch.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/wiki-watch.test.ts)<br>[skills/llm-wiki/SKILL.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/SKILL.md)<br>[skills/llm-wiki/templates/config.yaml](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/config.yaml)<br>[skills/llm-wiki/templates/DASHBOARD.md](../../../../sources/zosmaai__pi-llm-wiki/skills/llm-wiki/templates/DASHBOARD.md) |
| spec | 3 | [docs/architecture.md](../../../../sources/zosmaai__pi-llm-wiki/docs/architecture.md)<br>[assets/architecture.md](../../../../sources/zosmaai__pi-llm-wiki/assets/architecture.md)<br>[assets/architecture.mmd](../../../../sources/zosmaai__pi-llm-wiki/assets/architecture.mmd) |
| eval | 25 | [test/background-tools.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/background-tools.test.ts)<br>[test/e2e-binary-detection.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-binary-detection.test.ts)<br>[test/e2e-docx.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-docx.test.ts)<br>[test/e2e-guardrails.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-guardrails.test.ts)<br>[test/e2e-html-normalization.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-html-normalization.test.ts)<br>[test/embeddings.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/embeddings.test.ts)<br>[test/helpers.ts](../../../../sources/zosmaai__pi-llm-wiki/test/helpers.ts)<br>[test/indexing.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/indexing.test.ts) |
| security | 0 | not obvious |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/codeql.yml)<br>[.github/workflows/contributors.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/contributors.yml)<br>[.github/workflows/release.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/zosmaai__pi-llm-wiki/AGENTS.md) |
| docs | 17 | [README.de.md](../../../../sources/zosmaai__pi-llm-wiki/README.de.md)<br>[README.es.md](../../../../sources/zosmaai__pi-llm-wiki/README.es.md)<br>[README.fr.md](../../../../sources/zosmaai__pi-llm-wiki/README.fr.md)<br>[README.hi.md](../../../../sources/zosmaai__pi-llm-wiki/README.hi.md)<br>[README.ja.md](../../../../sources/zosmaai__pi-llm-wiki/README.ja.md)<br>[README.ko.md](../../../../sources/zosmaai__pi-llm-wiki/README.ko.md)<br>[README.md](../../../../sources/zosmaai__pi-llm-wiki/README.md)<br>[README.pt.md](../../../../sources/zosmaai__pi-llm-wiki/README.pt.md) |
| config | 2 | [package.json](../../../../sources/zosmaai__pi-llm-wiki/package.json)<br>[tsconfig.json](../../../../sources/zosmaai__pi-llm-wiki/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 25 | [test/background-tools.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/background-tools.test.ts)<br>[test/e2e-binary-detection.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-binary-detection.test.ts)<br>[test/e2e-docx.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-docx.test.ts)<br>[test/e2e-guardrails.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-guardrails.test.ts)<br>[test/e2e-html-normalization.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/e2e-html-normalization.test.ts)<br>[test/embeddings.test.ts](../../../../sources/zosmaai__pi-llm-wiki/test/embeddings.test.ts) |
| CI workflows | 4 | [.github/workflows/ci.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/codeql.yml)<br>[.github/workflows/contributors.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/contributors.yml)<br>[.github/workflows/release.yml](../../../../sources/zosmaai__pi-llm-wiki/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/zosmaai__pi-llm-wiki/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/ingest-tool.test.ts`, `test/ingest-worker.test.ts`, `test/personal-wiki-paths.test.ts`.
2. Map agent/tool runtime through: `AGENTS.md`, `skills/llm-wiki/SKILL.md`, `skills/llm-wiki/templates/config.yaml`.
3. Inspect retrieval/memory/indexing through: `test/ingest-tool.test.ts`, `test/ingest-worker.test.ts`, `test/personal-wiki-paths.test.ts`.
4. Verify behavior through test/eval files: `test/background-tools.test.ts`, `test/e2e-binary-detection.test.ts`, `test/e2e-docx.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Self maintaining, Obsidian compatible knowledge base for pi — turn raw sources into an interlinked wiki that compounds o. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
