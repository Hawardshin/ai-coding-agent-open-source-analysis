# sktelecom/sktelecom.github.io 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Open Source Portal at SK telecom

## 요약

- 조사 단위: `sources/sktelecom__sktelecom.github.io` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 533 files, 312 directories, depth score 94, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 config=go.mod, package.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | sktelecom/sktelecom.github.io |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | SCSS |
| Stars | 20 |
| Forks | 19 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/sktelecom__sktelecom.github.io](../../../../sources/sktelecom__sktelecom.github.io) |
| 기존 보고서 | [reports/korea-trending/repositories/sktelecom__sktelecom.github.io.md](../../../korea-trending/repositories/sktelecom__sktelecom.github.io.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 533 / 312 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, assets, content, docs, i18n, layouts, slides, static |
| 상위 확장자 | .md: 317, .png: 133, .html: 23, .jpeg: 15, .jpg: 7, .scss: 6, .yml: 5, (none): 5, .toml: 4, .js: 3, .yaml: 3, .gif: 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 9 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| content | top-level component | 1 |
| i18n | top-level component | 1 |
| layouts | top-level component | 1 |
| slides | top-level component | 1 |
| static | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 2 | [layouts/partials/hooks/body-end.html](../../../../sources/sktelecom__sktelecom.github.io/layouts/partials/hooks/body-end.html)<br>[layouts/partials/hooks/head-end.html](../../../../sources/sktelecom__sktelecom.github.io/layouts/partials/hooks/head-end.html) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 288 | [layouts/index.html](../../../../sources/sktelecom__sktelecom.github.io/layouts/index.html)<br>[content/ko/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/_index.md)<br>[content/ko/project/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/project/_index.md)<br>[content/ko/project/sktpasskey/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/project/sktpasskey/_index.md)<br>[content/ko/project/sbom-generator/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/project/sbom-generator/_index.md)<br>[content/ko/project/onot/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/project/onot/_index.md)<br>[content/ko/project/kogpt2/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/project/kogpt2/_index.md)<br>[content/ko/project/kobert/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/project/kobert/_index.md) |
| spec | 2 | [content/ko/guide/supply-chain/for-suppliers/requirements.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/guide/supply-chain/for-suppliers/requirements.md)<br>[content/en/guide/supply-chain/for-suppliers/requirements.md](../../../../sources/sktelecom__sktelecom.github.io/content/en/guide/supply-chain/for-suppliers/requirements.md) |
| eval | 0 | 명확하지 않음 |
| security | 119 | [layouts/compliance/list.html](../../../../sources/sktelecom__sktelecom.github.io/layouts/compliance/list.html)<br>[content/ko/guide/supply-chain/overview/policy.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/guide/supply-chain/overview/policy.md)<br>[content/ko/compliance/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/_index.md)<br>[content/ko/compliance/zem/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/zem/_index.md)<br>[content/ko/compliance/tlc_smart_drone_plan/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/tlc_smart_drone_plan/_index.md)<br>[content/ko/compliance/t_world/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/t_world/_index.md)<br>[content/ko/compliance/t_view/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/t_view/_index.md)<br>[content/ko/compliance/t_universe/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/t_universe/_index.md) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/sktelecom__sktelecom.github.io/.github/workflows/ci.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/sktelecom__sktelecom.github.io/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/hugo.yml](../../../../sources/sktelecom__sktelecom.github.io/.github/workflows/hugo.yml) |
| container | 2 | [docker-compose.yaml](../../../../sources/sktelecom__sktelecom.github.io/docker-compose.yaml)<br>[Dockerfile](../../../../sources/sktelecom__sktelecom.github.io/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 9 | [README.md](../../../../sources/sktelecom__sktelecom.github.io/README.md)<br>[docs/attach-file-image.md](../../../../sources/sktelecom__sktelecom.github.io/docs/attach-file-image.md)<br>[docs/blog.md](../../../../sources/sktelecom__sktelecom.github.io/docs/blog.md)<br>[docs/github-workflow.md](../../../../sources/sktelecom__sktelecom.github.io/docs/github-workflow.md)<br>[docs/github-workflow.png](../../../../sources/sktelecom__sktelecom.github.io/docs/github-workflow.png)<br>[docs/guide.md](../../../../sources/sktelecom__sktelecom.github.io/docs/guide.md)<br>[docs/local-website-server.md](../../../../sources/sktelecom__sktelecom.github.io/docs/local-website-server.md)<br>[docs/multi-language.md](../../../../sources/sktelecom__sktelecom.github.io/docs/multi-language.md) |
| config | 2 | [go.mod](../../../../sources/sktelecom__sktelecom.github.io/go.mod)<br>[package.json](../../../../sources/sktelecom__sktelecom.github.io/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 3 | [.github/workflows/ci.yml](../../../../sources/sktelecom__sktelecom.github.io/.github/workflows/ci.yml)<br>[.github/workflows/dependabot-auto-merge.yml](../../../../sources/sktelecom__sktelecom.github.io/.github/workflows/dependabot-auto-merge.yml)<br>[.github/workflows/hugo.yml](../../../../sources/sktelecom__sktelecom.github.io/.github/workflows/hugo.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yaml](../../../../sources/sktelecom__sktelecom.github.io/docker-compose.yaml)<br>[Dockerfile](../../../../sources/sktelecom__sktelecom.github.io/Dockerfile) |
| 보안/정책 | 119 | [layouts/compliance/list.html](../../../../sources/sktelecom__sktelecom.github.io/layouts/compliance/list.html)<br>[content/ko/guide/supply-chain/overview/policy.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/guide/supply-chain/overview/policy.md)<br>[content/ko/compliance/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/_index.md)<br>[content/ko/compliance/zem/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/zem/_index.md)<br>[content/ko/compliance/tlc_smart_drone_plan/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/tlc_smart_drone_plan/_index.md)<br>[content/ko/compliance/t_world/_index.md](../../../../sources/sktelecom__sktelecom.github.io/content/ko/compliance/t_world/_index.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | test/eval 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `go.mod`, `package.json`, `README.md`.
2. agent/tool runtime 매핑: `layouts/partials/hooks/body-end.html`, `layouts/partials/hooks/head-end.html`.
3. retrieval/memory/indexing 확인: `layouts/index.html`, `content/ko/_index.md`, `content/ko/project/_index.md`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Open Source Portal at SK telecom. 핵심 구조 신호는 SCSS, package.json, go.mod, Dockerfile, README.md, LICENSE이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
