# dyad-sh/dyad 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local, open-source AI app builder for power users ✨ v0 / Lovable / Replit / Bolt alternative 🌟 Star if you like it!

## 요약

- 조사 단위: `sources/dyad-sh__dyad` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,046 files, 214 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/main.ts, scaffold/src/App.css, scaffold/src/App.tsx이고, 의존성 단서는 openai, anthropic, mcp, modelcontextprotocol, next, react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | dyad-sh/dyad |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | TypeScript |
| Stars | 20657 |
| Forks | 2469 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/dyad-sh__dyad](../../../../sources/dyad-sh__dyad) |
| 기존 보고서 | [reports/global-trending/repositories/dyad-sh__dyad.md](../../../global-trending/repositories/dyad-sh__dyad.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2046 / 214 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .agents, .claude, .cursor, .devcontainer, .github, .husky, .storybook, assets, benchmarks, docs, drizzle, e2e-tests, makers, packages, plans, rules, scaffold, scripts, shared, src |
| 상위 확장자 | .ts: 912, .tsx: 381, .md: 175, .yml: 162, .txt: 135, .json: 113, .sql: 34, (none): 22, .js: 18, .mjs: 15, .sh: 10, .svg: 10 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 140 |
| packages/@dyad-sh | packages workspace | 10 |
| docs | documentation surface | 9 |
| packages/ts-pg-schema-diff | packages workspace | 8 |
| packages/pg-schema-classifier | packages workspace | 5 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| drizzle | top-level component | 1 |
| e2e-tests | validation surface | 1 |
| makers | top-level component | 1 |
| packages | source boundary | 1 |
| plans | top-level component | 1 |
| rules | top-level component | 1 |
| scaffold | top-level component | 1 |
| scripts | top-level component | 1 |
| shared | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | bump | node scripts/bump-version.mjs |
| utility | package.json | clean | rimraf out scaffold/node_modules |
| serve-dev | package.json | start | electron-forge start |
| serve-dev | package.json | dev | cross-env NODE_ENV=development npm start |
| serve-dev | package.json | dev:engine | cross-env DYAD_ENGINE_URL=http://localhost:8080/v1 npm start |
| serve-dev | package.json | staging:engine | cross-env DYAD_ENGINE_URL=https://staging---dyad-llm-engine-kq7pivehnq-uc.a.run.app/v1 npm start |
| utility | package.json | package | npm run clean && electron-forge package |
| utility | package.json | make | npm run clean && electron-forge make |
| utility | package.json | publish | npm run clean && electron-forge publish |
| build | package.json | verify-release | node scripts/verify-release-assets.js |
| utility | package.json | ts | npm run ts:main && npm run ts:workers |
| quality | package.json | ts:main | npx tsgo -p tsconfig.app.json --noEmit --incremental |
| quality | package.json | ts:workers | npm run ts:workers:tsc && npm run ts:workers:code-explorer |
| quality | package.json | ts:workers:tsc | npx tsc -p workers/tsc/tsconfig.json --noEmit --incremental |
| quality | package.json | ts:workers:code-explorer | npx tsc -p workers/code_explorer/tsconfig.json --noEmit --incremental |
| quality | package.json | lint | npx oxlint --fix |
| quality | package.json | lint:fix | npx oxlint --fix --fix-suggestions --fix-dangerously |
| utility | package.json | db:generate | drizzle-kit generate |
| utility | package.json | db:push | drizzle-kit push |
| utility | package.json | db:studio | drizzle-kit studio |
| quality | package.json | fmt:check | npx oxfmt --check |
| quality | package.json | fmt | npx oxfmt |
| quality | package.json | presubmit | npm run fmt:check && npm run lint |
| test | package.json | eval | cross-env NODE_OPTIONS=--no-deprecation vitest run --config vitest.eval.config.ts |
| test | package.json | test | cross-env NODE_OPTIONS=--no-deprecation VITE_CJS_IGNORE_WARNING=true vitest run |
| test | package.json | test:watch | cross-env NODE_OPTIONS=--no-deprecation VITE_CJS_IGNORE_WARNING=true vitest |
| test | package.json | test:ui | cross-env NODE_OPTIONS=--no-deprecation VITE_CJS_IGNORE_WARNING=true vitest --ui |
| utility | package.json | extract-codebase | ts-node scripts/extract-codebase.ts |
| utility | package.json | init-precommit | husky |
| build | package.json | build | npm run pre:e2e |
| test | package.json | pre:e2e | cross-env E2E_TEST_BUILD=true npm run package |
| test | package.json | e2e | playwright test |
| test | package.json | e2e:fast | PLAYWRIGHT_RETRIES=1 playwright test |
| test | package.json | e2e:shard | playwright test --shard |
| serve-dev | package.json | storybook | storybook dev -p 6006 |
| build | package.json | build-storybook | storybook build |
| utility | package.json | benchmark:code-explorer | node benchmarks/code-explorer/run.mjs |
| utility | package.json | benchmark:code-explorer:suite | node benchmarks/code-explorer/suite.mjs |
| utility | package.json | benchmark:code-explorer:smoke | node benchmarks/code-explorer/suite.mjs --mode smoke |
| utility | package.json | benchmark:code-explorer:full | node benchmarks/code-explorer/suite.mjs --mode full |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | next, react |
| developerSurface | vscode, electron |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [src/main.ts](../../../../sources/dyad-sh__dyad/src/main.ts) | entrypoints signal |
| entrypoints | [scaffold/src/App.css](../../../../sources/dyad-sh__dyad/scaffold/src/App.css) | entrypoints signal |
| entrypoints | [scaffold/src/App.tsx](../../../../sources/dyad-sh__dyad/scaffold/src/App.tsx) | entrypoints signal |
| entrypoints | [scaffold/src/main.tsx](../../../../sources/dyad-sh__dyad/scaffold/src/main.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/dyad-sh__dyad/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/dyad-sh__dyad/tsconfig.json) | config signal |
| config | [workers/tsc/tsconfig.json](../../../../sources/dyad-sh__dyad/workers/tsc/tsconfig.json) | config signal |
| config | [workers/code_explorer/tsconfig.json](../../../../sources/dyad-sh__dyad/workers/code_explorer/tsconfig.json) | config signal |
| ci | [.github/workflows/bugbot-trigger.yml](../../../../sources/dyad-sh__dyad/.github/workflows/bugbot-trigger.yml) | ci signal |
| ci | [.github/workflows/cancel-ci-after-merge.yml](../../../../sources/dyad-sh__dyad/.github/workflows/cancel-ci-after-merge.yml) | ci signal |
| ci | [.github/workflows/cancel-claude-pr-review-after-merge.yml](../../../../sources/dyad-sh__dyad/.github/workflows/cancel-claude-pr-review-after-merge.yml) | ci signal |
| ci | [.github/workflows/ci.yml](../../../../sources/dyad-sh__dyad/.github/workflows/ci.yml) | ci signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 19 | [src/main.ts](../../../../sources/dyad-sh__dyad/src/main.ts)<br>[scaffold/src/App.css](../../../../sources/dyad-sh__dyad/scaffold/src/App.css)<br>[scaffold/src/App.tsx](../../../../sources/dyad-sh__dyad/scaffold/src/App.tsx)<br>[scaffold/src/main.tsx](../../../../sources/dyad-sh__dyad/scaffold/src/main.tsx)<br>[packages/ts-pg-schema-diff/src/index.ts](../../../../sources/dyad-sh__dyad/packages/ts-pg-schema-diff/src/index.ts)<br>[packages/pg-schema-classifier/src/index.ts](../../../../sources/dyad-sh__dyad/packages/pg-schema-classifier/src/index.ts)<br>[packages/@dyad-sh/react-vite-component-tagger/src/index.ts](../../../../sources/dyad-sh__dyad/packages/@dyad-sh/react-vite-component-tagger/src/index.ts)<br>[packages/@dyad-sh/nextjs-webpack-component-tagger/src/index.ts](../../../../sources/dyad-sh__dyad/packages/@dyad-sh/nextjs-webpack-component-tagger/src/index.ts) |
| agentRuntime | 265 | [AGENTS.md](../../../../sources/dyad-sh__dyad/AGENTS.md)<br>[tools/add-macos-cert.sh](../../../../sources/dyad-sh__dyad/tools/add-macos-cert.sh)<br>[src/pro/main/ipc/handlers/local_agent/agent_tool_handlers.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/agent_tool_handlers.ts)<br>[src/pro/main/ipc/handlers/local_agent/tool_definitions.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/tool_definitions.ts)<br>[src/pro/main/ipc/handlers/local_agent/tools/add_dependency.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/tools/add_dependency.ts)<br>[src/pro/main/ipc/handlers/local_agent/tools/add_integration.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/tools/add_integration.ts)<br>[src/pro/main/ipc/handlers/local_agent/tools/bm25.spec.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/tools/bm25.spec.ts)<br>[src/pro/main/ipc/handlers/local_agent/tools/bm25.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/tools/bm25.ts) |
| mcp | 41 | [testing/fake-http-mcp-server.mjs](../../../../sources/dyad-sh__dyad/testing/fake-http-mcp-server.mjs)<br>[testing/fake-oauth-mcp-server.mjs](../../../../sources/dyad-sh__dyad/testing/fake-oauth-mcp-server.mjs)<br>[testing/fake-stdio-mcp-server.mjs](../../../../sources/dyad-sh__dyad/testing/fake-stdio-mcp-server.mjs)<br>[testing/run-fake-http-mcp-server.sh](../../../../sources/dyad-sh__dyad/testing/run-fake-http-mcp-server.sh)<br>[testing/run-fake-oauth-mcp-server.sh](../../../../sources/dyad-sh__dyad/testing/run-fake-oauth-mcp-server.sh)<br>[testing/run-fake-stdio-mcp-server.sh](../../../../sources/dyad-sh__dyad/testing/run-fake-stdio-mcp-server.sh)<br>[src/pro/main/ipc/handlers/local_agent/tools/mcp_type_defs.spec.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/tools/mcp_type_defs.spec.ts)<br>[src/pro/main/ipc/handlers/local_agent/tools/mcp_type_defs.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/tools/mcp_type_defs.ts) |
| retrieval | 33 | [index.html](../../../../sources/dyad-sh__dyad/index.html)<br>[workers/code_explorer/core/index.ts](../../../../sources/dyad-sh__dyad/workers/code_explorer/core/index.ts)<br>[testing/fake-llm-server/index.ts](../../../../sources/dyad-sh__dyad/testing/fake-llm-server/index.ts)<br>[src/ipc/types/index.ts](../../../../sources/dyad-sh__dyad/src/ipc/types/index.ts)<br>[src/i18n/index.ts](../../../../sources/dyad-sh__dyad/src/i18n/index.ts)<br>[src/db/index.ts](../../../../sources/dyad-sh__dyad/src/db/index.ts)<br>[scaffold/index.html](../../../../sources/dyad-sh__dyad/scaffold/index.html)<br>[scaffold/src/pages/Index.tsx](../../../../sources/dyad-sh__dyad/scaffold/src/pages/Index.tsx) |
| spec | 437 | [src/pro/main/ipc/processors/search_replace_dsl.spec.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/processors/search_replace_dsl.spec.ts)<br>[src/pro/main/ipc/processors/search_replace_processor.spec.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/processors/search_replace_processor.spec.ts)<br>[src/pro/main/ipc/handlers/local_agent/auto_approve_sql.spec.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/auto_approve_sql.spec.ts)<br>[src/pro/main/ipc/handlers/local_agent/tools/bm25.spec.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/tools/bm25.spec.ts)<br>[src/pro/main/ipc/handlers/local_agent/tools/code_search.spec.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/tools/code_search.spec.ts)<br>[src/pro/main/ipc/handlers/local_agent/tools/delete_file.spec.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/tools/delete_file.spec.ts)<br>[src/pro/main/ipc/handlers/local_agent/tools/execute_sandbox_script.spec.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/tools/execute_sandbox_script.spec.ts)<br>[src/pro/main/ipc/handlers/local_agent/tools/execute_sql.spec.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/tools/execute_sql.spec.ts) |
| eval | 818 | [vitest.eval.config.ts](../../../../sources/dyad-sh__dyad/vitest.eval.config.ts)<br>[src/db_reset.test.ts](../../../../sources/dyad-sh__dyad/src/db_reset.test.ts)<br>[src/db.test.ts](../../../../sources/dyad-sh__dyad/src/db.test.ts)<br>[src/utils/crash_dumps.test.ts](../../../../sources/dyad-sh__dyad/src/utils/crash_dumps.test.ts)<br>[src/utils/minidump_summary.test.ts](../../../../sources/dyad-sh__dyad/src/utils/minidump_summary.test.ts)<br>[src/utils/performance_monitor.ts](../../../../sources/dyad-sh__dyad/src/utils/performance_monitor.ts)<br>[src/utils/style-utils.test.ts](../../../../sources/dyad-sh__dyad/src/utils/style-utils.test.ts)<br>[src/testing/handler_test_harness.ts](../../../../sources/dyad-sh__dyad/src/testing/handler_test_harness.ts) |
| security | 57 | [SECURITY.md](../../../../sources/dyad-sh__dyad/SECURITY.md)<br>[vite.sandbox-worker.config.mts](../../../../sources/dyad-sh__dyad/vite.sandbox-worker.config.mts)<br>[testing/fake-oauth-mcp-server.mjs](../../../../sources/dyad-sh__dyad/testing/fake-oauth-mcp-server.mjs)<br>[testing/run-fake-oauth-mcp-server.sh](../../../../sources/dyad-sh__dyad/testing/run-fake-oauth-mcp-server.sh)<br>[src/prompts/security_review_prompt.ts](../../../../sources/dyad-sh__dyad/src/prompts/security_review_prompt.ts)<br>[src/pro/main/ipc/handlers/local_agent/tools/execute_sandbox_script.spec.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/tools/execute_sandbox_script.spec.ts)<br>[src/pro/main/ipc/handlers/local_agent/tools/execute_sandbox_script.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/tools/execute_sandbox_script.ts)<br>[src/ipc/utils/cloud_sandbox_provider.test.ts](../../../../sources/dyad-sh__dyad/src/ipc/utils/cloud_sandbox_provider.test.ts) |
| ci | 22 | [.github/workflows/bugbot-trigger.yml](../../../../sources/dyad-sh__dyad/.github/workflows/bugbot-trigger.yml)<br>[.github/workflows/cancel-ci-after-merge.yml](../../../../sources/dyad-sh__dyad/.github/workflows/cancel-ci-after-merge.yml)<br>[.github/workflows/cancel-claude-pr-review-after-merge.yml](../../../../sources/dyad-sh__dyad/.github/workflows/cancel-claude-pr-review-after-merge.yml)<br>[.github/workflows/ci.yml](../../../../sources/dyad-sh__dyad/.github/workflows/ci.yml)<br>[.github/workflows/cla.yml](../../../../sources/dyad-sh__dyad/.github/workflows/cla.yml)<br>[.github/workflows/claude-check-workflows.yml](../../../../sources/dyad-sh__dyad/.github/workflows/claude-check-workflows.yml)<br>[.github/workflows/claude-deflake-e2e.yml](../../../../sources/dyad-sh__dyad/.github/workflows/claude-deflake-e2e.yml)<br>[.github/workflows/claude-pr-review.yml](../../../../sources/dyad-sh__dyad/.github/workflows/claude-pr-review.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/dyad-sh__dyad/AGENTS.md)<br>[.cursor/rules/ipc.mdc](../../../../sources/dyad-sh__dyad/.cursor/rules/ipc.mdc) |
| docs | 22 | [README.md](../../../../sources/dyad-sh__dyad/README.md)<br>[testing/README.md](../../../../sources/dyad-sh__dyad/testing/README.md)<br>[testing/fake-llm-server/README.md](../../../../sources/dyad-sh__dyad/testing/fake-llm-server/README.md)<br>[src/__tests__/README.md](../../../../sources/dyad-sh__dyad/src/__tests__/README.md)<br>[src/__tests__/evals/README.md](../../../../sources/dyad-sh__dyad/src/__tests__/evals/README.md)<br>[scripts/README.md](../../../../sources/dyad-sh__dyad/scripts/README.md)<br>[scaffold/README.md](../../../../sources/dyad-sh__dyad/scaffold/README.md)<br>[packages/ts-pg-schema-diff/README.md](../../../../sources/dyad-sh__dyad/packages/ts-pg-schema-diff/README.md) |
| config | 28 | [package.json](../../../../sources/dyad-sh__dyad/package.json)<br>[tsconfig.json](../../../../sources/dyad-sh__dyad/tsconfig.json)<br>[workers/tsc/tsconfig.json](../../../../sources/dyad-sh__dyad/workers/tsc/tsconfig.json)<br>[workers/code_explorer/tsconfig.json](../../../../sources/dyad-sh__dyad/workers/code_explorer/tsconfig.json)<br>[testing/fake-llm-server/package.json](../../../../sources/dyad-sh__dyad/testing/fake-llm-server/package.json)<br>[testing/fake-llm-server/tsconfig.json](../../../../sources/dyad-sh__dyad/testing/fake-llm-server/tsconfig.json)<br>[scripts/tsconfig.json](../../../../sources/dyad-sh__dyad/scripts/tsconfig.json)<br>[scaffold/package.json](../../../../sources/dyad-sh__dyad/scaffold/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 818 | [vitest.eval.config.ts](../../../../sources/dyad-sh__dyad/vitest.eval.config.ts)<br>[src/db_reset.test.ts](../../../../sources/dyad-sh__dyad/src/db_reset.test.ts)<br>[src/db.test.ts](../../../../sources/dyad-sh__dyad/src/db.test.ts)<br>[src/utils/crash_dumps.test.ts](../../../../sources/dyad-sh__dyad/src/utils/crash_dumps.test.ts)<br>[src/utils/minidump_summary.test.ts](../../../../sources/dyad-sh__dyad/src/utils/minidump_summary.test.ts)<br>[src/utils/performance_monitor.ts](../../../../sources/dyad-sh__dyad/src/utils/performance_monitor.ts) |
| CI workflow | 22 | [.github/workflows/bugbot-trigger.yml](../../../../sources/dyad-sh__dyad/.github/workflows/bugbot-trigger.yml)<br>[.github/workflows/cancel-ci-after-merge.yml](../../../../sources/dyad-sh__dyad/.github/workflows/cancel-ci-after-merge.yml)<br>[.github/workflows/cancel-claude-pr-review-after-merge.yml](../../../../sources/dyad-sh__dyad/.github/workflows/cancel-claude-pr-review-after-merge.yml)<br>[.github/workflows/ci.yml](../../../../sources/dyad-sh__dyad/.github/workflows/ci.yml)<br>[.github/workflows/cla.yml](../../../../sources/dyad-sh__dyad/.github/workflows/cla.yml)<br>[.github/workflows/claude-check-workflows.yml](../../../../sources/dyad-sh__dyad/.github/workflows/claude-check-workflows.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 57 | [SECURITY.md](../../../../sources/dyad-sh__dyad/SECURITY.md)<br>[vite.sandbox-worker.config.mts](../../../../sources/dyad-sh__dyad/vite.sandbox-worker.config.mts)<br>[testing/fake-oauth-mcp-server.mjs](../../../../sources/dyad-sh__dyad/testing/fake-oauth-mcp-server.mjs)<br>[testing/run-fake-oauth-mcp-server.sh](../../../../sources/dyad-sh__dyad/testing/run-fake-oauth-mcp-server.sh)<br>[src/prompts/security_review_prompt.ts](../../../../sources/dyad-sh__dyad/src/prompts/security_review_prompt.ts)<br>[src/pro/main/ipc/handlers/local_agent/tools/execute_sandbox_script.spec.ts](../../../../sources/dyad-sh__dyad/src/pro/main/ipc/handlers/local_agent/tools/execute_sandbox_script.spec.ts) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/dyad-sh__dyad/AGENTS.md)<br>[.cursor/rules/ipc.mdc](../../../../sources/dyad-sh__dyad/.cursor/rules/ipc.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/main.ts`, `scaffold/src/App.css`, `scaffold/src/App.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `src/main.ts`, `scaffold/src/App.css`, `scaffold/src/App.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/add-macos-cert.sh`, `src/pro/main/ipc/handlers/local_agent/agent_tool_handlers.ts`.
4. retrieval/memory/indexing 확인: `index.html`, `workers/code_explorer/core/index.ts`, `testing/fake-llm-server/index.ts`.
5. test/eval 파일로 동작 검증: `vitest.eval.config.ts`, `src/db_reset.test.ts`, `src/db.test.ts`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Local, open source AI app builder for power users ✨ v0 / Lovable / Replit / Bolt alternative 🌟 Star if you like it!. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
