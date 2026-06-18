# daangn/websites 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Daangn on the WWW

## 요약

- 조사 단위: `sources/daangn__websites` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 404 files, 158 directories, depth score 90, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 entrypoints=_workers/websites-integration/src/main.ts, _workers/prismic-image-proxy/src/main.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | daangn/websites |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | korea |
| Language | TypeScript |
| Stars | 676 |
| Forks | 62 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/daangn__websites](../../../../sources/daangn__websites) |
| 기존 보고서 | [reports/korea-trending/repositories/daangn__websites.md](../../../korea-trending/repositories/daangn__websites.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 404 / 158 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | _docs, _packages, _template, _workers, .github, .vim, .yarn, about.daangn.com, careers.ca.karrotmarket.com, careers.en.karrotmarket.com, careers.jp.karrotmarket.com, ir.daangn.com |
| 상위 확장자 | .tsx: 157, .ts: 86, .svg: 42, .json: 38, .mjs: 17, (none): 17, .md: 12, .js: 10, .png: 7, .yml: 6, .example: 3, .jsonc: 2 |
| 소스 패턴 | cli-first, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| _docs | documentation surface | 1 |
| _packages | source boundary | 1 |
| _template | top-level component | 1 |
| _workers | top-level component | 1 |
| .github | ci surface | 1 |
| about.daangn.com | top-level component | 1 |
| careers.ca.karrotmarket.com | top-level component | 1 |
| careers.en.karrotmarket.com | top-level component | 1 |
| careers.jp.karrotmarket.com | top-level component | 1 |
| ir.daangn.com | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | lint | biome check . --apply |
| quality | package.json | format | biome format . --write |


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
| entrypoints | [_workers/websites-integration/src/main.ts](../../../../sources/daangn__websites/_workers/websites-integration/src/main.ts) | entrypoints signal |
| entrypoints | [_workers/prismic-image-proxy/src/main.ts](../../../../sources/daangn__websites/_workers/prismic-image-proxy/src/main.ts) | entrypoints signal |
| config | [package.json](../../../../sources/daangn__websites/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/daangn__websites/tsconfig.json) | config signal |
| config | [careers.jp.karrotmarket.com/package.json](../../../../sources/daangn__websites/careers.jp.karrotmarket.com/package.json) | config signal |
| config | [careers.jp.karrotmarket.com/tsconfig.json](../../../../sources/daangn__websites/careers.jp.karrotmarket.com/tsconfig.json) | config signal |
| docs | [README.md](../../../../sources/daangn__websites/README.md) | docs signal |
| docs | [_workers/README.md](../../../../sources/daangn__websites/_workers/README.md) | docs signal |
| docs | [_workers/websites-integration/README.md](../../../../sources/daangn__websites/_workers/websites-integration/README.md) | docs signal |
| docs | [_workers/greenhouse-proxy-worker/README.md](../../../../sources/daangn__websites/_workers/greenhouse-proxy-worker/README.md) | docs signal |
| eval | [_packages/@karrotmarket/gatsby-transformer-job-post/__tests__/greenhouseJobBlockParser.ts](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-transformer-job-post/__tests__/greenhouseJobBlockParser.ts) | eval signal |
| ci | [.github/workflows/about_daangn_com-build.yml](../../../../sources/daangn__websites/.github/workflows/about_daangn_com-build.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [_workers/websites-integration/src/main.ts](../../../../sources/daangn__websites/_workers/websites-integration/src/main.ts)<br>[_workers/prismic-image-proxy/src/main.ts](../../../../sources/daangn__websites/_workers/prismic-image-proxy/src/main.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 12 | [about.daangn.com/src/pages/index.tsx](../../../../sources/daangn__websites/about.daangn.com/src/pages/index.tsx)<br>[_template/src/pages/index.tsx](../../../../sources/daangn__websites/_template/src/pages/index.tsx)<br>[_packages/@karrotmarket/gatsby-transformer-post/index.js](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-transformer-post/index.js)<br>[_packages/@karrotmarket/gatsby-transformer-job-post/index.js](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-transformer-job-post/index.js)<br>[_packages/@karrotmarket/gatsby-theme-website-team/index.js](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-website-team/index.js)<br>[_packages/@karrotmarket/gatsby-theme-website-team/src/translation/index.ts](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-website-team/src/translation/index.ts)<br>[_packages/@karrotmarket/gatsby-theme-website-team/src/pages/index.tsx](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-website-team/src/pages/index.tsx)<br>[_packages/@karrotmarket/gatsby-theme-website-team/src/layouts/index.tsx](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-website-team/src/layouts/index.tsx) |
| spec | 13 | [_packages/@karrotmarket/gatsby-theme-seed-design/.gitattributes](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/.gitattributes)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/gatsby-config.mjs](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/gatsby-config.mjs)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/gatsby-ssr.tsx](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/gatsby-ssr.tsx)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/icon.config.yml](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/icon.config.yml)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/index.js](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/index.js)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/package.json](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/package.json)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/README.md](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/README.md)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/tsconfig.json](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/tsconfig.json) |
| eval | 1 | [_packages/@karrotmarket/gatsby-transformer-job-post/__tests__/greenhouseJobBlockParser.ts](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-transformer-job-post/__tests__/greenhouseJobBlockParser.ts) |
| security | 0 | 명확하지 않음 |
| ci | 4 | [.github/workflows/about_daangn_com-build.yml](../../../../sources/daangn__websites/.github/workflows/about_daangn_com-build.yml)<br>[.github/workflows/about_daangn_com-cache.yml](../../../../sources/daangn__websites/.github/workflows/about_daangn_com-cache.yml)<br>[.github/workflows/deploy-greenhouse-proxy-worker.yml](../../../../sources/daangn__websites/.github/workflows/deploy-greenhouse-proxy-worker.yml)<br>[.github/workflows/integration.yml](../../../../sources/daangn__websites/.github/workflows/integration.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 6 | [README.md](../../../../sources/daangn__websites/README.md)<br>[_workers/README.md](../../../../sources/daangn__websites/_workers/README.md)<br>[_workers/websites-integration/README.md](../../../../sources/daangn__websites/_workers/websites-integration/README.md)<br>[_workers/greenhouse-proxy-worker/README.md](../../../../sources/daangn__websites/_workers/greenhouse-proxy-worker/README.md)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/README.md](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/README.md)<br>[_packages/@karrotmarket/gatsby-theme-seed-design/docs/theme-composition.webp](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-theme-seed-design/docs/theme-composition.webp) |
| config | 30 | [package.json](../../../../sources/daangn__websites/package.json)<br>[tsconfig.json](../../../../sources/daangn__websites/tsconfig.json)<br>[careers.jp.karrotmarket.com/package.json](../../../../sources/daangn__websites/careers.jp.karrotmarket.com/package.json)<br>[careers.jp.karrotmarket.com/tsconfig.json](../../../../sources/daangn__websites/careers.jp.karrotmarket.com/tsconfig.json)<br>[careers.ca.karrotmarket.com/package.json](../../../../sources/daangn__websites/careers.ca.karrotmarket.com/package.json)<br>[careers.ca.karrotmarket.com/tsconfig.json](../../../../sources/daangn__websites/careers.ca.karrotmarket.com/tsconfig.json)<br>[about.daangn.com/package.json](../../../../sources/daangn__websites/about.daangn.com/package.json)<br>[about.daangn.com/tsconfig.json](../../../../sources/daangn__websites/about.daangn.com/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1 | [_packages/@karrotmarket/gatsby-transformer-job-post/__tests__/greenhouseJobBlockParser.ts](../../../../sources/daangn__websites/_packages/@karrotmarket/gatsby-transformer-job-post/__tests__/greenhouseJobBlockParser.ts) |
| CI workflow | 4 | [.github/workflows/about_daangn_com-build.yml](../../../../sources/daangn__websites/.github/workflows/about_daangn_com-build.yml)<br>[.github/workflows/about_daangn_com-cache.yml](../../../../sources/daangn__websites/.github/workflows/about_daangn_com-cache.yml)<br>[.github/workflows/deploy-greenhouse-proxy-worker.yml](../../../../sources/daangn__websites/.github/workflows/deploy-greenhouse-proxy-worker.yml)<br>[.github/workflows/integration.yml](../../../../sources/daangn__websites/.github/workflows/integration.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `_workers/websites-integration/src/main.ts`, `_workers/prismic-image-proxy/src/main.ts`, `package.json`.
2. entrypoint를 따라 실행 흐름 확인: `_workers/websites-integration/src/main.ts`, `_workers/prismic-image-proxy/src/main.ts`.
3. retrieval/memory/indexing 확인: `about.daangn.com/src/pages/index.tsx`, `_template/src/pages/index.tsx`, `_packages/@karrotmarket/gatsby-transformer-post/index.js`.
4. test/eval 파일로 동작 검증: `_packages/@karrotmarket/gatsby-transformer-job-post/__tests__/greenhouseJobBlockParser.ts`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Daangn on the WWW. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
