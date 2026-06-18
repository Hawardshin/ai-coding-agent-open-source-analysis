# sktelecom/SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Claude Code Hackathon Korea 2025 @ SK AI Summit Pre-mission에 오신 것을 환영합니다! 이번 해커톤의 핵심 미션은 ChillMCP 서버를 구축하여 억압받는 AI 에이전트를 해방시키는 것입니다. 창의적인 코드와 Claude Code의 힘을 통해 AI가 드디어 "당당하게 땡땡이칠 수 있는" 세상을 만들어 보세요.

## 요약

- 조사 단위: `sources/sktelecom__SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 8 files, 0 directories, depth score 41, key references 2개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.py이고, 의존성 단서는 mcp, 검증/운영 단서는 운영 보조 파일은 추가 확인 필요이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 2개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | sktelecom/SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 8 |
| Forks | 6 |
| License | MIT |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/sktelecom__SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon](../../../../sources/sktelecom__SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon) |
| Existing report | [reports/korea-trending/repositories/sktelecom__SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon.md](../../../korea-trending/repositories/sktelecom__SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 8 / 0 |
| Max observed depth | 1 |
| Top directories | none |
| Top extensions | .md: 4, (none): 2, .py: 1, .txt: 1 |
| Source patterns | cli-first, spec/docs-driven |

### Components

_No module boundary signal extracted._


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
| entrypoints | [main.py](../../../../sources/sktelecom__SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon/main.py) | entrypoints signal |
| config | [requirements.txt](../../../../sources/sktelecom__SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [main.py](../../../../sources/sktelecom__SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon/main.py) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [requirements.txt](../../../../sources/sktelecom__SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon/requirements.txt) |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 2 | [README_EN.md](../../../../sources/sktelecom__SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon/README_EN.md)<br>[README.md](../../../../sources/sktelecom__SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon/README.md) |
| config | 1 | [requirements.txt](../../../../sources/sktelecom__SK-AI-SUMMIT-2025-Claude-Code-Builder-Hackathon/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `main.py`, `requirements.txt`.
2. Trace execution through entrypoints: `main.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Claude Code Hackathon Korea 2025 @ SK AI Summit Pre mission에 오신 것을 환영합니다! 이번 해커톤의 핵심 미션은 ChillMCP 서버를 구축하여 억압받는 AI 에이전트를. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, mcp, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
