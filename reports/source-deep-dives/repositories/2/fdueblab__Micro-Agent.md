# fdueblab/Micro-Agent 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A lightweight AI agent framework for vertical domain applications | 面向垂域应用的轻量级 AI Agent 框架

## 요약

- 조사 단위: `sources/fdueblab__Micro-Agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 145 files, 44 directories, depth score 110, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=workspace/skills/mcp_protocol/SKILL.md, workspace/knowledge/service_packaging/mcp_spec.md, trace_evidence/scripts/http_mcp_smoke.py이고, 의존성 단서는 mcp, fastapi, react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | fdueblab/Micro-Agent |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 108 |
| Forks | 17 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/fdueblab__Micro-Agent](../../../../sources/fdueblab__Micro-Agent) |
| 기존 보고서 | [reports/global-trending/repositories/fdueblab__Micro-Agent.md](../../../global-trending/repositories/fdueblab__Micro-Agent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 145 / 44 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, api, config, deploy, docs, micro_agent, tasks, tests, trace_evidence, workspace |
| 상위 확장자 | .py: 79, .md: 40, .j2: 8, .toml: 4, (none): 4, .json: 3, .yml: 3, .png: 2, .example: 1, .sh: 1 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 10 |
| docs | documentation surface | 6 |
| api | source boundary | 2 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| deploy | deployment surface | 1 |
| micro_agent | top-level component | 1 |
| tasks | top-level component | 1 |
| trace_evidence | top-level component | 1 |
| workspace | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi, react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [workspace/skills/mcp_protocol/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/mcp_protocol/SKILL.md) | mcp signal |
| mcp | [workspace/knowledge/service_packaging/mcp_spec.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/mcp_spec.md) | mcp signal |
| mcp | [trace_evidence/scripts/http_mcp_smoke.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/scripts/http_mcp_smoke.py) | mcp signal |
| mcp | [tests/test_mcp.py](../../../../sources/fdueblab__Micro-Agent/tests/test_mcp.py) | mcp signal |
| agentRuntime | [workspace/skills/video_action_recognition/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/video_action_recognition/SKILL.md) | agentRuntime signal |
| agentRuntime | [workspace/skills/video_action_recognition/skill.toml](../../../../sources/fdueblab__Micro-Agent/workspace/skills/video_action_recognition/skill.toml) | agentRuntime signal |
| agentRuntime | [workspace/skills/domain_homeAI/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/domain_homeAI/SKILL.md) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/fdueblab__Micro-Agent/pyproject.toml) | config signal |
| ci | [.github/workflows/master.yml](../../../../sources/fdueblab__Micro-Agent/.github/workflows/master.yml) | ci support |
| ci | [.github/workflows/publish.yml](../../../../sources/fdueblab__Micro-Agent/.github/workflows/publish.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/fdueblab__Micro-Agent/docker-compose.yml) | container support |
| container | [Dockerfile](../../../../sources/fdueblab__Micro-Agent/Dockerfile) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 34 | [workspace/skills/video_action_recognition/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/video_action_recognition/SKILL.md)<br>[workspace/skills/video_action_recognition/skill.toml](../../../../sources/fdueblab__Micro-Agent/workspace/skills/video_action_recognition/skill.toml)<br>[workspace/skills/mcp_protocol/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/mcp_protocol/SKILL.md)<br>[workspace/skills/domain_homeAI/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/domain_homeAI/SKILL.md)<br>[workspace/skills/domain_health/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/domain_health/SKILL.md)<br>[workspace/skills/domain_generic/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/domain_generic/SKILL.md)<br>[workspace/skills/domain_evtol/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/domain_evtol/SKILL.md)<br>[workspace/skills/domain_ecommerce/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/domain_ecommerce/SKILL.md) |
| mcp | 12 | [workspace/skills/mcp_protocol/SKILL.md](../../../../sources/fdueblab__Micro-Agent/workspace/skills/mcp_protocol/SKILL.md)<br>[workspace/knowledge/service_packaging/mcp_spec.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/mcp_spec.md)<br>[trace_evidence/scripts/http_mcp_smoke.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/scripts/http_mcp_smoke.py)<br>[tests/test_mcp.py](../../../../sources/fdueblab__Micro-Agent/tests/test_mcp.py)<br>[tasks/templates/mcp_service_recommendation.md.j2](../../../../sources/fdueblab__Micro-Agent/tasks/templates/mcp_service_recommendation.md.j2)<br>[tasks/templates/mcp_test.md.j2](../../../../sources/fdueblab__Micro-Agent/tasks/templates/mcp_test.md.j2)<br>[micro_agent/tool/simulated_mcp.py](../../../../sources/fdueblab__Micro-Agent/micro_agent/tool/simulated_mcp.py)<br>[micro_agent/tool/mcp/__init__.py](../../../../sources/fdueblab__Micro-Agent/micro_agent/tool/mcp/__init__.py) |
| retrieval | 24 | [workspace/knowledge/service_packaging/common_errors.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/common_errors.md)<br>[workspace/knowledge/service_packaging/fastmcp_usage.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/fastmcp_usage.md)<br>[workspace/knowledge/service_packaging/ioeb_conventions.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/ioeb_conventions.md)<br>[workspace/knowledge/service_packaging/mcp_spec.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/mcp_spec.md)<br>[workspace/knowledge/service_packaging/packaging_case_cli.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/packaging_case_cli.md)<br>[workspace/knowledge/service_packaging/packaging_case_flask.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/packaging_case_flask.md)<br>[workspace/knowledge/aml_auto_generate/01_llm_foundations.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/aml_auto_generate/01_llm_foundations.md)<br>[workspace/knowledge/aml_auto_generate/02_multimodal.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/aml_auto_generate/02_multimodal.md) |
| spec | 3 | [workspace/knowledge/service_packaging/mcp_spec.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/mcp_spec.md)<br>[docs/architecture.png](../../../../sources/fdueblab__Micro-Agent/docs/architecture.png)<br>[docs/simulation-build-roadmap.md](../../../../sources/fdueblab__Micro-Agent/docs/simulation-build-roadmap.md) |
| eval | 43 | [workspace/knowledge/service_packaging/mcp_spec.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/mcp_spec.md)<br>[trace_evidence/__init__.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/__init__.py)<br>[trace_evidence/config_attachment.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/config_attachment.py)<br>[trace_evidence/evidence_card.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/evidence_card.py)<br>[trace_evidence/evidence_checker.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/evidence_checker.py)<br>[trace_evidence/HANDOFF.md](../../../../sources/fdueblab__Micro-Agent/trace_evidence/HANDOFF.md)<br>[trace_evidence/headless_run.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/headless_run.py)<br>[trace_evidence/infrastructure_v1_report.md](../../../../sources/fdueblab__Micro-Agent/trace_evidence/infrastructure_v1_report.md) |
| security | 1 | [micro_agent/simulation/sandbox_tool.py](../../../../sources/fdueblab__Micro-Agent/micro_agent/simulation/sandbox_tool.py) |
| ci | 2 | [.github/workflows/master.yml](../../../../sources/fdueblab__Micro-Agent/.github/workflows/master.yml)<br>[.github/workflows/publish.yml](../../../../sources/fdueblab__Micro-Agent/.github/workflows/publish.yml) |
| container | 4 | [docker-compose.yml](../../../../sources/fdueblab__Micro-Agent/docker-compose.yml)<br>[Dockerfile](../../../../sources/fdueblab__Micro-Agent/Dockerfile)<br>[deploy/Dockerfile](../../../../sources/fdueblab__Micro-Agent/deploy/Dockerfile)<br>[deploy/start.sh](../../../../sources/fdueblab__Micro-Agent/deploy/start.sh) |
| instruction | 0 | 명확하지 않음 |
| docs | 6 | [README_en.md](../../../../sources/fdueblab__Micro-Agent/README_en.md)<br>[README.md](../../../../sources/fdueblab__Micro-Agent/README.md)<br>[trace_evidence/README.md](../../../../sources/fdueblab__Micro-Agent/trace_evidence/README.md)<br>[docs/architecture.png](../../../../sources/fdueblab__Micro-Agent/docs/architecture.png)<br>[docs/banner.png](../../../../sources/fdueblab__Micro-Agent/docs/banner.png)<br>[docs/simulation-build-roadmap.md](../../../../sources/fdueblab__Micro-Agent/docs/simulation-build-roadmap.md) |
| config | 1 | [pyproject.toml](../../../../sources/fdueblab__Micro-Agent/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 43 | [workspace/knowledge/service_packaging/mcp_spec.md](../../../../sources/fdueblab__Micro-Agent/workspace/knowledge/service_packaging/mcp_spec.md)<br>[trace_evidence/__init__.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/__init__.py)<br>[trace_evidence/config_attachment.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/config_attachment.py)<br>[trace_evidence/evidence_card.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/evidence_card.py)<br>[trace_evidence/evidence_checker.py](../../../../sources/fdueblab__Micro-Agent/trace_evidence/evidence_checker.py)<br>[trace_evidence/HANDOFF.md](../../../../sources/fdueblab__Micro-Agent/trace_evidence/HANDOFF.md) |
| CI workflow | 2 | [.github/workflows/master.yml](../../../../sources/fdueblab__Micro-Agent/.github/workflows/master.yml)<br>[.github/workflows/publish.yml](../../../../sources/fdueblab__Micro-Agent/.github/workflows/publish.yml) |
| 컨테이너/배포 | 4 | [docker-compose.yml](../../../../sources/fdueblab__Micro-Agent/docker-compose.yml)<br>[Dockerfile](../../../../sources/fdueblab__Micro-Agent/Dockerfile)<br>[deploy/Dockerfile](../../../../sources/fdueblab__Micro-Agent/deploy/Dockerfile)<br>[deploy/start.sh](../../../../sources/fdueblab__Micro-Agent/deploy/start.sh) |
| 보안/정책 | 1 | [micro_agent/simulation/sandbox_tool.py](../../../../sources/fdueblab__Micro-Agent/micro_agent/simulation/sandbox_tool.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `workspace/skills/mcp_protocol/SKILL.md`, `workspace/knowledge/service_packaging/mcp_spec.md`, `trace_evidence/scripts/http_mcp_smoke.py`.
2. agent/tool runtime 매핑: `workspace/skills/video_action_recognition/SKILL.md`, `workspace/skills/video_action_recognition/skill.toml`, `workspace/skills/mcp_protocol/SKILL.md`.
3. retrieval/memory/indexing 확인: `workspace/knowledge/service_packaging/common_errors.md`, `workspace/knowledge/service_packaging/fastmcp_usage.md`, `workspace/knowledge/service_packaging/ioeb_conventions.md`.
4. test/eval 파일로 동작 검증: `workspace/knowledge/service_packaging/mcp_spec.md`, `trace_evidence/__init__.py`, `trace_evidence/config_attachment.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A lightweight AI agent framework for vertical domain applications 面向垂域应用的轻量级 AI Agent 框架. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
