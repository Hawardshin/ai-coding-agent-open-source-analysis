# joungminsung/OpenDocuments 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Self-hosted RAG platform for AI document search across GitHub, Notion, Google Drive, local files, and web sources with citations.

## 요약

- 조사 단위: `sources/joungminsung__OpenDocuments` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 454 files, 172 directories, depth score 119, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 retrieval=plugins/parser-xlsx/src/index.ts, plugins/parser-pptx/src/index.ts, plugins/parser-pdf/src/index.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | joungminsung/OpenDocuments |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | TypeScript |
| Stars | 80 |
| Forks | 13 |
| License | MIT |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/joungminsung__OpenDocuments](../../../../sources/joungminsung__OpenDocuments) |
| 기존 보고서 | [reports/korea-trending/repositories/joungminsung__OpenDocuments.md](../../../korea-trending/repositories/joungminsung__OpenDocuments.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 454 / 172 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .changeset, .github, assets, docs, docs-site, packages, plugins, templates |
| 상위 확장자 | .ts: 274, .json: 74, .md: 54, .tsx: 21, .sql: 6, .svg: 6, .yml: 6, (none): 3, .css: 2, .txt: 2, .gif: 1, .html: 1 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/core | packages workspace | 27 |
| packages/server | packages workspace | 18 |
| docs | documentation surface | 5 |
| packages/web | packages workspace | 5 |
| packages/cli | packages workspace | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| docs-site | documentation surface | 1 |
| packages | source boundary | 1 |
| packages/client | packages workspace | 1 |
| plugins | top-level component | 1 |
| templates | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | setup | npm install && npm run build && echo 'Setup complete. Run: npm run test' |
| build | package.json | build | turbo build |
| test | package.json | test | turbo test |
| quality | package.json | lint | turbo lint |
| quality | package.json | typecheck | turbo typecheck |
| serve-dev | package.json | dev | turbo dev |
| utility | package.json | clean | turbo clean |


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
| retrieval | [plugins/parser-xlsx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/src/index.ts) | retrieval signal |
| retrieval | [plugins/parser-pptx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/src/index.ts) | retrieval signal |
| retrieval | [plugins/parser-pdf/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/src/index.ts) | retrieval signal |
| retrieval | [plugins/parser-jupyter/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-jupyter/src/index.ts) | retrieval signal |
| docs | [README.ko.md](../../../../sources/joungminsung__OpenDocuments/README.ko.md) | docs signal |
| docs | [README.md](../../../../sources/joungminsung__OpenDocuments/README.md) | docs signal |
| docs | [templates/README.md](../../../../sources/joungminsung__OpenDocuments/templates/README.md) | docs signal |
| docs | [packages/cli/README.md](../../../../sources/joungminsung__OpenDocuments/packages/cli/README.md) | docs signal |
| eval | [plugins/parser-xlsx/tests/xlsx.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/tests/xlsx.test.ts) | eval signal |
| eval | [plugins/parser-pptx/tests/pptx.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/tests/pptx.test.ts) | eval signal |
| eval | [plugins/parser-pdf/tests/pdf.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/tests/pdf.test.ts) | eval signal |
| eval | [plugins/parser-jupyter/tests/jupyter.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-jupyter/tests/jupyter.test.ts) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 37 | [plugins/parser-xlsx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/src/index.ts)<br>[plugins/parser-pptx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/src/index.ts)<br>[plugins/parser-pdf/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/src/index.ts)<br>[plugins/parser-jupyter/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-jupyter/src/index.ts)<br>[plugins/parser-html/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-html/src/index.ts)<br>[plugins/parser-email/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-email/src/index.ts)<br>[plugins/parser-docx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-docx/src/index.ts)<br>[plugins/parser-code/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-code/src/index.ts) |
| agentRuntime | 5 | [packages/core/tests/rag/context-window.test.ts](../../../../sources/joungminsung__OpenDocuments/packages/core/tests/rag/context-window.test.ts)<br>[packages/core/tests/plugin/sandbox.test.ts](../../../../sources/joungminsung__OpenDocuments/packages/core/tests/plugin/sandbox.test.ts)<br>[packages/core/src/storage/migrations/runner.ts](../../../../sources/joungminsung__OpenDocuments/packages/core/src/storage/migrations/runner.ts)<br>[packages/core/src/rag/context-window.ts](../../../../sources/joungminsung__OpenDocuments/packages/core/src/rag/context-window.ts)<br>[packages/core/src/plugin/sandbox.ts](../../../../sources/joungminsung__OpenDocuments/packages/core/src/plugin/sandbox.ts) |
| mcp | 3 | [packages/server/tests/mcp/server.test.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/tests/mcp/server.test.ts)<br>[packages/server/src/mcp/server.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/src/mcp/server.ts)<br>[docs-site/guide/mcp-knowledge-base.md](../../../../sources/joungminsung__OpenDocuments/docs-site/guide/mcp-knowledge-base.md) |
| retrieval | 99 | [plugins/parser-xlsx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/src/index.ts)<br>[plugins/parser-pptx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/src/index.ts)<br>[plugins/parser-pdf/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/src/index.ts)<br>[plugins/parser-jupyter/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-jupyter/src/index.ts)<br>[plugins/parser-html/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-html/src/index.ts)<br>[plugins/parser-email/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-email/src/index.ts)<br>[plugins/parser-docx/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-docx/src/index.ts)<br>[plugins/parser-code/src/index.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-code/src/index.ts) |
| spec | 3 | [docs-site/guide/architecture.md](../../../../sources/joungminsung__OpenDocuments/docs-site/guide/architecture.md)<br>[docs/architecture.ko.md](../../../../sources/joungminsung__OpenDocuments/docs/architecture.ko.md)<br>[docs/architecture.md](../../../../sources/joungminsung__OpenDocuments/docs/architecture.md) |
| eval | 92 | [plugins/parser-xlsx/tests/xlsx.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/tests/xlsx.test.ts)<br>[plugins/parser-pptx/tests/pptx.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/tests/pptx.test.ts)<br>[plugins/parser-pdf/tests/pdf.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/tests/pdf.test.ts)<br>[plugins/parser-jupyter/tests/jupyter.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-jupyter/tests/jupyter.test.ts)<br>[plugins/parser-html/tests/html.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-html/tests/html.test.ts)<br>[plugins/parser-email/tests/email.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-email/tests/email.test.ts)<br>[plugins/parser-docx/tests/docx.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-docx/tests/docx.test.ts)<br>[plugins/parser-code/tests/code.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-code/tests/code.test.ts) |
| security | 19 | [SECURITY.md](../../../../sources/joungminsung__OpenDocuments/SECURITY.md)<br>[packages/web/src/lib/auth.ts](../../../../sources/joungminsung__OpenDocuments/packages/web/src/lib/auth.ts)<br>[packages/web/src/components/auth/LoginPage.tsx](../../../../sources/joungminsung__OpenDocuments/packages/web/src/components/auth/LoginPage.tsx)<br>[packages/server/tests/http/auth.test.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/tests/http/auth.test.ts)<br>[packages/server/src/http/routes/auth-routes.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/src/http/routes/auth-routes.ts)<br>[packages/server/src/http/middleware/auth.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/src/http/middleware/auth.ts)<br>[packages/core/tests/security/alerts.test.ts](../../../../sources/joungminsung__OpenDocuments/packages/core/tests/security/alerts.test.ts)<br>[packages/core/tests/security/audit.test.ts](../../../../sources/joungminsung__OpenDocuments/packages/core/tests/security/audit.test.ts) |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/joungminsung__OpenDocuments/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/joungminsung__OpenDocuments/.github/workflows/docs.yml) |
| container | 2 | [docker-compose.yml](../../../../sources/joungminsung__OpenDocuments/docker-compose.yml)<br>[Dockerfile](../../../../sources/joungminsung__OpenDocuments/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 6 | [README.ko.md](../../../../sources/joungminsung__OpenDocuments/README.ko.md)<br>[README.md](../../../../sources/joungminsung__OpenDocuments/README.md)<br>[templates/README.md](../../../../sources/joungminsung__OpenDocuments/templates/README.md)<br>[packages/cli/README.md](../../../../sources/joungminsung__OpenDocuments/packages/cli/README.md)<br>[docs/architecture.ko.md](../../../../sources/joungminsung__OpenDocuments/docs/architecture.ko.md)<br>[docs/architecture.md](../../../../sources/joungminsung__OpenDocuments/docs/architecture.md) |
| config | 69 | [package.json](../../../../sources/joungminsung__OpenDocuments/package.json)<br>[turbo.json](../../../../sources/joungminsung__OpenDocuments/turbo.json)<br>[plugins/parser-xlsx/package.json](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/package.json)<br>[plugins/parser-xlsx/tsconfig.json](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/tsconfig.json)<br>[plugins/parser-pptx/package.json](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/package.json)<br>[plugins/parser-pptx/tsconfig.json](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/tsconfig.json)<br>[plugins/parser-pdf/package.json](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/package.json)<br>[plugins/parser-pdf/tsconfig.json](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 92 | [plugins/parser-xlsx/tests/xlsx.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-xlsx/tests/xlsx.test.ts)<br>[plugins/parser-pptx/tests/pptx.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pptx/tests/pptx.test.ts)<br>[plugins/parser-pdf/tests/pdf.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-pdf/tests/pdf.test.ts)<br>[plugins/parser-jupyter/tests/jupyter.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-jupyter/tests/jupyter.test.ts)<br>[plugins/parser-html/tests/html.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-html/tests/html.test.ts)<br>[plugins/parser-email/tests/email.test.ts](../../../../sources/joungminsung__OpenDocuments/plugins/parser-email/tests/email.test.ts) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/joungminsung__OpenDocuments/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/joungminsung__OpenDocuments/.github/workflows/docs.yml) |
| 컨테이너/배포 | 2 | [docker-compose.yml](../../../../sources/joungminsung__OpenDocuments/docker-compose.yml)<br>[Dockerfile](../../../../sources/joungminsung__OpenDocuments/Dockerfile) |
| 보안/정책 | 19 | [SECURITY.md](../../../../sources/joungminsung__OpenDocuments/SECURITY.md)<br>[packages/web/src/lib/auth.ts](../../../../sources/joungminsung__OpenDocuments/packages/web/src/lib/auth.ts)<br>[packages/web/src/components/auth/LoginPage.tsx](../../../../sources/joungminsung__OpenDocuments/packages/web/src/components/auth/LoginPage.tsx)<br>[packages/server/tests/http/auth.test.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/tests/http/auth.test.ts)<br>[packages/server/src/http/routes/auth-routes.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/src/http/routes/auth-routes.ts)<br>[packages/server/src/http/middleware/auth.ts](../../../../sources/joungminsung__OpenDocuments/packages/server/src/http/middleware/auth.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `plugins/parser-xlsx/src/index.ts`, `plugins/parser-pptx/src/index.ts`, `plugins/parser-pdf/src/index.ts`.
2. entrypoint를 따라 실행 흐름 확인: `plugins/parser-xlsx/src/index.ts`, `plugins/parser-pptx/src/index.ts`, `plugins/parser-pdf/src/index.ts`.
3. agent/tool runtime 매핑: `packages/core/tests/rag/context-window.test.ts`, `packages/core/tests/plugin/sandbox.test.ts`, `packages/core/src/storage/migrations/runner.ts`.
4. retrieval/memory/indexing 확인: `plugins/parser-xlsx/src/index.ts`, `plugins/parser-pptx/src/index.ts`, `plugins/parser-pdf/src/index.ts`.
5. test/eval 파일로 동작 검증: `plugins/parser-xlsx/tests/xlsx.test.ts`, `plugins/parser-pptx/tests/pptx.test.ts`, `plugins/parser-pdf/tests/pdf.test.ts`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Self hosted RAG platform for AI document search across GitHub, Notion, Google Drive, local files, and web sources with c. 핵심 구조 신호는 TypeScript, package.json, Dockerfile, docker-compose.yml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 더 깊은 구조 스캔 필요입니다.
