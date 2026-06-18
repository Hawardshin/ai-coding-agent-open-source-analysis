# HelixDB/helix-db 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

HelixDB is an OLTP graph-vector database built in Rust.

## 요약

- 조사 단위: `sources/HelixDB__helix-db` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 121 files, 35 directories, depth score 92, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=sdks/typescript/src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | HelixDB/helix-db |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Rust |
| Stars | 5370 |
| Forks | 298 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/HelixDB__helix-db](../../../../sources/HelixDB__helix-db) |
| 기존 보고서 | [reports/global-trending/repositories/HelixDB__helix-db.md](../../../global-trending/repositories/HelixDB__helix-db.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 121 / 35 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, assets, helix-cli, metrics, sdks |
| 상위 확장자 | .rs: 49, .md: 11, .ts: 10, .yml: 9, .toml: 7, .py: 6, .json: 5, .lock: 5, (none): 5, .go: 4, .sh: 4, .png: 2 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| helix-cli | top-level component | 1 |
| metrics | top-level component | 1 |
| sdks | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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
| retrieval | [sdks/typescript/src/index.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/src/index.ts) | retrieval signal |
| entrypoints | [sdks/rust/example/src/main.rs](../../../../sources/HelixDB__helix-db/sdks/rust/example/src/main.rs) | entrypoints signal |
| entrypoints | [sdks/go/cmd/generate-parity-fixtures/main.go](../../../../sources/HelixDB__helix-db/sdks/go/cmd/generate-parity-fixtures/main.go) | entrypoints signal |
| entrypoints | [helix-cli/src/main.rs](../../../../sources/HelixDB__helix-db/helix-cli/src/main.rs) | entrypoints signal |
| docs | [README.md](../../../../sources/HelixDB__helix-db/README.md) | docs signal |
| docs | [sdks/typescript/README.md](../../../../sources/HelixDB__helix-db/sdks/typescript/README.md) | docs signal |
| docs | [sdks/tests/parity/README.md](../../../../sources/HelixDB__helix-db/sdks/tests/parity/README.md) | docs signal |
| docs | [sdks/rust/README.md](../../../../sources/HelixDB__helix-db/sdks/rust/README.md) | docs signal |
| eval | [sdks/typescript/test/basic.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/basic.test.ts) | eval signal |
| eval | [sdks/typescript/test/client.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/client.test.ts) | eval signal |
| eval | [sdks/typescript/test/types.test-d.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/types.test-d.ts) | eval signal |
| eval | [sdks/typescript/scripts/nested-dsl.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/scripts/nested-dsl.test.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [sdks/typescript/src/index.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/src/index.ts)<br>[sdks/rust/example/src/main.rs](../../../../sources/HelixDB__helix-db/sdks/rust/example/src/main.rs)<br>[sdks/go/cmd/generate-parity-fixtures/main.go](../../../../sources/HelixDB__helix-db/sdks/go/cmd/generate-parity-fixtures/main.go)<br>[helix-cli/src/main.rs](../../../../sources/HelixDB__helix-db/helix-cli/src/main.rs) |
| agentRuntime | 1 | [helix-cli/src/commands/skills.rs](../../../../sources/HelixDB__helix-db/helix-cli/src/commands/skills.rs) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [sdks/typescript/src/index.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/src/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 14 | [sdks/typescript/test/basic.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/basic.test.ts)<br>[sdks/typescript/test/client.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/client.test.ts)<br>[sdks/typescript/test/types.test-d.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/types.test-d.ts)<br>[sdks/typescript/scripts/nested-dsl.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/scripts/nested-dsl.test.ts)<br>[sdks/tests/register_metadata_tests.rs](../../../../sources/HelixDB__helix-db/sdks/tests/register_metadata_tests.rs)<br>[sdks/tests/parity/README.md](../../../../sources/HelixDB__helix-db/sdks/tests/parity/README.md)<br>[sdks/python/tests/test_client.py](../../../../sources/HelixDB__helix-db/sdks/python/tests/test_client.py)<br>[sdks/python/tests/test_dsl.py](../../../../sources/HelixDB__helix-db/sdks/python/tests/test_dsl.py) |
| security | 1 | [helix-cli/src/commands/auth.rs](../../../../sources/HelixDB__helix-db/helix-cli/src/commands/auth.rs) |
| ci | 5 | [.github/workflows/cli_tests.yml](../../../../sources/HelixDB__helix-db/.github/workflows/cli_tests.yml)<br>[.github/workflows/cli.yml](../../../../sources/HelixDB__helix-db/.github/workflows/cli.yml)<br>[.github/workflows/macos-x64-quickfix.yml](../../../../sources/HelixDB__helix-db/.github/workflows/macos-x64-quickfix.yml)<br>[.github/workflows/parity_tests.yml](../../../../sources/HelixDB__helix-db/.github/workflows/parity_tests.yml)<br>[.github/workflows/s3_push.yml](../../../../sources/HelixDB__helix-db/.github/workflows/s3_push.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 9 | [README.md](../../../../sources/HelixDB__helix-db/README.md)<br>[sdks/typescript/README.md](../../../../sources/HelixDB__helix-db/sdks/typescript/README.md)<br>[sdks/tests/parity/README.md](../../../../sources/HelixDB__helix-db/sdks/tests/parity/README.md)<br>[sdks/rust/README.md](../../../../sources/HelixDB__helix-db/sdks/rust/README.md)<br>[sdks/rust/helix-dsl-macros/README.md](../../../../sources/HelixDB__helix-db/sdks/rust/helix-dsl-macros/README.md)<br>[sdks/python/README.md](../../../../sources/HelixDB__helix-db/sdks/python/README.md)<br>[sdks/go/README.md](../../../../sources/HelixDB__helix-db/sdks/go/README.md)<br>[helix-cli/README.md](../../../../sources/HelixDB__helix-db/helix-cli/README.md) |
| config | 15 | [Cargo.lock](../../../../sources/HelixDB__helix-db/Cargo.lock)<br>[Cargo.toml](../../../../sources/HelixDB__helix-db/Cargo.toml)<br>[sdks/typescript/package.json](../../../../sources/HelixDB__helix-db/sdks/typescript/package.json)<br>[sdks/typescript/tsconfig.json](../../../../sources/HelixDB__helix-db/sdks/typescript/tsconfig.json)<br>[sdks/rust/Cargo.lock](../../../../sources/HelixDB__helix-db/sdks/rust/Cargo.lock)<br>[sdks/rust/Cargo.toml](../../../../sources/HelixDB__helix-db/sdks/rust/Cargo.toml)<br>[sdks/rust/helix-dsl-macros/Cargo.lock](../../../../sources/HelixDB__helix-db/sdks/rust/helix-dsl-macros/Cargo.lock)<br>[sdks/rust/helix-dsl-macros/Cargo.toml](../../../../sources/HelixDB__helix-db/sdks/rust/helix-dsl-macros/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 14 | [sdks/typescript/test/basic.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/basic.test.ts)<br>[sdks/typescript/test/client.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/client.test.ts)<br>[sdks/typescript/test/types.test-d.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/test/types.test-d.ts)<br>[sdks/typescript/scripts/nested-dsl.test.ts](../../../../sources/HelixDB__helix-db/sdks/typescript/scripts/nested-dsl.test.ts)<br>[sdks/tests/register_metadata_tests.rs](../../../../sources/HelixDB__helix-db/sdks/tests/register_metadata_tests.rs)<br>[sdks/tests/parity/README.md](../../../../sources/HelixDB__helix-db/sdks/tests/parity/README.md) |
| CI workflow | 5 | [.github/workflows/cli_tests.yml](../../../../sources/HelixDB__helix-db/.github/workflows/cli_tests.yml)<br>[.github/workflows/cli.yml](../../../../sources/HelixDB__helix-db/.github/workflows/cli.yml)<br>[.github/workflows/macos-x64-quickfix.yml](../../../../sources/HelixDB__helix-db/.github/workflows/macos-x64-quickfix.yml)<br>[.github/workflows/parity_tests.yml](../../../../sources/HelixDB__helix-db/.github/workflows/parity_tests.yml)<br>[.github/workflows/s3_push.yml](../../../../sources/HelixDB__helix-db/.github/workflows/s3_push.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [helix-cli/src/commands/auth.rs](../../../../sources/HelixDB__helix-db/helix-cli/src/commands/auth.rs) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `sdks/typescript/src/index.ts`, `sdks/rust/example/src/main.rs`, `sdks/go/cmd/generate-parity-fixtures/main.go`.
2. entrypoint를 따라 실행 흐름 확인: `sdks/typescript/src/index.ts`, `sdks/rust/example/src/main.rs`, `sdks/go/cmd/generate-parity-fixtures/main.go`.
3. agent/tool runtime 매핑: `helix-cli/src/commands/skills.rs`.
4. retrieval/memory/indexing 확인: `sdks/typescript/src/index.ts`.
5. test/eval 파일로 동작 검증: `sdks/typescript/test/basic.test.ts`, `sdks/typescript/test/client.test.ts`, `sdks/typescript/test/types.test-d.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 HelixDB is an OLTP graph vector database built in Rust.. 핵심 구조 신호는 Rust, Cargo.toml, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
