# yologdev/yoyo-evolve 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

A Truman Show of a self-evolving AI coding agent. It writes its own code. Growing up in public.

## 요약

- 조사 단위: `sources/yologdev__yoyo-evolve` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 174 files, 37 directories, depth score 97, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=src/agent_builder.rs, src/context.rs, src/hooks.rs이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | yologdev/yoyo-evolve |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 1824 |
| Forks | 122 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/yologdev__yoyo-evolve](../../../../sources/yologdev__yoyo-evolve) |
| 기존 보고서 | [reports/global-trending/repositories/yologdev__yoyo-evolve.md](../../../global-trending/repositories/yologdev__yoyo-evolve.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 174 / 37 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, .yoyo, assets, docs, journals, memory, scripts, skills, skills_attic, sponsors, src, tests |
| 상위 확장자 | .rs: 73, .md: 54, .sh: 12, .py: 9, .yml: 9, (none): 5, .json: 4, .toml: 4, .jsonl: 2, .png: 1, .ps1: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 28 |
| src | source boundary | 12 |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| journals | top-level component | 1 |
| memory | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| skills_attic | top-level component | 1 |
| sponsors | top-level component | 1 |


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
| agentRuntime | [src/agent_builder.rs](../../../../sources/yologdev__yoyo-evolve/src/agent_builder.rs) | agentRuntime signal |
| agentRuntime | [src/context.rs](../../../../sources/yologdev__yoyo-evolve/src/context.rs) | agentRuntime signal |
| agentRuntime | [src/hooks.rs](../../../../sources/yologdev__yoyo-evolve/src/hooks.rs) | agentRuntime signal |
| agentRuntime | [src/memory.rs](../../../../sources/yologdev__yoyo-evolve/src/memory.rs) | agentRuntime signal |
| entrypoints | [src/cli.rs](../../../../sources/yologdev__yoyo-evolve/src/cli.rs) | entrypoints signal |
| entrypoints | [src/main.rs](../../../../sources/yologdev__yoyo-evolve/src/main.rs) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/yologdev__yoyo-evolve/CLAUDE.md) | instruction signal |
| config | [Cargo.toml](../../../../sources/yologdev__yoyo-evolve/Cargo.toml) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/ci.yml) | ci support |
| ci | [.github/workflows/evolve.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/evolve.yml) | ci support |
| eval | [tests/integration.rs](../../../../sources/yologdev__yoyo-evolve/tests/integration.rs) | eval support |
| eval | [scripts/test_scan_commitments.py](../../../../sources/yologdev__yoyo-evolve/scripts/test_scan_commitments.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/cli.rs](../../../../sources/yologdev__yoyo-evolve/src/cli.rs)<br>[src/main.rs](../../../../sources/yologdev__yoyo-evolve/src/main.rs) |
| agentRuntime | 33 | [src/agent_builder.rs](../../../../sources/yologdev__yoyo-evolve/src/agent_builder.rs)<br>[src/context.rs](../../../../sources/yologdev__yoyo-evolve/src/context.rs)<br>[src/hooks.rs](../../../../sources/yologdev__yoyo-evolve/src/hooks.rs)<br>[src/memory.rs](../../../../sources/yologdev__yoyo-evolve/src/memory.rs)<br>[src/tool_wrappers.rs](../../../../sources/yologdev__yoyo-evolve/src/tool_wrappers.rs)<br>[src/tools.rs](../../../../sources/yologdev__yoyo-evolve/src/tools.rs)<br>[src/format/tools.rs](../../../../sources/yologdev__yoyo-evolve/src/format/tools.rs)<br>[skills_attic/.gitkeep](../../../../sources/yologdev__yoyo-evolve/skills_attic/.gitkeep) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 8 | [src/commands_memory.rs](../../../../sources/yologdev__yoyo-evolve/src/commands_memory.rs)<br>[src/memory.rs](../../../../sources/yologdev__yoyo-evolve/src/memory.rs)<br>[memory/active_learnings.md](../../../../sources/yologdev__yoyo-evolve/memory/active_learnings.md)<br>[memory/active_social_learnings.md](../../../../sources/yologdev__yoyo-evolve/memory/active_social_learnings.md)<br>[memory/learnings.jsonl](../../../../sources/yologdev__yoyo-evolve/memory/learnings.jsonl)<br>[memory/social_learnings.jsonl](../../../../sources/yologdev__yoyo-evolve/memory/social_learnings.jsonl)<br>[journals/llm-wiki.md](../../../../sources/yologdev__yoyo-evolve/journals/llm-wiki.md)<br>[.yoyo/memory.json](../../../../sources/yologdev__yoyo-evolve/.yoyo/memory.json) |
| spec | 1 | [docs/src/architecture.md](../../../../sources/yologdev__yoyo-evolve/docs/src/architecture.md) |
| eval | 2 | [tests/integration.rs](../../../../sources/yologdev__yoyo-evolve/tests/integration.rs)<br>[scripts/test_scan_commitments.py](../../../../sources/yologdev__yoyo-evolve/scripts/test_scan_commitments.py) |
| security | 0 | 명확하지 않음 |
| ci | 8 | [.github/workflows/ci.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/ci.yml)<br>[.github/workflows/evolve.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/evolve.yml)<br>[.github/workflows/pages.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/pages.yml)<br>[.github/workflows/release.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/release.yml)<br>[.github/workflows/skill-evolve.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/skill-evolve.yml)<br>[.github/workflows/social.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/social.yml)<br>[.github/workflows/sponsors-refresh.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/sponsors-refresh.yml)<br>[.github/workflows/synthesize.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/synthesize.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/yologdev__yoyo-evolve/CLAUDE.md) |
| docs | 25 | [README.md](../../../../sources/yologdev__yoyo-evolve/README.md)<br>[docs/book.toml](../../../../sources/yologdev__yoyo-evolve/docs/book.toml)<br>[docs/src/architecture.md](../../../../sources/yologdev__yoyo-evolve/docs/src/architecture.md)<br>[docs/src/introduction.md](../../../../sources/yologdev__yoyo-evolve/docs/src/introduction.md)<br>[docs/src/SUMMARY.md](../../../../sources/yologdev__yoyo-evolve/docs/src/SUMMARY.md)<br>[docs/src/usage/commands.md](../../../../sources/yologdev__yoyo-evolve/docs/src/usage/commands.md)<br>[docs/src/usage/multi-line.md](../../../../sources/yologdev__yoyo-evolve/docs/src/usage/multi-line.md)<br>[docs/src/usage/piped-mode.md](../../../../sources/yologdev__yoyo-evolve/docs/src/usage/piped-mode.md) |
| config | 1 | [Cargo.toml](../../../../sources/yologdev__yoyo-evolve/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2 | [tests/integration.rs](../../../../sources/yologdev__yoyo-evolve/tests/integration.rs)<br>[scripts/test_scan_commitments.py](../../../../sources/yologdev__yoyo-evolve/scripts/test_scan_commitments.py) |
| CI workflow | 8 | [.github/workflows/ci.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/ci.yml)<br>[.github/workflows/evolve.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/evolve.yml)<br>[.github/workflows/pages.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/pages.yml)<br>[.github/workflows/release.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/release.yml)<br>[.github/workflows/skill-evolve.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/skill-evolve.yml)<br>[.github/workflows/social.yml](../../../../sources/yologdev__yoyo-evolve/.github/workflows/social.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/yologdev__yoyo-evolve/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `src/agent_builder.rs`, `src/context.rs`, `src/hooks.rs`.
2. entrypoint를 따라 실행 흐름 확인: `src/cli.rs`, `src/main.rs`.
3. agent/tool runtime 매핑: `src/agent_builder.rs`, `src/context.rs`, `src/hooks.rs`.
4. retrieval/memory/indexing 확인: `src/commands_memory.rs`, `src/memory.rs`, `memory/active_learnings.md`.
5. test/eval 파일로 동작 검증: `tests/integration.rs`, `scripts/test_scan_commitments.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A Truman Show of a self evolving AI coding agent. It writes its own code. Growing up in public.. 핵심 구조 신호는 Rust, Cargo.toml, README.md, CLAUDE.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
