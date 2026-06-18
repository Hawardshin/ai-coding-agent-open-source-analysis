# awslabs/aidlc-workflows 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Local clone structure analysis: 554 files, 151 directories.

## 요약

- 조사 단위: `sources/awslabs__aidlc-workflows` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 554 files, 151 directories, depth score 116, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, scripts/aidlc-traceability/src/traceability/agent.py, scripts/aidlc-evaluator/packages/shared/src/shared/sandbox.py이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | awslabs/aidlc-workflows |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 2968 |
| Forks | 484 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 심층 소스+보고서 |
| 소스 | [sources/awslabs__aidlc-workflows](../../../../sources/awslabs__aidlc-workflows) |
| 기존 보고서 | [reports/global-trending/repositories/awslabs__aidlc-workflows.md](../../../global-trending/repositories/awslabs__aidlc-workflows.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 554 / 151 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .claude, .github, .kiro, aidlc-rules, assets, docs, scripts |
| 상위 확장자 | .py: 253, .md: 182, .yaml: 25, .toml: 15, .yml: 15, (none): 13, .sh: 12, .bats: 8, .json: 8, .png: 6, .license: 4, .mmd: 4 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .github | ci surface | 1 |
| aidlc-rules | top-level component | 1 |
| assets | top-level component | 1 |
| docs | documentation surface | 1 |
| scripts | top-level component | 1 |


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
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [AGENTS.md](../../../../sources/awslabs__aidlc-workflows/AGENTS.md) | agentRuntime signal |
| agentRuntime | [scripts/aidlc-traceability/src/traceability/agent.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/src/traceability/agent.py) | agentRuntime signal |
| agentRuntime | [scripts/aidlc-evaluator/packages/shared/src/shared/sandbox.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/shared/src/shared/sandbox.py) | agentRuntime signal |
| agentRuntime | [scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/runner.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/runner.py) | agentRuntime signal |
| entrypoints | [scripts/aidlc-evaluator/packages/trend-reports/src/trend_reports/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/trend-reports/src/trend_reports/__main__.py) | entrypoints signal |
| entrypoints | [scripts/aidlc-evaluator/packages/reporting/src/reporting/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/reporting/src/reporting/__main__.py) | entrypoints signal |
| entrypoints | [scripts/aidlc-evaluator/packages/quantitative/src/quantitative/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/quantitative/src/quantitative/__main__.py) | entrypoints signal |
| entrypoints | [scripts/aidlc-evaluator/packages/qualitative/src/qualitative/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/qualitative/src/qualitative/__main__.py) | entrypoints signal |
| config | [scripts/aidlc-traceability/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/pyproject.toml) | config signal |
| config | [scripts/aidlc-traceability/uv.lock](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/uv.lock) | config signal |
| config | [scripts/aidlc-evaluator/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/pyproject.toml) | config signal |
| config | [scripts/aidlc-evaluator/uv.lock](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/uv.lock) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 7 | [scripts/aidlc-evaluator/packages/trend-reports/src/trend_reports/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/trend-reports/src/trend_reports/__main__.py)<br>[scripts/aidlc-evaluator/packages/reporting/src/reporting/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/reporting/src/reporting/__main__.py)<br>[scripts/aidlc-evaluator/packages/quantitative/src/quantitative/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/quantitative/src/quantitative/__main__.py)<br>[scripts/aidlc-evaluator/packages/qualitative/src/qualitative/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/qualitative/src/qualitative/__main__.py)<br>[scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/__main__.py)<br>[scripts/aidlc-evaluator/packages/contracttest/src/contracttest/__main__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/contracttest/src/contracttest/__main__.py)<br>[scripts/aidlc-evaluator/packages/contracttest/src/contracttest/server.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/contracttest/src/contracttest/server.py) |
| agentRuntime | 53 | [AGENTS.md](../../../../sources/awslabs__aidlc-workflows/AGENTS.md)<br>[scripts/aidlc-traceability/src/traceability/agent.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/src/traceability/agent.py)<br>[scripts/aidlc-evaluator/packages/shared/src/shared/sandbox.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/shared/src/shared/sandbox.py)<br>[scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/runner.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/runner.py)<br>[scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/__init__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/__init__.py)<br>[scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/file_ops.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/file_ops.py)<br>[scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/rule_loader.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/rule_loader.py)<br>[scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/run_command.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/execution/src/aidlc_runner/tools/run_command.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 2 | [scripts/aidlc-traceability/tests/test_graph.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_graph.py)<br>[scripts/aidlc-traceability/src/traceability/graph.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/src/traceability/graph.py) |
| spec | 142 | [scripts/aidlc-traceability/LEGAL_DISCLAIMER.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/LEGAL_DISCLAIMER.md)<br>[scripts/aidlc-traceability/LICENSE](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/LICENSE)<br>[scripts/aidlc-traceability/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/pyproject.toml)<br>[scripts/aidlc-traceability/README.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/README.md)<br>[scripts/aidlc-traceability/uv.lock](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/uv.lock)<br>[scripts/aidlc-traceability/tests/__init__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/__init__.py)<br>[scripts/aidlc-traceability/tests/conftest.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/conftest.py)<br>[scripts/aidlc-traceability/tests/test_cli_pipeline.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_cli_pipeline.py) |
| eval | 180 | [scripts/aidlc-traceability/tests/__init__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/__init__.py)<br>[scripts/aidlc-traceability/tests/conftest.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/conftest.py)<br>[scripts/aidlc-traceability/tests/test_cli_pipeline.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_cli_pipeline.py)<br>[scripts/aidlc-traceability/tests/test_discovery.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_discovery.py)<br>[scripts/aidlc-traceability/tests/test_generators.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_generators.py)<br>[scripts/aidlc-traceability/tests/test_graph.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_graph.py)<br>[scripts/aidlc-traceability/tests/test_models.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_models.py)<br>[scripts/aidlc-traceability/tests/test_parsers.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_parsers.py) |
| security | 28 | [scripts/aidlc-traceability/docs/ai-compliance.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/ai-compliance.md)<br>[scripts/aidlc-traceability/docs/ai-security.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/ai-security.md)<br>[scripts/aidlc-traceability/docs/bedrock-security.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/bedrock-security.md)<br>[scripts/aidlc-traceability/docs/security-design.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-design.md)<br>[scripts/aidlc-traceability/docs/security-scan-results/ATTESTATION.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-scan-results/ATTESTATION.md)<br>[scripts/aidlc-traceability/docs/security-scan-results/scan-metadata.json](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-scan-results/scan-metadata.json)<br>[scripts/aidlc-traceability/docs/security-scan-results/SECURITY_AUDIT_REPORT.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-scan-results/SECURITY_AUDIT_REPORT.md)<br>[scripts/aidlc-traceability/docs/security-scan-results/SECURITY_EXECUTIVE_SUMMARY.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-scan-results/SECURITY_EXECUTIVE_SUMMARY.md) |
| ci | 8 | [.github/workflows/ci.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/ci.yml)<br>[.github/workflows/codebuild.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/codebuild.yml)<br>[.github/workflows/codeql.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/codeql.yml)<br>[.github/workflows/pull-request-lint.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/pull-request-lint.yml)<br>[.github/workflows/release-pr.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/release-pr.yml)<br>[.github/workflows/release.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/release.yml)<br>[.github/workflows/security-scanners.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/security-scanners.yml)<br>[.github/workflows/tag-on-merge.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/tag-on-merge.yml) |
| container | 1 | [scripts/aidlc-evaluator/docker/sandbox/Dockerfile](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/docker/sandbox/Dockerfile) |
| instruction | 1 | [AGENTS.md](../../../../sources/awslabs__aidlc-workflows/AGENTS.md) |
| docs | 53 | [README.md](../../../../sources/awslabs__aidlc-workflows/README.md)<br>[scripts/aidlc-traceability/README.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/README.md)<br>[scripts/aidlc-traceability/requirements/README.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/requirements/README.md)<br>[scripts/aidlc-traceability/docs/ai-compliance.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/ai-compliance.md)<br>[scripts/aidlc-traceability/docs/ai-security.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/ai-security.md)<br>[scripts/aidlc-traceability/docs/architecture.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/architecture.md)<br>[scripts/aidlc-traceability/docs/bedrock-security.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/bedrock-security.md)<br>[scripts/aidlc-traceability/docs/security-design.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-design.md) |
| config | 16 | [scripts/aidlc-traceability/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/pyproject.toml)<br>[scripts/aidlc-traceability/uv.lock](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/uv.lock)<br>[scripts/aidlc-evaluator/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/pyproject.toml)<br>[scripts/aidlc-evaluator/uv.lock](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/uv.lock)<br>[scripts/aidlc-evaluator/packages/trend-reports/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/trend-reports/pyproject.toml)<br>[scripts/aidlc-evaluator/packages/shared/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/shared/pyproject.toml)<br>[scripts/aidlc-evaluator/packages/reporting/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/reporting/pyproject.toml)<br>[scripts/aidlc-evaluator/packages/quantitative/pyproject.toml](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/packages/quantitative/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 180 | [scripts/aidlc-traceability/tests/__init__.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/__init__.py)<br>[scripts/aidlc-traceability/tests/conftest.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/conftest.py)<br>[scripts/aidlc-traceability/tests/test_cli_pipeline.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_cli_pipeline.py)<br>[scripts/aidlc-traceability/tests/test_discovery.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_discovery.py)<br>[scripts/aidlc-traceability/tests/test_generators.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_generators.py)<br>[scripts/aidlc-traceability/tests/test_graph.py](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/tests/test_graph.py) |
| CI workflow | 8 | [.github/workflows/ci.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/ci.yml)<br>[.github/workflows/codebuild.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/codebuild.yml)<br>[.github/workflows/codeql.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/codeql.yml)<br>[.github/workflows/pull-request-lint.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/pull-request-lint.yml)<br>[.github/workflows/release-pr.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/release-pr.yml)<br>[.github/workflows/release.yml](../../../../sources/awslabs__aidlc-workflows/.github/workflows/release.yml) |
| 컨테이너/배포 | 1 | [scripts/aidlc-evaluator/docker/sandbox/Dockerfile](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-evaluator/docker/sandbox/Dockerfile) |
| 보안/정책 | 28 | [scripts/aidlc-traceability/docs/ai-compliance.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/ai-compliance.md)<br>[scripts/aidlc-traceability/docs/ai-security.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/ai-security.md)<br>[scripts/aidlc-traceability/docs/bedrock-security.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/bedrock-security.md)<br>[scripts/aidlc-traceability/docs/security-design.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-design.md)<br>[scripts/aidlc-traceability/docs/security-scan-results/ATTESTATION.md](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-scan-results/ATTESTATION.md)<br>[scripts/aidlc-traceability/docs/security-scan-results/scan-metadata.json](../../../../sources/awslabs__aidlc-workflows/scripts/aidlc-traceability/docs/security-scan-results/scan-metadata.json) |
| 에이전트 지시문 | 1 | [AGENTS.md](../../../../sources/awslabs__aidlc-workflows/AGENTS.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `scripts/aidlc-traceability/src/traceability/agent.py`, `scripts/aidlc-evaluator/packages/shared/src/shared/sandbox.py`.
2. entrypoint를 따라 실행 흐름 확인: `scripts/aidlc-evaluator/packages/trend-reports/src/trend_reports/__main__.py`, `scripts/aidlc-evaluator/packages/reporting/src/reporting/__main__.py`, `scripts/aidlc-evaluator/packages/quantitative/src/quantitative/__main__.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `scripts/aidlc-traceability/src/traceability/agent.py`, `scripts/aidlc-evaluator/packages/shared/src/shared/sandbox.py`.
4. retrieval/memory/indexing 확인: `scripts/aidlc-traceability/tests/test_graph.py`, `scripts/aidlc-traceability/src/traceability/graph.py`.
5. test/eval 파일로 동작 검증: `scripts/aidlc-traceability/tests/__init__.py`, `scripts/aidlc-traceability/tests/conftest.py`, `scripts/aidlc-traceability/tests/test_cli_pipeline.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local clone structure analysis 554 files, 151 directories.. 핵심 구조 신호는 Python, README.md, AGENTS.md, LICENSE, tests, ci이며, 심층 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음입니다.
