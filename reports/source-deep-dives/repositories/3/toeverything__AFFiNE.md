# toeverything/AFFiNE 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.

## 요약

- 조사 단위: `sources/toeverything__AFFiNE` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 9,922 files, 2,508 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=tools/utils/src/index.ts, tools/revert-update/index.ts, tools/playstore-auto-bump/index.ts이고, 의존성 단서는 react, electron, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | toeverything/AFFiNE |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | TypeScript |
| Stars | 69499 |
| Forks | 4937 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/toeverything__AFFiNE](../../../../sources/toeverything__AFFiNE) |
| 기존 보고서 | [reports/global-trending/repositories/toeverything__AFFiNE.md](../../../global-trending/repositories/toeverything__AFFiNE.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 9922 / 2508 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .cargo, .codesandbox, .devcontainer, .docker, .github, .husky, .yarn, blocksuite, docs, packages, scripts, tests, tools |
| 상위 확장자 | .ts: 5811, .tsx: 1113, .json: 591, .swift: 545, .svg: 500, .md: 207, .gql: 193, .png: 182, .rs: 141, .sql: 112, (none): 57, .yml: 42 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/frontend | packages workspace | 136 |
| tests | validation surface | 116 |
| packages/backend | packages workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| blocksuite | top-level component | 1 |
| docs | documentation surface | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |
| tools | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | affine | r affine.ts |
| utility | package.json | af | r affine.ts |
| serve-dev | package.json | dev | yarn affine dev |
| build | package.json | build | yarn affine build |
| quality | package.json | lint:eslint | cross-env NODE_OPTIONS="--max-old-space-size=16384" eslint --report-unused-disable-directives-severity=off . --cache |
| quality | package.json | lint:eslint:fix | yarn lint:eslint --fix --fix-type problem,suggestion,layout |
| quality | package.json | lint:prettier | prettier --ignore-unknown --cache --check . |
| quality | package.json | lint:prettier:fix | prettier --ignore-unknown --cache --write . |
| quality | package.json | lint:ox | oxlint --deny-warnings |
| quality | package.json | lint:ox:fix | yarn lint:ox --fix |
| quality | package.json | lint | yarn lint:ox && yarn lint:eslint && yarn lint:prettier |
| quality | package.json | lint:fix | yarn lint:ox:fix && yarn lint:eslint:fix && yarn lint:prettier:fix |
| test | package.json | test | vitest --run |
| test | package.json | test:ui | vitest --ui |
| test | package.json | test:coverage | vitest run --coverage |
| quality | package.json | typecheck | tsc -b tsconfig.json --verbose |
| utility | package.json | postinstall | yarn affine init && yarn husky |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | electron |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [tools/utils/src/index.ts](../../../../sources/toeverything__AFFiNE/tools/utils/src/index.ts) | retrieval signal |
| retrieval | [tools/revert-update/index.ts](../../../../sources/toeverything__AFFiNE/tools/revert-update/index.ts) | retrieval signal |
| retrieval | [tools/playstore-auto-bump/index.ts](../../../../sources/toeverything__AFFiNE/tools/playstore-auto-bump/index.ts) | retrieval signal |
| retrieval | [tools/doc-diff/src/index.ts](../../../../sources/toeverything__AFFiNE/tools/doc-diff/src/index.ts) | retrieval signal |
| entrypoints | [tools/cli/bin/cli.js](../../../../sources/toeverything__AFFiNE/tools/cli/bin/cli.js) | entrypoints signal |
| entrypoints | [tools/cli/bin/runner.js](../../../../sources/toeverything__AFFiNE/tools/cli/bin/runner.js) | entrypoints signal |
| docs | [README.md](../../../../sources/toeverything__AFFiNE/README.md) | docs signal |
| docs | [tools/commitlint/README.md](../../../../sources/toeverything__AFFiNE/tools/commitlint/README.md) | docs signal |
| docs | [tools/cli/README.md](../../../../sources/toeverything__AFFiNE/tools/cli/README.md) | docs signal |
| docs | [tests/affine-cloud-copilot/README.md](../../../../sources/toeverything__AFFiNE/tests/affine-cloud-copilot/README.md) | docs signal |
| eval | [tests/kit/package.json](../../../../sources/toeverything__AFFiNE/tests/kit/package.json) | eval signal |
| eval | [tests/kit/tsconfig.json](../../../../sources/toeverything__AFFiNE/tests/kit/tsconfig.json) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 275 | [tools/utils/src/index.ts](../../../../sources/toeverything__AFFiNE/tools/utils/src/index.ts)<br>[tools/doc-diff/src/index.ts](../../../../sources/toeverything__AFFiNE/tools/doc-diff/src/index.ts)<br>[tools/cli/bin/cli.js](../../../../sources/toeverything__AFFiNE/tools/cli/bin/cli.js)<br>[tools/cli/bin/runner.js](../../../../sources/toeverything__AFFiNE/tools/cli/bin/runner.js)<br>[packages/frontend/track/src/index.ts](../../../../sources/toeverything__AFFiNE/packages/frontend/track/src/index.ts)<br>[packages/frontend/routes/src/index.ts](../../../../sources/toeverything__AFFiNE/packages/frontend/routes/src/index.ts)<br>[packages/frontend/media-capture-playground/web/main.tsx](../../../../sources/toeverything__AFFiNE/packages/frontend/media-capture-playground/web/main.tsx)<br>[packages/frontend/media-capture-playground/server/main.ts](../../../../sources/toeverything__AFFiNE/packages/frontend/media-capture-playground/server/main.ts) |
| agentRuntime | 237 | [tools/utils/package.json](../../../../sources/toeverything__AFFiNE/tools/utils/package.json)<br>[tools/utils/tsconfig.json](../../../../sources/toeverything__AFFiNE/tools/utils/tsconfig.json)<br>[tools/utils/src/build-config.ts](../../../../sources/toeverything__AFFiNE/tools/utils/src/build-config.ts)<br>[tools/utils/src/distribution.ts](../../../../sources/toeverything__AFFiNE/tools/utils/src/distribution.ts)<br>[tools/utils/src/format.ts](../../../../sources/toeverything__AFFiNE/tools/utils/src/format.ts)<br>[tools/utils/src/index.ts](../../../../sources/toeverything__AFFiNE/tools/utils/src/index.ts)<br>[tools/utils/src/logger.ts](../../../../sources/toeverything__AFFiNE/tools/utils/src/logger.ts)<br>[tools/utils/src/package.ts](../../../../sources/toeverything__AFFiNE/tools/utils/src/package.ts) |
| mcp | 5 | [packages/frontend/core/src/desktop/dialogs/setting/workspace-setting/integration/mcp-server/MCP.inline.svg](../../../../sources/toeverything__AFFiNE/packages/frontend/core/src/desktop/dialogs/setting/workspace-setting/integration/mcp-server/MCP.inline.svg)<br>[packages/frontend/core/src/desktop/dialogs/setting/workspace-setting/integration/mcp-server/setting-panel.css.ts](../../../../sources/toeverything__AFFiNE/packages/frontend/core/src/desktop/dialogs/setting/workspace-setting/integration/mcp-server/setting-panel.css.ts)<br>[packages/frontend/core/src/desktop/dialogs/setting/workspace-setting/integration/mcp-server/setting-panel.tsx](../../../../sources/toeverything__AFFiNE/packages/frontend/core/src/desktop/dialogs/setting/workspace-setting/integration/mcp-server/setting-panel.tsx)<br>[packages/backend/server/src/plugins/copilot/mcp/controller.ts](../../../../sources/toeverything__AFFiNE/packages/backend/server/src/plugins/copilot/mcp/controller.ts)<br>[packages/backend/server/src/plugins/copilot/mcp/provider.ts](../../../../sources/toeverything__AFFiNE/packages/backend/server/src/plugins/copilot/mcp/provider.ts) |
| retrieval | 1437 | [tools/utils/src/index.ts](../../../../sources/toeverything__AFFiNE/tools/utils/src/index.ts)<br>[tools/revert-update/index.ts](../../../../sources/toeverything__AFFiNE/tools/revert-update/index.ts)<br>[tools/playstore-auto-bump/index.ts](../../../../sources/toeverything__AFFiNE/tools/playstore-auto-bump/index.ts)<br>[tools/doc-diff/src/index.ts](../../../../sources/toeverything__AFFiNE/tools/doc-diff/src/index.ts)<br>[tools/copilot-result/index.js](../../../../sources/toeverything__AFFiNE/tools/copilot-result/index.js)<br>[tools/cli/src/rspack/index.ts](../../../../sources/toeverything__AFFiNE/tools/cli/src/rspack/index.ts)<br>[tools/changelog/index.js](../../../../sources/toeverything__AFFiNE/tools/changelog/index.js)<br>[tests/blocksuite/snapshots/selection/block.spec.ts/click-bottom-of-page-and-if-the-last-is-embed-block-editor-should-insert-a-new-editable-block.json](../../../../sources/toeverything__AFFiNE/tests/blocksuite/snapshots/selection/block.spec.ts/click-bottom-of-page-and-if-the-last-is-embed-block-editor-should-insert-a-new-editable-block.json) |
| spec | 975 | [tests/blocksuite/snapshots/slash-menu.spec.ts/delete-block-by-slash-menu-should-remove-children.json](../../../../sources/toeverything__AFFiNE/tests/blocksuite/snapshots/slash-menu.spec.ts/delete-block-by-slash-menu-should-remove-children.json)<br>[tests/blocksuite/snapshots/slash-menu.spec.ts/delete-the-slash-symbol-should-close-the-slash-menu.json](../../../../sources/toeverything__AFFiNE/tests/blocksuite/snapshots/slash-menu.spec.ts/delete-the-slash-symbol-should-close-the-slash-menu.json)<br>[tests/blocksuite/snapshots/slash-menu.spec.ts/should-clean-slash-string-after-soft-enter.json](../../../../sources/toeverything__AFFiNE/tests/blocksuite/snapshots/slash-menu.spec.ts/should-clean-slash-string-after-soft-enter.json)<br>[tests/blocksuite/snapshots/slash-menu.spec.ts/should-style-empty-line-works.json](../../../../sources/toeverything__AFFiNE/tests/blocksuite/snapshots/slash-menu.spec.ts/should-style-empty-line-works.json)<br>[tests/blocksuite/snapshots/slash-menu.spec.ts/should-style-text-line-works.json](../../../../sources/toeverything__AFFiNE/tests/blocksuite/snapshots/slash-menu.spec.ts/should-style-text-line-works.json)<br>[tests/blocksuite/snapshots/slash-menu.spec.ts/slash-menu-should-hide-after-click-away.json](../../../../sources/toeverything__AFFiNE/tests/blocksuite/snapshots/slash-menu.spec.ts/slash-menu-should-hide-after-click-away.json)<br>[tests/blocksuite/snapshots/selection/native.spec.ts/indent-native-multi-selection-block-after-shift-tab.json](../../../../sources/toeverything__AFFiNE/tests/blocksuite/snapshots/selection/native.spec.ts/indent-native-multi-selection-block-after-shift-tab.json)<br>[tests/blocksuite/snapshots/selection/native.spec.ts/indent-native-multi-selection-block-after-tab.json](../../../../sources/toeverything__AFFiNE/tests/blocksuite/snapshots/selection/native.spec.ts/indent-native-multi-selection-block-after-tab.json) |
| eval | 1215 | [tests/kit/package.json](../../../../sources/toeverything__AFFiNE/tests/kit/package.json)<br>[tests/kit/tsconfig.json](../../../../sources/toeverything__AFFiNE/tests/kit/tsconfig.json)<br>[tests/kit/src/electron.ts](../../../../sources/toeverything__AFFiNE/tests/kit/src/electron.ts)<br>[tests/kit/src/mobile.ts](../../../../sources/toeverything__AFFiNE/tests/kit/src/mobile.ts)<br>[tests/kit/src/playwright.ts](../../../../sources/toeverything__AFFiNE/tests/kit/src/playwright.ts)<br>[tests/kit/src/utils/app-tabs.ts](../../../../sources/toeverything__AFFiNE/tests/kit/src/utils/app-tabs.ts)<br>[tests/kit/src/utils/attachment.ts](../../../../sources/toeverything__AFFiNE/tests/kit/src/utils/attachment.ts)<br>[tests/kit/src/utils/clipboard.ts](../../../../sources/toeverything__AFFiNE/tests/kit/src/utils/clipboard.ts) |
| security | 185 | [SECURITY.md](../../../../sources/toeverything__AFFiNE/SECURITY.md)<br>[packages/frontend/core/src/modules/share-menu/view/share-menu/general-access/members-permission.tsx](../../../../sources/toeverything__AFFiNE/packages/frontend/core/src/modules/share-menu/view/share-menu/general-access/members-permission.tsx)<br>[packages/frontend/core/src/modules/permissions/stores/guard.ts](../../../../sources/toeverything__AFFiNE/packages/frontend/core/src/modules/permissions/stores/guard.ts)<br>[packages/frontend/core/src/modules/permissions/stores/permission.ts](../../../../sources/toeverything__AFFiNE/packages/frontend/core/src/modules/permissions/stores/permission.ts)<br>[packages/frontend/core/src/modules/permissions/services/guard.ts](../../../../sources/toeverything__AFFiNE/packages/frontend/core/src/modules/permissions/services/guard.ts)<br>[packages/frontend/core/src/modules/permissions/services/permission.ts](../../../../sources/toeverything__AFFiNE/packages/frontend/core/src/modules/permissions/services/permission.ts)<br>[packages/frontend/core/src/modules/permissions/entities/permission.ts](../../../../sources/toeverything__AFFiNE/packages/frontend/core/src/modules/permissions/entities/permission.ts)<br>[packages/frontend/core/src/modules/open-in-app/views/open-in-app-guard.tsx](../../../../sources/toeverything__AFFiNE/packages/frontend/core/src/modules/open-in-app/views/open-in-app-guard.tsx) |
| ci | 12 | [.github/workflows/auto-labeler.yml](../../../../sources/toeverything__AFFiNE/.github/workflows/auto-labeler.yml)<br>[.github/workflows/build-images.yml](../../../../sources/toeverything__AFFiNE/.github/workflows/build-images.yml)<br>[.github/workflows/build-test.yml](../../../../sources/toeverything__AFFiNE/.github/workflows/build-test.yml)<br>[.github/workflows/copilot-test-automatically.yml](../../../../sources/toeverything__AFFiNE/.github/workflows/copilot-test-automatically.yml)<br>[.github/workflows/copilot-test.yml](../../../../sources/toeverything__AFFiNE/.github/workflows/copilot-test.yml)<br>[.github/workflows/pr-title-lint.yml](../../../../sources/toeverything__AFFiNE/.github/workflows/pr-title-lint.yml)<br>[.github/workflows/release-cloud.yml](../../../../sources/toeverything__AFFiNE/.github/workflows/release-cloud.yml)<br>[.github/workflows/release-desktop-platform.yml](../../../../sources/toeverything__AFFiNE/.github/workflows/release-desktop-platform.yml) |
| container | 51 | [.github/helm/releaser.yaml](../../../../sources/toeverything__AFFiNE/.github/helm/releaser.yaml)<br>[.github/helm/separate-config/backend-config.yaml](../../../../sources/toeverything__AFFiNE/.github/helm/separate-config/backend-config.yaml)<br>[.github/helm/separate-config/Dockerfile_pgvector](../../../../sources/toeverything__AFFiNE/.github/helm/separate-config/Dockerfile_pgvector)<br>[.github/helm/affine/.helmignore](../../../../sources/toeverything__AFFiNE/.github/helm/affine/.helmignore)<br>[.github/helm/affine/Chart.yaml](../../../../sources/toeverything__AFFiNE/.github/helm/affine/Chart.yaml)<br>[.github/helm/affine/values.yaml](../../../../sources/toeverything__AFFiNE/.github/helm/affine/values.yaml)<br>[.github/helm/affine/templates/_helpers.tpl](../../../../sources/toeverything__AFFiNE/.github/helm/affine/templates/_helpers.tpl)<br>[.github/helm/affine/templates/configmap.yaml](../../../../sources/toeverything__AFFiNE/.github/helm/affine/templates/configmap.yaml) |
| instruction | 1 | [packages/frontend/apps/ios/AGENTS.md](../../../../sources/toeverything__AFFiNE/packages/frontend/apps/ios/AGENTS.md) |
| docs | 200 | [README.md](../../../../sources/toeverything__AFFiNE/README.md)<br>[tools/commitlint/README.md](../../../../sources/toeverything__AFFiNE/tools/commitlint/README.md)<br>[tools/cli/README.md](../../../../sources/toeverything__AFFiNE/tools/cli/README.md)<br>[tests/affine-cloud-copilot/README.md](../../../../sources/toeverything__AFFiNE/tests/affine-cloud-copilot/README.md)<br>[packages/frontend/templates/README.md](../../../../sources/toeverything__AFFiNE/packages/frontend/templates/README.md)<br>[packages/frontend/routes/README.md](../../../../sources/toeverything__AFFiNE/packages/frontend/routes/README.md)<br>[packages/frontend/native/schema/README.md](../../../../sources/toeverything__AFFiNE/packages/frontend/native/schema/README.md)<br>[packages/frontend/native/media_capture/src/windows/README.md](../../../../sources/toeverything__AFFiNE/packages/frontend/native/media_capture/src/windows/README.md) |
| config | 246 | [Cargo.lock](../../../../sources/toeverything__AFFiNE/Cargo.lock)<br>[Cargo.toml](../../../../sources/toeverything__AFFiNE/Cargo.toml)<br>[package.json](../../../../sources/toeverything__AFFiNE/package.json)<br>[tsconfig.json](../../../../sources/toeverything__AFFiNE/tsconfig.json)<br>[tools/utils/package.json](../../../../sources/toeverything__AFFiNE/tools/utils/package.json)<br>[tools/utils/tsconfig.json](../../../../sources/toeverything__AFFiNE/tools/utils/tsconfig.json)<br>[tools/revert-update/package.json](../../../../sources/toeverything__AFFiNE/tools/revert-update/package.json)<br>[tools/revert-update/tsconfig.json](../../../../sources/toeverything__AFFiNE/tools/revert-update/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1215 | [tests/kit/package.json](../../../../sources/toeverything__AFFiNE/tests/kit/package.json)<br>[tests/kit/tsconfig.json](../../../../sources/toeverything__AFFiNE/tests/kit/tsconfig.json)<br>[tests/kit/src/electron.ts](../../../../sources/toeverything__AFFiNE/tests/kit/src/electron.ts)<br>[tests/kit/src/mobile.ts](../../../../sources/toeverything__AFFiNE/tests/kit/src/mobile.ts)<br>[tests/kit/src/playwright.ts](../../../../sources/toeverything__AFFiNE/tests/kit/src/playwright.ts)<br>[tests/kit/src/utils/app-tabs.ts](../../../../sources/toeverything__AFFiNE/tests/kit/src/utils/app-tabs.ts) |
| CI workflow | 12 | [.github/workflows/auto-labeler.yml](../../../../sources/toeverything__AFFiNE/.github/workflows/auto-labeler.yml)<br>[.github/workflows/build-images.yml](../../../../sources/toeverything__AFFiNE/.github/workflows/build-images.yml)<br>[.github/workflows/build-test.yml](../../../../sources/toeverything__AFFiNE/.github/workflows/build-test.yml)<br>[.github/workflows/copilot-test-automatically.yml](../../../../sources/toeverything__AFFiNE/.github/workflows/copilot-test-automatically.yml)<br>[.github/workflows/copilot-test.yml](../../../../sources/toeverything__AFFiNE/.github/workflows/copilot-test.yml)<br>[.github/workflows/pr-title-lint.yml](../../../../sources/toeverything__AFFiNE/.github/workflows/pr-title-lint.yml) |
| 컨테이너/배포 | 51 | [.github/helm/releaser.yaml](../../../../sources/toeverything__AFFiNE/.github/helm/releaser.yaml)<br>[.github/helm/separate-config/backend-config.yaml](../../../../sources/toeverything__AFFiNE/.github/helm/separate-config/backend-config.yaml)<br>[.github/helm/separate-config/Dockerfile_pgvector](../../../../sources/toeverything__AFFiNE/.github/helm/separate-config/Dockerfile_pgvector)<br>[.github/helm/affine/.helmignore](../../../../sources/toeverything__AFFiNE/.github/helm/affine/.helmignore)<br>[.github/helm/affine/Chart.yaml](../../../../sources/toeverything__AFFiNE/.github/helm/affine/Chart.yaml)<br>[.github/helm/affine/values.yaml](../../../../sources/toeverything__AFFiNE/.github/helm/affine/values.yaml) |
| 보안/정책 | 185 | [SECURITY.md](../../../../sources/toeverything__AFFiNE/SECURITY.md)<br>[packages/frontend/core/src/modules/share-menu/view/share-menu/general-access/members-permission.tsx](../../../../sources/toeverything__AFFiNE/packages/frontend/core/src/modules/share-menu/view/share-menu/general-access/members-permission.tsx)<br>[packages/frontend/core/src/modules/permissions/stores/guard.ts](../../../../sources/toeverything__AFFiNE/packages/frontend/core/src/modules/permissions/stores/guard.ts)<br>[packages/frontend/core/src/modules/permissions/stores/permission.ts](../../../../sources/toeverything__AFFiNE/packages/frontend/core/src/modules/permissions/stores/permission.ts)<br>[packages/frontend/core/src/modules/permissions/services/guard.ts](../../../../sources/toeverything__AFFiNE/packages/frontend/core/src/modules/permissions/services/guard.ts)<br>[packages/frontend/core/src/modules/permissions/services/permission.ts](../../../../sources/toeverything__AFFiNE/packages/frontend/core/src/modules/permissions/services/permission.ts) |
| 에이전트 지시문 | 1 | [packages/frontend/apps/ios/AGENTS.md](../../../../sources/toeverything__AFFiNE/packages/frontend/apps/ios/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/utils/src/index.ts`, `tools/revert-update/index.ts`, `tools/playstore-auto-bump/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `tools/utils/src/index.ts`, `tools/doc-diff/src/index.ts`, `tools/cli/bin/cli.js`.
3. agent/tool runtime 매핑: `tools/utils/package.json`, `tools/utils/tsconfig.json`, `tools/utils/src/build-config.ts`.
4. retrieval/memory/indexing 확인: `tools/utils/src/index.ts`, `tools/revert-update/index.ts`, `tools/playstore-auto-bump/index.ts`.
5. test/eval 파일로 동작 검증: `tests/kit/package.json`, `tests/kit/tsconfig.json`, `tests/kit/src/electron.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 There can be more than Notion and Miro. AFFiNE pronounced ə‘fain is a next gen knowledge base that brings planning, sort. 핵심 구조 신호는 TypeScript, package.json, Cargo.toml, README.md, LICENSE, react이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
