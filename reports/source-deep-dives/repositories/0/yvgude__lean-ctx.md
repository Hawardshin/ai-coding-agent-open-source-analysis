# yvgude/lean-ctx 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Control what your AI can see. LeanCTX (Lean Context) is the context intelligence layer for AI agents — one local Rust binary that decides what they read, remembers what they learn, guards what they touch, and proves what they save. 60–90% fewer tokens as the receipt. 76 MCP tools, 30+ agents, local-first.

## 요약

- 조사 단위: `sources/yvgude__lean-ctx` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,812 files, 255 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=rust/tests/mcp_manifest_up_to_date.rs, rust/tests/mcp_optout_281.rs, rust/tests/p4_docker_claude_mcp_selfheal_eval.rs이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | yvgude/lean-ctx |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 2753 |
| Forks | 277 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/yvgude__lean-ctx](../../../../sources/yvgude__lean-ctx) |
| 기존 보고서 | [reports/global-trending/repositories/yvgude__lean-ctx.md](../../../global-trending/repositories/yvgude__lean-ctx.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1812 / 255 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .claude-plugin, .githooks, .github, .kiro, assets, aur, bench, benchmark, benchmarks, bin, blog, ci, clients, cloud-infra, cookbook, demo, discord-faq, docs, email-templates, integrations |
| 상위 확장자 | .rs: 1176, .md: 187, .kt: 73, .snap: 57, .json: 53, .ts: 33, .js: 32, .py: 32, (none): 31, .toml: 25, .sh: 14, .yml: 13 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 37 |
| packages/pi-lean-ctx | packages workspace | 5 |
| packages/lean-ctx-bin | packages workspace | 3 |
| packages/leanctx-verify | packages workspace | 3 |
| packages/node-lean-ctx | packages workspace | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| aur | top-level component | 1 |
| bench | validation surface | 1 |
| benchmark | validation surface | 1 |
| benchmarks | validation surface | 1 |
| bin | top-level component | 1 |
| blog | top-level component | 1 |
| ci | ci surface | 1 |
| clients | source boundary | 1 |
| cloud-infra | top-level component | 1 |
| cookbook | top-level component | 1 |
| demo | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | setup-hooks | make setup-hooks |
| utility | Makefile | install | make install |
| serve-dev | Makefile | dev | make dev |
| test | Makefile | test | make test |
| utility | Makefile | preflight | make preflight |
| utility | Makefile | preflight-fast | make preflight-fast |
| utility | Makefile | help | make help |


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
| mcp | [rust/tests/mcp_manifest_up_to_date.rs](../../../../sources/yvgude__lean-ctx/rust/tests/mcp_manifest_up_to_date.rs) | mcp signal |
| mcp | [rust/tests/mcp_optout_281.rs](../../../../sources/yvgude__lean-ctx/rust/tests/mcp_optout_281.rs) | mcp signal |
| mcp | [rust/tests/p4_docker_claude_mcp_selfheal_eval.rs](../../../../sources/yvgude__lean-ctx/rust/tests/p4_docker_claude_mcp_selfheal_eval.rs) | mcp signal |
| mcp | [rust/src/mcp_stdio.rs](../../../../sources/yvgude__lean-ctx/rust/src/mcp_stdio.rs) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/yvgude__lean-ctx/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/lean-ctx/SKILL.md](../../../../sources/yvgude__lean-ctx/skills/lean-ctx/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/lean-ctx/scripts/install.sh](../../../../sources/yvgude__lean-ctx/skills/lean-ctx/scripts/install.sh) | agentRuntime signal |
| agentRuntime | [rust/AGENTS.md](../../../../sources/yvgude__lean-ctx/rust/AGENTS.md) | agentRuntime signal |
| entrypoints | [rust/src/main.rs](../../../../sources/yvgude__lean-ctx/rust/src/main.rs) | entrypoints signal |
| entrypoints | [rust/src/tools/server.rs](../../../../sources/yvgude__lean-ctx/rust/src/tools/server.rs) | entrypoints signal |
| entrypoints | [rust/src/cli/dispatch/server.rs](../../../../sources/yvgude__lean-ctx/rust/src/cli/dispatch/server.rs) | entrypoints signal |
| entrypoints | [rust/src/bin/gen_docs.rs](../../../../sources/yvgude__lean-ctx/rust/src/bin/gen_docs.rs) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 17 | [rust/src/main.rs](../../../../sources/yvgude__lean-ctx/rust/src/main.rs)<br>[rust/src/tools/server.rs](../../../../sources/yvgude__lean-ctx/rust/src/tools/server.rs)<br>[rust/src/cli/dispatch/server.rs](../../../../sources/yvgude__lean-ctx/rust/src/cli/dispatch/server.rs)<br>[rust/src/bin/gen_docs.rs](../../../../sources/yvgude__lean-ctx/rust/src/bin/gen_docs.rs)<br>[rust/src/bin/gen_mcp_manifest.rs](../../../../sources/yvgude__lean-ctx/rust/src/bin/gen_mcp_manifest.rs)<br>[rust/src/bin/gen_tdd_schema.rs](../../../../sources/yvgude__lean-ctx/rust/src/bin/gen_tdd_schema.rs)<br>[rust/src/bin/lean-ctx-cloud-api.rs](../../../../sources/yvgude__lean-ctx/rust/src/bin/lean-ctx-cloud-api.rs)<br>[rust/src/bin/locomo_bench.rs](../../../../sources/yvgude__lean-ctx/rust/src/bin/locomo_bench.rs) |
| agentRuntime | 325 | [AGENTS.md](../../../../sources/yvgude__lean-ctx/AGENTS.md)<br>[skills/lean-ctx/SKILL.md](../../../../sources/yvgude__lean-ctx/skills/lean-ctx/SKILL.md)<br>[skills/lean-ctx/scripts/install.sh](../../../../sources/yvgude__lean-ctx/skills/lean-ctx/scripts/install.sh)<br>[rust/AGENTS.md](../../../../sources/yvgude__lean-ctx/rust/AGENTS.md)<br>[rust/AGENTS.md.lean-ctx.bak](../../../../sources/yvgude__lean-ctx/rust/AGENTS.md.lean-ctx.bak)<br>[rust/tests/context_cortex_e2e_scenarios.rs](../../../../sources/yvgude__lean-ctx/rust/tests/context_cortex_e2e_scenarios.rs)<br>[rust/tests/context_cortex_phase1.rs](../../../../sources/yvgude__lean-ctx/rust/tests/context_cortex_phase1.rs)<br>[rust/tests/context_cortex_phase2.rs](../../../../sources/yvgude__lean-ctx/rust/tests/context_cortex_phase2.rs) |
| mcp | 18 | [rust/tests/mcp_manifest_up_to_date.rs](../../../../sources/yvgude__lean-ctx/rust/tests/mcp_manifest_up_to_date.rs)<br>[rust/tests/mcp_optout_281.rs](../../../../sources/yvgude__lean-ctx/rust/tests/mcp_optout_281.rs)<br>[rust/tests/p4_docker_claude_mcp_selfheal_eval.rs](../../../../sources/yvgude__lean-ctx/rust/tests/p4_docker_claude_mcp_selfheal_eval.rs)<br>[rust/src/mcp_stdio.rs](../../../../sources/yvgude__lean-ctx/rust/src/mcp_stdio.rs)<br>[rust/src/setup/mcp.rs](../../../../sources/yvgude__lean-ctx/rust/src/setup/mcp.rs)<br>[rust/src/core/mcp_manifest.rs](../../../../sources/yvgude__lean-ctx/rust/src/core/mcp_manifest.rs)<br>[rust/src/core/terse/mcp_compress.rs](../../../../sources/yvgude__lean-ctx/rust/src/core/terse/mcp_compress.rs)<br>[rust/src/core/providers/mcp_bridge.rs](../../../../sources/yvgude__lean-ctx/rust/src/core/providers/mcp_bridge.rs) |
| retrieval | 141 | [rust/tests/embedding_download_test.py](../../../../sources/yvgude__lean-ctx/rust/tests/embedding_download_test.py)<br>[rust/tests/graph_export_contract.rs](../../../../sources/yvgude__lean-ctx/rust/tests/graph_export_contract.rs)<br>[rust/tests/index_scoping_scenarios.rs](../../../../sources/yvgude__lean-ctx/rust/tests/index_scoping_scenarios.rs)<br>[rust/tests/issue_249_index_observability.rs](../../../../sources/yvgude__lean-ctx/rust/tests/issue_249_index_observability.rs)<br>[rust/tests/issue_326_parallel_knowledge.rs](../../../../sources/yvgude__lean-ctx/rust/tests/issue_326_parallel_knowledge.rs)<br>[rust/tests/memory_benchmark_suite.rs](../../../../sources/yvgude__lean-ctx/rust/tests/memory_benchmark_suite.rs)<br>[rust/tests/output_contracts_knowledge.rs](../../../../sources/yvgude__lean-ctx/rust/tests/output_contracts_knowledge.rs)<br>[rust/tests/p2_graph_embeddings_eval.rs](../../../../sources/yvgude__lean-ctx/rust/tests/p2_graph_embeddings_eval.rs) |
| spec | 7 | [ARCHITECTURE.md](../../../../sources/yvgude__lean-ctx/ARCHITECTURE.md)<br>[rust/src/tools/ctx_architecture.rs](../../../../sources/yvgude__lean-ctx/rust/src/tools/ctx_architecture.rs)<br>[rust/src/tools/registered/ctx_architecture.rs](../../../../sources/yvgude__lean-ctx/rust/src/tools/registered/ctx_architecture.rs)<br>[rust/src/dashboard/static/components/cockpit-architecture.js](../../../../sources/yvgude__lean-ctx/rust/src/dashboard/static/components/cockpit-architecture.js)<br>[rust/src/dashboard/routes/graph/architecture.rs](../../../../sources/yvgude__lean-ctx/rust/src/dashboard/routes/graph/architecture.rs)<br>[docs/contracts/persona-spec-v1.md](../../../../sources/yvgude__lean-ctx/docs/contracts/persona-spec-v1.md)<br>[bench/agent-task/requirements.txt](../../../../sources/yvgude__lean-ctx/bench/agent-task/requirements.txt) |
| eval | 285 | [rust/tests/adversarial_compression.rs](../../../../sources/yvgude__lean-ctx/rust/tests/adversarial_compression.rs)<br>[rust/tests/archive_expand_tests.rs](../../../../sources/yvgude__lean-ctx/rust/tests/archive_expand_tests.rs)<br>[rust/tests/autonomy_tests.rs](../../../../sources/yvgude__lean-ctx/rust/tests/autonomy_tests.rs)<br>[rust/tests/bazsi_reported_scenarios.rs](../../../../sources/yvgude__lean-ctx/rust/tests/bazsi_reported_scenarios.rs)<br>[rust/tests/benchmark_compare_integration.rs](../../../../sources/yvgude__lean-ctx/rust/tests/benchmark_compare_integration.rs)<br>[rust/tests/capabilities_contract_up_to_date.rs](../../../../sources/yvgude__lean-ctx/rust/tests/capabilities_contract_up_to_date.rs)<br>[rust/tests/claude_config_dir.rs](../../../../sources/yvgude__lean-ctx/rust/tests/claude_config_dir.rs)<br>[rust/tests/cli_characterization.rs](../../../../sources/yvgude__lean-ctx/rust/tests/cli_characterization.rs) |
| security | 64 | [SECURITY.md](../../../../sources/yvgude__lean-ctx/SECURITY.md)<br>[rust/tests/compliance_frameworks.rs](../../../../sources/yvgude__lean-ctx/rust/tests/compliance_frameworks.rs)<br>[rust/tests/p4_adaptive_mode_policy_eval.rs](../../../../sources/yvgude__lean-ctx/rust/tests/p4_adaptive_mode_policy_eval.rs)<br>[rust/tests/ro_config_sandbox.rs](../../../../sources/yvgude__lean-ctx/rust/tests/ro_config_sandbox.rs)<br>[rust/tests/secret_scan_artifacts.rs](../../../../sources/yvgude__lean-ctx/rust/tests/secret_scan_artifacts.rs)<br>[rust/tests/security_hardening.rs](../../../../sources/yvgude__lean-ctx/rust/tests/security_hardening.rs)<br>[rust/tests/security_resolve_path_guard.rs](../../../../sources/yvgude__lean-ctx/rust/tests/security_resolve_path_guard.rs)<br>[rust/tests/tcc_sandbox.rs](../../../../sources/yvgude__lean-ctx/rust/tests/tcc_sandbox.rs) |
| ci | 10 | [lean/.github/workflows/lean_action_ci.yml](../../../../sources/yvgude__lean-ctx/lean/.github/workflows/lean_action_ci.yml)<br>[ci/gitlab-ci.yml](../../../../sources/yvgude__lean-ctx/ci/gitlab-ci.yml)<br>[.github/workflows/ci.yml](../../../../sources/yvgude__lean-ctx/.github/workflows/ci.yml)<br>[.github/workflows/cla.yml](../../../../sources/yvgude__lean-ctx/.github/workflows/cla.yml)<br>[.github/workflows/codeql.yml](../../../../sources/yvgude__lean-ctx/.github/workflows/codeql.yml)<br>[.github/workflows/issue-reopen.yml](../../../../sources/yvgude__lean-ctx/.github/workflows/issue-reopen.yml)<br>[.github/workflows/jetbrains-plugin.yml](../../../../sources/yvgude__lean-ctx/.github/workflows/jetbrains-plugin.yml)<br>[.github/workflows/publish-vscode.yml](../../../../sources/yvgude__lean-ctx/.github/workflows/publish-vscode.yml) |
| container | 1 | [cloud-infra/Dockerfile.cloud-api](../../../../sources/yvgude__lean-ctx/cloud-infra/Dockerfile.cloud-api) |
| instruction | 7 | [AGENTS.md](../../../../sources/yvgude__lean-ctx/AGENTS.md)<br>[rust/AGENTS.md](../../../../sources/yvgude__lean-ctx/rust/AGENTS.md)<br>[rust/AGENTS.md.lean-ctx.bak](../../../../sources/yvgude__lean-ctx/rust/AGENTS.md.lean-ctx.bak)<br>[rust/CLAUDE.md](../../../../sources/yvgude__lean-ctx/rust/CLAUDE.md)<br>[rust/src/templates/CLAUDE.md](../../../../sources/yvgude__lean-ctx/rust/src/templates/CLAUDE.md)<br>[rust/examples/CLAUDE.md](../../../../sources/yvgude__lean-ctx/rust/examples/CLAUDE.md)<br>[.github/copilot/mcp.json](../../../../sources/yvgude__lean-ctx/.github/copilot/mcp.json) |
| docs | 141 | [README.md](../../../../sources/yvgude__lean-ctx/README.md)<br>[vscode-extension/README.md](../../../../sources/yvgude__lean-ctx/vscode-extension/README.md)<br>[rust/README.md](../../../../sources/yvgude__lean-ctx/rust/README.md)<br>[packages/pi-lean-ctx/README.md](../../../../sources/yvgude__lean-ctx/packages/pi-lean-ctx/README.md)<br>[packages/leanctx-verify/README.md](../../../../sources/yvgude__lean-ctx/packages/leanctx-verify/README.md)<br>[packages/lean-ctx-bin/README.md](../../../../sources/yvgude__lean-ctx/packages/lean-ctx-bin/README.md)<br>[packages/chrome-lean-ctx/README.md](../../../../sources/yvgude__lean-ctx/packages/chrome-lean-ctx/README.md)<br>[lean/README.md](../../../../sources/yvgude__lean-ctx/lean/README.md) |
| config | 25 | [Makefile](../../../../sources/yvgude__lean-ctx/Makefile)<br>[vscode-extension/package.json](../../../../sources/yvgude__lean-ctx/vscode-extension/package.json)<br>[vscode-extension/tsconfig.json](../../../../sources/yvgude__lean-ctx/vscode-extension/tsconfig.json)<br>[rust/Cargo.lock](../../../../sources/yvgude__lean-ctx/rust/Cargo.lock)<br>[rust/Cargo.toml](../../../../sources/yvgude__lean-ctx/rust/Cargo.toml)<br>[rust/src/templates/package.json](../../../../sources/yvgude__lean-ctx/rust/src/templates/package.json)<br>[packages/python-lean-ctx/pyproject.toml](../../../../sources/yvgude__lean-ctx/packages/python-lean-ctx/pyproject.toml)<br>[packages/pi-lean-ctx/package.json](../../../../sources/yvgude__lean-ctx/packages/pi-lean-ctx/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 285 | [rust/tests/adversarial_compression.rs](../../../../sources/yvgude__lean-ctx/rust/tests/adversarial_compression.rs)<br>[rust/tests/archive_expand_tests.rs](../../../../sources/yvgude__lean-ctx/rust/tests/archive_expand_tests.rs)<br>[rust/tests/autonomy_tests.rs](../../../../sources/yvgude__lean-ctx/rust/tests/autonomy_tests.rs)<br>[rust/tests/bazsi_reported_scenarios.rs](../../../../sources/yvgude__lean-ctx/rust/tests/bazsi_reported_scenarios.rs)<br>[rust/tests/benchmark_compare_integration.rs](../../../../sources/yvgude__lean-ctx/rust/tests/benchmark_compare_integration.rs)<br>[rust/tests/capabilities_contract_up_to_date.rs](../../../../sources/yvgude__lean-ctx/rust/tests/capabilities_contract_up_to_date.rs) |
| CI workflow | 10 | [lean/.github/workflows/lean_action_ci.yml](../../../../sources/yvgude__lean-ctx/lean/.github/workflows/lean_action_ci.yml)<br>[ci/gitlab-ci.yml](../../../../sources/yvgude__lean-ctx/ci/gitlab-ci.yml)<br>[.github/workflows/ci.yml](../../../../sources/yvgude__lean-ctx/.github/workflows/ci.yml)<br>[.github/workflows/cla.yml](../../../../sources/yvgude__lean-ctx/.github/workflows/cla.yml)<br>[.github/workflows/codeql.yml](../../../../sources/yvgude__lean-ctx/.github/workflows/codeql.yml)<br>[.github/workflows/issue-reopen.yml](../../../../sources/yvgude__lean-ctx/.github/workflows/issue-reopen.yml) |
| 컨테이너/배포 | 1 | [cloud-infra/Dockerfile.cloud-api](../../../../sources/yvgude__lean-ctx/cloud-infra/Dockerfile.cloud-api) |
| 보안/정책 | 64 | [SECURITY.md](../../../../sources/yvgude__lean-ctx/SECURITY.md)<br>[rust/tests/compliance_frameworks.rs](../../../../sources/yvgude__lean-ctx/rust/tests/compliance_frameworks.rs)<br>[rust/tests/p4_adaptive_mode_policy_eval.rs](../../../../sources/yvgude__lean-ctx/rust/tests/p4_adaptive_mode_policy_eval.rs)<br>[rust/tests/ro_config_sandbox.rs](../../../../sources/yvgude__lean-ctx/rust/tests/ro_config_sandbox.rs)<br>[rust/tests/secret_scan_artifacts.rs](../../../../sources/yvgude__lean-ctx/rust/tests/secret_scan_artifacts.rs)<br>[rust/tests/security_hardening.rs](../../../../sources/yvgude__lean-ctx/rust/tests/security_hardening.rs) |
| 에이전트 지시문 | 7 | [AGENTS.md](../../../../sources/yvgude__lean-ctx/AGENTS.md)<br>[rust/AGENTS.md](../../../../sources/yvgude__lean-ctx/rust/AGENTS.md)<br>[rust/AGENTS.md.lean-ctx.bak](../../../../sources/yvgude__lean-ctx/rust/AGENTS.md.lean-ctx.bak)<br>[rust/CLAUDE.md](../../../../sources/yvgude__lean-ctx/rust/CLAUDE.md)<br>[rust/src/templates/CLAUDE.md](../../../../sources/yvgude__lean-ctx/rust/src/templates/CLAUDE.md)<br>[rust/examples/CLAUDE.md](../../../../sources/yvgude__lean-ctx/rust/examples/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `rust/tests/mcp_manifest_up_to_date.rs`, `rust/tests/mcp_optout_281.rs`, `rust/tests/p4_docker_claude_mcp_selfheal_eval.rs`.
2. entrypoint를 따라 실행 흐름 확인: `rust/src/main.rs`, `rust/src/tools/server.rs`, `rust/src/cli/dispatch/server.rs`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills/lean-ctx/SKILL.md`, `skills/lean-ctx/scripts/install.sh`.
4. retrieval/memory/indexing 확인: `rust/tests/embedding_download_test.py`, `rust/tests/graph_export_contract.rs`, `rust/tests/index_scoping_scenarios.rs`.
5. test/eval 파일로 동작 검증: `rust/tests/adversarial_compression.rs`, `rust/tests/archive_expand_tests.rs`, `rust/tests/autonomy_tests.rs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Control what your AI can see. LeanCTX Lean Context is the context intelligence layer for AI agents — one local Rust bina. 핵심 구조 신호는 Rust, Makefile, README.md, AGENTS.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
