# jayjodev/vivory-mcp Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Vivory MCP servers for Korean public data (KOSIS, BoK ECOS, NEIS, LOCALDATA, etc.) — Anthropic Model Context Protocol packages for AI agents. Powered by api.vivory.app.

## 요약

- 조사 단위: `sources/jayjodev__vivory-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 42 files, 17 directories, depth score 86, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/mcp-server-verification/LICENSE, packages/mcp-server-verification/MCP_DIRECTORY_SUBMISSION.md, packages/mcp-server-verification/PYPI_PUBLISH_WORKFLOW.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | jayjodev/vivory-mcp |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/jayjodev__vivory-mcp](../../../../sources/jayjodev__vivory-mcp) |
| Existing report | [reports/korea-trending/repositories/jayjodev__vivory-mcp.md](../../../korea-trending/repositories/jayjodev__vivory-mcp.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 42 / 17 |
| Max observed depth | 6 |
| Top directories | .github, packages |
| Top extensions | .py: 19, .md: 11, (none): 4, .toml: 3, .yml: 3, .json: 1, .mdc: 1 |
| Source patterns | monorepo/workspace, api/server, agent/tool runtime, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/mcp-server-verification | packages workspace | 33 |
| packages/mcp-server-korea | packages workspace | 13 |
| packages/mcp-server-kosis | packages workspace | 13 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |


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
| mcp | [packages/mcp-server-verification/LICENSE](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/LICENSE) | mcp signal |
| mcp | [packages/mcp-server-verification/MCP_DIRECTORY_SUBMISSION.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/MCP_DIRECTORY_SUBMISSION.md) | mcp signal |
| mcp | [packages/mcp-server-verification/PYPI_PUBLISH_WORKFLOW.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/PYPI_PUBLISH_WORKFLOW.md) | mcp signal |
| mcp | [packages/mcp-server-verification/pyproject.toml](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/pyproject.toml) | mcp signal |
| agentRuntime | [packages/mcp-server-verification/src/vivory_mcp_verification/tools/__init__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/__init__.py) | agentRuntime signal |
| agentRuntime | [packages/mcp-server-verification/src/vivory_mcp_verification/tools/doi.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/doi.py) | agentRuntime signal |
| agentRuntime | [packages/mcp-server-verification/src/vivory_mcp_verification/tools/law.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/law.py) | agentRuntime signal |
| agentRuntime | [packages/mcp-server-verification/src/vivory_mcp_verification/tools/provenance.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/provenance.py) | agentRuntime signal |
| entrypoints | [packages/mcp-server-verification/server.json](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/server.json) | entrypoints signal |
| entrypoints | [packages/mcp-server-verification/src/vivory_mcp_verification/__main__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/__main__.py) | entrypoints signal |
| entrypoints | [packages/mcp-server-verification/src/vivory_mcp_verification/server.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/server.py) | entrypoints signal |
| entrypoints | [packages/mcp-server-kosis/src/vivory_mcp_kosis/__main__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-kosis/src/vivory_mcp_kosis/__main__.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [packages/mcp-server-verification/server.json](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/server.json)<br>[packages/mcp-server-verification/src/vivory_mcp_verification/__main__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/__main__.py)<br>[packages/mcp-server-verification/src/vivory_mcp_verification/server.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/server.py)<br>[packages/mcp-server-kosis/src/vivory_mcp_kosis/__main__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-kosis/src/vivory_mcp_kosis/__main__.py)<br>[packages/mcp-server-kosis/src/vivory_mcp_kosis/server.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-kosis/src/vivory_mcp_kosis/server.py)<br>[packages/mcp-server-korea/src/vivory_mcp_korea/__main__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-korea/src/vivory_mcp_korea/__main__.py)<br>[packages/mcp-server-korea/src/vivory_mcp_korea/server.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-korea/src/vivory_mcp_korea/server.py) |
| agentRuntime | 5 | [packages/mcp-server-verification/src/vivory_mcp_verification/tools/__init__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/__init__.py)<br>[packages/mcp-server-verification/src/vivory_mcp_verification/tools/doi.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/doi.py)<br>[packages/mcp-server-verification/src/vivory_mcp_verification/tools/law.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/law.py)<br>[packages/mcp-server-verification/src/vivory_mcp_verification/tools/provenance.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/provenance.py)<br>[packages/mcp-server-verification/src/vivory_mcp_verification/tools/reconcile.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/tools/reconcile.py) |
| mcp | 40 | [packages/mcp-server-verification/LICENSE](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/LICENSE)<br>[packages/mcp-server-verification/MCP_DIRECTORY_SUBMISSION.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/MCP_DIRECTORY_SUBMISSION.md)<br>[packages/mcp-server-verification/PYPI_PUBLISH_WORKFLOW.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/PYPI_PUBLISH_WORKFLOW.md)<br>[packages/mcp-server-verification/pyproject.toml](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/pyproject.toml)<br>[packages/mcp-server-verification/README.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/README.md)<br>[packages/mcp-server-verification/server.json](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/server.json)<br>[packages/mcp-server-verification/tests/test_tools.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/tests/test_tools.py)<br>[packages/mcp-server-verification/src/vivory_mcp_verification/__init__.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/src/vivory_mcp_verification/__init__.py) |
| retrieval | 0 | not obvious |
| spec | 0 | not obvious |
| eval | 3 | [packages/mcp-server-verification/tests/test_tools.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/tests/test_tools.py)<br>[packages/mcp-server-kosis/tests/test_tools.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-kosis/tests/test_tools.py)<br>[packages/mcp-server-korea/tests/test_tools.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-korea/tests/test_tools.py) |
| security | 0 | not obvious |
| ci | 3 | [.github/workflows/publish-mcp-korea.yml](../../../../sources/jayjodev__vivory-mcp/.github/workflows/publish-mcp-korea.yml)<br>[.github/workflows/publish-mcp-kosis.yml](../../../../sources/jayjodev__vivory-mcp/.github/workflows/publish-mcp-kosis.yml)<br>[.github/workflows/publish-mcp-verification.yml](../../../../sources/jayjodev__vivory-mcp/.github/workflows/publish-mcp-verification.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 5 | [README.md](../../../../sources/jayjodev__vivory-mcp/README.md)<br>[packages/mcp-server-verification/README.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/README.md)<br>[packages/mcp-server-verification/examples/README.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/examples/README.md)<br>[packages/mcp-server-kosis/README.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-kosis/README.md)<br>[packages/mcp-server-korea/README.md](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-korea/README.md) |
| config | 3 | [packages/mcp-server-verification/pyproject.toml](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/pyproject.toml)<br>[packages/mcp-server-kosis/pyproject.toml](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-kosis/pyproject.toml)<br>[packages/mcp-server-korea/pyproject.toml](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-korea/pyproject.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 3 | [packages/mcp-server-verification/tests/test_tools.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-verification/tests/test_tools.py)<br>[packages/mcp-server-kosis/tests/test_tools.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-kosis/tests/test_tools.py)<br>[packages/mcp-server-korea/tests/test_tools.py](../../../../sources/jayjodev__vivory-mcp/packages/mcp-server-korea/tests/test_tools.py) |
| CI workflows | 3 | [.github/workflows/publish-mcp-korea.yml](../../../../sources/jayjodev__vivory-mcp/.github/workflows/publish-mcp-korea.yml)<br>[.github/workflows/publish-mcp-kosis.yml](../../../../sources/jayjodev__vivory-mcp/.github/workflows/publish-mcp-kosis.yml)<br>[.github/workflows/publish-mcp-verification.yml](../../../../sources/jayjodev__vivory-mcp/.github/workflows/publish-mcp-verification.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `packages/mcp-server-verification/LICENSE`, `packages/mcp-server-verification/MCP_DIRECTORY_SUBMISSION.md`, `packages/mcp-server-verification/PYPI_PUBLISH_WORKFLOW.md`.
2. Trace execution through entrypoints: `packages/mcp-server-verification/server.json`, `packages/mcp-server-verification/src/vivory_mcp_verification/__main__.py`, `packages/mcp-server-verification/src/vivory_mcp_verification/server.py`.
3. Map agent/tool runtime through: `packages/mcp-server-verification/src/vivory_mcp_verification/tools/__init__.py`, `packages/mcp-server-verification/src/vivory_mcp_verification/tools/doi.py`, `packages/mcp-server-verification/src/vivory_mcp_verification/tools/law.py`.
4. Verify behavior through test/eval files: `packages/mcp-server-verification/tests/test_tools.py`, `packages/mcp-server-kosis/tests/test_tools.py`, `packages/mcp-server-korea/tests/test_tools.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Vivory MCP servers for Korean public data KOSIS, BoK ECOS, NEIS, LOCALDATA, etc. — Anthropic Model Context Protocol pack. 핵심 구조 신호는 Python, README.md, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
