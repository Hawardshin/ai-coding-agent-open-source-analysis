# griddynamics/rosetta 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Meta-prompting, context engineering, and centralized instructions management for AI coding agents

## 요약

- 조사 단위: `sources/griddynamics__rosetta` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,914 files, 621 directories, depth score 126, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=rosettify/tests/e2e/mcp.e2e.test.ts, rosettify/src/frontends/mcp.ts, rosetta-mcp-server/pyproject.toml이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | griddynamics/rosetta |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 304 |
| Forks | 60 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/griddynamics__rosetta](../../../../sources/griddynamics__rosetta) |
| 기존 보고서 | [reports/global-trending/repositories/griddynamics__rosetta.md](../../../global-trending/repositories/griddynamics__rosetta.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1914 / 621 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .agents, .claude, .claude-plugin, .cursor-plugin, .githooks, .github, agents, docs, helm-charts, hooks, ims-mcp-server, instructions, plans, plugins, rosetta-cli, rosetta-mcp-server, rosettify, scripts, src, test-library |
| 상위 확장자 | .md: 1365, .ts: 201, .py: 103, .json: 62, .txt: 32, .png: 23, .mdc: 22, .tmpl: 18, (none): 16, .yml: 15, .toml: 13, .yaml: 12 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 44 |
| src | source boundary | 34 |
| .github | ci surface | 1 |
| agents | top-level component | 1 |
| helm-charts | deployment surface | 1 |
| hooks | top-level component | 1 |
| ims-mcp-server | source boundary | 1 |
| instructions | top-level component | 1 |
| plans | top-level component | 1 |
| plugins | top-level component | 1 |
| rosetta-cli | top-level component | 1 |
| rosetta-mcp-server | source boundary | 1 |
| rosettify | top-level component | 1 |
| scripts | top-level component | 1 |
| test-library | validation surface | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
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
| mcp | [rosettify/tests/e2e/mcp.e2e.test.ts](../../../../sources/griddynamics__rosetta/rosettify/tests/e2e/mcp.e2e.test.ts) | mcp signal |
| mcp | [rosettify/src/frontends/mcp.ts](../../../../sources/griddynamics__rosetta/rosettify/src/frontends/mcp.ts) | mcp signal |
| mcp | [rosetta-mcp-server/pyproject.toml](../../../../sources/griddynamics__rosetta/rosetta-mcp-server/pyproject.toml) | mcp signal |
| mcp | [rosetta-mcp-server/README.md](../../../../sources/griddynamics__rosetta/rosetta-mcp-server/README.md) | mcp signal |
| agentRuntime | [test-library/init/.claude/agents/test-case-result-validator.md](../../../../sources/griddynamics__rosetta/test-library/init/.claude/agents/test-case-result-validator.md) | agentRuntime signal |
| agentRuntime | [test-library/hooks/loose-files/prompt-claude-code.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-claude-code.md) | agentRuntime signal |
| agentRuntime | [test-library/hooks/loose-files/prompt-codex.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-codex.md) | agentRuntime signal |
| agentRuntime | [test-library/hooks/loose-files/prompt-copilot.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-copilot.md) | agentRuntime signal |
| entrypoints | [src/plugin-generator/src/cli.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/cli.ts) | entrypoints signal |
| entrypoints | [src/plugin-generator/src/index.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/index.ts) | entrypoints signal |
| entrypoints | [rosettify/src/bin/rosettify.ts](../../../../sources/griddynamics__rosetta/rosettify/src/bin/rosettify.ts) | entrypoints signal |
| entrypoints | [rosetta-cli/rosetta_cli/__main__.py](../../../../sources/griddynamics__rosetta/rosetta-cli/rosetta_cli/__main__.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [src/plugin-generator/src/cli.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/cli.ts)<br>[src/plugin-generator/src/index.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/index.ts)<br>[rosettify/src/bin/rosettify.ts](../../../../sources/griddynamics__rosetta/rosettify/src/bin/rosettify.ts)<br>[rosetta-cli/rosetta_cli/__main__.py](../../../../sources/griddynamics__rosetta/rosetta-cli/rosetta_cli/__main__.py)<br>[ims-mcp-server/ims_mcp/__main__.py](../../../../sources/griddynamics__rosetta/ims-mcp-server/ims_mcp/__main__.py)<br>[ims-mcp-server/ims_mcp/server.py](../../../../sources/griddynamics__rosetta/ims-mcp-server/ims_mcp/server.py) |
| agentRuntime | 842 | [test-library/init/.claude/agents/test-case-result-validator.md](../../../../sources/griddynamics__rosetta/test-library/init/.claude/agents/test-case-result-validator.md)<br>[test-library/hooks/loose-files/prompt-claude-code.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-claude-code.md)<br>[test-library/hooks/loose-files/prompt-codex.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-codex.md)<br>[test-library/hooks/loose-files/prompt-copilot.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-copilot.md)<br>[test-library/hooks/loose-files/prompt-cursor.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-cursor.md)<br>[test-library/hooks/loose-files/prompt-windsurf.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/prompt-windsurf.md)<br>[test-library/hooks/loose-files/README.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/README.md)<br>[src/plugin-generator/tests/fixtures/sample-plugins/core-cursor/hooks.json.tmpl](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/fixtures/sample-plugins/core-cursor/hooks.json.tmpl) |
| mcp | 108 | [rosettify/tests/e2e/mcp.e2e.test.ts](../../../../sources/griddynamics__rosetta/rosettify/tests/e2e/mcp.e2e.test.ts)<br>[rosettify/src/frontends/mcp.ts](../../../../sources/griddynamics__rosetta/rosettify/src/frontends/mcp.ts)<br>[rosetta-mcp-server/pyproject.toml](../../../../sources/griddynamics__rosetta/rosetta-mcp-server/pyproject.toml)<br>[rosetta-mcp-server/README.md](../../../../sources/griddynamics__rosetta/rosetta-mcp-server/README.md)<br>[plugins/core-cursor-standalone/.cursor/skills/specflow-use/references/specflow-mcp-tools.md](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/skills/specflow-use/references/specflow-mcp-tools.md)<br>[plugins/core-cursor/skills/specflow-use/references/specflow-mcp-tools.md](../../../../sources/griddynamics__rosetta/plugins/core-cursor/skills/specflow-use/references/specflow-mcp-tools.md)<br>[plugins/core-copilot-standalone/.github/skills/specflow-use/references/specflow-mcp-tools.md](../../../../sources/griddynamics__rosetta/plugins/core-copilot-standalone/.github/skills/specflow-use/references/specflow-mcp-tools.md)<br>[plugins/core-copilot/skills/specflow-use/references/specflow-mcp-tools.md](../../../../sources/griddynamics__rosetta/plugins/core-copilot/skills/specflow-use/references/specflow-mcp-tools.md) |
| retrieval | 37 | [src/plugin-generator/tests/unit/serialize/markdown-index.test.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/unit/serialize/markdown-index.test.ts)<br>[src/plugin-generator/src/index.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/index.ts)<br>[src/plugin-generator/src/serialize/markdown-index.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/serialize/markdown-index.ts)<br>[rosettify/tests/unit/plan/index.test.ts](../../../../sources/griddynamics__rosetta/rosettify/tests/unit/plan/index.test.ts)<br>[rosettify/src/registry/index.ts](../../../../sources/griddynamics__rosetta/rosettify/src/registry/index.ts)<br>[rosettify/src/commands/plan/index.ts](../../../../sources/griddynamics__rosetta/rosettify/src/commands/plan/index.ts)<br>[rosettify/src/commands/plan/templates/index.ts](../../../../sources/griddynamics__rosetta/rosettify/src/commands/plan/templates/index.ts)<br>[rosettify/src/commands/help/index.ts](../../../../sources/griddynamics__rosetta/rosettify/src/commands/help/index.ts) |
| spec | 171 | [requirements.txt](../../../../sources/griddynamics__rosetta/requirements.txt)<br>[src/plugin-generator/tests/unit/spec/model-maps.test.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/unit/spec/model-maps.test.ts)<br>[src/plugin-generator/tests/unit/plugin-processors/plugin-process-spec-entries.test.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/unit/plugin-processors/plugin-process-spec-entries.test.ts)<br>[src/plugin-generator/src/spec/bootstrap-manifest.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/spec/bootstrap-manifest.ts)<br>[src/plugin-generator/src/spec/model-maps.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/spec/model-maps.ts)<br>[src/plugin-generator/src/spec/releases.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/spec/releases.ts)<br>[src/plugin-generator/src/spec/targets.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/spec/targets.ts)<br>[src/plugin-generator/src/plugin-processors/plugin-process-spec-entries.ts](../../../../sources/griddynamics__rosetta/src/plugin-generator/src/plugin-processors/plugin-process-spec-entries.ts) |
| eval | 277 | [run-tests.sh](../../../../sources/griddynamics__rosetta/run-tests.sh)<br>[test-library/ecommerce-spring-reactjs.zip](../../../../sources/griddynamics__rosetta/test-library/ecommerce-spring-reactjs.zip)<br>[test-library/manual-testing-prompts.md](../../../../sources/griddynamics__rosetta/test-library/manual-testing-prompts.md)<br>[test-library/spring-boot-react-mysql.zip](../../../../sources/griddynamics__rosetta/test-library/spring-boot-react-mysql.zip)<br>[test-library/testgen/prompt-request.md](../../../../sources/griddynamics__rosetta/test-library/testgen/prompt-request.md)<br>[test-library/testgen/prompt-validation.md](../../../../sources/griddynamics__rosetta/test-library/testgen/prompt-validation.md)<br>[test-library/testgen/trigger.txt](../../../../sources/griddynamics__rosetta/test-library/testgen/trigger.txt)<br>[test-library/test-cases/git-nexus/test-scenarios.md](../../../../sources/griddynamics__rosetta/test-library/test-cases/git-nexus/test-scenarios.md) |
| security | 38 | [SECURITY.md](../../../../sources/griddynamics__rosetta/SECURITY.md)<br>[src/plugin-generator/tests/fixtures/sample-instructions/r2/core/rules/bootstrap-core-policy.md](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/fixtures/sample-instructions/r2/core/rules/bootstrap-core-policy.md)<br>[src/plugin-generator/tests/fixtures/sample-instructions/r2/acme/rules/acme-policy.md](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/fixtures/sample-instructions/r2/acme/rules/acme-policy.md)<br>[rosetta-cli/tests/test_command_auth_order.py](../../../../sources/griddynamics__rosetta/rosetta-cli/tests/test_command_auth_order.py)<br>[rosetta-cli/rosetta_cli/ims_auth.py](../../../../sources/griddynamics__rosetta/rosetta-cli/rosetta_cli/ims_auth.py)<br>[rosetta-cli/rosetta_cli/services/auth_service.py](../../../../sources/griddynamics__rosetta/rosetta-cli/rosetta_cli/services/auth_service.py)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-core-policy.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-core-policy.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-execution-policy.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-execution-policy.mdc) |
| ci | 14 | [.github/workflows/pages.yml](../../../../sources/griddynamics__rosetta/.github/workflows/pages.yml)<br>[.github/workflows/publish-ims-mcp.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-ims-mcp.yml)<br>[.github/workflows/publish-instructions.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-instructions.yml)<br>[.github/workflows/publish-mcp-helm-chart.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-mcp-helm-chart.yml)<br>[.github/workflows/publish-rosetta-cli.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-rosetta-cli.yml)<br>[.github/workflows/publish-rosetta-mcp.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-rosetta-mcp.yml)<br>[.github/workflows/publish-rosettify.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-rosettify.yml)<br>[.github/workflows/repo-analysis.yml](../../../../sources/griddynamics__rosetta/.github/workflows/repo-analysis.yml) |
| container | 1 | [ims-mcp-server/Dockerfile](../../../../sources/griddynamics__rosetta/ims-mcp-server/Dockerfile) |
| instruction | 24 | [plugins/core-cursor-standalone/.cursor/rules/bootstrap-core-policy.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-core-policy.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-execution-policy.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-execution-policy.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-guardrails.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-guardrails.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-hitl-questioning.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-hitl-questioning.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-rosetta-files.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-rosetta-files.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/coding-iac-best-practices.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/coding-iac-best-practices.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/INDEX.md](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/INDEX.md)<br>[plugins/core-cursor-standalone/.cursor/rules/plugin-files-mode.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/plugin-files-mode.mdc) |
| docs | 159 | [README.md](../../../../sources/griddynamics__rosetta/README.md)<br>[test-library/hooks/loose-files/README.md](../../../../sources/griddynamics__rosetta/test-library/hooks/loose-files/README.md)<br>[rosettify/README.md](../../../../sources/griddynamics__rosetta/rosettify/README.md)<br>[rosetta-mcp-server/README.md](../../../../sources/griddynamics__rosetta/rosetta-mcp-server/README.md)<br>[rosetta-cli/README.md](../../../../sources/griddynamics__rosetta/rosetta-cli/README.md)<br>[ims-mcp-server/README.md](../../../../sources/griddynamics__rosetta/ims-mcp-server/README.md)<br>[helm-charts/rosetta-mcp-server/README.md](../../../../sources/griddynamics__rosetta/helm-charts/rosetta-mcp-server/README.md)<br>[docs/ARCHITECTURE.md](../../../../sources/griddynamics__rosetta/docs/ARCHITECTURE.md) |
| config | 10 | [requirements.txt](../../../../sources/griddynamics__rosetta/requirements.txt)<br>[src/plugin-generator/package.json](../../../../sources/griddynamics__rosetta/src/plugin-generator/package.json)<br>[src/plugin-generator/tsconfig.json](../../../../sources/griddynamics__rosetta/src/plugin-generator/tsconfig.json)<br>[rosettify/package.json](../../../../sources/griddynamics__rosetta/rosettify/package.json)<br>[rosettify/tsconfig.json](../../../../sources/griddynamics__rosetta/rosettify/tsconfig.json)<br>[rosetta-mcp-server/pyproject.toml](../../../../sources/griddynamics__rosetta/rosetta-mcp-server/pyproject.toml)<br>[rosetta-cli/pyproject.toml](../../../../sources/griddynamics__rosetta/rosetta-cli/pyproject.toml)<br>[ims-mcp-server/pyproject.toml](../../../../sources/griddynamics__rosetta/ims-mcp-server/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 277 | [run-tests.sh](../../../../sources/griddynamics__rosetta/run-tests.sh)<br>[test-library/ecommerce-spring-reactjs.zip](../../../../sources/griddynamics__rosetta/test-library/ecommerce-spring-reactjs.zip)<br>[test-library/manual-testing-prompts.md](../../../../sources/griddynamics__rosetta/test-library/manual-testing-prompts.md)<br>[test-library/spring-boot-react-mysql.zip](../../../../sources/griddynamics__rosetta/test-library/spring-boot-react-mysql.zip)<br>[test-library/testgen/prompt-request.md](../../../../sources/griddynamics__rosetta/test-library/testgen/prompt-request.md)<br>[test-library/testgen/prompt-validation.md](../../../../sources/griddynamics__rosetta/test-library/testgen/prompt-validation.md) |
| CI workflow | 14 | [.github/workflows/pages.yml](../../../../sources/griddynamics__rosetta/.github/workflows/pages.yml)<br>[.github/workflows/publish-ims-mcp.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-ims-mcp.yml)<br>[.github/workflows/publish-instructions.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-instructions.yml)<br>[.github/workflows/publish-mcp-helm-chart.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-mcp-helm-chart.yml)<br>[.github/workflows/publish-rosetta-cli.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-rosetta-cli.yml)<br>[.github/workflows/publish-rosetta-mcp.yml](../../../../sources/griddynamics__rosetta/.github/workflows/publish-rosetta-mcp.yml) |
| 컨테이너/배포 | 1 | [ims-mcp-server/Dockerfile](../../../../sources/griddynamics__rosetta/ims-mcp-server/Dockerfile) |
| 보안/정책 | 38 | [SECURITY.md](../../../../sources/griddynamics__rosetta/SECURITY.md)<br>[src/plugin-generator/tests/fixtures/sample-instructions/r2/core/rules/bootstrap-core-policy.md](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/fixtures/sample-instructions/r2/core/rules/bootstrap-core-policy.md)<br>[src/plugin-generator/tests/fixtures/sample-instructions/r2/acme/rules/acme-policy.md](../../../../sources/griddynamics__rosetta/src/plugin-generator/tests/fixtures/sample-instructions/r2/acme/rules/acme-policy.md)<br>[rosetta-cli/tests/test_command_auth_order.py](../../../../sources/griddynamics__rosetta/rosetta-cli/tests/test_command_auth_order.py)<br>[rosetta-cli/rosetta_cli/ims_auth.py](../../../../sources/griddynamics__rosetta/rosetta-cli/rosetta_cli/ims_auth.py)<br>[rosetta-cli/rosetta_cli/services/auth_service.py](../../../../sources/griddynamics__rosetta/rosetta-cli/rosetta_cli/services/auth_service.py) |
| 에이전트 지시문 | 24 | [plugins/core-cursor-standalone/.cursor/rules/bootstrap-core-policy.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-core-policy.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-execution-policy.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-execution-policy.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-guardrails.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-guardrails.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-hitl-questioning.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-hitl-questioning.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/bootstrap-rosetta-files.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/bootstrap-rosetta-files.mdc)<br>[plugins/core-cursor-standalone/.cursor/rules/coding-iac-best-practices.mdc](../../../../sources/griddynamics__rosetta/plugins/core-cursor-standalone/.cursor/rules/coding-iac-best-practices.mdc) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 상위 디렉터리가 많아 모듈 경계 재확인 필요 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `rosettify/tests/e2e/mcp.e2e.test.ts`, `rosettify/src/frontends/mcp.ts`, `rosetta-mcp-server/pyproject.toml`.
2. entrypoint를 따라 실행 흐름 확인: `src/plugin-generator/src/cli.ts`, `src/plugin-generator/src/index.ts`, `rosettify/src/bin/rosettify.ts`.
3. agent/tool runtime 매핑: `test-library/init/.claude/agents/test-case-result-validator.md`, `test-library/hooks/loose-files/prompt-claude-code.md`, `test-library/hooks/loose-files/prompt-codex.md`.
4. retrieval/memory/indexing 확인: `src/plugin-generator/tests/unit/serialize/markdown-index.test.ts`, `src/plugin-generator/src/index.ts`, `src/plugin-generator/src/serialize/markdown-index.ts`.
5. test/eval 파일로 동작 검증: `run-tests.sh`, `test-library/ecommerce-spring-reactjs.zip`, `test-library/manual-testing-prompts.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Meta prompting, context engineering, and centralized instructions management for AI coding agents. 핵심 구조 신호는 TypeScript, requirements.txt, README.md, LICENSE, mcp, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
