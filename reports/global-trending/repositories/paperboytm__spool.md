# paperboytm/spool

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/paperboytm/spool |
| local path | sources/paperboytm__spool |
| HEAD | 2aa829c |
| stars/forks | 561 / 38 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-12T16:24:50Z |
| trendScore / priorityScore | 151 / 441 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Security / supply chain | 500 | README.md, packages/share-backend/README.md, packages/share-kit/README.md |
| Frontend / app framework | 171 | AGENTS.md, README.md, packages/share-kit/README.md |
| Database / data infrastructure | 113 | packages/cli/README.md, README.md, packages/core/README.md |
| Developer tools / DX | 106 | packages/cli/README.md, README.md, packages/core/README.md |
| Coding agent / software automation | 105 | packages/cli/README.md, AGENTS.md, README.md |
| AI agent / orchestration | 53 | README.md, packages/app/package.json, packages/landing/pages/docs/guides/agent-integration.md |
| Cloud native / infrastructure | 30 | packages/share-backend/README.md, packages/share-web/vite.config.ts, packages/app/src/main/ipc/security.test.ts |
| Observability / evaluation | 17 | packages/core/package.json, packages/app/src/main/security/class-mapping.test.ts, packages/app/src/main/security/csp.test.ts |
| Data / ML platform | 13 | videos/README.md, CLAUDE.md, packages/redact/package.json |
| RAG / retrieval / knowledge | 11 | packages/app/e2e/agent-search.spec.ts, packages/app/src/main/security/csp.test.ts, packages/core/src/migrations/agent-search-cleanup.test.ts |
| Local LLM / inference | 3 | packages/redact/package.json, packages/app/src/main/security/pf-model-protocol.ts, packages/app/src/renderer/components/Settings/security/PfDownloadCard.tsx |
| MCP / agent interoperability | 1 |  |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 664 |
| manifests | 35 |
| docs | 32 |
| tests | 206 |
| ci/ops | 3 |
| spec artifacts | 10 |
| agent instruction files | 9 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Spool | Spool / Install / DMG is in packages/app/dist/ / What it does / Architecture / Development / Dev DB isolation / Release / License / Trademark | Spool Your local AI session library. <p align="center" <img src="docs/spool v1.png" alt="Spool" width="720" </p Spool collects every Claude Code, Codex CLI, Gemini CLI, and OpenCode session you've ever had into a sidebar of projects you can browse, pin, and revisit. Press ⌘K to search across the whole archive. Early stage. Spool is under active development — expect rough edges. Feedback, bug reports, and ideas are very welcome via Issues https //github.com/paperboytm/spool/issues or Discord https //discord.gg/aqeDxQUs5E . Install Or grab the prebuilt DMG macOS arm64 / AppImage Linux x86 64 directly from the Releases page https //github.com/paperboytm/spool/releases/latest . Or build from sou |


## Key Files

### Manifests

- packages/cli/README.md
- AGENTS.md
- README.md
- videos/README.md
- packages/core/README.md
- packages/share-backend/README.md
- packages/share-kit/README.md
- videos/launch-template/README.md
- videos/spool-v0.5.0/README.md
- CLAUDE.md
- packages/cli/package.json
- packages/cli/tsconfig.json
- package.json
- packages/app/package.json
- packages/app/tsconfig.json
- packages/core/package.json
- packages/core/tsconfig.json
- packages/landing/package.json
- packages/landing/tsconfig.json
- packages/landing/vite.config.ts


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- DESIGN.md
- .claude/skills/launch-video/references/capture.md
- .claude/skills/launch-video/references/composition.md
- .claude/skills/launch-video/references/cursor-overlay.md
- .claude/skills/launch-video/references/pitfalls.md
- .claude/skills/launch-video/references/poster.md
- .claude/skills/launch-video/references/spotlight.md
- .claude/skills/launch-video/SKILL.md


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- .claude/skills/launch-video/references/capture.md
- .claude/skills/launch-video/references/composition.md
- .claude/skills/launch-video/references/cursor-overlay.md
- .claude/skills/launch-video/references/pitfalls.md
- .claude/skills/launch-video/references/poster.md
- .claude/skills/launch-video/references/spotlight.md
- .claude/skills/launch-video/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| packages | 616 |
| .claude | 7 |
| videos | 7 |
| .github | 5 |
| scripts | 5 |
| workers | 4 |
| .agents | 2 |
| .gitignore | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |
| CONTRIBUTING.md | 1 |
| DESIGN.md | 1 |
| docs | 1 |
| eslint.config.mjs | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 438 |
| .tsx | 91 |
| .json | 36 |
| .md | 31 |
| .mjs | 11 |
| .css | 10 |
| .jsonl | 8 |
| .sh | 7 |
| [no-ext] | 6 |
| .html | 5 |
| .yml | 5 |
| .svg | 3 |
| .example | 2 |
| .js | 2 |
| .sql | 2 |
| .toml | 2 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
