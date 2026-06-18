# topoteretes/cognee

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/topoteretes/cognee |
| local path | sources/topoteretes__cognee |
| HEAD | 1000441 |
| stars/forks | 17885 / 1896 |
| language | Python |
| license |  |
| pushedAt | 2026-06-17T22:04:52Z |
| trendScore / priorityScore | 170 / 494 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Database / data infrastructure | 267 | examples/README.md, cognee-mcp/README.md, AGENTS.md |
| MCP / agent interoperability | 148 | cognee-mcp/README.md, AGENTS.md, cognee-mcp/Dockerfile |
| RAG / retrieval / knowledge | 144 | examples/README.md, examples/pocs/disambiguation/README.md, cognee-mcp/README.md |
| Cloud native / infrastructure | 127 | examples/README.md, cognee-mcp/README.md, AGENTS.md |
| Data / ML platform | 115 | examples/README.md, examples/pocs/disambiguation/README.md, cognee-mcp/README.md |
| Developer tools / DX | 98 | examples/README.md, cognee-mcp/README.md, evals/README.md |
| Frontend / app framework | 81 | cognee-frontend/README.md, AGENTS.md, distributed/deploy/README.md |
| AI agent / orchestration | 55 | examples/README.md, cognee-mcp/README.md, cognee/tasks/codingagents/README.md |
| Observability / evaluation | 49 | cognee-mcp/README.md, evals/README.md, evals/old/comparative_eval/README.md |
| Coding agent / software automation | 29 | cognee-mcp/README.md, README.md, CLAUDE.md |
| Security / supply chain | 21 | cognee/tasks/web_scraper/README.md, distributed/deploy/README.md, CLAUDE.md |
| Local LLM / inference | 20 | examples/README.md, cognee-mcp/README.md, cognee/tests/tasks/translation/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2242 |
| manifests | 37 |
| docs | 72 |
| tests | 355 |
| ci/ops | 64 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Install cognee | About Cognee / Why use Cognee: / Product Features / Basic Usage & Feature Guide / Quickstart / Prerequisites / Step 1: Install Cognee / Step 2: Configure the LLM / Step 3: Run the Pipeline / Use the Cognee CLI | <div align="center" <a href="https //github.com/topoteretes/cognee" <img src="https //raw.githubusercontent.com/topoteretes/cognee/refs/heads/dev/assets/cognee logo transparent.png" alt="Cognee Logo" height="60" </a <br / Cognee The Open Source AI Memory Platform for Agents <p align="center" <a href="https //www.youtube.com/watch?v=8hmqS2Y5RVQ&t=13s" Demo</a . <a href="https //docs.cognee.ai/" Docs</a . <a href="https //cognee.ai" Learn More</a · <a href="https //discord.gg/NQPKmU5CCg" Join Discord</a · <a href="https //www.reddit.com/r/AIMemory/" Join r/AIMemory</a . <a href="https //github.com/topoteretes/cognee community" Community Plugins & Add ons</a </p ! GitHub forks https //img.shiel |


## Key Files

### Manifests

- examples/README.md
- examples/pocs/disambiguation/README.md
- cognee-frontend/README.md
- cognee-mcp/README.md
- evals/README.md
- cognee/tasks/codingagents/README.md
- evals/old/comparative_eval/README.md
- AGENTS.md
- cognee-starter-kit/README.md
- cognee/tests/tasks/translation/README.md
- licenses/README.md
- logs/README.md
- README.md
- cognee/tasks/summarization/README.md
- cognee/tasks/web_scraper/README.md
- deployment/helm/README.md
- distributed/deploy/README.md
- CLAUDE.md
- cognee-frontend/Dockerfile
- cognee-frontend/next.config.mjs


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- evals/requirements.txt
- cognee/infrastructure/llm/prompts/test.txt
- examples/pocs/disambiguation/prompts/prompt1.txt
- examples/pocs/post_extraction_canonicalization/prompts/prompt1.txt
- examples/pocs/post_extraction_canonicalization/prompts/prompt2.txt
- examples/pocs/prefetch_disambiguation/prompts/prompt1.txt
- examples/pocs/prefetch_disambiguation/prompts/prompt2.txt
- examples/pocs/prefetch_disambiguation/prompts/prompt3.txt
- cognee-frontend/src/app/(app)/prompts/[id]/page.tsx
- cognee-frontend/src/app/(app)/prompts/[id]/PromptEditorPage.tsx
- cognee-frontend/src/app/(app)/prompts/page.tsx
- cognee-frontend/src/app/(app)/prompts/PromptsListPage.tsx
- cognee-frontend/src/modules/prompts/storage.ts
- cognee/eval_framework/benchmark_adapters/logistics_system_utils/prompts/narrativization.txt
- cognee/eval_framework/benchmark_adapters/logistics_system_utils/prompts/package_narrativization.txt
- cognee/infrastructure/llm/prompts/__init__.py
- cognee/infrastructure/llm/prompts/agent_trace_feedback_summary_system.txt
- cognee/infrastructure/llm/prompts/agentic_system.txt


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- cognee/infrastructure/llm/prompts/test.txt
- examples/pocs/disambiguation/prompts/prompt1.txt
- examples/pocs/post_extraction_canonicalization/prompts/prompt1.txt
- examples/pocs/post_extraction_canonicalization/prompts/prompt2.txt
- examples/pocs/prefetch_disambiguation/prompts/prompt1.txt
- examples/pocs/prefetch_disambiguation/prompts/prompt2.txt
- examples/pocs/prefetch_disambiguation/prompts/prompt3.txt
- cognee-frontend/src/app/(app)/prompts/[id]/page.tsx
- cognee-frontend/src/app/(app)/prompts/[id]/PromptEditorPage.tsx
- cognee-frontend/src/app/(app)/prompts/page.tsx
- cognee-frontend/src/app/(app)/prompts/PromptsListPage.tsx
- cognee-frontend/src/modules/prompts/storage.ts
- cognee/eval_framework/benchmark_adapters/logistics_system_utils/prompts/narrativization.txt


## Top Directories

| dir | count |
| --- | --- |
| cognee | 1553 |
| cognee-frontend | 294 |
| examples | 114 |
| evals | 77 |
| .github | 59 |
| distributed | 27 |
| cognee-mcp | 24 |
| notebooks | 13 |
| deployment | 12 |
| tools | 10 |
| cognee-starter-kit | 9 |
| cognee_db_workers | 8 |
| assets | 5 |
| bin | 2 |


## Extension Distribution

| ext | count |
| --- | --- |
| .py | 1577 |
| .tsx | 157 |
| .txt | 101 |
| .ts | 80 |
| .json | 68 |
| .md | 57 |
| .yml | 54 |
| .svg | 29 |
| [no-ext] | 22 |
| .yaml | 14 |
| .sh | 9 |
| .owl | 7 |
| .toml | 7 |
| .css | 6 |
| .ipynb | 6 |
| .mp4 | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
