# plandex-ai/plandex 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 687 files, 99 directories.

## 요약

- 조사 단위: `sources/plandex-ai__plandex` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 687 files, 99 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=app/server/main.go, app/server/syntax/file_map/cli/main.go, app/cli/main.go이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | plandex-ai/plandex |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | global |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/plandex-ai__plandex](../../../../sources/plandex-ai__plandex) |
| 기존 보고서 | [reports/clone-structures/plandex-ai__plandex.md](../../../clone-structures/plandex-ai__plandex.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 687 / 99 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, app, docs, images, plans, releases, scripts, test |
| 상위 확장자 | .go: 337, .md: 126, .sql: 50, .json: 26, .txt: 19, .sh: 16, .png: 15, (none): 15, .gif: 10, .ts: 10, .yml: 10, .c: 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 43 |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| images | top-level component | 1 |
| plans | top-level component | 1 |
| releases | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


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
| entrypoints | [app/server/main.go](../../../../sources/plandex-ai__plandex/app/server/main.go) | entrypoints signal |
| entrypoints | [app/server/syntax/file_map/cli/main.go](../../../../sources/plandex-ai__plandex/app/server/syntax/file_map/cli/main.go) | entrypoints signal |
| entrypoints | [app/cli/main.go](../../../../sources/plandex-ai__plandex/app/cli/main.go) | entrypoints signal |
| config | [test/project/react-redux-foobar/package.json](../../../../sources/plandex-ai__plandex/test/project/react-redux-foobar/package.json) | config signal |
| config | [test/project/react-redux-foobar/tsconfig.json](../../../../sources/plandex-ai__plandex/test/project/react-redux-foobar/tsconfig.json) | config signal |
| config | [test/pong/Makefile](../../../../sources/plandex-ai__plandex/test/pong/Makefile) | config signal |
| config | [docs/package.json](../../../../sources/plandex-ai__plandex/docs/package.json) | config signal |
| docs | [README.md](../../../../sources/plandex-ai__plandex/README.md) | docs signal |
| docs | [test/pong/README.md](../../../../sources/plandex-ai__plandex/test/pong/README.md) | docs signal |
| docs | [test/evals/promptfoo-poc/README.md](../../../../sources/plandex-ai__plandex/test/evals/promptfoo-poc/README.md) | docs signal |
| docs | [docs/.gitignore](../../../../sources/plandex-ai__plandex/docs/.gitignore) | docs signal |
| eval | [test/_test_apply.sh](../../../../sources/plandex-ai__plandex/test/_test_apply.sh) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [app/server/main.go](../../../../sources/plandex-ai__plandex/app/server/main.go)<br>[app/server/syntax/file_map/cli/main.go](../../../../sources/plandex-ai__plandex/app/server/syntax/file_map/cli/main.go)<br>[app/cli/main.go](../../../../sources/plandex-ai__plandex/app/cli/main.go) |
| agentRuntime | 19 | [docs/docs/core-concepts/context-management.md](../../../../sources/plandex-ai__plandex/docs/docs/core-concepts/context-management.md)<br>[app/shared/context.go](../../../../sources/plandex-ai__plandex/app/shared/context.go)<br>[app/server/hooks/hooks.go](../../../../sources/plandex-ai__plandex/app/server/hooks/hooks.go)<br>[app/server/handlers/context_helper.go](../../../../sources/plandex-ai__plandex/app/server/handlers/context_helper.go)<br>[app/server/db/context_helpers_conflicts.go](../../../../sources/plandex-ai__plandex/app/server/db/context_helpers_conflicts.go)<br>[app/server/db/context_helpers_get.go](../../../../sources/plandex-ai__plandex/app/server/db/context_helpers_get.go)<br>[app/server/db/context_helpers_load.go](../../../../sources/plandex-ai__plandex/app/server/db/context_helpers_load.go)<br>[app/server/db/context_helpers_map.go](../../../../sources/plandex-ai__plandex/app/server/db/context_helpers_map.go) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [docs/blog/2021-08-26-welcome/index.md](../../../../sources/plandex-ai__plandex/docs/blog/2021-08-26-welcome/index.md) |
| spec | 0 | 명확하지 않음 |
| eval | 75 | [test/_test_apply.sh](../../../../sources/plandex-ai__plandex/test/_test_apply.sh)<br>[test/error-test.html](../../../../sources/plandex-ai__plandex/test/error-test.html)<br>[test/plan_deletion_test.sh](../../../../sources/plandex-ai__plandex/test/plan_deletion_test.sh)<br>[test/smoke_test.sh](../../../../sources/plandex-ai__plandex/test/smoke_test.sh)<br>[test/test_custom_models.sh](../../../../sources/plandex-ai__plandex/test/test_custom_models.sh)<br>[test/test_utils.sh](../../../../sources/plandex-ai__plandex/test/test_utils.sh)<br>[test/test_prompts/aws-infra.txt](../../../../sources/plandex-ai__plandex/test/test_prompts/aws-infra.txt)<br>[test/test_prompts/pong.txt](../../../../sources/plandex-ai__plandex/test/test_prompts/pong.txt) |
| security | 15 | [docs/docs/security.md](../../../../sources/plandex-ai__plandex/docs/docs/security.md)<br>[app/shared/auth.go](../../../../sources/plandex-ai__plandex/app/shared/auth.go)<br>[app/shared/rbac.go](../../../../sources/plandex-ai__plandex/app/shared/rbac.go)<br>[app/server/types/auth.go](../../../../sources/plandex-ai__plandex/app/server/types/auth.go)<br>[app/server/migrations/2024011700_rbac.down.sql](../../../../sources/plandex-ai__plandex/app/server/migrations/2024011700_rbac.down.sql)<br>[app/server/migrations/2024011700_rbac.up.sql](../../../../sources/plandex-ai__plandex/app/server/migrations/2024011700_rbac.up.sql)<br>[app/server/handlers/auth_helpers.go](../../../../sources/plandex-ai__plandex/app/server/handlers/auth_helpers.go)<br>[app/server/db/auth_helpers.go](../../../../sources/plandex-ai__plandex/app/server/db/auth_helpers.go) |
| ci | 1 | [.github/workflows/docker-publish.yml](../../../../sources/plandex-ai__plandex/.github/workflows/docker-publish.yml) |
| container | 3 | [app/docker-compose.yml](../../../../sources/plandex-ai__plandex/app/docker-compose.yml)<br>[app/server/Dockerfile](../../../../sources/plandex-ai__plandex/app/server/Dockerfile)<br>[app/server/syntax/file_map/examples/dockerfile_example](../../../../sources/plandex-ai__plandex/app/server/syntax/file_map/examples/dockerfile_example) |
| instruction | 0 | 명확하지 않음 |
| docs | 62 | [README.md](../../../../sources/plandex-ai__plandex/README.md)<br>[test/pong/README.md](../../../../sources/plandex-ai__plandex/test/pong/README.md)<br>[test/evals/promptfoo-poc/README.md](../../../../sources/plandex-ai__plandex/test/evals/promptfoo-poc/README.md)<br>[docs/.gitignore](../../../../sources/plandex-ai__plandex/docs/.gitignore)<br>[docs/babel.config.js](../../../../sources/plandex-ai__plandex/docs/babel.config.js)<br>[docs/docusaurus.config.ts](../../../../sources/plandex-ai__plandex/docs/docusaurus.config.ts)<br>[docs/package-lock.json](../../../../sources/plandex-ai__plandex/docs/package-lock.json)<br>[docs/package.json](../../../../sources/plandex-ai__plandex/docs/package.json) |
| config | 9 | [test/project/react-redux-foobar/package.json](../../../../sources/plandex-ai__plandex/test/project/react-redux-foobar/package.json)<br>[test/project/react-redux-foobar/tsconfig.json](../../../../sources/plandex-ai__plandex/test/project/react-redux-foobar/tsconfig.json)<br>[test/pong/Makefile](../../../../sources/plandex-ai__plandex/test/pong/Makefile)<br>[docs/package.json](../../../../sources/plandex-ai__plandex/docs/package.json)<br>[docs/tsconfig.json](../../../../sources/plandex-ai__plandex/docs/tsconfig.json)<br>[app/shared/go.mod](../../../../sources/plandex-ai__plandex/app/shared/go.mod)<br>[app/server/go.mod](../../../../sources/plandex-ai__plandex/app/server/go.mod)<br>[app/server/syntax/file_map/cli/go.mod](../../../../sources/plandex-ai__plandex/app/server/syntax/file_map/cli/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 75 | [test/_test_apply.sh](../../../../sources/plandex-ai__plandex/test/_test_apply.sh)<br>[test/error-test.html](../../../../sources/plandex-ai__plandex/test/error-test.html)<br>[test/plan_deletion_test.sh](../../../../sources/plandex-ai__plandex/test/plan_deletion_test.sh)<br>[test/smoke_test.sh](../../../../sources/plandex-ai__plandex/test/smoke_test.sh)<br>[test/test_custom_models.sh](../../../../sources/plandex-ai__plandex/test/test_custom_models.sh)<br>[test/test_utils.sh](../../../../sources/plandex-ai__plandex/test/test_utils.sh) |
| CI workflow | 1 | [.github/workflows/docker-publish.yml](../../../../sources/plandex-ai__plandex/.github/workflows/docker-publish.yml) |
| 컨테이너/배포 | 3 | [app/docker-compose.yml](../../../../sources/plandex-ai__plandex/app/docker-compose.yml)<br>[app/server/Dockerfile](../../../../sources/plandex-ai__plandex/app/server/Dockerfile)<br>[app/server/syntax/file_map/examples/dockerfile_example](../../../../sources/plandex-ai__plandex/app/server/syntax/file_map/examples/dockerfile_example) |
| 보안/정책 | 15 | [docs/docs/security.md](../../../../sources/plandex-ai__plandex/docs/docs/security.md)<br>[app/shared/auth.go](../../../../sources/plandex-ai__plandex/app/shared/auth.go)<br>[app/shared/rbac.go](../../../../sources/plandex-ai__plandex/app/shared/rbac.go)<br>[app/server/types/auth.go](../../../../sources/plandex-ai__plandex/app/server/types/auth.go)<br>[app/server/migrations/2024011700_rbac.down.sql](../../../../sources/plandex-ai__plandex/app/server/migrations/2024011700_rbac.down.sql)<br>[app/server/migrations/2024011700_rbac.up.sql](../../../../sources/plandex-ai__plandex/app/server/migrations/2024011700_rbac.up.sql) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `app/server/main.go`, `app/server/syntax/file_map/cli/main.go`, `app/cli/main.go`.
2. entrypoint를 따라 실행 흐름 확인: `app/server/main.go`, `app/server/syntax/file_map/cli/main.go`, `app/cli/main.go`.
3. agent/tool runtime 매핑: `docs/docs/core-concepts/context-management.md`, `app/shared/context.go`, `app/server/hooks/hooks.go`.
4. retrieval/memory/indexing 확인: `docs/blog/2021-08-26-welcome/index.md`.
5. test/eval 파일로 동작 검증: `test/_test_apply.sh`, `test/error-test.html`, `test/plan_deletion_test.sh`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Local clone structure analysis 687 files, 99 directories.. 핵심 구조 신호는 README.md, LICENSE, tests, ci, docs, docker이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
