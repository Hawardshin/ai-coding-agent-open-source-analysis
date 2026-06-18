# strands-agents/evals

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/strands-agents/evals |
| local path | sources/strands-agents__evals |
| HEAD | 164cdb7 |
| stars/forks | 145 / 39 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T21:33:46Z |
| trendScore / priorityScore | 142 / 356 |


## Interpretation

- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | src/strands_evals/experimental/redteam/README.md, src/strands_evals/providers/README.md, AGENTS.md |
| Observability / evaluation | 231 | src/strands_evals/providers/README.md, AGENTS.md, README.md |
| Developer tools / DX | 195 | src/strands_evals/experimental/redteam/README.md, AGENTS.md, README.md |
| Security / supply chain | 27 | README.md, tests/strands_evals/experimental/redteam/test_attack_success_evaluator.py, tests/strands_evals/experimental/redteam/test_bad_likert_judge.py |
| Data / ML platform | 17 | src/strands_evals/providers/README.md, AGENTS.md, README.md |
| RAG / retrieval / knowledge | 7 | AGENTS.md, tests/strands_evals/detectors/test_chunking.py, tests/strands_evals/detectors/test_failure_detector.py |
| Database / data infrastructure | 3 | src/strands_evals/chaos/effects.py |
| MCP / agent interoperability | 3 | AGENTS.md |
| Frontend / app framework | 2 | tests_integ/test_langchain_openinference_eval.py, tests_integ/test_langchain_traceloop_eval.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infraOps, llm-app, llmFramework, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 350 |
| manifests | 5 |
| docs | 9 |
| tests | 109 |
| ci/ops | 8 |
| spec artifacts | 1 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Install Strands Evals SDK | Feature Overview / Quick Start / Install Strands Evals SDK / Create test cases / Create evaluators with custom rubric / Create experiment and run evaluation / Run evaluations / Command-Line Interface / Schema-check, then run an experiment file against an agent factory / One-off ad-hoc run with no experiment file | <div align="center" <div <a href="https //strandsagents.com" <img src="https //strandsagents.com/latest/assets/logo github.svg" alt="Strands Agents" width="55px" height="105px" </a </div <h1 Strands Evals SDK </h1 <h2 A comprehensive evaluation framework for AI agents and LLM applications. </h2 <div align="center" <a href="https //github.com/strands agents/evals/graphs/commit activity" <img alt="GitHub commit activity" src="https //img.shields.io/github/commit activity/m/strands agents/evals"/ </a <a href="https //github.com/strands agents/evals/issues" <img alt="GitHub open issues" src="https //img.shields.io/github/issues/strands agents/evals"/ </a <a href="https //github.com/strands agent |


## Key Files

### Manifests

- src/strands_evals/experimental/redteam/README.md
- src/strands_evals/providers/README.md
- AGENTS.md
- README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| src | 208 |
| tests | 109 |
| .github | 15 |
| tests_integ | 7 |
| .gitignore | 1 |
| .pre-commit-config.yaml | 1 |
| AGENTS.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| NOTICE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |
| SKILL.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 320 |
| .yml | 14 |
| .md | 9 |
| [no-ext] | 3 |
| .json | 2 |
| .toml | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
