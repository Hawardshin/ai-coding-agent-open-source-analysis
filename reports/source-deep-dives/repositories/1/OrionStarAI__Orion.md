# OrionStarAI/Orion Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Orion-14B is a family of models includes a 14B foundation LLM, and a series of models: a chat model, a long context model, a quantized model, a RAG fine-tuned model, and an Agent fine-tuned model. Orion-14B 系列模型包括一个具有140亿参数的多语言基座大模型以及一系列相关的衍生模型，包括对话模型，长文本模型，量化模型，RAG微调模型，Agent微调模型等。

## 요약

- 조사 단위: `sources/OrionStarAI__Orion` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 48 files, 14 directories, depth score 57, key references 6개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 docs=README_ja.md, README_ko.md, README_zh.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | OrionStarAI/Orion |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 811 |
| Forks | 59 |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/OrionStarAI__Orion](../../../../sources/OrionStarAI__Orion) |
| Existing report | [reports/llm-wiki/repositories/OrionStarAI__Orion.md](../../../llm-wiki/repositories/OrionStarAI__Orion.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 48 / 14 |
| Max observed depth | 3 |
| Top directories | assets, demo, doc, gradio_demo, quantization |
| Top extensions | .py: 24, .png: 8, .md: 7, (none): 3, .jpg: 1, .jsonl: 1, .pdf: 1, .svg: 1, .txt: 1, .xlsx: 1 |
| Source patterns | spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| assets | top-level component | 1 |
| demo | top-level component | 1 |
| doc | documentation surface | 1 |
| gradio_demo | top-level component | 1 |
| quantization | top-level component | 1 |


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
| docs | [README_ja.md](../../../../sources/OrionStarAI__Orion/README_ja.md) | docs signal |
| docs | [README_ko.md](../../../../sources/OrionStarAI__Orion/README_ko.md) | docs signal |
| docs | [README_zh.md](../../../../sources/OrionStarAI__Orion/README_zh.md) | docs signal |
| docs | [README.md](../../../../sources/OrionStarAI__Orion/README.md) | docs signal |
| eval | [quantization/eval_quant.py](../../../../sources/OrionStarAI__Orion/quantization/eval_quant.py) | eval signal |
| config | [gradio_demo/requirements.txt](../../../../sources/OrionStarAI__Orion/gradio_demo/requirements.txt) | config signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 0 | not obvious |
| spec | 1 | [gradio_demo/requirements.txt](../../../../sources/OrionStarAI__Orion/gradio_demo/requirements.txt) |
| eval | 1 | [quantization/eval_quant.py](../../../../sources/OrionStarAI__Orion/quantization/eval_quant.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 8 | [README_ja.md](../../../../sources/OrionStarAI__Orion/README_ja.md)<br>[README_ko.md](../../../../sources/OrionStarAI__Orion/README_ko.md)<br>[README_zh.md](../../../../sources/OrionStarAI__Orion/README_zh.md)<br>[README.md](../../../../sources/OrionStarAI__Orion/README.md)<br>[quantization/README.MD](../../../../sources/OrionStarAI__Orion/quantization/README.MD)<br>[gradio_demo/README_en.md](../../../../sources/OrionStarAI__Orion/gradio_demo/README_en.md)<br>[gradio_demo/README.md](../../../../sources/OrionStarAI__Orion/gradio_demo/README.md)<br>[doc/Orion14B_v3.pdf](../../../../sources/OrionStarAI__Orion/doc/Orion14B_v3.pdf) |
| config | 1 | [gradio_demo/requirements.txt](../../../../sources/OrionStarAI__Orion/gradio_demo/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 1 | [quantization/eval_quant.py](../../../../sources/OrionStarAI__Orion/quantization/eval_quant.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `README_ja.md`, `README_ko.md`, `README_zh.md`.
2. Verify behavior through test/eval files: `quantization/eval_quant.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Orion 14B is a family of models includes a 14B foundation LLM, and a series of models a chat model, a long context model. 핵심 구조 신호는 Python, README.md, LICENSE, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
