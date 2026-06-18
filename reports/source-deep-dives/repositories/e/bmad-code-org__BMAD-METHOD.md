# bmad-code-org/BMAD-METHOD Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 570 files, 158 directories.

## 요약

- 조사 단위: `sources/bmad-code-org__BMAD-METHOD` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 569 files, 157 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, website/public/workflow-map-diagram-fr.html, website/public/workflow-map-diagram.html이고, 의존성 단서는 commander, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | bmad-code-org/BMAD-METHOD |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | JavaScript |
| Stars | 49285 |
| Forks | 5702 |
| License | Other |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/bmad-code-org__BMAD-METHOD](../../../../sources/bmad-code-org__BMAD-METHOD) |
| Existing report | [reports/clone-structures/bmad-code-org__BMAD-METHOD.md](../../../clone-structures/bmad-code-org__BMAD-METHOD.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 569 / 157 |
| Max observed depth | 7 |
| Top directories | .augment, .claude-plugin, .github, .husky, docs, evals, src, test, tools, web-bundles, website |
| Top extensions | .md: 381, .js: 51, .toml: 35, .yaml: 19, .csv: 14, .py: 13, .json: 12, (none): 8, .mjs: 7, .png: 6, .html: 5, .mdx: 5 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 55 |
| docs | documentation surface | 16 |
| .github | ci surface | 1 |
| evals | top-level component | 1 |
| test | validation surface | 1 |
| tools | top-level component | 1 |
| web-bundles | source boundary | 1 |
| website | documentation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | bmad:install | node tools/installer/bmad-cli.js install |
| utility | package.json | bmad:uninstall | node tools/installer/bmad-cli.js uninstall |
| build | package.json | docs:build | node tools/build-docs.mjs |
| serve-dev | package.json | docs:dev | astro dev --root website |
| utility | package.json | docs:fix-links | node tools/fix-doc-links.js |
| utility | package.json | docs:preview | astro preview --root website |
| utility | package.json | docs:validate-links | node tools/validate-doc-links.js |
| utility | package.json | docs:validate-sidebar | node tools/validate-sidebar-order.js |
| quality | package.json | format:check | prettier --check "**/*.{js,cjs,mjs,json,yaml}" |
| quality | package.json | format:fix | prettier --write "**/*.{js,cjs,mjs,json,yaml}" |
| quality | package.json | format:fix:staged | prettier --write |
| utility | package.json | install:bmad | node tools/installer/bmad-cli.js install |
| quality | package.json | lint | eslint . --ext .js,.cjs,.mjs,.yaml --max-warnings=0 |
| quality | package.json | lint:fix | eslint . --ext .js,.cjs,.mjs,.yaml --fix |
| quality | package.json | lint:md | markdownlint-cli2 "**/*.md" |
| serve-dev | package.json | prepare | command -v husky >/dev/null 2>&1 && husky \|\| exit 0 |
| test | package.json | quality | npm run format:check && npm run lint && npm run lint:md && npm run docs:build && npm run test:install && npm run test:urls && npm run validate:refs && npm run validate:skills && npm run docs:validate-sidebar |
| build | package.json | rebundle | node tools/installer/bundlers/bundle-web.js rebundle |
| test | package.json | test | npm run test:refs && npm run test:install && npm run test:urls && npm run test:channels && npm run lint && npm run lint:md && npm run format:check |
| test | package.json | test:channels | node test/test-installer-channels.js |
| test | package.json | test:install | node test/test-installation-components.js |
| test | package.json | test:refs | node test/test-file-refs-csv.js |
| test | package.json | test:urls | node test/test-parse-source-urls.js |
| utility | package.json | validate:refs | node tools/validate-file-refs.js --strict |
| utility | package.json | validate:skills | node tools/validate-skills.js --strict |
| entrypoint | package.json bin | bmad-cli.js | tools/installer/bmad-cli.js |
| entrypoint | package.json bin | bmad-cli.js | tools/installer/bmad-cli.js |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | commander |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/bmad-code-org__BMAD-METHOD/AGENTS.md) | agentRuntime signal |
| agentRuntime | [website/public/workflow-map-diagram-fr.html](../../../../sources/bmad-code-org__BMAD-METHOD/website/public/workflow-map-diagram-fr.html) | agentRuntime signal |
| agentRuntime | [website/public/workflow-map-diagram.html](../../../../sources/bmad-code-org__BMAD-METHOD/website/public/workflow-map-diagram.html) | agentRuntime signal |
| agentRuntime | [web-bundles/ux-coach/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/ux-coach/SKILL.md) | agentRuntime signal |
| instruction | [docs/zh-cn/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/zh-cn/reference/agents.md) | instruction signal |
| instruction | [docs/vi-vn/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/vi-vn/reference/agents.md) | instruction signal |
| instruction | [docs/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/reference/agents.md) | instruction signal |
| config | [package.json](../../../../sources/bmad-code-org__BMAD-METHOD/package.json) | config signal |
| ci | [.github/workflows/coderabbit-review.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/coderabbit-review.yaml) | ci support |
| ci | [.github/workflows/discord.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/discord.yaml) | ci support |
| eval | [test/README.md](../../../../sources/bmad-code-org__BMAD-METHOD/test/README.md) | eval support |
| eval | [test/test-file-refs-csv.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-file-refs-csv.js) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 120 | [AGENTS.md](../../../../sources/bmad-code-org__BMAD-METHOD/AGENTS.md)<br>[website/public/workflow-map-diagram-fr.html](../../../../sources/bmad-code-org__BMAD-METHOD/website/public/workflow-map-diagram-fr.html)<br>[website/public/workflow-map-diagram.html](../../../../sources/bmad-code-org__BMAD-METHOD/website/public/workflow-map-diagram.html)<br>[web-bundles/ux-coach/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/ux-coach/SKILL.md)<br>[web-bundles/product-brief-coach/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/product-brief-coach/SKILL.md)<br>[web-bundles/prfaq-coach/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/prfaq-coach/SKILL.md)<br>[web-bundles/prd-coach/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/prd-coach/SKILL.md)<br>[web-bundles/market-and-industry-research/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/market-and-industry-research/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 7 | [src/core-skills/bmad-index-docs/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/src/core-skills/bmad-index-docs/SKILL.md)<br>[src/bmm-skills/1-analysis/bmad-document-project/templates/index-template.md](../../../../sources/bmad-code-org__BMAD-METHOD/src/bmm-skills/1-analysis/bmad-document-project/templates/index-template.md)<br>[docs/index.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/index.md)<br>[docs/zh-cn/index.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/zh-cn/index.md)<br>[docs/vi-vn/index.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/vi-vn/index.md)<br>[docs/fr/index.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/fr/index.md)<br>[docs/cs/index.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/cs/index.md) |
| spec | 45 | [web-bundles/prd-coach/INSTRUCTIONS.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/prd-coach/INSTRUCTIONS.md)<br>[web-bundles/prd-coach/prd-template.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/prd-coach/prd-template.md)<br>[web-bundles/prd-coach/prd-validation-checklist.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/prd-coach/prd-validation-checklist.md)<br>[web-bundles/prd-coach/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/prd-coach/SKILL.md)<br>[src/core-skills/bmad-spec/customize.toml](../../../../sources/bmad-code-org__BMAD-METHOD/src/core-skills/bmad-spec/customize.toml)<br>[src/core-skills/bmad-spec/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/src/core-skills/bmad-spec/SKILL.md)<br>[src/core-skills/bmad-spec/assets/headless-schemas.md](../../../../sources/bmad-code-org__BMAD-METHOD/src/core-skills/bmad-spec/assets/headless-schemas.md)<br>[src/core-skills/bmad-spec/assets/spec-template.md](../../../../sources/bmad-code-org__BMAD-METHOD/src/core-skills/bmad-spec/assets/spec-template.md) |
| eval | 34 | [test/README.md](../../../../sources/bmad-code-org__BMAD-METHOD/test/README.md)<br>[test/test-file-refs-csv.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-file-refs-csv.js)<br>[test/test-installation-components.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-installation-components.js)<br>[test/test-installer-channels.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-installer-channels.js)<br>[test/test-parse-source-urls.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-parse-source-urls.js)<br>[test/test-rehype-plugins.mjs](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-rehype-plugins.mjs)<br>[test/test-workflow-path-regex.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-workflow-path-regex.js)<br>[test/fixtures/file-refs-csv/valid/bmm-style.csv](../../../../sources/bmad-code-org__BMAD-METHOD/test/fixtures/file-refs-csv/valid/bmm-style.csv) |
| security | 1 | [SECURITY.md](../../../../sources/bmad-code-org__BMAD-METHOD/SECURITY.md) |
| ci | 5 | [.github/workflows/coderabbit-review.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/coderabbit-review.yaml)<br>[.github/workflows/discord.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/discord.yaml)<br>[.github/workflows/docs.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/docs.yaml)<br>[.github/workflows/publish.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/publish.yaml)<br>[.github/workflows/quality.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/quality.yaml) |
| container | 0 | not obvious |
| instruction | 6 | [AGENTS.md](../../../../sources/bmad-code-org__BMAD-METHOD/AGENTS.md)<br>[docs/zh-cn/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/zh-cn/reference/agents.md)<br>[docs/vi-vn/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/vi-vn/reference/agents.md)<br>[docs/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/reference/agents.md)<br>[docs/fr/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/fr/reference/agents.md)<br>[docs/cs/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/cs/reference/agents.md) |
| docs | 208 | [README_CN.md](../../../../sources/bmad-code-org__BMAD-METHOD/README_CN.md)<br>[README_VN.md](../../../../sources/bmad-code-org__BMAD-METHOD/README_VN.md)<br>[README.md](../../../../sources/bmad-code-org__BMAD-METHOD/README.md)<br>[website/astro.config.mjs](../../../../sources/bmad-code-org__BMAD-METHOD/website/astro.config.mjs)<br>[website/README.md](../../../../sources/bmad-code-org__BMAD-METHOD/website/README.md)<br>[website/src/rehype-base-paths.js](../../../../sources/bmad-code-org__BMAD-METHOD/website/src/rehype-base-paths.js)<br>[website/src/rehype-markdown-links.js](../../../../sources/bmad-code-org__BMAD-METHOD/website/src/rehype-markdown-links.js)<br>[website/src/styles/custom.css](../../../../sources/bmad-code-org__BMAD-METHOD/website/src/styles/custom.css) |
| config | 1 | [package.json](../../../../sources/bmad-code-org__BMAD-METHOD/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 34 | [test/README.md](../../../../sources/bmad-code-org__BMAD-METHOD/test/README.md)<br>[test/test-file-refs-csv.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-file-refs-csv.js)<br>[test/test-installation-components.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-installation-components.js)<br>[test/test-installer-channels.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-installer-channels.js)<br>[test/test-parse-source-urls.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-parse-source-urls.js)<br>[test/test-rehype-plugins.mjs](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-rehype-plugins.mjs) |
| CI workflows | 5 | [.github/workflows/coderabbit-review.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/coderabbit-review.yaml)<br>[.github/workflows/discord.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/discord.yaml)<br>[.github/workflows/docs.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/docs.yaml)<br>[.github/workflows/publish.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/publish.yaml)<br>[.github/workflows/quality.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/quality.yaml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/bmad-code-org__BMAD-METHOD/SECURITY.md) |
| Agent instructions | 6 | [AGENTS.md](../../../../sources/bmad-code-org__BMAD-METHOD/AGENTS.md)<br>[docs/zh-cn/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/zh-cn/reference/agents.md)<br>[docs/vi-vn/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/vi-vn/reference/agents.md)<br>[docs/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/reference/agents.md)<br>[docs/fr/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/fr/reference/agents.md)<br>[docs/cs/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/cs/reference/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `AGENTS.md`, `website/public/workflow-map-diagram-fr.html`, `website/public/workflow-map-diagram.html`.
2. Map agent/tool runtime through: `AGENTS.md`, `website/public/workflow-map-diagram-fr.html`, `website/public/workflow-map-diagram.html`.
3. Inspect retrieval/memory/indexing through: `src/core-skills/bmad-index-docs/SKILL.md`, `src/bmm-skills/1-analysis/bmad-document-project/templates/index-template.md`, `docs/index.md`.
4. Verify behavior through test/eval files: `test/README.md`, `test/test-file-refs-csv.js`, `test/test-installation-components.js`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 570 files, 158 directories.. 핵심 구조 신호는 JavaScript, package.json, README.md, AGENTS.md, LICENSE, tests이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
