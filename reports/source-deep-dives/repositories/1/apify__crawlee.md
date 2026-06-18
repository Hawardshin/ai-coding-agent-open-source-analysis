# apify/crawlee Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Crawlee—A web scraping and browser automation library for Node.js to build reliable crawlers. In JavaScript and TypeScript. Extract data for AI, LLMs, RAG, or GPTs. Download HTML, PDF, JPG, PNG, and other files from websites. Works with Puppeteer, Playwright, Cheerio, JSDOM, and raw HTTP. Both headful and headless mode. With proxy rotation.

## 요약

- 조사 단위: `sources/apify__crawlee` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,740 files, 501 directories, depth score 117, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=website/versioned_docs/version-3.17/quick-start/index.mdx, website/versioned_docs/version-3.17/introduction/index.mdx, website/versioned_docs/version-3.17/examples/crawler-plugins/index.mdx이고, 의존성 단서는 express, playwright, puppeteer, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | apify/crawlee |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | TypeScript |
| Stars | 23804 |
| Forks | 1435 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/apify__crawlee](../../../../sources/apify__crawlee) |
| Existing report | [reports/global-trending/repositories/apify__crawlee.md](../../../global-trending/repositories/apify__crawlee.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2740 / 501 |
| Max observed depth | 7 |
| Top directories | .claude, .github, .husky, docs, packages, scripts, test, website |
| Top extensions | .ts: 1167, .mdx: 498, .json: 260, (none): 156, .md: 136, .webp: 126, .mjs: 103, .js: 92, .svg: 54, .txt: 53, .css: 28, .jsx: 14 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/memory-storage | packages workspace | 26 |
| packages/utils | packages workspace | 2 |
| .github | ci surface | 1 |
| docs | documentation surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |
| website | documentation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | postinstall | npx husky install |
| utility | package.json | prepublishOnly | turbo run copy |
| build | package.json | clean | turbo run clean && rimraf .turbo packages/*/.turbo packages/*/*.tsbuildinfo |
| build | package.json | build | turbo run build && node ./scripts/typescript_fixes.mjs |
| build | package.json | ci:build | turbo run build --cache-dir=".turbo" && node ./scripts/typescript_fixes.mjs |
| test | package.json | test | vitest run --silent |
| test | package.json | test:e2e | node test/e2e/run.mjs |
| test | package.json | test:full | cross-env CRAWLEE_DIFFICULT_TESTS=1 vitest run --silent |
| test | package.json | tsc-check-tests | tsc --noEmit --project test/tsconfig.json |
| test | package.json | coverage | vitest --coverage |
| build | package.json | publish:next | lerna publish from-package --contents dist --dist-tag next --force-publish |
| build | package.json | release:next | yarn build && yarn publish:next |
| build | package.json | publish:prod | lerna publish from-package --contents dist --force-publish |
| build | package.json | release:prod | yarn build && yarn publish:prod |
| build | package.json | release:pin-versions | turbo run copy -- -- --pin-versions |
| test | package.json | lint | eslint "packages/**/*.ts" "test/**/*.ts" |
| test | package.json | lint:fix | eslint "packages/**/*.ts" "test/**/*.ts" --fix |
| quality | package.json | format | biome format --write . |
| quality | package.json | format:check | biome format . |
| utility | package.json | prepare | husky |


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
| browserAutomation | playwright, puppeteer |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [website/versioned_docs/version-3.17/quick-start/index.mdx](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/quick-start/index.mdx) | retrieval signal |
| retrieval | [website/versioned_docs/version-3.17/introduction/index.mdx](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/introduction/index.mdx) | retrieval signal |
| retrieval | [website/versioned_docs/version-3.17/examples/crawler-plugins/index.mdx](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/examples/crawler-plugins/index.mdx) | retrieval signal |
| retrieval | [website/versioned_docs/version-3.16/quick-start/index.mdx](../../../../sources/apify__crawlee/website/versioned_docs/version-3.16/quick-start/index.mdx) | retrieval signal |
| entrypoints | [website/blog/2024/09-12-finding-students-accommodations/img/server.webp](../../../../sources/apify__crawlee/website/blog/2024/09-12-finding-students-accommodations/img/server.webp) | entrypoints signal |
| entrypoints | [test/e2e/storage-open-return-storage-object/actor/main.js](../../../../sources/apify__crawlee/test/e2e/storage-open-return-storage-object/actor/main.js) | entrypoints signal |
| entrypoints | [test/e2e/stagehand-concurrent/actor/main.js](../../../../sources/apify__crawlee/test/e2e/stagehand-concurrent/actor/main.js) | entrypoints signal |
| entrypoints | [test/e2e/stagehand-claude/actor/main.js](../../../../sources/apify__crawlee/test/e2e/stagehand-claude/actor/main.js) | entrypoints signal |
| docs | [README.md](../../../../sources/apify__crawlee/README.md) | docs signal |
| docs | [website/.eslintrc.json](../../../../sources/apify__crawlee/website/.eslintrc.json) | docs signal |
| docs | [website/docusaurus.config.js](../../../../sources/apify__crawlee/website/docusaurus.config.js) | docs signal |
| docs | [website/nginx.conf](../../../../sources/apify__crawlee/website/nginx.conf) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 82 | [website/blog/2024/09-12-finding-students-accommodations/img/server.webp](../../../../sources/apify__crawlee/website/blog/2024/09-12-finding-students-accommodations/img/server.webp)<br>[test/e2e/storage-open-return-storage-object/actor/main.js](../../../../sources/apify__crawlee/test/e2e/storage-open-return-storage-object/actor/main.js)<br>[test/e2e/stagehand-concurrent/actor/main.js](../../../../sources/apify__crawlee/test/e2e/stagehand-concurrent/actor/main.js)<br>[test/e2e/stagehand-claude/actor/main.js](../../../../sources/apify__crawlee/test/e2e/stagehand-claude/actor/main.js)<br>[test/e2e/session-rotation/actor/main.js](../../../../sources/apify__crawlee/test/e2e/session-rotation/actor/main.js)<br>[test/e2e/request-skip-navigation/actor/main.js](../../../../sources/apify__crawlee/test/e2e/request-skip-navigation/actor/main.js)<br>[test/e2e/request-queue-zero-concurrency/actor/main.js](../../../../sources/apify__crawlee/test/e2e/request-queue-zero-concurrency/actor/main.js)<br>[test/e2e/request-queue-with-concurrency/actor/main.js](../../../../sources/apify__crawlee/test/e2e/request-queue-with-concurrency/actor/main.js) |
| agentRuntime | 61 | [website/tools/docs-prettier.config.js](../../../../sources/apify__crawlee/website/tools/docs-prettier.config.js)<br>[website/tools/joinLlmsFiles.mjs](../../../../sources/apify__crawlee/website/tools/joinLlmsFiles.mjs)<br>[website/tools/website_gif/chrome-scrape-dark.gif](../../../../sources/apify__crawlee/website/tools/website_gif/chrome-scrape-dark.gif)<br>[website/tools/website_gif/chrome-scrape-dark.mp4](../../../../sources/apify__crawlee/website/tools/website_gif/chrome-scrape-dark.mp4)<br>[website/tools/website_gif/chrome-scrape-light.gif](../../../../sources/apify__crawlee/website/tools/website_gif/chrome-scrape-light.gif)<br>[website/tools/website_gif/chrome-scrape-light.mp4](../../../../sources/apify__crawlee/website/tools/website_gif/chrome-scrape-light.mp4)<br>[website/tools/website_gif/website_gif.mjs](../../../../sources/apify__crawlee/website/tools/website_gif/website_gif.mjs)<br>[website/tools/utils/externalLink.js](../../../../sources/apify__crawlee/website/tools/utils/externalLink.js) |
| mcp | 0 | not obvious |
| retrieval | 162 | [website/versioned_docs/version-3.17/quick-start/index.mdx](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/quick-start/index.mdx)<br>[website/versioned_docs/version-3.17/introduction/index.mdx](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/introduction/index.mdx)<br>[website/versioned_docs/version-3.17/examples/crawler-plugins/index.mdx](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/examples/crawler-plugins/index.mdx)<br>[website/versioned_docs/version-3.16/quick-start/index.mdx](../../../../sources/apify__crawlee/website/versioned_docs/version-3.16/quick-start/index.mdx)<br>[website/versioned_docs/version-3.16/introduction/index.mdx](../../../../sources/apify__crawlee/website/versioned_docs/version-3.16/introduction/index.mdx)<br>[website/versioned_docs/version-3.16/examples/crawler-plugins/index.mdx](../../../../sources/apify__crawlee/website/versioned_docs/version-3.16/examples/crawler-plugins/index.mdx)<br>[website/versioned_docs/version-3.15/quick-start/index.mdx](../../../../sources/apify__crawlee/website/versioned_docs/version-3.15/quick-start/index.mdx)<br>[website/versioned_docs/version-3.15/introduction/index.mdx](../../../../sources/apify__crawlee/website/versioned_docs/version-3.15/introduction/index.mdx) |
| spec | 0 | not obvious |
| eval | 446 | [test/tsconfig.json](../../../../sources/apify__crawlee/test/tsconfig.json)<br>[test/utils/cheerio.test.ts](../../../../sources/apify__crawlee/test/utils/cheerio.test.ts)<br>[test/utils/cpu-infoV2.test.ts](../../../../sources/apify__crawlee/test/utils/cpu-infoV2.test.ts)<br>[test/utils/extract-urls.test.ts](../../../../sources/apify__crawlee/test/utils/extract-urls.test.ts)<br>[test/utils/general.test.ts](../../../../sources/apify__crawlee/test/utils/general.test.ts)<br>[test/utils/iterables.test.ts](../../../../sources/apify__crawlee/test/utils/iterables.test.ts)<br>[test/utils/memory-info.test.ts](../../../../sources/apify__crawlee/test/utils/memory-info.test.ts)<br>[test/utils/memory-infoV2.test.ts](../../../../sources/apify__crawlee/test/utils/memory-infoV2.test.ts) |
| security | 0 | not obvious |
| ci | 8 | [.github/workflows/check-pr-title.yml](../../../../sources/apify__crawlee/.github/workflows/check-pr-title.yml)<br>[.github/workflows/deploy-nginx.yml](../../../../sources/apify__crawlee/.github/workflows/deploy-nginx.yml)<br>[.github/workflows/docs.yml](../../../../sources/apify__crawlee/.github/workflows/docs.yml)<br>[.github/workflows/publish-to-npm.yml](../../../../sources/apify__crawlee/.github/workflows/publish-to-npm.yml)<br>[.github/workflows/release.yml](../../../../sources/apify__crawlee/.github/workflows/release.yml)<br>[.github/workflows/test-ci.yml](../../../../sources/apify__crawlee/.github/workflows/test-ci.yml)<br>[.github/workflows/test-e2e.yml](../../../../sources/apify__crawlee/.github/workflows/test-e2e.yml)<br>[.github/workflows/update_new_issue.yml](../../../../sources/apify__crawlee/.github/workflows/update_new_issue.yml) |
| container | 125 | [website/versioned_docs/version-3.17/deployment/apify_platform_init_exit.ts](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/deployment/apify_platform_init_exit.ts)<br>[website/versioned_docs/version-3.17/deployment/apify_platform_main.ts](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/deployment/apify_platform_main.ts)<br>[website/versioned_docs/version-3.17/deployment/apify_platform.mdx](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/deployment/apify_platform.mdx)<br>[website/versioned_docs/version-3.17/deployment/aws-browsers.md](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/deployment/aws-browsers.md)<br>[website/versioned_docs/version-3.17/deployment/aws-cheerio.md](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/deployment/aws-cheerio.md)<br>[website/versioned_docs/version-3.17/deployment/gcp-browsers.md](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/deployment/gcp-browsers.md)<br>[website/versioned_docs/version-3.17/deployment/gcp-cheerio.md](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/deployment/gcp-cheerio.md)<br>[website/versioned_docs/version-3.16/deployment/apify_platform_init_exit.ts](../../../../sources/apify__crawlee/website/versioned_docs/version-3.16/deployment/apify_platform_init_exit.ts) |
| instruction | 1 | [.claude/CLAUDE.md](../../../../sources/apify__crawlee/.claude/CLAUDE.md) |
| docs | 1929 | [README.md](../../../../sources/apify__crawlee/README.md)<br>[website/.eslintrc.json](../../../../sources/apify__crawlee/website/.eslintrc.json)<br>[website/docusaurus.config.js](../../../../sources/apify__crawlee/website/docusaurus.config.js)<br>[website/nginx.conf](../../../../sources/apify__crawlee/website/nginx.conf)<br>[website/package.json](../../../../sources/apify__crawlee/website/package.json)<br>[website/sidebars.js](../../../../sources/apify__crawlee/website/sidebars.js)<br>[website/versions.json](../../../../sources/apify__crawlee/website/versions.json)<br>[website/yarn.lock](../../../../sources/apify__crawlee/website/yarn.lock) |
| config | 143 | [package.json](../../../../sources/apify__crawlee/package.json)<br>[tsconfig.json](../../../../sources/apify__crawlee/tsconfig.json)<br>[turbo.json](../../../../sources/apify__crawlee/turbo.json)<br>[website/package.json](../../../../sources/apify__crawlee/website/package.json)<br>[website/versioned_docs/version-3.17/package.json](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/package.json)<br>[website/versioned_docs/version-3.17/tsconfig.json](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/tsconfig.json)<br>[website/versioned_docs/version-3.16/package.json](../../../../sources/apify__crawlee/website/versioned_docs/version-3.16/package.json)<br>[website/versioned_docs/version-3.16/tsconfig.json](../../../../sources/apify__crawlee/website/versioned_docs/version-3.16/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 446 | [test/tsconfig.json](../../../../sources/apify__crawlee/test/tsconfig.json)<br>[test/utils/cheerio.test.ts](../../../../sources/apify__crawlee/test/utils/cheerio.test.ts)<br>[test/utils/cpu-infoV2.test.ts](../../../../sources/apify__crawlee/test/utils/cpu-infoV2.test.ts)<br>[test/utils/extract-urls.test.ts](../../../../sources/apify__crawlee/test/utils/extract-urls.test.ts)<br>[test/utils/general.test.ts](../../../../sources/apify__crawlee/test/utils/general.test.ts)<br>[test/utils/iterables.test.ts](../../../../sources/apify__crawlee/test/utils/iterables.test.ts) |
| CI workflows | 8 | [.github/workflows/check-pr-title.yml](../../../../sources/apify__crawlee/.github/workflows/check-pr-title.yml)<br>[.github/workflows/deploy-nginx.yml](../../../../sources/apify__crawlee/.github/workflows/deploy-nginx.yml)<br>[.github/workflows/docs.yml](../../../../sources/apify__crawlee/.github/workflows/docs.yml)<br>[.github/workflows/publish-to-npm.yml](../../../../sources/apify__crawlee/.github/workflows/publish-to-npm.yml)<br>[.github/workflows/release.yml](../../../../sources/apify__crawlee/.github/workflows/release.yml)<br>[.github/workflows/test-ci.yml](../../../../sources/apify__crawlee/.github/workflows/test-ci.yml) |
| Containers / deploy | 125 | [website/versioned_docs/version-3.17/deployment/apify_platform_init_exit.ts](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/deployment/apify_platform_init_exit.ts)<br>[website/versioned_docs/version-3.17/deployment/apify_platform_main.ts](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/deployment/apify_platform_main.ts)<br>[website/versioned_docs/version-3.17/deployment/apify_platform.mdx](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/deployment/apify_platform.mdx)<br>[website/versioned_docs/version-3.17/deployment/aws-browsers.md](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/deployment/aws-browsers.md)<br>[website/versioned_docs/version-3.17/deployment/aws-cheerio.md](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/deployment/aws-cheerio.md)<br>[website/versioned_docs/version-3.17/deployment/gcp-browsers.md](../../../../sources/apify__crawlee/website/versioned_docs/version-3.17/deployment/gcp-browsers.md) |
| Security / policy | 0 | not obvious |
| Agent instructions | 1 | [.claude/CLAUDE.md](../../../../sources/apify__crawlee/.claude/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `website/versioned_docs/version-3.17/quick-start/index.mdx`, `website/versioned_docs/version-3.17/introduction/index.mdx`, `website/versioned_docs/version-3.17/examples/crawler-plugins/index.mdx`.
2. Trace execution through entrypoints: `website/blog/2024/09-12-finding-students-accommodations/img/server.webp`, `test/e2e/storage-open-return-storage-object/actor/main.js`, `test/e2e/stagehand-concurrent/actor/main.js`.
3. Map agent/tool runtime through: `website/tools/docs-prettier.config.js`, `website/tools/joinLlmsFiles.mjs`, `website/tools/website_gif/chrome-scrape-dark.gif`.
4. Inspect retrieval/memory/indexing through: `website/versioned_docs/version-3.17/quick-start/index.mdx`, `website/versioned_docs/version-3.17/introduction/index.mdx`, `website/versioned_docs/version-3.17/examples/crawler-plugins/index.mdx`.
5. Verify behavior through test/eval files: `test/tsconfig.json`, `test/utils/cheerio.test.ts`, `test/utils/cpu-infoV2.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Crawlee—A web scraping and browser automation library for Node.js to build reliable crawlers. In JavaScript and TypeScri. 핵심 구조 신호는 TypeScript, package.json, README.md, playwright, puppeteer, tests이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
