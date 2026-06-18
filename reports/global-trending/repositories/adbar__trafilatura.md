# adbar/trafilatura

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/adbar/trafilatura |
| local path | sources/adbar__trafilatura |
| HEAD | 32b4050 |
| stars/forks | 6146 / 386 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T17:00:56Z |
| trendScore / priorityScore | 149 / 389 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 173 | README.md, docs/usage-cli.rst, pyproject.toml |
| Cloud native / infrastructure | 151 | docs/downloads.rst, docs/installation.rst, docs/tutorial-epsilla.rst |
| Observability / evaluation | 76 | README.md, tests/README.rst, docs/evaluation.rst |
| Database / data infrastructure | 48 | README.md, docs/usage-cli.rst, docs/compendium.rst |
| Data / ML platform | 39 | tests/cli_tests.py, tests/evaluate.py, docs/compendium.rst |
| Frontend / app framework | 27 | docs/tutorial-epsilla.rst, tests/eval/0a6291ebbce449b3b04256b43c73e39d.html, tests/eval/0a962f6bcd5649f7a7e6effa338df80d.html |
| RAG / retrieval / knowledge | 26 | docs/usage-cli.rst, docs/conf.py, docs/crawls.rst |
| Security / supply chain | 25 | pyproject.toml, docs/used-by.rst, tests/eval/0a3108e507c54157a95fe7a1338f5e9c.html |
| AI agent / orchestration | 12 | docs/usage-cli.rst, docs/downloads.rst, docs/robots.txt |
| Coding agent / software automation | 9 | README.md, tests/evaluate.py, docs/index.rst |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, observability, rag, security, securityTooling, vectorSearch |
| stacks | Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1148 |
| manifests | 3 |
| docs | 37 |
| tests | 1077 |
| ci/ops | 2 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Trafilatura: Discover and Extract Text Data on the Web | Trafilatura: Discover and Extract Text Data on the Web / Introduction / Features / Evaluation and alternatives / Usage and documentation / License / Contributing / Context / Author / Citing Trafilatura | Trafilatura Discover and Extract Text Data on the Web <br/ <img alt="Trafilatura Logo" src="https //raw.githubusercontent.com/adbar/trafilatura/master/docs/trafilatura logo.png" align="center" width="60%"/ <br/ ! Python package https //img.shields.io/pypi/v/trafilatura.svg https //pypi.python.org/pypi/trafilatura ! Python versions https //img.shields.io/pypi/pyversions/trafilatura.svg https //pypi.python.org/pypi/trafilatura ! Documentation Status https //readthedocs.org/projects/trafilatura/badge/?version=latest http //trafilatura.readthedocs.org/en/latest/?badge=latest ! Code Coverage https //img.shields.io/codecov/c/github/adbar/trafilatura.svg https //codecov.io/gh/adbar/trafilatura ! Do |


## Key Files

### Manifests

- README.md
- docs/Makefile
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| tests | 1077 |
| docs | 33 |
| trafilatura | 24 |
| .github | 3 |
| .coveragerc | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .readthedocs.yaml | 1 |
| CITATION.cff | 1 |
| CONTRIBUTING.md | 1 |
| HISTORY.md | 1 |
| LICENSE | 1 |
| MANIFEST.in | 1 |
| pyproject.toml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .html | 1043 |
| .py | 42 |
| .rst | 29 |
| [no-ext] | 5 |
| .txt | 4 |
| .cfg | 3 |
| .md | 3 |
| .xml | 3 |
| .yml | 3 |
| .json | 2 |
| .atom | 1 |
| .bat | 1 |
| .cff | 1 |
| .dtd | 1 |
| .emden-21416 | 1 |
| .in | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
