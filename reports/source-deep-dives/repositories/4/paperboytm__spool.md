# paperboytm/spool 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Your local AI session library. Browse, pin, and ⌘K-search every Claude Code, Codex, Gemini & OpenCode session — and let the built-in scanner catch leaked secrets. Local-first, nothing leaves your machine.

## 요약

- 조사 단위: `sources/paperboytm__spool` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 672 files, 151 directories, depth score 116, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=AGENTS.md, skills-lock.json, skills/spool/SKILL.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | paperboytm/spool |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 561 |
| Forks | 38 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/paperboytm__spool](../../../../sources/paperboytm__spool) |
| 기존 보고서 | [reports/global-trending/repositories/paperboytm__spool.md](../../../global-trending/repositories/paperboytm__spool.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 672 / 151 |
| 관측 최대 깊이 | 10 |
| 상위 디렉터리 | .agents, .claude, .github, docs, packages, plans, scripts, skills, videos, workers |
| 상위 확장자 | .ts: 438, .tsx: 91, .json: 36, .md: 31, .mjs: 11, .css: 10, .png: 10, .jsonl: 8, .sh: 7, (none): 6, .html: 5, .yml: 5 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/app | packages workspace | 66 |
| packages/share-backend | packages workspace | 41 |
| packages/core | packages workspace | 28 |
| packages/landing | packages workspace | 18 |
| packages/share-web | packages workspace | 17 |
| packages/share-kit | packages workspace | 15 |
| packages/redact | packages workspace | 8 |
| packages/cli | packages workspace | 7 |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| packages | source boundary | 1 |
| plans | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |
| videos | top-level component | 1 |
| workers | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | turbo build |
| serve-dev | package.json | dev | turbo dev |
| test | package.json | test | turbo test |
| test | package.json | test:core | pnpm --filter @spool-lab/core test |
| test | package.json | test:e2e | pnpm --filter @spool/app test:e2e |
| test | package.json | test:share-backend | pnpm --filter @spool/share-backend test |
| build | package.json | rebuild:native:node | pnpm --filter @spool-lab/core run rebuild:native:node |
| build | package.json | rebuild:native:electron | pnpm --filter @spool/app run rebuild:native:electron |
| quality | package.json | lint | eslint . |
| utility | package.json | clean | turbo clean |
| quality | package.json | check:phantom-independence | scripts/phantom-independence-check.sh |
| serve-dev | package.json | dev:install:mac | scripts/dev-install-mac.sh |
| utility | package.json | spool | node packages/cli/bin/spool.js |


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
| agentRuntime | [AGENTS.md](../../../../sources/paperboytm__spool/AGENTS.md) | agentRuntime signal |
| agentRuntime | [skills-lock.json](../../../../sources/paperboytm__spool/skills-lock.json) | agentRuntime signal |
| agentRuntime | [skills/spool/SKILL.md](../../../../sources/paperboytm__spool/skills/spool/SKILL.md) | agentRuntime signal |
| agentRuntime | [packages/landing/pages/docs/guides/agent-integration.md](../../../../sources/paperboytm__spool/packages/landing/pages/docs/guides/agent-integration.md) | agentRuntime signal |
| entrypoints | [packages/share-web/src/App.tsx](../../../../sources/paperboytm__spool/packages/share-web/src/App.tsx) | entrypoints signal |
| entrypoints | [packages/share-web/src/main.tsx](../../../../sources/paperboytm__spool/packages/share-web/src/main.tsx) | entrypoints signal |
| entrypoints | [packages/share-kit/src/index.ts](../../../../sources/paperboytm__spool/packages/share-kit/src/index.ts) | entrypoints signal |
| entrypoints | [packages/redact/src/index.ts](../../../../sources/paperboytm__spool/packages/redact/src/index.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/paperboytm__spool/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/paperboytm__spool/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/paperboytm__spool/pnpm-workspace.yaml) | config signal |
| config | [turbo.json](../../../../sources/paperboytm__spool/turbo.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 9 | [packages/share-web/src/App.tsx](../../../../sources/paperboytm__spool/packages/share-web/src/App.tsx)<br>[packages/share-web/src/main.tsx](../../../../sources/paperboytm__spool/packages/share-web/src/main.tsx)<br>[packages/share-kit/src/index.ts](../../../../sources/paperboytm__spool/packages/share-kit/src/index.ts)<br>[packages/redact/src/index.ts](../../../../sources/paperboytm__spool/packages/redact/src/index.ts)<br>[packages/core/src/index.ts](../../../../sources/paperboytm__spool/packages/core/src/index.ts)<br>[packages/cli/src/cli.test.ts](../../../../sources/paperboytm__spool/packages/cli/src/cli.test.ts)<br>[packages/cli/src/index.ts](../../../../sources/paperboytm__spool/packages/cli/src/index.ts)<br>[packages/cli/bin/spool.js](../../../../sources/paperboytm__spool/packages/cli/bin/spool.js) |
| agentRuntime | 32 | [AGENTS.md](../../../../sources/paperboytm__spool/AGENTS.md)<br>[skills-lock.json](../../../../sources/paperboytm__spool/skills-lock.json)<br>[skills/spool/SKILL.md](../../../../sources/paperboytm__spool/skills/spool/SKILL.md)<br>[packages/landing/pages/docs/guides/agent-integration.md](../../../../sources/paperboytm__spool/packages/landing/pages/docs/guides/agent-integration.md)<br>[packages/core/src/migrations/agent-search-cleanup.test.ts](../../../../sources/paperboytm__spool/packages/core/src/migrations/agent-search-cleanup.test.ts)<br>[packages/core/src/migrations/agent-search-cleanup.ts](../../../../sources/paperboytm__spool/packages/core/src/migrations/agent-search-cleanup.ts)<br>[packages/core/src/doctor/runner.ts](../../../../sources/paperboytm__spool/packages/core/src/doctor/runner.ts)<br>[packages/app/src/renderer/hooks/useFocusTrap.ts](../../../../sources/paperboytm__spool/packages/app/src/renderer/hooks/useFocusTrap.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 27 | [videos/spool-v0.5.0/index.html](../../../../sources/paperboytm__spool/videos/spool-v0.5.0/index.html)<br>[videos/launch-template/index.html](../../../../sources/paperboytm__spool/videos/launch-template/index.html)<br>[packages/share-web/index.html](../../../../sources/paperboytm__spool/packages/share-web/index.html)<br>[packages/share-kit/src/index.ts](../../../../sources/paperboytm__spool/packages/share-kit/src/index.ts)<br>[packages/share-kit/src/templates/index.tsx](../../../../sources/paperboytm__spool/packages/share-kit/src/templates/index.tsx)<br>[packages/share-kit/src/lib/parsers/index.ts](../../../../sources/paperboytm__spool/packages/share-kit/src/lib/parsers/index.ts)<br>[packages/share-kit/src/lib/export/index.ts](../../../../sources/paperboytm__spool/packages/share-kit/src/lib/export/index.ts)<br>[packages/share-backend/functions/api/me/index.ts](../../../../sources/paperboytm__spool/packages/share-backend/functions/api/me/index.ts) |
| spec | 51 | [DESIGN.md](../../../../sources/paperboytm__spool/DESIGN.md)<br>[packages/app/e2e/agent-search.spec.ts](../../../../sources/paperboytm__spool/packages/app/e2e/agent-search.spec.ts)<br>[packages/app/e2e/copy-resume-command.spec.ts](../../../../sources/paperboytm__spool/packages/app/e2e/copy-resume-command.spec.ts)<br>[packages/app/e2e/dark-mode-root-bg.spec.ts](../../../../sources/paperboytm__spool/packages/app/e2e/dark-mode-root-bg.spec.ts)<br>[packages/app/e2e/dev-db-isolation.spec.ts](../../../../sources/paperboytm__spool/packages/app/e2e/dev-db-isolation.spec.ts)<br>[packages/app/e2e/fast-search.spec.ts](../../../../sources/paperboytm__spool/packages/app/e2e/fast-search.spec.ts)<br>[packages/app/e2e/home-preview.spec.ts](../../../../sources/paperboytm__spool/packages/app/e2e/home-preview.spec.ts)<br>[packages/app/e2e/markdown-table.spec.ts](../../../../sources/paperboytm__spool/packages/app/e2e/markdown-table.spec.ts) |
| eval | 196 | [packages/share-web/tests/safety.test.ts](../../../../sources/paperboytm__spool/packages/share-web/tests/safety.test.ts)<br>[packages/share-web/src/pages/Me.load.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/pages/Me.load.test.ts)<br>[packages/share-web/src/lib/api-cache.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/api-cache.test.ts)<br>[packages/share-web/src/lib/api.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/api.test.ts)<br>[packages/share-web/src/lib/dates.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/dates.test.ts)<br>[packages/share-web/src/lib/mailto.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/mailto.test.ts)<br>[packages/share-web/src/lib/me-cache.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/me-cache.test.ts)<br>[packages/share-web/src/lib/og-meta.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/og-meta.test.ts) |
| security | 103 | [packages/share-web/src/lib/auth-cache.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/auth-cache.ts)<br>[packages/share-backend/tests/auth.test.ts](../../../../sources/paperboytm__spool/packages/share-backend/tests/auth.test.ts)<br>[packages/share-backend/tests/security.test.ts](../../../../sources/paperboytm__spool/packages/share-backend/tests/security.test.ts)<br>[packages/share-backend/src/audit.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/audit.ts)<br>[packages/share-backend/src/security/cache-control.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/security/cache-control.ts)<br>[packages/share-backend/src/security/csp.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/security/csp.ts)<br>[packages/share-backend/src/auth/cookie.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/auth/cookie.ts)<br>[packages/share-backend/src/auth/jwks.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/auth/jwks.ts) |
| ci | 3 | [.github/workflows/deploy-landing.yml](../../../../sources/paperboytm__spool/.github/workflows/deploy-landing.yml)<br>[.github/workflows/e2e.yml](../../../../sources/paperboytm__spool/.github/workflows/e2e.yml)<br>[.github/workflows/release.yml](../../../../sources/paperboytm__spool/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/paperboytm__spool/AGENTS.md)<br>[CLAUDE.md](../../../../sources/paperboytm__spool/CLAUDE.md) |
| docs | 18 | [README.md](../../../../sources/paperboytm__spool/README.md)<br>[videos/README.md](../../../../sources/paperboytm__spool/videos/README.md)<br>[videos/spool-v0.5.0/README.md](../../../../sources/paperboytm__spool/videos/spool-v0.5.0/README.md)<br>[videos/launch-template/README.md](../../../../sources/paperboytm__spool/videos/launch-template/README.md)<br>[packages/share-kit/README.md](../../../../sources/paperboytm__spool/packages/share-kit/README.md)<br>[packages/share-backend/README.md](../../../../sources/paperboytm__spool/packages/share-backend/README.md)<br>[packages/landing/pages/docs/installation.md](../../../../sources/paperboytm__spool/packages/landing/pages/docs/installation.md)<br>[packages/landing/pages/docs/layout.island.tsx](../../../../sources/paperboytm__spool/packages/landing/pages/docs/layout.island.tsx) |
| config | 23 | [package.json](../../../../sources/paperboytm__spool/package.json)<br>[pnpm-workspace.yaml](../../../../sources/paperboytm__spool/pnpm-workspace.yaml)<br>[turbo.json](../../../../sources/paperboytm__spool/turbo.json)<br>[workers/spool-pro-router/package.json](../../../../sources/paperboytm__spool/workers/spool-pro-router/package.json)<br>[workers/spool-pro-router/tsconfig.json](../../../../sources/paperboytm__spool/workers/spool-pro-router/tsconfig.json)<br>[videos/spool-v0.5.0/package.json](../../../../sources/paperboytm__spool/videos/spool-v0.5.0/package.json)<br>[videos/launch-template/package.json](../../../../sources/paperboytm__spool/videos/launch-template/package.json)<br>[packages/share-web/package.json](../../../../sources/paperboytm__spool/packages/share-web/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 196 | [packages/share-web/tests/safety.test.ts](../../../../sources/paperboytm__spool/packages/share-web/tests/safety.test.ts)<br>[packages/share-web/src/pages/Me.load.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/pages/Me.load.test.ts)<br>[packages/share-web/src/lib/api-cache.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/api-cache.test.ts)<br>[packages/share-web/src/lib/api.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/api.test.ts)<br>[packages/share-web/src/lib/dates.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/dates.test.ts)<br>[packages/share-web/src/lib/mailto.test.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/mailto.test.ts) |
| CI workflow | 3 | [.github/workflows/deploy-landing.yml](../../../../sources/paperboytm__spool/.github/workflows/deploy-landing.yml)<br>[.github/workflows/e2e.yml](../../../../sources/paperboytm__spool/.github/workflows/e2e.yml)<br>[.github/workflows/release.yml](../../../../sources/paperboytm__spool/.github/workflows/release.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 103 | [packages/share-web/src/lib/auth-cache.ts](../../../../sources/paperboytm__spool/packages/share-web/src/lib/auth-cache.ts)<br>[packages/share-backend/tests/auth.test.ts](../../../../sources/paperboytm__spool/packages/share-backend/tests/auth.test.ts)<br>[packages/share-backend/tests/security.test.ts](../../../../sources/paperboytm__spool/packages/share-backend/tests/security.test.ts)<br>[packages/share-backend/src/audit.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/audit.ts)<br>[packages/share-backend/src/security/cache-control.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/security/cache-control.ts)<br>[packages/share-backend/src/security/csp.ts](../../../../sources/paperboytm__spool/packages/share-backend/src/security/csp.ts) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/paperboytm__spool/AGENTS.md)<br>[CLAUDE.md](../../../../sources/paperboytm__spool/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `AGENTS.md`, `skills-lock.json`, `skills/spool/SKILL.md`.
2. entrypoint를 따라 실행 흐름 확인: `packages/share-web/src/App.tsx`, `packages/share-web/src/main.tsx`, `packages/share-kit/src/index.ts`.
3. agent/tool runtime 매핑: `AGENTS.md`, `skills-lock.json`, `skills/spool/SKILL.md`.
4. retrieval/memory/indexing 확인: `videos/spool-v0.5.0/index.html`, `videos/launch-template/index.html`, `packages/share-web/index.html`.
5. test/eval 파일로 동작 검증: `packages/share-web/tests/safety.test.ts`, `packages/share-web/src/pages/Me.load.test.ts`, `packages/share-web/src/lib/api-cache.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Your local AI session library. Browse, pin, and ⌘K search every Claude Code, Codex, Gemini & OpenCode session — and let . 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
