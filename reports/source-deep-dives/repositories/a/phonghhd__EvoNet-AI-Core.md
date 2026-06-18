# phonghhd/EvoNet-AI-Core Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Autonomous AI Security Agent leveraging LLMs, RAG, and Knowledge Graphs for automated CVE analysis and auto-patching.

## 요약

- 조사 단위: `sources/phonghhd__EvoNet-AI-Core` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 78 files, 17 directories, depth score 98, key references 8개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=app/main.py이고, 의존성 단서는 fastapi, pydantic, click, typer, transformers, chroma, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 8개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | phonghhd/EvoNet-AI-Core |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 4 |
| Forks | none |
| License | Apache-2.0 |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/phonghhd__EvoNet-AI-Core](../../../../sources/phonghhd__EvoNet-AI-Core) |
| Existing report | [reports/llm-wiki/repositories/phonghhd__EvoNet-AI-Core.md](../../../llm-wiki/repositories/phonghhd__EvoNet-AI-Core.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 78 / 17 |
| Max observed depth | 4 |
| Top directories | .github, app, data, docs, models, tests, workspace |
| Top extensions | .py: 61, .md: 5, .json: 3, .yml: 3, .html: 2, .example: 1, .optimized: 1, .txt: 1, (none): 1 |
| Source patterns | cli-first, api/server, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| tests | validation surface | 3 |
| .github | ci surface | 1 |
| app | top-level component | 1 |
| data | top-level component | 1 |
| models | top-level component | 1 |
| workspace | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | chroma |
| modelRuntime | transformers |
| webRuntime | fastapi |
| developerSurface | click, typer |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| entrypoints | [app/main.py](../../../../sources/phonghhd__EvoNet-AI-Core/app/main.py) | entrypoints signal |
| config | [requirements.txt](../../../../sources/phonghhd__EvoNet-AI-Core/requirements.txt) | config signal |
| ci | [.github/workflows/cve_crawler.yml](../../../../sources/phonghhd__EvoNet-AI-Core/.github/workflows/cve_crawler.yml) | ci support |
| ci | [.github/workflows/knowledge_builder.yml](../../../../sources/phonghhd__EvoNet-AI-Core/.github/workflows/knowledge_builder.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/phonghhd__EvoNet-AI-Core/docker-compose.yml) | container support |
| container | [Dockerfile.optimized](../../../../sources/phonghhd__EvoNet-AI-Core/Dockerfile.optimized) | container support |
| eval | [workspace/test_fix.py](../../../../sources/phonghhd__EvoNet-AI-Core/workspace/test_fix.py) | eval support |
| eval | [workspace/test/vulnerable_app.py](../../../../sources/phonghhd__EvoNet-AI-Core/workspace/test/vulnerable_app.py) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [app/main.py](../../../../sources/phonghhd__EvoNet-AI-Core/app/main.py) |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 5 | [app/advanced_rag.py](../../../../sources/phonghhd__EvoNet-AI-Core/app/advanced_rag.py)<br>[app/graph_rag.py](../../../../sources/phonghhd__EvoNet-AI-Core/app/graph_rag.py)<br>[app/scripts/pinecone_ingest.py](../../../../sources/phonghhd__EvoNet-AI-Core/app/scripts/pinecone_ingest.py)<br>[app/scripts/vector_storage.py](../../../../sources/phonghhd__EvoNet-AI-Core/app/scripts/vector_storage.py)<br>[.github/workflows/knowledge_builder.yml](../../../../sources/phonghhd__EvoNet-AI-Core/.github/workflows/knowledge_builder.yml) |
| spec | 2 | [requirements.txt](../../../../sources/phonghhd__EvoNet-AI-Core/requirements.txt)<br>[docs/ARCHITECTURE.md](../../../../sources/phonghhd__EvoNet-AI-Core/docs/ARCHITECTURE.md) |
| eval | 5 | [workspace/test_fix.py](../../../../sources/phonghhd__EvoNet-AI-Core/workspace/test_fix.py)<br>[workspace/test/vulnerable_app.py](../../../../sources/phonghhd__EvoNet-AI-Core/workspace/test/vulnerable_app.py)<br>[tests/__init__.py](../../../../sources/phonghhd__EvoNet-AI-Core/tests/__init__.py)<br>[tests/test_core.py](../../../../sources/phonghhd__EvoNet-AI-Core/tests/test_core.py)<br>[app/scripts/test_api.py](../../../../sources/phonghhd__EvoNet-AI-Core/app/scripts/test_api.py) |
| security | 3 | [app/scripts/advanced_security.py](../../../../sources/phonghhd__EvoNet-AI-Core/app/scripts/advanced_security.py)<br>[app/scripts/ai_security_analyst.py](../../../../sources/phonghhd__EvoNet-AI-Core/app/scripts/ai_security_analyst.py)<br>[app/rl_environment/security_gym.py](../../../../sources/phonghhd__EvoNet-AI-Core/app/rl_environment/security_gym.py) |
| ci | 2 | [.github/workflows/cve_crawler.yml](../../../../sources/phonghhd__EvoNet-AI-Core/.github/workflows/cve_crawler.yml)<br>[.github/workflows/knowledge_builder.yml](../../../../sources/phonghhd__EvoNet-AI-Core/.github/workflows/knowledge_builder.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/phonghhd__EvoNet-AI-Core/docker-compose.yml)<br>[Dockerfile.optimized](../../../../sources/phonghhd__EvoNet-AI-Core/Dockerfile.optimized) |
| instruction | 0 | not obvious |
| docs | 4 | [README.md](../../../../sources/phonghhd__EvoNet-AI-Core/README.md)<br>[docs/API.md](../../../../sources/phonghhd__EvoNet-AI-Core/docs/API.md)<br>[docs/ARCHITECTURE.md](../../../../sources/phonghhd__EvoNet-AI-Core/docs/ARCHITECTURE.md)<br>[docs/DEPLOYMENT.md](../../../../sources/phonghhd__EvoNet-AI-Core/docs/DEPLOYMENT.md) |
| config | 1 | [requirements.txt](../../../../sources/phonghhd__EvoNet-AI-Core/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 5 | [workspace/test_fix.py](../../../../sources/phonghhd__EvoNet-AI-Core/workspace/test_fix.py)<br>[workspace/test/vulnerable_app.py](../../../../sources/phonghhd__EvoNet-AI-Core/workspace/test/vulnerable_app.py)<br>[tests/__init__.py](../../../../sources/phonghhd__EvoNet-AI-Core/tests/__init__.py)<br>[tests/test_core.py](../../../../sources/phonghhd__EvoNet-AI-Core/tests/test_core.py)<br>[app/scripts/test_api.py](../../../../sources/phonghhd__EvoNet-AI-Core/app/scripts/test_api.py) |
| CI workflows | 2 | [.github/workflows/cve_crawler.yml](../../../../sources/phonghhd__EvoNet-AI-Core/.github/workflows/cve_crawler.yml)<br>[.github/workflows/knowledge_builder.yml](../../../../sources/phonghhd__EvoNet-AI-Core/.github/workflows/knowledge_builder.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/phonghhd__EvoNet-AI-Core/docker-compose.yml)<br>[Dockerfile.optimized](../../../../sources/phonghhd__EvoNet-AI-Core/Dockerfile.optimized) |
| Security / policy | 3 | [app/scripts/advanced_security.py](../../../../sources/phonghhd__EvoNet-AI-Core/app/scripts/advanced_security.py)<br>[app/scripts/ai_security_analyst.py](../../../../sources/phonghhd__EvoNet-AI-Core/app/scripts/ai_security_analyst.py)<br>[app/rl_environment/security_gym.py](../../../../sources/phonghhd__EvoNet-AI-Core/app/rl_environment/security_gym.py) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `app/main.py`, `requirements.txt`, `.github/workflows/cve_crawler.yml`.
2. Trace execution through entrypoints: `app/main.py`.
3. Inspect retrieval/memory/indexing through: `app/advanced_rag.py`, `app/graph_rag.py`, `app/scripts/pinecone_ingest.py`.
4. Verify behavior through test/eval files: `workspace/test_fix.py`, `workspace/test/vulnerable_app.py`, `tests/__init__.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Autonomous AI Security Agent leveraging LLMs, RAG, and Knowledge Graphs for automated CVE analysis and auto patching.. 핵심 구조 신호는 Python, requirements.txt, docker-compose.yml, README.md, fastapi, pydantic이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
