# Muvon/octocode 소스 딥다이브

생성 시각: 2026-06-18T15:31:35.584Z

Semantic code searcher and codebase utility

## 요약

- 조사 단위: `sources/Muvon__octocode` 로컬 클론을 실제 파일 트리 기준으로 분석한 레포별 딥다이브입니다.
- 포함 범위: 158 files, 21 directories, depth score 107, key references 12개입니다.
- 탐색 방식: 읽기 계획을 먼저 보고, 근거 bucket과 핵심 소스 참조의 파일 링크를 따라가면 됩니다.

## 총평

LLM 위키/RAG/지식베이스 관점에서 cli-first, api/server, agent/tool runtime 구조로 읽힌다. 핵심 소스 근거는 retrieval=website/index.html, src/store/graphrag.rs, src/store/vector_optimizer.rs이고, 의존성 단서는 mcp, 검증/운영 단서는 test/eval 경로가 보임, CI 워크플로가 보임, 컨테이너/배포 파일이 보임이다. 이 판단은 README 메타데이터가 아니라 로컬 소스의 12개 파일 경로를 직접 스캔해야 확인된다. 기존 레포 평가 관점은 지식/RAG 패턴 참고이며, 이 문서는 README/메타데이터가 아니라 실제 소스 경로를 기준으로 후속 확인 지점을 분리합니다.

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
| 레포 | Muvon/octocode |
| 주제 | LLM 위키/RAG/지식베이스 / LLM 위키/RAG/지식베이스 |
| Region | global |
| Language | Rust |
| Stars | 402 |
| Forks | 40 |
| License | 없음 |
| 성숙도 | 안정 |
| 근거 수준 | 소스+보고서 |
| 소스 | [sources/Muvon__octocode](../../../../sources/Muvon__octocode) |
| 기존 보고서 | [reports/global-trending/repositories/Muvon__octocode.md](../../../global-trending/repositories/Muvon__octocode.md) |


## 구조 지도

| 항목 | 값 |
| --- | --- |
| 파일 / 디렉터리 | 158 / 21 |
| 관측 최대 깊이 | 4 |
| 상위 디렉터리 | .cargo, .github, benchmark, config-templates, doc, scripts, src, website |
| 상위 확장자 | .rs: 110, .md: 17, (none): 7, .toml: 5, .sh: 4, .yml: 4, .csv: 2, .svg: 2, .css: 1, .html: 1, .js: 1, .json: 1 |
| 소스 패턴 | cli-first, api/server, agent/tool runtime, retrieval/vector path, spec/docs-driven, eval/test harness, containerized deploy |

### 컴포넌트

| 컴포넌트 | 역할 | 신호 수 |
| --- | --- | ---: |
| src | source boundary | 39 |
| .github | ci surface | 1 |
| benchmark | validation surface | 1 |
| config-templates | top-level component | 1 |
| doc | documentation surface | 1 |
| scripts | top-level component | 1 |
| website | documentation surface | 1 |


## 실행 방식

| 카테고리 | 출처 | 이름 | 명령 |
| --- | --- | --- | --- |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | help | make help |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install-deps | make install-deps |
| utility | Makefile | .PHONY | make .PHONY |
| utility | Makefile | install-targets | make install-targets |
| utility | Makefile | .PHONY | make .PHONY |
| quality | Makefile | check | make check |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build | make build |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-release | make build-release |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-static | make build-static |
| utility | Makefile | .PHONY | make .PHONY |
| build | Makefile | build-all | make build-all |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test | make test |
| utility | Makefile | .PHONY | make .PHONY |
| test | Makefile | test-verbose | make test-verbose |


## 의존성 스택

| 그룹 | 감지된 단서 |
| --- | --- |
| llmProviders | 없음 |
| agentProtocols | mcp |
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
| retrieval | [website/index.html](../../../../sources/Muvon__octocode/website/index.html) | retrieval signal |
| retrieval | [src/store/graphrag.rs](../../../../sources/Muvon__octocode/src/store/graphrag.rs) | retrieval signal |
| retrieval | [src/store/vector_optimizer.rs](../../../../sources/Muvon__octocode/src/store/vector_optimizer.rs) | retrieval signal |
| retrieval | [src/mcp/graphrag.rs](../../../../sources/Muvon__octocode/src/mcp/graphrag.rs) | retrieval signal |
| entrypoints | [server.json](../../../../sources/Muvon__octocode/server.json) | entrypoints signal |
| entrypoints | [src/main.rs](../../../../sources/Muvon__octocode/src/main.rs) | entrypoints signal |
| entrypoints | [src/mcp/server.rs](../../../../sources/Muvon__octocode/src/mcp/server.rs) | entrypoints signal |
| docs | [README.md](../../../../sources/Muvon__octocode/README.md) | docs signal |
| docs | [website/script.js](../../../../sources/Muvon__octocode/website/script.js) | docs signal |
| docs | [website/styles.css](../../../../sources/Muvon__octocode/website/styles.css) | docs signal |
| eval | [src/store/hybrid_tests.rs](../../../../sources/Muvon__octocode/src/store/hybrid_tests.rs) | eval signal |
| eval | [src/indexer/languages/java_test.rs](../../../../sources/Muvon__octocode/src/indexer/languages/java_test.rs) | eval signal |


