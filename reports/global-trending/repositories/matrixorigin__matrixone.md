# matrixorigin/matrixone

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/matrixorigin/matrixone |
| local path | sources/matrixorigin__matrixone |
| HEAD | 629f58d |
| stars/forks | 1847 / 299 |
| language | Go |
| license |  |
| pushedAt | 2026-06-17T17:15:59Z |
| trendScore / priorityScore | 173 / 433 |


## Interpretation

- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 500 | clients/python/examples/README.md, clients/python/README.md, pkg/udf/pythonservice/demo/README.md |
| RAG / retrieval / knowledge | 344 | clients/python/examples/README.md, clients/python/README.md, cgo/README.md |
| Developer tools / DX | 138 | clients/python/examples/README.md, clients/python/README.md, pkg/udf/pythonservice/demo/README.md |
| Observability / evaluation | 116 | clients/python/README.md, README.md, clients/python/pyproject.toml |
| Cloud native / infrastructure | 115 | README.md, etc/launch-minio-local/README.md, etc/launch-tae-compose/README.md |
| Data / ML platform | 54 | clients/python/README.md, pkg/udf/pythonservice/demo/README.md, README.md |
| Security / supply chain | 49 | clients/python/README.md, README.md, etc/launch-minio-local/README.md |
| AI agent / orchestration | 2 | .github/copilot-instructions.md |
| Frontend / app framework | 2 | Makefile |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python, Go, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 6399 |
| manifests | 40 |
| docs | 133 |
| tests | 3776 |
| ci/ops | 20 |
| spec artifacts | 4 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Create client and connect | What is MatrixOne? / 🎬 **Git for Data - The Game Changer** / 🎯 **Built for the AI Era** / 🚀 **One Database for Everything** / ⚡️ Get Started in 60 Seconds / 1️⃣ Launch MatrixOne / 2️⃣ Create Database / 3️⃣ Connect & Query / Create client and connect / Define model using MatrixOne ORM | <div class="column" align="middle" <p align="center" <img alt="MatrixOne All in One" height="50" src="https //github.com/matrixorigin/artwork/blob/main/docs/overview/logo.png?raw=true" </p </a <a href="https //github.com/matrixorigin/matrixone/blob/main/LICENSE" <img src="https //img.shields.io/badge/License Apache%202.0 red.svg" alt="license"/ </a <a href="https //golang.org/" <img src="https //img.shields.io/badge/Language Go blue.svg" alt="language"/ </a <img src="https //img.shields.io/badge/platform MacOS white.svg" alt="macos"/ <img src="https //img.shields.io/badge/platform Linux 9cf.svg" alt="linux"/ <a href="https //www.codefactor.io/repository/github/matrixorigin/matrixone" <img sr |


## Key Files

### Manifests

- clients/python/examples/README.md
- docs/rfcs/README.md
- clients/python/README.md
- cgo/README.md
- pkg/udf/pythonservice/demo/README.md
- README.md
- test/distributed/cases/geo/README.md
- test/distributed/cases/README.md
- cgo/cuvs/README.md
- etc/launch-minio-local/README.md
- etc/launch-tae-compose/README.md
- optools/images/README.md
- pkg/common/arenaskl/README.md
- pkg/common/chaos/README.md
- pkg/common/morpc/README.md
- pkg/container/bytejson/README.md
- pkg/logservice/README.md
- pkg/monlp/tokenizer/dict/README.md
- pkg/sql/colexec/table_function/README.md
- pkg/txn/trace/README.md


### Spec / Docs / Prompt Artifacts

- clients/python/docs/requirements.txt
- clients/python/requirements.txt
- .github/copilot-instructions.md
- docs/ai-skills/architecture.md


### Agent Instruction Files

- .github/copilot-instructions.md


## Top Directories

| dir | count |
| --- | --- |
| pkg | 3464 |
| test | 2331 |
| clients | 270 |
| cgo | 86 |
| thirdparties | 68 |
| etc | 55 |
| docs | 31 |
| .github | 21 |
| proto | 21 |
| cmd | 20 |
| optools | 11 |
| LICENSES | 4 |
| .dockerignore | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .go | 3388 |
| .result | 1023 |
| .sql | 814 |
| .test | 235 |
| .py | 193 |
| .csv | 129 |
| .parquet | 79 |
| .md | 77 |
| .h | 70 |
| .rst | 53 |
| [no-ext] | 50 |
| .toml | 41 |
| .parq | 36 |
| .proto | 26 |
| .yml | 24 |
| .cu | 19 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
