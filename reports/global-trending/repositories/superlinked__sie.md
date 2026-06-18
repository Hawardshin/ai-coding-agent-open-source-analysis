# superlinked/sie

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/superlinked/sie |
| local path | sources/superlinked__sie |
| HEAD | 0ab32f3 |
| stars/forks | 2053 / 183 |
| language | Python |
| license |  |
| pushedAt | 2026-06-16T20:49:43Z |
| trendScore / priorityScore | 153 / 464 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| RAG / retrieval / knowledge | 436 | examples/regulatory-rag/README.md, examples/regulatory-rag/server-plugin/README.md, examples/retrieval-ablation/README.md |
| Cloud native / infrastructure | 249 | examples/regulatory-rag/README.md, examples/regulatory-rag/server-plugin/README.md, examples/retrieval-ablation/README.md |
| Developer tools / DX | 175 | examples/regulatory-rag/README.md, examples/regulatory-rag/server-plugin/README.md, examples/retrieval-ablation/README.md |
| Data / ML platform | 146 | examples/regulatory-rag/README.md, examples/regulatory-rag/server-plugin/README.md, examples/retrieval-ablation/README.md |
| Frontend / app framework | 130 | examples/README.md, examples/document-ocr/README.md, examples/sie-hugging-face-mteb-semantic-search/README.md |
| Observability / evaluation | 113 | examples/regulatory-rag/README.md, examples/regulatory-rag/server-plugin/README.md, examples/retrieval-ablation/README.md |
| AI agent / orchestration | 34 | examples/retrieval-ablation/README.md, integrations/README.md, README.md |
| Database / data infrastructure | 34 | examples/sie-hugging-face-mteb-semantic-search/README.md, examples/wine-recommender/README.md, examples/wine-recommender/wine_flavor/README.md |
| Security / supply chain | 29 | examples/regulatory-rag/README.md, examples/README.md, examples/document-ocr/README.md |
| Local LLM / inference | 11 | examples/document-ocr/README.md, integrations/sie_weaviate/weaviate-module-spec/README.md, README.md |
| Coding agent / software automation | 7 | examples/sie-hugging-face-mteb-semantic-search/frontend/src/styles.css, examples/document-ocr/web/public/style.css, examples/ecommerce-product-search/static/index.html |
| MCP / agent interoperability | 1 | pyproject.toml |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1160 |
| manifests | 40 |
| docs | 43 |
| tests | 265 |
| ci/ops | 62 |
| spec artifacts | 9 |
| agent instruction files | 5 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | macOS (Apple Silicon) | About / Quickstart / macOS (Apple Silicon) / Linux, CPU / Linux, NVIDIA GPU / First call to each model downloads weights from Hugging Face (seconds for / these tinies, longer for larger models). After that, calls are warm in ms. / Encode: dense embeddings (all-MiniLM-L6-v2, ~90 MB) / Score: rerank documents by relevance (ms-marco MiniLM, ~80 MB) / [{'item_id': 'item-0', 'score': -7.1,    'rank': 0}, | <div align="center" <picture <source srcset="https //cdn.prod.website files.com/65dce6831bf9f730421e2915/66ef0317ed8616151ee1d451 superlinked logo white.png" media=" prefers color scheme dark " <img width="320" src="https //cdn.prod.website files.com/65dce6831bf9f730421e2915/65dce6831bf9f730421e2929 superlinked logo.svg" alt="Superlinked logo" </picture <h1 SIE Superlinked Inference Engine</h1 <p <strong Open source inference server and production cluster for embeddings, reranking, and extraction.</strong </p <p 85+ models. Three functions. From laptop to Kubernetes. All Apache 2.0.</p <p <a href="https //superlinked.com/docs/" Docs</a <a href="https //superlinked.com/docs/quickstart/" Quick |


## Key Files

### Manifests

- examples/regulatory-rag/README.md
- examples/regulatory-rag/server-plugin/README.md
- examples/retrieval-ablation/README.md
- examples/README.md
- examples/document-ocr/data/samples/README.md
- examples/document-ocr/README.md
- examples/ecommerce-product-search/python/README.md
- examples/ecommerce-product-search/README.md
- examples/ecommerce-product-search/typescript/README.md
- examples/sie-hugging-face-mteb-semantic-search/README.md
- examples/stripe-link-fraud/README.md
- examples/taxonomy-classification/README.md
- examples/wine-recommender/README.md
- examples/wine-recommender/wine_flavor/README.md
- examples/wine-recommender/wine_picture_detection/README.md
- integrations/README.md
- integrations/sie_weaviate/weaviate-module-spec/README.md
- notebooks/README.md
- README.md
- deploy/helm/sie-cluster/README.md


### Spec / Docs / Prompt Artifacts

- examples/ecommerce-product-search/python/requirements.txt
- examples/sie-hugging-face-mteb-semantic-search/backend/requirements.txt
- examples/wine-recommender/requirements.txt
- examples/wine-recommender/wine_picture_detection/requirements.txt
- examples/sie-hugging-face-mteb-semantic-search/backend/app/prompts/__init__.py
- examples/sie-hugging-face-mteb-semantic-search/backend/app/prompts/detailed_description.md
- examples/sie-hugging-face-mteb-semantic-search/backend/app/prompts/loader.py
- examples/sie-hugging-face-mteb-semantic-search/backend/app/prompts/long_description.md
- examples/sie-hugging-face-mteb-semantic-search/backend/app/prompts/short_description.md


### Agent Instruction Files

- examples/sie-hugging-face-mteb-semantic-search/backend/app/prompts/__init__.py
- examples/sie-hugging-face-mteb-semantic-search/backend/app/prompts/detailed_description.md
- examples/sie-hugging-face-mteb-semantic-search/backend/app/prompts/loader.py
- examples/sie-hugging-face-mteb-semantic-search/backend/app/prompts/long_description.md
- examples/sie-hugging-face-mteb-semantic-search/backend/app/prompts/short_description.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 683 |
| examples | 275 |
| integrations | 139 |
| deploy | 51 |
| notebooks | 2 |
| .gitignore | 1 |
| .npmrc | 1 |
| CHANGELOG.md | 1 |
| COMPATIBILITY.md | 1 |
| LICENSE | 1 |
| package.json | 1 |
| pnpm-lock.yaml | 1 |
| pnpm-workspace.yaml | 1 |
| pyproject.toml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 535 |
| .yaml | 176 |
| .rs | 111 |
| .ts | 91 |
| .tsx | 65 |
| .json | 46 |
| .md | 41 |
| [no-ext] | 25 |
| .toml | 18 |
| .svg | 10 |
| .example | 6 |
| .html | 6 |
| .txt | 5 |
| .yml | 5 |
| .css | 4 |
| .js | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
