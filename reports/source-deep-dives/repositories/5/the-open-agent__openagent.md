# the-open-agent/openagent 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

⚡️next-generation personal AI assistant powered by LLM, RAG and agent loops, supporting computer-use, browser-use and coding agent, demo: https://demo.openagentai.org

## 요약

- 조사 단위: `sources/the-open-agent__openagent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 656 files, 121 directories, depth score 120, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=model/mcp.go, mcp/client.go, mcp/scan.go이고, 의존성 단서는 openai, anthropic, mcp, opentelemetry, prometheus, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | the-open-agent/openagent |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Go |
| Stars | 5266 |
| Forks | 611 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/the-open-agent__openagent](../../../../sources/the-open-agent__openagent) |
| 기존 보고서 | [reports/global-trending/repositories/the-open-agent__openagent.md](../../../global-trending/repositories/the-open-agent__openagent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 656 / 121 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, assets, audio, auth, authz, bpmn, carrier, chain, conf, contest, controllers, data, deploy, embedding, embedsupport, i18n, internal, mcp, model, object |
| 상위 확장자 | .go: 350, .js: 185, .md: 67, .json: 12, (none): 9, .yml: 6, .css: 5, .html: 3, .png: 3, .sh: 3, .yaml: 2, .conf: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry, prometheus |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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
| instruction | 0 | 명확하지 않음 |
| docs | 4 | [README_zh.md](../../../../sources/the-open-agent__openagent/README_zh.md)<br>[README.md](../../../../sources/the-open-agent__openagent/README.md)<br>[web/README.md](../../../../sources/the-open-agent__openagent/web/README.md)<br>[deploy/ocr-service/README.md](../../../../sources/the-open-agent__openagent/deploy/ocr-service/README.md) |
| config | 4 | [go.mod](../../../../sources/the-open-agent__openagent/go.mod)<br>[web/package.json](../../../../sources/the-open-agent__openagent/web/package.json)<br>[tool/pptx-worker/package.json](../../../../sources/the-open-agent__openagent/tool/pptx-worker/package.json)<br>[deploy/ocr-service/requirements.txt](../../../../sources/the-open-agent__openagent/deploy/ocr-service/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 27 | [web/src/App.test.js](../../../../sources/the-open-agent__openagent/web/src/App.test.js)<br>[web/src/ChatMessageRender.test.js](../../../../sources/the-open-agent__openagent/web/src/ChatMessageRender.test.js)<br>[util/chromedp_test.go](../../../../sources/the-open-agent__openagent/util/chromedp_test.go)<br>[util/header_test.go](../../../../sources/the-open-agent__openagent/util/header_test.go)<br>[util/system_test.go](../../../../sources/the-open-agent__openagent/util/system_test.go)<br>[txt/pdf_test.go](../../../../sources/the-open-agent__openagent/txt/pdf_test.go) |
| CI workflow | 1 | [.github/workflows/build.yml](../../../../sources/the-open-agent__openagent/.github/workflows/build.yml) |
| 컨테이너/배포 | 7 | [docker-compose.ocr.yml](../../../../sources/the-open-agent__openagent/docker-compose.ocr.yml)<br>[docker-compose.yml](../../../../sources/the-open-agent__openagent/docker-compose.yml)<br>[Dockerfile](../../../../sources/the-open-agent__openagent/Dockerfile)<br>[deploy/ocr-service/app.py](../../../../sources/the-open-agent__openagent/deploy/ocr-service/app.py)<br>[deploy/ocr-service/Dockerfile](../../../../sources/the-open-agent__openagent/deploy/ocr-service/Dockerfile)<br>[deploy/ocr-service/README.md](../../../../sources/the-open-agent__openagent/deploy/ocr-service/README.md) |
| 보안/정책 | 4 | [SECURITY.md](../../../../sources/the-open-agent__openagent/SECURITY.md)<br>[util/permission.go](../../../../sources/the-open-agent__openagent/util/permission.go)<br>[controllers/permission.go](../../../../sources/the-open-agent__openagent/controllers/permission.go)<br>[auth/auth.go](../../../../sources/the-open-agent__openagent/auth/auth.go) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `model/mcp.go`, `mcp/client.go`, `mcp/scan.go`.
2. entrypoint를 따라 실행 흐름 확인: `main.go`, `web/src/App.js`, `web/src/App.less`.
3. agent/tool runtime 매핑: `tool/browser_use_chrome_ext.go`, `tool/browser_use.go`, `tool/browser.go`.
4. retrieval/memory/indexing 확인: `embed.go`, `web/src/index.css`, `web/src/index.js`.
5. test/eval 파일로 동작 검증: `web/src/App.test.js`, `web/src/ChatMessageRender.test.js`, `util/chromedp_test.go`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 ⚡️next generation personal AI assistant powered by LLM, RAG and agent loops, supporting computer use, browser use and co. 핵심 구조 신호는 Go, go.mod, Dockerfile, docker-compose.yml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
