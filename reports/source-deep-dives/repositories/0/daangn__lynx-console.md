# daangn/lynx-console Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

daangn/lynx-console

## 요약

- 조사 단위: `sources/daangn__lynx-console` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 179 files, 44 directories, depth score 96, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=package/src/index.tsx, example/src/App.css, example/src/App.tsx이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | daangn/lynx-console |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | JavaScript |
| Stars | 11 |
| Forks | 1 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/daangn__lynx-console](../../../../sources/daangn__lynx-console) |
| Existing report | [reports/korea-trending/repositories/daangn__lynx-console.md](../../../korea-trending/repositories/daangn__lynx-console.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 179 / 44 |
| Max observed depth | 7 |
| Top directories | .agents, .changeset, .github, .yarn, example, package |
| Top extensions | .md: 97, .ts: 28, .tsx: 15, .json: 11, .css: 8, (none): 6, .cjs: 5, .mjs: 4, .yml: 4, .lock: 1 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| example | top-level component | 1 |
| package | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | yarn workspace lynx-console build |
| serve-dev | package.json | dev | yarn workspace lynx-console dev |
| test | package.json | dev:example | yarn workspace lynx-console-test dev |
| test | package.json | build:example | yarn workspace lynx-console-test build |
| quality | package.json | check | biome check |
| quality | package.json | format | biome check --fix --unsafe |
| build | package.json | release | changeset publish |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [package/src/index.tsx](../../../../sources/daangn__lynx-console/package/src/index.tsx) | entrypoints signal |
| entrypoints | [example/src/App.css](../../../../sources/daangn__lynx-console/example/src/App.css) | entrypoints signal |
| entrypoints | [example/src/App.tsx](../../../../sources/daangn__lynx-console/example/src/App.tsx) | entrypoints signal |
| entrypoints | [example/src/index.tsx](../../../../sources/daangn__lynx-console/example/src/index.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__lynx-console/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__lynx-console/tsconfig.json) | config signal |
| config | [package/package.json](../../../../sources/daangn__lynx-console/package/package.json) | config signal |
| config | [package/tsconfig.json](../../../../sources/daangn__lynx-console/package/tsconfig.json) | config signal |
| docs | [package/README_ko.md](../../../../sources/daangn__lynx-console/package/README_ko.md) | docs signal |
| docs | [package/README.md](../../../../sources/daangn__lynx-console/package/README.md) | docs signal |
| docs | [.changeset/README.md](../../../../sources/daangn__lynx-console/.changeset/README.md) | docs signal |
| eval | [.agents/skills/lynx-trace-record/LICENSE](../../../../sources/daangn__lynx-console/.agents/skills/lynx-trace-record/LICENSE) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [package/src/index.tsx](../../../../sources/daangn__lynx-console/package/src/index.tsx)<br>[example/src/App.css](../../../../sources/daangn__lynx-console/example/src/App.css)<br>[example/src/App.tsx](../../../../sources/daangn__lynx-console/example/src/App.tsx)<br>[example/src/index.tsx](../../../../sources/daangn__lynx-console/example/src/index.tsx) |
| agentRuntime | 112 | [skills-lock.json](../../../../sources/daangn__lynx-console/skills-lock.json)<br>[package/src/hooks/index.ts](../../../../sources/daangn__lynx-console/package/src/hooks/index.ts)<br>[package/src/hooks/useConsole.ts](../../../../sources/daangn__lynx-console/package/src/hooks/useConsole.ts)<br>[package/src/hooks/useKeyboardHeight.ts](../../../../sources/daangn__lynx-console/package/src/hooks/useKeyboardHeight.ts)<br>[package/src/hooks/useLatestFcp.ts](../../../../sources/daangn__lynx-console/package/src/hooks/useLatestFcp.ts)<br>[package/src/hooks/useLongPressDrag.ts](../../../../sources/daangn__lynx-console/package/src/hooks/useLongPressDrag.ts)<br>[package/src/hooks/useNetwork.ts](../../../../sources/daangn__lynx-console/package/src/hooks/useNetwork.ts)<br>[package/src/hooks/useNetworkSearch.ts](../../../../sources/daangn__lynx-console/package/src/hooks/useNetworkSearch.ts) |
| mcp | 0 | not obvious |
| retrieval | 20 | [package/src/index.tsx](../../../../sources/daangn__lynx-console/package/src/index.tsx)<br>[package/src/setup/index.ts](../../../../sources/daangn__lynx-console/package/src/setup/index.ts)<br>[package/src/hooks/index.ts](../../../../sources/daangn__lynx-console/package/src/hooks/index.ts)<br>[example/src/index.tsx](../../../../sources/daangn__lynx-console/example/src/index.tsx)<br>[.agents/skills/reactlynx-best-practices/scripts/index.d.ts](../../../../sources/daangn__lynx-console/.agents/skills/reactlynx-best-practices/scripts/index.d.ts)<br>[.agents/skills/reactlynx-best-practices/scripts/index.mjs](../../../../sources/daangn__lynx-console/.agents/skills/reactlynx-best-practices/scripts/index.mjs)<br>[.agents/skills/lynx-devtool/scripts/index.mjs](../../../../sources/daangn__lynx-console/.agents/skills/lynx-devtool/scripts/index.mjs)<br>[.agents/skills/lynx-devtool/references/troubleshooting/index.md](../../../../sources/daangn__lynx-console/.agents/skills/lynx-devtool/references/troubleshooting/index.md) |
| spec | 0 | not obvious |
| eval | 15 | [.agents/skills/lynx-trace-record/LICENSE](../../../../sources/daangn__lynx-console/.agents/skills/lynx-trace-record/LICENSE)<br>[.agents/skills/lynx-trace-record/SKILL.md](../../../../sources/daangn__lynx-console/.agents/skills/lynx-trace-record/SKILL.md)<br>[.agents/skills/lynx-trace-record/scripts/shared.bundle.cjs](../../../../sources/daangn__lynx-console/.agents/skills/lynx-trace-record/scripts/shared.bundle.cjs)<br>[.agents/skills/lynx-trace-record/scripts/trace_record.bundle.cjs](../../../../sources/daangn__lynx-console/.agents/skills/lynx-trace-record/scripts/trace_record.bundle.cjs)<br>[.agents/skills/lynx-trace-analysis/LICENSE](../../../../sources/daangn__lynx-console/.agents/skills/lynx-trace-analysis/LICENSE)<br>[.agents/skills/lynx-trace-analysis/SKILL.md](../../../../sources/daangn__lynx-console/.agents/skills/lynx-trace-analysis/SKILL.md)<br>[.agents/skills/lynx-trace-analysis/scripts/shared.bundle.cjs](../../../../sources/daangn__lynx-console/.agents/skills/lynx-trace-analysis/scripts/shared.bundle.cjs)<br>[.agents/skills/lynx-trace-analysis/scripts/trace_query.bundle.cjs](../../../../sources/daangn__lynx-console/.agents/skills/lynx-trace-analysis/scripts/trace_query.bundle.cjs) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/check-changeset.yml](../../../../sources/daangn__lynx-console/.github/workflows/check-changeset.yml)<br>[.github/workflows/deploy-package.yml](../../../../sources/daangn__lynx-console/.github/workflows/deploy-package.yml)<br>[.github/workflows/lint.yml](../../../../sources/daangn__lynx-console/.github/workflows/lint.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [package/README_ko.md](../../../../sources/daangn__lynx-console/package/README_ko.md)<br>[package/README.md](../../../../sources/daangn__lynx-console/package/README.md)<br>[.changeset/README.md](../../../../sources/daangn__lynx-console/.changeset/README.md) |
| config | 7 | [package.json](../../../../sources/daangn__lynx-console/package.json)<br>[tsconfig.json](../../../../sources/daangn__lynx-console/tsconfig.json)<br>[package/package.json](../../../../sources/daangn__lynx-console/package/package.json)<br>[package/tsconfig.json](../../../../sources/daangn__lynx-console/package/tsconfig.json)<br>[example/package.json](../../../../sources/daangn__lynx-console/example/package.json)<br>[example/tsconfig.json](../../../../sources/daangn__lynx-console/example/tsconfig.json)<br>[example/src/tsconfig.json](../../../../sources/daangn__lynx-console/example/src/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 15 | [.agents/skills/lynx-trace-record/LICENSE](../../../../sources/daangn__lynx-console/.agents/skills/lynx-trace-record/LICENSE)<br>[.agents/skills/lynx-trace-record/SKILL.md](../../../../sources/daangn__lynx-console/.agents/skills/lynx-trace-record/SKILL.md)<br>[.agents/skills/lynx-trace-record/scripts/shared.bundle.cjs](../../../../sources/daangn__lynx-console/.agents/skills/lynx-trace-record/scripts/shared.bundle.cjs)<br>[.agents/skills/lynx-trace-record/scripts/trace_record.bundle.cjs](../../../../sources/daangn__lynx-console/.agents/skills/lynx-trace-record/scripts/trace_record.bundle.cjs)<br>[.agents/skills/lynx-trace-analysis/LICENSE](../../../../sources/daangn__lynx-console/.agents/skills/lynx-trace-analysis/LICENSE)<br>[.agents/skills/lynx-trace-analysis/SKILL.md](../../../../sources/daangn__lynx-console/.agents/skills/lynx-trace-analysis/SKILL.md) |
| CI workflows | 3 | [.github/workflows/check-changeset.yml](../../../../sources/daangn__lynx-console/.github/workflows/check-changeset.yml)<br>[.github/workflows/deploy-package.yml](../../../../sources/daangn__lynx-console/.github/workflows/deploy-package.yml)<br>[.github/workflows/lint.yml](../../../../sources/daangn__lynx-console/.github/workflows/lint.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `package/src/index.tsx`, `example/src/App.css`, `example/src/App.tsx`.
2. Trace execution through entrypoints: `package/src/index.tsx`, `example/src/App.css`, `example/src/App.tsx`.
3. Map agent/tool runtime through: `skills-lock.json`, `package/src/hooks/index.ts`, `package/src/hooks/useConsole.ts`.
4. Inspect retrieval/memory/indexing through: `package/src/index.tsx`, `package/src/setup/index.ts`, `package/src/hooks/index.ts`.
5. Verify behavior through test/eval files: `.agents/skills/lynx-trace-record/LICENSE`, `.agents/skills/lynx-trace-record/SKILL.md`, `.agents/skills/lynx-trace-record/scripts/shared.bundle.cjs`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 JavaScript, package.json, react, ci이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
