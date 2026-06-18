# brycewang-stanford/StatsPAI

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/brycewang-stanford/StatsPAI |
| local path | sources/brycewang-stanford__StatsPAI |
| HEAD | 562c7ae |
| stars/forks | 233 / 44 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:40:41Z |
| trendScore / priorityScore | 183 / 436 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 385 | tests/agent_bench/README.md, StatsPAI_full_data_analysis_skill/README.md, docs/agent_cards_spec.md |
| MCP / agent interoperability | 95 | tests/agent_bench/README.md, docs/superpowers/specs/2026-04-21-p0-agent-native-design.md, docs/superpowers/specs/2026-04-21-p1-agent-native-frontier-design.md |
| Data / ML platform | 83 | examples/README.md, tests/agent_bench/README.md, benchmarks/hdfe/README.md |
| Observability / evaluation | 72 | benchmarks/README.md, tests/agent_bench/README.md, StatsPAI_full_data_analysis_skill/README.md |
| Developer tools / DX | 19 | docs/superpowers/specs/2026-04-21-p0-agent-native-design.md, pyproject.toml, docs/guides/agent_api.md |
| Security / supply chain | 14 | docs/guides/llm_dag_setup.md, docs/superpowers/specs/2026-04-20-v096-bayes-iv-fuzzyrd-perlearner.md, SECURITY.md |
| Coding agent / software automation | 12 | StatsPAI_full_data_analysis_skill/README.md, docs/guides/agent_api.md, tests/test_mcp_protocol.py |
| RAG / retrieval / knowledge | 5 | docs/superpowers/specs/2026-04-21-p1-agent-native-frontier-design.md, tests/coverage_monte_carlo/FINDINGS.md |
| Cloud native / infrastructure | 2 | docs/superpowers/specs/2026-04-20-v098-bayes-mte-samplers.md, src/statspai/agent/tools/_specs/_orchestrate.py |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, databaseRuntime, devtools, example-rich, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2354 |
| manifests | 15 |
| docs | 188 |
| tests | 1439 |
| ci/ops | 8 |
| spec artifacts | 24 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | StatsPAI: Agent-Native Causal Inference & Econometrics Toolkit for Python | StatsPAI: Agent-Native Causal Inference & Econometrics Toolkit for Python / For Journal Reviewers / Quick Start — 60 seconds / DiD — Callaway & Sant'Anna staggered ATT on `mpdta` / Simple ATT ≈ -0.033, bootstrap SE ≈ 0.008, p < 0.001 / IV — Card (1995) returns to schooling / educ coefficient ≈ 0.142 (SE 0.019); first-stage F ≈ 160; Hausman p ≈ 0.03 / RD — Lee (2008) incumbent advantage / RD estimate ≈ 0.062 (SE 0.024) — incumbent advantage in next-term voteshare / Synthetic Control — California Proposition 99 | English https //github.com/brycewang stanford/statspai/blob/main/README.md 中文 https //github.com/brycewang stanford/statspai/blob/main/README CN.md <p align="center" <img src="https //raw.githubusercontent.com/brycewang stanford/StatsPAI/main/docs/logo/readme 1.png" alt="StatsPAI validation tiered causal inference for Python" width="780" </p StatsPAI Agent Native Causal Inference & Econometrics Toolkit for Python ! PyPI version https //img.shields.io/pypi/v/StatsPAI.svg https //pypi.org/project/StatsPAI/ ! Python versions https //img.shields.io/pypi/pyversions/StatsPAI.svg https //pypi.org/project/StatsPAI/ ! License MIT https //img.shields.io/badge/License MIT blue.svg https //github.com/br |


## Key Files

### Manifests

- examples/README.md
- benchmarks/README.md
- tests/agent_bench/README.md
- docs/rfc/README.md
- benchmarks/hdfe/README.md
- README.md
- rust/README.md
- StatsPAI_full_data_analysis_skill/README.md
- tests/fixtures/nist_strd/README.md
- tests/numerical_accuracy/README.md
- tests/r_parity/README.md
- tests/stata_parity/README.md
- rust/statspai_hdfe/README.md
- pyproject.toml
- rust/statspai_hdfe/Cargo.toml


### Spec / Docs / Prompt Artifacts

- docs/superpowers/specs/2026-04-21-p0-agent-native-design.md
- docs/superpowers/specs/2026-04-21-p1-agent-native-frontier-design.md
- tests/agent_bench/prompts/_protocol.md
- tests/agent_bench/prompts/prompts.json
- specs/2026-04-15-sp-01-spatial-full-stack-design.md
- specs/2026-04-15-statspai-ecosystem-gap-analysis.md
- docs/ROADMAP.md
- docs/superpowers/specs/2026-04-16-decomposition-tier-c-design.md
- docs/superpowers/specs/2026-04-20-v0910-hv-latent-mte.md
- docs/superpowers/specs/2026-04-20-v0911-multi-iv-mte-observed-prte.md
- docs/superpowers/specs/2026-04-20-v0912-probit-scale-mte.md
- docs/superpowers/specs/2026-04-20-v0913-hdi-compat-and-att-sd.md
- docs/superpowers/specs/2026-04-20-v0915-tidy-multiterm.md
- docs/superpowers/specs/2026-04-20-v0916-breadth-expansion.md
- docs/superpowers/specs/2026-04-20-v094-auto-cate-strict-id-design.md
- docs/superpowers/specs/2026-04-20-v095-bayes-optuna-rust-spike.md
- docs/superpowers/specs/2026-04-20-v095-rust-hdfe-spike.md
- docs/superpowers/specs/2026-04-20-v096-bayes-iv-fuzzyrd-perlearner.md
- docs/superpowers/specs/2026-04-20-v097-bayes-hte-iv-advi.md
- docs/superpowers/specs/2026-04-20-v098-bayes-mte-samplers.md


### Agent Instruction Files

- tests/agent_bench/prompts/_protocol.md
- tests/agent_bench/prompts/prompts.json


## Top Directories

| dir | count |
| --- | --- |
| tests | 1416 |
| src | 668 |
| docs | 116 |
| benchmarks | 45 |
| scripts | 23 |
| .github | 12 |
| rust | 11 |
| papers | 9 |
| examples | 7 |
| schemas | 5 |
| tools | 5 |
| plans | 4 |
| .examples_campaign | 2 |
| .tierd_campaign | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1543 |
| .json | 272 |
| .md | 188 |
| .csv | 97 |
| .r | 97 |
| .do | 65 |
| .dat | 33 |
| .yml | 11 |
| .rs | 8 |
| [no-ext] | 6 |
| .html | 5 |
| .latex | 5 |
| .markdown | 5 |
| .text | 5 |
| .tex | 3 |
| .bib | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
