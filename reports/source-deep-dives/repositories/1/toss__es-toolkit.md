# toss/es-toolkit Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

A modern JavaScript utility library that's 2-3 times faster and up to 97% smaller—a major upgrade to lodash.

## 요약

- 조사 단위: `sources/toss__es-toolkit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,746 files, 176 directories, depth score 121, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts, .yarn/sdks/typescript/bin/tsc, .yarn/sdks/typescript/bin/tsserver이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/es-toolkit |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 11148 |
| Forks | 569 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/toss__es-toolkit](../../../../sources/toss__es-toolkit) |
| Existing report | [reports/korea-trending/repositories/toss__es-toolkit.md](../../../korea-trending/repositories/toss__es-toolkit.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3746 / 176 |
| Max observed depth | 6 |
| Top directories | .claude, .claude-plugin, .github, .scripts, .yarn, benchmarks, docs, es-toolkit-plugin, src, tests |
| Top extensions | .md: 2087, .ts: 1569, .json: 15, .mts: 14, (none): 11, .js: 10, .yml: 10, .vue: 8, .png: 7, .cjs: 4, .mjs: 4, .lock: 2 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 93 |
| docs | documentation surface | 53 |
| tests | validation surface | 9 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| es-toolkit-plugin | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | bench | vitest bench |
| build | package.json | build | tsdown && ./.scripts/postbuild.sh |
| quality | package.json | format | prettier --write . |
| build | package.json | gen:bundle-size | node ./.scripts/generate-bundle-size.mjs |
| quality | package.json | lint | eslint --config eslint.config.mjs --concurrency=auto |
| quality | package.json | packlint | packlint sort -R |
| build | package.json | prepack | yarn build |
| test | package.json | test | vitest --coverage --typecheck |
| test | package.json | transform | jscodeshift -t ./.scripts/tests/transform-lodash-test.ts $0 && prettier --write $0 |
| quality | package.json | typecheck | tsc --noEmit |


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
| entrypoints | [src/index.ts](../../../../sources/toss__es-toolkit/src/index.ts) | entrypoints signal |
| entrypoints | [.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__es-toolkit/.yarn/sdks/typescript/bin/tsc) | entrypoints signal |
| entrypoints | [.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__es-toolkit/.yarn/sdks/typescript/bin/tsserver) | entrypoints signal |
| entrypoints | [.yarn/sdks/prettier/bin/prettier.cjs](../../../../sources/toss__es-toolkit/.yarn/sdks/prettier/bin/prettier.cjs) | entrypoints signal |
| config | [package.json](../../../../sources/toss__es-toolkit/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__es-toolkit/tsconfig.json) | config signal |
| config | [docs/package.json](../../../../sources/toss__es-toolkit/docs/package.json) | config signal |
| config | [benchmarks/package.json](../../../../sources/toss__es-toolkit/benchmarks/package.json) | config signal |
| docs | [README-ja_jp.md](../../../../sources/toss__es-toolkit/README-ja_jp.md) | docs signal |
| docs | [README-ko_kr.md](../../../../sources/toss__es-toolkit/README-ko_kr.md) | docs signal |
| docs | [README-zh_hans.md](../../../../sources/toss__es-toolkit/README-zh_hans.md) | docs signal |
| docs | [README.md](../../../../sources/toss__es-toolkit/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 5 | [src/index.ts](../../../../sources/toss__es-toolkit/src/index.ts)<br>[.yarn/sdks/typescript/bin/tsc](../../../../sources/toss__es-toolkit/.yarn/sdks/typescript/bin/tsc)<br>[.yarn/sdks/typescript/bin/tsserver](../../../../sources/toss__es-toolkit/.yarn/sdks/typescript/bin/tsserver)<br>[.yarn/sdks/prettier/bin/prettier.cjs](../../../../sources/toss__es-toolkit/.yarn/sdks/prettier/bin/prettier.cjs)<br>[.yarn/sdks/eslint/bin/eslint.js](../../../../sources/toss__es-toolkit/.yarn/sdks/eslint/bin/eslint.js) |
| agentRuntime | 10 | [AGENTS.md](../../../../sources/toss__es-toolkit/AGENTS.md)<br>[es-toolkit-plugin/skills/recommend/SKILL.md](../../../../sources/toss__es-toolkit/es-toolkit-plugin/skills/recommend/SKILL.md)<br>[es-toolkit-plugin/skills/migrate/SKILL.md](../../../../sources/toss__es-toolkit/es-toolkit-plugin/skills/migrate/SKILL.md)<br>[es-toolkit-plugin/skills/guide/SKILL.md](../../../../sources/toss__es-toolkit/es-toolkit-plugin/skills/guide/SKILL.md)<br>[.claude/skills/release/SKILL.md](../../../../sources/toss__es-toolkit/.claude/skills/release/SKILL.md)<br>[.claude/skills/pr-triage/SKILL.md](../../../../sources/toss__es-toolkit/.claude/skills/pr-triage/SKILL.md)<br>[.claude/skills/pr-review/SKILL.md](../../../../sources/toss__es-toolkit/.claude/skills/pr-review/SKILL.md)<br>[.claude/skills/issue-review/SKILL.md](../../../../sources/toss__es-toolkit/.claude/skills/issue-review/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 38 | [src/index.ts](../../../../sources/toss__es-toolkit/src/index.ts)<br>[src/util/index.ts](../../../../sources/toss__es-toolkit/src/util/index.ts)<br>[src/string/index.ts](../../../../sources/toss__es-toolkit/src/string/index.ts)<br>[src/set/index.ts](../../../../sources/toss__es-toolkit/src/set/index.ts)<br>[src/server/index.ts](../../../../sources/toss__es-toolkit/src/server/index.ts)<br>[src/server/colors/index.ts](../../../../sources/toss__es-toolkit/src/server/colors/index.ts)<br>[src/promise/index.ts](../../../../sources/toss__es-toolkit/src/promise/index.ts)<br>[src/predicate/index.ts](../../../../sources/toss__es-toolkit/src/predicate/index.ts) |
| spec | 586 | [tests/__proto__.spec.ts](../../../../sources/toss__es-toolkit/tests/__proto__.spec.ts)<br>[tests/check-dist.spec.ts](../../../../sources/toss__es-toolkit/tests/check-dist.spec.ts)<br>[src/util/attempt.spec.ts](../../../../sources/toss__es-toolkit/src/util/attempt.spec.ts)<br>[src/util/attemptAsync.spec.ts](../../../../sources/toss__es-toolkit/src/util/attemptAsync.spec.ts)<br>[src/util/invariant.spec.ts](../../../../sources/toss__es-toolkit/src/util/invariant.spec.ts)<br>[src/string/camelCase.spec.ts](../../../../sources/toss__es-toolkit/src/string/camelCase.spec.ts)<br>[src/string/capitalize.spec.ts](../../../../sources/toss__es-toolkit/src/string/capitalize.spec.ts)<br>[src/string/constantCase.spec.ts](../../../../sources/toss__es-toolkit/src/string/constantCase.spec.ts) |
| eval | 877 | [tests/__proto__.spec.ts](../../../../sources/toss__es-toolkit/tests/__proto__.spec.ts)<br>[tests/check-dist.spec.ts](../../../../sources/toss__es-toolkit/tests/check-dist.spec.ts)<br>[tests/utils/createPackageTarball.ts](../../../../sources/toss__es-toolkit/tests/utils/createPackageTarball.ts)<br>[tests/utils/createTmpDir.ts](../../../../sources/toss__es-toolkit/tests/utils/createTmpDir.ts)<br>[tests/utils/parseTar.ts](../../../../sources/toss__es-toolkit/tests/utils/parseTar.ts)<br>[tests/utils/streamToBuffer.ts](../../../../sources/toss__es-toolkit/tests/utils/streamToBuffer.ts)<br>[src/util/attempt.spec.ts](../../../../sources/toss__es-toolkit/src/util/attempt.spec.ts)<br>[src/util/attemptAsync.spec.ts](../../../../sources/toss__es-toolkit/src/util/attemptAsync.spec.ts) |
| security | 1 | [SECURITY.md](../../../../sources/toss__es-toolkit/SECURITY.md) |
| ci | 6 | [.github/workflows/broken-link-checker.yml](../../../../sources/toss__es-toolkit/.github/workflows/broken-link-checker.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__es-toolkit/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/toss__es-toolkit/.github/workflows/codeql.yml)<br>[.github/workflows/deno.yml](../../../../sources/toss__es-toolkit/.github/workflows/deno.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__es-toolkit/.github/workflows/release.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/toss__es-toolkit/.github/workflows/scorecard.yml) |
| container | 0 | not obvious |
| instruction | 3 | [AGENTS.md](../../../../sources/toss__es-toolkit/AGENTS.md)<br>[CLAUDE.md](../../../../sources/toss__es-toolkit/CLAUDE.md)<br>[docs/CLAUDE.md](../../../../sources/toss__es-toolkit/docs/CLAUDE.md) |
| docs | 2133 | [README-ja_jp.md](../../../../sources/toss__es-toolkit/README-ja_jp.md)<br>[README-ko_kr.md](../../../../sources/toss__es-toolkit/README-ko_kr.md)<br>[README-zh_hans.md](../../../../sources/toss__es-toolkit/README-zh_hans.md)<br>[README.md](../../../../sources/toss__es-toolkit/README.md)<br>[es-toolkit-plugin/README.md](../../../../sources/toss__es-toolkit/es-toolkit-plugin/README.md)<br>[docs/.gitignore](../../../../sources/toss__es-toolkit/docs/.gitignore)<br>[docs/ai-integration.md](../../../../sources/toss__es-toolkit/docs/ai-integration.md)<br>[docs/bundle-size.md](../../../../sources/toss__es-toolkit/docs/bundle-size.md) |
| config | 7 | [package.json](../../../../sources/toss__es-toolkit/package.json)<br>[tsconfig.json](../../../../sources/toss__es-toolkit/tsconfig.json)<br>[docs/package.json](../../../../sources/toss__es-toolkit/docs/package.json)<br>[benchmarks/package.json](../../../../sources/toss__es-toolkit/benchmarks/package.json)<br>[.yarn/sdks/typescript/package.json](../../../../sources/toss__es-toolkit/.yarn/sdks/typescript/package.json)<br>[.yarn/sdks/prettier/package.json](../../../../sources/toss__es-toolkit/.yarn/sdks/prettier/package.json)<br>[.yarn/sdks/eslint/package.json](../../../../sources/toss__es-toolkit/.yarn/sdks/eslint/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 877 | [tests/__proto__.spec.ts](../../../../sources/toss__es-toolkit/tests/__proto__.spec.ts)<br>[tests/check-dist.spec.ts](../../../../sources/toss__es-toolkit/tests/check-dist.spec.ts)<br>[tests/utils/createPackageTarball.ts](../../../../sources/toss__es-toolkit/tests/utils/createPackageTarball.ts)<br>[tests/utils/createTmpDir.ts](../../../../sources/toss__es-toolkit/tests/utils/createTmpDir.ts)<br>[tests/utils/parseTar.ts](../../../../sources/toss__es-toolkit/tests/utils/parseTar.ts)<br>[tests/utils/streamToBuffer.ts](../../../../sources/toss__es-toolkit/tests/utils/streamToBuffer.ts) |
| CI workflows | 6 | [.github/workflows/broken-link-checker.yml](../../../../sources/toss__es-toolkit/.github/workflows/broken-link-checker.yml)<br>[.github/workflows/ci.yml](../../../../sources/toss__es-toolkit/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/toss__es-toolkit/.github/workflows/codeql.yml)<br>[.github/workflows/deno.yml](../../../../sources/toss__es-toolkit/.github/workflows/deno.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__es-toolkit/.github/workflows/release.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/toss__es-toolkit/.github/workflows/scorecard.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/toss__es-toolkit/SECURITY.md) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/toss__es-toolkit/AGENTS.md)<br>[CLAUDE.md](../../../../sources/toss__es-toolkit/CLAUDE.md)<br>[docs/CLAUDE.md](../../../../sources/toss__es-toolkit/docs/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/index.ts`, `.yarn/sdks/typescript/bin/tsc`, `.yarn/sdks/typescript/bin/tsserver`.
2. Trace execution through entrypoints: `src/index.ts`, `.yarn/sdks/typescript/bin/tsc`, `.yarn/sdks/typescript/bin/tsserver`.
3. Map agent/tool runtime through: `AGENTS.md`, `es-toolkit-plugin/skills/recommend/SKILL.md`, `es-toolkit-plugin/skills/migrate/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/util/index.ts`, `src/string/index.ts`.
5. Verify behavior through test/eval files: `tests/__proto__.spec.ts`, `tests/check-dist.spec.ts`, `tests/utils/createPackageTarball.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 A modern JavaScript utility library that's 2 3 times faster and up to 97% smaller—a major upgrade to lodash.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
