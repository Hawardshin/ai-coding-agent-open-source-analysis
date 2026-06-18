# aws/agent-toolkit-for-aws Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Official, AWS-supported MCP servers, skills, and plugins to help AI agents build on AWS

## 요약

- 조사 단위: `sources/aws__agent-toolkit-for-aws` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 751 files, 240 directories, depth score 110, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=plugins/aws-data-analytics/.mcp.json, plugins/aws-core/.mcp.json, plugins/aws-agents-for-devsecops/.mcp.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | aws/agent-toolkit-for-aws |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 900 |
| Forks | 89 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/aws__agent-toolkit-for-aws](../../../../sources/aws__agent-toolkit-for-aws) |
| Existing report | [reports/global-trending/repositories/aws__agent-toolkit-for-aws.md](../../../global-trending/repositories/aws__agent-toolkit-for-aws.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 751 / 240 |
| Max observed depth | 7 |
| Top directories | .agents, .claude-plugin, .cursor-plugin, .github, plugins, rules, skills, tools |
| Top extensions | .md: 666, .json: 25, .py: 22, .yml: 11, .ts: 10, (none): 6, .yaml: 4, .csv: 2, .js: 2, .sh: 2, .toml: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| plugins | top-level component | 1 |
| rules | top-level component | 1 |
| skills | top-level component | 1 |
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
| mcp | [plugins/aws-data-analytics/.mcp.json](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-data-analytics/.mcp.json) | mcp signal |
| mcp | [plugins/aws-core/.mcp.json](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-core/.mcp.json) | mcp signal |
| mcp | [plugins/aws-agents-for-devsecops/.mcp.json](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-agents-for-devsecops/.mcp.json) | mcp signal |
| mcp | [plugins/aws-agents/.mcp.json](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-agents/.mcp.json) | mcp signal |
| agentRuntime | [tools/validate.py](../../../../sources/aws__agent-toolkit-for-aws/tools/validate.py) | agentRuntime signal |
| agentRuntime | [skills/README.md](../../../../sources/aws__agent-toolkit-for-aws/skills/README.md) | agentRuntime signal |
| agentRuntime | [skills/specialized-skills/system-table-skills/querying-aws-sagemaker-catalog/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/system-table-skills/querying-aws-sagemaker-catalog/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/specialized-skills/system-table-skills/querying-aws-s3/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/system-table-skills/querying-aws-s3/SKILL.md) | agentRuntime signal |
| config | [skills/specialized-skills/database-skills/amazon-keyspaces/scripts/package.json](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-keyspaces/scripts/package.json) | config signal |
| ci | [.github/workflows/build.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/build.yml) | ci support |
| ci | [.github/workflows/codeql.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/codeql.yml) | ci support |
| eval | [skills/specialized-skills/database-skills/amazon-elasticache/scripts/test_connection.py](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/scripts/test_connection.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 694 | [tools/validate.py](../../../../sources/aws__agent-toolkit-for-aws/tools/validate.py)<br>[skills/README.md](../../../../sources/aws__agent-toolkit-for-aws/skills/README.md)<br>[skills/specialized-skills/system-table-skills/querying-aws-sagemaker-catalog/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/system-table-skills/querying-aws-sagemaker-catalog/SKILL.md)<br>[skills/specialized-skills/system-table-skills/querying-aws-s3/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/system-table-skills/querying-aws-s3/SKILL.md)<br>[skills/specialized-skills/system-table-skills/querying-aws-cloudwatch/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/system-table-skills/querying-aws-cloudwatch/SKILL.md)<br>[skills/specialized-skills/storage-skills/troubleshooting-s3-files/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/storage-skills/troubleshooting-s3-files/SKILL.md)<br>[skills/specialized-skills/storage-skills/troubleshooting-efs/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/storage-skills/troubleshooting-efs/SKILL.md)<br>[skills/specialized-skills/storage-skills/storing-and-querying-vectors/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/storage-skills/storing-and-querying-vectors/SKILL.md) |
| mcp | 4 | [plugins/aws-data-analytics/.mcp.json](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-data-analytics/.mcp.json)<br>[plugins/aws-core/.mcp.json](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-core/.mcp.json)<br>[plugins/aws-agents-for-devsecops/.mcp.json](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-agents-for-devsecops/.mcp.json)<br>[plugins/aws-agents/.mcp.json](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-agents/.mcp.json) |
| retrieval | 22 | [skills/specialized-skills/database-skills/amazon-keyspaces/scripts/calculator/index.ts](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-keyspaces/scripts/calculator/index.ts)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/monitoring/slot-memory-imbalance-detection.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/monitoring/slot-memory-imbalance-detection.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/genai/agent-memory.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/genai/agent-memory.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/genai/embedding-providers.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/genai/embedding-providers.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/genai/rag-retrieval.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/genai/rag-retrieval.md)<br>[skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/bigquery-ingest.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/bigquery-ingest.md)<br>[skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/dynamodb-ingest.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/dynamodb-ingest.md)<br>[skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/jdbc-ingest.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/jdbc-ingest.md) |
| spec | 5 | [skills/specialized-skills/database-skills/amazon-elasticache/references/shared-foundation/architecture-diagrams.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/shared-foundation/architecture-diagrams.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/requirements/instructions.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/requirements/instructions.md)<br>[skills/specialized-skills/analytics-skills/developing-applications-on-managed-service-for-apache-flink/references/job-graph-architecture.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/developing-applications-on-managed-service-for-apache-flink/references/job-graph-architecture.md)<br>[skills/core-skills/aws-serverless/references/architecture.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-serverless/references/architecture.md)<br>[plugins/aws-core/skills/aws-serverless/references/architecture.md](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-core/skills/aws-serverless/references/architecture.md) |
| eval | 30 | [skills/specialized-skills/database-skills/amazon-elasticache/scripts/test_connection.py](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/scripts/test_connection.py)<br>[skills/specialized-skills/analytics-skills/managing-amazon-msk/references/monitor-and-alarm.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/managing-amazon-msk/references/monitor-and-alarm.md)<br>[skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/data-quality-validation.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/data-quality-validation.md)<br>[skills/core-skills/aws-observability/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/SKILL.md)<br>[skills/core-skills/aws-observability/references/alarms.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/references/alarms.md)<br>[skills/core-skills/aws-observability/references/cloudtrail.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/references/cloudtrail.md)<br>[skills/core-skills/aws-observability/references/dashboards.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/references/dashboards.md)<br>[skills/core-skills/aws-observability/references/log-insights.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/references/log-insights.md) |
| security | 39 | [skills/specialized-skills/storage-skills/securing-s3-buckets/references/audit-checklist.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/storage-skills/securing-s3-buckets/references/audit-checklist.md)<br>[skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/SKILL.md)<br>[skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/references/create-secrets-using-best-practices.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/references/create-secrets-using-best-practices.md)<br>[skills/specialized-skills/database-skills/amazon-keyspaces/references/security-considerations.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-keyspaces/references/security-considerations.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/scripts/security_audit.py](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/scripts/security_audit.py)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/config-guardrails.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/config-guardrails.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/encryption-defaults.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/encryption-defaults.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/vpc-patterns.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/vpc-patterns.md) |
| ci | 7 | [.github/workflows/build.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/build.yml)<br>[.github/workflows/codeql.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/dependency-review.yml)<br>[.github/workflows/merge-prevention.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/merge-prevention.yml)<br>[.github/workflows/pull-request-lint.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/pull-request-lint.yml)<br>[.github/workflows/scorecard-analysis.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/scorecard-analysis.yml)<br>[.github/workflows/stale.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/stale.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 6 | [README.md](../../../../sources/aws__agent-toolkit-for-aws/README.md)<br>[skills/README.md](../../../../sources/aws__agent-toolkit-for-aws/skills/README.md)<br>[plugins/aws-data-analytics/README.md](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-data-analytics/README.md)<br>[plugins/aws-core/README.md](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-core/README.md)<br>[plugins/aws-agents-for-devsecops/README.md](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-agents-for-devsecops/README.md)<br>[plugins/aws-agents/README.md](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-agents/README.md) |
| config | 1 | [skills/specialized-skills/database-skills/amazon-keyspaces/scripts/package.json](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-keyspaces/scripts/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 30 | [skills/specialized-skills/database-skills/amazon-elasticache/scripts/test_connection.py](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/scripts/test_connection.py)<br>[skills/specialized-skills/analytics-skills/managing-amazon-msk/references/monitor-and-alarm.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/managing-amazon-msk/references/monitor-and-alarm.md)<br>[skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/data-quality-validation.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/data-quality-validation.md)<br>[skills/core-skills/aws-observability/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/SKILL.md)<br>[skills/core-skills/aws-observability/references/alarms.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/references/alarms.md)<br>[skills/core-skills/aws-observability/references/cloudtrail.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/references/cloudtrail.md) |
| CI workflows | 7 | [.github/workflows/build.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/build.yml)<br>[.github/workflows/codeql.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/dependency-review.yml)<br>[.github/workflows/merge-prevention.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/merge-prevention.yml)<br>[.github/workflows/pull-request-lint.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/pull-request-lint.yml)<br>[.github/workflows/scorecard-analysis.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/scorecard-analysis.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 39 | [skills/specialized-skills/storage-skills/securing-s3-buckets/references/audit-checklist.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/storage-skills/securing-s3-buckets/references/audit-checklist.md)<br>[skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/SKILL.md)<br>[skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/references/create-secrets-using-best-practices.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/references/create-secrets-using-best-practices.md)<br>[skills/specialized-skills/database-skills/amazon-keyspaces/references/security-considerations.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-keyspaces/references/security-considerations.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/scripts/security_audit.py](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/scripts/security_audit.py)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/config-guardrails.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/config-guardrails.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `plugins/aws-data-analytics/.mcp.json`, `plugins/aws-core/.mcp.json`, `plugins/aws-agents-for-devsecops/.mcp.json`.
2. Map agent/tool runtime through: `tools/validate.py`, `skills/README.md`, `skills/specialized-skills/system-table-skills/querying-aws-sagemaker-catalog/SKILL.md`.
3. Inspect retrieval/memory/indexing through: `skills/specialized-skills/database-skills/amazon-keyspaces/scripts/calculator/index.ts`, `skills/specialized-skills/database-skills/amazon-elasticache/references/monitoring/slot-memory-imbalance-detection.md`, `skills/specialized-skills/database-skills/amazon-elasticache/references/genai/agent-memory.md`.
4. Verify behavior through test/eval files: `skills/specialized-skills/database-skills/amazon-elasticache/scripts/test_connection.py`, `skills/specialized-skills/analytics-skills/managing-amazon-msk/references/monitor-and-alarm.md`, `skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/data-quality-validation.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Official, AWS supported MCP servers, skills, and plugins to help AI agents build on AWS. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
