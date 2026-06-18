# code-forge-temple/agentic-signal 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

🤖 Visual AI agent workflow automation platform with local LLM integration - build intelligent workflows using drag-and-drop interface, no cloud dependencies required.

## 요약

- 조사 단위: `sources/code-forge-temple__agentic-signal` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 551 files, 180 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src-tauri/src/main.gen.rs.mustache, server/main.ts, client/src/index.css이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | code-forge-temple/agentic-signal |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | korea |
| Language | TypeScript |
| Stars | 155 |
| Forks | 17 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/code-forge-temple__agentic-signal](../../../../sources/code-forge-temple__agentic-signal) |
| 기존 보고서 | [reports/global-trending/repositories/code-forge-temple__agentic-signal.md](../../../global-trending/repositories/code-forge-temple__agentic-signal.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 551 / 180 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .github, client, docs, plugins, scripts, server, shared, src-tauri |
| 상위 확장자 | .ts: 189, .tsx: 80, .png: 55, .webp: 48, .mdx: 30, .json: 28, .md: 28, .scss: 16, (none): 15, .jpg: 12, .mustache: 10, .svg: 10 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 60 |
| server | source boundary | 39 |
| client | source boundary | 27 |
| .github | ci surface | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |
| shared | top-level component | 1 |
| src-tauri | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [src-tauri/src/main.gen.rs.mustache](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/main.gen.rs.mustache)<br>[server/main.ts](../../../../sources/code-forge-temple__agentic-signal/server/main.ts)<br>[client/src/index.css](../../../../sources/code-forge-temple__agentic-signal/client/src/index.css)<br>[client/src/main.tsx](../../../../sources/code-forge-temple__agentic-signal/client/src/main.tsx) |
| agentRuntime | 122 | [src-tauri/src/tools/.gitignore](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/tools/.gitignore)<br>[src-tauri/src/tools/mod.gen.rs.mustache](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/tools/mod.gen.rs.mustache)<br>[server/tools/.gitignore](../../../../sources/code-forge-temple__agentic-signal/server/tools/.gitignore)<br>[server/tools/toolsRegistry.gen.mustache](../../../../sources/code-forge-temple__agentic-signal/server/tools/toolsRegistry.gen.mustache)<br>[server/tools/WebPageToMarkdownTool/mod.ts](../../../../sources/code-forge-temple__agentic-signal/server/tools/WebPageToMarkdownTool/mod.ts)<br>[server/tools/WebPageToMarkdownTool/resolver.ts](../../../../sources/code-forge-temple__agentic-signal/server/tools/WebPageToMarkdownTool/resolver.ts)<br>[server/tools/WebPageToMarkdownTool/schema.ts](../../../../sources/code-forge-temple__agentic-signal/server/tools/WebPageToMarkdownTool/schema.ts)<br>[server/tools/WebPageToMarkdownTool/service.ts](../../../../sources/code-forge-temple__agentic-signal/server/tools/WebPageToMarkdownTool/service.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 34 | [docs/static/workflows/rag-eval.json](../../../../sources/code-forge-temple__agentic-signal/docs/static/workflows/rag-eval.json)<br>[docs/static/img/workflows/rag-eval-preview.webp](../../../../sources/code-forge-temple__agentic-signal/docs/static/img/workflows/rag-eval-preview.webp)<br>[docs/static/img/nodes/rag-node-params.webp](../../../../sources/code-forge-temple__agentic-signal/docs/static/img/nodes/rag-node-params.webp)<br>[docs/static/img/nodes/rag-node-preview.webp](../../../../sources/code-forge-temple__agentic-signal/docs/static/img/nodes/rag-node-preview.webp)<br>[docs/src/pages/index.module.css](../../../../sources/code-forge-temple__agentic-signal/docs/src/pages/index.module.css)<br>[docs/src/pages/index.tsx](../../../../sources/code-forge-temple__agentic-signal/docs/src/pages/index.tsx)<br>[docs/src/components/YouTubePreview/index.ts](../../../../sources/code-forge-temple__agentic-signal/docs/src/components/YouTubePreview/index.ts)<br>[docs/src/components/WorkflowJsonTab/index.ts](../../../../sources/code-forge-temple__agentic-signal/docs/src/components/WorkflowJsonTab/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 3 | [docs/static/workflows/rag-eval.json](../../../../sources/code-forge-temple__agentic-signal/docs/static/workflows/rag-eval.json)<br>[docs/static/img/workflows/rag-eval-preview.webp](../../../../sources/code-forge-temple__agentic-signal/docs/static/img/workflows/rag-eval-preview.webp)<br>[docs/docs/workflows/data/rag-eval.mdx](../../../../sources/code-forge-temple__agentic-signal/docs/docs/workflows/data/rag-eval.mdx) |
| security | 6 | [src-tauri/src/oauth-callback.html](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/oauth-callback.html)<br>[src-tauri/src/utils/google_oauth.rs](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/utils/google_oauth.rs)<br>[src-tauri/src/utils/shared_oauth_server.rs](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/utils/shared_oauth_server.rs)<br>[docs/docs/getting-started/google-oauth-client.md](../../../../sources/code-forge-temple__agentic-signal/docs/docs/getting-started/google-oauth-client.md)<br>[docs/docs/getting-started/reddit-oauth-client.md](../../../../sources/code-forge-temple__agentic-signal/docs/docs/getting-started/reddit-oauth-client.md)<br>[client/src/components/nodes/ToolNode/tools/utils/oauth.ts](../../../../sources/code-forge-temple__agentic-signal/client/src/components/nodes/ToolNode/tools/utils/oauth.ts) |
| ci | 2 | [.github/workflows/build.yml](../../../../sources/code-forge-temple__agentic-signal/.github/workflows/build.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/code-forge-temple__agentic-signal/.github/workflows/deploy-docs.yml) |
| container | 2 | [dockerfile](../../../../sources/code-forge-temple__agentic-signal/dockerfile)<br>[dockerfile.pro](../../../../sources/code-forge-temple__agentic-signal/dockerfile.pro) |
| instruction | 0 | 명확하지 않음 |
| docs | 163 | [README.md](../../../../sources/code-forge-temple__agentic-signal/README.md)<br>[docs/.gitignore](../../../../sources/code-forge-temple__agentic-signal/docs/.gitignore)<br>[docs/bun.lock](../../../../sources/code-forge-temple__agentic-signal/docs/bun.lock)<br>[docs/docusaurus.config.ts](../../../../sources/code-forge-temple__agentic-signal/docs/docusaurus.config.ts)<br>[docs/package.json](../../../../sources/code-forge-temple__agentic-signal/docs/package.json)<br>[docs/README.md](../../../../sources/code-forge-temple__agentic-signal/docs/README.md)<br>[docs/sidebars.ts](../../../../sources/code-forge-temple__agentic-signal/docs/sidebars.ts)<br>[docs/tsconfig.json](../../../../sources/code-forge-temple__agentic-signal/docs/tsconfig.json) |
| config | 8 | [package.json](../../../../sources/code-forge-temple__agentic-signal/package.json)<br>[tsconfig.json](../../../../sources/code-forge-temple__agentic-signal/tsconfig.json)<br>[src-tauri/Cargo.lock](../../../../sources/code-forge-temple__agentic-signal/src-tauri/Cargo.lock)<br>[src-tauri/Cargo.toml](../../../../sources/code-forge-temple__agentic-signal/src-tauri/Cargo.toml)<br>[docs/package.json](../../../../sources/code-forge-temple__agentic-signal/docs/package.json)<br>[docs/tsconfig.json](../../../../sources/code-forge-temple__agentic-signal/docs/tsconfig.json)<br>[client/package.json](../../../../sources/code-forge-temple__agentic-signal/client/package.json)<br>[client/tsconfig.json](../../../../sources/code-forge-temple__agentic-signal/client/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3 | [docs/static/workflows/rag-eval.json](../../../../sources/code-forge-temple__agentic-signal/docs/static/workflows/rag-eval.json)<br>[docs/static/img/workflows/rag-eval-preview.webp](../../../../sources/code-forge-temple__agentic-signal/docs/static/img/workflows/rag-eval-preview.webp)<br>[docs/docs/workflows/data/rag-eval.mdx](../../../../sources/code-forge-temple__agentic-signal/docs/docs/workflows/data/rag-eval.mdx) |
| CI workflow | 2 | [.github/workflows/build.yml](../../../../sources/code-forge-temple__agentic-signal/.github/workflows/build.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/code-forge-temple__agentic-signal/.github/workflows/deploy-docs.yml) |
| 컨테이너/배포 | 2 | [dockerfile](../../../../sources/code-forge-temple__agentic-signal/dockerfile)<br>[dockerfile.pro](../../../../sources/code-forge-temple__agentic-signal/dockerfile.pro) |
| 보안/정책 | 6 | [src-tauri/src/oauth-callback.html](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/oauth-callback.html)<br>[src-tauri/src/utils/google_oauth.rs](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/utils/google_oauth.rs)<br>[src-tauri/src/utils/shared_oauth_server.rs](../../../../sources/code-forge-temple__agentic-signal/src-tauri/src/utils/shared_oauth_server.rs)<br>[docs/docs/getting-started/google-oauth-client.md](../../../../sources/code-forge-temple__agentic-signal/docs/docs/getting-started/google-oauth-client.md)<br>[docs/docs/getting-started/reddit-oauth-client.md](../../../../sources/code-forge-temple__agentic-signal/docs/docs/getting-started/reddit-oauth-client.md)<br>[client/src/components/nodes/ToolNode/tools/utils/oauth.ts](../../../../sources/code-forge-temple__agentic-signal/client/src/components/nodes/ToolNode/tools/utils/oauth.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src-tauri/src/main.gen.rs.mustache`, `server/main.ts`, `client/src/index.css`.
2. entrypoint를 따라 실행 흐름 확인: `src-tauri/src/main.gen.rs.mustache`, `server/main.ts`, `client/src/index.css`.
3. agent/tool runtime 매핑: `src-tauri/src/tools/.gitignore`, `src-tauri/src/tools/mod.gen.rs.mustache`, `server/tools/.gitignore`.
4. retrieval/memory/indexing 확인: `docs/static/workflows/rag-eval.json`, `docs/static/img/workflows/rag-eval-preview.webp`, `docs/static/img/nodes/rag-node-params.webp`.
5. test/eval 파일로 동작 검증: `docs/static/workflows/rag-eval.json`, `docs/static/img/workflows/rag-eval-preview.webp`, `docs/docs/workflows/data/rag-eval.mdx`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 🤖 Visual AI agent workflow automation platform with local LLM integration build intelligent workflows using drag and dr. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, react, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
