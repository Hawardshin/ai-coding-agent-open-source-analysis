# secure-agentic-framework/saf-mcp Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

SAF-MCP is a comprehensive security framework for documenting and mitigating threats in the AI Agent ecosystem.

## 요약

- 조사 단위: `sources/secure-agentic-framework__saf-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 311 files, 133 directories, depth score 77, key references 5개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 config=techniques/SAF-T2107/examples/requirements.txt, techniques/SAF-T2106/examples/requirements.txt, techniques/SAF-T1505/examples/requirements.txt이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 5개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | secure-agentic-framework/saf-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 348 |
| Forks | 92 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/secure-agentic-framework__saf-mcp](../../../../sources/secure-agentic-framework__saf-mcp) |
| Existing report | [reports/global-trending/repositories/secure-agentic-framework__saf-mcp.md](../../../global-trending/repositories/secure-agentic-framework__saf-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 311 / 133 |
| Max observed depth | 4 |
| Top directories | .github, mitigations, techniques |
| Top extensions | .md: 141, .yml: 73, .py: 44, .json: 38, .txt: 4, .0: 3, .sh: 3, (none): 2, .cff: 1, .png: 1, .yaml: 1 |
| Source patterns | retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| mitigations | top-level component | 1 |
| techniques | top-level component | 1 |


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
| config | [techniques/SAF-T2107/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/examples/requirements.txt) | config signal |
| config | [techniques/SAF-T2106/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/examples/requirements.txt) | config signal |
| config | [techniques/SAF-T1505/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T1505/examples/requirements.txt) | config signal |
| eval | [techniques/SAF-T2107/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/test_detection_rule.py) | eval support |
| eval | [techniques/SAF-T2107/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/test-logs.json) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 2 | [techniques/SAF-T2106/examples/vector-store-poisoning-demo.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/examples/vector-store-poisoning-demo.py)<br>[mitigations/SAF-M-63/embedding_sanitization.py](../../../../sources/secure-agentic-framework__saf-mcp/mitigations/SAF-M-63/embedding_sanitization.py) |
| spec | 4 | [techniques/SAF-T3001/architecture_1.png](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T3001/architecture_1.png)<br>[techniques/SAF-T2107/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/examples/requirements.txt)<br>[techniques/SAF-T2106/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/examples/requirements.txt)<br>[techniques/SAF-T1505/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T1505/examples/requirements.txt) |
| eval | 71 | [techniques/SAF-T2107/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/test_detection_rule.py)<br>[techniques/SAF-T2107/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/test-logs.json)<br>[techniques/SAF-T2106/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/test_detection_rule.py)<br>[techniques/SAF-T2106/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/test-logs.json)<br>[techniques/SAF-T2103/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2103/test_detection_rule.py)<br>[techniques/SAF-T2103/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2103/test-logs.json)<br>[techniques/SAF-T1910/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T1910/test_detection_rule.py)<br>[techniques/SAF-T1910/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T1910/test-logs.json) |
| security | 1 | [techniques/SAF-T1603/examples/detection_guard_model.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T1603/examples/detection_guard_model.py) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 130 | [README.md](../../../../sources/secure-agentic-framework__saf-mcp/README.md)<br>[techniques/SAF-T3001/README.md](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T3001/README.md)<br>[techniques/SAF-T2107/README.md](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/README.md)<br>[techniques/SAF-T2107/examples/README.md](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/examples/README.md)<br>[techniques/SAF-T2106/README.md](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/README.md)<br>[techniques/SAF-T2106/examples/README.md](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/examples/README.md)<br>[techniques/SAF-T2105/README.md](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2105/README.md)<br>[techniques/SAF-T2103/README.md](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2103/README.md) |
| config | 3 | [techniques/SAF-T2107/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/examples/requirements.txt)<br>[techniques/SAF-T2106/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/examples/requirements.txt)<br>[techniques/SAF-T1505/examples/requirements.txt](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T1505/examples/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 71 | [techniques/SAF-T2107/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/test_detection_rule.py)<br>[techniques/SAF-T2107/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2107/test-logs.json)<br>[techniques/SAF-T2106/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/test_detection_rule.py)<br>[techniques/SAF-T2106/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2106/test-logs.json)<br>[techniques/SAF-T2103/test_detection_rule.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2103/test_detection_rule.py)<br>[techniques/SAF-T2103/test-logs.json](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T2103/test-logs.json) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [techniques/SAF-T1603/examples/detection_guard_model.py](../../../../sources/secure-agentic-framework__saf-mcp/techniques/SAF-T1603/examples/detection_guard_model.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `techniques/SAF-T2107/examples/requirements.txt`, `techniques/SAF-T2106/examples/requirements.txt`, `techniques/SAF-T1505/examples/requirements.txt`.
2. Inspect retrieval/memory/indexing through: `techniques/SAF-T2106/examples/vector-store-poisoning-demo.py`, `mitigations/SAF-M-63/embedding_sanitization.py`.
3. Verify behavior through test/eval files: `techniques/SAF-T2107/test_detection_rule.py`, `techniques/SAF-T2107/test-logs.json`, `techniques/SAF-T2106/test_detection_rule.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 SAF MCP is a comprehensive security framework for documenting and mitigating threats in the AI Agent ecosystem.. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
