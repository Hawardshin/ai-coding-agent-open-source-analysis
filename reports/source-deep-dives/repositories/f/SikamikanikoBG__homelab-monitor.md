# SikamikanikoBG/homelab-monitor 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Plug-and-play homelab dashboard in one container — GPU, local-AI VRAM, Docker, systemd, host health. Built-in read-only MCP server so AI agents can explore it too.

## 요약

- 조사 단위: `sources/SikamikanikoBG__homelab-monitor` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 114 files, 16 directories, depth score 106, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_status.py, website/mcp.md, website/assets/mcp-agents.svg이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | SikamikanikoBG/homelab-monitor |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 126 |
| Forks | 20 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/SikamikanikoBG__homelab-monitor](../../../../sources/SikamikanikoBG__homelab-monitor) |
| 기존 보고서 | [reports/global-trending/repositories/SikamikanikoBG__homelab-monitor.md](../../../global-trending/repositories/SikamikanikoBG__homelab-monitor.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 114 / 16 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, deploy, design, docs, mcp, scripts, static, tests, website |
| 상위 확장자 | .py: 30, .md: 26, .png: 22, .yml: 10, .svg: 7, (none): 5, .json: 4, .gif: 2, .html: 2, .css: 1, .js: 1, .mp4: 1 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 26 |
| tests | validation surface | 18 |
| .github | ci surface | 1 |
| deploy | deployment surface | 1 |
| design | top-level component | 1 |
| mcp | top-level component | 1 |
| scripts | top-level component | 1 |
| static | top-level component | 1 |
| website | documentation surface | 1 |


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
| mcp | [mcp_status.py](../../../../sources/SikamikanikoBG__homelab-monitor/mcp_status.py) | mcp signal |
| mcp | [website/mcp.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/mcp.md) | mcp signal |
| mcp | [website/assets/mcp-agents.svg](../../../../sources/SikamikanikoBG__homelab-monitor/website/assets/mcp-agents.svg) | mcp signal |
| mcp | [tests/test_mcp_status.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_mcp_status.py) | mcp signal |
| entrypoints | [server.json](../../../../sources/SikamikanikoBG__homelab-monitor/server.json) | entrypoints signal |
| entrypoints | [mcp/server.py](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/server.py) | entrypoints signal |
| config | [mcp/requirements.txt](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/requirements.txt) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/discord-announce.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/discord-announce.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/SikamikanikoBG__homelab-monitor/docker-compose.yml) | container support |
| container | [Dockerfile](../../../../sources/SikamikanikoBG__homelab-monitor/Dockerfile) | container support |
| eval | [tests/test_backup.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_backup.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [server.json](../../../../sources/SikamikanikoBG__homelab-monitor/server.json)<br>[mcp/server.py](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/server.py) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 11 | [mcp_status.py](../../../../sources/SikamikanikoBG__homelab-monitor/mcp_status.py)<br>[website/mcp.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/mcp.md)<br>[website/assets/mcp-agents.svg](../../../../sources/SikamikanikoBG__homelab-monitor/website/assets/mcp-agents.svg)<br>[tests/test_mcp_status.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_mcp_status.py)<br>[mcp/homelab_client.py](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/homelab_client.py)<br>[mcp/README.md](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/README.md)<br>[mcp/requirements.txt](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/requirements.txt)<br>[mcp/server.py](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/server.py) |
| retrieval | 1 | [website/index.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/index.md) |
| spec | 13 | [mcp/requirements.txt](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/requirements.txt)<br>[docs/architecture.svg](../../../../sources/SikamikanikoBG__homelab-monitor/docs/architecture.svg)<br>[design/migration-parity.md](../../../../sources/SikamikanikoBG__homelab-monitor/design/migration-parity.md)<br>[design/nav-mockups.html](../../../../sources/SikamikanikoBG__homelab-monitor/design/nav-mockups.html)<br>[design/ai-cockpit/MORNING-REPORT.md](../../../../sources/SikamikanikoBG__homelab-monitor/design/ai-cockpit/MORNING-REPORT.md)<br>[design/ai-cockpit/PLAN.md](../../../../sources/SikamikanikoBG__homelab-monitor/design/ai-cockpit/PLAN.md)<br>[design/ai-cockpit/RELEASE-DRAFT.md](../../../../sources/SikamikanikoBG__homelab-monitor/design/ai-cockpit/RELEASE-DRAFT.md)<br>[design/ai-cockpit/research-A-feature-catalog.md](../../../../sources/SikamikanikoBG__homelab-monitor/design/ai-cockpit/research-A-feature-catalog.md) |
| eval | 19 | [tests/test_backup.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_backup.py)<br>[tests/test_cost.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_cost.py)<br>[tests/test_costs.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_costs.py)<br>[tests/test_devtools.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_devtools.py)<br>[tests/test_experiments.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_experiments.py)<br>[tests/test_gputelemetry.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_gputelemetry.py)<br>[tests/test_hardening.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_hardening.py)<br>[tests/test_integrations.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_integrations.py) |
| security | 1 | [docs/security.png](../../../../sources/SikamikanikoBG__homelab-monitor/docs/security.png) |
| ci | 7 | [.github/workflows/ci.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/ci.yml)<br>[.github/workflows/discord-announce.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/discord-announce.yml)<br>[.github/workflows/docs.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/docs.yml)<br>[.github/workflows/hub-readme-sync.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/hub-readme-sync.yml)<br>[.github/workflows/release.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/release.yml)<br>[.github/workflows/selfhst-newsletter.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/selfhst-newsletter.yml)<br>[.github/workflows/stats.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/stats.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/SikamikanikoBG__homelab-monitor/docker-compose.yml)<br>[Dockerfile](../../../../sources/SikamikanikoBG__homelab-monitor/Dockerfile)<br>[deploy/docker-compose.next.yml](../../../../sources/SikamikanikoBG__homelab-monitor/deploy/docker-compose.next.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 47 | [mkdocs.yml](../../../../sources/SikamikanikoBG__homelab-monitor/mkdocs.yml)<br>[README.md](../../../../sources/SikamikanikoBG__homelab-monitor/README.md)<br>[website/configuration.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/configuration.md)<br>[website/contributing.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/contributing.md)<br>[website/features.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/features.md)<br>[website/how-it-works.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/how-it-works.md)<br>[website/index.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/index.md)<br>[website/install.md](../../../../sources/SikamikanikoBG__homelab-monitor/website/install.md) |
| config | 1 | [mcp/requirements.txt](../../../../sources/SikamikanikoBG__homelab-monitor/mcp/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 19 | [tests/test_backup.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_backup.py)<br>[tests/test_cost.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_cost.py)<br>[tests/test_costs.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_costs.py)<br>[tests/test_devtools.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_devtools.py)<br>[tests/test_experiments.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_experiments.py)<br>[tests/test_gputelemetry.py](../../../../sources/SikamikanikoBG__homelab-monitor/tests/test_gputelemetry.py) |
| CI workflow | 7 | [.github/workflows/ci.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/ci.yml)<br>[.github/workflows/discord-announce.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/discord-announce.yml)<br>[.github/workflows/docs.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/docs.yml)<br>[.github/workflows/hub-readme-sync.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/hub-readme-sync.yml)<br>[.github/workflows/release.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/release.yml)<br>[.github/workflows/selfhst-newsletter.yml](../../../../sources/SikamikanikoBG__homelab-monitor/.github/workflows/selfhst-newsletter.yml) |
| 컨테이너/배포 | 3 | [docker-compose.yml](../../../../sources/SikamikanikoBG__homelab-monitor/docker-compose.yml)<br>[Dockerfile](../../../../sources/SikamikanikoBG__homelab-monitor/Dockerfile)<br>[deploy/docker-compose.next.yml](../../../../sources/SikamikanikoBG__homelab-monitor/deploy/docker-compose.next.yml) |
| 보안/정책 | 1 | [docs/security.png](../../../../sources/SikamikanikoBG__homelab-monitor/docs/security.png) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp_status.py`, `website/mcp.md`, `website/assets/mcp-agents.svg`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `mcp/server.py`.
3. retrieval/memory/indexing 확인: `website/index.md`.
4. test/eval 파일로 동작 검증: `tests/test_backup.py`, `tests/test_cost.py`, `tests/test_costs.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Plug and play homelab dashboard in one container — GPU, local AI VRAM, Docker, systemd, host health. Built in read only . 핵심 구조 신호는 Python, Dockerfile, docker-compose.yml, README.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
