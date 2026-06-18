# giselles-ai/giselle Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Giselle: AI App Builder. Open Source.

## 요약

- 조사 단위: `sources/giselles-ai__giselle` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,938 files, 495 directories, depth score 121, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, tools/tsconfig/node-library.json, tools/tsconfig/package.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | giselles-ai/giselle |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 535 |
| Forks | 123 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/giselles-ai__giselle](../../../../sources/giselles-ai__giselle) |
| Existing report | [reports/global-trending/repositories/giselles-ai__giselle.md](../../../global-trending/repositories/giselles-ai__giselle.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1938 / 495 |
| Max observed depth | 11 |
| Top directories | .changeset, .claude, .continuity, .cursor, .github, .zed, apps, config, docs, internal-packages, packages, scripts, tools, turbo |
| Top extensions | .ts: 889, .tsx: 510, .json: 189, .md: 129, .sql: 80, .png: 31, .txt: 18, .jpg: 14, .yml: 12, (none): 12, .mjs: 11, .mdc: 8 |
| Source patterns | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 38 |
| apps/studio.giselles.ai | apps workspace | 31 |
| packages/react | packages workspace | 30 |
| packages/rag | packages workspace | 15 |
| packages/giselle | packages workspace | 13 |
| packages/language-model-registry | packages workspace | 10 |
| packages/web-search | packages workspace | 10 |
| packages/workspace-utils | packages workspace | 9 |
| packages/pseudo-tiktoken | packages workspace | 8 |
| packages/language-model | packages workspace | 7 |
| packages/sdk | packages workspace | 7 |
| packages/storage | packages workspace | 7 |
| packages/text-editor-utils | packages workspace | 7 |
| packages/protocol | packages workspace | 6 |
| packages/supabase-driver | packages workspace | 6 |
| packages/stream | packages workspace | 5 |
| packages/trigger-registry | packages workspace | 5 |
| packages/utils | packages workspace | 5 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | turbo build |
| build | package.json | build-sdk | turbo build --filter '@giselles-ai/*' |
| build | package.json | build-data-type | turbo build --filter '@giselles-ai/protocol' |
| quality | package.json | check-types | turbo check-types |
| quality | package.json | format | biome check --write . |
| utility | package.json | clean | turbo clean |
| serve-dev | package.json | dev:studio.giselles.ai | NODE_NO_WARNINGS=1 turbo dev --filter studio.giselles.ai |
| utility | package.json | changeset | changeset |
| utility | package.json | version | changeset version |
| test | package.json | test | turbo test |
| utility | package.json | tidy | knip --no-config-hints |
| utility | package.json | strip-workspace | pnpm -F strip-workspace strip-workspace |
| build | package.json | prevd | pnpm i && pnpm build-sdk |
| serve-dev | package.json | vd | vercel dev |
| utility | package.json | report:colors | node scripts/report-colors.mjs |
| utility | package.json | report:colors:out | node scripts/report-colors.mjs --out .reports/report-colors.json |
| utility | package.json | guard:colors | node scripts/guard-colors.mjs |
| quality | package.json | lint:colors:code | node scripts/lint-colors-code.mjs |
| utility | package.json | metrics:count | node scripts/metrics-count.mjs |
| utility | package.json | codemod:text-black-600-20 | node scripts/codemods/replace-text-black-600-20.mjs |
| utility | package.json | codemod:text-black-600-20:apply | node scripts/codemods/replace-text-black-600-20.mjs --apply |
| utility | package.json | codemod:text-white-900 | node scripts/codemods/replace-text-white-900-to-inverse.mjs |
| utility | package.json | codemod:text-white-900:apply | node scripts/codemods/replace-text-white-900-to-inverse.mjs --apply |
| utility | package.json | codemod:safe-pass-1 | node scripts/codemods/safe-pass-1.mjs |
| utility | package.json | codemod:safe-pass-1:apply | node scripts/codemods/safe-pass-1.mjs --apply |
| utility | package.json | report:compat-tokens | node scripts/compat-tokens-inventory.mjs |


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
| agentRuntime | [AGENTS.md](../../../../sources/giselles-ai__giselle/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/tsconfig/node-library.json](../../../../sources/giselles-ai__giselle/tools/tsconfig/node-library.json) | agentRuntime signal |
| agentRuntime | [tools/tsconfig/package.json](../../../../sources/giselles-ai__giselle/tools/tsconfig/package.json) | agentRuntime signal |
| agentRuntime | [tools/tsconfig/react-library.json](../../../../sources/giselles-ai__giselle/tools/tsconfig/react-library.json) | agentRuntime signal |
| entrypoints | [packages/workspace-utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/index.ts) | entrypoints signal |
| entrypoints | [packages/web-search/src/index.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vault/src/index.ts](../../../../sources/giselles-ai__giselle/packages/vault/src/index.ts) | entrypoints signal |
| entrypoints | [packages/utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/utils/src/index.ts) | entrypoints signal |
| instruction | [internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md) | instruction signal |
| instruction | [internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md) | instruction signal |
| instruction | [docs/AGENTS.md](../../../../sources/giselles-ai__giselle/docs/AGENTS.md) | instruction signal |
| config | [package.json](../../../../sources/giselles-ai__giselle/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 29 | [packages/workspace-utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/index.ts)<br>[packages/web-search/src/index.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/index.ts)<br>[packages/vault/src/index.ts](../../../../sources/giselles-ai__giselle/packages/vault/src/index.ts)<br>[packages/utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/utils/src/index.ts)<br>[packages/trigger-registry/src/index.ts](../../../../sources/giselles-ai__giselle/packages/trigger-registry/src/index.ts)<br>[packages/text-editor-utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/text-editor-utils/src/index.ts)<br>[packages/supabase-driver/src/index.ts](../../../../sources/giselles-ai__giselle/packages/supabase-driver/src/index.ts)<br>[packages/stream/src/index.ts](../../../../sources/giselles-ai__giselle/packages/stream/src/index.ts) |
| agentRuntime | 461 | [AGENTS.md](../../../../sources/giselles-ai__giselle/AGENTS.md)<br>[tools/tsconfig/node-library.json](../../../../sources/giselles-ai__giselle/tools/tsconfig/node-library.json)<br>[tools/tsconfig/package.json](../../../../sources/giselles-ai__giselle/tools/tsconfig/package.json)<br>[tools/tsconfig/react-library.json](../../../../sources/giselles-ai__giselle/tools/tsconfig/react-library.json)<br>[tools/strip-workspace/cli.ts](../../../../sources/giselles-ai__giselle/tools/strip-workspace/cli.ts)<br>[tools/strip-workspace/package.json](../../../../sources/giselles-ai__giselle/tools/strip-workspace/package.json)<br>[packages/storage/src/memory-storage-driver.ts](../../../../sources/giselles-ai__giselle/packages/storage/src/memory-storage-driver.ts)<br>[packages/react/src/vector-store/context.tsx](../../../../sources/giselles-ai__giselle/packages/react/src/vector-store/context.tsx) |
| mcp | 0 | not obvious |
| retrieval | 350 | [packages/workspace-utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/index.ts)<br>[packages/workspace-utils/src/slice-graph-from-node.test.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/slice-graph-from-node.test.ts)<br>[packages/workspace-utils/src/slice-graph-from-node.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/slice-graph-from-node.ts)<br>[packages/web-search/src/index.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/index.ts)<br>[packages/vault/src/index.ts](../../../../sources/giselles-ai__giselle/packages/vault/src/index.ts)<br>[packages/utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/utils/src/index.ts)<br>[packages/trigger-registry/src/index.ts](../../../../sources/giselles-ai__giselle/packages/trigger-registry/src/index.ts)<br>[packages/text-editor-utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/text-editor-utils/src/index.ts) |
| spec | 16 | [internal-packages/workflow-designer-ui/src/editor/properties-panel/end-node-properties-panel/end-node-properties-panel-spec.md](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/editor/properties-panel/end-node-properties-panel/end-node-properties-panel-spec.md)<br>[docs/design-tokens-guide.md](../../../../sources/giselles-ai__giselle/docs/design-tokens-guide.md)<br>[docs/design-tokens-usage.md](../../../../sources/giselles-ai__giselle/docs/design-tokens-usage.md)<br>[docs/adr/0001-migrate-from-vercel-storage-to-supabase-storage.md](../../../../sources/giselles-ai__giselle/docs/adr/0001-migrate-from-vercel-storage-to-supabase-storage.md)<br>[docs/adr/0002-custom-storage-driver-for-supabase-storage.md](../../../../sources/giselles-ai__giselle/docs/adr/0002-custom-storage-driver-for-supabase-storage.md)<br>[docs/adr/0003-managing-secrets.md](../../../../sources/giselles-ai__giselle/docs/adr/0003-managing-secrets.md)<br>[docs/adr/0004-giselle-storage.md](../../../../sources/giselles-ai__giselle/docs/adr/0004-giselle-storage.md)<br>[apps/studio.giselles.ai/tests/e2e/login-redirect.spec.ts](../../../../sources/giselles-ai__giselle/apps/studio.giselles.ai/tests/e2e/login-redirect.spec.ts) |
| eval | 99 | [packages/workspace-utils/src/group-nodes.test.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/group-nodes.test.ts)<br>[packages/workspace-utils/src/slice-graph-from-node.test.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/slice-graph-from-node.test.ts)<br>[packages/web-search/src/self-made.integration.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/self-made.integration.test.ts)<br>[packages/web-search/src/self-made.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/self-made.test.ts)<br>[packages/web-search/src/validate-url.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/validate-url.test.ts)<br>[packages/web-search/src/web-search.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/web-search.test.ts)<br>[packages/sdk/src/sdk.test.ts](../../../../sources/giselles-ai__giselle/packages/sdk/src/sdk.test.ts)<br>[packages/react/src/workspace/utils/is-supported-connection.test.ts](../../../../sources/giselles-ai__giselle/packages/react/src/workspace/utils/is-supported-connection.test.ts) |
| security | 32 | [SECURITY.md](../../../../sources/giselles-ai__giselle/SECURITY.md)<br>[scripts/guard-colors.mjs](../../../../sources/giselles-ai__giselle/scripts/guard-colors.mjs)<br>[packages/protocol/src/secret/index.ts](../../../../sources/giselles-ai__giselle/packages/protocol/src/secret/index.ts)<br>[packages/giselle/src/secrets/add-secret.ts](../../../../sources/giselles-ai__giselle/packages/giselle/src/secrets/add-secret.ts)<br>[packages/giselle/src/secrets/decrypt-secret.ts](../../../../sources/giselles-ai__giselle/packages/giselle/src/secrets/decrypt-secret.ts)<br>[packages/giselle/src/secrets/delete-secret.ts](../../../../sources/giselles-ai__giselle/packages/giselle/src/secrets/delete-secret.ts)<br>[internal-packages/workflow-designer-ui/src/editor/secret/secret-table.tsx](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/editor/secret/secret-table.tsx)<br>[internal-packages/workflow-designer-ui/src/app-designer/store/usecases/use-add-secret.ts](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/app-designer/store/usecases/use-add-secret.ts) |
| ci | 7 | [.github/workflows/ci.yml](../../../../sources/giselles-ai__giselle/.github/workflows/ci.yml)<br>[.github/workflows/create_issue_security_txt.yml](../../../../sources/giselles-ai__giselle/.github/workflows/create_issue_security_txt.yml)<br>[.github/workflows/e2e.yml](../../../../sources/giselles-ai__giselle/.github/workflows/e2e.yml)<br>[.github/workflows/license.yml](../../../../sources/giselles-ai__giselle/.github/workflows/license.yml)<br>[.github/workflows/release-trigger-dev.yml](../../../../sources/giselles-ai__giselle/.github/workflows/release-trigger-dev.yml)<br>[.github/workflows/release.yml](../../../../sources/giselles-ai__giselle/.github/workflows/release.yml)<br>[.github/workflows/templates/create_issue_security_txt.md](../../../../sources/giselles-ai__giselle/.github/workflows/templates/create_issue_security_txt.md) |
| container | 0 | not obvious |
| instruction | 13 | [AGENTS.md](../../../../sources/giselles-ai__giselle/AGENTS.md)<br>[internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md)<br>[internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md)<br>[docs/AGENTS.md](../../../../sources/giselles-ai__giselle/docs/AGENTS.md)<br>[apps/studio.giselles.ai/lib/internal-api/AGENTS.md](../../../../sources/giselles-ai__giselle/apps/studio.giselles.ai/lib/internal-api/AGENTS.md)<br>[.cursor/rules/design-mode.mdc](../../../../sources/giselles-ai__giselle/.cursor/rules/design-mode.mdc)<br>[.cursor/rules/development-guide.mdc](../../../../sources/giselles-ai__giselle/.cursor/rules/development-guide.mdc)<br>[.cursor/rules/edit-workspace-tour.mdc](../../../../sources/giselles-ai__giselle/.cursor/rules/edit-workspace-tour.mdc) |
| docs | 45 | [README.md](../../../../sources/giselles-ai__giselle/README.md)<br>[packages/web-search/README.md](../../../../sources/giselles-ai__giselle/packages/web-search/README.md)<br>[packages/supabase-driver/README.md](../../../../sources/giselles-ai__giselle/packages/supabase-driver/README.md)<br>[packages/sdk/README.md](../../../../sources/giselles-ai__giselle/packages/sdk/README.md)<br>[packages/rag/README.md](../../../../sources/giselles-ai__giselle/packages/rag/README.md)<br>[packages/pseudo-tiktoken/README.md](../../../../sources/giselles-ai__giselle/packages/pseudo-tiktoken/README.md)<br>[packages/document-preprocessor/README.md](../../../../sources/giselles-ai__giselle/packages/document-preprocessor/README.md)<br>[docs/AGENTS.md](../../../../sources/giselles-ai__giselle/docs/AGENTS.md) |
| config | 95 | [package.json](../../../../sources/giselles-ai__giselle/package.json)<br>[pnpm-workspace.yaml](../../../../sources/giselles-ai__giselle/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/giselles-ai__giselle/turbo.json)<br>[tools/tsconfig/package.json](../../../../sources/giselles-ai__giselle/tools/tsconfig/package.json)<br>[tools/strip-workspace/package.json](../../../../sources/giselles-ai__giselle/tools/strip-workspace/package.json)<br>[packages/workspace-utils/package.json](../../../../sources/giselles-ai__giselle/packages/workspace-utils/package.json)<br>[packages/workspace-utils/tsconfig.json](../../../../sources/giselles-ai__giselle/packages/workspace-utils/tsconfig.json)<br>[packages/workspace-utils/turbo.json](../../../../sources/giselles-ai__giselle/packages/workspace-utils/turbo.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 99 | [packages/workspace-utils/src/group-nodes.test.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/group-nodes.test.ts)<br>[packages/workspace-utils/src/slice-graph-from-node.test.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/slice-graph-from-node.test.ts)<br>[packages/web-search/src/self-made.integration.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/self-made.integration.test.ts)<br>[packages/web-search/src/self-made.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/self-made.test.ts)<br>[packages/web-search/src/validate-url.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/validate-url.test.ts)<br>[packages/web-search/src/web-search.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/web-search.test.ts) |
| CI workflows | 7 | [.github/workflows/ci.yml](../../../../sources/giselles-ai__giselle/.github/workflows/ci.yml)<br>[.github/workflows/create_issue_security_txt.yml](../../../../sources/giselles-ai__giselle/.github/workflows/create_issue_security_txt.yml)<br>[.github/workflows/e2e.yml](../../../../sources/giselles-ai__giselle/.github/workflows/e2e.yml)<br>[.github/workflows/license.yml](../../../../sources/giselles-ai__giselle/.github/workflows/license.yml)<br>[.github/workflows/release-trigger-dev.yml](../../../../sources/giselles-ai__giselle/.github/workflows/release-trigger-dev.yml)<br>[.github/workflows/release.yml](../../../../sources/giselles-ai__giselle/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 32 | [SECURITY.md](../../../../sources/giselles-ai__giselle/SECURITY.md)<br>[scripts/guard-colors.mjs](../../../../sources/giselles-ai__giselle/scripts/guard-colors.mjs)<br>[packages/protocol/src/secret/index.ts](../../../../sources/giselles-ai__giselle/packages/protocol/src/secret/index.ts)<br>[packages/giselle/src/secrets/add-secret.ts](../../../../sources/giselles-ai__giselle/packages/giselle/src/secrets/add-secret.ts)<br>[packages/giselle/src/secrets/decrypt-secret.ts](../../../../sources/giselles-ai__giselle/packages/giselle/src/secrets/decrypt-secret.ts)<br>[packages/giselle/src/secrets/delete-secret.ts](../../../../sources/giselles-ai__giselle/packages/giselle/src/secrets/delete-secret.ts) |
| Agent instructions | 13 | [AGENTS.md](../../../../sources/giselles-ai__giselle/AGENTS.md)<br>[internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md)<br>[internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md)<br>[docs/AGENTS.md](../../../../sources/giselles-ai__giselle/docs/AGENTS.md)<br>[apps/studio.giselles.ai/lib/internal-api/AGENTS.md](../../../../sources/giselles-ai__giselle/apps/studio.giselles.ai/lib/internal-api/AGENTS.md)<br>[.cursor/rules/design-mode.mdc](../../../../sources/giselles-ai__giselle/.cursor/rules/design-mode.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `AGENTS.md`, `tools/tsconfig/node-library.json`, `tools/tsconfig/package.json`.
2. Trace execution through entrypoints: `packages/workspace-utils/src/index.ts`, `packages/web-search/src/index.ts`, `packages/vault/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/tsconfig/node-library.json`, `tools/tsconfig/package.json`.
4. Inspect retrieval/memory/indexing through: `packages/workspace-utils/src/index.ts`, `packages/workspace-utils/src/slice-graph-from-node.test.ts`, `packages/workspace-utils/src/slice-graph-from-node.ts`.
5. Verify behavior through test/eval files: `packages/workspace-utils/src/group-nodes.test.ts`, `packages/workspace-utils/src/slice-graph-from-node.test.ts`, `packages/web-search/src/self-made.integration.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Giselle AI App Builder. Open Source.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
