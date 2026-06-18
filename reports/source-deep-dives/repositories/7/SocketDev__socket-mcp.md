# SocketDev/socket-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Model Context Protocol server for socket.dev integration

## 요약

- 조사 단위: `sources/SocketDev__socket-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,820 files, 724 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=scripts/fleet/janus-multi-mcp.mts, docs/agents.md/fleet/multi-janus-mcp-shim.md, .claude/hooks/fleet/minify-mcp-out/index.mts이고, 의존성 단서는 anthropic, mcp, modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | SocketDev/socket-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 117 |
| Forks | 33 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/SocketDev__socket-mcp](../../../../sources/SocketDev__socket-mcp) |
| 기존 보고서 | [reports/global-trending/repositories/SocketDev__socket-mcp.md](../../../global-trending/repositories/SocketDev__socket-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1820 / 724 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .agents, .claude, .config, .git-hooks, .github, .husky, docs, hooks, lib, mock-client, reports, scripts, test |
| 상위 확장자 | .mts: 885, .json: 446, .md: 415, .ts: 29, (none): 16, .mjs: 8, .yml: 4, .png: 3, .txt: 3, .sh: 2, .tmpl: 2, .yaml: 2 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 100 |
| lib | source boundary | 10 |
| .github | ci surface | 1 |
| hooks | top-level component | 1 |
| mock-client | source boundary | 1 |
| reports | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | prepare | node scripts/fleet/install-git-hooks.mts |
| build | package.json | prepublishOnly | npm run build |
| utility | package.json | postpublish | npm run clean |
| utility | package.json | publish | node scripts/fleet/publish.mts |
| test | package.json | test | node scripts/fleet/test.mts |
| test | package.json | test:e2e | vitest run --config .config/repo/vitest.config.mts test/e2e/ |
| utility | package.json | cover | node scripts/fleet/cover.mts |
| test | package.json | test:tsc | tsgo --noEmit -p tsconfig.json |
| quality | package.json | lint | node scripts/fleet/lint.mts |
| quality | package.json | lint:all | node scripts/fleet/lint.mts --all |
| quality | package.json | format | oxfmt -c .config/fleet/oxfmtrc.json --write . |
| quality | package.json | format:check | oxfmt -c .config/fleet/oxfmtrc.json --check . |
| quality | package.json | check | node scripts/fleet/check.mts |
| quality | package.json | check:all | node scripts/fleet/check.mts --all |
| utility | package.json | fix | node scripts/fleet/fix.mts |
| utility | package.json | fix:all | node scripts/fleet/fix.mts --all |
| utility | package.json | update | node scripts/fleet/update.mts |
| build | package.json | build | npm run clean && run-s build:* |
| build | package.json | build:bundle | node scripts/build.mts |
| build | package.json | build:permissions | chmod +x ./dist/index.cjs |
| build | package.json | build-mcpb | run-s build build-mcpb:* |
| build | package.json | build-mcpb:versions_match | node scripts/check-versions.ts |
| build | package.json | build-mcpb:validate | mcpb validate ./ |
| build | package.json | build-mcpb:ensure-deps | npm install --production --ignore-scripts |
| build | package.json | build-mcpb:mcpb-pack | mcpb pack ./ |
| utility | package.json | clean | bash ./scripts/clean.sh |
| utility | package.json | debug-stdio | node ./mock-client/debug-client.ts |
| utility | package.json | debug-sdk | node ./mock-client/stdio-client.ts |
| utility | package.json | debug-http | node ./mock-client/http-client.ts |
| serve-dev | package.json | server-stdio | SOCKET_API_TOKEN=${SOCKET_API_TOKEN:-${SOCKET_API_KEY}} node ./index.ts |
| serve-dev | package.json | server-stdio:debug | SOCKET_DEBUG=1 SOCKET_API_TOKEN=${SOCKET_API_TOKEN:-${SOCKET_API_KEY}} node ./index.ts |
| serve-dev | package.json | server-http | MCP_HTTP_MODE=true SOCKET_API_TOKEN=${SOCKET_API_TOKEN:-${SOCKET_API_KEY}} node ./index.ts |
| serve-dev | package.json | server-http:debug | SOCKET_DEBUG=1 MCP_HTTP_MODE=true SOCKET_API_TOKEN=${SOCKET_API_TOKEN:-${SOCKET_API_KEY}} node ./index.ts |
| quality | package.json | check:paths | node scripts/fleet/check/paths-are-canonical.mts |
| utility | package.json | security | node scripts/fleet/security.mts |
| utility | package.json | setup-security-tools | node .claude/hooks/fleet/setup-security-tools/install.mts |
| utility | package.json | lockstep | node scripts/fleet/lockstep.mts |
| utility | package.json | lockstep:emit-schema | node scripts/fleet/lockstep-emit-schema.mts |
| utility | package.json | ci:local | node scripts/fleet/agent-ci-skip-locks.mts run --all --quiet --pause-on-failure --github-token |
| utility | package.json | weekly-update | node scripts/fleet/weekly-update.mts |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | anthropic |
| agentProtocols | mcp, modelcontextprotocol |
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
| mcp | [scripts/fleet/janus-multi-mcp.mts](../../../../sources/SocketDev__socket-mcp/scripts/fleet/janus-multi-mcp.mts) | mcp signal |
| mcp | [docs/agents.md/fleet/multi-janus-mcp-shim.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/multi-janus-mcp-shim.md) | mcp signal |
| mcp | [.claude/hooks/fleet/minify-mcp-out/index.mts](../../../../sources/SocketDev__socket-mcp/.claude/hooks/fleet/minify-mcp-out/index.mts) | mcp signal |
| mcp | [.claude/hooks/fleet/minify-mcp-out/package.json](../../../../sources/SocketDev__socket-mcp/.claude/hooks/fleet/minify-mcp-out/package.json) | mcp signal |
| agentRuntime | [test/unit/tool-alerts.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/tool-alerts.test.mts) | agentRuntime signal |
| agentRuntime | [test/unit/tool-depscore.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/tool-depscore.test.mts) | agentRuntime signal |
| agentRuntime | [test/unit/tool-logging.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/tool-logging.test.mts) | agentRuntime signal |
| agentRuntime | [test/unit/tool-organizations.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/tool-organizations.test.mts) | agentRuntime signal |
| entrypoints | [test/integration/server.test.mts](../../../../sources/SocketDev__socket-mcp/test/integration/server.test.mts) | entrypoints signal |
| entrypoints | [test/e2e/server.test.mts](../../../../sources/SocketDev__socket-mcp/test/e2e/server.test.mts) | entrypoints signal |
| entrypoints | [lib/server.ts](../../../../sources/SocketDev__socket-mcp/lib/server.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/SocketDev__socket-mcp/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [test/integration/server.test.mts](../../../../sources/SocketDev__socket-mcp/test/integration/server.test.mts)<br>[test/e2e/server.test.mts](../../../../sources/SocketDev__socket-mcp/test/e2e/server.test.mts)<br>[lib/server.ts](../../../../sources/SocketDev__socket-mcp/lib/server.ts) |
| agentRuntime | 1235 | [test/unit/tool-alerts.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/tool-alerts.test.mts)<br>[test/unit/tool-depscore.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/tool-depscore.test.mts)<br>[test/unit/tool-logging.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/tool-logging.test.mts)<br>[test/unit/tool-organizations.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/tool-organizations.test.mts)<br>[test/unit/tool-package-files.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/tool-package-files.test.mts)<br>[test/unit/tool-threat-feed.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/tool-threat-feed.test.mts)<br>[scripts/fleet/agent-ci-skip-locks.mts](../../../../sources/SocketDev__socket-mcp/scripts/fleet/agent-ci-skip-locks.mts)<br>[scripts/fleet/check/agent-ci-skip-locks-is-guarded.mts](../../../../sources/SocketDev__socket-mcp/scripts/fleet/check/agent-ci-skip-locks-is-guarded.mts) |
| mcp | 7 | [scripts/fleet/janus-multi-mcp.mts](../../../../sources/SocketDev__socket-mcp/scripts/fleet/janus-multi-mcp.mts)<br>[docs/agents.md/fleet/multi-janus-mcp-shim.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/multi-janus-mcp-shim.md)<br>[.claude/hooks/fleet/minify-mcp-out/index.mts](../../../../sources/SocketDev__socket-mcp/.claude/hooks/fleet/minify-mcp-out/index.mts)<br>[.claude/hooks/fleet/minify-mcp-out/package.json](../../../../sources/SocketDev__socket-mcp/.claude/hooks/fleet/minify-mcp-out/package.json)<br>[.claude/hooks/fleet/minify-mcp-out/README.md](../../../../sources/SocketDev__socket-mcp/.claude/hooks/fleet/minify-mcp-out/README.md)<br>[.claude/hooks/fleet/minify-mcp-out/tsconfig.json](../../../../sources/SocketDev__socket-mcp/.claude/hooks/fleet/minify-mcp-out/tsconfig.json)<br>[.claude/hooks/fleet/minify-mcp-out/test/index.test.mts](../../../../sources/SocketDev__socket-mcp/.claude/hooks/fleet/minify-mcp-out/test/index.test.mts) |
| retrieval | 434 | [index.ts](../../../../sources/SocketDev__socket-mcp/index.ts)<br>[scripts/fleet/triaging-findings/lib/ingest.mts](../../../../sources/SocketDev__socket-mcp/scripts/fleet/triaging-findings/lib/ingest.mts)<br>[scripts/fleet/setup/index.mts](../../../../sources/SocketDev__socket-mcp/scripts/fleet/setup/index.mts)<br>[hooks/socket-gate/index.mts](../../../../sources/SocketDev__socket-mcp/hooks/socket-gate/index.mts)<br>[.config/oxlint-plugin/index.mts](../../../../sources/SocketDev__socket-mcp/.config/oxlint-plugin/index.mts)<br>[.config/oxlint-plugin/fleet/use-fleet-canonical-api-token-getter/index.mts](../../../../sources/SocketDev__socket-mcp/.config/oxlint-plugin/fleet/use-fleet-canonical-api-token-getter/index.mts)<br>[.config/oxlint-plugin/fleet/sort-source-methods/index.mts](../../../../sources/SocketDev__socket-mcp/.config/oxlint-plugin/fleet/sort-source-methods/index.mts)<br>[.config/oxlint-plugin/fleet/sort-set-args/index.mts](../../../../sources/SocketDev__socket-mcp/.config/oxlint-plugin/fleet/sort-set-args/index.mts) |
| spec | 1 | [docs/agents.md/repo/architecture.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/repo/architecture.md) |
| eval | 354 | [test/unit/alerts.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/alerts.test.mts)<br>[test/unit/artifacts.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/artifacts.test.mts)<br>[test/unit/blob-cache.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/blob-cache.test.mts)<br>[test/unit/blob.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/blob.test.mts)<br>[test/unit/env.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/env.test.mts)<br>[test/unit/files.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/files.test.mts)<br>[test/unit/http-helpers.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/http-helpers.test.mts)<br>[test/unit/http-origin.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/http-origin.test.mts) |
| security | 602 | [test/unit/oauth.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/oauth.test.mts)<br>[test/integration/oauth.test.mts](../../../../sources/SocketDev__socket-mcp/test/integration/oauth.test.mts)<br>[scripts/fleet/audit-skill-usage.mts](../../../../sources/SocketDev__socket-mcp/scripts/fleet/audit-skill-usage.mts)<br>[scripts/fleet/audit-transcript.mts](../../../../sources/SocketDev__socket-mcp/scripts/fleet/audit-transcript.mts)<br>[scripts/fleet/security.mts](../../../../sources/SocketDev__socket-mcp/scripts/fleet/security.mts)<br>[scripts/fleet/lib/security-report.mts](../../../../sources/SocketDev__socket-mcp/scripts/fleet/lib/security-report.mts)<br>[scripts/fleet/check/hooks-have-no-guard-reminder-overlap.mts](../../../../sources/SocketDev__socket-mcp/scripts/fleet/check/hooks-have-no-guard-reminder-overlap.mts)<br>[lib/oauth.ts](../../../../sources/SocketDev__socket-mcp/lib/oauth.ts) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/SocketDev__socket-mcp/.github/workflows/ci.yml)<br>[.github/workflows/provenance.yml](../../../../sources/SocketDev__socket-mcp/.github/workflows/provenance.yml)<br>[.github/workflows/weekly-update-non-gh-aw.yml.disabled](../../../../sources/SocketDev__socket-mcp/.github/workflows/weekly-update-non-gh-aw.yml.disabled) |
| container | 0 | 명확하지 않음 |
| instruction | 60 | [CLAUDE.md](../../../../sources/SocketDev__socket-mcp/CLAUDE.md)<br>[docs/agents.md/repo/architecture.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/repo/architecture.md)<br>[docs/agents.md/fleet/agent-delegation.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/agent-delegation.md)<br>[docs/agents.md/fleet/agents-and-skills.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/agents-and-skills.md)<br>[docs/agents.md/fleet/bypass-phrases.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/bypass-phrases.md)<br>[docs/agents.md/fleet/c8-ignore-directives.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/c8-ignore-directives.md)<br>[docs/agents.md/fleet/cascade-is-a-unit.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/cascade-is-a-unit.md)<br>[docs/agents.md/fleet/cascaded-hook-catalog.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/cascaded-hook-catalog.md) |
| docs | 250 | [README.md](../../../../sources/SocketDev__socket-mcp/README.md)<br>[mock-client/README.md](../../../../sources/SocketDev__socket-mcp/mock-client/README.md)<br>[hooks/socket-gate/README.md](../../../../sources/SocketDev__socket-mcp/hooks/socket-gate/README.md)<br>[docs/agents.md/repo/architecture.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/repo/architecture.md)<br>[docs/agents.md/fleet/agent-delegation.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/agent-delegation.md)<br>[docs/agents.md/fleet/agents-and-skills.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/agents-and-skills.md)<br>[docs/agents.md/fleet/bypass-phrases.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/bypass-phrases.md)<br>[docs/agents.md/fleet/c8-ignore-directives.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/c8-ignore-directives.md) |
| config | 428 | [package.json](../../../../sources/SocketDev__socket-mcp/package.json)<br>[pnpm-workspace.yaml](../../../../sources/SocketDev__socket-mcp/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/SocketDev__socket-mcp/tsconfig.json)<br>[.config/oxlint-plugin/package.json](../../../../sources/SocketDev__socket-mcp/.config/oxlint-plugin/package.json)<br>[.config/oxlint-plugin/fleet/use-fleet-canonical-api-token-getter/package.json](../../../../sources/SocketDev__socket-mcp/.config/oxlint-plugin/fleet/use-fleet-canonical-api-token-getter/package.json)<br>[.config/oxlint-plugin/fleet/sort-source-methods/package.json](../../../../sources/SocketDev__socket-mcp/.config/oxlint-plugin/fleet/sort-source-methods/package.json)<br>[.config/oxlint-plugin/fleet/sort-set-args/package.json](../../../../sources/SocketDev__socket-mcp/.config/oxlint-plugin/fleet/sort-set-args/package.json)<br>[.config/oxlint-plugin/fleet/sort-regex-alternations/package.json](../../../../sources/SocketDev__socket-mcp/.config/oxlint-plugin/fleet/sort-regex-alternations/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 354 | [test/unit/alerts.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/alerts.test.mts)<br>[test/unit/artifacts.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/artifacts.test.mts)<br>[test/unit/blob-cache.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/blob-cache.test.mts)<br>[test/unit/blob.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/blob.test.mts)<br>[test/unit/env.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/env.test.mts)<br>[test/unit/files.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/files.test.mts) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/SocketDev__socket-mcp/.github/workflows/ci.yml)<br>[.github/workflows/provenance.yml](../../../../sources/SocketDev__socket-mcp/.github/workflows/provenance.yml)<br>[.github/workflows/weekly-update-non-gh-aw.yml.disabled](../../../../sources/SocketDev__socket-mcp/.github/workflows/weekly-update-non-gh-aw.yml.disabled) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 602 | [test/unit/oauth.test.mts](../../../../sources/SocketDev__socket-mcp/test/unit/oauth.test.mts)<br>[test/integration/oauth.test.mts](../../../../sources/SocketDev__socket-mcp/test/integration/oauth.test.mts)<br>[scripts/fleet/audit-skill-usage.mts](../../../../sources/SocketDev__socket-mcp/scripts/fleet/audit-skill-usage.mts)<br>[scripts/fleet/audit-transcript.mts](../../../../sources/SocketDev__socket-mcp/scripts/fleet/audit-transcript.mts)<br>[scripts/fleet/security.mts](../../../../sources/SocketDev__socket-mcp/scripts/fleet/security.mts)<br>[scripts/fleet/lib/security-report.mts](../../../../sources/SocketDev__socket-mcp/scripts/fleet/lib/security-report.mts) |
| 에이전트 지시문 | 60 | [CLAUDE.md](../../../../sources/SocketDev__socket-mcp/CLAUDE.md)<br>[docs/agents.md/repo/architecture.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/repo/architecture.md)<br>[docs/agents.md/fleet/agent-delegation.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/agent-delegation.md)<br>[docs/agents.md/fleet/agents-and-skills.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/agents-and-skills.md)<br>[docs/agents.md/fleet/bypass-phrases.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/bypass-phrases.md)<br>[docs/agents.md/fleet/c8-ignore-directives.md](../../../../sources/SocketDev__socket-mcp/docs/agents.md/fleet/c8-ignore-directives.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `scripts/fleet/janus-multi-mcp.mts`, `docs/agents.md/fleet/multi-janus-mcp-shim.md`, `.claude/hooks/fleet/minify-mcp-out/index.mts`.
2. entrypoint를 따라 실행 흐름 확인: `test/integration/server.test.mts`, `test/e2e/server.test.mts`, `lib/server.ts`.
3. agent/tool runtime 매핑: `test/unit/tool-alerts.test.mts`, `test/unit/tool-depscore.test.mts`, `test/unit/tool-logging.test.mts`.
4. retrieval/memory/indexing 확인: `index.ts`, `scripts/fleet/triaging-findings/lib/ingest.mts`, `scripts/fleet/setup/index.mts`.
5. test/eval 파일로 동작 검증: `test/unit/alerts.test.mts`, `test/unit/artifacts.test.mts`, `test/unit/blob-cache.test.mts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Model Context Protocol server for socket.dev integration. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, anthropic이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
