# apecloud/ApeRAG 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

ApeRAG: Production-ready GraphRAG with multi-modal indexing, AI agents, MCP support, and scalable K8s deployment

## 요약

- 조사 단위: `sources/apecloud__ApeRAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,196 files, 203 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=web/public/images/zh-CN/dify/step2-add-mcp.png, web/public/images/zh-CN/dify/step2-configure-mcp.png, web/public/images/zh-CN/dify/step2-mcp-success.png이고, 의존성 단서는 openai, mcp, langchain, llama-index, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | apecloud/ApeRAG |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 1193 |
| Forks | 132 |
| License | Apache-2.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/apecloud__ApeRAG](../../../../sources/apecloud__ApeRAG) |
| 기존 보고서 | [reports/llm-wiki/repositories/apecloud__ApeRAG.md](../../../llm-wiki/repositories/apecloud__ApeRAG.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1196 / 203 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, aperag, config, deploy, docs, envs, models, scripts, tests, web |
| 상위 확장자 | .py: 349, .ts: 237, .tsx: 177, .md: 95, .yaml: 95, .png: 89, .json: 56, .sh: 34, .yml: 18, (none): 15, .css: 4, .jpeg: 4 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | langchain, llama-index |
| vectorStores | qdrant, pgvector |
| modelRuntime | torch, transformers, llama |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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
| instruction | 0 | 명확하지 않음 |
| docs | 173 | [README-zh.md](../../../../sources/apecloud__ApeRAG/README-zh.md)<br>[README.md](../../../../sources/apecloud__ApeRAG/README.md)<br>[web/README.md](../../../../sources/apecloud__ApeRAG/web/README.md)<br>[web/src/app/docs/docs-sidebar.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/docs/docs-sidebar.tsx)<br>[web/src/app/docs/layout.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/docs/layout.tsx)<br>[web/src/app/docs/not-found.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/docs/not-found.tsx)<br>[web/src/app/docs/page.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/docs/page.tsx)<br>`web/src/app/docs/[group]/[[...paths]]/page.tsx` |
| config | 6 | [Makefile](../../../../sources/apecloud__ApeRAG/Makefile)<br>[pyproject.toml](../../../../sources/apecloud__ApeRAG/pyproject.toml)<br>[uv.lock](../../../../sources/apecloud__ApeRAG/uv.lock)<br>[web/package.json](../../../../sources/apecloud__ApeRAG/web/package.json)<br>[web/tsconfig.json](../../../../sources/apecloud__ApeRAG/web/tsconfig.json)<br>[.github/utils/requirements.txt](../../../../sources/apecloud__ApeRAG/.github/utils/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 126 | [web/src/i18n/zh-CN/page_evaluation.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/zh-CN/page_evaluation.json)<br>[web/src/i18n/en-US/page_evaluation.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/en-US/page_evaluation.json)<br>`web/src/app/workspace/collections/[collectionId]/search/search-test.tsx`<br>`web/src/app/workspace/collections/[collectionId]/evaluations/evaluation-create.tsx`<br>`web/src/app/workspace/collections/[collectionId]/evaluations/evaluation-list.tsx`<br>`web/src/app/workspace/collections/[collectionId]/evaluations/[evaluationId]/evaluation-delete.tsx` |
| CI workflow | 19 | [.github/workflows/auto-approve.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/auto-approve.yml)<br>[.github/workflows/cherry-pick.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/cherry-pick.yml)<br>[.github/workflows/cicd-pull-request.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/cicd-pull-request.yml)<br>[.github/workflows/cicd-push.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/cicd-push.yml)<br>[.github/workflows/e2e-aperag-test.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/e2e-aperag-test.yml)<br>[.github/workflows/e2e-aperag.yml](../../../../sources/apecloud__ApeRAG/.github/workflows/e2e-aperag.yml) |
| 컨테이너/배포 | 47 | [docker-compose.yml](../../../../sources/apecloud__ApeRAG/docker-compose.yml)<br>[Dockerfile](../../../../sources/apecloud__ApeRAG/Dockerfile)<br>[web/Dockerfile](../../../../sources/apecloud__ApeRAG/web/Dockerfile)<br>[web/docs/zh-CN/deployment/_category.yaml](../../../../sources/apecloud__ApeRAG/web/docs/zh-CN/deployment/_category.yaml)<br>[web/docs/zh-CN/deployment/build-docker-image.md](../../../../sources/apecloud__ApeRAG/web/docs/zh-CN/deployment/build-docker-image.md)<br>[web/docs/en-US/deployment/_category.yaml](../../../../sources/apecloud__ApeRAG/web/docs/en-US/deployment/_category.yaml) |
| 보안/정책 | 33 | [web/src/i18n/zh-CN/page_audit_logs.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/zh-CN/page_audit_logs.json)<br>[web/src/i18n/zh-CN/page_auth.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/zh-CN/page_auth.json)<br>[web/src/i18n/en-US/page_audit_logs.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/en-US/page_audit_logs.json)<br>[web/src/i18n/en-US/page_auth.json](../../../../sources/apecloud__ApeRAG/web/src/i18n/en-US/page_auth.json)<br>[web/src/app/workspace/audit-logs/audit-log-detail.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/workspace/audit-logs/audit-log-detail.tsx)<br>[web/src/app/workspace/audit-logs/audit-log-table.tsx](../../../../sources/apecloud__ApeRAG/web/src/app/workspace/audit-logs/audit-log-table.tsx) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `web/public/images/zh-CN/dify/step2-add-mcp.png`, `web/public/images/zh-CN/dify/step2-configure-mcp.png`, `web/public/images/zh-CN/dify/step2-mcp-success.png`.
2. entrypoint를 따라 실행 흐름 확인: `web/src/lib/api/server.ts`, `aperag/views/main.py`, `aperag/mcp/server.py`.
3. agent/tool runtime 매핑: `web/src/hooks/use-mobile.ts`, `web/src/app/workspace/collections/tools.ts`, `web/src/api/models/agent-error-response.ts`.
4. retrieval/memory/indexing 확인: `web/src/lib/prompt-template/index.ts`, `web/src/i18n/zh-CN/page_graph.json`, `web/src/i18n/en-US/page_graph.json`.
5. test/eval 파일로 동작 검증: `web/src/i18n/zh-CN/page_evaluation.json`, `web/src/i18n/en-US/page_evaluation.json`, `web/src/app/workspace/collections/[collectionId]/search/search-test.tsx`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 ApeRAG Production ready GraphRAG with multi modal indexing, AI agents, MCP support, and scalable K8s deployment. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, Makefile, README.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
