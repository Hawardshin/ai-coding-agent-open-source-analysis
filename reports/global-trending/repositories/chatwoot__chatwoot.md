# chatwoot/chatwoot

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/chatwoot/chatwoot |
| local path | sources/chatwoot__chatwoot |
| HEAD | f991876 |
| stars/forks | 32363 / 7713 |
| language | Ruby |
| license | NOASSERTION |
| pushedAt | 2026-06-18T00:26:58Z |
| trendScore / priorityScore | 161 / 436 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 414 | AGENTS.md, README.md, app/javascript/dashboard/api/specs/agents.spec.js |
| Observability / evaluation | 78 | AGENTS.md, README.md, package.json |
| Frontend / app framework | 72 | AGENTS.md, app/javascript/dashboard/composables/spec/useAgentsList.spec.js, docker-compose.yaml |
| Database / data infrastructure | 52 | AGENTS.md, .devcontainer/docker-compose.yml, docker-compose.yaml |
| Cloud native / infrastructure | 33 | README.md, .devcontainer/docker-compose.yml, docker-compose.yaml |
| Security / supply chain | 26 | README.md, spec/jobs/agent_bots/webhook_job_spec.rb, spec/lib/integrations/llm_instrumentation_spec.rb |
| Developer tools / DX | 23 | AGENTS.md, spec/coverage_helper.rb, docker/Dockerfile |
| RAG / retrieval / knowledge | 8 | spec/enterprise/services/captain/llm/conversation_faq_service_spec.rb, spec/lib/integrations/llm_instrumentation_spec.rb |
| Coding agent / software automation | 4 | AGENTS.md |
| MCP / agent interoperability | 2 | tests/playwright/package.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Ruby |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 15 |
| docs | 8 |
| tests | 1333 |
| ci/ops | 24 |
| spec artifacts | 50 |
| agent instruction files | 7 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Chatwoot | Chatwoot / ✨ Captain – AI Agent for Support / 💬 Omnichannel Support Desk / 📚 Help center portal / 🗂️ Other features / Documentation / Translation process / Branching model / Deployment / Heroku one-click deploy | <img src="./.github/screenshots/header.png gh light mode only" width="100%" alt="Header light mode"/ <img src="./.github/screenshots/header dark.png gh dark mode only" width="100%" alt="Header dark mode"/ Chatwoot The modern customer support platform, an open source alternative to Intercom, Zendesk, Salesforce Service Cloud etc. <p <img src="https //img.shields.io/circleci/build/github/chatwoot/chatwoot" alt="CircleCI Badge" <a href="https //hub.docker.com/r/chatwoot/chatwoot/" <img src="https //img.shields.io/docker/pulls/chatwoot/chatwoot" alt="Docker Pull Badge" </a <a href="https //hub.docker.com/r/chatwoot/chatwoot/" <img src="https //img.shields.io/docker/cloud/build/chatwoot/chatwoot" |


## Key Files

### Manifests

- AGENTS.md
- README.md
- tests/playwright/README.md
- .devcontainer/docker-compose.yml
- .devcontainer/Dockerfile
- docker-compose.yaml
- docker/Dockerfile
- Makefile
- package.json
- tests/playwright/package.json
- tests/playwright/tsconfig.json
- vite.config.ts
- docker-compose.test.yaml
- .devcontainer/docker-compose.base.yml
- docker-compose.production.yaml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- spec/coverage_helper.rb
- app/javascript/dashboard/api/specs/agentBots.spec.js
- app/javascript/dashboard/api/specs/agentCapacityPolicies.spec.js
- app/javascript/dashboard/api/specs/agents.spec.js
- app/javascript/dashboard/api/specs/assignableAgents.spec.js
- app/javascript/dashboard/api/specs/channel/twitterClient.spec.js
- app/javascript/dashboard/api/specs/tiktokClient.spec.js
- app/javascript/dashboard/composables/spec/fixtures/agentFixtures.js
- app/javascript/dashboard/composables/spec/useAgentsList.spec.js
- app/javascript/dashboard/helper/specs/agentHelper.spec.js
- app/javascript/dashboard/helper/specs/fixtures/agentFixtures.js
- app/javascript/dashboard/store/modules/specs/agentBots/agentBots.spec.js
- app/javascript/dashboard/store/modules/specs/agentBots/fixtures.js
- app/javascript/dashboard/store/modules/specs/agentBots/getters.spec.js
- app/javascript/dashboard/store/modules/specs/agentBots/mutations.spec.js
- app/javascript/dashboard/store/modules/specs/agentCapacityPolicies/actions.spec.js
- app/javascript/dashboard/store/modules/specs/agentCapacityPolicies/fixtures.js
- app/javascript/dashboard/store/modules/specs/agentCapacityPolicies/getters.spec.js
- app/javascript/dashboard/store/modules/specs/agentCapacityPolicies/mutations.spec.js


### Agent Instruction Files

- AGENTS.md
- enterprise/lib/captain/prompts/assistant.liquid
- enterprise/lib/captain/prompts/conversation_completion.liquid
- enterprise/lib/captain/prompts/scenario.liquid
- enterprise/lib/captain/prompts/snippets/campaign.liquid
- enterprise/lib/captain/prompts/snippets/contact.liquid
- enterprise/lib/captain/prompts/snippets/conversation.liquid


## Top Directories

| dir | count |
| --- | --- |
| app | 5731 |
| spec | 912 |
| enterprise | 416 |
| swagger | 294 |
| config | 191 |
| db | 140 |
| lib | 133 |
| public | 44 |
| .github | 23 |
| tests | 12 |
| bin | 10 |
| deployment | 9 |
| .devcontainer | 6 |
| docker | 6 |


## Extension Distribution

| ext | count |
| --- | --- |
| .json | 2565 |
| .rb | 2193 |
| .js | 980 |
| .vue | 952 |
| .yml | 463 |
| .jbuilder | 351 |
| .erb | 140 |
| [no-ext] | 51 |
| .svg | 45 |
| .eml | 40 |
| .liquid | 40 |
| .scss | 39 |
| .woff2 | 38 |
| .rake | 26 |
| .mp3 | 11 |
| .ts | 10 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
