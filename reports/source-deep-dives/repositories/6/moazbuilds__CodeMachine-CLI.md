# moazbuilds/codemachine-cli 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 552 files, 157 directories.

## 요약

- 조사 단위: `sources/moazbuilds__CodeMachine-CLI` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 552 files, 157 directories, depth score 107, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

개발 생산성/DevTools 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=bin/codemachine.js이고, 의존성 단서는 modelcontextprotocol, commander, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | moazbuilds/codemachine-cli |
| 주제 | 개발 생산성/DevTools / 개발 생산성/DevTools |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/moazbuilds__CodeMachine-CLI](../../../../sources/moazbuilds__CodeMachine-CLI) |
| 기존 보고서 | [reports/clone-structures/moazbuilds__codemachine-cli.md](../../../clone-structures/moazbuilds__codemachine-cli.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 552 / 157 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .github, bin, config, docker, images, prompts, scripts, src, templates |
| 상위 확장자 | .ts: 423, .tsx: 78, .md: 15, .js: 8, .json: 8, .png: 6, .yaml: 4, .yml: 4, (none): 3, .csv: 1, .lock: 1, .toml: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 139 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| config | top-level component | 1 |
| docker | documentation surface | 1 |
| images | top-level component | 1 |
| prompts | top-level component | 1 |
| scripts | top-level component | 1 |
| templates | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | _comment_dev | Development: Run from source (no build needed) |
| serve-dev | package.json | dev | DEBUG=true bun --conditions=browser src/runtime/cli-setup.ts |
| utility | package.json | debug | DEBUG=true bun --conditions=browser src/runtime/cli-setup.ts |
| serve-dev | package.json | start | bun --conditions=browser src/runtime/cli-setup.ts |
| test | package.json | _comment_build | Production: Build platform-specific executables |
| build | package.json | build | bun scripts/build.ts |
| test | package.json | _comment_quality | Code Quality: Linting, testing, formatting |
| quality | package.json | lint | eslint --max-warnings=0 "src/**/*.{ts,tsx}" |
| test | package.json | test | bun test |
| test | package.json | test:watch | bun test --watch |
| test | package.json | test:coverage | bun test --coverage |
| quality | package.json | format | prettier --write . |
| quality | package.json | typecheck | tsc --noEmit |
| utility | package.json | _comment_telemetry | Telemetry: Import and analyze traces/logs |
| utility | package.json | import-telemetry | bun scripts/import-telemetry.ts |
| build | package.json | _comment_release | Release: Publishing and validation |
| utility | package.json | prepare | husky install |
| test | package.json | release | bun scripts/publish.ts --tag latest |
| test | package.json | publish:all | bun scripts/publish.ts --tag latest --dry-run |
| entrypoint | package.json bin | codemachine.js | bin/codemachine.js |
| entrypoint | package.json bin | codemachine.js | bin/codemachine.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | commander |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [bin/codemachine.js](../../../../sources/moazbuilds__CodeMachine-CLI/bin/codemachine.js) | entrypoints signal |
| config | [package.json](../../../../sources/moazbuilds__CodeMachine-CLI/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/moazbuilds__CodeMachine-CLI/tsconfig.json) | config signal |
| config | [config/package.json](../../../../sources/moazbuilds__CodeMachine-CLI/config/package.json) | config signal |
| ci | [.github/workflows/build.yml](../../../../sources/moazbuilds__CodeMachine-CLI/.github/workflows/build.yml) | ci signal |
| ci | [.github/workflows/publish.yml](../../../../sources/moazbuilds__CodeMachine-CLI/.github/workflows/publish.yml) | ci signal |
| docs | [README.md](../../../../sources/moazbuilds__CodeMachine-CLI/README.md) | docs signal |
| docs | [docker/observability/README.md](../../../../sources/moazbuilds__CodeMachine-CLI/docker/observability/README.md) | docs signal |
| container | [docker/observability/docker-compose.yml](../../../../sources/moazbuilds__CodeMachine-CLI/docker/observability/docker-compose.yml) | container support |
| eval | [src/shared/tracing/config.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/config.ts) | eval support |
| eval | [src/shared/tracing/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/index.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [bin/codemachine.js](../../../../sources/moazbuilds__CodeMachine-CLI/bin/codemachine.js) |
| agentRuntime | 187 | [src/workflows/step/hooks.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/step/hooks.ts)<br>[src/workflows/runner/core.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/runner/core.ts)<br>[src/workflows/runner/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/runner/index.ts)<br>[src/workflows/runner/types.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/runner/types.ts)<br>[src/workflows/runner/modes/autonomous.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/runner/modes/autonomous.ts)<br>[src/workflows/runner/modes/continuous.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/runner/modes/continuous.ts)<br>[src/workflows/runner/modes/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/runner/modes/index.ts)<br>[src/workflows/runner/modes/interactive.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/runner/modes/interactive.ts) |
| mcp | 49 | [src/workflows/mcp.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/mcp.ts)<br>[src/workflows/signals/mcp/controller.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/signals/mcp/controller.ts)<br>[src/workflows/signals/mcp/detector.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/signals/mcp/detector.ts)<br>[src/workflows/signals/mcp/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/signals/mcp/index.ts)<br>[src/infra/mcp/context.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/mcp/context.ts)<br>[src/infra/mcp/errors.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/mcp/errors.ts)<br>[src/infra/mcp/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/mcp/index.ts)<br>[src/infra/mcp/registry.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/mcp/registry.ts) |
| retrieval | 106 | [src/workflows/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/index.ts)<br>[src/workflows/utils/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/utils/index.ts)<br>[src/workflows/templates/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/templates/index.ts)<br>[src/workflows/step/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/step/index.ts)<br>[src/workflows/step/scenarios/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/step/scenarios/index.ts)<br>[src/workflows/state/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/state/index.ts)<br>[src/workflows/signals/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/signals/index.ts)<br>[src/workflows/signals/mcp/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/workflows/signals/mcp/index.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 19 | [src/shared/tracing/config.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/config.ts)<br>[src/shared/tracing/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/index.ts)<br>[src/shared/tracing/init.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/init.ts)<br>[src/shared/tracing/sampler.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/sampler.ts)<br>[src/shared/tracing/storage.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/storage.ts)<br>[src/shared/tracing/tracers.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/tracers.ts)<br>[src/shared/tracing/exporters/factory.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/exporters/factory.ts)<br>[src/shared/tracing/exporters/file.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/exporters/file.ts) |
| security | 9 | [src/infra/engines/providers/opencode/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/opencode/auth.ts)<br>[src/infra/engines/providers/mistral/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/mistral/auth.ts)<br>[src/infra/engines/providers/cursor/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/cursor/auth.ts)<br>[src/infra/engines/providers/codex/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/codex/auth.ts)<br>[src/infra/engines/providers/claude/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/claude/auth.ts)<br>[src/infra/engines/providers/ccr/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/ccr/auth.ts)<br>[src/infra/engines/providers/auggie/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/auggie/auth.ts)<br>[src/infra/engines/core/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/core/auth.ts) |
| ci | 2 | [.github/workflows/build.yml](../../../../sources/moazbuilds__CodeMachine-CLI/.github/workflows/build.yml)<br>[.github/workflows/publish.yml](../../../../sources/moazbuilds__CodeMachine-CLI/.github/workflows/publish.yml) |
| container | 1 | [docker/observability/docker-compose.yml](../../../../sources/moazbuilds__CodeMachine-CLI/docker/observability/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 2 | [README.md](../../../../sources/moazbuilds__CodeMachine-CLI/README.md)<br>[docker/observability/README.md](../../../../sources/moazbuilds__CodeMachine-CLI/docker/observability/README.md) |
| config | 3 | [package.json](../../../../sources/moazbuilds__CodeMachine-CLI/package.json)<br>[tsconfig.json](../../../../sources/moazbuilds__CodeMachine-CLI/tsconfig.json)<br>[config/package.json](../../../../sources/moazbuilds__CodeMachine-CLI/config/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 19 | [src/shared/tracing/config.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/config.ts)<br>[src/shared/tracing/index.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/index.ts)<br>[src/shared/tracing/init.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/init.ts)<br>[src/shared/tracing/sampler.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/sampler.ts)<br>[src/shared/tracing/storage.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/storage.ts)<br>[src/shared/tracing/tracers.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/shared/tracing/tracers.ts) |
| CI workflow | 2 | [.github/workflows/build.yml](../../../../sources/moazbuilds__CodeMachine-CLI/.github/workflows/build.yml)<br>[.github/workflows/publish.yml](../../../../sources/moazbuilds__CodeMachine-CLI/.github/workflows/publish.yml) |
| 컨테이너/배포 | 1 | [docker/observability/docker-compose.yml](../../../../sources/moazbuilds__CodeMachine-CLI/docker/observability/docker-compose.yml) |
| 보안/정책 | 9 | [src/infra/engines/providers/opencode/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/opencode/auth.ts)<br>[src/infra/engines/providers/mistral/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/mistral/auth.ts)<br>[src/infra/engines/providers/cursor/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/cursor/auth.ts)<br>[src/infra/engines/providers/codex/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/codex/auth.ts)<br>[src/infra/engines/providers/claude/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/claude/auth.ts)<br>[src/infra/engines/providers/ccr/auth.ts](../../../../sources/moazbuilds__CodeMachine-CLI/src/infra/engines/providers/ccr/auth.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `bin/codemachine.js`, `package.json`, `tsconfig.json`.
2. entrypoint를 따라 실행 흐름 확인: `bin/codemachine.js`.
3. agent/tool runtime 매핑: `src/workflows/step/hooks.ts`, `src/workflows/runner/core.ts`, `src/workflows/runner/index.ts`.
4. retrieval/memory/indexing 확인: `src/workflows/index.ts`, `src/workflows/utils/index.ts`, `src/workflows/templates/index.ts`.
5. test/eval 파일로 동작 검증: `src/shared/tracing/config.ts`, `src/shared/tracing/index.ts`, `src/shared/tracing/init.ts`.

## 기존 레포 인사이트

개발 생산성/DevTools 관점에서 Local clone structure analysis 552 files, 157 directories.. 핵심 구조 신호는 package.json, README.md, LICENSE, modelcontextprotocol, ci, docs이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 개발 생산성/DevTools 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음입니다.
