# generalaction/emdash

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/generalaction/emdash |
| local path | sources/generalaction__emdash |
| HEAD | 2c4b10a |
| stars/forks | 4902 / 508 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:21:11Z |
| trendScore / priorityScore | 157 / 437 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 459 | agents/README.md, AGENTS.md, README.md |
| MCP / agent interoperability | 213 | agents/README.md, AGENTS.md, CLAUDE.md |
| Frontend / app framework | 172 | AGENTS.md, apps/emdash-desktop/package.json, apps/emdash-desktop/src/renderer/features/library/prompts/prompt-library-view.tsx |
| Coding agent / software automation | 135 | AGENTS.md, README.md, apps/emdash-desktop/tooling/byoi/README.md |
| Developer tools / DX | 128 | AGENTS.md, README.md, apps/emdash-desktop/package.json |
| Cloud native / infrastructure | 96 | AGENTS.md, apps/emdash-desktop/tooling/byoi/README.md, apps/emdash-desktop/docker-compose.yaml |
| Database / data infrastructure | 54 | AGENTS.md, README.md, agents/workflows/testing.md |
| Security / supply chain | 30 | AGENTS.md, README.md, apps/emdash-desktop/package.json |
| Data / ML platform | 2 | agents/risky-areas/database.md, agents/risky-areas/updater.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, mcp, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1899 |
| manifests | 19 |
| docs | 29 |
| tests | 296 |
| ci/ops | 8 |
| spec artifacts | 5 |
| agent instruction files | 5 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | What You Can Do / Installation / Agents / Remote Projects / Privacy / Contributing / License | <img alt="Emdash" src="https //github.com/user attachments/assets/a2ecaf3c 9d84 40ca 9a8e d4f612cc1c6f" / <div align="center" Download https //emdash.sh/download · Docs https //emdash.sh/docs · Releases https //github.com/generalaction/emdash/releases/latest · Discord https //discord.gg/f2fv7YxuR2 · Contributing CONTRIBUTING.md <br / ! Apache 2.0 License https //img.shields.io/badge/License Apache 2.0 555555.svg?labelColor=333333&color=666666 ./LICENSE.md ! Downloads https //img.shields.io/github/downloads/generalaction/emdash/total?labelColor=333333&color=666666 https //github.com/generalaction/emdash/releases ! GitHub Stars https //img.shields.io/github/stars/generalaction/emdash?labelColo |


## Key Files

### Manifests

- agents/README.md
- AGENTS.md
- README.md
- apps/emdash-desktop/tooling/byoi/README.md
- CLAUDE.md
- package.json
- apps/emdash-desktop/docker-compose.yaml
- apps/emdash-desktop/package.json
- apps/emdash-desktop/scripts/release/tsconfig.json
- apps/emdash-desktop/tooling/byoi/Dockerfile
- apps/emdash-desktop/tooling/node-deps/package.json
- apps/emdash-desktop/tsconfig.json
- packages/core/package.json
- packages/core/tsconfig.json
- packages/plugins/package.json
- packages/plugins/tsconfig.json
- packages/ui/package.json
- packages/ui/tsconfig.json
- tsconfig.base.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- apps/emdash-desktop/src/renderer/features/library/prompts/prompt-library-view.tsx
- apps/emdash-desktop/src/renderer/features/library/prompts/prompt-modal.tsx
- apps/emdash-desktop/src/renderer/features/library/prompts/use-prompt-library.ts


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- apps/emdash-desktop/src/renderer/features/library/prompts/prompt-library-view.tsx
- apps/emdash-desktop/src/renderer/features/library/prompts/prompt-modal.tsx
- apps/emdash-desktop/src/renderer/features/library/prompts/use-prompt-library.ts


## Top Directories

| dir | count |
| --- | --- |
| apps | 1630 |
| packages | 218 |
| agents | 21 |
| .github | 12 |
| .emdash.json | 1 |
| .gitignore | 1 |
| .node-version | 1 |
| .npmrc | 1 |
| .nvmrc | 1 |
| .oxfmtrc.json | 1 |
| .oxlintrc.json | 1 |
| AGENTS.md | 1 |
| CLAUDE.md | 1 |
| CONTRIBUTING.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1250 |
| .tsx | 418 |
| .svg | 95 |
| .json | 39 |
| .md | 29 |
| .sql | 16 |
| .yml | 13 |
| [no-ext] | 8 |
| .css | 7 |
| .db | 6 |
| .sh | 4 |
| .icns | 3 |
| .yaml | 3 |
| .js | 2 |
| .mjs | 2 |
| .html | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
