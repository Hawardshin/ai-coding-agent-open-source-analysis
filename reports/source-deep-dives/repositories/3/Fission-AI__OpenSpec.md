# Fission-AI/OpenSpec 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 842 files, 462 directories.

## 요약

- 조사 단위: `sources/Fission-AI__OpenSpec` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 842 files, 462 directories, depth score 109, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, test/AGENTS.md, test/core/workspace/skills.test.ts이고, 의존성 단서는 commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Fission-AI/OpenSpec |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | TypeScript |
| Stars | 55359 |
| Forks | 3873 |
| License | MIT License |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/Fission-AI__OpenSpec](../../../../sources/Fission-AI__OpenSpec) |
| 기존 보고서 | [reports/clone-structures/Fission-AI__OpenSpec.md](../../../clone-structures/Fission-AI__OpenSpec.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 842 / 462 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .changeset, .devcontainer, .github, assets, bin, docs, openspec, schemas, scripts, src, test |
| 상위 확장자 | .md: 517, .ts: 272, .yaml: 29, .json: 5, .js: 4, (none): 4, .png: 2, .sh: 2, .svg: 2, .yml: 2, .lock: 1, .mjs: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 52 |
| docs | documentation surface | 14 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| openspec | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | lint | eslint src/ |
| build | package.json | build | node build.js |
| serve-dev | package.json | dev | tsc --watch |
| test | package.json | dev:cli | pnpm build && node bin/openspec.js |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | test:ui | vitest --ui |
| test | package.json | test:coverage | vitest --coverage |
| test | package.json | test:postinstall | node scripts/postinstall.js |
| build | package.json | prepare | pnpm run build |
| build | package.json | prepublishOnly | pnpm run build |
| utility | package.json | postinstall | node scripts/postinstall.js |
| quality | package.json | check:pack-version | node scripts/pack-version-check.mjs |
| build | package.json | release | pnpm run release:ci |
| build | package.json | release:ci | pnpm run check:pack-version && pnpm exec changeset publish |
| utility | package.json | changeset | changeset |
| entrypoint | package.json bin | openspec.js | ./bin/openspec.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | commander |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/Fission-AI__OpenSpec/AGENTS.md) | agentRuntime signal |
| agentRuntime | [test/AGENTS.md](../../../../sources/Fission-AI__OpenSpec/test/AGENTS.md) | agentRuntime signal |
| agentRuntime | [test/core/workspace/skills.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/workspace/skills.test.ts) | agentRuntime signal |
| agentRuntime | [test/core/templates/skill-templates-parity.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/templates/skill-templates-parity.test.ts) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/Fission-AI__OpenSpec/src/index.ts) | entrypoints signal |
| entrypoints | [bin/openspec.js](../../../../sources/Fission-AI__OpenSpec/bin/openspec.js) | entrypoints signal |
| config | [package.json](../../../../sources/Fission-AI__OpenSpec/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/Fission-AI__OpenSpec/tsconfig.json) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/Fission-AI__OpenSpec/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/README.md](../../../../sources/Fission-AI__OpenSpec/.github/workflows/README.md) | ci support |
| eval | [test/utils/change-metadata.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/change-metadata.test.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.ts](../../../../sources/Fission-AI__OpenSpec/src/index.ts)<br>[bin/openspec.js](../../../../sources/Fission-AI__OpenSpec/bin/openspec.js) |
| agentRuntime | 97 | [AGENTS.md](../../../../sources/Fission-AI__OpenSpec/AGENTS.md)<br>[test/AGENTS.md](../../../../sources/Fission-AI__OpenSpec/test/AGENTS.md)<br>[test/core/workspace/skills.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/workspace/skills.test.ts)<br>[test/core/templates/skill-templates-parity.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/templates/skill-templates-parity.test.ts)<br>[test/core/shared/skill-generation.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/shared/skill-generation.test.ts)<br>[test/core/shared/tool-detection.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/shared/tool-detection.test.ts)<br>[test/core/context-store/foundation.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/context-store/foundation.test.ts)<br>[test/core/context-store/registry.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/context-store/registry.test.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 39 | [test/telemetry/index.test.ts](../../../../sources/Fission-AI__OpenSpec/test/telemetry/index.test.ts)<br>[test/core/artifact-graph/graph.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/artifact-graph/graph.test.ts)<br>[test/core/artifact-graph/instruction-loader.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/artifact-graph/instruction-loader.test.ts)<br>[test/core/artifact-graph/outputs.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/artifact-graph/outputs.test.ts)<br>[test/core/artifact-graph/resolver.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/artifact-graph/resolver.test.ts)<br>[test/core/artifact-graph/schema.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/artifact-graph/schema.test.ts)<br>[test/core/artifact-graph/state.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/artifact-graph/state.test.ts)<br>[test/core/artifact-graph/workflow.integration.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/artifact-graph/workflow.integration.test.ts) |
| spec | 250 | [test/fixtures/tmp-init/openspec/specs/alpha/spec.md](../../../../sources/Fission-AI__OpenSpec/test/fixtures/tmp-init/openspec/specs/alpha/spec.md)<br>[test/fixtures/tmp-init/openspec/changes/c1/specs/alpha/spec.md](../../../../sources/Fission-AI__OpenSpec/test/fixtures/tmp-init/openspec/changes/c1/specs/alpha/spec.md)<br>[test/core/parsers/requirement-blocks.test.ts](../../../../sources/Fission-AI__OpenSpec/test/core/parsers/requirement-blocks.test.ts)<br>[test/commands/spec.interactive-show.test.ts](../../../../sources/Fission-AI__OpenSpec/test/commands/spec.interactive-show.test.ts)<br>[test/commands/spec.interactive-validate.test.ts](../../../../sources/Fission-AI__OpenSpec/test/commands/spec.interactive-validate.test.ts)<br>[test/commands/spec.test.ts](../../../../sources/Fission-AI__OpenSpec/test/commands/spec.test.ts)<br>[src/core/schemas/spec.schema.ts](../../../../sources/Fission-AI__OpenSpec/src/core/schemas/spec.schema.ts)<br>[src/core/parsers/requirement-blocks.ts](../../../../sources/Fission-AI__OpenSpec/src/core/parsers/requirement-blocks.ts) |
| eval | 291 | [test/AGENTS.md](../../../../sources/Fission-AI__OpenSpec/test/AGENTS.md)<br>[test/utils/change-metadata.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/change-metadata.test.ts)<br>[test/utils/change-utils.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/change-utils.test.ts)<br>[test/utils/command-references.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/command-references.test.ts)<br>[test/utils/file-system.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/file-system.test.ts)<br>[test/utils/interactive.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/interactive.test.ts)<br>[test/utils/marker-updates.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/marker-updates.test.ts)<br>[test/utils/shell-detection.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/shell-detection.test.ts) |
| security | 1 | [src/core/change-status-policy.ts](../../../../sources/Fission-AI__OpenSpec/src/core/change-status-policy.ts) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/Fission-AI__OpenSpec/.github/workflows/ci.yml)<br>[.github/workflows/README.md](../../../../sources/Fission-AI__OpenSpec/.github/workflows/README.md)<br>[.github/workflows/release-prepare.yml](../../../../sources/Fission-AI__OpenSpec/.github/workflows/release-prepare.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/Fission-AI__OpenSpec/AGENTS.md)<br>[test/AGENTS.md](../../../../sources/Fission-AI__OpenSpec/test/AGENTS.md) |
| docs | 24 | [README_OLD.md](../../../../sources/Fission-AI__OpenSpec/README_OLD.md)<br>[README.md](../../../../sources/Fission-AI__OpenSpec/README.md)<br>[scripts/README.md](../../../../sources/Fission-AI__OpenSpec/scripts/README.md)<br>[openspec/initiatives/context-store-and-initiatives/README.md](../../../../sources/Fission-AI__OpenSpec/openspec/initiatives/context-store-and-initiatives/README.md)<br>[openspec/changes/workspace-reimplementation-roadmap/README.md](../../../../sources/Fission-AI__OpenSpec/openspec/changes/workspace-reimplementation-roadmap/README.md)<br>[openspec/changes/archive/2026-04-23-add-kimi-cli-skills-only-support/README.md](../../../../sources/Fission-AI__OpenSpec/openspec/changes/archive/2026-04-23-add-kimi-cli-skills-only-support/README.md)<br>[openspec/changes/archive/2026-01-30-opencode-command-references/README.md](../../../../sources/Fission-AI__OpenSpec/openspec/changes/archive/2026-01-30-opencode-command-references/README.md)<br>[openspec/changes/archive/2025-08-11-add-complexity-guidelines/specs/openspec-docs/README.md](../../../../sources/Fission-AI__OpenSpec/openspec/changes/archive/2025-08-11-add-complexity-guidelines/specs/openspec-docs/README.md) |
| config | 2 | [package.json](../../../../sources/Fission-AI__OpenSpec/package.json)<br>[tsconfig.json](../../../../sources/Fission-AI__OpenSpec/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 291 | [test/AGENTS.md](../../../../sources/Fission-AI__OpenSpec/test/AGENTS.md)<br>[test/utils/change-metadata.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/change-metadata.test.ts)<br>[test/utils/change-utils.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/change-utils.test.ts)<br>[test/utils/command-references.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/command-references.test.ts)<br>[test/utils/file-system.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/file-system.test.ts)<br>[test/utils/interactive.test.ts](../../../../sources/Fission-AI__OpenSpec/test/utils/interactive.test.ts) |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/Fission-AI__OpenSpec/.github/workflows/ci.yml)<br>[.github/workflows/README.md](../../../../sources/Fission-AI__OpenSpec/.github/workflows/README.md)<br>[.github/workflows/release-prepare.yml](../../../../sources/Fission-AI__OpenSpec/.github/workflows/release-prepare.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [src/core/change-status-policy.ts](../../../../sources/Fission-AI__OpenSpec/src/core/change-status-policy.ts) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/Fission-AI__OpenSpec/AGENTS.md)<br>[test/AGENTS.md](../../../../sources/Fission-AI__OpenSpec/test/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `test/AGENTS.md`, `test/core/workspace/skills.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`, `bin/openspec.js`.
3. agent/tool runtime 매핑: `AGENTS.md`, `test/AGENTS.md`, `test/core/workspace/skills.test.ts`.
4. retrieval/memory/indexing 확인: `test/telemetry/index.test.ts`, `test/core/artifact-graph/graph.test.ts`, `test/core/artifact-graph/instruction-loader.test.ts`.
5. test/eval 파일로 동작 검증: `test/AGENTS.md`, `test/utils/change-metadata.test.ts`, `test/utils/change-utils.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 842 files, 462 directories.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, tests이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
