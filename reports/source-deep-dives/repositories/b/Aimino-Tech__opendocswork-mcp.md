# Aimino-Tech/opendocswork-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Rust-native MCP server for Office document processing (Excel, Word, PowerPoint). Sub-millisecond, local-first, open source.

## 요약

- 조사 단위: `sources/Aimino-Tech__opendocswork-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 126 files, 45 directories, depth score 101, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp.json이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Aimino-Tech/opendocswork-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 149 |
| Forks | 11 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Aimino-Tech__opendocswork-mcp](../../../../sources/Aimino-Tech__opendocswork-mcp) |
| Existing report | [reports/global-trending/repositories/Aimino-Tech__opendocswork-mcp.md](../../../global-trending/repositories/Aimino-Tech__opendocswork-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 126 / 45 |
| Max observed depth | 4 |
| Top directories | .github, scripts, showcase, skills, src |
| Top extensions | .rs: 42, .png: 16, .xlsx: 12, .yaml: 12, .pptx: 10, .md: 8, .docx: 6, (none): 6, .py: 4, .html: 2, .json: 2, .css: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 11 |
| .github | ci surface | 1 |
| scripts | top-level component | 1 |
| showcase | top-level component | 1 |
| skills | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


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
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [mcp.json](../../../../sources/Aimino-Tech__opendocswork-mcp/mcp.json) | mcp signal |
| agentRuntime | [src/skills/mod.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/mod.rs) | agentRuntime signal |
| agentRuntime | [src/skills/registry.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/registry.rs) | agentRuntime signal |
| agentRuntime | [src/skills/runner.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/runner.rs) | agentRuntime signal |
| agentRuntime | [src/skills/validator.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/validator.rs) | agentRuntime signal |
| entrypoints | [src/main.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/main.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/Aimino-Tech__opendocswork-mcp/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/Aimino-Tech__opendocswork-mcp/Cargo.toml) | config signal |
| container | [Dockerfile](../../../../sources/Aimino-Tech__opendocswork-mcp/Dockerfile) | container support |
| eval | [scripts/stress_test_pdfs.py](../../../../sources/Aimino-Tech__opendocswork-mcp/scripts/stress_test_pdfs.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/main.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/main.rs) |
| agentRuntime | 20 | [src/skills/mod.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/mod.rs)<br>[src/skills/registry.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/registry.rs)<br>[src/skills/runner.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/runner.rs)<br>[src/skills/validator.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skills/validator.rs)<br>[src/skill/mod.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skill/mod.rs)<br>[src/skill/registry.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skill/registry.rs)<br>[src/skill/templates.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skill/templates.rs)<br>[src/skill/types.rs](../../../../sources/Aimino-Tech__opendocswork-mcp/src/skill/types.rs) |
| mcp | 1 | [mcp.json](../../../../sources/Aimino-Tech__opendocswork-mcp/mcp.json) |
| retrieval | 1 | [showcase/index.html](../../../../sources/Aimino-Tech__opendocswork-mcp/showcase/index.html) |
| spec | 0 | not obvious |
| eval | 1 | [scripts/stress_test_pdfs.py](../../../../sources/Aimino-Tech__opendocswork-mcp/scripts/stress_test_pdfs.py) |
| security | 1 | [SECURITY.md](../../../../sources/Aimino-Tech__opendocswork-mcp/SECURITY.md) |
| ci | 0 | not obvious |
| container | 1 | [Dockerfile](../../../../sources/Aimino-Tech__opendocswork-mcp/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/Aimino-Tech__opendocswork-mcp/README.md) |
| config | 2 | [Cargo.lock](../../../../sources/Aimino-Tech__opendocswork-mcp/Cargo.lock)<br>[Cargo.toml](../../../../sources/Aimino-Tech__opendocswork-mcp/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [scripts/stress_test_pdfs.py](../../../../sources/Aimino-Tech__opendocswork-mcp/scripts/stress_test_pdfs.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 1 | [Dockerfile](../../../../sources/Aimino-Tech__opendocswork-mcp/Dockerfile) |
| Security / policy | 1 | [SECURITY.md](../../../../sources/Aimino-Tech__opendocswork-mcp/SECURITY.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `mcp.json`, `src/skills/mod.rs`, `src/skills/registry.rs`.
2. Trace execution through entrypoints: `src/main.rs`.
3. Map agent/tool runtime through: `src/skills/mod.rs`, `src/skills/registry.rs`, `src/skills/runner.rs`.
4. Inspect retrieval/memory/indexing through: `showcase/index.html`.
5. Verify behavior through test/eval files: `scripts/stress_test_pdfs.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Rust native MCP server for Office document processing Excel, Word, PowerPoint . Sub millisecond, local first, open sourc. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, README.md, LICENSE, mcp이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
