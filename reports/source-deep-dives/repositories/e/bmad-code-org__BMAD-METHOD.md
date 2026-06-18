# bmad-code-org/BMAD-METHOD 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 570 files, 158 directories.

## 요약

- 조사 단위: `sources/bmad-code-org__BMAD-METHOD` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 569 files, 157 directories, depth score 106, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, website/public/workflow-map-diagram-fr.html, website/public/workflow-map-diagram.html이고, 의존성 단서는 commander, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | bmad-code-org/BMAD-METHOD |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | JavaScript |
| Stars | 49285 |
| Forks | 5702 |
| License | Other |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/bmad-code-org__BMAD-METHOD](../../../../sources/bmad-code-org__BMAD-METHOD) |
| 기존 보고서 | [reports/clone-structures/bmad-code-org__BMAD-METHOD.md](../../../clone-structures/bmad-code-org__BMAD-METHOD.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 569 / 157 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .augment, .claude-plugin, .github, .husky, docs, evals, src, test, tools, web-bundles, website |
| 상위 확장자 | .md: 381, .js: 51, .toml: 35, .yaml: 19, .csv: 14, .py: 13, .json: 12, (none): 8, .mjs: 7, .png: 6, .html: 5, .mdx: 5 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 55 |
| docs | documentation surface | 16 |
| .github | ci surface | 1 |
| evals | top-level component | 1 |
| test | validation surface | 1 |
| tools | top-level component | 1 |
| web-bundles | source boundary | 1 |
| website | documentation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | bmad:install | node tools/installer/bmad-cli.js install |
| utility | package.json | bmad:uninstall | node tools/installer/bmad-cli.js uninstall |
| build | package.json | docs:build | node tools/build-docs.mjs |
| serve-dev | package.json | docs:dev | astro dev --root website |
| utility | package.json | docs:fix-links | node tools/fix-doc-links.js |
| utility | package.json | docs:preview | astro preview --root website |
| utility | package.json | docs:validate-links | node tools/validate-doc-links.js |
| utility | package.json | docs:validate-sidebar | node tools/validate-sidebar-order.js |
| quality | package.json | format:check | prettier --check "**/*.{js,cjs,mjs,json,yaml}" |
| quality | package.json | format:fix | prettier --write "**/*.{js,cjs,mjs,json,yaml}" |
| quality | package.json | format:fix:staged | prettier --write |
| utility | package.json | install:bmad | node tools/installer/bmad-cli.js install |
| quality | package.json | lint | eslint . --ext .js,.cjs,.mjs,.yaml --max-warnings=0 |
| quality | package.json | lint:fix | eslint . --ext .js,.cjs,.mjs,.yaml --fix |
| quality | package.json | lint:md | markdownlint-cli2 "**/*.md" |
| serve-dev | package.json | prepare | command -v husky >/dev/null 2>&1 && husky \|\| exit 0 |
| test | package.json | quality | npm run format:check && npm run lint && npm run lint:md && npm run docs:build && npm run test:install && npm run test:urls && npm run validate:refs && npm run validate:skills && npm run docs:validate-sidebar |
| build | package.json | rebundle | node tools/installer/bundlers/bundle-web.js rebundle |
| test | package.json | test | npm run test:refs && npm run test:install && npm run test:urls && npm run test:channels && npm run lint && npm run lint:md && npm run format:check |
| test | package.json | test:channels | node test/test-installer-channels.js |
| test | package.json | test:install | node test/test-installation-components.js |
| test | package.json | test:refs | node test/test-file-refs-csv.js |
| test | package.json | test:urls | node test/test-parse-source-urls.js |
| utility | package.json | validate:refs | node tools/validate-file-refs.js --strict |
| utility | package.json | validate:skills | node tools/validate-skills.js --strict |
| entrypoint | package.json bin | bmad-cli.js | tools/installer/bmad-cli.js |
| entrypoint | package.json bin | bmad-cli.js | tools/installer/bmad-cli.js |


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
| agentRuntime | [AGENTS.md](../../../../sources/bmad-code-org__BMAD-METHOD/AGENTS.md) | agentRuntime signal |
| agentRuntime | [website/public/workflow-map-diagram-fr.html](../../../../sources/bmad-code-org__BMAD-METHOD/website/public/workflow-map-diagram-fr.html) | agentRuntime signal |
| agentRuntime | [website/public/workflow-map-diagram.html](../../../../sources/bmad-code-org__BMAD-METHOD/website/public/workflow-map-diagram.html) | agentRuntime signal |
| agentRuntime | [web-bundles/ux-coach/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/ux-coach/SKILL.md) | agentRuntime signal |
| instruction | [docs/zh-cn/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/zh-cn/reference/agents.md) | instruction signal |
| instruction | [docs/vi-vn/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/vi-vn/reference/agents.md) | instruction signal |
| instruction | [docs/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/reference/agents.md) | instruction signal |
| config | [package.json](../../../../sources/bmad-code-org__BMAD-METHOD/package.json) | config signal |
| ci | [.github/workflows/coderabbit-review.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/coderabbit-review.yaml) | ci support |
| ci | [.github/workflows/discord.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/discord.yaml) | ci support |
| eval | [test/README.md](../../../../sources/bmad-code-org__BMAD-METHOD/test/README.md) | eval support |
| eval | [test/test-file-refs-csv.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-file-refs-csv.js) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 120 | [AGENTS.md](../../../../sources/bmad-code-org__BMAD-METHOD/AGENTS.md)<br>[website/public/workflow-map-diagram-fr.html](../../../../sources/bmad-code-org__BMAD-METHOD/website/public/workflow-map-diagram-fr.html)<br>[website/public/workflow-map-diagram.html](../../../../sources/bmad-code-org__BMAD-METHOD/website/public/workflow-map-diagram.html)<br>[web-bundles/ux-coach/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/ux-coach/SKILL.md)<br>[web-bundles/product-brief-coach/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/product-brief-coach/SKILL.md)<br>[web-bundles/prfaq-coach/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/prfaq-coach/SKILL.md)<br>[web-bundles/prd-coach/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/prd-coach/SKILL.md)<br>[web-bundles/market-and-industry-research/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/market-and-industry-research/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 7 | [src/core-skills/bmad-index-docs/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/src/core-skills/bmad-index-docs/SKILL.md)<br>[src/bmm-skills/1-analysis/bmad-document-project/templates/index-template.md](../../../../sources/bmad-code-org__BMAD-METHOD/src/bmm-skills/1-analysis/bmad-document-project/templates/index-template.md)<br>[docs/index.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/index.md)<br>[docs/zh-cn/index.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/zh-cn/index.md)<br>[docs/vi-vn/index.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/vi-vn/index.md)<br>[docs/fr/index.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/fr/index.md)<br>[docs/cs/index.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/cs/index.md) |
| spec | 45 | [web-bundles/prd-coach/INSTRUCTIONS.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/prd-coach/INSTRUCTIONS.md)<br>[web-bundles/prd-coach/prd-template.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/prd-coach/prd-template.md)<br>[web-bundles/prd-coach/prd-validation-checklist.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/prd-coach/prd-validation-checklist.md)<br>[web-bundles/prd-coach/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/web-bundles/prd-coach/SKILL.md)<br>[src/core-skills/bmad-spec/customize.toml](../../../../sources/bmad-code-org__BMAD-METHOD/src/core-skills/bmad-spec/customize.toml)<br>[src/core-skills/bmad-spec/SKILL.md](../../../../sources/bmad-code-org__BMAD-METHOD/src/core-skills/bmad-spec/SKILL.md)<br>[src/core-skills/bmad-spec/assets/headless-schemas.md](../../../../sources/bmad-code-org__BMAD-METHOD/src/core-skills/bmad-spec/assets/headless-schemas.md)<br>[src/core-skills/bmad-spec/assets/spec-template.md](../../../../sources/bmad-code-org__BMAD-METHOD/src/core-skills/bmad-spec/assets/spec-template.md) |
| eval | 34 | [test/README.md](../../../../sources/bmad-code-org__BMAD-METHOD/test/README.md)<br>[test/test-file-refs-csv.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-file-refs-csv.js)<br>[test/test-installation-components.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-installation-components.js)<br>[test/test-installer-channels.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-installer-channels.js)<br>[test/test-parse-source-urls.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-parse-source-urls.js)<br>[test/test-rehype-plugins.mjs](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-rehype-plugins.mjs)<br>[test/test-workflow-path-regex.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-workflow-path-regex.js)<br>[test/fixtures/file-refs-csv/valid/bmm-style.csv](../../../../sources/bmad-code-org__BMAD-METHOD/test/fixtures/file-refs-csv/valid/bmm-style.csv) |
| security | 1 | [SECURITY.md](../../../../sources/bmad-code-org__BMAD-METHOD/SECURITY.md) |
| ci | 5 | [.github/workflows/coderabbit-review.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/coderabbit-review.yaml)<br>[.github/workflows/discord.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/discord.yaml)<br>[.github/workflows/docs.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/docs.yaml)<br>[.github/workflows/publish.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/publish.yaml)<br>[.github/workflows/quality.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/quality.yaml) |
| container | 0 | 명확하지 않음 |
| instruction | 6 | [AGENTS.md](../../../../sources/bmad-code-org__BMAD-METHOD/AGENTS.md)<br>[docs/zh-cn/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/zh-cn/reference/agents.md)<br>[docs/vi-vn/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/vi-vn/reference/agents.md)<br>[docs/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/reference/agents.md)<br>[docs/fr/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/fr/reference/agents.md)<br>[docs/cs/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/cs/reference/agents.md) |
| docs | 208 | [README_CN.md](../../../../sources/bmad-code-org__BMAD-METHOD/README_CN.md)<br>[README_VN.md](../../../../sources/bmad-code-org__BMAD-METHOD/README_VN.md)<br>[README.md](../../../../sources/bmad-code-org__BMAD-METHOD/README.md)<br>[website/astro.config.mjs](../../../../sources/bmad-code-org__BMAD-METHOD/website/astro.config.mjs)<br>[website/README.md](../../../../sources/bmad-code-org__BMAD-METHOD/website/README.md)<br>[website/src/rehype-base-paths.js](../../../../sources/bmad-code-org__BMAD-METHOD/website/src/rehype-base-paths.js)<br>[website/src/rehype-markdown-links.js](../../../../sources/bmad-code-org__BMAD-METHOD/website/src/rehype-markdown-links.js)<br>[website/src/styles/custom.css](../../../../sources/bmad-code-org__BMAD-METHOD/website/src/styles/custom.css) |
| config | 1 | [package.json](../../../../sources/bmad-code-org__BMAD-METHOD/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 34 | [test/README.md](../../../../sources/bmad-code-org__BMAD-METHOD/test/README.md)<br>[test/test-file-refs-csv.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-file-refs-csv.js)<br>[test/test-installation-components.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-installation-components.js)<br>[test/test-installer-channels.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-installer-channels.js)<br>[test/test-parse-source-urls.js](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-parse-source-urls.js)<br>[test/test-rehype-plugins.mjs](../../../../sources/bmad-code-org__BMAD-METHOD/test/test-rehype-plugins.mjs) |
| CI workflow | 5 | [.github/workflows/coderabbit-review.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/coderabbit-review.yaml)<br>[.github/workflows/discord.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/discord.yaml)<br>[.github/workflows/docs.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/docs.yaml)<br>[.github/workflows/publish.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/publish.yaml)<br>[.github/workflows/quality.yaml](../../../../sources/bmad-code-org__BMAD-METHOD/.github/workflows/quality.yaml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [SECURITY.md](../../../../sources/bmad-code-org__BMAD-METHOD/SECURITY.md) |
| 에이전트 지시문 | 6 | [AGENTS.md](../../../../sources/bmad-code-org__BMAD-METHOD/AGENTS.md)<br>[docs/zh-cn/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/zh-cn/reference/agents.md)<br>[docs/vi-vn/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/vi-vn/reference/agents.md)<br>[docs/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/reference/agents.md)<br>[docs/fr/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/fr/reference/agents.md)<br>[docs/cs/reference/agents.md](../../../../sources/bmad-code-org__BMAD-METHOD/docs/cs/reference/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `website/public/workflow-map-diagram-fr.html`, `website/public/workflow-map-diagram.html`.
2. agent/tool runtime 매핑: `AGENTS.md`, `website/public/workflow-map-diagram-fr.html`, `website/public/workflow-map-diagram.html`.
3. retrieval/memory/indexing 확인: `src/core-skills/bmad-index-docs/SKILL.md`, `src/bmm-skills/1-analysis/bmad-document-project/templates/index-template.md`, `docs/index.md`.
4. test/eval 파일로 동작 검증: `test/README.md`, `test/test-file-refs-csv.js`, `test/test-installation-components.js`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 570 files, 158 directories.. 핵심 구조 신호는 JavaScript, package.json, README.md, AGENTS.md, LICENSE, tests이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
