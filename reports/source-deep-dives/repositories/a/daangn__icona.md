# daangn/icona 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

icon integration platform (figma to github)

## 요약

- 조사 단위: `sources/daangn__icona` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,358 files, 34 directories, depth score 100, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/types/src/index.d.ts, packages/generator/src/index.ts, legacy/icona-cli/src/cli.ts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | daangn/icona |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 88 |
| Forks | 9 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/daangn__icona](../../../../sources/daangn__icona) |
| 기존 보고서 | [reports/korea-trending/repositories/daangn__icona.md](../../../korea-trending/repositories/daangn__icona.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1358 / 34 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .changeset, .github, .yarn, figma-plugin, images, legacy, packages, test |
| 상위 확장자 | .zip: 1241, .ts: 50, .json: 23, .md: 12, (none): 10, .tsx: 7, .png: 5, .yml: 3, .cjs: 2, .js: 2, .html: 1, .lock: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/generator | packages workspace | 5 |
| packages/types | packages workspace | 5 |
| .github | ci surface | 1 |
| figma-plugin | top-level component | 1 |
| images | top-level component | 1 |
| legacy | top-level component | 1 |
| packages | source boundary | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | ultra -r build |
| utility | package.json | clean | ultra -r clean |
| build | package.json | release | yarn changeset publish |
| utility | package.json | version | changeset version && yarn install --no-immutable |
| quality | package.json | lint | eslint . --ext .ts,.tsx,.js,.jsx |
| quality | package.json | lint:fix | eslint . --ext .ts,.tsx,.js,.jsx --fix |


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
| entrypoints | [packages/types/src/index.d.ts](../../../../sources/daangn__icona/packages/types/src/index.d.ts) | entrypoints signal |
| entrypoints | [packages/generator/src/index.ts](../../../../sources/daangn__icona/packages/generator/src/index.ts) | entrypoints signal |
| entrypoints | [legacy/icona-cli/src/cli.ts](../../../../sources/daangn__icona/legacy/icona-cli/src/cli.ts) | entrypoints signal |
| entrypoints | [legacy/icona-cli/src/index.ts](../../../../sources/daangn__icona/legacy/icona-cli/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__icona/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__icona/tsconfig.json) | config signal |
| config | [test/package.json](../../../../sources/daangn__icona/test/package.json) | config signal |
| config | [test/tsconfig.json](../../../../sources/daangn__icona/test/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/daangn__icona/README.md) | docs signal |
| docs | [test/README.md](../../../../sources/daangn__icona/test/README.md) | docs signal |
| docs | [packages/types/README.md](../../../../sources/daangn__icona/packages/types/README.md) | docs signal |
| docs | [packages/generator/README.md](../../../../sources/daangn__icona/packages/generator/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [packages/types/src/index.d.ts](../../../../sources/daangn__icona/packages/types/src/index.d.ts)<br>[packages/generator/src/index.ts](../../../../sources/daangn__icona/packages/generator/src/index.ts)<br>[legacy/icona-cli/src/cli.ts](../../../../sources/daangn__icona/legacy/icona-cli/src/cli.ts)<br>[legacy/icona-cli/src/index.ts](../../../../sources/daangn__icona/legacy/icona-cli/src/index.ts)<br>[legacy/figma-svg-extracter/src/index.ts](../../../../sources/daangn__icona/legacy/figma-svg-extracter/src/index.ts)<br>[legacy/figma-svg-extract-action/src/index.ts](../../../../sources/daangn__icona/legacy/figma-svg-extract-action/src/index.ts)<br>[figma-plugin/ui-src/main.tsx](../../../../sources/daangn__icona/figma-plugin/ui-src/main.tsx)<br>[figma-plugin/plugin-src/main.ts](../../../../sources/daangn__icona/figma-plugin/plugin-src/main.ts) |
| agentRuntime | 2 | [images/workflow-permissions.png](../../../../sources/daangn__icona/images/workflow-permissions.png)<br>[.yarn/cache/agent-base-npm-6.0.2-428f325a93-f52b6872cc.zip](../../../../sources/daangn__icona/.yarn/cache/agent-base-npm-6.0.2-428f325a93-f52b6872cc.zip) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 7 | [packages/types/src/index.d.ts](../../../../sources/daangn__icona/packages/types/src/index.d.ts)<br>[packages/generator/src/index.ts](../../../../sources/daangn__icona/packages/generator/src/index.ts)<br>[legacy/icona-cli/src/index.ts](../../../../sources/daangn__icona/legacy/icona-cli/src/index.ts)<br>[legacy/figma-svg-extracter/src/index.ts](../../../../sources/daangn__icona/legacy/figma-svg-extracter/src/index.ts)<br>[legacy/figma-svg-extract-action/src/index.ts](../../../../sources/daangn__icona/legacy/figma-svg-extract-action/src/index.ts)<br>[figma-plugin/ui-src/index.html](../../../../sources/daangn__icona/figma-plugin/ui-src/index.html)<br>[.yarn/cache/@changesets-get-dependents-graph-npm-1.3.5-054d68707f-d7abb1da21.zip](../../../../sources/daangn__icona/.yarn/cache/@changesets-get-dependents-graph-npm-1.3.5-054d68707f-d7abb1da21.zip) |
| spec | 0 | 명확하지 않음 |
| eval | 12 | [test/.gitignore](../../../../sources/daangn__icona/test/.gitignore)<br>[test/icona.ts](../../../../sources/daangn__icona/test/icona.ts)<br>[test/package.json](../../../../sources/daangn__icona/test/package.json)<br>[test/README.md](../../../../sources/daangn__icona/test/README.md)<br>[test/tsconfig.json](../../../../sources/daangn__icona/test/tsconfig.json)<br>[test/.icona/icons.json](../../../../sources/daangn__icona/test/.icona/icons.json)<br>[test/.icona/multicolor.json](../../../../sources/daangn__icona/test/.icona/multicolor.json)<br>[.yarn/cache/@jridgewell-trace-mapping-npm-0.3.18-cd96571385-0572669f85.zip](../../../../sources/daangn__icona/.yarn/cache/@jridgewell-trace-mapping-npm-0.3.18-cd96571385-0572669f85.zip) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/publish.yml](../../../../sources/daangn__icona/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 9 | [README.md](../../../../sources/daangn__icona/README.md)<br>[test/README.md](../../../../sources/daangn__icona/test/README.md)<br>[packages/types/README.md](../../../../sources/daangn__icona/packages/types/README.md)<br>[packages/generator/README.md](../../../../sources/daangn__icona/packages/generator/README.md)<br>[legacy/icona-cli/README.md](../../../../sources/daangn__icona/legacy/icona-cli/README.md)<br>[legacy/figma-svg-extracter/README.md](../../../../sources/daangn__icona/legacy/figma-svg-extracter/README.md)<br>[legacy/figma-svg-extract-action/README.md](../../../../sources/daangn__icona/legacy/figma-svg-extract-action/README.md)<br>[figma-plugin/README.md](../../../../sources/daangn__icona/figma-plugin/README.md) |
| config | 17 | [package.json](../../../../sources/daangn__icona/package.json)<br>[tsconfig.json](../../../../sources/daangn__icona/tsconfig.json)<br>[test/package.json](../../../../sources/daangn__icona/test/package.json)<br>[test/tsconfig.json](../../../../sources/daangn__icona/test/tsconfig.json)<br>[packages/types/package.json](../../../../sources/daangn__icona/packages/types/package.json)<br>[packages/types/tsconfig.json](../../../../sources/daangn__icona/packages/types/tsconfig.json)<br>[packages/generator/package.json](../../../../sources/daangn__icona/packages/generator/package.json)<br>[packages/generator/tsconfig.json](../../../../sources/daangn__icona/packages/generator/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 12 | [test/.gitignore](../../../../sources/daangn__icona/test/.gitignore)<br>[test/icona.ts](../../../../sources/daangn__icona/test/icona.ts)<br>[test/package.json](../../../../sources/daangn__icona/test/package.json)<br>[test/README.md](../../../../sources/daangn__icona/test/README.md)<br>[test/tsconfig.json](../../../../sources/daangn__icona/test/tsconfig.json)<br>[test/.icona/icons.json](../../../../sources/daangn__icona/test/.icona/icons.json) |
| CI workflow | 1 | [.github/workflows/publish.yml](../../../../sources/daangn__icona/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/types/src/index.d.ts`, `packages/generator/src/index.ts`, `legacy/icona-cli/src/cli.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/types/src/index.d.ts`, `packages/generator/src/index.ts`, `legacy/icona-cli/src/cli.ts`.
3. agent/tool runtime 매핑: `images/workflow-permissions.png`, `.yarn/cache/agent-base-npm-6.0.2-428f325a93-f52b6872cc.zip`.
4. retrieval/memory/indexing 확인: `packages/types/src/index.d.ts`, `packages/generator/src/index.ts`, `legacy/icona-cli/src/index.ts`.
5. test/eval 파일로 동작 검증: `test/.gitignore`, `test/icona.ts`, `test/package.json`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 icon integration platform figma to github. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, react, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
