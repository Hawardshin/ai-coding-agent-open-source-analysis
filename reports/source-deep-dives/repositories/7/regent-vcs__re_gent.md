# regent-vcs/re_gent 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local clone structure analysis: 132 files, 42 directories.

## 요약

- 조사 단위: `sources/regent-vcs__re_gent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 132 files, 42 directories, depth score 96, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

일반 AI 오픈소스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=cmd/rgt/main.go이고, 의존성 단서는 cobra, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | regent-vcs/re_gent |
| 주제 | 일반 AI 오픈소스 / 일반 AI 오픈소스 |
| Region | global |
| Language | 없음 |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/regent-vcs__re_gent](../../../../sources/regent-vcs__re_gent) |
| 기존 보고서 | [reports/clone-structures/regent-vcs__re_gent.md](../../../clone-structures/regent-vcs__re_gent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 132 / 42 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .agents, .claude, .github, assets, cmd, demo, docs, examples, internal, scripts, test |
| 상위 확장자 | .go: 75, .md: 25, .yml: 7, .py: 5, (none): 4, .gif: 3, .sh: 3, .json: 2, .png: 2, .jsonc: 1, .mod: 1, .mp4: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| cmd/rgt | cmd workspace | 5 |
| docs | documentation surface | 4 |
| examples/bad-refactor | examples workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| cmd | source boundary | 1 |
| demo | top-level component | 1 |
| examples | top-level component | 1 |
| internal | top-level component | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| build | Makefile | build | make build |
| test | Makefile | test | make test |
| test | Makefile | test-race | make test-race |
| test | Makefile | test-cover | make test-cover |
| quality | Makefile | lint | make lint |
| quality | Makefile | fmt | make fmt |
| utility | Makefile | clean | make clean |
| utility | Makefile | install | make install |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
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
| entrypoints | [cmd/rgt/main.go](../../../../sources/regent-vcs__re_gent/cmd/rgt/main.go) | entrypoints signal |
| config | [go.mod](../../../../sources/regent-vcs__re_gent/go.mod) | config signal |
| config | [Makefile](../../../../sources/regent-vcs__re_gent/Makefile) | config signal |
| docs | [README.md](../../../../sources/regent-vcs__re_gent/README.md) | docs signal |
| docs | [examples/bad-refactor/README.md](../../../../sources/regent-vcs__re_gent/examples/bad-refactor/README.md) | docs signal |
| docs | [docs/FAQ.md](../../../../sources/regent-vcs__re_gent/docs/FAQ.md) | docs signal |
| docs | [docs/shell-completion.md](../../../../sources/regent-vcs__re_gent/docs/shell-completion.md) | docs signal |
| eval | [test/integration_test.go](../../../../sources/regent-vcs__re_gent/test/integration_test.go) | eval signal |
| eval | [test/phase1_acceptance_test.go](../../../../sources/regent-vcs__re_gent/test/phase1_acceptance_test.go) | eval signal |
| eval | [test/session_branching_test.go](../../../../sources/regent-vcs__re_gent/test/session_branching_test.go) | eval signal |
| eval | [scripts/test-release.sh](../../../../sources/regent-vcs__re_gent/scripts/test-release.sh) | eval signal |
| ci | [.github/workflows/ci.yml](../../../../sources/regent-vcs__re_gent/.github/workflows/ci.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [cmd/rgt/main.go](../../../../sources/regent-vcs__re_gent/cmd/rgt/main.go) |
| agentRuntime | 12 | [internal/hook/hook_test.go](../../../../sources/regent-vcs__re_gent/internal/hook/hook_test.go)<br>[internal/hook/hook.go](../../../../sources/regent-vcs__re_gent/internal/hook/hook.go)<br>[internal/hook/payload.go](../../../../sources/regent-vcs__re_gent/internal/hook/payload.go)<br>[internal/cli/hook.go](../../../../sources/regent-vcs__re_gent/internal/cli/hook.go)<br>[demo/.claude/skills/show/SKILL.md](../../../../sources/regent-vcs__re_gent/demo/.claude/skills/show/SKILL.md)<br>[demo/.claude/skills/log/SKILL.md](../../../../sources/regent-vcs__re_gent/demo/.claude/skills/log/SKILL.md)<br>[demo/.claude/skills/blame/SKILL.md](../../../../sources/regent-vcs__re_gent/demo/.claude/skills/blame/SKILL.md)<br>[cmd/rgt/tool_batch_hook.go](../../../../sources/regent-vcs__re_gent/cmd/rgt/tool_batch_hook.go) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 7 | [internal/index/index_test.go](../../../../sources/regent-vcs__re_gent/internal/index/index_test.go)<br>[internal/index/index.go](../../../../sources/regent-vcs__re_gent/internal/index/index.go)<br>[internal/index/messages_test.go](../../../../sources/regent-vcs__re_gent/internal/index/messages_test.go)<br>[internal/index/messages.go](../../../../sources/regent-vcs__re_gent/internal/index/messages.go)<br>[internal/index/resolve.go](../../../../sources/regent-vcs__re_gent/internal/index/resolve.go)<br>[internal/cli/graph_renderer_test.go](../../../../sources/regent-vcs__re_gent/internal/cli/graph_renderer_test.go)<br>[internal/cli/graph_renderer.go](../../../../sources/regent-vcs__re_gent/internal/cli/graph_renderer.go) |
| spec | 2 | [ROADMAP.md](../../../../sources/regent-vcs__re_gent/ROADMAP.md)<br>[test/phase1_acceptance_test.go](../../../../sources/regent-vcs__re_gent/test/phase1_acceptance_test.go) |
| eval | 35 | [test/integration_test.go](../../../../sources/regent-vcs__re_gent/test/integration_test.go)<br>[test/phase1_acceptance_test.go](../../../../sources/regent-vcs__re_gent/test/phase1_acceptance_test.go)<br>[test/session_branching_test.go](../../../../sources/regent-vcs__re_gent/test/session_branching_test.go)<br>[scripts/test-release.sh](../../../../sources/regent-vcs__re_gent/scripts/test-release.sh)<br>[internal/treediff/treediff_test.go](../../../../sources/regent-vcs__re_gent/internal/treediff/treediff_test.go)<br>[internal/store/blame_test.go](../../../../sources/regent-vcs__re_gent/internal/store/blame_test.go)<br>[internal/store/blob_test.go](../../../../sources/regent-vcs__re_gent/internal/store/blob_test.go)<br>[internal/store/hash_test.go](../../../../sources/regent-vcs__re_gent/internal/store/hash_test.go) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/regent-vcs__re_gent/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/regent-vcs__re_gent/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/regent-vcs__re_gent/CLAUDE.md) |
| docs | 5 | [README.md](../../../../sources/regent-vcs__re_gent/README.md)<br>[examples/bad-refactor/README.md](../../../../sources/regent-vcs__re_gent/examples/bad-refactor/README.md)<br>[docs/FAQ.md](../../../../sources/regent-vcs__re_gent/docs/FAQ.md)<br>[docs/shell-completion.md](../../../../sources/regent-vcs__re_gent/docs/shell-completion.md)<br>[docs/images/log-command-example.png](../../../../sources/regent-vcs__re_gent/docs/images/log-command-example.png) |
| config | 2 | [go.mod](../../../../sources/regent-vcs__re_gent/go.mod)<br>[Makefile](../../../../sources/regent-vcs__re_gent/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 35 | [test/integration_test.go](../../../../sources/regent-vcs__re_gent/test/integration_test.go)<br>[test/phase1_acceptance_test.go](../../../../sources/regent-vcs__re_gent/test/phase1_acceptance_test.go)<br>[test/session_branching_test.go](../../../../sources/regent-vcs__re_gent/test/session_branching_test.go)<br>[scripts/test-release.sh](../../../../sources/regent-vcs__re_gent/scripts/test-release.sh)<br>[internal/treediff/treediff_test.go](../../../../sources/regent-vcs__re_gent/internal/treediff/treediff_test.go)<br>[internal/store/blame_test.go](../../../../sources/regent-vcs__re_gent/internal/store/blame_test.go) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/regent-vcs__re_gent/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/regent-vcs__re_gent/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/regent-vcs__re_gent/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `cmd/rgt/main.go`, `go.mod`, `Makefile`.
2. entrypoint를 따라 실행 흐름 확인: `cmd/rgt/main.go`.
3. agent/tool runtime 매핑: `internal/hook/hook_test.go`, `internal/hook/hook.go`, `internal/hook/payload.go`.
4. retrieval/memory/indexing 확인: `internal/index/index_test.go`, `internal/index/index.go`, `internal/index/messages_test.go`.
5. test/eval 파일로 동작 검증: `test/integration_test.go`, `test/phase1_acceptance_test.go`, `test/session_branching_test.go`.

## 기존 레포 인사이트

일반 AI 오픈소스 관점에서 Local clone structure analysis 132 files, 42 directories.. 핵심 구조 신호는 go.mod, Makefile, README.md, CLAUDE.md, LICENSE, tests이며, 심층 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 일반 AI 오픈소스 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
