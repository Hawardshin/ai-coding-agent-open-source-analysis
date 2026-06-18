# affaan-m/ECC 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.

## 요약

- 조사 단위: `sources/affaan-m__ECC` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 3,243 files, 1,206 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, tests/lib/mcp-config.test.js, tests/lib/mcp-inventory.test.js이고, 의존성 단서는 openai, anthropic, claude, ollama, llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | affaan-m/ECC |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 217294 |
| Forks | 33355 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/affaan-m__ECC](../../../../sources/affaan-m__ECC) |
| 기존 보고서 | [reports/global-trending/repositories/affaan-m__ECC.md](../../../global-trending/repositories/affaan-m__ECC.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 3243 / 1206 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .agents, .claude, .claude-plugin, .codebuddy, .codex, .codex-plugin, .cursor, .gemini, .github, .kiro, .opencode, .qwen, .trae, .zed, agents, assets, commands, config, contexts, docs |
| 상위 확장자 | .md: 2467, .js: 362, .json: 109, .py: 59, .yaml: 41, .sh: 32, .png: 29, .txt: 25, .ts: 18, .rs: 16, .yml: 14, .hook: 13 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 123 |
| docs | documentation surface | 66 |
| examples/evaluator-rag-prototype | examples workspace | 30 |
| src | source boundary | 2 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| assets | top-level component | 1 |
| commands | top-level component | 1 |
| config | top-level component | 1 |
| contexts | top-level component | 1 |
| ecc2 | top-level component | 1 |
| examples | top-level component | 1 |
| examples/CLAUDE.md | examples workspace | 1 |
| examples/gan-harness | examples workspace | 1 |
| hooks | top-level component | 1 |
| integrations | top-level component | 1 |
| legacy-command-shims | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | postinstall | echo '\n ecc-universal installed!\n Run: npx ecc typescript\n Compat: npx ecc-install typescript\n Docs: https://github.com/affaan-m/ECC\n' |
| quality | package.json | catalog:check | node scripts/ci/catalog.js --text |
| utility | package.json | catalog:sync | node scripts/ci/catalog.js --write --text |
| utility | package.json | command-registry:generate | node scripts/ci/generate-command-registry.js |
| utility | package.json | command-registry:write | node scripts/ci/generate-command-registry.js --write |
| quality | package.json | command-registry:check | node scripts/ci/generate-command-registry.js --check |
| quality | package.json | lint | eslint . && markdownlint '**/*.md' --ignore node_modules |
| utility | package.json | harness:adapters | node scripts/harness-adapter-compliance.js |
| utility | package.json | harness:audit | node scripts/harness-audit.js |
| utility | package.json | observability:ready | node scripts/observability-readiness.js |
| utility | package.json | operator:dashboard | node scripts/operator-readiness-dashboard.js |
| utility | package.json | preview-pack:smoke | node scripts/preview-pack-smoke.js |
| build | package.json | release:approval-gate | node scripts/release-approval-gate.js |
| build | package.json | release:video-suite | node scripts/release-video-suite.js |
| utility | package.json | control:pane | node scripts/control-pane.js |
| utility | package.json | platform:audit | node scripts/platform-audit.js |
| utility | package.json | discussion:audit | node scripts/discussion-audit.js |
| utility | package.json | security:ioc-scan | node scripts/ci/scan-supply-chain-iocs.js |
| utility | package.json | security:advisory-sources | node scripts/ci/supply-chain-advisory-sources.js |
| utility | package.json | claw | node scripts/claw.js |
| utility | package.json | orchestrate:status | node scripts/orchestration-status.js |
| utility | package.json | orchestrate:worker | bash scripts/orchestrate-codex-worker.sh |
| utility | package.json | orchestrate:tmux | node scripts/orchestrate-worktrees.js |
| test | package.json | test | node scripts/ci/check-unicode-safety.js && node scripts/ci/validate-agents.js && node scripts/ci/validate-commands.js && node scripts/ci/validate-rules.js && node scripts/ci/validate-skills.js && node scripts/ci/validate |
| test | package.json | coverage | c8 --all --include="scripts/**/*.js" --check-coverage --lines 80 --functions 80 --branches 80 --statements 80 --reporter=text --reporter=lcov node tests/run-all.js |
| build | package.json | build:opencode | node scripts/build-opencode.js |
| build | package.json | prepack | npm run build:opencode |
| utility | package.json | dashboard | python3 ./ecc_dashboard.py |
| utility | package.json | dashboard:web | node scripts/dashboard-web.js |
| utility | pyproject.toml | llm-select | llm-select |
| entrypoint | package.json bin | ecc.js | scripts/ecc.js |
| entrypoint | package.json bin | control-pane.js | scripts/control-pane.js |
| entrypoint | package.json bin | install-apply.js | scripts/install-apply.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | ollama, llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/affaan-m__ECC/.mcp.json) | mcp signal |
| mcp | [tests/lib/mcp-config.test.js](../../../../sources/affaan-m__ECC/tests/lib/mcp-config.test.js) | mcp signal |
| mcp | [tests/lib/mcp-inventory.test.js](../../../../sources/affaan-m__ECC/tests/lib/mcp-inventory.test.js) | mcp signal |
| mcp | [tests/hooks/mcp-health-check.test.js](../../../../sources/affaan-m__ECC/tests/hooks/mcp-health-check.test.js) | mcp signal |
| agentRuntime | [agent.yaml](../../../../sources/affaan-m__ECC/agent.yaml) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/affaan-m__ECC/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/scripts/skill-create-output.test.js](../../../../sources/affaan-m__ECC/tests/scripts/skill-create-output.test.js) | agentRuntime signal |
| agentRuntime | [tests/lib/agent-compress.test.js](../../../../sources/affaan-m__ECC/tests/lib/agent-compress.test.js) | agentRuntime signal |
| entrypoints | [src/llm/__main__.py](../../../../sources/affaan-m__ECC/src/llm/__main__.py) | entrypoints signal |
| entrypoints | [scripts/lib/control-pane/server.js](../../../../sources/affaan-m__ECC/scripts/lib/control-pane/server.js) | entrypoints signal |
| entrypoints | [ecc2/src/main.rs](../../../../sources/affaan-m__ECC/ecc2/src/main.rs) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/affaan-m__ECC/CLAUDE.md) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [src/llm/__main__.py](../../../../sources/affaan-m__ECC/src/llm/__main__.py)<br>[scripts/lib/control-pane/server.js](../../../../sources/affaan-m__ECC/scripts/lib/control-pane/server.js)<br>[ecc2/src/main.rs](../../../../sources/affaan-m__ECC/ecc2/src/main.rs) |
| agentRuntime | 1753 | [agent.yaml](../../../../sources/affaan-m__ECC/agent.yaml)<br>[AGENTS.md](../../../../sources/affaan-m__ECC/AGENTS.md)<br>[tests/scripts/skill-create-output.test.js](../../../../sources/affaan-m__ECC/tests/scripts/skill-create-output.test.js)<br>[tests/lib/agent-compress.test.js](../../../../sources/affaan-m__ECC/tests/lib/agent-compress.test.js)<br>[tests/lib/agent-data-home.test.js](../../../../sources/affaan-m__ECC/tests/lib/agent-data-home.test.js)<br>[tests/lib/skill-dashboard.test.js](../../../../sources/affaan-m__ECC/tests/lib/skill-dashboard.test.js)<br>[tests/lib/skill-evolution.test.js](../../../../sources/affaan-m__ECC/tests/lib/skill-evolution.test.js)<br>[tests/lib/skill-improvement.test.js](../../../../sources/affaan-m__ECC/tests/lib/skill-improvement.test.js) |
| mcp | 28 | [.mcp.json](../../../../sources/affaan-m__ECC/.mcp.json)<br>[tests/lib/mcp-config.test.js](../../../../sources/affaan-m__ECC/tests/lib/mcp-config.test.js)<br>[tests/lib/mcp-inventory.test.js](../../../../sources/affaan-m__ECC/tests/lib/mcp-inventory.test.js)<br>[tests/hooks/mcp-health-check.test.js](../../../../sources/affaan-m__ECC/tests/hooks/mcp-health-check.test.js)<br>[tests/docs/mcp-management-docs.test.js](../../../../sources/affaan-m__ECC/tests/docs/mcp-management-docs.test.js)<br>[skills/mcp-server-patterns/SKILL.md](../../../../sources/affaan-m__ECC/skills/mcp-server-patterns/SKILL.md)<br>[skills/codehealth-mcp/SKILL.md](../../../../sources/affaan-m__ECC/skills/codehealth-mcp/SKILL.md)<br>[skills/angular-developer/references/mcp.md](../../../../sources/affaan-m__ECC/skills/angular-developer/references/mcp.md) |
| retrieval | 57 | [tests/hooks/observer-memory.test.js](../../../../sources/affaan-m__ECC/tests/hooks/observer-memory.test.js)<br>[tests/docs/evaluator-rag-prototype.test.js](../../../../sources/affaan-m__ECC/tests/docs/evaluator-rag-prototype.test.js)<br>[skills/social-graph-ranker/SKILL.md](../../../../sources/affaan-m__ECC/skills/social-graph-ranker/SKILL.md)<br>[skills/manim-video/assets/network_graph_scene.py](../../../../sources/affaan-m__ECC/skills/manim-video/assets/network_graph_scene.py)<br>[skills/knowledge-ops/SKILL.md](../../../../sources/affaan-m__ECC/skills/knowledge-ops/SKILL.md)<br>[skills/iterative-retrieval/SKILL.md](../../../../sources/affaan-m__ECC/skills/iterative-retrieval/SKILL.md)<br>[scripts/lib/state-store/index.js](../../../../sources/affaan-m__ECC/scripts/lib/state-store/index.js)<br>[scripts/lib/skill-evolution/index.js](../../../../sources/affaan-m__ECC/scripts/lib/skill-evolution/index.js) |
| spec | 63 | [tests/hooks/design-quality-check.test.js](../../../../sources/affaan-m__ECC/tests/hooks/design-quality-check.test.js)<br>[skills/tinystruct-patterns/references/architecture.md](../../../../sources/affaan-m__ECC/skills/tinystruct-patterns/references/architecture.md)<br>[skills/skill-comply/scripts/spec_generator.py](../../../../sources/affaan-m__ECC/skills/skill-comply/scripts/spec_generator.py)<br>[skills/skill-comply/prompts/spec_generator.md](../../../../sources/affaan-m__ECC/skills/skill-comply/prompts/spec_generator.md)<br>[skills/skill-comply/fixtures/tdd_spec.yaml](../../../../sources/affaan-m__ECC/skills/skill-comply/fixtures/tdd_spec.yaml)<br>[skills/liquid-glass-design/SKILL.md](../../../../sources/affaan-m__ECC/skills/liquid-glass-design/SKILL.md)<br>[skills/hexagonal-architecture/SKILL.md](../../../../sources/affaan-m__ECC/skills/hexagonal-architecture/SKILL.md)<br>[skills/frontend-design-direction/SKILL.md](../../../../sources/affaan-m__ECC/skills/frontend-design-direction/SKILL.md) |
| eval | 309 | [tests/__init__.py](../../../../sources/affaan-m__ECC/tests/__init__.py)<br>[tests/codex-config.test.js](../../../../sources/affaan-m__ECC/tests/codex-config.test.js)<br>[tests/conftest.py](../../../../sources/affaan-m__ECC/tests/conftest.py)<br>[tests/opencode-config.test.js](../../../../sources/affaan-m__ECC/tests/opencode-config.test.js)<br>[tests/opencode-plugin-hooks.test.js](../../../../sources/affaan-m__ECC/tests/opencode-plugin-hooks.test.js)<br>[tests/opencode-tools.test.js](../../../../sources/affaan-m__ECC/tests/opencode-tools.test.js)<br>[tests/plugin-manifest.test.js](../../../../sources/affaan-m__ECC/tests/plugin-manifest.test.js)<br>[tests/run-all.js](../../../../sources/affaan-m__ECC/tests/run-all.js) |
| security | 220 | [SECURITY.md](../../../../sources/affaan-m__ECC/SECURITY.md)<br>[the-security-guide.md](../../../../sources/affaan-m__ECC/the-security-guide.md)<br>[tests/scripts/discussion-audit.test.js](../../../../sources/affaan-m__ECC/tests/scripts/discussion-audit.test.js)<br>[tests/scripts/harness-audit.test.js](../../../../sources/affaan-m__ECC/tests/scripts/harness-audit.test.js)<br>[tests/scripts/platform-audit.test.js](../../../../sources/affaan-m__ECC/tests/scripts/platform-audit.test.js)<br>[tests/hooks/insaits-security-monitor.test.js](../../../../sources/affaan-m__ECC/tests/hooks/insaits-security-monitor.test.js)<br>[tests/hooks/insaits-security-wrapper.test.js](../../../../sources/affaan-m__ECC/tests/hooks/insaits-security-wrapper.test.js)<br>[tests/hooks/test_insaits_security_monitor.py](../../../../sources/affaan-m__ECC/tests/hooks/test_insaits_security_monitor.py) |
| ci | 38 | [tests/ci/agent-instruction-safety.test.js](../../../../sources/affaan-m__ECC/tests/ci/agent-instruction-safety.test.js)<br>[tests/ci/agent-yaml-surface.test.js](../../../../sources/affaan-m__ECC/tests/ci/agent-yaml-surface.test.js)<br>[tests/ci/catalog.test.js](../../../../sources/affaan-m__ECC/tests/ci/catalog.test.js)<br>[tests/ci/code-reviewer-false-positive-guard.test.js](../../../../sources/affaan-m__ECC/tests/ci/code-reviewer-false-positive-guard.test.js)<br>[tests/ci/codex-skill-surface.test.js](../../../../sources/affaan-m__ECC/tests/ci/codex-skill-surface.test.js)<br>[tests/ci/command-registry.test.js](../../../../sources/affaan-m__ECC/tests/ci/command-registry.test.js)<br>[tests/ci/dynamic-workflow-team-surface.test.js](../../../../sources/affaan-m__ECC/tests/ci/dynamic-workflow-team-surface.test.js)<br>[tests/ci/mle-workflow-coverage.test.js](../../../../sources/affaan-m__ECC/tests/ci/mle-workflow-coverage.test.js) |
| container | 0 | 명확하지 않음 |
| instruction | 71 | [AGENTS.md](../../../../sources/affaan-m__ECC/AGENTS.md)<br>[CLAUDE.md](../../../../sources/affaan-m__ECC/CLAUDE.md)<br>[rules/common/agents.md](../../../../sources/affaan-m__ECC/rules/common/agents.md)<br>[examples/CLAUDE.md](../../../../sources/affaan-m__ECC/examples/CLAUDE.md)<br>[docs/zh-TW/rules/agents.md](../../../../sources/affaan-m__ECC/docs/zh-TW/rules/agents.md)<br>[docs/zh-CN/AGENTS.md](../../../../sources/affaan-m__ECC/docs/zh-CN/AGENTS.md)<br>[docs/zh-CN/CLAUDE.md](../../../../sources/affaan-m__ECC/docs/zh-CN/CLAUDE.md)<br>[docs/zh-CN/rules/common/agents.md](../../../../sources/affaan-m__ECC/docs/zh-CN/rules/common/agents.md) |
| docs | 1530 | [README.md](../../../../sources/affaan-m__ECC/README.md)<br>[README.zh-CN.md](../../../../sources/affaan-m__ECC/README.zh-CN.md)<br>[tests/docs/canary-watch.test.js](../../../../sources/affaan-m__ECC/tests/docs/canary-watch.test.js)<br>[tests/docs/configure-ecc-install-paths.test.js](../../../../sources/affaan-m__ECC/tests/docs/configure-ecc-install-paths.test.js)<br>[tests/docs/continuous-learning-v2-docs.test.js](../../../../sources/affaan-m__ECC/tests/docs/continuous-learning-v2-docs.test.js)<br>[tests/docs/copilot-support.test.js](../../../../sources/affaan-m__ECC/tests/docs/copilot-support.test.js)<br>[tests/docs/ecc2-release-surface.test.js](../../../../sources/affaan-m__ECC/tests/docs/ecc2-release-surface.test.js)<br>[tests/docs/evaluator-rag-prototype.test.js](../../../../sources/affaan-m__ECC/tests/docs/evaluator-rag-prototype.test.js) |
| config | 7 | [package.json](../../../../sources/affaan-m__ECC/package.json)<br>[pyproject.toml](../../../../sources/affaan-m__ECC/pyproject.toml)<br>[skills/skill-comply/pyproject.toml](../../../../sources/affaan-m__ECC/skills/skill-comply/pyproject.toml)<br>[ecc2/Cargo.lock](../../../../sources/affaan-m__ECC/ecc2/Cargo.lock)<br>[ecc2/Cargo.toml](../../../../sources/affaan-m__ECC/ecc2/Cargo.toml)<br>[.opencode/package.json](../../../../sources/affaan-m__ECC/.opencode/package.json)<br>[.opencode/tsconfig.json](../../../../sources/affaan-m__ECC/.opencode/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 309 | [tests/__init__.py](../../../../sources/affaan-m__ECC/tests/__init__.py)<br>[tests/codex-config.test.js](../../../../sources/affaan-m__ECC/tests/codex-config.test.js)<br>[tests/conftest.py](../../../../sources/affaan-m__ECC/tests/conftest.py)<br>[tests/opencode-config.test.js](../../../../sources/affaan-m__ECC/tests/opencode-config.test.js)<br>[tests/opencode-plugin-hooks.test.js](../../../../sources/affaan-m__ECC/tests/opencode-plugin-hooks.test.js)<br>[tests/opencode-tools.test.js](../../../../sources/affaan-m__ECC/tests/opencode-tools.test.js) |
| CI workflow | 38 | [tests/ci/agent-instruction-safety.test.js](../../../../sources/affaan-m__ECC/tests/ci/agent-instruction-safety.test.js)<br>[tests/ci/agent-yaml-surface.test.js](../../../../sources/affaan-m__ECC/tests/ci/agent-yaml-surface.test.js)<br>[tests/ci/catalog.test.js](../../../../sources/affaan-m__ECC/tests/ci/catalog.test.js)<br>[tests/ci/code-reviewer-false-positive-guard.test.js](../../../../sources/affaan-m__ECC/tests/ci/code-reviewer-false-positive-guard.test.js)<br>[tests/ci/codex-skill-surface.test.js](../../../../sources/affaan-m__ECC/tests/ci/codex-skill-surface.test.js)<br>[tests/ci/command-registry.test.js](../../../../sources/affaan-m__ECC/tests/ci/command-registry.test.js) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 220 | [SECURITY.md](../../../../sources/affaan-m__ECC/SECURITY.md)<br>[the-security-guide.md](../../../../sources/affaan-m__ECC/the-security-guide.md)<br>[tests/scripts/discussion-audit.test.js](../../../../sources/affaan-m__ECC/tests/scripts/discussion-audit.test.js)<br>[tests/scripts/harness-audit.test.js](../../../../sources/affaan-m__ECC/tests/scripts/harness-audit.test.js)<br>[tests/scripts/platform-audit.test.js](../../../../sources/affaan-m__ECC/tests/scripts/platform-audit.test.js)<br>[tests/hooks/insaits-security-monitor.test.js](../../../../sources/affaan-m__ECC/tests/hooks/insaits-security-monitor.test.js) |
| 에이전트 지시문 | 71 | [AGENTS.md](../../../../sources/affaan-m__ECC/AGENTS.md)<br>[CLAUDE.md](../../../../sources/affaan-m__ECC/CLAUDE.md)<br>[rules/common/agents.md](../../../../sources/affaan-m__ECC/rules/common/agents.md)<br>[examples/CLAUDE.md](../../../../sources/affaan-m__ECC/examples/CLAUDE.md)<br>[docs/zh-TW/rules/agents.md](../../../../sources/affaan-m__ECC/docs/zh-TW/rules/agents.md)<br>[docs/zh-CN/AGENTS.md](../../../../sources/affaan-m__ECC/docs/zh-CN/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.mcp.json`, `tests/lib/mcp-config.test.js`, `tests/lib/mcp-inventory.test.js`.
2. entrypoint를 따라 실행 흐름 확인: `src/llm/__main__.py`, `scripts/lib/control-pane/server.js`, `ecc2/src/main.rs`.
3. agent/tool runtime 매핑: `agent.yaml`, `AGENTS.md`, `tests/scripts/skill-create-output.test.js`.
4. retrieval/memory/indexing 확인: `tests/hooks/observer-memory.test.js`, `tests/docs/evaluator-rag-prototype.test.js`, `skills/social-graph-ranker/SKILL.md`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/codex-config.test.js`, `tests/conftest.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The agent harness performance optimization system. Skills, instincts, memory, security, and research first development f. 핵심 구조 신호는 JavaScript, package.json, pyproject.toml, README.md, AGENTS.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
