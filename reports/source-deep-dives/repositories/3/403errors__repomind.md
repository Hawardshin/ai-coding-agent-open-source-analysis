# 403errors/repomind Source Deep Dive

Generated: 2026-06-18T15:12:44.535Z

An open-source, AI-powered application using Agentic CAG to chat with any public GitHub repository or developer profile, offering deep code analysis, visual architecture maps and security audits

## 요약

- 조사 단위: `sources/403errors__repomind` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 deep dive입니다.
- 포함 범위: 403 files, 122 directories, depth score 100, key references 7개입니다.
- 탐색 방식: Reading Plan을 먼저 보고, Evidence Buckets와 Key Source References의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=.agents/skills/beautiful-markdown-export/SKILL.md이고, 의존성 단서는 next, react, 검증/운영 단서는 test/eval 경로가 보임, CI workflow가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 tooling and harness pattern reference이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| [Source Trend Insights](../../../source-insights/README.md) | Category trend insights and repository feature comparison from source evidence. |


## Repository Context

| Field | Value |
| --- | --- |
| Repository | 403errors/repomind |
| Topic | Agent Harness and MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 257 |
| Forks | 39 |
| License | none |
| Maturity | solid |
| Evidence | source+report |
| Source | [sources/403errors__repomind](../../../../sources/403errors__repomind) |
| Existing report | [reports/global-trending/repositories/403errors__repomind.md](../../../global-trending/repositories/403errors__repomind.md) |


## Architecture Map

| Field | Value |
| --- | --- |
| Files / directories | 403 / 122 |
| Max observed depth | 8 |
| Top directories | .agents, .codex, .github, prisma, public, scripts, src |
| Top extensions | .ts: 178, .tsx: 138, .png: 35, .sql: 14, .mjs: 10, .json: 7, .md: 4, .gif: 3, .ico: 2, .toml: 2, .yml: 2, (none): 2 |
| Source patterns | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### Components

| Component | Role | Signal count |
| --- | --- | ---: |
| src | source boundary | 76 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| prisma | top-level component | 1 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |


## How It Runs

| Category | Source | Name | Command |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | next dev |
| build | package.json | build | prisma generate && next build |
| serve-dev | package.json | start | next start |
| quality | package.json | lint | eslint |
| quality | package.json | lint:report | node scripts/eslint-baseline.mjs report |
| quality | package.json | lint:baseline:update | node scripts/eslint-baseline.mjs update |
| quality | package.json | lint:baseline:check | node scripts/eslint-baseline.mjs check |
| test | package.json | test | vitest run |
| test | package.json | test:security | vitest run src/lib/__tests__/security-scanner.test.ts src/lib/__tests__/security-benchmark.test.ts src/lib/services/__tests__/security-service.test.ts src/lib/services/__tests__/security-verification.test.ts src/lib/serv |
| test | package.json | test:watch | vitest |
| test | package.json | test:coverage | vitest run --coverage |
| utility | package.json | hygiene:freeze-baseline | node scripts/freeze-hygiene-baseline.mjs |
| utility | package.json | prisma:generate | prisma generate |
| serve-dev | package.json | prisma:migrate | prisma migrate dev |
| utility | package.json | prisma:deploy | node scripts/prisma-deploy.mjs |
| utility | package.json | data:refresh:repos | node scripts/fetch-trending-repos.mjs |
| utility | package.json | backfill:kv | node scripts/backfill-kv-to-postgres.mjs |
| utility | package.json | analytics:estimate-gap | node scripts/estimate-analytics-gap.mjs |


## Dependency Stack

| Group | Detected cues |
| --- | --- |
| llmProviders | none |
| agentProtocols | none |
| agentFrameworks | none |
| vectorStores | none |
| modelRuntime | none |
| webRuntime | next, react |
| developerSurface | none |
| observability | none |
| browserAutomation | none |


## Key Source References

