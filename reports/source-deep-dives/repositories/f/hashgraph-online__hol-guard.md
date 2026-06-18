# hashgraph-online/hol-guard 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

AI antivirus for developer agents: protect Codex, Claude Code, Cursor, Gemini, OpenCode, plugins, skills, MCP servers, and AI harnesses before tools run.

## 요약

- 조사 단위: `sources/hashgraph-online__hol-guard` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,050 files, 137 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=tests/test_guard_hashnet_mcp_canaries.py, tests/test_guard_mcp_detectors.py, tests/test_guard_mcp_package_proxy_phase14.py이고, 의존성 단서는 openai, claude, codex, gemini, mcp, fastapi, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | hashgraph-online/hol-guard |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 359 |
| Forks | 7 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/hashgraph-online__hol-guard](../../../../sources/hashgraph-online__hol-guard) |
| 기존 보고서 | [reports/global-trending/repositories/hashgraph-online__hol-guard.md](../../../global-trending/repositories/hashgraph-online__hol-guard.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1050 / 137 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .clusterfuzzlite, .factory, .github, action, dashboard, docs, fuzzers, schemas, scripts, src, tests |
| 상위 확장자 | .py: 541, .ts: 147, .tsx: 128, .md: 62, .json: 57, (none): 22, .js: 19, .yml: 16, .png: 10, .txt: 8, .lock: 7, .toml: 6 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 131 |
| docs | documentation surface | 23 |
| src | source boundary | 18 |
| .github | ci surface | 1 |
| action | top-level component | 1 |
| dashboard | top-level component | 1 |
| fuzzers | top-level component | 1 |
| schemas | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | hol-guard | hol-guard |
| utility | pyproject.toml | plugin-scanner | plugin-scanner |
| utility | pyproject.toml | plugin-guard | plugin-guard |
| utility | pyproject.toml | plugin-ecosystem-scanner | plugin-ecosystem-scanner |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, claude, gemini |
| agentProtocols | mcp, codex |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | fastapi |
| developerSurface | click |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [tests/test_guard_hashnet_mcp_canaries.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_hashnet_mcp_canaries.py) | mcp signal |
| mcp | [tests/test_guard_mcp_detectors.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_mcp_detectors.py) | mcp signal |
| mcp | [tests/test_guard_mcp_package_proxy_phase14.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_mcp_package_proxy_phase14.py) | mcp signal |
| mcp | [tests/test_guard_mcp_protection.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_mcp_protection.py) | mcp signal |
| agentRuntime | [tests/fixtures/skills-no-frontmatter/skills/bad-skill/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/skills-no-frontmatter/skills/bad-skill/SKILL.md) | agentRuntime signal |
| agentRuntime | [tests/fixtures/skills-no-frontmatter/.codex-plugin/plugin.json](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/skills-no-frontmatter/.codex-plugin/plugin.json) | agentRuntime signal |
| agentRuntime | [tests/fixtures/skills-missing-dir/.codex-plugin/plugin.json](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/skills-missing-dir/.codex-plugin/plugin.json) | agentRuntime signal |
| agentRuntime | [tests/fixtures/multi-plugin-repo/plugins/beta-plugin/skills/example/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/multi-plugin-repo/plugins/beta-plugin/skills/example/SKILL.md) | agentRuntime signal |
| entrypoints | [src/codex_plugin_scanner/guard/daemon/server.py](../../../../sources/hashgraph-online__hol-guard/src/codex_plugin_scanner/guard/daemon/server.py) | entrypoints signal |
| entrypoints | [dashboard/src/app.tsx](../../../../sources/hashgraph-online__hol-guard/dashboard/src/app.tsx) | entrypoints signal |
| entrypoints | [dashboard/src/main.tsx](../../../../sources/hashgraph-online__hol-guard/dashboard/src/main.tsx) | entrypoints signal |
| instruction | [tests/fixtures/guard-codex-malicious-mcp/.codex/config.toml](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/guard-codex-malicious-mcp/.codex/config.toml) | instruction signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [src/codex_plugin_scanner/guard/daemon/server.py](../../../../sources/hashgraph-online__hol-guard/src/codex_plugin_scanner/guard/daemon/server.py)<br>[dashboard/src/app.tsx](../../../../sources/hashgraph-online__hol-guard/dashboard/src/app.tsx)<br>[dashboard/src/main.tsx](../../../../sources/hashgraph-online__hol-guard/dashboard/src/main.tsx) |
| agentRuntime | 22 | [tests/fixtures/skills-no-frontmatter/skills/bad-skill/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/skills-no-frontmatter/skills/bad-skill/SKILL.md)<br>[tests/fixtures/skills-no-frontmatter/.codex-plugin/plugin.json](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/skills-no-frontmatter/.codex-plugin/plugin.json)<br>[tests/fixtures/skills-missing-dir/.codex-plugin/plugin.json](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/skills-missing-dir/.codex-plugin/plugin.json)<br>[tests/fixtures/multi-plugin-repo/plugins/beta-plugin/skills/example/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/multi-plugin-repo/plugins/beta-plugin/skills/example/SKILL.md)<br>[tests/fixtures/multi-plugin-repo/plugins/alpha-plugin/skills/example/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/multi-plugin-repo/plugins/alpha-plugin/skills/example/SKILL.md)<br>[tests/fixtures/malicious-skill-plugin/skills/leaky-skill/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/malicious-skill-plugin/skills/leaky-skill/SKILL.md)<br>[tests/fixtures/hermes-plugin-evil/skills/utils/benign/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/hermes-plugin-evil/skills/utils/benign/SKILL.md)<br>[tests/fixtures/hermes-plugin-evil/skills/stealth/sneaky/SKILL.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/hermes-plugin-evil/skills/stealth/sneaky/SKILL.md) |
| mcp | 26 | [tests/test_guard_hashnet_mcp_canaries.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_hashnet_mcp_canaries.py)<br>[tests/test_guard_mcp_detectors.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_mcp_detectors.py)<br>[tests/test_guard_mcp_package_proxy_phase14.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_mcp_package_proxy_phase14.py)<br>[tests/test_guard_mcp_protection.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_mcp_protection.py)<br>[tests/test_guard_mcp_skill_firewall.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_mcp_skill_firewall.py)<br>[tests/test_mcp_security.py](../../../../sources/hashgraph-online__hol-guard/tests/test_mcp_security.py)<br>[tests/test_zcode_mcp.py](../../../../sources/hashgraph-online__hol-guard/tests/test_zcode_mcp.py)<br>[tests/fixtures/mcp-canary-server.py](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/mcp-canary-server.py) |
| retrieval | 7 | [tests/test_guard_access_graph.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_access_graph.py)<br>[tests/test_guard_phase05_approval_memory.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_phase05_approval_memory.py)<br>[src/codex_plugin_scanner/guard/access_graph_events.py](../../../../sources/hashgraph-online__hol-guard/src/codex_plugin_scanner/guard/access_graph_events.py)<br>[src/codex_plugin_scanner/guard/daemon/static/index.html](../../../../sources/hashgraph-online__hol-guard/src/codex_plugin_scanner/guard/daemon/static/index.html)<br>[src/codex_plugin_scanner/guard/daemon/static/assets/index.css](../../../../sources/hashgraph-online__hol-guard/src/codex_plugin_scanner/guard/daemon/static/assets/index.css)<br>[dashboard/index.html](../../../../sources/hashgraph-online__hol-guard/dashboard/index.html)<br>[dashboard/src/evidence/index.ts](../../../../sources/hashgraph-online__hol-guard/dashboard/src/evidence/index.ts) |
| spec | 8 | [docker-requirements.txt](../../../../sources/hashgraph-online__hol-guard/docker-requirements.txt)<br>[requirements.txt](../../../../sources/hashgraph-online__hol-guard/requirements.txt)<br>[tests/test_guard_protect_package_spec_parsing.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_protect_package_spec_parsing.py)<br>[docs/guard/architecture.md](../../../../sources/hashgraph-online__hol-guard/docs/guard/architecture.md)<br>[dashboard/src/about/about-design.test.ts](../../../../sources/hashgraph-online__hol-guard/dashboard/src/about/about-design.test.ts)<br>[dashboard/e2e/policy-cloud-exceptions-states.spec.ts](../../../../sources/hashgraph-online__hol-guard/dashboard/e2e/policy-cloud-exceptions-states.spec.ts)<br>[dashboard/e2e/scrg172-states.spec.ts](../../../../sources/hashgraph-online__hol-guard/dashboard/e2e/scrg172-states.spec.ts)<br>[.clusterfuzzlite/requirements-atheris.txt](../../../../sources/hashgraph-online__hol-guard/.clusterfuzzlite/requirements-atheris.txt) |
| eval | 481 | [tests/__init__.py](../../../../sources/hashgraph-online__hol-guard/tests/__init__.py)<br>[tests/bundle_first_cloud.py](../../../../sources/hashgraph-online__hol-guard/tests/bundle_first_cloud.py)<br>[tests/cloud_exception_bundle_fixtures.py](../../../../sources/hashgraph-online__hol-guard/tests/cloud_exception_bundle_fixtures.py)<br>[tests/conftest.py](../../../../sources/hashgraph-online__hol-guard/tests/conftest.py)<br>[tests/e2e_droid_exec.py](../../../../sources/hashgraph-online__hol-guard/tests/e2e_droid_exec.py)<br>[tests/guard_python_phase12_support.py](../../../../sources/hashgraph-online__hol-guard/tests/guard_python_phase12_support.py)<br>[tests/guard_tier2_phase13_support.py](../../../../sources/hashgraph-online__hol-guard/tests/guard_tier2_phase13_support.py)<br>[tests/shim_execution_helpers.py](../../../../sources/hashgraph-online__hol-guard/tests/shim_execution_helpers.py) |
| security | 561 | [SECURITY.md](../../../../sources/hashgraph-online__hol-guard/SECURITY.md)<br>[tests/guard_python_phase12_support.py](../../../../sources/hashgraph-online__hol-guard/tests/guard_python_phase12_support.py)<br>[tests/guard_tier2_phase13_support.py](../../../../sources/hashgraph-online__hol-guard/tests/guard_tier2_phase13_support.py)<br>[tests/test_dashboard_sync_security.py](../../../../sources/hashgraph-online__hol-guard/tests/test_dashboard_sync_security.py)<br>[tests/test_guard_access_graph.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_access_graph.py)<br>[tests/test_guard_action_identity.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_action_identity.py)<br>[tests/test_guard_advisory_escalation.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_advisory_escalation.py)<br>[tests/test_guard_aibom_cli.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_aibom_cli.py) |
| ci | 9 | [.github/workflows/ci.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/codeql.yml)<br>[.github/workflows/dependabot-uv-lock.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/dependabot-uv-lock.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/fuzz.yml)<br>[.github/workflows/harness-smoke.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/harness-smoke.yml)<br>[.github/workflows/publish-action-repo.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/publish-action-repo.yml)<br>[.github/workflows/publish.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/publish.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/scorecard.yml) |
| container | 2 | [Dockerfile](../../../../sources/hashgraph-online__hol-guard/Dockerfile)<br>[.clusterfuzzlite/Dockerfile](../../../../sources/hashgraph-online__hol-guard/.clusterfuzzlite/Dockerfile) |
| instruction | 2 | [tests/fixtures/guard-codex-malicious-mcp/.codex/config.toml](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/guard-codex-malicious-mcp/.codex/config.toml)<br>[tests/fixtures/gemini-extension-good/GEMINI.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/gemini-extension-good/GEMINI.md) |
| docs | 29 | [README.md](../../../../sources/hashgraph-online__hol-guard/README.md)<br>[tests/fixtures/opencode-good/README.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/opencode-good/README.md)<br>[tests/fixtures/multi-plugin-repo/plugins/alpha-plugin/README.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/multi-plugin-repo/plugins/alpha-plugin/README.md)<br>[tests/fixtures/multi-ecosystem-repo/gemini-ext/README.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/multi-ecosystem-repo/gemini-ext/README.md)<br>[tests/fixtures/multi-ecosystem-repo/codex-plugin/README.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/multi-ecosystem-repo/codex-plugin/README.md)<br>[tests/fixtures/malicious-skill-plugin/README.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/malicious-skill-plugin/README.md)<br>[tests/fixtures/guard-red-team/README.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/guard-red-team/README.md)<br>[tests/fixtures/good-plugin/README.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/good-plugin/README.md) |
| config | 12 | [pyproject.toml](../../../../sources/hashgraph-online__hol-guard/pyproject.toml)<br>[requirements.txt](../../../../sources/hashgraph-online__hol-guard/requirements.txt)<br>[uv.lock](../../../../sources/hashgraph-online__hol-guard/uv.lock)<br>[tests/fixtures/tier2/go-vulnerable/go.mod](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/tier2/go-vulnerable/go.mod)<br>[tests/fixtures/tier2/go-safe/go.mod](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/tier2/go-safe/go.mod)<br>[tests/fixtures/tier2/cargo-vulnerable/Cargo.lock](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/tier2/cargo-vulnerable/Cargo.lock)<br>[tests/fixtures/tier2/cargo-vulnerable/Cargo.toml](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/tier2/cargo-vulnerable/Cargo.toml)<br>[tests/fixtures/tier2/cargo-safe/Cargo.lock](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/tier2/cargo-safe/Cargo.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 481 | [tests/__init__.py](../../../../sources/hashgraph-online__hol-guard/tests/__init__.py)<br>[tests/bundle_first_cloud.py](../../../../sources/hashgraph-online__hol-guard/tests/bundle_first_cloud.py)<br>[tests/cloud_exception_bundle_fixtures.py](../../../../sources/hashgraph-online__hol-guard/tests/cloud_exception_bundle_fixtures.py)<br>[tests/conftest.py](../../../../sources/hashgraph-online__hol-guard/tests/conftest.py)<br>[tests/e2e_droid_exec.py](../../../../sources/hashgraph-online__hol-guard/tests/e2e_droid_exec.py)<br>[tests/guard_python_phase12_support.py](../../../../sources/hashgraph-online__hol-guard/tests/guard_python_phase12_support.py) |
| CI workflow | 9 | [.github/workflows/ci.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/ci.yml)<br>[.github/workflows/codeql.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/codeql.yml)<br>[.github/workflows/dependabot-uv-lock.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/dependabot-uv-lock.yml)<br>[.github/workflows/fuzz.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/fuzz.yml)<br>[.github/workflows/harness-smoke.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/harness-smoke.yml)<br>[.github/workflows/publish-action-repo.yml](../../../../sources/hashgraph-online__hol-guard/.github/workflows/publish-action-repo.yml) |
| 컨테이너/배포 | 2 | [Dockerfile](../../../../sources/hashgraph-online__hol-guard/Dockerfile)<br>[.clusterfuzzlite/Dockerfile](../../../../sources/hashgraph-online__hol-guard/.clusterfuzzlite/Dockerfile) |
| 보안/정책 | 561 | [SECURITY.md](../../../../sources/hashgraph-online__hol-guard/SECURITY.md)<br>[tests/guard_python_phase12_support.py](../../../../sources/hashgraph-online__hol-guard/tests/guard_python_phase12_support.py)<br>[tests/guard_tier2_phase13_support.py](../../../../sources/hashgraph-online__hol-guard/tests/guard_tier2_phase13_support.py)<br>[tests/test_dashboard_sync_security.py](../../../../sources/hashgraph-online__hol-guard/tests/test_dashboard_sync_security.py)<br>[tests/test_guard_access_graph.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_access_graph.py)<br>[tests/test_guard_action_identity.py](../../../../sources/hashgraph-online__hol-guard/tests/test_guard_action_identity.py) |
| 에이전트 지시문 | 2 | [tests/fixtures/guard-codex-malicious-mcp/.codex/config.toml](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/guard-codex-malicious-mcp/.codex/config.toml)<br>[tests/fixtures/gemini-extension-good/GEMINI.md](../../../../sources/hashgraph-online__hol-guard/tests/fixtures/gemini-extension-good/GEMINI.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/test_guard_hashnet_mcp_canaries.py`, `tests/test_guard_mcp_detectors.py`, `tests/test_guard_mcp_package_proxy_phase14.py`.
2. entrypoint를 따라 실행 흐름 확인: `src/codex_plugin_scanner/guard/daemon/server.py`, `dashboard/src/app.tsx`, `dashboard/src/main.tsx`.
3. agent/tool runtime 매핑: `tests/fixtures/skills-no-frontmatter/skills/bad-skill/SKILL.md`, `tests/fixtures/skills-no-frontmatter/.codex-plugin/plugin.json`, `tests/fixtures/skills-missing-dir/.codex-plugin/plugin.json`.
4. retrieval/memory/indexing 확인: `tests/test_guard_access_graph.py`, `tests/test_guard_phase05_approval_memory.py`, `src/codex_plugin_scanner/guard/access_graph_events.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/bundle_first_cloud.py`, `tests/cloud_exception_bundle_fixtures.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI antivirus for developer agents protect Codex, Claude Code, Cursor, Gemini, OpenCode, plugins, skills, MCP servers, an. 핵심 구조 신호는 Python, pyproject.toml, requirements.txt, Dockerfile, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
