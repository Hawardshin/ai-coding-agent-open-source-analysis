# existential-birds/beagle 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Claude Code plugin marketplace: 145 framework-aware code-review skills plus AI-writing detection, doc and test-plan generation, architectural analysis, and git workflows — for Python, Go, Rust, Elixir, React, Remix, iOS/Swift, and AI frameworks. Installable for Codex and other agents too.

## 요약

- 조사 단위: `sources/existential-birds__beagle` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 541 files, 281 directories, depth score 99, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, plugins/beagle-testing/skills/run-test-plan/SKILL.md, plugins/beagle-testing/skills/gen-test-plan/SKILL.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | existential-birds/beagle |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Shell |
| Stars | 64 |
| Forks | 8 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/existential-birds__beagle](../../../../sources/existential-birds__beagle) |
| 기존 보고서 | [reports/global-trending/repositories/existential-birds__beagle.md](../../../global-trending/repositories/existential-birds__beagle.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 541 / 281 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude, .claude-plugin, .codex, .github, assets, docs, plugins, scripts |
| 상위 확장자 | .md: 518, .json: 13, .yml: 4, (none): 2, .csv: 1, .jpg: 1, .py: 1, .sh: 1 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 2 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |


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
| agentRuntime | [AGENTS.md](../../../../sources/existential-birds__beagle/AGENTS.md) | agentRuntime signal |
| agentRuntime | [plugins/beagle-testing/skills/run-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/run-test-plan/SKILL.md) | agentRuntime signal |
| agentRuntime | [plugins/beagle-testing/skills/gen-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/SKILL.md) | agentRuntime signal |
| agentRuntime | [plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md) | agentRuntime signal |
| entrypoints | [plugins/beagle-go/skills/wish-ssh-code-review/references/server.md](../../../../sources/existential-birds__beagle/plugins/beagle-go/skills/wish-ssh-code-review/references/server.md) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/existential-birds__beagle/CLAUDE.md) | instruction signal |
| instruction | [.codex/INSTALL.md](../../../../sources/existential-birds__beagle/.codex/INSTALL.md) | instruction signal |
| ci | [.github/workflows/daydream-command.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-command.yml) | ci support |
| ci | [.github/workflows/daydream-post.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-post.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [plugins/beagle-go/skills/wish-ssh-code-review/references/server.md](../../../../sources/existential-birds__beagle/plugins/beagle-go/skills/wish-ssh-code-review/references/server.md) |
| agentRuntime | 496 | [AGENTS.md](../../../../sources/existential-birds__beagle/AGENTS.md)<br>[plugins/beagle-testing/skills/run-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/run-test-plan/SKILL.md)<br>[plugins/beagle-testing/skills/gen-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/SKILL.md)<br>[plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md)<br>[plugins/beagle-testing/skills/gen-test-plan/references/test-case-generation.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/references/test-case-generation.md)<br>[plugins/beagle-rust/skills/tokio-async-code-review/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/tokio-async-code-review/SKILL.md)<br>[plugins/beagle-rust/skills/tokio-async-code-review/references/channels.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/tokio-async-code-review/references/channels.md)<br>[plugins/beagle-rust/skills/tokio-async-code-review/references/pinning-cancellation.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/tokio-async-code-review/references/pinning-cancellation.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [plugins/beagle-rust/skills/rust-code-review/references/memory-ordering.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/rust-code-review/references/memory-ordering.md)<br>[plugins/beagle-ios/skills/combine-code-review/references/memory.md](../../../../sources/existential-birds__beagle/plugins/beagle-ios/skills/combine-code-review/references/memory.md)<br>[plugins/beagle-elixir/skills/elixir-performance-review/references/memory.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/elixir-performance-review/references/memory.md) |
| spec | 22 | [plugins/beagle-rust/skills/rust-code-review/references/interface-design.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/rust-code-review/references/interface-design.md)<br>[plugins/beagle-rust/skills/rust-best-practices/references/api-design.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/rust-best-practices/references/api-design.md)<br>[plugins/beagle-react/skills/react-flow-architecture/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/skills/react-flow-architecture/SKILL.md)<br>[plugins/beagle-ios/skills/swiftdata-code-review/references/model-design.md](../../../../sources/existential-birds__beagle/plugins/beagle-ios/skills/swiftdata-code-review/references/model-design.md)<br>[plugins/beagle-ios/skills/ios-animation-design/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-ios/skills/ios-animation-design/SKILL.md)<br>[plugins/beagle-ios/skills/ios-animation-design/references/animation-patterns.md](../../../../sources/existential-birds__beagle/plugins/beagle-ios/skills/ios-animation-design/references/animation-patterns.md)<br>[plugins/beagle-ios/skills/ios-animation-design/references/timing-guidelines.md](../../../../sources/existential-birds__beagle/plugins/beagle-ios/skills/ios-animation-design/references/timing-guidelines.md)<br>[plugins/beagle-go/skills/bubbletea-code-review/references/elm-architecture.md](../../../../sources/existential-birds__beagle/plugins/beagle-go/skills/bubbletea-code-review/references/elm-architecture.md) |
| eval | 16 | [plugins/beagle-testing/skills/run-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/run-test-plan/SKILL.md)<br>[plugins/beagle-testing/skills/gen-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/SKILL.md)<br>[plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md)<br>[plugins/beagle-testing/skills/gen-test-plan/references/test-case-generation.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/references/test-case-generation.md)<br>[plugins/beagle-rust/skills/rust-testing-code-review/references/integration-tests.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/rust-testing-code-review/references/integration-tests.md)<br>[plugins/beagle-rust/skills/rust-testing-code-review/references/unit-tests.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/rust-testing-code-review/references/unit-tests.md)<br>[plugins/beagle-elixir/skills/exunit-code-review/references/integration-tests.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/exunit-code-review/references/integration-tests.md)<br>[plugins/beagle-elixir/skills/exunit-code-review/references/test-adapters.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/exunit-code-review/references/test-adapters.md) |
| security | 9 | [plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/auth-gates.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/auth-gates.md)<br>[plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/cookie-security.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/cookie-security.md)<br>[plugins/beagle-react/skills/remix-v2-meta-sessions/references/auth-csrf.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/skills/remix-v2-meta-sessions/references/auth-csrf.md)<br>[plugins/beagle-elixir/skills/liveview-code-review/references/security.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/liveview-code-review/references/security.md)<br>[plugins/beagle-elixir/skills/elixir-security-review/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/elixir-security-review/SKILL.md)<br>[plugins/beagle-elixir/skills/elixir-security-review/references/atom-exhaustion.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/elixir-security-review/references/atom-exhaustion.md)<br>[plugins/beagle-elixir/skills/elixir-security-review/references/code-injection.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/elixir-security-review/references/code-injection.md)<br>[plugins/beagle-elixir/skills/elixir-security-review/references/process-exposure.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/elixir-security-review/references/process-exposure.md) |
| ci | 4 | [.github/workflows/daydream-command.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-command.yml)<br>[.github/workflows/daydream-post.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-post.yml)<br>[.github/workflows/daydream-review.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-review.yml)<br>[.github/workflows/README.md](../../../../sources/existential-birds__beagle/.github/workflows/README.md) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [AGENTS.md](../../../../sources/existential-birds__beagle/AGENTS.md)<br>[CLAUDE.md](../../../../sources/existential-birds__beagle/CLAUDE.md)<br>[.codex/INSTALL.md](../../../../sources/existential-birds__beagle/.codex/INSTALL.md) |
| docs | 13 | [README.md](../../../../sources/existential-birds__beagle/README.md)<br>[plugins/beagle-testing/README.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/README.md)<br>[plugins/beagle-react/README.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/README.md)<br>[plugins/beagle-python/README.md](../../../../sources/existential-birds__beagle/plugins/beagle-python/README.md)<br>[plugins/beagle-ios/README.md](../../../../sources/existential-birds__beagle/plugins/beagle-ios/README.md)<br>[plugins/beagle-go/README.md](../../../../sources/existential-birds__beagle/plugins/beagle-go/README.md)<br>[plugins/beagle-elixir/README.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/README.md)<br>[plugins/beagle-docs/README.md](../../../../sources/existential-birds__beagle/plugins/beagle-docs/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 16 | [plugins/beagle-testing/skills/run-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/run-test-plan/SKILL.md)<br>[plugins/beagle-testing/skills/gen-test-plan/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/SKILL.md)<br>[plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md)<br>[plugins/beagle-testing/skills/gen-test-plan/references/test-case-generation.md](../../../../sources/existential-birds__beagle/plugins/beagle-testing/skills/gen-test-plan/references/test-case-generation.md)<br>[plugins/beagle-rust/skills/rust-testing-code-review/references/integration-tests.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/rust-testing-code-review/references/integration-tests.md)<br>[plugins/beagle-rust/skills/rust-testing-code-review/references/unit-tests.md](../../../../sources/existential-birds__beagle/plugins/beagle-rust/skills/rust-testing-code-review/references/unit-tests.md) |
| CI workflow | 4 | [.github/workflows/daydream-command.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-command.yml)<br>[.github/workflows/daydream-post.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-post.yml)<br>[.github/workflows/daydream-review.yml](../../../../sources/existential-birds__beagle/.github/workflows/daydream-review.yml)<br>[.github/workflows/README.md](../../../../sources/existential-birds__beagle/.github/workflows/README.md) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 9 | [plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/auth-gates.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/auth-gates.md)<br>[plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/cookie-security.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/skills/remix-v2-meta-sessions-review/references/cookie-security.md)<br>[plugins/beagle-react/skills/remix-v2-meta-sessions/references/auth-csrf.md](../../../../sources/existential-birds__beagle/plugins/beagle-react/skills/remix-v2-meta-sessions/references/auth-csrf.md)<br>[plugins/beagle-elixir/skills/liveview-code-review/references/security.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/liveview-code-review/references/security.md)<br>[plugins/beagle-elixir/skills/elixir-security-review/SKILL.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/elixir-security-review/SKILL.md)<br>[plugins/beagle-elixir/skills/elixir-security-review/references/atom-exhaustion.md](../../../../sources/existential-birds__beagle/plugins/beagle-elixir/skills/elixir-security-review/references/atom-exhaustion.md) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/existential-birds__beagle/AGENTS.md)<br>[CLAUDE.md](../../../../sources/existential-birds__beagle/CLAUDE.md)<br>[.codex/INSTALL.md](../../../../sources/existential-birds__beagle/.codex/INSTALL.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `plugins/beagle-testing/skills/run-test-plan/SKILL.md`, `plugins/beagle-testing/skills/gen-test-plan/SKILL.md`.
2. entrypoint를 따라 실행 흐름 확인: `plugins/beagle-go/skills/wish-ssh-code-review/references/server.md`.
3. agent/tool runtime 매핑: `AGENTS.md`, `plugins/beagle-testing/skills/run-test-plan/SKILL.md`, `plugins/beagle-testing/skills/gen-test-plan/SKILL.md`.
4. retrieval/memory/indexing 확인: `plugins/beagle-rust/skills/rust-code-review/references/memory-ordering.md`, `plugins/beagle-ios/skills/combine-code-review/references/memory.md`, `plugins/beagle-elixir/skills/elixir-performance-review/references/memory.md`.
5. test/eval 파일로 동작 검증: `plugins/beagle-testing/skills/run-test-plan/SKILL.md`, `plugins/beagle-testing/skills/gen-test-plan/SKILL.md`, `plugins/beagle-testing/skills/gen-test-plan/references/stack-discovery.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Claude Code plugin marketplace 145 framework aware code review skills plus AI writing detection, doc and test plan gener. 핵심 구조 신호는 Shell, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
