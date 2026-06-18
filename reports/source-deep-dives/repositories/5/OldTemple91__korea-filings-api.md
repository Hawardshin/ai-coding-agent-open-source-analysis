# OldTemple91/korea-filings-api Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AI-ready English summaries of Korean DART (전자공시) filings, paid per call in USDC via x402. Python SDK + MCP server included.

## 요약

- 조사 단위: `sources/OldTemple91__korea-filings-api` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 203 files, 58 directories, depth score 114, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp/.gitignore, mcp/Dockerfile, mcp/pyproject.toml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | OldTemple91/korea-filings-api |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Java |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/OldTemple91__korea-filings-api](../../../../sources/OldTemple91__korea-filings-api) |
| Existing report | [reports/korea-trending/repositories/OldTemple91__korea-filings-api.md](../../../korea-trending/repositories/OldTemple91__korea-filings-api.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 203 / 58 |
| Max observed depth | 9 |
| Top directories | .github, docs, gradle, landing, mcp, scripts, sdk, src, testclient |
| Top extensions | .java: 107, .md: 14, .sql: 14, .svg: 12, (none): 12, .py: 10, .ts: 9, .json: 4, .txt: 3, .yml: 3, .example: 2, .kts: 2 |
| Source patterns | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 35 |
| docs | documentation surface | 12 |
| .github | ci surface | 1 |
| gradle | top-level component | 1 |
| landing | top-level component | 1 |
| mcp | top-level component | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |
| testclient | validation surface | 1 |


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
| mcp | [mcp/.gitignore](../../../../sources/OldTemple91__korea-filings-api/mcp/.gitignore) | mcp signal |
| mcp | [mcp/Dockerfile](../../../../sources/OldTemple91__korea-filings-api/mcp/Dockerfile) | mcp signal |
| mcp | [mcp/pyproject.toml](../../../../sources/OldTemple91__korea-filings-api/mcp/pyproject.toml) | mcp signal |
| mcp | [mcp/README.md](../../../../sources/OldTemple91__korea-filings-api/mcp/README.md) | mcp signal |
| entrypoints | [sdk/typescript/src/index.ts](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [mcp/src/koreafilings_mcp/server.py](../../../../sources/OldTemple91__korea-filings-api/mcp/src/koreafilings_mcp/server.py) | entrypoints signal |
| config | [testclient/requirements.txt](../../../../sources/OldTemple91__korea-filings-api/testclient/requirements.txt) | config signal |
| config | [sdk/typescript/package.json](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/package.json) | config signal |
| config | [sdk/typescript/tsconfig.json](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/tsconfig.json) | config signal |
| config | [sdk/python/pyproject.toml](../../../../sources/OldTemple91__korea-filings-api/sdk/python/pyproject.toml) | config signal |
| ci | [.github/workflows/test.yml](../../../../sources/OldTemple91__korea-filings-api/.github/workflows/test.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/OldTemple91__korea-filings-api/docker-compose.yml) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [sdk/typescript/src/index.ts](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/src/index.ts)<br>[mcp/src/koreafilings_mcp/server.py](../../../../sources/OldTemple91__korea-filings-api/mcp/src/koreafilings_mcp/server.py) |
| agentRuntime | 0 | not obvious |
| mcp | 6 | [mcp/.gitignore](../../../../sources/OldTemple91__korea-filings-api/mcp/.gitignore)<br>[mcp/Dockerfile](../../../../sources/OldTemple91__korea-filings-api/mcp/Dockerfile)<br>[mcp/pyproject.toml](../../../../sources/OldTemple91__korea-filings-api/mcp/pyproject.toml)<br>[mcp/README.md](../../../../sources/OldTemple91__korea-filings-api/mcp/README.md)<br>[mcp/src/koreafilings_mcp/__init__.py](../../../../sources/OldTemple91__korea-filings-api/mcp/src/koreafilings_mcp/__init__.py)<br>[mcp/src/koreafilings_mcp/server.py](../../../../sources/OldTemple91__korea-filings-api/mcp/src/koreafilings_mcp/server.py) |
| retrieval | 2 | [sdk/typescript/src/index.ts](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/src/index.ts)<br>[landing/index.html](../../../../sources/OldTemple91__korea-filings-api/landing/index.html) |
| spec | 4 | [testclient/requirements.txt](../../../../sources/OldTemple91__korea-filings-api/testclient/requirements.txt)<br>[docs/ARCHITECTURE.md](../../../../sources/OldTemple91__korea-filings-api/docs/ARCHITECTURE.md)<br>[docs/PRD.md](../../../../sources/OldTemple91__korea-filings-api/docs/PRD.md)<br>[docs/ROADMAP.md](../../../../sources/OldTemple91__korea-filings-api/docs/ROADMAP.md) |
| eval | 36 | [src/test/java/com/dartintel/api/summarization/DisclosureClassifierTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/DisclosureClassifierTest.java)<br>[src/test/java/com/dartintel/api/summarization/DisclosureSummaryRepositoryIT.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/DisclosureSummaryRepositoryIT.java)<br>[src/test/java/com/dartintel/api/summarization/LlmAuditRepositoryIT.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/LlmAuditRepositoryIT.java)<br>[src/test/java/com/dartintel/api/summarization/SummaryServiceTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/SummaryServiceTest.java)<br>[src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientLiveIT.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientLiveIT.java)<br>[src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientTest.java)<br>[src/test/java/com/dartintel/api/summarization/job/BackfillRunnerTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/job/BackfillRunnerTest.java)<br>[src/test/java/com/dartintel/api/summarization/job/SummaryJobConsumerTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/job/SummaryJobConsumerTest.java) |
| security | 2 | [src/main/resources/db/migration/V10__request_audit_table.sql](../../../../sources/OldTemple91__korea-filings-api/src/main/resources/db/migration/V10__request_audit_table.sql)<br>[src/main/resources/db/migration/V3__create_llm_audit.sql](../../../../sources/OldTemple91__korea-filings-api/src/main/resources/db/migration/V3__create_llm_audit.sql) |
| ci | 1 | [.github/workflows/test.yml](../../../../sources/OldTemple91__korea-filings-api/.github/workflows/test.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/OldTemple91__korea-filings-api/docker-compose.yml)<br>[Dockerfile](../../../../sources/OldTemple91__korea-filings-api/Dockerfile)<br>[mcp/Dockerfile](../../../../sources/OldTemple91__korea-filings-api/mcp/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 13 | [README.md](../../../../sources/OldTemple91__korea-filings-api/README.md)<br>[testclient/README.md](../../../../sources/OldTemple91__korea-filings-api/testclient/README.md)<br>[sdk/typescript/README.md](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/README.md)<br>[sdk/python/README.md](../../../../sources/OldTemple91__korea-filings-api/sdk/python/README.md)<br>[mcp/README.md](../../../../sources/OldTemple91__korea-filings-api/mcp/README.md)<br>[docs/ANALYTICS.md](../../../../sources/OldTemple91__korea-filings-api/docs/ANALYTICS.md)<br>[docs/ARCHITECTURE.md](../../../../sources/OldTemple91__korea-filings-api/docs/ARCHITECTURE.md)<br>[docs/PRD.md](../../../../sources/OldTemple91__korea-filings-api/docs/PRD.md) |
| config | 6 | [testclient/requirements.txt](../../../../sources/OldTemple91__korea-filings-api/testclient/requirements.txt)<br>[sdk/typescript/package.json](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/package.json)<br>[sdk/typescript/tsconfig.json](../../../../sources/OldTemple91__korea-filings-api/sdk/typescript/tsconfig.json)<br>[sdk/python/pyproject.toml](../../../../sources/OldTemple91__korea-filings-api/sdk/python/pyproject.toml)<br>[sdk/python/uv.lock](../../../../sources/OldTemple91__korea-filings-api/sdk/python/uv.lock)<br>[mcp/pyproject.toml](../../../../sources/OldTemple91__korea-filings-api/mcp/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 36 | [src/test/java/com/dartintel/api/summarization/DisclosureClassifierTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/DisclosureClassifierTest.java)<br>[src/test/java/com/dartintel/api/summarization/DisclosureSummaryRepositoryIT.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/DisclosureSummaryRepositoryIT.java)<br>[src/test/java/com/dartintel/api/summarization/LlmAuditRepositoryIT.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/LlmAuditRepositoryIT.java)<br>[src/test/java/com/dartintel/api/summarization/SummaryServiceTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/SummaryServiceTest.java)<br>[src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientLiveIT.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientLiveIT.java)<br>[src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientTest.java](../../../../sources/OldTemple91__korea-filings-api/src/test/java/com/dartintel/api/summarization/llm/GeminiFlashLiteClientTest.java) |
| CI workflows | 1 | [.github/workflows/test.yml](../../../../sources/OldTemple91__korea-filings-api/.github/workflows/test.yml) |
| Containers / deploy | 3 | [docker-compose.yml](../../../../sources/OldTemple91__korea-filings-api/docker-compose.yml)<br>[Dockerfile](../../../../sources/OldTemple91__korea-filings-api/Dockerfile)<br>[mcp/Dockerfile](../../../../sources/OldTemple91__korea-filings-api/mcp/Dockerfile) |
| Security / policy | 2 | [src/main/resources/db/migration/V10__request_audit_table.sql](../../../../sources/OldTemple91__korea-filings-api/src/main/resources/db/migration/V10__request_audit_table.sql)<br>[src/main/resources/db/migration/V3__create_llm_audit.sql](../../../../sources/OldTemple91__korea-filings-api/src/main/resources/db/migration/V3__create_llm_audit.sql) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `mcp/.gitignore`, `mcp/Dockerfile`, `mcp/pyproject.toml`.
2. Trace execution through entrypoints: `sdk/typescript/src/index.ts`, `mcp/src/koreafilings_mcp/server.py`.
3. Inspect retrieval/memory/indexing through: `sdk/typescript/src/index.ts`, `landing/index.html`.
4. Verify behavior through test/eval files: `src/test/java/com/dartintel/api/summarization/DisclosureClassifierTest.java`, `src/test/java/com/dartintel/api/summarization/DisclosureSummaryRepositoryIT.java`, `src/test/java/com/dartintel/api/summarization/LlmAuditRepositoryIT.java`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AI ready English summaries of Korean DART 전자공시 filings, paid per call in USDC via x402. Python SDK + MCP server included. 핵심 구조 신호는 Java, Dockerfile, docker-compose.yml, README.md, LICENSE, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
