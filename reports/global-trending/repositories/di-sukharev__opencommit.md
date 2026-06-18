# di-sukharev/opencommit

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/di-sukharev/opencommit |
| local path | sources/di-sukharev__opencommit |
| HEAD | 85c7715 |
| stars/forks | 7341 / 425 |
| language | JavaScript |
| license |  |
| pushedAt | 2026-06-17T13:05:21Z |
| trendScore / priorityScore | 146 / 364 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.
- security/supply-chain 신호가 있어 agent 시대의 신뢰성·위험관리 축에 속한다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Local LLM / inference | 127 | README.md, package.json, test/unit/llamacpp.test.ts |
| Developer tools / DX | 102 | README.md, test/e2e/prompt-module/data/commitlint_18/package.json, test/e2e/prompt-module/data/commitlint_19/package.json |
| Cloud native / infrastructure | 73 | README.md, package.json, src/cli.ts |
| AI agent / orchestration | 12 | package.json, test/unit/proxy.test.ts, src/engine/anthropic.ts |
| Security / supply chain | 11 | README.md, src/prompts.ts, .github/workflows/codeql.yml |
| Coding agent / software automation | 4 | README.md, src/modules/commitlint/prompts.ts, src/commands/config.ts |
| RAG / retrieval / knowledge | 3 | README.md, src/commands/config.ts |
| Database / data infrastructure | 2 | src/prompts.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, database, devtools, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, rag, security, securityTooling |
| stacks | Node/TypeScript/JavaScript |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 132 |
| manifests | 8 |
| docs | 4 |
| tests | 29 |
| ci/ops | 4 |
| spec artifacts | 0 |
| agent instruction files | 0 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | de, German, Deutsch | Setup OpenCommit as a CLI tool / Usage / Running locally with Ollama / Running locally with llama.cpp / Flags / Configuration / Local per repo configuration / Global config for all repos / Output WHY the changes were done (WIP) / Switch to GPT-4 or other models | <div align="center" <div <img src=".github/logo grad.svg" alt="OpenCommit logo"/ <h1 align="center" OpenCommit</h1 <h4 align="center" Author <a href="https //twitter.com/ sukharev " <img src="https //img.shields.io/twitter/follow/ sukharev ?style=flat&label= sukharev &logo=twitter&color=0bf&logoColor=fff" align="center" </a </div <h2 Auto generate meaningful commits in a second</h2 <p Killing lame commits with AI 🤯🔫</p <a href="https //www.npmjs.com/package/opencommit" <img src="https //img.shields.io/npm/v/opencommit" alt="Current version" </a <h4 align="center" 🪩 Winner of <a href="https //twitter.com/ sukharev /status/1683448136973582336" GitHub 2023 hackathon</a 🪩</h4 </div <div alig |


## Key Files

### Manifests

- README.md
- src/commands/README.md
- test/e2e/prompt-module/data/commitlint_18/package.json
- test/e2e/prompt-module/data/commitlint_19/package.json
- test/e2e/prompt-module/data/commitlint_9/package.json
- test/Dockerfile
- package.json
- tsconfig.json


### Spec / Docs / Prompt Artifacts

_none_


### Agent Instruction Files

_none_


## Top Directories

| dir | count |
| --- | --- |
| src | 78 |
| test | 29 |
| .github | 9 |
| .dockerignore | 1 |
| .gitignore | 1 |
| .npmignore | 1 |
| .npmrc | 1 |
| .opencommitignore | 1 |
| .prettierignore | 1 |
| .prettierrc | 1 |
| action.yml | 1 |
| biome.json | 1 |
| esbuild.config.js | 1 |
| jest.config.ts | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 77 |
| .json | 29 |
| [no-ext] | 9 |
| .js | 4 |
| .md | 4 |
| .yml | 4 |
| .svg | 2 |
| .yaml | 2 |
| .sh | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
