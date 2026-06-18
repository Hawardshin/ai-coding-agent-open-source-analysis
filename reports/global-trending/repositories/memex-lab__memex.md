# memex-lab/memex

Generated: 2026-06-18T00:37:41.085Z

## Basic Info

| key | value |
| --- | --- |
| GitHub | https://github.com/memex-lab/memex |
| local path | sources/memex-lab__memex |
| HEAD | c2d2349 |
| stars/forks | 487 / 47 |
| language | Dart |
| license |  |
| pushedAt | 2026-06-17T21:08:41Z |
| trendScore / priorityScore | 139 / 402 |


## Interpretation

- Coding-agent/source-scan 흐름과 직접 연결되는 후보라 Codex/Claude Code류 비교에 중요하다.
- MCP 또는 agent interoperability 표면이 있어 도구 연결 표준 흐름을 확인하기 좋다.
- RAG/search/knowledge-base 신호가 있어 retrieval 및 장기 컨텍스트 패턴 비교 대상이다.
- 로컬 LLM/추론 신호가 있어 self-hosted/edge inference 트렌드와 연결된다.
- cloud-native/infra 신호가 있어 AI 시스템 운영 기반으로 볼 수 있다.


## Detected Trend Signals

| signal | matches | evidence |
| --- | --- | --- |
| AI agent / orchestration | 374 | AGENTS.md, README.md, CLAUDE.md |
| Observability / evaluation | 160 | docs/companion-prompt-research-report.md, docs/memex-evaluation-framework.md, test/agent/eval/card_agent/suites/capability/tasks/positive/event_meeting_with_time/task.json |
| Security / supply chain | 19 | README.md, CLAUDE.md, docs/memex-evaluation-framework.md |
| Database / data infrastructure | 16 | AGENTS.md, README.md, CLAUDE.md |
| Data / ML platform | 10 | AGENTS.md, docs/memex-evaluation-framework.md, docs/pr-ai-review.en.md |
| MCP / agent interoperability | 10 | CLAUDE.md, GEMINI.md, .github/copilot-instructions.md |
| RAG / retrieval / knowledge | 9 | README.md, docs/memex-evaluation-framework.md |
| Cloud native / infrastructure | 8 | docs/pr-ai-review.en.md, docs/pr-ai-review.zh.md, docs/pr-policy-preflight.en.md |
| Coding agent / software automation | 8 | AGENTS.md, CLAUDE.md, docs/pr-ai-review.en.md |
| Local LLM / inference | 6 | AGENTS.md, README.md, CLAUDE.md |
| Frontend / app framework | 5 | AGENTS.md, README.md, docs/companion-prompt-research-report.md |
| Developer tools / DX | 1 | README.md |


## Categories And Stack

| key | value |
| --- | --- |
| categories | ai-agent, coding-agent, data-ml, database, databaseRuntime, devtools, frontend, frontendStack, infra, infraOps, llm-app, llmFramework, local-llm, mcp, observability, rag, security, securityTooling, vectorSearch |
| stacks | Python, Java/Kotlin, Swift, C/C++ |
| capabilities | LLM/app framework, Vector/search store, Infra/Ops, Security tooling, Frontend stack, Database/runtime |


## Structure Summary

| key | value |
| --- | --- |
| files | 912 |
| manifests | 6 |
| docs | 129 |
| tests | 339 |
| ci/ops | 6 |
| spec artifacts | 50 |
| agent instruction files | 5 |


## README Signal

