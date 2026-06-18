# mathomhaus/guild 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Shared context, memory, and task coordination across AI coding agents. Single Go binary, local SQLite, hybrid keyword and semantic search.

## 요약

- 조사 단위: `sources/mathomhaus__guild` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 444 files, 52 directories, depth score 115, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=internal/mcp/auto_bootstrap_test.go, internal/mcp/budget_test.go, internal/mcp/db.go이고, 의존성 단서는 modelcontextprotocol, cobra, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | mathomhaus/guild |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 312 |
| Forks | 47 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/mathomhaus__guild](../../../../sources/mathomhaus__guild) |
| 기존 보고서 | [reports/global-trending/repositories/mathomhaus__guild.md](../../../global-trending/repositories/mathomhaus__guild.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 444 / 52 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, cmd, docs, examples, internal, recipe, tests |
| 상위 확장자 | .go: 349, .md: 32, .txt: 15, .yml: 15, .sh: 11, .sql: 8, (none): 5, .gif: 3, .json: 1, .mod: 1, .ps1: 1, .py: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 9 |
| tests | validation surface | 9 |
| cmd/sqlcheck | cmd workspace | 2 |
| examples/01-hello-guild | examples workspace | 2 |
| examples/02-quest-decomposition | examples workspace | 2 |
| examples/03-cross-project | examples workspace | 2 |
| examples/04-session-handoff | examples workspace | 2 |
| examples/05-lore-only | examples workspace | 2 |
| .github | ci surface | 1 |
| cmd | source boundary | 1 |
| cmd/docgen | cmd workspace | 1 |
| cmd/embedref | cmd workspace | 1 |
| cmd/guild | cmd workspace | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| internal | top-level component | 1 |
| recipe | ci surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-fast | make build-fast |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-all | make build-all |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | sqlcheck | make sqlcheck |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install | make install |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install-fast | make install-fast |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install-embed | make install-embed |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-race | make test-race |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | cobra |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [internal/mcp/auto_bootstrap_test.go](../../../../sources/mathomhaus__guild/internal/mcp/auto_bootstrap_test.go) | mcp signal |
| mcp | [internal/mcp/budget_test.go](../../../../sources/mathomhaus__guild/internal/mcp/budget_test.go) | mcp signal |
| mcp | [internal/mcp/db.go](../../../../sources/mathomhaus__guild/internal/mcp/db.go) | mcp signal |
| mcp | [internal/mcp/doc_coverage_audit_test.go](../../../../sources/mathomhaus__guild/internal/mcp/doc_coverage_audit_test.go) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/mathomhaus__guild/AGENTS.md) | agentRuntime signal |
| agentRuntime | [internal/mcp/tools_guild.go](../../../../sources/mathomhaus__guild/internal/mcp/tools_guild.go) | agentRuntime signal |
| agentRuntime | [internal/mcp/tools_lore.go](../../../../sources/mathomhaus__guild/internal/mcp/tools_lore.go) | agentRuntime signal |
| agentRuntime | [internal/mcp/tools_quest.go](../../../../sources/mathomhaus__guild/internal/mcp/tools_quest.go) | agentRuntime signal |
| entrypoints | [internal/mcp/server.go](../../../../sources/mathomhaus__guild/internal/mcp/server.go) | entrypoints signal |
| entrypoints | [cmd/sqlcheck/main.go](../../../../sources/mathomhaus__guild/cmd/sqlcheck/main.go) | entrypoints signal |
| entrypoints | [cmd/guild/main.go](../../../../sources/mathomhaus__guild/cmd/guild/main.go) | entrypoints signal |
| entrypoints | [cmd/embedref/main.go](../../../../sources/mathomhaus__guild/cmd/embedref/main.go) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [internal/mcp/server.go](../../../../sources/mathomhaus__guild/internal/mcp/server.go)<br>[cmd/sqlcheck/main.go](../../../../sources/mathomhaus__guild/cmd/sqlcheck/main.go)<br>[cmd/guild/main.go](../../../../sources/mathomhaus__guild/cmd/guild/main.go)<br>[cmd/embedref/main.go](../../../../sources/mathomhaus__guild/cmd/embedref/main.go)<br>[cmd/docgen/main.go](../../../../sources/mathomhaus__guild/cmd/docgen/main.go) |
| agentRuntime | 8 | [AGENTS.md](../../../../sources/mathomhaus__guild/AGENTS.md)<br>[internal/mcp/tools_guild.go](../../../../sources/mathomhaus__guild/internal/mcp/tools_guild.go)<br>[internal/mcp/tools_lore.go](../../../../sources/mathomhaus__guild/internal/mcp/tools_lore.go)<br>[internal/mcp/tools_quest.go](../../../../sources/mathomhaus__guild/internal/mcp/tools_quest.go)<br>[internal/mcp/tools_test.go](../../../../sources/mathomhaus__guild/internal/mcp/tools_test.go)<br>[internal/install/templates/agents_md.tmpl](../../../../sources/mathomhaus__guild/internal/install/templates/agents_md.tmpl)<br>[internal/hints/context_test.go](../../../../sources/mathomhaus__guild/internal/hints/context_test.go)<br>[internal/hints/context.go](../../../../sources/mathomhaus__guild/internal/hints/context.go) |
| mcp | 43 | [internal/mcp/auto_bootstrap_test.go](../../../../sources/mathomhaus__guild/internal/mcp/auto_bootstrap_test.go)<br>[internal/mcp/budget_test.go](../../../../sources/mathomhaus__guild/internal/mcp/budget_test.go)<br>[internal/mcp/db.go](../../../../sources/mathomhaus__guild/internal/mcp/db.go)<br>[internal/mcp/doc_coverage_audit_test.go](../../../../sources/mathomhaus__guild/internal/mcp/doc_coverage_audit_test.go)<br>[internal/mcp/doc_coverage_test.go](../../../../sources/mathomhaus__guild/internal/mcp/doc_coverage_test.go)<br>[internal/mcp/embed_autobackfill_test.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_autobackfill_test.go)<br>[internal/mcp/embed_autobackfill.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_autobackfill.go)<br>[internal/mcp/embed_provider.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_provider.go) |
| retrieval | 60 | [internal/storage/embed.go](../../../../sources/mathomhaus__guild/internal/storage/embed.go)<br>[internal/storage/migrations/007_task_notes_task_id_index.up.sql](../../../../sources/mathomhaus__guild/internal/storage/migrations/007_task_notes_task_id_index.up.sql)<br>[internal/mcp/embed_autobackfill_test.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_autobackfill_test.go)<br>[internal/mcp/embed_autobackfill.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_autobackfill.go)<br>[internal/mcp/embed_provider.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_provider.go)<br>[internal/mcp/embed_wiring_flip_test.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_wiring_flip_test.go)<br>[internal/mcp/embed_wiring_test.go](../../../../sources/mathomhaus__guild/internal/mcp/embed_wiring_test.go)<br>[internal/mcp/quest_embed_provider.go](../../../../sources/mathomhaus__guild/internal/mcp/quest_embed_provider.go) |
| spec | 4 | [recipe/requirements.txt](../../../../sources/mathomhaus__guild/recipe/requirements.txt)<br>[internal/quest/spec.go](../../../../sources/mathomhaus__guild/internal/quest/spec.go)<br>[internal/command/spec_test.go](../../../../sources/mathomhaus__guild/internal/command/spec_test.go)<br>[internal/command/spec.go](../../../../sources/mathomhaus__guild/internal/command/spec.go) |
| eval | 146 | [tests/integration/bloat_warn_test.go](../../../../sources/mathomhaus__guild/tests/integration/bloat_warn_test.go)<br>[tests/integration/dedup_test.go](../../../../sources/mathomhaus__guild/tests/integration/dedup_test.go)<br>[tests/integration/harness_test.go](../../../../sources/mathomhaus__guild/tests/integration/harness_test.go)<br>[tests/integration/oath_audit_test.go](../../../../sources/mathomhaus__guild/tests/integration/oath_audit_test.go)<br>[tests/integration/recall_test.go](../../../../sources/mathomhaus__guild/tests/integration/recall_test.go)<br>[tests/integration/session_reload_test.go](../../../../sources/mathomhaus__guild/tests/integration/session_reload_test.go)<br>[tests/integration/fixtures/recall_corpus.go](../../../../sources/mathomhaus__guild/tests/integration/fixtures/recall_corpus.go)<br>[internal/test/concurrency/concurrency_test.go](../../../../sources/mathomhaus__guild/internal/test/concurrency/concurrency_test.go) |
| security | 3 | [SECURITY.md](../../../../sources/mathomhaus__guild/SECURITY.md)<br>[tests/integration/oath_audit_test.go](../../../../sources/mathomhaus__guild/tests/integration/oath_audit_test.go)<br>[internal/mcp/doc_coverage_audit_test.go](../../../../sources/mathomhaus__guild/internal/mcp/doc_coverage_audit_test.go) |
| ci | 7 | [.github/workflows/assign.yml](../../../../sources/mathomhaus__guild/.github/workflows/assign.yml)<br>[.github/workflows/build-model.yml](../../../../sources/mathomhaus__guild/.github/workflows/build-model.yml)<br>[.github/workflows/ci.yml](../../../../sources/mathomhaus__guild/.github/workflows/ci.yml)<br>[.github/workflows/labeler.yml](../../../../sources/mathomhaus__guild/.github/workflows/labeler.yml)<br>[.github/workflows/pr-hygiene.yml](../../../../sources/mathomhaus__guild/.github/workflows/pr-hygiene.yml)<br>[.github/workflows/release-drafter.yml](../../../../sources/mathomhaus__guild/.github/workflows/release-drafter.yml)<br>[.github/workflows/release.yml](../../../../sources/mathomhaus__guild/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/mathomhaus__guild/AGENTS.md) |
| docs | 23 | [README.md](../../../../sources/mathomhaus__guild/README.md)<br>[recipe/README.md](../../../../sources/mathomhaus__guild/recipe/README.md)<br>[internal/lore/embed/assets/README.md](../../../../sources/mathomhaus__guild/internal/lore/embed/assets/README.md)<br>[examples/README.md](../../../../sources/mathomhaus__guild/examples/README.md)<br>[examples/05-lore-only/README.md](../../../../sources/mathomhaus__guild/examples/05-lore-only/README.md)<br>[examples/05-lore-only/expected/README.md](../../../../sources/mathomhaus__guild/examples/05-lore-only/expected/README.md)<br>[examples/04-session-handoff/README.md](../../../../sources/mathomhaus__guild/examples/04-session-handoff/README.md)<br>[examples/04-session-handoff/expected/README.md](../../../../sources/mathomhaus__guild/examples/04-session-handoff/expected/README.md) |
| config | 3 | [go.mod](../../../../sources/mathomhaus__guild/go.mod)<br>[Makefile](../../../../sources/mathomhaus__guild/Makefile)<br>[recipe/requirements.txt](../../../../sources/mathomhaus__guild/recipe/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 146 | [tests/integration/bloat_warn_test.go](../../../../sources/mathomhaus__guild/tests/integration/bloat_warn_test.go)<br>[tests/integration/dedup_test.go](../../../../sources/mathomhaus__guild/tests/integration/dedup_test.go)<br>[tests/integration/harness_test.go](../../../../sources/mathomhaus__guild/tests/integration/harness_test.go)<br>[tests/integration/oath_audit_test.go](../../../../sources/mathomhaus__guild/tests/integration/oath_audit_test.go)<br>[tests/integration/recall_test.go](../../../../sources/mathomhaus__guild/tests/integration/recall_test.go)<br>[tests/integration/session_reload_test.go](../../../../sources/mathomhaus__guild/tests/integration/session_reload_test.go) |
| CI workflow | 7 | [.github/workflows/assign.yml](../../../../sources/mathomhaus__guild/.github/workflows/assign.yml)<br>[.github/workflows/build-model.yml](../../../../sources/mathomhaus__guild/.github/workflows/build-model.yml)<br>[.github/workflows/ci.yml](../../../../sources/mathomhaus__guild/.github/workflows/ci.yml)<br>[.github/workflows/labeler.yml](../../../../sources/mathomhaus__guild/.github/workflows/labeler.yml)<br>[.github/workflows/pr-hygiene.yml](../../../../sources/mathomhaus__guild/.github/workflows/pr-hygiene.yml)<br>[.github/workflows/release-drafter.yml](../../../../sources/mathomhaus__guild/.github/workflows/release-drafter.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 3 | [SECURITY.md](../../../../sources/mathomhaus__guild/SECURITY.md)<br>[tests/integration/oath_audit_test.go](../../../../sources/mathomhaus__guild/tests/integration/oath_audit_test.go)<br>[internal/mcp/doc_coverage_audit_test.go](../../../../sources/mathomhaus__guild/internal/mcp/doc_coverage_audit_test.go) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/mathomhaus__guild/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `internal/mcp/auto_bootstrap_test.go`, `internal/mcp/budget_test.go`, `internal/mcp/db.go`.
2. entrypoint를 따라 실행 흐름 확인: `internal/mcp/server.go`, `cmd/sqlcheck/main.go`, `cmd/guild/main.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `internal/mcp/tools_guild.go`, `internal/mcp/tools_lore.go`.
4. retrieval/memory/indexing 확인: `internal/storage/embed.go`, `internal/storage/migrations/007_task_notes_task_id_index.up.sql`, `internal/mcp/embed_autobackfill_test.go`.
5. test/eval 파일로 동작 검증: `tests/integration/bloat_warn_test.go`, `tests/integration/dedup_test.go`, `tests/integration/harness_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Shared context, memory, and task coordination across AI coding agents. Single Go binary, local SQLite, hybrid keyword an. 핵심 구조 신호는 Go, go.mod, Makefile, README.md, AGENTS.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
