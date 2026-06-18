# hyperconnect/hyperconnect.github.io Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

하이퍼커넥트 기술블로그입니다

## 요약

- 조사 단위: `sources/hyperconnect__hyperconnect.github.io` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 950 files, 107 directories, depth score 100, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 docs=README.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | hyperconnect/hyperconnect.github.io |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | HTML |
| Stars | 10 |
| Forks | 5 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/hyperconnect__hyperconnect.github.io](../../../../sources/hyperconnect__hyperconnect.github.io) |
| Existing report | [reports/korea-trending/repositories/hyperconnect__hyperconnect.github.io.md](../../../korea-trending/repositories/hyperconnect__hyperconnect.github.io.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 950 / 107 |
| Max observed depth | 3 |
| Top directories | _data, _includes, _layouts, _posts, assets, tag |
| Top extensions | .png: 537, .md: 313, .jpg: 64, .html: 13, .gif: 8, .jpeg: 3, .yml: 3, (none): 3, .svg: 2, .lock: 1, .mp4: 1, .py: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| _data | top-level component | 1 |
| _includes | top-level component | 1 |
| _layouts | top-level component | 1 |
| _posts | top-level component | 1 |
| assets | top-level component | 1 |
| tag | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| docs | [README.md](../../../../sources/hyperconnect__hyperconnect.github.io/README.md) | docs signal |
| eval | [assets/test.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/test.jpg) | eval signal |
| eval | [assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png) | eval signal |
| eval | [assets/2026-04-01-llm-as-a-judge-for-explanation-quality/2.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/2.png) | eval signal |
| eval | [assets/2026-04-01-llm-as-a-judge-for-explanation-quality/3.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/3.png) | eval signal |
| ci | [tag/jenkins.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/jenkins.md) | ci support |
| container | [docker-compose.yml](../../../../sources/hyperconnect__hyperconnect.github.io/docker-compose.yml) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 5 | [tag/memory-leak.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/memory-leak.md)<br>[tag/memory.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/memory.md)<br>[assets/2022-12-12-redis-memory-usage/memory-decrease.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2022-12-12-redis-memory-usage/memory-decrease.png)<br>[assets/2022-12-12-redis-memory-usage/memory-increase.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2022-12-12-redis-memory-usage/memory-increase.png)<br>[assets/2021-11-08-github-actions-for-everyone-1/runner-label.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2021-11-08-github-actions-for-everyone-1/runner-label.png) |
| mcp | 0 | not obvious |
| retrieval | 35 | [index.md](../../../../sources/hyperconnect__hyperconnect.github.io/index.md)<br>[tag/knowledge-distillation.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/knowledge-distillation.md)<br>[tag/memory-leak.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/memory-leak.md)<br>[tag/memory.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/memory.md)<br>[tag/secondary-index.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/secondary-index.md)<br>[assets/2025-03-28-flink-e2e-latency/example_flame_graph.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2025-03-28-flink-e2e-latency/example_flame_graph.png)<br>[assets/2025-03-28-flink-e2e-latency/example_job_graph.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2025-03-28-flink-e2e-latency/example_job_graph.png)<br>[assets/2025-03-28-flink-e2e-latency/flame_graph_1.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2025-03-28-flink-e2e-latency/flame_graph_1.png) |
| spec | 10 | [assets/2024-10-09-behind-the-paper/architecture.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2024-10-09-behind-the-paper/architecture.png)<br>[assets/2023-01-27-combating-noisy-labels/Model_Architecture_Figure.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2023-01-27-combating-noisy-labels/Model_Architecture_Figure.jpg)<br>[assets/2022-12-13-infra-cost-optimization-with-aws-inferentia/inf1_architecture.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2022-12-13-infra-cost-optimization-with-aws-inferentia/inf1_architecture.png)<br>[assets/2022-01-24-event-driven-recsys/event-driven-architecture.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2022-01-24-event-driven-recsys/event-driven-architecture.png)<br>[assets/2020-03-25-kube-agent/6_architecture.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2020-03-25-kube-agent/6_architecture.jpg)<br>[assets/2020-03-24-improve-stomp-client/2_blocking_architecture.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2020-03-24-improve-stomp-client/2_blocking_architecture.jpg)<br>[assets/2020-03-24-improve-stomp-client/3_non_blocking_architecture.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2020-03-24-improve-stomp-client/3_non_blocking_architecture.jpg)<br>[assets/2019-12-17-kubehook/architecture.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2019-12-17-kubehook/architecture.png) |
| eval | 60 | [assets/test.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/test.jpg)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/2.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/2.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/3.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/3.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/4.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/4.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/5.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/5.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/6.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/6.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/7.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/7.png) |
| security | 26 | [tag/data-lifecycle-policy.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/data-lifecycle-policy.md)<br>[tag/permission.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/permission.md)<br>[tag/security.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/security.md)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/1.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/1.png)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/2.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/2.png)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/3.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/3.png)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/4.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/4.jpg)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/5.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/5.png) |
| ci | 1 | [tag/jenkins.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/jenkins.md) |
| container | 1 | [docker-compose.yml](../../../../sources/hyperconnect__hyperconnect.github.io/docker-compose.yml) |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/hyperconnect__hyperconnect.github.io/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 60 | [assets/test.jpg](../../../../sources/hyperconnect__hyperconnect.github.io/assets/test.jpg)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/2.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/2.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/3.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/3.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/4.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/4.png)<br>[assets/2026-04-01-llm-as-a-judge-for-explanation-quality/5.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-llm-as-a-judge-for-explanation-quality/5.png) |
| CI workflows | 1 | [tag/jenkins.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/jenkins.md) |
| Containers / deploy | 1 | [docker-compose.yml](../../../../sources/hyperconnect__hyperconnect.github.io/docker-compose.yml) |
| Security / policy | 26 | [tag/data-lifecycle-policy.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/data-lifecycle-policy.md)<br>[tag/permission.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/permission.md)<br>[tag/security.md](../../../../sources/hyperconnect__hyperconnect.github.io/tag/security.md)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/1.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/1.png)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/2.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/2.png)<br>[assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/3.png](../../../../sources/hyperconnect__hyperconnect.github.io/assets/2026-04-01-how-hyperconnect-built-llm-explanation-policy/3.png) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README.md`, `assets/test.jpg`, `assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png`.
2. Map agent/tool runtime through: `tag/memory-leak.md`, `tag/memory.md`, `assets/2022-12-12-redis-memory-usage/memory-decrease.png`.
3. Inspect retrieval/memory/indexing through: `index.md`, `tag/knowledge-distillation.md`, `tag/memory-leak.md`.
4. Verify behavior through test/eval files: `assets/test.jpg`, `assets/2026-04-01-llm-as-a-judge-for-explanation-quality/1.png`, `assets/2026-04-01-llm-as-a-judge-for-explanation-quality/2.png`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 하이퍼커넥트 기술블로그입니다. 핵심 구조 신호는 HTML, docker-compose.yml, README.md, docs, docker이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
