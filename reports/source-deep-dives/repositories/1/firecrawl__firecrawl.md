# firecrawl/firecrawl 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

The API to search, scrape, and interact with the web at scale. 🔥

## 요약

- 조사 단위: `sources/firecrawl__firecrawl` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,512 files, 322 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=apps/test-site/src/content/blog/launch-week-iii-day-6-firecrawl-mcp.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | firecrawl/firecrawl |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 134132 |
| Forks | 7844 |
| License | AGPL-3.0 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/firecrawl__firecrawl](../../../../sources/firecrawl__firecrawl) |
| 기존 보고서 | [reports/global-trending/repositories/firecrawl__firecrawl.md](../../../global-trending/repositories/firecrawl__firecrawl.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1512 / 322 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .github, apps, examples, firecrawl-cli, firecrawl-cli-skills, firecrawl-skills, firecrawl-workflows, img |
| 상위 확장자 | .ts: 642, .py: 165, .md: 79, .java: 62, (none): 61, .php: 48, .png: 47, .yaml: 40, .yml: 37, .cs: 36, .rs: 35, .json: 31 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| apps/api | apps workspace | 52 |
| apps/test-site | apps workspace | 51 |
| apps/test-suite | apps workspace | 38 |
| examples/kubernetes | examples workspace | 36 |
| apps/js-sdk | apps workspace | 15 |
| apps/ui | apps workspace | 9 |
| apps/python-sdk | apps workspace | 6 |
| apps/playwright-service-ts | apps workspace | 5 |
| apps/go-html-to-md-service | apps workspace | 4 |
| apps/ruby-sdk | apps workspace | 4 |
| apps/rust-sdk | apps workspace | 4 |
| examples/openai_swarm_firecrawl | examples workspace | 4 |
| examples/deep-research-apartment-finder | examples workspace | 3 |
| examples/deepseek-v3-company-researcher | examples workspace | 3 |
| examples/deepseek-v3-crawler | examples workspace | 3 |
| examples/gemini-2.5-crawler | examples workspace | 3 |
| examples/gemini-2.5-screenshot-editor | examples workspace | 3 |
| examples/gemini-2.5-web-extractor | examples workspace | 3 |


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
| mcp | [apps/test-site/src/content/blog/launch-week-iii-day-6-firecrawl-mcp.md](../../../../sources/firecrawl__firecrawl/apps/test-site/src/content/blog/launch-week-iii-day-6-firecrawl-mcp.md) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/firecrawl__firecrawl/AGENTS.md) | agentRuntime signal |
| agentRuntime | [examples/blog-articles/deploying_web_scrapers/deploying-web-scrapers-images/workflow.png](../../../../sources/firecrawl__firecrawl/examples/blog-articles/deploying_web_scrapers/deploying-web-scrapers-images/workflow.png) | agentRuntime signal |
| agentRuntime | [apps/test-suite/load-test-results/tests-1-5/assets/memory-utilization-report-test-1.png](../../../../sources/firecrawl__firecrawl/apps/test-suite/load-test-results/tests-1-5/assets/memory-utilization-report-test-1.png) | agentRuntime signal |
| agentRuntime | [apps/rust-sdk/src/agent.rs](../../../../sources/firecrawl__firecrawl/apps/rust-sdk/src/agent.rs) | agentRuntime signal |
| entrypoints | [examples/openai_swarm_firecrawl_web_extractor/main.py](../../../../sources/firecrawl__firecrawl/examples/openai_swarm_firecrawl_web_extractor/main.py) | entrypoints signal |
| entrypoints | [examples/openai_swarm_firecrawl/main.py](../../../../sources/firecrawl__firecrawl/examples/openai_swarm_firecrawl/main.py) | entrypoints signal |
| entrypoints | [apps/ui/ingestion-ui/src/App.tsx](../../../../sources/firecrawl__firecrawl/apps/ui/ingestion-ui/src/App.tsx) | entrypoints signal |
| entrypoints | [apps/ui/ingestion-ui/src/index.css](../../../../sources/firecrawl__firecrawl/apps/ui/ingestion-ui/src/index.css) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/firecrawl__firecrawl/CLAUDE.md) | instruction signal |
| config | [examples/scrape_and_analyze_airbnb_data_e2b/package.json](../../../../sources/firecrawl__firecrawl/examples/scrape_and_analyze_airbnb_data_e2b/package.json) | config signal |
| config | [examples/sales_web_crawler/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/sales_web_crawler/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 758 | [examples/openai_swarm_firecrawl_web_extractor/main.py](../../../../sources/firecrawl__firecrawl/examples/openai_swarm_firecrawl_web_extractor/main.py)<br>[examples/openai_swarm_firecrawl/main.py](../../../../sources/firecrawl__firecrawl/examples/openai_swarm_firecrawl/main.py)<br>[apps/ui/ingestion-ui/src/App.tsx](../../../../sources/firecrawl__firecrawl/apps/ui/ingestion-ui/src/App.tsx)<br>[apps/ui/ingestion-ui/src/index.css](../../../../sources/firecrawl__firecrawl/apps/ui/ingestion-ui/src/index.css)<br>[apps/ui/ingestion-ui/src/main.tsx](../../../../sources/firecrawl__firecrawl/apps/ui/ingestion-ui/src/main.tsx)<br>[apps/test-site/src/consts.ts](../../../../sources/firecrawl__firecrawl/apps/test-site/src/consts.ts)<br>[apps/test-site/src/content.config.ts](../../../../sources/firecrawl__firecrawl/apps/test-site/src/content.config.ts)<br>[apps/test-site/src/styles/global.css](../../../../sources/firecrawl__firecrawl/apps/test-site/src/styles/global.css) |
| agentRuntime | 24 | [AGENTS.md](../../../../sources/firecrawl__firecrawl/AGENTS.md)<br>[examples/blog-articles/deploying_web_scrapers/deploying-web-scrapers-images/workflow.png](../../../../sources/firecrawl__firecrawl/examples/blog-articles/deploying_web_scrapers/deploying-web-scrapers-images/workflow.png)<br>[apps/test-suite/load-test-results/tests-1-5/assets/memory-utilization-report-test-1.png](../../../../sources/firecrawl__firecrawl/apps/test-suite/load-test-results/tests-1-5/assets/memory-utilization-report-test-1.png)<br>[apps/rust-sdk/src/agent.rs](../../../../sources/firecrawl__firecrawl/apps/rust-sdk/src/agent.rs)<br>[apps/ruby-sdk/lib/firecrawl/models/agent_options.rb](../../../../sources/firecrawl__firecrawl/apps/ruby-sdk/lib/firecrawl/models/agent_options.rb)<br>[apps/ruby-sdk/lib/firecrawl/models/agent_response.rb](../../../../sources/firecrawl__firecrawl/apps/ruby-sdk/lib/firecrawl/models/agent_response.rb)<br>[apps/ruby-sdk/lib/firecrawl/models/agent_status_response.rb](../../../../sources/firecrawl__firecrawl/apps/ruby-sdk/lib/firecrawl/models/agent_status_response.rb)<br>[apps/python-sdk/firecrawl/v2/methods/agent.py](../../../../sources/firecrawl__firecrawl/apps/python-sdk/firecrawl/v2/methods/agent.py) |
| mcp | 1 | [apps/test-site/src/content/blog/launch-week-iii-day-6-firecrawl-mcp.md](../../../../sources/firecrawl__firecrawl/apps/test-site/src/content/blog/launch-week-iii-day-6-firecrawl-mcp.md) |
| retrieval | 48 | [examples/web_data_rag_with_llama3/web-data-rag--with-llama3.mdx](../../../../sources/firecrawl__firecrawl/examples/web_data_rag_with_llama3/web-data-rag--with-llama3.mdx)<br>[examples/scrape_and_analyze_airbnb_data_e2b/index.ts](../../../../sources/firecrawl__firecrawl/examples/scrape_and_analyze_airbnb_data_e2b/index.ts)<br>[apps/ui/ingestion-ui/index.html](../../../../sources/firecrawl__firecrawl/apps/ui/ingestion-ui/index.html)<br>[apps/ui/ingestion-ui/src/index.css](../../../../sources/firecrawl__firecrawl/apps/ui/ingestion-ui/src/index.css)<br>[apps/test-suite/load-test-results/tests-1-5/assets/memory-utilization-report-test-1.png](../../../../sources/firecrawl__firecrawl/apps/test-suite/load-test-results/tests-1-5/assets/memory-utilization-report-test-1.png)<br>[apps/test-suite/index-benchmark/run.ipynb](../../../../sources/firecrawl__firecrawl/apps/test-suite/index-benchmark/run.ipynb)<br>[apps/test-site/src/pages/index.astro](../../../../sources/firecrawl__firecrawl/apps/test-site/src/pages/index.astro)<br>[apps/test-site/src/pages/blog/index.astro](../../../../sources/firecrawl__firecrawl/apps/test-site/src/pages/blog/index.astro) |
| spec | 19 | [examples/sales_web_crawler/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/sales_web_crawler/requirements.txt)<br>[examples/openai_swarm_firecrawl_web_extractor/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/openai_swarm_firecrawl_web_extractor/requirements.txt)<br>[examples/openai_swarm_firecrawl/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/openai_swarm_firecrawl/requirements.txt)<br>[examples/o4-mini-web-crawler/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/o4-mini-web-crawler/requirements.txt)<br>[examples/o3-web-crawler/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/o3-web-crawler/requirements.txt)<br>[examples/llama-4-maverick-web-extractor/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/llama-4-maverick-web-extractor/requirements.txt)<br>[examples/llama-4-maverick-web-crawler/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/llama-4-maverick-web-crawler/requirements.txt)<br>[examples/hacker_news_scraper/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/hacker_news_scraper/requirements.txt) |
| eval | 395 | [apps/test-suite/.env.example](../../../../sources/firecrawl__firecrawl/apps/test-suite/.env.example)<br>[apps/test-suite/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/test-suite/audit-ci.jsonc)<br>[apps/test-suite/jest.config.js](../../../../sources/firecrawl__firecrawl/apps/test-suite/jest.config.js)<br>[apps/test-suite/jest.setup.js](../../../../sources/firecrawl__firecrawl/apps/test-suite/jest.setup.js)<br>[apps/test-suite/load-test.yml](../../../../sources/firecrawl__firecrawl/apps/test-suite/load-test.yml)<br>[apps/test-suite/package.json](../../../../sources/firecrawl__firecrawl/apps/test-suite/package.json)<br>[apps/test-suite/pnpm-lock.yaml](../../../../sources/firecrawl__firecrawl/apps/test-suite/pnpm-lock.yaml)<br>[apps/test-suite/README.md](../../../../sources/firecrawl__firecrawl/apps/test-suite/README.md) |
| security | 19 | [examples/kubernetes/firecrawl-helm/templates/secret.yaml](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/templates/secret.yaml)<br>[examples/kubernetes/cluster-install/secret.yaml](../../../../sources/firecrawl__firecrawl/examples/kubernetes/cluster-install/secret.yaml)<br>[apps/ui/ingestion-ui/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/ui/ingestion-ui/audit-ci.jsonc)<br>[apps/test-suite/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/test-suite/audit-ci.jsonc)<br>[apps/test-site/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/test-site/audit-ci.jsonc)<br>[apps/playwright-service-ts/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/playwright-service-ts/audit-ci.jsonc)<br>[apps/js-sdk/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/js-sdk/audit-ci.jsonc)<br>[apps/js-sdk/firecrawl/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/js-sdk/firecrawl/audit-ci.jsonc) |
| ci | 30 | [.github/workflows/deploy-go-service.yaml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-go-service.yaml)<br>[.github/workflows/deploy-image-staging.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-image-staging.yml)<br>[.github/workflows/deploy-image.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-image.yml)<br>[.github/workflows/deploy-nuq-postgres.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-nuq-postgres.yml)<br>[.github/workflows/deploy-playwright.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-playwright.yml)<br>[.github/workflows/deploy-redis.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-redis.yml)<br>[.github/workflows/eval-prod.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/eval-prod.yml)<br>[.github/workflows/ghcr-clean.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/ghcr-clean.yml) |
| container | 39 | [docker-compose.yaml](../../../../sources/firecrawl__firecrawl/docker-compose.yaml)<br>[examples/kubernetes/firecrawl-helm/.helmignore](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/.helmignore)<br>[examples/kubernetes/firecrawl-helm/Chart.yaml](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/Chart.yaml)<br>[examples/kubernetes/firecrawl-helm/README.md](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/README.md)<br>[examples/kubernetes/firecrawl-helm/values.yaml](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/values.yaml)<br>[examples/kubernetes/firecrawl-helm/templates/_helpers.tpl](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/templates/_helpers.tpl)<br>[examples/kubernetes/firecrawl-helm/templates/configmap.yaml](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/templates/configmap.yaml)<br>[examples/kubernetes/firecrawl-helm/templates/deployment.yaml](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/templates/deployment.yaml) |
| instruction | 2 | [AGENTS.md](../../../../sources/firecrawl__firecrawl/AGENTS.md)<br>[CLAUDE.md](../../../../sources/firecrawl__firecrawl/CLAUDE.md) |
| docs | 42 | [README.md](../../../../sources/firecrawl__firecrawl/README.md)<br>[firecrawl-workflows/README.md](../../../../sources/firecrawl__firecrawl/firecrawl-workflows/README.md)<br>[firecrawl-skills/README.md](../../../../sources/firecrawl__firecrawl/firecrawl-skills/README.md)<br>[firecrawl-cli-skills/README.md](../../../../sources/firecrawl__firecrawl/firecrawl-cli-skills/README.md)<br>[firecrawl-cli/README.md](../../../../sources/firecrawl__firecrawl/firecrawl-cli/README.md)<br>[examples/scrape_and_analyze_airbnb_data_e2b/README.md](../../../../sources/firecrawl__firecrawl/examples/scrape_and_analyze_airbnb_data_e2b/README.md)<br>[examples/openai-realtime-firecrawl/README.md](../../../../sources/firecrawl__firecrawl/examples/openai-realtime-firecrawl/README.md)<br>[examples/openai_swarm_firecrawl/README.md](../../../../sources/firecrawl__firecrawl/examples/openai_swarm_firecrawl/README.md) |
| config | 46 | [examples/scrape_and_analyze_airbnb_data_e2b/package.json](../../../../sources/firecrawl__firecrawl/examples/scrape_and_analyze_airbnb_data_e2b/package.json)<br>[examples/sales_web_crawler/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/sales_web_crawler/requirements.txt)<br>[examples/openai_swarm_firecrawl_web_extractor/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/openai_swarm_firecrawl_web_extractor/requirements.txt)<br>[examples/openai_swarm_firecrawl/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/openai_swarm_firecrawl/requirements.txt)<br>[examples/o4-mini-web-crawler/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/o4-mini-web-crawler/requirements.txt)<br>[examples/o3-web-crawler/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/o3-web-crawler/requirements.txt)<br>[examples/llama-4-maverick-web-extractor/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/llama-4-maverick-web-extractor/requirements.txt)<br>[examples/llama-4-maverick-web-crawler/requirements.txt](../../../../sources/firecrawl__firecrawl/examples/llama-4-maverick-web-crawler/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 395 | [apps/test-suite/.env.example](../../../../sources/firecrawl__firecrawl/apps/test-suite/.env.example)<br>[apps/test-suite/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/test-suite/audit-ci.jsonc)<br>[apps/test-suite/jest.config.js](../../../../sources/firecrawl__firecrawl/apps/test-suite/jest.config.js)<br>[apps/test-suite/jest.setup.js](../../../../sources/firecrawl__firecrawl/apps/test-suite/jest.setup.js)<br>[apps/test-suite/load-test.yml](../../../../sources/firecrawl__firecrawl/apps/test-suite/load-test.yml)<br>[apps/test-suite/package.json](../../../../sources/firecrawl__firecrawl/apps/test-suite/package.json) |
| CI workflow | 30 | [.github/workflows/deploy-go-service.yaml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-go-service.yaml)<br>[.github/workflows/deploy-image-staging.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-image-staging.yml)<br>[.github/workflows/deploy-image.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-image.yml)<br>[.github/workflows/deploy-nuq-postgres.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-nuq-postgres.yml)<br>[.github/workflows/deploy-playwright.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-playwright.yml)<br>[.github/workflows/deploy-redis.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-redis.yml) |
| 컨테이너/배포 | 39 | [docker-compose.yaml](../../../../sources/firecrawl__firecrawl/docker-compose.yaml)<br>[examples/kubernetes/firecrawl-helm/.helmignore](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/.helmignore)<br>[examples/kubernetes/firecrawl-helm/Chart.yaml](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/Chart.yaml)<br>[examples/kubernetes/firecrawl-helm/README.md](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/README.md)<br>[examples/kubernetes/firecrawl-helm/values.yaml](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/values.yaml)<br>[examples/kubernetes/firecrawl-helm/templates/_helpers.tpl](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/templates/_helpers.tpl) |
| 보안/정책 | 19 | [examples/kubernetes/firecrawl-helm/templates/secret.yaml](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/templates/secret.yaml)<br>[examples/kubernetes/cluster-install/secret.yaml](../../../../sources/firecrawl__firecrawl/examples/kubernetes/cluster-install/secret.yaml)<br>[apps/ui/ingestion-ui/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/ui/ingestion-ui/audit-ci.jsonc)<br>[apps/test-suite/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/test-suite/audit-ci.jsonc)<br>[apps/test-site/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/test-site/audit-ci.jsonc)<br>[apps/playwright-service-ts/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/playwright-service-ts/audit-ci.jsonc) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/firecrawl__firecrawl/AGENTS.md)<br>[CLAUDE.md](../../../../sources/firecrawl__firecrawl/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `apps/test-site/src/content/blog/launch-week-iii-day-6-firecrawl-mcp.md`, `AGENTS.md`, `examples/blog-articles/deploying_web_scrapers/deploying-web-scrapers-images/workflow.png`.
2. entrypoint를 따라 실행 흐름 확인: `examples/openai_swarm_firecrawl_web_extractor/main.py`, `examples/openai_swarm_firecrawl/main.py`, `apps/ui/ingestion-ui/src/App.tsx`.
3. agent/tool runtime 매핑: `AGENTS.md`, `examples/blog-articles/deploying_web_scrapers/deploying-web-scrapers-images/workflow.png`, `apps/test-suite/load-test-results/tests-1-5/assets/memory-utilization-report-test-1.png`.
4. retrieval/memory/indexing 확인: `examples/web_data_rag_with_llama3/web-data-rag--with-llama3.mdx`, `examples/scrape_and_analyze_airbnb_data_e2b/index.ts`, `apps/ui/ingestion-ui/index.html`.
5. test/eval 파일로 동작 검증: `apps/test-suite/.env.example`, `apps/test-suite/audit-ci.jsonc`, `apps/test-suite/jest.config.js`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 The API to search, scrape, and interact with the web at scale. 🔥. 핵심 구조 신호는 TypeScript, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
