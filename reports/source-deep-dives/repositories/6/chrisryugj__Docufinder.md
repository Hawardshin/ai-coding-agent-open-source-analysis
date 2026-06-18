# chrisryugj/Docufinder 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

Anything — 파일을 찾지 말고, 내용을 찾으세요. HWPX · PDF · Office 수천 건의 본문을 1초 만에. 100% 로컬 · 완전 오프라인 · AI Q&A 옵션 (Tauri · React · Rust) | Local content search for Korean PCs — HWP-first, fully offline

## 요약

- 조사 단위: `sources/chrisryugj__Docufinder` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 356 files, 65 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=index.html, src-tauri/src/search/vector.rs, src-tauri/src/indexer/vector_worker.rs이고, 의존성 단서는 react, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | chrisryugj/Docufinder |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | korea |
| Language | Rust |
| Stars | 없음 |
| Forks | 없음 |
| License | 없음 |
| 성숙도 | 초기 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/chrisryugj__Docufinder](../../../../sources/chrisryugj__Docufinder) |
| 기존 보고서 | [reports/korea-trending/repositories/chrisryugj__Docufinder.md](../../../korea-trending/repositories/chrisryugj__Docufinder.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 356 / 65 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, docs, promo-video, public, scripts, src, src-tauri |
| 상위 확장자 | .rs: 105, .tsx: 72, .ts: 57, .png: 54, .json: 14, .md: 8, .ps1: 7, .css: 6, .bmp: 2, .onnx: 2, .py: 2, .sh: 2 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, ui/extension surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 44 |
| docs | documentation surface | 4 |
| .github | ci surface | 1 |
| promo-video | top-level component | 1 |
| public | top-level component | 1 |
| scripts | top-level component | 1 |
| src-tauri | source boundary | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| serve-dev | package.json | dev | vite |
| serve-dev | package.json | build | tsc && vite build |
| serve-dev | package.json | preview | vite preview |
| utility | package.json | tauri | tauri |
| serve-dev | package.json | tauri:dev | set WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS=--no-proxy-server --disable-background-networking --disable-features=msSmartScreenProtection&& tauri dev |
| serve-dev | package.json | tauri:dev:mac | tauri dev |
| utility | package.json | download-model | powershell -File scripts/download-model.ps1 |
| build | package.json | download-vcredist | powershell -File scripts/download-vcredist.ps1 |
| build | package.json | bundle-kordoc | powershell -ExecutionPolicy Bypass -File scripts/bundle-kordoc.ps1 |
| utility | package.json | setup-mac-resources | bash scripts/setup-macos-resources.sh |
| build | package.json | tauri:build | pnpm run download-vcredist && pnpm run download-model && pnpm run bundle-kordoc && tauri build |
| build | package.json | tauri:build:mac | pnpm run setup-mac-resources && tauri build --target aarch64-apple-darwin |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | 없음 |
| webRuntime | react |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| retrieval | [index.html](../../../../sources/chrisryugj__Docufinder/index.html) | retrieval signal |
| retrieval | [src-tauri/src/search/vector.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/search/vector.rs) | retrieval signal |
| retrieval | [src-tauri/src/indexer/vector_worker.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/indexer/vector_worker.rs) | retrieval signal |
| retrieval | [src-tauri/src/commands/index/batch.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/commands/index/batch.rs) | retrieval signal |
| entrypoints | [src-tauri/src/main.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/main.rs) | entrypoints signal |
| entrypoints | [src/App.tsx](../../../../sources/chrisryugj__Docufinder/src/App.tsx) | entrypoints signal |
| entrypoints | [src/index.css](../../../../sources/chrisryugj__Docufinder/src/index.css) | entrypoints signal |
| entrypoints | [src/main.tsx](../../../../sources/chrisryugj__Docufinder/src/main.tsx) | entrypoints signal |
| docs | [README.md](../../../../sources/chrisryugj__Docufinder/README.md) | docs signal |
| docs | [docs/MAC_PORT_PLAN.md](../../../../sources/chrisryugj__Docufinder/docs/MAC_PORT_PLAN.md) | docs signal |
| docs | [docs/PROD_REVIEW_v2.6.8.md](../../../../sources/chrisryugj__Docufinder/docs/PROD_REVIEW_v2.6.8.md) | docs signal |
| docs | [docs/promo.gif](../../../../sources/chrisryugj__Docufinder/docs/promo.gif) | docs signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 5 | [src-tauri/src/main.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/main.rs)<br>[src/App.tsx](../../../../sources/chrisryugj__Docufinder/src/App.tsx)<br>[src/index.css](../../../../sources/chrisryugj__Docufinder/src/index.css)<br>[src/main.tsx](../../../../sources/chrisryugj__Docufinder/src/main.tsx)<br>[promo-video/src/index.ts](../../../../sources/chrisryugj__Docufinder/promo-video/src/index.ts) |
| agentRuntime | 31 | [src/hooks/index.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/index.ts)<br>[src/hooks/useAiAnswer.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/useAiAnswer.ts)<br>[src/hooks/useAppEvents.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/useAppEvents.ts)<br>[src/hooks/useAppSettings.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/useAppSettings.ts)<br>[src/hooks/useBookmarks.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/useBookmarks.ts)<br>[src/hooks/useCollapsibleSearch.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/useCollapsibleSearch.ts)<br>[src/hooks/useDocumentCategories.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/useDocumentCategories.ts)<br>[src/hooks/useExport.ts](../../../../sources/chrisryugj__Docufinder/src/hooks/useExport.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 19 | [index.html](../../../../sources/chrisryugj__Docufinder/index.html)<br>[src-tauri/src/search/vector.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/search/vector.rs)<br>[src-tauri/src/indexer/vector_worker.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/indexer/vector_worker.rs)<br>[src-tauri/src/commands/index/batch.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/commands/index/batch.rs)<br>[src-tauri/src/commands/index/data.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/commands/index/data.rs)<br>[src-tauri/src/commands/index/folder.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/commands/index/folder.rs)<br>[src-tauri/src/commands/index/init.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/commands/index/init.rs)<br>[src-tauri/src/commands/index/mod.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/commands/index/mod.rs) |
| spec | 1 | [DESIGN.md](../../../../sources/chrisryugj__Docufinder/DESIGN.md) |
| eval | 5 | [src-tauri/tests/parser_tests.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/parser_tests.rs)<br>[src-tauri/tests/xls_neis_integration.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/xls_neis_integration.rs)<br>[src-tauri/tests/fixtures/real_filenames.list](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/fixtures/real_filenames.list)<br>[src-tauri/tests/fixtures/sample.txt](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/fixtures/sample.txt)<br>[src-tauri/src/search/nl_query/tests.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/search/nl_query/tests.rs) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/chrisryugj__Docufinder/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/chrisryugj__Docufinder/.github/workflows/publish.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 1 | [CLAUDE.md](../../../../sources/chrisryugj__Docufinder/CLAUDE.md) |
| docs | 4 | [README.md](../../../../sources/chrisryugj__Docufinder/README.md)<br>[docs/MAC_PORT_PLAN.md](../../../../sources/chrisryugj__Docufinder/docs/MAC_PORT_PLAN.md)<br>[docs/PROD_REVIEW_v2.6.8.md](../../../../sources/chrisryugj__Docufinder/docs/PROD_REVIEW_v2.6.8.md)<br>[docs/promo.gif](../../../../sources/chrisryugj__Docufinder/docs/promo.gif) |
| config | 6 | [package.json](../../../../sources/chrisryugj__Docufinder/package.json)<br>[tsconfig.json](../../../../sources/chrisryugj__Docufinder/tsconfig.json)<br>[src-tauri/Cargo.lock](../../../../sources/chrisryugj__Docufinder/src-tauri/Cargo.lock)<br>[src-tauri/Cargo.toml](../../../../sources/chrisryugj__Docufinder/src-tauri/Cargo.toml)<br>[promo-video/package.json](../../../../sources/chrisryugj__Docufinder/promo-video/package.json)<br>[promo-video/tsconfig.json](../../../../sources/chrisryugj__Docufinder/promo-video/tsconfig.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 5 | [src-tauri/tests/parser_tests.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/parser_tests.rs)<br>[src-tauri/tests/xls_neis_integration.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/xls_neis_integration.rs)<br>[src-tauri/tests/fixtures/real_filenames.list](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/fixtures/real_filenames.list)<br>[src-tauri/tests/fixtures/sample.txt](../../../../sources/chrisryugj__Docufinder/src-tauri/tests/fixtures/sample.txt)<br>[src-tauri/src/search/nl_query/tests.rs](../../../../sources/chrisryugj__Docufinder/src-tauri/src/search/nl_query/tests.rs) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/chrisryugj__Docufinder/.github/workflows/ci.yml)<br>[.github/workflows/publish.yml](../../../../sources/chrisryugj__Docufinder/.github/workflows/publish.yml) |
| 컨테이너/배포 | 0 | 명확하지 않음 |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 1 | [CLAUDE.md](../../../../sources/chrisryugj__Docufinder/CLAUDE.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | container/deploy 경로가 명확하지 않음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `index.html`, `src-tauri/src/search/vector.rs`, `src-tauri/src/indexer/vector_worker.rs`.
2. entrypoint를 따라 실행 흐름 확인: `src-tauri/src/main.rs`, `src/App.tsx`, `src/index.css`.
3. agent/tool runtime 매핑: `src/hooks/index.ts`, `src/hooks/useAiAnswer.ts`, `src/hooks/useAppEvents.ts`.
4. retrieval/memory/indexing 확인: `index.html`, `src-tauri/src/search/vector.rs`, `src-tauri/src/indexer/vector_worker.rs`.
5. test/eval 파일로 동작 검증: `src-tauri/tests/parser_tests.rs`, `src-tauri/tests/xls_neis_integration.rs`, `src-tauri/tests/fixtures/real_filenames.list`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Anything — 파일을 찾지 말고, 내용을 찾으세요. HWPX · PDF · Office 수천 건의 본문을 1초 만에. 100% 로컬 · 완전 오프라인 · AI Q&A 옵션 Tauri · React · Rust . 핵심 구조 신호는 Rust, package.json, README.md, CLAUDE.md, LICENSE, react이며, 소스+보고서 근거 수준으로 초기 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
