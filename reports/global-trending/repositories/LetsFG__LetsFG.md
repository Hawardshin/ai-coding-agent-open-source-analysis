# LetsFG/LetsFG

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/LetsFG/LetsFG |
| local path | sources/LetsFG__LetsFG |
| HEAD | 7531bb0 |
| stars/forks | 1175 / 60 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T17:50:50Z |
| trendScore / priorityScore | 159 / 414 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 382 | sdk/mcp/README.md, AGENTS.md, README.md |
| Developer tools / DX | 363 | sdk/mcp/README.md, AGENTS.md, README.md |
| MCP / agent interoperability | 290 | sdk/mcp/README.md, AGENTS.md, README.md |
| Coding agent / software automation | 50 | sdk/mcp/README.md, AGENTS.md, README.md |
| Security / supply chain | 33 | sdk/mcp/README.md, AGENTS.md, docs/TESTING.md |
| Cloud native / infrastructure | 20 | docker-compose.yml, docs/TESTING.md, docs/api-onboarding.md |
| Observability / evaluation | 6 | AGENTS.md, docs/agent-guide.md, docs/architecture-guide.md |
| Database / data infrastructure | 5 | README.md, CLAUDE.md, docs/TESTING.md |
| Frontend / app framework | 5 | AGENTS.md, docs/self-hosting.md, sdk/python/letsfg/client.py |
| Data / ML platform | 2 | docs/architecture-guide.md, docs/tutorials.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 119 |
| manifests | 13 |
| docs | 40 |
| tests | 24 |
| ci/ops | 6 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | We're LetsFG — a community of travelers. | We're LetsFG — a community of travelers. / Join the community. Help others find cheaper flights. Spread the word.<br>⭐ Star the repo. Share with a friend ✈️ / Your AI agent just learned to book flights. / Supporters / Three ways to use LetsFG / Real prices: LetsFG vs Google Flights / Try it right now — no install needed / 🌐 [**Search on letsfg.co**](https://letsfg.co) / Pricing / Why developers star this repo | <div align="center" <a href="https //github.com/LetsFG/LetsFG" <img src="assets/banner.png" alt="LetsFG" width="600" </a <br We're LetsFG — a community of travelers. Finding a flight shouldn't mean checking 47 websites. Or 3 hours of searching.<br Or having that feeling you could've got a better deal if you'd just waited a little longer. So we built something about it. <br No markup. No tracking. No price that goes up because you looked twice. <br <img src="https //img.shields.io/badge/⭐ Star to show love FFD700?style=for the badge&logoColor=black" alt="Star to show love" https //github.com/LetsFG/LetsFG &nbsp;&nbsp; <img src="https //img.shields.io/badge/🌐 Try on letsfg.co 4CAF50?style=for |


## Key Files

### Manifests

- sdk/mcp/README.md
- AGENTS.md
- README.md
- sdk/js/README.md
- sdk/python/README.md
- CLAUDE.md
- sdk/mcp/package.json
- sdk/mcp/tsconfig.json
- docker-compose.yml
- Dockerfile
- sdk/js/package.json
- sdk/js/tsconfig.json
- sdk/python/pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| sdk | 61 |
| docs | 24 |
| .github | 3 |
| agent-skills-contribution | 3 |
| skills | 3 |
| models | 2 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .mcp.json | 1 |
| AGENTS.md | 1 |
| assets | 1 |
| CLAUDE.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| context7.json | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 39 |
| .md | 35 |
| .json | 15 |
| .ts | 8 |
| [no-ext] | 7 |
| .yml | 5 |
| .css | 2 |
| .js | 2 |
| .yaml | 2 |
| .mp4 | 1 |
| .python | 1 |
| .toml | 1 |
| .txt | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
