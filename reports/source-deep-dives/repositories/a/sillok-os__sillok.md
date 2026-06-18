# sillok-os/sillok 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Productized LLM Wiki pattern + typed pack registry + proposal-only governance — UNESCO Memory of the World Triple Anchor

## 요약

- 조사 단위: `sources/sillok-os__sillok` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 161 files, 66 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=mcp_server/README.md, examples/claude-code-mcp-config.json, examples/cursor-mcp-config.json이고, 의존성 단서는 mcp, pydantic, click, opentelemetry, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | sillok-os/sillok |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/sillok-os__sillok](../../../../sources/sillok-os__sillok) |
| 기존 보고서 | [reports/korea-trending/repositories/sillok-os__sillok.md](../../../korea-trending/repositories/sillok-os__sillok.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 161 / 66 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, adr, benchmark, docs, examples, integrations, mcp_server, packs, proposals, scripts, sillok, tests |
| 상위 확장자 | .md: 71, .py: 69, .yml: 6, (none): 4, .json: 3, .yaml: 3, .jsonl: 2, .cff: 1, .sh: 1, .toml: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 32 |
| tests | validation surface | 30 |
| examples/starter-projects | examples workspace | 3 |
| .github | ci surface | 1 |
| adr | top-level component | 1 |
| benchmark | validation surface | 1 |
| examples | top-level component | 1 |
| examples/claude-code-mcp-config.json | examples workspace | 1 |
| examples/cursor-mcp-config.json | examples workspace | 1 |
| integrations | top-level component | 1 |
| mcp_server | source boundary | 1 |
| packs | top-level component | 1 |
| proposals | top-level component | 1 |
| scripts | top-level component | 1 |
| sillok | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | sillok | sillok |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | click |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [mcp_server/README.md](../../../../sources/sillok-os__sillok/mcp_server/README.md) | mcp signal |
| mcp | [examples/claude-code-mcp-config.json](../../../../sources/sillok-os__sillok/examples/claude-code-mcp-config.json) | mcp signal |
| mcp | [examples/cursor-mcp-config.json](../../../../sources/sillok-os__sillok/examples/cursor-mcp-config.json) | mcp signal |
| mcp | [docs/integrations/mcp-quickstart.md](../../../../sources/sillok-os__sillok/docs/integrations/mcp-quickstart.md) | mcp signal |
| agentRuntime | [sillok/tongsa/tools.py](../../../../sources/sillok-os__sillok/sillok/tongsa/tools.py) | agentRuntime signal |
| agentRuntime | [sillok/schemas/skills_v09.py](../../../../sources/sillok-os__sillok/sillok/schemas/skills_v09.py) | agentRuntime signal |
| agentRuntime | [sillok/eval/runner.py](../../../../sources/sillok-os__sillok/sillok/eval/runner.py) | agentRuntime signal |
| agentRuntime | [packs/methodology/agent-1on1.md](../../../../sources/sillok-os__sillok/packs/methodology/agent-1on1.md) | agentRuntime signal |
| entrypoints | [sillok/tongsa/__main__.py](../../../../sources/sillok-os__sillok/sillok/tongsa/__main__.py) | entrypoints signal |
| entrypoints | [sillok/tongsa/server.py](../../../../sources/sillok-os__sillok/sillok/tongsa/server.py) | entrypoints signal |
| entrypoints | [sillok/schemas/__main__.py](../../../../sources/sillok-os__sillok/sillok/schemas/__main__.py) | entrypoints signal |
| entrypoints | [sillok/sangso/__main__.py](../../../../sources/sillok-os__sillok/sillok/sangso/__main__.py) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [sillok/tongsa/__main__.py](../../../../sources/sillok-os__sillok/sillok/tongsa/__main__.py)<br>[sillok/tongsa/server.py](../../../../sources/sillok-os__sillok/sillok/tongsa/server.py)<br>[sillok/schemas/__main__.py](../../../../sources/sillok-os__sillok/sillok/schemas/__main__.py)<br>[sillok/sangso/__main__.py](../../../../sources/sillok-os__sillok/sillok/sangso/__main__.py)<br>[sillok/eval/__main__.py](../../../../sources/sillok-os__sillok/sillok/eval/__main__.py) |
| agentRuntime | 5 | [sillok/tongsa/tools.py](../../../../sources/sillok-os__sillok/sillok/tongsa/tools.py)<br>[sillok/schemas/skills_v09.py](../../../../sources/sillok-os__sillok/sillok/schemas/skills_v09.py)<br>[sillok/eval/runner.py](../../../../sources/sillok-os__sillok/sillok/eval/runner.py)<br>[packs/methodology/agent-1on1.md](../../../../sources/sillok-os__sillok/packs/methodology/agent-1on1.md)<br>[packs/consulting/tool-adoption-consulting.md](../../../../sources/sillok-os__sillok/packs/consulting/tool-adoption-consulting.md) |
| mcp | 4 | [mcp_server/README.md](../../../../sources/sillok-os__sillok/mcp_server/README.md)<br>[examples/claude-code-mcp-config.json](../../../../sources/sillok-os__sillok/examples/claude-code-mcp-config.json)<br>[examples/cursor-mcp-config.json](../../../../sources/sillok-os__sillok/examples/cursor-mcp-config.json)<br>[docs/integrations/mcp-quickstart.md](../../../../sources/sillok-os__sillok/docs/integrations/mcp-quickstart.md) |
| retrieval | 9 | [sillok/pyeonchan/ingest_md.py](../../../../sources/sillok-os__sillok/sillok/pyeonchan/ingest_md.py)<br>[integrations/llm-wiki/README.md](../../../../sources/sillok-os__sillok/integrations/llm-wiki/README.md)<br>[docs/index.md](../../../../sources/sillok-os__sillok/docs/index.md)<br>[docs/tutorials/index.md](../../../../sources/sillok-os__sillok/docs/tutorials/index.md)<br>[docs/recipes/index.md](../../../../sources/sillok-os__sillok/docs/recipes/index.md)<br>[docs/modules/index.md](../../../../sources/sillok-os__sillok/docs/modules/index.md)<br>[docs/governance/index.md](../../../../sources/sillok-os__sillok/docs/governance/index.md)<br>[docs/benchmarks/index.md](../../../../sources/sillok-os__sillok/docs/benchmarks/index.md) |
| spec | 7 | [packs/output-styles/infographic-design.md](../../../../sources/sillok-os__sillok/packs/output-styles/infographic-design.md)<br>[docs/architecture/coverage-vs-aipm-vault.md](../../../../sources/sillok-os__sillok/docs/architecture/coverage-vs-aipm-vault.md)<br>[docs/architecture/framework-coverage.md](../../../../sources/sillok-os__sillok/docs/architecture/framework-coverage.md)<br>[docs/architecture/frontmatter-compatibility.md](../../../../sources/sillok-os__sillok/docs/architecture/frontmatter-compatibility.md)<br>[docs/architecture/proposal-only-governance.md](../../../../sources/sillok-os__sillok/docs/architecture/proposal-only-governance.md)<br>[docs/architecture/README.md](../../../../sources/sillok-os__sillok/docs/architecture/README.md)<br>[adr/0001-initial-architecture-decisions.md](../../../../sources/sillok-os__sillok/adr/0001-initial-architecture-decisions.md) |
| eval | 39 | [tests/unit/test_pyeonchan_smoke.py](../../../../sources/sillok-os__sillok/tests/unit/test_pyeonchan_smoke.py)<br>[tests/unit/yeonryun/test_coverage.py](../../../../sources/sillok-os__sillok/tests/unit/yeonryun/test_coverage.py)<br>[tests/unit/yeonryun/test_disposition_smoke.py](../../../../sources/sillok-os__sillok/tests/unit/yeonryun/test_disposition_smoke.py)<br>[tests/unit/yeonryun/test_optimizer.py](../../../../sources/sillok-os__sillok/tests/unit/yeonryun/test_optimizer.py)<br>[tests/unit/tongsa/test_tools.py](../../../../sources/sillok-os__sillok/tests/unit/tongsa/test_tools.py)<br>[tests/unit/telemetry/test_telemetry_gate.py](../../../../sources/sillok-os__sillok/tests/unit/telemetry/test_telemetry_gate.py)<br>[tests/unit/telemetry/test_telemetry_smoke.py](../../../../sources/sillok-os__sillok/tests/unit/telemetry/test_telemetry_smoke.py)<br>[tests/unit/schemas/test_schemas_smoke.py](../../../../sources/sillok-os__sillok/tests/unit/schemas/test_schemas_smoke.py) |
| security | 7 | [SECURITY.md](../../../../sources/sillok-os__sillok/SECURITY.md)<br>[packs/consulting/consulting-ai-engineering-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-ai-engineering-audit.md)<br>[packs/consulting/consulting-growth-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-growth-audit.md)<br>[packs/consulting/consulting-saas-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-saas-audit.md)<br>[packs/consulting/consulting-security-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-security-audit.md)<br>[packs/consulting/consulting-strategy-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-strategy-audit.md)<br>[packs/consulting/consulting-uxui-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-uxui-audit.md) |
| ci | 5 | [.github/workflows/ci.yml](../../../../sources/sillok-os__sillok/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/sillok-os__sillok/.github/workflows/docs.yml)<br>[.github/workflows/eval.yml](../../../../sources/sillok-os__sillok/.github/workflows/eval.yml)<br>[.github/workflows/publish.yml](../../../../sources/sillok-os__sillok/.github/workflows/publish.yml)<br>[.github/workflows/status-drift.yml](../../../../sources/sillok-os__sillok/.github/workflows/status-drift.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 37 | [mkdocs.yml](../../../../sources/sillok-os__sillok/mkdocs.yml)<br>[README.ko.md](../../../../sources/sillok-os__sillok/README.ko.md)<br>[README.md](../../../../sources/sillok-os__sillok/README.md)<br>[tests/fixtures/README.md](../../../../sources/sillok-os__sillok/tests/fixtures/README.md)<br>[sillok/schemas/README.md](../../../../sources/sillok-os__sillok/sillok/schemas/README.md)<br>[sillok/sangso/README.md](../../../../sources/sillok-os__sillok/sillok/sangso/README.md)<br>[sillok/naru/README.md](../../../../sources/sillok-os__sillok/sillok/naru/README.md)<br>[sillok/jikji/README.md](../../../../sources/sillok-os__sillok/sillok/jikji/README.md) |
| config | 1 | [pyproject.toml](../../../../sources/sillok-os__sillok/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 39 | [tests/unit/test_pyeonchan_smoke.py](../../../../sources/sillok-os__sillok/tests/unit/test_pyeonchan_smoke.py)<br>[tests/unit/yeonryun/test_coverage.py](../../../../sources/sillok-os__sillok/tests/unit/yeonryun/test_coverage.py)<br>[tests/unit/yeonryun/test_disposition_smoke.py](../../../../sources/sillok-os__sillok/tests/unit/yeonryun/test_disposition_smoke.py)<br>[tests/unit/yeonryun/test_optimizer.py](../../../../sources/sillok-os__sillok/tests/unit/yeonryun/test_optimizer.py)<br>[tests/unit/tongsa/test_tools.py](../../../../sources/sillok-os__sillok/tests/unit/tongsa/test_tools.py)<br>[tests/unit/telemetry/test_telemetry_gate.py](../../../../sources/sillok-os__sillok/tests/unit/telemetry/test_telemetry_gate.py) |
| CI workflow | 5 | [.github/workflows/ci.yml](../../../../sources/sillok-os__sillok/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/sillok-os__sillok/.github/workflows/docs.yml)<br>[.github/workflows/eval.yml](../../../../sources/sillok-os__sillok/.github/workflows/eval.yml)<br>[.github/workflows/publish.yml](../../../../sources/sillok-os__sillok/.github/workflows/publish.yml)<br>[.github/workflows/status-drift.yml](../../../../sources/sillok-os__sillok/.github/workflows/status-drift.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 7 | [SECURITY.md](../../../../sources/sillok-os__sillok/SECURITY.md)<br>[packs/consulting/consulting-ai-engineering-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-ai-engineering-audit.md)<br>[packs/consulting/consulting-growth-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-growth-audit.md)<br>[packs/consulting/consulting-saas-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-saas-audit.md)<br>[packs/consulting/consulting-security-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-security-audit.md)<br>[packs/consulting/consulting-strategy-audit.md](../../../../sources/sillok-os__sillok/packs/consulting/consulting-strategy-audit.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `mcp_server/README.md`, `examples/claude-code-mcp-config.json`, `examples/cursor-mcp-config.json`.
2. entrypoint를 따라 실행 흐름 확인: `sillok/tongsa/__main__.py`, `sillok/tongsa/server.py`, `sillok/schemas/__main__.py`.
3. agent/tool runtime 매핑: `sillok/tongsa/tools.py`, `sillok/schemas/skills_v09.py`, `sillok/eval/runner.py`.
4. retrieval/memory/indexing 확인: `sillok/pyeonchan/ingest_md.py`, `integrations/llm-wiki/README.md`, `docs/index.md`.
5. test/eval 파일로 동작 검증: `tests/unit/test_pyeonchan_smoke.py`, `tests/unit/yeonryun/test_coverage.py`, `tests/unit/yeonryun/test_disposition_smoke.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Productized LLM Wiki pattern + typed pack registry + proposal only governance — UNESCO Memory of the World Triple Anchor. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, mcp, pydantic이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
