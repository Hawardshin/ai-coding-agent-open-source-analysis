# memgraph/memgraph

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/memgraph/memgraph |
| local path | sources/memgraph__memgraph |
| HEAD | 1d5910b |
| stars/forks | 4163 / 236 |
| language | C++ |
| license |  |
| pushedAt | 2026-06-17T17:10:31Z |
| trendScore / priorityScore | 161 / 449 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 357 | mage/README.md, mage/tests/e2e_migration/README.md, mage/tests/smoke-release-testing/README.md |
| Observability / evaluation | 146 | mgcxx/README.md, README.md, tests/mgbench/README.md |
| Database / data infrastructure | 78 | ADRs/README.md, mage/README.md, mage/tests/e2e_migration/README.md |
| Data / ML platform | 65 | mgcxx/README.md, tests/integration/durability/README.md, tests/mgbench/README.md |
| RAG / retrieval / knowledge | 34 | README.md, tests/stress/README.md, ADRs/007_db_specific_memory_tracking.md |
| Coding agent / software automation | 21 | skills/README.md, mage/tests/e2e/embeddings_test/test_parallel_embeddings.py, mage/tests/e2e/embeddings_test/test_remote_ollama.py |
| AI agent / orchestration | 13 | README.md, skills/README.md, .github/workflows/daily_benchmark.yaml |
| Local LLM / inference | 12 | mage/tests/e2e/embeddings_test/test_remote_node_sentence_failure/test.yml, mage/tests/e2e/embeddings_test/test_remote_ollama.py, mage/tests/e2e/embeddings_test/test_remote_text_failure/test.yml |
| Security / supply chain | 7 | tests/integration/triggers/README.md, tests/mgbench/README.md, tools/ci/query_module_count/readme.md |
| Developer tools / DX | 2 | mage/README.md, tests/stress/README.md |
| Frontend / app framework | 1 | README.md |
| MCP / agent interoperability | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 6007 |
| manifests | 40 |
| docs | 51 |
| tests | 4107 |
| ci/ops | 84 |
| spec artifacts | 11 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | :clipboard: Description / :zap: Features / :video_game: Memgraph Playground / :floppy_disk: Download & Install / Windows / macOS / Linux / Kubernetes / :rocket: Daily Builds / :cloud: Memgraph Cloud | <p align="center" <img alt="memgraph repo banner" src="https //github.com/user attachments/assets/9ab82a42 5b66 4091 bb7f 23f97d56bac4" / </p <p align="center" <a href="https //github.com/memgraph/memgraph/blob/master/licenses/APL.txt" <img src="https //img.shields.io/badge/license APL green" alt="license" title="license"/ </a <a href="https //github.com/memgraph/memgraph/blob/master/licenses/BSL.txt" <img src="https //img.shields.io/badge/license BSL yellowgreen" alt="license" title="license"/ </a <a href="https //github.com/memgraph/memgraph/blob/master/licenses/MEL.pdf" alt="Documentation" <img src="https //img.shields.io/badge/license MEL yellow" alt="license" title="license"/ </a </p <p |


## Key Files

### Manifests

- src/storage/README.md
- ADRs/README.md
- environment/README.md
- mage/README.md
- mage/tests/e2e_migration/README.md
- mage/tests/smoke-release-testing/mgconsole/README.md
- mage/tests/smoke-release-testing/README.md
- mgcxx/README.md
- README.md
- skills/README.md
- tests/drivers/javascript/README.md
- tests/e2e/README.md
- tests/e2e/streams/README.md
- tests/e2e/telemetry/README.md
- tests/gql_behave/README.md
- tests/integration/durability/README.md
- tests/integration/triggers/README.md
- tests/jepsen/README.md
- tests/manual/js/transaction_timeout/README.md
- tests/mgbench/README.md


### Spec / Docs / Prompt Artifacts

- tools/bench-graph-client/requirements.txt
- tests/requirements.txt
- mage/python/tests/requirements.txt
- mage/tests/smoke-release-testing/requirements.txt
- requirements.txt
- tests/gql_behave/requirements.txt
- tests/integration/ldap/requirements.txt
- tests/query_modules/requirements.txt
- tools/requirements.txt
- mage/python/requirements.txt
- src/auth/reference_modules/requirements.txt


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| tests | 2225 |
| mage | 2168 |
| src | 1089 |
| tools | 139 |
| conan_recipes | 68 |
| release | 64 |
| environment | 59 |
| .github | 44 |
| licenses | 34 |
| query_modules | 33 |
| include | 15 |
| mgcxx | 11 |
| ADRs | 10 |
| conan_config | 8 |


## Extension Distribution

| ext | count |
| --- | --- |
| .yml | 971 |
| .cyp | 837 |
| .cpp | 794 |
| .py | 731 |
| .hpp | 705 |
| .cypher | 379 |
| .txt | 325 |
| .bin | 214 |
| [no-ext] | 175 |
| .yaml | 151 |
| .sh | 141 |
| .feature | 122 |
| .md | 50 |
| .bash | 45 |
| .patch | 39 |
| .rs | 28 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
