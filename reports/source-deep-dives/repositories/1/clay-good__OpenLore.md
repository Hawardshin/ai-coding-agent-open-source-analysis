# clay-good/OpenLore 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Deterministic persistent memory that empowers AI agents to accurately map their knowledge boundaries and eliminate guesswork across massive code repositories.

## 요약

- 조사 단위: `sources/clay-good__OpenLore` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 757 files, 213 directories, depth score 125, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=src/core/services/mcp-watcher-incremental.test.ts, src/core/services/mcp-watcher.integration.test.ts, src/core/services/mcp-watcher.test.ts이고, 의존성 단서는 modelcontextprotocol, react, commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | clay-good/OpenLore |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 175 |
| Forks | 24 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/clay-good__OpenLore](../../../../sources/clay-good__OpenLore) |
| 기존 보고서 | [reports/global-trending/repositories/clay-good__OpenLore.md](../../../global-trending/repositories/clay-good__OpenLore.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 757 / 213 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .claude, .github, .planning, docs, examples, openspec, packaging, schemas, scripts, skills, src, stubs |
| 상위 확장자 | .ts: 449, .md: 213, .json: 15, .yml: 13, .yaml: 10, .jsx: 9, .js: 6, .sh: 6, .mjs: 4, (none): 4, .c: 2, .cs: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 179 |
| docs | documentation surface | 32 |
| examples/drift-demo | examples workspace | 8 |
| examples/opencode-skills | examples workspace | 6 |
| examples/ci | examples workspace | 3 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/bmad | examples workspace | 1 |
| examples/gsd | examples workspace | 1 |
| examples/mistral-vibe | examples workspace | 1 |
| examples/opencode | examples workspace | 1 |
| examples/openspec-analysis | examples workspace | 1 |
| examples/openspec-cli | examples workspace | 1 |
| examples/pi | examples workspace | 1 |
| examples/spec-kit | examples workspace | 1 |
| openspec | top-level component | 1 |
| packaging | top-level component | 1 |
| schemas | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | tsx watch src/cli/index.ts |
| build | package.json | build | tsc && node scripts/copy-assets.mjs |
| serve-dev | package.json | start | node dist/cli/index.js |
| utility | package.json | view | tsx src/cli/index.ts view |
| utility | package.json | bench | tsx scripts/bench.ts |
| utility | package.json | bench:mcp | tsx scripts/bench-mcp.ts |
| serve-dev | package.json | bench:watch | tsx scripts/bench-watch.ts |
| utility | package.json | bench:agent | tsx scripts/bench-agent.ts |
| test | package.json | test | vitest |
| test | package.json | test:run | vitest run |
| test | package.json | test:coverage | vitest run --coverage |
| test | package.json | test:openspec-compat | vitest run --grep 'openspec' \|\| echo 'No OpenSpec compat tests yet' |
| test | package.json | test:e2e | vitest run --config vitest.integration.config.ts --reporter=verbose |
| test | package.json | test:integration | vitest run --config vitest.integration.config.ts |
| test | package.json | test:live | vitest run --config vitest.integration.config.ts live-data --reporter=verbose |
| serve-dev | package.json | build:watch | tsc --watch |
| utility | package.json | homebrew:formula | node scripts/update-homebrew-formula.mjs |
| test | package.json | clean | rm -rf dist coverage |
| utility | package.json | skill:install-local | node scripts/install-skill.js |
| quality | package.json | format | eslint src --fix |
| quality | package.json | lint | eslint src |
| quality | package.json | typecheck | tsc --noEmit |
| test | package.json | prepublishOnly | npm run build && npm run test:run |
| entrypoint | package.json bin | index.js | dist/cli/index.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [src/core/services/mcp-watcher-incremental.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher-incremental.test.ts) | mcp signal |
| mcp | [src/core/services/mcp-watcher.integration.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher.integration.test.ts) | mcp signal |
| mcp | [src/core/services/mcp-watcher.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher.test.ts) | mcp signal |
| mcp | [src/core/services/mcp-watcher.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/clay-good__OpenLore/AGENTS.md) | agentRuntime signal |
| agentRuntime | [src/viewer/hooks/usePanZoom.js](../../../../sources/clay-good__OpenLore/src/viewer/hooks/usePanZoom.js) | agentRuntime signal |
| agentRuntime | [src/core/services/tool-dispatch.ts](../../../../sources/clay-good__OpenLore/src/core/services/tool-dispatch.ts) | agentRuntime signal |
| agentRuntime | [src/core/services/mcp-handlers/memory.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/memory.test.ts) | agentRuntime signal |
| entrypoints | [src/viewer/app/main.jsx](../../../../sources/clay-good__OpenLore/src/viewer/app/main.jsx) | entrypoints signal |
| entrypoints | [src/core/scip/fixtures/tiny-repo/src/index.ts](../../../../sources/clay-good__OpenLore/src/core/scip/fixtures/tiny-repo/src/index.ts) | entrypoints signal |
| entrypoints | [src/core/analyzer/iac/fixtures/pulumi/__main__.py](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/pulumi/__main__.py) | entrypoints signal |
| entrypoints | [src/core/analyzer/iac/fixtures/pulumi/main.go](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/pulumi/main.go) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [src/viewer/app/main.jsx](../../../../sources/clay-good__OpenLore/src/viewer/app/main.jsx)<br>[src/core/scip/fixtures/tiny-repo/src/index.ts](../../../../sources/clay-good__OpenLore/src/core/scip/fixtures/tiny-repo/src/index.ts)<br>[src/core/analyzer/iac/fixtures/pulumi/__main__.py](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/pulumi/__main__.py)<br>[src/core/analyzer/iac/fixtures/pulumi/main.go](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/pulumi/main.go)<br>[src/core/analyzer/iac/fixtures/cdk/main.go](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/cdk/main.go)<br>[examples/drift-demo/src/index.ts](../../../../sources/clay-good__OpenLore/examples/drift-demo/src/index.ts) |
| agentRuntime | 59 | [AGENTS.md](../../../../sources/clay-good__OpenLore/AGENTS.md)<br>[src/viewer/hooks/usePanZoom.js](../../../../sources/clay-good__OpenLore/src/viewer/hooks/usePanZoom.js)<br>[src/core/services/tool-dispatch.ts](../../../../sources/clay-good__OpenLore/src/core/services/tool-dispatch.ts)<br>[src/core/services/mcp-handlers/memory.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/memory.test.ts)<br>[src/core/services/mcp-handlers/memory.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/memory.ts)<br>[src/core/services/mcp-handlers/tool-contract.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/tool-contract.test.ts)<br>[src/core/services/mcp-handlers/tool-contract.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/tool-contract.ts)<br>[src/core/services/mcp-handlers/tool-guard.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/tool-guard.test.ts) |
| mcp | 87 | [src/core/services/mcp-watcher-incremental.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher-incremental.test.ts)<br>[src/core/services/mcp-watcher.integration.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher.integration.test.ts)<br>[src/core/services/mcp-watcher.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher.test.ts)<br>[src/core/services/mcp-watcher.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-watcher.ts)<br>[src/core/services/mcp-handlers/analysis.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/analysis.test.ts)<br>[src/core/services/mcp-handlers/analysis.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/analysis.ts)<br>[src/core/services/mcp-handlers/architecture.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/architecture.test.ts)<br>[src/core/services/mcp-handlers/architecture.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/architecture.ts) |
| retrieval | 64 | [src/viewer/utils/graph-helpers.js](../../../../sources/clay-good__OpenLore/src/viewer/utils/graph-helpers.js)<br>[src/viewer/utils/graph-helpers.test.ts](../../../../sources/clay-good__OpenLore/src/viewer/utils/graph-helpers.test.ts)<br>[src/viewer/app/index.html](../../../../sources/clay-good__OpenLore/src/viewer/app/index.html)<br>[src/types/index.ts](../../../../sources/clay-good__OpenLore/src/types/index.ts)<br>[src/core/verifier/index.ts](../../../../sources/clay-good__OpenLore/src/core/verifier/index.ts)<br>[src/core/test-generator/index.ts](../../../../sources/clay-good__OpenLore/src/core/test-generator/index.ts)<br>[src/core/test-generator/renderers/index.ts](../../../../sources/clay-good__OpenLore/src/core/test-generator/renderers/index.ts)<br>[src/core/services/index.ts](../../../../sources/clay-good__OpenLore/src/core/services/index.ts) |
| spec | 112 | [src/core/services/mcp-handlers/architecture.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/architecture.test.ts)<br>[src/core/services/mcp-handlers/architecture.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/architecture.ts)<br>[src/core/generator/adr-generator.test.ts](../../../../sources/clay-good__OpenLore/src/core/generator/adr-generator.test.ts)<br>[src/core/generator/adr-generator.ts](../../../../sources/clay-good__OpenLore/src/core/generator/adr-generator.ts)<br>[src/core/generator/spec-pipeline.test.ts](../../../../sources/clay-good__OpenLore/src/core/generator/spec-pipeline.test.ts)<br>[src/core/generator/spec-pipeline.ts](../../../../sources/clay-good__OpenLore/src/core/generator/spec-pipeline.ts)<br>[src/core/generator/stages/stage5-architecture.test.ts](../../../../sources/clay-good__OpenLore/src/core/generator/stages/stage5-architecture.test.ts)<br>[src/core/generator/stages/stage5-architecture.ts](../../../../sources/clay-good__OpenLore/src/core/generator/stages/stage5-architecture.ts) |
| eval | 311 | [src/honesty-contract.test.ts](../../../../sources/clay-good__OpenLore/src/honesty-contract.test.ts)<br>[src/viewer/utils/graph-helpers.test.ts](../../../../sources/clay-good__OpenLore/src/viewer/utils/graph-helpers.test.ts)<br>[src/utils/command-helpers.test.ts](../../../../sources/clay-good__OpenLore/src/utils/command-helpers.test.ts)<br>[src/utils/errors.test.ts](../../../../sources/clay-good__OpenLore/src/utils/errors.test.ts)<br>[src/utils/logger.test.ts](../../../../sources/clay-good__OpenLore/src/utils/logger.test.ts)<br>[src/utils/progress.test.ts](../../../../sources/clay-good__OpenLore/src/utils/progress.test.ts)<br>[src/utils/prompts.test.ts](../../../../sources/clay-good__OpenLore/src/utils/prompts.test.ts)<br>[src/utils/shutdown.test.ts](../../../../sources/clay-good__OpenLore/src/utils/shutdown.test.ts) |
| security | 18 | [src/core/services/secret-redaction.ts](../../../../sources/clay-good__OpenLore/src/core/services/secret-redaction.ts)<br>[src/core/services/security-capabilities.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/security-capabilities.test.ts)<br>[src/core/services/mcp-handlers/security.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/security.test.ts)<br>[src/core/services/mcp-handlers/tool-guard.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/tool-guard.test.ts)<br>[src/core/services/mcp-handlers/tool-guard.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/tool-guard.ts)<br>[src/cli/commands/audit.ts](../../../../sources/clay-good__OpenLore/src/cli/commands/audit.ts)<br>[src/api/audit.ts](../../../../sources/clay-good__OpenLore/src/api/audit.ts)<br>[schemas/security-capabilities.json](../../../../sources/clay-good__OpenLore/schemas/security-capabilities.json) |
| ci | 5 | [examples/ci/openlore-preflight.gitlab.yml](../../../../sources/clay-good__OpenLore/examples/ci/openlore-preflight.gitlab.yml)<br>[examples/ci/openlore-preflight.sh](../../../../sources/clay-good__OpenLore/examples/ci/openlore-preflight.sh)<br>[examples/ci/openlore-preflight.yml](../../../../sources/clay-good__OpenLore/examples/ci/openlore-preflight.yml)<br>[.github/workflows/ci.yml](../../../../sources/clay-good__OpenLore/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/clay-good__OpenLore/.github/workflows/release.yml) |
| container | 6 | [src/core/analyzer/iac/fixtures/kubernetes/app.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/kubernetes/app.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/Chart.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/Chart.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/values.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/values.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/templates/_helpers.tpl](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/templates/_helpers.tpl)<br>[src/core/analyzer/iac/fixtures/helm/mychart/templates/deployment.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/templates/deployment.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/charts/sub/Chart.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/charts/sub/Chart.yaml) |
| instruction | 2 | [AGENTS.md](../../../../sources/clay-good__OpenLore/AGENTS.md)<br>[CLAUDE.md](../../../../sources/clay-good__OpenLore/CLAUDE.md) |
| docs | 86 | [README.md](../../../../sources/clay-good__OpenLore/README.md)<br>[skills/openlore-orient/README.md](../../../../sources/clay-good__OpenLore/skills/openlore-orient/README.md)<br>[packaging/homebrew/README.md](../../../../sources/clay-good__OpenLore/packaging/homebrew/README.md)<br>[openspec/changes/README.md](../../../../sources/clay-good__OpenLore/openspec/changes/README.md)<br>[examples/spec-kit/README.md](../../../../sources/clay-good__OpenLore/examples/spec-kit/README.md)<br>[examples/pi/README.md](../../../../sources/clay-good__OpenLore/examples/pi/README.md)<br>[examples/openspec-cli/README.md](../../../../sources/clay-good__OpenLore/examples/openspec-cli/README.md)<br>[examples/openspec-analysis/README.md](../../../../sources/clay-good__OpenLore/examples/openspec-analysis/README.md) |
| config | 6 | [package.json](../../../../sources/clay-good__OpenLore/package.json)<br>[tsconfig.json](../../../../sources/clay-good__OpenLore/tsconfig.json)<br>[stubs/tree-sitter-cli-stub/package.json](../../../../sources/clay-good__OpenLore/stubs/tree-sitter-cli-stub/package.json)<br>[src/core/scip/fixtures/tiny-repo/package.json](../../../../sources/clay-good__OpenLore/src/core/scip/fixtures/tiny-repo/package.json)<br>[examples/drift-demo/package.json](../../../../sources/clay-good__OpenLore/examples/drift-demo/package.json)<br>[examples/drift-demo/tsconfig.json](../../../../sources/clay-good__OpenLore/examples/drift-demo/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 311 | [src/honesty-contract.test.ts](../../../../sources/clay-good__OpenLore/src/honesty-contract.test.ts)<br>[src/viewer/utils/graph-helpers.test.ts](../../../../sources/clay-good__OpenLore/src/viewer/utils/graph-helpers.test.ts)<br>[src/utils/command-helpers.test.ts](../../../../sources/clay-good__OpenLore/src/utils/command-helpers.test.ts)<br>[src/utils/errors.test.ts](../../../../sources/clay-good__OpenLore/src/utils/errors.test.ts)<br>[src/utils/logger.test.ts](../../../../sources/clay-good__OpenLore/src/utils/logger.test.ts)<br>[src/utils/progress.test.ts](../../../../sources/clay-good__OpenLore/src/utils/progress.test.ts) |
| CI workflow | 5 | [examples/ci/openlore-preflight.gitlab.yml](../../../../sources/clay-good__OpenLore/examples/ci/openlore-preflight.gitlab.yml)<br>[examples/ci/openlore-preflight.sh](../../../../sources/clay-good__OpenLore/examples/ci/openlore-preflight.sh)<br>[examples/ci/openlore-preflight.yml](../../../../sources/clay-good__OpenLore/examples/ci/openlore-preflight.yml)<br>[.github/workflows/ci.yml](../../../../sources/clay-good__OpenLore/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/clay-good__OpenLore/.github/workflows/release.yml) |
| 컨테이너/배포 | 6 | [src/core/analyzer/iac/fixtures/kubernetes/app.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/kubernetes/app.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/Chart.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/Chart.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/values.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/values.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/templates/_helpers.tpl](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/templates/_helpers.tpl)<br>[src/core/analyzer/iac/fixtures/helm/mychart/templates/deployment.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/templates/deployment.yaml)<br>[src/core/analyzer/iac/fixtures/helm/mychart/charts/sub/Chart.yaml](../../../../sources/clay-good__OpenLore/src/core/analyzer/iac/fixtures/helm/mychart/charts/sub/Chart.yaml) |
| 보안/정책 | 18 | [src/core/services/secret-redaction.ts](../../../../sources/clay-good__OpenLore/src/core/services/secret-redaction.ts)<br>[src/core/services/security-capabilities.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/security-capabilities.test.ts)<br>[src/core/services/mcp-handlers/security.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/security.test.ts)<br>[src/core/services/mcp-handlers/tool-guard.test.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/tool-guard.test.ts)<br>[src/core/services/mcp-handlers/tool-guard.ts](../../../../sources/clay-good__OpenLore/src/core/services/mcp-handlers/tool-guard.ts)<br>[src/cli/commands/audit.ts](../../../../sources/clay-good__OpenLore/src/cli/commands/audit.ts) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/clay-good__OpenLore/AGENTS.md)<br>[CLAUDE.md](../../../../sources/clay-good__OpenLore/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/core/services/mcp-watcher-incremental.test.ts`, `src/core/services/mcp-watcher.integration.test.ts`, `src/core/services/mcp-watcher.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/viewer/app/main.jsx`, `src/core/scip/fixtures/tiny-repo/src/index.ts`, `src/core/analyzer/iac/fixtures/pulumi/__main__.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `src/viewer/hooks/usePanZoom.js`, `src/core/services/tool-dispatch.ts`.
4. retrieval/memory/indexing 확인: `src/viewer/utils/graph-helpers.js`, `src/viewer/utils/graph-helpers.test.ts`, `src/viewer/app/index.html`.
5. test/eval 파일로 동작 검증: `src/honesty-contract.test.ts`, `src/viewer/utils/graph-helpers.test.ts`, `src/utils/command-helpers.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Deterministic persistent memory that empowers AI agents to accurately map their knowledge boundaries and eliminate guess. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
