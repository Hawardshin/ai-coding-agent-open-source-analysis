# datawhalechina/tiny-universe Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

《大模型白盒子构建指南》：一个全手搓的Tiny-Universe

## 요약

- 조사 단위: `sources/datawhalechina__tiny-universe` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 183 files, 53 directories, depth score 100, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 retrieval=content/TinyRAG/RAG/Embeddings.py, content/TinyRAG/RAG/LLM.py, content/TinyRAG/RAG/utils.py이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | datawhalechina/tiny-universe |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Jupyter Notebook |
| Stars | 4916 |
| Forks | 467 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/datawhalechina__tiny-universe](../../../../sources/datawhalechina__tiny-universe) |
| Existing report | [reports/llm-wiki/repositories/datawhalechina__tiny-universe.md](../../../llm-wiki/repositories/datawhalechina__tiny-universe.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 183 / 53 |
| Max observed depth | 7 |
| Top directories | content, images |
| Top extensions | .png: 53, .py: 50, .md: 19, .jpg: 16, .jsonl: 10, .txt: 10, .json: 8, .ipynb: 7, (none): 3, .0: 1, .example: 1, .gz: 1 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| content | top-level component | 1 |
| images | top-level component | 1 |


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
| retrieval | [content/TinyRAG/RAG/Embeddings.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/Embeddings.py) | retrieval signal |
| retrieval | [content/TinyRAG/RAG/LLM.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/LLM.py) | retrieval signal |
| retrieval | [content/TinyRAG/RAG/utils.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/utils.py) | retrieval signal |
| retrieval | [content/TinyRAG/RAG/VectorBase.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/VectorBase.py) | retrieval signal |
| entrypoints | [content/TinyIMGRAG/main.py](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/main.py) | entrypoints signal |
| docs | [README.md](../../../../sources/datawhalechina__tiny-universe/README.md) | docs signal |
| docs | [content/TinyTransformer/readme.md](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/readme.md) | docs signal |
| docs | [content/TinyRAG/readme.md](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/readme.md) | docs signal |
| docs | [content/TinyLLM/README.md](../../../../sources/datawhalechina__tiny-universe/content/TinyLLM/README.md) | docs signal |
| eval | [content/TinyTransformer/test.ipynb](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/test.ipynb) | eval signal |
| eval | [content/TinyRAG/test.ipynb](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/test.ipynb) | eval signal |
| eval | [content/TinyIMGRAG/packages/CLIP-main/tests/test_consistency.py](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/tests/test_consistency.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [content/TinyIMGRAG/main.py](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/main.py) |
| agentRuntime | 5 | [content/TinyGraphRAG/images/workflow.png](../../../../sources/datawhalechina__tiny-universe/content/TinyGraphRAG/images/workflow.png)<br>[content/TinyAgent/agent_demo.ipynb](../../../../sources/datawhalechina__tiny-universe/content/TinyAgent/agent_demo.ipynb)<br>[content/TinyAgent/tinyAgent/Agent.py](../../../../sources/datawhalechina__tiny-universe/content/TinyAgent/tinyAgent/Agent.py)<br>[content/TinyAgent/tinyAgent/tool.py](../../../../sources/datawhalechina__tiny-universe/content/TinyAgent/tinyAgent/tool.py)<br>[content/TinyAgent/images/Agent.png](../../../../sources/datawhalechina__tiny-universe/content/TinyAgent/images/Agent.png) |
| mcp | 0 | not obvious |
| retrieval | 11 | [content/TinyRAG/RAG/Embeddings.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/Embeddings.py)<br>[content/TinyRAG/RAG/LLM.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/LLM.py)<br>[content/TinyRAG/RAG/utils.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/utils.py)<br>[content/TinyRAG/RAG/VectorBase.py](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/RAG/VectorBase.py)<br>[content/TinyRAG/images/RAG.png](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/images/RAG.png)<br>[content/TinyRAG/images/Retrieval-Augmented Generation（RAG-Learning）.png](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/images/Retrieval-Augmented Generation（RAG-Learning）.png)<br>[content/TinyGraphRAG/tinygraph/graph.py](../../../../sources/datawhalechina__tiny-universe/content/TinyGraphRAG/tinygraph/graph.py)<br>[content/TinyGraphRAG/tinygraph/embedding/__init__.py](../../../../sources/datawhalechina__tiny-universe/content/TinyGraphRAG/tinygraph/embedding/__init__.py) |
| spec | 9 | [content/TinyTransformer/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/requirements.txt)<br>[content/TinyTransformer/figures/transformer_architecture.png](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/figures/transformer_architecture.png)<br>[content/TinyRAG/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/requirements.txt)<br>[content/TinyLLM/code/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyLLM/code/requirements.txt)<br>[content/TinyIMGRAG/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/requirements.txt)<br>[content/TinyIMGRAG/packages/CLIP-main/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/requirements.txt)<br>[content/TinyEval/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/requirements.txt)<br>[content/TinyDiffusion/ddpm/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyDiffusion/ddpm/requirements.txt) |
| eval | 26 | [content/TinyTransformer/test.ipynb](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/test.ipynb)<br>[content/TinyRAG/test.ipynb](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/test.ipynb)<br>[content/TinyIMGRAG/packages/CLIP-main/tests/test_consistency.py](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/tests/test_consistency.py)<br>[content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml)<br>[content/TinyEval/eval.py](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/eval.py)<br>[content/TinyEval/Eval/metrics.py](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/Eval/metrics.py)<br>[content/TinyEval/Eval/pred/Qwen2/GAOKAO_math.jsonl](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/Eval/pred/Qwen2/GAOKAO_math.jsonl)<br>[content/TinyEval/Eval/pred/Qwen2/result.json](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/Eval/pred/Qwen2/result.json) |
| security | 0 | not obvious |
| ci | 1 | [content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 13 | [README.md](../../../../sources/datawhalechina__tiny-universe/README.md)<br>[content/TinyTransformer/readme.md](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/readme.md)<br>[content/TinyRAG/readme.md](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/readme.md)<br>[content/TinyLLM/README.md](../../../../sources/datawhalechina__tiny-universe/content/TinyLLM/README.md)<br>[content/TinyIMGRAG/README.md](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/README.md)<br>[content/TinyIMGRAG/packages/CLIP-main/README.md](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/README.md)<br>[content/TinyGraphRAG/readme.md](../../../../sources/datawhalechina__tiny-universe/content/TinyGraphRAG/readme.md)<br>[content/TinyEval/readme.md](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/readme.md) |
| config | 8 | [content/TinyTransformer/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/requirements.txt)<br>[content/TinyRAG/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/requirements.txt)<br>[content/TinyLLM/code/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyLLM/code/requirements.txt)<br>[content/TinyIMGRAG/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/requirements.txt)<br>[content/TinyIMGRAG/packages/CLIP-main/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/requirements.txt)<br>[content/TinyEval/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/requirements.txt)<br>[content/TinyDiffusion/ddpm/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyDiffusion/ddpm/requirements.txt)<br>[content/TinyAgent/requirements.txt](../../../../sources/datawhalechina__tiny-universe/content/TinyAgent/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 26 | [content/TinyTransformer/test.ipynb](../../../../sources/datawhalechina__tiny-universe/content/TinyTransformer/test.ipynb)<br>[content/TinyRAG/test.ipynb](../../../../sources/datawhalechina__tiny-universe/content/TinyRAG/test.ipynb)<br>[content/TinyIMGRAG/packages/CLIP-main/tests/test_consistency.py](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/tests/test_consistency.py)<br>[content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml)<br>[content/TinyEval/eval.py](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/eval.py)<br>[content/TinyEval/Eval/metrics.py](../../../../sources/datawhalechina__tiny-universe/content/TinyEval/Eval/metrics.py) |
| CI workflows | 1 | [content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml](../../../../sources/datawhalechina__tiny-universe/content/TinyIMGRAG/packages/CLIP-main/.github/workflows/test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `content/TinyRAG/RAG/Embeddings.py`, `content/TinyRAG/RAG/LLM.py`, `content/TinyRAG/RAG/utils.py`.
2. Trace execution through entrypoints: `content/TinyIMGRAG/main.py`.
3. Map agent/tool runtime through: `content/TinyGraphRAG/images/workflow.png`, `content/TinyAgent/agent_demo.ipynb`, `content/TinyAgent/tinyAgent/Agent.py`.
4. Inspect retrieval/memory/indexing through: `content/TinyRAG/RAG/Embeddings.py`, `content/TinyRAG/RAG/LLM.py`, `content/TinyRAG/RAG/utils.py`.
5. Verify behavior through test/eval files: `content/TinyTransformer/test.ipynb`, `content/TinyRAG/test.ipynb`, `content/TinyIMGRAG/packages/CLIP-main/tests/test_consistency.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 《大模型白盒子构建指南》：一个全手搓的Tiny Universe. 핵심 구조 신호는 Jupyter Notebook, README.md, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, license metadata missing, needs deeper structural scan입니다.
