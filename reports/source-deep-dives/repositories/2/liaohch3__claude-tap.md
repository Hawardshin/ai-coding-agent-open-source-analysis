# liaohch3/claude-tap 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Intercept and inspect Coding Agent API traffic from Claude Code, Codex CLI, Gemini CLI, Cursor CLI, OpenCode, Kimi/Kimi Code, Pi, and Hermes in a local trace viewer.

## 요약

- 조사 단위: `sources/liaohch3__claude-tap` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 522 files, 111 directories, depth score 112, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

코딩 에이전트/IDE 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=claude_tap/__main__.py이고, 의존성 단서는 claude, codex, next, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 코딩 에이전트 참고 구현이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | liaohch3/claude-tap |
| 주제 | 코딩 에이전트/IDE / 코딩 에이전트/IDE |
| Region | global |
| Language | Python |
| Stars | 1824 |
| Forks | 193 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/liaohch3__claude-tap](../../../../sources/liaohch3__claude-tap) |
| 기존 보고서 | [reports/global-trending/repositories/liaohch3__claude-tap.md](../../../global-trending/repositories/liaohch3__claude-tap.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 522 / 111 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .agents, .claude, .githooks, .github, claude_tap, docs, scripts, tests |
| 상위 확장자 | .png: 259, .md: 101, .py: 100, .js: 12, .json: 8, .yml: 7, .html: 6, (none): 5, .sh: 4, .gif: 3, .jsonl: 3, .mp4: 3 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 43 |
| docs | documentation surface | 38 |
| .github | ci surface | 1 |
| claude_tap | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | claude-tap | claude-tap |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
| agentProtocols | codex |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | next |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| entrypoints | [claude_tap/__main__.py](../../../../sources/liaohch3__claude-tap/claude_tap/__main__.py) | entrypoints signal |
| agentRuntime | [AGENTS.md](../../../../sources/liaohch3__claude-tap/AGENTS.md) | agentRuntime signal |
| agentRuntime | [docs/guides/agent-trace-viewer.html](../../../../sources/liaohch3__claude-tap/docs/guides/agent-trace-viewer.html) | agentRuntime signal |
| agentRuntime | [docs/guides/agent-trace-viewer.md](../../../../sources/liaohch3__claude-tap/docs/guides/agent-trace-viewer.md) | agentRuntime signal |
| agentRuntime | [docs/guides/agent-trace-viewer.zh.html](../../../../sources/liaohch3__claude-tap/docs/guides/agent-trace-viewer.zh.html) | agentRuntime signal |
| instruction | [.claude/CLAUDE.md](../../../../sources/liaohch3__claude-tap/.claude/CLAUDE.md) | instruction signal |
| security | [SECURITY.md](../../../../sources/liaohch3__claude-tap/SECURITY.md) | security signal |
| security | [tests/test_check_pr_policy.py](../../../../sources/liaohch3__claude-tap/tests/test_check_pr_policy.py) | security signal |
| security | [scripts/check_pr_policy.py](../../../../sources/liaohch3__claude-tap/scripts/check_pr_policy.py) | security signal |
| security | [.agents/evidence/pr/pi-cli-support/pi-openai-oauth-first-final-top.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/pi-cli-support/pi-openai-oauth-first-final-top.png) | security signal |
| eval | [tests/__init__.py](../../../../sources/liaohch3__claude-tap/tests/__init__.py) | eval signal |
| eval | [tests/conftest.py](../../../../sources/liaohch3__claude-tap/tests/conftest.py) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [claude_tap/__main__.py](../../../../sources/liaohch3__claude-tap/claude_tap/__main__.py) |
| agentRuntime | 21 | [AGENTS.md](../../../../sources/liaohch3__claude-tap/AGENTS.md)<br>[docs/guides/agent-trace-viewer.html](../../../../sources/liaohch3__claude-tap/docs/guides/agent-trace-viewer.html)<br>[docs/guides/agent-trace-viewer.md](../../../../sources/liaohch3__claude-tap/docs/guides/agent-trace-viewer.md)<br>[docs/guides/agent-trace-viewer.zh.html](../../../../sources/liaohch3__claude-tap/docs/guides/agent-trace-viewer.zh.html)<br>[docs/guides/agent-trace-viewer.zh.md](../../../../sources/liaohch3__claude-tap/docs/guides/agent-trace-viewer.zh.md)<br>[.agents/skills/translate-i18n/SKILL.md](../../../../sources/liaohch3__claude-tap/.agents/skills/translate-i18n/SKILL.md)<br>[.agents/skills/screenshot-validation/SKILL.md](../../../../sources/liaohch3__claude-tap/.agents/skills/screenshot-validation/SKILL.md)<br>[.agents/skills/real-e2e-test/SKILL.md](../../../../sources/liaohch3__claude-tap/.agents/skills/real-e2e-test/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 7 | [docs/index.html](../../../../sources/liaohch3__claude-tap/docs/index.html)<br>[docs/index.zh.html](../../../../sources/liaohch3__claude-tap/docs/index.zh.html)<br>[.agents/evidence/pr/246-iframe-embed/default-desktop.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/246-iframe-embed/default-desktop.png)<br>[.agents/evidence/pr/246-iframe-embed/embed-dark-controls-visible.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/246-iframe-embed/embed-dark-controls-visible.png)<br>[.agents/evidence/pr/246-iframe-embed/embed-light-compact-hidden-chrome.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/246-iframe-embed/embed-light-compact-hidden-chrome.png)<br>[.agents/evidence/pr/246-iframe-embed/embed-mobile-compact.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/246-iframe-embed/embed-mobile-compact.png)<br>[.agents/evidence/images/viewer-iframe-embed-query.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/images/viewer-iframe-embed-query.png) |
| spec | 4 | [scripts/gen_architecture.py](../../../../sources/liaohch3__claude-tap/scripts/gen_architecture.py)<br>[docs/architecture.png](../../../../sources/liaohch3__claude-tap/docs/architecture.png)<br>[docs/architecture.svg](../../../../sources/liaohch3__claude-tap/docs/architecture.svg)<br>[.agents/docs/architecture/manifest.yaml](../../../../sources/liaohch3__claude-tap/.agents/docs/architecture/manifest.yaml) |
| eval | 132 | [tests/__init__.py](../../../../sources/liaohch3__claude-tap/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/liaohch3__claude-tap/tests/conftest.py)<br>[tests/test_auto_release_workflow.py](../../../../sources/liaohch3__claude-tap/tests/test_auto_release_workflow.py)<br>[tests/test_bedrock_dashboard.py](../../../../sources/liaohch3__claude-tap/tests/test_bedrock_dashboard.py)<br>[tests/test_bedrock_proxy.py](../../../../sources/liaohch3__claude-tap/tests/test_bedrock_proxy.py)<br>[tests/test_bedrock_support.py](../../../../sources/liaohch3__claude-tap/tests/test_bedrock_support.py)<br>[tests/test_bedrock_viewer.py](../../../../sources/liaohch3__claude-tap/tests/test_bedrock_viewer.py)<br>[tests/test_chat_completions_sse.py](../../../../sources/liaohch3__claude-tap/tests/test_chat_completions_sse.py) |
| security | 12 | [SECURITY.md](../../../../sources/liaohch3__claude-tap/SECURITY.md)<br>[tests/test_check_pr_policy.py](../../../../sources/liaohch3__claude-tap/tests/test_check_pr_policy.py)<br>[scripts/check_pr_policy.py](../../../../sources/liaohch3__claude-tap/scripts/check_pr_policy.py)<br>[.agents/evidence/pr/pi-cli-support/pi-openai-oauth-first-final-top.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/pi-cli-support/pi-openai-oauth-first-final-top.png)<br>[.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-events-scroll.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-events-scroll.png)<br>[.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-final-top.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-final-top.png)<br>[.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-response-scroll.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-response-scroll.png)<br>[.agents/evidence/pr/opencode-real-quality/opencode-openai-oauth-01-system-tools-cache.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/opencode-real-quality/opencode-openai-oauth-01-system-tools-cache.png) |
| ci | 4 | [.github/workflows/auto-release.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/auto-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/ci.yml)<br>[.github/workflows/legibility.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/legibility.yml)<br>[.github/workflows/publish.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/liaohch3__claude-tap/AGENTS.md)<br>[.claude/CLAUDE.md](../../../../sources/liaohch3__claude-tap/.claude/CLAUDE.md) |
| docs | 91 | [README_zh.md](../../../../sources/liaohch3__claude-tap/README_zh.md)<br>[README.md](../../../../sources/liaohch3__claude-tap/README.md)<br>[tests/e2e/README.md](../../../../sources/liaohch3__claude-tap/tests/e2e/README.md)<br>[scripts/README.md](../../../../sources/liaohch3__claude-tap/scripts/README.md)<br>[docs/architecture.png](../../../../sources/liaohch3__claude-tap/docs/architecture.png)<br>[docs/architecture.svg](../../../../sources/liaohch3__claude-tap/docs/architecture.svg)<br>[docs/billing-header-diff.png](../../../../sources/liaohch3__claude-tap/docs/billing-header-diff.png)<br>[docs/demo_zh.gif](../../../../sources/liaohch3__claude-tap/docs/demo_zh.gif) |
| config | 2 | [pyproject.toml](../../../../sources/liaohch3__claude-tap/pyproject.toml)<br>[uv.lock](../../../../sources/liaohch3__claude-tap/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 132 | [tests/__init__.py](../../../../sources/liaohch3__claude-tap/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/liaohch3__claude-tap/tests/conftest.py)<br>[tests/test_auto_release_workflow.py](../../../../sources/liaohch3__claude-tap/tests/test_auto_release_workflow.py)<br>[tests/test_bedrock_dashboard.py](../../../../sources/liaohch3__claude-tap/tests/test_bedrock_dashboard.py)<br>[tests/test_bedrock_proxy.py](../../../../sources/liaohch3__claude-tap/tests/test_bedrock_proxy.py)<br>[tests/test_bedrock_support.py](../../../../sources/liaohch3__claude-tap/tests/test_bedrock_support.py) |
| CI workflow | 4 | [.github/workflows/auto-release.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/auto-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/ci.yml)<br>[.github/workflows/legibility.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/legibility.yml)<br>[.github/workflows/publish.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 12 | [SECURITY.md](../../../../sources/liaohch3__claude-tap/SECURITY.md)<br>[tests/test_check_pr_policy.py](../../../../sources/liaohch3__claude-tap/tests/test_check_pr_policy.py)<br>[scripts/check_pr_policy.py](../../../../sources/liaohch3__claude-tap/scripts/check_pr_policy.py)<br>[.agents/evidence/pr/pi-cli-support/pi-openai-oauth-first-final-top.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/pi-cli-support/pi-openai-oauth-first-final-top.png)<br>[.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-events-scroll.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-events-scroll.png)<br>[.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-final-top.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-final-top.png) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/liaohch3__claude-tap/AGENTS.md)<br>[.claude/CLAUDE.md](../../../../sources/liaohch3__claude-tap/.claude/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `claude_tap/__main__.py`, `AGENTS.md`, `docs/guides/agent-trace-viewer.html`.
2. entrypoint를 따라 실행 흐름 확인: `claude_tap/__main__.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `docs/guides/agent-trace-viewer.html`, `docs/guides/agent-trace-viewer.md`.
4. retrieval/memory/indexing 확인: `docs/index.html`, `docs/index.zh.html`, `.agents/evidence/pr/246-iframe-embed/default-desktop.png`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_auto_release_workflow.py`.

## 기존 레포 인사이트

코딩 에이전트/IDE 관점에서 Intercept and inspect Coding Agent API traffic from Claude Code, Codex CLI, Gemini CLI, Cursor CLI, OpenCode, Kimi/Kimi . 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, next이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 코딩 에이전트/IDE 레포입니다. 활용 관점은 코딩 에이전트 참고 구현이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
