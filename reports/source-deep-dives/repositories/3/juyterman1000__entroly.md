# juyterman1000/entroly 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Cut your Claude / OpenAI / Gemini bill 70–95% on AI coding. Local proxy that compresses context, keeps provider caches hot, and verifies LLM output ($0 hallucination guard). Drop-in for Cursor, Claude Code, Codex, Aider + 34 more and custom providers — 30s, no code changes

## 요약

- 조사 단위: `sources/juyterman1000__entroly` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 672 files, 60 directories, depth score 124, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, run_real_mcp_test.py, tests/test_mcp_protocol.py이고, 의존성 단서는 claude, mcp, express, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | juyterman1000/entroly |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 413 |
| Forks | 64 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/juyterman1000__entroly](../../../../sources/juyterman1000__entroly) |
| 기존 보고서 | [reports/global-trending/repositories/juyterman1000__entroly.md](../../../global-trending/repositories/juyterman1000__entroly.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 672 / 60 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .claude, .claude-plugin, .devcontainer, .githooks, .github, .kiro, algorithms, bench, benchmarks, cookbook, docs, entroly, entroly-core, entroly-qccr, entroly-wasm, examples, packaging, proofs, research, scripts |
| 상위 확장자 | .py: 344, .rs: 84, .md: 66, .json: 52, .js: 37, (none): 18, .html: 12, .svg: 9, .yml: 9, .jsonl: 8, .toml: 7, .sh: 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 47 |
| docs | documentation surface | 40 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| algorithms | top-level component | 1 |
| bench | validation surface | 1 |
| benchmarks | validation surface | 1 |
| cookbook | top-level component | 1 |
| entroly | top-level component | 1 |
| entroly-core | top-level component | 1 |
| entroly-qccr | top-level component | 1 |
| entroly-wasm | top-level component | 1 |
| examples | top-level component | 1 |
| packaging | top-level component | 1 |
| proofs | top-level component | 1 |
| research | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | entroly | entroly |
| utility | pyproject.toml | entroly-py | entroly-py |
| container | pyproject.toml | entroly-docker | entroly-docker |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/juyterman1000__entroly/.mcp.json) | mcp signal |
| mcp | [run_real_mcp_test.py](../../../../sources/juyterman1000__entroly/run_real_mcp_test.py) | mcp signal |
| mcp | [tests/test_mcp_protocol.py](../../../../sources/juyterman1000__entroly/tests/test_mcp_protocol.py) | mcp signal |
| mcp | [tests/test_mcp_startup.py](../../../../sources/juyterman1000__entroly/tests/test_mcp_startup.py) | mcp signal |
| agentRuntime | [entroly-wasm/js/context_receipts.js](../../../../sources/juyterman1000__entroly/entroly-wasm/js/context_receipts.js) | agentRuntime signal |
| agentRuntime | [entroly-wasm/js/skills.js](../../../../sources/juyterman1000__entroly/entroly-wasm/js/skills.js) | agentRuntime signal |
| agentRuntime | [entroly-core/src/context_receipts.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/context_receipts.rs) | agentRuntime signal |
| agentRuntime | [entroly-core/src/memory/consolidation.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/consolidation.rs) | agentRuntime signal |
| entrypoints | [entroly-wasm/js/server.js](../../../../sources/juyterman1000__entroly/entroly-wasm/js/server.js) | entrypoints signal |
| entrypoints | [entroly-wasm/bin/entroly-wasm.js](../../../../sources/juyterman1000__entroly/entroly-wasm/bin/entroly-wasm.js) | entrypoints signal |
| entrypoints | [entroly-core/src/bin/entroly-rs.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/bin/entroly-rs.rs) | entrypoints signal |
| entrypoints | [entroly/__main__.py](../../../../sources/juyterman1000__entroly/entroly/__main__.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [entroly-wasm/js/server.js](../../../../sources/juyterman1000__entroly/entroly-wasm/js/server.js)<br>[entroly-wasm/bin/entroly-wasm.js](../../../../sources/juyterman1000__entroly/entroly-wasm/bin/entroly-wasm.js)<br>[entroly-core/src/bin/entroly-rs.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/bin/entroly-rs.rs)<br>[entroly/__main__.py](../../../../sources/juyterman1000__entroly/entroly/__main__.py)<br>[entroly/server.py](../../../../sources/juyterman1000__entroly/entroly/server.py)<br>[entroly/npm-alias/bin/entroly.js](../../../../sources/juyterman1000__entroly/entroly/npm-alias/bin/entroly.js)<br>[entroly/npm/bin/entroly-mcp.js](../../../../sources/juyterman1000__entroly/entroly/npm/bin/entroly-mcp.js)<br>[entroly/bin/README.md](../../../../sources/juyterman1000__entroly/entroly/bin/README.md) |
| agentRuntime | 31 | [entroly-wasm/js/context_receipts.js](../../../../sources/juyterman1000__entroly/entroly-wasm/js/context_receipts.js)<br>[entroly-wasm/js/skills.js](../../../../sources/juyterman1000__entroly/entroly-wasm/js/skills.js)<br>[entroly-core/src/context_receipts.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/context_receipts.rs)<br>[entroly-core/src/memory/consolidation.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/consolidation.rs)<br>[entroly-core/src/memory/episode.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/episode.rs)<br>[entroly-core/src/memory/kanerva.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/kanerva.rs)<br>[entroly-core/src/memory/lsh.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/lsh.rs)<br>[entroly-core/src/memory/mod.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/mod.rs) |
| mcp | 7 | [.mcp.json](../../../../sources/juyterman1000__entroly/.mcp.json)<br>[run_real_mcp_test.py](../../../../sources/juyterman1000__entroly/run_real_mcp_test.py)<br>[tests/test_mcp_protocol.py](../../../../sources/juyterman1000__entroly/tests/test_mcp_protocol.py)<br>[tests/test_mcp_startup.py](../../../../sources/juyterman1000__entroly/tests/test_mcp_startup.py)<br>[entroly/integrate_entroly_mcp.py](../../../../sources/juyterman1000__entroly/entroly/integrate_entroly_mcp.py)<br>[entroly/npm/bin/entroly-mcp.js](../../../../sources/juyterman1000__entroly/entroly/npm/bin/entroly-mcp.js)<br>[docs/mcp-server-guide.html](../../../../sources/juyterman1000__entroly/docs/mcp-server-guide.html) |
| retrieval | 19 | [scripts/vault_graph_cli.py](../../../../sources/juyterman1000__entroly/scripts/vault_graph_cli.py)<br>[entroly-wasm/index.d.ts](../../../../sources/juyterman1000__entroly/entroly-wasm/index.d.ts)<br>[entroly-wasm/index.js](../../../../sources/juyterman1000__entroly/entroly-wasm/index.js)<br>[entroly-wasm/js/auto_index.js](../../../../sources/juyterman1000__entroly/entroly-wasm/js/auto_index.js)<br>[entroly-core/src/memory/consolidation.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/consolidation.rs)<br>[entroly-core/src/memory/episode.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/episode.rs)<br>[entroly-core/src/memory/kanerva.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/kanerva.rs)<br>[entroly-core/src/memory/lsh.rs](../../../../sources/juyterman1000__entroly/entroly-core/src/memory/lsh.rs) |
| spec | 1 | [docs/architecture.md](../../../../sources/juyterman1000__entroly/docs/architecture.md) |
| eval | 186 | [run_real_mcp_test.py](../../../../sources/juyterman1000__entroly/run_real_mcp_test.py)<br>[run_real_proxy_test.py](../../../../sources/juyterman1000__entroly/run_real_proxy_test.py)<br>[tests/_check_learning.py](../../../../sources/juyterman1000__entroly/tests/_check_learning.py)<br>[tests/_check_vault.py](../../../../sources/juyterman1000__entroly/tests/_check_vault.py)<br>[tests/_pilot.py](../../../../sources/juyterman1000__entroly/tests/_pilot.py)<br>[tests/_proxy_e2e.py](../../../../sources/juyterman1000__entroly/tests/_proxy_e2e.py)<br>[tests/_run_bench.py](../../../../sources/juyterman1000__entroly/tests/_run_bench.py)<br>[tests/_run_full.py](../../../../sources/juyterman1000__entroly/tests/_run_full.py) |
| security | 21 | [SECURITY.md](../../../../sources/juyterman1000__entroly/SECURITY.md)<br>[tests/test_auth.py](../../../../sources/juyterman1000__entroly/tests/test_auth.py)<br>[tests/test_cli_audit.py](../../../../sources/juyterman1000__entroly/tests/test_cli_audit.py)<br>[tests/test_compliance_metadata.py](../../../../sources/juyterman1000__entroly/tests/test_compliance_metadata.py)<br>[tests/test_recovery_policy_benchmark.py](../../../../sources/juyterman1000__entroly/tests/test_recovery_policy_benchmark.py)<br>[tests/test_security_hardening.py](../../../../sources/juyterman1000__entroly/tests/test_security_hardening.py)<br>[tests/test_subscription_guard.py](../../../../sources/juyterman1000__entroly/tests/test_subscription_guard.py)<br>[entroly-wasm/test_security.js](../../../../sources/juyterman1000__entroly/entroly-wasm/test_security.js) |
| ci | 7 | [.github/workflows/benchmark.yml](../../../../sources/juyterman1000__entroly/.github/workflows/benchmark.yml)<br>[.github/workflows/ci.yml](../../../../sources/juyterman1000__entroly/.github/workflows/ci.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/juyterman1000__entroly/.github/workflows/docker-publish.yml)<br>[.github/workflows/entroly-cost-check.yml](../../../../sources/juyterman1000__entroly/.github/workflows/entroly-cost-check.yml)<br>[.github/workflows/entroly-publish.yml](../../../../sources/juyterman1000__entroly/.github/workflows/entroly-publish.yml)<br>[.github/workflows/publish-core-wheels.yml](../../../../sources/juyterman1000__entroly/.github/workflows/publish-core-wheels.yml)<br>[.github/workflows/release-binary.yml](../../../../sources/juyterman1000__entroly/.github/workflows/release-binary.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/juyterman1000__entroly/docker-compose.yml)<br>[Dockerfile](../../../../sources/juyterman1000__entroly/Dockerfile)<br>[Dockerfile.entroly](../../../../sources/juyterman1000__entroly/Dockerfile.entroly) |
| instruction | 1 | [CLAUDE.md](../../../../sources/juyterman1000__entroly/CLAUDE.md) |
| docs | 76 | [README.md](../../../../sources/juyterman1000__entroly/README.md)<br>[research/README.md](../../../../sources/juyterman1000__entroly/research/README.md)<br>[proofs/README.md](../../../../sources/juyterman1000__entroly/proofs/README.md)<br>[proofs/knapsack/README.md](../../../../sources/juyterman1000__entroly/proofs/knapsack/README.md)<br>[proofs/bipt/README.md](../../../../sources/juyterman1000__entroly/proofs/bipt/README.md)<br>[packaging/scoop/README.md](../../../../sources/juyterman1000__entroly/packaging/scoop/README.md)<br>[packaging/nix/README.md](../../../../sources/juyterman1000__entroly/packaging/nix/README.md)<br>[packaging/homebrew/README.md](../../../../sources/juyterman1000__entroly/packaging/homebrew/README.md) |
| config | 12 | [pyproject.toml](../../../../sources/juyterman1000__entroly/pyproject.toml)<br>[entroly-wasm/Cargo.lock](../../../../sources/juyterman1000__entroly/entroly-wasm/Cargo.lock)<br>[entroly-wasm/Cargo.toml](../../../../sources/juyterman1000__entroly/entroly-wasm/Cargo.toml)<br>[entroly-wasm/package.json](../../../../sources/juyterman1000__entroly/entroly-wasm/package.json)<br>[entroly-qccr/Cargo.lock](../../../../sources/juyterman1000__entroly/entroly-qccr/Cargo.lock)<br>[entroly-qccr/Cargo.toml](../../../../sources/juyterman1000__entroly/entroly-qccr/Cargo.toml)<br>[entroly-core/Cargo.lock](../../../../sources/juyterman1000__entroly/entroly-core/Cargo.lock)<br>[entroly-core/Cargo.toml](../../../../sources/juyterman1000__entroly/entroly-core/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 186 | [run_real_mcp_test.py](../../../../sources/juyterman1000__entroly/run_real_mcp_test.py)<br>[run_real_proxy_test.py](../../../../sources/juyterman1000__entroly/run_real_proxy_test.py)<br>[tests/_check_learning.py](../../../../sources/juyterman1000__entroly/tests/_check_learning.py)<br>[tests/_check_vault.py](../../../../sources/juyterman1000__entroly/tests/_check_vault.py)<br>[tests/_pilot.py](../../../../sources/juyterman1000__entroly/tests/_pilot.py)<br>[tests/_proxy_e2e.py](../../../../sources/juyterman1000__entroly/tests/_proxy_e2e.py) |
| CI workflow | 7 | [.github/workflows/benchmark.yml](../../../../sources/juyterman1000__entroly/.github/workflows/benchmark.yml)<br>[.github/workflows/ci.yml](../../../../sources/juyterman1000__entroly/.github/workflows/ci.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/juyterman1000__entroly/.github/workflows/docker-publish.yml)<br>[.github/workflows/entroly-cost-check.yml](../../../../sources/juyterman1000__entroly/.github/workflows/entroly-cost-check.yml)<br>[.github/workflows/entroly-publish.yml](../../../../sources/juyterman1000__entroly/.github/workflows/entroly-publish.yml)<br>[.github/workflows/publish-core-wheels.yml](../../../../sources/juyterman1000__entroly/.github/workflows/publish-core-wheels.yml) |
| 컨테이너/배포 | 3 | [docker-compose.yml](../../../../sources/juyterman1000__entroly/docker-compose.yml)<br>[Dockerfile](../../../../sources/juyterman1000__entroly/Dockerfile)<br>[Dockerfile.entroly](../../../../sources/juyterman1000__entroly/Dockerfile.entroly) |
| 보안/정책 | 21 | [SECURITY.md](../../../../sources/juyterman1000__entroly/SECURITY.md)<br>[tests/test_auth.py](../../../../sources/juyterman1000__entroly/tests/test_auth.py)<br>[tests/test_cli_audit.py](../../../../sources/juyterman1000__entroly/tests/test_cli_audit.py)<br>[tests/test_compliance_metadata.py](../../../../sources/juyterman1000__entroly/tests/test_compliance_metadata.py)<br>[tests/test_recovery_policy_benchmark.py](../../../../sources/juyterman1000__entroly/tests/test_recovery_policy_benchmark.py)<br>[tests/test_security_hardening.py](../../../../sources/juyterman1000__entroly/tests/test_security_hardening.py) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/juyterman1000__entroly/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `run_real_mcp_test.py`, `tests/test_mcp_protocol.py`.
2. entrypoint를 따라 실행 흐름 확인: `entroly-wasm/js/server.js`, `entroly-wasm/bin/entroly-wasm.js`, `entroly-core/src/bin/entroly-rs.rs`.
3. agent/tool runtime 매핑: `entroly-wasm/js/context_receipts.js`, `entroly-wasm/js/skills.js`, `entroly-core/src/context_receipts.rs`.
4. retrieval/memory/indexing 확인: `scripts/vault_graph_cli.py`, `entroly-wasm/index.d.ts`, `entroly-wasm/index.js`.
5. test/eval 파일로 동작 검증: `run_real_mcp_test.py`, `run_real_proxy_test.py`, `tests/_check_learning.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Cut your Claude / OpenAI / Gemini bill 70–95% on AI coding. Local proxy that compresses context, keeps provider caches h. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
