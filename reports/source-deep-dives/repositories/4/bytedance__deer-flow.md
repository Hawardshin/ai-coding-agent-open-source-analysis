# bytedance/deer-flow 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.

## 요약

- 조사 단위: `sources/bytedance__deer-flow` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,322 files, 318 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=frontend/tests/unit/core/mcp/api.test.ts, frontend/tests/unit/core/mcp/hooks.test.ts, frontend/src/core/mcp/api.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | bytedance/deer-flow |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 71423 |
| Forks | 9685 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/bytedance__deer-flow](../../../../sources/bytedance__deer-flow) |
| 기존 보고서 | [reports/global-trending/repositories/bytedance__deer-flow.md](../../../global-trending/repositories/bytedance__deer-flow.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1322 / 318 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .agent, .github, backend, contracts, docker, docs, frontend, pr-build, scripts, skills, tests |
| 상위 확장자 | .py: 610, .ts: 184, .tsx: 162, .md: 138, .mdx: 70, .json: 24, .sh: 22, .jpg: 17, (none): 17, .yml: 12, .js: 11, .png: 11 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 18 |
| tests | validation surface | 11 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| contracts | top-level component | 1 |
| docker | documentation surface | 1 |
| frontend | top-level component | 1 |
| pr-build | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | setup | make setup |
| utility | Makefile | doctor | make doctor |
| utility | Makefile | detect-thread-boundaries | make detect-thread-boundaries |
| utility | Makefile | detect-blocking-io | make detect-blocking-io |
| utility | Makefile | config | make config |
| utility | Makefile | config-upgrade | make config-upgrade |
| quality | Makefile | check | make check |
| utility | Makefile | install | make install |
| utility | Makefile | setup-sandbox | make setup-sandbox |
| serve-dev | Makefile | dev | make dev |
| serve-dev | Makefile | start | make start |
| serve-dev | Makefile | dev-daemon | make dev-daemon |
| serve-dev | Makefile | start-daemon | make start-daemon |
| utility | Makefile | stop | make stop |
| utility | Makefile | clean | make clean |
| container | Makefile | docker-init | make docker-init |
| serve-dev | Makefile | docker-start | make docker-start |
| container | Makefile | docker-stop | make docker-stop |


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
| mcp | [frontend/tests/unit/core/mcp/api.test.ts](../../../../sources/bytedance__deer-flow/frontend/tests/unit/core/mcp/api.test.ts) | mcp signal |
| mcp | [frontend/tests/unit/core/mcp/hooks.test.ts](../../../../sources/bytedance__deer-flow/frontend/tests/unit/core/mcp/hooks.test.ts) | mcp signal |
| mcp | [frontend/src/core/mcp/api.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/mcp/api.ts) | mcp signal |
| mcp | [frontend/src/core/mcp/hooks.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/mcp/hooks.ts) | mcp signal |
| agentRuntime | [tests/skills/skill_loader.py](../../../../sources/bytedance__deer-flow/tests/skills/skill_loader.py) | agentRuntime signal |
| agentRuntime | [tests/skills/test_image_generation.py](../../../../sources/bytedance__deer-flow/tests/skills/test_image_generation.py) | agentRuntime signal |
| agentRuntime | [tests/skills/test_music_generation.py](../../../../sources/bytedance__deer-flow/tests/skills/test_music_generation.py) | agentRuntime signal |
| agentRuntime | [tests/skills/test_podcast_generation.py](../../../../sources/bytedance__deer-flow/tests/skills/test_podcast_generation.py) | agentRuntime signal |
| entrypoints | [frontend/tests/unit/core/auth/server.test.ts](../../../../sources/bytedance__deer-flow/frontend/tests/unit/core/auth/server.test.ts) | entrypoints signal |
| entrypoints | [frontend/src/core/i18n/server.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/i18n/server.ts) | entrypoints signal |
| entrypoints | [frontend/src/core/auth/server.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/auth/server.ts) | entrypoints signal |
| entrypoints | [frontend/public/demo/threads/5aa47db1-d0cb-4eb9-aea5-3dac1b371c5a/user-data/outputs/jiangsu-football/js/main.js](../../../../sources/bytedance__deer-flow/frontend/public/demo/threads/5aa47db1-d0cb-4eb9-aea5-3dac1b371c5a/user-data/outputs/jiangsu-football/js/main.js) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [frontend/tests/unit/core/auth/server.test.ts](../../../../sources/bytedance__deer-flow/frontend/tests/unit/core/auth/server.test.ts)<br>[frontend/src/core/i18n/server.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/i18n/server.ts)<br>[frontend/src/core/auth/server.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/auth/server.ts)<br>[frontend/public/demo/threads/5aa47db1-d0cb-4eb9-aea5-3dac1b371c5a/user-data/outputs/jiangsu-football/js/main.js](../../../../sources/bytedance__deer-flow/frontend/public/demo/threads/5aa47db1-d0cb-4eb9-aea5-3dac1b371c5a/user-data/outputs/jiangsu-football/js/main.js) |
| agentRuntime | 290 | [tests/skills/skill_loader.py](../../../../sources/bytedance__deer-flow/tests/skills/skill_loader.py)<br>[tests/skills/test_image_generation.py](../../../../sources/bytedance__deer-flow/tests/skills/test_image_generation.py)<br>[tests/skills/test_music_generation.py](../../../../sources/bytedance__deer-flow/tests/skills/test_music_generation.py)<br>[tests/skills/test_podcast_generation.py](../../../../sources/bytedance__deer-flow/tests/skills/test_podcast_generation.py)<br>[tests/skills/test_video_generation.py](../../../../sources/bytedance__deer-flow/tests/skills/test_video_generation.py)<br>[skills/public/web-design-guidelines/SKILL.md](../../../../sources/bytedance__deer-flow/skills/public/web-design-guidelines/SKILL.md)<br>[skills/public/video-generation/SKILL.md](../../../../sources/bytedance__deer-flow/skills/public/video-generation/SKILL.md)<br>[skills/public/video-generation/scripts/generate.py](../../../../sources/bytedance__deer-flow/skills/public/video-generation/scripts/generate.py) |
| mcp | 24 | [frontend/tests/unit/core/mcp/api.test.ts](../../../../sources/bytedance__deer-flow/frontend/tests/unit/core/mcp/api.test.ts)<br>[frontend/tests/unit/core/mcp/hooks.test.ts](../../../../sources/bytedance__deer-flow/frontend/tests/unit/core/mcp/hooks.test.ts)<br>[frontend/src/core/mcp/api.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/mcp/api.ts)<br>[frontend/src/core/mcp/hooks.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/mcp/hooks.ts)<br>[frontend/src/core/mcp/index.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/mcp/index.ts)<br>[frontend/src/core/mcp/types.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/mcp/types.ts)<br>[frontend/src/content/zh/harness/mcp.mdx](../../../../sources/bytedance__deer-flow/frontend/src/content/zh/harness/mcp.mdx)<br>[frontend/src/content/en/harness/mcp.mdx](../../../../sources/bytedance__deer-flow/frontend/src/content/en/harness/mcp.mdx) |
| retrieval | 81 | [skills/public/chart-visualization/references/generate_network_graph.md](../../../../sources/bytedance__deer-flow/skills/public/chart-visualization/references/generate_network_graph.md)<br>[scripts/load_memory_sample.py](../../../../sources/bytedance__deer-flow/scripts/load_memory_sample.py)<br>[scripts/sandbox_memory_profile.py](../../../../sources/bytedance__deer-flow/scripts/sandbox_memory_profile.py)<br>[frontend/src/core/uploads/index.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/uploads/index.ts)<br>[frontend/src/core/todos/index.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/todos/index.ts)<br>[frontend/src/core/threads/index.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/threads/index.ts)<br>[frontend/src/core/tasks/index.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/tasks/index.ts)<br>[frontend/src/core/streamdown/index.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/streamdown/index.ts) |
| spec | 26 | [skills/public/web-design-guidelines/SKILL.md](../../../../sources/bytedance__deer-flow/skills/public/web-design-guidelines/SKILL.md)<br>[skills/public/frontend-design/LICENSE.txt](../../../../sources/bytedance__deer-flow/skills/public/frontend-design/LICENSE.txt)<br>[skills/public/frontend-design/SKILL.md](../../../../sources/bytedance__deer-flow/skills/public/frontend-design/SKILL.md)<br>[frontend/tests/e2e-record/record-write-read-file.spec.ts](../../../../sources/bytedance__deer-flow/frontend/tests/e2e-record/record-write-read-file.spec.ts)<br>[frontend/tests/e2e-real-backend/auth-disabled-contract.spec.ts](../../../../sources/bytedance__deer-flow/frontend/tests/e2e-real-backend/auth-disabled-contract.spec.ts)<br>[frontend/tests/e2e-real-backend/multi-run-order.spec.ts](../../../../sources/bytedance__deer-flow/frontend/tests/e2e-real-backend/multi-run-order.spec.ts)<br>[frontend/tests/e2e-real-backend/real-backend-render.spec.ts](../../../../sources/bytedance__deer-flow/frontend/tests/e2e-real-backend/real-backend-render.spec.ts)<br>[frontend/tests/e2e/agent-chat.spec.ts](../../../../sources/bytedance__deer-flow/frontend/tests/e2e/agent-chat.spec.ts) |
| eval | 347 | [tests/skills/skill_loader.py](../../../../sources/bytedance__deer-flow/tests/skills/skill_loader.py)<br>[tests/skills/test_image_generation.py](../../../../sources/bytedance__deer-flow/tests/skills/test_image_generation.py)<br>[tests/skills/test_music_generation.py](../../../../sources/bytedance__deer-flow/tests/skills/test_music_generation.py)<br>[tests/skills/test_podcast_generation.py](../../../../sources/bytedance__deer-flow/tests/skills/test_podcast_generation.py)<br>[tests/skills/test_video_generation.py](../../../../sources/bytedance__deer-flow/tests/skills/test_video_generation.py)<br>[skills/public/systematic-literature-review/evals/trigger_eval_set.json](../../../../sources/bytedance__deer-flow/skills/public/systematic-literature-review/evals/trigger_eval_set.json)<br>[skills/public/skill-creator/scripts/aggregate_benchmark.py](../../../../sources/bytedance__deer-flow/skills/public/skill-creator/scripts/aggregate_benchmark.py)<br>[skills/public/skill-creator/scripts/run_eval.py](../../../../sources/bytedance__deer-flow/skills/public/skill-creator/scripts/run_eval.py) |
| security | 101 | [SECURITY.md](../../../../sources/bytedance__deer-flow/SECURITY.md)<br>[scripts/export_claude_code_oauth.py](../../../../sources/bytedance__deer-flow/scripts/export_claude_code_oauth.py)<br>[scripts/sandbox_memory_profile.py](../../../../sources/bytedance__deer-flow/scripts/sandbox_memory_profile.py)<br>[scripts/setup-sandbox.sh](../../../../sources/bytedance__deer-flow/scripts/setup-sandbox.sh)<br>[frontend/tests/unit/core/auth/gateway-config.test.ts](../../../../sources/bytedance__deer-flow/frontend/tests/unit/core/auth/gateway-config.test.ts)<br>[frontend/tests/unit/core/auth/server.test.ts](../../../../sources/bytedance__deer-flow/frontend/tests/unit/core/auth/server.test.ts)<br>[frontend/tests/e2e-real-backend/auth-disabled-contract.spec.ts](../../../../sources/bytedance__deer-flow/frontend/tests/e2e-real-backend/auth-disabled-contract.spec.ts)<br>[frontend/src/core/auth/auth-disabled-user.ts](../../../../sources/bytedance__deer-flow/frontend/src/core/auth/auth-disabled-user.ts) |
| ci | 9 | [.github/workflows/backend-blocking-io-tests.yml](../../../../sources/bytedance__deer-flow/.github/workflows/backend-blocking-io-tests.yml)<br>[.github/workflows/backend-unit-tests.yml](../../../../sources/bytedance__deer-flow/.github/workflows/backend-unit-tests.yml)<br>[.github/workflows/container.yaml](../../../../sources/bytedance__deer-flow/.github/workflows/container.yaml)<br>[.github/workflows/e2e-tests.yml](../../../../sources/bytedance__deer-flow/.github/workflows/e2e-tests.yml)<br>[.github/workflows/frontend-unit-tests.yml](../../../../sources/bytedance__deer-flow/.github/workflows/frontend-unit-tests.yml)<br>[.github/workflows/label-sync.yml](../../../../sources/bytedance__deer-flow/.github/workflows/label-sync.yml)<br>[.github/workflows/lint-check.yml](../../../../sources/bytedance__deer-flow/.github/workflows/lint-check.yml)<br>[.github/workflows/replay-e2e.yml](../../../../sources/bytedance__deer-flow/.github/workflows/replay-e2e.yml) |
| container | 7 | [frontend/Dockerfile](../../../../sources/bytedance__deer-flow/frontend/Dockerfile)<br>[docker/docker-compose-dev.yaml](../../../../sources/bytedance__deer-flow/docker/docker-compose-dev.yaml)<br>[docker/docker-compose.cli-auth.yaml](../../../../sources/bytedance__deer-flow/docker/docker-compose.cli-auth.yaml)<br>[docker/docker-compose.dood.yaml](../../../../sources/bytedance__deer-flow/docker/docker-compose.dood.yaml)<br>[docker/docker-compose.yaml](../../../../sources/bytedance__deer-flow/docker/docker-compose.yaml)<br>[docker/provisioner/Dockerfile](../../../../sources/bytedance__deer-flow/docker/provisioner/Dockerfile)<br>[backend/Dockerfile](../../../../sources/bytedance__deer-flow/backend/Dockerfile) |
| instruction | 5 | [frontend/AGENTS.md](../../../../sources/bytedance__deer-flow/frontend/AGENTS.md)<br>[frontend/CLAUDE.md](../../../../sources/bytedance__deer-flow/frontend/CLAUDE.md)<br>[backend/AGENTS.md](../../../../sources/bytedance__deer-flow/backend/AGENTS.md)<br>[backend/CLAUDE.md](../../../../sources/bytedance__deer-flow/backend/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/bytedance__deer-flow/.github/copilot-instructions.md) |
| docs | 56 | [README_fr.md](../../../../sources/bytedance__deer-flow/README_fr.md)<br>[README_ja.md](../../../../sources/bytedance__deer-flow/README_ja.md)<br>[README_ru.md](../../../../sources/bytedance__deer-flow/README_ru.md)<br>[README_zh.md](../../../../sources/bytedance__deer-flow/README_zh.md)<br>[README.md](../../../../sources/bytedance__deer-flow/README.md)<br>[frontend/README.md](../../../../sources/bytedance__deer-flow/frontend/README.md)<br>`frontend/src/app/[lang]/docs/layout.tsx`<br>`frontend/src/app/[lang]/docs/[[...mdxPath]]/page.tsx` |
| config | 9 | [Makefile](../../../../sources/bytedance__deer-flow/Makefile)<br>[frontend/Makefile](../../../../sources/bytedance__deer-flow/frontend/Makefile)<br>[frontend/package.json](../../../../sources/bytedance__deer-flow/frontend/package.json)<br>[frontend/pnpm-workspace.yaml](../../../../sources/bytedance__deer-flow/frontend/pnpm-workspace.yaml)<br>[frontend/tsconfig.json](../../../../sources/bytedance__deer-flow/frontend/tsconfig.json)<br>[backend/Makefile](../../../../sources/bytedance__deer-flow/backend/Makefile)<br>[backend/pyproject.toml](../../../../sources/bytedance__deer-flow/backend/pyproject.toml)<br>[backend/uv.lock](../../../../sources/bytedance__deer-flow/backend/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 347 | [tests/skills/skill_loader.py](../../../../sources/bytedance__deer-flow/tests/skills/skill_loader.py)<br>[tests/skills/test_image_generation.py](../../../../sources/bytedance__deer-flow/tests/skills/test_image_generation.py)<br>[tests/skills/test_music_generation.py](../../../../sources/bytedance__deer-flow/tests/skills/test_music_generation.py)<br>[tests/skills/test_podcast_generation.py](../../../../sources/bytedance__deer-flow/tests/skills/test_podcast_generation.py)<br>[tests/skills/test_video_generation.py](../../../../sources/bytedance__deer-flow/tests/skills/test_video_generation.py)<br>[skills/public/systematic-literature-review/evals/trigger_eval_set.json](../../../../sources/bytedance__deer-flow/skills/public/systematic-literature-review/evals/trigger_eval_set.json) |
| CI workflow | 9 | [.github/workflows/backend-blocking-io-tests.yml](../../../../sources/bytedance__deer-flow/.github/workflows/backend-blocking-io-tests.yml)<br>[.github/workflows/backend-unit-tests.yml](../../../../sources/bytedance__deer-flow/.github/workflows/backend-unit-tests.yml)<br>[.github/workflows/container.yaml](../../../../sources/bytedance__deer-flow/.github/workflows/container.yaml)<br>[.github/workflows/e2e-tests.yml](../../../../sources/bytedance__deer-flow/.github/workflows/e2e-tests.yml)<br>[.github/workflows/frontend-unit-tests.yml](../../../../sources/bytedance__deer-flow/.github/workflows/frontend-unit-tests.yml)<br>[.github/workflows/label-sync.yml](../../../../sources/bytedance__deer-flow/.github/workflows/label-sync.yml) |
| 컨테이너/배포 | 7 | [frontend/Dockerfile](../../../../sources/bytedance__deer-flow/frontend/Dockerfile)<br>[docker/docker-compose-dev.yaml](../../../../sources/bytedance__deer-flow/docker/docker-compose-dev.yaml)<br>[docker/docker-compose.cli-auth.yaml](../../../../sources/bytedance__deer-flow/docker/docker-compose.cli-auth.yaml)<br>[docker/docker-compose.dood.yaml](../../../../sources/bytedance__deer-flow/docker/docker-compose.dood.yaml)<br>[docker/docker-compose.yaml](../../../../sources/bytedance__deer-flow/docker/docker-compose.yaml)<br>[docker/provisioner/Dockerfile](../../../../sources/bytedance__deer-flow/docker/provisioner/Dockerfile) |
| 보안/정책 | 101 | [SECURITY.md](../../../../sources/bytedance__deer-flow/SECURITY.md)<br>[scripts/export_claude_code_oauth.py](../../../../sources/bytedance__deer-flow/scripts/export_claude_code_oauth.py)<br>[scripts/sandbox_memory_profile.py](../../../../sources/bytedance__deer-flow/scripts/sandbox_memory_profile.py)<br>[scripts/setup-sandbox.sh](../../../../sources/bytedance__deer-flow/scripts/setup-sandbox.sh)<br>[frontend/tests/unit/core/auth/gateway-config.test.ts](../../../../sources/bytedance__deer-flow/frontend/tests/unit/core/auth/gateway-config.test.ts)<br>[frontend/tests/unit/core/auth/server.test.ts](../../../../sources/bytedance__deer-flow/frontend/tests/unit/core/auth/server.test.ts) |
| 에이전트 지시문 | 5 | [frontend/AGENTS.md](../../../../sources/bytedance__deer-flow/frontend/AGENTS.md)<br>[frontend/CLAUDE.md](../../../../sources/bytedance__deer-flow/frontend/CLAUDE.md)<br>[backend/AGENTS.md](../../../../sources/bytedance__deer-flow/backend/AGENTS.md)<br>[backend/CLAUDE.md](../../../../sources/bytedance__deer-flow/backend/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/bytedance__deer-flow/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `frontend/tests/unit/core/mcp/api.test.ts`, `frontend/tests/unit/core/mcp/hooks.test.ts`, `frontend/src/core/mcp/api.ts`.
2. entrypoint를 따라 실행 흐름 확인: `frontend/tests/unit/core/auth/server.test.ts`, `frontend/src/core/i18n/server.ts`, `frontend/src/core/auth/server.ts`.
3. agent/tool runtime 매핑: `tests/skills/skill_loader.py`, `tests/skills/test_image_generation.py`, `tests/skills/test_music_generation.py`.
4. retrieval/memory/indexing 확인: `skills/public/chart-visualization/references/generate_network_graph.md`, `scripts/load_memory_sample.py`, `scripts/sandbox_memory_profile.py`.
5. test/eval 파일로 동작 검증: `tests/skills/skill_loader.py`, `tests/skills/test_image_generation.py`, `tests/skills/test_music_generation.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 An open source long horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories. 핵심 구조 신호는 Python, Makefile, README.md, LICENSE, tests, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
