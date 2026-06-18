# github/spec-kit 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Local clone structure analysis: 380 files, 111 directories.

## 요약

- 조사 단위: `sources/github__spec-kit` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 380 files, 111 directories, depth score 101, key references 9개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, workflows/speckit/workflow.yml, tests/hooks/plan.md이고, 의존성 단서는 vscode, click, typer, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 9개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | github/spec-kit |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | Python |
| Stars | 113352 |
| Forks | 10002 |
| License | MIT License |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/github__spec-kit](../../../../sources/github__spec-kit) |
| 기존 보고서 | [reports/clone-structures/github__spec-kit.md](../../../clone-structures/github__spec-kit.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 380 / 111 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .devcontainer, .github, docs, extensions, integrations, media, newsletters, presets, scripts, src, templates, tests, workflows |
| 상위 확장자 | .py: 179, .md: 114, .yml: 33, .json: 15, .sh: 11, .ps1: 10, (none): 8, .gif: 2, .webp: 2, .cff: 1, .code-workspace: 1, .css: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 46 |
| docs | documentation surface | 32 |
| src | source boundary | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| extensions | top-level component | 1 |
| integrations | top-level component | 1 |
| media | top-level component | 1 |
| newsletters | top-level component | 1 |
| presets | top-level component | 1 |
| scripts | top-level component | 1 |
| templates | top-level component | 1 |
| workflows | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | pyproject.toml | specify | specify |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | vscode, click, typer |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/github__spec-kit/AGENTS.md) | agentRuntime signal |
| agentRuntime | [workflows/speckit/workflow.yml](../../../../sources/github__spec-kit/workflows/speckit/workflow.yml) | agentRuntime signal |
| agentRuntime | [tests/hooks/plan.md](../../../../sources/github__spec-kit/tests/hooks/plan.md) | agentRuntime signal |
| agentRuntime | [tests/hooks/spec.md](../../../../sources/github__spec-kit/tests/hooks/spec.md) | agentRuntime signal |
| config | [pyproject.toml](../../../../sources/github__spec-kit/pyproject.toml) | config signal |
| ci | [.github/workflows/add-community-extension.lock.yml](../../../../sources/github__spec-kit/.github/workflows/add-community-extension.lock.yml) | ci support |
| ci | [.github/workflows/add-community-extension.md](../../../../sources/github__spec-kit/.github/workflows/add-community-extension.md) | ci support |
| eval | [spec-driven.md](../../../../sources/github__spec-kit/spec-driven.md) | eval support |
| eval | [spec-kit.code-workspace](../../../../sources/github__spec-kit/spec-kit.code-workspace) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 17 | [AGENTS.md](../../../../sources/github__spec-kit/AGENTS.md)<br>[workflows/speckit/workflow.yml](../../../../sources/github__spec-kit/workflows/speckit/workflow.yml)<br>[tests/hooks/plan.md](../../../../sources/github__spec-kit/tests/hooks/plan.md)<br>[tests/hooks/spec.md](../../../../sources/github__spec-kit/tests/hooks/spec.md)<br>[tests/hooks/tasks.md](../../../../sources/github__spec-kit/tests/hooks/tasks.md)<br>[tests/hooks/TESTING.md](../../../../sources/github__spec-kit/tests/hooks/TESTING.md)<br>[tests/hooks/.specify/extensions.yml](../../../../sources/github__spec-kit/tests/hooks/.specify/extensions.yml)<br>[src/specify_cli/agents.py](../../../../sources/github__spec-kit/src/specify_cli/agents.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 1 | [docs/index.md](../../../../sources/github__spec-kit/docs/index.md) |
| spec | 10 | [spec-driven.md](../../../../sources/github__spec-kit/spec-driven.md)<br>[spec-kit.code-workspace](../../../../sources/github__spec-kit/spec-kit.code-workspace)<br>[workflows/ARCHITECTURE.md](../../../../sources/github__spec-kit/workflows/ARCHITECTURE.md)<br>[tests/hooks/spec.md](../../../../sources/github__spec-kit/tests/hooks/spec.md)<br>[templates/spec-template.md](../../../../sources/github__spec-kit/templates/spec-template.md)<br>[presets/ARCHITECTURE.md](../../../../sources/github__spec-kit/presets/ARCHITECTURE.md)<br>[presets/self-test/templates/spec-template.md](../../../../sources/github__spec-kit/presets/self-test/templates/spec-template.md)<br>[presets/scaffold/templates/spec-template.md](../../../../sources/github__spec-kit/presets/scaffold/templates/spec-template.md) |
| eval | 113 | [spec-driven.md](../../../../sources/github__spec-kit/spec-driven.md)<br>[spec-kit.code-workspace](../../../../sources/github__spec-kit/spec-kit.code-workspace)<br>[tests/__init__.py](../../../../sources/github__spec-kit/tests/__init__.py)<br>[tests/auth_helpers.py](../../../../sources/github__spec-kit/tests/auth_helpers.py)<br>[tests/conftest.py](../../../../sources/github__spec-kit/tests/conftest.py)<br>[tests/http_helpers.py](../../../../sources/github__spec-kit/tests/http_helpers.py)<br>[tests/self_upgrade_helpers.py](../../../../sources/github__spec-kit/tests/self_upgrade_helpers.py)<br>[tests/test_agent_config_consistency.py](../../../../sources/github__spec-kit/tests/test_agent_config_consistency.py) |
| security | 2 | [SECURITY.md](../../../../sources/github__spec-kit/SECURITY.md)<br>[tests/auth_helpers.py](../../../../sources/github__spec-kit/tests/auth_helpers.py) |
| ci | 15 | [.github/workflows/add-community-extension.lock.yml](../../../../sources/github__spec-kit/.github/workflows/add-community-extension.lock.yml)<br>[.github/workflows/add-community-extension.md](../../../../sources/github__spec-kit/.github/workflows/add-community-extension.md)<br>[.github/workflows/add-community-preset.lock.yml](../../../../sources/github__spec-kit/.github/workflows/add-community-preset.lock.yml)<br>[.github/workflows/add-community-preset.md](../../../../sources/github__spec-kit/.github/workflows/add-community-preset.md)<br>[.github/workflows/bug-assess.lock.yml](../../../../sources/github__spec-kit/.github/workflows/bug-assess.lock.yml)<br>[.github/workflows/bug-assess.md](../../../../sources/github__spec-kit/.github/workflows/bug-assess.md)<br>[.github/workflows/catalog-assign.yml](../../../../sources/github__spec-kit/.github/workflows/catalog-assign.yml)<br>[.github/workflows/codeql.yml](../../../../sources/github__spec-kit/.github/workflows/codeql.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [AGENTS.md](../../../../sources/github__spec-kit/AGENTS.md) |
| docs | 41 | [README.md](../../../../sources/github__spec-kit/README.md)<br>[workflows/README.md](../../../../sources/github__spec-kit/workflows/README.md)<br>[presets/README.md](../../../../sources/github__spec-kit/presets/README.md)<br>[presets/scaffold/README.md](../../../../sources/github__spec-kit/presets/scaffold/README.md)<br>[presets/lean/README.md](../../../../sources/github__spec-kit/presets/lean/README.md)<br>[integrations/README.md](../../../../sources/github__spec-kit/integrations/README.md)<br>[extensions/README.md](../../../../sources/github__spec-kit/extensions/README.md)<br>[extensions/template/README.md](../../../../sources/github__spec-kit/extensions/template/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/github__spec-kit/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 113 | [spec-driven.md](../../../../sources/github__spec-kit/spec-driven.md)<br>[spec-kit.code-workspace](../../../../sources/github__spec-kit/spec-kit.code-workspace)<br>[tests/__init__.py](../../../../sources/github__spec-kit/tests/__init__.py)<br>[tests/auth_helpers.py](../../../../sources/github__spec-kit/tests/auth_helpers.py)<br>[tests/conftest.py](../../../../sources/github__spec-kit/tests/conftest.py)<br>[tests/http_helpers.py](../../../../sources/github__spec-kit/tests/http_helpers.py) |
| CI workflow | 15 | [.github/workflows/add-community-extension.lock.yml](../../../../sources/github__spec-kit/.github/workflows/add-community-extension.lock.yml)<br>[.github/workflows/add-community-extension.md](../../../../sources/github__spec-kit/.github/workflows/add-community-extension.md)<br>[.github/workflows/add-community-preset.lock.yml](../../../../sources/github__spec-kit/.github/workflows/add-community-preset.lock.yml)<br>[.github/workflows/add-community-preset.md](../../../../sources/github__spec-kit/.github/workflows/add-community-preset.md)<br>[.github/workflows/bug-assess.lock.yml](../../../../sources/github__spec-kit/.github/workflows/bug-assess.lock.yml)<br>[.github/workflows/bug-assess.md](../../../../sources/github__spec-kit/.github/workflows/bug-assess.md) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 2 | [SECURITY.md](../../../../sources/github__spec-kit/SECURITY.md)<br>[tests/auth_helpers.py](../../../../sources/github__spec-kit/tests/auth_helpers.py) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/github__spec-kit/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `workflows/speckit/workflow.yml`, `tests/hooks/plan.md`.
2. agent/tool runtime 매핑: `AGENTS.md`, `workflows/speckit/workflow.yml`, `tests/hooks/plan.md`.
3. retrieval/memory/indexing 확인: `docs/index.md`.
4. test/eval 파일로 동작 검증: `spec-driven.md`, `spec-kit.code-workspace`, `tests/__init__.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 380 files, 111 directories.. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, LICENSE, vscode이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 큰 메타데이터 위험이 명확하지 않음입니다.
