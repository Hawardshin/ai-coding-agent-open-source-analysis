# tobi/qmd Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local

## 요약

- 조사 단위: `sources/tobi__qmd` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 154 files, 32 directories, depth score 117, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=example-index.yml, src/index.ts, finetune/eval_retrieval.py이고, 의존성 단서는 modelcontextprotocol, llama, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 knowledge/RAG pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | tobi/qmd |
| Topic | LLM Wiki, RAG, and Knowledge / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 26713 |
| Forks | 1673 |
| License | MIT |
| Maturity | high-signal |
| Evidence | source+report |
| Source | [sources/tobi__qmd](../../../../sources/tobi__qmd) |
| Existing report | [reports/llm-wiki/repositories/tobi__qmd.md](../../../llm-wiki/repositories/tobi__qmd.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 154 / 32 |
| Max observed depth | 4 |
| Top directories | .claude-plugin, .github, .pi, assets, bin, docs, finetune, scripts, skills, src, test |
| Top extensions | .ts: 46, .py: 25, .md: 17, .jsonl: 15, (none): 10, .json: 9, .yaml: 7, .sh: 6, .mjs: 5, .yml: 4, .lock: 3, .txt: 3 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 8 |
| docs | documentation surface | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| bin | top-level component | 1 |
| finetune | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| test | validation surface | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | prepare | [ -d .git ] && ./scripts/install-hooks.sh \|\| true |
| build | package.json | build | node scripts/build.mjs |
| test | package.json | test | node scripts/test-all.mjs |
| test | package.json | test:types | node ./node_modules/typescript/bin/tsc -p tsconfig.build.json --noEmit |
| test | package.json | test:node | node ./node_modules/vitest/vitest.mjs run --reporter=verbose --testTimeout 60000 |
| test | package.json | test:bun | bun test --timeout 60000 --preload ./src/test-preload.ts |
| test | package.json | test:unit | CI=true node ./node_modules/vitest/vitest.mjs run --reporter=verbose --testTimeout 60000 test/ && CI=true bun test --timeout 60000 --preload ./src/test-preload.ts test/ |
| test | package.json | test:package | node scripts/package-smoke.mjs |
| utility | package.json | qmd | tsx src/cli/qmd.ts |
| utility | package.json | index | tsx src/cli/qmd.ts index |
| utility | package.json | vector | tsx src/cli/qmd.ts vector |
| utility | package.json | search | tsx src/cli/qmd.ts search |
| utility | package.json | vsearch | tsx src/cli/qmd.ts vsearch |
| utility | package.json | rerank | tsx src/cli/qmd.ts rerank |
| test | package.json | inspector | npx @modelcontextprotocol/inspector tsx src/cli/qmd.ts mcp |
| build | package.json | release | ./scripts/release.sh |
| quality | package.json | smoke:package-grammars | node scripts/check-package-grammars.mjs |
| entrypoint | package.json bin | qmd | bin/qmd |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | llama |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| retrieval | [example-index.yml](../../../../sources/tobi__qmd/example-index.yml) | retrieval signal |
| retrieval | [src/index.ts](../../../../sources/tobi__qmd/src/index.ts) | retrieval signal |
| retrieval | [finetune/eval_retrieval.py](../../../../sources/tobi__qmd/finetune/eval_retrieval.py) | retrieval signal |
| entrypoints | [src/mcp/server.ts](../../../../sources/tobi__qmd/src/mcp/server.ts) | entrypoints signal |
| entrypoints | [bin/qmd](../../../../sources/tobi__qmd/bin/qmd) | entrypoints signal |
| docs | [README.md](../../../../sources/tobi__qmd/README.md) | docs signal |
| docs | [finetune/README.md](../../../../sources/tobi__qmd/finetune/README.md) | docs signal |
| docs | [finetune/experiments/grpo/README.md](../../../../sources/tobi__qmd/finetune/experiments/grpo/README.md) | docs signal |
| docs | [docs/SYNTAX.md](../../../../sources/tobi__qmd/docs/SYNTAX.md) | docs signal |
| eval | [test/ast-chunking.test.ts](../../../../sources/tobi__qmd/test/ast-chunking.test.ts) | eval signal |
| eval | [test/ast.test.ts](../../../../sources/tobi__qmd/test/ast.test.ts) | eval signal |
| eval | [test/bench-score.test.ts](../../../../sources/tobi__qmd/test/bench-score.test.ts) | eval signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 3 | [src/index.ts](../../../../sources/tobi__qmd/src/index.ts)<br>[src/mcp/server.ts](../../../../sources/tobi__qmd/src/mcp/server.ts)<br>[bin/qmd](../../../../sources/tobi__qmd/bin/qmd) |
| agentRuntime | 4 | [skills/release/SKILL.md](../../../../sources/tobi__qmd/skills/release/SKILL.md)<br>[skills/release/scripts/install-hooks.sh](../../../../sources/tobi__qmd/skills/release/scripts/install-hooks.sh)<br>[skills/qmd/SKILL.md](../../../../sources/tobi__qmd/skills/qmd/SKILL.md)<br>[skills/qmd/references/mcp-setup.md](../../../../sources/tobi__qmd/skills/qmd/references/mcp-setup.md) |
| mcp | 3 | [test/mcp.test.ts](../../../../sources/tobi__qmd/test/mcp.test.ts)<br>[src/mcp/server.ts](../../../../sources/tobi__qmd/src/mcp/server.ts)<br>[skills/qmd/references/mcp-setup.md](../../../../sources/tobi__qmd/skills/qmd/references/mcp-setup.md) |
| retrieval | 3 | [example-index.yml](../../../../sources/tobi__qmd/example-index.yml)<br>[src/index.ts](../../../../sources/tobi__qmd/src/index.ts)<br>[finetune/eval_retrieval.py](../../../../sources/tobi__qmd/finetune/eval_retrieval.py) |
| spec | 2 | [test/eval-docs/api-design-principles.md](../../../../sources/tobi__qmd/test/eval-docs/api-design-principles.md)<br>[assets/qmd-architecture.png](../../../../sources/tobi__qmd/assets/qmd-architecture.png) |
| eval | 49 | [test/ast-chunking.test.ts](../../../../sources/tobi__qmd/test/ast-chunking.test.ts)<br>[test/ast.test.ts](../../../../sources/tobi__qmd/test/ast.test.ts)<br>[test/bench-score.test.ts](../../../../sources/tobi__qmd/test/bench-score.test.ts)<br>[test/bin-wrapper.test.ts](../../../../sources/tobi__qmd/test/bin-wrapper.test.ts)<br>[test/cli-exit-lifecycle.test.ts](../../../../sources/tobi__qmd/test/cli-exit-lifecycle.test.ts)<br>[test/cli-lazy-llm-import.test.ts](../../../../sources/tobi__qmd/test/cli-lazy-llm-import.test.ts)<br>[test/cli.test.ts](../../../../sources/tobi__qmd/test/cli.test.ts)<br>[test/collections-config.test.ts](../../../../sources/tobi__qmd/test/collections-config.test.ts) |
| security | 1 | [test/eval-docs/remote-work-policy.md](../../../../sources/tobi__qmd/test/eval-docs/remote-work-policy.md) |
| ci | 3 | [.github/workflows/ci.yml](../../../../sources/tobi__qmd/.github/workflows/ci.yml)<br>[.github/workflows/nix.yml](../../../../sources/tobi__qmd/.github/workflows/nix.yml)<br>[.github/workflows/publish.yml](../../../../sources/tobi__qmd/.github/workflows/publish.yml) |
| container | 0 | not obvious |
| instruction | 2 | [CLAUDE.md](../../../../sources/tobi__qmd/CLAUDE.md)<br>[finetune/CLAUDE.md](../../../../sources/tobi__qmd/finetune/CLAUDE.md) |
| docs | 4 | [README.md](../../../../sources/tobi__qmd/README.md)<br>[finetune/README.md](../../../../sources/tobi__qmd/finetune/README.md)<br>[finetune/experiments/grpo/README.md](../../../../sources/tobi__qmd/finetune/experiments/grpo/README.md)<br>[docs/SYNTAX.md](../../../../sources/tobi__qmd/docs/SYNTAX.md) |
| config | 4 | [package.json](../../../../sources/tobi__qmd/package.json)<br>[tsconfig.json](../../../../sources/tobi__qmd/tsconfig.json)<br>[finetune/pyproject.toml](../../../../sources/tobi__qmd/finetune/pyproject.toml)<br>[finetune/uv.lock](../../../../sources/tobi__qmd/finetune/uv.lock) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 49 | [test/ast-chunking.test.ts](../../../../sources/tobi__qmd/test/ast-chunking.test.ts)<br>[test/ast.test.ts](../../../../sources/tobi__qmd/test/ast.test.ts)<br>[test/bench-score.test.ts](../../../../sources/tobi__qmd/test/bench-score.test.ts)<br>[test/bin-wrapper.test.ts](../../../../sources/tobi__qmd/test/bin-wrapper.test.ts)<br>[test/cli-exit-lifecycle.test.ts](../../../../sources/tobi__qmd/test/cli-exit-lifecycle.test.ts)<br>[test/cli-lazy-llm-import.test.ts](../../../../sources/tobi__qmd/test/cli-lazy-llm-import.test.ts) |
| CI workflows | 3 | [.github/workflows/ci.yml](../../../../sources/tobi__qmd/.github/workflows/ci.yml)<br>[.github/workflows/nix.yml](../../../../sources/tobi__qmd/.github/workflows/nix.yml)<br>[.github/workflows/publish.yml](../../../../sources/tobi__qmd/.github/workflows/publish.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 1 | [test/eval-docs/remote-work-policy.md](../../../../sources/tobi__qmd/test/eval-docs/remote-work-policy.md) |
| Agent instructions | 2 | [CLAUDE.md](../../../../sources/tobi__qmd/CLAUDE.md)<br>[finetune/CLAUDE.md](../../../../sources/tobi__qmd/finetune/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `example-index.yml`, `src/index.ts`, `finetune/eval_retrieval.py`.
2. Trace execution through entrypoints: `src/index.ts`, `src/mcp/server.ts`, `bin/qmd`.
3. Map agent/tool runtime through: `skills/release/SKILL.md`, `skills/release/scripts/install-hooks.sh`, `skills/qmd/SKILL.md`.
4. Inspect retrieval/memory/indexing through: `example-index.yml`, `src/index.ts`, `finetune/eval_retrieval.py`.
5. Verify behavior through test/eval files: `test/ast-chunking.test.ts`, `test/ast.test.ts`, `test/bench-score.test.ts`.

## Existing Repository Insight

LLM 위키/RAG/지식베이스 관점에서 mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while b. 핵심 구조 신호는 TypeScript, package.json, README.md, CLAUDE.md, LICENSE, modelcontextprotocol이며, source+report 근거 수준으로 high-signal 후보로 읽는 것이 좋습니다.

## Existing Assessment

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 knowledge/RAG pattern reference이고, 후속 확인 포인트는 needs deeper structural scan입니다.
