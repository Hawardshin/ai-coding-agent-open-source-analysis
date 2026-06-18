# numtide/llm-agents.nix 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Nix packages for AI coding agents and development tools. Automatically updated daily.

## 요약

- 조사 단위: `sources/numtide__llm-agents.nix` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 458 files, 142 directories, depth score 99, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, packages/skills-installer/default.nix, packages/skills-installer/package.nix이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | numtide/llm-agents.nix |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Nix |
| Stars | 1436 |
| Forks | 158 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/numtide__llm-agents.nix](../../../../sources/numtide__llm-agents.nix) |
| 기존 보고서 | [reports/global-trending/repositories/numtide__llm-agents.nix.md](../../../global-trending/repositories/numtide__llm-agents.nix.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 458 / 142 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, checks, lib, overlays, packages, patches, scripts |
| 상위 확장자 | .nix: 276, .py: 68, .json: 57, (none): 24, .md: 8, .patch: 8, .yml: 8, .sh: 5, .lock: 2, .sbpl: 1, .toml: 1 |
| 소스 패턴 | monorepo/workspace, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/sandbox-runtime | packages workspace | 10 |
| packages/spec-kit | packages workspace | 4 |
| packages/code-review-graph | packages workspace | 3 |
| packages/agent-browser | packages workspace | 2 |
| packages/agent-deck | packages workspace | 2 |
| packages/codex-auth | packages workspace | 2 |
| packages/context-hub | packages workspace | 2 |
| packages/skills | packages workspace | 2 |
| packages/skills-installer | packages workspace | 2 |
| .github | ci surface | 1 |
| checks | top-level component | 1 |
| lib | source boundary | 1 |
| overlays | top-level component | 1 |
| packages | source boundary | 1 |
| packages/claude-code | packages workspace | 1 |
| packages/codex-acp | packages workspace | 1 |
| packages/forgecode | packages workspace | 1 |
| packages/mistral-vibe | packages workspace | 1 |


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
| agentRuntime | [AGENTS.md](../../../../sources/numtide__llm-agents.nix/AGENTS.md) | agentRuntime signal |
| agentRuntime | [packages/skills-installer/default.nix](../../../../sources/numtide__llm-agents.nix/packages/skills-installer/default.nix) | agentRuntime signal |
| agentRuntime | [packages/skills-installer/package.nix](../../../../sources/numtide__llm-agents.nix/packages/skills-installer/package.nix) | agentRuntime signal |
| agentRuntime | [packages/skills/default.nix](../../../../sources/numtide__llm-agents.nix/packages/skills/default.nix) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/numtide__llm-agents.nix/pyproject.toml) | config signal |
| ci | [.github/workflows/auto-merge.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/auto-merge.yml) | ci support |
| ci | [.github/workflows/check-maintainers.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/check-maintainers.yml) | ci support |
| eval | [packages/spec-kit/default.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/default.nix) | eval support |
| eval | [packages/spec-kit/package.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/package.nix) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 17 | [AGENTS.md](../../../../sources/numtide__llm-agents.nix/AGENTS.md)<br>[packages/skills-installer/default.nix](../../../../sources/numtide__llm-agents.nix/packages/skills-installer/default.nix)<br>[packages/skills-installer/package.nix](../../../../sources/numtide__llm-agents.nix/packages/skills-installer/package.nix)<br>[packages/skills/default.nix](../../../../sources/numtide__llm-agents.nix/packages/skills/default.nix)<br>[packages/skills/package.nix](../../../../sources/numtide__llm-agents.nix/packages/skills/package.nix)<br>[packages/sandbox-runtime/default.nix](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/default.nix)<br>[packages/sandbox-runtime/hashes.json](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/hashes.json)<br>[packages/sandbox-runtime/package-lock.json](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/package-lock.json) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 3 | [packages/code-review-graph/default.nix](../../../../sources/numtide__llm-agents.nix/packages/code-review-graph/default.nix)<br>[packages/code-review-graph/nix-update-args](../../../../sources/numtide__llm-agents.nix/packages/code-review-graph/nix-update-args)<br>[packages/code-review-graph/package.nix](../../../../sources/numtide__llm-agents.nix/packages/code-review-graph/package.nix) |
| spec | 2 | [packages/spec-kit/default.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/default.nix)<br>[packages/spec-kit/package.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/package.nix) |
| eval | 2 | [packages/spec-kit/default.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/default.nix)<br>[packages/spec-kit/package.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/package.nix) |
| security | 8 | [packages/sandbox-runtime/default.nix](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/default.nix)<br>[packages/sandbox-runtime/hashes.json](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/hashes.json)<br>[packages/sandbox-runtime/package-lock.json](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/package-lock.json)<br>[packages/sandbox-runtime/package.nix](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/package.nix)<br>[packages/sandbox-runtime/update.py](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/update.py)<br>[packages/nono/no-if-let-guard.patch](../../../../sources/numtide__llm-agents.nix/packages/nono/no-if-let-guard.patch)<br>[packages/codex-auth/default.nix](../../../../sources/numtide__llm-agents.nix/packages/codex-auth/default.nix)<br>[packages/codex-auth/package.nix](../../../../sources/numtide__llm-agents.nix/packages/codex-auth/package.nix) |
| ci | 10 | [.github/workflows/auto-merge.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/auto-merge.yml)<br>[.github/workflows/check-maintainers.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/check-maintainers.yml)<br>[.github/workflows/check-readme.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/check-readme.yml)<br>[.github/workflows/update-flake.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/update-flake.yml)<br>[.github/workflows/update.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/update.yml)<br>[.github/ci/check_maintainers.py](../../../../sources/numtide__llm-agents.nix/.github/ci/check_maintainers.py)<br>[.github/ci/create_pr.py](../../../../sources/numtide__llm-agents.nix/.github/ci/create_pr.py)<br>[.github/ci/discovery.py](../../../../sources/numtide__llm-agents.nix/.github/ci/discovery.py) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/numtide__llm-agents.nix/AGENTS.md) |
| docs | 6 | [README.md](../../../../sources/numtide__llm-agents.nix/README.md)<br>[patches/README.md](../../../../sources/numtide__llm-agents.nix/patches/README.md)<br>[packages/qmd/README.md](../../../../sources/numtide__llm-agents.nix/packages/qmd/README.md)<br>[packages/forgecode/README.md](../../../../sources/numtide__llm-agents.nix/packages/forgecode/README.md)<br>[packages/codex-acp/README.md](../../../../sources/numtide__llm-agents.nix/packages/codex-acp/README.md)<br>[packages/claude-code/README.md](../../../../sources/numtide__llm-agents.nix/packages/claude-code/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/numtide__llm-agents.nix/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2 | [packages/spec-kit/default.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/default.nix)<br>[packages/spec-kit/package.nix](../../../../sources/numtide__llm-agents.nix/packages/spec-kit/package.nix) |
| CI workflow | 10 | [.github/workflows/auto-merge.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/auto-merge.yml)<br>[.github/workflows/check-maintainers.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/check-maintainers.yml)<br>[.github/workflows/check-readme.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/check-readme.yml)<br>[.github/workflows/update-flake.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/update-flake.yml)<br>[.github/workflows/update.yml](../../../../sources/numtide__llm-agents.nix/.github/workflows/update.yml)<br>[.github/ci/check_maintainers.py](../../../../sources/numtide__llm-agents.nix/.github/ci/check_maintainers.py) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 8 | [packages/sandbox-runtime/default.nix](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/default.nix)<br>[packages/sandbox-runtime/hashes.json](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/hashes.json)<br>[packages/sandbox-runtime/package-lock.json](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/package-lock.json)<br>[packages/sandbox-runtime/package.nix](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/package.nix)<br>[packages/sandbox-runtime/update.py](../../../../sources/numtide__llm-agents.nix/packages/sandbox-runtime/update.py)<br>[packages/nono/no-if-let-guard.patch](../../../../sources/numtide__llm-agents.nix/packages/nono/no-if-let-guard.patch) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/numtide__llm-agents.nix/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `packages/skills-installer/default.nix`, `packages/skills-installer/package.nix`.
2. agent/tool runtime 매핑: `AGENTS.md`, `packages/skills-installer/default.nix`, `packages/skills-installer/package.nix`.
3. retrieval/memory/indexing 확인: `packages/code-review-graph/default.nix`, `packages/code-review-graph/nix-update-args`, `packages/code-review-graph/package.nix`.
4. test/eval 파일로 동작 검증: `packages/spec-kit/default.nix`, `packages/spec-kit/package.nix`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Nix packages for AI coding agents and development tools. Automatically updated daily.. 핵심 구조 신호는 Nix, pyproject.toml, README.md, AGENTS.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
