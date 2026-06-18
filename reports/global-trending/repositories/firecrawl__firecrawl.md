# firecrawl/firecrawl

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/firecrawl/firecrawl |
| local path | sources/firecrawl__firecrawl |
| HEAD | 1448133 |
| stars/forks | 134132 / 7844 |
| language | TypeScript |
| license | AGPL-3.0 |
| pushedAt | 2026-06-17T23:53:37Z |
| trendScore / priorityScore | 180 / 491 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 297 | examples/deep-research-apartment-finder/README.md, examples/gemini-2.5-screenshot-editor/README.md, examples/o3-web-crawler/README.md |
| Cloud native / infrastructure | 179 | examples/kubernetes/cluster-install/README.md, examples/kubernetes/firecrawl-helm/README.md, README.md |
| Database / data infrastructure | 171 | examples/kubernetes/cluster-install/README.md, examples/kubernetes/firecrawl-helm/README.md, apps/redis/README.md |
| AI agent / orchestration | 67 | examples/aginews-ai-newsletter/README.md, examples/openai_swarm_firecrawl/README.md, firecrawl-cli-skills/README.md |
| Security / supply chain | 53 | examples/kubernetes/cluster-install/README.md, examples/kubernetes/firecrawl-helm/README.md, README.md |
| Observability / evaluation | 37 | examples/deepseek-v3-company-researcher/README.md, examples/gemini-2.5-web-extractor/README.md, apps/test-suite/package.json |
| Frontend / app framework | 36 | apps/ui/ingestion-ui/README.md, apps/test-site/package.json, apps/api/package.json |
| MCP / agent interoperability | 12 | README.md |
| Local LLM / inference | 7 | examples/web_data_rag_with_llama3/web-data-rag--with-llama3.mdx, apps/api/package.json |
| RAG / retrieval / knowledge | 6 | examples/gpt-4.1-web-crawler/README.md, examples/contradiction_testing/web-data-contradiction-testing-using-llms.mdx, examples/web_data_rag_with_llama3/web-data-rag--with-llama3.mdx |
| Coding agent / software automation | 4 | README.md, apps/rust-sdk/README.md |
| Data / ML platform | 1 | apps/js-sdk/firecrawl/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin, .NET |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1447 |
| manifests | 40 |
| docs | 82 |
| tests | 265 |
| ci/ops | 69 |
| spec artifacts | 21 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | **🔥 Firecrawl** | **🔥 Firecrawl** / Why Firecrawl? / Feature Overview / Quick Start / Search / Scrape / Firecrawl / Features / Interact / 1. Scrape the page | <h3 align="center" <a name="readme top" </a <img src="https //raw.githubusercontent.com/firecrawl/firecrawl/main/img/firecrawl logo.png" height="200" </h3 <div align="center" <a href="https //github.com/firecrawl/firecrawl/blob/main/LICENSE" <img src="https //img.shields.io/github/license/firecrawl/firecrawl" alt="License" </a <a href="https //pepy.tech/project/firecrawl py" <img src="https //static.pepy.tech/badge/firecrawl py" alt="Downloads" </a <a href="https //GitHub.com/firecrawl/firecrawl/graphs/contributors" <img src="https //img.shields.io/github/contributors/firecrawl/firecrawl.svg" alt="GitHub Contributors" </a <a href="https //firecrawl.dev" <img src="https //img.shields.io/badge |


## Key Files

### Manifests

- examples/kubernetes/cluster-install/README.md
- examples/kubernetes/firecrawl-helm/README.md
- examples/aginews-ai-newsletter/README.md
- examples/ai-podcast-generator/README.md
- examples/deep-research-apartment-finder/README.md
- examples/deepseek-v3-company-researcher/README.md
- examples/deepseek-v3-crawler/README.md
- examples/full_example_apps/README.md
- examples/gemini-2.5-crawler/README.md
- examples/gemini-2.5-screenshot-editor/README.md
- examples/gemini-2.5-web-extractor/README.md
- examples/gpt-4.1-company-researcher/README.md
- examples/gpt-4.1-web-crawler/README.md
- examples/llama-4-maverick-web-crawler/README.md
- examples/llama-4-maverick-web-extractor/README.md
- examples/o3-web-crawler/README.md
- examples/o4-mini-web-crawler/README.md
- examples/openai_swarm_firecrawl/README.md
- examples/openai-realtime-firecrawl/README.md
- examples/scrape_and_analyze_airbnb_data_e2b/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- examples/deep-research-apartment-finder/requirements.txt
- examples/deepseek-v3-company-researcher/requirements.txt
- examples/deepseek-v3-crawler/requirements.txt
- examples/gemini-2.5-crawler/requirements.txt
- examples/gemini-2.5-screenshot-editor/requirements.txt
- examples/gemini-2.5-web-extractor/requirements.txt
- examples/gpt-4.1-company-researcher/requirements.txt
- examples/gpt-4.1-web-crawler/requirements.txt
- examples/groq_web_crawler/requirements.txt
- examples/hacker_news_scraper/requirements.txt
- examples/llama-4-maverick-web-crawler/requirements.txt
- examples/llama-4-maverick-web-extractor/requirements.txt
- examples/o3-web-crawler/requirements.txt
- examples/o4-mini-web-crawler/requirements.txt
- examples/openai_swarm_firecrawl_web_extractor/requirements.txt
- examples/openai_swarm_firecrawl/requirements.txt
- examples/sales_web_crawler/requirements.txt
- .github/scripts/requirements.txt


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| apps | 1217 |
| examples | 170 |
| .github | 44 |
| .pnpm-store | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .gitmodules | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |
| CONTRIBUTING.md | 1 |
| docker-compose.yaml | 1 |
| firecrawl-cli | 1 |
| firecrawl-cli-skills | 1 |
| firecrawl-skills | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 642 |
| .py | 165 |
| .md | 79 |
| .java | 62 |
| [no-ext] | 62 |
| .php | 48 |
| .yaml | 40 |
| .yml | 37 |
| .cs | 36 |
| .rs | 35 |
| .json | 31 |
| .rb | 29 |
| .example | 19 |
| .txt | 19 |
| .go | 16 |
| .astro | 14 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
