# caramador83/harness-100 Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Build 100 Claude Code harnesses for agent teams, with Korean and English support, across 10 domains for production use

## 요약

- 조사 단위: `sources/caramador83__harness-100` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,816 files, 1,432 directories, depth score 99, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=ko/99-sustainability-audit/.claude/skills/sustainability-audit/skill.md, ko/99-sustainability-audit/.claude/skills/materiality-assessment/skill.md, ko/99-sustainability-audit/.claude/skills/ghg-protocol/skill.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | caramador83/harness-100 |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/caramador83__harness-100](../../../../sources/caramador83__harness-100) |
| Existing report | [reports/korea-trending/repositories/caramador83__harness-100.md](../../../korea-trending/repositories/caramador83__harness-100.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1816 / 1432 |
| Max observed depth | 6 |
| Top directories | en, ko |
| Top extensions | .md: 1813, (none): 2, .zip: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| en | top-level component | 1 |
| ko | top-level component | 1 |


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
| agentRuntime | [ko/99-sustainability-audit/.claude/skills/sustainability-audit/skill.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/skills/sustainability-audit/skill.md) | agentRuntime signal |
| agentRuntime | [ko/99-sustainability-audit/.claude/skills/materiality-assessment/skill.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/skills/materiality-assessment/skill.md) | agentRuntime signal |
| agentRuntime | [ko/99-sustainability-audit/.claude/skills/ghg-protocol/skill.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/skills/ghg-protocol/skill.md) | agentRuntime signal |
| agentRuntime | [ko/99-sustainability-audit/.claude/agents/environmental-analyst.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/agents/environmental-analyst.md) | agentRuntime signal |
| instruction | [ko/99-sustainability-audit/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/CLAUDE.md) | instruction signal |
| instruction | [ko/98-academic-paper/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/98-academic-paper/.claude/CLAUDE.md) | instruction signal |
| instruction | [ko/97-ecommerce-launcher/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/97-ecommerce-launcher/.claude/CLAUDE.md) | instruction signal |
| instruction | [ko/96-real-estate-analyst/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/96-real-estate-analyst/.claude/CLAUDE.md) | instruction signal |
| eval | [ko/95-procurement-docs/.claude/agents/evaluation-designer.md](../../../../sources/caramador83__harness-100/ko/95-procurement-docs/.claude/agents/evaluation-designer.md) | eval support |
| eval | [ko/89-event-organizer/.claude/skills/venue-evaluation/skill.md](../../../../sources/caramador83__harness-100/ko/89-event-organizer/.claude/skills/venue-evaluation/skill.md) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1609 | [ko/99-sustainability-audit/.claude/skills/sustainability-audit/skill.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/skills/sustainability-audit/skill.md)<br>[ko/99-sustainability-audit/.claude/skills/materiality-assessment/skill.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/skills/materiality-assessment/skill.md)<br>[ko/99-sustainability-audit/.claude/skills/ghg-protocol/skill.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/skills/ghg-protocol/skill.md)<br>[ko/99-sustainability-audit/.claude/agents/environmental-analyst.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/agents/environmental-analyst.md)<br>[ko/99-sustainability-audit/.claude/agents/esg-reporter.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/agents/esg-reporter.md)<br>[ko/99-sustainability-audit/.claude/agents/governance-reviewer.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/agents/governance-reviewer.md)<br>[ko/99-sustainability-audit/.claude/agents/improvement-planner.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/agents/improvement-planner.md)<br>[ko/99-sustainability-audit/.claude/agents/social-assessor.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/agents/social-assessor.md) |
| mcp | 0 | not obvious |
| retrieval | 24 | [ko/92-operations-manual/.claude/skills/knowledge-base-design/skill.md](../../../../sources/caramador83__harness-100/ko/92-operations-manual/.claude/skills/knowledge-base-design/skill.md)<br>[ko/67-compliance-checker/.claude/skills/regulation-knowledge-base/skill.md](../../../../sources/caramador83__harness-100/ko/67-compliance-checker/.claude/skills/regulation-knowledge-base/skill.md)<br>[ko/64-knowledge-base-builder/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/64-knowledge-base-builder/.claude/CLAUDE.md)<br>[ko/64-knowledge-base-builder/.claude/skills/knowledge-base-builder/skill.md](../../../../sources/caramador83__harness-100/ko/64-knowledge-base-builder/.claude/skills/knowledge-base-builder/skill.md)<br>[ko/64-knowledge-base-builder/.claude/skills/information-architecture/skill.md](../../../../sources/caramador83__harness-100/ko/64-knowledge-base-builder/.claude/skills/information-architecture/skill.md)<br>[ko/64-knowledge-base-builder/.claude/skills/content-lifecycle-manager/skill.md](../../../../sources/caramador83__harness-100/ko/64-knowledge-base-builder/.claude/skills/content-lifecycle-manager/skill.md)<br>[ko/64-knowledge-base-builder/.claude/agents/knowledge-collector.md](../../../../sources/caramador83__harness-100/ko/64-knowledge-base-builder/.claude/agents/knowledge-collector.md)<br>[ko/64-knowledge-base-builder/.claude/agents/maintenance-planner.md](../../../../sources/caramador83__harness-100/ko/64-knowledge-base-builder/.claude/agents/maintenance-planner.md) |
| spec | 82 | [ko/95-procurement-docs/.claude/agents/acceptance-builder.md](../../../../sources/caramador83__harness-100/ko/95-procurement-docs/.claude/agents/acceptance-builder.md)<br>[ko/95-procurement-docs/.claude/agents/requirements-definer.md](../../../../sources/caramador83__harness-100/ko/95-procurement-docs/.claude/agents/requirements-definer.md)<br>[ko/92-operations-manual/.claude/skills/knowledge-base-design/skill.md](../../../../sources/caramador83__harness-100/ko/92-operations-manual/.claude/skills/knowledge-base-design/skill.md)<br>[ko/91-onboarding-system/.claude/skills/learning-path-design/skill.md](../../../../sources/caramador83__harness-100/ko/91-onboarding-system/.claude/skills/learning-path-design/skill.md)<br>[ko/83-sop-writer/.claude/skills/checklist-design/skill.md](../../../../sources/caramador83__harness-100/ko/83-sop-writer/.claude/skills/checklist-design/skill.md)<br>[ko/79-side-project-launcher/.claude/agents/roadmap-builder.md](../../../../sources/caramador83__harness-100/ko/79-side-project-launcher/.claude/agents/roadmap-builder.md)<br>[ko/72-regulatory-filing/.claude/skills/permit-requirements-db/skill.md](../../../../sources/caramador83__harness-100/ko/72-regulatory-filing/.claude/skills/permit-requirements-db/skill.md)<br>[ko/72-regulatory-filing/.claude/agents/requirements-investigator.md](../../../../sources/caramador83__harness-100/ko/72-regulatory-filing/.claude/agents/requirements-investigator.md) |
| eval | 66 | [ko/95-procurement-docs/.claude/agents/evaluation-designer.md](../../../../sources/caramador83__harness-100/ko/95-procurement-docs/.claude/agents/evaluation-designer.md)<br>[ko/89-event-organizer/.claude/skills/venue-evaluation/skill.md](../../../../sources/caramador83__harness-100/ko/89-event-organizer/.claude/skills/venue-evaluation/skill.md)<br>[ko/89-event-organizer/.claude/agents/evaluation-analyst.md](../../../../sources/caramador83__harness-100/ko/89-event-organizer/.claude/agents/evaluation-analyst.md)<br>[ko/87-crisis-communication/.claude/agents/media-monitor.md](../../../../sources/caramador83__harness-100/ko/87-crisis-communication/.claude/agents/media-monitor.md)<br>[ko/62-adr-writer/.claude/skills/quality-attribute-analyzer/skill.md](../../../../sources/caramador83__harness-100/ko/62-adr-writer/.claude/skills/quality-attribute-analyzer/skill.md)<br>[ko/51-investor-report/.claude/skills/kpi-benchmark-engine/skill.md](../../../../sources/caramador83__harness-100/ko/51-investor-report/.claude/skills/kpi-benchmark-engine/skill.md)<br>[ko/47-strategy-framework/.claude/skills/okr-quality-checker/skill.md](../../../../sources/caramador83__harness-100/ko/47-strategy-framework/.claude/skills/okr-quality-checker/skill.md)<br>[ko/41-llm-app-builder/.claude/agents/eval-specialist.md](../../../../sources/caramador83__harness-100/ko/41-llm-app-builder/.claude/agents/eval-specialist.md) |
| security | 86 | [ko/99-sustainability-audit/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/CLAUDE.md)<br>[ko/99-sustainability-audit/.claude/skills/sustainability-audit/skill.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/skills/sustainability-audit/skill.md)<br>[ko/99-sustainability-audit/.claude/skills/materiality-assessment/skill.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/skills/materiality-assessment/skill.md)<br>[ko/99-sustainability-audit/.claude/skills/ghg-protocol/skill.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/skills/ghg-protocol/skill.md)<br>[ko/99-sustainability-audit/.claude/agents/environmental-analyst.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/agents/environmental-analyst.md)<br>[ko/99-sustainability-audit/.claude/agents/esg-reporter.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/agents/esg-reporter.md)<br>[ko/99-sustainability-audit/.claude/agents/governance-reviewer.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/agents/governance-reviewer.md)<br>[ko/99-sustainability-audit/.claude/agents/improvement-planner.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/agents/improvement-planner.md) |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 200 | [ko/99-sustainability-audit/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/CLAUDE.md)<br>[ko/98-academic-paper/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/98-academic-paper/.claude/CLAUDE.md)<br>[ko/97-ecommerce-launcher/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/97-ecommerce-launcher/.claude/CLAUDE.md)<br>[ko/96-real-estate-analyst/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/96-real-estate-analyst/.claude/CLAUDE.md)<br>[ko/95-procurement-docs/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/95-procurement-docs/.claude/CLAUDE.md)<br>[ko/94-audit-report/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/94-audit-report/.claude/CLAUDE.md)<br>[ko/93-feedback-analyzer/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/93-feedback-analyzer/.claude/CLAUDE.md)<br>[ko/92-operations-manual/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/92-operations-manual/.claude/CLAUDE.md) |
| docs | 4 | [README_ko.md](../../../../sources/caramador83__harness-100/README_ko.md)<br>[README.md](../../../../sources/caramador83__harness-100/README.md)<br>[ko/README.md](../../../../sources/caramador83__harness-100/ko/README.md)<br>[en/README.md](../../../../sources/caramador83__harness-100/en/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 66 | [ko/95-procurement-docs/.claude/agents/evaluation-designer.md](../../../../sources/caramador83__harness-100/ko/95-procurement-docs/.claude/agents/evaluation-designer.md)<br>[ko/89-event-organizer/.claude/skills/venue-evaluation/skill.md](../../../../sources/caramador83__harness-100/ko/89-event-organizer/.claude/skills/venue-evaluation/skill.md)<br>[ko/89-event-organizer/.claude/agents/evaluation-analyst.md](../../../../sources/caramador83__harness-100/ko/89-event-organizer/.claude/agents/evaluation-analyst.md)<br>[ko/87-crisis-communication/.claude/agents/media-monitor.md](../../../../sources/caramador83__harness-100/ko/87-crisis-communication/.claude/agents/media-monitor.md)<br>[ko/62-adr-writer/.claude/skills/quality-attribute-analyzer/skill.md](../../../../sources/caramador83__harness-100/ko/62-adr-writer/.claude/skills/quality-attribute-analyzer/skill.md)<br>[ko/51-investor-report/.claude/skills/kpi-benchmark-engine/skill.md](../../../../sources/caramador83__harness-100/ko/51-investor-report/.claude/skills/kpi-benchmark-engine/skill.md) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 86 | [ko/99-sustainability-audit/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/CLAUDE.md)<br>[ko/99-sustainability-audit/.claude/skills/sustainability-audit/skill.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/skills/sustainability-audit/skill.md)<br>[ko/99-sustainability-audit/.claude/skills/materiality-assessment/skill.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/skills/materiality-assessment/skill.md)<br>[ko/99-sustainability-audit/.claude/skills/ghg-protocol/skill.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/skills/ghg-protocol/skill.md)<br>[ko/99-sustainability-audit/.claude/agents/environmental-analyst.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/agents/environmental-analyst.md)<br>[ko/99-sustainability-audit/.claude/agents/esg-reporter.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/agents/esg-reporter.md) |
| Agent instructions | 200 | [ko/99-sustainability-audit/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/99-sustainability-audit/.claude/CLAUDE.md)<br>[ko/98-academic-paper/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/98-academic-paper/.claude/CLAUDE.md)<br>[ko/97-ecommerce-launcher/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/97-ecommerce-launcher/.claude/CLAUDE.md)<br>[ko/96-real-estate-analyst/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/96-real-estate-analyst/.claude/CLAUDE.md)<br>[ko/95-procurement-docs/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/95-procurement-docs/.claude/CLAUDE.md)<br>[ko/94-audit-report/.claude/CLAUDE.md](../../../../sources/caramador83__harness-100/ko/94-audit-report/.claude/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `ko/99-sustainability-audit/.claude/skills/sustainability-audit/skill.md`, `ko/99-sustainability-audit/.claude/skills/materiality-assessment/skill.md`, `ko/99-sustainability-audit/.claude/skills/ghg-protocol/skill.md`.
2. Map agent/tool runtime through: `ko/99-sustainability-audit/.claude/skills/sustainability-audit/skill.md`, `ko/99-sustainability-audit/.claude/skills/materiality-assessment/skill.md`, `ko/99-sustainability-audit/.claude/skills/ghg-protocol/skill.md`.
3. Inspect retrieval/memory/indexing through: `ko/92-operations-manual/.claude/skills/knowledge-base-design/skill.md`, `ko/67-compliance-checker/.claude/skills/regulation-knowledge-base/skill.md`, `ko/64-knowledge-base-builder/.claude/CLAUDE.md`.
4. Verify behavior through test/eval files: `ko/95-procurement-docs/.claude/agents/evaluation-designer.md`, `ko/89-event-organizer/.claude/skills/venue-evaluation/skill.md`, `ko/89-event-organizer/.claude/agents/evaluation-analyst.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Build 100 Claude Code harnesses for agent teams, with Korean and English support, across 10 domains for production use. 핵심 구조 신호는 README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
