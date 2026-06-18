# osaurus-ai/osaurus

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/osaurus-ai/osaurus |
| local path | sources/osaurus-ai__osaurus |
| HEAD | 9124d69 |
| stars/forks | 5927 / 335 |
| language | Swift |
| license |  |
| pushedAt | 2026-06-17T22:38:37Z |
| trendScore / priorityScore | 170 / 492 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 500 | docs/plugins/README.md, Packages/OsaurusEvals/README.md, Packages/OsaurusEvals/Suites/SandboxFrontier/README.md |
| Security / supply chain | 283 | Packages/OsaurusEvals/Suites/SandboxFrontier/README.md, README.md, Packages/OsaurusCore/SQLCipher/README.md |
| MCP / agent interoperability | 237 | AGENTS.md, README.md, docs/GEMMA4_CHECKPOINT_MEMORY_SAFETY_SPEC_2026_06_11.md |
| Local LLM / inference | 148 | Packages/OsaurusEvals/README.md, AGENTS.md, README.md |
| Developer tools / DX | 123 | Packages/OsaurusEvals/README.md, Packages/OsaurusEvals/Suites/SandboxFrontier/README.md, AGENTS.md |
| Cloud native / infrastructure | 122 | Packages/OsaurusEvals/Suites/SandboxFrontier/README.md, docs/REMOTE_MCP_PROVIDERS.md, docs/SECURITY.md |
| Database / data infrastructure | 103 | docs/plugins/README.md, Packages/OsaurusEvals/README.md, README.md |
| Observability / evaluation | 77 | Packages/OsaurusEvals/README.md, Packages/OsaurusEvals/Suites/SandboxFrontier/README.md, AGENTS.md |
| Data / ML platform | 53 | AGENTS.md, docs/GEMMA4_CHECKPOINT_MEMORY_SAFETY_SPEC_2026_06_11.md, docs/LING_JANGTQ2_LONG_PROMPT_CRASH.md |
| RAG / retrieval / knowledge | 25 | README.md, docs/MEMORY.md, docs/REMOTE_MCP_PROVIDERS.md |
| Coding agent / software automation | 19 | AGENTS.md, docs/GEMMA4_CHECKPOINT_MEMORY_SAFETY_SPEC_2026_06_11.md, docs/REDUCTION_SUBAGENT.md |
| Frontend / app framework | 2 | docs/plugins/README.md, docs/WATCHERS.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, sdk-api, security, securityTooling, vectorSearch |
| stacks | Python, Swift, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 1558 |
| manifests | 18 |
| docs | 90 |
| tests | 415 |
| ci/ops | 7 |
| spec artifacts | 2 |
| agent instruction files | 2 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | Inference is all you need. Everything else can be owned by you. / Install / Agents / Agent Loop / Sandbox / Memory / Privacy Filter / Identity / Relay / Secure Channel | <p align="center" <img width="1920" height="1080" alt="osaurus techcrunch 1" src="https //github.com/user attachments/assets/d7905005 71fe 41ba b69f e8968af29b5c" / </p <h1 align="center" Osaurus</h1 <p align="center" <strong Own your AI.</strong <br Agents, memory, tools, and identity that live on your Mac. Built purely in Swift. Fully offline. Open source. </p <p align="center" <a href="https //github.com/osaurus ai/osaurus/releases/latest" <img src="https //img.shields.io/github/v/release/osaurus ai/osaurus?sort=semver" alt="Release" </a <a href="https //github.com/osaurus ai/osaurus/releases" <img src="https //img.shields.io/github/downloads/osaurus ai/osaurus/total" alt="Downloads" </a |


## Key Files

### Manifests

- docs/plugins/README.md
- Packages/OsaurusEvals/README.md
- Packages/OsaurusEvals/Suites/SandboxFrontier/README.md
- AGENTS.md
- Packages/OsaurusPluginTestKit/README.md
- README.md
- Packages/OsaurusCore/SQLCipher/README.md
- Packages/OsaurusPlugins/StatsPack/README.md
- Makefile
- sandbox/Dockerfile
- Packages/OsaurusCLI/Package.swift
- Packages/OsaurusEvals/Package.swift
- Packages/OsaurusPluginTestKit/Package.swift
- App/osaurus.xcodeproj/project.xcworkspace/xcshareddata/swiftpm/Package.resolved
- osaurus.xcworkspace/xcshareddata/swiftpm/Package.resolved
- Packages/OsaurusCore/Package.swift
- Packages/OsaurusPlugins/StatsPack/Package.swift
- Packages/OsaurusRepository/Package.swift


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- .cursor/settings.json


### Agent Instruction Files

- AGENTS.md
- .cursor/settings.json


## Top Directories

| dir | count |
| --- | --- |
| Packages | 1355 |
| docs | 76 |
| scripts | 68 |
| App | 29 |
| .github | 11 |
| osaurus.xcworkspace | 5 |
| reports | 2 |
| .cursor | 1 |
| .gitattributes | 1 |
| .gitignore | 1 |
| .swift-format | 1 |
| .swiftlint.yml | 1 |
| AGENTS.md | 1 |
| assets | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .swift | 1215 |
| .json | 144 |
| .md | 88 |
| .sh | 38 |
| .py | 20 |
| .yml | 12 |
| [no-ext] | 8 |
| .svg | 6 |
| .h | 4 |
| .txt | 3 |
| .xcscheme | 3 |
| .entitlements | 2 |
| .resolved | 2 |
| .xcstrings | 2 |
| .xcworkspacedata | 2 |
| .c | 1 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
