# Dicklesworthstone/meta_skill 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local-first skill management platform for AI coding agents: dual SQLite+Git persistence, semantic search, bandit-optimized suggestions, and MCP integration

## 요약

- 조사 단위: `sources/Dicklesworthstone__meta_skill` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 480 files, 80 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/e2e/mcp_workflow.rs, src/cli/commands/mcp.rs이고, 의존성 단서는 claude, next, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Dicklesworthstone/meta_skill |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 174 |
| Forks | 32 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Dicklesworthstone__meta_skill](../../../../sources/Dicklesworthstone__meta_skill) |
| 기존 보고서 | [reports/global-trending/repositories/Dicklesworthstone__meta_skill.md](../../../global-trending/repositories/Dicklesworthstone__meta_skill.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 480 / 80 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .beads, .cargo, .github, .ms, benches, docs, homebrew-tap, migrations, scoop-bucket, scripts, skills, src, tests |
| 상위 확장자 | .rs: 320, .snap: 55, .md: 44, .sql: 14, .toml: 11, .yml: 9, .sh: 7, .msb: 4, .json: 3, (none): 3, .png: 2, .py: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 67 |
| src | source boundary | 47 |
| docs | documentation surface | 13 |
| .github | ci surface | 1 |
| benches | validation surface | 1 |
| homebrew-tap | top-level component | 1 |
| migrations | top-level component | 1 |
| scoop-bucket | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | claude |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | next |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/e2e/mcp_workflow.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/e2e/mcp_workflow.rs) | mcp signal |
| mcp | [src/cli/commands/mcp.rs](../../../../sources/Dicklesworthstone__meta_skill/src/cli/commands/mcp.rs) | mcp signal |
| agentRuntime | [AGENT_FRIENDLINESS_REPORT.md](../../../../sources/Dicklesworthstone__meta_skill/AGENT_FRIENDLINESS_REPORT.md) | agentRuntime signal |
| agentRuntime | [AGENTS.md](../../../../sources/Dicklesworthstone__meta_skill/AGENTS.md) | agentRuntime signal |
| agentRuntime | [tests/unit/agent_mail_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/agent_mail_tests.rs) | agentRuntime signal |
| agentRuntime | [tests/unit/skill_spec_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/skill_spec_tests.rs) | agentRuntime signal |
| entrypoints | [tests/unit/main.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/main.rs) | entrypoints signal |
| entrypoints | [tests/properties/main.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/properties/main.rs) | entrypoints signal |
| entrypoints | [tests/integration/main.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/integration/main.rs) | entrypoints signal |
| entrypoints | [tests/e2e/main.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/e2e/main.rs) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/Dicklesworthstone__meta_skill/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/Dicklesworthstone__meta_skill/Cargo.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [tests/unit/main.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/main.rs)<br>[tests/properties/main.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/properties/main.rs)<br>[tests/integration/main.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/integration/main.rs)<br>[tests/e2e/main.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/e2e/main.rs)<br>[src/app.rs](../../../../sources/Dicklesworthstone__meta_skill/src/app.rs)<br>[src/main.rs](../../../../sources/Dicklesworthstone__meta_skill/src/main.rs)<br>[src/bin/test_beads_e2e.rs](../../../../sources/Dicklesworthstone__meta_skill/src/bin/test_beads_e2e.rs) |
| agentRuntime | 53 | [AGENT_FRIENDLINESS_REPORT.md](../../../../sources/Dicklesworthstone__meta_skill/AGENT_FRIENDLINESS_REPORT.md)<br>[AGENTS.md](../../../../sources/Dicklesworthstone__meta_skill/AGENTS.md)<br>[tests/unit/agent_mail_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/agent_mail_tests.rs)<br>[tests/unit/skill_spec_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/skill_spec_tests.rs)<br>[tests/snapshots/skill_compilation.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/snapshots/skill_compilation.rs)<br>[tests/integration/agent_compat_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/integration/agent_compat_tests.rs)<br>[tests/integration/agent_detection_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/integration/agent_detection_tests.rs)<br>[tests/integration/context_detection_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/integration/context_detection_tests.rs) |
| mcp | 2 | [tests/e2e/mcp_workflow.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/e2e/mcp_workflow.rs)<br>[src/cli/commands/mcp.rs](../../../../sources/Dicklesworthstone__meta_skill/src/cli/commands/mcp.rs) |
| retrieval | 12 | [tests/unit/graph_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/graph_tests.rs)<br>[tests/unit/hash_embed_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/hash_embed_tests.rs)<br>[tests/e2e/graph_workflow.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/e2e/graph_workflow.rs)<br>[tests/e2e/index_workflow.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/e2e/index_workflow.rs)<br>[src/search/tantivy_index.rs](../../../../sources/Dicklesworthstone__meta_skill/src/search/tantivy_index.rs)<br>[src/graph/bv.rs](../../../../sources/Dicklesworthstone__meta_skill/src/graph/bv.rs)<br>[src/graph/mod.rs](../../../../sources/Dicklesworthstone__meta_skill/src/graph/mod.rs)<br>[src/graph/skills.rs](../../../../sources/Dicklesworthstone__meta_skill/src/graph/skills.rs) |
| spec | 8 | [tests/unit/skill_spec_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/skill_spec_tests.rs)<br>[src/core/requirements.rs](../../../../sources/Dicklesworthstone__meta_skill/src/core/requirements.rs)<br>[src/core/spec_lens.rs](../../../../sources/Dicklesworthstone__meta_skill/src/core/spec_lens.rs)<br>[src/core/spec_migration.rs](../../../../sources/Dicklesworthstone__meta_skill/src/core/spec_migration.rs)<br>[src/cli/commands/requirements.rs](../../../../sources/Dicklesworthstone__meta_skill/src/cli/commands/requirements.rs)<br>[skills/crafting-readme-files/skill.spec.json](../../../../sources/Dicklesworthstone__meta_skill/skills/crafting-readme-files/skill.spec.json)<br>[skills/building-glamorous-tuis/references/production-architecture.md](../../../../sources/Dicklesworthstone__meta_skill/skills/building-glamorous-tuis/references/production-architecture.md)<br>[.ms/meta-skills/api-design.toml](../../../../sources/Dicklesworthstone__meta_skill/.ms/meta-skills/api-design.toml) |
| eval | 174 | [tests/cli.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/cli.rs)<br>[tests/snapshot_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/snapshot_tests.rs)<br>[tests/unit/agent_mail_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/agent_mail_tests.rs)<br>[tests/unit/cli_command_parse_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/cli_command_parse_tests.rs)<br>[tests/unit/config_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/config_tests.rs)<br>[tests/unit/graph_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/graph_tests.rs)<br>[tests/unit/hash_embed_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/hash_embed_tests.rs)<br>[tests/unit/main.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/main.rs) |
| security | 15 | [tests/integration/security_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/integration/security_tests.rs)<br>[tests/e2e/security_workflow.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/e2e/security_workflow.rs)<br>[src/security/acip_default.md](../../../../sources/Dicklesworthstone__meta_skill/src/security/acip_default.md)<br>[src/security/acip.rs](../../../../sources/Dicklesworthstone__meta_skill/src/security/acip.rs)<br>[src/security/command_safety.rs](../../../../sources/Dicklesworthstone__meta_skill/src/security/command_safety.rs)<br>[src/security/mod.rs](../../../../sources/Dicklesworthstone__meta_skill/src/security/mod.rs)<br>[src/security/path_policy.rs](../../../../sources/Dicklesworthstone__meta_skill/src/security/path_policy.rs)<br>[src/security/secret_scanner.rs](../../../../sources/Dicklesworthstone__meta_skill/src/security/secret_scanner.rs) |
| ci | 8 | [scoop-bucket/.github/workflows/ci.yml](../../../../sources/Dicklesworthstone__meta_skill/scoop-bucket/.github/workflows/ci.yml)<br>[scoop-bucket/.github/workflows/update.yml](../../../../sources/Dicklesworthstone__meta_skill/scoop-bucket/.github/workflows/update.yml)<br>[homebrew-tap/.github/workflows/update-formula.yml](../../../../sources/Dicklesworthstone__meta_skill/homebrew-tap/.github/workflows/update-formula.yml)<br>[.github/workflows/bench.yml](../../../../sources/Dicklesworthstone__meta_skill/.github/workflows/bench.yml)<br>[.github/workflows/ci.yml](../../../../sources/Dicklesworthstone__meta_skill/.github/workflows/ci.yml)<br>[.github/workflows/e2e.yml](../../../../sources/Dicklesworthstone__meta_skill/.github/workflows/e2e.yml)<br>[.github/workflows/notify-acfs.yml](../../../../sources/Dicklesworthstone__meta_skill/.github/workflows/notify-acfs.yml)<br>[.github/workflows/release.yml](../../../../sources/Dicklesworthstone__meta_skill/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/Dicklesworthstone__meta_skill/AGENTS.md) |
| docs | 15 | [README.md](../../../../sources/Dicklesworthstone__meta_skill/README.md)<br>[tests/fixtures/bundles/README.md](../../../../sources/Dicklesworthstone__meta_skill/tests/fixtures/bundles/README.md)<br>[scoop-bucket/README.md](../../../../sources/Dicklesworthstone__meta_skill/scoop-bucket/README.md)<br>[homebrew-tap/README.md](../../../../sources/Dicklesworthstone__meta_skill/homebrew-tap/README.md)<br>[docs/bundles.md](../../../../sources/Dicklesworthstone__meta_skill/docs/bundles.md)<br>[docs/composition.md](../../../../sources/Dicklesworthstone__meta_skill/docs/composition.md)<br>[docs/config_system.md](../../../../sources/Dicklesworthstone__meta_skill/docs/config_system.md)<br>[docs/prompt_injection_defense.md](../../../../sources/Dicklesworthstone__meta_skill/docs/prompt_injection_defense.md) |
| config | 2 | [Cargo.lock](../../../../sources/Dicklesworthstone__meta_skill/Cargo.lock)<br>[Cargo.toml](../../../../sources/Dicklesworthstone__meta_skill/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 174 | [tests/cli.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/cli.rs)<br>[tests/snapshot_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/snapshot_tests.rs)<br>[tests/unit/agent_mail_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/agent_mail_tests.rs)<br>[tests/unit/cli_command_parse_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/cli_command_parse_tests.rs)<br>[tests/unit/config_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/config_tests.rs)<br>[tests/unit/graph_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/unit/graph_tests.rs) |
| CI workflow | 8 | [scoop-bucket/.github/workflows/ci.yml](../../../../sources/Dicklesworthstone__meta_skill/scoop-bucket/.github/workflows/ci.yml)<br>[scoop-bucket/.github/workflows/update.yml](../../../../sources/Dicklesworthstone__meta_skill/scoop-bucket/.github/workflows/update.yml)<br>[homebrew-tap/.github/workflows/update-formula.yml](../../../../sources/Dicklesworthstone__meta_skill/homebrew-tap/.github/workflows/update-formula.yml)<br>[.github/workflows/bench.yml](../../../../sources/Dicklesworthstone__meta_skill/.github/workflows/bench.yml)<br>[.github/workflows/ci.yml](../../../../sources/Dicklesworthstone__meta_skill/.github/workflows/ci.yml)<br>[.github/workflows/e2e.yml](../../../../sources/Dicklesworthstone__meta_skill/.github/workflows/e2e.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 15 | [tests/integration/security_tests.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/integration/security_tests.rs)<br>[tests/e2e/security_workflow.rs](../../../../sources/Dicklesworthstone__meta_skill/tests/e2e/security_workflow.rs)<br>[src/security/acip_default.md](../../../../sources/Dicklesworthstone__meta_skill/src/security/acip_default.md)<br>[src/security/acip.rs](../../../../sources/Dicklesworthstone__meta_skill/src/security/acip.rs)<br>[src/security/command_safety.rs](../../../../sources/Dicklesworthstone__meta_skill/src/security/command_safety.rs)<br>[src/security/mod.rs](../../../../sources/Dicklesworthstone__meta_skill/src/security/mod.rs) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/Dicklesworthstone__meta_skill/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/e2e/mcp_workflow.rs`, `src/cli/commands/mcp.rs`, `AGENT_FRIENDLINESS_REPORT.md`.
2. entrypoint를 따라 실행 흐름 확인: `tests/unit/main.rs`, `tests/properties/main.rs`, `tests/integration/main.rs`.
3. agent/tool runtime 매핑: `AGENT_FRIENDLINESS_REPORT.md`, `AGENTS.md`, `tests/unit/agent_mail_tests.rs`.
4. retrieval/memory/indexing 확인: `tests/unit/graph_tests.rs`, `tests/unit/hash_embed_tests.rs`, `tests/e2e/graph_workflow.rs`.
5. test/eval 파일로 동작 검증: `tests/cli.rs`, `tests/snapshot_tests.rs`, `tests/unit/agent_mail_tests.rs`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local first skill management platform for AI coding agents dual SQLite+Git persistence, semantic search, bandit optimize. 핵심 구조 신호는 Rust, Cargo.toml, README.md, AGENTS.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
