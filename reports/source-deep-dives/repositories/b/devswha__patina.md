# devswha/patina Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Detects and rewrites AI writing patterns in Korean, English, Chinese, and Japanese. Runs as a skill for Claude Code, Codex CLI, Cursor, and OpenCode, or as a standalone Node.js CLI.

## 요약

- 조사 단위: `sources/devswha__patina` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 822 files, 85 directories, depth score 127, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=SKILL.md, docs/agents.md, agents/patina-detector.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | devswha/patina |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | JavaScript |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/devswha__patina](../../../../sources/devswha__patina) |
| Existing report | [reports/korea-trending/repositories/devswha__patina.md](../../../korea-trending/repositories/devswha__patina.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 822 / 85 |
| Max observed depth | 6 |
| Top directories | .claude-plugin, .cursor, .github, agents, artifacts, assets, bin, core, custom, docs, examples, lexicon, packages, patterns, playground, process, profiles, scripts, src, tests |
| Top extensions | .md: 559, .js: 130, .mjs: 38, .json: 27, .txt: 16, .jsonl: 14, .yml: 10, (none): 9, .svg: 6, .html: 3, .sh: 3, .yaml: 2 |
| Source patterns | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 48 |
| docs | documentation surface | 38 |
| src | source boundary | 7 |
| packages/patina-humanizer | packages workspace | 3 |
| examples/e2e | examples workspace | 2 |
| examples/integrations | examples workspace | 2 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| artifacts | top-level component | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| core | top-level component | 1 |
| custom | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| lexicon | top-level component | 1 |
| packages | source boundary | 1 |
| patterns | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | node --test tests/unit/*.test.js tests/e2e/*.test.js |
| test | package.json | test:unit | node --test tests/unit/*.test.js |
| test | package.json | test:e2e | node --test tests/e2e/*.test.js |
| test | package.json | benchmark | node tests/quality/benchmark.mjs |
| utility | package.json | benchmark:perf | node scripts/perf-report.mjs |
| utility | package.json | benchmark:rebaseline:low-fpr | node scripts/rebaseline-low-fpr-report.mjs |
| utility | package.json | benchmark:robustness | node scripts/robustness-report.mjs |
| utility | package.json | benchmark:report | node scripts/benchmark-report.mjs |
| utility | package.json | benchmark:rebaseline | node scripts/rebaseline-summary.mjs |
| utility | package.json | benchmark:rebaseline:report | node scripts/rebaseline-summary.mjs --write |
| utility | package.json | benchmark:register-pilot | node scripts/rebaseline-summary.mjs --input artifacts/rebaseline-2025/human-controls.public.jsonl |
| quality | package.json | quality:adversarial-mps | node scripts/adversarial-mps-report.mjs --check |
| test | package.json | dogfood | node tests/quality/dogfood.mjs |
| utility | package.json | badge | node scripts/badge-json.mjs |
| quality | package.json | lint | npm run lint:syntax && npm run lint:eslint && npm run typecheck && npm run spellcheck |
| build | package.json | release:check | node scripts/check-release-metadata.mjs |
| quality | package.json | check:no-private-assets | node scripts/check-no-private-assets.mjs |
| test | package.json | prepublishOnly | npm run release:check && npm run check:no-private-assets && npm test && npm run benchmark:report && npm run dogfood |
| utility | package.json | benchmark:ranges | node scripts/update-benchmark-ranges.mjs |
| utility | package.json | benchmark:compare | node scripts/detector-comparison.mjs |
| quality | package.json | lint:syntax | node scripts/lint.mjs |
| quality | package.json | lint:eslint | eslint . |
| quality | package.json | typecheck | tsc -p . |
| quality | package.json | spellcheck | cspell "patterns/**/*.md" "lexicon/**/*.md" |
| utility | package.json | docs:api | node scripts/generate-api-docs.mjs |
| utility | package.json | qa:mdx | node scripts/qa/mdx-score.mjs |
| utility | package.json | playground:data | node scripts/generate-playground-data.mjs |
| test | package.json | quality:live | node tests/quality/live-quality.mjs |
| utility | package.json | quality:rewrite-ab | node scripts/rewrite-ab.mjs |
| utility | package.json | benchmark:rebaseline:intake | node scripts/rebaseline-intake.mjs |
| utility | package.json | benchmark:rebaseline:score | node scripts/rebaseline-score.mjs |
| utility | package.json | benchmark:signal-impact | node scripts/signal-impact.mjs |
| utility | package.json | benchmark:rebaseline:web | node scripts/rebaseline-web-collect.mjs |
| utility | package.json | benchmark:katfish-ko | node scripts/katfish-calibration.mjs |
| quality | package.json | lexicon:freshness | node scripts/lexicon-freshness.mjs --check |
| utility | package.json | benchmark:rebaseline:generate-modern | node scripts/rebaseline-generate-modern.mjs |
| build | package.json | benchmark:rebaseline:claim-manifest | node scripts/rebaseline-build-claim-manifest.mjs |
| utility | package.json | benchmark:rebaseline:fp-fixtures | node scripts/fp-fixture-export.mjs |
| entrypoint | package.json bin | patina.js | bin/patina.js |
| entrypoint | package.json bin | patina.js | bin/patina.js |


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
| agentRuntime | [SKILL.md](../../../../sources/devswha__patina/SKILL.md) | agentRuntime signal |
| agentRuntime | [docs/agents.md](../../../../sources/devswha__patina/docs/agents.md) | agentRuntime signal |
| agentRuntime | [agents/patina-detector.md](../../../../sources/devswha__patina/agents/patina-detector.md) | agentRuntime signal |
| agentRuntime | [agents/patina-fidelity-auditor.md](../../../../sources/devswha__patina/agents/patina-fidelity-auditor.md) | agentRuntime signal |
| entrypoints | [src/cli.js](../../../../sources/devswha__patina/src/cli.js) | entrypoints signal |
| entrypoints | [packages/patina-humanizer/bin/patina-humanizer.js](../../../../sources/devswha__patina/packages/patina-humanizer/bin/patina-humanizer.js) | entrypoints signal |
| entrypoints | [bin/patina.js](../../../../sources/devswha__patina/bin/patina.js) | entrypoints signal |
| instruction | [.cursor/rules/patina.md](../../../../sources/devswha__patina/.cursor/rules/patina.md) | instruction signal |
| config | [package.json](../../../../sources/devswha__patina/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/devswha__patina/tsconfig.json) | config signal |
| config | [packages/patina-humanizer/package.json](../../../../sources/devswha__patina/packages/patina-humanizer/package.json) | config signal |
| ci | [.github/workflows/release.yml](../../../../sources/devswha__patina/.github/workflows/release.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [src/cli.js](../../../../sources/devswha__patina/src/cli.js)<br>[packages/patina-humanizer/bin/patina-humanizer.js](../../../../sources/devswha__patina/packages/patina-humanizer/bin/patina-humanizer.js)<br>[bin/patina.js](../../../../sources/devswha__patina/bin/patina.js) |
| agentRuntime | 5 | [SKILL.md](../../../../sources/devswha__patina/SKILL.md)<br>[docs/agents.md](../../../../sources/devswha__patina/docs/agents.md)<br>[agents/patina-detector.md](../../../../sources/devswha__patina/agents/patina-detector.md)<br>[agents/patina-fidelity-auditor.md](../../../../sources/devswha__patina/agents/patina-fidelity-auditor.md)<br>[agents/patina-naturalness-reviewer.md](../../../../sources/devswha__patina/agents/patina-naturalness-reviewer.md) |
| mcp | 0 | not obvious |
| retrieval | 3 | [src/features/index.js](../../../../sources/devswha__patina/src/features/index.js)<br>[src/backends/index.js](../../../../sources/devswha__patina/src/backends/index.js)<br>[playground/index.html](../../../../sources/devswha__patina/playground/index.html) |
| spec | 3 | [DESIGN.md](../../../../sources/devswha__patina/DESIGN.md)<br>[docs/ROADMAP.md](../../../../sources/devswha__patina/docs/ROADMAP.md)<br>[docs/superpowers/specs/2026-04-03-meaning-preservation-design.md](../../../../sources/devswha__patina/docs/superpowers/specs/2026-04-03-meaning-preservation-design.md) |
| eval | 181 | [tests/unit/adversarial-mps-report.test.js](../../../../sources/devswha__patina/tests/unit/adversarial-mps-report.test.js)<br>[tests/unit/adversarial-transforms.test.js](../../../../sources/devswha__patina/tests/unit/adversarial-transforms.test.js)<br>[tests/unit/api.test.js](../../../../sources/devswha__patina/tests/unit/api.test.js)<br>[tests/unit/assets.test.js](../../../../sources/devswha__patina/tests/unit/assets.test.js)<br>[tests/unit/audit-backstop.test.js](../../../../sources/devswha__patina/tests/unit/audit-backstop.test.js)<br>[tests/unit/backend-adapter-noise.test.js](../../../../sources/devswha__patina/tests/unit/backend-adapter-noise.test.js)<br>[tests/unit/backend-auth.test.js](../../../../sources/devswha__patina/tests/unit/backend-auth.test.js)<br>[tests/unit/backend-cancellation.test.js](../../../../sources/devswha__patina/tests/unit/backend-cancellation.test.js) |
| security | 15 | [SECURITY.md](../../../../sources/devswha__patina/SECURITY.md)<br>[tests/unit/audit-backstop.test.js](../../../../sources/devswha__patina/tests/unit/audit-backstop.test.js)<br>[tests/unit/backend-auth.test.js](../../../../sources/devswha__patina/tests/unit/backend-auth.test.js)<br>[tests/unit/security.test.js](../../../../sources/devswha__patina/tests/unit/security.test.js)<br>[tests/fixtures/prompt-snapshots/audit.md](../../../../sources/devswha__patina/tests/fixtures/prompt-snapshots/audit.md)<br>[tests/e2e/auth-login.test.js](../../../../sources/devswha__patina/tests/e2e/auth-login.test.js)<br>[tests/e2e/security.test.js](../../../../sources/devswha__patina/tests/e2e/security.test.js)<br>[src/auth.js](../../../../sources/devswha__patina/src/auth.js) |
| ci | 2 | [.github/workflows/release.yml](../../../../sources/devswha__patina/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/devswha__patina/.github/workflows/test.yml) |
| container | 1 | [Dockerfile](../../../../sources/devswha__patina/Dockerfile) |
| instruction | 2 | [docs/agents.md](../../../../sources/devswha__patina/docs/agents.md)<br>[.cursor/rules/patina.md](../../../../sources/devswha__patina/.cursor/rules/patina.md) |
| docs | 100 | [README_JA.md](../../../../sources/devswha__patina/README_JA.md)<br>[README_KR.md](../../../../sources/devswha__patina/README_KR.md)<br>[README_ZH.md](../../../../sources/devswha__patina/README_ZH.md)<br>[README.md](../../../../sources/devswha__patina/README.md)<br>[tests/quality/README.md](../../../../sources/devswha__patina/tests/quality/README.md)<br>[playground/README.md](../../../../sources/devswha__patina/playground/README.md)<br>[packages/patina-humanizer/README.md](../../../../sources/devswha__patina/packages/patina-humanizer/README.md)<br>[examples/README.md](../../../../sources/devswha__patina/examples/README.md) |
| config | 3 | [package.json](../../../../sources/devswha__patina/package.json)<br>[tsconfig.json](../../../../sources/devswha__patina/tsconfig.json)<br>[packages/patina-humanizer/package.json](../../../../sources/devswha__patina/packages/patina-humanizer/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 181 | [tests/unit/adversarial-mps-report.test.js](../../../../sources/devswha__patina/tests/unit/adversarial-mps-report.test.js)<br>[tests/unit/adversarial-transforms.test.js](../../../../sources/devswha__patina/tests/unit/adversarial-transforms.test.js)<br>[tests/unit/api.test.js](../../../../sources/devswha__patina/tests/unit/api.test.js)<br>[tests/unit/assets.test.js](../../../../sources/devswha__patina/tests/unit/assets.test.js)<br>[tests/unit/audit-backstop.test.js](../../../../sources/devswha__patina/tests/unit/audit-backstop.test.js)<br>[tests/unit/backend-adapter-noise.test.js](../../../../sources/devswha__patina/tests/unit/backend-adapter-noise.test.js) |
| CI workflows | 2 | [.github/workflows/release.yml](../../../../sources/devswha__patina/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/devswha__patina/.github/workflows/test.yml) |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/devswha__patina/Dockerfile) |
| Security / policy | 15 | [SECURITY.md](../../../../sources/devswha__patina/SECURITY.md)<br>[tests/unit/audit-backstop.test.js](../../../../sources/devswha__patina/tests/unit/audit-backstop.test.js)<br>[tests/unit/backend-auth.test.js](../../../../sources/devswha__patina/tests/unit/backend-auth.test.js)<br>[tests/unit/security.test.js](../../../../sources/devswha__patina/tests/unit/security.test.js)<br>[tests/fixtures/prompt-snapshots/audit.md](../../../../sources/devswha__patina/tests/fixtures/prompt-snapshots/audit.md)<br>[tests/e2e/auth-login.test.js](../../../../sources/devswha__patina/tests/e2e/auth-login.test.js) |
| Agent instructions | 2 | [docs/agents.md](../../../../sources/devswha__patina/docs/agents.md)<br>[.cursor/rules/patina.md](../../../../sources/devswha__patina/.cursor/rules/patina.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `SKILL.md`, `docs/agents.md`, `agents/patina-detector.md`.
2. Trace execution through entrypoints: `src/cli.js`, `packages/patina-humanizer/bin/patina-humanizer.js`, `bin/patina.js`.
3. Map agent/tool runtime through: `SKILL.md`, `docs/agents.md`, `agents/patina-detector.md`.
4. Inspect retrieval/memory/indexing through: `src/features/index.js`, `src/backends/index.js`, `playground/index.html`.
5. Verify behavior through test/eval files: `tests/unit/adversarial-mps-report.test.js`, `tests/unit/adversarial-transforms.test.js`, `tests/unit/api.test.js`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Detects and rewrites AI writing patterns in Korean, English, Chinese, and Japanese. Runs as a skill for Claude Code, Cod. 핵심 구조 신호는 JavaScript, package.json, Dockerfile, README.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
