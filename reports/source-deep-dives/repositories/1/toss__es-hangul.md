# toss/es-hangul Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

A modern JavaScript library for handling Hangul characters.

## 요약

- 조사 단위: `sources/toss__es-hangul` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 269 files, 61 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.ts이고, 의존성 단서는 next, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | toss/es-hangul |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 1829 |
| Forks | 137 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/toss__es-hangul](../../../../sources/toss__es-hangul) |
| Existing report | [reports/korea-trending/repositories/toss__es-hangul.md](../../../korea-trending/repositories/toss__es-hangul.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 269 / 61 |
| Max observed depth | 7 |
| Top directories | .changeset, .circleci, .github, .scripts, benchmarks, docs, src |
| Top extensions | .ts: 122, .mdx: 64, .json: 20, .tsx: 13, .png: 12, .md: 10, .yml: 8, (none): 6, .js: 3, .svg: 2, .toml: 2, .css: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 106 |
| docs | documentation surface | 48 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | attw | attw --pack |
| build | package.json | build | tsup |
| utility | package.json | changeset:publish | yarn changeset publish |
| utility | package.json | changeset:version | yarn changeset version |
| quality | package.json | packlint | packlint sort -R |
| quality | package.json | publint | publint --strict |
| test | package.json | test | vitest run --coverage --typecheck |
| test | package.json | test:watch | vitest --ui --coverage --typecheck |
| quality | package.json | typecheck | tsc --noEmit |
| serve-dev | package.json | docs:dev | yarn workspace docs dev |
| build | package.json | docs:build | yarn workspace docs build |
| serve-dev | package.json | docs:start | yarn workspace docs start |
| test | package.json | bench | vitest bench |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [src/index.ts](../../../../sources/toss__es-hangul/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/toss__es-hangul/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__es-hangul/tsconfig.json) | config signal |
| config | [docs/package.json](../../../../sources/toss__es-hangul/docs/package.json) | config signal |
| config | [docs/tsconfig.json](../../../../sources/toss__es-hangul/docs/tsconfig.json) | config signal |
| docs | [README-en_us.md](../../../../sources/toss__es-hangul/README-en_us.md) | docs signal |
| docs | [README.md](../../../../sources/toss__es-hangul/README.md) | docs signal |
| docs | [docs/.eslintrc.json](../../../../sources/toss__es-hangul/docs/.eslintrc.json) | docs signal |
| docs | [docs/.gitignore](../../../../sources/toss__es-hangul/docs/.gitignore) | docs signal |
| eval | [src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts) | eval signal |
| eval | [src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts) | eval signal |
| eval | [src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.ts](../../../../sources/toss__es-hangul/src/index.ts) |
| agentRuntime | 1 | [docs/src/hooks/use-is-dark-mode.ts](../../../../sources/toss__es-hangul/docs/src/hooks/use-is-dark-mode.ts) |
| mcp | 0 | not obvious |
| retrieval | 35 | [src/index.ts](../../../../sources/toss__es-hangul/src/index.ts)<br>[src/pronunciation/index.ts](../../../../sources/toss__es-hangul/src/pronunciation/index.ts)<br>[src/pronunciation/standardizePronunciation/index.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/index.ts)<br>[src/pronunciation/standardizePronunciation/rules/index.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/index.ts)<br>[src/pronunciation/romanize/index.ts](../../../../sources/toss__es-hangul/src/pronunciation/romanize/index.ts)<br>[src/number/index.ts](../../../../sources/toss__es-hangul/src/number/index.ts)<br>[src/number/susa/index.ts](../../../../sources/toss__es-hangul/src/number/susa/index.ts)<br>[src/number/seosusa/index.ts](../../../../sources/toss__es-hangul/src/number/seosusa/index.ts) |
| spec | 36 | [src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform16th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform16th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform17th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform17th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform18th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform18th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform19th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform19th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform20th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform20th.spec.ts) |
| eval | 40 | [src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform16th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform16th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform17th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform17th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform18th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform18th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform19th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform19th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform20th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform20th.spec.ts) |
| security | 1 | [SECURITY.md](../../../../sources/toss__es-hangul/SECURITY.md) |
| ci | 3 | [.github/workflows/broken-link-checker.yml](../../../../sources/toss__es-hangul/.github/workflows/broken-link-checker.yml)<br>[.github/workflows/codecov.yml](../../../../sources/toss__es-hangul/.github/workflows/codecov.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__es-hangul/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 121 | [README-en_us.md](../../../../sources/toss__es-hangul/README-en_us.md)<br>[README.md](../../../../sources/toss__es-hangul/README.md)<br>[docs/.eslintrc.json](../../../../sources/toss__es-hangul/docs/.eslintrc.json)<br>[docs/.gitignore](../../../../sources/toss__es-hangul/docs/.gitignore)<br>[docs/CHANGELOG.md](../../../../sources/toss__es-hangul/docs/CHANGELOG.md)<br>[docs/next.config.js](../../../../sources/toss__es-hangul/docs/next.config.js)<br>[docs/package.json](../../../../sources/toss__es-hangul/docs/package.json)<br>[docs/postcss.config.js](../../../../sources/toss__es-hangul/docs/postcss.config.js) |
| config | 5 | [package.json](../../../../sources/toss__es-hangul/package.json)<br>[tsconfig.json](../../../../sources/toss__es-hangul/tsconfig.json)<br>[docs/package.json](../../../../sources/toss__es-hangul/docs/package.json)<br>[docs/tsconfig.json](../../../../sources/toss__es-hangul/docs/tsconfig.json)<br>[benchmarks/package.json](../../../../sources/toss__es-hangul/benchmarks/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 40 | [src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform16th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform16th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform17th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform17th.spec.ts)<br>[src/pronunciation/standardizePronunciation/rules/transform18th.spec.ts](../../../../sources/toss__es-hangul/src/pronunciation/standardizePronunciation/rules/transform18th.spec.ts) |
| CI workflows | 3 | [.github/workflows/broken-link-checker.yml](../../../../sources/toss__es-hangul/.github/workflows/broken-link-checker.yml)<br>[.github/workflows/codecov.yml](../../../../sources/toss__es-hangul/.github/workflows/codecov.yml)<br>[.github/workflows/release.yml](../../../../sources/toss__es-hangul/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/toss__es-hangul/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/index.ts`, `package.json`, `tsconfig.json`.
2. Trace execution through entrypoints: `src/index.ts`.
3. Map agent/tool runtime through: `docs/src/hooks/use-is-dark-mode.ts`.
4. Inspect retrieval/memory/indexing through: `src/index.ts`, `src/pronunciation/index.ts`, `src/pronunciation/standardizePronunciation/index.ts`.
5. Verify behavior through test/eval files: `src/pronunciation/standardizePronunciation/standardizePronunciation.spec.ts`, `src/pronunciation/standardizePronunciation/rules/transform12th.spec.ts`, `src/pronunciation/standardizePronunciation/rules/transform13And14th.spec.ts`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 A modern JavaScript library for handling Hangul characters.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, next, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
