# hyperconnect/hyperconnect.github.io 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

하이퍼커넥트 기술블로그입니다

## 요약

- 조사 단위: `sources/hyperconnect__hyperconnect.github.io` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 950 files, 107 directories, depth score 94, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | hyperconnect/hyperconnect.github.io |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | HTML |
| Stars | 10 |
| Forks | 5 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/hyperconnect__hyperconnect.github.io](../../../../sources/hyperconnect__hyperconnect.github.io) |
| 기존 보고서 | [reports/korea-trending/repositories/hyperconnect__hyperconnect.github.io.md](../../../korea-trending/repositories/hyperconnect__hyperconnect.github.io.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 950 / 107 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | _data, _includes, _layouts, _posts, assets, tag |
| 상위 확장자 | .png: 537, .md: 313, .jpg: 64, .html: 13, .gif: 8, .jpeg: 3, .yml: 3, (none): 3, .svg: 2, .lock: 1, .mp4: 1, .py: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| _data | top-level component | 1 |
| _includes | top-level component | 1 |
| _layouts | top-level component | 1 |
| _posts | top-level component | 1 |
| assets | top-level component | 1 |
| tag | top-level component | 1 |


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
| docs | [README.md](../../../../sources/hyperconnect__hyperconnect.github.io/README.md) | docs signal |
| eval | [assets/test.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/test.jpg) | eval signal |
| eval | [assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png) | eval signal |
| eval | [assets/2026-04-01-llm-as-a-judge-for-explanation-quality/2.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/2.png) | eval signal |
| eval | [assets/2026-04-01-llm-as-a-judge-for-explanation-quality/3.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/3.png) | eval signal |
| ci | [tag/jenkins.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/jenkins.md) | ci support |
| container | [docker-compose.yml](../../../../sources/hyperconnect__hyperconnect.github.io/docker-compose.yml) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 5 | [tag/memory-leak.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/memory-leak.md)<br>[tag/memory.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/memory.md)<br>[assets/2022-12-12-redis-memory-usage/memory-decrease.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2022-12-12-redis-memory-usage/memory-decrease.png)<br>[assets/2022-12-12-redis-memory-usage/memory-increase.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2022-12-12-redis-memory-usage/memory-increase.png)<br>[assets/2021-11-08-github-actions-for-everyone-1/runner-label.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2021-11-08-github-actions-for-everyone-1/runner-label.png) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 35 | [index.md](../../../../sources/hyperconnect__hyperconnect.github.io/index.md)<br>[tag/knowledge-distillation.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/knowledge-distillation.md)<br>[tag/memory-leak.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/memory-leak.md)<br>[tag/memory.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/memory.md)<br>[tag/secondary-index.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/secondary-index.md)<br>[assets/2025-03-28-flink-e2e-latency/example_flame_graph.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2025-03-28-flink-e2e-latency/example_flame_graph.png)<br>[assets/2025-03-28-flink-e2e-latency/example_job_graph.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2025-03-28-flink-e2e-latency/example_job_graph.png)<br>[assets/2025-03-28-flink-e2e-latency/flame_graph_1.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2025-03-28-flink-e2e-latency/flame_graph_1.png) |
| spec | 10 | [assets/2024-10-09-behind-the-paper/architecture.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2024-10-09-behind-the-paper/architecture.png)<br>[assets/2023-01-27-combating-noisy-labels/Model_Architecture_Figure.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2023-01-27-combating-noisy-labels/Model_Architecture_Figure.jpg)<br>[assets/2022-12-13-infra-cost-optimization-with-aws-inferentia/inf1_architecture.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2022-12-13-infra-cost-optimization-with-aws-inferentia/inf1_architecture.png)<br>[assets/2022-01-24-event-driven-recsys/event-driven-architecture.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2022-01-24-event-driven-recsys/event-driven-architecture.png)<br>[assets/2020-03-25-kube-agent/6_architecture.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2020-03-25-kube-agent/6_architecture.jpg)<br>[assets/2020-03-24-improve-stomp-client/2_blocking_architecture.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2020-03-24-improve-stomp-client/2_blocking_architecture.jpg)<br>[assets/2020-03-24-improve-stomp-client/3_non_blocking_architecture.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2020-03-24-improve-stomp-client/3_non_blocking_architecture.jpg)<br>[assets/2019-12-17-kubehook/architecture.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2019-12-17-kubehook/architecture.png) |
| eval | 60 | [assets/test.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/test.jpg)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/2.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/2.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/3.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/3.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/4.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/4.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/5.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/5.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/6.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/6.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/7.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/7.png) |
| security | 26 | [tag/data-lifecycle-policy.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/data-lifecycle-policy.md)<br>[tag/permission.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/permission.md)<br>[tag/security.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/security.md)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/1.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/1.png)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/2.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/2.png)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/3.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/3.png)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/4.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/4.jpg)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/5.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/5.png) |
| ci | 1 | [tag/jenkins.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/jenkins.md) |
| container | 1 | [docker-compose.yml](../../../../sources/hyperconnect__hyperconnect.github.io/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/hyperconnect__hyperconnect.github.io/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 60 | [assets/test.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/test.jpg)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/2.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/2.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/3.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/3.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/4.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/4.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/5.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/5.png) |
| CI workflow | 1 | [tag/jenkins.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/jenkins.md) |
| 컨테이너/배포 | 1 | [docker-compose.yml](../../../../sources/hyperconnect__hyperconnect.github.io/docker-compose.yml) |
| 보안/정책 | 26 | [tag/data-lifecycle-policy.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/data-lifecycle-policy.md)<br>[tag/permission.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/permission.md)<br>[tag/security.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/security.md)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/1.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/1.png)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/2.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/2.png)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/3.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/3.png) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `README.md`, `assets/test.jpg`, `assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png`.
2. agent/tool runtime 매핑: `tag/memory-leak.md`, `tag/memory.md`, `assets/2022-12-12-redis-memory-usage/memory-decrease.png`.
3. retrieval/memory/indexing 확인: `index.md`, `tag/knowledge-distillation.md`, `tag/memory-leak.md`.
4. test/eval 파일로 동작 검증: `assets/test.jpg`, `assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png`, `assets/2026-04-01-llm-as-a-judge-for-explanation-quality/2.png`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 하이퍼커넥트 기술블로그입니다. 핵심 구조 신호는 HTML, docker-compose.yml, README.md, docs, docker이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
