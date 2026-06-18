# rocketride-org/rocketride-server 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

High-performance AI pipeline engine with a C++ core and 50+ Python-extensible nodes. Build, debug, and scale LLM workflows with 13+ model providers, 8+ vector databases, and agent orchestration, all from your IDE. Includes VS Code extension, TypeScript/Python SDKs, and Docker deployment.

## 요약

- 조사 단위: `sources/rocketride-org__rocketride-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,515 files, 785 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/client-mcp/pyproject.toml, packages/client-mcp/tests/conftest.py, packages/client-mcp/tests/test_config.py이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | rocketride-org/rocketride-server |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 3866 |
| Forks | 1234 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/rocketride-org__rocketride-server](../../../../sources/rocketride-org__rocketride-server) |
| 기존 보고서 | [reports/global-trending/repositories/rocketride-org__rocketride-server.md](../../../global-trending/repositories/rocketride-org__rocketride-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3515 / 785 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .claude, .devcontainer, .github, apps, deploy, docker, docs, examples, images, nodes, packages, patches, pipelines, scripts, test, testdata, tools |
| 상위 확장자 | .py: 949, .hpp: 451, .cpp: 334, .tsx: 287, .ts: 239, .md: 209, .json: 206, .h: 180, .txt: 154, .svg: 141, .js: 65, (none): 34 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/ai | packages workspace | 63 |
| packages/shared-ui | packages workspace | 58 |
| packages/docs | packages workspace | 32 |
| apps/vscode | apps workspace | 28 |
| packages/client-mcp | packages workspace | 20 |
| packages/server | packages workspace | 10 |
| apps/world-ui | apps workspace | 7 |
| docs | documentation surface | 5 |
| packages/tika | packages workspace | 4 |
| apps/shell-ui | apps workspace | 2 |
| packages/client-python | packages workspace | 2 |
| packages/client-typescript | packages workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| deploy | deployment surface | 1 |
| docker | documentation surface | 1 |
| examples | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | prepare | lefthook install --force |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [packages/client-mcp/pyproject.toml](../../../../sources/rocketride-org__rocketride-server/packages/client-mcp/pyproject.toml) | mcp signal |
| mcp | [packages/client-mcp/tests/conftest.py](../../../../sources/rocketride-org__rocketride-server/packages/client-mcp/tests/conftest.py) | mcp signal |
| mcp | [packages/client-mcp/tests/test_config.py](../../../../sources/rocketride-org__rocketride-server/packages/client-mcp/tests/test_config.py) | mcp signal |
| mcp | [packages/client-mcp/tests/test_resources_and_prompts.py](../../../../sources/rocketride-org__rocketride-server/packages/client-mcp/tests/test_resources_and_prompts.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/rocketride-org__rocketride-server/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/sync_models/README.md](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/README.md) | agentRuntime signal |
| agentRuntime | [tools/sync_models/requirements.txt](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/requirements.txt) | agentRuntime signal |
| agentRuntime | [tools/sync_models/test/__init__.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/__init__.py) | agentRuntime signal |
| entrypoints | [tools/contract_checks/src/contract_checks/__main__.py](../../../../sources/rocketride-org__rocketride-server/tools/contract_checks/src/contract_checks/__main__.py) | entrypoints signal |
| entrypoints | [scripts/lib/server.js](../../../../sources/rocketride-org__rocketride-server/scripts/lib/server.js) | entrypoints signal |
| entrypoints | [packages/shared-ui/src/index.ts](../../../../sources/rocketride-org__rocketride-server/packages/shared-ui/src/index.ts) | entrypoints signal |
| entrypoints | [packages/client-python/src/rocketride/cli/main.py](../../../../sources/rocketride-org__rocketride-server/packages/client-python/src/rocketride/cli/main.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 263 | [tools/contract_checks/src/contract_checks/__main__.py](../../../../sources/rocketride-org__rocketride-server/tools/contract_checks/src/contract_checks/__main__.py)<br>[scripts/lib/server.js](../../../../sources/rocketride-org__rocketride-server/scripts/lib/server.js)<br>[packages/shared-ui/src/index.ts](../../../../sources/rocketride-org__rocketride-server/packages/shared-ui/src/index.ts)<br>[packages/client-python/src/rocketride/cli/main.py](../../../../sources/rocketride-org__rocketride-server/packages/client-python/src/rocketride/cli/main.py)<br>[packages/client-mcp/src/rocketride_mcp/__main__.py](../../../../sources/rocketride-org__rocketride-server/packages/client-mcp/src/rocketride_mcp/__main__.py)<br>[packages/client-mcp/src/rocketride_mcp/server.py](../../../../sources/rocketride-org__rocketride-server/packages/client-mcp/src/rocketride_mcp/server.py)<br>[packages/ai/src/ai/web/server.py](../../../../sources/rocketride-org__rocketride-server/packages/ai/src/ai/web/server.py)<br>[apps/world-ui/src/AppDescriptor.ts](../../../../sources/rocketride-org__rocketride-server/apps/world-ui/src/AppDescriptor.ts) |
| agentRuntime | 423 | [AGENTS.md](../../../../sources/rocketride-org__rocketride-server/AGENTS.md)<br>[tools/sync_models/README.md](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/README.md)<br>[tools/sync_models/requirements.txt](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/requirements.txt)<br>[tools/sync_models/test/__init__.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/__init__.py)<br>[tools/sync_models/test/conftest.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/conftest.py)<br>[tools/sync_models/test/markers.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/markers.py)<br>[tools/sync_models/test/test_baidu_qianfan_provider.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/test_baidu_qianfan_provider.py)<br>[tools/sync_models/test/test_sync_live.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/test_sync_live.py) |
| mcp | 32 | [packages/client-mcp/pyproject.toml](../../../../sources/rocketride-org__rocketride-server/packages/client-mcp/pyproject.toml)<br>[packages/client-mcp/tests/conftest.py](../../../../sources/rocketride-org__rocketride-server/packages/client-mcp/tests/conftest.py)<br>[packages/client-mcp/tests/test_config.py](../../../../sources/rocketride-org__rocketride-server/packages/client-mcp/tests/test_config.py)<br>[packages/client-mcp/tests/test_resources_and_prompts.py](../../../../sources/rocketride-org__rocketride-server/packages/client-mcp/tests/test_resources_and_prompts.py)<br>[packages/client-mcp/tests/test_server.py](../../../../sources/rocketride-org__rocketride-server/packages/client-mcp/tests/test_server.py)<br>[packages/client-mcp/tests/test_tools.py](../../../../sources/rocketride-org__rocketride-server/packages/client-mcp/tests/test_tools.py)<br>[packages/client-mcp/src/rocketride_mcp/__init__.py](../../../../sources/rocketride-org__rocketride-server/packages/client-mcp/src/rocketride_mcp/__init__.py)<br>[packages/client-mcp/src/rocketride_mcp/__main__.py](../../../../sources/rocketride-org__rocketride-server/packages/client-mcp/src/rocketride_mcp/__main__.py) |
| retrieval | 239 | [tools/sync_models/src/providers/embedding_openai.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/src/providers/embedding_openai.py)<br>[scripts/lib/index.js](../../../../sources/rocketride-org__rocketride-server/scripts/lib/index.js)<br>[packages/shared-ui/index.ts](../../../../sources/rocketride-org__rocketride-server/packages/shared-ui/index.ts)<br>[packages/shared-ui/src/index.ts](../../../../sources/rocketride-org__rocketride-server/packages/shared-ui/src/index.ts)<br>[packages/shared-ui/src/themes/index.ts](../../../../sources/rocketride-org__rocketride-server/packages/shared-ui/src/themes/index.ts)<br>[packages/shared-ui/src/modules/server/index.tsx](../../../../sources/rocketride-org__rocketride-server/packages/shared-ui/src/modules/server/index.tsx)<br>[packages/shared-ui/src/modules/server/util/index.ts](../../../../sources/rocketride-org__rocketride-server/packages/shared-ui/src/modules/server/util/index.ts)<br>[packages/shared-ui/src/modules/server/hooks/index.ts](../../../../sources/rocketride-org__rocketride-server/packages/shared-ui/src/modules/server/hooks/index.ts) |
| spec | 128 | [tools/sync_models/requirements.txt](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/requirements.txt)<br>[tools/contract_checks/requirements.txt](../../../../sources/rocketride-org__rocketride-server/tools/contract_checks/requirements.txt)<br>[packages/ai/tests/requirements.txt](../../../../sources/rocketride-org__rocketride-server/packages/ai/tests/requirements.txt)<br>[packages/ai/src/ai/requirements.txt](../../../../sources/rocketride-org__rocketride-server/packages/ai/src/ai/requirements.txt)<br>[packages/ai/src/ai/web/requirements.txt](../../../../sources/rocketride-org__rocketride-server/packages/ai/src/ai/web/requirements.txt)<br>[packages/ai/src/ai/modules/task/requirements.txt](../../../../sources/rocketride-org__rocketride-server/packages/ai/src/ai/modules/task/requirements.txt)<br>[packages/ai/src/ai/common/requirements.txt](../../../../sources/rocketride-org__rocketride-server/packages/ai/src/ai/common/requirements.txt)<br>[packages/ai/src/ai/common/torch/requirements.txt](../../../../sources/rocketride-org__rocketride-server/packages/ai/src/ai/common/torch/requirements.txt) |
| eval | 444 | [tools/sync_models/test/__init__.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/__init__.py)<br>[tools/sync_models/test/conftest.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/conftest.py)<br>[tools/sync_models/test/markers.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/markers.py)<br>[tools/sync_models/test/test_baidu_qianfan_provider.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/test_baidu_qianfan_provider.py)<br>[tools/sync_models/test/test_sync_live.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/test_sync_live.py)<br>[tools/sync_models/test/test_sync_logic.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/test_sync_logic.py)<br>[tools/contract_checks/test/__init__.py](../../../../sources/rocketride-org__rocketride-server/tools/contract_checks/test/__init__.py)<br>[tools/contract_checks/test/conftest.py](../../../../sources/rocketride-org__rocketride-server/tools/contract_checks/test/conftest.py) |
| security | 18 | [SECURITY.md](../../../../sources/rocketride-org__rocketride-server/SECURITY.md)<br>[scripts/audit-icons.mjs](../../../../sources/rocketride-org__rocketride-server/scripts/audit-icons.mjs)<br>[packages/server/engine-lib/engLib/store/endpoints/filesys/base/Permission.hpp](../../../../sources/rocketride-org__rocketride-server/packages/server/engine-lib/engLib/store/endpoints/filesys/base/Permission.hpp)<br>[packages/server/engine-core/apLib/util/Guard.hpp](../../../../sources/rocketride-org__rocketride-server/packages/server/engine-core/apLib/util/Guard.hpp)<br>[packages/docs/content-static/evaluate/security.md](../../../../sources/rocketride-org__rocketride-server/packages/docs/content-static/evaluate/security.md)<br>[packages/docs/content-static/concepts/security-model.md](../../../../sources/rocketride-org__rocketride-server/packages/docs/content-static/concepts/security-model.md)<br>[packages/ai/tests/ai/web/metrics/test_gpu_guard.py](../../../../sources/rocketride-org__rocketride-server/packages/ai/tests/ai/web/metrics/test_gpu_guard.py)<br>[packages/ai/tests/ai/modules/task/test_temp_file_security.py](../../../../sources/rocketride-org__rocketride-server/packages/ai/tests/ai/modules/task/test_temp_file_security.py) |
| ci | 19 | [.github/workflows/_build.yaml](../../../../sources/rocketride-org__rocketride-server/.github/workflows/_build.yaml)<br>[.github/workflows/_docker.yaml](../../../../sources/rocketride-org__rocketride-server/.github/workflows/_docker.yaml)<br>[.github/workflows/_init.yaml](../../../../sources/rocketride-org__rocketride-server/.github/workflows/_init.yaml)<br>[.github/workflows/_release.yaml](../../../../sources/rocketride-org__rocketride-server/.github/workflows/_release.yaml)<br>[.github/workflows/check-externals.yml](../../../../sources/rocketride-org__rocketride-server/.github/workflows/check-externals.yml)<br>[.github/workflows/ci.yml](../../../../sources/rocketride-org__rocketride-server/.github/workflows/ci.yml)<br>[.github/workflows/discord-discussions.yml](../../../../sources/rocketride-org__rocketride-server/.github/workflows/discord-discussions.yml)<br>[.github/workflows/discord-issues.yml](../../../../sources/rocketride-org__rocketride-server/.github/workflows/discord-issues.yml) |
| container | 26 | [docker/docker-compose.override.yml](../../../../sources/rocketride-org__rocketride-server/docker/docker-compose.override.yml)<br>[docker/docker-compose.yml](../../../../sources/rocketride-org__rocketride-server/docker/docker-compose.yml)<br>[docker/Dockerfile.engine](../../../../sources/rocketride-org__rocketride-server/docker/Dockerfile.engine)<br>[docker/Dockerfile.engine.dockerignore](../../../../sources/rocketride-org__rocketride-server/docker/Dockerfile.engine.dockerignore)<br>[docker/Dockerfile.mcp](../../../../sources/rocketride-org__rocketride-server/docker/Dockerfile.mcp)<br>[deploy/helm/ARCHITECTURE.md](../../../../sources/rocketride-org__rocketride-server/deploy/helm/ARCHITECTURE.md)<br>[deploy/helm/rocketride/.helmignore](../../../../sources/rocketride-org__rocketride-server/deploy/helm/rocketride/.helmignore)<br>[deploy/helm/rocketride/Chart.yaml](../../../../sources/rocketride-org__rocketride-server/deploy/helm/rocketride/Chart.yaml) |
| instruction | 5 | [AGENTS.md](../../../../sources/rocketride-org__rocketride-server/AGENTS.md)<br>[docs/stubs/AGENTS.md](../../../../sources/rocketride-org__rocketride-server/docs/stubs/AGENTS.md)<br>[docs/stubs/CLAUDE.md](../../../../sources/rocketride-org__rocketride-server/docs/stubs/CLAUDE.md)<br>[docs/stubs/copilot-instructions.md](../../../../sources/rocketride-org__rocketride-server/docs/stubs/copilot-instructions.md)<br>[.claude/CLAUDE.md](../../../../sources/rocketride-org__rocketride-server/.claude/CLAUDE.md) |
| docs | 232 | [README.md](../../../../sources/rocketride-org__rocketride-server/README.md)<br>[tools/sync_models/README.md](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/README.md)<br>[tools/dependabot-smoke/README.md](../../../../sources/rocketride-org__rocketride-server/tools/dependabot-smoke/README.md)<br>[tools/contract_checks/README.md](../../../../sources/rocketride-org__rocketride-server/tools/contract_checks/README.md)<br>[packages/server/engine-lib/rocketlib-python/lib/site-packages/README.md](../../../../sources/rocketride-org__rocketride-server/packages/server/engine-lib/rocketlib-python/lib/site-packages/README.md)<br>[packages/server/docs/index.md](../../../../sources/rocketride-org__rocketride-server/packages/server/docs/index.md)<br>[packages/server/docs/observability.md](../../../../sources/rocketride-org__rocketride-server/packages/server/docs/observability.md)<br>[packages/server/cmake/ports/tinyxml2/README.md](../../../../sources/rocketride-org__rocketride-server/packages/server/cmake/ports/tinyxml2/README.md) |
| config | 158 | [package.json](../../../../sources/rocketride-org__rocketride-server/package.json)<br>[pnpm-workspace.yaml](../../../../sources/rocketride-org__rocketride-server/pnpm-workspace.yaml)<br>[pyproject.toml](../../../../sources/rocketride-org__rocketride-server/pyproject.toml)<br>[tsconfig.json](../../../../sources/rocketride-org__rocketride-server/tsconfig.json)<br>[tools/sync_models/requirements.txt](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/requirements.txt)<br>[tools/contract_checks/requirements.txt](../../../../sources/rocketride-org__rocketride-server/tools/contract_checks/requirements.txt)<br>[packages/shared-ui/package.json](../../../../sources/rocketride-org__rocketride-server/packages/shared-ui/package.json)<br>[packages/shared-ui/tsconfig.json](../../../../sources/rocketride-org__rocketride-server/packages/shared-ui/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 444 | [tools/sync_models/test/__init__.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/__init__.py)<br>[tools/sync_models/test/conftest.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/conftest.py)<br>[tools/sync_models/test/markers.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/markers.py)<br>[tools/sync_models/test/test_baidu_qianfan_provider.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/test_baidu_qianfan_provider.py)<br>[tools/sync_models/test/test_sync_live.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/test_sync_live.py)<br>[tools/sync_models/test/test_sync_logic.py](../../../../sources/rocketride-org__rocketride-server/tools/sync_models/test/test_sync_logic.py) |
| CI workflow | 19 | [.github/workflows/_build.yaml](../../../../sources/rocketride-org__rocketride-server/.github/workflows/_build.yaml)<br>[.github/workflows/_docker.yaml](../../../../sources/rocketride-org__rocketride-server/.github/workflows/_docker.yaml)<br>[.github/workflows/_init.yaml](../../../../sources/rocketride-org__rocketride-server/.github/workflows/_init.yaml)<br>[.github/workflows/_release.yaml](../../../../sources/rocketride-org__rocketride-server/.github/workflows/_release.yaml)<br>[.github/workflows/check-externals.yml](../../../../sources/rocketride-org__rocketride-server/.github/workflows/check-externals.yml)<br>[.github/workflows/ci.yml](../../../../sources/rocketride-org__rocketride-server/.github/workflows/ci.yml) |
| 컨테이너/배포 | 26 | [docker/docker-compose.override.yml](../../../../sources/rocketride-org__rocketride-server/docker/docker-compose.override.yml)<br>[docker/docker-compose.yml](../../../../sources/rocketride-org__rocketride-server/docker/docker-compose.yml)<br>[docker/Dockerfile.engine](../../../../sources/rocketride-org__rocketride-server/docker/Dockerfile.engine)<br>[docker/Dockerfile.engine.dockerignore](../../../../sources/rocketride-org__rocketride-server/docker/Dockerfile.engine.dockerignore)<br>[docker/Dockerfile.mcp](../../../../sources/rocketride-org__rocketride-server/docker/Dockerfile.mcp)<br>[deploy/helm/ARCHITECTURE.md](../../../../sources/rocketride-org__rocketride-server/deploy/helm/ARCHITECTURE.md) |
| 보안/정책 | 18 | [SECURITY.md](../../../../sources/rocketride-org__rocketride-server/SECURITY.md)<br>[scripts/audit-icons.mjs](../../../../sources/rocketride-org__rocketride-server/scripts/audit-icons.mjs)<br>[packages/server/engine-lib/engLib/store/endpoints/filesys/base/Permission.hpp](../../../../sources/rocketride-org__rocketride-server/packages/server/engine-lib/engLib/store/endpoints/filesys/base/Permission.hpp)<br>[packages/server/engine-core/apLib/util/Guard.hpp](../../../../sources/rocketride-org__rocketride-server/packages/server/engine-core/apLib/util/Guard.hpp)<br>[packages/docs/content-static/evaluate/security.md](../../../../sources/rocketride-org__rocketride-server/packages/docs/content-static/evaluate/security.md)<br>[packages/docs/content-static/concepts/security-model.md](../../../../sources/rocketride-org__rocketride-server/packages/docs/content-static/concepts/security-model.md) |
| 에이전트 지시문 | 5 | [AGENTS.md](../../../../sources/rocketride-org__rocketride-server/AGENTS.md)<br>[docs/stubs/AGENTS.md](../../../../sources/rocketride-org__rocketride-server/docs/stubs/AGENTS.md)<br>[docs/stubs/CLAUDE.md](../../../../sources/rocketride-org__rocketride-server/docs/stubs/CLAUDE.md)<br>[docs/stubs/copilot-instructions.md](../../../../sources/rocketride-org__rocketride-server/docs/stubs/copilot-instructions.md)<br>[.claude/CLAUDE.md](../../../../sources/rocketride-org__rocketride-server/.claude/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/client-mcp/pyproject.toml`, `packages/client-mcp/tests/conftest.py`, `packages/client-mcp/tests/test_config.py`.
2. entrypoint를 따라 실행 흐름 확인: `tools/contract_checks/src/contract_checks/__main__.py`, `scripts/lib/server.js`, `packages/shared-ui/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/sync_models/README.md`, `tools/sync_models/requirements.txt`.
4. retrieval/memory/indexing 확인: `tools/sync_models/src/providers/embedding_openai.py`, `scripts/lib/index.js`, `packages/shared-ui/index.ts`.
5. test/eval 파일로 동작 검증: `tools/sync_models/test/__init__.py`, `tools/sync_models/test/conftest.py`, `tools/sync_models/test/markers.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 High performance AI pipeline engine with a C++ core and 50+ Python extensible nodes. Build, debug, and scale LLM workflo. 핵심 구조 신호는 Python, package.json, pyproject.toml, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
