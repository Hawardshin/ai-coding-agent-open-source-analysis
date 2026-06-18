# alfredolopez80/multi-agent-ralph-loop 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Autonomous orchestration framework for Claude Code with MemPalace-inspired memory (4-layer stack, 818-token wake-up), parallel-first Agent Teams (6 teammates), Aristotle First Principles methodology, and 4-stage quality gates. 925+ tests, 22 active hooks, automatic learning pipeline.

## 요약

- 조사 단위: `sources/alfredolopez80__multi-agent-ralph-loop` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,160 files, 193 directories, depth score 109, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_v2.24_minimax_mcp.sh, docs/claude-hud-mcp-fix.md, docs/SENTRY_SKILLS_VS_MCP.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | alfredolopez80/multi-agent-ralph-loop |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Shell |
| Stars | 138 |
| Forks | 22 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/alfredolopez80__multi-agent-ralph-loop](../../../../sources/alfredolopez80__multi-agent-ralph-loop) |
| 기존 보고서 | [reports/global-trending/repositories/alfredolopez80__multi-agent-ralph-loop.md](../../../global-trending/repositories/alfredolopez80__multi-agent-ralph-loop.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1160 / 193 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude, .github, .ralph, config, docs, scripts, tests |
| 상위 확장자 | .md: 497, .sh: 397, .py: 74, .json: 47, .html: 45, .bats: 35, .js: 20, .png: 14, (none): 7, .txt: 5, .svg: 4, .bash: 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 112 |
| docs | documentation surface | 97 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
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
| mcp | [tests/test_v2.24_minimax_mcp.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_v2.24_minimax_mcp.sh) | mcp signal |
| mcp | [docs/claude-hud-mcp-fix.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/claude-hud-mcp-fix.md) | mcp signal |
| mcp | [docs/SENTRY_SKILLS_VS_MCP.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/SENTRY_SKILLS_VS_MCP.md) | mcp signal |
| mcp | [docs/security/MCP_PLUGINS_ANALYSIS_v2.80.9.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/security/MCP_PLUGINS_ANALYSIS_v2.80.9.md) | mcp signal |
| agentRuntime | [agent-browser-policy.json](../../../../sources/alfredolopez80__multi-agent-ralph-loop/agent-browser-policy.json) | agentRuntime signal |
| agentRuntime | [agent-browser.json](../../../../sources/alfredolopez80__multi-agent-ralph-loop/agent-browser.json) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/HOOK_FORMAT_REFERENCE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/HOOK_FORMAT_REFERENCE.md) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/CLAUDE.md) | instruction signal |
| instruction | [docs/CLAUDE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/CLAUDE.md) | instruction signal |
| instruction | [docs/agent-teams/AGENTS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/agent-teams/AGENTS.md) | instruction signal |
| config | [tests/requirements.txt](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 422 | [agent-browser-policy.json](../../../../sources/alfredolopez80__multi-agent-ralph-loop/agent-browser-policy.json)<br>[agent-browser.json](../../../../sources/alfredolopez80__multi-agent-ralph-loop/agent-browser.json)<br>[AGENTS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/AGENTS.md)<br>[tests/HOOK_FORMAT_REFERENCE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/HOOK_FORMAT_REFERENCE.md)<br>[tests/HOOK_TESTING_PATTERNS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/HOOK_TESTING_PATTERNS.md)<br>[tests/skills/test-autoresearch-integrations.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/skills/test-autoresearch-integrations.sh)<br>[tests/skills/test-autoresearch-smart-setup.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/skills/test-autoresearch-smart-setup.sh)<br>[tests/skills/test-autoresearch.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/skills/test-autoresearch.sh) |
| mcp | 8 | [tests/test_v2.24_minimax_mcp.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_v2.24_minimax_mcp.sh)<br>[docs/claude-hud-mcp-fix.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/claude-hud-mcp-fix.md)<br>[docs/SENTRY_SKILLS_VS_MCP.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/SENTRY_SKILLS_VS_MCP.md)<br>[docs/security/MCP_PLUGINS_ANALYSIS_v2.80.9.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/security/MCP_PLUGINS_ANALYSIS_v2.80.9.md)<br>[docs/research/context-memory-mcp-jarvis.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/research/context-memory-mcp-jarvis.md)<br>[.claude/skills/minimax-mcp-usage/skill.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/.claude/skills/minimax-mcp-usage/skill.md)<br>[.claude/skills/glm-mcp/SKILL.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/.claude/skills/glm-mcp/SKILL.md)<br>[.claude/rules/zai-mcp-usage.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/.claude/rules/zai-mcp-usage.md) |
| retrieval | 47 | [tests/memory/__init__.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/__init__.py)<br>[tests/memory/test_dream.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/test_dream.py)<br>[tests/memory/test_learn_capture.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/test_learn_capture.py)<br>[tests/memory/test_memory_node.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/test_memory_node.py)<br>[tests/memory/test_project_memory.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/test_project_memory.py)<br>[tests/memory/test_recall_v2.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/test_recall_v2.py)<br>[tests/memory/test_threat_model_invariants.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/test_threat_model_invariants.py)<br>[tests/memory/test_tree_store.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/memory/test_tree_store.py) |
| spec | 141 | [tests/requirements.txt](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/requirements.txt)<br>[scripts/validate-global-architecture.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/validate-global-architecture.sh)<br>[scripts/validate-system-requirements.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/validate-system-requirements.sh)<br>[docs/ralph-architecture.svg](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/ralph-architecture.svg)<br>[docs/templates/DESIGN.md.template](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/templates/DESIGN.md.template)<br>[docs/security/ARCHITECTURE_MIGRATION_DIAGRAM.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/security/ARCHITECTURE_MIGRATION_DIAGRAM.md)<br>[docs/security/ARCHITECTURE_MIGRATION_V2_CLAUDE_MEM_ONLY.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/security/ARCHITECTURE_MIGRATION_V2_CLAUDE_MEM_ONLY.md)<br>[docs/security/diagram-design-threat-model.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/security/diagram-design-threat-model.md) |
| eval | 286 | [test-context-thresholds.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-context-thresholds.sh)<br>[test-git-root.txt](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-git-root.txt)<br>[test-quality-validation.js](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-quality-validation.js)<br>[test-security-check.ts](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-security-check.ts)<br>[tests/__init__.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/conftest.py)<br>[tests/coverage.json](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/coverage.json)<br>[tests/HOOK_FORMAT_REFERENCE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/HOOK_FORMAT_REFERENCE.md) |
| security | 118 | [agent-browser-policy.json](../../../../sources/alfredolopez80__multi-agent-ralph-loop/agent-browser-policy.json)<br>[test-security-check.ts](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-security-check.ts)<br>[tests/SECURITY_AUDIT.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/SECURITY_AUDIT.md)<br>[tests/test_git_safety_guard.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_git_safety_guard.py)<br>[tests/test_install_security.bats](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_install_security.bats)<br>[tests/test_mmc_security.bats](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_mmc_security.bats)<br>[tests/test_pretooluse_permission_decision.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_pretooluse_permission_decision.py)<br>[tests/test_ralph_security.bats](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_ralph_security.bats) |
| ci | 4 | [scripts/ci/shellcheck-wrapper.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/ci/shellcheck-wrapper.sh)<br>[scripts/ci/validate-hooks.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/ci/validate-hooks.sh)<br>[scripts/ci/validate-skills.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/ci/validate-skills.sh)<br>[.github/workflows/ci.yml](../../../../sources/alfredolopez80__multi-agent-ralph-loop/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 5 | [AGENTS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/AGENTS.md)<br>[CLAUDE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/CLAUDE.md)<br>[docs/CLAUDE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/CLAUDE.md)<br>[docs/agent-teams/AGENTS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/agent-teams/AGENTS.md)<br>[.claude/rules/learned/rooms/agents.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/.claude/rules/learned/rooms/agents.md) |
| docs | 306 | [README.es.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/README.es.md)<br>[README.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/README.md)<br>[tests/swarm-mode/README.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/swarm-mode/README.md)<br>[tests/stop-hook/README.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/stop-hook/README.md)<br>[tests/security/README.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/security/README.md)<br>[tests/promptify-integration/README.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/promptify-integration/README.md)<br>[tests/learning-system/README.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/learning-system/README.md)<br>[docs/CLAUDE_MEM_HOOKS_FIX.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/CLAUDE_MEM_HOOKS_FIX.md) |
| config | 1 | [tests/requirements.txt](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 286 | [test-context-thresholds.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-context-thresholds.sh)<br>[test-git-root.txt](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-git-root.txt)<br>[test-quality-validation.js](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-quality-validation.js)<br>[test-security-check.ts](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-security-check.ts)<br>[tests/__init__.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/conftest.py) |
| CI workflow | 4 | [scripts/ci/shellcheck-wrapper.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/ci/shellcheck-wrapper.sh)<br>[scripts/ci/validate-hooks.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/ci/validate-hooks.sh)<br>[scripts/ci/validate-skills.sh](../../../../sources/alfredolopez80__multi-agent-ralph-loop/scripts/ci/validate-skills.sh)<br>[.github/workflows/ci.yml](../../../../sources/alfredolopez80__multi-agent-ralph-loop/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 118 | [agent-browser-policy.json](../../../../sources/alfredolopez80__multi-agent-ralph-loop/agent-browser-policy.json)<br>[test-security-check.ts](../../../../sources/alfredolopez80__multi-agent-ralph-loop/test-security-check.ts)<br>[tests/SECURITY_AUDIT.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/SECURITY_AUDIT.md)<br>[tests/test_git_safety_guard.py](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_git_safety_guard.py)<br>[tests/test_install_security.bats](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_install_security.bats)<br>[tests/test_mmc_security.bats](../../../../sources/alfredolopez80__multi-agent-ralph-loop/tests/test_mmc_security.bats) |
| 에이전트 지시문 | 5 | [AGENTS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/AGENTS.md)<br>[CLAUDE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/CLAUDE.md)<br>[docs/CLAUDE.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/CLAUDE.md)<br>[docs/agent-teams/AGENTS.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/docs/agent-teams/AGENTS.md)<br>[.claude/rules/learned/rooms/agents.md](../../../../sources/alfredolopez80__multi-agent-ralph-loop/.claude/rules/learned/rooms/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_v2.24_minimax_mcp.sh`, `docs/claude-hud-mcp-fix.md`, `docs/SENTRY_SKILLS_VS_MCP.md`.
2. agent/tool runtime 매핑: `agent-browser-policy.json`, `agent-browser.json`, `AGENTS.md`.
3. retrieval/memory/indexing 확인: `tests/memory/__init__.py`, `tests/memory/test_dream.py`, `tests/memory/test_learn_capture.py`.
4. test/eval 파일로 동작 검증: `test-context-thresholds.sh`, `test-git-root.txt`, `test-quality-validation.js`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Autonomous orchestration framework for Claude Code with MemPalace inspired memory 4 layer stack, 818 token wake up , par. 핵심 구조 신호는 Shell, README.md, AGENTS.md, CLAUDE.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