## 근거 Bucket

| 근거 bucket | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| entrypoints | 3 | [server.json](../../../../sources/Muvon__octocode/server.json)<br>[src/main.rs](../../../../sources/Muvon__octocode/src/main.rs)<br>[src/mcp/server.rs](../../../../sources/Muvon__octocode/src/mcp/server.rs) |
| agentRuntime | 1 | [src/mcp/lsp/tools.rs](../../../../sources/Muvon__octocode/src/mcp/lsp/tools.rs) |
| mcp | 17 | [src/mcp/graphrag.rs](../../../../sources/Muvon__octocode/src/mcp/graphrag.rs)<br>[src/mcp/logging.rs](../../../../sources/Muvon__octocode/src/mcp/logging.rs)<br>[src/mcp/mod.rs](../../../../sources/Muvon__octocode/src/mcp/mod.rs)<br>[src/mcp/multi.rs](../../../../sources/Muvon__octocode/src/mcp/multi.rs)<br>[src/mcp/semantic_code.rs](../../../../sources/Muvon__octocode/src/mcp/semantic_code.rs)<br>[src/mcp/server.rs](../../../../sources/Muvon__octocode/src/mcp/server.rs)<br>[src/mcp/structural.rs](../../../../sources/Muvon__octocode/src/mcp/structural.rs)<br>[src/mcp/types.rs](../../../../sources/Muvon__octocode/src/mcp/types.rs) |
| retrieval | 16 | [website/index.html](../../../../sources/Muvon__octocode/website/index.html)<br>[src/store/graphrag.rs](../../../../sources/Muvon__octocode/src/store/graphrag.rs)<br>[src/store/vector_optimizer.rs](../../../../sources/Muvon__octocode/src/store/vector_optimizer.rs)<br>[src/mcp/graphrag.rs](../../../../sources/Muvon__octocode/src/mcp/graphrag.rs)<br>[src/indexer/graph_optimization.rs](../../../../sources/Muvon__octocode/src/indexer/graph_optimization.rs)<br>[src/indexer/graphrag/ai.rs](../../../../sources/Muvon__octocode/src/indexer/graphrag/ai.rs)<br>[src/indexer/graphrag/builder.rs](../../../../sources/Muvon__octocode/src/indexer/graphrag/builder.rs)<br>[src/indexer/graphrag/database.rs](../../../../sources/Muvon__octocode/src/indexer/graphrag/database.rs) |
| spec | 1 | [doc/ARCHITECTURE.md](../../../../sources/Muvon__octocode/doc/ARCHITECTURE.md) |
| eval | 11 | [src/store/hybrid_tests.rs](../../../../sources/Muvon__octocode/src/store/hybrid_tests.rs)<br>[src/indexer/languages/java_test.rs](../../../../sources/Muvon__octocode/src/indexer/languages/java_test.rs)<br>[src/indexer/languages/php_test.rs](../../../../sources/Muvon__octocode/src/indexer/languages/php_test.rs)<br>[src/indexer/languages/swift_test.rs](../../../../sources/Muvon__octocode/src/indexer/languages/swift_test.rs)<br>[src/indexer/graphrag/tests.rs](../../../../sources/Muvon__octocode/src/indexer/graphrag/tests.rs)<br>[scripts/test-completions.sh](../../../../sources/Muvon__octocode/scripts/test-completions.sh)<br>[benchmark/code.csv](../../../../sources/Muvon__octocode/benchmark/code.csv)<br>[benchmark/config.toml](../../../../sources/Muvon__octocode/benchmark/config.toml) |
| security | 0 | 명확하지 않음 |
| ci | 4 | [.github/workflows/ci.yml](../../../../sources/Muvon__octocode/.github/workflows/ci.yml)<br>[.github/workflows/dependencies.yml](../../../../sources/Muvon__octocode/.github/workflows/dependencies.yml)<br>[.github/workflows/deploy-website.yml](../../../../sources/Muvon__octocode/.github/workflows/deploy-website.yml)<br>[.github/workflows/release.yml](../../../../sources/Muvon__octocode/.github/workflows/release.yml) |
| container | 1 | [Dockerfile](../../../../sources/Muvon__octocode/Dockerfile) |
| instruction | 0 | 명확하지 않음 |
| docs | 17 | [README.md](../../../../sources/Muvon__octocode/README.md)<br>[website/index.html](../../../../sources/Muvon__octocode/website/index.html)<br>[website/script.js](../../../../sources/Muvon__octocode/website/script.js)<br>[website/styles.css](../../../../sources/Muvon__octocode/website/styles.css)<br>[doc/ADVANCED_USAGE.md](../../../../sources/Muvon__octocode/doc/ADVANCED_USAGE.md)<br>[doc/API_KEYS.md](../../../../sources/Muvon__octocode/doc/API_KEYS.md)<br>[doc/ARCHITECTURE.md](../../../../sources/Muvon__octocode/doc/ARCHITECTURE.md)<br>[doc/COMMANDS.md](../../../../sources/Muvon__octocode/doc/COMMANDS.md) |
| config | 3 | [Cargo.lock](../../../../sources/Muvon__octocode/Cargo.lock)<br>[Cargo.toml](../../../../sources/Muvon__octocode/Cargo.toml)<br>[Makefile](../../../../sources/Muvon__octocode/Makefile) |


