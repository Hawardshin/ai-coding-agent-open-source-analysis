# us/crw Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Fast, lightweight Firecrawl alternative in Rust. Web scraper, crawler & search API with MCP server for AI agents. Drop-in Firecrawl-compatible API (/v1/scrape, /v1/crawl, /v1/search). 2.3x faster than Tavily, 1.5x faster than Firecrawl in 1K-URL benchmarks. 6 MB RAM, single binary. Self-host or use managed cloud.

## 요약

- 조사 단위: `sources/us__crw` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 622 files, 188 directories, depth score 126, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=scripts/check-mcp-example-json.sh, scripts/release/verify_mcp_registry.sh, plans/issue-89-mcp-output-schema.md이고, 의존성 단서는 mcp, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | us/crw |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 187 |
| Forks | 16 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/us__crw](../../../../sources/us__crw) |
| Existing report | [reports/global-trending/repositories/us__crw.md](../../../global-trending/repositories/us__crw.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 622 / 188 |
| Max observed depth | 6 |
| Top directories | .githooks, .github, bench, blog, config, conformance, crates, docs, examples, mcp, plans, scripts, sdks, tests |
| Top extensions | .rs: 186, .md: 157, .html: 101, .py: 35, .json: 32, .sh: 25, .toml: 19, .yml: 17, (none): 12, .js: 6, .ts: 6, .png: 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 85 |
| crates/crw-server | crates workspace | 25 |
| crates/crw-browse | crates workspace | 20 |
| crates/crw-renderer | crates workspace | 7 |
| crates/crw-mcp | crates workspace | 6 |
| crates/crw-mcp-proto | crates workspace | 4 |
| crates/crw-search | crates workspace | 4 |
| tests | validation surface | 4 |
| crates/crw-cli | crates workspace | 3 |
| crates/crw-core | crates workspace | 3 |
| crates/crw-monitor | crates workspace | 3 |
| crates/crw-crawl | crates workspace | 2 |
| crates/crw-diff | crates workspace | 2 |
| crates/crw-extract | crates workspace | 2 |
| .github | ci surface | 1 |
| bench | validation surface | 1 |
| blog | top-level component | 1 |
| config | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | hooks | make hooks |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | fmt-check | make fmt-check |
| quality | Makefile | clippy | make clippy |
| test | Makefile | test | make test |
| build | Makefile | build | make build |
| quality | Makefile | check | make check |
| utility | Makefile | sync-docs-changelog | make sync-docs-changelog |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [scripts/check-mcp-example-json.sh](../../../../sources/us__crw/scripts/check-mcp-example-json.sh) | mcp signal |
| mcp | [scripts/release/verify_mcp_registry.sh](../../../../sources/us__crw/scripts/release/verify_mcp_registry.sh) | mcp signal |
| mcp | [plans/issue-89-mcp-output-schema.md](../../../../sources/us__crw/plans/issue-89-mcp-output-schema.md) | mcp signal |
| mcp | [plans/mcp-optimization.md](../../../../sources/us__crw/plans/mcp-optimization.md) | mcp signal |
| agentRuntime | [mcp/crw-mcp/skills/SKILL.md](../../../../sources/us__crw/mcp/crw-mcp/skills/SKILL.md) | agentRuntime signal |
| agentRuntime | [examples/crewai/tools.py](../../../../sources/us__crw/examples/crewai/tools.py) | agentRuntime signal |
| agentRuntime | [docs/docs/agent-onboarding.md](../../../../sources/us__crw/docs/docs/agent-onboarding.md) | agentRuntime signal |
| agentRuntime | [docs/agent-onboarding/index.html](../../../../sources/us__crw/docs/agent-onboarding/index.html) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/us__crw/server.json) | entrypoints signal |
| entrypoints | [sdks/typescript/src/index.ts](../../../../sources/us__crw/sdks/typescript/src/index.ts) | entrypoints signal |
| entrypoints | [sdks/python/src/crw/__main__.py](../../../../sources/us__crw/sdks/python/src/crw/__main__.py) | entrypoints signal |
| entrypoints | [mcp/crw-mcp/bin/crw-mcp.js](../../../../sources/us__crw/mcp/crw-mcp/bin/crw-mcp.js) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 21 | [server.json](../../../../sources/us__crw/server.json)<br>[sdks/typescript/src/index.ts](../../../../sources/us__crw/sdks/typescript/src/index.ts)<br>[sdks/python/src/crw/__main__.py](../../../../sources/us__crw/sdks/python/src/crw/__main__.py)<br>[mcp/crw-mcp/bin/crw-mcp.js](../../../../sources/us__crw/mcp/crw-mcp/bin/crw-mcp.js)<br>[mcp/crw-mcp/bin/init.js](../../../../sources/us__crw/mcp/crw-mcp/bin/init.js)<br>[crates/crw-server/src/app.rs](../../../../sources/us__crw/crates/crw-server/src/app.rs)<br>[crates/crw-server/src/lib.rs](../../../../sources/us__crw/crates/crw-server/src/lib.rs)<br>[crates/crw-server/src/main.rs](../../../../sources/us__crw/crates/crw-server/src/main.rs) |
| agentRuntime | 22 | [mcp/crw-mcp/skills/SKILL.md](../../../../sources/us__crw/mcp/crw-mcp/skills/SKILL.md)<br>[examples/crewai/tools.py](../../../../sources/us__crw/examples/crewai/tools.py)<br>[docs/docs/agent-onboarding.md](../../../../sources/us__crw/docs/docs/agent-onboarding.md)<br>[docs/agent-onboarding/index.html](../../../../sources/us__crw/docs/agent-onboarding/index.html)<br>[docs/agent-onboarding/SKILL.md](../../../../sources/us__crw/docs/agent-onboarding/SKILL.md)<br>[crates/crw-monitor/src/runner.rs](../../../../sources/us__crw/crates/crw-monitor/src/runner.rs)<br>[crates/crw-browse/src/tools/click.rs](../../../../sources/us__crw/crates/crw-browse/src/tools/click.rs)<br>[crates/crw-browse/src/tools/common.rs](../../../../sources/us__crw/crates/crw-browse/src/tools/common.rs) |
| mcp | 31 | [scripts/check-mcp-example-json.sh](../../../../sources/us__crw/scripts/check-mcp-example-json.sh)<br>[scripts/release/verify_mcp_registry.sh](../../../../sources/us__crw/scripts/release/verify_mcp_registry.sh)<br>[plans/issue-89-mcp-output-schema.md](../../../../sources/us__crw/plans/issue-89-mcp-output-schema.md)<br>[plans/mcp-optimization.md](../../../../sources/us__crw/plans/mcp-optimization.md)<br>[mcp/crw-mcp-linux-x64/package.json](../../../../sources/us__crw/mcp/crw-mcp-linux-x64/package.json)<br>[mcp/crw-mcp-linux-arm64/package.json](../../../../sources/us__crw/mcp/crw-mcp-linux-arm64/package.json)<br>[mcp/crw-mcp-darwin-x64/package.json](../../../../sources/us__crw/mcp/crw-mcp-darwin-x64/package.json)<br>[mcp/crw-mcp-darwin-arm64/package.json](../../../../sources/us__crw/mcp/crw-mcp-darwin-arm64/package.json) |
| retrieval | 97 | [sdks/typescript/src/index.ts](../../../../sources/us__crw/sdks/typescript/src/index.ts)<br>[docs/index.html](../../../../sources/us__crw/docs/index.html)<br>[docs/v2-api/index.html](../../../../sources/us__crw/docs/v2-api/index.html)<br>[docs/troubleshooting/index.html](../../../../sources/us__crw/docs/troubleshooting/index.html)<br>[docs/self-hosting-hardening/index.html](../../../../sources/us__crw/docs/self-hosting-hardening/index.html)<br>[docs/self-hosting/index.html](../../../../sources/us__crw/docs/self-hosting/index.html)<br>[docs/search/index.html](../../../../sources/us__crw/docs/search/index.html)<br>[docs/sdks/python/index.html](../../../../sources/us__crw/docs/sdks/python/index.html) |
| spec | 5 | [ROADMAP.md](../../../../sources/us__crw/ROADMAP.md)<br>[docs/docs/architecture.md](../../../../sources/us__crw/docs/docs/architecture.md)<br>[docs/architecture/index.html](../../../../sources/us__crw/docs/architecture/index.html)<br>[blog/crw-architecture.md](../../../../sources/us__crw/blog/crw-architecture.md)<br>[blog/rust-vs-python-scrapers-architecture.md](../../../../sources/us__crw/blog/rust-vs-python-scrapers-architecture.md) |
| eval | 91 | [test_api_pipeline.py](../../../../sources/us__crw/test_api_pipeline.py)<br>[tests/fixtures/blog_article.html](../../../../sources/us__crw/tests/fixtures/blog_article.html)<br>[tests/fixtures/js_heavy.html](../../../../sources/us__crw/tests/fixtures/js_heavy.html)<br>[tests/fixtures/simple.html](../../../../sources/us__crw/tests/fixtures/simple.html)<br>[sdks/typescript/tsconfig.test.json](../../../../sources/us__crw/sdks/typescript/tsconfig.test.json)<br>[sdks/typescript/test/client.test.ts](../../../../sources/us__crw/sdks/typescript/test/client.test.ts)<br>[sdks/python/tests/__init__.py](../../../../sources/us__crw/sdks/python/tests/__init__.py)<br>[sdks/python/tests/conftest.py](../../../../sources/us__crw/sdks/python/tests/conftest.py) |
| security | 4 | [scripts/release/audit_release_please_config.py](../../../../sources/us__crw/scripts/release/audit_release_please_config.py)<br>[crates/crw-server/tests/auth.rs](../../../../sources/us__crw/crates/crw-server/tests/auth.rs)<br>[crates/crw-server/tests/security.rs](../../../../sources/us__crw/crates/crw-server/tests/security.rs)<br>[.github/SECURITY.md](../../../../sources/us__crw/.github/SECURITY.md) |
| ci | 12 | [.github/workflows/ci.yml](../../../../sources/us__crw/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/us__crw/.github/workflows/claude.yml)<br>[.github/workflows/deprecate-npm.yml](../../../../sources/us__crw/.github/workflows/deprecate-npm.yml)<br>[.github/workflows/docker-build.yml](../../../../sources/us__crw/.github/workflows/docker-build.yml)<br>[.github/workflows/docs-format-snapshot.yml](../../../../sources/us__crw/.github/workflows/docs-format-snapshot.yml)<br>[.github/workflows/docs-guards.yml](../../../../sources/us__crw/.github/workflows/docs-guards.yml)<br>[.github/workflows/examples-test.yml](../../../../sources/us__crw/.github/workflows/examples-test.yml)<br>[.github/workflows/google-indexing.yml](../../../../sources/us__crw/.github/workflows/google-indexing.yml) |
| container | 3 | [docker-compose.stealth.yml](../../../../sources/us__crw/docker-compose.stealth.yml)<br>[docker-compose.yml](../../../../sources/us__crw/docker-compose.yml)<br>[Dockerfile](../../../../sources/us__crw/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 181 | [README.md](../../../../sources/us__crw/README.md)<br>[README.zh-CN.md](../../../../sources/us__crw/README.zh-CN.md)<br>[sdks/typescript/README.md](../../../../sources/us__crw/sdks/typescript/README.md)<br>[sdks/python/README.md](../../../../sources/us__crw/sdks/python/README.md)<br>[examples/README.md](../../../../sources/us__crw/examples/README.md)<br>[examples/pi/README.md](../../../../sources/us__crw/examples/pi/README.md)<br>[examples/openclaw/README.md](../../../../sources/us__crw/examples/openclaw/README.md)<br>[docs/.nojekyll](../../../../sources/us__crw/docs/.nojekyll) |
| config | 25 | [Cargo.lock](../../../../sources/us__crw/Cargo.lock)<br>[Cargo.toml](../../../../sources/us__crw/Cargo.toml)<br>[Makefile](../../../../sources/us__crw/Makefile)<br>[package.json](../../../../sources/us__crw/package.json)<br>[sdks/typescript/package.json](../../../../sources/us__crw/sdks/typescript/package.json)<br>[sdks/typescript/tsconfig.json](../../../../sources/us__crw/sdks/typescript/tsconfig.json)<br>[sdks/python/pyproject.toml](../../../../sources/us__crw/sdks/python/pyproject.toml)<br>[mcp/crw-mcp-linux-x64/package.json](../../../../sources/us__crw/mcp/crw-mcp-linux-x64/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 91 | [test_api_pipeline.py](../../../../sources/us__crw/test_api_pipeline.py)<br>[tests/fixtures/blog_article.html](../../../../sources/us__crw/tests/fixtures/blog_article.html)<br>[tests/fixtures/js_heavy.html](../../../../sources/us__crw/tests/fixtures/js_heavy.html)<br>[tests/fixtures/simple.html](../../../../sources/us__crw/tests/fixtures/simple.html)<br>[sdks/typescript/tsconfig.test.json](../../../../sources/us__crw/sdks/typescript/tsconfig.test.json)<br>[sdks/typescript/test/client.test.ts](../../../../sources/us__crw/sdks/typescript/test/client.test.ts) |
| CI workflows | 12 | [.github/workflows/ci.yml](../../../../sources/us__crw/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/us__crw/.github/workflows/claude.yml)<br>[.github/workflows/deprecate-npm.yml](../../../../sources/us__crw/.github/workflows/deprecate-npm.yml)<br>[.github/workflows/docker-build.yml](../../../../sources/us__crw/.github/workflows/docker-build.yml)<br>[.github/workflows/docs-format-snapshot.yml](../../../../sources/us__crw/.github/workflows/docs-format-snapshot.yml)<br>[.github/workflows/docs-guards.yml](../../../../sources/us__crw/.github/workflows/docs-guards.yml) |
| Containers / deploy | 3 | [docker-compose.stealth.yml](../../../../sources/us__crw/docker-compose.stealth.yml)<br>[docker-compose.yml](../../../../sources/us__crw/docker-compose.yml)<br>[Dockerfile](../../../../sources/us__crw/Dockerfile) |
| Security / policy | 4 | [scripts/release/audit_release_please_config.py](../../../../sources/us__crw/scripts/release/audit_release_please_config.py)<br>[crates/crw-server/tests/auth.rs](../../../../sources/us__crw/crates/crw-server/tests/auth.rs)<br>[crates/crw-server/tests/security.rs](../../../../sources/us__crw/crates/crw-server/tests/security.rs)<br>[.github/SECURITY.md](../../../../sources/us__crw/.github/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `scripts/check-mcp-example-json.sh`, `scripts/release/verify_mcp_registry.sh`, `plans/issue-89-mcp-output-schema.md`.
2. Trace execution through entrypoints: `server.json`, `sdks/typescript/src/index.ts`, `sdks/python/src/crw/__main__.py`.
3. Map agent/tool runtime through: `mcp/crw-mcp/skills/SKILL.md`, `examples/crewai/tools.py`, `docs/docs/agent-onboarding.md`.
4. Inspect retrieval/memory/indexing through: `sdks/typescript/src/index.ts`, `docs/index.html`, `docs/v2-api/index.html`.
5. Verify behavior through test/eval files: `test_api_pipeline.py`, `tests/fixtures/blog_article.html`, `tests/fixtures/js_heavy.html`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Fast, lightweight Firecrawl alternative in Rust. Web scraper, crawler & search API with MCP server for AI agents. Drop i. 핵심 구조 신호는 Rust, package.json, Cargo.toml, Dockerfile, docker-compose.yml, Makefile이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
