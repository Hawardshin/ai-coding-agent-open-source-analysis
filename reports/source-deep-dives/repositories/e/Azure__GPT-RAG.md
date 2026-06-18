# Azure/GPT-RAG Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Sharing the learning along the way we been gathering to enable Azure OpenAI at enterprise scale in a secure manner. GPT-RAG core is a Retrieval-Augmented Generation pattern running in Azure, using Azure Cognitive Search for retrieval and Azure OpenAI large language models to power ChatGPT-style and Q&A experiences.

## 요약

- 조사 단위: `sources/Azure__GPT-RAG` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 47 files, 12 directories, depth score 85, key references 9개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 retrieval=media/gpt-rag-homepage.png이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | Azure/GPT-RAG |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Python |
| Stars | 1161 |
| Forks | 304 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/Azure__GPT-RAG](../../../../sources/Azure__GPT-RAG) |
| Existing report | [reports/global-trending/repositories/Azure__GPT-RAG.md](../../../global-trending/repositories/Azure__GPT-RAG.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 47 / 12 |
| Max observed depth | 3 |
| Top directories | .github, config, docs, infra, media, scripts, util |
| Top extensions | .md: 13, .py: 9, .json: 4, .yml: 4, .png: 3, .ps1: 3, .sh: 3, (none): 3, .j2: 2, .txt: 2, .yaml: 1 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| infra | top-level component | 1 |
| media | top-level component | 1 |
| scripts | top-level component | 1 |
| util | top-level component | 1 |


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
| retrieval | [media/gpt-rag-homepage.png](../../../../sources/Azure__GPT-RAG/media/gpt-rag-homepage.png) | retrieval signal |
| docs | [README.md](../../../../sources/Azure__GPT-RAG/README.md) | docs signal |
| docs | [docs/pull_request_template.md](../../../../sources/Azure__GPT-RAG/docs/pull_request_template.md) | docs signal |
| config | [util/requirements.txt](../../../../sources/Azure__GPT-RAG/util/requirements.txt) | config signal |
| config | [config/requirements.txt](../../../../sources/Azure__GPT-RAG/config/requirements.txt) | config signal |
| ci | [.github/workflows/block-pr-to-main.yml](../../../../sources/Azure__GPT-RAG/.github/workflows/block-pr-to-main.yml) | ci support |
| ci | [.github/workflows/deploy-docs.yml](../../../../sources/Azure__GPT-RAG/.github/workflows/deploy-docs.yml) | ci support |
| instruction | [AGENTS.md](../../../../sources/Azure__GPT-RAG/AGENTS.md) | instruction support |
| instruction | [.github/copilot-instructions.md](../../../../sources/Azure__GPT-RAG/.github/copilot-instructions.md) | instruction support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [AGENTS.md](../../../../sources/Azure__GPT-RAG/AGENTS.md) |
| mcp | 0 | not obvious |
| retrieval | 1 | [media/gpt-rag-homepage.png](../../../../sources/Azure__GPT-RAG/media/gpt-rag-homepage.png) |
| spec | 3 | [util/requirements.txt](../../../../sources/Azure__GPT-RAG/util/requirements.txt)<br>[media/architecture_zero_trust.png](../../../../sources/Azure__GPT-RAG/media/architecture_zero_trust.png)<br>[config/requirements.txt](../../../../sources/Azure__GPT-RAG/config/requirements.txt) |
| eval | 0 | not obvious |
| security | 1 | [SECURITY.md](../../../../sources/Azure__GPT-RAG/SECURITY.md) |
| ci | 2 | [.github/workflows/block-pr-to-main.yml](../../../../sources/Azure__GPT-RAG/.github/workflows/block-pr-to-main.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/Azure__GPT-RAG/.github/workflows/deploy-docs.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/Azure__GPT-RAG/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/Azure__GPT-RAG/.github/copilot-instructions.md) |
| docs | 2 | [README.md](../../../../sources/Azure__GPT-RAG/README.md)<br>[docs/pull_request_template.md](../../../../sources/Azure__GPT-RAG/docs/pull_request_template.md) |
| config | 2 | [util/requirements.txt](../../../../sources/Azure__GPT-RAG/util/requirements.txt)<br>[config/requirements.txt](../../../../sources/Azure__GPT-RAG/config/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 2 | [.github/workflows/block-pr-to-main.yml](../../../../sources/Azure__GPT-RAG/.github/workflows/block-pr-to-main.yml)<br>[.github/workflows/deploy-docs.yml](../../../../sources/Azure__GPT-RAG/.github/workflows/deploy-docs.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [SECURITY.md](../../../../sources/Azure__GPT-RAG/SECURITY.md) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/Azure__GPT-RAG/AGENTS.md)<br>[.github/copilot-instructions.md](../../../../sources/Azure__GPT-RAG/.github/copilot-instructions.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious; test/eval path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `media/gpt-rag-homepage.png`, `README.md`, `docs/pull_request_template.md`.
2. Map agent/tool runtime through: `AGENTS.md`.
3. Inspect retrieval/memory/indexing through: `media/gpt-rag-homepage.png`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 Sharing the learning along the way we been gathering to enable Azure OpenAI at enterprise scale in a secure manner. GPT . 핵심 구조 신호는 Python, README.md, AGENTS.md, LICENSE, ci, docs이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
