# ultraworkers/claw-code 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 386 files, 99 directories.

## 요약

- 조사 단위: `sources/ultraworkers__claw-code` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 386 files, 99 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=rust/crates/runtime/src/mcp_client.rs, rust/crates/runtime/src/mcp_lifecycle_hardened.rs, rust/crates/runtime/src/mcp_server.rs이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ultraworkers/claw-code |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/ultraworkers__claw-code](../../../../sources/ultraworkers__claw-code) |
| 기존 보고서 | [reports/clone-structures/ultraworkers__claw-code.md](../../../clone-structures/ultraworkers__claw-code.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 386 / 99 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .claude, .github, .omx, .port_sessions, assets, docs, rust, scripts, src, tests |
| 상위 확장자 | .rs: 101, .json: 96, .py: 82, .md: 49, .toml: 13, .sh: 11, (none): 9, .jsonl: 6, .png: 6, .yml: 6, .log: 3, .html: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 35 |
| src | source boundary | 15 |
| tests | validation surface | 8 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| rust | top-level component | 1 |
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
| mcp | [rust/crates/runtime/src/mcp_client.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_client.rs) | mcp signal |
| mcp | [rust/crates/runtime/src/mcp_lifecycle_hardened.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_lifecycle_hardened.rs) | mcp signal |
| mcp | [rust/crates/runtime/src/mcp_server.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_server.rs) | mcp signal |
| mcp | [rust/crates/runtime/src/mcp_stdio.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_stdio.rs) | mcp signal |
| agentRuntime | [src/context.py](../../../../sources/ultraworkers__claw-code/src/context.py) | agentRuntime signal |
| agentRuntime | [src/tool_pool.py](../../../../sources/ultraworkers__claw-code/src/tool_pool.py) | agentRuntime signal |
| agentRuntime | [src/Tool.py](../../../../sources/ultraworkers__claw-code/src/Tool.py) | agentRuntime signal |
| agentRuntime | [src/tools.py](../../../../sources/ultraworkers__claw-code/src/tools.py) | agentRuntime signal |
| entrypoints | [src/main.py](../../../../sources/ultraworkers__claw-code/src/main.py) | entrypoints signal |
| entrypoints | [src/reference_data/subsystems/server.json](../../../../sources/ultraworkers__claw-code/src/reference_data/subsystems/server.json) | entrypoints signal |
| entrypoints | [rust/crates/tools/src/lib.rs](../../../../sources/ultraworkers__claw-code/rust/crates/tools/src/lib.rs) | entrypoints signal |
| entrypoints | [rust/crates/telemetry/src/lib.rs](../../../../sources/ultraworkers__claw-code/rust/crates/telemetry/src/lib.rs) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 16 | [src/main.py](../../../../sources/ultraworkers__claw-code/src/main.py)<br>[src/reference_data/subsystems/server.json](../../../../sources/ultraworkers__claw-code/src/reference_data/subsystems/server.json)<br>[rust/crates/tools/src/lib.rs](../../../../sources/ultraworkers__claw-code/rust/crates/tools/src/lib.rs)<br>[rust/crates/telemetry/src/lib.rs](../../../../sources/ultraworkers__claw-code/rust/crates/telemetry/src/lib.rs)<br>[rust/crates/rusty-claude-cli/src/main.rs](../../../../sources/ultraworkers__claw-code/rust/crates/rusty-claude-cli/src/main.rs)<br>[rust/crates/runtime/src/lib.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/lib.rs)<br>[rust/crates/plugins/src/lib.rs](../../../../sources/ultraworkers__claw-code/rust/crates/plugins/src/lib.rs)<br>[rust/crates/mock-anthropic-service/src/lib.rs](../../../../sources/ultraworkers__claw-code/rust/crates/mock-anthropic-service/src/lib.rs) |
| agentRuntime | 25 | [src/context.py](../../../../sources/ultraworkers__claw-code/src/context.py)<br>[src/tool_pool.py](../../../../sources/ultraworkers__claw-code/src/tool_pool.py)<br>[src/Tool.py](../../../../sources/ultraworkers__claw-code/src/Tool.py)<br>[src/tools.py](../../../../sources/ultraworkers__claw-code/src/tools.py)<br>[src/skills/__init__.py](../../../../sources/ultraworkers__claw-code/src/skills/__init__.py)<br>[src/reference_data/tools_snapshot.json](../../../../sources/ultraworkers__claw-code/src/reference_data/tools_snapshot.json)<br>[src/reference_data/subsystems/hooks.json](../../../../sources/ultraworkers__claw-code/src/reference_data/subsystems/hooks.json)<br>[src/reference_data/subsystems/skills.json](../../../../sources/ultraworkers__claw-code/src/reference_data/subsystems/skills.json) |
| mcp | 8 | [rust/crates/runtime/src/mcp_client.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_client.rs)<br>[rust/crates/runtime/src/mcp_lifecycle_hardened.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_lifecycle_hardened.rs)<br>[rust/crates/runtime/src/mcp_server.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_server.rs)<br>[rust/crates/runtime/src/mcp_stdio.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_stdio.rs)<br>[rust/crates/runtime/src/mcp_tool_bridge.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp_tool_bridge.rs)<br>[rust/crates/runtime/src/mcp.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/mcp.rs)<br>[docs/g007-mcp-lifecycle-mapping.md](../../../../sources/ultraworkers__claw-code/docs/g007-mcp-lifecycle-mapping.md)<br>[docs/g007-plugin-mcp-verification-map.md](../../../../sources/ultraworkers__claw-code/docs/g007-plugin-mcp-verification-map.md) |
| retrieval | 14 | [src/bootstrap_graph.py](../../../../sources/ultraworkers__claw-code/src/bootstrap_graph.py)<br>[src/command_graph.py](../../../../sources/ultraworkers__claw-code/src/command_graph.py)<br>[rust/crates/claw-rag-service/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/Cargo.toml)<br>[rust/crates/claw-rag-service/Dockerfile](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/Dockerfile)<br>[rust/crates/claw-rag-service/static/index.html](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/static/index.html)<br>[rust/crates/claw-rag-service/src/chunk.rs](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/src/chunk.rs)<br>[rust/crates/claw-rag-service/src/db.rs](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/src/db.rs)<br>[rust/crates/claw-rag-service/src/embed.rs](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/src/embed.rs) |
| spec | 8 | [prd.json](../../../../sources/ultraworkers__claw-code/prd.json)<br>[ROADMAP.md](../../../../sources/ultraworkers__claw-code/ROADMAP.md)<br>[tests/test_roadmap_helpers.py](../../../../sources/ultraworkers__claw-code/tests/test_roadmap_helpers.py)<br>[scripts/roadmap-check-ids.sh](../../../../sources/ultraworkers__claw-code/scripts/roadmap-check-ids.sh)<br>[scripts/roadmap-next-id.sh](../../../../sources/ultraworkers__claw-code/scripts/roadmap-next-id.sh)<br>[docs/g013-roadmap-pinpoints-693-695-verification-map.md](../../../../sources/ultraworkers__claw-code/docs/g013-roadmap-pinpoints-693-695-verification-map.md)<br>[docs/personal-assistant-roadmap.md](../../../../sources/ultraworkers__claw-code/docs/personal-assistant-roadmap.md)<br>[docs/roadmap-pr-goals.md](../../../../sources/ultraworkers__claw-code/docs/roadmap-pr-goals.md) |
| eval | 25 | [tests/__init__.py](../../../../sources/ultraworkers__claw-code/tests/__init__.py)<br>[tests/test_porting_workspace.py](../../../../sources/ultraworkers__claw-code/tests/test_porting_workspace.py)<br>[tests/test_pre_push_hook_contract.py](../../../../sources/ultraworkers__claw-code/tests/test_pre_push_hook_contract.py)<br>[tests/test_roadmap_helpers.py](../../../../sources/ultraworkers__claw-code/tests/test_roadmap_helpers.py)<br>[tests/test_security_scope.py](../../../../sources/ultraworkers__claw-code/tests/test_security_scope.py)<br>[rust/crates/tools/tests/path_scope_enforcement.rs](../../../../sources/ultraworkers__claw-code/rust/crates/tools/tests/path_scope_enforcement.rs)<br>[rust/crates/rusty-claude-cli/tests/cli_flags_and_config_defaults.rs](../../../../sources/ultraworkers__claw-code/rust/crates/rusty-claude-cli/tests/cli_flags_and_config_defaults.rs)<br>[rust/crates/rusty-claude-cli/tests/compact_output.rs](../../../../sources/ultraworkers__claw-code/rust/crates/rusty-claude-cli/tests/compact_output.rs) |
| security | 10 | [SECURITY.md](../../../../sources/ultraworkers__claw-code/SECURITY.md)<br>[tests/test_security_scope.py](../../../../sources/ultraworkers__claw-code/tests/test_security_scope.py)<br>[src/parity_audit.py](../../../../sources/ultraworkers__claw-code/src/parity_audit.py)<br>[rust/crates/runtime/src/oauth.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/oauth.rs)<br>[rust/crates/runtime/src/permission_enforcer.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/permission_enforcer.rs)<br>[rust/crates/runtime/src/policy_engine.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/policy_engine.rs)<br>[rust/crates/runtime/src/sandbox.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/sandbox.rs)<br>[rust/.sandbox-home/.rustup/settings.toml](../../../../sources/ultraworkers__claw-code/rust/.sandbox-home/.rustup/settings.toml) |
| ci | 3 | [.github/workflows/release.yml](../../../../sources/ultraworkers__claw-code/.github/workflows/release.yml)<br>[.github/workflows/rust-ci.yml](../../../../sources/ultraworkers__claw-code/.github/workflows/rust-ci.yml)<br>[.github/workflows/rust.yml](../../../../sources/ultraworkers__claw-code/.github/workflows/rust.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/ultraworkers__claw-code/docker-compose.yml)<br>[rust/crates/claw-rag-service/Dockerfile](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/Dockerfile) |
| instruction | 2 | [CLAUDE.md](../../../../sources/ultraworkers__claw-code/CLAUDE.md)<br>[rust/CLAUDE.md](../../../../sources/ultraworkers__claw-code/rust/CLAUDE.md) |
| docs | 29 | [README.md](../../../../sources/ultraworkers__claw-code/README.md)<br>[rust/README.md](../../../../sources/ultraworkers__claw-code/rust/README.md)<br>[rust/crates/runtime/tests/fixtures/report_schema_v1/README.md](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/tests/fixtures/report_schema_v1/README.md)<br>[docs/anti-slop-triage.md](../../../../sources/ultraworkers__claw-code/docs/anti-slop-triage.md)<br>[docs/container.md](../../../../sources/ultraworkers__claw-code/docs/container.md)<br>[docs/g002-security-verification-map.md](../../../../sources/ultraworkers__claw-code/docs/g002-security-verification-map.md)<br>[docs/g003-boot-session-verification-map.md](../../../../sources/ultraworkers__claw-code/docs/g003-boot-session-verification-map.md)<br>[docs/g004-events-reports-contract.md](../../../../sources/ultraworkers__claw-code/docs/g004-events-reports-contract.md) |
| config | 13 | [rust/Cargo.lock](../../../../sources/ultraworkers__claw-code/rust/Cargo.lock)<br>[rust/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/Cargo.toml)<br>[rust/crates/tools/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/crates/tools/Cargo.toml)<br>[rust/crates/telemetry/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/crates/telemetry/Cargo.toml)<br>[rust/crates/rusty-claude-cli/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/crates/rusty-claude-cli/Cargo.toml)<br>[rust/crates/runtime/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/Cargo.toml)<br>[rust/crates/plugins/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/crates/plugins/Cargo.toml)<br>[rust/crates/mock-anthropic-service/Cargo.toml](../../../../sources/ultraworkers__claw-code/rust/crates/mock-anthropic-service/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 25 | [tests/__init__.py](../../../../sources/ultraworkers__claw-code/tests/__init__.py)<br>[tests/test_porting_workspace.py](../../../../sources/ultraworkers__claw-code/tests/test_porting_workspace.py)<br>[tests/test_pre_push_hook_contract.py](../../../../sources/ultraworkers__claw-code/tests/test_pre_push_hook_contract.py)<br>[tests/test_roadmap_helpers.py](../../../../sources/ultraworkers__claw-code/tests/test_roadmap_helpers.py)<br>[tests/test_security_scope.py](../../../../sources/ultraworkers__claw-code/tests/test_security_scope.py)<br>[rust/crates/tools/tests/path_scope_enforcement.rs](../../../../sources/ultraworkers__claw-code/rust/crates/tools/tests/path_scope_enforcement.rs) |
| CI workflow | 3 | [.github/workflows/release.yml](../../../../sources/ultraworkers__claw-code/.github/workflows/release.yml)<br>[.github/workflows/rust-ci.yml](../../../../sources/ultraworkers__claw-code/.github/workflows/rust-ci.yml)<br>[.github/workflows/rust.yml](../../../../sources/ultraworkers__claw-code/.github/workflows/rust.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/ultraworkers__claw-code/docker-compose.yml)<br>[rust/crates/claw-rag-service/Dockerfile](../../../../sources/ultraworkers__claw-code/rust/crates/claw-rag-service/Dockerfile) |
| 보안/정책 | 10 | [SECURITY.md](../../../../sources/ultraworkers__claw-code/SECURITY.md)<br>[tests/test_security_scope.py](../../../../sources/ultraworkers__claw-code/tests/test_security_scope.py)<br>[src/parity_audit.py](../../../../sources/ultraworkers__claw-code/src/parity_audit.py)<br>[rust/crates/runtime/src/oauth.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/oauth.rs)<br>[rust/crates/runtime/src/permission_enforcer.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/permission_enforcer.rs)<br>[rust/crates/runtime/src/policy_engine.rs](../../../../sources/ultraworkers__claw-code/rust/crates/runtime/src/policy_engine.rs) |
| 에이전트 지시문 | 2 | [CLAUDE.md](../../../../sources/ultraworkers__claw-code/CLAUDE.md)<br>[rust/CLAUDE.md](../../../../sources/ultraworkers__claw-code/rust/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `rust/crates/runtime/src/mcp_client.rs`, `rust/crates/runtime/src/mcp_lifecycle_hardened.rs`, `rust/crates/runtime/src/mcp_server.rs`.
2. entrypoint를 따라 실행 흐름 확인: `src/main.py`, `src/reference_data/subsystems/server.json`, `rust/crates/tools/src/lib.rs`.
3. agent/tool runtime 매핑: `src/context.py`, `src/tool_pool.py`, `src/Tool.py`.
4. retrieval/memory/indexing 확인: `src/bootstrap_graph.py`, `src/command_graph.py`, `rust/crates/claw-rag-service/Cargo.toml`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/test_porting_workspace.py`, `tests/test_pre_push_hook_contract.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 386 files, 99 directories.. 핵심 구조 신호는 docker-compose.yml, README.md, CLAUDE.md, LICENSE, tests, ci이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
