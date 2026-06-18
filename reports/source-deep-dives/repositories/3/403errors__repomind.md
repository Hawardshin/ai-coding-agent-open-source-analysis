# 403errors/repomind 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

An open-source, AI-powered application using Agentic CAG to chat with any public GitHub repository or developer profile, offering deep code analysis, visual architecture maps and security audits

## 요약

- 조사 단위: `sources/403errors__repomind` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 403 files, 122 directories, depth score 94, key references 7개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 agent/tool runtime, retrieval/vector path, spec/docs-driven 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=.agents/skills/beautiful-markdown-export/SKILL.md이고, 의존성 단서는 next, react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 7개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | 403errors/repomind |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 257 |
| Forks | 39 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/403errors__repomind](../../../../sources/403errors__repomind) |
| 기존 보고서 | [reports/global-trending/repositories/403errors__repomind.md](../../../global-trending/repositories/403errors__repomind.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 403 / 122 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .agents, .codex, .github, prisma, public, scripts, src |
| 상위 확장자 | .ts: 178, .tsx: 138, .png: 35, .sql: 14, .mjs: 10, .json: 7, .md: 4, .gif: 3, .ico: 2, .toml: 2, .yml: 2, (none): 2 |
| 소스 패턴 | agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 76 |
| .codex | top-level component | 1 |
| .github | ci surface | 1 |
| prisma | top-level component | 1 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
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


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | next, react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| agentRuntime | [.agents/skills/beautiful-markdown-export/SKILL.md](../../../../sources/403errors__repomind/.agents/skills/beautiful-markdown-export/SKILL.md) | agentRuntime signal |
| instruction | [.codex/environments/environment.toml](../../../../sources/403errors__repomind/.codex/environments/environment.toml) | instruction signal |
| config | [package.json](../../../../sources/403errors__repomind/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/403errors__repomind/tsconfig.json) | config signal |
| ci | [.github/workflows/refresh-repo-catalog.yml](../../../../sources/403errors__repomind/.github/workflows/refresh-repo-catalog.yml) | ci support |
| eval | [src/lib/security-benchmark-corpus.ts](../../../../sources/403errors__repomind/src/lib/security-benchmark-corpus.ts) | eval support |
| eval | [src/lib/services/__tests__/blog-service.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/blog-service.test.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 1 | [.agents/skills/beautiful-markdown-export/SKILL.md](../../../../sources/403errors__repomind/.agents/skills/beautiful-markdown-export/SKILL.md) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 7 | [src/lib/services/repo-index-service.ts](../../../../sources/403errors__repomind/src/lib/services/repo-index-service.ts)<br>[src/lib/services/__tests__/repo-index-access-throttle.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/repo-index-access-throttle.test.ts)<br>[src/lib/services/__tests__/repo-index-service.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/repo-index-service.test.ts)<br>[src/app/admin/index/actions.ts](../../../../sources/403errors__repomind/src/app/admin/index/actions.ts)<br>[src/app/admin/index/IndexManagementClient.tsx](../../../../sources/403errors__repomind/src/app/admin/index/IndexManagementClient.tsx)<br>[src/app/admin/index/page.tsx](../../../../sources/403errors__repomind/src/app/admin/index/page.tsx)<br>[public/assets/cag_vs_rag.gif](../../../../sources/403errors__repomind/public/assets/cag_vs_rag.gif) |
| spec | 2 | [src/lib/design-tokens.ts](../../../../sources/403errors__repomind/src/lib/design-tokens.ts)<br>[public/assets/architecture_example.png](../../../../sources/403errors__repomind/public/assets/architecture_example.png) |
| eval | 92 | [src/lib/security-benchmark-corpus.ts](../../../../sources/403errors__repomind/src/lib/security-benchmark-corpus.ts)<br>[src/lib/services/__tests__/blog-service.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/blog-service.test.ts)<br>[src/lib/services/__tests__/fix-verification.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/fix-verification.test.ts)<br>[src/lib/services/__tests__/query-pipeline.execution.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/query-pipeline.execution.test.ts)<br>[src/lib/services/__tests__/query-pipeline.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/query-pipeline.test.ts)<br>[src/lib/services/__tests__/repo-index-access-throttle.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/repo-index-access-throttle.test.ts)<br>[src/lib/services/__tests__/repo-index-service.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/repo-index-service.test.ts)<br>[src/lib/services/__tests__/repo-suggestions.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/repo-suggestions.test.ts) |
| security | 31 | [src/types/next-auth.d.ts](../../../../sources/403errors__repomind/src/types/next-auth.d.ts)<br>[src/lib/admin-auth.ts](../../../../sources/403errors__repomind/src/lib/admin-auth.ts)<br>[src/lib/auth.config.ts](../../../../sources/403errors__repomind/src/lib/auth.config.ts)<br>[src/lib/auth.ts](../../../../sources/403errors__repomind/src/lib/auth.ts)<br>[src/lib/gemini-security.ts](../../../../sources/403errors__repomind/src/lib/gemini-security.ts)<br>[src/lib/security-benchmark-corpus.ts](../../../../sources/403errors__repomind/src/lib/security-benchmark-corpus.ts)<br>[src/lib/security-scan-config.ts](../../../../sources/403errors__repomind/src/lib/security-scan-config.ts)<br>[src/lib/security-scanner.ts](../../../../sources/403errors__repomind/src/lib/security-scanner.ts) |
| ci | 1 | [.github/workflows/refresh-repo-catalog.yml](../../../../sources/403errors__repomind/.github/workflows/refresh-repo-catalog.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [.codex/environments/environment.toml](../../../../sources/403errors__repomind/.codex/environments/environment.toml) |
| docs | 1 | [README.md](../../../../sources/403errors__repomind/README.md) |
| config | 2 | [package.json](../../../../sources/403errors__repomind/package.json)<br>[tsconfig.json](../../../../sources/403errors__repomind/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 92 | [src/lib/security-benchmark-corpus.ts](../../../../sources/403errors__repomind/src/lib/security-benchmark-corpus.ts)<br>[src/lib/services/__tests__/blog-service.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/blog-service.test.ts)<br>[src/lib/services/__tests__/fix-verification.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/fix-verification.test.ts)<br>[src/lib/services/__tests__/query-pipeline.execution.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/query-pipeline.execution.test.ts)<br>[src/lib/services/__tests__/query-pipeline.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/query-pipeline.test.ts)<br>[src/lib/services/__tests__/repo-index-access-throttle.test.ts](../../../../sources/403errors__repomind/src/lib/services/__tests__/repo-index-access-throttle.test.ts) |
| CI workflow | 1 | [.github/workflows/refresh-repo-catalog.yml](../../../../sources/403errors__repomind/.github/workflows/refresh-repo-catalog.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 31 | [src/types/next-auth.d.ts](../../../../sources/403errors__repomind/src/types/next-auth.d.ts)<br>[src/lib/admin-auth.ts](../../../../sources/403errors__repomind/src/lib/admin-auth.ts)<br>[src/lib/auth.config.ts](../../../../sources/403errors__repomind/src/lib/auth.config.ts)<br>[src/lib/auth.ts](../../../../sources/403errors__repomind/src/lib/auth.ts)<br>[src/lib/gemini-security.ts](../../../../sources/403errors__repomind/src/lib/gemini-security.ts)<br>[src/lib/security-benchmark-corpus.ts](../../../../sources/403errors__repomind/src/lib/security-benchmark-corpus.ts) |
| 에이전트 지시문 | 1 | [.codex/environments/environment.toml](../../../../sources/403errors__repomind/.codex/environments/environment.toml) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `.agents/skills/beautiful-markdown-export/SKILL.md`, `.codex/environments/environment.toml`, `package.json`.
2. agent/tool runtime 매핑: `.agents/skills/beautiful-markdown-export/SKILL.md`.
3. retrieval/memory/indexing 확인: `src/lib/services/repo-index-service.ts`, `src/lib/services/__tests__/repo-index-access-throttle.test.ts`, `src/lib/services/__tests__/repo-index-service.test.ts`.
4. test/eval 파일로 동작 검증: `src/lib/security-benchmark-corpus.ts`, `src/lib/services/__tests__/blog-service.test.ts`, `src/lib/services/__tests__/fix-verification.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 An open source, AI powered application using Agentic CAG to chat with any public GitHub repository or developer profile,. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, next, react이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
