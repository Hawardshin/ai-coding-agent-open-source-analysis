# kimsanguine/AI_Human Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

초급자를 위한 AI Engineer 100일 커리큘럼 — Python부터 RAG까지 + 매일 AI 뉴스 자동 큐레이션

## 요약

- 조사 단위: `sources/kimsanguine__AI_Human` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 431 files, 104 directories, depth score 96, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=papers/rag/2026-05-26-vector-databases-and-indexing/diskann-billion-point-nn-search-subramanya-2019.pdf, papers/rag/2026-05-26-vector-databases-and-indexing/README.md, papers/rag/2026-05-26-vector-databases-and-indexing/scann-anisotropic-vector-quantization-guo-2020.pdf이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | kimsanguine/AI_Human |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Shell |
| Stars | none |
| Forks | none |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/kimsanguine__AI_Human](../../../../sources/kimsanguine__AI_Human) |
| Existing report | [reports/korea-trending/repositories/kimsanguine__AI_Human.md](../../../korea-trending/repositories/kimsanguine__AI_Human.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 431 / 104 |
| Max observed depth | 4 |
| Top directories | .claude, .github, curriculum, lectures, news, papers, scripts |
| Top extensions | .pdf: 225, .md: 180, (none): 13, .sh: 7, .json: 3, .py: 2, .yml: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .github | ci surface | 1 |
| curriculum | top-level component | 1 |
| lectures | top-level component | 1 |
| news | top-level component | 1 |
| papers | top-level component | 1 |
| scripts | top-level component | 1 |


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
| retrieval | [papers/rag/2026-05-26-vector-databases-and-indexing/diskann-billion-point-nn-search-subramanya-2019.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-26-vector-databases-and-indexing/diskann-billion-point-nn-search-subramanya-2019.pdf) | retrieval signal |
| retrieval | [papers/rag/2026-05-26-vector-databases-and-indexing/README.md](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-26-vector-databases-and-indexing/README.md) | retrieval signal |
| retrieval | [papers/rag/2026-05-26-vector-databases-and-indexing/scann-anisotropic-vector-quantization-guo-2020.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-26-vector-databases-and-indexing/scann-anisotropic-vector-quantization-guo-2020.pdf) | retrieval signal |
| retrieval | [papers/rag/2026-05-26-vector-databases-and-indexing/sogaic-overload-aware-graph-index-10b-shi-2025.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-26-vector-databases-and-indexing/sogaic-overload-aware-graph-index-10b-shi-2025.pdf) | retrieval signal |
| docs | [README.md](../../../../sources/kimsanguine__AI_Human/README.md) | docs signal |
| docs | [papers/tts-stt/2026-06-08-voice-cloning-speech-synthesis/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-06-08-voice-cloning-speech-synthesis/README.md) | docs signal |
| docs | [papers/tts-stt/2026-06-07-neural-text-to-speech/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-06-07-neural-text-to-speech/README.md) | docs signal |
| docs | [papers/tts-stt/2026-06-06-modern-speech-to-text-whisper/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-06-06-modern-speech-to-text-whisper/README.md) | docs signal |
| eval | [papers/rag/2026-05-23-dense-retrieval-embedding-search/beir-benchmark-thakur-2021.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-23-dense-retrieval-embedding-search/beir-benchmark-thakur-2021.pdf) | eval signal |
| eval | [papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/arena-hard-benchbuilder-li-2024.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/arena-hard-benchbuilder-li-2024.pdf) | eval signal |
| eval | [papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/big-bench-srivastava-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/big-bench-srivastava-2022.pdf) | eval signal |
| eval | [papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/glue-benchmark-wang-2018.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/glue-benchmark-wang-2018.pdf) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [papers/langchain-orchestration/2026-05-20-llm-application-frameworks/agent-interoperability-protocols-ehtesham-2025.pdf](../../../../sources/kimsanguine__AI_Human/papers/langchain-orchestration/2026-05-20-llm-application-frameworks/agent-interoperability-protocols-ehtesham-2025.pdf) |
| mcp | 1 | [papers/langchain-orchestration/2026-04-24-ai-agents-and-tool-use/mcp-universe-benchmark-2025.pdf](../../../../sources/kimsanguine__AI_Human/papers/langchain-orchestration/2026-04-24-ai-agents-and-tool-use/mcp-universe-benchmark-2025.pdf) |
| retrieval | 47 | [papers/rag/2026-05-26-vector-databases-and-indexing/diskann-billion-point-nn-search-subramanya-2019.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-26-vector-databases-and-indexing/diskann-billion-point-nn-search-subramanya-2019.pdf)<br>[papers/rag/2026-05-26-vector-databases-and-indexing/README.md](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-26-vector-databases-and-indexing/README.md)<br>[papers/rag/2026-05-26-vector-databases-and-indexing/scann-anisotropic-vector-quantization-guo-2020.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-26-vector-databases-and-indexing/scann-anisotropic-vector-quantization-guo-2020.pdf)<br>[papers/rag/2026-05-26-vector-databases-and-indexing/sogaic-overload-aware-graph-index-10b-shi-2025.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-26-vector-databases-and-indexing/sogaic-overload-aware-graph-index-10b-shi-2025.pdf)<br>[papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/graphrag-edge-2024.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/graphrag-edge-2024.pdf)<br>[papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/hyde-gao-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/hyde-gao-2022.pdf)<br>[papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/ircot-trivedi-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/ircot-trivedi-2022.pdf)<br>[papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/README.md](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/README.md) |
| spec | 20 | [papers/rag/2026-05-24-rag-architecture-optimization/atlas-izacard-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-24-rag-architecture-optimization/atlas-izacard-2022.pdf)<br>[papers/rag/2026-05-24-rag-architecture-optimization/rag-comprehensive-survey-gupta-2024.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-24-rag-architecture-optimization/rag-comprehensive-survey-gupta-2024.pdf)<br>[papers/rag/2026-05-24-rag-architecture-optimization/README.md](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-24-rag-architecture-optimization/README.md)<br>[papers/rag/2026-05-24-rag-architecture-optimization/retro-borgeaud-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-24-rag-architecture-optimization/retro-borgeaud-2022.pdf)<br>[papers/rag/2026-04-27-rag-architecture-optimization/agentic-rag-survey-singh-2025.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-04-27-rag-architecture-optimization/agentic-rag-survey-singh-2025.pdf)<br>[papers/rag/2026-04-27-rag-architecture-optimization/rag-lewis-2020.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-04-27-rag-architecture-optimization/rag-lewis-2020.pdf)<br>[papers/rag/2026-04-27-rag-architecture-optimization/README.md](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-04-27-rag-architecture-optimization/README.md)<br>[papers/rag/2026-04-27-rag-architecture-optimization/realm-guu-2020.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-04-27-rag-architecture-optimization/realm-guu-2020.pdf) |
| eval | 15 | [papers/rag/2026-05-23-dense-retrieval-embedding-search/beir-benchmark-thakur-2021.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-23-dense-retrieval-embedding-search/beir-benchmark-thakur-2021.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/arena-hard-benchbuilder-li-2024.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/arena-hard-benchbuilder-li-2024.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/big-bench-srivastava-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/big-bench-srivastava-2022.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/glue-benchmark-wang-2018.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/glue-benchmark-wang-2018.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/README.md](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/README.md)<br>[papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/helm-liang-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/helm-liang-2022.pdf)<br>[papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/livebench-white-2024.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/livebench-white-2024.pdf)<br>[papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/mt-bench-chatbot-arena-zheng-2023.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/mt-bench-chatbot-arena-zheng-2023.pdf) |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/daily-clipping.yml](../../../../sources/kimsanguine__AI_Human/.github/workflows/daily-clipping.yml) |
| container | 0 | not obvious |
| instruction | 0 | not obvious |
| docs | 76 | [README.md](../../../../sources/kimsanguine__AI_Human/README.md)<br>[papers/tts-stt/2026-06-08-voice-cloning-speech-synthesis/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-06-08-voice-cloning-speech-synthesis/README.md)<br>[papers/tts-stt/2026-06-07-neural-text-to-speech/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-06-07-neural-text-to-speech/README.md)<br>[papers/tts-stt/2026-06-06-modern-speech-to-text-whisper/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-06-06-modern-speech-to-text-whisper/README.md)<br>[papers/tts-stt/2026-05-12-voice-cloning-speech-synthesis/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-05-12-voice-cloning-speech-synthesis/README.md)<br>[papers/tts-stt/2026-05-11-neural-text-to-speech/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-05-11-neural-text-to-speech/README.md)<br>[papers/tts-stt/2026-05-10-modern-speech-to-text-whisper/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-05-10-modern-speech-to-text-whisper/README.md)<br>[papers/tts-stt/2026-04-15-voice-cloning-speech-synthesis/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-04-15-voice-cloning-speech-synthesis/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 15 | [papers/rag/2026-05-23-dense-retrieval-embedding-search/beir-benchmark-thakur-2021.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-23-dense-retrieval-embedding-search/beir-benchmark-thakur-2021.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/arena-hard-benchbuilder-li-2024.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/arena-hard-benchbuilder-li-2024.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/big-bench-srivastava-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/big-bench-srivastava-2022.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/glue-benchmark-wang-2018.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/glue-benchmark-wang-2018.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/README.md](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/README.md)<br>[papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/helm-liang-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/helm-liang-2022.pdf) |
| CI workflows | 1 | [.github/workflows/daily-clipping.yml](../../../../sources/kimsanguine__AI_Human/.github/workflows/daily-clipping.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `papers/rag/2026-05-26-vector-databases-and-indexing/diskann-billion-point-nn-search-subramanya-2019.pdf`, `papers/rag/2026-05-26-vector-databases-and-indexing/README.md`, `papers/rag/2026-05-26-vector-databases-and-indexing/scann-anisotropic-vector-quantization-guo-2020.pdf`.
2. Map agent/tool runtime through: `papers/langchain-orchestration/2026-05-20-llm-application-frameworks/agent-interoperability-protocols-ehtesham-2025.pdf`.
3. Inspect retrieval/memory/indexing through: `papers/rag/2026-05-26-vector-databases-and-indexing/diskann-billion-point-nn-search-subramanya-2019.pdf`, `papers/rag/2026-05-26-vector-databases-and-indexing/README.md`, `papers/rag/2026-05-26-vector-databases-and-indexing/scann-anisotropic-vector-quantization-guo-2020.pdf`.
4. Verify behavior through test/eval files: `papers/rag/2026-05-23-dense-retrieval-embedding-search/beir-benchmark-thakur-2021.pdf`, `papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/arena-hard-benchbuilder-li-2024.pdf`, `papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/big-bench-srivastava-2022.pdf`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 초급자를 위한 AI Engineer 100일 커리큘럼 — Python부터 RAG까지 + 매일 AI 뉴스 자동 큐레이션. 핵심 구조 신호는 Shell, README.md, LICENSE, ci, docs이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
