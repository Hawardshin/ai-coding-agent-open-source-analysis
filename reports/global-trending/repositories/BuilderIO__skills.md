# BuilderIO/skills

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/BuilderIO/skills |
| local path | sources/BuilderIO__skills |
| HEAD | a072671 |
| stars/forks | 877 / 38 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-17T23:30:10Z |
| trendScore / priorityScore | 138 / 345 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 316 | skills/agent-watchdog/README.md, README.md, skills/efficient-fable/README.md |
| Coding agent / software automation | 64 | skills/agent-watchdog/README.md, README.md, skills/efficient-fable/README.md |
| MCP / agent interoperability | 51 | README.md, skills/efficient-fable/README.md, skills/quick-recap/README.md |
| Security / supply chain | 38 | README.md, skills/plow-ahead/README.md, skills/read-the-damn-docs/README.md |
| Developer tools / DX | 31 | README.md, skills/read-the-damn-docs/README.md, skills/visual-plan/README.md |
| Frontend / app framework | 19 | skills/read-the-damn-docs/README.md, skills/read-the-damn-docs/SKILL.md, skills/visual-plan/references/document-quality.md |
| Database / data infrastructure | 15 | skills/visual-plan/README.md, skills/visual-recap/README.md, skills/read-the-damn-docs/SKILL.md |
| Cloud native / infrastructure | 12 | skills/visual-plan/references/document-quality.md, skills/visual-plan/references/wireframe.md, skills/visual-recap/references/wireframe.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, devtools, frontend, frontendStack, infra, llmFramework, mcp, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 40 |
| manifests | 12 |
| docs | 27 |
| tests | 0 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Skills for coding agents | Skills for coding agents / Quick install recommended skills / Skills / [`/visual-plan`](skills/visual-plan/README.md) / [`/visual-recap`](skills/visual-recap/README.md) / [`/agent-watchdog`](skills/agent-watchdog/README.md) / [`/plan-arbiter`](skills/plan-arbiter/README.md) / [`/plow-ahead`](skills/plow-ahead/README.md) / [`/efficient-fable`](skills/efficient-fable/README.md) / [`/efficient-frontier`](skills/efficient-frontier/README.md) | Skills for coding agents Small, composable skills for coding agents. These skills are for teams that want the agent to stay sharp where judgment matters orchestration, review, planning, validation, docs discipline, and clear communication. They are not a giant process framework. Install the pieces you want, adapt them to your project, and let the model keep room to think. Quick install recommended skills The interactive picker puts /visual plan and /visual recap first and selects only those by default. See the full CLI docs below install . Skills /visual plan skills/visual plan/README.md Turn ordinary text plans into rich interactive visual plans with diagrams, file maps, annotated code, ope |


## Key Files

### Manifests

- skills/agent-watchdog/README.md
- README.md
- skills/efficient-fable/README.md
- skills/efficient-frontier/README.md
- skills/plan-arbiter/README.md
- skills/plow-ahead/README.md
- skills/quick-recap/README.md
- skills/read-the-damn-docs/README.md
- skills/stay-within-limits/README.md
- skills/visual-plan/README.md
- skills/visual-recap/README.md
- package.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| skills | 30 |
| .agents | 2 |
| .github | 2 |
| .claude-plugin | 1 |
| .codex-plugin | 1 |
| LICENSE | 1 |
| package.json | 1 |
| README.md | 1 |
| scripts | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 27 |
| .yaml | 5 |
| .json | 3 |
| .yml | 2 |
| .excalidraw | 1 |
| .mjs | 1 |
| [no-ext] | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
