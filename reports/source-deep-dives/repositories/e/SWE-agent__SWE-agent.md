# SWE-agent/SWE-agent 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 407 files, 113 directories.

## 요약

- 조사 단위: `sources/SWE-agent__SWE-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 407 files, 113 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=tools/windowed_edit_rewrite/config.yaml, tools/windowed_edit_rewrite/install.sh, tools/windowed_edit_rewrite/bin/edit이고, 의존성 단서는 vscode, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | SWE-agent/SWE-agent |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/SWE-agent__SWE-agent](../../../../sources/SWE-agent__SWE-agent) |
| 기존 보고서 | [reports/clone-structures/SWE-agent__SWE-agent.md](../../../clone-structures/SWE-agent__SWE-agent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 407 / 113 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .cursor, .devcontainer, .github, assets, config, docs, sweagent, tests, tools, trajectories |
| 상위 확장자 | .py: 100, .md: 68, (none): 54, .yaml: 51, .traj: 22, .png: 17, .sh: 17, .json: 15, .svg: 15, .yml: 10, .css: 6, .html: 4 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 51 |
| docs | documentation surface | 39 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| config | top-level component | 1 |
| sweagent | top-level component | 1 |
| tools | top-level component | 1 |
| trajectories | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | sweagent | sweagent |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | vscode |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [tools/windowed_edit_rewrite/config.yaml](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_rewrite/config.yaml) | agentRuntime signal |
| agentRuntime | [tools/windowed_edit_rewrite/install.sh](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_rewrite/install.sh) | agentRuntime signal |
| agentRuntime | [tools/windowed_edit_rewrite/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_rewrite/bin/edit) | agentRuntime signal |
| agentRuntime | [tools/windowed_edit_replace/config.yaml](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/config.yaml) | agentRuntime signal |
| entrypoints | [tools/windowed_edit_replace/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/bin/edit) | entrypoints signal |
| entrypoints | [tools/windowed_edit_replace/bin/insert](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/bin/insert) | entrypoints signal |
| entrypoints | [tools/windowed_edit_linting/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_linting/bin/edit) | entrypoints signal |
| instruction | [.cursor/rules/general.mdc](../../../../sources/SWE-agent__SWE-agent/.cursor/rules/general.mdc) | instruction signal |
| instruction | [.cursor/rules/project-overview.mdc](../../../../sources/SWE-agent__SWE-agent/.cursor/rules/project-overview.mdc) | instruction signal |
| config | [pyproject.toml](../../../../sources/SWE-agent__SWE-agent/pyproject.toml) | config signal |
| ci | [.github/workflows/build-docs.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/build-docs.yaml) | ci support |
| ci | [.github/workflows/check-links-periodic.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/check-links-periodic.yaml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 44 | [tools/windowed_edit_rewrite/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_rewrite/bin/edit)<br>[tools/windowed_edit_replace/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/bin/edit)<br>[tools/windowed_edit_replace/bin/insert](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/bin/insert)<br>[tools/windowed_edit_linting/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_linting/bin/edit)<br>[tools/windowed/bin/_state](../../../../sources/SWE-agent__SWE-agent/tools/windowed/bin/_state)<br>[tools/windowed/bin/create](../../../../sources/SWE-agent__SWE-agent/tools/windowed/bin/create)<br>[tools/windowed/bin/goto](../../../../sources/SWE-agent__SWE-agent/tools/windowed/bin/goto)<br>[tools/windowed/bin/open](../../../../sources/SWE-agent__SWE-agent/tools/windowed/bin/open) |
| agentRuntime | 113 | [tools/windowed_edit_rewrite/config.yaml](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_rewrite/config.yaml)<br>[tools/windowed_edit_rewrite/install.sh](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_rewrite/install.sh)<br>[tools/windowed_edit_rewrite/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_rewrite/bin/edit)<br>[tools/windowed_edit_replace/config.yaml](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/config.yaml)<br>[tools/windowed_edit_replace/install.sh](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/install.sh)<br>[tools/windowed_edit_replace/bin/edit](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/bin/edit)<br>[tools/windowed_edit_replace/bin/insert](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_replace/bin/insert)<br>[tools/windowed_edit_linting/config.yaml](../../../../sources/SWE-agent__SWE-agent/tools/windowed_edit_linting/config.yaml) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 8 | [tests/test_data/data_sources/ctf/web/i_got_id_demo/index.html](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/web/i_got_id_demo/index.html)<br>[sweagent/inspector/index.html](../../../../sources/SWE-agent__SWE-agent/sweagent/inspector/index.html)<br>[docs/index.md](../../../../sources/SWE-agent__SWE-agent/docs/index.md)<br>[docs/usage/index.md](../../../../sources/SWE-agent__SWE-agent/docs/usage/index.md)<br>[docs/usage/memory_sentinel.py](../../../../sources/SWE-agent__SWE-agent/docs/usage/memory_sentinel.py)<br>[docs/reference/index.md](../../../../sources/SWE-agent__SWE-agent/docs/reference/index.md)<br>[docs/installation/index.md](../../../../sources/SWE-agent__SWE-agent/docs/installation/index.md)<br>[docs/background/index.md](../../../../sources/SWE-agent__SWE-agent/docs/background/index.md) |
| spec | 2 | [docs/background/architecture.md](../../../../sources/SWE-agent__SWE-agent/docs/background/architecture.md)<br>[docs/assets/architecture.png](../../../../sources/SWE-agent__SWE-agent/docs/assets/architecture.png) |
| eval | 88 | [trajectories/demonstrations/human_thought__swe-bench-HumanEvalFix-python__lcb__t-0.00__p-0.95__c-4.00__install-0/humanevalfix-python-0.traj](../../../../sources/SWE-agent__SWE-agent/trajectories/demonstrations/human_thought__swe-bench-HumanEvalFix-python__lcb__t-0.00__p-0.95__c-4.00__install-0/humanevalfix-python-0.traj)<br>[tools/web_browser/test_console.html](../../../../sources/SWE-agent__SWE-agent/tools/web_browser/test_console.html)<br>[tests/__init__.py](../../../../sources/SWE-agent__SWE-agent/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/SWE-agent__SWE-agent/tests/conftest.py)<br>[tests/test_agent.py](../../../../sources/SWE-agent__SWE-agent/tests/test_agent.py)<br>[tests/test_batch_instance.py](../../../../sources/SWE-agent__SWE-agent/tests/test_batch_instance.py)<br>[tests/test_env_utils.py](../../../../sources/SWE-agent__SWE-agent/tests/test_env_utils.py)<br>[tests/test_env.py](../../../../sources/SWE-agent__SWE-agent/tests/test_env.py) |
| security | 1 | [SECURITY.md](../../../../sources/SWE-agent__SWE-agent/SECURITY.md) |
| ci | 4 | [.github/workflows/build-docs.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/build-docs.yaml)<br>[.github/workflows/check-links-periodic.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/check-links-periodic.yaml)<br>[.github/workflows/check-links-pr.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/check-links-pr.yaml)<br>[.github/workflows/pytest.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/pytest.yaml) |
| container | 6 | [tests/test_data/data_sources/ctf/web/i_got_id_demo/docker-compose.yml](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/web/i_got_id_demo/docker-compose.yml)<br>[tests/test_data/data_sources/ctf/web/i_got_id_demo/Dockerfile](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/web/i_got_id_demo/Dockerfile)<br>[tests/test_data/data_sources/ctf/pwn/warmup/docker-compose.yml](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/pwn/warmup/docker-compose.yml)<br>[tests/test_data/data_sources/ctf/pwn/warmup/Dockerfile](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/pwn/warmup/Dockerfile)<br>[tests/test_data/data_sources/ctf/crypto/Katy/docker-compose.yml](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/crypto/Katy/docker-compose.yml)<br>[tests/test_data/data_sources/ctf/crypto/Katy/Dockerfile](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/crypto/Katy/Dockerfile) |
| instruction | 2 | [.cursor/rules/general.mdc](../../../../sources/SWE-agent__SWE-agent/.cursor/rules/general.mdc)<br>[.cursor/rules/project-overview.mdc](../../../../sources/SWE-agent__SWE-agent/.cursor/rules/project-overview.mdc) |
| docs | 100 | [mkdocs.yml](../../../../sources/SWE-agent__SWE-agent/mkdocs.yml)<br>[README.md](../../../../sources/SWE-agent__SWE-agent/README.md)<br>[trajectories/README.md](../../../../sources/SWE-agent__SWE-agent/trajectories/README.md)<br>[tools/review_on_submit_m/README.md](../../../../sources/SWE-agent__SWE-agent/tools/review_on_submit_m/README.md)<br>[tests/test_data/data_sources/ctf/rev/rock/README.md](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/rev/rock/README.md)<br>[tests/test_data/data_sources/ctf/pwn/warmup/README.md](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/pwn/warmup/README.md)<br>[tests/test_data/data_sources/ctf/misc/networking_1/README.md](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/misc/networking_1/README.md)<br>[tests/test_data/data_sources/ctf/forensics/flash/README.md](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/forensics/flash/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/SWE-agent__SWE-agent/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 88 | [trajectories/demonstrations/human_thought__swe-bench-HumanEvalFix-python__lcb__t-0.00__p-0.95__c-4.00__install-0/humanevalfix-python-0.traj](../../../../sources/SWE-agent__SWE-agent/trajectories/demonstrations/human_thought__swe-bench-HumanEvalFix-python__lcb__t-0.00__p-0.95__c-4.00__install-0/humanevalfix-python-0.traj)<br>[tools/web_browser/test_console.html](../../../../sources/SWE-agent__SWE-agent/tools/web_browser/test_console.html)<br>[tests/__init__.py](../../../../sources/SWE-agent__SWE-agent/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/SWE-agent__SWE-agent/tests/conftest.py)<br>[tests/test_agent.py](../../../../sources/SWE-agent__SWE-agent/tests/test_agent.py)<br>[tests/test_batch_instance.py](../../../../sources/SWE-agent__SWE-agent/tests/test_batch_instance.py) |
| CI workflow | 4 | [.github/workflows/build-docs.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/build-docs.yaml)<br>[.github/workflows/check-links-periodic.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/check-links-periodic.yaml)<br>[.github/workflows/check-links-pr.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/check-links-pr.yaml)<br>[.github/workflows/pytest.yaml](../../../../sources/SWE-agent__SWE-agent/.github/workflows/pytest.yaml) |
| 컨테이너/배포 | 6 | [tests/test_data/data_sources/ctf/web/i_got_id_demo/docker-compose.yml](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/web/i_got_id_demo/docker-compose.yml)<br>[tests/test_data/data_sources/ctf/web/i_got_id_demo/Dockerfile](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/web/i_got_id_demo/Dockerfile)<br>[tests/test_data/data_sources/ctf/pwn/warmup/docker-compose.yml](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/pwn/warmup/docker-compose.yml)<br>[tests/test_data/data_sources/ctf/pwn/warmup/Dockerfile](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/pwn/warmup/Dockerfile)<br>[tests/test_data/data_sources/ctf/crypto/Katy/docker-compose.yml](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/crypto/Katy/docker-compose.yml)<br>[tests/test_data/data_sources/ctf/crypto/Katy/Dockerfile](../../../../sources/SWE-agent__SWE-agent/tests/test_data/data_sources/ctf/crypto/Katy/Dockerfile) |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/SWE-agent__SWE-agent/SECURITY.md) |
| 에이전트 지시문 | 2 | [.cursor/rules/general.mdc](../../../../sources/SWE-agent__SWE-agent/.cursor/rules/general.mdc)<br>[.cursor/rules/project-overview.mdc](../../../../sources/SWE-agent__SWE-agent/.cursor/rules/project-overview.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/windowed_edit_rewrite/config.yaml`, `tools/windowed_edit_rewrite/install.sh`, `tools/windowed_edit_rewrite/bin/edit`.
2. entrypoint를 따라 실행 흐름 확인: `tools/windowed_edit_rewrite/bin/edit`, `tools/windowed_edit_replace/bin/edit`, `tools/windowed_edit_replace/bin/insert`.
3. agent/tool runtime 매핑: `tools/windowed_edit_rewrite/config.yaml`, `tools/windowed_edit_rewrite/install.sh`, `tools/windowed_edit_rewrite/bin/edit`.
4. retrieval/memory/indexing 확인: `tests/test_data/data_sources/ctf/web/i_got_id_demo/index.html`, `sweagent/inspector/index.html`, `docs/index.md`.
5. test/eval 파일로 동작 검증: `trajectories/demonstrations/human_thought__swe-bench-HumanEvalFix-python__lcb__t-0.00__p-0.95__c-4.00__install-0/humanevalfix-python-0.traj`, `tools/web_browser/test_console.html`, `tests/__init__.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 407 files, 113 directories.. 핵심 구조 신호는 pyproject.toml, README.md, LICENSE, vscode, pydantic, tests이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