## 검증 표면

| 표면 | Hit 수 | 대표 경로 |
| --- | ---: | --- |
| 테스트/평가 | 11 | [src/store/hybrid_tests.rs](../../../../sources/Muvon__octocode/src/store/hybrid_tests.rs)<br>[src/indexer/languages/java_test.rs](../../../../sources/Muvon__octocode/src/indexer/languages/java_test.rs)<br>[src/indexer/languages/php_test.rs](../../../../sources/Muvon__octocode/src/indexer/languages/php_test.rs)<br>[src/indexer/languages/swift_test.rs](../../../../sources/Muvon__octocode/src/indexer/languages/swift_test.rs)<br>[src/indexer/graphrag/tests.rs](../../../../sources/Muvon__octocode/src/indexer/graphrag/tests.rs)<br>[scripts/test-completions.sh](../../../../sources/Muvon__octocode/scripts/test-completions.sh) |
| CI workflow | 4 | [.github/workflows/ci.yml](../../../../sources/Muvon__octocode/.github/workflows/ci.yml)<br>[.github/workflows/dependencies.yml](../../../../sources/Muvon__octocode/.github/workflows/dependencies.yml)<br>[.github/workflows/deploy-website.yml](../../../../sources/Muvon__octocode/.github/workflows/deploy-website.yml)<br>[.github/workflows/release.yml](../../../../sources/Muvon__octocode/.github/workflows/release.yml) |
| 컨테이너/배포 | 1 | [Dockerfile](../../../../sources/Muvon__octocode/Dockerfile) |
| 보안/정책 | 0 | 명확하지 않음 |
| 에이전트 지시문 | 0 | 명확하지 않음 |


## 위험 신호와 후속 확인

| 위험 카테고리 | 발견 사항 |
| --- | --- |
| architecture | 없음 |
| operation | 없음 |
| security | security/policy 표면이 명확하지 않음 |
| evidenceGaps | 없음 |


## 읽기 계획

1. 핵심 참조에서 시작: `website/index.html`, `src/store/graphrag.rs`, `src/store/vector_optimizer.rs`.
2. entrypoint를 따라 실행 흐름 확인: `server.json`, `src/main.rs`, `src/mcp/server.rs`.
3. agent/tool runtime 매핑: `src/mcp/lsp/tools.rs`.
4. retrieval/memory/indexing 확인: `website/index.html`, `src/store/graphrag.rs`, `src/store/vector_optimizer.rs`.
5. test/eval 파일로 동작 검증: `src/store/hybrid_tests.rs`, `src/indexer/languages/java_test.rs`, `src/indexer/languages/php_test.rs`.

## 기존 레포 인사이트

LLM 위키/RAG/지식베이스 관점에서 Semantic code searcher and codebase utility. 핵심 구조 신호는 Rust, Cargo.toml, Dockerfile, Makefile, README.md, LICENSE이며, 소스+보고서 근거 수준으로 안정 후보로 읽는 것이 좋습니다.

## 기존 평가

global 신호의 LLM 위키/RAG/지식베이스 레포입니다. 활용 관점은 지식/RAG 패턴 참고이고, 후속 확인 포인트는 테스트 신호가 명확하지 않음, 라이선스 메타데이터 없음, 더 깊은 구조 스캔 필요입니다.
