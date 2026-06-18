# TencentCloud/TencentDB-Agent-Memory Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

TencentDB Agent Memory delivers fully local long-term memory for AI Agents via a 4-tier progressive pipeline, with zero external API dependencies.

## 요약

- 조사 단위: `sources/TencentCloud__TencentDB-Agent-Memory` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 169 files, 43 directories, depth score 109, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=index.ts, src/utils/memory-cleaner.ts, src/offload/index.ts이고, 의존성 단서는 openai, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | TencentCloud/TencentDB-Agent-Memory |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | TypeScript |
| Stars | 5871 |
| Forks | 506 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/TencentCloud__TencentDB-Agent-Memory](../../../../sources/TencentCloud__TencentDB-Agent-Memory) |
| Existing report | [reports/global-trending/repositories/TencentCloud__TencentDB-Agent-Memory.md](../../../global-trending/repositories/TencentCloud__TencentDB-Agent-Memory.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 169 / 43 |
| Max observed depth | 5 |
| Top directories | .github, assets, bin, docker, hermes-plugin, scripts, src |
| Top extensions | .ts: 115, .md: 15, .png: 8, .sh: 7, .py: 6, .json: 5, .yml: 4, .mjs: 3, (none): 3, .hermes: 1, .jpg: 1, .yaml: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 32 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| docker | documentation surface | 1 |
| hermes-plugin | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | npm run build:plugin && npm run build:scripts |
| build | package.json | build:plugin | tsdown |
| build | package.json | build:scripts | npm run build:migrate-sqlite-to-vdb && npm run build:export-tencent-vdb && npm run build:read-local-memory |
| build | package.json | prepack | npm run build |
| build | package.json | build:migrate-sqlite-to-vdb | tsc -p scripts/migrate-sqlite-to-tcvdb/tsconfig.json --noEmitOnError false |
| utility | package.json | migrate-sqlite-to-tcvdb | node ./bin/migrate-sqlite-to-tcvdb.mjs |
| build | package.json | build:export-tencent-vdb | tsc --project scripts/export-tencent-vdb/tsconfig.json |
| utility | package.json | export-tencent-vdb | node ./bin/export-tencent-vdb.mjs |
| build | package.json | build:read-local-memory | tsc --project scripts/read-local-memory/tsconfig.json |
| utility | package.json | read-local-memory | node ./bin/read-local-memory.mjs |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| serve-dev | package.json | postinstall | bash scripts/openclaw-after-tool-call-messages.patch.sh 2>/dev/null \|\| true |
| entrypoint | package.json bin | migrate-sqlite-to-tcvdb.mjs | ./bin/migrate-sqlite-to-tcvdb.mjs |
| entrypoint | package.json bin | export-tencent-vdb.mjs | ./bin/export-tencent-vdb.mjs |
| entrypoint | package.json bin | read-local-memory.mjs | ./bin/read-local-memory.mjs |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/index.ts) | retrieval signal |
| retrieval | [src/utils/memory-cleaner.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/memory-cleaner.ts) | retrieval signal |
| retrieval | [src/offload/index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/index.ts) | retrieval signal |
| retrieval | [src/offload/local-llm/index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/local-llm/index.ts) | retrieval signal |
| entrypoints | [src/gateway/server.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/gateway/server.ts) | entrypoints signal |
| entrypoints | [bin/export-tencent-vdb.mjs](../../../../sources/TencentCloud__TencentDB-Agent-Memory/bin/export-tencent-vdb.mjs) | entrypoints signal |
| entrypoints | [bin/migrate-sqlite-to-tcvdb.mjs](../../../../sources/TencentCloud__TencentDB-Agent-Memory/bin/migrate-sqlite-to-tcvdb.mjs) | entrypoints signal |
| entrypoints | [bin/read-local-memory.mjs](../../../../sources/TencentCloud__TencentDB-Agent-Memory/bin/read-local-memory.mjs) | entrypoints signal |
| docs | [README_CN.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/README_CN.md) | docs signal |
| docs | [README.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/README.md) | docs signal |
| docs | [src/cli/README.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/cli/README.md) | docs signal |
| docs | [scripts/README.memory-tencentdb-ctl.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/scripts/README.memory-tencentdb-ctl.md) | docs signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [src/gateway/server.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/gateway/server.ts)<br>[bin/export-tencent-vdb.mjs](../../../../sources/TencentCloud__TencentDB-Agent-Memory/bin/export-tencent-vdb.mjs)<br>[bin/migrate-sqlite-to-tcvdb.mjs](../../../../sources/TencentCloud__TencentDB-Agent-Memory/bin/migrate-sqlite-to-tcvdb.mjs)<br>[bin/read-local-memory.mjs](../../../../sources/TencentCloud__TencentDB-Agent-Memory/bin/read-local-memory.mjs) |
| agentRuntime | 25 | [SKILL-DIAGNOSTIC-EXPORT.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/SKILL-DIAGNOSTIC-EXPORT.md)<br>[SKILL-MIGRATION.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/SKILL-MIGRATION.md)<br>[SKILL.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/SKILL.md)<br>[src/utils/memory-cleaner.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/memory-cleaner.ts)<br>[src/offload/context-token-tracker.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/context-token-tracker.ts)<br>[src/offload/hooks/after-tool-call.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/hooks/after-tool-call.ts)<br>[src/offload/hooks/before-agent-start.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/hooks/before-agent-start.ts)<br>[src/offload/hooks/before-prompt-build.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/hooks/before-prompt-build.ts) |
| mcp | 0 | not obvious |
| retrieval | 28 | [index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/index.ts)<br>[src/utils/memory-cleaner.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/memory-cleaner.ts)<br>[src/offload/index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/index.ts)<br>[src/offload/local-llm/index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/local-llm/index.ts)<br>[src/core/index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/core/index.ts)<br>[src/core/tools/memory-search.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/core/tools/memory-search.ts)<br>[src/core/store/embedding.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/core/store/embedding.ts)<br>[src/core/scene/scene-index.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/core/scene/scene-index.ts) |
| spec | 0 | not obvious |
| eval | 7 | [src/utils/sanitize.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/sanitize.test.ts)<br>[src/utils/time.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/time.test.ts)<br>[src/offload/auth-profile-key.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/auth-profile-key.test.ts)<br>[src/offload/benchmark-token-estimate.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/benchmark-token-estimate.ts)<br>[hermes-plugin/memory/memory_tencentdb/tests/__init__.py](../../../../sources/TencentCloud__TencentDB-Agent-Memory/hermes-plugin/memory/memory_tencentdb/tests/__init__.py)<br>[hermes-plugin/memory/memory_tencentdb/tests/test_gateway_shutdown_leak.py](../../../../sources/TencentCloud__TencentDB-Agent-Memory/hermes-plugin/memory/memory_tencentdb/tests/test_gateway_shutdown_leak.py)<br>[hermes-plugin/memory/memory_tencentdb/tests/test_memory_tencentdb_recovery.py](../../../../sources/TencentCloud__TencentDB-Agent-Memory/hermes-plugin/memory/memory_tencentdb/tests/test_memory_tencentdb_recovery.py) |
| security | 3 | [src/utils/ensure-hook-policy.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/ensure-hook-policy.ts)<br>[src/offload/auth-profile-key.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/auth-profile-key.test.ts)<br>[src/offload/auth-profile-key.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/auth-profile-key.ts) |
| ci | 1 | [.github/workflows/pr-ci.yml](../../../../sources/TencentCloud__TencentDB-Agent-Memory/.github/workflows/pr-ci.yml) |
| container | 1 | [docker/opensource/Dockerfile.hermes](../../../../sources/TencentCloud__TencentDB-Agent-Memory/docker/opensource/Dockerfile.hermes) |
| instruction | 0 | not obvious |
| docs | 7 | [README_CN.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/README_CN.md)<br>[README.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/README.md)<br>[src/cli/README.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/cli/README.md)<br>[scripts/README.memory-tencentdb-ctl.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/scripts/README.memory-tencentdb-ctl.md)<br>[scripts/migrate-sqlite-to-tcvdb/README.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/scripts/migrate-sqlite-to-tcvdb/README.md)<br>[hermes-plugin/memory/memory_tencentdb/README.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/hermes-plugin/memory/memory_tencentdb/README.md)<br>[docker/opensource/README-hermes.md](../../../../sources/TencentCloud__TencentDB-Agent-Memory/docker/opensource/README-hermes.md) |
| config | 4 | [package.json](../../../../sources/TencentCloud__TencentDB-Agent-Memory/package.json)<br>[scripts/read-local-memory/tsconfig.json](../../../../sources/TencentCloud__TencentDB-Agent-Memory/scripts/read-local-memory/tsconfig.json)<br>[scripts/migrate-sqlite-to-tcvdb/tsconfig.json](../../../../sources/TencentCloud__TencentDB-Agent-Memory/scripts/migrate-sqlite-to-tcvdb/tsconfig.json)<br>[scripts/export-tencent-vdb/tsconfig.json](../../../../sources/TencentCloud__TencentDB-Agent-Memory/scripts/export-tencent-vdb/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 7 | [src/utils/sanitize.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/sanitize.test.ts)<br>[src/utils/time.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/time.test.ts)<br>[src/offload/auth-profile-key.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/auth-profile-key.test.ts)<br>[src/offload/benchmark-token-estimate.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/benchmark-token-estimate.ts)<br>[hermes-plugin/memory/memory_tencentdb/tests/__init__.py](../../../../sources/TencentCloud__TencentDB-Agent-Memory/hermes-plugin/memory/memory_tencentdb/tests/__init__.py)<br>[hermes-plugin/memory/memory_tencentdb/tests/test_gateway_shutdown_leak.py](../../../../sources/TencentCloud__TencentDB-Agent-Memory/hermes-plugin/memory/memory_tencentdb/tests/test_gateway_shutdown_leak.py) |
| CI workflows | 1 | [.github/workflows/pr-ci.yml](../../../../sources/TencentCloud__TencentDB-Agent-Memory/.github/workflows/pr-ci.yml) |
| Containers / deploy | 1 | [docker/opensource/Dockerfile.hermes](../../../../sources/TencentCloud__TencentDB-Agent-Memory/docker/opensource/Dockerfile.hermes) |
| Security / policy | 3 | [src/utils/ensure-hook-policy.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/utils/ensure-hook-policy.ts)<br>[src/offload/auth-profile-key.test.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/auth-profile-key.test.ts)<br>[src/offload/auth-profile-key.ts](../../../../sources/TencentCloud__TencentDB-Agent-Memory/src/offload/auth-profile-key.ts) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `index.ts`, `src/utils/memory-cleaner.ts`, `src/offload/index.ts`.
2. Trace execution through entrypoints: `src/gateway/server.ts`, `bin/export-tencent-vdb.mjs`, `bin/migrate-sqlite-to-tcvdb.mjs`.
3. Map agent/tool runtime through: `SKILL-DIAGNOSTIC-EXPORT.md`, `SKILL-MIGRATION.md`, `SKILL.md`.
4. Inspect retrieval/memory/indexing through: `index.ts`, `src/utils/memory-cleaner.ts`, `src/offload/index.ts`.
5. Verify behavior through test/eval files: `src/utils/sanitize.test.ts`, `src/utils/time.test.ts`, `src/offload/auth-profile-key.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 TencentDB Agent Memory delivers fully local long term memory for AI Agents via a 4 tier progressive pipeline, with zero . 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, openai, ci이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
