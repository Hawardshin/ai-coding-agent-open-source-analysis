# zilliztech/claude-context 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Code search MCP for Claude Code. Make entire codebase the context for any coding agent.

## 요약

- 조사 단위: `sources/zilliztech__claude-context` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 172 files, 49 directories, depth score 97, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, agent/tool runtime, retrieval/vector path 구조로 읽힌다. 핵심 소스 근거는 mcp=packages/mcp/CONTRIBUTING.md, packages/mcp/package.json, packages/mcp/README.md이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | zilliztech/claude-context |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | TypeScript |
| Stars | 11880 |
| Forks | 877 |
| License | 없음 |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/zilliztech__claude-context](../../../../sources/zilliztech__claude-context) |
| 기존 보고서 | [reports/global-trending/repositories/zilliztech__claude-context.md](../../../global-trending/repositories/zilliztech__claude-context.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 172 / 49 |
| 관측 최대 깊이 | 6 |
| 상위 디렉터리 | .github, assets, docs, evaluation, examples, packages, python, scripts |
| 상위 확장자 | .ts: 53, .md: 26, .py: 18, .json: 17, .png: 14, .js: 9, .wasm: 9, (none): 5, .log: 4, .css: 2, .html: 2, .jpeg: 2 |
| 소스 패턴 | monorepo/workspace, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| packages/core | packages workspace | 28 |
| packages/mcp | packages workspace | 24 |
| docs | documentation surface | 9 |
| examples/basic-usage | examples workspace | 3 |
| packages/chrome-extension | packages workspace | 3 |
| packages/vscode-extension | packages workspace | 3 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| evaluation | top-level component | 1 |
| examples | top-level component | 1 |
| examples/README.md | examples workspace | 1 |
| packages | source boundary | 1 |
| python | top-level component | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | pnpm -r --filter='!./examples/*' build && pnpm -r --filter='./examples/*' build |
| build | package.json | build:core | pnpm --filter @zilliz/claude-context-core build |
| build | package.json | build:vscode | pnpm --filter semanticcodesearch compile |
| build | package.json | build:mcp | pnpm --filter @zilliz/claude-context-mcp build |
| serve-dev | package.json | dev | pnpm -r dev |
| serve-dev | package.json | dev:core | pnpm --filter @zilliz/claude-context-core dev |
| serve-dev | package.json | dev:vscode | pnpm --filter semanticcodesearch watch |
| serve-dev | package.json | dev:mcp | pnpm --filter @zilliz/claude-context-mcp dev |
| utility | package.json | clean | pnpm -r clean |
| quality | package.json | lint | pnpm -r lint |
| quality | package.json | lint:fix | pnpm -r run lint:fix |
| quality | package.json | typecheck | pnpm -r run typecheck |
| build | package.json | release:core | pnpm --filter @zilliz/claude-context-core... run build && pnpm --filter @zilliz/claude-context-core publish --access public --no-git-checks |
| build | package.json | release:mcp | pnpm --filter @zilliz/claude-context-mcp... run build && pnpm --filter @zilliz/claude-context-mcp publish --access public --no-git-checks |
| build | package.json | release:vscode | pnpm --filter @zilliz/claude-context-core build && pnpm --filter semanticcodesearch run webpack && pnpm --filter semanticcodesearch release |
| serve-dev | package.json | example:basic | pnpm --filter claude-context-basic-example start |
| build | package.json | benchmark | node scripts/build-benchmark.js |


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
| mcp | [packages/mcp/CONTRIBUTING.md](../../../../sources/zilliztech__claude-context/packages/mcp/CONTRIBUTING.md) | mcp signal |
| mcp | [packages/mcp/package.json](../../../../sources/zilliztech__claude-context/packages/mcp/package.json) | mcp signal |
| mcp | [packages/mcp/README.md](../../../../sources/zilliztech__claude-context/packages/mcp/README.md) | mcp signal |
| mcp | [packages/mcp/tsconfig.json](../../../../sources/zilliztech__claude-context/packages/mcp/tsconfig.json) | mcp signal |
| agentRuntime | [packages/core/src/context.abort.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.abort.test.ts) | agentRuntime signal |
| agentRuntime | [packages/core/src/context.embedding-error.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.embedding-error.test.ts) | agentRuntime signal |
| agentRuntime | [packages/core/src/context.ignore-patterns.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.ignore-patterns.test.ts) | agentRuntime signal |
| agentRuntime | [packages/core/src/context.splitter.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.splitter.test.ts) | agentRuntime signal |
| entrypoints | [packages/mcp/src/index.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/index.ts) | entrypoints signal |
| entrypoints | [packages/core/src/index.ts](../../../../sources/zilliztech__claude-context/packages/core/src/index.ts) | entrypoints signal |
| config | [package.json](../../../../sources/zilliztech__claude-context/package.json) | config signal |
| config | [pnpm-workspace.yaml](../../../../sources/zilliztech__claude-context/pnpm-workspace.yaml) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 2 | [packages/mcp/src/index.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/index.ts)<br>[packages/core/src/index.ts](../../../../sources/zilliztech__claude-context/packages/core/src/index.ts) |
| agentRuntime | 5 | [packages/core/src/context.abort.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.abort.test.ts)<br>[packages/core/src/context.embedding-error.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.embedding-error.test.ts)<br>[packages/core/src/context.ignore-patterns.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.ignore-patterns.test.ts)<br>[packages/core/src/context.splitter.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.splitter.test.ts)<br>[packages/core/src/context.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.ts) |
| mcp | 18 | [packages/mcp/CONTRIBUTING.md](../../../../sources/zilliztech__claude-context/packages/mcp/CONTRIBUTING.md)<br>[packages/mcp/package.json](../../../../sources/zilliztech__claude-context/packages/mcp/package.json)<br>[packages/mcp/README.md](../../../../sources/zilliztech__claude-context/packages/mcp/README.md)<br>[packages/mcp/tsconfig.json](../../../../sources/zilliztech__claude-context/packages/mcp/tsconfig.json)<br>[packages/mcp/src/config.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/config.ts)<br>[packages/mcp/src/embedding.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/embedding.ts)<br>[packages/mcp/src/handlers.get-indexing-status.test.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/handlers.get-indexing-status.test.ts)<br>[packages/mcp/src/handlers.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/handlers.ts) |
| retrieval | 19 | [packages/mcp/src/embedding.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/embedding.ts)<br>[packages/mcp/src/index.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/index.ts)<br>[packages/core/src/context.embedding-error.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.embedding-error.test.ts)<br>[packages/core/src/index.ts](../../../../sources/zilliztech__claude-context/packages/core/src/index.ts)<br>[packages/core/src/vectordb/index.ts](../../../../sources/zilliztech__claude-context/packages/core/src/vectordb/index.ts)<br>[packages/core/src/utils/index.ts](../../../../sources/zilliztech__claude-context/packages/core/src/utils/index.ts)<br>[packages/core/src/splitter/index.ts](../../../../sources/zilliztech__claude-context/packages/core/src/splitter/index.ts)<br>[packages/core/src/embedding/base-embedding.ts](../../../../sources/zilliztech__claude-context/packages/core/src/embedding/base-embedding.ts) |
| spec | 1 | [assets/Architecture.png](../../../../sources/zilliztech__claude-context/assets/Architecture.png) |
| eval | 43 | [build-benchmark.json](../../../../sources/zilliztech__claude-context/build-benchmark.json)<br>[scripts/build-benchmark.js](../../../../sources/zilliztech__claude-context/scripts/build-benchmark.js)<br>[python/test_context.ts](../../../../sources/zilliztech__claude-context/python/test_context.ts)<br>[python/test_endtoend.py](../../../../sources/zilliztech__claude-context/python/test_endtoend.py)<br>[packages/mcp/src/handlers.get-indexing-status.test.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/handlers.get-indexing-status.test.ts)<br>[packages/mcp/src/snapshot.request-options.test.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/snapshot.request-options.test.ts)<br>[packages/core/src/context.abort.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.abort.test.ts)<br>[packages/core/src/context.embedding-error.test.ts](../../../../sources/zilliztech__claude-context/packages/core/src/context.embedding-error.test.ts) |
| security | 0 | 명확하지 않음 |
| ci | 2 | [.github/workflows/ci.yml](../../../../sources/zilliztech__claude-context/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/zilliztech__claude-context/.github/workflows/release.yml) |
| container | 0 | 명확하지 않음 |
| instruction | 0 | 명확하지 않음 |
| docs | 23 | [README.md](../../../../sources/zilliztech__claude-context/README.md)<br>[python/README.md](../../../../sources/zilliztech__claude-context/python/README.md)<br>[packages/vscode-extension/README.md](../../../../sources/zilliztech__claude-context/packages/vscode-extension/README.md)<br>[packages/mcp/README.md](../../../../sources/zilliztech__claude-context/packages/mcp/README.md)<br>[packages/core/README.md](../../../../sources/zilliztech__claude-context/packages/core/README.md)<br>[packages/chrome-extension/README.md](../../../../sources/zilliztech__claude-context/packages/chrome-extension/README.md)<br>[examples/README.md](../../../../sources/zilliztech__claude-context/examples/README.md)<br>[examples/basic-usage/README.md](../../../../sources/zilliztech__claude-context/examples/basic-usage/README.md) |
| config | 14 | [package.json](../../../../sources/zilliztech__claude-context/package.json)<br>[pnpm-workspace.yaml](../../../../sources/zilliztech__claude-context/pnpm-workspace.yaml)<br>[tsconfig.json](../../../../sources/zilliztech__claude-context/tsconfig.json)<br>[packages/vscode-extension/package.json](../../../../sources/zilliztech__claude-context/packages/vscode-extension/package.json)<br>[packages/vscode-extension/tsconfig.json](../../../../sources/zilliztech__claude-context/packages/vscode-extension/tsconfig.json)<br>[packages/mcp/package.json](../../../../sources/zilliztech__claude-context/packages/mcp/package.json)<br>[packages/mcp/tsconfig.json](../../../../sources/zilliztech__claude-context/packages/mcp/tsconfig.json)<br>[packages/core/package.json](../../../../sources/zilliztech__claude-context/packages/core/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 43 | [build-benchmark.json](../../../../sources/zilliztech__claude-context/build-benchmark.json)<br>[scripts/build-benchmark.js](../../../../sources/zilliztech__claude-context/scripts/build-benchmark.js)<br>[python/test_context.ts](../../../../sources/zilliztech__claude-context/python/test_context.ts)<br>[python/test_endtoend.py](../../../../sources/zilliztech__claude-context/python/test_endtoend.py)<br>[packages/mcp/src/handlers.get-indexing-status.test.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/handlers.get-indexing-status.test.ts)<br>[packages/mcp/src/snapshot.request-options.test.ts](../../../../sources/zilliztech__claude-context/packages/mcp/src/snapshot.request-options.test.ts) |
| CI workflow | 2 | [.github/workflows/ci.yml](../../../../sources/zilliztech__claude-context/.github/workflows/ci.yml)<br>[.github/workflows/release.yml](../../../../sources/zilliztech__claude-context/.github/workflows/release.yml) |
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

1. 핵심 참조에서 시작: `packages/mcp/CONTRIBUTING.md`, `packages/mcp/package.json`, `packages/mcp/README.md`.
2. entrypoint를 따라 실행 흐름 확인: `packages/mcp/src/index.ts`, `packages/core/src/index.ts`.
3. agent/tool runtime 매핑: `packages/core/src/context.abort.test.ts`, `packages/core/src/context.embedding-error.test.ts`, `packages/core/src/context.ignore-patterns.test.ts`.
4. retrieval/memory/indexing 확인: `packages/mcp/src/embedding.ts`, `packages/mcp/src/index.ts`, `packages/core/src/context.embedding-error.test.ts`.
5. test/eval 파일로 동작 검증: `build-benchmark.json`, `scripts/build-benchmark.js`, `python/test_context.ts`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Code search MCP for Claude Code. Make entire codebase the context for any coding agent.. 핵심 구조 신호는 TypeScript, package.json, README.md, LICENSE, ci, docs이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
