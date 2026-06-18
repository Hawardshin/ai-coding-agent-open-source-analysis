# yomorun/yomo 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

🦖 Serverless AI Agent Framework with Geo-distributed Edge AI Infra.

## 요약

- 조사 단위: `sources/yomorun__yomo` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 69 files, 14 directories, depth score 85, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=agent.template.yaml, src/agent_loop.rs, src/tool_api.rs이고, 의존성 단서는 opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | yomorun/yomo |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 1908 |
| Forks | 143 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/yomorun__yomo](../../../../sources/yomorun__yomo) |
| 기존 보고서 | [reports/global-trending/repositories/yomorun__yomo.md](../../../global-trending/repositories/yomorun__yomo.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 69 / 14 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, certs, serverless, src |
| 상위 확장자 | .rs: 53, .pem: 3, .go: 2, .json: 2, .ts: 2, .md: 1, .mod: 1, .sum: 1, .toml: 1, .yaml: 1, .yml: 1, (none): 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 9 |
| .github | ci surface | 1 |
| certs | top-level component | 1 |
| serverless | source boundary | 1 |


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
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [agent.template.yaml](../../../../sources/yomorun__yomo/agent.template.yaml) | agentRuntime signal |
| agentRuntime | [src/agent_loop.rs](../../../../sources/yomorun__yomo/src/agent_loop.rs) | agentRuntime signal |
| agentRuntime | [src/tool_api.rs](../../../../sources/yomorun__yomo/src/tool_api.rs) | agentRuntime signal |
| agentRuntime | [src/tool_invoker.rs](../../../../sources/yomorun__yomo/src/tool_invoker.rs) | agentRuntime signal |
| entrypoints | [src/bin/yomo.rs](../../../../sources/yomorun__yomo/src/bin/yomo.rs) | entrypoints signal |
| entrypoints | [serverless/node/main.ts](../../../../sources/yomorun__yomo/serverless/node/main.ts) | entrypoints signal |
| entrypoints | [serverless/node/src/app.ts](../../../../sources/yomorun__yomo/serverless/node/src/app.ts) | entrypoints signal |
| entrypoints | [serverless/go/main.go](../../../../sources/yomorun__yomo/serverless/go/main.go) | entrypoints signal |
| config | [Cargo.toml](../../../../sources/yomorun__yomo/Cargo.toml) | config signal |
| config | [serverless/node/package.json](../../../../sources/yomorun__yomo/serverless/node/package.json) | config signal |
| config | [serverless/node/tsconfig.json](../../../../sources/yomorun__yomo/serverless/node/tsconfig.json) | config signal |
| config | [serverless/go/go.mod](../../../../sources/yomorun__yomo/serverless/go/go.mod) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [src/bin/yomo.rs](../../../../sources/yomorun__yomo/src/bin/yomo.rs)<br>[serverless/node/main.ts](../../../../sources/yomorun__yomo/serverless/node/main.ts)<br>[serverless/node/src/app.ts](../../../../sources/yomorun__yomo/serverless/node/src/app.ts)<br>[serverless/go/main.go](../../../../sources/yomorun__yomo/serverless/go/main.go)<br>[certs/server.pem](../../../../sources/yomorun__yomo/certs/server.pem) |
| agentRuntime | 5 | [agent.template.yaml](../../../../sources/yomorun__yomo/agent.template.yaml)<br>[src/agent_loop.rs](../../../../sources/yomorun__yomo/src/agent_loop.rs)<br>[src/tool_api.rs](../../../../sources/yomorun__yomo/src/tool_api.rs)<br>[src/tool_invoker.rs](../../../../sources/yomorun__yomo/src/tool_invoker.rs)<br>[src/tool_mgr.rs](../../../../sources/yomorun__yomo/src/tool_mgr.rs) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 1 | [src/trace.rs](../../../../sources/yomorun__yomo/src/trace.rs) |
| security | 2 | [src/auth.rs](../../../../sources/yomorun__yomo/src/auth.rs)<br>[src/http_auth.rs](../../../../sources/yomorun__yomo/src/http_auth.rs) |
| ci | 1 | [.github/workflows/release.yml](../../../../sources/yomorun__yomo/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/yomorun__yomo/README.md) |
| config | 4 | [Cargo.toml](../../../../sources/yomorun__yomo/Cargo.toml)<br>[serverless/node/package.json](../../../../sources/yomorun__yomo/serverless/node/package.json)<br>[serverless/node/tsconfig.json](../../../../sources/yomorun__yomo/serverless/node/tsconfig.json)<br>[serverless/go/go.mod](../../../../sources/yomorun__yomo/serverless/go/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [src/trace.rs](../../../../sources/yomorun__yomo/src/trace.rs) |
| CI workflow | 1 | [.github/workflows/release.yml](../../../../sources/yomorun__yomo/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [src/auth.rs](../../../../sources/yomorun__yomo/src/auth.rs)<br>[src/http_auth.rs](../../../../sources/yomorun__yomo/src/http_auth.rs) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `agent.template.yaml`, `src/agent_loop.rs`, `src/tool_api.rs`.
2. entrypoint를 따라 실행 흐름 확인: `src/bin/yomo.rs`, `serverless/node/main.ts`, `serverless/node/src/app.ts`.
3. agent/tool runtime 매핑: `agent.template.yaml`, `src/agent_loop.rs`, `src/tool_api.rs`.
4. test/eval 파일로 동작 검증: `src/trace.rs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 🦖 Serverless AI Agent Framework with Geo distributed Edge AI Infra.. 핵심 구조 신호는 Rust, Cargo.toml, README.md, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
