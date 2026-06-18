# getsentry/XcodeBuildMCP

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/getsentry/XcodeBuildMCP |
| local path | sources/getsentry__XcodeBuildMCP |
| HEAD | 5127139 |
| stars/forks | 5921 / 294 |
| language | TypeScript |
| license |  |
| pushedAt | 2026-06-17T16:02:56Z |
| trendScore / priorityScore | 177 / 469 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| MCP / agent interoperability | 263 | benchmarks/claude-ui/README.md, AGENTS.md, example_projects/iOS_Calculator/AGENTS.md |
| Developer tools / DX | 238 | benchmarks/claude-ui/README.md, AGENTS.md, example_projects/Weather/README.md |
| Observability / evaluation | 131 | benchmarks/claude-ui/README.md, README.md, package.json |
| AI agent / orchestration | 36 | benchmarks/claude-ui/README.md, example_projects/iOS_Calculator/AGENTS.md, example_projects/Weather/AGENTS.md |
| Security / supply chain | 21 | README.md, .cursor/BUGBOT.md, SECURITY.md |
| Coding agent / software automation | 13 | benchmarks/claude-ui/README.md, README.md, src/cli/commands/__tests__/init.test.ts |
| Data / ML platform | 12 | src/mcp/tools/device/__tests__/build_run_device.test.ts, src/mcp/tools/device/test_device.ts, src/mcp/tools/macos/test_macos.ts |
| Cloud native / infrastructure | 8 | src/mcp/tools/simulator/__tests__/launch_app_sim.test.ts |
| RAG / retrieval / knowledge | 5 | src/mcp/resources/__tests__/devices.test.ts, src/mcp/resources/__tests__/doctor.test.ts, src/mcp/resources/__tests__/simulators.test.ts |
| Local LLM / inference | 3 | src/mcp/tools/device/__tests__/install_app_device.test.ts, src/mcp/tools/device/__tests__/launch_app_device.test.ts, src/mcp/tools/device/__tests__/stop_app_device.test.ts |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, devtools, frontendStack, infra, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling |
| stacks | Node/TypeScript/JavaScript, Python, Swift |
| capabilities | LLM/app framework, Security tooling, Frontend stack |


## Structure Summary

| key | value |
| --- | --- |
| files | 1579 |
| manifests | 17 |
| docs | 35 |
| tests | 250 |
| ci/ops | 9 |
| spec artifacts | 11 |
| agent instruction files | 10 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md | Install globally | Installation / Option A — Homebrew / Option B — npm (Node.js 18+) / Connect your MCP client / Requirements / Skills / Notes / Privacy / CLI / Install globally | <img src="assets/banner.png" alt="XcodeBuild MCP" width="600"/ A Model Context Protocol MCP server and CLI that provides tools for agent use when working on iOS and macOS projects. ! CI https //github.com/getsentry/XcodeBuildMCP/actions/workflows/ci.yml/badge.svg https //github.com/getsentry/XcodeBuildMCP/actions/workflows/ci.yml ! npm version https //badge.fury.io/js/xcodebuildmcp.svg https //badge.fury.io/js/xcodebuildmcp ! License MIT https //img.shields.io/badge/License MIT yellow.svg https //opensource.org/licenses/MIT ! Node.js https //img.shields.io/badge/node =18.x brightgreen.svg https //nodejs.org/ ! Xcode 16 https //img.shields.io/badge/Xcode 16 blue.svg https //developer.apple.co |


## Key Files

### Manifests

- .github/workflows/README.md
- benchmarks/claude-ui/README.md
- AGENTS.md
- example_projects/iOS_Calculator/AGENTS.md
- example_projects/Weather/AGENTS.md
- example_projects/Weather/README.md
- README.md
- CLAUDE.md
- package.json
- tsconfig.json
- tsconfig.benchmarks.json
- tsconfig.test.json
- tsconfig.tests.json
- example_projects/iOS_Calculator/CalculatorAppPackage/Package.swift
- example_projects/spm/Package.resolved
- example_projects/spm/Package.swift
- tsconfig.build.json


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- example_projects/iOS_Calculator/AGENTS.md
- example_projects/Weather/AGENTS.md
- CLAUDE.md
- benchmarks/claude-ui/prompts/contacts.md
- benchmarks/claude-ui/prompts/reminders.md
- benchmarks/claude-ui/prompts/weather.md
- .cursor/BUGBOT.md
- .cursor/environment.json
- example_projects/iOS/.cursor/rules/errors.mdc
- .vscode/tasks.json


### Agent Instruction Files

- AGENTS.md
- example_projects/iOS_Calculator/AGENTS.md
- example_projects/Weather/AGENTS.md
- CLAUDE.md
- benchmarks/claude-ui/prompts/contacts.md
- benchmarks/claude-ui/prompts/reminders.md
- benchmarks/claude-ui/prompts/weather.md
- .cursor/BUGBOT.md
- .cursor/environment.json
- example_projects/iOS/.cursor/rules/errors.mdc


## Top Directories

| dir | count |
| --- | --- |
| src | 1200 |
| example_projects | 106 |
| manifests | 102 |
| schemas | 69 |
| .agents | 25 |
| scripts | 14 |
| .github | 12 |
| benchmarks | 10 |
| .vscode | 5 |
| .cursor | 2 |
| skills | 2 |
| .axe-version | 1 |
| .githooks | 1 |
| .gitignore | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .ts | 592 |
| .json | 414 |
| .txt | 309 |
| .yaml | 109 |
| .swift | 54 |
| .md | 35 |
| .yml | 14 |
| .py | 9 |
| [no-ext] | 9 |
| .mjs | 6 |
| .sh | 5 |
| .js | 4 |
| .pbxproj | 4 |
| .xcconfig | 4 |
| .xcscheme | 4 |
| .code-workspace | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
