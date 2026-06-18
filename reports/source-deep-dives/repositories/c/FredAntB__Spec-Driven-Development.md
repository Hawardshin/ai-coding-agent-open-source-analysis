# FredAntB/Spec-Driven-Development 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 33 files, 11 directories.

## 요약

- 조사 단위: `sources/FredAntB__Spec-Driven-Development` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 33 files, 11 directories, depth score 72, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

스펙 드리븐/요구사항 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 spec=phase2c/flow_b/design.md, phase2c/flow_b/requirements.md, phase2c/flow_a/design.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 스펙 workflow와 요구사항 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | FredAntB/Spec-Driven-Development |
| 주제 | 스펙 드리븐/요구사항 / 스펙 드리븐/요구사항 |
| Region | mixed |
| Language | Python |
| Stars | 92 |
| Forks | 7 |
| License | MIT License |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/FredAntB__Spec-Driven-Development](../../../../sources/FredAntB__Spec-Driven-Development) |
| 기존 보고서 | [reports/clone-structures/FredAntB__Spec-Driven-Development.md](../../../clone-structures/FredAntB__Spec-Driven-Development.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 33 / 11 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, beta, phase2a, phase2b, phase2c, references |
| 상위 확장자 | .md: 26, (none): 4, .py: 2, .yml: 1 |
| 소스 패턴 | agent/tool runtime, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| beta | top-level component | 1 |
| phase2a | top-level component | 1 |
| phase2b | top-level component | 1 |
| phase2c | top-level component | 1 |
| references | top-level component | 1 |


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
| spec | [phase2c/flow_b/design.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_b/design.md) | spec signal |
| spec | [phase2c/flow_b/requirements.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_b/requirements.md) | spec signal |
| spec | [phase2c/flow_a/design.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/design.md) | spec signal |
| spec | [phase2c/flow_a/requirements.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/requirements.md) | spec signal |
| instruction | [CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/CLAUDE.md) | instruction signal |
| instruction | [phase2c/flow_c/CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_c/CLAUDE.md) | instruction signal |
| instruction | [phase2c/flow_c/.github/copilot-instructions.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_c/.github/copilot-instructions.md) | instruction signal |
| instruction | [phase2c/flow_a/CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/CLAUDE.md) | instruction signal |
| eval | [phase2c/eval_flows.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/eval_flows.md) | eval signal |
| eval | [phase2c/eval_report_2c.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/eval_report_2c.md) | eval signal |
| eval | [phase2b/eval_report.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2b/eval_report.md) | eval signal |
| eval | [phase2b/eval_session.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2b/eval_session.md) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [SKILL.md](../../../../sources/FredAntB__Spec-Driven-Development/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 4 | [phase2c/flow_b/design.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_b/design.md)<br>[phase2c/flow_b/requirements.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_b/requirements.md)<br>[phase2c/flow_a/design.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/design.md)<br>[phase2c/flow_a/requirements.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/requirements.md) |
| eval | 4 | [phase2c/eval_flows.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/eval_flows.md)<br>[phase2c/eval_report_2c.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/eval_report_2c.md)<br>[phase2b/eval_report.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2b/eval_report.md)<br>[phase2b/eval_session.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2b/eval_session.md) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/FredAntB__Spec-Driven-Development/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 4 | [CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/CLAUDE.md)<br>[phase2c/flow_c/CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_c/CLAUDE.md)<br>[phase2c/flow_c/.github/copilot-instructions.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_c/.github/copilot-instructions.md)<br>[phase2c/flow_a/CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/CLAUDE.md) |
| docs | 1 | [README.md](../../../../sources/FredAntB__Spec-Driven-Development/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 4 | [phase2c/eval_flows.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/eval_flows.md)<br>[phase2c/eval_report_2c.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/eval_report_2c.md)<br>[phase2b/eval_report.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2b/eval_report.md)<br>[phase2b/eval_session.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2b/eval_session.md) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/FredAntB__Spec-Driven-Development/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 4 | [CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/CLAUDE.md)<br>[phase2c/flow_c/CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_c/CLAUDE.md)<br>[phase2c/flow_c/.github/copilot-instructions.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_c/.github/copilot-instructions.md)<br>[phase2c/flow_a/CLAUDE.md](../../../../sources/FredAntB__Spec-Driven-Development/phase2c/flow_a/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `phase2c/flow_b/design.md`, `phase2c/flow_b/requirements.md`, `phase2c/flow_a/design.md`.
2. agent/tool runtime 매핑: `SKILL.md`.
3. test/eval 파일로 동작 검증: `phase2c/eval_flows.md`, `phase2c/eval_report_2c.md`, `phase2b/eval_report.md`.

## 기존 레포 인사이트

스펙 드리븐/요구사항 관점에서 Local clone structure analysis 33 files, 11 directories.. 핵심 구조 신호는 Python, README.md, CLAUDE.md, LICENSE, ci, docs이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 스펙 드리븐/요구사항 레포입니다. 활용 관점은 스펙 workflow와 요구사항 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음입니다.
