# dyad-sh/dyad

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/dyad-sh/dyad |
| local path | sources/dyad-sh__dyad |
| HEAD | 3afa402 |
| stars/forks | 20657 / 2469 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T21:23:30Z |
| trendScore / priorityScore | 150 / 439 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Frontend / app framework | 500 | AGENTS.md, src/__tests__/README.md, packages/@dyad-sh/nextjs-webpack-component-tagger/README.md |
| AI agent / orchestration | 245 | src/__tests__/evals/README.md, AGENTS.md, .claude/README.md |
| MCP / agent interoperability | 190 | testing/README.md, .claude/README.md, package.json |
| Security / supply chain | 156 | src/__tests__/evals/README.md, AGENTS.md, testing/README.md |
| Database / data infrastructure | 85 | AGENTS.md, packages/@dyad-sh/nextjs-webpack-component-tagger/README.md, packages/@dyad-sh/react-vite-component-tagger/README.md |
| Coding agent / software automation | 68 | .github/workflows/README.md, .claude/README.md, scripts/README.md |
| Cloud native / infrastructure | 45 | src/__tests__/evals/README.md, package.json, src/prompts/neon_prompt.test.ts |
| Developer tools / DX | 41 | src/__tests__/evals/README.md, .github/workflows/README.md, AGENTS.md |
| Observability / evaluation | 33 | src/__tests__/evals/README.md, src/__tests__/README.md, package.json |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2040 |
| manifests | 40 |
| docs | 176 |
| tests | 779 |
| ci/ops | 22 |
| spec artifacts | 50 |
| agent instruction files | 40 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Dyad | Dyad / 🚀 Features / 📦 Download / [👉 Download for your platform](https://www.dyad.sh/#download) / 🤝 Community / 🛠️ Contributing / License | Dyad Dyad is a local, open source AI app builder. It's fast, private, and fully under your control — like Lovable, v0, or Bolt, but running right on your machine. ! Image https //github.com/user attachments/assets/f6c83dfc 6ffd 4d32 93dd 4b9c46d17790 https //dyad.sh/ More info at https //dyad.sh/ https //dyad.sh/ 🚀 Features ⚡️ Local Fast, private and no lock in. 🛠 Bring your own keys Use your own AI API keys — no vendor lock in. 🖥️ Cross platform Easy to run on Mac or Windows. 📦 Download No sign up required. Just download and go. 👉 Download for your platform https //www.dyad.sh/ download 🤝 Community Join our growing community of AI app builders on Reddit r/dyadbuilders https //www.redd |


## Key Files

### Manifests

- src/__tests__/evals/README.md
- testing/fake-llm-server/README.md
- .github/workflows/README.md
- docs/adrs/README.md
- AGENTS.md
- testing/README.md
- .claude/hooks/tests/README.md
- .claude/README.md
- README.md
- scaffold/README.md
- scripts/README.md
- src/__tests__/README.md
- packages/@dyad-sh/nextjs-webpack-component-tagger/README.md
- packages/@dyad-sh/react-vite-component-tagger/README.md
- packages/pg-schema-classifier/README.md
- packages/ts-pg-schema-diff/README.md
- testing/fake-llm-server/package.json
- testing/fake-llm-server/tsconfig.json
- e2e-tests/fixtures/import-app/astro/package.json
- e2e-tests/fixtures/import-app/astro/tsconfig.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- .claude/hooks/tests/README.md
- .claude/README.md
- src/prompts/__snapshots__/local_agent_prompt.test.ts.snap
- src/prompts/__snapshots__/neon_prompt.test.ts.snap
- src/prompts/guides/filter_guide_by_framework.test.ts
- src/prompts/local_agent_prompt.test.ts
- src/prompts/neon_prompt.test.ts
- .github/prompts/claude-pr-review.txt
- .github/prompts/claude-triage.txt
- .github/prompts/codex-pr-review.txt
- src/pro/main/prompts/turbo_edits_v2_prompt.ts
- src/prompts/compaction_system_prompt.ts
- src/prompts/guides/add-authentication.md
- src/prompts/guides/add-email-verification.md
- src/prompts/guides/add-password-reset.md
- src/prompts/guides/filter_guide_by_framework.ts
- src/prompts/inspiration_prompts.tsx
- src/prompts/local_agent_prompt.ts
- src/prompts/neon_prompt.ts


### Agent Instruction Files

- AGENTS.md
- .claude/hooks/tests/README.md
- .claude/README.md
- src/prompts/__snapshots__/local_agent_prompt.test.ts.snap
- src/prompts/__snapshots__/neon_prompt.test.ts.snap
- src/prompts/guides/filter_guide_by_framework.test.ts
- src/prompts/local_agent_prompt.test.ts
- src/prompts/neon_prompt.test.ts
- .github/prompts/claude-pr-review.txt
- .github/prompts/claude-triage.txt
- .github/prompts/codex-pr-review.txt
- src/pro/main/prompts/turbo_edits_v2_prompt.ts
- src/prompts/compaction_system_prompt.ts
- src/prompts/guides/add-authentication.md
- src/prompts/guides/add-email-verification.md


## Top Directories

| dir | count |
| --- | --- |
| src | 948 |
| e2e-tests | 621 |
| scaffold | 78 |
| drizzle | 68 |
| .claude | 65 |
| packages | 51 |
| .github | 29 |
| plans | 24 |
| scripts | 22 |
| rules | 19 |
| testing | 19 |
| workers | 11 |
| assets | 10 |
| docs | 8 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 912 |
| .tsx | 381 |
| .md | 174 |
| .yml | 162 |
| .txt | 135 |
| .json | 113 |
| .sql | 34 |
| [no-ext] | 22 |
| .js | 18 |
| .mjs | 15 |
| .sh | 10 |
| .svg | 10 |
| .py | 9 |
| .html | 7 |
| .mts | 6 |
| .yaml | 6 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
