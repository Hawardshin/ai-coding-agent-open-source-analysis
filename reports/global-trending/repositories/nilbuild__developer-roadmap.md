# nilbuild/developer-roadmap

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/nilbuild/developer-roadmap |
| local path | sources/nilbuild__developer-roadmap |
| HEAD | 9c5e7e5 |
| stars/forks | 357571 / 44232 |
| language | TypeScript |
| license | NOASSERTION |
| pushedAt | 2026-06-16T14:34:27Z |
| trendScore / priorityScore | 151 / 384 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.
- frontend/DX 신호가 있어 실제 사용자 인터페이스와 개발자 경험을 확인할 가치가 있다.
- 글로벌 스타 수가 높아 생태계 표준 또는 학습 기준점으로 우선순위가 높다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Security / supply chain | 235 | readme.md, .github/workflows/sync-repo-to-database.yml, scripts/migrate-content-repo-to-database.ts |
| Frontend / app framework | 134 | readme.md, scripts/readme.md, package.json |
| Developer tools / DX | 45 | readme.md, scripts/readme.md, package.json |
| AI agent / orchestration | 33 | readme.md, scripts/sync-repo-to-database.ts, src/data/roadmaps/ai-agents/content/integration-testing-for-flows@P9-SiIda3TSjHsfkI5OUV.md |
| Database / data infrastructure | 25 | readme.md, package.json, .github/workflows/sync-repo-to-database.yml |
| Cloud native / infrastructure | 15 | readme.md, src/data/best-practices/api-security/content/api-gateway.md |
| Observability / evaluation | 13 | src/data/roadmaps/ai-agents/content/safety--red-team-testing@63nsfJFO1BwjLX_ZVaPFC.md, src/data/roadmaps/ai-red-teaming/content/llm-security-testing@xJYTRbPxMn0Xs5ea0Ygn6.md, src/data/best-practices/api-security/content/api-gateway.md |
| Coding agent / software automation | 8 | readme.md, src/data/roadmaps/ios/content/test-plan--coverage@uczkyc30K_qqcarZCGTdF.md, src/components/AIChat/QuickHelpPrompts.tsx |
| Data / ML platform | 7 | readme.md, src/data/roadmaps/ai-agents/content/safety--red-team-testing@63nsfJFO1BwjLX_ZVaPFC.md, src/data/roadmaps/ai-red-teaming/content/llm-security-testing@xJYTRbPxMn0Xs5ea0Ygn6.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, observability, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 8000 (capped) |
| manifests | 4 |
| docs | 7010 |
| tests | 4 |
| ci/ops | 94 |
| spec artifacts | 3 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| readme.md |  | [View all Roadmaps](https://roadmap.sh) &nbsp;&middot;&nbsp; [Best Practices](https://roadmap.sh/best-practices) &nbsp;&middot;&nbsp; [Questions](https://roadmap.sh/questions) / Share with the community / Development / Contribution / Thanks to all contributors ❤ / License | <p align="center" <a href="https //roadmap.sh/" <img src="public/img/brand.png" height="128" </a <h2 align="center" <a href="https //roadmap.sh" roadmap.sh</a </h2 <p align="center" Community driven roadmaps, articles and resources for developers<p <p align="center" <a href="https //roadmap.sh/roadmaps" <img src="https //img.shields.io/badge/%E2%9C%A8 Roadmaps%20 0a0a0a.svg?style=flat&colorA=0a0a0a" alt="roadmaps" / </a <a href="https //roadmap.sh/best practices" <img src="https //img.shields.io/badge/%E2%9C%A8 Best%20Practices 0a0a0a.svg?style=flat&colorA=0a0a0a" alt="best practices" / </a <a href="https //roadmap.sh/questions" <img src="https //img.shields.io/badge/%E2%9C%A8 Questions 0a0a |


## Key Files

### Manifests

- package.json
- requirements.txt
- tsconfig.json
- src/data/question-groups/devops/content/docker-compose.md


### Spec / Docs / Prompt Artifacts

- requirements.txt
- .cursor/rules/gh-cli.mdc
- .cursor/rules/content-migration.mdc


### Agent Instruction Files

- .cursor/rules/gh-cli.mdc
- .cursor/rules/content-migration.mdc


## Top Directories

| dir | count |
| --- | --- |
| src | 7910 |
| scripts | 33 |
| .github | 17 |
| public | 11 |
| tests | 4 |
| .vscode | 3 |
| .cursor | 2 |
| .env.example | 1 |
| .gitignore | 1 |
| .npmrc | 1 |
| .prettierignore | 1 |
| .prettierrc.cjs | 1 |
| astro.config.mjs | 1 |
| code_of_conduct.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .md | 7007 |
| .tsx | 487 |
| .astro | 146 |
| .ts | 132 |
| .json | 89 |
| .svg | 72 |
| .yml | 17 |
| .css | 14 |
| .cjs | 11 |
| [no-ext] | 6 |
| .sh | 5 |
| .mjs | 4 |
| .js | 2 |
| .mdc | 2 |
| .yaml | 2 |
| .example | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
