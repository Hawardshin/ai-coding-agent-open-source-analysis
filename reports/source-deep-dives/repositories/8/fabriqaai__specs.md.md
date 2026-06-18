# fabriqaai/specs.md 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 849 files, 283 directories.

## 요약

- 조사 단위: `sources/fabriqaai__specs.md` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 847 files, 282 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/flows/simple/context-config.yaml, src/flows/simple/memory-bank.yaml, src/flows/simple/skills/design.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | fabriqaai/specs.md |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | TypeScript |
| Stars | 175 |
| Forks | 19 |
| License | MIT License |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/fabriqaai__specs.md](../../../../sources/fabriqaai__specs.md) |
| 기존 보고서 | [reports/clone-structures/fabriqaai__specs.md.md](../../../clone-structures/fabriqaai__specs.md.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 847 / 282 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .claude, .github, .specsmd, docs.specs.md, images, memory-bank, resources, scripts, src, vs-code-extension |
| 상위 확장자 | .md: 439, .ts: 167, .js: 53, .mdx: 50, .png: 33, .html: 18, .yaml: 17, .hbs: 15, .json: 11, .cjs: 9, .svg: 7, .pdf: 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 91 |
| .github | ci surface | 1 |
| docs.specs.md | documentation surface | 1 |
| images | top-level component | 1 |
| memory-bank | top-level component | 1 |
| resources | top-level component | 1 |
| scripts | top-level component | 1 |
| vs-code-extension | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | validate:all | cd src && npm run validate:all |
| quality | package.json | lint:md:fix | cd src && npm run lint:md:fix |
| quality | package.json | deps:check | echo '\n=== NPM Package (src/) ===' && npx npm-check-updates --cwd src && echo '\n=== VS Code Extension ===' && npx npm-check-updates --cwd vs-code-extension |
| quality | package.json | deps:check:minor | echo '\n=== NPM Package (src/) ===' && npx npm-check-updates --cwd src --target minor && echo '\n=== VS Code Extension ===' && npx npm-check-updates --cwd vs-code-extension --target minor |


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
| agentRuntime | [src/flows/simple/context-config.yaml](../../../../sources/fabriqaai__specs.md/src/flows/simple/context-config.yaml) | agentRuntime signal |
| agentRuntime | [src/flows/simple/memory-bank.yaml](../../../../sources/fabriqaai__specs.md/src/flows/simple/memory-bank.yaml) | agentRuntime signal |
| agentRuntime | [src/flows/simple/skills/design.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/skills/design.md) | agentRuntime signal |
| agentRuntime | [src/flows/simple/skills/execute.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/skills/execute.md) | agentRuntime signal |
| entrypoints | [src/lib/dashboard/web/server.js](../../../../sources/fabriqaai__specs.md/src/lib/dashboard/web/server.js) | entrypoints signal |
| entrypoints | [src/bin/cli.js](../../../../sources/fabriqaai__specs.md/src/bin/cli.js) | entrypoints signal |
| instruction | [docs.specs.md/CLAUDE.md](../../../../sources/fabriqaai__specs.md/docs.specs.md/CLAUDE.md) | instruction signal |
| instruction | [docs.specs.md/fire-flow/agents.mdx](../../../../sources/fabriqaai__specs.md/docs.specs.md/fire-flow/agents.mdx) | instruction signal |
| instruction | [.claude/claude.md](../../../../sources/fabriqaai__specs.md/.claude/claude.md) | instruction signal |
| config | [package.json](../../../../sources/fabriqaai__specs.md/package.json) | config signal |
| config | [vs-code-extension/package.json](../../../../sources/fabriqaai__specs.md/vs-code-extension/package.json) | config signal |
| config | [vs-code-extension/tsconfig.json](../../../../sources/fabriqaai__specs.md/vs-code-extension/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/lib/dashboard/web/server.js](../../../../sources/fabriqaai__specs.md/src/lib/dashboard/web/server.js)<br>[src/bin/cli.js](../../../../sources/fabriqaai__specs.md/src/bin/cli.js) |
| agentRuntime | 408 | [src/flows/simple/context-config.yaml](../../../../sources/fabriqaai__specs.md/src/flows/simple/context-config.yaml)<br>[src/flows/simple/memory-bank.yaml](../../../../sources/fabriqaai__specs.md/src/flows/simple/memory-bank.yaml)<br>[src/flows/simple/skills/design.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/skills/design.md)<br>[src/flows/simple/skills/execute.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/skills/execute.md)<br>[src/flows/simple/skills/requirements.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/skills/requirements.md)<br>[src/flows/simple/skills/tasks.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/skills/tasks.md)<br>[src/flows/simple/commands/agent.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/commands/agent.md)<br>[src/flows/simple/agents/agent.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/agents/agent.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 338 | [vs-code-extension/src/welcome/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/welcome/index.ts)<br>[vs-code-extension/src/webview/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/webview/index.ts)<br>[vs-code-extension/src/webview/lit/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/webview/lit/index.ts)<br>[vs-code-extension/src/webview/components/fire/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/webview/components/fire/index.ts)<br>[vs-code-extension/src/webview/components/fire/shared/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/webview/components/fire/shared/index.ts)<br>[vs-code-extension/src/webview/components/fire/runs/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/webview/components/fire/runs/index.ts)<br>[vs-code-extension/src/webview/components/fire/overview/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/webview/components/fire/overview/index.ts)<br>[vs-code-extension/src/webview/components/fire/intents/index.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/webview/components/fire/intents/index.ts) |
| spec | 56 | [vs-code-extension/MULTI_FLOW_ARCHITECTURE.md](../../../../sources/fabriqaai__specs.md/vs-code-extension/MULTI_FLOW_ARCHITECTURE.md)<br>[vs-code-extension/design-mockups/index.html](../../../../sources/fabriqaai__specs.md/vs-code-extension/design-mockups/index.html)<br>[vs-code-extension/design-mockups/variation-1-metrics-dashboard.html](../../../../sources/fabriqaai__specs.md/vs-code-extension/design-mockups/variation-1-metrics-dashboard.html)<br>[vs-code-extension/design-mockups/variation-10-dual-view-focus.html](../../../../sources/fabriqaai__specs.md/vs-code-extension/design-mockups/variation-10-dual-view-focus.html)<br>[vs-code-extension/design-mockups/variation-11-dual-view-grouped.html](../../../../sources/fabriqaai__specs.md/vs-code-extension/design-mockups/variation-11-dual-view-grouped.html)<br>[vs-code-extension/design-mockups/variation-12-dependency-graph.html](../../../../sources/fabriqaai__specs.md/vs-code-extension/design-mockups/variation-12-dependency-graph.html)<br>[vs-code-extension/design-mockups/variation-13-hierarchy-explorer.html](../../../../sources/fabriqaai__specs.md/vs-code-extension/design-mockups/variation-13-hierarchy-explorer.html)<br>[vs-code-extension/design-mockups/variation-14-swimlane-deps.html](../../../../sources/fabriqaai__specs.md/vs-code-extension/design-mockups/variation-14-swimlane-deps.html) |
| eval | 96 | [vs-code-extension/tsconfig.test.json](../../../../sources/fabriqaai__specs.md/vs-code-extension/tsconfig.test.json)<br>[vs-code-extension/src/test/runTest.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/runTest.ts)<br>[vs-code-extension/src/test/watcher/debounce.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/watcher/debounce.test.ts)<br>[vs-code-extension/src/test/watcher/fileWatcher.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/watcher/fileWatcher.test.ts)<br>[vs-code-extension/src/test/state/selectors.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/state/selectors.test.ts)<br>[vs-code-extension/src/test/state/stateStore.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/state/stateStore.test.ts)<br>[vs-code-extension/src/test/sidebar/treeBuilder.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/sidebar/treeBuilder.test.ts)<br>[vs-code-extension/src/test/sidebar/types.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/sidebar/types.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 6 | [.github/workflows/claude.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/claude.yml)<br>[.github/workflows/npm-package-ci.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/npm-package-ci.yml)<br>[.github/workflows/npm-package-dev.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/npm-package-dev.yml)<br>[.github/workflows/npm-package-release.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/npm-package-release.yml)<br>[.github/workflows/tweet-changelog.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/tweet-changelog.yml)<br>[.github/workflows/vscode-publish.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/vscode-publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [docs.specs.md/CLAUDE.md](../../../../sources/fabriqaai__specs.md/docs.specs.md/CLAUDE.md)<br>[docs.specs.md/fire-flow/agents.mdx](../../../../sources/fabriqaai__specs.md/docs.specs.md/fire-flow/agents.mdx)<br>[.claude/claude.md](../../../../sources/fabriqaai__specs.md/.claude/claude.md) |
| docs | 10 | [README.md](../../../../sources/fabriqaai__specs.md/README.md)<br>[vs-code-extension/README.md](../../../../sources/fabriqaai__specs.md/vs-code-extension/README.md)<br>[src/README.md](../../../../sources/fabriqaai__specs.md/src/README.md)<br>[src/flows/simple/README.md](../../../../sources/fabriqaai__specs.md/src/flows/simple/README.md)<br>[src/flows/ideation/README.md](../../../../sources/fabriqaai__specs.md/src/flows/ideation/README.md)<br>[src/flows/fire/README.md](../../../../sources/fabriqaai__specs.md/src/flows/fire/README.md)<br>[src/flows/aidlc/README.md](../../../../sources/fabriqaai__specs.md/src/flows/aidlc/README.md)<br>[src/flows/aidlc/templates/inception/project/README.md](../../../../sources/fabriqaai__specs.md/src/flows/aidlc/templates/inception/project/README.md) |
| config | 5 | [package.json](../../../../sources/fabriqaai__specs.md/package.json)<br>[vs-code-extension/package.json](../../../../sources/fabriqaai__specs.md/vs-code-extension/package.json)<br>[vs-code-extension/tsconfig.json](../../../../sources/fabriqaai__specs.md/vs-code-extension/tsconfig.json)<br>[src/package.json](../../../../sources/fabriqaai__specs.md/src/package.json)<br>[src/tsconfig.json](../../../../sources/fabriqaai__specs.md/src/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 96 | [vs-code-extension/tsconfig.test.json](../../../../sources/fabriqaai__specs.md/vs-code-extension/tsconfig.test.json)<br>[vs-code-extension/src/test/runTest.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/runTest.ts)<br>[vs-code-extension/src/test/watcher/debounce.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/watcher/debounce.test.ts)<br>[vs-code-extension/src/test/watcher/fileWatcher.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/watcher/fileWatcher.test.ts)<br>[vs-code-extension/src/test/state/selectors.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/state/selectors.test.ts)<br>[vs-code-extension/src/test/state/stateStore.test.ts](../../../../sources/fabriqaai__specs.md/vs-code-extension/src/test/state/stateStore.test.ts) |
| CI workflow | 6 | [.github/workflows/claude.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/claude.yml)<br>[.github/workflows/npm-package-ci.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/npm-package-ci.yml)<br>[.github/workflows/npm-package-dev.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/npm-package-dev.yml)<br>[.github/workflows/npm-package-release.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/npm-package-release.yml)<br>[.github/workflows/tweet-changelog.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/tweet-changelog.yml)<br>[.github/workflows/vscode-publish.yml](../../../../sources/fabriqaai__specs.md/.github/workflows/vscode-publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 3 | [docs.specs.md/CLAUDE.md](../../../../sources/fabriqaai__specs.md/docs.specs.md/CLAUDE.md)<br>[docs.specs.md/fire-flow/agents.mdx](../../../../sources/fabriqaai__specs.md/docs.specs.md/fire-flow/agents.mdx)<br>[.claude/claude.md](../../../../sources/fabriqaai__specs.md/.claude/claude.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/flows/simple/context-config.yaml`, `src/flows/simple/memory-bank.yaml`, `src/flows/simple/skills/design.md`.
2. entrypoint를 따라 실행 흐름 확인: `src/lib/dashboard/web/server.js`, `src/bin/cli.js`.
3. agent/tool runtime 매핑: `src/flows/simple/context-config.yaml`, `src/flows/simple/memory-bank.yaml`, `src/flows/simple/skills/design.md`.
4. retrieval/memory/indexing 확인: `vs-code-extension/src/welcome/index.ts`, `vs-code-extension/src/webview/index.ts`, `vs-code-extension/src/webview/lit/index.ts`.
5. test/eval 파일로 동작 검증: `vs-code-extension/tsconfig.test.json`, `vs-code-extension/src/test/runTest.ts`, `vs-code-extension/src/test/watcher/debounce.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 849 files, 283 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, tests, ci이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
