# facebookresearch/faiss

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/facebookresearch/faiss |
| local path | sources/facebookresearch__faiss |
| HEAD | 20afed0 |
| stars/forks | 40322 / 4424 |
| language | C++ |
| license | MIT |
| pushedAt | 2026-06-17T00:46:00Z |
| trendScore / priorityScore | 176 / 393 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- 글로벌 스타 수가 높아 생태계 표준 또는 학습 기준점으로 우선순위가 높다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Data / ML platform | 197 | demos/README.md, benchs/README.md, contrib/README.md |
| Observability / evaluation | 96 | benchs/README.md, contrib/README.md, README.md |
| Database / data infrastructure | 27 | benchs/README.md, demos/offline_ivf/README.md, benchs/distributed_ondisk/README.md |
| RAG / retrieval / knowledge | 8 | faiss/docs/svs_binary_size_comparison.md, benchs/bench_fw/benchmark.py, tests/torch_test_neural_net.py |
| Cloud native / infrastructure | 4 | .github/workflows/build-pull-request.yml, benchs/bench_fw/benchmark.py |
| Security / supply chain | 4 | pyproject.toml, faiss/docs/simd_dynamic_dispatch_migration.md, tests/test_svs_py.py |
| Coding agent / software automation | 1 | faiss/docs/simd_dynamic_dispatch_migration.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | coding-agent, data-ml, database, databaseRuntime, frontendStack, infra, infraOps, observability, rag, security, securityTooling, vectorSearch |
| stacks | Python, C/C++ |
| capabilities | Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1058 |
| manifests | 12 |
| docs | 18 |
| tests | 160 |
| ci/ops | 12 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Faiss | Faiss / News / Introduction / Installing / How Faiss works / Full documentation of Faiss / Authors / Reference / Join the Faiss community / Legal | Faiss Faiss is a library for efficient similarity search and clustering of dense vectors. It contains algorithms that search in sets of vectors of any size, up to ones that possibly do not fit in RAM. It also contains supporting code for evaluation and parameter tuning. Faiss is written in C++ with complete wrappers for Python/numpy. Some of the most useful algorithms are implemented on the GPU. It is developed primarily at Meta's Fundamental AI Research https //ai.facebook.com/ group. News See CHANGELOG.md CHANGELOG.md for detailed information about latest features. Introduction Faiss contains several methods for similarity search. It assumes that the instances are represented as vectors an |


## Key Files

### Manifests

- demos/README.md
- benchs/README.md
- contrib/README.md
- demos/offline_ivf/README.md
- demos/rocksdb_ivf/README.md
- README.md
- benchs/bench_all_ivf/README.md
- benchs/distributed_ondisk/README.md
- benchs/link_and_code/README.md
- contrib/torch/README.md
- pyproject.toml
- faiss/cppcontrib/docker_dev/Dockerfile


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| faiss | 646 |
| tests | 121 |
| benchs | 79 |
| c_api | 73 |
| demos | 35 |
| tutorial | 23 |
| conda | 19 |
| contrib | 19 |
| .github | 14 |
| perf_tests | 9 |
| cmake | 5 |
| .clang-format | 1 |
| .dockerignore | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .cpp | 315 |
| .h | 308 |
| .py | 187 |
| .cu | 74 |
| .cuh | 65 |
| .md | 18 |
| .txt | 16 |
| .sh | 14 |
| .mm | 13 |
| .yml | 13 |
| [no-ext] | 9 |
| .yaml | 5 |
| .cmake | 4 |
| .c | 3 |
| .bash | 2 |
| .bat | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
