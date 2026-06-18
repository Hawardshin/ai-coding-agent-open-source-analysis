# mongodb-js/mongodb-mcp-server 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

A Model Context Protocol server to connect to MongoDB databases and MongoDB Atlas Clusters.

## 요약

- 조사 단위: `sources/mongodb-js__mongodb-mcp-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 499 files, 134 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=MCP_SERVER_LIBRARY.md, packages/mongodb-mcp-remote/package.json, packages/mongodb-mcp-remote/README.md이고, 의존성 단서는 openai, anthropic, mcp, modelcontextprotocol, express, react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | mongodb-js/mongodb-mcp-server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 1055 |
| Forks | 257 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/mongodb-js__mongodb-mcp-server](../../../../sources/mongodb-js__mongodb-mcp-server) |
| 기존 보고서 | [reports/global-trending/repositories/mongodb-js__mongodb-mcp-server.md](../../../global-trending/repositories/mongodb-js__mongodb-mcp-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 499 / 134 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, .husky, api-extractor, deploy, eslint-rules, packages, packaging, resources, scripts, src, tests |
| 상위 확장자 | .ts: 395, .json: 32, .yml: 23, .md: 17, (none): 11, .js: 4, .sh: 4, .conf: 2, .tsx: 2, .yaml: 2, .bicep: 1, .css: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 101 |
| packages/mongodb-mcp-remote | packages workspace | 11 |
| src | source boundary | 11 |
| packages/metrics | packages workspace | 4 |
| packages/types | packages workspace | 4 |
| .github | ci surface | 1 |
| api-extractor | source boundary | 1 |
| deploy | deployment surface | 1 |
| eslint-rules | top-level component | 1 |
| packages | source boundary | 1 |
| packaging | top-level component | 1 |
| resources | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | start | node dist/index.js --transport http --loggers 'stderr, mcp' |
| serve-dev | package.json | start:stdio | node dist/index.js --transport stdio --loggers 'stderr, mcp' |
| serve-dev | package.json | start:setup | pnpm run build && node dist/index.js setup |
| build | package.json | prepare | husky && pnpm run build |
| build | package.json | build:update-package-version | tsx scripts/updatePackageVersion.ts |
| build | package.json | build:esm | tsc --project tsconfig.esm.json |
| build | package.json | build:cjs | tsc --project tsconfig.cjs.json |
| build | package.json | prebuild:mcpb | pnpm run build |
| build | package.json | build:mcpb | node scripts/createMcpb.ts |
| build | package.json | build:universal-package | tsx scripts/createUniversalPackage.ts |
| build | package.json | compile | concurrently "pnpm run build:esm" "pnpm run build:cjs" && pnpm run build:universal-package |
| build | package.json | build | pnpm run -r --include-workspace-root compile |
| test | package.json | inspect | pnpm run build && mcp-inspector -- dist/esm/index.js |
| quality | package.json | prettier | prettier |
| build | package.json | check | concurrently "pnpm run build" "pnpm run check:types" "pnpm run check:lint" "pnpm run check:format" "pnpm run check:dependencies" && pnpm run check:api |
| quality | package.json | check:api-report | concurrently "api-extractor run --config api-extractor.json" "api-extractor run --config api-extractor/api-extractor-web.json" "api-extractor run --config api-extractor/api-extractor-tools.json" "api-extractor run --conf |
| quality | package.json | check:api | pnpm run check:api-report \|\| (printf "\nPublic API check failed. If you intended to change the public API, run:\n\n pnpm run update:api\n" && exit 1) |
| quality | package.json | check:lint | eslint . |
| quality | package.json | check:dependencies | knip --strict |
| quality | package.json | check:format | prettier -c . |
| build | package.json | update:api | pnpm run build && concurrently "api-extractor run --local --config api-extractor.json" "api-extractor run --local --config api-extractor/api-extractor-web.json" "api-extractor run --local --config api-extractor/api-extra |
| quality | package.json | check:types | tsc --noEmit --project tsconfig.json |
| quality | package.json | fix | pnpm run fix:lint && pnpm run reformat |
| quality | package.json | fix:lint | eslint . --fix |
| quality | package.json | reformat | prettier --write . |
| utility | package.json | generate | pnpm run generate:api && pnpm run generate:arguments && pnpm run generate:ui |
| quality | package.json | generate:ui | tsx --tsconfig scripts/generate/tsconfig.json scripts/generate/generateUI.ts |
| utility | package.json | generate:api | ./scripts/generate.sh |
| quality | package.json | generate:arguments | tsx --tsconfig scripts/generate/tsconfig.json scripts/generate/index.ts |
| test | package.json | pretest | pnpm run build |
| test | package.json | test | vitest --project eslint-rules --project unit-and-integration --project mcpb-build-script --run |
| test | package.json | test:accuracy | sh ./scripts/accuracy/runAccuracyTests.sh |
| test | package.json | test:browser | pnpm --filter browser test |
| test | package.json | test:long-running-tests | vitest --project long-running-tests --coverage |
| test | package.json | test:local | SKIP_ATLAS_INTEGRATION_TESTS=true SKIP_ATLAS_LOCAL_TESTS=true pnpm run test |
| build | package.json | prevalidate:mcpb | pnpm run build |
| utility | package.json | validate:mcpb | node scripts/createMcpb.ts --validate-only |
| test | package.json | atlas:cleanup | vitest --project atlas-cleanup |
| entrypoint | package.json bin | index.js | dist/esm/index.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express, react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [MCP_SERVER_LIBRARY.md](../../../../sources/mongodb-js__mongodb-mcp-server/MCP_SERVER_LIBRARY.md) | mcp signal |
| mcp | [packages/mongodb-mcp-remote/package.json](../../../../sources/mongodb-js__mongodb-mcp-server/packages/mongodb-mcp-remote/package.json) | mcp signal |
| mcp | [packages/mongodb-mcp-remote/README.md](../../../../sources/mongodb-js__mongodb-mcp-server/packages/mongodb-mcp-remote/README.md) | mcp signal |
| mcp | [packages/mongodb-mcp-remote/tsconfig.json](../../../../sources/mongodb-js__mongodb-mcp-server/packages/mongodb-mcp-remote/tsconfig.json) | mcp signal |
| agentRuntime | [tests/unit/tools/mongodb/mongodbSchemas.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/tools/mongodb/mongodbSchemas.test.ts) | agentRuntime signal |
| agentRuntime | [tests/unit/tools/atlas/update/pauseResumeCluster.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/tools/atlas/update/pauseResumeCluster.test.ts) | agentRuntime signal |
| agentRuntime | [tests/unit/tools/atlas/update/upgradeCluster.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/tools/atlas/update/upgradeCluster.test.ts) | agentRuntime signal |
| agentRuntime | [tests/unit/tools/atlas/streams/build.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/tools/atlas/streams/build.test.ts) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/mongodb-js__mongodb-mcp-server/server.json) | entrypoints signal |
| entrypoints | [tests/integration/server.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/integration/server.test.ts) | entrypoints signal |
| entrypoints | [tests/integration/fixtures/server.key](../../../../sources/mongodb-js__mongodb-mcp-server/tests/integration/fixtures/server.key) | entrypoints signal |
| entrypoints | [tests/integration/fixtures/server.pem](../../../../sources/mongodb-js__mongodb-mcp-server/tests/integration/fixtures/server.pem) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 10 | [server.json](../../../../sources/mongodb-js__mongodb-mcp-server/server.json)<br>[tests/integration/server.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/integration/server.test.ts)<br>[tests/integration/fixtures/server.key](../../../../sources/mongodb-js__mongodb-mcp-server/tests/integration/fixtures/server.key)<br>[tests/integration/fixtures/server.pem](../../../../sources/mongodb-js__mongodb-mcp-server/tests/integration/fixtures/server.pem)<br>[src/index.ts](../../../../sources/mongodb-js__mongodb-mcp-server/src/index.ts)<br>[src/server.ts](../../../../sources/mongodb-js__mongodb-mcp-server/src/server.ts)<br>[packages/types/src/index.ts](../../../../sources/mongodb-js__mongodb-mcp-server/packages/types/src/index.ts)<br>[packages/mongodb-mcp-remote/src/cli.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/packages/mongodb-mcp-remote/src/cli.test.ts) |
| agentRuntime | 136 | [tests/unit/tools/mongodb/mongodbSchemas.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/tools/mongodb/mongodbSchemas.test.ts)<br>[tests/unit/tools/atlas/update/pauseResumeCluster.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/tools/atlas/update/pauseResumeCluster.test.ts)<br>[tests/unit/tools/atlas/update/upgradeCluster.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/tools/atlas/update/upgradeCluster.test.ts)<br>[tests/unit/tools/atlas/streams/build.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/tools/atlas/streams/build.test.ts)<br>[tests/unit/tools/atlas/streams/discover.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/tools/atlas/streams/discover.test.ts)<br>[tests/unit/tools/atlas/streams/manage.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/tools/atlas/streams/manage.test.ts)<br>[tests/unit/tools/atlas/streams/streamsArgs.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/tools/atlas/streams/streamsArgs.test.ts)<br>[tests/unit/tools/atlas/streams/streamsToolBase.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/tools/atlas/streams/streamsToolBase.test.ts) |
| mcp | 9 | [MCP_SERVER_LIBRARY.md](../../../../sources/mongodb-js__mongodb-mcp-server/MCP_SERVER_LIBRARY.md)<br>[packages/mongodb-mcp-remote/package.json](../../../../sources/mongodb-js__mongodb-mcp-server/packages/mongodb-mcp-remote/package.json)<br>[packages/mongodb-mcp-remote/README.md](../../../../sources/mongodb-js__mongodb-mcp-server/packages/mongodb-mcp-remote/README.md)<br>[packages/mongodb-mcp-remote/tsconfig.json](../../../../sources/mongodb-js__mongodb-mcp-server/packages/mongodb-mcp-remote/tsconfig.json)<br>[packages/mongodb-mcp-remote/vitest.config.ts](../../../../sources/mongodb-js__mongodb-mcp-server/packages/mongodb-mcp-remote/vitest.config.ts)<br>[packages/mongodb-mcp-remote/src/cli.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/packages/mongodb-mcp-remote/src/cli.test.ts)<br>[packages/mongodb-mcp-remote/src/cli.ts](../../../../sources/mongodb-js__mongodb-mcp-server/packages/mongodb-mcp-remote/src/cli.ts)<br>[api-extractor/reports/mongodb-mcp-server.public.api.md](../../../../sources/mongodb-js__mongodb-mcp-server/api-extractor/reports/mongodb-mcp-server.public.api.md) |
| retrieval | 21 | [tests/utils/index.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/utils/index.ts)<br>[tests/browser/tests/embedding.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/browser/tests/embedding.test.ts)<br>[tests/browser/polyfills/zlib/index.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/browser/polyfills/zlib/index.ts)<br>[tests/browser/polyfills/stream/index.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/browser/polyfills/stream/index.ts)<br>[tests/browser/polyfills/stream/promises/index.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/browser/polyfills/stream/promises/index.ts)<br>[tests/browser/polyfills/process/index.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/browser/polyfills/process/index.ts)<br>[tests/browser/polyfills/fs/index.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/browser/polyfills/fs/index.ts)<br>[tests/browser/polyfills/fs/promises/index.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/browser/polyfills/fs/promises/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 235 | [tests/setup.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/setup.ts)<br>[tests/setupReact.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/setupReact.ts)<br>[tests/vitest.d.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/vitest.d.ts)<br>[tests/utils/elicitationMocks.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/utils/elicitationMocks.ts)<br>[tests/utils/index.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/utils/index.ts)<br>[tests/unit/accessListUtils.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/accessListUtils.test.ts)<br>[tests/unit/accuracyScorer.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/accuracyScorer.test.ts)<br>[tests/unit/args.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/args.test.ts) |
| security | 3 | [tests/unit/common/auth/clientCredentials.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/common/auth/clientCredentials.test.ts)<br>[src/common/atlas/auth/authProvider.ts](../../../../sources/mongodb-js__mongodb-mcp-server/src/common/atlas/auth/authProvider.ts)<br>[src/common/atlas/auth/clientCredentials.ts](../../../../sources/mongodb-js__mongodb-mcp-server/src/common/atlas/auth/clientCredentials.ts) |
| ci | 19 | [.github/workflows/accuracy-tests.yml](../../../../sources/mongodb-js__mongodb-mcp-server/.github/workflows/accuracy-tests.yml)<br>[.github/workflows/check-pr-title.yml](../../../../sources/mongodb-js__mongodb-mcp-server/.github/workflows/check-pr-title.yml)<br>[.github/workflows/check.yml](../../../../sources/mongodb-js__mongodb-mcp-server/.github/workflows/check.yml)<br>[.github/workflows/cleanup-atlas-env.yml](../../../../sources/mongodb-js__mongodb-mcp-server/.github/workflows/cleanup-atlas-env.yml)<br>[.github/workflows/code-health-fork.yml](../../../../sources/mongodb-js__mongodb-mcp-server/.github/workflows/code-health-fork.yml)<br>[.github/workflows/code-health-long-running.yml](../../../../sources/mongodb-js__mongodb-mcp-server/.github/workflows/code-health-long-running.yml)<br>[.github/workflows/code-health.yml](../../../../sources/mongodb-js__mongodb-mcp-server/.github/workflows/code-health.yml)<br>[.github/workflows/codeql.yml](../../../../sources/mongodb-js__mongodb-mcp-server/.github/workflows/codeql.yml) |
| container | 8 | [Dockerfile](../../../../sources/mongodb-js__mongodb-mcp-server/Dockerfile)<br>[tests/integration/tools/mongodb/mongot-community-setup/docker-compose.yml](../../../../sources/mongodb-js__mongodb-mcp-server/tests/integration/tools/mongodb/mongot-community-setup/docker-compose.yml)<br>[deploy/azure/README.md](../../../../sources/mongodb-js__mongodb-mcp-server/deploy/azure/README.md)<br>[deploy/azure/bicep/main.bicep](../../../../sources/mongodb-js__mongodb-mcp-server/deploy/azure/bicep/main.bicep)<br>[deploy/azure/bicep/params_template.json](../../../../sources/mongodb-js__mongodb-mcp-server/deploy/azure/bicep/params_template.json)<br>[deploy/azure/bicep/paramsWithAuthEnabled_template.json](../../../../sources/mongodb-js__mongodb-mcp-server/deploy/azure/bicep/paramsWithAuthEnabled_template.json)<br>[deploy/aws/Dockerfile](../../../../sources/mongodb-js__mongodb-mcp-server/deploy/aws/Dockerfile)<br>[deploy/aws/README.md](../../../../sources/mongodb-js__mongodb-mcp-server/deploy/aws/README.md) |
| instruction | 2 | [.github/copilot-code-review-instructions.md](../../../../sources/mongodb-js__mongodb-mcp-server/.github/copilot-code-review-instructions.md)<br>[.github/copilot-instructions.md](../../../../sources/mongodb-js__mongodb-mcp-server/.github/copilot-instructions.md) |
| docs | 7 | [README.md](../../../../sources/mongodb-js__mongodb-mcp-server/README.md)<br>[tests/browser/README.md](../../../../sources/mongodb-js__mongodb-mcp-server/tests/browser/README.md)<br>[tests/browser/polyfills/README.md](../../../../sources/mongodb-js__mongodb-mcp-server/tests/browser/polyfills/README.md)<br>[scripts/generate/README.md](../../../../sources/mongodb-js__mongodb-mcp-server/scripts/generate/README.md)<br>[packages/mongodb-mcp-remote/README.md](../../../../sources/mongodb-js__mongodb-mcp-server/packages/mongodb-mcp-remote/README.md)<br>[deploy/azure/README.md](../../../../sources/mongodb-js__mongodb-mcp-server/deploy/azure/README.md)<br>[deploy/aws/README.md](../../../../sources/mongodb-js__mongodb-mcp-server/deploy/aws/README.md) |
| config | 12 | [package.json](../../../../sources/mongodb-js__mongodb-mcp-server/package.json)<br>[pnpm-workspace.yaml](../../../../sources/mongodb-js__mongodb-mcp-server/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/mongodb-js__mongodb-mcp-server/tsconfig.json)<br>[tests/browser/package.json](../../../../sources/mongodb-js__mongodb-mcp-server/tests/browser/package.json)<br>[tests/browser/tsconfig.json](../../../../sources/mongodb-js__mongodb-mcp-server/tests/browser/tsconfig.json)<br>[scripts/generate/tsconfig.json](../../../../sources/mongodb-js__mongodb-mcp-server/scripts/generate/tsconfig.json)<br>[packages/types/package.json](../../../../sources/mongodb-js__mongodb-mcp-server/packages/types/package.json)<br>[packages/types/tsconfig.json](../../../../sources/mongodb-js__mongodb-mcp-server/packages/types/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 235 | [tests/setup.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/setup.ts)<br>[tests/setupReact.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/setupReact.ts)<br>[tests/vitest.d.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/vitest.d.ts)<br>[tests/utils/elicitationMocks.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/utils/elicitationMocks.ts)<br>[tests/utils/index.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/utils/index.ts)<br>[tests/unit/accessListUtils.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/accessListUtils.test.ts) |
| CI workflow | 19 | [.github/workflows/accuracy-tests.yml](../../../../sources/mongodb-js__mongodb-mcp-server/.github/workflows/accuracy-tests.yml)<br>[.github/workflows/check-pr-title.yml](../../../../sources/mongodb-js__mongodb-mcp-server/.github/workflows/check-pr-title.yml)<br>[.github/workflows/check.yml](../../../../sources/mongodb-js__mongodb-mcp-server/.github/workflows/check.yml)<br>[.github/workflows/cleanup-atlas-env.yml](../../../../sources/mongodb-js__mongodb-mcp-server/.github/workflows/cleanup-atlas-env.yml)<br>[.github/workflows/code-health-fork.yml](../../../../sources/mongodb-js__mongodb-mcp-server/.github/workflows/code-health-fork.yml)<br>[.github/workflows/code-health-long-running.yml](../../../../sources/mongodb-js__mongodb-mcp-server/.github/workflows/code-health-long-running.yml) |
| 컨테이너/배포 | 8 | [Dockerfile](../../../../sources/mongodb-js__mongodb-mcp-server/Dockerfile)<br>[tests/integration/tools/mongodb/mongot-community-setup/docker-compose.yml](../../../../sources/mongodb-js__mongodb-mcp-server/tests/integration/tools/mongodb/mongot-community-setup/docker-compose.yml)<br>[deploy/azure/README.md](../../../../sources/mongodb-js__mongodb-mcp-server/deploy/azure/README.md)<br>[deploy/azure/bicep/main.bicep](../../../../sources/mongodb-js__mongodb-mcp-server/deploy/azure/bicep/main.bicep)<br>[deploy/azure/bicep/params_template.json](../../../../sources/mongodb-js__mongodb-mcp-server/deploy/azure/bicep/params_template.json)<br>[deploy/azure/bicep/paramsWithAuthEnabled_template.json](../../../../sources/mongodb-js__mongodb-mcp-server/deploy/azure/bicep/paramsWithAuthEnabled_template.json) |
| 보안/정책 | 3 | [tests/unit/common/auth/clientCredentials.test.ts](../../../../sources/mongodb-js__mongodb-mcp-server/tests/unit/common/auth/clientCredentials.test.ts)<br>[src/common/atlas/auth/authProvider.ts](../../../../sources/mongodb-js__mongodb-mcp-server/src/common/atlas/auth/authProvider.ts)<br>[src/common/atlas/auth/clientCredentials.ts](../../../../sources/mongodb-js__mongodb-mcp-server/src/common/atlas/auth/clientCredentials.ts) |
| 에이전트 지시문 | 2 | [.github/copilot-code-review-instructions.md](../../../../sources/mongodb-js__mongodb-mcp-server/.github/copilot-code-review-instructions.md)<br>[.github/copilot-instructions.md](../../../../sources/mongodb-js__mongodb-mcp-server/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `MCP_SERVER_LIBRARY.md`, `packages/mongodb-mcp-remote/package.json`, `packages/mongodb-mcp-remote/README.md`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `tests/integration/server.test.ts`, `tests/integration/fixtures/server.key`.
3. agent/tool runtime 매핑: `tests/unit/tools/mongodb/mongodbSchemas.test.ts`, `tests/unit/tools/atlas/update/pauseResumeCluster.test.ts`, `tests/unit/tools/atlas/update/upgradeCluster.test.ts`.
4. retrieval/memory/indexing 확인: `tests/utils/index.ts`, `tests/browser/tests/embedding.test.ts`, `tests/browser/polyfills/zlib/index.ts`.
5. test/eval 파일로 동작 검증: `tests/setup.ts`, `tests/setupReact.ts`, `tests/vitest.d.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A Model Context Protocol server to connect to MongoDB databases and MongoDB Atlas Clusters.. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, README.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
