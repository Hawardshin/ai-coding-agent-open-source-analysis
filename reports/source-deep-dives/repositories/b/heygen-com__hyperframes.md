# heygen-com/hyperframes 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Write HTML. Render video. Built for agents.

## 요약

- 조사 단위: `sources/heygen-com__hyperframes` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,636 files, 792 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/guides/mcp.mdx이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | heygen-com/hyperframes |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 28446 |
| Forks | 2692 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/heygen-com__hyperframes](../../../../sources/heygen-com__hyperframes) |
| 기존 보고서 | [reports/global-trending/repositories/heygen-com__hyperframes.md](../../../global-trending/repositories/heygen-com__hyperframes.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3636 / 792 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .claude, .claude-plugin, .codex-plugin, .cursor-plugin, .github, assets, docs, examples, packages, registry, releases, scripts, skills, updates |
| 상위 확장자 | .ts: 1100, .md: 768, .html: 466, .json: 308, .mdx: 175, .png: 155, .tsx: 126, .mjs: 102, .mp3: 76, .mp4: 61, .woff2: 54, .jpg: 45 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/cli | packages workspace | 42 |
| packages/producer | packages workspace | 39 |
| packages/studio | packages workspace | 14 |
| packages/core | packages workspace | 11 |
| docs | documentation surface | 7 |
| packages/sdk | packages workspace | 5 |
| packages/shader-transitions | packages workspace | 5 |
| packages/engine | packages workspace | 4 |
| packages/gcp-cloud-run | packages workspace | 4 |
| packages/player | packages workspace | 4 |
| packages/sdk-playground | packages workspace | 4 |
| packages/aws-lambda | packages workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| examples/k8s-jobs | examples workspace | 1 |
| packages | source boundary | 1 |
| registry | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | bun run studio |
| build | package.json | build | bun run --filter @hyperframes/core build && bun run --filter '@hyperframes/{core,engine,producer,player,studio,shader-transitions,aws-lambda,gcp-cloud-run,sdk}' build && bun run --filter @hyperframes/cli build |
| build | package.json | build:producer | bun run --filter @hyperframes/producer build |
| serve-dev | package.json | studio | bun run --filter @hyperframes/studio dev |
| build | package.json | build:hyperframes-runtime | bun run --filter @hyperframes/core build:hyperframes-runtime |
| build | package.json | build:hyperframes-runtime:modular | bun run --filter @hyperframes/core build:hyperframes-runtime:modular |
| utility | package.json | verify:packed-manifests | node scripts/verify-packed-manifests.mjs |
| build | package.json | validate:release-channel | node scripts/validate-release-channel.mjs |
| utility | package.json | set-version | tsx scripts/set-version.ts |
| build | package.json | release:prepare | tsx scripts/release-prepare.ts |
| utility | package.json | changelog:draft | tsx scripts/draft-changelog.ts |
| utility | package.json | changelog:weekly | tsx scripts/changelog-weekly.ts |
| utility | package.json | sync-schemas | tsx scripts/sync-schemas.ts |
| quality | package.json | sync-schemas:check | tsx scripts/sync-schemas.ts --check |
| quality | package.json | lint | oxlint . && tsx scripts/lint-skills.ts |
| quality | package.json | lint:skills | tsx scripts/lint-skills.ts |
| quality | package.json | lint:fix | oxlint --fix . |
| quality | package.json | format | oxfmt . |
| test | package.json | test | bun run --filter '*' test |
| utility | package.json | player:perf | bun run --filter @hyperframes/player perf |
| quality | package.json | format:check | oxfmt --check . |
| utility | package.json | knip | knip |
| test | package.json | test:scripts | node --import tsx --test scripts/validate-release-channel.test.mjs scripts/draft-changelog.test.ts scripts/set-version.test.ts scripts/release-prepare.test.ts scripts/cli-options.test.ts scripts/changelog-weekly.test.ts |
| utility | package.json | generate:previews | tsx scripts/generate-template-previews.ts |
| utility | package.json | generate:catalog-previews | tsx scripts/generate-catalog-previews.ts |
| container | package.json | upload:docs-images | bash scripts/upload-docs-images.sh |
| test | package.json | prepare | test -d .git && lefthook install \|\| true |


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
| mcp | [docs/guides/mcp.mdx](../../../../sources/heygen-com__hyperframes/docs/guides/mcp.mdx) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/heygen-com__hyperframes/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/website-to-video/SKILL.md](../../../../sources/heygen-com__hyperframes/skills/website-to-video/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/website-to-video/scripts/w2h-verify.mjs](../../../../sources/heygen-com__hyperframes/skills/website-to-video/scripts/w2h-verify.mjs) | agentRuntime signal |
| agentRuntime | [skills/website-to-video/references/beat-builder-guide.md](../../../../sources/heygen-com__hyperframes/skills/website-to-video/references/beat-builder-guide.md) | agentRuntime signal |
| entrypoints | [skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/remotion-src/src/index.ts](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/remotion-src/src/index.ts) | entrypoints signal |
| entrypoints | [skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/remotion-src/src/index.ts](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/remotion-src/src/index.ts) | entrypoints signal |
| entrypoints | [skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/remotion-src/src/index.ts](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/remotion-src/src/index.ts) | entrypoints signal |
| entrypoints | [packages/studio/src/App.tsx](../../../../sources/heygen-com__hyperframes/packages/studio/src/App.tsx) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/heygen-com__hyperframes/CLAUDE.md) | instruction signal |
| instruction | [packages/cli/src/templates/_shared/AGENTS.md](../../../../sources/heygen-com__hyperframes/packages/cli/src/templates/_shared/AGENTS.md) | instruction signal |
| instruction | [packages/cli/src/templates/_shared/CLAUDE.md](../../../../sources/heygen-com__hyperframes/packages/cli/src/templates/_shared/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 83 | [skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/remotion-src/src/index.ts](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/remotion-src/src/index.ts)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/remotion-src/src/index.ts](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/remotion-src/src/index.ts)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/remotion-src/src/index.ts](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/remotion-src/src/index.ts)<br>[packages/studio/src/App.tsx](../../../../sources/heygen-com__hyperframes/packages/studio/src/App.tsx)<br>[packages/studio/src/index.ts](../../../../sources/heygen-com__hyperframes/packages/studio/src/index.ts)<br>[packages/studio/src/main.tsx](../../../../sources/heygen-com__hyperframes/packages/studio/src/main.tsx)<br>[packages/shader-transitions/src/index.ts](../../../../sources/heygen-com__hyperframes/packages/shader-transitions/src/index.ts)<br>[packages/sdk-playground/src/main.ts](../../../../sources/heygen-com__hyperframes/packages/sdk-playground/src/main.ts) |
| agentRuntime | 1167 | [AGENTS.md](../../../../sources/heygen-com__hyperframes/AGENTS.md)<br>[skills/website-to-video/SKILL.md](../../../../sources/heygen-com__hyperframes/skills/website-to-video/SKILL.md)<br>[skills/website-to-video/scripts/w2h-verify.mjs](../../../../sources/heygen-com__hyperframes/skills/website-to-video/scripts/w2h-verify.mjs)<br>[skills/website-to-video/references/beat-builder-guide.md](../../../../sources/heygen-com__hyperframes/skills/website-to-video/references/beat-builder-guide.md)<br>[skills/website-to-video/references/capabilities.md](../../../../sources/heygen-com__hyperframes/skills/website-to-video/references/capabilities.md)<br>[skills/website-to-video/references/step-0-capture.md](../../../../sources/heygen-com__hyperframes/skills/website-to-video/references/step-0-capture.md)<br>[skills/website-to-video/references/step-1-design.md](../../../../sources/heygen-com__hyperframes/skills/website-to-video/references/step-1-design.md)<br>[skills/website-to-video/references/step-2-brief.md](../../../../sources/heygen-com__hyperframes/skills/website-to-video/references/step-2-brief.md) |
| mcp | 1 | [docs/guides/mcp.mdx](../../../../sources/heygen-com__hyperframes/docs/guides/mcp.mdx) |
| retrieval | 133 | [skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/remotion-src/src/index.ts](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/remotion-src/src/index.ts)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/hf-src/index.html](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/hf-src/index.html)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/remotion-src/src/index.ts](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/remotion-src/src/index.ts)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/hf-src/index.html](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/hf-src/index.html)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/remotion-src/src/index.ts](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/remotion-src/src/index.ts)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/hf-src/index.html](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/hf-src/index.html)<br>[skills/product-launch-video/scripts/assemble-index.mjs](../../../../sources/heygen-com__hyperframes/skills/product-launch-video/scripts/assemble-index.mjs)<br>[skills/product-launch-video/phases/visual-design/blueprints-index.md](../../../../sources/heygen-com__hyperframes/skills/product-launch-video/phases/visual-design/blueprints-index.md) |
| spec | 469 | [DESIGN.md](../../../../sources/heygen-com__hyperframes/DESIGN.md)<br>[skills/website-to-video/references/step-1-design.md](../../../../sources/heygen-com__hyperframes/skills/website-to-video/references/step-1-design.md)<br>[skills/product-launch-video/scripts/lib/prep-design.mjs](../../../../sources/heygen-com__hyperframes/skills/product-launch-video/scripts/lib/prep-design.mjs)<br>[skills/product-launch-video/phases/visual-design/blueprints-index.md](../../../../sources/heygen-com__hyperframes/skills/product-launch-video/phases/visual-design/blueprints-index.md)<br>[skills/product-launch-video/phases/visual-design/effects-catalog.md](../../../../sources/heygen-com__hyperframes/skills/product-launch-video/phases/visual-design/effects-catalog.md)<br>[skills/product-launch-video/phases/visual-design/guide.md](../../../../sources/heygen-com__hyperframes/skills/product-launch-video/phases/visual-design/guide.md)<br>[skills/product-launch-video/phases/visual-design/scripts/build-page-card.mjs](../../../../sources/heygen-com__hyperframes/skills/product-launch-video/phases/visual-design/scripts/build-page-card.mjs)<br>[skills/product-launch-video/phases/visual-design/rules/color-system.md](../../../../sources/heygen-com__hyperframes/skills/product-launch-video/phases/visual-design/rules/color-system.md) |
| eval | 920 | [skills/remotion-to-hyperframes/scripts/tests/smoke.sh](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/scripts/tests/smoke.sh)<br>[skills/remotion-to-hyperframes/scripts/tests/fixtures/blocker.tsx](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/scripts/tests/fixtures/blocker.tsx)<br>[skills/remotion-to-hyperframes/scripts/tests/fixtures/clean.tsx](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/scripts/tests/fixtures/clean.tsx)<br>[skills/remotion-to-hyperframes/references/eval.md](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/references/eval.md)<br>[skills/remotion-to-hyperframes/assets/test-corpus/.gitignore](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/.gitignore)<br>[skills/remotion-to-hyperframes/assets/test-corpus/run.sh](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/run.sh)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-4-escape-hatch/expected.json](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-4-escape-hatch/expected.json)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-4-escape-hatch/README.md](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-4-escape-hatch/README.md) |
| security | 35 | [SECURITY.md](../../../../sources/heygen-com__hyperframes/SECURITY.md)<br>[skills/graphic-overlays/references/styles/audit.html](../../../../sources/heygen-com__hyperframes/skills/graphic-overlays/references/styles/audit.html)<br>[packages/engine/src/utils/uint16-alignment-audit.test.ts](../../../../sources/heygen-com__hyperframes/packages/engine/src/utils/uint16-alignment-audit.test.ts)<br>[packages/core/scripts/test-hyperframe-runtime-security.ts](../../../../sources/heygen-com__hyperframes/packages/core/scripts/test-hyperframe-runtime-security.ts)<br>[packages/cli/src/commands/auth.ts](../../../../sources/heygen-com__hyperframes/packages/cli/src/commands/auth.ts)<br>[packages/cli/src/commands/contrast-audit.browser.js](../../../../sources/heygen-com__hyperframes/packages/cli/src/commands/contrast-audit.browser.js)<br>[packages/cli/src/commands/layout-audit.browser.js](../../../../sources/heygen-com__hyperframes/packages/cli/src/commands/layout-audit.browser.js)<br>[packages/cli/src/commands/layout-audit.browser.test.ts](../../../../sources/heygen-com__hyperframes/packages/cli/src/commands/layout-audit.browser.test.ts) |
| ci | 10 | [.github/workflows/catalog-previews.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/catalog-previews.yml)<br>[.github/workflows/ci.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/codeql.yml)<br>[.github/workflows/docs.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/docs.yml)<br>[.github/workflows/player-perf.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/player-perf.yml)<br>[.github/workflows/preview-regression.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/preview-regression.yml)<br>[.github/workflows/publish.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/publish.yml)<br>[.github/workflows/regression.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/regression.yml) |
| container | 10 | [Dockerfile.test](../../../../sources/heygen-com__hyperframes/Dockerfile.test)<br>[skills/motion-graphics/categories/charts/module.md](../../../../sources/heygen-com__hyperframes/skills/motion-graphics/categories/charts/module.md)<br>[packages/gcp-cloud-run/Dockerfile](../../../../sources/heygen-com__hyperframes/packages/gcp-cloud-run/Dockerfile)<br>[packages/cli/src/docker/Dockerfile.render](../../../../sources/heygen-com__hyperframes/packages/cli/src/docker/Dockerfile.render)<br>[examples/k8s-jobs/Dockerfile.example](../../../../sources/heygen-com__hyperframes/examples/k8s-jobs/Dockerfile.example)<br>[docs/deploy/aws-lambda.mdx](../../../../sources/heygen-com__hyperframes/docs/deploy/aws-lambda.mdx)<br>[docs/deploy/cloud.mdx](../../../../sources/heygen-com__hyperframes/docs/deploy/cloud.mdx)<br>[docs/deploy/gcp-cloud-run.mdx](../../../../sources/heygen-com__hyperframes/docs/deploy/gcp-cloud-run.mdx) |
| instruction | 4 | [AGENTS.md](../../../../sources/heygen-com__hyperframes/AGENTS.md)<br>[CLAUDE.md](../../../../sources/heygen-com__hyperframes/CLAUDE.md)<br>[packages/cli/src/templates/_shared/AGENTS.md](../../../../sources/heygen-com__hyperframes/packages/cli/src/templates/_shared/AGENTS.md)<br>[packages/cli/src/templates/_shared/CLAUDE.md](../../../../sources/heygen-com__hyperframes/packages/cli/src/templates/_shared/CLAUDE.md) |
| docs | 236 | [README.md](../../../../sources/heygen-com__hyperframes/README.md)<br>[updates/README.md](../../../../sources/heygen-com__hyperframes/updates/README.md)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-4-escape-hatch/README.md](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-4-escape-hatch/README.md)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/README.md](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/README.md)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/README.md](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/README.md)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/README.md](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/README.md)<br>[skills/product-launch-video/phases/design-system/README.md](../../../../sources/heygen-com__hyperframes/skills/product-launch-video/phases/design-system/README.md)<br>[skills/pr-to-video/phases/design-system/README.md](../../../../sources/heygen-com__hyperframes/skills/pr-to-video/phases/design-system/README.md) |
| config | 30 | [package.json](../../../../sources/heygen-com__hyperframes/package.json)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/remotion-src/package.json](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/remotion-src/package.json)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/remotion-src/tsconfig.json](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/remotion-src/tsconfig.json)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/remotion-src/package.json](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/remotion-src/package.json)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/remotion-src/tsconfig.json](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/remotion-src/tsconfig.json)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/remotion-src/package.json](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/remotion-src/package.json)<br>[skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/remotion-src/tsconfig.json](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/remotion-src/tsconfig.json)<br>[packages/studio/package.json](../../../../sources/heygen-com__hyperframes/packages/studio/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 920 | [skills/remotion-to-hyperframes/scripts/tests/smoke.sh](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/scripts/tests/smoke.sh)<br>[skills/remotion-to-hyperframes/scripts/tests/fixtures/blocker.tsx](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/scripts/tests/fixtures/blocker.tsx)<br>[skills/remotion-to-hyperframes/scripts/tests/fixtures/clean.tsx](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/scripts/tests/fixtures/clean.tsx)<br>[skills/remotion-to-hyperframes/references/eval.md](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/references/eval.md)<br>[skills/remotion-to-hyperframes/assets/test-corpus/.gitignore](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/.gitignore)<br>[skills/remotion-to-hyperframes/assets/test-corpus/run.sh](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/run.sh) |
| CI workflow | 10 | [.github/workflows/catalog-previews.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/catalog-previews.yml)<br>[.github/workflows/ci.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/codeql.yml)<br>[.github/workflows/docs.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/docs.yml)<br>[.github/workflows/player-perf.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/player-perf.yml)<br>[.github/workflows/preview-regression.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/preview-regression.yml) |
| 컨테이너/배포 | 10 | [Dockerfile.test](../../../../sources/heygen-com__hyperframes/Dockerfile.test)<br>[skills/motion-graphics/categories/charts/module.md](../../../../sources/heygen-com__hyperframes/skills/motion-graphics/categories/charts/module.md)<br>[packages/gcp-cloud-run/Dockerfile](../../../../sources/heygen-com__hyperframes/packages/gcp-cloud-run/Dockerfile)<br>[packages/cli/src/docker/Dockerfile.render](../../../../sources/heygen-com__hyperframes/packages/cli/src/docker/Dockerfile.render)<br>[examples/k8s-jobs/Dockerfile.example](../../../../sources/heygen-com__hyperframes/examples/k8s-jobs/Dockerfile.example)<br>[docs/deploy/aws-lambda.mdx](../../../../sources/heygen-com__hyperframes/docs/deploy/aws-lambda.mdx) |
| 보안/정책 | 35 | [SECURITY.md](../../../../sources/heygen-com__hyperframes/SECURITY.md)<br>[skills/graphic-overlays/references/styles/audit.html](../../../../sources/heygen-com__hyperframes/skills/graphic-overlays/references/styles/audit.html)<br>[packages/engine/src/utils/uint16-alignment-audit.test.ts](../../../../sources/heygen-com__hyperframes/packages/engine/src/utils/uint16-alignment-audit.test.ts)<br>[packages/core/scripts/test-hyperframe-runtime-security.ts](../../../../sources/heygen-com__hyperframes/packages/core/scripts/test-hyperframe-runtime-security.ts)<br>[packages/cli/src/commands/auth.ts](../../../../sources/heygen-com__hyperframes/packages/cli/src/commands/auth.ts)<br>[packages/cli/src/commands/contrast-audit.browser.js](../../../../sources/heygen-com__hyperframes/packages/cli/src/commands/contrast-audit.browser.js) |
| 에이전트 지시문 | 4 | [AGENTS.md](../../../../sources/heygen-com__hyperframes/AGENTS.md)<br>[CLAUDE.md](../../../../sources/heygen-com__hyperframes/CLAUDE.md)<br>[packages/cli/src/templates/_shared/AGENTS.md](../../../../sources/heygen-com__hyperframes/packages/cli/src/templates/_shared/AGENTS.md)<br>[packages/cli/src/templates/_shared/CLAUDE.md](../../../../sources/heygen-com__hyperframes/packages/cli/src/templates/_shared/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/guides/mcp.mdx`, `AGENTS.md`, `skills/website-to-video/SKILL.md`.
2. entrypoint를 따라 실행 흐름 확인: `skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/remotion-src/src/index.ts`, `skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/remotion-src/src/index.ts`, `skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/remotion-src/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills/website-to-video/SKILL.md`, `skills/website-to-video/scripts/w2h-verify.mjs`.
4. retrieval/memory/indexing 확인: `skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/remotion-src/src/index.ts`, `skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/hf-src/index.html`, `skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/remotion-src/src/index.ts`.
5. test/eval 파일로 동작 검증: `skills/remotion-to-hyperframes/scripts/tests/smoke.sh`, `skills/remotion-to-hyperframes/scripts/tests/fixtures/blocker.tsx`, `skills/remotion-to-hyperframes/scripts/tests/fixtures/clean.tsx`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Write HTML. Render video. Built for agents.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
