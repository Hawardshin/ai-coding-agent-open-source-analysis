# lowtidebuild/data-protection-agent Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Unified privacy research agent for EU GDPR · Korea PIPA · California (CCPA-as-amended-by-CPRA). 2,195 indexed authorities · 30+ citation audit checks · 234 tests · DOCX/HTML legal-opinion deliverables. Built for Claude Code; part of the KP Legal Orchestrator.

## 요약

- 조사 단위: `sources/lowtidebuild__data-protection-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,975 files, 155 directories, depth score 109, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, docs/agent-protocol.md, .claude/skills/trust-boundary/SKILL.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | lowtidebuild/data-protection-agent |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/lowtidebuild__data-protection-agent](../../../../sources/lowtidebuild__data-protection-agent) |
| Existing report | [reports/korea-trending/repositories/lowtidebuild__data-protection-agent.md](../../../korea-trending/repositories/lowtidebuild__data-protection-agent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2975 / 155 |
| Max observed depth | 6 |
| Top directories | .claude, .githooks, .github, config, cross_jurisdiction_auditor, docs, index, kb, knowledge, scripts, sources, templates, tests, unified_auditor |
| Top extensions | .md: 2593, .json: 175, .py: 72, .txt: 47, .pdf: 43, .html: 31, (none): 13, .yml: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 19 |
| docs | documentation surface | 13 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| cross_jurisdiction_auditor | top-level component | 1 |
| index | top-level component | 1 |
| kb | top-level component | 1 |
| knowledge | top-level component | 1 |
| scripts | top-level component | 1 |
| sources | top-level component | 1 |
| templates | top-level component | 1 |
| unified_auditor | top-level component | 1 |


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
| agentRuntime | [AGENTS.md](../../../../sources/lowtidebuild__data-protection-agent/AGENTS.md) | agentRuntime signal |
| agentRuntime | [docs/agent-protocol.md](../../../../sources/lowtidebuild__data-protection-agent/docs/agent-protocol.md) | agentRuntime signal |
| agentRuntime | [.claude/skills/trust-boundary/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/trust-boundary/SKILL.md) | agentRuntime signal |
| agentRuntime | [.claude/skills/result-memo-composition/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/result-memo-composition/SKILL.md) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/lowtidebuild__data-protection-agent/CLAUDE.md) | instruction signal |
| instruction | [sources/us-ca/CLAUDE.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/CLAUDE.md) | instruction signal |
| config | [requirements.txt](../../../../sources/lowtidebuild__data-protection-agent/requirements.txt) | config signal |
| config | [sources/us-ca/requirements.txt](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/requirements.txt) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/lowtidebuild__data-protection-agent/.github/workflows/ci.yml) | ci support |
| eval | [tests/test_coverage_report_all.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_all.py) | eval support |
| eval | [tests/test_coverage_report_eu.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_eu.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 13 | [AGENTS.md](../../../../sources/lowtidebuild__data-protection-agent/AGENTS.md)<br>[docs/agent-protocol.md](../../../../sources/lowtidebuild__data-protection-agent/docs/agent-protocol.md)<br>[.claude/skills/trust-boundary/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/trust-boundary/SKILL.md)<br>[.claude/skills/result-memo-composition/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/result-memo-composition/SKILL.md)<br>[.claude/skills/quality-check/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/quality-check/SKILL.md)<br>[.claude/skills/output-mode-composition/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/output-mode-composition/SKILL.md)<br>[.claude/skills/legal-writing-formatter/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/legal-writing-formatter/SKILL.md)<br>[.claude/skills/kb-retrieval/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/kb-retrieval/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 51 | [sources/us-ca/tests/test_california_topic_index.py](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/tests/test_california_topic_index.py)<br>[sources/us-ca/index/ca-adjacent-statute-index.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/index/ca-adjacent-statute-index.json)<br>[sources/us-ca/index/ca-case-index.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/index/ca-case-index.json)<br>[sources/us-ca/index/ca-citation-map.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/index/ca-citation-map.json)<br>[sources/us-ca/index/ca-enforcement-index.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/index/ca-enforcement-index.json)<br>[sources/us-ca/index/ca-guidance-index.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/index/ca-guidance-index.json)<br>[sources/us-ca/index/ca-regulation-index.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/index/ca-regulation-index.json)<br>[sources/us-ca/index/ca-statute-index.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/index/ca-statute-index.json) |
| spec | 20 | [requirements.txt](../../../../sources/lowtidebuild__data-protection-agent/requirements.txt)<br>[sources/us-ca/requirements.txt](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/requirements.txt)<br>[sources/us-ca/raw/official/leginfo/ca-age-appropriate-design-code.html](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/raw/official/leginfo/ca-age-appropriate-design-code.html)<br>[sources/us-ca/raw/official/leginfo/ca-age-appropriate-design-code.html.meta.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/raw/official/leginfo/ca-age-appropriate-design-code.html.meta.json)<br>[sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.28.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.28.md)<br>[sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.29.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.29.md)<br>[sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.30.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.30.md)<br>[sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.31.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.31.md) |
| eval | 39 | [tests/test_coverage_report_all.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_all.py)<br>[tests/test_coverage_report_eu.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_eu.py)<br>[tests/test_coverage_report_kr.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_kr.py)<br>[tests/test_coverage_report.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report.py)<br>[tests/test_cross_jurisdiction_audit.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_cross_jurisdiction_audit.py)<br>[tests/test_e2e_agent_pipeline.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_e2e_agent_pipeline.py)<br>[tests/test_golden_set_evaluation.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_golden_set_evaluation.py)<br>[tests/test_integration_full.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_integration_full.py) |
| security | 14 | [tests/test_cross_jurisdiction_audit.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_cross_jurisdiction_audit.py)<br>[tests/test_unified_audit.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_unified_audit.py)<br>[sources/us-ca/tests/test_california_citation_audit.py](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/tests/test_california_citation_audit.py)<br>[sources/us-ca/tests/fixtures/audit_bad_answer.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/tests/fixtures/audit_bad_answer.md)<br>[sources/us-ca/scripts/audit-california-citations.py](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/scripts/audit-california-citations.py)<br>[sources/kr-pipa/tests/test_korea_citation_audit.py](../../../../sources/lowtidebuild__data-protection-agent/sources/kr-pipa/tests/test_korea_citation_audit.py)<br>[sources/kr-pipa/scripts/audit-korea-citations.py](../../../../sources/lowtidebuild__data-protection-agent/sources/kr-pipa/scripts/audit-korea-citations.py)<br>[sources/eu-gdpr/tests/test_europe_citation_audit.py](../../../../sources/lowtidebuild__data-protection-agent/sources/eu-gdpr/tests/test_europe_citation_audit.py) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/lowtidebuild__data-protection-agent/.github/workflows/ci.yml) |
| container | 0 | not obvious |
| instruction | 3 | [AGENTS.md](../../../../sources/lowtidebuild__data-protection-agent/AGENTS.md)<br>[CLAUDE.md](../../../../sources/lowtidebuild__data-protection-agent/CLAUDE.md)<br>[sources/us-ca/CLAUDE.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/CLAUDE.md) |
| docs | 22 | [README.ko.md](../../../../sources/lowtidebuild__data-protection-agent/README.ko.md)<br>[README.md](../../../../sources/lowtidebuild__data-protection-agent/README.md)<br>[sources/us-ca/README.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/README.md)<br>[sources/us-ca/library/grade-c/case-discovery/README.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-c/case-discovery/README.md)<br>[sources/us-ca/library/grade-b/case-materials/README.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-b/case-materials/README.md)<br>[sources/us-ca/library/grade-b/ca-rulemaking-reasons/README.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-b/ca-rulemaking-reasons/README.md)<br>[sources/us-ca/library/grade-b/ca-courts-unpublished-opinions/README.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-b/ca-courts-unpublished-opinions/README.md)<br>[kb/us-ca/library/grade-c/case-discovery/README.md](../../../../sources/lowtidebuild__data-protection-agent/kb/us-ca/library/grade-c/case-discovery/README.md) |
| config | 2 | [requirements.txt](../../../../sources/lowtidebuild__data-protection-agent/requirements.txt)<br>[sources/us-ca/requirements.txt](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 39 | [tests/test_coverage_report_all.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_all.py)<br>[tests/test_coverage_report_eu.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_eu.py)<br>[tests/test_coverage_report_kr.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_kr.py)<br>[tests/test_coverage_report.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report.py)<br>[tests/test_cross_jurisdiction_audit.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_cross_jurisdiction_audit.py)<br>[tests/test_e2e_agent_pipeline.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_e2e_agent_pipeline.py) |
| CI workflows | 1 | [.github/workflows/ci.yml](../../../../sources/lowtidebuild__data-protection-agent/.github/workflows/ci.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 14 | [tests/test_cross_jurisdiction_audit.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_cross_jurisdiction_audit.py)<br>[tests/test_unified_audit.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_unified_audit.py)<br>[sources/us-ca/tests/test_california_citation_audit.py](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/tests/test_california_citation_audit.py)<br>[sources/us-ca/tests/fixtures/audit_bad_answer.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/tests/fixtures/audit_bad_answer.md)<br>[sources/us-ca/scripts/audit-california-citations.py](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/scripts/audit-california-citations.py)<br>[sources/kr-pipa/tests/test_korea_citation_audit.py](../../../../sources/lowtidebuild__data-protection-agent/sources/kr-pipa/tests/test_korea_citation_audit.py) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/lowtidebuild__data-protection-agent/AGENTS.md)<br>[CLAUDE.md](../../../../sources/lowtidebuild__data-protection-agent/CLAUDE.md)<br>[sources/us-ca/CLAUDE.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `AGENTS.md`, `docs/agent-protocol.md`, `.claude/skills/trust-boundary/SKILL.md`.
2. Map agent/tool runtime through: `AGENTS.md`, `docs/agent-protocol.md`, `.claude/skills/trust-boundary/SKILL.md`.
3. Inspect retrieval/memory/indexing through: `sources/us-ca/tests/test_california_topic_index.py`, `sources/us-ca/index/ca-adjacent-statute-index.json`, `sources/us-ca/index/ca-case-index.json`.
4. Verify behavior through test/eval files: `tests/test_coverage_report_all.py`, `tests/test_coverage_report_eu.py`, `tests/test_coverage_report_kr.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Unified privacy research agent for EU GDPR · Korea PIPA · California CCPA as amended by CPRA . 2,195 indexed authorities. 핵심 구조 신호는 Python, requirements.txt, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
