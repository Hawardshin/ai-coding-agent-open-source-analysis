# zubair-trabzada/geo-seo-claude 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

GEO-first SEO skill for Claude Code. Comprehensive AI search optimization for any website — citability scoring, AI crawler analysis, brand authority, schema markup, platform-specific optimization, and PDF reports. If you want learn how to sell this to real businesses, check out the skool community

## 요약

- 조사 단위: `sources/zubair-trabzada__geo-seo-claude` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 67 files, 28 directories, depth score 66, key references 6개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, spec/docs-driven, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=tests/agent-readiness-test-results.md, skills/geo-update/SKILL.md, skills/geo-technical/SKILL.md이고, 의존성 단서는 playwright, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 6개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | zubair-trabzada/geo-seo-claude |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 8195 |
| Forks | 1325 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/zubair-trabzada__geo-seo-claude](../../../../sources/zubair-trabzada__geo-seo-claude) |
| 기존 보고서 | [reports/global-trending/repositories/zubair-trabzada__geo-seo-claude.md](../../../global-trending/repositories/zubair-trabzada__geo-seo-claude.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 67 / 28 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | agents, assets, docs, examples, geo, schema, scripts, skills, templates, tests, white-label |
| 상위 확장자 | .md: 36, .json: 9, .py: 8, .html: 5, .sh: 3, (none): 2, .css: 1, .pdf: 1, .svg: 1, .txt: 1 |
| 소스 패턴 | agent/tool runtime, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 10 |
| tests | validation surface | 4 |
| agents | top-level component | 1 |
| assets | top-level component | 1 |
| examples | top-level component | 1 |
| examples/electron-srl.com-audit.json | examples workspace | 1 |
| examples/electron-srl.com-quick-audit.md | examples workspace | 1 |
| geo | top-level component | 1 |
| schema | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| templates | top-level component | 1 |
| white-label | top-level component | 1 |


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
| browserAutomation | playwright |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [tests/agent-readiness-test-results.md](../../../../sources/zubair-trabzada__geo-seo-claude/tests/agent-readiness-test-results.md) | agentRuntime signal |
| agentRuntime | [skills/geo-update/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-update/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/geo-technical/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-technical/SKILL.md) | agentRuntime signal |
| agentRuntime | [skills/geo-schema/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-schema/SKILL.md) | agentRuntime signal |
| config | [requirements.txt](../../../../sources/zubair-trabzada__geo-seo-claude/requirements.txt) | config signal |
| eval | [tests/test_fetch_page_ssr.py](../../../../sources/zubair-trabzada__geo-seo-claude/tests/test_fetch_page_ssr.py) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 23 | [tests/agent-readiness-test-results.md](../../../../sources/zubair-trabzada__geo-seo-claude/tests/agent-readiness-test-results.md)<br>[skills/geo-update/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-update/SKILL.md)<br>[skills/geo-technical/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-technical/SKILL.md)<br>[skills/geo-schema/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-schema/SKILL.md)<br>[skills/geo-report-pdf/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-report-pdf/SKILL.md)<br>[skills/geo-report/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-report/SKILL.md)<br>[skills/geo-prospect/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-prospect/SKILL.md)<br>[skills/geo-proposal/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-proposal/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 2 | [requirements.txt](../../../../sources/zubair-trabzada__geo-seo-claude/requirements.txt)<br>[docs/architecture.md](../../../../sources/zubair-trabzada__geo-seo-claude/docs/architecture.md) |
| eval | 2 | [tests/agent-readiness-test-results.md](../../../../sources/zubair-trabzada__geo-seo-claude/tests/agent-readiness-test-results.md)<br>[tests/test_fetch_page_ssr.py](../../../../sources/zubair-trabzada__geo-seo-claude/tests/test_fetch_page_ssr.py) |
| security | 3 | [skills/geo-audit/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-audit/SKILL.md)<br>[examples/electron-srl.com-audit.json](../../../../sources/zubair-trabzada__geo-seo-claude/examples/electron-srl.com-audit.json)<br>[examples/electron-srl.com-quick-audit.md](../../../../sources/zubair-trabzada__geo-seo-claude/examples/electron-srl.com-quick-audit.md) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 9 | [README.md](../../../../sources/zubair-trabzada__geo-seo-claude/README.md)<br>[white-label/README.md](../../../../sources/zubair-trabzada__geo-seo-claude/white-label/README.md)<br>[docs/architecture.md](../../../../sources/zubair-trabzada__geo-seo-claude/docs/architecture.md)<br>[docs/commands-reference.md](../../../../sources/zubair-trabzada__geo-seo-claude/docs/commands-reference.md)<br>[docs/faq.md](../../../../sources/zubair-trabzada__geo-seo-claude/docs/faq.md)<br>[docs/getting-started.md](../../../../sources/zubair-trabzada__geo-seo-claude/docs/getting-started.md)<br>[docs/README.md](../../../../sources/zubair-trabzada__geo-seo-claude/docs/README.md)<br>[docs/scoring-methodology.md](../../../../sources/zubair-trabzada__geo-seo-claude/docs/scoring-methodology.md) |
| config | 1 | [requirements.txt](../../../../sources/zubair-trabzada__geo-seo-claude/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2 | [tests/agent-readiness-test-results.md](../../../../sources/zubair-trabzada__geo-seo-claude/tests/agent-readiness-test-results.md)<br>[tests/test_fetch_page_ssr.py](../../../../sources/zubair-trabzada__geo-seo-claude/tests/test_fetch_page_ssr.py) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 3 | [skills/geo-audit/SKILL.md](../../../../sources/zubair-trabzada__geo-seo-claude/skills/geo-audit/SKILL.md)<br>[examples/electron-srl.com-audit.json](../../../../sources/zubair-trabzada__geo-seo-claude/examples/electron-srl.com-audit.json)<br>[examples/electron-srl.com-quick-audit.md](../../../../sources/zubair-trabzada__geo-seo-claude/examples/electron-srl.com-quick-audit.md) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `tests/agent-readiness-test-results.md`, `skills/geo-update/SKILL.md`, `skills/geo-technical/SKILL.md`.
2. agent/tool runtime 매핑: `tests/agent-readiness-test-results.md`, `skills/geo-update/SKILL.md`, `skills/geo-technical/SKILL.md`.
3. test/eval 파일로 동작 검증: `tests/agent-readiness-test-results.md`, `tests/test_fetch_page_ssr.py`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 GEO first SEO skill for Claude Code. Comprehensive AI search optimization for any website — citability scoring, AI crawl. 핵심 구조 신호는 Python, requirements.txt, README.md, LICENSE, playwright, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
