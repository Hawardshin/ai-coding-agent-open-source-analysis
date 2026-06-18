# naver-ai/KoBBQ 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Official code and dataset repository of KoBBQ (TACL 2024)

## 요약

- 조사 단위: `sources/naver-ai__KoBBQ` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 21 files, 3 directories, depth score 51, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=evaluation/requirements.txt이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver-ai/KoBBQ |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 19 |
| Forks | 3 |
| License | MIT |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver-ai__KoBBQ](../../../../sources/naver-ai__KoBBQ) |
| 기존 보고서 | [reports/korea-trending/repositories/naver-ai__KoBBQ.md](../../../korea-trending/repositories/naver-ai__KoBBQ.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 21 / 3 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | data, evaluation |
| 상위 확장자 | .py: 9, .tsv: 4, .md: 3, (none): 2, .json: 1, .png: 1, .txt: 1 |
| 소스 패턴 | spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| data | top-level component | 1 |
| evaluation | top-level component | 1 |


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
| config | [evaluation/requirements.txt](../../../../sources/naver-ai__KoBBQ/evaluation/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/naver-ai__KoBBQ/README.md) | docs signal |
| docs | [evaluation/README.md](../../../../sources/naver-ai__KoBBQ/evaluation/README.md) | docs signal |
| docs | [data/README.md](../../../../sources/naver-ai__KoBBQ/data/README.md) | docs signal |
| eval | [evaluation/0_evaluation_prompts.tsv](../../../../sources/naver-ai__KoBBQ/evaluation/0_evaluation_prompts.tsv) | eval signal |
| eval | [evaluation/1_preprocess.py](../../../../sources/naver-ai__KoBBQ/evaluation/1_preprocess.py) | eval signal |
| eval | [evaluation/2_model_inference.py](../../../../sources/naver-ai__KoBBQ/evaluation/2_model_inference.py) | eval signal |
| eval | [evaluation/3_postprocess_predictions.py](../../../../sources/naver-ai__KoBBQ/evaluation/3_postprocess_predictions.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 1 | [evaluation/requirements.txt](../../../../sources/naver-ai__KoBBQ/evaluation/requirements.txt) |
| eval | 13 | [evaluation/0_evaluation_prompts.tsv](../../../../sources/naver-ai__KoBBQ/evaluation/0_evaluation_prompts.tsv)<br>[evaluation/1_preprocess.py](../../../../sources/naver-ai__KoBBQ/evaluation/1_preprocess.py)<br>[evaluation/2_model_inference.py](../../../../sources/naver-ai__KoBBQ/evaluation/2_model_inference.py)<br>[evaluation/3_postprocess_predictions.py](../../../../sources/naver-ai__KoBBQ/evaluation/3_postprocess_predictions.py)<br>[evaluation/4_predictions_to_evaluation.py](../../../../sources/naver-ai__KoBBQ/evaluation/4_predictions_to_evaluation.py)<br>[evaluation/5_evaluation.py](../../../../sources/naver-ai__KoBBQ/evaluation/5_evaluation.py)<br>[evaluation/README.md](../../../../sources/naver-ai__KoBBQ/evaluation/README.md)<br>[evaluation/requirements.txt](../../../../sources/naver-ai__KoBBQ/evaluation/requirements.txt) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/naver-ai__KoBBQ/README.md)<br>[evaluation/README.md](../../../../sources/naver-ai__KoBBQ/evaluation/README.md)<br>[data/README.md](../../../../sources/naver-ai__KoBBQ/data/README.md) |
| config | 1 | [evaluation/requirements.txt](../../../../sources/naver-ai__KoBBQ/evaluation/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 13 | [evaluation/0_evaluation_prompts.tsv](../../../../sources/naver-ai__KoBBQ/evaluation/0_evaluation_prompts.tsv)<br>[evaluation/1_preprocess.py](../../../../sources/naver-ai__KoBBQ/evaluation/1_preprocess.py)<br>[evaluation/2_model_inference.py](../../../../sources/naver-ai__KoBBQ/evaluation/2_model_inference.py)<br>[evaluation/3_postprocess_predictions.py](../../../../sources/naver-ai__KoBBQ/evaluation/3_postprocess_predictions.py)<br>[evaluation/4_predictions_to_evaluation.py](../../../../sources/naver-ai__KoBBQ/evaluation/4_predictions_to_evaluation.py)<br>[evaluation/5_evaluation.py](../../../../sources/naver-ai__KoBBQ/evaluation/5_evaluation.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `evaluation/requirements.txt`, `README.md`, `evaluation/README.md`.
2. test/eval 파일로 동작 검증: `evaluation/0_evaluation_prompts.tsv`, `evaluation/1_preprocess.py`, `evaluation/2_model_inference.py`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Official code and dataset repository of KoBBQ TACL 2024. 핵심 구조 신호는 Python, README.md, LICENSE, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
