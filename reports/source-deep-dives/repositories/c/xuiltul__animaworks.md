# xuiltul/animaworks 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Organization-as-Code for autonomous AI agents. Brain-inspired memory that grows, consolidates, and forgets. Multi-model (Claude/Codex/Gemini/Cursor/Ollama).

## 요약

- 조사 단위: `sources/xuiltul__animaworks` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,785 files, 505 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=tests/unit/test_ipc_chunk.py, tests/unit/test_memory_lazy_init.py, tests/unit/test_rag_singleton_cuda_fallback.py이고, 의존성 단서는 openai, anthropic, claude, codex, fastapi, pydantic, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | xuiltul/animaworks |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Python |
| Stars | 240 |
| Forks | 39 |
| License | Apache-2.0 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/xuiltul__animaworks](../../../../sources/xuiltul__animaworks) |
| 기존 보고서 | [reports/llm-wiki/repositories/xuiltul__animaworks.md](../../../llm-wiki/repositories/xuiltul__animaworks.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2785 / 505 |
| 관측 최대 깊이 | 7 |
| 상위 디렉터리 | .claude, .github, assets, benchmarks, cli, core, demo, deploy, docs, scripts, server, swe, templates, tests |
| 상위 확장자 | .py: 1528, .md: 886, .js: 122, .png: 75, .json: 70, .jsonl: 24, .css: 21, .txt: 12, (none): 11, .sh: 8, .yml: 7, .html: 4 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 162 |
| docs | documentation surface | 34 |
| server | source boundary | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| cli | top-level component | 1 |
| core | top-level component | 1 |
| demo | top-level component | 1 |
| deploy | deployment surface | 1 |
| scripts | top-level component | 1 |
| swe | top-level component | 1 |
| templates | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | pyproject.toml | animaworks | animaworks |
| utility | pyproject.toml | animaworks-tool | animaworks-tool |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | openai, anthropic, claude |
| agentProtocols | codex |
| agentFrameworks | 없음 |
| vectorStores | chroma |
| modelRuntime | transformers, ollama, llama |
| webRuntime | fastapi |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [tests/unit/test_ipc_chunk.py](../../../../sources/xuiltul__animaworks/tests/unit/test_ipc_chunk.py) | retrieval signal |
| retrieval | [tests/unit/test_memory_lazy_init.py](../../../../sources/xuiltul__animaworks/tests/unit/test_memory_lazy_init.py) | retrieval signal |
| retrieval | [tests/unit/test_rag_singleton_cuda_fallback.py](../../../../sources/xuiltul__animaworks/tests/unit/test_rag_singleton_cuda_fallback.py) | retrieval signal |
| retrieval | [tests/unit/test_rag_singleton.py](../../../../sources/xuiltul__animaworks/tests/unit/test_rag_singleton.py) | retrieval signal |
| entrypoints | [main.py](../../../../sources/xuiltul__animaworks/main.py) | entrypoints signal |
| entrypoints | [core/mcp/server.py](../../../../sources/xuiltul__animaworks/core/mcp/server.py) | entrypoints signal |
| entrypoints | [core/i18n/strings/server.py](../../../../sources/xuiltul__animaworks/core/i18n/strings/server.py) | entrypoints signal |
| entrypoints | [cli/__main__.py](../../../../sources/xuiltul__animaworks/cli/__main__.py) | entrypoints signal |
| docs | [README_ja.md](../../../../sources/xuiltul__animaworks/README_ja.md) | docs signal |
| docs | [README_ko.md](../../../../sources/xuiltul__animaworks/README_ko.md) | docs signal |
| docs | [README_zh.md](../../../../sources/xuiltul__animaworks/README_zh.md) | docs signal |
| docs | [README.md](../../../../sources/xuiltul__animaworks/README.md) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 6 | [main.py](../../../../sources/xuiltul__animaworks/main.py)<br>[core/mcp/server.py](../../../../sources/xuiltul__animaworks/core/mcp/server.py)<br>[core/i18n/strings/server.py](../../../../sources/xuiltul__animaworks/core/i18n/strings/server.py)<br>[cli/__main__.py](../../../../sources/xuiltul__animaworks/cli/__main__.py)<br>[cli/commands/server.py](../../../../sources/xuiltul__animaworks/cli/commands/server.py)<br>[benchmarks/locomo/__main__.py](../../../../sources/xuiltul__animaworks/benchmarks/locomo/__main__.py) |
| agentRuntime | 568 | [tests/unit/tools/__init__.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/__init__.py)<br>[tests/unit/tools/test_anima_icon_url.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/test_anima_icon_url.py)<br>[tests/unit/tools/test_asset_optimization.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/test_asset_optimization.py)<br>[tests/unit/tools/test_aws_collector.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/test_aws_collector.py)<br>[tests/unit/tools/test_base.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/test_base.py)<br>[tests/unit/tools/test_chatwork.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/test_chatwork.py)<br>[tests/unit/tools/test_diffusers_local_backend.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/test_diffusers_local_backend.py)<br>[tests/unit/tools/test_fal_kontext.py](../../../../sources/xuiltul__animaworks/tests/unit/tools/test_fal_kontext.py) |
| mcp | 4 | [tests/unit/core/test_agent_sdk_mcp.py](../../../../sources/xuiltul__animaworks/tests/unit/core/test_agent_sdk_mcp.py)<br>[tests/unit/core/test_mcp_server.py](../../../../sources/xuiltul__animaworks/tests/unit/core/test_mcp_server.py)<br>[core/mcp/__init__.py](../../../../sources/xuiltul__animaworks/core/mcp/__init__.py)<br>[core/mcp/server.py](../../../../sources/xuiltul__animaworks/core/mcp/server.py) |
| retrieval | 781 | [tests/unit/test_ipc_chunk.py](../../../../sources/xuiltul__animaworks/tests/unit/test_ipc_chunk.py)<br>[tests/unit/test_memory_lazy_init.py](../../../../sources/xuiltul__animaworks/tests/unit/test_memory_lazy_init.py)<br>[tests/unit/test_rag_singleton_cuda_fallback.py](../../../../sources/xuiltul__animaworks/tests/unit/test_rag_singleton_cuda_fallback.py)<br>[tests/unit/test_rag_singleton.py](../../../../sources/xuiltul__animaworks/tests/unit/test_rag_singleton.py)<br>[tests/unit/test_security_memory_rag_trust.py](../../../../sources/xuiltul__animaworks/tests/unit/test_security_memory_rag_trust.py)<br>[tests/unit/test_skill_index_integration_gaps.py](../../../../sources/xuiltul__animaworks/tests/unit/test_skill_index_integration_gaps.py)<br>[tests/unit/test_skills_index.py](../../../../sources/xuiltul__animaworks/tests/unit/test_skills_index.py)<br>[tests/unit/tooling/test_action_memory_gate.py](../../../../sources/xuiltul__animaworks/tests/unit/tooling/test_action_memory_gate.py) |
| spec | 286 | [tests/test_skill_creator_spec_fixes.py](../../../../sources/xuiltul__animaworks/tests/test_skill_creator_spec_fixes.py)<br>[tests/unit/frontend/test_responsive_design.py](../../../../sources/xuiltul__animaworks/tests/unit/frontend/test_responsive_design.py)<br>[tests/unit/core/test_design_fixes.py](../../../../sources/xuiltul__animaworks/tests/unit/core/test_design_fixes.py)<br>[tests/unit/core/memory/test_activity_spec_compliance.py](../../../../sources/xuiltul__animaworks/tests/unit/core/memory/test_activity_spec_compliance.py)<br>[tests/e2e/core/test_spec_compliance_e2e.py](../../../../sources/xuiltul__animaworks/tests/e2e/core/test_spec_compliance_e2e.py)<br>[templates/ko/prompts/character_design_guide.md](../../../../sources/xuiltul__animaworks/templates/ko/prompts/character_design_guide.md)<br>[templates/ko/common_knowledge/team-design/guide.md](../../../../sources/xuiltul__animaworks/templates/ko/common_knowledge/team-design/guide.md)<br>[templates/ko/common_knowledge/team-design/org-chart-template.md](../../../../sources/xuiltul__animaworks/templates/ko/common_knowledge/team-design/org-chart-template.md) |
| eval | 999 | [tests/__init__.py](../../../../sources/xuiltul__animaworks/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/xuiltul__animaworks/tests/conftest.py)<br>[tests/test_anima_rename.py](../../../../sources/xuiltul__animaworks/tests/test_anima_rename.py)<br>[tests/test_housekeeping.py](../../../../sources/xuiltul__animaworks/tests/test_housekeeping.py)<br>[tests/test_llm_api_retry.py](../../../../sources/xuiltul__animaworks/tests/test_llm_api_retry.py)<br>[tests/test_outbound_rate_limiting.py](../../../../sources/xuiltul__animaworks/tests/test_outbound_rate_limiting.py)<br>[tests/test_skill_creator_spec_fixes.py](../../../../sources/xuiltul__animaworks/tests/test_skill_creator_spec_fixes.py)<br>[tests/unit/__init__.py](../../../../sources/xuiltul__animaworks/tests/unit/__init__.py) |
| security | 58 | [tests/unit/test_a1_output_guard.py](../../../../sources/xuiltul__animaworks/tests/unit/test_a1_output_guard.py)<br>[tests/unit/test_audit_org.py](../../../../sources/xuiltul__animaworks/tests/unit/test_audit_org.py)<br>[tests/unit/test_audit_subordinate.py](../../../../sources/xuiltul__animaworks/tests/unit/test_audit_subordinate.py)<br>[tests/unit/test_prompt_size_guard.py](../../../../sources/xuiltul__animaworks/tests/unit/test_prompt_size_guard.py)<br>[tests/unit/test_runner_heartbeat_guard.py](../../../../sources/xuiltul__animaworks/tests/unit/test_runner_heartbeat_guard.py)<br>[tests/unit/test_security_memory_rag_trust.py](../../../../sources/xuiltul__animaworks/tests/unit/test_security_memory_rag_trust.py)<br>[tests/unit/test_skill_activation_policy.py](../../../../sources/xuiltul__animaworks/tests/unit/test_skill_activation_policy.py)<br>[tests/unit/test_skills_guard.py](../../../../sources/xuiltul__animaworks/tests/unit/test_skills_guard.py) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/xuiltul__animaworks/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/xuiltul__animaworks/.github/workflows/publish.yml) |
| container | 9 | [docker-compose.neo4j.yml](../../../../sources/xuiltul__animaworks/docker-compose.neo4j.yml)<br>[docker-compose.yml](../../../../sources/xuiltul__animaworks/docker-compose.yml)<br>[Dockerfile](../../../../sources/xuiltul__animaworks/Dockerfile)<br>[swe/docker-compose.yml](../../../../sources/xuiltul__animaworks/swe/docker-compose.yml)<br>[swe/Dockerfile](../../../../sources/xuiltul__animaworks/swe/Dockerfile)<br>[deploy/animaworks.service](../../../../sources/xuiltul__animaworks/deploy/animaworks.service)<br>[demo/docker-compose.dev.yml](../../../../sources/xuiltul__animaworks/demo/docker-compose.dev.yml)<br>[demo/docker-compose.yml](../../../../sources/xuiltul__animaworks/demo/docker-compose.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 72 | [README_ja.md](../../../../sources/xuiltul__animaworks/README_ja.md)<br>[README_ko.md](../../../../sources/xuiltul__animaworks/README_ko.md)<br>[README_zh.md](../../../../sources/xuiltul__animaworks/README_zh.md)<br>[README.md](../../../../sources/xuiltul__animaworks/README.md)<br>[tests/integration/README.md](../../../../sources/xuiltul__animaworks/tests/integration/README.md)<br>[tests/evaluation/README.md](../../../../sources/xuiltul__animaworks/tests/evaluation/README.md)<br>[swe/README.md](../../../../sources/xuiltul__animaworks/swe/README.md)<br>[docs/api-reference.ja.md](../../../../sources/xuiltul__animaworks/docs/api-reference.ja.md) |
| config | 1 | [pyproject.toml](../../../../sources/xuiltul__animaworks/pyproject.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 999 | [tests/__init__.py](../../../../sources/xuiltul__animaworks/tests/__init__.py)<br>[tests/conftest.py](../../../../sources/xuiltul__animaworks/tests/conftest.py)<br>[tests/test_anima_rename.py](../../../../sources/xuiltul__animaworks/tests/test_anima_rename.py)<br>[tests/test_housekeeping.py](../../../../sources/xuiltul__animaworks/tests/test_housekeeping.py)<br>[tests/test_llm_api_retry.py](../../../../sources/xuiltul__animaworks/tests/test_llm_api_retry.py)<br>[tests/test_outbound_rate_limiting.py](../../../../sources/xuiltul__animaworks/tests/test_outbound_rate_limiting.py) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/xuiltul__animaworks/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/xuiltul__animaworks/.github/workflows/publish.yml) |
| 컨테이너/배포 | 9 | [docker-compose.neo4j.yml](../../../../sources/xuiltul__animaworks/docker-compose.neo4j.yml)<br>[docker-compose.yml](../../../../sources/xuiltul__animaworks/docker-compose.yml)<br>[Dockerfile](../../../../sources/xuiltul__animaworks/Dockerfile)<br>[swe/docker-compose.yml](../../../../sources/xuiltul__animaworks/swe/docker-compose.yml)<br>[swe/Dockerfile](../../../../sources/xuiltul__animaworks/swe/Dockerfile)<br>[deploy/animaworks.service](../../../../sources/xuiltul__animaworks/deploy/animaworks.service) |
| 보안/정책 | 58 | [tests/unit/test_a1_output_guard.py](../../../../sources/xuiltul__animaworks/tests/unit/test_a1_output_guard.py)<br>[tests/unit/test_audit_org.py](../../../../sources/xuiltul__animaworks/tests/unit/test_audit_org.py)<br>[tests/unit/test_audit_subordinate.py](../../../../sources/xuiltul__animaworks/tests/unit/test_audit_subordinate.py)<br>[tests/unit/test_prompt_size_guard.py](../../../../sources/xuiltul__animaworks/tests/unit/test_prompt_size_guard.py)<br>[tests/unit/test_runner_heartbeat_guard.py](../../../../sources/xuiltul__animaworks/tests/unit/test_runner_heartbeat_guard.py)<br>[tests/unit/test_security_memory_rag_trust.py](../../../../sources/xuiltul__animaworks/tests/unit/test_security_memory_rag_trust.py) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/unit/test_ipc_chunk.py`, `tests/unit/test_memory_lazy_init.py`, `tests/unit/test_rag_singleton_cuda_fallback.py`.
2. entrypoint를 따라 실행 흐름 확인: `main.py`, `core/mcp/server.py`, `core/i18n/strings/server.py`.
3. agent/tool runtime 매핑: `tests/unit/tools/__init__.py`, `tests/unit/tools/test_anima_icon_url.py`, `tests/unit/tools/test_asset_optimization.py`.
4. retrieval/memory/indexing 확인: `tests/unit/test_ipc_chunk.py`, `tests/unit/test_memory_lazy_init.py`, `tests/unit/test_rag_singleton_cuda_fallback.py`.
5. test/eval 파일로 동작 검증: `tests/__init__.py`, `tests/conftest.py`, `tests/test_anima_rename.py`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Organization as Code for autonomous AI agents. Brain inspired memory that grows, consolidates, and forgets. Multi model . 핵심 구조 신호는 Python, pyproject.toml, Dockerfile, docker-compose.yml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
