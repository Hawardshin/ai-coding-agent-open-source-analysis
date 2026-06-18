# JRs-Master/firebat Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

firebat

## 요약

- 조사 단위: `sources/JRs-Master__firebat` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 631 files, 226 directories, depth score 126, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=system/services/mcp-server-llm/config.json, system/services/mcp-server-llm/lang/en.json, system/services/mcp-server-llm/lang/ko.json이고, 의존성 단서는 next, react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | JRs-Master/firebat |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Rust |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/JRs-Master__firebat](../../../../sources/JRs-Master__firebat) |
| Existing report | [reports/korea-trending/repositories/JRs-Master__firebat.md](../../../korea-trending/repositories/JRs-Master__firebat.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 631 / 226 |
| Max observed depth | 7 |
| Top directories | .cargo, .github, app, caddy, core, docs, infra, language, lib, proto, scripts, system, types |
| Top extensions | .rs: 216, .ts: 193, .json: 82, .tsx: 77, .mjs: 22, .md: 13, (none): 6, .py: 4, .toml: 4, .yml: 3, .sh: 2, .yaml: 2 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| lib | source boundary | 16 |
| docs | documentation surface | 7 |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| caddy | top-level component | 1 |
| core | top-level component | 1 |
| infra | top-level component | 1 |
| language | top-level component | 1 |
| proto | top-level component | 1 |
| scripts | top-level component | 1 |
| system | top-level component | 1 |
| types | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | next dev |
| build | package.json | build | next build |
| serve-dev | package.json | start | next start |
| quality | package.json | lint | next lint |
| quality | package.json | typecheck | tsc --noEmit |
| utility | package.json | mcp | firebat-core --mcp-stdio |
| utility | package.json | gen:proto | buf generate && node scripts/gen-api-client.mjs && node scripts/gen-vault-keys.mjs |
| utility | package.json | gen:api | node scripts/gen-api-client.mjs |
| utility | package.json | gen:vault | node scripts/gen-vault-keys.mjs |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next, react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [system/services/mcp-server-llm/config.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-llm/config.json) | mcp signal |
| mcp | [system/services/mcp-server-llm/lang/en.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-llm/lang/en.json) | mcp signal |
| mcp | [system/services/mcp-server-llm/lang/ko.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-llm/lang/ko.json) | mcp signal |
| mcp | [system/services/mcp-server-app/config.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-app/config.json) | mcp signal |
| agentRuntime | [system/prompts/tool_system.md](../../../../sources/JRs-Master__firebat/system/prompts/tool_system.md) | agentRuntime signal |
| agentRuntime | [lib/hooks/use-polling.ts](../../../../sources/JRs-Master__firebat/lib/hooks/use-polling.ts) | agentRuntime signal |
| agentRuntime | [lib/api-gen/memory.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/memory.ts) | agentRuntime signal |
| agentRuntime | [lib/api-gen/skill.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/skill.ts) | agentRuntime signal |
| entrypoints | [system/modules/yfinance/main.py](../../../../sources/JRs-Master__firebat/system/modules/yfinance/main.py) | entrypoints signal |
| entrypoints | [system/modules/dart/main.py](../../../../sources/JRs-Master__firebat/system/modules/dart/main.py) | entrypoints signal |
| entrypoints | [system/modules/browser-scrape/main.py](../../../../sources/JRs-Master__firebat/system/modules/browser-scrape/main.py) | entrypoints signal |
| entrypoints | [infra/src/main.rs](../../../../sources/JRs-Master__firebat/infra/src/main.rs) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [system/modules/yfinance/main.py](../../../../sources/JRs-Master__firebat/system/modules/yfinance/main.py)<br>[system/modules/dart/main.py](../../../../sources/JRs-Master__firebat/system/modules/dart/main.py)<br>[system/modules/browser-scrape/main.py](../../../../sources/JRs-Master__firebat/system/modules/browser-scrape/main.py)<br>[infra/src/main.rs](../../../../sources/JRs-Master__firebat/infra/src/main.rs) |
| agentRuntime | 35 | [system/prompts/tool_system.md](../../../../sources/JRs-Master__firebat/system/prompts/tool_system.md)<br>[lib/hooks/use-polling.ts](../../../../sources/JRs-Master__firebat/lib/hooks/use-polling.ts)<br>[lib/api-gen/memory.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/memory.ts)<br>[lib/api-gen/skill.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/skill.ts)<br>[lib/api-gen/tool.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/tool.ts)<br>[infra/tests/tool_registry_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/tool_registry_test.rs)<br>[infra/src/adapters/memory.rs](../../../../sources/JRs-Master__firebat/infra/src/adapters/memory.rs)<br>[infra/src/adapters/sandbox.rs](../../../../sources/JRs-Master__firebat/infra/src/adapters/sandbox.rs) |
| mcp | 23 | [system/services/mcp-server-llm/config.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-llm/config.json)<br>[system/services/mcp-server-llm/lang/en.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-llm/lang/en.json)<br>[system/services/mcp-server-llm/lang/ko.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-llm/lang/ko.json)<br>[system/services/mcp-server-app/config.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-app/config.json)<br>[system/services/mcp-server-app/lang/en.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-app/lang/en.json)<br>[system/services/mcp-server-app/lang/ko.json](../../../../sources/JRs-Master__firebat/system/services/mcp-server-app/lang/ko.json)<br>[lib/api-gen/mcp.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/mcp.ts)<br>[infra/tests/mcp_manager_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/mcp_manager_test.rs) |
| retrieval | 31 | [system/modules/upbit/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/upbit/index.mjs)<br>[system/modules/toss-invest/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/toss-invest/index.mjs)<br>[system/modules/telegram/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/telegram/index.mjs)<br>[system/modules/notes/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/notes/index.mjs)<br>[system/modules/naver-search/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/naver-search/index.mjs)<br>[system/modules/naver-ads/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/naver-ads/index.mjs)<br>[system/modules/molit-realestate/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/molit-realestate/index.mjs)<br>[system/modules/law-search/index.mjs](../../../../sources/JRs-Master__firebat/system/modules/law-search/index.mjs) |
| spec | 2 | [lib/design-tokens.ts](../../../../sources/JRs-Master__firebat/lib/design-tokens.ts)<br>[lib/spec-to-rss-html.ts](../../../../sources/JRs-Master__firebat/lib/spec-to-rss-html.ts) |
| eval | 49 | [lib/spec-to-rss-html.ts](../../../../sources/JRs-Master__firebat/lib/spec-to-rss-html.ts)<br>[infra/tests/ai_code_assist_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_code_assist_test.rs)<br>[infra/tests/ai_component_search_index_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_component_search_index_test.rs)<br>[infra/tests/ai_history_resolver_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_history_resolver_test.rs)<br>[infra/tests/ai_manager_public_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_manager_public_test.rs)<br>[infra/tests/ai_prompt_builder_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_prompt_builder_test.rs)<br>[infra/tests/ai_retrieval_engine_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_retrieval_engine_test.rs)<br>[infra/tests/ai_system_context_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_system_context_test.rs) |
| security | 23 | [lib/auth-guard.ts](../../../../sources/JRs-Master__firebat/lib/auth-guard.ts)<br>[lib/oauth-providers.ts](../../../../sources/JRs-Master__firebat/lib/oauth-providers.ts)<br>[lib/api-gen/auth.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/auth.ts)<br>[lib/api-gen/secret.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/secret.ts)<br>[infra/tests/auth_manager_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/auth_manager_test.rs)<br>[infra/tests/secret_manager_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/secret_manager_test.rs)<br>[infra/tests/svc_auth_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/svc_auth_test.rs)<br>[infra/tests/svc_secret_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/svc_secret_test.rs) |
| ci | 3 | [.github/workflows/ci-frontend.yml](../../../../sources/JRs-Master__firebat/.github/workflows/ci-frontend.yml)<br>[.github/workflows/ci-proto.yml](../../../../sources/JRs-Master__firebat/.github/workflows/ci-proto.yml)<br>[.github/workflows/ci-rust.yml](../../../../sources/JRs-Master__firebat/.github/workflows/ci-rust.yml) |
| container | 1 | [infra/Dockerfile](../../../../sources/JRs-Master__firebat/infra/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 7 | [README.md](../../../../sources/JRs-Master__firebat/README.md)<br>[docs/CORE_BIBLE.md](../../../../sources/JRs-Master__firebat/docs/CORE_BIBLE.md)<br>[docs/FIREBAT_BIBLE.md](../../../../sources/JRs-Master__firebat/docs/FIREBAT_BIBLE.md)<br>[docs/INFRA_BIBLE.md](../../../../sources/JRs-Master__firebat/docs/INFRA_BIBLE.md)<br>[docs/IO_SCHEMA_BIBLE.md](../../../../sources/JRs-Master__firebat/docs/IO_SCHEMA_BIBLE.md)<br>[docs/MODULE_BIBLE.md](../../../../sources/JRs-Master__firebat/docs/MODULE_BIBLE.md)<br>[docs/PAGESPEC_BIBLE.md](../../../../sources/JRs-Master__firebat/docs/PAGESPEC_BIBLE.md) |
| config | 6 | [Cargo.lock](../../../../sources/JRs-Master__firebat/Cargo.lock)<br>[Cargo.toml](../../../../sources/JRs-Master__firebat/Cargo.toml)<br>[package.json](../../../../sources/JRs-Master__firebat/package.json)<br>[tsconfig.json](../../../../sources/JRs-Master__firebat/tsconfig.json)<br>[infra/Cargo.toml](../../../../sources/JRs-Master__firebat/infra/Cargo.toml)<br>[core/Cargo.toml](../../../../sources/JRs-Master__firebat/core/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 49 | [lib/spec-to-rss-html.ts](../../../../sources/JRs-Master__firebat/lib/spec-to-rss-html.ts)<br>[infra/tests/ai_code_assist_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_code_assist_test.rs)<br>[infra/tests/ai_component_search_index_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_component_search_index_test.rs)<br>[infra/tests/ai_history_resolver_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_history_resolver_test.rs)<br>[infra/tests/ai_manager_public_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_manager_public_test.rs)<br>[infra/tests/ai_prompt_builder_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/ai_prompt_builder_test.rs) |
| CI workflows | 3 | [.github/workflows/ci-frontend.yml](../../../../sources/JRs-Master__firebat/.github/workflows/ci-frontend.yml)<br>[.github/workflows/ci-proto.yml](../../../../sources/JRs-Master__firebat/.github/workflows/ci-proto.yml)<br>[.github/workflows/ci-rust.yml](../../../../sources/JRs-Master__firebat/.github/workflows/ci-rust.yml) |
| Containers / deploy | 1 | [infra/Dockerfile](../../../../sources/JRs-Master__firebat/infra/Dockerfile) |
| Security / policy | 23 | [lib/auth-guard.ts](../../../../sources/JRs-Master__firebat/lib/auth-guard.ts)<br>[lib/oauth-providers.ts](../../../../sources/JRs-Master__firebat/lib/oauth-providers.ts)<br>[lib/api-gen/auth.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/auth.ts)<br>[lib/api-gen/secret.ts](../../../../sources/JRs-Master__firebat/lib/api-gen/secret.ts)<br>[infra/tests/auth_manager_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/auth_manager_test.rs)<br>[infra/tests/secret_manager_test.rs](../../../../sources/JRs-Master__firebat/infra/tests/secret_manager_test.rs) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `system/services/mcp-server-llm/config.json`, `system/services/mcp-server-llm/lang/en.json`, `system/services/mcp-server-llm/lang/ko.json`.
2. Trace execution through entrypoints: `system/modules/yfinance/main.py`, `system/modules/dart/main.py`, `system/modules/browser-scrape/main.py`.
3. Map agent/tool runtime through: `system/prompts/tool_system.md`, `lib/hooks/use-polling.ts`, `lib/api-gen/memory.ts`.
4. Inspect retrieval/memory/indexing through: `system/modules/upbit/index.mjs`, `system/modules/toss-invest/index.mjs`, `system/modules/telegram/index.mjs`.
5. Verify behavior through test/eval files: `lib/spec-to-rss-html.ts`, `infra/tests/ai_code_assist_test.rs`, `infra/tests/ai_component_search_index_test.rs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 firebat. 핵심 구조 신호는 Rust, package.json, Cargo.toml, README.md, LICENSE, next이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
