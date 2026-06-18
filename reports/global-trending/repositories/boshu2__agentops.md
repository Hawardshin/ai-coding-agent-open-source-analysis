# boshu2/agentops

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/boshu2/agentops |
| local path | sources/boshu2__agentops |
| HEAD | 011c061 |
| stars/forks | 392 / 40 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T23:38:20Z |
| trendScore / priorityScore | 154 / 471 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/releases/agentops-3-pmf-evidence/README.md, cli/README.md, docs/comparisons/README.md |
| Developer tools / DX | 451 | cli/README.md, tests/cli/README.md, docs/convergence/operationalized/README.md |
| Coding agent / software automation | 438 | cli/README.md, docs/comparisons/README.md, docs/learnings/README.md |
| Observability / evaluation | 253 | docs/convergence/operationalized/README.md, docs/profiles/README.md, docs/workflows/meta-observer/README.md |
| Cloud native / infrastructure | 152 | cli/README.md, docs/comparisons/README.md, docs/convergence/operationalized/README.md |
| MCP / agent interoperability | 124 | docs/levels/L5-orchestration/README.md, docs/workflows/meta-observer/README.md, AGENTS.md |
| RAG / retrieval / knowledge | 73 | cli/README.md, docs/workflows/meta-observer/README.md, cli/internal/search/AGENTS.md |
| Security / supply chain | 47 | docs/profiles/README.md, docs/standards/README.md, docs/workflows/meta-observer/README.md |
| Data / ML platform | 37 | docs/comparisons/README.md, docs/plans/README.md, docs/profiles/README.md |
| Database / data infrastructure | 14 | docs/comparisons/README.md, docs/workflows/meta-observer/README.md, AGENTS.md |
| Frontend / app framework | 7 | docs/profiles/README.md, docs/workflows/meta-observer/README.md, docs/workflows/README.md |
| Local LLM / inference | 4 | docs/contracts/retrieval-comparison.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Go, Ruby |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 4540 |
| manifests | 40 |
| docs | 1798 |
| tests | 1163 |
| ci/ops | 12 |
| spec artifacts | 50 |
| agent instruction files | 32 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | AgentOps | AgentOps / Autonomous code validation for coding agents / See it work / What you get / Install / Claude Code / Codex CLI (macOS/Linux/WSL).  OpenCode: install-opencode.sh / Codex CLI (Windows): / Gemini / Antigravity / Other skills-compatible agents | <div align="center" AgentOps ! GitHub stars https //img.shields.io/github/stars/boshu2/agentops?style=social https //github.com/boshu2/agentops/stargazers Autonomous code validation for coding agents Coding agents can produce plausible code that is still wrong. AgentOps helps answer the two questions that decide whether you can trust the work is the code right, and is the agent output proven enough to grant more autonomy? It sits on top of the agent you already use Claude Code, Codex, Cursor, OpenCode and adds the validation membrane, evidence trail, and repo local corpus that make that judgment repeatable. </div See it work <div align="center" ! The AgentOps loop in Claude Code /discovery b |


## Key Files

### Manifests

- docs/releases/agentops-3-pmf-evidence/README.md
- cli/README.md
- tests/cli/README.md
- docs/comparisons/README.md
- docs/convergence/operationalized/README.md
- docs/council-log/README.md
- docs/domains/README.md
- docs/learnings/README.md
- docs/levels/L1-basics/README.md
- docs/levels/L2-persistence/README.md
- docs/levels/L3-state-management/README.md
- docs/levels/L4-parallelization/README.md
- docs/levels/L5-orchestration/README.md
- docs/plans/README.md
- docs/positioning/README.md
- docs/profiles/README.md
- docs/releases/v2.39.0-claims/README.md
- docs/standards/README.md
- docs/templates/README.md
- docs/workflows/meta-observer/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- cli/AGENTS.md
- cli/internal/context/AGENTS.md
- cli/internal/eval/AGENTS.md
- cli/internal/goals/AGENTS.md
- cli/internal/quality/AGENTS.md
- cli/internal/ratchet/AGENTS.md
- cli/internal/search/AGENTS.md
- cli/internal/types/AGENTS.md
- cli/internal/types/quest/AGENTS.md
- cli/internal/vibecheck/AGENTS.md
- docs/plans/bdd-foundry/intent-amendment-pass-run-2-on-the-agent/spec.md
- tests/explicit-skill-requests/prompts/beads.txt
- tests/explicit-skill-requests/prompts/council.txt
- tests/explicit-skill-requests/prompts/crank.txt
- tests/explicit-skill-requests/prompts/doc.txt
- tests/explicit-skill-requests/prompts/flywheel.txt
- tests/explicit-skill-requests/prompts/forge.txt
- tests/explicit-skill-requests/prompts/goals.txt
- tests/explicit-skill-requests/prompts/implement.txt


### Agent Instruction Files

- AGENTS.md
- cli/AGENTS.md
- cli/internal/context/AGENTS.md
- cli/internal/eval/AGENTS.md
- cli/internal/goals/AGENTS.md
- cli/internal/quality/AGENTS.md
- cli/internal/ratchet/AGENTS.md
- cli/internal/search/AGENTS.md
- cli/internal/types/AGENTS.md
- cli/internal/types/quest/AGENTS.md
- cli/internal/vibecheck/AGENTS.md
- tests/explicit-skill-requests/prompts/beads.txt
- tests/explicit-skill-requests/prompts/council.txt
- tests/explicit-skill-requests/prompts/crank.txt
- tests/explicit-skill-requests/prompts/doc.txt


## Top Directories

| dir | count |
| --- | --- |
| cli | 1534 |
| skills | 699 |
| docs | 577 |
| skills-codex | 512 |
| tests | 391 |
| scripts | 322 |
| evals | 201 |
| images | 66 |
| schemas | 52 |
| skills-codex-overrides | 28 |
| .agy-plugin | 26 |
| .github | 20 |
| spec | 19 |
| evidence | 13 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 1673 |
| .go | 1412 |
| .sh | 634 |
| .json | 344 |
| .bats | 184 |
| .feature | 51 |
| .txt | 51 |
| [no-ext] | 38 |
| .yaml | 37 |
| .py | 33 |
| .jsonl | 26 |
| .yml | 18 |
| .bash | 4 |
| .js | 3 |
| .mod | 3 |
| .mp4 | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
