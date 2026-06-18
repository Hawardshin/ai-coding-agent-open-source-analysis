# zolotukhin/zinc 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Zig INferenCe Engine — Local LLM inference on AMD GPUs and Apple Silicon

## 요약

- 조사 단위: `sources/zolotukhin__zinc` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 921 files, 87 directories, depth score 110, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

AI 인프라/서빙 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 entrypoints=src/main.zig이고, 의존성 단서는 openai, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 아키텍처 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## 바로가기

| 이동 | 여기서 볼 것 |
| --- | --- |
| [전체 시작 README](../../../../README.md) | 레포 전체 목적, 핵심 카테고리, 읽는 순서. |
| [전체 보고서 읽기 지도](../../../README.md) | 모든 보고서의 시작점, 주제, 폴더 지도. |
| [주제별 보고서 목차](../../../by-topic/README.md) | 조사 질문 기준으로 보고서를 찾는 입구. |
| [표/CSV 목차](../../../tables/README.md) | 표로 빠르게 훑고 CSV로 비교하는 입구. |
| [레포별 인사이트](../../../repository-insights/README.md) | 레포별 총평과 위험 신호. |
| [소스 딥다이브](../../README.md) | 주제별 소스 경로 근거. |
| [레포별 소스 딥다이브](../README.md) | 로컬 클론 1개당 1개 Markdown 딥다이브. |
| [소스 트렌드 인사이트](../../../source-insights/README.md) | 카테고리별 트렌드와 레포별 특징 비교. |


## 레포 컨텍스트

