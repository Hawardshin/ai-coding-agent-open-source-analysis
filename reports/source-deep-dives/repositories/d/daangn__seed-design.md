# daangn/seed-design 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The Seed Design System

## 요약

- 조사 단위: `sources/daangn__seed-design` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 5,561 files, 727 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=tools/figma-v3-migration/src/ui/main.tsx, tools/figma-mcp/src/ui/main.tsx, tools/figma-expose-variables/src/main.mts이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | daangn/seed-design |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 889 |
| Forks | 56 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/daangn__seed-design](../../../../sources/daangn__seed-design) |
| 기존 보고서 | [reports/korea-trending/repositories/daangn__seed-design.md](../../../korea-trending/repositories/daangn__seed-design.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 5561 / 727 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .agents, .changeset, .claude, .github, docs, ecosystem, examples, packages, patches, scripts, skills, tools, types |
| 상위 확장자 | .ts: 2036, .mjs: 1137, .tsx: 1089, .json: 370, .mdx: 213, .css: 199, .md: 187, .yaml: 91, .webp: 89, (none): 55, .jpg: 19, .yml: 19 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/react-headless | packages workspace | 53 |
| packages/codemod | packages workspace | 18 |
| packages/lynx-react | packages workspace | 13 |
| packages/stackflow | packages workspace | 12 |
| packages/design-token | packages workspace | 10 |
| packages/mcp | packages workspace | 8 |
| packages/react | packages workspace | 7 |
| docs | documentation surface | 5 |
| packages/rsbuild-plugin | packages workspace | 5 |
| packages/rsbuild-plugin-lynx-icon | packages workspace | 5 |
| packages/tailwind3-plugin | packages workspace | 5 |
| packages/utils | packages workspace | 5 |
| packages/vite-plugin | packages workspace | 5 |
| packages/webpack-plugin | packages workspace | 5 |
| packages/qvism-preset | packages workspace | 3 |
| packages/rootage | packages workspace | 3 |
| packages/tailwind4-theme | packages workspace | 3 |
| packages/cli | packages workspace | 2 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | ultra -r build |
| build | package.json | packages:build | ultra -r --build --filter 'packages/*' build |
| build | package.json | ecosystem:build | ultra -r --build --filter 'ecosystem/*' build |
| quality | package.json | lint:publish | bun --filter '*' lint:publish |
| quality | package.json | lint:knip | knip |
| build | package.json | release | bun packages:build && bun changeset publish |
| utility | package.json | version | changeset version && bun install --no-immutable |
| quality | package.json | format:all | bun biome format --fix |
| test | package.json | test:all | bun test:unit && bun test:lynx-react |
| test | package.json | test:unit | bun test --path-ignore-patterns='packages/lynx-react/**' |
| test | package.json | test:lynx-react | bun run --filter '@seed-design/lynx-react' typecheck && bun run --filter '@seed-design/lynx-react' test |
| utility | package.json | generate:all | bun rootage:generate && bun qvism:generate && bun docs:generate |
| utility | package.json | figma:sync | bun figma-extractor --config=scripts/.config/figma-extractor.config.ts scripts/data variables && bun run ./scripts/figma-to-rootage.ts |
| container | package.json | images:convert | bun scripts/convert-images-to-webp.ts |
| container | package.json | images:preview | bun scripts/convert-images-to-webp.ts --dry-run |
| utility | package.json | docs:generate | bun --filter @seed-design/docs generate:all |
| serve-dev | package.json | docs:dev | bun --filter @seed-design/docs dev |
| build | package.json | docs:build | bun --filter @seed-design/docs build |
| test | package.json | docs:test | bun test docs |
| test | package.json | docs:test:watch | bun test --watch docs |
| utility | package.json | storybook | bun --filter @seed-design/docs storybook |
| build | package.json | storybook:build | bun --filter @seed-design/docs build-storybook |
| build | package.json | rootage:build | ultra -r --build rootage:build |
| build | package.json | rootage:generate | ultra -r --rebuild rootage:generate |
| serve-dev | package.json | rootage:generate:watch | watchlist packages/rootage/artifacts -- bun rootage:generate |
| build | package.json | rootage:validate | bun rootage:build && bun ./ecosystem/rootage/cli/bin/index.mjs validate |
| test | package.json | rootage:test | bun rootage:validate && bun test ecosystem/rootage |
| test | package.json | rootage:test:watch | bun test --watch ecosystem/rootage |
| build | package.json | qvism:build | ultra -r --build qvism:build |
| build | package.json | qvism:generate | bun --filter @seed-design/qvism-preset build && bun --filter @seed-design/lynx-qvism-preset build && bun --filter @seed-design/css qvism:generate && bun --filter @seed-design/lynx-css qvism:generate |
| serve-dev | package.json | qvism:generate:watch | watchlist ecosystem/qvism/core ecosystem/qvism/cli packages/qvism-preset packages/lynx-qvism-preset -- bun qvism:generate |
| serve-dev | package.json | cli:watch | watchlist packages/cli -- bun --filter @seed-design/cli dev |
| build | package.json | headless:build | ultra -r --filter 'packages/react-headless/*' build |
| test | package.json | headless:test | bun test packages/react-headless |
| test | package.json | headless:test:watch | bun test --watch packages/react-headless |
| test | package.json | react:test | bun test packages/react |
| test | package.json | react:test:watch | bun test --watch packages/react |
| utility | package.json | clean:lib | bun --filter '*' clean |
| quality | package.json | clean:modules | find . -name 'node_modules' -type d -prune -exec rm -rf '{}' + |
| utility | package.json | generate:codemod-docs | bun scripts/generate-codemod-docs.ts |


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
| entrypoints | [tools/figma-v3-migration/src/ui/main.tsx](../../../../sources/daangn__seed-design/tools/figma-v3-migration/src/ui/main.tsx) | entrypoints signal |
| entrypoints | [tools/figma-mcp/src/ui/main.tsx](../../../../sources/daangn__seed-design/tools/figma-mcp/src/ui/main.tsx) | entrypoints signal |
| entrypoints | [tools/figma-expose-variables/src/main.mts](../../../../sources/daangn__seed-design/tools/figma-expose-variables/src/main.mts) | entrypoints signal |
| entrypoints | [tools/figma-codegen/src/main.ts](../../../../sources/daangn__seed-design/tools/figma-codegen/src/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__seed-design/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__seed-design/tsconfig.json) | config signal |
| config | [tools/figma-v3-migration/package.json](../../../../sources/daangn__seed-design/tools/figma-v3-migration/package.json) | config signal |
| config | [tools/figma-v3-migration/tsconfig.json](../../../../sources/daangn__seed-design/tools/figma-v3-migration/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/daangn__seed-design/README.md) | docs signal |
| docs | [tools/figma-v3-migration/README.md](../../../../sources/daangn__seed-design/tools/figma-v3-migration/README.md) | docs signal |
| docs | [tools/figma-mcp/README.md](../../../../sources/daangn__seed-design/tools/figma-mcp/README.md) | docs signal |
| docs | [tools/figma-expose-variables/README.md](../../../../sources/daangn__seed-design/tools/figma-expose-variables/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 71 | [tools/figma-v3-migration/src/ui/main.tsx](../../../../sources/daangn__seed-design/tools/figma-v3-migration/src/ui/main.tsx)<br>[tools/figma-mcp/src/ui/main.tsx](../../../../sources/daangn__seed-design/tools/figma-mcp/src/ui/main.tsx)<br>[tools/figma-expose-variables/src/main.mts](../../../../sources/daangn__seed-design/tools/figma-expose-variables/src/main.mts)<br>[tools/figma-codegen/src/main.ts](../../../../sources/daangn__seed-design/tools/figma-codegen/src/main.ts)<br>[packages/webpack-plugin/src/index.ts](../../../../sources/daangn__seed-design/packages/webpack-plugin/src/index.ts)<br>[packages/vite-plugin/src/index.ts](../../../../sources/daangn__seed-design/packages/vite-plugin/src/index.ts)<br>[packages/utils/dom-utils/src/index.ts](../../../../sources/daangn__seed-design/packages/utils/dom-utils/src/index.ts)<br>[packages/tailwind3-plugin/src/index.ts](../../../../sources/daangn__seed-design/packages/tailwind3-plugin/src/index.ts) |
| agentRuntime | 1254 | [AGENTS.md](../../../../sources/daangn__seed-design/AGENTS.md)<br>[tools/AGENTS.md](../../../../sources/daangn__seed-design/tools/AGENTS.md)<br>[tools/figma-v3-migration/.env.example](../../../../sources/daangn__seed-design/tools/figma-v3-migration/.env.example)<br>[tools/figma-v3-migration/.gitignore](../../../../sources/daangn__seed-design/tools/figma-v3-migration/.gitignore)<br>[tools/figma-v3-migration/figma-extractor.config.ts](../../../../sources/daangn__seed-design/tools/figma-v3-migration/figma-extractor.config.ts)<br>[tools/figma-v3-migration/index.html](../../../../sources/daangn__seed-design/tools/figma-v3-migration/index.html)<br>[tools/figma-v3-migration/manifest.json](../../../../sources/daangn__seed-design/tools/figma-v3-migration/manifest.json)<br>[tools/figma-v3-migration/package.json](../../../../sources/daangn__seed-design/tools/figma-v3-migration/package.json) |
| mcp | 75 | [.mcp.json](../../../../sources/daangn__seed-design/.mcp.json)<br>[tools/figma-mcp/.env.example](../../../../sources/daangn__seed-design/tools/figma-mcp/.env.example)<br>[tools/figma-mcp/.gitignore](../../../../sources/daangn__seed-design/tools/figma-mcp/.gitignore)<br>[tools/figma-mcp/index.html](../../../../sources/daangn__seed-design/tools/figma-mcp/index.html)<br>[tools/figma-mcp/manifest.json](../../../../sources/daangn__seed-design/tools/figma-mcp/manifest.json)<br>[tools/figma-mcp/package.json](../../../../sources/daangn__seed-design/tools/figma-mcp/package.json)<br>[tools/figma-mcp/README.md](../../../../sources/daangn__seed-design/tools/figma-mcp/README.md)<br>[tools/figma-mcp/seed-design.json](../../../../sources/daangn__seed-design/tools/figma-mcp/seed-design.json) |
| retrieval | 327 | [types/bun-jest-dom/index.d.ts](../../../../sources/daangn__seed-design/types/bun-jest-dom/index.d.ts)<br>[tools/figma-v3-migration/index.html](../../../../sources/daangn__seed-design/tools/figma-v3-migration/index.html)<br>[tools/figma-v3-migration/src/ui/typography-section/index.tsx](../../../../sources/daangn__seed-design/tools/figma-v3-migration/src/ui/typography-section/index.tsx)<br>[tools/figma-v3-migration/src/ui/component-section/index.tsx](../../../../sources/daangn__seed-design/tools/figma-v3-migration/src/ui/component-section/index.tsx)<br>[tools/figma-v3-migration/src/ui/color-section/index.tsx](../../../../sources/daangn__seed-design/tools/figma-v3-migration/src/ui/color-section/index.tsx)<br>[tools/figma-v3-migration/src/main/index.ts](../../../../sources/daangn__seed-design/tools/figma-v3-migration/src/main/index.ts)<br>[tools/figma-v3-migration/src/main/mapping/index.ts](../../../../sources/daangn__seed-design/tools/figma-v3-migration/src/main/mapping/index.ts)<br>[tools/figma-v3-migration/src/main/data/__generated__/v3-styles/index.d.ts](../../../../sources/daangn__seed-design/tools/figma-v3-migration/src/main/data/__generated__/v3-styles/index.d.ts) |
| spec | 239 | [tools/figma-v3-migration/seed-design.json](../../../../sources/daangn__seed-design/tools/figma-v3-migration/seed-design.json)<br>[tools/figma-v3-migration/src/ui/common/design-system/ui/action-button.tsx](../../../../sources/daangn__seed-design/tools/figma-v3-migration/src/ui/common/design-system/ui/action-button.tsx)<br>[tools/figma-v3-migration/src/ui/common/design-system/ui/callout.tsx](../../../../sources/daangn__seed-design/tools/figma-v3-migration/src/ui/common/design-system/ui/callout.tsx)<br>[tools/figma-v3-migration/src/ui/common/design-system/ui/inline-banner.tsx](../../../../sources/daangn__seed-design/tools/figma-v3-migration/src/ui/common/design-system/ui/inline-banner.tsx)<br>[tools/figma-v3-migration/src/ui/common/design-system/ui/loading-indicator.tsx](../../../../sources/daangn__seed-design/tools/figma-v3-migration/src/ui/common/design-system/ui/loading-indicator.tsx)<br>[tools/figma-v3-migration/src/ui/common/design-system/ui/progress-circle.tsx](../../../../sources/daangn__seed-design/tools/figma-v3-migration/src/ui/common/design-system/ui/progress-circle.tsx)<br>[tools/figma-v3-migration/src/ui/common/design-system/ui/switch.tsx](../../../../sources/daangn__seed-design/tools/figma-v3-migration/src/ui/common/design-system/ui/switch.tsx)<br>[tools/figma-v3-migration/src/ui/common/design-system/ui/tabs.tsx](../../../../sources/daangn__seed-design/tools/figma-v3-migration/src/ui/common/design-system/ui/tabs.tsx) |
| eval | 130 | [tools/figma-spec-widget/.gitignore](../../../../sources/daangn__seed-design/tools/figma-spec-widget/.gitignore)<br>[tools/figma-spec-widget/build.mjs](../../../../sources/daangn__seed-design/tools/figma-spec-widget/build.mjs)<br>[tools/figma-spec-widget/dev.mjs](../../../../sources/daangn__seed-design/tools/figma-spec-widget/dev.mjs)<br>[tools/figma-spec-widget/manifest.json](../../../../sources/daangn__seed-design/tools/figma-spec-widget/manifest.json)<br>[tools/figma-spec-widget/package.json](../../../../sources/daangn__seed-design/tools/figma-spec-widget/package.json)<br>[tools/figma-spec-widget/widget-src/code.tsx](../../../../sources/daangn__seed-design/tools/figma-spec-widget/widget-src/code.tsx)<br>[tools/figma-spec-widget/widget-src/stringify.ts](../../../../sources/daangn__seed-design/tools/figma-spec-widget/widget-src/stringify.ts)<br>[tools/figma-spec-widget/widget-src/tsconfig.json](../../../../sources/daangn__seed-design/tools/figma-spec-widget/widget-src/tsconfig.json) |
| security | 3 | [skills/create-component/references/sticking-policy.md](../../../../sources/daangn__seed-design/skills/create-component/references/sticking-policy.md)<br>[.claude/hooks/generated-files-guard.sh](../../../../sources/daangn__seed-design/.claude/hooks/generated-files-guard.sh)<br>[.claude/hooks/generated-files-guard.ts](../../../../sources/daangn__seed-design/.claude/hooks/generated-files-guard.ts) |
| ci | 18 | [.github/workflows/chromatic.yml](../../../../sources/daangn__seed-design/.github/workflows/chromatic.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/daangn__seed-design/.github/workflows/claude-code-review.yml)<br>[.github/workflows/cli-test.yml](../../../../sources/daangn__seed-design/.github/workflows/cli-test.yml)<br>[.github/workflows/continuous-releases.yml](../../../../sources/daangn__seed-design/.github/workflows/continuous-releases.yml)<br>[.github/workflows/deploy-seed-design-docs-alpha-pages.yml](../../../../sources/daangn__seed-design/.github/workflows/deploy-seed-design-docs-alpha-pages.yml)<br>[.github/workflows/deploy-seed-design-docs-prod-pages.yml](../../../../sources/daangn__seed-design/.github/workflows/deploy-seed-design-docs-prod-pages.yml)<br>[.github/workflows/deploy-seed-design-stackflow-spa-alpha-pages.yml](../../../../sources/daangn__seed-design/.github/workflows/deploy-seed-design-stackflow-spa-alpha-pages.yml)<br>[.github/workflows/deploy-seed-design-stackflow-spa-prod-pages.yml](../../../../sources/daangn__seed-design/.github/workflows/deploy-seed-design-stackflow-spa-prod-pages.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 28 | [AGENTS.md](../../../../sources/daangn__seed-design/AGENTS.md)<br>[CLAUDE.md](../../../../sources/daangn__seed-design/CLAUDE.md)<br>[tools/AGENTS.md](../../../../sources/daangn__seed-design/tools/AGENTS.md)<br>[tools/figma-codegen/AGENTS.md](../../../../sources/daangn__seed-design/tools/figma-codegen/AGENTS.md)<br>[skills/AGENTS.md](../../../../sources/daangn__seed-design/skills/AGENTS.md)<br>[skills/create-component/references/AGENTS.md](../../../../sources/daangn__seed-design/skills/create-component/references/AGENTS.md)<br>[packages/AGENTS.md](../../../../sources/daangn__seed-design/packages/AGENTS.md)<br>[packages/rootage/AGENTS.md](../../../../sources/daangn__seed-design/packages/rootage/AGENTS.md) |
| docs | 1348 | [README.md](../../../../sources/daangn__seed-design/README.md)<br>[tools/figma-v3-migration/README.md](../../../../sources/daangn__seed-design/tools/figma-v3-migration/README.md)<br>[tools/figma-mcp/README.md](../../../../sources/daangn__seed-design/tools/figma-mcp/README.md)<br>[tools/figma-expose-variables/README.md](../../../../sources/daangn__seed-design/tools/figma-expose-variables/README.md)<br>[tools/figma-codegen/README.md](../../../../sources/daangn__seed-design/tools/figma-codegen/README.md)<br>[packages/webpack-plugin/README.md](../../../../sources/daangn__seed-design/packages/webpack-plugin/README.md)<br>[packages/vite-plugin/README.md](../../../../sources/daangn__seed-design/packages/vite-plugin/README.md)<br>[packages/utils/dom-utils/README.md](../../../../sources/daangn__seed-design/packages/utils/dom-utils/README.md) |
| config | 141 | [package.json](../../../../sources/daangn__seed-design/package.json)<br>[tsconfig.json](../../../../sources/daangn__seed-design/tsconfig.json)<br>[tools/figma-v3-migration/package.json](../../../../sources/daangn__seed-design/tools/figma-v3-migration/package.json)<br>[tools/figma-v3-migration/tsconfig.json](../../../../sources/daangn__seed-design/tools/figma-v3-migration/tsconfig.json)<br>[tools/figma-spec-widget/package.json](../../../../sources/daangn__seed-design/tools/figma-spec-widget/package.json)<br>[tools/figma-spec-widget/widget-src/tsconfig.json](../../../../sources/daangn__seed-design/tools/figma-spec-widget/widget-src/tsconfig.json)<br>[tools/figma-mcp/package.json](../../../../sources/daangn__seed-design/tools/figma-mcp/package.json)<br>[tools/figma-mcp/tsconfig.json](../../../../sources/daangn__seed-design/tools/figma-mcp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 130 | [tools/figma-spec-widget/.gitignore](../../../../sources/daangn__seed-design/tools/figma-spec-widget/.gitignore)<br>[tools/figma-spec-widget/build.mjs](../../../../sources/daangn__seed-design/tools/figma-spec-widget/build.mjs)<br>[tools/figma-spec-widget/dev.mjs](../../../../sources/daangn__seed-design/tools/figma-spec-widget/dev.mjs)<br>[tools/figma-spec-widget/manifest.json](../../../../sources/daangn__seed-design/tools/figma-spec-widget/manifest.json)<br>[tools/figma-spec-widget/package.json](../../../../sources/daangn__seed-design/tools/figma-spec-widget/package.json)<br>[tools/figma-spec-widget/widget-src/code.tsx](../../../../sources/daangn__seed-design/tools/figma-spec-widget/widget-src/code.tsx) |
| CI workflow | 18 | [.github/workflows/chromatic.yml](../../../../sources/daangn__seed-design/.github/workflows/chromatic.yml)<br>[.github/workflows/claude-code-review.yml](../../../../sources/daangn__seed-design/.github/workflows/claude-code-review.yml)<br>[.github/workflows/cli-test.yml](../../../../sources/daangn__seed-design/.github/workflows/cli-test.yml)<br>[.github/workflows/continuous-releases.yml](../../../../sources/daangn__seed-design/.github/workflows/continuous-releases.yml)<br>[.github/workflows/deploy-seed-design-docs-alpha-pages.yml](../../../../sources/daangn__seed-design/.github/workflows/deploy-seed-design-docs-alpha-pages.yml)<br>[.github/workflows/deploy-seed-design-docs-prod-pages.yml](../../../../sources/daangn__seed-design/.github/workflows/deploy-seed-design-docs-prod-pages.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 3 | [skills/create-component/references/sticking-policy.md](../../../../sources/daangn__seed-design/skills/create-component/references/sticking-policy.md)<br>[.claude/hooks/generated-files-guard.sh](../../../../sources/daangn__seed-design/.claude/hooks/generated-files-guard.sh)<br>[.claude/hooks/generated-files-guard.ts](../../../../sources/daangn__seed-design/.claude/hooks/generated-files-guard.ts) |
| 에이전트 지시문 | 28 | [AGENTS.md](../../../../sources/daangn__seed-design/AGENTS.md)<br>[CLAUDE.md](../../../../sources/daangn__seed-design/CLAUDE.md)<br>[tools/AGENTS.md](../../../../sources/daangn__seed-design/tools/AGENTS.md)<br>[tools/figma-codegen/AGENTS.md](../../../../sources/daangn__seed-design/tools/figma-codegen/AGENTS.md)<br>[skills/AGENTS.md](../../../../sources/daangn__seed-design/skills/AGENTS.md)<br>[skills/create-component/references/AGENTS.md](../../../../sources/daangn__seed-design/skills/create-component/references/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/figma-v3-migration/src/ui/main.tsx`, `tools/figma-mcp/src/ui/main.tsx`, `tools/figma-expose-variables/src/main.mts`.
2. entrypoint를 따라 실행 흐름 확인: `tools/figma-v3-migration/src/ui/main.tsx`, `tools/figma-mcp/src/ui/main.tsx`, `tools/figma-expose-variables/src/main.mts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/AGENTS.md`, `tools/figma-v3-migration/.env.example`.
4. retrieval/memory/indexing 확인: `types/bun-jest-dom/index.d.ts`, `tools/figma-v3-migration/index.html`, `tools/figma-v3-migration/src/ui/typography-section/index.tsx`.
5. test/eval 파일로 동작 검증: `tools/figma-spec-widget/.gitignore`, `tools/figma-spec-widget/build.mjs`, `tools/figma-spec-widget/dev.mjs`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 The Seed Design System. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
