# lowtidebuild/data-protection-agent 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Unified privacy research agent for EU GDPR · Korea PIPA · California (CCPA-as-amended-by-CPRA). 2,195 indexed authorities · 30+ citation audit checks · 234 tests · DOCX/HTML legal-opinion deliverables. Built for Claude Code; part of the KP Legal Orchestrator.

## 요약

- 조사 단위: `sources/lowtidebuild__data-protection-agent` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 2,975 files, 155 directories, depth score 103, key references 11개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, docs/agent-protocol.md, .claude/skills/trust-boundary/SKILL.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 11개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | lowtidebuild/data-protection-agent |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Python |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/lowtidebuild__data-protection-agent](../../../../sources/lowtidebuild__data-protection-agent) |
| 기존 보고서 | [reports/korea-trending/repositories/lowtidebuild__data-protection-agent.md](../../../korea-trending/repositories/lowtidebuild__data-protection-agent.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 2975 / 155 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .claude, .githooks, .github, config, cross_jurisdiction_auditor, docs, index, kb, knowledge, scripts, sources, templates, tests, unified_auditor |
| 상위 확장자 | .md: 2593, .json: 175, .py: 72, .txt: 47, .pdf: 43, .html: 31, (none): 13, .yml: 1 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 19 |
| docs | documentation surface | 13 |
| .github | ci surface | 1 |
| config | top-level component | 1 |
| cross_jurisdiction_auditor | top-level component | 1 |
| index | top-level component | 1 |
| kb | top-level component | 1 |
| knowledge | top-level component | 1 |
| scripts | top-level component | 1 |
| sources | top-level component | 1 |
| templates | top-level component | 1 |
| unified_auditor | top-level component | 1 |


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
| agentRuntime | [AGENTS.md](../../../../sources/lowtidebuild__data-protection-agent/AGENTS.md) | agentRuntime signal |
| agentRuntime | [docs/agent-protocol.md](../../../../sources/lowtidebuild__data-protection-agent/docs/agent-protocol.md) | agentRuntime signal |
| agentRuntime | [.claude/skills/trust-boundary/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/trust-boundary/SKILL.md) | agentRuntime signal |
| agentRuntime | [.claude/skills/result-memo-composition/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/result-memo-composition/SKILL.md) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/lowtidebuild__data-protection-agent/CLAUDE.md) | instruction signal |
| instruction | [sources/us-ca/CLAUDE.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/CLAUDE.md) | instruction signal |
| config | [requirements.txt](../../../../sources/lowtidebuild__data-protection-agent/requirements.txt) | config signal |
| config | [sources/us-ca/requirements.txt](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/requirements.txt) | config signal |
| ci | [.github/workflows/ci.yml](../../../../sources/lowtidebuild__data-protection-agent/.github/workflows/ci.yml) | ci support |
| eval | [tests/test_coverage_report_all.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_all.py) | eval support |
| eval | [tests/test_coverage_report_eu.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_eu.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 13 | [AGENTS.md](../../../../sources/lowtidebuild__data-protection-agent/AGENTS.md)<br>[docs/agent-protocol.md](../../../../sources/lowtidebuild__data-protection-agent/docs/agent-protocol.md)<br>[.claude/skills/trust-boundary/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/trust-boundary/SKILL.md)<br>[.claude/skills/result-memo-composition/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/result-memo-composition/SKILL.md)<br>[.claude/skills/quality-check/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/quality-check/SKILL.md)<br>[.claude/skills/output-mode-composition/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/output-mode-composition/SKILL.md)<br>[.claude/skills/legal-writing-formatter/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/legal-writing-formatter/SKILL.md)<br>[.claude/skills/kb-retrieval/SKILL.md](../../../../sources/lowtidebuild__data-protection-agent/.claude/skills/kb-retrieval/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 51 | [sources/us-ca/tests/test_california_topic_index.py](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/tests/test_california_topic_index.py)<br>[sources/us-ca/index/ca-adjacent-statute-index.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/index/ca-adjacent-statute-index.json)<br>[sources/us-ca/index/ca-case-index.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/index/ca-case-index.json)<br>[sources/us-ca/index/ca-citation-map.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/index/ca-citation-map.json)<br>[sources/us-ca/index/ca-enforcement-index.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/index/ca-enforcement-index.json)<br>[sources/us-ca/index/ca-guidance-index.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/index/ca-guidance-index.json)<br>[sources/us-ca/index/ca-regulation-index.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/index/ca-regulation-index.json)<br>[sources/us-ca/index/ca-statute-index.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/index/ca-statute-index.json) |
| spec | 20 | [requirements.txt](../../../../sources/lowtidebuild__data-protection-agent/requirements.txt)<br>[sources/us-ca/requirements.txt](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/requirements.txt)<br>[sources/us-ca/raw/official/leginfo/ca-age-appropriate-design-code.html](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/raw/official/leginfo/ca-age-appropriate-design-code.html)<br>[sources/us-ca/raw/official/leginfo/ca-age-appropriate-design-code.html.meta.json](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/raw/official/leginfo/ca-age-appropriate-design-code.html.meta.json)<br>[sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.28.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.28.md)<br>[sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.29.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.29.md)<br>[sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.30.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.30.md)<br>[sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.31.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-a/ca-age-appropriate-design-code/civ-1798.99.31.md) |
| eval | 39 | [tests/test_coverage_report_all.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_all.py)<br>[tests/test_coverage_report_eu.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_eu.py)<br>[tests/test_coverage_report_kr.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_kr.py)<br>[tests/test_coverage_report.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report.py)<br>[tests/test_cross_jurisdiction_audit.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_cross_jurisdiction_audit.py)<br>[tests/test_e2e_agent_pipeline.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_e2e_agent_pipeline.py)<br>[tests/test_golden_set_evaluation.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_golden_set_evaluation.py)<br>[tests/test_integration_full.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_integration_full.py) |
| security | 14 | [tests/test_cross_jurisdiction_audit.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_cross_jurisdiction_audit.py)<br>[tests/test_unified_audit.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_unified_audit.py)<br>[sources/us-ca/tests/test_california_citation_audit.py](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/tests/test_california_citation_audit.py)<br>[sources/us-ca/tests/fixtures/audit_bad_answer.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/tests/fixtures/audit_bad_answer.md)<br>[sources/us-ca/scripts/audit-california-citations.py](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/scripts/audit-california-citations.py)<br>[sources/kr-pipa/tests/test_korea_citation_audit.py](../../../../sources/lowtidebuild__data-protection-agent/sources/kr-pipa/tests/test_korea_citation_audit.py)<br>[sources/kr-pipa/scripts/audit-korea-citations.py](../../../../sources/lowtidebuild__data-protection-agent/sources/kr-pipa/scripts/audit-korea-citations.py)<br>[sources/eu-gdpr/tests/test_europe_citation_audit.py](../../../../sources/lowtidebuild__data-protection-agent/sources/eu-gdpr/tests/test_europe_citation_audit.py) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/lowtidebuild__data-protection-agent/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 3 | [AGENTS.md](../../../../sources/lowtidebuild__data-protection-agent/AGENTS.md)<br>[CLAUDE.md](../../../../sources/lowtidebuild__data-protection-agent/CLAUDE.md)<br>[sources/us-ca/CLAUDE.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/CLAUDE.md) |
| docs | 22 | [README.ko.md](../../../../sources/lowtidebuild__data-protection-agent/README.ko.md)<br>[README.md](../../../../sources/lowtidebuild__data-protection-agent/README.md)<br>[sources/us-ca/README.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/README.md)<br>[sources/us-ca/library/grade-c/case-discovery/README.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-c/case-discovery/README.md)<br>[sources/us-ca/library/grade-b/case-materials/README.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-b/case-materials/README.md)<br>[sources/us-ca/library/grade-b/ca-rulemaking-reasons/README.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-b/ca-rulemaking-reasons/README.md)<br>[sources/us-ca/library/grade-b/ca-courts-unpublished-opinions/README.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/library/grade-b/ca-courts-unpublished-opinions/README.md)<br>[kb/us-ca/library/grade-c/case-discovery/README.md](../../../../sources/lowtidebuild__data-protection-agent/kb/us-ca/library/grade-c/case-discovery/README.md) |
| config | 2 | [requirements.txt](../../../../sources/lowtidebuild__data-protection-agent/requirements.txt)<br>[sources/us-ca/requirements.txt](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 39 | [tests/test_coverage_report_all.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_all.py)<br>[tests/test_coverage_report_eu.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_eu.py)<br>[tests/test_coverage_report_kr.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report_kr.py)<br>[tests/test_coverage_report.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_coverage_report.py)<br>[tests/test_cross_jurisdiction_audit.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_cross_jurisdiction_audit.py)<br>[tests/test_e2e_agent_pipeline.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_e2e_agent_pipeline.py) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/lowtidebuild__data-protection-agent/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 14 | [tests/test_cross_jurisdiction_audit.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_cross_jurisdiction_audit.py)<br>[tests/test_unified_audit.py](../../../../sources/lowtidebuild__data-protection-agent/tests/test_unified_audit.py)<br>[sources/us-ca/tests/test_california_citation_audit.py](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/tests/test_california_citation_audit.py)<br>[sources/us-ca/tests/fixtures/audit_bad_answer.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/tests/fixtures/audit_bad_answer.md)<br>[sources/us-ca/scripts/audit-california-citations.py](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/scripts/audit-california-citations.py)<br>[sources/kr-pipa/tests/test_korea_citation_audit.py](../../../../sources/lowtidebuild__data-protection-agent/sources/kr-pipa/tests/test_korea_citation_audit.py) |
| 에이전트 지시문 | 3 | [AGENTS.md](../../../../sources/lowtidebuild__data-protection-agent/AGENTS.md)<br>[CLAUDE.md](../../../../sources/lowtidebuild__data-protection-agent/CLAUDE.md)<br>[sources/us-ca/CLAUDE.md](../../../../sources/lowtidebuild__data-protection-agent/sources/us-ca/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `docs/agent-protocol.md`, `.claude/skills/trust-boundary/SKILL.md`.
2. agent/tool runtime 매핑: `AGENTS.md`, `docs/agent-protocol.md`, `.claude/skills/trust-boundary/SKILL.md`.
3. retrieval/memory/indexing 확인: `sources/us-ca/tests/test_california_topic_index.py`, `sources/us-ca/index/ca-adjacent-statute-index.json`, `sources/us-ca/index/ca-case-index.json`.
4. test/eval 파일로 동작 검증: `tests/test_coverage_report_all.py`, `tests/test_coverage_report_eu.py`, `tests/test_coverage_report_kr.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Unified privacy research agent for EU GDPR · Korea PIPA · California CCPA as amended by CPRA . 2,195 indexed authorities. 핵심 구조 신호는 Python, requirements.txt, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
