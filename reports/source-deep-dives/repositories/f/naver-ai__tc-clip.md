# naver-ai/tc-clip 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

[ECCV 2024] Official PyTorch implementation of TC-CLIP "Leveraging Temporal Contextualization for Video Action Recognition"

## 요약

- 조사 단위: `sources/naver-ai__tc-clip` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 180 files, 38 directories, depth score 79, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.py이고, 의존성 단서는 torch, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver-ai/tc-clip |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 101 |
| Forks | 12 |
| License | NOASSERTION |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver-ai__tc-clip](../../../../sources/naver-ai__tc-clip) |
| 기존 보고서 | [reports/korea-trending/repositories/naver-ai__tc-clip.md](../../../korea-trending/repositories/naver-ai__tc-clip.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 180 / 38 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | clip, configs, datasets, datasets_splits, docs, labels, scripts, tome, trainers, utils |
| 상위 확장자 | .txt: 62, .py: 31, .yaml: 28, .csv: 20, .sh: 14, .json: 13, .md: 5, .png: 2, (none): 2, .gz: 1, .ipynb: 1, .pdf: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 9 |
| clip | top-level component | 1 |
| configs | top-level component | 1 |
| datasets | top-level component | 1 |
| datasets_splits | top-level component | 1 |
| labels | top-level component | 1 |
| scripts | top-level component | 1 |
| tome | top-level component | 1 |
| trainers | top-level component | 1 |
| utils | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [main.py](../../../../sources/naver-ai__tc-clip/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/naver-ai__tc-clip/README.md) | docs signal |
| docs | [docs/CONFIG.md](../../../../sources/naver-ai__tc-clip/docs/CONFIG.md) | docs signal |
| docs | [docs/DATASETS.md](../../../../sources/naver-ai__tc-clip/docs/DATASETS.md) | docs signal |
| docs | [docs/INSTALL.md](../../../../sources/naver-ai__tc-clip/docs/INSTALL.md) | docs signal |
| eval | [scripts/eval/eval_tc_clip_base2novel.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_base2novel.sh) | eval signal |
| eval | [scripts/eval/eval_tc_clip_few_shot.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_few_shot.sh) | eval signal |
| eval | [scripts/eval/eval_tc_clip_fully_supervised.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_fully_supervised.sh) | eval signal |
| eval | [scripts/eval/eval_tc_clip_zero_shot_wise_ft.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_zero_shot_wise_ft.sh) | eval signal |
| config | [requirements.txt](../../../../sources/naver-ai__tc-clip/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [main.py](../../../../sources/naver-ai__tc-clip/main.py) |
| agentRuntime | 1 | [utils/tools.py](../../../../sources/naver-ai__tc-clip/utils/tools.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 1 | [requirements.txt](../../../../sources/naver-ai__tc-clip/requirements.txt) |
| eval | 9 | [scripts/eval/eval_tc_clip_base2novel.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_base2novel.sh)<br>[scripts/eval/eval_tc_clip_few_shot.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_few_shot.sh)<br>[scripts/eval/eval_tc_clip_fully_supervised.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_fully_supervised.sh)<br>[scripts/eval/eval_tc_clip_zero_shot_wise_ft.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_zero_shot_wise_ft.sh)<br>[scripts/eval/eval_tc_clip_zero_shot.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_zero_shot.sh)<br>[docs/TRAIN_EVAL.md](../../../../sources/naver-ai__tc-clip/docs/TRAIN_EVAL.md)<br>[datasets_splits/k600_splits/ZS_split1_K600_eval.txt](../../../../sources/naver-ai__tc-clip/datasets_splits/k600_splits/ZS_split1_K600_eval.txt)<br>[datasets_splits/k600_splits/ZS_split2_K600_eval.txt](../../../../sources/naver-ai__tc-clip/datasets_splits/k600_splits/ZS_split2_K600_eval.txt) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 8 | [README.md](../../../../sources/naver-ai__tc-clip/README.md)<br>[docs/CONFIG.md](../../../../sources/naver-ai__tc-clip/docs/CONFIG.md)<br>[docs/DATASETS.md](../../../../sources/naver-ai__tc-clip/docs/DATASETS.md)<br>[docs/INSTALL.md](../../../../sources/naver-ai__tc-clip/docs/INSTALL.md)<br>[docs/tc_clip_poster_eccv2024.pdf](../../../../sources/naver-ai__tc-clip/docs/tc_clip_poster_eccv2024.pdf)<br>[docs/teaser_attention.png](../../../../sources/naver-ai__tc-clip/docs/teaser_attention.png)<br>[docs/temporal_modeling_comparison.png](../../../../sources/naver-ai__tc-clip/docs/temporal_modeling_comparison.png)<br>[docs/TRAIN_EVAL.md](../../../../sources/naver-ai__tc-clip/docs/TRAIN_EVAL.md) |
| config | 1 | [requirements.txt](../../../../sources/naver-ai__tc-clip/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 9 | [scripts/eval/eval_tc_clip_base2novel.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_base2novel.sh)<br>[scripts/eval/eval_tc_clip_few_shot.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_few_shot.sh)<br>[scripts/eval/eval_tc_clip_fully_supervised.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_fully_supervised.sh)<br>[scripts/eval/eval_tc_clip_zero_shot_wise_ft.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_zero_shot_wise_ft.sh)<br>[scripts/eval/eval_tc_clip_zero_shot.sh](../../../../sources/naver-ai__tc-clip/scripts/eval/eval_tc_clip_zero_shot.sh)<br>[docs/TRAIN_EVAL.md](../../../../sources/naver-ai__tc-clip/docs/TRAIN_EVAL.md) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `main.py`, `README.md`, `docs/CONFIG.md`.
2. entrypoint를 따라 실행 흐름 확인: `main.py`.
3. agent/tool runtime 매핑: `utils/tools.py`.
4. test/eval 파일로 동작 검증: `scripts/eval/eval_tc_clip_base2novel.sh`, `scripts/eval/eval_tc_clip_few_shot.sh`, `scripts/eval/eval_tc_clip_fully_supervised.sh`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 ECCV 2024 Official PyTorch implementation of TC CLIP "Leveraging Temporal Contextualization for Video Action Recognition. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, torch, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
