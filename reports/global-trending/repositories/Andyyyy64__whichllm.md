# Andyyyy64/whichllm

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Andyyyy64/whichllm |
| local path | sources/Andyyyy64__whichllm |
| HEAD | 1fc2891 |
| stars/forks | 4923 / 268 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T07:33:37Z |
| trendScore / priorityScore | 162 / 385 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 312 | README.md, docs/cli.md, tests/test_benchmark_lookup.py |
| Observability / evaluation | 152 | README.md, docs/cli.md, tests/test_benchmark_lookup.py |
| Coding agent / software automation | 30 | README.md, docs/how-it-works.md, docs/README.ja.md |
| Developer tools / DX | 29 | README.md, docs/cli.md, pyproject.toml |
| Data / ML platform | 26 | README.md, docs/hardware.md, docs/how-it-works.md |
| Database / data infrastructure | 11 | docs/hardware.md, docs/troubleshooting.md, src/whichllm/hardware/gpu_simulator.py |
| AI agent / orchestration | 9 | README.md, docs/hardware.md, docs/troubleshooting.md |
| Frontend / app framework | 7 | src/whichllm/models/benchmark_sources/aa_index.py, tests/test_aa_index.py, CHANGELOG.md |
| Cloud native / infrastructure | 3 | README.md, docs/scoring.md, src/whichllm/engine/vram.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontend, frontendStack, infra, llm-app, llmFramework, local-llm, observability |
| stacks | Python |
| capabilities | LLM/app framework, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 101 |
| manifests | 2 |
| docs | 12 |
| tests | 24 |
| ci/ops | 3 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | whichllm | whichllm / Quick start / Common workflows / Best models for this machine / Pretend you have a specific GPU / Compare upgrade candidates / Find the GPU needed for a model / Start a chat with a model / Print copy-paste Python / Return JSON for scripts | whichllm ! PyPI version https //img.shields.io/pypi/v/whichllm https //pypi.org/project/whichllm/ ! Python 3.11+ https //img.shields.io/badge/python 3.11+ blue.svg https //www.python.org/downloads/ ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT ! Tests https //github.com/Andyyyy64/whichllm/actions/workflows/test.yml/badge.svg https //github.com/Andyyyy64/whichllm/actions/workflows/test.yml ! Sponsor https //img.shields.io/badge/Sponsor GitHub%20Sponsors EA4AAA?logo=githubsponsors https //github.com/sponsors/Andyyyy64 <p align="center" <a href="https //trendshift.io/repositories/30336" target=" blank" <img src="https //trendshift.io/api/b |


## Key Files

### Manifests

- README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 53 |
| tests | 24 |
| .github | 7 |
| docs | 7 |
| assets | 2 |
| .gitignore | 1 |
| CHANGELOG.md | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |
| LICENSE | 1 |
| pyproject.toml | 1 |
| README.md | 1 |
| scripts | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 78 |
| .md | 12 |
| .yml | 6 |
| .tape | 2 |
| [no-ext] | 2 |
| .toml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
