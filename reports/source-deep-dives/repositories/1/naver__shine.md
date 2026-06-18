# naver/shine 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

[CVPR'24 Highlight] SHiNe: Semantic Hierarchy Nexus for Open-vocabulary Object Detection

## 요약

- 조사 단위: `sources/naver__shine` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 669 files, 226 directories, depth score 56, key references 5개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/shine |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 101 |
| Forks | 9 |
| License | NOASSERTION |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__shine](../../../../sources/naver__shine) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__shine.md](../../../korea-trending/repositories/naver__shine.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 669 / 226 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | codet, configs_codet, configs_detic, configs_vldet, datasets, detic, materials, models, nexus, scripts_build_nexus, scripts_local, scripts_plant_hrchy, scripts_slurm, shine, shine_cls, slurm-output, third_party, vldet |
| 상위 확장자 | .sh: 269, .py: 156, .json: 96, .npy: 68, .yaml: 55, .txt: 12, (none): 3, .jpg: 2, .md: 2, .png: 2, .pth: 2, .csv: 1 |
| 소스 패턴 | agent/tool runtime, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| codet | top-level component | 1 |
| configs_codet | top-level component | 1 |
| configs_detic | top-level component | 1 |
| configs_vldet | top-level component | 1 |
| datasets | top-level component | 1 |
| detic | top-level component | 1 |
| materials | top-level component | 1 |
| models | top-level component | 1 |
| nexus | top-level component | 1 |
| scripts_build_nexus | top-level component | 1 |
| scripts_local | top-level component | 1 |
| scripts_plant_hrchy | top-level component | 1 |
| scripts_slurm | top-level component | 1 |
| shine | top-level component | 1 |
| shine_cls | top-level component | 1 |
| slurm-output | top-level component | 1 |
| third_party | top-level component | 1 |
| vldet | top-level component | 1 |


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
| docs | [README.md](../../../../sources/naver__shine/README.md) | docs signal |
| eval | [vldet/evaluation/custom_coco_eval.py](../../../../sources/naver__shine/vldet/evaluation/custom_coco_eval.py) | eval signal |
| eval | [vldet/evaluation/fsodeval.py](../../../../sources/naver__shine/vldet/evaluation/fsodeval.py) | eval signal |
| eval | [vldet/evaluation/inateval.py](../../../../sources/naver__shine/vldet/evaluation/inateval.py) | eval signal |
| eval | [vldet/evaluation/oideval.py](../../../../sources/naver__shine/vldet/evaluation/oideval.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 5 | [shine/tools/__init__.py](../../../../sources/naver__shine/shine/tools/__init__.py)<br>[shine/tools/composer.py](../../../../sources/naver__shine/shine/tools/composer.py)<br>[shine/tools/fileios.py](../../../../sources/naver__shine/shine/tools/fileios.py)<br>[shine/tools/llm_controllers.py](../../../../sources/naver__shine/shine/tools/llm_controllers.py)<br>[shine/tools/themer.py](../../../../sources/naver__shine/shine/tools/themer.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 14 | [vldet/evaluation/custom_coco_eval.py](../../../../sources/naver__shine/vldet/evaluation/custom_coco_eval.py)<br>[vldet/evaluation/fsodeval.py](../../../../sources/naver__shine/vldet/evaluation/fsodeval.py)<br>[vldet/evaluation/inateval.py](../../../../sources/naver__shine/vldet/evaluation/inateval.py)<br>[vldet/evaluation/oideval.py](../../../../sources/naver__shine/vldet/evaluation/oideval.py)<br>[detic/evaluation/custom_coco_eval.py](../../../../sources/naver__shine/detic/evaluation/custom_coco_eval.py)<br>[detic/evaluation/fsodeval.py](../../../../sources/naver__shine/detic/evaluation/fsodeval.py)<br>[detic/evaluation/inateval.py](../../../../sources/naver__shine/detic/evaluation/inateval.py)<br>[detic/evaluation/oideval.py](../../../../sources/naver__shine/detic/evaluation/oideval.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/naver__shine/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 14 | [vldet/evaluation/custom_coco_eval.py](../../../../sources/naver__shine/vldet/evaluation/custom_coco_eval.py)<br>[vldet/evaluation/fsodeval.py](../../../../sources/naver__shine/vldet/evaluation/fsodeval.py)<br>[vldet/evaluation/inateval.py](../../../../sources/naver__shine/vldet/evaluation/inateval.py)<br>[vldet/evaluation/oideval.py](../../../../sources/naver__shine/vldet/evaluation/oideval.py)<br>[detic/evaluation/custom_coco_eval.py](../../../../sources/naver__shine/detic/evaluation/custom_coco_eval.py)<br>[detic/evaluation/fsodeval.py](../../../../sources/naver__shine/detic/evaluation/fsodeval.py) |
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

1. 핵심 참조에서 시작: `README.md`, `vldet/evaluation/custom_coco_eval.py`, `vldet/evaluation/fsodeval.py`.
2. agent/tool runtime 매핑: `shine/tools/__init__.py`, `shine/tools/composer.py`, `shine/tools/fileios.py`.
3. test/eval 파일로 동작 검증: `vldet/evaluation/custom_coco_eval.py`, `vldet/evaluation/fsodeval.py`, `vldet/evaluation/inateval.py`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 CVPR'24 Highlight SHiNe Semantic Hierarchy Nexus for Open vocabulary Object Detection. 핵심 구조 신호는 Python, README.md, LICENSE, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
