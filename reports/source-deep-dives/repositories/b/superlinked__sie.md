# superlinked/sie Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Open-source inference server and production cluster for all the models your agent needs.

## 요약

- 조사 단위: `sources/superlinked__sie` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,190 files, 260 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/sie_ts_sdk/src/index.ts, packages/sie_server_sidecar/src/main.rs, packages/sie_server/src/sie_server/main.py이고, 의존성 단서는 mcp, langchain, llamaindex, express, pydantic, torch, 검증/운영 단서는 test/eval 경로가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | superlinked/sie |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 2053 |
| Forks | 183 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/superlinked__sie](../../../../sources/superlinked__sie) |
| Existing report | [reports/global-trending/repositories/superlinked__sie.md](../../../global-trending/repositories/superlinked__sie.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1190 / 260 |
| Max observed depth | 8 |
| Top directories | deploy, examples, integrations, notebooks, packages |
| Top extensions | .py: 535, .yaml: 176, .rs: 111, .ts: 91, .tsx: 65, .json: 46, .md: 41, (none): 25, .toml: 18, .png: 16, .svg: 10, .jpg: 7 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| packages/sie_server | packages workspace | 56 |
| packages/sie_ts_sdk | packages workspace | 24 |
| examples/wine-recommender | examples workspace | 16 |
| packages/sie_server_sidecar | packages workspace | 11 |
| packages/sie_gateway | packages workspace | 10 |
| examples/stripe-link-fraud | examples workspace | 9 |
| examples/sie-hugging-face-mteb-semantic-search | examples workspace | 7 |
| examples/ecommerce-product-search | examples workspace | 6 |
| examples/document-ocr | examples workspace | 5 |
| examples/regulatory-rag | examples workspace | 3 |
| examples/taxonomy-classification | examples workspace | 3 |
| packages/sie_config | packages workspace | 2 |
| packages/sie_sdk | packages workspace | 2 |
| deploy | deployment surface | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| examples/retrieval-ablation | examples workspace | 1 |
| integrations | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build | pnpm -r run build |
| test | package.json | test | pnpm -r run test |
| quality | package.json | typecheck | pnpm -r run typecheck |
| quality | package.json | lint | pnpm -r run lint |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | mcp |
| agentFrameworks | langchain, llamaindex |
| vectorStores | chroma, qdrant, weaviate |
| modelRuntime | torch, llama |
| webRuntime | express |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [packages/sie_ts_sdk/src/index.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/src/index.ts) | entrypoints signal |
| entrypoints | [packages/sie_server_sidecar/src/main.rs](../../../../sources/superlinked__sie/packages/sie_server_sidecar/src/main.rs) | entrypoints signal |
| entrypoints | [packages/sie_server/src/sie_server/main.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/main.py) | entrypoints signal |
| entrypoints | [packages/sie_gateway/src/main.rs](../../../../sources/superlinked__sie/packages/sie_gateway/src/main.rs) | entrypoints signal |
| container | [packages/sie_server_sidecar/Dockerfile](../../../../sources/superlinked__sie/packages/sie_server_sidecar/Dockerfile) | container signal |
| container | [packages/sie_server/Dockerfile.cpu](../../../../sources/superlinked__sie/packages/sie_server/Dockerfile.cpu) | container signal |
| container | [packages/sie_server/Dockerfile.cuda12](../../../../sources/superlinked__sie/packages/sie_server/Dockerfile.cuda12) | container signal |
| container | [packages/sie_gateway/Dockerfile](../../../../sources/superlinked__sie/packages/sie_gateway/Dockerfile) | container signal |
| config | [package.json](../../../../sources/superlinked__sie/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/superlinked__sie/pnpm-workspace.yaml) | config signal |
| config | [pyproject.toml](../../../../sources/superlinked__sie/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/superlinked__sie/uv.lock) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 17 | [packages/sie_ts_sdk/src/index.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/src/index.ts)<br>[packages/sie_server_sidecar/src/main.rs](../../../../sources/superlinked__sie/packages/sie_server_sidecar/src/main.rs)<br>[packages/sie_server/src/sie_server/main.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/main.py)<br>[packages/sie_gateway/src/main.rs](../../../../sources/superlinked__sie/packages/sie_gateway/src/main.rs)<br>[packages/sie_gateway/src/server.rs](../../../../sources/superlinked__sie/packages/sie_gateway/src/server.rs)<br>[integrations/sie_ts_llamaindex/src/index.ts](../../../../sources/superlinked__sie/integrations/sie_ts_llamaindex/src/index.ts)<br>[integrations/sie_ts_langchain/src/index.ts](../../../../sources/superlinked__sie/integrations/sie_ts_langchain/src/index.ts)<br>[integrations/sie_ts_lancedb/src/index.ts](../../../../sources/superlinked__sie/integrations/sie_ts_lancedb/src/index.ts) |
| agentRuntime | 12 | [packages/sie_server/src/sie_server/processors/tool_call_grammar.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/processors/tool_call_grammar.py)<br>[packages/sie_server/src/sie_server/processors/tool_call_parser.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/processors/tool_call_parser.py)<br>[packages/sie_server/src/sie_server/core/memory.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/core/memory.py)<br>[integrations/sie_crewai/src/sie_crewai/tools.py](../../../../sources/superlinked__sie/integrations/sie_crewai/src/sie_crewai/tools.py)<br>[examples/wine-recommender/app/hooks/use-mobile.ts](../../../../sources/superlinked__sie/examples/wine-recommender/app/hooks/use-mobile.ts)<br>[examples/wine-recommender/app/hooks/use-toast.ts](../../../../sources/superlinked__sie/examples/wine-recommender/app/hooks/use-toast.ts)<br>[examples/wine-recommender/app/components/ui/context-menu.tsx](../../../../sources/superlinked__sie/examples/wine-recommender/app/components/ui/context-menu.tsx)<br>[deploy/helm/sie-cluster/templates/hooks/cert-manager-conflict-check.yaml](../../../../sources/superlinked__sie/deploy/helm/sie-cluster/templates/hooks/cert-manager-conflict-check.yaml) |
| mcp | 0 | not obvious |
| retrieval | 72 | [packages/sie_ts_sdk/tests/browser/index.html](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/browser/index.html)<br>[packages/sie_ts_sdk/src/index.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/src/index.ts)<br>[packages/sie_server/tests/core/test_memory.py](../../../../sources/superlinked__sie/packages/sie_server/tests/core/test_memory.py)<br>[packages/sie_server/tests/core/test_registry_memory.py](../../../../sources/superlinked__sie/packages/sie_server/tests/core/test_registry_memory.py)<br>[packages/sie_server/tests/adapters/test_pytorch_embedding_revision.py](../../../../sources/superlinked__sie/packages/sie_server/tests/adapters/test_pytorch_embedding_revision.py)<br>[packages/sie_server/tests/adapters/test_vision_patch_embed.py](../../../../sources/superlinked__sie/packages/sie_server/tests/adapters/test_vision_patch_embed.py)<br>[packages/sie_server/src/sie_server/static/index.html](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/static/index.html)<br>[packages/sie_server/src/sie_server/core/memory.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/core/memory.py) |
| spec | 10 | [packages/sie_server_sidecar/docs/architecture-guide.md](../../../../sources/superlinked__sie/packages/sie_server_sidecar/docs/architecture-guide.md)<br>[packages/sie_server/src/sie_server/adapters/_spec.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/adapters/_spec.py)<br>[packages/sie_gateway/docs/architecture-guide.md](../../../../sources/superlinked__sie/packages/sie_gateway/docs/architecture-guide.md)<br>[integrations/sie_weaviate/weaviate-module-spec/README.md](../../../../sources/superlinked__sie/integrations/sie_weaviate/weaviate-module-spec/README.md)<br>[examples/wine-recommender/requirements.txt](../../../../sources/superlinked__sie/examples/wine-recommender/requirements.txt)<br>[examples/wine-recommender/wine_picture_detection/requirements.txt](../../../../sources/superlinked__sie/examples/wine-recommender/wine_picture_detection/requirements.txt)<br>[examples/stripe-link-fraud/web/public/architecture.svg](../../../../sources/superlinked__sie/examples/stripe-link-fraud/web/public/architecture.svg)<br>[examples/stripe-link-fraud/docs/architecture.svg](../../../../sources/superlinked__sie/examples/stripe-link-fraud/docs/architecture.svg) |
| eval | 286 | [packages/sie_ts_sdk/tests/chat.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/chat.test.ts)<br>[packages/sie_ts_sdk/tests/client.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/client.test.ts)<br>[packages/sie_ts_sdk/tests/errors.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/errors.test.ts)<br>[packages/sie_ts_sdk/tests/generate.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/generate.test.ts)<br>[packages/sie_ts_sdk/tests/images.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/images.test.ts)<br>[packages/sie_ts_sdk/tests/inputTooLong.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/inputTooLong.test.ts)<br>[packages/sie_ts_sdk/tests/internal.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/internal.test.ts)<br>[packages/sie_ts_sdk/tests/modelLoadFailed.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/modelLoadFailed.test.ts) |
| security | 6 | [packages/sie_server/tests/adapters/test_gliclass_overflow_policy.py](../../../../sources/superlinked__sie/packages/sie_server/tests/adapters/test_gliclass_overflow_policy.py)<br>[packages/sie_server/src/sie_server/types/overflow_policy.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/types/overflow_policy.py)<br>[packages/sie_gateway/src/middleware/audit.rs](../../../../sources/superlinked__sie/packages/sie_gateway/src/middleware/audit.rs)<br>[packages/sie_gateway/src/middleware/auth.rs](../../../../sources/superlinked__sie/packages/sie_gateway/src/middleware/auth.rs)<br>[deploy/helm/sie-cluster/templates/hf-token-secret.yaml](../../../../sources/superlinked__sie/deploy/helm/sie-cluster/templates/hf-token-secret.yaml)<br>[deploy/helm/sie-cluster/templates/rbac.yaml](../../../../sources/superlinked__sie/deploy/helm/sie-cluster/templates/rbac.yaml) |
| ci | 0 | not obvious |
| container | 63 | [packages/sie_server_sidecar/Dockerfile](../../../../sources/superlinked__sie/packages/sie_server_sidecar/Dockerfile)<br>[packages/sie_server/Dockerfile.cpu](../../../../sources/superlinked__sie/packages/sie_server/Dockerfile.cpu)<br>[packages/sie_server/Dockerfile.cuda12](../../../../sources/superlinked__sie/packages/sie_server/Dockerfile.cuda12)<br>[packages/sie_gateway/Dockerfile](../../../../sources/superlinked__sie/packages/sie_gateway/Dockerfile)<br>[packages/sie_config/Dockerfile](../../../../sources/superlinked__sie/packages/sie_config/Dockerfile)<br>[examples/wine-recommender/compose.yml](../../../../sources/superlinked__sie/examples/wine-recommender/compose.yml)<br>[examples/wine-recommender/Dockerfile.backend](../../../../sources/superlinked__sie/examples/wine-recommender/Dockerfile.backend)<br>[examples/wine-recommender/Dockerfile.frontend](../../../../sources/superlinked__sie/examples/wine-recommender/Dockerfile.frontend) |
| instruction | 0 | not obvious |
| docs | 35 | [README.md](../../../../sources/superlinked__sie/README.md)<br>[packages/sie_server_sidecar/README.md](../../../../sources/superlinked__sie/packages/sie_server_sidecar/README.md)<br>[packages/sie_server_sidecar/docs/architecture-guide.md](../../../../sources/superlinked__sie/packages/sie_server_sidecar/docs/architecture-guide.md)<br>[packages/sie_server/README.md](../../../../sources/superlinked__sie/packages/sie_server/README.md)<br>[packages/sie_sdk/README.md](../../../../sources/superlinked__sie/packages/sie_sdk/README.md)<br>[packages/sie_gateway/README.md](../../../../sources/superlinked__sie/packages/sie_gateway/README.md)<br>[packages/sie_gateway/docs/architecture-guide.md](../../../../sources/superlinked__sie/packages/sie_gateway/docs/architecture-guide.md)<br>[notebooks/README.md](../../../../sources/superlinked__sie/notebooks/README.md) |
| config | 47 | [package.json](../../../../sources/superlinked__sie/package.json)<br>[pnpm-workspace.yaml](../../../../sources/superlinked__sie/pnpm-workspace.yaml)<br>[pyproject.toml](../../../../sources/superlinked__sie/pyproject.toml)<br>[uv.lock](../../../../sources/superlinked__sie/uv.lock)<br>[packages/sie_ts_sdk/package.json](../../../../sources/superlinked__sie/packages/sie_ts_sdk/package.json)<br>[packages/sie_ts_sdk/tsconfig.json](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tsconfig.json)<br>[packages/sie_server_sidecar/Cargo.lock](../../../../sources/superlinked__sie/packages/sie_server_sidecar/Cargo.lock)<br>[packages/sie_server_sidecar/Cargo.toml](../../../../sources/superlinked__sie/packages/sie_server_sidecar/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 286 | [packages/sie_ts_sdk/tests/chat.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/chat.test.ts)<br>[packages/sie_ts_sdk/tests/client.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/client.test.ts)<br>[packages/sie_ts_sdk/tests/errors.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/errors.test.ts)<br>[packages/sie_ts_sdk/tests/generate.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/generate.test.ts)<br>[packages/sie_ts_sdk/tests/images.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/images.test.ts)<br>[packages/sie_ts_sdk/tests/inputTooLong.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/inputTooLong.test.ts) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 63 | [packages/sie_server_sidecar/Dockerfile](../../../../sources/superlinked__sie/packages/sie_server_sidecar/Dockerfile)<br>[packages/sie_server/Dockerfile.cpu](../../../../sources/superlinked__sie/packages/sie_server/Dockerfile.cpu)<br>[packages/sie_server/Dockerfile.cuda12](../../../../sources/superlinked__sie/packages/sie_server/Dockerfile.cuda12)<br>[packages/sie_gateway/Dockerfile](../../../../sources/superlinked__sie/packages/sie_gateway/Dockerfile)<br>[packages/sie_config/Dockerfile](../../../../sources/superlinked__sie/packages/sie_config/Dockerfile)<br>[examples/wine-recommender/compose.yml](../../../../sources/superlinked__sie/examples/wine-recommender/compose.yml) |
| Security / policy | 6 | [packages/sie_server/tests/adapters/test_gliclass_overflow_policy.py](../../../../sources/superlinked__sie/packages/sie_server/tests/adapters/test_gliclass_overflow_policy.py)<br>[packages/sie_server/src/sie_server/types/overflow_policy.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/types/overflow_policy.py)<br>[packages/sie_gateway/src/middleware/audit.rs](../../../../sources/superlinked__sie/packages/sie_gateway/src/middleware/audit.rs)<br>[packages/sie_gateway/src/middleware/auth.rs](../../../../sources/superlinked__sie/packages/sie_gateway/src/middleware/auth.rs)<br>[deploy/helm/sie-cluster/templates/hf-token-secret.yaml](../../../../sources/superlinked__sie/deploy/helm/sie-cluster/templates/hf-token-secret.yaml)<br>[deploy/helm/sie-cluster/templates/rbac.yaml](../../../../sources/superlinked__sie/deploy/helm/sie-cluster/templates/rbac.yaml) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `packages/sie_ts_sdk/src/index.ts`, `packages/sie_server_sidecar/src/main.rs`, `packages/sie_server/src/sie_server/main.py`.
2. Trace execution through entrypoints: `packages/sie_ts_sdk/src/index.ts`, `packages/sie_server_sidecar/src/main.rs`, `packages/sie_server/src/sie_server/main.py`.
3. Map agent/tool runtime through: `packages/sie_server/src/sie_server/processors/tool_call_grammar.py`, `packages/sie_server/src/sie_server/processors/tool_call_parser.py`, `packages/sie_server/src/sie_server/core/memory.py`.
4. Inspect retrieval/memory/indexing through: `packages/sie_ts_sdk/tests/browser/index.html`, `packages/sie_ts_sdk/src/index.ts`, `packages/sie_server/tests/core/test_memory.py`.
5. Verify behavior through test/eval files: `packages/sie_ts_sdk/tests/chat.test.ts`, `packages/sie_ts_sdk/tests/client.test.ts`, `packages/sie_ts_sdk/tests/errors.test.ts`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Open source inference server and production cluster for all the models your agent needs.. 핵심 구조 신호는 Python, package.json, pyproject.toml, README.md, LICENSE, langchain이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