| Bucket | Source path | Why it matters |
| --- | --- | --- |
| agentRuntime | [.agents/skills/beautiful-markdown-export/SKILL.md](../../../../sources/403errors__repomind/.agents/skills/beautiful-markdown-export/SKILL.md) | agentRuntime signal |
| instruction | [.codex/environments/environment.toml](../../../../sources/403errors__repomind/.codex/environments/environment.toml) | instruction signal |
| config | [package.json](../../../../sources/403errors__repomind/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/403errors__repomind/tsconfig.json) | config signal |
| ci | [.github/workflows/refresh-repo-catalog.yml](../../../../sources/403errors__repomind/.github/workflows/refresh-repo-catalog.yml) | ci support |
| eval | [src/lib/security-benchmark-corpus.ts](../../../../sources/403errors__repomind/src/lib/security-benchmark-corpus.ts) | eval support |
| eval | [src/lib/services/__tests__/blog-service.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/blog-service.test.ts) | eval support |


## Evidence Buckets

| Evidence bucket | Hits | Representative paths |
| --- | ---: | --- |
| entrypoints | 0 | not obvious |
| agentRuntime | 1 | [.agents/skills/beautiful-markdown-export/SKILL.md](../../../../sources/403errors__repomind/.agents/skills/beautiful-markdown-export/SKILL.md) |
| mcp | 0 | not obvious |
| retrieval | 7 | [src/lib/services/repo-index-service.ts](../../../../sources/403errors__repomind/src/lib/services/repo-index-service.ts)<br>[src/lib/services/__tests__/repo-index-access-throttle.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/repo-index-access-throttle.test.ts)<br>[src/lib/services/__tests__/repo-index-service.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/repo-index-service.test.ts)<br>[src/app/admin/index/actions.ts](../../../../sources/403errors__repomind/src/app/admin/index/actions.ts)<br>[src/app/admin/index/IndexManagementClient.tsx](../../../../sources/403errors__repomind/src/app/admin/index/IndexManagementClient.tsx)<br>[src/app/admin/index/page.tsx](../../../../sources/403errors__repomind/src/app/admin/index/page.tsx)<br>[public/assets/cag_vs_rag.gif](../../../../sources/403errors__repomind/public/assets/cag_vs_rag.gif) |
| spec | 2 | [src/lib/design-tokens.ts](../../../../sources/403errors__repomind/src/lib/design-tokens.ts)<br>[public/assets/architecture_example.png](../../../../sources/403errors__repomind/public/assets/architecture_example.png) |
| eval | 92 | [src/lib/security-benchmark-corpus.ts](../../../../sources/403errors__repomind/src/lib/security-benchmark-corpus.ts)<br>[src/lib/services/__tests__/blog-service.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/blog-service.test.ts)<br>[src/lib/services/__tests__/fix-verification.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/fix-verification.test.ts)<br>[src/lib/services/__tests__/query-pipeline.execution.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/query-pipeline.execution.test.ts)<br>[src/lib/services/__tests__/query-pipeline.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/query-pipeline.test.ts)<br>[src/lib/services/__tests__/repo-index-access-throttle.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/repo-index-access-throttle.test.ts)<br>[src/lib/services/__tests__/repo-index-service.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/repo-index-service.test.ts)<br>[src/lib/services/__tests__/repo-suggestions.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/repo-suggestions.test.ts) |
| security | 31 | [src/types/next-auth.d.ts](../../../../sources/403errors__repomind/src/types/next-auth.d.ts)<br>[src/lib/admin-auth.ts](../../../../sources/403errors__repomind/src/lib/admin-auth.ts)<br>[src/lib/auth.config.ts](../../../../sources/403errors__repomind/src/lib/auth.config.ts)<br>[src/lib/auth.ts](../../../../sources/403errors__repomind/src/lib/auth.ts)<br>[src/lib/gemini-security.ts](../../../../sources/403errors__repomind/src/lib/gemini-security.ts)<br>[src/lib/security-benchmark-corpus.ts](../../../../sources/403errors__repomind/src/lib/security-benchmark-corpus.ts)<br>[src/lib/security-scan-config.ts](../../../../sources/403errors__repomind/src/lib/security-scan-config.ts)<br>[src/lib/security-scanner.ts](../../../../sources/403errors__repomind/src/lib/security-scanner.ts) |
| ci | 1 | [.github/workflows/refresh-repo-catalog.yml](../../../../sources/403errors__repomind/.github/workflows/refresh-repo-catalog.yml) |
| container | 0 | not obvious |
| instruction | 1 | [.codex/environments/environment.toml](../../../../sources/403errors__repomind/.codex/environments/environment.toml) |
| docs | 1 | [README.md](../../../../sources/403errors__repomind/README.md) |
| config | 2 | [package.json](../../../../sources/403errors__repomind/package.json)<br>[tsconfig.json](../../../../sources/403errors__repomind/tsconfig.json) |


