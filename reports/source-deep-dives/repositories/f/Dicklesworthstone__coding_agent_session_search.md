# Dicklesworthstone/coding_agent_session_search 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Unified TUI and CLI to index and search your local coding agent session history across 11+ providers (Codex, Claude, Gemini, Cursor, Aider, etc.)

## 요약

- 조사 단위: `sources/Dicklesworthstone__coding_agent_session_search` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,608 files, 219 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/cli_index.rs, tests/e2e_index_tui.rs, tests/e2e_search_index.rs이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Dicklesworthstone/coding_agent_session_search |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Rust |
| Stars | 909 |
| Forks | 114 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Dicklesworthstone__coding_agent_session_search](../../../../sources/Dicklesworthstone__coding_agent_session_search) |
| 기존 보고서 | [reports/global-trending/repositories/Dicklesworthstone__coding_agent_session_search.md](../../../global-trending/repositories/Dicklesworthstone__coding_agent_session_search.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3608 / 219 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .beads, .cargo, .config, .github, benches, docs, fuzz, packaging, scripts, src, tests |
| 상위 확장자 | (none): 2324, .rs: 493, .md: 278, .json: 119, .golden: 61, .sh: 57, .js: 42, .jsonl: 37, .snap: 36, .ts: 30, .txt: 20, .log: 12 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 191 |
| docs | documentation surface | 16 |
| src | source boundary | 11 |
| .github | ci surface | 1 |
| benches | validation surface | 1 |
| fuzz | top-level component | 1 |
| packaging | top-level component | 1 |
| scripts | top-level component | 1 |


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
| retrieval | [tests/cli_index.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/cli_index.rs) | retrieval signal |
| retrieval | [tests/e2e_index_tui.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/e2e_index_tui.rs) | retrieval signal |
| retrieval | [tests/e2e_search_index.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/e2e_search_index.rs) | retrieval signal |
| retrieval | [tests/memory_tests.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/memory_tests.rs) | retrieval signal |
| entrypoints | [src/main.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/src/main.rs) | entrypoints signal |
| entrypoints | [src/bin/cass-pages-perf-bundle.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/src/bin/cass-pages-perf-bundle.rs) | entrypoints signal |
| docs | [README.md](../../../../sources/Dicklesworthstone__coding_agent_session_search/README.md) | docs signal |
| docs | [tests/fixtures/README.md](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/fixtures/README.md) | docs signal |
| docs | [tests/fixtures/sources/probe/README.md](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/fixtures/sources/probe/README.md) | docs signal |
| docs | [tests/fixtures/pages_verify/valid/site/.nojekyll](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/fixtures/pages_verify/valid/site/.nojekyll) | docs signal |
| eval | [tests/_probe_mot85.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/_probe_mot85.rs) | eval signal |
| eval | [tests/agent_detection_completeness.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/agent_detection_completeness.rs) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/main.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/src/main.rs)<br>[src/bin/cass-pages-perf-bundle.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/src/bin/cass-pages-perf-bundle.rs) |
| agentRuntime | 16 | [AGENTS.md](../../../../sources/Dicklesworthstone__coding_agent_session_search/AGENTS.md)<br>[SKILL.md](../../../../sources/Dicklesworthstone__coding_agent_session_search/SKILL.md)<br>[tests/agent_detection_completeness.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/agent_detection_completeness.rs)<br>[tests/agents_md_documents_commit_convention.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/agents_md_documents_commit_convention.rs)<br>[tests/memory_tests.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/memory_tests.rs)<br>[tests/performance/memory-profiler.test.js](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/performance/memory-profiler.test.js)<br>[tests/golden/metamorphic/agent_filter_breakdown.json](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/golden/metamorphic/agent_filter_breakdown.json)<br>[tests/fixtures/search_demo_data/agent_search.db](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/fixtures/search_demo_data/agent_search.db) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 54 | [tests/cli_index.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/cli_index.rs)<br>[tests/e2e_index_tui.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/e2e_index_tui.rs)<br>[tests/e2e_search_index.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/e2e_search_index.rs)<br>[tests/memory_tests.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/memory_tests.rs)<br>[tests/real_index_performance_e2e.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/real_index_performance_e2e.rs)<br>[tests/spec_index_idempotency.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/spec_index_idempotency.rs)<br>[tests/streaming_index.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/streaming_index.rs)<br>[tests/performance/memory-profiler.test.js](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/performance/memory-profiler.test.js) |
| spec | 70 | [tests/spec_aliases_resolve.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/spec_aliases_resolve.rs)<br>[tests/spec_auto_correction_contracts.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/spec_auto_correction_contracts.rs)<br>[tests/spec_bare_json_defaults_to_triage.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/spec_bare_json_defaults_to_triage.rs)<br>[tests/spec_connector_enumeration_completeness.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/spec_connector_enumeration_completeness.rs)<br>[tests/spec_crypto_roundtrip_proptest.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/spec_crypto_roundtrip_proptest.rs)<br>[tests/spec_diag_version_coherence.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/spec_diag_version_coherence.rs)<br>[tests/spec_exit_codes_documented.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/spec_exit_codes_documented.rs)<br>[tests/spec_export_html_envelopes.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/spec_export_html_envelopes.rs) |
| eval | 667 | [tests/_probe_mot85.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/_probe_mot85.rs)<br>[tests/agent_detection_completeness.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/agent_detection_completeness.rs)<br>[tests/agents_md_documents_commit_convention.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/agents_md_documents_commit_convention.rs)<br>[tests/analytics_cost_pricing_table_contract.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/analytics_cost_pricing_table_contract.rs)<br>[tests/atomic_swap_publish_crash_window.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/atomic_swap_publish_crash_window.rs)<br>[tests/bakeoff_harness.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/bakeoff_harness.rs)<br>[tests/canonicalize_equivalence.proptest-regressions](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/canonicalize_equivalence.proptest-regressions)<br>[tests/canonicalize_equivalence.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/canonicalize_equivalence.rs) |
| security | 39 | [audit.toml](../../../../sources/Dicklesworthstone__coding_agent_session_search/audit.toml)<br>[tests/html_export_sanitization_security.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/html_export_sanitization_security.rs)<br>[tests/indexer_memoization_policy.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/indexer_memoization_policy.rs)<br>[tests/scripts_rch_compliance.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/scripts_rch_compliance.rs)<br>[tests/secret_scan.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/secret_scan.rs)<br>[tests/security_nonce.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/security_nonce.rs)<br>[tests/fixtures/pages_verify/valid/site/auth.js](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/fixtures/pages_verify/valid/site/auth.js)<br>[tests/fixtures/pages_verify/unencrypted/site/auth.js](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/fixtures/pages_verify/unencrypted/site/auth.js) |
| ci | 13 | [.github/workflows/acfs-checksums-dispatch.yml](../../../../sources/Dicklesworthstone__coding_agent_session_search/.github/workflows/acfs-checksums-dispatch.yml)<br>[.github/workflows/bench.yml](../../../../sources/Dicklesworthstone__coding_agent_session_search/.github/workflows/bench.yml)<br>[.github/workflows/browser-tests.yml](../../../../sources/Dicklesworthstone__coding_agent_session_search/.github/workflows/browser-tests.yml)<br>[.github/workflows/ci.yml](../../../../sources/Dicklesworthstone__coding_agent_session_search/.github/workflows/ci.yml)<br>[.github/workflows/coverage.yml](../../../../sources/Dicklesworthstone__coding_agent_session_search/.github/workflows/coverage.yml)<br>[.github/workflows/fresh-clone-build.yml](../../../../sources/Dicklesworthstone__coding_agent_session_search/.github/workflows/fresh-clone-build.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/Dicklesworthstone__coding_agent_session_search/.github/workflows/fuzz.yml)<br>[.github/workflows/install-test.yml](../../../../sources/Dicklesworthstone__coding_agent_session_search/.github/workflows/install-test.yml) |
| container | 1 | [tests/docker/Dockerfile.sshd](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/docker/Dockerfile.sshd) |
| instruction | 1 | [AGENTS.md](../../../../sources/Dicklesworthstone__coding_agent_session_search/AGENTS.md) |
| docs | 374 | [README.md](../../../../sources/Dicklesworthstone__coding_agent_session_search/README.md)<br>[tests/fixtures/README.md](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/fixtures/README.md)<br>[tests/fixtures/sources/probe/README.md](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/fixtures/sources/probe/README.md)<br>[tests/fixtures/pages_verify/valid/site/.nojekyll](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/fixtures/pages_verify/valid/site/.nojekyll)<br>[tests/fixtures/pages_verify/valid/site/auth.js](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/fixtures/pages_verify/valid/site/auth.js)<br>[tests/fixtures/pages_verify/valid/site/config.json](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/fixtures/pages_verify/valid/site/config.json)<br>[tests/fixtures/pages_verify/valid/site/index.html](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/fixtures/pages_verify/valid/site/index.html)<br>[tests/fixtures/pages_verify/valid/site/integrity.json](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/fixtures/pages_verify/valid/site/integrity.json) |
| config | 7 | [Cargo.lock](../../../../sources/Dicklesworthstone__coding_agent_session_search/Cargo.lock)<br>[Cargo.toml](../../../../sources/Dicklesworthstone__coding_agent_session_search/Cargo.toml)<br>[tests/package.json](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/package.json)<br>[tests/tsconfig.json](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/tsconfig.json)<br>[tests/performance/package.json](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/performance/package.json)<br>[fuzz/Cargo.lock](../../../../sources/Dicklesworthstone__coding_agent_session_search/fuzz/Cargo.lock)<br>[fuzz/Cargo.toml](../../../../sources/Dicklesworthstone__coding_agent_session_search/fuzz/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 667 | [tests/_probe_mot85.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/_probe_mot85.rs)<br>[tests/agent_detection_completeness.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/agent_detection_completeness.rs)<br>[tests/agents_md_documents_commit_convention.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/agents_md_documents_commit_convention.rs)<br>[tests/analytics_cost_pricing_table_contract.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/analytics_cost_pricing_table_contract.rs)<br>[tests/atomic_swap_publish_crash_window.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/atomic_swap_publish_crash_window.rs)<br>[tests/bakeoff_harness.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/bakeoff_harness.rs) |
| CI workflow | 13 | [.github/workflows/acfs-checksums-dispatch.yml](../../../../sources/Dicklesworthstone__coding_agent_session_search/.github/workflows/acfs-checksums-dispatch.yml)<br>[.github/workflows/bench.yml](../../../../sources/Dicklesworthstone__coding_agent_session_search/.github/workflows/bench.yml)<br>[.github/workflows/browser-tests.yml](../../../../sources/Dicklesworthstone__coding_agent_session_search/.github/workflows/browser-tests.yml)<br>[.github/workflows/ci.yml](../../../../sources/Dicklesworthstone__coding_agent_session_search/.github/workflows/ci.yml)<br>[.github/workflows/coverage.yml](../../../../sources/Dicklesworthstone__coding_agent_session_search/.github/workflows/coverage.yml)<br>[.github/workflows/fresh-clone-build.yml](../../../../sources/Dicklesworthstone__coding_agent_session_search/.github/workflows/fresh-clone-build.yml) |
| 컨테이너/배포 | 1 | [tests/docker/Dockerfile.sshd](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/docker/Dockerfile.sshd) |
| 보안/정책 | 39 | [audit.toml](../../../../sources/Dicklesworthstone__coding_agent_session_search/audit.toml)<br>[tests/html_export_sanitization_security.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/html_export_sanitization_security.rs)<br>[tests/indexer_memoization_policy.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/indexer_memoization_policy.rs)<br>[tests/scripts_rch_compliance.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/scripts_rch_compliance.rs)<br>[tests/secret_scan.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/secret_scan.rs)<br>[tests/security_nonce.rs](../../../../sources/Dicklesworthstone__coding_agent_session_search/tests/security_nonce.rs) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/Dicklesworthstone__coding_agent_session_search/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/cli_index.rs`, `tests/e2e_index_tui.rs`, `tests/e2e_search_index.rs`.
2. entrypoint를 따라 실행 흐름 확인: `src/main.rs`, `src/bin/cass-pages-perf-bundle.rs`.
3. agent/tool runtime 매핑: `AGENTS.md`, `SKILL.md`, `tests/agent_detection_completeness.rs`.
4. retrieval/memory/indexing 확인: `tests/cli_index.rs`, `tests/e2e_index_tui.rs`, `tests/e2e_search_index.rs`.
5. test/eval 파일로 동작 검증: `tests/_probe_mot85.rs`, `tests/agent_detection_completeness.rs`, `tests/agents_md_documents_commit_convention.rs`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Unified TUI and CLI to index and search your local coding agent session history across 11+ providers Codex, Claude, Gemi. 핵심 구조 신호는 Rust, Cargo.toml, README.md, AGENTS.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
