# nanobrowser/nanobrowser 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 256 files, 81 directories.

## 요약

- 조사 단위: `sources/nanobrowser__nanobrowser` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 256 files, 81 directories, depth score 98, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=pages/side-panel/public/icons/planner.svg, packages/shared/lib/hooks/index.ts, packages/shared/lib/hooks/useStorage.tsx이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | nanobrowser/nanobrowser |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/nanobrowser__nanobrowser](../../../../sources/nanobrowser__nanobrowser) |
| 기존 보고서 | [reports/clone-structures/nanobrowser__nanobrowser.md](../../../clone-structures/nanobrowser__nanobrowser.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 256 / 81 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, .husky, chrome-extension, packages, pages |
| 상위 확장자 | .ts: 109, .json: 36, (none): 33, .tsx: 16, .md: 13, .mjs: 12, .css: 7, .svg: 5, .yml: 5, .js: 4, .mts: 4, .html: 3 |
| 소스 패턴 | monorepo/workspace, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/shared | packages workspace | 9 |
| packages/storage | packages workspace | 7 |
| packages/hmr | packages workspace | 5 |
| packages/ui | packages workspace | 5 |
| packages/dev-utils | packages workspace | 4 |
| packages/i18n | packages workspace | 4 |
| packages/schema-utils | packages workspace | 4 |
| packages/zipper | packages workspace | 4 |
| packages/vite-config | packages workspace | 2 |
| .github | ci surface | 1 |
| chrome-extension | top-level component | 1 |
| packages | source boundary | 1 |
| packages/tailwind-config | packages workspace | 1 |
| packages/tsconfig | packages workspace | 1 |
| pages | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | clean:bundle | rimraf dist && turbo clean:bundle |
| utility | package.json | clean:node_modules | pnpx rimraf node_modules && pnpx turbo clean:node_modules |
| utility | package.json | clean:turbo | rimraf .turbo && turbo clean:turbo |
| build | package.json | clean | pnpm clean:bundle && pnpm clean:turbo && pnpm clean:node_modules |
| utility | package.json | clean:install | pnpm clean:node_modules && pnpm install --frozen-lockfile |
| build | package.json | build | pnpm clean:bundle && turbo ready && turbo build |
| build | package.json | zip | pnpm build && pnpm -F zipper zip |
| serve-dev | package.json | dev | turbo ready && cross-env __DEV__=true turbo watch dev --concurrency 20 |
| build | package.json | e2e | pnpm build && pnpm zip && turbo e2e |
| quality | package.json | type-check | turbo type-check |
| quality | package.json | lint | turbo lint --continue -- --fix --cache --cache-location node_modules/.cache/.eslintcache |
| quality | package.json | lint:fix | turbo lint:fix --continue -- --fix --cache --cache-location node_modules/.cache/.eslintcache |
| quality | package.json | prettier | turbo prettier --continue -- --cache --cache-location node_modules/.cache/.prettiercache |
| utility | package.json | prepare | husky |
| utility | package.json | update-version | bash update_version.sh |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
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
| agentRuntime | [pages/side-panel/public/icons/planner.svg](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/public/icons/planner.svg) | agentRuntime signal |
| agentRuntime | [packages/shared/lib/hooks/index.ts](../../../../sources/nanobrowser__nanobrowser/packages/shared/lib/hooks/index.ts) | agentRuntime signal |
| agentRuntime | [packages/shared/lib/hooks/useStorage.tsx](../../../../sources/nanobrowser__nanobrowser/packages/shared/lib/hooks/useStorage.tsx) | agentRuntime signal |
| agentRuntime | [chrome-extension/src/background/browser/context.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/browser/context.ts) | agentRuntime signal |
| entrypoints | [pages/side-panel/src/index.css](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/src/index.css) | entrypoints signal |
| entrypoints | [pages/side-panel/src/index.tsx](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/src/index.tsx) | entrypoints signal |
| entrypoints | [pages/options/src/index.css](../../../../sources/nanobrowser__nanobrowser/pages/options/src/index.css) | entrypoints signal |
| entrypoints | [pages/options/src/index.tsx](../../../../sources/nanobrowser__nanobrowser/pages/options/src/index.tsx) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/nanobrowser__nanobrowser/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/nanobrowser__nanobrowser/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/nanobrowser__nanobrowser/pnpm-workspace.yaml) | config signal |
| config | [turbo.json](../../../../sources/nanobrowser__nanobrowser/turbo.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [pages/side-panel/src/index.css](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/src/index.css)<br>[pages/side-panel/src/index.tsx](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/src/index.tsx)<br>[pages/options/src/index.css](../../../../sources/nanobrowser__nanobrowser/pages/options/src/index.css)<br>[pages/options/src/index.tsx](../../../../sources/nanobrowser__nanobrowser/pages/options/src/index.tsx)<br>[pages/content/src/index.ts](../../../../sources/nanobrowser__nanobrowser/pages/content/src/index.ts) |
| agentRuntime | 25 | [pages/side-panel/public/icons/planner.svg](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/public/icons/planner.svg)<br>[packages/shared/lib/hooks/index.ts](../../../../sources/nanobrowser__nanobrowser/packages/shared/lib/hooks/index.ts)<br>[packages/shared/lib/hooks/useStorage.tsx](../../../../sources/nanobrowser__nanobrowser/packages/shared/lib/hooks/useStorage.tsx)<br>[chrome-extension/src/background/browser/context.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/browser/context.ts)<br>[chrome-extension/src/background/agent/executor.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/agent/executor.ts)<br>[chrome-extension/src/background/agent/helper.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/agent/helper.ts)<br>[chrome-extension/src/background/agent/history.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/agent/history.ts)<br>[chrome-extension/src/background/agent/types.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/agent/types.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 31 | [pages/side-panel/index.html](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/index.html)<br>[pages/side-panel/src/index.css](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/src/index.css)<br>[pages/side-panel/src/index.tsx](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/src/index.tsx)<br>[pages/options/index.html](../../../../sources/nanobrowser__nanobrowser/pages/options/index.html)<br>[pages/options/src/index.css](../../../../sources/nanobrowser__nanobrowser/pages/options/src/index.css)<br>[pages/options/src/index.tsx](../../../../sources/nanobrowser__nanobrowser/pages/options/src/index.tsx)<br>[pages/content/src/index.ts](../../../../sources/nanobrowser__nanobrowser/pages/content/src/index.ts)<br>[packages/zipper/index.ts](../../../../sources/nanobrowser__nanobrowser/packages/zipper/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 1 | [chrome-extension/src/background/services/guardrails/__tests__/guardrails.test.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/services/guardrails/__tests__/guardrails.test.ts) |
| security | 3 | [SECURITY.md](../../../../sources/nanobrowser__nanobrowser/SECURITY.md)<br>[chrome-extension/public/permission/index.html](../../../../sources/nanobrowser__nanobrowser/chrome-extension/public/permission/index.html)<br>[chrome-extension/public/permission/permission.js](../../../../sources/nanobrowser__nanobrowser/chrome-extension/public/permission/permission.js) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/nanobrowser__nanobrowser/CLAUDE.md) |
| docs | 8 | [README-es.md](../../../../sources/nanobrowser__nanobrowser/README-es.md)<br>[README-tr.md](../../../../sources/nanobrowser__nanobrowser/README-tr.md)<br>[README-zh-Hant.md](../../../../sources/nanobrowser__nanobrowser/README-zh-Hant.md)<br>[README.md](../../../../sources/nanobrowser__nanobrowser/README.md)<br>[packages/ui/README.md](../../../../sources/nanobrowser__nanobrowser/packages/ui/README.md)<br>[packages/shared/README.md](../../../../sources/nanobrowser__nanobrowser/packages/shared/README.md)<br>[packages/schema-utils/README.md](../../../../sources/nanobrowser__nanobrowser/packages/schema-utils/README.md)<br>[packages/i18n/README.md](../../../../sources/nanobrowser__nanobrowser/packages/i18n/README.md) |
| config | 30 | [package.json](../../../../sources/nanobrowser__nanobrowser/package.json)<br>[pnpm-workspace.yaml](../../../../sources/nanobrowser__nanobrowser/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/nanobrowser__nanobrowser/turbo.json)<br>[pages/side-panel/package.json](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/package.json)<br>[pages/side-panel/tsconfig.json](../../../../sources/nanobrowser__nanobrowser/pages/side-panel/tsconfig.json)<br>[pages/options/package.json](../../../../sources/nanobrowser__nanobrowser/pages/options/package.json)<br>[pages/options/tsconfig.json](../../../../sources/nanobrowser__nanobrowser/pages/options/tsconfig.json)<br>[pages/content/package.json](../../../../sources/nanobrowser__nanobrowser/pages/content/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [chrome-extension/src/background/services/guardrails/__tests__/guardrails.test.ts](../../../../sources/nanobrowser__nanobrowser/chrome-extension/src/background/services/guardrails/__tests__/guardrails.test.ts) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 3 | [SECURITY.md](../../../../sources/nanobrowser__nanobrowser/SECURITY.md)<br>[chrome-extension/public/permission/index.html](../../../../sources/nanobrowser__nanobrowser/chrome-extension/public/permission/index.html)<br>[chrome-extension/public/permission/permission.js](../../../../sources/nanobrowser__nanobrowser/chrome-extension/public/permission/permission.js) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/nanobrowser__nanobrowser/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `pages/side-panel/public/icons/planner.svg`, `packages/shared/lib/hooks/index.ts`, `packages/shared/lib/hooks/useStorage.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `pages/side-panel/src/index.css`, `pages/side-panel/src/index.tsx`, `pages/options/src/index.css`.
3. agent/tool runtime 매핑: `pages/side-panel/public/icons/planner.svg`, `packages/shared/lib/hooks/index.ts`, `packages/shared/lib/hooks/useStorage.tsx`.
4. retrieval/memory/indexing 확인: `pages/side-panel/index.html`, `pages/side-panel/src/index.css`, `pages/side-panel/src/index.tsx`.
5. test/eval 파일로 동작 검증: `chrome-extension/src/background/services/guardrails/__tests__/guardrails.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 256 files, 81 directories.. 핵심 구조 신호는 package.json, README.md, CLAUDE.md, LICENSE, react, tests이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
