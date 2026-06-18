# rage-rb/rage Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Fiber-based Ruby web framework combining Rails ergonomics with a unified runtime

## 요약

- 조사 단위: `sources/rage-rb__rage` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 345 files, 90 directories, depth score 103, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=lib/rage/openapi/index.html.erb이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | rage-rb/rage |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Ruby |
| Stars | 1388 |
| Forks | 42 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/rage-rb__rage](../../../../sources/rage-rb__rage) |
| Existing report | [reports/global-trending/repositories/rage-rb__rage.md](../../../global-trending/repositories/rage-rb__rage.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 345 / 90 |
| Max observed depth | 8 |
| Top directories | .github, bin, exe, gemfiles, lib, spec |
| Top extensions | .rb: 291, (none): 14, .yml: 13, .md: 6, .gemfile: 5, .keep: 5, .txt: 5, .ru: 3, .erb: 2, .gemspec: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| lib | source boundary | 6 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| exe | top-level component | 1 |
| gemfiles | top-level component | 1 |
| spec | top-level component | 1 |


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
| retrieval | [lib/rage/openapi/index.html.erb](../../../../sources/rage-rb__rage/lib/rage/openapi/index.html.erb) | retrieval signal |
| entrypoints | [bin/console](../../../../sources/rage-rb__rage/bin/console) | entrypoints signal |
| entrypoints | [bin/setup](../../../../sources/rage-rb__rage/bin/setup) | entrypoints signal |
| docs | [README.md](../../../../sources/rage-rb__rage/README.md) | docs signal |
| docs | [lib/rage/router/README.md](../../../../sources/rage-rb__rage/lib/rage/router/README.md) | docs signal |
| eval | [spec/body_finalizer_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/body_finalizer_middleware_spec.rb) | eval signal |
| eval | [spec/code_loader_spec.rb](../../../../sources/rage-rb__rage/spec/code_loader_spec.rb) | eval signal |
| eval | [spec/configuration_spec.rb](../../../../sources/rage-rb__rage/spec/configuration_spec.rb) | eval signal |
| eval | [spec/cors_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/cors_middleware_spec.rb) | eval signal |
| ci | [.github/workflows/changelog.yml](../../../../sources/rage-rb__rage/.github/workflows/changelog.yml) | ci support |
| ci | [.github/workflows/docs.yml](../../../../sources/rage-rb__rage/.github/workflows/docs.yml) | ci support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [bin/console](../../../../sources/rage-rb__rage/bin/console)<br>[bin/setup](../../../../sources/rage-rb__rage/bin/setup) |
| agentRuntime | 7 | [spec/rage/hooks_spec.rb](../../../../sources/rage-rb__rage/spec/rage/hooks_spec.rb)<br>[spec/rage/cli/skills_spec.rb](../../../../sources/rage-rb__rage/spec/rage/cli/skills_spec.rb)<br>[spec/events/context_spec.rb](../../../../sources/rage-rb__rage/spec/events/context_spec.rb)<br>[spec/deferred/context_spec.rb](../../../../sources/rage-rb__rage/spec/deferred/context_spec.rb)<br>[lib/rage/hooks.rb](../../../../sources/rage-rb__rage/lib/rage/hooks.rb)<br>[lib/rage/deferred/context.rb](../../../../sources/rage-rb__rage/lib/rage/deferred/context.rb)<br>[lib/rage/cli/skills.rb](../../../../sources/rage-rb__rage/lib/rage/cli/skills.rb) |
| mcp | 0 | not obvious |
| retrieval | 1 | [lib/rage/openapi/index.html.erb](../../../../sources/rage-rb__rage/lib/rage/openapi/index.html.erb) |
| spec | 187 | [ARCHITECTURE.md](../../../../sources/rage-rb__rage/ARCHITECTURE.md)<br>[spec/body_finalizer_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/body_finalizer_middleware_spec.rb)<br>[spec/code_loader_spec.rb](../../../../sources/rage-rb__rage/spec/code_loader_spec.rb)<br>[spec/configuration_spec.rb](../../../../sources/rage-rb__rage/spec/configuration_spec.rb)<br>[spec/cors_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/cors_middleware_spec.rb)<br>[spec/env_spec.rb](../../../../sources/rage-rb__rage/spec/env_spec.rb)<br>[spec/errors_spec.rb](../../../../sources/rage-rb__rage/spec/errors_spec.rb)<br>[spec/fiber_scheduler_spec.rb](../../../../sources/rage-rb__rage/spec/fiber_scheduler_spec.rb) |
| eval | 187 | [spec/body_finalizer_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/body_finalizer_middleware_spec.rb)<br>[spec/code_loader_spec.rb](../../../../sources/rage-rb__rage/spec/code_loader_spec.rb)<br>[spec/configuration_spec.rb](../../../../sources/rage-rb__rage/spec/configuration_spec.rb)<br>[spec/cors_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/cors_middleware_spec.rb)<br>[spec/env_spec.rb](../../../../sources/rage-rb__rage/spec/env_spec.rb)<br>[spec/errors_spec.rb](../../../../sources/rage-rb__rage/spec/errors_spec.rb)<br>[spec/fiber_scheduler_spec.rb](../../../../sources/rage-rb__rage/spec/fiber_scheduler_spec.rb)<br>[spec/fiber_spec.rb](../../../../sources/rage-rb__rage/spec/fiber_spec.rb) |
| security | 1 | [spec/openapi/builder/auth_spec.rb](../../../../sources/rage-rb__rage/spec/openapi/builder/auth_spec.rb) |
| ci | 5 | [.github/workflows/changelog.yml](../../../../sources/rage-rb__rage/.github/workflows/changelog.yml)<br>[.github/workflows/docs.yml](../../../../sources/rage-rb__rage/.github/workflows/docs.yml)<br>[.github/workflows/ext.yml](../../../../sources/rage-rb__rage/.github/workflows/ext.yml)<br>[.github/workflows/main.yml](../../../../sources/rage-rb__rage/.github/workflows/main.yml)<br>[.github/workflows/release.yml](../../../../sources/rage-rb__rage/.github/workflows/release.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README.md](../../../../sources/rage-rb__rage/README.md)<br>[lib/rage/router/README.md](../../../../sources/rage-rb__rage/lib/rage/router/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 187 | [spec/body_finalizer_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/body_finalizer_middleware_spec.rb)<br>[spec/code_loader_spec.rb](../../../../sources/rage-rb__rage/spec/code_loader_spec.rb)<br>[spec/configuration_spec.rb](../../../../sources/rage-rb__rage/spec/configuration_spec.rb)<br>[spec/cors_middleware_spec.rb](../../../../sources/rage-rb__rage/spec/cors_middleware_spec.rb)<br>[spec/env_spec.rb](../../../../sources/rage-rb__rage/spec/env_spec.rb)<br>[spec/errors_spec.rb](../../../../sources/rage-rb__rage/spec/errors_spec.rb) |
| CI workflows | 5 | [.github/workflows/changelog.yml](../../../../sources/rage-rb__rage/.github/workflows/changelog.yml)<br>[.github/workflows/docs.yml](../../../../sources/rage-rb__rage/.github/workflows/docs.yml)<br>[.github/workflows/ext.yml](../../../../sources/rage-rb__rage/.github/workflows/ext.yml)<br>[.github/workflows/main.yml](../../../../sources/rage-rb__rage/.github/workflows/main.yml)<br>[.github/workflows/release.yml](../../../../sources/rage-rb__rage/.github/workflows/release.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [spec/openapi/builder/auth_spec.rb](../../../../sources/rage-rb__rage/spec/openapi/builder/auth_spec.rb) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `lib/rage/openapi/index.html.erb`, `bin/console`, `bin/setup`.
2. Trace execution through entrypoints: `bin/console`, `bin/setup`.
3. Map agent/tool runtime through: `spec/rage/hooks_spec.rb`, `spec/rage/cli/skills_spec.rb`, `spec/events/context_spec.rb`.
4. Inspect retrieval/memory/indexing through: `lib/rage/openapi/index.html.erb`.
5. Verify behavior through test/eval files: `spec/body_finalizer_middleware_spec.rb`, `spec/code_loader_spec.rb`, `spec/configuration_spec.rb`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Fiber based Ruby web framework combining Rails ergonomics with a unified runtime. 핵심 구조 신호는 Ruby, README.md, tests, ci, docs, spec-artifacts이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
