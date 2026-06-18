# opendataloader-project/opendataloader-pdf Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

PDF Parser for AI-ready data. Automate PDF accessibility. Open-source.

## 요약

- 조사 단위: `sources/opendataloader-project__opendataloader-pdf` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 331 files, 101 directories, depth score 120, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=node/opendataloader-pdf/src/index.ts, examples/python/rag/basic_chunking.py, examples/python/rag/langchain_example.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | opendataloader-project/opendataloader-pdf |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Java |
| Stars | 25243 |
| Forks | 2383 |
| License | Apache-2.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/opendataloader-project__opendataloader-pdf](../../../../sources/opendataloader-project__opendataloader-pdf) |
| Existing report | [reports/llm-wiki/repositories/opendataloader-project__opendataloader-pdf.md](../../../llm-wiki/repositories/opendataloader-project__opendataloader-pdf.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 331 / 101 |
| Max observed depth | 11 |
| Top directories | .github, build-scripts, docs, examples, java, LICENSE_TEMPLATE, node, python, samples, scripts, THIRD_PARTY |
| Top extensions | .java: 172, .py: 33, .md: 29, .txt: 17, .json: 16, .pdf: 15, .ts: 11, .sh: 10, (none): 9, .xml: 5, .mjs: 3, .yml: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 28 |
| examples/python | examples workspace | 10 |
| .github | ci surface | 1 |
| build-scripts | top-level component | 1 |
| examples | top-level component | 1 |
| java | top-level component | 1 |
| LICENSE_TEMPLATE | top-level component | 1 |
| node | top-level component | 1 |
| python | top-level component | 1 |
| samples | top-level component | 1 |
| scripts | top-level component | 1 |
| THIRD_PARTY | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| build | package.json | build-java | bash scripts/build-java.sh |
| build | package.json | export-options | npm run build-java && java -Djava.awt.headless=true -Dapple.awt.UIElement=true -jar java/opendataloader-pdf-cli/target/opendataloader-pdf-cli-0.0.0.jar --export-options > options.json |
| utility | package.json | generate-options | node scripts/generate-options.mjs |
| utility | package.json | sync-options | npm run export-options && npm run generate-options |
| utility | package.json | generate-schema | node scripts/generate-schema.mjs |
| utility | package.json | sync-schema | npm run generate-schema |
| utility | package.json | sync | npm run sync-options && npm run sync-schema |


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
| retrieval | [node/opendataloader-pdf/src/index.ts](../../../../sources/opendataloader-project__opendataloader-pdf/node/opendataloader-pdf/src/index.ts) | retrieval signal |
| retrieval | [examples/python/rag/basic_chunking.py](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/basic_chunking.py) | retrieval signal |
| retrieval | [examples/python/rag/langchain_example.py](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/langchain_example.py) | retrieval signal |
| retrieval | [examples/python/rag/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/README.md) | retrieval signal |
| entrypoints | [python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py) | entrypoints signal |
| entrypoints | [python/opendataloader-pdf/src/opendataloader_pdf/__main__.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf/src/opendataloader_pdf/__main__.py) | entrypoints signal |
| entrypoints | [node/opendataloader-pdf/src/cli.ts](../../../../sources/opendataloader-project__opendataloader-pdf/node/opendataloader-pdf/src/cli.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/opendataloader-project__opendataloader-pdf/README.md) | docs signal |
| docs | [python/opendataloader-pdf-mcp/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/README.md) | docs signal |
| docs | [examples/python/batch/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/batch/README.md) | docs signal |
| eval | [scripts/bench.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/bench.sh) | eval signal |
| eval | [scripts/test-java.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/test-java.sh) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py)<br>[python/opendataloader-pdf/src/opendataloader_pdf/__main__.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf/src/opendataloader_pdf/__main__.py)<br>[node/opendataloader-pdf/src/cli.ts](../../../../sources/opendataloader-project__opendataloader-pdf/node/opendataloader-pdf/src/cli.ts)<br>[node/opendataloader-pdf/src/index.ts](../../../../sources/opendataloader-project__opendataloader-pdf/node/opendataloader-pdf/src/index.ts) |
| agentRuntime | 1 | [python/opendataloader-pdf/src/opendataloader_pdf/runner.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf/src/opendataloader_pdf/runner.py) |
| mcp | 7 | [python/opendataloader-pdf-mcp/pyproject.toml](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/pyproject.toml)<br>[python/opendataloader-pdf-mcp/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/README.md)<br>[python/opendataloader-pdf-mcp/uv.lock](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/uv.lock)<br>[python/opendataloader-pdf-mcp/tests/conftest.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/tests/conftest.py)<br>[python/opendataloader-pdf-mcp/tests/test_convert_pdf.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/tests/test_convert_pdf.py)<br>[python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/__init__.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/__init__.py)<br>[python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py) |
| retrieval | 5 | [node/opendataloader-pdf/src/index.ts](../../../../sources/opendataloader-project__opendataloader-pdf/node/opendataloader-pdf/src/index.ts)<br>[examples/python/rag/basic_chunking.py](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/basic_chunking.py)<br>[examples/python/rag/langchain_example.py](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/langchain_example.py)<br>[examples/python/rag/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/README.md)<br>[examples/python/rag/requirements.txt](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/requirements.txt) |
| spec | 5 | [examples/python/rag/requirements.txt](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/requirements.txt)<br>[examples/python/batch/requirements.txt](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/batch/requirements.txt)<br>[docs/superpowers/specs/2026-03-16-cid-font-detection-design.md](../../../../sources/opendataloader-project__opendataloader-pdf/docs/superpowers/specs/2026-03-16-cid-font-detection-design.md)<br>[docs/superpowers/specs/2026-04-29-hybrid-hancom-ai-options-design.md](../../../../sources/opendataloader-project__opendataloader-pdf/docs/superpowers/specs/2026-04-29-hybrid-hancom-ai-options-design.md)<br>[docs/hybrid/hybrid-mode-design.md](../../../../sources/opendataloader-project__opendataloader-pdf/docs/hybrid/hybrid-mode-design.md) |
| eval | 93 | [scripts/bench.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/bench.sh)<br>[scripts/test-java.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/test-java.sh)<br>[scripts/test-node.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/test-node.sh)<br>[scripts/test-python.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/test-python.sh)<br>[scripts/experiments/docling_baseline_bench.py](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/experiments/docling_baseline_bench.py)<br>[scripts/experiments/docling_fastapi_bench.py](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/experiments/docling_fastapi_bench.py)<br>[scripts/experiments/docling_subprocess_bench.py](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/experiments/docling_subprocess_bench.py)<br>[python/opendataloader-pdf-mcp/tests/conftest.py](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/tests/conftest.py) |
| security | 1 | [.github/SECURITY.md](../../../../sources/opendataloader-project__opendataloader-pdf/.github/SECURITY.md) |
| ci | 2 | [.github/workflows/release.yml](../../../../sources/opendataloader-project__opendataloader-pdf/.github/workflows/release.yml)<br>[.github/workflows/test-benchmark.yml](../../../../sources/opendataloader-project__opendataloader-pdf/.github/workflows/test-benchmark.yml) |
| container | 0 | not obvious |
| instruction | 1 | [CLAUDE.md](../../../../sources/opendataloader-project__opendataloader-pdf/CLAUDE.md) |
| docs | 28 | [README.md](../../../../sources/opendataloader-project__opendataloader-pdf/README.md)<br>[python/opendataloader-pdf-mcp/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/README.md)<br>[examples/python/rag/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/README.md)<br>[examples/python/batch/README.md](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/batch/README.md)<br>[docs/superpowers/specs/2026-03-16-cid-font-detection-design.md](../../../../sources/opendataloader-project__opendataloader-pdf/docs/superpowers/specs/2026-03-16-cid-font-detection-design.md)<br>[docs/superpowers/specs/2026-04-29-hybrid-hancom-ai-options-design.md](../../../../sources/opendataloader-project__opendataloader-pdf/docs/superpowers/specs/2026-04-29-hybrid-hancom-ai-options-design.md)<br>[docs/superpowers/plans/2026-03-16-cid-font-detection.md](../../../../sources/opendataloader-project__opendataloader-pdf/docs/superpowers/plans/2026-03-16-cid-font-detection.md)<br>[docs/superpowers/plans/2026-04-18-hancom-ai-mock-server.md](../../../../sources/opendataloader-project__opendataloader-pdf/docs/superpowers/plans/2026-04-18-hancom-ai-mock-server.md) |
| config | 9 | [package.json](../../../../sources/opendataloader-project__opendataloader-pdf/package.json)<br>[python/opendataloader-pdf-mcp/pyproject.toml](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/pyproject.toml)<br>[python/opendataloader-pdf-mcp/uv.lock](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf-mcp/uv.lock)<br>[python/opendataloader-pdf/pyproject.toml](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf/pyproject.toml)<br>[python/opendataloader-pdf/uv.lock](../../../../sources/opendataloader-project__opendataloader-pdf/python/opendataloader-pdf/uv.lock)<br>[node/opendataloader-pdf/package.json](../../../../sources/opendataloader-project__opendataloader-pdf/node/opendataloader-pdf/package.json)<br>[node/opendataloader-pdf/tsconfig.json](../../../../sources/opendataloader-project__opendataloader-pdf/node/opendataloader-pdf/tsconfig.json)<br>[examples/python/rag/requirements.txt](../../../../sources/opendataloader-project__opendataloader-pdf/examples/python/rag/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 93 | [scripts/bench.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/bench.sh)<br>[scripts/test-java.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/test-java.sh)<br>[scripts/test-node.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/test-node.sh)<br>[scripts/test-python.sh](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/test-python.sh)<br>[scripts/experiments/docling_baseline_bench.py](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/experiments/docling_baseline_bench.py)<br>[scripts/experiments/docling_fastapi_bench.py](../../../../sources/opendataloader-project__opendataloader-pdf/scripts/experiments/docling_fastapi_bench.py) |
| CI workflows | 2 | [.github/workflows/release.yml](../../../../sources/opendataloader-project__opendataloader-pdf/.github/workflows/release.yml)<br>[.github/workflows/test-benchmark.yml](../../../../sources/opendataloader-project__opendataloader-pdf/.github/workflows/test-benchmark.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [.github/SECURITY.md](../../../../sources/opendataloader-project__opendataloader-pdf/.github/SECURITY.md) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/opendataloader-project__opendataloader-pdf/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `node/opendataloader-pdf/src/index.ts`, `examples/python/rag/basic_chunking.py`, `examples/python/rag/langchain_example.py`.
2. Trace execution through entrypoints: `python/opendataloader-pdf-mcp/src/opendataloader_pdf_mcp/server.py`, `python/opendataloader-pdf/src/opendataloader_pdf/__main__.py`, `node/opendataloader-pdf/src/cli.ts`.
3. Map agent/tool runtime through: `python/opendataloader-pdf/src/opendataloader_pdf/runner.py`.
4. Inspect retrieval/memory/indexing through: `node/opendataloader-pdf/src/index.ts`, `examples/python/rag/basic_chunking.py`, `examples/python/rag/langchain_example.py`.
5. Verify behavior through test/eval files: `scripts/bench.sh`, `scripts/test-java.sh`, `scripts/test-node.sh`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 PDF Parser for AI ready data. Automate PDF accessibility. Open source.. 핵심 구조 신호는 Java, package.json, README.md, CLAUDE.md, LICENSE, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
