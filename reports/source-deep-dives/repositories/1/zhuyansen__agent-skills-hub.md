# zhuyansen/agent-skills-hub 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Discover and compare open-source Agent Skills, tools & MCP servers — with quality scoring, trending analysis, and automated GitHub sync

## 요약

- 조사 단위: `sources/zhuyansen__agent-skills-hub` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 311 files, 51 directories, depth score 117, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=CONTEXT.md, memory/daily-report-archive.md, frontend/src/types/skill.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | zhuyansen/agent-skills-hub |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 296 |
| Forks | 30 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/zhuyansen__agent-skills-hub](../../../../sources/zhuyansen__agent-skills-hub) |
| 기존 보고서 | [reports/global-trending/repositories/zhuyansen__agent-skills-hub.md](../../../global-trending/repositories/zhuyansen__agent-skills-hub.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 311 / 51 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .agents, .claude, .github, backend, docs, frontend, memory, ops, supabase |
| 상위 확장자 | .tsx: 91, .py: 45, .md: 29, .ts: 28, .png: 22, .sql: 18, .mjs: 12, .sh: 12, .html: 11, .json: 10, (none): 8, .xml: 5 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 6 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| frontend | top-level component | 1 |
| memory | top-level component | 1 |
| ops | top-level component | 1 |
| supabase | top-level component | 1 |


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
| agentRuntime | [CONTEXT.md](../../../../sources/zhuyansen__agent-skills-hub/CONTEXT.md) | agentRuntime signal |
| agentRuntime | [memory/daily-report-archive.md](../../../../sources/zhuyansen__agent-skills-hub/memory/daily-report-archive.md) | agentRuntime signal |
| agentRuntime | [frontend/src/types/skill.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/types/skill.ts) | agentRuntime signal |
| agentRuntime | [frontend/src/hooks/useCache.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/hooks/useCache.ts) | agentRuntime signal |
| entrypoints | [frontend/src/App.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/App.tsx) | entrypoints signal |
| entrypoints | [frontend/src/index.css](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/index.css) | entrypoints signal |
| entrypoints | [frontend/src/main.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/main.tsx) | entrypoints signal |
| entrypoints | [backend/app/main.py](../../../../sources/zhuyansen__agent-skills-hub/backend/app/main.py) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/zhuyansen__agent-skills-hub/CLAUDE.md) | instruction signal |
| config | [frontend/package.json](../../../../sources/zhuyansen__agent-skills-hub/frontend/package.json) | config signal |
| config | [frontend/tsconfig.json](../../../../sources/zhuyansen__agent-skills-hub/frontend/tsconfig.json) | config signal |
| config | [backend/requirements.txt](../../../../sources/zhuyansen__agent-skills-hub/backend/requirements.txt) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 4 | [frontend/src/App.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/App.tsx)<br>[frontend/src/index.css](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/index.css)<br>[frontend/src/main.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/main.tsx)<br>[backend/app/main.py](../../../../sources/zhuyansen__agent-skills-hub/backend/app/main.py) |
| agentRuntime | 22 | [CONTEXT.md](../../../../sources/zhuyansen__agent-skills-hub/CONTEXT.md)<br>[memory/daily-report-archive.md](../../../../sources/zhuyansen__agent-skills-hub/memory/daily-report-archive.md)<br>[frontend/src/types/skill.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/types/skill.ts)<br>[frontend/src/hooks/useCache.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/hooks/useCache.ts)<br>[frontend/src/hooks/useCachedQuery.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/hooks/useCachedQuery.ts)<br>[frontend/src/hooks/useCompare.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/hooks/useCompare.ts)<br>[frontend/src/hooks/useFavorites.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/hooks/useFavorites.ts)<br>[frontend/src/hooks/useLandingData.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/hooks/useLandingData.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 15 | [supabase/migrations/016_author_name_trgm_index.sql](../../../../sources/zhuyansen__agent-skills-hub/supabase/migrations/016_author_name_trgm_index.sql)<br>[memory/daily-report-archive.md](../../../../sources/zhuyansen__agent-skills-hub/memory/daily-report-archive.md)<br>[frontend/index.html](../../../../sources/zhuyansen__agent-skills-hub/frontend/index.html)<br>[frontend/src/index.css](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/index.css)<br>[frontend/src/components/charts/index.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/index.ts)<br>[frontend/scripts/generate-search-index.mjs](../../../../sources/zhuyansen__agent-skills-hub/frontend/scripts/generate-search-index.mjs)<br>[frontend/public/terms/index.html](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/terms/index.html)<br>[frontend/public/privacy/index.html](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/privacy/index.html) |
| spec | 4 | [frontend/content/book/A-skill-design-cheatsheet.md](../../../../sources/zhuyansen__agent-skills-hub/frontend/content/book/A-skill-design-cheatsheet.md)<br>[docs/skillspector-integration-spec.md](../../../../sources/zhuyansen__agent-skills-hub/docs/skillspector-integration-spec.md)<br>[docs/system-architecture.md](../../../../sources/zhuyansen__agent-skills-hub/docs/system-architecture.md)<br>[backend/requirements.txt](../../../../sources/zhuyansen__agent-skills-hub/backend/requirements.txt) |
| eval | 9 | [ops/content-quality-gate.py](../../../../sources/zhuyansen__agent-skills-hub/ops/content-quality-gate.py)<br>[frontend/public/book/assets/ch04-fig1-size-quality.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch04-fig1-size-quality.png)<br>[frontend/content/book/assets/ch04-fig1-size-quality.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/content/book/assets/ch04-fig1-size-quality.png)<br>[docs/skillspector-integration-spec.md](../../../../sources/zhuyansen__agent-skills-hub/docs/skillspector-integration-spec.md)<br>[backend/test_newsletter.py](../../../../sources/zhuyansen__agent-skills-hub/backend/test_newsletter.py)<br>[backend/tests/__init__.py](../../../../sources/zhuyansen__agent-skills-hub/backend/tests/__init__.py)<br>[backend/tests/test_data_cleaner.py](../../../../sources/zhuyansen__agent-skills-hub/backend/tests/test_data_cleaner.py)<br>[backend/tests/test_scorer.py](../../../../sources/zhuyansen__agent-skills-hub/backend/tests/test_scorer.py) |
| security | 3 | [backend/app/services/llm_security_analyzer.py](../../../../sources/zhuyansen__agent-skills-hub/backend/app/services/llm_security_analyzer.py)<br>[backend/app/services/security_scanner.py](../../../../sources/zhuyansen__agent-skills-hub/backend/app/services/security_scanner.py)<br>[.claude/hooks/secret-scan.sh](../../../../sources/zhuyansen__agent-skills-hub/.claude/hooks/secret-scan.sh) |
| ci | 4 | [.github/workflows/daily-report.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/daily-report.yml)<br>[.github/workflows/deploy.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/deploy.yml)<br>[.github/workflows/newsletter.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/newsletter.yml)<br>[.github/workflows/sync.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/sync.yml) |
| container | 5 | [frontend/src/components/charts/CategoryPieChart.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/CategoryPieChart.tsx)<br>[frontend/src/components/charts/index.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/index.ts)<br>[frontend/src/components/charts/LanguageBarChart.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/LanguageBarChart.tsx)<br>[frontend/src/components/charts/StarTrendChart.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/StarTrendChart.tsx)<br>[backend/Dockerfile](../../../../sources/zhuyansen__agent-skills-hub/backend/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/zhuyansen__agent-skills-hub/CLAUDE.md) |
| docs | 45 | [README.md](../../../../sources/zhuyansen__agent-skills-hub/README.md)<br>[frontend/README.md](../../../../sources/zhuyansen__agent-skills-hub/frontend/README.md)<br>[frontend/public/book/assets/ch03-fig1-long-tail.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch03-fig1-long-tail.png)<br>[frontend/public/book/assets/ch03-fig2-supply-surge.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch03-fig2-supply-surge.png)<br>[frontend/public/book/assets/ch03-fig3-gini-compare.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch03-fig3-gini-compare.png)<br>[frontend/public/book/assets/ch03-fig4-lifecycle.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch03-fig4-lifecycle.png)<br>[frontend/public/book/assets/ch04-fig1-size-quality.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch04-fig1-size-quality.png)<br>[frontend/public/book/assets/ch05-fig1-survival-curve.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch05-fig1-survival-curve.png) |
| config | 3 | [frontend/package.json](../../../../sources/zhuyansen__agent-skills-hub/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/zhuyansen__agent-skills-hub/frontend/tsconfig.json)<br>[backend/requirements.txt](../../../../sources/zhuyansen__agent-skills-hub/backend/requirements.txt) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 9 | [ops/content-quality-gate.py](../../../../sources/zhuyansen__agent-skills-hub/ops/content-quality-gate.py)<br>[frontend/public/book/assets/ch04-fig1-size-quality.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch04-fig1-size-quality.png)<br>[frontend/content/book/assets/ch04-fig1-size-quality.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/content/book/assets/ch04-fig1-size-quality.png)<br>[docs/skillspector-integration-spec.md](../../../../sources/zhuyansen__agent-skills-hub/docs/skillspector-integration-spec.md)<br>[backend/test_newsletter.py](../../../../sources/zhuyansen__agent-skills-hub/backend/test_newsletter.py)<br>[backend/tests/__init__.py](../../../../sources/zhuyansen__agent-skills-hub/backend/tests/__init__.py) |
| CI workflow | 4 | [.github/workflows/daily-report.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/daily-report.yml)<br>[.github/workflows/deploy.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/deploy.yml)<br>[.github/workflows/newsletter.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/newsletter.yml)<br>[.github/workflows/sync.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/sync.yml) |
| 컨테이너/배포 | 5 | [frontend/src/components/charts/CategoryPieChart.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/CategoryPieChart.tsx)<br>[frontend/src/components/charts/index.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/index.ts)<br>[frontend/src/components/charts/LanguageBarChart.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/LanguageBarChart.tsx)<br>[frontend/src/components/charts/StarTrendChart.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/StarTrendChart.tsx)<br>[backend/Dockerfile](../../../../sources/zhuyansen__agent-skills-hub/backend/Dockerfile) |
| 보안/정책 | 3 | [backend/app/services/llm_security_analyzer.py](../../../../sources/zhuyansen__agent-skills-hub/backend/app/services/llm_security_analyzer.py)<br>[backend/app/services/security_scanner.py](../../../../sources/zhuyansen__agent-skills-hub/backend/app/services/security_scanner.py)<br>[.claude/hooks/secret-scan.sh](../../../../sources/zhuyansen__agent-skills-hub/.claude/hooks/secret-scan.sh) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/zhuyansen__agent-skills-hub/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `CONTEXT.md`, `memory/daily-report-archive.md`, `frontend/src/types/skill.ts`.
2. entrypoint를 따라 실행 흐름 확인: `frontend/src/App.tsx`, `frontend/src/index.css`, `frontend/src/main.tsx`.
3. agent/tool runtime 매핑: `CONTEXT.md`, `memory/daily-report-archive.md`, `frontend/src/types/skill.ts`.
4. retrieval/memory/indexing 확인: `supabase/migrations/016_author_name_trgm_index.sql`, `memory/daily-report-archive.md`, `frontend/index.html`.
5. test/eval 파일로 동작 검증: `ops/content-quality-gate.py`, `frontend/public/book/assets/ch04-fig1-size-quality.png`, `frontend/content/book/assets/ch04-fig1-size-quality.png`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Discover and compare open source Agent Skills, tools & MCP servers — with quality scoring, trending analysis, and automa. 핵심 구조 신호는 TypeScript, README.md, CLAUDE.md, ci, docs, agent-instructions이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
