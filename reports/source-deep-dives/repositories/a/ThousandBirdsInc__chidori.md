# ThousandBirdsInc/chidori 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The agent framework where every run is durable, replayable, and resumable by default.

## 요약

- 조사 단위: `sources/ThousandBirdsInc__chidori` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 284 files, 51 directories, depth score 110, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=crates/chidori/src/mcp/client.rs, crates/chidori/src/mcp/config.rs, crates/chidori/src/mcp/mod.rs이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ThousandBirdsInc/chidori |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 1350 |
| Forks | 55 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/ThousandBirdsInc__chidori](../../../../sources/ThousandBirdsInc__chidori) |
| 기존 보고서 | [reports/global-trending/repositories/ThousandBirdsInc__chidori.md](../../../global-trending/repositories/ThousandBirdsInc__chidori.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 284 / 51 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, crates, docs, examples, scripts, sdk |
| 상위 확장자 | .rs: 110, .star: 39, .ts: 38, .md: 33, .js: 12, .svg: 10, .py: 9, .json: 8, .toml: 6, .sh: 5, .yml: 5, .mjs: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 38 |
| examples/legacy-starlark | examples workspace | 34 |
| crates/chidori | crates workspace | 13 |
| crates/chidori-js | crates workspace | 12 |
| examples/record-replay | examples workspace | 10 |
| crates/test262-runner | crates workspace | 2 |
| examples/multiplayer-review | examples workspace | 2 |
| examples/tools | examples workspace | 2 |
| .github | ci surface | 1 |
| crates | source boundary | 1 |
| examples | top-level component | 1 |
| examples/branching | examples workspace | 1 |
| examples/interactive-pipeline | examples workspace | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |


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
| mcp | [crates/chidori/src/mcp/client.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mcp/client.rs) | mcp signal |
| mcp | [crates/chidori/src/mcp/config.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mcp/config.rs) | mcp signal |
| mcp | [crates/chidori/src/mcp/mod.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mcp/mod.rs) | mcp signal |
| agentRuntime | [sdk/typescript/src/agent.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/src/agent.ts) | agentRuntime signal |
| agentRuntime | [examples/tools/reverse.ts](../../../../sources/ThousandBirdsInc__chidori/examples/tools/reverse.ts) | agentRuntime signal |
| agentRuntime | [examples/tools/web_search.ts](../../../../sources/ThousandBirdsInc__chidori/examples/tools/web_search.ts) | agentRuntime signal |
| agentRuntime | [examples/record-replay/tool_pipeline.ts](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/tool_pipeline.ts) | agentRuntime signal |
| entrypoints | [sdk/typescript/src/index.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [crates/test262-runner/src/main.rs](../../../../sources/ThousandBirdsInc__chidori/crates/test262-runner/src/main.rs) | entrypoints signal |
| entrypoints | [crates/chidori-js/src/lib.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori-js/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/chidori/src/lib.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/lib.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/ThousandBirdsInc__chidori/Cargo.lock) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [sdk/typescript/src/index.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/src/index.ts)<br>[crates/test262-runner/src/main.rs](../../../../sources/ThousandBirdsInc__chidori/crates/test262-runner/src/main.rs)<br>[crates/chidori-js/src/lib.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori-js/src/lib.rs)<br>[crates/chidori/src/lib.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/lib.rs)<br>[crates/chidori/src/main.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/main.rs)<br>[crates/chidori/src/server.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/server.rs) |
| agentRuntime | 71 | [sdk/typescript/src/agent.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/src/agent.ts)<br>[examples/tools/reverse.ts](../../../../sources/ThousandBirdsInc__chidori/examples/tools/reverse.ts)<br>[examples/tools/web_search.ts](../../../../sources/ThousandBirdsInc__chidori/examples/tools/web_search.ts)<br>[examples/record-replay/tool_pipeline.ts](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/tool_pipeline.ts)<br>[examples/record-replay/tools/flaky_fetch.ts](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/tools/flaky_fetch.ts)<br>[examples/record-replay/tools/fx_rate.ts](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/tools/fx_rate.ts)<br>[examples/record-replay/tools/geocode.ts](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/tools/geocode.ts)<br>[examples/record-replay/tools/mint_id.ts](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/tools/mint_id.ts) |
| mcp | 3 | [crates/chidori/src/mcp/client.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mcp/client.rs)<br>[crates/chidori/src/mcp/config.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mcp/config.rs)<br>[crates/chidori/src/mcp/mod.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mcp/mod.rs) |
| retrieval | 4 | [sdk/typescript/src/index.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/src/index.ts)<br>[examples/legacy-starlark/agents/memory_demo.star](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/agents/memory_demo.star)<br>[crates/chidori/src/runtime/memory.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/runtime/memory.rs)<br>[crates/chidori/src/runtime/typescript/module_graph.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/runtime/typescript/module_graph.rs) |
| spec | 2 | [docs/architecture.md](../../../../sources/ThousandBirdsInc__chidori/docs/architecture.md)<br>[docs/DESIGN.md](../../../../sources/ThousandBirdsInc__chidori/docs/DESIGN.md) |
| eval | 18 | [sdk/python/tests/test_session_api.py](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/test_session_api.py)<br>[sdk/python/tests/fixtures/approval.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/approval.ts)<br>[sdk/python/tests/fixtures/ask.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/ask.ts)<br>[sdk/python/tests/fixtures/signal_review.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/signal_review.ts)<br>[sdk/python/tests/fixtures/slow.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/slow.ts)<br>[examples/legacy-starlark/agents/scale_test.star](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/agents/scale_test.star)<br>[docs/trace-emitter.md](../../../../sources/ThousandBirdsInc__chidori/docs/trace-emitter.md)<br>[crates/chidori-js/tests/async_gen.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori-js/tests/async_gen.rs) |
| security | 8 | [examples/multiplayer-review/policy_doc.ts](../../../../sources/ThousandBirdsInc__chidori/examples/multiplayer-review/policy_doc.ts)<br>[examples/legacy-starlark/agents/js_sandbox_demo.star](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/agents/js_sandbox_demo.star)<br>[examples/legacy-starlark/agents/python_sandbox_demo.star](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/agents/python_sandbox_demo.star)<br>[docs/sandbox-model.md](../../../../sources/ThousandBirdsInc__chidori/docs/sandbox-model.md)<br>[docs/typescript-migration-audit.md](../../../../sources/ThousandBirdsInc__chidori/docs/typescript-migration-audit.md)<br>[crates/chidori/src/mem_guard.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mem_guard.rs)<br>[crates/chidori/src/policy.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/policy.rs)<br>[crates/chidori/src/runtime/secret_env.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/runtime/secret_env.rs) |
| ci | 5 | [.github/workflows/ci.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/ci.yml)<br>[.github/workflows/js-benchmarks.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/js-benchmarks.yml)<br>[.github/workflows/release.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/release.yml)<br>[.github/workflows/test262-coverage.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/test262-coverage.yml)<br>[.github/workflows/test262.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/test262.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 45 | [README.md](../../../../sources/ThousandBirdsInc__chidori/README.md)<br>[sdk/typescript/README.md](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/README.md)<br>[sdk/python/README.md](../../../../sources/ThousandBirdsInc__chidori/sdk/python/README.md)<br>[examples/record-replay/README.md](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/README.md)<br>[examples/multiplayer-review/README.md](../../../../sources/ThousandBirdsInc__chidori/examples/multiplayer-review/README.md)<br>[examples/legacy-starlark/coding-agent/README.md](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/coding-agent/README.md)<br>[examples/interactive-pipeline/README.md](../../../../sources/ThousandBirdsInc__chidori/examples/interactive-pipeline/README.md)<br>[examples/branching/README.md](../../../../sources/ThousandBirdsInc__chidori/examples/branching/README.md) |
| config | 9 | [Cargo.lock](../../../../sources/ThousandBirdsInc__chidori/Cargo.lock)<br>[Cargo.toml](../../../../sources/ThousandBirdsInc__chidori/Cargo.toml)<br>[sdk/typescript/package.json](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/package.json)<br>[sdk/typescript/tsconfig.json](../../../../sources/ThousandBirdsInc__chidori/sdk/typescript/tsconfig.json)<br>[sdk/python/pyproject.toml](../../../../sources/ThousandBirdsInc__chidori/sdk/python/pyproject.toml)<br>[examples/record-replay/tsconfig.json](../../../../sources/ThousandBirdsInc__chidori/examples/record-replay/tsconfig.json)<br>[crates/test262-runner/Cargo.toml](../../../../sources/ThousandBirdsInc__chidori/crates/test262-runner/Cargo.toml)<br>[crates/chidori-js/Cargo.toml](../../../../sources/ThousandBirdsInc__chidori/crates/chidori-js/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 18 | [sdk/python/tests/test_session_api.py](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/test_session_api.py)<br>[sdk/python/tests/fixtures/approval.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/approval.ts)<br>[sdk/python/tests/fixtures/ask.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/ask.ts)<br>[sdk/python/tests/fixtures/signal_review.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/signal_review.ts)<br>[sdk/python/tests/fixtures/slow.ts](../../../../sources/ThousandBirdsInc__chidori/sdk/python/tests/fixtures/slow.ts)<br>[examples/legacy-starlark/agents/scale_test.star](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/agents/scale_test.star) |
| CI workflow | 5 | [.github/workflows/ci.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/ci.yml)<br>[.github/workflows/js-benchmarks.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/js-benchmarks.yml)<br>[.github/workflows/release.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/release.yml)<br>[.github/workflows/test262-coverage.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/test262-coverage.yml)<br>[.github/workflows/test262.yml](../../../../sources/ThousandBirdsInc__chidori/.github/workflows/test262.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 8 | [examples/multiplayer-review/policy_doc.ts](../../../../sources/ThousandBirdsInc__chidori/examples/multiplayer-review/policy_doc.ts)<br>[examples/legacy-starlark/agents/js_sandbox_demo.star](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/agents/js_sandbox_demo.star)<br>[examples/legacy-starlark/agents/python_sandbox_demo.star](../../../../sources/ThousandBirdsInc__chidori/examples/legacy-starlark/agents/python_sandbox_demo.star)<br>[docs/sandbox-model.md](../../../../sources/ThousandBirdsInc__chidori/docs/sandbox-model.md)<br>[docs/typescript-migration-audit.md](../../../../sources/ThousandBirdsInc__chidori/docs/typescript-migration-audit.md)<br>[crates/chidori/src/mem_guard.rs](../../../../sources/ThousandBirdsInc__chidori/crates/chidori/src/mem_guard.rs) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `crates/chidori/src/mcp/client.rs`, `crates/chidori/src/mcp/config.rs`, `crates/chidori/src/mcp/mod.rs`.
2. entrypoint를 따라 실행 흐름 확인: `sdk/typescript/src/index.ts`, `crates/test262-runner/src/main.rs`, `crates/chidori-js/src/lib.rs`.
3. agent/tool runtime 매핑: `sdk/typescript/src/agent.ts`, `examples/tools/reverse.ts`, `examples/tools/web_search.ts`.
4. retrieval/memory/indexing 확인: `sdk/typescript/src/index.ts`, `examples/legacy-starlark/agents/memory_demo.star`, `crates/chidori/src/runtime/memory.rs`.
5. test/eval 파일로 동작 검증: `sdk/python/tests/test_session_api.py`, `sdk/python/tests/fixtures/approval.ts`, `sdk/python/tests/fixtures/ask.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The agent framework where every run is durable, replayable, and resumable by default.. 핵심 구조 신호는 Rust, Cargo.toml, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
