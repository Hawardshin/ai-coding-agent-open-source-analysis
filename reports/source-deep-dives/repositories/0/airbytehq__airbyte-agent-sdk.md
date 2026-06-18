# airbytehq/airbyte-agent-sdk 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

🐙 Drop-in tools that give AI agents reliable, permission-aware access to external systems.

## 요약

- 조사 단위: `sources/airbytehq__airbyte-agent-sdk` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 665 files, 200 directories, depth score 90, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=lovable/skills/airbyte-integration.md, airbyte_agent_sdk/skill_docs_renderer.py, airbyte_agent_sdk/tools.py이고, 의존성 단서는 openai, mcp, langchain, langgraph, pydantic, click, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | airbytehq/airbyte-agent-sdk |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 126 |
| Forks | 10 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/airbytehq__airbyte-agent-sdk](../../../../sources/airbytehq__airbyte-agent-sdk) |
| 기존 보고서 | [reports/global-trending/repositories/airbytehq__airbyte-agent-sdk.md](../../../global-trending/repositories/airbytehq__airbyte-agent-sdk.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 665 / 200 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude, .claude-plugin, .codex, .github, airbyte_agent_sdk, connectors, lovable |
| 상위 확장자 | .py: 354, .md: 177, .yaml: 59, .json: 55, .jinja2: 13, .svg: 2, (none): 2, .pyi: 1, .toml: 1, .typed: 1 |
| 소스 패턴 | agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| airbyte_agent_sdk | top-level component | 1 |
| connectors | top-level component | 1 |
| lovable | top-level component | 1 |


## 실행 방식

_root manifest에서 추출된 command surface가 없습니다._


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai |
| agentProtocols | mcp |
| agentFrameworks | langchain, langgraph |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | 없음 |
| developerSurface | click |
| observability | opentelemetry |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [lovable/skills/airbyte-integration.md](../../../../sources/airbytehq__airbyte-agent-sdk/lovable/skills/airbyte-integration.md) | agentRuntime signal |
| agentRuntime | [airbyte_agent_sdk/skill_docs_renderer.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/skill_docs_renderer.py) | agentRuntime signal |
| agentRuntime | [airbyte_agent_sdk/tools.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/tools.py) | agentRuntime signal |
| agentRuntime | [airbyte_agent_sdk/testing/runner.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/testing/runner.py) | agentRuntime signal |
| instruction | [.codex/skills/discovering-connectors/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/discovering-connectors/SKILL.md) | instruction signal |
| instruction | [.codex/skills/discovering-connectors/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/discovering-connectors/agents/openai.yaml) | instruction signal |
| instruction | [.codex/skills/building-multi-connector-agent/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/building-multi-connector-agent/SKILL.md) | instruction signal |
| instruction | [.codex/skills/building-multi-connector-agent/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/building-multi-connector-agent/agents/openai.yaml) | instruction signal |
| config | [pyproject.toml](../../../../sources/airbytehq__airbyte-agent-sdk/pyproject.toml) | config signal |
| eval | [airbyte_agent_sdk/testing/spec_loader.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/testing/spec_loader.py) | eval support |
| eval | [airbyte_agent_sdk/observability/__init__.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/__init__.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 28 | [lovable/skills/airbyte-integration.md](../../../../sources/airbytehq__airbyte-agent-sdk/lovable/skills/airbyte-integration.md)<br>[airbyte_agent_sdk/skill_docs_renderer.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/skill_docs_renderer.py)<br>[airbyte_agent_sdk/tools.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/tools.py)<br>[airbyte_agent_sdk/testing/runner.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/testing/runner.py)<br>[airbyte_agent_sdk/executor/__init__.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/executor/__init__.py)<br>[airbyte_agent_sdk/executor/hosted_executor.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/executor/hosted_executor.py)<br>[airbyte_agent_sdk/executor/local_executor.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/executor/local_executor.py)<br>[airbyte_agent_sdk/executor/models.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/executor/models.py) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 1 | [airbyte_agent_sdk/testing/spec_loader.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/testing/spec_loader.py) |
| eval | 8 | [airbyte_agent_sdk/testing/spec_loader.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/testing/spec_loader.py)<br>[airbyte_agent_sdk/observability/__init__.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/__init__.py)<br>[airbyte_agent_sdk/observability/config.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/config.py)<br>[airbyte_agent_sdk/observability/models.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/models.py)<br>[airbyte_agent_sdk/observability/redactor.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/redactor.py)<br>[airbyte_agent_sdk/observability/session.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/session.py)<br>[airbyte_agent_sdk/codegen/templates/test_cassettes.py.jinja2](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/codegen/templates/test_cassettes.py.jinja2)<br>[airbyte_agent_sdk/codegen/templates/test_connector.py.jinja2](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/codegen/templates/test_connector.py.jinja2) |
| security | 57 | [connectors/zoho-crm/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zoho-crm/AUTH.md)<br>[connectors/zendesk-talk/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-talk/AUTH.md)<br>[connectors/zendesk-support/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-support/AUTH.md)<br>[connectors/zendesk-chat/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-chat/AUTH.md)<br>[connectors/woocommerce/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/woocommerce/AUTH.md)<br>[connectors/typeform/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/typeform/AUTH.md)<br>[connectors/twilio/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/twilio/AUTH.md)<br>[connectors/tiktok-marketing/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/tiktok-marketing/AUTH.md) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 12 | [.codex/skills/discovering-connectors/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/discovering-connectors/SKILL.md)<br>[.codex/skills/discovering-connectors/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/discovering-connectors/agents/openai.yaml)<br>[.codex/skills/building-multi-connector-agent/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/building-multi-connector-agent/SKILL.md)<br>[.codex/skills/building-multi-connector-agent/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/building-multi-connector-agent/agents/openai.yaml)<br>[.codex/skills/bootstrapping-agent/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/bootstrapping-agent/SKILL.md)<br>[.codex/skills/bootstrapping-agent/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/bootstrapping-agent/agents/openai.yaml)<br>[.codex/skills/airbyte-sdk-reference/claude-sdk.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/airbyte-sdk-reference/claude-sdk.md)<br>[.codex/skills/airbyte-sdk-reference/connector-discovery.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/airbyte-sdk-reference/connector-discovery.md) |
| docs | 108 | [README.md](../../../../sources/airbytehq__airbyte-agent-sdk/README.md)<br>[connectors/zoho-crm/README.context.json](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zoho-crm/README.context.json)<br>[connectors/zoho-crm/README.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zoho-crm/README.md)<br>[connectors/zendesk-talk/README.context.json](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-talk/README.context.json)<br>[connectors/zendesk-talk/README.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-talk/README.md)<br>[connectors/zendesk-support/README.context.json](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-support/README.context.json)<br>[connectors/zendesk-support/README.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-support/README.md)<br>[connectors/zendesk-chat/README.context.json](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-chat/README.context.json) |
| config | 1 | [pyproject.toml](../../../../sources/airbytehq__airbyte-agent-sdk/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 8 | [airbyte_agent_sdk/testing/spec_loader.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/testing/spec_loader.py)<br>[airbyte_agent_sdk/observability/__init__.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/__init__.py)<br>[airbyte_agent_sdk/observability/config.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/config.py)<br>[airbyte_agent_sdk/observability/models.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/models.py)<br>[airbyte_agent_sdk/observability/redactor.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/redactor.py)<br>[airbyte_agent_sdk/observability/session.py](../../../../sources/airbytehq__airbyte-agent-sdk/airbyte_agent_sdk/observability/session.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 57 | [connectors/zoho-crm/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zoho-crm/AUTH.md)<br>[connectors/zendesk-talk/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-talk/AUTH.md)<br>[connectors/zendesk-support/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-support/AUTH.md)<br>[connectors/zendesk-chat/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/zendesk-chat/AUTH.md)<br>[connectors/woocommerce/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/woocommerce/AUTH.md)<br>[connectors/typeform/AUTH.md](../../../../sources/airbytehq__airbyte-agent-sdk/connectors/typeform/AUTH.md) |
| 에이전트 지시문 | 12 | [.codex/skills/discovering-connectors/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/discovering-connectors/SKILL.md)<br>[.codex/skills/discovering-connectors/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/discovering-connectors/agents/openai.yaml)<br>[.codex/skills/building-multi-connector-agent/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/building-multi-connector-agent/SKILL.md)<br>[.codex/skills/building-multi-connector-agent/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/building-multi-connector-agent/agents/openai.yaml)<br>[.codex/skills/bootstrapping-agent/SKILL.md](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/bootstrapping-agent/SKILL.md)<br>[.codex/skills/bootstrapping-agent/agents/openai.yaml](../../../../sources/airbytehq__airbyte-agent-sdk/.codex/skills/bootstrapping-agent/agents/openai.yaml) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `lovable/skills/airbyte-integration.md`, `airbyte_agent_sdk/skill_docs_renderer.py`, `airbyte_agent_sdk/tools.py`.
2. agent/tool runtime 매핑: `lovable/skills/airbyte-integration.md`, `airbyte_agent_sdk/skill_docs_renderer.py`, `airbyte_agent_sdk/tools.py`.
3. test/eval 파일로 동작 검증: `airbyte_agent_sdk/testing/spec_loader.py`, `airbyte_agent_sdk/observability/__init__.py`, `airbyte_agent_sdk/observability/config.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 🐙 Drop in tools that give AI agents reliable, permission aware access to external systems.. 핵심 구조 신호는 Python, pyproject.toml, README.md, LICENSE, openai, langchain이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
