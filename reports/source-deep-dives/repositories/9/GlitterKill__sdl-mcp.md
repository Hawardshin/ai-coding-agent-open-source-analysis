# GlitterKill/sdl-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Symbol Delta Ledger (SDL-MCP) gives coding agents the right code context, not your entire repo. It turns sprawling codebases into compact, high-signal context that saves tokens, speeds up workflows, and improves agent output.

## 요약

- 조사 단위: `sources/GlitterKill__sdl-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,707 files, 194 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/MCP_TOOL_TESTS_SUMMARY.md, tests/unit/mcp-action-search.test.ts, tests/unit/mcp-buffer-tool.test.ts이고, 의존성 단서는 modelcontextprotocol, vscode, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | GlitterKill/sdl-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 369 |
| Forks | 22 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/GlitterKill__sdl-mcp](../../../../sources/GlitterKill__sdl-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/GlitterKill__sdl-mcp.md](../../../global-trending/repositories/GlitterKill__sdl-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1707 / 194 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .agents, .benchmark, .github, benchmarks, config, devdocs, dist-tests, docs, examples, grammar-wrappers, migrations, native, packages, scripts, sdl-mcp-vscode, src, templates, tests |
| 상위 확장자 | .ts: 1150, .json: 129, .md: 102, .rs: 77, .js: 54, .map: 30, .mjs: 30, (none): 28, .py: 11, .webp: 11, .java: 9, .yml: 7 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 155 |
| src | source boundary | 33 |
| docs | documentation surface | 25 |
| examples/example-plugin | examples workspace | 3 |
| packages/kuzu-split | packages workspace | 3 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| config | top-level component | 1 |
| devdocs | documentation surface | 1 |
| dist-tests | validation surface | 1 |
| examples | top-level component | 1 |
| grammar-wrappers | top-level component | 1 |
| migrations | top-level component | 1 |
| native | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| sdl-mcp-vscode | top-level component | 1 |
| templates | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | postinstall | node scripts/postinstall.mjs |
| build | package.json | clean:dist | node scripts/clean-dist.mjs |
| build | package.json | build | tsc -p tsconfig.build.json && node scripts/copy-ui-assets.mjs |
| build | package.json | build:scripts | tsc -p tsconfig.scripts.json && node scripts/fix-imports.ts |
| build | package.json | build:runtime | npm run clean:dist && npm run build |
| build | package.json | build:all | npm run clean:dist && npm run build && npm run build:scripts |
| serve-dev | package.json | watch | tsc -p tsconfig.build.json --watch |
| serve-dev | package.json | dev | node src/main.ts |
| quality | package.json | typecheck | tsc --noEmit |
| quality | package.json | lint | eslint src |
| quality | package.json | format | prettier --write "src/**/*.ts" |
| test | package.json | test | node scripts/run-tests.mjs |
| test | package.json | test:harness | npm run test:adapters |
| test | package.json | test:adapters | npm run build && npx tsc --rootDir tests/harness --outDir dist/tests/harness --module nodenext tests/harness/adapter-runner.ts && node dist/tests/harness/adapter-runner.js |
| test | package.json | test:golden | npm run build && node scripts/golden/update-goldens.ts validate |
| build | package.json | golden:update | npm run build && node scripts/golden/update-goldens.ts generate |
| build | package.json | benchmark:ci | node dist/cli/index.js benchmark:ci |
| build | package.json | migrate | npm run build:scripts && node dist/scripts/migrate.js |
| build | package.json | index | npm run build:scripts && node dist/scripts/index-repo.js |
| build | package.json | index-repo | npm run build:scripts && node dist/scripts/index-repo.js |
| build | package.json | dump-symbol | npm run build:scripts && node dist/scripts/dump-symbol.js |
| utility | package.json | benchmark | node scripts/benchmark.ts |
| utility | package.json | benchmark:real | node scripts/real-world-benchmark.ts |
| utility | package.json | benchmark:matrix | node scripts/real-world-benchmark-matrix.ts |
| quality | package.json | benchmark:claims | node scripts/check-benchmark-claims.ts |
| utility | package.json | benchmark:sweep | node scripts/budget-sensitivity-sweep.ts |
| utility | package.json | bench:ppr | node scripts/bench-ppr-weight.ts |
| utility | package.json | benchmark:provider-first-fallback | node scripts/provider-first-fallback-benchmark.ts |
| utility | package.json | benchmark:record-trace | node scripts/record-trace.ts |
| utility | package.json | benchmark:setup-external | node scripts/setup-external-benchmark-repos.ts |
| utility | package.json | benchmark:v067 | node scripts/benchmark/v067-baseline.ts |
| serve-dev | package.json | benchmark:v067:check | node scripts/benchmark/v067-baseline.ts --check devdocs/benchmarks/v067-baseline.json |
| serve-dev | package.json | benchmark:v067:save | node scripts/benchmark/v067-baseline.ts --out devdocs/benchmarks/v067-baseline.json |
| build | package.json | package:exe | npm run build:scripts && node dist/scripts/build-exe.js |
| build | package.json | prepack | npm run build:runtime |
| build | package.json | build:native | napi build --release --cargo-cwd native --config native/package.json native |
| build | package.json | build:native:debug | napi build --cargo-cwd native --config native/package.json native |
| utility | package.json | native:artifacts | napi artifacts --config native/package.json --npm-dir native/npm |
| utility | package.json | native:version | node scripts/sync-native-version.mjs |
| build | package.json | prepare-release | node scripts/prepare-release.mjs |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | vscode |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/MCP_TOOL_TESTS_SUMMARY.md](../../../../sources/GlitterKill__sdl-mcp/tests/MCP_TOOL_TESTS_SUMMARY.md) | mcp signal |
| mcp | [tests/unit/mcp-action-search.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-action-search.test.ts) | mcp signal |
| mcp | [tests/unit/mcp-buffer-tool.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-buffer-tool.test.ts) | mcp signal |
| mcp | [tests/unit/mcp-code-need-window-policy.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-code-need-window-policy.test.ts) | mcp signal |
| agentRuntime | [CONTEXT.md](../../../../sources/GlitterKill__sdl-mcp/CONTEXT.md) | agentRuntime signal |
| agentRuntime | [skills-lock.json](../../../../sources/GlitterKill__sdl-mcp/skills-lock.json) | agentRuntime signal |
| agentRuntime | [tests/AGENTS.md](../../../../sources/GlitterKill__sdl-mcp/tests/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/runner.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/runner.test.ts) | agentRuntime signal |
| entrypoints | [tests/stress/fixtures/src/go/server.go](../../../../sources/GlitterKill__sdl-mcp/tests/stress/fixtures/src/go/server.go) | entrypoints signal |
| entrypoints | [src/main.ts](../../../../sources/GlitterKill__sdl-mcp/src/main.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/GlitterKill__sdl-mcp/src/server.ts) | entrypoints signal |
| instruction | [templates/AGENTS.md.template](../../../../sources/GlitterKill__sdl-mcp/templates/AGENTS.md.template) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [tests/stress/fixtures/src/go/server.go](../../../../sources/GlitterKill__sdl-mcp/tests/stress/fixtures/src/go/server.go)<br>[src/main.ts](../../../../sources/GlitterKill__sdl-mcp/src/main.ts)<br>[src/server.ts](../../../../sources/GlitterKill__sdl-mcp/src/server.ts) |
| agentRuntime | 121 | [CONTEXT.md](../../../../sources/GlitterKill__sdl-mcp/CONTEXT.md)<br>[skills-lock.json](../../../../sources/GlitterKill__sdl-mcp/skills-lock.json)<br>[tests/AGENTS.md](../../../../sources/GlitterKill__sdl-mcp/tests/AGENTS.md)<br>[tests/runner.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/runner.test.ts)<br>[tests/unit/agent-executor-cache-hits.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/agent-executor-cache-hits.test.ts)<br>[tests/unit/agent-feedback-query-regression.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/agent-feedback-query-regression.test.ts)<br>[tests/unit/context-raw-token-baseline.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/context-raw-token-baseline.test.ts)<br>[tests/unit/context-response-artifacts.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/context-response-artifacts.test.ts) |
| mcp | 152 | [tests/MCP_TOOL_TESTS_SUMMARY.md](../../../../sources/GlitterKill__sdl-mcp/tests/MCP_TOOL_TESTS_SUMMARY.md)<br>[tests/unit/mcp-action-search.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-action-search.test.ts)<br>[tests/unit/mcp-buffer-tool.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-buffer-tool.test.ts)<br>[tests/unit/mcp-code-need-window-policy.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-code-need-window-policy.test.ts)<br>[tests/unit/mcp-ids.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-ids.test.ts)<br>[tests/unit/mcp-memory-hint-hook.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-memory-hint-hook.test.ts)<br>[tests/unit/mcp-request-schemas-hardening.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-request-schemas-hardening.test.ts)<br>[tests/unit/mcp-slice-confidence-filter.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-slice-confidence-filter.test.ts) |
| retrieval | 185 | [tests/unit/cli-index-command.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/cli-index-command.test.ts)<br>[tests/unit/deferred-index-bootstrap.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/deferred-index-bootstrap.test.ts)<br>[tests/unit/doctor-live-index-status.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/doctor-live-index-status.test.ts)<br>[tests/unit/drop-vector-index-regex.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/drop-vector-index-regex.test.ts)<br>[tests/unit/embedding-concurrency.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/embedding-concurrency.test.ts)<br>[tests/unit/entity-retrieval.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/entity-retrieval.test.ts)<br>[tests/unit/feedback-index-lifecycle.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/feedback-index-lifecycle.test.ts)<br>[tests/unit/feedback-retrieval-config.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/feedback-retrieval-config.test.ts) |
| spec | 2 | [docs/architecture.md](../../../../sources/GlitterKill__sdl-mcp/docs/architecture.md)<br>[docs/readme-assets/readme-system-architecture.webp](../../../../sources/GlitterKill__sdl-mcp/docs/readme-assets/readme-system-architecture.webp) |
| eval | 875 | [tsconfig.test-runner.json](../../../../sources/GlitterKill__sdl-mcp/tsconfig.test-runner.json)<br>[tsconfig.test.json](../../../../sources/GlitterKill__sdl-mcp/tsconfig.test.json)<br>[tests/AGENTS.md](../../../../sources/GlitterKill__sdl-mcp/tests/AGENTS.md)<br>[tests/blastRadius.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/blastRadius.test.ts)<br>[tests/cache.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/cache.test.ts)<br>[tests/generate-summary.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/generate-summary.test.ts)<br>[tests/MCP_TOOL_TESTS_SUMMARY.md](../../../../sources/GlitterKill__sdl-mcp/tests/MCP_TOOL_TESTS_SUMMARY.md)<br>[tests/metrics-cache.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/metrics-cache.test.ts) |
| security | 25 | [tests/unit/audit-fixes-2026-03-30.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/audit-fixes-2026-03-30.test.ts)<br>[tests/unit/mcp-code-need-window-policy.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-code-need-window-policy.test.ts)<br>[tests/unit/policy-engine.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/policy-engine.test.ts)<br>[tests/unit/runtime-policy.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/runtime-policy.test.ts)<br>[tests/unit/policy/code-access.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/policy/code-access.test.ts)<br>[tests/unit/policy/runtime.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/policy/runtime.test.ts)<br>[tests/unit/agent/context-seeding-policy.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/agent/context-seeding-policy.test.ts)<br>[tests/integration/audit-buffer-end-hook-drain.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/integration/audit-buffer-end-hook-drain.test.ts) |
| ci | 6 | [.github/workflows/ci.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/ci.yml)<br>[.github/workflows/jekyll-gh-pages.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/jekyll-gh-pages.yml)<br>[.github/workflows/publish-grammar-wrappers.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/publish-grammar-wrappers.yml)<br>[.github/workflows/publish-ladybug.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/publish-ladybug.yml)<br>[.github/workflows/publish-native.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/publish-native.yml)<br>[.github/workflows/release-publish.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/release-publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 4 | [tests/AGENTS.md](../../../../sources/GlitterKill__sdl-mcp/tests/AGENTS.md)<br>[templates/AGENTS.md.template](../../../../sources/GlitterKill__sdl-mcp/templates/AGENTS.md.template)<br>[templates/CLAUDE.md.template](../../../../sources/GlitterKill__sdl-mcp/templates/CLAUDE.md.template)<br>[templates/GEMINI.md.template](../../../../sources/GlitterKill__sdl-mcp/templates/GEMINI.md.template) |
| docs | 89 | [README.md](../../../../sources/GlitterKill__sdl-mcp/README.md)<br>[tests/harness/README-ADAPTER-HARNESS.md](../../../../sources/GlitterKill__sdl-mcp/tests/harness/README-ADAPTER-HARNESS.md)<br>[tests/harness/README.md](../../../../sources/GlitterKill__sdl-mcp/tests/harness/README.md)<br>[templates/plugin-template/README.md](../../../../sources/GlitterKill__sdl-mcp/templates/plugin-template/README.md)<br>[sdl-mcp-vscode/README.md](../../../../sources/GlitterKill__sdl-mcp/sdl-mcp-vscode/README.md)<br>[scripts/golden/README.md](../../../../sources/GlitterKill__sdl-mcp/scripts/golden/README.md)<br>[packages/kuzu-split/out/ladybug/README.md](../../../../sources/GlitterKill__sdl-mcp/packages/kuzu-split/out/ladybug/README.md)<br>[grammar-wrappers/README.md](../../../../sources/GlitterKill__sdl-mcp/grammar-wrappers/README.md) |
| config | 33 | [package.json](../../../../sources/GlitterKill__sdl-mcp/package.json)<br>[tsconfig.json](../../../../sources/GlitterKill__sdl-mcp/tsconfig.json)<br>[tests/stress/fixtures/package.json](../../../../sources/GlitterKill__sdl-mcp/tests/stress/fixtures/package.json)<br>[tests/stress/fixtures/tsconfig.json](../../../../sources/GlitterKill__sdl-mcp/tests/stress/fixtures/tsconfig.json)<br>[tests/fixtures/clustered-repo/package.json](../../../../sources/GlitterKill__sdl-mcp/tests/fixtures/clustered-repo/package.json)<br>[tests/fixtures/clustered-repo/tsconfig.json](../../../../sources/GlitterKill__sdl-mcp/tests/fixtures/clustered-repo/tsconfig.json)<br>[templates/plugin-template/package.json](../../../../sources/GlitterKill__sdl-mcp/templates/plugin-template/package.json)<br>[templates/plugin-template/tsconfig.json](../../../../sources/GlitterKill__sdl-mcp/templates/plugin-template/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 875 | [tsconfig.test-runner.json](../../../../sources/GlitterKill__sdl-mcp/tsconfig.test-runner.json)<br>[tsconfig.test.json](../../../../sources/GlitterKill__sdl-mcp/tsconfig.test.json)<br>[tests/AGENTS.md](../../../../sources/GlitterKill__sdl-mcp/tests/AGENTS.md)<br>[tests/blastRadius.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/blastRadius.test.ts)<br>[tests/cache.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/cache.test.ts)<br>[tests/generate-summary.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/generate-summary.test.ts) |
| CI workflow | 6 | [.github/workflows/ci.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/ci.yml)<br>[.github/workflows/jekyll-gh-pages.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/jekyll-gh-pages.yml)<br>[.github/workflows/publish-grammar-wrappers.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/publish-grammar-wrappers.yml)<br>[.github/workflows/publish-ladybug.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/publish-ladybug.yml)<br>[.github/workflows/publish-native.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/publish-native.yml)<br>[.github/workflows/release-publish.yml](../../../../sources/GlitterKill__sdl-mcp/.github/workflows/release-publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 25 | [tests/unit/audit-fixes-2026-03-30.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/audit-fixes-2026-03-30.test.ts)<br>[tests/unit/mcp-code-need-window-policy.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/mcp-code-need-window-policy.test.ts)<br>[tests/unit/policy-engine.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/policy-engine.test.ts)<br>[tests/unit/runtime-policy.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/runtime-policy.test.ts)<br>[tests/unit/policy/code-access.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/policy/code-access.test.ts)<br>[tests/unit/policy/runtime.test.ts](../../../../sources/GlitterKill__sdl-mcp/tests/unit/policy/runtime.test.ts) |
| 에이전트 지시문 | 4 | [tests/AGENTS.md](../../../../sources/GlitterKill__sdl-mcp/tests/AGENTS.md)<br>[templates/AGENTS.md.template](../../../../sources/GlitterKill__sdl-mcp/templates/AGENTS.md.template)<br>[templates/CLAUDE.md.template](../../../../sources/GlitterKill__sdl-mcp/templates/CLAUDE.md.template)<br>[templates/GEMINI.md.template](../../../../sources/GlitterKill__sdl-mcp/templates/GEMINI.md.template) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/MCP_TOOL_TESTS_SUMMARY.md`, `tests/unit/mcp-action-search.test.ts`, `tests/unit/mcp-buffer-tool.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `tests/stress/fixtures/src/go/server.go`, `src/main.ts`, `src/server.ts`.
3. agent/tool runtime 매핑: `CONTEXT.md`, `skills-lock.json`, `tests/AGENTS.md`.
4. retrieval/memory/indexing 확인: `tests/unit/cli-index-command.test.ts`, `tests/unit/deferred-index-bootstrap.test.ts`, `tests/unit/doctor-live-index-status.test.ts`.
5. test/eval 파일로 동작 검증: `tsconfig.test-runner.json`, `tsconfig.test.json`, `tests/AGENTS.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Symbol Delta Ledger SDL MCP gives coding agents the right code context, not your entire repo. It turns sprawling codebas. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, vscode이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
