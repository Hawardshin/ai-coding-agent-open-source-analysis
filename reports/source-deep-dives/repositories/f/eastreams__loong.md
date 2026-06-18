# eastreams/loong Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Lightweight, clear, and fully extensible AI agent infrastructure — learn easily, customize anything 🐉

## 요약

- 조사 단위: `sources/eastreams__loong` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 2,406 files, 394 directories, depth score 132, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=skills/native-mcp/SKILL.md, crates/daemon/tests/integration/mcp.rs, crates/daemon/src/mcp_cli.rs이고, 의존성 단서는 opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| Repository | eastreams/loong |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 640 |
| Forks | 104 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/eastreams__loong](../../../../sources/eastreams__loong) |
| Existing report | [reports/global-trending/repositories/eastreams__loong.md](../../../global-trending/repositories/eastreams__loong.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 2406 / 394 |
| Max observed depth | 11 |
| Top directories | .cargo, .github, assets, crates, deploy, docs, examples, patches, runtime-plugins, scripts, site, skills, tasks, tests |
| Top extensions | .rs: 1017, .md: 576, .xsd: 242, .py: 165, .mdx: 107, .cs: 78, .sh: 59, .json: 28, .xml: 26, .toml: 22, .yml: 17, (none): 16 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| crates/app | crates workspace | 30 |
| examples/spec | examples workspace | 24 |
| crates/daemon | crates workspace | 21 |
| docs | documentation surface | 19 |
| crates/spec | crates workspace | 14 |
| crates/kernel | crates workspace | 6 |
| crates/bench | crates workspace | 5 |
| crates/contracts | crates workspace | 4 |
| crates/bridge-runtime | crates workspace | 2 |
| crates/loong-app-protocol | crates workspace | 2 |
| crates/loong-cli | crates workspace | 2 |
| crates/loong-core | crates workspace | 2 |
| crates/loong-plugin-sdk | crates workspace | 2 |
| crates/loong-runtime | crates workspace | 2 |
| crates/protocol | crates workspace | 2 |
| examples/policy | examples workspace | 2 |
| tests | validation surface | 2 |
| .github | ci surface | 1 |


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
| observability | opentelemetry |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| mcp | [skills/native-mcp/SKILL.md](../../../../sources/eastreams__loong/skills/native-mcp/SKILL.md) | mcp signal |
| mcp | [crates/daemon/tests/integration/mcp.rs](../../../../sources/eastreams__loong/crates/daemon/tests/integration/mcp.rs) | mcp signal |
| mcp | [crates/daemon/src/mcp_cli.rs](../../../../sources/eastreams__loong/crates/daemon/src/mcp_cli.rs) | mcp signal |
| mcp | [crates/app/src/mcp/config.rs](../../../../sources/eastreams__loong/crates/app/src/mcp/config.rs) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/eastreams__loong/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills/systematic-debugging/SKILL.md](../../../../sources/eastreams__loong/skills/systematic-debugging/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/skill-creator/LICENSE.txt](../../../../sources/eastreams__loong/skills/skill-creator/LICENSE.txt) | agentRuntime signal |
| agentRuntime | [skills/skill-creator/SKILL.md](../../../../sources/eastreams__loong/skills/skill-creator/SKILL.md) | agentRuntime signal |
| entrypoints | [crates/spec/src/lib.rs](../../../../sources/eastreams__loong/crates/spec/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/protocol/src/lib.rs](../../../../sources/eastreams__loong/crates/protocol/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/loong-runtime/src/lib.rs](../../../../sources/eastreams__loong/crates/loong-runtime/src/lib.rs) | entrypoints signal |
| entrypoints | [crates/loong-plugin-sdk/src/lib.rs](../../../../sources/eastreams__loong/crates/loong-plugin-sdk/src/lib.rs) | entrypoints signal |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 14 | [crates/spec/src/lib.rs](../../../../sources/eastreams__loong/crates/spec/src/lib.rs)<br>[crates/protocol/src/lib.rs](../../../../sources/eastreams__loong/crates/protocol/src/lib.rs)<br>[crates/loong-runtime/src/lib.rs](../../../../sources/eastreams__loong/crates/loong-runtime/src/lib.rs)<br>[crates/loong-plugin-sdk/src/lib.rs](../../../../sources/eastreams__loong/crates/loong-plugin-sdk/src/lib.rs)<br>[crates/loong-core/src/lib.rs](../../../../sources/eastreams__loong/crates/loong-core/src/lib.rs)<br>[crates/loong-cli/src/lib.rs](../../../../sources/eastreams__loong/crates/loong-cli/src/lib.rs)<br>[crates/loong-app-protocol/src/lib.rs](../../../../sources/eastreams__loong/crates/loong-app-protocol/src/lib.rs)<br>[crates/kernel/src/lib.rs](../../../../sources/eastreams__loong/crates/kernel/src/lib.rs) |
| agentRuntime | 1226 | [AGENTS.md](../../../../sources/eastreams__loong/AGENTS.md)<br>[skills/systematic-debugging/SKILL.md](../../../../sources/eastreams__loong/skills/systematic-debugging/SKILL.md)<br>[skills/skill-creator/LICENSE.txt](../../../../sources/eastreams__loong/skills/skill-creator/LICENSE.txt)<br>[skills/skill-creator/SKILL.md](../../../../sources/eastreams__loong/skills/skill-creator/SKILL.md)<br>[skills/skill-creator/scripts/__init__.py](../../../../sources/eastreams__loong/skills/skill-creator/scripts/__init__.py)<br>[skills/skill-creator/scripts/aggregate_benchmark.py](../../../../sources/eastreams__loong/skills/skill-creator/scripts/aggregate_benchmark.py)<br>[skills/skill-creator/scripts/generate_report.py](../../../../sources/eastreams__loong/skills/skill-creator/scripts/generate_report.py)<br>[skills/skill-creator/scripts/improve_description.py](../../../../sources/eastreams__loong/skills/skill-creator/scripts/improve_description.py) |
| mcp | 11 | [skills/native-mcp/SKILL.md](../../../../sources/eastreams__loong/skills/native-mcp/SKILL.md)<br>[crates/daemon/tests/integration/mcp.rs](../../../../sources/eastreams__loong/crates/daemon/tests/integration/mcp.rs)<br>[crates/daemon/src/mcp_cli.rs](../../../../sources/eastreams__loong/crates/daemon/src/mcp_cli.rs)<br>[crates/app/src/mcp/config.rs](../../../../sources/eastreams__loong/crates/app/src/mcp/config.rs)<br>[crates/app/src/mcp/mod.rs](../../../../sources/eastreams__loong/crates/app/src/mcp/mod.rs)<br>[crates/app/src/mcp/registry.rs](../../../../sources/eastreams__loong/crates/app/src/mcp/registry.rs)<br>[crates/app/src/mcp/types.rs](../../../../sources/eastreams__loong/crates/app/src/mcp/types.rs)<br>[crates/app/src/acp/acpx_mcp.rs](../../../../sources/eastreams__loong/crates/app/src/acp/acpx_mcp.rs) |
| retrieval | 52 | [skills/larksuite-cli/lark-wiki/SKILL.md](../../../../sources/eastreams__loong/skills/larksuite-cli/lark-wiki/SKILL.md)<br>[skills/byted-web-search/references/docs-index.md](../../../../sources/eastreams__loong/skills/byted-web-search/references/docs-index.md)<br>[site/index.mdx](../../../../sources/eastreams__loong/site/index.mdx)<br>[site/use-loong/memory-profiles.mdx](../../../../sources/eastreams__loong/site/use-loong/memory-profiles.mdx)<br>[site/use-loong/tools-and-memory.mdx](../../../../sources/eastreams__loong/site/use-loong/tools-and-memory.mdx)<br>[site/use-loong/provider-guides/index.mdx](../../../../sources/eastreams__loong/site/use-loong/provider-guides/index.mdx)<br>[site/use-loong/channel-guides/index.mdx](../../../../sources/eastreams__loong/site/use-loong/channel-guides/index.mdx)<br>[scripts/check_dep_graph.sh](../../../../sources/eastreams__loong/scripts/check_dep_graph.sh) |
| spec | 112 | [ARCHITECTURE.md](../../../../sources/eastreams__loong/ARCHITECTURE.md)<br>[skills/minimax-office/minimax-pdf/design/design.md](../../../../sources/eastreams__loong/skills/minimax-office/minimax-pdf/design/design.md)<br>[skills/minimax-office/minimax-docx/references/design_good_bad_examples.md](../../../../sources/eastreams__loong/skills/minimax-office/minimax-docx/references/design_good_bad_examples.md)<br>[skills/minimax-office/minimax-docx/references/design_principles.md](../../../../sources/eastreams__loong/skills/minimax-office/minimax-docx/references/design_principles.md)<br>[skills/larksuite-cli/lark-whiteboard/scenes/architecture.md](../../../../sources/eastreams__loong/skills/larksuite-cli/lark-whiteboard/scenes/architecture.md)<br>[skills/design-md/README.md](../../../../sources/eastreams__loong/skills/design-md/README.md)<br>[skills/design-md/SKILL.md](../../../../sources/eastreams__loong/skills/design-md/SKILL.md)<br>[skills/design-md/examples/DESIGN.md](../../../../sources/eastreams__loong/skills/design-md/examples/DESIGN.md) |
| eval | 277 | [tests/__init__.py](../../../../sources/eastreams__loong/tests/__init__.py)<br>[skills/skill-creator/scripts/aggregate_benchmark.py](../../../../sources/eastreams__loong/skills/skill-creator/scripts/aggregate_benchmark.py)<br>[skills/skill-creator/scripts/run_eval.py](../../../../sources/eastreams__loong/skills/skill-creator/scripts/run_eval.py)<br>[skills/skill-creator/eval-viewer/generate_review.py](../../../../sources/eastreams__loong/skills/skill-creator/eval-viewer/generate_review.py)<br>[skills/skill-creator/eval-viewer/viewer.html](../../../../sources/eastreams__loong/skills/skill-creator/eval-viewer/viewer.html)<br>[skills/skill-creator/assets/eval_review.html](../../../../sources/eastreams__loong/skills/skill-creator/assets/eval_review.html)<br>[scripts/benchmark_programmatic_pressure.sh](../../../../sources/eastreams__loong/scripts/benchmark_programmatic_pressure.sh)<br>[scripts/benchmark_wasm_cache.sh](../../../../sources/eastreams__loong/scripts/benchmark_wasm_cache.sh) |
| security | 63 | [SECURITY.md](../../../../sources/eastreams__loong/SECURITY.md)<br>[skills/minimax-office/minimax-xlsx/scripts/style_audit.py](../../../../sources/eastreams__loong/skills/minimax-office/minimax-xlsx/scripts/style_audit.py)<br>[site/reference/documentation-policy.mdx](../../../../sources/eastreams__loong/site/reference/documentation-policy.mdx)<br>[site/reference/security-and-reliability.mdx](../../../../sources/eastreams__loong/site/reference/security-and-reliability.mdx)<br>[scripts/test_promotion_guard_workflows.sh](../../../../sources/eastreams__loong/scripts/test_promotion_guard_workflows.sh)<br>[examples/spec/plugin-bootstrap-trust-policy.json](../../../../sources/eastreams__loong/examples/spec/plugin-bootstrap-trust-policy.json)<br>[examples/spec/plugin-wasm-security-scan.json](../../../../sources/eastreams__loong/examples/spec/plugin-wasm-security-scan.json)<br>[examples/spec/self-awareness-guard.json](../../../../sources/eastreams__loong/examples/spec/self-awareness-guard.json) |
| ci | 9 | [.github/workflows/ci.yml](../../../../sources/eastreams__loong/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/eastreams__loong/.github/workflows/codeql.yml)<br>[.github/workflows/enforce-dev-to-main.yml](../../../../sources/eastreams__loong/.github/workflows/enforce-dev-to-main.yml)<br>[.github/workflows/enforce-main-to-release.yml](../../../../sources/eastreams__loong/.github/workflows/enforce-main-to-release.yml)<br>[.github/workflows/labeler.yml](../../../../sources/eastreams__loong/.github/workflows/labeler.yml)<br>[.github/workflows/perf-benchmark.yml](../../../../sources/eastreams__loong/.github/workflows/perf-benchmark.yml)<br>[.github/workflows/perf-lint.yml](../../../../sources/eastreams__loong/.github/workflows/perf-lint.yml)<br>[.github/workflows/release.yml](../../../../sources/eastreams__loong/.github/workflows/release.yml) |
| container | 4 | [deploy/observability/docker-compose.yml](../../../../sources/eastreams__loong/deploy/observability/docker-compose.yml)<br>[deploy/observability/generate-certs.sh](../../../../sources/eastreams__loong/deploy/observability/generate-certs.sh)<br>[deploy/observability/otel-collector-config.yaml](../../../../sources/eastreams__loong/deploy/observability/otel-collector-config.yaml)<br>[deploy/observability/README.md](../../../../sources/eastreams__loong/deploy/observability/README.md) |
| instruction | 3 | [AGENTS.md](../../../../sources/eastreams__loong/AGENTS.md)<br>[CLAUDE.md](../../../../sources/eastreams__loong/CLAUDE.md)<br>[site/use-loong/provider-guides/gemini.mdx](../../../../sources/eastreams__loong/site/use-loong/provider-guides/gemini.mdx) |
| docs | 165 | [README.md](../../../../sources/eastreams__loong/README.md)<br>[README.zh-CN.md](../../../../sources/eastreams__loong/README.zh-CN.md)<br>[skills/minimax-office/minimax-pdf/README.md](../../../../sources/eastreams__loong/skills/minimax-office/minimax-pdf/README.md)<br>[skills/design-md/README.md](../../../../sources/eastreams__loong/skills/design-md/README.md)<br>[skills/byted-web-search/README.md](../../../../sources/eastreams__loong/skills/byted-web-search/README.md)<br>[site/docs.json](../../../../sources/eastreams__loong/site/docs.json)<br>[site/index.mdx](../../../../sources/eastreams__loong/site/index.mdx)<br>[site/README.md](../../../../sources/eastreams__loong/site/README.md) |
| config | 18 | [Cargo.lock](../../../../sources/eastreams__loong/Cargo.lock)<br>[Cargo.toml](../../../../sources/eastreams__loong/Cargo.toml)<br>[runtime-plugins/whatsapp-personal-bridge/package.json](../../../../sources/eastreams__loong/runtime-plugins/whatsapp-personal-bridge/package.json)<br>[patches/dialoguer-0.12.0/Cargo.lock](../../../../sources/eastreams__loong/patches/dialoguer-0.12.0/Cargo.lock)<br>[patches/dialoguer-0.12.0/Cargo.toml](../../../../sources/eastreams__loong/patches/dialoguer-0.12.0/Cargo.toml)<br>[crates/spec/Cargo.toml](../../../../sources/eastreams__loong/crates/spec/Cargo.toml)<br>[crates/protocol/Cargo.toml](../../../../sources/eastreams__loong/crates/protocol/Cargo.toml)<br>[crates/loong-runtime/Cargo.toml](../../../../sources/eastreams__loong/crates/loong-runtime/Cargo.toml) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 277 | [tests/__init__.py](../../../../sources/eastreams__loong/tests/__init__.py)<br>[skills/skill-creator/scripts/aggregate_benchmark.py](../../../../sources/eastreams__loong/skills/skill-creator/scripts/aggregate_benchmark.py)<br>[skills/skill-creator/scripts/run_eval.py](../../../../sources/eastreams__loong/skills/skill-creator/scripts/run_eval.py)<br>[skills/skill-creator/eval-viewer/generate_review.py](../../../../sources/eastreams__loong/skills/skill-creator/eval-viewer/generate_review.py)<br>[skills/skill-creator/eval-viewer/viewer.html](../../../../sources/eastreams__loong/skills/skill-creator/eval-viewer/viewer.html)<br>[skills/skill-creator/assets/eval_review.html](../../../../sources/eastreams__loong/skills/skill-creator/assets/eval_review.html) |
| CI workflows | 9 | [.github/workflows/ci.yml](../../../../sources/eastreams__loong/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/eastreams__loong/.github/workflows/codeql.yml)<br>[.github/workflows/enforce-dev-to-main.yml](../../../../sources/eastreams__loong/.github/workflows/enforce-dev-to-main.yml)<br>[.github/workflows/enforce-main-to-release.yml](../../../../sources/eastreams__loong/.github/workflows/enforce-main-to-release.yml)<br>[.github/workflows/labeler.yml](../../../../sources/eastreams__loong/.github/workflows/labeler.yml)<br>[.github/workflows/perf-benchmark.yml](../../../../sources/eastreams__loong/.github/workflows/perf-benchmark.yml) |
| Containers / deploy | 4 | [deploy/observability/docker-compose.yml](../../../../sources/eastreams__loong/deploy/observability/docker-compose.yml)<br>[deploy/observability/generate-certs.sh](../../../../sources/eastreams__loong/deploy/observability/generate-certs.sh)<br>[deploy/observability/otel-collector-config.yaml](../../../../sources/eastreams__loong/deploy/observability/otel-collector-config.yaml)<br>[deploy/observability/README.md](../../../../sources/eastreams__loong/deploy/observability/README.md) |
| Security / policy | 63 | [SECURITY.md](../../../../sources/eastreams__loong/SECURITY.md)<br>[skills/minimax-office/minimax-xlsx/scripts/style_audit.py](../../../../sources/eastreams__loong/skills/minimax-office/minimax-xlsx/scripts/style_audit.py)<br>[site/reference/documentation-policy.mdx](../../../../sources/eastreams__loong/site/reference/documentation-policy.mdx)<br>[site/reference/security-and-reliability.mdx](../../../../sources/eastreams__loong/site/reference/security-and-reliability.mdx)<br>[scripts/test_promotion_guard_workflows.sh](../../../../sources/eastreams__loong/scripts/test_promotion_guard_workflows.sh)<br>[examples/spec/plugin-bootstrap-trust-policy.json](../../../../sources/eastreams__loong/examples/spec/plugin-bootstrap-trust-policy.json) |
| Agent instructions | 3 | [AGENTS.md](../../../../sources/eastreams__loong/AGENTS.md)<br>[CLAUDE.md](../../../../sources/eastreams__loong/CLAUDE.md)<br>[site/use-loong/provider-guides/gemini.mdx](../../../../sources/eastreams__loong/site/use-loong/provider-guides/gemini.mdx) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `skills/native-mcp/SKILL.md`, `crates/daemon/tests/integration/mcp.rs`, `crates/daemon/src/mcp_cli.rs`.
2. Trace execution through entrypoints: `crates/spec/src/lib.rs`, `crates/protocol/src/lib.rs`, `crates/loong-runtime/src/lib.rs`.
3. Map agent/tool runtime through: `AGENTS.md`, `skills/systematic-debugging/SKILL.md`, `skills/skill-creator/LICENSE.txt`.
4. Inspect retrieval/memory/indexing through: `skills/larksuite-cli/lark-wiki/SKILL.md`, `skills/byted-web-search/references/docs-index.md`, `site/index.mdx`.
5. Verify behavior through test/eval files: `tests/__init__.py`, `skills/skill-creator/scripts/aggregate_benchmark.py`, `skills/skill-creator/scripts/run_eval.py`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Lightweight, clear, and fully extensible AI agent infrastructure — learn easily, customize anything 🐉. 핵심 구조 신호는 Rust, Cargo.toml, README.md, AGENTS.md, CLAUDE.md, tests이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 license metadata missing, needs deeper structural scan입니다.
