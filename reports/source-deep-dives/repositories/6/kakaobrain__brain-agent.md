# kakaobrain/brain-agent 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Brain Agent for Large-Scale and Multi-Task Agent Learning

## 요약

- 조사 단위: `sources/kakaobrain__brain-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 57 files, 10 directories, depth score 68, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=brain_agent/core/agents/__init__.py, brain_agent/core/agents/agent_abc.py, brain_agent/core/agents/agent_utils.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kakaobrain/brain-agent |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 93 |
| Forks | 15 |
| License | MIT |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kakaobrain__brain-agent](../../../../sources/kakaobrain__brain-agent) |
| 기존 보고서 | [reports/korea-trending/repositories/kakaobrain__brain-agent.md](../../../korea-trending/repositories/kakaobrain__brain-agent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 57 / 10 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | assets, brain_agent, configs |
| 상위 확장자 | .py: 41, .yaml: 10, .png: 2, (none): 2, .md: 1, .txt: 1 |
| 소스 패턴 | agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| assets | top-level component | 1 |
| brain_agent | top-level component | 1 |
| configs | top-level component | 1 |


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
| agentRuntime | [brain_agent/core/agents/__init__.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/__init__.py) | agentRuntime signal |
| agentRuntime | [brain_agent/core/agents/agent_abc.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/agent_abc.py) | agentRuntime signal |
| agentRuntime | [brain_agent/core/agents/agent_utils.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/agent_utils.py) | agentRuntime signal |
| agentRuntime | [brain_agent/core/agents/dmlab_multitask_agent.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/dmlab_multitask_agent.py) | agentRuntime signal |
| config | [requirements.txt](../../../../sources/kakaobrain__brain-agent/requirements.txt) | config signal |
| eval | [eval.py](../../../../sources/kakaobrain__brain-agent/eval.py) | eval support |
| eval | [configs/lstm_baseline_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/lstm_baseline_eval.yaml) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 4 | [brain_agent/core/agents/__init__.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/__init__.py)<br>[brain_agent/core/agents/agent_abc.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/agent_abc.py)<br>[brain_agent/core/agents/agent_utils.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/agent_utils.py)<br>[brain_agent/core/agents/dmlab_multitask_agent.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/agents/dmlab_multitask_agent.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 1 | [requirements.txt](../../../../sources/kakaobrain__brain-agent/requirements.txt) |
| eval | 5 | [eval.py](../../../../sources/kakaobrain__brain-agent/eval.py)<br>[configs/lstm_baseline_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/lstm_baseline_eval.yaml)<br>[configs/trxl_baseline_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/trxl_baseline_eval.yaml)<br>[configs/trxl_future_pred_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/trxl_future_pred_eval.yaml)<br>[configs/trxl_recon_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/trxl_recon_eval.yaml) |
| security | 1 | [brain_agent/core/policy_worker.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/policy_worker.py) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/kakaobrain__brain-agent/README.md) |
| config | 1 | [requirements.txt](../../../../sources/kakaobrain__brain-agent/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 5 | [eval.py](../../../../sources/kakaobrain__brain-agent/eval.py)<br>[configs/lstm_baseline_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/lstm_baseline_eval.yaml)<br>[configs/trxl_baseline_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/trxl_baseline_eval.yaml)<br>[configs/trxl_future_pred_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/trxl_future_pred_eval.yaml)<br>[configs/trxl_recon_eval.yaml](../../../../sources/kakaobrain__brain-agent/configs/trxl_recon_eval.yaml) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [brain_agent/core/policy_worker.py](../../../../sources/kakaobrain__brain-agent/brain_agent/core/policy_worker.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `brain_agent/core/agents/__init__.py`, `brain_agent/core/agents/agent_abc.py`, `brain_agent/core/agents/agent_utils.py`.
2. agent/tool runtime 매핑: `brain_agent/core/agents/__init__.py`, `brain_agent/core/agents/agent_abc.py`, `brain_agent/core/agents/agent_utils.py`.
3. test/eval 파일로 동작 검증: `eval.py`, `configs/lstm_baseline_eval.yaml`, `configs/trxl_baseline_eval.yaml`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Brain Agent for Large Scale and Multi Task Agent Learning. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
