# lemonade-sdk/lemonade

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/lemonade-sdk/lemonade |
| local path | sources/lemonade-sdk__lemonade |
| HEAD | 8e3e0b6 |
| stars/forks | 4507 / 349 |
| language | C++ |
| license |  |
| pushedAt | 2026-06-18T00:16:41Z |
| trendScore / priorityScore | 148 / 461 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 500 | docs/api/README.md, docs/embeddable/README.md, docs/guide/configuration/README.md |
| Developer tools / DX | 446 | examples/README.md, docs/README.md, docs/embeddable/README.md |
| Cloud native / infrastructure | 245 | docs/api/README.md, docs/guide/install/README.md, AGENTS.md |
| AI agent / orchestration | 161 | AGENTS.md, docs/api/mcp.md, docs/guide/cli.md |
| Coding agent / software automation | 156 | README.md, examples/llm-debate.html, docs/api/mcp.md |
| RAG / retrieval / knowledge | 91 | docs/embeddable/README.md, AGENTS.md, examples/llm-debate.html |
| MCP / agent interoperability | 86 | docs/api/README.md, AGENTS.md, .github/workflows/mcp-smoke-test.yml |
| Observability / evaluation | 35 | test/requirements.txt, docs/guide/cli.md, docs/guide/configuration/vllm.md |
| Frontend / app framework | 34 | AGENTS.md, README.md, test/app/app-regression/README.md |
| Data / ML platform | 31 | docs/guide/configuration/vllm.md, docs/news/vllm-rocm.html, examples/multi-model-tester.html |
| Security / supply chain | 26 | docs/guide/configuration/README.md, README.md, docs/guide/cli.md |
| Database / data infrastructure | 1 | docs/integrations/langchain.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 545 |
| manifests | 25 |
| docs | 100 |
| tests | 48 |
| ci/ops | 25 |
| spec artifacts | 4 |
| agent instruction files | 1 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | image gen | 🍋 Lemonade: Refreshingly fast local AI / Getting Started / Supported Platforms / Using the CLI / image gen / speech gen / transcription / Model Library / Supported Configurations / Project Roadmap | 🍋 Lemonade Refreshingly fast local AI <p align="center" <a href="https //discord.gg/5xXzkMu8Zk" <img src="https //img.shields.io/badge/Discord 7289DA?logo=discord&logoColor=white" alt="Discord" / </a <a href="https //github.com/lemonade sdk/lemonade/blob/main/docs/dev/contribute.md" title="Contribution Guide" <img src="https //img.shields.io/badge/PRs welcome brightgreen.svg" alt="PRs Welcome" / </a <a href="https //github.com/lemonade sdk/lemonade/releases/latest" title="Download the latest release" <img src="https //img.shields.io/github/v/release/lemonade sdk/lemonade?include prereleases" alt="Latest Release" / </a <a href="https //tooomm.github.io/github release stats/?username=lemonade |


## Key Files

### Manifests

- examples/README.md
- docs/README.md
- docs/api/README.md
- docs/dev/README.md
- docs/dev/working-groups/README.md
- docs/embeddable/README.md
- docs/guide/configuration/README.md
- docs/guide/install/README.md
- docs/guide/README.md
- docs/integrations/README.md
- AGENTS.md
- README.md
- test/app/app-regression/README.md
- contrib/launchpad-downloads/README.md
- src/cpp/README.md
- test/requirements.txt
- .devcontainer/Dockerfile
- .ubuntu/Dockerfile
- Dockerfile
- contrib/launchpad-downloads/requirements.txt


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- test/requirements.txt
- contrib/launchpad-downloads/requirements.txt
- DESIGN.md


### Agent Instruction Files

- AGENTS.md


## Top Directories

| dir | count |
| --- | --- |
| src | 298 |
| docs | 89 |
| test | 48 |
| .github | 47 |
| contrib | 21 |
| examples | 11 |
| data | 7 |
| .devcontainer | 3 |
| .vscode | 2 |
| tools | 2 |
| .clangd | 1 |
| .dockerignore | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .cpp | 78 |
| .h | 76 |
| .md | 69 |
| .tsx | 49 |
| .py | 45 |
| .yml | 44 |
| .ts | 30 |
| [no-ext] | 26 |
| .json | 20 |
| .html | 17 |
| .css | 11 |
| .cjs | 10 |
| .js | 9 |
| .rs | 9 |
| .in | 8 |
| .txt | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
