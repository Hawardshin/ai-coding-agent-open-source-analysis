# CaviraOSS/OpenMemory 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local persistent memory store for LLM applications including claude desktop, github copilot, codex, antigravity, etc.

## 요약

- 조사 단위: `sources/CaviraOSS__OpenMemory` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 284 files, 76 directories, depth score 117, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=packages/openmemory-py/src/openmemory/temporal_graph/__init__.py, packages/openmemory-py/src/openmemory/temporal_graph/query.py, packages/openmemory-py/src/openmemory/temporal_graph/store.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | CaviraOSS/OpenMemory |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 4243 |
| Forks | 481 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/CaviraOSS__OpenMemory](../../../../sources/CaviraOSS__OpenMemory) |
| 기존 보고서 | [reports/global-trending/repositories/CaviraOSS__OpenMemory.md](../../../global-trending/repositories/CaviraOSS__OpenMemory.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 284 / 76 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .do, .github, apps, dashboard, docs, examples, packages, tools |
| 상위 확장자 | .ts: 94, .py: 93, .md: 26, .json: 14, .tsx: 12, .yml: 10, (none): 10, .js: 6, .png: 3, .example: 2, .mjs: 2, .ps1: 2 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/openmemory-js | packages workspace | 50 |
| packages/openmemory-py | packages workspace | 34 |
| apps/vscode-extension | apps workspace | 14 |
| docs | documentation surface | 12 |
| examples/python | examples workspace | 5 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| dashboard | top-level component | 1 |
| examples | top-level component | 1 |
| examples/node | examples workspace | 1 |
| packages | source boundary | 1 |
| tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | install | make install |
| serve-dev | Makefile | install-dev | make install-dev |
| build | Makefile | build | make build |
| build | Makefile | build-backend | make build-backend |
| build | Makefile | build-js-sdk | make build-js-sdk |
| serve-dev | Makefile | dev | make dev |
| serve-dev | Makefile | dev-watch | make dev-watch |
| serve-dev | Makefile | start | make start |
| utility | Makefile | stop | make stop |
| test | Makefile | test | make test |
| test | Makefile | test-backend | make test-backend |
| test | Makefile | test-js-sdk | make test-js-sdk |
| test | Makefile | test-py-sdk | make test-py-sdk |
| test | Makefile | test-integration | make test-integration |
| quality | Makefile | lint | make lint |
| quality | Makefile | format | make format |
| quality | Makefile | type-check | make type-check |
| utility | Makefile | db-reset | make db-reset |


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
| retrieval | [packages/openmemory-py/src/openmemory/temporal_graph/__init__.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/__init__.py) | retrieval signal |
| retrieval | [packages/openmemory-py/src/openmemory/temporal_graph/query.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/query.py) | retrieval signal |
| retrieval | [packages/openmemory-py/src/openmemory/temporal_graph/store.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/store.py) | retrieval signal |
| retrieval | [packages/openmemory-py/src/openmemory/temporal_graph/timeline.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/timeline.py) | retrieval signal |
| entrypoints | [tools/migrate/__main__.py](../../../../sources/CaviraOSS__OpenMemory/tools/migrate/__main__.py) | entrypoints signal |
| entrypoints | [packages/openmemory-py/src/openmemory/main.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/main.py) | entrypoints signal |
| entrypoints | [packages/openmemory-js/src/cli.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/cli.ts) | entrypoints signal |
| entrypoints | [packages/openmemory-js/src/index.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/index.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/CaviraOSS__OpenMemory/README.md) | docs signal |
| docs | [packages/openmemory-py/README.md](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/README.md) | docs signal |
| docs | [packages/openmemory-js/README.md](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/README.md) | docs signal |
| docs | [docs/api-server.md](../../../../sources/CaviraOSS__OpenMemory/docs/api-server.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 17 | [tools/migrate/__main__.py](../../../../sources/CaviraOSS__OpenMemory/tools/migrate/__main__.py)<br>[packages/openmemory-py/src/openmemory/main.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/main.py)<br>[packages/openmemory-js/src/cli.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/cli.ts)<br>[packages/openmemory-js/src/index.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/index.ts)<br>[packages/openmemory-js/src/server.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/server.ts)<br>[packages/openmemory-js/src/server/server.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/server/server.ts)<br>[packages/openmemory-js/bin/opm.js](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/bin/opm.js)<br>[apps/vscode-extension/src/extension.ts](../../../../sources/CaviraOSS__OpenMemory/apps/vscode-extension/src/extension.ts) |
| agentRuntime | 39 | [tools/backup_restore.py](../../../../sources/CaviraOSS__OpenMemory/tools/backup_restore.py)<br>[tools/ops/benchmark.py](../../../../sources/CaviraOSS__OpenMemory/tools/ops/benchmark.py)<br>[tools/ops/health_viz.py](../../../../sources/CaviraOSS__OpenMemory/tools/ops/health_viz.py)<br>[tools/migrate/__init__.py](../../../../sources/CaviraOSS__OpenMemory/tools/migrate/__init__.py)<br>[tools/migrate/__main__.py](../../../../sources/CaviraOSS__OpenMemory/tools/migrate/__main__.py)<br>[tools/migrate/importer.py](../../../../sources/CaviraOSS__OpenMemory/tools/migrate/importer.py)<br>[tools/migrate/schemas.py](../../../../sources/CaviraOSS__OpenMemory/tools/migrate/schemas.py)<br>[tools/migrate/utils.py](../../../../sources/CaviraOSS__OpenMemory/tools/migrate/utils.py) |
| mcp | 5 | [packages/openmemory-py/src/openmemory/ai/mcp.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/ai/mcp.py)<br>[packages/openmemory-js/tests/mcp_per_tenant.test.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/tests/mcp_per_tenant.test.ts)<br>[packages/openmemory-js/src/ai/mcp_tools.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/ai/mcp_tools.ts)<br>[packages/openmemory-js/src/ai/mcp.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/ai/mcp.ts)<br>[docs/mcp.md](../../../../sources/CaviraOSS__OpenMemory/docs/mcp.md) |
| retrieval | 47 | [packages/openmemory-py/src/openmemory/temporal_graph/__init__.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/__init__.py)<br>[packages/openmemory-py/src/openmemory/temporal_graph/query.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/query.py)<br>[packages/openmemory-py/src/openmemory/temporal_graph/store.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/store.py)<br>[packages/openmemory-py/src/openmemory/temporal_graph/timeline.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/timeline.py)<br>[packages/openmemory-py/src/openmemory/temporal_graph/types.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/temporal_graph/types.py)<br>[packages/openmemory-py/src/openmemory/server/routes/memory.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/server/routes/memory.py)<br>[packages/openmemory-py/src/openmemory/ops/ingest.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/ops/ingest.py)<br>[packages/openmemory-py/src/openmemory/memory/decay.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/memory/decay.py) |
| spec | 2 | [ARCHITECTURE.md](../../../../sources/CaviraOSS__OpenMemory/ARCHITECTURE.md)<br>[.do/spec.yaml](../../../../sources/CaviraOSS__OpenMemory/.do/spec.yaml) |
| eval | 14 | [tools/ops/benchmark.py](../../../../sources/CaviraOSS__OpenMemory/tools/ops/benchmark.py)<br>[packages/openmemory-py/tests/test_minimax.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/tests/test_minimax.py)<br>[packages/openmemory-py/tests/test_omnibus.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/tests/test_omnibus.py)<br>[packages/openmemory-py/tests/test_multilingual_dedup.py/test_multilingual_dedup.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/tests/test_multilingual_dedup.py/test_multilingual_dedup.py)<br>[packages/openmemory-py/src/openmemory/trace.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/trace.py)<br>[packages/openmemory-js/tests/mcp_per_tenant.test.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/tests/mcp_per_tenant.test.ts)<br>[packages/openmemory-js/tests/multilingual_dedup.test.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/tests/multilingual_dedup.test.ts)<br>[packages/openmemory-js/tests/omnibus.test.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/tests/omnibus.test.ts) |
| security | 2 | [SECURITY.md](../../../../sources/CaviraOSS__OpenMemory/SECURITY.md)<br>[packages/openmemory-js/src/server/middleware/auth.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/server/middleware/auth.ts) |
| ci | 5 | [.github/workflows/ci.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/ci.yml)<br>[.github/workflows/docker-build.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/docker-build.yml)<br>[.github/workflows/main.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/main.yml)<br>[.github/workflows/publish-docker-image.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/publish-docker-image.yml)<br>[.github/workflows/publish-sdks.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/publish-sdks.yml) |
| container | 3 | [docker-compose.yml](../../../../sources/CaviraOSS__OpenMemory/docker-compose.yml)<br>[packages/openmemory-js/Dockerfile](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/Dockerfile)<br>[dashboard/Dockerfile](../../../../sources/CaviraOSS__OpenMemory/dashboard/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 15 | [README.md](../../../../sources/CaviraOSS__OpenMemory/README.md)<br>[packages/openmemory-py/README.md](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/README.md)<br>[packages/openmemory-js/README.md](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/README.md)<br>[docs/api-server.md](../../../../sources/CaviraOSS__OpenMemory/docs/api-server.md)<br>[docs/concepts.md](../../../../sources/CaviraOSS__OpenMemory/docs/concepts.md)<br>[docs/faq.md](../../../../sources/CaviraOSS__OpenMemory/docs/faq.md)<br>[docs/getting-started.md](../../../../sources/CaviraOSS__OpenMemory/docs/getting-started.md)<br>[docs/index.md](../../../../sources/CaviraOSS__OpenMemory/docs/index.md) |
| config | 8 | [Makefile](../../../../sources/CaviraOSS__OpenMemory/Makefile)<br>[packages/openmemory-py/pyproject.toml](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/pyproject.toml)<br>[packages/openmemory-js/package.json](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/package.json)<br>[packages/openmemory-js/tsconfig.json](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/tsconfig.json)<br>[dashboard/package.json](../../../../sources/CaviraOSS__OpenMemory/dashboard/package.json)<br>[dashboard/tsconfig.json](../../../../sources/CaviraOSS__OpenMemory/dashboard/tsconfig.json)<br>[apps/vscode-extension/package.json](../../../../sources/CaviraOSS__OpenMemory/apps/vscode-extension/package.json)<br>[apps/vscode-extension/tsconfig.json](../../../../sources/CaviraOSS__OpenMemory/apps/vscode-extension/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 14 | [tools/ops/benchmark.py](../../../../sources/CaviraOSS__OpenMemory/tools/ops/benchmark.py)<br>[packages/openmemory-py/tests/test_minimax.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/tests/test_minimax.py)<br>[packages/openmemory-py/tests/test_omnibus.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/tests/test_omnibus.py)<br>[packages/openmemory-py/tests/test_multilingual_dedup.py/test_multilingual_dedup.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/tests/test_multilingual_dedup.py/test_multilingual_dedup.py)<br>[packages/openmemory-py/src/openmemory/trace.py](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-py/src/openmemory/trace.py)<br>[packages/openmemory-js/tests/mcp_per_tenant.test.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/tests/mcp_per_tenant.test.ts) |
| CI workflow | 5 | [.github/workflows/ci.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/ci.yml)<br>[.github/workflows/docker-build.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/docker-build.yml)<br>[.github/workflows/main.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/main.yml)<br>[.github/workflows/publish-docker-image.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/publish-docker-image.yml)<br>[.github/workflows/publish-sdks.yml](../../../../sources/CaviraOSS__OpenMemory/.github/workflows/publish-sdks.yml) |
| 컨테이너/배포 | 3 | [docker-compose.yml](../../../../sources/CaviraOSS__OpenMemory/docker-compose.yml)<br>[packages/openmemory-js/Dockerfile](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/Dockerfile)<br>[dashboard/Dockerfile](../../../../sources/CaviraOSS__OpenMemory/dashboard/Dockerfile) |
| 보안/정책 | 2 | [SECURITY.md](../../../../sources/CaviraOSS__OpenMemory/SECURITY.md)<br>[packages/openmemory-js/src/server/middleware/auth.ts](../../../../sources/CaviraOSS__OpenMemory/packages/openmemory-js/src/server/middleware/auth.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/openmemory-py/src/openmemory/temporal_graph/__init__.py`, `packages/openmemory-py/src/openmemory/temporal_graph/query.py`, `packages/openmemory-py/src/openmemory/temporal_graph/store.py`.
2. entrypoint를 따라 실행 흐름 확인: `tools/migrate/__main__.py`, `packages/openmemory-py/src/openmemory/main.py`, `packages/openmemory-js/src/cli.ts`.
3. agent/tool runtime 매핑: `tools/backup_restore.py`, `tools/ops/benchmark.py`, `tools/ops/health_viz.py`.
4. retrieval/memory/indexing 확인: `packages/openmemory-py/src/openmemory/temporal_graph/__init__.py`, `packages/openmemory-py/src/openmemory/temporal_graph/query.py`, `packages/openmemory-py/src/openmemory/temporal_graph/store.py`.
5. test/eval 파일로 동작 검증: `tools/ops/benchmark.py`, `packages/openmemory-py/tests/test_minimax.py`, `packages/openmemory-py/tests/test_omnibus.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Local persistent memory store for LLM applications including claude desktop, github copilot, codex, antigravity, etc.. 핵심 구조 신호는 TypeScript, docker-compose.yml, Makefile, README.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
