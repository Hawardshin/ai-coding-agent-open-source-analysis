# codervisor/leanspec Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Local clone structure analysis: 1393 files, 506 directories.

## 요약

- 조사 단위: `sources/codervisor__leanspec` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,392 files, 505 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=specs/196-mcp-create-content-field-documentation/README.md, specs/178-rust-mcp-cli-template-loading/README.md, specs/176-rust-mcp-server-test-suite/README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | codervisor/leanspec |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Rust |
| Stars | 262 |
| Forks | 20 |
| License | MIT License |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/codervisor__leanspec](../../../../sources/codervisor__leanspec) |
| Existing report | [reports/clone-structures/codervisor__leanspec.md](../../../clone-structures/codervisor__leanspec.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1392 / 505 |
| Max observed depth | 9 |
| Top directories | .agents, .claude, .gemini, .github, .husky, .lean-spec, bin, deploy, docker, docs, docs-site, hooks, packages, rust, schemas, scripts, skills, specs |
| Top extensions | .md: 458, .tsx: 262, .rs: 195, .ts: 191, .mdx: 99, .json: 40, .svg: 25, .js: 23, .png: 21, (none): 20, .css: 13, .yaml: 9 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/ui | packages workspace | 49 |
| packages/cli | packages workspace | 19 |
| packages/mcp | packages workspace | 4 |
| packages/http-server | packages workspace | 2 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| deploy | deployment surface | 1 |
| docker | documentation surface | 1 |
| docs | documentation surface | 1 |
| docs-site | documentation surface | 1 |
| hooks | top-level component | 1 |
| packages | source boundary | 1 |
| rust | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| specs | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | prepare | husky |
| test | package.json | dev | turbo run dev --filter=@leanspec/ui --filter=@leanspec/http-server |
| serve-dev | package.json | dev:watch | concurrently -n rust,dev -c blue,green "cargo watch -w rust --ignore 'target/**' -x build -s 'node scripts/copy-rust-binaries.mjs --debug'" "pnpm dev" |
| test | package.json | dev:web | turbo run dev:web --filter=@leanspec/ui |
| build | package.json | build | turbo run build |
| build | package.json | build:rust | cd rust && cargo build && cd .. && node scripts/copy-rust-binaries.mjs --debug |
| build | package.json | build:rust:release | cd rust && cargo build --release && cd .. && node scripts/copy-rust-binaries.mjs |
| test | package.json | test | turbo run test |
| test | package.json | test:rust | cargo test --manifest-path rust/Cargo.toml |
| test | package.json | test:watch | vitest |
| test | package.json | test:ui | vitest --ui |
| test | package.json | test:coverage | vitest run --coverage |
| quality | package.json | typecheck | turbo run typecheck |
| quality | package.json | lint | turbo run lint |
| quality | package.json | lint:rust | cargo clippy --manifest-path rust/Cargo.toml -- -D warnings |
| quality | package.json | check:rust | cargo check --manifest-path rust/Cargo.toml |
| quality | package.json | format | turbo run format |
| quality | package.json | format:rust | cargo fmt --manifest-path rust/Cargo.toml |
| quality | package.json | format:rust:check | cargo fmt --manifest-path rust/Cargo.toml -- --check |
| utility | package.json | clean | turbo run clean && cargo clean --manifest-path rust/Cargo.toml |
| serve-dev | package.json | docs:dev | pnpm --filter docs-site start |
| build | package.json | docs:build | pnpm --filter docs-site build |
| quality | package.json | pre-push | pnpm typecheck && pnpm lint:rust |
| test | package.json | pre-release | pnpm build && pnpm typecheck && pnpm test && pnpm lint:rust |
| utility | package.json | prepare-publish | tsx scripts/prepare-publish.ts |
| utility | package.json | restore-packages | tsx scripts/restore-packages.ts |
| utility | package.json | sync-versions:node | tsx scripts/sync-versions.ts |
| utility | package.json | sync-versions:rust | tsx scripts/sync-rust-versions.ts |
| utility | package.json | sync-versions | tsx scripts/sync-versions.ts && tsx scripts/sync-rust-versions.ts |
| utility | package.json | validate-binaries | tsx scripts/validate-platform-binaries.ts |
| utility | package.json | publish:platforms | tsx scripts/publish-platform-packages.ts |
| utility | package.json | publish:main | tsx scripts/publish-main-packages.ts |
| test | package.json | migrate:specs | tsx scripts/migrate-specs-to-issues.ts |
| test | package.json | cli | node bin/leanspec.js |


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
| mcp | [specs/196-mcp-create-content-field-documentation/README.md](../../../../sources/codervisor__leanspec/specs/196-mcp-create-content-field-documentation/README.md) | mcp signal |
| mcp | [specs/178-rust-mcp-cli-template-loading/README.md](../../../../sources/codervisor__leanspec/specs/178-rust-mcp-cli-template-loading/README.md) | mcp signal |
| mcp | [specs/176-rust-mcp-server-test-suite/README.md](../../../../sources/codervisor__leanspec/specs/176-rust-mcp-server-test-suite/README.md) | mcp signal |
| mcp | [specs/172-rust-cli-mcp-npm-distribution/README.md](../../../../sources/codervisor__leanspec/specs/172-rust-cli-mcp-npm-distribution/README.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/codervisor__leanspec/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills-lock.json](../../../../sources/codervisor__leanspec/skills-lock.json) | agentRuntime signal |
| agentRuntime | [specs/164-desktop-ci-build-artifacts/WORKFLOW.yml](../../../../sources/codervisor__leanspec/specs/164-desktop-ci-build-artifacts/WORKFLOW.yml) | agentRuntime signal |
| agentRuntime | [specs/059-programmatic-spec-management/CONTEXT-ENGINEERING.md](../../../../sources/codervisor__leanspec/specs/059-programmatic-spec-management/CONTEXT-ENGINEERING.md) | agentRuntime signal |
| entrypoints | [rust/leanspec-mcp/src/main.rs](../../../../sources/codervisor__leanspec/rust/leanspec-mcp/src/main.rs) | entrypoints signal |
| entrypoints | [rust/leanspec-http/src/main.rs](../../../../sources/codervisor__leanspec/rust/leanspec-http/src/main.rs) | entrypoints signal |
| entrypoints | [rust/leanspec-cli/src/main.rs](../../../../sources/codervisor__leanspec/rust/leanspec-cli/src/main.rs) | entrypoints signal |
| entrypoints | [packages/ui/src/App.css](../../../../sources/codervisor__leanspec/packages/ui/src/App.css) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 23 | [rust/leanspec-mcp/src/main.rs](../../../../sources/codervisor__leanspec/rust/leanspec-mcp/src/main.rs)<br>[rust/leanspec-http/src/main.rs](../../../../sources/codervisor__leanspec/rust/leanspec-http/src/main.rs)<br>[rust/leanspec-cli/src/main.rs](../../../../sources/codervisor__leanspec/rust/leanspec-cli/src/main.rs)<br>[packages/ui/src/App.css](../../../../sources/codervisor__leanspec/packages/ui/src/App.css)<br>[packages/ui/src/App.tsx](../../../../sources/codervisor__leanspec/packages/ui/src/App.tsx)<br>[packages/ui/src/index.css](../../../../sources/codervisor__leanspec/packages/ui/src/index.css)<br>[packages/ui/src/index.ts](../../../../sources/codervisor__leanspec/packages/ui/src/index.ts)<br>[packages/ui/src/main.tsx](../../../../sources/codervisor__leanspec/packages/ui/src/main.tsx) |
| agentRuntime | 90 | [AGENTS.md](../../../../sources/codervisor__leanspec/AGENTS.md)<br>[skills-lock.json](../../../../sources/codervisor__leanspec/skills-lock.json)<br>[specs/164-desktop-ci-build-artifacts/WORKFLOW.yml](../../../../sources/codervisor__leanspec/specs/164-desktop-ci-build-artifacts/WORKFLOW.yml)<br>[specs/059-programmatic-spec-management/CONTEXT-ENGINEERING.md](../../../../sources/codervisor__leanspec/specs/059-programmatic-spec-management/CONTEXT-ENGINEERING.md)<br>[skills/leanspec/SKILL.md](../../../../sources/codervisor__leanspec/skills/leanspec/SKILL.md)<br>[skills/leanspec/references/adapters.md](../../../../sources/codervisor__leanspec/skills/leanspec/references/adapters.md)<br>[skills/leanspec/references/best-practices.md](../../../../sources/codervisor__leanspec/skills/leanspec/references/best-practices.md)<br>[skills/leanspec/references/commands.md](../../../../sources/codervisor__leanspec/skills/leanspec/references/commands.md) |
| mcp | 42 | [specs/196-mcp-create-content-field-documentation/README.md](../../../../sources/codervisor__leanspec/specs/196-mcp-create-content-field-documentation/README.md)<br>[specs/178-rust-mcp-cli-template-loading/README.md](../../../../sources/codervisor__leanspec/specs/178-rust-mcp-cli-template-loading/README.md)<br>[specs/176-rust-mcp-server-test-suite/README.md](../../../../sources/codervisor__leanspec/specs/176-rust-mcp-server-test-suite/README.md)<br>[specs/172-rust-cli-mcp-npm-distribution/README.md](../../../../sources/codervisor__leanspec/specs/172-rust-cli-mcp-npm-distribution/README.md)<br>[specs/170-cli-mcp-core-rust-migration-evaluation/README.md](../../../../sources/codervisor__leanspec/specs/170-cli-mcp-core-rust-migration-evaluation/README.md)<br>[specs/145-mcp-config-auto-setup/README.md](../../../../sources/codervisor__leanspec/specs/145-mcp-config-auto-setup/README.md)<br>[specs/129-mcp-link-tool/README.md](../../../../sources/codervisor__leanspec/specs/129-mcp-link-tool/README.md)<br>[specs/121-mcp-first-agent-experience/README.md](../../../../sources/codervisor__leanspec/specs/121-mcp-first-agent-experience/README.md) |
| retrieval | 39 | [specs/159-leanspec-memory-layer-architecture/README.md](../../../../sources/codervisor__leanspec/specs/159-leanspec-memory-layer-architecture/README.md)<br>[rust/leanspec-core/src/adapters/markdown/graph.rs](../../../../sources/codervisor__leanspec/rust/leanspec-core/src/adapters/markdown/graph.rs)<br>[packages/ui/index.html](../../../../sources/codervisor__leanspec/packages/ui/index.html)<br>[packages/ui/src/index.css](../../../../sources/codervisor__leanspec/packages/ui/src/index.css)<br>[packages/ui/src/index.ts](../../../../sources/codervisor__leanspec/packages/ui/src/index.ts)<br>[packages/ui/src/types/index.ts](../../../../sources/codervisor__leanspec/packages/ui/src/types/index.ts)<br>[packages/ui/src/types/generated/index.ts](../../../../sources/codervisor__leanspec/packages/ui/src/types/generated/index.ts)<br>[packages/ui/src/lib/index.ts](../../../../sources/codervisor__leanspec/packages/ui/src/lib/index.ts) |
| spec | 122 | [lean-spec.code-workspace](../../../../sources/codervisor__leanspec/lean-spec.code-workspace)<br>[specs/263-rust-spec-handler-consolidation/README.md](../../../../sources/codervisor__leanspec/specs/263-rust-spec-handler-consolidation/README.md)<br>[specs/250-structured-spec-hierarchy-management/README.md](../../../../sources/codervisor__leanspec/specs/250-structured-spec-hierarchy-management/README.md)<br>[specs/248-spec-detail-markdown-enhancements/README.md](../../../../sources/codervisor__leanspec/specs/248-spec-detail-markdown-enhancements/README.md)<br>[specs/242-ai-sdk-rust-migration/DESIGN.md](../../../../sources/codervisor__leanspec/specs/242-ai-sdk-rust-migration/DESIGN.md)<br>[specs/241-rust-monorepo-architecture-refactoring/README.md](../../../../sources/codervisor__leanspec/specs/241-rust-monorepo-architecture-refactoring/README.md)<br>[specs/159-leanspec-memory-layer-architecture/README.md](../../../../sources/codervisor__leanspec/specs/159-leanspec-memory-layer-architecture/README.md)<br>[specs/155-atomic-spec-file-operations/README.md](../../../../sources/codervisor__leanspec/specs/155-atomic-spec-file-operations/README.md) |
| eval | 167 | [lean-spec.code-workspace](../../../../sources/codervisor__leanspec/lean-spec.code-workspace)<br>[specs/364-cloud-observability-logging/README.md](../../../../sources/codervisor__leanspec/specs/364-cloud-observability-logging/README.md)<br>[specs/284-state-management-library-evaluation/README.md](../../../../sources/codervisor__leanspec/specs/284-state-management-library-evaluation/README.md)<br>[specs/266-test-coverage-improvements/README.md](../../../../sources/codervisor__leanspec/specs/266-test-coverage-improvements/README.md)<br>[specs/263-rust-spec-handler-consolidation/README.md](../../../../sources/codervisor__leanspec/specs/263-rust-spec-handler-consolidation/README.md)<br>[specs/250-structured-spec-hierarchy-management/README.md](../../../../sources/codervisor__leanspec/specs/250-structured-spec-hierarchy-management/README.md)<br>[specs/248-spec-detail-markdown-enhancements/README.md](../../../../sources/codervisor__leanspec/specs/248-spec-detail-markdown-enhancements/README.md)<br>[specs/240-rust-aisdk-migration-evaluation/README.md](../../../../sources/codervisor__leanspec/specs/240-rust-aisdk-migration-evaluation/README.md) |
| security | 6 | [specs/056-docs-site-accuracy-audit/AUDIT-RESULTS.md](../../../../sources/codervisor__leanspec/specs/056-docs-site-accuracy-audit/AUDIT-RESULTS.md)<br>[specs/056-docs-site-accuracy-audit/README.md](../../../../sources/codervisor__leanspec/specs/056-docs-site-accuracy-audit/README.md)<br>[specs/032-console-log-chalk-security/README.md](../../../../sources/codervisor__leanspec/specs/032-console-log-chalk-security/README.md)<br>[rust/leanspec-http/src/middleware/auth.rs](../../../../sources/codervisor__leanspec/rust/leanspec-http/src/middleware/auth.rs)<br>[rust/leanspec-cli/tests/fixtures/tui-sample/010-auth/README.md](../../../../sources/codervisor__leanspec/rust/leanspec-cli/tests/fixtures/tui-sample/010-auth/README.md)<br>[packages/ui/src/components/library/ai-elements/sandbox.tsx](../../../../sources/codervisor__leanspec/packages/ui/src/components/library/ai-elements/sandbox.tsx) |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/codervisor__leanspec/.github/workflows/ci.yml)<br>[.github/workflows/copilot-setup-steps.yml](../../../../sources/codervisor__leanspec/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/docker.yml](../../../../sources/codervisor__leanspec/.github/workflows/docker.yml)<br>[.github/workflows/publish.yml](../../../../sources/codervisor__leanspec/.github/workflows/publish.yml) |
| container | 6 | [docker/Dockerfile](../../../../sources/codervisor__leanspec/docker/Dockerfile)<br>[deploy/fly.toml](../../../../sources/codervisor__leanspec/deploy/fly.toml)<br>[deploy/README.md](../../../../sources/codervisor__leanspec/deploy/README.md)<br>[deploy/render.yaml](../../../../sources/codervisor__leanspec/deploy/render.yaml)<br>[deploy/examples/.env.example](../../../../sources/codervisor__leanspec/deploy/examples/.env.example)<br>[deploy/examples/docker-compose.yml](../../../../sources/codervisor__leanspec/deploy/examples/docker-compose.yml) |
| instruction | 6 | [AGENTS.md](../../../../sources/codervisor__leanspec/AGENTS.md)<br>[CLAUDE.md](../../../../sources/codervisor__leanspec/CLAUDE.md)<br>[rust/leanspec-cli/templates/AGENTS.md](../../../../sources/codervisor__leanspec/rust/leanspec-cli/templates/AGENTS.md)<br>[packages/cli/templates/standard/AGENTS.md](../../../../sources/codervisor__leanspec/packages/cli/templates/standard/AGENTS.md)<br>[packages/cli/templates/detailed/AGENTS.md](../../../../sources/codervisor__leanspec/packages/cli/templates/detailed/AGENTS.md)<br>[docs-site/AGENTS.md](../../../../sources/codervisor__leanspec/docs-site/AGENTS.md) |
| docs | 434 | [README.md](../../../../sources/codervisor__leanspec/README.md)<br>[specs/382-pivot-implementation-plan/README.md](../../../../sources/codervisor__leanspec/specs/382-pivot-implementation-plan/README.md)<br>[specs/378-skills-repo-reorganization/README.md](../../../../sources/codervisor__leanspec/specs/378-skills-repo-reorganization/README.md)<br>[specs/377-tui-ux-feedback-defaults-settings/README.md](../../../../sources/codervisor__leanspec/specs/377-tui-ux-feedback-defaults-settings/README.md)<br>[specs/376-tui-testing-snapshot-e2e/README.md](../../../../sources/codervisor__leanspec/specs/376-tui-testing-snapshot-e2e/README.md)<br>[specs/374-tui-realtime-file-watch/README.md](../../../../sources/codervisor__leanspec/specs/374-tui-realtime-file-watch/README.md)<br>[specs/373-tui-polish-scrollbar-theme-board/README.md](../../../../sources/codervisor__leanspec/specs/373-tui-polish-scrollbar-theme-board/README.md)<br>[specs/372-tui-project-management/README.md](../../../../sources/codervisor__leanspec/specs/372-tui-project-management/README.md) |
| config | 21 | [package.json](../../../../sources/codervisor__leanspec/package.json)<br>[pnpm-workspace.yaml](../../../../sources/codervisor__leanspec/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/codervisor__leanspec/tsconfig.json)<br>[turbo.json](../../../../sources/codervisor__leanspec/turbo.json)<br>[rust/Cargo.lock](../../../../sources/codervisor__leanspec/rust/Cargo.lock)<br>[rust/Cargo.toml](../../../../sources/codervisor__leanspec/rust/Cargo.toml)<br>[rust/leanspec-mcp/Cargo.toml](../../../../sources/codervisor__leanspec/rust/leanspec-mcp/Cargo.toml)<br>[rust/leanspec-http/Cargo.toml](../../../../sources/codervisor__leanspec/rust/leanspec-http/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 167 | [lean-spec.code-workspace](../../../../sources/codervisor__leanspec/lean-spec.code-workspace)<br>[specs/364-cloud-observability-logging/README.md](../../../../sources/codervisor__leanspec/specs/364-cloud-observability-logging/README.md)<br>[specs/284-state-management-library-evaluation/README.md](../../../../sources/codervisor__leanspec/specs/284-state-management-library-evaluation/README.md)<br>[specs/266-test-coverage-improvements/README.md](../../../../sources/codervisor__leanspec/specs/266-test-coverage-improvements/README.md)<br>[specs/263-rust-spec-handler-consolidation/README.md](../../../../sources/codervisor__leanspec/specs/263-rust-spec-handler-consolidation/README.md)<br>[specs/250-structured-spec-hierarchy-management/README.md](../../../../sources/codervisor__leanspec/specs/250-structured-spec-hierarchy-management/README.md) |
| CI workflows | 4 | [.github/workflows/ci.yml](../../../../sources/codervisor__leanspec/.github/workflows/ci.yml)<br>[.github/workflows/copilot-setup-steps.yml](../../../../sources/codervisor__leanspec/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/docker.yml](../../../../sources/codervisor__leanspec/.github/workflows/docker.yml)<br>[.github/workflows/publish.yml](../../../../sources/codervisor__leanspec/.github/workflows/publish.yml) |
| Containers / deploy | 6 | [docker/Dockerfile](../../../../sources/codervisor__leanspec/docker/Dockerfile)<br>[deploy/fly.toml](../../../../sources/codervisor__leanspec/deploy/fly.toml)<br>[deploy/README.md](../../../../sources/codervisor__leanspec/deploy/README.md)<br>[deploy/render.yaml](../../../../sources/codervisor__leanspec/deploy/render.yaml)<br>[deploy/examples/.env.example](../../../../sources/codervisor__leanspec/deploy/examples/.env.example)<br>[deploy/examples/docker-compose.yml](../../../../sources/codervisor__leanspec/deploy/examples/docker-compose.yml) |
| Security / policy | 6 | [specs/056-docs-site-accuracy-audit/AUDIT-RESULTS.md](../../../../sources/codervisor__leanspec/specs/056-docs-site-accuracy-audit/AUDIT-RESULTS.md)<br>[specs/056-docs-site-accuracy-audit/README.md](../../../../sources/codervisor__leanspec/specs/056-docs-site-accuracy-audit/README.md)<br>[specs/032-console-log-chalk-security/README.md](../../../../sources/codervisor__leanspec/specs/032-console-log-chalk-security/README.md)<br>[rust/leanspec-http/src/middleware/auth.rs](../../../../sources/codervisor__leanspec/rust/leanspec-http/src/middleware/auth.rs)<br>[rust/leanspec-cli/tests/fixtures/tui-sample/010-auth/README.md](../../../../sources/codervisor__leanspec/rust/leanspec-cli/tests/fixtures/tui-sample/010-auth/README.md)<br>[packages/ui/src/components/library/ai-elements/sandbox.tsx](../../../../sources/codervisor__leanspec/packages/ui/src/components/library/ai-elements/sandbox.tsx) |
| Agent instructions | 6 | [AGENTS.md](../../../../sources/codervisor__leanspec/AGENTS.md)<br>[CLAUDE.md](../../../../sources/codervisor__leanspec/CLAUDE.md)<br>[rust/leanspec-cli/templates/AGENTS.md](../../../../sources/codervisor__leanspec/rust/leanspec-cli/templates/AGENTS.md)<br>[packages/cli/templates/standard/AGENTS.md](../../../../sources/codervisor__leanspec/packages/cli/templates/standard/AGENTS.md)<br>[packages/cli/templates/detailed/AGENTS.md](../../../../sources/codervisor__leanspec/packages/cli/templates/detailed/AGENTS.md)<br>[docs-site/AGENTS.md](../../../../sources/codervisor__leanspec/docs-site/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `specs/196-mcp-create-content-field-documentation/README.md`, `specs/178-rust-mcp-cli-template-loading/README.md`, `specs/176-rust-mcp-server-test-suite/README.md`.
2. Trace execution through entrypoints: `rust/leanspec-mcp/src/main.rs`, `rust/leanspec-http/src/main.rs`, `rust/leanspec-cli/src/main.rs`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills-lock.json`, `specs/164-desktop-ci-build-artifacts/WORKFLOW.yml`.
4. Inspect retrieval/memory/indexing through: `specs/159-leanspec-memory-layer-architecture/README.md`, `rust/leanspec-core/src/adapters/markdown/graph.rs`, `packages/ui/index.html`.
5. Verify behavior through test/eval files: `lean-spec.code-workspace`, `specs/364-cloud-observability-logging/README.md`, `specs/284-state-management-library-evaluation/README.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1393 files, 506 directories.. 핵심 구조 신호는 Rust, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