## Validation Surface

| Surface | Hits | Representative paths |
| --- | ---: | --- |
| Tests / evals | 92 | [src/lib/security-benchmark-corpus.ts](../../../../sources/403errors__repomind/src/lib/security-benchmark-corpus.ts)<br>[src/lib/services/__tests__/blog-service.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/blog-service.test.ts)<br>[src/lib/services/__tests__/fix-verification.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/fix-verification.test.ts)<br>[src/lib/services/__tests__/query-pipeline.execution.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/query-pipeline.execution.test.ts)<br>[src/lib/services/__tests__/query-pipeline.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/query-pipeline.test.ts)<br>[src/lib/services/__tests__/repo-index-access-throttle.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/repo-index-access-throttle.test.ts) |
| CI workflows | 1 | [.github/workflows/refresh-repo-catalog.yml](../../../../sources/403errors__repomind/.github/workflows/refresh-repo-catalog.yml) |
| Containers / deploy | 0 | not obvious |
| Security / policy | 31 | [src/types/next-auth.d.ts](../../../../sources/403errors__repomind/src/types/next-auth.d.ts)<br>[src/lib/admin-auth.ts](../../../../sources/403errors__repomind/src/lib/admin-auth.ts)<br>[src/lib/auth.config.ts](../../../../sources/403errors__repomind/src/lib/auth.config.ts)<br>[src/lib/auth.ts](../../../../sources/403errors__repomind/src/lib/auth.ts)<br>[src/lib/gemini-security.ts](../../../../sources/403errors__repomind/src/lib/gemini-security.ts)<br>[src/lib/security-benchmark-corpus.ts](../../../../sources/403errors__repomind/src/lib/security-benchmark-corpus.ts) |
| Agent instructions | 1 | [.codex/environments/environment.toml](../../../../sources/403errors__repomind/.codex/environments/environment.toml) |


## Risks and Follow-up Checks

| Risk category | Findings |
| --- | --- |
| architecture | primary entrypoint not obvious from path scan |
| operation | container/deploy path not obvious |
| security | none |
| evidenceGaps | none |


## Reading Plan

1. Start from key references: `.agents/skills/beautiful-markdown-export/SKILL.md`, `.codex/environments/environment.toml`, `package.json`.
2. Map agent/tool runtime through: `.agents/skills/beautiful-markdown-export/SKILL.md`.
3. Inspect retrieval/memory/indexing through: `src/lib/services/repo-index-service.ts`, `src/lib/services/__tests__/repo-index-access-throttle.test.ts`, `src/lib/services/__tests__/repo-index-service.test.ts`.
4. Verify behavior through test/eval files: `src/lib/security-benchmark-corpus.ts`, `src/lib/services/__tests__/blog-service.test.ts`, `src/lib/services/__tests__/fix-verification.test.ts`.

## Existing Repository Insight

에이전트 하네스/MCP 관점에서 An open source, AI powered application using Agentic CAG to chat with any public GitHub repository or developer profile,. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, next, react이며, source+report 근거 수준으로 solid 후보로 읽는 것이 좋습니다.

## Existing Assessment

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 tooling and harness pattern reference이고, 후속 확인 포인트는 test signal not obvious, license metadata missing, needs deeper structural scan입니다.
