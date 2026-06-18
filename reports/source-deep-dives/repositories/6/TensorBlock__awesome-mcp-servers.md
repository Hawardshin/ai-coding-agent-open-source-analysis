# TensorBlock/awesome-mcp-servers 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

A comprehensive collection of Model Context Protocol (MCP) servers

## 요약

- 조사 단위: `sources/TensorBlock__awesome-mcp-servers` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 7,629 files, 28 directories, depth score 110, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/registry-mcp/test/server.test.ts, packages/registry-mcp/src/server.ts, data/server-metadata/bitcompare-net-mcp-1db77cc7.json이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | TensorBlock/awesome-mcp-servers |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 746 |
| Forks | 503 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/TensorBlock__awesome-mcp-servers](../../../../sources/TensorBlock__awesome-mcp-servers) |
| 기존 보고서 | [reports/global-trending/repositories/TensorBlock__awesome-mcp-servers.md](../../../global-trending/repositories/TensorBlock__awesome-mcp-servers.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 7629 / 28 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, data, docs, packages, schemas |
| 상위 확장자 | .json: 7523, .md: 41, .ts: 28, .mjs: 19, .yml: 16, (none): 2 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 46 |
| packages/registry-api | packages workspace | 6 |
| packages/catalog-builder | packages workspace | 5 |
| packages/registry-mcp | packages workspace | 5 |
| packages/config-generator | packages workspace | 2 |
| packages/profile-renderer | packages workspace | 2 |
| .github | ci surface | 1 |
| data | top-level component | 1 |
| packages | source boundary | 1 |
| schemas | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc -p tsconfig.base.json |
| test | package.json | test | vitest run --passWithNoTests |
| quality | package.json | typecheck | tsc -p tsconfig.base.json --noEmit |
| build | package.json | catalog:build | tsx packages/catalog-builder/src/cli.ts |
| quality | package.json | catalog:health | node .github/scripts/check-catalog-health.mjs |
| build | package.json | profiles:build | tsx packages/profile-renderer/src/cli.ts |
| utility | package.json | config:generate | tsx packages/config-generator/src/cli.ts |
| serve-dev | package.json | registry:mcp | tsx packages/registry-mcp/src/server.ts |
| serve-dev | package.json | registry:api | node dist-ts/packages/registry-api/src/server.js |
| serve-dev | package.json | registry:api:dev | tsx packages/registry-api/src/server.ts |
| serve-dev | package.json | start | npm run registry:api |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
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
| mcp | [packages/registry-mcp/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/test/server.test.ts) | mcp signal |
| mcp | [packages/registry-mcp/src/server.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/src/server.ts) | mcp signal |
| mcp | [data/server-metadata/bitcompare-net-mcp-1db77cc7.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/bitcompare-net-mcp-1db77cc7.json) | mcp signal |
| mcp | [data/server-metadata/emile-wine-mcp-0f8bfe89.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/emile-wine-mcp-0f8bfe89.json) | mcp signal |
| entrypoints | [schemas/server.schema.json](../../../../sources/TensorBlock__awesome-mcp-servers/schemas/server.schema.json) | entrypoints signal |
| entrypoints | [packages/registry-api/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/server.test.ts) | entrypoints signal |
| config | [package.json](../../../../sources/TensorBlock__awesome-mcp-servers/package.json) | config signal |
| ci | [.github/workflows/add-server-issue-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/add-server-issue-pr.yml) | ci support |
| ci | [.github/workflows/broken-entry-report-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/broken-entry-report-pr.yml) | ci support |
| eval | [packages/registry-api/test/badge.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/badge.test.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 8 | [schemas/server.schema.json](../../../../sources/TensorBlock__awesome-mcp-servers/schemas/server.schema.json)<br>[packages/registry-mcp/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/test/server.test.ts)<br>[packages/registry-mcp/src/server.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/src/server.ts)<br>[packages/registry-api/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/server.test.ts)<br>[packages/registry-api/src/server.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/src/server.ts)<br>[packages/profile-renderer/src/cli.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/profile-renderer/src/cli.ts)<br>[packages/config-generator/src/cli.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/config-generator/src/cli.ts)<br>[packages/catalog-builder/src/cli.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/catalog-builder/src/cli.ts) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 6240 | [packages/registry-mcp/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/test/server.test.ts)<br>[packages/registry-mcp/src/server.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/src/server.ts)<br>[data/server-metadata/bitcompare-net-mcp-1db77cc7.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/bitcompare-net-mcp-1db77cc7.json)<br>[data/server-metadata/emile-wine-mcp-0f8bfe89.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/emile-wine-mcp-0f8bfe89.json)<br>[data/server-metadata/github-alvisooculus-optionsahoy-mcp-7af553c8.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/github-alvisooculus-optionsahoy-mcp-7af553c8.json)<br>[data/server-metadata/github-getxapi-getxapi-mcp-d0b54b6c.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/github-getxapi-getxapi-mcp-d0b54b6c.json)<br>[data/server-metadata/github-ipythoning-domain-monitor-mcp-server-48496711.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/github-ipythoning-domain-monitor-mcp-server-48496711.json)<br>[data/server-metadata/github-kaitoinfra-twitterapi-io-mcp-server-6e3365ac.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/server-metadata/github-kaitoinfra-twitterapi-io-mcp-server-6e3365ac.json) |
| retrieval | 102 | [docs/index-api.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/index-api.md)<br>[docs/knowledge-management--memory.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/knowledge-management--memory.md)<br>[docs/index-alpha/contribution-guide.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/index-alpha/contribution-guide.md)<br>[data/profiles/github-0xluluv587-empyrical-mcp-knowledge-base-59d1a0c1.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-0xluluv587-empyrical-mcp-knowledge-base-59d1a0c1.json)<br>[data/profiles/github-aaronsb-memory-graph-c979c229.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-aaronsb-memory-graph-c979c229.json)<br>[data/profiles/github-abeyuya-memory-bank-loader-mcp-124e1d3e.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-abeyuya-memory-bank-loader-mcp-124e1d3e.json)<br>[data/profiles/github-adhikasp-mcp-git-ingest-307e3374.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-adhikasp-mcp-git-ingest-307e3374.json)<br>[data/profiles/github-agentwong-iac-memory-mcp-server-681e118c.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-agentwong-iac-memory-mcp-server-681e118c.json) |
| spec | 7 | [data/profiles/github-captaincrouton89-requirements-gathering-c8f1f428.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-captaincrouton89-requirements-gathering-c8f1f428.json)<br>[data/profiles/github-mastergo-design-mastergo-magic-mcp-13474643.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-mastergo-design-mastergo-magic-mcp-13474643.json)<br>[data/profiles/github-saml1211-prd-mcp-server-e7871a8d.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-saml1211-prd-mcp-server-e7871a8d.json)<br>[data/profiles/github-ssaitho-design-system-mcp-sandbox-858b6ac7.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-ssaitho-design-system-mcp-sandbox-858b6ac7.json)<br>[data/profiles/github-unixlamadev-spec-aiprox-mcp-3aa8abc2.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-unixlamadev-spec-aiprox-mcp-3aa8abc2.json)<br>[data/profiles/github-unixlamadev-spec-lightningprox-mcp-035b66dd.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-unixlamadev-spec-lightningprox-mcp-035b66dd.json)<br>[data/profiles/github-unixlamadev-spec-lpxpoly-mcp-bb693940.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-unixlamadev-spec-lpxpoly-mcp-bb693940.json) |
| eval | 91 | [packages/registry-mcp/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/test/server.test.ts)<br>[packages/registry-api/test/badge.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/badge.test.ts)<br>[packages/registry-api/test/profilePage.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/profilePage.test.ts)<br>[packages/registry-api/test/search.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/search.test.ts)<br>[packages/registry-api/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/server.test.ts)<br>[packages/profile-renderer/test/renderProfiles.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/profile-renderer/test/renderProfiles.test.ts)<br>[packages/config-generator/test/generateConfig.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/config-generator/test/generateConfig.test.ts)<br>[packages/catalog-builder/test/buildCatalog.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/catalog-builder/test/buildCatalog.test.ts) |
| security | 36 | [docs/security.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/security.md)<br>[data/profiles/github-302ai-302-sandbox-mcp-f13f40a3.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-302ai-302-sandbox-mcp-f13f40a3.json)<br>[data/profiles/github-alfonsograziano-node-code-sandbox-mcp-8addc7a1.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-alfonsograziano-node-code-sandbox-mcp-8addc7a1.json)<br>[data/profiles/github-atamaplus-public-mcp-guardrail-9929d4bc.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-atamaplus-public-mcp-guardrail-9929d4bc.json)<br>[data/profiles/github-automata-labs-team-code-sandbox-mcp-16bcfa0c.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-automata-labs-team-code-sandbox-mcp-16bcfa0c.json)<br>[data/profiles/github-bewt85-mcp-deno-sandbox-f520401e.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-bewt85-mcp-deno-sandbox-f520401e.json)<br>[data/profiles/github-chrishayuk-mcp-code-sandbox-31185c8d.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-chrishayuk-mcp-code-sandbox-31185c8d.json)<br>[data/profiles/github-cloudywu0410-python-sandbox-mcp-server-bf4b5223.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-cloudywu0410-python-sandbox-mcp-server-bf4b5223.json) |
| ci | 10 | [.github/workflows/add-server-issue-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/add-server-issue-pr.yml)<br>[.github/workflows/broken-entry-report-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/broken-entry-report-pr.yml)<br>[.github/workflows/catalog-health-check.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/catalog-health-check.yml)<br>[.github/workflows/claim-profile-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/claim-profile-pr.yml)<br>[.github/workflows/client-config-request-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/client-config-request-pr.yml)<br>[.github/workflows/deploy-registry-api.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/deploy-registry-api.yml)<br>[.github/workflows/improve-metadata-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/improve-metadata-pr.yml)<br>[.github/workflows/issue-triage.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/issue-triage.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 41 | [README.md](../../../../sources/TensorBlock__awesome-mcp-servers/README.md)<br>[docs/ai--llm-integration.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/ai--llm-integration.md)<br>[docs/art-culture--media.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/art-culture--media.md)<br>[docs/browser-automation--web-scraping.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/browser-automation--web-scraping.md)<br>[docs/build--deployment-tools.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/build--deployment-tools.md)<br>[docs/cloud-platforms--services.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/cloud-platforms--services.md)<br>[docs/code-analysis--quality.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/code-analysis--quality.md)<br>[docs/code-execution.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/code-execution.md) |
| config | 1 | [package.json](../../../../sources/TensorBlock__awesome-mcp-servers/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 91 | [packages/registry-mcp/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-mcp/test/server.test.ts)<br>[packages/registry-api/test/badge.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/badge.test.ts)<br>[packages/registry-api/test/profilePage.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/profilePage.test.ts)<br>[packages/registry-api/test/search.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/search.test.ts)<br>[packages/registry-api/test/server.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/registry-api/test/server.test.ts)<br>[packages/profile-renderer/test/renderProfiles.test.ts](../../../../sources/TensorBlock__awesome-mcp-servers/packages/profile-renderer/test/renderProfiles.test.ts) |
| CI workflow | 10 | [.github/workflows/add-server-issue-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/add-server-issue-pr.yml)<br>[.github/workflows/broken-entry-report-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/broken-entry-report-pr.yml)<br>[.github/workflows/catalog-health-check.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/catalog-health-check.yml)<br>[.github/workflows/claim-profile-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/claim-profile-pr.yml)<br>[.github/workflows/client-config-request-pr.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/client-config-request-pr.yml)<br>[.github/workflows/deploy-registry-api.yml](../../../../sources/TensorBlock__awesome-mcp-servers/.github/workflows/deploy-registry-api.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 36 | [docs/security.md](../../../../sources/TensorBlock__awesome-mcp-servers/docs/security.md)<br>[data/profiles/github-302ai-302-sandbox-mcp-f13f40a3.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-302ai-302-sandbox-mcp-f13f40a3.json)<br>[data/profiles/github-alfonsograziano-node-code-sandbox-mcp-8addc7a1.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-alfonsograziano-node-code-sandbox-mcp-8addc7a1.json)<br>[data/profiles/github-atamaplus-public-mcp-guardrail-9929d4bc.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-atamaplus-public-mcp-guardrail-9929d4bc.json)<br>[data/profiles/github-automata-labs-team-code-sandbox-mcp-16bcfa0c.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-automata-labs-team-code-sandbox-mcp-16bcfa0c.json)<br>[data/profiles/github-bewt85-mcp-deno-sandbox-f520401e.json](../../../../sources/TensorBlock__awesome-mcp-servers/data/profiles/github-bewt85-mcp-deno-sandbox-f520401e.json) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `packages/registry-mcp/test/server.test.ts`, `packages/registry-mcp/src/server.ts`, `data/server-metadata/bitcompare-net-mcp-1db77cc7.json`.
2. entrypoint를 따라 실행 흐름 확인: `schemas/server.schema.json`, `packages/registry-mcp/test/server.test.ts`, `packages/registry-mcp/src/server.ts`.
3. retrieval/memory/indexing 확인: `docs/index-api.md`, `docs/knowledge-management--memory.md`, `docs/index-alpha/contribution-guide.md`.
4. test/eval 파일로 동작 검증: `packages/registry-mcp/test/server.test.ts`, `packages/registry-api/test/badge.test.ts`, `packages/registry-api/test/profilePage.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A comprehensive collection of Model Context Protocol MCP servers. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
