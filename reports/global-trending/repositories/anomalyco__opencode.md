# anomalyco/opencode

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/anomalyco/opencode |
| local path | sources/anomalyco__opencode |
| HEAD | 4c9abff |
| stars/forks | 175712 / 21355 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T23:58:57Z |
| trendScore / priorityScore | 210 / 529 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Coding agent / software automation | 472 | packages/llm/README.md, AGENTS.md, packages/opencode/test/AGENTS.md |
| Developer tools / DX | 220 | packages/docs/README.md, AGENTS.md, packages/llm/AGENTS.md |
| AI agent / orchestration | 187 | packages/llm/README.md, AGENTS.md, packages/app/AGENTS.md |
| Database / data infrastructure | 171 | packages/opencode/test/server/AGENTS.md, packages/effect-drizzle-sqlite/AGENTS.md, packages/opencode/AGENTS.md |
| Frontend / app framework | 104 | packages/app/README.md, packages/stats/README.md, github/tsconfig.json |
| MCP / agent interoperability | 31 | packages/llm/README.md, packages/core/src/tool/AGENTS.md, packages/opencode/src/session/llm/AGENTS.md |
| Cloud native / infrastructure | 30 | packages/llm/README.md, packages/llm/AGENTS.md, packages/containers/README.md |
| Observability / evaluation | 30 | package.json, .github/workflows/nix-eval.yml, packages/app/package.json |
| Security / supply chain | 22 | packages/opencode/src/session/llm/AGENTS.md, packages/http-recorder/README.md, packages/slack/README.md |
| Data / ML platform | 3 | packages/llm/AGENTS.md, packages/llm/example/tutorial.ts, packages/opencode/src/session/prompt/beast.txt |
| RAG / retrieval / knowledge | 1 | packages/opencode/src/session/prompt/copilot-gpt-5.txt |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, example-rich, frontend, frontendStack, infra, infraOps, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 5433 |
| manifests | 40 |
| docs | 765 |
| tests | 709 |
| ci/ops | 36 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | YOLO | Installation / YOLO / Package managers / Desktop App (BETA) / macOS (Homebrew) / Windows (Scoop) / Examples / Agents / Documentation / Contributing | <p align="center" <a href="https //opencode.ai" <picture <source srcset="packages/console/app/src/asset/logo ornate dark.svg" media=" prefers color scheme dark " <source srcset="packages/console/app/src/asset/logo ornate light.svg" media=" prefers color scheme light " <img src="packages/console/app/src/asset/logo ornate light.svg" alt="OpenCode logo" </picture </a </p <p align="center" The open source AI coding agent.</p <p align="center" <a href="https //opencode.ai/discord" <img alt="Discord" src="https //img.shields.io/discord/1391832426048651334?style=flat square&label=discord" / </a <a href="https //www.npmjs.com/package/opencode ai" <img alt="npm" src="https //img.shields.io/npm/v/open |


## Key Files

### Manifests

- packages/docs/README.md
- packages/llm/README.md
- AGENTS.md
- packages/opencode/test/AGENTS.md
- packages/opencode/test/server/AGENTS.md
- packages/app/AGENTS.md
- packages/core/src/tool/AGENTS.md
- packages/desktop/AGENTS.md
- packages/effect-drizzle-sqlite/AGENTS.md
- packages/llm/AGENTS.md
- packages/opencode/AGENTS.md
- packages/opencode/src/server/routes/instance/httpapi/AGENTS.md
- packages/opencode/src/session/llm/AGENTS.md
- packages/stats/AGENTS.md
- github/README.md
- README.md
- .opencode/glossary/README.md
- packages/app/README.md
- packages/console/app/README.md
- packages/containers/README.md


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- packages/opencode/test/AGENTS.md
- packages/opencode/test/server/AGENTS.md
- packages/app/AGENTS.md
- packages/core/src/tool/AGENTS.md
- packages/desktop/AGENTS.md
- packages/effect-drizzle-sqlite/AGENTS.md
- packages/llm/AGENTS.md
- packages/opencode/AGENTS.md
- packages/opencode/src/server/routes/instance/httpapi/AGENTS.md
- packages/opencode/src/session/llm/AGENTS.md
- packages/stats/AGENTS.md
- packages/tui/test/prompt/display.test.ts
- packages/tui/test/prompt/history.test.ts
- packages/tui/test/prompt/jsonl.test.ts
- packages/tui/test/prompt/local-attachment.test.ts
- packages/tui/test/prompt/part.test.ts
- packages/tui/test/prompt/persistence.test.ts
- packages/tui/test/prompt/traits.test.ts
- specs/storage/effect-sqlite-package.md


### Agent Instruction Files

- AGENTS.md
- packages/opencode/test/AGENTS.md
- packages/opencode/test/server/AGENTS.md
- packages/app/AGENTS.md
- packages/core/src/tool/AGENTS.md
- packages/desktop/AGENTS.md
- packages/effect-drizzle-sqlite/AGENTS.md
- packages/llm/AGENTS.md
- packages/opencode/AGENTS.md
- packages/opencode/src/server/routes/instance/httpapi/AGENTS.md
- packages/opencode/src/session/llm/AGENTS.md
- packages/stats/AGENTS.md
- packages/tui/test/prompt/display.test.ts
- packages/tui/test/prompt/history.test.ts
- packages/tui/test/prompt/jsonl.test.ts


## Top Directories

| dir | count |
| --- | --- |
| packages | 5240 |
| .github | 36 |
| .opencode | 36 |
| script | 15 |
| specs | 14 |
| sdks | 12 |
| patches | 11 |
| github | 9 |
| infra | 8 |
| nix | 6 |
| .dockerignore | 1 |
| .editorconfig | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 2015 |
| .svg | 1251 |
| .mdx | 627 |
| .tsx | 524 |
| .json | 330 |
| .css | 156 |
| .md | 130 |
| .sql | 118 |
| [no-ext] | 46 |
| .aac | 45 |
| .mp3 | 45 |
| .txt | 42 |
| .yml | 34 |
| .patch | 10 |
| .woff2 | 8 |
| .astro | 7 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
