# sgl-project/sglang

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/sgl-project/sglang |
| local path | sources/sgl-project__sglang |
| HEAD | 9f6b233 |
| stars/forks | 29137 / 6585 |
| language | Python |
| license |  |
| pushedAt | 2026-06-18T00:26:22Z |
| trendScore / priorityScore | 136 / 447 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Observability / evaluation | 376 | examples/monitoring/README.md, examples/profiler/nsys_profile_tools/README.md, sgl-model-gateway/examples/wasm/README.md |
| Data / ML platform | 219 | python/sglang/srt/mem_cache/storage/hf3fs/docs/README.md, docs/README.md, examples/runtime/README.md |
| Cloud native / infrastructure | 202 | examples/frontend_language/usage/triton/README.md, python/sglang/srt/mem_cache/storage/hf3fs/docs/README.md, examples/monitoring/README.md |
| Local LLM / inference | 172 | .claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/README.md, benchmark/benchmark_vllm_060/README.md, benchmark/blog_v0_2/README.md |
| Security / supply chain | 52 | sgl-model-gateway/examples/wasm/wasm-guest-auth/README.md, sgl-model-gateway/examples/wasm/wasm-guest-ratelimit/README.md, python/sglang/srt/mem_cache/storage/nixl/README.md |
| Developer tools / DX | 50 | examples/runtime/README.md, docs/performance_dashboard/README.md, python/sglang/srt/mem_cache/storage/lmcache/README.md |
| MCP / agent interoperability | 30 | docs_new/AGENTS.md, sgl-model-gateway/README.md |
| Database / data infrastructure | 29 | python/sglang/srt/mem_cache/storage/aibrix_kvcache/README.md, python/sglang/srt/mem_cache/storage/eic/README.md, sgl-model-gateway/README.md |
| RAG / retrieval / knowledge | 22 | examples/runtime/README.md, benchmark/json_jump_forward/README.md, python/sglang/srt/mem_cache/storage/mooncake_store/README.md |
| AI agent / orchestration | 16 | benchmark/react/README.md, python/sglang/srt/mem_cache/storage/nixl/README.md, docs_new/AGENTS.md |
| Coding agent / software automation | 9 | docs/README.md, docs_new/AGENTS.md, README.md |
| Frontend / app framework | 6 | docs/performance_dashboard/README.md, benchmark/react/README.md, README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 6408 |
| manifests | 40 |
| docs | 583 |
| tests | 1779 |
| ci/ops | 95 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | News / About / Getting Started / Benchmark and Performance / Adoption and Sponsorship / Contact Us / Acknowledgment | <div align="center" id="sglangtop" <img src="https //raw.githubusercontent.com/sgl project/sglang/main/assets/logo.png" alt="logo" width="400" margin="10px" </img ! PyPI https //img.shields.io/pypi/v/sglang https //pypi.org/project/sglang ! PyPI Downloads https //static.pepy.tech/badge/sglang?period=month ! license https //img.shields.io/github/license/sgl project/sglang.svg https //github.com/sgl project/sglang/tree/main/LICENSE ! issue resolution https //img.shields.io/github/issues closed raw/sgl project/sglang https //github.com/sgl project/sglang/issues ! open issues https //img.shields.io/github/issues raw/sgl project/sglang https //github.com/sgl project/sglang/issues ! Ask DeepWiki h |


## Key Files

### Manifests

- examples/frontend_language/usage/triton/README.md
- python/sglang/srt/mem_cache/storage/hf3fs/docs/README.md
- docs/README.md
- examples/monitoring/README.md
- examples/profiler/nsys_profile_tools/README.md
- examples/runtime/README.md
- sgl-model-gateway/bindings/golang/examples/oai_server/README.md
- sgl-model-gateway/examples/wasm/README.md
- sgl-model-gateway/examples/wasm/wasm-guest-auth/README.md
- sgl-model-gateway/examples/wasm/wasm-guest-logging/README.md
- sgl-model-gateway/examples/wasm/wasm-guest-ratelimit/README.md
- docs/performance_dashboard/README.md
- docs/release_lookup/README.md
- .claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/README.md
- benchmark/asr/README.md
- benchmark/benchmark_vllm_060/README.md
- benchmark/blog_v0_2/README.md
- benchmark/boolq/README.md
- benchmark/ceval/README.md
- benchmark/deepseek_v3/README.md


### Spec / Docs / Prompt Artifacts

- .claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/README.md
- docs_new/AGENTS.md
- python/sglang/multimodal_gen/.claude/CLAUDE.md
- docs/requirements.txt
- experimental/sgl-router/tests/e2e/k8s_integration/requirements.txt
- experimental/sgl-router/tests/e2e/requirements.txt
- sgl-model-gateway/tests/spec/embedding.rs
- sgl-model-gateway/tests/spec/chat_completion.rs
- sgl-model-gateway/tests/spec/chat_message.rs
- sgl-model-gateway/tests/spec/mod.rs
- sgl-model-gateway/tests/spec/rerank.rs
- sgl-model-gateway/tests/spec/responses.rs
- test/manual/spec/eagle/test_eagle3_basic.py
- test/manual/spec/test_spec_ngram_fa3.py
- test/registered/spec/dflash/test_dflash.py
- test/registered/spec/eagle/test_adaptive_speculative.py
- test/registered/spec/eagle/test_deepseek_v3_fp4_mtp_small.py
- test/registered/spec/eagle/test_eagle_constrained_decoding.py
- test/registered/spec/eagle/test_eagle_dp_attention.py
- test/registered/spec/eagle/test_eagle_infer_beta_dp_attention_large.py


### Agent Instruction Files

- .claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/README.md
- docs_new/AGENTS.md
- python/sglang/multimodal_gen/.claude/CLAUDE.md
- .claude/skills/llm-serving-auto-benchmark/references/example-plan.yaml
- .claude/skills/cookbook-add-model/templates/benchmarks.jsx.tmpl
- .claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/deepseek-math-v2.yaml
- .claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/deepseek-r1-0528.yaml
- .claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/deepseek-v3.1.yaml
- .claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/deepseek-v3.2.yaml
- .claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/deepseek-v3.yaml
- .claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/devstral-small-2-24b-instruct-2512.yaml
- .claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/ernie-4.5-21b-a3b-pt.yaml
- .claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/glm-4.5.yaml
- .claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/glm-4.6.yaml
- .claude/skills/llm-serving-auto-benchmark/configs/cookbook-llm/glm-4.7-flash.yaml


## Top Directories

| dir | count |
| --- | --- |
| python | 3089 |
| test | 1327 |
| sgl-model-gateway | 396 |
| docs_new | 350 |
| sgl-kernel | 313 |
| benchmark | 175 |
| docs | 171 |
| experimental | 136 |
| scripts | 104 |
| .github | 100 |
| .claude | 98 |
| examples | 88 |
| docker | 19 |
| 3rdparty | 17 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 4134 |
| .json | 558 |
| .rs | 348 |
| .md | 281 |
| .mdx | 237 |
| .cuh | 136 |
| .yml | 92 |
| .jsx | 81 |
| .yaml | 77 |
| .sh | 69 |
| .cu | 62 |
| .h | 61 |
| .cpp | 42 |
| [no-ext] | 32 |
| .ipynb | 29 |
| .toml | 29 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
