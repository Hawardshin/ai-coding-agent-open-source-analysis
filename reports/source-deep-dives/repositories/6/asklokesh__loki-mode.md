# asklokesh/loki-mode 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Multi-agent autonomous SDLC framework. Spec to deployed app. PRD, GitHub issue, OpenAPI/JSON/YAML, or one-line brief. 5 AI providers, 11 quality gates.

## 요약

- 조사 단위: `sources/asklokesh__loki-mode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,361 files, 546 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server.json, web-app/server.py, web-app/src/App.tsx이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | asklokesh/loki-mode |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | Shell |
| Stars | 980 |
| Forks | 191 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/asklokesh__loki-mode](../../../../sources/asklokesh__loki-mode) |
| 기존 보고서 | [reports/global-trending/repositories/asklokesh__loki-mode.md](../../../global-trending/repositories/asklokesh__loki-mode.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3361 / 546 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .claude, .claude-plugin, .githooks, .github, agent-skills, agents, api, api-examples, artifacts, assets, autonomy, benchmarks, bin, blog, claude, collab, completions, dashboard, dashboard-ui, demo |
| 상위 확장자 | .patch: 649, .py: 630, .md: 448, .sh: 378, .ts: 229, .txt: 206, .js: 194, .tsx: 157, .json: 119, (none): 90, .sha256: 60, .png: 53 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | source boundary | 98 |
| src | source boundary | 20 |
| docs | documentation surface | 17 |
| api | source boundary | 3 |
| .github | ci surface | 1 |
| agent-skills | top-level component | 1 |
| agents | top-level component | 1 |
| api-examples | source boundary | 1 |
| artifacts | top-level component | 1 |
| assets | top-level component | 1 |
| autonomy | top-level component | 1 |
| benchmarks | validation surface | 1 |
| bin | top-level component | 1 |
| blog | top-level component | 1 |
| claude | top-level component | 1 |
| collab | top-level component | 1 |
| completions | top-level component | 1 |
| dashboard | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | prepack | find . -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null; find . -name '*.pyc' -delete 2>/dev/null; if command -v bun >/dev/null 2>&1; then (cd loki-ts && bun install --production && bun run build) \|\| echo 'WARN: l |
| test | package.json | prepublishOnly | cd dashboard-ui && npm ci && npm run build:all && test -f ../dashboard/static/index.html && cd ../web-app && npm ci && npm run build && test -f dist/index.html && grep -q /lab/assets/ dist/index.html |
| test | package.json | test | bash -n autonomy/run.sh && bash -n autonomy/loki && bash -n autonomy/completion-council.sh && bash -n autonomy/app-runner.sh && bash -n autonomy/prd-checklist.sh && bash -n autonomy/playwright-verify.sh && node --test te |
| test | package.json | test:visual | node --experimental-vm-modules node_modules/jest/bin/jest.js dashboard-ui/tests/visual-regression.test.js |
| test | package.json | test:parity | node --experimental-vm-modules dashboard-ui/scripts/check-parity.js |
| test | package.json | test:parity:json | node --experimental-vm-modules dashboard-ui/scripts/check-parity.js --json |
| test | package.json | test:dashboard | npm run test:visual && npm run test:parity |
| test | package.json | test:integration | bash tests/integration/run_integration_suite.sh |
| entrypoint | package.json bin | loki | bin/loki |


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
| entrypoints | [server.json](../../../../sources/asklokesh__loki-mode/server.json) | entrypoints signal |
| entrypoints | [web-app/server.py](../../../../sources/asklokesh__loki-mode/web-app/server.py) | entrypoints signal |
| entrypoints | [web-app/src/App.tsx](../../../../sources/asklokesh__loki-mode/web-app/src/App.tsx) | entrypoints signal |
| entrypoints | [web-app/src/index.css](../../../../sources/asklokesh__loki-mode/web-app/src/index.css) | entrypoints signal |
| config | [package.json](../../../../sources/asklokesh__loki-mode/package.json) | config signal |
| config | [requirements-test.txt](../../../../sources/asklokesh__loki-mode/requirements-test.txt) | config signal |
| config | [web-app/package.json](../../../../sources/asklokesh__loki-mode/web-app/package.json) | config signal |
| config | [web-app/requirements-test.txt](../../../../sources/asklokesh__loki-mode/web-app/requirements-test.txt) | config signal |
| docs | [README.md](../../../../sources/asklokesh__loki-mode/README.md) | docs signal |
| docs | [website/index.html](../../../../sources/asklokesh__loki-mode/website/index.html) | docs signal |
| docs | [website/README.md](../../../../sources/asklokesh__loki-mode/website/README.md) | docs signal |
| docs | [vscode-extension/README.md](../../../../sources/asklokesh__loki-mode/vscode-extension/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 19 | [server.json](../../../../sources/asklokesh__loki-mode/server.json)<br>[web-app/server.py](../../../../sources/asklokesh__loki-mode/web-app/server.py)<br>[web-app/src/App.tsx](../../../../sources/asklokesh__loki-mode/web-app/src/App.tsx)<br>[web-app/src/index.css](../../../../sources/asklokesh__loki-mode/web-app/src/index.css)<br>[web-app/src/main.tsx](../../../../sources/asklokesh__loki-mode/web-app/src/main.tsx)<br>[sdk/typescript/src/index.ts](../../../../sources/asklokesh__loki-mode/sdk/typescript/src/index.ts)<br>[mcp/server.py](../../../../sources/asklokesh__loki-mode/mcp/server.py)<br>[loki-ts/src/cli.ts](../../../../sources/asklokesh__loki-mode/loki-ts/src/cli.ts) |
| agentRuntime | 202 | [SKILL.md](../../../../sources/asklokesh__loki-mode/SKILL.md)<br>[wiki/Sandbox-Mode.md](../../../../sources/asklokesh__loki-mode/wiki/Sandbox-Mode.md)<br>[web-app/src/hooks/useAuth.tsx](../../../../sources/asklokesh__loki-mode/web-app/src/hooks/useAuth.tsx)<br>[web-app/src/hooks/useEscapeKey.ts](../../../../sources/asklokesh__loki-mode/web-app/src/hooks/useEscapeKey.ts)<br>[web-app/src/hooks/useFocusTrap.ts](../../../../sources/asklokesh__loki-mode/web-app/src/hooks/useFocusTrap.ts)<br>[web-app/src/hooks/useInView.ts](../../../../sources/asklokesh__loki-mode/web-app/src/hooks/useInView.ts)<br>[web-app/src/hooks/usePolling.ts](../../../../sources/asklokesh__loki-mode/web-app/src/hooks/usePolling.ts)<br>[web-app/src/hooks/usePullToRefresh.ts](../../../../sources/asklokesh__loki-mode/web-app/src/hooks/usePullToRefresh.ts) |
| mcp | 44 | [.mcp.json](../../../../sources/asklokesh__loki-mode/.mcp.json)<br>[tests/test-mcp-config.sh](../../../../sources/asklokesh__loki-mode/tests/test-mcp-config.sh)<br>[tests/test-mcp-learning-collector.sh](../../../../sources/asklokesh__loki-mode/tests/test-mcp-learning-collector.sh)<br>[tests/test-mcp-server.sh](../../../../sources/asklokesh__loki-mode/tests/test-mcp-server.sh)<br>[tests/test-parity-mcp-config.sh](../../../../sources/asklokesh__loki-mode/tests/test-parity-mcp-config.sh)<br>[tests/protocols/mcp-circuit-breaker.test.js](../../../../sources/asklokesh__loki-mode/tests/protocols/mcp-circuit-breaker.test.js)<br>[tests/protocols/mcp-client-manager.test.js](../../../../sources/asklokesh__loki-mode/tests/protocols/mcp-client-manager.test.js)<br>[tests/protocols/mcp-client.test.js](../../../../sources/asklokesh__loki-mode/tests/protocols/mcp-client.test.js) |
| retrieval | 182 | [index.html](../../../../sources/asklokesh__loki-mode/index.html)<br>[wiki/_Sidebar.md](../../../../sources/asklokesh__loki-mode/wiki/_Sidebar.md)<br>[wiki/API-Reference.md](../../../../sources/asklokesh__loki-mode/wiki/API-Reference.md)<br>[wiki/Architecture.md](../../../../sources/asklokesh__loki-mode/wiki/Architecture.md)<br>[wiki/Audit-Logging.md](../../../../sources/asklokesh__loki-mode/wiki/Audit-Logging.md)<br>[wiki/Changelog.md](../../../../sources/asklokesh__loki-mode/wiki/Changelog.md)<br>[wiki/Checkpoints.md](../../../../sources/asklokesh__loki-mode/wiki/Checkpoints.md)<br>[wiki/CLI-Reference.md](../../../../sources/asklokesh__loki-mode/wiki/CLI-Reference.md) |
| spec | 142 | [requirements-test.txt](../../../../sources/asklokesh__loki-mode/requirements-test.txt)<br>[wiki/Architecture.md](../../../../sources/asklokesh__loki-mode/wiki/Architecture.md)<br>[web-app/requirements-test.txt](../../../../sources/asklokesh__loki-mode/web-app/requirements-test.txt)<br>[web-app/requirements.txt](../../../../sources/asklokesh__loki-mode/web-app/requirements.txt)<br>[web-app/tests/e2e/auth.spec.ts](../../../../sources/asklokesh__loki-mode/web-app/tests/e2e/auth.spec.ts)<br>[web-app/tests/e2e/devserver.spec.ts](../../../../sources/asklokesh__loki-mode/web-app/tests/e2e/devserver.spec.ts)<br>[web-app/tests/e2e/filewatcher.spec.ts](../../../../sources/asklokesh__loki-mode/web-app/tests/e2e/filewatcher.spec.ts)<br>[web-app/tests/e2e/purple-lab.spec.ts](../../../../sources/asklokesh__loki-mode/web-app/tests/e2e/purple-lab.spec.ts) |
| eval | 1161 | [docker-compose.test.yml](../../../../sources/asklokesh__loki-mode/docker-compose.test.yml)<br>[Dockerfile.test-runner](../../../../sources/asklokesh__loki-mode/Dockerfile.test-runner)<br>[requirements-test.txt](../../../../sources/asklokesh__loki-mode/requirements-test.txt)<br>[wiki/Quality-Gates.md](../../../../sources/asklokesh__loki-mode/wiki/Quality-Gates.md)<br>[web-app/requirements-test.txt](../../../../sources/asklokesh__loki-mode/web-app/requirements-test.txt)<br>[web-app/tests/conftest.py](../../../../sources/asklokesh__loki-mode/web-app/tests/conftest.py)<br>[web-app/tests/test_server.py](../../../../sources/asklokesh__loki-mode/web-app/tests/test_server.py)<br>[web-app/tests/integration/__init__.py](../../../../sources/asklokesh__loki-mode/web-app/tests/integration/__init__.py) |
| security | 65 | [wiki/Audit-Logging.md](../../../../sources/asklokesh__loki-mode/wiki/Audit-Logging.md)<br>[wiki/Network-Security.md](../../../../sources/asklokesh__loki-mode/wiki/Network-Security.md)<br>[wiki/Sandbox-Mode.md](../../../../sources/asklokesh__loki-mode/wiki/Sandbox-Mode.md)<br>[wiki/Security.md](../../../../sources/asklokesh__loki-mode/wiki/Security.md)<br>[web-app/auth.py](../../../../sources/asklokesh__loki-mode/web-app/auth.py)<br>[web-app/tests/e2e/auth.spec.ts](../../../../sources/asklokesh__loki-mode/web-app/tests/e2e/auth.spec.ts)<br>[web-app/src/components/auth/ProtectedRoute.tsx](../../../../sources/asklokesh__loki-mode/web-app/src/components/auth/ProtectedRoute.tsx)<br>[web-app/deploy/k8s/purple-lab/secret.yaml](../../../../sources/asklokesh__loki-mode/web-app/deploy/k8s/purple-lab/secret.yaml) |
| ci | 23 | [.github/workflows/arm64-runtime.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/arm64-runtime.yml)<br>[.github/workflows/bun-parity.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/bun-parity.yml)<br>[.github/workflows/check-phase6-ready.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/check-phase6-ready.yml)<br>[.github/workflows/cla.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/cla.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/claude.yml)<br>[.github/workflows/coverage.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/coverage.yml)<br>[.github/workflows/example-loki-review.yml.example](../../../../sources/asklokesh__loki-mode/.github/workflows/example-loki-review.yml.example) |
| container | 79 | [docker-compose.test.yml](../../../../sources/asklokesh__loki-mode/docker-compose.test.yml)<br>[docker-compose.yml](../../../../sources/asklokesh__loki-mode/docker-compose.yml)<br>[Dockerfile](../../../../sources/asklokesh__loki-mode/Dockerfile)<br>[Dockerfile.purplelab-test](../../../../sources/asklokesh__loki-mode/Dockerfile.purplelab-test)<br>[Dockerfile.sandbox](../../../../sources/asklokesh__loki-mode/Dockerfile.sandbox)<br>[Dockerfile.test-runner](../../../../sources/asklokesh__loki-mode/Dockerfile.test-runner)<br>[web-app/docker-compose.purple-lab.yml](../../../../sources/asklokesh__loki-mode/web-app/docker-compose.purple-lab.yml)<br>[web-app/Dockerfile](../../../../sources/asklokesh__loki-mode/web-app/Dockerfile) |
| instruction | 7 | [CLAUDE.md](../../../../sources/asklokesh__loki-mode/CLAUDE.md)<br>[tests/fixtures/project-graph/acme/CLAUDE.md](../../../../sources/asklokesh__loki-mode/tests/fixtures/project-graph/acme/CLAUDE.md)<br>[tests/fixtures/project-graph/acme/ui/CLAUDE.md](../../../../sources/asklokesh__loki-mode/tests/fixtures/project-graph/acme/ui/CLAUDE.md)<br>[tests/fixtures/project-graph/acme/service/CLAUDE.md](../../../../sources/asklokesh__loki-mode/tests/fixtures/project-graph/acme/service/CLAUDE.md)<br>[tests/fixtures/project-graph/acme/api/CLAUDE.md](../../../../sources/asklokesh__loki-mode/tests/fixtures/project-graph/acme/api/CLAUDE.md)<br>[skills/agents.md](../../../../sources/asklokesh__loki-mode/skills/agents.md)<br>[references/agents.md](../../../../sources/asklokesh__loki-mode/references/agents.md) |
| docs | 166 | [README.md](../../../../sources/asklokesh__loki-mode/README.md)<br>[website/index.html](../../../../sources/asklokesh__loki-mode/website/index.html)<br>[website/README.md](../../../../sources/asklokesh__loki-mode/website/README.md)<br>[vscode-extension/README.md](../../../../sources/asklokesh__loki-mode/vscode-extension/README.md)<br>[tests/live/README.md](../../../../sources/asklokesh__loki-mode/tests/live/README.md)<br>[tests/fixtures/legacy-checkout-app/README.md](../../../../sources/asklokesh__loki-mode/tests/fixtures/legacy-checkout-app/README.md)<br>[templates/README.md](../../../../sources/asklokesh__loki-mode/templates/README.md)<br>[templates/clusters/README.md](../../../../sources/asklokesh__loki-mode/templates/clusters/README.md) |
| config | 19 | [package.json](../../../../sources/asklokesh__loki-mode/package.json)<br>[requirements-test.txt](../../../../sources/asklokesh__loki-mode/requirements-test.txt)<br>[web-app/package.json](../../../../sources/asklokesh__loki-mode/web-app/package.json)<br>[web-app/requirements-test.txt](../../../../sources/asklokesh__loki-mode/web-app/requirements-test.txt)<br>[web-app/requirements.txt](../../../../sources/asklokesh__loki-mode/web-app/requirements.txt)<br>[web-app/tsconfig.json](../../../../sources/asklokesh__loki-mode/web-app/tsconfig.json)<br>[vscode-extension/package.json](../../../../sources/asklokesh__loki-mode/vscode-extension/package.json)<br>[vscode-extension/tsconfig.json](../../../../sources/asklokesh__loki-mode/vscode-extension/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1161 | [docker-compose.test.yml](../../../../sources/asklokesh__loki-mode/docker-compose.test.yml)<br>[Dockerfile.test-runner](../../../../sources/asklokesh__loki-mode/Dockerfile.test-runner)<br>[requirements-test.txt](../../../../sources/asklokesh__loki-mode/requirements-test.txt)<br>[wiki/Quality-Gates.md](../../../../sources/asklokesh__loki-mode/wiki/Quality-Gates.md)<br>[web-app/requirements-test.txt](../../../../sources/asklokesh__loki-mode/web-app/requirements-test.txt)<br>[web-app/tests/conftest.py](../../../../sources/asklokesh__loki-mode/web-app/tests/conftest.py) |
| CI workflow | 23 | [.github/workflows/arm64-runtime.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/arm64-runtime.yml)<br>[.github/workflows/bun-parity.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/bun-parity.yml)<br>[.github/workflows/check-phase6-ready.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/check-phase6-ready.yml)<br>[.github/workflows/cla.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/cla.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/claude.yml) |
| 컨테이너/배포 | 79 | [docker-compose.test.yml](../../../../sources/asklokesh__loki-mode/docker-compose.test.yml)<br>[docker-compose.yml](../../../../sources/asklokesh__loki-mode/docker-compose.yml)<br>[Dockerfile](../../../../sources/asklokesh__loki-mode/Dockerfile)<br>[Dockerfile.purplelab-test](../../../../sources/asklokesh__loki-mode/Dockerfile.purplelab-test)<br>[Dockerfile.sandbox](../../../../sources/asklokesh__loki-mode/Dockerfile.sandbox)<br>[Dockerfile.test-runner](../../../../sources/asklokesh__loki-mode/Dockerfile.test-runner) |
| 보안/정책 | 65 | [wiki/Audit-Logging.md](../../../../sources/asklokesh__loki-mode/wiki/Audit-Logging.md)<br>[wiki/Network-Security.md](../../../../sources/asklokesh__loki-mode/wiki/Network-Security.md)<br>[wiki/Sandbox-Mode.md](../../../../sources/asklokesh__loki-mode/wiki/Sandbox-Mode.md)<br>[wiki/Security.md](../../../../sources/asklokesh__loki-mode/wiki/Security.md)<br>[web-app/auth.py](../../../../sources/asklokesh__loki-mode/web-app/auth.py)<br>[web-app/tests/e2e/auth.spec.ts](../../../../sources/asklokesh__loki-mode/web-app/tests/e2e/auth.spec.ts) |
| 에이전트 지시문 | 7 | [CLAUDE.md](../../../../sources/asklokesh__loki-mode/CLAUDE.md)<br>[tests/fixtures/project-graph/acme/CLAUDE.md](../../../../sources/asklokesh__loki-mode/tests/fixtures/project-graph/acme/CLAUDE.md)<br>[tests/fixtures/project-graph/acme/ui/CLAUDE.md](../../../../sources/asklokesh__loki-mode/tests/fixtures/project-graph/acme/ui/CLAUDE.md)<br>[tests/fixtures/project-graph/acme/service/CLAUDE.md](../../../../sources/asklokesh__loki-mode/tests/fixtures/project-graph/acme/service/CLAUDE.md)<br>[tests/fixtures/project-graph/acme/api/CLAUDE.md](../../../../sources/asklokesh__loki-mode/tests/fixtures/project-graph/acme/api/CLAUDE.md)<br>[skills/agents.md](../../../../sources/asklokesh__loki-mode/skills/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `server.json`, `web-app/server.py`, `web-app/src/App.tsx`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `web-app/server.py`, `web-app/src/App.tsx`.
3. agent/tool runtime 매핑: `SKILL.md`, `wiki/Sandbox-Mode.md`, `web-app/src/hooks/useAuth.tsx`.
4. retrieval/memory/indexing 확인: `index.html`, `wiki/_Sidebar.md`, `wiki/API-Reference.md`.
5. test/eval 파일로 동작 검증: `docker-compose.test.yml`, `Dockerfile.test-runner`, `requirements-test.txt`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Multi agent autonomous SDLC framework. Spec to deployed app. PRD, GitHub issue, OpenAPI/JSON/YAML, or one line brief. 5 . 핵심 구조 신호는 Shell, package.json, Dockerfile, docker-compose.yml, README.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
