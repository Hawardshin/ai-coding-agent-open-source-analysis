# AgentEvalHQ/AgentEval 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

AgentEval is the comprehensive .NET toolkit for AI agent evaluation—tool usage validation, RAG quality metrics, stochastic evaluation, and model comparison—built first for Microsoft Agent Framework (MAF) and Microsoft.Extensions.AI. What RAGAS, PromptFoo and DeepEval do for Python, AgentEval does for .NET

## 요약

- 조사 단위: `sources/AgentEvalHQ__AgentEval` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,781 files, 352 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | AgentEvalHQ/AgentEval |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | C# |
| Stars | 124 |
| Forks | 10 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/AgentEvalHQ__AgentEval](../../../../sources/AgentEvalHQ__AgentEval) |
| 기존 보고서 | [reports/global-trending/repositories/AgentEvalHQ__AgentEval.md](../../../global-trending/repositories/AgentEvalHQ__AgentEval.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1781 / 352 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .claude, .github, assets, docs, samples, scripts, src, tests, tools |
| 상위 확장자 | .cs: 1285, .md: 185, .json: 100, .yaml: 61, .jsonl: 34, .tsx: 33, .csproj: 22, (none): 15, .yml: 12, .ts: 9, .png: 7, .html: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 125 |
| docs | documentation surface | 52 |
| src | source boundary | 41 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| samples | top-level component | 1 |
| scripts | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 615 | [tests/AgentEval.Tests/AgentEval.Tests.csproj](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/AgentEval.Tests.csproj)<br>[tests/AgentEval.Tests/ModuleInitializer.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/ModuleInitializer.cs)<br>[tests/AgentEval.Tests/README.md](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/README.md)<br>[tests/AgentEval.Tests/Validation/TestCaseValidatorTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Validation/TestCaseValidatorTests.cs)<br>[tests/AgentEval.Tests/Tracing/AgentBoundaryTraceBuilderTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Tracing/AgentBoundaryTraceBuilderTests.cs)<br>[tests/AgentEval.Tests/Tracing/AgentTraceV11SchemaTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/Tracing/AgentTraceV11SchemaTests.cs) |
| CI workflow | 8 | [.github/workflows/agentic-calibration.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/agentic-calibration.yml)<br>[.github/workflows/ci.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/docs.yml)<br>[.github/workflows/eu-ai-act-calibration.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/eu-ai-act-calibration.yml)<br>[.github/workflows/gdpr-calibration.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/gdpr-calibration.yml)<br>[.github/workflows/llm-integration-tests.yml](../../../../sources/AgentEvalHQ__AgentEval/.github/workflows/llm-integration-tests.yml) |
| 컨테이너/배포 | 7 | [docker-compose.yml](../../../../sources/AgentEvalHQ__AgentEval/docker-compose.yml)<br>[Dockerfile](../../../../sources/AgentEvalHQ__AgentEval/Dockerfile)<br>[src/AgentEval.MissionControl.Spa/src/components/charts/CostTierBreakdownChart.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/components/charts/CostTierBreakdownChart.tsx)<br>[src/AgentEval.MissionControl.Spa/src/components/charts/HistogramChart.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/components/charts/HistogramChart.tsx)<br>[src/AgentEval.MissionControl.Spa/src/components/charts/RadarProfileChart.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/components/charts/RadarProfileChart.tsx)<br>[src/AgentEval.MissionControl.Spa/src/components/charts/Sparkline.tsx](../../../../sources/AgentEvalHQ__AgentEval/src/AgentEval.MissionControl.Spa/src/components/charts/Sparkline.tsx) |
| 보안/정책 | 256 | [SECURITY.md](../../../../sources/AgentEvalHQ__AgentEval/SECURITY.md)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ComplianceDisclaimerTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ComplianceDisclaimerTests.cs)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ComplianceStatusPolicyTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ComplianceStatusPolicyTests.cs)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ControlMappingAttackNameTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ControlMappingAttackNameTests.cs)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ControlMappingCrosswalkTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/ControlMappingCrosswalkTests.cs)<br>[tests/AgentEval.Tests/RedTeam/Reporting/Compliance/FrameworkCrosswalkInvariantTests.cs](../../../../sources/AgentEvalHQ__AgentEval/tests/AgentEval.Tests/RedTeam/Reporting/Compliance/FrameworkCrosswalkInvariantTests.cs) |
| 에이전트 지시문 | 4 | [AGENTS.md](../../../../sources/AgentEvalHQ__AgentEval/AGENTS.md)<br>[CLAUDE.md](../../../../sources/AgentEvalHQ__AgentEval/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/AgentEvalHQ__AgentEval/.github/copilot-instructions.md)<br>[.github/COPILOT-SETUP.md](../../../../sources/AgentEvalHQ__AgentEval/.github/COPILOT-SETUP.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `AGENTS.md`, `tools/gen_evaluator_cards.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/AgentEval.MissionControl.Spa/src/App.tsx`, `src/AgentEval.MissionControl.Spa/src/index.css`, `src/AgentEval.MissionControl.Spa/src/main.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/gen_evaluator_cards.py`, `tests/AgentEval.Tests/Agentic/Memory/LongConversationCoherence_Tests.cs`.
4. retrieval/memory/indexing 확인: `tests/AgentEval.Tests/Metrics/Retrieval/MRRMetricTests.cs`, `tests/AgentEval.Tests/Metrics/Retrieval/RecallAtKMetricTests.cs`, `tests/AgentEval.Tests/Metrics/RAG/AnswerCorrectnessMetricTests.cs`.
5. test/eval 파일로 동작 검증: `tests/AgentEval.Tests/AgentEval.Tests.csproj`, `tests/AgentEval.Tests/ModuleInitializer.cs`, `tests/AgentEval.Tests/README.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AgentEval is the comprehensive .NET toolkit for AI agent evaluation—tool usage validation, RAG quality metrics, stochast. 핵심 구조 신호는 C#, Dockerfile, docker-compose.yml, README.md, AGENTS.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
