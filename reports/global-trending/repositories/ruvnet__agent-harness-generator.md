# ruvnet/agent-harness-generator

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/ruvnet/agent-harness-generator |
| local path | sources/ruvnet__agent-harness-generator |
| HEAD | b2506a1 |
| stars/forks | 164 / 15 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:21:34Z |
| trendScore / priorityScore | 168 / 475 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | examples/README.md, examples/education/README.md, examples/host-tour/README.md |
| MCP / agent interoperability | 500 | examples/federation/README.md, examples/multi-host/README.md, examples/quickstart/README.md |
| Coding agent / software automation | 401 | examples/README.md, examples/education/README.md, examples/host-tour/README.md |
| Developer tools / DX | 263 | examples/education/README.md, examples/federation/README.md, examples/host-tour/README.md |
| Security / supply chain | 207 | examples/federation/README.md, packages/agent-harness-generator-lib/README.md, examples-packages/coding/README.md |
| Data / ML platform | 93 | examples/README.md, examples/quickstart/README.md, packages/agent-harness-generator-lib/README.md |
| RAG / retrieval / knowledge | 90 | packages/agent-harness-generator-lib/README.md, packages/create-agent-harness/README.md, examples-packages/README.md |
| Frontend / app framework | 40 | apps/web-ui/README.md, apps/web-ui/package.json, apps/web-ui/tsconfig.json |
| Observability / evaluation | 38 | examples/host-tour/README.md, examples-packages/devops/README.md, examples-packages/example-huggingface/README.md |
| Cloud native / infrastructure | 33 | examples-packages/devops/README.md, examples-packages/example-ads/README.md, examples-packages/example-aws/README.md |
| Database / data infrastructure | 30 | examples-packages/devops/README.md, examples-packages/education/README.md, examples-packages/example-datadog/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1071 |
| manifests | 40 |
| docs | 209 |
| tests | 149 |
| ci/ops | 8 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | MetaHarness | MetaHarness / Mint a custom AI agent harness from any repo. / What this is / What it gives you / New / Tune it to your project — then ship it as your own npm / Try it in 30 seconds / In the browser — zero install, nothing leaves the page / Or in the terminal — the same harness (behaviourally equivalent output) / Hosts | <div align="center" MetaHarness Mint a custom AI agent harness from any repo. npx metaharness · open the Studio → https //ruvnet.github.io/agent harness generator/ <sub Repo ruvnet/agent harness generator · CLI metaharness · Library @ruvnet/agent harness generator </sub ! Open the Studio https //img.shields.io/badge/Studio open in browser ↗ 7c5cff?style=for the badge&logo=githubpages&logoColor=white https //ruvnet.github.io/agent harness generator/ ! User guide https //img.shields.io/badge/User guide plain language 22c55e?style=for the badge docs/USERGUIDE.md ! Tests — 568 passing https //img.shields.io/badge/tests 568%20passing 22c55e?style=for the badge docs/ARCHITECTURE.md ! npm publish s |


## Key Files

### Manifests

- examples/README.md
- examples/education/README.md
- examples/federation/README.md
- examples/host-tour/README.md
- examples/multi-host/README.md
- examples/quickstart/README.md
- examples/vertical-tour/README.md
- packages/agent-harness-generator-lib/README.md
- packages/create-agent-harness/README.md
- examples-packages/README.md
- __tests__/browser-smoke/README.md
- .codex/skills/example-harness/README.md
- examples-packages/claude-code/README.md
- examples-packages/codex/README.md
- examples-packages/coding/README.md
- examples-packages/copilot/README.md
- examples-packages/devops/README.md
- examples-packages/education/README.md
- examples-packages/example-ads/README.md
- examples-packages/example-aws/README.md


### Spec / Docs / Prompt Artifacts

- docs/ARCHITECTURE.md
- packages/create-agent-harness/templates/vertical_agentics/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_crm/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_education/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_exotic/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_gaming/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_gaming/.claude/skills/playtest-recap/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_repo-maintainer/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_ruview/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_sales/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/minimal/.claude/settings.json.tmpl
- packages/create-agent-harness/templates/vertical_advertising/.claude/commands/doctor.md.tmpl
- packages/create-agent-harness/templates/vertical_advertising/.claude/settings.json.tmpl
- packages/create-agent-harness/templates/vertical_advertising/.claude/skills/media-plan/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_agentics/.claude/commands/doctor.md.tmpl
- packages/create-agent-harness/templates/vertical_agentics/.claude/settings.json.tmpl
- packages/create-agent-harness/templates/vertical_agentics/.claude/skills/run-swarm/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_ai/.claude/commands/doctor.md.tmpl
- packages/create-agent-harness/templates/vertical_ai/.claude/settings.json.tmpl
- packages/create-agent-harness/templates/vertical_ai/.claude/skills/eval-report/SKILL.md.tmpl


### Agent Instruction Files

- packages/create-agent-harness/templates/vertical_agentics/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_crm/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_education/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_exotic/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_gaming/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_gaming/.claude/skills/playtest-recap/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_repo-maintainer/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_ruview/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_sales/.claude/skills/memory-inspect/SKILL.md.tmpl
- packages/create-agent-harness/templates/minimal/.claude/settings.json.tmpl
- packages/create-agent-harness/templates/vertical_advertising/.claude/commands/doctor.md.tmpl
- packages/create-agent-harness/templates/vertical_advertising/.claude/settings.json.tmpl
- packages/create-agent-harness/templates/vertical_advertising/.claude/skills/media-plan/SKILL.md.tmpl
- packages/create-agent-harness/templates/vertical_agentics/.claude/commands/doctor.md.tmpl
- packages/create-agent-harness/templates/vertical_agentics/.claude/settings.json.tmpl


## Top Directories

| dir | count |
| --- | --- |
| packages | 574 |
| examples-packages | 168 |
| docs | 110 |
| __tests__ | 46 |
| apps | 45 |
| .codex | 27 |
| scripts | 25 |
| crates | 24 |
| .claude-plugin | 16 |
| examples | 12 |
| .github | 8 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .tmpl | 294 |
| .ts | 235 |
| .md | 176 |
| .json | 139 |
| .mjs | 71 |
| [no-ext] | 59 |
| .lean | 33 |
| .toml | 20 |
| .rs | 19 |
| .tsx | 10 |
| .yml | 8 |
| .html | 2 |
| .js | 2 |
| .css | 1 |
| .example | 1 |
| .sh | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
