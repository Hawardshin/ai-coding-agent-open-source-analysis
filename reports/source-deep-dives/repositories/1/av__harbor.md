# av/harbor 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Stop configuring your AI stack. Start using it. One command brings a complete pre-wired LLM stack with hundreds of services to explore.

## 요약

- 조사 단위: `sources/av__harbor` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,201 files, 320 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tests/fixtures/mock-openai/server.py, services/parler/main.py, services/npcsh/server.py이고, 의존성 단서는 claude, mcp, vscode, transformers, vllm, ollama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | av/harbor |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | global |
| Language | Python |
| Stars | 3084 |
| Forks | 207 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/av__harbor](../../../../sources/av__harbor) |
| 기존 보고서 | [reports/global-trending/repositories/av__harbor.md](../../../global-trending/repositories/av__harbor.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2201 / 320 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .agents, .claude, .github, .harness, .scripts, app, boost, docs, harbor, ollama, opencode, perplexica, profiles, promptfoo, routines, scripts, searxng, services, shared, skills |
| 상위 확장자 | .yml: 725, .md: 215, .png: 192, (none): 167, .py: 157, .env: 143, .ts: 115, .sh: 101, .json: 80, .tsx: 65, .http: 39, .woff2: 38 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 35 |
| docs | documentation surface | 34 |
| services/agent | services workspace | 21 |
| services/boost | services workspace | 21 |
| services/promptfoo | services workspace | 12 |
| services/ros-mcp-server | services workspace | 4 |
| services/bench | services workspace | 3 |
| services/dify | services workspace | 3 |
| services/mcp | services workspace | 3 |
| services/open-design | services workspace | 3 |
| services/cognee | services workspace | 2 |
| services/mcpo | services workspace | 2 |
| services/needle | services workspace | 2 |
| services/npcsh | services workspace | 2 |
| services/ol1 | services workspace | 2 |
| services/ollama | services workspace | 2 |
| services/resume-matcher | services workspace | 2 |
| .github | ci surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| entrypoint | package.json bin | harbor.sh | ./harbor.sh |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | qdrant |
| modelRuntime | transformers, vllm, ollama, llama |
| webRuntime | 없음 |
| developerSurface | vscode |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [tests/fixtures/mock-openai/server.py](../../../../sources/av__harbor/tests/fixtures/mock-openai/server.py) | entrypoints signal |
| entrypoints | [services/parler/main.py](../../../../sources/av__harbor/services/parler/main.py) | entrypoints signal |
| entrypoints | [services/npcsh/server.py](../../../../sources/av__harbor/services/npcsh/server.py) | entrypoints signal |
| entrypoints | [services/needle/server.py](../../../../sources/av__harbor/services/needle/server.py) | entrypoints signal |
| config | [package.json](../../../../sources/av__harbor/package.json) | config signal |
| config | [poetry.lock](../../../../sources/av__harbor/poetry.lock) | config signal |
| config | [pyproject.toml](../../../../sources/av__harbor/pyproject.toml) | config signal |
| config | [services/omlx/pyproject.toml](../../../../sources/av__harbor/services/omlx/pyproject.toml) | config signal |
| ci | [.github/workflows/app-release.yml](../../../../sources/av__harbor/.github/workflows/app-release.yml) | ci signal |
| ci | [.github/workflows/bench-docker.yml](../../../../sources/av__harbor/.github/workflows/bench-docker.yml) | ci signal |
| ci | [.github/workflows/boost-docker.yml](../../../../sources/av__harbor/.github/workflows/boost-docker.yml) | ci signal |
| ci | [.github/workflows/lint.yml](../../../../sources/av__harbor/.github/workflows/lint.yml) | ci signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 11 | [tests/fixtures/mock-openai/server.py](../../../../sources/av__harbor/tests/fixtures/mock-openai/server.py)<br>[services/parler/main.py](../../../../sources/av__harbor/services/parler/main.py)<br>[services/npcsh/server.py](../../../../sources/av__harbor/services/npcsh/server.py)<br>[services/needle/server.py](../../../../sources/av__harbor/services/needle/server.py)<br>[services/boost/src/main.py](../../../../sources/av__harbor/services/boost/src/main.py)<br>[services/airllm/server.py](../../../../sources/av__harbor/services/airllm/server.py)<br>[services/agent/src/main.py](../../../../sources/av__harbor/services/agent/src/main.py)<br>[app/src-tauri/src/main.rs](../../../../sources/av__harbor/app/src-tauri/src/main.rs) |
| agentRuntime | 60 | [AGENTS.md](../../../../sources/av__harbor/AGENTS.md)<br>[skills-lock.json](../../../../sources/av__harbor/skills-lock.json)<br>[skills/run-llms/SKILL.md](../../../../sources/av__harbor/skills/run-llms/SKILL.md)<br>[skills/harbor-daytona/SKILL.md](../../../../sources/av__harbor/skills/harbor-daytona/SKILL.md)<br>[skills/harbor/SKILL.md](../../../../sources/av__harbor/skills/harbor/SKILL.md)<br>[skills/boost-modules/SKILL.md](../../../../sources/av__harbor/skills/boost-modules/SKILL.md)<br>[services/openfang/agents/assistant/agent.toml](../../../../sources/av__harbor/services/openfang/agents/assistant/agent.toml)<br>[services/http-catalog/agent.http](../../../../sources/av__harbor/services/http-catalog/agent.http) |
| mcp | 17 | [services/compose.mcp-inspector.yml](../../../../sources/av__harbor/services/compose.mcp-inspector.yml)<br>[services/compose.ros-mcp-server.yml](../../../../sources/av__harbor/services/compose.ros-mcp-server.yml)<br>[services/compose.x.mcpo.mcp-server-time.yml](../../../../sources/av__harbor/services/compose.x.mcpo.mcp-server-time.yml)<br>[services/compose.x.traefik.mcp-inspector.yml](../../../../sources/av__harbor/services/compose.x.traefik.mcp-inspector.yml)<br>[services/ros-mcp-server/.gitignore](../../../../sources/av__harbor/services/ros-mcp-server/.gitignore)<br>[services/ros-mcp-server/Dockerfile](../../../../sources/av__harbor/services/ros-mcp-server/Dockerfile)<br>[services/ros-mcp-server/override.env](../../../../sources/av__harbor/services/ros-mcp-server/override.env)<br>[services/mcpo/configs/mcpo.mcp-server-fetch.json](../../../../sources/av__harbor/services/mcpo/configs/mcpo.mcp-server-fetch.json) |
| retrieval | 13 | [services/txtairag/rag.py](../../../../sources/av__harbor/services/txtairag/rag.py)<br>[services/landing/www/index.html](../../../../sources/av__harbor/services/landing/www/index.html)<br>[services/boost/src/custom_modules/artifacts/graph_mini.html](../../../../sources/av__harbor/services/boost/src/custom_modules/artifacts/graph_mini.html)<br>[services/boost/src/custom_modules/artifacts/graph.html](../../../../sources/av__harbor/services/boost/src/custom_modules/artifacts/graph.html)<br>[services/boost/src/custom_modules/artifacts/promx/index.css](../../../../sources/av__harbor/services/boost/src/custom_modules/artifacts/promx/index.css)<br>[services/boost/src/custom_modules/artifacts/promx/index.pug](../../../../sources/av__harbor/services/boost/src/custom_modules/artifacts/promx/index.pug)<br>[services/boost/src/custom_modules/artifacts/promx/index.ts](../../../../sources/av__harbor/services/boost/src/custom_modules/artifacts/promx/index.ts)<br>[services/boost/src/custom_modules/artifacts/fluid/graph.ts](../../../../sources/av__harbor/services/boost/src/custom_modules/artifacts/fluid/graph.ts) |
| spec | 15 | [requirements.sh](../../../../sources/av__harbor/requirements.sh)<br>[services/compose.open-design.yml](../../../../sources/av__harbor/services/compose.open-design.yml)<br>[services/compose.x.open-design.dmr.yml](../../../../sources/av__harbor/services/compose.x.open-design.dmr.yml)<br>[services/compose.x.open-design.llamacpp.yml](../../../../sources/av__harbor/services/compose.x.open-design.llamacpp.yml)<br>[services/compose.x.open-design.mlx.yml](../../../../sources/av__harbor/services/compose.x.open-design.mlx.yml)<br>[services/compose.x.open-design.ollama.yml](../../../../sources/av__harbor/services/compose.x.open-design.ollama.yml)<br>[services/compose.x.open-design.omlx.yml](../../../../sources/av__harbor/services/compose.x.open-design.omlx.yml)<br>[services/compose.x.open-design.vllm.yml](../../../../sources/av__harbor/services/compose.x.open-design.vllm.yml) |
| eval | 112 | [tests/app-daytona-install.md](../../../../sources/av__harbor/tests/app-daytona-install.md)<br>[tests/app-native-setup.md](../../../../sources/av__harbor/tests/app-native-setup.md)<br>[tests/lemonade-integration.md](../../../../sources/av__harbor/tests/lemonade-integration.md)<br>[tests/manual-beszel-dbhub.md](../../../../sources/av__harbor/tests/manual-beszel-dbhub.md)<br>[tests/README.md](../../../../sources/av__harbor/tests/README.md)<br>[tests/run-stage.test.ts](../../../../sources/av__harbor/tests/run-stage.test.ts)<br>[tests/run.ts](../../../../sources/av__harbor/tests/run.ts)<br>[tests/stage-repo.ts](../../../../sources/av__harbor/tests/stage-repo.ts) |
| security | 1 | [services/boost/src/auth.py](../../../../sources/av__harbor/services/boost/src/auth.py) |
| ci | 5 | [.github/workflows/app-release.yml](../../../../sources/av__harbor/.github/workflows/app-release.yml)<br>[.github/workflows/bench-docker.yml](../../../../sources/av__harbor/.github/workflows/bench-docker.yml)<br>[.github/workflows/boost-docker.yml](../../../../sources/av__harbor/.github/workflows/boost-docker.yml)<br>[.github/workflows/lint.yml](../../../../sources/av__harbor/.github/workflows/lint.yml)<br>[.github/workflows/test.yml](../../../../sources/av__harbor/.github/workflows/test.yml) |
| container | 43 | [compose.yml](../../../../sources/av__harbor/compose.yml)<br>[tests/fixtures/mock-openai/Dockerfile](../../../../sources/av__harbor/tests/fixtures/mock-openai/Dockerfile)<br>[services/webtop/Dockerfile](../../../../sources/av__harbor/services/webtop/Dockerfile)<br>[services/vllm/Dockerfile](../../../../sources/av__harbor/services/vllm/Dockerfile)<br>[services/textgrad/Dockerfile](../../../../sources/av__harbor/services/textgrad/Dockerfile)<br>[services/solo/Dockerfile](../../../../sources/av__harbor/services/solo/Dockerfile)<br>[services/ros-mcp-server/Dockerfile](../../../../sources/av__harbor/services/ros-mcp-server/Dockerfile)<br>[services/resume-matcher/Dockerfile.backend](../../../../sources/av__harbor/services/resume-matcher/Dockerfile.backend) |
| instruction | 1 | [AGENTS.md](../../../../sources/av__harbor/AGENTS.md) |
| docs | 325 | [README.md](../../../../sources/av__harbor/README.md)<br>[tests/README.md](../../../../sources/av__harbor/tests/README.md)<br>[shared/README.md](../../../../sources/av__harbor/shared/README.md)<br>[services/promptfoo/README.md](../../../../sources/av__harbor/services/promptfoo/README.md)<br>[services/promptfoo/examples/temp-test/README.md](../../../../sources/av__harbor/services/promptfoo/examples/temp-test/README.md)<br>[services/promptfoo/examples/misguided/README.md](../../../../sources/av__harbor/services/promptfoo/examples/misguided/README.md)<br>[services/promptfoo/examples/hello-promptfoo/README.md](../../../../sources/av__harbor/services/promptfoo/examples/hello-promptfoo/README.md)<br>[services/promptfoo/examples/bias/README.md](../../../../sources/av__harbor/services/promptfoo/examples/bias/README.md) |
| config | 17 | [package.json](../../../../sources/av__harbor/package.json)<br>[poetry.lock](../../../../sources/av__harbor/poetry.lock)<br>[pyproject.toml](../../../../sources/av__harbor/pyproject.toml)<br>[services/omlx/pyproject.toml](../../../../sources/av__harbor/services/omlx/pyproject.toml)<br>[services/mlx/pyproject.toml](../../../../sources/av__harbor/services/mlx/pyproject.toml)<br>[services/dify/openai/package.json](../../../../sources/av__harbor/services/dify/openai/package.json)<br>[services/boost/pyproject.toml](../../../../sources/av__harbor/services/boost/pyproject.toml)<br>[services/boost/uv.lock](../../../../sources/av__harbor/services/boost/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 112 | [tests/app-daytona-install.md](../../../../sources/av__harbor/tests/app-daytona-install.md)<br>[tests/app-native-setup.md](../../../../sources/av__harbor/tests/app-native-setup.md)<br>[tests/lemonade-integration.md](../../../../sources/av__harbor/tests/lemonade-integration.md)<br>[tests/manual-beszel-dbhub.md](../../../../sources/av__harbor/tests/manual-beszel-dbhub.md)<br>[tests/README.md](../../../../sources/av__harbor/tests/README.md)<br>[tests/run-stage.test.ts](../../../../sources/av__harbor/tests/run-stage.test.ts) |
| CI workflow | 5 | [.github/workflows/app-release.yml](../../../../sources/av__harbor/.github/workflows/app-release.yml)<br>[.github/workflows/bench-docker.yml](../../../../sources/av__harbor/.github/workflows/bench-docker.yml)<br>[.github/workflows/boost-docker.yml](../../../../sources/av__harbor/.github/workflows/boost-docker.yml)<br>[.github/workflows/lint.yml](../../../../sources/av__harbor/.github/workflows/lint.yml)<br>[.github/workflows/test.yml](../../../../sources/av__harbor/.github/workflows/test.yml) |
| 컨테이너/배포 | 43 | [compose.yml](../../../../sources/av__harbor/compose.yml)<br>[tests/fixtures/mock-openai/Dockerfile](../../../../sources/av__harbor/tests/fixtures/mock-openai/Dockerfile)<br>[services/webtop/Dockerfile](../../../../sources/av__harbor/services/webtop/Dockerfile)<br>[services/vllm/Dockerfile](../../../../sources/av__harbor/services/vllm/Dockerfile)<br>[services/textgrad/Dockerfile](../../../../sources/av__harbor/services/textgrad/Dockerfile)<br>[services/solo/Dockerfile](../../../../sources/av__harbor/services/solo/Dockerfile) |
| 보안/정책 | 1 | [services/boost/src/auth.py](../../../../sources/av__harbor/services/boost/src/auth.py) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/av__harbor/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/fixtures/mock-openai/server.py`, `services/parler/main.py`, `services/npcsh/server.py`.
2. entrypoint를 따라 실행 흐름 확인: `tests/fixtures/mock-openai/server.py`, `services/parler/main.py`, `services/npcsh/server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills-lock.json`, `skills/run-llms/SKILL.md`.
4. retrieval/memory/indexing 확인: `services/txtairag/rag.py`, `services/landing/www/index.html`, `services/boost/src/custom_modules/artifacts/graph_mini.html`.
5. test/eval 파일로 동작 검증: `tests/app-daytona-install.md`, `tests/app-native-setup.md`, `tests/lemonade-integration.md`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 Stop configuring your AI stack. Start using it. One command brings a complete pre wired LLM stack with hundreds of servi. 핵심 구조 신호는 Python, package.json, pyproject.toml, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
