# 개발 생산성/DevTools 소스 인사이트

생성 시각: 2026-06-18T15:47:35.104Z

CLI/devtool entrypoint, SDK 형태, CI/build script, automation

## 요약

- 조사 단위: 개발 생산성/DevTools 카테고리에 속한 49개 source-scanned 레포입니다.
- 포함 범위: trend-linked 48개, key source reference 446개, median source depth 89입니다.
- 탐색 방식: 카테고리 인사이트를 먼저 보고, 상위 레포 비교의 소스 딥다이브 링크를 따라 구현 근거를 확인합니다.

## 총평

개발 생산성/DevTools 카테고리는 49개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 98%입니다. 이 카테고리의 비교 핵심은 star 순위가 아니라 dominant features, evidence buckets, validation surface, risk category를 같은 기준으로 맞춰 보는 것입니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [소스 딥다이브](../../../source-deep-dives/README.md) | 소스 경로 근거와 레포별 딥다이브. |
| [레포별 소스 딥다이브](../../../source-deep-dives/repositories/README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 역할군 페이지. |
| [소스 트렌드 인사이트](../../README.md) | 카테고리별 트렌드와 레포별 특징 비교. |
| [상세 비교 리포트](../../comparative-report.md) | 카테고리 간 차이와 대표 레포 판단표. |
| [카테고리별 소스 인사이트](../README.md) | 카테고리 기준의 소스 인사이트 페이지. |
| [표/CSV 목차](../../../tables/README.md) | CSV와 표 중심 탐색. |


## 카테고리 인사이트

- 개발 생산성/DevTools 카테고리는 49개 레포로 구성되며, 현재 트렌드 데이터와 직접 연결된 레포 비중은 98%입니다.
- 구조적으로 가장 많이 반복되는 패턴은 eval/test harness (40), retrieval/vector path (33), security/policy surface (33)이고, 파일 근거 bucket은 docs (49), eval (40), ci (35), config (33) 순서로 강합니다.
- MCP/tool protocol 표면이 39%에서 보입니다. 단순 라이브러리보다 agent tool 연결/registry를 비교해야 합니다.
- RAG, memory, vector/index 경로가 67%에서 보입니다. 저장소별 차이는 vector store보다 ingestion/chunking/eval 연결 방식에서 갈립니다.
- spec/requirements/ADR 경로가 39%에서 잡힙니다. spec-driven 관점에서는 문서 존재보다 acceptance/test trace까지 연결되는지가 핵심입니다.
- test/eval 표면이 82%로 높습니다. production reference로 볼 때 검증 harness와 CI를 먼저 비교하는 편이 좋습니다.
- AGENTS/CLAUDE/Codex/Cursor류 instruction 파일이 31%에서 보여 agent-native 개발 방식이 이미 레포 구조에 들어와 있습니다.

## 이 카테고리 비교 총평

| 항목 | 판단 |
| --- | --- |
| 읽는 목적 | CLI, SDK, 자동화, CI, code search를 개발자 workflow로 묶는 방식을 비교한다. |
| 강점 | 트렌드 연결률 98%로 현재성 강함; test/eval coverage 82%; retrieval/memory 경로 67% |
| 약점/검증 포인트 | 큰 구조적 공백은 표면상 작지만, 대표 레포별 위험 신호를 확인해야 함 |
| 대표 feature | tests-evals 84%, retrieval-memory 67%, security-policy 67%, agent-runtime 63%, cli-first 53% |
| 대표 bucket | docs 100%, eval 82%, ci 71%, config 67%, retrieval 67% |
| 대표 언어 | TypeScript 9, Python 5, C# 4 |
| 소스 근거 위치 | 소스 근거가 평균보다 얕음, 레포당 핵심 참조 9.1개 |
| 결론 | CLI, SDK, 자동화, CI, code search를 개발자 workflow로 묶는 방식을 비교한다. 먼저 nilbuild/developer-roadmap를 구조 기준점으로 보고, 현재성은 modelcontextprotocol/csharp-sdk와 대조한다. |

## 트렌드/소스 지표

| 항목 | 값 |
| --- | --- |
| 레포 수 | 49 |
| 트렌드 연결 레포 | 48 |
| 글로벌 / 한국 트렌드 수 | 17 / 31 |
| 글로벌/한국 동시 포착 | 0 |
| 최대 / 중앙 트렌드 점수 | 183 / 102 |
| 전체 / 중앙 stars | 522367 / 419 |
| 핵심 소스 참조 | 446 |
| 중앙 파일 수 | 412 |

## 소스 feature 분포

### 주요 feature

| 신호 | 수 |
| --- | ---: |
| tests-evals | 41 |
| retrieval-memory | 33 |
| security-policy | 33 |
| agent-runtime | 31 |
| cli-first | 26 |
| api/server | 19 |
| mcp/protocol | 19 |
| spec-artifacts | 19 |
| agent-instructions | 15 |
| container-deploy | 12 |
| monorepo | 4 |
| web-runtime | 2 |


### 구조 패턴

| 신호 | 수 |
| --- | ---: |
| eval/test harness | 40 |
| retrieval/vector path | 33 |
| security/policy surface | 33 |
| agent/tool runtime | 31 |
| cli-first | 26 |
| api/server | 19 |
| spec/docs-driven | 19 |
| containerized deploy | 12 |
| monorepo/workspace | 4 |
| general source tree | 1 |
| Objective-C source tree | 1 |
| Shell source tree | 1 |


### 근거 bucket coverage

| 신호 | 수 |
| --- | ---: |
| docs | 49 |
| eval | 40 |
| ci | 35 |
| config | 33 |
| retrieval | 33 |
| security | 33 |
| agentRuntime | 30 |
| entrypoints | 30 |
| mcp | 19 |
| spec | 19 |
| instruction | 15 |
| container | 12 |


### 의존성 그룹

| 신호 | 수 |
| --- | ---: |
| agentProtocols | 12 |
| developerSurface | 9 |
| llmProviders | 4 |
| webRuntime | 4 |
| modelRuntime | 3 |
| observability | 2 |
| vectorStores | 2 |
| browserAutomation | 1 |


### 명령 표면

| 신호 | 수 |
| --- | ---: |
| build | 15 |
| test | 14 |
| quality | 12 |
| utility | 12 |
| serve-dev | 10 |
| entrypoint | 6 |
| container | 2 |


### 위험 카테고리

_감지된 신호가 없습니다._


## 상위 트렌드 레포

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [nilbuild/developer-roadmap](https://github.com/nilbuild/developer-roadmap) | 개발 생산성/DevTools | 484 | 151 | 357571 | TypeScript | monorepo, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/nilbuild__developer-roadmap.md) / [보고서](../../../global-trending/repositories/nilbuild__developer-roadmap.md) / [소스](../../../../sources/nilbuild__developer-roadmap) |
| [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) | 개발 생산성/DevTools | 481 | 166 | 23356 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/modelcontextprotocol__python-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__python-sdk.md) / [소스](../../../../sources/modelcontextprotocol__python-sdk) |
| [awslabs/mcp](https://github.com/awslabs/mcp) | 개발 생산성/DevTools | 481 | 164 | 9289 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/awslabs__mcp.md) / [보고서](../../../global-trending/repositories/awslabs__mcp.md) / [소스](../../../../sources/awslabs__mcp) |
| [zed-industries/zed](https://github.com/zed-industries/zed) | 개발 생산성/DevTools | 480 | 151 | 85449 | Rust | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/zed-industries__zed.md) / [보고서](../../../global-trending/repositories/zed-industries__zed.md) / [소스](../../../../sources/zed-industries__zed) |
| [modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) | 개발 생산성/DevTools | 477 | 164 | 12685 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/modelcontextprotocol__typescript-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__typescript-sdk.md) / [소스](../../../../sources/modelcontextprotocol__typescript-sdk) |
| [modelcontextprotocol/csharp-sdk](https://github.com/modelcontextprotocol/csharp-sdk) | 개발 생산성/DevTools | 472 | 183 | 4335 | C# | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/modelcontextprotocol__csharp-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__csharp-sdk.md) / [소스](../../../../sources/modelcontextprotocol__csharp-sdk) |
| [modelcontextprotocol/go-sdk](https://github.com/modelcontextprotocol/go-sdk) | 개발 생산성/DevTools | 449 | 157 | 4698 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/modelcontextprotocol__go-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__go-sdk.md) / [소스](../../../../sources/modelcontextprotocol__go-sdk) |
| [av/harbor](https://github.com/av/harbor) | 개발 생산성/DevTools | 444 | 144 | 3084 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/av__harbor.md) / [보고서](../../../global-trending/repositories/av__harbor.md) / [소스](../../../../sources/av__harbor) |
| [modelcontextprotocol/rust-sdk](https://github.com/modelcontextprotocol/rust-sdk) | 개발 생산성/DevTools | 439 | 156 | 3526 | Rust | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/modelcontextprotocol__rust-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__rust-sdk.md) / [소스](../../../../sources/modelcontextprotocol__rust-sdk) |
| [ChiR24/Unreal_mcp](https://github.com/ChiR24/Unreal_mcp) | 개발 생산성/DevTools | 428 | 140 | 729 | C++ | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/ChiR24__Unreal_mcp.md) / [보고서](../../../global-trending/repositories/ChiR24__Unreal_mcp.md) / [소스](../../../../sources/ChiR24__Unreal_mcp) |
| [genomoncology/biomcp](https://github.com/genomoncology/biomcp) | 개발 생산성/DevTools | 415 | 137 | 527 | Rust | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/genomoncology__biomcp.md) / [보고서](../../../global-trending/repositories/genomoncology__biomcp.md) / [소스](../../../../sources/genomoncology__biomcp) |
| [modelcontextprotocol/kotlin-sdk](https://github.com/modelcontextprotocol/kotlin-sdk) | 개발 생산성/DevTools | 411 | 146 | 1390 | Kotlin | api/server, agent-runtime, mcp/protocol, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/modelcontextprotocol__kotlin-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__kotlin-sdk.md) / [소스](../../../../sources/modelcontextprotocol__kotlin-sdk) |
| [modelcontextprotocol/quickstart-resources](https://github.com/modelcontextprotocol/quickstart-resources) | 개발 생산성/DevTools | 398 | 147 | 1119 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/modelcontextprotocol__quickstart-resources.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__quickstart-resources.md) / [소스](../../../../sources/modelcontextprotocol__quickstart-resources) |
| [modelcontextprotocol/ruby-sdk](https://github.com/modelcontextprotocol/ruby-sdk) | 개발 생산성/DevTools | 398 | 141 | 852 | Ruby | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/modelcontextprotocol__ruby-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__ruby-sdk.md) / [소스](../../../../sources/modelcontextprotocol__ruby-sdk) |
| [speakeasy-api/speakeasy](https://github.com/speakeasy-api/speakeasy) | 개발 생산성/DevTools | 398 | 133 | 419 | JavaScript | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/speakeasy-api__speakeasy.md) / [보고서](../../../global-trending/repositories/speakeasy-api__speakeasy.md) / [소스](../../../../sources/speakeasy-api__speakeasy) |
| [line/line-bot-sdk-python](https://github.com/line/line-bot-sdk-python) | 개발 생산성/DevTools | 386 | 123 | 2117 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/line__line-bot-sdk-python.md) / [보고서](../../../korea-trending/repositories/line__line-bot-sdk-python.md) / [소스](../../../../sources/line__line-bot-sdk-python) |
| [WordPress/mcp-adapter](https://github.com/WordPress/mcp-adapter) | 개발 생산성/DevTools | 382 | 145 | 1292 | PHP | agent-runtime, mcp/protocol, spec-artifacts, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/WordPress__mcp-adapter.md) / [보고서](../../../global-trending/repositories/WordPress__mcp-adapter.md) / [소스](../../../../sources/WordPress__mcp-adapter) |
| [line/line-bot-sdk-nodejs](https://github.com/line/line-bot-sdk-nodejs) | 개발 생산성/DevTools | 369 | 122 | 1067 | TypeScript | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/line__line-bot-sdk-nodejs.md) / [보고서](../../../korea-trending/repositories/line__line-bot-sdk-nodejs.md) / [소스](../../../../sources/line__line-bot-sdk-nodejs) |
| [line/line-bot-sdk-go](https://github.com/line/line-bot-sdk-go) | 개발 생산성/DevTools | 355 | 120 | 951 | Go | cli-first, api/server, agent-runtime, tests-evals, security-policy | cli-first, api/server, agent-runtime, tests-evals | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/line__line-bot-sdk-go.md) / [보고서](../../../korea-trending/repositories/line__line-bot-sdk-go.md) / [소스](../../../../sources/line__line-bot-sdk-go) |
| [theJayTea/WritingTools](https://github.com/theJayTea/WritingTools) | 개발 생산성/DevTools | 317 | 134 | 2307 | Swift | cli-first, spec-artifacts | cli-first, spec-artifacts | test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/theJayTea__WritingTools.md) / [보고서](../../../global-trending/repositories/theJayTea__WritingTools.md) / [소스](../../../../sources/theJayTea__WritingTools) |


## 대표 레포 판단표

| 순위 | 레포 | 비교 점수 | 트렌드 점수 | 언어 | 왜 봐야 하나 | 카테고리 안에서의 위치 | 위험/확인 | 링크 |
| ---: | --- | ---: | ---: | --- | --- | --- | --- | --- |
| 1 | [nilbuild/developer-roadmap](https://github.com/nilbuild/developer-roadmap) | 484 | 151 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/nilbuild__developer-roadmap.md) / [보고서](../../../global-trending/repositories/nilbuild__developer-roadmap.md) / [소스](../../../../sources/nilbuild__developer-roadmap) |
| 2 | [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) | 481 | 166 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/modelcontextprotocol__python-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__python-sdk.md) / [소스](../../../../sources/modelcontextprotocol__python-sdk) |
| 3 | [awslabs/mcp](https://github.com/awslabs/mcp) | 481 | 164 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/awslabs__mcp.md) / [보고서](../../../global-trending/repositories/awslabs__mcp.md) / [소스](../../../../sources/awslabs__mcp) |
| 4 | [zed-industries/zed](https://github.com/zed-industries/zed) | 480 | 151 | Rust | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/zed-industries__zed.md) / [보고서](../../../global-trending/repositories/zed-industries__zed.md) / [소스](../../../../sources/zed-industries__zed) |
| 5 | [modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) | 477 | 164 | TypeScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/modelcontextprotocol__typescript-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__typescript-sdk.md) / [소스](../../../../sources/modelcontextprotocol__typescript-sdk) |
| 6 | [modelcontextprotocol/csharp-sdk](https://github.com/modelcontextprotocol/csharp-sdk) | 472 | 183 | C# | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/modelcontextprotocol__csharp-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__csharp-sdk.md) / [소스](../../../../sources/modelcontextprotocol__csharp-sdk) |
| 7 | [modelcontextprotocol/go-sdk](https://github.com/modelcontextprotocol/go-sdk) | 449 | 157 | Go | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/modelcontextprotocol__go-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__go-sdk.md) / [소스](../../../../sources/modelcontextprotocol__go-sdk) |
| 8 | [av/harbor](https://github.com/av/harbor) | 444 | 144 | Python | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/av__harbor.md) / [보고서](../../../global-trending/repositories/av__harbor.md) / [소스](../../../../sources/av__harbor) |
| 9 | [modelcontextprotocol/rust-sdk](https://github.com/modelcontextprotocol/rust-sdk) | 439 | 156 | Rust | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/modelcontextprotocol__rust-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__rust-sdk.md) / [소스](../../../../sources/modelcontextprotocol__rust-sdk) |
| 10 | [ChiR24/Unreal_mcp](https://github.com/ChiR24/Unreal_mcp) | 428 | 140 | C++ | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/ChiR24__Unreal_mcp.md) / [보고서](../../../global-trending/repositories/ChiR24__Unreal_mcp.md) / [소스](../../../../sources/ChiR24__Unreal_mcp) |
| 11 | [genomoncology/biomcp](https://github.com/genomoncology/biomcp) | 415 | 137 | Rust | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/genomoncology__biomcp.md) / [보고서](../../../global-trending/repositories/genomoncology__biomcp.md) / [소스](../../../../sources/genomoncology__biomcp) |
| 12 | [modelcontextprotocol/kotlin-sdk](https://github.com/modelcontextprotocol/kotlin-sdk) | 411 | 146 | Kotlin | MCP/tool 연결 방식, 검증 표면, 보안/정책 표면, 배포 구조 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/modelcontextprotocol__kotlin-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__kotlin-sdk.md) / [소스](../../../../sources/modelcontextprotocol__kotlin-sdk) |
| 13 | [modelcontextprotocol/quickstart-resources](https://github.com/modelcontextprotocol/quickstart-resources) | 398 | 147 | Go | MCP/tool 연결 방식, retrieval/memory 구조, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/modelcontextprotocol__quickstart-resources.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__quickstart-resources.md) / [소스](../../../../sources/modelcontextprotocol__quickstart-resources) |
| 14 | [modelcontextprotocol/ruby-sdk](https://github.com/modelcontextprotocol/ruby-sdk) | 398 | 141 | Ruby | MCP/tool 연결 방식, retrieval/memory 구조, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/modelcontextprotocol__ruby-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__ruby-sdk.md) / [소스](../../../../sources/modelcontextprotocol__ruby-sdk) |
| 15 | [speakeasy-api/speakeasy](https://github.com/speakeasy-api/speakeasy) | 398 | 133 | JavaScript | MCP/tool 연결 방식, retrieval/memory 구조, spec/요구사항 산출물, 검증 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/speakeasy-api__speakeasy.md) / [보고서](../../../global-trending/repositories/speakeasy-api__speakeasy.md) / [소스](../../../../sources/speakeasy-api__speakeasy) |
| 16 | [line/line-bot-sdk-python](https://github.com/line/line-bot-sdk-python) | 386 | 123 | Python | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | 큰 위험 신호 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/line__line-bot-sdk-python.md) / [보고서](../../../korea-trending/repositories/line__line-bot-sdk-python.md) / [소스](../../../../sources/line__line-bot-sdk-python) |
| 17 | [WordPress/mcp-adapter](https://github.com/WordPress/mcp-adapter) | 382 | 145 | PHP | MCP/tool 연결 방식, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/WordPress__mcp-adapter.md) / [보고서](../../../global-trending/repositories/WordPress__mcp-adapter.md) / [소스](../../../../sources/WordPress__mcp-adapter) |
| 18 | [line/line-bot-sdk-nodejs](https://github.com/line/line-bot-sdk-nodejs) | 369 | 122 | TypeScript | retrieval/memory 구조, spec/요구사항 산출물, 검증 표면, 보안/정책 표면 | 카테고리 중앙값보다 비교 점수 높음; 트렌드 점수 우위; 소스 깊이 우위; 핵심 파일 참조 충분 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/line__line-bot-sdk-nodejs.md) / [보고서](../../../korea-trending/repositories/line__line-bot-sdk-nodejs.md) / [소스](../../../../sources/line__line-bot-sdk-nodejs) |


## 상위 레포 비교

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [nilbuild/developer-roadmap](https://github.com/nilbuild/developer-roadmap) | 개발 생산성/DevTools | 484 | 151 | 357571 | TypeScript | monorepo, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/nilbuild__developer-roadmap.md) / [보고서](../../../global-trending/repositories/nilbuild__developer-roadmap.md) / [소스](../../../../sources/nilbuild__developer-roadmap) |
| [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) | 개발 생산성/DevTools | 481 | 166 | 23356 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions, web-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/2/modelcontextprotocol__python-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__python-sdk.md) / [소스](../../../../sources/modelcontextprotocol__python-sdk) |
| [awslabs/mcp](https://github.com/awslabs/mcp) | 개발 생산성/DevTools | 481 | 164 | 9289 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/awslabs__mcp.md) / [보고서](../../../global-trending/repositories/awslabs__mcp.md) / [소스](../../../../sources/awslabs__mcp) |
| [zed-industries/zed](https://github.com/zed-industries/zed) | 개발 생산성/DevTools | 480 | 151 | 85449 | Rust | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/zed-industries__zed.md) / [보고서](../../../global-trending/repositories/zed-industries__zed.md) / [소스](../../../../sources/zed-industries__zed) |
| [modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) | 개발 생산성/DevTools | 477 | 164 | 12685 | TypeScript | monorepo, cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/modelcontextprotocol__typescript-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__typescript-sdk.md) / [소스](../../../../sources/modelcontextprotocol__typescript-sdk) |
| [modelcontextprotocol/csharp-sdk](https://github.com/modelcontextprotocol/csharp-sdk) | 개발 생산성/DevTools | 472 | 183 | 4335 | C# | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/modelcontextprotocol__csharp-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__csharp-sdk.md) / [소스](../../../../sources/modelcontextprotocol__csharp-sdk) |
| [modelcontextprotocol/go-sdk](https://github.com/modelcontextprotocol/go-sdk) | 개발 생산성/DevTools | 449 | 157 | 4698 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/modelcontextprotocol__go-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__go-sdk.md) / [소스](../../../../sources/modelcontextprotocol__go-sdk) |
| [av/harbor](https://github.com/av/harbor) | 개발 생산성/DevTools | 444 | 144 | 3084 | Python | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/av__harbor.md) / [보고서](../../../global-trending/repositories/av__harbor.md) / [소스](../../../../sources/av__harbor) |
| [modelcontextprotocol/rust-sdk](https://github.com/modelcontextprotocol/rust-sdk) | 개발 생산성/DevTools | 439 | 156 | 3526 | Rust | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/modelcontextprotocol__rust-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__rust-sdk.md) / [소스](../../../../sources/modelcontextprotocol__rust-sdk) |
| [ChiR24/Unreal_mcp](https://github.com/ChiR24/Unreal_mcp) | 개발 생산성/DevTools | 428 | 140 | 729 | C++ | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/ChiR24__Unreal_mcp.md) / [보고서](../../../global-trending/repositories/ChiR24__Unreal_mcp.md) / [소스](../../../../sources/ChiR24__Unreal_mcp) |
| [genomoncology/biomcp](https://github.com/genomoncology/biomcp) | 개발 생산성/DevTools | 415 | 137 | 527 | Rust | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/genomoncology__biomcp.md) / [보고서](../../../global-trending/repositories/genomoncology__biomcp.md) / [소스](../../../../sources/genomoncology__biomcp) |
| [modelcontextprotocol/kotlin-sdk](https://github.com/modelcontextprotocol/kotlin-sdk) | 개발 생산성/DevTools | 411 | 146 | 1390 | Kotlin | api/server, agent-runtime, mcp/protocol, tests-evals, security-policy, container-deploy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/modelcontextprotocol__kotlin-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__kotlin-sdk.md) / [소스](../../../../sources/modelcontextprotocol__kotlin-sdk) |
| [modelcontextprotocol/quickstart-resources](https://github.com/modelcontextprotocol/quickstart-resources) | 개발 생산성/DevTools | 398 | 147 | 1119 | Go | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/modelcontextprotocol__quickstart-resources.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__quickstart-resources.md) / [소스](../../../../sources/modelcontextprotocol__quickstart-resources) |
| [modelcontextprotocol/ruby-sdk](https://github.com/modelcontextprotocol/ruby-sdk) | 개발 생산성/DevTools | 398 | 141 | 852 | Ruby | cli-first, api/server, agent-runtime, mcp/protocol, retrieval-memory, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/modelcontextprotocol__ruby-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__ruby-sdk.md) / [소스](../../../../sources/modelcontextprotocol__ruby-sdk) |
| [speakeasy-api/speakeasy](https://github.com/speakeasy-api/speakeasy) | 개발 생산성/DevTools | 398 | 133 | 419 | JavaScript | cli-first, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/speakeasy-api__speakeasy.md) / [보고서](../../../global-trending/repositories/speakeasy-api__speakeasy.md) / [소스](../../../../sources/speakeasy-api__speakeasy) |
| [line/line-bot-sdk-python](https://github.com/line/line-bot-sdk-python) | 개발 생산성/DevTools | 386 | 123 | 2117 | Python | cli-first, api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/line__line-bot-sdk-python.md) / [보고서](../../../korea-trending/repositories/line__line-bot-sdk-python.md) / [소스](../../../../sources/line__line-bot-sdk-python) |
| [WordPress/mcp-adapter](https://github.com/WordPress/mcp-adapter) | 개발 생산성/DevTools | 382 | 145 | 1292 | PHP | agent-runtime, mcp/protocol, spec-artifacts, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/WordPress__mcp-adapter.md) / [보고서](../../../global-trending/repositories/WordPress__mcp-adapter.md) / [소스](../../../../sources/WordPress__mcp-adapter) |
| [line/line-bot-sdk-nodejs](https://github.com/line/line-bot-sdk-nodejs) | 개발 생산성/DevTools | 369 | 122 | 1067 | TypeScript | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/line__line-bot-sdk-nodejs.md) / [보고서](../../../korea-trending/repositories/line__line-bot-sdk-nodejs.md) / [소스](../../../../sources/line__line-bot-sdk-nodejs) |
| [line/line-bot-sdk-go](https://github.com/line/line-bot-sdk-go) | 개발 생산성/DevTools | 355 | 120 | 951 | Go | cli-first, api/server, agent-runtime, tests-evals, security-policy | cli-first, api/server, agent-runtime, tests-evals | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/line__line-bot-sdk-go.md) / [보고서](../../../korea-trending/repositories/line__line-bot-sdk-go.md) / [소스](../../../../sources/line__line-bot-sdk-go) |
| [line/line-bot-sdk-php](https://github.com/line/line-bot-sdk-php) | 개발 생산성/DevTools | 325 | 120 | 733 | PHP | agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/line__line-bot-sdk-php.md) / [보고서](../../../korea-trending/repositories/line__line-bot-sdk-php.md) / [소스](../../../../sources/line__line-bot-sdk-php) |
| [line/line-bot-sdk-java](https://github.com/line/line-bot-sdk-java) | 개발 생산성/DevTools | 321 | 119 | 641 | Java | retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/line__line-bot-sdk-java.md) / [보고서](../../../korea-trending/repositories/line__line-bot-sdk-java.md) / [소스](../../../../sources/line__line-bot-sdk-java) |
| [theJayTea/WritingTools](https://github.com/theJayTea/WritingTools) | 개발 생산성/DevTools | 317 | 134 | 2307 | Swift | cli-first, spec-artifacts | cli-first, spec-artifacts | test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/theJayTea__WritingTools.md) / [보고서](../../../global-trending/repositories/theJayTea__WritingTools.md) / [소스](../../../../sources/theJayTea__WritingTools) |
| [line/line-bot-sdk-ruby](https://github.com/line/line-bot-sdk-ruby) | 개발 생산성/DevTools | 311 | 113 | 491 | Ruby | spec-artifacts, tests-evals, security-policy | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/line__line-bot-sdk-ruby.md) / [보고서](../../../korea-trending/repositories/line__line-bot-sdk-ruby.md) / [소스](../../../../sources/line__line-bot-sdk-ruby) |
| [Samsung/netcoredbg](https://github.com/Samsung/netcoredbg) | 개발 생산성/DevTools | 303 | 102 | 1288 | C# | cli-first, agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/Samsung__netcoredbg.md) / [보고서](../../../korea-trending/repositories/Samsung__netcoredbg.md) / [소스](../../../../sources/Samsung__netcoredbg) |
| [kakao/kakao_flutter_sdk](https://github.com/kakao/kakao_flutter_sdk) | 개발 생산성/DevTools | 289 | 101 | 195 | Dart | monorepo, agent-runtime, retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/kakao__kakao_flutter_sdk.md) / [보고서](../../../korea-trending/repositories/kakao__kakao_flutter_sdk.md) / [소스](../../../../sources/kakao__kakao_flutter_sdk) |
| [line/line-sdk-ios-swift](https://github.com/line/line-sdk-ios-swift) | 개발 생산성/DevTools | 284 | 108 | 876 | Swift | retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/b/line__line-sdk-ios-swift.md) / [보고서](../../../korea-trending/repositories/line__line-sdk-ios-swift.md) / [소스](../../../../sources/line__line-sdk-ios-swift) |
| [Samsung/Universum](https://github.com/Samsung/Universum) | 개발 생산성/DevTools | 272 | 83 | 20 | Python | cli-first, agent-runtime, retrieval-memory, tests-evals, container-deploy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/Samsung__Universum.md) / [보고서](../../../korea-trending/repositories/Samsung__Universum.md) / [소스](../../../../sources/Samsung__Universum) |
| [line/flutter_line_sdk](https://github.com/line/flutter_line_sdk) | 개발 생산성/DevTools | 270 | 96 | 228 | Dart | api/server, agent-runtime, tests-evals, security-policy | api/server, agent-runtime, tests-evals, security-policy | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/line__flutter_line_sdk.md) / [보고서](../../../korea-trending/repositories/line__flutter_line_sdk.md) / [소스](../../../../sources/line__flutter_line_sdk) |
| [daangn/metabridge](https://github.com/daangn/metabridge) | 개발 생산성/DevTools | 268 | 69 | 65 | TypeScript | cli-first, api/server, agent-runtime, retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/4/daangn__metabridge.md) / [보고서](../../../korea-trending/repositories/daangn__metabridge.md) / [소스](../../../../sources/daangn__metabridge) |
| [toss/apps-in-toss-unity-sdk](https://github.com/toss/apps-in-toss-unity-sdk) | 개발 생산성/DevTools | 265 | 74 | 9 | C# | monorepo, cli-first, retrieval-memory, tests-evals, security-policy, agent-instructions | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | 없음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/toss__apps-in-toss-unity-sdk.md) / [보고서](../../../korea-trending/repositories/toss__apps-in-toss-unity-sdk.md) / [소스](../../../../sources/toss__apps-in-toss-unity-sdk) |


## 위험 신호 Watchlist

| 레포 | 카테고리 | 비교 점수 | 트렌드 점수 | Stars | 언어 | Features | 특징 | 위험 신호 | 링크 |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- | --- |
| [nilbuild/developer-roadmap](https://github.com/nilbuild/developer-roadmap) | 개발 생산성/DevTools | 484 | 151 | 357571 | TypeScript | monorepo, agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, container-deploy, agent-instructions, model-runtime | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/a/nilbuild__developer-roadmap.md) / [보고서](../../../global-trending/repositories/nilbuild__developer-roadmap.md) / [소스](../../../../sources/nilbuild__developer-roadmap) |
| [modelcontextprotocol/csharp-sdk](https://github.com/modelcontextprotocol/csharp-sdk) | 개발 생산성/DevTools | 472 | 183 | 4335 | C# | agent-runtime, mcp/protocol, retrieval-memory, spec-artifacts, tests-evals, security-policy, agent-instructions | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/modelcontextprotocol__csharp-sdk.md) / [보고서](../../../global-trending/repositories/modelcontextprotocol__csharp-sdk.md) / [소스](../../../../sources/modelcontextprotocol__csharp-sdk) |
| [WordPress/mcp-adapter](https://github.com/WordPress/mcp-adapter) | 개발 생산성/DevTools | 382 | 145 | 1292 | PHP | agent-runtime, mcp/protocol, spec-artifacts, tests-evals, security-policy | MCP/tool runtime가 실제 소스 경로로 확인되는 agent harness형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/WordPress__mcp-adapter.md) / [보고서](../../../global-trending/repositories/WordPress__mcp-adapter.md) / [소스](../../../../sources/WordPress__mcp-adapter) |
| [line/line-bot-sdk-nodejs](https://github.com/line/line-bot-sdk-nodejs) | 개발 생산성/DevTools | 369 | 122 | 1067 | TypeScript | api/server, agent-runtime, retrieval-memory, spec-artifacts, tests-evals, security-policy, web-runtime | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/line__line-bot-sdk-nodejs.md) / [보고서](../../../korea-trending/repositories/line__line-bot-sdk-nodejs.md) / [소스](../../../../sources/line__line-bot-sdk-nodejs) |
| [line/line-bot-sdk-php](https://github.com/line/line-bot-sdk-php) | 개발 생산성/DevTools | 325 | 120 | 733 | PHP | agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/line__line-bot-sdk-php.md) / [보고서](../../../korea-trending/repositories/line__line-bot-sdk-php.md) / [소스](../../../../sources/line__line-bot-sdk-php) |
| [line/line-bot-sdk-java](https://github.com/line/line-bot-sdk-java) | 개발 생산성/DevTools | 321 | 119 | 641 | Java | retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/9/line__line-bot-sdk-java.md) / [보고서](../../../korea-trending/repositories/line__line-bot-sdk-java.md) / [소스](../../../../sources/line__line-bot-sdk-java) |
| [theJayTea/WritingTools](https://github.com/theJayTea/WritingTools) | 개발 생산성/DevTools | 317 | 134 | 2307 | Swift | cli-first, spec-artifacts | cli-first, spec-artifacts | test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/theJayTea__WritingTools.md) / [보고서](../../../global-trending/repositories/theJayTea__WritingTools.md) / [소스](../../../../sources/theJayTea__WritingTools) |
| [line/line-bot-sdk-ruby](https://github.com/line/line-bot-sdk-ruby) | 개발 생산성/DevTools | 311 | 113 | 491 | Ruby | spec-artifacts, tests-evals, security-policy | 스펙/요구사항 산출물과 테스트 추적을 같이 볼 수 있는 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/7/line__line-bot-sdk-ruby.md) / [보고서](../../../korea-trending/repositories/line__line-bot-sdk-ruby.md) / [소스](../../../../sources/line__line-bot-sdk-ruby) |
| [Samsung/netcoredbg](https://github.com/Samsung/netcoredbg) | 개발 생산성/DevTools | 303 | 102 | 1288 | C# | cli-first, agent-runtime, retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/1/Samsung__netcoredbg.md) / [보고서](../../../korea-trending/repositories/Samsung__netcoredbg.md) / [소스](../../../../sources/Samsung__netcoredbg) |
| [kakao/kakao_flutter_sdk](https://github.com/kakao/kakao_flutter_sdk) | 개발 생산성/DevTools | 289 | 101 | 195 | Dart | monorepo, agent-runtime, retrieval-memory, tests-evals, security-policy | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/3/kakao__kakao_flutter_sdk.md) / [보고서](../../../korea-trending/repositories/kakao__kakao_flutter_sdk.md) / [소스](../../../../sources/kakao__kakao_flutter_sdk) |
| [kakao/kakao-ios-sdk](https://github.com/kakao/kakao-ios-sdk) | 개발 생산성/DevTools | 196 | 88 | 39 | Swift | security-policy | security-policy | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/8/kakao__kakao-ios-sdk.md) / [보고서](../../../korea-trending/repositories/kakao__kakao-ios-sdk.md) / [소스](../../../../sources/kakao__kakao-ios-sdk) |
| [line/line-sdk-unity](https://github.com/line/line-sdk-unity) | 개발 생산성/DevTools | 192 | 80 | 125 | C# | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/6/line__line-sdk-unity.md) / [보고서](../../../korea-trending/repositories/line__line-sdk-unity.md) / [소스](../../../../sources/line__line-sdk-unity) |
| [naver/naveridlogin-sdk-android](https://github.com/naver/naveridlogin-sdk-android) | 개발 생산성/DevTools | 187 | 85 | 124 | Kotlin | security-policy | security-policy | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/0/naver__naveridlogin-sdk-android.md) / [보고서](../../../korea-trending/repositories/naver__naveridlogin-sdk-android.md) / [소스](../../../../sources/naver__naveridlogin-sdk-android) |
| [naver/nam-sdk-android](https://github.com/naver/nam-sdk-android) | 개발 생산성/DevTools | 187 | 74 | 16 | Java | security-policy | security-policy | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/e/naver__nam-sdk-android.md) / [보고서](../../../korea-trending/repositories/naver__nam-sdk-android.md) / [소스](../../../../sources/naver__nam-sdk-android) |
| [naver/d-day-labeler](https://github.com/naver/d-day-labeler) | 개발 생산성/DevTools | 176 | 69 | 48 | TypeScript | retrieval-memory | retrieval-memory | test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/naver__d-day-labeler.md) / [보고서](../../../korea-trending/repositories/naver__d-day-labeler.md) / [소스](../../../../sources/naver__d-day-labeler) |
| [naver/nam-sdk-ios](https://github.com/naver/nam-sdk-ios) | 개발 생산성/DevTools | 173 | 71 | 6 | C++ | tests-evals | tests-evals | entrypoint 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/f/naver__nam-sdk-ios.md) / [보고서](../../../korea-trending/repositories/naver__nam-sdk-ios.md) / [소스](../../../../sources/naver__nam-sdk-ios) |
| [naver/notify-pr-review](https://github.com/naver/notify-pr-review) | 개발 생산성/DevTools | 168 | 71 | 53 | JavaScript | retrieval-memory, tests-evals | RAG/memory 구현과 검증 표면을 같이 가진 지식 시스템형 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/naver__notify-pr-review.md) / [보고서](../../../korea-trending/repositories/naver__notify-pr-review.md) / [소스](../../../../sources/naver__notify-pr-review) |
| [naver/naveridlogin-sdk-ios](https://github.com/naver/naveridlogin-sdk-ios) | 개발 생산성/DevTools | 150 | 70 | 60 | Objective-C |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/5/naver__naveridlogin-sdk-ios.md) / [보고서](../../../korea-trending/repositories/naver__naveridlogin-sdk-ios.md) / [소스](../../../../sources/naver__naveridlogin-sdk-ios) |
| [kakao/olive-cli](https://github.com/kakao/olive-cli) | 개발 생산성/DevTools | 143 | 78 | 26 | Shell |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/c/kakao__olive-cli.md) / [보고서](../../../korea-trending/repositories/kakao__olive-cli.md) / [소스](../../../../sources/kakao__olive-cli) |
| [seoulstart/awesome-build-for-korea](https://github.com/seoulstart/awesome-build-for-korea) | 개발 생산성/DevTools | 114 | 76 | 0 | unknown |  | 소스 구조 신호가 약해 추가 수동 확인이 필요한 레포 | entrypoint 경로가 명확하지 않음, test/eval 경로가 명확하지 않음, CI 경로가 명확하지 않음 | [소스 딥다이브](../../../source-deep-dives/repositories/d/seoulstart__awesome-build-for-korea.md) / [보고서](../../../korea-trending/repositories/seoulstart__awesome-build-for-korea.md) / [소스](../../../../sources/seoulstart__awesome-build-for-korea) |
