# hwdsl2/self-hosted-ai-stack Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Deploy a complete self-hosted AI stack with Docker Compose: Ollama, LiteLLM, AnythingLLM, Whisper, WhisperLive, Kokoro, Embeddings, Docling and MCP Gateway. Local-first, private by default, with lightweight stacks, optional HTTPS and NVIDIA CUDA acceleration. Multi-arch: amd64, arm64.

## 요약

- 조사 단위: `sources/hwdsl2__self-hosted-ai-stack` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 83 files, 16 directories, depth score 51, key references 4개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 retrieval/vector path, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 container=docker-compose.cuda.yml, docker-compose.proxy.yml, docker-compose.yml이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 4개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | hwdsl2/self-hosted-ai-stack |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Shell |
| Stars | 91 |
| Forks | 17 |
| License | none |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/hwdsl2__self-hosted-ai-stack](../../../../sources/hwdsl2__self-hosted-ai-stack) |
| Existing report | [reports/global-trending/repositories/hwdsl2__self-hosted-ai-stack.md](../../../global-trending/repositories/hwdsl2__self-hosted-ai-stack.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 83 / 16 |
| Max observed depth | 4 |
| Top directories | .github, caddy, docs, stacks |
| Top extensions | .md: 52, .yml: 19, (none): 5, .sh: 4, .svg: 2, .png: 1 |
| Source patterns | retrieval/vector path, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| caddy | top-level component | 1 |
| stacks | top-level component | 1 |


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
| container | [docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.cuda.yml) | container signal |
| container | [docker-compose.proxy.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.proxy.yml) | container signal |
| container | [docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.yml) | container signal |
| container | [stacks/voice-pipeline/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/docker-compose.cuda.yml) | container signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 12 | [stacks/rag-pipeline-full/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline-full/docker-compose.cuda.yml)<br>[stacks/rag-pipeline-full/docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline-full/docker-compose.yml)<br>[stacks/rag-pipeline-full/README-ru.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline-full/README-ru.md)<br>[stacks/rag-pipeline-full/README-zh-Hant.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline-full/README-zh-Hant.md)<br>[stacks/rag-pipeline-full/README-zh.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline-full/README-zh.md)<br>[stacks/rag-pipeline-full/README.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline-full/README.md)<br>[stacks/rag-pipeline/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline/docker-compose.cuda.yml)<br>[stacks/rag-pipeline/docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline/docker-compose.yml) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 0 | not obvious |
| container | 19 | [docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.cuda.yml)<br>[docker-compose.proxy.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.proxy.yml)<br>[docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.yml)<br>[stacks/voice-pipeline/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/docker-compose.cuda.yml)<br>[stacks/voice-pipeline/docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/docker-compose.yml)<br>[stacks/voice-chat/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-chat/docker-compose.cuda.yml)<br>[stacks/voice-chat/docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-chat/docker-compose.yml)<br>[stacks/rag-pipeline-full/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/rag-pipeline-full/docker-compose.cuda.yml) |
| instruction | 0 | not obvious |
| docs | 47 | [README-ru.md](../../../../sources/hwdsl2__self-hosted-ai-stack/README-ru.md)<br>[README-zh-Hant.md](../../../../sources/hwdsl2__self-hosted-ai-stack/README-zh-Hant.md)<br>[README-zh.md](../../../../sources/hwdsl2__self-hosted-ai-stack/README-zh.md)<br>[README.md](../../../../sources/hwdsl2__self-hosted-ai-stack/README.md)<br>[stacks/voice-pipeline/README-ru.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/README-ru.md)<br>[stacks/voice-pipeline/README-zh-Hant.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/README-zh-Hant.md)<br>[stacks/voice-pipeline/README-zh.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/README-zh.md)<br>[stacks/voice-pipeline/README.md](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/README.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 0 | not obvious |
| Containers / deploy | 19 | [docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.cuda.yml)<br>[docker-compose.proxy.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.proxy.yml)<br>[docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/docker-compose.yml)<br>[stacks/voice-pipeline/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/docker-compose.cuda.yml)<br>[stacks/voice-pipeline/docker-compose.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-pipeline/docker-compose.yml)<br>[stacks/voice-chat/docker-compose.cuda.yml](../../../../sources/hwdsl2__self-hosted-ai-stack/stacks/voice-chat/docker-compose.cuda.yml) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | CI workflow path not obvious; test/eval path not obvious |
| security | security/policy surface not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `docker-compose.cuda.yml`, `docker-compose.proxy.yml`, `docker-compose.yml`.
2. Inspect retrieval/memory/indexing through: `stacks/rag-pipeline-full/docker-compose.cuda.yml`, `stacks/rag-pipeline-full/docker-compose.yml`, `stacks/rag-pipeline-full/README-ru.md`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Deploy a complete self hosted AI stack with Docker Compose Ollama, LiteLLM, AnythingLLM, Whisper, WhisperLive, Kokoro, E. 핵심 구조 신호는 Shell, docker-compose.yml, README.md, ci, docs, docker이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
