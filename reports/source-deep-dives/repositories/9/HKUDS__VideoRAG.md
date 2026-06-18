# HKUDS/VideoRAG Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

[KDD'2026] "VideoRAG: Chat with Your Videos"

## 요약

- 조사 단위: `sources/HKUDS__VideoRAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 118 files, 39 directories, depth score 90, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=Vimo-desktop/src/renderer/index.html, Vimo-desktop/src/renderer/src/pages/settings/index.tsx, Vimo-desktop/src/renderer/src/pages/chat/index.tsx이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | HKUDS/VideoRAG |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 3065 |
| Forks | 431 |
| License | NOASSERTION |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/HKUDS__VideoRAG](../../../../sources/HKUDS__VideoRAG) |
| Existing report | [reports/llm-wiki/repositories/HKUDS__VideoRAG.md](../../../llm-wiki/repositories/HKUDS__VideoRAG.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 118 / 39 |
| Max observed depth | 7 |
| Top directories | VideoRAG-algorithm, Vimo-desktop |
| Top extensions | .py: 51, .tsx: 22, .ts: 19, .png: 6, .json: 5, (none): 5, .md: 3, .js: 2, .css: 1, .html: 1, .ipynb: 1, .sh: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| VideoRAG-algorithm | top-level component | 1 |
| Vimo-desktop | top-level component | 1 |


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
| retrieval | [Vimo-desktop/src/renderer/index.html](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/index.html) | retrieval signal |
| retrieval | [Vimo-desktop/src/renderer/src/pages/settings/index.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/pages/settings/index.tsx) | retrieval signal |
| retrieval | [Vimo-desktop/src/renderer/src/pages/chat/index.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/pages/chat/index.tsx) | retrieval signal |
| retrieval | [Vimo-desktop/src/preload/index.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/preload/index.ts) | retrieval signal |
| entrypoints | [Vimo-desktop/src/renderer/src/App.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/App.tsx) | entrypoints signal |
| entrypoints | [Vimo-desktop/src/renderer/src/main.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/main.tsx) | entrypoints signal |
| entrypoints | [Vimo-desktop/src/main/main.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/main/main.ts) | entrypoints signal |
| docs | [README.md](../../../../sources/HKUDS__VideoRAG/README.md) | docs signal |
| docs | [Vimo-desktop/README.md](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/README.md) | docs signal |
| docs | [VideoRAG-algorithm/README.md](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/README.md) | docs signal |
| eval | [VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py) | eval signal |
| eval | [VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [Vimo-desktop/src/renderer/src/App.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/App.tsx)<br>[Vimo-desktop/src/renderer/src/main.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/main.tsx)<br>[Vimo-desktop/src/main/main.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/main/main.ts) |
| agentRuntime | 7 | [Vimo-desktop/src/renderer/src/hooks/useChat.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/hooks/useChat.ts)<br>[Vimo-desktop/src/renderer/src/hooks/useChatSessionInfo.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/hooks/useChatSessionInfo.ts)<br>[Vimo-desktop/src/renderer/src/hooks/useCurrentSessionInfo.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/hooks/useCurrentSessionInfo.ts)<br>[Vimo-desktop/src/renderer/src/hooks/useResizable.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/hooks/useResizable.ts)<br>[Vimo-desktop/src/renderer/src/hooks/useVideoRAG.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/hooks/useVideoRAG.ts)<br>[Vimo-desktop/src/renderer/src/hooks/useVideoRAGService.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/hooks/useVideoRAGService.ts)<br>[Vimo-desktop/src/renderer/src/hooks/useVideoUpload.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/hooks/useVideoUpload.ts) |
| mcp | 0 | not obvious |
| retrieval | 4 | [Vimo-desktop/src/renderer/index.html](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/index.html)<br>[Vimo-desktop/src/renderer/src/pages/settings/index.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/pages/settings/index.tsx)<br>[Vimo-desktop/src/renderer/src/pages/chat/index.tsx](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/renderer/src/pages/chat/index.tsx)<br>[Vimo-desktop/src/preload/index.ts](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/src/preload/index.ts) |
| spec | 0 | not obvious |
| eval | 8 | [VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py)<br>[VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py)<br>[VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_parse.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_parse.py)<br>[VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_upload.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_upload.py)<br>[VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_calculate.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_calculate.py)<br>[VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_download.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_download.py)<br>[VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_parse.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_parse.py)<br>[VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_upload.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_upload.py) |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 3 | [README.md](../../../../sources/HKUDS__VideoRAG/README.md)<br>[Vimo-desktop/README.md](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/README.md)<br>[VideoRAG-algorithm/README.md](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/README.md) |
| config | 2 | [Vimo-desktop/package.json](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/package.json)<br>[Vimo-desktop/tsconfig.json](../../../../sources/HKUDS__VideoRAG/Vimo-desktop/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 8 | [VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py)<br>[VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py)<br>[VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_parse.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_parse.py)<br>[VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_upload.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_upload.py)<br>[VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_calculate.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_calculate.py)<br>[VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_download.py](../../../../sources/HKUDS__VideoRAG/VideoRAG-algorithm/reproduce/quantitative_comparison/batch_quant_eval_download.py) |
| CI workflows | 0 | not obvious |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | CI workflow path not obvious; container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `Vimo-desktop/src/renderer/index.html`, `Vimo-desktop/src/renderer/src/pages/settings/index.tsx`, `Vimo-desktop/src/renderer/src/pages/chat/index.tsx`.
2. Trace execution through entrypoints: `Vimo-desktop/src/renderer/src/App.tsx`, `Vimo-desktop/src/renderer/src/main.tsx`, `Vimo-desktop/src/main/main.ts`.
3. Map agent/tool runtime through: `Vimo-desktop/src/renderer/src/hooks/useChat.ts`, `Vimo-desktop/src/renderer/src/hooks/useChatSessionInfo.ts`, `Vimo-desktop/src/renderer/src/hooks/useCurrentSessionInfo.ts`.
4. Inspect retrieval/memory/indexing through: `Vimo-desktop/src/renderer/index.html`, `Vimo-desktop/src/renderer/src/pages/settings/index.tsx`, `Vimo-desktop/src/renderer/src/pages/chat/index.tsx`.
5. Verify behavior through test/eval files: `VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_calculate.py`, `VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_download.py`, `VideoRAG-algorithm/reproduce/winrate_comparison/batch_winrate_eval_parse.py`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 KDD'2026 "VideoRAG Chat with Your Videos". 핵심 구조 신호는 Python, README.md, LICENSE, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, ci signal not obvious, needs deeper structural scan입니다.
