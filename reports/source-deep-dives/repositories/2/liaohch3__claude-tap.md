# liaohch3/claude-tap Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Intercept and inspect Coding Agent API traffic from Claude Code, Codex CLI, Gemini CLI, Cursor CLI, OpenCode, Kimi/Kimi Code, Pi, and Hermes in a local trace viewer.

## 요약

- 조사 단위: `sources/liaohch3__claude-tap` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 522 files, 111 directories, depth score 118, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

코딩 에이전트/IDE 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=claude_tap/__main__.py이고, 의존성 단서는 claude, codex, next, playwright, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 coding-agent reference implementation이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | liaohch3/claude-tap |
| Topic | Coding Agent and IDE / 코딩 에이전트/IDE |
| Region | global |
| Language | Python |
| Stars | 1824 |
| Forks | 193 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/liaohch3__claude-tap](../../../../sources/liaohch3__claude-tap) |
| Existing report | [reports/global-trending/repositories/liaohch3__claude-tap.md](../../../global-trending/repositories/liaohch3__claude-tap.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 522 / 111 |
| Max observed depth | 6 |
| Top directories | .agents, .claude, .githooks, .github, claude_tap, docs, scripts, tests |
| Top extensions | .png: 259, .md: 101, .py: 100, .js: 12, .json: 8, .yml: 7, .html: 6, (none): 5, .sh: 4, .gif: 3, .jsonl: 3, .mp4: 3 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| tests | validation surface | 43 |
| docs | documentation surface | 38 |
| .github | ci surface | 1 |
| claude_tap | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | pyproject.toml | claude-tap | claude-tap |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | claude |
| agentProtocols | codex |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next |
| developerSurface | none |
| observability | none |
| browserAutomation | playwright |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [claude_tap/__main__.py](../../../../sources/liaohch3__claude-tap/claude_tap/__main__.py) |
| agentRuntime | 21 | [AGENTS.md](../../../../sources/liaohch3__claude-tap/AGENTS.md)<br>[docs/guides/agent-trace-viewer.html](../../../../sources/liaohch3__claude-tap/docs/guides/agent-trace-viewer.html)<br>[docs/guides/agent-trace-viewer.md](../../../../sources/liaohch3__claude-tap/docs/guides/agent-trace-viewer.md)<br>[docs/guides/agent-trace-viewer.zh.html](../../../../sources/liaohch3__claude-tap/docs/guides/agent-trace-viewer.zh.html)<br>[docs/guides/agent-trace-viewer.zh.md](../../../../sources/liaohch3__claude-tap/docs/guides/agent-trace-viewer.zh.md)<br>[.agents/skills/translate-i18n/SKILL.md](../../../../sources/liaohch3__claude-tap/.agents/skills/translate-i18n/SKILL.md)<br>[.agents/skills/screenshot-validation/SKILL.md](../../../../sources/liaohch3__claude-tap/.agents/skills/screenshot-validation/SKILL.md)<br>[.agents/skills/real-e2e-test/SKILL.md](../../../../sources/liaohch3__claude-tap/.agents/skills/real-e2e-test/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 7 | [docs/index.html](../../../../sources/liaohch3__claude-tap/docs/index.html)<br>[docs/index.zh.html](../../../../sources/liaohch3__claude-tap/docs/index.zh.html)<br>[.agents/evidence/pr/246-iframe-embed/default-desktop.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/246-iframe-embed/default-desktop.png)<br>[.agents/evidence/pr/246-iframe-embed/embed-dark-controls-visible.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/246-iframe-embed/embed-dark-controls-visible.png)<br>[.agents/evidence/pr/246-iframe-embed/embed-light-compact-hidden-chrome.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/246-iframe-embed/embed-light-compact-hidden-chrome.png)<br>[.agents/evidence/pr/246-iframe-embed/embed-mobile-compact.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/246-iframe-embed/embed-mobile-compact.png)<br>[.agents/evidence/images/viewer-iframe-embed-query.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/images/viewer-iframe-embed-query.png) |
| spec | 4 | [scripts/gen_architecture.py](../../../../sources/liaohch3__claude-tap/scripts/gen_architecture.py)<br>[docs/architecture.png](../../../../sources/liaohch3__claude-tap/docs/architecture.png)<br>[docs/architecture.svg](../../../../sources/liaohch3__claude-tap/docs/architecture.svg)<br>[.agents/docs/architecture/manifest.yaml](../../../../sources/liaohch3__claude-tap/.agents/docs/architecture/manifest.yaml) |
| eval | 132 | [tests/__init__.py](../../../../sources/liaohch3__claude-tap/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/liaohch3__claude-tap/tests/conftest.py)<br>[tests/test_auto_release_workflow.py](../../../../sources/liaohch3__claude-tap/tests/test_auto_release_workflow.py)<br>[tests/test_bedrock_dashboard.py](../../../../sources/liaohch3__claude-tap/tests/test_bedrock_dashboard.py)<br>[tests/test_bedrock_proxy.py](../../../../sources/liaohch3__claude-tap/tests/test_bedrock_proxy.py)<br>[tests/test_bedrock_support.py](../../../../sources/liaohch3__claude-tap/tests/test_bedrock_support.py)<br>[tests/test_bedrock_viewer.py](../../../../sources/liaohch3__claude-tap/tests/test_bedrock_viewer.py)<br>[tests/test_chat_completions_sse.py](../../../../sources/liaohch3__claude-tap/tests/test_chat_completions_sse.py) |
| security | 12 | [SECURITY.md](../../../../sources/liaohch3__claude-tap/SECURITY.md)<br>[tests/test_check_pr_policy.py](../../../../sources/liaohch3__claude-tap/tests/test_check_pr_policy.py)<br>[scripts/check_pr_policy.py](../../../../sources/liaohch3__claude-tap/scripts/check_pr_policy.py)<br>[.agents/evidence/pr/pi-cli-support/pi-openai-oauth-first-final-top.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/pi-cli-support/pi-openai-oauth-first-final-top.png)<br>[.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-events-scroll.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-events-scroll.png)<br>[.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-final-top.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-final-top.png)<br>[.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-response-scroll.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-response-scroll.png)<br>[.agents/evidence/pr/opencode-real-quality/opencode-openai-oauth-01-system-tools-cache.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/opencode-real-quality/opencode-openai-oauth-01-system-tools-cache.png) |
| ci | 4 | [.github/workflows/auto-release.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/auto-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/ci.yml)<br>[.github/workflows/legibility.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/legibility.yml)<br>[.github/workflows/publish.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/liaohch3__claude-tap/AGENTS.md)<br>[.claude/CLAUDE.md](../../../../sources/liaohch3__claude-tap/.claude/CLAUDE.md) |
| docs | 91 | [README_zh.md](../../../../sources/liaohch3__claude-tap/README_zh.md)<br>[README.md](../../../../sources/liaohch3__claude-tap/README.md)<br>[tests/e2e/README.md](../../../../sources/liaohch3__claude-tap/tests/e2e/README.md)<br>[scripts/README.md](../../../../sources/liaohch3__claude-tap/scripts/README.md)<br>[docs/architecture.png](../../../../sources/liaohch3__claude-tap/docs/architecture.png)<br>[docs/architecture.svg](../../../../sources/liaohch3__claude-tap/docs/architecture.svg)<br>[docs/billing-header-diff.png](../../../../sources/liaohch3__claude-tap/docs/billing-header-diff.png)<br>[docs/demo_zh.gif](../../../../sources/liaohch3__claude-tap/docs/demo_zh.gif) |
| config | 2 | [pyproject.toml](../../../../sources/liaohch3__claude-tap/pyproject.toml)<br>[uv.lock](../../../../sources/liaohch3__claude-tap/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 132 | [tests/__init__.py](../../../../sources/liaohch3__claude-tap/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/liaohch3__claude-tap/tests/conftest.py)<br>[tests/test_auto_release_workflow.py](../../../../sources/liaohch3__claude-tap/tests/test_auto_release_workflow.py)<br>[tests/test_bedrock_dashboard.py](../../../../sources/liaohch3__claude-tap/tests/test_bedrock_dashboard.py)<br>[tests/test_bedrock_proxy.py](../../../../sources/liaohch3__claude-tap/tests/test_bedrock_proxy.py)<br>[tests/test_bedrock_support.py](../../../../sources/liaohch3__claude-tap/tests/test_bedrock_support.py) |
| CI workflows | 4 | [.github/workflows/auto-release.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/auto-release.yml)<br>[.github/workflows/ci.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/ci.yml)<br>[.github/workflows/legibility.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/legibility.yml)<br>[.github/workflows/publish.yml](../../../../sources/liaohch3__claude-tap/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 12 | [SECURITY.md](../../../../sources/liaohch3__claude-tap/SECURITY.md)<br>[tests/test_check_pr_policy.py](../../../../sources/liaohch3__claude-tap/tests/test_check_pr_policy.py)<br>[scripts/check_pr_policy.py](../../../../sources/liaohch3__claude-tap/scripts/check_pr_policy.py)<br>[.agents/evidence/pr/pi-cli-support/pi-openai-oauth-first-final-top.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/pi-cli-support/pi-openai-oauth-first-final-top.png)<br>[.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-events-scroll.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-events-scroll.png)<br>[.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-final-top.png](../../../../sources/liaohch3__claude-tap/.agents/evidence/pr/pi-cli-support/pi-openai-oauth-second-final-top.png) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/liaohch3__claude-tap/AGENTS.md)<br>[.claude/CLAUDE.md](../../../../sources/liaohch3__claude-tap/.claude/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `claude_tap/__main__.py`, `AGENTS.md`, `docs/guides/agent-trace-viewer.html`.
2. Trace execution through entrypoints: `claude_tap/__main__.py`.
3. Map agent/tool runtime through: `AGENTS.md`, `docs/guides/agent-trace-viewer.html`, `docs/guides/agent-trace-viewer.md`.
4. Inspect retrieval/memory/indexing through: `docs/index.html`, `docs/index.zh.html`, `.agents/evidence/pr/246-iframe-embed/default-desktop.png`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `tests/conftest.py`, `tests/test_auto_release_workflow.py`.

## Existing Repository Insight

코딩 에이전트/IDE 관점에서 Intercept and inspect Coding Agent API traffic from Claude Code, Codex CLI, Gemini CLI, Cursor CLI, OpenCode, Kimi/Kimi . 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, next이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 코딩 에이전트/IDE 레포입니다. 활용 관점은 coding-agent reference implementation이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
