# line/line-bot-sdk-nodejs Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

LINE Messaging API SDK for Node.js

## 요약

- 조사 단위: `sources/line__line-bot-sdk-nodejs` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 571 files, 108 directories, depth score 108, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 config=package.json, tsconfig.json, test/consumer/fixtures/js-esm/package.json이고, 의존성 단서는 express, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | line/line-bot-sdk-nodejs |
| Topic | Developer Productivity and DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | TypeScript |
| Stars | 1067 |
| Forks | 429 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/line__line-bot-sdk-nodejs](../../../../sources/line__line-bot-sdk-nodejs) |
| Existing report | [reports/korea-trending/repositories/line__line-bot-sdk-nodejs.md](../../../korea-trending/repositories/line__line-bot-sdk-nodejs.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 571 / 108 |
| Max observed depth | 9 |
| Top directories | .github, docs, examples, generator, lib, line-openapi, scripts, test |
| Top extensions | .ts: 412, (none): 48, .json: 28, .md: 22, .mjs: 14, .pebble: 10, .yml: 10, .java: 5, .cjs: 4, .js: 4, .png: 3, .jpg: 2 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 16 |
| lib | source boundary | 14 |
| examples/echo-bot-ts-cjs | examples workspace | 4 |
| examples/echo-bot-ts-esm | examples workspace | 4 |
| examples/echo-bot | examples workspace | 3 |
| examples/echo-bot-esm | examples workspace | 3 |
| examples/kitchensink | examples workspace | 3 |
| examples/rich-menu | examples workspace | 3 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| generator | top-level component | 1 |
| line-openapi | source boundary | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | test | npm run format && npm run typecheck && npm run build && vitest run |
| quality | package.json | typecheck | tsc -p tsconfig.json |
| test | package.json | covtest | vitest run --coverage |
| test | package.json | prettier | prettier "{lib,test,scripts,examples}/**/*.{ts,js,cjs,mjs}" |
| quality | package.json | format | npm run prettier -- --write |
| quality | package.json | format:check | npm run prettier -- -l |
| build | package.json | clean | rm -rf dist/* |
| build | package.json | build | npm run format:check && npm run clean && tsc -p ./tsconfig.esm.json && tsc -p ./tsconfig.cjs.json && echo "{\"type\": \"commonjs\"}" > dist/cjs/package.json |
| quality | package.json | check:publint | publint |
| quality | package.json | pack:check | npm pack |
| quality | package.json | check:attw | attw $(npm pack) |
| serve-dev | package.json | docs | vitepress dev docs |
| serve-dev | package.json | docs:build | vitepress build docs |
| serve-dev | package.json | docs:preview | vitepress preview docs |
| quality | package.json | apidocs | typedoc --tsconfig ./tsconfig.esm.json --excludePrivate --plugin typedoc-plugin-markdown --out docs/apidocs lib/index.ts |
| build | package.json | release | npm run build && npm publish --provenance --access public |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| config | [package.json](../../../../sources/line__line-bot-sdk-nodejs/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/line__line-bot-sdk-nodejs/tsconfig.json) | config signal |
| config | [test/consumer/fixtures/js-esm/package.json](../../../../sources/line__line-bot-sdk-nodejs/test/consumer/fixtures/js-esm/package.json) | config signal |
| config | [test/consumer/fixtures/js-cjs/package.json](../../../../sources/line__line-bot-sdk-nodejs/test/consumer/fixtures/js-cjs/package.json) | config signal |
| ci | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/check-eol-newrelease.yml) | ci signal |
| ci | [.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/close-issue.yml) | ci signal |
| ci | [.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/create-draft-release.yml) | ci signal |
| ci | [.github/workflows/deploy-doc.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/deploy-doc.yml) | ci signal |
| docs | [README.md](../../../../sources/line__line-bot-sdk-nodejs/README.md) | docs signal |
| docs | [generator/README.md](../../../../sources/line__line-bot-sdk-nodejs/generator/README.md) | docs signal |
| docs | [examples/rich-menu/README.md](../../../../sources/line__line-bot-sdk-nodejs/examples/rich-menu/README.md) | docs signal |
| docs | [examples/kitchensink/README.md](../../../../sources/line__line-bot-sdk-nodejs/examples/kitchensink/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 2 | [test/consumer/runner/index.ts](../../../../sources/line__line-bot-sdk-nodejs/test/consumer/runner/index.ts)<br>[test/consumer/runner/ts-lane.ts](../../../../sources/line__line-bot-sdk-nodejs/test/consumer/runner/ts-lane.ts) |
| mcp | 0 | not obvious |
| retrieval | 9 | [test/consumer/runner/index.ts](../../../../sources/line__line-bot-sdk-nodejs/test/consumer/runner/index.ts)<br>[scripts/line-bot-client-generator/index-aliases.mjs](../../../../sources/line__line-bot-sdk-nodejs/scripts/line-bot-client-generator/index-aliases.mjs)<br>[lib/index.ts](../../../../sources/line__line-bot-sdk-nodejs/lib/index.ts)<br>[examples/rich-menu/index.js](../../../../sources/line__line-bot-sdk-nodejs/examples/rich-menu/index.js)<br>[examples/kitchensink/index.js](../../../../sources/line__line-bot-sdk-nodejs/examples/kitchensink/index.js)<br>[examples/echo-bot-ts-esm/index.ts](../../../../sources/line__line-bot-sdk-nodejs/examples/echo-bot-ts-esm/index.ts)<br>[examples/echo-bot-ts-cjs/index.ts](../../../../sources/line__line-bot-sdk-nodejs/examples/echo-bot-ts-cjs/index.ts)<br>[examples/echo-bot-esm/index.js](../../../../sources/line__line-bot-sdk-nodejs/examples/echo-bot-esm/index.js) |
| spec | 27 | [test/headers.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/headers.spec.ts)<br>[test/http-fetch.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/http-fetch.spec.ts)<br>[test/libs-channelAccessToken.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/libs-channelAccessToken.spec.ts)<br>[test/libs-manageAudience.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/libs-manageAudience.spec.ts)<br>[test/libs-messagingApi.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/libs-messagingApi.spec.ts)<br>[test/libs-shop.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/libs-shop.spec.ts)<br>[test/libs-webhook.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/libs-webhook.spec.ts)<br>[test/line-bot-client.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/line-bot-client.spec.ts) |
| eval | 51 | [test/headers.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/headers.spec.ts)<br>[test/http-fetch.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/http-fetch.spec.ts)<br>[test/libs-channelAccessToken.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/libs-channelAccessToken.spec.ts)<br>[test/libs-manageAudience.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/libs-manageAudience.spec.ts)<br>[test/libs-messagingApi.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/libs-messagingApi.spec.ts)<br>[test/libs-shop.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/libs-shop.spec.ts)<br>[test/libs-webhook.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/libs-webhook.spec.ts)<br>[test/line-bot-client.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/line-bot-client.spec.ts) |
| security | 2 | [scripts/npm-audit.sh](../../../../sources/line__line-bot-sdk-nodejs/scripts/npm-audit.sh)<br>[.github/workflows/npm-audit.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/npm-audit.yml) |
| ci | 9 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/create-draft-release.yml)<br>[.github/workflows/deploy-doc.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/deploy-doc.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/generate-code.yml)<br>[.github/workflows/issue-label.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/issue-label.yml)<br>[.github/workflows/npm-audit.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/npm-audit.yml)<br>[.github/workflows/release.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 22 | [README.md](../../../../sources/line__line-bot-sdk-nodejs/README.md)<br>[generator/README.md](../../../../sources/line__line-bot-sdk-nodejs/generator/README.md)<br>[examples/rich-menu/README.md](../../../../sources/line__line-bot-sdk-nodejs/examples/rich-menu/README.md)<br>[examples/kitchensink/README.md](../../../../sources/line__line-bot-sdk-nodejs/examples/kitchensink/README.md)<br>[examples/echo-bot-ts-esm/README.md](../../../../sources/line__line-bot-sdk-nodejs/examples/echo-bot-ts-esm/README.md)<br>[examples/echo-bot-ts-cjs/README.md](../../../../sources/line__line-bot-sdk-nodejs/examples/echo-bot-ts-cjs/README.md)<br>[examples/echo-bot-esm/README.md](../../../../sources/line__line-bot-sdk-nodejs/examples/echo-bot-esm/README.md)<br>[examples/echo-bot/README.md](../../../../sources/line__line-bot-sdk-nodejs/examples/echo-bot/README.md) |
| config | 12 | [package.json](../../../../sources/line__line-bot-sdk-nodejs/package.json)<br>[tsconfig.json](../../../../sources/line__line-bot-sdk-nodejs/tsconfig.json)<br>[test/consumer/fixtures/js-esm/package.json](../../../../sources/line__line-bot-sdk-nodejs/test/consumer/fixtures/js-esm/package.json)<br>[test/consumer/fixtures/js-cjs/package.json](../../../../sources/line__line-bot-sdk-nodejs/test/consumer/fixtures/js-cjs/package.json)<br>[examples/rich-menu/package.json](../../../../sources/line__line-bot-sdk-nodejs/examples/rich-menu/package.json)<br>[examples/kitchensink/package.json](../../../../sources/line__line-bot-sdk-nodejs/examples/kitchensink/package.json)<br>[examples/echo-bot-ts-esm/package.json](../../../../sources/line__line-bot-sdk-nodejs/examples/echo-bot-ts-esm/package.json)<br>[examples/echo-bot-ts-esm/tsconfig.json](../../../../sources/line__line-bot-sdk-nodejs/examples/echo-bot-ts-esm/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 51 | [test/headers.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/headers.spec.ts)<br>[test/http-fetch.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/http-fetch.spec.ts)<br>[test/libs-channelAccessToken.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/libs-channelAccessToken.spec.ts)<br>[test/libs-manageAudience.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/libs-manageAudience.spec.ts)<br>[test/libs-messagingApi.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/libs-messagingApi.spec.ts)<br>[test/libs-shop.spec.ts](../../../../sources/line__line-bot-sdk-nodejs/test/libs-shop.spec.ts) |
| CI workflows | 9 | [.github/workflows/check-eol-newrelease.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/check-eol-newrelease.yml)<br>[.github/workflows/close-issue.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/close-issue.yml)<br>[.github/workflows/create-draft-release.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/create-draft-release.yml)<br>[.github/workflows/deploy-doc.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/deploy-doc.yml)<br>[.github/workflows/generate-code.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/generate-code.yml)<br>[.github/workflows/issue-label.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/issue-label.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [scripts/npm-audit.sh](../../../../sources/line__line-bot-sdk-nodejs/scripts/npm-audit.sh)<br>[.github/workflows/npm-audit.yml](../../../../sources/line__line-bot-sdk-nodejs/.github/workflows/npm-audit.yml) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `package.json`, `tsconfig.json`, `test/consumer/fixtures/js-esm/package.json`.
2. Map agent/tool runtime through: `test/consumer/runner/index.ts`, `test/consumer/runner/ts-lane.ts`.
3. Inspect retrieval/memory/indexing through: `test/consumer/runner/index.ts`, `scripts/line-bot-client-generator/index-aliases.mjs`, `lib/index.ts`.
4. Verify behavior through test/eval files: `test/headers.spec.ts`, `test/http-fetch.spec.ts`, `test/libs-channelAccessToken.spec.ts`.

## Existing Repository Insight

개발 생산성/DevTools 관점에서 LINE Messaging API SDK for Node.js. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 needs deeper structural scan입니다.
