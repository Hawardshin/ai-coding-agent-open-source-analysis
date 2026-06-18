# Mybono/ai-orchestrator 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Portable multi-agent AI developer setup for Claude Code + Ollama. Role-based local LLM orchestration via Bash — plan, code, review, commit. Zero Dependency. Works with any language stack.

## 요약

- 조사 단위: `sources/Mybono__ai-orchestrator` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 323 files, 108 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp-config.json, src/mcp/server.ts, skills/mcp-development/SKILL.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Mybono/ai-orchestrator |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | HTML |
| Stars | 97 |
| Forks | 16 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Mybono__ai-orchestrator](../../../../sources/Mybono__ai-orchestrator) |
| 기존 보고서 | [reports/global-trending/repositories/Mybono__ai-orchestrator.md](../../../global-trending/repositories/Mybono__ai-orchestrator.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 323 / 108 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude, .github, agents, commands, documentation, graphify-out, knowledge, mcps, plugins, scripts, skills, src |
| 상위 확장자 | .md: 177, .json: 31, .csv: 30, .ts: 30, .sh: 22, (none): 14, .py: 4, .js: 3, .yml: 3, .jsonl: 2, .svg: 2, .html: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 9 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| commands | top-level component | 1 |
| documentation | documentation surface | 1 |
| graphify-out | top-level component | 1 |
| knowledge | top-level component | 1 |
| mcps | top-level component | 1 |
| plugins | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | start | tsx src/index.ts |
| serve-dev | package.json | dev | tsx watch src/index.ts |
| quality | package.json | typecheck | tsc --noEmit |
| utility | package.json | postinstall | echo "Run 'ai-orchestrator-install' to set up the system." |
| utility | package.json | ao-commit | tsx src/cli/commit.ts |
| utility | package.json | ao-review | tsx src/cli/review.ts |
| utility | package.json | ao-stats | tsx src/cli/stats.ts |
| utility | package.json | ao-update | tsx src/cli/update.ts |
| serve-dev | package.json | ao-mcp | tsx src/mcp/server.ts |
| entrypoint | package.json bin | install.sh | scripts/install.sh |
| entrypoint | package.json bin | index.js | dist/index.js |


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
| mcp | [mcp-config.json](../../../../sources/Mybono__ai-orchestrator/mcp-config.json) | mcp signal |
| mcp | [src/mcp/server.ts](../../../../sources/Mybono__ai-orchestrator/src/mcp/server.ts) | mcp signal |
| mcp | [skills/mcp-development/SKILL.md](../../../../sources/Mybono__ai-orchestrator/skills/mcp-development/SKILL.md) | mcp signal |
| mcp | [mcps/.mcp.json](../../../../sources/Mybono__ai-orchestrator/mcps/.mcp.json) | mcp signal |
| agentRuntime | [src/agents/AgentRunner.ts](../../../../sources/Mybono__ai-orchestrator/src/agents/AgentRunner.ts) | agentRuntime signal |
| agentRuntime | [src/agents/TriageAgent.ts](../../../../sources/Mybono__ai-orchestrator/src/agents/TriageAgent.ts) | agentRuntime signal |
| agentRuntime | [skills/.DS_Store](../../../../sources/Mybono__ai-orchestrator/skills/.DS_Store) | agentRuntime signal |
| agentRuntime | [skills/bash-code-standarts.md](../../../../sources/Mybono__ai-orchestrator/skills/bash-code-standarts.md) | agentRuntime signal |
| entrypoints | [src/index.ts](../../../../sources/Mybono__ai-orchestrator/src/index.ts) | entrypoints signal |
| instruction | [documentation/AGENTS.md](../../../../sources/Mybono__ai-orchestrator/documentation/AGENTS.md) | instruction signal |
| instruction | [documentation/CLAUDE.md](../../../../sources/Mybono__ai-orchestrator/documentation/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/Mybono__ai-orchestrator/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [src/index.ts](../../../../sources/Mybono__ai-orchestrator/src/index.ts)<br>[src/mcp/server.ts](../../../../sources/Mybono__ai-orchestrator/src/mcp/server.ts) |
| agentRuntime | 129 | [src/agents/AgentRunner.ts](../../../../sources/Mybono__ai-orchestrator/src/agents/AgentRunner.ts)<br>[src/agents/TriageAgent.ts](../../../../sources/Mybono__ai-orchestrator/src/agents/TriageAgent.ts)<br>[skills/.DS_Store](../../../../sources/Mybono__ai-orchestrator/skills/.DS_Store)<br>[skills/bash-code-standarts.md](../../../../sources/Mybono__ai-orchestrator/skills/bash-code-standarts.md)<br>[skills/c-code-standarts.md](../../../../sources/Mybono__ai-orchestrator/skills/c-code-standarts.md)<br>[skills/doc-standarts.md](../../../../sources/Mybono__ai-orchestrator/skills/doc-standarts.md)<br>[skills/flutter-code-standarts.md](../../../../sources/Mybono__ai-orchestrator/skills/flutter-code-standarts.md)<br>[skills/humanizer.md](../../../../sources/Mybono__ai-orchestrator/skills/humanizer.md) |
| mcp | 4 | [mcp-config.json](../../../../sources/Mybono__ai-orchestrator/mcp-config.json)<br>[src/mcp/server.ts](../../../../sources/Mybono__ai-orchestrator/src/mcp/server.ts)<br>[skills/mcp-development/SKILL.md](../../../../sources/Mybono__ai-orchestrator/skills/mcp-development/SKILL.md)<br>[mcps/.mcp.json](../../../../sources/Mybono__ai-orchestrator/mcps/.mcp.json) |
| retrieval | 42 | [src/index.ts](../../../../sources/Mybono__ai-orchestrator/src/index.ts)<br>[src/types/index.ts](../../../../sources/Mybono__ai-orchestrator/src/types/index.ts)<br>[src/integrations/index.ts](../../../../sources/Mybono__ai-orchestrator/src/integrations/index.ts)<br>[scripts/embed-outcomes.sh](../../../../sources/Mybono__ai-orchestrator/scripts/embed-outcomes.sh)<br>[scripts/update-knowledge.sh](../../../../sources/Mybono__ai-orchestrator/scripts/update-knowledge.sh)<br>[knowledge/context-index.md](../../../../sources/Mybono__ai-orchestrator/knowledge/context-index.md)<br>[knowledge/embeddings.jsonl](../../../../sources/Mybono__ai-orchestrator/knowledge/embeddings.jsonl)<br>[knowledge/outcomes.jsonl](../../../../sources/Mybono__ai-orchestrator/knowledge/outcomes.jsonl) |
| spec | 9 | [skills/ui-ux-pro-max/scripts/design_system.py](../../../../sources/Mybono__ai-orchestrator/skills/ui-ux-pro-max/scripts/design_system.py)<br>[skills/ui-ux-pro-max/data/design.csv](../../../../sources/Mybono__ai-orchestrator/skills/ui-ux-pro-max/data/design.csv)<br>[skills/microservices-design/SKILL.md](../../../../sources/Mybono__ai-orchestrator/skills/microservices-design/SKILL.md)<br>[skills/frontend-design/SKILL.md](../../../../sources/Mybono__ai-orchestrator/skills/frontend-design/SKILL.md)<br>[skills/code-review/references/architecture-review-guide.md](../../../../sources/Mybono__ai-orchestrator/skills/code-review/references/architecture-review-guide.md)<br>[skills/api-design-patterns/SKILL.md](../../../../sources/Mybono__ai-orchestrator/skills/api-design-patterns/SKILL.md)<br>[plugins/database-tools/commands/design-schema.md](../../../../sources/Mybono__ai-orchestrator/plugins/database-tools/commands/design-schema.md)<br>[plugins/api-architect/commands/design-api.md](../../../../sources/Mybono__ai-orchestrator/plugins/api-architect/commands/design-api.md) |
| eval | 4 | [plugins/qa-tools/commands/generate-tests.md](../../../../sources/Mybono__ai-orchestrator/plugins/qa-tools/commands/generate-tests.md)<br>[plugins/accessibility/commands/test-sr.md](../../../../sources/Mybono__ai-orchestrator/plugins/accessibility/commands/test-sr.md)<br>[agents/performance-monitor.md](../../../../sources/Mybono__ai-orchestrator/agents/performance-monitor.md)<br>[agents/test-agent.md](../../../../sources/Mybono__ai-orchestrator/agents/test-agent.md) |
| security | 7 | [SECURITY.md](../../../../sources/Mybono__ai-orchestrator/SECURITY.md)<br>[skills/security-hardening/SKILL.md](../../../../sources/Mybono__ai-orchestrator/skills/security-hardening/SKILL.md)<br>[skills/code-review/references/security-review-guide.md](../../../../sources/Mybono__ai-orchestrator/skills/code-review/references/security-review-guide.md)<br>[plugins/security-guidance/commands/fix-vulnerability.md](../../../../sources/Mybono__ai-orchestrator/plugins/security-guidance/commands/fix-vulnerability.md)<br>[plugins/security-guidance/commands/security-check.md](../../../../sources/Mybono__ai-orchestrator/plugins/security-guidance/commands/security-check.md)<br>[plugins/security-guidance/.claude-plugin/plugin.json](../../../../sources/Mybono__ai-orchestrator/plugins/security-guidance/.claude-plugin/plugin.json)<br>[agents/security-auditor.md](../../../../sources/Mybono__ai-orchestrator/agents/security-auditor.md) |
| ci | 2 | [.github/workflows/ai-review.yml](../../../../sources/Mybono__ai-orchestrator/.github/workflows/ai-review.yml)<br>[.github/workflows/ci.yml](../../../../sources/Mybono__ai-orchestrator/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [documentation/AGENTS.md](../../../../sources/Mybono__ai-orchestrator/documentation/AGENTS.md)<br>[documentation/CLAUDE.md](../../../../sources/Mybono__ai-orchestrator/documentation/CLAUDE.md) |
| docs | 1 | [README.md](../../../../sources/Mybono__ai-orchestrator/README.md) |
| config | 2 | [package.json](../../../../sources/Mybono__ai-orchestrator/package.json)<br>[tsconfig.json](../../../../sources/Mybono__ai-orchestrator/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 4 | [plugins/qa-tools/commands/generate-tests.md](../../../../sources/Mybono__ai-orchestrator/plugins/qa-tools/commands/generate-tests.md)<br>[plugins/accessibility/commands/test-sr.md](../../../../sources/Mybono__ai-orchestrator/plugins/accessibility/commands/test-sr.md)<br>[agents/performance-monitor.md](../../../../sources/Mybono__ai-orchestrator/agents/performance-monitor.md)<br>[agents/test-agent.md](../../../../sources/Mybono__ai-orchestrator/agents/test-agent.md) |
| CI workflow | 2 | [.github/workflows/ai-review.yml](../../../../sources/Mybono__ai-orchestrator/.github/workflows/ai-review.yml)<br>[.github/workflows/ci.yml](../../../../sources/Mybono__ai-orchestrator/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 7 | [SECURITY.md](../../../../sources/Mybono__ai-orchestrator/SECURITY.md)<br>[skills/security-hardening/SKILL.md](../../../../sources/Mybono__ai-orchestrator/skills/security-hardening/SKILL.md)<br>[skills/code-review/references/security-review-guide.md](../../../../sources/Mybono__ai-orchestrator/skills/code-review/references/security-review-guide.md)<br>[plugins/security-guidance/commands/fix-vulnerability.md](../../../../sources/Mybono__ai-orchestrator/plugins/security-guidance/commands/fix-vulnerability.md)<br>[plugins/security-guidance/commands/security-check.md](../../../../sources/Mybono__ai-orchestrator/plugins/security-guidance/commands/security-check.md)<br>[plugins/security-guidance/.claude-plugin/plugin.json](../../../../sources/Mybono__ai-orchestrator/plugins/security-guidance/.claude-plugin/plugin.json) |
| 에이전트 지시문 | 2 | [documentation/AGENTS.md](../../../../sources/Mybono__ai-orchestrator/documentation/AGENTS.md)<br>[documentation/CLAUDE.md](../../../../sources/Mybono__ai-orchestrator/documentation/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp-config.json`, `src/mcp/server.ts`, `skills/mcp-development/SKILL.md`.
2. entrypoint를 따라 실행 흐름 확인: `src/index.ts`, `src/mcp/server.ts`.
3. agent/tool runtime 매핑: `src/agents/AgentRunner.ts`, `src/agents/TriageAgent.ts`, `skills/.DS_Store`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/types/index.ts`, `src/integrations/index.ts`.
5. test/eval 파일로 동작 검증: `plugins/qa-tools/commands/generate-tests.md`, `plugins/accessibility/commands/test-sr.md`, `agents/performance-monitor.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Portable multi agent AI developer setup for Claude Code + Ollama. Role based local LLM orchestration via Bash — plan, co. 핵심 구조 신호는 HTML, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
