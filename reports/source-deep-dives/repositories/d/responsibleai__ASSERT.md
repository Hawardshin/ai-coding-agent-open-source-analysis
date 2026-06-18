# responsibleai/ASSERT 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Requirement-driven evaluation harness for AI agents and LLM applications. Generate behavior-specific test cases, run them against any target (hosted models, callable wrappers, OTel-traced agents), and inspect local-first artifacts.

## 요약

- 조사 단위: `sources/responsibleai__ASSERT` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 629 files, 112 directories, depth score 124, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

평가/관측/품질 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 eval=website/public/icons/behavior_spec.svg, website/public/icons/evaluation_set.svg, website/public/assets/viewer-suites-eval-results-run-result-verdict.png이고, 의존성 단서는 openai, mcp, langchain, langgraph, llama-index, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 품질/평가 비교 지점이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | responsibleai/ASSERT |
| 주제 | 평가/관측/품질 / 평가/관측/품질 |
| Region | global |
| Language | Python |
| Stars | 151 |
| Forks | 20 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/responsibleai__ASSERT](../../../../sources/responsibleai__ASSERT) |
| 기존 보고서 | [reports/global-trending/repositories/responsibleai__ASSERT.md](../../../global-trending/repositories/responsibleai__ASSERT.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 629 / 112 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .azure-pipelines, .devcontainer, .github, assert_ai, assets, docs, examples, scripts, tests, viewer, website |
| 상위 확장자 | .py: 201, .md: 132, .yaml: 78, .ts: 48, .png: 43, .tsx: 26, .json: 24, .svelte: 17, .svg: 16, .yml: 12, (none): 9, .example: 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 40 |
| examples/agents | examples workspace | 12 |
| docs | documentation surface | 5 |
| examples/azure_doc_qa | examples workspace | 5 |
| examples/behavior_specs | examples workspace | 5 |
| examples/change_control_agent | examples workspace | 2 |
| examples/incident_triage_agent | examples workspace | 2 |
| examples/science_research_agent | examples workspace | 2 |
| .devcontainer | deployment surface | 1 |
| .github | ci surface | 1 |
| assert_ai | top-level component | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| examples/prompt_agents | examples workspace | 1 |
| examples/travel_planner_langgraph | examples workspace | 1 |
| examples/travel_planner_neurosan | examples workspace | 1 |
| scripts | top-level component | 1 |
| viewer | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | assert-ai | assert-ai |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | langchain, langgraph, llama-index |
| vectorStores | 없음 |
| modelRuntime | transformers, llama |
| webRuntime | 없음 |
| developerSurface | click |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| eval | [website/public/icons/behavior_spec.svg](../../../../sources/responsibleai__ASSERT/website/public/icons/behavior_spec.svg) | eval signal |
| eval | [website/public/icons/evaluation_set.svg](../../../../sources/responsibleai__ASSERT/website/public/icons/evaluation_set.svg) | eval signal |
| eval | [website/public/assets/viewer-suites-eval-results-run-result-verdict.png](../../../../sources/responsibleai__ASSERT/website/public/assets/viewer-suites-eval-results-run-result-verdict.png) | eval signal |
| eval | [website/public/assets/viewer-suites-eval-results-run-rows.png](../../../../sources/responsibleai__ASSERT/website/public/assets/viewer-suites-eval-results-run-rows.png) | eval signal |
| entrypoints | [viewer/src/app.css](../../../../sources/responsibleai__ASSERT/viewer/src/app.css) | entrypoints signal |
| entrypoints | [viewer/src/app.d.ts](../../../../sources/responsibleai__ASSERT/viewer/src/app.d.ts) | entrypoints signal |
| entrypoints | [viewer/src/app.html](../../../../sources/responsibleai__ASSERT/viewer/src/app.html) | entrypoints signal |
| config | [pyproject.toml](../../../../sources/responsibleai__ASSERT/pyproject.toml) | config signal |
| config | [uv.lock](../../../../sources/responsibleai__ASSERT/uv.lock) | config signal |
| config | [website/package.json](../../../../sources/responsibleai__ASSERT/website/package.json) | config signal |
| config | [website/tsconfig.json](../../../../sources/responsibleai__ASSERT/website/tsconfig.json) | config signal |
| ci | [.github/workflows/build-viewer.yml](../../../../sources/responsibleai__ASSERT/.github/workflows/build-viewer.yml) | ci signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [viewer/src/app.css](../../../../sources/responsibleai__ASSERT/viewer/src/app.css)<br>[viewer/src/app.d.ts](../../../../sources/responsibleai__ASSERT/viewer/src/app.d.ts)<br>[viewer/src/app.html](../../../../sources/responsibleai__ASSERT/viewer/src/app.html) |
| agentRuntime | 42 | [AGENTS.md](../../../../sources/responsibleai__ASSERT/AGENTS.md)<br>[website/public/images/agent-shield-5-stages.png](../../../../sources/responsibleai__ASSERT/website/public/images/agent-shield-5-stages.png)<br>[website/public/images/agent-shield-composability.png](../../../../sources/responsibleai__ASSERT/website/public/images/agent-shield-composability.png)<br>[website/public/images/agent-shield.png](../../../../sources/responsibleai__ASSERT/website/public/images/agent-shield.png)<br>[viewer/src/lib/server/runner.ts](../../../../sources/responsibleai__ASSERT/viewer/src/lib/server/runner.ts)<br>[examples/travel_planner_neurosan/agent.py](../../../../sources/responsibleai__ASSERT/examples/travel_planner_neurosan/agent.py)<br>[examples/travel_planner_langgraph/agent.py](../../../../sources/responsibleai__ASSERT/examples/travel_planner_langgraph/agent.py)<br>[examples/science_research_agent/agent.py](../../../../sources/responsibleai__ASSERT/examples/science_research_agent/agent.py) |
| mcp | 1 | [examples/azure_doc_qa/mcp_tools.py](../../../../sources/responsibleai__ASSERT/examples/azure_doc_qa/mcp_tools.py) |
| retrieval | 2 | [website/index.html](../../../../sources/responsibleai__ASSERT/website/index.html)<br>[examples/behavior_specs/poor_retrieval_failures.md](../../../../sources/responsibleai__ASSERT/examples/behavior_specs/poor_retrieval_failures.md) |
| spec | 6 | [website/public/icons/behavior_spec.svg](../../../../sources/responsibleai__ASSERT/website/public/icons/behavior_spec.svg)<br>[website/docs/design-migration.md](../../../../sources/responsibleai__ASSERT/website/docs/design-migration.md)<br>[tests/test_init_design_agent.py](../../../../sources/responsibleai__ASSERT/tests/test_init_design_agent.py)<br>[examples/azure_doc_qa/docs/internal/agent-service-architecture.md](../../../../sources/responsibleai__ASSERT/examples/azure_doc_qa/docs/internal/agent-service-architecture.md)<br>[examples/azure_doc_qa/docs/internal/q3-2026-roadmap.md](../../../../sources/responsibleai__ASSERT/examples/azure_doc_qa/docs/internal/q3-2026-roadmap.md)<br>[assert_ai/init/_design_agent.py](../../../../sources/responsibleai__ASSERT/assert_ai/init/_design_agent.py) |
| eval | 184 | [website/public/icons/behavior_spec.svg](../../../../sources/responsibleai__ASSERT/website/public/icons/behavior_spec.svg)<br>[website/public/icons/evaluation_set.svg](../../../../sources/responsibleai__ASSERT/website/public/icons/evaluation_set.svg)<br>[website/public/assets/viewer-suites-eval-results-run-result-verdict.png](../../../../sources/responsibleai__ASSERT/website/public/assets/viewer-suites-eval-results-run-result-verdict.png)<br>[website/public/assets/viewer-suites-eval-results-run-rows.png](../../../../sources/responsibleai__ASSERT/website/public/assets/viewer-suites-eval-results-run-rows.png)<br>[website/public/assets/viewer-suites-eval-results-run-summary.png](../../../../sources/responsibleai__ASSERT/website/public/assets/viewer-suites-eval-results-run-summary.png)<br>[website/public/assets/viewer-suites-eval-results.png](../../../../sources/responsibleai__ASSERT/website/public/assets/viewer-suites-eval-results.png)<br>`viewer/src/routes/suite/[suite_id]/[run_id]/monitor/+page.server.ts`<br>`viewer/src/routes/suite/[suite_id]/[run_id]/monitor/+page.svelte` |
| security | 15 | [SECURITY.md](../../../../sources/responsibleai__ASSERT/SECURITY.md)<br>[website/public/icons/behavior_policy.svg](../../../../sources/responsibleai__ASSERT/website/public/icons/behavior_policy.svg)<br>[tests/test_acs_guard.py](../../../../sources/responsibleai__ASSERT/tests/test_acs_guard.py)<br>[tests/test_azure_auth_dotenv.py](../../../../sources/responsibleai__ASSERT/tests/test_azure_auth_dotenv.py)<br>[tests/test_azure_auth.py](../../../../sources/responsibleai__ASSERT/tests/test_azure_auth.py)<br>[tests/test_security.py](../../../../sources/responsibleai__ASSERT/tests/test_security.py)<br>[tests/test_tool_module_sandbox.py](../../../../sources/responsibleai__ASSERT/tests/test_tool_module_sandbox.py)<br>[tests/test_viewer_policy_api.py](../../../../sources/responsibleai__ASSERT/tests/test_viewer_policy_api.py) |
| ci | 7 | [.github/workflows/build-viewer.yml](../../../../sources/responsibleai__ASSERT/.github/workflows/build-viewer.yml)<br>[.github/workflows/build.yml](../../../../sources/responsibleai__ASSERT/.github/workflows/build.yml)<br>[.github/workflows/deploy-pages.yml](../../../../sources/responsibleai__ASSERT/.github/workflows/deploy-pages.yml)<br>[.github/workflows/publish-pypi.yml](../../../../sources/responsibleai__ASSERT/.github/workflows/publish-pypi.yml)<br>[.github/workflows/regression.yml](../../../../sources/responsibleai__ASSERT/.github/workflows/regression.yml)<br>[.github/workflows/review-escalation.yml](../../../../sources/responsibleai__ASSERT/.github/workflows/review-escalation.yml)<br>[.github/workflows/scorecard.yml](../../../../sources/responsibleai__ASSERT/.github/workflows/scorecard.yml) |
| container | 2 | [examples/agents/openclaw/docker-compose.yml](../../../../sources/responsibleai__ASSERT/examples/agents/openclaw/docker-compose.yml)<br>[examples/agents/openclaw/Dockerfile](../../../../sources/responsibleai__ASSERT/examples/agents/openclaw/Dockerfile) |
| instruction | 3 | [AGENTS.md](../../../../sources/responsibleai__ASSERT/AGENTS.md)<br>[CLAUDE.md](../../../../sources/responsibleai__ASSERT/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/responsibleai__ASSERT/.github/copilot-instructions.md) |
| docs | 134 | [README.md](../../../../sources/responsibleai__ASSERT/README.md)<br>[website/_deploy.json](../../../../sources/responsibleai__ASSERT/website/_deploy.json)<br>[website/.eslintrc.json](../../../../sources/responsibleai__ASSERT/website/.eslintrc.json)<br>[website/.gitignore](../../../../sources/responsibleai__ASSERT/website/.gitignore)<br>[website/index.html](../../../../sources/responsibleai__ASSERT/website/index.html)<br>[website/next-env.d.ts](../../../../sources/responsibleai__ASSERT/website/next-env.d.ts)<br>[website/next.config.mjs](../../../../sources/responsibleai__ASSERT/website/next.config.mjs)<br>[website/package-lock.json](../../../../sources/responsibleai__ASSERT/website/package-lock.json) |
| config | 6 | [pyproject.toml](../../../../sources/responsibleai__ASSERT/pyproject.toml)<br>[uv.lock](../../../../sources/responsibleai__ASSERT/uv.lock)<br>[website/package.json](../../../../sources/responsibleai__ASSERT/website/package.json)<br>[website/tsconfig.json](../../../../sources/responsibleai__ASSERT/website/tsconfig.json)<br>[viewer/package.json](../../../../sources/responsibleai__ASSERT/viewer/package.json)<br>[viewer/tsconfig.json](../../../../sources/responsibleai__ASSERT/viewer/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 184 | [website/public/icons/behavior_spec.svg](../../../../sources/responsibleai__ASSERT/website/public/icons/behavior_spec.svg)<br>[website/public/icons/evaluation_set.svg](../../../../sources/responsibleai__ASSERT/website/public/icons/evaluation_set.svg)<br>[website/public/assets/viewer-suites-eval-results-run-result-verdict.png](../../../../sources/responsibleai__ASSERT/website/public/assets/viewer-suites-eval-results-run-result-verdict.png)<br>[website/public/assets/viewer-suites-eval-results-run-rows.png](../../../../sources/responsibleai__ASSERT/website/public/assets/viewer-suites-eval-results-run-rows.png)<br>[website/public/assets/viewer-suites-eval-results-run-summary.png](../../../../sources/responsibleai__ASSERT/website/public/assets/viewer-suites-eval-results-run-summary.png)<br>[website/public/assets/viewer-suites-eval-results.png](../../../../sources/responsibleai__ASSERT/website/public/assets/viewer-suites-eval-results.png) |
| CI workflow | 7 | [.github/workflows/build-viewer.yml](../../../../sources/responsibleai__ASSERT/.github/workflows/build-viewer.yml)<br>[.github/workflows/build.yml](../../../../sources/responsibleai__ASSERT/.github/workflows/build.yml)<br>[.github/workflows/deploy-pages.yml](../../../../sources/responsibleai__ASSERT/.github/workflows/deploy-pages.yml)<br>[.github/workflows/publish-pypi.yml](../../../../sources/responsibleai__ASSERT/.github/workflows/publish-pypi.yml)<br>[.github/workflows/regression.yml](../../../../sources/responsibleai__ASSERT/.github/workflows/regression.yml)<br>[.github/workflows/review-escalation.yml](../../../../sources/responsibleai__ASSERT/.github/workflows/review-escalation.yml) |
| 컨테이너/배포 | 2 | [examples/agents/openclaw/docker-compose.yml](../../../../sources/responsibleai__ASSERT/examples/agents/openclaw/docker-compose.yml)<br>[examples/agents/openclaw/Dockerfile](../../../../sources/responsibleai__ASSERT/examples/agents/openclaw/Dockerfile) |
| 보안/정책 | 15 | [SECURITY.md](../../../../sources/responsibleai__ASSERT/SECURITY.md)<br>[website/public/icons/behavior_policy.svg](../../../../sources/responsibleai__ASSERT/website/public/icons/behavior_policy.svg)<br>[tests/test_acs_guard.py](../../../../sources/responsibleai__ASSERT/tests/test_acs_guard.py)<br>[tests/test_azure_auth_dotenv.py](../../../../sources/responsibleai__ASSERT/tests/test_azure_auth_dotenv.py)<br>[tests/test_azure_auth.py](../../../../sources/responsibleai__ASSERT/tests/test_azure_auth.py)<br>[tests/test_security.py](../../../../sources/responsibleai__ASSERT/tests/test_security.py) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/responsibleai__ASSERT/AGENTS.md)<br>[CLAUDE.md](../../../../sources/responsibleai__ASSERT/CLAUDE.md)<br>[.github/copilot-instructions.md](../../../../sources/responsibleai__ASSERT/.github/copilot-instructions.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `website/public/icons/behavior_spec.svg`, `website/public/icons/evaluation_set.svg`, `website/public/assets/viewer-suites-eval-results-run-result-verdict.png`.
2. entrypoint를 따라 실행 흐름 확인: `viewer/src/app.css`, `viewer/src/app.d.ts`, `viewer/src/app.html`.
3. agent/tool runtime 매핑: `AGENTS.md`, `website/public/images/agent-shield-5-stages.png`, `website/public/images/agent-shield-composability.png`.
4. retrieval/memory/indexing 확인: `website/index.html`, `examples/behavior_specs/poor_retrieval_failures.md`.
5. test/eval 파일로 동작 검증: `website/public/icons/behavior_spec.svg`, `website/public/icons/evaluation_set.svg`, `website/public/assets/viewer-suites-eval-results-run-result-verdict.png`.

## 기존 레포 인사이트

평가/관측/품질 관점에서 Requirement driven evaluation harness for AI agents and LLM applications. Generate behavior specific test cases, run the. 핵심 구조 신호는 Python, pyproject.toml, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 평가/관측/품질 레포입니다. 활용 관점은 품질/평가 비교 지점이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
