# otomata-tech/memento-core 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

Memento — structured, sourced, living knowledge substrate for AI agents, via MCP. Typed blocks, propose-validate loop. Apache-2.0. Hosted at mento.cc

## 요약

- 조사 단위: `sources/otomata-tech__memento-core` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 141 files, 24 directories, depth score 103, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=supabase/functions/mcp/index.ts, docs/connect-mcp.md, app/functions/mcp.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | otomata-tech/memento-core |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | mixed |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | Apache-2.0 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/otomata-tech__memento-core](../../../../sources/otomata-tech__memento-core) |
| 기존 보고서 | [reports/llm-wiki/repositories/otomata-tech__memento-core.md](../../../llm-wiki/repositories/otomata-tech__memento-core.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 141 / 24 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, app, docs, server, supabase |
| 상위 확장자 | .ts: 52, .vue: 20, .sql: 19, .json: 17, .md: 6, .png: 6, (none): 6, .webp: 5, .css: 2, .example: 2, .html: 1, .ico: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 7 |
| server | source boundary | 5 |
| .github | ci surface | 1 |
| app | top-level component | 1 |
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
| mcp | [supabase/functions/mcp/index.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/mcp/index.ts) | mcp signal |
| mcp | [docs/connect-mcp.md](../../../../sources/otomata-tech__memento-core/docs/connect-mcp.md) | mcp signal |
| mcp | [app/functions/mcp.ts](../../../../sources/otomata-tech__memento-core/app/functions/mcp.ts) | mcp signal |
| agentRuntime | [supabase/functions/_shared/context.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/_shared/context.ts) | agentRuntime signal |
| entrypoints | [app/src/App.vue](../../../../sources/otomata-tech__memento-core/app/src/App.vue) | entrypoints signal |
| entrypoints | [app/src/main.ts](../../../../sources/otomata-tech__memento-core/app/src/main.ts) | entrypoints signal |
| instruction | [CLAUDE.md](../../../../sources/otomata-tech__memento-core/CLAUDE.md) | instruction signal |
| config | [server/package.json](../../../../sources/otomata-tech__memento-core/server/package.json) | config signal |
| config | [server/tsconfig.json](../../../../sources/otomata-tech__memento-core/server/tsconfig.json) | config signal |
| config | [app/package.json](../../../../sources/otomata-tech__memento-core/app/package.json) | config signal |
| config | [app/tsconfig.json](../../../../sources/otomata-tech__memento-core/app/tsconfig.json) | config signal |
| ci | [.github/workflows/test.yml](../../../../sources/otomata-tech__memento-core/.github/workflows/test.yml) | ci support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [app/src/App.vue](../../../../sources/otomata-tech__memento-core/app/src/App.vue)<br>[app/src/main.ts](../../../../sources/otomata-tech__memento-core/app/src/main.ts) |
| agentRuntime | 1 | [supabase/functions/_shared/context.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/_shared/context.ts) |
| mcp | 3 | [supabase/functions/mcp/index.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/mcp/index.ts)<br>[docs/connect-mcp.md](../../../../sources/otomata-tech__memento-core/docs/connect-mcp.md)<br>[app/functions/mcp.ts](../../../../sources/otomata-tech__memento-core/app/functions/mcp.ts) |
| retrieval | 6 | [supabase/functions/mcp/index.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/mcp/index.ts)<br>[supabase/functions/api/index.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/api/index.ts)<br>[supabase/functions/_shared/graph.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/_shared/graph.ts)<br>[server/drizzle/0001_search_vector.sql](../../../../sources/otomata-tech__memento-core/server/drizzle/0001_search_vector.sql)<br>[docs/specs/knowledge-base.md](../../../../sources/otomata-tech__memento-core/docs/specs/knowledge-base.md)<br>[app/index.html](../../../../sources/otomata-tech__memento-core/app/index.html) |
| spec | 0 | 명확하지 않음 |
| eval | 2 | [supabase/functions/_shared/onboarding.test.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/_shared/onboarding.test.ts)<br>[.github/workflows/test.yml](../../../../sources/otomata-tech__memento-core/.github/workflows/test.yml) |
| security | 3 | [supabase/functions/_shared/auth.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/_shared/auth.ts)<br>[server/src/seed-auth-local.ts](../../../../sources/otomata-tech__memento-core/server/src/seed-auth-local.ts)<br>[app/src/auth.ts](../../../../sources/otomata-tech__memento-core/app/src/auth.ts) |
| ci | 1 | [.github/workflows/test.yml](../../../../sources/otomata-tech__memento-core/.github/workflows/test.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/otomata-tech__memento-core/CLAUDE.md) |
| docs | 5 | [README.md](../../../../sources/otomata-tech__memento-core/README.md)<br>[docs/access-control.md](../../../../sources/otomata-tech__memento-core/docs/access-control.md)<br>[docs/connect-mcp.md](../../../../sources/otomata-tech__memento-core/docs/connect-mcp.md)<br>[docs/principles.md](../../../../sources/otomata-tech__memento-core/docs/principles.md)<br>[docs/specs/knowledge-base.md](../../../../sources/otomata-tech__memento-core/docs/specs/knowledge-base.md) |
| config | 4 | [server/package.json](../../../../sources/otomata-tech__memento-core/server/package.json)<br>[server/tsconfig.json](../../../../sources/otomata-tech__memento-core/server/tsconfig.json)<br>[app/package.json](../../../../sources/otomata-tech__memento-core/app/package.json)<br>[app/tsconfig.json](../../../../sources/otomata-tech__memento-core/app/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 2 | [supabase/functions/_shared/onboarding.test.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/_shared/onboarding.test.ts)<br>[.github/workflows/test.yml](../../../../sources/otomata-tech__memento-core/.github/workflows/test.yml) |
| CI workflow | 1 | [.github/workflows/test.yml](../../../../sources/otomata-tech__memento-core/.github/workflows/test.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 3 | [supabase/functions/_shared/auth.ts](../../../../sources/otomata-tech__memento-core/supabase/functions/_shared/auth.ts)<br>[server/src/seed-auth-local.ts](../../../../sources/otomata-tech__memento-core/server/src/seed-auth-local.ts)<br>[app/src/auth.ts](../../../../sources/otomata-tech__memento-core/app/src/auth.ts) |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/otomata-tech__memento-core/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `supabase/functions/mcp/index.ts`, `docs/connect-mcp.md`, `app/functions/mcp.ts`.
2. entrypoint를 따라 실행 흐름 확인: `app/src/App.vue`, `app/src/main.ts`.
3. agent/tool runtime 매핑: `supabase/functions/_shared/context.ts`.
4. retrieval/memory/indexing 확인: `supabase/functions/mcp/index.ts`, `supabase/functions/api/index.ts`, `supabase/functions/_shared/graph.ts`.
5. test/eval 파일로 동작 검증: `supabase/functions/_shared/onboarding.test.ts`, `.github/workflows/test.yml`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Memento — structured, sourced, living knowledge substrate for AI agents, via MCP. Typed blocks, propose validate loop. A. 핵심 구조 신호는 TypeScript, README.md, CLAUDE.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

mixed 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
