# homeassistant-ai/ha-mcp

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/homeassistant-ai/ha-mcp |
| local path | sources/homeassistant-ai__ha-mcp |
| HEAD | b2a8ead |
| stars/forks | 3449 / 138 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T20:52:06Z |
| trendScore / priorityScore | 152 / 471 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 500 | tests/AGENTS.md, AGENTS.md, tests/uat/AGENTS.md |
| Cloud native / infrastructure | 489 | tests/AGENTS.md, AGENTS.md, site/AGENTS.md |
| Security / supply chain | 296 | AGENTS.md, homeassistant-addon/README.md, README.md |
| AI agent / orchestration | 267 | AGENTS.md, tests/uat/AGENTS.md, README.md |
| Developer tools / DX | 54 | AGENTS.md, site/AGENTS.md, tests/README.md |
| Observability / evaluation | 37 | AGENTS.md, README.md, tests/uat/stories/README.md |
| Coding agent / software automation | 32 | AGENTS.md, site/AGENTS.md, README.md |
| Frontend / app framework | 26 | site/package.json, docs/beta.md, tests/initial_test_state/custom_components/hacs/frontend.py |
| RAG / retrieval / knowledge | 23 | AGENTS.md, README.md, docs/beta.md |
| Local LLM / inference | 16 | README.md, tests/uat/README.md, tests/uat/openai_agent.py |
| Data / ML platform | 15 | AGENTS.md, README.md, docs/FAQ.md |
| Database / data infrastructure | 5 | README.md, .github/workflows/codeql-quality.yml, custom_components/ha_mcp_tools/const.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 794 |
| manifests | 27 |
| docs | 44 |
| tests | 499 |
| ci/ops | 36 |
| spec artifacts | 17 |
| agent instruction files | 15 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | 🚀 Get Started / Full guide to get you started with Claude Desktop (~10 min) / Quick install (~5 min) / 🧙 Setup Wizard for 15+ clients / 💬 What Can You Do With It? / ✨ Features / 🆚 ha-mcp vs. Home Assistant's built-in MCP Server / 🔌 Custom Component (ha_mcp_tools) *(beta)* / Install using HACS (recommended) / Install manually | Breaking change v7.3.0 ha config set yaml has been moved to beta docs/beta.md . <div align="center" <img src="docs/img/ha mcp logo.png" alt="Home Assistant MCP Server Logo" width="300"/ The Unofficial and Awesome Home Assistant MCP Server <! mcp name io.github.homeassistant ai/ha mcp <p align="center" <img src="https //img.shields.io/badge/tools 84 blue" alt="95+ Tools" <a href="https //github.com/homeassistant ai/ha mcp/releases" <img src="https //img.shields.io/github/v/release/homeassistant ai/ha mcp" alt="Release" </a <a href="https //github.com/homeassistant ai/ha mcp/actions/workflows/e2e tests.yml" <img src="https //img.shields.io/github/actions/workflow/status/homeassistant ai/ha mcp |


## Key Files

### Manifests

- tests/AGENTS.md
- AGENTS.md
- site/AGENTS.md
- tests/uat/AGENTS.md
- site/src/data/AGENTS.md
- tests/README.md
- homeassistant-addon-dev/README.md
- homeassistant-addon/README.md
- README.md
- site/README.md
- tests/haos_image_build/README.md
- tests/initial_test_state/custom_components/hacs/validate/README.md
- tests/lab-setup/README.md
- tests/uat/README.md
- tests/uat/stories/README.md
- docker-compose.yml
- Dockerfile
- homeassistant-addon-dev/Dockerfile
- homeassistant-addon-webhook-proxy/Dockerfile
- homeassistant-addon/Dockerfile


### Spec / Docs / Prompt Artifacts

- tests/AGENTS.md
- AGENTS.md
- site/AGENTS.md
- tests/uat/AGENTS.md
- site/src/data/AGENTS.md
- tests/haos_image_build/requirements.txt
- docs/superpowers/specs/2026-05-21-1288-auto-backup-design.md
- .claude/skills/bat-story-eval/references/evaluation-protocol.md
- .claude/skills/bat-story-eval/references/regression-protocol.md
- .claude/skills/bat-story-eval/SKILL.md
- .claude/settings.json
- .claude/skills/bat-adhoc/SKILL.md
- .claude/skills/contrib-pr-review/SKILL.md
- .claude/skills/issue-analysis/SKILL.md
- .claude/skills/issue-to-pr-resolver/SKILL.md
- .claude/skills/my-pr-checker/SKILL.md
- .claude/skills/wt/SKILL.md


### Agent Instruction Files

- tests/AGENTS.md
- AGENTS.md
- site/AGENTS.md
- tests/uat/AGENTS.md
- site/src/data/AGENTS.md
- .claude/skills/bat-story-eval/references/evaluation-protocol.md
- .claude/skills/bat-story-eval/references/regression-protocol.md
- .claude/skills/bat-story-eval/SKILL.md
- .claude/settings.json
- .claude/skills/bat-adhoc/SKILL.md
- .claude/skills/contrib-pr-review/SKILL.md
- .claude/skills/issue-analysis/SKILL.md
- .claude/skills/issue-to-pr-resolver/SKILL.md
- .claude/skills/my-pr-checker/SKILL.md
- .claude/skills/wt/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| tests | 497 |
| src | 106 |
| site | 50 |
| .github | 39 |
| homeassistant-addon-webhook-proxy | 12 |
| scripts | 11 |
| .claude | 10 |
| custom_components | 9 |
| docs | 7 |
| homeassistant-addon | 7 |
| packaging | 6 |
| homeassistant-addon-dev | 5 |
| rules | 3 |
| .gemini | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 533 |
| .md | 44 |
| .yml | 44 |
| .yaml | 43 |
| .json | 24 |
| .svg | 24 |
| [no-ext] | 21 |
| .astro | 12 |
| .mjs | 6 |
| .sh | 4 |
| .js | 3 |
| .css | 2 |
| .1 | 1 |
| .analytics | 1 |
| .area_registry | 1 |
| .auth | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
