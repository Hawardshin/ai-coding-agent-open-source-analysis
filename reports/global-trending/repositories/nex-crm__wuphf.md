# nex-crm/wuphf

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/nex-crm/wuphf |
| local path | sources/nex-crm__wuphf |
| HEAD | a582774 |
| stars/forks | 1190 / 86 |
| language | Go |
| license |  |
| pushedAt | 2026-06-18T00:23:37Z |
| trendScore / priorityScore | 147 / 462 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/dogfood/README.md, docs/tutorials/README.md, docs/tutorials/rich-html-artifacts/README.md |
| Developer tools / DX | 161 | packages/protocol/AGENTS.md, npm/README.md, README.md |
| MCP / agent interoperability | 158 | packages/protocol/AGENTS.md, README.md, docs/specs/notebook-wiki-promise-pr8-memory-workflow-gate.md |
| Coding agent / software automation | 144 | packages/protocol/AGENTS.md, npm/README.md, README.md |
| Frontend / app framework | 129 | README.md, assets/avatar-system/README.md, web/e2e/screenshots/README.md |
| RAG / retrieval / knowledge | 117 | README.md, bench/slice-1/README.md, docs/specs/core-loop-icp-eval.md |
| Security / supply chain | 107 | packages/protocol/AGENTS.md, packages/protocol/testdata/README.md, README.md |
| Observability / evaluation | 84 | evals/README.md, evals/harness/README.md, npm/README.md |
| Database / data infrastructure | 41 | packages/protocol/AGENTS.md, packages/protocol/testdata/README.md, README.md |
| Cloud native / infrastructure | 39 | docs/tutorials/rich-html-artifacts/README.md, npm/README.md, README.md |
| Data / ML platform | 28 | docs/tutorials/README.md, docs/specs/notebook-wiki-promise-pr8-memory-workflow-gate.md, docs/specs/sota-uplift-icp-eval.md |
| Local LLM / inference | 9 | npm/README.md, README.md, docs/specs/structural-changes.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2559 |
| manifests | 35 |
| docs | 356 |
| tests | 890 |
| ci/ops | 14 |
| spec artifacts | 42 |
| agent instruction files | 10 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | WUPHF (pronounced "woof") | WUPHF (pronounced "woof") / Slack for AI employees with a shared brain. / Get Started / Setup prompt (for AI agents) / Options / Opencode and custom endpoints / Memory: Notebooks and the Wiki / Other Commands / Share With a Team Member / Publishing skills | WUPHF pronounced "woof" <p align="center" <img src="assets/hero.png" alt="WUPHF onboarding — Your AI team, visible and working." width="720" / </p ! Discord https //img.shields.io/badge/Discord Join%20Community 5865F2?logo=discord&logoColor=white https //discord.gg/gjSySC3PzV ! License Sustainable Use License https //img.shields.io/badge/license Sustainable%20Use%20License A87B4F LICENSE ! Go https //img.shields.io/badge/Go 1.25+ 00ADD8?logo=go&logoColor=white go.mod <p align="left" <a href="https //news.ycombinator.com/item?id=47899844" <img src="website/hn badge.svg" alt="WUPHF — Hacker News Life of Product Week's 1" width="223" height="48" / </a </p Slack for AI employees with a shared br |


## Key Files

### Manifests

- evals/README.md
- docs/dogfood/README.md
- docs/tutorials/README.md
- docs/tutorials/rich-html-artifacts/README.md
- evals/harness/README.md
- packages/protocol/AGENTS.md
- brand/README.md
- npm/README.md
- packages/protocol/testdata/README.md
- README.md
- scripts/README.md
- tests/flaky/README.md
- assets/avatar-system/README.md
- bench/slice-1/README.md
- cmd/wuphfbench/README.md
- desktop/oswails/README.md
- packages/protocol/README.md
- packages/protocol/scripts/README.md
- scripts/debug-tagging/README.md
- scripts/win-vm/README.md


### Spec / Docs / Prompt Artifacts

- packages/protocol/AGENTS.md
- docs/specs/core-loop-icp-eval.md
- docs/specs/notebook-wiki-promise-pr8-memory-workflow-gate.md
- docs/specs/sota-uplift-icp-eval.md
- docs/specs/task-detail-live-agent-icp-examples.md
- prompts/answer_query.tmpl
- prompts/extract_entities_lite.tmpl
- prompts/lint_contradictions.tmpl
- prompts/synthesis_v2.tmpl
- docs/architecture/agent-navigability.md
- internal/team/prompts/answer_query.tmpl
- internal/team/prompts/extract_entities_lite.tmpl
- internal/team/prompts/skill_creator_default.md
- internal/team/prompts/synthesis_playbook_v2.tmpl
- docs/specs/company-artifacts.md
- docs/specs/consolidate-inbox-into-tasks.md
- docs/specs/core-loop.md
- docs/specs/decisions.md
- docs/specs/desktop-pake-feasibility.md
- docs/specs/deterministic-integrations.md


### Agent Instruction Files

- packages/protocol/AGENTS.md
- prompts/answer_query.tmpl
- prompts/extract_entities_lite.tmpl
- prompts/lint_contradictions.tmpl
- prompts/synthesis_v2.tmpl
- internal/team/prompts/answer_query.tmpl
- internal/team/prompts/extract_entities_lite.tmpl
- internal/team/prompts/skill_creator_default.md
- internal/team/prompts/synthesis_playbook_v2.tmpl
- .cursor/rules/nex.md


## Top Directories

| dir | count |
| --- | --- |
| internal | 1046 |
| web | 893 |
| cmd | 179 |
| packages | 109 |
| docs | 71 |
| mcp | 53 |
| scripts | 46 |
| tests | 27 |
| .github | 15 |
| npm | 13 |
| desktop | 12 |
| evals | 12 |
| templates | 11 |
| website | 11 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 1220 |
| .tsx | 545 |
| .ts | 355 |
| .md | 130 |
| .sh | 54 |
| .json | 41 |
| .mjs | 40 |
| .js | 37 |
| .css | 30 |
| .yaml | 20 |
| .yml | 17 |
| [no-ext] | 16 |
| .txt | 15 |
| .html | 9 |
| .svg | 7 |
| .tmpl | 7 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
