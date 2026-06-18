# MadsLorentzen/ai-job-search 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

AI-powered job application framework built on Claude Code. Fork it, fill in your profile, and let Claude evaluate jobs, tailor CVs, write cover letters, and prepare you for interviews.

## 요약

- 조사 단위: `sources/MadsLorentzen__ai-job-search` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 83 files, 40 directories, depth score 76, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, agent/tool runtime, eval/test harness 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=tools/convert_salary_excel.py, tools/README_SALARY_TOOL.md, .claude/skills/upskill/SKILL.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | MadsLorentzen/ai-job-search |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 3433 |
| Forks | 1521 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/MadsLorentzen__ai-job-search](../../../../sources/MadsLorentzen__ai-job-search) |
| 기존 보고서 | [reports/global-trending/repositories/MadsLorentzen__ai-job-search.md](../../../global-trending/repositories/MadsLorentzen__ai-job-search.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 83 / 40 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .agents, .claude, cover_letters, cv, documents, job_scraper, tools, upskill |
| 상위 확장자 | .md: 31, .ts: 12, .ttf: 10, .otf: 9, (none): 9, .json: 5, .cls: 2, .py: 2, .csv: 1, .gif: 1, .tex: 1 |
| 소스 패턴 | cli-first, agent/tool runtime, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| cover_letters | top-level component | 1 |
| cv | top-level component | 1 |
| documents | documentation surface | 1 |
| job_scraper | top-level component | 1 |
| tools | top-level component | 1 |
| upskill | top-level component | 1 |


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
| agentRuntime | [tools/convert_salary_excel.py](../../../../sources/MadsLorentzen__ai-job-search/tools/convert_salary_excel.py) | agentRuntime signal |
| agentRuntime | [tools/README_SALARY_TOOL.md](../../../../sources/MadsLorentzen__ai-job-search/tools/README_SALARY_TOOL.md) | agentRuntime signal |
| agentRuntime | [.claude/skills/upskill/SKILL.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/upskill/SKILL.md) | agentRuntime signal |
| agentRuntime | [.claude/skills/job-scraper/search-queries.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-scraper/search-queries.md) | agentRuntime signal |
| entrypoints | [.agents/skills/jobnet-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobnet-search/cli/src/cli.ts) | entrypoints signal |
| entrypoints | [.agents/skills/jobindex-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobindex-search/cli/src/cli.ts) | entrypoints signal |
| entrypoints | [.agents/skills/jobdanmark-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobdanmark-search/cli/src/cli.ts) | entrypoints signal |
| entrypoints | [.agents/skills/jobbank-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobbank-search/cli/src/cli.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/MadsLorentzen__ai-job-search/CLAUDE.md) | instruction signal |
| config | [.agents/skills/jobnet-search/cli/package.json](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobnet-search/cli/package.json) | config signal |
| config | [.agents/skills/jobindex-search/cli/package.json](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobindex-search/cli/package.json) | config signal |
| config | [.agents/skills/jobdanmark-search/cli/package.json](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobdanmark-search/cli/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [.agents/skills/jobnet-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobnet-search/cli/src/cli.ts)<br>[.agents/skills/jobindex-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobindex-search/cli/src/cli.ts)<br>[.agents/skills/jobdanmark-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobdanmark-search/cli/src/cli.ts)<br>[.agents/skills/jobbank-search/cli/src/cli.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobbank-search/cli/src/cli.ts) |
| agentRuntime | 40 | [tools/convert_salary_excel.py](../../../../sources/MadsLorentzen__ai-job-search/tools/convert_salary_excel.py)<br>[tools/README_SALARY_TOOL.md](../../../../sources/MadsLorentzen__ai-job-search/tools/README_SALARY_TOOL.md)<br>[.claude/skills/upskill/SKILL.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/upskill/SKILL.md)<br>[.claude/skills/job-scraper/search-queries.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-scraper/search-queries.md)<br>[.claude/skills/job-scraper/SKILL.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-scraper/SKILL.md)<br>[.claude/skills/job-application-assistant/01-candidate-profile.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-application-assistant/01-candidate-profile.md)<br>[.claude/skills/job-application-assistant/02-behavioral-profile.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-application-assistant/02-behavioral-profile.md)<br>[.claude/skills/job-application-assistant/03-writing-style.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-application-assistant/03-writing-style.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 5 | [.claude/skills/job-application-assistant/04-job-evaluation.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-application-assistant/04-job-evaluation.md)<br>[.agents/skills/jobnet-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobnet-search/cli/tests/helpers.ts)<br>[.agents/skills/jobindex-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobindex-search/cli/tests/helpers.ts)<br>[.agents/skills/jobdanmark-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobdanmark-search/cli/tests/helpers.ts)<br>[.agents/skills/jobbank-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobbank-search/cli/tests/helpers.ts) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/MadsLorentzen__ai-job-search/CLAUDE.md) |
| docs | 7 | [README.md](../../../../sources/MadsLorentzen__ai-job-search/README.md)<br>[tools/README_SALARY_TOOL.md](../../../../sources/MadsLorentzen__ai-job-search/tools/README_SALARY_TOOL.md)<br>[documents/README.md](../../../../sources/MadsLorentzen__ai-job-search/documents/README.md)<br>[.agents/skills/jobnet-search/cli/README.md](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobnet-search/cli/README.md)<br>[.agents/skills/jobindex-search/cli/README.md](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobindex-search/cli/README.md)<br>[.agents/skills/jobdanmark-search/cli/README.md](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobdanmark-search/cli/README.md)<br>[.agents/skills/jobbank-search/cli/README.md](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobbank-search/cli/README.md) |
| config | 4 | [.agents/skills/jobnet-search/cli/package.json](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobnet-search/cli/package.json)<br>[.agents/skills/jobindex-search/cli/package.json](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobindex-search/cli/package.json)<br>[.agents/skills/jobdanmark-search/cli/package.json](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobdanmark-search/cli/package.json)<br>[.agents/skills/jobbank-search/cli/package.json](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobbank-search/cli/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 5 | [.claude/skills/job-application-assistant/04-job-evaluation.md](../../../../sources/MadsLorentzen__ai-job-search/.claude/skills/job-application-assistant/04-job-evaluation.md)<br>[.agents/skills/jobnet-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobnet-search/cli/tests/helpers.ts)<br>[.agents/skills/jobindex-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobindex-search/cli/tests/helpers.ts)<br>[.agents/skills/jobdanmark-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobdanmark-search/cli/tests/helpers.ts)<br>[.agents/skills/jobbank-search/cli/tests/helpers.ts](../../../../sources/MadsLorentzen__ai-job-search/.agents/skills/jobbank-search/cli/tests/helpers.ts) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/MadsLorentzen__ai-job-search/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `tools/convert_salary_excel.py`, `tools/README_SALARY_TOOL.md`, `.claude/skills/upskill/SKILL.md`.
2. entrypoint를 따라 실행 흐름 확인: `.agents/skills/jobnet-search/cli/src/cli.ts`, `.agents/skills/jobindex-search/cli/src/cli.ts`, `.agents/skills/jobdanmark-search/cli/src/cli.ts`.
3. agent/tool runtime 매핑: `tools/convert_salary_excel.py`, `tools/README_SALARY_TOOL.md`, `.claude/skills/upskill/SKILL.md`.
4. test/eval 파일로 동작 검증: `.claude/skills/job-application-assistant/04-job-evaluation.md`, `.agents/skills/jobnet-search/cli/tests/helpers.ts`, `.agents/skills/jobindex-search/cli/tests/helpers.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 AI powered job application framework built on Claude Code. Fork it, fill in your profile, and let Claude evaluate jobs, . 핵심 구조 신호는 TypeScript, README.md, CLAUDE.md, LICENSE, docs, agent-instructions이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
