# anthropics/claude-code 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.

## 요약

- 조사 단위: `sources/anthropics__claude-code` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 202 files, 98 directories, depth score 94, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 mcp=plugins/plugin-dev/skills/mcp-integration/SKILL.md, plugins/plugin-dev/skills/mcp-integration/references/authentication.md, plugins/plugin-dev/skills/mcp-integration/references/server-types.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | anthropics/claude-code |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 133037 |
| Forks | 21517 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/anthropics__claude-code](../../../../sources/anthropics__claude-code) |
| 기존 보고서 | [reports/global-trending/repositories/anthropics__claude-code.md](../../../global-trending/repositories/anthropics__claude-code.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 202 / 98 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude, .claude-plugin, .devcontainer, .github, examples, plugins, Script, scripts |
| 상위 확장자 | .md: 102, .json: 26, .py: 21, .sh: 19, .yml: 17, .ts: 5, (none): 4, .ps1: 2, .adml: 1, .admx: 1, .gif: 1, .mobileconfig: 1 |
| 소스 패턴 | agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| examples/settings | examples workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| examples | top-level component | 1 |
| examples/mdm | examples workspace | 1 |
| plugins | top-level component | 1 |
| Script | top-level component | 1 |
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
| mcp | [plugins/plugin-dev/skills/mcp-integration/SKILL.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/SKILL.md) | mcp signal |
| mcp | [plugins/plugin-dev/skills/mcp-integration/references/authentication.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/references/authentication.md) | mcp signal |
| mcp | [plugins/plugin-dev/skills/mcp-integration/references/server-types.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/references/server-types.md) | mcp signal |
| mcp | [plugins/plugin-dev/skills/mcp-integration/references/tool-usage.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/references/tool-usage.md) | mcp signal |
| agentRuntime | [plugins/security-guidance/hooks/_base.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/_base.py) | agentRuntime signal |
| agentRuntime | [plugins/security-guidance/hooks/diffstate.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/diffstate.py) | agentRuntime signal |
| agentRuntime | [plugins/security-guidance/hooks/ensure_agent_sdk.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/ensure_agent_sdk.py) | agentRuntime signal |
| agentRuntime | [plugins/security-guidance/hooks/extensibility.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/extensibility.py) | agentRuntime signal |
| ci | [.github/workflows/auto-close-duplicates.yml](../../../../sources/anthropics__claude-code/.github/workflows/auto-close-duplicates.yml) | ci support |
| ci | [.github/workflows/backfill-duplicate-comments.yml](../../../../sources/anthropics__claude-code/.github/workflows/backfill-duplicate-comments.yml) | ci support |
| container | [.devcontainer/Dockerfile](../../../../sources/anthropics__claude-code/.devcontainer/Dockerfile) | container support |
| eval | [plugins/pr-review-toolkit/agents/pr-test-analyzer.md](../../../../sources/anthropics__claude-code/plugins/pr-review-toolkit/agents/pr-test-analyzer.md) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 101 | [plugins/security-guidance/hooks/_base.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/_base.py)<br>[plugins/security-guidance/hooks/diffstate.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/diffstate.py)<br>[plugins/security-guidance/hooks/ensure_agent_sdk.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/ensure_agent_sdk.py)<br>[plugins/security-guidance/hooks/extensibility.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/extensibility.py)<br>[plugins/security-guidance/hooks/gitutil.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/gitutil.py)<br>[plugins/security-guidance/hooks/hooks.json](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/hooks.json)<br>[plugins/security-guidance/hooks/llm.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/llm.py)<br>[plugins/security-guidance/hooks/patterns.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/patterns.py) |
| mcp | 7 | [plugins/plugin-dev/skills/mcp-integration/SKILL.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/SKILL.md)<br>[plugins/plugin-dev/skills/mcp-integration/references/authentication.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/references/authentication.md)<br>[plugins/plugin-dev/skills/mcp-integration/references/server-types.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/references/server-types.md)<br>[plugins/plugin-dev/skills/mcp-integration/references/tool-usage.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/references/tool-usage.md)<br>[plugins/plugin-dev/skills/mcp-integration/examples/http-server.json](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/examples/http-server.json)<br>[plugins/plugin-dev/skills/mcp-integration/examples/sse-server.json](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/examples/sse-server.json)<br>[plugins/plugin-dev/skills/mcp-integration/examples/stdio-server.json](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/mcp-integration/examples/stdio-server.json) |
| retrieval | 0 | 명확하지 않음 |
| spec | 5 | [plugins/pr-review-toolkit/agents/type-design-analyzer.md](../../../../sources/anthropics__claude-code/plugins/pr-review-toolkit/agents/type-design-analyzer.md)<br>[plugins/plugin-dev/skills/agent-development/references/system-prompt-design.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/agent-development/references/system-prompt-design.md)<br>[plugins/frontend-design/README.md](../../../../sources/anthropics__claude-code/plugins/frontend-design/README.md)<br>[plugins/frontend-design/skills/frontend-design/SKILL.md](../../../../sources/anthropics__claude-code/plugins/frontend-design/skills/frontend-design/SKILL.md)<br>[plugins/frontend-design/.claude-plugin/plugin.json](../../../../sources/anthropics__claude-code/plugins/frontend-design/.claude-plugin/plugin.json) |
| eval | 3 | [plugins/pr-review-toolkit/agents/pr-test-analyzer.md](../../../../sources/anthropics__claude-code/plugins/pr-review-toolkit/agents/pr-test-analyzer.md)<br>[plugins/plugin-dev/skills/hook-development/scripts/test-hook.sh](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/hook-development/scripts/test-hook.sh)<br>[plugins/hookify/examples/require-tests-stop.local.md](../../../../sources/anthropics__claude-code/plugins/hookify/examples/require-tests-stop.local.md) |
| security | 16 | [SECURITY.md](../../../../sources/anthropics__claude-code/SECURITY.md)<br>[plugins/security-guidance/README.md](../../../../sources/anthropics__claude-code/plugins/security-guidance/README.md)<br>[plugins/security-guidance/hooks/_base.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/_base.py)<br>[plugins/security-guidance/hooks/diffstate.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/diffstate.py)<br>[plugins/security-guidance/hooks/ensure_agent_sdk.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/ensure_agent_sdk.py)<br>[plugins/security-guidance/hooks/extensibility.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/extensibility.py)<br>[plugins/security-guidance/hooks/gitutil.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/gitutil.py)<br>[plugins/security-guidance/hooks/hooks.json](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/hooks.json) |
| ci | 12 | [.github/workflows/auto-close-duplicates.yml](../../../../sources/anthropics__claude-code/.github/workflows/auto-close-duplicates.yml)<br>[.github/workflows/backfill-duplicate-comments.yml](../../../../sources/anthropics__claude-code/.github/workflows/backfill-duplicate-comments.yml)<br>[.github/workflows/claude-dedupe-issues.yml](../../../../sources/anthropics__claude-code/.github/workflows/claude-dedupe-issues.yml)<br>[.github/workflows/claude-issue-triage.yml](../../../../sources/anthropics__claude-code/.github/workflows/claude-issue-triage.yml)<br>[.github/workflows/claude.yml](../../../../sources/anthropics__claude-code/.github/workflows/claude.yml)<br>[.github/workflows/issue-lifecycle-comment.yml](../../../../sources/anthropics__claude-code/.github/workflows/issue-lifecycle-comment.yml)<br>[.github/workflows/issue-opened-dispatch.yml](../../../../sources/anthropics__claude-code/.github/workflows/issue-opened-dispatch.yml)<br>[.github/workflows/lock-closed-issues.yml](../../../../sources/anthropics__claude-code/.github/workflows/lock-closed-issues.yml) |
| container | 1 | [.devcontainer/Dockerfile](../../../../sources/anthropics__claude-code/.devcontainer/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 20 | [README.md](../../../../sources/anthropics__claude-code/README.md)<br>[plugins/README.md](../../../../sources/anthropics__claude-code/plugins/README.md)<br>[plugins/security-guidance/README.md](../../../../sources/anthropics__claude-code/plugins/security-guidance/README.md)<br>[plugins/ralph-wiggum/README.md](../../../../sources/anthropics__claude-code/plugins/ralph-wiggum/README.md)<br>[plugins/pr-review-toolkit/README.md](../../../../sources/anthropics__claude-code/plugins/pr-review-toolkit/README.md)<br>[plugins/plugin-dev/README.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/README.md)<br>[plugins/plugin-dev/skills/plugin-structure/README.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/plugin-structure/README.md)<br>[plugins/plugin-dev/skills/hook-development/scripts/README.md](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/hook-development/scripts/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3 | [plugins/pr-review-toolkit/agents/pr-test-analyzer.md](../../../../sources/anthropics__claude-code/plugins/pr-review-toolkit/agents/pr-test-analyzer.md)<br>[plugins/plugin-dev/skills/hook-development/scripts/test-hook.sh](../../../../sources/anthropics__claude-code/plugins/plugin-dev/skills/hook-development/scripts/test-hook.sh)<br>[plugins/hookify/examples/require-tests-stop.local.md](../../../../sources/anthropics__claude-code/plugins/hookify/examples/require-tests-stop.local.md) |
| CI workflow | 12 | [.github/workflows/auto-close-duplicates.yml](../../../../sources/anthropics__claude-code/.github/workflows/auto-close-duplicates.yml)<br>[.github/workflows/backfill-duplicate-comments.yml](../../../../sources/anthropics__claude-code/.github/workflows/backfill-duplicate-comments.yml)<br>[.github/workflows/claude-dedupe-issues.yml](../../../../sources/anthropics__claude-code/.github/workflows/claude-dedupe-issues.yml)<br>[.github/workflows/claude-issue-triage.yml](../../../../sources/anthropics__claude-code/.github/workflows/claude-issue-triage.yml)<br>[.github/workflows/claude.yml](../../../../sources/anthropics__claude-code/.github/workflows/claude.yml)<br>[.github/workflows/issue-lifecycle-comment.yml](../../../../sources/anthropics__claude-code/.github/workflows/issue-lifecycle-comment.yml) |
| 컨테이너/배포 | 1 | [.devcontainer/Dockerfile](../../../../sources/anthropics__claude-code/.devcontainer/Dockerfile) |
| 보안/정책 | 16 | [SECURITY.md](../../../../sources/anthropics__claude-code/SECURITY.md)<br>[plugins/security-guidance/README.md](../../../../sources/anthropics__claude-code/plugins/security-guidance/README.md)<br>[plugins/security-guidance/hooks/_base.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/_base.py)<br>[plugins/security-guidance/hooks/diffstate.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/diffstate.py)<br>[plugins/security-guidance/hooks/ensure_agent_sdk.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/ensure_agent_sdk.py)<br>[plugins/security-guidance/hooks/extensibility.py](../../../../sources/anthropics__claude-code/plugins/security-guidance/hooks/extensibility.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `plugins/plugin-dev/skills/mcp-integration/SKILL.md`, `plugins/plugin-dev/skills/mcp-integration/references/authentication.md`, `plugins/plugin-dev/skills/mcp-integration/references/server-types.md`.
2. agent/tool runtime 매핑: `plugins/security-guidance/hooks/_base.py`, `plugins/security-guidance/hooks/diffstate.py`, `plugins/security-guidance/hooks/ensure_agent_sdk.py`.
3. test/eval 파일로 동작 검증: `plugins/pr-review-toolkit/agents/pr-test-analyzer.md`, `plugins/plugin-dev/skills/hook-development/scripts/test-hook.sh`, `plugins/hookify/examples/require-tests-stop.local.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster . 핵심 구조 신호는 Python, README.md, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
