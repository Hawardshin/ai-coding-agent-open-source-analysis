# AgentEvalHQ/AgentEval Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

AgentEval is the comprehensive .NET toolkit for AI agent evaluation—tool usage validation, RAG quality metrics, stochastic evaluation, and model comparison—built first for Microsoft Agent Framework (MAF) and Microsoft.Extensions.AI. What RAGAS, PromptFoo and DeepEval do for Python, AgentEval does for .NET

## 요약

- 조사 단위: `sources/AgentEvalHQ__AgentEval` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,781 files, 352 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | AgentEvalHQ/AgentEval |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C# |
| Stars | 124 |
| Forks | 10 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/AgentEvalHQ__AgentEval](../../../../sources/AgentEvalHQ__AgentEval) |
| Existing report | [reports/global-trending/repositories/AgentEvalHQ__AgentEval.md](../../../global-trending/repositories/AgentEvalHQ__AgentEval.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1781 / 352 |
| Max observed depth | 7 |
| Top directories | .claude, .github, assets, docs, samples, scripts, src, tests, tools |
| Top extensions | .cs: 1285, .md: 185, .json: 100, .yaml: 61, .jsonl: 34, .tsx: 33, .csproj: 22, (none): 15, .yml: 12, .ts: 9, .png: 7, .html: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 125 |
| docs | documentation surface | 52 |
| src | source boundary | 41 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| samples | top-level component | 1 |
| scripts | top-level component | 1 |
| tools | top-level component | 1 |


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
| mcp | [.mcp.json](../../../../sources/AgentEvalHQ__AgentEval/.mcp.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/AgentEvalHQ__AgentEval/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/gen_evaluator_cards.py](../../../../sources/AgentEvalHQ__AgentEval/tools/gen_evaluator_cards.py) | agentRuntime signal |
| agentRuntime | [tests/AgentEval.Tests/Agentic/Memory/LongConversationCoherence_Tests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Agentic/Memory/LongConversationCoherence_Tests.cs) | agentRuntime signal |
| agentRuntime | [tests/AgentEval.Tests/Agentic/Memory/MemoryRecall_Tests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Agentic/Memory/MemoryRecall_Tests.cs) | agentRuntime signal |
| entrypoints | [src/AgentEval.MissionControl.Spa/src/App.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/App.tsx) | entrypoints signal |
| entrypoints | [src/AgentEval.MissionControl.Spa/src/index.css](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/index.css) | entrypoints signal |
| entrypoints | [src/AgentEval.MissionControl.Spa/src/main.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/main.tsx) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/AgentEvalHQ__AgentEval/CLAUDE.md) | instruction signal |
| instruction | [.github/copilot-instructions.md](../../../../sources/AgentEvalHQ__AgentEval/.github/copilot-instructions.md) | instruction signal |
| instruction | [.github/COPILOT-SETUP.md](../../../../sources/AgentEvalHQ__AgentEval/.github/COPILOT-SETUP.md) | instruction signal |
| config | [src/AgentEval.MissionControl.Spa/package.json](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/package.json) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [src/AgentEval.MissionControl.Spa/src/App.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/App.tsx)<br>[src/AgentEval.MissionControl.Spa/src/index.css](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/index.css)<br>[src/AgentEval.MissionControl.Spa/src/main.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/main.tsx) |
| agentRuntime | 44 | [AGENTS.md](../../../../sources/AgentEvalHQ__AgentEval/AGENTS.md)<br>[tools/gen_evaluator_cards.py](../../../../sources/AgentEvalHQ__AgentEval/tools/gen_evaluator_cards.py)<br>[tests/AgentEval.Tests/Agentic/Memory/LongConversationCoherence_Tests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Agentic/Memory/LongConversationCoherence_Tests.cs)<br>[tests/AgentEval.Tests/Agentic/Memory/MemoryRecall_Tests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Agentic/Memory/MemoryRecall_Tests.cs)<br>[src/AgentEval.Memory/Data/corpus/Context-generation.md](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.Memory/Data/corpus/Context-generation.md)<br>[src/AgentEval.Memory/Data/corpus/context-large.json](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.Memory/Data/corpus/context-large.json)<br>[src/AgentEval.Memory/Data/corpus/context-medium.json](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.Memory/Data/corpus/context-medium.json)<br>[src/AgentEval.Memory/Data/corpus/context-small.json](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.Memory/Data/corpus/context-small.json) |
| mcp | 1 | [.mcp.json](../../../../sources/AgentEvalHQ__AgentEval/.mcp.json) |
| retrieval | 172 | [tests/AgentEval.Tests/Metrics/Retrieval/MRRMetricTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Metrics/Retrieval/MRRMetricTests.cs)<br>[tests/AgentEval.Tests/Metrics/Retrieval/RecallAtKMetricTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Metrics/Retrieval/RecallAtKMetricTests.cs)<br>[tests/AgentEval.Tests/Metrics/RAG/AnswerCorrectnessMetricTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Metrics/RAG/AnswerCorrectnessMetricTests.cs)<br>[tests/AgentEval.Tests/Metrics/RAG/ContextPrecisionMetricTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Metrics/RAG/ContextPrecisionMetricTests.cs)<br>[tests/AgentEval.Tests/Metrics/RAG/ContextRecallMetricTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Metrics/RAG/ContextRecallMetricTests.cs)<br>[tests/AgentEval.Tests/Metrics/RAG/EmbeddingSimilarityTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Metrics/RAG/EmbeddingSimilarityTests.cs)<br>[tests/AgentEval.Tests/Metrics/RAG/FaithfulnessMetricTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Metrics/RAG/FaithfulnessMetricTests.cs)<br>[tests/AgentEval.Tests/Metrics/RAG/RelevanceMetricTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Metrics/RAG/RelevanceMetricTests.cs) |
| spec | 26 | [tests/AgentEval.Tests/Compliance/Gdpr/Calibration/Golden/golden-pillar5-design-15.jsonl](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Compliance/Gdpr/Calibration/Golden/golden-pillar5-design-15.jsonl)<br>[src/AgentEval.Compliance.Gdpr/Articles/Yaml/art-25-privacy-by-design.yaml](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.Compliance.Gdpr/Articles/Yaml/art-25-privacy-by-design.yaml)<br>[docs/architecture.md](../../../../sources/AgentEvalHQ__AgentEval/docs/architecture.md)<br>[docs/eval-benchmark-architecture.md](../../../../sources/AgentEvalHQ__AgentEval/docs/eval-benchmark-architecture.md)<br>[docs/missioncontrol/api-design.md](../../../../sources/AgentEvalHQ__AgentEval/docs/missioncontrol/api-design.md)<br>[docs/adr/001-metric-naming-prefixes.md](../../../../sources/AgentEvalHQ__AgentEval/docs/adr/001-metric-naming-prefixes.md)<br>[docs/adr/002-result-directory-structure.md](../../../../sources/AgentEvalHQ__AgentEval/docs/adr/002-result-directory-structure.md)<br>[docs/adr/003-cli-review-commands.md](../../../../sources/AgentEvalHQ__AgentEval/docs/adr/003-cli-review-commands.md) |
| eval | 615 | [tests/AgentEval.Tests/AgentEval.Tests.csproj](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/AgentEval.Tests.csproj)<br>[tests/AgentEval.Tests/ModuleInitializer.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/ModuleInitializer.cs)<br>[tests/AgentEval.Tests/README.md](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/README.md)<br>[tests/AgentEval.Tests/Validation/TestCaseValidatorTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Validation/TestCaseValidatorTests.cs)<br>[tests/AgentEval.Tests/Tracing/AgentBoundaryTraceBuilderTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Tracing/AgentBoundaryTraceBuilderTests.cs)<br>[tests/AgentEval.Tests/Tracing/AgentTraceV11SchemaTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Tracing/AgentTraceV11SchemaTests.cs)<br>[tests/AgentEval.Tests/Tracing/ChatExecutionResultTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Tracing/ChatExecutionResultTests.cs)<br>[tests/AgentEval.Tests/Tracing/ChatTraceRecorderToolCallTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Tracing/ChatTraceRecorderToolCallTests.cs) |
| security | 256 | [SECURITY.md](../../../../sources/AgentEvalHQ__AgentEval/SECURITY.md)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ComplianceDisclaimerTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ComplianceDisclaimerTests.cs)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ComplianceStatusPolicyTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ComplianceStatusPolicyTests.cs)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ControlMappingAttackNameTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ControlMappingAttackNameTests.cs)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ControlMappingCrosswalkTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ControlMappingCrosswalkTests.cs)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/FrameworkCrosswalkInvariantTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/FrameworkCrosswalkInvariantTests.cs)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ISO27001ComplianceReporterTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ISO27001ComplianceReporterTests.cs)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/MITREATLASInvariantTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/MITREATLASInvariantTests.cs) |
| ci | 8 | [.github/workflows/agentic-calibration.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/agentic-calibration.yml)<br>[.github/workflows/ci.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/docs.yml)<br>[.github/workflows/eu-ai-act-calibration.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/eu-ai-act-calibration.yml)<br>[.github/workflows/gdpr-calibration.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/gdpr-calibration.yml)<br>[.github/workflows/llm-integration-tests.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/llm-integration-tests.yml)<br>[.github/workflows/release.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/release.yml)<br>[.github/workflows/security.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/security.yml) |
| container | 7 | [docker-compose.yml](../../../../sources/AgentEvalHQ__AgentEval/docker-compose.yml)<br>[Dockerfile](../../../../sources/AgentEvalHQ__AgentEval/Dockerfile)<br>[src/AgentEval.MissionControl.Spa/src/components/charts/CostTierBreakdownChart.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/components/charts/CostTierBreakdownChart.tsx)<br>[src/AgentEval.MissionControl.Spa/src/components/charts/HistogramChart.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/components/charts/HistogramChart.tsx)<br>[src/AgentEval.MissionControl.Spa/src/components/charts/RadarProfileChart.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/components/charts/RadarProfileChart.tsx)<br>[src/AgentEval.MissionControl.Spa/src/components/charts/Sparkline.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/components/charts/Sparkline.tsx)<br>[src/AgentEval.MissionControl.Spa/src/components/charts/TimelineChart.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/components/charts/TimelineChart.tsx) |
| instruction | 4 | [AGENTS.md](../../../../sources/AgentEvalHQ__AgentEval/AGENTS.md)<br>[CLAUDE.md](../../../../sources/AgentEvalHQ__AgentEval/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/AgentEvalHQ__AgentEval/.github/copilot-instructions.md)<br>[.github/COPILOT-SETUP.md](../../../../sources/AgentEvalHQ__AgentEval/.github/COPILOT-SETUP.md) |
| docs | 108 | [README.md](../../../../sources/AgentEvalHQ__AgentEval/README.md)<br>[tests/AgentEval.Tests/README.md](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/README.md)<br>[tests/AgentEval.Tests/Docs/CostGuidanceLockdownTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Docs/CostGuidanceLockdownTests.cs)<br>[src/AgentEval.MissionControl.Spa/README.md](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/README.md)<br>[src/AgentEval.Evals.Agentic/README.md](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.Evals.Agentic/README.md)<br>[src/AgentEval.Compliance.Gdpr/README.md](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.Compliance.Gdpr/README.md)<br>[src/AgentEval.Compliance.EuAiAct/README.md](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.Compliance.EuAiAct/README.md)<br>[src/AgentEval.Cli/README.md](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.Cli/README.md) |
| config | 2 | [src/AgentEval.MissionControl.Spa/package.json](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/package.json)<br>[src/AgentEval.MissionControl.Spa/tsconfig.json](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 615 | [tests/AgentEval.Tests/AgentEval.Tests.csproj](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/AgentEval.Tests.csproj)<br>[tests/AgentEval.Tests/ModuleInitializer.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/ModuleInitializer.cs)<br>[tests/AgentEval.Tests/README.md](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/README.md)<br>[tests/AgentEval.Tests/Validation/TestCaseValidatorTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Validation/TestCaseValidatorTests.cs)<br>[tests/AgentEval.Tests/Tracing/AgentBoundaryTraceBuilderTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Tracing/AgentBoundaryTraceBuilderTests.cs)<br>[tests/AgentEval.Tests/Tracing/AgentTraceV11SchemaTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Tracing/AgentTraceV11SchemaTests.cs) |
| CI workflows | 8 | [.github/workflows/agentic-calibration.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/agentic-calibration.yml)<br>[.github/workflows/ci.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/docs.yml)<br>[.github/workflows/eu-ai-act-calibration.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/eu-ai-act-calibration.yml)<br>[.github/workflows/gdpr-calibration.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/gdpr-calibration.yml)<br>[.github/workflows/llm-integration-tests.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/llm-integration-tests.yml) |
| Containers / deploy | 7 | [docker-compose.yml](../../../../sources/AgentEvalHQ__AgentEval/docker-compose.yml)<br>[Dockerfile](../../../../sources/AgentEvalHQ__AgentEval/Dockerfile)<br>[src/AgentEval.MissionControl.Spa/src/components/charts/CostTierBreakdownChart.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/components/charts/CostTierBreakdownChart.tsx)<br>[src/AgentEval.MissionControl.Spa/src/components/charts/HistogramChart.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/components/charts/HistogramChart.tsx)<br>[src/AgentEval.MissionControl.Spa/src/components/charts/RadarProfileChart.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/components/charts/RadarProfileChart.tsx)<br>[src/AgentEval.MissionControl.Spa/src/components/charts/Sparkline.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/components/charts/Sparkline.tsx) |
| Security / policy | 256 | [SECURITY.md](../../../../sources/AgentEvalHQ__AgentEval/SECURITY.md)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ComplianceDisclaimerTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ComplianceDisclaimerTests.cs)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ComplianceStatusPolicyTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ComplianceStatusPolicyTests.cs)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ControlMappingAttackNameTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ControlMappingAttackNameTests.cs)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ControlMappingCrosswalkTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ControlMappingCrosswalkTests.cs)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/FrameworkCrosswalkInvariantTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/FrameworkCrosswalkInvariantTests.cs) |
| Agent instructions | 4 | [AGENTS.md](../../../../sources/AgentEvalHQ__AgentEval/AGENTS.md)<br>[CLAUDE.md](../../../../sources/AgentEvalHQ__AgentEval/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/AgentEvalHQ__AgentEval/.github/copilot-instructions.md)<br>[.github/COPILOT-SETUP.md](../../../../sources/AgentEvalHQ__AgentEval/.github/COPILOT-SETUP.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.mcp.json`, `AGENTS.md`, `tools/gen_evaluator_cards.py`.
2. Trace execution through entrypoints: `src/AgentEval.MissionControl.Spa/src/App.tsx`, `src/AgentEval.MissionControl.Spa/src/index.css`, `src/AgentEval.MissionControl.Spa/src/main.tsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/gen_evaluator_cards.py`, `tests/AgentEval.Tests/Agentic/Memory/LongConversationCoherence_Tests.cs`.
4. Inspect retrieval/memory/indexing through: `tests/AgentEval.Tests/Metrics/Retrieval/MRRMetricTests.cs`, `tests/AgentEval.Tests/Metrics/Retrieval/RecallAtKMetricTests.cs`, `tests/AgentEval.Tests/Metrics/RAG/AnswerCorrectnessMetricTests.cs`.
5. Verify behavior through test/eval files: `tests/AgentEval.Tests/AgentEval.Tests.csproj`, `tests/AgentEval.Tests/ModuleInitializer.cs`, `tests/AgentEval.Tests/README.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 AgentEval is the comprehensive .NET toolkit for AI agent evaluation—tool usage validation, RAG quality metrics, stochast. 핵심 구조 신호는 C#, Dockerfile, docker-compose.yml, README.md, AGENTS.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
