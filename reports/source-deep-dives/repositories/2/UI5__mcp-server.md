# UI5/mcp-server 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The UI5 MCP server improves the developer experience when working with agentic AI and the UI5 framework.

## 요약

- 조사 단위: `sources/UI5__mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 402 files, 171 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=test/fixtures/sapui5-docs/docs/mcp-index.json, .github/workflows/publish-mcp-registry.yml이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | UI5/mcp-server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 89 |
| Forks | 18 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/UI5__mcp-server](../../../../sources/UI5__mcp-server) |
| 기존 보고서 | [reports/global-trending/repositories/UI5__mcp-server.md](../../../global-trending/repositories/UI5__mcp-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 402 / 171 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, .husky, bin, docs, LICENSES, resources, scripts, src, test |
| 상위 확장자 | .ts: 139, .js: 53, .json: 52, .md: 39, .html: 30, .properties: 18, (none): 13, .yml: 11, .yaml: 9, .snap: 7, .xml: 7, .ejs: 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 13 |
| docs | documentation surface | 8 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| LICENSES | top-level component | 1 |
| resources | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | start | tsx src/cli.ts |
| test | package.json | inspect-mcp-server | mcp-inspector tsx src/cli.ts |
| test | package.json | inspect-mcp-server-debug | mcp-inspector tsx --inspect src/cli.ts |
| build | package.json | build | npm run clean-lib && tsc -p tsconfig.build.json |
| test | package.json | build-test | tsc --noEmit -p . |
| serve-dev | package.json | build-watch | npm run clean-lib && tsc -w -p tsconfig.build.json |
| quality | package.json | check-engine | check-engine-light -f npm-shrinkwrap.json . |
| quality | package.json | check-licenses | licensee --errors-only |
| utility | package.json | knip | knip --config knip.config.js |
| quality | package.json | lint:commit | commitlint |
| test | package.json | prepare | test -f ./.husky/skip.js && node ./.husky/skip.js \|\| test -d ./.git && husky \|\| true |
| test | package.json | clean-coverage | rimraf coverage |
| utility | package.json | clean-lib | rimraf lib |
| test | package.json | clean-test-tmp | rimraf test/tmp |
| quality | package.json | lint | eslint . |
| quality | package.json | lint-fix | eslint . --fix |
| test | package.json | test | npm run lint && npm run build-test && npm run coverage && npm run knip && npm run check-licenses |
| test | package.json | coverage | npm run clean-coverage && nyc ava --node-arguments="--experimental-loader=@istanbuljs/esm-loader-hook" |
| utility | package.json | unit | ava |
| utility | package.json | unit-debug | ava debug |
| utility | package.json | unit-update-snapshots | ava --update-snapshots |
| serve-dev | package.json | unit-watch | ava --watch |
| test | package.json | try-create-ui5-app | tsx test/runCreateUi5App.ts |
| test | package.json | try-create-ui5-ts-app | tsx test/runCreateUi5TsApp.ts |
| utility | package.json | update-docs | tsx scripts/updateDocs.ts |
| entrypoint | package.json bin | ui5mcp.js | bin/ui5mcp.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
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
| mcp | [test/fixtures/sapui5-docs/docs/mcp-index.json](../../../../sources/UI5__mcp-server/test/fixtures/sapui5-docs/docs/mcp-index.json) | mcp signal |
| mcp | [.github/workflows/publish-mcp-registry.yml](../../../../sources/UI5__mcp-server/.github/workflows/publish-mcp-registry.yml) | mcp signal |
| agentRuntime | [test/lib/Context.ts](../../../../sources/UI5__mcp-server/test/lib/Context.ts) | agentRuntime signal |
| agentRuntime | [test/lib/tools/run_ui5_linter/index.ts](../../../../sources/UI5__mcp-server/test/lib/tools/run_ui5_linter/index.ts) | agentRuntime signal |
| agentRuntime | [test/lib/tools/run_ui5_linter/run_ui5_linter.ts](../../../../sources/UI5__mcp-server/test/lib/tools/run_ui5_linter/run_ui5_linter.ts) | agentRuntime signal |
| agentRuntime | [test/lib/tools/run_ui5_linter/snapshots/run_ui5_linter.ts.md](../../../../sources/UI5__mcp-server/test/lib/tools/run_ui5_linter/snapshots/run_ui5_linter.ts.md) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/UI5__mcp-server/server.json) | entrypoints signal |
| entrypoints | [test/lib/server.ts](../../../../sources/UI5__mcp-server/test/lib/server.ts) | entrypoints signal |
| entrypoints | [src/cli.ts](../../../../sources/UI5__mcp-server/src/cli.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/UI5__mcp-server/src/server.ts) | entrypoints signal |
| config | [package.json](../../../../sources/UI5__mcp-server/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/UI5__mcp-server/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [server.json](../../../../sources/UI5__mcp-server/server.json)<br>[test/lib/server.ts](../../../../sources/UI5__mcp-server/test/lib/server.ts)<br>[src/cli.ts](../../../../sources/UI5__mcp-server/src/cli.ts)<br>[src/server.ts](../../../../sources/UI5__mcp-server/src/server.ts)<br>[resources/template-js/webapp/test-lt1_124/integration/pages/Main.js](../../../../sources/UI5__mcp-server/resources/template-js/webapp/test-lt1_124/integration/pages/Main.js)<br>[resources/template-js/webapp/test/integration/pages/Main.js](../../../../sources/UI5__mcp-server/resources/template-js/webapp/test/integration/pages/Main.js)<br>[bin/ui5mcp.js](../../../../sources/UI5__mcp-server/bin/ui5mcp.js) |
| agentRuntime | 86 | [test/lib/Context.ts](../../../../sources/UI5__mcp-server/test/lib/Context.ts)<br>[test/lib/tools/run_ui5_linter/index.ts](../../../../sources/UI5__mcp-server/test/lib/tools/run_ui5_linter/index.ts)<br>[test/lib/tools/run_ui5_linter/run_ui5_linter.ts](../../../../sources/UI5__mcp-server/test/lib/tools/run_ui5_linter/run_ui5_linter.ts)<br>[test/lib/tools/run_ui5_linter/snapshots/run_ui5_linter.ts.md](../../../../sources/UI5__mcp-server/test/lib/tools/run_ui5_linter/snapshots/run_ui5_linter.ts.md)<br>[test/lib/tools/run_ui5_linter/snapshots/run_ui5_linter.ts.snap](../../../../sources/UI5__mcp-server/test/lib/tools/run_ui5_linter/snapshots/run_ui5_linter.ts.snap)<br>[test/lib/tools/run_manifest_validation/index.ts](../../../../sources/UI5__mcp-server/test/lib/tools/run_manifest_validation/index.ts)<br>[test/lib/tools/run_manifest_validation/runValidation.integration.ts](../../../../sources/UI5__mcp-server/test/lib/tools/run_manifest_validation/runValidation.integration.ts)<br>[test/lib/tools/run_manifest_validation/runValidation.ts](../../../../sources/UI5__mcp-server/test/lib/tools/run_manifest_validation/runValidation.ts) |
| mcp | 2 | [test/fixtures/sapui5-docs/docs/mcp-index.json](../../../../sources/UI5__mcp-server/test/fixtures/sapui5-docs/docs/mcp-index.json)<br>[.github/workflows/publish-mcp-registry.yml](../../../../sources/UI5__mcp-server/.github/workflows/publish-mcp-registry.yml) |
| retrieval | 38 | [test/lib/tools/run_ui5_linter/index.ts](../../../../sources/UI5__mcp-server/test/lib/tools/run_ui5_linter/index.ts)<br>[test/lib/tools/run_manifest_validation/index.ts](../../../../sources/UI5__mcp-server/test/lib/tools/run_manifest_validation/index.ts)<br>[test/lib/tools/get_version_info/index.ts](../../../../sources/UI5__mcp-server/test/lib/tools/get_version_info/index.ts)<br>[test/lib/tools/get_typescript_conversion_guidelines/index.ts](../../../../sources/UI5__mcp-server/test/lib/tools/get_typescript_conversion_guidelines/index.ts)<br>[test/lib/tools/get_project_info/index.ts](../../../../sources/UI5__mcp-server/test/lib/tools/get_project_info/index.ts)<br>[test/lib/tools/get_integration_cards_guidelines/index.ts](../../../../sources/UI5__mcp-server/test/lib/tools/get_integration_cards_guidelines/index.ts)<br>[test/lib/tools/get_guidelines/index.ts](../../../../sources/UI5__mcp-server/test/lib/tools/get_guidelines/index.ts)<br>[test/lib/tools/get_api_reference/index.ts](../../../../sources/UI5__mcp-server/test/lib/tools/get_api_reference/index.ts) |
| spec | 3 | [docs/architecture.md](../../../../sources/UI5__mcp-server/docs/architecture.md)<br>[docs/diagrams/architecture-overview.png](../../../../sources/UI5__mcp-server/docs/diagrams/architecture-overview.png)<br>[docs/diagrams/architecture.graffle](../../../../sources/UI5__mcp-server/docs/diagrams/architecture.graffle) |
| eval | 220 | [test/runCreateUi5App.ts](../../../../sources/UI5__mcp-server/test/runCreateUi5App.ts)<br>[test/runCreateUi5TsApp.ts](../../../../sources/UI5__mcp-server/test/runCreateUi5TsApp.ts)<br>[test/utils/fshelper.ts](../../../../sources/UI5__mcp-server/test/utils/fshelper.ts)<br>[test/utils/fsMocks.ts](../../../../sources/UI5__mcp-server/test/utils/fsMocks.ts)<br>[test/utils/TestContext.ts](../../../../sources/UI5__mcp-server/test/utils/TestContext.ts)<br>[test/scripts/docs/downloadHelper.ts](../../../../sources/UI5__mcp-server/test/scripts/docs/downloadHelper.ts)<br>[test/scripts/docs/getDocsIndex.ts](../../../../sources/UI5__mcp-server/test/scripts/docs/getDocsIndex.ts)<br>[test/scripts/docs/getDocsRepository.ts](../../../../sources/UI5__mcp-server/test/scripts/docs/getDocsRepository.ts) |
| security | 1 | [.github/workflows/reuse-compliance.yml](../../../../sources/UI5__mcp-server/.github/workflows/reuse-compliance.yml) |
| ci | 7 | [.github/workflows/ci.yml](../../../../sources/UI5__mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/UI5__mcp-server/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/issues.yml](../../../../sources/UI5__mcp-server/.github/workflows/issues.yml)<br>[.github/workflows/publish-mcp-registry.yml](../../../../sources/UI5__mcp-server/.github/workflows/publish-mcp-registry.yml)<br>[.github/workflows/release-please.yml](../../../../sources/UI5__mcp-server/.github/workflows/release-please.yml)<br>[.github/workflows/reuse-compliance.yml](../../../../sources/UI5__mcp-server/.github/workflows/reuse-compliance.yml)<br>[.github/workflows/test.yml](../../../../sources/UI5__mcp-server/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 31 | [README.md](../../../../sources/UI5__mcp-server/README.md)<br>[test/scripts/docs/downloadHelper.ts](../../../../sources/UI5__mcp-server/test/scripts/docs/downloadHelper.ts)<br>[test/scripts/docs/getDocsIndex.ts](../../../../sources/UI5__mcp-server/test/scripts/docs/getDocsIndex.ts)<br>[test/scripts/docs/getDocsRepository.ts](../../../../sources/UI5__mcp-server/test/scripts/docs/getDocsRepository.ts)<br>[test/fixtures/sapui5-docs/docs/best-practices-for-aria-labeling-3169195.md](../../../../sources/UI5__mcp-server/test/fixtures/sapui5-docs/docs/best-practices-for-aria-labeling-3169195.md)<br>[test/fixtures/sapui5-docs/docs/best-practices-for-developers-28fcd55.md](../../../../sources/UI5__mcp-server/test/fixtures/sapui5-docs/docs/best-practices-for-developers-28fcd55.md)<br>[test/fixtures/sapui5-docs/docs/best-practices-for-loading-modules-00737d6.md](../../../../sources/UI5__mcp-server/test/fixtures/sapui5-docs/docs/best-practices-for-loading-modules-00737d6.md)<br>[test/fixtures/sapui5-docs/docs/mcp-index.json](../../../../sources/UI5__mcp-server/test/fixtures/sapui5-docs/docs/mcp-index.json) |
| config | 12 | [package.json](../../../../sources/UI5__mcp-server/package.json)<br>[tsconfig.json](../../../../sources/UI5__mcp-server/tsconfig.json)<br>[test/fixtures/run_ui5_linter/openui5-sample-app/package.json](../../../../sources/UI5__mcp-server/test/fixtures/run_ui5_linter/openui5-sample-app/package.json)<br>[test/expected/create_ui5_ts_app/com.test.apiapp/package.json](../../../../sources/UI5__mcp-server/test/expected/create_ui5_ts_app/com.test.apiapp/package.json)<br>[test/expected/create_ui5_app/com.test.apiapp/package.json](../../../../sources/UI5__mcp-server/test/expected/create_ui5_app/com.test.apiapp/package.json)<br>[test/expected/create_ui5_app/com.test.apiapp/tsconfig.json](../../../../sources/UI5__mcp-server/test/expected/create_ui5_app/com.test.apiapp/tsconfig.json)<br>[test/expected/create_integration_card/single_destination/package.json](../../../../sources/UI5__mcp-server/test/expected/create_integration_card/single_destination/package.json)<br>[test/expected/create_integration_card/destinations/package.json](../../../../sources/UI5__mcp-server/test/expected/create_integration_card/destinations/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 220 | [test/runCreateUi5App.ts](../../../../sources/UI5__mcp-server/test/runCreateUi5App.ts)<br>[test/runCreateUi5TsApp.ts](../../../../sources/UI5__mcp-server/test/runCreateUi5TsApp.ts)<br>[test/utils/fshelper.ts](../../../../sources/UI5__mcp-server/test/utils/fshelper.ts)<br>[test/utils/fsMocks.ts](../../../../sources/UI5__mcp-server/test/utils/fsMocks.ts)<br>[test/utils/TestContext.ts](../../../../sources/UI5__mcp-server/test/utils/TestContext.ts)<br>[test/scripts/docs/downloadHelper.ts](../../../../sources/UI5__mcp-server/test/scripts/docs/downloadHelper.ts) |
| CI workflow | 7 | [.github/workflows/ci.yml](../../../../sources/UI5__mcp-server/.github/workflows/ci.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/UI5__mcp-server/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/issues.yml](../../../../sources/UI5__mcp-server/.github/workflows/issues.yml)<br>[.github/workflows/publish-mcp-registry.yml](../../../../sources/UI5__mcp-server/.github/workflows/publish-mcp-registry.yml)<br>[.github/workflows/release-please.yml](../../../../sources/UI5__mcp-server/.github/workflows/release-please.yml)<br>[.github/workflows/reuse-compliance.yml](../../../../sources/UI5__mcp-server/.github/workflows/reuse-compliance.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [.github/workflows/reuse-compliance.yml](../../../../sources/UI5__mcp-server/.github/workflows/reuse-compliance.yml) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `test/fixtures/sapui5-docs/docs/mcp-index.json`, `.github/workflows/publish-mcp-registry.yml`, `test/lib/Context.ts`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `test/lib/server.ts`, `src/cli.ts`.
3. agent/tool runtime 매핑: `test/lib/Context.ts`, `test/lib/tools/run_ui5_linter/index.ts`, `test/lib/tools/run_ui5_linter/run_ui5_linter.ts`.
4. retrieval/memory/indexing 확인: `test/lib/tools/run_ui5_linter/index.ts`, `test/lib/tools/run_manifest_validation/index.ts`, `test/lib/tools/get_version_info/index.ts`.
5. test/eval 파일로 동작 검증: `test/runCreateUi5App.ts`, `test/runCreateUi5TsApp.ts`, `test/utils/fshelper.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The UI5 MCP server improves the developer experience when working with agentic AI and the UI5 framework.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
