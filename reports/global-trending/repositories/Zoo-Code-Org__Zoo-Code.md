# Zoo-Code-Org/Zoo-Code

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/Zoo-Code-Org/Zoo-Code |
| local path | sources/Zoo-Code-Org__Zoo-Code |
| HEAD | e80039b |
| stars/forks | 1009 / 136 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T22:42:16Z |
| trendScore / priorityScore | 142 / 427 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 338 | apps/cli/README.md, apps/vscode-e2e/AGENTS.md, .changeset/README.md |
| MCP / agent interoperability | 247 | apps/cli/README.md, AGENTS.md, webview-ui/AGENTS.md |
| AI agent / orchestration | 216 | apps/cli/README.md, AGENTS.md, webview-ui/AGENTS.md |
| Frontend / app framework | 78 | AGENTS.md, webview-ui/AGENTS.md, README.md |
| Coding agent / software automation | 55 | apps/cli/README.md, README.md, locales/ca/README.md |
| Cloud native / infrastructure | 12 | apps/cli/README.md, apps/vscode-e2e/AGENTS.md, apps/cli/package.json |
| Security / supply chain | 9 | README.md, src/core/prompts/tools/__tests__/filter-tools-for-mode.spec.ts, src/package.json |
| RAG / retrieval / knowledge | 3 | src/core/prompts/tools/native-tools/codebase_search.ts |
| Observability / evaluation | 2 | src/core/prompts/sections/skills.ts |
| Database / data infrastructure | 1 | src/core/prompts/tools/native-tools/codebase_search.ts |
| Local LLM / inference | 1 | src/package.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, frontend, frontendStack, infra, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2339 |
| manifests | 40 |
| docs | 94 |
| tests | 762 |
| ci/ops | 9 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Zoo Code | Zoo Code / We are Zoo Code / Roo Code to Zoo Code migration / What's New in v3.60.0 / What Can Zoo Code Do For YOU? / Modes / Tutorial & Feature Videos / Resources / Local Setup & Development / Development Mode (F5) | <p align="center" <a href="https //marketplace.visualstudio.com/items?itemName=ZooCodeOrganization.zoo code" <img src="https //img.shields.io/badge/VS Code Marketplace 007ACC?style=flat&logo=visualstudiocode&logoColor=white" alt="VS Code Marketplace" </a <a href="https //x.com/ZooCodeDev" <img src="https //img.shields.io/badge/ZooCode 000000?style=flat&logo=x&logoColor=white" alt="X" </a <a href="https //youtube.com/@roocodeyt?feature=shared" <img src="https //img.shields.io/badge/YouTube FF0000?style=flat&logo=youtube&logoColor=white" alt="YouTube" </a <a href="https //discord.gg/VxfP4Vx3gX" <img src="https //img.shields.io/badge/Join%20Discord 5865F2?style=flat&logo=discord&logoColor=white |


## Key Files

### Manifests

- apps/cli/README.md
- AGENTS.md
- webview-ui/AGENTS.md
- apps/vscode-e2e/AGENTS.md
- .changeset/README.md
- README.md
- locales/ca/README.md
- locales/de/README.md
- locales/es/README.md
- locales/fr/README.md
- locales/hi/README.md
- locales/id/README.md
- locales/it/README.md
- locales/ja/README.md
- locales/ko/README.md
- locales/nl/README.md
- locales/pl/README.md
- locales/pt-BR/README.md
- locales/ru/README.md
- locales/tr/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- webview-ui/AGENTS.md
- apps/vscode-e2e/AGENTS.md
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/architect-mode-prompt.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/architect-mode-rules.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/ask-mode-prompt.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/ask-mode-rules.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/code-mode-rules.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/code-reviewer-mode-rules.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/combined-custom-instructions.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/empty-mode-instructions.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/generic-rules-fallback.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/global-and-mode-instructions.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/mcp-server-creation-disabled.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/prioritized-instructions-order.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/test-engineer-mode-rules.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/trimmed-mode-instructions.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/undefined-mode-instructions.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/with-custom-instructions.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/with-preferred-language.snap


### Agent Instruction Files

- AGENTS.md
- webview-ui/AGENTS.md
- apps/vscode-e2e/AGENTS.md
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/architect-mode-prompt.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/architect-mode-rules.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/ask-mode-prompt.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/ask-mode-rules.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/code-mode-rules.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/code-reviewer-mode-rules.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/combined-custom-instructions.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/empty-mode-instructions.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/generic-rules-fallback.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/global-and-mode-instructions.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/mcp-server-creation-disabled.snap
- src/core/prompts/__tests__/__snapshots__/add-custom-instructions/prioritized-instructions-order.snap


## Top Directories

| dir | count |
| --- | --- |
| src | 1056 |
| webview-ui | 606 |
| packages | 272 |
| apps | 239 |
| locales | 51 |
| .roo | 49 |
| .github | 20 |
| .changeset | 6 |
| scripts | 5 |
| .vscode | 4 |
| .husky | 2 |
| .dockerignore | 1 |
| .git-blame-ignore-revs | 1 |
| .gitattributes | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1347 |
| .json | 383 |
| .tsx | 359 |
| .md | 94 |
| [no-ext] | 36 |
| .xml | 32 |
| .snap | 27 |
| .yml | 19 |
| .mjs | 15 |
| .js | 9 |
| .css | 3 |
| .wav | 3 |
| .yaml | 3 |
| .sh | 2 |
| .svg | 2 |
| .cjs | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
