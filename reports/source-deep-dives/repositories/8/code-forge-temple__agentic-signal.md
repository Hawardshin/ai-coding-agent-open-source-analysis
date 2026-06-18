# code-forge-temple/agentic-signal Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

🤖 Visual AI agent workflow automation platform with local LLM integration - build intelligent workflows using drag-and-drop interface, no cloud dependencies required.

## 요약

- 조사 단위: `sources/code-forge-temple__agentic-signal` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 551 files, 180 directories, depth score 117, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src-tauri/src/main.gen.rs.mustache, server/main.ts, client/src/index.css이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | code-forge-temple/agentic-signal |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | korea |
| Language | TypeScript |
| Stars | 155 |
| Forks | 17 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/code-forge-temple__agentic-signal](../../../../sources/code-forge-temple__agentic-signal) |
| Existing report | [reports/global-trending/repositories/code-forge-temple__agentic-signal.md](../../../global-trending/repositories/code-forge-temple__agentic-signal.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 551 / 180 |
| Max observed depth | 12 |
| Top directories | .github, client, docs, plugins, scripts, server, shared, src-tauri |
| Top extensions | .ts: 189, .tsx: 80, .png: 55, .webp: 48, .mdx: 30, .json: 28, .md: 28, .scss: 16, (none): 15, .jpg: 12, .mustache: 10, .svg: 10 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 60 |
| server | source boundary | 39 |
| client | source boundary | 27 |
| .github | ci surface | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |
| shared | top-level component | 1 |
| src-tauri | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | postinstall | bunx playwright install chromium |
| build | package.json | precompile | bun run scripts/generate-files.ts |
| build | package.json | client:build | bun run precompile && cd client && bun run build |
| build | package.json | client:preview | bun run precompile && cd client && bun run preview |
| serve-dev | package.json | client:dev | bun run precompile && cd client && bun run dev |
| serve-dev | package.json | server:dev | bun run precompile && deno task dev |
| serve-dev | package.json | server:build | bun run precompile && deno task compile |
| serve-dev | package.json | dev | concurrently "bun run server:dev" "bun run client:dev" |
| utility | package.json | sync:tauri-version | deno run --allow-read --allow-write src-tauri/sync-tauri-version.ts |
| serve-dev | package.json | dev:windows | bun run client:build && deno task compile:windows && bun run copy:backend:windows && bunx tauri dev |
| serve-dev | package.json | dev:linux | bun run client:build && deno task compile:linux && bun run copy:backend:linux && bunx tauri dev |
| serve-dev | package.json | dev:macos | bun run client:build && deno task compile:macos && bun run copy:backend:macos && bunx tauri dev |
| utility | package.json | clean:bin | bunx rimraf src-tauri/bin |
| serve-dev | package.json | copy:backend:windows | bun run clean:bin && bunx cpx2 "server/dist/agentic-signal-backend.exe" src-tauri/bin/ |
| serve-dev | package.json | copy:backend:linux | bun run clean:bin && bunx cpx2 "server/dist/agentic-signal-backend-linux" src-tauri/bin/ |
| serve-dev | package.json | copy:backend:macos | bun run clean:bin && bunx cpx2 "server/dist/agentic-signal-backend-macos" src-tauri/bin/ |
| build | package.json | build:windows | bun run sync:tauri-version && bun run client:build && deno task compile:windows && bun run copy:backend:windows && bunx tauri build |
| build | package.json | build:linux | bun run sync:tauri-version && bun run client:build && deno task compile:linux && bun run copy:backend:linux && bunx tauri build --bundles deb,appimage |
| build | package.json | build:macos | bun run sync:tauri-version && bun run client:build && deno task compile:macos && bun run copy:backend:macos && bunx tauri build |
| quality | package.json | lint | eslint . |
| quality | package.json | lint:fix | eslint . --fix |
| utility | package.json | circular | bunx madge --circular --extensions ts,tsx ./client/src |


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
| entrypoints | [src-tauri/src/main.gen.rs.mustache](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/main.gen.rs.mustache) | entrypoints signal |
| entrypoints | [server/main.ts](../../../../sources/code-forge-temple__agentic-signal/server/main.ts) | entrypoints signal |
| entrypoints | [client/src/index.css](../../../../sources/code-forge-temple__agentic-signal/client/src/index.css) | entrypoints signal |
| entrypoints | [client/src/main.tsx](../../../../sources/code-forge-temple__agentic-signal/client/src/main.tsx) | entrypoints signal |
| container | [dockerfile](../../../../sources/code-forge-temple__agentic-signal/dockerfile) | container signal |
| container | [dockerfile.pro](../../../../sources/code-forge-temple__agentic-signal/dockerfile.pro) | container signal |
| config | [package.json](../../../../sources/code-forge-temple__agentic-signal/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/code-forge-temple__agentic-signal/tsconfig.json) | config signal |
| config | [src-tauri/Cargo.lock](../../../../sources/code-forge-temple__agentic-signal/src-tauri/Cargo.lock) | config signal |
| config | [src-tauri/Cargo.toml](../../../../sources/code-forge-temple__agentic-signal/src-tauri/Cargo.toml) | config signal |
| ci | [.github/workflows/build.yml](../../../../sources/code-forge-temple__agentic-signal/.github/workflows/build.yml) | ci signal |
| ci | [.github/workflows/deploy-docs.yml](../../../../sources/code-forge-temple__agentic-signal/.github/workflows/deploy-docs.yml) | ci signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [src-tauri/src/main.gen.rs.mustache](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/main.gen.rs.mustache)<br>[server/main.ts](../../../../sources/code-forge-temple__agentic-signal/server/main.ts)<br>[client/src/index.css](../../../../sources/code-forge-temple__agentic-signal/client/src/index.css)<br>[client/src/main.tsx](../../../../sources/code-forge-temple__agentic-signal/client/src/main.tsx) |
| agentRuntime | 122 | [src-tauri/src/tools/.gitignore](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/tools/.gitignore)<br>[src-tauri/src/tools/mod.gen.rs.mustache](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/tools/mod.gen.rs.mustache)<br>[server/tools/.gitignore](../../../../sources/code-forge-temple__agentic-signal/server/tools/.gitignore)<br>[server/tools/toolsRegistry.gen.mustache](../../../../sources/code-forge-temple__agentic-signal/server/tools/toolsRegistry.gen.mustache)<br>[server/tools/WebPageToMarkdownTool/mod.ts](../../../../sources/code-forge-temple__agentic-signal/server/tools/WebPageToMarkdownTool/mod.ts)<br>[server/tools/WebPageToMarkdownTool/resolver.ts](../../../../sources/code-forge-temple__agentic-signal/server/tools/WebPageToMarkdownTool/resolver.ts)<br>[server/tools/WebPageToMarkdownTool/schema.ts](../../../../sources/code-forge-temple__agentic-signal/server/tools/WebPageToMarkdownTool/schema.ts)<br>[server/tools/WebPageToMarkdownTool/service.ts](../../../../sources/code-forge-temple__agentic-signal/server/tools/WebPageToMarkdownTool/service.ts) |
| mcp | 0 | not obvious |
| retrieval | 34 | [docs/static/workflows/rag-eval.json](../../../../sources/code-forge-temple__agentic-signal/docs/static/workflows/rag-eval.json)<br>[docs/static/img/workflows/rag-eval-preview.webp](../../../../sources/code-forge-temple__agentic-signal/docs/static/img/workflows/rag-eval-preview.webp)<br>[docs/static/img/nodes/rag-node-params.webp](../../../../sources/code-forge-temple__agentic-signal/docs/static/img/nodes/rag-node-params.webp)<br>[docs/static/img/nodes/rag-node-preview.webp](../../../../sources/code-forge-temple__agentic-signal/docs/static/img/nodes/rag-node-preview.webp)<br>[docs/src/pages/index.module.css](../../../../sources/code-forge-temple__agentic-signal/docs/src/pages/index.module.css)<br>[docs/src/pages/index.tsx](../../../../sources/code-forge-temple__agentic-signal/docs/src/pages/index.tsx)<br>[docs/src/components/YouTubePreview/index.ts](../../../../sources/code-forge-temple__agentic-signal/docs/src/components/YouTubePreview/index.ts)<br>[docs/src/components/WorkflowJsonTab/index.ts](../../../../sources/code-forge-temple__agentic-signal/docs/src/components/WorkflowJsonTab/index.ts) |
| spec | 0 | not obvious |
| eval | 3 | [docs/static/workflows/rag-eval.json](../../../../sources/code-forge-temple__agentic-signal/docs/static/workflows/rag-eval.json)<br>[docs/static/img/workflows/rag-eval-preview.webp](../../../../sources/code-forge-temple__agentic-signal/docs/static/img/workflows/rag-eval-preview.webp)<br>[docs/docs/workflows/data/rag-eval.mdx](../../../../sources/code-forge-temple__agentic-signal/docs/docs/workflows/data/rag-eval.mdx) |
| security | 6 | [src-tauri/src/oauth-callback.html](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/oauth-callback.html)<br>[src-tauri/src/utils/google_oauth.rs](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/utils/google_oauth.rs)<br>[src-tauri/src/utils/shared_oauth_server.rs](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/utils/shared_oauth_server.rs)<br>[docs/docs/getting-started/google-oauth-client.md](../../../../sources/code-forge-temple__agentic-signal/docs/docs/getting-started/google-oauth-client.md)<br>[docs/docs/getting-started/reddit-oauth-client.md](../../../../sources/code-forge-temple__agentic-signal/docs/docs/getting-started/reddit-oauth-client.md)<br>[client/src/components/nodes/ToolNode/tools/utils/oauth.ts](../../../../sources/code-forge-temple__agentic-signal/client/src/components/nodes/ToolNode/tools/utils/oauth.ts) |
| ci | 2 | [.github/workflows/build.yml](../../../../sources/code-forge-temple__agentic-signal/.github/workflows/build.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/code-forge-temple__agentic-signal/.github/workflows/deploy-docs.yml) |
| container | 2 | [dockerfile](../../../../sources/code-forge-temple__agentic-signal/dockerfile)<br>[dockerfile.pro](../../../../sources/code-forge-temple__agentic-signal/dockerfile.pro) |
| instruction | 0 | not obvious |
| docs | 163 | [README.md](../../../../sources/code-forge-temple__agentic-signal/README.md)<br>[docs/.gitignore](../../../../sources/code-forge-temple__agentic-signal/docs/.gitignore)<br>[docs/bun.lock](../../../../sources/code-forge-temple__agentic-signal/docs/bun.lock)<br>[docs/docusaurus.config.ts](../../../../sources/code-forge-temple__agentic-signal/docs/docusaurus.config.ts)<br>[docs/package.json](../../../../sources/code-forge-temple__agentic-signal/docs/package.json)<br>[docs/README.md](../../../../sources/code-forge-temple__agentic-signal/docs/README.md)<br>[docs/sidebars.ts](../../../../sources/code-forge-temple__agentic-signal/docs/sidebars.ts)<br>[docs/tsconfig.json](../../../../sources/code-forge-temple__agentic-signal/docs/tsconfig.json) |
| config | 8 | [package.json](../../../../sources/code-forge-temple__agentic-signal/package.json)<br>[tsconfig.json](../../../../sources/code-forge-temple__agentic-signal/tsconfig.json)<br>[src-tauri/Cargo.lock](../../../../sources/code-forge-temple__agentic-signal/src-tauri/Cargo.lock)<br>[src-tauri/Cargo.toml](../../../../sources/code-forge-temple__agentic-signal/src-tauri/Cargo.toml)<br>[docs/package.json](../../../../sources/code-forge-temple__agentic-signal/docs/package.json)<br>[docs/tsconfig.json](../../../../sources/code-forge-temple__agentic-signal/docs/tsconfig.json)<br>[client/package.json](../../../../sources/code-forge-temple__agentic-signal/client/package.json)<br>[client/tsconfig.json](../../../../sources/code-forge-temple__agentic-signal/client/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [docs/static/workflows/rag-eval.json](../../../../sources/code-forge-temple__agentic-signal/docs/static/workflows/rag-eval.json)<br>[docs/static/img/workflows/rag-eval-preview.webp](../../../../sources/code-forge-temple__agentic-signal/docs/static/img/workflows/rag-eval-preview.webp)<br>[docs/docs/workflows/data/rag-eval.mdx](../../../../sources/code-forge-temple__agentic-signal/docs/docs/workflows/data/rag-eval.mdx) |
| CI workflows | 2 | [.github/workflows/build.yml](../../../../sources/code-forge-temple__agentic-signal/.github/workflows/build.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/code-forge-temple__agentic-signal/.github/workflows/deploy-docs.yml) |
| Containers / deploy | 2 | [dockerfile](../../../../sources/code-forge-temple__agentic-signal/dockerfile)<br>[dockerfile.pro](../../../../sources/code-forge-temple__agentic-signal/dockerfile.pro) |
| Security / policy | 6 | [src-tauri/src/oauth-callback.html](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/oauth-callback.html)<br>[src-tauri/src/utils/google_oauth.rs](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/utils/google_oauth.rs)<br>[src-tauri/src/utils/shared_oauth_server.rs](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/utils/shared_oauth_server.rs)<br>[docs/docs/getting-started/google-oauth-client.md](../../../../sources/code-forge-temple__agentic-signal/docs/docs/getting-started/google-oauth-client.md)<br>[docs/docs/getting-started/reddit-oauth-client.md](../../../../sources/code-forge-temple__agentic-signal/docs/docs/getting-started/reddit-oauth-client.md)<br>[client/src/components/nodes/ToolNode/tools/utils/oauth.ts](../../../../sources/code-forge-temple__agentic-signal/client/src/components/nodes/ToolNode/tools/utils/oauth.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src-tauri/src/main.gen.rs.mustache`, `server/main.ts`, `client/src/index.css`.
2. Trace execution through entrypoints: `src-tauri/src/main.gen.rs.mustache`, `server/main.ts`, `client/src/index.css`.
3. Map agent/tool runtime through: `src-tauri/src/tools/.gitignore`, `src-tauri/src/tools/mod.gen.rs.mustache`, `server/tools/.gitignore`.
4. Inspect retrieval/memory/indexing through: `docs/static/workflows/rag-eval.json`, `docs/static/img/workflows/rag-eval-preview.webp`, `docs/static/img/nodes/rag-node-params.webp`.
5. Verify behavior through test/eval files: `docs/static/workflows/rag-eval.json`, `docs/static/img/workflows/rag-eval-preview.webp`, `docs/docs/workflows/data/rag-eval.mdx`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 🤖 Visual AI agent workflow automation platform with local LLM integration build intelligent workflows using drag and dr. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, react, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
