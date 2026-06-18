# ruvnet/agent-harness-generator 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

🛠️ The meta-harness for AI agents — scaffold your own focused, branded agent harness with its own npx CLI, MCP server, memory, learning loop, and witness-signed releases. Works with Claude Code, Codex, pi.dev, Hermes, OpenClaw, and RVM (hardware-isolated sandbox).

## 요약

- 조사 단위: `sources/ruvnet__agent-harness-generator` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,077 files, 415 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/create-agent-harness/src/mcp-cmd.ts, packages/create-agent-harness/src/mcp-scan.ts, packages/create-agent-harness/__tests__/mcp-scan.test.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ruvnet/agent-harness-generator |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 164 |
| Forks | 15 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/ruvnet__agent-harness-generator](../../../../sources/ruvnet__agent-harness-generator) |
| 기존 보고서 | [reports/global-trending/repositories/ruvnet__agent-harness-generator.md](../../../global-trending/repositories/ruvnet__agent-harness-generator.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1077 / 415 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | __tests__, .claude-plugin, .codex, .github, apps, crates, docs, examples, examples-packages, packages, scripts |
| 상위 확장자 | .tmpl: 294, .ts: 235, .md: 176, .json: 139, .mjs: 71, (none): 59, .lean: 33, .toml: 20, .rs: 19, .tsx: 10, .yml: 8, .png: 6 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/create-agent-harness | packages workspace | 128 |
| docs | documentation surface | 45 |
| packages/kernel-js | packages workspace | 19 |
| packages/harness | packages workspace | 14 |
| packages/router | packages workspace | 8 |
| packages/host-copilot | packages workspace | 7 |
| packages/host-opencode | packages workspace | 7 |
| packages/bench | packages workspace | 6 |
| packages/host-claude-code | packages workspace | 6 |
| packages/host-codex | packages workspace | 6 |
| packages/host-github-actions | packages workspace | 6 |
| packages/host-hermes | packages workspace | 6 |
| packages/host-openclaw | packages workspace | 6 |
| packages/host-pi-dev | packages workspace | 6 |
| packages/host-rvm | packages workspace | 6 |
| packages/sdk | packages workspace | 6 |
| packages/vertical-base | packages workspace | 6 |
| packages/vertical-trading | packages workspace | 6 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | node scripts/build-ordered.mjs |
| test | package.json | test | npm run -ws --if-present test |
| quality | package.json | lint | npm run -ws --if-present lint |
| build | package.json | build:wasm | wasm-pack build crates/kernel-wasm --target bundler --out-dir ../../packages/kernel-js/pkg --release |
| build | package.json | build:napi | cd crates/kernel-napi && napi build --platform --release --output-dir ../../packages/kernel-js/native |
| test | package.json | test:rust | cargo test --workspace |
| quality | package.json | fmt:rust | cargo fmt --all |
| quality | package.json | clippy | cargo clippy --workspace --all-targets -- -D warnings |
| utility | package.json | smoke | node scripts/smoke.mjs |
| test | package.json | pretest | npm run build |


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
| mcp | [packages/create-agent-harness/src/mcp-cmd.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/src/mcp-cmd.ts) | mcp signal |
| mcp | [packages/create-agent-harness/src/mcp-scan.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/src/mcp-scan.ts) | mcp signal |
| mcp | [packages/create-agent-harness/__tests__/mcp-scan.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/__tests__/mcp-scan.test.ts) | mcp signal |
| mcp | [docs/adrs/ADR-022-mcp-primitive.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-022-mcp-primitive.md) | mcp signal |
| agentRuntime | [packages/kernel-js/src/memory-rvf.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/memory-rvf.ts) | agentRuntime signal |
| agentRuntime | [packages/kernel-js/src/memory.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/memory.ts) | agentRuntime signal |
| agentRuntime | [packages/kernel-js/__tests__/memory-rvf.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/__tests__/memory-rvf.test.ts) | agentRuntime signal |
| agentRuntime | [packages/kernel-js/__tests__/memory.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/__tests__/memory.test.ts) | agentRuntime signal |
| entrypoints | [packages/vertical-trading/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vertical-base/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/src/index.ts) | entrypoints signal |
| entrypoints | [packages/sdk/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/src/index.ts) | entrypoints signal |
| entrypoints | [packages/router/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 110 | [packages/vertical-trading/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/src/index.ts)<br>[packages/vertical-base/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/src/index.ts)<br>[packages/sdk/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/src/index.ts)<br>[packages/router/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/src/index.ts)<br>[packages/kernel-js/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/index.ts)<br>[packages/host-rvm/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/host-rvm/src/index.ts)<br>[packages/host-pi-dev/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/host-pi-dev/src/index.ts)<br>[packages/host-opencode/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/host-opencode/src/index.ts) |
| agentRuntime | 145 | [packages/kernel-js/src/memory-rvf.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/memory-rvf.ts)<br>[packages/kernel-js/src/memory.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/memory.ts)<br>[packages/kernel-js/__tests__/memory-rvf.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/__tests__/memory-rvf.test.ts)<br>[packages/kernel-js/__tests__/memory.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/__tests__/memory.test.ts)<br>[packages/create-agent-harness/templates/vertical_trading/src/agents/executor.ts.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_trading/src/agents/executor.ts.tmpl)<br>[packages/create-agent-harness/templates/vertical_trading/src/agents/market-watcher.ts.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_trading/src/agents/market-watcher.ts.tmpl)<br>[packages/create-agent-harness/templates/vertical_trading/src/agents/postmortem.ts.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_trading/src/agents/postmortem.ts.tmpl)<br>[packages/create-agent-harness/templates/vertical_trading/src/agents/risk-checker.ts.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_trading/src/agents/risk-checker.ts.tmpl) |
| mcp | 10 | [packages/create-agent-harness/src/mcp-cmd.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/src/mcp-cmd.ts)<br>[packages/create-agent-harness/src/mcp-scan.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/src/mcp-scan.ts)<br>[packages/create-agent-harness/__tests__/mcp-scan.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/__tests__/mcp-scan.test.ts)<br>[docs/adrs/ADR-022-mcp-primitive.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-022-mcp-primitive.md)<br>[crates/kernel/src/mcp.rs](../../../../sources/ruvnet__agent-harness-generator/crates/kernel/src/mcp.rs)<br>[crates/kernel/benches/mcp_validate.rs](../../../../sources/ruvnet__agent-harness-generator/crates/kernel/benches/mcp_validate.rs)<br>[apps/web-ui/src/generator/mcp.ts](../../../../sources/ruvnet__agent-harness-generator/apps/web-ui/src/generator/mcp.ts)<br>[apps/web-ui/src/generator/__tests__/mcp.test.ts](../../../../sources/ruvnet__agent-harness-generator/apps/web-ui/src/generator/__tests__/mcp.test.ts) |
| retrieval | 42 | [packages/vertical-trading/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/src/index.ts)<br>[packages/vertical-base/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/src/index.ts)<br>[packages/sdk/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/src/index.ts)<br>[packages/router/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/src/index.ts)<br>[packages/kernel-js/src/index.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/index.ts)<br>[packages/kernel-js/src/memory-rvf.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/memory-rvf.ts)<br>[packages/kernel-js/src/memory.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/src/memory.ts)<br>[packages/kernel-js/__tests__/memory-rvf.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/__tests__/memory-rvf.test.ts) |
| spec | 106 | [packages/create-agent-harness/templates/vertical_gaming/.claude/commands/design-doc-diff.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_gaming/.claude/commands/design-doc-diff.md.tmpl)<br>[docs/ARCHITECTURE.md](../../../../sources/ruvnet__agent-harness-generator/docs/ARCHITECTURE.md)<br>[docs/adrs/ADR-001-goals-and-non-goals.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-001-goals-and-non-goals.md)<br>[docs/adrs/ADR-002-kernel-boundary.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-002-kernel-boundary.md)<br>[docs/adrs/ADR-002a-rust-wasm-napi-publishing-pipeline.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-002a-rust-wasm-napi-publishing-pipeline.md)<br>[docs/adrs/ADR-003-generator-architecture.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-003-generator-architecture.md)<br>[docs/adrs/ADR-004-host-integration-model.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-004-host-integration-model.md)<br>[docs/adrs/ADR-005-marketplace-plugin-design.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-005-marketplace-plugin-design.md) |
| eval | 195 | [scripts/bench-baseline.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/bench-baseline.mjs)<br>[packages/vertical-trading/__tests__/pack.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/__tests__/pack.test.ts)<br>[packages/vertical-base/__tests__/base.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/__tests__/base.test.ts)<br>[packages/sdk/__tests__/sdk.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/__tests__/sdk.test.ts)<br>[packages/router/__tests__/native.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/__tests__/native.test.ts)<br>[packages/router/__tests__/router.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/__tests__/router.test.ts)<br>[packages/router/__tests__/train.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/__tests__/train.test.ts)<br>[packages/kernel-js/__tests__/dispatch.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/__tests__/dispatch.test.ts) |
| security | 12 | [SECURITY.md](../../../../sources/ruvnet__agent-harness-generator/SECURITY.md)<br>[scripts/audit-deps.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/audit-deps.mjs)<br>[scripts/native-router-guard.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/native-router-guard.mjs)<br>[scripts/path-guard.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/path-guard.mjs)<br>[packages/create-agent-harness/templates/vertical_repo-maintainer/src/agents/security.ts.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_repo-maintainer/src/agents/security.ts.tmpl)<br>[packages/create-agent-harness/src/audit-cmd.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/src/audit-cmd.ts)<br>[packages/create-agent-harness/__tests__/security-codeql.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/__tests__/security-codeql.test.ts)<br>[docs/adrs/ADR-015-naming-and-branding-policy.md](../../../../sources/ruvnet__agent-harness-generator/docs/adrs/ADR-015-naming-and-branding-policy.md) |
| ci | 8 | [.github/workflows/ci.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/ci.yml)<br>[.github/workflows/draco.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/draco.yml)<br>[.github/workflows/examples-packages-smoke.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/examples-packages-smoke.yml)<br>[.github/workflows/pages-monitor.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/pages-monitor.yml)<br>[.github/workflows/pages.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/pages.yml)<br>[.github/workflows/publish.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/publish.yml)<br>[.github/workflows/published-smoke.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/published-smoke.yml)<br>[.github/workflows/security.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/security.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 47 | [packages/create-agent-harness/templates/vertical_trading/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_trading/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_support/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_support/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_sales/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_sales/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_ruview/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_ruview/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_research/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_research/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_repo-maintainer/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_repo-maintainer/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_marketing/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_marketing/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_legal/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_legal/CLAUDE.md.tmpl) |
| docs | 217 | [README.md](../../../../sources/ruvnet__agent-harness-generator/README.md)<br>[packages/vertical-trading/README.md](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/README.md)<br>[packages/vertical-base/README.md](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/README.md)<br>[packages/sdk/README.md](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/README.md)<br>[packages/router/README.md](../../../../sources/ruvnet__agent-harness-generator/packages/router/README.md)<br>[packages/kernel-js/README.md](../../../../sources/ruvnet__agent-harness-generator/packages/kernel-js/README.md)<br>[packages/host-rvm/README.md](../../../../sources/ruvnet__agent-harness-generator/packages/host-rvm/README.md)<br>[packages/host-pi-dev/README.md](../../../../sources/ruvnet__agent-harness-generator/packages/host-pi-dev/README.md) |
| config | 82 | [Cargo.toml](../../../../sources/ruvnet__agent-harness-generator/Cargo.toml)<br>[package.json](../../../../sources/ruvnet__agent-harness-generator/package.json)<br>[packages/vertical-trading/package.json](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/package.json)<br>[packages/vertical-trading/tsconfig.json](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/tsconfig.json)<br>[packages/vertical-base/package.json](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/package.json)<br>[packages/vertical-base/tsconfig.json](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/tsconfig.json)<br>[packages/sdk/package.json](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/package.json)<br>[packages/sdk/tsconfig.json](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 195 | [scripts/bench-baseline.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/bench-baseline.mjs)<br>[packages/vertical-trading/__tests__/pack.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-trading/__tests__/pack.test.ts)<br>[packages/vertical-base/__tests__/base.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/vertical-base/__tests__/base.test.ts)<br>[packages/sdk/__tests__/sdk.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/sdk/__tests__/sdk.test.ts)<br>[packages/router/__tests__/native.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/__tests__/native.test.ts)<br>[packages/router/__tests__/router.test.ts](../../../../sources/ruvnet__agent-harness-generator/packages/router/__tests__/router.test.ts) |
| CI workflow | 8 | [.github/workflows/ci.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/ci.yml)<br>[.github/workflows/draco.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/draco.yml)<br>[.github/workflows/examples-packages-smoke.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/examples-packages-smoke.yml)<br>[.github/workflows/pages-monitor.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/pages-monitor.yml)<br>[.github/workflows/pages.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/pages.yml)<br>[.github/workflows/publish.yml](../../../../sources/ruvnet__agent-harness-generator/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 12 | [SECURITY.md](../../../../sources/ruvnet__agent-harness-generator/SECURITY.md)<br>[scripts/audit-deps.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/audit-deps.mjs)<br>[scripts/native-router-guard.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/native-router-guard.mjs)<br>[scripts/path-guard.mjs](../../../../sources/ruvnet__agent-harness-generator/scripts/path-guard.mjs)<br>[packages/create-agent-harness/templates/vertical_repo-maintainer/src/agents/security.ts.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_repo-maintainer/src/agents/security.ts.tmpl)<br>[packages/create-agent-harness/src/audit-cmd.ts](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/src/audit-cmd.ts) |
| 에이전트 지시문 | 47 | [packages/create-agent-harness/templates/vertical_trading/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_trading/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_support/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_support/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_sales/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_sales/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_ruview/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_ruview/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_research/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_research/CLAUDE.md.tmpl)<br>[packages/create-agent-harness/templates/vertical_repo-maintainer/CLAUDE.md.tmpl](../../../../sources/ruvnet__agent-harness-generator/packages/create-agent-harness/templates/vertical_repo-maintainer/CLAUDE.md.tmpl) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/create-agent-harness/src/mcp-cmd.ts`, `packages/create-agent-harness/src/mcp-scan.ts`, `packages/create-agent-harness/__tests__/mcp-scan.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/vertical-trading/src/index.ts`, `packages/vertical-base/src/index.ts`, `packages/sdk/src/index.ts`.
3. agent/tool runtime 매핑: `packages/kernel-js/src/memory-rvf.ts`, `packages/kernel-js/src/memory.ts`, `packages/kernel-js/__tests__/memory-rvf.test.ts`.
4. retrieval/memory/indexing 확인: `packages/vertical-trading/src/index.ts`, `packages/vertical-base/src/index.ts`, `packages/sdk/src/index.ts`.
5. test/eval 파일로 동작 검증: `scripts/bench-baseline.mjs`, `packages/vertical-trading/__tests__/pack.test.ts`, `packages/vertical-base/__tests__/base.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 🛠️ The meta harness for AI agents — scaffold your own focused, branded agent harness with its own npx CLI, MCP server, . 핵심 구조 신호는 TypeScript, package.json, Cargo.toml, README.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
