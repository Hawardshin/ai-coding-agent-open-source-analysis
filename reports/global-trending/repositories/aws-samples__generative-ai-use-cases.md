# aws-samples/generative-ai-use-cases

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/aws-samples/generative-ai-use-cases |
| local path | sources/aws-samples__generative-ai-use-cases |
| HEAD | abe7375 |
| stars/forks | 1354 / 431 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T09:51:42Z |
| trendScore / priorityScore | 133 / 416 |


## Interpretation

- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 209 | README.md, packages/cdk/lambda-python/generic-agent-core-runtime/docker-compose.yml, packages/cdk/lambda-python/generic-agent-core-runtime/pyproject.toml |
| RAG / retrieval / knowledge | 139 | README.md, packages/web/src/prompts/claude.ts, docs/en/DEPLOY_OPTION.md |
| Frontend / app framework | 130 | browser-extension/package.json, browser-extension/tsconfig.json, browser-extension/vite.config.ts |
| Developer tools / DX | 106 | README.md, packages/cdk/lambda-python/generic-agent-core-runtime/Dockerfile, packages/cdk/lambda-python/research-agent-core-runtime/Dockerfile |
| MCP / agent interoperability | 103 | README.md, packages/cdk/lambda-python/generic-agent-core-runtime/docker-compose.yml, packages/cdk/lambda-python/generic-agent-core-runtime/Dockerfile |
| Cloud native / infrastructure | 87 | packages/cdk/lambda-python/generic-agent-core-runtime/Dockerfile, packages/cdk/lambda-python/research-agent-core-runtime/Dockerfile, packages/cdk/mcp-api/Dockerfile |
| Database / data infrastructure | 72 | packages/web/public/locales/prompts/en.yaml, packages/web/public/locales/prompts/ja.yaml, packages/web/public/locales/prompts/ko.yaml |
| Security / supply chain | 54 | README.md, browser-extension/package.json, packages/cdk/custom-resources/opensearch-index/package.json |
| Data / ML platform | 17 | browser-extension/README.md, README.md, packages/web/public/locales/prompts/en.yaml |
| Observability / evaluation | 13 | packages/cdk/lambda-python/generic-agent-core-runtime/Dockerfile, packages/cdk/lambda-python/generic-agent-core-runtime/pyproject.toml, packages/cdk/lambda-python/research-agent-core-runtime/Dockerfile |
| Local LLM / inference | 5 | docs/en/DEPLOY_OPTION.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 808 |
| manifests | 34 |
| docs | 89 |
| tests | 22 |
| ci/ops | 19 |
| spec artifacts | 37 |
| agent instruction files | 33 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Normal deployment | GenU Usage Patterns / Deployment / Normal deployment / Fast deployment (quickly deploy without pre-checking created resources) / Architecture / Other Information / Cost Estimation / Customer Case Studies / References / Security | <div markdown="1" align="center" <h1 Generative AI Use Cases GenU </h1 ! https //img.shields.io/badge/Documentation Latest blue https //aws samples.github.io/generative ai use cases/index.html ! https //img.shields.io/badge/license MIT blue.svg https //github.com/aws samples/generative ai use cases/blob/main/LICENSE ! https //github.com/aws samples/generative ai use cases/actions/workflows/node.js.yml/badge.svg https //github.com/aws samples/generative ai use cases/actions/workflows/node.js.yml ! https //github.com/aws samples/generative ai use cases/actions/workflows/browser extension.yml/badge.svg https //github.com/aws samples/generative ai use cases/actions/workflows/browser extension.ym |


## Key Files

### Manifests

