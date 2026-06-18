# joungminsung/OpenDocuments Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Self-hosted RAG platform for AI document search across GitHub, Notion, Google Drive, local files, and web sources with citations.

## 요약

- 조사 단위: `sources/joungminsung__OpenDocuments` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 454 files, 172 directories, depth score 125, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=plugins/parser-xlsx/src/index.ts, plugins/parser-pptx/src/index.ts, plugins/parser-pdf/src/index.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | joungminsung/OpenDocuments |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 80 |
| Forks | 13 |
| License | MIT |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/joungminsung__OpenDocuments](../../../../sources/joungminsung__OpenDocuments) |
| Existing report | [reports/korea-trending/repositories/joungminsung__OpenDocuments.md](../../../korea-trending/repositories/joungminsung__OpenDocuments.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 454 / 172 |
| Max observed depth | 6 |
| Top directories | .changeset, .github, assets, docs, docs-site, packages, plugins, templates |
| Top extensions | .ts: 274, .json: 74, .md: 54, .tsx: 21, .sql: 6, .svg: 6, .yml: 6, (none): 3, .css: 2, .txt: 2, .gif: 1, .html: 1 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/core | packages workspace | 27 |
| packages/server | packages workspace | 18 |
| docs | documentation surface | 5 |
| packages/web | packages workspace | 5 |
| packages/cli | packages workspace | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| docs-site | documentation surface | 1 |
| packages | source boundary | 1 |
| packages/client | packages workspace | 1 |
| plugins | top-level component | 1 |
| templates | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| test | package.json | setup | npm install && npm run build && echo 'Setup complete. Run: npm run test' |
| build | package.json | build | turbo build |
| test | package.json | test | turbo test |
| quality | package.json | lint | turbo lint |
| quality | package.json | typecheck | turbo typecheck |
| serve-dev | package.json | dev | turbo dev |
| utility | package.json | clean | turbo clean |


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
| retrieval | [plugins/parser-xlsx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/src/index.ts) | retrieval signal |
| retrieval | [plugins/parser-pptx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/src/index.ts) | retrieval signal |
| retrieval | [plugins/parser-pdf/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/src/index.ts) | retrieval signal |
| retrieval | [plugins/parser-jupyter/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-jupyter/src/index.ts) | retrieval signal |
| docs | [README.ko.md](../../../../sources/joungminsung__OpenDocuments/README.ko.md) | docs signal |
| docs | [README.md](../../../../sources/joungminsung__OpenDocuments/README.md) | docs signal |
| docs | [templates/README.md](../../../../sources/joungminsung__OpenDocuments/templates/README.md) | docs signal |
| docs | [packages/cli/README.md](../../../../sources/joungminsung__OpenDocuments/packages/cli/README.md) | docs signal |
| eval | [plugins/parser-xlsx/tests/xlsx.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/tests/xlsx.test.ts) | eval signal |
| eval | [plugins/parser-pptx/tests/pptx.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/tests/pptx.test.ts) | eval signal |
| eval | [plugins/parser-pdf/tests/pdf.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/tests/pdf.test.ts) | eval signal |
| eval | [plugins/parser-jupyter/tests/jupyter.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-jupyter/tests/jupyter.test.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 37 | [plugins/parser-xlsx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/src/index.ts)<br>[plugins/parser-pptx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/src/index.ts)<br>[plugins/parser-pdf/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/src/index.ts)<br>[plugins/parser-jupyter/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-jupyter/src/index.ts)<br>[plugins/parser-html/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-html/src/index.ts)<br>[plugins/parser-email/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-email/src/index.ts)<br>[plugins/parser-docx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-docx/src/index.ts)<br>[plugins/parser-code/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-code/src/index.ts) |
| agentRuntime | 5 | [packages/core/tests/rag/context-window.test.ts](../../../../sources/joungminsung__OpenDocuments/packages/core/tests/rag/context-window.test.ts)<br>[packages/core/tests/plugin/sandbox.test.ts](../../../../sources/joungminsung__OpenDocuments/packages/core/tests/plugin/sandbox.test.ts)<br>[packages/core/src/storage/migrations/runner.ts](../../../../sources/joungminsung__OpenDocuments/packages/core/src/storage/migrations/runner.ts)<br>[packages/core/src/rag/context-window.ts](../../../../sources/joungminsung__OpenDocuments/packages/core/src/rag/context-window.ts)<br>[packages/core/src/plugin/sandbox.ts](../../../../sources/joungminsung__OpenDocuments/packages/core/src/plugin/sandbox.ts) |
| mcp | 3 | [packages/server/tests/mcp/server.test.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/tests/mcp/server.test.ts)<br>[packages/server/src/mcp/server.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/src/mcp/server.ts)<br>[docs-site/guide/mcp-knowledge-base.md](../../../../sources/joungminsung__OpenDocuments/docs-site/guide/mcp-knowledge-base.md) |
| retrieval | 99 | [plugins/parser-xlsx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/src/index.ts)<br>[plugins/parser-pptx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/src/index.ts)<br>[plugins/parser-pdf/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/src/index.ts)<br>[plugins/parser-jupyter/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-jupyter/src/index.ts)<br>[plugins/parser-html/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-html/src/index.ts)<br>[plugins/parser-email/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-email/src/index.ts)<br>[plugins/parser-docx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-docx/src/index.ts)<br>[plugins/parser-code/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-code/src/index.ts) |
| spec | 3 | [docs-site/guide/architecture.md](../../../../sources/joungminsung__OpenDocuments/docs-site/guide/architecture.md)<br>[docs/architecture.ko.md](../../../../sources/joungminsung__OpenDocuments/docs/architecture.ko.md)<br>[docs/architecture.md](../../../../sources/joungminsung__OpenDocuments/docs/architecture.md) |
| eval | 92 | [plugins/parser-xlsx/tests/xlsx.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/tests/xlsx.test.ts)<br>[plugins/parser-pptx/tests/pptx.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/tests/pptx.test.ts)<br>[plugins/parser-pdf/tests/pdf.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/tests/pdf.test.ts)<br>[plugins/parser-jupyter/tests/jupyter.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-jupyter/tests/jupyter.test.ts)<br>[plugins/parser-html/tests/html.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-html/tests/html.test.ts)<br>[plugins/parser-email/tests/email.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-email/tests/email.test.ts)<br>[plugins/parser-docx/tests/docx.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-docx/tests/docx.test.ts)<br>[plugins/parser-code/tests/code.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-code/tests/code.test.ts) |
| security | 19 | [SECURITY.md](../../../../sources/joungminsung__OpenDocuments/SECURITY.md)<br>[packages/web/src/lib/auth.ts](../../../../sources/joungminsung__OpenDocuments/packages/web/src/lib/auth.ts)<br>[packages/web/src/components/auth/LoginPage.tsx](../../../../sources/joungminsung__OpenDocuments/packages/web/src/components/auth/LoginPage.tsx)<br>[packages/server/tests/http/auth.test.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/tests/http/auth.test.ts)<br>[packages/server/src/http/routes/auth-routes.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/src/http/routes/auth-routes.ts)<br>[packages/server/src/http/middleware/auth.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/src/http/middleware/auth.ts)<br>[packages/core/tests/security/alerts.test.ts](../../../../sources/joungminsung__OpenDocuments/packages/core/tests/security/alerts.test.ts)<br>[packages/core/tests/security/audit.test.ts](../../../../sources/joungminsung__OpenDocuments/packages/core/tests/security/audit.test.ts) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/joungminsung__OpenDocuments/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/joungminsung__OpenDocuments/.github/workflows/docs.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/joungminsung__OpenDocuments/docker-compose.yml)<br>[Dockerfile](../../../../sources/joungminsung__OpenDocuments/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 6 | [README.ko.md](../../../../sources/joungminsung__OpenDocuments/README.ko.md)<br>[README.md](../../../../sources/joungminsung__OpenDocuments/README.md)<br>[templates/README.md](../../../../sources/joungminsung__OpenDocuments/templates/README.md)<br>[packages/cli/README.md](../../../../sources/joungminsung__OpenDocuments/packages/cli/README.md)<br>[docs/architecture.ko.md](../../../../sources/joungminsung__OpenDocuments/docs/architecture.ko.md)<br>[docs/architecture.md](../../../../sources/joungminsung__OpenDocuments/docs/architecture.md) |
| config | 69 | [package.json](../../../../sources/joungminsung__OpenDocuments/package.json)<br>[turbo.json](../../../../sources/joungminsung__OpenDocuments/turbo.json)<br>[plugins/parser-xlsx/package.json](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/package.json)<br>[plugins/parser-xlsx/tsconfig.json](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/tsconfig.json)<br>[plugins/parser-pptx/package.json](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/package.json)<br>[plugins/parser-pptx/tsconfig.json](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/tsconfig.json)<br>[plugins/parser-pdf/package.json](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/package.json)<br>[plugins/parser-pdf/tsconfig.json](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 92 | [plugins/parser-xlsx/tests/xlsx.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/tests/xlsx.test.ts)<br>[plugins/parser-pptx/tests/pptx.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/tests/pptx.test.ts)<br>[plugins/parser-pdf/tests/pdf.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/tests/pdf.test.ts)<br>[plugins/parser-jupyter/tests/jupyter.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-jupyter/tests/jupyter.test.ts)<br>[plugins/parser-html/tests/html.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-html/tests/html.test.ts)<br>[plugins/parser-email/tests/email.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-email/tests/email.test.ts) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/joungminsung__OpenDocuments/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/joungminsung__OpenDocuments/.github/workflows/docs.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/joungminsung__OpenDocuments/docker-compose.yml)<br>[Dockerfile](../../../../sources/joungminsung__OpenDocuments/Dockerfile) |
| Security / policy | 19 | [SECURITY.md](../../../../sources/joungminsung__OpenDocuments/SECURITY.md)<br>[packages/web/src/lib/auth.ts](../../../../sources/joungminsung__OpenDocuments/packages/web/src/lib/auth.ts)<br>[packages/web/src/components/auth/LoginPage.tsx](../../../../sources/joungminsung__OpenDocuments/packages/web/src/components/auth/LoginPage.tsx)<br>[packages/server/tests/http/auth.test.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/tests/http/auth.test.ts)<br>[packages/server/src/http/routes/auth-routes.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/src/http/routes/auth-routes.ts)<br>[packages/server/src/http/middleware/auth.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/src/http/middleware/auth.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `plugins/parser-xlsx/src/index.ts`, `plugins/parser-pptx/src/index.ts`, `plugins/parser-pdf/src/index.ts`.
2. Trace execution through entrypoints: `plugins/parser-xlsx/src/index.ts`, `plugins/parser-pptx/src/index.ts`, `plugins/parser-pdf/src/index.ts`.
3. Map agent/tool runtime through: `packages/core/tests/rag/context-window.test.ts`, `packages/core/tests/plugin/sandbox.test.ts`, `packages/core/src/storage/migrations/runner.ts`.
4. Inspect retrieval/memory/indexing through: `plugins/parser-xlsx/src/index.ts`, `plugins/parser-pptx/src/index.ts`, `plugins/parser-pdf/src/index.ts`.
5. Verify behavior through test/eval files: `plugins/parser-xlsx/tests/xlsx.test.ts`, `plugins/parser-pptx/tests/pptx.test.ts`, `plugins/parser-pdf/tests/pdf.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Self hosted RAG platform for AI document search across GitHub, Notion, Google Drive, local files, and web sources with c. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, LICENSE이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
