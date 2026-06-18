# cortexkit/aft 소스 딥다이브

생성 시각: 2026-06-18T15:47:23.104Z

Give your agent a proper IDE and OS. The sensorimotor cortex for coding agents (OpenCode + Pi), part of CortexKit: symbol-aware edits, semantic search, code health, fast grep/glob, bash compression, background tasks, PTY.

## 요약

- 조사 단위: `sources/cortexkit__aft` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 1,449 files, 205 directories, depth score 118, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 agentRuntime=scripts/tool-token-audit.ts, packages/pi-plugin/src/workflow-hints.ts, packages/pi-plugin/src/tools/_shared.ts이고, 의존성 단서는 의존성 단서 약함, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | cortexkit/aft |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | global |
| Language | Rust |
| Stars | 161 |
| Forks | 19 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/cortexkit__aft](../../../../sources/cortexkit__aft) |
| 기존 보고서 | [reports/global-trending/repositories/cortexkit__aft.md](../../../global-trending/repositories/cortexkit__aft.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 1449 / 205 |
| 관측 최대 깊이 | 8 |
| 상위 디렉터리 | .alfonso, .bg-shell, .cargo, .github, .gsd, .opencode, assets, benchmarks, crates, docs, packages, scripts, tests |
| 상위 확장자 | .ts: 482, .rs: 320, .md: 266, .golden: 132, .json: 66, .txt: 55, .toml: 29, (none): 19, .py: 16, .yml: 14, .sh: 13, .go: 5 |
| 소스 패턴 | monorepo/workspace, cli-first, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| tests | validation surface | 43 |
| packages/opencode-plugin | packages workspace | 34 |
| packages/pi-plugin | packages workspace | 32 |
| crates/aft | crates workspace | 18 |
| packages/npm | packages workspace | 11 |
| packages/aft-bridge | packages workspace | 7 |
| packages/aft-cli | packages workspace | 6 |
| docs | documentation surface | 5 |
| crates/aft-tokenizer | crates workspace | 2 |
| .github | ci surface | 1 |
| assets | top-level component | 1 |
| benchmarks | validation surface | 1 |
| crates | source boundary | 1 |
| packages | source boundary | 1 |
| scripts | top-level component | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| build | package.json | build | bun run --filter '*' build |
| build | package.json | build:rust | cargo build --release |
| build | package.json | build:all | bun run --filter '*' build && cargo build --release |
| quality | package.json | typecheck | bun run --filter '*' typecheck |
| quality | package.json | lint | biome check . |
| serve-dev | package.json | lint:workflows | sh -c 'command -v actionlint >/dev/null 2>&1 \|\| { echo actionlint not found. Install with brew install actionlint on macOS or see https://github.com/rhysd/actionlint#installation; exit 1; }; actionlint .github/workflows/ |
| quality | package.json | lint:fix | biome check --write . |
| quality | package.json | format | biome format --write . && cargo fmt |
| quality | package.json | format:check | biome format . && cargo fmt --check |
| test | package.json | test | bun run --filter './packages/*' test |
| test | package.json | pi-rpc-e2e | cd tests/pi-rpc && bun test |
| test | package.json | test:rust | cargo test |
| test | package.json | test:windows-e2e | bun run scripts/windows-vm/test.ts |
| utility | package.json | windows-vm:setup | bun run scripts/windows-vm/setup.ts |
| utility | package.json | version-sync | node scripts/version-sync.mjs |
| utility | package.json | bench | bun run benchmarks/src/runner.ts |
| utility | package.json | bench:codegraph-replication | bun run benchmarks/codegraph-replication/src/cli.ts |
| utility | package.json | bench:aft-search:local | cd benchmarks/aft-search && python3 run.py |
| container | package.json | bench:aft-search | docker compose -f benchmarks/aft-search/docker-compose.yml run --rm aft-search |
| container | package.json | bench:aft-search:docker | docker compose -f benchmarks/aft-search/docker-compose.yml run --rm aft-search |
| container | package.json | bench:codegraph-replication:docker | docker compose -f benchmarks/codegraph-replication/docker-compose.yml run --rm codegraph-replication |
| container | package.json | bench:codegraph-vs-aft-retrieval | sh -c 'docker compose -f benchmarks/codegraph-vs-aft-retrieval/docker-compose.yml run --rm aft && docker compose -f benchmarks/codegraph-vs-aft-retrieval/docker-compose.yml run --rm codegraph' |
| container | package.json | bench:codegraph-vs-aft-agent | docker compose -f benchmarks/codegraph-vs-aft-agent/docker-compose.yml run --rm agent |
| test | package.json | test:unit | bun run --filter './packages/*' test:unit |
| utility | Makefile | .PHONY | make .PHONY |


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
| agentRuntime | [scripts/tool-token-audit.ts](../../../../sources/cortexkit__aft/scripts/tool-token-audit.ts) | agentRuntime signal |
| agentRuntime | [packages/pi-plugin/src/workflow-hints.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/workflow-hints.ts) | agentRuntime signal |
| agentRuntime | [packages/pi-plugin/src/tools/_shared.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/tools/_shared.ts) | agentRuntime signal |
| agentRuntime | [packages/pi-plugin/src/tools/ast.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/tools/ast.ts) | agentRuntime signal |
| entrypoints | [tests/docker/fixtures/sample-project/main.py](../../../../sources/cortexkit__aft/tests/docker/fixtures/sample-project/main.py) | entrypoints signal |
| entrypoints | [packages/pi-plugin/src/index.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/index.ts) | entrypoints signal |
| entrypoints | [packages/opencode-plugin/src/index.ts](../../../../sources/cortexkit__aft/packages/opencode-plugin/src/index.ts) | entrypoints signal |
| entrypoints | [packages/npm/win32-x64/bin/.gitkeep](../../../../sources/cortexkit__aft/packages/npm/win32-x64/bin/.gitkeep) | entrypoints signal |
| config | [Cargo.lock](../../../../sources/cortexkit__aft/Cargo.lock) | config signal |
| config | [Cargo.toml](../../../../sources/cortexkit__aft/Cargo.toml) | config signal |
| config | [Makefile](../../../../sources/cortexkit__aft/Makefile) | config signal |
| config | [package.json](../../../../sources/cortexkit__aft/package.json) | config signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 19 | [tests/docker/fixtures/sample-project/main.py](../../../../sources/cortexkit__aft/tests/docker/fixtures/sample-project/main.py)<br>[packages/pi-plugin/src/index.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/index.ts)<br>[packages/opencode-plugin/src/index.ts](../../../../sources/cortexkit__aft/packages/opencode-plugin/src/index.ts)<br>[packages/npm/win32-x64/bin/.gitkeep](../../../../sources/cortexkit__aft/packages/npm/win32-x64/bin/.gitkeep)<br>[packages/npm/linux-x64/bin/.gitkeep](../../../../sources/cortexkit__aft/packages/npm/linux-x64/bin/.gitkeep)<br>[packages/npm/linux-arm64/bin/.gitkeep](../../../../sources/cortexkit__aft/packages/npm/linux-arm64/bin/.gitkeep)<br>[packages/npm/darwin-x64/bin/.gitkeep](../../../../sources/cortexkit__aft/packages/npm/darwin-x64/bin/.gitkeep)<br>[packages/npm/darwin-arm64/bin/.gitkeep](../../../../sources/cortexkit__aft/packages/npm/darwin-arm64/bin/.gitkeep) |
| agentRuntime | 64 | [scripts/tool-token-audit.ts](../../../../sources/cortexkit__aft/scripts/tool-token-audit.ts)<br>[packages/pi-plugin/src/workflow-hints.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/workflow-hints.ts)<br>[packages/pi-plugin/src/tools/_shared.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/tools/_shared.ts)<br>[packages/pi-plugin/src/tools/ast.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/tools/ast.ts)<br>[packages/pi-plugin/src/tools/bash.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/tools/bash.ts)<br>[packages/pi-plugin/src/tools/conflicts.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/tools/conflicts.ts)<br>[packages/pi-plugin/src/tools/diff-format.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/tools/diff-format.ts)<br>[packages/pi-plugin/src/tools/fs.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/tools/fs.ts) |
| mcp | 0 | 명확하지 않음 |
| retrieval | 40 | [tests/pi-rpc/helpers/index.ts](../../../../sources/cortexkit__aft/tests/pi-rpc/helpers/index.ts)<br>[packages/pi-plugin/src/index.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/index.ts)<br>[packages/pi-plugin/src/__tests__/index-audit.test.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/__tests__/index-audit.test.ts)<br>[packages/opencode-plugin/src/index.ts](../../../../sources/cortexkit__aft/packages/opencode-plugin/src/index.ts)<br>[packages/opencode-plugin/src/tui/index.tsx](../../../../sources/cortexkit__aft/packages/opencode-plugin/src/tui/index.tsx)<br>[packages/opencode-plugin/src/hooks/auto-update-checker/index.test.ts](../../../../sources/cortexkit__aft/packages/opencode-plugin/src/hooks/auto-update-checker/index.test.ts)<br>[packages/opencode-plugin/src/hooks/auto-update-checker/index.ts](../../../../sources/cortexkit__aft/packages/opencode-plugin/src/hooks/auto-update-checker/index.ts)<br>[packages/opencode-plugin/src/__tests__/index-bg-callback-root.test.ts](../../../../sources/cortexkit__aft/packages/opencode-plugin/src/__tests__/index-bg-callback-root.test.ts) |
| spec | 7 | [ARCHITECTURE.md](../../../../sources/cortexkit__aft/ARCHITECTURE.md)<br>[crates/aft/tests/integration/bash_foreground_background_architecture_test.rs](../../../../sources/cortexkit__aft/crates/aft/tests/integration/bash_foreground_background_architecture_test.rs)<br>[.gsd/REQUIREMENTS.md](../../../../sources/cortexkit__aft/.gsd/REQUIREMENTS.md)<br>[.gsd/milestones/M004/M004-ROADMAP.md](../../../../sources/cortexkit__aft/.gsd/milestones/M004/M004-ROADMAP.md)<br>[.gsd/milestones/M003/M003-ROADMAP.md](../../../../sources/cortexkit__aft/.gsd/milestones/M003/M003-ROADMAP.md)<br>[.gsd/milestones/M002/M002-ROADMAP.md](../../../../sources/cortexkit__aft/.gsd/milestones/M002/M002-ROADMAP.md)<br>[.gsd/milestones/M001/M001-ROADMAP.md](../../../../sources/cortexkit__aft/.gsd/milestones/M001/M001-ROADMAP.md) |
| eval | 641 | [tests/windows-e2e/mock-server.js](../../../../sources/cortexkit__aft/tests/windows-e2e/mock-server.js)<br>[tests/windows-e2e/README.md](../../../../sources/cortexkit__aft/tests/windows-e2e/README.md)<br>[tests/windows-e2e/run.ps1](../../../../sources/cortexkit__aft/tests/windows-e2e/run.ps1)<br>[tests/pi-rpc/aft-tools.test.ts](../../../../sources/cortexkit__aft/tests/pi-rpc/aft-tools.test.ts)<br>[tests/pi-rpc/bg-bash.test.ts](../../../../sources/cortexkit__aft/tests/pi-rpc/bg-bash.test.ts)<br>[tests/pi-rpc/error-envelope.test.ts](../../../../sources/cortexkit__aft/tests/pi-rpc/error-envelope.test.ts)<br>[tests/pi-rpc/hoisted-replacement.test.ts](../../../../sources/cortexkit__aft/tests/pi-rpc/hoisted-replacement.test.ts)<br>[tests/pi-rpc/idle-wakeup.test.ts](../../../../sources/cortexkit__aft/tests/pi-rpc/idle-wakeup.test.ts) |
| security | 15 | [tests/pi-rpc/permission-full.test.ts](../../../../sources/cortexkit__aft/tests/pi-rpc/permission-full.test.ts)<br>[tests/pi-rpc/permission.test.ts](../../../../sources/cortexkit__aft/tests/pi-rpc/permission.test.ts)<br>[scripts/tool-token-audit.ts](../../../../sources/cortexkit__aft/scripts/tool-token-audit.ts)<br>[packages/pi-plugin/src/__tests__/index-audit.test.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/__tests__/index-audit.test.ts)<br>[packages/pi-plugin/src/__tests__/e2e/lsp-github-install-security.test.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/__tests__/e2e/lsp-github-install-security.test.ts)<br>[packages/opencode-plugin/src/__tests__/auto-update-audit.test.ts](../../../../sources/cortexkit__aft/packages/opencode-plugin/src/__tests__/auto-update-audit.test.ts)<br>[packages/opencode-plugin/src/__tests__/bash-watch-audit.test.ts](../../../../sources/cortexkit__aft/packages/opencode-plugin/src/__tests__/bash-watch-audit.test.ts)<br>[packages/opencode-plugin/src/__tests__/permission-layer-audit.test.ts](../../../../sources/cortexkit__aft/packages/opencode-plugin/src/__tests__/permission-layer-audit.test.ts) |
| ci | 7 | [.github/workflows/_e2e-suite.yml](../../../../sources/cortexkit__aft/.github/workflows/_e2e-suite.yml)<br>[.github/workflows/_unit-suite.yml](../../../../sources/cortexkit__aft/.github/workflows/_unit-suite.yml)<br>[.github/workflows/bump-opencode.yml](../../../../sources/cortexkit__aft/.github/workflows/bump-opencode.yml)<br>[.github/workflows/discord-release.yml](../../../../sources/cortexkit__aft/.github/workflows/discord-release.yml)<br>[.github/workflows/e2e-iter.yml](../../../../sources/cortexkit__aft/.github/workflows/e2e-iter.yml)<br>[.github/workflows/release.yml](../../../../sources/cortexkit__aft/.github/workflows/release.yml)<br>[.github/workflows/tests.yml](../../../../sources/cortexkit__aft/.github/workflows/tests.yml) |
| container | 14 | [tests/docker/Dockerfile.build-linux](../../../../sources/cortexkit__aft/tests/docker/Dockerfile.build-linux)<br>[tests/docker/Dockerfile.linux-x64](../../../../sources/cortexkit__aft/tests/docker/Dockerfile.linux-x64)<br>[crates/aft/tests/integration/fixtures/compress_filters/helm/expected.txt](../../../../sources/cortexkit__aft/crates/aft/tests/integration/fixtures/compress_filters/helm/expected.txt)<br>[crates/aft/tests/integration/fixtures/compress_filters/helm/input.txt](../../../../sources/cortexkit__aft/crates/aft/tests/integration/fixtures/compress_filters/helm/input.txt)<br>[benchmarks/settle-time/Dockerfile](../../../../sources/cortexkit__aft/benchmarks/settle-time/Dockerfile)<br>[benchmarks/codegraph-vs-aft-retrieval/docker-compose.yml](../../../../sources/cortexkit__aft/benchmarks/codegraph-vs-aft-retrieval/docker-compose.yml)<br>[benchmarks/codegraph-vs-aft-retrieval/Dockerfile.aft](../../../../sources/cortexkit__aft/benchmarks/codegraph-vs-aft-retrieval/Dockerfile.aft)<br>[benchmarks/codegraph-vs-aft-retrieval/Dockerfile.codegraph](../../../../sources/cortexkit__aft/benchmarks/codegraph-vs-aft-retrieval/Dockerfile.codegraph) |
| instruction | 0 | 명확하지 않음 |
| docs | 16 | [README.md](../../../../sources/cortexkit__aft/README.md)<br>[tests/windows-e2e/README.md](../../../../sources/cortexkit__aft/tests/windows-e2e/README.md)<br>[tests/macos-e2e/README.md](../../../../sources/cortexkit__aft/tests/macos-e2e/README.md)<br>[packages/pi-plugin/README.md](../../../../sources/cortexkit__aft/packages/pi-plugin/README.md)<br>[packages/aft-cli/README.md](../../../../sources/cortexkit__aft/packages/aft-cli/README.md)<br>[packages/aft-bridge/README.md](../../../../sources/cortexkit__aft/packages/aft-bridge/README.md)<br>[docs/benchmarks.md](../../../../sources/cortexkit__aft/docs/benchmarks.md)<br>[docs/cli.md](../../../../sources/cortexkit__aft/docs/cli.md) |
| config | 34 | [Cargo.lock](../../../../sources/cortexkit__aft/Cargo.lock)<br>[Cargo.toml](../../../../sources/cortexkit__aft/Cargo.toml)<br>[Makefile](../../../../sources/cortexkit__aft/Makefile)<br>[package.json](../../../../sources/cortexkit__aft/package.json)<br>[tsconfig.json](../../../../sources/cortexkit__aft/tsconfig.json)<br>[tests/pi-rpc/package.json](../../../../sources/cortexkit__aft/tests/pi-rpc/package.json)<br>[scripts/package.json](../../../../sources/cortexkit__aft/scripts/package.json)<br>[packages/pi-plugin/package.json](../../../../sources/cortexkit__aft/packages/pi-plugin/package.json) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 641 | [tests/windows-e2e/mock-server.js](../../../../sources/cortexkit__aft/tests/windows-e2e/mock-server.js)<br>[tests/windows-e2e/README.md](../../../../sources/cortexkit__aft/tests/windows-e2e/README.md)<br>[tests/windows-e2e/run.ps1](../../../../sources/cortexkit__aft/tests/windows-e2e/run.ps1)<br>[tests/pi-rpc/aft-tools.test.ts](../../../../sources/cortexkit__aft/tests/pi-rpc/aft-tools.test.ts)<br>[tests/pi-rpc/bg-bash.test.ts](../../../../sources/cortexkit__aft/tests/pi-rpc/bg-bash.test.ts)<br>[tests/pi-rpc/error-envelope.test.ts](../../../../sources/cortexkit__aft/tests/pi-rpc/error-envelope.test.ts) |
| CI workflow | 7 | [.github/workflows/_e2e-suite.yml](../../../../sources/cortexkit__aft/.github/workflows/_e2e-suite.yml)<br>[.github/workflows/_unit-suite.yml](../../../../sources/cortexkit__aft/.github/workflows/_unit-suite.yml)<br>[.github/workflows/bump-opencode.yml](../../../../sources/cortexkit__aft/.github/workflows/bump-opencode.yml)<br>[.github/workflows/discord-release.yml](../../../../sources/cortexkit__aft/.github/workflows/discord-release.yml)<br>[.github/workflows/e2e-iter.yml](../../../../sources/cortexkit__aft/.github/workflows/e2e-iter.yml)<br>[.github/workflows/release.yml](../../../../sources/cortexkit__aft/.github/workflows/release.yml) |
| 컨테이너/배포 | 14 | [tests/docker/Dockerfile.build-linux](../../../../sources/cortexkit__aft/tests/docker/Dockerfile.build-linux)<br>[tests/docker/Dockerfile.linux-x64](../../../../sources/cortexkit__aft/tests/docker/Dockerfile.linux-x64)<br>[crates/aft/tests/integration/fixtures/compress_filters/helm/expected.txt](../../../../sources/cortexkit__aft/crates/aft/tests/integration/fixtures/compress_filters/helm/expected.txt)<br>[crates/aft/tests/integration/fixtures/compress_filters/helm/input.txt](../../../../sources/cortexkit__aft/crates/aft/tests/integration/fixtures/compress_filters/helm/input.txt)<br>[benchmarks/settle-time/Dockerfile](../../../../sources/cortexkit__aft/benchmarks/settle-time/Dockerfile)<br>[benchmarks/codegraph-vs-aft-retrieval/docker-compose.yml](../../../../sources/cortexkit__aft/benchmarks/codegraph-vs-aft-retrieval/docker-compose.yml) |
| 보안/정책 | 15 | [tests/pi-rpc/permission-full.test.ts](../../../../sources/cortexkit__aft/tests/pi-rpc/permission-full.test.ts)<br>[tests/pi-rpc/permission.test.ts](../../../../sources/cortexkit__aft/tests/pi-rpc/permission.test.ts)<br>[scripts/tool-token-audit.ts](../../../../sources/cortexkit__aft/scripts/tool-token-audit.ts)<br>[packages/pi-plugin/src/__tests__/index-audit.test.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/__tests__/index-audit.test.ts)<br>[packages/pi-plugin/src/__tests__/e2e/lsp-github-install-security.test.ts](../../../../sources/cortexkit__aft/packages/pi-plugin/src/__tests__/e2e/lsp-github-install-security.test.ts)<br>[packages/opencode-plugin/src/__tests__/auto-update-audit.test.ts](../../../../sources/cortexkit__aft/packages/opencode-plugin/src/__tests__/auto-update-audit.test.ts) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | dependency cue weak in root manifests |


## 읽기 계획

1. 핵심 참조에서 시작: `scripts/tool-token-audit.ts`, `packages/pi-plugin/src/workflow-hints.ts`, `packages/pi-plugin/src/tools/_shared.ts`.
2. entrypoint를 따라 실행 흐름 확인: `tests/docker/fixtures/sample-project/main.py`, `packages/pi-plugin/src/index.ts`, `packages/opencode-plugin/src/index.ts`.
3. agent/tool runtime 매핑: `scripts/tool-token-audit.ts`, `packages/pi-plugin/src/workflow-hints.ts`, `packages/pi-plugin/src/tools/_shared.ts`.
4. retrieval/memory/indexing 확인: `tests/pi-rpc/helpers/index.ts`, `packages/pi-plugin/src/index.ts`, `packages/pi-plugin/src/__tests__/index-audit.test.ts`.
5. test/eval 파일로 동작 검증: `tests/windows-e2e/mock-server.js`, `tests/windows-e2e/README.md`, `tests/windows-e2e/run.ps1`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 Give your agent a proper IDE and OS. The sensorimotor cortex for coding agents OpenCode + Pi , part of CortexKit symbol . 핵심 구조 신호는 Rust, package.json, Cargo.toml, Makefile, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
