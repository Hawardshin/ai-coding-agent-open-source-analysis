# doorman11991/smallcode 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 290 files, 55 directories.

## 요약

- 조사 단위: `sources/Doorman11991__smallcode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 290 files, 55 directories, depth score 110, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp.json, src/tools/mcp_client.js, marrow/src/tools/mcp_client.ms이고, 의존성 단서는 express, playwright, puppeteer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | doorman11991/smallcode |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/Doorman11991__smallcode](../../../../sources/Doorman11991__smallcode) |
| 기존 보고서 | [reports/clone-structures/doorman11991__smallcode.md](../../../clone-structures/doorman11991__smallcode.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 290 / 55 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, .smallcode, bench, bin, docs, extensions, knowledge, marrow, profiles, scripts, skills, src, test, tmpsmallcode-artifactslinux |
| 상위 확장자 | .js: 146, .ms: 67, .ts: 26, .md: 21, .json: 8, .marrow: 7, (none): 5, .toml: 4, .example: 1, .gz: 1, .ps1: 1, .py: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 40 |
| docs | documentation surface | 3 |
| .github | ci surface | 1 |
| bench | validation surface | 1 |
| bin | top-level component | 1 |
| extensions | top-level component | 1 |
| knowledge | top-level component | 1 |
| marrow | top-level component | 1 |
| profiles | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| test | validation surface | 1 |
| tmpsmallcode-artifactslinux | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | node build.js |
| serve-dev | package.json | start | node bin/smallcode.js |
| serve-dev | package.json | dev | node bin/smallcode.js |
| utility | package.json | eval | node bin/smallcode.js --eval classify_accuracy |
| utility | package.json | mcp | node bin/smallcode.js --mcp |
| utility | package.json | bench | node bench/harness.js --suite smoke |
| utility | package.json | bench:smoke | node bench/harness.js --suite smoke |
| utility | package.json | bench:polyglot | node bench/harness.js --suite polyglot-mini |
| utility | package.json | bench:tools | node bench/harness.js --suite tool-use |
| utility | package.json | bench:list | node bench/harness.js --list |
| utility | package.json | bench:diff | node bench/diff.js |
| test | package.json | test | node --test test/*.test.js |
| test | package.json | test:e2e | node test/e2e_smoke.js |
| test | package.json | test:e2e:offline | node test/e2e_offline.js |
| utility | package.json | rag:index | node bin/rag-index.js |
| entrypoint | package.json bin | smallcode.js | bin/smallcode.js |
| entrypoint | package.json bin | smallcode.js | bin/smallcode.js |
| entrypoint | package.json bin | init.js | bin/init.js |
| entrypoint | package.json bin | rag-index.js | bin/rag-index.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright, puppeteer |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [mcp.json](../../../../sources/Doorman11991__smallcode/mcp.json) | mcp signal |
| mcp | [src/tools/mcp_client.js](../../../../sources/Doorman11991__smallcode/src/tools/mcp_client.js) | mcp signal |
| mcp | [marrow/src/tools/mcp_client.ms](../../../../sources/Doorman11991__smallcode/marrow/src/tools/mcp_client.ms) | mcp signal |
| mcp | [marrow/src/core/mcp_server.ms](../../../../sources/Doorman11991__smallcode/marrow/src/core/mcp_server.ms) | mcp signal |
| agentRuntime | [test/skills.test.js](../../../../sources/Doorman11991__smallcode/test/skills.test.js) | agentRuntime signal |
| agentRuntime | [src/tools/dedup.js](../../../../sources/Doorman11991__smallcode/src/tools/dedup.js) | agentRuntime signal |
| agentRuntime | [src/tools/file_tree.js](../../../../sources/Doorman11991__smallcode/src/tools/file_tree.js) | agentRuntime signal |
| agentRuntime | [src/tools/hybrid_search.js](../../../../sources/Doorman11991__smallcode/src/tools/hybrid_search.js) | agentRuntime signal |
| entrypoints | [bin/bonescript_guide.js](../../../../sources/Doorman11991__smallcode/bin/bonescript_guide.js) | entrypoints signal |
| entrypoints | [bin/cognition_adapter.js](../../../../sources/Doorman11991__smallcode/bin/cognition_adapter.js) | entrypoints signal |
| entrypoints | [bin/commands.js](../../../../sources/Doorman11991__smallcode/bin/commands.js) | entrypoints signal |
| entrypoints | [bin/config.js](../../../../sources/Doorman11991__smallcode/bin/config.js) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 24 | [bin/bonescript_guide.js](../../../../sources/Doorman11991__smallcode/bin/bonescript_guide.js)<br>[bin/cognition_adapter.js](../../../../sources/Doorman11991__smallcode/bin/cognition_adapter.js)<br>[bin/commands.js](../../../../sources/Doorman11991__smallcode/bin/commands.js)<br>[bin/config.js](../../../../sources/Doorman11991__smallcode/bin/config.js)<br>[bin/escalation.js](../../../../sources/Doorman11991__smallcode/bin/escalation.js)<br>[bin/eval_runner.js](../../../../sources/Doorman11991__smallcode/bin/eval_runner.js)<br>[bin/executor.js](../../../../sources/Doorman11991__smallcode/bin/executor.js)<br>[bin/features_adapter.js](../../../../sources/Doorman11991__smallcode/bin/features_adapter.js) |
| agentRuntime | 63 | [test/skills.test.js](../../../../sources/Doorman11991__smallcode/test/skills.test.js)<br>[src/tools/dedup.js](../../../../sources/Doorman11991__smallcode/src/tools/dedup.js)<br>[src/tools/file_tree.js](../../../../sources/Doorman11991__smallcode/src/tools/file_tree.js)<br>[src/tools/hybrid_search.js](../../../../sources/Doorman11991__smallcode/src/tools/hybrid_search.js)<br>[src/tools/liquid_tool_parser.js](../../../../sources/Doorman11991__smallcode/src/tools/liquid_tool_parser.js)<br>[src/tools/mcp_client.js](../../../../sources/Doorman11991__smallcode/src/tools/mcp_client.js)<br>[src/tools/read_tracker.js](../../../../sources/Doorman11991__smallcode/src/tools/read_tracker.js)<br>[src/tools/run_tests.js](../../../../sources/Doorman11991__smallcode/src/tools/run_tests.js) |
| mcp | 5 | [mcp.json](../../../../sources/Doorman11991__smallcode/mcp.json)<br>[src/tools/mcp_client.js](../../../../sources/Doorman11991__smallcode/src/tools/mcp_client.js)<br>[marrow/src/tools/mcp_client.ms](../../../../sources/Doorman11991__smallcode/marrow/src/tools/mcp_client.ms)<br>[marrow/src/core/mcp_server.ms](../../../../sources/Doorman11991__smallcode/marrow/src/core/mcp_server.ms)<br>[bin/mcp_bridge.js](../../../../sources/Doorman11991__smallcode/bin/mcp_bridge.js) |
| retrieval | 25 | [test/rag.test.js](../../../../sources/Doorman11991__smallcode/test/rag.test.js)<br>[src/session/dependency_graph.js](../../../../sources/Doorman11991__smallcode/src/session/dependency_graph.js)<br>[src/rag/curated_repos.json](../../../../sources/Doorman11991__smallcode/src/rag/curated_repos.json)<br>[src/rag/index_store.js](../../../../sources/Doorman11991__smallcode/src/rag/index_store.js)<br>[src/rag/retriever.js](../../../../sources/Doorman11991__smallcode/src/rag/retriever.js)<br>[src/memory/evidence.js](../../../../sources/Doorman11991__smallcode/src/memory/evidence.js)<br>[src/knowledge/loader.js](../../../../sources/Doorman11991__smallcode/src/knowledge/loader.js)<br>[src/compiled/providers/index.js](../../../../sources/Doorman11991__smallcode/src/compiled/providers/index.js) |
| spec | 1 | [ARCHITECTURE.md](../../../../sources/Doorman11991__smallcode/ARCHITECTURE.md) |
| eval | 39 | [test/bench_diff.test.js](../../../../sources/Doorman11991__smallcode/test/bench_diff.test.js)<br>[test/config_normalize.test.js](../../../../sources/Doorman11991__smallcode/test/config_normalize.test.js)<br>[test/contract.test.js](../../../../sources/Doorman11991__smallcode/test/contract.test.js)<br>[test/dedup_idempotent.test.js](../../../../sources/Doorman11991__smallcode/test/dedup_idempotent.test.js)<br>[test/e2e_offline.js](../../../../sources/Doorman11991__smallcode/test/e2e_offline.js)<br>[test/e2e_smoke.js](../../../../sources/Doorman11991__smallcode/test/e2e_smoke.js)<br>[test/hybrid_search.test.js](../../../../sources/Doorman11991__smallcode/test/hybrid_search.test.js)<br>[test/liquid_tool_parser.test.js](../../../../sources/Doorman11991__smallcode/test/liquid_tool_parser.test.js) |
| security | 12 | [SECURITY.md](../../../../sources/Doorman11991__smallcode/SECURITY.md)<br>[test/read_guard.test.js](../../../../sources/Doorman11991__smallcode/test/read_guard.test.js)<br>[test/ssrf_guard.test.js](../../../../sources/Doorman11991__smallcode/test/ssrf_guard.test.js)<br>[src/session/contract_guard.js](../../../../sources/Doorman11991__smallcode/src/session/contract_guard.js)<br>[src/session/read_guard.js](../../../../sources/Doorman11991__smallcode/src/session/read_guard.js)<br>[src/security/sanitize.js](../../../../sources/Doorman11991__smallcode/src/security/sanitize.js)<br>[src/compiled/providers/ssrf_guard.js](../../../../sources/Doorman11991__smallcode/src/compiled/providers/ssrf_guard.js)<br>[src/compiled/providers/ssrf_guard.ts](../../../../sources/Doorman11991__smallcode/src/compiled/providers/ssrf_guard.ts) |
| ci | 1 | [.github/workflows/build.yml](../../../../sources/Doorman11991__smallcode/.github/workflows/build.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 6 | [README_zh-CN.md](../../../../sources/Doorman11991__smallcode/README_zh-CN.md)<br>[README.md](../../../../sources/Doorman11991__smallcode/README.md)<br>[skills/README.md](../../../../sources/Doorman11991__smallcode/skills/README.md)<br>[knowledge/README.md](../../../../sources/Doorman11991__smallcode/knowledge/README.md)<br>[docs/rag-harness.md](../../../../sources/Doorman11991__smallcode/docs/rag-harness.md)<br>[bench/README.md](../../../../sources/Doorman11991__smallcode/bench/README.md) |
| config | 2 | [package.json](../../../../sources/Doorman11991__smallcode/package.json)<br>[src/compiled/tsconfig.json](../../../../sources/Doorman11991__smallcode/src/compiled/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 39 | [test/bench_diff.test.js](../../../../sources/Doorman11991__smallcode/test/bench_diff.test.js)<br>[test/config_normalize.test.js](../../../../sources/Doorman11991__smallcode/test/config_normalize.test.js)<br>[test/contract.test.js](../../../../sources/Doorman11991__smallcode/test/contract.test.js)<br>[test/dedup_idempotent.test.js](../../../../sources/Doorman11991__smallcode/test/dedup_idempotent.test.js)<br>[test/e2e_offline.js](../../../../sources/Doorman11991__smallcode/test/e2e_offline.js)<br>[test/e2e_smoke.js](../../../../sources/Doorman11991__smallcode/test/e2e_smoke.js) |
| CI workflow | 1 | [.github/workflows/build.yml](../../../../sources/Doorman11991__smallcode/.github/workflows/build.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 12 | [SECURITY.md](../../../../sources/Doorman11991__smallcode/SECURITY.md)<br>[test/read_guard.test.js](../../../../sources/Doorman11991__smallcode/test/read_guard.test.js)<br>[test/ssrf_guard.test.js](../../../../sources/Doorman11991__smallcode/test/ssrf_guard.test.js)<br>[src/session/contract_guard.js](../../../../sources/Doorman11991__smallcode/src/session/contract_guard.js)<br>[src/session/read_guard.js](../../../../sources/Doorman11991__smallcode/src/session/read_guard.js)<br>[src/security/sanitize.js](../../../../sources/Doorman11991__smallcode/src/security/sanitize.js) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp.json`, `src/tools/mcp_client.js`, `marrow/src/tools/mcp_client.ms`.
2. entrypoint를 따라 실행 흐름 확인: `bin/bonescript_guide.js`, `bin/cognition_adapter.js`, `bin/commands.js`.
3. agent/tool runtime 매핑: `test/skills.test.js`, `src/tools/dedup.js`, `src/tools/file_tree.js`.
4. retrieval/memory/indexing 확인: `test/rag.test.js`, `src/session/dependency_graph.js`, `src/rag/curated_repos.json`.
5. test/eval 파일로 동작 검증: `test/bench_diff.test.js`, `test/config_normalize.test.js`, `test/contract.test.js`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 290 files, 55 directories.. 핵심 구조 신호는 package.json, README.md, LICENSE, tests, ci, docs이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
