# nanbingxyz/5ire 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

5ire is a cross-platform desktop AI assistant, MCP client. It compatible with major service providers, supports local knowledge base and tools via model context protocol servers .

## 요약

- 조사 단위: `sources/nanbingxyz__5ire` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 478 files, 85 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=test/utils/mcp.test.ts, src/mcp.config.ts, src/utils/mcp.ts이고, 의존성 단서는 modelcontextprotocol, next, react, electron, transformers, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | nanbingxyz/5ire |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 5247 |
| Forks | 407 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/nanbingxyz__5ire](../../../../sources/nanbingxyz__5ire) |
| 기존 보고서 | [reports/global-trending/repositories/nanbingxyz__5ire.md](../../../global-trending/repositories/nanbingxyz__5ire.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 478 / 85 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .erb, .github, .husky, docs, drizzle, patches, public, scripts, src, test |
| 상위 확장자 | .ts: 203, .tsx: 107, .json: 26, .woff2: 22, .ttf: 20, .woff: 20, .png: 19, .sql: 12, .scss: 11, .md: 9, .js: 5, (none): 5 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 90 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| drizzle | top-level component | 1 |
| patches | top-level component | 1 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | postinstall | patch-package && node ./node_modules/electron/install.js && npm run install:deps |
| build | package.json | install:deps | electron-builder install-app-deps |
| quality | package.json | lint | biome check --write . |
| test | package.json | test | jest |
| utility | package.json | prepare | husky |
| quality | package.json | format | biome format --write . |
| quality | package.json | check | tsc --noEmit |
| build | package.json | build | npm run install:deps && rsbuild build |
| serve-dev | package.json | build:watch | npm run install:deps && rsbuild dev |
| serve-dev | package.json | dev:build | rsbuild dev |
| serve-dev | package.json | dev:start | npx wait-on http-get://127.0.0.1:33077 file:./output/nodemon.json && cd ./output && npx nodemon |
| serve-dev | package.json | dev | rimraf ./output/ && concurrently -n R,E -c cyan,magenta "npm run dev:build" "npm run dev:start" |
| build | package.json | package | rimraf ./release && tsx ./scripts/package/index.ts |
| build | package.json | package:publish | rimraf ./release && tsx ./scripts/package/index.ts --publish |
| utility | package.json | generate:drizzle | drizzle-kit generate |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers, llama |
| webRuntime | next, react |
| developerSurface | electron |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [test/utils/mcp.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/mcp.test.ts) | mcp signal |
| mcp | [src/mcp.config.ts](../../../../sources/nanbingxyz__5ire/src/mcp.config.ts) | mcp signal |
| mcp | [src/utils/mcp.ts](../../../../sources/nanbingxyz__5ire/src/utils/mcp.ts) | mcp signal |
| mcp | [src/types/mcp.d.ts](../../../../sources/nanbingxyz__5ire/src/types/mcp.d.ts) | mcp signal |
| agentRuntime | [src/renderer/pages/tool/index.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/index.tsx) | agentRuntime signal |
| agentRuntime | [src/renderer/pages/tool/InstallDialog.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/InstallDialog.tsx) | agentRuntime signal |
| agentRuntime | [src/renderer/pages/tool/MarketDrawer.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/MarketDrawer.tsx) | agentRuntime signal |
| agentRuntime | [src/renderer/pages/tool/NewButton.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/NewButton.tsx) | agentRuntime signal |
| entrypoints | [src/main/main.ts](../../../../sources/nanbingxyz__5ire/src/main/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/nanbingxyz__5ire/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/nanbingxyz__5ire/tsconfig.json) | config signal |
| ci | [.github/workflows/auto-release.yml](../../../../sources/nanbingxyz__5ire/.github/workflows/auto-release.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/main/main.ts](../../../../sources/nanbingxyz__5ire/src/main/main.ts) |
| agentRuntime | 40 | [src/renderer/pages/tool/index.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/index.tsx)<br>[src/renderer/pages/tool/InstallDialog.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/InstallDialog.tsx)<br>[src/renderer/pages/tool/MarketDrawer.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/MarketDrawer.tsx)<br>[src/renderer/pages/tool/NewButton.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/NewButton.tsx)<br>[src/renderer/pages/tool/ServerBrowser.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/ServerBrowser.tsx)<br>[src/renderer/pages/tool/ServerDeleteConfirm.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/ServerDeleteConfirm.tsx)<br>[src/renderer/pages/tool/ServerEditDialog.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/ServerEditDialog.tsx)<br>[src/renderer/pages/tool/ServerGrid.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/ServerGrid.tsx) |
| mcp | 17 | [test/utils/mcp.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/mcp.test.ts)<br>[src/mcp.config.ts](../../../../sources/nanbingxyz__5ire/src/mcp.config.ts)<br>[src/utils/mcp.ts](../../../../sources/nanbingxyz__5ire/src/utils/mcp.ts)<br>[src/types/mcp.d.ts](../../../../sources/nanbingxyz__5ire/src/types/mcp.d.ts)<br>[src/main/mcp.ts](../../../../sources/nanbingxyz__5ire/src/main/mcp.ts)<br>[src/main/services/mcp-completion-handler.ts](../../../../sources/nanbingxyz__5ire/src/main/services/mcp-completion-handler.ts)<br>[src/main/services/mcp-connections-manager.ts](../../../../sources/nanbingxyz__5ire/src/main/services/mcp-connections-manager.ts)<br>[src/main/services/mcp-content-converter.ts](../../../../sources/nanbingxyz__5ire/src/main/services/mcp-content-converter.ts) |
| retrieval | 31 | [test/main/knowledge.spec.ts](../../../../sources/nanbingxyz__5ire/test/main/knowledge.spec.ts)<br>[src/types/knowledge.d.ts](../../../../sources/nanbingxyz__5ire/src/types/knowledge.d.ts)<br>[src/renderer/index.ejs](../../../../sources/nanbingxyz__5ire/src/renderer/index.ejs)<br>[src/renderer/index.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/index.tsx)<br>[src/renderer/pages/usage/index.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/usage/index.tsx)<br>[src/renderer/pages/tool/index.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/tool/index.tsx)<br>[src/renderer/pages/settings/index.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/settings/index.tsx)<br>[src/renderer/pages/providers/index.tsx](../../../../sources/nanbingxyz__5ire/src/renderer/pages/providers/index.tsx) |
| spec | 10 | [test/main/docloader.spec.ts](../../../../sources/nanbingxyz__5ire/test/main/docloader.spec.ts)<br>[test/main/embedder.spec.ts](../../../../sources/nanbingxyz__5ire/test/main/embedder.spec.ts)<br>[test/main/knowledge.spec.ts](../../../../sources/nanbingxyz__5ire/test/main/knowledge.spec.ts)<br>[test/main/util.spec.ts](../../../../sources/nanbingxyz__5ire/test/main/util.spec.ts)<br>[test/intellichat/anthropic-chat-service.spec.ts](../../../../sources/nanbingxyz__5ire/test/intellichat/anthropic-chat-service.spec.ts)<br>[test/intellichat/reader.spec.ts](../../../../sources/nanbingxyz__5ire/test/intellichat/reader.spec.ts)<br>[test/intellichat/validators.spec.ts](../../../../sources/nanbingxyz__5ire/test/intellichat/validators.spec.ts)<br>[src/assets/images/design.dark.png](../../../../sources/nanbingxyz__5ire/src/assets/images/design.dark.png) |
| eval | 30 | [test/utils/command-line.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/command-line.test.ts)<br>[test/utils/mcp.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/mcp.test.ts)<br>[test/utils/token.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/token.test.ts)<br>[test/utils/util.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/util.test.ts)<br>[test/utils/validators.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/validators.test.ts)<br>[test/resource/test.csv](../../../../sources/nanbingxyz__5ire/test/resource/test.csv)<br>[test/resource/test.htm](../../../../sources/nanbingxyz__5ire/test/resource/test.htm)<br>[test/resource/test.html](../../../../sources/nanbingxyz__5ire/test/resource/test.html) |
| security | 1 | [src/types/auth.d.ts](../../../../sources/nanbingxyz__5ire/src/types/auth.d.ts) |
| ci | 2 | [.github/workflows/auto-release.yml](../../../../sources/nanbingxyz__5ire/.github/workflows/auto-release.yml)<br>[.github/workflows/daily-summary.yml](../../../../sources/nanbingxyz__5ire/.github/workflows/daily-summary.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/nanbingxyz__5ire/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/nanbingxyz__5ire/docs/ARCHITECTURE.md) |
| config | 2 | [package.json](../../../../sources/nanbingxyz__5ire/package.json)<br>[tsconfig.json](../../../../sources/nanbingxyz__5ire/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 30 | [test/utils/command-line.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/command-line.test.ts)<br>[test/utils/mcp.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/mcp.test.ts)<br>[test/utils/token.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/token.test.ts)<br>[test/utils/util.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/util.test.ts)<br>[test/utils/validators.test.ts](../../../../sources/nanbingxyz__5ire/test/utils/validators.test.ts)<br>[test/resource/test.csv](../../../../sources/nanbingxyz__5ire/test/resource/test.csv) |
| CI workflow | 2 | [.github/workflows/auto-release.yml](../../../../sources/nanbingxyz__5ire/.github/workflows/auto-release.yml)<br>[.github/workflows/daily-summary.yml](../../../../sources/nanbingxyz__5ire/.github/workflows/daily-summary.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [src/types/auth.d.ts](../../../../sources/nanbingxyz__5ire/src/types/auth.d.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `test/utils/mcp.test.ts`, `src/mcp.config.ts`, `src/utils/mcp.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/main/main.ts`.
3. agent/tool runtime 매핑: `src/renderer/pages/tool/index.tsx`, `src/renderer/pages/tool/InstallDialog.tsx`, `src/renderer/pages/tool/MarketDrawer.tsx`.
4. retrieval/memory/indexing 확인: `test/main/knowledge.spec.ts`, `src/types/knowledge.d.ts`, `src/renderer/index.ejs`.
5. test/eval 파일로 동작 검증: `test/utils/command-line.test.ts`, `test/utils/mcp.test.ts`, `test/utils/token.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 5ire is a cross platform desktop AI assistant, MCP client. It compatible with major service providers, supports local kn. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, next이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
