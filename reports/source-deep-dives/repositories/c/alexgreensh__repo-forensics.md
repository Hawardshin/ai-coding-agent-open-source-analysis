# alexgreensh/repo-forensics Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Offline security scanner for AI-agent repos, skills, plugins, and MCP servers.

## 요약

- 조사 단위: `sources/alexgreensh__repo-forensics` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 307 files, 60 directories, depth score 106, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=skills/repo-forensics/tests/test_scan_mcp_security.py, skills/repo-forensics/tests/golden/parity_mcp_security.json, skills/repo-forensics/scripts/scan_mcp_security.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | alexgreensh/repo-forensics |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 107 |
| Forks | 17 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/alexgreensh__repo-forensics](../../../../sources/alexgreensh__repo-forensics) |
| Existing report | [reports/global-trending/repositories/alexgreensh__repo-forensics.md](../../../global-trending/repositories/alexgreensh__repo-forensics.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 307 / 60 |
| Max observed depth | 9 |
| Top directories | .agents, .claude-plugin, .codex-plugin, .github, diagrams, hooks, iocs, openclaw, plugins, scripts, signatures, skills |
| Top extensions | .py: 164, .json: 53, .md: 28, .sh: 17, .txt: 14, (none): 9, .svg: 6, .yml: 6, .sb: 4, .csv: 2, .sig: 2, .css: 1 |
| Source patterns | agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| diagrams | top-level component | 1 |
| hooks | top-level component | 1 |
| iocs | top-level component | 1 |
| openclaw | top-level component | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |
| signatures | top-level component | 1 |
| skills | top-level component | 1 |


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
| mcp | [skills/repo-forensics/tests/test_scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_scan_mcp_security.py) | mcp signal |
| mcp | [skills/repo-forensics/tests/golden/parity_mcp_security.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/golden/parity_mcp_security.json) | mcp signal |
| mcp | [skills/repo-forensics/scripts/scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/scripts/scan_mcp_security.py) | mcp signal |
| mcp | [skills/repo-forensics/references/mcp-attack-patterns.md](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/references/mcp-attack-patterns.md) | mcp signal |
| agentRuntime | [skills/repo-forensics/.gitignore](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/.gitignore) | agentRuntime signal |
| agentRuntime | [skills/repo-forensics/checksums.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/checksums.json) | agentRuntime signal |
| agentRuntime | [skills/repo-forensics/SKILL.md](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/repo-forensics/tests/conftest.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/conftest.py) | agentRuntime signal |
| config | [skills/repo-forensics/tests/corpus/benign/package.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/corpus/benign/package.json) | config signal |
| ci | [.github/workflows/cla.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/cla.yml) | ci support |
| ci | [.github/workflows/sync-badges.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/sync-badges.yml) | ci support |
| container | [skills/repo-forensics/tests/corpus/benign/Dockerfile](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/corpus/benign/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 266 | [skills/repo-forensics/.gitignore](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/.gitignore)<br>[skills/repo-forensics/checksums.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/checksums.json)<br>[skills/repo-forensics/SKILL.md](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/SKILL.md)<br>[skills/repo-forensics/tests/conftest.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/conftest.py)<br>[skills/repo-forensics/tests/parity_corpus.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/parity_corpus.py)<br>[skills/repo-forensics/tests/test_adjudication_output.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_adjudication_output.py)<br>[skills/repo-forensics/tests/test_aggregate_json.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_aggregate_json.py)<br>[skills/repo-forensics/tests/test_benign_corpus.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_benign_corpus.py) |
| mcp | 12 | [skills/repo-forensics/tests/test_scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_scan_mcp_security.py)<br>[skills/repo-forensics/tests/golden/parity_mcp_security.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/golden/parity_mcp_security.json)<br>[skills/repo-forensics/scripts/scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/scripts/scan_mcp_security.py)<br>[skills/repo-forensics/references/mcp-attack-patterns.md](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/references/mcp-attack-patterns.md)<br>[skills/repo-forensics/data/rulepacks/mcp_security.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/data/rulepacks/mcp_security.json)<br>[skills/forensify/prompts/domain_mcp.txt](../../../../sources/alexgreensh__repo-forensics/skills/forensify/prompts/domain_mcp.txt)<br>[skills/forensify/domains/mcp.json](../../../../sources/alexgreensh__repo-forensics/skills/forensify/domains/mcp.json)<br>[plugins/repo-forensics/skills/repo-forensics/scripts/scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/plugins/repo-forensics/skills/repo-forensics/scripts/scan_mcp_security.py) |
| retrieval | 0 | not obvious |
| spec | 2 | [skills/forensify/references/architecture.md](../../../../sources/alexgreensh__repo-forensics/skills/forensify/references/architecture.md)<br>[plugins/repo-forensics/skills/forensify/references/architecture.md](../../../../sources/alexgreensh__repo-forensics/plugins/repo-forensics/skills/forensify/references/architecture.md) |
| eval | 78 | [skills/repo-forensics/tests/conftest.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/conftest.py)<br>[skills/repo-forensics/tests/parity_corpus.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/parity_corpus.py)<br>[skills/repo-forensics/tests/test_adjudication_output.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_adjudication_output.py)<br>[skills/repo-forensics/tests/test_aggregate_json.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_aggregate_json.py)<br>[skills/repo-forensics/tests/test_benign_corpus.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_benign_corpus.py)<br>[skills/repo-forensics/tests/test_benign_new_scanners.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_benign_new_scanners.py)<br>[skills/repo-forensics/tests/test_codex_install.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_codex_install.py)<br>[skills/repo-forensics/tests/test_codex_marketplace.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_codex_marketplace.py) |
| security | 10 | [SECURITY.md](../../../../sources/alexgreensh__repo-forensics/SECURITY.md)<br>[skills/repo-forensics/tests/test_scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_scan_mcp_security.py)<br>[skills/repo-forensics/tests/golden/parity_mcp_security.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/golden/parity_mcp_security.json)<br>[skills/repo-forensics/tests/corpus/benign/oauth_api_docs.md](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/corpus/benign/oauth_api_docs.md)<br>[skills/repo-forensics/scripts/dast_sandbox.sb](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/scripts/dast_sandbox.sb)<br>[skills/repo-forensics/scripts/scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/scripts/scan_mcp_security.py)<br>[skills/repo-forensics/data/rulepacks/mcp_security.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/data/rulepacks/mcp_security.json)<br>[plugins/repo-forensics/skills/repo-forensics/scripts/dast_sandbox.sb](../../../../sources/alexgreensh__repo-forensics/plugins/repo-forensics/skills/repo-forensics/scripts/dast_sandbox.sb) |
| ci | 3 | [.github/workflows/cla.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/cla.yml)<br>[.github/workflows/sync-badges.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/sync-badges.yml)<br>[.github/workflows/verify-checksums.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/verify-checksums.yml) |
| container | 1 | [skills/repo-forensics/tests/corpus/benign/Dockerfile](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/corpus/benign/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/alexgreensh__repo-forensics/README.md)<br>[skills/repo-forensics/data/README.md](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/data/README.md)<br>[plugins/repo-forensics/skills/repo-forensics/data/README.md](../../../../sources/alexgreensh__repo-forensics/plugins/repo-forensics/skills/repo-forensics/data/README.md) |
| config | 1 | [skills/repo-forensics/tests/corpus/benign/package.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/corpus/benign/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 78 | [skills/repo-forensics/tests/conftest.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/conftest.py)<br>[skills/repo-forensics/tests/parity_corpus.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/parity_corpus.py)<br>[skills/repo-forensics/tests/test_adjudication_output.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_adjudication_output.py)<br>[skills/repo-forensics/tests/test_aggregate_json.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_aggregate_json.py)<br>[skills/repo-forensics/tests/test_benign_corpus.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_benign_corpus.py)<br>[skills/repo-forensics/tests/test_benign_new_scanners.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_benign_new_scanners.py) |
| CI workflows | 3 | [.github/workflows/cla.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/cla.yml)<br>[.github/workflows/sync-badges.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/sync-badges.yml)<br>[.github/workflows/verify-checksums.yml](../../../../sources/alexgreensh__repo-forensics/.github/workflows/verify-checksums.yml) |
| Containers / deploy | 1 | [skills/repo-forensics/tests/corpus/benign/Dockerfile](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/corpus/benign/Dockerfile) |
| Security / policy | 10 | [SECURITY.md](../../../../sources/alexgreensh__repo-forensics/SECURITY.md)<br>[skills/repo-forensics/tests/test_scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/test_scan_mcp_security.py)<br>[skills/repo-forensics/tests/golden/parity_mcp_security.json](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/golden/parity_mcp_security.json)<br>[skills/repo-forensics/tests/corpus/benign/oauth_api_docs.md](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/tests/corpus/benign/oauth_api_docs.md)<br>[skills/repo-forensics/scripts/dast_sandbox.sb](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/scripts/dast_sandbox.sb)<br>[skills/repo-forensics/scripts/scan_mcp_security.py](../../../../sources/alexgreensh__repo-forensics/skills/repo-forensics/scripts/scan_mcp_security.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `skills/repo-forensics/tests/test_scan_mcp_security.py`, `skills/repo-forensics/tests/golden/parity_mcp_security.json`, `skills/repo-forensics/scripts/scan_mcp_security.py`.
2. Map agent/tool runtime through: `skills/repo-forensics/.gitignore`, `skills/repo-forensics/checksums.json`, `skills/repo-forensics/SKILL.md`.
3. Verify behavior through test/eval files: `skills/repo-forensics/tests/conftest.py`, `skills/repo-forensics/tests/parity_corpus.py`, `skills/repo-forensics/tests/test_adjudication_output.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Offline security scanner for AI agent repos, skills, plugins, and MCP servers.. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
