# asklokesh/loki-mode

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/asklokesh/loki-mode |
| local path | sources/asklokesh__loki-mode |
| HEAD | 4acc5d2 |
| stars/forks | 980 / 191 |
| language | Shell |
| license |  |
| pushedAt | 2026-06-17T22:37:55Z |
| trendScore / priorityScore | 140 / 463 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 313 | examples/README.md, agent-skills/README.md, docs/certification/README.md |
| Cloud native / infrastructure | 242 | docs/certification/README.md, benchmarks/tasks/README.md, README.md |
| Developer tools / DX | 237 | examples/README.md, loki-ts/tests/fixtures/build_prompt/README.md, docs/certification/README.md |
| Security / supply chain | 178 | agent-skills/README.md, docs/certification/README.md, docs/walkthrough/README.md |
| Coding agent / software automation | 177 | examples/README.md, loki-ts/tests/fixtures/build_prompt/README.md, docs/certification/README.md |
| Frontend / app framework | 117 | agent-skills/README.md, docs/screenshots/README.md, README.md |
| Observability / evaluation | 79 | docs/screenshots/README.md, docs/walkthrough/README.md, benchmarks/magic-ab/README.md |
| MCP / agent interoperability | 74 | README.md, vscode-extension/README.md, plugins/loki-mode/README.md |
| Data / ML platform | 63 | benchmarks/submission-template/README.md, benchmarks/tasks/README.md, README.md |
| Database / data infrastructure | 45 | examples/README.md, README.md, templates/README.md |
| RAG / retrieval / knowledge | 40 | README.md, templates/README.md, CLAUDE.md |
| Local LLM / inference | 2 | package.json, sdk/python/pyproject.toml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 3364 |
| manifests | 40 |
| docs | 456 |
| tests | 1095 |
| ci/ops | 93 |
| spec artifacts | 50 |
| agent instruction files | 12 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Loki Mode | Loki Mode / The spec-driven autonomous builder with verified completion. / Why Loki Mode? / Get Started in 30 Seconds / Runtime Architecture / What You Can Build / What To Expect / Architecture / RARV Cycle / 41 Agent Roles | <div align="center" Loki Mode The spec driven autonomous builder with verified completion. The free, source available autonomous coding agent by Autonomi https //www.autonomi.dev/ . Same Loki CLI, SDK, and MCP for everyone; the commercial editions for teams and enterprises are sold under the Autonomi brand Autonomi Cloud, Autonomi Enterprise . Hand it a spec. It does not accept "done" on an empty diff or failing tests. ! npm version https //img.shields.io/npm/v/loki mode?style=for the badge&logo=npm&logoColor=white&color=553DE9 https //www.npmjs.com/package/loki mode ! npm downloads https //img.shields.io/npm/dt/loki mode?style=for the badge&logo=npm&logoColor=white&color=1FC5A8&label=downlo |


## Key Files

### Manifests

- examples/README.md
- agent-skills/README.md
- loki-ts/tests/fixtures/build_prompt/README.md
- docs/certification/README.md
- docs/screenshots/README.md
- docs/walkthrough/README.md
- benchmarks/magic-ab/README.md
- benchmarks/submission-template/README.md
- benchmarks/tasks/README.md
- api-examples/README.md
- demo/README.md
- api/README.md
- autonomy/README.md
- blog/README.md
- dashboard-ui/README.md
- loki-ts/README.md
- README.md
- templates/README.md
- tests/fixtures/legacy-checkout-app/README.md
- tests/live/README.md


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- tests/fixtures/project-graph/acme/api/CLAUDE.md
- tests/fixtures/project-graph/acme/CLAUDE.md
- tests/fixtures/project-graph/acme/service/CLAUDE.md
- tests/fixtures/project-graph/acme/ui/CLAUDE.md
- references/agents.md
- skills/agents.md
- mcp/requirements.txt
- dashboard/requirements.txt
- examples/openspec/brownfield-delta/specs/clients/spec.md
- loki-ts/tests/fixtures/build_prompt/fixture-10/.loki/magic/specs/Button.md
- loki-ts/tests/fixtures/build_prompt/fixture-10/.loki/magic/specs/Modal.md
- loki-ts/tests/fixtures/build_prompt/fixture-27/.loki/magic/specs/Accordion.md
- loki-ts/tests/fixtures/build_prompt/fixture-27/.loki/magic/specs/Button.md
- loki-ts/tests/fixtures/build_prompt/fixture-27/.loki/magic/specs/Card.md
- loki-ts/tests/fixtures/build_prompt/fixture-27/.loki/magic/specs/Modal.md
- loki-ts/tests/fixtures/build_prompt/fixture-27/.loki/magic/specs/Tabs.md
- loki-ts/tests/fixtures/build_prompt/fixture-45/.loki/magic/specs/Accordion.md
- loki-ts/tests/fixtures/build_prompt/fixture-45/.loki/magic/specs/Avatar.md
- loki-ts/tests/fixtures/build_prompt/fixture-45/.loki/magic/specs/Badge.md


### Agent Instruction Files

- CLAUDE.md
- tests/fixtures/project-graph/acme/api/CLAUDE.md
- tests/fixtures/project-graph/acme/CLAUDE.md
- tests/fixtures/project-graph/acme/service/CLAUDE.md
- tests/fixtures/project-graph/acme/ui/CLAUDE.md
- references/agents.md
- skills/agents.md
- .github/workflows/claude.yml
- .claude/commands/loki-spec-status.md
- .claude/settings.json
- .claude/commands/loki-grill.md
- .claude/commands/loki-verify.md


## Top Directories

| dir | count |
| --- | --- |
| benchmarks | 1040 |
| loki-ts | 673 |
| tests | 440 |
| web-app | 272 |
| docs | 124 |
| src | 74 |
| autonomy | 66 |
| dashboard-ui | 66 |
| dashboard | 54 |
| deploy | 49 |
| vscode-extension | 42 |
| examples | 35 |
| .github | 32 |
| memory | 32 |


## Extension Distribution

| ext | count |
| --- | --- |
| .patch | 649 |
| .py | 630 |
| .md | 448 |
| .sh | 378 |
| .js | 251 |
| .ts | 229 |
| .txt | 206 |
| .tsx | 157 |
| .json | 119 |
| [no-ext] | 90 |
| .sha256 | 60 |
| .yaml | 36 |
| .yml | 34 |
| .html | 27 |
| .tf | 15 |
| .css | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
