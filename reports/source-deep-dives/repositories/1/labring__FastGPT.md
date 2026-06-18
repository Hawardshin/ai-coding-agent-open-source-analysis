# labring/FastGPT 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

FastGPT is a knowledge-based platform built on the LLMs, offers a comprehensive suite of out-of-the-box capabilities such as data processing, RAG retrieval, and visual AI workflow orchestration, letting you easily develop and deploy complex question-answering systems without the need for extensive setup or configuration.

## 요약

- 조사 단위: `sources/labring__FastGPT` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 5,024 files, 1,622 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=projects/mcp_server/.env.template, projects/mcp_server/Dockerfile, projects/mcp_server/package.json이고, 의존성 단서는 next, react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | labring/FastGPT |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 28496 |
| Forks | 7156 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/labring__FastGPT](../../../../sources/labring__FastGPT) |
| 기존 보고서 | [reports/korea-trending/repositories/labring__FastGPT.md](../../../korea-trending/repositories/labring__FastGPT.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 5024 / 1622 |
| 관측 최대 깊이 | 13 |
| 상위 디렉터리 | .agents, .github, .husky, bin, deploy, document, packages, pro, projects, scripts, sdk, test |
| 상위 확장자 | .ts: 2204, .tsx: 821, .svg: 547, .png: 414, .mdx: 349, .json: 177, .js: 129, .md: 116, .yml: 48, .yaml: 46, .jpg: 37, (none): 34 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/service | packages workspace | 13 |
| packages/web | packages workspace | 10 |
| packages/global | packages workspace | 4 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| deploy | deployment surface | 1 |
| document | documentation surface | 1 |
| packages | source boundary | 1 |
| packages/README.md | packages workspace | 1 |
| pro | top-level component | 1 |
| projects | top-level component | 1 |
| scripts | top-level component | 1 |
| sdk | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev:pro | turbo run dev:pro --filter=@fastgpt/app |
| utility | package.json | prepare | husky install |
| build | package.json | gen:theme-typings | chakra-cli tokens packages/web/styles/theme.ts --out node_modules/.pnpm/node_modules/@chakra-ui/styled-system/dist/theming.types.d.ts |
| utility | package.json | gen:deploy | node ./deploy/init.mjs |
| build | package.json | postinstall | pnpm gen:theme-typings && pnpm run build:sdks |
| quality | package.json | initIcon | node ./scripts/icon/init.js && prettier --config "./.prettierrc.js" --write "packages/web/components/common/Icon/constants.ts" |
| utility | package.json | previewIcon | node ./scripts/icon/index.js |
| quality | package.json | lint | turbo run lint |
| utility | package.json | create:i18n | node ./scripts/i18n/index.js |
| quality | package.json | clean:unused:pro | node --experimental-strip-types ./pro/scripts/cleanup-unused.ts |
| quality | package.json | clean:unused:pro:write | node --experimental-strip-types ./pro/scripts/cleanup-unused.ts --write |
| test | package.json | test | pnpm test:workspace |
| test | package.json | test:all | pnpm test:workspace && pnpm test:vector |
| test | package.json | test:repo | vitest run --config vitest.config.mts --coverage --passWithNoTests |
| test | package.json | test:workspace | turbo run test --filter=@fastgpt/app --filter=@fastgpt/admin --filter=@fastgpt/global --filter=@fastgpt/service |
| test | package.json | test:app | turbo run test --filter=@fastgpt/app |
| test | package.json | test:admin | turbo run test --filter=@fastgpt/admin |
| test | package.json | test:global | turbo run test --filter=@fastgpt/global |
| test | package.json | test:service | turbo run test --filter=@fastgpt/service |
| test | package.json | test:service:integration | turbo run test:integration --filter=@fastgpt/service |
| test | package.json | test:vector | turbo run test:integration --filter=@fastgpt/service |
| build | package.json | build:sdks | pnpm -r --filter @fastgpt-sdk/storage --filter @fastgpt-sdk/otel --filter @fastgpt-sdk/sandbox-adapter build |
| utility | Makefile | .PHONY | make .PHONY |
| serve-dev | Makefile | dev | make dev |
| build | Makefile | build | make build |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | next, react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [projects/mcp_server/.env.template](../../../../sources/labring__FastGPT/projects/mcp_server/.env.template) | mcp signal |
| mcp | [projects/mcp_server/Dockerfile](../../../../sources/labring__FastGPT/projects/mcp_server/Dockerfile) | mcp signal |
| mcp | [projects/mcp_server/package.json](../../../../sources/labring__FastGPT/projects/mcp_server/package.json) | mcp signal |
| mcp | [projects/mcp_server/tsconfig.json](../../../../sources/labring__FastGPT/projects/mcp_server/tsconfig.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/labring__FastGPT/AGENTS.md) | agentRuntime signal |
| agentRuntime | [sdk/sandbox-adapter/package.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/package.json) | agentRuntime signal |
| agentRuntime | [sdk/sandbox-adapter/README.md](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/README.md) | agentRuntime signal |
| agentRuntime | [sdk/sandbox-adapter/tsconfig.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tsconfig.json) | agentRuntime signal |
| entrypoints | [sdk/storage/src/index.ts](../../../../sources/labring__FastGPT/sdk/storage/src/index.ts) | entrypoints signal |
| entrypoints | [sdk/sandbox-adapter/src/index.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/src/index.ts) | entrypoints signal |
| entrypoints | [sdk/otel/src/index.ts](../../../../sources/labring__FastGPT/sdk/otel/src/index.ts) | entrypoints signal |
| entrypoints | [projects/volume-manager/src/index.ts](../../../../sources/labring__FastGPT/projects/volume-manager/src/index.ts) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 9 | [sdk/storage/src/index.ts](../../../../sources/labring__FastGPT/sdk/storage/src/index.ts)<br>[sdk/sandbox-adapter/src/index.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/src/index.ts)<br>[sdk/otel/src/index.ts](../../../../sources/labring__FastGPT/sdk/otel/src/index.ts)<br>[projects/volume-manager/src/index.ts](../../../../sources/labring__FastGPT/projects/volume-manager/src/index.ts)<br>[projects/mcp_server/src/index.ts](../../../../sources/labring__FastGPT/projects/mcp_server/src/index.ts)<br>[projects/fastgpt-ide-agent/src/main.rs](../../../../sources/labring__FastGPT/projects/fastgpt-ide-agent/src/main.rs)<br>[projects/code-sandbox/src/index.ts](../../../../sources/labring__FastGPT/projects/code-sandbox/src/index.ts)<br>[projects/agent-sandbox-proxy/src/main.rs](../../../../sources/labring__FastGPT/projects/agent-sandbox-proxy/src/main.rs) |
| agentRuntime | 987 | [AGENTS.md](../../../../sources/labring__FastGPT/AGENTS.md)<br>[sdk/sandbox-adapter/package.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/package.json)<br>[sdk/sandbox-adapter/README.md](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/README.md)<br>[sdk/sandbox-adapter/tsconfig.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tsconfig.json)<br>[sdk/sandbox-adapter/tsdown.config.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tsdown.config.ts)<br>[sdk/sandbox-adapter/vitest.config.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/vitest.config.ts)<br>[sdk/sandbox-adapter/tests/unit/utils/base64.test.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tests/unit/utils/base64.test.ts)<br>[sdk/sandbox-adapter/tests/unit/utils/image.test.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tests/unit/utils/image.test.ts) |
| mcp | 51 | [projects/mcp_server/.env.template](../../../../sources/labring__FastGPT/projects/mcp_server/.env.template)<br>[projects/mcp_server/Dockerfile](../../../../sources/labring__FastGPT/projects/mcp_server/Dockerfile)<br>[projects/mcp_server/package.json](../../../../sources/labring__FastGPT/projects/mcp_server/package.json)<br>[projects/mcp_server/tsconfig.json](../../../../sources/labring__FastGPT/projects/mcp_server/tsconfig.json)<br>[projects/mcp_server/src/env.ts](../../../../sources/labring__FastGPT/projects/mcp_server/src/env.ts)<br>[projects/mcp_server/src/index.ts](../../../../sources/labring__FastGPT/projects/mcp_server/src/index.ts)<br>[projects/mcp_server/src/init.ts](../../../../sources/labring__FastGPT/projects/mcp_server/src/init.ts)<br>[projects/mcp_server/src/logger.ts](../../../../sources/labring__FastGPT/projects/mcp_server/src/logger.ts) |
| retrieval | 426 | [test/mocks/index.ts](../../../../sources/labring__FastGPT/test/mocks/index.ts)<br>[test/mocks/core/ai/embedding.ts](../../../../sources/labring__FastGPT/test/mocks/core/ai/embedding.ts)<br>[test/mocks/common/vector.ts](../../../../sources/labring__FastGPT/test/mocks/common/vector.ts)<br>[sdk/storage/src/index.ts](../../../../sources/labring__FastGPT/sdk/storage/src/index.ts)<br>[sdk/sandbox-adapter/tests/mocks/index.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tests/mocks/index.ts)<br>[sdk/sandbox-adapter/src/index.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/src/index.ts)<br>[sdk/sandbox-adapter/src/types/index.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/src/types/index.ts)<br>[sdk/sandbox-adapter/src/interfaces/index.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/src/interfaces/index.ts) |
| spec | 47 | [projects/code-sandbox/requirements.txt](../../../../sources/labring__FastGPT/projects/code-sandbox/requirements.txt)<br>[packages/service/support/invoke/DESIGN.md](../../../../sources/labring__FastGPT/packages/service/support/invoke/DESIGN.md)<br>[packages/service/core/app/tool/DESIGN.md](../../../../sources/labring__FastGPT/packages/service/core/app/tool/DESIGN.md)<br>[document/content/self-host/design/dataset.en.mdx](../../../../sources/labring__FastGPT/document/content/self-host/design/dataset.en.mdx)<br>[document/content/self-host/design/dataset.mdx](../../../../sources/labring__FastGPT/document/content/self-host/design/dataset.mdx)<br>[document/content/self-host/design/meta.en.json](../../../../sources/labring__FastGPT/document/content/self-host/design/meta.en.json)<br>[document/content/self-host/design/meta.json](../../../../sources/labring__FastGPT/document/content/self-host/design/meta.json)<br>[.agents/design/图搜图-当前需求-功能开发文档.md](../../../../sources/labring__FastGPT/.agents/design/图搜图-当前需求-功能开发文档.md) |
| eval | 561 | [test/.env.example](../../../../sources/labring__FastGPT/test/.env.example)<br>[test/globalSetup.ts](../../../../sources/labring__FastGPT/test/globalSetup.ts)<br>[test/setup.ts](../../../../sources/labring__FastGPT/test/setup.ts)<br>[test/setupModels.ts](../../../../sources/labring__FastGPT/test/setupModels.ts)<br>[test/tsconfig.json](../../../../sources/labring__FastGPT/test/tsconfig.json)<br>[test/vitestWorkers.ts](../../../../sources/labring__FastGPT/test/vitestWorkers.ts)<br>[test/utils/env.ts](../../../../sources/labring__FastGPT/test/utils/env.ts)<br>[test/utils/request.ts](../../../../sources/labring__FastGPT/test/utils/request.ts) |
| security | 374 | [SECURITY.md](../../../../sources/labring__FastGPT/SECURITY.md)<br>[test/mocks/support/user/auth/controller.ts](../../../../sources/labring__FastGPT/test/mocks/support/user/auth/controller.ts)<br>[test/mocks/support/audit/utils.ts](../../../../sources/labring__FastGPT/test/mocks/support/audit/utils.ts)<br>[sdk/sandbox-adapter/package.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/package.json)<br>[sdk/sandbox-adapter/README.md](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/README.md)<br>[sdk/sandbox-adapter/tsconfig.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tsconfig.json)<br>[sdk/sandbox-adapter/tsdown.config.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tsdown.config.ts)<br>[sdk/sandbox-adapter/vitest.config.ts](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/vitest.config.ts) |
| ci | 22 | [.github/workflows/auto-close-issue.yml](../../../../sources/labring__FastGPT/.github/workflows/auto-close-issue.yml)<br>[.github/workflows/build-admin.yml](../../../../sources/labring__FastGPT/.github/workflows/build-admin.yml)<br>[.github/workflows/build-agent-sandbox.yml](../../../../sources/labring__FastGPT/.github/workflows/build-agent-sandbox.yml)<br>[.github/workflows/build-browser-sandbox.yml](../../../../sources/labring__FastGPT/.github/workflows/build-browser-sandbox.yml)<br>[.github/workflows/build-code-sandbox.yml](../../../../sources/labring__FastGPT/.github/workflows/build-code-sandbox.yml)<br>[.github/workflows/build-docs.yml](../../../../sources/labring__FastGPT/.github/workflows/build-docs.yml)<br>[.github/workflows/build-fastgpt-ide-agent.yml](../../../../sources/labring__FastGPT/.github/workflows/build-fastgpt-ide-agent.yml)<br>[.github/workflows/build-fastgpt.yml](../../../../sources/labring__FastGPT/.github/workflows/build-fastgpt.yml) |
| container | 125 | [projects/volume-manager/Dockerfile](../../../../sources/labring__FastGPT/projects/volume-manager/Dockerfile)<br>[projects/mcp_server/Dockerfile](../../../../sources/labring__FastGPT/projects/mcp_server/Dockerfile)<br>[projects/marketplace/Dockerfile](../../../../sources/labring__FastGPT/projects/marketplace/Dockerfile)<br>[projects/fastgpt-ide-agent/Dockerfile](../../../../sources/labring__FastGPT/projects/fastgpt-ide-agent/Dockerfile)<br>[projects/code-sandbox/Dockerfile](../../../../sources/labring__FastGPT/projects/code-sandbox/Dockerfile)<br>[projects/app/Dockerfile](../../../../sources/labring__FastGPT/projects/app/Dockerfile)<br>[projects/app/public/js/monaco-editor.0.45.0/vs/basic-languages/dockerfile/dockerfile.js](../../../../sources/labring__FastGPT/projects/app/public/js/monaco-editor.0.45.0/vs/basic-languages/dockerfile/dockerfile.js)<br>[projects/agent-sandbox-proxy/Dockerfile](../../../../sources/labring__FastGPT/projects/agent-sandbox-proxy/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/labring__FastGPT/AGENTS.md) |
| docs | 45 | [README_en.md](../../../../sources/labring__FastGPT/README_en.md)<br>[README_id.md](../../../../sources/labring__FastGPT/README_id.md)<br>[README_ja.md](../../../../sources/labring__FastGPT/README_ja.md)<br>[README_th.md](../../../../sources/labring__FastGPT/README_th.md)<br>[README_vi.md](../../../../sources/labring__FastGPT/README_vi.md)<br>[README.md](../../../../sources/labring__FastGPT/README.md)<br>[sdk/storage/README.md](../../../../sources/labring__FastGPT/sdk/storage/README.md)<br>[sdk/sandbox-adapter/README.md](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/README.md) |
| config | 41 | [Makefile](../../../../sources/labring__FastGPT/Makefile)<br>[package.json](../../../../sources/labring__FastGPT/package.json)<br>[pnpm-workspace.yaml](../../../../sources/labring__FastGPT/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/labring__FastGPT/tsconfig.json)<br>[turbo.json](../../../../sources/labring__FastGPT/turbo.json)<br>[test/tsconfig.json](../../../../sources/labring__FastGPT/test/tsconfig.json)<br>[sdk/storage/package.json](../../../../sources/labring__FastGPT/sdk/storage/package.json)<br>[sdk/storage/tsconfig.json](../../../../sources/labring__FastGPT/sdk/storage/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 561 | [test/.env.example](../../../../sources/labring__FastGPT/test/.env.example)<br>[test/globalSetup.ts](../../../../sources/labring__FastGPT/test/globalSetup.ts)<br>[test/setup.ts](../../../../sources/labring__FastGPT/test/setup.ts)<br>[test/setupModels.ts](../../../../sources/labring__FastGPT/test/setupModels.ts)<br>[test/tsconfig.json](../../../../sources/labring__FastGPT/test/tsconfig.json)<br>[test/vitestWorkers.ts](../../../../sources/labring__FastGPT/test/vitestWorkers.ts) |
| CI workflow | 22 | [.github/workflows/auto-close-issue.yml](../../../../sources/labring__FastGPT/.github/workflows/auto-close-issue.yml)<br>[.github/workflows/build-admin.yml](../../../../sources/labring__FastGPT/.github/workflows/build-admin.yml)<br>[.github/workflows/build-agent-sandbox.yml](../../../../sources/labring__FastGPT/.github/workflows/build-agent-sandbox.yml)<br>[.github/workflows/build-browser-sandbox.yml](../../../../sources/labring__FastGPT/.github/workflows/build-browser-sandbox.yml)<br>[.github/workflows/build-code-sandbox.yml](../../../../sources/labring__FastGPT/.github/workflows/build-code-sandbox.yml)<br>[.github/workflows/build-docs.yml](../../../../sources/labring__FastGPT/.github/workflows/build-docs.yml) |
| 컨테이너/배포 | 125 | [projects/volume-manager/Dockerfile](../../../../sources/labring__FastGPT/projects/volume-manager/Dockerfile)<br>[projects/mcp_server/Dockerfile](../../../../sources/labring__FastGPT/projects/mcp_server/Dockerfile)<br>[projects/marketplace/Dockerfile](../../../../sources/labring__FastGPT/projects/marketplace/Dockerfile)<br>[projects/fastgpt-ide-agent/Dockerfile](../../../../sources/labring__FastGPT/projects/fastgpt-ide-agent/Dockerfile)<br>[projects/code-sandbox/Dockerfile](../../../../sources/labring__FastGPT/projects/code-sandbox/Dockerfile)<br>[projects/app/Dockerfile](../../../../sources/labring__FastGPT/projects/app/Dockerfile) |
| 보안/정책 | 374 | [SECURITY.md](../../../../sources/labring__FastGPT/SECURITY.md)<br>[test/mocks/support/user/auth/controller.ts](../../../../sources/labring__FastGPT/test/mocks/support/user/auth/controller.ts)<br>[test/mocks/support/audit/utils.ts](../../../../sources/labring__FastGPT/test/mocks/support/audit/utils.ts)<br>[sdk/sandbox-adapter/package.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/package.json)<br>[sdk/sandbox-adapter/README.md](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/README.md)<br>[sdk/sandbox-adapter/tsconfig.json](../../../../sources/labring__FastGPT/sdk/sandbox-adapter/tsconfig.json) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/labring__FastGPT/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `projects/mcp_server/.env.template`, `projects/mcp_server/Dockerfile`, `projects/mcp_server/package.json`.
2. entrypoint를 따라 실행 흐름 확인: `sdk/storage/src/index.ts`, `sdk/sandbox-adapter/src/index.ts`, `sdk/otel/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `sdk/sandbox-adapter/package.json`, `sdk/sandbox-adapter/README.md`.
4. retrieval/memory/indexing 확인: `test/mocks/index.ts`, `test/mocks/core/ai/embedding.ts`, `test/mocks/common/vector.ts`.
5. test/eval 파일로 동작 검증: `test/.env.example`, `test/globalSetup.ts`, `test/setup.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 FastGPT is a knowledge based platform built on the LLMs, offers a comprehensive suite of out of the box capabilities suc. 핵심 구조 신호는 TypeScript, package.json, Makefile, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
