# kimsanguine/AI_Human 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

초급자를 위한 AI Engineer 100일 커리큘럼 — Python부터 RAG까지 + 매일 AI 뉴스 자동 큐레이션

## 요약

- 조사 단위: `sources/kimsanguine__AI_Human` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 431 files, 104 directories, depth score 90, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=papers/rag/2026-05-26-vector-databases-and-indexing/diskann-billion-point-nn-search-subramanya-2019.pdf, papers/rag/2026-05-26-vector-databases-and-indexing/README.md, papers/rag/2026-05-26-vector-databases-and-indexing/scann-anisotropic-vector-quantization-guo-2020.pdf이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | kimsanguine/AI_Human |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Shell |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kimsanguine__AI_Human](../../../../sources/kimsanguine__AI_Human) |
| 기존 보고서 | [reports/korea-trending/repositories/kimsanguine__AI_Human.md](../../../korea-trending/repositories/kimsanguine__AI_Human.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 431 / 104 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .claude, .github, curriculum, lectures, news, papers, scripts |
| 상위 확장자 | .pdf: 225, .md: 180, (none): 13, .sh: 7, .json: 3, .py: 2, .yml: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| curriculum | top-level component | 1 |
| lectures | top-level component | 1 |
| news | top-level component | 1 |
| papers | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [papers/langchain-orchestration/2026-05-20-llm-application-frameworks/agent-interoperability-protocols-ehtesham-2025.pdf](../../../../sources/kimsanguine__AI_Human/papers/langchain-orchestration/2026-05-20-llm-application-frameworks/agent-interoperability-protocols-ehtesham-2025.pdf) |
| mcp | 1 | [papers/langchain-orchestration/2026-04-24-ai-agents-and-tool-use/mcp-universe-benchmark-2025.pdf](../../../../sources/kimsanguine__AI_Human/papers/langchain-orchestration/2026-04-24-ai-agents-and-tool-use/mcp-universe-benchmark-2025.pdf) |
| retrieval | 47 | [papers/rag/2026-05-26-vector-databases-and-indexing/diskann-billion-point-nn-search-subramanya-2019.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-26-vector-databases-and-indexing/diskann-billion-point-nn-search-subramanya-2019.pdf)<br>[papers/rag/2026-05-26-vector-databases-and-indexing/README.md](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-26-vector-databases-and-indexing/README.md)<br>[papers/rag/2026-05-26-vector-databases-and-indexing/scann-anisotropic-vector-quantization-guo-2020.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-26-vector-databases-and-indexing/scann-anisotropic-vector-quantization-guo-2020.pdf)<br>[papers/rag/2026-05-26-vector-databases-and-indexing/sogaic-overload-aware-graph-index-10b-shi-2025.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-26-vector-databases-and-indexing/sogaic-overload-aware-graph-index-10b-shi-2025.pdf)<br>[papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/graphrag-edge-2024.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/graphrag-edge-2024.pdf)<br>[papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/hyde-gao-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/hyde-gao-2022.pdf)<br>[papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/ircot-trivedi-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/ircot-trivedi-2022.pdf)<br>[papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/README.md](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-25-advanced-rag-self-rag-corrective-rag/README.md) |
| spec | 20 | [papers/rag/2026-05-24-rag-architecture-optimization/atlas-izacard-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-24-rag-architecture-optimization/atlas-izacard-2022.pdf)<br>[papers/rag/2026-05-24-rag-architecture-optimization/rag-comprehensive-survey-gupta-2024.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-24-rag-architecture-optimization/rag-comprehensive-survey-gupta-2024.pdf)<br>[papers/rag/2026-05-24-rag-architecture-optimization/README.md](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-24-rag-architecture-optimization/README.md)<br>[papers/rag/2026-05-24-rag-architecture-optimization/retro-borgeaud-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-24-rag-architecture-optimization/retro-borgeaud-2022.pdf)<br>[papers/rag/2026-04-27-rag-architecture-optimization/agentic-rag-survey-singh-2025.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-04-27-rag-architecture-optimization/agentic-rag-survey-singh-2025.pdf)<br>[papers/rag/2026-04-27-rag-architecture-optimization/rag-lewis-2020.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-04-27-rag-architecture-optimization/rag-lewis-2020.pdf)<br>[papers/rag/2026-04-27-rag-architecture-optimization/README.md](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-04-27-rag-architecture-optimization/README.md)<br>[papers/rag/2026-04-27-rag-architecture-optimization/realm-guu-2020.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-04-27-rag-architecture-optimization/realm-guu-2020.pdf) |
| eval | 15 | [papers/rag/2026-05-23-dense-retrieval-embedding-search/beir-benchmark-thakur-2021.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-23-dense-retrieval-embedding-search/beir-benchmark-thakur-2021.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/arena-hard-benchbuilder-li-2024.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/arena-hard-benchbuilder-li-2024.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/big-bench-srivastava-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/big-bench-srivastava-2022.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/glue-benchmark-wang-2018.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/glue-benchmark-wang-2018.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/README.md](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/README.md)<br>[papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/helm-liang-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/helm-liang-2022.pdf)<br>[papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/livebench-white-2024.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/livebench-white-2024.pdf)<br>[papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/mt-bench-chatbot-arena-zheng-2023.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/mt-bench-chatbot-arena-zheng-2023.pdf) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/daily-clipping.yml](../../../../sources/kimsanguine__AI_Human/.github/workflows/daily-clipping.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 76 | [README.md](../../../../sources/kimsanguine__AI_Human/README.md)<br>[papers/tts-stt/2026-06-08-voice-cloning-speech-synthesis/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-06-08-voice-cloning-speech-synthesis/README.md)<br>[papers/tts-stt/2026-06-07-neural-text-to-speech/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-06-07-neural-text-to-speech/README.md)<br>[papers/tts-stt/2026-06-06-modern-speech-to-text-whisper/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-06-06-modern-speech-to-text-whisper/README.md)<br>[papers/tts-stt/2026-05-12-voice-cloning-speech-synthesis/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-05-12-voice-cloning-speech-synthesis/README.md)<br>[papers/tts-stt/2026-05-11-neural-text-to-speech/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-05-11-neural-text-to-speech/README.md)<br>[papers/tts-stt/2026-05-10-modern-speech-to-text-whisper/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-05-10-modern-speech-to-text-whisper/README.md)<br>[papers/tts-stt/2026-04-15-voice-cloning-speech-synthesis/README.md](../../../../sources/kimsanguine__AI_Human/papers/tts-stt/2026-04-15-voice-cloning-speech-synthesis/README.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 15 | [papers/rag/2026-05-23-dense-retrieval-embedding-search/beir-benchmark-thakur-2021.pdf](../../../../sources/kimsanguine__AI_Human/papers/rag/2026-05-23-dense-retrieval-embedding-search/beir-benchmark-thakur-2021.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/arena-hard-benchbuilder-li-2024.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/arena-hard-benchbuilder-li-2024.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/big-bench-srivastava-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/big-bench-srivastava-2022.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/glue-benchmark-wang-2018.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/glue-benchmark-wang-2018.pdf)<br>[papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/README.md](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/README.md)<br>[papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/helm-liang-2022.pdf](../../../../sources/kimsanguine__AI_Human/papers/llm-nlg/2026-05-15-llm-evaluation-and-benchmarks/helm-liang-2022.pdf) |
| CI workflow | 1 | [.github/workflows/daily-clipping.yml](../../../../sources/kimsanguine__AI_Human/.github/workflows/daily-clipping.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `papers/rag/2026-05-26-vector-databases-and-indexing/diskann-billion-point-nn-search-subramanya-2019.pdf`, `papers/rag/2026-05-26-vector-databases-and-indexing/README.md`, `papers/rag/2026-05-26-vector-databases-and-indexing/scann-anisotropic-vector-quantization-guo-2020.pdf`.
2. agent/tool runtime 매핑: `papers/langchain-orchestration/2026-05-20-llm-application-frameworks/agent-interoperability-protocols-ehtesham-2025.pdf`.
3. retrieval/memory/indexing 확인: `papers/rag/2026-05-26-vector-databases-and-indexing/diskann-billion-point-nn-search-subramanya-2019.pdf`, `papers/rag/2026-05-26-vector-databases-and-indexing/README.md`, `papers/rag/2026-05-26-vector-databases-and-indexing/scann-anisotropic-vector-quantization-guo-2020.pdf`.
4. test/eval 파일로 동작 검증: `papers/rag/2026-05-23-dense-retrieval-embedding-search/beir-benchmark-thakur-2021.pdf`, `papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/arena-hard-benchbuilder-li-2024.pdf`, `papers/llm-nlg/2026-06-11-llm-evaluation-and-benchmarks/big-bench-srivastava-2022.pdf`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 초급자를 위한 AI Engineer 100일 커리큘럼 — Python부터 RAG까지 + 매일 AI 뉴스 자동 큐레이션. 핵심 구조 신호는 Shell, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
