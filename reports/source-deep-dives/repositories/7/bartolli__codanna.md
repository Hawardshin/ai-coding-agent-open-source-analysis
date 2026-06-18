# bartolli/codanna 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 822 files, 201 directories.

## 요약

- 조사 단위: `sources/bartolli__codanna` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 821 files, 197 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 eval=tests/cli_tests.rs, tests/exploration_tests.rs, tests/integration_tests.rs이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 품질/평가 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | bartolli/codanna |
| 주제 | 평가/관측/품질 / 평가/관측/품질 |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/bartolli__codanna](../../../../sources/bartolli__codanna) |
| 기존 보고서 | [reports/clone-structures/bartolli__codanna.md](../../../clone-structures/bartolli__codanna.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 821 / 197 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, benches, contributing, examples, scripts, src, tests |
| 상위 확장자 | .rs: 420, .tsx: 96, .ts: 49, .md: 48, .json: 28, .js: 27, .go: 21, .sh: 17, .txt: 15, .py: 12, .kt: 9, .php: 9 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 71 |
| src | source boundary | 38 |
| examples/typescript | examples workspace | 11 |
| examples/javascript | examples workspace | 9 |
| examples/go | examples workspace | 3 |
| examples/python | examples workspace | 2 |
| examples/rust | examples workspace | 2 |
| .github | ci surface | 1 |
| benches | validation surface | 1 |
| contributing | top-level component | 1 |
| examples | top-level component | 1 |
| examples/kotlin | examples workspace | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
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
| eval | [tests/cli_tests.rs](../../../../sources/bartolli__codanna/tests/cli_tests.rs) | eval signal |
| eval | [tests/exploration_tests.rs](../../../../sources/bartolli__codanna/tests/exploration_tests.rs) | eval signal |
| eval | [tests/integration_tests.rs](../../../../sources/bartolli__codanna/tests/integration_tests.rs) | eval signal |
| eval | [tests/parsers_tests.rs](../../../../sources/bartolli__codanna/tests/parsers_tests.rs) | eval signal |
| entrypoints | [tests/fixtures/typescript_alias_test/src/app.ts](../../../../sources/bartolli__codanna/tests/fixtures/typescript_alias_test/src/app.ts) | entrypoints signal |
| entrypoints | [tests/fixtures/go/vendor_project/main.go](../../../../sources/bartolli__codanna/tests/fixtures/go/vendor_project/main.go) | entrypoints signal |
| entrypoints | [tests/fixtures/go/module_project/main.go](../../../../sources/bartolli__codanna/tests/fixtures/go/module_project/main.go) | entrypoints signal |
| entrypoints | [src/main.rs](../../../../sources/bartolli__codanna/src/main.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/bartolli__codanna/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/bartolli__codanna/Cargo.toml) | config signal |
| config | [tests/fixtures/typescript_alias_test/tsconfig.json](../../../../sources/bartolli__codanna/tests/fixtures/typescript_alias_test/tsconfig.json) | config signal |
| config | [tests/fixtures/go/go.mod](../../../../sources/bartolli__codanna/tests/fixtures/go/go.mod) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 10 | [tests/fixtures/typescript_alias_test/src/app.ts](../../../../sources/bartolli__codanna/tests/fixtures/typescript_alias_test/src/app.ts)<br>[tests/fixtures/go/vendor_project/main.go](../../../../sources/bartolli__codanna/tests/fixtures/go/vendor_project/main.go)<br>[tests/fixtures/go/module_project/main.go](../../../../sources/bartolli__codanna/tests/fixtures/go/module_project/main.go)<br>[src/main.rs](../../../../sources/bartolli__codanna/src/main.rs)<br>[examples/typescript/src/main.ts](../../../../sources/bartolli__codanna/examples/typescript/src/main.ts)<br>[examples/rust/multi_module/main.rs](../../../../sources/bartolli__codanna/examples/rust/multi_module/main.rs)<br>[examples/python/main.py](../../../../sources/bartolli__codanna/examples/python/main.py)<br>[examples/javascript/vanilla/src/app.js](../../../../sources/bartolli__codanna/examples/javascript/vanilla/src/app.js) |
| agentRuntime | 12 | [src/symbol/context.rs](../../../../sources/bartolli__codanna/src/symbol/context.rs)<br>[src/storage/memory.rs](../../../../sources/bartolli__codanna/src/storage/memory.rs)<br>[src/parsing/context.rs](../../../../sources/bartolli__codanna/src/parsing/context.rs)<br>[src/indexing/pipeline/stages/context.rs](../../../../sources/bartolli__codanna/src/indexing/pipeline/stages/context.rs)<br>[examples/typescript/react/src/hooks/use-config.ts](../../../../sources/bartolli__codanna/examples/typescript/react/src/hooks/use-config.ts)<br>[examples/typescript/react/src/hooks/use-media-query.tsx](../../../../sources/bartolli__codanna/examples/typescript/react/src/hooks/use-media-query.tsx)<br>[examples/typescript/react/src/hooks/useMatchMedia.ts](../../../../sources/bartolli__codanna/examples/typescript/react/src/hooks/useMatchMedia.ts)<br>[examples/kotlin/context_receiver.kt](../../../../sources/bartolli__codanna/examples/kotlin/context_receiver.kt) |
| mcp | 10 | [.mcp_stdio.json](../../../../sources/bartolli__codanna/.mcp_stdio.json)<br>[tests/integration/test_gdscript_mcp.rs](../../../../sources/bartolli__codanna/tests/integration/test_gdscript_mcp.rs)<br>[tests/integration/test_mcp_schema.rs](../../../../sources/bartolli__codanna/tests/integration/test_mcp_schema.rs)<br>[tests/cli/test_mcp_index_info_remote_status.rs](../../../../sources/bartolli__codanna/tests/cli/test_mcp_index_info_remote_status.rs)<br>[src/mcp/client.rs](../../../../sources/bartolli__codanna/src/mcp/client.rs)<br>[src/mcp/http_server.rs](../../../../sources/bartolli__codanna/src/mcp/http_server.rs)<br>[src/mcp/https_server.rs](../../../../sources/bartolli__codanna/src/mcp/https_server.rs)<br>[src/mcp/mod.rs](../../../../sources/bartolli__codanna/src/mcp/mod.rs) |
| retrieval | 16 | [tests/integration/embedding_model_comparison.rs](../../../../sources/bartolli__codanna/tests/integration/embedding_model_comparison.rs)<br>[tests/cli/test_mcp_index_info_remote_status.rs](../../../../sources/bartolli__codanna/tests/cli/test_mcp_index_info_remote_status.rs)<br>[src/vector/clustering.rs](../../../../sources/bartolli__codanna/src/vector/clustering.rs)<br>[src/vector/embedding.rs](../../../../sources/bartolli__codanna/src/vector/embedding.rs)<br>[src/vector/engine.rs](../../../../sources/bartolli__codanna/src/vector/engine.rs)<br>[src/vector/mod.rs](../../../../sources/bartolli__codanna/src/vector/mod.rs)<br>[src/vector/storage.rs](../../../../sources/bartolli__codanna/src/vector/storage.rs)<br>[src/vector/types.rs](../../../../sources/bartolli__codanna/src/vector/types.rs) |
| spec | 1 | [contributing/development/language-architecture.md](../../../../sources/bartolli__codanna/contributing/development/language-architecture.md) |
| eval | 213 | [tests/cli_tests.rs](../../../../sources/bartolli__codanna/tests/cli_tests.rs)<br>[tests/exploration_tests.rs](../../../../sources/bartolli__codanna/tests/exploration_tests.rs)<br>[tests/integration_tests.rs](../../../../sources/bartolli__codanna/tests/integration_tests.rs)<br>[tests/parsers_tests.rs](../../../../sources/bartolli__codanna/tests/parsers_tests.rs)<br>[tests/plugins_tests.rs](../../../../sources/bartolli__codanna/tests/plugins_tests.rs)<br>[tests/profiles_tests.rs](../../../../sources/bartolli__codanna/tests/profiles_tests.rs)<br>[tests/tui_tests.rs](../../../../sources/bartolli__codanna/tests/tui_tests.rs)<br>[tests/tui/progress_widgets.rs](../../../../sources/bartolli__codanna/tests/tui/progress_widgets.rs) |
| security | 52 | [tests/exploration/abi15_grammar_audit/c.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/c.rs)<br>[tests/exploration/abi15_grammar_audit/clojure.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/clojure.rs)<br>[tests/exploration/abi15_grammar_audit/cpp.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/cpp.rs)<br>[tests/exploration/abi15_grammar_audit/csharp.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/csharp.rs)<br>[tests/exploration/abi15_grammar_audit/gdscript.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/gdscript.rs)<br>[tests/exploration/abi15_grammar_audit/go.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/go.rs)<br>[tests/exploration/abi15_grammar_audit/helpers.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/helpers.rs)<br>[tests/exploration/abi15_grammar_audit/java.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/java.rs) |
| ci | 6 | [.github/workflows/autofix.yml](../../../../sources/bartolli__codanna/.github/workflows/autofix.yml)<br>[.github/workflows/brew-update.yml](../../../../sources/bartolli__codanna/.github/workflows/brew-update.yml)<br>[.github/workflows/full-test.yml](../../../../sources/bartolli__codanna/.github/workflows/full-test.yml)<br>[.github/workflows/pr-comment.yml](../../../../sources/bartolli__codanna/.github/workflows/pr-comment.yml)<br>[.github/workflows/quick-check.yml](../../../../sources/bartolli__codanna/.github/workflows/quick-check.yml)<br>[.github/workflows/release.yml](../../../../sources/bartolli__codanna/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md.example](../../../../sources/bartolli__codanna/CLAUDE.md.example) |
| docs | 6 | [README.md](../../../../sources/bartolli__codanna/README.md)<br>[tests/parsers/README.md](../../../../sources/bartolli__codanna/tests/parsers/README.md)<br>[examples/typescript/react/README.md](../../../../sources/bartolli__codanna/examples/typescript/react/README.md)<br>[contributing/README.md](../../../../sources/bartolli__codanna/contributing/README.md)<br>[contributing/tree-sitter/README.md](../../../../sources/bartolli__codanna/contributing/tree-sitter/README.md)<br>[contributing/development/README.md](../../../../sources/bartolli__codanna/contributing/development/README.md) |
| config | 11 | [Cargo.lock](../../../../sources/bartolli__codanna/Cargo.lock)<br>[Cargo.toml](../../../../sources/bartolli__codanna/Cargo.toml)<br>[tests/fixtures/typescript_alias_test/tsconfig.json](../../../../sources/bartolli__codanna/tests/fixtures/typescript_alias_test/tsconfig.json)<br>[tests/fixtures/go/go.mod](../../../../sources/bartolli__codanna/tests/fixtures/go/go.mod)<br>[tests/fixtures/go/vendor_project/go.mod](../../../../sources/bartolli__codanna/tests/fixtures/go/vendor_project/go.mod)<br>[tests/fixtures/go/module_project/go.mod](../../../../sources/bartolli__codanna/tests/fixtures/go/module_project/go.mod)<br>[examples/typescript/tsconfig.json](../../../../sources/bartolli__codanna/examples/typescript/tsconfig.json)<br>[examples/typescript/react/package.json](../../../../sources/bartolli__codanna/examples/typescript/react/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 213 | [tests/cli_tests.rs](../../../../sources/bartolli__codanna/tests/cli_tests.rs)<br>[tests/exploration_tests.rs](../../../../sources/bartolli__codanna/tests/exploration_tests.rs)<br>[tests/integration_tests.rs](../../../../sources/bartolli__codanna/tests/integration_tests.rs)<br>[tests/parsers_tests.rs](../../../../sources/bartolli__codanna/tests/parsers_tests.rs)<br>[tests/plugins_tests.rs](../../../../sources/bartolli__codanna/tests/plugins_tests.rs)<br>[tests/profiles_tests.rs](../../../../sources/bartolli__codanna/tests/profiles_tests.rs) |
| CI workflow | 6 | [.github/workflows/autofix.yml](../../../../sources/bartolli__codanna/.github/workflows/autofix.yml)<br>[.github/workflows/brew-update.yml](../../../../sources/bartolli__codanna/.github/workflows/brew-update.yml)<br>[.github/workflows/full-test.yml](../../../../sources/bartolli__codanna/.github/workflows/full-test.yml)<br>[.github/workflows/pr-comment.yml](../../../../sources/bartolli__codanna/.github/workflows/pr-comment.yml)<br>[.github/workflows/quick-check.yml](../../../../sources/bartolli__codanna/.github/workflows/quick-check.yml)<br>[.github/workflows/release.yml](../../../../sources/bartolli__codanna/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 52 | [tests/exploration/abi15_grammar_audit/c.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/c.rs)<br>[tests/exploration/abi15_grammar_audit/clojure.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/clojure.rs)<br>[tests/exploration/abi15_grammar_audit/cpp.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/cpp.rs)<br>[tests/exploration/abi15_grammar_audit/csharp.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/csharp.rs)<br>[tests/exploration/abi15_grammar_audit/gdscript.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/gdscript.rs)<br>[tests/exploration/abi15_grammar_audit/go.rs](../../../../sources/bartolli__codanna/tests/exploration/abi15_grammar_audit/go.rs) |
| 에이전트 지시문 | 1 | [CLAUDE.md.example](../../../../sources/bartolli__codanna/CLAUDE.md.example) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/cli_tests.rs`, `tests/exploration_tests.rs`, `tests/integration_tests.rs`.
2. entrypoint를 따라 실행 흐름 확인: `tests/fixtures/typescript_alias_test/src/app.ts`, `tests/fixtures/go/vendor_project/main.go`, `tests/fixtures/go/module_project/main.go`.
3. agent/tool runtime 매핑: `src/symbol/context.rs`, `src/storage/memory.rs`, `src/parsing/context.rs`.
4. retrieval/memory/indexing 확인: `tests/integration/embedding_model_comparison.rs`, `tests/cli/test_mcp_index_info_remote_status.rs`, `src/vector/clustering.rs`.
5. test/eval 파일로 동작 검증: `tests/cli_tests.rs`, `tests/exploration_tests.rs`, `tests/integration_tests.rs`.

## 기존 레포 인사이트

평가/관측/품질 관점에서 Local clone structure analysis 822 files, 201 directories.. 핵심 구조 신호는 Cargo.toml, README.md, LICENSE, mcp, tests, ci이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 평가/관측/품질 레포입니다. 활용 관점은 품질/평가 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
