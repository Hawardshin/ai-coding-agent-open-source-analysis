# manojmallick/sigmap 소스 딥다이브

생성 시각: 2026-06-18T15:43:32.234Z

97% token reduction for AI coding sessions — zero deps, 31 languages, MCP server

## 요약

- 조사 단위: `sources/manojmallick__sigmap` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 477 files, 64 directories, depth score 123, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=test/regression/mcp-tools-comprehensive.js, test/integration/mcp/get-lines.test.js, test/integration/mcp/register.test.js이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임, 에이전트 지시문 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | manojmallick/sigmap |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | JavaScript |
| Stars | 513 |
| Forks | 36 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/manojmallick__sigmap](../../../../sources/manojmallick__sigmap) |
| 기존 보고서 | [reports/global-trending/repositories/manojmallick__sigmap.md](../../../global-trending/repositories/manojmallick__sigmap.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 477 / 64 |
| 관측 최대 깊이 | 5 |
| 상위 디렉터리 | .claude, .github, assets, benchmarks, docs, docs-vp, examples, packages, scripts, src, test, tests |
| 상위 확장자 | .js: 228, .md: 72, .txt: 31, .html: 22, .mjs: 21, .jsonl: 19, .json: 17, .yml: 13, (none): 11, .gif: 4, .r: 4, .sh: 4 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 44 |
| src | source boundary | 20 |
| packages/core | packages workspace | 3 |
| packages/cli | packages workspace | 2 |
| tests | validation surface | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| docs-vp | documentation surface | 1 |
| examples | top-level component | 1 |
| packages | source boundary | 1 |
| packages/adapters | packages workspace | 1 |
| scripts | top-level component | 1 |
| test | validation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| test | package.json | test | node test/run.js && node test/r-language.test.js |
| test | package.json | test:integration | node test/integration/strategy.test.js && node test/integration/secret-scan.test.js && node test/integration/token-budget.test.js && node test/integration/auto-budget.test.js && node test/integration/mcp/server.test.js & |
| test | package.json | test:integration:all | node test/integration/all.js |
| test | package.json | test:all | node test/run.js && node test/r-language.test.js && node test/integration/strategy.test.js && node test/integration/secret-scan.test.js |
| utility | package.json | generate | node gen-context.js |
| serve-dev | package.json | watch | node gen-context.js --watch |
| utility | package.json | setup | node gen-context.js --setup |
| utility | package.json | init | node gen-context.js --init |
| utility | package.json | report | node gen-context.js --report |
| utility | package.json | audit:strategies | node scripts/run-strategy-audit.mjs |
| utility | package.json | benchmark:matrix | node scripts/run-benchmark-matrix.mjs --save --skip-clone |
| utility | package.json | benchmark:verify | node scripts/run-verify-benchmark.mjs |
| utility | package.json | benchmark:squeeze | node scripts/run-squeeze-benchmark.mjs --save |
| utility | package.json | validate:squeeze | node scripts/run-squeeze-benchmark.mjs --gate |
| utility | package.json | health | node gen-context.js --health |
| utility | package.json | map | node gen-project-map.js |
| utility | package.json | mcp | node gen-context.js --mcp |
| build | package.json | check:bundle | node scripts/check-bundle.mjs |
| quality | package.json | check:version-meta | node scripts/check-version-meta.mjs |
| build | package.json | build:binary | node scripts/build-binary.mjs |
| utility | package.json | verify:binary | node scripts/verify-binary.mjs |
| utility | package.json | version:sync | node scripts/sync-versions.mjs |
| utility | package.json | generate:llms | node scripts/generate-llms.mjs |
| utility | package.json | validate:llms | node scripts/validate-llms.mjs |
| build | package.json | prepublishOnly | node scripts/check-bundle.mjs && node scripts/check-version-meta.mjs && node scripts/generate-llms.mjs |
| utility | package.json | benchmark:grounding | node scripts/run-hallucination-benchmark.mjs |
| utility | package.json | benchmark:llm-ablation | node scripts/run-llm-ablation.mjs |
| entrypoint | package.json bin | gen-context.js | ./gen-context.js |
| entrypoint | package.json bin | gen-context.js | ./gen-context.js |
| entrypoint | package.json bin | gen-project-map.js | ./gen-project-map.js |


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
| mcp | [test/regression/mcp-tools-comprehensive.js](../../../../sources/manojmallick__sigmap/test/regression/mcp-tools-comprehensive.js) | mcp signal |
| mcp | [test/integration/mcp/get-lines.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/get-lines.test.js) | mcp signal |
| mcp | [test/integration/mcp/register.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/register.test.js) | mcp signal |
| mcp | [test/integration/mcp/server.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/server.test.js) | mcp signal |
| agentRuntime | [AGENTS.md](../../../../sources/manojmallick__sigmap/AGENTS.md) | agentRuntime signal |
| agentRuntime | [test/integration/context-consistency.test.js](../../../../sources/manojmallick__sigmap/test/integration/context-consistency.test.js) | agentRuntime signal |
| agentRuntime | [test/integration/memory-tools.test.js](../../../../sources/manojmallick__sigmap/test/integration/memory-tools.test.js) | agentRuntime signal |
| agentRuntime | [test/integration/mcp/tools-v14.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/tools-v14.test.js) | agentRuntime signal |
| entrypoints | [test/fixtures/binary-smoke/src/index.js](../../../../sources/manojmallick__sigmap/test/fixtures/binary-smoke/src/index.js) | entrypoints signal |
| entrypoints | [src/mcp/server.js](../../../../sources/manojmallick__sigmap/src/mcp/server.js) | entrypoints signal |
| instruction | [docs-vp/guide/agents.md](../../../../sources/manojmallick__sigmap/docs-vp/guide/agents.md) | instruction signal |
| config | [package.json](../../../../sources/manojmallick__sigmap/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [test/integration/mcp/server.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/server.test.js)<br>[test/fixtures/binary-smoke/src/index.js](../../../../sources/manojmallick__sigmap/test/fixtures/binary-smoke/src/index.js)<br>[src/mcp/server.js](../../../../sources/manojmallick__sigmap/src/mcp/server.js) |
| agentRuntime | 11 | [AGENTS.md](../../../../sources/manojmallick__sigmap/AGENTS.md)<br>[test/integration/context-consistency.test.js](../../../../sources/manojmallick__sigmap/test/integration/context-consistency.test.js)<br>[test/integration/memory-tools.test.js](../../../../sources/manojmallick__sigmap/test/integration/memory-tools.test.js)<br>[test/integration/mcp/tools-v14.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/tools-v14.test.js)<br>[src/session/memory.js](../../../../sources/manojmallick__sigmap/src/session/memory.js)<br>[src/plan/planner.js](../../../../sources/manojmallick__sigmap/src/plan/planner.js)<br>[src/mcp/tools.js](../../../../sources/manojmallick__sigmap/src/mcp/tools.js)<br>[src/eval/runner.js](../../../../sources/manojmallick__sigmap/src/eval/runner.js) |
| mcp | 13 | [test/regression/mcp-tools-comprehensive.js](../../../../sources/manojmallick__sigmap/test/regression/mcp-tools-comprehensive.js)<br>[test/integration/mcp/get-lines.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/get-lines.test.js)<br>[test/integration/mcp/register.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/register.test.js)<br>[test/integration/mcp/server.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/server.test.js)<br>[test/integration/mcp/tools-v14.test.js](../../../../sources/manojmallick__sigmap/test/integration/mcp/tools-v14.test.js)<br>[test/integration/features/setup-mcp-targets.test.js](../../../../sources/manojmallick__sigmap/test/integration/features/setup-mcp-targets.test.js)<br>[src/mcp/handlers.js](../../../../sources/manojmallick__sigmap/src/mcp/handlers.js)<br>[src/mcp/server.js](../../../../sources/manojmallick__sigmap/src/mcp/server.js) |
| retrieval | 23 | [test/integration/memory-tools.test.js](../../../../sources/manojmallick__sigmap/test/integration/memory-tools.test.js)<br>[test/integration/retrieval.test.js](../../../../sources/manojmallick__sigmap/test/integration/retrieval.test.js)<br>[test/integration/v680-session-memory.test.js](../../../../sources/manojmallick__sigmap/test/integration/v680-session-memory.test.js)<br>[test/integration/features/v670-graph-boost-cache.test.js](../../../../sources/manojmallick__sigmap/test/integration/features/v670-graph-boost-cache.test.js)<br>[test/fixtures/binary-smoke/index.js](../../../../sources/manojmallick__sigmap/test/fixtures/binary-smoke/index.js)<br>[test/fixtures/binary-smoke/src/index.js](../../../../sources/manojmallick__sigmap/test/fixtures/binary-smoke/src/index.js)<br>[src/squeeze/index.js](../../../../sources/manojmallick__sigmap/src/squeeze/index.js)<br>[src/session/memory.js](../../../../sources/manojmallick__sigmap/src/session/memory.js) |
| spec | 3 | [docs-vp/public/roadmap.html](../../../../sources/manojmallick__sigmap/docs-vp/public/roadmap.html)<br>[docs-vp/guide/roadmap.md](../../../../sources/manojmallick__sigmap/docs-vp/guide/roadmap.md)<br>[docs/roadmap.html](../../../../sources/manojmallick__sigmap/docs/roadmap.html) |
| eval | 175 | [tests/test_python_ast_extractor.py](../../../../sources/manojmallick__sigmap/tests/test_python_ast_extractor.py)<br>[test/branching-strategy.test.js](../../../../sources/manojmallick__sigmap/test/branching-strategy.test.js)<br>[test/r-language.test.js](../../../../sources/manojmallick__sigmap/test/r-language.test.js)<br>[test/run.js](../../../../sources/manojmallick__sigmap/test/run.js)<br>[test/v351-features.test.js](../../../../sources/manojmallick__sigmap/test/v351-features.test.js)<br>[test/v360-features.test.js](../../../../sources/manojmallick__sigmap/test/v360-features.test.js)<br>[test/windows-path-normalization.test.js](../../../../sources/manojmallick__sigmap/test/windows-path-normalization.test.js)<br>[test/regression/mcp-tools-comprehensive.js](../../../../sources/manojmallick__sigmap/test/regression/mcp-tools-comprehensive.js) |
| security | 9 | [SECURITY.md](../../../../sources/manojmallick__sigmap/SECURITY.md)<br>[test/integration/secret-scan.test.js](../../../../sources/manojmallick__sigmap/test/integration/secret-scan.test.js)<br>[test/integration/extractors/audit-gates.test.js](../../../../sources/manojmallick__sigmap/test/integration/extractors/audit-gates.test.js)<br>[test/integration/extractors/typescript-guard-clauses.test.js](../../../../sources/manojmallick__sigmap/test/integration/extractors/typescript-guard-clauses.test.js)<br>[src/verify/hallucination-guard.js](../../../../sources/manojmallick__sigmap/src/verify/hallucination-guard.js)<br>[src/security/patterns.js](../../../../sources/manojmallick__sigmap/src/security/patterns.js)<br>[src/security/scanner.js](../../../../sources/manojmallick__sigmap/src/security/scanner.js)<br>[scripts/run-strategy-audit.mjs](../../../../sources/manojmallick__sigmap/scripts/run-strategy-audit.mjs) |
| ci | 8 | [.github/workflows/ci.yml](../../../../sources/manojmallick__sigmap/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/manojmallick__sigmap/.github/workflows/docs.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/manojmallick__sigmap/.github/workflows/npm-publish.yml)<br>[.github/workflows/pages.yml](../../../../sources/manojmallick__sigmap/.github/workflows/pages.yml)<br>[.github/workflows/prerelease-publish.yml](../../../../sources/manojmallick__sigmap/.github/workflows/prerelease-publish.yml)<br>[.github/workflows/release-binaries.yml](../../../../sources/manojmallick__sigmap/.github/workflows/release-binaries.yml)<br>[.github/workflows/release-notes-draft.yml](../../../../sources/manojmallick__sigmap/.github/workflows/release-notes-draft.yml)<br>[.github/workflows/sync-develop-main.yml](../../../../sources/manojmallick__sigmap/.github/workflows/sync-develop-main.yml) |
| container | 3 | [test/fixtures/Dockerfile](../../../../sources/manojmallick__sigmap/test/fixtures/Dockerfile)<br>[test/expected/dockerfile.txt](../../../../sources/manojmallick__sigmap/test/expected/dockerfile.txt)<br>[src/extractors/dockerfile.js](../../../../sources/manojmallick__sigmap/src/extractors/dockerfile.js) |
| instruction | 2 | [AGENTS.md](../../../../sources/manojmallick__sigmap/AGENTS.md)<br>[docs-vp/guide/agents.md](../../../../sources/manojmallick__sigmap/docs-vp/guide/agents.md) |
| docs | 40 | [README.md](../../../../sources/manojmallick__sigmap/README.md)<br>[test/integration/features/readme-structure.test.js](../../../../sources/manojmallick__sigmap/test/integration/features/readme-structure.test.js)<br>[packages/core/README.md](../../../../sources/manojmallick__sigmap/packages/core/README.md)<br>[docs/_config.yml](../../../../sources/manojmallick__sigmap/docs/_config.yml)<br>[docs/.nojekyll](../../../../sources/manojmallick__sigmap/docs/.nojekyll)<br>[docs/cli.html](../../../../sources/manojmallick__sigmap/docs/cli.html)<br>[docs/comparison-chart.svg](../../../../sources/manojmallick__sigmap/docs/comparison-chart.svg)<br>[docs/config.html](../../../../sources/manojmallick__sigmap/docs/config.html) |
| config | 4 | [package.json](../../../../sources/manojmallick__sigmap/package.json)<br>[packages/core/package.json](../../../../sources/manojmallick__sigmap/packages/core/package.json)<br>[packages/cli/package.json](../../../../sources/manojmallick__sigmap/packages/cli/package.json)<br>[docs-vp/package.json](../../../../sources/manojmallick__sigmap/docs-vp/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 175 | [tests/test_python_ast_extractor.py](../../../../sources/manojmallick__sigmap/tests/test_python_ast_extractor.py)<br>[test/branching-strategy.test.js](../../../../sources/manojmallick__sigmap/test/branching-strategy.test.js)<br>[test/r-language.test.js](../../../../sources/manojmallick__sigmap/test/r-language.test.js)<br>[test/run.js](../../../../sources/manojmallick__sigmap/test/run.js)<br>[test/v351-features.test.js](../../../../sources/manojmallick__sigmap/test/v351-features.test.js)<br>[test/v360-features.test.js](../../../../sources/manojmallick__sigmap/test/v360-features.test.js) |
| CI workflow | 8 | [.github/workflows/ci.yml](../../../../sources/manojmallick__sigmap/.github/workflows/ci.yml)<br>[.github/workflows/docs.yml](../../../../sources/manojmallick__sigmap/.github/workflows/docs.yml)<br>[.github/workflows/npm-publish.yml](../../../../sources/manojmallick__sigmap/.github/workflows/npm-publish.yml)<br>[.github/workflows/pages.yml](../../../../sources/manojmallick__sigmap/.github/workflows/pages.yml)<br>[.github/workflows/prerelease-publish.yml](../../../../sources/manojmallick__sigmap/.github/workflows/prerelease-publish.yml)<br>[.github/workflows/release-binaries.yml](../../../../sources/manojmallick__sigmap/.github/workflows/release-binaries.yml) |
| 컨테이너/배포 | 3 | [test/fixtures/Dockerfile](../../../../sources/manojmallick__sigmap/test/fixtures/Dockerfile)<br>[test/expected/dockerfile.txt](../../../../sources/manojmallick__sigmap/test/expected/dockerfile.txt)<br>[src/extractors/dockerfile.js](../../../../sources/manojmallick__sigmap/src/extractors/dockerfile.js) |
| 보안/정책 | 9 | [SECURITY.md](../../../../sources/manojmallick__sigmap/SECURITY.md)<br>[test/integration/secret-scan.test.js](../../../../sources/manojmallick__sigmap/test/integration/secret-scan.test.js)<br>[test/integration/extractors/audit-gates.test.js](../../../../sources/manojmallick__sigmap/test/integration/extractors/audit-gates.test.js)<br>[test/integration/extractors/typescript-guard-clauses.test.js](../../../../sources/manojmallick__sigmap/test/integration/extractors/typescript-guard-clauses.test.js)<br>[src/verify/hallucination-guard.js](../../../../sources/manojmallick__sigmap/src/verify/hallucination-guard.js)<br>[src/security/patterns.js](../../../../sources/manojmallick__sigmap/src/security/patterns.js) |
| 에이전트 지시문 | 2 | [AGENTS.md](../../../../sources/manojmallick__sigmap/AGENTS.md)<br>[docs-vp/guide/agents.md](../../../../sources/manojmallick__sigmap/docs-vp/guide/agents.md) |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | 없음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `test/regression/mcp-tools-comprehensive.js`, `test/integration/mcp/get-lines.test.js`, `test/integration/mcp/register.test.js`.
2. entrypoint를 따라 실행 흐름 확인: `test/integration/mcp/server.test.js`, `test/fixtures/binary-smoke/src/index.js`, `src/mcp/server.js`.
3. agent/tool runtime 매핑: `AGENTS.md`, `test/integration/context-consistency.test.js`, `test/integration/memory-tools.test.js`.
4. retrieval/memory/indexing 확인: `test/integration/memory-tools.test.js`, `test/integration/retrieval.test.js`, `test/integration/v680-session-memory.test.js`.
5. test/eval 파일로 동작 검증: `tests/test_python_ast_extractor.py`, `test/branching-strategy.test.js`, `test/r-language.test.js`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 97% token reduction for AI coding sessions — zero deps, 31 languages, MCP server. 핵심 구조 신호는 JavaScript, package.json, README.md, AGENTS.md, LICENSE, tests이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
