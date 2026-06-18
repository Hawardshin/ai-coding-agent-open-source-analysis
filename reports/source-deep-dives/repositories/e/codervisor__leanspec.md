# codervisor/leanspec 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 1393 files, 506 directories.

## 요약

- 조사 단위: `sources/codervisor__leanspec` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,392 files, 505 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=specs/196-mcp-create-content-field-documentation/README.md, specs/178-rust-mcp-cli-template-loading/README.md, specs/176-rust-mcp-server-test-suite/README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | codervisor/leanspec |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Rust |
| Stars | 262 |
| Forks | 20 |
| License | MIT License |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/codervisor__leanspec](../../../../sources/codervisor__leanspec) |
| 기존 보고서 | [reports/clone-structures/codervisor__leanspec.md](../../../clone-structures/codervisor__leanspec.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1392 / 505 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .agents, .claude, .gemini, .github, .husky, .lean-spec, bin, deploy, docker, docs, docs-site, hooks, packages, rust, schemas, scripts, skills, specs |
| 상위 확장자 | .md: 458, .tsx: 262, .rs: 195, .ts: 191, .mdx: 99, .json: 40, .svg: 25, .js: 23, .png: 21, (none): 20, .css: 13, .yaml: 9 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 167 | [lean-spec.code-workspace](../../../../sources/codervisor__leanspec/lean-spec.code-workspace)<br>[specs/364-cloud-observability-logging/README.md](../../../../sources/codervisor__leanspec/specs/364-cloud-observability-logging/README.md)<br>[specs/284-state-management-library-evaluation/README.md](../../../../sources/codervisor__leanspec/specs/284-state-management-library-evaluation/README.md)<br>[specs/266-test-coverage-improvements/README.md](../../../../sources/codervisor__leanspec/specs/266-test-coverage-improvements/README.md)<br>[specs/263-rust-spec-handler-consolidation/README.md](../../../../sources/codervisor__leanspec/specs/263-rust-spec-handler-consolidation/README.md)<br>[specs/250-structured-spec-hierarchy-management/README.md](../../../../sources/codervisor__leanspec/specs/250-structured-spec-hierarchy-management/README.md) |
| CI workflow | 4 | [.github/workflows/ci.yml](../../../../sources/codervisor__leanspec/.github/workflows/ci.yml)<br>[.github/workflows/copilot-setup-steps.yml](../../../../sources/codervisor__leanspec/.github/workflows/copilot-setup-steps.yml)<br>[.github/workflows/docker.yml](../../../../sources/codervisor__leanspec/.github/workflows/docker.yml)<br>[.github/workflows/publish.yml](../../../../sources/codervisor__leanspec/.github/workflows/publish.yml) |
| 컨테이너/배포 | 6 | [docker/Dockerfile](../../../../sources/codervisor__leanspec/docker/Dockerfile)<br>[deploy/fly.toml](../../../../sources/codervisor__leanspec/deploy/fly.toml)<br>[deploy/README.md](../../../../sources/codervisor__leanspec/deploy/README.md)<br>[deploy/render.yaml](../../../../sources/codervisor__leanspec/deploy/render.yaml)<br>[deploy/examples/.env.example](../../../../sources/codervisor__leanspec/deploy/examples/.env.example)<br>[deploy/examples/docker-compose.yml](../../../../sources/codervisor__leanspec/deploy/examples/docker-compose.yml) |
| 보안/정책 | 6 | [specs/056-docs-site-accuracy-audit/AUDIT-RESULTS.md](../../../../sources/codervisor__leanspec/specs/056-docs-site-accuracy-audit/AUDIT-RESULTS.md)<br>[specs/056-docs-site-accuracy-audit/README.md](../../../../sources/codervisor__leanspec/specs/056-docs-site-accuracy-audit/README.md)<br>[specs/032-console-log-chalk-security/README.md](../../../../sources/codervisor__leanspec/specs/032-console-log-chalk-security/README.md)<br>[rust/leanspec-http/src/middleware/auth.rs](../../../../sources/codervisor__leanspec/rust/leanspec-http/src/middleware/auth.rs)<br>[rust/leanspec-cli/tests/fixtures/tui-sample/010-auth/README.md](../../../../sources/codervisor__leanspec/rust/leanspec-cli/tests/fixtures/tui-sample/010-auth/README.md)<br>[packages/ui/src/components/library/ai-elements/sandbox.tsx](../../../../sources/codervisor__leanspec/packages/ui/src/components/library/ai-elements/sandbox.tsx) |
| 에이전트 지시문 | 6 | [AGENTS.md](../../../../sources/codervisor__leanspec/AGENTS.md)<br>[CLAUDE.md](../../../../sources/codervisor__leanspec/CLAUDE.md)<br>[rust/leanspec-cli/templates/AGENTS.md](../../../../sources/codervisor__leanspec/rust/leanspec-cli/templates/AGENTS.md)<br>[packages/cli/templates/standard/AGENTS.md](../../../../sources/codervisor__leanspec/packages/cli/templates/standard/AGENTS.md)<br>[packages/cli/templates/detailed/AGENTS.md](../../../../sources/codervisor__leanspec/packages/cli/templates/detailed/AGENTS.md)<br>[docs-site/AGENTS.md](../../../../sources/codervisor__leanspec/docs-site/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `specs/196-mcp-create-content-field-documentation/README.md`, `specs/178-rust-mcp-cli-template-loading/README.md`, `specs/176-rust-mcp-server-test-suite/README.md`.
2. entrypoint를 따라 실행 흐름 확인: `rust/leanspec-mcp/src/main.rs`, `rust/leanspec-http/src/main.rs`, `rust/leanspec-cli/src/main.rs`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills-lock.json`, `specs/164-desktop-ci-build-artifacts/WORKFLOW.yml`.
4. retrieval/memory/indexing 확인: `specs/159-leanspec-memory-layer-architecture/README.md`, `rust/leanspec-core/src/adapters/markdown/graph.rs`, `packages/ui/index.html`.
5. test/eval 파일로 동작 검증: `lean-spec.code-workspace`, `specs/364-cloud-observability-logging/README.md`, `specs/284-state-management-library-evaluation/README.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1393 files, 506 directories.. 핵심 구조 신호는 Rust, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
