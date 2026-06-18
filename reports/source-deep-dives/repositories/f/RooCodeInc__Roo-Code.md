# RooCodeInc/Roo-Code 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 3013 files, 548 directories.

## 요약

- 조사 단위: `sources/RooCodeInc__Roo-Code` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,009 files, 547 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=webview-ui/src/utils/mcp.ts, webview-ui/src/i18n/locales/zh-TW/mcp.json, webview-ui/src/i18n/locales/zh-CN/mcp.json이고, 의존성 단서는 vscode, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | RooCodeInc/Roo-Code |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/RooCodeInc__Roo-Code](../../../../sources/RooCodeInc__Roo-Code) |
| 기존 보고서 | [reports/clone-structures/RooCodeInc__Roo-Code.md](../../../clone-structures/RooCodeInc__Roo-Code.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3009 / 547 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .changeset, .github, .husky, .roo, apps, locales, packages, releases, schemas, scripts, src, webview-ui |
| 상위 확장자 | .ts: 1175, .png: 396, .tsx: 374, .md: 333, .json: 326, .mdx: 226, (none): 36, .xml: 32, .snap: 27, .yml: 15, .css: 14, .mjs: 13 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 66 |
| apps/docs | apps workspace | 36 |
| apps/vscode-e2e | apps workspace | 19 |
| packages/types | packages workspace | 5 |
| packages/core | packages workspace | 4 |
| packages/ipc | packages workspace | 4 |
| packages/vscode-shim | packages workspace | 3 |
| apps/cli | apps workspace | 2 |
| apps/vscode-nightly | apps workspace | 2 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| locales | top-level component | 1 |
| packages | source boundary | 1 |
| packages/config-eslint | packages workspace | 1 |
| packages/config-typescript | packages workspace | 1 |
| releases | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | preinstall | node scripts/bootstrap.mjs |
| utility | package.json | prepare | husky |
| utility | package.json | install | node scripts/bootstrap.mjs |
| utility | package.json | install:all | node scripts/bootstrap.mjs |
| quality | package.json | lint | turbo lint --log-order grouped --output-logs new-only |
| quality | package.json | check-types | turbo check-types --log-order grouped --output-logs new-only |
| test | package.json | test | turbo test --log-order grouped --output-logs new-only |
| quality | package.json | format | turbo format --log-order grouped --output-logs new-only |
| build | package.json | build | turbo build --log-order grouped --output-logs new-only |
| build | package.json | bundle | turbo bundle --log-order grouped --output-logs new-only |
| build | package.json | bundle:nightly | turbo bundle:nightly --log-order grouped --output-logs new-only |
| utility | package.json | vsix | turbo vsix --log-order grouped --output-logs new-only |
| utility | package.json | vsix:nightly | turbo vsix:nightly --log-order grouped --output-logs new-only |
| serve-dev | package.json | clean | turbo clean --log-order grouped --output-logs new-only && rimraf dist out bin .vite-port .turbo |
| utility | package.json | install:vsix | pnpm install --frozen-lockfile && pnpm clean && pnpm vsix && node scripts/install-vsix.js |
| utility | package.json | install:vsix:nightly | pnpm install --frozen-lockfile && pnpm clean && pnpm vsix:nightly && node scripts/install-vsix.js --nightly |
| serve-dev | package.json | code-server:install | node scripts/code-server.js |
| utility | package.json | changeset:version | cp CHANGELOG.md src/CHANGELOG.md && changeset version && cp -vf src/CHANGELOG.md . |
| utility | package.json | knip | knip --include files |
| quality | package.json | npm:publish:types | pnpm --filter @roo-code/types npm:publish |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | vscode |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [webview-ui/src/utils/mcp.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/mcp.ts) | mcp signal |
| mcp | [webview-ui/src/i18n/locales/zh-TW/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/zh-TW/mcp.json) | mcp signal |
| mcp | [webview-ui/src/i18n/locales/zh-CN/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/zh-CN/mcp.json) | mcp signal |
| mcp | [webview-ui/src/i18n/locales/vi/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/vi/mcp.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/RooCodeInc__Roo-Code/AGENTS.md) | agentRuntime signal |
| agentRuntime | [webview-ui/src/utils/context-mentions.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/context-mentions.ts) | agentRuntime signal |
| agentRuntime | [webview-ui/src/utils/__tests__/context-mentions.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/context-mentions.spec.ts) | agentRuntime signal |
| agentRuntime | [webview-ui/src/hooks/useAutoApprovalState.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/hooks/useAutoApprovalState.ts) | agentRuntime signal |
| entrypoints | [webview-ui/src/App.tsx](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/App.tsx) | entrypoints signal |
| entrypoints | [webview-ui/src/index.css](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/index.css) | entrypoints signal |
| entrypoints | [webview-ui/src/index.tsx](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/index.tsx) | entrypoints signal |
| entrypoints | [packages/vscode-shim/src/index.ts](../../../../sources/RooCodeInc__Roo-Code/packages/vscode-shim/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 213 | [webview-ui/src/App.tsx](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/App.tsx)<br>[webview-ui/src/index.css](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/index.css)<br>[webview-ui/src/index.tsx](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/index.tsx)<br>[packages/vscode-shim/src/index.ts](../../../../sources/RooCodeInc__Roo-Code/packages/vscode-shim/src/index.ts)<br>[packages/types/src/cli.ts](../../../../sources/RooCodeInc__Roo-Code/packages/types/src/cli.ts)<br>[packages/types/src/index.ts](../../../../sources/RooCodeInc__Roo-Code/packages/types/src/index.ts)<br>[packages/ipc/src/index.ts](../../../../sources/RooCodeInc__Roo-Code/packages/ipc/src/index.ts)<br>[packages/core/src/cli.ts](../../../../sources/RooCodeInc__Roo-Code/packages/core/src/cli.ts) |
| agentRuntime | 247 | [AGENTS.md](../../../../sources/RooCodeInc__Roo-Code/AGENTS.md)<br>[webview-ui/src/utils/context-mentions.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/context-mentions.ts)<br>[webview-ui/src/utils/__tests__/context-mentions.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/context-mentions.spec.ts)<br>[webview-ui/src/hooks/useAutoApprovalState.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/hooks/useAutoApprovalState.ts)<br>[webview-ui/src/hooks/useAutoApprovalToggles.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/hooks/useAutoApprovalToggles.ts)<br>[webview-ui/src/hooks/useEscapeKey.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/hooks/useEscapeKey.spec.ts)<br>[webview-ui/src/hooks/useEscapeKey.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/hooks/useEscapeKey.ts)<br>[webview-ui/src/hooks/useScrollLifecycle.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/hooks/useScrollLifecycle.ts) |
| mcp | 81 | [webview-ui/src/utils/mcp.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/mcp.ts)<br>[webview-ui/src/i18n/locales/zh-TW/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/zh-TW/mcp.json)<br>[webview-ui/src/i18n/locales/zh-CN/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/zh-CN/mcp.json)<br>[webview-ui/src/i18n/locales/vi/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/vi/mcp.json)<br>[webview-ui/src/i18n/locales/tr/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/tr/mcp.json)<br>[webview-ui/src/i18n/locales/ru/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/ru/mcp.json)<br>[webview-ui/src/i18n/locales/pt-BR/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/pt-BR/mcp.json)<br>[webview-ui/src/i18n/locales/pl/mcp.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/i18n/locales/pl/mcp.json) |
| retrieval | 159 | [webview-ui/index.html](../../../../sources/RooCodeInc__Roo-Code/webview-ui/index.html)<br>[webview-ui/src/index.css](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/index.css)<br>[webview-ui/src/index.tsx](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/index.tsx)<br>[webview-ui/src/components/ui/index.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/components/ui/index.ts)<br>[webview-ui/src/components/ui/hooks/index.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/components/ui/hooks/index.ts)<br>[webview-ui/src/components/settings/providers/index.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/components/settings/providers/index.ts)<br>[webview-ui/src/components/chat/context-management/index.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/components/chat/context-management/index.ts)<br>[src/utils/logging/index.ts](../../../../sources/RooCodeInc__Roo-Code/src/utils/logging/index.ts) |
| spec | 470 | [webview-ui/src/utils/__tests__/batchConsecutive.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/batchConsecutive.spec.ts)<br>[webview-ui/src/utils/__tests__/command-parser.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/command-parser.spec.ts)<br>[webview-ui/src/utils/__tests__/context-mentions.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/context-mentions.spec.ts)<br>[webview-ui/src/utils/__tests__/format.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/format.spec.ts)<br>[webview-ui/src/utils/__tests__/highlightDiff.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/highlightDiff.spec.ts)<br>[webview-ui/src/utils/__tests__/markdown.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/markdown.spec.ts)<br>[webview-ui/src/utils/__tests__/model-utils.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/model-utils.spec.ts)<br>[webview-ui/src/utils/__tests__/sourceMapUtils.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/sourceMapUtils.spec.ts) |
| eval | 643 | [webview-ui/src/utils/test-utils.tsx](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/test-utils.tsx)<br>[webview-ui/src/utils/__tests__/batchConsecutive.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/batchConsecutive.spec.ts)<br>[webview-ui/src/utils/__tests__/command-parser.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/command-parser.spec.ts)<br>[webview-ui/src/utils/__tests__/context-mentions.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/context-mentions.spec.ts)<br>[webview-ui/src/utils/__tests__/format.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/format.spec.ts)<br>[webview-ui/src/utils/__tests__/highlightDiff.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/highlightDiff.spec.ts)<br>[webview-ui/src/utils/__tests__/markdown.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/markdown.spec.ts)<br>[webview-ui/src/utils/__tests__/model-utils.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/model-utils.spec.ts) |
| security | 4 | [SECURITY.md](../../../../sources/RooCodeInc__Roo-Code/SECURITY.md)<br>[webview-ui/src/oauth/urls.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/oauth/urls.ts)<br>[src/integrations/openai-codex/oauth.ts](../../../../sources/RooCodeInc__Roo-Code/src/integrations/openai-codex/oauth.ts)<br>[src/core/ignore/__tests__/RooIgnoreController.security.spec.ts](../../../../sources/RooCodeInc__Roo-Code/src/core/ignore/__tests__/RooIgnoreController.security.spec.ts) |
| ci | 7 | [.github/workflows/changeset-release.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/changeset-release.yml)<br>[.github/workflows/cli-release.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/cli-release.yml)<br>[.github/workflows/code-qa.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/code-qa.yml)<br>[.github/workflows/codeql.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/codeql.yml)<br>[.github/workflows/docs-pages.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/docs-pages.yml)<br>[.github/workflows/marketplace-publish.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/marketplace-publish.yml)<br>[.github/workflows/nightly-publish.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/nightly-publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/RooCodeInc__Roo-Code/AGENTS.md)<br>[apps/docs/docs/providers/gemini.md](../../../../sources/RooCodeInc__Roo-Code/apps/docs/docs/providers/gemini.md) |
| docs | 928 | [README.md](../../../../sources/RooCodeInc__Roo-Code/README.md)<br>[src/integrations/terminal/README.md](../../../../sources/RooCodeInc__Roo-Code/src/integrations/terminal/README.md)<br>[src/assets/docs/demo.gif](../../../../sources/RooCodeInc__Roo-Code/src/assets/docs/demo.gif)<br>[packages/types/npm/README.md](../../../../sources/RooCodeInc__Roo-Code/packages/types/npm/README.md)<br>[packages/ipc/README.md](../../../../sources/RooCodeInc__Roo-Code/packages/ipc/README.md)<br>[locales/zh-TW/README.md](../../../../sources/RooCodeInc__Roo-Code/locales/zh-TW/README.md)<br>[locales/zh-CN/README.md](../../../../sources/RooCodeInc__Roo-Code/locales/zh-CN/README.md)<br>[locales/vi/README.md](../../../../sources/RooCodeInc__Roo-Code/locales/vi/README.md) |
| config | 29 | [package.json](../../../../sources/RooCodeInc__Roo-Code/package.json)<br>[pnpm-workspace.yaml](../../../../sources/RooCodeInc__Roo-Code/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/RooCodeInc__Roo-Code/tsconfig.json)<br>[turbo.json](../../../../sources/RooCodeInc__Roo-Code/turbo.json)<br>[webview-ui/package.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/package.json)<br>[webview-ui/tsconfig.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/tsconfig.json)<br>[webview-ui/turbo.json](../../../../sources/RooCodeInc__Roo-Code/webview-ui/turbo.json)<br>[src/package.json](../../../../sources/RooCodeInc__Roo-Code/src/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 643 | [webview-ui/src/utils/test-utils.tsx](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/test-utils.tsx)<br>[webview-ui/src/utils/__tests__/batchConsecutive.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/batchConsecutive.spec.ts)<br>[webview-ui/src/utils/__tests__/command-parser.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/command-parser.spec.ts)<br>[webview-ui/src/utils/__tests__/context-mentions.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/context-mentions.spec.ts)<br>[webview-ui/src/utils/__tests__/format.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/format.spec.ts)<br>[webview-ui/src/utils/__tests__/highlightDiff.spec.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/utils/__tests__/highlightDiff.spec.ts) |
| CI workflow | 7 | [.github/workflows/changeset-release.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/changeset-release.yml)<br>[.github/workflows/cli-release.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/cli-release.yml)<br>[.github/workflows/code-qa.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/code-qa.yml)<br>[.github/workflows/codeql.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/codeql.yml)<br>[.github/workflows/docs-pages.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/docs-pages.yml)<br>[.github/workflows/marketplace-publish.yml](../../../../sources/RooCodeInc__Roo-Code/.github/workflows/marketplace-publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 4 | [SECURITY.md](../../../../sources/RooCodeInc__Roo-Code/SECURITY.md)<br>[webview-ui/src/oauth/urls.ts](../../../../sources/RooCodeInc__Roo-Code/webview-ui/src/oauth/urls.ts)<br>[src/integrations/openai-codex/oauth.ts](../../../../sources/RooCodeInc__Roo-Code/src/integrations/openai-codex/oauth.ts)<br>[src/core/ignore/__tests__/RooIgnoreController.security.spec.ts](../../../../sources/RooCodeInc__Roo-Code/src/core/ignore/__tests__/RooIgnoreController.security.spec.ts) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/RooCodeInc__Roo-Code/AGENTS.md)<br>[apps/docs/docs/providers/gemini.md](../../../../sources/RooCodeInc__Roo-Code/apps/docs/docs/providers/gemini.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `webview-ui/src/utils/mcp.ts`, `webview-ui/src/i18n/locales/zh-TW/mcp.json`, `webview-ui/src/i18n/locales/zh-CN/mcp.json`.
2. entrypoint를 따라 실행 흐름 확인: `webview-ui/src/App.tsx`, `webview-ui/src/index.css`, `webview-ui/src/index.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `webview-ui/src/utils/context-mentions.ts`, `webview-ui/src/utils/__tests__/context-mentions.spec.ts`.
4. retrieval/memory/indexing 확인: `webview-ui/index.html`, `webview-ui/src/index.css`, `webview-ui/src/index.tsx`.
5. test/eval 파일로 동작 검증: `webview-ui/src/utils/test-utils.tsx`, `webview-ui/src/utils/__tests__/batchConsecutive.spec.ts`, `webview-ui/src/utils/__tests__/command-parser.spec.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 3013 files, 548 directories.. 핵심 구조 신호는 package.json, README.md, AGENTS.md, LICENSE, vscode, tests이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
