# modelcontextprotocol/quickstart-resources 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

A repository of servers and clients from the Model Context Protocol tutorials

## 요약

- 조사 단위: `sources/modelcontextprotocol__quickstart-resources` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 62 files, 17 directories, depth score 92, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=weather-server-typescript/src/index.ts, weather-server-rust/src/main.rs, weather-server-go/main.go이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | modelcontextprotocol/quickstart-resources |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Go |
| Stars | 1119 |
| Forks | 634 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/modelcontextprotocol__quickstart-resources](../../../../sources/modelcontextprotocol__quickstart-resources) |
| 기존 보고서 | [reports/global-trending/repositories/modelcontextprotocol__quickstart-resources.md](../../../global-trending/repositories/modelcontextprotocol__quickstart-resources.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 62 / 17 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, mcp-client-go, mcp-client-python, mcp-client-ruby, mcp-client-rust, mcp-client-typescript, tests, weather-server-go, weather-server-python, weather-server-ruby, weather-server-rust, weather-server-typescript |
| 상위 확장자 | .md: 13, .json: 9, (none): 8, .example: 4, .lock: 4, .toml: 4, .ts: 4, .go: 2, .mod: 2, .py: 2, .rb: 2, .rs: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 14 |
| .github | ci surface | 1 |
| mcp-client-go | source boundary | 1 |
| mcp-client-python | source boundary | 1 |
| mcp-client-ruby | source boundary | 1 |
| mcp-client-rust | source boundary | 1 |
| mcp-client-typescript | source boundary | 1 |
| weather-server-go | source boundary | 1 |
| weather-server-python | source boundary | 1 |
| weather-server-ruby | source boundary | 1 |
| weather-server-rust | source boundary | 1 |
| weather-server-typescript | source boundary | 1 |


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
| entrypoints | [weather-server-typescript/src/index.ts](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-typescript/src/index.ts) | entrypoints signal |
| entrypoints | [weather-server-rust/src/main.rs](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-rust/src/main.rs) | entrypoints signal |
| entrypoints | [weather-server-go/main.go](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-go/main.go) | entrypoints signal |
| entrypoints | [mcp-client-rust/src/main.rs](../../../../sources/modelcontextprotocol__quickstart-resources/mcp-client-rust/src/main.rs) | entrypoints signal |
| config | [weather-server-typescript/package.json](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-typescript/package.json) | config signal |
| config | [weather-server-typescript/tsconfig.json](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-typescript/tsconfig.json) | config signal |
| config | [weather-server-rust/Cargo.lock](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-rust/Cargo.lock) | config signal |
| config | [weather-server-rust/Cargo.toml](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-rust/Cargo.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/modelcontextprotocol__quickstart-resources/.github/workflows/ci.yml) | ci signal |
| ci | [.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__quickstart-resources/.github/workflows/claude.yml) | ci signal |
| docs | [README.md](../../../../sources/modelcontextprotocol__quickstart-resources/README.md) | docs signal |
| docs | [weather-server-typescript/README.md](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-typescript/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [weather-server-typescript/src/index.ts](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-typescript/src/index.ts)<br>[weather-server-rust/src/main.rs](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-rust/src/main.rs)<br>[weather-server-go/main.go](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-go/main.go)<br>[mcp-client-rust/src/main.rs](../../../../sources/modelcontextprotocol__quickstart-resources/mcp-client-rust/src/main.rs)<br>[mcp-client-go/main.go](../../../../sources/modelcontextprotocol__quickstart-resources/mcp-client-go/main.go) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 28 | [tests/helpers/mcp-test-client.ts](../../../../sources/modelcontextprotocol__quickstart-resources/tests/helpers/mcp-test-client.ts)<br>[tests/helpers/mock-mcp-server.ts](../../../../sources/modelcontextprotocol__quickstart-resources/tests/helpers/mock-mcp-server.ts)<br>[mcp-client-typescript/.env.example](../../../../sources/modelcontextprotocol__quickstart-resources/mcp-client-typescript/.env.example)<br>[mcp-client-typescript/.gitignore](../../../../sources/modelcontextprotocol__quickstart-resources/mcp-client-typescript/.gitignore)<br>[mcp-client-typescript/index.ts](../../../../sources/modelcontextprotocol__quickstart-resources/mcp-client-typescript/index.ts)<br>[mcp-client-typescript/package-lock.json](../../../../sources/modelcontextprotocol__quickstart-resources/mcp-client-typescript/package-lock.json)<br>[mcp-client-typescript/package.json](../../../../sources/modelcontextprotocol__quickstart-resources/mcp-client-typescript/package.json)<br>[mcp-client-typescript/README.md](../../../../sources/modelcontextprotocol__quickstart-resources/mcp-client-typescript/README.md) |
| retrieval | 2 | [weather-server-typescript/src/index.ts](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-typescript/src/index.ts)<br>[mcp-client-typescript/index.ts](../../../../sources/modelcontextprotocol__quickstart-resources/mcp-client-typescript/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 8 | [tests/README.md](../../../../sources/modelcontextprotocol__quickstart-resources/tests/README.md)<br>[tests/smoke-test.sh](../../../../sources/modelcontextprotocol__quickstart-resources/tests/smoke-test.sh)<br>[tests/utils.sh](../../../../sources/modelcontextprotocol__quickstart-resources/tests/utils.sh)<br>[tests/helpers/mcp-test-client.ts](../../../../sources/modelcontextprotocol__quickstart-resources/tests/helpers/mcp-test-client.ts)<br>[tests/helpers/mock-mcp-server.ts](../../../../sources/modelcontextprotocol__quickstart-resources/tests/helpers/mock-mcp-server.ts)<br>[tests/helpers/package-lock.json](../../../../sources/modelcontextprotocol__quickstart-resources/tests/helpers/package-lock.json)<br>[tests/helpers/package.json](../../../../sources/modelcontextprotocol__quickstart-resources/tests/helpers/package.json)<br>[tests/helpers/tsconfig.json](../../../../sources/modelcontextprotocol__quickstart-resources/tests/helpers/tsconfig.json) |
| security | 1 | [SECURITY.md](../../../../sources/modelcontextprotocol__quickstart-resources/SECURITY.md) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/modelcontextprotocol__quickstart-resources/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__quickstart-resources/.github/workflows/claude.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 12 | [README.md](../../../../sources/modelcontextprotocol__quickstart-resources/README.md)<br>[weather-server-typescript/README.md](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-typescript/README.md)<br>[weather-server-rust/README.md](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-rust/README.md)<br>[weather-server-ruby/README.md](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-ruby/README.md)<br>[weather-server-python/README.md](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-python/README.md)<br>[weather-server-go/README.md](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-go/README.md)<br>[tests/README.md](../../../../sources/modelcontextprotocol__quickstart-resources/tests/README.md)<br>[mcp-client-typescript/README.md](../../../../sources/modelcontextprotocol__quickstart-resources/mcp-client-typescript/README.md) |
| config | 16 | [weather-server-typescript/package.json](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-typescript/package.json)<br>[weather-server-typescript/tsconfig.json](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-typescript/tsconfig.json)<br>[weather-server-rust/Cargo.lock](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-rust/Cargo.lock)<br>[weather-server-rust/Cargo.toml](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-rust/Cargo.toml)<br>[weather-server-python/pyproject.toml](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-python/pyproject.toml)<br>[weather-server-python/uv.lock](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-python/uv.lock)<br>[weather-server-go/go.mod](../../../../sources/modelcontextprotocol__quickstart-resources/weather-server-go/go.mod)<br>[tests/helpers/package.json](../../../../sources/modelcontextprotocol__quickstart-resources/tests/helpers/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 8 | [tests/README.md](../../../../sources/modelcontextprotocol__quickstart-resources/tests/README.md)<br>[tests/smoke-test.sh](../../../../sources/modelcontextprotocol__quickstart-resources/tests/smoke-test.sh)<br>[tests/utils.sh](../../../../sources/modelcontextprotocol__quickstart-resources/tests/utils.sh)<br>[tests/helpers/mcp-test-client.ts](../../../../sources/modelcontextprotocol__quickstart-resources/tests/helpers/mcp-test-client.ts)<br>[tests/helpers/mock-mcp-server.ts](../../../../sources/modelcontextprotocol__quickstart-resources/tests/helpers/mock-mcp-server.ts)<br>[tests/helpers/package-lock.json](../../../../sources/modelcontextprotocol__quickstart-resources/tests/helpers/package-lock.json) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/modelcontextprotocol__quickstart-resources/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/modelcontextprotocol__quickstart-resources/.github/workflows/claude.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/modelcontextprotocol__quickstart-resources/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `weather-server-typescript/src/index.ts`, `weather-server-rust/src/main.rs`, `weather-server-go/main.go`.
2. entrypoint를 따라 실행 흐름 확인: `weather-server-typescript/src/index.ts`, `weather-server-rust/src/main.rs`, `weather-server-go/main.go`.
3. retrieval/memory/indexing 확인: `weather-server-typescript/src/index.ts`, `mcp-client-typescript/index.ts`.
4. test/eval 파일로 동작 검증: `tests/README.md`, `tests/smoke-test.sh`, `tests/utils.sh`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 A repository of servers and clients from the Model Context Protocol tutorials. 핵심 구조 신호는 Go, README.md, LICENSE, tests, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
