# daangn/urlpack 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Pure JavaScript toolkit for data URLs (MessagePack, Base58 and Base62)

## 요약

- 조사 단위: `sources/daangn__urlpack` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 102 files, 28 directories, depth score 84, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/qrjson/src/index.ts, packages/msgpack/src/index.ts, packages/json/src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | daangn/urlpack |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 61 |
| Forks | 4 |
| License | MIT |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/daangn__urlpack](../../../../sources/daangn__urlpack) |
| 기존 보고서 | [reports/korea-trending/repositories/daangn__urlpack.md](../../../korea-trending/repositories/daangn__urlpack.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 102 / 28 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .changeset, .github, .yarn, benchmarks, packages |
| 상위 확장자 | .ts: 36, (none): 19, .json: 17, .md: 16, .js: 8, .yml: 3, .cjs: 1, .lock: 1, .res: 1 |
| 소스 패턴 | monorepo/workspace, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/json | packages workspace | 7 |
| packages/msgpack | packages workspace | 7 |
| packages/base10 | packages workspace | 6 |
| packages/base58 | packages workspace | 6 |
| packages/base62 | packages workspace | 6 |
| packages/qrjson | packages workspace | 6 |
| packages/base-codec | packages workspace | 5 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| packages | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | typecheck | tsc --noEmit |
| test | package.json | test | node --test |
| test | package.json | test:watch | node --test --watch |


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
| entrypoints | [packages/qrjson/src/index.ts](../../../../sources/daangn__urlpack/packages/qrjson/src/index.ts) | entrypoints signal |
| entrypoints | [packages/msgpack/src/index.ts](../../../../sources/daangn__urlpack/packages/msgpack/src/index.ts) | entrypoints signal |
| entrypoints | [packages/json/src/index.ts](../../../../sources/daangn__urlpack/packages/json/src/index.ts) | entrypoints signal |
| entrypoints | [packages/base62/src/index.ts](../../../../sources/daangn__urlpack/packages/base62/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__urlpack/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__urlpack/tsconfig.json) | config signal |
| config | [packages/qrjson/package.json](../../../../sources/daangn__urlpack/packages/qrjson/package.json) | config signal |
| config | [packages/qrjson/tsconfig.json](../../../../sources/daangn__urlpack/packages/qrjson/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/daangn__urlpack/README.md) | docs signal |
| docs | [packages/qrjson/README.md](../../../../sources/daangn__urlpack/packages/qrjson/README.md) | docs signal |
| docs | [packages/msgpack/README.md](../../../../sources/daangn__urlpack/packages/msgpack/README.md) | docs signal |
| docs | [packages/json/README.md](../../../../sources/daangn__urlpack/packages/json/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [packages/qrjson/src/index.ts](../../../../sources/daangn__urlpack/packages/qrjson/src/index.ts)<br>[packages/msgpack/src/index.ts](../../../../sources/daangn__urlpack/packages/msgpack/src/index.ts)<br>[packages/json/src/index.ts](../../../../sources/daangn__urlpack/packages/json/src/index.ts)<br>[packages/base62/src/index.ts](../../../../sources/daangn__urlpack/packages/base62/src/index.ts)<br>[packages/base58/src/index.ts](../../../../sources/daangn__urlpack/packages/base58/src/index.ts)<br>[packages/base10/src/index.ts](../../../../sources/daangn__urlpack/packages/base10/src/index.ts)<br>[packages/base-codec/src/index.ts](../../../../sources/daangn__urlpack/packages/base-codec/src/index.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 7 | [packages/qrjson/src/index.ts](../../../../sources/daangn__urlpack/packages/qrjson/src/index.ts)<br>[packages/msgpack/src/index.ts](../../../../sources/daangn__urlpack/packages/msgpack/src/index.ts)<br>[packages/json/src/index.ts](../../../../sources/daangn__urlpack/packages/json/src/index.ts)<br>[packages/base62/src/index.ts](../../../../sources/daangn__urlpack/packages/base62/src/index.ts)<br>[packages/base58/src/index.ts](../../../../sources/daangn__urlpack/packages/base58/src/index.ts)<br>[packages/base10/src/index.ts](../../../../sources/daangn__urlpack/packages/base10/src/index.ts)<br>[packages/base-codec/src/index.ts](../../../../sources/daangn__urlpack/packages/base-codec/src/index.ts) |
| spec | 1 | [packages/json/tests/codec.spec.ts](../../../../sources/daangn__urlpack/packages/json/tests/codec.spec.ts) |
| eval | 7 | [packages/qrjson/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/qrjson/tests/codec.test.ts)<br>[packages/msgpack/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/msgpack/tests/codec.test.ts)<br>[packages/msgpack/tests/decode-complex.test.ts](../../../../sources/daangn__urlpack/packages/msgpack/tests/decode-complex.test.ts)<br>[packages/json/tests/codec.spec.ts](../../../../sources/daangn__urlpack/packages/json/tests/codec.spec.ts)<br>[packages/base62/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/base62/tests/codec.test.ts)<br>[packages/base58/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/base58/tests/codec.test.ts)<br>[packages/base10/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/base10/tests/codec.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/daangn__urlpack/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/daangn__urlpack/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 9 | [README.md](../../../../sources/daangn__urlpack/README.md)<br>[packages/qrjson/README.md](../../../../sources/daangn__urlpack/packages/qrjson/README.md)<br>[packages/msgpack/README.md](../../../../sources/daangn__urlpack/packages/msgpack/README.md)<br>[packages/json/README.md](../../../../sources/daangn__urlpack/packages/json/README.md)<br>[packages/base62/README.md](../../../../sources/daangn__urlpack/packages/base62/README.md)<br>[packages/base58/README.md](../../../../sources/daangn__urlpack/packages/base58/README.md)<br>[packages/base10/README.md](../../../../sources/daangn__urlpack/packages/base10/README.md)<br>[packages/base-codec/README.md](../../../../sources/daangn__urlpack/packages/base-codec/README.md) |
| config | 16 | [package.json](../../../../sources/daangn__urlpack/package.json)<br>[tsconfig.json](../../../../sources/daangn__urlpack/tsconfig.json)<br>[packages/qrjson/package.json](../../../../sources/daangn__urlpack/packages/qrjson/package.json)<br>[packages/qrjson/tsconfig.json](../../../../sources/daangn__urlpack/packages/qrjson/tsconfig.json)<br>[packages/msgpack/package.json](../../../../sources/daangn__urlpack/packages/msgpack/package.json)<br>[packages/msgpack/tsconfig.json](../../../../sources/daangn__urlpack/packages/msgpack/tsconfig.json)<br>[packages/json/package.json](../../../../sources/daangn__urlpack/packages/json/package.json)<br>[packages/json/tsconfig.json](../../../../sources/daangn__urlpack/packages/json/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 7 | [packages/qrjson/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/qrjson/tests/codec.test.ts)<br>[packages/msgpack/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/msgpack/tests/codec.test.ts)<br>[packages/msgpack/tests/decode-complex.test.ts](../../../../sources/daangn__urlpack/packages/msgpack/tests/decode-complex.test.ts)<br>[packages/json/tests/codec.spec.ts](../../../../sources/daangn__urlpack/packages/json/tests/codec.spec.ts)<br>[packages/base62/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/base62/tests/codec.test.ts)<br>[packages/base58/tests/codec.test.ts](../../../../sources/daangn__urlpack/packages/base58/tests/codec.test.ts) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/daangn__urlpack/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/daangn__urlpack/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/qrjson/src/index.ts`, `packages/msgpack/src/index.ts`, `packages/json/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `packages/qrjson/src/index.ts`, `packages/msgpack/src/index.ts`, `packages/json/src/index.ts`.
3. retrieval/memory/indexing 확인: `packages/qrjson/src/index.ts`, `packages/msgpack/src/index.ts`, `packages/json/src/index.ts`.
4. test/eval 파일로 동작 검증: `packages/qrjson/tests/codec.test.ts`, `packages/msgpack/tests/codec.test.ts`, `packages/msgpack/tests/decode-complex.test.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Pure JavaScript toolkit for data URLs MessagePack, Base58 and Base62. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
