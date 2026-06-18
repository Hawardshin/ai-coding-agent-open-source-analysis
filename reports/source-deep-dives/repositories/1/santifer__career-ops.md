# santifer/career-ops Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

AI-powered job search system built on Claude Code. 14 skill modes, Go dashboard, PDF generation, batch processing.

## 요약

- 조사 단위: `sources/santifer__career-ops` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 238 files, 52 directories, depth score 112, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, .agents/skills/career-ops/SKILL.md이고, 의존성 단서는 playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | santifer/career-ops |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 54417 |
| Forks | 10794 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/santifer__career-ops](../../../../sources/santifer__career-ops) |
| Existing report | [reports/global-trending/repositories/santifer__career-ops.md](../../../global-trending/repositories/santifer__career-ops.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 238 / 52 |
| Max observed depth | 5 |
| Top directories | .agents, .claude, .claude-plugin, .github, .opencode, .qwen, batch, config, dashboard, data, docs, examples, fonts, interview-prep, jds, modes, output, providers, reports, scaffolder |
| Top extensions | .md: 111, .mjs: 43, .yml: 20, .go: 16, (none): 15, .json: 7, .svg: 5, .jpg: 4, .woff2: 4, .html: 2, .cff: 1, .example: 1 |
| Source patterns | cli-first, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 18 |
| .github | ci surface | 1 |
| batch | top-level component | 1 |
| config | top-level component | 1 |
| dashboard | top-level component | 1 |
| data | top-level component | 1 |
| examples | top-level component | 1 |
| examples/ats-normalization-test.md | examples workspace | 1 |
| examples/dual-track-engineer-instructor | examples workspace | 1 |
| examples/README.md | examples workspace | 1 |
| fonts | top-level component | 1 |
| interview-prep | top-level component | 1 |
| jds | top-level component | 1 |
| modes | top-level component | 1 |
| output | top-level component | 1 |
| providers | top-level component | 1 |
| reports | top-level component | 1 |
| scaffolder | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | doctor | node doctor.mjs |
| utility | package.json | verify | node verify-pipeline.mjs |
| utility | package.json | normalize | node normalize-statuses.mjs |
| utility | package.json | dedup | node dedup-tracker.mjs |
| utility | package.json | merge | node merge-tracker.mjs |
| utility | package.json | pdf | node generate-pdf.mjs |
| quality | package.json | sync-check | node cv-sync-check.mjs |
| quality | package.json | update:check | node update-system.mjs check |
| test | package.json | update:test | node updater-migration-tests.mjs |
| utility | package.json | update | node update-system.mjs apply |
| utility | package.json | rollback | node update-system.mjs rollback |
| quality | package.json | liveness | node check-liveness.mjs |
| utility | package.json | scan | node scan.mjs |
| utility | package.json | scan:full | node scan-ats-full.mjs |
| utility | package.json | validate:portals | node validate-portals.mjs |
| utility | package.json | tracker | node tracker.mjs |
| utility | package.json | patterns | node analyze-patterns.mjs |
| utility | package.json | gemini:eval | node gemini-eval.mjs |


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
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/santifer__career-ops/AGENTS.md) | agentRuntime signal |
| agentRuntime | [.agents/skills/career-ops/SKILL.md](../../../../sources/santifer__career-ops/.agents/skills/career-ops/SKILL.md) | agentRuntime signal |
| entrypoints | [scaffolder/bin/cli.mjs](../../../../sources/santifer__career-ops/scaffolder/bin/cli.mjs) | entrypoints signal |
| entrypoints | [dashboard/main.go](../../../../sources/santifer__career-ops/dashboard/main.go) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/santifer__career-ops/CLAUDE.md) | instruction signal |
| instruction | [GEMINI.md](../../../../sources/santifer__career-ops/GEMINI.md) | instruction signal |
| config | [package.json](../../../../sources/santifer__career-ops/package.json) | config signal |
| config | [scaffolder/package.json](../../../../sources/santifer__career-ops/scaffolder/package.json) | config signal |
| config | [dashboard/go.mod](../../../../sources/santifer__career-ops/dashboard/go.mod) | config signal |
| ci | [.github/workflows/codeql.yml](../../../../sources/santifer__career-ops/.github/workflows/codeql.yml) | ci support |
| ci | [.github/workflows/dependency-review.yml](../../../../sources/santifer__career-ops/.github/workflows/dependency-review.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/santifer__career-ops/docker-compose.yml) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [scaffolder/bin/cli.mjs](../../../../sources/santifer__career-ops/scaffolder/bin/cli.mjs)<br>[dashboard/main.go](../../../../sources/santifer__career-ops/dashboard/main.go) |
| agentRuntime | 2 | [AGENTS.md](../../../../sources/santifer__career-ops/AGENTS.md)<br>[.agents/skills/career-ops/SKILL.md](../../../../sources/santifer__career-ops/.agents/skills/career-ops/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 2 | [docs/ARCHITECTURE.md](../../../../sources/santifer__career-ops/docs/ARCHITECTURE.md)<br>[docs/roadmap-phases.jpg](../../../../sources/santifer__career-ops/docs/roadmap-phases.jpg) |
| eval | 13 | [gemini-eval.mjs](../../../../sources/santifer__career-ops/gemini-eval.mjs)<br>[test-all.mjs](../../../../sources/santifer__career-ops/test-all.mjs)<br>[test-salary-filter.mjs](../../../../sources/santifer__career-ops/test-salary-filter.mjs)<br>[tracker-columns-tests.mjs](../../../../sources/santifer__career-ops/tracker-columns-tests.mjs)<br>[updater-migration-tests.mjs](../../../../sources/santifer__career-ops/updater-migration-tests.mjs)<br>[examples/ats-normalization-test.md](../../../../sources/santifer__career-ops/examples/ats-normalization-test.md)<br>[dashboard/internal/ui/screens/pipeline_test.go](../../../../sources/santifer__career-ops/dashboard/internal/ui/screens/pipeline_test.go)<br>[dashboard/internal/ui/screens/sort_test.go](../../../../sources/santifer__career-ops/dashboard/internal/ui/screens/sort_test.go) |
| security | 2 | [SECURITY.md](../../../../sources/santifer__career-ops/SECURITY.md)<br>[.github/SECURITY.md](../../../../sources/santifer__career-ops/.github/SECURITY.md) |
| ci | 8 | [.github/workflows/codeql.yml](../../../../sources/santifer__career-ops/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/santifer__career-ops/.github/workflows/dependency-review.yml)<br>[.github/workflows/labeler.yml](../../../../sources/santifer__career-ops/.github/workflows/labeler.yml)<br>[.github/workflows/release.yml](../../../../sources/santifer__career-ops/.github/workflows/release.yml)<br>[.github/workflows/sbom.yml](../../../../sources/santifer__career-ops/.github/workflows/sbom.yml)<br>[.github/workflows/stale.yml](../../../../sources/santifer__career-ops/.github/workflows/stale.yml)<br>[.github/workflows/test.yml](../../../../sources/santifer__career-ops/.github/workflows/test.yml)<br>[.github/workflows/welcome.yml](../../../../sources/santifer__career-ops/.github/workflows/welcome.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/santifer__career-ops/docker-compose.yml)<br>[Dockerfile](../../../../sources/santifer__career-ops/Dockerfile) |
| instruction | 3 | [AGENTS.md](../../../../sources/santifer__career-ops/AGENTS.md)<br>[CLAUDE.md](../../../../sources/santifer__career-ops/CLAUDE.md)<br>[GEMINI.md](../../../../sources/santifer__career-ops/GEMINI.md) |
| docs | 41 | [README.ar.md](../../../../sources/santifer__career-ops/README.ar.md)<br>[README.cn.md](../../../../sources/santifer__career-ops/README.cn.md)<br>[README.es.md](../../../../sources/santifer__career-ops/README.es.md)<br>[README.fr.md](../../../../sources/santifer__career-ops/README.fr.md)<br>[README.ja.md](../../../../sources/santifer__career-ops/README.ja.md)<br>[README.ko-KR.md](../../../../sources/santifer__career-ops/README.ko-KR.md)<br>[README.md](../../../../sources/santifer__career-ops/README.md)<br>[README.pl.md](../../../../sources/santifer__career-ops/README.pl.md) |
| config | 3 | [package.json](../../../../sources/santifer__career-ops/package.json)<br>[scaffolder/package.json](../../../../sources/santifer__career-ops/scaffolder/package.json)<br>[dashboard/go.mod](../../../../sources/santifer__career-ops/dashboard/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 13 | [gemini-eval.mjs](../../../../sources/santifer__career-ops/gemini-eval.mjs)<br>[test-all.mjs](../../../../sources/santifer__career-ops/test-all.mjs)<br>[test-salary-filter.mjs](../../../../sources/santifer__career-ops/test-salary-filter.mjs)<br>[tracker-columns-tests.mjs](../../../../sources/santifer__career-ops/tracker-columns-tests.mjs)<br>[updater-migration-tests.mjs](../../../../sources/santifer__career-ops/updater-migration-tests.mjs)<br>[examples/ats-normalization-test.md](../../../../sources/santifer__career-ops/examples/ats-normalization-test.md) |
| CI workflows | 8 | [.github/workflows/codeql.yml](../../../../sources/santifer__career-ops/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/santifer__career-ops/.github/workflows/dependency-review.yml)<br>[.github/workflows/labeler.yml](../../../../sources/santifer__career-ops/.github/workflows/labeler.yml)<br>[.github/workflows/release.yml](../../../../sources/santifer__career-ops/.github/workflows/release.yml)<br>[.github/workflows/sbom.yml](../../../../sources/santifer__career-ops/.github/workflows/sbom.yml)<br>[.github/workflows/stale.yml](../../../../sources/santifer__career-ops/.github/workflows/stale.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/santifer__career-ops/docker-compose.yml)<br>[Dockerfile](../../../../sources/santifer__career-ops/Dockerfile) |
| Security / policy | 2 | [SECURITY.md](../../../../sources/santifer__career-ops/SECURITY.md)<br>[.github/SECURITY.md](../../../../sources/santifer__career-ops/.github/SECURITY.md) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/santifer__career-ops/AGENTS.md)<br>[CLAUDE.md](../../../../sources/santifer__career-ops/CLAUDE.md)<br>[GEMINI.md](../../../../sources/santifer__career-ops/GEMINI.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `.agents/skills/career-ops/SKILL.md`, `scaffolder/bin/cli.mjs`.
2. Trace execution through entrypoints: `scaffolder/bin/cli.mjs`, `dashboard/main.go`.
3. Map agent/tool runtime through: `AGENTS.md`, `.agents/skills/career-ops/SKILL.md`.
4. Verify behavior through test/eval files: `gemini-eval.mjs`, `test-all.mjs`, `test-salary-filter.mjs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AI powered job search system built on Claude Code. 14 skill modes, Go dashboard, PDF generation, batch processing.. 핵심 구조 신호는 JavaScript, package.json, Dockerfile, docker-compose.yml, README.md, AGENTS.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
