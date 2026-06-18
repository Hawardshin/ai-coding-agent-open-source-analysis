# superlinked/sie 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Open-source inference server and production cluster for all the models your agent needs.

## 요약

- 조사 단위: `sources/superlinked__sie` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,190 files, 260 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 entrypoints=packages/sie_ts_sdk/src/index.ts, packages/sie_server_sidecar/src/main.rs, packages/sie_server/src/sie_server/main.py이고, 의존성 단서는 mcp, langchain, llamaindex, express, pydantic, torch, 검증/운영 단서는 test/eval 경로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | superlinked/sie |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Python |
| Stars | 2053 |
| Forks | 183 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/superlinked__sie](../../../../sources/superlinked__sie) |
| 기존 보고서 | [reports/global-trending/repositories/superlinked__sie.md](../../../global-trending/repositories/superlinked__sie.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1190 / 260 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | deploy, examples, integrations, notebooks, packages |
| 상위 확장자 | .py: 535, .yaml: 176, .rs: 111, .ts: 91, .tsx: 65, .json: 46, .md: 41, (none): 25, .toml: 18, .png: 16, .svg: 10, .jpg: 7 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | pnpm -r run build |
| test | package.json | test | pnpm -r run test |
| quality | package.json | typecheck | pnpm -r run typecheck |
| quality | package.json | lint | pnpm -r run lint |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | langchain, llamaindex |
| vectorStores | chroma, qdrant, weaviate |
| modelRuntime | torch, llama |
| webRuntime | express |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 17 | [packages/sie_ts_sdk/src/index.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/src/index.ts)<br>[packages/sie_server_sidecar/src/main.rs](../../../../sources/superlinked__sie/packages/sie_server_sidecar/src/main.rs)<br>[packages/sie_server/src/sie_server/main.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/main.py)<br>[packages/sie_gateway/src/main.rs](../../../../sources/superlinked__sie/packages/sie_gateway/src/main.rs)<br>[packages/sie_gateway/src/server.rs](../../../../sources/superlinked__sie/packages/sie_gateway/src/server.rs)<br>[integrations/sie_ts_llamaindex/src/index.ts](../../../../sources/superlinked__sie/integrations/sie_ts_llamaindex/src/index.ts)<br>[integrations/sie_ts_langchain/src/index.ts](../../../../sources/superlinked__sie/integrations/sie_ts_langchain/src/index.ts)<br>[integrations/sie_ts_lancedb/src/index.ts](../../../../sources/superlinked__sie/integrations/sie_ts_lancedb/src/index.ts) |
| agentRuntime | 12 | [packages/sie_server/src/sie_server/processors/tool_call_grammar.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/processors/tool_call_grammar.py)<br>[packages/sie_server/src/sie_server/processors/tool_call_parser.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/processors/tool_call_parser.py)<br>[packages/sie_server/src/sie_server/core/memory.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/core/memory.py)<br>[integrations/sie_crewai/src/sie_crewai/tools.py](../../../../sources/superlinked__sie/integrations/sie_crewai/src/sie_crewai/tools.py)<br>[examples/wine-recommender/app/hooks/use-mobile.ts](../../../../sources/superlinked__sie/examples/wine-recommender/app/hooks/use-mobile.ts)<br>[examples/wine-recommender/app/hooks/use-toast.ts](../../../../sources/superlinked__sie/examples/wine-recommender/app/hooks/use-toast.ts)<br>[examples/wine-recommender/app/components/ui/context-menu.tsx](../../../../sources/superlinked__sie/examples/wine-recommender/app/components/ui/context-menu.tsx)<br>[deploy/helm/sie-cluster/templates/hooks/cert-manager-conflict-check.yaml](../../../../sources/superlinked__sie/deploy/helm/sie-cluster/templates/hooks/cert-manager-conflict-check.yaml) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 72 | [packages/sie_ts_sdk/tests/browser/index.html](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/browser/index.html)<br>[packages/sie_ts_sdk/src/index.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/src/index.ts)<br>[packages/sie_server/tests/core/test_memory.py](../../../../sources/superlinked__sie/packages/sie_server/tests/core/test_memory.py)<br>[packages/sie_server/tests/core/test_registry_memory.py](../../../../sources/superlinked__sie/packages/sie_server/tests/core/test_registry_memory.py)<br>[packages/sie_server/tests/adapters/test_pytorch_embedding_revision.py](../../../../sources/superlinked__sie/packages/sie_server/tests/adapters/test_pytorch_embedding_revision.py)<br>[packages/sie_server/tests/adapters/test_vision_patch_embed.py](../../../../sources/superlinked__sie/packages/sie_server/tests/adapters/test_vision_patch_embed.py)<br>[packages/sie_server/src/sie_server/static/index.html](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/static/index.html)<br>[packages/sie_server/src/sie_server/core/memory.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/core/memory.py) |
| spec | 10 | [packages/sie_server_sidecar/docs/architecture-guide.md](../../../../sources/superlinked__sie/packages/sie_server_sidecar/docs/architecture-guide.md)<br>[packages/sie_server/src/sie_server/adapters/_spec.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/adapters/_spec.py)<br>[packages/sie_gateway/docs/architecture-guide.md](../../../../sources/superlinked__sie/packages/sie_gateway/docs/architecture-guide.md)<br>[integrations/sie_weaviate/weaviate-module-spec/README.md](../../../../sources/superlinked__sie/integrations/sie_weaviate/weaviate-module-spec/README.md)<br>[examples/wine-recommender/requirements.txt](../../../../sources/superlinked__sie/examples/wine-recommender/requirements.txt)<br>[examples/wine-recommender/wine_picture_detection/requirements.txt](../../../../sources/superlinked__sie/examples/wine-recommender/wine_picture_detection/requirements.txt)<br>[examples/stripe-link-fraud/web/public/architecture.svg](../../../../sources/superlinked__sie/examples/stripe-link-fraud/web/public/architecture.svg)<br>[examples/stripe-link-fraud/docs/architecture.svg](../../../../sources/superlinked__sie/examples/stripe-link-fraud/docs/architecture.svg) |
| eval | 286 | [packages/sie_ts_sdk/tests/chat.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/chat.test.ts)<br>[packages/sie_ts_sdk/tests/client.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/client.test.ts)<br>[packages/sie_ts_sdk/tests/errors.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/errors.test.ts)<br>[packages/sie_ts_sdk/tests/generate.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/generate.test.ts)<br>[packages/sie_ts_sdk/tests/images.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/images.test.ts)<br>[packages/sie_ts_sdk/tests/inputTooLong.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/inputTooLong.test.ts)<br>[packages/sie_ts_sdk/tests/internal.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/internal.test.ts)<br>[packages/sie_ts_sdk/tests/modelLoadFailed.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/modelLoadFailed.test.ts) |
| security | 6 | [packages/sie_server/tests/adapters/test_gliclass_overflow_policy.py](../../../../sources/superlinked__sie/packages/sie_server/tests/adapters/test_gliclass_overflow_policy.py)<br>[packages/sie_server/src/sie_server/types/overflow_policy.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/types/overflow_policy.py)<br>[packages/sie_gateway/src/middleware/audit.rs](../../../../sources/superlinked__sie/packages/sie_gateway/src/middleware/audit.rs)<br>[packages/sie_gateway/src/middleware/auth.rs](../../../../sources/superlinked__sie/packages/sie_gateway/src/middleware/auth.rs)<br>[deploy/helm/sie-cluster/templates/hf-token-secret.yaml](../../../../sources/superlinked__sie/deploy/helm/sie-cluster/templates/hf-token-secret.yaml)<br>[deploy/helm/sie-cluster/templates/rbac.yaml](../../../../sources/superlinked__sie/deploy/helm/sie-cluster/templates/rbac.yaml) |
| ci | 0 | 명확하지 않음 |
| container | 63 | [packages/sie_server_sidecar/Dockerfile](../../../../sources/superlinked__sie/packages/sie_server_sidecar/Dockerfile)<br>[packages/sie_server/Dockerfile.cpu](../../../../sources/superlinked__sie/packages/sie_server/Dockerfile.cpu)<br>[packages/sie_server/Dockerfile.cuda12](../../../../sources/superlinked__sie/packages/sie_server/Dockerfile.cuda12)<br>[packages/sie_gateway/Dockerfile](../../../../sources/superlinked__sie/packages/sie_gateway/Dockerfile)<br>[packages/sie_config/Dockerfile](../../../../sources/superlinked__sie/packages/sie_config/Dockerfile)<br>[examples/wine-recommender/compose.yml](../../../../sources/superlinked__sie/examples/wine-recommender/compose.yml)<br>[examples/wine-recommender/Dockerfile.backend](../../../../sources/superlinked__sie/examples/wine-recommender/Dockerfile.backend)<br>[examples/wine-recommender/Dockerfile.frontend](../../../../sources/superlinked__sie/examples/wine-recommender/Dockerfile.frontend) |
| instruction | 0 | 명확하지 않음 |
| docs | 35 | [README.md](../../../../sources/superlinked__sie/README.md)<br>[packages/sie_server_sidecar/README.md](../../../../sources/superlinked__sie/packages/sie_server_sidecar/README.md)<br>[packages/sie_server_sidecar/docs/architecture-guide.md](../../../../sources/superlinked__sie/packages/sie_server_sidecar/docs/architecture-guide.md)<br>[packages/sie_server/README.md](../../../../sources/superlinked__sie/packages/sie_server/README.md)<br>[packages/sie_sdk/README.md](../../../../sources/superlinked__sie/packages/sie_sdk/README.md)<br>[packages/sie_gateway/README.md](../../../../sources/superlinked__sie/packages/sie_gateway/README.md)<br>[packages/sie_gateway/docs/architecture-guide.md](../../../../sources/superlinked__sie/packages/sie_gateway/docs/architecture-guide.md)<br>[notebooks/README.md](../../../../sources/superlinked__sie/notebooks/README.md) |
| config | 47 | [package.json](../../../../sources/superlinked__sie/package.json)<br>[pnpm-workspace.yaml](../../../../sources/superlinked__sie/pnpm-workspace.yaml)<br>[pyproject.toml](../../../../sources/superlinked__sie/pyproject.toml)<br>[uv.lock](../../../../sources/superlinked__sie/uv.lock)<br>[packages/sie_ts_sdk/package.json](../../../../sources/superlinked__sie/packages/sie_ts_sdk/package.json)<br>[packages/sie_ts_sdk/tsconfig.json](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tsconfig.json)<br>[packages/sie_server_sidecar/Cargo.lock](../../../../sources/superlinked__sie/packages/sie_server_sidecar/Cargo.lock)<br>[packages/sie_server_sidecar/Cargo.toml](../../../../sources/superlinked__sie/packages/sie_server_sidecar/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 286 | [packages/sie_ts_sdk/tests/chat.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/chat.test.ts)<br>[packages/sie_ts_sdk/tests/client.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/client.test.ts)<br>[packages/sie_ts_sdk/tests/errors.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/errors.test.ts)<br>[packages/sie_ts_sdk/tests/generate.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/generate.test.ts)<br>[packages/sie_ts_sdk/tests/images.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/images.test.ts)<br>[packages/sie_ts_sdk/tests/inputTooLong.test.ts](../../../../sources/superlinked__sie/packages/sie_ts_sdk/tests/inputTooLong.test.ts) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 63 | [packages/sie_server_sidecar/Dockerfile](../../../../sources/superlinked__sie/packages/sie_server_sidecar/Dockerfile)<br>[packages/sie_server/Dockerfile.cpu](../../../../sources/superlinked__sie/packages/sie_server/Dockerfile.cpu)<br>[packages/sie_server/Dockerfile.cuda12](../../../../sources/superlinked__sie/packages/sie_server/Dockerfile.cuda12)<br>[packages/sie_gateway/Dockerfile](../../../../sources/superlinked__sie/packages/sie_gateway/Dockerfile)<br>[packages/sie_config/Dockerfile](../../../../sources/superlinked__sie/packages/sie_config/Dockerfile)<br>[examples/wine-recommender/compose.yml](../../../../sources/superlinked__sie/examples/wine-recommender/compose.yml) |
| 보안/정책 | 6 | [packages/sie_server/tests/adapters/test_gliclass_overflow_policy.py](../../../../sources/superlinked__sie/packages/sie_server/tests/adapters/test_gliclass_overflow_policy.py)<br>[packages/sie_server/src/sie_server/types/overflow_policy.py](../../../../sources/superlinked__sie/packages/sie_server/src/sie_server/types/overflow_policy.py)<br>[packages/sie_gateway/src/middleware/audit.rs](../../../../sources/superlinked__sie/packages/sie_gateway/src/middleware/audit.rs)<br>[packages/sie_gateway/src/middleware/auth.rs](../../../../sources/superlinked__sie/packages/sie_gateway/src/middleware/auth.rs)<br>[deploy/helm/sie-cluster/templates/hf-token-secret.yaml](../../../../sources/superlinked__sie/deploy/helm/sie-cluster/templates/hf-token-secret.yaml)<br>[deploy/helm/sie-cluster/templates/rbac.yaml](../../../../sources/superlinked__sie/deploy/helm/sie-cluster/templates/rbac.yaml) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/sie_ts_sdk/src/index.ts`, `packages/sie_server_sidecar/src/main.rs`, `packages/sie_server/src/sie_server/main.py`.
2. entrypoint를 따라 실행 흐름 확인: `packages/sie_ts_sdk/src/index.ts`, `packages/sie_server_sidecar/src/main.rs`, `packages/sie_server/src/sie_server/main.py`.
3. agent/tool runtime 매핑: `packages/sie_server/src/sie_server/processors/tool_call_grammar.py`, `packages/sie_server/src/sie_server/processors/tool_call_parser.py`, `packages/sie_server/src/sie_server/core/memory.py`.
4. retrieval/memory/indexing 확인: `packages/sie_ts_sdk/tests/browser/index.html`, `packages/sie_ts_sdk/src/index.ts`, `packages/sie_server/tests/core/test_memory.py`.
5. test/eval 파일로 동작 검증: `packages/sie_ts_sdk/tests/chat.test.ts`, `packages/sie_ts_sdk/tests/client.test.ts`, `packages/sie_ts_sdk/tests/errors.test.ts`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Open source inference server and production cluster for all the models your agent needs.. 핵심 구조 신호는 Python, package.json, pyproject.toml, README.md, LICENSE, langchain이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
