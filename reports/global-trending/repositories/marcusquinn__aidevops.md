# marcusquinn/aidevops

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/marcusquinn/aidevops |
| local path | sources/marcusquinn__aidevops |
| HEAD | 433ebe3 |
| stars/forks | 269 / 51 |
| language | Shell |
| license |  |
| pushedAt | 2026-06-18T00:20:01Z |
| trendScore / priorityScore | 139 / 452 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | _reports/examples/README.md, .agents/scripts/tests/templates/README.md, .agents/tests/comprehension/README.md |
| MCP / agent interoperability | 295 | templates/home/.agents/README.md, templates/home/git/.agent/README.md, .agents/AGENTS.md |
| Coding agent / software automation | 249 | .agents/tools/design/library/README.md, .agents/AGENTS.md, tests/docker/README.md |
| Security / supply chain | 220 | .agents/scripts/simplex-bot/README.md, .agents/tools/design/library/README.md, templates/home/.agents/README.md |
| Developer tools / DX | 174 | .agents/scripts/tests/templates/README.md, .agents/scripts/simplex-bot/README.md, .agents/tools/design/library/README.md |
| Observability / evaluation | 138 | .agents/tests/comprehension/README.md, .agents/tools/design/library/README.md, .agents/AGENTS.md |
| Cloud native / infrastructure | 64 | .agents/scripts/simplex-bot/README.md, tests/docker/README.md, .agents/scripts/simplex-bot/package.json |
| Data / ML platform | 55 | .agents/tools/design/library/README.md, .agents/scripts/higgsfield/remotion/package.json, _reports/examples/llm-visibility-toolbox/report.md |
| Database / data infrastructure | 46 | .agents/scripts/simplex-bot/README.md, _reports/examples/client-ai-search-audit/report.md, _reports/examples/llm-visibility-toolbox/report.md |
| RAG / retrieval / knowledge | 33 | .agents/AGENTS.md, _reports/examples/client-ai-search-audit/report.md, _reports/examples/llm-visibility-toolbox/report.md |
| Frontend / app framework | 19 | .agents/tools/design/library/README.md, .agents/scripts/higgsfield/remotion/package.json, .agents/scripts/higgsfield/remotion/tsconfig.json |
| Local LLM / inference | 1 | .agents/tools/design/library/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Ruby |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 5208 |
| manifests | 40 |
| docs | 2823 |
| tests | 793 |
| ci/ops | 57 |
| spec artifacts | 50 |
| agent instruction files | 11 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AI DevOps Framework | AI DevOps Framework / **The Aim** / **Why This Framework?** / Quick Reference / Key Commands / Agent Structure / What You Can Ask aidevops To Do / **Enterprise-Grade Quality & Security** / Report creation, previews, and PDF exports / **Security Notice** | <! SPDX License Identifier MIT <! SPDX FileCopyrightText 2025 2026 Marcus Quinn AI DevOps Framework aidevops.sh https //aidevops.sh is an OpenCode https //opencode.ai/ plugin and AI DevOps framework for people who want AI to do useful work across code, infrastructure, business, marketing, content, and creative projects without turning every job into another long, fragile chat. Most AI tools still leave you doing the hard coordination yourself finding the right context, choosing a model, protecting secrets, managing branches, watching CI, spotting stuck work, and remembering what went wrong last time. aidevops puts structure around that work so agents can share context, work safely in paralle |


## Key Files

### Manifests

- _reports/examples/README.md
- .agents/scripts/tests/templates/README.md
- .agents/tests/comprehension/README.md
- .agents/rules/README.md
- .agents/scripts/simplex-bot/README.md
- .agents/tools/design/library/README.md
- .agents/tools/markdoc/schemas/README.md
- templates/home/.agents/README.md
- templates/home/git/.agent/README.md
- .agents/AGENTS.md
- AGENTS.md
- .agents/templates/agent-source-repo/.agents/AGENTS.md
- .agents/templates/agent-source-repo/AGENTS.md
- .agents/templates/plugin-template/AGENTS.md
- templates/home/AGENTS.md
- templates/home/git/AGENTS.md
- _cases/README.md
- _feedback/README.md
- _inbox/README.md
- _knowledge/README.md


### Spec / Docs / Prompt Artifacts

- .agents/AGENTS.md
- AGENTS.md
- .agents/templates/agent-source-repo/.agents/AGENTS.md
- .agents/templates/agent-source-repo/AGENTS.md
- .agents/templates/plugin-template/AGENTS.md
- templates/home/AGENTS.md
- templates/home/git/AGENTS.md
- CLAUDE.md
- requirements.txt
- .agents/prompts/build.txt
- .agents/prompts/worker-efficiency-protocol.md
- .agents/aidevops/architecture.md
- .agents/aidevops/requirements.md
- .agents/tools/design/library/brands/airbnb/DESIGN.md
- .agents/tools/design/library/brands/airtable/DESIGN.md
- .agents/tools/design/library/brands/apple/DESIGN.md
- .agents/tools/design/library/brands/arxiv/DESIGN.md
- .agents/tools/design/library/brands/axel/DESIGN.md
- .agents/tools/design/library/brands/bento/DESIGN.md
- .agents/tools/design/library/brands/bmw/DESIGN.md


### Agent Instruction Files

- .agents/AGENTS.md
- AGENTS.md
- .agents/templates/agent-source-repo/.agents/AGENTS.md
- .agents/templates/agent-source-repo/AGENTS.md
- .agents/templates/plugin-template/AGENTS.md
- templates/home/AGENTS.md
- templates/home/git/AGENTS.md
- CLAUDE.md
- .agents/prompts/build.txt
- .agents/prompts/worker-efficiency-protocol.md
- .github/instructions/codacy.instructions.md


## Top Directories

| dir | count |
| --- | --- |
| .agents | 4132 |
| todo | 646 |
| tests | 98 |
| configs | 91 |
| _reports | 66 |
| .github | 59 |
| .opencode | 27 |
| .wiki | 10 |
| templates | 8 |
| _campaigns | 7 |
| _knowledge | 5 |
| _cases | 3 |
| _inbox | 3 |
| .qlty | 3 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 2823 |
| .sh | 1621 |
| .py | 133 |
| .mjs | 107 |
| .json | 104 |
| .txt | 100 |
| .yml | 66 |
| .html | 53 |
| [no-ext] | 48 |
| .ts | 45 |
| .conf | 18 |
| .yaml | 17 |
| .js | 12 |
| .tsx | 12 |
| .eml | 8 |
| .tmpl | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
