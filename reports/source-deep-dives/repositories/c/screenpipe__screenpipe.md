# screenpipe/screenpipe Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

YC (S26) | AI that knows what you've seen, said, or heard. Records everything you do, say, hear 24/7, local, private, secure. Connect to OpenClaw, Hermes agent and 100+ apps

## 요약

- 조사 단위: `sources/screenpipe__screenpipe` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,993 files, 324 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/screenpipe-mcp/.gitignore, packages/screenpipe-mcp/bun.lock, packages/screenpipe-mcp/manifest.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | screenpipe/screenpipe |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 19349 |
| Forks | 1841 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/screenpipe__screenpipe](../../../../sources/screenpipe__screenpipe) |
| Existing report | [reports/global-trending/repositories/screenpipe__screenpipe.md](../../../global-trending/repositories/screenpipe__screenpipe.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1993 / 324 |
| Max observed depth | 8 |
| Top directories | .cargo, .claude, .devcontainer, .github, apps, ci, crates, docker, docs, ee, packages, scripts, translated_readmes |
| Top extensions | .rs: 678, .ts: 368, .tsx: 228, .png: 131, .sql: 101, .md: 77, .json: 56, .mdx: 53, .toml: 46, .svg: 39, .js: 34, .mjs: 29 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| apps/screenpipe-app-tauri | apps workspace | 88 |
| packages/ai-gateway | packages workspace | 38 |
| docs | documentation surface | 32 |
| packages/screenpipe-mcp | packages workspace | 23 |
| crates/screenpipe-core | crates workspace | 13 |
| crates/screenpipe-engine | crates workspace | 12 |
| packages/cli | packages workspace | 11 |
| crates/screenpipe-db | crates workspace | 10 |
| crates/screenpipe-audio-eval | crates workspace | 6 |
| crates/screenpipe-audio | crates workspace | 5 |
| crates/screenpipe-connect | crates workspace | 5 |
| crates/screenpipe-meeting-eval | crates workspace | 4 |
| crates/screenpipe-team-memory | crates workspace | 4 |
| crates/screenpipe-events | crates workspace | 3 |
| packages/e2e | packages workspace | 3 |
| crates/screenpipe-config | crates workspace | 2 |
| crates/screenpipe-redact | crates workspace | 2 |
| crates/screenpipe-rfdetr-mlx | crates workspace | 2 |


## How It Runs

_No command surface extracted from root manifests._


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
| mcp | [packages/screenpipe-mcp/.gitignore](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/.gitignore) | mcp signal |
| mcp | [packages/screenpipe-mcp/bun.lock](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/bun.lock) | mcp signal |
| mcp | [packages/screenpipe-mcp/manifest.json](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/manifest.json) | mcp signal |
| mcp | [packages/screenpipe-mcp/package.json](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/package.json) | mcp signal |
| agentRuntime | [packages/e2e/src/runner.ts](../../../../sources/screenpipe__screenpipe/packages/e2e/src/runner.ts) | agentRuntime signal |
| agentRuntime | [packages/cli/npm-e2e/runner.ts](../../../../sources/screenpipe__screenpipe/packages/cli/npm-e2e/runner.ts) | agentRuntime signal |
| agentRuntime | [ee/desktop/hooks/use-enterprise.ts](../../../../sources/screenpipe__screenpipe/ee/desktop/hooks/use-enterprise.ts) | agentRuntime signal |
| agentRuntime | [docs/skills-registry/skills-browser.png](../../../../sources/screenpipe__screenpipe/docs/skills-registry/skills-browser.png) | agentRuntime signal |
| entrypoints | [packages/screenpipe-mcp/server.json](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/server.json) | entrypoints signal |
| entrypoints | [packages/screenpipe-mcp/src/cli.ts](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/src/cli.ts) | entrypoints signal |
| entrypoints | [packages/screenpipe-mcp/src/index.ts](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/src/index.ts) | entrypoints signal |
| entrypoints | [packages/ai-gateway/src/index.ts](../../../../sources/screenpipe__screenpipe/packages/ai-gateway/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 40 | [packages/screenpipe-mcp/server.json](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/server.json)<br>[packages/screenpipe-mcp/src/cli.ts](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/src/cli.ts)<br>[packages/screenpipe-mcp/src/index.ts](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/src/index.ts)<br>[packages/ai-gateway/src/index.ts](../../../../sources/screenpipe__screenpipe/packages/ai-gateway/src/index.ts)<br>[ee/sdk/examples/tauri-app/src-tauri/src/main.rs](../../../../sources/screenpipe__screenpipe/ee/sdk/examples/tauri-app/src-tauri/src/main.rs)<br>[ee/sdk/examples/tauri-app/src/main.js](../../../../sources/screenpipe__screenpipe/ee/sdk/examples/tauri-app/src/main.js)<br>[ee/sdk/examples/electron-app/main.js](../../../../sources/screenpipe__screenpipe/ee/sdk/examples/electron-app/main.js)<br>[crates/screenpipe-vault/src/lib.rs](../../../../sources/screenpipe__screenpipe/crates/screenpipe-vault/src/lib.rs) |
| agentRuntime | 102 | [packages/e2e/src/runner.ts](../../../../sources/screenpipe__screenpipe/packages/e2e/src/runner.ts)<br>[packages/cli/npm-e2e/runner.ts](../../../../sources/screenpipe__screenpipe/packages/cli/npm-e2e/runner.ts)<br>[ee/desktop/hooks/use-enterprise.ts](../../../../sources/screenpipe__screenpipe/ee/desktop/hooks/use-enterprise.ts)<br>[docs/skills-registry/skills-browser.png](../../../../sources/screenpipe__screenpipe/docs/skills-registry/skills-browser.png)<br>[docs/skills-registry/skills-card.png](../../../../sources/screenpipe__screenpipe/docs/skills-registry/skills-card.png)<br>[crates/screenpipe-events/src/custom_events/workflow.rs](../../../../sources/screenpipe__screenpipe/crates/screenpipe-events/src/custom_events/workflow.rs)<br>[crates/screenpipe-engine/src/workflow_classifier.rs](../../../../sources/screenpipe__screenpipe/crates/screenpipe-engine/src/workflow_classifier.rs)<br>[crates/screenpipe-core/src/agents/bash_env.rs](../../../../sources/screenpipe__screenpipe/crates/screenpipe-core/src/agents/bash_env.rs) |
| mcp | 29 | [packages/screenpipe-mcp/.gitignore](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/.gitignore)<br>[packages/screenpipe-mcp/bun.lock](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/bun.lock)<br>[packages/screenpipe-mcp/manifest.json](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/manifest.json)<br>[packages/screenpipe-mcp/package.json](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/package.json)<br>[packages/screenpipe-mcp/README.md](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/README.md)<br>[packages/screenpipe-mcp/server.json](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/server.json)<br>[packages/screenpipe-mcp/tsconfig.json](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/tsconfig.json)<br>[packages/screenpipe-mcp/vitest.config.ts](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/vitest.config.ts) |
| retrieval | 33 | [packages/screenpipe-mcp/src/index.ts](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/src/index.ts)<br>[packages/cli/screenpipe/lib/index.js](../../../../sources/screenpipe__screenpipe/packages/cli/screenpipe/lib/index.js)<br>[packages/ai-gateway/src/index.ts](../../../../sources/screenpipe__screenpipe/packages/ai-gateway/src/index.ts)<br>[packages/ai-gateway/src/providers/index.ts](../../../../sources/screenpipe__screenpipe/packages/ai-gateway/src/providers/index.ts)<br>[packages/ai-gateway/migrations/0005_cost_log_device_ts_index.sql](../../../../sources/screenpipe__screenpipe/packages/ai-gateway/migrations/0005_cost_log_device_ts_index.sql)<br>[ee/sdk/index.d.ts](../../../../sources/screenpipe__screenpipe/ee/sdk/index.d.ts)<br>[ee/sdk/index.js](../../../../sources/screenpipe__screenpipe/ee/sdk/index.js)<br>[ee/sdk/tauri/index.d.ts](../../../../sources/screenpipe__screenpipe/ee/sdk/tauri/index.d.ts) |
| spec | 62 | [DESIGN.md](../../../../sources/screenpipe__screenpipe/DESIGN.md)<br>[docs/BATCH_TRANSCRIPTION_SPEC.md](../../../../sources/screenpipe__screenpipe/docs/BATCH_TRANSCRIPTION_SPEC.md)<br>[docs/EVENT_DRIVEN_CAPTURE_SPEC.md](../../../../sources/screenpipe__screenpipe/docs/EVENT_DRIVEN_CAPTURE_SPEC.md)<br>[docs/ORG_DATA_UNIFICATION_SPEC.md](../../../../sources/screenpipe__screenpipe/docs/ORG_DATA_UNIFICATION_SPEC.md)<br>[docs/PIPE_EXECUTION_SPEC.md](../../../../sources/screenpipe__screenpipe/docs/PIPE_EXECUTION_SPEC.md)<br>[docs/single-click-summaries-spec.md](../../../../sources/screenpipe__screenpipe/docs/single-click-summaries-spec.md)<br>[docs/TIMELINE_VIDEO_SPEC.md](../../../../sources/screenpipe__screenpipe/docs/TIMELINE_VIDEO_SPEC.md)<br>[docs/VISION_PIPELINE_SPEC.md](../../../../sources/screenpipe__screenpipe/docs/VISION_PIPELINE_SPEC.md) |
| eval | 407 | [packages/screenpipe-mcp/src/export-video.test.ts](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/src/export-video.test.ts)<br>[packages/screenpipe-mcp/src/http-server.test.ts](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/src/http-server.test.ts)<br>[packages/e2e/local/tests.ts](../../../../sources/screenpipe__screenpipe/packages/e2e/local/tests.ts)<br>[packages/cli/npm-e2e/tests/record.ts](../../../../sources/screenpipe__screenpipe/packages/cli/npm-e2e/tests/record.ts)<br>[packages/ai-gateway/test-vertex-local.sh](../../../../sources/screenpipe__screenpipe/packages/ai-gateway/test-vertex-local.sh)<br>[packages/ai-gateway/src/utils/auth.test.ts](../../../../sources/screenpipe__screenpipe/packages/ai-gateway/src/utils/auth.test.ts)<br>[packages/ai-gateway/src/test/anthropic-caching.unit.test.ts](../../../../sources/screenpipe__screenpipe/packages/ai-gateway/src/test/anthropic-caching.unit.test.ts)<br>[packages/ai-gateway/src/test/anthropic-proxy-caching.unit.test.ts](../../../../sources/screenpipe__screenpipe/packages/ai-gateway/src/test/anthropic-proxy-caching.unit.test.ts) |
| security | 34 | [packages/ai-gateway/src/utils/auth.test.ts](../../../../sources/screenpipe__screenpipe/packages/ai-gateway/src/utils/auth.test.ts)<br>[packages/ai-gateway/src/utils/auth.ts](../../../../sources/screenpipe__screenpipe/packages/ai-gateway/src/utils/auth.ts)<br>[ee/desktop-rust/enterprise_policy.rs](../../../../sources/screenpipe__screenpipe/ee/desktop-rust/enterprise_policy.rs)<br>[ee/desktop/lib/admin-policy.ts](../../../../sources/screenpipe__screenpipe/ee/desktop/lib/admin-policy.ts)<br>[ee/desktop/lib/app-update-policy.ts](../../../../sources/screenpipe__screenpipe/ee/desktop/lib/app-update-policy.ts)<br>[ee/desktop/components/enterprise-settings-guard.tsx](../../../../sources/screenpipe__screenpipe/ee/desktop/components/enterprise-settings-guard.tsx)<br>[crates/screenpipe-engine/src/auth_key.rs](../../../../sources/screenpipe__screenpipe/crates/screenpipe-engine/src/auth_key.rs)<br>[crates/screenpipe-engine/src/permission_monitor.rs](../../../../sources/screenpipe__screenpipe/crates/screenpipe-engine/src/permission_monitor.rs) |
| ci | 28 | [ci/ort-smoke/Cargo.toml](../../../../sources/screenpipe__screenpipe/ci/ort-smoke/Cargo.toml)<br>[ci/ort-smoke/src/main.rs](../../../../sources/screenpipe__screenpipe/ci/ort-smoke/src/main.rs)<br>[.github/workflows/benchmark.yml](../../../../sources/screenpipe__screenpipe/.github/workflows/benchmark.yml)<br>[.github/workflows/ci.yml](../../../../sources/screenpipe__screenpipe/.github/workflows/ci.yml)<br>[.github/workflows/close-inactive.yml](../../../../sources/screenpipe__screenpipe/.github/workflows/close-inactive.yml)<br>[.github/workflows/deploy-ai-gateway.yml](../../../../sources/screenpipe__screenpipe/.github/workflows/deploy-ai-gateway.yml)<br>[.github/workflows/docs.yml](../../../../sources/screenpipe__screenpipe/.github/workflows/docs.yml)<br>[.github/workflows/e2e-macos.yml](../../../../sources/screenpipe__screenpipe/.github/workflows/e2e-macos.yml) |
| container | 2 | [docker/linux-test/Dockerfile](../../../../sources/screenpipe__screenpipe/docker/linux-test/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/screenpipe__screenpipe/.devcontainer/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/screenpipe__screenpipe/CLAUDE.md) |
| docs | 124 | [README.md](../../../../sources/screenpipe__screenpipe/README.md)<br>[translated_readmes/README-de.md](../../../../sources/screenpipe__screenpipe/translated_readmes/README-de.md)<br>[translated_readmes/README-es.md](../../../../sources/screenpipe__screenpipe/translated_readmes/README-es.md)<br>[translated_readmes/README-fr.md](../../../../sources/screenpipe__screenpipe/translated_readmes/README-fr.md)<br>[translated_readmes/README-ja.md](../../../../sources/screenpipe__screenpipe/translated_readmes/README-ja.md)<br>[translated_readmes/README-pt_BR.md](../../../../sources/screenpipe__screenpipe/translated_readmes/README-pt_BR.md)<br>[translated_readmes/README-zh_CN.md](../../../../sources/screenpipe__screenpipe/translated_readmes/README-zh_CN.md)<br>[translated_readmes/README.md](../../../../sources/screenpipe__screenpipe/translated_readmes/README.md) |
| config | 52 | [Cargo.lock](../../../../sources/screenpipe__screenpipe/Cargo.lock)<br>[Cargo.toml](../../../../sources/screenpipe__screenpipe/Cargo.toml)<br>[packages/screenpipe-mcp/package.json](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/package.json)<br>[packages/screenpipe-mcp/tsconfig.json](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/tsconfig.json)<br>[packages/e2e/package.json](../../../../sources/screenpipe__screenpipe/packages/e2e/package.json)<br>[packages/cli/package.json](../../../../sources/screenpipe__screenpipe/packages/cli/package.json)<br>[packages/cli/screenpipe-win32-x64/package.json](../../../../sources/screenpipe__screenpipe/packages/cli/screenpipe-win32-x64/package.json)<br>[packages/cli/screenpipe-linux-x64/package.json](../../../../sources/screenpipe__screenpipe/packages/cli/screenpipe-linux-x64/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 407 | [packages/screenpipe-mcp/src/export-video.test.ts](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/src/export-video.test.ts)<br>[packages/screenpipe-mcp/src/http-server.test.ts](../../../../sources/screenpipe__screenpipe/packages/screenpipe-mcp/src/http-server.test.ts)<br>[packages/e2e/local/tests.ts](../../../../sources/screenpipe__screenpipe/packages/e2e/local/tests.ts)<br>[packages/cli/npm-e2e/tests/record.ts](../../../../sources/screenpipe__screenpipe/packages/cli/npm-e2e/tests/record.ts)<br>[packages/ai-gateway/test-vertex-local.sh](../../../../sources/screenpipe__screenpipe/packages/ai-gateway/test-vertex-local.sh)<br>[packages/ai-gateway/src/utils/auth.test.ts](../../../../sources/screenpipe__screenpipe/packages/ai-gateway/src/utils/auth.test.ts) |
| CI workflows | 28 | [ci/ort-smoke/Cargo.toml](../../../../sources/screenpipe__screenpipe/ci/ort-smoke/Cargo.toml)<br>[ci/ort-smoke/src/main.rs](../../../../sources/screenpipe__screenpipe/ci/ort-smoke/src/main.rs)<br>[.github/workflows/benchmark.yml](../../../../sources/screenpipe__screenpipe/.github/workflows/benchmark.yml)<br>[.github/workflows/ci.yml](../../../../sources/screenpipe__screenpipe/.github/workflows/ci.yml)<br>[.github/workflows/close-inactive.yml](../../../../sources/screenpipe__screenpipe/.github/workflows/close-inactive.yml)<br>[.github/workflows/deploy-ai-gateway.yml](../../../../sources/screenpipe__screenpipe/.github/workflows/deploy-ai-gateway.yml) |
| Containers / deploy | 2 | [docker/linux-test/Dockerfile](../../../../sources/screenpipe__screenpipe/docker/linux-test/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/screenpipe__screenpipe/.devcontainer/Dockerfile) |
| Security / policy | 34 | [packages/ai-gateway/src/utils/auth.test.ts](../../../../sources/screenpipe__screenpipe/packages/ai-gateway/src/utils/auth.test.ts)<br>[packages/ai-gateway/src/utils/auth.ts](../../../../sources/screenpipe__screenpipe/packages/ai-gateway/src/utils/auth.ts)<br>[ee/desktop-rust/enterprise_policy.rs](../../../../sources/screenpipe__screenpipe/ee/desktop-rust/enterprise_policy.rs)<br>[ee/desktop/lib/admin-policy.ts](../../../../sources/screenpipe__screenpipe/ee/desktop/lib/admin-policy.ts)<br>[ee/desktop/lib/app-update-policy.ts](../../../../sources/screenpipe__screenpipe/ee/desktop/lib/app-update-policy.ts)<br>[ee/desktop/components/enterprise-settings-guard.tsx](../../../../sources/screenpipe__screenpipe/ee/desktop/components/enterprise-settings-guard.tsx) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/screenpipe__screenpipe/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/screenpipe-mcp/.gitignore`, `packages/screenpipe-mcp/bun.lock`, `packages/screenpipe-mcp/manifest.json`.
2. Trace execution through entrypoints: `packages/screenpipe-mcp/server.json`, `packages/screenpipe-mcp/src/cli.ts`, `packages/screenpipe-mcp/src/index.ts`.
3. Map agent/tool runtime through: `packages/e2e/src/runner.ts`, `packages/cli/npm-e2e/runner.ts`, `ee/desktop/hooks/use-enterprise.ts`.
4. Inspect retrieval/memory/indexing through: `packages/screenpipe-mcp/src/index.ts`, `packages/cli/screenpipe/lib/index.js`, `packages/ai-gateway/src/index.ts`.
5. Verify behavior through test/eval files: `packages/screenpipe-mcp/src/export-video.test.ts`, `packages/screenpipe-mcp/src/http-server.test.ts`, `packages/e2e/local/tests.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 YC S26 AI that knows what you've seen, said, or heard. Records everything you do, say, hear 24/7, local, private, secure. 핵심 구조 신호는 Rust, Cargo.toml, README.md, CLAUDE.md, ci, docs이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
