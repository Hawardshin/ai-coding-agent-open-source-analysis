# bloopai/bloop Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 694 files, 145 directories.

## 요약

- 조사 단위: `sources/BloopAI__bloop` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 694 files, 145 directories, depth score 124, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server/bleep/src/bin/bleep.rs, client/src/App.tsx, client/src/index.css이고, 의존성 단서는 next, react, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | bloopai/bloop |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | global |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/BloopAI__bloop](../../../../sources/BloopAI__bloop) |
| Existing report | [reports/clone-structures/bloopai__bloop.md](../../../clone-structures/bloopai__bloop.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 694 / 145 |
| Max observed depth | 8 |
| Top directories | .github, apps, client, server, tests |
| Top extensions | .tsx: 300, .rs: 121, .ts: 76, .png: 39, .json: 26, .sql: 17, (none): 16, .ttf: 15, .scm: 13, .yml: 13, .md: 9, .cjs: 6 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| client | source boundary | 78 |
| server | source boundary | 20 |
| tests | validation surface | 20 |
| apps/desktop | apps workspace | 14 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | start | run-s lfs:install lfs:pull start:tauri |
| serve-dev | package.json | watch | run-s lfs:install lfs:pull watch:tauri |
| serve-dev | package.json | start:tauri | npm --prefix apps/desktop run tauri dev -- --no-watch -- -- --config-file=../../../local_config.json |
| serve-dev | package.json | watch:tauri | npm --prefix apps/desktop run tauri dev -- -- -- --config-file=../../../local_config.json |
| serve-dev | package.json | start-app | npm start |
| serve-dev | package.json | start-web | npm --prefix client run dev |
| utility | package.json | lfs:install | git lfs install |
| utility | package.json | lfs:pull | git lfs pull |
| build | package.json | build-app | npm --prefix apps/desktop run tauri build -- --verbose |
| build | package.json | build-web | npm --prefix client run build |
| utility | package.json | tauri | npm --prefix apps/desktop run tauri |
| quality | package.json | lint | eslint client/src apps/**/src --ext ts --ext tsx --ext js --ext jsx --ext html |
| quality | package.json | client-type-check | npm --prefix client run type-check |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next, react |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [server/bleep/src/bin/bleep.rs](../../../../sources/BloopAI__bloop/server/bleep/src/bin/bleep.rs) | entrypoints signal |
| entrypoints | [client/src/App.tsx](../../../../sources/BloopAI__bloop/client/src/App.tsx) | entrypoints signal |
| entrypoints | [client/src/index.css](../../../../sources/BloopAI__bloop/client/src/index.css) | entrypoints signal |
| entrypoints | [client/src/main.tsx](../../../../sources/BloopAI__bloop/client/src/main.tsx) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/BloopAI__bloop/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/BloopAI__bloop/Cargo.toml) | config signal |
| config | [package.json](../../../../sources/BloopAI__bloop/package.json) | config signal |
| config | [tests/tsconfig.json](../../../../sources/BloopAI__bloop/tests/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/BloopAI__bloop/README.md) | docs signal |
| docs | [server/README.md](../../../../sources/BloopAI__bloop/server/README.md) | docs signal |
| docs | [client/README.md](../../../../sources/BloopAI__bloop/client/README.md) | docs signal |
| docs | [client/src/Project/LeftSidebar/NavPanel/Doc/DocDropdown.tsx](../../../../sources/BloopAI__bloop/client/src/Project/LeftSidebar/NavPanel/Doc/DocDropdown.tsx) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 14 | [server/bleep/src/bin/bleep.rs](../../../../sources/BloopAI__bloop/server/bleep/src/bin/bleep.rs)<br>[client/src/App.tsx](../../../../sources/BloopAI__bloop/client/src/App.tsx)<br>[client/src/index.css](../../../../sources/BloopAI__bloop/client/src/index.css)<br>[client/src/main.tsx](../../../../sources/BloopAI__bloop/client/src/main.tsx)<br>[apps/desktop/src-tauri/src/main.rs](../../../../sources/BloopAI__bloop/apps/desktop/src-tauri/src/main.rs)<br>[apps/desktop/src-tauri/bin/qdrant-aarch64-apple-darwin](../../../../sources/BloopAI__bloop/apps/desktop/src-tauri/bin/qdrant-aarch64-apple-darwin)<br>[apps/desktop/src-tauri/bin/qdrant-x86_64-apple-darwin](../../../../sources/BloopAI__bloop/apps/desktop/src-tauri/bin/qdrant-x86_64-apple-darwin)<br>[apps/desktop/src-tauri/bin/qdrant-x86_64-pc-windows-msvc.exe](../../../../sources/BloopAI__bloop/apps/desktop/src-tauri/bin/qdrant-x86_64-pc-windows-msvc.exe) |
| agentRuntime | 47 | [server/bleep/src/agent.rs](../../../../sources/BloopAI__bloop/server/bleep/src/agent.rs)<br>[server/bleep/src/query/planner.rs](../../../../sources/BloopAI__bloop/server/bleep/src/query/planner.rs)<br>[server/bleep/src/query/planner/optimize.rs](../../../../sources/BloopAI__bloop/server/bleep/src/query/planner/optimize.rs)<br>[server/bleep/src/agent/exchange.rs](../../../../sources/BloopAI__bloop/server/bleep/src/agent/exchange.rs)<br>[server/bleep/src/agent/model.rs](../../../../sources/BloopAI__bloop/server/bleep/src/agent/model.rs)<br>[server/bleep/src/agent/prompts.rs](../../../../sources/BloopAI__bloop/server/bleep/src/agent/prompts.rs)<br>[server/bleep/src/agent/symbol.rs](../../../../sources/BloopAI__bloop/server/bleep/src/agent/symbol.rs)<br>[server/bleep/src/agent/transcoder.rs](../../../../sources/BloopAI__bloop/server/bleep/src/agent/transcoder.rs) |
| mcp | 0 | not obvious |
| retrieval | 72 | [server/bleep/src/webserver/index.rs](../../../../sources/BloopAI__bloop/server/bleep/src/webserver/index.rs)<br>[server/bleep/src/semantic/chunk.rs](../../../../sources/BloopAI__bloop/server/bleep/src/semantic/chunk.rs)<br>[server/bleep/src/scraper/chunk.rs](../../../../sources/BloopAI__bloop/server/bleep/src/scraper/chunk.rs)<br>[client/index.html](../../../../sources/BloopAI__bloop/client/index.html)<br>[client/src/index.css](../../../../sources/BloopAI__bloop/client/src/index.css)<br>[client/src/utils/index.test.ts](../../../../sources/BloopAI__bloop/client/src/utils/index.test.ts)<br>[client/src/utils/index.ts](../../../../sources/BloopAI__bloop/client/src/utils/index.ts)<br>[client/src/types/index.ts](../../../../sources/BloopAI__bloop/client/src/types/index.ts) |
| spec | 7 | [tests/all_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/all_onboarding.spec.js_)<br>[tests/github_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/github_onboarding.spec.js_)<br>[tests/local_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/local_onboarding.spec.js_)<br>[tests/onboarding.spec.ts](../../../../sources/BloopAI__bloop/tests/onboarding.spec.ts)<br>[tests/repository.spec.ts](../../../../sources/BloopAI__bloop/tests/repository.spec.ts)<br>[tests/search.spec.ts](../../../../sources/BloopAI__bloop/tests/search.spec.ts)<br>[tests/settings.spec.ts](../../../../sources/BloopAI__bloop/tests/settings.spec.ts) |
| eval | 18 | [tests/.example.env](../../../../sources/BloopAI__bloop/tests/.example.env)<br>[tests/.gitignore](../../../../sources/BloopAI__bloop/tests/.gitignore)<br>[tests/all_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/all_onboarding.spec.js_)<br>[tests/github_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/github_onboarding.spec.js_)<br>[tests/local_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/local_onboarding.spec.js_)<br>[tests/onboarding.spec.ts](../../../../sources/BloopAI__bloop/tests/onboarding.spec.ts)<br>[tests/onboarding.ts](../../../../sources/BloopAI__bloop/tests/onboarding.ts)<br>[tests/repository.spec.ts](../../../../sources/BloopAI__bloop/tests/repository.spec.ts) |
| security | 0 | not obvious |
| ci | 9 | [.github/workflows/build-on-pr-command.yml](../../../../sources/BloopAI__bloop/.github/workflows/build-on-pr-command.yml)<br>[.github/workflows/build-on-pr.yml](../../../../sources/BloopAI__bloop/.github/workflows/build-on-pr.yml)<br>[.github/workflows/build-on-release.yml](../../../../sources/BloopAI__bloop/.github/workflows/build-on-release.yml)<br>[.github/workflows/client-test.yml](../../../../sources/BloopAI__bloop/.github/workflows/client-test.yml)<br>[.github/workflows/dependencies.yml](../../../../sources/BloopAI__bloop/.github/workflows/dependencies.yml)<br>[.github/workflows/dummy.yml](../../../../sources/BloopAI__bloop/.github/workflows/dummy.yml)<br>[.github/workflows/server-test.yml](../../../../sources/BloopAI__bloop/.github/workflows/server-test.yml)<br>[.github/workflows/tauri-release.yml](../../../../sources/BloopAI__bloop/.github/workflows/tauri-release.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/BloopAI__bloop/docker-compose.yml)<br>[Dockerfile](../../../../sources/BloopAI__bloop/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 7 | [README.md](../../../../sources/BloopAI__bloop/README.md)<br>[server/README.md](../../../../sources/BloopAI__bloop/server/README.md)<br>[client/README.md](../../../../sources/BloopAI__bloop/client/README.md)<br>[client/src/Project/LeftSidebar/NavPanel/Doc/DocDropdown.tsx](../../../../sources/BloopAI__bloop/client/src/Project/LeftSidebar/NavPanel/Doc/DocDropdown.tsx)<br>[client/src/Project/LeftSidebar/NavPanel/Doc/DocEntry.tsx](../../../../sources/BloopAI__bloop/client/src/Project/LeftSidebar/NavPanel/Doc/DocEntry.tsx)<br>[client/src/Project/LeftSidebar/NavPanel/Doc/index.tsx](../../../../sources/BloopAI__bloop/client/src/Project/LeftSidebar/NavPanel/Doc/index.tsx)<br>[apps/desktop/README.md](../../../../sources/BloopAI__bloop/apps/desktop/README.md) |
| config | 10 | [Cargo.lock](../../../../sources/BloopAI__bloop/Cargo.lock)<br>[Cargo.toml](../../../../sources/BloopAI__bloop/Cargo.toml)<br>[package.json](../../../../sources/BloopAI__bloop/package.json)<br>[tests/tsconfig.json](../../../../sources/BloopAI__bloop/tests/tsconfig.json)<br>[server/bleep/Cargo.toml](../../../../sources/BloopAI__bloop/server/bleep/Cargo.toml)<br>[client/package.json](../../../../sources/BloopAI__bloop/client/package.json)<br>[client/tsconfig.json](../../../../sources/BloopAI__bloop/client/tsconfig.json)<br>[apps/desktop/package.json](../../../../sources/BloopAI__bloop/apps/desktop/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 18 | [tests/.example.env](../../../../sources/BloopAI__bloop/tests/.example.env)<br>[tests/.gitignore](../../../../sources/BloopAI__bloop/tests/.gitignore)<br>[tests/all_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/all_onboarding.spec.js_)<br>[tests/github_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/github_onboarding.spec.js_)<br>[tests/local_onboarding.spec.js_](../../../../sources/BloopAI__bloop/tests/local_onboarding.spec.js_)<br>[tests/onboarding.spec.ts](../../../../sources/BloopAI__bloop/tests/onboarding.spec.ts) |
| CI workflows | 9 | [.github/workflows/build-on-pr-command.yml](../../../../sources/BloopAI__bloop/.github/workflows/build-on-pr-command.yml)<br>[.github/workflows/build-on-pr.yml](../../../../sources/BloopAI__bloop/.github/workflows/build-on-pr.yml)<br>[.github/workflows/build-on-release.yml](../../../../sources/BloopAI__bloop/.github/workflows/build-on-release.yml)<br>[.github/workflows/client-test.yml](../../../../sources/BloopAI__bloop/.github/workflows/client-test.yml)<br>[.github/workflows/dependencies.yml](../../../../sources/BloopAI__bloop/.github/workflows/dependencies.yml)<br>[.github/workflows/dummy.yml](../../../../sources/BloopAI__bloop/.github/workflows/dummy.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/BloopAI__bloop/docker-compose.yml)<br>[Dockerfile](../../../../sources/BloopAI__bloop/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `server/bleep/src/bin/bleep.rs`, `client/src/App.tsx`, `client/src/index.css`.
2. Trace execution through entrypoints: `server/bleep/src/bin/bleep.rs`, `client/src/App.tsx`, `client/src/index.css`.
3. Map agent/tool runtime through: `server/bleep/src/agent.rs`, `server/bleep/src/query/planner.rs`, `server/bleep/src/query/planner/optimize.rs`.
4. Inspect retrieval/memory/indexing through: `server/bleep/src/webserver/index.rs`, `server/bleep/src/semantic/chunk.rs`, `server/bleep/src/scraper/chunk.rs`.
5. Verify behavior through test/eval files: `tests/.example.env`, `tests/.gitignore`, `tests/all_onboarding.spec.js_`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Local clone structure analysis 694 files, 145 directories.. 핵심 구조 신호는 package.json, Cargo.toml, Dockerfile, docker-compose.yml, README.md, next이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
