# zhuyansen/agent-skills-hub Source Deep Dive

Generated: 2026-06-18T15:04:30.215Z

Discover and compare open-source Agent Skills, tools & MCP servers — with quality scoring, trending analysis, and automated GitHub sync

## 요약

- 조사 단위: `sources/zhuyansen__agent-skills-hub` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 311 files, 51 directories, depth score 123, key references 12개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=CONTEXT.md, memory/daily-report-archive.md, frontend/src/types/skill.ts이고, 의존성 단서는 dependency cue 약함, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, container/deploy 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

## Navigation

| Entry | Use it for |
| --- | --- |
| [Repository README](../../../../README.md) | Repo-wide orientation and top-level data/report structure. |
| [Reports Reading Index](../../../README.md) | Main report navigation, topics, and folder map. |
| [Reports by Topic](../../../by-topic/README.md) | Topic-first report navigation. |
| [Report Tables](../../../tables/README.md) | Table-first view and CSV exports. |
| [Repository Insights](../../../repository-insights/README.md) | Repository-by-repository assessment rows. |
| [Source Deep Dives](../../README.md) | Source-path-level findings by topic. |
| [Source Repository Deep Dives](../README.md) | One Markdown deep dive per cloned repository. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | zhuyansen/agent-skills-hub |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 296 |
| Forks | 30 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/zhuyansen__agent-skills-hub](../../../../sources/zhuyansen__agent-skills-hub) |
| Existing report | [reports/global-trending/repositories/zhuyansen__agent-skills-hub.md](../../../global-trending/repositories/zhuyansen__agent-skills-hub.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 311 / 51 |
| Max observed depth | 6 |
| Top directories | .agents, .claude, .github, backend, docs, frontend, memory, ops, supabase |
| Top extensions | .tsx: 91, .py: 45, .md: 29, .ts: 28, .png: 22, .sql: 18, .mjs: 12, .sh: 12, .html: 11, .json: 10, (none): 8, .xml: 5 |
| Source patterns | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| docs | documentation surface | 6 |
| .github | ci surface | 1 |
| backend | top-level component | 1 |
| frontend | top-level component | 1 |
| memory | top-level component | 1 |
| ops | top-level component | 1 |
| supabase | top-level component | 1 |


## How It Runs

_No command surface extracted from root manifests._


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | none |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
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


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 4 | [frontend/src/App.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/App.tsx)<br>[frontend/src/index.css](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/index.css)<br>[frontend/src/main.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/main.tsx)<br>[backend/app/main.py](../../../../sources/zhuyansen__agent-skills-hub/backend/app/main.py) |
| agentRuntime | 22 | [CONTEXT.md](../../../../sources/zhuyansen__agent-skills-hub/CONTEXT.md)<br>[memory/daily-report-archive.md](../../../../sources/zhuyansen__agent-skills-hub/memory/daily-report-archive.md)<br>[frontend/src/types/skill.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/types/skill.ts)<br>[frontend/src/hooks/useCache.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/hooks/useCache.ts)<br>[frontend/src/hooks/useCachedQuery.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/hooks/useCachedQuery.ts)<br>[frontend/src/hooks/useCompare.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/hooks/useCompare.ts)<br>[frontend/src/hooks/useFavorites.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/hooks/useFavorites.ts)<br>[frontend/src/hooks/useLandingData.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/hooks/useLandingData.ts) |
| mcp | 0 | not obvious |
| retrieval | 15 | [supabase/migrations/016_author_name_trgm_index.sql](../../../../sources/zhuyansen__agent-skills-hub/supabase/migrations/016_author_name_trgm_index.sql)<br>[memory/daily-report-archive.md](../../../../sources/zhuyansen__agent-skills-hub/memory/daily-report-archive.md)<br>[frontend/index.html](../../../../sources/zhuyansen__agent-skills-hub/frontend/index.html)<br>[frontend/src/index.css](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/index.css)<br>[frontend/src/components/charts/index.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/index.ts)<br>[frontend/scripts/generate-search-index.mjs](../../../../sources/zhuyansen__agent-skills-hub/frontend/scripts/generate-search-index.mjs)<br>[frontend/public/terms/index.html](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/terms/index.html)<br>[frontend/public/privacy/index.html](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/privacy/index.html) |
| spec | 4 | [frontend/content/book/A-skill-design-cheatsheet.md](../../../../sources/zhuyansen__agent-skills-hub/frontend/content/book/A-skill-design-cheatsheet.md)<br>[docs/skillspector-integration-spec.md](../../../../sources/zhuyansen__agent-skills-hub/docs/skillspector-integration-spec.md)<br>[docs/system-architecture.md](../../../../sources/zhuyansen__agent-skills-hub/docs/system-architecture.md)<br>[backend/requirements.txt](../../../../sources/zhuyansen__agent-skills-hub/backend/requirements.txt) |
| eval | 9 | [ops/content-quality-gate.py](../../../../sources/zhuyansen__agent-skills-hub/ops/content-quality-gate.py)<br>[frontend/public/book/assets/ch04-fig1-size-quality.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch04-fig1-size-quality.png)<br>[frontend/content/book/assets/ch04-fig1-size-quality.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/content/book/assets/ch04-fig1-size-quality.png)<br>[docs/skillspector-integration-spec.md](../../../../sources/zhuyansen__agent-skills-hub/docs/skillspector-integration-spec.md)<br>[backend/test_newsletter.py](../../../../sources/zhuyansen__agent-skills-hub/backend/test_newsletter.py)<br>[backend/tests/__init__.py](../../../../sources/zhuyansen__agent-skills-hub/backend/tests/__init__.py)<br>[backend/tests/test_data_cleaner.py](../../../../sources/zhuyansen__agent-skills-hub/backend/tests/test_data_cleaner.py)<br>[backend/tests/test_scorer.py](../../../../sources/zhuyansen__agent-skills-hub/backend/tests/test_scorer.py) |
| security | 3 | [backend/app/services/llm_security_analyzer.py](../../../../sources/zhuyansen__agent-skills-hub/backend/app/services/llm_security_analyzer.py)<br>[backend/app/services/security_scanner.py](../../../../sources/zhuyansen__agent-skills-hub/backend/app/services/security_scanner.py)<br>[.claude/hooks/secret-scan.sh](../../../../sources/zhuyansen__agent-skills-hub/.claude/hooks/secret-scan.sh) |
| ci | 4 | [.github/workflows/daily-report.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/daily-report.yml)<br>[.github/workflows/deploy.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/deploy.yml)<br>[.github/workflows/newsletter.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/newsletter.yml)<br>[.github/workflows/sync.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/sync.yml) |
| container | 5 | [frontend/src/components/charts/CategoryPieChart.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/CategoryPieChart.tsx)<br>[frontend/src/components/charts/index.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/index.ts)<br>[frontend/src/components/charts/LanguageBarChart.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/LanguageBarChart.tsx)<br>[frontend/src/components/charts/StarTrendChart.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/StarTrendChart.tsx)<br>[backend/Dockerfile](../../../../sources/zhuyansen__agent-skills-hub/backend/Dockerfile) |
| instruction | 1 | [CLAUDE.md](../../../../sources/zhuyansen__agent-skills-hub/CLAUDE.md) |
| docs | 45 | [README.md](../../../../sources/zhuyansen__agent-skills-hub/README.md)<br>[frontend/README.md](../../../../sources/zhuyansen__agent-skills-hub/frontend/README.md)<br>[frontend/public/book/assets/ch03-fig1-long-tail.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch03-fig1-long-tail.png)<br>[frontend/public/book/assets/ch03-fig2-supply-surge.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch03-fig2-supply-surge.png)<br>[frontend/public/book/assets/ch03-fig3-gini-compare.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch03-fig3-gini-compare.png)<br>[frontend/public/book/assets/ch03-fig4-lifecycle.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch03-fig4-lifecycle.png)<br>[frontend/public/book/assets/ch04-fig1-size-quality.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch04-fig1-size-quality.png)<br>[frontend/public/book/assets/ch05-fig1-survival-curve.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch05-fig1-survival-curve.png) |
| config | 3 | [frontend/package.json](../../../../sources/zhuyansen__agent-skills-hub/frontend/package.json)<br>[frontend/tsconfig.json](../../../../sources/zhuyansen__agent-skills-hub/frontend/tsconfig.json)<br>[backend/requirements.txt](../../../../sources/zhuyansen__agent-skills-hub/backend/requirements.txt) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 9 | [ops/content-quality-gate.py](../../../../sources/zhuyansen__agent-skills-hub/ops/content-quality-gate.py)<br>[frontend/public/book/assets/ch04-fig1-size-quality.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/public/book/assets/ch04-fig1-size-quality.png)<br>[frontend/content/book/assets/ch04-fig1-size-quality.png](../../../../sources/zhuyansen__agent-skills-hub/frontend/content/book/assets/ch04-fig1-size-quality.png)<br>[docs/skillspector-integration-spec.md](../../../../sources/zhuyansen__agent-skills-hub/docs/skillspector-integration-spec.md)<br>[backend/test_newsletter.py](../../../../sources/zhuyansen__agent-skills-hub/backend/test_newsletter.py)<br>[backend/tests/__init__.py](../../../../sources/zhuyansen__agent-skills-hub/backend/tests/__init__.py) |
| CI workflows | 4 | [.github/workflows/daily-report.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/daily-report.yml)<br>[.github/workflows/deploy.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/deploy.yml)<br>[.github/workflows/newsletter.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/newsletter.yml)<br>[.github/workflows/sync.yml](../../../../sources/zhuyansen__agent-skills-hub/.github/workflows/sync.yml) |
| Containers / deploy | 5 | [frontend/src/components/charts/CategoryPieChart.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/CategoryPieChart.tsx)<br>[frontend/src/components/charts/index.ts](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/index.ts)<br>[frontend/src/components/charts/LanguageBarChart.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/LanguageBarChart.tsx)<br>[frontend/src/components/charts/StarTrendChart.tsx](../../../../sources/zhuyansen__agent-skills-hub/frontend/src/components/charts/StarTrendChart.tsx)<br>[backend/Dockerfile](../../../../sources/zhuyansen__agent-skills-hub/backend/Dockerfile) |
| Security / policy | 3 | [backend/app/services/llm_security_analyzer.py](../../../../sources/zhuyansen__agent-skills-hub/backend/app/services/llm_security_analyzer.py)<br>[backend/app/services/security_scanner.py](../../../../sources/zhuyansen__agent-skills-hub/backend/app/services/security_scanner.py)<br>[.claude/hooks/secret-scan.sh](../../../../sources/zhuyansen__agent-skills-hub/.claude/hooks/secret-scan.sh) |
| Agent instructions | 1 | [CLAUDE.md](../../../../sources/zhuyansen__agent-skills-hub/CLAUDE.md) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | none |
| operation | none |
| security | none |
| evidenceGaps | dependency cue weak in root manifests |


## Reading Plan

1. Start from key references: `CONTEXT.md`, `memory/daily-report-archive.md`, `frontend/src/types/skill.ts`.
2. Trace execution through entrypoints: `frontend/src/App.tsx`, `frontend/src/index.css`, `frontend/src/main.tsx`.
3. Map agent/tool runtime through: `CONTEXT.md`, `memory/daily-report-archive.md`, `frontend/src/types/skill.ts`.
4. Inspect retrieval/memory/indexing through: `supabase/migrations/016_author_name_trgm_index.sql`, `memory/daily-report-archive.md`, `frontend/index.html`.
5. Verify behavior through test/eval files: `ops/content-quality-gate.py`, `frontend/public/book/assets/ch04-fig1-size-quality.png`, `frontend/content/book/assets/ch04-fig1-size-quality.png`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 Discover and compare open source Agent Skills, tools & MCP servers — with quality scoring, trending analysis, and automa. 핵심 구조 신호는 TypeScript, README.md, CLAUDE.md, ci, docs, agent-instructions이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
