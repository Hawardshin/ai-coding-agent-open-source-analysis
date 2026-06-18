# JKHeadley/instar

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/JKHeadley/instar |
| local path | sources/JKHeadley__instar |
| HEAD | c0e5377 |
| stars/forks | 68 / 16 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T22:05:24Z |
| trendScore / priorityScore | 158 / 474 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/memory-agent/README.md, examples/multi-job-agent/README.md, examples/telegram-agent/README.md |
| Coding agent / software automation | 314 | examples/memory-agent/README.md, examples/telegram-agent/README.md, examples/scheduled-job/README.md |
| Security / supply chain | 270 | README.md, src/providers/adapters/anthropic-headless/README.md, src/providers/adapters/anthropic-interactive-pool/README.md |
| Developer tools / DX | 200 | examples/memory-agent/README.md, specs/provider-portability/README.md, tests/fixtures/migration-agents/README.md |
| Cloud native / infrastructure | 191 | specs/provider-portability/acceptance/README.md, docs/exo3/README.md, README.md |
| MCP / agent interoperability | 145 | packages/threadline-mcp/README.md, README.md, CLAUDE.md |
| Observability / evaluation | 121 | specs/provider-portability/README.md, README.md, src/providers/adapters/anthropic-headless/README.md |
| Database / data infrastructure | 119 | examples/memory-agent/README.md, README.md, skills/README.md |
| RAG / retrieval / knowledge | 96 | README.md, CLAUDE.md, docs/PLAN-standalone-agents-and-memory.md |
| Data / ML platform | 50 | specs/provider-portability/README.md, README.md, CLAUDE.md |
| Frontend / app framework | 3 | docs/PROP-memory-architecture.md, site/package.json |
| Local LLM / inference | 2 | specs/provider-portability/README.md, src/providers/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 7714 |
| manifests | 29 |
| docs | 3675 |
| tests | 3528 |
| ci/ops | 9 |
| spec artifacts | 50 |
| agent instruction files | 19 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | 1. Run the setup wizard | Every other agent fails the same way / Quick Start / 1. Run the setup wizard / 2. Start your agent / 3. Message it from your phone — it responds, runs jobs, and remembers everything / How It Works / Why Coherence Is the Foundation / EXO 3.0 — governed by your organization's intent / Features / Agent Skills | <p align="center" <img src="assets/logo.png" alt="Instar" width="180" / </p <h1 align="center" instar</h1 <p align="center" <strong Coherence infrastructure for your self evolving agent.</strong </p <p align="center" <a href="https //www.npmjs.com/package/instar" <img src="https //img.shields.io/npm/v/instar?style=flat square" alt="npm version" </a <a href="https //www.npmjs.com/package/instar" <img src="https //img.shields.io/npm/dw/instar?style=flat square" alt="npm downloads" </a <a href="https //github.com/JKHeadley/instar/actions/workflows/ci.yml" <img src="https //img.shields.io/github/actions/workflow/status/JKHeadley/instar/ci.yml?branch=main&style=flat square&label=CI" alt="CI" </a |


## Key Files

### Manifests

- examples/memory-agent/README.md
- examples/multi-job-agent/README.md
- examples/telegram-agent/README.md
- examples/scheduled-job/README.md
- specs/provider-portability/acceptance/README.md
- specs/provider-portability/README.md
- tests/fixtures/migration-agents/README.md
- docs/exo3/README.md
- packages/threadline-mcp/README.md
- README.md
- site/README.md
- skills/README.md
- tests/fixtures/test-repo/README.md
- src/providers/adapters/anthropic-headless/README.md
- src/providers/adapters/anthropic-interactive-pool/README.md
- src/providers/README.md
- src/redteam/packs/README.md
- CLAUDE.md
- tests/fixtures/test-repo/CLAUDE.md
- packages/threadline-mcp/package.json


### Spec / Docs / Prompt Artifacts

- specs/provider-portability/acceptance/README.md
- specs/provider-portability/README.md
- CLAUDE.md
- specs/frameworks/claude-code/agents.md
- specs/frameworks/codex-cli/agents.md
- tests/fixtures/test-repo/CLAUDE.md
- docs/specs/_drafts/pi-eval-report.md
- docs/specs/_drafts/subscription-auth-p2.1-enrollment.eli16.md
- docs/specs/_drafts/subscription-auth-p2.1-enrollment.md
- docs/specs/agent-hard-sleep-controller.eli16.md
- docs/specs/agent-hard-sleep-controller.md
- docs/specs/agent-hard-sleep-mechanism.eli16.md
- docs/specs/agent-hard-sleep-mechanism.md
- docs/specs/agent-owned-followthrough.eli16.md
- docs/specs/agent-owned-followthrough.md
- docs/specs/AGENT-WORKTREE-CONVENTION-ELI16.md
- docs/specs/AGENT-WORKTREE-CONVENTION-SPEC.md
- docs/specs/agent-worktree-reaper.eli16.md
- docs/specs/agent-worktree-reaper.md
- docs/specs/AGENTMD-FRONTMATTER-SCHEDULING-VOCABULARY-SPEC.eli16.md


### Agent Instruction Files

- CLAUDE.md
- specs/frameworks/claude-code/agents.md
- specs/frameworks/codex-cli/agents.md
- tests/fixtures/test-repo/CLAUDE.md
- .claude/hooks/instar/before-prompt-recall.js
- .claude/settings.json
- .claude/settings.local.json
- .claude/skills/test-as-self/scripts/verify.mjs
- .claude/skills/test-as-self/SKILL.md
- .claude/hooks/free-text-guard.sh
- .claude/scripts/health-watchdog.sh
- .claude/skills/autonomous/hooks/autonomous-stop-hook.sh
- .claude/skills/autonomous/hooks/hooks.json
- .claude/skills/autonomous/scripts/setup-autonomous.sh
- .claude/skills/autonomous/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 2274 |
| upgrades | 2179 |
| src | 1390 |
| docs | 1217 |
| specs | 181 |
| .instar | 116 |
| scripts | 104 |
| site | 89 |
| playbook-scripts | 37 |
| skills | 33 |
| .claude | 15 |
| .github | 14 |
| packages | 11 |
| feedback-front | 10 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 3643 |
| .ts | 3597 |
| .json | 162 |
| .txt | 69 |
| .mjs | 61 |
| .js | 54 |
| .py | 40 |
| .sh | 35 |
| [no-ext] | 12 |
| .yml | 8 |
| .astro | 6 |
| .cjs | 6 |
| .html | 3 |
| .css | 2 |
| .pem | 2 |
| .toml | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
