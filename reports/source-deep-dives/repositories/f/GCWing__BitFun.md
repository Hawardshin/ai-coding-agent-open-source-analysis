# GCWing/BitFun 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

BitFun is a desktop-grade Agent runtimeand a ready-to-use suite of desktop Agent applications.with built-in Code Agent 、 Cowork Agent、Computer Use. It has memory, personality, and the ability to evolve over time

## 요약

- 조사 단위: `sources/GCWing__BitFun` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,839 files, 800 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=src/web-ui/src/locales/zh-TW/settings/mcp-tools.json, src/web-ui/src/locales/zh-TW/settings/mcp.json, src/web-ui/src/locales/zh-CN/settings/mcp-tools.json이고, 의존성 단서는 mcp, react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | GCWing/BitFun |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 1070 |
| Forks | 117 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/GCWing__BitFun](../../../../sources/GCWing__BitFun) |
| 기존 보고서 | [reports/global-trending/repositories/GCWing__BitFun.md](../../../global-trending/repositories/GCWing__BitFun.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3839 / 800 |
| 관측 최대 깊이 | 12 |
| 상위 디렉터리 | .github, BitFun-Installer, docs, MiniApp, png, resources, scripts, src, tests |
| 상위 확장자 | .ts: 1068, .rs: 1049, .tsx: 465, .scss: 295, .md: 288, .json: 177, .xsd: 117, .py: 53, .js: 49, .css: 44, .png: 38, .mjs: 32 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 264 |
| tests | validation surface | 81 |
| docs | documentation surface | 12 |
| .github | ci surface | 1 |
| BitFun-Installer | top-level component | 1 |
| MiniApp | top-level component | 1 |
| png | top-level component | 1 |
| resources | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | copy-monaco | copyfiles -u 5 "src/web-ui/node_modules/monaco-editor/min/vs/**/*" src/web-ui/public/monaco-editor |
| utility | package.json | copy-icons | copyfiles -f "src/apps/desktop/icons/Logo-ICON.png" "src/web-ui/public/" |
| utility | package.json | copy-assets | pnpm run copy-monaco && pnpm run copy-icons |
| utility | package.json | generate-version | node scripts/generate-version.cjs |
| utility | package.json | generate-all | pnpm run generate-version |
| utility | package.json | postinstall | pnpm run copy-assets |
| serve-dev | package.json | dev | node scripts/dev.cjs web |
| serve-dev | package.json | dev:web | pnpm --dir src/web-ui dev |
| serve-dev | package.json | dev:mobile-web | pnpm --dir src/mobile-web dev |
| serve-dev | package.json | dev:mobile-web:host | pnpm --dir src/mobile-web dev --host |
| utility | package.json | preview:mobile-web | pnpm --dir src/mobile-web preview |
| quality | package.json | lint:web | pnpm --dir src/web-ui run lint |
| quality | package.json | lint:web:fix | pnpm --dir src/web-ui run lint:fix |
| quality | package.json | type-check:mobile-web | pnpm --dir src/mobile-web run type-check |
| utility | package.json | i18n:generate | node scripts/generate-i18n-contract.mjs |
| test | package.json | i18n:contract:test | node --test scripts/i18n-contract.test.mjs |
| test | package.json | i18n:contract:test:ci | cross-env BITFUN_I18N_CONTRACT_TEST_PROFILE=ci node --test scripts/i18n-contract.test.mjs |
| utility | package.json | i18n:audit | node scripts/i18n-audit.mjs |
| utility | package.json | theme:color-audit | node scripts/audit-theme-colors.mjs |
| test | package.json | theme:color-audit:test | node --test scripts/audit-theme-colors.test.mjs |
| quality | package.json | check:repo-hygiene | node scripts/check-repo-hygiene.mjs |
| quality | package.json | check:github-config | pnpm --dir src/web-ui exec node ../../scripts/check-github-config.mjs |
| quality | package.json | fmt:rs | node scripts/format-changed-rust.mjs |
| build | package.json | prebuild | pnpm run prebuild:web |
| build | package.json | prebuild:web | pnpm run copy-assets --silent && pnpm run generate-all --silent |
| quality | package.json | type-check:web | pnpm --dir src/web-ui run type-check |
| build | package.json | build | pnpm run build:web |
| utility | package.json | verify:monaco-assets | node scripts/verify-monaco-assets.cjs |
| build | package.json | build:web | pnpm run type-check:web && pnpm --dir src/web-ui build && pnpm run verify:monaco-assets |
| build | package.json | build:mobile-web | pnpm --dir src/mobile-web build |
| build | package.json | prepare:mobile-web | node scripts/mobile-web-build.cjs |
| utility | package.json | preview | pnpm --dir src/web-ui preview |
| serve-dev | package.json | desktop:dev | node scripts/dev.cjs desktop |
| serve-dev | package.json | desktop:preview:debug | node scripts/dev.cjs desktop-preview |
| serve-dev | package.json | desktop:dev:raw | cross-env-shell CI=true "cd src/apps/desktop && tauri dev" |
| build | package.json | desktop:build | node scripts/desktop-tauri-build.mjs |
| build | package.json | desktop:build:fast | node scripts/desktop-tauri-build.mjs --debug --no-bundle |
| serve-dev | package.json | desktop:build:release-fast | node scripts/desktop-tauri-build.mjs --no-bundle -- --profile release-fast --features devtools |
| build | package.json | desktop:build:exe | node scripts/desktop-tauri-build.mjs --no-bundle |
| build | package.json | desktop:build:nsis | node scripts/desktop-tauri-build.mjs --bundles nsis |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
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
| mcp | [src/web-ui/src/locales/zh-TW/settings/mcp-tools.json](../../../../sources/GCWing__BitFun/src/web-ui/src/locales/zh-TW/settings/mcp-tools.json) | mcp signal |
| mcp | [src/web-ui/src/locales/zh-TW/settings/mcp.json](../../../../sources/GCWing__BitFun/src/web-ui/src/locales/zh-TW/settings/mcp.json) | mcp signal |
| mcp | [src/web-ui/src/locales/zh-CN/settings/mcp-tools.json](../../../../sources/GCWing__BitFun/src/web-ui/src/locales/zh-CN/settings/mcp-tools.json) | mcp signal |
| mcp | [src/web-ui/src/locales/zh-CN/settings/mcp.json](../../../../sources/GCWing__BitFun/src/web-ui/src/locales/zh-CN/settings/mcp.json) | mcp signal |
| agentRuntime | [AGENTS-CN.md](../../../../sources/GCWing__BitFun/AGENTS-CN.md) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/GCWing__BitFun/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/e2e/AGENTS-CN.md](../../../../sources/GCWing__BitFun/tests/e2e/AGENTS-CN.md) | agentRuntime signal |
| agentRuntime | [tests/e2e/AGENTS.md](../../../../sources/GCWing__BitFun/tests/e2e/AGENTS.md) | agentRuntime signal |
| entrypoints | [src/web-ui/src/main.tsx](../../../../sources/GCWing__BitFun/src/web-ui/src/main.tsx) | entrypoints signal |
| entrypoints | [src/web-ui/src/component-library/preview/main.tsx](../../../../sources/GCWing__BitFun/src/web-ui/src/component-library/preview/main.tsx) | entrypoints signal |
| entrypoints | [src/mobile-web/src/App.tsx](../../../../sources/GCWing__BitFun/src/mobile-web/src/App.tsx) | entrypoints signal |
| entrypoints | [src/mobile-web/src/main.tsx](../../../../sources/GCWing__BitFun/src/mobile-web/src/main.tsx) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 139 | [src/web-ui/src/main.tsx](../../../../sources/GCWing__BitFun/src/web-ui/src/main.tsx)<br>[src/web-ui/src/component-library/preview/main.tsx](../../../../sources/GCWing__BitFun/src/web-ui/src/component-library/preview/main.tsx)<br>[src/mobile-web/src/App.tsx](../../../../sources/GCWing__BitFun/src/mobile-web/src/App.tsx)<br>[src/mobile-web/src/main.tsx](../../../../sources/GCWing__BitFun/src/mobile-web/src/main.tsx)<br>[src/crates/interfaces/acp/src/server.rs](../../../../sources/GCWing__BitFun/src/crates/interfaces/acp/src/server.rs)<br>[src/apps/server/src/ai_relay.rs](../../../../sources/GCWing__BitFun/src/apps/server/src/ai_relay.rs)<br>[src/apps/server/src/bootstrap.rs](../../../../sources/GCWing__BitFun/src/apps/server/src/bootstrap.rs)<br>[src/apps/server/src/main.rs](../../../../sources/GCWing__BitFun/src/apps/server/src/main.rs) |
| agentRuntime | 1019 | [AGENTS-CN.md](../../../../sources/GCWing__BitFun/AGENTS-CN.md)<br>[AGENTS.md](../../../../sources/GCWing__BitFun/AGENTS.md)<br>[tests/e2e/AGENTS-CN.md](../../../../sources/GCWing__BitFun/tests/e2e/AGENTS-CN.md)<br>[tests/e2e/AGENTS.md](../../../../sources/GCWing__BitFun/tests/e2e/AGENTS.md)<br>[src/web-ui/AGENTS-CN.md](../../../../sources/GCWing__BitFun/src/web-ui/AGENTS-CN.md)<br>[src/web-ui/AGENTS.md](../../../../sources/GCWing__BitFun/src/web-ui/AGENTS.md)<br>[src/web-ui/src/tools/index.ts](../../../../sources/GCWing__BitFun/src/web-ui/src/tools/index.ts)<br>[src/web-ui/src/tools/initializeTools.ts](../../../../sources/GCWing__BitFun/src/web-ui/src/tools/initializeTools.ts) |
| mcp | 76 | [src/web-ui/src/locales/zh-TW/settings/mcp-tools.json](../../../../sources/GCWing__BitFun/src/web-ui/src/locales/zh-TW/settings/mcp-tools.json)<br>[src/web-ui/src/locales/zh-TW/settings/mcp.json](../../../../sources/GCWing__BitFun/src/web-ui/src/locales/zh-TW/settings/mcp.json)<br>[src/web-ui/src/locales/zh-CN/settings/mcp-tools.json](../../../../sources/GCWing__BitFun/src/web-ui/src/locales/zh-CN/settings/mcp-tools.json)<br>[src/web-ui/src/locales/zh-CN/settings/mcp.json](../../../../sources/GCWing__BitFun/src/web-ui/src/locales/zh-CN/settings/mcp.json)<br>[src/web-ui/src/locales/en-US/settings/mcp-tools.json](../../../../sources/GCWing__BitFun/src/web-ui/src/locales/en-US/settings/mcp-tools.json)<br>[src/web-ui/src/locales/en-US/settings/mcp.json](../../../../sources/GCWing__BitFun/src/web-ui/src/locales/en-US/settings/mcp.json)<br>[src/web-ui/src/infrastructure/mcp/toolInfoCache.ts](../../../../sources/GCWing__BitFun/src/web-ui/src/infrastructure/mcp/toolInfoCache.ts)<br>[src/web-ui/src/infrastructure/mcp/toolName.ts](../../../../sources/GCWing__BitFun/src/web-ui/src/infrastructure/mcp/toolName.ts) |
| retrieval | 267 | [tests/e2e/page-objects/index.ts](../../../../sources/GCWing__BitFun/tests/e2e/page-objects/index.ts)<br>[tests/e2e/helpers/index.ts](../../../../sources/GCWing__BitFun/tests/e2e/helpers/index.ts)<br>[src/web-ui/index.html](../../../../sources/GCWing__BitFun/src/web-ui/index.html)<br>[src/web-ui/src/tools/index.ts](../../../../sources/GCWing__BitFun/src/web-ui/src/tools/index.ts)<br>[src/web-ui/src/tools/workspace/index.ts](../../../../sources/GCWing__BitFun/src/web-ui/src/tools/workspace/index.ts)<br>[src/web-ui/src/tools/workspace/types/index.ts](../../../../sources/GCWing__BitFun/src/web-ui/src/tools/workspace/types/index.ts)<br>[src/web-ui/src/tools/terminal/index.ts](../../../../sources/GCWing__BitFun/src/web-ui/src/tools/terminal/index.ts)<br>[src/web-ui/src/tools/terminal/utils/index.ts](../../../../sources/GCWing__BitFun/src/web-ui/src/tools/terminal/utils/index.ts) |
| spec | 82 | [tests/e2e/specs/insights-screenshot.spec.ts](../../../../sources/GCWing__BitFun/tests/e2e/specs/insights-screenshot.spec.ts)<br>[tests/e2e/specs/l0-i18n.spec.ts](../../../../sources/GCWing__BitFun/tests/e2e/specs/l0-i18n.spec.ts)<br>[tests/e2e/specs/l0-navigation.spec.ts](../../../../sources/GCWing__BitFun/tests/e2e/specs/l0-navigation.spec.ts)<br>[tests/e2e/specs/l0-notification.spec.ts](../../../../sources/GCWing__BitFun/tests/e2e/specs/l0-notification.spec.ts)<br>[tests/e2e/specs/l0-observe.spec.ts](../../../../sources/GCWing__BitFun/tests/e2e/specs/l0-observe.spec.ts)<br>[tests/e2e/specs/l0-open-settings.spec.ts](../../../../sources/GCWing__BitFun/tests/e2e/specs/l0-open-settings.spec.ts)<br>[tests/e2e/specs/l0-open-workspace.spec.ts](../../../../sources/GCWing__BitFun/tests/e2e/specs/l0-open-workspace.spec.ts)<br>[tests/e2e/specs/l0-smoke.spec.ts](../../../../sources/GCWing__BitFun/tests/e2e/specs/l0-smoke.spec.ts) |
| eval | 379 | [tests/e2e/.gitignore](../../../../sources/GCWing__BitFun/tests/e2e/.gitignore)<br>[tests/e2e/AGENTS-CN.md](../../../../sources/GCWing__BitFun/tests/e2e/AGENTS-CN.md)<br>[tests/e2e/AGENTS.md](../../../../sources/GCWing__BitFun/tests/e2e/AGENTS.md)<br>[tests/e2e/E2E-TESTING-GUIDE.md](../../../../sources/GCWing__BitFun/tests/e2e/E2E-TESTING-GUIDE.md)<br>[tests/e2e/E2E-TESTING-GUIDE.zh-CN.md](../../../../sources/GCWing__BitFun/tests/e2e/E2E-TESTING-GUIDE.zh-CN.md)<br>[tests/e2e/package-lock.json](../../../../sources/GCWing__BitFun/tests/e2e/package-lock.json)<br>[tests/e2e/package.json](../../../../sources/GCWing__BitFun/tests/e2e/package.json)<br>[tests/e2e/README.md](../../../../sources/GCWing__BitFun/tests/e2e/README.md) |
| security | 18 | [src/crates/services/services-integrations/src/mcp/auth.rs](../../../../sources/GCWing__BitFun/src/crates/services/services-integrations/src/mcp/auth.rs)<br>[src/crates/services/services-integrations/src/mcp/server/runtime_policy.rs](../../../../sources/GCWing__BitFun/src/crates/services/services-integrations/src/mcp/server/runtime_policy.rs)<br>[src/crates/execution/agent-runtime/tests/deep_review_policy_contracts.rs](../../../../sources/GCWing__BitFun/src/crates/execution/agent-runtime/tests/deep_review_policy_contracts.rs)<br>[src/crates/execution/agent-runtime/src/skills/policy.rs](../../../../sources/GCWing__BitFun/src/crates/execution/agent-runtime/src/skills/policy.rs)<br>[src/crates/execution/agent-runtime/src/deep_review/concurrency_policy.rs](../../../../sources/GCWing__BitFun/src/crates/execution/agent-runtime/src/deep_review/concurrency_policy.rs)<br>[src/crates/execution/agent-runtime/src/deep_review/execution_policy.rs](../../../../sources/GCWing__BitFun/src/crates/execution/agent-runtime/src/deep_review/execution_policy.rs)<br>[src/crates/contracts/product-domains/src/miniapp/permission_policy.rs](../../../../sources/GCWing__BitFun/src/crates/contracts/product-domains/src/miniapp/permission_policy.rs)<br>[src/crates/assembly/core/src/service/mcp/auth.rs](../../../../sources/GCWing__BitFun/src/crates/assembly/core/src/service/mcp/auth.rs) |
| ci | 7 | [scripts/ci/setup-openssl-windows.ps1](../../../../sources/GCWing__BitFun/scripts/ci/setup-openssl-windows.ps1)<br>[.github/workflows/ci.yml](../../../../sources/GCWing__BitFun/.github/workflows/ci.yml)<br>[.github/workflows/cli-package-manual.yml](../../../../sources/GCWing__BitFun/.github/workflows/cli-package-manual.yml)<br>[.github/workflows/cli-package.yml](../../../../sources/GCWing__BitFun/.github/workflows/cli-package.yml)<br>[.github/workflows/desktop-package.yml](../../../../sources/GCWing__BitFun/.github/workflows/desktop-package.yml)<br>[.github/workflows/nightly.yml](../../../../sources/GCWing__BitFun/.github/workflows/nightly.yml)<br>[.github/workflows/release-please.yml](../../../../sources/GCWing__BitFun/.github/workflows/release-please.yml) |
| container | 2 | [src/apps/relay-server/docker-compose.yml](../../../../sources/GCWing__BitFun/src/apps/relay-server/docker-compose.yml)<br>[src/apps/relay-server/Dockerfile](../../../../sources/GCWing__BitFun/src/apps/relay-server/Dockerfile) |
| instruction | 36 | [AGENTS.md](../../../../sources/GCWing__BitFun/AGENTS.md)<br>[tests/e2e/AGENTS.md](../../../../sources/GCWing__BitFun/tests/e2e/AGENTS.md)<br>[src/web-ui/AGENTS.md](../../../../sources/GCWing__BitFun/src/web-ui/AGENTS.md)<br>[src/web-ui/src/flow_chat/deep-review/AGENTS.md](../../../../sources/GCWing__BitFun/src/web-ui/src/flow_chat/deep-review/AGENTS.md)<br>[src/mobile-web/AGENTS.md](../../../../sources/GCWing__BitFun/src/mobile-web/AGENTS.md)<br>[src/crates/services/AGENTS.md](../../../../sources/GCWing__BitFun/src/crates/services/AGENTS.md)<br>[src/crates/services/terminal/AGENTS.md](../../../../sources/GCWing__BitFun/src/crates/services/terminal/AGENTS.md)<br>[src/crates/services/services-integrations/AGENTS.md](../../../../sources/GCWing__BitFun/src/crates/services/services-integrations/AGENTS.md) |
| docs | 65 | [README.md](../../../../sources/GCWing__BitFun/README.md)<br>[README.zh-CN.md](../../../../sources/GCWing__BitFun/README.zh-CN.md)<br>[tests/e2e/README.md](../../../../sources/GCWing__BitFun/tests/e2e/README.md)<br>[tests/e2e/README.zh-CN.md](../../../../sources/GCWing__BitFun/tests/e2e/README.zh-CN.md)<br>[src/web-ui/README.md](../../../../sources/GCWing__BitFun/src/web-ui/README.md)<br>[src/web-ui/README.zh-CN.md](../../../../sources/GCWing__BitFun/src/web-ui/README.zh-CN.md)<br>[src/web-ui/src/tools/lsp/README.md](../../../../sources/GCWing__BitFun/src/web-ui/src/tools/lsp/README.md)<br>[src/web-ui/src/infrastructure/i18n/README.md](../../../../sources/GCWing__BitFun/src/web-ui/src/infrastructure/i18n/README.md) |
| config | 38 | [Cargo.toml](../../../../sources/GCWing__BitFun/Cargo.toml)<br>[package.json](../../../../sources/GCWing__BitFun/package.json)<br>[pnpm-workspace.yaml](../../../../sources/GCWing__BitFun/pnpm-workspace.yaml)<br>[tests/e2e/package.json](../../../../sources/GCWing__BitFun/tests/e2e/package.json)<br>[tests/e2e/tsconfig.json](../../../../sources/GCWing__BitFun/tests/e2e/tsconfig.json)<br>[src/web-ui/package.json](../../../../sources/GCWing__BitFun/src/web-ui/package.json)<br>[src/web-ui/tsconfig.json](../../../../sources/GCWing__BitFun/src/web-ui/tsconfig.json)<br>[src/mobile-web/package.json](../../../../sources/GCWing__BitFun/src/mobile-web/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 379 | [tests/e2e/.gitignore](../../../../sources/GCWing__BitFun/tests/e2e/.gitignore)<br>[tests/e2e/AGENTS-CN.md](../../../../sources/GCWing__BitFun/tests/e2e/AGENTS-CN.md)<br>[tests/e2e/AGENTS.md](../../../../sources/GCWing__BitFun/tests/e2e/AGENTS.md)<br>[tests/e2e/E2E-TESTING-GUIDE.md](../../../../sources/GCWing__BitFun/tests/e2e/E2E-TESTING-GUIDE.md)<br>[tests/e2e/E2E-TESTING-GUIDE.zh-CN.md](../../../../sources/GCWing__BitFun/tests/e2e/E2E-TESTING-GUIDE.zh-CN.md)<br>[tests/e2e/package-lock.json](../../../../sources/GCWing__BitFun/tests/e2e/package-lock.json) |
| CI workflow | 7 | [scripts/ci/setup-openssl-windows.ps1](../../../../sources/GCWing__BitFun/scripts/ci/setup-openssl-windows.ps1)<br>[.github/workflows/ci.yml](../../../../sources/GCWing__BitFun/.github/workflows/ci.yml)<br>[.github/workflows/cli-package-manual.yml](../../../../sources/GCWing__BitFun/.github/workflows/cli-package-manual.yml)<br>[.github/workflows/cli-package.yml](../../../../sources/GCWing__BitFun/.github/workflows/cli-package.yml)<br>[.github/workflows/desktop-package.yml](../../../../sources/GCWing__BitFun/.github/workflows/desktop-package.yml)<br>[.github/workflows/nightly.yml](../../../../sources/GCWing__BitFun/.github/workflows/nightly.yml) |
| 컨테이너/배포 | 2 | [src/apps/relay-server/docker-compose.yml](../../../../sources/GCWing__BitFun/src/apps/relay-server/docker-compose.yml)<br>[src/apps/relay-server/Dockerfile](../../../../sources/GCWing__BitFun/src/apps/relay-server/Dockerfile) |
| 보안/정책 | 18 | [src/crates/services/services-integrations/src/mcp/auth.rs](../../../../sources/GCWing__BitFun/src/crates/services/services-integrations/src/mcp/auth.rs)<br>[src/crates/services/services-integrations/src/mcp/server/runtime_policy.rs](../../../../sources/GCWing__BitFun/src/crates/services/services-integrations/src/mcp/server/runtime_policy.rs)<br>[src/crates/execution/agent-runtime/tests/deep_review_policy_contracts.rs](../../../../sources/GCWing__BitFun/src/crates/execution/agent-runtime/tests/deep_review_policy_contracts.rs)<br>[src/crates/execution/agent-runtime/src/skills/policy.rs](../../../../sources/GCWing__BitFun/src/crates/execution/agent-runtime/src/skills/policy.rs)<br>[src/crates/execution/agent-runtime/src/deep_review/concurrency_policy.rs](../../../../sources/GCWing__BitFun/src/crates/execution/agent-runtime/src/deep_review/concurrency_policy.rs)<br>[src/crates/execution/agent-runtime/src/deep_review/execution_policy.rs](../../../../sources/GCWing__BitFun/src/crates/execution/agent-runtime/src/deep_review/execution_policy.rs) |
| 에이전트 지시문 | 36 | [AGENTS.md](../../../../sources/GCWing__BitFun/AGENTS.md)<br>[tests/e2e/AGENTS.md](../../../../sources/GCWing__BitFun/tests/e2e/AGENTS.md)<br>[src/web-ui/AGENTS.md](../../../../sources/GCWing__BitFun/src/web-ui/AGENTS.md)<br>[src/web-ui/src/flow_chat/deep-review/AGENTS.md](../../../../sources/GCWing__BitFun/src/web-ui/src/flow_chat/deep-review/AGENTS.md)<br>[src/mobile-web/AGENTS.md](../../../../sources/GCWing__BitFun/src/mobile-web/AGENTS.md)<br>[src/crates/services/AGENTS.md](../../../../sources/GCWing__BitFun/src/crates/services/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/web-ui/src/locales/zh-TW/settings/mcp-tools.json`, `src/web-ui/src/locales/zh-TW/settings/mcp.json`, `src/web-ui/src/locales/zh-CN/settings/mcp-tools.json`.
2. entrypoint를 따라 실행 흐름 확인: `src/web-ui/src/main.tsx`, `src/web-ui/src/component-library/preview/main.tsx`, `src/mobile-web/src/App.tsx`.
3. agent/tool runtime 매핑: `AGENTS-CN.md`, `AGENTS.md`, `tests/e2e/AGENTS-CN.md`.
4. retrieval/memory/indexing 확인: `tests/e2e/page-objects/index.ts`, `tests/e2e/helpers/index.ts`, `src/web-ui/index.html`.
5. test/eval 파일로 동작 검증: `tests/e2e/.gitignore`, `tests/e2e/AGENTS-CN.md`, `tests/e2e/AGENTS.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 BitFun is a desktop grade Agent runtimeand a ready to use suite of desktop Agent applications.with built in Code Agent 、. 핵심 구조 신호는 Rust, package.json, Cargo.toml, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
