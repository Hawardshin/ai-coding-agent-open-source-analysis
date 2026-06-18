# apify/crawlee

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/apify/crawlee |
| local path | sources/apify__crawlee |
| HEAD | 4225a19 |
| stars/forks | 23804 / 1435 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T21:24:59Z |
| trendScore / priorityScore | 154 / 346 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Data / ML platform | 18 | README.md, packages/basic-crawler/README.md, packages/cheerio-crawler/README.md |
| Cloud native / infrastructure | 15 | README.md, packages/browser-pool/README.md, packages/stagehand-crawler/README.md |
| Developer tools / DX | 13 | README.md, packages/browser-pool/README.md, packages/cli/package.json |
| Frontend / app framework | 5 | test/e2e/jsdom-react-ts/actor/package.json |
| AI agent / orchestration | 1 | .claude/CLAUDE.md |
| Coding agent / software automation | 1 | .claude/CLAUDE.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, rag, sdk-api |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 2585 |
| manifests | 40 |
| docs | 1176 |
| tests | 442 |
| ci/ops | 70 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Installation / With Crawlee CLI / Manual installation / Installing pre-release versions / 🛠 Features / 👾 HTTP crawling / 💻 Real browser crawling / Usage on the Apify platform / Support / Contributing | <h1 align="center" <a href="https //crawlee.dev" <picture <source media=" prefers color scheme dark " srcset="https //raw.githubusercontent.com/apify/crawlee/master/website/static/img/crawlee dark.svg?sanitize=true" <img alt="Crawlee" src="https //raw.githubusercontent.com/apify/crawlee/master/website/static/img/crawlee light.svg?sanitize=true" width="500" </picture </a <br <small A web scraping and browser automation library</small </h1 <p align=center <a href="https //trendshift.io/repositories/5179" target=" blank" <img src="https //trendshift.io/api/badge/repositories/5179" alt="apify%2Fcrawlee Trendshift" style="width 250px; height 55px;" width="250" height="55"/ </a </p <p align=center |


## Key Files

### Manifests

- packages/impit-client/README.md
- README.md
- packages/basic-crawler/README.md
- packages/browser-crawler/README.md
- packages/browser-pool/README.md
- packages/cheerio-crawler/README.md
- packages/core/README.md
- packages/http-crawler/README.md
- packages/jsdom-crawler/README.md
- packages/linkedom-crawler/README.md
- packages/playwright-crawler/README.md
- packages/puppeteer-crawler/README.md
- packages/stagehand-crawler/README.md
- packages/templates/templates/camoufox-ts/README.md
- packages/templates/templates/cheerio-js/README.md
- packages/templates/templates/cheerio-ts/README.md
- packages/templates/templates/empty-js/README.md
- packages/templates/templates/empty-ts/README.md
- packages/templates/templates/getting-started-js/README.md
- packages/templates/templates/getting-started-ts/README.md


### Spec / Docs / Prompt Artifacts

- .claude/CLAUDE.md


### Agent Instruction Files

- .claude/CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| website | 1572 |
| test | 401 |
| packages | 396 |
| docs | 181 |
| .github | 11 |
| scripts | 3 |
| .claude | 1 |
| .editorconfig | 1 |
| .gitignore | 1 |
| .husky | 1 |
| .yarnrc.yml | 1 |
| biome.json | 1 |
| CHANGELOG.md | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1167 |
| .mdx | 498 |
| .json | 260 |
| [no-ext] | 156 |
| .md | 136 |
| .mjs | 103 |
| .js | 92 |
| .svg | 54 |
| .txt | 53 |
| .css | 28 |
| .jsx | 14 |
| .yml | 13 |
| .mp4 | 2 |
| .patch | 2 |
| .conf | 1 |
| .html | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
