# modelcontextprotocol/modelcontextprotocol 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Specification and documentation for the Model Context Protocol

## 요약

- 조사 단위: `sources/modelcontextprotocol__modelcontextprotocol` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 624 files, 206 directories, depth score 111, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=seps/1024-mcp-client-security-requirements-for-local-server-.md, seps/1865-mcp-apps-interactive-user-interfaces-for-mcp.md, seps/2567-sessionless-mcp.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | modelcontextprotocol/modelcontextprotocol |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 8418 |
| Forks | 1593 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/modelcontextprotocol__modelcontextprotocol](../../../../sources/modelcontextprotocol__modelcontextprotocol) |
| 기존 보고서 | [reports/global-trending/repositories/modelcontextprotocol__modelcontextprotocol.md](../../../global-trending/repositories/modelcontextprotocol__modelcontextprotocol.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 624 / 206 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude-plugin, .github, blog, docs, plugins, schema, scripts, seps, tools |
| 상위 확장자 | .mdx: 218, .json: 142, .md: 79, .png: 52, .ts: 37, .yml: 18, .html: 16, .svg: 15, (none): 12, .gif: 9, .webp: 8, .jpg: 3 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 116 |
| .github | ci surface | 1 |
| blog | top-level component | 1 |
| plugins | top-level component | 1 |
| schema | top-level component | 1 |
| scripts | top-level component | 1 |
| seps | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | generate | npm run generate:schema && npm run generate:seps |
| utility | package.json | generate:schema | npm run generate:schema:json & npm run generate:schema:md & wait |
| utility | package.json | generate:schema:json | tsx scripts/generate-schemas.ts |
| test | package.json | generate:schema:md | find schema/*/schema.mdx -print0 \| xargs -0 -P 0 -I {} sh -c 'f="{}"; typedoc --entryPoints "${f%.mdx}.ts" --schemaPageTemplate "$f" > docs/specification/$(basename -- $(dirname -- "$f"))/schema.mdx' |
| utility | package.json | generate:seps | tsx scripts/render-seps.ts |
| quality | package.json | format | npm run format:docs && npm run format:schema |
| quality | package.json | format:docs | prettier --write "**/*.{md,mdx}" --ignore-path .prettierignore |
| quality | package.json | format:schema | prettier --write "schema/**/*.ts" |
| quality | package.json | check | npm run check:schema && npm run check:docs && npm run check:seps |
| quality | package.json | check:schema | npm run check:schema:ts && npm run check:schema:json && npm run check:schema:examples && npm run check:schema:md |
| quality | package.json | check:schema:ts | tsc --noEmit && eslint schema/ && prettier --check "schema/**/*.ts" |
| quality | package.json | check:schema:json | tsx scripts/generate-schemas.ts --check |
| quality | package.json | check:schema:examples | tsx scripts/validate-examples.ts |
| test | package.json | check:schema:md | for f in schema/*/schema.mdx; do typedoc --entryPoints "${f%.mdx}.ts" --schemaPageTemplate "$f" \| cmp docs/specification/$(basename -- $(dirname -- "$f"))/schema.mdx - \|\| exit 1; done |
| quality | package.json | check:docs | npm run check:docs:format && npm run check:docs:js-comments && npm run check:docs:links |
| quality | package.json | check:docs:format | prettier --check "**/*.{md,mdx}" |
| quality | package.json | check:docs:js-comments | tsx scripts/check-mdx-comments.ts |
| quality | package.json | check:docs:links | cd docs && npx mint broken-links |
| quality | package.json | check:seps | tsx scripts/render-seps.ts --check |
| serve-dev | package.json | serve:docs | cd docs && npx mint dev |
| serve-dev | package.json | serve:blog | cd blog && hugo serve |
| quality | package.json | prep | npm run check:schema:ts && npm run generate && npm run check:docs && npm run check:seps && npm run format |


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
| mcp | [seps/1024-mcp-client-security-requirements-for-local-server-.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1024-mcp-client-security-requirements-for-local-server-.md) | mcp signal |
| mcp | [seps/1865-mcp-apps-interactive-user-interfaces-for-mcp.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1865-mcp-apps-interactive-user-interfaces-for-mcp.md) | mcp signal |
| mcp | [seps/2567-sessionless-mcp.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2567-sessionless-mcp.md) | mcp signal |
| mcp | [seps/2575-stateless-mcp.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2575-stateless-mcp.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/sep-automation/.gitignore](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/.gitignore) | agentRuntime signal |
| agentRuntime | [tools/sep-automation/package-lock.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/package-lock.json) | agentRuntime signal |
| agentRuntime | [tools/sep-automation/package.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/package.json) | agentRuntime signal |
| entrypoints | [tools/sep-automation/src/index.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tsconfig.json) | config signal |
| config | [tools/sep-automation/tsconfig.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [tools/sep-automation/src/index.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/src/index.ts) |
| agentRuntime | 58 | [AGENTS.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/AGENTS.md)<br>[tools/sep-automation/.gitignore](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/.gitignore)<br>[tools/sep-automation/package-lock.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/package-lock.json)<br>[tools/sep-automation/package.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/package.json)<br>[tools/sep-automation/tsconfig.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/tsconfig.json)<br>[tools/sep-automation/vitest.config.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/vitest.config.ts)<br>[tools/sep-automation/test/mocks.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/mocks.ts)<br>[tools/sep-automation/test/unit/comment.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/comment.test.ts) |
| mcp | 49 | [seps/1024-mcp-client-security-requirements-for-local-server-.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1024-mcp-client-security-requirements-for-local-server-.md)<br>[seps/1865-mcp-apps-interactive-user-interfaces-for-mcp.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1865-mcp-apps-interactive-user-interfaces-for-mcp.md)<br>[seps/2567-sessionless-mcp.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2567-sessionless-mcp.md)<br>[seps/2575-stateless-mcp.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2575-stateless-mcp.md)<br>[seps/932-model-context-protocol-governance.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/932-model-context-protocol-governance.md)<br>[seps/990-enable-enterprise-idp-policy-controls-during-mcp-o.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/990-enable-enterprise-idp-policy-controls-during-mcp-o.md)<br>[plugins/mcp-spec/README.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/plugins/mcp-spec/README.md)<br>[plugins/mcp-spec/skills/search-mcp-github/SKILL.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/plugins/mcp-spec/skills/search-mcp-github/SKILL.md) |
| retrieval | 29 | [tools/sep-automation/src/index.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/src/index.ts)<br>[tools/sep-automation/src/utils/index.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/src/utils/index.ts)<br>[docs/specification/draft/index.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/index.mdx)<br>[docs/specification/draft/server/index.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/server/index.mdx)<br>[docs/specification/draft/basic/index.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/basic/index.mdx)<br>[docs/specification/draft/basic/transports/index.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/basic/transports/index.mdx)<br>[docs/specification/draft/basic/patterns/index.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/basic/patterns/index.mdx)<br>[docs/specification/draft/basic/authorization/index.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/basic/authorization/index.mdx) |
| spec | 20 | [seps/1024-mcp-client-security-requirements-for-local-server-.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1024-mcp-client-security-requirements-for-local-server-.md)<br>[seps/2596-spec-feature-lifecycle-and-deprecation.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2596-spec-feature-lifecycle-and-deprecation.md)<br>[plugins/mcp-spec/README.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/plugins/mcp-spec/README.md)<br>[plugins/mcp-spec/skills/search-mcp-github/SKILL.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/plugins/mcp-spec/skills/search-mcp-github/SKILL.md)<br>[plugins/mcp-spec/skills/draft-sep/SKILL.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/plugins/mcp-spec/skills/draft-sep/SKILL.md)<br>[plugins/mcp-spec/.claude-plugin/plugin.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/plugins/mcp-spec/.claude-plugin/plugin.json)<br>[docs/spec-version-warning.js](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/spec-version-warning.js)<br>[docs/specification/draft/architecture/index.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/architecture/index.mdx) |
| eval | 17 | [tools/sep-automation/test/mocks.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/mocks.ts)<br>[tools/sep-automation/test/unit/comment.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/comment.test.ts)<br>[tools/sep-automation/test/unit/config.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/config.test.ts)<br>[tools/sep-automation/test/unit/hooks.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/hooks.test.ts)<br>[tools/sep-automation/test/unit/ping.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/ping.test.ts)<br>[tools/sep-automation/test/unit/sep-types.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/sep-types.test.ts)<br>[tools/sep-automation/test/unit/transition.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/transition.test.ts)<br>[seps/2484-conformance-tests-required-for-final-seps.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2484-conformance-tests-required-for-final-seps.md) |
| security | 25 | [SECURITY.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/SECURITY.md)<br>[seps/1024-mcp-client-security-requirements-for-local-server-.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1024-mcp-client-security-requirements-for-local-server-.md)<br>[seps/1046-support-oauth-client-credentials-flow-in-authoriza.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1046-support-oauth-client-credentials-flow-in-authoriza.md)<br>[seps/2468-recommend-issuer-claim-for-auth.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2468-recommend-issuer-claim-for-auth.md)<br>[seps/985-align-oauth-20-protected-resource-metadata-with-rf.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/985-align-oauth-20-protected-resource-metadata-with-rf.md)<br>[seps/990-enable-enterprise-idp-policy-controls-during-mcp-o.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/990-enable-enterprise-idp-policy-controls-during-mcp-o.md)<br>[seps/991-enable-url-based-client-registration-using-oauth-c.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/991-enable-url-based-client-registration-using-oauth-c.md)<br>[docs/specification/draft/basic/authorization/security-considerations.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/specification/draft/basic/authorization/security-considerations.mdx) |
| ci | 13 | [.github/workflows/blog-preview.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/blog-preview.yml)<br>[.github/workflows/cut-release.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/cut-release.yml)<br>[.github/workflows/deploy-blog.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/deploy-blog.yml)<br>[.github/workflows/labeler.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/labeler.yml)<br>[.github/workflows/main.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/main.yml)<br>[.github/workflows/markdown-format.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/markdown-format.yml)<br>[.github/workflows/publish-release.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/publish-release.yml)<br>[.github/workflows/render-seps.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/render-seps.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/AGENTS.md) |
| docs | 286 | [README.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/README.md)<br>[seps/README.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/README.md)<br>[plugins/mcp-spec/README.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/plugins/mcp-spec/README.md)<br>[docs/docs.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/docs.json)<br>[docs/examples.mdx](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/examples.mdx)<br>[docs/favicon.svg](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/favicon.svg)<br>[docs/footer.js](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/footer.js)<br>[docs/mcp.png](../../../../sources/modelcontextprotocol__modelcontextprotocol/docs/mcp.png) |
| config | 5 | [package.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/package.json)<br>[tsconfig.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tsconfig.json)<br>[tools/sep-automation/package.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/package.json)<br>[tools/sep-automation/tsconfig.json](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/tsconfig.json)<br>[blog/go.mod](../../../../sources/modelcontextprotocol__modelcontextprotocol/blog/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 17 | [tools/sep-automation/test/mocks.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/mocks.ts)<br>[tools/sep-automation/test/unit/comment.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/comment.test.ts)<br>[tools/sep-automation/test/unit/config.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/config.test.ts)<br>[tools/sep-automation/test/unit/hooks.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/hooks.test.ts)<br>[tools/sep-automation/test/unit/ping.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/ping.test.ts)<br>[tools/sep-automation/test/unit/sep-types.test.ts](../../../../sources/modelcontextprotocol__modelcontextprotocol/tools/sep-automation/test/unit/sep-types.test.ts) |
| CI workflow | 13 | [.github/workflows/blog-preview.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/blog-preview.yml)<br>[.github/workflows/cut-release.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/cut-release.yml)<br>[.github/workflows/deploy-blog.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/deploy-blog.yml)<br>[.github/workflows/labeler.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/labeler.yml)<br>[.github/workflows/main.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/main.yml)<br>[.github/workflows/markdown-format.yml](../../../../sources/modelcontextprotocol__modelcontextprotocol/.github/workflows/markdown-format.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 25 | [SECURITY.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/SECURITY.md)<br>[seps/1024-mcp-client-security-requirements-for-local-server-.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1024-mcp-client-security-requirements-for-local-server-.md)<br>[seps/1046-support-oauth-client-credentials-flow-in-authoriza.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/1046-support-oauth-client-credentials-flow-in-authoriza.md)<br>[seps/2468-recommend-issuer-claim-for-auth.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/2468-recommend-issuer-claim-for-auth.md)<br>[seps/985-align-oauth-20-protected-resource-metadata-with-rf.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/985-align-oauth-20-protected-resource-metadata-with-rf.md)<br>[seps/990-enable-enterprise-idp-policy-controls-during-mcp-o.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/seps/990-enable-enterprise-idp-policy-controls-during-mcp-o.md) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/modelcontextprotocol__modelcontextprotocol/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `seps/1024-mcp-client-security-requirements-for-local-server-.md`, `seps/1865-mcp-apps-interactive-user-interfaces-for-mcp.md`, `seps/2567-sessionless-mcp.md`.
2. entrypoint를 따라 실행 흐름 확인: `tools/sep-automation/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/sep-automation/.gitignore`, `tools/sep-automation/package-lock.json`.
4. retrieval/memory/indexing 확인: `tools/sep-automation/src/index.ts`, `tools/sep-automation/src/utils/index.ts`, `docs/specification/draft/index.mdx`.
5. test/eval 파일로 동작 검증: `tools/sep-automation/test/mocks.ts`, `tools/sep-automation/test/unit/comment.test.ts`, `tools/sep-automation/test/unit/config.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Specification and documentation for the Model Context Protocol. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
