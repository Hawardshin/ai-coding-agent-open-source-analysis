# firecrawl/firecrawl Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

The API to search, scrape, and interact with the web at scale. 🔥

## 요약

- 조사 단위: `sources/firecrawl__firecrawl` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 1,512 files, 322 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=apps/test-site/src/content/blog/launch-week-iii-day-6-firecrawl-mcp.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | firecrawl/firecrawl |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 134132 |
| Forks | 7844 |
| License | AGPL-3.0 |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/firecrawl__firecrawl](../../../../sources/firecrawl__firecrawl) |
| Existing report | [reports/global-trending/repositories/firecrawl__firecrawl.md](../../../global-trending/repositories/firecrawl__firecrawl.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 1512 / 322 |
| Max observed depth | 10 |
| Top directories | .github, apps, examples, firecrawl-cli, firecrawl-cli-skills, firecrawl-skills, firecrawl-workflows, img |
| Top extensions | .ts: 642, .py: 165, .md: 79, .java: 62, (none): 61, .php: 48, .png: 47, .yaml: 40, .yml: 37, .cs: 36, .rs: 35, .json: 31 |
| Source patterns | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
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


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 395 | [apps/test-suite/.env.example](../../../../sources/firecrawl__firecrawl/apps/test-suite/.env.example)<br>[apps/test-suite/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/test-suite/audit-ci.jsonc)<br>[apps/test-suite/jest.config.js](../../../../sources/firecrawl__firecrawl/apps/test-suite/jest.config.js)<br>[apps/test-suite/jest.setup.js](../../../../sources/firecrawl__firecrawl/apps/test-suite/jest.setup.js)<br>[apps/test-suite/load-test.yml](../../../../sources/firecrawl__firecrawl/apps/test-suite/load-test.yml)<br>[apps/test-suite/package.json](../../../../sources/firecrawl__firecrawl/apps/test-suite/package.json) |
| CI workflows | 30 | [.github/workflows/deploy-go-service.yaml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-go-service.yaml)<br>[.github/workflows/deploy-image-staging.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-image-staging.yml)<br>[.github/workflows/deploy-image.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-image.yml)<br>[.github/workflows/deploy-nuq-postgres.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-nuq-postgres.yml)<br>[.github/workflows/deploy-playwright.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-playwright.yml)<br>[.github/workflows/deploy-redis.yml](../../../../sources/firecrawl__firecrawl/.github/workflows/deploy-redis.yml) |
| Containers / deploy | 39 | [docker-compose.yaml](../../../../sources/firecrawl__firecrawl/docker-compose.yaml)<br>[examples/kubernetes/firecrawl-helm/.helmignore](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/.helmignore)<br>[examples/kubernetes/firecrawl-helm/Chart.yaml](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/Chart.yaml)<br>[examples/kubernetes/firecrawl-helm/README.md](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/README.md)<br>[examples/kubernetes/firecrawl-helm/values.yaml](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/values.yaml)<br>[examples/kubernetes/firecrawl-helm/templates/_helpers.tpl](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/templates/_helpers.tpl) |
| Security / policy | 19 | [examples/kubernetes/firecrawl-helm/templates/secret.yaml](../../../../sources/firecrawl__firecrawl/examples/kubernetes/firecrawl-helm/templates/secret.yaml)<br>[examples/kubernetes/cluster-install/secret.yaml](../../../../sources/firecrawl__firecrawl/examples/kubernetes/cluster-install/secret.yaml)<br>[apps/ui/ingestion-ui/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/ui/ingestion-ui/audit-ci.jsonc)<br>[apps/test-suite/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/test-suite/audit-ci.jsonc)<br>[apps/test-site/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/test-site/audit-ci.jsonc)<br>[apps/playwright-service-ts/audit-ci.jsonc](../../../../sources/firecrawl__firecrawl/apps/playwright-service-ts/audit-ci.jsonc) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/firecrawl__firecrawl/AGENTS.md)<br>[CLAUDE.md](../../../../sources/firecrawl__firecrawl/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `apps/test-site/src/content/blog/launch-week-iii-day-6-firecrawl-mcp.md`, `AGENTS.md`, `examples/blog-articles/deploying_web_scrapers/deploying-web-scrapers-images/workflow.png`.
2. Trace execution through entrypoints: `examples/openai_swarm_firecrawl_web_extractor/main.py`, `examples/openai_swarm_firecrawl/main.py`, `apps/ui/ingestion-ui/src/App.tsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `examples/blog-articles/deploying_web_scrapers/deploying-web-scrapers-images/workflow.png`, `apps/test-suite/load-test-results/tests-1-5/assets/memory-utilization-report-test-1.png`.
4. Inspect retrieval/memory/indexing through: `examples/web_data_rag_with_llama3/web-data-rag--with-llama3.mdx`, `examples/scrape_and_analyze_airbnb_data_e2b/index.ts`, `apps/ui/ingestion-ui/index.html`.
5. Verify behavior through test/eval files: `apps/test-suite/.env.example`, `apps/test-suite/audit-ci.jsonc`, `apps/test-suite/jest.config.js`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 The API to search, scrape, and interact with the web at scale. 🔥. 핵심 구조 신호는 TypeScript, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
