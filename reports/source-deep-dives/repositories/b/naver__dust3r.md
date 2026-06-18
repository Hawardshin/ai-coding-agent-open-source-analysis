# naver/dust3r 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

DUSt3R: Geometric 3D Vision Made Easy

## 요약

- 조사 단위: `sources/naver__dust3r` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 96 files, 16 directories, depth score 72, key references 8개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=requirements_optional.txt, requirements.txt이고, 의존성 단서는 torch, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | naver/dust3r |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Python |
| Stars | 7196 |
| Forks | 759 |
| License | NOASSERTION |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/naver__dust3r](../../../../sources/naver__dust3r) |
| 기존 보고서 | [reports/korea-trending/repositories/naver__dust3r.md](../../../korea-trending/repositories/naver__dust3r.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 96 / 16 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | assets, croco, datasets_preprocess, docker, dust3r, dust3r_visloc |
| 상위 확장자 | .py: 76, .jpg: 5, (none): 4, .md: 3, .dockerfile: 2, .sh: 2, .txt: 2, .yml: 2 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| assets | top-level component | 1 |
| croco | top-level component | 1 |
| datasets_preprocess | top-level component | 1 |
| docker | documentation surface | 1 |
| dust3r | top-level component | 1 |
| dust3r_visloc | top-level component | 1 |


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
| config | [requirements_optional.txt](../../../../sources/naver__dust3r/requirements_optional.txt) | config signal |
| config | [requirements.txt](../../../../sources/naver__dust3r/requirements.txt) | config signal |
| docs | [README.md](../../../../sources/naver__dust3r/README.md) | docs signal |
| docs | [dust3r_visloc/README.md](../../../../sources/naver__dust3r/dust3r_visloc/README.md) | docs signal |
| docs | [datasets_preprocess/habitat/README.md](../../../../sources/naver__dust3r/datasets_preprocess/habitat/README.md) | docs signal |
| eval | [dust3r_visloc/evaluation.py](../../../../sources/naver__dust3r/dust3r_visloc/evaluation.py) | eval signal |
| container | [docker/docker-compose-cpu.yml](../../../../sources/naver__dust3r/docker/docker-compose-cpu.yml) | container support |
| container | [docker/docker-compose-cuda.yml](../../../../sources/naver__dust3r/docker/docker-compose-cuda.yml) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [dust3r/patch_embed.py](../../../../sources/naver__dust3r/dust3r/patch_embed.py) |
| spec | 2 | [requirements_optional.txt](../../../../sources/naver__dust3r/requirements_optional.txt)<br>[requirements.txt](../../../../sources/naver__dust3r/requirements.txt) |
| eval | 1 | [dust3r_visloc/evaluation.py](../../../../sources/naver__dust3r/dust3r_visloc/evaluation.py) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 2 | [docker/docker-compose-cpu.yml](../../../../sources/naver__dust3r/docker/docker-compose-cpu.yml)<br>[docker/docker-compose-cuda.yml](../../../../sources/naver__dust3r/docker/docker-compose-cuda.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/naver__dust3r/README.md)<br>[dust3r_visloc/README.md](../../../../sources/naver__dust3r/dust3r_visloc/README.md)<br>[datasets_preprocess/habitat/README.md](../../../../sources/naver__dust3r/datasets_preprocess/habitat/README.md) |
| config | 2 | [requirements_optional.txt](../../../../sources/naver__dust3r/requirements_optional.txt)<br>[requirements.txt](../../../../sources/naver__dust3r/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [dust3r_visloc/evaluation.py](../../../../sources/naver__dust3r/dust3r_visloc/evaluation.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 2 | [docker/docker-compose-cpu.yml](../../../../sources/naver__dust3r/docker/docker-compose-cpu.yml)<br>[docker/docker-compose-cuda.yml](../../../../sources/naver__dust3r/docker/docker-compose-cuda.yml) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `requirements_optional.txt`, `requirements.txt`, `README.md`.
2. retrieval/memory/indexing 확인: `dust3r/patch_embed.py`.
3. test/eval 파일로 동작 검증: `dust3r_visloc/evaluation.py`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 DUSt3R Geometric 3D Vision Made Easy. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, torch, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
