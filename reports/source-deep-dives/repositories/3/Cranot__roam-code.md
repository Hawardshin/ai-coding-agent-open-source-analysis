# Cranot/roam-code 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local codebase intelligence CLI + MCP server for AI coding agents: SQLite code graph, 28 languages, 238 commands, 224 MCP tools, change-safety gates, audit evidence, zero API keys.

## 요약

- 조사 단위: `sources/Cranot__roam-code` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,627 files, 113 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, tests/test_batch_mcp.py, tests/test_cmd_mcp_fast_startup.py이고, 의존성 단서는 mcp, express, click, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Cranot/roam-code |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 483 |
| Forks | 47 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Cranot__roam-code](../../../../sources/Cranot__roam-code) |
| 기존 보고서 | [reports/global-trending/repositories/Cranot__roam-code.md](../../../global-trending/repositories/Cranot__roam-code.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4627 / 113 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude-plugin, .githooks, .github, bench, benchmarks, dev, docs, rules, scripts, skills, src, templates, tests |
| 상위 확장자 | .yaml: 2516, .py: 1899, .md: 47, .yml: 36, .json: 33, .html: 30, .txt: 19, (none): 18, .sha256: 5, .sh: 3, .woff2: 3, .jsonl: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 151 |
| src | source boundary | 33 |
| docs | documentation surface | 7 |
| .github | ci surface | 1 |
| bench | validation surface | 1 |
| benchmarks | validation surface | 1 |
| dev | top-level component | 1 |
| rules | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| templates | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| serve-dev | Makefile | dev | make dev |
| test | Makefile | test | make test |
| test | Makefile | test-smoke | make test-smoke |
| test | Makefile | test-core | make test-core |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| utility | Makefile | hygiene | make hygiene |
| utility | Makefile | hygiene-strict | make hygiene-strict |
| utility | Makefile | hygiene-debt-init | make hygiene-debt-init |
| utility | Makefile | hygiene-debt | make hygiene-debt |
| utility | Makefile | todo-guard | make todo-guard |
| utility | Makefile | doctor-env | make doctor-env |
| utility | Makefile | doctor-env-strict | make doctor-env-strict |
| utility | Makefile | command-audit | make command-audit |
| utility | Makefile | quality-baseline | make quality-baseline |
| utility | Makefile | quality-strict | make quality-strict |
| build | Makefile | build | make build |
| build | Makefile | verify-build | make verify-build |
| utility | pyproject.toml | roam | roam |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | express |
| developerSurface | click |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/Cranot__roam-code/.mcp.json) | mcp signal |
| mcp | [tests/test_batch_mcp.py](../../../../sources/Cranot__roam-code/tests/test_batch_mcp.py) | mcp signal |
| mcp | [tests/test_cmd_mcp_fast_startup.py](../../../../sources/Cranot__roam-code/tests/test_cmd_mcp_fast_startup.py) | mcp signal |
| mcp | [tests/test_cmd_mcp_status_cold_start.py](../../../../sources/Cranot__roam-code/tests/test_cmd_mcp_status_cold_start.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/Cranot__roam-code/AGENTS.md) | agentRuntime signal |
| agentRuntime | [templates/examples/agent-change-packet.md](../../../../sources/Cranot__roam-code/templates/examples/agent-change-packet.md) | agentRuntime signal |
| agentRuntime | [templates/distribution/landing-page/docs/agent-contract.html](../../../../sources/Cranot__roam-code/templates/distribution/landing-page/docs/agent-contract.html) | agentRuntime signal |
| agentRuntime | [src/roam/agent_opt.py](../../../../sources/Cranot__roam-code/src/roam/agent_opt.py) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/Cranot__roam-code/server.json) | entrypoints signal |
| entrypoints | [src/roam/__main__.py](../../../../sources/Cranot__roam-code/src/roam/__main__.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/Cranot__roam-code/CLAUDE.md) | instruction signal |
| config | [Makefile](../../../../sources/Cranot__roam-code/Makefile) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [server.json](../../../../sources/Cranot__roam-code/server.json)<br>[src/roam/__main__.py](../../../../sources/Cranot__roam-code/src/roam/__main__.py) |
| agentRuntime | 43 | [AGENTS.md](../../../../sources/Cranot__roam-code/AGENTS.md)<br>[templates/examples/agent-change-packet.md](../../../../sources/Cranot__roam-code/templates/examples/agent-change-packet.md)<br>[templates/distribution/landing-page/docs/agent-contract.html](../../../../sources/Cranot__roam-code/templates/distribution/landing-page/docs/agent-contract.html)<br>[src/roam/agent_opt.py](../../../../sources/Cranot__roam-code/src/roam/agent_opt.py)<br>[src/roam/templates/ci/agent-review.yml](../../../../sources/Cranot__roam-code/src/roam/templates/ci/agent-review.yml)<br>[src/roam/schemas/agent_change_proof_bundle.v1.json](../../../../sources/Cranot__roam-code/src/roam/schemas/agent_change_proof_bundle.v1.json)<br>[src/roam/memory/__init__.py](../../../../sources/Cranot__roam-code/src/roam/memory/__init__.py)<br>[src/roam/memory/store.py](../../../../sources/Cranot__roam-code/src/roam/memory/store.py) |
| mcp | 84 | [.mcp.json](../../../../sources/Cranot__roam-code/.mcp.json)<br>[tests/test_batch_mcp.py](../../../../sources/Cranot__roam-code/tests/test_batch_mcp.py)<br>[tests/test_cmd_mcp_fast_startup.py](../../../../sources/Cranot__roam-code/tests/test_cmd_mcp_fast_startup.py)<br>[tests/test_cmd_mcp_status_cold_start.py](../../../../sources/Cranot__roam-code/tests/test_cmd_mcp_status_cold_start.py)<br>[tests/test_dead_mcp_seeding.py](../../../../sources/Cranot__roam-code/tests/test_dead_mcp_seeding.py)<br>[tests/test_mcp_architecture_wrappers.py](../../../../sources/Cranot__roam-code/tests/test_mcp_architecture_wrappers.py)<br>[tests/test_mcp_batch_search_complete_parity.py](../../../../sources/Cranot__roam-code/tests/test_mcp_batch_search_complete_parity.py)<br>[tests/test_mcp_cold_start_guard.py](../../../../sources/Cranot__roam-code/tests/test_mcp_cold_start_guard.py) |
| retrieval | 100 | [tests/test_causal_graph.py](../../../../sources/Cranot__roam-code/tests/test_causal_graph.py)<br>[tests/test_cmd_missing_index_sarif.py](../../../../sources/Cranot__roam-code/tests/test_cmd_missing_index_sarif.py)<br>[tests/test_command_graph.py](../../../../sources/Cranot__roam-code/tests/test_command_graph.py)<br>[tests/test_compile_index_staleness.py](../../../../sources/Cranot__roam-code/tests/test_compile_index_staleness.py)<br>[tests/test_docs_index.py](../../../../sources/Cranot__roam-code/tests/test_docs_index.py)<br>[tests/test_findings_missing_index.py](../../../../sources/Cranot__roam-code/tests/test_findings_missing_index.py)<br>[tests/test_graph_layers.py](../../../../sources/Cranot__roam-code/tests/test_graph_layers.py)<br>[tests/test_graph_versioning.py](../../../../sources/Cranot__roam-code/tests/test_graph_versioning.py) |
| spec | 150 | [tests/test_architecture_drift.py](../../../../sources/Cranot__roam-code/tests/test_architecture_drift.py)<br>[tests/test_commands_architecture.py](../../../../sources/Cranot__roam-code/tests/test_commands_architecture.py)<br>[tests/test_mcp_architecture_wrappers.py](../../../../sources/Cranot__roam-code/tests/test_mcp_architecture_wrappers.py)<br>[tests/test_rules_symbol_requirements.py](../../../../sources/Cranot__roam-code/tests/test_rules_symbol_requirements.py)<br>[templates/distribution/landing-page/docs/architecture.html](../../../../sources/Cranot__roam-code/templates/distribution/landing-page/docs/architecture.html)<br>[src/roam/commands/cmd_architecture_drift.py](../../../../sources/Cranot__roam-code/src/roam/commands/cmd_architecture_drift.py)<br>[rules/community/architecture/143_arch_no_controller_to_db.yaml](../../../../sources/Cranot__roam-code/rules/community/architecture/143_arch_no_controller_to_db.yaml)<br>[rules/community/architecture/144_arch_no_api_to_db.yaml](../../../../sources/Cranot__roam-code/rules/community/architecture/144_arch_no_api_to_db.yaml) |
| eval | 1425 | [tests/__init__.py](../../../../sources/Cranot__roam-code/tests/__init__.py)<br>[tests/_findings_helpers.py](../../../../sources/Cranot__roam-code/tests/_findings_helpers.py)<br>[tests/_gen_test_prop.py](../../../../sources/Cranot__roam-code/tests/_gen_test_prop.py)<br>[tests/_w805_emit_helpers.py](../../../../sources/Cranot__roam-code/tests/_w805_emit_helpers.py)<br>[tests/conftest.py](../../../../sources/Cranot__roam-code/tests/conftest.py)<br>[tests/helpers.py](../../../../sources/Cranot__roam-code/tests/helpers.py)<br>[tests/test_actor_refs_provenance.py](../../../../sources/Cranot__roam-code/tests/test_actor_refs_provenance.py)<br>[tests/test_actor_trust.py](../../../../sources/Cranot__roam-code/tests/test_actor_trust.py) |
| security | 865 | [tests/test_adversarial_pattern2_guard.py](../../../../sources/Cranot__roam-code/tests/test_adversarial_pattern2_guard.py)<br>[tests/test_audit_trail_aggregate.py](../../../../sources/Cranot__roam-code/tests/test_audit_trail_aggregate.py)<br>[tests/test_audit_trail_conformance.py](../../../../sources/Cranot__roam-code/tests/test_audit_trail_conformance.py)<br>[tests/test_audit_trail_sequence.py](../../../../sources/Cranot__roam-code/tests/test_audit_trail_sequence.py)<br>[tests/test_audit_trail_verify.py](../../../../sources/Cranot__roam-code/tests/test_audit_trail_verify.py)<br>[tests/test_auth_gaps_helper_indirection.py](../../../../sources/Cranot__roam-code/tests/test_auth_gaps_helper_indirection.py)<br>[tests/test_auth_gaps.py](../../../../sources/Cranot__roam-code/tests/test_auth_gaps.py)<br>[tests/test_changed_files_none_guard.py](../../../../sources/Cranot__roam-code/tests/test_changed_files_none_guard.py) |
| ci | 14 | [src/roam/templates/ci/__init__.py](../../../../sources/Cranot__roam-code/src/roam/templates/ci/__init__.py)<br>[src/roam/templates/ci/agent-review.yml](../../../../sources/Cranot__roam-code/src/roam/templates/ci/agent-review.yml)<br>[src/roam/templates/ci/azure-pipelines.yml](../../../../sources/Cranot__roam-code/src/roam/templates/ci/azure-pipelines.yml)<br>[src/roam/templates/ci/bitbucket-pipelines.yml](../../../../sources/Cranot__roam-code/src/roam/templates/ci/bitbucket-pipelines.yml)<br>[src/roam/templates/ci/gitlab-ci.yml](../../../../sources/Cranot__roam-code/src/roam/templates/ci/gitlab-ci.yml)<br>[src/roam/templates/ci/Jenkinsfile](../../../../sources/Cranot__roam-code/src/roam/templates/ci/Jenkinsfile)<br>[src/roam/templates/ci/roam-sarif-with-codeql.yml](../../../../sources/Cranot__roam-code/src/roam/templates/ci/roam-sarif-with-codeql.yml)<br>[src/roam/templates/ci/slsa-src-l3.yml](../../../../sources/Cranot__roam-code/src/roam/templates/ci/slsa-src-l3.yml) |
| container | 1 | [Dockerfile](../../../../sources/Cranot__roam-code/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/Cranot__roam-code/AGENTS.md)<br>[CLAUDE.md](../../../../sources/Cranot__roam-code/CLAUDE.md) |
| docs | 29 | [README.md](../../../../sources/Cranot__roam-code/README.md)<br>[tests/regression_fp_fixtures/README.md](../../../../sources/Cranot__roam-code/tests/regression_fp_fixtures/README.md)<br>[templates/rules/README.md](../../../../sources/Cranot__roam-code/templates/rules/README.md)<br>[templates/legal/README.md](../../../../sources/Cranot__roam-code/templates/legal/README.md)<br>[templates/examples/README.md](../../../../sources/Cranot__roam-code/templates/examples/README.md)<br>[templates/distribution/landing-page/docs/agent-contract.html](../../../../sources/Cranot__roam-code/templates/distribution/landing-page/docs/agent-contract.html)<br>[templates/distribution/landing-page/docs/architecture.html](../../../../sources/Cranot__roam-code/templates/distribution/landing-page/docs/architecture.html)<br>[templates/distribution/landing-page/docs/canonical-demo.html](../../../../sources/Cranot__roam-code/templates/distribution/landing-page/docs/canonical-demo.html) |
| config | 4 | [Makefile](../../../../sources/Cranot__roam-code/Makefile)<br>[pyproject.toml](../../../../sources/Cranot__roam-code/pyproject.toml)<br>[uv.lock](../../../../sources/Cranot__roam-code/uv.lock)<br>[dev/example-plugin/pyproject.toml](../../../../sources/Cranot__roam-code/dev/example-plugin/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1425 | [tests/__init__.py](../../../../sources/Cranot__roam-code/tests/__init__.py)<br>[tests/_findings_helpers.py](../../../../sources/Cranot__roam-code/tests/_findings_helpers.py)<br>[tests/_gen_test_prop.py](../../../../sources/Cranot__roam-code/tests/_gen_test_prop.py)<br>[tests/_w805_emit_helpers.py](../../../../sources/Cranot__roam-code/tests/_w805_emit_helpers.py)<br>[tests/conftest.py](../../../../sources/Cranot__roam-code/tests/conftest.py)<br>[tests/helpers.py](../../../../sources/Cranot__roam-code/tests/helpers.py) |
| CI workflow | 14 | [src/roam/templates/ci/__init__.py](../../../../sources/Cranot__roam-code/src/roam/templates/ci/__init__.py)<br>[src/roam/templates/ci/agent-review.yml](../../../../sources/Cranot__roam-code/src/roam/templates/ci/agent-review.yml)<br>[src/roam/templates/ci/azure-pipelines.yml](../../../../sources/Cranot__roam-code/src/roam/templates/ci/azure-pipelines.yml)<br>[src/roam/templates/ci/bitbucket-pipelines.yml](../../../../sources/Cranot__roam-code/src/roam/templates/ci/bitbucket-pipelines.yml)<br>[src/roam/templates/ci/gitlab-ci.yml](../../../../sources/Cranot__roam-code/src/roam/templates/ci/gitlab-ci.yml)<br>[src/roam/templates/ci/Jenkinsfile](../../../../sources/Cranot__roam-code/src/roam/templates/ci/Jenkinsfile) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/Cranot__roam-code/Dockerfile) |
| 보안/정책 | 865 | [tests/test_adversarial_pattern2_guard.py](../../../../sources/Cranot__roam-code/tests/test_adversarial_pattern2_guard.py)<br>[tests/test_audit_trail_aggregate.py](../../../../sources/Cranot__roam-code/tests/test_audit_trail_aggregate.py)<br>[tests/test_audit_trail_conformance.py](../../../../sources/Cranot__roam-code/tests/test_audit_trail_conformance.py)<br>[tests/test_audit_trail_sequence.py](../../../../sources/Cranot__roam-code/tests/test_audit_trail_sequence.py)<br>[tests/test_audit_trail_verify.py](../../../../sources/Cranot__roam-code/tests/test_audit_trail_verify.py)<br>[tests/test_auth_gaps_helper_indirection.py](../../../../sources/Cranot__roam-code/tests/test_auth_gaps_helper_indirection.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/Cranot__roam-code/AGENTS.md)<br>[CLAUDE.md](../../../../sources/Cranot__roam-code/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `tests/test_batch_mcp.py`, `tests/test_cmd_mcp_fast_startup.py`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `src/roam/__main__.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `templates/examples/agent-change-packet.md`, `templates/distribution/landing-page/docs/agent-contract.html`.
4. retrieval/memory/indexing 확인: `tests/test_causal_graph.py`, `tests/test_cmd_missing_index_sarif.py`, `tests/test_command_graph.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/_findings_helpers.py`, `tests/_gen_test_prop.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local codebase intelligence CLI + MCP server for AI coding agents SQLite code graph, 28 languages, 238 commands, 224 MCP. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, Makefile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
