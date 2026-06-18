# weaviate/Verba Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Local clone structure analysis: 377 files, 68 directories.

## 요약

- 조사 단위: `sources/weaviate__Verba` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 377 files, 68 directories, depth score 100, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 retrieval/vector path, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 retrieval=img/verba_rag.png, goldenverba/tests/chunk/test_chunk.py, goldenverba/server/frontend/out/index.html이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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


## Repository Context

| Field | Value |
| --- | --- |
| Repository | weaviate/Verba |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | mixed |
| Language | none |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | solid |
| Evidence | deep-source+report |
| Source | [sources/weaviate__Verba](../../../../sources/weaviate__Verba) |
| Existing report | [reports/clone-structures/weaviate__Verba.md](../../../clone-structures/weaviate__Verba.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 377 / 68 |
| Max observed depth | 10 |
| Top directories | .github, frontend, goldenverba, img |
| Top extensions | .js: 151, .py: 56, .woff2: 41, .tsx: 32, .png: 29, .css: 11, .md: 8, .ts: 7, .glsl: 6, .glb: 4, .gltf: 4, .hdr: 4 |
| Source patterns | retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| frontend | top-level component | 1 |
| goldenverba | top-level component | 1 |
| img | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [img/verba_rag.png](../../../../sources/weaviate__Verba/img/verba_rag.png) | retrieval signal |
| retrieval | [goldenverba/tests/chunk/test_chunk.py](../../../../sources/weaviate__Verba/goldenverba/tests/chunk/test_chunk.py) | retrieval signal |
| retrieval | [goldenverba/server/frontend/out/index.html](../../../../sources/weaviate__Verba/goldenverba/server/frontend/out/index.html) | retrieval signal |
| retrieval | [goldenverba/server/frontend/out/index.txt](../../../../sources/weaviate__Verba/goldenverba/server/frontend/out/index.txt) | retrieval signal |
| docs | [README.md](../../../../sources/weaviate__Verba/README.md) | docs signal |
| eval | [goldenverba/tests/document/test_document.py](../../../../sources/weaviate__Verba/goldenverba/tests/document/test_document.py) | eval signal |
| config | [frontend/package.json](../../../../sources/weaviate__Verba/frontend/package.json) | config signal |
| config | [frontend/tsconfig.json](../../../../sources/weaviate__Verba/frontend/tsconfig.json) | config signal |
| ci | [.github/workflows/docker-image.yml](../../../../sources/weaviate__Verba/.github/workflows/docker-image.yml) | ci support |
| container | [docker-compose.yml](../../../../sources/weaviate__Verba/docker-compose.yml) | container support |
| container | [Dockerfile](../../../../sources/weaviate__Verba/Dockerfile) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 14 | [img/verba_rag.png](../../../../sources/weaviate__Verba/img/verba_rag.png)<br>[goldenverba/tests/chunk/test_chunk.py](../../../../sources/weaviate__Verba/goldenverba/tests/chunk/test_chunk.py)<br>[goldenverba/server/frontend/out/index.html](../../../../sources/weaviate__Verba/goldenverba/server/frontend/out/index.html)<br>[goldenverba/server/frontend/out/index.txt](../../../../sources/weaviate__Verba/goldenverba/server/frontend/out/index.txt)<br>[goldenverba/components/chunk.py](../../../../sources/weaviate__Verba/goldenverba/components/chunk.py)<br>[goldenverba/components/embedding/__init__.py](../../../../sources/weaviate__Verba/goldenverba/components/embedding/__init__.py)<br>[goldenverba/components/embedding/CohereEmbedder.py](../../../../sources/weaviate__Verba/goldenverba/components/embedding/CohereEmbedder.py)<br>[goldenverba/components/embedding/GoogleEmbedder.py](../../../../sources/weaviate__Verba/goldenverba/components/embedding/GoogleEmbedder.py) |
| spec | 1 | [img/verba_architecture.png](../../../../sources/weaviate__Verba/img/verba_architecture.png) |
| eval | 2 | [goldenverba/tests/document/test_document.py](../../../../sources/weaviate__Verba/goldenverba/tests/document/test_document.py)<br>[goldenverba/tests/chunk/test_chunk.py](../../../../sources/weaviate__Verba/goldenverba/tests/chunk/test_chunk.py) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/docker-image.yml](../../../../sources/weaviate__Verba/.github/workflows/docker-image.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/weaviate__Verba/docker-compose.yml)<br>[Dockerfile](../../../../sources/weaviate__Verba/Dockerfile) |
| instruction | 0 | not obvious |
| docs | 1 | [README.md](../../../../sources/weaviate__Verba/README.md) |
| config | 2 | [frontend/package.json](../../../../sources/weaviate__Verba/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/weaviate__Verba/frontend/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2 | [goldenverba/tests/document/test_document.py](../../../../sources/weaviate__Verba/goldenverba/tests/document/test_document.py)<br>[goldenverba/tests/chunk/test_chunk.py](../../../../sources/weaviate__Verba/goldenverba/tests/chunk/test_chunk.py) |
| CI workflows | 1 | [.github/workflows/docker-image.yml](../../../../sources/weaviate__Verba/.github/workflows/docker-image.yml) |
| Containers / deploy | 2 | [docker-compose.yml](../../../../sources/weaviate__Verba/docker-compose.yml)<br>[Dockerfile](../../../../sources/weaviate__Verba/Dockerfile) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | none |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `img/verba_rag.png`, `goldenverba/tests/chunk/test_chunk.py`, `goldenverba/server/frontend/out/index.html`.
2. Inspect retrieval/memory/indexing through: `img/verba_rag.png`, `goldenverba/tests/chunk/test_chunk.py`, `goldenverba/server/frontend/out/index.html`.
3. Verify behavior through test/eval files: `goldenverba/tests/document/test_document.py`, `goldenverba/tests/chunk/test_chunk.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Local clone structure analysis 377 files, 68 directories.. 핵심 구조 신호는 Dockerfile, docker-compose.yml, README.md, LICENSE, tests, ci이며, deep-source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

mixed 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 license metadata missing입니다.
