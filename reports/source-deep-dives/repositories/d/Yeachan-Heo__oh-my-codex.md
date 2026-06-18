# Yeachan-Heo/oh-my-codex 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 1197 files, 237 directories.

## 요약

- 조사 단위: `sources/Yeachan-Heo__oh-my-codex` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,197 files, 237 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/team/mcp-comm.ts, src/team/__tests__/mcp-comm.test.ts, src/mcp/bootstrap.ts이고, 의존성 단서는 codex, modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Yeachan-Heo/oh-my-codex |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/Yeachan-Heo__oh-my-codex](../../../../sources/Yeachan-Heo__oh-my-codex) |
| 기존 보고서 | [reports/clone-structures/Yeachan-Heo__oh-my-codex.md](../../../clone-structures/Yeachan-Heo__oh-my-codex.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1197 / 237 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .agents, .github, .gjc, crates, docs, missions, notes, playground, plugins, prompts, skills, src, templates |
| 상위 확장자 | .ts: 699, .md: 382, .rs: 37, .json: 20, .py: 13, .toml: 8, .yml: 8, .sh: 6, .html: 5, .txt: 5, (none): 5, .lock: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 194 |
| docs | documentation surface | 40 |
| crates/omx-api | crates workspace | 3 |
| crates/omx-sparkshell | crates workspace | 3 |
| crates/omx-explore | crates workspace | 2 |
| crates/omx-mux | crates workspace | 2 |
| crates/omx-runtime | crates workspace | 2 |
| crates/omx-runtime-core | crates workspace | 2 |
| .github | ci surface | 1 |
| crates | source boundary | 1 |
| missions | top-level component | 1 |
| notes | top-level component | 1 |
| playground | top-level component | 1 |
| plugins | top-level component | 1 |
| prompts | top-level component | 1 |
| skills | top-level component | 1 |
| templates | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | node -e "const fs=require('fs'); fs.rmSync('dist',{recursive:true,force:true});" && tsc && node -e "require('fs').chmodSync('dist/cli/omx.js', 0o755)" |
| build | package.json | build:explore | cargo build -p omx-explore-harness |
| build | package.json | build:full | npm run build && npm run build:explore:release && npm run build:sparkshell && npm run build:api |
| build | package.json | build:explore:release | node dist/scripts/build-explore-harness.js |
| quality | package.json | check:no-unused | tsc -p tsconfig.no-unused.json |
| build | package.json | clean:native-package-assets | node dist/scripts/cleanup-explore-harness.js |
| serve-dev | package.json | dev | tsc --watch |
| quality | package.json | lint | biome lint src |
| build | package.json | prepack | npm run build && npm run verify:native-agents && npm run sync:plugin && npm run verify:plugin-bundle && npm run clean:native-package-assets |
| build | package.json | postinstall | node -e "const fs=require('fs');const p='./dist/scripts/postinstall.js';if(fs.existsSync(p))import(p).then(m=>m.main?.()).catch(e=>console.warn('[omx] Postinstall skipped after a non-fatal error: '+(e?.message??e)))" |
| build | package.json | setup | node dist/cli/omx.js setup |
| build | package.json | doctor | node dist/cli/omx.js doctor |
| utility | package.json | ask:claude | ./src/scripts/ask-claude.sh |
| utility | package.json | ask:gemini | ./src/scripts/ask-gemini.sh |
| test | package.json | test:explore | cargo test -p omx-explore-harness && node --test dist/cli/__tests__/explore.test.js dist/hooks/__tests__/explore-routing.test.js dist/hooks/__tests__/explore-sparkshell-guidance-contract.test.js |
| test | package.json | test:team:cross-rebase-smoke | npm run build && npm run test:team:cross-rebase-smoke:compiled |
| test | package.json | test:team:cross-rebase-smoke:compiled | node dist/scripts/run-test-files.js dist/team/__tests__/cross-rebase-smoke.test.js |
| test | package.json | test:team:worker-runtime-identity | npm run build && npm run test:team:worker-runtime-identity:compiled |
| test | package.json | test:team:worker-runtime-identity:compiled | node dist/scripts/run-test-files.js dist/team/__tests__/worker-runtime-identity.test.js |
| test | package.json | test:recent-bug-regressions | npm run build && npm run test:recent-bug-regressions:compiled |
| test | package.json | test:recent-bug-regressions:compiled | node dist/scripts/run-test-files.js dist/hooks/__tests__/keyword-detector.test.js dist/scripts/__tests__/codex-native-hook.test.js dist/cli/__tests__/launch-fallback.test.js dist/team/__tests__/runtime.test.js dist/team/ |
| test | package.json | test:plugin-boundaries:compiled | node dist/scripts/run-test-files.js dist/cli/__tests__/codex-plugin-layout.test.js dist/cli/__tests__/package-bin-contract.test.js dist/cli/__tests__/setup-hooks-shared-ownership.test.js dist/catalog/__tests__/plugin-bun |
| test | package.json | test:node | node dist/scripts/run-test-files.js dist |
| test | package.json | test:node:cross-platform | npm run test:node |
| test | package.json | test | npm run build && npm run verify:native-agents && npm run verify:plugin-bundle && npm run test:node && node dist/scripts/generate-catalog-docs.js --check |
| test | package.json | test:ci:compiled | npm run verify:native-agents && npm run verify:plugin-bundle && npm run test:node && node dist/scripts/generate-catalog-docs.js --check |
| test | package.json | coverage:team-critical | npm run build && npm run coverage:team-critical:compiled |
| test | package.json | coverage:team-critical:compiled | c8 --all --src dist/team --src dist/state --include 'dist/team/**/*.js' --include 'dist/state/**/*.js' --exclude '**/__tests__/**' --reporter=text-summary --reporter=lcov --reporter=json-summary --report-dir coverage/tea |
| test | package.json | coverage:team-critical:cross-platform | npm run coverage:team-critical |
| test | package.json | coverage:ts:full | npm run build && npm run coverage:ts:full:compiled |
| test | package.json | coverage:ts:full:compiled | c8 --all --src dist --exclude '**/__tests__/**' --exclude 'dist/bin/**' --exclude 'dist/**/*.d.ts' --reporter=text-summary --reporter=lcov --reporter=json-summary --report-dir coverage/ts-full node dist/scripts/run-test- |
| test | package.json | coverage:ts:full:cross-platform | npm run coverage:ts:full |
| test | package.json | test:ralph-persistence:compiled | node dist/scripts/run-test-files.js dist/cli/__tests__/session-scoped-runtime.test.js dist/mcp/__tests__/trace-server.test.js dist/hud/__tests__/state.test.js dist/mcp/__tests__/state-server-ralph-phase.test.js dist/ralp |
| test | package.json | test:explicit-terminal-contract:compiled | node dist/scripts/run-test-files.js dist/runtime/__tests__/run-outcome.test.js dist/mcp/__tests__/state-server.test.js dist/hooks/__tests__/notify-fallback-watcher.test.js dist/hooks/__tests__/notify-hook-ralph-resume.te |
| test | package.json | test:compat:node | npm run build && node dist/scripts/run-test-files.js dist/compat/__tests__ |
| test | package.json | test:compat:node:cross-platform | npm run build && node dist/scripts/run-test-files.js dist/compat/__tests__ |
| test | package.json | test:compat:rust | cargo build && OMX_COMPAT_TARGET=./target/debug/omx npm run test:compat:node |
| build | package.json | build:sparkshell | node dist/scripts/build-sparkshell.js |
| build | package.json | smoke:packed-install | node dist/scripts/smoke-packed-install.js |
| test | package.json | test:sparkshell | node dist/scripts/test-sparkshell.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol, codex |
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
| mcp | [src/team/mcp-comm.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/mcp-comm.ts) | mcp signal |
| mcp | [src/team/__tests__/mcp-comm.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/__tests__/mcp-comm.test.ts) | mcp signal |
| mcp | [src/mcp/bootstrap.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/mcp/bootstrap.ts) | mcp signal |
| mcp | [src/mcp/code-intel-server.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/mcp/code-intel-server.ts) | mcp signal |
| agentRuntime | [templates/AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-codex/templates/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/utils/agents-md.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/utils/agents-md.ts) | agentRuntime signal |
| agentRuntime | [src/utils/agents-model-table.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/utils/agents-model-table.ts) | agentRuntime signal |
| agentRuntime | [src/utils/__tests__/agents-md.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/utils/__tests__/agents-md.test.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/index.ts) | entrypoints signal |
| entrypoints | [crates/omx-sparkshell/src/main.rs](../../../../sources/Yeachan-Heo__oh-my-codex/crates/omx-sparkshell/src/main.rs) | entrypoints signal |
| entrypoints | [crates/omx-runtime-core/src/lib.rs](../../../../sources/Yeachan-Heo__oh-my-codex/crates/omx-runtime-core/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/omx-runtime/src/main.rs](../../../../sources/Yeachan-Heo__oh-my-codex/crates/omx-runtime/src/main.rs) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [src/index.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/index.ts)<br>[crates/omx-sparkshell/src/main.rs](../../../../sources/Yeachan-Heo__oh-my-codex/crates/omx-sparkshell/src/main.rs)<br>[crates/omx-runtime-core/src/lib.rs](../../../../sources/Yeachan-Heo__oh-my-codex/crates/omx-runtime-core/src/lib.rs)<br>[crates/omx-runtime/src/main.rs](../../../../sources/Yeachan-Heo__oh-my-codex/crates/omx-runtime/src/main.rs)<br>[crates/omx-mux/src/lib.rs](../../../../sources/Yeachan-Heo__oh-my-codex/crates/omx-mux/src/lib.rs)<br>[crates/omx-explore/src/main.rs](../../../../sources/Yeachan-Heo__oh-my-codex/crates/omx-explore/src/main.rs)<br>[crates/omx-api/src/lib.rs](../../../../sources/Yeachan-Heo__oh-my-codex/crates/omx-api/src/lib.rs)<br>[crates/omx-api/src/main.rs](../../../../sources/Yeachan-Heo__oh-my-codex/crates/omx-api/src/main.rs) |
| agentRuntime | 247 | [templates/AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-codex/templates/AGENTS.md)<br>[src/utils/agents-md.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/utils/agents-md.ts)<br>[src/utils/agents-model-table.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/utils/agents-model-table.ts)<br>[src/utils/__tests__/agents-md.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/utils/__tests__/agents-md.test.ts)<br>[src/utils/__tests__/agents-model-table.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/utils/__tests__/agents-model-table.test.ts)<br>[src/team/__tests__/hook-primary-e2e-contract.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/__tests__/hook-primary-e2e-contract.test.ts)<br>[src/state/skill-active.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/state/skill-active.ts)<br>[src/state/workflow-transition-reconcile.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/state/workflow-transition-reconcile.ts) |
| mcp | 37 | [src/team/mcp-comm.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/mcp-comm.ts)<br>[src/team/__tests__/mcp-comm.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/__tests__/mcp-comm.test.ts)<br>[src/mcp/bootstrap.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/mcp/bootstrap.ts)<br>[src/mcp/code-intel-server.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/mcp/code-intel-server.ts)<br>[src/mcp/hermes-bridge.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/mcp/hermes-bridge.ts)<br>[src/mcp/hermes-server.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/mcp/hermes-server.ts)<br>[src/mcp/lifecycle-telemetry.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/mcp/lifecycle-telemetry.ts)<br>[src/mcp/memory-server.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/mcp/memory-server.ts) |
| retrieval | 48 | [src/index.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/index.ts)<br>[src/wiki/index.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/index.ts)<br>[src/wiki/ingest.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/ingest.ts)<br>[src/wiki/lifecycle.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/lifecycle.ts)<br>[src/wiki/lint.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/lint.ts)<br>[src/wiki/query.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/query.ts)<br>[src/wiki/storage.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/storage.ts)<br>[src/wiki/types.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/types.ts) |
| spec | 7 | [src/hooks/__tests__/design-skill.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/hooks/__tests__/design-skill.test.ts)<br>[src/cli/__tests__/ralph-prd-deep-interview.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/cli/__tests__/ralph-prd-deep-interview.test.ts)<br>[src/cli/__tests__/ralph-prd-smoke.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/cli/__tests__/ralph-prd-smoke.test.ts)<br>[skills/design/SKILL.md](../../../../sources/Yeachan-Heo__oh-my-codex/skills/design/SKILL.md)<br>[plugins/oh-my-codex/skills/design/SKILL.md](../../../../sources/Yeachan-Heo__oh-my-codex/plugins/oh-my-codex/skills/design/SKILL.md)<br>[docs/audit/skills-agents-bloat-audit/connectivity-roadmap.md](../../../../sources/Yeachan-Heo__oh-my-codex/docs/audit/skills-agents-bloat-audit/connectivity-roadmap.md)<br>[docs/architecture/cli-first-mcp-taxonomy.md](../../../../sources/Yeachan-Heo__oh-my-codex/docs/architecture/cli-first-mcp-taxonomy.md) |
| eval | 393 | [src/wiki/__tests__/cjk-tokenize.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/cjk-tokenize.test.ts)<br>[src/wiki/__tests__/crlf-parse.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/crlf-parse.test.ts)<br>[src/wiki/__tests__/escape-newline.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/escape-newline.test.ts)<br>[src/wiki/__tests__/ingest.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/ingest.test.ts)<br>[src/wiki/__tests__/lint.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/lint.test.ts)<br>[src/wiki/__tests__/query.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/query.test.ts)<br>[src/wiki/__tests__/reserved-file-guard.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/reserved-file-guard.test.ts)<br>[src/wiki/__tests__/session-hooks.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/session-hooks.test.ts) |
| security | 59 | [src/wiki/__tests__/reserved-file-guard.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/reserved-file-guard.test.ts)<br>[src/team/allocation-policy.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/allocation-policy.ts)<br>[src/team/delegation-policy.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/delegation-policy.ts)<br>[src/team/rebalance-policy.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/rebalance-policy.ts)<br>[src/team/__tests__/allocation-policy.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/__tests__/allocation-policy.test.ts)<br>[src/team/__tests__/delegation-policy.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/__tests__/delegation-policy.test.ts)<br>[src/team/__tests__/rebalance-policy.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/__tests__/rebalance-policy.test.ts)<br>[src/scripts/hook-payload-guard.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/scripts/hook-payload-guard.ts) |
| ci | 5 | [.github/workflows/ci.yml](../../../../sources/Yeachan-Heo__oh-my-codex/.github/workflows/ci.yml)<br>[.github/workflows/dev-merge-issue-close.yml](../../../../sources/Yeachan-Heo__oh-my-codex/.github/workflows/dev-merge-issue-close.yml)<br>[.github/workflows/pr-check.yml](../../../../sources/Yeachan-Heo__oh-my-codex/.github/workflows/pr-check.yml)<br>[.github/workflows/publish-npm-manual.yml](../../../../sources/Yeachan-Heo__oh-my-codex/.github/workflows/publish-npm-manual.yml)<br>[.github/workflows/release.yml](../../../../sources/Yeachan-Heo__oh-my-codex/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [templates/AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-codex/templates/AGENTS.md) |
| docs | 238 | [README.md](../../../../sources/Yeachan-Heo__oh-my-codex/README.md)<br>[skills/prometheus-strict/README.md](../../../../sources/Yeachan-Heo__oh-my-codex/skills/prometheus-strict/README.md)<br>[plugins/oh-my-codex/skills/prometheus-strict/README.md](../../../../sources/Yeachan-Heo__oh-my-codex/plugins/oh-my-codex/skills/prometheus-strict/README.md)<br>[playground/README.md](../../../../sources/Yeachan-Heo__oh-my-codex/playground/README.md)<br>[missions/README.md](../../../../sources/Yeachan-Heo__oh-my-codex/missions/README.md)<br>[docs/_config.yml](../../../../sources/Yeachan-Heo__oh-my-codex/docs/_config.yml)<br>[docs/adapt.md](../../../../sources/Yeachan-Heo__oh-my-codex/docs/adapt.md)<br>[docs/agents.html](../../../../sources/Yeachan-Heo__oh-my-codex/docs/agents.html) |
| config | 11 | [Cargo.lock](../../../../sources/Yeachan-Heo__oh-my-codex/Cargo.lock)<br>[Cargo.toml](../../../../sources/Yeachan-Heo__oh-my-codex/Cargo.toml)<br>[package.json](../../../../sources/Yeachan-Heo__oh-my-codex/package.json)<br>[tsconfig.json](../../../../sources/Yeachan-Heo__oh-my-codex/tsconfig.json)<br>[crates/omx-sparkshell/Cargo.lock](../../../../sources/Yeachan-Heo__oh-my-codex/crates/omx-sparkshell/Cargo.lock)<br>[crates/omx-sparkshell/Cargo.toml](../../../../sources/Yeachan-Heo__oh-my-codex/crates/omx-sparkshell/Cargo.toml)<br>[crates/omx-runtime-core/Cargo.toml](../../../../sources/Yeachan-Heo__oh-my-codex/crates/omx-runtime-core/Cargo.toml)<br>[crates/omx-runtime/Cargo.toml](../../../../sources/Yeachan-Heo__oh-my-codex/crates/omx-runtime/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 393 | [src/wiki/__tests__/cjk-tokenize.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/cjk-tokenize.test.ts)<br>[src/wiki/__tests__/crlf-parse.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/crlf-parse.test.ts)<br>[src/wiki/__tests__/escape-newline.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/escape-newline.test.ts)<br>[src/wiki/__tests__/ingest.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/ingest.test.ts)<br>[src/wiki/__tests__/lint.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/lint.test.ts)<br>[src/wiki/__tests__/query.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/query.test.ts) |
| CI workflow | 5 | [.github/workflows/ci.yml](../../../../sources/Yeachan-Heo__oh-my-codex/.github/workflows/ci.yml)<br>[.github/workflows/dev-merge-issue-close.yml](../../../../sources/Yeachan-Heo__oh-my-codex/.github/workflows/dev-merge-issue-close.yml)<br>[.github/workflows/pr-check.yml](../../../../sources/Yeachan-Heo__oh-my-codex/.github/workflows/pr-check.yml)<br>[.github/workflows/publish-npm-manual.yml](../../../../sources/Yeachan-Heo__oh-my-codex/.github/workflows/publish-npm-manual.yml)<br>[.github/workflows/release.yml](../../../../sources/Yeachan-Heo__oh-my-codex/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 59 | [src/wiki/__tests__/reserved-file-guard.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/wiki/__tests__/reserved-file-guard.test.ts)<br>[src/team/allocation-policy.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/allocation-policy.ts)<br>[src/team/delegation-policy.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/delegation-policy.ts)<br>[src/team/rebalance-policy.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/rebalance-policy.ts)<br>[src/team/__tests__/allocation-policy.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/__tests__/allocation-policy.test.ts)<br>[src/team/__tests__/delegation-policy.test.ts](../../../../sources/Yeachan-Heo__oh-my-codex/src/team/__tests__/delegation-policy.test.ts) |
| 에이전트 지시문 | 1 | [templates/AGENTS.md](../../../../sources/Yeachan-Heo__oh-my-codex/templates/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/team/mcp-comm.ts`, `src/team/__tests__/mcp-comm.test.ts`, `src/mcp/bootstrap.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`, `crates/omx-sparkshell/src/main.rs`, `crates/omx-runtime-core/src/lib.rs`.
3. agent/tool runtime 매핑: `templates/AGENTS.md`, `src/utils/agents-md.ts`, `src/utils/agents-model-table.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/wiki/index.ts`, `src/wiki/ingest.ts`.
5. test/eval 파일로 동작 검증: `src/wiki/__tests__/cjk-tokenize.test.ts`, `src/wiki/__tests__/crlf-parse.test.ts`, `src/wiki/__tests__/escape-newline.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 1197 files, 237 directories.. 핵심 구조 신호는 package.json, Cargo.toml, README.md, modelcontextprotocol, tests, ci이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
