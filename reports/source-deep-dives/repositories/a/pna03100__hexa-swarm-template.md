# pna03100/hexa-swarm-template 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Claude-native enterprise delivery methodology — Copier template + hexaswarm-core CLI. 6-agent architecture, S1–S6 safety invariants, 28 production deployments. Korea × Japan APAC: LUMENRAI Corp × No.1 Solutions Sales Agency Agreement signed 2026-04-14 (Singapore law). Q2 2026 Korean on-premise AI launch. Claude Code Max-native.

## 요약

- 조사 단위: `sources/pna03100__hexa-swarm-template` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 235 files, 84 directories, depth score 110, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=hexa_swarm_core/tests/test_mcp_openapi.py, hexa_swarm_core/hexa_swarm_core/mcp/__init__.py, hexa_swarm_core/hexa_swarm_core/mcp/openapi_server.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | pna03100/hexa-swarm-template |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/pna03100__hexa-swarm-template](../../../../sources/pna03100__hexa-swarm-template) |
| 기존 보고서 | [reports/korea-trending/repositories/pna03100__hexa-swarm-template.md](../../../korea-trending/repositories/pna03100__hexa-swarm-template.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 235 / 84 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, {{project_slug}}, docs, examples, hexa_swarm_core |
| 상위 확장자 | .py: 101, .md: 75, .jinja: 34, (none): 10, .toml: 5, .yml: 4, .json: 2, .sh: 2, .ipynb: 1, .yaml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 13 |
| examples/data-pipeline-py-celery | examples workspace | 3 |
| examples/library-py | examples workspace | 3 |
| examples/ml-training-py | examples workspace | 2 |
| examples/rpa-bot-py-click | examples workspace | 2 |
| .github | ci surface | 1 |
| {{project_slug}} | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| hexa_swarm_core | top-level component | 1 |


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
| mcp | [hexa_swarm_core/tests/test_mcp_openapi.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_mcp_openapi.py) | mcp signal |
| mcp | [hexa_swarm_core/hexa_swarm_core/mcp/__init__.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/mcp/__init__.py) | mcp signal |
| mcp | [hexa_swarm_core/hexa_swarm_core/mcp/openapi_server.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/mcp/openapi_server.py) | mcp signal |
| mcp | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/mcp.json](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/mcp.json) | mcp signal |
| agentRuntime | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/worktree-boot/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/worktree-boot/SKILL.md) | agentRuntime signal |
| agentRuntime | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/ship/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/ship/SKILL.md) | agentRuntime signal |
| agentRuntime | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md) | agentRuntime signal |
| agentRuntime | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/quality-gate/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/quality-gate/SKILL.md) | agentRuntime signal |
| entrypoints | [hexa_swarm_core/hexa_swarm_core/cli/__main__.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/cli/__main__.py) | entrypoints signal |
| entrypoints | [{{project_slug}}/src/backend/main.py.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/main.py.jinja) | entrypoints signal |
| instruction | [{{project_slug}}/AGENTS.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/AGENTS.md.jinja) | instruction signal |
| instruction | [{{project_slug}}/CLAUDE.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/CLAUDE.md.jinja) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [hexa_swarm_core/hexa_swarm_core/cli/__main__.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/cli/__main__.py)<br>[{{project_slug}}/src/backend/main.py.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/main.py.jinja) |
| agentRuntime | 58 | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/worktree-boot/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/worktree-boot/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/ship/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/ship/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/quality-gate/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/quality-gate/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/fix-issue/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/fix-issue/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/deploy-check/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/deploy-check/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/cross-sync-alert/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/cross-sync-alert/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/cost-tracker/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/cost-tracker/SKILL.md) |
| mcp | 6 | [hexa_swarm_core/tests/test_mcp_openapi.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_mcp_openapi.py)<br>[hexa_swarm_core/hexa_swarm_core/mcp/__init__.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/mcp/__init__.py)<br>[hexa_swarm_core/hexa_swarm_core/mcp/openapi_server.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/mcp/openapi_server.py)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/mcp.json](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/mcp.json)<br>[docs/mcp-integration.md](../../../../sources/pna03100__hexa-swarm-template/docs/mcp-integration.md)<br>[{{project_slug}}/.claude/mcp.json.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.claude/mcp.json.jinja) |
| retrieval | 1 | [examples/data-pipeline-py-celery/pipelines/ingest.py](../../../../sources/pna03100__hexa-swarm-template/examples/data-pipeline-py-celery/pipelines/ingest.py) |
| spec | 3 | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/ARCHITECTURE_DECISIONS/0001-adopted-hexa.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/ARCHITECTURE_DECISIONS/0001-adopted-hexa.md)<br>[{{project_slug}}/src/backend/requirements.txt.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/requirements.txt.jinja)<br>[{{project_slug}}/.ai-sync/ARCHITECTURE_DECISIONS.md](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.ai-sync/ARCHITECTURE_DECISIONS.md) |
| eval | 30 | [hexa_swarm_core/tests/__init__.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/__init__.py)<br>[hexa_swarm_core/tests/conftest.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/conftest.py)<br>[hexa_swarm_core/tests/test_adapters.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_adapters.py)<br>[hexa_swarm_core/tests/test_archetypes.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_archetypes.py)<br>[hexa_swarm_core/tests/test_cli.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_cli.py)<br>[hexa_swarm_core/tests/test_cost_and_safety.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_cost_and_safety.py)<br>[hexa_swarm_core/tests/test_install.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_install.py)<br>[hexa_swarm_core/tests/test_invariants.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_invariants.py) |
| security | 9 | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/hooks/pre_tool_use_guard.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/hooks/pre_tool_use_guard.py)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/audit/.gitkeep](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/audit/.gitkeep)<br>[{{project_slug}}/src/backend/auth.py.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/auth.py.jinja)<br>[{{project_slug}}/src/backend/tests/test_security.py.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/tests/test_security.py.jinja)<br>[{{project_slug}}/.github/workflows/security-audit.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/security-audit.yml.jinja)<br>[{{project_slug}}/.claude/skills/security-audit/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.claude/skills/security-audit/SKILL.md)<br>[{{project_slug}}/.claude/hooks/pre_tool_use_guard.py](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.claude/hooks/pre_tool_use_guard.py) |
| ci | 11 | [{{project_slug}}/.github/workflows/backend-ci.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/backend-ci.yml.jinja)<br>[{{project_slug}}/.github/workflows/contracts-drift.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/contracts-drift.yml.jinja)<br>[{{project_slug}}/.github/workflows/cost-cap.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/cost-cap.yml.jinja)<br>[{{project_slug}}/.github/workflows/frontend-ci.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/frontend-ci.yml.jinja)<br>[{{project_slug}}/.github/workflows/invariants.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/invariants.yml.jinja)<br>[{{project_slug}}/.github/workflows/ownership.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/ownership.yml.jinja)<br>[{{project_slug}}/.github/workflows/parallel-lane.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/parallel-lane.yml.jinja)<br>[{{project_slug}}/.github/workflows/security-audit.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/security-audit.yml.jinja) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [{{project_slug}}/AGENTS.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/AGENTS.md.jinja)<br>[{{project_slug}}/CLAUDE.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/CLAUDE.md.jinja)<br>[{{project_slug}}/src/backend/CLAUDE.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/CLAUDE.md.jinja) |
| docs | 20 | [README.md](../../../../sources/pna03100__hexa-swarm-template/README.md)<br>[hexa_swarm_core/README.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/README.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/contracts/README.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/contracts/README.md)<br>[examples/README.md](../../../../sources/pna03100__hexa-swarm-template/examples/README.md)<br>[examples/rpa-bot-py-click/README.md](../../../../sources/pna03100__hexa-swarm-template/examples/rpa-bot-py-click/README.md)<br>[examples/ml-training-py/README.md](../../../../sources/pna03100__hexa-swarm-template/examples/ml-training-py/README.md)<br>[examples/library-py/README.md](../../../../sources/pna03100__hexa-swarm-template/examples/library-py/README.md)<br>[examples/data-pipeline-py-celery/README.md](../../../../sources/pna03100__hexa-swarm-template/examples/data-pipeline-py-celery/README.md) |
| config | 5 | [hexa_swarm_core/pyproject.toml](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/pyproject.toml)<br>[examples/rpa-bot-py-click/pyproject.toml](../../../../sources/pna03100__hexa-swarm-template/examples/rpa-bot-py-click/pyproject.toml)<br>[examples/ml-training-py/pyproject.toml](../../../../sources/pna03100__hexa-swarm-template/examples/ml-training-py/pyproject.toml)<br>[examples/library-py/pyproject.toml](../../../../sources/pna03100__hexa-swarm-template/examples/library-py/pyproject.toml)<br>[examples/data-pipeline-py-celery/pyproject.toml](../../../../sources/pna03100__hexa-swarm-template/examples/data-pipeline-py-celery/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 30 | [hexa_swarm_core/tests/__init__.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/__init__.py)<br>[hexa_swarm_core/tests/conftest.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/conftest.py)<br>[hexa_swarm_core/tests/test_adapters.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_adapters.py)<br>[hexa_swarm_core/tests/test_archetypes.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_archetypes.py)<br>[hexa_swarm_core/tests/test_cli.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_cli.py)<br>[hexa_swarm_core/tests/test_cost_and_safety.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/tests/test_cost_and_safety.py) |
| CI workflow | 11 | [{{project_slug}}/.github/workflows/backend-ci.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/backend-ci.yml.jinja)<br>[{{project_slug}}/.github/workflows/contracts-drift.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/contracts-drift.yml.jinja)<br>[{{project_slug}}/.github/workflows/cost-cap.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/cost-cap.yml.jinja)<br>[{{project_slug}}/.github/workflows/frontend-ci.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/frontend-ci.yml.jinja)<br>[{{project_slug}}/.github/workflows/invariants.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/invariants.yml.jinja)<br>[{{project_slug}}/.github/workflows/ownership.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/ownership.yml.jinja) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 9 | [hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/hooks/pre_tool_use_guard.py](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/hooks/pre_tool_use_guard.py)<br>[hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/audit/.gitkeep](../../../../sources/pna03100__hexa-swarm-template/hexa_swarm_core/hexa_swarm_core/assets/tier_a/.ai-sync/audit/.gitkeep)<br>[{{project_slug}}/src/backend/auth.py.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/auth.py.jinja)<br>[{{project_slug}}/src/backend/tests/test_security.py.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/tests/test_security.py.jinja)<br>[{{project_slug}}/.github/workflows/security-audit.yml.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/.github/workflows/security-audit.yml.jinja) |
| 에이전트 지시문 | 3 | [{{project_slug}}/AGENTS.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/AGENTS.md.jinja)<br>[{{project_slug}}/CLAUDE.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/CLAUDE.md.jinja)<br>[{{project_slug}}/src/backend/CLAUDE.md.jinja](../../../../sources/pna03100__hexa-swarm-template/{{project_slug}}/src/backend/CLAUDE.md.jinja) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `hexa_swarm_core/tests/test_mcp_openapi.py`, `hexa_swarm_core/hexa_swarm_core/mcp/__init__.py`, `hexa_swarm_core/hexa_swarm_core/mcp/openapi_server.py`.
2. entrypoint를 따라 실행 흐름 확인: `hexa_swarm_core/hexa_swarm_core/cli/__main__.py`, `{{project_slug}}/src/backend/main.py.jinja`.
3. agent/tool runtime 매핑: `hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/worktree-boot/SKILL.md`, `hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/ship/SKILL.md`, `hexa_swarm_core/hexa_swarm_core/assets/tier_a/.claude/skills/security-audit/SKILL.md`.
4. retrieval/memory/indexing 확인: `examples/data-pipeline-py-celery/pipelines/ingest.py`.
5. test/eval 파일로 동작 검증: `hexa_swarm_core/tests/__init__.py`, `hexa_swarm_core/tests/conftest.py`, `hexa_swarm_core/tests/test_adapters.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Claude native enterprise delivery methodology — Copier template + hexaswarm core CLI. 6 agent architecture, S1–S6 safety. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
