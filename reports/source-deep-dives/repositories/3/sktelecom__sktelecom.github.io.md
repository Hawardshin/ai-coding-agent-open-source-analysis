# sktelecom/sktelecom.github.io Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Open Source Portal at SK telecom

## 요약

- 조사 단위: `sources/sktelecom__sktelecom.github.io` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 533 files, 312 directories, depth score 100, key references 10개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=go.mod, package.json이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | sktelecom/sktelecom.github.io |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | korea |
| Language | SCSS |
| Stars | 20 |
| Forks | 19 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/sktelecom__sktelecom.github.io](../../../../sources/sktelecom__sktelecom.github.io) |
| Existing report | [reports/korea-trending/repositories/sktelecom__sktelecom.github.io.md](../../../korea-trending/repositories/sktelecom__sktelecom.github.io.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 533 / 312 |
| Max observed depth | 7 |
| Top directories | .github, assets, content, docs, i18n, layouts, slides, static |
| Top extensions | .md: 317, .png: 133, .html: 23, .jpeg: 15, .jpg: 7, .scss: 6, .yml: 5, (none): 5, .toml: 4, .js: 3, .yaml: 3, .gif: 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 9 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| content | top-level component | 1 |
| i18n | top-level component | 1 |
| layouts | top-level component | 1 |
| slides | top-level component | 1 |
| static | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | _build | npm run _hugo-dev -- |
| quality | package.json | _check:format | npx prettier --check . |
| quality | package.json | _check:links | echo IMPLEMENTATION PENDING for check-links; echo |
| utility | package.json | _commit:public | HASH=$(git rev-parse --short main); cd public && git add -A && git commit -m "Site at $HASH" |
| quality | package.json | _diff:check | git diff --name-only --exit-code |
| serve-dev | package.json | _fix:permissions | chmod -R u+w public/* 2>/dev/null \|\| true |
| utility | package.json | _get:docsy | hugo mod get github.com/google/docsy@v$npm_package_version |
| serve-dev | package.json | _hugo-dev | npm run _hugo -- -e dev -DFE |
| utility | package.json | _hugo | hugo --cleanDestinationDir |
| utility | package.json | _local | npx cross-env HUGO_MODULE_WORKSPACE=docsy.work |
| serve-dev | package.json | _serve | npm run _hugo-dev -- --minify serve --renderToMemory |
| serve-dev | package.json | build:preview | npm run _hugo-dev -- --minify --baseURL "${DEPLOY_PRIME_URL:-/}" |
| build | package.json | build:production | npm run _hugo -- --minify |
| build | package.json | build | npm run _build -- |
| test | package.json | check:links:all | HTMLTEST_ARGS= npm run _check:links |
| quality | package.json | check:links | npm run _check:links |
| utility | package.json | ci:prepare | npm run _get:docsy && hugo mod graph && hugo mod tidy |
| test | package.json | ci:test | npm run ci:prepare && npm run fix:format && npm run test && npm run _diff:check |
| utility | package.json | clean | rm -Rf public/* resources |
| quality | package.json | fix:format | npm run _check:format -- --write |
| utility | package.json | local | npm run _local -- npm run |
| utility | package.json | make:public | git init -b main public |
| utility | package.json | post_hugo | npm run _fix:permissions |
| build | package.json | postbuild:preview | npm run _check:links |
| build | package.json | postbuild:production | npm run _check:links |
| build | package.json | precheck:links:all | npm run build |
| build | package.json | precheck:links | npm run build |
| serve-dev | package.json | serve | npm run _serve |
| test | package.json | test | npm run check:links |
| test | package.json | update:dep | npm install --save-dev autoprefixer@latest postcss-cli@latest |
| test | package.json | update:hugo | npm install --save-dev --save-exact hugo-extended@latest |
| quality | package.json | update:packages | npx npm-check-updates -u |


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
| config | [go.mod](../../../../sources/sktelecom__sktelecom.github.io/go.mod) | config signal |
| config | [package.json](../../../../sources/sktelecom__sktelecom.github.io/package.json) | config signal |
| docs | [README.md](../../../../sources/sktelecom__sktelecom.github.io/README.md) | docs signal |
| docs | [docs/attach-file-image.md](../../../../sources/sktelecom__sktelecom.github.io/docs/attach-file-image.md) | docs signal |
| docs | [docs/blog.md](../../../../sources/sktelecom__sktelecom.github.io/docs/blog.md) | docs signal |
| docs | [docs/github-workflow.md](../../../../sources/sktelecom__sktelecom.github.io/docs/github-workflow.md) | docs signal |
| ci | [.github/workflows/ci.yml](../../../../sources/sktelecom__sktelecom.github.io/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/dependabot-auto-merge.yml](../../../../sources/sktelecom__sktelecom.github.io/.github/workflows/dependabot-auto-merge.yml) | ci support |
| container | [docker-compose.yaml](../../../../sources/sktelecom__sktelecom.github.io/docker-compose.yaml) | container support |
| container | [Dockerfile](../../../../sources/sktelecom__sktelecom.github.io/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 2 | [layouts/partials/hooks/body-end.html](../../../../sources/sktelecom__sktelecom.github.io/layouts/partials/hooks/body-end.html)<br>[layouts/partials/hooks/head-end.html](../../../../sources/sktelecom__sktelecom.github.io/layouts/partials/hooks/head-end.html) |
| mcp | 0 | not obvious |
| retrieval | 288 | [layouts/index.html](../../../../sources/sktelecom__sktelecom.github.io/layouts/index.html)<br>[content/ko/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/_index.md)<br>[content/ko/project/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/project/_index.md)<br>[content/ko/project/sktpasskey/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/project/sktpasskey/_index.md)<br>[content/ko/project/sbom-generator/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/project/sbom-generator/_index.md)<br>[content/ko/project/onot/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/project/onot/_index.md)<br>[content/ko/project/kogpt2/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/project/kogpt2/_index.md)<br>[content/ko/project/kobert/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/project/kobert/_index.md) |
| spec | 2 | [content/ko/guide/supply-chain/for-suppliers/requirements.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/guide/supply-chain/for-suppliers/requirements.md)<br>[content/en/guide/supply-chain/for-suppliers/requirements.md](../../../../sources/sktelecom__sktelecom.github.io/content/en/guide/supply-chain/for-suppliers/requirements.md) |
| eval | 0 | not obvious |
| security | 119 | [layouts/compliance/list.html](../../../../sources/sktelecom__sktelecom.github.io/layouts/compliance/list.html)<br>[content/ko/guide/supply-chain/overview/policy.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/guide/supply-chain/overview/policy.md)<br>[content/ko/compliance/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/_index.md)<br>[content/ko/compliance/zem/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/zem/_index.md)<br>[content/ko/compliance/tlc_smart_drone_plan/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/tlc_smart_drone_plan/_index.md)<br>[content/ko/compliance/t_world/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/t_world/_index.md)<br>[content/ko/compliance/t_view/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/t_view/_index.md)<br>[content/ko/compliance/t_universe/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/t_universe/_index.md) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/sktelecom__sktelecom.github.io/.github/workflows/ci.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/sktelecom__sktelecom.github.io/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/hugo.yml](../../../../sources/sktelecom__sktelecom.github.io/.github/workflows/hugo.yml) |
| container | 2 | [docker-compose.yaml](../../../../sources/sktelecom__sktelecom.github.io/docker-compose.yaml)<br>[Dockerfile](../../../../sources/sktelecom__sktelecom.github.io/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 9 | [README.md](../../../../sources/sktelecom__sktelecom.github.io/README.md)<br>[docs/attach-file-image.md](../../../../sources/sktelecom__sktelecom.github.io/docs/attach-file-image.md)<br>[docs/blog.md](../../../../sources/sktelecom__sktelecom.github.io/docs/blog.md)<br>[docs/github-workflow.md](../../../../sources/sktelecom__sktelecom.github.io/docs/github-workflow.md)<br>[docs/github-workflow.png](../../../../sources/sktelecom__sktelecom.github.io/docs/github-workflow.png)<br>[docs/guide.md](../../../../sources/sktelecom__sktelecom.github.io/docs/guide.md)<br>[docs/local-website-server.md](../../../../sources/sktelecom__sktelecom.github.io/docs/local-website-server.md)<br>[docs/multi-language.md](../../../../sources/sktelecom__sktelecom.github.io/docs/multi-language.md) |
| config | 2 | [go.mod](../../../../sources/sktelecom__sktelecom.github.io/go.mod)<br>[package.json](../../../../sources/sktelecom__sktelecom.github.io/package.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/sktelecom__sktelecom.github.io/.github/workflows/ci.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/sktelecom__sktelecom.github.io/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/hugo.yml](../../../../sources/sktelecom__sktelecom.github.io/.github/workflows/hugo.yml) |
| Containers / deploy | 2 | [docker-compose.yaml](../../../../sources/sktelecom__sktelecom.github.io/docker-compose.yaml)<br>[Dockerfile](../../../../sources/sktelecom__sktelecom.github.io/Dockerfile) |
| Security / policy | 119 | [layouts/compliance/list.html](../../../../sources/sktelecom__sktelecom.github.io/layouts/compliance/list.html)<br>[content/ko/guide/supply-chain/overview/policy.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/guide/supply-chain/overview/policy.md)<br>[content/ko/compliance/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/_index.md)<br>[content/ko/compliance/zem/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/zem/_index.md)<br>[content/ko/compliance/tlc_smart_drone_plan/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/tlc_smart_drone_plan/_index.md)<br>[content/ko/compliance/t_world/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/t_world/_index.md) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | test/eval path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `go.mod`, `package.json`, `README.md`.
2. Map agent/tool runtime through: `layouts/partials/hooks/body-end.html`, `layouts/partials/hooks/head-end.html`.
3. Inspect retrieval/memory/indexing through: `layouts/index.html`, `content/ko/_index.md`, `content/ko/project/_index.md`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Open Source Portal at SK telecom. 핵심 구조 신호는 SCSS, package.json, go.mod, Dockerfile, README.md, LICENSE이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
