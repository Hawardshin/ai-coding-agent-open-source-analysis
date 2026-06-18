# OpenCSGs/csghub-server 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

csghub-server is the backend server for CSGHub which helps user to manage datasets, modes, and also run Model Inference, Finetune and Application Spaces.

## 요약

- 조사 단위: `sources/OpenCSGs__csghub-server` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,705 files, 380 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 entrypoints=linters/gincontext/main.go, docker/inference/funasr/server.py, docker/inference/diffusers/server.py이고, 의존성 단서는 openai, modelcontextprotocol, cobra, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | OpenCSGs/csghub-server |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Go |
| Stars | 1070 |
| Forks | 231 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/OpenCSGs__csghub-server](../../../../sources/OpenCSGs__csghub-server) |
| 기존 보고서 | [reports/global-trending/repositories/OpenCSGs__csghub-server.md](../../../global-trending/repositories/OpenCSGs__csghub-server.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2705 / 380 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | _mocks, .github, accounting, aigateway, api, builder, cmd, common, component, configs, contribute, data, dataviewer, docker, docs, linters, logcollector, mirror, moderation, mq |
| 상위 확장자 | .go: 1856, .sql: 461, .json: 127, .py: 41, .sh: 40, .md: 38, .tpl: 25, (none): 13, .parquet: 11, .yaml: 11, .yml: 9, .conf: 7 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 16 |
| cmd/csghub-server | cmd workspace | 4 |
| api | source boundary | 3 |
| _mocks | top-level component | 1 |
| .github | ci surface | 1 |
| accounting | top-level component | 1 |
| aigateway | top-level component | 1 |
| builder | top-level component | 1 |
| cmd | source boundary | 1 |
| common | top-level component | 1 |
| component | top-level component | 1 |
| configs | top-level component | 1 |
| contribute | top-level component | 1 |
| data | top-level component | 1 |
| dataviewer | top-level component | 1 |
| docker | documentation surface | 1 |
| linters | top-level component | 1 |
| logcollector | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| test | Makefile | test | make test |
| quality | Makefile | lint | make lint |
| utility | Makefile | cover | make cover |
| utility | Makefile | mock_wire | make mock_wire |
| utility | Makefile | mock_gen | make mock_gen |
| utility | Makefile | swag | make swag |
| utility | Makefile | migrate_local | make migrate_local |
| utility | Makefile | db_migrate | make db_migrate |
| utility | Makefile | db_rollback | make db_rollback |
| utility | Makefile | error_doc | make error_doc |
| utility | Makefile | error_scan | make error_scan |
| utility | Makefile | notify_gen | make notify_gen |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | cobra |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [linters/gincontext/main.go](../../../../sources/OpenCSGs__csghub-server/linters/gincontext/main.go) | entrypoints signal |
| entrypoints | [docker/inference/funasr/server.py](../../../../sources/OpenCSGs__csghub-server/docker/inference/funasr/server.py) | entrypoints signal |
| entrypoints | [docker/inference/diffusers/server.py](../../../../sources/OpenCSGs__csghub-server/docker/inference/diffusers/server.py) | entrypoints signal |
| entrypoints | [cmd/csghub-server/main.go](../../../../sources/OpenCSGs__csghub-server/cmd/csghub-server/main.go) | entrypoints signal |
| container | [docker-compose.yml](../../../../sources/OpenCSGs__csghub-server/docker-compose.yml) | container signal |
| container | [notification/tmplmgr/templates/deployment/email.en-US.tpl](../../../../sources/OpenCSGs__csghub-server/notification/tmplmgr/templates/deployment/email.en-US.tpl) | container signal |
| container | [docker/Dockerfile](../../../../sources/OpenCSGs__csghub-server/docker/Dockerfile) | container signal |
| container | [docker/Dockerfile-base-build](../../../../sources/OpenCSGs__csghub-server/docker/Dockerfile-base-build) | container signal |
| config | [go.mod](../../../../sources/OpenCSGs__csghub-server/go.mod) | config signal |
| config | [Makefile](../../../../sources/OpenCSGs__csghub-server/Makefile) | config signal |
| config | [docker/spaces/templates/mcp_server/requirements.txt](../../../../sources/OpenCSGs__csghub-server/docker/spaces/templates/mcp_server/requirements.txt) | config signal |
| config | [docker/spaces/templates/mcp_deploy/requirements.txt](../../../../sources/OpenCSGs__csghub-server/docker/spaces/templates/mcp_deploy/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [linters/gincontext/main.go](../../../../sources/OpenCSGs__csghub-server/linters/gincontext/main.go)<br>[docker/inference/funasr/server.py](../../../../sources/OpenCSGs__csghub-server/docker/inference/funasr/server.py)<br>[docker/inference/diffusers/server.py](../../../../sources/OpenCSGs__csghub-server/docker/inference/diffusers/server.py)<br>[cmd/csghub-server/main.go](../../../../sources/OpenCSGs__csghub-server/cmd/csghub-server/main.go)<br>[cmd/csghub-server/cmd/sync/server.go](../../../../sources/OpenCSGs__csghub-server/cmd/csghub-server/cmd/sync/server.go)<br>[cmd/csghub-server/cmd/start/server.go](../../../../sources/OpenCSGs__csghub-server/cmd/csghub-server/cmd/start/server.go)<br>[cmd/csghub-server/cmd/deploy/server.go](../../../../sources/OpenCSGs__csghub-server/cmd/csghub-server/cmd/deploy/server.go) |
| agentRuntime | 178 | [AGENTS.md](../../../../sources/OpenCSGs__csghub-server/AGENTS.md)<br>[user/workflow/user_deletion.go](../../../../sources/OpenCSGs__csghub-server/user/workflow/user_deletion.go)<br>[user/workflow/worker.go](../../../../sources/OpenCSGs__csghub-server/user/workflow/worker.go)<br>[user/workflow/common/types.go](../../../../sources/OpenCSGs__csghub-server/user/workflow/common/types.go)<br>[user/workflow/activity/user_deletion.go](../../../../sources/OpenCSGs__csghub-server/user/workflow/activity/user_deletion.go)<br>[runner/utils/flushwriter.go](../../../../sources/OpenCSGs__csghub-server/runner/utils/flushwriter.go)<br>[runner/utils/format_test.go](../../../../sources/OpenCSGs__csghub-server/runner/utils/format_test.go)<br>[runner/utils/format.go](../../../../sources/OpenCSGs__csghub-server/runner/utils/format.go) |
| mcp | 59 | [docker/spaces/templates/mcp_server/app.py](../../../../sources/OpenCSGs__csghub-server/docker/spaces/templates/mcp_server/app.py)<br>[docker/spaces/templates/mcp_server/requirements.txt](../../../../sources/OpenCSGs__csghub-server/docker/spaces/templates/mcp_server/requirements.txt)<br>[docker/spaces/templates/mcp_deploy/app.py](../../../../sources/OpenCSGs__csghub-server/docker/spaces/templates/mcp_deploy/app.py)<br>[docker/spaces/templates/mcp_deploy/requirements.txt](../../../../sources/OpenCSGs__csghub-server/docker/spaces/templates/mcp_deploy/requirements.txt)<br>[component/mcp_scanner_plugins.go](../../../../sources/OpenCSGs__csghub-server/component/mcp_scanner_plugins.go)<br>[component/mcp_scanner_test.go](../../../../sources/OpenCSGs__csghub-server/component/mcp_scanner_test.go)<br>[component/mcp_scanner_tool_poison.go](../../../../sources/OpenCSGs__csghub-server/component/mcp_scanner_tool_poison.go)<br>[component/mcp_scanner.go](../../../../sources/OpenCSGs__csghub-server/component/mcp_scanner.go) |
| retrieval | 109 | [docs/zh-CN/memory_api.md](../../../../sources/OpenCSGs__csghub-server/docs/zh-CN/memory_api.md)<br>[docs/en/memory_api.md](../../../../sources/OpenCSGs__csghub-server/docs/en/memory_api.md)<br>[docker/spaces/builder/embed.go](../../../../sources/OpenCSGs__csghub-server/docker/spaces/builder/embed.go)<br>[component/memory_test.go](../../../../sources/OpenCSGs__csghub-server/component/memory_test.go)<br>[component/memory.go](../../../../sources/OpenCSGs__csghub-server/component/memory.go)<br>[common/types/memory.go](../../../../sources/OpenCSGs__csghub-server/common/types/memory.go)<br>[builder/store/database/agent_knowledge_base_test.go](../../../../sources/OpenCSGs__csghub-server/builder/store/database/agent_knowledge_base_test.go)<br>[builder/store/database/agent_knowledge_base.go](../../../../sources/OpenCSGs__csghub-server/builder/store/database/agent_knowledge_base.go) |
| spec | 13 | [docker/spaces/templates/mcp_server/requirements.txt](../../../../sources/OpenCSGs__csghub-server/docker/spaces/templates/mcp_server/requirements.txt)<br>[docker/spaces/templates/mcp_deploy/requirements.txt](../../../../sources/OpenCSGs__csghub-server/docker/spaces/templates/mcp_deploy/requirements.txt)<br>[docker/spaces/space/base_requirements.txt](../../../../sources/OpenCSGs__csghub-server/docker/spaces/space/base_requirements.txt)<br>[component/runtime_architecture_ce.go](../../../../sources/OpenCSGs__csghub-server/component/runtime_architecture_ce.go)<br>[component/runtime_architecture_test.go](../../../../sources/OpenCSGs__csghub-server/component/runtime_architecture_test.go)<br>[component/runtime_architecture.go](../../../../sources/OpenCSGs__csghub-server/component/runtime_architecture.go)<br>[builder/store/database/runtime_architecture_test.go](../../../../sources/OpenCSGs__csghub-server/builder/store/database/runtime_architecture_test.go)<br>[builder/store/database/runtime_architecture.go](../../../../sources/OpenCSGs__csghub-server/builder/store/database/runtime_architecture.go) |
| eval | 513 | [user/handler/access_token_test.go](../../../../sources/OpenCSGs__csghub-server/user/handler/access_token_test.go)<br>[user/handler/member_test.go](../../../../sources/OpenCSGs__csghub-server/user/handler/member_test.go)<br>[user/handler/organization_test.go](../../../../sources/OpenCSGs__csghub-server/user/handler/organization_test.go)<br>[user/handler/user_test.go](../../../../sources/OpenCSGs__csghub-server/user/handler/user_test.go)<br>[user/component/access_token_test.go](../../../../sources/OpenCSGs__csghub-server/user/component/access_token_test.go)<br>[user/component/jwt_test.go](../../../../sources/OpenCSGs__csghub-server/user/component/jwt_test.go)<br>[user/component/member_test.go](../../../../sources/OpenCSGs__csghub-server/user/component/member_test.go)<br>[user/component/namespace_test.go](../../../../sources/OpenCSGs__csghub-server/user/component/namespace_test.go) |
| security | 34 | [runner/types/sandbox.go](../../../../sources/OpenCSGs__csghub-server/runner/types/sandbox.go)<br>[docker/inference/Dockerfile.sglang-qwen3-guard-stream](../../../../sources/OpenCSGs__csghub-server/docker/inference/Dockerfile.sglang-qwen3-guard-stream)<br>[docker/inference/sglang-guard-stream/chat_template.jinja](../../../../sources/OpenCSGs__csghub-server/docker/inference/sglang-guard-stream/chat_template.jinja)<br>[docker/inference/sglang-guard-stream/entry.py](../../../../sources/OpenCSGs__csghub-server/docker/inference/sglang-guard-stream/entry.py)<br>[docker/inference/sglang-guard-stream/serve.sh](../../../../sources/OpenCSGs__csghub-server/docker/inference/sglang-guard-stream/serve.sh)<br>[docker/inference/sglang-guard-stream/single-node.sh](../../../../sources/OpenCSGs__csghub-server/docker/inference/sglang-guard-stream/single-node.sh)<br>[docker/inference/sglang-guard-stream/start_engine.py](../../../../sources/OpenCSGs__csghub-server/docker/inference/sglang-guard-stream/start_engine.py)<br>[configs/inference/sglang-qwen3-guard-stream.json](../../../../sources/OpenCSGs__csghub-server/configs/inference/sglang-qwen3-guard-stream.json) |
| ci | 5 | [.gitlab-ci.yml](../../../../sources/OpenCSGs__csghub-server/.gitlab-ci.yml)<br>[.github/workflows/docker-image.yml](../../../../sources/OpenCSGs__csghub-server/.github/workflows/docker-image.yml)<br>[.github/workflows/pr_dependency_check.yml](../../../../sources/OpenCSGs__csghub-server/.github/workflows/pr_dependency_check.yml)<br>[.github/workflows/test.yaml](../../../../sources/OpenCSGs__csghub-server/.github/workflows/test.yaml)<br>[.github/workflows/valid_check.yml](../../../../sources/OpenCSGs__csghub-server/.github/workflows/valid_check.yml) |
| container | 109 | [docker-compose.yml](../../../../sources/OpenCSGs__csghub-server/docker-compose.yml)<br>[notification/tmplmgr/templates/deployment/email.en-US.tpl](../../../../sources/OpenCSGs__csghub-server/notification/tmplmgr/templates/deployment/email.en-US.tpl)<br>[docker/Dockerfile](../../../../sources/OpenCSGs__csghub-server/docker/Dockerfile)<br>[docker/Dockerfile-base-build](../../../../sources/OpenCSGs__csghub-server/docker/Dockerfile-base-build)<br>[docker/Dockerfile-base-runtime](../../../../sources/OpenCSGs__csghub-server/docker/Dockerfile-base-runtime)<br>[docker/Dockerfile-ee](../../../../sources/OpenCSGs__csghub-server/docker/Dockerfile-ee)<br>[docker/Dockerfile-saas](../../../../sources/OpenCSGs__csghub-server/docker/Dockerfile-saas)<br>[docker/spaces/templates/model_chatui/Dockerfile](../../../../sources/OpenCSGs__csghub-server/docker/spaces/templates/model_chatui/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/OpenCSGs__csghub-server/AGENTS.md)<br>[CLAUDE.md](../../../../sources/OpenCSGs__csghub-server/CLAUDE.md) |
| docs | 34 | [README_cn.md](../../../../sources/OpenCSGs__csghub-server/README_cn.md)<br>[README_en.md](../../../../sources/OpenCSGs__csghub-server/README_en.md)<br>[README_ja.md](../../../../sources/OpenCSGs__csghub-server/README_ja.md)<br>[README.md](../../../../sources/OpenCSGs__csghub-server/README.md)<br>[moderation/_api_test/README.md](../../../../sources/OpenCSGs__csghub-server/moderation/_api_test/README.md)<br>[docs/csghub_server-arch.png](../../../../sources/OpenCSGs__csghub-server/docs/csghub_server-arch.png)<br>[docs/docs.go](../../../../sources/OpenCSGs__csghub-server/docs/docs.go)<br>[docs/error_codes_en.md](../../../../sources/OpenCSGs__csghub-server/docs/error_codes_en.md) |
| config | 4 | [go.mod](../../../../sources/OpenCSGs__csghub-server/go.mod)<br>[Makefile](../../../../sources/OpenCSGs__csghub-server/Makefile)<br>[docker/spaces/templates/mcp_server/requirements.txt](../../../../sources/OpenCSGs__csghub-server/docker/spaces/templates/mcp_server/requirements.txt)<br>[docker/spaces/templates/mcp_deploy/requirements.txt](../../../../sources/OpenCSGs__csghub-server/docker/spaces/templates/mcp_deploy/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 513 | [user/handler/access_token_test.go](../../../../sources/OpenCSGs__csghub-server/user/handler/access_token_test.go)<br>[user/handler/member_test.go](../../../../sources/OpenCSGs__csghub-server/user/handler/member_test.go)<br>[user/handler/organization_test.go](../../../../sources/OpenCSGs__csghub-server/user/handler/organization_test.go)<br>[user/handler/user_test.go](../../../../sources/OpenCSGs__csghub-server/user/handler/user_test.go)<br>[user/component/access_token_test.go](../../../../sources/OpenCSGs__csghub-server/user/component/access_token_test.go)<br>[user/component/jwt_test.go](../../../../sources/OpenCSGs__csghub-server/user/component/jwt_test.go) |
| CI workflow | 5 | [.gitlab-ci.yml](../../../../sources/OpenCSGs__csghub-server/.gitlab-ci.yml)<br>[.github/workflows/docker-image.yml](../../../../sources/OpenCSGs__csghub-server/.github/workflows/docker-image.yml)<br>[.github/workflows/pr_dependency_check.yml](../../../../sources/OpenCSGs__csghub-server/.github/workflows/pr_dependency_check.yml)<br>[.github/workflows/test.yaml](../../../../sources/OpenCSGs__csghub-server/.github/workflows/test.yaml)<br>[.github/workflows/valid_check.yml](../../../../sources/OpenCSGs__csghub-server/.github/workflows/valid_check.yml) |
| 컨테이너/배포 | 109 | [docker-compose.yml](../../../../sources/OpenCSGs__csghub-server/docker-compose.yml)<br>[notification/tmplmgr/templates/deployment/email.en-US.tpl](../../../../sources/OpenCSGs__csghub-server/notification/tmplmgr/templates/deployment/email.en-US.tpl)<br>[docker/Dockerfile](../../../../sources/OpenCSGs__csghub-server/docker/Dockerfile)<br>[docker/Dockerfile-base-build](../../../../sources/OpenCSGs__csghub-server/docker/Dockerfile-base-build)<br>[docker/Dockerfile-base-runtime](../../../../sources/OpenCSGs__csghub-server/docker/Dockerfile-base-runtime)<br>[docker/Dockerfile-ee](../../../../sources/OpenCSGs__csghub-server/docker/Dockerfile-ee) |
| 보안/정책 | 34 | [runner/types/sandbox.go](../../../../sources/OpenCSGs__csghub-server/runner/types/sandbox.go)<br>[docker/inference/Dockerfile.sglang-qwen3-guard-stream](../../../../sources/OpenCSGs__csghub-server/docker/inference/Dockerfile.sglang-qwen3-guard-stream)<br>[docker/inference/sglang-guard-stream/chat_template.jinja](../../../../sources/OpenCSGs__csghub-server/docker/inference/sglang-guard-stream/chat_template.jinja)<br>[docker/inference/sglang-guard-stream/entry.py](../../../../sources/OpenCSGs__csghub-server/docker/inference/sglang-guard-stream/entry.py)<br>[docker/inference/sglang-guard-stream/serve.sh](../../../../sources/OpenCSGs__csghub-server/docker/inference/sglang-guard-stream/serve.sh)<br>[docker/inference/sglang-guard-stream/single-node.sh](../../../../sources/OpenCSGs__csghub-server/docker/inference/sglang-guard-stream/single-node.sh) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/OpenCSGs__csghub-server/AGENTS.md)<br>[CLAUDE.md](../../../../sources/OpenCSGs__csghub-server/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `linters/gincontext/main.go`, `docker/inference/funasr/server.py`, `docker/inference/diffusers/server.py`.
2. entrypoint를 따라 실행 흐름 확인: `linters/gincontext/main.go`, `docker/inference/funasr/server.py`, `docker/inference/diffusers/server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `user/workflow/user_deletion.go`, `user/workflow/worker.go`.
4. retrieval/memory/indexing 확인: `docs/zh-CN/memory_api.md`, `docs/en/memory_api.md`, `docker/spaces/builder/embed.go`.
5. test/eval 파일로 동작 검증: `user/handler/access_token_test.go`, `user/handler/member_test.go`, `user/handler/organization_test.go`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 csghub server is the backend server for CSGHub which helps user to manage datasets, modes, and also run Model Inference,. 핵심 구조 신호는 Go, go.mod, docker-compose.yml, Makefile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
