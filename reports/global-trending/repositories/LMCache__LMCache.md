# LMCache/LMCache

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/LMCache/LMCache |
| local path | sources/LMCache__LMCache |
| HEAD | e1fdbc6 |
| stars/forks | 9269 / 1343 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:12:55Z |
| trendScore / priorityScore | 147 / 475 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 478 | examples/frontend/README.md, examples/README.md, examples/blend_kv_v1/README.md |
| Cloud native / infrastructure | 339 | examples/README.md, examples/disagg_prefill_mp/README.md, examples/disagg_prefill/1p1d/README.md |
| Developer tools / DX | 290 | examples/frontend/README.md, examples/README.md, examples/chunk_statistics/README.md |
| Observability / evaluation | 288 | examples/README.md, examples/chunk_statistics/README.md, examples/disagg_prefill_mp/README.md |
| Data / ML platform | 121 | examples/README.md, examples/disagg_prefill_mp/README.md, examples/disagg_prefill/1p1d/README.md |
| Database / data infrastructure | 118 | examples/README.md, examples/kv_cache_reuse/remote_backends/resp/README.md, examples/redis_lookup/README.md |
| AI agent / orchestration | 49 | examples/README.md, examples/chunk_statistics/README.md, AGENTS.md |
| RAG / retrieval / knowledge | 36 | examples/README.md, examples/kv_cache_reuse/remote_backends/mock/README.md, benchmarks/rag/README.md |
| Frontend / app framework | 19 | examples/frontend/README.md, examples/README.md, docs/design/v1/mp_coordinator/README.md |
| Security / supply chain | 15 | examples/kv_cache_reuse/remote_backends/s3/README.md, AGENTS.md, operator/AGENTS.md |
| MCP / agent interoperability | 7 | AGENTS.md, operator/README.md, CLAUDE.md |
| Coding agent / software automation | 6 | AGENTS.md, README.md, lmcache/v1/multiprocess/protocols/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1836 |
| manifests | 40 |
| docs | 443 |
| tests | 383 |
| ci/ops | 33 |
| spec artifacts | 14 |
| agent instruction files | 8 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Updates / About / Key features / Getting Started / Contributing / Adoption and Partnerships / Citation / License | <div align="center" <p align="center" <img src="asset/logo.png" alt="lmcache logo" width="45%" </p <h3 align="center" A KV Cache Management Layer for Scalable LLM Inference </h3 <hr width="78%" <h3 align="center" <a href="https //blog.lmcache.ai/" Blog</a <a href="https //docs.lmcache.ai/" Documentation</a <a href="https //join.slack.com/t/lmcacheworkspace/shared invite/zt 3zxjao8h0 lRfBfnLqbALOtLsWn2ITxA" Join Slack</a <a href="https //docs.lmcache.ai/community/meetings.html" Community Meeting</a <a href="https //github.com/LMCache/LMCache/issues/2923" Roadmap</a </h3 ! PyPI https //img.shields.io/pypi/v/lmcache https //pypi.org/project/lmcache/ ! PyPI Downloads https //img.shields.io/pypi/ |


## Key Files

### Manifests

- examples/frontend/README.md
- docs/design/integration/tensorrt_llm/README.md
- examples/README.md
- docs/README.md
- examples/basic_check/README.md
- examples/blend_kv_v1/README.md
- examples/blend_kv/README.md
- examples/cache_controller/clear/README.md
- examples/cache_controller/compress/README.md
- examples/cache_controller/health/README.md
- examples/cache_controller/lookup/README.md
- examples/cache_controller/move/README.md
- examples/cache_controller/pin/README.md
- examples/cache_controller/README.md
- examples/cache_interface/README.md
- examples/cache_with_configs/README.md
- examples/chunk_statistics/README.md
- examples/disagg_prefill_mp/README.md
- examples/disagg_prefill/1p1d/README.md
- examples/disagg_prefill/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- operator/AGENTS.md
- CLAUDE.md
- examples/agents/requirements.txt
- benchmarks/multi_round_qa/requirements.txt
- benchmarks/rag/requirements.txt
- .cursor/BUGBOT.md
- examples/kv_cache_calculator/requirement.txt
- .claude/skills/hybrid-benchmarking/SKILL.md
- operator/DESIGN.md
- .buildkite/k3_harness/ARCHITECTURE.md
- .claude/skills/create-pr/SKILL.md
- .claude/skills/pr-review/SKILL.md
- .claude/skills/pre-pr-check/SKILL.md


### Agent Instruction Files

- AGENTS.md
- operator/AGENTS.md
- CLAUDE.md
- .cursor/BUGBOT.md
- .claude/skills/hybrid-benchmarking/SKILL.md
- .claude/skills/create-pr/SKILL.md
- .claude/skills/pr-review/SKILL.md
- .claude/skills/pre-pr-check/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| lmcache | 569 |
| docs | 356 |
| tests | 342 |
| examples | 140 |
| operator | 126 |
| .buildkite | 118 |
| csrc | 56 |
| .github | 40 |
| benchmarks | 26 |
| requirements | 11 |
| setup_extensions | 11 |
| docker | 8 |
| rust | 5 |
| .claude | 4 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 938 |
| .rst | 165 |
| .md | 133 |
| .po | 132 |
| .yaml | 123 |
| .sh | 90 |
| .yml | 52 |
| .go | 50 |
| .cpp | 27 |
| .txt | 25 |
| .h | 22 |
| [no-ext] | 15 |
| .json | 9 |
| .mk | 8 |
| .cu | 6 |
| .html | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
