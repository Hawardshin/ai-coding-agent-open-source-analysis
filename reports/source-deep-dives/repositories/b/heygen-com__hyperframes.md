# heygen-com/hyperframes Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Write HTML. Render video. Built for agents.

## 요약

- 조사 단위: `sources/heygen-com__hyperframes` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,636 files, 792 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/guides/mcp.mdx이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | heygen-com/hyperframes |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 28446 |
| Forks | 2692 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/heygen-com__hyperframes](../../../../sources/heygen-com__hyperframes) |
| Existing report | [reports/global-trending/repositories/heygen-com__hyperframes.md](../../../global-trending/repositories/heygen-com__hyperframes.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3636 / 792 |
| Max observed depth | 9 |
| Top directories | .claude, .claude-plugin, .codex-plugin, .cursor-plugin, .github, assets, docs, examples, packages, registry, releases, scripts, skills, updates |
| Top extensions | .ts: 1100, .md: 768, .html: 466, .json: 308, .mdx: 175, .png: 155, .tsx: 126, .mjs: 102, .mp3: 76, .mp4: 61, .woff2: 54, .jpg: 45 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
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


## How It Runs

| Category | Source | Name | Command |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 920 | [skills/remotion-to-hyperframes/scripts/tests/smoke.sh](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/scripts/tests/smoke.sh)<br>[skills/remotion-to-hyperframes/scripts/tests/fixtures/blocker.tsx](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/scripts/tests/fixtures/blocker.tsx)<br>[skills/remotion-to-hyperframes/scripts/tests/fixtures/clean.tsx](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/scripts/tests/fixtures/clean.tsx)<br>[skills/remotion-to-hyperframes/references/eval.md](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/references/eval.md)<br>[skills/remotion-to-hyperframes/assets/test-corpus/.gitignore](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/.gitignore)<br>[skills/remotion-to-hyperframes/assets/test-corpus/run.sh](../../../../sources/heygen-com__hyperframes/skills/remotion-to-hyperframes/assets/test-corpus/run.sh) |
| CI workflows | 10 | [.github/workflows/catalog-previews.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/catalog-previews.yml)<br>[.github/workflows/ci.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/codeql.yml)<br>[.github/workflows/docs.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/docs.yml)<br>[.github/workflows/player-perf.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/player-perf.yml)<br>[.github/workflows/preview-regression.yml](../../../../sources/heygen-com__hyperframes/.github/workflows/preview-regression.yml) |
| Containers / deploy | 10 | [Dockerfile.test](../../../../sources/heygen-com__hyperframes/Dockerfile.test)<br>[skills/motion-graphics/categories/charts/module.md](../../../../sources/heygen-com__hyperframes/skills/motion-graphics/categories/charts/module.md)<br>[packages/gcp-cloud-run/Dockerfile](../../../../sources/heygen-com__hyperframes/packages/gcp-cloud-run/Dockerfile)<br>[packages/cli/src/docker/Dockerfile.render](../../../../sources/heygen-com__hyperframes/packages/cli/src/docker/Dockerfile.render)<br>[examples/k8s-jobs/Dockerfile.example](../../../../sources/heygen-com__hyperframes/examples/k8s-jobs/Dockerfile.example)<br>[docs/deploy/aws-lambda.mdx](../../../../sources/heygen-com__hyperframes/docs/deploy/aws-lambda.mdx) |
| Security / policy | 35 | [SECURITY.md](../../../../sources/heygen-com__hyperframes/SECURITY.md)<br>[skills/graphic-overlays/references/styles/audit.html](../../../../sources/heygen-com__hyperframes/skills/graphic-overlays/references/styles/audit.html)<br>[packages/engine/src/utils/uint16-alignment-audit.test.ts](../../../../sources/heygen-com__hyperframes/packages/engine/src/utils/uint16-alignment-audit.test.ts)<br>[packages/core/scripts/test-hyperframe-runtime-security.ts](../../../../sources/heygen-com__hyperframes/packages/core/scripts/test-hyperframe-runtime-security.ts)<br>[packages/cli/src/commands/auth.ts](../../../../sources/heygen-com__hyperframes/packages/cli/src/commands/auth.ts)<br>[packages/cli/src/commands/contrast-audit.browser.js](../../../../sources/heygen-com__hyperframes/packages/cli/src/commands/contrast-audit.browser.js) |
| Agent instructions | 4 | [AGENTS.md](../../../../sources/heygen-com__hyperframes/AGENTS.md)<br>[CLAUDE.md](../../../../sources/heygen-com__hyperframes/CLAUDE.md)<br>[packages/cli/src/templates/_shared/AGENTS.md](../../../../sources/heygen-com__hyperframes/packages/cli/src/templates/_shared/AGENTS.md)<br>[packages/cli/src/templates/_shared/CLAUDE.md](../../../../sources/heygen-com__hyperframes/packages/cli/src/templates/_shared/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `docs/guides/mcp.mdx`, `AGENTS.md`, `skills/website-to-video/SKILL.md`.
2. Trace execution through entrypoints: `skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/remotion-src/src/index.ts`, `skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/remotion-src/src/index.ts`, `skills/remotion-to-hyperframes/assets/test-corpus/tier-1-title-card/remotion-src/src/index.ts`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills/website-to-video/SKILL.md`, `skills/website-to-video/scripts/w2h-verify.mjs`.
4. Inspect retrieval/memory/indexing through: `skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/remotion-src/src/index.ts`, `skills/remotion-to-hyperframes/assets/test-corpus/tier-3-data-driven/hf-src/index.html`, `skills/remotion-to-hyperframes/assets/test-corpus/tier-2-multi-scene/remotion-src/src/index.ts`.
5. Verify behavior through test/eval files: `skills/remotion-to-hyperframes/scripts/tests/smoke.sh`, `skills/remotion-to-hyperframes/scripts/tests/fixtures/blocker.tsx`, `skills/remotion-to-hyperframes/scripts/tests/fixtures/clean.tsx`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Write HTML. Render video. Built for agents.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
