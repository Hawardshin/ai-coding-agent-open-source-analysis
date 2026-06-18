# stablyai/orca

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/stablyai/orca |
| local path | sources/stablyai__orca |
| HEAD | 3eb0dbd |
| stars/forks | 5221 / 368 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-18T00:07:22Z |
| trendScore / priorityScore | 157 / 464 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| Developer tools / DX | 500 | AGENTS.md, mobile/README.md, README.md |
| AI agent / orchestration | 474 | docs/reference/README.md, AGENTS.md, tests/e2e/AGENTS.md |
| Coding agent / software automation | 467 | mobile/README.md, README.md, package.json |
| Frontend / app framework | 70 | AGENTS.md, tests/e2e/AGENTS.md, mobile/README.md |
| Security / supply chain | 31 | README.md, src/main/agent-auth-restart-preservation.test.ts, src/main/jira/client.test.ts |
| Observability / evaluation | 13 | package.json, src/cli/specs/browser-basic.ts, src/cli/specs/core.ts |
| Data / ML platform | 12 | docs/reference/agent-session-resume-cli-evidence.md, src/main/agent-hooks/opencode-message-part-flood-bench.test.ts, src/main/gitlab/client-mr.test.ts |
| Cloud native / infrastructure | 8 | package.json, src/main/browser/agent-browser-bridge.test.ts, src/main/jira/client.test.ts |
| MCP / agent interoperability | 5 | AGENTS.md, tests/e2e/AGENTS.md, CLAUDE.md |
| Database / data infrastructure | 3 | docs/reference/README.md |
| Local LLM / inference | 1 | mobile/README.md |
| RAG / retrieval / knowledge | 1 | src/main/github/client-pr-checks.test.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, devtools, frontend, frontendStack, infra, infraOps, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Java/Kotlin, Swift, Ruby |
| capabilities | LLM/app framework, Infra/Ops, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 5391 |
| manifests | 22 |
| docs | 39 |
| tests | 2000 |
| ci/ops | 14 |
| spec artifacts | 18 |
| agent instruction files | 3 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | macOS (Homebrew) | Features / Mobile Companion / Parallel Worktrees / Terminal Splits / Design Mode / GitHub &amp; Linear, Native / SSH Worktrees / Annotate AI Diffs / Drag Files to Agents / Orca CLI | <h1 align="center" <a href="https //onOrca.dev" <img src="resources/build/icon.png" alt="Orca" width="64" valign="middle" / </a Orca </h1 <p align="center" <a href="https //github.com/stablyai/orca/stargazers" <img src="https //badgen.net/github/stars/stablyai/orca?label=%E2%98%85" alt="GitHub stars" / </a <a href="https //github.com/stablyai/orca/releases" <img src="docs/assets/readme downloads.svg" alt="Total downloads across all releases" / </a <img src="https //badgen.net/github/license/stablyai/orca" alt="License" / <a href="https //discord.gg/fzjDKHxv8Q" <img src="https //img.shields.io/badge/Discord 5865F2?logo=discord&logoColor=white" alt="Join the Orca Discord" / </a <img src="https |


## Key Files

### Manifests

- docs/reference/README.md
- AGENTS.md
- tests/e2e/AGENTS.md
- mobile/README.md
- README.md
- src/main/providers/__tests__/shell-ready-framework/README.md
- mobile/packages/expo-two-way-audio/README.md
- CLAUDE.md
- mobile/package.json
- mobile/tsconfig.json
- package.json
- tsconfig.json
- mobile/packages/expo-two-way-audio/android/build.gradle
- mobile/packages/expo-two-way-audio/package.json
- mobile/packages/expo-two-way-audio/tsconfig.json
- config/tsconfig.cli.json
- config/tsconfig.tc.cli.json
- config/tsconfig.node.json
- config/tsconfig.relay.json
- config/tsconfig.tc.web.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- tests/e2e/AGENTS.md
- CLAUDE.md
- src/cli/specs/agent-hooks.ts
- src/cli/specs/automations.ts
- src/cli/specs/browser-advanced.ts
- src/cli/specs/browser-basic.ts
- src/cli/specs/computer.test.ts
- src/cli/specs/computer.ts
- src/cli/specs/core.ts
- src/cli/specs/diagnostics.ts
- src/cli/specs/emulator.ts
- src/cli/specs/environment.ts
- src/cli/specs/file.ts
- src/cli/specs/index.ts
- src/cli/specs/linear.ts
- src/cli/specs/orchestration.ts
- src/cli/specs/project.ts


### Agent Instruction Files

- AGENTS.md
- tests/e2e/AGENTS.md
- CLAUDE.md


## Top Directories

| dir | count |
| --- | --- |
| src | 4714 |
| mobile | 326 |
| tests | 118 |
| config | 109 |
| resources | 34 |
| .github | 21 |
| docs | 19 |
| native | 17 |
| tools | 7 |
| skills | 5 |
| Casks | 2 |
| notes | 2 |
| .gitattributes | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 4150 |
| .tsx | 955 |
| .mjs | 96 |
| .json | 43 |
| .md | 36 |
| .swift | 18 |
| .yml | 17 |
| [no-ext] | 16 |
| .mp3 | 9 |
| .svg | 7 |
| .css | 5 |
| .yaml | 5 |
| .cjs | 4 |
| .html | 4 |
| .kt | 4 |
| .sh | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
