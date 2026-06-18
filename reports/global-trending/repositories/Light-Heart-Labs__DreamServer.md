# Light-Heart-Labs/DreamServer

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Light-Heart-Labs/DreamServer |
| local path | sources/Light-Heart-Labs__DreamServer |
| HEAD | f23c5a3 |
| stars/forks | 2079 / 319 |
| language | Shell |
| license |  |
| pushedAt | 2026-06-16T18:06:27Z |
| trendScore / priorityScore | 154 / 465 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Cloud native / infrastructure | 424 | dream-server/docs/README.md, dream-server/agents/templates/README.md, dream-server/extensions/services/embeddings/README.md |
| AI agent / orchestration | 236 | dream-server/docs/README.md, dream-server/agents/templates/README.md, dream-server/memory-shepherd/README.md |
| Local LLM / inference | 152 | dream-server/docs/README.md, dream-server/extensions/library/services/anythingllm/README.md, dream-server/extensions/services/litellm/README.md |
| Security / supply chain | 117 | dream-server/docs/README.md, dream-server/agents/templates/README.md, dream-server/extensions/library/services/anythingllm/README.md |
| Developer tools / DX | 88 | dream-server/docs/README.md, dream-server/extensions/services/litellm/README.md, dream-server/README.md |
| Observability / evaluation | 77 | dream-server/extensions/services/embeddings/README.md, dream-server/README.md, README.md |
| Database / data infrastructure | 73 | dream-server/extensions/library/services/anythingllm/README.md, dream-server/extensions/services/litellm/README.md, dream-server/README.md |
| Frontend / app framework | 60 | dream-server/extensions/library/README.md, dream-server/extensions/library/services/dify/README.md, dream-server/extensions/services/dashboard-api/README.md |
| Coding agent / software automation | 50 | dream-server/docs/README.md, dream-server/README.md, README.md |
| RAG / retrieval / knowledge | 43 | dream-server/extensions/library/services/anythingllm/README.md, dream-server/extensions/services/embeddings/README.md, dream-server/README.md |
| Data / ML platform | 23 | dream-server/extensions/services/embeddings/README.md, README.md, dream-server/extensions/library/README.md |
| MCP / agent interoperability | 1 | dream-server/extensions/library/services/gaia/README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1123 |
| manifests | 40 |
| docs | 175 |
| tests | 274 |
| ci/ops | 101 |
| spec artifacts | 9 |
| agent instruction files | 4 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Dream Server | Dream Server / Get Started / At A Glance / Why Dream Server? / What's In The Box / Chat & Inference / Voice / Agents & Automation / Knowledge & Search / Creative | <div align="center" Dream Server Turn your PC, Mac, or Linux box into a private AI server. AI server and homelab setup is rapidly becoming a solved problem. It should feel that way for everyone. ! License Apache 2.0 https //img.shields.io/badge/License Apache%202.0 blue.svg LICENSE ! GitHub Stars https //img.shields.io/github/stars/Light Heart Labs/DreamServer https //github.com/Light Heart Labs/DreamServer/stargazers ! Release https //img.shields.io/github/v/release/Light Heart Labs/DreamServer https //github.com/Light Heart Labs/DreamServer/releases ! Watch the demo https //img.shields.io/badge/Demo Watch%20on%20YouTube red?logo=youtube https //youtu.be/nO8xFNHX HA </div Dream Server insta |


## Key Files

### Manifests

- dream-server/docs/README.md
- dream-server/agents/templates/README.md
- dream-server/extensions/library/services/anythingllm/README.md
- dream-server/extensions/services/embeddings/README.md
- dream-server/extensions/services/litellm/README.md
- dream-server/memory-shepherd/README.md
- dream-server/README.md
- README.md
- dream-server/config/system-tuning/README.md
- dream-server/extensions/library/README.md
- dream-server/extensions/library/services/aider/README.md
- dream-server/extensions/library/services/audiocraft/README.md
- dream-server/extensions/library/services/bark/README.md
- dream-server/extensions/library/services/baserow/README.md
- dream-server/extensions/library/services/chromadb/README.md
- dream-server/extensions/library/services/continue/README.md
- dream-server/extensions/library/services/crewai/README.md
- dream-server/extensions/library/services/dify/README.md
- dream-server/extensions/library/services/flowise/README.md
- dream-server/extensions/library/services/fooocus/README.md


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- .github/prompts/issue-to-pr.md
- .github/prompts/nightly-code-review.md
- .github/prompts/nightly-docs-update.md
- dream-server/extensions/services/ape/requirements.txt
- dream-server/extensions/services/dashboard-api/requirements.txt
- dream-server/extensions/services/privacy-shield/requirements.txt
- dream-server/extensions/services/token-spy/requirements.txt
- ARCHITECTURE.md


### Agent Instruction Files

- CLAUDE.md
- .github/prompts/issue-to-pr.md
- .github/prompts/nightly-code-review.md
- .github/prompts/nightly-docs-update.md


## Top Directories

| dir | count |
| --- | --- |
| dream-server | 1032 |
| installer | 41 |
| .github | 35 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .gitleaks.toml | 1 |
| .gitleaksignore | 1 |
| .pre-commit-config.yaml | 1 |
| ARCHITECTURE.md | 1 |
| CLAUDE.md | 1 |
| CONTRIBUTING.md | 1 |
| CONTRIBUTORS.md | 1 |
| install.ps1 | 1 |
| install.sh | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .sh | 257 |
| .md | 175 |
| .yaml | 173 |
| .py | 137 |
| .json | 90 |
| .jsx | 43 |
| .yml | 41 |
| .bats | 32 |
| .js | 31 |
| [no-ext] | 30 |
| .ps1 | 24 |
| .txt | 18 |
| .tsx | 12 |
| .rs | 11 |
| .service | 7 |
| .conf | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
