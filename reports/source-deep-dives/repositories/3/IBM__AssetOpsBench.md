# IBM/AssetOpsBench 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

AssetOpsBench - Industry 4.0: A unified benchmark and framework for building, orchestrating, and evaluating domain-specific AI agents for Industry 4.0 asset operations and maintenance, with 460+ scenarios, 5 specialist agents (IoT, FMSR, TSFM, Work Order,...), and multi-agent orchestration blueprints (MetaAgent, AgentHive) over MCP.

## 요약

- 조사 단위: `sources/IBM__AssetOpsBench` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 225 files, 66 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/servers/vibration/tests/test_mcp_e2e.py, docs/mcp-e2e-test-suite.md, docs/mcp-servers.md이고, 의존성 단서는 openai, claude, mcp, langchain, pydantic, torch, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | IBM/AssetOpsBench |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 1828 |
| Forks | 275 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/IBM__AssetOpsBench](../../../../sources/IBM__AssetOpsBench) |
| 기존 보고서 | [reports/global-trending/repositories/IBM__AssetOpsBench.md](../../../global-trending/repositories/IBM__AssetOpsBench.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 225 / 66 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, docs, scripts, src |
| 상위 확장자 | .py: 139, .json: 22, .md: 21, (none): 7, .bin: 5, .safetensors: 5, .yml: 5, .pdf: 3, .txt: 3, .yaml: 3, .csv: 2, .sh: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 93 |
| docs | documentation surface | 22 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | plan-execute | plan-execute |
| utility | pyproject.toml | claude-agent | claude-agent |
| serve-dev | pyproject.toml | iot-mcp-server | iot-mcp-server |
| serve-dev | pyproject.toml | utilities-mcp-server | utilities-mcp-server |
| serve-dev | pyproject.toml | fmsr-mcp-server | fmsr-mcp-server |
| serve-dev | pyproject.toml | tsfm-mcp-server | tsfm-mcp-server |
| serve-dev | pyproject.toml | wo-mcp-server | wo-mcp-server |
| serve-dev | pyproject.toml | vibration-mcp-server | vibration-mcp-server |
| utility | pyproject.toml | openai-agent | openai-agent |
| utility | pyproject.toml | deep-agent | deep-agent |
| utility | pyproject.toml | stirrup-agent | stirrup-agent |
| utility | pyproject.toml | evaluate | evaluate |
| utility | pyproject.toml | direct-llm-agent | direct-llm-agent |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, claude |
| agentProtocols | mcp |
| agentFrameworks | langchain |
| vectorStores | 없음 |
| modelRuntime | torch, transformers |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [src/servers/vibration/tests/test_mcp_e2e.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/test_mcp_e2e.py) | mcp signal |
| mcp | [docs/mcp-e2e-test-suite.md](../../../../sources/IBM__AssetOpsBench/docs/mcp-e2e-test-suite.md) | mcp signal |
| mcp | [docs/mcp-servers.md](../../../../sources/IBM__AssetOpsBench/docs/mcp-servers.md) | mcp signal |
| agentRuntime | [src/evaluation/runner.py](../../../../sources/IBM__AssetOpsBench/src/evaluation/runner.py) | agentRuntime signal |
| agentRuntime | [src/agent/__init__.py](../../../../sources/IBM__AssetOpsBench/src/agent/__init__.py) | agentRuntime signal |
| agentRuntime | [src/agent/_cli_common.py](../../../../sources/IBM__AssetOpsBench/src/agent/_cli_common.py) | agentRuntime signal |
| agentRuntime | [src/agent/_prompts.py](../../../../sources/IBM__AssetOpsBench/src/agent/_prompts.py) | agentRuntime signal |
| entrypoints | [src/servers/wo/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/main.py) | entrypoints signal |
| entrypoints | [src/servers/vibration/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/main.py) | entrypoints signal |
| entrypoints | [src/servers/utilities/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/utilities/main.py) | entrypoints signal |
| entrypoints | [src/servers/tsfm/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/tsfm/main.py) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/IBM__AssetOpsBench/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [src/servers/wo/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/main.py)<br>[src/servers/vibration/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/main.py)<br>[src/servers/utilities/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/utilities/main.py)<br>[src/servers/tsfm/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/tsfm/main.py)<br>[src/servers/iot/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/iot/main.py)<br>[src/servers/fmsr/main.py](../../../../sources/IBM__AssetOpsBench/src/servers/fmsr/main.py) |
| agentRuntime | 45 | [src/evaluation/runner.py](../../../../sources/IBM__AssetOpsBench/src/evaluation/runner.py)<br>[src/agent/__init__.py](../../../../sources/IBM__AssetOpsBench/src/agent/__init__.py)<br>[src/agent/_cli_common.py](../../../../sources/IBM__AssetOpsBench/src/agent/_cli_common.py)<br>[src/agent/_prompts.py](../../../../sources/IBM__AssetOpsBench/src/agent/_prompts.py)<br>[src/agent/cli.py](../../../../sources/IBM__AssetOpsBench/src/agent/cli.py)<br>[src/agent/models.py](../../../../sources/IBM__AssetOpsBench/src/agent/models.py)<br>[src/agent/runner.py](../../../../sources/IBM__AssetOpsBench/src/agent/runner.py)<br>[src/agent/tests/__init__.py](../../../../sources/IBM__AssetOpsBench/src/agent/tests/__init__.py) |
| mcp | 3 | [src/servers/vibration/tests/test_mcp_e2e.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/test_mcp_e2e.py)<br>[docs/mcp-e2e-test-suite.md](../../../../sources/IBM__AssetOpsBench/docs/mcp-e2e-test-suite.md)<br>[docs/mcp-servers.md](../../../../sources/IBM__AssetOpsBench/docs/mcp-servers.md) |
| retrieval | 0 | 명확하지 않음 |
| spec | 3 | [src/couchdb/_design_workorders.json](../../../../sources/IBM__AssetOpsBench/src/couchdb/_design_workorders.json)<br>[docs/guideline/ground_truth_design_guideline.md](../../../../sources/IBM__AssetOpsBench/docs/guideline/ground_truth_design_guideline.md)<br>[docs/guideline/utterance_design_guideline.md](../../../../sources/IBM__AssetOpsBench/docs/guideline/utterance_design_guideline.md) |
| eval | 76 | [src/servers/wo/tests/__init__.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/tests/__init__.py)<br>[src/servers/wo/tests/test_models_boundary.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/tests/test_models_boundary.py)<br>[src/servers/wo/tests/test_workorders.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/tests/test_workorders.py)<br>[src/servers/vibration/tests/__init__.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/__init__.py)<br>[src/servers/vibration/tests/conftest.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/conftest.py)<br>[src/servers/vibration/tests/test_dsp.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/test_dsp.py)<br>[src/servers/vibration/tests/test_mcp_e2e.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/test_mcp_e2e.py)<br>[src/servers/vibration/tests/test_tools.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/test_tools.py) |
| security | 3 | [SECRET_SCANNING_SETUP.md](../../../../sources/IBM__AssetOpsBench/SECRET_SCANNING_SETUP.md)<br>[.github/workflows/guard-couchdb-data.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/guard-couchdb-data.yml)<br>[.github/workflows/secret-scan.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/secret-scan.yml) |
| ci | 3 | [.github/workflows/guard-couchdb-data.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/guard-couchdb-data.yml)<br>[.github/workflows/secret-scan.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/secret-scan.yml)<br>[.github/workflows/stale.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/stale.yml) |
| container | 2 | [src/couchdb/docker-compose.yaml](../../../../sources/IBM__AssetOpsBench/src/couchdb/docker-compose.yaml)<br>[src/agent/stirrup_agent/Dockerfile.code](../../../../sources/IBM__AssetOpsBench/src/agent/stirrup_agent/Dockerfile.code) |
| instruction | 0 | 명확하지 않음 |
| docs | 20 | [README.md](../../../../sources/IBM__AssetOpsBench/README.md)<br>[src/scenarios/local/readme.md](../../../../sources/IBM__AssetOpsBench/src/scenarios/local/readme.md)<br>[src/scenarios/huggingface/readme.md](../../../../sources/IBM__AssetOpsBench/src/scenarios/huggingface/readme.md)<br>[docs/acknowledgments.md](../../../../sources/IBM__AssetOpsBench/docs/acknowledgments.md)<br>[docs/data.md](../../../../sources/IBM__AssetOpsBench/docs/data.md)<br>[docs/evaluation.md](../../../../sources/IBM__AssetOpsBench/docs/evaluation.md)<br>[docs/mcp-e2e-test-suite.md](../../../../sources/IBM__AssetOpsBench/docs/mcp-e2e-test-suite.md)<br>[docs/mcp-servers.md](../../../../sources/IBM__AssetOpsBench/docs/mcp-servers.md) |
| config | 2 | [pyproject.toml](../../../../sources/IBM__AssetOpsBench/pyproject.toml)<br>[uv.lock](../../../../sources/IBM__AssetOpsBench/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 76 | [src/servers/wo/tests/__init__.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/tests/__init__.py)<br>[src/servers/wo/tests/test_models_boundary.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/tests/test_models_boundary.py)<br>[src/servers/wo/tests/test_workorders.py](../../../../sources/IBM__AssetOpsBench/src/servers/wo/tests/test_workorders.py)<br>[src/servers/vibration/tests/__init__.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/__init__.py)<br>[src/servers/vibration/tests/conftest.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/conftest.py)<br>[src/servers/vibration/tests/test_dsp.py](../../../../sources/IBM__AssetOpsBench/src/servers/vibration/tests/test_dsp.py) |
| CI workflow | 3 | [.github/workflows/guard-couchdb-data.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/guard-couchdb-data.yml)<br>[.github/workflows/secret-scan.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/secret-scan.yml)<br>[.github/workflows/stale.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/stale.yml) |
| 컨테이너/배포 | 2 | [src/couchdb/docker-compose.yaml](../../../../sources/IBM__AssetOpsBench/src/couchdb/docker-compose.yaml)<br>[src/agent/stirrup_agent/Dockerfile.code](../../../../sources/IBM__AssetOpsBench/src/agent/stirrup_agent/Dockerfile.code) |
| 보안/정책 | 3 | [SECRET_SCANNING_SETUP.md](../../../../sources/IBM__AssetOpsBench/SECRET_SCANNING_SETUP.md)<br>[.github/workflows/guard-couchdb-data.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/guard-couchdb-data.yml)<br>[.github/workflows/secret-scan.yml](../../../../sources/IBM__AssetOpsBench/.github/workflows/secret-scan.yml) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/servers/vibration/tests/test_mcp_e2e.py`, `docs/mcp-e2e-test-suite.md`, `docs/mcp-servers.md`.
2. entrypoint를 따라 실행 흐름 확인: `src/servers/wo/main.py`, `src/servers/vibration/main.py`, `src/servers/utilities/main.py`.
3. agent/tool runtime 매핑: `src/evaluation/runner.py`, `src/agent/__init__.py`, `src/agent/_cli_common.py`.
4. test/eval 파일로 동작 검증: `src/servers/wo/tests/__init__.py`, `src/servers/wo/tests/test_models_boundary.py`, `src/servers/wo/tests/test_workorders.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AssetOpsBench Industry 4.0 A unified benchmark and framework for building, orchestrating, and evaluating domain specific. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, langchain이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
