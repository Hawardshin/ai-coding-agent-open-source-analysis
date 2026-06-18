# kreuzberg-dev/kreuzberg 소스 딥다이브

생성 시각: 2026-06-18T15:38:17.010Z

A polyglot document intelligence framework with a Rust core. Extract text, metadata, images, and structured information from PDFs, Office documents, images, and 97+ formats. Available for Rust, Python, Ruby, Java, Go, PHP, Elixir, C#, R, C, TypeScript (Node/Bun/Wasm/Deno)- or use via CLI, REST API, or MCP server.

## 요약

- 조사 단위: `sources/kreuzberg-dev__kreuzberg` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 6,466 files, 743 directories, depth score 122, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

에이전트 하네스/MCP 관점에서 monorepo/workspace, cli-first, api/server 구조로 읽힌다. 핵심 소스 근거는 mcp=docs/snippets/zig/mcp/mcp_custom_client.md, docs/snippets/zig/mcp/mcp_server_start.md, docs/snippets/wasm/mcp/mcp_custom_client.md이고, 의존성 단서는 torch, transformers, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 도구/하네스 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | kreuzberg-dev/kreuzberg |
| 주제 | 에이전트 하네스/MCP / 에이전트 하네스/MCP |
| Region | korea |
| Language | Rust |
| Stars | 8500 |
| Forks | 499 |
| License | NOASSERTION |
| 성숙도 | 고신호 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/kreuzberg-dev__kreuzberg](../../../../sources/kreuzberg-dev__kreuzberg) |
| 기존 보고서 | [reports/llm-wiki/repositories/kreuzberg-dev__kreuzberg.md](../../../llm-wiki/repositories/kreuzberg-dev__kreuzberg.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 6466 / 743 |
| 관측 최대 깊이 | 9 |
| 상위 디렉터리 | .ai-rulez, .cargo, .github, .task, audit-notes, charts, crates, docker, docs, e2e, fixtures, packages, scripts, templates, test_documents, tools |
| 상위 확장자 | .md: 2048, .rs: 1018, .json: 945, .cs: 332, .java: 308, .kt: 274, .ex: 227, .ms: 203, .sh: 114, .ts: 112, .exs: 108, .php: 100 |
| 소스 패턴 | monorepo/workspace, cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, security/policy surface |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| docs | documentation surface | 45 |
| packages/elixir | packages workspace | 13 |
| crates/kreuzberg | crates workspace | 6 |
| packages/go | packages workspace | 5 |
| packages/node | packages workspace | 5 |
| crates/kreuzberg-wasm | crates workspace | 4 |
| crates/kreuzberg-py | crates workspace | 3 |
| crates/kreuzberg-tesseract | crates workspace | 3 |
| packages/r | packages workspace | 3 |
| packages/ruby | packages workspace | 3 |
| crates/kreuzberg-cli | crates workspace | 2 |
| crates/kreuzberg-libheif | crates workspace | 2 |
| packages/dart | packages workspace | 2 |
| packages/java | packages workspace | 2 |
| packages/kotlin-android | packages workspace | 2 |
| packages/python | packages workspace | 2 |
| packages/swift | packages workspace | 2 |
| packages/typescript | packages workspace | 2 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| quality | package.json | typecheck | pnpm -r --if-present run typecheck |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | 없음 |
| agentFrameworks | 없음 |
| vectorStores | 없음 |
| modelRuntime | torch, transformers |
| webRuntime | 없음 |
| developerSurface | 없음 |
| observability | 없음 |
| browserAutomation | 없음 |


## 핵심 소스 참조

| Bucket | 소스 경로 | 중요한 이유 |
| --- | --- | --- |
| mcp | [docs/snippets/zig/mcp/mcp_custom_client.md](../../../../sources/kreuzberg-dev__kreuzberg/docs/snippets/zig/mcp/mcp_custom_client.md) | mcp signal |
| mcp | [docs/snippets/zig/mcp/mcp_server_start.md](../../../../sources/kreuzberg-dev__kreuzberg/docs/snippets/zig/mcp/mcp_server_start.md) | mcp signal |
| mcp | [docs/snippets/wasm/mcp/mcp_custom_client.md](../../../../sources/kreuzberg-dev__kreuzberg/docs/snippets/wasm/mcp/mcp_custom_client.md) | mcp signal |
| mcp | [docs/snippets/wasm/mcp/mcp_server_start.md](../../../../sources/kreuzberg-dev__kreuzberg/docs/snippets/wasm/mcp/mcp_server_start.md) | mcp signal |
| agentRuntime | [tools/snippet-runner/Cargo.toml](../../../../sources/kreuzberg-dev__kreuzberg/tools/snippet-runner/Cargo.toml) | agentRuntime signal |
| agentRuntime | [tools/snippet-runner/src/discovery.rs](../../../../sources/kreuzberg-dev__kreuzberg/tools/snippet-runner/src/discovery.rs) | agentRuntime signal |
| agentRuntime | [tools/snippet-runner/src/error.rs](../../../../sources/kreuzberg-dev__kreuzberg/tools/snippet-runner/src/error.rs) | agentRuntime signal |
| agentRuntime | [tools/snippet-runner/src/lib.rs](../../../../sources/kreuzberg-dev__kreuzberg/tools/snippet-runner/src/lib.rs) | agentRuntime signal |
| entrypoints | [server.json](../../../../sources/kreuzberg-dev__kreuzberg/server.json) | entrypoints signal |
| entrypoints | [tools/snippet-runner/src/main.rs](../../../../sources/kreuzberg-dev__kreuzberg/tools/snippet-runner/src/main.rs) | entrypoints signal |
| entrypoints | [tools/generate_test_fixtures/src/generate_test_fixtures/__main__.py](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/src/generate_test_fixtures/__main__.py) | entrypoints signal |
| entrypoints | [tools/benchmark-harness/src/main.rs](../../../../sources/kreuzberg-dev__kreuzberg/tools/benchmark-harness/src/main.rs) | entrypoints signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 25 | [server.json](../../../../sources/kreuzberg-dev__kreuzberg/server.json)<br>[tools/snippet-runner/src/main.rs](../../../../sources/kreuzberg-dev__kreuzberg/tools/snippet-runner/src/main.rs)<br>[tools/generate_test_fixtures/src/generate_test_fixtures/__main__.py](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/src/generate_test_fixtures/__main__.py)<br>[tools/benchmark-harness/src/main.rs](../../../../sources/kreuzberg-dev__kreuzberg/tools/benchmark-harness/src/main.rs)<br>[packages/zig/src/main.zig](../../../../sources/kreuzberg-dev__kreuzberg/packages/zig/src/main.zig)<br>[packages/typescript/src/index.ts](../../../../sources/kreuzberg-dev__kreuzberg/packages/typescript/src/index.ts)<br>[packages/node/src/index.d.ts](../../../../sources/kreuzberg-dev__kreuzberg/packages/node/src/index.d.ts)<br>[packages/go/v5/cmd/download_ffi/main.go](../../../../sources/kreuzberg-dev__kreuzberg/packages/go/v5/cmd/download_ffi/main.go) |
| agentRuntime | 1299 | [tools/snippet-runner/Cargo.toml](../../../../sources/kreuzberg-dev__kreuzberg/tools/snippet-runner/Cargo.toml)<br>[tools/snippet-runner/src/discovery.rs](../../../../sources/kreuzberg-dev__kreuzberg/tools/snippet-runner/src/discovery.rs)<br>[tools/snippet-runner/src/error.rs](../../../../sources/kreuzberg-dev__kreuzberg/tools/snippet-runner/src/error.rs)<br>[tools/snippet-runner/src/lib.rs](../../../../sources/kreuzberg-dev__kreuzberg/tools/snippet-runner/src/lib.rs)<br>[tools/snippet-runner/src/main.rs](../../../../sources/kreuzberg-dev__kreuzberg/tools/snippet-runner/src/main.rs)<br>[tools/snippet-runner/src/output.rs](../../../../sources/kreuzberg-dev__kreuzberg/tools/snippet-runner/src/output.rs)<br>[tools/snippet-runner/src/parser.rs](../../../../sources/kreuzberg-dev__kreuzberg/tools/snippet-runner/src/parser.rs)<br>[tools/snippet-runner/src/runner.rs](../../../../sources/kreuzberg-dev__kreuzberg/tools/snippet-runner/src/runner.rs) |
| mcp | 57 | [docs/snippets/zig/mcp/mcp_custom_client.md](../../../../sources/kreuzberg-dev__kreuzberg/docs/snippets/zig/mcp/mcp_custom_client.md)<br>[docs/snippets/zig/mcp/mcp_server_start.md](../../../../sources/kreuzberg-dev__kreuzberg/docs/snippets/zig/mcp/mcp_server_start.md)<br>[docs/snippets/wasm/mcp/mcp_custom_client.md](../../../../sources/kreuzberg-dev__kreuzberg/docs/snippets/wasm/mcp/mcp_custom_client.md)<br>[docs/snippets/wasm/mcp/mcp_server_start.md](../../../../sources/kreuzberg-dev__kreuzberg/docs/snippets/wasm/mcp/mcp_server_start.md)<br>[docs/snippets/typescript/mcp/client.md](../../../../sources/kreuzberg-dev__kreuzberg/docs/snippets/typescript/mcp/client.md)<br>[docs/snippets/typescript/mcp/mcp_custom_client.md](../../../../sources/kreuzberg-dev__kreuzberg/docs/snippets/typescript/mcp/mcp_custom_client.md)<br>[docs/snippets/typescript/mcp/mcp_server_start.md](../../../../sources/kreuzberg-dev__kreuzberg/docs/snippets/typescript/mcp/mcp_server_start.md)<br>[docs/snippets/typescript/mcp/server.md](../../../../sources/kreuzberg-dev__kreuzberg/docs/snippets/typescript/mcp/server.md) |
| retrieval | 283 | [tools/benchmark-harness/src/embed_benchmark.rs](../../../../sources/kreuzberg-dev__kreuzberg/tools/benchmark-harness/src/embed_benchmark.rs)<br>[tools/benchmark-harness/fixtures/md/wiki_duck.html.json](../../../../sources/kreuzberg-dev__kreuzberg/tools/benchmark-harness/fixtures/md/wiki_duck.html.json)<br>[tools/benchmark-harness/fixtures/md/wiki.md.json](../../../../sources/kreuzberg-dev__kreuzberg/tools/benchmark-harness/fixtures/md/wiki.md.json)<br>[tools/benchmark-harness/fixtures/json/wiki_duck.html.json](../../../../sources/kreuzberg-dev__kreuzberg/tools/benchmark-harness/fixtures/json/wiki_duck.html.json)<br>[tools/benchmark-harness/fixtures/html/wiki_duck.json](../../../../sources/kreuzberg-dev__kreuzberg/tools/benchmark-harness/fixtures/html/wiki_duck.json)<br>[packages/typescript/src/index.ts](../../../../sources/kreuzberg-dev__kreuzberg/packages/typescript/src/index.ts)<br>[packages/node/index.d.ts](../../../../sources/kreuzberg-dev__kreuzberg/packages/node/index.d.ts)<br>[packages/node/src/index.d.ts](../../../../sources/kreuzberg-dev__kreuzberg/packages/node/src/index.d.ts) |
| spec | 29 | [e2e/ruby/spec/async_spec.rb](../../../../sources/kreuzberg-dev__kreuzberg/e2e/ruby/spec/async_spec.rb)<br>[e2e/ruby/spec/batch_spec.rb](../../../../sources/kreuzberg-dev__kreuzberg/e2e/ruby/spec/batch_spec.rb)<br>[e2e/ruby/spec/contract_spec.rb](../../../../sources/kreuzberg-dev__kreuzberg/e2e/ruby/spec/contract_spec.rb)<br>[e2e/ruby/spec/detection_spec.rb](../../../../sources/kreuzberg-dev__kreuzberg/e2e/ruby/spec/detection_spec.rb)<br>[e2e/ruby/spec/document_extractor_management_spec.rb](../../../../sources/kreuzberg-dev__kreuzberg/e2e/ruby/spec/document_extractor_management_spec.rb)<br>[e2e/ruby/spec/embed_async_pending_spec.rb](../../../../sources/kreuzberg-dev__kreuzberg/e2e/ruby/spec/embed_async_pending_spec.rb)<br>[e2e/ruby/spec/embed_extra_spec.rb](../../../../sources/kreuzberg-dev__kreuzberg/e2e/ruby/spec/embed_extra_spec.rb)<br>[e2e/ruby/spec/embedding_backend_management_spec.rb](../../../../sources/kreuzberg-dev__kreuzberg/e2e/ruby/spec/embedding_backend_management_spec.rb) |
| eval | 1954 | [tools/generate_test_fixtures/.gitignore](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/.gitignore)<br>[tools/generate_test_fixtures/pyproject.toml](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/pyproject.toml)<br>[tools/generate_test_fixtures/README.md](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/README.md)<br>[tools/generate_test_fixtures/tests/__init__.py](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/tests/__init__.py)<br>[tools/generate_test_fixtures/tests/test_generation.py](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/tests/test_generation.py)<br>[tools/generate_test_fixtures/src/generate_test_fixtures/__init__.py](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/src/generate_test_fixtures/__init__.py)<br>[tools/generate_test_fixtures/src/generate_test_fixtures/__main__.py](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/src/generate_test_fixtures/__main__.py)<br>[tools/generate_test_fixtures/src/generate_test_fixtures/diff_pairs.py](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/src/generate_test_fixtures/diff_pairs.py) |
| security | 35 | [SECURITY.md](../../../../sources/kreuzberg-dev__kreuzberg/SECURITY.md)<br>[tools/generate_test_fixtures/src/generate_test_fixtures/security_fixtures.py](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/src/generate_test_fixtures/security_fixtures.py)<br>[packages/elixir/lib/kreuzberg/security_limits.ex](../../../../sources/kreuzberg-dev__kreuzberg/packages/elixir/lib/kreuzberg/security_limits.ex)<br>[packages/elixir/lib/kreuzberg/vlm_fallback_policy.ex](../../../../sources/kreuzberg-dev__kreuzberg/packages/elixir/lib/kreuzberg/vlm_fallback_policy.ex)<br>[fixtures/contract/config_security_limits.json](../../../../sources/kreuzberg-dev__kreuzberg/fixtures/contract/config_security_limits.json)<br>[crates/kreuzberg-libheif/src/security_limits.rs](../../../../sources/kreuzberg-dev__kreuzberg/crates/kreuzberg-libheif/src/security_limits.rs)<br>[crates/kreuzberg/tests/security_validation.rs](../../../../sources/kreuzberg-dev__kreuzberg/crates/kreuzberg/tests/security_validation.rs)<br>[crates/kreuzberg/tests/security_validators.rs](../../../../sources/kreuzberg-dev__kreuzberg/crates/kreuzberg/tests/security_validators.rs) |
| ci | 67 | [scripts/ci/README.md](../../../../sources/kreuzberg-dev__kreuzberg/scripts/ci/README.md)<br>[scripts/ci/wasm/install-wasm-pack.sh](../../../../sources/kreuzberg-dev__kreuzberg/scripts/ci/wasm/install-wasm-pack.sh)<br>[scripts/ci/validate/show-disk-space.sh](../../../../sources/kreuzberg-dev__kreuzberg/scripts/ci/validate/show-disk-space.sh)<br>[scripts/ci/rust/package-cli-windows.ps1](../../../../sources/kreuzberg-dev__kreuzberg/scripts/ci/rust/package-cli-windows.ps1)<br>[scripts/ci/rust/run-unit-tests.sh](../../../../sources/kreuzberg-dev__kreuzberg/scripts/ci/rust/run-unit-tests.sh)<br>[scripts/ci/ruby/compile-extension.sh](../../../../sources/kreuzberg-dev__kreuzberg/scripts/ci/ruby/compile-extension.sh)<br>[scripts/ci/ruby/install-bundler.sh](../../../../sources/kreuzberg-dev__kreuzberg/scripts/ci/ruby/install-bundler.sh)<br>[scripts/ci/ruby/install-ruby-deps.sh](../../../../sources/kreuzberg-dev__kreuzberg/scripts/ci/ruby/install-ruby-deps.sh) |
| container | 19 | [docker/Dockerfile.cli](../../../../sources/kreuzberg-dev__kreuzberg/docker/Dockerfile.cli)<br>[docker/Dockerfile.core](../../../../sources/kreuzberg-dev__kreuzberg/docker/Dockerfile.core)<br>[docker/Dockerfile.full](../../../../sources/kreuzberg-dev__kreuzberg/docker/Dockerfile.full)<br>[docker/Dockerfile.musl-build](../../../../sources/kreuzberg-dev__kreuzberg/docker/Dockerfile.musl-build)<br>[docker/Dockerfile.musl-ffi](../../../../sources/kreuzberg-dev__kreuzberg/docker/Dockerfile.musl-ffi)<br>[docker/Dockerfile.musl-rustler](../../../../sources/kreuzberg-dev__kreuzberg/docker/Dockerfile.musl-rustler)<br>[charts/kreuzberg/.helmignore](../../../../sources/kreuzberg-dev__kreuzberg/charts/kreuzberg/.helmignore)<br>[charts/kreuzberg/artifacthub-repo.yml](../../../../sources/kreuzberg-dev__kreuzberg/charts/kreuzberg/artifacthub-repo.yml) |
| instruction | 0 | 명확하지 않음 |
| docs | 2112 | [README.md](../../../../sources/kreuzberg-dev__kreuzberg/README.md)<br>[tools/generate_test_fixtures/README.md](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/README.md)<br>[tools/benchmark-harness/README.md](../../../../sources/kreuzberg-dev__kreuzberg/tools/benchmark-harness/README.md)<br>[tools/benchmark-harness/python_baselines/README.md](../../../../sources/kreuzberg-dev__kreuzberg/tools/benchmark-harness/python_baselines/README.md)<br>[tools/benchmark-harness/fixtures/rst/readme.json](../../../../sources/kreuzberg-dev__kreuzberg/tools/benchmark-harness/fixtures/rst/readme.json)<br>[tools/benchmark-harness/fixtures/org/readme.json](../../../../sources/kreuzberg-dev__kreuzberg/tools/benchmark-harness/fixtures/org/readme.json)<br>[tools/benchmark-harness/fixtures/doc/duplicate-paragraphs.json](../../../../sources/kreuzberg-dev__kreuzberg/tools/benchmark-harness/fixtures/doc/duplicate-paragraphs.json)<br>[tools/benchmark-harness/fixtures/doc/fake-doc-emphasized-text.json](../../../../sources/kreuzberg-dev__kreuzberg/tools/benchmark-harness/fixtures/doc/fake-doc-emphasized-text.json) |
| config | 60 | [Cargo.lock](../../../../sources/kreuzberg-dev__kreuzberg/Cargo.lock)<br>[Cargo.toml](../../../../sources/kreuzberg-dev__kreuzberg/Cargo.toml)<br>[package.json](../../../../sources/kreuzberg-dev__kreuzberg/package.json)<br>[pnpm-workspace.yaml](../../../../sources/kreuzberg-dev__kreuzberg/pnpm-workspace.yaml)<br>[pyproject.toml](../../../../sources/kreuzberg-dev__kreuzberg/pyproject.toml)<br>[tsconfig.json](../../../../sources/kreuzberg-dev__kreuzberg/tsconfig.json)<br>[uv.lock](../../../../sources/kreuzberg-dev__kreuzberg/uv.lock)<br>[tools/snippet-runner/Cargo.toml](../../../../sources/kreuzberg-dev__kreuzberg/tools/snippet-runner/Cargo.toml) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 1954 | [tools/generate_test_fixtures/.gitignore](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/.gitignore)<br>[tools/generate_test_fixtures/pyproject.toml](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/pyproject.toml)<br>[tools/generate_test_fixtures/README.md](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/README.md)<br>[tools/generate_test_fixtures/tests/__init__.py](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/tests/__init__.py)<br>[tools/generate_test_fixtures/tests/test_generation.py](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/tests/test_generation.py)<br>[tools/generate_test_fixtures/src/generate_test_fixtures/__init__.py](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/src/generate_test_fixtures/__init__.py) |
| CI workflow | 67 | [scripts/ci/README.md](../../../../sources/kreuzberg-dev__kreuzberg/scripts/ci/README.md)<br>[scripts/ci/wasm/install-wasm-pack.sh](../../../../sources/kreuzberg-dev__kreuzberg/scripts/ci/wasm/install-wasm-pack.sh)<br>[scripts/ci/validate/show-disk-space.sh](../../../../sources/kreuzberg-dev__kreuzberg/scripts/ci/validate/show-disk-space.sh)<br>[scripts/ci/rust/package-cli-windows.ps1](../../../../sources/kreuzberg-dev__kreuzberg/scripts/ci/rust/package-cli-windows.ps1)<br>[scripts/ci/rust/run-unit-tests.sh](../../../../sources/kreuzberg-dev__kreuzberg/scripts/ci/rust/run-unit-tests.sh)<br>[scripts/ci/ruby/compile-extension.sh](../../../../sources/kreuzberg-dev__kreuzberg/scripts/ci/ruby/compile-extension.sh) |
| 컨테이너/배포 | 19 | [docker/Dockerfile.cli](../../../../sources/kreuzberg-dev__kreuzberg/docker/Dockerfile.cli)<br>[docker/Dockerfile.core](../../../../sources/kreuzberg-dev__kreuzberg/docker/Dockerfile.core)<br>[docker/Dockerfile.full](../../../../sources/kreuzberg-dev__kreuzberg/docker/Dockerfile.full)<br>[docker/Dockerfile.musl-build](../../../../sources/kreuzberg-dev__kreuzberg/docker/Dockerfile.musl-build)<br>[docker/Dockerfile.musl-ffi](../../../../sources/kreuzberg-dev__kreuzberg/docker/Dockerfile.musl-ffi)<br>[docker/Dockerfile.musl-rustler](../../../../sources/kreuzberg-dev__kreuzberg/docker/Dockerfile.musl-rustler) |
| 보안/정책 | 35 | [SECURITY.md](../../../../sources/kreuzberg-dev__kreuzberg/SECURITY.md)<br>[tools/generate_test_fixtures/src/generate_test_fixtures/security_fixtures.py](../../../../sources/kreuzberg-dev__kreuzberg/tools/generate_test_fixtures/src/generate_test_fixtures/security_fixtures.py)<br>[packages/elixir/lib/kreuzberg/security_limits.ex](../../../../sources/kreuzberg-dev__kreuzberg/packages/elixir/lib/kreuzberg/security_limits.ex)<br>[packages/elixir/lib/kreuzberg/vlm_fallback_policy.ex](../../../../sources/kreuzberg-dev__kreuzberg/packages/elixir/lib/kreuzberg/vlm_fallback_policy.ex)<br>[fixtures/contract/config_security_limits.json](../../../../sources/kreuzberg-dev__kreuzberg/fixtures/contract/config_security_limits.json)<br>[crates/kreuzberg-libheif/src/security_limits.rs](../../../../sources/kreuzberg-dev__kreuzberg/crates/kreuzberg-libheif/src/security_limits.rs) |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | agent instruction 파일이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `docs/snippets/zig/mcp/mcp_custom_client.md`, `docs/snippets/zig/mcp/mcp_server_start.md`, `docs/snippets/wasm/mcp/mcp_custom_client.md`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `tools/snippet-runner/src/main.rs`, `tools/generate_test_fixtures/src/generate_test_fixtures/__main__.py`.
3. agent/tool runtime 매핑: `tools/snippet-runner/Cargo.toml`, `tools/snippet-runner/src/discovery.rs`, `tools/snippet-runner/src/error.rs`.
4. retrieval/memory/indexing 확인: `tools/benchmark-harness/src/embed_benchmark.rs`, `tools/benchmark-harness/fixtures/md/wiki_duck.html.json`, `tools/benchmark-harness/fixtures/md/wiki.md.json`.
5. test/eval 파일로 동작 검증: `tools/generate_test_fixtures/.gitignore`, `tools/generate_test_fixtures/pyproject.toml`, `tools/generate_test_fixtures/README.md`.

## 기존 레포 인사이트

에이전트 하네스/MCP 관점에서 A polyglot document intelligence framework with a Rust core. Extract text, metadata, images, and structured information . 핵심 구조 신호는 Rust, package.json, pyproject.toml, Cargo.toml, README.md, LICENSE이며, 소스+보고서 근거 수준으로 고신호 후보로 읽는 것이 좋습니다.

## 기존 평가

korea 신호의 에이전트 하네스/MCP 레포입니다. 활용 관점은 도구/하네스 패턴 참고이고, 후속 확인 포인트는 더 깊은 구조 스캔 필요입니다.
