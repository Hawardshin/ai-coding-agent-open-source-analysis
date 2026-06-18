# giselles-ai/giselle 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Giselle: AI App Builder. Open Source.

## 요약

- 조사 단위: `sources/giselles-ai__giselle` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,938 files, 495 directories, depth score 115, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, tools/tsconfig/node-library.json, tools/tsconfig/package.json이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | giselles-ai/giselle |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 535 |
| Forks | 123 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/giselles-ai__giselle](../../../../sources/giselles-ai__giselle) |
| 기존 보고서 | [reports/global-trending/repositories/giselles-ai__giselle.md](../../../global-trending/repositories/giselles-ai__giselle.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1938 / 495 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .changeset, .claude, .continuity, .cursor, .github, .zed, apps, config, docs, internal-packages, packages, scripts, tools, turbo |
| 상위 확장자 | .ts: 889, .tsx: 510, .json: 189, .md: 129, .sql: 80, .png: 31, .txt: 18, .jpg: 14, .yml: 12, (none): 12, .mjs: 11, .mdc: 8 |
| 소스 패턴 | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 38 |
| apps/studio.giselles.ai | apps workspace | 31 |
| packages/react | packages workspace | 30 |
| packages/rag | packages workspace | 15 |
| packages/giselle | packages workspace | 13 |
| packages/language-model-registry | packages workspace | 10 |
| packages/web-search | packages workspace | 10 |
| packages/workspace-utils | packages workspace | 9 |
| packages/pseudo-tiktoken | packages workspace | 8 |
| packages/language-model | packages workspace | 7 |
| packages/sdk | packages workspace | 7 |
| packages/storage | packages workspace | 7 |
| packages/text-editor-utils | packages workspace | 7 |
| packages/protocol | packages workspace | 6 |
| packages/supabase-driver | packages workspace | 6 |
| packages/stream | packages workspace | 5 |
| packages/trigger-registry | packages workspace | 5 |
| packages/utils | packages workspace | 5 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | turbo build |
| build | package.json | build-sdk | turbo build --filter '@giselles-ai/*' |
| build | package.json | build-data-type | turbo build --filter '@giselles-ai/protocol' |
| quality | package.json | check-types | turbo check-types |
| quality | package.json | format | biome check --write . |
| utility | package.json | clean | turbo clean |
| serve-dev | package.json | dev:studio.giselles.ai | NODE_NO_WARNINGS=1 turbo dev --filter studio.giselles.ai |
| utility | package.json | changeset | changeset |
| utility | package.json | version | changeset version |
| test | package.json | test | turbo test |
| utility | package.json | tidy | knip --no-config-hints |
| utility | package.json | strip-workspace | pnpm -F strip-workspace strip-workspace |
| build | package.json | prevd | pnpm i && pnpm build-sdk |
| serve-dev | package.json | vd | vercel dev |
| utility | package.json | report:colors | node scripts/report-colors.mjs |
| utility | package.json | report:colors:out | node scripts/report-colors.mjs --out .reports/report-colors.json |
| utility | package.json | guard:colors | node scripts/guard-colors.mjs |
| quality | package.json | lint:colors:code | node scripts/lint-colors-code.mjs |
| utility | package.json | metrics:count | node scripts/metrics-count.mjs |
| utility | package.json | codemod:text-black-600-20 | node scripts/codemods/replace-text-black-600-20.mjs |
| utility | package.json | codemod:text-black-600-20:apply | node scripts/codemods/replace-text-black-600-20.mjs --apply |
| utility | package.json | codemod:text-white-900 | node scripts/codemods/replace-text-white-900-to-inverse.mjs |
| utility | package.json | codemod:text-white-900:apply | node scripts/codemods/replace-text-white-900-to-inverse.mjs --apply |
| utility | package.json | codemod:safe-pass-1 | node scripts/codemods/safe-pass-1.mjs |
| utility | package.json | codemod:safe-pass-1:apply | node scripts/codemods/safe-pass-1.mjs --apply |
| utility | package.json | report:compat-tokens | node scripts/compat-tokens-inventory.mjs |


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
| agentRuntime | [AGENTS.md](../../../../sources/giselles-ai__giselle/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tools/tsconfig/node-library.json](../../../../sources/giselles-ai__giselle/tools/tsconfig/node-library.json) | agentRuntime signal |
| agentRuntime | [tools/tsconfig/package.json](../../../../sources/giselles-ai__giselle/tools/tsconfig/package.json) | agentRuntime signal |
| agentRuntime | [tools/tsconfig/react-library.json](../../../../sources/giselles-ai__giselle/tools/tsconfig/react-library.json) | agentRuntime signal |
| entrypoints | [packages/workspace-utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/index.ts) | entrypoints signal |
| entrypoints | [packages/web-search/src/index.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/index.ts) | entrypoints signal |
| entrypoints | [packages/vault/src/index.ts](../../../../sources/giselles-ai__giselle/packages/vault/src/index.ts) | entrypoints signal |
| entrypoints | [packages/utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/utils/src/index.ts) | entrypoints signal |
| instruction | [internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md) | instruction signal |
| instruction | [internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md) | instruction signal |
| instruction | [docs/AGENTS.md](../../../../sources/giselles-ai__giselle/docs/AGENTS.md) | instruction signal |
| config | [package.json](../../../../sources/giselles-ai__giselle/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 29 | [packages/workspace-utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/index.ts)<br>[packages/web-search/src/index.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/index.ts)<br>[packages/vault/src/index.ts](../../../../sources/giselles-ai__giselle/packages/vault/src/index.ts)<br>[packages/utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/utils/src/index.ts)<br>[packages/trigger-registry/src/index.ts](../../../../sources/giselles-ai__giselle/packages/trigger-registry/src/index.ts)<br>[packages/text-editor-utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/text-editor-utils/src/index.ts)<br>[packages/supabase-driver/src/index.ts](../../../../sources/giselles-ai__giselle/packages/supabase-driver/src/index.ts)<br>[packages/stream/src/index.ts](../../../../sources/giselles-ai__giselle/packages/stream/src/index.ts) |
| agentRuntime | 461 | [AGENTS.md](../../../../sources/giselles-ai__giselle/AGENTS.md)<br>[tools/tsconfig/node-library.json](../../../../sources/giselles-ai__giselle/tools/tsconfig/node-library.json)<br>[tools/tsconfig/package.json](../../../../sources/giselles-ai__giselle/tools/tsconfig/package.json)<br>[tools/tsconfig/react-library.json](../../../../sources/giselles-ai__giselle/tools/tsconfig/react-library.json)<br>[tools/strip-workspace/cli.ts](../../../../sources/giselles-ai__giselle/tools/strip-workspace/cli.ts)<br>[tools/strip-workspace/package.json](../../../../sources/giselles-ai__giselle/tools/strip-workspace/package.json)<br>[packages/storage/src/memory-storage-driver.ts](../../../../sources/giselles-ai__giselle/packages/storage/src/memory-storage-driver.ts)<br>[packages/react/src/vector-store/context.tsx](../../../../sources/giselles-ai__giselle/packages/react/src/vector-store/context.tsx) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 350 | [packages/workspace-utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/index.ts)<br>[packages/workspace-utils/src/slice-graph-from-node.test.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/slice-graph-from-node.test.ts)<br>[packages/workspace-utils/src/slice-graph-from-node.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/slice-graph-from-node.ts)<br>[packages/web-search/src/index.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/index.ts)<br>[packages/vault/src/index.ts](../../../../sources/giselles-ai__giselle/packages/vault/src/index.ts)<br>[packages/utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/utils/src/index.ts)<br>[packages/trigger-registry/src/index.ts](../../../../sources/giselles-ai__giselle/packages/trigger-registry/src/index.ts)<br>[packages/text-editor-utils/src/index.ts](../../../../sources/giselles-ai__giselle/packages/text-editor-utils/src/index.ts) |
| spec | 16 | [internal-packages/workflow-designer-ui/src/editor/properties-panel/end-node-properties-panel/end-node-properties-panel-spec.md](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/editor/properties-panel/end-node-properties-panel/end-node-properties-panel-spec.md)<br>[docs/design-tokens-guide.md](../../../../sources/giselles-ai__giselle/docs/design-tokens-guide.md)<br>[docs/design-tokens-usage.md](../../../../sources/giselles-ai__giselle/docs/design-tokens-usage.md)<br>[docs/adr/0001-migrate-from-vercel-storage-to-supabase-storage.md](../../../../sources/giselles-ai__giselle/docs/adr/0001-migrate-from-vercel-storage-to-supabase-storage.md)<br>[docs/adr/0002-custom-storage-driver-for-supabase-storage.md](../../../../sources/giselles-ai__giselle/docs/adr/0002-custom-storage-driver-for-supabase-storage.md)<br>[docs/adr/0003-managing-secrets.md](../../../../sources/giselles-ai__giselle/docs/adr/0003-managing-secrets.md)<br>[docs/adr/0004-giselle-storage.md](../../../../sources/giselles-ai__giselle/docs/adr/0004-giselle-storage.md)<br>[apps/studio.giselles.ai/tests/e2e/login-redirect.spec.ts](../../../../sources/giselles-ai__giselle/apps/studio.giselles.ai/tests/e2e/login-redirect.spec.ts) |
| eval | 99 | [packages/workspace-utils/src/group-nodes.test.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/group-nodes.test.ts)<br>[packages/workspace-utils/src/slice-graph-from-node.test.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/slice-graph-from-node.test.ts)<br>[packages/web-search/src/self-made.integration.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/self-made.integration.test.ts)<br>[packages/web-search/src/self-made.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/self-made.test.ts)<br>[packages/web-search/src/validate-url.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/validate-url.test.ts)<br>[packages/web-search/src/web-search.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/web-search.test.ts)<br>[packages/sdk/src/sdk.test.ts](../../../../sources/giselles-ai__giselle/packages/sdk/src/sdk.test.ts)<br>[packages/react/src/workspace/utils/is-supported-connection.test.ts](../../../../sources/giselles-ai__giselle/packages/react/src/workspace/utils/is-supported-connection.test.ts) |
| security | 32 | [SECURITY.md](../../../../sources/giselles-ai__giselle/SECURITY.md)<br>[scripts/guard-colors.mjs](../../../../sources/giselles-ai__giselle/scripts/guard-colors.mjs)<br>[packages/protocol/src/secret/index.ts](../../../../sources/giselles-ai__giselle/packages/protocol/src/secret/index.ts)<br>[packages/giselle/src/secrets/add-secret.ts](../../../../sources/giselles-ai__giselle/packages/giselle/src/secrets/add-secret.ts)<br>[packages/giselle/src/secrets/decrypt-secret.ts](../../../../sources/giselles-ai__giselle/packages/giselle/src/secrets/decrypt-secret.ts)<br>[packages/giselle/src/secrets/delete-secret.ts](../../../../sources/giselles-ai__giselle/packages/giselle/src/secrets/delete-secret.ts)<br>[internal-packages/workflow-designer-ui/src/editor/secret/secret-table.tsx](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/editor/secret/secret-table.tsx)<br>[internal-packages/workflow-designer-ui/src/app-designer/store/usecases/use-add-secret.ts](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/app-designer/store/usecases/use-add-secret.ts) |
| ci | 7 | [.github/workflows/ci.yml](../../../../sources/giselles-ai__giselle/.github/workflows/ci.yml)<br>[.github/workflows/create_issue_security_txt.yml](../../../../sources/giselles-ai__giselle/.github/workflows/create_issue_security_txt.yml)<br>[.github/workflows/e2e.yml](../../../../sources/giselles-ai__giselle/.github/workflows/e2e.yml)<br>[.github/workflows/license.yml](../../../../sources/giselles-ai__giselle/.github/workflows/license.yml)<br>[.github/workflows/release-trigger-dev.yml](../../../../sources/giselles-ai__giselle/.github/workflows/release-trigger-dev.yml)<br>[.github/workflows/release.yml](../../../../sources/giselles-ai__giselle/.github/workflows/release.yml)<br>[.github/workflows/templates/create_issue_security_txt.md](../../../../sources/giselles-ai__giselle/.github/workflows/templates/create_issue_security_txt.md) |
| container | 0 | 명확하지 않음 |
| instruction | 13 | [AGENTS.md](../../../../sources/giselles-ai__giselle/AGENTS.md)<br>[internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md)<br>[internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md)<br>[docs/AGENTS.md](../../../../sources/giselles-ai__giselle/docs/AGENTS.md)<br>[apps/studio.giselles.ai/lib/internal-api/AGENTS.md](../../../../sources/giselles-ai__giselle/apps/studio.giselles.ai/lib/internal-api/AGENTS.md)<br>[.cursor/rules/design-mode.mdc](../../../../sources/giselles-ai__giselle/.cursor/rules/design-mode.mdc)<br>[.cursor/rules/development-guide.mdc](../../../../sources/giselles-ai__giselle/.cursor/rules/development-guide.mdc)<br>[.cursor/rules/edit-workspace-tour.mdc](../../../../sources/giselles-ai__giselle/.cursor/rules/edit-workspace-tour.mdc) |
| docs | 45 | [README.md](../../../../sources/giselles-ai__giselle/README.md)<br>[packages/web-search/README.md](../../../../sources/giselles-ai__giselle/packages/web-search/README.md)<br>[packages/supabase-driver/README.md](../../../../sources/giselles-ai__giselle/packages/supabase-driver/README.md)<br>[packages/sdk/README.md](../../../../sources/giselles-ai__giselle/packages/sdk/README.md)<br>[packages/rag/README.md](../../../../sources/giselles-ai__giselle/packages/rag/README.md)<br>[packages/pseudo-tiktoken/README.md](../../../../sources/giselles-ai__giselle/packages/pseudo-tiktoken/README.md)<br>[packages/document-preprocessor/README.md](../../../../sources/giselles-ai__giselle/packages/document-preprocessor/README.md)<br>[docs/AGENTS.md](../../../../sources/giselles-ai__giselle/docs/AGENTS.md) |
| config | 95 | [package.json](../../../../sources/giselles-ai__giselle/package.json)<br>[pnpm-workspace.yaml](../../../../sources/giselles-ai__giselle/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/giselles-ai__giselle/turbo.json)<br>[tools/tsconfig/package.json](../../../../sources/giselles-ai__giselle/tools/tsconfig/package.json)<br>[tools/strip-workspace/package.json](../../../../sources/giselles-ai__giselle/tools/strip-workspace/package.json)<br>[packages/workspace-utils/package.json](../../../../sources/giselles-ai__giselle/packages/workspace-utils/package.json)<br>[packages/workspace-utils/tsconfig.json](../../../../sources/giselles-ai__giselle/packages/workspace-utils/tsconfig.json)<br>[packages/workspace-utils/turbo.json](../../../../sources/giselles-ai__giselle/packages/workspace-utils/turbo.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 99 | [packages/workspace-utils/src/group-nodes.test.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/group-nodes.test.ts)<br>[packages/workspace-utils/src/slice-graph-from-node.test.ts](../../../../sources/giselles-ai__giselle/packages/workspace-utils/src/slice-graph-from-node.test.ts)<br>[packages/web-search/src/self-made.integration.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/self-made.integration.test.ts)<br>[packages/web-search/src/self-made.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/self-made.test.ts)<br>[packages/web-search/src/validate-url.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/validate-url.test.ts)<br>[packages/web-search/src/web-search.test.ts](../../../../sources/giselles-ai__giselle/packages/web-search/src/web-search.test.ts) |
| CI workflow | 7 | [.github/workflows/ci.yml](../../../../sources/giselles-ai__giselle/.github/workflows/ci.yml)<br>[.github/workflows/create_issue_security_txt.yml](../../../../sources/giselles-ai__giselle/.github/workflows/create_issue_security_txt.yml)<br>[.github/workflows/e2e.yml](../../../../sources/giselles-ai__giselle/.github/workflows/e2e.yml)<br>[.github/workflows/license.yml](../../../../sources/giselles-ai__giselle/.github/workflows/license.yml)<br>[.github/workflows/release-trigger-dev.yml](../../../../sources/giselles-ai__giselle/.github/workflows/release-trigger-dev.yml)<br>[.github/workflows/release.yml](../../../../sources/giselles-ai__giselle/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 32 | [SECURITY.md](../../../../sources/giselles-ai__giselle/SECURITY.md)<br>[scripts/guard-colors.mjs](../../../../sources/giselles-ai__giselle/scripts/guard-colors.mjs)<br>[packages/protocol/src/secret/index.ts](../../../../sources/giselles-ai__giselle/packages/protocol/src/secret/index.ts)<br>[packages/giselle/src/secrets/add-secret.ts](../../../../sources/giselles-ai__giselle/packages/giselle/src/secrets/add-secret.ts)<br>[packages/giselle/src/secrets/decrypt-secret.ts](../../../../sources/giselles-ai__giselle/packages/giselle/src/secrets/decrypt-secret.ts)<br>[packages/giselle/src/secrets/delete-secret.ts](../../../../sources/giselles-ai__giselle/packages/giselle/src/secrets/delete-secret.ts) |
| 에이전트 지시문 | 13 | [AGENTS.md](../../../../sources/giselles-ai__giselle/AGENTS.md)<br>[internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/new-editor/AGENTS.md)<br>[internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md](../../../../sources/giselles-ai__giselle/internal-packages/workflow-designer-ui/src/editor/properties-panel/trigger-node-properties-panel/providers/github-trigger/AGENTS.md)<br>[docs/AGENTS.md](../../../../sources/giselles-ai__giselle/docs/AGENTS.md)<br>[apps/studio.giselles.ai/lib/internal-api/AGENTS.md](../../../../sources/giselles-ai__giselle/apps/studio.giselles.ai/lib/internal-api/AGENTS.md)<br>[.cursor/rules/design-mode.mdc](../../../../sources/giselles-ai__giselle/.cursor/rules/design-mode.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `tools/tsconfig/node-library.json`, `tools/tsconfig/package.json`.
2. entrypoint를 따라 실행 흐름 확인: `packages/workspace-utils/src/index.ts`, `packages/web-search/src/index.ts`, `packages/vault/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/tsconfig/node-library.json`, `tools/tsconfig/package.json`.
4. retrieval/memory/indexing 확인: `packages/workspace-utils/src/index.ts`, `packages/workspace-utils/src/slice-graph-from-node.test.ts`, `packages/workspace-utils/src/slice-graph-from-node.ts`.
5. test/eval 파일로 동작 검증: `packages/workspace-utils/src/group-nodes.test.ts`, `packages/workspace-utils/src/slice-graph-from-node.test.ts`, `packages/web-search/src/self-made.integration.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Giselle AI App Builder. Open Source.. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
