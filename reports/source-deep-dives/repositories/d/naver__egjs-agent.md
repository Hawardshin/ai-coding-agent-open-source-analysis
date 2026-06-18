# naver/egjs-agent Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Extracts browser and operating system information from the user agent string or user agent object(userAgentData).

## 요약

- 조사 단위: `sources/naver__egjs-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 66 files, 19 directories, depth score 76, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/agent.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | naver/egjs-agent |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 125 |
| Forks | 17 |
| License | MIT |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/naver__egjs-agent](../../../../sources/naver__egjs-agent) |
| Existing report | [reports/korea-trending/repositories/naver__egjs-agent.md](../../../korea-trending/repositories/naver__egjs-agent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 66 / 19 |
| Max observed depth | 4 |
| Top directories | .github, config, demo, src, test |
| Top extensions | .ts: 12, .html: 9, .js: 8, .md: 8, (none): 7, .css: 6, .svg: 6, .json: 5, .yml: 4, .template: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 4 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| demo | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | start | rollup -c -w |
| build | package.json | build | rollup -c && npm run declaration && print-sizes ./dist |
| quality | package.json | declaration | rm -rf declaration && tsc -p tsconfig.declaration.json |
| test | package.json | test | jest --watchAll |
| test | package.json | test:node | npm run build && node ./test/node/node.js |
| utility | package.json | jsdoc | rm -rf ./doc && jsdoc -c jsdoc.json |
| test | package.json | coverage | npm run test:node && jest --coverage && print-coveralls --sort=desc |
| test | package.json | coveralls | cat ./coverage/lcov.info \| coveralls |
| quality | package.json | lint | eslint . --ext .ts |
| test | package.json | demo:start | npm run demo:prebuild-latest && npm run demo:updateVersion && jekyll serve --host=0.0.0.0 -s demo |
| build | package.json | demo:build | npm run demo:updateVersion && jekyll build -s demo |
| build | package.json | demo:prebuild-version | cpx 'dist/**/*' demo/release/$npm_package_version/dist --clean && cpx 'doc/**/*' demo/release/$npm_package_version/doc --clean |
| test | package.json | demo:prebuild-latest | cpx 'dist/**/*' demo/release/latest/dist --clean && cpx 'doc/**/*' demo/release/latest/doc --clean |
| utility | package.json | demo:updateVersion | echo $npm_package_version > demo/_data/version.yml |
| test | package.json | demo:deploy | npm run build && npm run jsdoc && npm run demo:prebuild-version && npm run demo:prebuild-latest && npm run demo:build && gh-pages -d demo/_site --add --remote upstream |
| build | package.json | release | release-helper upstream |
| quality | package.json | prepush | npm run lint |
| utility | package.json | commitmsg | node config/validate-commit-msg.js |


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
| agentRuntime | [src/agent.ts](../../../../sources/naver__egjs-agent/src/agent.ts) | agentRuntime signal |
| entrypoints | [src/index.umd.ts](../../../../sources/naver__egjs-agent/src/index.umd.ts) | entrypoints signal |
| config | [package.json](../../../../sources/naver__egjs-agent/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/naver__egjs-agent/tsconfig.json) | config signal |
| eval | [test/unit/userAgent.spec.ts](../../../../sources/naver__egjs-agent/test/unit/userAgent.spec.ts) | eval support |
| eval | [test/unit/userAgentConsts.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentConsts.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.umd.ts](../../../../sources/naver__egjs-agent/src/index.umd.ts) |
| agentRuntime | 1 | [src/agent.ts](../../../../sources/naver__egjs-agent/src/agent.ts) |
| mcp | 0 | not obvious |
| retrieval | 3 | [test/manual/index.html](../../../../sources/naver__egjs-agent/test/manual/index.html)<br>[src/index.umd.ts](../../../../sources/naver__egjs-agent/src/index.umd.ts)<br>[demo/index.md](../../../../sources/naver__egjs-agent/demo/index.md) |
| spec | 2 | [test/unit/userAgent.spec.ts](../../../../sources/naver__egjs-agent/test/unit/userAgent.spec.ts)<br>[test/unit/userAgentData.spec.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentData.spec.ts) |
| eval | 6 | [test/unit/userAgent.spec.ts](../../../../sources/naver__egjs-agent/test/unit/userAgent.spec.ts)<br>[test/unit/userAgentConsts.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentConsts.ts)<br>[test/unit/userAgentData.spec.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentData.spec.ts)<br>[test/unit/userAgentDataConsts.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentDataConsts.ts)<br>[test/node/node.js](../../../../sources/naver__egjs-agent/test/node/node.js)<br>[test/manual/index.html](../../../../sources/naver__egjs-agent/test/manual/index.html) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/naver__egjs-agent/README.md) |
| config | 2 | [package.json](../../../../sources/naver__egjs-agent/package.json)<br>[tsconfig.json](../../../../sources/naver__egjs-agent/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 6 | [test/unit/userAgent.spec.ts](../../../../sources/naver__egjs-agent/test/unit/userAgent.spec.ts)<br>[test/unit/userAgentConsts.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentConsts.ts)<br>[test/unit/userAgentData.spec.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentData.spec.ts)<br>[test/unit/userAgentDataConsts.ts](../../../../sources/naver__egjs-agent/test/unit/userAgentDataConsts.ts)<br>[test/node/node.js](../../../../sources/naver__egjs-agent/test/node/node.js)<br>[test/manual/index.html](../../../../sources/naver__egjs-agent/test/manual/index.html) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `src/agent.ts`, `src/index.umd.ts`, `package.json`.
2. Trace execution through entrypoints: `src/index.umd.ts`.
3. Map agent/tool runtime through: `src/agent.ts`.
4. Inspect retrieval/memory/indexing through: `test/manual/index.html`, `src/index.umd.ts`, `demo/index.md`.
5. Verify behavior through test/eval files: `test/unit/userAgent.spec.ts`, `test/unit/userAgentConsts.ts`, `test/unit/userAgentData.spec.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Extracts browser and operating system information from the user agent string or user agent object userAgentData .. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
