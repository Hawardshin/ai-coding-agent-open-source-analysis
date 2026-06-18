# the-open-agent/openagent Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

⚡️next-generation personal AI assistant powered by LLM, RAG and agent loops, supporting computer-use, browser-use and coding agent, demo: https://demo.openagentai.org

## 요약

- 조사 단위: `sources/the-open-agent__openagent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 656 files, 121 directories, depth score 126, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=model/mcp.go, mcp/client.go, mcp/scan.go이고, 의존성 단서는 openai, anthropic, mcp, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | the-open-agent/openagent |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 5266 |
| Forks | 611 |
| License | none |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/the-open-agent__openagent](../../../../sources/the-open-agent__openagent) |
| Existing report | [reports/global-trending/repositories/the-open-agent__openagent.md](../../../global-trending/repositories/the-open-agent__openagent.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 656 / 121 |
| Max observed depth | 5 |
| Top directories | .github, assets, audio, auth, authz, bpmn, carrier, chain, conf, contest, controllers, data, deploy, embedding, embedsupport, i18n, internal, mcp, model, object |
| Top extensions | .go: 350, .js: 185, .md: 67, .json: 12, (none): 9, .yml: 6, .css: 5, .html: 3, .png: 3, .sh: 3, .yaml: 2, .conf: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| web | source boundary | 13 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| audio | top-level component | 1 |
| auth | top-level component | 1 |
| authz | top-level component | 1 |
| bpmn | top-level component | 1 |
| carrier | top-level component | 1 |
| chain | top-level component | 1 |
| conf | top-level component | 1 |
| contest | validation surface | 1 |
| controllers | top-level component | 1 |
| data | top-level component | 1 |
| deploy | deployment surface | 1 |
| embedding | top-level component | 1 |
| embedsupport | top-level component | 1 |
| i18n | top-level component | 1 |
| internal | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | opentelemetry, prometheus |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [model/mcp.go](../../../../sources/the-open-agent__openagent/model/mcp.go) | mcp signal |
| mcp | [mcp/client.go](../../../../sources/the-open-agent__openagent/mcp/client.go) | mcp signal |
| mcp | [mcp/scan.go](../../../../sources/the-open-agent__openagent/mcp/scan.go) | mcp signal |
| mcp | [mcp/tools.go](../../../../sources/the-open-agent__openagent/mcp/tools.go) | mcp signal |
| agentRuntime | [tool/browser_use_chrome_ext.go](../../../../sources/the-open-agent__openagent/tool/browser_use_chrome_ext.go) | agentRuntime signal |
| agentRuntime | [tool/browser_use.go](../../../../sources/the-open-agent__openagent/tool/browser_use.go) | agentRuntime signal |
| agentRuntime | [tool/browser.go](../../../../sources/the-open-agent__openagent/tool/browser.go) | agentRuntime signal |
| agentRuntime | [tool/builtin_tool.go](../../../../sources/the-open-agent__openagent/tool/builtin_tool.go) | agentRuntime signal |
| entrypoints | [main.go](../../../../sources/the-open-agent__openagent/main.go) | entrypoints signal |
| entrypoints | [web/src/App.js](../../../../sources/the-open-agent__openagent/web/src/App.js) | entrypoints signal |
| entrypoints | [web/src/App.less](../../../../sources/the-open-agent__openagent/web/src/App.less) | entrypoints signal |
| entrypoints | [web/src/App.test.js](../../../../sources/the-open-agent__openagent/web/src/App.test.js) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 8 | [main.go](../../../../sources/the-open-agent__openagent/main.go)<br>[web/src/App.js](../../../../sources/the-open-agent__openagent/web/src/App.js)<br>[web/src/App.less](../../../../sources/the-open-agent__openagent/web/src/App.less)<br>[web/src/App.test.js](../../../../sources/the-open-agent__openagent/web/src/App.test.js)<br>[web/src/index.css](../../../../sources/the-open-agent__openagent/web/src/index.css)<br>[web/src/index.js](../../../../sources/the-open-agent__openagent/web/src/index.js)<br>[object/server.go](../../../../sources/the-open-agent__openagent/object/server.go)<br>[controllers/server.go](../../../../sources/the-open-agent__openagent/controllers/server.go) |
| agentRuntime | 101 | [tool/browser_use_chrome_ext.go](../../../../sources/the-open-agent__openagent/tool/browser_use_chrome_ext.go)<br>[tool/browser_use.go](../../../../sources/the-open-agent__openagent/tool/browser_use.go)<br>[tool/browser.go](../../../../sources/the-open-agent__openagent/tool/browser.go)<br>[tool/builtin_tool.go](../../../../sources/the-open-agent__openagent/tool/builtin_tool.go)<br>[tool/image_search.go](../../../../sources/the-open-agent__openagent/tool/image_search.go)<br>[tool/local_file.go](../../../../sources/the-open-agent__openagent/tool/local_file.go)<br>[tool/office_excel.go](../../../../sources/the-open-agent__openagent/tool/office_excel.go)<br>[tool/office_ppt_read.go](../../../../sources/the-open-agent__openagent/tool/office_ppt_read.go) |
| mcp | 6 | [model/mcp.go](../../../../sources/the-open-agent__openagent/model/mcp.go)<br>[mcp/client.go](../../../../sources/the-open-agent__openagent/mcp/client.go)<br>[mcp/scan.go](../../../../sources/the-open-agent__openagent/mcp/scan.go)<br>[mcp/tools.go](../../../../sources/the-open-agent__openagent/mcp/tools.go)<br>[mcp/toolset.go](../../../../sources/the-open-agent__openagent/mcp/toolset.go)<br>[mcp/util.go](../../../../sources/the-open-agent__openagent/mcp/util.go) |
| retrieval | 25 | [embed.go](../../../../sources/the-open-agent__openagent/embed.go)<br>[web/src/index.css](../../../../sources/the-open-agent__openagent/web/src/index.css)<br>[web/src/index.js](../../../../sources/the-open-agent__openagent/web/src/index.js)<br>[web/public/index.html](../../../../sources/the-open-agent__openagent/web/public/index.html)<br>[swagger/index.html](../../../../sources/the-open-agent__openagent/swagger/index.html)<br>[object/vector_embedding.go](../../../../sources/the-open-agent__openagent/object/vector_embedding.go)<br>[object/vector_test.go](../../../../sources/the-open-agent__openagent/object/vector_test.go)<br>[object/vector.go](../../../../sources/the-open-agent__openagent/object/vector.go) |
| spec | 2 | [deploy/ocr-service/requirements.txt](../../../../sources/the-open-agent__openagent/deploy/ocr-service/requirements.txt)<br>[assets/0-Architecture-casibase.png](../../../../sources/the-open-agent__openagent/assets/0-Architecture-casibase.png) |
| eval | 27 | [web/src/App.test.js](../../../../sources/the-open-agent__openagent/web/src/App.test.js)<br>[web/src/ChatMessageRender.test.js](../../../../sources/the-open-agent__openagent/web/src/ChatMessageRender.test.js)<br>[util/chromedp_test.go](../../../../sources/the-open-agent__openagent/util/chromedp_test.go)<br>[util/header_test.go](../../../../sources/the-open-agent__openagent/util/header_test.go)<br>[util/system_test.go](../../../../sources/the-open-agent__openagent/util/system_test.go)<br>[txt/pdf_test.go](../../../../sources/the-open-agent__openagent/txt/pdf_test.go)<br>[txt/txt_test.go](../../../../sources/the-open-agent__openagent/txt/txt_test.go)<br>[storage/provider_test.go](../../../../sources/the-open-agent__openagent/storage/provider_test.go) |
| security | 4 | [SECURITY.md](../../../../sources/the-open-agent__openagent/SECURITY.md)<br>[util/permission.go](../../../../sources/the-open-agent__openagent/util/permission.go)<br>[controllers/permission.go](../../../../sources/the-open-agent__openagent/controllers/permission.go)<br>[auth/auth.go](../../../../sources/the-open-agent__openagent/auth/auth.go) |
| ci | 1 | [.github/workflows/build.yml](../../../../sources/the-open-agent__openagent/.github/workflows/build.yml) |
| container | 7 | [docker-compose.ocr.yml](../../../../sources/the-open-agent__openagent/docker-compose.ocr.yml)<br>[docker-compose.yml](../../../../sources/the-open-agent__openagent/docker-compose.yml)<br>[Dockerfile](../../../../sources/the-open-agent__openagent/Dockerfile)<br>[deploy/ocr-service/app.py](../../../../sources/the-open-agent__openagent/deploy/ocr-service/app.py)<br>[deploy/ocr-service/Dockerfile](../../../../sources/the-open-agent__openagent/deploy/ocr-service/Dockerfile)<br>[deploy/ocr-service/README.md](../../../../sources/the-open-agent__openagent/deploy/ocr-service/README.md)<br>[deploy/ocr-service/requirements.txt](../../../../sources/the-open-agent__openagent/deploy/ocr-service/requirements.txt) |
| instruction | 0 | not obvious |
| docs | 4 | [README_zh.md](../../../../sources/the-open-agent__openagent/README_zh.md)<br>[README.md](../../../../sources/the-open-agent__openagent/README.md)<br>[web/README.md](../../../../sources/the-open-agent__openagent/web/README.md)<br>[deploy/ocr-service/README.md](../../../../sources/the-open-agent__openagent/deploy/ocr-service/README.md) |
| config | 4 | [go.mod](../../../../sources/the-open-agent__openagent/go.mod)<br>[web/package.json](../../../../sources/the-open-agent__openagent/web/package.json)<br>[tool/pptx-worker/package.json](../../../../sources/the-open-agent__openagent/tool/pptx-worker/package.json)<br>[deploy/ocr-service/requirements.txt](../../../../sources/the-open-agent__openagent/deploy/ocr-service/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 27 | [web/src/App.test.js](../../../../sources/the-open-agent__openagent/web/src/App.test.js)<br>[web/src/ChatMessageRender.test.js](../../../../sources/the-open-agent__openagent/web/src/ChatMessageRender.test.js)<br>[util/chromedp_test.go](../../../../sources/the-open-agent__openagent/util/chromedp_test.go)<br>[util/header_test.go](../../../../sources/the-open-agent__openagent/util/header_test.go)<br>[util/system_test.go](../../../../sources/the-open-agent__openagent/util/system_test.go)<br>[txt/pdf_test.go](../../../../sources/the-open-agent__openagent/txt/pdf_test.go) |
| CI workflows | 1 | [.github/workflows/build.yml](../../../../sources/the-open-agent__openagent/.github/workflows/build.yml) |
| Containers / deploy | 7 | [docker-compose.ocr.yml](../../../../sources/the-open-agent__openagent/docker-compose.ocr.yml)<br>[docker-compose.yml](../../../../sources/the-open-agent__openagent/docker-compose.yml)<br>[Dockerfile](../../../../sources/the-open-agent__openagent/Dockerfile)<br>[deploy/ocr-service/app.py](../../../../sources/the-open-agent__openagent/deploy/ocr-service/app.py)<br>[deploy/ocr-service/Dockerfile](../../../../sources/the-open-agent__openagent/deploy/ocr-service/Dockerfile)<br>[deploy/ocr-service/README.md](../../../../sources/the-open-agent__openagent/deploy/ocr-service/README.md) |
| Security / policy | 4 | [SECURITY.md](../../../../sources/the-open-agent__openagent/SECURITY.md)<br>[util/permission.go](../../../../sources/the-open-agent__openagent/util/permission.go)<br>[controllers/permission.go](../../../../sources/the-open-agent__openagent/controllers/permission.go)<br>[auth/auth.go](../../../../sources/the-open-agent__openagent/auth/auth.go) |
| Agent instructions | 0 | not obvious |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | agent instruction files not obvious |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `model/mcp.go`, `mcp/client.go`, `mcp/scan.go`.
2. Trace execution through entrypoints: `main.go`, `web/src/App.js`, `web/src/App.less`.
3. Map agent/tool runtime through: `tool/browser_use_chrome_ext.go`, `tool/browser_use.go`, `tool/browser.go`.
4. Inspect retrieval/memory/indexing through: `embed.go`, `web/src/index.css`, `web/src/index.js`.
5. Verify behavior through test/eval files: `web/src/App.test.js`, `web/src/ChatMessageRender.test.js`, `util/chromedp_test.go`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 ⚡️next generation personal AI assistant powered by LLM, RAG and agent loops, supporting computer use, browser use and co. 핵심 구조 신호는 Go, go.mod, Dockerfile, docker-compose.yml, README.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
