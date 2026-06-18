# memvid/memvid Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Memory layer for AI Agents. Replace complex RAG pipelines with a serverless, single-file memory layer. Give your agents instant retrieval and long-term memory.

## 요약

- 조사 단위: `sources/memvid__memvid` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 217 files, 30 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=src/api_embed.rs, src/graph_search.rs, src/text_embed.rs이고, 의존성 단서는 openai, anthropic, next, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | memvid/memvid |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Rust |
| Stars | 15665 |
| Forks | 1352 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/memvid__memvid](../../../../sources/memvid__memvid) |
| Existing report | [reports/llm-wiki/repositories/memvid__memvid.md](../../../llm-wiki/repositories/memvid__memvid.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 217 / 30 |
| Max observed depth | 4 |
| Top directories | .github, benches, data, docker, docs, examples, install, src, tests |
| Top extensions | .rs: 158, .md: 29, (none): 9, .yml: 5, .bytes: 2, .js: 2, .sh: 2, .toml: 2, .txt: 2, .dev: 1, .disable: 1, .lock: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 17 |
| docs | documentation surface | 16 |
| tests | validation surface | 13 |
| examples/text_embed_cache_bench.rs | examples workspace | 2 |
| .github | ci surface | 1 |
| benches | validation surface | 1 |
| data | top-level component | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |
| examples/openai_embedding.rs | examples workspace | 1 |
| examples/simd_benchmark.rs | examples workspace | 1 |
| examples/test_implicit_or_bug.rs | examples workspace | 1 |
| examples/test_whisper.rs | examples workspace | 1 |
| examples/text_embedding.rs | examples workspace | 1 |
| install | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install | make install |
| utility | Makefile | download-models | make download-models |
| quality | Makefile | check | make check |
| build | Makefile | build | make build |
| build | Makefile | build-release | make build-release |
| build | Makefile | build-verbose | make build-verbose |
| build | Makefile | build-release-verbose | make build-release-verbose |
| build | Makefile | build-all-features | make build-all-features |
| test | Makefile | test | make test |
| test | Makefile | test-verbose | make test-verbose |
| test | Makefile | test-release | make test-release |
| test | Makefile | test-doc | make test-doc |
| test | Makefile | test-all-targets | make test-all-targets |
| test | Makefile | test-no-fail-fast | make test-no-fail-fast |
| test | Makefile | test-integration | make test-integration |
| test | Makefile | test-unit | make test-unit |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | fmt-check | make fmt-check |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | transformers |
| webRuntime | next |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [src/api_embed.rs](../../../../sources/memvid__memvid/src/api_embed.rs) | retrieval signal |
| retrieval | [src/graph_search.rs](../../../../sources/memvid__memvid/src/graph_search.rs) | retrieval signal |
| retrieval | [src/text_embed.rs](../../../../sources/memvid__memvid/src/text_embed.rs) | retrieval signal |
| retrieval | [src/types/embedding_identity.rs](../../../../sources/memvid__memvid/src/types/embedding_identity.rs) | retrieval signal |
| docs | [README.md](../../../../sources/memvid__memvid/README.md) | docs signal |
| docs | [install/README.md](../../../../sources/memvid__memvid/install/README.md) | docs signal |
| docs | [docs/i18n/CONTRIBUTING_TRANSLATIONS.md](../../../../sources/memvid__memvid/docs/i18n/CONTRIBUTING_TRANSLATIONS.md) | docs signal |
| docs | [docs/i18n/README.ar.md](../../../../sources/memvid__memvid/docs/i18n/README.ar.md) | docs signal |
| eval | [MV2_SPEC.md](../../../../sources/memvid__memvid/MV2_SPEC.md) | eval signal |
| eval | [tests/crash_recovery.rs](../../../../sources/memvid__memvid/tests/crash_recovery.rs) | eval signal |
| eval | [tests/doctor_recovery.rs](../../../../sources/memvid__memvid/tests/doctor_recovery.rs) | eval signal |
| eval | [tests/encryption_capsule.rs](../../../../sources/memvid__memvid/tests/encryption_capsule.rs) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 3 | [src/types/memory_card.rs](../../../../sources/memvid__memvid/src/types/memory_card.rs)<br>[src/memvid/memory.rs](../../../../sources/memvid__memvid/src/memvid/memory.rs)<br>[src/memvid/planner.rs](../../../../sources/memvid__memvid/src/memvid/planner.rs) |
| mcp | 0 | not obvious |
| retrieval | 13 | [src/api_embed.rs](../../../../sources/memvid__memvid/src/api_embed.rs)<br>[src/graph_search.rs](../../../../sources/memvid__memvid/src/graph_search.rs)<br>[src/text_embed.rs](../../../../sources/memvid__memvid/src/text_embed.rs)<br>[src/types/embedding_identity.rs](../../../../sources/memvid__memvid/src/types/embedding_identity.rs)<br>[src/types/embedding.rs](../../../../sources/memvid__memvid/src/types/embedding.rs)<br>[src/types/graph_query.rs](../../../../sources/memvid__memvid/src/types/graph_query.rs)<br>[src/types/memory_card.rs](../../../../sources/memvid__memvid/src/types/memory_card.rs)<br>[src/memvid/memory.rs](../../../../sources/memvid__memvid/src/memvid/memory.rs) |
| spec | 1 | [MV2_SPEC.md](../../../../sources/memvid__memvid/MV2_SPEC.md) |
| eval | 21 | [MV2_SPEC.md](../../../../sources/memvid__memvid/MV2_SPEC.md)<br>[tests/crash_recovery.rs](../../../../sources/memvid__memvid/tests/crash_recovery.rs)<br>[tests/doctor_recovery.rs](../../../../sources/memvid__memvid/tests/doctor_recovery.rs)<br>[tests/encryption_capsule.rs](../../../../sources/memvid__memvid/tests/encryption_capsule.rs)<br>[tests/lifecycle.rs](../../../../sources/memvid__memvid/tests/lifecycle.rs)<br>[tests/model_consistency.rs](../../../../sources/memvid__memvid/tests/model_consistency.rs)<br>[tests/mutation.rs](../../../../sources/memvid__memvid/tests/mutation.rs)<br>[tests/replay_integrity.rs](../../../../sources/memvid__memvid/tests/replay_integrity.rs) |
| security | 3 | [SECURITY.md](../../../../sources/memvid__memvid/SECURITY.md)<br>[src/types/audit.rs](../../../../sources/memvid__memvid/src/types/audit.rs)<br>[src/memvid/audit.rs](../../../../sources/memvid__memvid/src/memvid/audit.rs) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/memvid__memvid/.github/workflows/ci.yml)<br>[.github/workflows/docker-release.yml](../../../../sources/memvid__memvid/.github/workflows/docker-release.yml) |
| container | 5 | [docker/core/docker-compose.yml](../../../../sources/memvid__memvid/docker/core/docker-compose.yml)<br>[docker/core/Dockerfile](../../../../sources/memvid__memvid/docker/core/Dockerfile)<br>[docker/core/Dockerfile.dev](../../../../sources/memvid__memvid/docker/core/Dockerfile.dev)<br>[docker/core/Dockerfile.test](../../../../sources/memvid__memvid/docker/core/Dockerfile.test)<br>[docker/cli/Dockerfile](../../../../sources/memvid__memvid/docker/cli/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/memvid__memvid/CLAUDE.md) |
| docs | 20 | [README.md](../../../../sources/memvid__memvid/README.md)<br>[install/README.md](../../../../sources/memvid__memvid/install/README.md)<br>[docs/i18n/CONTRIBUTING_TRANSLATIONS.md](../../../../sources/memvid__memvid/docs/i18n/CONTRIBUTING_TRANSLATIONS.md)<br>[docs/i18n/README.ar.md](../../../../sources/memvid__memvid/docs/i18n/README.ar.md)<br>[docs/i18n/README.bn.md](../../../../sources/memvid__memvid/docs/i18n/README.bn.md)<br>[docs/i18n/README.cs.md](../../../../sources/memvid__memvid/docs/i18n/README.cs.md)<br>[docs/i18n/README.es.md](../../../../sources/memvid__memvid/docs/i18n/README.es.md)<br>[docs/i18n/README.fr.md](../../../../sources/memvid__memvid/docs/i18n/README.fr.md) |
| config | 3 | [Cargo.lock](../../../../sources/memvid__memvid/Cargo.lock)<br>[Cargo.toml](../../../../sources/memvid__memvid/Cargo.toml)<br>[Makefile](../../../../sources/memvid__memvid/Makefile) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 21 | [MV2_SPEC.md](../../../../sources/memvid__memvid/MV2_SPEC.md)<br>[tests/crash_recovery.rs](../../../../sources/memvid__memvid/tests/crash_recovery.rs)<br>[tests/doctor_recovery.rs](../../../../sources/memvid__memvid/tests/doctor_recovery.rs)<br>[tests/encryption_capsule.rs](../../../../sources/memvid__memvid/tests/encryption_capsule.rs)<br>[tests/lifecycle.rs](../../../../sources/memvid__memvid/tests/lifecycle.rs)<br>[tests/model_consistency.rs](../../../../sources/memvid__memvid/tests/model_consistency.rs) |
| CI workflows | 2 | [.github/workflows/ci.yml](../../../../sources/memvid__memvid/.github/workflows/ci.yml)<br>[.github/workflows/docker-release.yml](../../../../sources/memvid__memvid/.github/workflows/docker-release.yml) |
| Containers / deploy | 5 | [docker/core/docker-compose.yml](../../../../sources/memvid__memvid/docker/core/docker-compose.yml)<br>[docker/core/Dockerfile](../../../../sources/memvid__memvid/docker/core/Dockerfile)<br>[docker/core/Dockerfile.dev](../../../../sources/memvid__memvid/docker/core/Dockerfile.dev)<br>[docker/core/Dockerfile.test](../../../../sources/memvid__memvid/docker/core/Dockerfile.test)<br>[docker/cli/Dockerfile](../../../../sources/memvid__memvid/docker/cli/Dockerfile) |
| Security / policy | 3 | [SECURITY.md](../../../../sources/memvid__memvid/SECURITY.md)<br>[src/types/audit.rs](../../../../sources/memvid__memvid/src/types/audit.rs)<br>[src/memvid/audit.rs](../../../../sources/memvid__memvid/src/memvid/audit.rs) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/memvid__memvid/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/api_embed.rs`, `src/graph_search.rs`, `src/text_embed.rs`.
2. Map agent/tool runtime through: `src/types/memory_card.rs`, `src/memvid/memory.rs`, `src/memvid/planner.rs`.
3. Inspect retrieval/memory/indexing through: `src/api_embed.rs`, `src/graph_search.rs`, `src/text_embed.rs`.
4. Verify behavior through test/eval files: `MV2_SPEC.md`, `tests/crash_recovery.rs`, `tests/doctor_recovery.rs`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Memory layer for AI Agents. Replace complex RAG pipelines with a serverless, single file memory layer. Give your agents . 핵심 구조 신호는 Rust, Cargo.toml, Makefile, README.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
