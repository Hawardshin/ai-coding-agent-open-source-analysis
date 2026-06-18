# naver/storybook-addon-preview Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Storybook Addon Preview can show user selected knobs in various framework code in Storybook

## 요약

- 조사 단위: `sources/naver__storybook-addon-preview` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 47 files, 9 directories, depth score 73, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=test/.storybook/main.js, src/index.tsx이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/storybook-addon-preview |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 65 |
| Forks | 9 |
| License | MIT |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/naver__storybook-addon-preview](../../../../sources/naver__storybook-addon-preview) |
| Existing report | [reports/korea-trending/repositories/naver__storybook-addon-preview.md](../../../korea-trending/repositories/naver__storybook-addon-preview.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 47 / 9 |
| Max observed depth | 3 |
| Top directories | images, src, test |
| Top extensions | .ts: 18, .tsx: 8, (none): 6, .json: 5, .js: 3, .lock: 2, .md: 2, .css: 1, .jsx: 1, .png: 1 |
| Source patterns | cli-first, retrieval/vector path, eval/test harness, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 5 |
| images | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| quality | package.json | lint | eslint ./src/ --ext .ts,.tsx |
| build | package.json | build | rm -rf ./dist && npm run build:cjs && npm run build:esm |
| build | package.json | build:cjs | tsc -p tsconfig.json && cpx 'src/css/*.css' 'dist/css' |
| build | package.json | build:esm | tsc -p tsconfig.esm.json && cpx 'src/css/*.css' 'dist/esm/css' |


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
| entrypoints | [test/.storybook/main.js](../../../../sources/naver__storybook-addon-preview/test/.storybook/main.js) | entrypoints signal |
| entrypoints | [src/index.tsx](../../../../sources/naver__storybook-addon-preview/src/index.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/naver__storybook-addon-preview/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__storybook-addon-preview/tsconfig.json) | config signal |
| config | [test/package.json](../../../../sources/naver__storybook-addon-preview/test/package.json) | config signal |
| config | [test/tsconfig.json](../../../../sources/naver__storybook-addon-preview/test/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/naver__storybook-addon-preview/README.md) | docs signal |
| eval | [test/global.d.ts](../../../../sources/naver__storybook-addon-preview/test/global.d.ts) | eval signal |
| eval | [test/yarn.lock](../../../../sources/naver__storybook-addon-preview/test/yarn.lock) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [test/.storybook/main.js](../../../../sources/naver__storybook-addon-preview/test/.storybook/main.js)<br>[src/index.tsx](../../../../sources/naver__storybook-addon-preview/src/index.tsx) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 3 | [src/index.tsx](../../../../sources/naver__storybook-addon-preview/src/index.tsx)<br>[src/props/index.ts](../../../../sources/naver__storybook-addon-preview/src/props/index.ts)<br>[src/codesandbox/index.ts](../../../../sources/naver__storybook-addon-preview/src/codesandbox/index.ts) |
| spec | 0 | not obvious |
| eval | 11 | [test/global.d.ts](../../../../sources/naver__storybook-addon-preview/test/global.d.ts)<br>[test/package.json](../../../../sources/naver__storybook-addon-preview/test/package.json)<br>[test/tsconfig.json](../../../../sources/naver__storybook-addon-preview/test/tsconfig.json)<br>[test/yarn.lock](../../../../sources/naver__storybook-addon-preview/test/yarn.lock)<br>[test/stories/CodeSandbox.stories.tsx](../../../../sources/naver__storybook-addon-preview/test/stories/CodeSandbox.stories.tsx)<br>[test/stories/Controls.stories.tsx](../../../../sources/naver__storybook-addon-preview/test/stories/Controls.stories.tsx)<br>[test/stories/Knobs.stories.tsx](../../../../sources/naver__storybook-addon-preview/test/stories/Knobs.stories.tsx)<br>[test/stories/utils.ts](../../../../sources/naver__storybook-addon-preview/test/stories/utils.ts) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver__storybook-addon-preview/README.md) |
| config | 4 | [package.json](../../../../sources/naver__storybook-addon-preview/package.json)<br>[tsconfig.json](../../../../sources/naver__storybook-addon-preview/tsconfig.json)<br>[test/package.json](../../../../sources/naver__storybook-addon-preview/test/package.json)<br>[test/tsconfig.json](../../../../sources/naver__storybook-addon-preview/test/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 11 | [test/global.d.ts](../../../../sources/naver__storybook-addon-preview/test/global.d.ts)<br>[test/package.json](../../../../sources/naver__storybook-addon-preview/test/package.json)<br>[test/tsconfig.json](../../../../sources/naver__storybook-addon-preview/test/tsconfig.json)<br>[test/yarn.lock](../../../../sources/naver__storybook-addon-preview/test/yarn.lock)<br>[test/stories/CodeSandbox.stories.tsx](../../../../sources/naver__storybook-addon-preview/test/stories/CodeSandbox.stories.tsx)<br>[test/stories/Controls.stories.tsx](../../../../sources/naver__storybook-addon-preview/test/stories/Controls.stories.tsx) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `test/.storybook/main.js`, `src/index.tsx`, `package.json`.
2. Trace execution through entrypoints: `test/.storybook/main.js`, `src/index.tsx`.
3. Inspect retrieval/memory/indexing through: `src/index.tsx`, `src/props/index.ts`, `src/codesandbox/index.ts`.
4. Verify behavior through test/eval files: `test/global.d.ts`, `test/package.json`, `test/tsconfig.json`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Storybook Addon Preview can show user selected knobs in various framework code in Storybook. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, tests이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 ci signal not obvious, needs deeper structural scan입니다.
