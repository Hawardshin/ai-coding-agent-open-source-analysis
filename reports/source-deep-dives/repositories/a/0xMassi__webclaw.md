# 0xMassi/webclaw Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Fast, local-first web content extraction for LLMs. Scrape, crawl, extract structured data — all from Rust. CLI, REST API, and MCP server.

## 요약

- 조사 단위: `sources/0xMassi__webclaw` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 178 files, 40 directories, depth score 121, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, examples/mcp-web-scraping/README.md, crates/webclaw-mcp/Cargo.toml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | 0xMassi/webclaw |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Rust |
| Stars | 1416 |
| Forks | 157 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/0xMassi__webclaw](../../../../sources/0xMassi__webclaw) |
| Existing report | [reports/global-trending/repositories/0xMassi__webclaw.md](../../../global-trending/repositories/0xMassi__webclaw.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 178 / 40 |
| Max observed depth | 5 |
| Top directories | .cargo, .github, assets, benchmarks, crates, deploy, examples, packages, skill |
| Top extensions | .rs: 107, .md: 16, .toml: 10, .png: 9, .html: 6, .json: 6, .yml: 5, .sh: 4, (none): 4, .txt: 3, .ci: 1, .example: 1 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| crates/webclaw-mcp | crates workspace | 8 |
| crates/webclaw-core | crates workspace | 4 |
| crates/webclaw-fetch | crates workspace | 4 |
| packages/create-webclaw | packages workspace | 4 |
| crates/webclaw-cli | crates workspace | 3 |
| crates/webclaw-server | crates workspace | 3 |
| crates/webclaw-llm | crates workspace | 2 |
| crates/webclaw-pdf | crates workspace | 2 |
| examples/html-to-markdown-rag | examples workspace | 2 |
| examples/mcp-web-scraping | examples workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| crates | source boundary | 1 |
| deploy | deployment surface | 1 |
| examples | top-level component | 1 |
| examples/cloudflare-diagnostics | examples workspace | 1 |
| examples/firecrawl-compatible-api | examples workspace | 1 |


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
| mcp | [.mcp.json](../../../../sources/0xMassi__webclaw/.mcp.json) | mcp signal |
| mcp | [examples/mcp-web-scraping/README.md](../../../../sources/0xMassi__webclaw/examples/mcp-web-scraping/README.md) | mcp signal |
| mcp | [crates/webclaw-mcp/Cargo.toml](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/Cargo.toml) | mcp signal |
| mcp | [crates/webclaw-mcp/src/main.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/main.rs) | mcp signal |
| agentRuntime | [SKILL.md](../../../../sources/0xMassi__webclaw/SKILL.md) | agentRuntime signal |
| agentRuntime | [skill/SKILL.md](../../../../sources/0xMassi__webclaw/skill/SKILL.md) | agentRuntime signal |
| agentRuntime | [crates/webclaw-mcp/src/tools.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/tools.rs) | agentRuntime signal |
| entrypoints | [packages/create-webclaw/server.json](../../../../sources/0xMassi__webclaw/packages/create-webclaw/server.json) | entrypoints signal |
| entrypoints | [crates/webclaw-server/src/main.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-server/src/main.rs) | entrypoints signal |
| entrypoints | [crates/webclaw-pdf/src/lib.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-pdf/src/lib.rs) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/0xMassi__webclaw/CLAUDE.md) | instruction signal |
| config | [Cargo.lock](../../../../sources/0xMassi__webclaw/Cargo.lock) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 9 | [packages/create-webclaw/server.json](../../../../sources/0xMassi__webclaw/packages/create-webclaw/server.json)<br>[crates/webclaw-server/src/main.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-server/src/main.rs)<br>[crates/webclaw-pdf/src/lib.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-pdf/src/lib.rs)<br>[crates/webclaw-mcp/src/main.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/main.rs)<br>[crates/webclaw-mcp/src/server.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/server.rs)<br>[crates/webclaw-llm/src/lib.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-llm/src/lib.rs)<br>[crates/webclaw-fetch/src/lib.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-fetch/src/lib.rs)<br>[crates/webclaw-core/src/lib.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-core/src/lib.rs) |
| agentRuntime | 3 | [SKILL.md](../../../../sources/0xMassi__webclaw/SKILL.md)<br>[skill/SKILL.md](../../../../sources/0xMassi__webclaw/skill/SKILL.md)<br>[crates/webclaw-mcp/src/tools.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/tools.rs) |
| mcp | 6 | [.mcp.json](../../../../sources/0xMassi__webclaw/.mcp.json)<br>[examples/mcp-web-scraping/README.md](../../../../sources/0xMassi__webclaw/examples/mcp-web-scraping/README.md)<br>[crates/webclaw-mcp/Cargo.toml](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/Cargo.toml)<br>[crates/webclaw-mcp/src/main.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/main.rs)<br>[crates/webclaw-mcp/src/server.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/server.rs)<br>[crates/webclaw-mcp/src/tools.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/src/tools.rs) |
| retrieval | 2 | [packages/create-webclaw/index.mjs](../../../../sources/0xMassi__webclaw/packages/create-webclaw/index.mjs)<br>[examples/html-to-markdown-rag/README.md](../../../../sources/0xMassi__webclaw/examples/html-to-markdown-rag/README.md) |
| spec | 0 | not obvious |
| eval | 5 | [crates/webclaw-fetch/tests/bench_1k.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-fetch/tests/bench_1k.rs)<br>[crates/webclaw-core/testdata/express_test.html](../../../../sources/0xMassi__webclaw/crates/webclaw-core/testdata/express_test.html)<br>[crates/webclaw-core/src/js_eval.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-core/src/js_eval.rs)<br>[crates/webclaw-cli/src/bench.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-cli/src/bench.rs)<br>[benchmarks/scripts/bench.py](../../../../sources/0xMassi__webclaw/benchmarks/scripts/bench.py) |
| security | 2 | [crates/webclaw-server/src/auth.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-server/src/auth.rs)<br>[crates/webclaw-fetch/src/url_security.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-fetch/src/url_security.rs) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/0xMassi__webclaw/.github/workflows/ci.yml)<br>[.github/workflows/deps.yml](../../../../sources/0xMassi__webclaw/.github/workflows/deps.yml)<br>[.github/workflows/release.yml](../../../../sources/0xMassi__webclaw/.github/workflows/release.yml) |
| container | 4 | [docker-compose.yml](../../../../sources/0xMassi__webclaw/docker-compose.yml)<br>[Dockerfile](../../../../sources/0xMassi__webclaw/Dockerfile)<br>[Dockerfile.ci](../../../../sources/0xMassi__webclaw/Dockerfile.ci)<br>[deploy/hetzner.sh](../../../../sources/0xMassi__webclaw/deploy/hetzner.sh) |
| instruction | 1 | [CLAUDE.md](../../../../sources/0xMassi__webclaw/CLAUDE.md) |
| docs | 9 | [README.md](../../../../sources/0xMassi__webclaw/README.md)<br>[packages/create-webclaw/README.md](../../../../sources/0xMassi__webclaw/packages/create-webclaw/README.md)<br>[examples/README.md](../../../../sources/0xMassi__webclaw/examples/README.md)<br>[examples/proxy-backed-crawling/README.md](../../../../sources/0xMassi__webclaw/examples/proxy-backed-crawling/README.md)<br>[examples/mcp-web-scraping/README.md](../../../../sources/0xMassi__webclaw/examples/mcp-web-scraping/README.md)<br>[examples/html-to-markdown-rag/README.md](../../../../sources/0xMassi__webclaw/examples/html-to-markdown-rag/README.md)<br>[examples/firecrawl-compatible-api/README.md](../../../../sources/0xMassi__webclaw/examples/firecrawl-compatible-api/README.md)<br>[examples/cloudflare-diagnostics/README.md](../../../../sources/0xMassi__webclaw/examples/cloudflare-diagnostics/README.md) |
| config | 10 | [Cargo.lock](../../../../sources/0xMassi__webclaw/Cargo.lock)<br>[Cargo.toml](../../../../sources/0xMassi__webclaw/Cargo.toml)<br>[packages/create-webclaw/package.json](../../../../sources/0xMassi__webclaw/packages/create-webclaw/package.json)<br>[crates/webclaw-server/Cargo.toml](../../../../sources/0xMassi__webclaw/crates/webclaw-server/Cargo.toml)<br>[crates/webclaw-pdf/Cargo.toml](../../../../sources/0xMassi__webclaw/crates/webclaw-pdf/Cargo.toml)<br>[crates/webclaw-mcp/Cargo.toml](../../../../sources/0xMassi__webclaw/crates/webclaw-mcp/Cargo.toml)<br>[crates/webclaw-llm/Cargo.toml](../../../../sources/0xMassi__webclaw/crates/webclaw-llm/Cargo.toml)<br>[crates/webclaw-fetch/Cargo.toml](../../../../sources/0xMassi__webclaw/crates/webclaw-fetch/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 5 | [crates/webclaw-fetch/tests/bench_1k.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-fetch/tests/bench_1k.rs)<br>[crates/webclaw-core/testdata/express_test.html](../../../../sources/0xMassi__webclaw/crates/webclaw-core/testdata/express_test.html)<br>[crates/webclaw-core/src/js_eval.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-core/src/js_eval.rs)<br>[crates/webclaw-cli/src/bench.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-cli/src/bench.rs)<br>[benchmarks/scripts/bench.py](../../../../sources/0xMassi__webclaw/benchmarks/scripts/bench.py) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/0xMassi__webclaw/.github/workflows/ci.yml)<br>[.github/workflows/deps.yml](../../../../sources/0xMassi__webclaw/.github/workflows/deps.yml)<br>[.github/workflows/release.yml](../../../../sources/0xMassi__webclaw/.github/workflows/release.yml) |
| Containers / deploy | 4 | [docker-compose.yml](../../../../sources/0xMassi__webclaw/docker-compose.yml)<br>[Dockerfile](../../../../sources/0xMassi__webclaw/Dockerfile)<br>[Dockerfile.ci](../../../../sources/0xMassi__webclaw/Dockerfile.ci)<br>[deploy/hetzner.sh](../../../../sources/0xMassi__webclaw/deploy/hetzner.sh) |
| Security / policy | 2 | [crates/webclaw-server/src/auth.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-server/src/auth.rs)<br>[crates/webclaw-fetch/src/url_security.rs](../../../../sources/0xMassi__webclaw/crates/webclaw-fetch/src/url_security.rs) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/0xMassi__webclaw/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.mcp.json`, `examples/mcp-web-scraping/README.md`, `crates/webclaw-mcp/Cargo.toml`.
2. Trace execution through entrypoints: `packages/create-webclaw/server.json`, `crates/webclaw-server/src/main.rs`, `crates/webclaw-pdf/src/lib.rs`.
3. Map agent/tool runtime through: `SKILL.md`, `skill/SKILL.md`, `crates/webclaw-mcp/src/tools.rs`.
4. Inspect retrieval/memory/indexing through: `packages/create-webclaw/index.mjs`, `examples/html-to-markdown-rag/README.md`.
5. Verify behavior through test/eval files: `crates/webclaw-fetch/tests/bench_1k.rs`, `crates/webclaw-core/testdata/express_test.html`, `crates/webclaw-core/src/js_eval.rs`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Fast, local first web content extraction for LLMs. Scrape, crawl, extract structured data — all from Rust. CLI, REST API. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, docker-compose.yml, README.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
