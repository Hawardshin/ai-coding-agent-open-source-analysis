# kvcache-ai/Mooncake

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/kvcache-ai/Mooncake |
| local path | sources/kvcache-ai__Mooncake |
| HEAD | 8b884bc |
| stars/forks | 5603 / 857 |
| language | C++ |
| license |  |
| pushedAt | 2026-06-17T10:55:04Z |
| trendScore / priorityScore | 143 / 436 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 442 | README.md, mooncake-wheel/mooncake/README.md, docs/Makefile |
| Observability / evaluation | 289 | benchmarks/storage_benchmark_v1/doc/README.md, mooncake-pg/benchmark/README.md, monitoring/README.md |
| Cloud native / infrastructure | 173 | .devcontainer/README.md, monitoring/README.md, README.md |
| Data / ML platform | 110 | README.md, docs/source/getting_started/examples/vllm-integration/index.md, docs/source/getting_started/examples/vllm-integration/kv-cache-storage.md |
| Database / data infrastructure | 54 | README.md, docs/source/getting_started/examples/vllm-integration/disagg-prefill-decode.md, docs/source/getting_started/examples/vllm-integration/kv-cache-storage.md |
| Developer tools / DX | 28 | mooncake-pg/benchmark/README.md, README.md, mooncake-wheel/pyproject.toml |
| AI agent / orchestration | 19 | docs/source/getting_started/examples/vllm-integration/kv-cache-storage.md, docs/source/getting_started/examples/vllm-integration/vllm-integration-v0.3.md, docs/source/getting_started/examples/sglang-integration/hicache-integration-v1.md |
| Security / supply chain | 13 | README.md, mooncake-store/rust/examples/store_benchmark.rs, mooncake-p2p-store/src/example/p2p-store-example.go |
| RAG / retrieval / knowledge | 9 | README.md, docs/source/getting_started/examples/lmdeploy-integration-v0.9.md, docs/source/getting_started/examples/sglang-integration/hicache-integration-v1.md |
| Coding agent / software automation | 5 | README.md, docs/source/community/governance.md, docs/source/getting_started/quick-start.md |
| Frontend / app framework | 2 | .github/workflows/issue-bot.yml, docs/source/design/transfer-engine/transfer-engine-bench-tuning.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1129 |
| manifests | 23 |
| docs | 121 |
| tests | 206 |
| ci/ops | 28 |
| spec artifacts | 10 |
| agent instruction files | 8 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Transfer Engine (TE) / Mooncake Store / Mooncake EP and Process Group (PG) / Tensor-Centric Ecosystem / SGLang Integration ([Guide](https://kvcache-ai.github.io/Mooncake/getting_started/examples/sglang-integration/index.html)) / vLLM Integration ([Guide](https://kvcache-ai.github.io/Mooncake/getting_started/examples/vllm-integration/index.html)) / Before using Mooncake / Use Python package / Build From Source / Skills for AI coding assistants | <div align="center" <img src=image/mooncake icon.png width=44% / <h2 align="center" A KVCache centric Disaggregated Architecture for LLM Serving </h2 <a href="https //www.usenix.org/system/files/fast25 qin.pdf" target=" blank" <strong Paper</strong </a <a href="https //www.usenix.org/system/files/fast25 slides qin.pdf" target=" blank" <strong Slides</strong </a <a href="FAST25 release/traces" target=" blank" <strong Traces</strong </a <a href="https //kvcache ai.github.io/Mooncake/" target=" blank" <strong Documentation</strong </a <a href="https //kvcache.ai/" target=" blank" <strong Blog</strong </a <a href="https //join.slack.com/t/mooncake project/shared invite/zt 3qx4x35ea zSSTqTHItHJs9 |


## Key Files

### Manifests

- benchmarks/storage_benchmark_v1/doc/README.md
- docs/README.md
- docs/source/zh_archive/README.md
- mooncake-pg/benchmark/README.md
- .devcontainer/README.md
- monitoring/README.md
- mooncake-pg/tests/README.md
- README.md
- mooncake-store/rust/README.md
- mooncake-store/src/hf3fs/README.md
- mooncake-wheel/mooncake/README.md
- docs/Makefile
- mooncake-transfer-engine/example/http-metadata-server/go.mod
- .devcontainer/Dockerfile
- monitoring/docker-compose.yml
- mooncake-wheel/pyproject.toml
- mooncake-common/etcd/go.mod
- mooncake-common/k8s-lease/go.mod
- mooncake-p2p-store/src/p2pstore/go.mod
- mooncake-store/go/go.mod


### Spec / Docs / Prompt Artifacts

- .claude/skills/mooncake-ci-local/examples/minimal.md
- docs/source/design/architecture.md
- docs/source/zh_archive/architecture.md
- .claude/skills/mooncake-api/.claude-plugin/plugin.json
- .claude/skills/mooncake-api/SKILL.md
- .claude/skills/mooncake-ci-local/.claude-plugin/plugin.json
- .claude/skills/mooncake-ci-local/scripts/check-prerequisites.sh
- .claude/skills/mooncake-ci-local/SKILL.md
- .claude/skills/mooncake-troubleshoot/.claude-plugin/plugin.json
- .claude/skills/mooncake-troubleshoot/SKILL.md


### Agent Instruction Files

- .claude/skills/mooncake-ci-local/examples/minimal.md
- .claude/skills/mooncake-api/.claude-plugin/plugin.json
- .claude/skills/mooncake-api/SKILL.md
- .claude/skills/mooncake-ci-local/.claude-plugin/plugin.json
- .claude/skills/mooncake-ci-local/scripts/check-prerequisites.sh
- .claude/skills/mooncake-ci-local/SKILL.md
- .claude/skills/mooncake-troubleshoot/.claude-plugin/plugin.json
- .claude/skills/mooncake-troubleshoot/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| mooncake-transfer-engine | 421 |
| mooncake-store | 339 |
| docs | 100 |
| mooncake-wheel | 47 |
| scripts | 34 |
| mooncake-common | 32 |
| mooncake-pg | 30 |
| .github | 28 |
| mooncake-ep | 17 |
| benchmarks | 15 |
| mooncake-integration | 15 |
| mooncake-p2p-store | 10 |
| .claude | 8 |
| monitoring | 7 |


## Extension Distribution

| ext | count |
| --- | --- |
| .cpp | 364 |
| .h | 292 |
| .md | 115 |
| .py | 111 |
| .txt | 83 |
| .sh | 27 |
| .yml | 24 |
| .go | 18 |
| .cuh | 13 |
| [no-ext] | 12 |
| .cmake | 11 |
| .rs | 11 |
| .json | 10 |
| .yaml | 9 |
| .mod | 5 |
| .hpp | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
