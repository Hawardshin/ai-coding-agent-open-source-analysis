# Dicklesworthstone/mcp_agent_mail 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Asynchronous coordination layer for AI coding agents: identities, inboxes, searchable threads, and advisory file leases over FastMCP + Git + SQLite

## 요약

- 조사 단위: `sources/Dicklesworthstone__mcp_agent_mail` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 287 files, 34 directories, depth score 121, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, cline.mcp.json, codex.mcp.json이고, 의존성 단서는 mcp, fastapi, vscode, typer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Dicklesworthstone/mcp_agent_mail |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1990 |
| Forks | 209 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Dicklesworthstone__mcp_agent_mail](../../../../sources/Dicklesworthstone__mcp_agent_mail) |
| 기존 보고서 | [reports/global-trending/repositories/Dicklesworthstone__mcp_agent_mail.md](../../../global-trending/repositories/Dicklesworthstone__mcp_agent_mail.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 287 / 34 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .beads, .claude, .codex, .githooks, .github, deploy, docs, examples, screenshots, scripts, src, tests, third_party_docs, web |
| 상위 확장자 | .py: 160, .md: 23, .sh: 23, .html: 22, .json: 12, (none): 10, .yml: 8, .webp: 7, .js: 3, .jsonl: 3, .toml: 3, .yaml: 3 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 57 |
| src | source boundary | 37 |
| docs | documentation surface | 19 |
| web | source boundary | 2 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| deploy | deployment surface | 1 |
| examples | top-level component | 1 |
| screenshots | top-level component | 1 |
| scripts | top-level component | 1 |
| third_party_docs | documentation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | serve-http | make serve-http |
| utility | Makefile | migrate | make migrate |
| quality | Makefile | lint | make lint |
| quality | Makefile | typecheck | make typecheck |
| utility | Makefile | guard-install | make guard-install |
| utility | Makefile | guard-uninstall | make guard-uninstall |
| utility | Makefile | claims | make claims |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | vscode, typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/.mcp.json) | mcp signal |
| mcp | [cline.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/cline.mcp.json) | mcp signal |
| mcp | [codex.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/codex.mcp.json) | mcp signal |
| mcp | [cursor.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/cursor.mcp.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/AGENTS.md) | agentRuntime signal |
| agentRuntime | [SKILL.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/SKILL.md) | agentRuntime signal |
| agentRuntime | [scripts/hooks/check_inbox.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail/scripts/hooks/check_inbox.sh) | agentRuntime signal |
| agentRuntime | [scripts/hooks/codex_notify.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail/scripts/hooks/codex_notify.sh) | agentRuntime signal |
| entrypoints | [src/mcp_agent_mail/__main__.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/src/mcp_agent_mail/__main__.py) | entrypoints signal |
| instruction | [.codex/config.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.codex/config.toml) | instruction signal |
| config | [Makefile](../../../../sources/Dicklesworthstone__mcp_agent_mail/Makefile) | config signal |
| config | [pyproject.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/mcp_agent_mail/__main__.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/src/mcp_agent_mail/__main__.py) |
| agentRuntime | 10 | [AGENTS.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/AGENTS.md)<br>[SKILL.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/SKILL.md)<br>[scripts/hooks/check_inbox.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail/scripts/hooks/check_inbox.sh)<br>[scripts/hooks/codex_notify.sh](../../../../sources/Dicklesworthstone__mcp_agent_mail/scripts/hooks/codex_notify.sh)<br>[screenshots/webp/agent_mail_overview.webp](../../../../sources/Dicklesworthstone__mcp_agent_mail/screenshots/webp/agent_mail_overview.webp)<br>[screenshots/output/agent_mail_showcase.gif](../../../../sources/Dicklesworthstone__mcp_agent_mail/screenshots/output/agent_mail_showcase.gif)<br>[screenshots/output/agent_mail_showcase.mp4](../../../../sources/Dicklesworthstone__mcp_agent_mail/screenshots/output/agent_mail_showcase.mp4)<br>[docs/planning/AGENT_FRIENDLINESS_REPORT.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/planning/AGENT_FRIENDLINESS_REPORT.md) |
| mcp | 54 | [.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/.mcp.json)<br>[cline.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/cline.mcp.json)<br>[codex.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/codex.mcp.json)<br>[cursor.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/cursor.mcp.json)<br>[gemini.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/gemini.mcp.json)<br>[windsurf.mcp.json](../../../../sources/Dicklesworthstone__mcp_agent_mail/windsurf.mcp.json)<br>[third_party_docs/mcp_protocol_specs.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/third_party_docs/mcp_protocol_specs.md)<br>[tests/test_mcp_resources.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_mcp_resources.py) |
| retrieval | 4 | [web/index.html](../../../../sources/Dicklesworthstone__mcp_agent_mail/web/index.html)<br>[tests/test_git_index_lock.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_git_index_lock.py)<br>[src/mcp_agent_mail/viewer_assets/index.html](../../../../sources/Dicklesworthstone__mcp_agent_mail/src/mcp_agent_mail/viewer_assets/index.html)<br>[src/mcp_agent_mail/templates/mail_index.html](../../../../sources/Dicklesworthstone__mcp_agent_mail/src/mcp_agent_mail/templates/mail_index.html) |
| spec | 3 | [docs/GUIDE_TO_OPTIMAL_MCP_SERVER_DESIGN.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/GUIDE_TO_OPTIMAL_MCP_SERVER_DESIGN.md)<br>[docs/adr/002-rust-optimization-analysis.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/adr/002-rust-optimization-analysis.md)<br>[docs/adr/README.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/adr/README.md) |
| eval | 147 | [tests/__init__.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/conftest.py)<br>[tests/test_ack_views_details.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_ack_views_details.py)<br>[tests/test_agent_name_validation.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_agent_name_validation.py)<br>[tests/test_am_run_basic.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_am_run_basic.py)<br>[tests/test_app_helpers.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_app_helpers.py)<br>[tests/test_archive_browser.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_archive_browser.py)<br>[tests/test_attachment_policy.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_attachment_policy.py) |
| security | 16 | [tests/test_attachment_policy.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_attachment_policy.py)<br>[tests/test_cli_guard_commands.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_cli_guard_commands.py)<br>[tests/test_contact_policy.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_contact_policy.py)<br>[tests/test_guard_edges.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_edges.py)<br>[tests/test_guard_integration.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_integration.py)<br>[tests/test_guard_prepush.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_prepush.py)<br>[tests/test_guard_rename.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_rename.py)<br>[tests/test_guard_render.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_render.py) |
| ci | 5 | [.github/workflows/acfs-checksums-dispatch.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/acfs-checksums-dispatch.yml)<br>[.github/workflows/ci.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/ci.yml)<br>[.github/workflows/nightly.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/nightly.yml)<br>[.github/workflows/notify-acfs.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/notify-acfs.yml)<br>[.github/workflows/release.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/release.yml) |
| container | 9 | [compose.yaml](../../../../sources/Dicklesworthstone__mcp_agent_mail/compose.yaml)<br>[docker-compose.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/docker-compose.yml)<br>[Dockerfile](../../../../sources/Dicklesworthstone__mcp_agent_mail/Dockerfile)<br>[deploy/gunicorn.conf.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/gunicorn.conf.py)<br>[deploy/systemd/mcp-agent-mail.service](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/systemd/mcp-agent-mail.service)<br>[deploy/observability/prometheus_rules.sample.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/observability/prometheus_rules.sample.yml)<br>[deploy/logrotate/mcp-agent-mail](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/logrotate/mcp-agent-mail)<br>[deploy/capabilities/agent_capabilities.example.yaml](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/capabilities/agent_capabilities.example.yaml) |
| instruction | 2 | [AGENTS.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/AGENTS.md)<br>[.codex/config.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.codex/config.toml) |
| docs | 16 | [README.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/README.md)<br>[docs/GUIDE_TO_OPTIMAL_MCP_SERVER_DESIGN.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/GUIDE_TO_OPTIMAL_MCP_SERVER_DESIGN.md)<br>[docs/IDENTITY_CONTRACT.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/IDENTITY_CONTRACT.md)<br>[docs/observability.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/observability.md)<br>[docs/operations_alignment_checklist.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/operations_alignment_checklist.md)<br>[docs/research/globtrie-analysis.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/research/globtrie-analysis.md)<br>[docs/planning/AGENT_FRIENDLINESS_REPORT.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/planning/AGENT_FRIENDLINESS_REPORT.md)<br>[docs/planning/PLAN_TO_ENABLE_EASY_AND_SECURE_SHARING_OF_AGENT_MAILBOX.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/docs/planning/PLAN_TO_ENABLE_EASY_AND_SECURE_SHARING_OF_AGENT_MAILBOX.md) |
| config | 3 | [Makefile](../../../../sources/Dicklesworthstone__mcp_agent_mail/Makefile)<br>[pyproject.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail/pyproject.toml)<br>[uv.lock](../../../../sources/Dicklesworthstone__mcp_agent_mail/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 147 | [tests/__init__.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/conftest.py)<br>[tests/test_ack_views_details.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_ack_views_details.py)<br>[tests/test_agent_name_validation.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_agent_name_validation.py)<br>[tests/test_am_run_basic.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_am_run_basic.py)<br>[tests/test_app_helpers.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_app_helpers.py) |
| CI workflow | 5 | [.github/workflows/acfs-checksums-dispatch.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/acfs-checksums-dispatch.yml)<br>[.github/workflows/ci.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/ci.yml)<br>[.github/workflows/nightly.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/nightly.yml)<br>[.github/workflows/notify-acfs.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/notify-acfs.yml)<br>[.github/workflows/release.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.github/workflows/release.yml) |
| 컨테이너/배포 | 9 | [compose.yaml](../../../../sources/Dicklesworthstone__mcp_agent_mail/compose.yaml)<br>[docker-compose.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/docker-compose.yml)<br>[Dockerfile](../../../../sources/Dicklesworthstone__mcp_agent_mail/Dockerfile)<br>[deploy/gunicorn.conf.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/gunicorn.conf.py)<br>[deploy/systemd/mcp-agent-mail.service](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/systemd/mcp-agent-mail.service)<br>[deploy/observability/prometheus_rules.sample.yml](../../../../sources/Dicklesworthstone__mcp_agent_mail/deploy/observability/prometheus_rules.sample.yml) |
| 보안/정책 | 16 | [tests/test_attachment_policy.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_attachment_policy.py)<br>[tests/test_cli_guard_commands.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_cli_guard_commands.py)<br>[tests/test_contact_policy.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_contact_policy.py)<br>[tests/test_guard_edges.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_edges.py)<br>[tests/test_guard_integration.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_integration.py)<br>[tests/test_guard_prepush.py](../../../../sources/Dicklesworthstone__mcp_agent_mail/tests/test_guard_prepush.py) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/Dicklesworthstone__mcp_agent_mail/AGENTS.md)<br>[.codex/config.toml](../../../../sources/Dicklesworthstone__mcp_agent_mail/.codex/config.toml) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `cline.mcp.json`, `codex.mcp.json`.
2. entrypoint를 따라 실행 흐름 확인: `src/mcp_agent_mail/__main__.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `SKILL.md`, `scripts/hooks/check_inbox.sh`.
4. retrieval/memory/indexing 확인: `web/index.html`, `tests/test_git_index_lock.py`, `src/mcp_agent_mail/viewer_assets/index.html`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_ack_views_details.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Asynchronous coordination layer for AI coding agents identities, inboxes, searchable threads, and advisory file leases o. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, Makefile, README.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
