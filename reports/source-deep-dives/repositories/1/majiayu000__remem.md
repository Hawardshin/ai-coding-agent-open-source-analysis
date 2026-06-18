# majiayu000/remem 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Persistent memory for Claude Code and Codex — single Rust binary, automatic context

## 요약

- 조사 단위: `sources/majiayu000__remem` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 750 files, 142 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/mcp/mod.rs, src/mcp/server.rs, src/mcp/types.rs이고, 의존성 단서는 claude, codex, mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | majiayu000/remem |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Rust |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/majiayu000__remem](../../../../sources/majiayu000__remem) |
| 기존 보고서 | [reports/korea-trending/repositories/majiayu000__remem.md](../../../korea-trending/repositories/majiayu000__remem.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 750 / 142 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .agents, .github, .remem, assets, docs, eval, npm, plugins, prompts, scripts, site, src, tests |
| 상위 확장자 | .rs: 508, .md: 114, .sql: 45, .json: 36, .js: 17, .py: 6, .txt: 5, .yml: 4, (none): 3, .css: 2, .gif: 2, .html: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 115 |
| docs | documentation surface | 61 |
| tests | validation surface | 12 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| eval | top-level component | 1 |
| npm | top-level component | 1 |
| plugins | top-level component | 1 |
| prompts | top-level component | 1 |
| scripts | top-level component | 1 |
| site | documentation surface | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp, codex |
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
| mcp | [src/mcp/mod.rs](../../../../sources/majiayu000__remem/src/mcp/mod.rs) | mcp signal |
| mcp | [src/mcp/server.rs](../../../../sources/majiayu000__remem/src/mcp/server.rs) | mcp signal |
| mcp | [src/mcp/types.rs](../../../../sources/majiayu000__remem/src/mcp/types.rs) | mcp signal |
| mcp | [src/mcp/server/commit_tools.rs](../../../../sources/majiayu000__remem/src/mcp/server/commit_tools.rs) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/majiayu000__remem/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/context.rs](../../../../sources/majiayu000__remem/src/context.rs) | agentRuntime signal |
| agentRuntime | [src/hook_stdin.rs](../../../../sources/majiayu000__remem/src/hook_stdin.rs) | agentRuntime signal |
| agentRuntime | [src/memory_candidate.rs](../../../../sources/majiayu000__remem/src/memory_candidate.rs) | agentRuntime signal |
| entrypoints | [src/main.rs](../../../../sources/majiayu000__remem/src/main.rs) | entrypoints signal |
| entrypoints | [src/api/server.rs](../../../../sources/majiayu000__remem/src/api/server.rs) | entrypoints signal |
| entrypoints | [plugins/remem/apps/remem/server.js](../../../../sources/majiayu000__remem/plugins/remem/apps/remem/server.js) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/majiayu000__remem/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [src/main.rs](../../../../sources/majiayu000__remem/src/main.rs)<br>[src/mcp/server.rs](../../../../sources/majiayu000__remem/src/mcp/server.rs)<br>[src/api/server.rs](../../../../sources/majiayu000__remem/src/api/server.rs)<br>[plugins/remem/apps/remem/server.js](../../../../sources/majiayu000__remem/plugins/remem/apps/remem/server.js)<br>[plugins/remem/apps/remem/server.test.js](../../../../sources/majiayu000__remem/plugins/remem/apps/remem/server.test.js)<br>[npm/remem/bin/remem.js](../../../../sources/majiayu000__remem/npm/remem/bin/remem.js) |
| agentRuntime | 185 | [AGENTS.md](../../../../sources/majiayu000__remem/AGENTS.md)<br>[src/context.rs](../../../../sources/majiayu000__remem/src/context.rs)<br>[src/hook_stdin.rs](../../../../sources/majiayu000__remem/src/hook_stdin.rs)<br>[src/memory_candidate.rs](../../../../sources/majiayu000__remem/src/memory_candidate.rs)<br>[src/memory.rs](../../../../sources/majiayu000__remem/src/memory.rs)<br>[src/summarize/summary_job/hook.rs](../../../../sources/majiayu000__remem/src/summarize/summary_job/hook.rs)<br>[src/retrieval/memory_search.rs](../../../../sources/majiayu000__remem/src/retrieval/memory_search.rs)<br>[src/retrieval/search/memory.rs](../../../../sources/majiayu000__remem/src/retrieval/search/memory.rs) |
| mcp | 17 | [src/mcp/mod.rs](../../../../sources/majiayu000__remem/src/mcp/mod.rs)<br>[src/mcp/server.rs](../../../../sources/majiayu000__remem/src/mcp/server.rs)<br>[src/mcp/types.rs](../../../../sources/majiayu000__remem/src/mcp/types.rs)<br>[src/mcp/server/commit_tools.rs](../../../../sources/majiayu000__remem/src/mcp/server/commit_tools.rs)<br>[src/mcp/server/context_tools.rs](../../../../sources/majiayu000__remem/src/mcp/server/context_tools.rs)<br>[src/mcp/server/errors.rs](../../../../sources/majiayu000__remem/src/mcp/server/errors.rs)<br>[src/mcp/server/raw_tools.rs](../../../../sources/majiayu000__remem/src/mcp/server/raw_tools.rs)<br>[src/mcp/server/runtime.rs](../../../../sources/majiayu000__remem/src/mcp/server/runtime.rs) |
| retrieval | 233 | [SPEC-memory-library-hardening-2026-05-16.md](../../../../sources/majiayu000__remem/SPEC-memory-library-hardening-2026-05-16.md)<br>[SPEC-memory-system-v2-no-compat-2026-05-08.md](../../../../sources/majiayu000__remem/SPEC-memory-system-v2-no-compat-2026-05-08.md)<br>[SPEC-memory-system-v2.1-revisions-2026-05-08.md](../../../../sources/majiayu000__remem/SPEC-memory-system-v2.1-revisions-2026-05-08.md)<br>[SPEC-raw-archive-vs-curated-memory-2026-04-22.md](../../../../sources/majiayu000__remem/SPEC-raw-archive-vs-curated-memory-2026-04-22.md)<br>[调研报告-claude-memory-mcp生态.md](../../../../sources/majiayu000__remem/调研报告-claude-memory-mcp生态.md)<br>[tests/vector_benchmark.rs](../../../../sources/majiayu000__remem/tests/vector_benchmark.rs)<br>[src/memory_candidate.rs](../../../../sources/majiayu000__remem/src/memory_candidate.rs)<br>[src/memory.rs](../../../../sources/majiayu000__remem/src/memory.rs) |
| spec | 67 | [SPEC-audit-remediation-2026-05-29.md](../../../../sources/majiayu000__remem/SPEC-audit-remediation-2026-05-29.md)<br>[SPEC-benchmark.md](../../../../sources/majiayu000__remem/SPEC-benchmark.md)<br>[SPEC-core-refactor-2026-03-26.md](../../../../sources/majiayu000__remem/SPEC-core-refactor-2026-03-26.md)<br>[SPEC-eval.md](../../../../sources/majiayu000__remem/SPEC-eval.md)<br>[SPEC-growth.md](../../../../sources/majiayu000__remem/SPEC-growth.md)<br>[SPEC-memory-library-hardening-2026-05-16.md](../../../../sources/majiayu000__remem/SPEC-memory-library-hardening-2026-05-16.md)<br>[SPEC-memory-system-v2-no-compat-2026-05-08.md](../../../../sources/majiayu000__remem/SPEC-memory-system-v2-no-compat-2026-05-08.md)<br>[SPEC-memory-system-v2.1-revisions-2026-05-08.md](../../../../sources/majiayu000__remem/SPEC-memory-system-v2.1-revisions-2026-05-08.md) |
| eval | 252 | [SPEC-audit-remediation-2026-05-29.md](../../../../sources/majiayu000__remem/SPEC-audit-remediation-2026-05-29.md)<br>[SPEC-benchmark.md](../../../../sources/majiayu000__remem/SPEC-benchmark.md)<br>[SPEC-core-refactor-2026-03-26.md](../../../../sources/majiayu000__remem/SPEC-core-refactor-2026-03-26.md)<br>[SPEC-eval.md](../../../../sources/majiayu000__remem/SPEC-eval.md)<br>[SPEC-growth.md](../../../../sources/majiayu000__remem/SPEC-growth.md)<br>[SPEC-memory-library-hardening-2026-05-16.md](../../../../sources/majiayu000__remem/SPEC-memory-library-hardening-2026-05-16.md)<br>[SPEC-memory-system-v2-no-compat-2026-05-08.md](../../../../sources/majiayu000__remem/SPEC-memory-system-v2-no-compat-2026-05-08.md)<br>[SPEC-memory-system-v2.1-revisions-2026-05-08.md](../../../../sources/majiayu000__remem/SPEC-memory-system-v2.1-revisions-2026-05-08.md) |
| security | 7 | [SECURITY.md](../../../../sources/majiayu000__remem/SECURITY.md)<br>[SPEC-audit-remediation-2026-05-29.md](../../../../sources/majiayu000__remem/SPEC-audit-remediation-2026-05-29.md)<br>[src/memory/scope_cleanup/audit.rs](../../../../sources/majiayu000__remem/src/memory/scope_cleanup/audit.rs)<br>[src/context/audit.rs](../../../../sources/majiayu000__remem/src/context/audit.rs)<br>[src/context/policy.rs](../../../../sources/majiayu000__remem/src/context/policy.rs)<br>[src/api/auth.rs](../../../../sources/majiayu000__remem/src/api/auth.rs)<br>[docs/audit-2026-05-29.md](../../../../sources/majiayu000__remem/docs/audit-2026-05-29.md) |
| ci | 6 | [scripts/ci/check_plugin_version_sync.py](../../../../sources/majiayu000__remem/scripts/ci/check_plugin_version_sync.py)<br>[scripts/ci/check_version_bump.py](../../../../sources/majiayu000__remem/scripts/ci/check_version_bump.py)<br>[scripts/ci/generate_plugin_release_manifest.py](../../../../sources/majiayu000__remem/scripts/ci/generate_plugin_release_manifest.py)<br>[.github/workflows/ci.yml](../../../../sources/majiayu000__remem/.github/workflows/ci.yml)<br>[.github/workflows/pages.yml](../../../../sources/majiayu000__remem/.github/workflows/pages.yml)<br>[.github/workflows/release.yml](../../../../sources/majiayu000__remem/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/majiayu000__remem/AGENTS.md)<br>[CLAUDE.md](../../../../sources/majiayu000__remem/CLAUDE.md) |
| docs | 97 | [README.md](../../../../sources/majiayu000__remem/README.md)<br>[README.zh-CN.md](../../../../sources/majiayu000__remem/README.zh-CN.md)<br>[site/favicon.svg](../../../../sources/majiayu000__remem/site/favicon.svg)<br>[site/index.html](../../../../sources/majiayu000__remem/site/index.html)<br>[site/assets/app.js](../../../../sources/majiayu000__remem/site/assets/app.js)<br>[site/assets/remem-demo.gif](../../../../sources/majiayu000__remem/site/assets/remem-demo.gif)<br>[site/assets/styles.css](../../../../sources/majiayu000__remem/site/assets/styles.css)<br>[plugins/remem/README.md](../../../../sources/majiayu000__remem/plugins/remem/README.md) |
| config | 3 | [Cargo.lock](../../../../sources/majiayu000__remem/Cargo.lock)<br>[Cargo.toml](../../../../sources/majiayu000__remem/Cargo.toml)<br>[npm/remem/package.json](../../../../sources/majiayu000__remem/npm/remem/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 252 | [SPEC-audit-remediation-2026-05-29.md](../../../../sources/majiayu000__remem/SPEC-audit-remediation-2026-05-29.md)<br>[SPEC-benchmark.md](../../../../sources/majiayu000__remem/SPEC-benchmark.md)<br>[SPEC-core-refactor-2026-03-26.md](../../../../sources/majiayu000__remem/SPEC-core-refactor-2026-03-26.md)<br>[SPEC-eval.md](../../../../sources/majiayu000__remem/SPEC-eval.md)<br>[SPEC-growth.md](../../../../sources/majiayu000__remem/SPEC-growth.md)<br>[SPEC-memory-library-hardening-2026-05-16.md](../../../../sources/majiayu000__remem/SPEC-memory-library-hardening-2026-05-16.md) |
| CI workflow | 6 | [scripts/ci/check_plugin_version_sync.py](../../../../sources/majiayu000__remem/scripts/ci/check_plugin_version_sync.py)<br>[scripts/ci/check_version_bump.py](../../../../sources/majiayu000__remem/scripts/ci/check_version_bump.py)<br>[scripts/ci/generate_plugin_release_manifest.py](../../../../sources/majiayu000__remem/scripts/ci/generate_plugin_release_manifest.py)<br>[.github/workflows/ci.yml](../../../../sources/majiayu000__remem/.github/workflows/ci.yml)<br>[.github/workflows/pages.yml](../../../../sources/majiayu000__remem/.github/workflows/pages.yml)<br>[.github/workflows/release.yml](../../../../sources/majiayu000__remem/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 7 | [SECURITY.md](../../../../sources/majiayu000__remem/SECURITY.md)<br>[SPEC-audit-remediation-2026-05-29.md](../../../../sources/majiayu000__remem/SPEC-audit-remediation-2026-05-29.md)<br>[src/memory/scope_cleanup/audit.rs](../../../../sources/majiayu000__remem/src/memory/scope_cleanup/audit.rs)<br>[src/context/audit.rs](../../../../sources/majiayu000__remem/src/context/audit.rs)<br>[src/context/policy.rs](../../../../sources/majiayu000__remem/src/context/policy.rs)<br>[src/api/auth.rs](../../../../sources/majiayu000__remem/src/api/auth.rs) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/majiayu000__remem/AGENTS.md)<br>[CLAUDE.md](../../../../sources/majiayu000__remem/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/mcp/mod.rs`, `src/mcp/server.rs`, `src/mcp/types.rs`.
2. entrypoint를 따라 실행 흐름 확인: `src/main.rs`, `src/mcp/server.rs`, `src/api/server.rs`.
3. agent/tool runtime 매핑: `AGENTS.md`, `src/context.rs`, `src/hook_stdin.rs`.
4. retrieval/memory/indexing 확인: `SPEC-memory-library-hardening-2026-05-16.md`, `SPEC-memory-system-v2-no-compat-2026-05-08.md`, `SPEC-memory-system-v2.1-revisions-2026-05-08.md`.
5. test/eval 파일로 동작 검증: `SPEC-audit-remediation-2026-05-29.md`, `SPEC-benchmark.md`, `SPEC-core-refactor-2026-03-26.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Persistent memory for Claude Code and Codex — single Rust binary, automatic context. 핵심 구조 신호는 Rust, Cargo.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
