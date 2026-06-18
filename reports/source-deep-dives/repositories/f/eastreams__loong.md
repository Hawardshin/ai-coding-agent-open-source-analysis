# eastreams/loong 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Lightweight, clear, and fully extensible AI agent infrastructure — learn easily, customize anything 🐉

## 요약

- 조사 단위: `sources/eastreams__loong` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,406 files, 394 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=skills/native-mcp/SKILL.md, crates/daemon/tests/integration/mcp.rs, crates/daemon/src/mcp_cli.rs이고, 의존성 단서는 opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | eastreams/loong |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 640 |
| Forks | 104 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/eastreams__loong](../../../../sources/eastreams__loong) |
| 기존 보고서 | [reports/global-trending/repositories/eastreams__loong.md](../../../global-trending/repositories/eastreams__loong.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2406 / 394 |
| 관측 최대 깊이 | 11 |
| 상위 디렉터리 | .cargo, .github, assets, crates, deploy, docs, examples, patches, runtime-plugins, scripts, site, skills, tasks, tests |
| 상위 확장자 | .rs: 1017, .md: 576, .xsd: 242, .py: 165, .mdx: 107, .cs: 78, .sh: 59, .json: 28, .xml: 26, .toml: 22, .yml: 17, (none): 16 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
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


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
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


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
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


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 277 | [tests/__init__.py](../../../../sources/eastreams__loong/tests/__init__.py)<br>[skills/skill-creator/scripts/aggregate_benchmark.py](../../../../sources/eastreams__loong/skills/skill-creator/scripts/aggregate_benchmark.py)<br>[skills/skill-creator/scripts/run_eval.py](../../../../sources/eastreams__loong/skills/skill-creator/scripts/run_eval.py)<br>[skills/skill-creator/eval-viewer/generate_review.py](../../../../sources/eastreams__loong/skills/skill-creator/eval-viewer/generate_review.py)<br>[skills/skill-creator/eval-viewer/viewer.html](../../../../sources/eastreams__loong/skills/skill-creator/eval-viewer/viewer.html)<br>[skills/skill-creator/assets/eval_review.html](../../../../sources/eastreams__loong/skills/skill-creator/assets/eval_review.html) |
| CI workflow | 9 | [.github/workflows/ci.yml](../../../../sources/eastreams__loong/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/eastreams__loong/.github/workflows/codeql.yml)<br>[.github/workflows/enforce-dev-to-main.yml](../../../../sources/eastreams__loong/.github/workflows/enforce-dev-to-main.yml)<br>[.github/workflows/enforce-main-to-release.yml](../../../../sources/eastreams__loong/.github/workflows/enforce-main-to-release.yml)<br>[.github/workflows/labeler.yml](../../../../sources/eastreams__loong/.github/workflows/labeler.yml)<br>[.github/workflows/perf-benchmark.yml](../../../../sources/eastreams__loong/.github/workflows/perf-benchmark.yml) |
| 컨테이너/배포 | 4 | [deploy/observability/docker-compose.yml](../../../../sources/eastreams__loong/deploy/observability/docker-compose.yml)<br>[deploy/observability/generate-certs.sh](../../../../sources/eastreams__loong/deploy/observability/generate-certs.sh)<br>[deploy/observability/otel-collector-config.yaml](../../../../sources/eastreams__loong/deploy/observability/otel-collector-config.yaml)<br>[deploy/observability/README.md](../../../../sources/eastreams__loong/deploy/observability/README.md) |
| 보안/정책 | 63 | [SECURITY.md](../../../../sources/eastreams__loong/SECURITY.md)<br>[skills/minimax-office/minimax-xlsx/scripts/style_audit.py](../../../../sources/eastreams__loong/skills/minimax-office/minimax-xlsx/scripts/style_audit.py)<br>[site/reference/documentation-policy.mdx](../../../../sources/eastreams__loong/site/reference/documentation-policy.mdx)<br>[site/reference/security-and-reliability.mdx](../../../../sources/eastreams__loong/site/reference/security-and-reliability.mdx)<br>[scripts/test_promotion_guard_workflows.sh](../../../../sources/eastreams__loong/scripts/test_promotion_guard_workflows.sh)<br>[examples/spec/plugin-bootstrap-trust-policy.json](../../../../sources/eastreams__loong/examples/spec/plugin-bootstrap-trust-policy.json) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/eastreams__loong/AGENTS.md)<br>[CLAUDE.md](../../../../sources/eastreams__loong/CLAUDE.md)<br>[site/use-loong/provider-guides/gemini.mdx](../../../../sources/eastreams__loong/site/use-loong/provider-guides/gemini.mdx) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `skills/native-mcp/SKILL.md`, `crates/daemon/tests/integration/mcp.rs`, `crates/daemon/src/mcp_cli.rs`.
2. entrypoint를 따라 실행 흐름 확인: `crates/spec/src/lib.rs`, `crates/protocol/src/lib.rs`, `crates/loong-runtime/src/lib.rs`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills/systematic-debugging/SKILL.md`, `skills/skill-creator/LICENSE.txt`.
4. retrieval/memory/indexing 확인: `skills/larksuite-cli/lark-wiki/SKILL.md`, `skills/byted-web-search/references/docs-index.md`, `site/index.mdx`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `skills/skill-creator/scripts/aggregate_benchmark.py`, `skills/skill-creator/scripts/run_eval.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Lightweight, clear, and fully extensible AI agent infrastructure — learn easily, customize anything 🐉. 핵심 구조 신호는 Rust, Cargo.toml, README.md, AGENTS.md, CLAUDE.md, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
