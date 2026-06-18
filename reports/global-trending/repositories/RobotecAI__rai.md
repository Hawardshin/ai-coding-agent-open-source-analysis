# RobotecAI/rai

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/RobotecAI/rai |
| local path | sources/RobotecAI__rai |
| HEAD | 137f555 |
| stars/forks | 529 / 71 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T21:01:03Z |
| trendScore / priorityScore | 133 / 394 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | AGENTS.md, README.md, src/rai_core/README.md |
| Observability / evaluation | 179 | src/rai_extensions/rai_perception/README.md, src/rai_finetune/README.md, src/rai_bench/rai_bench/examples/benchmarking_models.py |
| Security / supply chain | 72 | src/rai_finetune/README.md, docker/Dockerfile, examples/agents/react_ros2.py |
| Data / ML platform | 69 | README.md, src/rai_extensions/rai_perception/README.md, src/rai_finetune/README.md |
| Cloud native / infrastructure | 57 | src/rai_s2s/README.md, docker/Dockerfile, examples/agents/streamlit_react.py |
| Local LLM / inference | 42 | src/rai_finetune/README.md, src/rai_bench/rai_bench/examples/benchmarking_models.py, docs/simulation_and_benchmarking/rai_bench.md |
| Developer tools / DX | 32 | AGENTS.md, src/rai_extensions/rai_perception/README.md, src/rai_finetune/README.md |
| Database / data infrastructure | 15 | src/rai_semap/README.md, src/rai_whoami/README.md, src/rai_bench/rai_bench/examples/tool_calling_custom_agent.py |
| Frontend / app framework | 8 | AGENTS.md, examples/debugging_assistant.py, examples/rosbot-xl-demo.py |
| RAG / retrieval / knowledge | 4 | src/rai_whoami/README.md, docs/simulation_and_benchmarking/rai_sim.md, docs/api_design_considerations.md |
| Coding agent / software automation | 3 | AGENTS.md, docs/extensions/rethinking_usability.md |
| MCP / agent interoperability | 3 | AGENTS.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 573 |
| manifests | 23 |
| docs | 65 |
| tests | 104 |
| ci/ops | 10 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | RAI | RAI / 🎯 Overview / RAI framework / Getting started / Simulation demos / Community / Embodied AI Community Group / Publicity / RAI Q&A / Developer Resources | RAI RAI is a flexible AI agent framework to develop and deploy Embodied AI features for your robots. 📚 Visit robotecai.github.io/rai https //robotecai.github.io/rai/ for the latest documentation, setup guide and tutorials. 📚 <div align="center" ! rai image ./docs/imgs/RAI simple diagram medium.png ! License https //img.shields.io/badge/License Apache 2.0 blue.svg https //opensource.org/licenses/Apache 2.0 ! GitHub Release https //img.shields.io/github/v/release/RobotecAI/rai ! Contributors https //img.shields.io/github/contributors/robotecai/rai ! codecov https //codecov.io/gh/RobotecAI/rai/graph/badge.svg?token=4EP49Q8GDG https //codecov.io/gh/RobotecAI/rai ! arXiv https //img.shields.io/ |


## Key Files

### Manifests

- AGENTS.md
- README.md
- src/rai_bench/README.md
- src/rai_core/README.md
- src/rai_extensions/rai_nomad/README.md
- src/rai_extensions/rai_perception/README.md
- src/rai_finetune/README.md
- src/rai_s2s/README.md
- src/rai_semap/README.md
- src/rai_sim/README.md
- src/rai_whoami/README.md
- docker/Dockerfile
- pyproject.toml
- src/rai_bench/pyproject.toml
- src/rai_core/pyproject.toml
- src/rai_extensions/rai_perception/pyproject.toml
- src/rai_finetune/pyproject.toml
- src/rai_s2s/pyproject.toml
- src/rai_semap/pyproject.toml
- src/rai_sim/pyproject.toml


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- src/rai_semap/design.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| src | 367 |
| tests | 104 |
| docs | 45 |
| examples | 23 |
| .github | 11 |
| docker | 3 |
| .clang-format | 1 |
| .coderabbit.yaml | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .licenserc.json | 1 |
| .pre-commit-config.yaml | 1 |
| AGENTS.md | 1 |
| CODE_OF_CONDUCT.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 409 |
| .md | 64 |
| .yaml | 48 |
| [no-ext] | 11 |
| .toml | 10 |
| .yml | 10 |
| .json | 5 |
| .sh | 4 |
| .xml | 3 |
| .cfg | 2 |
| .repos | 2 |
| .css | 1 |
| .jinja | 1 |
| .manipulation-demo | 1 |
| .rviz | 1 |
| .wav | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
