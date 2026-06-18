# sashiko-dev/sashiko 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Agentic review of Linux Kernel code changes

## 요약

- 조사 단위: `sources/sashiko-dev__sashiko` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 320 files, 47 directories, depth score 114, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=third_party/prompts/systemd/skills/systemd.md, third_party/prompts/kernel/skills/kernel.md, third_party/prompts/kernel/scripts/agent_one.sh이고, 의존성 단서는 llama, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | sashiko-dev/sashiko |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 814 |
| Forks | 153 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/sashiko-dev__sashiko](../../../../sources/sashiko-dev__sashiko) |
| 기존 보고서 | [reports/global-trending/repositories/sashiko-dev__sashiko.md](../../../global-trending/repositories/sashiko-dev__sashiko.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 320 / 47 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .github, benchmarks, designs, docs, sashiko.dev, scripts, skills, src, static, tests, third_party |
| 상위 확장자 | .md: 185, .rs: 60, .toml: 16, .yaml: 11, (none): 11, .sh: 9, .yml: 6, .json: 5, .png: 4, .py: 4, .lock: 2, .txt: 2 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 17 |
| tests | validation surface | 16 |
| src | source boundary | 10 |
| .github | ci surface | 1 |
| benchmarks | validation surface | 1 |
| designs | top-level component | 1 |
| sashiko.dev | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| static | top-level component | 1 |
| third_party | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| build | Makefile | build | make build |
| quality | Makefile | fmt | make fmt |
| quality | Makefile | lint | make lint |
| test | Makefile | test | make test |
| utility | Makefile | clean | make clean |
| quality | Makefile | check-pr | make check-pr |
| quality | Makefile | check-integration | make check-integration |
| quality | Makefile | check-all | make check-all |
| utility | Makefile | sob | make sob |
| test | Makefile | integration-test | make integration-test |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | llama |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [third_party/prompts/systemd/skills/systemd.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/systemd/skills/systemd.md) | agentRuntime signal |
| agentRuntime | [third_party/prompts/kernel/skills/kernel.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/skills/kernel.md) | agentRuntime signal |
| agentRuntime | [third_party/prompts/kernel/scripts/agent_one.sh](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/scripts/agent_one.sh) | agentRuntime signal |
| agentRuntime | [third_party/prompts/kernel/agent/check-fixes.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/agent/check-fixes.md) | agentRuntime signal |
| entrypoints | [src/main.rs](../../../../sources/sashiko-dev__sashiko/src/main.rs) | entrypoints signal |
| entrypoints | [src/bin/benchmark.rs](../../../../sources/sashiko-dev__sashiko/src/bin/benchmark.rs) | entrypoints signal |
| entrypoints | [src/bin/review.rs](../../../../sources/sashiko-dev__sashiko/src/bin/review.rs) | entrypoints signal |
| entrypoints | [src/bin/sashiko-cli.rs](../../../../sources/sashiko-dev__sashiko/src/bin/sashiko-cli.rs) | entrypoints signal |
| instruction | [GEMINI.md](../../../../sources/sashiko-dev__sashiko/GEMINI.md) | instruction signal |
| config | [Cargo.lock](../../../../sources/sashiko-dev__sashiko/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/sashiko-dev__sashiko/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/sashiko-dev__sashiko/Makefile) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [src/main.rs](../../../../sources/sashiko-dev__sashiko/src/main.rs)<br>[src/bin/benchmark.rs](../../../../sources/sashiko-dev__sashiko/src/bin/benchmark.rs)<br>[src/bin/review.rs](../../../../sources/sashiko-dev__sashiko/src/bin/review.rs)<br>[src/bin/sashiko-cli.rs](../../../../sources/sashiko-dev__sashiko/src/bin/sashiko-cli.rs) |
| agentRuntime | 28 | [third_party/prompts/systemd/skills/systemd.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/systemd/skills/systemd.md)<br>[third_party/prompts/kernel/skills/kernel.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/skills/kernel.md)<br>[third_party/prompts/kernel/scripts/agent_one.sh](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/scripts/agent_one.sh)<br>[third_party/prompts/kernel/agent/check-fixes.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/agent/check-fixes.md)<br>[third_party/prompts/kernel/agent/context.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/agent/context.md)<br>[third_party/prompts/kernel/agent/debug-code.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/agent/debug-code.md)<br>[third_party/prompts/kernel/agent/debug-commits.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/agent/debug-commits.md)<br>[third_party/prompts/kernel/agent/debug-report.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/agent/debug-report.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [static/index.html](../../../../sources/sashiko-dev__sashiko/static/index.html) |
| spec | 29 | [designs/DESIGN_AI_WORKER_INTERACTION.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_AI_WORKER_INTERACTION.md)<br>[designs/DESIGN_BASELINE_DETECTION.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_BASELINE_DETECTION.md)<br>[designs/DESIGN_BENCHMARK_VALIDATION.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_BENCHMARK_VALIDATION.md)<br>[designs/DESIGN_CLAUDE_PROVIDER.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_CLAUDE_PROVIDER.md)<br>[designs/DESIGN_CLI_TOOL_V2.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_CLI_TOOL_V2.md)<br>[designs/DESIGN_CLI_TOOL.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_CLI_TOOL.md)<br>[designs/DESIGN_CONTENT_TRUNCATION.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_CONTENT_TRUNCATION.md)<br>[designs/DESIGN_GEMINI_CACHING.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_GEMINI_CACHING.md) |
| eval | 25 | [third_party/prompts/kernel/subsystem/tracing.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/subsystem/tracing.md)<br>[tests/integration_tests.rs](../../../../sources/sashiko-dev__sashiko/tests/integration_tests.rs)<br>[tests/integration/cover_letter_late_merge_test.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/cover_letter_late_merge_test.rs)<br>[tests/integration/db_version_merge_test.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/db_version_merge_test.rs)<br>[tests/integration/findings_sum_test.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/findings_sum_test.rs)<br>[tests/integration/merge_bug_different_series.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/merge_bug_different_series.rs)<br>[tests/integration/merge_bug_loose_patch_count.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/merge_bug_loose_patch_count.rs)<br>[tests/integration/merge_bug_prefixes.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/merge_bug_prefixes.rs) |
| security | 5 | [email_policy.toml](../../../../sources/sashiko-dev__sashiko/email_policy.toml)<br>[src/email_policy.rs](../../../../sources/sashiko-dev__sashiko/src/email_policy.rs)<br>[sashiko.dev/email_policy.toml](../../../../sources/sashiko-dev__sashiko/sashiko.dev/email_policy.toml)<br>[docs/examples/email_policy.toml](../../../../sources/sashiko-dev__sashiko/docs/examples/email_policy.toml)<br>[designs/DESIGN_SECURITY_REVIEW_WORKER.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_SECURITY_REVIEW_WORKER.md) |
| ci | 5 | [.github/workflows/linting.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/linting.yml)<br>[.github/workflows/pull-requests.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/pull-requests.yml)<br>[.github/workflows/push-main.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/push-main.yml)<br>[.github/workflows/tag-release.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/tag-release.yml)<br>[.github/workflows/unit-tests.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/unit-tests.yml) |
| container | 1 | [Dockerfile](../../../../sources/sashiko-dev__sashiko/Dockerfile) |
| instruction | 1 | [GEMINI.md](../../../../sources/sashiko-dev__sashiko/GEMINI.md) |
| docs | 21 | [README.md](../../../../sources/sashiko-dev__sashiko/README.md)<br>[third_party/prompts/README.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/README.md)<br>[third_party/prompts/systemd/README.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/systemd/README.md)<br>[third_party/prompts/kernel/README.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/README.md)<br>[third_party/prompts/kernel/docs/github-actions-claude-integration.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/docs/github-actions-claude-integration.md)<br>[third_party/prompts/iproute/README.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/iproute/README.md)<br>[docs/benchmarking.md](../../../../sources/sashiko-dev__sashiko/docs/benchmarking.md)<br>[docs/configuration.md](../../../../sources/sashiko-dev__sashiko/docs/configuration.md) |
| config | 3 | [Cargo.lock](../../../../sources/sashiko-dev__sashiko/Cargo.lock)<br>[Cargo.toml](../../../../sources/sashiko-dev__sashiko/Cargo.toml)<br>[Makefile](../../../../sources/sashiko-dev__sashiko/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 25 | [third_party/prompts/kernel/subsystem/tracing.md](../../../../sources/sashiko-dev__sashiko/third_party/prompts/kernel/subsystem/tracing.md)<br>[tests/integration_tests.rs](../../../../sources/sashiko-dev__sashiko/tests/integration_tests.rs)<br>[tests/integration/cover_letter_late_merge_test.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/cover_letter_late_merge_test.rs)<br>[tests/integration/db_version_merge_test.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/db_version_merge_test.rs)<br>[tests/integration/findings_sum_test.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/findings_sum_test.rs)<br>[tests/integration/merge_bug_different_series.rs](../../../../sources/sashiko-dev__sashiko/tests/integration/merge_bug_different_series.rs) |
| CI workflow | 5 | [.github/workflows/linting.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/linting.yml)<br>[.github/workflows/pull-requests.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/pull-requests.yml)<br>[.github/workflows/push-main.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/push-main.yml)<br>[.github/workflows/tag-release.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/tag-release.yml)<br>[.github/workflows/unit-tests.yml](../../../../sources/sashiko-dev__sashiko/.github/workflows/unit-tests.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/sashiko-dev__sashiko/Dockerfile) |
| 보안/정책 | 5 | [email_policy.toml](../../../../sources/sashiko-dev__sashiko/email_policy.toml)<br>[src/email_policy.rs](../../../../sources/sashiko-dev__sashiko/src/email_policy.rs)<br>[sashiko.dev/email_policy.toml](../../../../sources/sashiko-dev__sashiko/sashiko.dev/email_policy.toml)<br>[docs/examples/email_policy.toml](../../../../sources/sashiko-dev__sashiko/docs/examples/email_policy.toml)<br>[designs/DESIGN_SECURITY_REVIEW_WORKER.md](../../../../sources/sashiko-dev__sashiko/designs/DESIGN_SECURITY_REVIEW_WORKER.md) |
| 에이전트 지시문 | 1 | [GEMINI.md](../../../../sources/sashiko-dev__sashiko/GEMINI.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `third_party/prompts/systemd/skills/systemd.md`, `third_party/prompts/kernel/skills/kernel.md`, `third_party/prompts/kernel/scripts/agent_one.sh`.
2. entrypoint를 따라 실행 흐름 확인: `src/main.rs`, `src/bin/benchmark.rs`, `src/bin/review.rs`.
3. agent/tool runtime 매핑: `third_party/prompts/systemd/skills/systemd.md`, `third_party/prompts/kernel/skills/kernel.md`, `third_party/prompts/kernel/scripts/agent_one.sh`.
4. retrieval/memory/indexing 확인: `static/index.html`.
5. test/eval 파일로 동작 검증: `third_party/prompts/kernel/subsystem/tracing.md`, `tests/integration_tests.rs`, `tests/integration/cover_letter_late_merge_test.rs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Agentic review of Linux Kernel code changes. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, Makefile, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
