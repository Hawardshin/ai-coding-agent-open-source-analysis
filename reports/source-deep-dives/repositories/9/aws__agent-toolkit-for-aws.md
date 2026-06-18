# aws/agent-toolkit-for-aws 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Official, AWS-supported MCP servers, skills, and plugins to help AI agents build on AWS

## 요약

- 조사 단위: `sources/aws__agent-toolkit-for-aws` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 751 files, 240 directories, depth score 104, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=plugins/aws-data-analytics/.mcp.json, plugins/aws-core/.mcp.json, plugins/aws-agents-for-devsecops/.mcp.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | aws/agent-toolkit-for-aws |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 900 |
| Forks | 89 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/aws__agent-toolkit-for-aws](../../../../sources/aws__agent-toolkit-for-aws) |
| 기존 보고서 | [reports/global-trending/repositories/aws__agent-toolkit-for-aws.md](../../../global-trending/repositories/aws__agent-toolkit-for-aws.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 751 / 240 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .agents, .claude-plugin, .cursor-plugin, .github, plugins, rules, skills, tools |
| 상위 확장자 | .md: 666, .json: 25, .py: 22, .yml: 11, .ts: 10, (none): 6, .yaml: 4, .csv: 2, .js: 2, .sh: 2, .toml: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| plugins | top-level component | 1 |
| rules | top-level component | 1 |
| skills | top-level component | 1 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 694 | [tools/validate.py](../../../../sources/aws__agent-toolkit-for-aws/tools/validate.py)<br>[skills/README.md](../../../../sources/aws__agent-toolkit-for-aws/skills/README.md)<br>[skills/specialized-skills/system-table-skills/querying-aws-sagemaker-catalog/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/system-table-skills/querying-aws-sagemaker-catalog/SKILL.md)<br>[skills/specialized-skills/system-table-skills/querying-aws-s3/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/system-table-skills/querying-aws-s3/SKILL.md)<br>[skills/specialized-skills/system-table-skills/querying-aws-cloudwatch/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/system-table-skills/querying-aws-cloudwatch/SKILL.md)<br>[skills/specialized-skills/storage-skills/troubleshooting-s3-files/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/storage-skills/troubleshooting-s3-files/SKILL.md)<br>[skills/specialized-skills/storage-skills/troubleshooting-efs/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/storage-skills/troubleshooting-efs/SKILL.md)<br>[skills/specialized-skills/storage-skills/storing-and-querying-vectors/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/storage-skills/storing-and-querying-vectors/SKILL.md) |
| mcp | 4 | [plugins/aws-data-analytics/.mcp.json](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-data-analytics/.mcp.json)<br>[plugins/aws-core/.mcp.json](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-core/.mcp.json)<br>[plugins/aws-agents-for-devsecops/.mcp.json](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-agents-for-devsecops/.mcp.json)<br>[plugins/aws-agents/.mcp.json](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-agents/.mcp.json) |
| retrieval | 22 | [skills/specialized-skills/database-skills/amazon-keyspaces/scripts/calculator/index.ts](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-keyspaces/scripts/calculator/index.ts)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/monitoring/slot-memory-imbalance-detection.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/monitoring/slot-memory-imbalance-detection.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/genai/agent-memory.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/genai/agent-memory.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/genai/embedding-providers.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/genai/embedding-providers.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/genai/rag-retrieval.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/genai/rag-retrieval.md)<br>[skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/bigquery-ingest.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/bigquery-ingest.md)<br>[skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/dynamodb-ingest.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/dynamodb-ingest.md)<br>[skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/jdbc-ingest.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/jdbc-ingest.md) |
| spec | 5 | [skills/specialized-skills/database-skills/amazon-elasticache/references/shared-foundation/architecture-diagrams.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/shared-foundation/architecture-diagrams.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/requirements/instructions.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/requirements/instructions.md)<br>[skills/specialized-skills/analytics-skills/developing-applications-on-managed-service-for-apache-flink/references/job-graph-architecture.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/developing-applications-on-managed-service-for-apache-flink/references/job-graph-architecture.md)<br>[skills/core-skills/aws-serverless/references/architecture.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-serverless/references/architecture.md)<br>[plugins/aws-core/skills/aws-serverless/references/architecture.md](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-core/skills/aws-serverless/references/architecture.md) |
| eval | 30 | [skills/specialized-skills/database-skills/amazon-elasticache/scripts/test_connection.py](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/scripts/test_connection.py)<br>[skills/specialized-skills/analytics-skills/managing-amazon-msk/references/monitor-and-alarm.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/managing-amazon-msk/references/monitor-and-alarm.md)<br>[skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/data-quality-validation.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/data-quality-validation.md)<br>[skills/core-skills/aws-observability/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/SKILL.md)<br>[skills/core-skills/aws-observability/references/alarms.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/references/alarms.md)<br>[skills/core-skills/aws-observability/references/cloudtrail.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/references/cloudtrail.md)<br>[skills/core-skills/aws-observability/references/dashboards.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/references/dashboards.md)<br>[skills/core-skills/aws-observability/references/log-insights.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/references/log-insights.md) |
| security | 39 | [skills/specialized-skills/storage-skills/securing-s3-buckets/references/audit-checklist.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/storage-skills/securing-s3-buckets/references/audit-checklist.md)<br>[skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/SKILL.md)<br>[skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/references/create-secrets-using-best-practices.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/references/create-secrets-using-best-practices.md)<br>[skills/specialized-skills/database-skills/amazon-keyspaces/references/security-considerations.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-keyspaces/references/security-considerations.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/scripts/security_audit.py](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/scripts/security_audit.py)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/config-guardrails.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/config-guardrails.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/encryption-defaults.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/encryption-defaults.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/vpc-patterns.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/vpc-patterns.md) |
| ci | 7 | [.github/workflows/build.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/build.yml)<br>[.github/workflows/codeql.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/dependency-review.yml)<br>[.github/workflows/merge-prevention.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/merge-prevention.yml)<br>[.github/workflows/pull-request-lint.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/pull-request-lint.yml)<br>[.github/workflows/scorecard-analysis.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/scorecard-analysis.yml)<br>[.github/workflows/stale.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/stale.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 6 | [README.md](../../../../sources/aws__agent-toolkit-for-aws/README.md)<br>[skills/README.md](../../../../sources/aws__agent-toolkit-for-aws/skills/README.md)<br>[plugins/aws-data-analytics/README.md](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-data-analytics/README.md)<br>[plugins/aws-core/README.md](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-core/README.md)<br>[plugins/aws-agents-for-devsecops/README.md](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-agents-for-devsecops/README.md)<br>[plugins/aws-agents/README.md](../../../../sources/aws__agent-toolkit-for-aws/plugins/aws-agents/README.md) |
| config | 1 | [skills/specialized-skills/database-skills/amazon-keyspaces/scripts/package.json](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-keyspaces/scripts/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 30 | [skills/specialized-skills/database-skills/amazon-elasticache/scripts/test_connection.py](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/scripts/test_connection.py)<br>[skills/specialized-skills/analytics-skills/managing-amazon-msk/references/monitor-and-alarm.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/managing-amazon-msk/references/monitor-and-alarm.md)<br>[skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/data-quality-validation.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/data-quality-validation.md)<br>[skills/core-skills/aws-observability/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/SKILL.md)<br>[skills/core-skills/aws-observability/references/alarms.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/references/alarms.md)<br>[skills/core-skills/aws-observability/references/cloudtrail.md](../../../../sources/aws__agent-toolkit-for-aws/skills/core-skills/aws-observability/references/cloudtrail.md) |
| CI workflow | 7 | [.github/workflows/build.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/build.yml)<br>[.github/workflows/codeql.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/codeql.yml)<br>[.github/workflows/dependency-review.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/dependency-review.yml)<br>[.github/workflows/merge-prevention.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/merge-prevention.yml)<br>[.github/workflows/pull-request-lint.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/pull-request-lint.yml)<br>[.github/workflows/scorecard-analysis.yml](../../../../sources/aws__agent-toolkit-for-aws/.github/workflows/scorecard-analysis.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 39 | [skills/specialized-skills/storage-skills/securing-s3-buckets/references/audit-checklist.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/storage-skills/securing-s3-buckets/references/audit-checklist.md)<br>[skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/SKILL.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/SKILL.md)<br>[skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/references/create-secrets-using-best-practices.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/security-and-identity-skills/creating-secrets-using-best-practices/references/create-secrets-using-best-practices.md)<br>[skills/specialized-skills/database-skills/amazon-keyspaces/references/security-considerations.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-keyspaces/references/security-considerations.md)<br>[skills/specialized-skills/database-skills/amazon-elasticache/scripts/security_audit.py](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/scripts/security_audit.py)<br>[skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/config-guardrails.md](../../../../sources/aws__agent-toolkit-for-aws/skills/specialized-skills/database-skills/amazon-elasticache/references/shared-security/config-guardrails.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `plugins/aws-data-analytics/.mcp.json`, `plugins/aws-core/.mcp.json`, `plugins/aws-agents-for-devsecops/.mcp.json`.
2. agent/tool runtime 매핑: `tools/validate.py`, `skills/README.md`, `skills/specialized-skills/system-table-skills/querying-aws-sagemaker-catalog/SKILL.md`.
3. retrieval/memory/indexing 확인: `skills/specialized-skills/database-skills/amazon-keyspaces/scripts/calculator/index.ts`, `skills/specialized-skills/database-skills/amazon-elasticache/references/monitoring/slot-memory-imbalance-detection.md`, `skills/specialized-skills/database-skills/amazon-elasticache/references/genai/agent-memory.md`.
4. test/eval 파일로 동작 검증: `skills/specialized-skills/database-skills/amazon-elasticache/scripts/test_connection.py`, `skills/specialized-skills/analytics-skills/managing-amazon-msk/references/monitor-and-alarm.md`, `skills/specialized-skills/analytics-skills/ingesting-into-data-lake/references/data-quality-validation.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Official, AWS supported MCP servers, skills, and plugins to help AI agents build on AWS. 핵심 구조 신호는 Python, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
