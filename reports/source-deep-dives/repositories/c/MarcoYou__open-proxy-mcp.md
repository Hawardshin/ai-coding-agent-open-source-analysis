# MarcoYou/open-proxy-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

AI-powered MCP (Model Context Protocol) server that structures Korean AGM (Annual General Meeting) filings from DART into actionable, AI-ready data.

## 요약

- 조사 단위: `sources/MarcoYou__open-proxy-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 994 files, 84 directories, depth score 123, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 api/server, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=wiki/archive/entities/OpenProxy-MCP.md, powerpoint/open-proxy-mcp-tool-catalog.pdf, powerpoint/open-proxy-mcp-tool-catalog.pptx이고, 의존성 단서는 openai, anthropic, mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | MarcoYou/open-proxy-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/MarcoYou__open-proxy-mcp](../../../../sources/MarcoYou__open-proxy-mcp) |
| 기존 보고서 | [reports/korea-trending/repositories/MarcoYou__open-proxy-mcp.md](../../../korea-trending/repositories/MarcoYou__open-proxy-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 994 / 84 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .github, docs, open_proxy_mcp, powerpoint, sample_universe, screenshot, scripts, tests, wiki |
| 상위 확장자 | .md: 371, .json: 349, .py: 163, .csv: 61, .html: 24, .png: 10, (none): 6, .toml: 2, .xlsx: 2, .yml: 2, .example: 1, .lock: 1 |
| 소스 패턴 | api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 23 |
| tests | validation surface | 11 |
| .github | ci surface | 1 |
| open_proxy_mcp | top-level component | 1 |
| powerpoint | top-level component | 1 |
| sample_universe | top-level component | 1 |
| screenshot | top-level component | 1 |
| scripts | top-level component | 1 |
| wiki | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic |
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
| mcp | [wiki/archive/entities/OpenProxy-MCP.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/entities/OpenProxy-MCP.md) | mcp signal |
| mcp | [powerpoint/open-proxy-mcp-tool-catalog.pdf](../../../../sources/MarcoYou__open-proxy-mcp/powerpoint/open-proxy-mcp-tool-catalog.pdf) | mcp signal |
| mcp | [powerpoint/open-proxy-mcp-tool-catalog.pptx](../../../../sources/MarcoYou__open-proxy-mcp/powerpoint/open-proxy-mcp-tool-catalog.pptx) | mcp signal |
| mcp | [open_proxy_mcp/__init__.py](../../../../sources/MarcoYou__open-proxy-mcp/open_proxy_mcp/__init__.py) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/MarcoYou__open-proxy-mcp/AGENTS.md) | agentRuntime signal |
| agentRuntime | [wiki/tools/company.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/company.md) | agentRuntime signal |
| agentRuntime | [wiki/tools/corp_gov_report.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/corp_gov_report.md) | agentRuntime signal |
| agentRuntime | [wiki/tools/corporate_deals.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/corporate_deals.md) | agentRuntime signal |
| entrypoints | [open_proxy_mcp/__main__.py](../../../../sources/MarcoYou__open-proxy-mcp/open_proxy_mcp/__main__.py) | entrypoints signal |
| entrypoints | [open_proxy_mcp/server.py](../../../../sources/MarcoYou__open-proxy-mcp/open_proxy_mcp/server.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/MarcoYou__open-proxy-mcp/CLAUDE.md) | instruction signal |
| config | [pyproject.toml](../../../../sources/MarcoYou__open-proxy-mcp/pyproject.toml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [open_proxy_mcp/__main__.py](../../../../sources/MarcoYou__open-proxy-mcp/open_proxy_mcp/__main__.py)<br>[open_proxy_mcp/server.py](../../../../sources/MarcoYou__open-proxy-mcp/open_proxy_mcp/server.py) |
| agentRuntime | 76 | [AGENTS.md](../../../../sources/MarcoYou__open-proxy-mcp/AGENTS.md)<br>[wiki/tools/company.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/company.md)<br>[wiki/tools/corp_gov_report.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/corp_gov_report.md)<br>[wiki/tools/corporate_deals.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/corporate_deals.md)<br>[wiki/tools/corporate_restructuring.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/corporate_restructuring.md)<br>[wiki/tools/data_tool_disclosure_map.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/data_tool_disclosure_map.md)<br>[wiki/tools/dilutive_issuance.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/dilutive_issuance.md)<br>[wiki/tools/dividend.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/dividend.md) |
| mcp | 120 | [wiki/archive/entities/OpenProxy-MCP.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/entities/OpenProxy-MCP.md)<br>[powerpoint/open-proxy-mcp-tool-catalog.pdf](../../../../sources/MarcoYou__open-proxy-mcp/powerpoint/open-proxy-mcp-tool-catalog.pdf)<br>[powerpoint/open-proxy-mcp-tool-catalog.pptx](../../../../sources/MarcoYou__open-proxy-mcp/powerpoint/open-proxy-mcp-tool-catalog.pptx)<br>[open_proxy_mcp/__init__.py](../../../../sources/MarcoYou__open-proxy-mcp/open_proxy_mcp/__init__.py)<br>[open_proxy_mcp/__main__.py](../../../../sources/MarcoYou__open-proxy-mcp/open_proxy_mcp/__main__.py)<br>[open_proxy_mcp/server.py](../../../../sources/MarcoYou__open-proxy-mcp/open_proxy_mcp/server.py)<br>[open_proxy_mcp/tools_v2/__init__.py](../../../../sources/MarcoYou__open-proxy-mcp/open_proxy_mcp/tools_v2/__init__.py)<br>[open_proxy_mcp/tools_v2/_shared.py](../../../../sources/MarcoYou__open-proxy-mcp/open_proxy_mcp/tools_v2/_shared.py) |
| retrieval | 715 | [wiki/index.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/index.md)<br>[wiki/log.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/log.md)<br>[wiki/WIKI_SCHEMA.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/WIKI_SCHEMA.md)<br>[wiki/tools/company.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/company.md)<br>[wiki/tools/corp_gov_report.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/corp_gov_report.md)<br>[wiki/tools/corporate_deals.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/corporate_deals.md)<br>[wiki/tools/corporate_restructuring.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/corporate_restructuring.md)<br>[wiki/tools/data_tool_disclosure_map.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/data_tool_disclosure_map.md) |
| spec | 418 | [wiki/archive/decisions/decision-matrix-design.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/decisions/decision-matrix-design.md)<br>[wiki/archive/analysis/corp_gov_report-design.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/analysis/corp_gov_report-design.md)<br>[wiki/archive/analysis/corporate_restructuring-design.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/analysis/corporate_restructuring-design.md)<br>[wiki/archive/analysis/dilutive_issuance-design.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/analysis/dilutive_issuance-design.md)<br>[wiki/archive/analysis/related_party_transaction-design.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/analysis/related_party_transaction-design.md)<br>[wiki/archive/analysis/screen_events-design.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/analysis/screen_events-design.md)<br>[wiki/architecture/3-tier-fallback.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/architecture/3-tier-fallback.md)<br>[wiki/architecture/data-collection.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/architecture/data-collection.md) |
| eval | 24 | [wiki/archive/benchmark-personnel-results.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/benchmark-personnel-results.md)<br>[wiki/architecture/parsing_success_rate_audit_spec.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/architecture/parsing_success_rate_audit_spec.md)<br>[wiki/architecture/proxy_advise_word_report_spec.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/architecture/proxy_advise_word_report_spec.md)<br>[wiki/architecture/audits/260528_proxy_advise_metric_gap_audit.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/architecture/audits/260528_proxy_advise_metric_gap_audit.md)<br>[wiki/architecture/audits/data/260615_coheld_integration_test.json](../../../../sources/MarcoYou__open-proxy-mcp/wiki/architecture/audits/data/260615_coheld_integration_test.json)<br>[wiki/architecture/audits/data/260615_director_eval_diagnosis_after.json](../../../../sources/MarcoYou__open-proxy-mcp/wiki/architecture/audits/data/260615_director_eval_diagnosis_after.json)<br>[wiki/architecture/audits/data/260615_director_eval_diagnosis_fixed.json](../../../../sources/MarcoYou__open-proxy-mcp/wiki/architecture/audits/data/260615_director_eval_diagnosis_fixed.json)<br>[wiki/architecture/audits/data/260616_coheld_quality_census.json](../../../../sources/MarcoYou__open-proxy-mcp/wiki/architecture/audits/data/260616_coheld_quality_census.json) |
| security | 153 | [wiki/lessons/agenda-typed-status-audit-260615.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/lessons/agenda-typed-status-audit-260615.md)<br>[wiki/lessons/render-output-audit-260616.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/lessons/render-output-audit-260616.md)<br>[wiki/lessons/tool-coverage-audit-260612.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/lessons/tool-coverage-audit-260612.md)<br>[wiki/decisions/260429_0059_decision_voting-policy-consensus-matrix.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/decisions/260429_0059_decision_voting-policy-consensus-matrix.md)<br>[wiki/archive/services/policy_comparison.py](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/services/policy_comparison.py)<br>[wiki/archive/audits/260411_2023_audit_personnel-벤치마크-v1.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/audits/260411_2023_audit_personnel-벤치마크-v1.md)<br>[wiki/archive/audits/260421_2308_audit_parsing-10tool-20기업.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/audits/260421_2308_audit_parsing-10tool-20기업.md)<br>[wiki/archive/audits/260422_0005_audit_parsing-14scope-15기업.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/audits/260422_0005_audit_parsing-14scope-15기업.md) |
| ci | 2 | [.github/workflows/deploy.yml](../../../../sources/MarcoYou__open-proxy-mcp/.github/workflows/deploy.yml)<br>[.github/workflows/wiki-lint.yml](../../../../sources/MarcoYou__open-proxy-mcp/.github/workflows/wiki-lint.yml) |
| container | 1 | [Dockerfile](../../../../sources/MarcoYou__open-proxy-mcp/Dockerfile) |
| instruction | 2 | [AGENTS.md](../../../../sources/MarcoYou__open-proxy-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/MarcoYou__open-proxy-mcp/CLAUDE.md) |
| docs | 37 | [README_ENG.md](../../../../sources/MarcoYou__open-proxy-mcp/README_ENG.md)<br>[README.md](../../../../sources/MarcoYou__open-proxy-mcp/README.md)<br>[wiki/tools/README.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/tools/README.md)<br>[wiki/rules/laws/README.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/rules/laws/README.md)<br>[wiki/rules/concepts/README.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/rules/concepts/README.md)<br>[wiki/raw/README.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/raw/README.md)<br>[wiki/ralph/README.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/ralph/README.md)<br>[wiki/lessons/README.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/lessons/README.md) |
| config | 2 | [pyproject.toml](../../../../sources/MarcoYou__open-proxy-mcp/pyproject.toml)<br>[uv.lock](../../../../sources/MarcoYou__open-proxy-mcp/uv.lock) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 24 | [wiki/archive/benchmark-personnel-results.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/benchmark-personnel-results.md)<br>[wiki/architecture/parsing_success_rate_audit_spec.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/architecture/parsing_success_rate_audit_spec.md)<br>[wiki/architecture/proxy_advise_word_report_spec.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/architecture/proxy_advise_word_report_spec.md)<br>[wiki/architecture/audits/260528_proxy_advise_metric_gap_audit.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/architecture/audits/260528_proxy_advise_metric_gap_audit.md)<br>[wiki/architecture/audits/data/260615_coheld_integration_test.json](../../../../sources/MarcoYou__open-proxy-mcp/wiki/architecture/audits/data/260615_coheld_integration_test.json)<br>[wiki/architecture/audits/data/260615_director_eval_diagnosis_after.json](../../../../sources/MarcoYou__open-proxy-mcp/wiki/architecture/audits/data/260615_director_eval_diagnosis_after.json) |
| CI workflow | 2 | [.github/workflows/deploy.yml](../../../../sources/MarcoYou__open-proxy-mcp/.github/workflows/deploy.yml)<br>[.github/workflows/wiki-lint.yml](../../../../sources/MarcoYou__open-proxy-mcp/.github/workflows/wiki-lint.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/MarcoYou__open-proxy-mcp/Dockerfile) |
| 보안/정책 | 153 | [wiki/lessons/agenda-typed-status-audit-260615.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/lessons/agenda-typed-status-audit-260615.md)<br>[wiki/lessons/render-output-audit-260616.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/lessons/render-output-audit-260616.md)<br>[wiki/lessons/tool-coverage-audit-260612.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/lessons/tool-coverage-audit-260612.md)<br>[wiki/decisions/260429_0059_decision_voting-policy-consensus-matrix.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/decisions/260429_0059_decision_voting-policy-consensus-matrix.md)<br>[wiki/archive/services/policy_comparison.py](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/services/policy_comparison.py)<br>[wiki/archive/audits/260411_2023_audit_personnel-벤치마크-v1.md](../../../../sources/MarcoYou__open-proxy-mcp/wiki/archive/audits/260411_2023_audit_personnel-벤치마크-v1.md) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/MarcoYou__open-proxy-mcp/AGENTS.md)<br>[CLAUDE.md](../../../../sources/MarcoYou__open-proxy-mcp/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `wiki/archive/entities/OpenProxy-MCP.md`, `powerpoint/open-proxy-mcp-tool-catalog.pdf`, `powerpoint/open-proxy-mcp-tool-catalog.pptx`.
2. entrypoint를 따라 실행 흐름 확인: `open_proxy_mcp/__main__.py`, `open_proxy_mcp/server.py`.
3. agent/tool runtime 매핑: `AGENTS.md`, `wiki/tools/company.md`, `wiki/tools/corp_gov_report.md`.
4. retrieval/memory/indexing 확인: `wiki/index.md`, `wiki/log.md`, `wiki/WIKI_SCHEMA.md`.
5. test/eval 파일로 동작 검증: `wiki/archive/benchmark-personnel-results.md`, `wiki/architecture/parsing_success_rate_audit_spec.md`, `wiki/architecture/proxy_advise_word_report_spec.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI powered MCP Model Context Protocol server that structures Korean AGM Annual General Meeting filings from DART into ac. 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, README.md, AGENTS.md, CLAUDE.md이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
