# CodeBendKit/codeseek 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Rust-powered code intelligence CLI for AI coding agents. Builds call graphs and hybrid semantic search indexes (Dense + Sparse + RRF + Reranker) across 7 languages. Ships as native MCP tools for Claude Code and Codex CLI.

## 요약

- 조사 단위: `sources/CodeBendKit__codeseek` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 144 files, 40 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=rust-core/src/mcp/mod.rs, rust-core/src/mcp/server.rs, rust-core/src/mcp/tools.rs이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | CodeBendKit/codeseek |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 185 |
| Forks | 16 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/CodeBendKit__codeseek](../../../../sources/CodeBendKit__codeseek) |
| 기존 보고서 | [reports/global-trending/repositories/CodeBendKit__codeseek.md](../../../global-trending/repositories/CodeBendKit__codeseek.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 144 / 40 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, docs, Formula, rust-core, scripts, src |
| 상위 확장자 | .rs: 65, .json: 16, .md: 8, .ts: 8, .decl_json: 7, .py: 7, .skeleton: 7, .js: 6, .yml: 4, .sh: 3, .cpp: 2, .go: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 8 |
| src | source boundary | 2 |
| .github | ci surface | 1 |
| Formula | top-level component | 1 |
| rust-core | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| build | package.json | postinstall | node -e "var f='dist/install/download.js';require('fs').existsSync(f)&&require('./'+f)" \|\| true |
| utility | package.json | preuninstall | echo 'Run codeseek uninstall-hooks to clean up git hooks' |
| build | package.json | prepublishOnly | npm run build |
| entrypoint | package.json bin | codeseek.js | dist/bin/codeseek.js |


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
| mcp | [rust-core/src/mcp/mod.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/mcp/mod.rs) | mcp signal |
| mcp | [rust-core/src/mcp/server.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/mcp/server.rs) | mcp signal |
| mcp | [rust-core/src/mcp/tools.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/mcp/tools.rs) | mcp signal |
| agentRuntime | [rust-core/src/cli/runner.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/cli/runner.rs) | agentRuntime signal |
| agentRuntime | [docs/sandbox-设计思路.md](../../../../sources/CodeBendKit__codeseek/docs/sandbox-设计思路.md) | agentRuntime signal |
| entrypoints | [src/bin/codeseek.ts](../../../../sources/CodeBendKit__codeseek/src/bin/codeseek.ts) | entrypoints signal |
| entrypoints | [rust-core/tests/test_repos/simple_ts_project/src/main.ts](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/src/main.ts) | entrypoints signal |
| entrypoints | [rust-core/tests/test_repos/simple_rust_project/src/main.rs](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_rust_project/src/main.rs) | entrypoints signal |
| entrypoints | [rust-core/tests/test_repos/simple_python_project/main.py](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_python_project/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/CodeBendKit__codeseek/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/CodeBendKit__codeseek/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/CodeBendKit__codeseek/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 16 | [src/bin/codeseek.ts](../../../../sources/CodeBendKit__codeseek/src/bin/codeseek.ts)<br>[rust-core/tests/test_repos/simple_ts_project/src/main.ts](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/src/main.ts)<br>[rust-core/tests/test_repos/simple_rust_project/src/main.rs](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_rust_project/src/main.rs)<br>[rust-core/tests/test_repos/simple_python_project/main.py](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_python_project/main.py)<br>[rust-core/tests/fixtures/cases/ts/main.ts](../../../../sources/CodeBendKit__codeseek/rust-core/tests/fixtures/cases/ts/main.ts)<br>[rust-core/tests/fixtures/cases/ts/main.ts.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/fixtures/cases/ts/main.ts.json)<br>[rust-core/tests/fixtures/cases/rust/main.rs](../../../../sources/CodeBendKit__codeseek/rust-core/tests/fixtures/cases/rust/main.rs)<br>[rust-core/tests/fixtures/cases/rust/main.rs.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/fixtures/cases/rust/main.rs.json) |
| agentRuntime | 3 | [rust-core/src/mcp/tools.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/mcp/tools.rs)<br>[rust-core/src/cli/runner.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/cli/runner.rs)<br>[docs/sandbox-设计思路.md](../../../../sources/CodeBendKit__codeseek/docs/sandbox-设计思路.md) |
| mcp | 3 | [rust-core/src/mcp/mod.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/mcp/mod.rs)<br>[rust-core/src/mcp/server.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/mcp/server.rs)<br>[rust-core/src/mcp/tools.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/mcp/tools.rs) |
| retrieval | 4 | [rust-core/tests/test_repos/simple_js_project/index.js](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_js_project/index.js)<br>[rust-core/src/storage/tantivy_index.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/storage/tantivy_index.rs)<br>[rust-core/src/services/embedding_service.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/services/embedding_service.rs)<br>[rust-core/src/codegraph/graph.rs](../../../../sources/CodeBendKit__codeseek/rust-core/src/codegraph/graph.rs) |
| spec | 1 | [docs/ARCHITECTURE.md](../../../../sources/CodeBendKit__codeseek/docs/ARCHITECTURE.md) |
| eval | 68 | [rust-core/tests/core-ouptputs.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/core-ouptputs.json)<br>[rust-core/tests/run_functional_tests.sh](../../../../sources/CodeBendKit__codeseek/rust-core/tests/run_functional_tests.sh)<br>[rust-core/tests/test_functional.rs](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_functional.rs)<br>[rust-core/tests/test_semantic_search.py](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_semantic_search.py)<br>[rust-core/tests/test_repos/simple_ts_project/package.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/package.json)<br>[rust-core/tests/test_repos/simple_ts_project/tsconfig.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/tsconfig.json)<br>[rust-core/tests/test_repos/simple_ts_project/src/dataProcessor.ts](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/src/dataProcessor.ts)<br>[rust-core/tests/test_repos/simple_ts_project/src/main.ts](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/src/main.ts) |
| security | 1 | [docs/sandbox-设计思路.md](../../../../sources/CodeBendKit__codeseek/docs/sandbox-设计思路.md) |
| ci | 1 | [.github/workflows/release.yml](../../../../sources/CodeBendKit__codeseek/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/CodeBendKit__codeseek/CLAUDE.md) |
| docs | 6 | [README_ZH.md](../../../../sources/CodeBendKit__codeseek/README_ZH.md)<br>[README.md](../../../../sources/CodeBendKit__codeseek/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/CodeBendKit__codeseek/docs/ARCHITECTURE.md)<br>[docs/codeseek-cli-rewrite-plan.md](../../../../sources/CodeBendKit__codeseek/docs/codeseek-cli-rewrite-plan.md)<br>[docs/sandbox-设计思路.md](../../../../sources/CodeBendKit__codeseek/docs/sandbox-设计思路.md)<br>[docs/SETUP_GUIDE.md](../../../../sources/CodeBendKit__codeseek/docs/SETUP_GUIDE.md) |
| config | 9 | [package.json](../../../../sources/CodeBendKit__codeseek/package.json)<br>[tsconfig.json](../../../../sources/CodeBendKit__codeseek/tsconfig.json)<br>[rust-core/Cargo.lock](../../../../sources/CodeBendKit__codeseek/rust-core/Cargo.lock)<br>[rust-core/Cargo.toml](../../../../sources/CodeBendKit__codeseek/rust-core/Cargo.toml)<br>[rust-core/tests/test_repos/simple_ts_project/package.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/package.json)<br>[rust-core/tests/test_repos/simple_ts_project/tsconfig.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/tsconfig.json)<br>[rust-core/tests/test_repos/simple_rust_project/Cargo.lock](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_rust_project/Cargo.lock)<br>[rust-core/tests/test_repos/simple_rust_project/Cargo.toml](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_rust_project/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 68 | [rust-core/tests/core-ouptputs.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/core-ouptputs.json)<br>[rust-core/tests/run_functional_tests.sh](../../../../sources/CodeBendKit__codeseek/rust-core/tests/run_functional_tests.sh)<br>[rust-core/tests/test_functional.rs](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_functional.rs)<br>[rust-core/tests/test_semantic_search.py](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_semantic_search.py)<br>[rust-core/tests/test_repos/simple_ts_project/package.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/package.json)<br>[rust-core/tests/test_repos/simple_ts_project/tsconfig.json](../../../../sources/CodeBendKit__codeseek/rust-core/tests/test_repos/simple_ts_project/tsconfig.json) |
| CI workflow | 1 | [.github/workflows/release.yml](../../../../sources/CodeBendKit__codeseek/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [docs/sandbox-设计思路.md](../../../../sources/CodeBendKit__codeseek/docs/sandbox-设计思路.md) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/CodeBendKit__codeseek/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `rust-core/src/mcp/mod.rs`, `rust-core/src/mcp/server.rs`, `rust-core/src/mcp/tools.rs`.
2. entrypoint를 따라 실행 흐름 확인: `src/bin/codeseek.ts`, `rust-core/tests/test_repos/simple_ts_project/src/main.ts`, `rust-core/tests/test_repos/simple_rust_project/src/main.rs`.
3. agent/tool runtime 매핑: `rust-core/src/mcp/tools.rs`, `rust-core/src/cli/runner.rs`, `docs/sandbox-设计思路.md`.
4. retrieval/memory/indexing 확인: `rust-core/tests/test_repos/simple_js_project/index.js`, `rust-core/src/storage/tantivy_index.rs`, `rust-core/src/services/embedding_service.rs`.
5. test/eval 파일로 동작 검증: `rust-core/tests/core-ouptputs.json`, `rust-core/tests/run_functional_tests.sh`, `rust-core/tests/test_functional.rs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Rust powered code intelligence CLI for AI coding agents. Builds call graphs and hybrid semantic search indexes Dense + S. 핵심 구조 신호는 Rust, package.json, README.md, CLAUDE.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