- docs/assets/images/README.md
- browser-extension/README.md
- README.md
- packages/cdk/lambda-python/generic-agent-core-runtime/docker-compose.yml
- packages/cdk/lambda-python/generic-agent-core-runtime/Dockerfile
- packages/cdk/lambda-python/generic-agent-core-runtime/pyproject.toml
- packages/cdk/lambda-python/research-agent-core-runtime/docker-compose.yml
- packages/cdk/lambda-python/research-agent-core-runtime/Dockerfile
- packages/cdk/lambda-python/research-agent-core-runtime/pyproject.toml
- packages/cdk/mcp-api/Dockerfile
- packages/cdk/mcp-api/pyproject.toml
- browser-extension/package.json
- browser-extension/tsconfig.json
- browser-extension/vite.config.ts
- package.json
- requirements.txt
- packages/cdk/custom-resources/apply-tags/package.json
- packages/cdk/custom-resources/opensearch-index/package.json
- packages/cdk/fargate-s3-server/Dockerfile
- packages/cdk/fargate-s3-server/package.json


### Spec / Docs / Prompt Artifacts

- packages/web/src/prompts/useCaseBuilderSamples.tsx
- requirements.txt
- packages/cdk/lambda-python/research-agent-core-runtime/prompts/general-research.md
- packages/cdk/lambda-python/research-agent-core-runtime/prompts/mini-research.md
- packages/cdk/lambda-python/research-agent-core-runtime/prompts/technical-research.md
- packages/web/public/locales/prompts/en.yaml
- packages/web/public/locales/prompts/ja.yaml
- packages/web/public/locales/prompts/ko.yaml
- packages/web/public/locales/prompts/th.yaml
- packages/web/public/locales/prompts/vi.yaml
- packages/web/public/locales/prompts/zh.yaml
- packages/web/src/prompts/agentSystemPromptGenerator.ts
- packages/web/src/prompts/claude.ts
- packages/web/src/prompts/diagrams/architecture.ts
- packages/web/src/prompts/diagrams/block-diagram.ts
- packages/web/src/prompts/diagrams/class-diagram.ts
- packages/web/src/prompts/diagrams/er-diagram.ts
- packages/web/src/prompts/diagrams/flow-chart.ts
- packages/web/src/prompts/diagrams/gantt-chart.ts
- packages/web/src/prompts/diagrams/git-graph.ts


### Agent Instruction Files

- packages/web/src/prompts/useCaseBuilderSamples.tsx
- packages/cdk/lambda-python/research-agent-core-runtime/prompts/general-research.md
- packages/cdk/lambda-python/research-agent-core-runtime/prompts/mini-research.md
- packages/cdk/lambda-python/research-agent-core-runtime/prompts/technical-research.md
- packages/web/public/locales/prompts/en.yaml
- packages/web/public/locales/prompts/ja.yaml
- packages/web/public/locales/prompts/ko.yaml
- packages/web/public/locales/prompts/th.yaml
- packages/web/public/locales/prompts/vi.yaml
- packages/web/public/locales/prompts/zh.yaml
- packages/web/src/prompts/agentSystemPromptGenerator.ts
- packages/web/src/prompts/claude.ts
- packages/web/src/prompts/diagrams/architecture.ts
- packages/web/src/prompts/diagrams/block-diagram.ts
- packages/web/src/prompts/diagrams/class-diagram.ts


## Top Directories

| dir | count |
| --- | --- |
| packages | 628 |
| browser-extension | 73 |
| docs | 66 |
| .github | 14 |
| .kiro | 3 |
| .vscode | 2 |
| scripts | 2 |
| .gitignore | 1 |
| .husky | 1 |
| .npmrc | 1 |
| .prettierignore | 1 |
| .prettierrc.json | 1 |
| CODE_OF_CONDUCT.md | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 349 |
| .tsx | 176 |
| .md | 78 |
| .geojson | 49 |
| .json | 37 |
| [no-ext] | 26 |
| .py | 17 |
| .yml | 15 |
| .yaml | 12 |
| .js | 10 |
| .svg | 10 |
| .html | 8 |
| .sh | 5 |
| .cjs | 4 |
| .css | 4 |
| .toml | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
