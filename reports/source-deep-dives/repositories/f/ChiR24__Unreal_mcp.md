# ChiR24/Unreal_mcp 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A comprehensive Model Context Protocol (MCP) server that enables AI assistants to control Unreal Engine through the native C++ Automation Bridge plugin. Built with TypeScript and C++.

## 요약

- 조사 단위: `sources/ChiR24__Unreal_mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,827 files, 298 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server.json, src/cli.ts, src/index.ts이고, 의존성 단서는 mcp, modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ChiR24/Unreal_mcp |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | C++ |
| Stars | 729 |
| Forks | 136 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/ChiR24__Unreal_mcp](../../../../sources/ChiR24__Unreal_mcp) |
| 기존 보고서 | [reports/global-trending/repositories/ChiR24__Unreal_mcp.md](../../../global-trending/repositories/ChiR24__Unreal_mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1827 / 298 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, .jules, docs, plugins, Public, scripts, src, tests |
| 상위 확장자 | .cpp: 1056, .ts: 427, .h: 219, .mjs: 43, .md: 30, .yml: 21, .json: 8, (none): 7, .cs: 2, .ini: 2, .js: 2, .uplugin: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 96 |
| src | source boundary | 54 |
| docs | documentation surface | 8 |
| .github | ci surface | 1 |
| plugins | top-level component | 1 |
| Public | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build:core | tsc -p tsconfig.json |
| build | package.json | build | npm run clean && npm run build:core |
| serve-dev | package.json | build:watch | tsc -p tsconfig.json --watch |
| serve-dev | package.json | start | node dist/cli.js |
| serve-dev | package.json | dev | ts-node-esm src/cli.ts |
| quality | package.json | lint | echo "Lint: typescript/javascript, C, C++, C#" && eslint . |
| quality | package.json | lint:fix | eslint . --fix |
| quality | package.json | lint:cpp | echo "Running C/C++ lint (cpplint)" && (python -m cpplint --recursive plugins \|\| echo 'cpplint not found; skipping C/C++ lint') |
| quality | package.json | lint:c | echo "Running C lint (cpplint)" && (python -m cpplint --recursive plugins \|\| echo 'cpplint not found; skipping C lint') |
| quality | package.json | lint:csharp | echo "Running C# lint (dotnet format)" && (dotnet tool run dotnet-format --verify-no-changes \|\| echo 'dotnet-format not available or formatting required; skipping C# lint') |
| build | package.json | clean | rimraf dist tsconfig.tsbuildinfo |
| build | package.json | prepare | node -e "const fs=require('fs');(fs.existsSync('dist')&&fs.existsSync('dist/cli.js')&&fs.existsSync('dist/index.js'))\|\|require('child_process').execSync('npm run build',{stdio:'inherit'})" |
| utility | package.json | automation:sync | node scripts/sync-mcp-plugin.js |
| utility | package.json | clean:tmp | node scripts/clean-tmp.js |
| test | package.json | test | node tests/integration.mjs |
| test | package.json | test:unit | vitest run |
| test | package.json | test:unit:watch | vitest |
| test | package.json | test:unit:coverage | vitest run --coverage |
| test | package.json | test:all | node tests/integration.mjs |
| test | package.json | test:smoke | node --loader ts-node/esm scripts/smoke-test.ts |
| test | package.json | test:native-parity | node tests/native-mcp-parity-audit.mjs |
| test | package.json | test:params | npm run test:native-parity && node tests/parameter-combination-audit.mjs --static --strict --optional-strict |
| quality | package.json | type-check | tsc --noEmit |
| entrypoint | package.json bin | cli.js | dist/cli.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp, modelcontextprotocol |
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
| entrypoints | [server.json](../../../../sources/ChiR24__Unreal_mcp/server.json) | entrypoints signal |
| entrypoints | [src/cli.ts](../../../../sources/ChiR24__Unreal_mcp/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/ChiR24__Unreal_mcp/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/ChiR24__Unreal_mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/ChiR24__Unreal_mcp/tsconfig.json) | config signal |
| ci | [.github/workflows/bump-version.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/bump-version.yml) | ci signal |
| ci | [.github/workflows/ci.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/codeql.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/codeql.yml) | ci signal |
| ci | [.github/workflows/dependency-review.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/dependency-review.yml) | ci signal |
| docs | [README.md](../../../../sources/ChiR24__Unreal_mcp/README.md) | docs signal |
| docs | [plugins/UnrealAgent/README.md](../../../../sources/ChiR24__Unreal_mcp/plugins/UnrealAgent/README.md) | docs signal |
| docs | [plugins/UnrealAgent/Resources/OpenCodeStudioKit/README.md](../../../../sources/ChiR24__Unreal_mcp/plugins/UnrealAgent/Resources/OpenCodeStudioKit/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [server.json](../../../../sources/ChiR24__Unreal_mcp/server.json)<br>[src/cli.ts](../../../../sources/ChiR24__Unreal_mcp/src/cli.ts)<br>[src/index.ts](../../../../sources/ChiR24__Unreal_mcp/src/index.ts) |
| agentRuntime | 352 | [AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/AGENTS.md)<br>[tests/AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/tests/AGENTS.md)<br>[tests/unit/tools/asset_handlers_security.test.ts](../../../../sources/ChiR24__Unreal_mcp/tests/unit/tools/asset_handlers_security.test.ts)<br>[tests/unit/tools/behavior_tree_get_tree.test.ts](../../../../sources/ChiR24__Unreal_mcp/tests/unit/tools/behavior_tree_get_tree.test.ts)<br>[tests/unit/tools/blueprint_handlers.test.ts](../../../../sources/ChiR24__Unreal_mcp/tests/unit/tools/blueprint_handlers.test.ts)<br>[tests/unit/tools/editor.test.ts](../../../../sources/ChiR24__Unreal_mcp/tests/unit/tools/editor.test.ts)<br>[tests/unit/tools/handler_structure.test.ts](../../../../sources/ChiR24__Unreal_mcp/tests/unit/tools/handler_structure.test.ts)<br>[tests/unit/tools/inspect_handlers.test.ts](../../../../sources/ChiR24__Unreal_mcp/tests/unit/tools/inspect_handlers.test.ts) |
| mcp | 113 | [mcp-config-example.json](../../../../sources/ChiR24__Unreal_mcp/mcp-config-example.json)<br>[tests/native-mcp-parity-audit.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/native-mcp-parity-audit.mjs)<br>[tests/native-mcp-source-parser.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/native-mcp-source-parser.mjs)<br>[tests/native-mcp-typescript-parity-parser.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/native-mcp-typescript-parity-parser.mjs)<br>[tests/unit/native_mcp_parity_audit.test.ts](../../../../sources/ChiR24__Unreal_mcp/tests/unit/native_mcp_parity_audit.test.ts)<br>[tests/unit/native_mcp_parity_comment_filtering.test.ts](../../../../sources/ChiR24__Unreal_mcp/tests/unit/native_mcp_parity_comment_filtering.test.ts)<br>[tests/mcp-tools/world/build-environment.test.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/mcp-tools/world/build-environment.test.mjs)<br>[tests/mcp-tools/world/manage-geometry.test.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/mcp-tools/world/manage-geometry.test.mjs) |
| retrieval | 17 | [src/index.ts](../../../../sources/ChiR24__Unreal_mcp/src/index.ts)<br>[src/utils/index.ts](../../../../sources/ChiR24__Unreal_mcp/src/utils/index.ts)<br>[src/types/index.ts](../../../../sources/ChiR24__Unreal_mcp/src/types/index.ts)<br>[src/tools/handlers/index.ts](../../../../sources/ChiR24__Unreal_mcp/src/tools/handlers/index.ts)<br>[src/tools/handlers/material/material-authoring-node-graph.ts](../../../../sources/ChiR24__Unreal_mcp/src/tools/handlers/material/material-authoring-node-graph.ts)<br>[src/tools/handlers/graph/graph-handlers.test.ts](../../../../sources/ChiR24__Unreal_mcp/src/tools/handlers/graph/graph-handlers.test.ts)<br>[src/tools/handlers/graph/graph-handlers.ts](../../../../sources/ChiR24__Unreal_mcp/src/tools/handlers/graph/graph-handlers.ts)<br>[src/tools/handlers/blueprint/blueprint-graph-actions.ts](../../../../sources/ChiR24__Unreal_mcp/src/tools/handlers/blueprint/blueprint-graph-actions.ts) |
| spec | 2 | [src/tools/handlers/widget/widget-authoring-action-requirements.ts](../../../../sources/ChiR24__Unreal_mcp/src/tools/handlers/widget/widget-authoring-action-requirements.ts)<br>[docs/Roadmap.md](../../../../sources/ChiR24__Unreal_mcp/docs/Roadmap.md) |
| eval | 149 | [tests/AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/tests/AGENTS.md)<br>[tests/expectation-utils.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/expectation-utils.mjs)<br>[tests/heartbeat-progress.test.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/heartbeat-progress.test.mjs)<br>[tests/integration.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/integration.mjs)<br>[tests/native-mcp-parity-audit.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/native-mcp-parity-audit.mjs)<br>[tests/native-mcp-source-parser.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/native-mcp-source-parser.mjs)<br>[tests/native-mcp-typescript-parity-parser.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/native-mcp-typescript-parity-parser.mjs)<br>[tests/parameter-audit-cli.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/parameter-audit-cli.mjs) |
| security | 16 | [tests/native-mcp-parity-audit.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/native-mcp-parity-audit.mjs)<br>[tests/parameter-audit-cli.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/parameter-audit-cli.mjs)<br>[tests/parameter-audit-context.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/parameter-audit-context.mjs)<br>[tests/parameter-audit-coverage.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/parameter-audit-coverage.mjs)<br>[tests/parameter-audit-schema.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/parameter-audit-schema.mjs)<br>[tests/parameter-audit-suites.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/parameter-audit-suites.mjs)<br>[tests/parameter-combination-audit.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/parameter-combination-audit.mjs)<br>[tests/unit/native_mcp_parity_audit.test.ts](../../../../sources/ChiR24__Unreal_mcp/tests/unit/native_mcp_parity_audit.test.ts) |
| ci | 14 | [.github/workflows/bump-version.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/bump-version.yml)<br>[.github/workflows/ci.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/dependency-review.yml)<br>[.github/workflows/greetings.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/greetings.yml)<br>[.github/workflows/labeler.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/labeler.yml)<br>[.github/workflows/links.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/links.yml)<br>[.github/workflows/pr-size-labeler.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/pr-size-labeler.yml) |
| container | 1 | [Dockerfile](../../../../sources/ChiR24__Unreal_mcp/Dockerfile) |
| instruction | 15 | [AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/AGENTS.md)<br>[GEMINI.md](../../../../sources/ChiR24__Unreal_mcp/GEMINI.md)<br>[tests/AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/tests/AGENTS.md)<br>[src/utils/AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/src/utils/AGENTS.md)<br>[src/types/AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/src/types/AGENTS.md)<br>[src/tools/AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/src/tools/AGENTS.md)<br>[src/tools/handlers/AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/src/tools/handlers/AGENTS.md)<br>[src/server/AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/src/server/AGENTS.md) |
| docs | 10 | [README.md](../../../../sources/ChiR24__Unreal_mcp/README.md)<br>[plugins/UnrealAgent/README.md](../../../../sources/ChiR24__Unreal_mcp/plugins/UnrealAgent/README.md)<br>[plugins/UnrealAgent/Resources/OpenCodeStudioKit/README.md](../../../../sources/ChiR24__Unreal_mcp/plugins/UnrealAgent/Resources/OpenCodeStudioKit/README.md)<br>[plugins/McpAutomationBridge/README.md](../../../../sources/ChiR24__Unreal_mcp/plugins/McpAutomationBridge/README.md)<br>[docs/editor-plugin-extension.md](../../../../sources/ChiR24__Unreal_mcp/docs/editor-plugin-extension.md)<br>[docs/Engine-API-Reference.md](../../../../sources/ChiR24__Unreal_mcp/docs/Engine-API-Reference.md)<br>[docs/handler-mapping.md](../../../../sources/ChiR24__Unreal_mcp/docs/handler-mapping.md)<br>[docs/native-automation-progress.md](../../../../sources/ChiR24__Unreal_mcp/docs/native-automation-progress.md) |
| config | 2 | [package.json](../../../../sources/ChiR24__Unreal_mcp/package.json)<br>[tsconfig.json](../../../../sources/ChiR24__Unreal_mcp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 149 | [tests/AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/tests/AGENTS.md)<br>[tests/expectation-utils.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/expectation-utils.mjs)<br>[tests/heartbeat-progress.test.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/heartbeat-progress.test.mjs)<br>[tests/integration.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/integration.mjs)<br>[tests/native-mcp-parity-audit.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/native-mcp-parity-audit.mjs)<br>[tests/native-mcp-source-parser.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/native-mcp-source-parser.mjs) |
| CI workflow | 14 | [.github/workflows/bump-version.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/bump-version.yml)<br>[.github/workflows/ci.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/dependency-review.yml)<br>[.github/workflows/greetings.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/greetings.yml)<br>[.github/workflows/labeler.yml](../../../../sources/ChiR24__Unreal_mcp/.github/workflows/labeler.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/ChiR24__Unreal_mcp/Dockerfile) |
| 보안/정책 | 16 | [tests/native-mcp-parity-audit.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/native-mcp-parity-audit.mjs)<br>[tests/parameter-audit-cli.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/parameter-audit-cli.mjs)<br>[tests/parameter-audit-context.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/parameter-audit-context.mjs)<br>[tests/parameter-audit-coverage.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/parameter-audit-coverage.mjs)<br>[tests/parameter-audit-schema.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/parameter-audit-schema.mjs)<br>[tests/parameter-audit-suites.mjs](../../../../sources/ChiR24__Unreal_mcp/tests/parameter-audit-suites.mjs) |
| 에이전트 지시문 | 15 | [AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/AGENTS.md)<br>[GEMINI.md](../../../../sources/ChiR24__Unreal_mcp/GEMINI.md)<br>[tests/AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/tests/AGENTS.md)<br>[src/utils/AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/src/utils/AGENTS.md)<br>[src/types/AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/src/types/AGENTS.md)<br>[src/tools/AGENTS.md](../../../../sources/ChiR24__Unreal_mcp/src/tools/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `server.json`, `src/cli.ts`, `src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `src/cli.ts`, `src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/AGENTS.md`, `tests/unit/tools/asset_handlers_security.test.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/utils/index.ts`, `src/types/index.ts`.
5. test/eval 파일로 동작 검증: `tests/AGENTS.md`, `tests/expectation-utils.mjs`, `tests/heartbeat-progress.test.mjs`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 A comprehensive Model Context Protocol MCP server that enables AI assistants to control Unreal Engine through the native. 핵심 구조 신호는 C++, package.json, Dockerfile, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
