# anomalyco/opencode 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 5666 files, 710 directories.

## 요약

- 조사 단위: `sources/anomalyco__opencode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 5,663 files, 708 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/web/src/content/docs/mcp-servers.mdx, packages/web/src/content/docs/zh-tw/mcp-servers.mdx, packages/web/src/content/docs/zh-cn/mcp-servers.mdx이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | anomalyco/opencode |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 175712 |
| Forks | 21355 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/anomalyco__opencode](../../../../sources/anomalyco__opencode) |
| 기존 보고서 | [reports/global-trending/repositories/anomalyco__opencode.md](../../../global-trending/repositories/anomalyco__opencode.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 5663 / 708 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, .husky, .opencode, .zed, github, infra, nix, packages, patches, perf, script, sdks, specs |
| 상위 확장자 | .ts: 2015, .svg: 1251, .mdx: 627, .tsx: 524, .json: 330, .png: 215, .css: 156, .md: 130, .sql: 118, (none): 48, .aac: 45, .mp3: 45 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/web | packages workspace | 129 |
| packages/opencode | packages workspace | 56 |
| packages/ui | packages workspace | 37 |
| packages/tui | packages workspace | 35 |
| packages/stats | packages workspace | 17 |
| packages/sdk | packages workspace | 10 |
| packages/app | packages workspace | 8 |
| packages/containers | packages workspace | 5 |
| packages/server | packages workspace | 5 |
| packages/enterprise | packages workspace | 4 |
| packages/llm | packages workspace | 4 |
| packages/slack | packages workspace | 4 |
| packages/storybook | packages workspace | 4 |
| packages/core | packages workspace | 3 |
| packages/http-recorder | packages workspace | 3 |
| packages/plugin | packages workspace | 3 |
| packages/script | packages workspace | 3 |
| packages/function | packages workspace | 2 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | bun run --cwd packages/opencode --conditions=browser src/index.ts |
| serve-dev | package.json | dev:desktop | bun --cwd packages/desktop dev |
| serve-dev | package.json | dev:web | bun --cwd packages/app dev |
| serve-dev | package.json | dev:console | ulimit -n 10240 2>/dev/null; bun run --cwd packages/console/app dev |
| serve-dev | package.json | dev:stats | bun sst shell --stage=production -- bun run --cwd packages/stats/app dev |
| serve-dev | package.json | dev:storybook | bun --cwd packages/storybook storybook |
| quality | package.json | lint | oxlint |
| quality | package.json | typecheck | bun turbo typecheck |
| utility | package.json | upgrade-opentui | bun run script/upgrade-opentui.ts |
| utility | package.json | postinstall | bun run --cwd packages/core fix-node-pty |
| utility | package.json | prepare | husky |
| utility | package.json | random | echo 'Random script' |
| utility | package.json | sso | aws sso login --sso-session=opencode --no-browser |
| test | package.json | test | echo 'do not run tests from root' && exit 1 |


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
| mcp | [packages/web/src/content/docs/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/mcp-servers.mdx) | mcp signal |
| mcp | [packages/web/src/content/docs/zh-tw/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/mcp-servers.mdx) | mcp signal |
| mcp | [packages/web/src/content/docs/zh-cn/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-cn/mcp-servers.mdx) | mcp signal |
| mcp | [packages/web/src/content/docs/tr/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tr/mcp-servers.mdx) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/anomalyco__opencode/AGENTS.md) | agentRuntime signal |
| agentRuntime | [CONTEXT.md](../../../../sources/anomalyco__opencode/CONTEXT.md) | agentRuntime signal |
| agentRuntime | [specs/v2/tools.md](../../../../sources/anomalyco__opencode/specs/v2/tools.md) | agentRuntime signal |
| agentRuntime | [packages/web/src/content/docs/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/agents.mdx) | agentRuntime signal |
| entrypoints | [packages/web/src/content/docs/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/server.mdx) | entrypoints signal |
| entrypoints | [packages/web/src/content/docs/zh-tw/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/server.mdx) | entrypoints signal |
| entrypoints | [packages/web/src/content/docs/zh-cn/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-cn/server.mdx) | entrypoints signal |
| entrypoints | [packages/web/src/content/docs/tr/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tr/server.mdx) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 57 | [packages/web/src/content/docs/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/server.mdx)<br>[packages/web/src/content/docs/zh-tw/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/server.mdx)<br>[packages/web/src/content/docs/zh-cn/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-cn/server.mdx)<br>[packages/web/src/content/docs/tr/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tr/server.mdx)<br>[packages/web/src/content/docs/th/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/th/server.mdx)<br>[packages/web/src/content/docs/ru/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/ru/server.mdx)<br>[packages/web/src/content/docs/pt-br/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/pt-br/server.mdx)<br>[packages/web/src/content/docs/pl/server.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/pl/server.mdx) |
| agentRuntime | 401 | [AGENTS.md](../../../../sources/anomalyco__opencode/AGENTS.md)<br>[CONTEXT.md](../../../../sources/anomalyco__opencode/CONTEXT.md)<br>[specs/v2/tools.md](../../../../sources/anomalyco__opencode/specs/v2/tools.md)<br>[packages/web/src/content/docs/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/agents.mdx)<br>[packages/web/src/content/docs/skills.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/skills.mdx)<br>[packages/web/src/content/docs/tools.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tools.mdx)<br>[packages/web/src/content/docs/zh-tw/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/agents.mdx)<br>[packages/web/src/content/docs/zh-tw/skills.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/skills.mdx) |
| mcp | 45 | [packages/web/src/content/docs/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/mcp-servers.mdx)<br>[packages/web/src/content/docs/zh-tw/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/mcp-servers.mdx)<br>[packages/web/src/content/docs/zh-cn/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-cn/mcp-servers.mdx)<br>[packages/web/src/content/docs/tr/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tr/mcp-servers.mdx)<br>[packages/web/src/content/docs/th/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/th/mcp-servers.mdx)<br>[packages/web/src/content/docs/ru/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/ru/mcp-servers.mdx)<br>[packages/web/src/content/docs/pt-br/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/pt-br/mcp-servers.mdx)<br>[packages/web/src/content/docs/pl/mcp-servers.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/pl/mcp-servers.mdx) |
| retrieval | 133 | [packages/web/src/content/docs/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/index.mdx)<br>[packages/web/src/content/docs/zh-tw/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/index.mdx)<br>[packages/web/src/content/docs/zh-cn/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-cn/index.mdx)<br>[packages/web/src/content/docs/tr/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tr/index.mdx)<br>[packages/web/src/content/docs/th/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/th/index.mdx)<br>[packages/web/src/content/docs/ru/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/ru/index.mdx)<br>[packages/web/src/content/docs/pt-br/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/pt-br/index.mdx)<br>[packages/web/src/content/docs/pl/index.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/pl/index.mdx) |
| spec | 10 | [packages/ui/src/assets/icons/file-types/architecture.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/architecture.svg)<br>[packages/ui/src/assets/icons/file-types/roadmap.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/roadmap.svg)<br>[packages/cli/src/framework/spec.ts](../../../../sources/anomalyco__opencode/packages/cli/src/framework/spec.ts)<br>[packages/app/create-effect-simplification-spec.md](../../../../sources/anomalyco__opencode/packages/app/create-effect-simplification-spec.md)<br>[packages/app/src/components/session/session-new-design-view.tsx](../../../../sources/anomalyco__opencode/packages/app/src/components/session/session-new-design-view.tsx)<br>[packages/app/e2e/smoke/session-timeline.spec.ts](../../../../sources/anomalyco__opencode/packages/app/e2e/smoke/session-timeline.spec.ts)<br>[packages/app/e2e/regression/prompt-thinking-level.spec.ts](../../../../sources/anomalyco__opencode/packages/app/e2e/regression/prompt-thinking-level.spec.ts)<br>[packages/app/e2e/regression/session-list-path-loading.spec.ts](../../../../sources/anomalyco__opencode/packages/app/e2e/regression/session-list-path-loading.spec.ts) |
| eval | 705 | [sdks/vscode/.vscode-test.mjs](../../../../sources/anomalyco__opencode/sdks/vscode/.vscode-test.mjs)<br>[perf/test-suite.md](../../../../sources/anomalyco__opencode/perf/test-suite.md)<br>[packages/ui/src/components/apply-patch-file.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/apply-patch-file.test.ts)<br>[packages/ui/src/components/markdown-stream.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/markdown-stream.test.ts)<br>[packages/ui/src/components/message-file.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/message-file.test.ts)<br>[packages/ui/src/components/message-part.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/message-part.test.ts)<br>[packages/ui/src/components/scroll-view.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/scroll-view.test.ts)<br>[packages/ui/src/components/session-diff.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/session-diff.test.ts) |
| security | 87 | [SECURITY.md](../../../../sources/anomalyco__opencode/SECURITY.md)<br>[specs/v2/provider-policy.md](../../../../sources/anomalyco__opencode/specs/v2/provider-policy.md)<br>[packages/ui/src/assets/icons/file-types/folder-guard-open.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-guard-open.svg)<br>[packages/ui/src/assets/icons/file-types/folder-guard.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-guard.svg)<br>[packages/ui/src/assets/icons/file-types/folder-policy-open.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-policy-open.svg)<br>[packages/ui/src/assets/icons/file-types/folder-policy.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-policy.svg)<br>[packages/ui/src/assets/icons/file-types/folder-sandbox-open.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-sandbox-open.svg)<br>[packages/ui/src/assets/icons/file-types/folder-sandbox.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-sandbox.svg) |
| ci | 31 | [packages/ui/src/assets/icons/file-types/azure-pipelines.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/azure-pipelines.svg)<br>[packages/ui/src/assets/icons/file-types/buildkite.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/buildkite.svg)<br>[packages/ui/src/assets/icons/file-types/circleci_light.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/circleci_light.svg)<br>[packages/ui/src/assets/icons/file-types/circleci.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/circleci.svg)<br>[packages/ui/src/assets/icons/file-types/jenkins.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/jenkins.svg)<br>[.github/workflows/beta.yml](../../../../sources/anomalyco__opencode/.github/workflows/beta.yml)<br>[.github/workflows/close-issues.yml](../../../../sources/anomalyco__opencode/.github/workflows/close-issues.yml)<br>[.github/workflows/close-prs.yml](../../../../sources/anomalyco__opencode/.github/workflows/close-prs.yml) |
| container | 7 | [packages/stats/server/Dockerfile](../../../../sources/anomalyco__opencode/packages/stats/server/Dockerfile)<br>[packages/opencode/Dockerfile](../../../../sources/anomalyco__opencode/packages/opencode/Dockerfile)<br>[packages/containers/tauri-linux/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/tauri-linux/Dockerfile)<br>[packages/containers/rust/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/rust/Dockerfile)<br>[packages/containers/publish/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/publish/Dockerfile)<br>[packages/containers/bun-node/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/bun-node/Dockerfile)<br>[packages/containers/base/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/base/Dockerfile) |
| instruction | 30 | [AGENTS.md](../../../../sources/anomalyco__opencode/AGENTS.md)<br>[packages/web/src/content/docs/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/agents.mdx)<br>[packages/web/src/content/docs/zh-tw/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/agents.mdx)<br>[packages/web/src/content/docs/zh-cn/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-cn/agents.mdx)<br>[packages/web/src/content/docs/tr/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tr/agents.mdx)<br>[packages/web/src/content/docs/th/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/th/agents.mdx)<br>[packages/web/src/content/docs/ru/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/ru/agents.mdx)<br>[packages/web/src/content/docs/pt-br/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/pt-br/agents.mdx) |
| docs | 681 | [README.ar.md](../../../../sources/anomalyco__opencode/README.ar.md)<br>[README.bn.md](../../../../sources/anomalyco__opencode/README.bn.md)<br>[README.br.md](../../../../sources/anomalyco__opencode/README.br.md)<br>[README.bs.md](../../../../sources/anomalyco__opencode/README.bs.md)<br>[README.da.md](../../../../sources/anomalyco__opencode/README.da.md)<br>[README.de.md](../../../../sources/anomalyco__opencode/README.de.md)<br>[README.es.md](../../../../sources/anomalyco__opencode/README.es.md)<br>[README.fr.md](../../../../sources/anomalyco__opencode/README.fr.md) |
| config | 66 | [package.json](../../../../sources/anomalyco__opencode/package.json)<br>[tsconfig.json](../../../../sources/anomalyco__opencode/tsconfig.json)<br>[turbo.json](../../../../sources/anomalyco__opencode/turbo.json)<br>[sdks/vscode/package.json](../../../../sources/anomalyco__opencode/sdks/vscode/package.json)<br>[sdks/vscode/tsconfig.json](../../../../sources/anomalyco__opencode/sdks/vscode/tsconfig.json)<br>[packages/web/package.json](../../../../sources/anomalyco__opencode/packages/web/package.json)<br>[packages/web/tsconfig.json](../../../../sources/anomalyco__opencode/packages/web/tsconfig.json)<br>[packages/ui/package.json](../../../../sources/anomalyco__opencode/packages/ui/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 705 | [sdks/vscode/.vscode-test.mjs](../../../../sources/anomalyco__opencode/sdks/vscode/.vscode-test.mjs)<br>[perf/test-suite.md](../../../../sources/anomalyco__opencode/perf/test-suite.md)<br>[packages/ui/src/components/apply-patch-file.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/apply-patch-file.test.ts)<br>[packages/ui/src/components/markdown-stream.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/markdown-stream.test.ts)<br>[packages/ui/src/components/message-file.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/message-file.test.ts)<br>[packages/ui/src/components/message-part.test.ts](../../../../sources/anomalyco__opencode/packages/ui/src/components/message-part.test.ts) |
| CI workflow | 31 | [packages/ui/src/assets/icons/file-types/azure-pipelines.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/azure-pipelines.svg)<br>[packages/ui/src/assets/icons/file-types/buildkite.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/buildkite.svg)<br>[packages/ui/src/assets/icons/file-types/circleci_light.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/circleci_light.svg)<br>[packages/ui/src/assets/icons/file-types/circleci.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/circleci.svg)<br>[packages/ui/src/assets/icons/file-types/jenkins.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/jenkins.svg)<br>[.github/workflows/beta.yml](../../../../sources/anomalyco__opencode/.github/workflows/beta.yml) |
| 컨테이너/배포 | 7 | [packages/stats/server/Dockerfile](../../../../sources/anomalyco__opencode/packages/stats/server/Dockerfile)<br>[packages/opencode/Dockerfile](../../../../sources/anomalyco__opencode/packages/opencode/Dockerfile)<br>[packages/containers/tauri-linux/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/tauri-linux/Dockerfile)<br>[packages/containers/rust/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/rust/Dockerfile)<br>[packages/containers/publish/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/publish/Dockerfile)<br>[packages/containers/bun-node/Dockerfile](../../../../sources/anomalyco__opencode/packages/containers/bun-node/Dockerfile) |
| 보안/정책 | 87 | [SECURITY.md](../../../../sources/anomalyco__opencode/SECURITY.md)<br>[specs/v2/provider-policy.md](../../../../sources/anomalyco__opencode/specs/v2/provider-policy.md)<br>[packages/ui/src/assets/icons/file-types/folder-guard-open.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-guard-open.svg)<br>[packages/ui/src/assets/icons/file-types/folder-guard.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-guard.svg)<br>[packages/ui/src/assets/icons/file-types/folder-policy-open.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-policy-open.svg)<br>[packages/ui/src/assets/icons/file-types/folder-policy.svg](../../../../sources/anomalyco__opencode/packages/ui/src/assets/icons/file-types/folder-policy.svg) |
| 에이전트 지시문 | 30 | [AGENTS.md](../../../../sources/anomalyco__opencode/AGENTS.md)<br>[packages/web/src/content/docs/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/agents.mdx)<br>[packages/web/src/content/docs/zh-tw/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-tw/agents.mdx)<br>[packages/web/src/content/docs/zh-cn/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/zh-cn/agents.mdx)<br>[packages/web/src/content/docs/tr/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/tr/agents.mdx)<br>[packages/web/src/content/docs/th/agents.mdx](../../../../sources/anomalyco__opencode/packages/web/src/content/docs/th/agents.mdx) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/web/src/content/docs/mcp-servers.mdx`, `packages/web/src/content/docs/zh-tw/mcp-servers.mdx`, `packages/web/src/content/docs/zh-cn/mcp-servers.mdx`.
2. entrypoint를 따라 실행 흐름 확인: `packages/web/src/content/docs/server.mdx`, `packages/web/src/content/docs/zh-tw/server.mdx`, `packages/web/src/content/docs/zh-cn/server.mdx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `CONTEXT.md`, `specs/v2/tools.md`.
4. retrieval/memory/indexing 확인: `packages/web/src/content/docs/index.mdx`, `packages/web/src/content/docs/zh-tw/index.mdx`, `packages/web/src/content/docs/zh-cn/index.mdx`.
5. test/eval 파일로 동작 검증: `sdks/vscode/.vscode-test.mjs`, `perf/test-suite.md`, `packages/ui/src/components/apply-patch-file.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 5666 files, 710 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, tests이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
