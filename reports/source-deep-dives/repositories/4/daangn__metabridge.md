# daangn/metabridge 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

🔗 Defines the communication layer between mobile native(iOS/Android) and webview using JSON Schema and automatically generates SDK code. (TypeScript, Swift, Kotlin)

## 요약

- 조사 단위: `sources/daangn__metabridge` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,130 files, 36 directories, depth score 100, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=schema/src/index.ts, plugins/typescript-docs/template/src/App.tsx, plugins/typescript-docs/template/src/main.css이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | daangn/metabridge |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | TypeScript |
| Stars | 65 |
| Forks | 1 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/daangn__metabridge](../../../../sources/daangn__metabridge) |
| 기존 보고서 | [reports/korea-trending/repositories/daangn__metabridge.md](../../../korea-trending/repositories/daangn__metabridge.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1130 / 36 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .yarn, cli, plugins, schema |
| 상위 확장자 | .zip: 1047, .json: 28, .ts: 20, (none): 12, .tsx: 7, .js: 6, .cjs: 2, .md: 2, .yml: 2, .css: 1, .html: 1, .lock: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| cli | top-level component | 1 |
| plugins | top-level component | 1 |
| schema | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | yarn workspaces foreach -t --all run build |
| build | package.json | lerna:publish | yarn build && lerna publish |
| test | package.json | test | yarn workspaces foreach -t run test |
| utility | package.json | version | yarn install && git stage yarn.lock |


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
| entrypoints | [schema/src/index.ts](../../../../sources/daangn__metabridge/schema/src/index.ts) | entrypoints signal |
| entrypoints | [plugins/typescript-docs/template/src/App.tsx](../../../../sources/daangn__metabridge/plugins/typescript-docs/template/src/App.tsx) | entrypoints signal |
| entrypoints | [plugins/typescript-docs/template/src/main.css](../../../../sources/daangn__metabridge/plugins/typescript-docs/template/src/main.css) | entrypoints signal |
| entrypoints | [plugins/typescript-docs/template/src/main.tsx](../../../../sources/daangn__metabridge/plugins/typescript-docs/template/src/main.tsx) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__metabridge/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__metabridge/tsconfig.json) | config signal |
| config | [schema/package.json](../../../../sources/daangn__metabridge/schema/package.json) | config signal |
| config | [schema/tsconfig.json](../../../../sources/daangn__metabridge/schema/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/daangn__metabridge/README.md) | docs signal |
| docs | [schema/README.md](../../../../sources/daangn__metabridge/schema/README.md) | docs signal |
| eval | [plugins/typescript-docs/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/index.test.ts) | eval support |
| eval | [plugins/typescript-docs/test/injectDriver.js](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/injectDriver.js) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 13 | [schema/src/index.ts](../../../../sources/daangn__metabridge/schema/src/index.ts)<br>[plugins/typescript-docs/template/src/App.tsx](../../../../sources/daangn__metabridge/plugins/typescript-docs/template/src/App.tsx)<br>[plugins/typescript-docs/template/src/main.css](../../../../sources/daangn__metabridge/plugins/typescript-docs/template/src/main.css)<br>[plugins/typescript-docs/template/src/main.tsx](../../../../sources/daangn__metabridge/plugins/typescript-docs/template/src/main.tsx)<br>[plugins/typescript-docs/src/index.ts](../../../../sources/daangn__metabridge/plugins/typescript-docs/src/index.ts)<br>[plugins/typescript/src/index.ts](../../../../sources/daangn__metabridge/plugins/typescript/src/index.ts)<br>[plugins/swift/src/index.ts](../../../../sources/daangn__metabridge/plugins/swift/src/index.ts)<br>[plugins/kotlin/src/index.ts](../../../../sources/daangn__metabridge/plugins/kotlin/src/index.ts) |
| agentRuntime | 2 | [.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip](../../../../sources/daangn__metabridge/.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip)<br>[.yarn/cache/agent-base-npm-7.1.3-b2c16e72fb-3db6d8d465.zip](../../../../sources/daangn__metabridge/.yarn/cache/agent-base-npm-7.1.3-b2c16e72fb-3db6d8d465.zip) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 15 | [schema/src/index.ts](../../../../sources/daangn__metabridge/schema/src/index.ts)<br>[plugins/typescript-docs/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/index.test.ts)<br>[plugins/typescript-docs/template/index.html](../../../../sources/daangn__metabridge/plugins/typescript-docs/template/index.html)<br>[plugins/typescript-docs/src/index.ts](../../../../sources/daangn__metabridge/plugins/typescript-docs/src/index.ts)<br>[plugins/typescript/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/typescript/test/index.test.ts)<br>[plugins/typescript/src/index.ts](../../../../sources/daangn__metabridge/plugins/typescript/src/index.ts)<br>[plugins/swift/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/swift/test/index.test.ts)<br>[plugins/swift/src/index.ts](../../../../sources/daangn__metabridge/plugins/swift/src/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 12 | [plugins/typescript-docs/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/index.test.ts)<br>[plugins/typescript-docs/test/injectDriver.js](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/injectDriver.js)<br>[plugins/typescript-docs/test/schema.json](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/schema.json)<br>[plugins/typescript/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/typescript/test/index.test.ts)<br>[plugins/typescript/test/schema.json](../../../../sources/daangn__metabridge/plugins/typescript/test/schema.json)<br>[plugins/swift/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/swift/test/index.test.ts)<br>[plugins/swift/test/schema.json](../../../../sources/daangn__metabridge/plugins/swift/test/schema.json)<br>[plugins/kotlin/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/kotlin/test/index.test.ts) |
| security | 2 | [.yarn/cache/@octokit-auth-token-npm-2.5.0-a1c6ffb640-95d7928b6f.zip](../../../../sources/daangn__metabridge/.yarn/cache/@octokit-auth-token-npm-2.5.0-a1c6ffb640-95d7928b6f.zip)<br>[.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip](../../../../sources/daangn__metabridge/.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/daangn__metabridge/README.md)<br>[schema/README.md](../../../../sources/daangn__metabridge/schema/README.md) |
| config | 18 | [package.json](../../../../sources/daangn__metabridge/package.json)<br>[tsconfig.json](../../../../sources/daangn__metabridge/tsconfig.json)<br>[schema/package.json](../../../../sources/daangn__metabridge/schema/package.json)<br>[schema/tsconfig.json](../../../../sources/daangn__metabridge/schema/tsconfig.json)<br>[plugins/typescript-docs/package.json](../../../../sources/daangn__metabridge/plugins/typescript-docs/package.json)<br>[plugins/typescript-docs/tsconfig.json](../../../../sources/daangn__metabridge/plugins/typescript-docs/tsconfig.json)<br>[plugins/typescript/package.json](../../../../sources/daangn__metabridge/plugins/typescript/package.json)<br>[plugins/typescript/tsconfig.json](../../../../sources/daangn__metabridge/plugins/typescript/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 12 | [plugins/typescript-docs/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/index.test.ts)<br>[plugins/typescript-docs/test/injectDriver.js](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/injectDriver.js)<br>[plugins/typescript-docs/test/schema.json](../../../../sources/daangn__metabridge/plugins/typescript-docs/test/schema.json)<br>[plugins/typescript/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/typescript/test/index.test.ts)<br>[plugins/typescript/test/schema.json](../../../../sources/daangn__metabridge/plugins/typescript/test/schema.json)<br>[plugins/swift/test/index.test.ts](../../../../sources/daangn__metabridge/plugins/swift/test/index.test.ts) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [.yarn/cache/@octokit-auth-token-npm-2.5.0-a1c6ffb640-95d7928b6f.zip](../../../../sources/daangn__metabridge/.yarn/cache/@octokit-auth-token-npm-2.5.0-a1c6ffb640-95d7928b6f.zip)<br>[.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip](../../../../sources/daangn__metabridge/.yarn/cache/oauth-sign-npm-0.9.0-7aa9422221-1809a366d2.zip) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `schema/src/index.ts`, `plugins/typescript-docs/template/src/App.tsx`, `plugins/typescript-docs/template/src/main.css`.
2. entrypoint를 따라 실행 흐름 확인: `schema/src/index.ts`, `plugins/typescript-docs/template/src/App.tsx`, `plugins/typescript-docs/template/src/main.css`.
3. agent/tool runtime 매핑: `.yarn/cache/agent-base-npm-6.0.2-428f325a93-21fb903e09.zip`, `.yarn/cache/agent-base-npm-7.1.3-b2c16e72fb-3db6d8d465.zip`.
4. retrieval/memory/indexing 확인: `schema/src/index.ts`, `plugins/typescript-docs/test/index.test.ts`, `plugins/typescript-docs/template/index.html`.
5. test/eval 파일로 동작 검증: `plugins/typescript-docs/test/index.test.ts`, `plugins/typescript-docs/test/injectDriver.js`, `plugins/typescript-docs/test/schema.json`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 🔗 Defines the communication layer between mobile native iOS/Android and webview using JSON Schema and automatically gen. 핵심 구조 신호는 TypeScript, package.json, README.md, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
