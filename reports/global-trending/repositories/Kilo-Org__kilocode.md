# Kilo-Org/kilocode

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Kilo-Org/kilocode |
| local path | sources/Kilo-Org__kilocode |
| HEAD | 5637375 |
| stars/forks | 21173 / 2674 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:26:33Z |
| trendScore / priorityScore | 154 / 461 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 500 | AGENTS.md, packages/kilo-jetbrains/AGENTS.md, packages/kilo-vscode/AGENTS.md |
| AI agent / orchestration | 405 | packages/llm/README.md, AGENTS.md, packages/kilo-jetbrains/AGENTS.md |
| Coding agent / software automation | 377 | packages/llm/README.md, AGENTS.md, packages/opencode/test/AGENTS.md |
| Frontend / app framework | 116 | AGENTS.md, packages/kilo-docs/AGENTS.md, packages/kilo-jetbrains/AGENTS.md |
| MCP / agent interoperability | 95 | packages/llm/README.md, AGENTS.md, packages/kilo-jetbrains/AGENTS.md |
| Cloud native / infrastructure | 64 | AGENTS.md, packages/kilo-jetbrains/AGENTS.md, packages/kilo-vscode/AGENTS.md |
| Security / supply chain | 38 | github/README.md, packages/http-recorder/README.md, packages/opencode/src/acp/README.md |
| Observability / evaluation | 23 | AGENTS.md, packages/kilo-vscode/AGENTS.md, packages/kilo-jetbrains/README.md |
| RAG / retrieval / knowledge | 9 | packages/kilo-docs/pages/ai-providers/gemini.md, packages/kilo-docs/docs/getting-started/switching-from-cline.md, packages/kilo-indexing/package.json |
| Database / data infrastructure | 8 | AGENTS.md, packages/opencode/test/server/AGENTS.md, packages/kilo-vscode/AGENTS.md |
| Data / ML platform | 3 | packages/llm/AGENTS.md, packages/llm/example/tutorial.ts, packages/opencode/src/session/prompt/beast.txt |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin, PHP |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 6298 |
| manifests | 40 |
| docs | 447 |
| tests | 1107 |
| ci/ops | 51 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | npm | Quick Links / Key Features / Get Started in Visual Studio Code / Get Started with the CLI / npm / Or run directly with npx / npm Install Note: Hidden `.kilo` File / Install from GitHub Releases (Optional) / Autonomous Mode (CI/CD) / Contributing | <p align="center" <a href="https //marketplace.visualstudio.com/items?itemName=kilocode.Kilo Code" <img src="https //raster.shields.io/badge/VS Code Marketplace 007ACC?style=flat&logo=visualstudiocode&logoColor=white" alt="VS Code Marketplace" height="20" </a <a href="https //x.com/kilocode" <img src="https //raster.shields.io/badge/kilocode 000000?style=flat&logo=x&logoColor=white" alt="X Twitter " height="20" </a <a href="https //blog.kilo.ai" <img src="https //raster.shields.io/badge/Blog 555?style=flat&logo=substack&logoColor=white" alt="Substack Blog" height="20" </a <a href="https //kilo.ai/discord" <img src="https //raster.shields.io/badge/Join%20Discord 5865F2?style=flat&logo=discord |


## Key Files

### Manifests

- packages/llm/README.md
- AGENTS.md
- packages/opencode/test/AGENTS.md
- packages/opencode/test/server/AGENTS.md
- packages/kilo-docs/AGENTS.md
- packages/kilo-jetbrains/AGENTS.md
- packages/kilo-vscode/AGENTS.md
- packages/llm/AGENTS.md
- packages/opencode/AGENTS.md
- packages/opencode/src/server/routes/instance/httpapi/AGENTS.md
- .changeset/README.md
- github/README.md
- README.md
- .opencode/glossary/README.md
- packages/containers/README.md
- packages/core/src/github-copilot/README.md
- packages/http-recorder/README.md
- packages/kilo-gateway/README.md
- packages/kilo-jetbrains/README.md
- packages/kilo-vscode/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- packages/opencode/test/AGENTS.md
- packages/opencode/test/server/AGENTS.md
- packages/kilo-docs/AGENTS.md
- packages/kilo-jetbrains/AGENTS.md
- packages/kilo-vscode/AGENTS.md
- packages/llm/AGENTS.md
- packages/opencode/AGENTS.md
- packages/opencode/src/server/routes/instance/httpapi/AGENTS.md
- packages/kilo-docs/pages/ai-providers/gemini.md
- packages/kilo-jetbrains/frontend/src/main/kotlin/ai/kilocode/client/session/ui/prompt/PromptDataKeys.kt
- packages/kilo-jetbrains/frontend/src/main/kotlin/ai/kilocode/client/session/ui/prompt/PromptEditorTextField.kt
- packages/kilo-jetbrains/frontend/src/main/kotlin/ai/kilocode/client/session/ui/prompt/PromptPanel.kt
- packages/kilo-jetbrains/frontend/src/main/kotlin/ai/kilocode/client/session/ui/prompt/SendPromptContext.kt
- packages/opencode/src/agent/prompt/ask.txt
- packages/opencode/src/agent/prompt/compaction.txt
- packages/opencode/src/agent/prompt/debug.txt
- packages/opencode/src/agent/prompt/explore.txt
- packages/opencode/src/agent/prompt/orchestrator.txt
- packages/opencode/src/agent/prompt/scout.txt


### Agent Instruction Files

- AGENTS.md
- packages/opencode/test/AGENTS.md
- packages/opencode/test/server/AGENTS.md
- packages/kilo-docs/AGENTS.md
- packages/kilo-jetbrains/AGENTS.md
- packages/kilo-vscode/AGENTS.md
- packages/llm/AGENTS.md
- packages/opencode/AGENTS.md
- packages/opencode/src/server/routes/instance/httpapi/AGENTS.md
- packages/kilo-docs/pages/ai-providers/gemini.md
- packages/kilo-jetbrains/frontend/src/main/kotlin/ai/kilocode/client/session/ui/prompt/PromptDataKeys.kt
- packages/kilo-jetbrains/frontend/src/main/kotlin/ai/kilocode/client/session/ui/prompt/PromptEditorTextField.kt
- packages/kilo-jetbrains/frontend/src/main/kotlin/ai/kilocode/client/session/ui/prompt/PromptPanel.kt
- packages/kilo-jetbrains/frontend/src/main/kotlin/ai/kilocode/client/session/ui/prompt/SendPromptContext.kt
- packages/opencode/src/agent/prompt/ask.txt


## Top Directories

| dir | count |
| --- | --- |
| packages | 6053 |
| script | 71 |
| .github | 53 |
| .opencode | 40 |
| .kilo | 19 |
| patches | 7 |
| .changeset | 6 |
| nix | 5 |
| specs | 5 |
| .vscode | 4 |
| github | 4 |
| bin | 2 |
| .editorconfig | 1 |
| .envrc | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 2718 |
| .svg | 1302 |
| .tsx | 703 |
| .md | 421 |
| .kt | 356 |
| .json | 198 |
| .css | 164 |
| .txt | 56 |
| .scm | 52 |
| .aac | 45 |
| .mp3 | 45 |
| [no-ext] | 44 |
| .yml | 41 |
| .sql | 22 |
| .properties | 21 |
| .py | 16 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
