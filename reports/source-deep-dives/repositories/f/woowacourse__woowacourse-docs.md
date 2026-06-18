# woowacourse/woowacourse-docs Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

우아한테크코스 문서를 관리하는 저장소

## 요약

- 조사 단위: `sources/woowacourse__woowacourse-docs` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 124 files, 29 directories, depth score 69, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=.omc/project-memory.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | woowacourse/woowacourse-docs |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | none |
| Stars | 420 |
| Forks | 378 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/woowacourse__woowacourse-docs](../../../../sources/woowacourse__woowacourse-docs) |
| Existing report | [reports/korea-trending/repositories/woowacourse__woowacourse-docs.md](../../../korea-trending/repositories/woowacourse__woowacourse-docs.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 124 / 29 |
| Max observed depth | 4 |
| Top directories | .omc, cleancode, codereview, consulting, maincourse, precourse, privacypolicy, reviewer, studylog, styleguide |
| Top extensions | .md: 62, .png: 37, .jpg: 17, .json: 6, .xml: 1, (none): 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| cleancode | top-level component | 1 |
| codereview | top-level component | 1 |
| consulting | top-level component | 1 |
| maincourse | top-level component | 1 |
| precourse | top-level component | 1 |
| privacypolicy | top-level component | 1 |
| reviewer | top-level component | 1 |
| studylog | top-level component | 1 |
| styleguide | top-level component | 1 |


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
| retrieval | [.omc/project-memory.json](../../../../sources/woowacourse__woowacourse-docs/.omc/project-memory.json) | retrieval signal |
| docs | [README.md](../../../../sources/woowacourse__woowacourse-docs/README.md) | docs signal |
| docs | [styleguide/README.md](../../../../sources/woowacourse__woowacourse-docs/styleguide/README.md) | docs signal |
| docs | [styleguide/kotlin/README.md](../../../../sources/woowacourse__woowacourse-docs/styleguide/kotlin/README.md) | docs signal |
| docs | [styleguide/javascript/README.md](../../../../sources/woowacourse__woowacourse-docs/styleguide/javascript/README.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [.omc/state/skill-sessions.json](../../../../sources/woowacourse__woowacourse-docs/.omc/state/skill-sessions.json) |
| mcp | 0 | not obvious |
| retrieval | 1 | [.omc/project-memory.json](../../../../sources/woowacourse__woowacourse-docs/.omc/project-memory.json) |
| spec | 1 | [reviewer/fe-lv2/shopping-cart-3rd-system-design.md](../../../../sources/woowacourse__woowacourse-docs/reviewer/fe-lv2/shopping-cart-3rd-system-design.md) |
| eval | 0 | not obvious |
| security | 1 | [privacypolicy/woowacourse-app-privacy-policy.md](../../../../sources/woowacourse__woowacourse-docs/privacypolicy/woowacourse-app-privacy-policy.md) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 19 | [README.md](../../../../sources/woowacourse__woowacourse-docs/README.md)<br>[styleguide/README.md](../../../../sources/woowacourse__woowacourse-docs/styleguide/README.md)<br>[styleguide/kotlin/README.md](../../../../sources/woowacourse__woowacourse-docs/styleguide/kotlin/README.md)<br>[styleguide/javascript/README.md](../../../../sources/woowacourse__woowacourse-docs/styleguide/javascript/README.md)<br>[styleguide/java/README.md](../../../../sources/woowacourse__woowacourse-docs/styleguide/java/README.md)<br>[studylog/README.md](../../../../sources/woowacourse__woowacourse-docs/studylog/README.md)<br>[reviewer/README.md](../../../../sources/woowacourse__woowacourse-docs/reviewer/README.md)<br>[reviewer/fe-lv2/README.md](../../../../sources/woowacourse__woowacourse-docs/reviewer/fe-lv2/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [privacypolicy/woowacourse-app-privacy-policy.md](../../../../sources/woowacourse__woowacourse-docs/privacypolicy/woowacourse-app-privacy-policy.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.omc/project-memory.json`, `README.md`, `styleguide/README.md`.
2. Map agent/tool runtime through: `.omc/state/skill-sessions.json`.
3. Inspect retrieval/memory/indexing through: `.omc/project-memory.json`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 우아한테크코스 문서를 관리하는 저장소. 핵심 구조 신호는 README.md, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
