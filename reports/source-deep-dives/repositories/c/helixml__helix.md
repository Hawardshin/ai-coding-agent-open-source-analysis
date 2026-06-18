# helixml/helix Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

♾️ Private Agent Fleet with Spec Coding. Each agent gets their own GPU-accelerated desktop. Run Claude, Codex, Gemini and open models on a full private AI Stack ♾️

## 요약

- 조사 단위: `sources/helixml__helix` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,922 files, 449 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=main.go, tts-server/main.go, sandbox/dns-proxy/main.go이고, 의존성 단서는 openai, anthropic, mcp, modelcontextprotocol, langchain, cobra, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | helixml/helix |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Go |
| Stars | 781 |
| Forks | 75 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/helixml__helix](../../../../sources/helixml__helix) |
| Existing report | [reports/global-trending/repositories/helixml__helix.md](../../../global-trending/repositories/helixml__helix.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2922 / 449 |
| Max observed depth | 7 |
| Top directories | .cursor, .github, api, charts, demos, design, desktop, docs, examples, for-mac, frontend, helix-org, integration-test, mcp-servers, operator, projects, qemu-patches, sample, sandbox, scripts |
| Top extensions | .go: 1317, .tsx: 487, .md: 371, .ts: 195, .yaml: 122, .sh: 89, .json: 48, .rs: 44, .png: 41, (none): 26, .svg: 21, .js: 19 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| api | source boundary | 62 |
| examples/custom_rag | examples workspace | 8 |
| examples/sdk | examples workspace | 5 |
| docs | documentation surface | 3 |
| examples/goose_recipes | examples workspace | 3 |
| .github | ci surface | 1 |
| charts | top-level component | 1 |
| demos | top-level component | 1 |
| design | top-level component | 1 |
| desktop | top-level component | 1 |
| examples | top-level component | 1 |
| examples/basic_knowledge.yaml | examples workspace | 1 |
| examples/custom_knowledge_template.yaml | examples workspace | 1 |
| examples/test | examples workspace | 1 |
| examples/website_custom_rag.yaml | examples workspace | 1 |
| examples/website_knowledge.yaml | examples workspace | 1 |
| for-mac | top-level component | 1 |
| frontend | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp, modelcontextprotocol |
| agentFrameworks | langchain |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | cobra |
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [main.go](../../../../sources/helixml__helix/main.go) | entrypoints signal |
| entrypoints | [tts-server/main.go](../../../../sources/helixml__helix/tts-server/main.go) | entrypoints signal |
| entrypoints | [sandbox/dns-proxy/main.go](../../../../sources/helixml__helix/sandbox/dns-proxy/main.go) | entrypoints signal |
| entrypoints | [operator/cmd/main.go](../../../../sources/helixml__helix/operator/cmd/main.go) | entrypoints signal |
| container | [docker-compose.demos.yaml](../../../../sources/helixml__helix/docker-compose.demos.yaml) | container signal |
| container | [docker-compose.dev.yaml](../../../../sources/helixml__helix/docker-compose.dev.yaml) | container signal |
| container | [docker-compose.oidc.yaml](../../../../sources/helixml__helix/docker-compose.oidc.yaml) | container signal |
| container | [docker-compose.tls.yaml](../../../../sources/helixml__helix/docker-compose.tls.yaml) | container signal |
| config | [go.mod](../../../../sources/helixml__helix/go.mod) | config signal |
| config | [requirements-vllm.txt](../../../../sources/helixml__helix/requirements-vllm.txt) | config signal |
| config | [tts-server/go.mod](../../../../sources/helixml__helix/tts-server/go.mod) | config signal |
| config | [tts-server/Makefile](../../../../sources/helixml__helix/tts-server/Makefile) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 36 | [main.go](../../../../sources/helixml__helix/main.go)<br>[tts-server/main.go](../../../../sources/helixml__helix/tts-server/main.go)<br>[sandbox/dns-proxy/main.go](../../../../sources/helixml__helix/sandbox/dns-proxy/main.go)<br>[operator/cmd/main.go](../../../../sources/helixml__helix/operator/cmd/main.go)<br>[mcp-servers/drone-ci/src/index.ts](../../../../sources/helixml__helix/mcp-servers/drone-ci/src/index.ts)<br>[integration-test/gpucloud/cmd/gpucloud-it/main.go](../../../../sources/helixml__helix/integration-test/gpucloud/cmd/gpucloud-it/main.go)<br>[frontend/src/App.tsx](../../../../sources/helixml__helix/frontend/src/App.tsx)<br>[frontend/src/index.tsx](../../../../sources/helixml__helix/frontend/src/index.tsx) |
| agentRuntime | 300 | [sandbox-versions.txt](../../../../sources/helixml__helix/sandbox-versions.txt)<br>[sandbox/04-start-dockerd.sh](../../../../sources/helixml__helix/sandbox/04-start-dockerd.sh)<br>[sandbox/05-start-dns-proxy.sh](../../../../sources/helixml__helix/sandbox/05-start-dns-proxy.sh)<br>[sandbox/08-start-sandbox-heartbeat.sh](../../../../sources/helixml__helix/sandbox/08-start-sandbox-heartbeat.sh)<br>[sandbox/10-start-hydra.sh](../../../../sources/helixml__helix/sandbox/10-start-hydra.sh)<br>[sandbox/12-start-compose-manager.sh](../../../../sources/helixml__helix/sandbox/12-start-compose-manager.sh)<br>[sandbox/14-start-inference-proxy.sh](../../../../sources/helixml__helix/sandbox/14-start-inference-proxy.sh)<br>[sandbox/startup-app.sh](../../../../sources/helixml__helix/sandbox/startup-app.sh) |
| mcp | 41 | [scripts/test-zed-sse-mcp-agent.yaml](../../../../sources/helixml__helix/scripts/test-zed-sse-mcp-agent.yaml)<br>[scripts/test-zed-sse-mcp.sh](../../../../sources/helixml__helix/scripts/test-zed-sse-mcp.sh)<br>[scripts/sse-mcp-server/Dockerfile](../../../../sources/helixml__helix/scripts/sse-mcp-server/Dockerfile)<br>[mcp-servers/drone-ci/package-lock.json](../../../../sources/helixml__helix/mcp-servers/drone-ci/package-lock.json)<br>[mcp-servers/drone-ci/package.json](../../../../sources/helixml__helix/mcp-servers/drone-ci/package.json)<br>[mcp-servers/drone-ci/README.md](../../../../sources/helixml__helix/mcp-servers/drone-ci/README.md)<br>[mcp-servers/drone-ci/tsconfig.json](../../../../sources/helixml__helix/mcp-servers/drone-ci/tsconfig.json)<br>[mcp-servers/drone-ci/src/index.ts](../../../../sources/helixml__helix/mcp-servers/drone-ci/src/index.ts) |
| retrieval | 96 | [scripts/index_repo.sh](../../../../sources/helixml__helix/scripts/index_repo.sh)<br>[scripts/knowledge/.gitignore](../../../../sources/helixml__helix/scripts/knowledge/.gitignore)<br>[scripts/knowledge/download_papers.py](../../../../sources/helixml__helix/scripts/knowledge/download_papers.py)<br>[scripts/knowledge/requirements.txt](../../../../sources/helixml__helix/scripts/knowledge/requirements.txt)<br>[mcp-servers/drone-ci/src/index.ts](../../../../sources/helixml__helix/mcp-servers/drone-ci/src/index.ts)<br>[integration-test/smoke/app_knowledge_test.go](../../../../sources/helixml__helix/integration-test/smoke/app_knowledge_test.go)<br>[frontend/index.html](../../../../sources/helixml__helix/frontend/index.html)<br>[frontend/src/index.tsx](../../../../sources/helixml__helix/frontend/src/index.tsx) |
| spec | 376 | [requirements-vllm.txt](../../../../sources/helixml__helix/requirements-vllm.txt)<br>[scripts/knowledge/requirements.txt](../../../../sources/helixml__helix/scripts/knowledge/requirements.txt)<br>[frontend/src/components/spec-tasks/CommentLogSidebar.tsx](../../../../sources/helixml__helix/frontend/src/components/spec-tasks/CommentLogSidebar.tsx)<br>[frontend/src/components/spec-tasks/DesignReviewContent.tsx](../../../../sources/helixml__helix/frontend/src/components/spec-tasks/DesignReviewContent.tsx)<br>[frontend/src/components/spec-tasks/InlineCommentBubble.tsx](../../../../sources/helixml__helix/frontend/src/components/spec-tasks/InlineCommentBubble.tsx)<br>[frontend/src/components/spec-tasks/InlineCommentForm.tsx](../../../../sources/helixml__helix/frontend/src/components/spec-tasks/InlineCommentForm.tsx)<br>[frontend/src/components/spec-tasks/RejectDesignDialog.tsx](../../../../sources/helixml__helix/frontend/src/components/spec-tasks/RejectDesignDialog.tsx)<br>[frontend/src/components/spec-tasks/ReviewActionFooter.tsx](../../../../sources/helixml__helix/frontend/src/components/spec-tasks/ReviewActionFooter.tsx) |
| eval | 587 | [run-atlassian-oauth-tests.sh](../../../../sources/helixml__helix/run-atlassian-oauth-tests.sh)<br>[zed_integration/websocket_sync_test.go](../../../../sources/helixml__helix/zed_integration/websocket_sync_test.go)<br>[test/go.mod](../../../../sources/helixml__helix/test/go.mod)<br>[test/go.sum](../../../../sources/helixml__helix/test/go.sum)<br>[test/integration/go.mod](../../../../sources/helixml__helix/test/integration/go.mod)<br>[test/integration/go.sum](../../../../sources/helixml__helix/test/integration/go.sum)<br>[scripts/helm-upgrade-test.sh](../../../../sources/helixml__helix/scripts/helm-upgrade-test.sh)<br>[scripts/monitor_slots.sh](../../../../sources/helixml__helix/scripts/monitor_slots.sh) |
| security | 192 | [run-atlassian-oauth-tests.sh](../../../../sources/helixml__helix/run-atlassian-oauth-tests.sh)<br>[sandbox-versions.txt](../../../../sources/helixml__helix/sandbox-versions.txt)<br>[scripts/run-atlassian-oauth-tests.sh](../../../../sources/helixml__helix/scripts/run-atlassian-oauth-tests.sh)<br>[scripts/run-oauth-integration-test.sh](../../../../sources/helixml__helix/scripts/run-oauth-integration-test.sh)<br>[scripts/test-sandbox-persistence.sh](../../../../sources/helixml__helix/scripts/test-sandbox-persistence.sh)<br>[scripts/upload-oauth-test-artifacts.sh](../../../../sources/helixml__helix/scripts/upload-oauth-test-artifacts.sh)<br>[sandbox/04-start-dockerd.sh](../../../../sources/helixml__helix/sandbox/04-start-dockerd.sh)<br>[sandbox/05-start-dns-proxy.sh](../../../../sources/helixml__helix/sandbox/05-start-dns-proxy.sh) |
| ci | 5 | [operator/.github/workflows/lint.yml](../../../../sources/helixml__helix/operator/.github/workflows/lint.yml)<br>[operator/.github/workflows/test-e2e.yml](../../../../sources/helixml__helix/operator/.github/workflows/test-e2e.yml)<br>[operator/.github/workflows/test.yml](../../../../sources/helixml__helix/operator/.github/workflows/test.yml)<br>[.github/workflows/codeql.yml](../../../../sources/helixml__helix/.github/workflows/codeql.yml)<br>[.github/workflows/stainless_action.yml](../../../../sources/helixml__helix/.github/workflows/stainless_action.yml) |
| container | 61 | [docker-compose.demos.yaml](../../../../sources/helixml__helix/docker-compose.demos.yaml)<br>[docker-compose.dev.yaml](../../../../sources/helixml__helix/docker-compose.dev.yaml)<br>[docker-compose.oidc.yaml](../../../../sources/helixml__helix/docker-compose.oidc.yaml)<br>[docker-compose.tls.yaml](../../../../sources/helixml__helix/docker-compose.tls.yaml)<br>[docker-compose.yaml](../../../../sources/helixml__helix/docker-compose.yaml)<br>[Dockerfile](../../../../sources/helixml__helix/Dockerfile)<br>[Dockerfile.demos](../../../../sources/helixml__helix/Dockerfile.demos)<br>[Dockerfile.lint](../../../../sources/helixml__helix/Dockerfile.lint) |
| instruction | 6 | [CLAUDE.md](../../../../sources/helixml__helix/CLAUDE.md)<br>[.cursor/rules/frontend-structure.mdc](../../../../sources/helixml__helix/.cursor/rules/frontend-structure.mdc)<br>[.cursor/rules/go-api-handlers.mdc](../../../../sources/helixml__helix/.cursor/rules/go-api-handlers.mdc)<br>[.cursor/rules/helix.mdc](../../../../sources/helixml__helix/.cursor/rules/helix.mdc)<br>[.cursor/rules/use-frontend-api-client.mdc](../../../../sources/helixml__helix/.cursor/rules/use-frontend-api-client.mdc)<br>[.cursor/rules/use-gorm-for-database.mdc](../../../../sources/helixml__helix/.cursor/rules/use-gorm-for-database.mdc) |
| docs | 32 | [README.md](../../../../sources/helixml__helix/README.md)<br>[tts-server/README.md](../../../../sources/helixml__helix/tts-server/README.md)<br>[scripts/k6/README.md](../../../../sources/helixml__helix/scripts/k6/README.md)<br>[operator/README.md](../../../../sources/helixml__helix/operator/README.md)<br>[mcp-servers/drone-ci/README.md](../../../../sources/helixml__helix/mcp-servers/drone-ci/README.md)<br>[integration-test/smoke/README.md](../../../../sources/helixml__helix/integration-test/smoke/README.md)<br>[integration-test/gpucloud/README.md](../../../../sources/helixml__helix/integration-test/gpucloud/README.md)<br>[integration-test/api/README.md](../../../../sources/helixml__helix/integration-test/api/README.md) |
| config | 28 | [go.mod](../../../../sources/helixml__helix/go.mod)<br>[requirements-vllm.txt](../../../../sources/helixml__helix/requirements-vllm.txt)<br>[tts-server/go.mod](../../../../sources/helixml__helix/tts-server/go.mod)<br>[tts-server/Makefile](../../../../sources/helixml__helix/tts-server/Makefile)<br>[test/go.mod](../../../../sources/helixml__helix/test/go.mod)<br>[test/integration/go.mod](../../../../sources/helixml__helix/test/integration/go.mod)<br>[scripts/knowledge/requirements.txt](../../../../sources/helixml__helix/scripts/knowledge/requirements.txt)<br>[sandbox/dns-proxy/go.mod](../../../../sources/helixml__helix/sandbox/dns-proxy/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 587 | [run-atlassian-oauth-tests.sh](../../../../sources/helixml__helix/run-atlassian-oauth-tests.sh)<br>[zed_integration/websocket_sync_test.go](../../../../sources/helixml__helix/zed_integration/websocket_sync_test.go)<br>[test/go.mod](../../../../sources/helixml__helix/test/go.mod)<br>[test/go.sum](../../../../sources/helixml__helix/test/go.sum)<br>[test/integration/go.mod](../../../../sources/helixml__helix/test/integration/go.mod)<br>[test/integration/go.sum](../../../../sources/helixml__helix/test/integration/go.sum) |
| CI workflows | 5 | [operator/.github/workflows/lint.yml](../../../../sources/helixml__helix/operator/.github/workflows/lint.yml)<br>[operator/.github/workflows/test-e2e.yml](../../../../sources/helixml__helix/operator/.github/workflows/test-e2e.yml)<br>[operator/.github/workflows/test.yml](../../../../sources/helixml__helix/operator/.github/workflows/test.yml)<br>[.github/workflows/codeql.yml](../../../../sources/helixml__helix/.github/workflows/codeql.yml)<br>[.github/workflows/stainless_action.yml](../../../../sources/helixml__helix/.github/workflows/stainless_action.yml) |
| Containers / deploy | 61 | [docker-compose.demos.yaml](../../../../sources/helixml__helix/docker-compose.demos.yaml)<br>[docker-compose.dev.yaml](../../../../sources/helixml__helix/docker-compose.dev.yaml)<br>[docker-compose.oidc.yaml](../../../../sources/helixml__helix/docker-compose.oidc.yaml)<br>[docker-compose.tls.yaml](../../../../sources/helixml__helix/docker-compose.tls.yaml)<br>[docker-compose.yaml](../../../../sources/helixml__helix/docker-compose.yaml)<br>[Dockerfile](../../../../sources/helixml__helix/Dockerfile) |
| Security / policy | 192 | [run-atlassian-oauth-tests.sh](../../../../sources/helixml__helix/run-atlassian-oauth-tests.sh)<br>[sandbox-versions.txt](../../../../sources/helixml__helix/sandbox-versions.txt)<br>[scripts/run-atlassian-oauth-tests.sh](../../../../sources/helixml__helix/scripts/run-atlassian-oauth-tests.sh)<br>[scripts/run-oauth-integration-test.sh](../../../../sources/helixml__helix/scripts/run-oauth-integration-test.sh)<br>[scripts/test-sandbox-persistence.sh](../../../../sources/helixml__helix/scripts/test-sandbox-persistence.sh)<br>[scripts/upload-oauth-test-artifacts.sh](../../../../sources/helixml__helix/scripts/upload-oauth-test-artifacts.sh) |
| Agent instructions | 6 | [CLAUDE.md](../../../../sources/helixml__helix/CLAUDE.md)<br>[.cursor/rules/frontend-structure.mdc](../../../../sources/helixml__helix/.cursor/rules/frontend-structure.mdc)<br>[.cursor/rules/go-api-handlers.mdc](../../../../sources/helixml__helix/.cursor/rules/go-api-handlers.mdc)<br>[.cursor/rules/helix.mdc](../../../../sources/helixml__helix/.cursor/rules/helix.mdc)<br>[.cursor/rules/use-frontend-api-client.mdc](../../../../sources/helixml__helix/.cursor/rules/use-frontend-api-client.mdc)<br>[.cursor/rules/use-gorm-for-database.mdc](../../../../sources/helixml__helix/.cursor/rules/use-gorm-for-database.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `main.go`, `tts-server/main.go`, `sandbox/dns-proxy/main.go`.
2. Trace execution through entrypoints: `main.go`, `tts-server/main.go`, `sandbox/dns-proxy/main.go`.
3. Map agent/tool runtime through: `sandbox-versions.txt`, `sandbox/04-start-dockerd.sh`, `sandbox/05-start-dns-proxy.sh`.
4. Inspect retrieval/memory/indexing through: `scripts/index_repo.sh`, `scripts/knowledge/.gitignore`, `scripts/knowledge/download_papers.py`.
5. Verify behavior through test/eval files: `run-atlassian-oauth-tests.sh`, `zed_integration/websocket_sync_test.go`, `test/go.mod`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 ♾️ Private Agent Fleet with Spec Coding. Each agent gets their own GPU accelerated desktop. Run Claude, Codex, Gemini an. 핵심 구조 신호는 Go, go.mod, Dockerfile, README.md, CLAUDE.md, openai이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
