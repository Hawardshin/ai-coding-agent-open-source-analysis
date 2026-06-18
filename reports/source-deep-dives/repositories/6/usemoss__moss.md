# usemoss/moss 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

The retrieval layer for production AI systems. Lightning-fast (<10ms) search without vector databases. Built for browser, edge, on-device, and cloud.

## 요약

- 조사 단위: `sources/usemoss__moss` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 977 files, 271 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=sdks/python/sdk/tests/test_create_index_versions.py, sdks/javascript/sdk/test/create_index_versions.test.ts, sdks/javascript/sdk/src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | usemoss/moss |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 423 |
| Forks | 50 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/usemoss__moss](../../../../sources/usemoss__moss) |
| 기존 보고서 | [reports/global-trending/repositories/usemoss__moss.md](../../../global-trending/repositories/usemoss__moss.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 977 / 271 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, apps, assets, benchmarks, examples, moss-live-labs, moss-workshop, packages, scripts, sdks |
| 상위 확장자 | .py: 179, .md: 165, .ts: 95, .json: 94, (none): 70, .toml: 50, .tsx: 50, .example: 40, .yml: 28, .lock: 27, .go: 18, .rs: 18 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/vitepress-plugin-moss | packages workspace | 34 |
| apps/livekit-moss-vercel | apps workspace | 28 |
| packages/moss-data-connector | packages workspace | 13 |
| packages/vercel-sdk | packages workspace | 8 |
| packages/moss-md-indexer | packages workspace | 7 |
| apps/docker | apps workspace | 6 |
| apps/moss-bun | apps workspace | 6 |
| packages/pipecat-moss | packages workspace | 6 |
| apps/pipecat-moss | apps workspace | 5 |
| packages/mastra-moss | packages workspace | 5 |
| examples/cookbook | examples workspace | 4 |
| examples/voice-agents | examples workspace | 4 |
| apps/agora-moss | apps workspace | 3 |
| apps/moss-llamaindex | apps workspace | 3 |
| examples/ios | examples workspace | 3 |
| examples/python | examples workspace | 3 |
| packages/moss-cli | packages workspace | 3 |
| examples/go | examples workspace | 2 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | type-check | npm run type-check --prefix examples/javascript && npm run type-check --prefix apps/next-js |
| quality | package.json | lint | npm run lint --prefix examples/javascript && npm run lint --prefix apps/next-js |


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
| retrieval | [sdks/python/sdk/tests/test_create_index_versions.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_create_index_versions.py) | retrieval signal |
| retrieval | [sdks/javascript/sdk/test/create_index_versions.test.ts](../../../../sources/usemoss__moss/sdks/javascript/sdk/test/create_index_versions.test.ts) | retrieval signal |
| retrieval | [sdks/javascript/sdk/src/index.ts](../../../../sources/usemoss__moss/sdks/javascript/sdk/src/index.ts) | retrieval signal |
| retrieval | [sdks/javascript/bindings/index.d.ts](../../../../sources/usemoss__moss/sdks/javascript/bindings/index.d.ts) | retrieval signal |
| entrypoints | [packages/vercel-sdk/src/index.ts](../../../../sources/usemoss__moss/packages/vercel-sdk/src/index.ts) | entrypoints signal |
| entrypoints | [packages/moss-md-indexer/src/index.ts](../../../../sources/usemoss__moss/packages/moss-md-indexer/src/index.ts) | entrypoints signal |
| entrypoints | [packages/moss-cli/src/moss_cli/main.py](../../../../sources/usemoss__moss/packages/moss-cli/src/moss_cli/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/usemoss__moss/README.md) | docs signal |
| docs | [sdks/swift/README.md](../../../../sources/usemoss__moss/sdks/swift/README.md) | docs signal |
| docs | [sdks/python/README.md](../../../../sources/usemoss__moss/sdks/python/README.md) | docs signal |
| docs | [sdks/python/sdk/README.md](../../../../sources/usemoss__moss/sdks/python/sdk/README.md) | docs signal |
| eval | [sdks/python/sdk/tests/__init__.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/__init__.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 26 | [sdks/javascript/sdk/src/index.ts](../../../../sources/usemoss__moss/sdks/javascript/sdk/src/index.ts)<br>[packages/vercel-sdk/src/index.ts](../../../../sources/usemoss__moss/packages/vercel-sdk/src/index.ts)<br>[packages/moss-md-indexer/src/index.ts](../../../../sources/usemoss__moss/packages/moss-md-indexer/src/index.ts)<br>[packages/moss-cli/src/moss_cli/main.py](../../../../sources/usemoss__moss/packages/moss-cli/src/moss_cli/main.py)<br>[packages/mastra-moss/src/index.ts](../../../../sources/usemoss__moss/packages/mastra-moss/src/index.ts)<br>[moss-live-labs/examples/image-search/react-app/src/App.css](../../../../sources/usemoss__moss/moss-live-labs/examples/image-search/react-app/src/App.css)<br>[moss-live-labs/examples/image-search/react-app/src/App.tsx](../../../../sources/usemoss__moss/moss-live-labs/examples/image-search/react-app/src/App.tsx)<br>[moss-live-labs/examples/image-search/react-app/src/index.css](../../../../sources/usemoss__moss/moss-live-labs/examples/image-search/react-app/src/index.css) |
| agentRuntime | 98 | [AGENTS.md](../../../../sources/usemoss__moss/AGENTS.md)<br>[packages/zo-computer/zo-skill/SKILL.md](../../../../sources/usemoss__moss/packages/zo-computer/zo-skill/SKILL.md)<br>[packages/vercel-sdk/src/tools/docs.ts](../../../../sources/usemoss__moss/packages/vercel-sdk/src/tools/docs.ts)<br>[packages/vercel-sdk/src/tools/indexes.ts](../../../../sources/usemoss__moss/packages/vercel-sdk/src/tools/indexes.ts)<br>[packages/vercel-sdk/src/tools/search.ts](../../../../sources/usemoss__moss/packages/vercel-sdk/src/tools/search.ts)<br>[packages/mastra-moss/test/tools.test.ts](../../../../sources/usemoss__moss/packages/mastra-moss/test/tools.test.ts)<br>[packages/mastra-moss/src/tools.ts](../../../../sources/usemoss__moss/packages/mastra-moss/src/tools.ts)<br>[moss-live-labs/examples/voice-agent/agent.py](../../../../sources/usemoss__moss/moss-live-labs/examples/voice-agent/agent.py) |
| mcp | 1 | [apps/agora-moss/test_mcp_client.py](../../../../sources/usemoss__moss/apps/agora-moss/test_mcp_client.py) |
| retrieval | 57 | [sdks/python/sdk/tests/test_create_index_versions.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_create_index_versions.py)<br>[sdks/javascript/sdk/test/create_index_versions.test.ts](../../../../sources/usemoss__moss/sdks/javascript/sdk/test/create_index_versions.test.ts)<br>[sdks/javascript/sdk/src/index.ts](../../../../sources/usemoss__moss/sdks/javascript/sdk/src/index.ts)<br>[sdks/javascript/bindings/index.d.ts](../../../../sources/usemoss__moss/sdks/javascript/bindings/index.d.ts)<br>[sdks/javascript/bindings/index.js](../../../../sources/usemoss__moss/sdks/javascript/bindings/index.js)<br>[sdks/elixir/sdk/test/moss/index_filter_test.exs](../../../../sources/usemoss__moss/sdks/elixir/sdk/test/moss/index_filter_test.exs)<br>[sdks/elixir/sdk/test/moss/index_manager_text_api_test.exs](../../../../sources/usemoss__moss/sdks/elixir/sdk/test/moss/index_manager_text_api_test.exs)<br>[sdks/elixir/sdk/samples/example_extend_index.exs](../../../../sources/usemoss__moss/sdks/elixir/sdk/samples/example_extend_index.exs) |
| spec | 10 | [ROADMAP.md](../../../../sources/usemoss__moss/ROADMAP.md)<br>[moss-workshop/starter/requirements.txt](../../../../sources/usemoss__moss/moss-workshop/starter/requirements.txt)<br>[moss-live-labs/community-demos/voice-agents/bharat-benefits/requirements.txt](../../../../sources/usemoss__moss/moss-live-labs/community-demos/voice-agents/bharat-benefits/requirements.txt)<br>[examples/python-classification/requirements.txt](../../../../sources/usemoss__moss/examples/python-classification/requirements.txt)<br>[examples/python/requirements.txt](../../../../sources/usemoss__moss/examples/python/requirements.txt)<br>[examples/ios/token-server/python/requirements.txt](../../../../sources/usemoss__moss/examples/ios/token-server/python/requirements.txt)<br>[benchmarks/requirements.txt](../../../../sources/usemoss__moss/benchmarks/requirements.txt)<br>[assets/moss-architecture.svg](../../../../sources/usemoss__moss/assets/moss-architecture.svg) |
| eval | 83 | [sdks/python/sdk/tests/__init__.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/__init__.py)<br>[sdks/python/sdk/tests/conftest.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/conftest.py)<br>[sdks/python/sdk/tests/constants.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/constants.py)<br>[sdks/python/sdk/tests/test_client_extended.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_client_extended.py)<br>[sdks/python/sdk/tests/test_client.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_client.py)<br>[sdks/python/sdk/tests/test_cloud_fallback.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_cloud_fallback.py)<br>[sdks/python/sdk/tests/test_create_index_versions.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_create_index_versions.py)<br>[sdks/python/sdk/tests/test_e2e.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_e2e.py) |
| security | 1 | [SECURITY.md](../../../../sources/usemoss__moss/SECURITY.md) |
| ci | 22 | [apps/livekit-moss-vercel/agent-react/.github/workflows/build-and-test.yaml](../../../../sources/usemoss__moss/apps/livekit-moss-vercel/agent-react/.github/workflows/build-and-test.yaml)<br>[apps/livekit-moss-vercel/agent-react/.github/workflows/sync-to-production.yaml](../../../../sources/usemoss__moss/apps/livekit-moss-vercel/agent-react/.github/workflows/sync-to-production.yaml)<br>[.github/workflows/ci.yml](../../../../sources/usemoss__moss/.github/workflows/ci.yml)<br>[.github/workflows/langchain-release.yml](../../../../sources/usemoss__moss/.github/workflows/langchain-release.yml)<br>[.github/workflows/publish-agno-moss.yml](../../../../sources/usemoss__moss/.github/workflows/publish-agno-moss.yml)<br>[.github/workflows/publish-agora-moss.yml](../../../../sources/usemoss__moss/.github/workflows/publish-agora-moss.yml)<br>[.github/workflows/publish-dspy-moss.yml](../../../../sources/usemoss__moss/.github/workflows/publish-dspy-moss.yml)<br>[.github/workflows/publish-elevenlabs-moss.yml](../../../../sources/usemoss__moss/.github/workflows/publish-elevenlabs-moss.yml) |
| container | 14 | [moss-live-labs/examples/image-search/backend-py/Dockerfile](../../../../sources/usemoss__moss/moss-live-labs/examples/image-search/backend-py/Dockerfile)<br>[apps/pipecat-moss/pipecat-quickstart/Dockerfile](../../../../sources/usemoss__moss/apps/pipecat-moss/pipecat-quickstart/Dockerfile)<br>[apps/pipecat-moss/ollama-local/docker-compose.yml](../../../../sources/usemoss__moss/apps/pipecat-moss/ollama-local/docker-compose.yml)<br>[apps/pipecat-moss/ollama-local/Dockerfile](../../../../sources/usemoss__moss/apps/pipecat-moss/ollama-local/Dockerfile)<br>[apps/pipecat-moss/hume-ollama-local/docker-compose.yml](../../../../sources/usemoss__moss/apps/pipecat-moss/hume-ollama-local/docker-compose.yml)<br>[apps/pipecat-moss/hume-ollama-local/Dockerfile](../../../../sources/usemoss__moss/apps/pipecat-moss/hume-ollama-local/Dockerfile)<br>[apps/moss-llamaindex/backend/Dockerfile](../../../../sources/usemoss__moss/apps/moss-llamaindex/backend/Dockerfile)<br>[apps/moss-bun/docker-compose.yml](../../../../sources/usemoss__moss/apps/moss-bun/docker-compose.yml) |
| instruction | 2 | [AGENTS.md](../../../../sources/usemoss__moss/AGENTS.md)<br>[CLAUDE.md](../../../../sources/usemoss__moss/CLAUDE.md) |
| docs | 141 | [README.md](../../../../sources/usemoss__moss/README.md)<br>[sdks/swift/README.md](../../../../sources/usemoss__moss/sdks/swift/README.md)<br>[sdks/python/README.md](../../../../sources/usemoss__moss/sdks/python/README.md)<br>[sdks/python/sdk/README.md](../../../../sources/usemoss__moss/sdks/python/sdk/README.md)<br>[sdks/python/bindings/README.md](../../../../sources/usemoss__moss/sdks/python/bindings/README.md)<br>[sdks/javascript/README.md](../../../../sources/usemoss__moss/sdks/javascript/README.md)<br>[sdks/javascript/sdk/README.md](../../../../sources/usemoss__moss/sdks/javascript/sdk/README.md)<br>[sdks/javascript/sdk/test/README.md](../../../../sources/usemoss__moss/sdks/javascript/sdk/test/README.md) |
| config | 119 | [package.json](../../../../sources/usemoss__moss/package.json)<br>[sdks/python/sdk/pyproject.toml](../../../../sources/usemoss__moss/sdks/python/sdk/pyproject.toml)<br>[sdks/python/bindings/Cargo.toml](../../../../sources/usemoss__moss/sdks/python/bindings/Cargo.toml)<br>[sdks/python/bindings/pyproject.toml](../../../../sources/usemoss__moss/sdks/python/bindings/pyproject.toml)<br>[sdks/javascript/sdk/package.json](../../../../sources/usemoss__moss/sdks/javascript/sdk/package.json)<br>[sdks/javascript/sdk/tsconfig.json](../../../../sources/usemoss__moss/sdks/javascript/sdk/tsconfig.json)<br>[sdks/javascript/bindings/Cargo.lock](../../../../sources/usemoss__moss/sdks/javascript/bindings/Cargo.lock)<br>[sdks/javascript/bindings/Cargo.toml](../../../../sources/usemoss__moss/sdks/javascript/bindings/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 83 | [sdks/python/sdk/tests/__init__.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/__init__.py)<br>[sdks/python/sdk/tests/conftest.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/conftest.py)<br>[sdks/python/sdk/tests/constants.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/constants.py)<br>[sdks/python/sdk/tests/test_client_extended.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_client_extended.py)<br>[sdks/python/sdk/tests/test_client.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_client.py)<br>[sdks/python/sdk/tests/test_cloud_fallback.py](../../../../sources/usemoss__moss/sdks/python/sdk/tests/test_cloud_fallback.py) |
| CI workflow | 22 | [apps/livekit-moss-vercel/agent-react/.github/workflows/build-and-test.yaml](../../../../sources/usemoss__moss/apps/livekit-moss-vercel/agent-react/.github/workflows/build-and-test.yaml)<br>[apps/livekit-moss-vercel/agent-react/.github/workflows/sync-to-production.yaml](../../../../sources/usemoss__moss/apps/livekit-moss-vercel/agent-react/.github/workflows/sync-to-production.yaml)<br>[.github/workflows/ci.yml](../../../../sources/usemoss__moss/.github/workflows/ci.yml)<br>[.github/workflows/langchain-release.yml](../../../../sources/usemoss__moss/.github/workflows/langchain-release.yml)<br>[.github/workflows/publish-agno-moss.yml](../../../../sources/usemoss__moss/.github/workflows/publish-agno-moss.yml)<br>[.github/workflows/publish-agora-moss.yml](../../../../sources/usemoss__moss/.github/workflows/publish-agora-moss.yml) |
| 컨테이너/배포 | 14 | [moss-live-labs/examples/image-search/backend-py/Dockerfile](../../../../sources/usemoss__moss/moss-live-labs/examples/image-search/backend-py/Dockerfile)<br>[apps/pipecat-moss/pipecat-quickstart/Dockerfile](../../../../sources/usemoss__moss/apps/pipecat-moss/pipecat-quickstart/Dockerfile)<br>[apps/pipecat-moss/ollama-local/docker-compose.yml](../../../../sources/usemoss__moss/apps/pipecat-moss/ollama-local/docker-compose.yml)<br>[apps/pipecat-moss/ollama-local/Dockerfile](../../../../sources/usemoss__moss/apps/pipecat-moss/ollama-local/Dockerfile)<br>[apps/pipecat-moss/hume-ollama-local/docker-compose.yml](../../../../sources/usemoss__moss/apps/pipecat-moss/hume-ollama-local/docker-compose.yml)<br>[apps/pipecat-moss/hume-ollama-local/Dockerfile](../../../../sources/usemoss__moss/apps/pipecat-moss/hume-ollama-local/Dockerfile) |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/usemoss__moss/SECURITY.md) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/usemoss__moss/AGENTS.md)<br>[CLAUDE.md](../../../../sources/usemoss__moss/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `sdks/python/sdk/tests/test_create_index_versions.py`, `sdks/javascript/sdk/test/create_index_versions.test.ts`, `sdks/javascript/sdk/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `sdks/javascript/sdk/src/index.ts`, `packages/vercel-sdk/src/index.ts`, `packages/moss-md-indexer/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `packages/zo-computer/zo-skill/SKILL.md`, `packages/vercel-sdk/src/tools/docs.ts`.
4. retrieval/memory/indexing 확인: `sdks/python/sdk/tests/test_create_index_versions.py`, `sdks/javascript/sdk/test/create_index_versions.test.ts`, `sdks/javascript/sdk/src/index.ts`.
5. test/eval 파일로 동작 검증: `sdks/python/sdk/tests/__init__.py`, `sdks/python/sdk/tests/conftest.py`, `sdks/python/sdk/tests/constants.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 The retrieval layer for production AI systems. Lightning fast <10ms search without vector databases. Built for browser, . 핵심 구조 신호는 Python, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
