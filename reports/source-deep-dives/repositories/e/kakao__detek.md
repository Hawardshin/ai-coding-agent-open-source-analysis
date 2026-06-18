# kakao/detek 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Extensible problem-detecting CLI tool for reliable Kubernetes cluster operations and rapid problem detections.

## 요약

- 조사 단위: `sources/kakao__detek` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 56 files, 12 directories, depth score 82, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.go이고, 의존성 단서는 cobra, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kakao/detek |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | korea |
| Language | Go |
| Stars | 90 |
| Forks | 11 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kakao__detek](../../../../sources/kakao__detek) |
| 기존 보고서 | [reports/korea-trending/repositories/kakao__detek.md](../../../korea-trending/repositories/kakao__detek.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 56 / 12 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, cases, cmd, images, pkg |
| 상위 확장자 | .go: 44, .md: 3, (none): 3, .png: 2, .yml: 2, .mod: 1, .sum: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| cases | top-level component | 1 |
| cmd | source boundary | 1 |
| images | top-level component | 1 |
| pkg | top-level component | 1 |


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
| developerSurface | cobra |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [main.go](../../../../sources/kakao__detek/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/kakao__detek/go.mod) | config signal |
| ci | [.github/workflows/push.yml](../../../../sources/kakao__detek/.github/workflows/push.yml) | ci signal |
| ci | [.github/workflows/tests.yml](../../../../sources/kakao__detek/.github/workflows/tests.yml) | ci signal |
| docs | [README.md](../../../../sources/kakao__detek/README.md) | docs signal |
| docs | [cases/README.md](../../../../sources/kakao__detek/cases/README.md) | docs signal |
| container | [Dockerfile](../../../../sources/kakao__detek/Dockerfile) | container support |
| eval | [pkg/renderer/html_test.go](../../../../sources/kakao__detek/pkg/renderer/html_test.go) | eval support |
| eval | [pkg/renderer/json_test.go](../../../../sources/kakao__detek/pkg/renderer/json_test.go) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [main.go](../../../../sources/kakao__detek/main.go) |
| agentRuntime | 2 | [pkg/detek/context_test.go](../../../../sources/kakao__detek/pkg/detek/context_test.go)<br>[pkg/detek/context.go](../../../../sources/kakao__detek/pkg/detek/context.go) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 10 | [pkg/renderer/html_test.go](../../../../sources/kakao__detek/pkg/renderer/html_test.go)<br>[pkg/renderer/json_test.go](../../../../sources/kakao__detek/pkg/renderer/json_test.go)<br>[pkg/renderer/plan_table_test.go](../../../../sources/kakao__detek/pkg/renderer/plan_table_test.go)<br>[pkg/renderer/table_test.go](../../../../sources/kakao__detek/pkg/renderer/table_test.go)<br>[pkg/detek/context_test.go](../../../../sources/kakao__detek/pkg/detek/context_test.go)<br>[pkg/detek/fake_test.go](../../../../sources/kakao__detek/pkg/detek/fake_test.go)<br>[pkg/detek/manager_test.go](../../../../sources/kakao__detek/pkg/detek/manager_test.go)<br>[cases/collector_set_test.go](../../../../sources/kakao__detek/cases/collector_set_test.go) |
| security | 2 | [cases/detector/api_lifecycle_policy_v1beta1.go](../../../../sources/kakao__detek/cases/detector/api_lifecycle_policy_v1beta1.go)<br>[cases/collector/kubernetes_policy_v1beta1.go](../../../../sources/kakao__detek/cases/collector/kubernetes_policy_v1beta1.go) |
| ci | 2 | [.github/workflows/push.yml](../../../../sources/kakao__detek/.github/workflows/push.yml)<br>[.github/workflows/tests.yml](../../../../sources/kakao__detek/.github/workflows/tests.yml) |
| container | 1 | [Dockerfile](../../../../sources/kakao__detek/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/kakao__detek/README.md)<br>[cases/README.md](../../../../sources/kakao__detek/cases/README.md) |
| config | 1 | [go.mod](../../../../sources/kakao__detek/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 10 | [pkg/renderer/html_test.go](../../../../sources/kakao__detek/pkg/renderer/html_test.go)<br>[pkg/renderer/json_test.go](../../../../sources/kakao__detek/pkg/renderer/json_test.go)<br>[pkg/renderer/plan_table_test.go](../../../../sources/kakao__detek/pkg/renderer/plan_table_test.go)<br>[pkg/renderer/table_test.go](../../../../sources/kakao__detek/pkg/renderer/table_test.go)<br>[pkg/detek/context_test.go](../../../../sources/kakao__detek/pkg/detek/context_test.go)<br>[pkg/detek/fake_test.go](../../../../sources/kakao__detek/pkg/detek/fake_test.go) |
| CI workflow | 2 | [.github/workflows/push.yml](../../../../sources/kakao__detek/.github/workflows/push.yml)<br>[.github/workflows/tests.yml](../../../../sources/kakao__detek/.github/workflows/tests.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/kakao__detek/Dockerfile) |
| 보안/정책 | 2 | [cases/detector/api_lifecycle_policy_v1beta1.go](../../../../sources/kakao__detek/cases/detector/api_lifecycle_policy_v1beta1.go)<br>[cases/collector/kubernetes_policy_v1beta1.go](../../../../sources/kakao__detek/cases/collector/kubernetes_policy_v1beta1.go) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `main.go`, `go.mod`, `.github/workflows/push.yml`.
2. entrypoint를 따라 실행 흐름 확인: `main.go`.
3. agent/tool runtime 매핑: `pkg/detek/context_test.go`, `pkg/detek/context.go`.
4. test/eval 파일로 동작 검증: `pkg/renderer/html_test.go`, `pkg/renderer/json_test.go`, `pkg/renderer/plan_table_test.go`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 Extensible problem detecting CLI tool for reliable Kubernetes cluster operations and rapid problem detections.. 핵심 구조 신호는 Go, go.mod, Dockerfile, README.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
