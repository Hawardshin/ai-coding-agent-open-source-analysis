# neuron-core/neuron-ai

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/neuron-core/neuron-ai |
| local path | sources/neuron-core__neuron-ai |
| HEAD | 3f94684 |
| stars/forks | 1966 / 218 |
| language | PHP |
| license |  |
| pushedAt | 2026-06-15T15:10:57Z |
| trendScore / priorityScore | 153 / 459 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | AGENTS.md, src/Testing/AGENTS.md, src/Agent/AGENTS.md |
| RAG / retrieval / knowledge | 383 | AGENTS.md, src/Chat/AGENTS.md, src/Console/AGENTS.md |
| Observability / evaluation | 283 | AGENTS.md, src/Console/AGENTS.md, src/Evaluation/AGENTS.md |
| MCP / agent interoperability | 102 | AGENTS.md, src/Testing/AGENTS.md, src/Agent/AGENTS.md |
| Database / data infrastructure | 66 | src/Chat/AGENTS.md, src/Evaluation/AGENTS.md, src/MCP/AGENTS.md |
| Data / ML platform | 27 | src/Evaluation/AGENTS.md, examples/agent/summarization.php, tests/Evaluation/OutputDrivers/OutputDriversTest.php |
| Developer tools / DX | 19 | AGENTS.md, src/Console/AGENTS.md, Dockerfile |
| Security / supply chain | 15 | README.md, docker-compose.yml, .github/workflows/tests.yml |
| Cloud native / infrastructure | 14 | src/HttpClient/AGENTS.md, src/RAG/AGENTS.md, README.md |
| Frontend / app framework | 13 | examples/stream-adapters/laravel-endpoint.php, examples/stream-adapters/vercel-ai-sdk.php, skills/neuron-agent-builder/SKILL.md |
| Local LLM / inference | 12 | src/Providers/AGENTS.md, src/RAG/AGENTS.md, README.md |
| Coding agent / software automation | 3 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | PHP |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 753 |
| manifests | 18 |
| docs | 28 |
| tests | 204 |
| ci/ops | 4 |
| spec artifacts | 15 |
| agent instruction files | 15 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Create Full-Featured Agentic Applications in PHP | Create Full-Featured Agentic Applications in PHP / What is Neuron? / Requirements / Official documentation / Guides & Tutorials / Laravel Demo / Symfony Demo / How To / Install / Create an Agent | Create Full Featured Agentic Applications in PHP ! Latest Stable Version https //poser.pugx.org/neuron core/neuron ai/v/stable https //packagist.org/packages/neuron core/neuron ai ! Total Downloads http //poser.pugx.org/neuron core/neuron ai/downloads https //packagist.org/packages/neuron core/neuron ai !IMPORTANT Get early access to new features, exclusive tutorials, and expert tips for building AI agents in PHP. Join a community of PHP developers pioneering the future of AI development. Subscribe to the newsletter https //neuron ai.dev Before moving on, support the Neuron AI community giving a GitHub star ⭐️. Thank you! What is Neuron? Neuron is a PHP framework for creating and orchestrati |


## Key Files

### Manifests

- AGENTS.md
- src/Testing/AGENTS.md
- src/Agent/AGENTS.md
- src/Chat/AGENTS.md
- src/Console/AGENTS.md
- src/Evaluation/AGENTS.md
- src/HttpClient/AGENTS.md
- src/MCP/AGENTS.md
- src/Observability/AGENTS.md
- src/Providers/AGENTS.md
- src/RAG/AGENTS.md
- src/StructuredOutput/AGENTS.md
- src/Tools/AGENTS.md
- src/Workflow/AGENTS.md
- README.md
- CLAUDE.md
- docker-compose.yml
- Dockerfile


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- src/Testing/AGENTS.md
- src/Agent/AGENTS.md
- src/Chat/AGENTS.md
- src/Console/AGENTS.md
- src/Evaluation/AGENTS.md
- src/HttpClient/AGENTS.md
- src/MCP/AGENTS.md
- src/Observability/AGENTS.md
- src/Providers/AGENTS.md
- src/RAG/AGENTS.md
- src/StructuredOutput/AGENTS.md
- src/Tools/AGENTS.md
- src/Workflow/AGENTS.md
- CLAUDE.md


### Agent Instruction Files

- AGENTS.md
- src/Testing/AGENTS.md
- src/Agent/AGENTS.md
- src/Chat/AGENTS.md
- src/Console/AGENTS.md
- src/Evaluation/AGENTS.md
- src/HttpClient/AGENTS.md
- src/MCP/AGENTS.md
- src/Observability/AGENTS.md
- src/Providers/AGENTS.md
- src/RAG/AGENTS.md
- src/StructuredOutput/AGENTS.md
- src/Tools/AGENTS.md
- src/Workflow/AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| src | 505 |
| tests | 204 |
| examples | 11 |
| skills | 8 |
| .github | 5 |
| .dockerignore | 1 |
| .editorconfig | 1 |
| .env.example | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .php-cs-fixer.dist.php | 1 |
| AGENTS.md | 1 |
| bin | 1 |
| CLAUDE.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .php | 698 |
| .md | 28 |
| .stub | 8 |
| [no-ext] | 7 |
| .yml | 4 |
| .json | 2 |
| .txt | 2 |
| .dist | 1 |
| .embeddings | 1 |
| .example | 1 |
| .neon | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
