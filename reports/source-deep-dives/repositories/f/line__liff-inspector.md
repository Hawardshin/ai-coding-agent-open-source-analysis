# line/liff-inspector 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The universal DevTools for LIFF (WebView) browser

## 요약

- 조사 단위: `sources/line__liff-inspector` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 93 files, 23 directories, depth score 81, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/liff-inspector/src/index.test.ts, packages/liff-inspector/src/index.ts, packages/headless-inspector-core/src/index.test.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | line/liff-inspector |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 75 |
| Forks | 5 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/line__liff-inspector](../../../../sources/line__liff-inspector) |
| 기존 보고서 | [reports/korea-trending/repositories/line__liff-inspector.md](../../../korea-trending/repositories/line__liff-inspector.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 93 / 23 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, packages, scripts |
| 상위 확장자 | .ts: 57, .json: 13, .md: 9, (none): 6, .js: 4, .yml: 4 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, retrieval/vector path, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/headless-inspector-cdp | packages workspace | 17 |
| packages/headless-inspector-core | packages workspace | 17 |
| packages/liff-inspector | packages workspace | 9 |
| packages/headless-inspector | packages workspace | 8 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | npm run clean -ws && npm run build -ws |
| test | package.json | start:hi | npm run build && npm run serve -w @line/headless-inspector |
| test | package.json | start:hi:https | npm run build && npm run serve -w @line/headless-inspector -- --https |
| test | package.json | start:li | npm run build && npm run serve -w @line/liff-inspector |
| test | package.json | start:li:https | npm run build && npm run serve -w @line/liff-inspector -- --key=../../localhost-key.pem --cert=../../localhost.pem |
| quality | package.json | lint | npm run lint -ws |
| test | package.json | test | jest |
| quality | package.json | format | prettier --check . |
| quality | package.json | format:fix | prettier --write . |
| test | package.json | test:watch | npm run test -- --watch |
| test | package.json | code-check | npm run lint && npm run build && npm run test |
| utility | package.json | versionup | echo 'Error: Please use CI for versioning. Run the GitHub Actions workflow instead.' && exit 1 |
| build | package.json | release | echo 'Error: Please use CI for releases. Run the GitHub Actions workflow instead.' && exit 1 |
| utility | package.json | ci:versionup:patch | npm version patch --no-git-tag-version && npm run ci:update-package-versions && npm run ci:update-internal-deps |
| utility | package.json | ci:versionup:minor | npm version minor --no-git-tag-version && npm run ci:update-package-versions && npm run ci:update-internal-deps |
| utility | package.json | ci:versionup:major | npm version major --no-git-tag-version && npm run ci:update-package-versions && npm run ci:update-internal-deps |
| utility | package.json | ci:update-package-versions | npm --workspaces --include-workspace-root=false exec -- npm pkg set version="$(npm run -s print-version)" |
| quality | package.json | ci:update-internal-deps | node --experimental-strip-types scripts/update-internal-deps.ts $(npm run -s print-version) |
| build | package.json | commit-version | git add . && git commit -m "chore(release): v$(npm run -s print-version)" |
| build | package.json | ci:release | npm publish -ws --access public |
| utility | package.json | print-version | node -p "require('./package.json').version" |


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
| entrypoints | [packages/liff-inspector/src/index.test.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.test.ts) | entrypoints signal |
| entrypoints | [packages/liff-inspector/src/index.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.ts) | entrypoints signal |
| entrypoints | [packages/headless-inspector-core/src/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.test.ts) | entrypoints signal |
| entrypoints | [packages/headless-inspector-core/src/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/line__liff-inspector/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/line__liff-inspector/tsconfig.json) | config signal |
| config | [packages/liff-inspector/package.json](../../../../sources/line__liff-inspector/packages/liff-inspector/package.json) | config signal |
| config | [packages/liff-inspector/tsconfig.json](../../../../sources/line__liff-inspector/packages/liff-inspector/tsconfig.json) | config signal |
| ci | [.github/workflows/code-check.yml](../../../../sources/line__liff-inspector/.github/workflows/code-check.yml) | ci support |
| ci | [.github/workflows/create-release-pr.yml](../../../../sources/line__liff-inspector/.github/workflows/create-release-pr.yml) | ci support |
| eval | [scripts/update-internal-deps.test.ts](../../../../sources/line__liff-inspector/scripts/update-internal-deps.test.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 9 | [packages/liff-inspector/src/index.test.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.test.ts)<br>[packages/liff-inspector/src/index.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.ts)<br>[packages/headless-inspector-core/src/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.test.ts)<br>[packages/headless-inspector-core/src/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.ts)<br>[packages/headless-inspector-cdp/src/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-cdp/src/index.test.ts)<br>[packages/headless-inspector-cdp/src/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-cdp/src/index.ts)<br>[packages/headless-inspector/src/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector/src/index.ts)<br>[packages/headless-inspector/src/server.ts](../../../../sources/line__liff-inspector/packages/headless-inspector/src/server.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 12 | [packages/liff-inspector/src/index.test.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.test.ts)<br>[packages/liff-inspector/src/index.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.ts)<br>[packages/headless-inspector-core/src/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.test.ts)<br>[packages/headless-inspector-core/src/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.ts)<br>[packages/headless-inspector-core/src/interceptors/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/index.ts)<br>[packages/headless-inspector-core/src/interceptors/network/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/network/index.ts)<br>[packages/headless-inspector-core/src/interceptors/console/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/console/index.test.ts)<br>[packages/headless-inspector-core/src/interceptors/console/index.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/console/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 18 | [scripts/update-internal-deps.test.ts](../../../../sources/line__liff-inspector/scripts/update-internal-deps.test.ts)<br>[packages/liff-inspector/src/index.test.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.test.ts)<br>[packages/headless-inspector-core/src/evemitter.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/evemitter.test.ts)<br>[packages/headless-inspector-core/src/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.test.ts)<br>[packages/headless-inspector-core/src/interceptors/network/fetch.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/network/fetch.test.ts)<br>[packages/headless-inspector-core/src/interceptors/network/xhr.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/network/xhr.test.ts)<br>[packages/headless-inspector-core/src/interceptors/console/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/console/index.test.ts)<br>[packages/headless-inspector-cdp/src/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-cdp/src/index.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/code-check.yml](../../../../sources/line__liff-inspector/.github/workflows/code-check.yml)<br>[.github/workflows/create-release-pr.yml](../../../../sources/line__liff-inspector/.github/workflows/create-release-pr.yml)<br>[.github/workflows/release.yml](../../../../sources/line__liff-inspector/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 7 | [README_ja.md](../../../../sources/line__liff-inspector/README_ja.md)<br>[README.md](../../../../sources/line__liff-inspector/README.md)<br>[packages/liff-inspector/README_ja.md](../../../../sources/line__liff-inspector/packages/liff-inspector/README_ja.md)<br>[packages/liff-inspector/README.md](../../../../sources/line__liff-inspector/packages/liff-inspector/README.md)<br>[packages/headless-inspector-core/README.md](../../../../sources/line__liff-inspector/packages/headless-inspector-core/README.md)<br>[packages/headless-inspector-cdp/README.md](../../../../sources/line__liff-inspector/packages/headless-inspector-cdp/README.md)<br>[packages/headless-inspector/README.md](../../../../sources/line__liff-inspector/packages/headless-inspector/README.md) |
| config | 10 | [package.json](../../../../sources/line__liff-inspector/package.json)<br>[tsconfig.json](../../../../sources/line__liff-inspector/tsconfig.json)<br>[packages/liff-inspector/package.json](../../../../sources/line__liff-inspector/packages/liff-inspector/package.json)<br>[packages/liff-inspector/tsconfig.json](../../../../sources/line__liff-inspector/packages/liff-inspector/tsconfig.json)<br>[packages/headless-inspector-core/package.json](../../../../sources/line__liff-inspector/packages/headless-inspector-core/package.json)<br>[packages/headless-inspector-core/tsconfig.json](../../../../sources/line__liff-inspector/packages/headless-inspector-core/tsconfig.json)<br>[packages/headless-inspector-cdp/package.json](../../../../sources/line__liff-inspector/packages/headless-inspector-cdp/package.json)<br>[packages/headless-inspector-cdp/tsconfig.json](../../../../sources/line__liff-inspector/packages/headless-inspector-cdp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 18 | [scripts/update-internal-deps.test.ts](../../../../sources/line__liff-inspector/scripts/update-internal-deps.test.ts)<br>[packages/liff-inspector/src/index.test.ts](../../../../sources/line__liff-inspector/packages/liff-inspector/src/index.test.ts)<br>[packages/headless-inspector-core/src/evemitter.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/evemitter.test.ts)<br>[packages/headless-inspector-core/src/index.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/index.test.ts)<br>[packages/headless-inspector-core/src/interceptors/network/fetch.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/network/fetch.test.ts)<br>[packages/headless-inspector-core/src/interceptors/network/xhr.test.ts](../../../../sources/line__liff-inspector/packages/headless-inspector-core/src/interceptors/network/xhr.test.ts) |
| CI workflow | 3 | [.github/workflows/code-check.yml](../../../../sources/line__liff-inspector/.github/workflows/code-check.yml)<br>[.github/workflows/create-release-pr.yml](../../../../sources/line__liff-inspector/.github/workflows/create-release-pr.yml)<br>[.github/workflows/release.yml](../../../../sources/line__liff-inspector/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/liff-inspector/src/index.test.ts`, `packages/liff-inspector/src/index.ts`, `packages/headless-inspector-core/src/index.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/liff-inspector/src/index.test.ts`, `packages/liff-inspector/src/index.ts`, `packages/headless-inspector-core/src/index.test.ts`.
3. retrieval/memory/indexing 확인: `packages/liff-inspector/src/index.test.ts`, `packages/liff-inspector/src/index.ts`, `packages/headless-inspector-core/src/index.test.ts`.
4. test/eval 파일로 동작 검증: `scripts/update-internal-deps.test.ts`, `packages/liff-inspector/src/index.test.ts`, `packages/headless-inspector-core/src/evemitter.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The universal DevTools for LIFF WebView browser. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
