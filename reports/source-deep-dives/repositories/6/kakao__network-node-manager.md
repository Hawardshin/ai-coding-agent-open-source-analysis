# kakao/network-node-manager 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

network-node-manager is a kubernetes controller that controls the network configuration of a node to resolve network issues of kubernetes.

## 요약

- 조사 단위: `sources/kakao__network-node-manager` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 37 files, 15 directories, depth score 76, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.go이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kakao/network-node-manager |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | korea |
| Language | Go |
| Stars | 107 |
| Forks | 19 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kakao__network-node-manager](../../../../sources/kakao__network-node-manager) |
| 기존 보고서 | [reports/korea-trending/repositories/kakao__network-node-manager.md](../../../korea-trending/repositories/kakao__network-node-manager.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 37 / 15 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, controllers, deploy, img, issues, pkg, scripts, test |
| 상위 확장자 | .go: 15, .yml: 8, .md: 5, (none): 4, .mod: 1, .png: 1, .pptx: 1, .sh: 1, .sum: 1 |
| 소스 패턴 | cli-first, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| controllers | top-level component | 1 |
| deploy | deployment surface | 1 |
| img | top-level component | 1 |
| issues | top-level component | 1 |
| pkg | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | all | make all |
| test | Makefile | test | make test |
| utility | Makefile | network-node-manager | make network-node-manager |
| utility | Makefile | run | make run |
| utility | Makefile | deploy | make deploy |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | vet | make vet |
| build | Makefile | docker-build | make docker-build |
| container | Makefile | docker-push | make docker-push |


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
| entrypoints | [main.go](../../../../sources/kakao__network-node-manager/main.go) | entrypoints signal |
| container | [Dockerfile](../../../../sources/kakao__network-node-manager/Dockerfile) | container signal |
| container | [deploy/network-node-manager_iptables.yml](../../../../sources/kakao__network-node-manager/deploy/network-node-manager_iptables.yml) | container signal |
| container | [deploy/network-node-manager_ipvs.yml](../../../../sources/kakao__network-node-manager/deploy/network-node-manager_ipvs.yml) | container signal |
| config | [go.mod](../../../../sources/kakao__network-node-manager/go.mod) | config signal |
| config | [Makefile](../../../../sources/kakao__network-node-manager/Makefile) | config signal |
| ci | [.github/workflows/build.yml](../../../../sources/kakao__network-node-manager/.github/workflows/build.yml) | ci signal |
| ci | [.github/workflows/test.yml](../../../../sources/kakao__network-node-manager/.github/workflows/test.yml) | ci signal |
| eval | [test/manifests/nginx-deploy.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-deploy.yml) | eval support |
| eval | [test/manifests/nginx-svc-ipv4-ipv6.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-svc-ipv4-ipv6.yml) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [main.go](../../../../sources/kakao__network-node-manager/main.go) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 1 | [img/network-node-manager_Architecture.PNG](../../../../sources/kakao__network-node-manager/img/network-node-manager_Architecture.PNG) |
| eval | 10 | [test/manifests/nginx-deploy.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-deploy.yml)<br>[test/manifests/nginx-svc-ipv4-ipv6.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-svc-ipv4-ipv6.yml)<br>[test/manifests/nginx-svc-ipv4.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-svc-ipv4.yml)<br>[test/manifests/nginx-svc-ipv6.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-svc-ipv6.yml)<br>[pkg/utils/utils_test.go](../../../../sources/kakao__network-node-manager/pkg/utils/utils_test.go)<br>[pkg/iptables/iptables_test.go](../../../../sources/kakao__network-node-manager/pkg/iptables/iptables_test.go)<br>[pkg/iptables/rule_test.go](../../../../sources/kakao__network-node-manager/pkg/iptables/rule_test.go)<br>[pkg/ip/ip_test.go](../../../../sources/kakao__network-node-manager/pkg/ip/ip_test.go) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/build.yml](../../../../sources/kakao__network-node-manager/.github/workflows/build.yml)<br>[.github/workflows/test.yml](../../../../sources/kakao__network-node-manager/.github/workflows/test.yml) |
| container | 3 | [Dockerfile](../../../../sources/kakao__network-node-manager/Dockerfile)<br>[deploy/network-node-manager_iptables.yml](../../../../sources/kakao__network-node-manager/deploy/network-node-manager_iptables.yml)<br>[deploy/network-node-manager_ipvs.yml](../../../../sources/kakao__network-node-manager/deploy/network-node-manager_ipvs.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/kakao__network-node-manager/README.md) |
| config | 2 | [go.mod](../../../../sources/kakao__network-node-manager/go.mod)<br>[Makefile](../../../../sources/kakao__network-node-manager/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 10 | [test/manifests/nginx-deploy.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-deploy.yml)<br>[test/manifests/nginx-svc-ipv4-ipv6.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-svc-ipv4-ipv6.yml)<br>[test/manifests/nginx-svc-ipv4.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-svc-ipv4.yml)<br>[test/manifests/nginx-svc-ipv6.yml](../../../../sources/kakao__network-node-manager/test/manifests/nginx-svc-ipv6.yml)<br>[pkg/utils/utils_test.go](../../../../sources/kakao__network-node-manager/pkg/utils/utils_test.go)<br>[pkg/iptables/iptables_test.go](../../../../sources/kakao__network-node-manager/pkg/iptables/iptables_test.go) |
| CI workflow | 2 | [.github/workflows/build.yml](../../../../sources/kakao__network-node-manager/.github/workflows/build.yml)<br>[.github/workflows/test.yml](../../../../sources/kakao__network-node-manager/.github/workflows/test.yml) |
| 컨테이너/배포 | 3 | [Dockerfile](../../../../sources/kakao__network-node-manager/Dockerfile)<br>[deploy/network-node-manager_iptables.yml](../../../../sources/kakao__network-node-manager/deploy/network-node-manager_iptables.yml)<br>[deploy/network-node-manager_ipvs.yml](../../../../sources/kakao__network-node-manager/deploy/network-node-manager_ipvs.yml) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `main.go`, `Dockerfile`, `deploy/network-node-manager_iptables.yml`.
2. entrypoint를 따라 실행 흐름 확인: `main.go`.
3. test/eval 파일로 동작 검증: `test/manifests/nginx-deploy.yml`, `test/manifests/nginx-svc-ipv4-ipv6.yml`, `test/manifests/nginx-svc-ipv4.yml`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 network node manager is a kubernetes controller that controls the network configuration of a node to resolve network iss. 핵심 구조 신호는 Go, go.mod, Dockerfile, Makefile, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