| 항목 | 값 |
| --- | --- |
| 레포 | zolotukhin/zinc |
| 주제 | AI 인프라/서빙 / AI 인프라/서빙 |
| Region | global |
| Language | Zig |
| Stars | 405 |
| Forks | 17 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/zolotukhin__zinc](../../../../sources/zolotukhin__zinc) |
| 기존 보고서 | [reports/global-trending/repositories/zolotukhin__zinc.md](../../../global-trending/repositories/zolotukhin__zinc.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 921 / 87 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .agents, .claude, .github, .specify, assets, benchmarks, docs, loops, research, scripts, site, specs, src, tests, tools, writing |
| 상위 확장자 | .md: 225, .metal: 184, .comp: 132, .zig: 107, .svg: 80, .ts: 41, .sh: 28, .astro: 25, .jpg: 21, .png: 12, .s: 10, .yml: 9 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | package.json | graph:render | bun tools/render_graph_report.ts |
| utility | package.json | bench:api | bun tools/benchmark_api.mjs |
| utility | package.json | eval:opencode | bun tools/opencode_eval.mjs |
| utility | package.json | seo:ga4-snapshot | node tools/analyze_ga4_snapshot.mjs |
| utility | package.json | seo:analyze | node tools/analyze_seo_exports.mjs |
| test | package.json | test | bun test |
| test | package.json | test:api | bun tests/test_openai_sdk.ts |
| test | package.json | test:qwen-smoke | bun tests/test_qwen_smoke.ts |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 1 | [src/main.zig](../../../../sources/zolotukhin__zinc/src/main.zig) |
| agentRuntime | 38 | [AGENTS.md](../../../../sources/zolotukhin__zinc/AGENTS.md)<br>[tools/analyze_ga4_snapshot.mjs](../../../../sources/zolotukhin__zinc/tools/analyze_ga4_snapshot.mjs)<br>[tools/analyze_seo_exports.mjs](../../../../sources/zolotukhin__zinc/tools/analyze_seo_exports.mjs)<br>[tools/bench_llama_qwen3_8b.sh](../../../../sources/zolotukhin__zinc/tools/bench_llama_qwen3_8b.sh)<br>[tools/benchmark_api.mjs](../../../../sources/zolotukhin__zinc/tools/benchmark_api.mjs)<br>[tools/benchmark_api.test.ts](../../../../sources/zolotukhin__zinc/tools/benchmark_api.test.ts)<br>[tools/chat.html](../../../../sources/zolotukhin__zinc/tools/chat.html)<br>[tools/dump_struct_layouts.zig](../../../../sources/zolotukhin__zinc/tools/dump_struct_layouts.zig) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 18 | [tools/render_graph_report.ts](../../../../sources/zolotukhin__zinc/tools/render_graph_report.ts)<br>[src/zinc_rt/isa/cpu_zig/embed.zig](../../../../sources/zolotukhin__zinc/src/zinc_rt/isa/cpu_zig/embed.zig)<br>[src/zinc_rt/ir/graph.zig](../../../../sources/zolotukhin__zinc/src/zinc_rt/ir/graph.zig)<br>[src/shaders/metal/embed_dequant_q4k.metal](../../../../sources/zolotukhin__zinc/src/shaders/metal/embed_dequant_q4k.metal)<br>[src/gpu/memory_plan.zig](../../../../sources/zolotukhin__zinc/src/gpu/memory_plan.zig)<br>[src/compute/graph.zig](../../../../sources/zolotukhin__zinc/src/compute/graph.zig)<br>[site/src/pages/index.astro](../../../../sources/zolotukhin__zinc/site/src/pages/index.astro)<br>[site/src/pages/zinc/index.astro](../../../../sources/zolotukhin__zinc/site/src/pages/zinc/index.astro) |
| spec | 27 | [src/model/architecture.zig](../../../../sources/zolotukhin__zinc/src/model/architecture.zig)<br>[specs/005-apple-silicon-inference/spec.md](../../../../sources/zolotukhin__zinc/specs/005-apple-silicon-inference/spec.md)<br>[specs/004-openai-api-server/spec.md](../../../../sources/zolotukhin__zinc/specs/004-openai-api-server/spec.md)<br>[specs/004-openai-api-server/checklists/requirements.md](../../../../sources/zolotukhin__zinc/specs/004-openai-api-server/checklists/requirements.md)<br>[specs/003-decode-performance/spec.md](../../../../sources/zolotukhin__zinc/specs/003-decode-performance/spec.md)<br>[specs/003-decode-performance/checklists/requirements.md](../../../../sources/zolotukhin__zinc/specs/003-decode-performance/checklists/requirements.md)<br>[specs/002-microblog-zolotukhin-ai/spec.md](../../../../sources/zolotukhin__zinc/specs/002-microblog-zolotukhin-ai/spec.md)<br>[specs/002-microblog-zolotukhin-ai/contracts/feed-spec.md](../../../../sources/zolotukhin__zinc/specs/002-microblog-zolotukhin-ai/contracts/feed-spec.md) |
| eval | 42 | [tools/bench_llama_qwen3_8b.sh](../../../../sources/zolotukhin__zinc/tools/bench_llama_qwen3_8b.sh)<br>[tools/benchmark_api.mjs](../../../../sources/zolotukhin__zinc/tools/benchmark_api.mjs)<br>[tools/benchmark_api.test.ts](../../../../sources/zolotukhin__zinc/tools/benchmark_api.test.ts)<br>[tools/opencode_eval_fixtures.mjs](../../../../sources/zolotukhin__zinc/tools/opencode_eval_fixtures.mjs)<br>[tools/opencode_eval.mjs](../../../../sources/zolotukhin__zinc/tools/opencode_eval.mjs)<br>[tools/opencode_eval.test.ts](../../../../sources/zolotukhin__zinc/tools/opencode_eval.test.ts)<br>[tools/opencode_trace_proxy.mjs](../../../../sources/zolotukhin__zinc/tools/opencode_trace_proxy.mjs)<br>[tools/opencode_trace_proxy.test.ts](../../../../sources/zolotukhin__zinc/tools/opencode_trace_proxy.test.ts) |
| security | 2 | [site/src/content/posts/2026-04-02-why-zig-is-the-secret-weapon-behind-zinc.md](../../../../sources/zolotukhin__zinc/site/src/content/posts/2026-04-02-why-zig-is-the-secret-weapon-behind-zinc.md)<br>[.claude/skills/zig-docgen/scripts/audit_doc_coverage.py](../../../../sources/zolotukhin__zinc/.claude/skills/zig-docgen/scripts/audit_doc_coverage.py) |
| ci | 5 | [.github/workflows/pr-review.yml](../../../../sources/zolotukhin__zinc/.github/workflows/pr-review.yml)<br>[.github/workflows/release.yml](../../../../sources/zolotukhin__zinc/.github/workflows/release.yml)<br>[.github/workflows/site-check.yml](../../../../sources/zolotukhin__zinc/.github/workflows/site-check.yml)<br>[.github/workflows/socket.yml](../../../../sources/zolotukhin__zinc/.github/workflows/socket.yml)<br>[.github/workflows/test.yml](../../../../sources/zolotukhin__zinc/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/zolotukhin__zinc/AGENTS.md) |
| docs | 267 | [README.md](../../../../sources/zolotukhin__zinc/README.md)<br>[site/.gitignore](../../../../sources/zolotukhin__zinc/site/.gitignore)<br>[site/.node-version](../../../../sources/zolotukhin__zinc/site/.node-version)<br>[site/astro.config.mjs](../../../../sources/zolotukhin__zinc/site/astro.config.mjs)<br>[site/package-lock.json](../../../../sources/zolotukhin__zinc/site/package-lock.json)<br>[site/package.json](../../../../sources/zolotukhin__zinc/site/package.json)<br>[site/README.md](../../../../sources/zolotukhin__zinc/site/README.md)<br>[site/SEO_GUIDE.md](../../../../sources/zolotukhin__zinc/site/SEO_GUIDE.md) |
| config | 3 | [package.json](../../../../sources/zolotukhin__zinc/package.json)<br>[site/package.json](../../../../sources/zolotukhin__zinc/site/package.json)<br>[site/tsconfig.json](../../../../sources/zolotukhin__zinc/site/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 42 | [tools/bench_llama_qwen3_8b.sh](../../../../sources/zolotukhin__zinc/tools/bench_llama_qwen3_8b.sh)<br>[tools/benchmark_api.mjs](../../../../sources/zolotukhin__zinc/tools/benchmark_api.mjs)<br>[tools/benchmark_api.test.ts](../../../../sources/zolotukhin__zinc/tools/benchmark_api.test.ts)<br>[tools/opencode_eval_fixtures.mjs](../../../../sources/zolotukhin__zinc/tools/opencode_eval_fixtures.mjs)<br>[tools/opencode_eval.mjs](../../../../sources/zolotukhin__zinc/tools/opencode_eval.mjs)<br>[tools/opencode_eval.test.ts](../../../../sources/zolotukhin__zinc/tools/opencode_eval.test.ts) |
| CI workflow | 5 | [.github/workflows/pr-review.yml](../../../../sources/zolotukhin__zinc/.github/workflows/pr-review.yml)<br>[.github/workflows/release.yml](../../../../sources/zolotukhin__zinc/.github/workflows/release.yml)<br>[.github/workflows/site-check.yml](../../../../sources/zolotukhin__zinc/.github/workflows/site-check.yml)<br>[.github/workflows/socket.yml](../../../../sources/zolotukhin__zinc/.github/workflows/socket.yml)<br>[.github/workflows/test.yml](../../../../sources/zolotukhin__zinc/.github/workflows/test.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [site/src/content/posts/2026-04-02-why-zig-is-the-secret-weapon-behind-zinc.md](../../../../sources/zolotukhin__zinc/site/src/content/posts/2026-04-02-why-zig-is-the-secret-weapon-behind-zinc.md)<br>[.claude/skills/zig-docgen/scripts/audit_doc_coverage.py](../../../../sources/zolotukhin__zinc/.claude/skills/zig-docgen/scripts/audit_doc_coverage.py) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/zolotukhin__zinc/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `src/main.zig`, `package.json`, `site/package.json`.
2. entrypoint를 따라 실행 흐름 확인: `src/main.zig`.
3. agent/tool runtime 매핑: `AGENTS.md`, `tools/analyze_ga4_snapshot.mjs`, `tools/analyze_seo_exports.mjs`.
4. retrieval/memory/indexing 확인: `tools/render_graph_report.ts`, `src/zinc_rt/isa/cpu_zig/embed.zig`, `src/zinc_rt/ir/graph.zig`.
5. test/eval 파일로 동작 검증: `tools/bench_llama_qwen3_8b.sh`, `tools/benchmark_api.mjs`, `tools/benchmark_api.test.ts`.

## 기존 레포 인사이트

AI 인프라/서빙 관점에서 Zig INferenCe Engine — Local LLM inference on AMD GPUs and Apple Silicon. 핵심 구조 신호는 Zig, package.json, README.md, AGENTS.md, LICENSE, openai이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 AI 인프라/서빙 레포입니다. 활용 관점은 아키텍처 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
