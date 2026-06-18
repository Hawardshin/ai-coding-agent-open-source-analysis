# ory/lumen 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Save 30% token costs when using Claude Code, Codex, OpenCode for free - with open source, local semantic search. Works for small and large codebases and monorepos! Enterprise-ready and fully compliant via Ollama and SQLite-vec.

## 요약

- 조사 단위: `sources/ory__lumen` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 685 files, 93 directories, depth score 110, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=testdata/sample-project/mcp-server-card.svelte, testdata/fixtures/svelte/mcp-server-card.svelte, testdata/fixtures/svelte/mcp-server-manager.svelte이고, 의존성 단서는 modelcontextprotocol, cobra, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | ory/lumen |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 214 |
| Forks | 24 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/ory__lumen](../../../../sources/ory__lumen) |
| 기존 보고서 | [reports/global-trending/repositories/ory__lumen.md](../../../global-trending/repositories/ory__lumen.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 685 / 93 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .claude, .claude-plugin, .codex, .cursor, .cursor-plugin, .github, .opencode, bench-results, bench-swe, cmd, docs, hooks, internal, scripts, skills, testdata |
| 상위 확장자 | .go: 149, .json: 80, .md: 78, (none): 64, .ts: 24, .diff: 22, .js: 22, .jsonl: 22, .log: 22, .py: 22, .txt: 22, .php: 21 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| bench-results | validation surface | 1 |
| bench-swe | validation surface | 1 |
| cmd | source boundary | 1 |
| cmd/hook_spawn_unix.go | cmd workspace | 1 |
| cmd/hook_spawn_windows.go | cmd workspace | 1 |
| cmd/hook_test.go | cmd workspace | 1 |
| cmd/hook.go | cmd workspace | 1 |
| cmd/index_test.go | cmd workspace | 1 |
| cmd/index.go | cmd workspace | 1 |
| hooks | top-level component | 1 |
| internal | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| testdata | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| build | Makefile | build-local | make build-local |
| build | Makefile | build-bench-swe | make build-bench-swe |
| test | Makefile | test | make test |
| utility | Makefile | e2e | make e2e |
| utility | Makefile | e2e-lang | make e2e-lang |
| quality | Makefile | lint | make lint |
| utility | Makefile | vet | make vet |
| utility | Makefile | tidy | make tidy |
| utility | Makefile | clean | make clean |
| quality | Makefile | format | make format |
| serve-dev | Makefile | plugin-dev | make plugin-dev |
| utility | Makefile | vhs | make vhs |


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
| mcp | [testdata/sample-project/mcp-server-card.svelte](../../../../sources/ory__lumen/testdata/sample-project/mcp-server-card.svelte) | mcp signal |
| mcp | [testdata/fixtures/svelte/mcp-server-card.svelte](../../../../sources/ory__lumen/testdata/fixtures/svelte/mcp-server-card.svelte) | mcp signal |
| mcp | [testdata/fixtures/svelte/mcp-server-manager.svelte](../../../../sources/ory__lumen/testdata/fixtures/svelte/mcp-server-manager.svelte) | mcp signal |
| mcp | [scripts/testdata/mock_mcp_server/main.go](../../../../sources/ory__lumen/scripts/testdata/mock_mcp_server/main.go) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/ory__lumen/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/reindex/SKILL.md](../../../../sources/ory__lumen/skills/reindex/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/doctor/SKILL.md](../../../../sources/ory__lumen/skills/doctor/SKILL.md) | agentRuntime signal |
| agentRuntime | [hooks/hooks-cursor.json](../../../../sources/ory__lumen/hooks/hooks-cursor.json) | agentRuntime signal |
| entrypoints | [main.go](../../../../sources/ory__lumen/main.go) | entrypoints signal |
| entrypoints | [testdata/fixtures/dart/server.dart](../../../../sources/ory__lumen/testdata/fixtures/dart/server.dart) | entrypoints signal |
| entrypoints | [bench-swe/main.go](../../../../sources/ory__lumen/bench-swe/main.go) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/ory__lumen/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [main.go](../../../../sources/ory__lumen/main.go)<br>[testdata/fixtures/dart/server.dart](../../../../sources/ory__lumen/testdata/fixtures/dart/server.dart)<br>[scripts/testdata/mock_mcp_server/main.go](../../../../sources/ory__lumen/scripts/testdata/mock_mcp_server/main.go)<br>[bench-swe/main.go](../../../../sources/ory__lumen/bench-swe/main.go) |
| agentRuntime | 15 | [AGENTS.md](../../../../sources/ory__lumen/AGENTS.md)<br>[skills/reindex/SKILL.md](../../../../sources/ory__lumen/skills/reindex/SKILL.md)<br>[skills/doctor/SKILL.md](../../../../sources/ory__lumen/skills/doctor/SKILL.md)<br>[hooks/hooks-cursor.json](../../../../sources/ory__lumen/hooks/hooks-cursor.json)<br>[hooks/hooks.json](../../../../sources/ory__lumen/hooks/hooks.json)<br>[cmd/hook_spawn_unix.go](../../../../sources/ory__lumen/cmd/hook_spawn_unix.go)<br>[cmd/hook_spawn_windows.go](../../../../sources/ory__lumen/cmd/hook_spawn_windows.go)<br>[cmd/hook_test.go](../../../../sources/ory__lumen/cmd/hook_test.go) |
| mcp | 5 | [testdata/sample-project/mcp-server-card.svelte](../../../../sources/ory__lumen/testdata/sample-project/mcp-server-card.svelte)<br>[testdata/fixtures/svelte/mcp-server-card.svelte](../../../../sources/ory__lumen/testdata/fixtures/svelte/mcp-server-card.svelte)<br>[testdata/fixtures/svelte/mcp-server-manager.svelte](../../../../sources/ory__lumen/testdata/fixtures/svelte/mcp-server-manager.svelte)<br>[scripts/testdata/mock_mcp_server/main.go](../../../../sources/ory__lumen/scripts/testdata/mock_mcp_server/main.go)<br>[.cursor/mcp.json](../../../../sources/ory__lumen/.cursor/mcp.json) |
| retrieval | 10 | [testdata/fixtures/yaml/k8s-memory-limit.yaml](../../../../sources/ory__lumen/testdata/fixtures/yaml/k8s-memory-limit.yaml)<br>[internal/index/index_concurrency_test.go](../../../../sources/ory__lumen/internal/index/index_concurrency_test.go)<br>[internal/index/index_test.go](../../../../sources/ory__lumen/internal/index/index_test.go)<br>[internal/index/index.go](../../../../sources/ory__lumen/internal/index/index.go)<br>[internal/index/seed_test.go](../../../../sources/ory__lumen/internal/index/seed_test.go)<br>[internal/index/seed.go](../../../../sources/ory__lumen/internal/index/seed.go)<br>[internal/index/split_test.go](../../../../sources/ory__lumen/internal/index/split_test.go)<br>[internal/index/split.go](../../../../sources/ory__lumen/internal/index/split.go) |
| spec | 0 | 명확하지 않음 |
| eval | 291 | [e2e_cli_test.go](../../../../sources/ory__lumen/e2e_cli_test.go)<br>[e2e_config_test.go](../../../../sources/ory__lumen/e2e_config_test.go)<br>[e2e_lang_test.go](../../../../sources/ory__lumen/e2e_lang_test.go)<br>[e2e_test.go](../../../../sources/ory__lumen/e2e_test.go)<br>[e2e_topology_test.go](../../../../sources/ory__lumen/e2e_topology_test.go)<br>[testdata/fixtures/yaml/flask-tests.yml](../../../../sources/ory__lumen/testdata/fixtures/yaml/flask-tests.yml)<br>[testdata/fixtures/md/ch11-01-writing-tests.md](../../../../sources/ory__lumen/testdata/fixtures/md/ch11-01-writing-tests.md)<br>[scripts/test_run_dispatch_windows.bat](../../../../sources/ory__lumen/scripts/test_run_dispatch_windows.bat) |
| security | 3 | [testdata/snapshots/TestLang_PHP-authentication_guard_session](../../../../sources/ory__lumen/testdata/snapshots/TestLang_PHP-authentication_guard_session)<br>[testdata/sample-project/auth.go](../../../../sources/ory__lumen/testdata/sample-project/auth.go)<br>[testdata/fixtures/yaml/k8s-security-context.yaml](../../../../sources/ory__lumen/testdata/fixtures/yaml/k8s-security-context.yaml) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/ory__lumen/.github/workflows/ci.yml)<br>[.github/workflows/release-please.yml](../../../../sources/ory__lumen/.github/workflows/release-please.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [AGENTS.md](../../../../sources/ory__lumen/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ory__lumen/CLAUDE.md)<br>[.codex/INSTALL.md](../../../../sources/ory__lumen/.codex/INSTALL.md) |
| docs | 6 | [README.md](../../../../sources/ory__lumen/README.md)<br>[docs/BENCHMARKS.md](../../../../sources/ory__lumen/docs/BENCHMARKS.md)<br>[docs/demo/demo.gif](../../../../sources/ory__lumen/docs/demo/demo.gif)<br>[docs/demo/demo.sh](../../../../sources/ory__lumen/docs/demo/demo.sh)<br>[docs/demo/demo.tape](../../../../sources/ory__lumen/docs/demo/demo.tape)<br>[bench-swe/README.md](../../../../sources/ory__lumen/bench-swe/README.md) |
| config | 5 | [go.mod](../../../../sources/ory__lumen/go.mod)<br>[Makefile](../../../../sources/ory__lumen/Makefile)<br>[package.json](../../../../sources/ory__lumen/package.json)<br>[scripts/package.json](../../../../sources/ory__lumen/scripts/package.json)<br>[bench-swe/go.mod](../../../../sources/ory__lumen/bench-swe/go.mod) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 291 | [e2e_cli_test.go](../../../../sources/ory__lumen/e2e_cli_test.go)<br>[e2e_config_test.go](../../../../sources/ory__lumen/e2e_config_test.go)<br>[e2e_lang_test.go](../../../../sources/ory__lumen/e2e_lang_test.go)<br>[e2e_test.go](../../../../sources/ory__lumen/e2e_test.go)<br>[e2e_topology_test.go](../../../../sources/ory__lumen/e2e_topology_test.go)<br>[testdata/fixtures/yaml/flask-tests.yml](../../../../sources/ory__lumen/testdata/fixtures/yaml/flask-tests.yml) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/ory__lumen/.github/workflows/ci.yml)<br>[.github/workflows/release-please.yml](../../../../sources/ory__lumen/.github/workflows/release-please.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 3 | [testdata/snapshots/TestLang_PHP-authentication_guard_session](../../../../sources/ory__lumen/testdata/snapshots/TestLang_PHP-authentication_guard_session)<br>[testdata/sample-project/auth.go](../../../../sources/ory__lumen/testdata/sample-project/auth.go)<br>[testdata/fixtures/yaml/k8s-security-context.yaml](../../../../sources/ory__lumen/testdata/fixtures/yaml/k8s-security-context.yaml) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/ory__lumen/AGENTS.md)<br>[CLAUDE.md](../../../../sources/ory__lumen/CLAUDE.md)<br>[.codex/INSTALL.md](../../../../sources/ory__lumen/.codex/INSTALL.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `testdata/sample-project/mcp-server-card.svelte`, `testdata/fixtures/svelte/mcp-server-card.svelte`, `testdata/fixtures/svelte/mcp-server-manager.svelte`.
2. entrypoint를 따라 실행 흐름 확인: `main.go`, `testdata/fixtures/dart/server.dart`, `scripts/testdata/mock_mcp_server/main.go`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills/reindex/SKILL.md`, `skills/doctor/SKILL.md`.
4. retrieval/memory/indexing 확인: `testdata/fixtures/yaml/k8s-memory-limit.yaml`, `internal/index/index_concurrency_test.go`, `internal/index/index_test.go`.
5. test/eval 파일로 동작 검증: `e2e_cli_test.go`, `e2e_config_test.go`, `e2e_lang_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Save 30% token costs when using Claude Code, Codex, OpenCode for free with open source, local semantic search. Works for. 핵심 구조 신호는 Go, package.json, go.mod, Makefile, README.md, AGENTS.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
