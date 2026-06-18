# enescingoz/awesome-n8n-templates Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

280+ free n8n automation templates — ready-to-use workflows for Gmail, Telegram, Slack, Discord, WhatsApp, Google Drive, Notion, OpenAI, and more. AI agents, RAG chatbots, email automation, social media, DevOps, and document processing. The largest open-source n8n template collection.

## 요약

- 조사 단위: `sources/enescingoz__awesome-n8n-templates` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 352 files, 26 directories, depth score 57, key references 2개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 retrieval/vector path, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 entrypoints=not obvious이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 2개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | enescingoz/awesome-n8n-templates |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | none |
| Stars | 23065 |
| Forks | 6158 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/enescingoz__awesome-n8n-templates](../../../../sources/enescingoz__awesome-n8n-templates) |
| Existing report | [reports/global-trending/repositories/enescingoz__awesome-n8n-templates.md](../../../global-trending/repositories/enescingoz__awesome-n8n-templates.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 352 / 26 |
| Max observed depth | 3 |
| Top directories | .github, AI_Research_RAG_and_Data_Analysis, Airtable, Database_and_Storage, devops, Discord, docs, Forms_and_Surveys, Gmail_and_Email_Automation, Google_Drive_and_Google_Sheets, HR_and_Recruitment, img, Instagram_Twitter_Social_Media, Notion, OpenAI_and_LLMs, Other, Other_Integrations_and_Use_Cases, PDF_and_Document_Processing, Slack, Telegram |
| Top extensions | .json: 308, .md: 35, .html: 2, .txt: 2, .yml: 2, .cff: 1, .png: 1, (none): 1 |
| Source patterns | retrieval/vector path, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 27 |
| .github | ci surface | 1 |
| AI_Research_RAG_and_Data_Analysis | top-level component | 1 |
| Airtable | top-level component | 1 |
| Database_and_Storage | top-level component | 1 |
| devops | top-level component | 1 |
| Discord | top-level component | 1 |
| Forms_and_Surveys | top-level component | 1 |
| Gmail_and_Email_Automation | top-level component | 1 |
| Google_Drive_and_Google_Sheets | top-level component | 1 |
| HR_and_Recruitment | top-level component | 1 |
| img | top-level component | 1 |
| Instagram_Twitter_Social_Media | ci surface | 1 |
| Notion | top-level component | 1 |
| OpenAI_and_LLMs | top-level component | 1 |
| Other | top-level component | 1 |
| Other_Integrations_and_Use_Cases | top-level component | 1 |
| PDF_and_Document_Processing | documentation surface | 1 |


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
| ci | [.github/workflows/pr-review.yml](../../../../sources/enescingoz__awesome-n8n-templates/.github/workflows/pr-review.yml) | ci support |
| container | [devops/docker-compose-controller.json](../../../../sources/enescingoz__awesome-n8n-templates/devops/docker-compose-controller.json) | container support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 0 | not obvious |
| mcp | 0 | not obvious |
| retrieval | 47 | [Google_Drive_and_Google_Sheets/RAG_Context-Aware Chunking _ Google Drive to Pinecone via OpenRouter & Gemini.json](../../../../sources/enescingoz__awesome-n8n-templates/Google_Drive_and_Google_Sheets/RAG_Context-Aware Chunking _ Google Drive to Pinecone via OpenRouter & Gemini.json)<br>[docs/index.md](../../../../sources/enescingoz__awesome-n8n-templates/docs/index.md)<br>[docs/categories/ai-research-rag.md](../../../../sources/enescingoz__awesome-n8n-templates/docs/categories/ai-research-rag.md)<br>[AI_Research_RAG_and_Data_Analysis/🔍 Perplexity Research to HTML_ AI-Powered Content Creation.json](../../../../sources/enescingoz__awesome-n8n-templates/AI_Research_RAG_and_Data_Analysis/🔍 Perplexity Research to HTML_ AI-Powered Content Creation.json)<br>[AI_Research_RAG_and_Data_Analysis/Analyze tradingview.com charts with Chrome extension, N8N and OpenAI.json](../../../../sources/enescingoz__awesome-n8n-templates/AI_Research_RAG_and_Data_Analysis/Analyze tradingview.com charts with Chrome extension, N8N and OpenAI.json)<br>[AI_Research_RAG_and_Data_Analysis/Automated Hugging Face Paper Summary Fetching & Categorization Workflow.json](../../../../sources/enescingoz__awesome-n8n-templates/AI_Research_RAG_and_Data_Analysis/Automated Hugging Face Paper Summary Fetching & Categorization Workflow.json)<br>[AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json](../../../../sources/enescingoz__awesome-n8n-templates/AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json)<br>[AI_Research_RAG_and_Data_Analysis/Bilig WorkPaper MCP formula engine for n8n agents.json](../../../../sources/enescingoz__awesome-n8n-templates/AI_Research_RAG_and_Data_Analysis/Bilig WorkPaper MCP formula engine for n8n agents.json) |
| spec | 0 | not obvious |
| eval | 0 | not obvious |
| security | 0 | not obvious |
| ci | 1 | [.github/workflows/pr-review.yml](../../../../sources/enescingoz__awesome-n8n-templates/.github/workflows/pr-review.yml) |
| container | 1 | [devops/docker-compose-controller.json](../../../../sources/enescingoz__awesome-n8n-templates/devops/docker-compose-controller.json) |
| instruction | 0 | not obvious |
| docs | 38 | [README-ar.md](../../../../sources/enescingoz__awesome-n8n-templates/README-ar.md)<br>[README-de.md](../../../../sources/enescingoz__awesome-n8n-templates/README-de.md)<br>[README-es.md](../../../../sources/enescingoz__awesome-n8n-templates/README-es.md)<br>[README-fr.md](../../../../sources/enescingoz__awesome-n8n-templates/README-fr.md)<br>[README-hi.md](../../../../sources/enescingoz__awesome-n8n-templates/README-hi.md)<br>[README-id.md](../../../../sources/enescingoz__awesome-n8n-templates/README-id.md)<br>[README-it.md](../../../../sources/enescingoz__awesome-n8n-templates/README-it.md)<br>[README-ja.md](../../../../sources/enescingoz__awesome-n8n-templates/README-ja.md) |
| config | 0 | not obvious |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 0 | not obvious |
| CI workflows | 1 | [.github/workflows/pr-review.yml](../../../../sources/enescingoz__awesome-n8n-templates/.github/workflows/pr-review.yml) |
| Containers / deploy | 1 | [devops/docker-compose-controller.json](../../../../sources/enescingoz__awesome-n8n-templates/devops/docker-compose-controller.json) |
| Security / policy | 0 | not obvious |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review; primary entrypoint not obvious from path scan |
| operation | test/eval path not obvious |
| security | security/policy surface not obvious; agent instruction files not obvious |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `.github/workflows/pr-review.yml`, `devops/docker-compose-controller.json`.
2. Inspect retrieval/memory/indexing through: `Google_Drive_and_Google_Sheets/RAG_Context-Aware Chunking _ Google Drive to Pinecone via OpenRouter & Gemini.json`, `docs/index.md`, `docs/categories/ai-research-rag.md`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 280+ free n8n automation templates — ready to use workflows for Gmail, Telegram, Slack, Discord, WhatsApp, Google Drive,. 핵심 구조 신호는 README.md, LICENSE, ci, docs, spec-artifacts이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
