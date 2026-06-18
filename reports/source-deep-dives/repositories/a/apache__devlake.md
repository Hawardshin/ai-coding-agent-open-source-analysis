# apache/devlake 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Apache DevLake is an open-source dev data platform to ingest, analyze, and visualize the fragmented data from DevOps tools, extracting insights for engineering excellence, developer experience, and community growth.

## 요약

- 조사 단위: `sources/apache__devlake` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 4,287 files, 706 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=config-ui/index.html, config-ui/src/index.css, config-ui/src/utils/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | apache/devlake |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Go |
| Stars | 3039 |
| Forks | 764 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/apache__devlake](../../../../sources/apache__devlake) |
| 기존 보고서 | [reports/global-trending/repositories/apache__devlake.md](../../../global-trending/repositories/apache__devlake.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 4287 / 706 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .devcontainer, .github, backend, config-ui, devops, e2e, grafana, resources |
| 상위 확장자 | .go: 2773, .csv: 764, .ts: 173, .tsx: 156, .json: 129, .md: 54, .yml: 43, .py: 42, .svg: 41, (none): 25, .example: 19, .sh: 19 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| config-ui | top-level component | 1 |
| devops | top-level component | 1 |
| e2e | validation surface | 1 |
| grafana | top-level component | 1 |
| resources | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | Makefile | build-server-image | make build-server-image |
| build | Makefile | build-config-ui-image | make build-config-ui-image |
| build | Makefile | build-grafana-image | make build-grafana-image |
| build | Makefile | build-images | make build-images |
| serve-dev | Makefile | push-server-image | make push-server-image |
| container | Makefile | push-config-ui-image | make push-config-ui-image |
| container | Makefile | push-grafana-image | make push-grafana-image |
| container | Makefile | push-images | make push-images |
| utility | Makefile | configure | make configure |
| serve-dev | Makefile | configure-dev | make configure-dev |
| utility | Makefile | commit | make commit |
| serve-dev | Makefile | restart | make restart |
| utility | Makefile | go-dep | make go-dep |
| utility | Makefile | python-dep | make python-dep |
| utility | Makefile | dep | make dep |
| utility | Makefile | swag | make swag |
| build | Makefile | build-plugin | make build-plugin |
| serve-dev | Makefile | build-server | make build-server |
| build | Makefile | build | make build |
| utility | Makefile | all | make all |


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
| retrieval | [config-ui/index.html](../../../../sources/apache__devlake/config-ui/index.html) | retrieval signal |
| retrieval | [config-ui/src/index.css](../../../../sources/apache__devlake/config-ui/src/index.css) | retrieval signal |
| retrieval | [config-ui/src/utils/index.ts](../../../../sources/apache__devlake/config-ui/src/utils/index.ts) | retrieval signal |
| retrieval | [config-ui/src/types/index.ts](../../../../sources/apache__devlake/config-ui/src/types/index.ts) | retrieval signal |
| entrypoints | [config-ui/src/main.tsx](../../../../sources/apache__devlake/config-ui/src/main.tsx) | entrypoints signal |
| entrypoints | [backend/server/main.go](../../../../sources/apache__devlake/backend/server/main.go) | entrypoints signal |
| entrypoints | [backend/python/test/fakeplugin/fakeplugin/main.py](../../../../sources/apache__devlake/backend/python/test/fakeplugin/fakeplugin/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/apache__devlake/README.md) | docs signal |
| docs | [devops/docker/lake-builder/README.md](../../../../sources/apache__devlake/devops/docker/lake-builder/README.md) | docs signal |
| docs | [devops/docker/alpine-dbt/README.md](../../../../sources/apache__devlake/devops/docker/alpine-dbt/README.md) | docs signal |
| docs | [config-ui/README.md](../../../../sources/apache__devlake/config-ui/README.md) | docs signal |
| eval | [grafana/dashboards/postgresql/demo-was-our-quality-improved-or-not.json](../../../../sources/apache__devlake/grafana/dashboards/postgresql/demo-was-our-quality-improved-or-not.json) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [config-ui/src/index.css](../../../../sources/apache__devlake/config-ui/src/index.css)<br>[config-ui/src/main.tsx](../../../../sources/apache__devlake/config-ui/src/main.tsx)<br>[backend/server/main.go](../../../../sources/apache__devlake/backend/server/main.go)<br>[backend/python/test/fakeplugin/fakeplugin/main.py](../../../../sources/apache__devlake/backend/python/test/fakeplugin/fakeplugin/main.py)<br>[backend/python/plugins/azuredevops/azuredevops/main.py](../../../../sources/apache__devlake/backend/python/plugins/azuredevops/azuredevops/main.py)<br>[backend/plugins/github/token/cmd/test_refresh/main.go](../../../../sources/apache__devlake/backend/plugins/github/token/cmd/test_refresh/main.go)<br>[backend/core/migration/linter/main.go](../../../../sources/apache__devlake/backend/core/migration/linter/main.go) |
| agentRuntime | 36 | [AGENTS.md](../../../../sources/apache__devlake/AGENTS.md)<br>[config-ui/src/routes/onboard/context.tsx](../../../../sources/apache__devlake/config-ui/src/routes/onboard/context.tsx)<br>[config-ui/src/hooks/extend-redux.ts](../../../../sources/apache__devlake/config-ui/src/hooks/extend-redux.ts)<br>[config-ui/src/hooks/index.ts](../../../../sources/apache__devlake/config-ui/src/hooks/index.ts)<br>[config-ui/src/hooks/use-auto-refresh.ts](../../../../sources/apache__devlake/config-ui/src/hooks/use-auto-refresh.ts)<br>[config-ui/src/hooks/use-refresh-data.ts](../../../../sources/apache__devlake/config-ui/src/hooks/use-refresh-data.ts)<br>[config-ui/src/hooks/user-proxy-prefix.ts](../../../../sources/apache__devlake/config-ui/src/hooks/user-proxy-prefix.ts)<br>[backend/server/services/remote/bridge/context.go](../../../../sources/apache__devlake/backend/server/services/remote/bridge/context.go) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 129 | [config-ui/index.html](../../../../sources/apache__devlake/config-ui/index.html)<br>[config-ui/src/index.css](../../../../sources/apache__devlake/config-ui/src/index.css)<br>[config-ui/src/utils/index.ts](../../../../sources/apache__devlake/config-ui/src/utils/index.ts)<br>[config-ui/src/types/index.ts](../../../../sources/apache__devlake/config-ui/src/types/index.ts)<br>[config-ui/src/theme/index.ts](../../../../sources/apache__devlake/config-ui/src/theme/index.ts)<br>[config-ui/src/routes/index.ts](../../../../sources/apache__devlake/config-ui/src/routes/index.ts)<br>[config-ui/src/routes/project/index.ts](../../../../sources/apache__devlake/config-ui/src/routes/project/index.ts)<br>[config-ui/src/routes/project/home/index.tsx](../../../../sources/apache__devlake/config-ui/src/routes/project/home/index.tsx) |
| spec | 9 | [grafana/scripts/requirements.txt](../../../../sources/apache__devlake/grafana/scripts/requirements.txt)<br>[grafana/dashboards/postgresql/demo-average-requirement-lead-time-by-assignee.json](../../../../sources/apache__devlake/grafana/dashboards/postgresql/demo-average-requirement-lead-time-by-assignee.json)<br>[grafana/dashboards/postgresql/demo-how-fast-do-we-respond-to-customer-requirements.json](../../../../sources/apache__devlake/grafana/dashboards/postgresql/demo-how-fast-do-we-respond-to-customer-requirements.json)<br>[grafana/dashboards/mysql/demo-average-requirement-lead-time-by-assignee.json](../../../../sources/apache__devlake/grafana/dashboards/mysql/demo-average-requirement-lead-time-by-assignee.json)<br>[grafana/dashboards/mysql/demo-how-fast-do-we-respond-to-customer-requirements.json](../../../../sources/apache__devlake/grafana/dashboards/mysql/demo-how-fast-do-we-respond-to-customer-requirements.json)<br>[e2e/qdev-full-flow.spec.ts](../../../../sources/apache__devlake/e2e/qdev-full-flow.spec.ts)<br>[backend/resources/swagger/open_api_spec.json.tmpl](../../../../sources/apache__devlake/backend/resources/swagger/open_api_spec.json.tmpl)<br>[backend/python/requirements.txt](../../../../sources/apache__devlake/backend/python/requirements.txt) |
| eval | 432 | [grafana/dashboards/postgresql/demo-was-our-quality-improved-or-not.json](../../../../sources/apache__devlake/grafana/dashboards/postgresql/demo-was-our-quality-improved-or-not.json)<br>[grafana/dashboards/postgresql/github-release-quality-and-contribution-analysis.json](../../../../sources/apache__devlake/grafana/dashboards/postgresql/github-release-quality-and-contribution-analysis.json)<br>[grafana/dashboards/mysql/demo-was-our-quality-improved-or-not.json](../../../../sources/apache__devlake/grafana/dashboards/mysql/demo-was-our-quality-improved-or-not.json)<br>[grafana/dashboards/mysql/github-release-quality-and-contribution-analysis.json](../../../../sources/apache__devlake/grafana/dashboards/mysql/github-release-quality-and-contribution-analysis.json)<br>[e2e/qdev-full-flow.spec.ts](../../../../sources/apache__devlake/e2e/qdev-full-flow.spec.ts)<br>[config-ui/src/plugins/register/q-dev/connection-fields/connection-test.tsx](../../../../sources/apache__devlake/config-ui/src/plugins/register/q-dev/connection-fields/connection-test.tsx)<br>[backend/test/init.go](../../../../sources/apache__devlake/backend/test/init.go)<br>[backend/test/Readme.md](../../../../sources/apache__devlake/backend/test/Readme.md) |
| security | 22 | [config-ui/src/routes/blueprint/detail/components/update-policy-dialog/index.tsx](../../../../sources/apache__devlake/config-ui/src/routes/blueprint/detail/components/update-policy-dialog/index.tsx)<br>[config-ui/src/routes/blueprint/detail/components/sync-policy/index.tsx](../../../../sources/apache__devlake/config-ui/src/routes/blueprint/detail/components/sync-policy/index.tsx)<br>[config-ui/src/routes/blueprint/detail/components/sync-policy/styled.ts](../../../../sources/apache__devlake/config-ui/src/routes/blueprint/detail/components/sync-policy/styled.ts)<br>[config-ui/src/plugins/register/jira/connection-fields/auth.tsx](../../../../sources/apache__devlake/config-ui/src/plugins/register/jira/connection-fields/auth.tsx)<br>[config-ui/src/plugins/register/bitbucket/connection-fields/auth.tsx](../../../../sources/apache__devlake/config-ui/src/plugins/register/bitbucket/connection-fields/auth.tsx)<br>[config-ui/src/plugins/components/connection-form/fields/secret-key.tsx](../../../../sources/apache__devlake/config-ui/src/plugins/components/connection-form/fields/secret-key.tsx)<br>[config-ui/src/api/auth/index.ts](../../../../sources/apache__devlake/config-ui/src/api/auth/index.ts)<br>[backend/server/api/auth/auth_test.go](../../../../sources/apache__devlake/backend/server/api/auth/auth_test.go) |
| ci | 183 | [grafana/dashboards/postgresql/Jenkins.json](../../../../sources/apache__devlake/grafana/dashboards/postgresql/Jenkins.json)<br>[grafana/dashboards/mysql/Jenkins.json](../../../../sources/apache__devlake/grafana/dashboards/mysql/Jenkins.json)<br>[config-ui/src/routes/blueprint/detail/components/advanced-editor/example/jenkins.ts](../../../../sources/apache__devlake/config-ui/src/routes/blueprint/detail/components/advanced-editor/example/jenkins.ts)<br>[config-ui/src/plugins/register/jenkins/config.tsx](../../../../sources/apache__devlake/config-ui/src/plugins/register/jenkins/config.tsx)<br>[config-ui/src/plugins/register/jenkins/index.ts](../../../../sources/apache__devlake/config-ui/src/plugins/register/jenkins/index.ts)<br>[config-ui/src/plugins/register/jenkins/transformation.tsx](../../../../sources/apache__devlake/config-ui/src/plugins/register/jenkins/transformation.tsx)<br>[config-ui/src/plugins/register/jenkins/assets/icon.svg](../../../../sources/apache__devlake/config-ui/src/plugins/register/jenkins/assets/icon.svg)<br>[config-ui/src/plugins/register/circleci/config.tsx](../../../../sources/apache__devlake/config-ui/src/plugins/register/circleci/config.tsx) |
| container | 31 | [docker-compose-dev-mysql.yml](../../../../sources/apache__devlake/docker-compose-dev-mysql.yml)<br>[docker-compose-dev-postgresql.yml](../../../../sources/apache__devlake/docker-compose-dev-postgresql.yml)<br>[docker-compose.datasources.yml](../../../../sources/apache__devlake/docker-compose.datasources.yml)<br>[grafana/Dockerfile](../../../../sources/apache__devlake/grafana/Dockerfile)<br>[devops/releases/lake-v0.9.0/docker-compose.yml](../../../../sources/apache__devlake/devops/releases/lake-v0.9.0/docker-compose.yml)<br>[devops/releases/lake-v0.8.0/docker-compose.yml](../../../../sources/apache__devlake/devops/releases/lake-v0.8.0/docker-compose.yml)<br>[devops/releases/lake-v0.7.0/docker-compose.yml](../../../../sources/apache__devlake/devops/releases/lake-v0.7.0/docker-compose.yml)<br>[devops/releases/lake-v0.21.0/docker-compose.yml](../../../../sources/apache__devlake/devops/releases/lake-v0.21.0/docker-compose.yml) |
| instruction | 1 | [AGENTS.md](../../../../sources/apache__devlake/AGENTS.md) |
| docs | 34 | [README.md](../../../../sources/apache__devlake/README.md)<br>[devops/docker/lake-builder/README.md](../../../../sources/apache__devlake/devops/docker/lake-builder/README.md)<br>[devops/docker/alpine-dbt/README.md](../../../../sources/apache__devlake/devops/docker/alpine-dbt/README.md)<br>[config-ui/README.md](../../../../sources/apache__devlake/config-ui/README.md)<br>[backend/test/Readme.md](../../../../sources/apache__devlake/backend/test/Readme.md)<br>[backend/test/e2e/manual/Readme.md](../../../../sources/apache__devlake/backend/test/e2e/manual/Readme.md)<br>[backend/server/services/remote/plugin/doc/open_api.go](../../../../sources/apache__devlake/backend/server/services/remote/plugin/doc/open_api.go)<br>[backend/server/api/README.md](../../../../sources/apache__devlake/backend/server/api/README.md) |
| config | 14 | [Makefile](../../../../sources/apache__devlake/Makefile)<br>[grafana/scripts/requirements.txt](../../../../sources/apache__devlake/grafana/scripts/requirements.txt)<br>[e2e/package.json](../../../../sources/apache__devlake/e2e/package.json)<br>[config-ui/package.json](../../../../sources/apache__devlake/config-ui/package.json)<br>[config-ui/tsconfig.json](../../../../sources/apache__devlake/config-ui/tsconfig.json)<br>[backend/go.mod](../../../../sources/apache__devlake/backend/go.mod)<br>[backend/Makefile](../../../../sources/apache__devlake/backend/Makefile)<br>[backend/python/requirements.txt](../../../../sources/apache__devlake/backend/python/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 432 | [grafana/dashboards/postgresql/demo-was-our-quality-improved-or-not.json](../../../../sources/apache__devlake/grafana/dashboards/postgresql/demo-was-our-quality-improved-or-not.json)<br>[grafana/dashboards/postgresql/github-release-quality-and-contribution-analysis.json](../../../../sources/apache__devlake/grafana/dashboards/postgresql/github-release-quality-and-contribution-analysis.json)<br>[grafana/dashboards/mysql/demo-was-our-quality-improved-or-not.json](../../../../sources/apache__devlake/grafana/dashboards/mysql/demo-was-our-quality-improved-or-not.json)<br>[grafana/dashboards/mysql/github-release-quality-and-contribution-analysis.json](../../../../sources/apache__devlake/grafana/dashboards/mysql/github-release-quality-and-contribution-analysis.json)<br>[e2e/qdev-full-flow.spec.ts](../../../../sources/apache__devlake/e2e/qdev-full-flow.spec.ts)<br>[config-ui/src/plugins/register/q-dev/connection-fields/connection-test.tsx](../../../../sources/apache__devlake/config-ui/src/plugins/register/q-dev/connection-fields/connection-test.tsx) |
| CI workflow | 183 | [grafana/dashboards/postgresql/Jenkins.json](../../../../sources/apache__devlake/grafana/dashboards/postgresql/Jenkins.json)<br>[grafana/dashboards/mysql/Jenkins.json](../../../../sources/apache__devlake/grafana/dashboards/mysql/Jenkins.json)<br>[config-ui/src/routes/blueprint/detail/components/advanced-editor/example/jenkins.ts](../../../../sources/apache__devlake/config-ui/src/routes/blueprint/detail/components/advanced-editor/example/jenkins.ts)<br>[config-ui/src/plugins/register/jenkins/config.tsx](../../../../sources/apache__devlake/config-ui/src/plugins/register/jenkins/config.tsx)<br>[config-ui/src/plugins/register/jenkins/index.ts](../../../../sources/apache__devlake/config-ui/src/plugins/register/jenkins/index.ts)<br>[config-ui/src/plugins/register/jenkins/transformation.tsx](../../../../sources/apache__devlake/config-ui/src/plugins/register/jenkins/transformation.tsx) |
| 컨테이너/배포 | 31 | [docker-compose-dev-mysql.yml](../../../../sources/apache__devlake/docker-compose-dev-mysql.yml)<br>[docker-compose-dev-postgresql.yml](../../../../sources/apache__devlake/docker-compose-dev-postgresql.yml)<br>[docker-compose.datasources.yml](../../../../sources/apache__devlake/docker-compose.datasources.yml)<br>[grafana/Dockerfile](../../../../sources/apache__devlake/grafana/Dockerfile)<br>[devops/releases/lake-v0.9.0/docker-compose.yml](../../../../sources/apache__devlake/devops/releases/lake-v0.9.0/docker-compose.yml)<br>[devops/releases/lake-v0.8.0/docker-compose.yml](../../../../sources/apache__devlake/devops/releases/lake-v0.8.0/docker-compose.yml) |
| 보안/정책 | 22 | [config-ui/src/routes/blueprint/detail/components/update-policy-dialog/index.tsx](../../../../sources/apache__devlake/config-ui/src/routes/blueprint/detail/components/update-policy-dialog/index.tsx)<br>[config-ui/src/routes/blueprint/detail/components/sync-policy/index.tsx](../../../../sources/apache__devlake/config-ui/src/routes/blueprint/detail/components/sync-policy/index.tsx)<br>[config-ui/src/routes/blueprint/detail/components/sync-policy/styled.ts](../../../../sources/apache__devlake/config-ui/src/routes/blueprint/detail/components/sync-policy/styled.ts)<br>[config-ui/src/plugins/register/jira/connection-fields/auth.tsx](../../../../sources/apache__devlake/config-ui/src/plugins/register/jira/connection-fields/auth.tsx)<br>[config-ui/src/plugins/register/bitbucket/connection-fields/auth.tsx](../../../../sources/apache__devlake/config-ui/src/plugins/register/bitbucket/connection-fields/auth.tsx)<br>[config-ui/src/plugins/components/connection-form/fields/secret-key.tsx](../../../../sources/apache__devlake/config-ui/src/plugins/components/connection-form/fields/secret-key.tsx) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/apache__devlake/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `config-ui/index.html`, `config-ui/src/index.css`, `config-ui/src/utils/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `config-ui/src/index.css`, `config-ui/src/main.tsx`, `backend/server/main.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `config-ui/src/routes/onboard/context.tsx`, `config-ui/src/hooks/extend-redux.ts`.
4. retrieval/memory/indexing 확인: `config-ui/index.html`, `config-ui/src/index.css`, `config-ui/src/utils/index.ts`.
5. test/eval 파일로 동작 검증: `grafana/dashboards/postgresql/demo-was-our-quality-improved-or-not.json`, `grafana/dashboards/postgresql/github-release-quality-and-contribution-analysis.json`, `grafana/dashboards/mysql/demo-was-our-quality-improved-or-not.json`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Apache DevLake is an open source dev data platform to ingest, analyze, and visualize the fragmented data from DevOps too. 핵심 구조 신호는 Go, Makefile, README.md, AGENTS.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
