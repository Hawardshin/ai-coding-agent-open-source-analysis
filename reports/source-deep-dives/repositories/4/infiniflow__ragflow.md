# infiniflow/ragflow Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 3628 files, 571 directories.

## 요약

- 조사 단위: `sources/infiniflow__ragflow` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,628 files, 571 directories, depth score 138, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=web/src/services/mcp-server-service.ts, web/src/pages/user-setting/mcp/edit-mcp-dialog.tsx, web/src/pages/user-setting/mcp/edit-mcp-form.tsx이고, 의존성 단서는 openai, anthropic, mcp, click, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | infiniflow/ragflow |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 83034 |
| Forks | 9597 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | deep-source+report |
| Source | [sources/infiniflow__ragflow](../../../../sources/infiniflow__ragflow) |
| Existing report | [reports/global-trending/repositories/infiniflow__ragflow.md](../../../global-trending/repositories/infiniflow__ragflow.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3628 / 571 |
| Max observed depth | 11 |
| Top directories | .agents, .github, admin, agent, api, bin, cmd, common, conf, deepdoc, docker, docs, example, helm, internal, mcp, memory, rag, sdk, test |
| Top extensions | .py: 923, .tsx: 728, .go: 615, .ts: 401, .svg: 250, .md: 186, .json: 154, .h: 63, .less: 38, .woff2: 38, .cpp: 29, (none): 24 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| web | source boundary | 123 |
| docs | documentation surface | 23 |
| .github | ci surface | 1 |
| admin | top-level component | 1 |
| agent | top-level component | 1 |
| api | source boundary | 1 |
| bin | top-level component | 1 |
| cmd | source boundary | 1 |
| common | top-level component | 1 |
| conf | top-level component | 1 |
| deepdoc | documentation surface | 1 |
| docker | documentation surface | 1 |
| example | top-level component | 1 |
| helm | deployment surface | 1 |
| internal | top-level component | 1 |
| mcp | top-level component | 1 |
| memory | top-level component | 1 |
| rag | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | ollama, llama |
| webRuntime | none |
| developerSurface | click |
| observability | opentelemetry, prometheus |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [web/src/services/mcp-server-service.ts](../../../../sources/infiniflow__ragflow/web/src/services/mcp-server-service.ts) | mcp signal |
| mcp | [web/src/pages/user-setting/mcp/edit-mcp-dialog.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/mcp/edit-mcp-dialog.tsx) | mcp signal |
| mcp | [web/src/pages/user-setting/mcp/edit-mcp-form.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/mcp/edit-mcp-form.tsx) | mcp signal |
| mcp | [web/src/pages/user-setting/mcp/index.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/mcp/index.tsx) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/infiniflow__ragflow/AGENTS.md) | agentRuntime signal |
| agentRuntime | [web/skills-lock.json](../../../../sources/infiniflow__ragflow/web/skills-lock.json) | agentRuntime signal |
| agentRuntime | [web/src/stories/assets/context.png](../../../../sources/infiniflow__ragflow/web/src/stories/assets/context.png) | agentRuntime signal |
| agentRuntime | [web/src/services/agent-service.ts](../../../../sources/infiniflow__ragflow/web/src/services/agent-service.ts) | agentRuntime signal |
| entrypoints | [web/src/app.tsx](../../../../sources/infiniflow__ragflow/web/src/app.tsx) | entrypoints signal |
| entrypoints | [web/src/main.tsx](../../../../sources/infiniflow__ragflow/web/src/main.tsx) | entrypoints signal |
| entrypoints | [web/.storybook/main.ts](../../../../sources/infiniflow__ragflow/web/.storybook/main.ts) | entrypoints signal |
| entrypoints | [test/benchmark/__main__.py](../../../../sources/infiniflow__ragflow/test/benchmark/__main__.py) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 7 | [web/src/app.tsx](../../../../sources/infiniflow__ragflow/web/src/app.tsx)<br>[web/src/main.tsx](../../../../sources/infiniflow__ragflow/web/src/main.tsx)<br>[web/.storybook/main.ts](../../../../sources/infiniflow__ragflow/web/.storybook/main.ts)<br>[test/benchmark/__main__.py](../../../../sources/infiniflow__ragflow/test/benchmark/__main__.py)<br>[mcp/server/server.py](../../../../sources/infiniflow__ragflow/mcp/server/server.py)<br>[bin/.gitkeep](../../../../sources/infiniflow__ragflow/bin/.gitkeep)<br>[agent/sandbox/executor_manager/main.py](../../../../sources/infiniflow__ragflow/agent/sandbox/executor_manager/main.py) |
| agentRuntime | 959 | [AGENTS.md](../../../../sources/infiniflow__ragflow/AGENTS.md)<br>[web/skills-lock.json](../../../../sources/infiniflow__ragflow/web/skills-lock.json)<br>[web/src/stories/assets/context.png](../../../../sources/infiniflow__ragflow/web/src/stories/assets/context.png)<br>[web/src/services/agent-service.ts](../../../../sources/infiniflow__ragflow/web/src/services/agent-service.ts)<br>[web/src/services/memory-service.ts](../../../../sources/infiniflow__ragflow/web/src/services/memory-service.ts)<br>[web/src/services/skill-space-service.ts](../../../../sources/infiniflow__ragflow/web/src/services/skill-space-service.ts)<br>[web/src/pages/user-setting/sidebar/hooks.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/sidebar/hooks.tsx)<br>[web/src/pages/user-setting/setting-team/hooks.ts](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/setting-team/hooks.ts) |
| mcp | 45 | [web/src/services/mcp-server-service.ts](../../../../sources/infiniflow__ragflow/web/src/services/mcp-server-service.ts)<br>[web/src/pages/user-setting/mcp/edit-mcp-dialog.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/mcp/edit-mcp-dialog.tsx)<br>[web/src/pages/user-setting/mcp/edit-mcp-form.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/mcp/edit-mcp-form.tsx)<br>[web/src/pages/user-setting/mcp/index.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/mcp/index.tsx)<br>[web/src/pages/user-setting/mcp/mcp-card.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/mcp/mcp-card.tsx)<br>[web/src/pages/user-setting/mcp/mcp-operation.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/mcp/mcp-operation.tsx)<br>[web/src/pages/user-setting/mcp/tool-card.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/mcp/tool-card.tsx)<br>[web/src/pages/user-setting/mcp/use-bulk-operate-mcp.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/mcp/use-bulk-operate-mcp.tsx) |
| retrieval | 679 | [web/index.html](../../../../sources/infiniflow__ragflow/web/index.html)<br>[web/src/utils/index.ts](../../../../sources/infiniflow__ragflow/web/src/utils/index.ts)<br>[web/src/services/knowledge-service.ts](../../../../sources/infiniflow__ragflow/web/src/services/knowledge-service.ts)<br>[web/src/services/memory-service.ts](../../../../sources/infiniflow__ragflow/web/src/services/memory-service.ts)<br>[web/src/pages/user-setting/index.module.less](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/index.module.less)<br>[web/src/pages/user-setting/index.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/index.tsx)<br>[web/src/pages/user-setting/sidebar/index.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/sidebar/index.tsx)<br>[web/src/pages/user-setting/setting-team/index.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/user-setting/setting-team/index.tsx) |
| spec | 6 | [tools/firecrawl/requirements.txt](../../../../sources/infiniflow__ragflow/tools/firecrawl/requirements.txt)<br>[tools/chatgpt-on-wechat/plugins/requirements.txt](../../../../sources/infiniflow__ragflow/tools/chatgpt-on-wechat/plugins/requirements.txt)<br>[docs/develop/agent-go-port-design.md](../../../../sources/infiniflow__ragflow/docs/develop/agent-go-port-design.md)<br>[agent/sandbox/sandbox_spec.md](../../../../sources/infiniflow__ragflow/agent/sandbox/sandbox_spec.md)<br>[agent/sandbox/sandbox_base_image/python/requirements.txt](../../../../sources/infiniflow__ragflow/agent/sandbox/sandbox_base_image/python/requirements.txt)<br>[agent/sandbox/executor_manager/requirements.txt](../../../../sources/infiniflow__ragflow/agent/sandbox/executor_manager/requirements.txt) |
| eval | 616 | [run_go_tests.sh](../../../../sources/infiniflow__ragflow/run_go_tests.sh)<br>[run_tests.py](../../../../sources/infiniflow__ragflow/run_tests.py)<br>[test.py](../../../../sources/infiniflow__ragflow/test.py)<br>[web/src/utils/tests/chat.test.ts](../../../../sources/infiniflow__ragflow/web/src/utils/tests/chat.test.ts)<br>[web/src/utils/__tests__/chat.test.ts](../../../../sources/infiniflow__ragflow/web/src/utils/__tests__/chat.test.ts)<br>[web/src/stories/assets/avif-test-image.avif](../../../../sources/infiniflow__ragflow/web/src/stories/assets/avif-test-image.avif)<br>[web/src/pages/agent/form-sheet/single-debug-sheet/utils.test.ts](../../../../sources/infiniflow__ragflow/web/src/pages/agent/form-sheet/single-debug-sheet/utils.test.ts)<br>[web/src/hooks/tests/parser-config-utils.test.ts](../../../../sources/infiniflow__ragflow/web/src/hooks/tests/parser-config-utils.test.ts) |
| security | 108 | [SECURITY.md](../../../../sources/infiniflow__ragflow/SECURITY.md)<br>[web/src/wrappers/auth.tsx](../../../../sources/infiniflow__ragflow/web/src/wrappers/auth.tsx)<br>[web/src/pages/dataset/dataset-setting/permission-form-field.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/dataset/dataset-setting/permission-form-field.tsx)<br>[web/src/pages/agent/form/begin-form/webhook/auth.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/agent/form/begin-form/webhook/auth.tsx)<br>[web/src/pages/admin/sandbox-settings.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/admin/sandbox-settings.tsx)<br>[web/src/hooks/auth-hooks.ts](../../../../sources/infiniflow__ragflow/web/src/hooks/auth-hooks.ts)<br>[web/src/constants/permission.ts](../../../../sources/infiniflow__ragflow/web/src/constants/permission.ts)<br>[test/unit_test/rag/prompts/test_generator_sandbox.py](../../../../sources/infiniflow__ragflow/test/unit_test/rag/prompts/test_generator_sandbox.py) |
| ci | 2 | [.github/workflows/release.yml](../../../../sources/infiniflow__ragflow/.github/workflows/release.yml)<br>[.github/workflows/tests.yml](../../../../sources/infiniflow__ragflow/.github/workflows/tests.yml) |
| container | 31 | [Dockerfile](../../../../sources/infiniflow__ragflow/Dockerfile)<br>[Dockerfile_tei](../../../../sources/infiniflow__ragflow/Dockerfile_tei)<br>[Dockerfile.deps](../../../../sources/infiniflow__ragflow/Dockerfile.deps)<br>[Dockerfile.scratch.oc9](../../../../sources/infiniflow__ragflow/Dockerfile.scratch.oc9)<br>[helm/.helmignore](../../../../sources/infiniflow__ragflow/helm/.helmignore)<br>[helm/Chart.yaml](../../../../sources/infiniflow__ragflow/helm/Chart.yaml)<br>[helm/README.md](../../../../sources/infiniflow__ragflow/helm/README.md)<br>[helm/values.yaml](../../../../sources/infiniflow__ragflow/helm/values.yaml) |
| instruction | 4 | [AGENTS.md](../../../../sources/infiniflow__ragflow/AGENTS.md)<br>[CLAUDE.md](../../../../sources/infiniflow__ragflow/CLAUDE.md)<br>[web/CLAUDE.md](../../../../sources/infiniflow__ragflow/web/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/infiniflow__ragflow/.github/copilot-instructions.md) |
| docs | 147 | [README_ar.md](../../../../sources/infiniflow__ragflow/README_ar.md)<br>[README_fr.md](../../../../sources/infiniflow__ragflow/README_fr.md)<br>[README_id.md](../../../../sources/infiniflow__ragflow/README_id.md)<br>[README_ja.md](../../../../sources/infiniflow__ragflow/README_ja.md)<br>[README_ko.md](../../../../sources/infiniflow__ragflow/README_ko.md)<br>[README_pt_br.md](../../../../sources/infiniflow__ragflow/README_pt_br.md)<br>[README_tr.md](../../../../sources/infiniflow__ragflow/README_tr.md)<br>[README_tzh.md](../../../../sources/infiniflow__ragflow/README_tzh.md) |
| config | 20 | [go.mod](../../../../sources/infiniflow__ragflow/go.mod)<br>[pyproject.toml](../../../../sources/infiniflow__ragflow/pyproject.toml)<br>[uv.lock](../../../../sources/infiniflow__ragflow/uv.lock)<br>[web/package.json](../../../../sources/infiniflow__ragflow/web/package.json)<br>[web/tsconfig.json](../../../../sources/infiniflow__ragflow/web/tsconfig.json)<br>[tools/firecrawl/requirements.txt](../../../../sources/infiniflow__ragflow/tools/firecrawl/requirements.txt)<br>[tools/es-to-oceanbase-migration/pyproject.toml](../../../../sources/infiniflow__ragflow/tools/es-to-oceanbase-migration/pyproject.toml)<br>[tools/es-to-oceanbase-migration/uv.lock](../../../../sources/infiniflow__ragflow/tools/es-to-oceanbase-migration/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 616 | [run_go_tests.sh](../../../../sources/infiniflow__ragflow/run_go_tests.sh)<br>[run_tests.py](../../../../sources/infiniflow__ragflow/run_tests.py)<br>[test.py](../../../../sources/infiniflow__ragflow/test.py)<br>[web/src/utils/tests/chat.test.ts](../../../../sources/infiniflow__ragflow/web/src/utils/tests/chat.test.ts)<br>[web/src/utils/__tests__/chat.test.ts](../../../../sources/infiniflow__ragflow/web/src/utils/__tests__/chat.test.ts)<br>[web/src/stories/assets/avif-test-image.avif](../../../../sources/infiniflow__ragflow/web/src/stories/assets/avif-test-image.avif) |
| CI workflows | 2 | [.github/workflows/release.yml](../../../../sources/infiniflow__ragflow/.github/workflows/release.yml)<br>[.github/workflows/tests.yml](../../../../sources/infiniflow__ragflow/.github/workflows/tests.yml) |
| Containers / deploy | 31 | [Dockerfile](../../../../sources/infiniflow__ragflow/Dockerfile)<br>[Dockerfile_tei](../../../../sources/infiniflow__ragflow/Dockerfile_tei)<br>[Dockerfile.deps](../../../../sources/infiniflow__ragflow/Dockerfile.deps)<br>[Dockerfile.scratch.oc9](../../../../sources/infiniflow__ragflow/Dockerfile.scratch.oc9)<br>[helm/.helmignore](../../../../sources/infiniflow__ragflow/helm/.helmignore)<br>[helm/Chart.yaml](../../../../sources/infiniflow__ragflow/helm/Chart.yaml) |
| Security / policy | 108 | [SECURITY.md](../../../../sources/infiniflow__ragflow/SECURITY.md)<br>[web/src/wrappers/auth.tsx](../../../../sources/infiniflow__ragflow/web/src/wrappers/auth.tsx)<br>[web/src/pages/dataset/dataset-setting/permission-form-field.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/dataset/dataset-setting/permission-form-field.tsx)<br>[web/src/pages/agent/form/begin-form/webhook/auth.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/agent/form/begin-form/webhook/auth.tsx)<br>[web/src/pages/admin/sandbox-settings.tsx](../../../../sources/infiniflow__ragflow/web/src/pages/admin/sandbox-settings.tsx)<br>[web/src/hooks/auth-hooks.ts](../../../../sources/infiniflow__ragflow/web/src/hooks/auth-hooks.ts) |
| Agent instructions | 4 | [AGENTS.md](../../../../sources/infiniflow__ragflow/AGENTS.md)<br>[CLAUDE.md](../../../../sources/infiniflow__ragflow/CLAUDE.md)<br>[web/CLAUDE.md](../../../../sources/infiniflow__ragflow/web/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/infiniflow__ragflow/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `web/src/services/mcp-server-service.ts`, `web/src/pages/user-setting/mcp/edit-mcp-dialog.tsx`, `web/src/pages/user-setting/mcp/edit-mcp-form.tsx`.
2. Trace execution through entrypoints: `web/src/app.tsx`, `web/src/main.tsx`, `web/.storybook/main.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `web/skills-lock.json`, `web/src/stories/assets/context.png`.
4. Inspect retrieval/memory/indexing through: `web/index.html`, `web/src/utils/index.ts`, `web/src/services/knowledge-service.ts`.
5. Verify behavior through test/eval files: `run_go_tests.sh`, `run_tests.py`, `test.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Local clone structure analysis 3628 files, 571 directories.. 핵심 구조 신호는 Python, pyproject.toml, go.mod, Dockerfile, README.md, AGENTS.md이며, deep-source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 major metadata risk not obvious입니다.
