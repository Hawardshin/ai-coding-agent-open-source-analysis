# treesoop/hwp-mcp 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

MCP server for reading and writing HWP/HWPX (Korean Hangul) documents — built on rhwp. 34 tools, Claude/Cursor/ChatGPT compatible.

## 요약

- 조사 단위: `sources/treesoop__hwp-mcp` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 45 files, 9 directories, depth score 84, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md, docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md이고, 의존성 단서는 modelcontextprotocol, 검증/운영 단서는 test/eval 경로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | treesoop/hwp-mcp |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | TypeScript |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/treesoop__hwp-mcp](../../../../sources/treesoop__hwp-mcp) |
| 기존 보고서 | [reports/korea-trending/repositories/treesoop__hwp-mcp.md](../../../korea-trending/repositories/treesoop__hwp-mcp.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 45 / 9 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | docs, src, test |
| 상위 확장자 | .ts: 31, .hwp: 5, .json: 3, .md: 3, (none): 2, .hwpx: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 10 |
| docs | documentation surface | 6 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc -p tsconfig.json |
| serve-dev | package.json | start | node dist/server.js |
| serve-dev | package.json | dev | tsx src/server.ts |
| test | package.json | test | vitest run |
| test | package.json | test:watch | vitest |
| test | package.json | build:fixtures | tsx test/fixtures/build-fixtures.ts |
| test | package.json | prepublishOnly | npm run build && npm test |
| entrypoint | package.json bin | server.js | dist/server.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
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
| mcp | [docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md](../../../../sources/treesoop__hwp-mcp/docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md) | mcp signal |
| mcp | [docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md](../../../../sources/treesoop__hwp-mcp/docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md) | mcp signal |
| agentRuntime | [test/tools.advanced.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.advanced.test.ts) | agentRuntime signal |
| agentRuntime | [test/tools.edit.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.edit.test.ts) | agentRuntime signal |
| agentRuntime | [test/tools.images.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.images.test.ts) | agentRuntime signal |
| agentRuntime | [test/tools.read.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.read.test.ts) | agentRuntime signal |
| entrypoints | [test/server.bin-symlink.test.ts](../../../../sources/treesoop__hwp-mcp/test/server.bin-symlink.test.ts) | entrypoints signal |
| entrypoints | [test/server.smoke.test.ts](../../../../sources/treesoop__hwp-mcp/test/server.smoke.test.ts) | entrypoints signal |
| entrypoints | [src/server.ts](../../../../sources/treesoop__hwp-mcp/src/server.ts) | entrypoints signal |
| config | [package.json](../../../../sources/treesoop__hwp-mcp/package.json) | config signal |
| config | [tsconfig.json](../../../../sources/treesoop__hwp-mcp/tsconfig.json) | config signal |
| eval | [test/core.document.open.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.open.test.ts) | eval support |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [test/server.bin-symlink.test.ts](../../../../sources/treesoop__hwp-mcp/test/server.bin-symlink.test.ts)<br>[test/server.smoke.test.ts](../../../../sources/treesoop__hwp-mcp/test/server.smoke.test.ts)<br>[src/server.ts](../../../../sources/treesoop__hwp-mcp/src/server.ts) |
| agentRuntime | 15 | [test/tools.advanced.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.advanced.test.ts)<br>[test/tools.edit.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.edit.test.ts)<br>[test/tools.images.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.images.test.ts)<br>[test/tools.read.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.read.test.ts)<br>[test/tools.render.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.render.test.ts)<br>[test/tools.replace-image.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.replace-image.test.ts)<br>[test/tools.write.test.ts](../../../../sources/treesoop__hwp-mcp/test/tools.write.test.ts)<br>[src/tools/edit.ts](../../../../sources/treesoop__hwp-mcp/src/tools/edit.ts) |
| mcp | 2 | [docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md](../../../../sources/treesoop__hwp-mcp/docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md)<br>[docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md](../../../../sources/treesoop__hwp-mcp/docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md) |
| retrieval | 0 | 명확하지 않음 |
| spec | 1 | [docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md](../../../../sources/treesoop__hwp-mcp/docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md) |
| eval | 24 | [test/core.document.open.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.open.test.ts)<br>[test/core.document.walk-eq.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-eq.test.ts)<br>[test/core.document.walk-hf.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-hf.test.ts)<br>[test/core.document.walk-images.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-images.test.ts)<br>[test/core.document.walk-tables.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-tables.test.ts)<br>[test/core.document.walk-text.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-text.test.ts)<br>[test/core.hwpx-mutate.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.hwpx-mutate.test.ts)<br>[test/core.wasm-init.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.wasm-init.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 0 | 명확하지 않음 |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 3 | [README.md](../../../../sources/treesoop__hwp-mcp/README.md)<br>[docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md](../../../../sources/treesoop__hwp-mcp/docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md)<br>[docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md](../../../../sources/treesoop__hwp-mcp/docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md) |
| config | 2 | [package.json](../../../../sources/treesoop__hwp-mcp/package.json)<br>[tsconfig.json](../../../../sources/treesoop__hwp-mcp/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 24 | [test/core.document.open.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.open.test.ts)<br>[test/core.document.walk-eq.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-eq.test.ts)<br>[test/core.document.walk-hf.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-hf.test.ts)<br>[test/core.document.walk-images.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-images.test.ts)<br>[test/core.document.walk-tables.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-tables.test.ts)<br>[test/core.document.walk-text.test.ts](../../../../sources/treesoop__hwp-mcp/test/core.document.walk-text.test.ts) |
| CI workflow | 0 | 명확하지 않음 |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | CI workflow 경로가 명확하지 않음; container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음; agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/superpowers/specs/2026-04-29-hwp-mcp-rhwp-rebuild-design.md`, `docs/superpowers/plans/2026-04-29-hwp-mcp-rhwp-rebuild.md`, `test/tools.advanced.test.ts`.
2. entrypoint를 따라 실행 흐름 확인: `test/server.bin-symlink.test.ts`, `test/server.smoke.test.ts`, `src/server.ts`.
3. agent/tool runtime 매핑: `test/tools.advanced.test.ts`, `test/tools.edit.test.ts`, `test/tools.images.test.ts`.
4. test/eval 파일로 동작 검증: `test/core.document.open.test.ts`, `test/core.document.walk-eq.test.ts`, `test/core.document.walk-hf.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 MCP server for reading and writing HWP/HWPX Korean Hangul documents — built on rhwp. 34 tools, Claude/Cursor/ChatGPT com. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, tests이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 CI 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
