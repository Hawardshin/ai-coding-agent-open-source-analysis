# AgentBridge-Lab/korea-space-support-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

한국 우주·항공·국방우주 정부 R&D 지원사업 공고 데이터셋 — 크롤러·분류기·MCP·REST API

## 요약

- 조사 단위: `sources/AgentBridge-Lab__korea-space-support-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 92 files, 32 directories, depth score 94, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=korea-business-mcp-agent-instructions.md, korea-business-mcp-product-plan.md, korea-space-support-mcp-agent-instructions.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | AgentBridge-Lab/korea-space-support-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/AgentBridge-Lab__korea-space-support-mcp](../../../../sources/AgentBridge-Lab__korea-space-support-mcp) |
| 기존 보고서 | [reports/korea-trending/repositories/AgentBridge-Lab__korea-space-support-mcp.md](../../../korea-trending/repositories/AgentBridge-Lab__korea-space-support-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 92 / 32 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .github, apps, data, docs, ops, packages, scripts |
| 상위 확장자 | .ts: 27, .md: 18, .json: 17, .tsx: 11, .mjs: 7, .jpg: 5, (none): 2, .css: 1, .example: 1, .jsonl: 1, .plist: 1, .yml: 1 |
| 소스 패턴 | monorepo/workspace, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| apps/web | apps workspace | 24 |
| docs | documentation surface | 19 |
| apps/mcp | apps workspace | 7 |
| packages/shared | packages workspace | 6 |
| apps/api | apps workspace | 4 |
| .github | ci surface | 1 |
| apps | source boundary | 1 |
| data | top-level component | 1 |
| ops | top-level component | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev:api | npm --workspace @bidscout/shared run build && npm --workspace @bidscout/api run dev |
| serve-dev | package.json | dev:mcp | npm --workspace @bidscout/shared run build && npm --workspace @bidscout/mcp run dev |
| serve-dev | package.json | dev:web | npm --workspace @bidscout/shared run build && npm --workspace @bidscout/web run dev |
| utility | package.json | ingest:space | node scripts/ingest-space-programs.mjs |
| build | package.json | check:space | npm --workspace @bidscout/shared run build && node scripts/evaluate-space-mvp.mjs |
| build | package.json | check:space-search | npm --workspace @bidscout/shared run build && node scripts/verify-space-search-samples.mjs |
| build | package.json | check:space-surfaces | npm --workspace @bidscout/shared run build && npm --workspace @bidscout/api run build && npm --workspace @bidscout/mcp run build && node scripts/verify-space-api-mcp-smoke.mjs |
| utility | package.json | report:space | node scripts/report-space-refresh.mjs |
| utility | package.json | refresh:space | node scripts/run-space-refresh.mjs |
| utility | package.json | refresh:space:scheduled | node scripts/run-scheduled-space-refresh.mjs |
| test | package.json | verify:space | npm run check:space && npm run check:space-search && npm run check:space-surfaces && npm test && npm run typecheck && npm run build |
| build | package.json | build | npm --workspace @bidscout/shared run build && npm --workspace @bidscout/api run build && npm --workspace @bidscout/mcp run build && npm --workspace @bidscout/web run build |
| quality | package.json | typecheck | npm --workspace @bidscout/shared run typecheck && npm --workspace @bidscout/api run typecheck && npm --workspace @bidscout/mcp run typecheck && npm --workspace @bidscout/web run typecheck |
| test | package.json | test | npm run test --workspaces --if-present |


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
| mcp | [korea-business-mcp-agent-instructions.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-business-mcp-agent-instructions.md) | mcp signal |
| mcp | [korea-business-mcp-product-plan.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-business-mcp-product-plan.md) | mcp signal |
| mcp | [korea-space-support-mcp-agent-instructions.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-space-support-mcp-agent-instructions.md) | mcp signal |
| mcp | [korea-support-mcp-agent-instructions-ko.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-support-mcp-agent-instructions-ko.md) | mcp signal |
| entrypoints | [packages/shared/src/index.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/src/index.ts) | entrypoints signal |
| entrypoints | [apps/web/src/lib/api.server.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/lib/api.server.ts) | entrypoints signal |
| entrypoints | [apps/web/src/lib/api.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/lib/api.ts) | entrypoints signal |
| entrypoints | [apps/web/src/lib/format.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/lib/format.ts) | entrypoints signal |
| config | [package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/package.json) | config signal |
| config | [packages/shared/package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/package.json) | config signal |
| config | [packages/shared/tsconfig.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/tsconfig.json) | config signal |
| config | [apps/web/package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 24 | [packages/shared/src/index.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/src/index.ts)<br>[apps/web/src/lib/api.server.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/lib/api.server.ts)<br>[apps/web/src/lib/api.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/lib/api.ts)<br>[apps/web/src/lib/format.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/lib/format.ts)<br>[apps/web/src/lib/types.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/lib/types.ts)<br>[apps/web/src/components/Badge.tsx](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/components/Badge.tsx)<br>[apps/web/src/components/FilterPanel.tsx](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/components/FilterPanel.tsx)<br>[apps/web/src/components/KeywordSearchBar.tsx](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/components/KeywordSearchBar.tsx) |
| agentRuntime | 0 | 명확하지 않음 |
| mcp | 13 | [korea-business-mcp-agent-instructions.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-business-mcp-agent-instructions.md)<br>[korea-business-mcp-product-plan.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-business-mcp-product-plan.md)<br>[korea-space-support-mcp-agent-instructions.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-space-support-mcp-agent-instructions.md)<br>[korea-support-mcp-agent-instructions-ko.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-support-mcp-agent-instructions-ko.md)<br>[korea-support-mcp-agent-instructions.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/korea-support-mcp-agent-instructions.md)<br>[uk-tender-mcp-agent-instructions.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/uk-tender-mcp-agent-instructions.md)<br>[uk-tender-mcp-product-plan.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/uk-tender-mcp-product-plan.md)<br>[scripts/verify-space-api-mcp-smoke.mjs](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/scripts/verify-space-api-mcp-smoke.mjs) |
| retrieval | 6 | [scripts/ingest-space-programs.mjs](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/scripts/ingest-space-programs.mjs)<br>[packages/shared/src/index.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/src/index.ts)<br>[data/space-ingest-report.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/data/space-ingest-report.json)<br>[apps/web/src/app/api/space-programs/ingest-report/route.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/src/app/api/space-programs/ingest-report/route.ts)<br>[apps/mcp/src/index.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/mcp/src/index.ts)<br>[apps/api/src/index.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/api/src/index.ts) |
| spec | 1 | [docs/web-ui-spec.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/web-ui-spec.md) |
| eval | 3 | [packages/shared/src/date-utils.test.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/src/date-utils.test.ts)<br>[packages/shared/src/space-search.test.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/src/space-search.test.ts)<br>[docs/web-ui-spec.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/web-ui-spec.md) |
| security | 0 | 명확하지 않음 |
| ci | 1 | [.github/workflows/verify-space.yml](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/.github/workflows/verify-space.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 15 | [README.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/README.md)<br>[docs/korea-space-data-sources.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/korea-space-data-sources.md)<br>[docs/korea-space-mcp-work-report.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/korea-space-mcp-work-report.md)<br>[docs/space-ingestion-runbook.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/space-ingestion-runbook.md)<br>[docs/space-mcp-handoff.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/space-mcp-handoff.md)<br>[docs/space-source-terms-review.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/space-source-terms-review.md)<br>[docs/uk-data-sources.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/uk-data-sources.md)<br>[docs/web-ui-spec.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/web-ui-spec.md) |
| config | 9 | [package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/package.json)<br>[packages/shared/package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/package.json)<br>[packages/shared/tsconfig.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/tsconfig.json)<br>[apps/web/package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/package.json)<br>[apps/web/tsconfig.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/web/tsconfig.json)<br>[apps/mcp/package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/mcp/package.json)<br>[apps/mcp/tsconfig.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/mcp/tsconfig.json)<br>[apps/api/package.json](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/apps/api/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 3 | [packages/shared/src/date-utils.test.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/src/date-utils.test.ts)<br>[packages/shared/src/space-search.test.ts](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/packages/shared/src/space-search.test.ts)<br>[docs/web-ui-spec.md](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/docs/web-ui-spec.md) |
| CI workflow | 1 | [.github/workflows/verify-space.yml](../../../../sources/AgentBridge-Lab__korea-space-support-mcp/.github/workflows/verify-space.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `korea-business-mcp-agent-instructions.md`, `korea-business-mcp-product-plan.md`, `korea-space-support-mcp-agent-instructions.md`.
2. entrypoint를 따라 실행 흐름 확인: `packages/shared/src/index.ts`, `apps/web/src/lib/api.server.ts`, `apps/web/src/lib/api.ts`.
3. retrieval/memory/indexing 확인: `scripts/ingest-space-programs.mjs`, `packages/shared/src/index.ts`, `data/space-ingest-report.json`.
4. test/eval 파일로 동작 검증: `packages/shared/src/date-utils.test.ts`, `packages/shared/src/space-search.test.ts`, `docs/web-ui-spec.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 한국 우주·항공·국방우주 정부 R&D 지원사업 공고 데이터셋 — 크롤러·분류기·MCP·REST API. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
