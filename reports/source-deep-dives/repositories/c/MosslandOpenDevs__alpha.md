# MosslandOpenDevs/alpha 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Korean crypto × AI vertical media + community — alpha.moss.land. Channel stance, AI briefs, RAG, 8 AI personas with track records, 12-tool MCP server.

## 요약

- 조사 단위: `sources/MosslandOpenDevs__alpha` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 125 files, 58 directories, depth score 77, key references 10개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, agent/tool runtime, security/policy surface 구조로 읽힌다. 핵심 소스 근거는 mcp=lib/mcp-server.ts, app/mcp/page.tsx, app/api/mcp/route.ts이고, 의존성 단서는 next, react, 검증/운영 단서는 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 10개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | MosslandOpenDevs/alpha |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/MosslandOpenDevs__alpha](../../../../sources/MosslandOpenDevs__alpha) |
| 기존 보고서 | [reports/korea-trending/repositories/MosslandOpenDevs__alpha.md](../../../korea-trending/repositories/MosslandOpenDevs__alpha.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 125 / 58 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | app, components, docs, lib, public, scripts |
| 상위 확장자 | .ts: 63, .tsx: 40, .json: 6, .md: 4, (none): 3, .yaml: 2, .cjs: 1, .css: 1, .example: 1, .html: 1, .ico: 1, .mjs: 1 |
| 소스 패턴 | monorepo/workspace, agent/tool runtime, security/policy surface, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 11 |
| lib | source boundary | 3 |
| app | top-level component | 1 |
| components | top-level component | 1 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | next dev -p 6900 |
| build | package.json | build | next build |
| serve-dev | package.json | start | next start -p 6900 |


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
| mcp | [lib/mcp-server.ts](../../../../sources/MosslandOpenDevs__alpha/lib/mcp-server.ts) | mcp signal |
| mcp | [app/mcp/page.tsx](../../../../sources/MosslandOpenDevs__alpha/app/mcp/page.tsx) | mcp signal |
| mcp | [app/api/mcp/route.ts](../../../../sources/MosslandOpenDevs__alpha/app/api/mcp/route.ts) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/MosslandOpenDevs__alpha/AGENTS.md) | agentRuntime signal |
| agentRuntime | [lib/agents.ts](../../../../sources/MosslandOpenDevs__alpha/lib/agents.ts) | agentRuntime signal |
| agentRuntime | [app/agents/page.tsx](../../../../sources/MosslandOpenDevs__alpha/app/agents/page.tsx) | agentRuntime signal |
| instruction | [CLAUDE.md](../../../../sources/MosslandOpenDevs__alpha/CLAUDE.md) | instruction signal |
| config | [package.json](../../../../sources/MosslandOpenDevs__alpha/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/MosslandOpenDevs__alpha/pnpm-workspace.yaml) | config signal |
| config | [tsconfig.json](../../../../sources/MosslandOpenDevs__alpha/tsconfig.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 0 | 명확하지 않음 |
| agentRuntime | 4 | [AGENTS.md](../../../../sources/MosslandOpenDevs__alpha/AGENTS.md)<br>[lib/agents.ts](../../../../sources/MosslandOpenDevs__alpha/lib/agents.ts)<br>[app/agents/page.tsx](../../../../sources/MosslandOpenDevs__alpha/app/agents/page.tsx)<br>`app/agents/[handle]/page.tsx` |
| mcp | 3 | [lib/mcp-server.ts](../../../../sources/MosslandOpenDevs__alpha/lib/mcp-server.ts)<br>[app/mcp/page.tsx](../../../../sources/MosslandOpenDevs__alpha/app/mcp/page.tsx)<br>[app/api/mcp/route.ts](../../../../sources/MosslandOpenDevs__alpha/app/api/mcp/route.ts) |
| retrieval | 0 | 명확하지 않음 |
| spec | 0 | 명확하지 않음 |
| eval | 0 | 명확하지 않음 |
| security | 7 | [scripts/audit-auto.ts](../../../../sources/MosslandOpenDevs__alpha/scripts/audit-auto.ts)<br>[scripts/audit-baseline.ts](../../../../sources/MosslandOpenDevs__alpha/scripts/audit-baseline.ts)<br>[docs/audit-queries.md](../../../../sources/MosslandOpenDevs__alpha/docs/audit-queries.md)<br>[docs/audit-results/2026-05-06-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-06-auto.json)<br>[docs/audit-results/2026-05-06.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-06.json)<br>[docs/audit-results/2026-05-11-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-11-auto.json)<br>[docs/audit-results/2026-05-18-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-18-auto.json) |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 2 | [AGENTS.md](../../../../sources/MosslandOpenDevs__alpha/AGENTS.md)<br>[CLAUDE.md](../../../../sources/MosslandOpenDevs__alpha/CLAUDE.md) |
| docs | 6 | [README.md](../../../../sources/MosslandOpenDevs__alpha/README.md)<br>[docs/audit-queries.md](../../../../sources/MosslandOpenDevs__alpha/docs/audit-queries.md)<br>[docs/audit-results/2026-05-06-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-06-auto.json)<br>[docs/audit-results/2026-05-06.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-06.json)<br>[docs/audit-results/2026-05-11-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-11-auto.json)<br>[docs/audit-results/2026-05-18-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-18-auto.json) |
| config | 3 | [package.json](../../../../sources/MosslandOpenDevs__alpha/package.json)<br>[pnpm-workspace.yaml](../../../../sources/MosslandOpenDevs__alpha/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/MosslandOpenDevs__alpha/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 0 | 명확하지 않음 |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 7 | [scripts/audit-auto.ts](../../../../sources/MosslandOpenDevs__alpha/scripts/audit-auto.ts)<br>[scripts/audit-baseline.ts](../../../../sources/MosslandOpenDevs__alpha/scripts/audit-baseline.ts)<br>[docs/audit-queries.md](../../../../sources/MosslandOpenDevs__alpha/docs/audit-queries.md)<br>[docs/audit-results/2026-05-06-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-06-auto.json)<br>[docs/audit-results/2026-05-06.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-06.json)<br>[docs/audit-results/2026-05-11-auto.json](../../../../sources/MosslandOpenDevs__alpha/docs/audit-results/2026-05-11-auto.json) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/MosslandOpenDevs__alpha/AGENTS.md)<br>[CLAUDE.md](../../../../sources/MosslandOpenDevs__alpha/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | path scan에서 primary entrypoint가 명확하지 않음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음; test/eval 경로가 명확하지 않음 |
| security | 없음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `lib/mcp-server.ts`, `app/mcp/page.tsx`, `app/api/mcp/route.ts`.
2. agent/tool runtime 매핑: `AGENTS.md`, `lib/agents.ts`, `app/agents/page.tsx`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Korean crypto × AI vertical media + community — alpha.moss.land. Channel stance, AI briefs, RAG, 8 AI personas with trac. 핵심 구조 신호는 TypeScript, package.json, README.md, AGENTS.md, CLAUDE.md, LICENSE이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
