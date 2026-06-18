# hmmhmmhm/daiso-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

한국 로컬 리테일과 영화관 조회를 MCP, CLI, Codex Skill로 연결합니다.

## 요약

- 조사 단위: `sources/hmmhmmhm__daiso-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 576 files, 87 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, tests/scripts/mcp-smoke.test.ts, tests/app/app-mcp-client.test.ts이고, 의존성 단서는 mcp, modelcontextprotocol, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | hmmhmmhm/daiso-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/hmmhmmhm__daiso-mcp](../../../../sources/hmmhmmhm__daiso-mcp) |
| 기존 보고서 | [reports/korea-trending/repositories/hmmhmmhm__daiso-mcp.md](../../../korea-trending/repositories/hmmhmmhm__daiso-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 576 / 87 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .githooks, .github, assets, docs, examples, scripts, skills, src, tests |
| 상위 확장자 | .ts: 438, .md: 52, .sh: 38, .yml: 13, .py: 11, .json: 7, (none): 7, .example: 1, .html: 1, .jsonc: 1, .kt: 1, .png: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 91 |
| docs | documentation surface | 40 |
| src | source boundary | 23 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | hooks:install | git config core.hooksPath .githooks && chmod +x .githooks/pre-push |
| serve-dev | package.json | dev | wrangler dev |
| utility | package.json | deploy | wrangler deploy |
| build | package.json | build | tsc && npx tsx scripts/ops/generate-openapi.ts |
| build | package.json | build:openapi | npx tsx scripts/ops/generate-openapi.ts |
| build | package.json | cli:smoke | npm run build && npx tsx scripts/ops/cli-smoke.ts |
| utility | package.json | mcp:smoke | npx tsx scripts/ops/mcp-smoke.ts |
| utility | package.json | update:workers-chart | npx tsx scripts/ops/update-workers-invocations-chart.ts |
| build | package.json | prepack | npm run build |
| build | package.json | prepublishOnly | npm run check && npm run build |
| build | package.json | release:dry-run | npm pack --dry-run |
| utility | package.json | publish:public | npm publish --access public |
| quality | package.json | typecheck | tsc --noEmit |
| test | package.json | lint | eslint "src/**/*.ts" "tests/**/*.ts" "scripts/**/*.ts" "vitest.config.ts" |
| test | package.json | lint:fix | eslint "src/**/*.ts" "tests/**/*.ts" "scripts/**/*.ts" "vitest.config.ts" --fix |
| quality | package.json | format | prettier .github/**/*.md .github/**/*.yml README.md SECURITY.md AGENTS.md CONTRIBUTING.md package.json tsconfig.json .prettierrc.json .mcp.json eslint.config.ts --write |
| quality | package.json | format:check | prettier .github/**/*.md .github/**/*.yml README.md SECURITY.md AGENTS.md CONTRIBUTING.md package.json tsconfig.json .prettierrc.json .mcp.json eslint.config.ts --check |
| quality | package.json | cf-typegen | wrangler types |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| test | package.json | check | npm run format:check && npm run lint && npm run lint:biome && npm run typecheck && npm test |
| quality | package.json | lint:biome | biome lint |
| entrypoint | package.json bin | bin.js | dist/bin.js |


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
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/hmmhmmhm__daiso-mcp/.mcp.json) | mcp signal |
| mcp | [tests/scripts/mcp-smoke.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/scripts/mcp-smoke.test.ts) | mcp signal |
| mcp | [tests/app/app-mcp-client.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/app/app-mcp-client.test.ts) | mcp signal |
| mcp | [scripts/ops/mcp-smoke.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/ops/mcp-smoke.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/hmmhmmhm__daiso-mcp/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/services/seveneleven/tools/checkInventory.storeFiltering.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/checkInventory.storeFiltering.test.ts) | agentRuntime signal |
| agentRuntime | [tests/services/seveneleven/tools/checkInventory.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/checkInventory.test.ts) | agentRuntime signal |
| agentRuntime | [tests/services/seveneleven/tools/getCatalogSnapshot.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/getCatalogSnapshot.test.ts) | agentRuntime signal |
| entrypoints | [src/cli.ts](../../../../sources/hmmhmmhm__daiso-mcp/src/cli.ts) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/hmmhmmhm__daiso-mcp/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/hmmhmmhm__daiso-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/hmmhmmhm__daiso-mcp/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/cli.ts](../../../../sources/hmmhmmhm__daiso-mcp/src/cli.ts)<br>[src/index.ts](../../../../sources/hmmhmmhm__daiso-mcp/src/index.ts) |
| agentRuntime | 74 | [AGENTS.md](../../../../sources/hmmhmmhm__daiso-mcp/AGENTS.md)<br>[tests/services/seveneleven/tools/checkInventory.storeFiltering.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/checkInventory.storeFiltering.test.ts)<br>[tests/services/seveneleven/tools/checkInventory.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/checkInventory.test.ts)<br>[tests/services/seveneleven/tools/getCatalogSnapshot.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/getCatalogSnapshot.test.ts)<br>[tests/services/seveneleven/tools/getSearchPopwords.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/getSearchPopwords.test.ts)<br>[tests/services/seveneleven/tools/searchProducts.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/searchProducts.test.ts)<br>[tests/services/seveneleven/tools/searchStores.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/searchStores.test.ts)<br>[tests/services/oliveyoung/tools/checkInventory.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/oliveyoung/tools/checkInventory.test.ts) |
| mcp | 10 | [.mcp.json](../../../../sources/hmmhmmhm__daiso-mcp/.mcp.json)<br>[tests/scripts/mcp-smoke.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/scripts/mcp-smoke.test.ts)<br>[tests/app/app-mcp-client.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/app/app-mcp-client.test.ts)<br>[scripts/ops/mcp-smoke.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/ops/mcp-smoke.ts)<br>[scripts/ghidra/check-cli-ghidra-mcp.sh](../../../../sources/hmmhmmhm__daiso-mcp/scripts/ghidra/check-cli-ghidra-mcp.sh)<br>[scripts/ghidra/check-ghidra-mcp.sh](../../../../sources/hmmhmmhm__daiso-mcp/scripts/ghidra/check-ghidra-mcp.sh)<br>[scripts/ghidra/cli_mcp_ghidra.py](../../../../sources/hmmhmmhm__daiso-mcp/scripts/ghidra/cli_mcp_ghidra.py)<br>[docs/oliveyoung-playwright-mcp-onboarding.md](../../../../sources/hmmhmmhm__daiso-mcp/docs/oliveyoung-playwright-mcp-onboarding.md) |
| retrieval | 29 | [tests/services/seveneleven/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/index.test.ts)<br>[tests/services/places/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/places/index.test.ts)<br>[tests/services/opinet/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/opinet/index.test.ts)<br>[tests/services/oliveyoung/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/oliveyoung/index.test.ts)<br>[tests/services/megabox/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/megabox/index.test.ts)<br>[tests/services/lottemart/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/lottemart/index.test.ts)<br>[tests/services/lottecinema/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/lottecinema/index.test.ts)<br>[tests/services/gs25/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/gs25/index.test.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 146 | [tests/utils/cache.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/cache.test.ts)<br>[tests/utils/fetch.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/fetch.test.ts)<br>[tests/utils/http.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/http.test.ts)<br>[tests/utils/zyte.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/zyte.test.ts)<br>[tests/services/seveneleven/client.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/client.test.ts)<br>[tests/services/seveneleven/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/index.test.ts)<br>[tests/services/seveneleven/productKeyword.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/productKeyword.test.ts)<br>[tests/services/seveneleven/tools/checkInventory.storeFiltering.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/tools/checkInventory.storeFiltering.test.ts) |
| security | 5 | [SECURITY.md](../../../../sources/hmmhmmhm__daiso-mcp/SECURITY.md)<br>[scripts/gs25-ui-guard-flow.sh](../../../../sources/hmmhmmhm__daiso-mcp/scripts/gs25-ui-guard-flow.sh)<br>[scripts/frida/gs25-frida-only-native-connect-audit.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/frida/gs25-frida-only-native-connect-audit.ts)<br>[scripts/frida/gs25-frida-only-pinning-audit.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/frida/gs25-frida-only-pinning-audit.ts)<br>[scripts/frida/gs25-frida-only-pinning-deep-audit.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/frida/gs25-frida-only-pinning-deep-audit.ts) |
| ci | 9 | [.github/workflows/ci.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/codeql.yml)<br>[.github/workflows/coverage.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/coverage.yml)<br>[.github/workflows/deploy.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/deploy.yml)<br>[.github/workflows/external-smoke.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/external-smoke.yml)<br>[.github/workflows/health-checks.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/health-checks.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/npm-publish.yml)<br>[.github/workflows/sync-worker-secrets.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/sync-worker-secrets.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/hmmhmmhm__daiso-mcp/AGENTS.md) |
| docs | 52 | [README.md](../../../../sources/hmmhmmhm__daiso-mcp/README.md)<br>[scripts/README.md](../../../../sources/hmmhmmhm__daiso-mcp/scripts/README.md)<br>[scripts/research/README.md](../../../../sources/hmmhmmhm__daiso-mcp/scripts/research/README.md)<br>[scripts/ops/README.md](../../../../sources/hmmhmmhm__daiso-mcp/scripts/ops/README.md)<br>[docs/ai-instruction.md](../../../../sources/hmmhmmhm__daiso-mcp/docs/ai-instruction.md)<br>[docs/cgv-network-analysis-result.md](../../../../sources/hmmhmmhm__daiso-mcp/docs/cgv-network-analysis-result.md)<br>[docs/cu-app-request-capture-guide.md](../../../../sources/hmmhmmhm__daiso-mcp/docs/cu-app-request-capture-guide.md)<br>[docs/cu-app-scraping-replay-guide.md](../../../../sources/hmmhmmhm__daiso-mcp/docs/cu-app-scraping-replay-guide.md) |
| config | 2 | [package.json](../../../../sources/hmmhmmhm__daiso-mcp/package.json)<br>[tsconfig.json](../../../../sources/hmmhmmhm__daiso-mcp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 146 | [tests/utils/cache.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/cache.test.ts)<br>[tests/utils/fetch.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/fetch.test.ts)<br>[tests/utils/http.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/http.test.ts)<br>[tests/utils/zyte.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/utils/zyte.test.ts)<br>[tests/services/seveneleven/client.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/client.test.ts)<br>[tests/services/seveneleven/index.test.ts](../../../../sources/hmmhmmhm__daiso-mcp/tests/services/seveneleven/index.test.ts) |
| CI workflow | 9 | [.github/workflows/ci.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/codeql.yml)<br>[.github/workflows/coverage.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/coverage.yml)<br>[.github/workflows/deploy.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/deploy.yml)<br>[.github/workflows/external-smoke.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/external-smoke.yml)<br>[.github/workflows/health-checks.yml](../../../../sources/hmmhmmhm__daiso-mcp/.github/workflows/health-checks.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 5 | [SECURITY.md](../../../../sources/hmmhmmhm__daiso-mcp/SECURITY.md)<br>[scripts/gs25-ui-guard-flow.sh](../../../../sources/hmmhmmhm__daiso-mcp/scripts/gs25-ui-guard-flow.sh)<br>[scripts/frida/gs25-frida-only-native-connect-audit.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/frida/gs25-frida-only-native-connect-audit.ts)<br>[scripts/frida/gs25-frida-only-pinning-audit.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/frida/gs25-frida-only-pinning-audit.ts)<br>[scripts/frida/gs25-frida-only-pinning-deep-audit.ts](../../../../sources/hmmhmmhm__daiso-mcp/scripts/frida/gs25-frida-only-pinning-deep-audit.ts) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/hmmhmmhm__daiso-mcp/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `tests/scripts/mcp-smoke.test.ts`, `tests/app/app-mcp-client.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/cli.ts`, `src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tests/services/seveneleven/tools/checkInventory.storeFiltering.test.ts`, `tests/services/seveneleven/tools/checkInventory.test.ts`.
4. retrieval/memory/indexing 확인: `tests/services/seveneleven/index.test.ts`, `tests/services/places/index.test.ts`, `tests/services/opinet/index.test.ts`.
5. test/eval 파일로 동작 검증: `tests/utils/cache.test.ts`, `tests/utils/fetch.test.ts`, `tests/utils/http.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 한국 로컬 리테일과 영화관 조회를 MCP, CLI, Codex Skill로 연결합니다.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, modelcontextprotocol이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
