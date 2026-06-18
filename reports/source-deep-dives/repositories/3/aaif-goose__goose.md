# aaif-goose/goose 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Local clone structure analysis: 2325 files, 492 directories.

## 요약

- 조사 단위: `sources/aaif-goose__goose` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,323 files, 489 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=ui/sdk/src/mcp-apps.ts, ui/desktop/tests/e2e/basic-mcp.ts, scripts/test_mcp.sh이고, 의존성 단서는 mcp, llama, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | aaif-goose/goose |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 49691 |
| Forks | 5261 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/aaif-goose__goose](../../../../sources/aaif-goose__goose) |
| 기존 보고서 | [reports/global-trending/repositories/aaif-goose__goose.md](../../../global-trending/repositories/aaif-goose__goose.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2323 / 489 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .cargo, .claude, .codex, .cursor, .devcontainer, .github, .intersect, bin, crates, documentation, evals, examples, oidc-proxy, recipe-scanner, scripts, services, ui, workflow_recipes |
| 상위 확장자 | .rs: 441, .tsx: 362, .md: 333, .png: 305, .ts: 186, .json: 176, .yaml: 99, (none): 51, .yml: 47, .js: 41, .jpg: 29, .sh: 28 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/mcp-wiki | examples workspace | 18 |
| crates/goose | crates workspace | 16 |
| services/ask-ai-bot | services workspace | 13 |
| crates/goose-cli | crates workspace | 6 |
| crates/goose-server | crates workspace | 5 |
| crates/goose-sdk | crates workspace | 3 |
| crates/goose-test | crates workspace | 3 |
| crates/goose-acp-macros | crates workspace | 2 |
| crates/goose-mcp | crates workspace | 2 |
| crates/goose-providers | crates workspace | 2 |
| crates/goose-sdk-types | crates workspace | 2 |
| crates/goose-test-support | crates workspace | 2 |
| examples/plugins | examples workspace | 2 |
| .codex | top-level component | 1 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| crates | source boundary | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [ui/sdk/src/mcp-apps.ts](../../../../sources/aaif-goose__goose/ui/sdk/src/mcp-apps.ts) | mcp signal |
| mcp | [ui/desktop/tests/e2e/basic-mcp.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/basic-mcp.ts) | mcp signal |
| mcp | [scripts/test_mcp.sh](../../../../sources/aaif-goose__goose/scripts/test_mcp.sh) | mcp signal |
| mcp | [examples/mcp-wiki/.gitignore](../../../../sources/aaif-goose__goose/examples/mcp-wiki/.gitignore) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/aaif-goose__goose/AGENTS.md) | agentRuntime signal |
| agentRuntime | [workflow_recipes/release_risk_check/recipe.yaml](../../../../sources/aaif-goose__goose/workflow_recipes/release_risk_check/recipe.yaml) | agentRuntime signal |
| agentRuntime | [workflow_recipes/release_risk_check/release_risk_report.py](../../../../sources/aaif-goose__goose/workflow_recipes/release_risk_check/release_risk_report.py) | agentRuntime signal |
| agentRuntime | [workflow_recipes/release_risk_check/run.sh](../../../../sources/aaif-goose__goose/workflow_recipes/release_risk_check/run.sh) | agentRuntime signal |
| entrypoints | [ui/sdk/src/index.ts](../../../../sources/aaif-goose__goose/ui/sdk/src/index.ts) | entrypoints signal |
| entrypoints | [ui/desktop/src/App.test.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/App.test.tsx) | entrypoints signal |
| entrypoints | [ui/desktop/src/App.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/App.tsx) | entrypoints signal |
| entrypoints | [ui/desktop/src/main.ts](../../../../sources/aaif-goose__goose/ui/desktop/src/main.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 47 | [ui/sdk/src/index.ts](../../../../sources/aaif-goose__goose/ui/sdk/src/index.ts)<br>[ui/desktop/src/App.test.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/App.test.tsx)<br>[ui/desktop/src/App.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/App.tsx)<br>[ui/desktop/src/main.ts](../../../../sources/aaif-goose__goose/ui/desktop/src/main.ts)<br>[ui/desktop/src/platform/windows/bin/jbang.cmd](../../../../sources/aaif-goose__goose/ui/desktop/src/platform/windows/bin/jbang.cmd)<br>[ui/desktop/src/platform/windows/bin/npx.cmd](../../../../sources/aaif-goose__goose/ui/desktop/src/platform/windows/bin/npx.cmd)<br>[ui/desktop/src/platform/windows/bin/README.md](../../../../sources/aaif-goose__goose/ui/desktop/src/platform/windows/bin/README.md)<br>[ui/desktop/src/bin/.gitkeep](../../../../sources/aaif-goose__goose/ui/desktop/src/bin/.gitkeep) |
| agentRuntime | 138 | [AGENTS.md](../../../../sources/aaif-goose__goose/AGENTS.md)<br>[workflow_recipes/release_risk_check/recipe.yaml](../../../../sources/aaif-goose__goose/workflow_recipes/release_risk_check/recipe.yaml)<br>[workflow_recipes/release_risk_check/release_risk_report.py](../../../../sources/aaif-goose__goose/workflow_recipes/release_risk_check/release_risk_report.py)<br>[workflow_recipes/release_risk_check/run.sh](../../../../sources/aaif-goose__goose/workflow_recipes/release_risk_check/run.sh)<br>[ui/text/AGENTS.md](../../../../sources/aaif-goose__goose/ui/text/AGENTS.md)<br>[ui/desktop/tests/e2e/context-management.spec.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/context-management.spec.ts)<br>[ui/desktop/src/hooks/use-mobile.ts](../../../../sources/aaif-goose__goose/ui/desktop/src/hooks/use-mobile.ts)<br>[ui/desktop/src/hooks/useAnalytics.ts](../../../../sources/aaif-goose__goose/ui/desktop/src/hooks/useAnalytics.ts) |
| mcp | 270 | [ui/sdk/src/mcp-apps.ts](../../../../sources/aaif-goose__goose/ui/sdk/src/mcp-apps.ts)<br>[ui/desktop/tests/e2e/basic-mcp.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/basic-mcp.ts)<br>[scripts/test_mcp.sh](../../../../sources/aaif-goose__goose/scripts/test_mcp.sh)<br>[examples/mcp-wiki/.gitignore](../../../../sources/aaif-goose__goose/examples/mcp-wiki/.gitignore)<br>[examples/mcp-wiki/.python-version](../../../../sources/aaif-goose__goose/examples/mcp-wiki/.python-version)<br>[examples/mcp-wiki/pyproject.toml](../../../../sources/aaif-goose__goose/examples/mcp-wiki/pyproject.toml)<br>[examples/mcp-wiki/README.md](../../../../sources/aaif-goose__goose/examples/mcp-wiki/README.md)<br>[examples/mcp-wiki/src/mcp_wiki/__init__.py](../../../../sources/aaif-goose__goose/examples/mcp-wiki/src/mcp_wiki/__init__.py) |
| retrieval | 191 | [ui/sdk/src/index.ts](../../../../sources/aaif-goose__goose/ui/sdk/src/index.ts)<br>[ui/sdk/src/generated/index.ts](../../../../sources/aaif-goose__goose/ui/sdk/src/generated/index.ts)<br>[ui/install-link-generator/index.html](../../../../sources/aaif-goose__goose/ui/install-link-generator/index.html)<br>[ui/desktop/index.html](../../../../sources/aaif-goose__goose/ui/desktop/index.html)<br>[ui/desktop/src/recipe/index.ts](../../../../sources/aaif-goose__goose/ui/desktop/src/recipe/index.ts)<br>[ui/desktop/src/i18n/index.ts](../../../../sources/aaif-goose__goose/ui/desktop/src/i18n/index.ts)<br>[ui/desktop/src/components/settings/extensions/index.ts](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/extensions/index.ts)<br>[ui/desktop/src/components/icons/index.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/icons/index.tsx) |
| spec | 17 | [ui/desktop/tests/e2e/app.spec.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/app.spec.ts)<br>[ui/desktop/tests/e2e/context-management.spec.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/context-management.spec.ts)<br>[ui/desktop/tests/e2e/enhanced-context-management.spec.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/enhanced-context-management.spec.ts)<br>[ui/desktop/tests/e2e/loading-state.spec.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/loading-state.spec.ts)<br>[ui/desktop/tests/e2e/performance.spec.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/e2e/performance.spec.ts)<br>[documentation/src/pages/prompt-library/data/prompts/data-model-design.json](../../../../sources/aaif-goose__goose/documentation/src/pages/prompt-library/data/prompts/data-model-design.json)<br>[documentation/docs/guides/security/classification-api-spec.md](../../../../sources/aaif-goose__goose/documentation/docs/guides/security/classification-api-spec.md)<br>[documentation/docs/goose-architecture/_category_.json](../../../../sources/aaif-goose__goose/documentation/docs/goose-architecture/_category_.json) |
| eval | 219 | [goose-self-test.yaml](../../../../sources/aaif-goose__goose/goose-self-test.yaml)<br>[test_acp_client.py](../../../../sources/aaif-goose__goose/test_acp_client.py)<br>[ui/sdk/tsconfig.test.json](../../../../sources/aaif-goose__goose/ui/sdk/tsconfig.test.json)<br>[ui/sdk/tests/client-callbacks.test.ts](../../../../sources/aaif-goose__goose/ui/sdk/tests/client-callbacks.test.ts)<br>[ui/desktop/tests/integration/goosed.test.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/integration/goosed.test.ts)<br>[ui/desktop/tests/integration/setup.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/integration/setup.ts)<br>[ui/desktop/tests/integration/test_providers_code_exec.test.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/integration/test_providers_code_exec.test.ts)<br>[ui/desktop/tests/integration/test_providers_lib.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/integration/test_providers_lib.ts) |
| security | 58 | [SECURITY.md](../../../../sources/aaif-goose__goose/SECURITY.md)<br>[ui/desktop/src/components/settings/security/SecurityToggle.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/security/SecurityToggle.tsx)<br>[ui/desktop/src/components/settings/permission/PermissionModal.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/permission/PermissionModal.tsx)<br>[ui/desktop/src/components/settings/permission/PermissionRulesModal.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/permission/PermissionRulesModal.tsx)<br>[ui/desktop/src/components/settings/permission/PermissionSetting.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/permission/PermissionSetting.tsx)<br>[ui/desktop/src/components/settings/auth/AuthSettingsSection.test.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/auth/AuthSettingsSection.test.tsx)<br>[ui/desktop/src/components/settings/auth/AuthSettingsSection.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/auth/AuthSettingsSection.tsx)<br>[ui/desktop/src/components/settings/auth/HuggingFaceSignInPrompt.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/auth/HuggingFaceSignInPrompt.tsx) |
| ci | 47 | [.github/workflows/autoclose](../../../../sources/aaif-goose__goose/.github/workflows/autoclose)<br>[.github/workflows/build-cli.yml](../../../../sources/aaif-goose__goose/.github/workflows/build-cli.yml)<br>[.github/workflows/build-notify.yml](../../../../sources/aaif-goose__goose/.github/workflows/build-notify.yml)<br>[.github/workflows/bundle-desktop-intel.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop-intel.yml)<br>[.github/workflows/bundle-desktop-linux.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop-linux.yml)<br>[.github/workflows/bundle-desktop-manual.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop-manual.yml)<br>[.github/workflows/bundle-desktop-windows.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop-windows.yml)<br>[.github/workflows/bundle-desktop.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop.yml) |
| container | 6 | [Dockerfile](../../../../sources/aaif-goose__goose/Dockerfile)<br>[services/ask-ai-bot/Dockerfile](../../../../sources/aaif-goose__goose/services/ask-ai-bot/Dockerfile)<br>[recipe-scanner/Dockerfile](../../../../sources/aaif-goose__goose/recipe-scanner/Dockerfile)<br>[documentation/docs/docker/docker-compose.yml](../../../../sources/aaif-goose__goose/documentation/docs/docker/docker-compose.yml)<br>[documentation/docs/docker/Dockerfile](../../../../sources/aaif-goose__goose/documentation/docs/docker/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/aaif-goose__goose/.devcontainer/Dockerfile) |
| instruction | 7 | [AGENTS.md](../../../../sources/aaif-goose__goose/AGENTS.md)<br>[CLAUDE.md](../../../../sources/aaif-goose__goose/CLAUDE.md)<br>[ui/text/AGENTS.md](../../../../sources/aaif-goose__goose/ui/text/AGENTS.md)<br>[ui/text/CLAUDE.md](../../../../sources/aaif-goose__goose/ui/text/CLAUDE.md)<br>[documentation/AGENTS.md](../../../../sources/aaif-goose__goose/documentation/AGENTS.md)<br>[documentation/CLAUDE.md](../../../../sources/aaif-goose__goose/documentation/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/aaif-goose__goose/.github/copilot-instructions.md) |
| docs | 252 | [README.md](../../../../sources/aaif-goose__goose/README.md)<br>[ui/text/README.md](../../../../sources/aaif-goose__goose/ui/text/README.md)<br>[ui/sdk/README.md](../../../../sources/aaif-goose__goose/ui/sdk/README.md)<br>[ui/goose-binary/README.md](../../../../sources/aaif-goose__goose/ui/goose-binary/README.md)<br>[ui/desktop/README.md](../../../../sources/aaif-goose__goose/ui/desktop/README.md)<br>[ui/desktop/src/platform/windows/bin/README.md](../../../../sources/aaif-goose__goose/ui/desktop/src/platform/windows/bin/README.md)<br>[ui/desktop/scripts/README.md](../../../../sources/aaif-goose__goose/ui/desktop/scripts/README.md)<br>[ui/.changeset/README.md](../../../../sources/aaif-goose__goose/ui/.changeset/README.md) |
| config | 37 | [Cargo.lock](../../../../sources/aaif-goose__goose/Cargo.lock)<br>[Cargo.toml](../../../../sources/aaif-goose__goose/Cargo.toml)<br>[ui/package.json](../../../../sources/aaif-goose__goose/ui/package.json)<br>[ui/pnpm-workspace.yaml](../../../../sources/aaif-goose__goose/ui/pnpm-workspace.yaml)<br>[ui/text/package.json](../../../../sources/aaif-goose__goose/ui/text/package.json)<br>[ui/text/tsconfig.json](../../../../sources/aaif-goose__goose/ui/text/tsconfig.json)<br>[ui/sdk/package.json](../../../../sources/aaif-goose__goose/ui/sdk/package.json)<br>[ui/sdk/tsconfig.json](../../../../sources/aaif-goose__goose/ui/sdk/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 219 | [goose-self-test.yaml](../../../../sources/aaif-goose__goose/goose-self-test.yaml)<br>[test_acp_client.py](../../../../sources/aaif-goose__goose/test_acp_client.py)<br>[ui/sdk/tsconfig.test.json](../../../../sources/aaif-goose__goose/ui/sdk/tsconfig.test.json)<br>[ui/sdk/tests/client-callbacks.test.ts](../../../../sources/aaif-goose__goose/ui/sdk/tests/client-callbacks.test.ts)<br>[ui/desktop/tests/integration/goosed.test.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/integration/goosed.test.ts)<br>[ui/desktop/tests/integration/setup.ts](../../../../sources/aaif-goose__goose/ui/desktop/tests/integration/setup.ts) |
| CI workflow | 47 | [.github/workflows/autoclose](../../../../sources/aaif-goose__goose/.github/workflows/autoclose)<br>[.github/workflows/build-cli.yml](../../../../sources/aaif-goose__goose/.github/workflows/build-cli.yml)<br>[.github/workflows/build-notify.yml](../../../../sources/aaif-goose__goose/.github/workflows/build-notify.yml)<br>[.github/workflows/bundle-desktop-intel.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop-intel.yml)<br>[.github/workflows/bundle-desktop-linux.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop-linux.yml)<br>[.github/workflows/bundle-desktop-manual.yml](../../../../sources/aaif-goose__goose/.github/workflows/bundle-desktop-manual.yml) |
| 컨테이너/배포 | 6 | [Dockerfile](../../../../sources/aaif-goose__goose/Dockerfile)<br>[services/ask-ai-bot/Dockerfile](../../../../sources/aaif-goose__goose/services/ask-ai-bot/Dockerfile)<br>[recipe-scanner/Dockerfile](../../../../sources/aaif-goose__goose/recipe-scanner/Dockerfile)<br>[documentation/docs/docker/docker-compose.yml](../../../../sources/aaif-goose__goose/documentation/docs/docker/docker-compose.yml)<br>[documentation/docs/docker/Dockerfile](../../../../sources/aaif-goose__goose/documentation/docs/docker/Dockerfile)<br>[.devcontainer/Dockerfile](../../../../sources/aaif-goose__goose/.devcontainer/Dockerfile) |
| 보안/정책 | 58 | [SECURITY.md](../../../../sources/aaif-goose__goose/SECURITY.md)<br>[ui/desktop/src/components/settings/security/SecurityToggle.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/security/SecurityToggle.tsx)<br>[ui/desktop/src/components/settings/permission/PermissionModal.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/permission/PermissionModal.tsx)<br>[ui/desktop/src/components/settings/permission/PermissionRulesModal.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/permission/PermissionRulesModal.tsx)<br>[ui/desktop/src/components/settings/permission/PermissionSetting.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/permission/PermissionSetting.tsx)<br>[ui/desktop/src/components/settings/auth/AuthSettingsSection.test.tsx](../../../../sources/aaif-goose__goose/ui/desktop/src/components/settings/auth/AuthSettingsSection.test.tsx) |
| 에이전트 지시문 | 7 | [AGENTS.md](../../../../sources/aaif-goose__goose/AGENTS.md)<br>[CLAUDE.md](../../../../sources/aaif-goose__goose/CLAUDE.md)<br>[ui/text/AGENTS.md](../../../../sources/aaif-goose__goose/ui/text/AGENTS.md)<br>[ui/text/CLAUDE.md](../../../../sources/aaif-goose__goose/ui/text/CLAUDE.md)<br>[documentation/AGENTS.md](../../../../sources/aaif-goose__goose/documentation/AGENTS.md)<br>[documentation/CLAUDE.md](../../../../sources/aaif-goose__goose/documentation/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `ui/sdk/src/mcp-apps.ts`, `ui/desktop/tests/e2e/basic-mcp.ts`, `scripts/test_mcp.sh`.
2. entrypoint를 따라 실행 흐름 확인: `ui/sdk/src/index.ts`, `ui/desktop/src/App.test.tsx`, `ui/desktop/src/App.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `workflow_recipes/release_risk_check/recipe.yaml`, `workflow_recipes/release_risk_check/release_risk_report.py`.
4. retrieval/memory/indexing 확인: `ui/sdk/src/index.ts`, `ui/sdk/src/generated/index.ts`, `ui/install-link-generator/index.html`.
5. test/eval 파일로 동작 검증: `goose-self-test.yaml`, `test_acp_client.py`, `ui/sdk/tsconfig.test.json`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 2325 files, 492 directories.. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, README.md, AGENTS.md, CLAUDE.md이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
