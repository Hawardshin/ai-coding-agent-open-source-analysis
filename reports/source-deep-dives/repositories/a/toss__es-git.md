# toss/es-git 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

A modern Git library built for Node.js with blazing-fast installation and rock-solid stability, powered by N-API.

## 요약

- 조사 단위: `sources/toss__es-git` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,070 files, 258 directories, depth score 98, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/index.rs이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toss/es-git |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Rust |
| Stars | 319 |
| Forks | 12 |
| License | MIT |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toss__es-git](../../../../sources/toss__es-git) |
| 기존 보고서 | [reports/korea-trending/repositories/toss__es-git.md](../../../korea-trending/repositories/toss__es-git.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1070 / 258 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .cargo, .github, .scripts, .yarn, benchmarks, docs, src, tests, transforms |
| 상위 확장자 | .md: 743, (none): 151, .ts: 57, .rs: 40, .sample: 40, .json: 10, .png: 6, .toml: 5, .js: 3, .yml: 3, .lock: 2, .mts: 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 116 |
| docs | documentation surface | 77 |
| src | source boundary | 3 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| transforms | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | napi build --platform --release --no-const-enum --pipe="yarn transform:dts" |
| build | package.json | build:debug | DEBUG="napi:*" napi build --platform --no-const-enum --pipe="yarn transform:dts" |
| utility | package.json | transform:dts | jscodeshift -t transforms/dts.mjs index.d.ts |
| quality | package.json | check | biome check |
| quality | package.json | check:fix | biome check --write --unsafe |


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
| entrypoints | [src/index.rs](../../../../sources/toss__es-git/src/index.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/toss__es-git/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/toss__es-git/Cargo.toml) | config signal |
| config | [package.json](../../../../sources/toss__es-git/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/toss__es-git/tsconfig.json) | config signal |
| docs | [README-ko_kr.md](../../../../sources/toss__es-git/README-ko_kr.md) | docs signal |
| docs | [README.md](../../../../sources/toss__es-git/README.md) | docs signal |
| docs | [docs/.gitignore](../../../../sources/toss__es-git/docs/.gitignore) | docs signal |
| docs | [docs/getting-started.md](../../../../sources/toss__es-git/docs/getting-started.md) | docs signal |
| eval | [tests/annotated-commit.spec.ts](../../../../sources/toss__es-git/tests/annotated-commit.spec.ts) | eval signal |
| eval | [tests/apply.spec.ts](../../../../sources/toss__es-git/tests/apply.spec.ts) | eval signal |
| eval | [tests/attr.spec.ts](../../../../sources/toss__es-git/tests/attr.spec.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/index.rs](../../../../sources/toss__es-git/src/index.rs) |
| agentRuntime | 40 | [tests/fixtures/tag/_git/hooks/applypatch-msg.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/applypatch-msg.sample)<br>[tests/fixtures/tag/_git/hooks/commit-msg.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/commit-msg.sample)<br>[tests/fixtures/tag/_git/hooks/fsmonitor-watchman.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/fsmonitor-watchman.sample)<br>[tests/fixtures/tag/_git/hooks/post-update.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/post-update.sample)<br>[tests/fixtures/tag/_git/hooks/pre-applypatch.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/pre-applypatch.sample)<br>[tests/fixtures/tag/_git/hooks/pre-commit.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/pre-commit.sample)<br>[tests/fixtures/tag/_git/hooks/pre-merge-commit.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/pre-merge-commit.sample)<br>[tests/fixtures/tag/_git/hooks/pre-push.sample](../../../../sources/toss__es-git/tests/fixtures/tag/_git/hooks/pre-push.sample) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 46 | [index.d.ts](../../../../sources/toss__es-git/index.d.ts)<br>[index.js](../../../../sources/toss__es-git/index.js)<br>[tests/index.spec.ts](../../../../sources/toss__es-git/tests/index.spec.ts)<br>[src/index.rs](../../../../sources/toss__es-git/src/index.rs)<br>[docs/index.md](../../../../sources/toss__es-git/docs/index.md)<br>[docs/reference/Stash/Methods/index.md](../../../../sources/toss__es-git/docs/reference/Stash/Methods/index.md)<br>[docs/reference/Repository/Methods/index.md](../../../../sources/toss__es-git/docs/reference/Repository/Methods/index.md)<br>[docs/reference/Index/Methods/addAll.md](../../../../sources/toss__es-git/docs/reference/Index/Methods/addAll.md) |
| spec | 34 | [tests/annotated-commit.spec.ts](../../../../sources/toss__es-git/tests/annotated-commit.spec.ts)<br>[tests/apply.spec.ts](../../../../sources/toss__es-git/tests/apply.spec.ts)<br>[tests/attr.spec.ts](../../../../sources/toss__es-git/tests/attr.spec.ts)<br>[tests/blame.spec.ts](../../../../sources/toss__es-git/tests/blame.spec.ts)<br>[tests/blob.spec.ts](../../../../sources/toss__es-git/tests/blob.spec.ts)<br>[tests/branch.spec.ts](../../../../sources/toss__es-git/tests/branch.spec.ts)<br>[tests/checkout.spec.ts](../../../../sources/toss__es-git/tests/checkout.spec.ts)<br>[tests/cherrypick.spec.ts](../../../../sources/toss__es-git/tests/cherrypick.spec.ts) |
| eval | 228 | [tests/annotated-commit.spec.ts](../../../../sources/toss__es-git/tests/annotated-commit.spec.ts)<br>[tests/apply.spec.ts](../../../../sources/toss__es-git/tests/apply.spec.ts)<br>[tests/attr.spec.ts](../../../../sources/toss__es-git/tests/attr.spec.ts)<br>[tests/blame.spec.ts](../../../../sources/toss__es-git/tests/blame.spec.ts)<br>[tests/blob.spec.ts](../../../../sources/toss__es-git/tests/blob.spec.ts)<br>[tests/branch.spec.ts](../../../../sources/toss__es-git/tests/branch.spec.ts)<br>[tests/checkout.spec.ts](../../../../sources/toss__es-git/tests/checkout.spec.ts)<br>[tests/cherrypick.spec.ts](../../../../sources/toss__es-git/tests/cherrypick.spec.ts) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/toss__es-git/.github/workflows/ci.yml)<br>[.github/workflows/docs.yaml](../../../../sources/toss__es-git/.github/workflows/docs.yaml)<br>[.github/workflows/release.yml](../../../../sources/toss__es-git/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 769 | [README-ko_kr.md](../../../../sources/toss__es-git/README-ko_kr.md)<br>[README.md](../../../../sources/toss__es-git/README.md)<br>[docs/.gitignore](../../../../sources/toss__es-git/docs/.gitignore)<br>[docs/getting-started.md](../../../../sources/toss__es-git/docs/getting-started.md)<br>[docs/index.md](../../../../sources/toss__es-git/docs/index.md)<br>[docs/package.json](../../../../sources/toss__es-git/docs/package.json)<br>[docs/performance.md](../../../../sources/toss__es-git/docs/performance.md)<br>[docs/README.md](../../../../sources/toss__es-git/docs/README.md) |
| config | 9 | [Cargo.lock](../../../../sources/toss__es-git/Cargo.lock)<br>[Cargo.toml](../../../../sources/toss__es-git/Cargo.toml)<br>[package.json](../../../../sources/toss__es-git/package.json)<br>[tsconfig.json](../../../../sources/toss__es-git/tsconfig.json)<br>[docs/package.json](../../../../sources/toss__es-git/docs/package.json)<br>[docs/tsconfig.json](../../../../sources/toss__es-git/docs/tsconfig.json)<br>[benchmarks/package.json](../../../../sources/toss__es-git/benchmarks/package.json)<br>[benchmarks/tsconfig.json](../../../../sources/toss__es-git/benchmarks/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 228 | [tests/annotated-commit.spec.ts](../../../../sources/toss__es-git/tests/annotated-commit.spec.ts)<br>[tests/apply.spec.ts](../../../../sources/toss__es-git/tests/apply.spec.ts)<br>[tests/attr.spec.ts](../../../../sources/toss__es-git/tests/attr.spec.ts)<br>[tests/blame.spec.ts](../../../../sources/toss__es-git/tests/blame.spec.ts)<br>[tests/blob.spec.ts](../../../../sources/toss__es-git/tests/blob.spec.ts)<br>[tests/branch.spec.ts](../../../../sources/toss__es-git/tests/branch.spec.ts) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/toss__es-git/.github/workflows/ci.yml)<br>[.github/workflows/docs.yaml](../../../../sources/toss__es-git/.github/workflows/docs.yaml)<br>[.github/workflows/release.yml](../../../../sources/toss__es-git/.github/workflows/release.yml) |
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

1. 핵심 참조에서 시작: `src/index.rs`, `Cargo.lock`, `Cargo.toml`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.rs`.
3. agent/tool runtime 매핑: `tests/fixtures/tag/_git/hooks/applypatch-msg.sample`, `tests/fixtures/tag/_git/hooks/commit-msg.sample`, `tests/fixtures/tag/_git/hooks/fsmonitor-watchman.sample`.
4. retrieval/memory/indexing 확인: `index.d.ts`, `index.js`, `tests/index.spec.ts`.
5. test/eval 파일로 동작 검증: `tests/annotated-commit.spec.ts`, `tests/apply.spec.ts`, `tests/attr.spec.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 A modern Git library built for Node.js with blazing fast installation and rock solid stability, powered by N API.. 핵심 구조 신호는 Rust, package.json, Cargo.toml, README.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
