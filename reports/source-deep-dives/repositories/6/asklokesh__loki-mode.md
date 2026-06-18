# asklokesh/loki-mode Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Multi-agent autonomous SDLC framework. Spec to deployed app. PRD, GitHub issue, OpenAPI/JSON/YAML, or one-line brief. 5 AI providers, 11 quality gates.

## 요약

- 조사 단위: `sources/asklokesh__loki-mode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,361 files, 546 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=server.json, web-app/server.py, web-app/src/App.tsx이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | asklokesh/loki-mode |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | Shell |
| Stars | 980 |
| Forks | 191 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/asklokesh__loki-mode](../../../../sources/asklokesh__loki-mode) |
| Existing report | [reports/global-trending/repositories/asklokesh__loki-mode.md](../../../global-trending/repositories/asklokesh__loki-mode.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3361 / 546 |
| Max observed depth | 9 |
| Top directories | .claude, .claude-plugin, .githooks, .github, agent-skills, agents, api, api-examples, artifacts, assets, autonomy, benchmarks, bin, blog, claude, collab, completions, dashboard, dashboard-ui, demo |
| Top extensions | .patch: 649, .py: 630, .md: 448, .sh: 378, .ts: 229, .txt: 206, .js: 194, .tsx: 157, .json: 119, (none): 90, .sha256: 60, .png: 53 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
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


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1161 | [docker-compose.test.yml](../../../../sources/asklokesh__loki-mode/docker-compose.test.yml)<br>[Dockerfile.test-runner](../../../../sources/asklokesh__loki-mode/Dockerfile.test-runner)<br>[requirements-test.txt](../../../../sources/asklokesh__loki-mode/requirements-test.txt)<br>[wiki/Quality-Gates.md](../../../../sources/asklokesh__loki-mode/wiki/Quality-Gates.md)<br>[web-app/requirements-test.txt](../../../../sources/asklokesh__loki-mode/web-app/requirements-test.txt)<br>[web-app/tests/conftest.py](../../../../sources/asklokesh__loki-mode/web-app/tests/conftest.py) |
| CI workflows | 23 | [.github/workflows/arm64-runtime.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/arm64-runtime.yml)<br>[.github/workflows/bun-parity.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/bun-parity.yml)<br>[.github/workflows/check-phase6-ready.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/check-phase6-ready.yml)<br>[.github/workflows/cla.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/cla.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/claude-code-review.yml)<br>[.github/workflows/claude.yml](../../../../sources/asklokesh__loki-mode/.github/workflows/claude.yml) |
| Containers / deploy | 79 | [docker-compose.test.yml](../../../../sources/asklokesh__loki-mode/docker-compose.test.yml)<br>[docker-compose.yml](../../../../sources/asklokesh__loki-mode/docker-compose.yml)<br>[Dockerfile](../../../../sources/asklokesh__loki-mode/Dockerfile)<br>[Dockerfile.purplelab-test](../../../../sources/asklokesh__loki-mode/Dockerfile.purplelab-test)<br>[Dockerfile.sandbox](../../../../sources/asklokesh__loki-mode/Dockerfile.sandbox)<br>[Dockerfile.test-runner](../../../../sources/asklokesh__loki-mode/Dockerfile.test-runner) |
| Security / policy | 65 | [wiki/Audit-Logging.md](../../../../sources/asklokesh__loki-mode/wiki/Audit-Logging.md)<br>[wiki/Network-Security.md](../../../../sources/asklokesh__loki-mode/wiki/Network-Security.md)<br>[wiki/Sandbox-Mode.md](../../../../sources/asklokesh__loki-mode/wiki/Sandbox-Mode.md)<br>[wiki/Security.md](../../../../sources/asklokesh__loki-mode/wiki/Security.md)<br>[web-app/auth.py](../../../../sources/asklokesh__loki-mode/web-app/auth.py)<br>[web-app/tests/e2e/auth.spec.ts](../../../../sources/asklokesh__loki-mode/web-app/tests/e2e/auth.spec.ts) |
| Agent instructions | 7 | [CLAUDE.md](../../../../sources/asklokesh__loki-mode/CLAUDE.md)<br>[tests/fixtures/project-graph/acme/CLAUDE.md](../../../../sources/asklokesh__loki-mode/tests/fixtures/project-graph/acme/CLAUDE.md)<br>[tests/fixtures/project-graph/acme/ui/CLAUDE.md](../../../../sources/asklokesh__loki-mode/tests/fixtures/project-graph/acme/ui/CLAUDE.md)<br>[tests/fixtures/project-graph/acme/service/CLAUDE.md](../../../../sources/asklokesh__loki-mode/tests/fixtures/project-graph/acme/service/CLAUDE.md)<br>[tests/fixtures/project-graph/acme/api/CLAUDE.md](../../../../sources/asklokesh__loki-mode/tests/fixtures/project-graph/acme/api/CLAUDE.md)<br>[skills/agents.md](../../../../sources/asklokesh__loki-mode/skills/agents.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `server.json`, `web-app/server.py`, `web-app/src/App.tsx`.
2. Trace execution through entrypoints: `server.json`, `web-app/server.py`, `web-app/src/App.tsx`.
3. Map agent/tool runtime through: `SKILL.md`, `wiki/Sandbox-Mode.md`, `web-app/src/hooks/useAuth.tsx`.
4. Inspect retrieval/memory/indexing through: `index.html`, `wiki/_Sidebar.md`, `wiki/API-Reference.md`.
5. Verify behavior through test/eval files: `docker-compose.test.yml`, `Dockerfile.test-runner`, `requirements-test.txt`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Multi agent autonomous SDLC framework. Spec to deployed app. PRD, GitHub issue, OpenAPI/JSON/YAML, or one line brief. 5 . 핵심 구조 신호는 Shell, package.json, Dockerfile, docker-compose.yml, README.md, CLAUDE.md이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