| file | title | headings | excerpt |
| --- | --- | --- | --- |
| README.md |  | What is Memex? / Features / 🤖 AI-Powered Organization / 💡 Knowledge & Insights / 🤝 AI Companion / 📝 Pure Text & Data Freedom / 🔒 Privacy & Local-First / 📂 Storage & Backup / 🔗 Multi-LLM Provider Support / Install | <p align="center" <picture <img src="brand.png" / </picture </p <p align="center" An open source, local first AI journal. Not for writing daily entries — for capturing life in fragments and letting AI organize them. </p <p align="center" <a href="README.md" English</a <a href="README CN.md" 简体中文</a </p <p align="center" <a href="https //github.com/memex lab/memex/releases" <img src="https //img.shields.io/github/v/release/memex lab/memex?style=flat square&label=release" alt="Release" </a <a href="LICENSE" <img src="https //img.shields.io/badge/license GPL 3.0 blue?style=flat square" alt="License" </a <a href="https //github.com/memex lab/memex/stargazers" <img src="https //img.shields.io/git |


## Key Files

### Manifests

- AGENTS.md
- README.md
- CLAUDE.md
- GEMINI.md
- android/build.gradle.kts
- android/app/build.gradle.kts


### Spec / Docs / Prompt Artifacts

- AGENTS.md
- CLAUDE.md
- GEMINI.md
- .github/copilot-instructions.md
- test/agent/eval/card_agent/suites/capability/tasks/ambiguous/amb_event_or_task/task.json
- test/agent/eval/card_agent/suites/capability/tasks/ambiguous/amb_mood_or_metric/task.json
- test/agent/eval/card_agent/suites/capability/tasks/ambiguous/amb_multi_ts_same_day/task.json
- test/agent/eval/card_agent/suites/capability/tasks/negative/neg_empty_text/task.json
- test/agent/eval/card_agent/suites/capability/tasks/negative/neg_pure_punctuation/task.json
- test/agent/eval/card_agent/suites/capability/tasks/negative/neg_single_emoji/task.json
- test/agent/eval/card_agent/suites/capability/tasks/positive/event_future_dinner/task.json
- test/agent/eval/card_agent/suites/capability/tasks/positive/event_meeting_with_time/task.json
- test/agent/eval/card_agent/suites/capability/tasks/positive/event_multi_day/task.json
- test/agent/eval/card_agent/suites/capability/tasks/positive/link_bookmark_short/task.json
- test/agent/eval/card_agent/suites/capability/tasks/positive/link_url_with_blurb/task.json
- test/agent/eval/card_agent/suites/capability/tasks/positive/metric_sleep_hours/task.json
- test/agent/eval/card_agent/suites/capability/tasks/positive/metric_weight_reading/task.json
- test/agent/eval/card_agent/suites/capability/tasks/positive/mood_mixed_with_reason/task.json
- test/agent/eval/card_agent/suites/capability/tasks/positive/mood_short_one_liner/task.json
- test/agent/eval/card_agent/suites/capability/tasks/positive/person_met_someone_new/task.json


### Agent Instruction Files

- AGENTS.md
- CLAUDE.md
- GEMINI.md
- .github/copilot-instructions.md
- .cursor/rules/memex.mdc


## Top Directories

| dir | count |
| --- | --- |
| lib | 405 |
| test | 329 |
| ios | 50 |
| android | 42 |
| assets | 23 |
| .github | 18 |
| docs | 8 |
| tests | 8 |
| scripts | 7 |
| .cursor | 1 |
| .gitignore | 1 |
| .metadata | 1 |
| .windsurf | 1 |
| AGENTS.md | 1 |


## Extension Distribution

| ext | count |
| --- | --- |
| .dart | 526 |
| .md | 129 |
| .json | 63 |
| .yaml | 43 |
| .xml | 22 |
| .svg | 21 |
| .py | 15 |
| .yml | 13 |
| .kt | 12 |
| .swift | 11 |
| [no-ext] | 11 |
| .plist | 5 |
| .h | 4 |
| .xcconfig | 4 |
| .kts | 3 |
| .m | 3 |


## Next Deep-Dive Points

- Trace README and manifest entrypoints before judging runtime quality.
- Use evidence files to follow agent/MCP/RAG/security/infra flows in code.
- For projects with AGENTS/CLAUDE/spec artifacts, compare how repository instructions constrain agent behavior.
