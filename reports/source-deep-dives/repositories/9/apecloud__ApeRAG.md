# apecloud/ApeRAG Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

ApeRAG: Production-ready GraphRAG with multi-modal indexing, AI agents, MCP support, and scalable K8s deployment

## 요약

- 조사 단위: `sources/apecloud__ApeRAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,196 files, 203 directories, depth score 128, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=web/public/images/zh-CN/dify/step2-add-mcp.png, web/public/images/zh-CN/dify/step2-configure-mcp.png, web/public/images/zh-CN/dify/step2-mcp-success.png이고, 의존성 단서는 openai, mcp, langchain, llama-index, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | apecloud/ApeRAG |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 1193 |
| Forks | 132 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/apecloud__ApeRAG](../../../../sources/apecloud__ApeRAG) |
| Existing report | [reports/llm-wiki/repositories/apecloud__ApeRAG.md](../../../llm-wiki/repositories/apecloud__ApeRAG.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1196 / 203 |
| Max observed depth | 10 |
| Top directories | .github, aperag, config, deploy, docs, envs, models, scripts, tests, web |
| Top extensions | .py: 349, .ts: 237, .tsx: 177, .md: 95, .yaml: 95, .png: 89, .json: 56, .sh: 34, .yml: 18, (none): 15, .css: 4, .jpeg: 4 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| web | source boundary | 166 |
| docs | documentation surface | 44 |
| tests | validation surface | 20 |
| .github | ci surface | 1 |
| aperag | top-level component | 1 |
| config | top-level component | 1 |
| deploy | deployment surface | 1 |
| envs | top-level component | 1 |
| models | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install-uv | make install-uv |
| utility | Makefile | venv | make venv |
| utility | Makefile | install | make install |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | dev | make dev |
| utility | Makefile | install-hooks | make install-hooks |
| utility | Makefile | clean | make clean |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | makemigration | make makemigration |
| utility | Makefile | migrate | make migrate |
| utility | Makefile | .PHONY | make .PHONY |
| container | Makefile | compose-up | make compose-up |
| container | Makefile | compose-infra | make compose-infra |
| container | Makefile | compose-down | make compose-down |
| container | Makefile | compose-logs | make compose-logs |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | run-backend | make run-backend |
| utility | Makefile | run-celery | make run-celery |
| utility | Makefile | run-beat | make run-beat |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | langchain, llama-index |
| vectorStores | qdrant, pgvector |
| modelRuntime | torch, transformers, llama |
| webRuntime | fastapi |
| developerSurface | none |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [web/public/images/zh-CN/dify/step2-add-mcp.png](../../../../sources/apecloud__ApeRAG/web/public/images/zh-CN/dify/step2-add-mcp.png) | mcp signal |
| mcp | [web/public/images/zh-CN/dify/step2-configure-mcp.png](../../../../sources/apecloud__ApeRAG/web/public/images/zh-CN/dify/step2-configure-mcp.png) | mcp signal |
| mcp | [web/public/images/zh-CN/dify/step2-mcp-success.png](../../../../sources/apecloud__ApeRAG/web/public/images/zh-CN/dify/step2-mcp-success.png) | mcp signal |
| mcp | [web/public/images/en-US/dify/step2-add-mcp.png](../../../../sources/apecloud__ApeRAG/web/public/images/en-US/dify/step2-add-mcp.png) | mcp signal |
| agentRuntime | [web/src/hooks/use-mobile.ts](../../../../sources/apecloud__ApeRAG/web/src/hooks/use-mobile.ts) | agentRuntime signal |
| agentRuntime | [web/src/app/workspace/collections/tools.ts](../../../../sources/apecloud__ApeRAG/web/src/app/workspace/collections/tools.ts) | agentRuntime signal |
| agentRuntime | [web/src/api/models/agent-error-response.ts](../../../../sources/apecloud__ApeRAG/web/src/api/models/agent-error-response.ts) | agentRuntime signal |
| agentRuntime | [web/src/api/models/agent-message-post200-response.ts](../../../../sources/apecloud__ApeRAG/web/src/api/models/agent-message-post200-response.ts) | agentRuntime signal |
| entrypoints | [web/src/lib/api/server.ts](../../../../sources/apecloud__ApeRAG/web/src/lib/api/server.ts) | entrypoints signal |
| entrypoints | [aperag/views/main.py](../../../../sources/apecloud__ApeRAG/aperag/views/main.py) | entrypoints signal |
| entrypoints | [aperag/mcp/server.py](../../../../sources/apecloud__ApeRAG/aperag/mcp/server.py) | entrypoints signal |
| config | [Makefile](../../../../sources/apecloud__ApeRAG/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [web/src/lib/api/server.ts](../../../../sources/apecloud__ApeRAG/web/src/lib/api/server.ts)<br>[aperag/views/main.py](../../../../sources/apecloud__ApeRAG/aperag/views/main.py)<br>[aperag/mcp/server.py](../../../../sources/apecloud__ApeRAG/aperag/mcp/server.py) |
| agentRuntime | 34 | [web/src/hooks/use-mobile.ts](../../../../sources/apecloud__ApeRAG/web/src/hooks/use-mobile.ts)<br>[web/src/app/workspace/collections/tools.ts](../../../../sources/apecloud__ApeRAG/web/src/app/workspace/collections/tools.ts)<br>[web/src/api/models/agent-error-response.ts](../../../../sources/apecloud__ApeRAG/web/src/api/models/agent-error-response.ts)<br>[web/src/api/models/agent-message-post200-response.ts](../../../../sources/apecloud__ApeRAG/web/src/api/models/agent-message-post200-response.ts)<br>[web/src/api/models/agent-message.ts](../../../../sources/apecloud__ApeRAG/web/src/api/models/agent-message.ts)<br>[web/src/api/models/workflow-definition.ts](../../../../sources/apecloud__ApeRAG/web/src/api/models/workflow-definition.ts)<br>[web/src/api/models/workflow-style.ts](../../../../sources/apecloud__ApeRAG/web/src/api/models/workflow-style.ts)<br>[scripts/hooks/pre-commit](../../../../sources/apecloud__ApeRAG/scripts/hooks/pre-commit) |
| mcp | 27 | [web/public/images/zh-CN/dify/step2-add-mcp.png](../../../../sources/apecloud__ApeRAG/web/public/images/zh-CN/dify/step2-add-mcp.png)<br>[web/public/images/zh-CN/dify/step2-configure-mcp.png](../../../../sources/apecloud__ApeRAG/web/public/images/zh-CN/dify/step2-configure-mcp.png)<br>[web/public/images/zh-CN/dify/step2-mcp-success.png](../../../../sources/apecloud__ApeRAG/web/public/images/zh-CN/dify/step2-mcp-success.png)<br>[web/public/images/en-US/dify/step2-add-mcp.png](../../../../sources/apecloud__ApeRAG/web/public/images/en-US/dify/step2-add-mcp.png)<br>[web/public/images/en-US/dify/step2-configure-mcp.png](../../../../sources/apecloud__ApeRAG/web/public/images/en-US/dify/step2-configure-mcp.png)<br>[web/public/images/en-US/dify/step2-mcp-success.png](../../../../sources/apecloud__ApeRAG/web/public/images/en-US/dify/step2-mcp-success.png)<br>[web/docs/zh-CN/integration/mcp-api.md](../../../../sources/apecloud__ApeRAG/web/docs/zh-CN/integration/mcp-api.md)<br>[web/docs/zh-CN/images/dify/step2-add-mcp.png](../../../../sources/apecloud__ApeRAG/web/docs/zh-CN/images/dify/step2-add-mcp.png) |
| retrieval | 92 | [web/src/lib/prompt-template/index.ts](../../../../sources/apecloud__ApeRAG/web/src/lib/prompt-template/index.ts)<br>[web/src/i18n/zh-CN/page_graph.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/zh-CN/page_graph.json)<br>[web/src/i18n/en-US/page_graph.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/en-US/page_graph.json)<br>`web/src/app/workspace/collections/[collectionId]/graph/collection-graph-node-detail.tsx`<br>`web/src/app/workspace/collections/[collectionId]/graph/collection-graph-node-merge.tsx`<br>`web/src/app/workspace/collections/[collectionId]/graph/collection-graph.tsx`<br>`web/src/app/workspace/collections/[collectionId]/graph/page.tsx`<br>`web/src/app/workspace/collections/[collectionId]/documents/document-index-status.tsx` |
| spec | 44 | [web/src/api/models/model-spec.ts](../../../../sources/apecloud__ApeRAG/web/src/api/models/model-spec.ts)<br>[web/docs/zh-CN/design/_category.yaml](../../../../sources/apecloud__ApeRAG/web/docs/zh-CN/design/_category.yaml)<br>[web/docs/zh-CN/design/architecture.md](../../../../sources/apecloud__ApeRAG/web/docs/zh-CN/design/architecture.md)<br>[web/docs/zh-CN/design/chat_history_design.md](../../../../sources/apecloud__ApeRAG/web/docs/zh-CN/design/chat_history_design.md)<br>[web/docs/zh-CN/design/document_upload_design.md](../../../../sources/apecloud__ApeRAG/web/docs/zh-CN/design/document_upload_design.md)<br>[web/docs/zh-CN/design/graph_index_creation.md](../../../../sources/apecloud__ApeRAG/web/docs/zh-CN/design/graph_index_creation.md)<br>[web/docs/en-US/design/_category.yaml](../../../../sources/apecloud__ApeRAG/web/docs/en-US/design/_category.yaml)<br>[web/docs/en-US/design/architecture.md](../../../../sources/apecloud__ApeRAG/web/docs/en-US/design/architecture.md) |
| eval | 126 | [web/src/i18n/zh-CN/page_evaluation.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/zh-CN/page_evaluation.json)<br>[web/src/i18n/en-US/page_evaluation.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/en-US/page_evaluation.json)<br>`web/src/app/workspace/collections/[collectionId]/search/search-test.tsx`<br>`web/src/app/workspace/collections/[collectionId]/evaluations/evaluation-create.tsx`<br>`web/src/app/workspace/collections/[collectionId]/evaluations/evaluation-list.tsx`<br>`web/src/app/workspace/collections/[collectionId]/evaluations/[evaluationId]/evaluation-delete.tsx`<br>`web/src/app/workspace/collections/[collectionId]/evaluations/[evaluationId]/evaluation-result.tsx`<br>`web/src/app/workspace/collections/[collectionId]/evaluations/[evaluationId]/evaluation-retry-item.tsx` |
| security | 33 | [web/src/i18n/zh-CN/page_audit_logs.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/zh-CN/page_audit_logs.json)<br>[web/src/i18n/zh-CN/page_auth.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/zh-CN/page_auth.json)<br>[web/src/i18n/en-US/page_audit_logs.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/en-US/page_audit_logs.json)<br>[web/src/i18n/en-US/page_auth.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/en-US/page_auth.json)<br>[web/src/app/workspace/audit-logs/audit-log-detail.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/workspace/audit-logs/audit-log-detail.tsx)<br>[web/src/app/workspace/audit-logs/audit-log-table.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/workspace/audit-logs/audit-log-table.tsx)<br>[web/src/app/workspace/audit-logs/page.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/workspace/audit-logs/page.tsx)<br>[web/src/app/auth/layout.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/auth/layout.tsx) |
| ci | 19 | [.github/workflows/auto-approve.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/auto-approve.yml)<br>[.github/workflows/cherry-pick.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/cherry-pick.yml)<br>[.github/workflows/cicd-pull-request.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/cicd-pull-request.yml)<br>[.github/workflows/cicd-push.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/cicd-push.yml)<br>[.github/workflows/e2e-aperag-test.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/e2e-aperag-test.yml)<br>[.github/workflows/e2e-aperag.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/e2e-aperag.yml)<br>[.github/workflows/issues-addtoproject.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/issues-addtoproject.yml)<br>[.github/workflows/issues-labeluserdoc.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/issues-labeluserdoc.yml) |
| container | 47 | [docker-compose.yml](../../../../sources/apecloud__ApeRAG/docker-compose.yml)<br>[Dockerfile](../../../../sources/apecloud__ApeRAG/Dockerfile)<br>[web/Dockerfile](../../../../sources/apecloud__ApeRAG/web/Dockerfile)<br>[web/docs/zh-CN/deployment/_category.yaml](../../../../sources/apecloud__ApeRAG/web/docs/zh-CN/deployment/_category.yaml)<br>[web/docs/zh-CN/deployment/build-docker-image.md](../../../../sources/apecloud__ApeRAG/web/docs/zh-CN/deployment/build-docker-image.md)<br>[web/docs/en-US/deployment/_category.yaml](../../../../sources/apecloud__ApeRAG/web/docs/en-US/deployment/_category.yaml)<br>[web/docs/en-US/deployment/build-docker-image.md](../../../../sources/apecloud__ApeRAG/web/docs/en-US/deployment/build-docker-image.md)<br>[web/deploy/env.local.template](../../../../sources/apecloud__ApeRAG/web/deploy/env.local.template) |
| instruction | 0 | not obvious |
| docs | 173 | [README-zh.md](../../../../sources/apecloud__ApeRAG/README-zh.md)<br>[README.md](../../../../sources/apecloud__ApeRAG/README.md)<br>[web/README.md](../../../../sources/apecloud__ApeRAG/web/README.md)<br>[web/src/app/docs/docs-sidebar.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/docs/docs-sidebar.tsx)<br>[web/src/app/docs/layout.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/docs/layout.tsx)<br>[web/src/app/docs/not-found.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/docs/not-found.tsx)<br>[web/src/app/docs/page.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/docs/page.tsx)<br>`web/src/app/docs/[group]/[[...paths]]/page.tsx` |
| config | 6 | [Makefile](../../../../sources/apecloud__ApeRAG/Makefile)<br>[pyproject.toml](../../../../sources/apecloud__ApeRAG/pyproject.toml)<br>[uv.lock](../../../../sources/apecloud__ApeRAG/uv.lock)<br>[web/package.json](../../../../sources/apecloud__ApeRAG/web/package.json)<br>[web/tsconfig.json](../../../../sources/apecloud__ApeRAG/web/tsconfig.json)<br>[.github/utils/requirements.txt](../../../../sources/apecloud__ApeRAG/.github/utils/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 126 | [web/src/i18n/zh-CN/page_evaluation.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/zh-CN/page_evaluation.json)<br>[web/src/i18n/en-US/page_evaluation.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/en-US/page_evaluation.json)<br>`web/src/app/workspace/collections/[collectionId]/search/search-test.tsx`<br>`web/src/app/workspace/collections/[collectionId]/evaluations/evaluation-create.tsx`<br>`web/src/app/workspace/collections/[collectionId]/evaluations/evaluation-list.tsx`<br>`web/src/app/workspace/collections/[collectionId]/evaluations/[evaluationId]/evaluation-delete.tsx` |
| CI workflows | 19 | [.github/workflows/auto-approve.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/auto-approve.yml)<br>[.github/workflows/cherry-pick.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/cherry-pick.yml)<br>[.github/workflows/cicd-pull-request.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/cicd-pull-request.yml)<br>[.github/workflows/cicd-push.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/cicd-push.yml)<br>[.github/workflows/e2e-aperag-test.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/e2e-aperag-test.yml)<br>[.github/workflows/e2e-aperag.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/e2e-aperag.yml) |
| Containers / deploy | 47 | [docker-compose.yml](../../../../sources/apecloud__ApeRAG/docker-compose.yml)<br>[Dockerfile](../../../../sources/apecloud__ApeRAG/Dockerfile)<br>[web/Dockerfile](../../../../sources/apecloud__ApeRAG/web/Dockerfile)<br>[web/docs/zh-CN/deployment/_category.yaml](../../../../sources/apecloud__ApeRAG/web/docs/zh-CN/deployment/_category.yaml)<br>[web/docs/zh-CN/deployment/build-docker-image.md](../../../../sources/apecloud__ApeRAG/web/docs/zh-CN/deployment/build-docker-image.md)<br>[web/docs/en-US/deployment/_category.yaml](../../../../sources/apecloud__ApeRAG/web/docs/en-US/deployment/_category.yaml) |
| Security / policy | 33 | [web/src/i18n/zh-CN/page_audit_logs.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/zh-CN/page_audit_logs.json)<br>[web/src/i18n/zh-CN/page_auth.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/zh-CN/page_auth.json)<br>[web/src/i18n/en-US/page_audit_logs.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/en-US/page_audit_logs.json)<br>[web/src/i18n/en-US/page_auth.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/en-US/page_auth.json)<br>[web/src/app/workspace/audit-logs/audit-log-detail.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/workspace/audit-logs/audit-log-detail.tsx)<br>[web/src/app/workspace/audit-logs/audit-log-table.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/workspace/audit-logs/audit-log-table.tsx) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `web/public/images/zh-CN/dify/step2-add-mcp.png`, `web/public/images/zh-CN/dify/step2-configure-mcp.png`, `web/public/images/zh-CN/dify/step2-mcp-success.png`.
2. Trace execution through entrypoints: `web/src/lib/api/server.ts`, `aperag/views/main.py`, `aperag/mcp/server.py`.
3. Map agent/tool runtime through: `web/src/hooks/use-mobile.ts`, `web/src/app/workspace/collections/tools.ts`, `web/src/api/models/agent-error-response.ts`.
4. Inspect retrieval/memory/indexing through: `web/src/lib/prompt-template/index.ts`, `web/src/i18n/zh-CN/page_graph.json`, `web/src/i18n/en-US/page_graph.json`.
5. Verify behavior through test/eval files: `web/src/i18n/zh-CN/page_evaluation.json`, `web/src/i18n/en-US/page_evaluation.json`, `web/src/app/workspace/collections/[collectionId]/search/search-test.tsx`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 ApeRAG Production ready GraphRAG with multi modal indexing, AI agents, MCP support, and scalable K8s deployment. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, Makefile, README.md이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
