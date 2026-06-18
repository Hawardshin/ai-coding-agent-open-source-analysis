# continuedev/continue

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/continuedev/continue |
| local path | sources/continuedev__continue |
| HEAD | eaa23c5 |
| stars/forks | 33891 / 4697 |
| language | TypeScript |
| license | Apache-2.0 |
| pushedAt | 2026-06-17T21:40:08Z |
| trendScore / priorityScore | 150 / 495 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | extensions/cli/README.md, extensions/cli/AGENTS.md, README.md |
| Developer tools / DX | 500 | docs/README.md, extensions/cli/src/test-helpers/README.md, extensions/cli/src/ui/__tests__/README.md |
| MCP / agent interoperability | 500 | extensions/cli/src/permissions/README.md, extensions/cli/AGENTS.md, extensions/cli/package.json |
| Security / supply chain | 203 | actions/README.md, packages/config-yaml/src/README.md, packages/continue-sdk/python/api/README.md |
| Observability / evaluation | 189 | core/vendor/modules/@xenova/transformers/README.md, extensions/cli/package.json, packages/terminal-security/package.json |
| Data / ML platform | 133 | extensions/cli/README.md, core/vendor/modules/@xenova/transformers/README.md, extensions/vscode/models/all-MiniLM-L6-v2/README.md |
| Database / data infrastructure | 133 | core/indexing/README.md, sync/src/README.md, core/package.json |
| Frontend / app framework | 97 | extensions/cli/AGENTS.md, gui/README.md, core/vendor/modules/@xenova/transformers/README.md |
| Coding agent / software automation | 60 | extensions/cli/README.md, extensions/cli/AGENTS.md, README.md |
| Local LLM / inference | 45 | packages/openai-adapters/README.md, core/package.json, docs/customize/model-providers/more/ipex_llm.mdx |
| Cloud native / infrastructure | 34 | extensions/cli/README.md, extensions/cli/AGENTS.md, packages/continue-sdk/python/api/README.md |
| RAG / retrieval / knowledge | 26 | packages/llm-info/README.md, core/vendor/modules/@xenova/transformers/README.md, docs/customize/model-roles/embeddings.mdx |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Node/TypeScript/JavaScript, Python, Rust, Go, Java/Kotlin, .NET |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 2737 |
| manifests | 40 |
| docs | 331 |
| tests | 445 |
| ci/ops | 37 |
| spec artifacts | 28 |
| agent instruction files | 9 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | What is Continue? / Documentation / Final 2.0.0 Release / VS Code / CLI / JetBrains / Contributors / Code friends / License | <h1 align="center" Continue</h1 <p align="center" Pioneering open source coding agent</p <div align="center" <a href="https //opensource.org/licenses/Apache 2.0" <img src="https //img.shields.io/badge/License Apache 2.0 blue.svg" / </a <a href="https //docs.continue.dev" <img src="https //img.shields.io/badge/Docs docs.continue.dev blue" / </a <a href="https //github.com/continuedev/continue/releases" <img src="https //img.shields.io/badge/Changelog GitHub Releases blue" / </a </div <p align="center" <img src="media/github readme.png" alt="Banner" / </p What is Continue? Note The continuedev/continue repository is no longer actively maintained and is read only for all users. Continue is a co |


## Key Files

### Manifests

- docs/README.md
- extensions/cli/src/test-helpers/README.md
- extensions/cli/src/ui/__tests__/README.md
- extensions/cli/README.md
- extensions/cli/src/permissions/README.md
- packages/llm-info/README.md
- extensions/cli/AGENTS.md
- actions/README.md
- binary/README.md
- core/diff/test-examples/README.md
- gui/README.md
- README.md
- core/indexing/README.md
- core/nextEdit/README.md
- core/vendor/modules/@xenova/transformers/README.md
- core/vendor/README.md
- extensions/intellij/README.md
- extensions/vscode/e2e/README.md
- extensions/vscode/models/all-MiniLM-L6-v2/README.md
- extensions/vscode/models/README.md


### Spec / Docs / Prompt Artifacts

- extensions/cli/AGENTS.md
- manual-testing-sandbox/requirements.txt
- .continue/prompts/core-unit-test.prompt
- extensions/cli/spec/config-loading.md
- extensions/cli/spec/ctrl-c-behavior.md
- extensions/cli/spec/index.md
- extensions/cli/spec/mcp.md
- extensions/cli/spec/modes.md
- extensions/cli/spec/onboarding.md
- extensions/cli/spec/otlp-metrics.md
- extensions/cli/spec/permissions.md
- extensions/cli/spec/shell-mode.md
- extensions/cli/spec/testing-strategies.md
- extensions/cli/spec/tty-less-support.md
- extensions/cli/spec/tui.md
- extensions/cli/spec/wire-format.md
- .continue/prompts/sub-agent-background.md
- .continue/prompts/sub-agent-foreground.md
- .continue/prompts/update-llm-info.prompt
- gui/src/components/mainInput/TipTapEditor/extensions/Prompt/PromptBlock.ts


### Agent Instruction Files

- extensions/cli/AGENTS.md
- .continue/prompts/core-unit-test.prompt
- .continue/prompts/sub-agent-background.md
- .continue/prompts/sub-agent-foreground.md
- .continue/prompts/update-llm-info.prompt
- gui/src/components/mainInput/TipTapEditor/extensions/Prompt/PromptBlock.ts
- gui/src/components/mainInput/TipTapEditor/extensions/Prompt/PromptBlockPreview.tsx
- packages/config-yaml/src/__tests__/packages/test-org/gemini.yaml
- .claude/skills/docs-style/SKILL.md


## Top Directories

| dir | count |
| --- | --- |
| extensions | 843 |
| core | 710 |
| gui | 406 |
| packages | 339 |
| docs | 170 |
| manual-testing-sandbox | 49 |
| .github | 46 |
| .continue | 41 |
| docs-site | 39 |
| binary | 27 |
| .idea | 16 |
| sync | 12 |
| scripts | 8 |
| .vscode | 4 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 1432 |
| .tsx | 351 |
| .mdx | 152 |
| .json | 126 |
| .md | 126 |
| .kt | 86 |
| .scm | 68 |
| .js | 64 |
| .py | 51 |
| [no-ext] | 44 |
| .yml | 36 |
| .xml | 31 |
| .yaml | 28 |
| .diff | 18 |
| .txt | 15 |
| .tmlanguage | 14 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
