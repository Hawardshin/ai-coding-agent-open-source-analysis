# plandex-ai/plandex Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 687 files, 99 directories.

## 요약

- 조사 단위: `sources/plandex-ai__plandex` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 687 files, 99 directories, depth score 121, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=app/server/main.go, app/server/syntax/file_map/cli/main.go, app/cli/main.go이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | plandex-ai/plandex |
| Topic | General AI Open Source / 일반 AI 오픈소스 |
| Region | global |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/plandex-ai__plandex](../../../../sources/plandex-ai__plandex) |
| Existing report | [reports/clone-structures/plandex-ai__plandex.md](../../../clone-structures/plandex-ai__plandex.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 687 / 99 |
| Max observed depth | 7 |
| Top directories | .github, app, docs, images, plans, releases, scripts, test |
| Top extensions | .go: 337, .md: 126, .sql: 50, .json: 26, .txt: 19, .sh: 16, .png: 15, (none): 15, .gif: 10, .ts: 10, .yml: 10, .c: 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 43 |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| images | top-level component | 1 |
| plans | top-level component | 1 |
| releases | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [app/server/main.go](../../../../sources/plandex-ai__plandex/app/server/main.go)<br>[app/server/syntax/file_map/cli/main.go](../../../../sources/plandex-ai__plandex/app/server/syntax/file_map/cli/main.go)<br>[app/cli/main.go](../../../../sources/plandex-ai__plandex/app/cli/main.go) |
| agentRuntime | 19 | [docs/docs/core-concepts/context-management.md](../../../../sources/plandex-ai__plandex/docs/docs/core-concepts/context-management.md)<br>[app/shared/context.go](../../../../sources/plandex-ai__plandex/app/shared/context.go)<br>[app/server/hooks/hooks.go](../../../../sources/plandex-ai__plandex/app/server/hooks/hooks.go)<br>[app/server/handlers/context_helper.go](../../../../sources/plandex-ai__plandex/app/server/handlers/context_helper.go)<br>[app/server/db/context_helpers_conflicts.go](../../../../sources/plandex-ai__plandex/app/server/db/context_helpers_conflicts.go)<br>[app/server/db/context_helpers_get.go](../../../../sources/plandex-ai__plandex/app/server/db/context_helpers_get.go)<br>[app/server/db/context_helpers_load.go](../../../../sources/plandex-ai__plandex/app/server/db/context_helpers_load.go)<br>[app/server/db/context_helpers_map.go](../../../../sources/plandex-ai__plandex/app/server/db/context_helpers_map.go) |
| mcp | 0 | not obvious |
| retrieval | 1 | [docs/blog/2021-08-26-welcome/index.md](../../../../sources/plandex-ai__plandex/docs/blog/2021-08-26-welcome/index.md) |
| spec | 0 | not obvious |
| eval | 75 | [test/_test_apply.sh](../../../../sources/plandex-ai__plandex/test/_test_apply.sh)<br>[test/error-test.html](../../../../sources/plandex-ai__plandex/test/error-test.html)<br>[test/plan_deletion_test.sh](../../../../sources/plandex-ai__plandex/test/plan_deletion_test.sh)<br>[test/smoke_test.sh](../../../../sources/plandex-ai__plandex/test/smoke_test.sh)<br>[test/test_custom_models.sh](../../../../sources/plandex-ai__plandex/test/test_custom_models.sh)<br>[test/test_utils.sh](../../../../sources/plandex-ai__plandex/test/test_utils.sh)<br>[test/test_prompts/aws-infra.txt](../../../../sources/plandex-ai__plandex/test/test_prompts/aws-infra.txt)<br>[test/test_prompts/pong.txt](../../../../sources/plandex-ai__plandex/test/test_prompts/pong.txt) |
| security | 15 | [docs/docs/security.md](../../../../sources/plandex-ai__plandex/docs/docs/security.md)<br>[app/shared/auth.go](../../../../sources/plandex-ai__plandex/app/shared/auth.go)<br>[app/shared/rbac.go](../../../../sources/plandex-ai__plandex/app/shared/rbac.go)<br>[app/server/types/auth.go](../../../../sources/plandex-ai__plandex/app/server/types/auth.go)<br>[app/server/migrations/2024011700_rbac.down.sql](../../../../sources/plandex-ai__plandex/app/server/migrations/2024011700_rbac.down.sql)<br>[app/server/migrations/2024011700_rbac.up.sql](../../../../sources/plandex-ai__plandex/app/server/migrations/2024011700_rbac.up.sql)<br>[app/server/handlers/auth_helpers.go](../../../../sources/plandex-ai__plandex/app/server/handlers/auth_helpers.go)<br>[app/server/db/auth_helpers.go](../../../../sources/plandex-ai__plandex/app/server/db/auth_helpers.go) |
| ci | 1 | [.github/workflows/docker-publish.yml](../../../../sources/plandex-ai__plandex/.github/workflows/docker-publish.yml) |
| container | 3 | [app/docker-compose.yml](../../../../sources/plandex-ai__plandex/app/docker-compose.yml)<br>[app/server/Dockerfile](../../../../sources/plandex-ai__plandex/app/server/Dockerfile)<br>[app/server/syntax/file_map/examples/dockerfile_example](../../../../sources/plandex-ai__plandex/app/server/syntax/file_map/examples/dockerfile_example) |
| instruction | 0 | not obvious |
| docs | 62 | [README.md](../../../../sources/plandex-ai__plandex/README.md)<br>[test/pong/README.md](../../../../sources/plandex-ai__plandex/test/pong/README.md)<br>[test/evals/promptfoo-poc/README.md](../../../../sources/plandex-ai__plandex/test/evals/promptfoo-poc/README.md)<br>[docs/.gitignore](../../../../sources/plandex-ai__plandex/docs/.gitignore)<br>[docs/babel.config.js](../../../../sources/plandex-ai__plandex/docs/babel.config.js)<br>[docs/docusaurus.config.ts](../../../../sources/plandex-ai__plandex/docs/docusaurus.config.ts)<br>[docs/package-lock.json](../../../../sources/plandex-ai__plandex/docs/package-lock.json)<br>[docs/package.json](../../../../sources/plandex-ai__plandex/docs/package.json) |
| config | 9 | [test/project/react-redux-foobar/package.json](../../../../sources/plandex-ai__plandex/test/project/react-redux-foobar/package.json)<br>[test/project/react-redux-foobar/tsconfig.json](../../../../sources/plandex-ai__plandex/test/project/react-redux-foobar/tsconfig.json)<br>[test/pong/Makefile](../../../../sources/plandex-ai__plandex/test/pong/Makefile)<br>[docs/package.json](../../../../sources/plandex-ai__plandex/docs/package.json)<br>[docs/tsconfig.json](../../../../sources/plandex-ai__plandex/docs/tsconfig.json)<br>[app/shared/go.mod](../../../../sources/plandex-ai__plandex/app/shared/go.mod)<br>[app/server/go.mod](../../../../sources/plandex-ai__plandex/app/server/go.mod)<br>[app/server/syntax/file_map/cli/go.mod](../../../../sources/plandex-ai__plandex/app/server/syntax/file_map/cli/go.mod) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 75 | [test/_test_apply.sh](../../../../sources/plandex-ai__plandex/test/_test_apply.sh)<br>[test/error-test.html](../../../../sources/plandex-ai__plandex/test/error-test.html)<br>[test/plan_deletion_test.sh](../../../../sources/plandex-ai__plandex/test/plan_deletion_test.sh)<br>[test/smoke_test.sh](../../../../sources/plandex-ai__plandex/test/smoke_test.sh)<br>[test/test_custom_models.sh](../../../../sources/plandex-ai__plandex/test/test_custom_models.sh)<br>[test/test_utils.sh](../../../../sources/plandex-ai__plandex/test/test_utils.sh) |
| CI workflows | 1 | [.github/workflows/docker-publish.yml](../../../../sources/plandex-ai__plandex/.github/workflows/docker-publish.yml) |
| Containers / deploy | 3 | [app/docker-compose.yml](../../../../sources/plandex-ai__plandex/app/docker-compose.yml)<br>[app/server/Dockerfile](../../../../sources/plandex-ai__plandex/app/server/Dockerfile)<br>[app/server/syntax/file_map/examples/dockerfile_example](../../../../sources/plandex-ai__plandex/app/server/syntax/file_map/examples/dockerfile_example) |
| Security / policy | 15 | [docs/docs/security.md](../../../../sources/plandex-ai__plandex/docs/docs/security.md)<br>[app/shared/auth.go](../../../../sources/plandex-ai__plandex/app/shared/auth.go)<br>[app/shared/rbac.go](../../../../sources/plandex-ai__plandex/app/shared/rbac.go)<br>[app/server/types/auth.go](../../../../sources/plandex-ai__plandex/app/server/types/auth.go)<br>[app/server/migrations/2024011700_rbac.down.sql](../../../../sources/plandex-ai__plandex/app/server/migrations/2024011700_rbac.down.sql)<br>[app/server/migrations/2024011700_rbac.up.sql](../../../../sources/plandex-ai__plandex/app/server/migrations/2024011700_rbac.up.sql) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `app/server/main.go`, `app/server/syntax/file_map/cli/main.go`, `app/cli/main.go`.
2. Trace execution through entrypoints: `app/server/main.go`, `app/server/syntax/file_map/cli/main.go`, `app/cli/main.go`.
3. Map agent/tool runtime through: `docs/docs/core-concepts/context-management.md`, `app/shared/context.go`, `app/server/hooks/hooks.go`.
4. Inspect retrieval/memory/indexing through: `docs/blog/2021-08-26-welcome/index.md`.
5. Verify behavior through test/eval files: `test/_test_apply.sh`, `test/error-test.html`, `test/plan_deletion_test.sh`.

## Existing Repository Insight

일반 AI 오픈소스 관점에서 Local clone structure analysis 687 files, 99 directories.. 핵심 구조 신호는 README.md, LICENSE, tests, ci, docs, docker이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing입니다.
