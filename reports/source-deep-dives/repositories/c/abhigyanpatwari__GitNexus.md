# abhigyanpatwari/GitNexus Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a git repository (Github, Gitlab, Azure, Local) or ZIP file, and get an interactive knowledge graph with a built in Graph RAG Agent. Perfect for code exploration

## 요약

- 조사 단위: `sources/abhigyanpatwari__GitNexus` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 3,827 files, 1,719 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=.mcp.json, gitnexus-claude-plugin/.mcp.json, gitnexus-claude-plugin/skills/gitnexus-refactoring/mcp.json이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | abhigyanpatwari/GitNexus |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 42383 |
| Forks | 4795 |
| License | NOASSERTION |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/abhigyanpatwari__GitNexus](../../../../sources/abhigyanpatwari__GitNexus) |
| Existing report | [reports/global-trending/repositories/abhigyanpatwari__GitNexus.md](../../../global-trending/repositories/abhigyanpatwari__GitNexus.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 3827 / 1719 |
| Max observed depth | 12 |
| Top directories | .claude, .claude-plugin, .cursor, .devcontainer, .gemini, .github, .history, .husky, .sisyphus, deploy, eslint-rules, eval, gitnexus, gitnexus-claude-plugin, gitnexus-cursor-integration, gitnexus-shared, gitnexus-test-setup, gitnexus-web, pr-swarm-review |
| Top extensions | .ts: 1663, .py: 241, .cs: 181, .java: 174, .h: 159, .php: 153, .kt: 138, .rs: 136, .cpp: 132, .go: 106, .json: 97, .rb: 92 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| deploy | deployment surface | 1 |
| eslint-rules | top-level component | 1 |
| eval | top-level component | 1 |
| gitnexus | top-level component | 1 |
| gitnexus-claude-plugin | top-level component | 1 |
| gitnexus-cursor-integration | top-level component | 1 |
| gitnexus-shared | top-level component | 1 |
| gitnexus-test-setup | validation surface | 1 |
| gitnexus-web | source boundary | 1 |
| pr-swarm-review | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | prepare | husky |
| quality | package.json | format | prettier --write . |
| quality | package.json | format:check | prettier --check . |
| quality | package.json | lint | eslint . |
| quality | package.json | lint:fix | eslint --fix . |
| utility | package.json | gitnexus:refresh | gitnexus analyze --embeddings --skills |
| utility | package.json | gitnexus:full | gitnexus analyze --force --embeddings --skills |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [.mcp.json](../../../../sources/abhigyanpatwari__GitNexus/.mcp.json) | mcp signal |
| mcp | [gitnexus-claude-plugin/.mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/.mcp.json) | mcp signal |
| mcp | [gitnexus-claude-plugin/skills/gitnexus-refactoring/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-refactoring/mcp.json) | mcp signal |
| mcp | [gitnexus-claude-plugin/skills/gitnexus-impact-analysis/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-impact-analysis/mcp.json) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/abhigyanpatwari__GitNexus/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills.mdm](../../../../sources/abhigyanpatwari__GitNexus/skills.mdm) | agentRuntime signal |
| agentRuntime | [gitnexus-web/test/unit/agent-abort.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-abort.test.ts) | agentRuntime signal |
| agentRuntime | [gitnexus-web/test/unit/agent-history.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-history.test.ts) | agentRuntime signal |
| entrypoints | [gitnexus-web/src/App.tsx](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/App.tsx) | entrypoints signal |
| entrypoints | [gitnexus-web/src/index.css](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/index.css) | entrypoints signal |
| entrypoints | [gitnexus-web/src/main.tsx](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/main.tsx) | entrypoints signal |
| entrypoints | [gitnexus-shared/src/index.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-shared/src/index.ts) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 151 | [gitnexus-web/src/App.tsx](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/App.tsx)<br>[gitnexus-web/src/index.css](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/index.css)<br>[gitnexus-web/src/main.tsx](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/main.tsx)<br>[gitnexus-shared/src/index.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-shared/src/index.ts)<br>[gitnexus/test/unit/server.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/server.test.ts)<br>[gitnexus/test/fixtures/vue-scope/vue-options-api/src/App.vue](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/fixtures/vue-scope/vue-options-api/src/App.vue)<br>[gitnexus/test/fixtures/vue-scope/vue-cross-file/src/App.vue](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/fixtures/vue-scope/vue-cross-file/src/App.vue)<br>[gitnexus/test/fixtures/vue-scope/vue-composition-api/src/App.vue](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/fixtures/vue-scope/vue-composition-api/src/App.vue) |
| agentRuntime | 105 | [AGENTS.md](../../../../sources/abhigyanpatwari__GitNexus/AGENTS.md)<br>[skills.mdm](../../../../sources/abhigyanpatwari__GitNexus/skills.mdm)<br>[gitnexus-web/test/unit/agent-abort.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-abort.test.ts)<br>[gitnexus-web/test/unit/agent-history.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-history.test.ts)<br>[gitnexus-web/test/unit/agent-prompt.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-prompt.test.ts)<br>[gitnexus-web/src/hooks/useAppState.tsx](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/hooks/useAppState.tsx)<br>[gitnexus-web/src/hooks/useAutoScroll.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/hooks/useAutoScroll.ts)<br>[gitnexus-web/src/hooks/useBackend.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/hooks/useBackend.ts) |
| mcp | 46 | [.mcp.json](../../../../sources/abhigyanpatwari__GitNexus/.mcp.json)<br>[gitnexus-claude-plugin/.mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/.mcp.json)<br>[gitnexus-claude-plugin/skills/gitnexus-refactoring/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-refactoring/mcp.json)<br>[gitnexus-claude-plugin/skills/gitnexus-impact-analysis/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-impact-analysis/mcp.json)<br>[gitnexus-claude-plugin/skills/gitnexus-guide/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-guide/mcp.json)<br>[gitnexus-claude-plugin/skills/gitnexus-exploring/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-exploring/mcp.json)<br>[gitnexus-claude-plugin/skills/gitnexus-debugging/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-debugging/mcp.json)<br>[gitnexus-claude-plugin/skills/gitnexus-cli/mcp.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-claude-plugin/skills/gitnexus-cli/mcp.json) |
| retrieval | 126 | [gitnexus-web/index.html](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/index.html)<br>[gitnexus-web/test/unit/embedding-auto-start.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/embedding-auto-start.test.ts)<br>[gitnexus-web/test/unit/graph-load-decision.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/graph-load-decision.test.ts)<br>[gitnexus-web/test/unit/graph.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/graph.test.ts)<br>[gitnexus-web/test/unit/load-graph-anyway.test.tsx](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/load-graph-anyway.test.tsx)<br>[gitnexus-web/test/fixtures/graph.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/fixtures/graph.ts)<br>[gitnexus-web/src/index.css](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/index.css)<br>[gitnexus-web/src/locales/zh-CN/graph.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/src/locales/zh-CN/graph.json) |
| spec | 14 | [ARCHITECTURE.md](../../../../sources/abhigyanpatwari__GitNexus/ARCHITECTURE.md)<br>[type-resolution-roadmap.md](../../../../sources/abhigyanpatwari__GitNexus/type-resolution-roadmap.md)<br>[gitnexus-web/e2e/debug-issues.spec.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/e2e/debug-issues.spec.ts)<br>[gitnexus-web/e2e/folder-upload.spec.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/e2e/folder-upload.spec.ts)<br>[gitnexus-web/e2e/heartbeat-reconnect.spec.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/e2e/heartbeat-reconnect.spec.ts)<br>[gitnexus-web/e2e/language-switching.spec.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/e2e/language-switching.spec.ts)<br>[gitnexus-web/e2e/manual-record.spec.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/e2e/manual-record.spec.ts)<br>[gitnexus-web/e2e/multi-repo-scoping.spec.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/e2e/multi-repo-scoping.spec.ts) |
| eval | 2818 | [docker-server.test.mjs](../../../../sources/abhigyanpatwari__GitNexus/docker-server.test.mjs)<br>[pr-swarm-review/personas/04-test-ci-verifier.md](../../../../sources/abhigyanpatwari__GitNexus/pr-swarm-review/personas/04-test-ci-verifier.md)<br>[gitnexus-web/test/setup.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/setup.ts)<br>[gitnexus-web/test/unit/agent-abort.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-abort.test.ts)<br>[gitnexus-web/test/unit/agent-history.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-history.test.ts)<br>[gitnexus-web/test/unit/agent-prompt.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-prompt.test.ts)<br>[gitnexus-web/test/unit/backend-client-retry.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/backend-client-retry.test.ts)<br>[gitnexus-web/test/unit/bug-fixes.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/bug-fixes.test.ts) |
| security | 42 | [SECURITY.md](../../../../sources/abhigyanpatwari__GitNexus/SECURITY.md)<br>[pr-swarm-review/personas/05-security-boundary-reviewer.md](../../../../sources/abhigyanpatwari__GitNexus/pr-swarm-review/personas/05-security-boundary-reviewer.md)<br>[gitnexus-web/test/unit/security-guards.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/security-guards.test.ts)<br>[gitnexus/test/unit/security.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/security.test.ts)<br>[gitnexus/test/unit/scope-resolution/go/go-range-binding-null-guard.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/scope-resolution/go/go-range-binding-null-guard.test.ts)<br>[gitnexus/test/unit/cfg/emit-guard.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/cfg/emit-guard.test.ts)<br>[gitnexus/test/fixtures/python-scope-integration/services/auth.py](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/fixtures/python-scope-integration/services/auth.py)<br>[gitnexus/test/fixtures/lang-resolution/typescript-generic-calls/src/auth.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/fixtures/lang-resolution/typescript-generic-calls/src/auth.ts) |
| ci | 24 | [.github/workflows/build-tree-sitter-prebuilds.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/build-tree-sitter-prebuilds.yml)<br>[.github/workflows/ci-devcontainer.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-devcontainer.yml)<br>[.github/workflows/ci-e2e.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-e2e.yml)<br>[.github/workflows/ci-quality.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-quality.yml)<br>[.github/workflows/ci-report.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-report.yml)<br>[.github/workflows/ci-tests.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-tests.yml)<br>[.github/workflows/ci.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci.yml)<br>[.github/workflows/claude.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/claude.yml) |
| container | 7 | [docker-compose.yaml](../../../../sources/abhigyanpatwari__GitNexus/docker-compose.yaml)<br>[Dockerfile.cli](../../../../sources/abhigyanpatwari__GitNexus/Dockerfile.cli)<br>[Dockerfile.web](../../../../sources/abhigyanpatwari__GitNexus/Dockerfile.web)<br>[gitnexus/Dockerfile.test](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/Dockerfile.test)<br>[gitnexus/test/unit/dockerfile-runtime-asset-parity.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/dockerfile-runtime-asset-parity.test.ts)<br>[deploy/kubernetes/cluster-image-policy.yaml](../../../../sources/abhigyanpatwari__GitNexus/deploy/kubernetes/cluster-image-policy.yaml)<br>[.devcontainer/Dockerfile](../../../../sources/abhigyanpatwari__GitNexus/.devcontainer/Dockerfile) |
| instruction | 4 | [AGENTS.md](../../../../sources/abhigyanpatwari__GitNexus/AGENTS.md)<br>[CLAUDE.md](../../../../sources/abhigyanpatwari__GitNexus/CLAUDE.md)<br>[.cursor/rules/100-monorepo.mdc](../../../../sources/abhigyanpatwari__GitNexus/.cursor/rules/100-monorepo.mdc)<br>[.cursor/rules/200-eval.mdc](../../../../sources/abhigyanpatwari__GitNexus/.cursor/rules/200-eval.mdc) |
| docs | 8 | [README.md](../../../../sources/abhigyanpatwari__GitNexus/README.md)<br>[pr-swarm-review/README.md](../../../../sources/abhigyanpatwari__GitNexus/pr-swarm-review/README.md)<br>[gitnexus-cursor-integration/README.md](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-cursor-integration/README.md)<br>[gitnexus/README.md](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/README.md)<br>[gitnexus/bench/emit-persistence/README.md](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/bench/emit-persistence/README.md)<br>[eval/README.md](../../../../sources/abhigyanpatwari__GitNexus/eval/README.md)<br>[.devcontainer/README.md](../../../../sources/abhigyanpatwari__GitNexus/.devcontainer/README.md)<br>[.claude/README-gitnexus-reviewer-swarm.md](../../../../sources/abhigyanpatwari__GitNexus/.claude/README-gitnexus-reviewer-swarm.md) |
| config | 49 | [package.json](../../../../sources/abhigyanpatwari__GitNexus/package.json)<br>[gitnexus-web/package.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/package.json)<br>[gitnexus-web/tsconfig.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/tsconfig.json)<br>[gitnexus-shared/package.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-shared/package.json)<br>[gitnexus-shared/tsconfig.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-shared/tsconfig.json)<br>[gitnexus/package.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/package.json)<br>[gitnexus/tsconfig.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/tsconfig.json)<br>[gitnexus/test/fixtures/lang-resolution/typescript-tsconfig-aliases/tsconfig.json](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/fixtures/lang-resolution/typescript-tsconfig-aliases/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 2818 | [docker-server.test.mjs](../../../../sources/abhigyanpatwari__GitNexus/docker-server.test.mjs)<br>[pr-swarm-review/personas/04-test-ci-verifier.md](../../../../sources/abhigyanpatwari__GitNexus/pr-swarm-review/personas/04-test-ci-verifier.md)<br>[gitnexus-web/test/setup.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/setup.ts)<br>[gitnexus-web/test/unit/agent-abort.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-abort.test.ts)<br>[gitnexus-web/test/unit/agent-history.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-history.test.ts)<br>[gitnexus-web/test/unit/agent-prompt.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/agent-prompt.test.ts) |
| CI workflows | 24 | [.github/workflows/build-tree-sitter-prebuilds.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/build-tree-sitter-prebuilds.yml)<br>[.github/workflows/ci-devcontainer.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-devcontainer.yml)<br>[.github/workflows/ci-e2e.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-e2e.yml)<br>[.github/workflows/ci-quality.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-quality.yml)<br>[.github/workflows/ci-report.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-report.yml)<br>[.github/workflows/ci-tests.yml](../../../../sources/abhigyanpatwari__GitNexus/.github/workflows/ci-tests.yml) |
| Containers / deploy | 7 | [docker-compose.yaml](../../../../sources/abhigyanpatwari__GitNexus/docker-compose.yaml)<br>[Dockerfile.cli](../../../../sources/abhigyanpatwari__GitNexus/Dockerfile.cli)<br>[Dockerfile.web](../../../../sources/abhigyanpatwari__GitNexus/Dockerfile.web)<br>[gitnexus/Dockerfile.test](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/Dockerfile.test)<br>[gitnexus/test/unit/dockerfile-runtime-asset-parity.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/dockerfile-runtime-asset-parity.test.ts)<br>[deploy/kubernetes/cluster-image-policy.yaml](../../../../sources/abhigyanpatwari__GitNexus/deploy/kubernetes/cluster-image-policy.yaml) |
| Security / policy | 42 | [SECURITY.md](../../../../sources/abhigyanpatwari__GitNexus/SECURITY.md)<br>[pr-swarm-review/personas/05-security-boundary-reviewer.md](../../../../sources/abhigyanpatwari__GitNexus/pr-swarm-review/personas/05-security-boundary-reviewer.md)<br>[gitnexus-web/test/unit/security-guards.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus-web/test/unit/security-guards.test.ts)<br>[gitnexus/test/unit/security.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/security.test.ts)<br>[gitnexus/test/unit/scope-resolution/go/go-range-binding-null-guard.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/scope-resolution/go/go-range-binding-null-guard.test.ts)<br>[gitnexus/test/unit/cfg/emit-guard.test.ts](../../../../sources/abhigyanpatwari__GitNexus/gitnexus/test/unit/cfg/emit-guard.test.ts) |
| Agent instructions | 4 | [AGENTS.md](../../../../sources/abhigyanpatwari__GitNexus/AGENTS.md)<br>[CLAUDE.md](../../../../sources/abhigyanpatwari__GitNexus/CLAUDE.md)<br>[.cursor/rules/100-monorepo.mdc](../../../../sources/abhigyanpatwari__GitNexus/.cursor/rules/100-monorepo.mdc)<br>[.cursor/rules/200-eval.mdc](../../../../sources/abhigyanpatwari__GitNexus/.cursor/rules/200-eval.mdc) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | many top-level directories; module boundaries need review |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.mcp.json`, `gitnexus-claude-plugin/.mcp.json`, `gitnexus-claude-plugin/skills/gitnexus-refactoring/mcp.json`.
2. Trace execution through entrypoints: `gitnexus-web/src/App.tsx`, `gitnexus-web/src/index.css`, `gitnexus-web/src/main.tsx`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills.mdm`, `gitnexus-web/test/unit/agent-abort.test.ts`.
4. Inspect retrieval/memory/indexing through: `gitnexus-web/index.html`, `gitnexus-web/test/unit/embedding-auto-start.test.ts`, `gitnexus-web/test/unit/graph-load-decision.test.ts`.
5. Verify behavior through test/eval files: `docker-server.test.mjs`, `pr-swarm-review/personas/04-test-ci-verifier.md`, `gitnexus-web/test/setup.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 GitNexus The Zero Server Code Intelligence Engine GitNexus is a client side knowledge graph creator that runs entirely i. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
