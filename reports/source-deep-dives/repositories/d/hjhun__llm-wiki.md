# hjhun/llm-wiki Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

hjhun/llm-wiki

## 요약

- 조사 단위: `sources/hjhun__llm-wiki` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 349 files, 157 directories, depth score 116, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=llm-wiki.md, wiki/index.md, wiki/log.md이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | hjhun/llm-wiki |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | none |
| Forks | none |
| License | Apache-2.0 |
| Maturity | emerging |
| Evidence | source+report |
| Source | [sources/hjhun__llm-wiki](../../../../sources/hjhun__llm-wiki) |
| Existing report | [reports/korea-trending/repositories/hjhun__llm-wiki.md](../../../korea-trending/repositories/hjhun__llm-wiki.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 349 / 157 |
| Max observed depth | 8 |
| Top directories | .agents, .github, cli-rs, clio-skill, config, docs, examples, plans, raw, scripts, systemd, tools, webapp, wiki |
| Top extensions | .ts: 194, .tsx: 49, .md: 48, .rs: 15, .mjs: 11, .sh: 10, .json: 7, (none): 6, .yml: 3, .svg: 2, .css: 1, .lock: 1 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| cli-rs | top-level component | 1 |
| clio-skill | top-level component | 1 |
| config | top-level component | 1 |
| examples | top-level component | 1 |
| examples/mini-wiki | examples workspace | 1 |
| plans | top-level component | 1 |
| raw | top-level component | 1 |
| scripts | top-level component | 1 |
| systemd | top-level component | 1 |
| tools | top-level component | 1 |
| webapp | source boundary | 1 |
| wiki | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [llm-wiki.md](../../../../sources/hjhun__llm-wiki/llm-wiki.md) | retrieval signal |
| retrieval | [wiki/index.md](../../../../sources/hjhun__llm-wiki/wiki/index.md) | retrieval signal |
| retrieval | [wiki/log.md](../../../../sources/hjhun__llm-wiki/wiki/log.md) | retrieval signal |
| retrieval | [wiki/sources/index.md](../../../../sources/hjhun__llm-wiki/wiki/sources/index.md) | retrieval signal |
| entrypoints | [cli-rs/src/main.rs](../../../../sources/hjhun__llm-wiki/cli-rs/src/main.rs) | entrypoints signal |
| entrypoints | [cli-rs/src/commands/server.rs](../../../../sources/hjhun__llm-wiki/cli-rs/src/commands/server.rs) | entrypoints signal |
| docs | [README.md](../../../../sources/hjhun__llm-wiki/README.md) | docs signal |
| docs | [webapp/README.md](../../../../sources/hjhun__llm-wiki/webapp/README.md) | docs signal |
| docs | [tools/README.md](../../../../sources/hjhun__llm-wiki/tools/README.md) | docs signal |
| docs | [examples/mini-wiki/README.md](../../../../sources/hjhun__llm-wiki/examples/mini-wiki/README.md) | docs signal |
| eval | [webapp/test/stubs/server-only.ts](../../../../sources/hjhun__llm-wiki/webapp/test/stubs/server-only.ts) | eval signal |
| eval | [webapp/lib/agent-roles.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/agent-roles.test.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 2 | [cli-rs/src/main.rs](../../../../sources/hjhun__llm-wiki/cli-rs/src/main.rs)<br>[cli-rs/src/commands/server.rs](../../../../sources/hjhun__llm-wiki/cli-rs/src/commands/server.rs) |
| agentRuntime | 29 | [AGENTS.md](../../../../sources/hjhun__llm-wiki/AGENTS.md)<br>[webapp/lib/agent-roles.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/agent-roles.test.ts)<br>[webapp/lib/agent-roles.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/agent-roles.ts)<br>[webapp/lib/automation/runner.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/automation/runner.ts)<br>[webapp/lib/automation/tools.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/automation/tools.ts)<br>[webapp/components/agent-panel/AgentEdgePanel.tsx](../../../../sources/hjhun__llm-wiki/webapp/components/agent-panel/AgentEdgePanel.tsx)<br>[webapp/components/agent-panel/AgentMascot.tsx](../../../../sources/hjhun__llm-wiki/webapp/components/agent-panel/AgentMascot.tsx)<br>[webapp/components/agent-panel/useRunningJobs.ts](../../../../sources/hjhun__llm-wiki/webapp/components/agent-panel/useRunningJobs.ts) |
| mcp | 0 | not obvious |
| retrieval | 74 | [llm-wiki.md](../../../../sources/hjhun__llm-wiki/llm-wiki.md)<br>[wiki/index.md](../../../../sources/hjhun__llm-wiki/wiki/index.md)<br>[wiki/log.md](../../../../sources/hjhun__llm-wiki/wiki/log.md)<br>[wiki/sources/index.md](../../../../sources/hjhun__llm-wiki/wiki/sources/index.md)<br>[wiki/maps/index.md](../../../../sources/hjhun__llm-wiki/wiki/maps/index.md)<br>[wiki/.progress/ingest/.state.json](../../../../sources/hjhun__llm-wiki/wiki/.progress/ingest/.state.json)<br>[wiki/.progress/ingest/DASHBOARD.md](../../../../sources/hjhun__llm-wiki/wiki/.progress/ingest/DASHBOARD.md)<br>[wiki/.progress/ingest/leaves/.gitkeep](../../../../sources/hjhun__llm-wiki/wiki/.progress/ingest/leaves/.gitkeep) |
| spec | 1 | [.agents/skills/code-architecture/SKILL.md](../../../../sources/hjhun__llm-wiki/.agents/skills/code-architecture/SKILL.md) |
| eval | 46 | [webapp/test/stubs/server-only.ts](../../../../sources/hjhun__llm-wiki/webapp/test/stubs/server-only.ts)<br>[webapp/lib/agent-roles.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/agent-roles.test.ts)<br>[webapp/lib/answer-secret-sweep.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-secret-sweep.test.ts)<br>[webapp/lib/answer-sources.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-sources.test.ts)<br>[webapp/lib/cli-cline-task.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/cli-cline-task.test.ts)<br>[webapp/lib/cli-codex-json.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/cli-codex-json.test.ts)<br>[webapp/lib/cli-session.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/cli-session.test.ts)<br>[webapp/lib/cli-stream-json.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/cli-stream-json.test.ts) |
| security | 8 | [webapp/lib/answer-secret-sweep.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-secret-sweep.test.ts)<br>[webapp/lib/answer-secret-sweep.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-secret-sweep.ts)<br>[webapp/lib/auth.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/auth.ts)<br>[webapp/lib/secret-scan.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/secret-scan.test.ts)<br>[webapp/lib/secret-scan.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/secret-scan.ts)<br>[webapp/app/api/auth/setup/route.ts](../../../../sources/hjhun__llm-wiki/webapp/app/api/auth/setup/route.ts)<br>[webapp/app/api/auth/logout/route.ts](../../../../sources/hjhun__llm-wiki/webapp/app/api/auth/logout/route.ts)<br>[webapp/app/api/auth/login/route.ts](../../../../sources/hjhun__llm-wiki/webapp/app/api/auth/login/route.ts) |
| ci | 3 | [.github/workflows/cli.yml](../../../../sources/hjhun__llm-wiki/.github/workflows/cli.yml)<br>[.github/workflows/release.yml](../../../../sources/hjhun__llm-wiki/.github/workflows/release.yml)<br>[.github/workflows/webapp.yml](../../../../sources/hjhun__llm-wiki/.github/workflows/webapp.yml) |
| container | 0 | not obvious |
| instruction | 2 | [AGENTS.md](../../../../sources/hjhun__llm-wiki/AGENTS.md)<br>[CLAUDE.md](../../../../sources/hjhun__llm-wiki/CLAUDE.md) |
| docs | 9 | [README.md](../../../../sources/hjhun__llm-wiki/README.md)<br>[webapp/README.md](../../../../sources/hjhun__llm-wiki/webapp/README.md)<br>[tools/README.md](../../../../sources/hjhun__llm-wiki/tools/README.md)<br>[examples/mini-wiki/README.md](../../../../sources/hjhun__llm-wiki/examples/mini-wiki/README.md)<br>[docs/GUIDE_ko.md](../../../../sources/hjhun__llm-wiki/docs/GUIDE_ko.md)<br>[docs/GUIDE.md](../../../../sources/hjhun__llm-wiki/docs/GUIDE.md)<br>[docs/svg/clio.svg](../../../../sources/hjhun__llm-wiki/docs/svg/clio.svg)<br>[clio-skill/README.md](../../../../sources/hjhun__llm-wiki/clio-skill/README.md) |
| config | 4 | [webapp/package.json](../../../../sources/hjhun__llm-wiki/webapp/package.json)<br>[webapp/tsconfig.json](../../../../sources/hjhun__llm-wiki/webapp/tsconfig.json)<br>[cli-rs/Cargo.lock](../../../../sources/hjhun__llm-wiki/cli-rs/Cargo.lock)<br>[cli-rs/Cargo.toml](../../../../sources/hjhun__llm-wiki/cli-rs/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 46 | [webapp/test/stubs/server-only.ts](../../../../sources/hjhun__llm-wiki/webapp/test/stubs/server-only.ts)<br>[webapp/lib/agent-roles.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/agent-roles.test.ts)<br>[webapp/lib/answer-secret-sweep.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-secret-sweep.test.ts)<br>[webapp/lib/answer-sources.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-sources.test.ts)<br>[webapp/lib/cli-cline-task.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/cli-cline-task.test.ts)<br>[webapp/lib/cli-codex-json.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/cli-codex-json.test.ts) |
| CI workflows | 3 | [.github/workflows/cli.yml](../../../../sources/hjhun__llm-wiki/.github/workflows/cli.yml)<br>[.github/workflows/release.yml](../../../../sources/hjhun__llm-wiki/.github/workflows/release.yml)<br>[.github/workflows/webapp.yml](../../../../sources/hjhun__llm-wiki/.github/workflows/webapp.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 8 | [webapp/lib/answer-secret-sweep.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-secret-sweep.test.ts)<br>[webapp/lib/answer-secret-sweep.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/answer-secret-sweep.ts)<br>[webapp/lib/auth.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/auth.ts)<br>[webapp/lib/secret-scan.test.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/secret-scan.test.ts)<br>[webapp/lib/secret-scan.ts](../../../../sources/hjhun__llm-wiki/webapp/lib/secret-scan.ts)<br>[webapp/app/api/auth/setup/route.ts](../../../../sources/hjhun__llm-wiki/webapp/app/api/auth/setup/route.ts) |
| Agent instructions | 2 | [AGENTS.md](../../../../sources/hjhun__llm-wiki/AGENTS.md)<br>[CLAUDE.md](../../../../sources/hjhun__llm-wiki/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `llm-wiki.md`, `wiki/index.md`, `wiki/log.md`.
2. Trace execution through entrypoints: `cli-rs/src/main.rs`, `cli-rs/src/commands/server.rs`.
3. Map agent/tool runtime through: `AGENTS.md`, `webapp/lib/agent-roles.test.ts`, `webapp/lib/agent-roles.ts`.
4. Inspect retrieval/memory/indexing through: `llm-wiki.md`, `wiki/index.md`, `wiki/log.md`.
5. Verify behavior through test/eval files: `webapp/test/stubs/server-only.ts`, `webapp/lib/agent-roles.test.ts`, `webapp/lib/answer-secret-sweep.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 설명 메타데이터가 짧습니다. 핵심 구조 신호는 TypeScript, README.md, AGENTS.md, CLAUDE.md, LICENSE, ci이며, source+report 근거 수준으로 emerging 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 test signal not obvious, needs deeper structural scan입니다.
