# zolotukhin/zinc Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

Zig INferenCe Engine — Local LLM inference on AMD GPUs and Apple Silicon

## 요약

- 조사 단위: `sources/zolotukhin__zinc` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 921 files, 87 directories, depth score 116, key references 11개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/main.zig이고, 의존성 단서는 openai, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 architecture comparison point이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | zolotukhin/zinc |
| Topic | AI Infrastructure and Serving / AI 인프라/서빙 |
| Region | global |
| Language | Zig |
| Stars | 405 |
| Forks | 17 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/zolotukhin__zinc](../../../../sources/zolotukhin__zinc) |
| Existing report | [reports/global-trending/repositories/zolotukhin__zinc.md](../../../global-trending/repositories/zolotukhin__zinc.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 921 / 87 |
| Max observed depth | 7 |
| Top directories | .agents, .claude, .github, .specify, assets, benchmarks, docs, loops, research, scripts, site, specs, src, tests, tools, writing |
| Top extensions | .md: 225, .metal: 184, .comp: 132, .zig: 107, .svg: 80, .ts: 41, .sh: 28, .astro: 25, .jpg: 21, .png: 12, .s: 10, .yml: 9 |
| Source patterns | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 16 |
| docs | documentation surface | 10 |
| tests | validation surface | 5 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| loops | top-level component | 1 |
| research | top-level component | 1 |
| scripts | top-level component | 1 |
| site | documentation surface | 1 |
| specs | top-level component | 1 |
| tools | top-level component | 1 |
| writing | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| utility | package.json | graph:render | bun tools/render_graph_report.ts |
| utility | package.json | bench:api | bun tools/benchmark_api.mjs |
| utility | package.json | eval:opencode | bun tools/opencode_eval.mjs |
| utility | package.json | seo:ga4-snapshot | node tools/analyze_ga4_snapshot.mjs |
| utility | package.json | seo:analyze | node tools/analyze_seo_exports.mjs |
| test | package.json | test | bun test |
| test | package.json | test:api | bun tests/test_openai_sdk.ts |
| test | package.json | test:qwen-smoke | bun tests/test_qwen_smoke.ts |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | openai |
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
| entrypoints | [src/main.zig](../../../../sources/zolotukhin__zinc/src/main.zig) | entrypoints signal |
| config | [package.json](../../../../sources/zolotukhin__zinc/package.json) | config signal |
| config | [site/package.json](../../../../sources/zolotukhin__zinc/site/package.json) | config signal |
| config | [site/tsconfig.json](../../../../sources/zolotukhin__zinc/site/tsconfig.json) | config signal |
| ci | [.github/workflows/pr-review.yml](../../../../sources/zolotukhin__zinc/.github/workflows/pr-review.yml) | ci signal |
| ci | [.github/workflows/release.yml](../../../../sources/zolotukhin__zinc/.github/workflows/release.yml) | ci signal |
| ci | [.github/workflows/site-check.yml](../../../../sources/zolotukhin__zinc/.github/workflows/site-check.yml) | ci signal |
| ci | [.github/workflows/socket.yml](../../../../sources/zolotukhin__zinc/.github/workflows/socket.yml) | ci signal |
| eval | [tools/bench_llama_qwen3_8b.sh](../../../../sources/zolotukhin__zinc/tools/bench_llama_qwen3_8b.sh) | eval support |
| eval | [tools/benchmark_api.mjs](../../../../sources/zolotukhin__zinc/tools/benchmark_api.mjs) | eval support |
| instruction | [AGENTS.md](../../../../sources/zolotukhin__zinc/AGENTS.md) | instruction support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 1 | [src/main.zig](../../../../sources/zolotukhin__zinc/src/main.zig) |
| agentRuntime | 38 | [AGENTS.md](../../../../sources/zolotukhin__zinc/AGENTS.md)<br>[tools/analyze_ga4_snapshot.mjs](../../../../sources/zolotukhin__zinc/tools/analyze_ga4_snapshot.mjs)<br>[tools/analyze_seo_exports.mjs](../../../../sources/zolotukhin__zinc/tools/analyze_seo_exports.mjs)<br>[tools/bench_llama_qwen3_8b.sh](../../../../sources/zolotukhin__zinc/tools/bench_llama_qwen3_8b.sh)<br>[tools/benchmark_api.mjs](../../../../sources/zolotukhin__zinc/tools/benchmark_api.mjs)<br>[tools/benchmark_api.test.ts](../../../../sources/zolotukhin__zinc/tools/benchmark_api.test.ts)<br>[tools/chat.html](../../../../sources/zolotukhin__zinc/tools/chat.html)<br>[tools/dump_struct_layouts.zig](../../../../sources/zolotukhin__zinc/tools/dump_struct_layouts.zig) |
| mcp | 0 | not obvious |
| retrieval | 18 | [tools/render_graph_report.ts](../../../../sources/zolotukhin__zinc/tools/render_graph_report.ts)<br>[src/zinc_rt/isa/cpu_zig/embed.zig](../../../../sources/zolotukhin__zinc/src/zinc_rt/isa/cpu_zig/embed.zig)<br>[src/zinc_rt/ir/graph.zig](../../../../sources/zolotukhin__zinc/src/zinc_rt/ir/graph.zig)<br>[src/shaders/metal/embed_dequant_q4k.metal](../../../../sources/zolotukhin__zinc/src/shaders/metal/embed_dequant_q4k.metal)<br>[src/gpu/memory_plan.zig](../../../../sources/zolotukhin__zinc/src/gpu/memory_plan.zig)<br>[src/compute/graph.zig](../../../../sources/zolotukhin__zinc/src/compute/graph.zig)<br>[site/src/pages/index.astro](../../../../sources/zolotukhin__zinc/site/src/pages/index.astro)<br>[site/src/pages/zinc/index.astro](../../../../sources/zolotukhin__zinc/site/src/pages/zinc/index.astro) |
| spec | 27 | [src/model/architecture.zig](../../../../sources/zolotukhin__zinc/src/model/architecture.zig)<br>[specs/005-apple-silicon-inference/spec.md](../../../../sources/zolotukhin__zinc/specs/005-apple-silicon-inference/spec.md)<br>[specs/004-openai-api-server/spec.md](../../../../sources/zolotukhin__zinc/specs/004-openai-api-server/spec.md)<br>[specs/004-openai-api-server/checklists/requirements.md](../../../../sources/zolotukhin__zinc/specs/004-openai-api-server/checklists/requirements.md)<br>[specs/003-decode-performance/spec.md](../../../../sources/zolotukhin__zinc/specs/003-decode-performance/spec.md)<br>[specs/003-decode-performance/checklists/requirements.md](../../../../sources/zolotukhin__zinc/specs/003-decode-performance/checklists/requirements.md)<br>[specs/002-microblog-zolotukhin-ai/spec.md](../../../../sources/zolotukhin__zinc/specs/002-microblog-zolotukhin-ai/spec.md)<br>[specs/002-microblog-zolotukhin-ai/contracts/feed-spec.md](../../../../sources/zolotukhin__zinc/specs/002-microblog-zolotukhin-ai/contracts/feed-spec.md) |
| eval | 42 | [tools/bench_llama_qwen3_8b.sh](../../../../sources/zolotukhin__zinc/tools/bench_llama_qwen3_8b.sh)<br>[tools/benchmark_api.mjs](../../../../sources/zolotukhin__zinc/tools/benchmark_api.mjs)<br>[tools/benchmark_api.test.ts](../../../../sources/zolotukhin__zinc/tools/benchmark_api.test.ts)<br>[tools/opencode_eval_fixtures.mjs](../../../../sources/zolotukhin__zinc/tools/opencode_eval_fixtures.mjs)<br>[tools/opencode_eval.mjs](../../../../sources/zolotukhin__zinc/tools/opencode_eval.mjs)<br>[tools/opencode_eval.test.ts](../../../../sources/zolotukhin__zinc/tools/opencode_eval.test.ts)<br>[tools/opencode_trace_proxy.mjs](../../../../sources/zolotukhin__zinc/tools/opencode_trace_proxy.mjs)<br>[tools/opencode_trace_proxy.test.ts](../../../../sources/zolotukhin__zinc/tools/opencode_trace_proxy.test.ts) |
| security | 2 | [site/src/content/posts/2026-04-02-why-zig-is-the-secret-weapon-behind-zinc.md](../../../../sources/zolotukhin__zinc/site/src/content/posts/2026-04-02-why-zig-is-the-secret-weapon-behind-zinc.md)<br>[.claude/skills/zig-docgen/scripts/audit_doc_coverage.py](../../../../sources/zolotukhin__zinc/.claude/skills/zig-docgen/scripts/audit_doc_coverage.py) |
| ci | 5 | [.github/workflows/pr-review.yml](../../../../sources/zolotukhin__zinc/.github/workflows/pr-review.yml)<br>[.github/workflows/release.yml](../../../../sources/zolotukhin__zinc/.github/workflows/release.yml)<br>[.github/workflows/site-check.yml](../../../../sources/zolotukhin__zinc/.github/workflows/site-check.yml)<br>[.github/workflows/socket.yml](../../../../sources/zolotukhin__zinc/.github/workflows/socket.yml)<br>[.github/workflows/test.yml](../../../../sources/zolotukhin__zinc/.github/workflows/test.yml) |
| container | 0 | not obvious |
| instruction | 1 | [AGENTS.md](../../../../sources/zolotukhin__zinc/AGENTS.md) |
| docs | 267 | [README.md](../../../../sources/zolotukhin__zinc/README.md)<br>[site/.gitignore](../../../../sources/zolotukhin__zinc/site/.gitignore)<br>[site/.node-version](../../../../sources/zolotukhin__zinc/site/.node-version)<br>[site/astro.config.mjs](../../../../sources/zolotukhin__zinc/site/astro.config.mjs)<br>[site/package-lock.json](../../../../sources/zolotukhin__zinc/site/package-lock.json)<br>[site/package.json](../../../../sources/zolotukhin__zinc/site/package.json)<br>[site/README.md](../../../../sources/zolotukhin__zinc/site/README.md)<br>[site/SEO_GUIDE.md](../../../../sources/zolotukhin__zinc/site/SEO_GUIDE.md) |
| config | 3 | [package.json](../../../../sources/zolotukhin__zinc/package.json)<br>[site/package.json](../../../../sources/zolotukhin__zinc/site/package.json)<br>[site/tsconfig.json](../../../../sources/zolotukhin__zinc/site/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 42 | [tools/bench_llama_qwen3_8b.sh](../../../../sources/zolotukhin__zinc/tools/bench_llama_qwen3_8b.sh)<br>[tools/benchmark_api.mjs](../../../../sources/zolotukhin__zinc/tools/benchmark_api.mjs)<br>[tools/benchmark_api.test.ts](../../../../sources/zolotukhin__zinc/tools/benchmark_api.test.ts)<br>[tools/opencode_eval_fixtures.mjs](../../../../sources/zolotukhin__zinc/tools/opencode_eval_fixtures.mjs)<br>[tools/opencode_eval.mjs](../../../../sources/zolotukhin__zinc/tools/opencode_eval.mjs)<br>[tools/opencode_eval.test.ts](../../../../sources/zolotukhin__zinc/tools/opencode_eval.test.ts) |
| CI workflows | 5 | [.github/workflows/pr-review.yml](../../../../sources/zolotukhin__zinc/.github/workflows/pr-review.yml)<br>[.github/workflows/release.yml](../../../../sources/zolotukhin__zinc/.github/workflows/release.yml)<br>[.github/workflows/site-check.yml](../../../../sources/zolotukhin__zinc/.github/workflows/site-check.yml)<br>[.github/workflows/socket.yml](../../../../sources/zolotukhin__zinc/.github/workflows/socket.yml)<br>[.github/workflows/test.yml](../../../../sources/zolotukhin__zinc/.github/workflows/test.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 2 | [site/src/content/posts/2026-04-02-why-zig-is-the-secret-weapon-behind-zinc.md](../../../../sources/zolotukhin__zinc/site/src/content/posts/2026-04-02-why-zig-is-the-secret-weapon-behind-zinc.md)<br>[.claude/skills/zig-docgen/scripts/audit_doc_coverage.py](../../../../sources/zolotukhin__zinc/.claude/skills/zig-docgen/scripts/audit_doc_coverage.py) |
| Agent instructions | 1 | [AGENTS.md](../../../../sources/zolotukhin__zinc/AGENTS.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `src/main.zig`, `package.json`, `site/package.json`.
2. Trace execution through entrypoints: `src/main.zig`.
3. Map agent/tool runtime through: `AGENTS.md`, `tools/analyze_ga4_snapshot.mjs`, `tools/analyze_seo_exports.mjs`.
4. Inspect retrieval/memory/indexing through: `tools/render_graph_report.ts`, `src/zinc_rt/isa/cpu_zig/embed.zig`, `src/zinc_rt/ir/graph.zig`.
5. Verify behavior through test/eval files: `tools/bench_llama_qwen3_8b.sh`, `tools/benchmark_api.mjs`, `tools/benchmark_api.test.ts`.

## Existing Repository Insight

AI 인프라/서빙 관점에서 Zig INferenCe Engine — Local LLM inference on AMD GPUs and Apple Silicon. 핵심 구조 신호는 Zig, package.json, README.md, AGENTS.md, LICENSE, openai이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 architecture comparison point이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
