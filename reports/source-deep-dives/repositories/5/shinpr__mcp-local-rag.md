# shinpr/mcp-local-rag 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Local-first RAG server for developers. Semantic + keyword search for code and technical docs. Works with MCP or CLI. Fully private, zero setup.

## 요약

- 조사 단위: `sources/shinpr__mcp-local-rag` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 140 files, 35 directories, depth score 102, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=skills/mcp-local-rag/SKILL.md, skills/mcp-local-rag/references/cli-reference.md, skills/mcp-local-rag/references/html-ingestion.md이고, 의존성 단서는 modelcontextprotocol, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | shinpr/mcp-local-rag |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 317 |
| Forks | 57 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/shinpr__mcp-local-rag](../../../../sources/shinpr__mcp-local-rag) |
| 기존 보고서 | [reports/global-trending/repositories/shinpr__mcp-local-rag.md](../../../global-trending/repositories/shinpr__mcp-local-rag.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 140 / 35 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .github, .husky, assets, scripts, skills, src, tests |
| 상위 확장자 | .ts: 111, .md: 7, .json: 6, (none): 6, .mjs: 4, .yaml: 2, .docx: 1, .jpg: 1, .sh: 1, .yml: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 75 |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| scripts | top-level component | 1 |
| skills | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | tsc |
| serve-dev | package.json | start | node dist/index.js |
| serve-dev | package.json | dev | tsx src/index.ts |
| serve-dev | package.json | watch | tsx watch src/index.ts |
| quality | package.json | type-check | tsc --noEmit |
| test | package.json | type-check:test | tsc -p tsconfig.test.json |
| test | package.json | test | node scripts/run-vitest-with-device.mjs cpu run --exclude 'src/__tests__/e2e/visual-ingest-e2e.test.ts' |
| test | package.json | test:webgpu | pnpm run test:webgpu:main-path |
| test | package.json | test:webgpu:main-path | node scripts/run-vitest-with-device.mjs webgpu run src/server/__tests__/rag-server.embedding.integration.test.ts src/server/__tests__/rag-server.ingest.integration.test.ts src/server/__tests__/rag-server.search.integrati |
| test | package.json | test:webgpu:full | node scripts/run-vitest-with-device.mjs webgpu run --exclude 'src/__tests__/e2e/visual-ingest-e2e.test.ts' |
| test | package.json | test:watch | vitest |
| test | package.json | test:e2e | RUN_E2E=1 vitest run src/__tests__/e2e/visual-ingest-e2e.test.ts |
| quality | package.json | format | biome format --write src |
| quality | package.json | format:check | biome format src |
| quality | package.json | lint | biome lint src |
| quality | package.json | lint:fix | biome lint --write src |
| quality | package.json | check | biome check src |
| quality | package.json | check:fix | biome check --write src |
| quality | package.json | check:unused | knip --include exports |
| test | package.json | check:deps | dpdm --no-tree --no-warning --exit-code circular:1 -T --tsconfig ./tsconfig.json --exclude "(node_modules\|__tests__\|\.test\.ts$\|\.spec\.ts$)" "src/**/*.ts" |
| test | package.json | check:all | pnpm run check && pnpm run lint && pnpm run format:check && pnpm run check:unused && pnpm run check:deps && pnpm run build && pnpm run type-check:test && pnpm run test |
| test | package.json | cleanup:processes | bash ./scripts/cleanup-test-processes.sh |
| test | package.json | test:safe | pnpm test && pnpm run cleanup:processes |
| utility | package.json | prepare | husky |
| entrypoint | package.json bin | index.js | dist/index.js |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | modelcontextprotocol |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | transformers |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [skills/mcp-local-rag/SKILL.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/SKILL.md) | mcp signal |
| mcp | [skills/mcp-local-rag/references/cli-reference.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/cli-reference.md) | mcp signal |
| mcp | [skills/mcp-local-rag/references/html-ingestion.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/html-ingestion.md) | mcp signal |
| mcp | [skills/mcp-local-rag/references/query-optimization.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/query-optimization.md) | mcp signal |
| agentRuntime | [src/server/tool-definitions.ts](../../../../sources/shinpr__mcp-local-rag/src/server/tool-definitions.ts) | agentRuntime signal |
| agentRuntime | [src/server/tool-input.ts](../../../../sources/shinpr__mcp-local-rag/src/server/tool-input.ts) | agentRuntime signal |
| agentRuntime | [src/server/__tests__/tool-input.test.ts](../../../../sources/shinpr__mcp-local-rag/src/server/__tests__/tool-input.test.ts) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/shinpr__mcp-local-rag/server.json) | entrypoints signal |
| entrypoints | [src/index.ts](../../../../sources/shinpr__mcp-local-rag/src/index.ts) | entrypoints signal |
| entrypoints | [src/bin/install-skills.ts](../../../../sources/shinpr__mcp-local-rag/src/bin/install-skills.ts) | entrypoints signal |
| config | [package.json](../../../../sources/shinpr__mcp-local-rag/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/shinpr__mcp-local-rag/pnpm-workspace.yaml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [server.json](../../../../sources/shinpr__mcp-local-rag/server.json)<br>[src/index.ts](../../../../sources/shinpr__mcp-local-rag/src/index.ts)<br>[src/bin/install-skills.ts](../../../../sources/shinpr__mcp-local-rag/src/bin/install-skills.ts) |
| agentRuntime | 8 | [src/server/tool-definitions.ts](../../../../sources/shinpr__mcp-local-rag/src/server/tool-definitions.ts)<br>[src/server/tool-input.ts](../../../../sources/shinpr__mcp-local-rag/src/server/tool-input.ts)<br>[src/server/__tests__/tool-input.test.ts](../../../../sources/shinpr__mcp-local-rag/src/server/__tests__/tool-input.test.ts)<br>[skills/mcp-local-rag/SKILL.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/SKILL.md)<br>[skills/mcp-local-rag/references/cli-reference.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/cli-reference.md)<br>[skills/mcp-local-rag/references/html-ingestion.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/html-ingestion.md)<br>[skills/mcp-local-rag/references/query-optimization.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/query-optimization.md)<br>[skills/mcp-local-rag/references/result-refinement.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/result-refinement.md) |
| mcp | 5 | [skills/mcp-local-rag/SKILL.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/SKILL.md)<br>[skills/mcp-local-rag/references/cli-reference.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/cli-reference.md)<br>[skills/mcp-local-rag/references/html-ingestion.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/html-ingestion.md)<br>[skills/mcp-local-rag/references/query-optimization.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/query-optimization.md)<br>[skills/mcp-local-rag/references/result-refinement.md](../../../../sources/shinpr__mcp-local-rag/skills/mcp-local-rag/references/result-refinement.md) |
| retrieval | 35 | [src/index.ts](../../../../sources/shinpr__mcp-local-rag/src/index.ts)<br>[src/vectordb/index.ts](../../../../sources/shinpr__mcp-local-rag/src/vectordb/index.ts)<br>[src/server/index.ts](../../../../sources/shinpr__mcp-local-rag/src/server/index.ts)<br>[src/server/__tests__/ingest-rollback.test.ts](../../../../sources/shinpr__mcp-local-rag/src/server/__tests__/ingest-rollback.test.ts)<br>[src/server/__tests__/rag-server.config.test.ts](../../../../sources/shinpr__mcp-local-rag/src/server/__tests__/rag-server.config.test.ts)<br>[src/server/__tests__/rag-server.delete.integration.test.ts](../../../../sources/shinpr__mcp-local-rag/src/server/__tests__/rag-server.delete.integration.test.ts)<br>[src/server/__tests__/rag-server.dispatcher-mapping.test.ts](../../../../sources/shinpr__mcp-local-rag/src/server/__tests__/rag-server.dispatcher-mapping.test.ts)<br>[src/server/__tests__/rag-server.dtype-pdf-regression.test.ts](../../../../sources/shinpr__mcp-local-rag/src/server/__tests__/rag-server.dtype-pdf-regression.test.ts) |
| spec | 0 | 명확하지 않음 |
| eval | 68 | [tsconfig.test.json](../../../../sources/shinpr__mcp-local-rag/tsconfig.test.json)<br>[tests/fixtures/sample-e2e.docx](../../../../sources/shinpr__mcp-local-rag/tests/fixtures/sample-e2e.docx)<br>[src/vectordb/__tests__/search-filters.test.ts](../../../../sources/shinpr__mcp-local-rag/src/vectordb/__tests__/search-filters.test.ts)<br>[src/vectordb/__tests__/vectordb.test.ts](../../../../sources/shinpr__mcp-local-rag/src/vectordb/__tests__/vectordb.test.ts)<br>[src/utils/__tests__/base-dirs-resolver.test.ts](../../../../sources/shinpr__mcp-local-rag/src/utils/__tests__/base-dirs-resolver.test.ts)<br>[src/utils/__tests__/base-dirs.test.ts](../../../../sources/shinpr__mcp-local-rag/src/utils/__tests__/base-dirs.test.ts)<br>[src/utils/__tests__/errors.test.ts](../../../../sources/shinpr__mcp-local-rag/src/utils/__tests__/errors.test.ts)<br>[src/utils/__tests__/sensitive-path.test.ts](../../../../sources/shinpr__mcp-local-rag/src/utils/__tests__/sensitive-path.test.ts) |
| security | 1 | [src/__tests__/security/security.test.ts](../../../../sources/shinpr__mcp-local-rag/src/__tests__/security/security.test.ts) |
| ci | 1 | [.github/workflows/ci.yml](../../../../sources/shinpr__mcp-local-rag/.github/workflows/ci.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 1 | [README.md](../../../../sources/shinpr__mcp-local-rag/README.md) |
| config | 3 | [package.json](../../../../sources/shinpr__mcp-local-rag/package.json)<br>[pnpm-workspace.yaml](../../../../sources/shinpr__mcp-local-rag/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/shinpr__mcp-local-rag/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 68 | [tsconfig.test.json](../../../../sources/shinpr__mcp-local-rag/tsconfig.test.json)<br>[tests/fixtures/sample-e2e.docx](../../../../sources/shinpr__mcp-local-rag/tests/fixtures/sample-e2e.docx)<br>[src/vectordb/__tests__/search-filters.test.ts](../../../../sources/shinpr__mcp-local-rag/src/vectordb/__tests__/search-filters.test.ts)<br>[src/vectordb/__tests__/vectordb.test.ts](../../../../sources/shinpr__mcp-local-rag/src/vectordb/__tests__/vectordb.test.ts)<br>[src/utils/__tests__/base-dirs-resolver.test.ts](../../../../sources/shinpr__mcp-local-rag/src/utils/__tests__/base-dirs-resolver.test.ts)<br>[src/utils/__tests__/base-dirs.test.ts](../../../../sources/shinpr__mcp-local-rag/src/utils/__tests__/base-dirs.test.ts) |
| CI workflow | 1 | [.github/workflows/ci.yml](../../../../sources/shinpr__mcp-local-rag/.github/workflows/ci.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 1 | [src/__tests__/security/security.test.ts](../../../../sources/shinpr__mcp-local-rag/src/__tests__/security/security.test.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `skills/mcp-local-rag/SKILL.md`, `skills/mcp-local-rag/references/cli-reference.md`, `skills/mcp-local-rag/references/html-ingestion.md`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `src/index.ts`, `src/bin/install-skills.ts`.
3. agent/tool runtime 매핑: `src/server/tool-definitions.ts`, `src/server/tool-input.ts`, `src/server/__tests__/tool-input.test.ts`.
4. retrieval/memory/indexing 확인: `src/index.ts`, `src/vectordb/index.ts`, `src/server/index.ts`.
5. test/eval 파일로 동작 검증: `tsconfig.test.json`, `tests/fixtures/sample-e2e.docx`, `src/vectordb/__tests__/search-filters.test.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Local first RAG server for developers. Semantic + keyword search for code and technical docs. Works with MCP or CLI. Ful. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, modelcontextprotocol, transformers이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
