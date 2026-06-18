# taishi-i/awesome-ChatGPT-repositories 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

A curated list of open source GitHub repositories related to ChatGPT, the OpenAI API, and Codex. Searchable via Claude Code skills.

## 요약

- 조사 단위: `sources/taishi-i__awesome-ChatGPT-repositories` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 36 files, 12 directories, depth score 41, key references 3개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=plugins/awesome-chatgpt-search/skills/search/SKILL.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 3개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | taishi-i/awesome-ChatGPT-repositories |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Python |
| Stars | 3092 |
| Forks | 405 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/taishi-i__awesome-ChatGPT-repositories](../../../../sources/taishi-i__awesome-ChatGPT-repositories) |
| 기존 보고서 | [reports/global-trending/repositories/taishi-i__awesome-ChatGPT-repositories.md](../../../global-trending/repositories/taishi-i__awesome-ChatGPT-repositories.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 36 / 12 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude, .claude-plugin, .github, docs, plugins |
| 상위 확장자 | .json: 22, .md: 10, (none): 2, .py: 1, .yml: 1 |
| 소스 패턴 | agent/tool runtime |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 5 |
| .github | ci surface | 1 |
| plugins | top-level component | 1 |


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
| agentRuntime | [plugins/awesome-chatgpt-search/skills/search/SKILL.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/plugins/awesome-chatgpt-search/skills/search/SKILL.md) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/CLAUDE.md) | instruction signal |
| ci | [.github/workflows/jekyll-gh-pages.yml](../../../../sources/taishi-i__awesome-ChatGPT-repositories/.github/workflows/jekyll-gh-pages.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [plugins/awesome-chatgpt-search/skills/search/SKILL.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/plugins/awesome-chatgpt-search/skills/search/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/jekyll-gh-pages.yml](../../../../sources/taishi-i__awesome-ChatGPT-repositories/.github/workflows/jekyll-gh-pages.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/CLAUDE.md) |
| docs | 6 | [README.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/README.md)<br>[plugins/awesome-chatgpt-search/README.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/plugins/awesome-chatgpt-search/README.md)<br>[docs/README.en.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/docs/README.en.md)<br>[docs/README.ja.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/docs/README.ja.md)<br>[docs/README.zh-hans.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/docs/README.zh-hans.md)<br>[docs/README.zh-hant.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/docs/README.zh-hant.md) |
| config | 0 | 명확하지 않음 |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 1 | [.github/workflows/jekyll-gh-pages.yml](../../../../sources/taishi-i__awesome-ChatGPT-repositories/.github/workflows/jekyll-gh-pages.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/taishi-i__awesome-ChatGPT-repositories/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `plugins/awesome-chatgpt-search/skills/search/SKILL.md`, `CLAUDE.md`, `.github/workflows/jekyll-gh-pages.yml`.
2. agent/tool runtime 매핑: `plugins/awesome-chatgpt-search/skills/search/SKILL.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A curated list of open source GitHub repositories related to ChatGPT, the OpenAI API, and Codex. Searchable via Claude C. 핵심 구조 신호는 Python, README.md, CLAUDE.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
