# Kilo-Org/kilocode 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 6848 files, 914 directories.

## 요약

- 조사 단위: `sources/Kilo-Org__kilocode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 6,841 files, 912 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/opencode/test/server/httpapi-mcp-oauth.test.ts, packages/opencode/test/server/httpapi-mcp.test.ts, packages/opencode/test/mcp/headers.test.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Kilo-Org/kilocode |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 21173 |
| Forks | 2674 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/Kilo-Org__kilocode](../../../../sources/Kilo-Org__kilocode) |
| 기존 보고서 | [reports/global-trending/repositories/Kilo-Org__kilocode.md](../../../global-trending/repositories/Kilo-Org__kilocode.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 6841 / 912 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .changeset, .github, .husky, .kilo, .kilocode, .opencode, .zed, bin, github, nix, packages, patches, script, specs |
| 상위 확장자 | .ts: 2718, .svg: 1302, .tsx: 703, .png: 529, .md: 421, .kt: 356, .json: 194, .css: 164, .txt: 56, .scm: 52, (none): 46, .aac: 45 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/opencode | packages workspace | 111 |
| packages/ui | packages workspace | 66 |
| packages/kilo-vscode | packages workspace | 64 |
| packages/kilo-docs | packages workspace | 18 |
| packages/storybook | packages workspace | 17 |
| packages/sdk | packages workspace | 13 |
| packages/plugin-atomic-chat | packages workspace | 11 |
| packages/kilo-ui | packages workspace | 6 |
| packages/containers | packages workspace | 5 |
| packages/llm | packages workspace | 5 |
| packages/script | packages workspace | 5 |
| packages/kilo-jetbrains | packages workspace | 4 |
| packages/plugin | packages workspace | 4 |
| packages/kilo-gateway | packages workspace | 3 |
| packages/kilo-indexing | packages workspace | 3 |
| packages/kilo-telemetry | packages workspace | 3 |
| packages/kilo-web-ui | packages workspace | 3 |
| packages/kilo-console | packages workspace | 2 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | bun run --cwd packages/opencode --conditions=browser src/index.ts |
| serve-dev | package.json | dev:storybook | bun --cwd packages/storybook storybook |
| quality | package.json | lint | oxlint |
| quality | package.json | typecheck | bun turbo typecheck |
| utility | package.json | upgrade-opentui | bun run script/upgrade-opentui.ts |
| utility | package.json | postinstall | bun run --cwd packages/opencode fix-node-pty && bun run script/setup-git.ts |
| utility | package.json | prepare | husky |
| utility | package.json | random | echo 'Random script' |
| utility | package.json | hello | echo 'Hello World!' |
| test | package.json | test | echo 'do not run tests from root' && exit 1 |
| utility | package.json | extension | bun --cwd packages/kilo-vscode script/launch.ts |
| serve-dev | package.json | dev-setup | bun run --cwd packages/opencode --conditions=browser src/index.ts dev-setup |


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
| mcp | [packages/opencode/test/server/httpapi-mcp-oauth.test.ts](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/server/httpapi-mcp-oauth.test.ts) | mcp signal |
| mcp | [packages/opencode/test/server/httpapi-mcp.test.ts](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/server/httpapi-mcp.test.ts) | mcp signal |
| mcp | [packages/opencode/test/mcp/headers.test.ts](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/mcp/headers.test.ts) | mcp signal |
| mcp | [packages/opencode/test/mcp/lifecycle.test.ts](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/mcp/lifecycle.test.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/Kilo-Org__kilocode/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/ui/src/theme/context.tsx](../../../../sources/Kilo-Org__kilocode/packages/ui/src/theme/context.tsx) | agentRuntime signal |
| agentRuntime | [packages/ui/src/hooks/create-auto-scroll.tsx](../../../../sources/Kilo-Org__kilocode/packages/ui/src/hooks/create-auto-scroll.tsx) | agentRuntime signal |
| agentRuntime | [packages/ui/src/hooks/index.ts](../../../../sources/Kilo-Org__kilocode/packages/ui/src/hooks/index.ts) | agentRuntime signal |
| entrypoints | [packages/storybook/.storybook/main.ts](../../../../sources/Kilo-Org__kilocode/packages/storybook/.storybook/main.ts) | entrypoints signal |
| entrypoints | [packages/sdk/js/test/server.test.ts](../../../../sources/Kilo-Org__kilocode/packages/sdk/js/test/server.test.ts) | entrypoints signal |
| entrypoints | [packages/sdk/js/src/index.ts](../../../../sources/Kilo-Org__kilocode/packages/sdk/js/src/index.ts) | entrypoints signal |
| entrypoints | [packages/sdk/js/src/server.ts](../../../../sources/Kilo-Org__kilocode/packages/sdk/js/src/server.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 32 | [packages/storybook/.storybook/main.ts](../../../../sources/Kilo-Org__kilocode/packages/storybook/.storybook/main.ts)<br>[packages/sdk/js/test/server.test.ts](../../../../sources/Kilo-Org__kilocode/packages/sdk/js/test/server.test.ts)<br>[packages/sdk/js/src/index.ts](../../../../sources/Kilo-Org__kilocode/packages/sdk/js/src/index.ts)<br>[packages/sdk/js/src/server.ts](../../../../sources/Kilo-Org__kilocode/packages/sdk/js/src/server.ts)<br>[packages/sdk/js/src/v2/server.ts](../../../../sources/Kilo-Org__kilocode/packages/sdk/js/src/v2/server.ts)<br>[packages/script/src/index.ts](../../../../sources/Kilo-Org__kilocode/packages/script/src/index.ts)<br>[packages/plugin-atomic-chat/src/index.ts](../../../../sources/Kilo-Org__kilocode/packages/plugin-atomic-chat/src/index.ts)<br>[packages/plugin/src/index.ts](../../../../sources/Kilo-Org__kilocode/packages/plugin/src/index.ts) |
| agentRuntime | 604 | [AGENTS.md](../../../../sources/Kilo-Org__kilocode/AGENTS.md)<br>[packages/ui/src/theme/context.tsx](../../../../sources/Kilo-Org__kilocode/packages/ui/src/theme/context.tsx)<br>[packages/ui/src/hooks/create-auto-scroll.tsx](../../../../sources/Kilo-Org__kilocode/packages/ui/src/hooks/create-auto-scroll.tsx)<br>[packages/ui/src/hooks/index.ts](../../../../sources/Kilo-Org__kilocode/packages/ui/src/hooks/index.ts)<br>[packages/ui/src/hooks/use-filtered-list.tsx](../../../../sources/Kilo-Org__kilocode/packages/ui/src/hooks/use-filtered-list.tsx)<br>[packages/ui/src/context/data.tsx](../../../../sources/Kilo-Org__kilocode/packages/ui/src/context/data.tsx)<br>[packages/ui/src/context/dialog.tsx](../../../../sources/Kilo-Org__kilocode/packages/ui/src/context/dialog.tsx)<br>[packages/ui/src/context/file.tsx](../../../../sources/Kilo-Org__kilocode/packages/ui/src/context/file.tsx) |
| mcp | 70 | [packages/opencode/test/server/httpapi-mcp-oauth.test.ts](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/server/httpapi-mcp-oauth.test.ts)<br>[packages/opencode/test/server/httpapi-mcp.test.ts](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/server/httpapi-mcp.test.ts)<br>[packages/opencode/test/mcp/headers.test.ts](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/mcp/headers.test.ts)<br>[packages/opencode/test/mcp/lifecycle.test.ts](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/mcp/lifecycle.test.ts)<br>[packages/opencode/test/mcp/oauth-auto-connect.test.ts](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/mcp/oauth-auto-connect.test.ts)<br>[packages/opencode/test/mcp/oauth-browser.test.ts](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/mcp/oauth-browser.test.ts)<br>[packages/opencode/test/mcp/oauth-callback.test.ts](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/mcp/oauth-callback.test.ts)<br>[packages/opencode/test/kilocode/mcp-branding.test.ts](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/kilocode/mcp-branding.test.ts) |
| retrieval | 164 | [script/upstream/index.ts](../../../../sources/Kilo-Org__kilocode/script/upstream/index.ts)<br>[packages/ui/src/theme/index.ts](../../../../sources/Kilo-Org__kilocode/packages/ui/src/theme/index.ts)<br>[packages/ui/src/styles/index.css](../../../../sources/Kilo-Org__kilocode/packages/ui/src/styles/index.css)<br>[packages/ui/src/styles/tailwind/index.css](../../../../sources/Kilo-Org__kilocode/packages/ui/src/styles/tailwind/index.css)<br>[packages/ui/src/pierre/index.ts](../../../../sources/Kilo-Org__kilocode/packages/ui/src/pierre/index.ts)<br>[packages/ui/src/hooks/index.ts](../../../../sources/Kilo-Org__kilocode/packages/ui/src/hooks/index.ts)<br>[packages/ui/src/context/index.ts](../../../../sources/Kilo-Org__kilocode/packages/ui/src/context/index.ts)<br>[packages/sdk/js/src/index.ts](../../../../sources/Kilo-Org__kilocode/packages/sdk/js/src/index.ts) |
| spec | 38 | [packages/ui/src/assets/icons/file-types/architecture.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/architecture.svg)<br>[packages/ui/src/assets/icons/file-types/roadmap.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/roadmap.svg)<br>[packages/kilo-vscode/tests/accessibility.spec.ts](../../../../sources/Kilo-Org__kilocode/packages/kilo-vscode/tests/accessibility.spec.ts)<br>[packages/kilo-vscode/tests/diff-scroll-preservation.spec.ts](../../../../sources/Kilo-Org__kilocode/packages/kilo-vscode/tests/diff-scroll-preservation.spec.ts)<br>[packages/kilo-vscode/tests/history-accessibility.spec.ts](../../../../sources/Kilo-Org__kilocode/packages/kilo-vscode/tests/history-accessibility.spec.ts)<br>[packages/kilo-vscode/tests/indexing-provider-blur-race.spec.ts](../../../../sources/Kilo-Org__kilocode/packages/kilo-vscode/tests/indexing-provider-blur-race.spec.ts)<br>[packages/kilo-vscode/tests/markdown-incremental-dom.spec.ts](../../../../sources/Kilo-Org__kilocode/packages/kilo-vscode/tests/markdown-incremental-dom.spec.ts)<br>[packages/kilo-vscode/tests/model-selector-accessibility.spec.ts](../../../../sources/Kilo-Org__kilocode/packages/kilo-vscode/tests/model-selector-accessibility.spec.ts) |
| eval | 1483 | [script/upstream/VERIFICATION_TEST.md](../../../../sources/Kilo-Org__kilocode/script/upstream/VERIFICATION_TEST.md)<br>[script/upstream/utils/config.test.ts](../../../../sources/Kilo-Org__kilocode/script/upstream/utils/config.test.ts)<br>[script/upstream/utils/git.test.ts](../../../../sources/Kilo-Org__kilocode/script/upstream/utils/git.test.ts)<br>[script/upstream/utils/report.test.ts](../../../../sources/Kilo-Org__kilocode/script/upstream/utils/report.test.ts)<br>[script/upstream/transforms/keep-ours.test.ts](../../../../sources/Kilo-Org__kilocode/script/upstream/transforms/keep-ours.test.ts)<br>[script/upstream/transforms/preserve-versions.test.ts](../../../../sources/Kilo-Org__kilocode/script/upstream/transforms/preserve-versions.test.ts)<br>[script/upstream/transforms/skip-files.test.ts](../../../../sources/Kilo-Org__kilocode/script/upstream/transforms/skip-files.test.ts)<br>[script/upstream/transforms/transform-package-json.test.ts](../../../../sources/Kilo-Org__kilocode/script/upstream/transforms/transform-package-json.test.ts) |
| security | 136 | [SECURITY.md](../../../../sources/Kilo-Org__kilocode/SECURITY.md)<br>[packages/ui/src/assets/icons/file-types/folder-guard-open.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/folder-guard-open.svg)<br>[packages/ui/src/assets/icons/file-types/folder-guard.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/folder-guard.svg)<br>[packages/ui/src/assets/icons/file-types/folder-policy-open.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/folder-policy-open.svg)<br>[packages/ui/src/assets/icons/file-types/folder-policy.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/folder-policy.svg)<br>[packages/ui/src/assets/icons/file-types/folder-sandbox-open.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/folder-sandbox-open.svg)<br>[packages/ui/src/assets/icons/file-types/folder-sandbox.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/folder-sandbox.svg)<br>[packages/storybook/.storybook/mocks/app/context/permission.ts](../../../../sources/Kilo-Org__kilocode/packages/storybook/.storybook/mocks/app/context/permission.ts) |
| ci | 47 | [packages/ui/src/assets/icons/file-types/azure-pipelines.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/azure-pipelines.svg)<br>[packages/ui/src/assets/icons/file-types/buildkite.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/buildkite.svg)<br>[packages/ui/src/assets/icons/file-types/circleci_light.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/circleci_light.svg)<br>[packages/ui/src/assets/icons/file-types/circleci.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/circleci.svg)<br>[packages/ui/src/assets/icons/file-types/jenkins.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/jenkins.svg)<br>[.github/workflows/auto-docs.yml](../../../../sources/Kilo-Org__kilocode/.github/workflows/auto-docs.yml)<br>[.github/workflows/beta.yml](../../../../sources/Kilo-Org__kilocode/.github/workflows/beta.yml)<br>[.github/workflows/check-forbidden-strings.yml](../../../../sources/Kilo-Org__kilocode/.github/workflows/check-forbidden-strings.yml) |
| container | 6 | [packages/opencode/Dockerfile](../../../../sources/Kilo-Org__kilocode/packages/opencode/Dockerfile)<br>[packages/containers/tauri-linux/Dockerfile](../../../../sources/Kilo-Org__kilocode/packages/containers/tauri-linux/Dockerfile)<br>[packages/containers/rust/Dockerfile](../../../../sources/Kilo-Org__kilocode/packages/containers/rust/Dockerfile)<br>[packages/containers/publish/Dockerfile](../../../../sources/Kilo-Org__kilocode/packages/containers/publish/Dockerfile)<br>[packages/containers/bun-node/Dockerfile](../../../../sources/Kilo-Org__kilocode/packages/containers/bun-node/Dockerfile)<br>[packages/containers/base/Dockerfile](../../../../sources/Kilo-Org__kilocode/packages/containers/base/Dockerfile) |
| instruction | 10 | [AGENTS.md](../../../../sources/Kilo-Org__kilocode/AGENTS.md)<br>[packages/opencode/AGENTS.md](../../../../sources/Kilo-Org__kilocode/packages/opencode/AGENTS.md)<br>[packages/opencode/test/AGENTS.md](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/AGENTS.md)<br>[packages/opencode/test/server/AGENTS.md](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/server/AGENTS.md)<br>[packages/opencode/src/server/routes/instance/httpapi/AGENTS.md](../../../../sources/Kilo-Org__kilocode/packages/opencode/src/server/routes/instance/httpapi/AGENTS.md)<br>[packages/llm/AGENTS.md](../../../../sources/Kilo-Org__kilocode/packages/llm/AGENTS.md)<br>[packages/kilo-vscode/AGENTS.md](../../../../sources/Kilo-Org__kilocode/packages/kilo-vscode/AGENTS.md)<br>[packages/kilo-jetbrains/AGENTS.md](../../../../sources/Kilo-Org__kilocode/packages/kilo-jetbrains/AGENTS.md) |
| docs | 95 | [README.md](../../../../sources/Kilo-Org__kilocode/README.md)<br>[script/upstream/README.md](../../../../sources/Kilo-Org__kilocode/script/upstream/README.md)<br>[packages/ui/src/assets/icons/file-types/readme.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/readme.svg)<br>[packages/opencode/README.md](../../../../sources/Kilo-Org__kilocode/packages/opencode/README.md)<br>[packages/opencode/src/sync/README.md](../../../../sources/Kilo-Org__kilocode/packages/opencode/src/sync/README.md)<br>[packages/opencode/src/kilocode/docs/migration.md](../../../../sources/Kilo-Org__kilocode/packages/opencode/src/kilocode/docs/migration.md)<br>[packages/opencode/src/kilocode/docs/rules-migration.md](../../../../sources/Kilo-Org__kilocode/packages/opencode/src/kilocode/docs/rules-migration.md)<br>[packages/opencode/src/control-plane/dev/README.md](../../../../sources/Kilo-Org__kilocode/packages/opencode/src/control-plane/dev/README.md) |
| config | 49 | [package.json](../../../../sources/Kilo-Org__kilocode/package.json)<br>[tsconfig.json](../../../../sources/Kilo-Org__kilocode/tsconfig.json)<br>[turbo.json](../../../../sources/Kilo-Org__kilocode/turbo.json)<br>[script/upstream/package.json](../../../../sources/Kilo-Org__kilocode/script/upstream/package.json)<br>[script/upstream/tsconfig.json](../../../../sources/Kilo-Org__kilocode/script/upstream/tsconfig.json)<br>[packages/ui/package.json](../../../../sources/Kilo-Org__kilocode/packages/ui/package.json)<br>[packages/ui/tsconfig.json](../../../../sources/Kilo-Org__kilocode/packages/ui/tsconfig.json)<br>[packages/storybook/package.json](../../../../sources/Kilo-Org__kilocode/packages/storybook/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1483 | [script/upstream/VERIFICATION_TEST.md](../../../../sources/Kilo-Org__kilocode/script/upstream/VERIFICATION_TEST.md)<br>[script/upstream/utils/config.test.ts](../../../../sources/Kilo-Org__kilocode/script/upstream/utils/config.test.ts)<br>[script/upstream/utils/git.test.ts](../../../../sources/Kilo-Org__kilocode/script/upstream/utils/git.test.ts)<br>[script/upstream/utils/report.test.ts](../../../../sources/Kilo-Org__kilocode/script/upstream/utils/report.test.ts)<br>[script/upstream/transforms/keep-ours.test.ts](../../../../sources/Kilo-Org__kilocode/script/upstream/transforms/keep-ours.test.ts)<br>[script/upstream/transforms/preserve-versions.test.ts](../../../../sources/Kilo-Org__kilocode/script/upstream/transforms/preserve-versions.test.ts) |
| CI workflow | 47 | [packages/ui/src/assets/icons/file-types/azure-pipelines.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/azure-pipelines.svg)<br>[packages/ui/src/assets/icons/file-types/buildkite.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/buildkite.svg)<br>[packages/ui/src/assets/icons/file-types/circleci_light.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/circleci_light.svg)<br>[packages/ui/src/assets/icons/file-types/circleci.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/circleci.svg)<br>[packages/ui/src/assets/icons/file-types/jenkins.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/jenkins.svg)<br>[.github/workflows/auto-docs.yml](../../../../sources/Kilo-Org__kilocode/.github/workflows/auto-docs.yml) |
| 컨테이너/배포 | 6 | [packages/opencode/Dockerfile](../../../../sources/Kilo-Org__kilocode/packages/opencode/Dockerfile)<br>[packages/containers/tauri-linux/Dockerfile](../../../../sources/Kilo-Org__kilocode/packages/containers/tauri-linux/Dockerfile)<br>[packages/containers/rust/Dockerfile](../../../../sources/Kilo-Org__kilocode/packages/containers/rust/Dockerfile)<br>[packages/containers/publish/Dockerfile](../../../../sources/Kilo-Org__kilocode/packages/containers/publish/Dockerfile)<br>[packages/containers/bun-node/Dockerfile](../../../../sources/Kilo-Org__kilocode/packages/containers/bun-node/Dockerfile)<br>[packages/containers/base/Dockerfile](../../../../sources/Kilo-Org__kilocode/packages/containers/base/Dockerfile) |
| 보안/정책 | 136 | [SECURITY.md](../../../../sources/Kilo-Org__kilocode/SECURITY.md)<br>[packages/ui/src/assets/icons/file-types/folder-guard-open.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/folder-guard-open.svg)<br>[packages/ui/src/assets/icons/file-types/folder-guard.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/folder-guard.svg)<br>[packages/ui/src/assets/icons/file-types/folder-policy-open.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/folder-policy-open.svg)<br>[packages/ui/src/assets/icons/file-types/folder-policy.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/folder-policy.svg)<br>[packages/ui/src/assets/icons/file-types/folder-sandbox-open.svg](../../../../sources/Kilo-Org__kilocode/packages/ui/src/assets/icons/file-types/folder-sandbox-open.svg) |
| 에이전트 지시문 | 10 | [AGENTS.md](../../../../sources/Kilo-Org__kilocode/AGENTS.md)<br>[packages/opencode/AGENTS.md](../../../../sources/Kilo-Org__kilocode/packages/opencode/AGENTS.md)<br>[packages/opencode/test/AGENTS.md](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/AGENTS.md)<br>[packages/opencode/test/server/AGENTS.md](../../../../sources/Kilo-Org__kilocode/packages/opencode/test/server/AGENTS.md)<br>[packages/opencode/src/server/routes/instance/httpapi/AGENTS.md](../../../../sources/Kilo-Org__kilocode/packages/opencode/src/server/routes/instance/httpapi/AGENTS.md)<br>[packages/llm/AGENTS.md](../../../../sources/Kilo-Org__kilocode/packages/llm/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/opencode/test/server/httpapi-mcp-oauth.test.ts`, `packages/opencode/test/server/httpapi-mcp.test.ts`, `packages/opencode/test/mcp/headers.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/storybook/.storybook/main.ts`, `packages/sdk/js/test/server.test.ts`, `packages/sdk/js/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `packages/ui/src/theme/context.tsx`, `packages/ui/src/hooks/create-auto-scroll.tsx`.
4. retrieval/memory/indexing 확인: `script/upstream/index.ts`, `packages/ui/src/theme/index.ts`, `packages/ui/src/styles/index.css`.
5. test/eval 파일로 동작 검증: `script/upstream/VERIFICATION_TEST.md`, `script/upstream/utils/config.test.ts`, `script/upstream/utils/git.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 6848 files, 914 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, tests이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
