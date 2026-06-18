# alibaba/zvec

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/alibaba/zvec |
| local path | sources/alibaba__zvec |
| HEAD | 85cd08d |
| stars/forks | 10812 / 625 |
| language | C++ |
| license |  |
| pushedAt | 2026-06-17T06:18:12Z |
| trendScore / priorityScore | 164 / 391 |


## Interpretation

- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 500 | README.md, python/tests/test_collection_fts_vector_hybrid.py, python/tests/test_embedding.py |
| Cloud native / infrastructure | 86 | tools/core/README.md, pyproject.toml, .github/workflows/01-ci-pipeline.yml |
| Data / ML platform | 76 | README.md, tools/core/README.md, python/tests/test_collection_fts_vector_hybrid.py |
| Security / supply chain | 74 | tools/core/README.md, examples/c/CMakeLists.txt, python/tests/test_collection_fts_vector_hybrid.py |
| Developer tools / DX | 25 | README.md, .github/workflows/nightly_coverage.yml, python/tests/test_embedding.py |
| Observability / evaluation | 12 | README.md, .github/workflows/continuous_bench.yml, .github/workflows/issue-auto-assign.yml |
| Database / data infrastructure | 6 | README.md, pyproject.toml, python/tests/test_collection_fts_vector_hybrid.py |
| Local LLM / inference | 4 | python/zvec/extension/http_embedding_function.py |
| Frontend / app framework | 1 | pyproject.toml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, observability, rag, security, securityTooling, vectorSearch |
| stacks | Python, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1183 |
| manifests | 4 |
| docs | 6 |
| tests | 225 |
| ci/ops | 17 |
| spec artifacts | 1 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Define collection schema | 💫 Features / 📦 Installation / ✅ Supported Platforms / 🛠️ Building from Source / ⚡ One-Minute Example / Define collection schema / Create collection / Insert documents / Search by vector similarity / Results: list of {'id': str, 'score': float, ...}, sorted by relevance | <p align="right" English <a href="./README CN.md" 中文</a </p <div align="center" <picture <source media=" prefers color scheme dark " srcset="https //zvec.oss cn hongkong.aliyuncs.com/logo/github log 2.svg" / <img src="https //zvec.oss cn hongkong.aliyuncs.com/logo/github logo 1.svg" width="400" alt="zvec logo" / </picture </div <p align="center" <a href="https //codecov.io/github/alibaba/zvec" <img src="https //codecov.io/github/alibaba/zvec/graph/badge.svg?token=O81CT45B66" alt="Code Coverage"/ </a <a href="https //github.com/alibaba/zvec/actions/workflows/01 ci pipeline.yml" <img src="https //github.com/alibaba/zvec/actions/workflows/01 ci pipeline.yml/badge.svg?branch=main" alt="Main"/ </ |


## Key Files

### Manifests

- README.md
- scripts/README.md
- tools/core/README.md
- pyproject.toml


### Spec / Docs / Prompt Artifacts

- .github/ISSUE_TEMPLATE/benchmark.yml


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 794 |
| tests | 192 |
| python | 73 |
| thirdparty | 39 |
| .github | 29 |
| tools | 23 |
| examples | 12 |
| cmake | 4 |
| scripts | 4 |
| .clang-format | 1 |
| .clang-tidy | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .cc | 496 |
| .h | 418 |
| .txt | 76 |
| .py | 69 |
| .yml | 25 |
| .i | 17 |
| .patch | 15 |
| .c | 10 |
| [no-ext] | 9 |
| .cpp | 6 |
| .md | 6 |
| .sh | 6 |
| .g4 | 4 |
| .interp | 4 |
| .pyi | 4 |
| .tokens | 4 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
