# GLips/Figma-Context-MCP

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/GLips/Figma-Context-MCP |
| local path | sources/GLips__Figma-Context-MCP |
| HEAD | 22426e6 |
| stars/forks | 15139 / 1198 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:21:25Z |
| trendScore / priorityScore | 207 / 474 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 348 | README.md, src/extractors/README.md, CLAUDE.md |
| Developer tools / DX | 113 | README.md, CLAUDE.md, package.json |
| Cloud native / infrastructure | 76 | src/telemetry/client.ts, CHANGELOG.md, src/bin.ts |
| Security / supply chain | 37 | CLAUDE.md, .github/workflows/release.yml, src/telemetry/client.ts |
| Coding agent / software automation | 24 | README.md, CLAUDE.md, package.json |
| Data / ML platform | 16 | scripts/benchmark-simplify.ts, src/tests/serialization.test.ts, src/tests/validation-reject.test.ts |
| Observability / evaluation | 10 | package.json, scripts/benchmark-simplify.ts |
| AI agent / orchestration | 9 | README.md, src/extractors/README.md, package.json |
| Frontend / app framework | 4 | src/extractors/README.md, CLAUDE.md, ROADMAP.md |
| Database / data infrastructure | 3 | src/mcp/validation-capture.ts, src/telemetry/client.ts |
| RAG / retrieval / knowledge | 2 | scripts/scan-hidden-chars.mjs, src/services/get-figma-data.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontend, frontendStack, infra, llmFramework, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 101 |
| manifests | 5 |
| docs | 8 |
| tests | 17 |
| ci/ops | 2 |
| spec artifacts | 3 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Demo / How it works / Getting Started / MacOS / Linux / Windows / Star History / Learn More | <a href="https //www.framelink.ai/?utm source=github&utm medium=referral&utm campaign=readme" target=" blank" rel="noopener" <picture <source media=" prefers color scheme dark " srcset="https //www.framelink.ai/github/HeaderDark.png" / <img alt="Framelink" src="https //www.framelink.ai/github/HeaderLight.png" / </picture </a <div align="center" <h1 Framelink MCP for Figma</h1 <h3 Give your coding agent access to your Figma data.<br/ Implement designs in any framework in one shot.</h3 <a href="https //npmcharts.com/compare/figma developer mcp?interval=30" <img alt="weekly downloads" src="https //img.shields.io/npm/dm/figma developer mcp.svg" </a <a href="https //github.com/GLips/Figma Context |


## Key Files

### Manifests

- README.md
- src/extractors/README.md
- CLAUDE.md
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

- CLAUDE.md
- ROADMAP.md
- .claude/commands/release.md


### Agent Instruction Files

- CLAUDE.md
- .claude/commands/release.md


## Top Directories

| dir | count |
| --- | --- |
| src | 71 |
| .github | 5 |
| scripts | 4 |
| .claude | 1 |
| .env.example | 1 |
| .gitignore | 1 |
| .nvmrc | 1 |
| .prettierrc | 1 |
| .release-please-manifest.json | 1 |
| CHANGELOG.md | 1 |
| CLAUDE.md | 1 |
| CONTRIBUTING.md | 1 |
| eslint.config.js | 1 |
| lefthook.yml | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 75 |
| .md | 8 |
| .json | 5 |
| .yml | 5 |
| [no-ext] | 4 |
| .example | 1 |
| .js | 1 |
| .mjs | 1 |
| .yaml | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
