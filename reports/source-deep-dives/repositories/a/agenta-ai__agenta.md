# agenta-ai/agenta 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 9270 files, 1925 directories.

## 요약

- 조사 단위: `sources/agenta-ai__agenta` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 9,263 files, 1,925 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/docs/misc/05-mcp-server.mdx, docs/blog/entries/mcp-server.mdx이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | agenta-ai/agenta |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/agenta-ai__agenta](../../../../sources/agenta-ai__agenta) |
| 기존 보고서 | [reports/clone-structures/agenta-ai__agenta.md](../../../clone-structures/agenta-ai__agenta.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 9263 / 1925 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .agents, .claude, .github, .husky, agents, api, clients, docs, ee, examples, hooks, hosting, sdks, services, web |
| 상위 확장자 | .ts: 2776, .py: 2118, .json: 1179, .tsx: 1077, .mdx: 733, .md: 647, .png: 266, (none): 82, .http: 73, .sh: 39, .yaml: 38, .yml: 33 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| web | source boundary | 298 |
| api | source boundary | 3 |
| docs | documentation surface | 3 |
| examples/python | examples workspace | 2 |
| services/ee | services workspace | 2 |
| services/oss | services workspace | 2 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| clients | source boundary | 1 |
| ee | top-level component | 1 |
| examples | top-level component | 1 |
| hooks | top-level component | 1 |
| hosting | top-level component | 1 |
| sdks | top-level component | 1 |
| services | top-level component | 1 |
| services/entrypoints | services workspace | 1 |
| services/pyproject.toml | services workspace | 1 |
| services/uv.lock | services workspace | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


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
| mcp | [docs/docs/misc/05-mcp-server.mdx](../../../../sources/agenta-ai__agenta/docs/docs/misc/05-mcp-server.mdx) | mcp signal |
| mcp | [docs/blog/entries/mcp-server.mdx](../../../../sources/agenta-ai__agenta/docs/blog/entries/mcp-server.mdx) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/agenta-ai__agenta/AGENTS.md) | agentRuntime signal |
| agentRuntime | [web/AGENTS.md](../../../../sources/agenta-ai__agenta/web/AGENTS.md) | agentRuntime signal |
| agentRuntime | [web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnDomRefs.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnDomRefs.ts) | agentRuntime signal |
| agentRuntime | [web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnVisibility.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnVisibility.ts) | agentRuntime signal |
| entrypoints | [web/packages/agenta-ui/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/index.ts) | entrypoints signal |
| entrypoints | [web/packages/agenta-shared/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-shared/src/index.ts) | entrypoints signal |
| entrypoints | [web/packages/agenta-sdk/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-sdk/src/index.ts) | entrypoints signal |
| entrypoints | [web/packages/agenta-playground-ui/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-playground-ui/src/index.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/agenta-ai__agenta/CLAUDE.md) | instruction signal |
| instruction | [hosting/AGENTS.md](../../../../sources/agenta-ai__agenta/hosting/AGENTS.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 20 | [web/packages/agenta-ui/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/index.ts)<br>[web/packages/agenta-shared/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-shared/src/index.ts)<br>[web/packages/agenta-sdk/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-sdk/src/index.ts)<br>[web/packages/agenta-playground-ui/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-playground-ui/src/index.ts)<br>[web/packages/agenta-playground/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-playground/src/index.ts)<br>[web/packages/agenta-entity-ui/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entity-ui/src/index.ts)<br>[web/packages/agenta-entities/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/index.ts)<br>[web/packages/agenta-api-client/src/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-api-client/src/index.ts) |
| agentRuntime | 542 | [AGENTS.md](../../../../sources/agenta-ai__agenta/AGENTS.md)<br>[web/AGENTS.md](../../../../sources/agenta-ai__agenta/web/AGENTS.md)<br>[web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnDomRefs.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnDomRefs.ts)<br>[web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnVisibility.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnVisibility.ts)<br>[web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnVisibilityControls.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnVisibilityControls.ts)<br>[web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useContainerResize.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useContainerResize.ts)<br>[web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useContainerSize.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useContainerSize.ts)<br>[web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useEditableTable.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useEditableTable.ts) |
| mcp | 2 | [docs/docs/misc/05-mcp-server.mdx](../../../../sources/agenta-ai__agenta/docs/docs/misc/05-mcp-server.mdx)<br>[docs/blog/entries/mcp-server.mdx](../../../../sources/agenta-ai__agenta/docs/blog/entries/mcp-server.mdx) |
| retrieval | 784 | [web/tests/utils/index.ts](../../../../sources/agenta-ai__agenta/web/tests/utils/index.ts)<br>[web/tests/utils/testmail/index.ts](../../../../sources/agenta-ai__agenta/web/tests/utils/testmail/index.ts)<br>[web/tests/tests/fixtures/user.fixture/authHelpers/index.ts](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/user.fixture/authHelpers/index.ts)<br>[web/tests/tests/fixtures/session.fixture/index.ts](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/session.fixture/index.ts)<br>[web/tests/tests/fixtures/base.fixture/index.ts](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/base.fixture/index.ts)<br>[web/tests/tests/fixtures/base.fixture/uiHelpers/index.ts](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/base.fixture/uiHelpers/index.ts)<br>[web/tests/tests/fixtures/base.fixture/providerHelpers/index.ts](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/base.fixture/providerHelpers/index.ts)<br>[web/tests/tests/fixtures/base.fixture/llmKeysSettingsHelpers/index.ts](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/base.fixture/llmKeysSettingsHelpers/index.ts) |
| spec | 506 | [web/oss/tests/playwright/acceptance/.gitkeep](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/.gitkeep)<br>[web/oss/tests/playwright/acceptance/smoke.spec.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/smoke.spec.ts)<br>[web/oss/tests/playwright/acceptance/utils/auth.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/utils/auth.ts)<br>[web/oss/tests/playwright/acceptance/utils/scenarios.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/utils/scenarios.ts)<br>[web/oss/tests/playwright/acceptance/utils/tags.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/utils/tags.ts)<br>[web/oss/tests/playwright/acceptance/testsset/index.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/testsset/index.ts)<br>[web/oss/tests/playwright/acceptance/testsset/testset-management.spec.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/testsset/testset-management.spec.ts)<br>[web/oss/tests/playwright/acceptance/testsset/testset-management.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/testsset/testset-management.ts) |
| eval | 1607 | [web/tests/.gitignore](../../../../sources/agenta-ai__agenta/web/tests/.gitignore)<br>[web/tests/package.json](../../../../sources/agenta-ai__agenta/web/tests/package.json)<br>[web/tests/playwright.config.ts](../../../../sources/agenta-ai__agenta/web/tests/playwright.config.ts)<br>[web/tests/README.md](../../../../sources/agenta-ai__agenta/web/tests/README.md)<br>[web/tests/TEST-COVERAGE.md](../../../../sources/agenta-ai__agenta/web/tests/TEST-COVERAGE.md)<br>[web/tests/tsconfig.json](../../../../sources/agenta-ai__agenta/web/tests/tsconfig.json)<br>[web/tests/utils/evaluationKind.ts](../../../../sources/agenta-ai__agenta/web/tests/utils/evaluationKind.ts)<br>[web/tests/utils/index.ts](../../../../sources/agenta-ai__agenta/web/tests/utils/index.ts) |
| security | 161 | [SECURITY.md](../../../../sources/agenta-ai__agenta/SECURITY.md)<br>[web/tests/playwright/scripts/bootstrap-auth.ts](../../../../sources/agenta-ai__agenta/web/tests/playwright/scripts/bootstrap-auth.ts)<br>[web/packages/agenta-entities/src/secret/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/index.ts)<br>[web/packages/agenta-entities/src/secret/README.md](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/README.md)<br>[web/packages/agenta-entities/src/secret/state/atoms.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/state/atoms.ts)<br>[web/packages/agenta-entities/src/secret/state/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/state/index.ts)<br>[web/packages/agenta-entities/src/secret/state/useVaultSecret.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/state/useVaultSecret.ts)<br>[web/packages/agenta-entities/src/secret/core/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/core/index.ts) |
| ci | 17 | [.github/workflows/00-releases.yml](../../../../sources/agenta-ai__agenta/.github/workflows/00-releases.yml)<br>[.github/workflows/01-create-release-branch.yml](../../../../sources/agenta-ai__agenta/.github/workflows/01-create-release-branch.yml)<br>[.github/workflows/10-checks.yml](../../../../sources/agenta-ai__agenta/.github/workflows/10-checks.yml)<br>[.github/workflows/11-check-code-styling.yml](../../../../sources/agenta-ai__agenta/.github/workflows/11-check-code-styling.yml)<br>[.github/workflows/12-check-unit-tests.yml](../../../../sources/agenta-ai__agenta/.github/workflows/12-check-unit-tests.yml)<br>[.github/workflows/13-check-pr-contribution.yml](../../../../sources/agenta-ai__agenta/.github/workflows/13-check-pr-contribution.yml)<br>[.github/workflows/14-check-pr-preview.yml](../../../../sources/agenta-ai__agenta/.github/workflows/14-check-pr-preview.yml)<br>[.github/workflows/30-crons.yml](../../../../sources/agenta-ai__agenta/.github/workflows/30-crons.yml) |
| container | 86 | [web/oss/tests/playwright/acceptance/deployment/deploy-variant.spec.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/deployment/deploy-variant.spec.ts)<br>[web/oss/tests/playwright/acceptance/deployment/index.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/deployment/index.ts)<br>[web/oss/docker/Dockerfile.dev](../../../../sources/agenta-ai__agenta/web/oss/docker/Dockerfile.dev)<br>[web/oss/docker/Dockerfile.gh](../../../../sources/agenta-ai__agenta/web/oss/docker/Dockerfile.gh)<br>[web/ee/tests/playwright/acceptance/deployment/deploy-variant.spec.ts](../../../../sources/agenta-ai__agenta/web/ee/tests/playwright/acceptance/deployment/deploy-variant.spec.ts)<br>[web/ee/docker/Dockerfile.dev](../../../../sources/agenta-ai__agenta/web/ee/docker/Dockerfile.dev)<br>[web/ee/docker/Dockerfile.gh](../../../../sources/agenta-ai__agenta/web/ee/docker/Dockerfile.gh)<br>[services/oss/docker/Dockerfile.dev](../../../../sources/agenta-ai__agenta/services/oss/docker/Dockerfile.dev) |
| instruction | 5 | [AGENTS.md](../../../../sources/agenta-ai__agenta/AGENTS.md)<br>[CLAUDE.md](../../../../sources/agenta-ai__agenta/CLAUDE.md)<br>[web/AGENTS.md](../../../../sources/agenta-ai__agenta/web/AGENTS.md)<br>[hosting/AGENTS.md](../../../../sources/agenta-ai__agenta/hosting/AGENTS.md)<br>[api/AGENTS.md](../../../../sources/agenta-ai__agenta/api/AGENTS.md) |
| docs | 2739 | [README.md](../../../../sources/agenta-ai__agenta/README.md)<br>[web/tests/README.md](../../../../sources/agenta-ai__agenta/web/tests/README.md)<br>[web/tests/tests/fixtures/README.md](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/README.md)<br>[web/tests/tests/fixtures/user.fixture/README.md](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/user.fixture/README.md)<br>[web/tests/tests/fixtures/user.fixture/authHelpers/README.md](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/user.fixture/authHelpers/README.md)<br>[web/tests/tests/fixtures/base.fixture/README.md](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/base.fixture/README.md)<br>[web/tests/tests/fixtures/base.fixture/uiHelpers/README.md](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/base.fixture/uiHelpers/README.md)<br>[web/tests/tests/fixtures/base.fixture/apiHelpers/README.md](../../../../sources/agenta-ai__agenta/web/tests/tests/fixtures/base.fixture/apiHelpers/README.md) |
| config | 71 | [web/package.json](../../../../sources/agenta-ai__agenta/web/package.json)<br>[web/pnpm-workspace.yaml](../../../../sources/agenta-ai__agenta/web/pnpm-workspace.yaml)<br>[web/tsconfig.json](../../../../sources/agenta-ai__agenta/web/tsconfig.json)<br>[web/turbo.json](../../../../sources/agenta-ai__agenta/web/turbo.json)<br>[web/tests/package.json](../../../../sources/agenta-ai__agenta/web/tests/package.json)<br>[web/tests/tsconfig.json](../../../../sources/agenta-ai__agenta/web/tests/tsconfig.json)<br>[web/packages/agenta-ui/package.json](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/package.json)<br>[web/packages/agenta-ui/tsconfig.json](../../../../sources/agenta-ai__agenta/web/packages/agenta-ui/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1607 | [web/tests/.gitignore](../../../../sources/agenta-ai__agenta/web/tests/.gitignore)<br>[web/tests/package.json](../../../../sources/agenta-ai__agenta/web/tests/package.json)<br>[web/tests/playwright.config.ts](../../../../sources/agenta-ai__agenta/web/tests/playwright.config.ts)<br>[web/tests/README.md](../../../../sources/agenta-ai__agenta/web/tests/README.md)<br>[web/tests/TEST-COVERAGE.md](../../../../sources/agenta-ai__agenta/web/tests/TEST-COVERAGE.md)<br>[web/tests/tsconfig.json](../../../../sources/agenta-ai__agenta/web/tests/tsconfig.json) |
| CI workflow | 17 | [.github/workflows/00-releases.yml](../../../../sources/agenta-ai__agenta/.github/workflows/00-releases.yml)<br>[.github/workflows/01-create-release-branch.yml](../../../../sources/agenta-ai__agenta/.github/workflows/01-create-release-branch.yml)<br>[.github/workflows/10-checks.yml](../../../../sources/agenta-ai__agenta/.github/workflows/10-checks.yml)<br>[.github/workflows/11-check-code-styling.yml](../../../../sources/agenta-ai__agenta/.github/workflows/11-check-code-styling.yml)<br>[.github/workflows/12-check-unit-tests.yml](../../../../sources/agenta-ai__agenta/.github/workflows/12-check-unit-tests.yml)<br>[.github/workflows/13-check-pr-contribution.yml](../../../../sources/agenta-ai__agenta/.github/workflows/13-check-pr-contribution.yml) |
| 컨테이너/배포 | 86 | [web/oss/tests/playwright/acceptance/deployment/deploy-variant.spec.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/deployment/deploy-variant.spec.ts)<br>[web/oss/tests/playwright/acceptance/deployment/index.ts](../../../../sources/agenta-ai__agenta/web/oss/tests/playwright/acceptance/deployment/index.ts)<br>[web/oss/docker/Dockerfile.dev](../../../../sources/agenta-ai__agenta/web/oss/docker/Dockerfile.dev)<br>[web/oss/docker/Dockerfile.gh](../../../../sources/agenta-ai__agenta/web/oss/docker/Dockerfile.gh)<br>[web/ee/tests/playwright/acceptance/deployment/deploy-variant.spec.ts](../../../../sources/agenta-ai__agenta/web/ee/tests/playwright/acceptance/deployment/deploy-variant.spec.ts)<br>[web/ee/docker/Dockerfile.dev](../../../../sources/agenta-ai__agenta/web/ee/docker/Dockerfile.dev) |
| 보안/정책 | 161 | [SECURITY.md](../../../../sources/agenta-ai__agenta/SECURITY.md)<br>[web/tests/playwright/scripts/bootstrap-auth.ts](../../../../sources/agenta-ai__agenta/web/tests/playwright/scripts/bootstrap-auth.ts)<br>[web/packages/agenta-entities/src/secret/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/index.ts)<br>[web/packages/agenta-entities/src/secret/README.md](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/README.md)<br>[web/packages/agenta-entities/src/secret/state/atoms.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/state/atoms.ts)<br>[web/packages/agenta-entities/src/secret/state/index.ts](../../../../sources/agenta-ai__agenta/web/packages/agenta-entities/src/secret/state/index.ts) |
| 에이전트 지시문 | 5 | [AGENTS.md](../../../../sources/agenta-ai__agenta/AGENTS.md)<br>[CLAUDE.md](../../../../sources/agenta-ai__agenta/CLAUDE.md)<br>[web/AGENTS.md](../../../../sources/agenta-ai__agenta/web/AGENTS.md)<br>[hosting/AGENTS.md](../../../../sources/agenta-ai__agenta/hosting/AGENTS.md)<br>[api/AGENTS.md](../../../../sources/agenta-ai__agenta/api/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/docs/misc/05-mcp-server.mdx`, `docs/blog/entries/mcp-server.mdx`, `AGENTS.md`.
2. entrypoint를 따라 실행 흐름 확인: `web/packages/agenta-ui/src/index.ts`, `web/packages/agenta-shared/src/index.ts`, `web/packages/agenta-sdk/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `web/AGENTS.md`, `web/packages/agenta-ui/src/InfiniteVirtualTable/hooks/useColumnDomRefs.ts`.
4. retrieval/memory/indexing 확인: `web/tests/utils/index.ts`, `web/tests/utils/testmail/index.ts`, `web/tests/tests/fixtures/user.fixture/authHelpers/index.ts`.
5. test/eval 파일로 동작 검증: `web/tests/.gitignore`, `web/tests/package.json`, `web/tests/playwright.config.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 9270 files, 1925 directories.. 핵심 구조 신호는 README.md, AGENTS.md, CLAUDE.md, LICENSE, tests, ci이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
