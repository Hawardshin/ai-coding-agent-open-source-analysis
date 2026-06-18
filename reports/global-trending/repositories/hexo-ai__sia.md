# hexo-ai/sia

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/hexo-ai/sia |
| local path | sources/hexo-ai__sia |
| HEAD | 6ad5ad7 |
| stars/forks | 1765 / 204 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T15:49:47Z |
| trendScore / priorityScore | 145 / 372 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | README.md, pyproject.toml, tests/test_agent_impls.py |
| Data / ML platform | 153 | README.md, docs/architecture.md, docs/configuration.md |
| Observability / evaluation | 71 | README.md, tests/test_run_evaluation.py, docs/architecture.md |
| Coding agent / software automation | 63 | README.md, pyproject.toml, tests/test_agent_impls.py |
| Developer tools / DX | 49 | README.md, pyproject.toml, tests/test_cli_interface.py |
| Cloud native / infrastructure | 37 | docs/configuration.md, SECURITY.md, sia/cli.py |
| Security / supply chain | 6 | docs/configuration.md, SECURITY.md |
| Local LLM / inference | 1 | sia/config.py |
| RAG / retrieval / knowledge | 1 | sia/prompts.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, frontendStack, infra, infraOps, llmFramework, local-llm, observability, rag, security, securityTooling |
| stacks | Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 99 |
| manifests | 2 |
| docs | 13 |
| tests | 30 |
| ci/ops | 2 |
| spec artifacts | 2 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | SIA (Self-Improving AI) | SIA (Self-Improving AI) / Introduction Videos / Architecture / Glossary / Benchmark Results / Run SIA locally with built-in tasks / Install / Export the key(s) for the provider(s) you'll use: / Run / Common flags (`sia run`) | SIA Self Improving AI ! arXiv https //img.shields.io/badge/arXiv 2605.27276 b31b1b.svg https //arxiv.org/abs/2605.27276 ! License MIT https //img.shields.io/badge/License MIT green.svg https //opensource.org/licenses/MIT ! Python 3.11+ https //img.shields.io/badge/python 3.11+ blue.svg https //www.python.org/downloads/ ! PyPI version https //img.shields.io/pypi/v/sia agent.svg https //pypi.org/project/sia agent/ <p align="center" <a href="https //star history.com/ hexo ai/sia&Date" <picture <source media=" prefers color scheme dark " srcset="https //api.star history.com/svg?repos=hexo ai/sia&type=Date&theme=dark" / <source media=" prefers color scheme light " srcset="https //api.star history |


## Key Files

### Manifests

- README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- docs/architecture.md
- sia/defaults/providers/gemini.json


### Agent Instruction Files

- sia/defaults/providers/gemini.json


## Top Directories

| dir | count |
| --- | --- |
| sia | 55 |
| tests | 30 |
| docs | 4 |
| .github | 2 |
| .gitignore | 1 |
| CONTRIBUTING.md | 1 |
| environment.yml | 1 |
| EVALUATION_GUIDE.md | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |
| SECURITY.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 56 |
| .json | 16 |
| .md | 13 |
| .txt | 6 |
| .yml | 3 |
| [no-ext] | 3 |
| .html | 1 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
