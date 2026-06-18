# enescingoz/awesome-n8n-templates 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

280+ free n8n automation templates — ready-to-use workflows for Gmail, Telegram, Slack, Discord, WhatsApp, Google Drive, Notion, OpenAI, and more. AI agents, RAG chatbots, email automation, social media, DevOps, and document processing. The largest open-source n8n template collection.

## 요약

- 조사 단위: `sources/enescingoz__awesome-n8n-templates` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 352 files, 26 directories, depth score 51, key references 2개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 retrieval/vector path, containerized deploy 구조로 읽힌다. 핵심 소스 근거는 entrypoints=명확하지 않음이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 2개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | enescingoz/awesome-n8n-templates |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | 없음 |
| Stars | 23065 |
| Forks | 6158 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/enescingoz__awesome-n8n-templates](../../../../sources/enescingoz__awesome-n8n-templates) |
| 기존 보고서 | [reports/global-trending/repositories/enescingoz__awesome-n8n-templates.md](../../../global-trending/repositories/enescingoz__awesome-n8n-templates.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 352 / 26 |
| 관측 최대 깊이 | 3 |
| 상위 디렉터리 | .github, AI_Research_RAG_and_Data_Analysis, Airtable, Database_and_Storage, devops, Discord, docs, Forms_and_Surveys, Gmail_and_Email_Automation, Google_Drive_and_Google_Sheets, HR_and_Recruitment, img, Instagram_Twitter_Social_Media, Notion, OpenAI_and_LLMs, Other, Other_Integrations_and_Use_Cases, PDF_and_Document_Processing, Slack, Telegram |
| 상위 확장자 | .json: 308, .md: 35, .html: 2, .txt: 2, .yml: 2, .cff: 1, .png: 1, (none): 1 |
| 소스 패턴 | retrieval/vector path, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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
| ci | [.github/workflows/pr-review.yml](../../../../sources/enescingoz__awesome-n8n-templates/.github/workflows/pr-review.yml) | ci support |
| container | [devops/docker-compose-controller.json](../../../../sources/enescingoz__awesome-n8n-templates/devops/docker-compose-controller.json) | container support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 0 | 명확하지 않음 |
| retrieval | 47 | [Google_Drive_and_Google_Sheets/RAG_Context-Aware Chunking _ Google Drive to Pinecone via OpenRouter & Gemini.json](../../../../sources/enescingoz__awesome-n8n-templates/Google_Drive_and_Google_Sheets/RAG_Context-Aware Chunking _ Google Drive to Pinecone via OpenRouter & Gemini.json)<br>[docs/index.md](../../../../sources/enescingoz__awesome-n8n-templates/docs/index.md)<br>[docs/categories/ai-research-rag.md](../../../../sources/enescingoz__awesome-n8n-templates/docs/categories/ai-research-rag.md)<br>[AI_Research_RAG_and_Data_Analysis/🔍 Perplexity Research to HTML_ AI-Powered Content Creation.json](../../../../sources/enescingoz__awesome-n8n-templates/AI_Research_RAG_and_Data_Analysis/🔍 Perplexity Research to HTML_ AI-Powered Content Creation.json)<br>[AI_Research_RAG_and_Data_Analysis/Analyze tradingview.com charts with Chrome extension, N8N and OpenAI.json](../../../../sources/enescingoz__awesome-n8n-templates/AI_Research_RAG_and_Data_Analysis/Analyze tradingview.com charts with Chrome extension, N8N and OpenAI.json)<br>[AI_Research_RAG_and_Data_Analysis/Automated Hugging Face Paper Summary Fetching & Categorization Workflow.json](../../../../sources/enescingoz__awesome-n8n-templates/AI_Research_RAG_and_Data_Analysis/Automated Hugging Face Paper Summary Fetching & Categorization Workflow.json)<br>[AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json](../../../../sources/enescingoz__awesome-n8n-templates/AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json)<br>[AI_Research_RAG_and_Data_Analysis/Bilig WorkPaper MCP formula engine for n8n agents.json](../../../../sources/enescingoz__awesome-n8n-templates/AI_Research_RAG_and_Data_Analysis/Bilig WorkPaper MCP formula engine for n8n agents.json) |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/pr-review.yml](../../../../sources/enescingoz__awesome-n8n-templates/.github/workflows/pr-review.yml) |
| container | 1 | [devops/docker-compose-controller.json](../../../../sources/enescingoz__awesome-n8n-templates/devops/docker-compose-controller.json) |
| instruction | 0 | 명확하지 않음 |
| docs | 38 | [README-ar.md](../../../../sources/enescingoz__awesome-n8n-templates/README-ar.md)<br>[README-de.md](../../../../sources/enescingoz__awesome-n8n-templates/README-de.md)<br>[README-es.md](../../../../sources/enescingoz__awesome-n8n-templates/README-es.md)<br>[README-fr.md](../../../../sources/enescingoz__awesome-n8n-templates/README-fr.md)<br>[README-hi.md](../../../../sources/enescingoz__awesome-n8n-templates/README-hi.md)<br>[README-id.md](../../../../sources/enescingoz__awesome-n8n-templates/README-id.md)<br>[README-it.md](../../../../sources/enescingoz__awesome-n8n-templates/README-it.md)<br>[README-ja.md](../../../../sources/enescingoz__awesome-n8n-templates/README-ja.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 1 | [.github/workflows/pr-review.yml](../../../../sources/enescingoz__awesome-n8n-templates/.github/workflows/pr-review.yml) |
| 컨테이너/배포 | 1 | [devops/docker-compose-controller.json](../../../../sources/enescingoz__awesome-n8n-templates/devops/docker-compose-controller.json) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요; path scan에서 primary entrypoint가 명확하지 않음 |
| operation | test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `.github/workflows/pr-review.yml`, `devops/docker-compose-controller.json`.
2. retrieval/memory/indexing 확인: `Google_Drive_and_Google_Sheets/RAG_Context-Aware Chunking _ Google Drive to Pinecone via OpenRouter & Gemini.json`, `docs/index.md`, `docs/categories/ai-research-rag.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 280+ free n8n automation templates — ready to use workflows for Gmail, Telegram, Slack, Discord, WhatsApp, Google Drive,. 핵심 구조 신호는 README.md, LICENSE, ci, docs, spec-artifacts이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
