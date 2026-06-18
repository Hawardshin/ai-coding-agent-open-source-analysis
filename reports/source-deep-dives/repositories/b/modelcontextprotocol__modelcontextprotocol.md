# modelcontextprotocol/modelcontextprotocol Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Specification and documentation for the Model Context Protocol

## 요약

- 조사 단위: `sources/modelcontextprotocol__modelcontextprotocol` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 624 files, 206 directories, depth score 117, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=seps/1024-mcp-client-security-requirements-for-local-server-.md, seps/1865-mcp-apps-interactive-user-interfaces-for-mcp.md, seps/2567-sessionless-mcp.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | modelcontextprotocol/modelcontextprotocol |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 8418 |
| Forks | 1593 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/modelcontextprotocol__modelcontextprotocol](../../../../sources/modelcontextprotocol__modelcontextprotocol) |
| Existing report | [reports/global-trending/repositories/modelcontextprotocol__modelcontextprotocol.md](../../../global-trending/repositories/modelcontextprotocol__modelcontextprotocol.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 624 / 206 |
| Max observed depth | 6 |
| Top directories | .claude-plugin, .github, blog, docs, plugins, schema, scripts, seps, tools |
| Top extensions | .mdx: 218, .json: 142, .md: 79, .png: 52, .ts: 37, .yml: 18, .html: 16, .svg: 15, (none): 12, .gif: 9, .webp: 8, .jpg: 3 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 116 |
| .github | ci surface | 1 |
| blog | top-level component | 1 |
| plugins | top-level component | 1 |
| schema | top-level component | 1 |
| scripts | top-level component | 1 |
| seps | top-level component | 1 |
| tools | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | generate | npm run generate:schema && npm run generate:seps |
| utility | package.json | generate:schema | npm run generate:schema:json & npm run generate:schema:md & wait |
| utility | package.json | generate:schema:json | tsx scripts/generate-schemas.ts |
| test | package.json | generate:schema:md | find schema/*/schema.mdx -print0 \| xargs -0 -P 0 -I {} sh -c 'f="{}"; typedoc --entryPoints "${f%.mdx}.ts" --schemaPageTemplate "$f" > docs/specification/$(basename -- $(dirname -- "$f"))/schema.mdx' |
| utility | package.json | generate:seps | tsx scripts/render-seps.ts |
| quality | package.json | format | npm run format:docs && npm run format:schema |
| quality | package.json | format:docs | prettier --write "**/*.{md,mdx}" --ignore-path .prettierignore |
| quality | package.json | format:schema | prettier --write "schema/**/*.ts" |
| quality | package.json | check | npm run check:schema && npm run check:docs && npm run check:seps |
| quality | package.json | check:schema | npm run check:schema:ts && npm run check:schema:json && npm run check:schema:examples && npm run check:schema:md |
| quality | package.json | check:schema:ts | tsc --noEmit && eslint schema/ && prettier --check "schema/**/*.ts" |
| quality | package.json | check:schema:json | tsx scripts/generate-schemas.ts --check |
| quality | package.json | check:schema:examples | tsx scripts/validate-examples.ts |
| test | package.json | check:schema:md | for f in schema/*/schema.mdx; do typedoc --entryPoints "${f%.mdx}.ts" --schemaPageTemplate "$f" \| cmp docs/specification/$(basename -- $(dirname -- "$f"))/schema.mdx - \|\| exit 1; done |
| quality | package.json | check:docs | npm run check:docs:format && npm run check:docs:js-comments && npm run check:docs:links |
| quality | package.json | check:docs:format | prettier --check "**/*.{md,mdx}" |
| quality | package.json | check:docs:js-comments | tsx scripts/check-mdx-comments.ts |
| quality | package.json | check:docs:links | cd docs && npx mint broken-links |
| quality | package.json | check:seps | tsx scripts/render-seps.ts --check |
| serve-dev | package.json | serve:docs | cd docs && npx mint dev |
| serve-dev | package.json | serve:blog | cd blog && hugo serve |
| quality | package.json | prep | npm run check:schema:ts && npm run generate && npm run check:docs && npm run check:seps && npm run format |


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
| mcp | [seps/1024-mcp-client-security-requirements-for-local-server-.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1024-mcp-client-security-requirements-for-local-server-.md) | mcp signal |
| mcp | [seps/1865-mcp-apps-interactive-user-interfaces-for-mcp.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1865-mcp-apps-interactive-user-interfaces-for-mcp.md) | mcp signal |
| mcp | [seps/2567-sessionless-mcp.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2567-sessionless-mcp.md) | mcp signal |
| mcp | [seps/2575-stateless-mcp.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2575-stateless-mcp.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/sep-automation/.gitignore](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/.gitignore) | agentRuntime signal |
| agentRuntime | [tools/sep-automation/package-lock.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/package-lock.json) | agentRuntime signal |
| agentRuntime | [tools/sep-automation/package.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/package.json) | agentRuntime signal |
| entrypoints | [tools/sep-automation/src/index.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tsconfig.json) | config signal |
| config | [tools/sep-automation/tsconfig.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/tsconfig.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [tools/sep-automation/src/index.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/src/index.ts) |
| agentRuntime | 58 | [AGENTS.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/AGENTS.md)<br>[tools/sep-automation/.gitignore](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/.gitignore)<br>[tools/sep-automation/package-lock.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/package-lock.json)<br>[tools/sep-automation/package.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/package.json)<br>[tools/sep-automation/tsconfig.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/tsconfig.json)<br>[tools/sep-automation/vitest.config.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/vitest.config.ts)<br>[tools/sep-automation/test/mocks.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/mocks.ts)<br>[tools/sep-automation/test/unit/comment.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/comment.test.ts) |
| mcp | 49 | [seps/1024-mcp-client-security-requirements-for-local-server-.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1024-mcp-client-security-requirements-for-local-server-.md)<br>[seps/1865-mcp-apps-interactive-user-interfaces-for-mcp.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1865-mcp-apps-interactive-user-interfaces-for-mcp.md)<br>[seps/2567-sessionless-mcp.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2567-sessionless-mcp.md)<br>[seps/2575-stateless-mcp.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2575-stateless-mcp.md)<br>[seps/932-model-context-protocol-governance.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/932-model-context-protocol-governance.md)<br>[seps/990-enable-enterprise-idp-policy-controls-during-mcp-o.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/990-enable-enterprise-idp-policy-controls-during-mcp-o.md)<br>[plugins/mcp-spec/README.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/plugins/mcp-spec/README.md)<br>[plugins/mcp-spec/skills/search-mcp-github/SKILL.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/plugins/mcp-spec/skills/search-mcp-github/SKILL.md) |
| retrieval | 29 | [tools/sep-automation/src/index.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/src/index.ts)<br>[tools/sep-automation/src/utils/index.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/src/utils/index.ts)<br>[docs/specification/draft/index.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/index.mdx)<br>[docs/specification/draft/server/index.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/server/index.mdx)<br>[docs/specification/draft/basic/index.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/basic/index.mdx)<br>[docs/specification/draft/basic/transports/index.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/basic/transports/index.mdx)<br>[docs/specification/draft/basic/patterns/index.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/basic/patterns/index.mdx)<br>[docs/specification/draft/basic/authorization/index.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/basic/authorization/index.mdx) |
| spec | 20 | [seps/1024-mcp-client-security-requirements-for-local-server-.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1024-mcp-client-security-requirements-for-local-server-.md)<br>[seps/2596-spec-feature-lifecycle-and-deprecation.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2596-spec-feature-lifecycle-and-deprecation.md)<br>[plugins/mcp-spec/README.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/plugins/mcp-spec/README.md)<br>[plugins/mcp-spec/skills/search-mcp-github/SKILL.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/plugins/mcp-spec/skills/search-mcp-github/SKILL.md)<br>[plugins/mcp-spec/skills/draft-sep/SKILL.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/plugins/mcp-spec/skills/draft-sep/SKILL.md)<br>[plugins/mcp-spec/.claude-plugin/plugin.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/plugins/mcp-spec/.claude-plugin/plugin.json)<br>[docs/spec-version-warning.js](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/spec-version-warning.js)<br>[docs/specification/draft/architecture/index.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/architecture/index.mdx) |
| eval | 17 | [tools/sep-automation/test/mocks.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/mocks.ts)<br>[tools/sep-automation/test/unit/comment.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/comment.test.ts)<br>[tools/sep-automation/test/unit/config.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/config.test.ts)<br>[tools/sep-automation/test/unit/hooks.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/hooks.test.ts)<br>[tools/sep-automation/test/unit/ping.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/ping.test.ts)<br>[tools/sep-automation/test/unit/sep-types.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/sep-types.test.ts)<br>[tools/sep-automation/test/unit/transition.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/transition.test.ts)<br>[seps/2484-conformance-tests-required-for-final-seps.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2484-conformance-tests-required-for-final-seps.md) |
| security | 25 | [SECURITY.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/SECURITY.md)<br>[seps/1024-mcp-client-security-requirements-for-local-server-.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1024-mcp-client-security-requirements-for-local-server-.md)<br>[seps/1046-support-oauth-client-credentials-flow-in-authoriza.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1046-support-oauth-client-credentials-flow-in-authoriza.md)<br>[seps/2468-recommend-issuer-claim-for-auth.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2468-recommend-issuer-claim-for-auth.md)<br>[seps/985-align-oauth-20-protected-resource-metadata-with-rf.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/985-align-oauth-20-protected-resource-metadata-with-rf.md)<br>[seps/990-enable-enterprise-idp-policy-controls-during-mcp-o.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/990-enable-enterprise-idp-policy-controls-during-mcp-o.md)<br>[seps/991-enable-url-based-client-registration-using-oauth-c.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/991-enable-url-based-client-registration-using-oauth-c.md)<br>[docs/specification/draft/basic/authorization/security-considerations.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/basic/authorization/security-considerations.mdx) |
| ci | 13 | [.github/workflows/blog-preview.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/blog-preview.yml)<br>[.github/workflows/cut-release.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/cut-release.yml)<br>[.github/workflows/deploy-blog.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/deploy-blog.yml)<br>[.github/workflows/labeler.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/labeler.yml)<br>[.github/workflows/main.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/main.yml)<br>[.github/workflows/markdown-format.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/markdown-format.yml)<br>[.github/workflows/publish-release.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/publish-release.yml)<br>[.github/workflows/render-seps.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/render-seps.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/AGENTS.md) |
| docs | 286 | [README.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/README.md)<br>[seps/README.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/README.md)<br>[plugins/mcp-spec/README.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/plugins/mcp-spec/README.md)<br>[docs/docs.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/docs.json)<br>[docs/examples.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/examples.mdx)<br>[docs/favicon.svg](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/favicon.svg)<br>[docs/footer.js](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/footer.js)<br>[docs/mcp.png](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/mcp.png) |
| config | 5 | [package.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/package.json)<br>[tsconfig.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tsconfig.json)<br>[tools/sep-automation/package.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/package.json)<br>[tools/sep-automation/tsconfig.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/tsconfig.json)<br>[blog/go.mod](../../../../sources/modelcontextprotocol__modelcontextprotocol/blog/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 17 | [tools/sep-automation/test/mocks.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/mocks.ts)<br>[tools/sep-automation/test/unit/comment.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/comment.test.ts)<br>[tools/sep-automation/test/unit/config.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/config.test.ts)<br>[tools/sep-automation/test/unit/hooks.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/hooks.test.ts)<br>[tools/sep-automation/test/unit/ping.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/ping.test.ts)<br>[tools/sep-automation/test/unit/sep-types.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/sep-types.test.ts) |
| CI workflows | 13 | [.github/workflows/blog-preview.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/blog-preview.yml)<br>[.github/workflows/cut-release.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/cut-release.yml)<br>[.github/workflows/deploy-blog.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/deploy-blog.yml)<br>[.github/workflows/labeler.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/labeler.yml)<br>[.github/workflows/main.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/main.yml)<br>[.github/workflows/markdown-format.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/markdown-format.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 25 | [SECURITY.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/SECURITY.md)<br>[seps/1024-mcp-client-security-requirements-for-local-server-.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1024-mcp-client-security-requirements-for-local-server-.md)<br>[seps/1046-support-oauth-client-credentials-flow-in-authoriza.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1046-support-oauth-client-credentials-flow-in-authoriza.md)<br>[seps/2468-recommend-issuer-claim-for-auth.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2468-recommend-issuer-claim-for-auth.md)<br>[seps/985-align-oauth-20-protected-resource-metadata-with-rf.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/985-align-oauth-20-protected-resource-metadata-with-rf.md)<br>[seps/990-enable-enterprise-idp-policy-controls-during-mcp-o.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/990-enable-enterprise-idp-policy-controls-during-mcp-o.md) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `seps/1024-mcp-client-security-requirements-for-local-server-.md`, `seps/1865-mcp-apps-interactive-user-interfaces-for-mcp.md`, `seps/2567-sessionless-mcp.md`.
2. Trace execution through entrypoints: `tools/sep-automation/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/sep-automation/.gitignore`, `tools/sep-automation/package-lock.json`.
4. Inspect retrieval/memory/indexing through: `tools/sep-automation/src/index.ts`, `tools/sep-automation/src/utils/index.ts`, `docs/specification/draft/index.mdx`.
5. Verify behavior through test/eval files: `tools/sep-automation/test/mocks.ts`, `tools/sep-automation/test/unit/comment.test.ts`, `tools/sep-automation/test/unit/config.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Specification and documentation for the Model Context Protocol. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
