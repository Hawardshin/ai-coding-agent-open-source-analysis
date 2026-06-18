# openakita/openakita 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

An open-source AI assistant framework with skills and agent architecture

## 요약

- 조사 단위: `sources/openakita__openakita` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,334 files, 879 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/unit/test_mcp_envelope.py, tests/unit/test_policy_v2_c10_mcp_lookup.py, src/openakita/mcp_server.py이고, 의존성 단서는 openai, anthropic, claude, mcp, langchain, fastapi, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | openakita/openakita |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1818 |
| Forks | 258 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/openakita__openakita](../../../../sources/openakita__openakita) |
| 기존 보고서 | [reports/global-trending/repositories/openakita__openakita.md](../../../global-trending/repositories/openakita__openakita.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3334 / 879 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .cursor, .githooks, .github, apps, auth_api, channels, cloud, data, deliverables, dist-plugins, dist-sdk, docs, docs-site, examples, identity, mcps, openakita-plugin-sdk, packages, plugins, prompts |
| 상위 확장자 | .py: 1736, .md: 539, .xsd: 195, .yaml: 181, .tsx: 121, .png: 102, .json: 99, .ts: 64, .txt: 62, .ttf: 54, (none): 27, .svg: 23 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 100 |
| src | source boundary | 70 |
| apps/setup-center | apps workspace | 38 |
| examples/plugins | examples workspace | 4 |
| packages/plugin-ui-sdk | packages workspace | 3 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| auth_api | source boundary | 1 |
| channels | top-level component | 1 |
| cloud | top-level component | 1 |
| data | top-level component | 1 |
| deliverables | top-level component | 1 |
| dist-plugins | top-level component | 1 |
| dist-sdk | top-level component | 1 |
| docs | documentation surface | 1 |
| docs-site | documentation surface | 1 |
| examples | top-level component | 1 |
| identity | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | openakita | openakita |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | typer |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/unit/test_mcp_envelope.py](../../../../sources/openakita__openakita/tests/unit/test_mcp_envelope.py) | mcp signal |
| mcp | [tests/unit/test_policy_v2_c10_mcp_lookup.py](../../../../sources/openakita__openakita/tests/unit/test_policy_v2_c10_mcp_lookup.py) | mcp signal |
| mcp | [src/openakita/mcp_server.py](../../../../sources/openakita__openakita/src/openakita/mcp_server.py) | mcp signal |
| mcp | [src/openakita/tools/mcp_catalog.py](../../../../sources/openakita__openakita/src/openakita/tools/mcp_catalog.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/openakita__openakita/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools-tmp/README.md](../../../../sources/openakita__openakita/tools-tmp/README.md) | agentRuntime signal |
| agentRuntime | [tools/audit_tauri_lifecycle.py](../../../../sources/openakita__openakita/tools/audit_tauri_lifecycle.py) | agentRuntime signal |
| agentRuntime | [tools/recover_sessions.py](../../../../sources/openakita__openakita/tools/recover_sessions.py) | agentRuntime signal |
| entrypoints | [src/openakita/__main__.py](../../../../sources/openakita__openakita/src/openakita/__main__.py) | entrypoints signal |
| entrypoints | [src/openakita/main.py](../../../../sources/openakita__openakita/src/openakita/main.py) | entrypoints signal |
| entrypoints | [src/openakita/api/server.py](../../../../sources/openakita__openakita/src/openakita/api/server.py) | entrypoints signal |
| entrypoints | [skills/image-understanding/scripts/main.py](../../../../sources/openakita__openakita/skills/image-understanding/scripts/main.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 210 | [src/openakita/__main__.py](../../../../sources/openakita__openakita/src/openakita/__main__.py)<br>[src/openakita/main.py](../../../../sources/openakita__openakita/src/openakita/main.py)<br>[src/openakita/api/server.py](../../../../sources/openakita__openakita/src/openakita/api/server.py)<br>[skills/image-understanding/scripts/main.py](../../../../sources/openakita__openakita/skills/image-understanding/scripts/main.py)<br>[skills/image-understander/scripts/main.py](../../../../sources/openakita__openakita/skills/image-understander/scripts/main.py)<br>[packages/plugin-ui-sdk/src/index.ts](../../../../sources/openakita__openakita/packages/plugin-ui-sdk/src/index.ts)<br>[cloud/bug-report-worker/src/index.ts](../../../../sources/openakita__openakita/cloud/bug-report-worker/src/index.ts)<br>[apps/setup-center/src-tauri/src/main.rs](../../../../sources/openakita__openakita/apps/setup-center/src-tauri/src/main.rs) |
| agentRuntime | 1282 | [AGENTS.md](../../../../sources/openakita__openakita/AGENTS.md)<br>[tools-tmp/README.md](../../../../sources/openakita__openakita/tools-tmp/README.md)<br>[tools/audit_tauri_lifecycle.py](../../../../sources/openakita__openakita/tools/audit_tauri_lifecycle.py)<br>[tools/recover_sessions.py](../../../../sources/openakita__openakita/tools/recover_sessions.py)<br>[tests/unit/tools/test_grep_safety.py](../../../../sources/openakita__openakita/tests/unit/tools/test_grep_safety.py)<br>[src/openakita/AGENTS.md](../../../../sources/openakita__openakita/src/openakita/AGENTS.md)<br>[src/openakita/utils/context_scan.py](../../../../sources/openakita__openakita/src/openakita/utils/context_scan.py)<br>[src/openakita/tools/__init__.py](../../../../sources/openakita__openakita/src/openakita/tools/__init__.py) |
| mcp | 39 | [tests/unit/test_mcp_envelope.py](../../../../sources/openakita__openakita/tests/unit/test_mcp_envelope.py)<br>[tests/unit/test_policy_v2_c10_mcp_lookup.py](../../../../sources/openakita__openakita/tests/unit/test_policy_v2_c10_mcp_lookup.py)<br>[src/openakita/mcp_server.py](../../../../sources/openakita__openakita/src/openakita/mcp_server.py)<br>[src/openakita/tools/mcp_catalog.py](../../../../sources/openakita__openakita/src/openakita/tools/mcp_catalog.py)<br>[src/openakita/tools/mcp_workspace.py](../../../../sources/openakita__openakita/src/openakita/tools/mcp_workspace.py)<br>[src/openakita/tools/mcp.py](../../../../sources/openakita__openakita/src/openakita/tools/mcp.py)<br>[src/openakita/tools/handlers/mcp.py](../../../../sources/openakita__openakita/src/openakita/tools/handlers/mcp.py)<br>[src/openakita/tools/definitions/mcp.py](../../../../sources/openakita__openakita/src/openakita/tools/definitions/mcp.py) |
| retrieval | 97 | [tests/test_memory_interaction.py](../../../../sources/openakita__openakita/tests/test_memory_interaction.py)<br>[tests/test_memory_system.py](../../../../sources/openakita__openakita/tests/test_memory_system.py)<br>[tests/unit/test_memory_md_limits.py](../../../../sources/openakita__openakita/tests/unit/test_memory_md_limits.py)<br>[tests/unit/test_memory_owner_isolation.py](../../../../sources/openakita__openakita/tests/unit/test_memory_owner_isolation.py)<br>[tests/unit/test_memory_provider_lifecycle.py](../../../../sources/openakita__openakita/tests/unit/test_memory_provider_lifecycle.py)<br>[tests/unit/test_memory_rule_gate.py](../../../../sources/openakita__openakita/tests/unit/test_memory_rule_gate.py)<br>[tests/unit/test_memory_scope_explicit.py](../../../../sources/openakita__openakita/tests/unit/test_memory_scope_explicit.py)<br>[tests/unit/test_memory_scope_isolation.py](../../../../sources/openakita__openakita/tests/unit/test_memory_scope_isolation.py) |
| spec | 112 | [requirements.txt](../../../../sources/openakita__openakita/requirements.txt)<br>[skills/superpowers-subagent-dev/spec-reviewer-prompt.md](../../../../sources/openakita__openakita/skills/superpowers-subagent-dev/spec-reviewer-prompt.md)<br>[skills/slack-gif-creator/requirements.txt](../../../../sources/openakita__openakita/skills/slack-gif-creator/requirements.txt)<br>[skills/mcp-builder/scripts/requirements.txt](../../../../sources/openakita__openakita/skills/mcp-builder/scripts/requirements.txt)<br>[skills/frontend-design/LICENSE.txt](../../../../sources/openakita__openakita/skills/frontend-design/LICENSE.txt)<br>[skills/frontend-design/SKILL.md](../../../../sources/openakita__openakita/skills/frontend-design/SKILL.md)<br>[skills/frontend-design/agents/openai.yaml](../../../../sources/openakita__openakita/skills/frontend-design/agents/openai.yaml)<br>[skills/canvas-design/LICENSE.txt](../../../../sources/openakita__openakita/skills/canvas-design/LICENSE.txt) |
| eval | 692 | [_exploratory_test_report.md](../../../../sources/openakita__openakita/_exploratory_test_report.md)<br>[tests/__init__.py](../../../../sources/openakita__openakita/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/openakita__openakita/tests/conftest.py)<br>[tests/interaction-refactor-test-plan.md](../../../../sources/openakita__openakita/tests/interaction-refactor-test-plan.md)<br>[tests/test_cancel.py](../../../../sources/openakita__openakita/tests/test_cancel.py)<br>[tests/test_concurrent_streaming.py](../../../../sources/openakita__openakita/tests/test_concurrent_streaming.py)<br>[tests/test_memory_interaction.py](../../../../sources/openakita__openakita/tests/test_memory_interaction.py)<br>[tests/test_memory_system.py](../../../../sources/openakita__openakita/tests/test_memory_system.py) |
| security | 117 | [SECURITY.md](../../../../sources/openakita__openakita/SECURITY.md)<br>[tools/audit_tauri_lifecycle.py](../../../../sources/openakita__openakita/tools/audit_tauri_lifecycle.py)<br>[tests/unit/test_action_claim_guard.py](../../../../sources/openakita__openakita/tests/unit/test_action_claim_guard.py)<br>[tests/unit/test_action_claim_recap_guard.py](../../../../sources/openakita__openakita/tests/unit/test_action_claim_recap_guard.py)<br>[tests/unit/test_agent_no_tool_policy.py](../../../../sources/openakita__openakita/tests/unit/test_agent_no_tool_policy.py)<br>[tests/unit/test_auth_persistence.py](../../../../sources/openakita__openakita/tests/unit/test_auth_persistence.py)<br>[tests/unit/test_auth_tokens_refactor.py](../../../../sources/openakita__openakita/tests/unit/test_auth_tokens_refactor.py)<br>[tests/unit/test_c17_audit_chain_hardening.py](../../../../sources/openakita__openakita/tests/unit/test_c17_audit_chain_hardening.py) |
| ci | 7 | [.github/workflows/backfill-oss.yml](../../../../sources/openakita__openakita/.github/workflows/backfill-oss.yml)<br>[.github/workflows/ci.yml](../../../../sources/openakita__openakita/.github/workflows/ci.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/openakita__openakita/.github/workflows/docker-publish.yml)<br>[.github/workflows/mobile.yml](../../../../sources/openakita__openakita/.github/workflows/mobile.yml)<br>[.github/workflows/publish-release.yml](../../../../sources/openakita__openakita/.github/workflows/publish-release.yml)<br>[.github/workflows/release-dryrun.yml](../../../../sources/openakita__openakita/.github/workflows/release-dryrun.yml)<br>[.github/workflows/release.yml](../../../../sources/openakita__openakita/.github/workflows/release.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/openakita__openakita/docker-compose.yml)<br>[Dockerfile](../../../../sources/openakita__openakita/Dockerfile) |
| instruction | 7 | [AGENTS.md](../../../../sources/openakita__openakita/AGENTS.md)<br>[src/openakita/AGENTS.md](../../../../sources/openakita__openakita/src/openakita/AGENTS.md)<br>[apps/setup-center/AGENTS.md](../../../../sources/openakita__openakita/apps/setup-center/AGENTS.md)<br>[.cursor/rules/add-internal-tool.mdc](../../../../sources/openakita__openakita/.cursor/rules/add-internal-tool.mdc)<br>[.cursor/rules/explain-for-beginner.mdc](../../../../sources/openakita__openakita/.cursor/rules/explain-for-beginner.mdc)<br>[.cursor/rules/no-cursor-coauthor-trailer.mdc](../../../../sources/openakita__openakita/.cursor/rules/no-cursor-coauthor-trailer.mdc)<br>[.cursor/rules/project-identity.mdc](../../../../sources/openakita__openakita/.cursor/rules/project-identity.mdc) |
| docs | 128 | [README_CN.md](../../../../sources/openakita__openakita/README_CN.md)<br>[README.md](../../../../sources/openakita__openakita/README.md)<br>[tools-tmp/README.md](../../../../sources/openakita__openakita/tools-tmp/README.md)<br>[skills/agent-browser/README.md](../../../../sources/openakita__openakita/skills/agent-browser/README.md)<br>[plugins/word-maker/README.md](../../../../sources/openakita__openakita/plugins/word-maker/README.md)<br>[plugins/tongyi-image/README.md](../../../../sources/openakita__openakita/plugins/tongyi-image/README.md)<br>[plugins/subtitle-craft/README.md](../../../../sources/openakita__openakita/plugins/subtitle-craft/README.md)<br>[plugins/seedance-video/README.md](../../../../sources/openakita__openakita/plugins/seedance-video/README.md) |
| config | 27 | [pyproject.toml](../../../../sources/openakita__openakita/pyproject.toml)<br>[requirements.txt](../../../../sources/openakita__openakita/requirements.txt)<br>[uv.lock](../../../../sources/openakita__openakita/uv.lock)<br>[skills/slack-gif-creator/requirements.txt](../../../../sources/openakita__openakita/skills/slack-gif-creator/requirements.txt)<br>[skills/moltbook/package.json](../../../../sources/openakita__openakita/skills/moltbook/package.json)<br>[skills/mcp-builder/scripts/requirements.txt](../../../../sources/openakita__openakita/skills/mcp-builder/scripts/requirements.txt)<br>[plugins/word-maker/requirements.txt](../../../../sources/openakita__openakita/plugins/word-maker/requirements.txt)<br>[plugins/ppt-maker/requirements.txt](../../../../sources/openakita__openakita/plugins/ppt-maker/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 692 | [_exploratory_test_report.md](../../../../sources/openakita__openakita/_exploratory_test_report.md)<br>[tests/__init__.py](../../../../sources/openakita__openakita/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/openakita__openakita/tests/conftest.py)<br>[tests/interaction-refactor-test-plan.md](../../../../sources/openakita__openakita/tests/interaction-refactor-test-plan.md)<br>[tests/test_cancel.py](../../../../sources/openakita__openakita/tests/test_cancel.py)<br>[tests/test_concurrent_streaming.py](../../../../sources/openakita__openakita/tests/test_concurrent_streaming.py) |
| CI workflow | 7 | [.github/workflows/backfill-oss.yml](../../../../sources/openakita__openakita/.github/workflows/backfill-oss.yml)<br>[.github/workflows/ci.yml](../../../../sources/openakita__openakita/.github/workflows/ci.yml)<br>[.github/workflows/docker-publish.yml](../../../../sources/openakita__openakita/.github/workflows/docker-publish.yml)<br>[.github/workflows/mobile.yml](../../../../sources/openakita__openakita/.github/workflows/mobile.yml)<br>[.github/workflows/publish-release.yml](../../../../sources/openakita__openakita/.github/workflows/publish-release.yml)<br>[.github/workflows/release-dryrun.yml](../../../../sources/openakita__openakita/.github/workflows/release-dryrun.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/openakita__openakita/docker-compose.yml)<br>[Dockerfile](../../../../sources/openakita__openakita/Dockerfile) |
| 보안/정책 | 117 | [SECURITY.md](../../../../sources/openakita__openakita/SECURITY.md)<br>[tools/audit_tauri_lifecycle.py](../../../../sources/openakita__openakita/tools/audit_tauri_lifecycle.py)<br>[tests/unit/test_action_claim_guard.py](../../../../sources/openakita__openakita/tests/unit/test_action_claim_guard.py)<br>[tests/unit/test_action_claim_recap_guard.py](../../../../sources/openakita__openakita/tests/unit/test_action_claim_recap_guard.py)<br>[tests/unit/test_agent_no_tool_policy.py](../../../../sources/openakita__openakita/tests/unit/test_agent_no_tool_policy.py)<br>[tests/unit/test_auth_persistence.py](../../../../sources/openakita__openakita/tests/unit/test_auth_persistence.py) |
| 에이전트 지시문 | 7 | [AGENTS.md](../../../../sources/openakita__openakita/AGENTS.md)<br>[src/openakita/AGENTS.md](../../../../sources/openakita__openakita/src/openakita/AGENTS.md)<br>[apps/setup-center/AGENTS.md](../../../../sources/openakita__openakita/apps/setup-center/AGENTS.md)<br>[.cursor/rules/add-internal-tool.mdc](../../../../sources/openakita__openakita/.cursor/rules/add-internal-tool.mdc)<br>[.cursor/rules/explain-for-beginner.mdc](../../../../sources/openakita__openakita/.cursor/rules/explain-for-beginner.mdc)<br>[.cursor/rules/no-cursor-coauthor-trailer.mdc](../../../../sources/openakita__openakita/.cursor/rules/no-cursor-coauthor-trailer.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/unit/test_mcp_envelope.py`, `tests/unit/test_policy_v2_c10_mcp_lookup.py`, `src/openakita/mcp_server.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/openakita/__main__.py`, `src/openakita/main.py`, `src/openakita/api/server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools-tmp/README.md`, `tools/audit_tauri_lifecycle.py`.
4. retrieval/memory/indexing 확인: `tests/test_memory_interaction.py`, `tests/test_memory_system.py`, `tests/unit/test_memory_md_limits.py`.
5. test/eval 파일로 동작 검증: `_exploratory_test_report.md`, `tests/__init__.py`, `tests/conftest.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 An open source AI assistant framework with skills and agent architecture. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, docker-compose.yml, README.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
