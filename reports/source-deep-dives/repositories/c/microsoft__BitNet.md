# microsoft/BitNet 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 71 files, 15 directories.

## 요약

- 조사 단위: `sources/microsoft__BitNet` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 71 files, 15 directories, depth score 63, key references 4개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=requirements.txt, gpu/requirements.txt이고, 의존성 단서는 llama, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | microsoft/BitNet |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/microsoft__BitNet](../../../../sources/microsoft__BitNet) |
| 기존 보고서 | [reports/clone-structures/microsoft__BitNet.md](../../../clone-structures/microsoft__BitNet.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 71 / 15 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | 3rdparty, assets, docs, gpu, include, media, preset_kernels, src, utils |
| 상위 확장자 | .py: 25, .png: 10, .h: 9, .ini: 6, .md: 6, .txt: 4, .sh: 3, (none): 3, .cpp: 2, .cu: 1, .model: 1, .mp4: 1 |
| 소스 패턴 | retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 3 |
| docs | documentation surface | 2 |
| 3rdparty | top-level component | 1 |
| assets | top-level component | 1 |
| gpu | top-level component | 1 |
| include | top-level component | 1 |
| media | top-level component | 1 |
| preset_kernels | top-level component | 1 |
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
| modelRuntime | llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| config | [requirements.txt](../../../../sources/microsoft__BitNet/requirements.txt) | config signal |
| config | [gpu/requirements.txt](../../../../sources/microsoft__BitNet/gpu/requirements.txt) | config signal |
| eval | [utils/e2e_benchmark.py](../../../../sources/microsoft__BitNet/utils/e2e_benchmark.py) | eval support |
| eval | [utils/test_gemm_kernel.sh](../../../../sources/microsoft__BitNet/utils/test_gemm_kernel.sh) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [src/assets/embedding_throughput.png](../../../../sources/microsoft__BitNet/src/assets/embedding_throughput.png) |
| spec | 2 | [requirements.txt](../../../../sources/microsoft__BitNet/requirements.txt)<br>[gpu/requirements.txt](../../../../sources/microsoft__BitNet/gpu/requirements.txt) |
| eval | 6 | [utils/e2e_benchmark.py](../../../../sources/microsoft__BitNet/utils/e2e_benchmark.py)<br>[utils/test_gemm_kernel.sh](../../../../sources/microsoft__BitNet/utils/test_gemm_kernel.sh)<br>[utils/test_perplexity.py](../../../../sources/microsoft__BitNet/utils/test_perplexity.py)<br>[utils/test_power.sh](../../../../sources/microsoft__BitNet/utils/test_power.sh)<br>[media/benchmark.png](../../../../sources/microsoft__BitNet/media/benchmark.png)<br>[gpu/test.py](../../../../sources/microsoft__BitNet/gpu/test.py) |
| security | 1 | [SECURITY.md](../../../../sources/microsoft__BitNet/SECURITY.md) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 4 | [README.md](../../../../sources/microsoft__BitNet/README.md)<br>[src/README.md](../../../../sources/microsoft__BitNet/src/README.md)<br>[gpu/README.md](../../../../sources/microsoft__BitNet/gpu/README.md)<br>[docs/codegen.md](../../../../sources/microsoft__BitNet/docs/codegen.md) |
| config | 2 | [requirements.txt](../../../../sources/microsoft__BitNet/requirements.txt)<br>[gpu/requirements.txt](../../../../sources/microsoft__BitNet/gpu/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 6 | [utils/e2e_benchmark.py](../../../../sources/microsoft__BitNet/utils/e2e_benchmark.py)<br>[utils/test_gemm_kernel.sh](../../../../sources/microsoft__BitNet/utils/test_gemm_kernel.sh)<br>[utils/test_perplexity.py](../../../../sources/microsoft__BitNet/utils/test_perplexity.py)<br>[utils/test_power.sh](../../../../sources/microsoft__BitNet/utils/test_power.sh)<br>[media/benchmark.png](../../../../sources/microsoft__BitNet/media/benchmark.png)<br>[gpu/test.py](../../../../sources/microsoft__BitNet/gpu/test.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/microsoft__BitNet/SECURITY.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `requirements.txt`, `gpu/requirements.txt`, `utils/e2e_benchmark.py`.
2. retrieval/memory/indexing 확인: `src/assets/embedding_throughput.png`.
3. test/eval 파일로 동작 검증: `utils/e2e_benchmark.py`, `utils/test_gemm_kernel.sh`, `utils/test_perplexity.py`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Local clone structure analysis 71 files, 15 directories.. 핵심 구조 신호는 requirements.txt, README.md, LICENSE, docs, spec-artifacts, 71 files이며, 심층 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음입니다.
