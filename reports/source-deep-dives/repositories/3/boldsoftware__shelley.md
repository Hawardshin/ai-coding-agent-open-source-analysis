# boldsoftware/shelley 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Shelley is a coding agent

## 요약

- 조사 단위: `sources/boldsoftware__shelley` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 570 files, 81 directories, depth score 106, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENT_TESTING.md, AGENTS.md, HOOKS.md이고, 의존성 단서는 openai, cobra, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | boldsoftware/shelley |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 503 |
| Forks | 85 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/boldsoftware__shelley](../../../../sources/boldsoftware__shelley) |
| 기존 보고서 | [reports/global-trending/repositories/boldsoftware__shelley.md](../../../global-trending/repositories/boldsoftware__shelley.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 570 / 81 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, bin, claudetool, client, cmd, db, dtach, featureflags, gitstate, lazycue, llm, loop, models, modelsources, scripts, server, skills, slug, subpub, templates |
| 상위 확장자 | .go: 264, .ts: 73, .tsx: 65, .json: 50, .sql: 40, .md: 21, (none): 11, .txt: 7, .js: 6, .sh: 6, .yml: 4, .html: 3 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| server | source boundary | 4 |
| .github | ci surface | 1 |
| bin | top-level component | 1 |
| claudetool | top-level component | 1 |
| client | source boundary | 1 |
| cmd | source boundary | 1 |
| cmd/shelley | cmd workspace | 1 |
| cmd/upgoer5check | cmd workspace | 1 |
| db | top-level component | 1 |
| dtach | top-level component | 1 |
| featureflags | top-level component | 1 |
| gitstate | top-level component | 1 |
| lazycue | top-level component | 1 |
| llm | top-level component | 1 |
| loop | top-level component | 1 |
| models | top-level component | 1 |
| modelsources | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | all | make all |
| utility | Makefile | templates | make templates |
| build | Makefile | build | make build |
| build | Makefile | build-linux | make build-linux |
| build | Makefile | build-linux-aarch64 | make build-linux-aarch64 |
| build | Makefile | build-linux-x86 | make build-linux-x86 |
| utility | Makefile | ui | make ui |
| test | Makefile | test-go | make test-go |
| test | Makefile | test-e2e | make test-e2e |
| test | Makefile | test-e2e-headed | make test-e2e-headed |
| test | Makefile | test-e2e-ui | make test-e2e-ui |
| test | Makefile | test | make test |
| test | Makefile | serve-test | make serve-test |
| serve-dev | Makefile | serve | make serve |
| utility | Makefile | clean | make clean |
| utility | Makefile | demo | make demo |
| utility | Makefile | help | make help |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | cobra |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [AGENT_TESTING.md](../../../../sources/boldsoftware__shelley/AGENT_TESTING.md) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/boldsoftware__shelley/AGENTS.md) | agentRuntime signal |
| agentRuntime | [HOOKS.md](../../../../sources/boldsoftware__shelley/HOOKS.md) | agentRuntime signal |
| agentRuntime | [ui/src/i18n/context.tsx](../../../../sources/boldsoftware__shelley/ui/src/i18n/context.tsx) | agentRuntime signal |
| entrypoints | [ui/src/App.tsx](../../../../sources/boldsoftware__shelley/ui/src/App.tsx) | entrypoints signal |
| entrypoints | [ui/src/index.html](../../../../sources/boldsoftware__shelley/ui/src/index.html) | entrypoints signal |
| entrypoints | [ui/src/main.tsx](../../../../sources/boldsoftware__shelley/ui/src/main.tsx) | entrypoints signal |
| entrypoints | [templates/go/srv/server.go](../../../../sources/boldsoftware__shelley/templates/go/srv/server.go) | entrypoints signal |
| instruction | [ui/src/components/AGENTS.md](../../../../sources/boldsoftware__shelley/ui/src/components/AGENTS.md) | instruction signal |
| instruction | [templates/go/AGENTS.md](../../../../sources/boldsoftware__shelley/templates/go/AGENTS.md) | instruction signal |
| config | [go.mod](../../../../sources/boldsoftware__shelley/go.mod) | config signal |
| config | [Makefile](../../../../sources/boldsoftware__shelley/Makefile) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 12 | [ui/src/App.tsx](../../../../sources/boldsoftware__shelley/ui/src/App.tsx)<br>[ui/src/index.html](../../../../sources/boldsoftware__shelley/ui/src/index.html)<br>[ui/src/main.tsx](../../../../sources/boldsoftware__shelley/ui/src/main.tsx)<br>[templates/go/srv/server.go](../../../../sources/boldsoftware__shelley/templates/go/srv/server.go)<br>[templates/go/cmd/srv/main.go](../../../../sources/boldsoftware__shelley/templates/go/cmd/srv/main.go)<br>[server/server.go](../../../../sources/boldsoftware__shelley/server/server.go)<br>[lazycue/cmd/lazycue/main.go](../../../../sources/boldsoftware__shelley/lazycue/cmd/lazycue/main.go)<br>[dtach/server.go](../../../../sources/boldsoftware__shelley/dtach/server.go) |
| agentRuntime | 23 | [AGENT_TESTING.md](../../../../sources/boldsoftware__shelley/AGENT_TESTING.md)<br>[AGENTS.md](../../../../sources/boldsoftware__shelley/AGENTS.md)<br>[HOOKS.md](../../../../sources/boldsoftware__shelley/HOOKS.md)<br>[ui/src/i18n/context.tsx](../../../../sources/boldsoftware__shelley/ui/src/i18n/context.tsx)<br>[ui/src/hooks/useDraftAutosave.ts](../../../../sources/boldsoftware__shelley/ui/src/hooks/useDraftAutosave.ts)<br>[ui/src/hooks/useMonacoVim.ts](../../../../sources/boldsoftware__shelley/ui/src/hooks/useMonacoVim.ts)<br>[ui/src/components/AGENTS.md](../../../../sources/boldsoftware__shelley/ui/src/components/AGENTS.md)<br>[ui/e2e/tool-components.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/tool-components.spec.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 4 | [ui/src/index.html](../../../../sources/boldsoftware__shelley/ui/src/index.html)<br>[ui/src/services/notifications/index.ts](../../../../sources/boldsoftware__shelley/ui/src/services/notifications/index.ts)<br>[ui/src/i18n/index.ts](../../../../sources/boldsoftware__shelley/ui/src/i18n/index.ts)<br>[db/schema/029-messages-conv-type-seq-index.sql](../../../../sources/boldsoftware__shelley/db/schema/029-messages-conv-type-seq-index.sql) |
| spec | 16 | [ARCHITECTURE.md](../../../../sources/boldsoftware__shelley/ARCHITECTURE.md)<br>[ui/e2e/ansi-rendering.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/ansi-rendering.spec.ts)<br>[ui/e2e/cancellation.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/cancellation.spec.ts)<br>[ui/e2e/conversation-cache.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/conversation-cache.spec.ts)<br>[ui/e2e/conversation-grouping.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/conversation-grouping.spec.ts)<br>[ui/e2e/conversation-sort-bucketing.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/conversation-sort-bucketing.spec.ts)<br>[ui/e2e/conversation.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/conversation.spec.ts)<br>[ui/e2e/diff-viewer-find.spec.ts](../../../../sources/boldsoftware__shelley/ui/e2e/diff-viewer-find.spec.ts) |
| eval | 165 | [test_ci.sh](../../../../sources/boldsoftware__shelley/test_ci.sh)<br>[test_manual.sh](../../../../sources/boldsoftware__shelley/test_manual.sh)<br>[ui/src/utils/ansi.test.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/ansi.test.ts)<br>[ui/src/utils/conversationMarkdown.test.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/conversationMarkdown.test.ts)<br>[ui/src/utils/conversationSort.test.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/conversationSort.test.ts)<br>[ui/src/utils/inlineText.test.runner.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/inlineText.test.runner.ts)<br>[ui/src/utils/inlineText.test.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/inlineText.test.ts)<br>[ui/src/utils/linkify.test.runner.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/linkify.test.runner.ts) |
| security | 0 | 명확하지 않음 |
| ci | 3 | [.github/workflows/publish-version-metadata.yml](../../../../sources/boldsoftware__shelley/.github/workflows/publish-version-metadata.yml)<br>[.github/workflows/release.yml](../../../../sources/boldsoftware__shelley/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/boldsoftware__shelley/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [AGENTS.md](../../../../sources/boldsoftware__shelley/AGENTS.md)<br>[ui/src/components/AGENTS.md](../../../../sources/boldsoftware__shelley/ui/src/components/AGENTS.md)<br>[templates/go/AGENTS.md](../../../../sources/boldsoftware__shelley/templates/go/AGENTS.md) |
| docs | 8 | [README.md](../../../../sources/boldsoftware__shelley/README.md)<br>[ui/lazycue/README.md](../../../../sources/boldsoftware__shelley/ui/lazycue/README.md)<br>[ui/e2e/README.md](../../../../sources/boldsoftware__shelley/ui/e2e/README.md)<br>[templates/go/README.md](../../../../sources/boldsoftware__shelley/templates/go/README.md)<br>[loop/README.md](../../../../sources/boldsoftware__shelley/loop/README.md)<br>[lazycue/README.md](../../../../sources/boldsoftware__shelley/lazycue/README.md)<br>[db/README.md](../../../../sources/boldsoftware__shelley/db/README.md)<br>[claudetool/browse/README.md](../../../../sources/boldsoftware__shelley/claudetool/browse/README.md) |
| config | 7 | [go.mod](../../../../sources/boldsoftware__shelley/go.mod)<br>[Makefile](../../../../sources/boldsoftware__shelley/Makefile)<br>[ui/package.json](../../../../sources/boldsoftware__shelley/ui/package.json)<br>[ui/tsconfig.json](../../../../sources/boldsoftware__shelley/ui/tsconfig.json)<br>[templates/go/go.mod](../../../../sources/boldsoftware__shelley/templates/go/go.mod)<br>[templates/go/Makefile](../../../../sources/boldsoftware__shelley/templates/go/Makefile)<br>[lazycue/go.mod](../../../../sources/boldsoftware__shelley/lazycue/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 165 | [test_ci.sh](../../../../sources/boldsoftware__shelley/test_ci.sh)<br>[test_manual.sh](../../../../sources/boldsoftware__shelley/test_manual.sh)<br>[ui/src/utils/ansi.test.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/ansi.test.ts)<br>[ui/src/utils/conversationMarkdown.test.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/conversationMarkdown.test.ts)<br>[ui/src/utils/conversationSort.test.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/conversationSort.test.ts)<br>[ui/src/utils/inlineText.test.runner.ts](../../../../sources/boldsoftware__shelley/ui/src/utils/inlineText.test.runner.ts) |
| CI workflow | 3 | [.github/workflows/publish-version-metadata.yml](../../../../sources/boldsoftware__shelley/.github/workflows/publish-version-metadata.yml)<br>[.github/workflows/release.yml](../../../../sources/boldsoftware__shelley/.github/workflows/release.yml)<br>[.github/workflows/test.yml](../../../../sources/boldsoftware__shelley/.github/workflows/test.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/boldsoftware__shelley/AGENTS.md)<br>[ui/src/components/AGENTS.md](../../../../sources/boldsoftware__shelley/ui/src/components/AGENTS.md)<br>[templates/go/AGENTS.md](../../../../sources/boldsoftware__shelley/templates/go/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENT_TESTING.md`, `AGENTS.md`, `HOOKS.md`.
2. entrypoint를 따라 실행 흐름 확인: `ui/src/App.tsx`, `ui/src/index.html`, `ui/src/main.tsx`.
3. agent/tool runtime 매핑: `AGENT_TESTING.md`, `AGENTS.md`, `HOOKS.md`.
4. retrieval/memory/indexing 확인: `ui/src/index.html`, `ui/src/services/notifications/index.ts`, `ui/src/i18n/index.ts`.
5. test/eval 파일로 동작 검증: `test_ci.sh`, `test_manual.sh`, `ui/src/utils/ansi.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Shelley is a coding agent. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
